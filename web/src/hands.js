// NextVR — hand tracking: suave, estável, sem piscar, desenhado por cima de tudo.
import { settings as S, on, emit, toast, onFrame, native, viewport } from './core.js';

const MP = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14';
const MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

/* ---------- filtro One Euro: parado fica firme, movendo fica rápido ---------- */
class OneEuro {
  constructor(min = 1.1, beta = 0.02, d = 1) { this.min = min; this.beta = beta; this.dc = d; this.x = null; this.dx = 0; this.t = 0; }
  static a(cut, dt) { const r = 1 / (2 * Math.PI * cut); return 1 / (1 + r / dt); }
  filter(v, t) {
    if (this.x === null) { this.x = v; this.t = t; return v; }
    const dt = Math.max(1e-3, Math.min(.1, (t - this.t) / 1000)); this.t = t;
    const dx = (v - this.x) / dt;
    this.dx += OneEuro.a(this.dc, dt) * (dx - this.dx);
    const cut = this.min + this.beta * Math.abs(this.dx);
    this.x += OneEuro.a(cut, dt) * (v - this.x);
    return this.x;
  }
  reset() { this.x = null; this.dx = 0; }
}

const LINKS = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],
               [9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];

/* ---------- estado por mão ---------- */
function mkHand() {
  return {
    live: false, seen: -1e9, pts: Array.from({ length: 21 }, () => ({ x: .5, y: .5 })),
    fx: Array.from({ length: 21 }, () => new OneEuro()), fy: Array.from({ length: 21 }, () => new OneEuro()),
    pinch: false, armed: 0, released: 0, justDown: false, justUp: false, strength: 0,
  };
}
export const hands = [mkHand(), mkHand()];   // 0 = esquerda, 1 = direita
export const cursor = { x: .5, y: .5, active: false, down: false, hand: null };

const cam = { on: false, loading: false, stream: null, det: null, video: null, last: -1, lastT: 0, busy: false };
export const tracking = () => cam.on;

/* ---------- ligar ---------- */
export async function startHands() {
  if (native) { cam.on = true; window.NativeXR.hands(true); emit('hands', true); return true; }
  if (cam.on || cam.loading) return cam.on;
  cam.loading = true; toast('Carregando hand tracking…');
  try {
    // Ask for the camera immediately while the click/pinch still has user activation.
    cam.stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 30 } },
    });
    const v = document.createElement('video');
    v.playsInline = true; v.muted = true; v.srcObject = cam.stream;
    v.style.cssText = 'position:fixed;left:-9999px;width:640px;height:480px';
    document.body.appendChild(v); await v.play();
    cam.video = v;

    // Load the model after permission is granted, keeping the request fast and reliable on mobile.
    const { FilesetResolver, HandLandmarker } = await import(`${MP}/vision_bundle.mjs`);
    const files = await FilesetResolver.forVisionTasks(`${MP}/wasm`);
    const make = d => HandLandmarker.createFromOptions(files, {
      baseOptions: { modelAssetPath: MODEL, delegate: d },
      runningMode: 'VIDEO', numHands: 2,
      // limiares baixos: perder a mão por um frame é o que faz ela "piscar"
      minHandDetectionConfidence: .45, minHandPresenceConfidence: .4, minTrackingConfidence: .45,
    });
    try { cam.det = await make('GPU'); } catch { cam.det = await make('CPU'); }

    cam.on = true; cam.loading = false;
    emit('hands', true); toast('Hand tracking ativo');
    return true;
  } catch (e) {
    if (cam.stream) cam.stream.getTracks().forEach(t => t.stop());
    if (cam.video) cam.video.remove();
    cam.stream = cam.video = null;
    cam.loading = false;
    toast(location.protocol === 'https:' ? 'Câmera bloqueada' : 'A câmera exige HTTPS');
    return false;
  }
}
export function stopHands() {
  if (cursor.down) { cursor.down = false; emit('pinchcancel', cursor); }
  if (native) window.NativeXR.hands(false);
  cam.on = false;
  if (cam.stream) cam.stream.getTracks().forEach(t => t.stop());
  if (cam.video) cam.video.remove();
  cam.stream = cam.video = null;
  hands.forEach(h => { h.live = false; h.pinch = false; });
  cursor.active = false; cursor.down = false;
  emit('hands', false);
}

