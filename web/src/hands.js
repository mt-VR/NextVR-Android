// Adaptador de hand tracking: agora usa NovaMR MediaPipe Hands JS (web), no lugar
// do PhoneXR/OrangeHanding nativo. O resto da shell (pinch, cursor, drag/resize,
// near-touch, fist-grab, hand-targets) continua consumindo o mesmo formato de frame
// que o antigo nextvrHands emitia; o módulo novamr-hands.js é que o produz.
//
// A câmera traseira do passthrough continua aberta nativamente em GL. O MediaPipe JS
// abre uma segunda sessão de câmera (a maioria dos Android modernos permite); se o
// aparelho não permitir, ele cai para o modo sem mãos (nenhuma infraestrutura antiga
// de detector Java/GPU volta a ser ligada).
import { settings as S, on, emit, toast, onFrame, native, viewport, reportHandFrame, recenter } from './core.js';
import { HandClickState, ClickDragArbiter } from './hand-input.js';
import { startNovaHands, stopNovaHands, novamrTracking, setRecenterProgress } from './novamr-hands.js';
export const hands = [];
export const cursor = { x: .5, y: .5, active: false, down: false, phase: 'hovering', hand: null, mode: 'idle' };
const clickState = new HandClickState();
const pressArbiter = new ClickDragArbiter();
const TAN_Y = Math.tan(36 * Math.PI / 180), TAN_X = TAN_Y * 1.5;
let enabled = false, lastFrame = -Infinity, scaleX = 1, scaleY = 1, visual = null, validForMs = 500;
export const tracking = () => enabled && novamrTracking();
export async function startHands() {
  if (!native) { toast('Hand tracking requer o app Android.'); return false; }
  const ok = await startNovaHands();
  if (ok) { enabled = true; return true; }
  enabled = false;
  emit('hands', false);
  toast('Não foi possível abrir a câmera para o tracking das mãos.');
  return false;
}
function emitClickEvents(events){ for(const event of events) emit(`pinch${event}`, cursor); }
function cancel() {
  const events = clickState.cancel();
  pressArbiter.reset();
  cursor.down = cursor.active = false; cursor.phase = clickState.phase; cursor.hand = null; cursor.mode = 'idle';
  resetCursorVelocity();
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

// Recebe frames emitidos pelo novamr-hands.js (formato compatível com o phonehands do windows.js).
on('phonehands', packet => {
  if(!enabled) return;
  const now=performance.now();
  lastFrame=now;
  hands.splice(0,hands.length,...(packet.hands||[]));
  emit('handframe', {hands, timestampNs: now*1e6});
  // Consumidos por near-touch/fist no adaptador espacial.
  const consumed=packet.consumed||new Set();
  const available=hands.filter(h=>!consumed.has(h.id));
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
});

/* ---------- recentramento por pinça longa (3s) no ar ---------- */
const HOLD_MS = 3000;
let holdStart = 0, holdHandId = null, holdProgress = 0, holdTimer = 0;

function cancelHold() {
  holdStart = 0; holdHandId = null; holdProgress = 0;
  setRecenterProgress(0,0,0);
}
onFrame(() => {
  if (!native) return;
  const now = performance.now();
  // A pinça longa só dispara quando NÃO está em cima de nenhuma UI (hover/shell/dock/janela),
  // senão cada arrastar/drag de janela acabava recentrando depois de 3s.
  const overUi = cursor.mode !== 'idle' || cursor.phase !== 'hovering';
  if (!overUi && clickState.down && cursor.active && cursor.hand) {
    if (holdHandId !== clickState.handId || holdStart === 0) {
      holdHandId = clickState.handId; holdStart = now; holdProgress = 0;
    }
    holdProgress = Math.min(1, (now - holdStart) / HOLD_MS);
    // Anel de progresso segue o cursor da mão que está segurando a pinça.
    setRecenterProgress(cursor.x * viewport.width, cursor.y * viewport.height, holdProgress);
    if (holdProgress >= 1) {
      setRecenterProgress(0,0,0);
      cancelHold();
      recenter();
      return;
    }
  } else {
    if (holdProgress > 0) cancelHold();
  }
});

const canvas=document.getElementById('overlay');
canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
onFrame(()=>{
  // Desenho das mãos agora é DOM (canvas #novamr-canvas + cursores) — nada no overlay antigo.
  if(!native && visual!==!!S.handDraw){visual=!!S.handDraw;}
  if(hands.length && performance.now()-lastFrame>validForMs){
    hands.length=0;cancel();cancelHold();emit('phonehands',{hands:[],consumed:new Set(),scaleX,scaleY});
  }
});

// Chaveamento de visualização (desenhado pelo próprio módulo no canvas separado).
if (native) window.nextvrHands = () => {}; // não usado mais; o novamr-hands alimenta 'phonehands'
