import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, "../public/images/logo.png");
const transparentOutput = join(__dirname, "../public/images/logo-transparent.png");
const ivoryOutput = join(__dirname, "../public/images/logo-ivory.png");

const IVORY = { r: 250, g: 249, b: 245, alpha: 255 }; // #FAF9F5
const WHITE_THRESHOLD = 245;

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += info.channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
    data[i + 3] = 0;
  }
}

const trimmed = sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).trim({ threshold: 12 });

await trimmed.clone().png().toFile(transparentOutput);

await trimmed
  .clone()
  .flatten({ background: IVORY })
  .png()
  .toFile(ivoryOutput);

console.log("Created logo-transparent.png and logo-ivory.png");
