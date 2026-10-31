import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile('web/index.html', 'utf8');
test('stable world-locked geometry is restored', () => {
  assert.match(html, /DOCK_DIST = 2\.08/);
  assert.match(html, /ARC_DIST = 2\.26/);
  assert.match(html, /let worldLockEnabled = true/);
});
test('grips are lower and the mini-window grip is outside the content', () => {
  assert.match(html, /left: -20px;\s*top: 60%/);
  assert.match(html, /right:-42px; top:60%/);
  assert.match(html, /attachMultitaskPointerDrag\(handle, appId, getPanel3D\)/);
});
test('both eyes receive changing UI, canvas pixels and hand overlay', () => {
  assert.match(html, /clone.element.className = obj.element.className/);
  assert.match(html, /clone.userData.markup !== markup/);
  assert.match(html, /copies\[i\].getContext\('2d'\)\?\.drawImage/);
  assert.match(html, /ctx.drawImage\(handsCanvas, 0, 0\)/);
  assert.match(html, /VR_EYE_RENDER_INTERVAL = 0/);
});
test('VR hides inactive ShootTheDie host and exit overlay', () => {
  assert.match(html, /#shoot-the-die-host:not\(\.active\) \{ display:none !important/);
  assert.match(html, /#shoot-the-die-close \{ display:none !important/);
});
test('pinch clicks on rising edge and Google remains an individual multitask surface', () => {
  const pinch = html.slice(html.indexOf('function processPinchClick'), html.indexOf('function findScrollablePanelAt'));
  assert.match(pinch, /pinchStart&&!wasPinching/);
  assert.match(pinch, /target.click\(\)/);
  assert.doesNotMatch(pinch, /DWELL_CLICK_MS/);
  assert.match(html, /if \(findSlotOfApp\('google'\)\) closeMultitaskWindow\('google'\)/);
});
test('games reduce GPU cost without disabling kitchen shadows', () => {
  assert.match(html, /key.shadow.mapSize.set\(1024,1024\)/);
  assert.match(html, /kitchenRenderer.shadowMap.enabled=true/);
  assert.match(html, /if\(experimentGameActive\) \{ renderHandsUI\(\); syncRightHandOverlay\(\); return; \}/);
});

test('holding a pinch clicks once; release rearms it without a dwell delay', async () => {
  const { default: vm } = await import('node:vm');
  const start = html.indexOf('function processPinchClick(');
  const end = html.indexOf('function findScrollablePanelAt', start);
  let clicks = 0;
  let target = { click() { clicks++; } };
  const context = vm.createContext({ experimentGameActive: false, pinchClickState: {}, findInteractiveAt: () => target });
  vm.runInContext(html.slice(start, end), context);
  context.processPinchClick('Left', 10, 10, true, true);
  context.processPinchClick('Left', 10, 10, true, true);
  assert.equal(clicks, 1);
  context.processPinchClick('Left', 10, 10, false, false);
  context.processPinchClick('Left', 10, 10, true, true);
  assert.equal(clicks, 2);
  target = null;
  context.processPinchClick('Right', 10, 10, true, true);
  target = { click() { clicks++; } };
  context.processPinchClick('Right', 10, 10, true, true);
  assert.equal(clicks, 2, 'a held pinch must not click a newly encountered target');
});

test('native right eye mirrors one WebView, without a second playback instance', async () => {
  const java = await readFile('app/src/main/java/com/dixvr/app/NativeStereoMirrorView.java', 'utf8');
  assert.match(java, /PixelCopy.request\(window, crop, frame.back/);
  assert.match(java, /token == generation/);
  assert.match(java, /frame.source.isShown\(\)/);
  assert.match(java, /handler.removeCallbacks\(tick\)/);
  assert.doesNotMatch(java, /new WebView|loadUrl/);
  assert.match(html, /nativeGoogleCall\('setStereoMode', true\)/);
  assert.match(html, /nativeGoogleCall\('setStereoMode', false\)/);
});
