// Joy-Con / Bluetooth gamepad navigation for the spatial shell.
// Android forwards hardware buttons and joystick axes here; this module never creates a HUD cursor.
import { toast, native } from './core.js';
import { wins, focusedWin, close, setDockHidden, dockHiddenNow, dockShown,
  setDockVisible, setKeyboardHidden, keyboardHiddenNow } from './windows.js';

let workspaceSnapshot = null;
let selected = null;
let axesDirection = '';
let axesRepeatAt = 0;
const held = new Set();

const ACTIONABLE = 'button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';

function currentRoot() {
  const fsEntry = document.getElementById('entry-fullscreen');
  if (fsEntry && !fsEntry.hidden) return fsEntry;
  const win = focusedWin();
  if (win && !win.hidden) return win.el;
  const dock = document.querySelector('.dock');
  if (dock && dock.offsetWidth && getComputedStyle(dock).display !== 'none') return dock;
  return wins.find(item => !item.hidden && !item.onboarding)?.el || null;
}

function candidates() {
  const root = currentRoot();
  if (!root) return [];
  return [...root.querySelectorAll(ACTIONABLE)].filter(node => {
    if (node.closest('[hidden],.win-shell[hidden]')) return false;
    const rect = node.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && getComputedStyle(node).visibility !== 'hidden';
  });
}

function mark(node) {
  if (selected && selected !== node) selected.classList.remove('joycon-selected');
  selected = node || null;
  if (selected) {
    selected.classList.add('joycon-selected');
    selected.focus({ preventScroll: true });
  }
}

function moveSelection(direction) {
  const list = candidates();
  if (!list.length) { mark(null); return; }
  let current = list.indexOf(selected);
  if (current < 0) {
    mark(list[0]);
    return;
  }
  const rect = selected.getBoundingClientRect();
  const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
  const vector = direction === 'left' ? [-1, 0] : direction === 'right' ? [1, 0]
    : direction === 'up' ? [0, -1] : [0, 1];
  let best = null, bestScore = Infinity;
  for (const node of list) {
    if (node === selected) continue;
    const r = node.getBoundingClientRect();
    const dx = r.left + r.width / 2 - cx, dy = r.top + r.height / 2 - cy;
    const primary = dx * vector[0] + dy * vector[1];
    if (primary <= 2) continue;
    const perpendicular = Math.abs(dx * vector[1] - dy * vector[0]);
    const score = primary + perpendicular * 1.8;
    if (score < bestScore) { best = node; bestScore = score; }
  }
  if (!best) {
    // Wrap in the requested direction when the selected row/column has no neighbour.
    best = direction === 'left' || direction === 'up' ? list.at(-1) : list[0];
  }
  mark(best);
}

function activate() {
  const list = candidates();
  if (!list.length) return;
  if (!selected || !list.includes(selected)) mark(list[0]);
  selected?.click();
}

function back() {
  const fsBack = document.querySelector('#entry-fullscreen [data-entry-act="back"]');
  if (fsBack) { fsBack.click(); mark(null); return; }
  const win = focusedWin();
  const entryBack = win?.el?.querySelector('[data-entry-act="back"]');
  if (entryBack) { entryBack.click(); mark(null); return; }
  if (win && !win.onboarding) { close(win); mark(null); return; }
  const active = document.activeElement;
  if (active && active !== document.body) active.blur();
}

function toggleWorkspace() {
  if (workspaceSnapshot) {
    const snapshot = workspaceSnapshot;
    workspaceSnapshot = null;
    for (const { win, hidden } of snapshot.windows) if (wins.includes(win)) win.setHidden(hidden);
    setDockHidden(snapshot.dockHidden);
    setDockVisible(snapshot.dockVisible);
    setKeyboardHidden(snapshot.keyboardHidden);
    mark(null);
    return;
  }
  workspaceSnapshot = {
    windows: wins.filter(win => !win.onboarding).map(win => ({ win, hidden: win.hidden })),
    dockHidden: dockHiddenNow(),
    dockVisible: dockShown(),
    keyboardHidden: keyboardHiddenNow(),
  };
  for (const { win } of workspaceSnapshot.windows) win.setHidden(true);
  setKeyboardHidden(true);
  setDockHidden(true);
  mark(null);
}

function buttonDown(action, repeat) {
  if (action === 'home') {
    if (!held.has(action) && repeat === 0) toggleWorkspace();
    held.add(action);
    return;
  }
  if (action === 'left' || action === 'right' || action === 'up' || action === 'down') {
    if (!held.has(action) || repeat > 0) moveSelection(action);
    held.add(action);
    return;
  }
  if (held.has(action)) return;
  held.add(action);
  if (action === 'accept') activate();
  else if (action === 'back') back();
}

function onButton(action, down, repeat = 0) {
  if (down) buttonDown(action, repeat);
  else held.delete(action);
}

function axisDirection(x, y) {
  if (Math.abs(x) < .58 && Math.abs(y) < .58) return '';
  if (Math.abs(x) > Math.abs(y)) return x < 0 ? 'left' : 'right';
  return y < 0 ? 'up' : 'down';
}
function onAxes(x, y) {
  const direction = axisDirection(x, y);
  if (!direction) { axesDirection = ''; axesRepeatAt = 0; return; }
  const now = performance.now();
  if (direction !== axesDirection) {
    axesDirection = direction;
    moveSelection(direction);
    axesRepeatAt = now + 320;
  } else if (now >= axesRepeatAt) {
    moveSelection(direction);
    axesRepeatAt = now + 170;
  }
}

export function installJoycon() {
  if (!native || window.__nextvrJoyconInstalled) return;
  window.__nextvrJoyconInstalled = true;
  window.__nextvrJoyconKey = onButton;
  window.__nextvrJoyconAxes = onAxes;
  window.addEventListener('blur', () => { held.clear(); axesDirection = ''; });
  window.addEventListener('gamepadconnected', event => {
    const name = event.gamepad?.id || 'Bluetooth gamepad';
    toast(/joy.?con/i.test(name) ? 'Joy-Con conectado' : `Controle conectado: ${name}`);
  });
}
