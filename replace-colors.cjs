const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace navy with blue
      content = content.replace(/navy/g, 'blue');
      // Replace gold with cyan
      content = content.replace(/gold/g, 'cyan');
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated:', fullPath);
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
