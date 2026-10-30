// The floating keyboard: the typing engine, the held key and the keyboard that follows its window.
//
// Three layers, in the order the user meets them:
//   1. web/src/typing.js on its own — caret, selection, backspace, Enter, vetoed keydown. This is
//      the file the shell loads AND the file the native side installs in every hosted page, so the
//      behaviour of a real website field is exactly the behaviour asserted here.
//   2. The same engine through the real bundled UI and the real hand bridge: press a key, hold it,
//      and check the keyboard lands in front of the window whose field is focused.
//   3. The wiring that keeps the two copies of the rules identical (bundle, native, Java selector).
import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';
import bundledChromium from '@sparticuz/chromium';
import * as THREE from 'three';

const IDENTITY = new THREE.Matrix4().toArray();
const EYE_Y = 1.55;

/* ------------------------------------------------------------------ layer 1 */

/**
 * Every scenario focuses a fresh field, types into it and returns what the page ended up with.
 * `execCommand` is the real Blink editing path here, so these are the same rules a hardware
 * keyboard would obey inside the same WebView.
 */
function battery() {
  const out = [];
  const record = (name, got, want) => out.push({ name, got, want });
  const field = (html, selector = 'body > *') => {
    document.body.innerHTML = html;
    const el = document.querySelector(selector);
    const log = [];
    for (const type of ['keydown', 'beforeinput', 'input', 'keyup'])
      el.addEventListener(type, e => log.push(type + ':' + (e.inputType || e.key || '')));
    el.addEventListener('keydown', e => { window.__veto = /3/.test(el.dataset.veto || '') ? e.preventDefault() : undefined; });
    el.focus();            // a engine escreve no campo EM FOCO, como um teclado de verdade
    return { el, log };
  };
  const caret = (el, start, end = start) => { try { el.setSelectionRange(start, end); } catch (_) {} };
  const type = window.__nextvrTyping;

  { // 1. Plain typing lands where the caret is, not at the end of the string.
    const { el } = field('<input>');
    el.value = 'ad'; caret(el, 1);
    record('insert at caret', [type.key('b', false), el.value, el.selectionStart], [true, 'abd', 2]);
  }
  { // 2. A selection is replaced, which is what a drag-select followed by a key does.
    const { el } = field('<input>');
    el.value = 'abcd'; caret(el, 1, 3);
    record('replace selection', [type.key('X', false), el.value], [true, 'aXd']);
  }
  { // 3. Backspace cuts the character BEFORE the caret, wherever the caret is.
    const { el } = field('<input>');
    el.value = 'abcd'; caret(el, 2);
    record('backspace before caret', [type.key('⌫', false), el.value, el.selectionStart], [true, 'acd', 1]);
  }
  { // 4. A selection disappears whole on one backspace.
    const { el } = field('<input>');
    el.value = 'abcd'; caret(el, 1, 3);
    record('backspace over selection', [type.key('⌫', false), el.value], [true, 'ad']);
  }
  { // 5. An emoji is two code units; backspace must not leave half of one behind.
    const { el } = field('<input>');
    type.key('a', false); type.key('👍', false);
    record('emoji pair', [el.value, type.key('⌫', false), el.value], ['a👍', true, 'a']);
  }
  { // 6. A page that cancels keydown keeps its text: that is what shortcuts and IMEs rely on.
    const { el } = field('<input data-veto="3">');
    record('vetoed keydown', [type.key('a', false), el.value], [false, '']);
  }
  { // 7. The event order is the one a real key produces: keydown, the edit, input, keyup. The
    //    `input` is the one the browser itself raises (Blink does not raise `beforeinput` for
    //    execCommand); a page that vetoes the key does it on the cancelable keydown, case 6.
    const { el, log } = field('<input>');
    type.key('q', false);
    record('key event order', log, ['keydown:q', 'input:insertText', 'keyup:q']);
  }
  { // 8. Shift capitalises the key and tells the page about it.
    const { el, log } = field('<input>');
    type.key('a', true);
    record('shift', [el.value, log.includes('keydown:A')], ['A', true]);
  }
  { // 9. A single-line field inside a form: Enter submits it, as a hardware Enter would.
    const { el } = field('<form><input name="q"></form>', 'form input');
    let submitted = 0;
    el.form.addEventListener('submit', e => { e.preventDefault(); submitted++; });
    type.key('⏎', false);
    record('enter submits a form', [submitted, el.value], [1, '']);
  }
  { // 10. A textarea gets a new line from Enter instead of a submit.
    const { el } = field('<textarea></textarea>');
    type.key('a', false); type.key('⏎', false); type.key('b', false);
    record('enter is a newline', el.value, 'a\nb');
  }
  { // 11. contenteditable is a field too, and its caret is a real Range.
    const { el } = field('<div contenteditable="true">ab</div>');
    el.focus();
    const range = document.createRange();
    range.setStart(el.firstChild, 1); range.collapse(true);
    const sel = document.getSelection(); sel.removeAllRanges(); sel.addRange(range);
    type.key('X', false);
    record('contenteditable insert', el.textContent, 'aXb');
    type.key('⌫', false);
    record('contenteditable backspace', el.textContent, 'ab');
  }
  { // 12. A field the browser refuses (letters in a number) keeps its text. The key still reached the
    //     page — a field with its own handling depends on that — it just did not change anything.
    const { el } = field('<input type="number">');
    type.key('1', false); type.key('2', false);
    type.key('a', false);
    record('number field keeps digits', el.value, '12');
  }
  { // 13. contenteditable="false" is not a field: the keyboard must not bind to it.
    const { el } = field('<div contenteditable="false"><button>b</button></div>');
    el.focus();
    record('non-editable is not a field', type.editable(el), null);
  }
  { // 14. A HELD key is one keydown, N keydowns with repeat:true, and ONE keyup at the end. A game
    //     in a browser starts moving on the first and stops on the last: a keyup in the middle is
    //     the character taking one step per letter.
    const { el, log } = field('<input>');
    type.key('w', false, type.down);
    type.key('w', false, type.repeat);
    type.key('w', false, type.repeat);
    type.key('w', false, type.up);
    record('held key wrote one letter per repeat', el.value, 'www');
    record('held key is downs then one up, never a keyup mid-hold', log,
      ['keydown:w', 'input:insertText', 'keydown:w', 'input:insertText', 'keydown:w', 'input:insertText', 'keyup:w']);
  }
  { // 15. A tap is a whole key: exactly one down, one insertion, one up, no repeat.
    const { el, log } = field('<input>');
    type.key('q', false);
    record('tap is one whole key', [el.value, log], ['q', ['keydown:q', 'input:insertText', 'keyup:q']]);
  }
  { // 16. A 3D game in the browser has no field focused at all. The key still has to arrive, on
    //     whatever holds the focus, exactly as a hardware keyboard's would.
    document.body.innerHTML = '<canvas id="c"></canvas>';
    const canvas = document.getElementById('c');
    canvas.tabIndex = 0;
    canvas.focus();
    const seen = [];
    const listen = e => seen.push(e.type + (e.repeat ? ':r' : ''));
    canvas.addEventListener('keydown', listen);
    canvas.addEventListener('keyup', listen);
    type.key('w', false, type.down);
    type.key('w', false, type.repeat);
    type.key('a', false, type.down);
    type.key('w', false, type.up);
    record('keys reach a game canvas with no field', seen, ['keydown', 'keydown:r', 'keydown', 'keyup']);
  }
  return out;
}

