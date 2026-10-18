import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';

const BASE = new URL('../nextvr-android/src/main/assets/ui/', import.meta.url);
const GAME = {
  package: 'org.example.orbit', label: 'Orbit Runner', kind: 'openxr', headset: 'Quest',
  describe: 'OpenXR', hostable: true, purchase: false,
};

test('the game library opens a launch menu, saves choices, and Iniciar enters the real game session', {
  timeout: 180000,
}, async t => {
  const server = createServer(async (request, response) => {
    try {
      const path = (request.url === '/' ? 'index.html' : request.url.slice(1)).split('?')[0];
      if (path.includes('..')) throw new Error('invalid path');
      const extension = path.split('.').at(-1);
      const types = { html: 'text/html', js: 'application/javascript', css: 'text/css', png: 'image/png',
        jpg: 'image/jpeg', woff2: 'font/woff2', wav: 'audio/wav', svg: 'image/svg+xml' };
      response.setHeader('Content-Type', types[extension] || 'application/octet-stream');
      response.end(await readFile(new URL(path, BASE)));
    } catch {
      response.writeHead(404);
      response.end();
    }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

  let browser;
  try {
    try {
      browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(),
        args: bundledChromium.args, headless: true });
    } catch (error) {
      t.skip(`Chromium unavailable: ${error.message?.slice(0, 100)}`);
      return;
    }
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(game => {
      localStorage.setItem('nextvr.v1', JSON.stringify({ lang: 'en', xrQuality: 'balanced' }));
      window.__xrCommands = [];
      window.__handMode = 'controllers';
      window.__mockGames = [game];
      const initial = {
        runtime: 'ready', runtimeVersion: 1, runtimeBundled: true, vrapi: 'ready', broker: true,
        summary: 'PhoneXR ready', hosting: false, display: -1, problem: null, handFeed: 0,
        handMode: 'controllers', gameQuality: 'balanced', game: null, canvas: { w: 1920, h: 1080 },
      };
      window.NativeXR = {
        frame() {}, env() {}, click() {}, key() {}, hands() {}, handTargets() {}, handTouch() {},
        battery() { return '{"level":0.72,"charging":false}'; },
        appsLibrary() { return JSON.stringify({ apps: [], total: 0, shown: 0, hosting: 0 }); },
        appsCommand() {}, xrState() { return JSON.stringify(initial); },
        xrHandMode(mode) { window.__handMode = mode; },
        xrCommand(raw) {
          const command = JSON.parse(raw);
          window.__xrCommands.push(command);
          if (command.cmd === 'library' || command.cmd === 'refresh') {
            setTimeout(() => window.nextvrXrLibrary?.(JSON.stringify({ games: window.__mockGames })), 0);
          }
          if (command.cmd === 'open') {
            setTimeout(() => window.nextvrXr?.(JSON.stringify({
              ...initial, hosting: true, display: 9, gameQuality: command.quality,
              canvas: command.quality === 'performance' ? { w: 1248, h: 702 }
                : command.quality === 'high' ? { w: 1920, h: 1080 } : { w: 1574, h: 886 },
              game: { ...game, surface: `xr:${game.package}` },
            })), 40);
          }
          if (command.cmd === 'close') {
            setTimeout(() => window.nextvrXr?.(JSON.stringify({ ...initial, hosting: false })), 0);
          }
        },
      };
    }, GAME);

    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    await page.waitForFunction(() => window.nextvrXr && document.querySelector('.dock [data-id="library"]'));
    await page.locator('.dock [data-id="library"]').click();
    const tile = page.locator('.lib-tile[data-xr="org.example.orbit"]');
    await tile.waitFor({ state: 'visible' });
    await tile.click();

    const launch = page.locator('.xr-launch');
    await launch.waitFor({ state: 'visible' });
    assert.equal(await launch.locator('.xr-launch-title').innerText(), 'Orbit Runner');
    assert.equal(await launch.locator('[data-xr-quality]').count(), 3);
    assert.equal(await launch.locator('[data-xr-mode]').count(), 2);
    assert.equal(await launch.locator('[data-xr-start]').innerText(), 'Start');
    assert.equal(await launch.locator('[data-xr-quality="balanced"]').getAttribute('aria-pressed'), 'true');

    await launch.locator('[data-xr-quality="performance"]').click();
    await launch.locator('[data-xr-mode="hands"]').click();
    assert.equal(await launch.locator('[data-xr-quality="performance"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await launch.locator('[data-xr-mode="hands"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).xrQuality), 'performance');
    assert.equal(await page.evaluate(() => window.__handMode), 'hands');

    await launch.locator('[data-xr-start]').click();
    await page.waitForFunction(() => document.documentElement.classList.contains('game-on'));
    const openCommand = await page.evaluate(() => window.__xrCommands.find(command => command.cmd === 'open'));
    assert.deepEqual(openCommand, { cmd: 'open', package: GAME.package, quality: 'performance' });
    assert.equal(await page.locator('.xr-launch').count(), 0, 'the pre-launch menu closes once the native session starts');
    assert.equal(await page.locator('.win-shell[data-window-id="nextvr-xr-game"]').count(), 1,
      'the real game surface becomes the active window');
    assert.deepEqual(errors, [], 'the menu-to-game flow has no browser errors');
  } finally {
    await browser?.close();
    await new Promise(resolve => server.close(resolve));
  }
});
