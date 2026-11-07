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
import { twoHandsPinching } from './two-hand-chord.js';
import { icon } from './reference-icons.js';
import { windowBox } from './app-window-box.js';
import { androidApps } from './android-apps.js';

const GAME_ID = 'nextvr-xr-game';
const MENU_ID = 'nextvr-xr-menu';

/* ============================ estado (o espelho do JSON nativo) ============================ */

const state = {
  runtime: 'missing', runtimeVersion: -1, runtimeBundled: false, vrapi: 'missing', broker: false,
  summary: '', hosting: false, display: -1, problem: null, handFeed: 0, handMode: 'controllers',
  game: null, canvas: null, external: false, externalGame: null, externalPackage: null,
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
  const wasExternal = state.externalPackage;
  Object.assign(state, next);
  uiBlocked = null;
  if (state.hosting && state.game?.package) enterGame(state.game);
  else exitGame();
  // O jogo foi entregue à tela do aparelho (Cardboard): a shell continua aqui, com o workspace
  // intacto, e diz o que está acontecendo em vez de deixar o usuário achando que nada abriu.
  if (state.external && state.externalPackage && wasExternal !== state.externalPackage) {
    toast(t('xrFullScreenOpened').replace('{game}', state.externalGame || state.externalPackage));
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
  askXrLibrary();
  on('lang', () => { askXrLibrary(); emit('xr', { ...state, games }); });
}

/** Quando a lista foi pedida pela última vez (ver [ensureXrLibrary]). */
let lastAsk = 0;

/** Asks the native side for the installed headset games; the answer is published asynchronously. */
export function askXrLibrary() { lastAsk = Date.now(); command({ cmd: 'library' }); }

/** Force a re-scan (runtime installed/uninstalled, games added): the state follows on its own. */
export function refreshXrLibrary() {
  gamesLoaded = false;
  lastAsk = 0;
  command({ cmd: 'refresh' });
  askXrLibrary();
}

/**
 * Pede a lista de novo, sem pressa: é o que a biblioteca chama toda vez que pinta.
 *
 * A lista vem do lado nativo, que lê o APK de cada jogo instalado — caro, feito fora da linha de
 * execução principal. Então ela NÃO é pedida a cada pintura: uma vez, e depois só quando passou tempo
 * suficiente para um app novo ter entrado (instalar um jogo com o NextVR aberto é o caso normal, e
 * antes disso a tile simplesmente não aparecia até o app ser reiniciado — foi assim que o Táxi
 * "sumiu").
 */
const LIBRARY_FRESH_MS = 15000;
const LIBRARY_MIN_GAP_MS = 2500;
export function ensureXrLibrary() {
  const now = Date.now();
  if (!gamesLoaded) { if (now - lastAsk >= LIBRARY_MIN_GAP_MS) askXrLibrary(); return; }
  if (now - lastAsk >= LIBRARY_FRESH_MS) askXrLibrary();
}

/* ============================ comandos que a shell pede ============================ */

/** Abre um jogo de headset: o lado nativo decide (runtime, hostable, Shizuku) e publica o estado. */
export function launchXrGame(pkg) {
  if (!pkg || state.hosting) return;
  command({ cmd: 'open', package: pkg });
}
export function closeXrGame() { if (state.hosting) command({ cmd: 'close' }); }
/**
 * Entrega a tela do celular a um app que desenha o próprio estéreo (Cardboard/VR Box).
 *
 * `startActivity` do ícone do app, sem privilégio, sem runtime e sem display — o mesmo
 * `getLaunchIntentForPackage` da gaveta. Quem manda o pedido é o lado nativo do PhoneXR, que tem o
 * `PackageManager` na mão e responde de volta quando não dá (`report` → aviso na tela). O caminho das
 * janelas de app (`appsCommand`) depende do serviço de displays, que pode não existir; este não.
 */
export function launchAppFullScreen(pkg) {
  if (!pkg) return false;
  const payload = JSON.stringify({ cmd: 'phone', pkg });
  try {
    if (window.NativeXR?.xrCommand) { window.NativeXR.xrCommand(payload); return true; }
    if (window.NativeXR?.appsCommand) { window.NativeXR.appsCommand(payload); return true; }
  } catch { return false; }
  return false;
}
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

/* ============================ Táxi Driver (Cardboard) ============================ */

/**
 * O jogo que o usuário pediu pelo nome, com o pacote do APK dele.
 *
 * Não é um app do NextVR: é um APK instalado no telefone, feito em Unity + Cardboard. Por isso ele
 * não tem código aqui — o que existe é o atalho para abri-lo (Loja, menu principal e biblioteca) e o
 * logo, para a tile não ser só duas iniciais.
 */
export const TAXI_PACKAGE = 'com.manerai.taxidriver.cardboard';
export const TAXI_LABEL = 'Taxi Driver VR';
export const TAXI_LOGO = './icons/taxi-driver-logo.jpg';

/** Pacotes conhecidos que ganham capa na tile da biblioteca (o resto cai nas iniciais). */
const XR_COVERS = Object.freeze({ [TAXI_PACKAGE]: TAXI_LOGO });

/**
 * O pacote do Táxi instalado neste telefone, ou null.
 *
 * São duas fontes porque são duas perguntas diferentes: a lista de jogos de headset (que o lado
 * nativo monta lendo os APKs) diz que ele foi classificado, e a lista de apps do Android diz que ele
 * está instalado mesmo que a classificação não tenha rodado ainda.
 */
export function taxiPackage() {
  if (games.some(g => g.package === TAXI_PACKAGE)) return TAXI_PACKAGE;
  const apps = androidApps() || [];
  if (apps.some(a => a.pkg === TAXI_PACKAGE)) return TAXI_PACKAGE;
  // APK renomeado/atualizado: aceita qualquer pacote que se chame de táxi.
  const guess = apps.find(a => /taxi.?driver/i.test(a.pkg));
  if (guess) return guess.pkg;
  /*
   * Nenhuma lista carregada ainda NÃO quer dizer "não instalado": no começo da sessão as duas chegam
   * depois (o lado nativo lê os APKs). Devolver `null` aqui era o que fazia o botão dizer "não
   * instalado" e não abrir nada com o jogo instalado. Então, sem informação, entrega-se o pacote: quem
   * decide é o `PackageManager`, no lado nativo — se não existir, ele avisa na tela.
   */
  if (!gamesLoaded && apps.length === 0) return TAXI_PACKAGE;
  return null;
}

/** Whether the game is installed, so a tile/store card can say so instead of pretending. */
export function taxiInstalled() {
  return !!taxiPackage();
}

/**
 * Abre o Táxi Driver no VR Box, do jeito que ele funciona: tela inteira.
 *
 * Classificado pelo lado nativo → `open` (ele decide: jogo de tela cheia não é hospedado, recebe o
 * `startActivity` do próprio ícone). Não classificado mas instalado → o mesmo `startActivity` direto.
 * Não instalado → false, e quem chamou diz ao usuário em vez de abrir nada.
 */
export function openTaxiDriver() {
  const pkg = taxiPackage();
  if (!pkg) return false;
  // Sempre o caminho direto do `startActivity`, e não o `open` da sessão: hospedar um jogo de
  // headset depende de runtime, display e serviço; um jogo Cardboard não precisa de nada disso e não
  // pode falhar por causa de peça que ele não usa.
  return launchAppFullScreen(pkg);
}

/* ============================ itens e arquivo da biblioteca ============================ */

/** The classified games, as library items: one kind of tile the Applications menu knows. */
export function xrLibraryItems() {
  return games.map(g => ({ kind: 'xr', id: 'xr:' + g.package, pkg: g.package,
    name: g.label || g.package, label: g.label || g.package, game: g }));
}
export function xrTileHtml(item) {
  const g = item.game;
  // Jogo conhecido ganha a capa dele; o resto cai nas duas iniciais do nome.
  const cover = XR_COVERS[g.package];
  const mark = cover
    ? `<img src="${escape(cover)}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`
    : `<span class="nm">${escape(`${(g.label || g.package).slice(0, 2)}`)}</span>`;
  const running = xrGamePkg() === g.package
    ? `<span class="lib-open">${escape(t('appOpen'))}</span>` : '';
  // Um jogo de tela cheia (Cardboard/Daydream) abre — só não dentro do nosso frame. Marcar ✕ nele
  // sería dizer que ele não funciona, e ele funciona: o que muda é quem entrega a imagem ao VR Box.
  const fullScreen = g.fullScreen === true || g.kind === 'cardboard' || g.kind === 'daydream';
  const hostable = g.hostable || fullScreen ? ''
    : `<span class="lib-sys" title="${escape(g.describe || t('xrNotHostable'))}">✕</span>`;
  const boxBadge = fullScreen
    ? `<span class="lib-vr" title="${escape(t('xrCardboardBadge'))}">VR BOX</span>` : `<span class="lib-vr">XR</span>`;
  return `<button class="lib-tile game" data-xr="${escape(g.package)}" aria-label="${escape(g.label || g.package)}">`
    + `<span class="lib-cover"><span class="lib-brand">${mark}</span>`
    + `<span class="lib-src" title="${escape(t('xrTitle'))}">${icon('controller')}</span>`
    + hostable + running + boxBadge + `</span>`
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
