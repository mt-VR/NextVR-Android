// Android PhoneXR hands adapter — finger silhouette visuals + pinch cursors + two-hand recenter.
import { settings as S, on, emit, toast, onFrame, native, viewport } from './core.js';
import { PalmDockGesture } from './palm-dock.js';

export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, hand: null };
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 1, scaleY = 1, visual = null, validForMs = 500;

// ── finger silhouette drawing (ported from NovaMR HTML) ──────────────────────
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

/** Convert flat landmark array (63 floats) → array of {x,y} in pixel coords. */
function toPixelPoints(pts, w, h) {
  const p = [];
  for (let i = 0; i < 21; i++) p.push({ x: pts[i * 3] * w, y: pts[i * 3 + 1] * h });
  return p;
}

/** Euclidean distance between two {x,y} points. */
function dist(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/** Perpendicular unit normal of segment a→b (rotated 90° CCW). */
function norm(a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return { x: -dy / len, y: dx / len };
}

/**
 * Compute left/right silhouette edges for a finger (array of {x,y} landmarks).
 * Width tapers toward the tip; the tip itself gets a fixed small width.
 */
function fingerSides(points) {
  const left = [], right = [];
  for (let i = 0; i < points.length; i++) {
    let n;
    if (i === 0) {
      n = norm(points[0], points[1]);
    } else if (i === points.length - 1) {
      n = norm(points[i - 1], points[i]);
    } else {
      const n1 = norm(points[i - 1], points[i]);
      const n2 = norm(points[i], points[i + 1]);
      n = { x: (n1.x + n2.x) / 2, y: (n1.y + n2.y) / 2 };
      const len = Math.sqrt(n.x * n.x + n.y * n.y) || 1;
      n.x /= len; n.y /= len;
    }
    const w = i === points.length - 1
      ? 5
      : Math.max(7, dist(points[i], points[Math.min(i + 1, points.length - 1)]) * 0.32);
    left.push({ x: points[i].x + n.x * w, y: points[i].y + n.y * w });
    right.push({ x: points[i].x - n.x * w, y: points[i].y - n.y * w });
  }
  return { left, right };
}

/**
 * Draw a hand as a single purple outlined silhouette — the exact style from NovaMR HTML.
 * `p` is an array of 21 {x,y} landmarks in pixel coordinates.
 */
function drawHandSilhouette(p, ctx) {
  const fingers = [
    [1, 2, 3, 4],       // thumb
    [5, 6, 7, 8],       // index
    [9, 10, 11, 12],    // middle
    [13, 14, 15, 16],   // ring
    [17, 18, 19, 20]    // pinky
  ];
  const sides = fingers.map(ids => fingerSides(ids.map(i => p[i])));

  ctx.beginPath();
  ctx.moveTo(p[0].x, p[0].y);

  // Walk around each finger: up the left edge, down the right edge.
  for (let f = 0; f < 5; f++) {
    if (f > 0) ctx.lineTo(sides[f].left[0].x, sides[f].left[0].y);
    for (const pt of sides[f].left) ctx.lineTo(pt.x, pt.y);
    for (let i = sides[f].right.length - 1; i >= 0; i--)
      ctx.lineTo(sides[f].right[i].x, sides[f].right[i].y);
  }

  ctx.lineTo(p[0].x, p[0].y); // close back to wrist

  ctx.strokeStyle = '#a83cff';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.shadowColor = '#8b2cff';
  ctx.shadowBlur = 9;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

// ── pinch cursors (purple glow dots) ─────────────────────────────────────────

function ensurePinchCursor(i) {
  if (pinchCursors[i]) return pinchCursors[i];
  const el = document.createElement('div');
  el.className = 'hand-cursor';
  document.getElementById('hud').append(el);
  pinchCursors[i] = el;
  return el;
}

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

  // Disable native hand silhouette visuals (we draw JS silhouettes instead).
  if (!jsDrawingInit && native) { jsDrawingInit = true; window.NativeXR.handVisuals?.(false); }

  // Draw finger silhouettes + update pinch cursors (safe: drawing errors must not break interaction).
  try {
    const canvas = ensureOverlay();
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < hands.length; i++) {
        const px = toPixelPoints(hands[i].points, canvas.width, canvas.height);
        drawHandSilhouette(px, ctx);
        updatePinchCursor(hands[i], i);
      }
      for (let i = hands.length; i < pinchCursors.length; i++) {
        if (pinchCursors[i]) pinchCursors[i].classList.remove('active');
      }
    }
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