// Captura de tela do XFC usada para conferir as telas durante o desenvolvimento.
//
//   node xfc-game/tools/screenshots.mjs [pasta-de-saída]
//
// Não é parte do jogo: serve para revisar o resultado no navegador.

import { mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { launchChromium } from '../../tests/support/chromium.mjs';
import { startXfcServer } from '../serve.mjs';

const outDir = process.argv[2] || new URL('../screenshots/', import.meta.url).pathname;
await mkdir(outDir, { recursive: true });

const { server, url } = await startXfcServer({ port: 0 });
const browser = await launchChromium();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => {
  if (message.type() === 'error') errors.push(message.text());
});

await page.goto(url, { waitUntil: 'networkidle' });

const shot = async name => {
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${outDir}${name}.png` });
  console.log(`capturado: ${name}`);
};

await shot('01-intro');
await page.keyboard.press('Enter');
await shot('02-menu');
await page.keyboard.press('Enter'); // entra no Kick Off pelo item em foco
await shot('03-kickoff');
await page.click('.btn:has-text("Ver elenco")');
await shot('04-squad');

console.log(errors.length ? `ERROS:\n${errors.join('\n')}` : 'sem erros de console');
await browser.close();
server.close();
