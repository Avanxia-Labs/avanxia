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
  .option('--width <number>', 'Max width', '1920')
  .parse(process.argv);

const { crf, preset, width } = program.opts();
const [ inputDir, outputDir ] = program.args;

// Crea la carpeta de salida si no existe
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

// Filtra por extensiones de vídeo y procesa cada archivo
readdirSync(inputDir)
  .filter(f => ['.mp4','.mov','.avi','.mkv'].includes(extname(f).toLowerCase()))
  .forEach(file => {
    const inputPath = join(inputDir, file);
    const name = basename(file, extname(file));
    const outputPath = join(outputDir, `${name}-opt.mp4`);

    const cmd = [
      `ffmpeg -i "${inputPath}"`,
      `-vf "scale=${width}:-2"`,
      `-c:v libx264 -preset ${preset} -crf ${crf}`,
      `-c:a copy`,
      `"${outputPath}"`
    ].join(' ');

    console.log(`🔧 Optimizing ${file} → ${name}-opt.mp4`);
    exec(cmd, err => {
      if (err) return console.error(`❌ Error en ${file}:`, err);
      console.log(`✅ Listo: ${name}-opt.mp4`);
    });
  });
