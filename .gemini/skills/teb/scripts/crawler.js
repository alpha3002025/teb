const fs = require('fs');
const path = require('path');

function getImagesFromPath(inputPaths) {
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
  let imageFiles = [];

  inputPaths.forEach(inputPath => {
    if (!fs.existsSync(inputPath)) {
      console.warn(`Path does not exist: ${inputPath}`);
      return;
    }

    const stat = fs.statSync(inputPath);
    if (stat.isFile()) {
      if (imageExtensions.includes(path.extname(inputPath).toLowerCase())) {
        imageFiles.push(path.resolve(inputPath));
      }
    } else if (stat.isDirectory()) {
      const files = fs.readdirSync(inputPath);
      files.forEach(file => {
        const fullPath = path.join(inputPath, file);
        if (fs.statSync(fullPath).isFile() && imageExtensions.includes(path.extname(fullPath).toLowerCase())) {
          imageFiles.push(path.resolve(fullPath));
        }
      });
    }
  });

  return Array.from(new Set(imageFiles)); // Unique paths
}

// CLI entry for testing
if (require.main === module) {
  const args = process.argv.slice(2);
  const images = getImagesFromPath(args);
  console.log(JSON.stringify(images, null, 2));
}

module.exports = { getImagesFromPath };
