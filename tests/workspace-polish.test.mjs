import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile('web/index.html', 'utf8');
test('dock and workspace are closer without enabling head-follow', () => {
  assert.match(html, /DOCK_DIST = 1\.55/);
  assert.match(html, /ARC_DIST = 1\.65/);
  assert.match(html, /let worldLockEnabled = true/);
});
test('dock grip remains lower and floating windows use outside bottom bars', () => {
  assert.match(html, /left: -20px;\s*top: 60%/);
  assert.match(html, /bottom:-30px; transform:translateX\(-50%\)/);
  assert.match(html, /attachMultitaskPointerDrag\(handle, appId, getPanel3D\)/);
});
test('both eyes receive changing UI, canvas pixels and hand overlay', () => {
  assert.match(html, /clone.element.className\s*=\s*obj.element.className/);
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
  assert.match(html, /if\(experimentGameActive\) \{ renderHandOverlay\(now\); return; \}/);
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
  const java = await readFile('app/src/main/java/com/dixvr/app/ProjectedBrowserPanel.java', 'utf8');
  const activity = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java', 'utf8');
  assert.match(html, /quad:getNativePanelQuad\(el\)/);
  assert.match(html, /probe.getBoundingClientRect\(\)/);
  assert.match(java, /projection.setPolyToPoly/);
  assert.match(java, /canvas.clipPath\(clip\)/);
  assert.match(java, /local.transform\(inverse\)/);
  assert.match(activity, /settings.setUseWideViewPort\(isMainShell\)/);
  assert.match(activity, /settings.setTextZoom\(90\)/);
});

test('CI uploads an actual APK to a commit-pinned prerelease without changing latest main release', async () => {
  const workflow = await readFile('.github/workflows/android.yml', 'utf8');
  assert.match(workflow, /gh release create/);
  assert.match(workflow, /--target "\$HEAD_SHA"/);
  assert.match(workflow, /--prerelease --latest=false/);
  assert.match(workflow, /releases\/download\/\$\{TAG\}\/dixVR-debug.apk/);
  assert.match(workflow, /sha256sum dixVR-debug.apk > dixVR-debug.apk.sha256/);
});

test('native corners follow actual DOM projection, including a pose change, without a second camera model', async () => {
  const { default: vm } = await import('node:vm');
  let pose = [[10,20],[110,22],[108,82],[12,85]];
  let created = 0, appended = 0;
  const root = { appendChild() { appended++; } };
  const context = vm.createContext({ document: { createElement() {
    const i=created++;
    return { style: {}, setAttribute() {}, getBoundingClientRect: () => ({ left:pose[i][0], top:pose[i][1] }) };
  } } });
  const start = html.indexOf('const nativePanelCornerProbes = new WeakMap()');
  const end = html.indexOf('function serializeNativePanelBounds(', start);
  vm.runInContext(html.slice(start, end), context);
  assert.deepEqual([...context.getNativePanelQuad(root)], pose.flat());
  pose = [[-20,10],[60,-3],[65,70],[-10,91]];
  assert.deepEqual([...context.getNativePanelQuad(root)], pose.flat());
  assert.equal(created,4,'reuse probes across camera frames');
  assert.equal(appended,4);
});

test('browser frame and page share one native transform and fail closed on missing geometry', async () => {
  const java = await readFile('app/src/main/java/com/dixvr/app/ProjectedBrowserPanel.java','utf8');
  assert.match(java, /content.addView\(header/);
  assert.match(java, /content.addView\(page/);
  assert.match(java, /if \(!ready\) return;/);
  assert.match(java, /canvas.concat\(projection\);\s*canvas.clipPath\(rounded\);\s*super.dispatchDraw/);
  assert.match(java, /int width = dp\(800\)/);
  assert.match(java, /float\[\] source = \{0, 0, logicalWidth/);
  assert.doesNotMatch(java, /source = .*bounds.widthPx/);
  assert.match(html, /native-composited/);
});

test('six web shortcuts have matching native allowlist entries and share the browser slot', async () => {
  const java = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java','utf8');
  const { default: vm } = await import('node:vm');
  const start = html.indexOf('const WEB_APPS = [');
  const end = html.indexOf('function openLibraryWebApp',start);
  const apps = vm.runInNewContext(html.slice(start,end)+'; WEB_APPS');
  assert.equal(apps.length,6);
  for(const app of apps){
    assert.match(java,new RegExp('"'+app.id+'"\\.equals\\(appId\\)'));
    assert.ok(java.includes(app.url));
    assert.ok(app.url.startsWith('https://'));
  }
  assert.match(html, /navegador compartilhado/);
  assert.match(html, /nativeGoogleCall\('openWebApp',id\)/);
});

test('native geometry updates coalesce and pinch events reach the whole browser panel', async () => {
  const java = await readFile('app/src/main/java/com/dixvr/app/DixVrActivity.java','utf8');
  assert.match(java,/latest.set\(json\)/);
  assert.match(java,/queued.compareAndSet\(false, true\)/);
  assert.match(java,/rootLayout.postOnAnimation/);
  assert.match(java,/latest.getAndSet\(null\)/);
  assert.match(java,/dispatchSyntheticTap\(googlePanelView/);
  assert.match(java,/dispatchSyntheticTap\(youtubePanelView/);
  assert.match(java,/stereoMirror.addSource\(googlePanelView\)/);
  assert.match(java,/__dixVRMultitask.moveToSlot/);
  assert.match(java,/"zoomIn".equals\(command\)/);
});

test('web shortcuts reject unknown app IDs and navigate only through the browser surface', async () => {
  const { default: vm } = await import('node:vm');
  const calls=[];
  let opened=0;
  const context=vm.createContext({ googleInstalled:false, localStorage:{setItem(){}}, googleFrame:null,
    openGooglePanel:()=>opened++, nativeGoogleCall:(...args)=>{calls.push(args);return true;} });
  const start=html.indexOf('const WEB_APPS = [');
  const end=html.indexOf('function refreshLibrary()',start);
  vm.runInContext(html.slice(start,end),context);
  assert.equal(context.openLibraryWebApp('github'),true);
  assert.equal(opened,1);
  assert.deepEqual(calls,[['openWebApp','github']]);
  assert.equal(context.openLibraryWebApp('unrecognized'),false);
  assert.equal(opened,1);
});
