// scripts/prerender.cjs
const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// ... (Configuración de PORT, OUTPUT_DIR, ROUTES se mantiene igual) ...

async function prerender() {
  console.log('🚀 Iniciando prerenderizado...');
  let serveProcess = null;
  let browser = null;

  try {
    // ... (Lógica para iniciar el servidor local con spawn se mantiene igual) ...
    // (Asegúrate de que la detección de "servidor listo" funcione bien)

    console.log('🖥️ Lanzando navegador headless...');
    
    let finalExecutablePath = null;
    let localChromePath = null;

    // --- PRIORIDAD 1: Intentar Chrome Local ---
    console.log('ℹ️ Intentando encontrar instalación local de Google Chrome...');
    if (process.platform === 'win32') {
      const possiblePathsWindows = [
        'C:/Program Files/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe') : null,
        process.env.ProgramW6432 ? path.join(process.env.ProgramW6432, "Google/Chrome/Application/chrome.exe") : null,
        process.env.ProgramFilesX86 ? path.join(process.env.ProgramFilesX86, "Google/Chrome/Application/chrome.exe") : null
      ].filter(Boolean);
      localChromePath = possiblePathsWindows.find(p => fs.existsSync(p)) || null;
    } else if (process.platform === 'darwin') {
      localChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
      if (!fs.existsSync(localChromePath)) localChromePath = null;
    } else if (process.platform === 'linux') {
      const possiblePathsLinux = [ /* ... tus rutas linux ... */ ];
      localChromePath = possiblePathsLinux.find(p => fs.existsSync(p)) || null;
    }

    if (localChromePath) {
        console.log(`✅ Usando Chrome local encontrado en: ${localChromePath}`);
        finalExecutablePath = localChromePath;
    } else {
        console.warn(`⚠️ No se encontró Chrome local en rutas estándar. Intentando Chromium del paquete...`);
        // --- PRIORIDAD 2: Intentar Chromium del Paquete ---
        const chromiumPackagePath = await chromium.executablePath(); // Puede ser null o una ruta
        if (chromiumPackagePath && typeof chromiumPackagePath === 'string' && fs.existsSync(chromiumPackagePath)) {
            console.log(`ℹ️ Usando Chromium del paquete en: ${chromiumPackagePath}`);
            finalExecutablePath = chromiumPackagePath;
        } else {
            console.error('❌ No se pudo encontrar un ejecutable de Chromium válido (ni local, ni del paquete).');
            console.error(`(Ruta intentada para Chromium del paquete: ${chromiumPackagePath || 'No disponible'})`);
            console.error('Asegúrate de que Google Chrome esté instalado en una ruta estándar o que @sparticuz/chromium haya podido descargar su binario (revisa permisos de pnpm y scripts de post-instalación). También puedes establecer la variable de entorno PUPPETEER_EXECUTABLE_PATH.');
            throw new Error('Chromium ejecutable no encontrado');
        }
    }
    
    browser = await puppeteer.launch({
      args: chromium.args, // Es seguro usar los args de @sparticuz/chromium
      executablePath: finalExecutablePath,
      headless: chromium.headless, 
    });

    const browserVersion = await browser.version();
    console.log(`✅ Navegador Puppeteer lanzado (Versión: ${browserVersion})`);

    // ... (Resto del script para prerenderizar rutas, guardar HTML, etc., se mantiene igual) ...
    
    console.log('✅ Prerenderizado de todas las rutas completado con éxito!');

  } catch (error) {
    console.error('❌ Error principal durante el proceso de prerenderizado:', error);
    process.exitCode = 1;
  } finally {
    // ... (Lógica para cerrar browser y serveProcess se mantiene igual) ...
  }
}

prerender();