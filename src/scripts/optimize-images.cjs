// optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', '..', 'public', 'images');

// List of problematic files to skip
const skipFiles = [
  'desjunior.jpg',
  'disjunior.jpg',
  'socioop.jpg',
  'equipo.jpg',
  'equipo3.jpg',
  'equipo5.png',
  'tauro.jpg'
];

function isImage(file) {
  const ext = path.extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
}

function optimizeImage(filePath) {
  try {
    // Check if file exists and is accessible
    if (!fs.existsSync(filePath)) {
      console.warn('File not found, skipping:', filePath);
      return;
    }

    // Check if file is in skip list
    const fileName = path.basename(filePath);
    if (skipFiles.includes(fileName)) {
      console.log('Skipping problematic file:', filePath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    
    try {
      let pipeline = sharp(filePath).resize({ width: 1920, withoutEnlargement: true });
      if (ext === '.png') pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
      else if (ext === '.jpg' || ext === '.jpeg') pipeline = pipeline.jpeg({ quality: 80 });
      else if (ext === '.webp') pipeline = pipeline.webp({ quality: 80 });
      else return;

      pipeline.toBuffer((err, buffer) => {
        if (err) {
          console.error('Error optimizing', filePath, err);
          return;
        }
        fs.writeFileSync(filePath, buffer);
        console.log('Optimized:', filePath);
      });
    } catch (sharpError) {
      console.error('Sharp error processing file', filePath, sharpError);
    }
  } catch (error) {
    console.error('Error processing file', filePath, error);
  }
}

function walk(dir) {
  try {
    if (!fs.existsSync(dir)) {
      console.warn('Directory not found, skipping:', dir);
      return;
    }

    fs.readdirSync(dir).forEach(file => {
      try {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
          walk(fullPath);
        } else if (isImage(fullPath)) {
          optimizeImage(fullPath);
        }
      } catch (error) {
        console.error('Error processing file/directory:', file, error);
      }
    });
  } catch (error) {
    console.error('Error reading directory:', dir, error);
  }
}

walk(inputDir);