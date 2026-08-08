import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, "../public/images/logo.png");
const transparentOutput = join(__dirname, "../public/images/logo-transparent.png");
const ivoryOutput = join(__dirname, "../public/images/logo-ivory.png");

const IVORY = { r: 250, g: 249, b: 245, alpha: 255 }; // #FAF9F5
const TOLERANCE = 65;

function colorDistance(r, g, b, target) {
  return Math.sqrt(
    (r - target.r) ** 2 + (g - target.g) ** 2 + (b - target.b) ** 2,
  );
}

function sampleBackground(data, width, height, channels) {
  const points = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), 0],
    [0, Math.floor(height / 2)],
  ];

  let rSum = 0;
  let gSum = 0;
  let bSum = 0;

  for (const [x, y] of points) {
    const i = (y * width + x) * channels;
    rSum += data[i];
    gSum += data[i + 1];
    bSum += data[i + 2];
  }

  return {
    r: Math.round(rSum / points.length),
    g: Math.round(gSum / points.length),
    b: Math.round(bSum / points.length),
  };
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const bg = sampleBackground(data, info.width, info.height, info.channels);
const brandOlive = { r: 89, g: 99, b: 72 };

for (let i = 0; i < data.length; i += info.channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  const nearSampledBg = colorDistance(r, g, b, bg) < TOLERANCE;
  const nearBrandOlive = colorDistance(r, g, b, brandOlive) < TOLERANCE;

  const isGreenChannel =
    g >= r - 20 && g >= b - 5 && r < 170 && b < 140;

  if (isGreenChannel && (nearSampledBg || nearBrandOlive)) {
    data[i + 3] = 0;
  }
}

const trimmed = sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).trim({ threshold: 15 });

await trimmed.clone().png().toFile(transparentOutput);

await trimmed
  .clone()
  .flatten({ background: IVORY })
  .png()
  .toFile(ivoryOutput);

console.log("Created logo-transparent.png and logo-ivory.png");
