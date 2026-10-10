// Display-rate hand presentation for the lower-rate native landmark stream. Gesture decisions stay on
// the exact native samples; this module only predicts/interpolates the visible contour.
const POINT_COUNT = 21;
const MAX_TRACKING_AGE_MS = 700;
const FADE_START_MS = 500;
const MAX_PREDICTION_MS = 24;
const MAX_POINT_SPEED = 2.4; // normalized screen units/second
const MAX_PREDICTION_STEP = .025;
const FINGER_IDS = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/** Reusable, display-rate interpolation state; it never changes gesture/input samples. */
export class HandPoseSmoother {
  constructor() { this.states = new Map(); this.live = new Set(); }

  update(hands, scaleX = 1, scaleY = 1, nowMs = 0, sampleMs = nowMs) {
    if (!Array.isArray(hands)) hands = [];
    this.live.clear();
    for (const hand of hands) {
      const src = hand?.points;
      if (!src || src.length < POINT_COUNT * 3) continue;
      let valid = true;
      for (let i = 0; i < POINT_COUNT; i++) {
        if (!Number.isFinite(src[i * 3]) || !Number.isFinite(src[i * 3 + 1])) { valid = false; break; }
      }
      if (!valid) continue;

      const id = String(hand.id ?? (hand.left ? 'left' : 'right'));
      let state = this.states.get(id);
      if (!state) {
        state = {
          id, target: new Float32Array(POINT_COUNT * 2), pose: new Float32Array(POINT_COUNT * 2),
          velocity: new Float32Array(POINT_COUNT * 2), sampleMs, receivedMs: nowMs, lastSeen: nowMs,
          ready: false, speed: 0, opacity: 1, pinching: false, geometry: null,
        };
        this.states.set(id, state);
      }
      const gap = (sampleMs - state.sampleMs) / 1000;
      const moving = state.ready && gap > .004 && gap < .25;
      const mix = moving ? 1 - Math.exp(-gap * 18) : 0;
      let speedSq = 0;
      for (let i = 0; i < POINT_COUNT; i++) {
        const x = .5 + (src[i * 3] - .5) * scaleX;
        const y = .5 + (src[i * 3 + 1] - .5) * scaleY;
        const j = i * 2;
        if (moving) {
          const vx = clamp((x - state.target[j]) / gap, -MAX_POINT_SPEED, MAX_POINT_SPEED);
          const vy = clamp((y - state.target[j + 1]) / gap, -MAX_POINT_SPEED, MAX_POINT_SPEED);
          state.velocity[j] += (vx - state.velocity[j]) * mix;
          state.velocity[j + 1] += (vy - state.velocity[j + 1]) * mix;
          speedSq += state.velocity[j] ** 2 + state.velocity[j + 1] ** 2;
        } else if (state.ready) {
          state.velocity[j] = state.velocity[j + 1] = 0;
        }
        state.target[j] = x; state.target[j + 1] = y;
        if (!state.ready) { state.pose[j] = x; state.pose[j + 1] = y; }
      }
      state.speed = moving ? Math.sqrt(speedSq / POINT_COUNT) : 0;
      state.ready = true;
      state.sampleMs = sampleMs;
      state.receivedMs = nowMs;
      state.lastSeen = nowMs;
      state.pinching = !!hand.pinching;
      this.live.add(id);
    }
    // A live partial frame is authoritative: do not keep an outline for a different hand.
    // An entirely empty frame is different; briefly retain the last pose just like the native GL hand.
    if (this.live.size) for (const id of this.states.keys()) if (!this.live.has(id)) this.states.delete(id);
  }

