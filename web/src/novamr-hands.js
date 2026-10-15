// NovaMR Hand Tracking — DESENHO da silhueta ciano + cursores de pinça.
// Os landmarks vêm do MediaPipe Nativo (Java/GPU), que compartilha os frames da
// câmera do passthrough — sem disputa, sem segunda câmera, sem tela preta.
// Este módulo NÃO abre câmera nenhuma. Ele só consome os frames emitidos por hands.js.
import { on, native, viewport } from './core.js';

const canvas = document.createElement('canvas');
canvas.id = 'novamr-canvas';
const ctx = canvas.getContext('2d');
const cursor1 = document.createElement('div');
cursor1.className = 'novamr-cursor';
const cursor2 = document.createElement('div');
cursor2.className = 'novamr-cursor';

const holdRing = document.createElementNS('http://www.w3.org/2000/svg','svg');
holdRing.setAttribute('viewBox','0 0 80 80');
holdRing.style.cssText = 'position:absolute;width:80px;height:80px;z-index:4;pointer-events:none;transform:translate(-50%,-50%);opacity:0;transition:opacity .15s';
const holdRingBg = document.createElementNS('http://www.w3.org/2000/svg','circle');
holdRingBg.setAttribute('cx','40');holdRingBg.setAttribute('cy','40');holdRingBg.setAttribute('r','34');
holdRingBg.setAttribute('fill','none');holdRingBg.setAttribute('stroke','rgba(255,255,255,.25)');holdRingBg.setAttribute('stroke-width','4');
const holdRingFg = document.createElementNS('http://www.w3.org/2000/svg','circle');
holdRingFg.setAttribute('cx','40');holdRingFg.setAttribute('cy','40');holdRingFg.setAttribute('r','34');
holdRingFg.setAttribute('fill','none');holdRingFg.setAttribute('stroke','#27e8ff');holdRingFg.setAttribute('stroke-width','4');
holdRingFg.setAttribute('stroke-linecap','round');
const CIRC=2*Math.PI*34;
holdRingFg.setAttribute('stroke-dasharray',CIRC);
holdRingFg.setAttribute('stroke-dashoffset',CIRC);
holdRingFg.setAttribute('transform','rotate(-90 40 40)');
holdRing.appendChild(holdRingBg); holdRing.appendChild(holdRingFg);

let installed = false;

function ensureDom() {
  if (installed) return;
  installed = true;
  const host = document.getElementById('head-overlay') || document.body;
  [canvas, cursor1, cursor2, holdRing].forEach(el => host.appendChild(el));
  canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none;background:transparent';
  cursor1.style.cssText = cursor2.style.cssText = 'position:absolute;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle,#27e8ff 0%,#00bfff 45%,rgba(0,191,255,0) 70%);box-shadow:0 0 18px #00dfff,0 0 36px #00bfff;transform:translate(-50%,-50%) scale(0);z-index:3;pointer-events:none;transition:transform .1s ease-out';
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}
function resizeCanvas() { canvas.width = viewport.width; canvas.height = viewport.height; }

// ---------- desenho da silhueta (igual ao HTML do usuário) ----------
function dist(a,b){ return Math.hypot(a.x-b.x, a.y-b.y); }
function normal(a,b){
  const dx=b.x-a.x, dy=b.y-a.y;
  const len=Math.hypot(dx,dy)||1;
  return { x:-dy/len, y:dx/len };
}
function fingerSides(points) {
  const left=[], right=[];
  for(let i=0;i<points.length;i++){
    let n;
    if(i===0) n = normal(points[0], points[1]);
    else if(i===points.length-1) n = normal(points[i-1], points[i]);
    else {
      const n1=normal(points[i-1],points[i]);
      const n2=normal(points[i],points[i+1]);
      n={x:(n1.x+n2.x)/2, y:(n1.y+n2.y)/2};
      const l=Math.hypot(n.x,n.y)||1; n.x/=l; n.y/=l;
    }
    const width = i===points.length-1 ? 5 : Math.max(7, dist(points[i], points[Math.min(i+1,points.length-1)])*0.32);
    left.push({x:points[i].x+n.x*width, y:points[i].y+n.y*width});
    right.push({x:points[i].x-n.x*width, y:points[i].y-n.y*width});
  }
  return {left,right};
}
function drawFinger(points) {
  const {left,right} = fingerSides(points);
  ctx.beginPath();
  ctx.moveTo(right[0].x,right[0].y);
  for(let i=1;i<right.length;i++) ctx.lineTo(right[i].x,right[i].y);
  for(let i=left.length-1;i>=0;i--) ctx.lineTo(left[i].x,left[i].y);
  ctx.closePath();
  ctx.fillStyle='rgba(39,232,255,.18)';
  ctx.fill();
  ctx.shadowColor='#00dfff'; ctx.shadowBlur=18;
  ctx.strokeStyle='#27e8ff'; ctx.lineWidth=2.5; ctx.lineJoin='round'; ctx.lineCap='round';
  ctx.beginPath();
  ctx.moveTo(right[0].x,right[0].y);
  for(let i=1;i<right.length;i++) ctx.lineTo(right[i].x,right[i].y);
  for(let i=left.length-1;i>=0;i--) ctx.lineTo(left[i].x,left[i].y);
  ctx.closePath();
  ctx.stroke();
  ctx.shadowBlur=0;
}
function drawHandSilhouette(pts) {
  const fingers = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
  ctx.shadowColor='#00dfff'; ctx.shadowBlur=14;
  ctx.strokeStyle='#27e8ff'; ctx.lineWidth=2.2; ctx.lineJoin='round'; ctx.lineCap='round';
  ctx.beginPath();
  ctx.moveTo(pts[0].x,pts[0].y);
  for(const idx of [1,2,5,9,13,17,0]) ctx.lineTo(pts[idx].x,pts[idx].y);
  ctx.stroke();
  ctx.shadowBlur=0;
  for(const f of fingers) drawFinger(f.map(i=>pts[i]));
}

