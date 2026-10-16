// PhoneXR games in NextVR: the shell half of hosting an OpenXR/VrApi headset game inside this
// app's world. The native half lives in nextvr-android/src/main/java/com/nextvr/app/xr/ and the
// two sides talk through one JSON state object, the same shape the Android app windows use.
//
// A headset game is an ordinary Android app that draws through an OpenXR runtime. When a game is
// opened, the native side:
//   * checks the runtime is installed and the game can find it by itself (hostable);
//   * starts the activity on a public virtual display whose output is a texture slot the VR
//     compositor already samples (surface id "xr:<package>");
//   * starts the MediaPipe hand feed → XrHandBridge → the runtime's loopback UDP protocol, so the
//     game receives our hands as two controllers.
// This module reacts to the state push: it hides the workspace with the state preserved, shows the
// game's picture in a window of the canvas' shape, and keeps our menus over it. The runtime
// presents side by side and does no lens correction — atlas.js hands the compositor the LEFT half
// of the canvas in the panel's `uv` and the RIGHT half in `uvR`, and SpatialRenderer picks between
// them by each eye's viewport, so one stereo frame with one Cardboard warp at the end shows the
// game in real 3D, with our windows maintained over it by the same depth they always had.
//
// Pinch on our windows stays pinch-on-our-windows (game menu, settings). Pinch anywhere else is
// the game's trigger: the bridge owns the gesture straight from tracker frames, so the shell only
// tells the native side when the cursor sits on one of OUR windows while a session runs
// ("hands-ui"), and the bridge keeps that pinch from pressing buttons instead of firing into menus.
import { t, on, emit, toast, native, EYE } from './core.js';
import { open, close, wins, setDockHidden, setKeyboardHidden, keyboardShown, dockHiddenNow,
  focus as focusWindow, focusedWin, windowHitAt } from './windows.js';
import { cursor } from './hands.js';
import { TwoHandMenuChord } from './two-hand-chord.js';
import { twoHandsPinching, sandboxActive } from './game.js';
import { icon } from './reference-icons.js';
import { windowBox } from './app-window-box.js';

const GAME_ID = 'nextvr-xr-game';
const MENU_ID = 'nextvr-xr-menu';

/* ============================ estado (o espelho do JSON nativo) ============================ */

const state = {
  runtime: 'missing', runtimeVersion: -1, runtimeBundled: false, vrapi: 'missing', broker: false,
  summary: '', hosting: false, display: -1, problem: null, handFeed: 0, handMode: 'controllers',
  game: null, canvas: null,
};
let games = [], gamesProblem = null, gamesLoaded = false;   // jogos de headset instalados

export const xrState = () => state;
export const xrGames = () => games;
export const xrHosting = () => state.hosting;
export const xrRuntimeReady = () => state.runtime === 'ready';
export const xrHandModeOf = () => state.handMode;
export const xrGamePkg = () => state.game?.package || null;
export const xrLibraryLoaded = () => gamesLoaded;

/** Tudo que a shell pede ao lado nativo passa por este canal só (como os apps Android). */
function command(payload) {
  try { window.NativeXR?.xrCommand?.(JSON.stringify(payload)); }
  catch { /* o lado nativo publica o problema de volta; a shell não o duplica. */ }
}

/* ============================ entrada pela ponte nativa ============================ */

/** Chamado por XrGameController com o estado inteiro da sessão (string JSON). */
export function applyState(json) {
  let next;
  try { next = JSON.parse(json); } catch { return; }
  if (!next || typeof next !== 'object') return;
  Object.assign(state, next);
  uiBlocked = null;
  if (state.hosting && state.game?.package) enterGame(state.game);
  else exitGame();
  emit('xr', { ...state, games });
}
/** Chamado por XrGameController com a lista de jogos de headset instalados (string JSON). */
export function applyLibrary(json) {
  let next;
  try { next = JSON.parse(json); } catch { next = null; }
  games = Array.isArray(next?.games) ? next.games : [];
  gamesProblem = next?.problem || null;
  gamesLoaded = true;
  emit('xr', { ...state, games });
}

