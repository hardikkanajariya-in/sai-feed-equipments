import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const imagesDir = path.join(rootDir, "public", "images");

const widths = [480, 768, 1024, 1440];
const allowedExtensions = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    }),
  );

  return files.flat();
}

function shouldOptimize(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file);

  if (!allowedExtensions.has(ext)) return false;

  if (
    name.includes("-480.") ||
    name.includes("-768.") ||
    name.includes("-1024.") ||
    name.includes("-1440.")
  ) {
    return false;
  }

  return true;
}

async function optimizeImage(file) {
  const ext = path.extname(file);
  const base = file.slice(0, -ext.length);

  const metadata = await sharp(file).metadata();

  if (!metadata.width) return;

  await mkdir(path.dirname(file), { recursive: true });

  for (const width of widths) {
    if (metadata.width < width) continue;

    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 58, effort: 6 })
      .toFile(`${base}-${width}.avif`);

    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(`${base}-${width}.webp`);
  }
}

const files = await walk(imagesDir);
const imageFiles = files.filter(shouldOptimize);

for (const file of imageFiles) {
  await optimizeImage(file);
}

console.log(`Optimized ${imageFiles.length} source images.`);