function ptsFromFlat(arr63, w, h, scaleX, scaleY) {
  // points[] são landmarks raw 0..1 (upright). palmScreen usa (p[0]-.5)*scaleX+.5
  // pro hit-test e acerta. O mesmo mapeamento vale pro canvas (Y é invertido por
  // ser top-down no DOM, ao contrário do NDC/palmScreen que usa Y crescente).
  const pts = new Array(21);
  for (let i=0;i<21;i++){
    const u = arr63[i*3];
    const v = arr63[i*3+1];
    // Mirror no X (põe mão no lado correto, câmera traseira).
    pts[i] = { x: (0.5 - (u - 0.5) * scaleX) * w,
               y: (0.5 + (v - 0.5) * scaleY) * h };
  }
  return pts;
}

// Recebe os frames do adaptador hands.js (evento 'handframe') e desenha.
on('handframe', ({hands}) => {
  if (!installed) return;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  cursor1.classList.remove('active'); cursor2.classList.remove('active');
  if (!hands || !hands.length) return;
  for (let i=0;i<Math.min(hands.length,2);i++){
    const h0 = hands[i];
    if (!h0 || !h0._pts) continue;
    const pts = h0._pts;
    const cur = i===0 ? cursor1 : cursor2;
    drawHandSilhouette(pts);
    const thumb=pts[4], idx=pts[8];
    const d=Math.hypot(thumb.x-idx.x,thumb.y-idx.y);
    if(d<45){
      const cx=(thumb.x+idx.x)/2, cy=(thumb.y+idx.y)/2;
      const scale=Math.max(.15,Math.min(1,(45-d)/45));
      cur.style.left=cx+'px';cur.style.top=cy+'px';
      cur.style.transform='translate(-50%,-50%) scale('+scale+')';
      cur.classList.add('active');
    } else {
      cur.style.transform='translate(-50%,-50%) scale(0)';
      cur.classList.remove('active');
    }
  }
});

export function setRecenterProgress(x, y, p) {
  if (p<=0) { holdRing.style.opacity='0'; return; }
  holdRing.style.left = x+'px'; holdRing.style.top = y+'px';
  holdRing.style.opacity = '1';
  holdRingFg.setAttribute('stroke-dashoffset', String(CIRC*(1-p)));
}

// Start/stop — não abre câmera; só liga o HandTracker nativo que compartilha
// os frames da câmera já abertos pelo passthrough.
let started=false;
export async function startNovaHands() {
  if (started) return true;
  ensureDom();
  started = true;
  if (native && window.NativeXR?.hands) {
    try { window.NativeXR.hands(true); } catch(e){}
  }
  return true;
}
export function stopNovaHands() {
  if(!started) return;
  started = false;
  setRecenterProgress(0,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  cursor1.classList.remove('active'); cursor2.classList.remove('active');
  if (native && window.NativeXR?.hands) {
    try { window.NativeXR.hands(false); } catch(e){}
  }
}
export const novamrTracking = () => started;

// Expõe o parser de landmarks para hands.js usar (converte o points flat do
// nativo em [{x,y}] em pixels do viewport, para o novamr desenhar).
export function nativePointsToPixelPts(h, w, hh, sx, sy) {
  if (!h || !h.points || h.points.length<63) return null;
  return ptsFromFlat(h.points, w, hh, sx, sy);
}

(function injectCss(){
  const css = `
    html.native #novamr-canvas{position:absolute;left:0;top:0;width:1200px;height:800px;background:transparent}
    html.native .novamr-cursor{position:absolute}`;
  const tag = document.createElement('style');
  tag.textContent = css;
  document.head.appendChild(tag);
})();
