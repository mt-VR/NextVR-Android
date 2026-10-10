// MediaPipe's native rear-camera pipeline supplies the landmarks (the webview must not open a
// second camera over the passthrough). Draw the supplied hand contour/pinch cursors on the camera
// overlay; the native PhoneXR pointer, fist-drag and direct-touch interactions remain intact.
// Dock invocation is NOT via palm+pinch: only pinching the detached grab bar moves the dock.
import { settings as S, on, emit, toast, onFrame, native, viewport, reportHandFrame } from './core.js';
import { HandClickState } from './hand-input.js';
import { HandOverlay } from './hand-overlay.js';
export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, phase: 'hovering', hand: null };
const clickState = new HandClickState();
const canvas=document.getElementById('overlay');
canvas.width=viewport.width;canvas.height=viewport.height;
const handOverlay=new HandOverlay(canvas);
const clearHandsOverlay=()=>handOverlay.clear();
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 1, scaleY = 1, validForMs = 500;
export const tracking = () => enabled;
export async function startHands() {
  if (!native) { toast('MediaPipe hand tracking is available in the Android camera view.'); return false; }
  enabled = true; window.NativeXR.hands(true); emit('hands', true); return true;
}
function emitClickEvents(events) {
  for (const event of events) emit(`pinch${event}`, cursor);
}
function cancel() {
  const events = clickState.cancel();
  cursor.down = cursor.active = false; cursor.phase = clickState.phase; cursor.hand = null;
  resetCursorVelocity();
  emitClickEvents(events);
}
/** Cancel an in-progress ray press before another hand gesture takes ownership. */
export function cancelHandInput() { cancel(); }
export function stopHands() {
  cancel(); hands.length = 0; enabled = false; lastFrame = -Infinity;clearHandsOverlay();
  emit('phonehands', { hands: [], consumed: new Set(), scaleX, scaleY });
  if (native) window.NativeXR.hands(false);
  emit('hands', false);
}
export function screenPoint(tangent) { return { x: .5 + tangent[0] / (2*TAN_X), y: .5 - tangent[1] / (2*TAN_Y) }; }

/* Predição do cursor só para apresentação — o mesmo princípio do Frame.predicted() nativo:
 * movimento contínuo (arrastar/redimensionar janela, alvo do raio/anel) é extrapolado até a
 * taxa do display, então a janela e o ponteiro deslizam em vez de andar em degraus na taxa do
 * tracking. Decisões de gesto (pinchdown/pinchup, hit-test de clique, input no DOM) usam SEMPRE
 * a detecção real, nunca a posição predita. */
const CURSOR_PREDICT_MAX_MS = 250;      // no máximo um intervalo normal de tracking
const CURSOR_PREDICT_MAX_SPEED = 1.6;   // unidades normalizadas/s — um movimento rápido de mão
const CURSOR_PREDICT_MAX_STEP = .06;    // nunca extrapolar mais que isso por eixo
let cursorVel = { x: 0, y: 0 }, cursorAt = 0;

export function predictedCursor(nowMs = performance.now()) {
  if (!cursor.active) return { x: cursor.x, y: cursor.y };
  const age = nowMs - cursorAt;
  if (!(age > 0) || age > CURSOR_PREDICT_MAX_MS) return { x: cursor.x, y: cursor.y };
  const t = age / 1000, clamp = v => Math.max(-CURSOR_PREDICT_MAX_STEP, Math.min(CURSOR_PREDICT_MAX_STEP, v));
  return { x: Math.min(1, Math.max(0, cursor.x + clamp(cursorVel.x * t))),
    y: Math.min(1, Math.max(0, cursor.y + clamp(cursorVel.y * t))) };
}
function updateCursorVelocity(point, now) {
  const gap = (now - cursorAt) / 1000;
  if (cursor.active && gap > .004 && gap < .3) {
    const limit = v => Math.max(-CURSOR_PREDICT_MAX_SPEED, Math.min(CURSOR_PREDICT_MAX_SPEED, v));
    // Velocidade com low-pass: acompanha o movimento sem amplificar o jitter do landmark.
    cursorVel.x += (limit((point.x - cursor.x) / gap) - cursorVel.x) * .45;
    cursorVel.y += (limit((point.y - cursor.y) / gap) - cursorVel.y) * .45;
  } else { cursorVel.x = cursorVel.y = 0; }   // mão parada, nova ou volta após lacuna: sem predição
  cursorAt = now;
}
function resetCursorVelocity() { cursorVel.x = cursorVel.y = 0; cursorAt = 0; }
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
  const nativeStamp=Number(frame?.timestampNs);
  handOverlay.update(hands,scaleX,scaleY,now,
    Number.isFinite(nativeStamp)&&nativeStamp>0?nativeStamp/1e6:now);
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
  updateCursorVelocity(point, now);
  cursor.x=point.x;cursor.y=point.y;cursor.active=true;cursor.hand=chosen;
  const clickEvents=clickState.update(chosen.id, chosen.pinching);
  cursor.down=clickState.down;cursor.phase=clickState.phase;
  emitClickEvents(clickEvents);
};
onFrame((dt,now)=>{
  handOverlay.render(dt,now,S.handDraw);
  if (hands.length && performance.now()-lastFrame>validForMs) {
    hands.length=0;cancel();clearHandsOverlay();
    emit('phonehands',{hands:[],consumed:new Set(),scaleX,scaleY});
  }
});
