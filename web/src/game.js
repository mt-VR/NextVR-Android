// NextVR — mundo 3D jogável: a plataforma de jogos do aparelho.
//
// O mundo é desenhado NATIVAMENTE: a casca manda a geometria de cada tipo UMA vez (base64) e a
// cena (matriz + cor de cada objeto) a cada mudança; quem rasteriza é o passe GLES2 do Cardboard
// (GameSceneRenderer.kt), junto com as janelas e as mãos. Não é WebXR e não há segundo contexto.
//
// A entrada é exatamente a das janelas: pinça da mão, sem rota de touchscreen. O mundo some com o
// workspace (janelas, dock e teclado escondidos com o estado preservado) e devolve tudo igual.
import * as THREE from 'three';
import { settings as S, t, on, emit, toast, onFrame, contentRoot, camera, EYE, native, viewport } from './core.js';
import { open, close, wins, windowUnder, setDockHidden, setKeyboardHidden, keyboardShown,
  dockHiddenNow, focus as focusWindow, focusedWin } from './windows.js';
import { cursor, predictedCursor, screenPoint } from './hands.js';
import { TwoHandMenuChord } from './two-hand-chord.js';
import { icon } from './reference-icons.js';

export const GAME_WINDOW_ID = 'nextvr-game';
export const GAME_MENU_ID = 'nextvr-game-menu';
/** Tipos de objeto que o renderer nativo sabe desenhar (a geometria vem daqui, do three). */
export const KINDS = ['box', 'sphere', 'cylinder', 'cone', 'plate'];
export const PALETTE = ['#a78bfa', '#7c6bff', '#8de6c8', '#ffc45c', '#ff6b6b', '#63aaff', '#eef1f7', '#39415a'];
export const LIMITS = { minScale: .05, maxScale: 6, maxY: 8, maxRadius: 8 };
/** Ferramentas do painel: o que a próxima pinça no mundo faz. */
export const TOOLS = ['move', 'place', 'rotate', 'scale'];

const KEY = id => `nextvr.game.${id}`;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const round4 = v => Math.round(v * 1e4) / 1e4;

/* =================== geometria (uma malha por tipo, enviada uma vez) =================== */
const GEOMETRY = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(.5, 24, 16),
  cylinder: new THREE.CylinderGeometry(.5, .5, 1, 24, 1),
  cone: new THREE.ConeGeometry(.5, 1, 24, 1),
  plate: new THREE.PlaneGeometry(1, 1),
};
const PICK = new THREE.MeshBasicMaterial({ visible: false });
const uploaded = new Set();
const b64 = bytes => { let s = ''; for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return btoa(s); };
/** Bytes de um typed array (Float32Array/Uint16Array do three) em base64, sem cópia extra. */
const b64bytes = a => b64(new Uint8Array(a.buffer, a.byteOffset, a.byteLength));

/** Sobe a malha do tipo para o renderer nativo (uma vez por tipo, na primeira vez que ele é usado). */
function uploadMesh(kind) {
  if (!native || uploaded.has(kind) || !window.NativeXR?.gameMesh) return;
  const g = GEOMETRY[kind]; if (!g) return;
  window.NativeXR.gameMesh(kind, b64bytes(g.attributes.position.array),
    b64bytes(g.attributes.normal.array), b64bytes(new Uint16Array(g.index.array)));
  uploaded.add(kind);
}

/* =================== estado da cena =================== */
let objects = [];
let selectedId = null;
let active = false, gameId = null, snapshot = null;
let tool = 'move';
let placeKind = 'box';
let seq = 0;
let dirty = false;

export const gameActive = () => active;
export const gameObjects = () => objects.slice();
export const selected = () => objects.find(o => o.id === selectedId) || null;
export const currentTool = () => tool;

function sync(o) {
  o.proxy.position.copy(o.position);
  o.proxy.rotation.copy(o.rotation);
  o.proxy.scale.copy(o.scale);
  o.proxy.updateMatrixWorld(true);
  if (o.outline) {
    o.outline.position.copy(o.position); o.outline.rotation.copy(o.rotation);
    o.outline.scale.copy(o.scale).multiplyScalar(1.04);
    o.outline.visible = o.id === selectedId;
  }
  dirty = true;
}

