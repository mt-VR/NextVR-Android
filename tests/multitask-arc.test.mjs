import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

function makeElement(tag = 'div') {
  const el = {
    tagName: tag.toUpperCase(),
    id: '',
    className: '',
    title: '',
    textContent: '',
    innerHTML: '',
    hidden: false,
    dataset: {},
    offsetWidth: 0,
    offsetHeight: 0,
    offsetTop: 0,
    style: { display: '', visibility: 'visible', opacity: '1' },
    children: [],
    classList: {
      _set: new Set(),
      add(...names) { names.forEach((n) => this._set.add(n)); },
      remove(...names) { names.forEach((n) => this._set.delete(n)); },
      toggle(n, force) {
        const shouldAdd = force === undefined ? !this._set.has(n) : !!force;
        if (shouldAdd) this._set.add(n);
        else this._set.delete(n);
        return shouldAdd;
      },
      contains(n) { return this._set.has(n); },
    },
    appendChild(child) {
      if (child) this.children.push(child);
      return child;
    },
    remove() {},
    removeAttribute() {},
    setAttribute() {},
    getAttribute(attr) {
      if (attr === 'data-action') return this.dataset.action || null;
      if (attr === 'data-win-slot') return this.dataset.winSlot || null;
      return null;
    },
    addEventListener() {},
    getBoundingClientRect() {
      return { left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50 };
    },
    querySelector() { return null; },
    querySelectorAll() { return []; },
  };
  return el;
}

/**
 * Harness: roda o motor de multitarefa REAL (trecho do web/index.html) dentro de uma VM,
 * com elementos de DOM que reportam tamanho medido (offsetWidth/offsetHeight).
 */
