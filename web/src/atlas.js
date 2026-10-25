import * as THREE from 'three';
import { fitDisplay } from './display-fit.js';

export const ATLAS_SIZE = 4096;
export const VIEW = { width: 1200, height: 800 };
const PAD = 160;

// Stable slots: opening/closing a window never relocates another window's pixels while its
// SurfaceTexture is in flight. The atlas reserves 6 window slots; the arc multitasking layer
// (arc.js) keeps at most 5 apps open at once, inside the atlas capacity.
export function pack(sizes, limit = ATLAS_SIZE) {
  return sizes.map(({ width, height, kind = 'window', slot = 0 }) => {
    const w = Math.ceil(width) + PAD * 2, h = Math.ceil(height) + PAD * 2;
    const x = kind === 'window' ? (slot % 3) * 1360 : kind === 'slot' ? 1360 : 0;
    const y = kind === 'dock' ? 800 : kind === 'keyboard' ? 3160 : kind === 'slot' ? 0 : 1200 + Math.floor(slot / 3) * 980;
    const capacity = kind === 'dock' ? 460 : kind === 'keyboard' ? 936 : 980;
    if (slot > 5 || w > (kind === 'window' || kind === 'slot' ? 1360 : limit) || h > capacity || x + w > limit || y + h > limit)
      throw new Error('Workspace texture is full; close a window first.');
    return [x, y, w, h];
  });
}

/**
 * Keep the prototype's actual DOM and THREE transforms. Rasterize each CSS3DObject once into a
 * transparent hardware-WebView atlas; native GL projects those quads separately for each eye.
 * No screenshot loops, stereo DOM clones, duplicate audio, or web-deviceorientation tracking.
 */
