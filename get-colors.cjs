const Vibrant = require('node-vibrant');
const path = require('path');

const imagePath = path.join(__dirname, 'src', 'images', 'logo.png');

Vibrant.from(imagePath).getPalette((err, palette) => {
  if (err) {
    console.error('Error getting palette:', err);
    return;
  }
  for (const swatch in palette) {
    if (palette[swatch]) {
      console.log(`${swatch}: ${palette[swatch].hex}`);
    }
  }
});
