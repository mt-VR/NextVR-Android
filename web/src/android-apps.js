// Android apps in NextVR: the installed apps, how they are opened, and their windows. This module
// owns the shell half of the feature; the native half lives in
// nextvr-android/src/main/java/com/nextvr/app/apps/ and they talk through one JSON state object.
//
// An Android app appears as a tile in the *same* Applications menu as NextVR's own apps. Tapping it
// opens a floating window; which mechanism runs behind that window is decided by the native side and
// reported back in `mode`, and the three mechanisms are never presented as the same thing:
//  * `display` — the app really runs on a display of its own, created by the shell user service
//    (Shizuku, no root). Its own task, its own lifecycle, no capture. Badge: "APP DO ANDROID".
//  * `mirror` — no privileged service is available, so the app is brought to the phone's screen with
//    public API and that screen is captured with the user's consent. Input goes through the
//    accessibility service. Badge: "ESPELHO DA TELA".
//  * an *HTML/web* window is a page rendered by the shell's own WebView (webWindow in apps.js).
// Only the last two are ever called a mirror, and the window's badge always names what it is.
//
// There is no mirror button and no separate Android page: the app library, the dock badge and the
// window bar are the whole interface, and a failure names its reason instead of leaving a blank
// window (see sessionError).
import { t, toast, on, emit, native } from './core.js';
import { open, close, wins, focus, keyboard } from './windows.js';
import { icon } from './reference-icons.js';
import { fitDisplay, appHostPoint } from './display-fit.js';

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
  capacity: CAPACITY, sdk: 0, recents: [], library: 0, launch: null,
};
// `version` is the native side's icon revision: when it moves, an icon that was still being rendered
// has landed and the grid has to be read again, or the tiles keep their letter placeholders.
// `icons` is the native side's icon-batch counter: when it moves, a tile that was drawn before its
// icon existed has to be drawn again (see applyState).
const library = { apps: [], shown: 0, total: 0, loaded: false, query: '', showSystem: false, icons: 0 };
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
  state.launch = next.launch || null;
  state.diagnostics = next.diagnostics || state.diagnostics;
  // The native side bumps `library` when a batch of icons lands (or the app list changed): drop the
  // cached grid so the next paint asks for it again and the real launcher icons appear.
  if (next.icons != null && next.icons !== library.icons) {
    // A batch of icons landed. The cached list carries the icon URLs of the moment it was read, so it
    // has to be read again — this is what makes the real launcher icons appear on the tiles without
    // restarting the app.
    library.icons = next.icons;
    library.loaded = false;
  }
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
  // The badge names the mechanism, and it is re-read on every state: a session that was replaced by
  // the other mechanism must never keep the old label.
  entry.badge.textContent = session.mode === 'mirror' ? t('appMirrorBadge') : t('appWindowBadge');
  entry.badge.classList.toggle('mirror', session.mode === 'mirror');
  const states = {
    requested: t('appStarting'), creating: t('appStarting'), launching: t('appStarting'),
    running: '', failed: session.error ? sessionError(session) : t('appFailed'),
  };
  // A hosted session that is "creating" while the shell service is still binding is not stuck: it is
  // the shell process being forked. Saying so is the difference between a spinner and a diagnosis.
  if (session.mode === 'display' && (state.shizuku?.binding || !state.shizuku?.ready)
      && (session.state === 'requested' || session.state === 'creating')) {
    states.requested = t('appWaitingService');
    states.creating = t('appWaitingService');
  }
  // A mirror window is not the app in VR: the app is opening on the phone's screen and this window
  // is showing that screen with the user's capture consent. The window says so while it does it,
  // instead of looking like the hosted case and surprising the user with a dialog.
  if (session.mode === 'mirror' && session.state !== 'running'
      && session.state !== 'failed') {
    states.requested = t('appMirrorStarting');
    states.creating = t('appMirrorStarting');
    states.launching = t('appMirrorStarting');
  }
  const text = states[session.state] ?? '';
  entry.status.hidden = !text;
  entry.status.dataset.state = session.state;
  if (text) {
    entry.status.textContent = text;
    // A window that could not be filled is not a dead end: the app can still be opened on the phone.
    // The button exists only where that is the honest next step, and it never hides the reason.
    if (session.state === 'failed' && RECOVERABLE.has(session.error)) {
      const toPhone = document.createElement('button');
      toPhone.className = 'app-state-btn';
      toPhone.textContent = t('appOpenOnPhone');
      toPhone.onclick = () => command({ cmd: 'phone', pkg: session.pkg });
      entry.status.appendChild(toPhone);
    }
  }
  entry.win.el.classList.toggle('app-native', true);
  entry.win.el.classList.toggle('app-failed', session.state === 'failed');
}