function select(o) {
  selectedId = o ? o.id : null;
  for (const x of objects) if (x.outline) x.outline.visible = x.id === selectedId;
  dirty = true; paintTools();
}

/** Cria um objeto no mundo. `kind` decide a malha; o resto é transform + cor. */
export function addObject(kind, position, spec = {}) {
  const k = KINDS.includes(kind) ? kind : 'box';
  uploadMesh(k);
  const o = {
    id: spec.id || `o${++seq}`, kind: k,
    name: spec.name || `${label(k)} ${objects.length + 1}`,
    color: spec.color || PALETTE[objects.length % PALETTE.length],
    position: position.clone(),
    rotation: new THREE.Euler(...(spec.rotation || [0, 0, 0]), 'YXZ'),
    scale: new THREE.Vector3(...(spec.scale || [.4, .4, .4])),
  };
  if (typeof spec.id === 'string') { const n = parseInt(spec.id.slice(1), 10); if (n > seq) seq = n; }
  // No APK a casca não rasteriza o mundo: a malha é só o alvo do raio da mão (material invisível,
  // o mesmo truque das janelas). No preview do navegador ela é desenhada de verdade.
  o.proxy = new THREE.Mesh(GEOMETRY[k], native ? PICK : new THREE.MeshBasicMaterial({ color: o.color }));
  o.proxy.userData.objectId = o.id;
  contentRoot.add(o.proxy);
  if (!native) {
    o.outline = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)),
      new THREE.LineBasicMaterial({ color: 0xffffff }));
    o.outline.visible = false;
    contentRoot.add(o.outline);
  }
  objects.push(o);
  sync(o);
  return o;
}

export function removeObject(o) {
  const target = o || selected(); if (!target) return false;
  const i = objects.indexOf(target); if (i < 0) return false;
  objects.splice(i, 1);
  contentRoot.remove(target.proxy);
  // A geometria é compartilhada por tipo (não se descarta); o material do preview é por objeto.
  if (target.proxy.material !== PICK) target.proxy.material.dispose();
  if (target.outline) { contentRoot.remove(target.outline); target.outline.geometry.dispose(); }
  if (selectedId === target.id) selectedId = null;
  dirty = true; paintTools();
  return true;
}

function clearObjects() {
  for (const o of objects) {
    contentRoot.remove(o.proxy);
    if (o.outline) { contentRoot.remove(o.outline); o.outline.geometry.dispose(); }
  }
  objects = []; selectedId = null; dirty = true;
}

/** Muda o tipo mantendo posição/giro/tamanho — é o "editar objeto" do painel. */
export function setKind(o, kind) {
  const target = o || selected(); if (!target || !KINDS.includes(kind) || target.kind === kind) return false;
  uploadMesh(kind);
  target.proxy.geometry = GEOMETRY[kind];
  target.kind = kind; target.name = label(kind);
  dirty = true; paintTools();
  return true;
}

export function setColor(o, color) {
  const target = o || selected(); if (!target) return false;
  target.color = color;
  if (target.proxy.material !== PICK) target.proxy.material.color.set(color);
  dirty = true; paintTools();
  return true;
}

export function setScale(o, size) {
  const target = o || selected(); if (!target) return false;
  const v = clamp(size, LIMITS.minScale, LIMITS.maxScale);
  target.scale.set(v, v, v); sync(target); paintTools();
  return true;
}

export function setRotation(o, yaw, pitch = null) {
  const target = o || selected(); if (!target) return false;
  target.rotation.y = yaw;
  if (pitch != null) target.rotation.x = clamp(pitch, -Math.PI / 2, Math.PI / 2);
  sync(target);
  return true;
}

function label(kind) { return t(`kind.${kind}`) || kind; }

/** Mantém o objeto dentro do mundo jogável (nada de NaN, nada de objeto a quilômetros). */
function bound(o) {
  const p = o.position;
  for (const k of ['x', 'y', 'z']) if (!Number.isFinite(p[k])) p[k] = 0;
  p.y = clamp(p.y, 0, LIMITS.maxY);
  const r = Math.hypot(p.x, p.z);
  if (r > LIMITS.maxRadius) { p.x *= LIMITS.maxRadius / r; p.z *= LIMITS.maxRadius / r; }
  for (const k of ['x', 'y', 'z']) o.scale[k] = clamp(o.scale[k], LIMITS.minScale, LIMITS.maxScale);
}

