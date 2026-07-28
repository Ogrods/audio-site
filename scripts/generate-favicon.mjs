#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.join(__dirname, "..", "src", "app");

// Serif "D" mark on audio site warm charcoal, letter in accent gold.
// Georgia stands in for EB Garamond at favicon sizes (same as web-dev generator).
function svg(size) {
  return `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c0b0a"/>
      <stop offset="55%" stop-color="#141210"/>
      <stop offset="100%" stop-color="#1a1714"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="url(#bg)"/>
  <text
    x="50%"
    y="55%"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-weight="600"
    font-size="${size * 0.7}"
    fill="#c4a574"
  >D</text>
</svg>
`;
}

async function writePng(size, outName) {
  const out = path.join(APP_DIR, outName);
  await sharp(Buffer.from(svg(size)))
    .resize(size, size)
    .png({ quality: 95 })
    .toFile(out);
  const stat = await fs.stat(out);
  console.log(
    `Wrote ${path.relative(path.join(__dirname, ".."), out)} (${size}x${size}, ${(stat.size / 1024).toFixed(1)} KB)`
  );
}

await fs.mkdir(APP_DIR, { recursive: true });
await writePng(512, "icon.png");
await writePng(180, "apple-icon.png");