/**
 * The failures that leave the app itself reachable: the window could not be filled, but launching the
 * app on the phone needs no privilege at all and is exactly what the tile was asking for. Those
 * windows offer that as the next step instead of ending on an error.
 */
const RECOVERABLE = new Set(['consent_denied', 'projection_failed', 'mirror_failed', 'mirror_refused',
  'display_empty', 'display_refused', 'display_failed', 'shizuku_unavailable', 'shizuku_denied']);

function sessionError(session) {
  const known = {
    shizuku_unavailable: t('appNeedShizuku'),
    shizuku_denied: t('appShizukuDenied'),
    display_refused: t('appDisplayRefused'),
    display_failed: t('appDisplayFailed'),
    no_launcher_activity: t('appNoLauncher'),
    consent_denied: t('appConsentDenied'),
    mirror_stopped: t('appMirrorStopped'),
    mirror_failed: t('appMirrorFailed'),
    mirror_refused: t('appMirrorFailed'),
    projection_failed: t('appMirrorFailed'),
    display_empty: t('appDisplayEmpty'),
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

/**
 * Opens an installed app in a floating window. One command, one decision: the native side hosts it
 * on its own display when the shell user service is available, and captures the phone's screen with
 * that app on it when it is not. The shell never has to know which one it will get — the state JSON
 * reports the mode back and the window badge names it.
 */
export function openApp(pkg, box) {
  if (!pkg) return;
  command({ cmd: 'open', pkg, w: (box && box.w) || DEFAULT_W, h: (box && box.h) || DEFAULT_H });
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

/**
 * Loads the installed app list from the native side (synchronous bridge call).
 *
 * <p>`library.loaded` is dropped whenever the native icon revision moves or the language changes, so
 * a tile that was drawn before its icon existed is drawn again with it. The call itself is cheap: the
 * package query behind it is cached by the native side, and only the file-existence of each icon is
 * re-checked.
 */
export function loadLibrary(force) {
  if (library.loaded && !force) return library;
  library.loaded = true;
  try {
    const raw = window.NativeXR?.appsLibrary?.(library.query, library.showSystem);
    const data = JSON.parse(raw || '{"apps":[]}');
    library.apps = Array.isArray(data.apps) ? data.apps : [];
    library.shown = data.shown || library.apps.length;
    library.total = data.total || library.apps.length;
    // The batch this list was read at: a later state with the same number changes nothing.
    library.icons = data.icons || library.icons;
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

// ------------------------------------------------------- the Applications menu's Android tiles

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

const ROUTES = new Set(['hosted', 'permission', 'capture']);

/**
 * The route a tap will take, so the menu never surprises the user with a consent dialog.
 *
 * <p>The native side publishes it (`shizuku.route`), computed by the same policy the tap uses. The
 * fallback for a shell talking to an older native side derives it from the state instead of guessing
 * "capture", which would show the capture warning about a device that is about to host perfectly.
 */
export function routeOf() {
  const sh = state.shizuku || {};
  if (ROUTES.has(sh.route)) return sh.route;
  if (sh.ready || sh.state === 'ready' || sh.state === 'rebind') return 'hosted';
  if (sh.state === 'ask') return 'permission';
  return 'capture';
}

/**
 * The one status row the app menu shows, and only when the shell service is not ready: a phone
 * without Shizuku then still opens apps (through the capture path), so the row explains which of the
 * two mechanisms a tile will use and offers the one action that changes the answer. With the service
 * ready the row does not exist at all — no state to read, nothing to dismiss.
 */
export function shizukuNotice() {
  const sh = state.shizuku || {};
  const route = routeOf();
  // Nothing to explain when the hosted route is going to work: that is the normal, silent case.
  if (route === 'hosted' && (sh.ready || sh.binding)) return null;
  const wrap = document.createElement('div');
  wrap.className = 'lib-note az-row';
  const dot = document.createElement('span');
  dot.className = 'az-dot';
  dot.dataset.state = sh.state || 'unknown';
  const text = document.createElement('span');
  text.className = 'az-text';
  // The first line says what a tap will actually do right now; the second says why.
  const routing = {
    hosted: () => t('routeHosted'),
    permission: () => t('routePermission'),
    capture: () => t('routeCapture'),
  };
  text.textContent = (routing[route] || routing.capture)();
  const why = document.createElement('small');
  why.textContent = (shizukuText[sh.state] || shizukuText.unknown)();
  text.appendChild(why);
  if (route === 'capture' && !state.input?.accessibility) {
    const hint = document.createElement('small');
    hint.textContent = t('appCaptureInput');
    text.appendChild(hint);
  } else if (sh.detail) {
    const detail = document.createElement('small');
    detail.textContent = sh.detail;
    text.appendChild(detail);
  }
  wrap.append(dot, text);
  const button = document.createElement('button');
  button.className = 'az-btn';
  if (sh.ask) {
    button.textContent = t('shizukuGrant');
    button.onclick = () => requestShizuku();
  } else {
    button.textContent = t('shizukuRecheck');
    button.onclick = () => { refreshApps(); requestShizuku(); };
  }
  wrap.appendChild(button);
  const test = document.createElement('button');
  test.className = 'az-btn ghost';
  test.textContent = t('appSelfTest');
  test.onclick = async () => {
    test.disabled = true;
    try {
      await command({ cmd: 'selftest' });
      const report = state.diagnostics?.selfTest;
      if (report) toast(report.ok ? t('appSelfTestOk') : t('appSelfTestFailed'));
    } catch (error) { toast(t('appCommandFailed')); }
    finally { test.disabled = false; }
  };
  wrap.appendChild(test);

  const more = document.createElement('button');
  more.className = 'az-btn ghost';
  more.textContent = t('appDiagnostics');
  more.onclick = () => {
    const open = wrap.querySelector('.az-caps');
    if (open) { open.remove(); return; }
    const block = document.createElement('pre');
    block.className = 'az-caps';
    block.textContent = diagnosticsText();
    block.onclick = () => copyDiagnostics(block.textContent);
    wrap.appendChild(block);
  };
  wrap.appendChild(more);
  return wrap;
}

/**
 * Everything needed to explain a failure without a computer: the route the tap takes, the Shizuku
 * state and reply, the `am start` output, and where the shell last saw an app that never drew. It is
 * written as plain text because that is what gets pasted into a bug report.
 */
export function diagnosticsText() {
  const sh = state.shizuku || {};
  const d = state.diagnostics || {};
  const lines = [
    'NextVR app windows',
    `route: ${sh.route || d.route || 'unknown'}`,
    `shizuku: ${sh.state || 'unknown'}${sh.detail ? ' (' + sh.detail + ')' : ''}`,
    `shizuku bound: ${sh.bound ? 'yes' : 'no'}${sh.binding ? ' (binding)' : ''}`,
    `shizuku reason: ${sh.reason || d.serviceReason || '-'}`,
    `bind error: ${sh.bindError || d.bindError || '-'}`,
    `launch backend: ${d.launchBackend || state.launch || '-'}`,
    `launch error: ${d.launchError || '-'}`,
    `display report: ${d.displayReport || '-'}`,
    `capture service: ${d.captureService || '-'}`,
    `accessibility: ${state.input?.accessibility ? 'on' : 'off'}`,
    `sdk: ${d.sdk || state.sdk || '-'}`,
    ...(d.selfTest ? ['device self-test: ' + JSON.stringify(d.selfTest)] : []),
    ...(sh.caps ? ['service capabilities: ' + JSON.stringify(sh.caps)] : []),
  ];
  return lines.join('\n');
}

/** Copies the diagnostics to the phone's clipboard, falling back to a selection the user can tap. */
function copyDiagnostics(text) {
  try {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;left:-9999px;top:0';
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand?.('copy');
    area.remove();
    if (copied) toast(t('appDiagnosticsCopied'));
    return;
  } catch (error) {
    /* the block stays on screen, selectable by hand */
  }
}

/** Escapes text that goes into a tile's markup. */
const esc = value => String(value == null ? '' : value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * One installed app as a tile of the *existing* Applications menu: the same `.lib-tile` the
 * reference grid uses, with the app's own launcher icon (served by the native side from
 * `PackageManager`) as the cover. A tile whose icon has not landed yet (or whose icon could not be
 * read at all) falls back to the app's initials, exactly like the web tiles fall back to their
 * labels — it never shows a broken image.
 */
export function androidTileHtml(app) {
  const session = sessionOf(app.pkg);
  // The icon is the app's own, served by the native side out of PackageManager; the initials are what
  // the tile shows while it is still being rendered, or when this app's icon cannot be read at all.
  const mark = `<span class="nm">${esc((app.label || app.pkg).slice(0, 2))}</span>`;
  const image = app.icon
    ? `<img class="lib-app-icon" src="${esc(app.icon)}" alt="" draggable="false" loading="lazy" `
      + `onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`
    : '';
  const badge = session
    ? `<span class="lib-open">${esc(session.state === 'suspended' ? t('appMinimized') : t('appOpen'))}</span>`
    : '';
  const system = app.system ? `<span class="lib-sys">${esc(t('appSystem'))}</span>` : '';
  return `<button class="lib-tile android" data-android="${esc(app.pkg)}" `
    + `data-session="${session ? esc(session.state) : ''}" data-pkg="${esc(app.pkg)}" `
    + `data-system="${app.system ? '1' : ''}" aria-label="${esc(app.label || app.pkg)}">`
    + `<span class="lib-cover${image ? '' : ' noicon'}">`
    + `<span class="lib-brand">${image}${mark}</span>`
    + `<span class="lib-src" title="${esc(t('androidApps'))}">${icon('device')}</span>`
    + system + badge
    + `</span><span class="lib-label">${esc(app.label || app.pkg)}</span></button>`;
}

/** Session state of an app, for the tile badge and for the click decision. */
/**
 * Brings an app's window forward on this side. The native side focuses the session itself — one
 * `open` command does focus, restore, restart or open, whichever that session needs — so this only
 * moves the shell's window to the front when the window is already in the arc.
 */
export function focusAppWindow(pkg) {
  const entry = live.get(pkg);
  if (entry) focus(entry.win);
}

export function stateOf(pkg) { return sessionOf(pkg); }

/** How many app windows are open (hosted or captured). Shown on the dock's library tile. */
export function openWindowCount() { return runningApps().length; }

/** The installed apps currently loaded, for the shared grid. */
export function androidApps() { return library.apps; }

/**
 * Whether the user opened this app recently from the menu. The native side owns that list (it also
 * persists it), so the shell asks instead of keeping a second copy that could disagree with it.
 */
export function androidRecent(pkg) { return state.recents.includes(pkg); }

/** Position of the app in that list (0 = most recent), or -1. */
export function androidRecentIndex(pkg) { return state.recents.indexOf(pkg); }

/**
 * The window body an Android app is opened at, in atlas pixels. It matches the default window
 * windows.js draws: 1040x660 with the window's 62 px bar and the app's own 52 px bar, so the surface
 * the app is drawn into — hosted display or capture — is exactly 546 px high and nothing is
 * letterboxed on the first frame.
 */
export const ANDROID_BOX = { w: DEFAULT_W, h: DEFAULT_H };

/** The apps a search/filter decision must see: the ones the native side returned. */
export function androidAppsLoaded() { return library.loaded; }

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
