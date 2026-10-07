// NextVR — janelas 3D fixas no ambiente, dock horizontal e teclado flutuante.
import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { settings as S, save, contentRoot, camera, EYE, on, emit, t, toast, onFrame, native, viewport } from './core.js';
import { cursor, screenPoint } from './hands.js';

const PX = 0.00105;                 // 1040 px ≈ 1.09 m — janela confortável, não gigante
export const wins = [];
let focused = null;

/* onde a dock está agora — a janela nasce ancorada nela */
const dockAt = { y: EYE - .6, z: -1.7, h: .12 };

/* =================== uma janela =================== */
class Win {
  constructor({ id, title, node, w = 1040, h = 660 }) {
    this.id = id; this.title = title; this.w = w; this.h = h;
    this.pinned = true;                       // nasce presa acima da dock
    this.target = new THREE.Vector3();
    this.slot = 0;

    const shell = document.createElement('div');
    shell.className = 'win-shell';
    shell.style.width = w + 'px';

    const el = document.createElement('div');
    el.className = 'win';
    el.style.width = w + 'px'; el.style.height = h + 'px';
    el.innerHTML = `<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn" data-act="pin">⇱</button>
        <button class="win-btn close" data-act="close">✕</button>
      </div><div class="win-body"></div>`;
    el.querySelector('.win-title').textContent = title;
    el.querySelector('.win-body').appendChild(node);
    el.addEventListener('pointerdown', () => focus(this), true);
    el.querySelector('.win-bar').addEventListener('click', e => {
      const a = e.target.closest('[data-act]'); if (!a) return;
      if (a.dataset.act === 'close') close(this); else repin(this);
    });

    const handle = document.createElement('div');
    handle.className = 'win-handle';
    handle.title = 'Arraste para soltar a janela';
    shell.append(el, handle);

    this.el = el; this.shell = shell; this.handle = handle;
    this.obj = new CSS3DObject(shell);
    this.obj.scale.setScalar(PX * S.winScale);
    contentRoot.add(this.obj);

    // planos invisíveis só para o cursor da mão acertar
    this.hit = plane(w * PX, h * PX, this);
    this.grab = plane(260 * PX, 90 * PX, this);
    this.grab.userData.isHandle = true;

    // arrasto com dedo/mouse direto na linha branca
    handle.addEventListener('pointerdown', e => {
      e.stopPropagation();
      startDrag(this, e.clientX / viewport.width, e.clientY / viewport.height);
      handle.setPointerCapture(e.pointerId);
    });
    handle.addEventListener('pointermove', e => {
      if (drag.win === this) dragTo(e.clientX / viewport.width, e.clientY / viewport.height);
    });
    handle.addEventListener('pointerup', endDrag);
    handle.addEventListener('pointercancel', endDrag);
  }

  apply(dt) {
    const o = this.obj;
    // Smooth but bounded: the window does not snap to the dock or rubber-band while moving.
    const k = 1 - Math.exp(-dt * (this.pinned ? 9 : 13));
    o.position.lerp(this.target, k);

    // rotação sai SÓ da posição da janela — a câmera não entra na conta
    const yaw = Math.atan2(-o.position.x, -o.position.z) * S.winCurve;
    const flat = Math.hypot(o.position.x, o.position.z) || .001;
    const pitch = Math.atan2(EYE - o.position.y, flat) * S.winTilt * -1;
    o.rotation.set(pitch, yaw, 0, 'YXZ');
    o.scale.setScalar(PX * S.winScale);

    this.hit.position.copy(o.position); this.hit.rotation.copy(o.rotation);
    this.hit.scale.setScalar(S.winScale);

    // a alça acompanha a janela, 34 px abaixo da borda
    const down = (this.h / 2 + 34) * PX * S.winScale;
    this.grab.position.copy(o.position);
    this.grab.rotation.copy(o.rotation);
    this.grab.translateY(-down);
    this.grab.scale.setScalar(S.winScale);
  }
}

