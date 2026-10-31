import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile('web/index.html', 'utf8');
test('dock and workspace are closer without enabling head-follow', () => {
  assert.match(html, /DOCK_DIST = 1\.78/);
  assert.match(html, /ARC_DIST = 2\.00/);
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

test('ray starts in pinch space and freezes its target while pinching', async () => {
  const { default: vm } = await import('node:vm');
  const start = html.indexOf('const pinchRayState = {}');
  const end = html.indexOf('function processPinchClick(', start);
  const context = vm.createContext({ THREE: { MathUtils: { clamp: (n, lo, hi) => Math.max(lo, Math.min(hi, n)) } } });
  vm.runInContext(html.slice(start, end), context);
  const points = Array.from({ length: 21 }, () => ({ x: 100, y: 200 }));
  points[2] = { x: 110, y: 150 };
  points[5] = { x: 140, y: 140 };
  points[4] = { x: 110, y: 130 };
  points[8] = { x: 150, y: 110 };
  const hand = { points, pinchProgress: 0 };
  const first = { ...context.getStablePinchRay('Right', hand, 800, 400) };
  assert.equal(first.originX, 130);
  assert.equal(first.originY, 120);
  hand.pinchProgress = .9;
  points[8] = { x: 115, y: 132 };
  points[4] = { x: 115, y: 132 };
  const held = { ...context.getStablePinchRay('Right', hand, 800, 400) };
  assert.equal(held.x, first.x);
  assert.equal(held.y, first.y);
  hand.pinchProgress = 0;
  points[2].x += 50;
  const released = context.getStablePinchRay('Right', hand, 800, 400);
  assert.notEqual(released.x, first.x, 'release resumes palm-directed aim');
});

test('chicken albedo is sRGB and exposure/ambient no longer wash out shadows', () => {
  assert.match(html, /tex.encoding=THREE.sRGBEncoding/);
  assert.match(html, /kitchenRenderer.toneMappingExposure = \.85/);
  assert.match(html, /AmbientLight\(0xffe6c8,\.12\)/);
  assert.match(html, /kitchenChicken.traverse/);
  assert.match(html, /slab.receiveShadow=true/);
  assert.match(html, /contact.rotation.x=-Math.PI\/2/);
});

test('web page is transformed/clipped to its actual floating surface', async () => {
  const java = await readFile('app/src/main/java/com/dixvr/app/ProjectedPanelWebView.java', 'utf8');
  const activity = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java', 'utf8');
  assert.match(html, /quad:getNativePanelQuad\(el\)/);
  assert.match(html, /panel.localToWorld\(v\);v.project\(camera\)/);
  assert.match(java, /projection.setPolyToPoly/);
  assert.match(java, /canvas.clipPath\(clip\)/);
  assert.match(java, /local.transform\(inverse\)/);
  assert.match(activity, /settings.setUseWideViewPort\(isMainShell\)/);
  assert.match(activity, /settings.setTextZoom\(140\)/);
});

test('CI uploads an actual APK to a commit-pinned prerelease without changing latest main release', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.match(workflow, /gh release create/);
  assert.match(workflow, /--target "\$HEAD_SHA"/);
  assert.match(workflow, /--prerelease --latest=false/);
  assert.match(workflow, /releases\/download\/\$\{TAG\}\/dixVR-debug.apk/);
  assert.match(workflow, /sha256sum dixVR-debug.apk > dixVR-debug.apk.sha256/);
});

test('content quadrilateral projects all four corners rather than an enclosing rectangle', async () => {
  const imported = await import('three');
  const THREE = imported.default || imported;
  const { default: vm } = await import('node:vm');
  const panel = new THREE.Object3D();
  panel.element = { offsetWidth: 760, offsetHeight: 520 };
  panel.scale.setScalar(.002);
  panel.position.z = -2;
  const scene = new THREE.Scene(); scene.add(panel);
  const camera = new THREE.PerspectiveCamera(55, 2, .1, 100);
  const el = { closest: () => true, offsetParent: panel.element, offsetLeft: 1, offsetTop: 96, offsetWidth: 726, offsetHeight: 424 };
  const context = vm.createContext({ THREE, scene, camera, googlePanel3D: panel, youtubePanel3D: null, vrCardboardActive: false, window: { innerWidth: 800, innerHeight: 400 } });
  const start = html.indexOf('function getNativePanelQuad(');
  const end = html.indexOf('function serializeNativePanelBounds(', start);
  vm.runInContext(html.slice(start, end), context);
  const flat = context.getNativePanelQuad(el);
  assert.equal(flat.length, 8);
  assert.ok(Math.abs(flat[1]-flat[3]) < 1e-8);
  assert.ok(Math.abs(flat[0]-flat[6]) < 1e-8);
  panel.rotation.y = .4;
  const skewed = context.getNativePanelQuad(el);
  assert.ok(Math.abs(skewed[1]-skewed[3]) > 1, 'perspective surface must retain its tilted top edge');
  assert.ok(skewed.every(Number.isFinite));
});