/* =================== cena -> renderer nativo =================== */
function payload() {
  // A matriz vai para o renderer nativo em espaço de MUNDO: o contentRoot gira no recenter, então
  // a hierarquia inteira é atualizada antes de ler (é o que o atlas faz com os painéis).
  contentRoot.updateMatrixWorld(true);
  return JSON.stringify(objects.map(o => {
    const e = o.proxy.matrixWorld.elements;
    return { k: o.kind, s: o.id === selectedId ? 1 : 0, c: o.color,
      m: Array.from(e, round4) };
  }));
}
let sent = null;
function send() {
  if (!native || !window.NativeXR?.gameFrame) return;
  const json = payload();
  if (json === sent) return;
  sent = json;
  window.NativeXR.gameFrame(json);
}
// A cena cruza a ponte no ritmo do display e só quando mudou (o mesmo acordo do atlas).
onFrame(() => { if (!active || !dirty) return; dirty = false; send(); });

/* =================== sessão: esconde o workspace e devolve exatamente igual =================== */
/**
 * Entra no jogo. Todas as janelas abertas, a dock e o teclado somem COM o estado preservado
 * (posição, tamanho, curvatura, conteúdo, foco): nada é fechado, nada é recriado. A saída
 * devolve cada um exatamente onde estava.
 */
export function startGame(id = 'sandbox') {
  if (active) return false;
  snapshot = {
    windows: wins.map(w => ({ win: w, hidden: w.hidden })),
    dockHidden: dockHiddenNow(),
    keyboard: keyboardShown(),
    focus: focusedWin()?.id || null,
  };
  for (const w of wins) w.setHidden(true);
  setKeyboardHidden(true);
  setDockHidden(true);
  document.documentElement.classList.add('game-on');
  active = true; gameId = id; seq = 0;
  loadScene(id);
  chord.reset();
  pinchState.clear(); endGrips();
  openTools();
  emit('game', { active: true, id });
  return true;
}

/** Sai do jogo: as janelas do jogo saem de cena e o workspace volta exatamente como estava. */
export function endGame() {
  if (!active) return false;
  persist();
  for (const w of [...wins]) if (w.id === GAME_WINDOW_ID || w.id === GAME_MENU_ID) close(w);
  clearObjects();
  if (native) { sent = null; window.NativeXR?.gameFrame?.('[]'); }
  active = false;
  hideRing();
  document.documentElement.classList.remove('game-on');
  const snap = snapshot; snapshot = null;
  if (snap) {
    // O que foi aberto DURANTE o jogo (configurações, por exemplo) sai de cena: a saída devolve o
    // workspace exatamente como estava, sem janelas a mais por cima dele.
    const known = new Set(snap.windows.map(x => x.win));
    for (const w of [...wins]) if (!known.has(w) && !w.onboarding) close(w);
    setDockHidden(snap.dockHidden);
    for (const { win, hidden } of snap.windows) if (wins.includes(win)) win.setHidden(hidden);
    if (snap.keyboard) setKeyboardHidden(false);
    const back = wins.find(w => w.id === snap.focus);
    if (back) focusWindow(back);
  }
  const id = gameId; gameId = null;
  chord.reset();
  emit('game', { active: false, id });
  return true;
}

/* =================== persistência da cena =================== */
const serialize = o => ({ i: o.id, k: o.kind, n: o.name, c: o.color,
  p: o.position.toArray().map(round4), r: [o.rotation.x, o.rotation.y, o.rotation.z].map(round4),
  s: o.scale.toArray().map(round4) });

export function persist() {
  if (!gameId) return false;
  try {
    localStorage.setItem(KEY(gameId), JSON.stringify({ v: 1, seq, objects: objects.map(serialize) }));
    return true;
  } catch { return false; }
}

