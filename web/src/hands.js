// Android hand-tracking adapter (detector: com.nextvr.handtrack; gesture semantics: PhoneXR-derived
// post-processing). No web detector, landmark filter, skeleton drawing or pinch
// thresholds here: OrangeHanding + PhoneXrHands + the fork's native GL renderer own those systems.
// Dock invocation is NOT via pinch: the palm+pinch dock gesture has been removed. Other PhoneXR
// gestures (pinch click, fist grab, direct touch, ray) remain unchanged.
import { settings as S, on, emit, toast, onFrame, native, viewport, reportHandFrame } from './core.js';
import { bindSixDofContext, updateHandBoxesFromPacket } from './sixdof.js';
import { HandClickState, ClickDragArbiter } from './hand-input.js';
export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, phase: 'hovering', hand: null, mode: 'idle' };
const clickState = new HandClickState();
const pressArbiter = new ClickDragArbiter();
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 2*TAN_X, scaleY = 2*TAN_Y, visual = null, validForMs = 500;
bindSixDofContext({ getHands: () => ({ list: hands, lastAt: lastFrame }) });
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
const CURSOR_PREDICT_MAX_SPEED = 5.2;   // unidades normalizadas/s — resposta imediata a movimentos rápidos
const CURSOR_PREDICT_MAX_STEP = .15;    // alcance de extrapolação para compensar scanout do display
let cursorVel = { x: 0, y: 0 }, cursorAt = 0, cursorStampNs = 0;
const _perHandCursorState = new Map();

export function predictedCursor(nowMs = performance.now()) {
  if (!cursor.active) return { x: cursor.x, y: cursor.y };
  const rawAge = nowMs - cursorAt;
  if (!(rawAge > 0) || rawAge > CURSOR_PREDICT_MAX_MS) return { x: cursor.x, y: cursor.y };
  const t = (rawAge * 1.42) / 1000, clamp = v => Math.max(-CURSOR_PREDICT_MAX_STEP, Math.min(CURSOR_PREDICT_MAX_STEP, v));
  return { x: Math.min(1, Math.max(0, cursor.x + clamp(cursorVel.x * t))),
    y: Math.min(1, Math.max(0, cursor.y + clamp(cursorVel.y * t))) };
}

export function predictedHandScreenPoint(hand, nowMs = performance.now()) {
  if (!hand || !hand.aim) return { x: .5, y: .5 };
  if (cursor.hand?.id === hand.id && cursor.active) return predictedCursor(nowMs);
  const base = screenPoint(hand.aim);
  const st = _perHandCursorState.get(hand.id);
  if (!st) return base;
  const rawAge = nowMs - st.at;
  if (!(rawAge > 0) || rawAge > CURSOR_PREDICT_MAX_MS) return base;
  const t = (rawAge * 1.42) / 1000, clamp = v => Math.max(-CURSOR_PREDICT_MAX_STEP, Math.min(CURSOR_PREDICT_MAX_STEP, v));
  return {
    x: Math.min(1, Math.max(0, base.x + clamp(st.vx * t))),
    y: Math.min(1, Math.max(0, base.y + clamp(st.vy * t))),
  };
}

function updatePerHandVelocities(list, now, stampNs = 0) {
  const seen = new Set();
  const limit = v => Math.max(-CURSOR_PREDICT_MAX_SPEED, Math.min(CURSOR_PREDICT_MAX_SPEED, v));
  for (const h of list) {
    if (!h || !h.id || !h.aim) continue;
    seen.add(h.id);
    const pt = screenPoint(h.aim);
    const prev = _perHandCursorState.get(h.id);
    if (prev) {
      const gap = stampNs > 0 && prev.stampNs > 0 ? (stampNs - prev.stampNs) / 1e9
        : (prev.at > 0 ? (now - prev.at) / 1000 : -1);
      if (gap > .003 && gap < .3) {
        prev.vx += (limit((pt.x - prev.x) / gap) - prev.vx) * .98;
        prev.vy += (limit((pt.y - prev.y) / gap) - prev.vy) * .98;
        if (Math.hypot(prev.vx, prev.vy) < .04) prev.vx = prev.vy = 0;
      } else if (!(gap >= 0 && gap <= .003)) {
        prev.vx = prev.vy = 0;
      }
      prev.x = pt.x; prev.y = pt.y; prev.at = now; prev.stampNs = stampNs > 0 ? stampNs : 0;
    } else {
      _perHandCursorState.set(h.id, { x: pt.x, y: pt.y, vx: 0, vy: 0, at: now, stampNs: stampNs > 0 ? stampNs : 0 });
    }
  }
  for (const k of [..._perHandCursorState.keys()]) {
    if (!seen.has(k)) _perHandCursorState.delete(k);
  }
}

