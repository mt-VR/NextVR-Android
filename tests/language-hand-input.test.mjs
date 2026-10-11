// Regression tests for PhoneXR hand input on the first-run language window.
//
// These drive the real bundled UI in Chromium through the same nextvrHands() JSON bridge the
// Android app uses, with `head` landmarks (63 floats) so the near-contact path is exercised.
// Before the fix the near path captured hands at 0.27-0.54 m, which blocked the far ray and
// could leave a press stuck DOWN. These tests lock in the observed behaviour.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';
import * as THREE from 'three';

const ACTION = { down: 0, up: 1, move: 2, cancel: 3 };
const IDENTITY = new THREE.Matrix4().toArray();
const EYE_Y = 1.55;

async function startServer() {
  const base = new URL('../nextvr-android/src/main/assets/ui/', import.meta.url);
  const server = createServer(async (req, res) => {
    try {
      const path = (req.url === '/' ? 'index.html' : req.url.slice(1)).split('?')[0];
      if (path.includes('..')) throw Error();
      res.setHeader('Content-Type', path.endsWith('.js') ? 'application/javascript' : path.endsWith('.css') ? 'text/css' : path.endsWith('.html') ? 'text/html' : 'application/octet-stream');
      res.end(await readFile(new URL(path, base)));
    } catch { res.writeHead(404); res.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return server;
}

// Native shim: records native-surface input and observes the shell's local DOM pointer events.
const nativeShim = () => {
  window.__touches = [];
  window.__shellEvents = [];
  window.__shellClicks = [];
  for (const type of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel']) {
    document.addEventListener(type, event => {
      if (event.target?.closest?.('.win-shell')) window.__shellEvents.push(type);
    }, true);
  }
  document.addEventListener('click', event => {
    if (event.target?.closest?.('.win-shell')) window.__shellClicks.push(event.target.closest('[data-lang]')?.dataset.lang ?? null);
  }, true);
  window.NativeXR = {
    frame(scene, browsers) {
      window.__last = { panels: JSON.parse(scene), browsers: JSON.parse(browsers) };
    },
    battery() { return '{"level":0.72,"charging":false}'; },
    hands() {}, click() {}, key() {},
    handTargets(json) { window.__handTargets = JSON.parse(json); },
    handTouch(id, action, x, y) {
      window.__touches.push({ id, action, x, y });
      if (id !== 'shell') return;
      const target = document.elementFromPoint(x, y);
      if (action === 0) { window.__shellArmed = target; target?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); }
      else if (action === 2) target?.dispatchEvent(new PointerEvent('pointermove', { bubbles: true }));
      else if (action === 1) { target?.dispatchEvent(new PointerEvent('pointerup', { bubbles: true })); if (target && target === window.__shellArmed) target.click(); window.__shellArmed = null; }
      else if (action === 3) { window.__shellArmed?.dispatchEvent(new PointerEvent('pointercancel', { bubbles: true })); window.__shellArmed = null; }
    }
  };
};

// Fingertip (landmark 8, head offset 24..26) `depth` metres from the eye, along the ray to `aim`.
function handAt(aim, depth, pinching) {
  const head = new Array(63).fill(0);
  const dir = aim.clone().sub(new THREE.Vector3(0, EYE_Y, 0)).normalize();
  head[24] = dir.x * depth; head[25] = dir.y * depth; head[26] = dir.z * depth;
  return {
    hands: [{
      id: 'right', left: false, points: Array.from({ length: 63 }, () => 0.5), head,
      base: [0, -.2], aim: [aim.x / -aim.z, (aim.y - EYE_Y) / -aim.z], palm: [.5, .5], grab: [.5, .5],
      palmWidth: .2, pinching, fist: false, palmFacesEyes: false, menuEligible: false
    }]
  };
}

async function openFreshPage(browser, url) {
  const page = await browser.newPage({ viewport: { width: 4096, height: 4096 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.addInitScript(nativeShim);
  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForFunction(() => window.__last?.panels.length >= 1);
  await page.evaluate(p => { window.nextvrResume(); window.nextvrPose(p); window.nextvrHands({ hands: [] }); }, IDENTITY);
  await page.waitForTimeout(300);
  return { page, errors };
}

// World position of a DOM element inside the language window, from its panel matrix.
async function languageTarget(page, selector) {
  const geo = await page.evaluate(sel => {
    const shell = document.querySelector('.win-shell[data-window-id="language"]');
    const el = shell.querySelector(sel);
    const r = shell.getBoundingClientRect(), b = el.getBoundingClientRect();
    const panel = window.__last.panels.find(p => p.id === 'language');
    return { matrix: panel.matrix, rect: panel.rect, x: b.left + b.width / 2 - r.left - r.width / 2, y: r.height / 2 - (b.top + b.height / 2 - r.top) };
  }, selector);
  const M = new THREE.Matrix4().fromArray(geo.matrix);
  return new THREE.Vector3(geo.x / geo.rect[2], geo.y / geo.rect[3], 0).applyMatrix4(M);
}

// Each step: depth (m) : pinching (0/1) : hold (ms). Hold times are long enough for the smoothed
// depth to settle, which is about 700 ms at the 50 ms feed cadence.
async function runSequence(page, aim, steps, builder = handAt) {
  await page.evaluate(() => { window.__touches = []; window.__shellEvents = []; window.__shellClicks = []; clearInterval(window.__feed); window.__feed = setInterval(() => window.nextvrHands(structuredClone(window.__h)), 50); });
  for (const step of steps.split(',')) {
    const [depth, pinch, ms] = step.split(':');
    await page.evaluate(h => { window.__h = h; }, builder(aim, Number(depth), pinch === '1'));
    await page.waitForTimeout(Number(ms));
  }
  await page.evaluate(() => clearInterval(window.__feed));
  return page.evaluate(() => {
    const domActions = window.__shellEvents.map(type => ({ pointerdown: 0, pointerup: 1, pointermove: 2, pointercancel: 3 }[type]));
    return domActions.length ? domActions : window.__touches.filter(t => t.id === 'shell').map(t => t.action);
  });
}

// Fingertip `off` metres from `aim` along the window normal (positive = in front of the glass).
// The onboarding window faces the eye without rotation, so the normal is world +z.
function handAtOffset(aim, off, pinching) {
  const head = new Array(63).fill(0);
  head[24] = aim.x; head[25] = aim.y - EYE_Y; head[26] = aim.z + off;
  return {
    hands: [{
      id: 'right', left: false, points: Array.from({ length: 63 }, () => 0.5), head,
      base: [0, -.2], aim: [aim.x / -aim.z, (aim.y - EYE_Y) / -aim.z], palm: [.5, .5], grab: [.5, .5],
      palmWidth: .2, pinching, fist: false, palmFacesEyes: false, menuEligible: false
    }]
  };
}

// Direct-touch steps are offsets along the GLASS NORMAL from `aim`, in metres, positive in FRONT of
// the glass. The direct-touch path measures exactly that distance: it captures within [-.12, .11] a
// fingertip ~12 cm behind or 11 cm in front, presses when `d` crosses from >.012 to <=.012 (a push
// through the glass) and releases at `d >= .035` (3.5 cm back out).
//
// Walking the tip along the eye ray instead (the old hard-coded depths) also slides it sideways —
// at a shorter distance the same screen direction lands higher up the panel — so pulling back from a
// row could drift onto its neighbour and cancel the click on release. A real finger moves in space,
// not along the gaze ray, so the sequences place the fingertip on the normal and keep the screen
// projection (`aim`) on the target, which is what the far ray uses anyway.
const glass = (offsets, pinches, ms = 900) =>
  offsets.map((v, i) => v.toFixed(3) + ':' + (pinches[i] ? 1 : 0) + ':' + ms).join(',');

const optionsLeft = page => page.locator('.lang-option').count();

test('language window: a detected press and release remain distinct at a slow sample cadence', { timeout: 120000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    const aim = await languageTarget(page, '[data-lang="en"]');
    const samples = [handAt(aim, .60, false), handAt(aim, .60, true), handAt(aim, .60, false)];
    await page.evaluate(async frames => {
      window.__touches = [];
      window.nextvrHands(frames[0]);
      await new Promise(resolve => setTimeout(resolve, 220)); // five completed samples per second
      window.nextvrHands(frames[1]);
      await new Promise(resolve => setTimeout(resolve, 220));
      window.nextvrHands(frames[2]);
    }, samples);
    await page.waitForFunction(() => !document.querySelector('.lang-option'), null, { timeout: 5000 });
    const edges = await page.evaluate(() => window.__shellEvents
      .filter(type => type === 'pointerdown' || type === 'pointerup' || type === 'pointercancel')
      .map(type => ({ pointerdown: 0, pointerup: 1, pointercancel: 3 }[type])));
    assert.deepEqual(edges, [ACTION.down, ACTION.up], 'one slow-sampled pinch creates one complete click, not a held press');
    assert.deepEqual(await page.evaluate(() => window.__shellClicks), ['en'], 'the language option activates exactly once on release');
    assert.equal(await page.evaluate(() => window.__touches.some(t => t.id === 'shell')), false,
      'the onboarding DOM click does not leave a synthetic Android touch held in the atlas WebView');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).lang), 'en');
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});

test("language window: far ray pinch selects English", { timeout: 120000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    const aim = await languageTarget(page, '[data-lang="en"]');
    const actions = await runSequence(page, aim, '0.60:0:700,0.60:1:700,0.60:0:700');
    assert.ok(actions.includes(ACTION.down) && actions.at(-1) === ACTION.up, 'ray press completes with a release: ' + JSON.stringify(actions));
    await page.waitForFunction(() => !document.querySelector('.lang-option'), null, { timeout: 5000 });
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('nextvr.v1')).lang), 'en');
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});