async function createMultitaskHarness({ sizes = {}, dock = {} } = {}) {
  const [html, threeCode] = await Promise.all([
    readFile('web/index.html', 'utf8'),
    readFile('node_modules/three/build/three.min.js', 'utf8'),
  ]);

  const startIdx = html.indexOf('// ===== MULTITAREFA ESPACIAL dixVR');
  const endIdx = html.indexOf('function initScene()');
  assert.ok(startIdx > 0 && endIdx > startIdx, 'Multitask engine block must exist in web/index.html');
  const multitaskCode = html.slice(startIdx, endIdx);

  const hostEl = makeElement('div');
  const dockEl = makeElement('div');
  const dockPanel = makeElement('div');
  dockEl.querySelector = (sel) => (sel === '.ar-dock-panel' ? dockPanel : null);
  dockEl.offsetHeight = dock.groupHeight ?? 120;
  dockPanel.offsetHeight = dock.panelHeight ?? 70;
  dockPanel.offsetTop = dock.panelTop ?? 50;

  const sandbox = {
    Math,
    Object,
    Array,
    Set,
    JSON,
    console,
    window: { innerWidth: 1920, innerHeight: 1080 },
    localStorage: { getItem: () => null, setItem: () => {} },
    googleNativeBridgeActive: false,
    youtubeNativeBridgeActive: false,
    requestAnimationFrame: (fn) => fn(),
    document: {
      getElementById: (id) => (id === 'google-panel-host' ? hostEl : makeElement('div')),
      createElement: (tag) => makeElement(tag),
      querySelector: () => null,
    },
    workspaceYaw: Math.PI,
    windowGroupElement: dockEl,
    group3D: null,
    scene: null,
    camera: null,
    googleInstalled: true,
    youtubeInstalled: true,
    googlePanel3D: null,
    googlePanelElement: null,
    googleKeyboardPanel3D: null,
    googleKeyboardElement: null,
    youtubePanel3D: null,
    youtubePanelElement: null,
    activePanelType: null,
    lastMovedPanel3D: null,
    cachedButtons: [],
    resetDwell: () => {},
    refreshStore: () => {},
    refreshLibrary: () => {},
    syncVRMirrorClones: () => {},
    alignGoogleKeyboardPanel: () => {},
    updateNativeGoogleBounds: () => {},
    updateNativeYouTubeBounds: () => {},
    callNativeGooglePanel: () => true,
    callNativeYouTubePanel: () => true,
    showGoogleSearchOverlay: () => {},
  };
  sandbox.window.window = sandbox.window;

  vm.createContext(sandbox);
  vm.runInContext(threeCode, sandbox);

  vm.runInContext(`
    THREE.CSS3DObject = class CSS3DObject extends THREE.Object3D {
      constructor(element) {
        super();
        this.element = element;
        this.isCSS3DObject = true;
      }
    };
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, 16 / 9, 0.1, 1000);
    const workspaceOrigin = new THREE.Vector3(0, 0, 0);
    group3D = new THREE.CSS3DObject(windowGroupElement);
    scene.add(group3D);

    function createGooglePanel() {
      if (googlePanel3D) return;
      googlePanelElement = document.createElement('div');
      googlePanelElement.offsetWidth = 760; googlePanelElement.offsetHeight = 480;
      googlePanel3D = new THREE.CSS3DObject(googlePanelElement);
      scene.add(googlePanel3D);
    }
    function createYouTubePanel() {
      if (youtubePanel3D) return;
      youtubePanelElement = document.createElement('div');
      youtubePanelElement.offsetWidth = 760; youtubePanelElement.offsetHeight = 480;
      youtubePanel3D = new THREE.CSS3DObject(youtubePanelElement);
      scene.add(youtubePanel3D);
    }
  `, sandbox);

  vm.runInContext(multitaskCode, sandbox);

  // Cria as janelas flutuantes e aplica os tamanhos MEDIDOS (como no navegador).
  vm.runInContext(`
    createFloatingDomWindow('library', document.createElement('div'), 'Biblioteca · dixVR');
    createFloatingDomWindow('store', document.createElement('div'), 'Loja · dixVR');
    createFloatingDomWindow('chat', document.createElement('div'), 'Notas · dixVR');
    createFloatingDomWindow('panoramas', document.createElement('div'), 'Ambientes · dixVR');
  `, sandbox);

  const sizeScript = Object.entries(sizes)
    .map(([appId, size]) => `
      (function(){
        var entry = multitaskPanels['${appId}'];
        if (!entry) return;
        entry.wrapperEl.offsetWidth = ${size.w};
        entry.wrapperEl.offsetHeight = ${size.h};
      })();
    `)
    .join('\n');
  if (sizeScript) vm.runInContext(sizeScript, sandbox);

  vm.runInContext('layoutMultitaskArc();', sandbox);

  const mt=sandbox.window.__dixVRMultitask;
  sandbox.worldLockEnabled=true;sandbox.captureWorldLockPose=()=>{};
  sandbox.resetOpticalFlowDrift=()=>{};sandbox.updateButtonCache=()=>{};sandbox.updateWorldLockButton=()=>{};
  sandbox.draggingPanelWithHand=false;sandbox.googlePanelDragging=false;sandbox.youtubePanelDragging=false;
  vm.runInContext(html.slice(html.indexOf('function alignPanelInFront('),html.indexOf('class LatestHandFramePump')),sandbox);
  mt.testView=(pitch,yaw,roll=0)=>{
    vm.runInContext(`camera.quaternion.setFromEuler(new THREE.Euler(${pitch},${yaw},${roll},'YXZ'));camera.position.set(.3,.2,-.1);recenterWorkspace();`,sandbox);
    return vm.runInContext(`(()=>{
      const forward=new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion);
      const target=camera.position.clone().addScaledVector(forward,DOCK_DIST);
      const normal=new THREE.Vector3(0,0,1).applyQuaternion(group3D.quaternion);
      const snapshot=window.__dixVRMultitask.getGeometrySnapshot();
      const position=group3D.position.clone();camera.rotation.y+=.7;
      layoutMultitaskArc();
      return {error:target.distanceTo(position),facing:normal.dot(forward),drift:position.distanceTo(group3D.position),snapshot};
    })()`,sandbox);
  };
  return mt;
}

/** Distancia perpendicular entre o painel A e o plano do painel B (teste de sobreposicao). */
function perpendicularDistance(a, b) {
  const localX = { x: Math.cos(a.yaw), z: -Math.sin(a.yaw) };
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  return Math.abs(dx * localX.x + dz * localX.z);
}