test('the typing engine writes where the caret is, and the page can veto a key', { timeout: 120000 }, async t => {
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('about:blank');
    await page.addScriptTag({ content: await readFile('web/src/typing.js', 'utf8') });
    const results = await page.evaluate(battery);
    for (const { name, got, want } of results) assert.deepEqual(got, want, name);
    assert.ok(results.length >= 13, 'the whole battery ran: ' + results.map(r => r.name).join(' | '));
    assert.deepEqual(errors, []);
  } finally { await browser?.close(); }
});

/* ------------------------------------------------------------------ layer 3 */

test('one typing engine: the bundle ships the file the shell loads and the native side injects', async () => {
  const source = await readFile('web/src/typing.js', 'utf8');
  assert.equal(await readFile('nextvr-android/src/main/assets/ui/typing.js', 'utf8'), source,
    'assets/ui/typing.js is a copy of web/src/typing.js, not a second implementation');
  const html = await readFile('web/index.html', 'utf8');
  assert.match(html, /<script defer src="\.\/typing\.js"><\/script>/,
    'the shell loads the engine before the bundle that writes through it');
  assert.ok(html.indexOf('typing.js') < html.indexOf('app.js'), 'and it loads first');

  // The Java probe and the engine must agree on what a field is, or one touch opens the keyboard in
  // the shell and closes it on the native side (or the reverse). Both are plain string concatenations,
  // so evaluating the literal is the comparison.
  const activity = await readFile('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java', 'utf8');
  const literal = activity.match(/EDITABLE_SELECTOR\s*=\s*((?:"(?:\\.|[^"\\])*"\s*\+\s*)*"(?:\\.|[^"\\])*")\s*;/);
  assert.ok(literal, 'NextVrActivity declares the editable selector it probes with');
  const java = eval(literal[1]);
  const engine = source.match(/const SELECTOR =([\s\S]*?);\n/);
  assert.ok(engine, 'the typing engine declares the same selector');
  const js = eval(engine[1]);
  assert.equal(java, js, 'the native probe and the typing engine accept the same fields');
});

test('a key in a hosted page goes through the same engine, not through an input connection', async () => {
  const activity = await readFile('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java', 'utf8');
  const bridge = activity.match(/@JavascriptInterface public void key\([^)]*\)\s*\{[\s\S]*?\n        \}/);
  assert.ok(bridge, 'the shell bridge still takes a key');
  assert.match(bridge[0], /window\.__nextvrTyping&&window\.__nextvrTyping\.key\(/,
    'a hosted WebView is written by the same engine the shell uses');
  assert.match(bridge[0], /int phase\)/, 'the bridge carries the key state, not just the character');
  assert.match(bridge[0], /JSONObject\.quote\(key\)\+","\+\(shift\?"true":"false"\)\+","\+phase\+/,
    'and hands the engine the key, the shift and the state together');
  assert.ok(!activity.includes('onCreateInputConnection'),
    'no hand-made InputConnection: this WebView never has view focus, so Chromium dropped every commitText');
  assert.ok(!activity.includes('deleteSurroundingText'), 'backspace is a real caret edit, not a blind text() rewrite');

  const surface = await readFile('nextvr-android/src/main/java/com/nextvr/app/WebSurface.java', 'utf8');
  assert.match(surface, /addDocumentStartJavaScript\(web,typing,/, 'the engine is installed before the page runs');
  assert.match(surface, /assets\.open\("ui\/typing\.js"\)/, 'and it is read from the bundle the UI ships');
  assert.ok(!/web\.evaluateJavascript\(typing,/.test(surface), 'the engine is installed per page load, not once at construction');
  assert.match(surface, /web\.requestFocus\(\)/, 'the WebView keeps view focus, so its focused element survives');

  // The probe that decides "is this a field" must hand back a value whose JSON encoding is what the
  // callback compares against. evaluateJavascript delivers the JSON encoding of the result, so a JS
  // string '1' arrives as "\"1\"" — the comparison never matched, every tap reported "no field", and
  // the keyboard closed instead of opening. This is what a user sees as "typing does nothing".
  const probe = activity.match(/evaluateJavascript\(\s*\n([\s\S]*?),\s*\n\s*value->\{([\s\S]*?)\n\s{16}\}\);/);
  assert.ok(probe, 'the native field probe is still shaped as script + callback');
  assert.match(probe[1], /return !!f\}\)\(\)/, 'the probe returns a boolean, not a quoted string');
  assert.ok(!/return f\?'1':'0'/.test(probe[1]), 'no quoted 1/0 result: JSON encoding would add the quotes');
  assert.match(probe[2], /"true"\.equals\(value\)/, 'and the callback compares against the JSON boolean');

  // An Android app window has no DOM to probe: the only honest signal is the app's own editor.
  const apps = await readFile('nextvr-android/src/main/java/com/nextvr/app/apps/AppWindowController.java', 'utf8');
  assert.match(apps, /public boolean editing\(String packageName\)/);
  assert.match(apps, /NextVrAccessibilityService\.focusedEditable\(\)/);
  const access = await readFile('nextvr-android/src/main/java/com/nextvr/app/apps/NextVrAccessibilityService.java', 'utf8');
  assert.match(access, /public static boolean type\(String value\)/,
    'typing into an Android app honours the caret the app reports, instead of always appending');
  assert.match(access, /getTextSelectionStart\(\)/);
});

