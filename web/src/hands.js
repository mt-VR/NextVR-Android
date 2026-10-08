// Android PhoneXR hands adapter — MediaPipe-style visuals + two-hand pinch recenter.
import { settings as S, on, emit, toast, onFrame, native, viewport } from './core.js';
import { PalmDockGesture } from './palm-dock.js';

export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, hand: null };
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 1, scaleY = 1, visual = null, validForMs = 500;

// ── hand skeleton connections (same as @mediapipe/hands) ─────────────────────
const HAND_CONN = [
  [0,1],[1,2],[2,3],[3,4],       // thumb
  [0,5],[5,6],[6,7],[7,8],       // index
  [0,9],[9,10],[10,11],[11,12],  // middle
  [0,13],[13,14],[14,15],[15,16],// ring
  [0,17],[17,18],[18,19],[19,20],// pinky
  [5,9],[9,13],[13,17]           // palm
];
const pinchCursors = [];
let jsDrawingInit = false;

/** Ensure overlay canvas matches its container size. */
function ensureOverlay() {
  const c = document.getElementById('overlay');
  if (!c) return null;
  const p = c.parentElement || c;
  const pw = p.offsetWidth || 1200, ph = p.offsetHeight || 800;
  if (c.width !== pw || c.height !== ph) { c.width = pw; c.height = ph; }
  return c;
}

/** Draw a single hand skeleton (purple lines + dots with glow). */
function drawHandSkeleton(points) {
  const canvas = ensureOverlay();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const p = [];
  for (let i = 0; i < 21; i++) p.push({ x: points[i * 3] * w, y: points[i * 3 + 1] * h });

  // connections
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#a83cff';
  ctx.shadowColor = '#8b2cff';
  ctx.shadowBlur = 10;
  for (const [a, b] of HAND_CONN) {
    ctx.beginPath(); ctx.moveTo(p[a].x, p[a].y); ctx.lineTo(p[b].x, p[b].y); ctx.stroke();
  }
  // landmarks
  ctx.shadowColor = '#b45cff'; ctx.shadowBlur = 12;
  for (let i = 0; i < p.length; i++) {
    ctx.beginPath();
    ctx.arc(p[i].x, p[i].y, (i === 4 || i === 8) ? 5 : 3, 0, Math.PI * 2);
    ctx.fillStyle = (i === 4 || i === 8) ? '#d39aff' : '#a83cff';
    ctx.fill();
  }
  ctx.shadowBlur = 0;
}

/** Get or create a pinch-cursor element for hand index `i`. */
function ensurePinchCursor(i) {
  if (pinchCursors[i]) return pinchCursors[i];
  const el = document.createElement('div');
  el.className = 'hand-cursor';
  document.getElementById('hud').append(el);
  pinchCursors[i] = el;
  return el;
}