function plane(w, h, win) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ visible: false }));
  m.userData.win = win; contentRoot.add(m); return m;
}

/* =================== layout =================== */
/**
 * Presas: em arco logo acima da dock — é onde o app nasce.
 * Soltas: ficam onde o usuário largou, e não entram no arranjo.
 */
function layout() {
  const pin = wins.filter(w => w.pinned);
  const n = pin.length; if (!n) return;
  const perRow = Math.min(n, 4);                    // até 4 por fileira, em arco
  const step = Math.min(.78, Math.max(.52, .5 + n * .05));
  const dist = (-dockAt.z) + .5 + (S.winDist - 2.2);

  pin.forEach((w, i) => {
    const row = Math.floor(i / perRow);
    const k = i % perRow;
    const inRow = Math.min(perRow, n - row * perRow);
    const a = inRow === 1 ? 0 : (-((inRow - 1) * step) / 2) + k * step;

    const wh = w.w * PX * S.winScale, hh = w.h * PX * S.winScale;
    const d = dist + row * .55;                     // fileira de trás, mais afastada
    const lift = dockAt.y + dockAt.h / 2 + .14 + hh / 2 + row * (hh + .16);
    w.target.set(Math.sin(a) * d, lift, -Math.cos(a) * d);
  });
}
on('recenter', layout);
on('resize', layout);

export function open(spec) {
  const same = wins.find(w => w.id === spec.id);
  if (same) { focus(same); return same; }
  if (native && wins.length >= 6) { toast('Close a window before opening another (6 window limit).'); return null; }
  const w = new Win(spec);
  // aparece já perto do destino, sem voar da origem
  w.obj.position.set(0, dockAt.y, dockAt.z);
  wins.push(w); layout(); focus(w);
  emit('wins', wins);
  return w;
}
export function close(w) {
  if (!w) return;
  const i = wins.indexOf(w); if (i < 0) return;
  wins.splice(i, 1);
  contentRoot.remove(w.obj); contentRoot.remove(w.hit); contentRoot.remove(w.grab);
  w.shell.remove();
  if (focused === w) focused = wins[wins.length - 1] || null;
  layout(); emit('wins', wins);
}
export function focus(w) {
  if (focused === w) return;
  focused = w;
  wins.forEach(x => x.el.classList.toggle('focus', x === focused));
}
/** Devolve a janela para cima da dock. */
function repin(w) { w.pinned = true; w.shell.classList.remove('free'); layout(); }
export const focusedWin = () => focused;

/* =================== arrastar pela linha branca =================== */
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const drag = { win: null, dist: 2 };

function startDrag(w, nx, ny) {
  drag.win = w; focus(w);
  drag.dist = w.obj.position.length() || 2;
  w.pinned = false;                       // soltou da dock
  w.shell.classList.add('free', 'moving');
  layout();                               // as outras presas se reorganizam
  dragTo(nx, ny);
}
function dragTo(nx, ny) {
  const w = drag.win; if (!w) return;
  ndc.set(nx * 2 - 1, -(ny * 2 - 1));
  ray.setFromCamera(ndc, camera);
  const p = ray.ray.origin.clone().addScaledVector(ray.ray.direction, drag.dist);
  contentRoot.worldToLocal(p);
  p.y = Math.max(EYE - 1.1, Math.min(EYE + 1.3, p.y));
  w.target.copy(p);
  w.obj.position.copy(p);                 // sem atraso enquanto arrasta
}
function endDrag() {
  if (drag.win) drag.win.shell.classList.remove('moving');
  drag.win = null;
}

/* =================== cursor da mão =================== */
function hitAt(x, y) {
  ndc.set(x * 2 - 1, -(y * 2 - 1));
  ray.setFromCamera(ndc, camera);
  const list = [];
  for (const w of wins) { list.push(w.grab, w.hit); }
  const h = ray.intersectObjects(list, false)[0];
  if (!h) return null;
  const w = h.object.userData.win;
  if (h.object.userData.isHandle) return { win: w, handle: true };
  const local = h.object.worldToLocal(h.point.clone());
  const g = h.object.geometry.parameters;
  return { win: w, u: local.x / g.width + .5, v: .5 - local.y / g.height };
}

