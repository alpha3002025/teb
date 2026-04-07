const fs = require('fs');
const path = require('path');

function saveOutput(content, format, outputPath) {
  let finalContent = content;

  if (format === 'txt') {
      // Simple markdown to text conversion
      finalContent = content.replace(/#+\s/g, '').replace(/\*+/g, '').replace(/\[+.*\]+/g, '');
  } else if (format === 'toml') {
      // Wrap content in TOML structure if it's not already
      if (!content.trim().startsWith('[')) {
          finalContent = `result = """\n${content.replace(/"/g, '\\"')}\n"""`;
      }
  }

  const extMap = {
    'md': '.md',
    'txt': '.txt',
    'toml': '.toml'
  };

  const finalPath = outputPath.endsWith(extMap[format]) ? outputPath : outputPath + extMap[format];
  const outputDir = path.dirname(finalPath);
  if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(finalPath, finalContent, 'utf8');
  return finalPath;
}

if (require.main === module) {
    const [content, format, out] = process.argv.slice(2);
    if (!content || !format || !out) {
        console.error("Usage: node formatter.js <content> <format> <output_path>");
        process.exit(1);
    }
    const saved = saveOutput(content, format, out);
    console.log(`Saved to ${saved}`);
}

module.exports = { saveOutput };
