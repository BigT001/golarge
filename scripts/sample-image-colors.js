const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function analyze(p) {
  if (!fs.existsSync(p)) {
    console.error('MISSING', p);
    return;
  }
  try {
    const img = sharp(p).resize(200, 200, { fit: 'inside' }).ensureAlpha();
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const counts = {};
    // sample bottom 30 rows (or available)
    const startY = Math.max(0, height - 30);
    for (let y = startY; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        counts[hex] = (counts[hex] || 0) + 1;
      }
    }
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const top = entries.slice(0, 6).map(e => '#' + e[0]);
    console.log('FILE', p);
    console.log('BOTTOM_DOMINANT', top[0] || 'N/A');
    console.log('PALETTE', top.join(', '));
  } catch (err) {
    console.error('ERROR', p, err.message);
  }
}

(async () => {
  const imgs = [
    path.join('public', 'galleryimages', 'aboutpic.jpeg'),
    path.join('public', 'galleryimages', 'pstabout.png'),
  ];
  for (const img of imgs) {
    await analyze(img);
  }
})();