/** Show / position / hide a pinch cursor based on hand pinch state. */
function updatePinchCursor(hand, idx) {
  const el = ensurePinchCursor(idx);
  const canvas = document.getElementById('overlay');
  if (hand.pinching && canvas) {
    // thumb tip = landmark 4, index tip = landmark 8
    const tx = hand.points[4 * 3], ty = hand.points[4 * 3 + 1];
    const ix = hand.points[8 * 3], iy = hand.points[8 * 3 + 1];
    el.style.left = ((tx + ix) / 2 * canvas.width) + 'px';
    el.style.top  = ((ty + iy) / 2 * canvas.height) + 'px';
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
}

// ── two-hand pinch → recenter dock ───────────────────────────────────────────
let recenterArmed = false;
function checkTwoHandRecenter(frameHands) {
  if (frameHands.length >= 2 && frameHands.every(h => h.pinching)) {
    if (!recenterArmed) { recenterArmed = true; emit('recenter'); }
  } else {
    recenterArmed = false;
  }
}

// ── palm-menu gesture ────────────────────────────────────────────────────────
const menuGesture = new PalmDockGesture();
const menuNodes = new Map();

function palmMenu(frameHands, sx, sy) {
  const consumed = new Set();
  const old = new Set(menuNodes.keys());
  // First, update state for hands still present.
  for (const h of frameHands) {
    old.delete(h.id);
    const nod = menuGesture.update(h, viewport.width * (cursor.down ? 0.06 : 0.05), h.palm);
    if (!nod) { menuNodes.delete(h.id); continue; }
    let state = menuNodes.get(h.id);
    if (!state) { state = { node: nod }; menuNodes.set(h.id, state); }
    else if (state.node !== nod) { state.node = nod; state.pinchOnce = false; }
    consumed.add(h.id);
    if (nod) emit('palmmenu', { hand: h, node: nod, anchor: h.palm });
  }
  // Transition away hands that left frame with grace.
  for (const id of old) {
    const st = menuNodes.get(id);
    if (!st) continue;
    if (!st.outAt) { st.outAt = performance.now(); }
    else if (performance.now() - st.outAt > 300) { menuNodes.delete(id); }
  }
  return consumed;
}

// ── public tracking API ──────────────────────────────────────────────────────
export const tracking = () => enabled;

export async function startHands() {
  if (!native) { toast('PhoneXR hands require the Android camera pipeline.'); return false; }
  enabled = true;
  window.NativeXR.hands(true);
  emit('hands', true);
  return true;
}

function cancel() {
  if (cursor.down) emit('pinchcancel', cursor);
  cursor.down = cursor.active = false;
  cursor.hand = null;
}

export function stopHands() {
  cancel();
  hands.length = 0;
  palmMenu([], scaleX, scaleY);
  for (const c of pinchCursors) if (c) c.classList.remove('active');
  enabled = false;
  lastFrame = -Infinity;
  emit('phonehands', { hands: [], consumed: new Set(), scaleX, scaleY });
  if (native) window.NativeXR.hands(false);
  emit('hands', false);
}

export function screenPoint(tangent) {
  return { x: .5 + tangent[0] / (2 * TAN_X), y: .5 - tangent[1] / (2 * TAN_Y) };
}

// ── native frame handler ─────────────────────────────────────────────────────
if (native) window.nextvrHands = (frame, sx = 1, sy = 1) => {
  if (!enabled) return;
  scaleX = sx; scaleY = sy; lastFrame = performance.now();
  validForMs = Math.max(500, Math.min(1500, Number(frame.validForMs) || 500));
  hands.splice(0, hands.length, ...(frame.hands || []));

  // Disable native hand silhouette visuals (we draw JS skeletons instead).
  if (!jsDrawingInit && native) { jsDrawingInit = true; window.NativeXR.handVisuals?.(false); }

  // Draw hand skeletons + update pinch cursors (safe: drawing errors must not break interaction).
  try {
    const canvas = ensureOverlay();
    if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < hands.length; i++) {
      drawHandSkeleton(hands[i].points);
      updatePinchCursor(hands[i], i);
    }
    // Hide unused cursors.
    for (let i = hands.length; i < pinchCursors.length; i++) {
      if (pinchCursors[i]) pinchCursors[i].classList.remove('active');
    }
    // Two-hand pinch recenter.
    checkTwoHandRecenter(hands);
  } catch (_) { /* drawing is best-effort */ }

  emit('handframe', { ...frame, hands });
  const consumed = palmMenu(hands, scaleX, scaleY);
  if (cursor.hand && consumed.has(cursor.hand.id)) cancel();
  const packet = { hands, consumed, scaleX, scaleY };
  emit('phonehands', packet);
  if (packet.blockFar) { cancel(); return; }
  const available = hands.filter(h => !packet.consumed.has(h.id));
  const chosen = (cursor.down && available.find(h => h.id === cursor.hand?.id))
    || available.find(h => h.pinching) || [...available].sort((a, b) => b.palmWidth - a.palmWidth)[0];
  if (!chosen) { cancel(); return; }
  if (cursor.hand && cursor.hand.id !== chosen.id) cancel();
  const wasDown = cursor.down;
  const point = screenPoint(chosen.aim);
  cursor.x = point.x; cursor.y = point.y; cursor.active = true; cursor.hand = chosen; cursor.down = chosen.pinching;
  if (cursor.down && !wasDown) emit('pinchdown', cursor);
  else if (!cursor.down && wasDown) emit('pinchup', cursor);
};

const overlayCanvas = document.getElementById('overlay');
if (overlayCanvas) overlayCanvas.getContext('2d').clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

// ── frame loop (hand expiry) ─────────────────────────────────────────────────
onFrame(() => {
  if (hands.length && performance.now() - lastFrame > validForMs) {
    hands.length = 0;
    palmMenu([], scaleX, scaleY);
    cancel();
    for (const c of pinchCursors) if (c) c.classList.remove('active');
    const canvas = document.getElementById('overlay');
    if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    emit('phonehands', { hands: [], consumed: new Set(), scaleX, scaleY });
  }
});

if (native) window.nextvrTrigger = down => {
  if (cursor.hand) cancel();
  cursor.x = cursor.y = .5; cursor.hand = null; cursor.active = true; cursor.down = down;
  emit(down ? 'pinchdown' : 'pinchup', cursor);
  if (!down) cursor.active = false;
};