/**
 * Installs the bridge hooks and asks the running session for its state. Called once from the shell
 * boot, next to the Android apps: a session that existed before (GL restart, page reload, resume)
 * has to put the game mode back, and the game list arrives asynchronously after that.
 */
export function installXrGames() {
  if (!native || window.nextvrXr) return;
  window.nextvrXr = applyState;
  window.nextvrXrLibrary = applyLibrary;
  try { applyState(window.NativeXR.xrState?.() || '{}'); } catch { /*_native cria após this page */ }
  askXrLibrary();
  on('lang', () => { askXrLibrary(); emit('xr', { ...state, games }); });
}

/** Asks the native side for the installed headset games; the answer is published asynchronously. */
export function askXrLibrary() { command({ cmd: 'library' }); }

/** Force a re-scan (runtime installed/uninstalled, games added): the state follows on its own. */
export function refreshXrLibrary() {
  gamesLoaded = false;
  command({ cmd: 'refresh' });
  askXrLibrary();
}

/* ============================ comandos que a shell pede ============================ */

/** Abre um jogo de headset: o lado nativo decide (runtime, hostable, Shizuku) e publica o estado. */
export function launchXrGame(pkg) {
  if (!pkg || state.hosting || sandboxActive()) return;
  command({ cmd: 'open', package: pkg });
}
export function closeXrGame() { if (state.hosting) command({ cmd: 'close' }); }
export function minimizeXrGame() { if (state.hosting) command({ cmd: 'minimize' }); }
export function restoreXrGame() { if (state.hosting) command({ cmd: 'restore' }); }
export function installXrRuntime() {
  command({ cmd: 'runtime' });
}
/** Modo de entrada do jogo (o bridge aplica no vivo; o lado nativo guarda até esta página fechar). */
export function setXrHandMode(mode) {
  const value = mode === 'hands' ? 'hands' : 'controllers';
  try { window.NativeXR?.xrHandMode?.(value); } catch { /* publicado de volta no estado */ }
  state.handMode = value;
  emit('xr', { ...state, games });
}
export function xrSelfTest() { command({ cmd: 'selftest' }); }

/* ============================ itens e arquivo da biblioteca ============================ */

