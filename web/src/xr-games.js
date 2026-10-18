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
import { settings, save, t, on, emit, toast, native, EYE } from './core.js';
import { open, close, wins, setDockHidden, setKeyboardHidden, keyboardShown, dockHiddenNow,
  focus as focusWindow, focusedWin, windowHitAt } from './windows.js';
import { cursor } from './hands.js';
import { TwoHandMenuChord } from './two-hand-chord.js';
import { twoHandsPinching } from './two-hand-chord.js';
import { icon } from './reference-icons.js';
import { windowBox } from './app-window-box.js';

const GAME_ID = 'nextvr-xr-game';
const MENU_ID = 'nextvr-xr-menu';
const LAUNCH_ID = 'nextvr-xr-launch';

/* ============================ estado (o espelho do JSON nativo) ============================ */

const state = {
  runtime: 'missing', runtimeVersion: -1, runtimeBundled: false, vrapi: 'missing', broker: false,
  summary: '', hosting: false, display: -1, problem: null, handFeed: 0, handMode: 'controllers',
  gameQuality: 'balanced', game: null, canvas: null,
};
let games = [], gamesProblem = null, gamesLoaded = false;   // jogos de headset instalados
let launchMenuPackage = null, launchAttempted = false;
const GAME_QUALITIES = Object.freeze({
  performance: { title: 'xrQualityPerformance', detail: 'xrQualityPerformanceSub' },
  balanced: { title: 'xrQualityBalanced', detail: 'xrQualityBalancedSub' },
  high: { title: 'xrQualityHigh', detail: 'xrQualityHighSub' },
});
const safeGameQuality = value => Object.prototype.hasOwnProperty.call(GAME_QUALITIES, value) ? value : 'balanced';

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
  if (state.hosting && state.game?.package) {
    closeLaunchMenu();
    enterGame(state.game);
  } else {
    exitGame();
    updateLaunchFeedback();
  }
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
  setXrHandMode(settings.xrInputMode);
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
export function launchXrGame(pkg, quality = settings.xrQuality) {
  if (!pkg || state.hosting) return;
  const selected = safeGameQuality(quality);
  settings.xrQuality = selected;
  save();
  command({ cmd: 'open', package: pkg, quality: selected });
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
  settings.xrInputMode = value;
  save();
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

function closeLaunchMenu() {
  const menu = wins.find(win => win.id === LAUNCH_ID);
  if (menu) close(menu);
  launchMenuPackage = null;
  launchAttempted = false;
}

function updateLaunchFeedback() {
  if (!launchAttempted) return;
  const menu = wins.find(win => win.id === LAUNCH_ID);
  const status = menu?.el.querySelector('[data-xr-launch-status]');
  const start = menu?.el.querySelector('[data-xr-start]');
  if (!status || !start) return;
  status.textContent = state.problem || t('xrLaunchHint');
  status.dataset.state = state.problem ? 'error' : '';
  start.disabled = false;
  start.innerHTML = `${icon('play')}<span>${t('xrLaunchButton')}</span>`;
  launchAttempted = false;
}

/** Opens a pre-game lobby: quality and hand input are saved before the native game is started. */
export function openXrGameMenu(pkg) {
  if (state.hosting) { restoreXrGame(); return; }
  const game = games.find(item => item.package === pkg);
  if (!game) { toast(t('libGamesEmpty')); return; }
  closeLaunchMenu();
  launchMenuPackage = pkg;
  const selectedQuality = safeGameQuality(settings.xrQuality);
  settings.xrQuality = selectedQuality;
  const selectedMode = state.handMode === 'hands' ? 'hands' : 'controllers';
  const info = [game.headset, game.describe].filter(Boolean).join(' · ');
  const badge = game.hostable ? t('xrLaunchAvailable') : t('xrNotHostable');
  const statusText = !game.hostable ? t('xrNotHostable')
    : state.runtime === 'ready' ? t('xrLaunchHint') : (state.summary || t('xrSummaryMissing'));
  const qualityChoices = [
    ['performance', 'zap'], ['balanced', 'gauge'], ['high', 'eye'],
  ].map(([id, glyph]) => {
    const option = GAME_QUALITIES[id];
    return `<button class="xr-quality-option" type="button" data-xr-quality="${id}"
        aria-pressed="${selectedQuality === id}" aria-label="${escape(t(option.title))}: ${escape(t(option.detail))}">
      ${icon(glyph, 'xr-quality-mark')}<strong>${escape(t(option.title))}</strong>
      <small>${escape(t(option.detail))}</small></button>`;
  }).join('');
  const modeChoices = [
    ['controllers', 'controller', 'xrModeControllers', 'xrModeControllersSub'],
    ['hands', 'user', 'xrModeHands', 'xrModeHandsSub'],
  ].map(([id, glyph, title, detail]) => `<button class="xr-mode-option" type="button" data-xr-mode="${id}"
      aria-pressed="${selectedMode === id}">
      <span class="xr-mode-icon">${icon(glyph)}</span><span><strong>${escape(t(title))}</strong>
      <small>${escape(t(detail))}</small></span></button>`).join('');

  const body = document.createElement('div');
  body.className = 'xr-launch';
  body.innerHTML = `<div class="xr-launch-head">
      <span class="xr-launch-mark">${icon('headset')}</span>
      <div class="xr-launch-heading"><span class="xr-launch-kicker">${escape(t('xrLaunchBadge'))}</span>
        <h2 class="xr-launch-title">${escape(game.label || game.package)}</h2>
        <div class="xr-launch-description">${escape(t('xrLaunchDescription'))}</div>
        <div class="xr-launch-meta">${escape(info || game.package)}</div></div>
      <span class="xr-launch-badge${game.hostable ? '' : ' external'}">${escape(badge)}</span>
    </div>
    <div class="xr-launch-grid">
      <section class="xr-launch-section" aria-labelledby="xr-launch-quality-title">
        <h3 class="xr-launch-section-head" id="xr-launch-quality-title">${escape(t('xrLaunchQuality'))}</h3>
        <p class="xr-launch-section-sub">${escape(t('xrLaunchQualitySub'))}</p>
        <div class="xr-quality-grid" role="group" aria-label="${escape(t('xrLaunchQuality'))}">${qualityChoices}</div>
      </section>
      <section class="xr-launch-section" aria-labelledby="xr-launch-input-title">
        <h3 class="xr-launch-section-head" id="xr-launch-input-title">${escape(t('xrLaunchInput'))}</h3>
        <p class="xr-launch-section-sub">${escape(t('xrLaunchInputSub'))}</p>
        <div class="xr-mode-list" role="group" aria-label="${escape(t('xrLaunchInput'))}">${modeChoices}</div>
      </section>
    </div>
    <div class="xr-launch-bottom"><div class="xr-launch-status" data-xr-launch-status role="status" aria-live="polite">${escape(statusText)}</div>
      <div class="xr-launch-actions">
        <button class="xr-launch-back" type="button" data-xr-action="back">${escape(t('xrLaunchBack'))}</button>
        <button class="xr-launch-start" type="button" data-xr-start>${icon('play')}<span>${escape(t('xrLaunchButton'))}</span></button>
      </div></div>`;

  body.addEventListener('click', event => {
    const quality = event.target.closest('[data-xr-quality]');
    if (quality) {
      settings.xrQuality = safeGameQuality(quality.dataset.xrQuality);
      save();
      body.querySelectorAll('[data-xr-quality]').forEach(button =>
        button.setAttribute('aria-pressed', String(button === quality)));
      return;
    }
    const mode = event.target.closest('[data-xr-mode]');
    if (mode) {
      setXrHandMode(mode.dataset.xrMode);
      body.querySelectorAll('[data-xr-mode]').forEach(button =>
        button.setAttribute('aria-pressed', String(button === mode)));
      return;
    }
    const action = event.target.closest('[data-xr-action]');
    if (action?.dataset.xrAction === 'back') { closeLaunchMenu(); return; }
    if (!event.target.closest('[data-xr-start]') || launchAttempted) return;
    launchAttempted = true;
    const status = body.querySelector('[data-xr-launch-status]');
    const start = body.querySelector('[data-xr-start]');
    status.textContent = t('xrLaunchStarting');
    status.dataset.state = 'pending';
    start.disabled = true;
    start.innerHTML = `${icon('play')}<span>${t('xrLaunchStarting')}</span>`;
    launchXrGame(launchMenuPackage, settings.xrQuality);
  });

  const win = open({ id: LAUNCH_ID, title: t('xrLaunchTitle'), node: body,
    w: 900, h: 640, free: true, at: { x: 0, y: EYE, z: -.72 } });
  win?.setCurve(0);
  return win;
}

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
  if (active) return;
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