/* ------------------------------------------------------------------ layer 2 */

/** The real UI with the native bridge stubbed, driven by the real PhoneXR hand packet. */
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

const nativeShim = () => {
  window.__touches = [];
  window.__typed = [];
  window.NativeXR = {
    frame(scene, browsers) { window.__last = { panels: JSON.parse(scene), browsers: JSON.parse(browsers) }; },
    battery() { return '{"level":0.72,"charging":false}'; },
    hands() {}, click() {},
    // The key bridge is what a hosted surface receives: record it so the test can prove the shell
    // routes a character, its ⌫/⏎ glyphs, the shift flag and the key state the native side expects.
    key(id, k, shift, phase) { window.__typed.push({ id, k, shift: !!shift, phase: phase | 0 }); },
    appsLibrary() { return '{"apps":[]}'; },
    appsCommand() {}, handTargets() {},
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

function handAt(aim, depth, pinching) {
  const head = new Array(63).fill(0);
  const dir = aim.clone().sub(new THREE.Vector3(0, EYE_Y, 0)).normalize();
  head[24] = dir.x * depth; head[25] = dir.y * depth; head[26] = dir.z * depth;
  return { hands: [{ id: 'right', left: false, points: Array.from({ length: 63 }, () => 0.5), head,
    base: [0, -.2], aim: [aim.x / -aim.z, (aim.y - EYE_Y) / -aim.z], palm: [.5, .5], grab: [.5, .5],
    palmWidth: .2, pinching, fist: false, palmFacesEyes: false, menuEligible: false }] };
}

/** World point of an element inside an atlas panel, from the matrix the shell published. */
async function target(page, panelId, selector, host = '.win-shell') {
  const geo = await page.evaluate(([panelId, selector, host]) => {
    const shell = document.querySelector(host);
    const el = selector ? shell.querySelector(selector) : shell;
    const r = shell.getBoundingClientRect(), b = el.getBoundingClientRect();
    const panel = window.__last.panels.find(p => p.id === panelId);
    return { matrix: panel.matrix, rect: panel.rect,
      x: b.left + b.width / 2 - r.left - r.width / 2, y: r.height / 2 - (b.top + b.height / 2 - r.top) };
  }, [panelId, selector, host]);
  const M = new THREE.Matrix4().fromArray(geo.matrix);
  return new THREE.Vector3(geo.x / geo.rect[2], geo.y / geo.rect[3], 0).applyMatrix4(M);
}

async function hold(page, aim, depth, pinchForMs, before = 0) {
  await page.evaluate(() => { clearInterval(window.__feed); window.__feed = setInterval(() => window.nextvrHands(structuredClone(window.__h)), 50); });
  if (before) await page.waitForTimeout(before);
  await page.evaluate(h => { window.__h = h; }, handAt(aim, depth, false));
  await page.waitForTimeout(400);
  await page.evaluate(h => { window.__h = h; }, handAt(aim, depth, true));
  await page.waitForTimeout(pinchForMs);
  await page.evaluate(h => { window.__h = h; }, handAt(aim, depth, false));
  await page.waitForTimeout(400);
  await page.evaluate(() => clearInterval(window.__feed));
}

test('the keyboard types into the focused field, repeats while held and follows its window', { timeout: 180000 }, async t => {
  const server = await startServer();
  let browser;
  try {
    try { browser = await chromium.launch({ executablePath: await bundledChromium.executablePath(), args: bundledChromium.args, headless: true }); }
    catch (err) { t.skip('Chromium unavailable: ' + err.message?.slice(0, 80)); return; }
    const page = await browser.newPage({ viewport: { width: 4096, height: 4096 } });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.addInitScript(nativeShim);
    await page.goto(`http://127.0.0.1:${server.address().port}/`);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForFunction(() => window.__last?.panels.length >= 1);
    await page.evaluate(p => { window.nextvrResume(); window.nextvrPose(p); window.nextvrHands({ hands: [] }); }, IDENTITY);
    await page.evaluate(() => { localStorage.setItem('nextvr.v1', JSON.stringify({ lang: 'en' })); });
    await page.reload();
    await page.waitForSelector('[data-entry-act="start"]');
    await page.evaluate(() => document.querySelector('[data-entry-act="start"]')?.click());
    await page.waitForFunction(() => window.__last?.panels.some(p => p.id === 'dock'));
    await page.evaluate(p => { window.nextvrResume(); window.nextvrPose(p); window.nextvrHands({ hands: [] }); }, IDENTITY);
    await page.waitForTimeout(300);

    // A browser window: its URL bar is a real shell field, and it is the one the user types into.
    await page.locator('.dock [data-id="browser"]').click();
    await page.waitForFunction(() => window.__last?.panels.some(p => p.id === 'browser'));
    await page.evaluate(() => { document.querySelector('.win-shell[data-window-id="browser"] .fld').value = ''; });
    await page.waitForTimeout(200);

    const field = await target(page, 'browser', '.fld');
    await hold(page, field, .55, 700);
    assert.ok(await page.evaluate(() => !!document.querySelector('.kb')), 'pinching a field opens the floating keyboard');

    const before = await page.evaluate(() => window.__last.panels.find(p => p.id === 'keyboard')?.matrix ?? null);
    assert.ok(before, 'the keyboard is composited into the atlas');

    // One pinch on one key writes one character: a key fires when the finger goes DOWN, so typing
    // does not need a full press-and-release per character any more. A tap must stay a tap even
    // with the hand pipeline's sampling latency, which is why the repeat delay is long.
    await page.evaluate(() => { document.querySelector('.win-shell[data-window-id="browser"] .fld').value = ''; window.__typed = []; });
    const keyA = await target(page, 'keyboard', '[data-k="a"]', '.kb');
    await hold(page, keyA, .5, 250);
    assert.equal(await page.evaluate(() => document.querySelector('.win-shell[data-window-id="browser"] .fld').value), 'a',
      'one pinch writes exactly one character');
    await page.evaluate(() => { document.querySelector('.win-shell[data-window-id="browser"] .fld').value = ''; });
    await hold(page, keyA, .5, 450);
    assert.equal(await page.evaluate(() => document.querySelector('.win-shell[data-window-id="browser"] .fld').value), 'a',
      'a quick pinch is still one character: repeat only starts after a real hold');

    // Holding the same key repeats it: that was impossible when a key only fired on release.
    await page.evaluate(() => { document.querySelector('.win-shell[data-window-id="browser"] .fld').value = ''; });
    await hold(page, keyA, .5, 2000);
    const repeated = await page.evaluate(() => document.querySelector('.win-shell[data-window-id="browser"] .fld').value);
    assert.ok(repeated.length > 2, 'holding a key repeats it instead of writing once: ' + JSON.stringify(repeated));
    assert.ok(/^a+$/.test(repeated), 'and repeats the same key: ' + JSON.stringify(repeated));

    // Sliding off the keyboard while still pinched releases the key without writing anything else.
    await page.evaluate(() => { document.querySelector('.win-shell[data-window-id="browser"] .fld').value = ''; });
    await page.evaluate(() => { clearInterval(window.__feed); window.__feed = setInterval(() => window.nextvrHands(structuredClone(window.__h)), 50); });
    await page.evaluate(h => { window.__h = h; }, handAt(keyA, .5, false));
    await page.waitForTimeout(400);
    await page.evaluate(h => { window.__h = h; }, handAt(keyA, .5, true));
    await page.waitForTimeout(600);
    await page.evaluate(h => { window.__h = h; }, handAt(new THREE.Vector3(0, 1.9, -1.2), .5, true));  // off the panel
    await page.waitForTimeout(600);
    await page.evaluate(h => { window.__h = h; }, handAt(new THREE.Vector3(0, 1.9, -1.2), .5, false));
    await page.waitForTimeout(400);
    await page.evaluate(() => clearInterval(window.__feed));
    const slid = await page.evaluate(() => document.querySelector('.win-shell[data-window-id="browser"] .fld').value);
    assert.ok(/^a+$/.test(slid) && slid.length < repeated.length, 'leaving the keyboard stops the repeat: ' + JSON.stringify(slid));

    // The keyboard now sits in front of the window whose field it is typing into.
    const owner = await page.evaluate(() => {
      const m = window.__last.panels.find(p => p.id === 'browser').matrix;
      const kb = window.__last.panels.find(p => p.id === 'keyboard').matrix;
      return { window: [m[12], m[13], m[14]], keyboard: [kb[12], kb[13], kb[14]] };
    });
    const flat = Math.hypot(owner.window[0], owner.window[2]) || 1e-3;
    const sameSide = (owner.keyboard[0] * owner.window[0] + owner.keyboard[2] * owner.window[2]) / flat;
    assert.ok(sameSide > 0, 'the keyboard moved to the side of the eye the window is on: ' + JSON.stringify(owner));
    const yaw = Math.atan2(-owner.window[0], -owner.window[2]);
    assert.ok(Math.abs(Math.atan2(-owner.keyboard[0], -owner.keyboard[2]) - yaw) < .35,
      'and faces it: the keyboard yaw follows the owning window');

    // A hosted surface gets the same keystroke, with its glyph and shift flag, over the bridge.
    await page.evaluate(() => window.nextvrBrowserFocus('browser', true));
    await page.evaluate(() => window.__typed = []);
    await hold(page, await target(page, 'keyboard', '[data-k="b"]', '.kb'), .5, 250);
    await hold(page, await target(page, 'keyboard', '[data-k="⌫"]', '.kb'), .5, 250);
    await page.evaluate(() => { document.querySelector('.kb [data-k="⇧"]').click(); document.querySelector('.kb [data-k="⇧"]').click(); });
    await hold(page, await target(page, 'keyboard', '[data-k="c"]', '.kb'), .5, 250);
    assert.deepEqual(await page.evaluate(() => window.__typed.filter(e => e.phase !== 2)),
      [{ id: 'browser', k: 'b', shift: false, phase: 1 }, { id: 'browser', k: 'b', shift: false, phase: 3 },
       { id: 'browser', k: '⌫', shift: false, phase: 1 }, { id: 'browser', k: '⌫', shift: false, phase: 3 },
       { id: 'browser', k: 'c', shift: true, phase: 1 }, { id: 'browser', k: 'c', shift: true, phase: 3 }],
      'a hosted surface receives the glyph, the shift flag and the key state, which the native side hands to the same engine');

    // A HELD key on a hosted page is down, repeats, up — the sequence a 3D game needs to keep moving
    // instead of taking one step per letter.
    await page.evaluate(() => { window.__typed = []; });
    await hold(page, await target(page, 'keyboard', '[data-k="w"]', '.kb'), .5, 1500);
    const held = await page.evaluate(() => window.__typed.filter(e => e.k === 'w').map(e => e.phase));
    assert.equal(held[0], 1, 'a held key starts with the key going down');
    assert.equal(held.at(-1), 3, 'and ends with exactly one keyup when the finger lifts');
    assert.equal(held.filter(p => p === 1).length, 1, 'one key down, not one per letter: ' + JSON.stringify(held));
    assert.equal(held.filter(p => p === 3).length, 1, 'one keyup for the whole hold: ' + JSON.stringify(held));
    assert.ok(held.filter(p => p === 2).length > 2, 'with repeats while it is held: ' + JSON.stringify(held));

    // Touching a non-field on that page no longer tears down a keyboard serving it: scrolling a page
    // to read is not a request to stop typing.
    await page.evaluate(() => window.nextvrBrowserFocus('browser', false));
    assert.ok(await page.evaluate(() => !!document.querySelector('.kb')), 'scrolling the same page keeps the keyboard up');
    await page.evaluate(() => window.nextvrBrowserFocus('other', false));
    assert.equal(await page.evaluate(() => !!document.querySelector('.kb')), false, 'leaving that page does close it');

    assert.deepEqual(errors, []);
  } finally { await browser?.close(); server.close(); }
});