export class AtlasRenderer {
  constructor() {
    this.domElement = document.createElement('div');
    this.domElement.id = 'atlas';
    this.last = 0;
    this.sent = null;
    this.sentSpecs = null;
    this.overlayJson = null;
    this.lastError = '';
    this.slots = new Map();
  }
  setSize() {}
  render(scene) {
    if (window.__gorillaStereoOverlay) {
      if (!this.overlayJson) {
        const sy = 2 * Math.tan(THREE.MathUtils.degToRad(36));
        const gHud = new THREE.Matrix4().makeTranslation(0, 0, -1)
          .multiply(new THREE.Matrix4().makeScale(sy * 1.78, sy * 1.48, 1));
        this.overlayJson = JSON.stringify([{
          overlay: true,
          matrix: gHud.toArray(),
          rect: [0, 0, VIEW.width / 2, VIEW.height],
          uvR: [(VIEW.width / 2) / ATLAS_SIZE, 1 - VIEW.height / ATLAS_SIZE, (VIEW.width / 2) / ATLAS_SIZE, VIEW.height / ATLAS_SIZE],
        }]);
      }
      const sceneJson = this.overlayJson, specsJson = '[]';
      if (sceneJson !== this.sent || specsJson !== this.sentSpecs) {
        this.sent = sceneJson; this.sentSpecs = specsJson;
        window.NativeXR?.frame?.(sceneJson, specsJson);
      }
      return;
    }
    scene.updateMatrixWorld(true);
    const objects = [];
    scene.traverse(o => { if (o.isCSS3DObject && o.visible) objects.push(o); });
    for (const o of objects) {
      if (o.element.parentNode !== this.domElement) this.domElement.append(o.element);
      if (o.element.style.transform !== 'none') o.element.style.transform = 'none';
    }
    for (const id of this.slots.keys()) if (!objects.some(o => o.id === id)) this.slots.delete(id);
    const sizes = objects.map(o => {
      const kind = o.element.classList.contains('dock') ? 'dock'
        : o.element.classList.contains('kb') ? 'keyboard'
        : o.element.classList.contains('win-drop-slot') ? 'slot'
        : 'window';
      if (kind === 'window' && !this.slots.has(o.id)) {
        const used = new Set(this.slots.values()); let slot = 0; while (used.has(slot)) slot++;
        this.slots.set(o.id, slot);
      }
      const maxW = (kind === 'window' || kind === 'slot') ? 1040 : ATLAS_SIZE - PAD * 2;
      const maxH = (kind === 'dock' ? 460 : kind === 'keyboard' ? 936 : 980) - PAD * 2;
      return {
        width: Math.min(o.element.offsetWidth, maxW),
        height: Math.min(o.element.offsetHeight, maxH),
        kind,
        slot: this.slots.get(o.id) || 0,
      };
    });
    let rects;
    try { rects = pack(sizes); } catch (e) {
      if (this.lastError !== e.message) { this.lastError = e.message; window.nextvrMessage?.(e.message); }
      return;
    }
    const panels = [], browsers = [];
    objects.forEach((o, i) => {
      const e = o.element, [x, y, w, h] = rects[i];
      const leftPx = `${x + PAD}px`, topPx = `${y + PAD}px`;
      if (e.style.left !== leftPx) e.style.left = leftPx;
      if (e.style.top !== topPx) e.style.top = topPx;
      const matrix = o.matrixWorld.clone().multiply(new THREE.Matrix4().makeScale(w, h, 1));
      // `curve` (radianos, 0 = plana) é a curvatura 360 da janela: o shader nativo dobra o quad
      // no cilindro correspondente. Sem curvatura o caminho é exatamente o de antes.
      const curve = +(e.dataset.curve || 0);
      panels.push({ id:e.dataset.windowId || (sizes[i].kind==='dock'?'dock':sizes[i].kind),
        matrix: matrix.toArray(), rect: rects[i], curve,
        glass: [PAD / w, PAD / h, sizes[i].width / w, sizes[i].height / h] });
      const origin = e.getBoundingClientRect();
      /*
       * Hosted Android app windows. The window body carries data-native-app and the display's
       * aspect ratio in data-aspect; the picture is fitted inside the element exactly like
       * AppInputGeometry.fit does it on the other side, so the shader samples the same rectangle the
       * touch is normalized against. No entry goes into `browsers[]` here: this surface is created by
       * the native side (AppSurfaceHost.acquire) because there is no URL to navigate to — the app
       * itself is what draws. Nothing is drawn while the app's first frame has not arrived.
       */
      for (const a of e.querySelectorAll('[data-native-app]')) {
        const box = a.getBoundingClientRect();
        if (!box.width || !box.height) continue;
        const aspect = +(a.dataset.aspect || 0);
        const fit = fitDisplay(box.width, box.height, aspect);
        const m = o.matrixWorld.clone()
          .multiply(new THREE.Matrix4().makeTranslation(
            box.left - origin.left + fit.x + fit.w / 2 - sizes[i].width / 2,
            sizes[i].height / 2 - (box.top - origin.top + fit.y + fit.h / 2), .5))
          .multiply(new THREE.Matrix4().makeScale(fit.w, fit.h, 1));
        panels.push({ browser: 'app:' + a.dataset.nativeApp, matrix: m.toArray(),
          rect: [0, 0, Math.round(box.width), Math.round(box.height)], curve: +(e.dataset.curve || 0),
          uv: [fit.u0, fit.v0, fit.uw, fit.vh] });
        // Published back so the shell (and the tests) can see the crop the shader was given. Only
        // written when it changes: this runs inside the frame loop.
        const crop = [fit.u0, fit.v0, fit.uw, fit.vh].map(n => n.toFixed(5)).join(',');
        if (a.dataset.uv !== crop) { a.dataset.uv = crop; this.last = 0; }
      }
      /*
       * Hosted headset games (PhoneXR). Same deal as a hosted Android app — the window body
       * carries the surface id and the display's aspect — plus one difference that is the whole
       * thing: the runtime presents the game's stereo picture SIDE BY SIDE inside that canvas, so
       * this panel carries two rectangles, `uv` (the left view) and `uvR` (the right view).
       * SpatialRenderer samples `uv` in the left eye's pass and `uvR` in the right eye's pass,
       * which is what turns one panel into real stereo instead of a squeezed side-by-side video.
       * Nothing is drawn while the game's first frame has not arrived.
       */
      for (const g of e.querySelectorAll('[data-native-xr]')) {
        const box = g.getBoundingClientRect();
        if (!box.width || !box.height) continue;
        const id = 'xr:' + g.dataset.nativeXr;
        const aspect = +(g.dataset.aspect || 0);
        const fit = fitDisplay(box.width, box.height, aspect);
        const m = o.matrixWorld.clone()
          .multiply(new THREE.Matrix4().makeTranslation(
            box.left - origin.left + fit.x + fit.w / 2 - sizes[i].width / 2,
            sizes[i].height / 2 - (box.top - origin.top + fit.y + fit.h / 2), .5))
          .multiply(new THREE.Matrix4().makeScale(fit.w, fit.h, 1));
        panels.push({ browser: id, matrix: m.toArray(),
          rect: [0, 0, Math.round(box.width), Math.round(box.height)], curve: +(e.dataset.curve || 0),
          uv: [fit.u0, fit.v0, fit.uw / 2, fit.vh],
          uvR: [fit.u0 + fit.uw / 2, fit.v0, fit.uw / 2, fit.vh] });
      }
      for (const b of e.querySelectorAll('[data-native-browser]')) {
        const box = b.getBoundingClientRect();
        if (!box.width || !box.height) continue;
        const id = b.dataset.nativeBrowser, url = b.dataset.url;
        if (!url) continue;
        const width = Math.round(box.width), height = Math.round(box.height);
        // Clip scrolled players to their nearest scroll container, not over the title bar/dock.
        let clip = { left: box.left, top: box.top, right: box.right, bottom: box.bottom };
        for (let n = b.parentElement; n && n !== e; n = n.parentElement) {
          const style = getComputedStyle(n);
          if (/(auto|scroll|hidden)/.test(style.overflow + style.overflowY)) {
            const r = n.getBoundingClientRect();
            clip.left = Math.max(clip.left, r.left); clip.top = Math.max(clip.top, r.top);
            clip.right = Math.min(clip.right, r.right); clip.bottom = Math.min(clip.bottom, r.bottom);
          }
        }
        browsers.push({ id, url, width, height });
        const cw = clip.right - clip.left, ch = clip.bottom - clip.top;
        if (cw <= 0 || ch <= 0) continue;
        const m = o.matrixWorld.clone()
          .multiply(new THREE.Matrix4().makeTranslation(
            clip.left - origin.left + cw / 2 - sizes[i].width / 2,
            sizes[i].height / 2 - (clip.top - origin.top + ch / 2), .5))
          .multiply(new THREE.Matrix4().makeScale(cw, ch, 1));
        panels.push({ browser: id, matrix: m.toArray(), rect: [0, 0, width, height], curve: +(e.dataset.curve || 0),
          homeOverlay: b.dataset.homeOverlay === '1',
          uv: [(clip.left - box.left) / width, (box.bottom - clip.bottom) / height, cw / width, ch / height] });
      }
    });
    const sy = 2 * Math.tan(THREE.MathUtils.degToRad(36));
    const hud = new THREE.Matrix4().makeTranslation(0, 0, -1)
      .multiply(new THREE.Matrix4().makeScale(sy * 1.5, sy, 1));
    if (window.__gorillaStereoOverlay) {
      const gHud = new THREE.Matrix4().makeTranslation(0, 0, -1)
        .multiply(new THREE.Matrix4().makeScale(sy * 1.78, sy * 1.48, 1));
      panels.push({
        overlay: true,
        matrix: gHud.toArray(),
        rect: [0, 0, VIEW.width / 2, VIEW.height],
        uvR: [(VIEW.width / 2) / ATLAS_SIZE, 1 - VIEW.height / ATLAS_SIZE, (VIEW.width / 2) / ATLAS_SIZE, VIEW.height / ATLAS_SIZE],
      });
    } else {
      panels.push({ overlay: true, matrix: hud.toArray(), rect: [0, 0, VIEW.width, VIEW.height] });
    }
    // GL renders head motion at display rate. Only CSS layout/animations cross this bridge at 30 Hz.
    const now = performance.now();
    const tier = document.documentElement.dataset.qualityTier || document.documentElement.dataset.quality;
    if (now - this.last >= ({ low: 32, medium: 24, auto: 24, high: 16 }[tier] || 24)) {
      this.last = now;
      const scene = JSON.stringify(panels), specs = JSON.stringify(browsers);
      // A settled scene is bit-identical frame to frame, so do not cross the bridge for it: the
      // 30 Hz payload handoff and the native decode it triggers run on the same threads that
      // deliver hand tracking, and dropping them is what keeps the pointer smooth with apps open.
      // invalidate() forces the next full send after a shell resume or recreate.
      if (scene !== this.sent || specs !== this.sentSpecs) {
        this.sent = scene; this.sentSpecs = specs;
        window.NativeXR.frame(scene, specs);
      }
    }
  }
  /** Forget the cached payload so the next frame re-sends the whole scene to the native side. */
  invalidate() { this.sent = this.sentSpecs = null; this.last = 0; }
}
