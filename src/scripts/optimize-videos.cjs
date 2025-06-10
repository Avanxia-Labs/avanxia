#!/usr/bin/env node
const { program } = require('commander');
const { readdirSync, mkdirSync, existsSync } = require('fs');
const { join, extname, basename } = require('path');
const { exec } = require('child_process');

program
  .argument('<inputDir>')
  .argument('<outputDir>')
  .option('--crf <number>', 'Constant Rate Factor', '23')
  .option('--preset <preset>', 'FFmpeg preset', 'slow')
  .option('--width <number>', 'Max width', '1080') // Se mantiene el default por si acaso, pero el comando lo sobreescribe
  .parse(process.argv);

const { crf, preset, width } = program.opts();
const [ inputDir, outputDir ] = program.args;

// Crea la carpeta de salida si no existe
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Filtra por extensiones de vídeo y procesa cada archivo
const videoFiles = readdirSync(inputDir)
  .filter(f => ['.mp4', '.mov', '.avi', '.mkv', '.webm'].includes(extname(f).toLowerCase()));

if (videoFiles.length === 0) {
  console.log(`🟡 No se encontraron videos en la carpeta "${inputDir}".`);
  process.exit(0);
}

videoFiles.forEach(file => {
    const inputPath = join(inputDir, file);
    const name = basename(file, extname(file));

    // ✅ CAMBIO CLAVE: El nombre de salida ahora es el mismo que el de entrada, solo cambia la extensión a .mp4
    const outputFileName = `${name}.mp4`;
    const outputPath = join(outputDir, outputFileName);

    const cmd = [
      `ffmpeg -i "${inputPath}"`,
      `-vf "scale=${width}:-2"`, // Usa el ancho que pasaste desde package.json (1080)
      `-c:v libx264 -preset ${preset} -crf ${crf}`,
      `-c:a copy`, // Copia el audio sin reprocesarlo
      `"${outputPath}"`
    ].join(' ');

    console.log(`🔧 Optimizando ${file} → ${outputFileName}`);
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        // Muestra el error de ffmpeg para más detalles
        console.error(`❌ Error procesando ${file}:`, err);
        console.error(`FFmpeg stderr: ${stderr}`);
        return;
      }
      console.log(`✅ Listo: ${outputFileName}`);
    });
  });