let nativePress = null;
function nativeTouch(hit, action) {
  const root = hit.win.el, px = hit.u * root.offsetWidth, py = hit.v * root.offsetHeight;
  const rect = root.getBoundingClientRect();
  const el = document.elementFromPoint(rect.left + px, rect.top + py);
  const browser = el?.closest('[data-native-browser]');
  const br = browser?.getBoundingClientRect();
  const id = browser ? browser.dataset.nativeBrowser : 'shell';
  const x = rect.left + px - (br?.left || 0), y = rect.top + py - (br?.top || 0);
  if (nativePress && nativePress.id !== id) {
    window.NativeXR.touch(nativePress.id, 3, nativePress.x, nativePress.y);
    nativePress = null;
    if (action !== 0) return;
  }
  if (action === 0) nativePress = { id, win: hit.win, x, y };
  if (nativePress && nativePress.id === id) {
    nativePress.x = x; nativePress.y = y;
    window.NativeXR.touch(id, action, x, y);
  }
  if (action === 1 || action === 3) nativePress = null;
}
function cancelPress() {
  if (nativePress) window.NativeXR.touch(nativePress.id, 3, nativePress.x, nativePress.y);
  nativePress = null; endDrag();
}
on('pinchcancel', cancelPress);
function clickThrough(hit, type) {
  if (native) { nativeTouch(hit, type === 'down' ? 0 : 1); return; }
  const px = hit.u * hit.win.el.offsetWidth;
  const py = hit.v * hit.win.el.offsetHeight;
  const el = deepPick(hit.win.el, px, py); if (!el) return;
  if (type === 'down') { el.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })); hit.win._armed = el; }
  else {
    el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
    if (hit.win._armed === el) {
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      // um pinch num campo de texto precisa focar, senão o teclado virtual nunca liga
      if (el.matches && el.matches('input,textarea')) el.focus();
    }
    hit.win._armed = null;
  }
}
function deepPick(root, px, py) {
  let best = null;
  const walk = node => {
    for (const c of node.children) {
      const o = box(c, root);
      if (px >= o.l && px <= o.r && py >= o.t && py <= o.b) { best = c; walk(c); }
    }
  };
  walk(root); return best || root;
}
function box(el, root) {
  let l = 0, t = 0, n = el;
  while (n && n !== root) { l += n.offsetLeft - n.scrollLeft; t += n.offsetTop - n.scrollTop; n = n.offsetParent; }
  return { l, t, r: l + el.offsetWidth, b: t + el.offsetHeight };
}

on('pinchdown', () => {
  const h = hitAt(cursor.x, cursor.y);
  if (h && h.handle) { startDrag(h.win, cursor.x, cursor.y); return; }
  if (h) { focus(h.win); clickThrough(h, 'down'); return; }
  if (kbPinch('down')) return;
  dockPinch('down');
});
on('pinchup', () => {
  if (nativePress) {
    const h = hitAt(cursor.x, cursor.y);
    if (h && h.win === nativePress.win && !h.handle) nativeTouch(h, 1);
    else cancelPress();
    return;
  }
  if (drag.win) { endDrag(); return; }
  const h = hitAt(cursor.x, cursor.y);
  if (h && !h.handle) { clickThrough(h, 'up'); return; }
  if (kbPinch('up')) return;
  dockPinch('up');
});

/* =================== dock =================== */
const dockEl = document.createElement('div');
dockEl.className = 'dock';
const dockObj = new CSS3DObject(dockEl);
contentRoot.add(dockObj);
const dockHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
contentRoot.add(dockHit);

let dockItems = [], dockBtns = [];
const dockWins = [];                       // { b, win } → ponto branco quando a janela está aberta

