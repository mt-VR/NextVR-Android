// Captura de tela do XFC usada para conferir as telas durante o desenvolvimento.
//
//   node xfc-game/tools/screenshots.mjs [pasta-de-saída]
//
// Não é parte do jogo: serve para revisar o resultado no navegador. Por padrão
// tira as fotos em 1600x900 (tela deitada grande) e em 892x411 (celular deitado,
// proporção 20:9 como a do app Android).

import { mkdir } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import { launchChromium } from '../../tests/support/chromium.mjs';
import { startXfcServer } from '../serve.mjs';

const outDir = process.argv[2] || new URL('../screenshots/', import.meta.url).pathname;
await mkdir(outDir, { recursive: true });

const VIEWPORTS = [
  { name: 'wide', width: 1600, height: 900 },
  { name: 'phone', width: 892, height: 411 }
];

const { server, url } = await startXfcServer({ port: 0 });
const errors = [];

for (const viewport of VIEWPORTS) {
  // O Chromium empacotado roda com --single-process: ele não sobrevive ao
  // fechamento de uma página, então cada tamanho abre o seu navegador.
  const browser = await launchChromium();
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  page.on('pageerror', error => errors.push(`${viewport.name}: ${error.message}`));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(`${viewport.name}: ${message.text()}`);
  });

  await page.goto(url, { waitUntil: 'networkidle' });

  const shot = async name => {
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${outDir}${viewport.name}-${name}.png` });
    console.log(`capturado: ${viewport.name}-${name}`);
  };

  await shot('01-intro');
  await page.keyboard.press('Enter');
  await shot('02-menu');
  await page.click('.menu__cta');
  await shot('03-kickoff');
  await page.click('.btn:has-text("Ver elenco")');
  await shot('04-squad');
  await page.keyboard.press('Escape');
  await page.click('.btn:has-text("Iniciar partida")');
  await shot('05-match');
  await page.close();
  await browser.close();
}

console.log(errors.length ? `ERROS:\n${errors.join('\n')}` : 'sem erros de console');
server.close();
