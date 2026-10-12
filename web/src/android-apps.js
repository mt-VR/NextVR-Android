// Android app windows: the installed apps, their real windows, and the two architectures behind
// them. This module owns the shell half of the feature; the native half lives in
// nextvr-android/src/main/java/com/nextvr/app/apps/ and they talk through one JSON state object.
//
// Two content types, never confused:
//  * an *HTML/web* window is a page rendered by the shell's own WebView (webWindow in apps.js);
//  * an *Android app* window hosts a real app on a display of its own (or mirrors the phone) and
//    receives real input events. Its body element carries data-native-app and no DOM inside is
//    interactive: everything the user does there is forwarded as touches/keys to the app.
import { t, toast, on, emit, native } from './core.js';
import { open, close, wins, keyboard } from './windows.js';
import { icon } from './reference-icons.js';
import { fitDisplay, appHostPoint } from './display-fit.js';

export const MIRROR = 'nextvr.screen';
const SYNC_MS = 400;
const CAPACITY = 3;
// Default window body: windows.js opens every app window at 1040x660. The window's own 62 px bar is
// outside the body, and the app's bar is another 52 px inside it, so the surface the app's display is
// drawn into measures 1040x546. Sending *that* size means the display is created in exactly the
// shape it is shown in: the first frames are neither letterboxed nor resized afterwards.
const DEFAULT_W = 1040;
const DEFAULT_H = 546;

const state = {
  sessions: [],
  shizuku: { state: 'unknown', detail: '', ready: false, ask: false, needsApp: true, caps: null },
  input: { shizuku: false, accessibility: false, singleAppCapture: false },
  capacity: CAPACITY, mirror: MIRROR, sdk: 0, recents: [],
};
const library = { apps: [], shown: 0, total: 0, query: '', showSystem: false, loaded: false };
const live = new Map();          // package -> { win, surface, status, bar }
const suppress = new Set();      // windows we closed ourselves: their close is not a user action
let syncTimer = 0, lastSync = '';

export const appState = () => state;
export const appLibrary = () => library;
export const sessionOf = pkg => state.sessions.find(s => s.pkg === pkg) || null;
export const runningApps = () => state.sessions.filter(s => s.alive);
export const appWindowId = pkg => 'app-' + pkg.replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 48);

/** Everything the shell asks the native side for goes through this one command channel. */
function command(payload) {
  try { window.NativeXR?.appsCommand?.(JSON.stringify(payload)); }
  catch (error) { toast(t('appCommandFailed')); }
}

// ---------------------------------------------------------------- state from the native side

/** Called by NextVrActivity with the whole app-window state as a JSON string. */
export function applyState(json) {
  let next;
  try { next = JSON.parse(json); } catch { return; }
  if (!next || typeof next !== 'object') return;
  state.sessions = Array.isArray(next.sessions) ? next.sessions : [];
  state.shizuku = next.shizuku || state.shizuku;
  state.input = next.input || state.input;
  state.capacity = next.capacity || CAPACITY;
  state.recents = Array.isArray(next.recents) ? next.recents : [];
  state.sdk = next.sdk || state.sdk;
  reconcile();
  emit('appsState');
}

function reconcile() {
  const wanted = new Set();
  for (const s of state.sessions) {
    if (s.state === 'stopped') continue;
    // A minimized window is alive but not on screen: the dock and the library keep offering it.
    if (s.state === 'suspended') { closeWindow(s.pkg, true); continue; }
    wanted.add(s.pkg);
    if (!live.has(s.pkg)) createWindow(s); else updateWindow(s);
  }
  for (const pkg of [...live.keys()]) if (!wanted.has(pkg)) closeWindow(pkg, true);
  scheduleSync(true);
}