const WIFI_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
  + '<path d="M2.8 9.2a13.2 13.2 0 0 1 18.4 0M6 12.6a8.6 8.6 0 0 1 12 0M9.2 16a4 4 0 0 1 5.6 0"/><circle cx="12" cy="19.2" r="1.1" fill="currentColor" stroke="none"/></svg>';
const BAT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">'
  + '<rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/>'
  + '<rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>';
const AVATAR_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';

/**
 * items: { kind:'avatar'|'status'|'tool'|'sep' } ou app { id, svg|icon, bg, win, launcher }.
 * Tudo que tem `run` vira botão; só os botões entram no teste de toque da mão.
 */
export function buildDock(items) {
  dockItems = items; dockBtns = []; dockWins.length = 0;
  dockEl.innerHTML = '';

  for (const it of items) {
    if (it.kind === 'sep') { dockEl.appendChild(sep()); continue; }

    const b = document.createElement('button');
    b.dataset.id = it.id;
    b.title = it.label || '';
    b.setAttribute('aria-label', it.label || it.id);

    if (it.kind === 'avatar') {
      b.className = 'dock-av'; b.innerHTML = AVATAR_SVG;
    } else if (it.kind === 'status') {
      b.className = 'dock-status';
      b.innerHTML = `<span class="dk-time">--:--</span><span class="dk-wifi">${WIFI_SVG}</span><span class="dk-bat">${BAT_SVG}</span>`;
    } else if (it.kind === 'tool') {
      b.className = 'dock-tool'; b.innerHTML = it.svg;
    } else {
      b.className = 'dock-app' + (it.launcher ? ' dock-launcher' : '');
      if (it.bg) b.style.background = it.bg;
      b.innerHTML = it.launcher
        ? '<span class="dk-grid">' + '<i></i>'.repeat(9) + '</span>'
        : (it.svg || (it.icon ? `<img src="${it.icon}" alt="">` : `<span>${it.glyph || '•'}</span>`));
      if (it.win) {
        const d = document.createElement('i'); d.className = 'dock-dot'; b.appendChild(d);
        dockWins.push({ b, win: it.win });
      }
    }
    b.addEventListener('click', () => it.run());
    dockEl.appendChild(b); dockBtns.push(b);
  }
  tick(); refreshNet(); paintBat(); syncDots();
}
function sep() { const s = document.createElement('span'); s.className = 'dock-sep'; return s; }

/* ponto branco sob o app aberto, como na dock do print */
function syncDots() {
  for (const { b, win } of dockWins) {
    const d = b.querySelector('.dock-dot');
    if (d) d.classList.toggle('on', wins.some(w => w.id === win));
  }
}
on('wins', syncDots);

