// NextVR — janelas 3D fixas no ambiente, dock horizontal e teclado flutuante.
import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { settings as S, save, contentRoot, camera, EYE, on, emit, t, toast, onFrame, native, viewport } from './core.js';
import { cursor, screenPoint } from './hands.js';
import { COMFORT } from './comfort.js';
import { icon } from './reference-icons.js';
import { clampWindowPosition, dragGestureActivated, resizeGestureActivated,
  stabilizeWindowPosition, clampResize, maxResizeAtHeight, resizeFromPointer,
  stabilizeResize } from './window-geometry.js';
import { ARC_CAPACITY, arcLayout, pickLru } from './arc.js';

const PX = 0.00105;                 // 1040 px ≈ 1.09 m — janela confortável, não gigante
export const wins = [];
let focused = null;

/* onde a dock está agora — a janela nasce ancorada nela */
const dockAt = { y: EYE - .6, z: -1.7, h: .12 };

/* =================== uma janela =================== */
class Win {
  constructor({ id, title, node, w = 1040, h = 660, onboarding = false }) {
    this.onboarding=onboarding;
    this.id = id; this.title = title; this.w = w; this.h = h;
    this.pinned = true;                       // nasce presa acima da dock
    this.target = new THREE.Vector3();
    this.resizeScale = 1;
    this.slot = 0;

    const shell = document.createElement('div');
    shell.className = 'win-shell';
    shell.dataset.windowId = id;
    shell.dataset.resizeScale = '1';
    shell.style.width = w + 'px';

    const el = document.createElement('div');
    el.className = 'win';
    el.style.width = w + 'px'; el.style.height = h + 'px';
    el.innerHTML = `<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn" data-act="pin" aria-label="${t('repin')}" title="${t('repin')}">${icon('crosshair')}</button>
        <button class="win-btn close" data-act="close" aria-label="${t('close')}" title="${t('close')}">${icon('x')}</button>
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
    handle.title = t('moveWindow');
    handle.setAttribute('aria-label', t('moveWindow'));
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'win-resize';
    resizeHandle.title = t('resize');
    resizeHandle.setAttribute('aria-label', t('resize'));
    resizeHandle.innerHTML = icon('move');
    shell.append(el, handle, resizeHandle);

    this.el = el; this.shell = shell; this.handle = handle; this.resizeHandle = resizeHandle;
    this.obj = new CSS3DObject(shell);
    this.obj.scale.setScalar(PX * (this.onboarding ? COMFORT.welcomeScale : S.winScale));
    contentRoot.add(this.obj);

    // Planos invisíveis usam exatamente a mesma transformação da superfície visual.
    this.hit = plane(w * PX, h * PX, this);
    this.grab = plane(260 * PX, 90 * PX, this);
    this.grab.userData.isHandle = true;
    this.resizeHit = plane(112 * PX, 112 * PX, this);
    this.resizeHit.userData.isResize = true;

    // O WebView nativo não recebe pointer do touchscreen físico. Estes listeners existem apenas
    // no preview desktop; no APK, drag/resize entram exclusivamente pelos eventos PhoneXR abaixo.
    if (!native) {
      const point = e => ({ x:e.clientX / viewport.width, y:e.clientY / viewport.height });
      handle.addEventListener('pointerdown', e => {
        e.stopPropagation(); const p=point(e); startDrag(this,p.x,p.y,'desktop');
        handle.setPointerCapture(e.pointerId);
      });
      handle.addEventListener('pointermove', e => { if (drag.win === this) { const p=point(e); dragTo(p.x,p.y); } });
      handle.addEventListener('pointerup', endDrag);
      handle.addEventListener('pointercancel', endDrag);
      resizeHandle.addEventListener('pointerdown', e => {
        e.stopPropagation(); const p=point(e); startResize(this,p.x,p.y);
        resizeHandle.setPointerCapture(e.pointerId);
      });
      resizeHandle.addEventListener('pointermove', e => { if (resizing.win === this) { const p=point(e); resizeTo(p.x,p.y); } });
      resizeHandle.addEventListener('pointerup', endResize);
      resizeHandle.addEventListener('pointercancel', endResize);
    }
  }

  apply(dt) {
    const o = this.obj;
    // Smooth but bounded: the window does not snap to the dock or rubber-band while moving.
    const k = 1 - Math.exp(-dt * (this.pinned ? 6 : 10));
    o.position.lerp(this.target, k);

    // rotação sai SÓ da posição da janela — a câmera não entra na conta
    const yaw = Math.atan2(-o.position.x, -o.position.z) * S.winCurve;
    const flat = Math.hypot(o.position.x, o.position.z) || .001;
    const pitch = Math.atan2(EYE - o.position.y, flat) * S.winTilt * -1;
    o.rotation.set(pitch, yaw, 0, 'YXZ');
    const scale=(this.onboarding ? COMFORT.welcomeScale : S.winScale) * this.resizeScale;
    o.scale.setScalar(PX * scale);

    this.hit.position.copy(o.position); this.hit.rotation.copy(o.rotation);
    this.hit.scale.setScalar(scale);

    // A alça de movimento fica fora; a de tamanho ocupa o canto inferior direito.
    const down = (this.h / 2 + 34) * PX * scale;
    this.grab.position.copy(o.position);
    this.grab.rotation.copy(o.rotation);
    this.grab.translateY(-down);
    this.grab.scale.setScalar(scale);

    this.resizeHit.position.copy(o.position);
    this.resizeHit.rotation.copy(o.rotation);
    this.resizeHit.translateX((this.w / 2 - 48) * PX * scale);
    this.resizeHit.translateY(-(this.h / 2 - 48) * PX * scale);
    this.resizeHit.translateZ(.003);
    this.resizeHit.scale.setScalar(scale);
  }
}

function plane(w, h, win) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ visible: false }));
  m.userData.win = win; contentRoot.add(m); return m;
}

/* =================== layout — multitarefa em arco =================== */
/**
 * Multitarefa em arco: as janelas presas formam UMA fileira curva, centrada, com até
 * ARC_CAPACITY (3) apps de vez — o arco é a superfície de multitarefa. Soltas (arrastadas)
 * ficam onde o usuário largou, e não entram no arranjo.
 */
function layout() {
  for(const w of wins)if(w.onboarding)w.target.set(0,EYE,-COMFORT.welcomeDistance);
  const pin = wins.filter(w => w.pinned && !w.onboarding);
  const n = pin.length; if (!n) return;
  const dist = native?S.winDist:(-dockAt.z) + .5 + (S.winDist - 2.2);
  const step = native?Math.min(1.3,2*Math.atan(Math.max(...pin.map(w=>w.w*w.resizeScale))*PX*S.winScale/(2*dist))+.08):Math.min(.78, Math.max(.52,.5+n*.05));

  arcLayout(n, { step, dist }).forEach(([x, z], i) => {
    const w = pin[i];
    const hh = w.h * PX * S.winScale * w.resizeScale;
    const lift = native?EYE:dockAt.y + dockAt.h / 2 + .14 + hh / 2;   // base alinhada na fileira única
    w.target.set(x, lift, z);
  });
}
on('recenter', layout);
on('resize', layout);

export function open(spec) {
  const same = wins.find(w => w.id === spec.id);
  if (same) { focus(same); return same; }
  const apps = wins.filter(w => !w.onboarding);
  if (apps.length >= ARC_CAPACITY) {
    // Multitarefa em arco: até 3 apps de vez. Com o arco cheio, o menos recente sai para o novo entrar.
    const lru = pickLru(apps);
    if (lru) { toast(`${t('arcFull')}: ${lru.title}`); close(lru); }
  }
  const w = new Win(spec);
  // aparece já perto do destino, sem voar da origem
  w.obj.position.set(0, dockAt.y, dockAt.z);
  wins.push(w); layout(); focus(w);
  if(w.onboarding){w.obj.position.copy(w.target);w.handle.hidden=true;w.resizeHandle.hidden=true;w.apply(0);}
  emit('wins', wins);
  return w;
}
export function close(w) {
  if (!w) return;
  const i = wins.indexOf(w); if (i < 0) return;
  if (drag.win === w) endDrag();
  if (resizing.win === w) endResize();
  wins.splice(i, 1);
  contentRoot.remove(w.obj); contentRoot.remove(w.hit); contentRoot.remove(w.grab); contentRoot.remove(w.resizeHit);
  w.shell.remove();
  if (focused === w) focused = wins[wins.length - 1] || null;
  layout(); emit('wins', wins);
}
export function focus(w) {
  if (focused === w) return;
  focused = w;
  w.lastFocus = performance.now();          // ordem de foco = ordem de uso no arco (LRU)
  wins.forEach(x => x.el.classList.toggle('focus', x === focused));
}
/** Devolve a janela para cima da dock. */
function repin(w) { w.pinned = true; w.shell.classList.remove('free'); layout(); }
export const focusedWin = () => focused;

/* =================== mover e redimensionar =================== */
const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const drag = { win:null, source:null, hand:null, start:null, active:false, plane:null, offset:null };
const resizing = { win:null, start:null, active:false, startScale:1, startDistance:1 };

function setRay(nx, ny, target=ray) {
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  ndc.set(nx * 2 - 1, 1 - ny * 2);
  target.setFromCamera(ndc, camera);
  return target;
}
function halfHeight(w) { return w.h * PX * S.winScale * w.resizeScale / 2; }
function boundedPosition(w, point) {
  const p=clampWindowPosition(point,halfHeight(w),EYE);
  return new THREE.Vector3(p.x,p.y,p.z);
}
function startDrag(w, nx, ny, source='handle', hand=null) {
  if(w.onboarding || resizing.win)return false;
  if(drag.win)endDrag();
  focus(w);setRay(nx,ny);
  const center=w.obj.getWorldPosition(new THREE.Vector3());
  const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(ray.ray.direction.clone(),center);
  const hit=ray.ray.intersectPlane(plane,new THREE.Vector3());
  if(!hit)return false;
  Object.assign(drag,{win:w,source,hand,start:{x:nx,y:ny},active:false,plane,offset:center.clone().sub(hit)});
  return true;
}
function activateDrag() {
  const w=drag.win;if(!w || drag.active)return;
  drag.active=true;w.pinned=false;
  w.shell.classList.add('free','moving');
  layout();                               // só agora as outras janelas se reorganizam
}
function dragTo(nx, ny) {
  const w=drag.win;if(!w)return false;
  if(!drag.active) {
    if(!dragGestureActivated(drag.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    activateDrag();
  }
  setRay(nx,ny);
  const hit=ray.ray.intersectPlane(drag.plane,new THREE.Vector3());
  if(!hit)return false;
  const local=contentRoot.worldToLocal(hit.add(drag.offset));
  const limited=boundedPosition(w,local);
  const stable=boundedPosition(w,stabilizeWindowPosition(w.obj.position,limited));
  w.target.copy(stable);
  w.obj.position.copy(w.target);           // a mão e a janela permanecem alinhadas
  return true;
}
function endDrag() {
  if(drag.win)drag.win.shell.classList.remove('moving');
  Object.assign(drag,{win:null,source:null,hand:null,start:null,active:false,plane:null,offset:null});
}

function pointerDistance(w,nx,ny) {
  camera.updateMatrixWorld(true);contentRoot.updateMatrixWorld(true);
  const center=w.obj.getWorldPosition(new THREE.Vector3()).project(camera);
  const cx=(center.x+1)/2,cy=(1-center.y)/2;
  return Math.hypot((nx-cx)*viewport.width,(ny-cy)*viewport.height);
}
function startResize(w,nx,ny) {
  if(w.onboarding || drag.win)return false;
  if(resizing.win)endResize();
  focus(w);
  Object.assign(resizing,{win:w,start:{x:nx,y:ny},active:false,startScale:w.resizeScale,
    startDistance:Math.max(1,pointerDistance(w,nx,ny))});
  return true;
}
function resizeTo(nx,ny) {
  const w=resizing.win;if(!w)return false;
  if(!resizing.active) {
    if(!resizeGestureActivated(resizing.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    resizing.active=true;w.shell.classList.add('resizing');
  }
  const baseHalf=w.h*PX*S.winScale/2;
  const maximum=Math.max(resizing.startScale,maxResizeAtHeight(w.obj.position.y,baseHalf,EYE));
  const wanted=resizeFromPointer(resizing.startScale,resizing.startDistance,pointerDistance(w,nx,ny),maximum);
  w.resizeScale=clampResize(stabilizeResize(w.resizeScale,wanted),maximum);
  w.shell.dataset.resizeScale=w.resizeScale.toFixed(3);
  return true;
}
function endResize() {
  if(resizing.win)resizing.win.shell.classList.remove('resizing');
  Object.assign(resizing,{win:null,start:null,active:false,startScale:1,startDistance:1});
}

/* =================== cursor da mão =================== */
function hitAt(x, y) {
  setRay(x,y);
  const list = [];
  // Resize/drag ficam antes da superfície e alguns milímetros à frente para não disputar o canto.
  for (const w of wins) { if(!w.onboarding)list.push(w.resizeHit,w.grab);list.push(w.hit); }
  const h = ray.intersectObjects(list, false)[0];
  if (!h) return null;
  const w = h.object.userData.win;
  if (h.object.userData.isResize) return { win:w, resize:true };
  if (h.object.userData.isHandle) return { win:w, handle:true };
  const local = h.object.worldToLocal(h.point.clone());
  const g = h.object.geometry.parameters;
  return { win: w, u: local.x / g.width + .5, v: .5 - local.y / g.height };
}
let nativePress = null;
function handTouch(hit, action) {
  const root = hit.win.el, px = hit.u * root.offsetWidth, py = hit.v * root.offsetHeight;
  const rect = root.getBoundingClientRect();
  const el = document.elementFromPoint(rect.left + px, rect.top + py);
  const browser = el?.closest('[data-native-browser]');
  const br = browser?.getBoundingClientRect();
  const id = browser ? browser.dataset.nativeBrowser : 'shell';
  const x = rect.left + px - (br?.left || 0), y = rect.top + py - (br?.top || 0);
  if (nativePress && nativePress.id !== id) {
    window.NativeXR.handTouch(nativePress.id, 3, nativePress.x, nativePress.y);
    nativePress = null;
    if (action !== 0) return;
  }
  if (action === 0) nativePress = { id, win: hit.win, x, y };
  if (nativePress && nativePress.id === id) {
    nativePress.x = x; nativePress.y = y;
    window.NativeXR.handTouch(id, action, x, y);
  }
  if (action === 1 || action === 3) nativePress = null;
}
function cancelPress() {
  if (nativePress) window.NativeXR.handTouch(nativePress.id, 3, nativePress.x, nativePress.y);
  nativePress = null; endDrag(); endResize();
}
on('pinchcancel', cancelPress);
function clickThrough(hit, type) {
  if (native) { handTouch(hit, type === 'down' ? 0 : 1); return; }
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
  if (h?.resize) { startResize(h.win,cursor.x,cursor.y); return; }
  if (h?.handle) { startDrag(h.win,cursor.x,cursor.y,'handle',cursor.hand?.id); return; }
  if (h) { focus(h.win); clickThrough(h, 'down'); return; }
  if (kbPinch('down')) return;
  dockPinch('down');
});
on('pinchup', () => {
  if (nativePress) {
    const h = hitAt(cursor.x, cursor.y);
    if (h && h.win === nativePress.win && !h.handle && !h.resize) handTouch(h, 1);
    else cancelPress();
    return;
  }
  if (resizing.win) { endResize(); return; }
  if (drag.win) { endDrag(); return; }
  const h = hitAt(cursor.x, cursor.y);
  if (h && !h.handle && !h.resize) { clickThrough(h, 'up'); return; }
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

const WIFI_SVG = icon('wifi');
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

let dockKey = '', dockYaw=0,kbYaw=0;
on('recenter',()=>{dockYaw=kbYaw=0;});
on('summon-dock',()=>{
  camera.updateMatrixWorld(true);contentRoot.updateMatrixWorld(true);
  const direction=camera.getWorldDirection(new THREE.Vector3()).transformDirection(contentRoot.matrixWorld.clone().invert());
  dockYaw=Math.atan2(-direction.x,-direction.z);
  placeDock(); // Deliberately no layout/recenter: existing windows remain anchored.
  window.NativeXR?.click();
});
function placeDock() {
  const land = viewport.width > viewport.height;
  const dist = (native?COMFORT.dockDistance:(land ? 1.42 : 1.75)) * S.dockDist;      // paisagem: mais perto
  const drop = native?-COMFORT.dockDrop:(land ? -.50 : -.60);
  const sc = PX * (native?COMFORT.dockScale:(land ? .74 : .88)) * S.dockSize;      // sem aumentar de tamanho

  dockObj.position.set(-Math.sin(dockYaw)*dist, EYE + drop, -Math.cos(dockYaw)*dist);
  dockObj.rotation.set(.26, dockYaw, 0,'YXZ');
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

  if (dockAt.y !== dockObj.position.y || dockAt.z !== -dist) {
    dockAt.y = dockObj.position.y; dockAt.z = -dist; layout();
  }
}

/* =================== teclado flutuante (estilo Meta Quest, deitado) =================== */
/* Layout Meta Quest: fileira de números, QWERTY com Ç, shift com trava de 2 toques,
 * espaço largo e utilitários (idioma, emoji, ditado, fechar) na fileira inferior. */
const ROWS = [
  ['1','2','3','4','5','6','7','8','9','0',{ k:'⌫', cls:'wide', icon:'backspace', label:'Apagar' }],
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l','ç',{ k:'⏎', cls:'enter', icon:'enter', label:'Enter' }],
  [{ k:'⇧', cls:'wide', icon:'shift', label:'Shift' },'z','x','c','v','b','n','m',',','.'],
  [{ k:'@lang', cls:'util', icon:'globe', label:'Idioma' },
   { k:'@emoji', cls:'util', icon:'smile', label:'Emoji' },
   { k:' ', cls:'space', lbl:'espaço' },
   { k:'@mic', cls:'util', icon:'mic', label:'Ditado' },
   { k:'@close', cls:'util', icon:'keyboard', label:'Fechar teclado' }],
];
const EMOJI_CYCLE = ['🙂','😀','😂','❤️','👍','🙏','😍','😅'];
let emojiIndex = 0;
let kbObj = null, kbHit = null, kbTarget = null, kbShift = false, kbShiftLock = false;

export function keyboard(on_, field) {
  if (!on_) {
    if (kbObj) { contentRoot.remove(kbObj); contentRoot.remove(kbHit); kbObj.element.remove(); kbObj = null; }
    kbTarget = null; kbShift = kbShiftLock = false;
    return;
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
      if(typeof item==='string')b.textContent=k;
      else if(item.icon){b.innerHTML=icon(item.icon);b.setAttribute('aria-label',item.label);b.title=item.label;}
      else b.textContent=item.lbl||k;
      b.dataset.k = k;
      r.appendChild(b);
    }
    el.appendChild(r);
  }
  el.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) press(b.dataset.k, b); });

  kbObj = new CSS3DObject(el);kbYaw=dockYaw;
  kbObj.scale.setScalar(PX * (native?COMFORT.keyboardScale:.9));
  contentRoot.add(kbObj);
  kbHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
  contentRoot.add(kbHit);
  placeKb();
}

function press(k, btn) {
  if (native) window.NativeXR.click();
  if (btn) { btn.classList.add('hot'); setTimeout(() => btn.classList.remove('hot'), 110); }
  if (k === '@close') return keyboard(false);
  if (k === '⇧') {
    // Meta Quest: um toque escreve em maiúsculas uma vez; o segundo trava; o terceiro solta.
    if (!kbShift) { kbShift = true; kbShiftLock = false; }
    else if (!kbShiftLock) kbShiftLock = true;
    else { kbShift = false; kbShiftLock = false; }
    paintShift(); return;
  }
  if (k === '@lang') return;
  if (k === '@mic') { toast(t('micOff')); return; }
  if (k === '@emoji') { type(EMOJI_CYCLE[emojiIndex++ % EMOJI_CYCLE.length]); return; }
  type(k);
}
function type(k) {
  if (!kbTarget) return;
  const isAction = k === '⌫' || k === '⏎';
  const ch = kbShift ? k.toUpperCase() : k;
  if (kbTarget.nativeId) {
    window.NativeXR.key(kbTarget.nativeId, ch);
  } else if (k === '⌫') kbTarget.value = kbTarget.value.slice(0, -1);
  else if (k === '⏎') { kbTarget.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); return; }
  else kbTarget.value += ch;
  if (!kbTarget.nativeId) kbTarget.dispatchEvent(new Event('input', { bubbles: true }));
  // Shift avulso dura uma tecla; o travado permanece até ser solto.
  if (!isAction && kbShift && !kbShiftLock) { kbShift = false; paintShift(); }
}
function paintShift() {
  if (!kbObj) return;
  for (const b of kbObj.element.querySelectorAll('[data-k="⇧"]'))
    b.dataset.state = !kbShift ? '' : kbShiftLock ? 'lock' : 'once';
  for (const b of kbObj.element.querySelectorAll('[data-k]')) {
    const k = b.dataset.k;
    if (k.length === 1 && /[a-zç]/i.test(k)) b.textContent = kbShift ? k.toUpperCase() : k.toLowerCase();
  }
}

let kbKey = '';
/** Inclinação do teclado deitado na direção do usuário (rad) — estilo Meta Quest. */
const KB_TILT = .35;
function placeKb() {
  if (!kbObj) return;
  const distance=native?COMFORT.keyboardDistance:-dockAt.z-.35;
  kbObj.position.set(-Math.sin(kbYaw)*distance, EYE-(native?COMFORT.keyboardDrop:.68), -Math.cos(kbYaw)*distance);   // à frente da dock, deitado como mesa
  // Deitado igual Meta Quest: -π/2 é o plano horizontal (teclado "deitado"), KB_TILT inclina
  // só o necessário na direção do usuário para ler e digitar. Aplicado a cada frame para
  // acompanhar o yaw da dock após recenter/summon.
  kbObj.rotation.set(-Math.PI / 2 + KB_TILT, kbYaw, 0, 'YXZ');
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
    if (h && h.win === nativePress.win && !h.handle && !h.resize) handTouch(h, 2);
  }
  if (resizing.win && cursor.active && cursor.down) resizeTo(cursor.x,cursor.y);
  if (drag.win && drag.source!=='fist' && cursor.active && cursor.down) dragTo(cursor.x,cursor.y);
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
let nearContact = null;
const fistBefore = new Map();
let lastPhonePacket = { hands: [], consumed: new Set(), scaleX: 1, scaleY: 1 };
/** Sticky feedback windows: hand noise must not flash outlines or swap FAR/NEAR pointers. */
let hoverWin = null, hoverAt = 0;
const NEAR_HOVER_HOLD_MS = 350, NEAR_HOLD_MS = 240;
function phoneRay(x, y) {
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  const r = new THREE.Raycaster(); r.setFromCamera(new THREE.Vector2(x*2-1,1-y*2),camera); return r;
}
function palmScreen(h, packet, filtered=false) {
  const p=filtered?(h.grab||h.palm):h.palm;
  return { x:(p[0]-.5)*packet.scaleX+.5, y:(p[1]-.5)*packet.scaleY+.5 };
}
function windowPoint(w, point) {
  const local=w.obj.worldToLocal(point.clone()), scale=w.obj.getWorldScale(new THREE.Vector3());
  return { local, scale, u:local.x/w.w+.5, v:.5-local.y/w.h, d:local.z*scale.z };
}
function fistHit(r) {
  let best=null;
  for(const w of wins) {
    if(w.onboarding)continue;
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
  if(nearContact?.down) handTouch({win:nearContact.win,u:nearContact.u,v:nearContact.v},cancel?3:1);
  nearContact=null;
}
on('phonehands', packet => {
  lastPhonePacket=packet;
  const ids=new Set(packet.hands.map(h=>h.id));
  for(const id of fistBefore.keys())if(!ids.has(id))fistBefore.delete(id);

  // Punho é um gesto válido de grab, mas só descola a janela depois do limiar de movimento.
  if(drag.win && drag.source==='fist') {
    const h=packet.hands.find(h=>h.id===drag.hand);
    if(!h || !h.fist || !wins.includes(drag.win))endDrag();
    else { packet.consumed.add(h.id);const p=palmScreen(h,packet,true);dragTo(p.x,p.y); }
  }
  // The grab outline is sticky for a moment: palm noise must not flash the window border.
  const nowMs=performance.now();
  if(!(drag.win && drag.source==='fist')) {
    const h=packet.hands.find(h=>!h.fist);
    if(h) {
      const p=palmScreen(h,packet),hit=fistHit(phoneRay(p.x,p.y));
      if(hit) {
        const {local,scale}=windowPoint(hit.win,hit.point),w=hit.win;
        if(Math.abs(local.x)*scale.x>w.w*scale.x/2-.06 || Math.abs(local.y)*scale.y>w.h*scale.y/2-.06){
          hoverWin=hit.win;hoverAt=nowMs;
        }
      }
    }
  }
  for(const w of wins)if(w!==hoverWin||nowMs-hoverAt>NEAR_HOVER_HOLD_MS)w.shell.classList.remove('phone-grab-hover');
  if(hoverWin&&nowMs-hoverAt<=NEAR_HOVER_HOLD_MS)hoverWin.shell.classList.add('phone-grab-hover');
  else hoverWin=null;
  for(const h of packet.hands) {
    const before=fistBefore.get(h.id)||false;fistBefore.set(h.id,h.fist);
    if(!drag.win && !resizing.win && h.fist && !before) {
      const p=palmScreen(h,packet,true),hit=fistHit(phoneRay(p.x,p.y));
      if(hit) {
        if(cursor.hand?.id===h.id) { emit('pinchcancel');cursor.down=false;cursor.hand=null; }
        if(startDrag(hit.win,p.x,p.y,'fist',h.id))packet.consumed.add(h.id);
      }
    }
  }
  // Metric hand landmarks are hand pose, not a head/room 6 DoF tracker.
  // The near-touch zone has wide hysteresis and a short hold: a resting hand in front of an open
  // window jitters across a naive depth threshold and used to blink the pointer between the FAR
  // ray and direct touch. Enter only when clearly close; stay until clearly away.
  let best=null;
  for(const h of packet.hands) {
    if(packet.consumed.has(h.id) || !h.head || h.head.length!==63)continue;
    const tip=new THREE.Vector3().fromArray(h.head,24);
    if(tip.length()>.7)continue;
    tip.applyMatrix4(camera.matrixWorld);
    for(const w of wins) {
      const p=windowPoint(w,tip),current=nearContact?.win===w && nearContact.id===h.id;
      // Hysteresis: a contact already engaged stays until clearly away (0.26 m / 8 cm margin).
      const margin=current?.08:.02;
      const dMax=current?.26:.11;
      if(p.d>dMax || p.d<-.12 || Math.abs(p.local.x)*p.scale.x>w.w*p.scale.x/2+margin || Math.abs(p.local.y)*p.scale.y>w.h*p.scale.y/2+margin)continue;
      if(!best || current || (!best.current && Math.abs(p.d)<Math.abs(best.d)))best={...p,id:h.id,win:w,point:tip,current};
    }
  }
  if(!best && nearContact && nowMs-nearContact.lastSeen<=NEAR_HOLD_MS) {
    best={...nearContact,current:true,held:true};   // brief zone exit: keep the direct pointer
  }
  if(!best) { endNear(!ids.has(nearContact?.id));return; }
  packet.blockFar=true;packet.consumed.add(best.id);
  if(!best.current) {
    endNear();emit('pinchcancel');cursor.down=false;cursor.hand=null;
    nearContact={...best,down:false,previousD:1,lastSeen:nowMs};
  } else {
    nearContact.d+=(best.d-nearContact.d)*.45;
    nearContact.u+=(best.u-nearContact.u)*.45;nearContact.v+=(best.v-nearContact.v)*.45;
    if(!best.held)nearContact.lastSeen=nowMs;
  }
  const n=nearContact,inside=n.u>=0&&n.u<=1&&n.v>=0&&n.v<=1;
  const hit={win:n.win,u:Math.max(0,Math.min(1,n.u)),v:Math.max(0,Math.min(1,n.v))};
  if(!n.down && inside && n.d<=.012 && n.previousD>.012){focus(n.win);handTouch(hit,0);n.down=true;}
  else if(n.down && (n.d>=.035 || !inside)){handTouch(hit,1);n.down=false;}
  else if(n.down)handTouch(hit,2);
  n.previousD=n.d;
});
let lastTargetAt=0,lastTargets='';
onFrame((dt,now)=>{
  if(!native || now-lastTargetAt<33)return;lastTargetAt=now;
  const packet=lastPhonePacket, targets=[];
  for(const h of packet.hands) {
    if(nearContact?.id===h.id) {
      const n=nearContact;
      const point=new THREE.Vector3((n.u-.5)*n.win.w,(.5-n.v)*n.win.h,0).applyMatrix4(n.win.obj.matrixWorld);
      targets.push({id:h.id,end:camera.worldToLocal(point).toArray(),direct:true,down:n.down});continue;
    }
    if(packet.consumed.has(h.id) || packet.blockFar){targets.push({id:h.id,hidden:true});continue;}
    const p=screenPoint(h.aim),r=phoneRay(p.x,p.y);
    const list=wins.flatMap(w=>[w.resizeHit,w.grab,w.hit]);list.push(dockHit);if(kbHit && kbObj)list.push(kbHit);
    const hit=r.intersectObjects(list,false)[0];
    targets.push({id:h.id,...(hit?{end:camera.worldToLocal(hit.point.clone()).toArray()}:{}),down:cursor.hand?.id===h.id&&cursor.down});
  }
  const json=JSON.stringify(targets);
  if(json!==lastTargets){lastTargets=json;window.NativeXR.handTargets?.(json);}
});