function createWindow(session) {
  const body = document.createElement('div');
  body.className = 'app-window';

  const bar = document.createElement('div');
  bar.className = 'app-bar';
  const badge = document.createElement('span');
  badge.className = 'app-badge';
  badge.textContent = session.mode === 'mirror' ? t('appMirrorBadge') : t('appWindowBadge');
  badge.classList.toggle('mirror', session.mode === 'mirror');
  const spacer = document.createElement('span');
  spacer.className = 'app-bar-spacer';
  const key = (name, label, glyph) => {
    const b = document.createElement('button');
    b.className = 'app-key';
    b.title = label; b.setAttribute('aria-label', label);
    b.innerHTML = icon(glyph);
    b.onclick = () => command({ cmd: 'key', pkg: session.pkg, key: name });
    return b;
  };
  const kb = document.createElement('button');
  kb.className = 'app-key';
  kb.title = t('appKeyboard'); kb.dataset.act = 'keys';
  kb.innerHTML = icon('keyboard');
  kb.onclick = () => focusAppKeyboard(session.pkg);
  bar.append(badge, spacer, key('back', t('appBack'), 'back'), key('home', t('appHome'), 'top'),
    key('recents', t('appRecents'), 'appGrid'), kb);

  const surface = document.createElement('div');
  surface.className = 'app-surface';
  surface.dataset.nativeApp = session.pkg;
  surface.dataset.aspect = String((session.display && session.display.aspect) || 16 / 9);

  const status = document.createElement('div');
  status.className = 'app-state';

  // The state overlay belongs to the picture area: the app's own bar stays readable behind it and
  // the window's bar (which owns ✕) is never covered.
  body.append(bar, surface);
  surface.append(status);
  const win = open({ id: appWindowId(session.pkg), title: session.title, node: body });
  live.set(session.pkg, { win, surface, status, badge });
  updateWindow(session);
}

function updateWindow(session) {
  const entry = live.get(session.pkg);
  if (!entry) return;
  const display = session.display || {};
  // The compositor reads this attribute every frame: it sizes the texture slot and fits the picture
  // inside the window body without stretching it, and the touch is normalized against that same
  // fitted rectangle. The crop it computes is published back on `data-uv` (see atlas.js).
  entry.surface.dataset.aspect = String(display.aspect || 16 / 9);
  const states = {
    requested: t('appStarting'), creating: t('appStarting'), launching: t('appStarting'),
    running: '', failed: session.error ? sessionError(session) : t('appFailed'),
  };
  const text = states[session.state] ?? '';
  entry.status.hidden = !text;
  entry.status.dataset.state = session.state;
  if (text) entry.status.textContent = text;
  entry.win.el.classList.toggle('app-native', true);
  entry.win.el.classList.toggle('app-failed', session.state === 'failed');
}

function sessionError(session) {
  const known = {
    shizuku_unavailable: t('appNeedShizuku'),
    display_refused: t('appDisplayRefused'),
    display_failed: t('appDisplayFailed'),
    no_launcher_activity: t('appNoLauncher'),
    consent_denied: t('appConsentDenied'),
    mirror_stopped: t('appMirrorStopped'),
    mirror_failed: t('appMirrorFailed'),
    mirror_refused: t('appMirrorFailed'),
    projection_failed: t('appMirrorFailed'),
    app_not_running: t('appStopped'),
  };
  const code = session.error || '';
  // "surface_failed:<reason>" comes from the GL side: the window's texture could not be created.
  if (code.startsWith('surface_failed')) return t('appSurfaceFailed');
  return known[code] || `${t('appFailed')}: ${code}`;
}

function closeWindow(pkg, silent) {
  const entry = live.get(pkg);
  if (!entry) return;
  live.delete(pkg);
  if (silent) suppress.add(pkg);
  close(entry.win);
  suppress.delete(pkg);
}

/** The user pressed ✕ on an app window: the app, its task and its display go away with it. */
on('wins', () => {
  for (const pkg of [...live.keys()]) {
    const entry = live.get(pkg);
    if (suppress.has(pkg) || wins.includes(entry.win)) continue;
    live.delete(pkg);
    command({ cmd: 'close', pkg });
  }
  emit('appsState');
});

// ---------------------------------------------------------------- commands from the shell

export function openApp(pkg, box) {
  if (!pkg) return;
  command({ cmd: 'open', pkg, w: (box && box.w) || DEFAULT_W, h: (box && box.h) || DEFAULT_H });
}

export function openPhoneMirror(box) {
  command({ cmd: 'open', pkg: MIRROR, w: (box && box.w) || DEFAULT_W, h: (box && box.h) || DEFAULT_H });
}

export function closeApp(pkg) { command({ cmd: 'close', pkg }); }
export function minimizeApp(pkg) { closeWindow(pkg, true); command({ cmd: 'minimize', pkg }); }
export function restoreApp(pkg) { command({ cmd: 'restore', pkg }); }
export function requestShizuku() { command({ cmd: 'shizuku' }); }
export function refreshApps() { library.loaded = false; command({ cmd: 'refresh' }); }
export function hideApp(pkg, hide) { command({ cmd: 'hide', pkg, hide }); }
export function appKey(pkg, name) { command({ cmd: 'key', pkg, key: name }); }