  advance(dtSeconds, nowMs) {
    const dt = clamp(Number.isFinite(dtSeconds) ? dtSeconds : 0, 0, .05);
    for (const [id, state] of this.states) {
      const age = Math.max(0, nowMs - state.receivedMs);
      const unseen = Math.max(0, nowMs - state.lastSeen);
      if (unseen > MAX_TRACKING_AGE_MS) { this.states.delete(id); continue; }

      const lead = Math.min(age, MAX_PREDICTION_MS) / 1000;
      const rate = 28 + Math.min(40, state.speed * 12);
      const alpha = dt > 0 ? 1 - Math.exp(-rate * dt) : 0;
      for (let i = 0; i < state.pose.length; i++) {
        const prediction = clamp(state.velocity[i] * lead * .55, -MAX_PREDICTION_STEP, MAX_PREDICTION_STEP);
        const target = state.target[i] + prediction;
        state.pose[i] += (target - state.pose[i]) * alpha;
      }
      state.opacity = unseen <= FADE_START_MS ? 1 : clamp(1 - (unseen - FADE_START_MS) / (MAX_TRACKING_AGE_MS - FADE_START_MS), 0, 1);
    }
    return this.states.values();
  }

  get(id) { return this.states.get(String(id)); }
  clear() { this.states.clear(); }
}

function makeGeometry() {
  return {
    points: Array.from({ length: POINT_COUNT }, () => ({ x: 0, y: 0 })),
    fingers: FINGER_IDS.map(ids => ({
      ids, left: ids.map(() => ({ x: 0, y: 0 })), right: ids.map(() => ({ x: 0, y: 0 })),
      leftIsOuter: true,
    })),
    path: Array.from({ length: 56 }, () => ({ x: 0, y: 0 })), pathLength: 0,
  };
}

function makeBounds(state, width, height) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (let i = 0; i < state.pose.length; i += 2) {
    const x = state.pose[i] * width, y = state.pose[i + 1] * height;
    minX = Math.min(minX, x); minY = Math.min(minY, y);
    maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
  }
  const pad = 38;
  const left = clamp(Math.floor(minX - pad), 0, width);
  const top = clamp(Math.floor(minY - pad), 0, height);
  const right = clamp(Math.ceil(maxX + pad), 0, width);
  const bottom = clamp(Math.ceil(maxY + pad), 0, height);
  return { x: left, y: top, width: Math.max(0, right - left), height: Math.max(0, bottom - top) };
}

function clearBounds(ctx, bounds) {
  ctx.clearRect(bounds.x, bounds.y, bounds.width, bounds.height);
}

function makeContour(state, geometry, width, height) {
  const p = geometry.points;
  for (let i = 0; i < POINT_COUNT; i++) {
    p[i].x = state.pose[i * 2] * width;
    p[i].y = state.pose[i * 2 + 1] * height;
  }
  for (const finger of geometry.fingers) {
    const ids = finger.ids, left = finger.left, right = finger.right;
    let leftAvg = 0, rightAvg = 0;
    for (let i = 0; i < ids.length; i++) {
      const point = p[ids[i]], next = p[ids[Math.min(i + 1, ids.length - 1)]], prev = p[ids[Math.max(i - 1, 0)]];
      let nx, ny;
      if (i === 0) {
        const dx = next.x - point.x, dy = next.y - point.y, length = Math.hypot(dx, dy) || 1;
        nx = -dy / length; ny = dx / length;
      } else if (i === ids.length - 1) {
        const dx = point.x - prev.x, dy = point.y - prev.y, length = Math.hypot(dx, dy) || 1;
        nx = -dy / length; ny = dx / length;
      } else {
        const d1x = point.x - prev.x, d1y = point.y - prev.y, l1 = Math.hypot(d1x, d1y) || 1;
        const d2x = next.x - point.x, d2y = next.y - point.y, l2 = Math.hypot(d2x, d2y) || 1;
        nx = (-d1y / l1 - d2y / l2) / 2;
        ny = (d1x / l1 + d2x / l2) / 2;
        const length = Math.hypot(nx, ny) || 1;
        nx /= length; ny /= length;
      }
      const widthPx = i === ids.length - 1 ? 5 : Math.max(7, Math.hypot(next.x - point.x, next.y - point.y) * .32);
      left[i].x = point.x + nx * widthPx; left[i].y = point.y + ny * widthPx;
      right[i].x = point.x - nx * widthPx; right[i].y = point.y - ny * widthPx;
      leftAvg += left[i].x; rightAvg += right[i].x;
    }
    finger.leftIsOuter = leftAvg < rightAvg;
  }
  return p;
}