function loadScene(id) {
  clearObjects();
  let data = null;
  try { data = JSON.parse(localStorage.getItem(KEY(id)) || 'null'); } catch { data = null; }
  const list = Array.isArray(data?.objects) ? data.objects : null;
  if (list && list.length) {
    seq = data.seq || 0;
    for (const o of list) {
      if (!o || !Array.isArray(o.p) || o.p.length !== 3) continue;
      addObject(KINDS.includes(o.k) ? o.k : 'box', new THREE.Vector3(...o.p),
        { id: o.i, name: o.n, color: o.c, rotation: o.r, scale: o.s });
    }
  } else seedScene();
  if (!objects.length) seedScene();
  select(objects.find(o => o.kind !== 'plate') || objects[0] || null);
  dirty = true; send();
}

/** Cena inicial: um chão e três objetos — o mundo já nasce jogável. */
function seedScene() {
  const floor = addObject('plate', new THREE.Vector3(0, 0, -1.2),
    { name: t('game.floor'), color: '#2b3242', rotation: [-Math.PI / 2, 0, 0], scale: [8, 8, 1] });
  addObject('box', new THREE.Vector3(-.55, .3, -1.5), { scale: [.6, .6, .6], color: PALETTE[0] });
  addObject('sphere', new THREE.Vector3(.5, .35, -1.7), { scale: [.7, .7, .7], color: PALETTE[2] });
  addObject('cylinder', new THREE.Vector3(0, .4, -2.2), { scale: [.5, .8, .5], color: PALETTE[3] });
  return floor;
}

/* =================== painel de ferramentas (uma janela NextVR comum) =================== */
let toolWin = null;
function openTools() {
  const body = document.createElement('div');
  body.className = 'game-tools';
  body.innerHTML = `
    <div class="gt-sec">${t('game.place')}</div>
    <div class="gt-row">${KINDS.map(k => `<button class="gt-btn" data-place="${k}"><span>${label(k)}</span></button>`).join('')}</div>
    <div class="gt-sec">${t('game.edit')}</div>
    <div class="gt-row gt-tools">
      <button class="gt-btn" data-tool="move" aria-pressed="true">${t('tool.move')}</button>
      <button class="gt-btn" data-tool="rotate">${t('tool.rotate')}</button>
      <button class="gt-btn" data-tool="scale">${t('tool.scale')}</button>
      <button class="gt-btn" data-act="duplicate">${t('game.duplicate')}</button>
      <button class="gt-btn danger" data-act="remove">${t('game.remove')}</button>
    </div>
    <div class="gt-row gt-colors">${PALETTE.map(c => `<button class="gt-color" data-color="${c}" style="background:${c}" aria-label="${c}"></button>`).join('')}</div>
    <div class="gt-status" data-status></div>
    <div class="gt-row">
      <button class="gt-btn" data-act="reset">${t('game.reset')}</button>
      <button class="gt-btn primary" data-act="exit">${t('game.exit')}</button>
    </div>`;

  body.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.place) { placeKind = b.dataset.place; setTool('place'); return; }
    if (b.dataset.tool) { setTool(b.dataset.tool); return; }
    if (b.dataset.color) { setColor(null, b.dataset.color); return; }
    switch (b.dataset.act) {
      case 'duplicate': {
        const o = selected(); if (!o) { toast(t('game.none')); return; }
        const copy = addObject(o.kind, o.position.clone().add(new THREE.Vector3(.35, 0, .15)),
          { color: o.color, rotation: [o.rotation.x, o.rotation.y, o.rotation.z], scale: o.scale.toArray() });
        select(copy); toast(copy.name); persist(); return;
      }
      case 'remove': {
        const o = selected();
        if (!o) { toast(t('game.none')); return; }
        const name = o.name; removeObject(o); toast(`${name}: ${t('game.removed')}`); persist(); return;
      }
      case 'reset': clearObjects(); seedScene(); select(objects[1] || null); send(); persist(); return;
      case 'exit': endGame(); return;
    }
  });

  toolWin = open({ id: GAME_WINDOW_ID, title: t('game.tools'), node: body, w: 760, h: 560,
    free: true, at: { x: 0, y: EYE - .02, z: -Math.max(.62, S.winDist) } });
  toolWin?.setCurve(0);
  paintTools();
  return toolWin;
}