/* ---------- detecção (desacoplada do render para não derrubar o fps) ---------- */
const DET_MS = 68;                  // ~15 Hz: preserva CPU/GPU para render e janelas
const GRACE = 280;                  // ms que a mão continua válida após sumir → não pisca
const PINCH_IN = .40, PINCH_OUT = .62;   // histerese: fecha em 0.40, só abre em 0.62

let nativeResult = null, nativeSeen = -1e9;
if (native) window.nextvrHands = (result, sx = 1, sy = 1) => {
  for (const hand of result.landmarks || []) for (const p of hand) { p.x = (p.x - .5) * sx + .5; p.y = (p.y - .5) * sy + .5; }
  nativeResult = result; nativeSeen = performance.now();
};
function detect(now) {
  if (!cam.on || cam.busy || document.hidden || now - cam.lastT < DET_MS) return;
  let res = null;
  if (native) {
    if (!nativeResult && now - nativeSeen <= GRACE) return;
    res = nativeResult || { landmarks: [], handedness: [] }; nativeResult = null;
  } else {
    if (!cam.det || cam.video.readyState < 2 || cam.video.currentTime === cam.last) return;
    cam.last = cam.video.currentTime;
    try { res = cam.det.detectForVideo(cam.video, now); } catch { return; }
  }
  cam.lastT = now; cam.busy = true;

  const cats = res.handedness || res.handednesses || [];
  const got = [null, null];
  (res.landmarks || []).slice(0, 2).forEach((lm, i) => {
    const c = cats[i] && cats[i][0]; if (!c) return;
    // câmera traseira não espelha: "Left" do MediaPipe é a mão esquerda de verdade
    got[c.categoryName === 'Left' ? 0 : 1] = lm;
  });

  for (let i = 0; i < 2; i++) {
    const h = hands[i], lm = got[i];
    if (!lm) {
      if (now - h.seen > GRACE) { h.live = false; if (h.pinch) { h.pinch = false; h.justUp = true; } h.armed = 0; }
      continue;
    }
    if (!h.live) { h.fx.forEach(f => f.reset()); h.fy.forEach(f => f.reset()); }
    h.live = true; h.seen = now;

    const g = Math.max(.4, Math.min(2.2, S.handSens));
    for (let k = 0; k < 21; k++) {
      // beta alto = acompanha rápido quando a mão anda; min baixo = firme quando ela para
      h.fx[k].min = 1.0 * g; h.fx[k].beta = .035 * g;
      h.fy[k].min = 1.0 * g; h.fy[k].beta = .035 * g;
      h.pts[k].x = h.fx[k].filter(lm[k].x, now);
      h.pts[k].y = h.fy[k].filter(lm[k].y, now);
    }

    // pinça normalizada pelo tamanho da mão → funciona perto e longe da câmera
    const p = h.pts;
    const span = Math.hypot(p[0].x - p[9].x, p[0].y - p[9].y) || .12;
    const d = Math.hypot(p[4].x - p[8].x, p[4].y - p[8].y) / span;
    h.strength = Math.max(0, Math.min(1, 1 - (d - PINCH_IN) / (PINCH_OUT - PINCH_IN)));

    const need = Math.max(1, S.pinchHold | 0);   // frames de confirmação → sem clique acidental
    if (!h.pinch) {
      if (d < PINCH_IN) { if (++h.armed >= need) { h.pinch = true; h.justDown = true; h.armed = 0; } }
      else h.armed = 0;
    } else {
      if (d > PINCH_OUT) { if (++h.released >= need) { h.pinch = false; h.justUp = true; h.released = 0; } }
      else h.released = 0;
    }
  }

  // o cursor segue a mão que está pinçando; senão, a mais recente
  const pick = hands.find(h => h.live && h.pinch) || hands.filter(h => h.live).sort((a, b) => b.seen - a.seen)[0];
  if (pick) {
    const tip = pick.pts[8], thumb = pick.pts[4];
    cursor.x = (tip.x + thumb.x) / 2;            // ponto entre os dois dedos: é onde o olho espera
    cursor.y = (tip.y + thumb.y) / 2;
    cursor.active = true; cursor.hand = pick;
    if (pick.justDown) { cursor.down = true; emit('pinchdown', cursor); }
    if (pick.justUp) { cursor.down = false; emit('pinchup', cursor); }
  } else { cursor.active = false; if (cursor.down) { cursor.down = false; emit('pinchcancel', cursor); } }
  hands.forEach(h => { h.justDown = false; h.justUp = false; });
  cam.busy = false;
}