/** The VR keyboard types into the app: windows.js routes the keys through NativeXR.key. */
export function focusAppKeyboard(pkg) { keyboard(true, { nativeId: 'app:' + pkg }); }

/** Loads the installed app list from the native side (synchronous bridge call). */
export function loadLibrary(force) {
  if (library.loaded && !force) return library;
  library.loaded = true;
  try {
    const raw = window.NativeXR?.appsLibrary?.(library.query, library.showSystem);
    const data = JSON.parse(raw || '{"apps":[]}');
    library.apps = Array.isArray(data.apps) ? data.apps : [];
    library.shown = data.shown || library.apps.length;
    library.total = data.total || library.apps.length;
  } catch (error) {
    library.apps = [];
  }
  emit('appsState');
  return library;
}

function scheduleSync(force) {
  const payload = [];
  for (const [pkg, entry] of live) {
    // The window body in atlas pixels; the native side turns it into a display size.
    payload.push({ pkg, w: Math.round(entry.surface.offsetWidth), h: Math.round(entry.surface.offsetHeight), visible: true });
  }
  const json = JSON.stringify(payload);
  if (!force && json === lastSync) return;
  lastSync = json;
  command({ cmd: 'sync', windows: payload });
}

function startSyncLoop() {
  if (syncTimer) return;
  syncTimer = setInterval(() => { if (live.size) scheduleSync(false); }, SYNC_MS);
}
on('wins', () => scheduleSync(true));

// ---------------------------------------------------------------- library page (the dock's grid)

const shizukuText = {
  install: () => t('shizukuInstall'),
  start: () => t('shizukuStart'),
  update: () => t('shizukuUpdate'),
  ask: () => t('shizukuAsk'),
  denied: () => t('shizukuDenied'),
  rebind: () => t('shizukuRebind'),
  ready: () => t('shizukuReady'),
  unknown: () => t('shizukuUnknown'),
};

function shizukuRow() {
  const sh = state.shizuku || {};
  const wrap = document.createElement('div');
  wrap.className = 'az-row';
  const dot = document.createElement('span');
  dot.className = 'az-dot';
  dot.dataset.state = sh.state || 'unknown';
  const text = document.createElement('span');
  text.className = 'az-text';
  (shizukuText[sh.state] || shizukuText.unknown) && (text.textContent = (shizukuText[sh.state] || shizukuText.unknown)());
  if (sh.detail) {
    const detail = document.createElement('small');
    detail.textContent = sh.detail;
    text.appendChild(detail);
  }
  wrap.append(dot, text);
  if (sh.ask) {
    const ask = document.createElement('button');
    ask.className = 'az-btn';
    ask.textContent = t('shizukuGrant');
    ask.onclick = () => requestShizuku();
    wrap.appendChild(ask);
  } else {
    const check = document.createElement('button');
    check.className = 'az-btn';
    check.textContent = t('shizukuRecheck');
    check.onclick = () => { refreshApps(); requestShizuku(); };
    wrap.appendChild(check);
  }
  if (sh.caps) {
    const more = document.createElement('button');
    more.className = 'az-btn ghost';
    more.textContent = t('appSelfTest');
    more.onclick = () => {
      const pre = wrap.querySelector('.az-caps');
      if (pre) { pre.remove(); return; }
      const block = document.createElement('pre');
      block.className = 'az-caps';
      block.textContent = JSON.stringify(sh.caps, null, 2);
      wrap.appendChild(block);
    };
    wrap.appendChild(more);
  }
  return wrap;
}

function hostingRow() {
  const hosting = runningApps();
  const wrap = document.createElement('div');
  wrap.className = 'az-running';
  const label = document.createElement('span');
  label.className = 'az-label';
  label.textContent = `${t('appHosting')} ${hosting.length}/${state.capacity}`;
  wrap.appendChild(label);
  for (const session of hosting) {
    const item = document.createElement('button');
    item.className = 'az-chip';
    item.dataset.state = session.state;
    item.textContent = session.title;
    item.title = session.state === 'suspended' ? t('appRestore') : t('appMinimize');
    item.onclick = () => (session.state === 'suspended' ? restoreApp(session.pkg) : minimizeApp(session.pkg));
    wrap.appendChild(item);
    const shut = document.createElement('button');
    shut.className = 'az-chip close';
    shut.textContent = '✕';
    shut.title = t('close');
    shut.onclick = () => closeApp(session.pkg);
    wrap.appendChild(shut);
  }
  return wrap;
}