function setTool(next) {
  tool = TOOLS.includes(next) ? next : 'move';
  const body = toolWin?.el.querySelector('.game-tools');
  body?.querySelectorAll('[data-tool]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tool === tool)));
  body?.querySelectorAll('[data-place]').forEach(b => b.setAttribute('aria-pressed', String(tool === 'place' && b.dataset.place === placeKind)));
  paintTools();
}

function paintTools() {
  const body = toolWin?.el.querySelector('.game-tools'); if (!body) return;
  const o = selected();
  const status = body.querySelector('[data-status]');
  if (status) {
    status.textContent = o
      ? `${o.name} · ${o.scale.x.toFixed(2)} m · ${Math.round(o.rotation.y * 180 / Math.PI)}° · ${toolLabel()}`
      : `${t('game.hint')} · ${toolLabel()}`;
  }
  body.querySelectorAll('.gt-color').forEach(b => b.setAttribute('aria-pressed', String(!!o && o.color === b.dataset.color)));
}
const toolLabel = () => t(`tool.${tool}`) || tool;

/* =================== menu do jogo (plano, estilo SteamVR) =================== */
/**
 * Segurar a pinça com as DUAS mãos por ~2 s abre o menu. Ele é uma janela PLANA na frente do
 * usuário (curvatura 0, nunca o cilindro da referência) com Continuar / Configurações / Sair.
 */
const chord = new TwoHandMenuChord();
function openMenu() {
  if (wins.some(w => w.id === GAME_MENU_ID)) return null;
  endGrips();
  const body = document.createElement('div');
  body.className = 'game-menu';
  body.innerHTML = `
    <div class="gm-t">${t('game.menuTitle')}</div>
    <button class="gm-btn" data-act="continue">${t('game.continue')}</button>
    <button class="gm-btn" data-act="settings">${icon('settings')}<span>${t('game.settings')}</span></button>
    <button class="gm-btn danger" data-act="exit">${t('game.exit')}</button>`;
  body.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    if (b.dataset.act === 'exit') { closeMenu(); endGame(); return; }
    if (b.dataset.act === 'settings') { closeMenu(); emit('game:settings'); return; }
    closeMenu();
  });
  const win = open({ id: GAME_MENU_ID, title: t('game.menu'), node: body, w: 560, h: 470,
    free: true, at: { x: 0, y: EYE, z: -.55 } });
  win?.setCurve(0);                        // PLANO: o menu nunca é curvo
  return win;
}
function closeMenu() { const w = wins.find(x => x.id === GAME_MENU_ID); if (w) close(w); }
export const menuOpen = () => wins.some(w => w.id === GAME_MENU_ID);

/* Anel de progresso do acorde, preso na cabeça junto com o HUD (também é plano). */
let ring = null;
function ensureRing() {
  if (ring) return ring;
  const host = document.getElementById('hud'); if (!host) return null;
  ring = document.createElement('div');
  ring.id = 'gameRing';
  ring.hidden = true;
  ring.innerHTML = '<span></span>';
  host.appendChild(ring);
  return ring;
}
function paintRing(progress) {
  const node = ensureRing(); if (!node) return;
  if (!(progress > 0)) { node.hidden = true; return; }
  node.hidden = false;
  node.style.background = `conic-gradient(var(--accent) ${Math.round(progress * 360)}deg, rgba(255,255,255,.16) 0deg)`;
}
const hideRing = () => paintRing(0);

/* =================== entrada: a mesma pinça das janelas =================== */
const pinchState = new Map();
const grips = new Map();          // id da mão -> agarre em andamento
let twoHand = null;               // transformação com as duas mãos
const GROUND = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

/* O raio da mão vive no mundo; a posição dos objetos vive no contentRoot (que é o que o recenter
 * gira). Toda conversão passa por aqui — é o mesmo cuidado que as janelas têm no drag. */
const toLocal = point => contentRoot.worldToLocal(point.clone());

function handRay(h, now) {
  const p = cursor.hand?.id === h.id ? predictedCursor(now) : screenPoint(h.aim || [0, 0]);
  camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
  const ray = new THREE.Raycaster();
  ray.setFromCamera(new THREE.Vector2(p.x * 2 - 1, 1 - p.y * 2), camera);
  return { x: p.x, y: p.y, ray };
}