function updateCursorVelocity(point, now, stampNs = 0) {
  // Velocity on the CAPTURE timeline when the frame carries one (timestampNs): delivery gaps
  // jitter with the WebView drain cadence and made the same hand motion extrapolate differently
  // frame to frame — the drift-then-snap that read as the cursor "wandering until the next frame".
  const gap = stampNs > 0 && cursorStampNs > 0 ? (stampNs - cursorStampNs) / 1e9
    : (cursorAt > 0 ? (now - cursorAt) / 1000 : -1);
  if (cursor.active && gap > .003 && gap < .3) {
    const limit = v => Math.max(-CURSOR_PREDICT_MAX_SPEED, Math.min(CURSOR_PREDICT_MAX_SPEED, v));
    // Velocidade com low-pass ultra-rápido: acompanha o movimento imediatamente com zero delay.
    cursorVel.x += (limit((point.x - cursor.x) / gap) - cursorVel.x) * .95;
    cursorVel.y += (limit((point.y - cursor.y) / gap) - cursorVel.y) * .95;
    // A resting hand gets no extrapolation: a sub-noise velocity would drift the display between
    // frames while the hand is perfectly still.
    if (Math.hypot(cursorVel.x, cursorVel.y) < .05) cursorVel.x = cursorVel.y = 0;
  } else if (!(gap >= 0 && gap <= .003)) {
    cursorVel.x = cursorVel.y = 0;   // mão parada, nova ou volta após lacuna: sem predição
  }
  // A burst of queued frames arriving in one drain keeps the estimate — only the base moves.
  cursorAt = now;
  cursorStampNs = stampNs > 0 ? stampNs : 0;
}
function resetCursorVelocity() { cursorVel.x = cursorVel.y = 0; cursorAt = 0; cursorStampNs = 0; _perHandCursorState.clear(); }
if (native) window.nextvrHands = (frame, sx = 1, sy = 1) => {
  if (!enabled) return;
  reportHandFrame();
  const now = performance.now();
  scaleX=sx;scaleY=sy;lastFrame=now;
  // Floor of 1 s: opening a floating window stalls the WebView/main thread briefly, delaying
  // frame delivery; a transient stall must not expire the hand state and flicker the cursor.
  // Real tracking loss is still signalled explicitly (empty frames / stopHands), not by this timer.
  validForMs=Math.max(1000,Math.min(2500,Number(frame.validForMs)||1000));
  let incomingHands = frame.hands || [];
  const shMode = S.singleHandMode || 'both';
  if (shMode === 'right') {
    incomingHands = incomingHands.filter(h => !h.left && h.id !== 'left');
  } else if (shMode === 'left') {
    incomingHands = incomingHands.filter(h => h.left || h.id === 'left');
  } else if (shMode === 'one' && incomingHands.length > 1) {
    incomingHands = [[...incomingHands].sort((a, b) => (b.palmWidth || 0) - (a.palmWidth || 0))[0]];
  }
  hands.splice(0,hands.length,...incomingHands);
  updatePerHandVelocities(hands, now, Number(frame.timestampNs) || 0);
  emit('handframe',{...frame,hands});
  const consumed=new Set();
  const packet={ hands, consumed, scaleX, scaleY };
  updateHandBoxesFromPacket(packet);
  if (window.__gorillaStereoOverlay) {
    window.__gorillaOnHands?.(now);
    return;
  }
  // The spatial window adapter handles PhoneXR fist-grab and NEAR contacts before FAR pointing.
  emit('phonehands', packet);
  if(packet.blockFar){cancel();emit('handtargets_sync', now);return;}
  const available=hands.filter(h=>!packet.consumed.has(h.id));
  const chosen=(clickState.down && available.find(h=>h.id===clickState.handId))
    || available.find(h=>h.pinching) || [...available].sort((a,b)=>b.palmWidth-a.palmWidth)[0];
  if (!chosen) { cancel(); emit('handtargets_sync', now); return; }
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
  if (!window.__gorillaStereoOverlay && native) {
    const wantVisual = !!S.handDraw;
    if (visual !== wantVisual) {
      visual = wantVisual;
      window.NativeXR.handVisuals?.(wantVisual);
    }
  }
  emitClickEvents(clickEvents);
  if (cursor.down) emit('pinchsample', cursor);
  emit('handtargets_sync', now);
};
// Clear the old reference canvas. Native silhouettes / drop / beam / target ring are rendered in GL.
const canvas=document.getElementById('overlay');
canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
on('handDraw', () => {
  if (!window.__gorillaStereoOverlay && native) {
    visual = !!S.handDraw;
    window.NativeXR.handVisuals?.(visual);
  }
});
onFrame(()=>{
  if (!window.__gorillaStereoOverlay && native) {
    const wantVisual = !!S.handDraw;
    if (visual !== wantVisual) {
      visual = wantVisual;
      window.NativeXR.handVisuals?.(wantVisual);
    }
  }
  if (hands.length && performance.now()-lastFrame>validForMs) {
    hands.length=0;cancel();emit('phonehands',{hands:[],consumed:new Set(),scaleX,scaleY});
  }
});
