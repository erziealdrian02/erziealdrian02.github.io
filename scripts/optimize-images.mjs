// Generates compressed .webp copies of heavy images in /public/images.
// Originals are kept; components reference the .webp versions.
// Run: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOTS = ['public/images/portofolio', 'public/images/company', 'public/images/academy'];
const MAX_WIDTH = 1600;
const MIN_BYTES = 150 * 1024;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let saved = 0;
for (const root of ROOTS) {
  for await (const file of walk(root)) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    const { size } = await stat(file);
    if (size < MIN_BYTES) continue;
    const out = file.slice(0, -ext.length) + '.webp';
    const info = await sharp(file)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    saved += size - info.size;
    console.log(`${file} ${(size / 1024).toFixed(0)}KB -> ${(info.size / 1024).toFixed(0)}KB`);
  }
}
console.log(`Saved ${(saved / 1024 / 1024).toFixed(1)}MB`);
