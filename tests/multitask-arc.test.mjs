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

async function createMultitaskHarness() {
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

  const sandbox = {
    Math,
    Object,
    Array,
    Set,
    JSON,
    console,
    window: { innerWidth: 1920, innerHeight: 1080 },
    localStorage: { getItem: () => null, setItem: () => {} },
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

  // Minimal CSS3DObject compatible with Three.js Object3D
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
      googlePanel3D = new THREE.CSS3DObject(googlePanelElement);
      scene.add(googlePanel3D);
    }
    function createYouTubePanel() {
      if (youtubePanel3D) return;
      youtubePanelElement = document.createElement('div');
      youtubePanel3D = new THREE.CSS3DObject(youtubePanelElement);
      scene.add(youtubePanel3D);
    }
  `, sandbox);

  vm.runInContext(multitaskCode, sandbox);

  vm.runInContext(`
    createFloatingDomWindow('library', document.createElement('div'), 'Biblioteca · dixVR');
    createFloatingDomWindow('store', document.createElement('div'), 'Loja · dixVR');
    createFloatingDomWindow('chat', document.createElement('div'), 'Notas · dixVR');
    layoutMultitaskArc();
  `, sandbox);

  return sandbox.window.__dixVRMultitask;
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

  // Side windows ("janelinhas") are compact relative to front window and angled inward toward user
  assert.ok(snap.windows.left.yaw > 0.5, 'Left window must angle inward toward viewer');
  assert.ok(snap.windows.right.yaw < -0.5 && snap.windows.right.yaw > -1.2 || snap.windows.right.yaw > Math.PI, 'Right window must angle inward toward viewer');

  // ALL 3 windows must float strictly ABOVE the dock!
  for (const slot of ['left', 'center', 'right']) {
    const w = snap.windows[slot];
    assert.equal(w.aboveDock, true, `Window in ${slot} must be strictly above dock`);
    assert.ok(
      w.bottomY > snap.dockTopY + 0.10,
      `Expected ${slot} bottomY (${w.bottomY}) > dockTopY (${snap.dockTopY}) + 0.10m`
    );
  }
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
