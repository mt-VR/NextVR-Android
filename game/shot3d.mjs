/* Screenshots headless da edição 3D (Chromium + SwiftShader), para inspeção visual. */
import { chromium } from '/tmp/pw/node_modules/playwright-core/index.mjs';
import chromiumBin from '/tmp/pw/node_modules/@sparticuz/chromium/build/esm/index.js';

const exe = await chromiumBin.executablePath();
const browser = await chromium.launch({
  executablePath: exe,
  args: [...chromiumBin.args, '--no-sandbox', '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader', '--disable-gpu-sandbox', '--use-fake-ui-for-media-stream'],
  env: { ...process.env, LD_LIBRARY_PATH: '/tmp/al2023/lib:/tmp:' + (process.env.LD_LIBRARY_PATH || '') },
  headless: true
});
const page = await browser.newPage({ viewport: { width: 844, height: 390 }, hasTouch: true });
page.on('console', m => { if (m.type() === 'error') console.log('[console.error]', m.text().slice(0, 300)); });
page.on('pageerror', e => console.log('[pageerror]', String(e).slice(0, 400)));

const url = process.argv[2] || 'http://127.0.0.1:8080/titans-clinic-3d.html';
const outDir = process.argv[3] || '/tmp/shots3d';
fs_mkdir(outDir);
function fs_mkdir(d) { fsSync.mkdirSync(d, { recursive: true }); }
import fsSync from 'node:fs';

await page.goto(url, { waitUntil: 'load' });
await page.waitForTimeout(2500);
await page.screenshot({ path: `${outDir}/a-menu.png` });

// entra no primeiro paciente
await page.click('#prow .pcard');
await page.waitForTimeout(1200);
await page.screenshot({ path: `${outDir}/b-intro.png` });
await page.click('#btnStart');
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/c-sala.png` });

// pega a escova na mesa via toque na projeção dela
const pt = await page.evaluate(() => window.__toolScreenPos('brush'));
console.log('tela escova:', JSON.stringify(pt));
await page.touchscreen.tap(pt.x, pt.y);
await page.waitForTimeout(500);
console.log('held após tap:', await page.evaluate(() => window.__G.held ? window.__G.held.userData.toolId : null));
await page.screenshot({ path: `${outDir}/d-pegou.png` });

// encosta num dente com placa e esfrega
const tooth = await page.evaluate(() => window.__toothScreenPos('plaque'));
console.log('tela dente:', JSON.stringify(tooth));
await page.touchscreen.tap(tooth.x, tooth.y);
for (let k = 0; k < 14; k++) {
  await page.mouse.move(tooth.x + (k % 3) * 6 - 6, tooth.y + (k % 2) * 6 - 3);
  await page.waitForTimeout(140);
}
await page.screenshot({ path: `${outDir}/e-escovando.png` });
console.log('contagens:', await page.evaluate(() => JSON.stringify({
  held: window.__G.held && window.__G.held.userData.toolId,
  plaque: window.__G.teeth.filter(t => t.plaque > 0).length,
  err: window.__G.err })));
console.log('shots ok em', outDir);
await browser.close();