test('language window: hovering in the near band with a pinch still uses the far ray', { timeout: 120000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    const aim = await languageTarget(page, '[data-lang="en"]');
    // Bem à frente do vidro, fora da faixa de toque direto: quem decide é o raio distante.
    const actions = await runSequence(page, aim, glass([.22, .22, .22], [0, 1, 0], 700), handAtOffset);
    assert.ok(actions.includes(ACTION.down) && actions.at(-1) === ACTION.up, 'band hover does not block the ray: ' + JSON.stringify(actions));
    await page.waitForFunction(() => !document.querySelector('.lang-option'), null, { timeout: 5000 });
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});

test('language window: starting behind the glass never leaves a press stuck DOWN', { timeout: 120000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    const aim = await languageTarget(page, '[data-lang="en"]');
    // Começa atrás do vidro e vem para a frente: sem pinça, nada pode apertar.
    const actions = await runSequence(page, aim, glass([-.06, -.02, .02], [0, 0, 0]), handAtOffset);
    assert.deepEqual(actions, [], 'no touch from behind the glass without a pinch: ' + JSON.stringify(actions));
    assert.equal(await optionsLeft(page), 12, 'window stays open');
    // A pinça longe (bem atrás, fora da faixa de toque direto) ainda aperta e solta: nada ficou
    // preso nem bloqueando o raio depois da aproximação.
    const after = await runSequence(page, aim, glass([-.25, -.25, -.25], [0, 1, 0], 700), handAtOffset);
    assert.ok(after.includes(ACTION.down) && after.at(-1) === ACTION.up, 'far ray works after approach: ' + JSON.stringify(after));
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});