function hitObject(ray) {
  if (!objects.length) return null;
  const hits = ray.intersectObjects(objects.map(o => o.proxy), false);
  return hits.length ? objects.find(o => o.id === hits[0].object.userData.objectId) || null : null;
}

function endGrips() { grips.clear(); twoHand = null; }

function startGrip(hand, o, aim) {
  const world = o.proxy.getWorldPosition(new THREE.Vector3());
  const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(
    camera.getWorldDirection(new THREE.Vector3()).negate(), world);
  const hit = aim.ray.ray.intersectPlane(plane, new THREE.Vector3());
  const grab = hit ? toLocal(hit) : o.position.clone();
  grips.set(hand.id, {
    id: o.id, mode: tool === 'place' ? 'move' : tool, plane,
    offset: o.position.clone().sub(grab), start: { x: aim.x, y: aim.y },
    yaw: o.rotation.y, pitch: o.rotation.x, size: o.scale.x, moved: false,
  });
  select(o);
}

function moveGrip(hand, aim) {
  const g = grips.get(hand.id); if (!g) return;
  const o = objects.find(x => x.id === g.id); if (!o) { grips.delete(hand.id); return; }
  if (Math.abs(aim.x - g.start.x) > .01 || Math.abs(aim.y - g.start.y) > .01) g.moved = true;
  if (!g.moved) return;
  if (g.mode === 'move') {
    const hit = aim.ray.ray.intersectPlane(g.plane, new THREE.Vector3());
    if (!hit) return;
    o.position.copy(toLocal(hit).add(g.offset));
  } else if (g.mode === 'rotate') {
    o.rotation.y = g.yaw + (aim.x - g.start.x) * 4.2;
    o.rotation.x = clamp(g.pitch - (aim.y - g.start.y) * 3.1, -Math.PI / 2, Math.PI / 2);
  } else if (g.mode === 'scale') {
    const d = Math.hypot(aim.x - g.start.x, aim.y - g.start.y);
    const dir = (aim.x - g.start.x) - (aim.y - g.start.y) >= 0 ? 1 : -1;
    setScale(o, g.size * (1 + dir * d * 2.4));
    return;                                    // setScale já sincroniza
  }
  bound(o); sync(o);
}

/** Duas mãos pinçando o MESMO objeto: distância escala, o giro entre elas gira o objeto. */
function twoHandTransform(a, b, o) {
  const aspect = (viewport.width || 1200) / (viewport.height || 800);
  const d = Math.hypot(a.x - b.x, (a.y - b.y) * aspect);
  const angle = Math.atan2(b.y - a.y, b.x - a.x);
  if (!twoHand || twoHand.id !== o.id) {
    twoHand = { id: o.id, d, angle, size: o.scale.x, yaw: o.rotation.y };
    return;
  }
  if (d > 1e-4 && twoHand.d > 1e-4) setScale(o, twoHand.size * clamp(d / twoHand.d, .25, 4));
  setRotation(o, twoHand.yaw + (angle - twoHand.angle));
}

/**
 * Duas mãos pinçando de verdade: uma esquerda e uma direita. Se o detector não diz o lado (só o
 * id), valem duas mãos distintas pinçando — o acorde não pode depender de um campo opcional.
 */
export function twoHandsPinching(pinched) {
  if (pinched.length < 2) return false;
  const left = pinched.some(h => h.left === true);
  const right = pinched.some(h => h.left === false);
  if (left && right) return true;
  const labelled = pinched.some(h => typeof h.left === 'boolean');
  return !labelled && new Set(pinched.map(h => h.id)).size >= 2;
}

