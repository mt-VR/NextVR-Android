// Android hand-tracking adapter (detector: com.nextvr.handtrack; gesture semantics: PhoneXR-derived
// post-processing). No web detector, landmark filter, skeleton drawing or pinch
// thresholds here: OrangeHanding + PhoneXrHands + the fork's native GL renderer own those systems.
// Dock invocation is NOT via pinch: the palm+pinch dock gesture has been removed. Other PhoneXR
// gestures (pinch click, fist grab, direct touch, ray) remain unchanged.
import { settings as S, on, emit, toast, onFrame, native, viewport, reportHandFrame } from './core.js';
import { HandClickState, ClickDragArbiter } from './hand-input.js';
export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, phase: 'hovering', hand: null, mode: 'idle' };
const clickState = new HandClickState();
const pressArbiter = new ClickDragArbiter();
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 2*TAN_X, scaleY = 2*TAN_Y, visual = null, validForMs = 500;
export const tracking = () => enabled;
export async function startHands() {
  if (!native) { toast('Hand tracking requires the Android camera pipeline.'); return false; }
  enabled = true; window.NativeXR.hands(true); emit('hands', true); return true;
}
function emitClickEvents(events) {
  for (const event of events) emit(`pinch${event}`, cursor);
}
function cancel() {
  const events = clickState.cancel();
  pressArbiter.reset();
  cursor.down = cursor.active = false; cursor.phase = clickState.phase; cursor.hand = null; cursor.mode = 'idle';
  resetCursorVelocity();
  emitClickEvents(events);
}
/** Cancel an in-progress ray press before another hand gesture takes ownership. */
export function cancelHandInput() { cancel(); }
export function stopHands() {
  cancel(); hands.length = 0; enabled = false; lastFrame = -Infinity;
  emit('phonehands', { hands: [], consumed: new Set(), scaleX, scaleY });
  if (native) window.NativeXR.hands(false);
  emit('hands', false);
}
/** aim do native vem como (aimX,aimY) = (tan_x * sx_mapping, tan_y * sy_mapping), onde
 *  sx_mapping = spanX = 2(1+|p8|)/p0 (dimensão horizontal real da projeção Cardboard em
 *  unidades de tangente). scaleX/scaleY recebidos do native são mappingX/mappingY (razão
 *  pro spanX relativo ao FOV de referência de 36°), então convertemos:
 *    spanX = mappingX * 2*TAN_X_REF,  spanY = mappingY * 2*TAN_Y_REF
 *  e mapeamos pra NDC [0,1] com divisão direta. Corrige o cursor deslocado/olhos diferentes. */
export function screenPoint(tangent) {
  const sx = scaleX * 2*TAN_X, sy = scaleY * 2*TAN_Y;
  return { x: .5 + tangent[0] / sx, y: .5 - tangent[1] / sy };
}

/* Predição do cursor só para apresentação — o mesmo princípio do Frame.predicted() nativo:
 * movimento contínuo (arrastar/redimensionar janela, alvo do raio/anel) é extrapolado até a
 * taxa do display, então a janela e o ponteiro deslizam em vez de andar em degraus na taxa do
 * tracking. Decisões de gesto (pinchdown/pinchup, hit-test de clique, input no DOM) usam SEMPRE
 * a detecção real, nunca a posição predita. */
const CURSOR_PREDICT_MAX_MS = 250;      // no máximo um intervalo normal de tracking
const CURSOR_PREDICT_MAX_SPEED = 1.6;   // unidades normalizadas/s — um movimento rápido de mão
const CURSOR_PREDICT_MAX_STEP = .06;    // nunca extrapolar mais que isso por eixo
let cursorVel = { x: 0, y: 0 }, cursorAt = 0, cursorStampNs = 0;

