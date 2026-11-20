// Rasteriza os SVGs dos escudos de seleção em PNG 256×256.
//
// Usa o Chromium do projeto (@sparticuz/chromium, já dependência de teste):
// não há biblioteca de SVG no Node e instalar uma exigiria rede. Rodar depois
// de tools/generate-nation-crests.mjs.
//
// Uso: node tools/rasterize-nation-crests.mjs
import {readFileSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {chromium} from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const source = join(root, 'assets/crests/nations/.svg-source.json');
const items = JSON.parse(readFileSync(source, 'utf8'));

const browser = await chromium.launch({
  executablePath: await bundledChromium.executablePath(),
  args: bundledChromium.args
});
try {
  const page = await browser.newPage();
  await page.setContent('<body style="margin:0;background:transparent"></body>');
  const pngs = await page.evaluate(async list => {
    const out = [];
    await document.fonts.ready;
    for (const item of list) {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 256;
      const context = canvas.getContext('2d');
      const url = URL.createObjectURL(new Blob([item.markup], {type: 'image/svg+xml'}));
      const image = new Image();
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
      });
      context.drawImage(image, 0, 0, 256, 256);
      URL.revokeObjectURL(url);
      out.push({flag: item.flag, data: canvas.toDataURL('image/png')});
    }
    return out;
  }, items);
  for (const {flag, data} of pngs) {
    writeFileSync(join(root, `assets/crests/nations/${flag}.png`), Buffer.from(data.split(',')[1], 'base64'));
  }
  console.log(`escudos rasterizados: ${pngs.length}`);
} finally {
  await browser.close();
}
