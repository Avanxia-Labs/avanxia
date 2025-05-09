// // optimize-images.js
// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');

// const inputDir = path.join(__dirname, '..', '..', 'public', 'images');

// function isImage(file) {
//   const ext = path.extname(file).toLowerCase();
//   return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
// }

// function optimizeImage(filePath) {
//   const ext = path.extname(filePath).toLowerCase();
//   let pipeline = sharp(filePath).resize({ width: 1920, withoutEnlargement: true });
//   if (ext === '.png') pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
//   else if (ext === '.jpg' || ext === '.jpeg') pipeline = pipeline.jpeg({ quality: 80 });
//   else if (ext === '.webp') pipeline = pipeline.webp({ quality: 80 });
//   else return;

//   pipeline.toBuffer((err, buffer) => {
//     if (err) {
//       console.error('Error optimizing', filePath, err);
//       return;
//     }
//     fs.writeFileSync(filePath, buffer);
//     console.log('Optimized:', filePath);
//   });
// }

// function walk(dir) {
//   fs.readdirSync(dir).forEach(file => {
//     const fullPath = path.join(dir, file);
//     if (fs.statSync(fullPath).isDirectory()) {
//       walk(fullPath);
//     } else if (isImage(fullPath)) {
//       optimizeImage(fullPath);
//     }
//   });
// }

// walk(inputDir);