// Generates the favicon set + social share image from the profile illustration.
// Run: node scripts/generate-icons.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'public/images/profiles/me_ilustration.png');
const FACE_CROP = { left: 195, top: 120, width: 600, height: 600 };
const PURPLE = '#8b5cf6';

async function roundFace(size, { ring = true } = {}) {
  const face = await sharp(SRC).extract(FACE_CROP).resize(size, size).png().toBuffer();
  const s = size;
  const stroke = Math.round(s * 0.055);
  const ringSvg = Buffer.from(
    `<svg width="${s}" height="${s}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${PURPLE}"/><stop offset="1" stop-color="#9333ea"/></linearGradient></defs><circle cx="${s / 2}" cy="${s / 2}" r="${s / 2 - stroke / 2}" fill="none" stroke="url(#g)" stroke-width="${stroke}"/></svg>`
  );
  const mask = Buffer.from(
    `<svg width="${s}" height="${s}"><circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}"/></svg>`
  );
  const layers = [{ input: face }];
  if (ring) layers.push({ input: ringSvg });
  const flat = await sharp({ create: { width: s, height: s, channels: 4, background: '#f5f3ff' } })
    .composite(layers)
    .png()
    .toBuffer();
  return sharp(flat).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
}

// ICO container holding PNG images (supported by all modern browsers).
function toIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries = [];
  let offset = 6 + 16 * pngs.length;
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const icon512 = await roundFace(512);
// 192px: big enough for Google's favicon (multiple of 48), small to download.
await sharp(icon512).resize(192, 192).png({ compressionLevel: 9 }).toFile(join(root, 'src/app/icon.png'));

// Apple touch icon: square, opaque (iOS adds its own rounding).
const face180 = await sharp(SRC).extract(FACE_CROP).resize(180, 180).flatten({ background: '#f5f3ff' }).png().toBuffer();
await writeFile(join(root, 'src/app/apple-icon.png'), face180);

const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(
  icoSizes.map(async (size) => ({ size, data: await sharp(icon512).resize(size, size).png().toBuffer() }))
);
await writeFile(join(root, 'src/app/favicon.ico'), toIco(icoPngs));

// Open Graph / social share image (1200x630).
const W = 1200;
const H = 630;
const avatar = await roundFace(340);
const text = Buffer.from(`
<svg width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="0.78" cy="0.5" r="0.6">
      <stop offset="0" stop-color="${PURPLE}" stop-opacity="0.45"/>
      <stop offset="1" stop-color="${PURPLE}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="name" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#c084fc"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0a0a0a"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="80" y="210" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#a1a1aa">Hello, I'm</text>
  <text x="80" y="290" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="700" fill="url(#name)">Muhamad Erzie</text>
  <text x="80" y="370" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="700" fill="url(#name)">Aldrian Nugraha</text>
  <text x="80" y="440" font-family="Segoe UI, Arial, sans-serif" font-size="32" font-weight="600" fill="#ededed">Fullstack Developer · UI/UX Designer</text>
  <text x="80" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#a78bfa">erziealdrian02.github.io</text>
</svg>`);
await sharp(text)
  .composite([{ input: avatar, left: W - 340 - 90, top: (H - 340) / 2 }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public/og-image.png'));

console.log('Generated src/app/icon.png, apple-icon.png, favicon.ico and public/og-image.png');