function pathAdd(geometry, point) {
  const count = geometry.pathLength, last = geometry.path[count - 1];
  if (last && Math.hypot(last.x - point.x, last.y - point.y) <= 1.5) return;
  if (count >= geometry.path.length) return;
  const out = geometry.path[count];
  out.x = point.x; out.y = point.y;
  geometry.pathLength = count + 1;
}

function pathSide(geometry, points, reverse = false) {
  if (reverse) for (let i = points.length - 1; i >= 0; i--) pathAdd(geometry, points[i]);
  else for (let i = 0; i < points.length; i++) pathAdd(geometry, points[i]);
}

function drawHand(ctx, state, geometry, width) {
  const points = makeContour(state, geometry, width, ctx.canvas.height);
  geometry.pathLength = 0;
  const first = geometry.fingers[0];
  const firstOuter = first.leftIsOuter ? first.left : first.right;
  const firstInner = first.leftIsOuter ? first.right : first.left;
  pathAdd(geometry, points[0]);
  pathSide(geometry, firstOuter);
  pathSide(geometry, firstInner, true);
  for (let i = 1; i < geometry.fingers.length; i++) {
    const finger = geometry.fingers[i];
    const outer = finger.leftIsOuter ? finger.left : finger.right;
    const inner = finger.leftIsOuter ? finger.right : finger.left;
    pathAdd(geometry, outer[0]);
    pathSide(geometry, outer);
    pathSide(geometry, inner, true);
  }
  pathAdd(geometry, points[0]);
  if (geometry.pathLength < 3) return;

  const path = geometry.path;
  ctx.save();
  ctx.globalAlpha = state.opacity;
  ctx.beginPath(); ctx.moveTo(path[0].x, path[0].y);
  for (let i = 1; i < geometry.pathLength; i++) {
    const a = path[i - 1], b = path[i];
    ctx.quadraticCurveTo(a.x, a.y, (a.x + b.x) / 2, (a.y + b.y) / 2);
  }
  const last = path[geometry.pathLength - 1];
  ctx.lineTo(last.x, last.y); ctx.closePath();
  ctx.strokeStyle = '#27e8ff';
  ctx.lineWidth = Math.max(2.2, Math.min(3.2, width / 260));
  ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.shadowColor = '#00dfff'; ctx.shadowBlur = 5;
  ctx.stroke();

  const thumb = points[4], index = points[8];
  if (state.pinching || Math.hypot(thumb.x - index.x, thumb.y - index.y) < 45) {
    ctx.beginPath(); ctx.arc((thumb.x + index.x) / 2, (thumb.y + index.y) / 2, 8.5, 0, Math.PI * 2);
    ctx.fillStyle = '#27e8ff'; ctx.shadowColor = '#00dfff'; ctx.shadowBlur = 16; ctx.fill();
  }
  ctx.restore();
}

/** Retained contour canvas; the dirty rectangles keep high-refresh redraws cheap on the phone. */
export class HandOverlay {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.smoother = new HandPoseSmoother();
    this.bounds = new Map();
    this.enabled = true;
  }

  update(hands, scaleX, scaleY, nowMs, sampleMs = nowMs) {
    this.smoother.update(hands, scaleX, scaleY, nowMs, sampleMs);
  }

  render(dtSeconds, nowMs, enabled = true) {
    if (!enabled) {
      if (this.enabled) this.clear();
      this.enabled = false;
      return;
    }
    this.enabled = true;
    const states = this.smoother.advance(dtSeconds, nowMs);
    const ctx = this.ctx, width = this.canvas.width, height = this.canvas.height;
    for (const bounds of this.bounds.values()) clearBounds(ctx, bounds);
    this.bounds.clear();
    for (const state of states) {
      if (state.opacity <= 0) continue;
      const bounds = makeBounds(state, width, height);
      clearBounds(ctx, bounds);
      this.bounds.set(state.id, bounds);
    }
    for (const state of this.smoother.states.values()) {
      if (state.opacity <= 0) continue;
      if (!state.geometry) state.geometry = makeGeometry();
      drawHand(ctx, state, state.geometry, width);
    }
  }

  clear() {
    this.smoother.clear();
    this.bounds.clear();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