function updateHands(packet, now) {
  const hands = (packet.hands || []).filter(h => !packet.consumed?.has(h.id));
  const seen = new Set(hands.map(h => h.id));
  for (const id of pinchState.keys()) if (!seen.has(id)) { pinchState.delete(id); grips.delete(id); }

  const aims = new Map();
  for (const h of hands) aims.set(h.id, handRay(h, now));
  const pinched = hands.filter(h => h.pinching);

  // Acorde do menu: as duas mãos pinçando, sem estar transformando um objeto.
  let transforming = false;
  if (pinched.length >= 2 && selected()) {
    const [a, b] = pinched.slice(0, 2).map(h => aims.get(h.id));
    const o = selected();
    if (a && b && hitObject(a.ray) === o && hitObject(b.ray) === o) {
      twoHandTransform(a, b, o);
      transforming = true;
      for (const h of pinched.slice(0, 2)) grips.delete(h.id);
    }
  }
  if (!transforming) twoHand = null;

  for (const h of hands) {
    const aim = aims.get(h.id);
    const before = pinchState.get(h.id) || false;
    pinchState.set(h.id, !!h.pinching);
    const down = !!h.pinching && !before, up = !h.pinching && before;
    if (transforming && pinched.includes(h)) continue;      // a mão está no objeto com a outra
    if (down) {
      // Uma janela na frente é dona do gesto (painel, menu): o mundo não disputa.
      if (windowUnder(aim.x, aim.y)) { grips.delete(h.id); continue; }
      const o = hitObject(aim.ray);
      if (o) startGrip(h, o, aim);
      else if (tool === 'place') placeAt(aim);
      else select(null);
    } else if (up) {
      if (grips.has(h.id)) persist();
      grips.delete(h.id);
    } else if (h.pinching && grips.has(h.id)) moveGrip(h, aim);
  }

  const both = !transforming && twoHandsPinching(pinched);
  const state = chord.update(now, { left: both, right: both });
  paintRing(state.progress);
  if (state.opened) openMenu();
  if (state.closed && !menuOpen()) paintRing(0);
}

/** Coloca o objeto armado onde o raio encontra o chão (ou a 1,2 m, se o raio não desce até ele). */
function placeAt(aim) {
  const hit = aim.ray.ray.intersectPlane(GROUND, new THREE.Vector3());
  const world = hit && Math.hypot(hit.x, hit.z) <= LIMITS.maxRadius
    ? hit
    : aim.ray.ray.at(1.2, new THREE.Vector3());
  const at = toLocal(world);
  at.y = Math.max(at.y, 0);
  const size = placeKind === 'plate' ? 1.4 : .5;
  const o = addObject(placeKind, at.clone().setY(at.y + (placeKind === 'plate' ? .01 : size / 2)),
    { scale: [size, placeKind === 'plate' ? size : size, size],
      rotation: placeKind === 'plate' ? [-Math.PI / 2, 0, 0] : [0, 0, 0] });
  bound(o); sync(o); select(o); setTool('move'); persist();
  toast(o.name);
  return o;
}

on('phonehands', packet => { if (active) updateHands(packet, performance.now()); });
on('pinchcancel', () => { endGrips(); });

/* No preview do navegador (sem PhoneXR) o mundo responde ao ponteiro, como as janelas fazem. */
if (!native) {
  let preview = null;
  const aim = e => ({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight, ray: null });
  const withRay = e => {
    const a = aim(e);
    camera.updateMatrixWorld(true); contentRoot.updateMatrixWorld(true);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(a.x * 2 - 1, 1 - a.y * 2), camera);
    a.ray = ray; return a;
  };
  window.addEventListener('pointerdown', e => {
    if (!active || e.target.closest?.('button,input,.win-shell')) return;
    const a = withRay(e), o = hitObject(a.ray);
    if (o) { startGrip({ id: 'preview' }, o, a); preview = o; }
    else if (tool === 'place') placeAt(a);
    else select(null);
  });
  window.addEventListener('pointermove', e => {
    if (!active || !grips.has('preview')) return;
    moveGrip({ id: 'preview' }, withRay(e));
  });
  const release = () => { if (grips.has('preview')) { persist(); grips.delete('preview'); } preview = null; };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
}

on('recenter', () => { if (active) { dirty = true; send(); } });

/**
 * Reenvia a cena inteira para o renderer nativo. Um renderer recriado (superfície EGL nova) ou um
 * shell que voltou de background precisa da cena de novo, mesmo que nada tenha se movido — o mesmo
 * acordo do atlas com o invalidate().
 */
export function refreshGame() {
  if (!active) return;
  sent = null;
  for (const kind of new Set(objects.map(o => o.kind))) uploaded.delete(kind);
  for (const kind of new Set(objects.map(o => o.kind))) uploadMesh(kind);
  dirty = true; send();
}