/* hora, rede e bateria: dados reais do aparelho, nada inventado */
function tick() {
  const c = dockEl.querySelector('.dk-time');
  if (c) c.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(tick, 20000);

function refreshNet() {
  const w = dockEl.querySelector('.dk-wifi');
  if (w) w.style.opacity = navigator.onLine ? '1' : '.35';
}
addEventListener('online', refreshNet);
addEventListener('offline', refreshNet);

let batt = null;
function paintBat() {
  const el = dockEl.querySelector('.dk-bat'); if (!el) return;
  if (!batt) { el.style.display = 'none'; return; }       // sem API de bateria: não mostra nada falso
  el.style.display = '';
  const f = el.querySelector('.fill');
  f.setAttribute('width', String(Math.max(1.6, 13 * batt.level)));
  f.setAttribute('fill', batt.charging ? '#8de6c8' : (batt.level < .2 ? '#ff6b6b' : 'currentColor'));
}
if (navigator.getBattery) {
  navigator.getBattery().then(b => {
    batt = b;
    b.addEventListener('levelchange', paintBat);
    b.addEventListener('chargingchange', paintBat);
    paintBat();
  }).catch(() => {});
}

/** O teclado está aberto? (para o botão de teclado da dock) */
export const keyboardOpen = () => !!kbObj;

let dockArmed = -1;
on('pinchcancel', () => { dockArmed = -1; });
function dockPinch(type) {
  const r = dockTest(cursor.x, cursor.y);
  if (type === 'down') { dockArmed = r ? r.i : -1; return; }
  const armed = dockArmed; dockArmed = -1;
  if (!r || r.i !== armed) return;
  if (type === 'up') {
    const b = dockBtns[r.i];
    if (b) { b.style.transform = 'scale(.88)'; setTimeout(() => b.style.transform = '', 150); b.click(); }
  }
}
function dockTest(x, y) {
  ndc.set(x * 2 - 1, -(y * 2 - 1));
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(dockHit, false)[0]; if (!hit) return null;
  const local = dockHit.worldToLocal(hit.point.clone());
  const px = (local.x / dockHit.geometry.parameters.width + .5) * dockEl.offsetWidth;
  for (let i = 0; i < dockBtns.length; i++) {
    const b = dockBtns[i];
    if (px >= b.offsetLeft && px <= b.offsetLeft + b.offsetWidth) return { i };
  }
  return null;
}

let dockKey = '';
function placeDock() {
  const land = viewport.width > viewport.height;
  const dist = (land ? 1.42 : 1.75) * S.dockDist;      // paisagem: mais perto
  const drop = land ? -.50 : -.60;
  const sc = PX * (land ? .74 : .88) * S.dockSize;      // sem aumentar de tamanho

  dockObj.position.set(0, EYE + drop, -dist);
  dockObj.rotation.set(.26, 0, 0);
  dockObj.scale.setScalar(sc);

  const w = dockEl.offsetWidth * sc, h = dockEl.offsetHeight * sc;
  const key = w.toFixed(3) + 'x' + h.toFixed(3);
  if (w > 0 && key !== dockKey) {                       // só refaz quando muda de verdade
    dockKey = key;
    dockHit.geometry.dispose();
    dockHit.geometry = new THREE.PlaneGeometry(w, h);
    dockAt.h = h; layout();
  }
  dockHit.position.copy(dockObj.position);
  dockHit.rotation.copy(dockObj.rotation);

  if (dockAt.y !== dockObj.position.y || dockAt.z !== dockObj.position.z) {
    dockAt.y = dockObj.position.y; dockAt.z = dockObj.position.z; layout();
  }
}

/* =================== teclado flutuante =================== */
const ROWS = [
  ['q','w','e','r','t','y','u','i','o','p',{ k:'⌫', cls:'wide' }],
  ['a','s','d','f','g','h','j','k','l','ç',{ k:'⏎', cls:'enter' }],
  [{ k:'⇧', cls:'wide' },'z','x','c','v','b','n','m',',','.',{ k:'⇧', cls:'wide' }],
  [{ k:'🌐', cls:'util' },{ k:'⚙', cls:'util' },{ k:' ', cls:'space', lbl:'espaço' },{ k:'⌨', cls:'util' }],
];
let kbObj = null, kbHit = null, kbTarget = null, kbShift = false;

export function keyboard(on_, field) {
  if (!on_) {
    if (kbObj) { contentRoot.remove(kbObj); contentRoot.remove(kbHit); kbObj.element.remove(); kbObj = null; }
    kbTarget = null; return;
  }
  kbTarget = field;
  if (kbObj) return;

  const el = document.createElement('div');
  el.className = 'kb';
  for (const row of ROWS) {
    const r = document.createElement('div'); r.className = 'kb-row';
    for (const item of row) {
      const k = typeof item === 'string' ? item : item.k;
      const b = document.createElement('button');
      b.className = 'key' + (typeof item === 'string' ? '' : ' ' + item.cls);
      b.textContent = typeof item === 'string' ? k : (item.lbl || k);
      b.dataset.k = k;
      r.appendChild(b);
    }
    el.appendChild(r);
  }
  el.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) press(b.dataset.k, b); });

  kbObj = new CSS3DObject(el);
  kbObj.scale.setScalar(PX * .9);
  contentRoot.add(kbObj);
  kbHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
  contentRoot.add(kbHit);
  placeKb();
}

