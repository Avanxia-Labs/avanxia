const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración
const PORT = 5173;
const OUTPUT_DIR = path.resolve(__dirname, '../dist');
const ROUTES = [
  '/',
  '/nosotros',
  '/precio',
  '/contacto'
  // Añadir más rutas según necesites
];

async function prerender() {
  console.log('🚀 Iniciando prerenderizado...');

  // Iniciar servidor local
  console.log(`📡 Iniciando servidor local en puerto ${PORT}...`);
  const serveProcess = execSync(`npx serve ${OUTPUT_DIR} -p ${PORT}`, { 
    stdio: 'pipe',
    encoding: 'utf-8'
  });

  try {
    // Iniciar navegador
    console.log('🖥️ Lanzando navegador headless...');
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Prerenderizar cada ruta
    for (const route of ROUTES) {
      const outputPath = path.join(
        OUTPUT_DIR,
        route === '/' ? 'index.html' : `${route.substring(1)}/index.html`
      );
      
      // Crear directorio si no existe
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      console.log(`🔍 Prerenderizando: ${route} → ${outputPath}`);

      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0'
      });

      // Obtener HTML generado
      const html = await page.content();
      fs.writeFileSync(outputPath, html);
      
      await page.close();
    }

    await browser.close();
    console.log('✅ Prerenderizado completado con éxito!');
    
  } catch (error) {
    console.error('❌ Error durante el prerenderizado:', error);
    process.exit(1);
  }
}

prerender();
