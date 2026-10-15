// NovaMR Hand Tracking — substituto do PhoneXR, MediaPipe Hands JS direto no WebView.
// Desenho da silhueta ciano (#27e8ff) e cursores de pinça seguindo o HTML fornecido.
// Quando o polegar e o indicador estão próximos, emite os mesmos eventos de PINCH usados
// pelo resto da shell (pinchdown/pinchup), mantendo arrastar, clique e toque em janelas.
import { on, emit, native, viewport } from './core.js';

const video = document.createElement('video');
video.id = 'novamr-camera';
video.autoplay = true;
video.playsInline = true;
video.muted = true;
video.setAttribute('aria-hidden','true');

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

let activeCursor = cursor1;

export function setRecenterProgress(x, y, p) {
  if (p<=0) { holdRing.style.opacity='0'; return; }
  holdRing.style.left = x+'px'; holdRing.style.top = y+'px';
  holdRing.style.opacity = '1';
  holdRingFg.setAttribute('stroke-dashoffset', String(CIRC*(1-p)));
}

let installed = false, rafId = 0, processing = false, mpHands = null, started = false;
let handsSeen = false, lastSeenAt = 0, emittedSeen = null;
function updateTrackingStatus(hasHandsNow) {
  const now = performance.now();
  if (hasHandsNow) {
    handsSeen = true;
    lastSeenAt = now;
  }
  // Vira verde quando detectou pelo menos uma mão nos últimos 500ms;
  // vermelho se mais de 3 se sem mão nenhuma depois de ter visto antes.
  const state = handsSeen && (now - lastSeenAt) < 3000;
  if (state !== emittedSeen) {
    emittedSeen = state;
    emit('hands', state);
  }
}

function ensureDom() {
  if (installed) return;
  installed = true;
  const host = document.getElementById('head-overlay') || document.body;
  // O vídeo NÃO é desenhado na tela: ele fica escondido e é só fonte de frames pro MediaPipe.
  // O passthrough REAL é a câmera nativa em GL (que permanece ligada o tempo todo), como era antes.
  // Canvas e cursores são desenhados por cima, transparentes, só com os contornos ciano das mãos.
  [video, canvas, cursor1, cursor2, holdRing].forEach(el => host.appendChild(el));
  video.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none';
  canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none;background:transparent';
  cursor1.style.cssText = cursor2.style.cssText = 'position:absolute;width:34px;height:34px;border-radius:50%;background:radial-gradient(circle,#27e8ff 0%,#00bfff 45%,rgba(0,191,255,0) 70%);box-shadow:0 0 18px #00dfff,0 0 36px #00bfff;transform:translate(-50%,-50%) scale(0);z-index:3;pointer-events:none;transition:transform .1s ease-out';
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
  const w = viewport.width, h = viewport.height;
  canvas.width = w; canvas.height = h;
}

// ---------- geometria de desenho (idêntica ao HTML fornecido) ----------
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
function addPath(path,q){
  if(!q||!Number.isFinite(q.x)||!Number.isFinite(q.y))return;
  const last=path[path.length-1];
  if(!last||Math.hypot(last.x-q.x,last.y-q.y)>1.5) path.push(q);
}
function addList(path,arr,rev=false){ (rev?[...arr].reverse():arr).forEach(q=>addPath(path,q)); }

