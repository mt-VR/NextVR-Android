// Android PhoneXR hands adapter. No web detector, landmark filter, skeleton drawing or pinch
// thresholds here: OrangeHanding + PhoneXrHands + the fork's native GL renderer own those systems.
// Dock invocation is NOT via pinch: the palm+pinch dock gesture has been removed. Other PhoneXR
// gestures (pinch click, fist grab, direct touch, ray) remain unchanged.
import { settings as S, on, emit, toast, onFrame, native, viewport } from './core.js';
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
}
export function stopHands() {
  cancel(); hands.length = 0; enabled = false; lastFrame = -Infinity;
  emit('phonehands', { hands: [], consumed: new Set(), scaleX, scaleY });
  if (native) window.NativeXR.hands(false);
  emit('hands', false);
}
export function screenPoint(tangent) { return { x: .5 + tangent[0] / (2*TAN_X), y: .5 - tangent[1] / (2*TAN_Y) }; }
if (native) window.nextvrHands = (frame, sx = 1, sy = 1) => {
  if (!enabled) return;
  scaleX=sx;scaleY=sy;lastFrame=performance.now();
  validForMs=Math.max(500,Math.min(1500,Number(frame.validForMs)||500));
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
if (native) window.nextvrTrigger = down => {
  if(cursor.hand) cancel();
  cursor.x=cursor.y=.5;cursor.hand=null;cursor.active=true;cursor.down=down;
  emit(down?'pinchdown':'pinchup',cursor);
  if(!down)cursor.active=false;
};
