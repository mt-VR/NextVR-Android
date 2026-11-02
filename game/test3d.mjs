/* Teste de gameplay 3D em Chromium headless: caso completo via toque. */
import { chromium } from '/tmp/pw/node_modules/playwright-core/index.mjs';
import chromiumBin from '/tmp/pw/node_modules/@sparticuz/chromium/build/esm/index.js';

const exe = await chromiumBin.executablePath();
const browser = await chromium.launch({
  executablePath: exe,
  args: [...chromiumBin.args, '--no-sandbox', '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader', '--disable-gpu-sandbox'],
  env: { ...process.env, LD_LIBRARY_PATH: '/tmp/al2023/lib:/tmp:' + (process.env.LD_LIBRARY_PATH || '') },
  headless: true
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
const errors = [];
page.on('pageerror', e => errors.push(String(e).slice(0, 300)));
await page.goto(process.argv[2] || 'http://127.0.0.1:8080/titans-clinic-3d.html');
await page.waitForTimeout(2000);

const checks = [];
const ok = (n, c, x = '') => checks.push({ n, c: !!c, x });
// toque sintético direto no canvas (determinístico em headless; no device real
// o navegador gera pointerdown a partir do toque normalmente)
const tap = async (x, y) => {
  await page.evaluate(([x, y]) => {
    const cv = document.querySelector('#app canvas');
    cv.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y, bubbles: true, pointerId: 9, isPrimary: true }));
    cv.dispatchEvent(new PointerEvent('pointerup',   { clientX: x, clientY: y, bubbles: true, pointerId: 9, isPrimary: true }));
  }, [x, y]);
  await page.waitForTimeout(120);
};
const move = async (x, y) => page.evaluate(([x, y]) => {
  const cv = document.querySelector('#app canvas');
  cv.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, pointerId: 9, isPrimary: true }));
}, [x, y]);
const counts = () => page.evaluate(() => {
  const c = { plaque: 0, tartar: 0, caries: 0, debris: 0, hidden: 0 };
  window.__G.teeth.forEach(t => { if (t.plaque > 0) c.plaque++; if (t.tartar > 0) c.tartar++;
    if (t.caries > 0 && !t.healed) c.caries++; if (t.debris > 0) c.debris++;
    if (t.caries > 0 && t.hidden && !t.revealed) c.hidden++; });
  return c;
});
const grab = async tool => {
  for (let attempt = 0; attempt < 3; attempt++) {
    const p = await page.evaluate(id => window.__toolScreenPos(id), tool);
    await tap(p.x, p.y);
    const st = await page.evaluate(() => ({ held: window.__G.held && window.__G.held.userData.toolId,
      playing: window.__G.playing, cur: window.__G.cursor.toArray().map(v => +v.toFixed(2)) }));
    if (st.held === tool) return true;
    console.log(`   [grab ${tool}] tentativa ${attempt}:`, JSON.stringify(st), 'tela', Math.round(p.x), Math.round(p.y),
      'pd=', await page.evaluate(() => window.__pd || 0), 'errs=', errors.length, errors[errors.length-1] || '');
    await page.waitForTimeout(350);
  }
  return false;
};
const putback = async () => {
  const p = await page.evaluate(() => window.__toolScreenPos('xray')); // zona da mesa
  await tap(p.x, p.y + 40);
};
const treatAll = async (tool, kind, maxMs = 30000) => {
  if (!await grab(tool)) { console.log(`   [${tool}] FALHOU a pega`); return false; }
  const t0 = Date.now();
  for (;;) {
    const target = await page.evaluate(k => window.__toothScreenPos(k), kind);
    if (!target || Date.now() - t0 > maxMs) break;
    await tap(target.x, target.y);
    await page.waitForTimeout(300);
    // espera este dente concluir: a posição do "próximo alvo" muda quando limpa
    for (let g = 0; g < 40 && Date.now() - t0 < maxMs; g++) {
      await page.waitForTimeout(250);
      const cur = await page.evaluate(k => window.__toothScreenPos(k), kind);
      if (!cur || Math.abs(cur.x - target.x) > 1 || Math.abs(cur.y - target.y) > 1) break;
    }
  }
  return true;
};

await page.click('#prow .pcard');
await page.waitForFunction(() => document.getElementById('intro').classList.contains('on'), null, { timeout: 15000 });
await page.click('#btnStart');
await page.waitForFunction(() => window.__G.playing === true, null, { timeout: 15000 });
await page.waitForTimeout(300);
ok('sem erros de página no boot', errors.length === 0, errors.join('|'));
ok('caso gerado (16 dentes, problemas>=6)', await page.evaluate(() => {
  const c = { n: window.__G.teeth.length, p: 0 };
  window.__G.teeth.forEach(t => { if (t.plaque > 0 || t.tartar > 0 || t.caries > 0) c.p++; });
  return c.n === 16 && c.p >= 6;
}));

// 1) raio-X: pega e segura na boca
ok('pegou raio-X', await grab('xray'));
const mouth = await page.evaluate(() => window.__mouthScreenPos());
await tap(mouth.x, mouth.y);
await page.waitForTimeout(3500);
ok('raio-X revelou ocultas', (await counts()).hidden === 0, JSON.stringify(await counts()));

// 2) escova -> placa
ok('escovou tudo', await treatAll('brush', 'plaque') && (await counts()).plaque === 0,
  JSON.stringify(await counts()));
// 3) picareta -> tártaro
ok('picaretou tudo', await treatAll('pick', 'tartar') && (await counts()).tartar === 0,
  JSON.stringify(await counts()));
// 4) broca -> cárie
ok('brocou tudo', await treatAll('drill', 'caries') && (await counts()).caries === 0,
  JSON.stringify(await counts()));
// 5) aspirador -> detritos
ok('aspirou tudo', await treatAll('vac', 'debris') && (await counts()).debris === 0,
  JSON.stringify(await counts()));
// 6) curar
ok('curou tudo', await treatAll('heal', 'heal'));
const done = await page.evaluate(() => window.__G.over);
ok('caso concluído', done);
await page.waitForTimeout(1400);
ok('tela de resultado', await page.evaluate(() =>
  document.getElementById('result').classList.contains('on')));
ok('moedas ganhas', await page.evaluate(() => window.__G.coin > 0));
await page.screenshot({ path: '/tmp/shots3d/f-resultado.png' });

if (errors.length) console.log('ERROS DE PÁGINA:', errors.slice(0, 3));
console.log('DIAG:', await page.evaluate(() => JSON.stringify({
  canvases: document.querySelectorAll('#app canvas').length,
  teeth: window.__G.teeth.length, pid: window.__G.patient && window.__G.patient.id,
  playing: window.__G.playing, over: window.__G.over, pd: window.__pd || 0,
  screens: [...document.querySelectorAll('.screen')].map(s => s.id + (s.classList.contains('on') ? ':on' : '')),
  ovl: [...document.querySelectorAll('.ovl')].map(s => s.id + (s.classList.contains('on') ? ':on' : '')),
  topAt644: (() => { const e = document.elementFromPoint(167, 644); return e && e.tagName + '.' + e.className; })()
})));
const failed = checks.filter(c => !c.c);
checks.forEach(c => console.log(`${c.c ? 'PASS' : 'FAIL'}  ${c.n}${c.x ? '  [' + c.x + ']' : ''}`));
console.log(`\n${checks.length - failed.length}/${checks.length} passaram`);
await browser.close();
process.exit(failed.length ? 1 : 0);