test('NextVR-style 3-window multitasking opens 3 apps (center, left, right) strictly above the dock', async () => {
  const mt = await createMultitaskHarness();

  // 1st app -> front (center)
  mt.open('library');
  assert.equal(mt.getOpenCount(), 1);
  assert.deepEqual({ ...mt.getSlots() }, { center: 'library', left: null, right: null });

  // 2nd app -> new app in front (center), previous slides to left
  mt.open('store');
  assert.equal(mt.getOpenCount(), 2);
  assert.deepEqual({ ...mt.getSlots() }, { center: 'store', left: 'library', right: null });

  // 3rd app -> 3 simultaneous apps: 1 in front (center), 1 on left, 1 on right
  mt.open('youtube');
  assert.equal(mt.getOpenCount(), 3);
  assert.deepEqual({ ...mt.getSlots() }, { center: 'youtube', left: 'library', right: 'store' });

  const snap = mt.getGeometrySnapshot();
  assert.ok(snap.windows.center, 'Center window must exist');
  assert.ok(snap.windows.left, 'Left window must exist');
  assert.ok(snap.windows.right, 'Right window must exist');

  // Center is straight ahead (x ~ 0), left is on -X, right is on +X
  assert.ok(Math.abs(snap.windows.center.x) < 0.001, `Expected center x ~ 0, got ${snap.windows.center.x}`);
  assert.ok(snap.windows.left.x < -1.2, `Expected left window on -X, got ${snap.windows.left.x}`);
  assert.ok(snap.windows.right.x > 1.2, `Expected right window on +X, got ${snap.windows.right.x}`);

  // ALL 3 windows must float strictly ABOVE the dock, with the configured clearance.
  for (const slot of ['left', 'center', 'right']) {
    const w = snap.windows[slot];
    assert.equal(w.aboveDock, true, `Window in ${slot} must be strictly above dock`);
    assert.ok(
      w.bottomY >= snap.dockTopY + snap.clearance - 1e-6,
      `Expected ${slot} bottomY (${w.bottomY}) >= dockTopY (${snap.dockTopY}) + ${snap.clearance}m`
    );
  }

  // The dock top must be measured from the real DOM (panel offset inside the group).
  assert.ok(snap.dockTopY > -0.68, `Dock top (${snap.dockTopY}) must be above the dock centre`);
});

test('the 3 windows never overlap each other and stay within reach', async () => {
  const mt = await createMultitaskHarness();
  mt.open('library');
  mt.open('store');
  mt.open('youtube');

  const snap = mt.getGeometrySnapshot();
  const { center, left, right } = snap.windows;

  const distLeft = perpendicularDistance(center, left);
  const distRight = perpendicularDistance(center, right);

  assert.ok(
    distLeft >= center.projectedHalfW + left.projectedHalfW - 1e-6,
    `Left window overlaps the front window (${distLeft} < ${center.halfW + left.halfW})`
  );
  assert.ok(
    distRight >= center.projectedHalfW + right.projectedHalfW - 1e-6,
    `Right window overlaps the front window (${distRight} < ${center.halfW + right.halfW})`
  );

  // The side windows stay reachable with the eyes (<= ARC_MAX_STEP).
  assert.ok(snap.arcStep <= 0.92, `Arc step ${snap.arcStep} must stay within reach`);
  assert.ok(snap.arcStep >= 0.52, `Arc step ${snap.arcStep} must keep the windows close`);
});

test('a tall window shrinks instead of sinking into the dock', async () => {
  // A library window that grew (extra content) measures 900px instead of 480px.
  const mt = await createMultitaskHarness({ sizes: { library: { w: 760, h: 900 } } });

  mt.open('library');
  const snap = mt.getGeometrySnapshot();
  const w = snap.windows.center;

  assert.ok(w.pxH === 900, `Expected the measured height (900), got ${w.pxH}`);
  assert.ok(
    w.bottomY >= snap.dockTopY + snap.clearance - 1e-6,
    `Tall window bottom (${w.bottomY}) must stay above dock top (${snap.dockTopY})`
  );
  assert.ok(w.topY <= 0.62 + 1e-6, `Tall window top (${w.topY}) must respect the height ceiling`);
  // The window was scaled down to fit between the dock and the height ceiling.
  assert.ok(w.scale < 0.00202, `Tall window must be scaled down, got ${w.scale}`);
});

test('opening an app in a specific slot respects that slot', async () => {
  const mt = await createMultitaskHarness();

  mt.open('library', 'left');
  assert.deepEqual({ ...mt.getSlots() }, { center: null, left: 'library', right: null });

  mt.open('store', 'right');
  assert.deepEqual({ ...mt.getSlots() }, { center: null, left: 'library', right: 'store' });

  // Front slot is still free -> the app goes to the front.
  mt.open('chat', 'center');
  assert.deepEqual({ ...mt.getSlots() }, { center: 'chat', left: 'library', right: 'store' });
  assert.equal(mt.getOpenCount(), 3);
});

