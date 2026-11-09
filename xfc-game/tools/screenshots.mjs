// Captura de telas para revisão visual do XFC.
// Uso: node xfc-game/tools/screenshots.mjs [pasta-de-saída]
// Padrão: 1600x900 (desktop) e 892x411 (celular em paisagem).

import { mkdir } from 'node:fs/promises';
import { launchChromium } from '../../tests/support/chromium.mjs';
import { startXfcServer } from '../serve.mjs';

const target = process.argv[2] || new URL('../screenshots/', import.meta.url).pathname;
const outDir = target.endsWith('/') ? target : `${target}/`;
await mkdir(outDir, { recursive: true });

const VIEWPORTS = [
  { name: 'wide', width: 1600, height: 900 },
  { name: 'phone', width: 892, height: 411 }
];

const { server, url } = await startXfcServer({ port: 0 });
const errors = [];

try {
  for (const viewport of VIEWPORTS) {
    // Cada viewport ganha um navegador próprio para o Chromium single-process.
    const browser = await launchChromium();
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    page.on('pageerror', error => errors.push(`${viewport.name}: ${error.message}`));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${viewport.name}: ${message.text()}`);
    });

    await page.goto(url, { waitUntil: 'networkidle' });
    // Capturas precisam mostrar o estado final mesmo no Chromium headless, que
    // pode pausar os frames CSS entre cliques de automação.
    await page.addStyleTag({ content: '.screen { transition: none !important; }' });
    const waitForVisibleScreen = () => page.waitForFunction(() => {
      const screen = document.querySelector('#screen > .screen');
      return screen?.classList.contains('is-visible')
        && Number.parseFloat(getComputedStyle(screen).opacity) === 1;
    }, null, { polling: 50, timeout: 15000 });
    const shot = async name => {
      await waitForVisibleScreen();
      await page.waitForTimeout(100);
      await page.screenshot({ path: `${outDir}${viewport.name}-${name}.png` });
      console.log(`capturado: ${viewport.name}-${name}`);
    };

    await shot('01-intro');
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await waitForVisibleScreen();
    await shot('02-launch');
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu');
    await waitForVisibleScreen();
    await page.waitForSelector('.menu__scene3d canvas');
    await shot('03-menu');

    await page.click('.menu__item[data-menu-item="customise"]');
    await page.waitForSelector('.screen--customise');
    await shot('04-customise');
    await page.click('.customise__tile[data-tile="settings"]');
    await page.waitForSelector('.customise__dialog');
    await shot('05-settings');
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    await waitForVisibleScreen();

    await page.click('.menu__item[data-menu-item="tournament"]');
    await page.waitForSelector('.screen--modes');
    await waitForVisibleScreen();
    await shot('06-modes');
    await page.click('.modes__cta');
    await page.waitForSelector('.screen--worldcup');
    await shot('07-worldcup');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--modes');
    await waitForVisibleScreen();
    await page.locator('.modes__option[data-option="online"]').click();
    await page.click('.modes__cta');
    await page.waitForSelector('.screen--quick');
    await shot('08-quickmatch');
    await page.keyboard.press('Escape');
    await waitForVisibleScreen();

    await page.click('.menu__item[data-menu-item="tournament"]');
    await page.waitForSelector('.screen--modes');
    await waitForVisibleScreen();
    await page.locator('.modes__option[data-option="worldcup-kickoff"]').click();
    await page.click('.modes__cta');
    await page.waitForSelector('.screen--kickoff');
    await shot('09-kickoff');
    await page.click('.continue-btn');
    await page.waitForSelector('.screen--stadiums');
    await shot('10-stadiums');
    await page.click('.stadiums__card:first-child', { noWaitAfter: true });
    await page.waitForSelector('.screen--play');
    await shot('11-prematch');
    await page.click('.showcase__enter');
    await page.waitForSelector('.hud.is-visible');
    await page.waitForSelector('.ctrl-btn--switch');
    await shot('12-match3d');

    await browser.close();
  }
} finally {
  server.close();
}

if (errors.length) {
  console.error(`ERROS:\n${errors.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log('sem erros de console');
}