function drawHand(landmarks) {
  // MediaPipe entrega coords normalizadas (0..1); para ficar igual ao HTML do usuário,
  // mapeamos direto pro canvas (sem inversão, a câmera não é espelhada).
  const p = landmarks.map(lm => ({ x: lm.x * canvas.width, y: lm.y * canvas.height }));
  const fingerIds = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
  const fingers = fingerIds.map(ids => fingerSides(ids.map(i=>p[i])));
  const avgX = arr => arr.reduce((s,q)=>s+q.x,0)/arr.length;
  const sidePairs = fingers.map((f,i)=>{
    const pts=fingerIds[i].map(ii=>p[ii]);
    return avgX(f.left) < avgX(f.right) ? {left:f.left, right:f.right} : {left:f.right, right:f.left};
  });
  const path=[];
  addPath(path,p[0]);
  addList(path,sidePairs[0].left); addList(path,sidePairs[0].right,true);
  for(let i=1;i<sidePairs.length;i++){
    const cur=sidePairs[i];
    addPath(path,cur.left[0]);
    addList(path,cur.left); addList(path,cur.right,true);
  }
  addPath(path,p[0]);

  ctx.save();
  ctx.beginPath();
  if(path.length){
    ctx.moveTo(path[0].x,path[0].y);
    for(let i=1;i<path.length;i++){
      const a=path[i-1],b=path[i];
      ctx.quadraticCurveTo(a.x,a.y,(a.x+b.x)/2,(a.y+b.y)/2);
    }
    const last=path[path.length-1];
    ctx.lineTo(last.x,last.y); ctx.closePath();
  }
  ctx.strokeStyle='#27e8ff';
  ctx.lineWidth=Math.max(2.2, Math.min(3.2, canvas.width/260));
  ctx.lineJoin='round'; ctx.lineCap='round';
  ctx.shadowColor='#00dfff'; ctx.shadowBlur=5;
  ctx.stroke();
  ctx.restore();
  return p;
}

// ---------- emissão de pinça pro resto da shell ----------
// (Os eventos pinchdown/pinchup são emitidos pelo hands.js a partir do packet
// 'phonehands' que a gente publica abaixo; aqui só atualizamos estado visual
// dos cursores.)
function updatePinch(p, cursorEl) {
  const thumb=p[4], index=p[8];
  const d=dist(thumb,index);
  if(d<45){
    const cx=(thumb.x+index.x)/2, cy=(thumb.y+index.y)/2;
    const scale=Math.max(.15, Math.min(1, (45-d)/45));
    cursorEl.style.left=cx+'px';
    cursorEl.style.top=cy+'px';
    cursorEl.style.transform='translate(-50%,-50%) scale('+scale+')';
    cursorEl.classList.add('active');
  } else {
    cursorEl.style.transform='translate(-50%,-50%) scale(0)';
    cursorEl.classList.remove('active');
  }
}