function appTile(app) {
  const session = sessionOf(app.pkg);
  const tile = document.createElement('button');
  tile.className = 'lib-tile az-tile';
  tile.dataset.pkg = app.pkg;
  if (session) tile.dataset.session = session.state;
  const cover = document.createElement('span');
  cover.className = 'lib-cover az-cover';
  const mark = document.createElement('span');
  mark.className = 'nm';
  mark.textContent = (app.label || app.pkg).slice(0, 2);
  cover.appendChild(mark);
  if (app.icon) {
    const img = document.createElement('img');
    img.className = 'az-icon';
    img.src = app.icon;
    img.alt = '';
    img.draggable = false;
    img.onerror = () => img.remove();
    cover.insertBefore(img, mark);
  }
  tile.appendChild(cover);
  const label = document.createElement('span');
  label.className = 'lib-label';
  label.textContent = app.label || app.pkg;
  tile.appendChild(label);
  if (app.system) {
    const sys = document.createElement('span');
    sys.className = 'az-sys';
    sys.textContent = t('appSystem');
    tile.appendChild(sys);
  }
  if (session) {
    const badge = document.createElement('span');
    badge.className = 'az-open';
    badge.textContent = session.state === 'suspended' ? t('appMinimized') : t('appOpen');
    tile.appendChild(badge);
  }
  tile.onclick = () => {
    if (session && session.state === 'suspended') return restoreApp(app.pkg);
    if (session) return;                                    // already open: the window is the focus
    openApp(app.pkg);
  };
  tile.oncontextmenu = event => {
    event.preventDefault();
    hideApp(app.pkg, true);
    library.apps = library.apps.filter(a => a.pkg !== app.pkg);
    emit('appsState');
  };
  return tile;
}

/**
 * The Android apps page of the library: the same rail/grid the reference uses, filled with the
 * phone's own apps, the Shizuku state and the windows currently hosted.
 */
export function androidLibraryPage() {
  loadLibrary(false);
  const section = document.createElement('section');
  section.className = 'lib-main';

  const head = document.createElement('div');
  head.className = 'lib-head';
  const title = document.createElement('h2');
  title.className = 'lib-title';
  title.textContent = t('androidApps');
  const search = document.createElement('input');
  search.className = 'lib-search open';
  search.dataset.q = 'android';
  search.placeholder = t('searchApps');
  search.value = library.query;
  search.addEventListener('input', () => {
    library.query = search.value;
    loadLibrary(true);
    const again = document.querySelector('.app-android-page [data-q="android"]');
    if (again) { again.focus(); again.setSelectionRange(again.value.length, again.value.length); }
  });
  search.addEventListener('focus', () => keyboard(true, search));
  const system = document.createElement('button');
  system.className = 'lib-pill';
  system.textContent = `${t('appSystem')} ${library.showSystem ? t('on') : t('off')}`;
  system.onclick = () => { library.showSystem = !library.showSystem; loadLibrary(true); };
  const mirror = document.createElement('button');
  mirror.className = 'lib-pill';
  mirror.textContent = t('appMirror');
  mirror.title = state.input.singleAppCapture ? t('appMirrorOneApp') : t('appMirrorWhole');
  mirror.onclick = () => openPhoneMirror();
  head.append(title, search, system, mirror);

  const scroll = document.createElement('div');
  scroll.className = 'lib-scroll';
  scroll.append(shizukuRow(), hostingRow());
  const grid = document.createElement('div');
  grid.className = 'lib-grid';
  if (!library.apps.length) {
    const empty = document.createElement('div');
    empty.className = 'lib-empty';
    empty.textContent = library.query ? t('appNoResults') : t('appNone');
    grid.appendChild(empty);
  }
  for (const app of library.apps) grid.appendChild(appTile(app));
  scroll.appendChild(grid);

  section.append(head, scroll);
  section.classList.add('app-android-page');
  return section;
}

/** Badge with the number of hosted windows, used by the dock launcher tile. */
export function runningBadge() { return runningApps().length; }

/** Installs the bridge hook. Called once, from the shell boot. */
export function installAndroidApps() {
  if (!native) return;
  window.nextvrApps = applyState;
  startSyncLoop();
  on('lang', () => { library.loaded = false; emit('appsState'); });
}

/** Exposed for tests: the pixel fit of a hosted picture inside its window body. */
export const fitFor = fitDisplay;
export const pointFor = appHostPoint;