/** The classified games, as library items: one kind of tile the Applications menu knows. */
export function xrLibraryItems() {
  return games.map(g => ({ kind: 'xr', id: 'xr:' + g.package, pkg: g.package,
    name: g.label || g.package, label: g.label || g.package, game: g }));
}
export function xrTileHtml(item) {
  const g = item.game;
  const mark = `<span class="nm">${escape(`${(g.label || g.package).slice(0, 2)}`)}</span>`;
  const running = xrGamePkg() === g.package
    ? `<span class="lib-open">${escape(t('appOpen'))}</span>` : '';
  const hostable = g.hostable ? ''
    : `<span class="lib-sys" title="${escape(g.describe || t('xrNotHostable'))}">✕</span>`;
  return `<button class="lib-tile game" data-xr="${escape(g.package)}" aria-label="${escape(g.label || g.package)}">`
    + `<span class="lib-cover"><span class="lib-brand">${mark}</span>`
    + `<span class="lib-src" title="${escape(t('xrTitle'))}">${icon('controller')}</span>`
    + hostable + running + `<span class="lib-vr">XR</span></span>`
    + `<span class="lib-label">${escape(g.label || g.package)}</span></button>`;
}
const escape = value => String(value == null ? '' : value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * The one PhoneXR row the library shows, and only while headset games exist and the runtime is not
 * ready: it says why these games cannot open and offers the two actions there are — install the
 * bundled runtime and verify the whole chain on the device (self test). With no headset games
 * installed the row has nothing to explain; the library of a phone without them looks unchanged.
 */
export function phoneXrNotice() {
  if (xrRuntimeReady() || !gamesLoaded || !games.length) return null;
  const wrap = document.createElement('div');
  wrap.className = 'lib-note az-row';
  const dot = document.createElement('span');
  dot.className = 'az-dot';
  dot.dataset.state = state.runtime;
  const text = document.createElement('span');
  text.className = 'az-text';
  text.textContent = state.runtimeBundled ? t('xrMissing') : t('xrMissingNoApk');
  const why = document.createElement('small');
  why.textContent = state.summary || state.problem || t('xrSummaryMissing');
  text.appendChild(why);
  wrap.append(dot, text);
  if (state.runtimeBundled) {
    const button = document.createElement('button');
    button.className = 'az-btn';
    button.textContent = t('xrInstall');
    button.onclick = () => { installXrRuntime(); toast(t('xrInstalling')); };
    wrap.appendChild(button);
  }
  const test = document.createElement('button');
  test.className = 'az-btn ghost';
  test.textContent = t('xrSelfTest');
  test.onclick = () => xrSelfTest();
  wrap.appendChild(test);
  return wrap;
}

/* ============================ o modo de jogo (uma sessão por vez) ============================ */

let active = false, snapshot = null;

function enterGame(game) {
  if (active || sandboxActive()) return;
  snapshot = {
    windows: wins.map(w => ({ win: w, hidden: w.hidden })),
    dockHidden: dockHiddenNow(),
    keyboard: keyboardShown(),
    focus: focusedWin()?.id || null,
  };
  for (const w of wins) w.setHidden(true);
  setKeyboardHidden(true);
  setDockHidden(true);
  document.documentElement.classList.add('game-on', 'xr-on');
  active = true;
  chord.reset(); ringPaint(0);
  // A janela do jogo: o corpo é o de uma janela de app Android — barra de título e gelo. A forma
  // (canvas da sessão — a tela do aparelho em paisagem, cada metade do estéreo vista por um olho)
  // por padrão da tela do aparelho se desconhecer.
  const body = document.createElement('div');
  body.className = 'app-native-host';
  const bar = document.createElement('div');
  bar.className = 'app-bar';
  const badge = document.createElement('span');
  badge.className = 'app-badge';
  badge.textContent = t('xrBadge');
  const surface = document.createElement('div');
  surface.className = 'app-surface';
  surface.dataset.nativeXr = game.package;
  const canvas = state.canvas || { w: 1920, h: 1080 };
  surface.dataset.aspect = String((canvas.w / canvas.h) || (16 / 9));
  const spacer = document.createElement('span');
  spacer.className = 'app-bar-spacer';
  const minimize = document.createElement('button');
  minimize.className = 'app-key';
  minimize.title = t('appMinimize'); minimize.setAttribute('aria-label', t('appMinimize'));
  minimize.innerHTML = icon('chevronDown'); minimize.onclick = () => minimizeXrGame();
  const closeBtn = document.createElement('button');
  closeBtn.className = 'app-key';
  closeBtn.title = t('close'); closeBtn.setAttribute('aria-label', t('close'));
  closeBtn.innerHTML = icon('x'); closeBtn.onclick = () => closeXrGame();
  bar.append(badge, spacer, minimize, closeBtn);
  body.append(bar, surface);
  const box = windowBox({ shape: 'landscape', display: { w: canvas.w, h: canvas.h } });
  open({ id: GAME_ID, title: game.label || game.package, node: body, w: box.w, h: box.h });
}
/**
 * Sai do modo: o jogo é encerrado no lado nativo (a própria saída publicou hosting=false), e o
 * workspace volta exatamente como estava, como o mundo 3D devolve. Janelas abertas DURANTE o modo
 * (configurações) saem de cena também.
 */
function exitGame() {
  if (!active) return;
  active = false;
  uiBlocked = null;
  for (const w of [...wins]) if (w.id === GAME_ID || w.id === MENU_ID) close(w);
  document.documentElement.classList.remove('game-on', 'xr-on');
  const snap = snapshot; snapshot = null;
  if (snap) {
    const known = new Set(snap.windows.map(x => x.win));
    for (const w of [...wins]) if (!known.has(w) && !w.onboarding) close(w);
    setDockHidden(snap.dockHidden);
    for (const { win, hidden } of snap.windows) if (wins.includes(win)) win.setHidden(hidden);
    if (snap.keyboard) setKeyboardHidden(false);
    const back = wins.find(w => w.id === snap.focus);
    if (back) focusWindow(back);
  }
  chord.reset(); ringPaint(0);
}

/**
 * The user pressed ✕ on the game window (or it otherwise went away): the display, the surface and
 * the feed belong to the session on the native side, so the shell only asks for the close. The
 * state push brings hosting=false, and exitGame restores the workspace exactly as it was.
 */
on('wins', () => {
  if (!active || !window.nextvrXr) return;
  if (wins.some(w => w.id === GAME_ID)) return;
  closeXrGame();
});

/* ============================ menu do jogo (mesma cara do mundo 3D) ============================ */

const chord = new TwoHandMenuChord();
export const xrMenuOpen = () => active && wins.some(w => w.id === MENU_ID);
function openMenu() {
  if (!active || wins.some(w => w.id === MENU_ID) || !state.game) return;
  const game = state.game;
  const body = document.createElement('div');
  body.className = 'game-menu';
  body.innerHTML = `
    <div class="gm-t">${escape(game.label || game.package)}</div>
    <p class="gm-sub">${escape(t('xrMenuHint'))}</p>
    <button class="gm-btn" data-act="continue">${t('game.continue')}</button>
    <button class="gm-btn" data-act="settings">${icon('settings')}<span>${t('game.settings')}</span></button>
    <button class="gm-btn danger" data-act="exit">${t('game.exit')}</button>`;
  body.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    closeMenu();
    if (b.dataset.act === 'exit') closeXrGame();
    else if (b.dataset.act === 'settings') emit('game:settings');
  });
  const win = open({ id: MENU_ID, title: t('game.menu'), node: body, w: 560, h: 470,
    free: true, at: { x: 0, y: EYE, z: -.55 } });
  win?.setCurve(0);                       // PLANO: o menu nunca é curvo
}

