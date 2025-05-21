// scripts/prerender.cjs
const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Configuración Global para el Script
const PORT = 5173; 
const OUTPUT_DIR = path.resolve(__dirname, '../dist');
const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/servicios/identidad-de-marca',
  '/servicios/desarrollo-web',
  '/servicios/gestion-redes-sociales',
  '/servicios/publicidad-pagada-ppc',
  '/servicios/desarrollo-aplicaciones',
  '/servicios/e-commerce',
  '/servicios/produccion-audiovisual',
  '/servicios/seo-marketing-contenidos'
];

async function findLocalChromeExecutable() {
  let chromePath = null;
  if (process.platform === 'win32') {
    const paths = [
      process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe') : null,
      process.env.ProgramW6432 ? path.join(process.env.ProgramW6432, "Google/Chrome/Application/chrome.exe") : null,
      process.env.ProgramFilesX86 ? path.join(process.env.ProgramFilesX86, "Google/Chrome/Application/chrome.exe") : null,
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    ].filter(Boolean);
    chromePath = paths.find(p => fs.existsSync(p)) || null;
  } else if (process.platform === 'darwin') {
    chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    if (!fs.existsSync(chromePath)) chromePath = null;
  } else if (process.platform === 'linux') {
    const paths = ['/usr/bin/google-chrome-stable', '/usr/bin/google-chrome', '/usr/bin/chromium-browser', '/usr/bin/chromium', '/snap/bin/chromium'];
    chromePath = paths.find(p => fs.existsSync(p)) || null;
  }
  return chromePath;
}

async function prerender() {
  console.log('🚀 Iniciando prerenderizado...');
  let serveProcess = null;
  let browser = null;
  let mainProcessExitCode = 0; // 0 para éxito, 1 para error

  try {
    console.log(`📡 Iniciando servidor local en puerto ${PORT} para la carpeta ${OUTPUT_DIR}...`);
    const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    serveProcess = spawn(npxCmd, ['serve', OUTPUT_DIR, '-p', PORT.toString()], { 
      shell: true, // Mantenemos shell:true que ayudó con EINVAL
      // stdio: 'inherit' 
    });

    let serverReady = false;
    let serverLogBuffer = ''; 
    serveProcess.stdout.on('data', (data) => {
      const output = data.toString();
      serverLogBuffer += output;
      if (!serverReady && (serverLogBuffer.includes('Accepting connections') || serverLogBuffer.includes('Serving!') || serverLogBuffer.includes(`Local:    http://localhost:${PORT}`))) {
        serverReady = true;
        console.log('✅ Servidor local parece estar listo.');
      }
    });
    serveProcess.stderr.on('data', (data) => console.error(`[Serve stderr]: ${data.toString().trim()}`));
    serveProcess.on('error', (err) => console.error('❌ Error al iniciar servidor (spawn error):', err));
    serveProcess.on('exit', (code, signal) => {
      if (code !== 0 && !serveProcess.killed) console.warn(`Servidor local terminó inesperadamente (código: ${code}, señal: ${signal})`);
    });

    let retries = 40;
    while (!serverReady && retries > 0 && !serveProcess.killed) {
      await new Promise(resolve => setTimeout(resolve, 500));
      retries--;
    }
    if (!serverReady) {
        // Intenta una última verificación del log acumulado
        if (serverLogBuffer.includes('Accepting connections') || serverLogBuffer.includes('Serving!') || serverLogBuffer.includes(`Local:    http://localhost:${PORT}`)) {
            console.log('✅ Servidor local detectado como listo en la segunda verificación.');
        } else {
            throw new Error(`El servidor local no pudo iniciarse o no emitió la señal de "listo" a tiempo. Últimos logs del servidor:\n${serverLogBuffer}`);
        }
    }
    
    console.log('🖥️ Lanzando navegador headless...');
    let finalExecutablePath = await findLocalChromeExecutable();

    if (finalExecutablePath) {
      console.log(`ℹ️ Usando Chrome local encontrado en: ${finalExecutablePath}`);
    } else {
      console.warn(`⚠️ No se encontró Chrome local en rutas estándar. Intentando Chromium del paquete @sparticuz/chromium...`);
      finalExecutablePath = await chromium.executablePath();
      if (finalExecutablePath && typeof finalExecutablePath === 'string' && fs.existsSync(finalExecutablePath)) {
        console.log(`ℹ️ Usando Chromium del paquete en: ${finalExecutablePath}`);
      } else {
        console.error('❌ No se pudo encontrar un ejecutable de Chromium válido (ni local, ni del paquete).');
        throw new Error('Chromium ejecutable no encontrado');
      }
    }
    
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: finalExecutablePath,
      headless: chromium.headless,
    });
    console.log(`✅ Navegador Puppeteer lanzado (Versión: ${await browser.version()})`);

    for (const route of ROUTES) {
      console.log(`🔄 Procesando ruta: ${route}`);
      const page = await browser.newPage();
      const urlToPrerender = `http://localhost:${PORT}${route}`;
      let filePath = route === '/' ? 'index.html' : route.substring(1);
      if (filePath.endsWith('/')) filePath += 'index.html';
      else if (path.extname(filePath) === '') filePath = path.join(filePath, 'index.html');
      const outputPath = path.join(OUTPUT_DIR, filePath);
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      console.log(`🔍 Prerenderizando: ${urlToPrerender} → ${outputPath}`);
      try {
        await page.goto(urlToPrerender, { waitUntil: 'networkidle0', timeout: 90000 });
        const html = await page.content();
        fs.writeFileSync(outputPath, html);
        console.log(`📄 Página ${route} prerenderizada y guardada.`);
      } catch (pageError) {
        console.error(`❌ Error al prerenderizar la ruta ${route}: ${pageError.message}`);
        // Si una página falla, marcamos que hubo un error general, pero continuamos
        mainProcessExitCode = 1; 
      } finally {
        if (page && !page.isClosed()) await page.close();
      }
    }
    
    // Si llegamos aquí sin errores fatales en el flujo principal, pero alguna página pudo fallar.
    if (mainProcessExitCode === 0) {
        console.log('✅ Prerenderizado de todas las rutas (o las que no fallaron) completado.');
    } else {
        console.warn('⚠️ Prerenderizado completado, pero algunas rutas individuales pudieron haber fallado (ver logs arriba).');
    }

  } catch (error) { // Errores fatales que impiden continuar (ej. servidor no arranca, browser no lanza)
    console.error('❌ Error FATAL durante el proceso de prerenderizado:', error);
    mainProcessExitCode = 1;
  } finally {
    if (browser) {
      console.log('🚪 Cerrando navegador...');
      await browser.close();
      console.log('✅ Navegador cerrado.');
    }
    if (serveProcess && !serveProcess.killed) {
      console.log('🛑 Deteniendo servidor local...');
      serveProcess.kill('SIGTERM');
      await new Promise(resolve => setTimeout(resolve, 500));
      if (!serveProcess.killed) {
        console.warn('Servidor no se detuvo con SIGTERM, intentando SIGKILL...');
        serveProcess.kill('SIGKILL');
      }
      console.log('✅ Servidor local detenido.');
    }
    
    // Espera final para asegurar que los procesos hijos se cierren antes de que el script principal termine
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    if (mainProcessExitCode === 0) {
      console.log('🎉 Script de prerrenderizado finalizado con éxito.');
      process.exit(0); // Salida exitosa
    } else {
      console.log('🔥 Script de prerrenderizado finalizado con errores.');
      process.exit(1); // Salida con error
    }
  }
}

prerender();