// ---------- MediaPipe ----------
async function loadMediaPipe() {
  if (mpHands) return mpHands;
  if (typeof window.Hands === 'undefined') {
    await new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js';
      s.onload = () => {
        const s2 = document.createElement('script');
        s2.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js';
        s2.onload = res; s2.onerror = rej;
        document.head.appendChild(s2);
      };
      s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  mpHands = new window.Hands({
    locateFile: f => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`,
  });
  mpHands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.65,
    minTrackingConfidence: 0.65,
  });
  mpHands.onResults(onResults);
  return mpHands;
}

function onResults(results) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  cursor1.classList.remove('active');
  cursor2.classList.remove('active');

  const now = performance.now();
  // Monta um "frame" no mesmo formato que o PhoneXR nativo esperava, para o
  // adaptador espacial (fist-grab, near-touch, etc.) continuar recebendo algo.
  // As métricas 3D (head points) não existem no MediaPipe 2D simples do HTML do
  // usuário — então fist-grab e near-touch ficam desativados; só o raio + pinça
  // permanecem, suficiente para abrir apps e interagir com a dock redesenhada.
  const packet = { hands:[], consumed:new Set(), scaleX:1, scaleY:1 };

  const hasHandsNow = !!(results.multiHandLandmarks && results.multiHandLandmarks.length);
  updateTrackingStatus(hasHandsNow);
  if(hasHandsNow) {
    for(let i=0;i<results.multiHandLandmarks.length;i++){
      const raw = results.multiHandLandmarks[i];
      const handed = results.multiHandedness?.[i];
      // MediaPipe espelha a classificação quando a câmera é frontal. Com câmera
      // traseira sem espelhamento, invertemos o rótulo pra bater com o PhoneXR.
      const label = handed?.label || (i===0?'Right':'Left');
      const isLeft = label === 'Right';
      const handId = isLeft?'left':'right';

      const points = drawHand(raw);
      const cur = i===0 ? cursor1 : cursor2;
      updatePinch(points, cur);
      if (cur === cursor1) activeCursor = cursor1; else activeCursor = cursor2;

      // Aim é a ponta do indicador (landmark 8), normalizado como tangente FOV.
      const idx = raw[8];
      const aim = [(idx.x-.5)*2, (.5-idx.y)*2];
      packet.hands.push({
        id: handId,
        left: isLeft,
        aim,
        base: [(raw[0].x-.5)*2, (.5-raw[0].y)*2],
        pinching: dist(points[4], points[8]) < 45,
        fist: false,                 // detectar punho requere landmarks 3D; HTML do usuário não usa
        palm: [raw[9].x, raw[9].y],
        grab: [raw[9].x, raw[9].y],
        menuEligible: false,
        menuPoint: [raw[8].x, raw[8].y],
        palmWidth: 0.12,
        palmToFace: false,
        predicted: false,
        confidence: 1,
      });
    }
  }
  // Feed pro adaptador espacial existente (windows.js phonehands). O hands.js
  // consome esse pacote e atualiza o cursor + emite pinchdown/pinchup.
  emit('phonehands', packet);
}

async function processFrame() {
  if(video.readyState>=2 && !processing && mpHands && started) {
    processing = true;
    try { await mpHands.send({image:video}); } catch(e){ console.error('novamr hands', e); }
    processing = false;
  } else if(started) {
    // Sem frame novo neste tick: atualiza o estado do ponto de tracking
    // (fica vermelho se ficar mais de 3s sem ver uma mão).
    updateTrackingStatus(false);
  }
  rafId = requestAnimationFrame(processFrame);
}

async function startCamera() {
  ensureDom();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { exact: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30, max: 30 },
      },
      audio:false,
    });
    video.srcObject = stream;
    await video.play();
    await loadMediaPipe();
    started = true;
    processFrame();
    return true;
  } catch(err) {
    console.error('NovaMR getUserMedia falhou:', err);
    try {
      // Fallback sem facingMode exato
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }, audio:false,
      });
      video.srcObject = stream; await video.play();
      await loadMediaPipe();
      started = true; processFrame();
      return true;
    } catch(e2) {
      console.error('NovaMR fallback falhou:', e2);
      return false;
    }
  }
}

function stopCamera() {
  started = false;
  cancelAnimationFrame(rafId); processing = false;
  if(video.srcObject){
    video.srcObject.getTracks().forEach(t=>t.stop());
    video.srcObject = null;
  }
  ctx.clearRect(0,0,canvas.width,canvas.height);
  cursor1.classList.remove('active'); cursor2.classList.remove('active');
  setRecenterProgress(0,0,0);
  updateTrackingStatus(false);
  emit('phonehands',{hands:[], consumed:new Set(), scaleX:1, scaleY:1});
}

// Substitui as funções de start/stop do hands.js nativo.
export async function startNovaHands() {
  if (started) return true;
  // A câmera nativa CONTINUA ligada o tempo todo — ela é que faz o passthrough
  // GL estéreo de verdade (com distorção de lente do Cardboard). Tentamos abrir
  // uma SEGUNDA sessão getUserMedia pro MediaPipe das mãos; no Android 11+ o
  // Camera2 aceita múltiplos clientes. Se não der (aparelho mais antigo), o
  // passthrough continua normalmente e apenas o tracking de mãos fica off.
  if (native && window.NativeXR?.hands) window.NativeXR.hands(false); // desliga só o HandTracker Java/GPU
  const ok = await startCamera();
  return ok;
}
export function stopNovaHands() {
  stopCamera();
}
export const novamrTracking = () => started;

// Injeta CSS necessário para os cursores e canvas.
(function injectCss(){
  const css = `
    html.native #novamr-canvas{position:absolute;left:0;top:0;width:1200px;height:800px;background:transparent}
    html.native .novamr-cursor{position:absolute}
    html.native #novamr-camera{display:none!important}`;
  const tag = document.createElement('style');
  tag.textContent = css;
  document.head.appendChild(tag);
})();