function press(k, btn) {
  if (native) window.NativeXR.click();
  if (btn) { btn.classList.add('hot'); setTimeout(() => btn.classList.remove('hot'), 110); }
  if (k === '⌨') return keyboard(false);
  if (k === '⇧') { kbShift = !kbShift; paintShift(); return; }
  if (k === '🌐' || k === '⚙') return;
  if (!kbTarget) return;
  if (kbTarget.nativeId) { window.NativeXR.key(kbTarget.nativeId, kbShift ? k.toUpperCase() : k); return; }
  if (k === '⌫') kbTarget.value = kbTarget.value.slice(0, -1);
  else if (k === '⏎') { kbTarget.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); return; }
  else kbTarget.value += kbShift ? k.toUpperCase() : k;
  kbTarget.dispatchEvent(new Event('input', { bubbles: true }));
}
function paintShift() {
  if (!kbObj) return;
  for (const b of kbObj.element.querySelectorAll('[data-k]')) {
    const k = b.dataset.k;
    if (k.length === 1 && /[a-zç]/i.test(k)) b.textContent = kbShift ? k.toUpperCase() : k.toLowerCase();
  }
}

let kbKey = '';
function placeKb() {
  if (!kbObj) return;
  kbObj.position.set(0, EYE - .58, (dockAt.z) + .35);   // à frente da dock, inclinado
  kbObj.rotation.set(.5, 0, 0);
  const w = kbObj.element.offsetWidth * kbObj.scale.x, h = kbObj.element.offsetHeight * kbObj.scale.x;
  const key = w.toFixed(3) + 'x' + h.toFixed(3);
  if (w > 0 && key !== kbKey) {
    kbKey = key; kbHit.geometry.dispose();
    kbHit.geometry = new THREE.PlaneGeometry(w, h);
  }
  kbHit.position.copy(kbObj.position); kbHit.rotation.copy(kbObj.rotation);
}
let kbArmed = null;
on('pinchcancel', () => { kbArmed = null; });
function kbPinch(type) {
  if (!kbObj) return false;
  ndc.set(cursor.x * 2 - 1, -(cursor.y * 2 - 1));
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(kbHit, false)[0]; if (!hit) return false;
  const local = kbHit.worldToLocal(hit.point.clone());
  const g = kbHit.geometry.parameters;
  const px = (local.x / g.width + .5) * kbObj.element.offsetWidth;
  const py = (.5 - local.y / g.height) * kbObj.element.offsetHeight;
  const b = deepPick(kbObj.element, px, py);
  if (type === 'down') { kbArmed = b; return true; }
  if (b && b === kbArmed && b.dataset && b.dataset.k) press(b.dataset.k, b);
  kbArmed = null;
  return true;
}

/* =================== laço =================== */
let layoutSettings = '';
onFrame(dt => {
  const nextSettings = `${S.winScale}:${S.winDist}`;
  if (layoutSettings !== nextSettings) { layoutSettings = nextSettings; layout(); }
  placeDock(); placeKb();
  if (nativePress && cursor.active && cursor.down) {
    const h = hitAt(cursor.x, cursor.y);
    if (h && h.win === nativePress.win && !h.handle) nativeTouch(h, 2);
  }
  if (drag.win && cursor.active && cursor.down) dragTo(cursor.x, cursor.y);
  for (const w of wins) w.apply(dt);
});

if (native) {
  window.nextvrBrowserFocus = id => keyboard(true, { nativeId: id });
  function updateBattery() { try { batt = JSON.parse(window.NativeXR.battery()); paintBat(); } catch {} }
  updateBattery(); setInterval(updateBattery, 30000);
  document.addEventListener('click', e => { if (e.target.closest('button')) window.NativeXR.click(); }, true);
}

/* PhoneXR spatial interaction adapter (VrHomeActivity b878d8b): fist grabs, metric NEAR touch,
 * edge highlights and FAR targets. Uses the existing Cardboard camera and reference window meshes;
 * none of these operations introduce head-position tracking. */
