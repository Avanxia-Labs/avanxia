// scripts/prerender.cjs
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Configuración Global para el Script
const PORT = 5173; // Puerto para el servidor local
const OUTPUT_DIR = path.resolve(__dirname, '../dist'); // Directorio de salida del build
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
  // Considera añadir '/precios' y '/soluciones' (landing de categorías) si las mantienes y quieres prerenderizarlas
];

async function prerender() {
  console.log('🚀 Iniciando prerenderizado...');
  let serveProcess = null;
  let browser = null;

  try {
    // ESTA LÍNEA USA PORT, ASÍ QUE PORT DEBE ESTAR DEFINIDO ANTES
    console.log(`📡 Iniciando servidor local en puerto ${PORT} para la carpeta ${OUTPUT_DIR}...`);
    
    const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
    
    serveProcess = spawn(npxCmd, ['serve', OUTPUT_DIR, '-p', PORT.toString()], {
      shell: true,
      // stdio: 'inherit' 
    });

    let serverReady = false;
    let serverLog = '';
    serveProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[Serve stdout]: ${output.trim()}`);
      if (!serverReady && (serverLog.includes('Accepting connections') || serverLog.includes('Serving!') || serverLog.includes(`Local:    http://localhost:${PORT}`))) {
        serverReady = true;
        console.log('✅ Servidor local parece estar listo.');
      }
      serverLog += output; // Acumular después de la comprobación para el primer mensaje
    });

    serveProcess.stderr.on('data', (data) => {
      console.error(`[Serve stderr]: ${data.toString().trim()}`);
    });

    serveProcess.on('error', (error) => {
      console.error('❌ Error al intentar iniciar el servidor local (evento "error" del spawn):', error);
    });

    serveProcess.on('exit', (code, signal) => {
        if (code !== 0 && !serveProcess.killed) { 
            console.warn(`Servidor local terminó inesperadamente con código ${code} y señal ${signal}`);
        }
    });
    
    let retries = 20; 
    while (!serverReady && retries > 0 && !serveProcess.killed) {
      console.log(`⏳ Esperando al servidor local... (intentos restantes: ${retries})`);
      await new Promise(resolve => setTimeout(resolve, 500));
      retries--;
    }

    if (!serverReady) {
      // Intenta una última verificación del log acumulado, a veces el mensaje de listo llega fragmentado
      if (serverLog.includes('Accepting connections') || serverLog.includes('Serving!') || serverLog.includes(`Local:    http://localhost:${PORT}`)) {
        console.log('✅ Servidor local detectado como listo en la segunda verificación.');
        serverReady = true;
      } else {
        throw new Error(`El servidor local no pudo iniciarse o no emitió la señal de "listo" a tiempo. Últimos logs del servidor: ${serverLog}`);
      }
    }
    
    console.log('🖥️ Lanzando navegador headless...');
    let executablePath = null; // Inicializar como null
    if (process.platform === 'win32') {
      const possiblePathsWindows = [
        'C:/Program Files/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      ];
      executablePath = possiblePathsWindows.find(p => fs.existsSync(p)) || null;
    } else if (process.platform === 'darwin') {
      const possiblePathMac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
      if (fs.existsSync(possiblePathMac)) executablePath = possiblePathMac;
    } else if (process.platform === 'linux') {
      const possiblePathsLinux = [
        '/usr/bin/google-chrome-stable',
        '/usr/bin/google-chrome',
        '/usr/bin/chromium-browser',
        '/snap/bin/chromium',
      ];
      executablePath = possiblePathsLinux.find(p => fs.existsSync(p)) || null;
    }

    if (executablePath) {
      console.log(`ℹ️ Usando Chrome/Chromium instalado en: ${executablePath}`);
    } else {
      console.warn(`⚠️ ATENCIÓN: No se encontró una instalación de Chrome en rutas estándar. Puppeteer intentará usar su Chromium descargado.`);
    }

    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: executablePath // Si es null, Puppeteer usa su default
    });
    const browserVersion = await browser.version(); // Renombré para evitar conflicto con prerenderVersion
    console.log(`✅ Navegador Puppeteer lanzado (Versión del navegador: ${browserVersion})`);

    for (const route of ROUTES) {
      const page = await browser.newPage();
      const urlToPrerender = `http://localhost:${PORT}${route}`;
      
      let filePath = route === '/' ? 'index.html' : route.substring(1);
      if (filePath.endsWith('/')) {
          filePath += 'index.html';
      } else if (path.extname(filePath) === '') { // Si no tiene extensión, asumimos que es un directorio
          filePath = path.join(filePath, 'index.html');
      }
      const outputPath = path.join(OUTPUT_DIR, filePath);
      
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      console.log(`🔍 Prerenderizando: ${urlToPrerender} → ${outputPath}`);
      
      try {
        await page.goto(urlToPrerender, { waitUntil: 'networkidle0', timeout: 60000 });
        const html = await page.content();
        fs.writeFileSync(outputPath, html);
        console.log(`📄 Página ${route} prerenderizada y guardada.`);
      } catch (pageError) {
        console.error(`❌ Error al prerenderizar la ruta ${route}:`, pageError.message);
      } finally {
        await page.close();
      }
    }
    
    console.log('✅ Prerenderizado de todas las rutas completado con éxito!');

  } catch (error) {
    console.error('❌ Error principal durante el proceso de prerenderizado:', error);
    process.exitCode = 1;
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
      if (!serveProcess.killed) { serveProcess.kill('SIGKILL'); }
      console.log('✅ Servidor local detenido.');
    }
  }
}

prerender();