test('language window: push through the glass selects once, and a held pinch cannot restart the press', { timeout: 150000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    const aim = await languageTarget(page, '[data-lang="en"]');
    // Chega, encosta (aperta), atravessa um dedo, volta a encostar e sai: soltar sobre a MESMA linha
    // é o que faz a escolha acontecer. Sem pinça nenhuma: é o contato direto que aperta.
    const pushSteps = glass([.12, .02, 0, -.01, .004, .12], [0, 0, 0, 0, 0, 0], 900);
    const pushed = await runSequence(page, aim, pushSteps, handAtOffset);
    assert.ok(pushed.includes(ACTION.down) && pushed.at(-1) === ACTION.up, 'push-through press completes: ' + JSON.stringify(pushed));
    await page.waitForFunction(() => !document.querySelector('.lang-option'), null, { timeout: 5000 });
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});

test('language window: leaving direct-touch range releases and suppresses the held pinch', { timeout: 150000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    const aim = await languageTarget(page, '.lq-title');
    // Encosta e aperta, sai da faixa com a pinça ainda fechada, fica fora, e volta: um contato só.
    const actions = await runSequence(page, aim, glass(
      [.03, 0, -.18, -.18, .03, .03, .03, .03],
      [0, 0, 0, 0, 1, 1, 1, 0]), handAtOffset);
    const edges = actions.filter(a => a === ACTION.down || a === ACTION.up || a === ACTION.cancel);
    assert.deepEqual(edges, [ACTION.down, ACTION.up], 'one direct contact ends once and cannot restart as a ray press: ' + JSON.stringify(actions));
    assert.equal(await optionsLeft(page), 12, 'title press leaves the window open');
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});

test('language window: releasing a push while still pinched emits one UP and no second DOWN', { timeout: 150000 }, async (t) => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const { page, errors } = await openFreshPage(browser, `http://127.0.0.1:${server.address().port}/`);
    // The title is not a button, so this press must not close the window.
    const aim = await languageTarget(page, '.lq-title');
    // Chega, atravessa o vidro com a pinça fechada (aperta UMA vez), recua até soltar, e sai de vez
    // ainda pinçado: a pinça presa não pode virar um segundo toque nem reiniciar o raio.
    const actions = await runSequence(page, aim, glass(
      [.15, .05, -.005, .01, -.02, -.08, .15, .15],
      [0, 0, 1, 1, 1, 1, 1, 0], 800), handAtOffset);
    const firstUp = actions.indexOf(ACTION.up);
    assert.ok(firstUp > 0, 'pushing through the glass produced a press: ' + JSON.stringify(actions));
    assert.equal(actions.slice(firstUp + 1).filter(a => a === ACTION.down).length, 0, 'no restart after release while pinched: ' + JSON.stringify(actions));
    assert.equal(actions.filter(a => a === ACTION.up).length, 1, 'exactly one release: ' + JSON.stringify(actions));
    assert.equal(await optionsLeft(page), 12, 'title press leaves the window open');
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});
