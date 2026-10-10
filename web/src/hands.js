// Android PhoneXR hands adapter. No web detector, landmark filter, skeleton drawing or pinch
// thresholds here: OrangeHanding + PhoneXrHands + the fork's native GL renderer own those systems.
// Dock invocation is NOT via pinch: the palm+pinch dock gesture has been removed. Other PhoneXR
// gestures (pinch click, fist grab, direct touch, ray) remain unchanged.
import { settings as S, on, emit, toast, onFrame, native, viewport, reportHandFrame } from './core.js';
export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, hand: null };
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 1, scaleY = 1, visual = null, validForMs = 500;
export const tracking = () => enabled;
export async function startHands() {
  if (!native) { toast('PhoneXR hands require the Android camera pipeline.'); return false; }
  enabled = true; window.NativeXR.hands(true); emit('hands', true); return true;
}
function cancel() {
  if (cursor.down) emit('pinchcancel', cursor);
  cursor.down = cursor.active = false; cursor.hand = null;
  resetCursorVelocity();
}
export function stopHands() {
  cancel(); hands.length = 0; enabled = false; lastFrame = -Infinity;
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
  emit('handframe',{...frame,hands});
  const consumed=new Set();
  const packet={ hands, consumed, scaleX, scaleY };
  // The spatial window adapter handles PhoneXR fist-grab and NEAR contacts before FAR pointing.
  emit('phonehands', packet);
  if(packet.blockFar){cancel();return;}
  const available=hands.filter(h=>!packet.consumed.has(h.id));
  const chosen=(cursor.down && available.find(h=>h.id===cursor.hand?.id))
    || available.find(h=>h.pinching) || [...available].sort((a,b)=>b.palmWidth-a.palmWidth)[0];
  if (!chosen) { cancel(); return; }
  if (cursor.hand && cursor.hand.id!==chosen.id) cancel();
  const wasDown=cursor.down;
  const point=screenPoint(chosen.aim);
  updateCursorVelocity(point, now);
  cursor.x=point.x;cursor.y=point.y;cursor.active=true;cursor.hand=chosen;cursor.down=chosen.pinching;
  if (cursor.down && !wasDown) emit('pinchdown',cursor);
  else if (!cursor.down && wasDown) emit('pinchup',cursor);
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