test('dock slot points open the focused app in that exact slot', async () => {
  const mt = await createMultitaskHarness();

  // Empty slot -> opens the focused app (library by default) right there.
  mt.activateSlotPoint('left');
  assert.deepEqual({ ...mt.getSlots() }, { center: null, left: 'library', right: null });

  // Occupied side slot -> brings that window to the front.
  mt.activateSlotPoint('left');
  assert.deepEqual({ ...mt.getSlots() }, { center: 'library', left: null, right: null });

  // Occupied front slot -> closes the window.
  mt.activateSlotPoint('center');
  assert.equal(mt.getOpenCount(), 0);
});

test('opening a 4th app evicts the LRU side window and closing center promotes a side window', async () => {
  const mt = await createMultitaskHarness();

  mt.open('library'); // t=1
  mt.open('store');   // t=2 -> left=library, center=store
  mt.open('chat');    // t=3 -> left=library, right=store, center=chat

  // Opening 4th app ('google') evicts oldest side window ('library')
  mt.open('google');
  assert.equal(mt.getOpenCount(), 3);
  assert.deepEqual({ ...mt.getSlots() }, { center: 'google', left: 'chat', right: 'store' });

  // Swap right ('store') into center
  mt.moveToSlot('store', 'center');
  assert.deepEqual({ ...mt.getSlots() }, { center: 'store', left: 'chat', right: 'google' });

  // Closing center ('store') automatically promotes most recent side window into center
  mt.close('store');
  assert.equal(mt.getOpenCount(), 2);
  assert.ok(mt.getSlots().center !== null, 'Closing center must promote a side window to center');
});


test('all three windows retain the center scale and canonical dimensions, even at the widest layout', async () => {
  const mt = await createMultitaskHarness();
  mt.open('library'); mt.open('google'); mt.open('youtube');
  const snap=mt.getGeometrySnapshot();
  const windows=Object.values(snap.windows);
  for(const w of windows){
    assert.equal(w.pxW,760); assert.equal(w.pxH,480);
    assert.ok(Math.abs(w.scale-snap.windows.center.scale)<1e-10);
    assert.ok(Math.abs(w.halfW-snap.windows.center.halfW)<1e-10);
    assert.ok(Math.abs(w.halfH-snap.windows.center.halfH)<1e-10);
  }
  assert.ok(snap.arcRadius>=1.65, 'move arc out instead of shrinking side windows');
  assert.ok(snap.arcStep<=.92);
  assert.ok(perpendicularDistance(snap.windows.center,snap.windows.left)>=snap.windows.center.halfW+snap.windows.left.projectedHalfW-1e-7);
});


test('panorama gallery occupies one of the three equal-sized above-Dock slots', async () => {
  const mt=await createMultitaskHarness();
  mt.open('library');mt.open('google');mt.open('youtube');mt.open('panoramas');
  const snapshot=mt.getGeometrySnapshot(),windows=Object.values(snapshot.windows);
  assert.equal(windows.length,3);
  assert.ok(windows.some(w=>w.appId==='panoramas'));
  for(const w of windows){assert.equal(w.pxW,760);assert.equal(w.pxH,480);assert.equal(w.scale,snapshot.windows.center.scale);}
});


test('recenter places the Dock at gaze target in every direction and keeps the whole arc anchored',async()=>{
  const mt=await createMultitaskHarness();mt.open('library');mt.open('google');mt.open('youtube');
  for(const [pitch,yaw] of [[0,0],[0,Math.PI],[0,Math.PI/2],[0,-Math.PI/2],[.9,.4],[-.9,2],[Math.PI/2,0],[-Math.PI/2,0]]){
    const result=mt.testView(pitch,yaw,.15);
    assert.ok(result.error<1e-7,`Dock target error at ${pitch}/${yaw}: ${result.error}`);
    assert.ok(Math.abs(result.facing+1)<1e-7,'Dock surface faces back toward viewer, even vertically');
    assert.ok(result.drift<1e-7,'camera motion after recenter does not move Dock');
    const panels=Object.values(result.snapshot.windows);assert.equal(panels.length,3);
    for(const panel of panels){assert.ok(panel.aboveDock,'clearance is evaluated in tilted workspace coordinates');assert.equal(panel.scale,panels[0].scale);}
  }
});