function closeMenu() { const w = wins.find(x => x.id === MENU_ID); if (w) close(w); }

/* Anel de espera do acorde: o MESMO elemento do mundo 3D (os dois modos nunca coexistem). */
function ringPaint(progress) {
  const node = document.getElementById('gameRing'); if (!node) return;
  if (!(progress > 0)) { node.hidden = true; return; }
  node.hidden = false;
  node.style.background =
    `conic-gradient(var(--accent) ${Math.round(progress * 360)}deg, rgba(255,255,255,.16) 0deg)`;
}

/* ============================ entrada do jogo: a pinça e as janelas ============================ */

// O cursor apontando para UMA das nossas janelas (menu, config, dock) não é gatilho: a pinça ali
// pertence à janela. Apontando para o jogo (fora de janelas), não manda nada — o bridge é o dono
// do gesto, do quadro de rastreamento ao pacote UDP do runtime.
let uiBlocked = null;
function flushHandUi() {
  const hit = active ? windowHitAt(cursor.x, cursor.y) : null;
  const blocked = !!hit && hit.win.id !== GAME_ID && !hit.win.onboarding;
  if (blocked === uiBlocked) return;
  uiBlocked = blocked;
  command({ cmd: 'hands-ui', blocked });
}

on('phonehands', packet => {
  if (!active) return;
  flushHandUi();
  const pinching = (packet.hands || []).filter(h => h.pinching);
  const both = twoHandsPinching(pinching);
  const result = chord.update(performance.now(), { left: both, right: both });
  ringPaint(result.progress);
  if (result.opened) openMenu();
  if (result.closed && !xrMenuOpen()) ringPaint(0);
});