export function predictedCursor(nowMs = performance.now()) {
  if (!cursor.active) return { x: cursor.x, y: cursor.y };
  const age = nowMs - cursorAt;
  if (!(age > 0) || age > CURSOR_PREDICT_MAX_MS) return { x: cursor.x, y: cursor.y };
  const t = age / 1000, clamp = v => Math.max(-CURSOR_PREDICT_MAX_STEP, Math.min(CURSOR_PREDICT_MAX_STEP, v));
  return { x: Math.min(1, Math.max(0, cursor.x + clamp(cursorVel.x * t))),
    y: Math.min(1, Math.max(0, cursor.y + clamp(cursorVel.y * t))) };
}
function updateCursorVelocity(point, now, stampNs = 0) {
  // Velocity on the CAPTURE timeline when the frame carries one (timestampNs): delivery gaps
  // jitter with the WebView drain cadence and made the same hand motion extrapolate differently
  // frame to frame — the drift-then-snap that read as the cursor "wandering until the next frame".
  const gap = stampNs > 0 && cursorStampNs > 0 ? (stampNs - cursorStampNs) / 1e9
    : (cursorAt > 0 ? (now - cursorAt) / 1000 : -1);
  if (cursor.active && gap > .004 && gap < .3) {
    const limit = v => Math.max(-CURSOR_PREDICT_MAX_SPEED, Math.min(CURSOR_PREDICT_MAX_SPEED, v));
    // Velocidade com low-pass: acompanha o movimento sem amplificar o jitter do landmark.
    cursorVel.x += (limit((point.x - cursor.x) / gap) - cursorVel.x) * .35;
    cursorVel.y += (limit((point.y - cursor.y) / gap) - cursorVel.y) * .35;
    // A resting hand gets no extrapolation: a sub-noise velocity would drift the display between
    // frames while the hand is perfectly still.
    if (Math.hypot(cursorVel.x, cursorVel.y) < .12) cursorVel.x = cursorVel.y = 0;
  } else if (!(gap >= 0 && gap <= .004)) {
    cursorVel.x = cursorVel.y = 0;   // mão parada, nova ou volta após lacuna: sem predição
  }
  // A burst of queued frames arriving in one drain keeps the estimate — only the base moves.
  cursorAt = now;
  cursorStampNs = stampNs > 0 ? stampNs : 0;
}
function resetCursorVelocity() { cursorVel.x = cursorVel.y = 0; cursorAt = 0; cursorStampNs = 0; }
if (native) window.nextvrHands = (frame, sx = 1, sy = 1) => {
  if (!enabled) return;
  reportHandFrame();
  const now = performance.now();
  scaleX=sx;scaleY=sy;lastFrame=now;
  // Floor of 1 s: opening a floating window stalls the WebView/main thread briefly, delaying
  // frame delivery; a transient stall must not expire the hand state and flicker the cursor.
  // Real tracking loss is still signalled explicitly (empty frames / stopHands), not by this timer.
  validForMs=Math.max(1000,Math.min(1500,Number(frame.validForMs)||500));
  hands.splice(0,hands.length,...(frame.hands || []));
  emit('handframe',{...frame,hands});
  const consumed=new Set();
  const packet={ hands, consumed, scaleX, scaleY };
  // The spatial window adapter handles PhoneXR fist-grab and NEAR contacts before FAR pointing.
  emit('phonehands', packet);
  if(packet.blockFar){cancel();return;}
  const available=hands.filter(h=>!packet.consumed.has(h.id));
  const chosen=(clickState.down && available.find(h=>h.id===clickState.handId))
    || available.find(h=>h.pinching) || [...available].sort((a,b)=>b.palmWidth-a.palmWidth)[0];
  if (!chosen) { cancel(); return; }
  const point=screenPoint(chosen.aim);
  updateCursorVelocity(point, now, Number(frame.timestampNs) || 0);
  cursor.x=point.x;cursor.y=point.y;cursor.active=true;cursor.hand=chosen;
  // A motion-model prediction keeps the cursor continuous across a missed detection but must
  // never touch the gesture machine: no press can START, RELEASE, or complete from predicted
  // samples. Gesture edges come only from real detections (or a real empty frame, which cancels).
  const clickEvents=chosen.predicted?[]:clickState.update(chosen.id, chosen.pinching);
  if (clickEvents.includes('down'))
    pressArbiter.begin(chosen.id,point.x*viewport.width,point.y*viewport.height,now);
  else if (clickEvents.includes('up')) pressArbiter.end();
  else if (clickEvents.includes('cancel')) pressArbiter.reset();
  // Only real detections classify click-versus-drag: a prediction gliding on would fake movement.
  if (clickState.down && !chosen.predicted)
    pressArbiter.sample(chosen.id,point.x*viewport.width,point.y*viewport.height,now);
  cursor.mode=pressArbiter.mode;
  cursor.down=clickState.down;cursor.phase=clickState.phase;
  emitClickEvents(clickEvents);
};
// Clear the old reference canvas. Native silhouettes / drop / beam / target ring are rendered in GL.
const canvas=document.getElementById('overlay');
canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
onFrame(()=>{
  if (native && visual!==!!S.handDraw) { visual=!!S.handDraw; window.NativeXR.handVisuals?.(visual); }
  if (hands.length && performance.now()-lastFrame>validForMs) {
    hands.length=0;cancel();emit('phonehands',{hands:[],consumed:new Set(),scaleX,scaleY});
  }
});
