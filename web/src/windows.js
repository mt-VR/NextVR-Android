// NextVR — janelas 3D fixas no ambiente, dock horizontal e teclado flutuante.
import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { settings as S, save, contentRoot, camera, EYE, on, emit, t, toast, onFrame, native, viewport } from './core.js';
import { cursor, screenPoint, predictedCursor, cancelHandInput } from './hands.js';
import { COMFORT } from './comfort.js';
import { icon } from './reference-icons.js';
import { clampWindowPosition, dragGestureActivated, resizeGestureActivated,
  stepDragDelta, clampResize, maxResizeAtHeight, resizeFromPointer,
  stabilizeResize, WINDOW_LIMITS } from './window-geometry.js';
import { ARC_CAPACITY, arcSlots, arcStep, pickLru, ARC_TOP_ROW_STEP } from './arc.js';
import { curveAngle, curveRadius, curveOffset } from './window-geometry.js';

const PX = 0.00105;                 // 1040 px ≈ 1.09 m at scale 1; default .75 keeps floating windows compact
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
    // Curvatura "360": a janela vira um pedaço de cilindro em volta do usuário (largura igual,
    // só o meio recua). O padrão vem das Configurações; o botão 360 da barra troca por janela.
    this.curve = curveAngle(onboarding ? 0 : (S.win360 ? S.win360K : 0));
    this.curveRadius = curveRadius(w, this.curve);

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
        <button class="win-btn wide" data-act="curve" aria-label="360°" title="360°" aria-pressed="${this.curve > 0}">360°</button>
        <button class="win-btn" data-act="pin" aria-label="${t('repin')}" title="${t('repin')}">${icon('crosshair')}</button>
        <button class="win-btn close" data-act="close" aria-label="${t('close')}" title="${t('close')}">${icon('x')}</button>
      </div><div class="win-body"></div>`;
    el.querySelector('.win-title').textContent = title;
    el.querySelector('.win-body').appendChild(node);
    el.addEventListener('pointerdown', () => focus(this), true);
    el.querySelector('.win-bar').addEventListener('click', e => {
      const a = e.target.closest('[data-act]'); if (!a) return;
      if (a.dataset.act === 'close') close(this);
      else if (a.dataset.act === 'curve') this.setCurve(this.curve > 0 ? 0 : curveAngle(S.win360K));
      else repin(this);
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
    shell.dataset.curve = String(this.curve);
    // A janela de primeiro uso (idioma) é só o cartão: sem barra de título, como na referência.
    if (onboarding) el.querySelector('.win-bar').hidden = true;
    this.obj = new CSS3DObject(shell);
    this.obj.scale.setScalar(PX * (this.onboarding ? COMFORT.welcomeScale : S.winScale));
    contentRoot.add(this.obj);

    // Planos invisíveis usam exatamente a mesma transformação da superfície visual; com curvatura
    // a malha de hit acompanha o cilindro, então o raio da mão acerta a superfície de verdade.
    this.hitSegments = this.curve > 0 ? 32 : 1;
    this.hit = plane(w * PX, h * PX, this, this.hitSegments);
    this.bendHit();
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

  /**
   * Liga/desliga a curvatura 360 desta janela. A largura e o lugar no arco não mudam: só a
   * superfície — é por isso que o botão não precisa re-layoutar nada.
   */
  setCurve(angle) {
    this.curve = curveAngle(angle);
    this.curveRadius = curveRadius(this.w, this.curve);
    this.shell.dataset.curve = String(this.curve);
    const button = this.el.querySelector('[data-act="curve"]');
    if (button) button.setAttribute('aria-pressed', String(this.curve > 0));
    // A malha de hit só é curvada quando há curvatura: plana continua sendo 1 segmento.
    const segments = this.curve > 0 ? 32 : 1;
    if (this.hitSegments !== segments) {
      this.hit.geometry.dispose();
      this.hit.geometry = new THREE.PlaneGeometry(this.w * PX, this.h * PX, segments, 1);
      this.hitSegments = segments;
    }
    this.bendHit();
    this.apply();
  }

  /** Deslocamento da superfície (metros) no px `x` da janela (0 = centro). */
  bulge(x) { return curveOffset(x, this.curveRadius) * PX; }

  /** Dobra a malha de hit no cilindro da curvatura (geometria em metros, escala 1). */
  bendHit() {
    const position = this.hit.geometry.attributes.position;
    if (this.curve <= 0) {
      for (let i = 0; i < position.count; i++) position.setZ(i, 0);
    } else {
      for (let i = 0; i < position.count; i++) position.setZ(i, curveOffset(position.getX(i) / PX, this.curveRadius) * PX);
    }
    position.needsUpdate = true;
    this.hit.geometry.computeBoundingSphere();
  }

  apply() {
    const o = this.obj;
    // Sem animação: a janela está onde deve estar já neste frame. O "voo" até o lugar roubava
    // frames do rastreamento das mãos (a cena inteira precisava ser reenviada enquanto deslizava)
    // e deixava a interface com cara de protótipo.
    o.position.copy(this.target);

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
    // A alça de tamanho também sobe para a superfície curvada.
    this.resizeHit.translateZ(this.bulge(this.w / 2 - 48) + .003);
    this.resizeHit.scale.setScalar(scale);
  }
}

function plane(w, h, win, segments = 1) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h, segments, 1), new THREE.MeshBasicMaterial({ visible: false }));
  m.userData.win = win; contentRoot.add(m); return m;
}

/* =================== layout — multitarefa em arco =================== */
/**
 * Multitarefa em arco: as janelas presas formam UMA fileira curva centrada, com até
 * ARC_CAPACITY (5) apps de vez — o arco é a superfície de multitarefa. Com mais de três apps a
 * quarta e a quinta vão para uma fileira superior centrada (arc.js), porque cinco janelas lado a
 * lado não cabem no campo de visão. Soltas (arrastadas) ficam onde o usuário largou.
 */
function layout() {
  for(const w of wins)if(w.onboarding)w.target.set(0,EYE,-COMFORT.welcomeDistance);
  const pin = wins.filter(w => w.pinned && !w.onboarding);
  const n = pin.length; if (!n) return;
  const dist = native?S.winDist:(-dockAt.z) + .5 + (S.winDist - 2.2);
  // A folga entre janelas vizinhas é de MEIA JANELA (arcStep), não os 8 cm de antes: com duas
  // janelas o passo antigo ainda era dividido por dois ([-passo/2, +passo/2]) e as duas se
  // sobrepunham. O passo é limitado pelo yaw alcançável do workspace, então com janelas grandes a
  // folga é a que couber; o arco do preview (mouse) mantém o passo próprio, menor.
  const widest = Math.max(...pin.map(w => w.w * w.resizeScale)) * PX * S.winScale;
  const step = native ? arcStep({ width: widest, dist, gap: .5, outerLimit: WINDOW_LIMITS.maxYaw - .06 })
    : Math.min(.78, Math.max(.52, .5 + n * .05));

  arcSlots(n, step).forEach(({ angle, row }, i) => {
    const w = pin[i];
    const hh = w.h * PX * S.winScale * w.resizeScale;
    // Keep the full window visibly above the dock in native Cardboard and desktop preview.
    // The 14 cm breathing gap is added to the dock's top edge before centring the window.
    const lift = dockAt.y + dockAt.h / 2 + .14 + hh / 2;
    const x = Math.sin(angle) * dist, z = -Math.cos(angle) * dist;
    // A fileira de cima sobe uma janela e meia e nunca passa do limite confortável do olhar.
    const y = row === 0 ? lift
      : Math.min(lift + hh * 2 * (ARC_TOP_ROW_STEP - 1) + hh, EYE + WINDOW_LIMITS.upperEdgeFromEye - hh);
    w.target.set(x, y, z);
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
  wins.push(w); layout(); focus(w);
  w.obj.position.copy(w.target);            // já nasce no lugar: nada de voar da dock
  if(w.onboarding){w.handle.hidden=true;w.resizeHandle.hidden=true;}
  w.apply();
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
const drag = { win:null, source:null, hand:null, start:null, active:false, plane:null, anchor:null };
const resizing = { win:null, start:null, active:false, startScale:1, startDistance:1 };
const dockDrag = { source:null, start:null, active:false, plane:null, anchor:null };

function setRay(nx, ny, target=ray) {
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  ndc.set(nx * 2 - 1, 1 - ny * 2);
  target.setFromCamera(ndc, camera);
  return target;
}
function halfHeight(w) { return w.h * PX * S.winScale * w.resizeScale / 2; }
function boundedPosition(w, point, radius=null) {
  const p=clampWindowPosition(point,halfHeight(w),EYE,radius);
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
  // Âncora estável capturada NO MOMENTO DO GRAB: a janela segue deltas relativos a este ponto
  // fixo — nunca é reavaliada contra a posição defasada da janela nem contra o ponto onde o
  // gesto foi ativado (que já embutiria o salto que disparou o arrasto e o descartaria).
  //
  // O RAIO do grab também é capturado aqui: o plano do cursor é perpendicular ao olhar do momento
  // do grab, então uma janela fora do eixo andava por um plano inclinado em relação à esfera e
  // GANHAVA distância do olho — ela "ia para trás", longe da dock, enquanto era movida. Preso o
  // raio, mover só gira a janela em volta do usuário (mesma altura, mesma distância).
  const local=contentRoot.worldToLocal(center.clone());
  const radius=Math.hypot(local.x,local.z);
  Object.assign(drag,{win:w,source,hand,start:{x:nx,y:ny},active:false,plane,
    anchor:{hit:hit.clone(),center:center.clone(),radius,applied:new THREE.Vector3()}});
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
  setRay(nx,ny);
  const hit=ray.ray.intersectPlane(drag.plane,new THREE.Vector3());
  if(!hit)return false;
  if(!drag.active) {
    if(!dragGestureActivated(drag.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    activateDrag();
  }
  const a=drag.anchor;
  const delta=hit.clone().sub(a.hit);
  a.applied.copy(stepDragDelta(a.applied,delta));
  // Delta relativo no espaço do mundo -> centro local; a âncora nunca é reavaliada contra o
  // estado defasado da janela, então não há retroalimentação (janela puxando de um lado para o
  // outro) nem acúmulo de erro: o mesmo delta devolve sempre a mesma posição.
  const world=a.center.clone().add(a.applied);
  // O raio do grab vai junto: mover nunca aproxima nem afasta a janela do olho (sem "ir pra trás").
  const limited=boundedPosition(w,contentRoot.worldToLocal(world),a.radius);
  w.target.copy(limited);
  w.obj.position.copy(w.target);           // a mão e a janela permanecem alinhadas
  return true;
}
function endDrag() {
  if(drag.win)drag.win.shell.classList.remove('moving');
  Object.assign(drag,{win:null,source:null,hand:null,start:null,active:false,plane:null,anchor:null});
}
function startDockDrag(nx,ny,source='pinch') {
  if(!dockVisible || drag.win || resizing.win)return false;
  if(dockDrag.start)endDockDrag();
  setRay(nx,ny);
  const center=dockObj.getWorldPosition(new THREE.Vector3());
  const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(ray.ray.direction.clone(),center);
  const hit=ray.ray.intersectPlane(plane,new THREE.Vector3());
  if(!hit)return false;
  Object.assign(dockDrag,{source,start:{x:nx,y:ny},active:false,plane,
    anchor:{hit:hit.clone(),center:center.clone(),applied:new THREE.Vector3()}});
  dockEl.classList.add('grab-armed');
  dockGrabEl.setAttribute('aria-pressed','true');
  return true;
}
function activateDockDrag() {
  if(!dockDrag.start || dockDrag.active)return;
  dockDrag.active=true;
  dockEl.classList.remove('grab-armed');
  dockEl.classList.add('moving');
}
function dockDragTo(nx,ny) {
  if(!dockDrag.start)return false;
  setRay(nx,ny);
  const hit=ray.ray.intersectPlane(dockDrag.plane,new THREE.Vector3());
  if(!hit)return false;
  if(!dockDrag.active) {
    if(!dragGestureActivated(dockDrag.start,{x:nx,y:ny},viewport.width,viewport.height))return false;
    activateDockDrag();
  }
  // Match window dragging: keep the grab anchor fixed and derive the dock center from the
  // current hand delta. Re-smoothing against the previous dock position added release lag.
  const a=dockDrag.anchor;
  const delta=hit.clone().sub(a.hit);
  a.applied.copy(stepDragDelta(a.applied,delta));
  const world=a.center.clone().add(a.applied);
  const local=contentRoot.worldToLocal(world);
  const stable=clampWindowPosition(local,dockAt.h/2,EYE);
  dockPlacement=new THREE.Vector3(stable.x,stable.y,stable.z);
  dockYaw=Math.atan2(-stable.x,-stable.z);
  placeDock();
  return true;
}
function endDockDrag() {
  dockEl?.classList.remove('grab-armed','moving');
  dockGrabEl?.setAttribute('aria-pressed','false');
  Object.assign(dockDrag,{source:null,start:null,active:false,plane:null,anchor:null});
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
  if (h.object.userData.isResize) return { win:w, resize:true, distance:h.distance };
  if (h.object.userData.isHandle) return { win:w, handle:true, distance:h.distance };
  const local = h.object.worldToLocal(h.point.clone());
  const g = h.object.geometry.parameters;
  return { win: w, u: local.x / g.width + .5, v: .5 - local.y / g.height, distance:h.distance };
}
let nativePress = null;
/* Pinch over window content: the DOWN is not sent yet — the click-vs-drag arbiter decides.
 * A still pinch becomes one clean tap on release; a sweeping one commits a drag (DOWN at the
 * pinch anchor, then moves). This is what keeps a YouTube click from arriving as a scrub. */
let pendingPress = null;
const activationTarget = el => el?.closest?.('button,a,input,textarea,select,[role="button"]') || el;
function shellPointer(press, action, x, y, target) {
  const currentTarget = target ? activationTarget(target) : null;
  if (action === 0) {
    press.target = currentTarget;
    press.activation = currentTarget;
  }
  const eventTarget = press.target || currentTarget;
  if (!eventTarget) return;
  const pointer = action === 0 ? 'pointerdown' : action === 1 ? 'pointerup' : action === 2 ? 'pointermove' : 'pointercancel';
  eventTarget.dispatchEvent(new PointerEvent(pointer, {
    bubbles: true, cancelable: true, pointerId: 1, pointerType: 'touch', isPrimary: true,
    button: 0, buttons: action === 0 || action === 2 ? 1 : 0, clientX: x, clientY: y,
  }));
  if (action === 1 && press.activation && press.activation === currentTarget) {
    // The shell is already executing in this WebView. Activate its own DOM directly instead of
    // round-tripping a synthetic Android touch through the atlas WebView: that path can leave
    // Chromium's touch target in :active without ever synthesizing click on some WebView builds.
    if (typeof press.activation.click === 'function') press.activation.click();
    if (press.activation.matches?.('input,textarea')) press.activation.focus();
  }
}
function sendPress(press, action, x = press.x, y = press.y, target = null) {
  if (press.id === 'shell' && press.win?.onboarding) shellPointer(press, action, x, y, target);
  else window.NativeXR.handTouch(press.id, action, x, y);
}
function handTouch(hit, action) {
  const root = hit.win.el, px = hit.u * root.offsetWidth, py = hit.v * root.offsetHeight;
  const rect = root.getBoundingClientRect();
  const el = document.elementFromPoint(rect.left + px, rect.top + py);
  const browser = el?.closest('[data-native-browser]');
  const br = browser?.getBoundingClientRect();
  const id = browser ? browser.dataset.nativeBrowser : 'shell';
  const x = rect.left + px - (br?.left || 0), y = rect.top + py - (br?.top || 0);
  if (nativePress && nativePress.id !== id) {
    sendPress(nativePress, 3);
    nativePress = null;
    if (action !== 0) return;
  }
  if (action === 0) nativePress = { id, win: hit.win, x, y };
  if (nativePress && nativePress.id === id) {
    nativePress.x = x; nativePress.y = y;
    sendPress(nativePress, action, x, y, el);
  }
  if (action === 1 || action === 3) nativePress = null;
}
function cancelPress() {
  if (nativePress) sendPress(nativePress, 3);
  nativePress = null; pendingPress = null; endDrag(); endResize(); endDockDrag();
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
  const dockGrab = dockGrabTest(cursor.x,cursor.y);
  // The dock is intentionally in front of app windows. Prefer its grab bar only when the
  // ray actually reaches it before any window surface; otherwise preserve normal window input.
  if (dockGrab && (!h || dockGrab.distance < h.distance)) {
    startDockDrag(cursor.x,cursor.y,'pinch'); return;
  }
  if (h?.resize) { startResize(h.win,cursor.x,cursor.y); return; }
  if (h?.handle) { startDrag(h.win,cursor.x,cursor.y,'handle',cursor.hand?.id); return; }
  if (h) {
    focus(h.win);
    // Content press: hold the DOWN until the click-vs-drag arbiter classifies the gesture.
    pendingPress = { win: h.win, hit: h };
    return;
  }
  if (kbPinch('down')) return;
  dockPinch('down');
});
on('pinchup', () => {
  if (pendingPress && cursor.mode === 'drag') {
    // Classified a drag but the release beat the frame loop: commit the DOWN at the anchor now.
    clickThrough(pendingPress.hit, 'down'); pendingPress = null;
  }
  if (pendingPress) {
    // Click — or released before the decision window elapsed (a tap). DOWN and UP go out at the
    // SAME point so the page synthesizes a click, never a drag from between-sample movement.
    const h = hitAt(cursor.x, cursor.y);
    const target = (h && !h.handle && !h.resize && h.win === pendingPress.win) ? h : pendingPress.hit;
    pendingPress = null;
    clickThrough(target, 'down');
    clickThrough(target, 'up');
    return;
  }
  if (nativePress) {
    const h = hitAt(cursor.x, cursor.y);
    if (h && h.win === nativePress.win && !h.handle && !h.resize) handTouch(h, 1);
    else cancelPress();
    return;
  }
  if (resizing.win) { endResize(); return; }
  if (drag.win) { endDrag(); return; }
  if (dockDrag.start) {
    // Presentation prediction is useful while moving, but release must commit the latest real
    // hand sample so the dock cannot coast ahead after the pinch opens.
    dockDragTo(cursor.x,cursor.y);
    endDockDrag();
    return;
  }
  const h = hitAt(cursor.x, cursor.y);
  if (h && !h.handle && !h.resize) { clickThrough(h, 'up'); return; }
  if (kbPinch('up')) return;
  dockPinch('up');
});

/* =================== dock =================== */
const dockEl = document.createElement('div');
dockEl.className = 'dock';
const dockGrabEl = document.createElement('button');
dockGrabEl.type = 'button';
dockGrabEl.className = 'dock-grab';
dockGrabEl.title = t('moveDock');
dockGrabEl.setAttribute('aria-label', t('moveDock'));
dockGrabEl.setAttribute('aria-pressed', 'false');
const dockObj = new CSS3DObject(dockEl);
contentRoot.add(dockObj);
const dockHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
const dockMoveHit = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ visible: false }));
contentRoot.add(dockHit, dockMoveHit);
if (!native) {
  const point = e => ({ x:e.clientX / viewport.width, y:e.clientY / viewport.height });
  dockGrabEl.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();
    const p=point(e);
    if (startDockDrag(p.x,p.y,'desktop')) dockGrabEl.setPointerCapture(e.pointerId);
  });
  dockGrabEl.addEventListener('pointermove', e => {
    if (dockDrag.source==='desktop') { const p=point(e); dockDragTo(p.x,p.y); }
  });
  dockGrabEl.addEventListener('pointerup', e => {
    if (dockDrag.source==='desktop') { endDockDrag(); if(dockGrabEl.hasPointerCapture(e.pointerId))dockGrabEl.releasePointerCapture(e.pointerId); }
  });
  dockGrabEl.addEventListener('pointercancel', endDockDrag);
}

/* Onboarding estilo Meta: enquanto não há idioma escolhido, SÓ a janelinha de idioma existe.
 * Esconder o CSS3DObject tira a dock do atlas (sem painel, sem pixels) e o gate em dockTest/
 * handTargets tira ela do hit-test da mão — a janela de idioma é a única superfície interativa.
 * Depois da escolha, a dock volta inteira com todas as funcionalidades e o idioma selecionado. */
let dockVisible = true;
export function setDockVisible(visible) {
  dockVisible = !!visible;
  dockObj.visible = dockVisible;
  if (!dockVisible) { dockArmed = -1; endDockDrag(); }
}
export const dockShown = () => dockVisible;

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
  dockGrabEl.title = t('moveDock');
  dockGrabEl.setAttribute('aria-label', t('moveDock'));
  dockEl.appendChild(dockGrabEl);
  tick(); refreshNet(); paintBat(); syncDots(); placeDock();
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
function dockGrabTest(x,y) {
  if (!dockVisible || !dockGrabKey) return null;
  setRay(x,y);
  return ray.intersectObject(dockMoveHit,false)[0]||null;
}
function dockTest(x, y) {
  if (!dockVisible) return null;
  setRay(x,y);
  const hit = ray.intersectObject(dockHit, false)[0]; if (!hit) return null;
  const local = dockHit.worldToLocal(hit.point.clone());
  const g=dockHit.geometry.parameters;
  const px = (local.x / g.width + .5) * dockEl.offsetWidth;
  const py = (.5 - local.y / g.height) * dockEl.offsetHeight;
  for (let i = 0; i < dockBtns.length; i++) {
    const b = dockBtns[i];
    if (px >= b.offsetLeft && px <= b.offsetLeft + b.offsetWidth
        && py >= b.offsetTop && py <= b.offsetTop + b.offsetHeight) return { i };
  }
  return null;
}

let dockKey = '', dockGrabKey='', dockYaw=0,kbYaw=0,dockPlacement=null;
on('recenter',()=>{dockYaw=kbYaw=0;dockPlacement=null;endDockDrag();placeDock();});
on('summon-dock',()=>{
  camera.updateMatrixWorld(true);contentRoot.updateMatrixWorld(true);
  const direction=camera.getWorldDirection(new THREE.Vector3()).transformDirection(contentRoot.matrixWorld.clone().invert());
  dockYaw=Math.atan2(-direction.x,-direction.z);
  dockPlacement=null;
  endDockDrag();
  placeDock(); // Deliberately no layout/recenter: existing windows remain anchored.
  window.NativeXR?.click();
});
function placeDock() {
  const land = viewport.width > viewport.height;
  const dist = (native?COMFORT.dockDistance:(land ? 1.42 : 1.75)) * S.dockDist;      // paisagem: mais perto
  const drop = native?-COMFORT.dockDrop:(land ? -.50 : -.60);
  const sc = PX * (native?COMFORT.dockScale:(land ? .74 : .88)) * S.dockSize;      // sem aumentar de tamanho

  if (dockPlacement) dockObj.position.copy(dockPlacement);
  else dockObj.position.set(-Math.sin(dockYaw)*dist, EYE + drop, -Math.cos(dockYaw)*dist);
  dockObj.rotation.set(.26, dockYaw, 0,'YXZ');
  dockObj.scale.setScalar(sc);

  const w = dockEl.offsetWidth * sc, h = dockEl.offsetHeight * sc;
  const key = w.toFixed(3) + 'x' + h.toFixed(3);
  if (w > 0 && key !== dockKey) {                       // só refaz quando muda de verdade
    dockKey = key;
    dockHit.geometry.dispose();
    dockHit.geometry = new THREE.PlaneGeometry(w, h);
    dockAt.h = h;
    if(!dockPlacement)layout();
  }
  const grabW=dockGrabEl.offsetWidth*sc, grabH=dockGrabEl.offsetHeight*sc;
  const grabKey=grabW.toFixed(3)+'x'+grabH.toFixed(3);
  if(grabW>0 && grabKey!==dockGrabKey) {
    dockGrabKey=grabKey;
    dockMoveHit.geometry.dispose();
    dockMoveHit.geometry=new THREE.PlaneGeometry(grabW,grabH);
  }
  dockHit.position.copy(dockObj.position);
  dockHit.rotation.copy(dockObj.rotation);
  dockMoveHit.position.copy(dockObj.position);
  dockMoveHit.rotation.copy(dockObj.rotation);
  dockMoveHit.translateY((dockEl.offsetHeight/2-dockGrabEl.offsetTop-dockGrabEl.offsetHeight/2)*sc);
  dockMoveHit.translateZ(.004);

  if (!dockPlacement && (dockAt.y !== dockObj.position.y || dockAt.z !== -dist)) {
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
onFrame((dt, now) => {
  const nextSettings = `${S.winScale}:${S.winDist}`;
  if (layoutSettings !== nextSettings) { layoutSettings = nextSettings; layout(); }
  placeDock(); placeKb();
  if (pendingPress && cursor.mode === 'drag') {
    // Arbiter classified the held pinch as a drag: commit the content DOWN at the pinch anchor
    // exactly once; from here on the move stream below follows the hand.
    clickThrough(pendingPress.hit, 'down');
    pendingPress = null;
  }
  if (nativePress && cursor.active && cursor.down) {
    // DOM input follows the latest sample (a real detection or the native motion-model bridge) —
    // never the web-side display extrapolation (predictedCursor), which may overshoot.
    const h = hitAt(cursor.x, cursor.y);
    if (h && h.win === nativePress.win && !h.handle && !h.resize) handTouch(h, 2);
  }
  // World-space motion (drag/resize) follows the predicted cursor, so the window glides at the
  // display rate instead of stepping at the tracking rate — the same idea as native ray presentation.
  if ((resizing.win || (drag.win && drag.source!=='fist')) && cursor.active && cursor.down) {
    const p = predictedCursor(now);
    if (resizing.win) resizeTo(p.x,p.y);
    if (drag.win && drag.source!=='fist') dragTo(p.x,p.y);
  }
  if (dockDrag.start && cursor.active && cursor.down) {
    const p=predictedCursor(now); dockDragTo(p.x,p.y);
  }
  for (const w of wins) w.apply();
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
let nearDockContact = null;
const fistBefore = new Map();
/** Hands whose direct touch just ended while still pinched: the ray ignores them until the pinch opens. */
const pinchSuppressed = new Set();
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
  // Com curvatura 360 a superfície está à frente do plano z=0: `d` continua sendo a distância até
  // a superfície (é o que o toque direto compara), e u/v saem do x real do ponto.
  const surface=w.curve>0?curveOffset(local.x,w.curveRadius):0;
  return { local, scale, u:local.x/w.w+.5, v:.5-local.y/w.h, d:(local.z-surface)*scale.z };
}

/** Ponto na superfície plana da dock (mesma lógica de windowPoint para uma face reta). */
function dockPoint(point) {
  const local=dockObj.worldToLocal(point.clone()), scale=dockObj.getWorldScale(new THREE.Vector3());
  return { local, scale, u:local.x/dockEl.offsetWidth+.5, v:.5-local.y/dockEl.offsetHeight, d:local.z*scale.z };
}
/** Interseção do raio com a casca da janela: o plano z=0, ou o cilindro da curvatura 360. */
function surfaceHit(w, ray) {
  const center=w.obj.getWorldPosition(new THREE.Vector3());
  const normal=new THREE.Vector3(0,0,1).transformDirection(w.obj.matrixWorld);
  const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(normal,center);
  if(!(w.curve>0)) return ray.intersectPlane(plane,new THREE.Vector3());
  // Cilindro no espaço local da janela (px): x² + (z - raio)² = raio². O ramo da frente é o que
  // existe na tela; fora do arco a superfície segue reta na tangente e aí o plano responde.
  const inv=w.obj.matrixWorld.clone().invert();
  const origin=ray.origin.clone().applyMatrix4(inv);
  const direction=ray.origin.clone().add(ray.direction).applyMatrix4(inv).sub(origin).normalize();
  const R=w.curveRadius, a=direction.x*direction.x+direction.z*direction.z;
  if(a<1e-9) return ray.intersectPlane(plane,new THREE.Vector3());
  const b=2*(origin.x*direction.x+(origin.z-R)*direction.z);
  const c=origin.x*origin.x+(origin.z-R)*(origin.z-R)-R*R;
  const disc=b*b-4*a*c; if(disc<0) return ray.intersectPlane(plane,new THREE.Vector3());
  const root=Math.sqrt(disc);
  for(const t of [(-b-root)/(2*a),(-b+root)/(2*a)]) {
    if(!(t>0)) continue;
    const hit=origin.clone().addScaledVector(direction,t);
    if(Math.abs(hit.x)>R+1e-6 || hit.z>R) continue;
    return hit.applyMatrix4(w.obj.matrixWorld);
  }
  return ray.intersectPlane(plane,new THREE.Vector3());
}
function fistHit(r) {
  let best=null;
  for(const w of wins) {
    if(w.onboarding)continue;
    const center=w.obj.getWorldPosition(new THREE.Vector3());
    const hit=surfaceHit(w,r.ray);
    if(!hit)continue;
    const {local,scale}=windowPoint(w,hit);
    if(Math.abs(local.x)*scale.x>w.w*scale.x/2+.08 || Math.abs(local.y)*scale.y>w.h*scale.y/2+.08)continue;
    const distance=r.ray.origin.distanceTo(hit);
    if(!best || distance<best.distance) best={win:w,point:hit,distance};
  }
  return best;
}
function endNear(cancel=false, packet=lastPhonePacket) {
  const ended=nearContact;
  if(ended?.down) {
    handTouch({win:ended.win,u:ended.u,v:ended.v},cancel?3:1);
    // Leaving the near band can end contact before the smoothed depth release threshold is
    // sampled. Keep the same still-closed pinch from immediately becoming a second FAR press.
    if(!cancel && packet.hands.some(h=>h.id===ended.id&&h.pinching)) {
      pinchSuppressed.add(ended.id);packet.consumed.add(ended.id);
    }
  }
  nearContact=null;
}
function endNearDock(cancel=false, packet=lastPhonePacket) {
  const ended=nearDockContact;
  if(ended?.down) {
    const btn=ended.btn;
    if(btn) btn.classList.remove('near-press');
    // Finaliza o toque direto na dock: se ainda está em cima do mesmo botão, clica.
    if(btn && !cancel) { btn.style.transform='scale(.88)'; setTimeout(()=>btn.style.transform='',150); btn.click(); }
    if(!cancel && packet.hands.some(h=>h.id===ended.id&&h.pinching)) {
      pinchSuppressed.add(ended.id);packet.consumed.add(ended.id);
    }
  }
  nearDockContact=null;
}
on('phonehands', packet => {
  lastPhonePacket=packet;
  const ids=new Set(packet.hands.map(h=>h.id));
  for(const id of fistBefore.keys())if(!ids.has(id))fistBefore.delete(id);
  for(const id of pinchSuppressed) {
    const h=packet.hands.find(h=>h.id===id);
    if(!h || !h.pinching) pinchSuppressed.delete(id); else packet.consumed.add(id);
  }

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
  // Destaque de hover nos ícones da dock: quando o cursor passa por cima, o ícone cresce um pouco.
  const overDock = dockTest(cursor.x, cursor.y);
  for(let i=0;i<dockBtns.length;i++){
    dockBtns[i].classList.toggle('dock-hover', !!(overDock && overDock.i===i) && !cursor.down);
  }
  for(const h of packet.hands) {
    const before=fistBefore.get(h.id)||false;fistBefore.set(h.id,h.fist);
    if(!drag.win && !resizing.win && h.fist && !before) {
      const p=palmScreen(h,packet,true),hit=fistHit(phoneRay(p.x,p.y));
      if(hit) {
        if(cursor.hand?.id===h.id) cancelHandInput();
        if(startDrag(hit.win,p.x,p.y,'fist',h.id))packet.consumed.add(h.id);
      }
    }
  }
  // Metric hand landmarks are hand pose, not a head/room 6 DoF tracker.
  // The near-touch zone has wide hysteresis and a short hold: a resting hand in front of an open
  // window jitters across a naive depth threshold and used to blink the pointer between the FAR
  // ray and direct touch. Enter only when clearly close; stay until clearly away.
  // Dock is added here too: pinch "encima" (em cima) do ícone = toque direto, não raio de longe.
  let best=null, bestDock=null;
  for(const h of packet.hands) {
    if(packet.consumed.has(h.id) || !h.head || h.head.length!==63)continue;
    const tip=new THREE.Vector3().fromArray(h.head,24);
    if(tip.length()>.7)continue;
    tip.applyMatrix4(camera.matrixWorld);
    // Janelas
    for(const w of wins) {
      const p=windowPoint(w,tip),current=nearContact?.win===w && nearContact.id===h.id;
      const margin=current?.08:.02;
      const dMax=current?.26:.11;
      if(p.d>dMax || p.d<-.12 || Math.abs(p.local.x)*p.scale.x>w.w*p.scale.x/2+margin || Math.abs(p.local.y)*p.scale.y>w.h*p.scale.y/2+margin)continue;
      if(!best || current || (!best.current && Math.abs(p.d)<Math.abs(best.d)))best={...p,id:h.id,win:w,point:tip,current};
    }
    // Dock — toque direto em cima do ícone (pinça "em cima" abre o app)
    if(dockVisible && dockObj.visible) {
      const dp=dockPoint(tip), curDock=nearDockContact?.id===h.id;
      const dw=dockEl.offsetWidth*dp.scale.x, dh=dockEl.offsetHeight*dp.scale.y;
      const dM=curDock?.08:.02;
      const dMaxD=curDock?.26:.11;
      // A dock fica sempre "abaixo" do centro; considera contato só quando a ponta está claramente em cima dela.
      if(dp.d<=dMaxD && dp.d>=-.12 && Math.abs(dp.local.x)*dp.scale.x<dw/2+dM && Math.abs(dp.local.y)*dp.scale.y<dh/2+dM){
        // Acha qual botão da dock está embaixo da ponta
        const px=(dp.u)*dockEl.offsetWidth, py=(dp.v)*dockEl.offsetHeight;
        let btn=null;
        for(const b of dockBtns) {
          if(px>=b.offsetLeft && px<=b.offsetLeft+b.offsetWidth
              && py>=b.offsetTop && py<=b.offsetTop+b.offsetHeight) { btn=b; break; }
        }
        if(!bestDock || curDock || (!bestDock.current && Math.abs(dp.d)<Math.abs(bestDock.d)))
          bestDock={...dp,id:h.id,btn,point:tip,current:curDock};
      }
    }
  }
  // Decide quem ganha: dock tem prioridade quando a mão está mais perto dela do que das janelas
  // (o usuário tocou o ícone diretamente). Se não, segue a lógica de janela normal.
  const dockWins=!!bestDock && (!best || Math.abs(bestDock.d) < Math.abs(best.d) - .01 || bestDock.current);
  // Brief near-band jitter keeps an existing contact.
  if(dockWins) {
    endNear(ids.has(nearContact?.id)?false:true,packet);
    if(!bestDock && nearDockContact && ids.has(nearDockContact.id) && nowMs-nearDockContact.lastSeen<=NEAR_HOLD_MS){
      bestDock={...nearDockContact,current:true,held:true};
    }
    if(!bestDock){endNearDock(!ids.has(nearDockContact?.id),packet);}
    else if(!bestDock.current){
      endNearDock(false,packet);
      nearDockContact={...bestDock,down:false,previousD:bestDock.d,lastSeen:nowMs};
    } else {
      nearDockContact.d+=(bestDock.d-nearDockContact.d)*.45;
      nearDockContact.u+=(bestDock.u-nearDockContact.u)*.45;nearDockContact.v+=(bestDock.v-nearDockContact.v)*.45;
      nearDockContact.btn=bestDock.btn;
      if(!bestDock.held)nearDockContact.lastSeen=nowMs;
    }
    if(nearDockContact){
      const n=nearDockContact, insideBtn=!!n.btn;
      if(!n.down && insideBtn && n.d<=.012 && n.previousD>.012){
        if(cursor.down)cancelHandInput();
        n.down=true;
        if(n.btn) n.btn.classList.add('near-press');
      } else if(n.down && (n.d>=.035 || !insideBtn)){
        if(n.btn) n.btn.classList.remove('near-press');
        // Solta o clique: clica no botão que estava embaixo (se o mesmo).
        const ended=n.btn;
        n.down=false;
        if(ended) { ended.style.transform='scale(.88)'; setTimeout(()=>ended.style.transform='',150); ended.click(); }
        if(packet.hands.some(h=>h.id===n.id&&h.pinching)){pinchSuppressed.add(n.id);packet.consumed.add(n.id);}
      }
      n.previousD=n.d;
      if(n.down){packet.blockFar=true;packet.consumed.add(n.id);}
    }
  } else {
    endNearDock(ids.has(nearDockContact?.id)?false:true,packet);
    if(!best && nearContact && ids.has(nearContact.id) && wins.includes(nearContact.win)
        && nowMs-nearContact.lastSeen<=NEAR_HOLD_MS) {
      best={...nearContact,current:true,held:true};
    }
    if(!best) { endNear(!ids.has(nearContact?.id),packet); }
    else if(!best.current) {
      endNear(false,packet);
      nearContact={...best,down:false,previousD:best.d,lastSeen:nowMs};
    } else {
      nearContact.d+=(best.d-nearContact.d)*.45;
      nearContact.u+=(best.u-nearContact.u)*.45;nearContact.v+=(best.v-nearContact.v)*.45;
      if(!best.held)nearContact.lastSeen=nowMs;
    }
    if(nearContact){
      const n=nearContact,inside=n.u>=0&&n.u<=1&&n.v>=0&&n.v<=1;
      const hit={win:n.win,u:Math.max(0,Math.min(1,n.u)),v:Math.max(0,Math.min(1,n.v))};
      if(!n.down && inside && n.d<=.012 && n.previousD>.012){
        if(cursor.down)cancelHandInput();
        focus(n.win);handTouch(hit,0);n.down=true;
      }
      else if(n.down && (n.d>=.035 || !inside)){
        handTouch(hit,1);n.down=false;
        if(packet.hands.some(h=>h.id===n.id&&h.pinching)){pinchSuppressed.add(n.id);packet.consumed.add(n.id);}
      }
      else if(n.down)handTouch(hit,2);
      n.previousD=n.d;
      if(n.down){packet.blockFar=true;packet.consumed.add(n.id);}
    }
  }
});
let lastTargetAt=0,lastTargets='';
onFrame((dt,now)=>{
  // 60 Hz: o anel/ponta do raio acompanha a predição da mão em vez de degraus de 30 Hz.
  if(!native || now-lastTargetAt<16)return;lastTargetAt=now;
  const packet=lastPhonePacket, targets=[];
  for(const h of packet.hands) {
    if(nearDockContact?.id===h.id) {
      const n=nearDockContact;
      // Ponto de contato direto na dock (anexo ao botão embaixo do dedo)
      const btn=n.btn;
      let px=0,py=0;
      if(btn){ px=btn.offsetLeft+btn.offsetWidth/2-dockEl.offsetWidth/2; py=dockEl.offsetHeight/2-(btn.offsetTop+btn.offsetHeight/2); }
      const point=new THREE.Vector3(px,py,0).applyMatrix4(dockObj.matrixWorld);
      targets.push({id:h.id,end:camera.worldToLocal(point).toArray(),direct:true,down:n.down});continue;
    }
    if(nearContact?.id===h.id && nearContact.down) {
      const n=nearContact;
      const point=new THREE.Vector3((n.u-.5)*n.win.w,(.5-n.v)*n.win.h,0).applyMatrix4(n.win.obj.matrixWorld);
      targets.push({id:h.id,end:camera.worldToLocal(point).toArray(),direct:true,down:n.down});continue;
    }
    if(packet.consumed.has(h.id) || packet.blockFar){targets.push({id:h.id,hidden:true});continue;}
    // A mão do cursor usa a posição predita (só apresentação): o raio desliza na taxa do display.
    const p=cursor.hand?.id===h.id?predictedCursor(now):screenPoint(h.aim);
    const r=phoneRay(p.x,p.y);
    // Com NovaMR MediaPipe JS (sem pontos 3D métricos), a dock volta a ser alvo do raio:
    // a pinça de longe abre o app; o pegador abaixo continua arrastável.
    const list=wins.flatMap(w=>[w.resizeHit,w.grab,w.hit]);if(dockVisible)list.push(dockMoveHit,dockHit);if(kbHit && kbObj)list.push(kbHit);
    const hit=r.intersectObjects(list,false)[0];
    targets.push({id:h.id,...(hit?{end:camera.worldToLocal(hit.point.clone()).toArray()}:{}),down:cursor.hand?.id===h.id&&cursor.down});
  }
  const json=JSON.stringify(targets);
  if(json!==lastTargets){lastTargets=json;window.NativeXR.handTargets?.(json);}
});