let fistGrab = null, nearContact = null;
const fistBefore = new Map();
let lastPhonePacket = { hands: [], consumed: new Set(), scaleX: 1, scaleY: 1 };
function phoneRay(x, y) {
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  const r = new THREE.Raycaster(); r.setFromCamera(new THREE.Vector2(x*2-1,1-y*2),camera); return r;
}
function palmScreen(h, packet, filtered=false) {
  const p=filtered?(h.grab||h.palm):h.palm;
  return { x:(p[0]-.5)*packet.scaleX+.5, y:(p[1]-.5)*packet.scaleY+.5 };
}
function grabDirection(r) {
  return r.ray.direction.clone().applyQuaternion(contentRoot.getWorldQuaternion(new THREE.Quaternion()).invert());
}
function grabHeight(d,radius) { return radius*d.y/Math.hypot(d.x,d.z); }
function windowPoint(w, point) {
  const local=w.obj.worldToLocal(point.clone()), scale=w.obj.getWorldScale(new THREE.Vector3());
  return { local, scale, u:local.x/w.w+.5, v:.5-local.y/w.h, d:local.z*scale.z };
}
function fistHit(r) {
  let best=null;
  for(const w of wins) {
    const center=w.obj.getWorldPosition(new THREE.Vector3());
    const normal=new THREE.Vector3(0,0,1).transformDirection(w.obj.matrixWorld);
    const hit=r.ray.intersectPlane(new THREE.Plane().setFromNormalAndCoplanarPoint(normal,center),new THREE.Vector3());
    if(!hit)continue;
    const {local,scale}=windowPoint(w,hit);
    if(Math.abs(local.x)*scale.x>w.w*scale.x/2+.08 || Math.abs(local.y)*scale.y>w.h*scale.y/2+.08)continue;
    const distance=r.ray.origin.distanceTo(hit);
    if(!best || distance<best.distance) best={win:w,point:hit,distance};
  }
  return best;
}
function endNear(cancel=false) {
  if(nearContact?.down) nativeTouch({win:nearContact.win,u:nearContact.u,v:nearContact.v},cancel?3:1);
  nearContact=null;
}
on('phonehands', packet => {
  lastPhonePacket=packet;
  const ids=new Set(packet.hands.map(h=>h.id));
  for(const id of fistBefore.keys())if(!ids.has(id))fistBefore.delete(id);
  if(fistGrab) {
    const h=packet.hands.find(h=>h.id===fistGrab.id);
    if(!h || !h.fist || !wins.includes(fistGrab.win)) { fistGrab.win.shell.classList.remove('moving');fistGrab=null; }
    else {
      packet.consumed.add(h.id);
      const p=palmScreen(h,packet,true),r=phoneRay(p.x,p.y),d=grabDirection(r),g=fistGrab;
      const yaw=g.startYaw+Math.atan2(-d.x,-d.z)-g.pointerYaw;
      g.win.target.set(-Math.sin(yaw)*g.radius,g.startHeight+grabHeight(d,g.radius)-g.pointerHeight,-Math.cos(yaw)*g.radius);
      g.win.obj.position.copy(g.win.target);
    }
  }
  for(const w of wins)w.shell.classList.remove('phone-grab-hover');
  if(!fistGrab) {
    const h=packet.hands.find(h=>!h.fist);
    if(h) {
      const p=palmScreen(h,packet),hit=fistHit(phoneRay(p.x,p.y));
      if(hit) {
        const {local,scale}=windowPoint(hit.win,hit.point),w=hit.win;
        if(Math.abs(local.x)*scale.x>w.w*scale.x/2-.06 || Math.abs(local.y)*scale.y>w.h*scale.y/2-.06)w.shell.classList.add('phone-grab-hover');
      }
    }
  }
  for(const h of packet.hands) {
    const before=fistBefore.get(h.id)||false;fistBefore.set(h.id,h.fist);
    if(!fistGrab && h.fist && !before) {
      const p=palmScreen(h,packet,true),r=phoneRay(p.x,p.y),hit=fistHit(r);
      if(hit) {
        if(cursor.hand?.id===h.id) { emit('pinchcancel');cursor.down=false;cursor.hand=null; }
        const w=hit.win;focus(w);w.pinned=false;w.shell.classList.add('free','moving');layout();
        const pos=w.obj.position,d=grabDirection(r),radius=Math.hypot(pos.x,pos.z);
        fistGrab={id:h.id,win:w,radius,startYaw:Math.atan2(-pos.x,-pos.z),startHeight:pos.y,pointerYaw:Math.atan2(-d.x,-d.z),pointerHeight:grabHeight(d,radius)};
        packet.consumed.add(h.id);
      }
    }
  }
  // Metric hand landmarks are hand pose, not a head/room 6 DoF tracker.
  let best=null;
  for(const h of packet.hands) {
    if(packet.consumed.has(h.id) || !h.head || h.head.length!==63)continue;
    const tip=new THREE.Vector3().fromArray(h.head,24);
    if(tip.length()>.7)continue;
    tip.applyMatrix4(camera.matrixWorld);
    for(const w of wins) {
      const p=windowPoint(w,tip),current=nearContact?.win===w && nearContact.id===h.id;
      const margin=current?.07:.03;
      if(p.d>(current?.20:.15) || p.d<-.12 || Math.abs(p.local.x)*p.scale.x>w.w*p.scale.x/2+margin || Math.abs(p.local.y)*p.scale.y>w.h*p.scale.y/2+margin)continue;
      if(!best || current || (!best.current && Math.abs(p.d)<Math.abs(best.d)))best={...p,id:h.id,win:w,point:tip,current};
    }
  }
  if(!best) { endNear(!ids.has(nearContact?.id));return; }
  packet.blockFar=true;packet.consumed.add(best.id);
  if(!best.current) {
    endNear();emit('pinchcancel');cursor.down=false;cursor.hand=null;
    nearContact={...best,down:false,previousD:1};
  } else {
    nearContact.d+=(best.d-nearContact.d)*.45;
    nearContact.u+=(best.u-nearContact.u)*.45;nearContact.v+=(best.v-nearContact.v)*.45;
  }
  const n=nearContact,inside=n.u>=0&&n.u<=1&&n.v>=0&&n.v<=1;
  const hit={win:n.win,u:Math.max(0,Math.min(1,n.u)),v:Math.max(0,Math.min(1,n.v))};
  if(!n.down && inside && n.d<=.012 && n.previousD>.012){focus(n.win);nativeTouch(hit,0);n.down=true;}
  else if(n.down && (n.d>=.035 || !inside)){nativeTouch(hit,1);n.down=false;}
  else if(n.down)nativeTouch(hit,2);
  n.previousD=n.d;
});
onFrame(()=>{
  if(!native)return;
  const packet=lastPhonePacket, targets=[];
  for(const h of packet.hands) {
    if(nearContact?.id===h.id) {
      const n=nearContact;
      const point=new THREE.Vector3((n.u-.5)*n.win.w,(.5-n.v)*n.win.h,0).applyMatrix4(n.win.obj.matrixWorld);
      targets.push({id:h.id,end:camera.worldToLocal(point).toArray(),direct:true,down:n.down});continue;
    }
    if(packet.consumed.has(h.id) || packet.blockFar){targets.push({id:h.id,hidden:true});continue;}
    const p=screenPoint(h.aim),r=phoneRay(p.x,p.y);
    const list=wins.flatMap(w=>[w.hit,w.grab]);list.push(dockHit);if(kbHit && kbObj)list.push(kbHit);
    const hit=r.intersectObjects(list,false)[0];
    targets.push({id:h.id,...(hit?{end:camera.worldToLocal(hit.point.clone()).toArray()}:{}),down:cursor.hand?.id===h.id&&cursor.down});
  }
  window.NativeXR.handTargets?.(JSON.stringify(targets));
});
