// Adaptador de hand tracking. O HandTracker NATIVO (Java/MediaPipe GPU) volta a
// ser a fonte de landmarks — ele compartilha os frames YUV da câmera que já
// existem pro passthrough, então não disputa câmera, não causa tela preta.
//
// O módulo novamr-hands.js é o responsável por DESENHAR a silhueta ciano + os
// cursores de pinça em cima do passthrough (em vez do render GL feio do PhoneXR).
// O pipeline de pinch/cursor/drag/recenter por gesto continua idêntico.
import { settings as S, on, emit, toast, onFrame, native, viewport, reportHandFrame, recenter } from './core.js';
import { HandClickState, ClickDragArbiter } from './hand-input.js';
import { startNovaHands, stopNovaHands, novamrTracking, nativePointsToPixelPts, setRecenterProgress } from './novamr-hands.js';
export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, phase: 'hovering', hand: null, mode: 'idle' };
const clickState = new HandClickState();
const pressArbiter = new ClickDragArbiter();
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 1, scaleY = 1, validForMs = 500;
export const tracking = () => enabled && novamrTracking();
export async function startHands() {
  if (!native) { toast('Hand tracking requer o app Android.'); return false; }
  const ok = await startNovaHands();
  enabled = ok;
  if (ok) { emit('hands', true); return true; }
  emit('hands', false);
  toast('Não foi possível iniciar o hand tracking.');
  return false;
}
function emitClickEvents(events){ for(const event of events) emit(`pinch${event}`, cursor); }
function cancel() {
  const events = clickState.cancel();
  pressArbiter.reset();
  cursor.down = cursor.active = false; cursor.phase = clickState.phase; cursor.hand = null; cursor.mode = 'idle';
  resetCursorVelocity();
  setRecenterProgress(0,0,0);
  emitClickEvents(events);
}
export function cancelHandInput() { cancel(); }
export function stopHands() {
  cancel(); hands.length=0; enabled=false; lastFrame=-Infinity;
  stopNovaHands();
  emit('phonehands', { hands: [], consumed: new Set(), scaleX, scaleY });
  emit('hands', false);
}
export function screenPoint(tangent) { return { x: .5 + tangent[0]/(2*TAN_X), y: .5 - tangent[1]/(2*TAN_Y) }; }

const CURSOR_PREDICT_MAX_MS = 250;
const CURSOR_PREDICT_MAX_SPEED = 1.6;
const CURSOR_PREDICT_MAX_STEP = .06;
let cursorVel = { x: 0, y: 0 }, cursorAt = 0;
export function predictedCursor(nowMs = performance.now()) {
  if (!cursor.active) return { x: cursor.x, y: cursor.y };
  const age = nowMs - cursorAt;
  if (!(age>0) || age>CURSOR_PREDICT_MAX_MS) return { x:cursor.x, y:cursor.y };
  const t = age/1000, clamp=v=>Math.max(-CURSOR_PREDICT_MAX_STEP,Math.min(CURSOR_PREDICT_MAX_STEP,v));
  return { x: Math.min(1,Math.max(0,cursor.x+clamp(cursorVel.x*t))),
           y: Math.min(1,Math.max(0,cursor.y+clamp(cursorVel.y*t))) };
}
function updateCursorVelocity(point, now) {
  if (cursor.active && (now-cursorAt)>4 && (now-cursorAt)<300) {
    const gap=(now-cursorAt)/1000;
    const limit=v=>Math.max(-CURSOR_PREDICT_MAX_SPEED,Math.min(CURSOR_PREDICT_MAX_SPEED,v));
    cursorVel.x += (limit((point.x-cursor.x)/gap)-cursorVel.x)*.35;
    cursorVel.y += (limit((point.y-cursor.y)/gap)-cursorVel.y)*.35;
    if (Math.hypot(cursorVel.x,cursorVel.y)<.12) cursorVel.x=cursorVel.y=0;
  } else cursorVel.x=cursorVel.y=0;
  cursorAt=now;
}
function resetCursorVelocity(){ cursorVel.x=cursorVel.y=0; cursorAt=0; }

// ---------- bridge: o Java chama window.nextvrHands(frame, sx, sy) ----------
function consumeNativeFrame(frame, sx, sy) {
  if (!enabled) return;
  scaleX = sx||1; scaleY = sy||1;
  const now=performance.now();
  lastFrame=now;
  hands.length = 0;
  const list = frame?.hands || [];
  for (const raw of list) {
    // calcula pontos em pixels do viewport para o novamr desenhar a silhueta
    raw._pts = null; // não precisa: o GL desenha em 3D alinhado
    // Aim/base já vêm normalizados como tangentes FOV do nativo.
    hands.push(raw);
  }
  emit('handframe', {hands, timestampNs: now*1e6});
  reportHandFrame?.(frame);

  const consumed = new Set();
  const available = hands.filter(h => !consumed.has(h.id));
  const chosen = (clickState.down && available.find(h=>h.id===clickState.handId))
    || available.find(h=>h.pinching) || [...available].sort((a,b)=>(b.palmWidth||.1)-(a.palmWidth||.1))[0];
  if (!chosen) { cancel(); return; }
  const point = screenPoint(chosen.aim);
  updateCursorVelocity(point, now);
  cursor.x=point.x; cursor.y=point.y; cursor.active=true; cursor.hand=chosen;
  const clickEvents = clickState.update(chosen.id, !!chosen.pinching);
  if(clickEvents.includes('down')) pressArbiter.begin(chosen.id, point.x*viewport.width, point.y*viewport.height, now);
  else if(clickEvents.includes('up')) pressArbiter.end();
  else if(clickEvents.includes('cancel')) pressArbiter.reset();
  if(clickState.down) pressArbiter.sample(chosen.id, point.x*viewport.width, point.y*viewport.height, now);
  cursor.mode=pressArbiter.mode;
  cursor.down=clickState.down; cursor.phase=clickState.phase;
  emitClickEvents(clickEvents);
}
if (native) {
  window.nextvrHands = consumeNativeFrame;
}

/* ---------- recentramento por pinça longa (3s) no ar ---------- */
const HOLD_MS = 3000;
let holdStart = 0, holdHandId = null, holdProgress = 0;
function cancelHold() { holdStart=0; holdHandId=null; holdProgress=0; setRecenterProgress(0,0,0); }
onFrame(() => {
  if (!native) return;
  const now = performance.now();
  const overUi = cursor.mode !== 'idle' || cursor.phase !== 'hovering';
  if (!overUi && clickState.down && cursor.active && cursor.hand) {
    if (holdHandId !== clickState.handId || holdStart === 0) { holdHandId = clickState.handId; holdStart = now; holdProgress = 0; }
    holdProgress = Math.min(1, (now - holdStart) / HOLD_MS);
    setRecenterProgress(cursor.x*viewport.width, cursor.y*viewport.height, holdProgress);
    if (holdProgress >= 1) { setRecenterProgress(0,0,0); cancelHold(); recenter(); return; }
  } else if (holdProgress > 0) cancelHold();
});

onFrame(()=>{
  if(hands.length && performance.now()-lastFrame>validForMs){
    hands.length=0;cancel();
    emit('phonehands',{hands:[],consumed:new Set(),scaleX,scaleY});
  }
});