/* ---------- desenho: SEMPRE por cima das janelas, dock e teclado ---------- */
const cv = document.getElementById('overlay');
const ctx = cv.getContext('2d');
let overlayDpr = 1;
function fit() {
  overlayDpr = native ? 1 : Math.min(devicePixelRatio, 1.5); // avoid a 4K hand canvas on a phone
  cv.width = viewport.width * overlayDpr; cv.height = viewport.height * overlayDpr;
}
fit(); on('resize', fit);

function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, cv.width, cv.height);
  if (!cam.on || !S.handsOn) return;
  const W = cv.width, H = cv.height, s = overlayDpr;

  if (S.handDraw) {
    for (const h of hands) {
      if (!h.live) continue;
      const fade = Math.max(.25, 1 - (performance.now() - h.seen) / 280);
      const X = i => h.pts[i].x * W, Y = i => h.pts[i].y * H;

      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.strokeStyle = `rgba(0,0,0,${.4 * fade})`; ctx.lineWidth = 9 * s;
      for (const [a, b] of LINKS) { ctx.beginPath(); ctx.moveTo(X(a), Y(a)); ctx.lineTo(X(b), Y(b)); ctx.stroke(); }
      ctx.strokeStyle = h.pinch ? `rgba(255,255,255,${fade})` : `rgba(155,186,255,${.92 * fade})`;
      ctx.lineWidth = 4.5 * s;
      for (const [a, b] of LINKS) { ctx.beginPath(); ctx.moveTo(X(a), Y(a)); ctx.lineTo(X(b), Y(b)); ctx.stroke(); }
      ctx.fillStyle = `rgba(255,255,255,${.95 * fade})`;
      for (let i = 0; i < 21; i++) { ctx.beginPath(); ctx.arc(X(i), Y(i), (i % 4 === 0 ? 5 : 3.4) * s, 0, 7); ctx.fill(); }
    }
  }

  if (cursor.active) {
    const x = cursor.x * W, y = cursor.y * H;
    const r = (cursor.down ? 13 : 17) * s;
    ctx.beginPath(); ctx.arc(x, y, r + 3 * s, 0, 7);
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, r, 0, 7);
    ctx.lineWidth = 3.5 * s; ctx.strokeStyle = cursor.down ? '#fff' : 'rgba(155,186,255,.95)'; ctx.stroke();
    const k = cursor.hand ? cursor.hand.strength : 0;
    if (k > .05 && !cursor.down) {   // anel de confirmação: você vê o pinch chegando
      ctx.beginPath(); ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + k * 2 * Math.PI);
      ctx.lineWidth = 5 * s; ctx.strokeStyle = '#8de6c8'; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(x, y, 3 * s, 0, 7); ctx.fillStyle = '#fff'; ctx.fill();
  }
}

onFrame((dt, now) => { detect(now); draw(); });

if (native) {
  window.nextvrTrigger = down => {
    cursor.x = cursor.y = .5; cursor.active = true; cursor.down = down;
    emit(down ? 'pinchdown' : 'pinchup', cursor);
    if (!down) cursor.active = false;
  };
}
