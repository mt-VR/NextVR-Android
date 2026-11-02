/* ============================================================================
   CLÍNICA DOS titans — adaptação mobile (touch, retrato) de um jogo de dentista
   + nail art para titãs. Arquivo único, sem dependências externas.
   ========================================================================== */
'use strict';

/* ---------------------------------------------------------------- i18n ---- */
const I18N = {
  pt: {
    tagline: 'Seja o dentista (e a manicure) dos Titãs!',
    clinic: 'Consultório Dentário', clinicSub: 'Raio-X, limpar, broca, curar',
    salon: 'Salão de Unhas Titã', salonSub: 'Pinte e carimbe as garras',
    patients: 'Pacientes', shop: 'Loja & Progresso',
    shopHint: 'Ganhe moedas atendendo bem e desbloqueie esmaltes e carimbos.',
    credit: 'Jogo original inspirado em simuladores de clínica VR · feito para celular',
    settings: 'Configurações', sound: 'Som', vib: 'Vibração', reset: 'Progresso',
    resetBtn: 'Zerar', close: 'Fechar', paused: 'Pausado', resume: 'Continuar',
    time: 'Tempo', err: 'Erros', clients: 'Clientes do salão', bonusStamp: 'Bônus: carimbos combinando!',
    tXray: 'Raio-X', tBrush: 'Escova', tPick: 'Picareta', tDrill: 'Broca',
    tVac: 'Aspirador', tHeal: 'Curar',
    kPlaque: 'Placa', kTartar: 'Tártaro', kCaries: 'Cáries', kDebris: 'Detritos',
    kHidden: 'Cárie oculta', kHealthy: 'Saudável',
    hintStart: 'Use o Raio-X para achar cáries ocultas, depois trate tudo!',
    hintXray: 'Segure o Raio-X sobre a boca para revelar problemas ocultos.',
    hintPlaque: 'Esfregue a ESCOVA sobre os dentes amarelados.',
    hintTartar: 'Toque várias vezes com a PICARETA no tártaro marrom.',
    hintCaries: 'Use a BROCA na cárie (buraco escuro) até limpar.',
    hintDebris: 'Aspire os detritos que a broca espalhou.',
    hintHeal: 'Preencha o buraco limpo com a pistola de CURAR.',
    done: 'Sorriso de Milhão!', doneSub: 'O Titã está novinho em folha.',
    doneSalon: 'Garras perfeitas!', doneSalonSub: 'O Titã amou o esmalte.',
    again: 'De novo', next: 'Próximo', home: 'Menu',
    perfect: 'Perfeito! Nenhum erro.',
    buy: 'Comprar por', coins: 'moedas', yes: 'Comprar', no: 'Agora não',
    notEnough: 'Moedas insuficientes.', bought: 'Desbloqueado!',
    shopTitle: 'Loja do Salão',
    tSoap: 'Limpar', tBase: 'Base', tPaint: 'Esmalte', tStamp: 'Carimbo', tGloss: 'Brilho', tStrip: 'Remover',
    kDirty: 'Sujas', kBase: 'Base', kPaint: 'Esmaltadas', kGloss: 'Brilhando',
    hintNailStart: 'Lave as unhas, passe base, esmalte, carimbo e brilho.',
    hintSoap: 'Esfregue o SABÃO nas unhas sujas.',
    hintBase: 'Passe a BASE em cada unha limpa.',
    hintPaint: 'Escolha uma cor e pinte as unhas.',
    hintStamp: 'Carimbos iguais em todas = bônus!',
    hintGloss: 'Finalize com BRILHO para selar.',
    colorLock: 'Cor bloqueada', stampLock: 'Carimbo bloqueado'
  },
  en: {
    tagline: 'Be the dentist (and nail artist) of the Titans!',
    clinic: 'Dental Clinic', clinicSub: 'X-ray, clean, drill, heal',
    salon: 'Titan Nail Salon', salonSub: 'Paint and stamp the claws',
    patients: 'Patients', shop: 'Shop & Progress',
    shopHint: 'Earn coins by treating well and unlock polishes and stamps.',
    credit: 'Original game inspired by VR clinic simulators · made for mobile',
    settings: 'Settings', sound: 'Sound', vib: 'Vibration', reset: 'Progress',
    resetBtn: 'Reset', close: 'Close', paused: 'Paused', resume: 'Resume',
    time: 'Time', err: 'Mistakes', clients: 'Salon clients', bonusStamp: 'Bonus: matching stamps!',
    tXray: 'X-Ray', tBrush: 'Brush', tPick: 'Pickaxe', tDrill: 'Drill',
    tVac: 'Vacuum', tHeal: 'Heal',
    kPlaque: 'Plaque', kTartar: 'Tartar', kCaries: 'Cavities', kDebris: 'Debris',
    kHidden: 'Hidden cavity', kHealthy: 'Healthy',
    hintStart: 'Use the X-Ray to find hidden cavities, then treat everything!',
    hintXray: 'Hold the X-Ray over the mouth to reveal hidden problems.',
    hintPlaque: 'Scrub the BRUSH over the yellowish teeth.',
    hintTartar: 'Tap the PICKAXE repeatedly on the brown tartar.',
    hintCaries: 'Use the DRILL on the cavity (dark hole) until clean.',
    hintDebris: 'Vacuum the debris the drill left behind.',
    hintHeal: 'Fill the cleaned hole with the HEAL gun.',
    done: 'Million-Dollar Smile!', doneSub: 'The Titan is good as new.',
    doneSalon: 'Perfect claws!', doneSalonSub: 'The Titan loved the polish.',
    again: 'Again', next: 'Next', home: 'Menu',
    perfect: 'Perfect! No mistakes.',
    buy: 'Buy for', coins: 'coins', yes: 'Buy', no: 'Not now',
    notEnough: 'Not enough coins.', bought: 'Unlocked!',
    shopTitle: 'Salon Shop',
    tSoap: 'Soap', tBase: 'Base', tPaint: 'Polish', tStamp: 'Stamp', tGloss: 'Gloss', tStrip: 'Remove',
    kDirty: 'Dirty', kBase: 'Base', kPaint: 'Painted', kGloss: 'Glossy',
    hintNailStart: 'Wash the nails, then base coat, polish, stamp and gloss.',
    hintSoap: 'Scrub the SOAP on dirty nails.',
    hintBase: 'Apply the BASE coat on every clean nail.',
    hintPaint: 'Pick a color and paint the nails.',
    hintStamp: 'Same stamp on all nails = bonus!',
    hintGloss: 'Finish with GLOSS to seal it.',
    colorLock: 'Locked color', stampLock: 'Locked stamp'
  }
};

/* ------------------------------------------------------------- pacientes -- */
const PATIENTS = [
  { id:'gorila',    emoji:'🦍', skin:'#5e8c4f', skin2:'#3f6336', belly:'#c9d8a8',
    eye:'#ffd54a', diff:1, par:70,  deco:'horns', mouthExtra:'tusks',
    name:{pt:'Brutinho, o Gorila', en:'Brutus the Gorilla'} },
  { id:'vampiro',   emoji:'🧛', skin:'#cdd6ea', skin2:'#9aa6c6', belly:'#7b2740',
    eye:'#ff4d5e', diff:2, par:82,  deco:'cape', mouthExtra:'fangs',
    name:{pt:'Conde Dentinho', en:'Count Fangly'} },
  { id:'princesa',  emoji:'👸', skin:'#f6c6d8', skin2:'#df9fba', belly:'#ffe6f1',
    eye:'#63d7ff', diff:2, par:88,  deco:'crown', mouthExtra:'sparkle',
    name:{pt:'Princesa Sorriso', en:'Princess Smile'} },
  { id:'noel',      emoji:'🎅', skin:'#f4c3a0', skin2:'#d99a76', belly:'#ffffff',
    eye:'#4aa3ff', diff:3, par:96,  deco:'santahat', mouthExtra:'beard',
    name:{pt:'Vovô Noel', en:'Grandpa Claus'} },
  { id:'alien',     emoji:'👽', skin:'#8fe36a', skin2:'#5fb444', belly:'#d9ffb8',
    eye:'#1b1b3a', diff:3, par:104, deco:'antenna', mouthExtra:'triple',
    name:{pt:'Zyx, o Alien', en:'Zyx the Alien'} },
  { id:'zumbi',     emoji:'🧟', skin:'#9fb59a', skin2:'#6f8a6b', belly:'#4c6b48',
    eye:'#f2ff6b', diff:4, par:118, deco:'stitches', mouthExtra:'gold',
    name:{pt:'Zé Podridão', en:'Rotty Ron'} }
];

const SALON_CLIENTS = [
  { id:'gorila',   emoji:'🦍', skin:'#5e8c4f', skin2:'#3f6336', nail:'#cbb79a', diff:1, par:60,
    name:{pt:'Garras do Brutinho', en:"Brutus' claws"} },
  { id:'vampiro',  emoji:'🧛', skin:'#cdd6ea', skin2:'#9aa6c6', nail:'#e6dcf2', diff:2, par:68,
    name:{pt:'Garras do Conde', en:"The Count's claws"} },
  { id:'princesa', emoji:'👸', skin:'#f6c6d8', skin2:'#df9fba', nail:'#ffd9e8', diff:2, par:74,
    name:{pt:'Mãos da Princesa', en:"Princess' hands"} },
  { id:'alien',    emoji:'👽', skin:'#8fe36a', skin2:'#5fb444', nail:'#c8f5a8', diff:3, par:82,
    name:{pt:'Ventosas do Zyx', en:"Zyx's suckers"} },
  { id:'noel',     emoji:'🎅', skin:'#f4c3a0', skin2:'#d99a76', nail:'#f0d9c4', diff:3, par:88,
    name:{pt:'Luvas do Noel', en:"Claus' gloves"} },
  { id:'zumbi',    emoji:'🧟', skin:'#9fb59a', skin2:'#6f8a6b', nail:'#b9c39a', diff:4, par:96,
    name:{pt:'Garras do Zé', en:"Rotty's claws"} }
];

const COLORS = [
  { id:'red',   hex:'#ff3b5c', cost:0 },
  { id:'pink',  hex:'#ff77c8', cost:0 },
  { id:'blue',  hex:'#37b6ff', cost:0 },
  { id:'green', hex:'#3ce08a', cost:0 },
  { id:'gold',  hex:'#ffc93c', cost:60 },
  { id:'violet',hex:'#a56bff', cost:60 },
  { id:'black', hex:'#2b2b45', cost:90 },
  { id:'holo',  hex:'holo',   cost:150 }
];
const STAMPS = [
  { id:'star',   glyph:'★', cost:0 },
  { id:'heart',  glyph:'♥', cost:0 },
  { id:'flower', glyph:'✿', cost:40 },
  { id:'bolt',   glyph:'⚡', cost:40 },
  { id:'moon',   glyph:'☾', cost:80 },
  { id:'skull',  glyph:'☠', cost:80 }
];

/* ------------------------------------------------------------- utilidades - */
const FONT = "'Baloo 2','Fredoka','Nunito',ui-rounded,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif";
const $  = s => document.querySelector(s);
const $all = s => Array.from(document.querySelectorAll(s));
const clamp = (v,a,b) => v<a?a:v>b?b:v;
const lerp  = (a,b,t) => a+(b-a)*t;
const TAU = Math.PI*2;

function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0;
  let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t;
  return ((t^t>>>14)>>>0)/4294967296; }; }

function rr(c,x,y,w,h,r){ r=Math.min(r,Math.abs(w)/2,Math.abs(h)/2);
  c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r);
  c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }

function ell(c,x,y,rx,ry,rot){ c.beginPath(); c.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),rot||0,0,TAU); }

function shade(hex,amt){
  const n=parseInt(hex.slice(1),16);
  let r=(n>>16)&255,g=(n>>8)&255,b=n&255;
  r=clamp(Math.round(r+255*amt),0,255); g=clamp(Math.round(g+255*amt),0,255); b=clamp(Math.round(b+255*amt),0,255);
  return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}
function rgba(hex,a){ const n=parseInt(hex.slice(1),16);
  return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`; }

/* ---------------------------------------------------------------- estado -- */
const DEF_SAVE = { lang:'pt', sound:true, vib:true, coins:0, stars:{}, salonStars:{},
  ownedColors:['red','pink','blue','green'], ownedStamps:['star','heart'] };
let S = Object.assign({}, DEF_SAVE);
function load(){ try{ const r=localStorage.getItem('titans-clinic-mobile');
  if(r){ const o=JSON.parse(r); S=Object.assign({},DEF_SAVE,o);
    S.ownedColors=Array.from(new Set(DEF_SAVE.ownedColors.concat(o.ownedColors||[])));
    S.ownedStamps=Array.from(new Set(DEF_SAVE.ownedStamps.concat(o.ownedStamps||[]))); } }catch(e){} }
function save(){ try{ localStorage.setItem('titans-clinic-mobile',JSON.stringify(S)); }catch(e){} }
let L = I18N.pt;
const t = k => (L[k] || I18N.pt[k] || k);
const pname = p => p.name[S.lang] || p.name.pt;

/* ------------------------------------------------------------------ som --- */
const Audio2 = {
  ctx:null, master:null, ready:false,
  init(){ if(this.ready) return; try{
      const AC = window.AudioContext||window.webkitAudioContext; if(!AC) return;
      this.ctx=new AC(); this.master=this.ctx.createGain(); this.master.gain.value=.5;
      this.master.connect(this.ctx.destination); this.ready=true;
    }catch(e){} },
  resume(){ if(this.ctx && this.ctx.state==='suspended') this.ctx.resume(); },
  noise(dur){ const c=this.ctx, n=Math.floor(c.sampleRate*dur), b=c.createBuffer(1,n,c.sampleRate), d=b.getChannelData(0);
    for(let i=0;i<n;i++) d[i]=(Math.random()*2-1)*(1-i/n); return b; },
  play(kind,opts){ if(!S.sound) return; this.init(); if(!this.ready) return; this.resume();
    const c=this.ctx, now=c.currentTime, o=opts||{};
    const g=c.createGain(); g.connect(this.master);
    if(kind==='click'){ const s=c.createOscillator(); s.type='triangle'; s.frequency.value=520;
      g.gain.setValueAtTime(.0001,now); g.gain.linearRampToValueAtTime(.25,now+.01);
      g.gain.exponentialRampToValueAtTime(.0001,now+.12); s.connect(g); s.start(now); s.stop(now+.14); }
    else if(kind==='scrub'||kind==='vac'){ const src=c.createBufferSource(); src.buffer=this.noise(o.dur||.18);
      src.loop=false; const f=c.createBiquadFilter(); f.type='bandpass';
      f.frequency.value=kind==='scrub'?2400:760; f.Q.value=.9;
      g.gain.setValueAtTime(.0001,now); g.gain.linearRampToValueAtTime(kind==='scrub'?.16:.22,now+.02);
      g.gain.exponentialRampToValueAtTime(.0001,now+(o.dur||.18));
      src.connect(f); f.connect(g); src.start(now); src.stop(now+(o.dur||.18)+.02); }
    else if(kind==='drill'){ const src=c.createBufferSource(); src.buffer=this.noise(.3); src.loop=true;
      const f=c.createBiquadFilter(); f.type='bandpass'; f.frequency.value=1500; f.Q.value=2;
      const s=c.createOscillator(); s.type='sawtooth'; s.frequency.value=190;
      const g2=c.createGain(); g2.gain.value=.07; s.connect(g2); g2.connect(f);
      g.gain.setValueAtTime(.0001,now); g.gain.linearRampToValueAtTime(.16,now+.03);
      g.gain.setValueAtTime(.16,now+.24); g.gain.exponentialRampToValueAtTime(.0001,now+.3);
      src.connect(f); f.connect(g); src.start(now); src.stop(now+.32); s.start(now); s.stop(now+.32); }
    else if(kind==='clink'){ const s=c.createOscillator(); s.type='square'; s.frequency.value=1180;
      s.frequency.exponentialRampToValueAtTime(420,now+.09);
      g.gain.setValueAtTime(.14,now); g.gain.exponentialRampToValueAtTime(.0001,now+.12);
      s.connect(g); s.start(now); s.stop(now+.14); }
    else if(kind==='pop'||kind==='ok'){ const s=c.createOscillator(); s.type='sine';
      s.frequency.setValueAtTime(kind==='pop'?320:520,now);
      s.frequency.exponentialRampToValueAtTime(kind==='pop'?900:1040,now+.13);
      g.gain.setValueAtTime(.22,now); g.gain.exponentialRampToValueAtTime(.0001,now+.2);
      s.connect(g); s.start(now); s.stop(now+.22); }
    else if(kind==='heal'){ [660,880,1320].forEach((f,i)=>{ const s=c.createOscillator(); s.type='sine';
        const gg=c.createGain(); gg.connect(this.master); s.connect(gg);
        gg.gain.setValueAtTime(.0001,now+i*.06); gg.gain.linearRampToValueAtTime(.14,now+i*.06+.02);
        gg.gain.exponentialRampToValueAtTime(.0001,now+i*.06+.34);
        s.frequency.value=f; s.start(now+i*.06); s.stop(now+i*.06+.36); }); }
    else if(kind==='bad'){ const s=c.createOscillator(); s.type='sawtooth'; s.frequency.value=180;
      s.frequency.exponentialRampToValueAtTime(90,now+.22);
      g.gain.setValueAtTime(.18,now); g.gain.exponentialRampToValueAtTime(.0001,now+.26);
      s.connect(g); s.start(now); s.stop(now+.28); }
    else if(kind==='win'){ [523,659,784,1046,1318].forEach((f,i)=>{ const s=c.createOscillator();
        s.type='triangle'; const gg=c.createGain(); gg.connect(this.master); s.connect(gg);
        gg.gain.setValueAtTime(.0001,now+i*.1); gg.gain.linearRampToValueAtTime(.2,now+i*.1+.02);
        gg.gain.exponentialRampToValueAtTime(.0001,now+i*.1+.5);
        s.frequency.value=f; s.start(now+i*.1); s.stop(now+i*.1+.55); }); }
    else if(kind==='xray'){ const s=c.createOscillator(); s.type='sine'; s.frequency.value=1200;
      const l=c.createOscillator(); l.type='sine'; l.frequency.value=7;
      const lg=c.createGain(); lg.gain.value=180; l.connect(lg); lg.connect(s.frequency);
      g.gain.setValueAtTime(.0001,now); g.gain.linearRampToValueAtTime(.07,now+.05);
      g.gain.setValueAtTime(.07,now+.5); g.gain.exponentialRampToValueAtTime(.0001,now+.7);
      s.connect(g); s.start(now); l.start(now); s.stop(now+.72); l.stop(now+.72); }
  }
};
function buzz(ms){ if(S.vib && navigator.vibrate) { try{ navigator.vibrate(ms); }catch(e){} } }

/* --------------------------------------------------------------- canvas --- */
const cv = $('#cv'), cx = cv.getContext('2d');
let W=360,H=640,DPR=1;
function resize(){
  DPR = Math.min(window.devicePixelRatio||1, 2);
  const r = cv.getBoundingClientRect();
  W = Math.max(240, Math.round(r.width)); H = Math.max(320, Math.round(r.height));
  cv.width = Math.round(W*DPR); cv.height = Math.round(H*DPR);
  cx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener('resize',resize);
window.addEventListener('orientationchange',()=>setTimeout(resize,120));

/* ------------------------------------------------------------------ app --- */
const app = { screen:'menu', t:0, dt:0 };

const TOOLS = {
  clinic:[
    { id:'xray',  ico:'🔦', key:'tXray'  },
    { id:'brush', ico:'🪥', key:'tBrush' },
    { id:'pick',  ico:'⛏️', key:'tPick'  },
    { id:'drill', ico:'🦷', key:'tDrill' },
    { id:'vac',   ico:'🌀', key:'tVac'   },
    { id:'heal',  ico:'💉', key:'tHeal'  }
  ],
  salon:[
    { id:'soap',  ico:'🧼', key:'tSoap'  },
    { id:'base',  ico:'🥛', key:'tBase'  },
    { id:'paint', ico:'🎨', key:'tPaint' },
    { id:'stamp', ico:'⭐', key:'tStamp' },
    { id:'gloss', ico:'✨', key:'tGloss' },
    { id:'strip', ico:'🧽', key:'tStrip' }
  ]
};

const G = {
  mode:null, patient:null, teeth:[], nails:[], tool:'brush',
  color:'red', stamp:'star', time:0, err:0, playing:false, over:false,
  particles:[], popups:[], smile:0, endAt:0, coin:0,
  pointer:{x:0,y:0,down:false,inside:false},
  scan:0, scanOn:false, lastSfx:0, hintTimer:0, hintKey:null, t:0,
  layout:{}, mouth:{}, revealFlash:0, shakeT:0, introT:0, bgHue:0
};

/* ============================================================ CONSULTÓRIO == */
function makeCase(p){
  const rnd = mulberry32(p.diff*9173 + p.id.length*7717 + (Date.now()&0xffff));
  const UP=8, LO=8, teeth=[];
  const counts = { plaque:2+Math.round(p.diff*.7), tartar:1+Math.round(p.diff*.6),
    caries:1+Math.round(p.diff*.8), hidden:Math.ceil(p.diff/2) };
  const idx=[]; for(let i=0;i<UP+LO;i++) idx.push(i);
  function take(n,list){ for(let k=0;k<n && idx.length;k++){
      const j=Math.floor(rnd()*idx.length); const i=idx.splice(j,1)[0];
      teeth[i]=Object.assign(teeth[i]||{},list); } }
  for(let i=0;i<UP+LO;i++) teeth[i]={ i:i, up:i<UP, slot:i%UP,
    plaque:0, tartar:0, caries:0, hidden:false, revealed:true, reveal:0,
    drilled:0, drilledNeed:1, debris:null, healed:false, clean:false, flash:0, wob:0 };
  take(counts.plaque,{plaque:1});
  take(counts.tartar,{tartar:1});
  take(counts.caries,{caries:1,drilledNeed:1.55});
  take(counts.hidden,{caries:1,hidden:true,revealed:false,drilledNeed:1.55});
  // molares ganham tártaro extra de vez em quando
  teeth.forEach(tt=>{ if(rnd()<.12 && !tt.caries && !tt.plaque) tt.tartar=1; });
  G.teeth=teeth; G.debris=[];
}

function revealDone(tt){
  if(tt.revealed) return;
  tt.revealed=true; Audio2.play('ok'); buzz(20); G.revealFlash=.5;
  popup(tt._x||G.layout.mx,(tt._y||G.layout.my)-G.layout.th,'🔦 '+t('kHidden'),'#8fe0ff');
  for(let k=0;k<10;k++) spark(tt._x||G.layout.mx,tt._y||G.layout.my,'#9fe4ff');
  refreshChecklist();
}

function countsOf(){
  let plaque=0,tartar=0,caries=0,debris=0,hidden=0;
  G.teeth.forEach(tt=>{
    if(tt.plaque>0) plaque++;
    if(tt.tartar>0) tartar++;
    if(tt.caries>0 && !tt.healed) caries++;
    if(tt.caries>0 && tt.hidden && !tt.revealed) hidden++;
    if(tt.debris) debris++;
  });
  return {plaque,tartar,caries,debris,hidden};
}
function clinicDone(){ const c=countsOf();
  return c.plaque===0 && c.tartar===0 && c.caries===0 && c.debris===0; }

/* ---- geometria da cena ---- */
function layoutClinic(){
  const w=W,h=H;
  const mw = clamp(w*.80, 190, 400);          // largura da arcada
  const mx = w/2, my = h*.47;                 // centro da boca
  const headW = clamp(w*1.02, 235, 520);      // largura da cabeça
  const faceY = my - headW*.26;               // centro do rosto (boca = maxilar)
  // Arcada: 8 dentes por fileira distribuídos num arco de meia elipse, com passo
  // uniforme (~17 px no pior caso num celular de 390 px) — dá para mirar com o dedo.
  const rx = mw*.455, ryU = mw*.285, ryD = mw*.265;
  const tw = mw*.104, th = mw*.148;
  G.layout = { mw, mx, my, headW, hx: w/2, hy: faceY, rx, ryU, ryD, tw, th,
    toolR: mw*.15, pos: [] };
  const L = G.layout;
  const N = 8;
  for(let i=0;i<2*N;i++){
    const up = i<N, slot = up?i:i-N;
    const u = (slot+.5)/N;
    if(up){
      const th2 = Math.PI*(1-u);                       // 180° -> 0°
      L.pos.push({ x: mx + rx*Math.cos(th2), y: my - ryU*Math.sin(th2), ang: -th2 });
    } else {
      const th2 = Math.PI*u;                           // 0° -> 180°
      L.pos.push({ x: mx + rx*Math.cos(th2), y: my + ryD*Math.sin(th2), ang: th2 });
    }
  }
}

/* ---- desenho do paciente (métricas relativas à boca) ---- */
function drawPatientFace(c,p,mx,my,mw,t,opts){
  const o=opts||{};
  const bob = Math.sin(t*1.6)*mw*.008;
  const hrx = mw*.66, hry = mw*.60;
  const hy  = my - mw*.17 + bob;
  c.save();
  // ombros / tronco
  c.fillStyle = p.skin2;
  rr(c, mx-hrx*.98, my+mw*.50, hrx*1.96, mw*.62, mw*.2); c.fill();
  if(p.deco==='cape'){ c.fillStyle='#6b1030';
    c.beginPath(); c.moveTo(mx-hrx*.92,my+mw*.42); c.lineTo(mx-hrx*1.25,my+mw*1.3);
    c.lineTo(mx+hrx*1.25,my+mw*1.3); c.lineTo(mx+hrx*.92,my+mw*.42); c.closePath(); c.fill(); }

  // orelhas
  c.fillStyle=p.skin;
  ell(c,mx-hrx*.97,hy-hry*.10,hrx*.13,hry*.17,0); c.fill();
  ell(c,mx+hrx*.97,hy-hry*.10,hrx*.13,hry*.17,0); c.fill();
  c.fillStyle=shade(p.skin,-.2);
  ell(c,mx-hrx*.97,hy-hry*.10,hrx*.065,hry*.09,0); c.fill();
  ell(c,mx+hrx*.97,hy-hry*.10,hrx*.065,hry*.09,0); c.fill();

  // cabeça
  const hg = c.createLinearGradient(0,hy-hry,0,hy+hry);
  hg.addColorStop(0,shade(p.skin,.14)); hg.addColorStop(1,shade(p.skin,-.16));
  c.fillStyle=hg; ell(c,mx,hy,hrx,hry,0); c.fill();
  // focinho claro atrás da boca
  c.fillStyle=rgba(p.belly,.4); ell(c,mx,my-mw*.02,mw*.54,mw*.42,0); c.fill();

  // decorações de topo
  if(p.deco==='horns'){ c.fillStyle='#e8dcc0';
    [[-1],[1]].forEach(d=>{ const dx=d[0];
      c.beginPath(); c.moveTo(mx+dx*hrx*.52,hy-hry*.72);
      c.quadraticCurveTo(mx+dx*hrx*.85,hy-hry*1.25,mx+dx*hrx*.38,hy-hry*1.28);
      c.quadraticCurveTo(mx+dx*hrx*.44,hy-hry*.92,mx+dx*hrx*.26,hy-hry*.72);
      c.closePath(); c.fill(); }); }
  if(p.deco==='antenna'){ c.strokeStyle=p.skin2; c.lineWidth=mw*.022; c.lineCap='round';
    [[-1],[1]].forEach(d=>{ const dx=d[0];
      c.beginPath(); c.moveTo(mx+dx*hrx*.3,hy-hry*.86);
      c.quadraticCurveTo(mx+dx*hrx*.6,hy-hry*1.4,mx+dx*hrx*.28,hy-hry*1.5); c.stroke();
      c.fillStyle='#ff5fa2'; ell(c,mx+dx*hrx*.28,hy-hry*1.53,hrx*.07,hrx*.07,0); c.fill(); }); }
  if(p.deco==='crown'){ c.fillStyle='#ffd84d'; c.beginPath();
    c.moveTo(mx-hrx*.5,hy-hry*.74); c.lineTo(mx-hrx*.5,hy-hry*1.05); c.lineTo(mx-hrx*.26,hy-hry*.84);
    c.lineTo(mx,hy-hry*1.18); c.lineTo(mx+hrx*.26,hy-hry*.84); c.lineTo(mx+hrx*.5,hy-hry*1.05);
    c.lineTo(mx+hrx*.5,hy-hry*.74); c.closePath(); c.fill();
    c.fillStyle='#ff5fa2'; ell(c,mx,hy-hry*.88,hrx*.06,hrx*.06,0); c.fill(); }
  if(p.deco==='santahat'){ c.fillStyle='#c8202f'; c.beginPath();
    c.moveTo(mx-hrx*.78,hy-hry*.6); c.quadraticCurveTo(mx-hrx*.1,hy-hry*1.7,mx+hrx*.72,hy-hry*1.15);
    c.lineTo(mx+hrx*.78,hy-hry*.58); c.closePath(); c.fill();
    c.fillStyle='#fff'; rr(c,mx-hrx*.82,hy-hry*.74,hrx*1.64,hry*.16,hry*.08); c.fill();
    ell(c,mx+hrx*.74,hy-hry*1.18,hrx*.11,hrx*.11,0); c.fill(); }
  if(p.deco==='stitches'){ c.strokeStyle=shade(p.skin,-.32); c.lineWidth=mw*.014;
    for(let i=0;i<3;i++){ const y=hy-hry*.72+i*hry*.1;
      c.beginPath(); c.moveTo(mx-hrx*.5+i*hrx*.1,y); c.lineTo(mx-hrx*.34+i*hrx*.1,y+hry*.07); c.stroke(); } }

  // olhos (acima da boca aberta)
  const blink = (Math.sin(t*.9)>0.985)?0.12:1;
  const ex=hrx*.38, ey=my-mw*.62, er=hrx*.155;
  c.fillStyle='#fff'; ell(c,mx-ex,ey,er,er*1.1*blink,0); c.fill();
  ell(c,mx+ex,ey,er,er*1.1*blink,0); c.fill();
  c.fillStyle=p.eye; ell(c,mx-ex+er*.1,ey+er*.1,er*.58,er*.64*blink,0); c.fill();
  ell(c,mx+ex+er*.1,ey+er*.1,er*.58,er*.64*blink,0); c.fill();
  c.fillStyle='#14142e'; ell(c,mx-ex+er*.12,ey+er*.14,er*.28,er*.32*blink,0); c.fill();
  ell(c,mx+ex+er*.12,ey+er*.14,er*.28,er*.32*blink,0); c.fill();
  if(p.deco==='antenna'){ c.fillStyle=p.eye; ell(c,mx,ey-er*1.5,er*.42,er*.5*blink,0); c.fill(); }
  // sobrancelhas
  c.strokeStyle=shade(p.skin,-.36); c.lineWidth=mw*.03; c.lineCap='round';
  c.beginPath(); c.moveTo(mx-ex-er*.9,ey-er*1.5); c.lineTo(mx-ex+er*.8,ey-er*1.85); c.stroke();
  c.beginPath(); c.moveTo(mx+ex-er*.8,ey-er*1.85); c.lineTo(mx+ex+er*.9,ey-er*1.5); c.stroke();
  // narinas (faixa entre olhos e boca)
  c.fillStyle=shade(p.skin,-.2);
  ell(c,mx-mw*.055,my-mw*.475,mw*.026,mw*.02,-.3); c.fill();
  ell(c,mx+mw*.055,my-mw*.475,mw*.026,mw*.02,.3); c.fill();

  if(o.mouth==='smile'){
    c.strokeStyle='#5a1526'; c.lineWidth=mw*.035; c.lineCap='round';
    c.beginPath(); c.arc(mx,my-mw*.06,mw*.22,0.18*Math.PI,0.82*Math.PI); c.stroke();
    c.fillStyle='#fff'; rr(c,mx-mw*.19,my-mw*.02,mw*.38,mw*.085,mw*.04); c.fill();
    c.strokeStyle='rgba(160,140,140,.5)'; c.lineWidth=1;
    for(let i=1;i<6;i++){ const x=mx-mw*.19+i*(mw*.38/6);
      c.beginPath(); c.moveTo(x,my-mw*.02); c.lineTo(x,my+mw*.065); c.stroke(); }
  }
  if(p.mouthExtra==='beard'){ c.fillStyle='#f2f2f2';
    c.beginPath(); c.moveTo(mx-mw*.5,my+mw*.26);
    c.quadraticCurveTo(mx,my+mw*.95,mx+mw*.5,my+mw*.26);
    c.quadraticCurveTo(mx+mw*.3,my+mw*.44,mx,my+mw*.4);
    c.quadraticCurveTo(mx-mw*.3,my+mw*.44,mx-mw*.5,my+mw*.26);
    c.closePath(); c.fill(); }
  c.restore();
}

/* ---- dentes ---- */
function toothShape(c,x,y,w,h,up){
  c.beginPath();
  const r=w*.34;
  c.moveTo(x-w/2,y-h/2+(up?r:0));
  if(up) c.quadraticCurveTo(x-w/2,y-h/2,x-w/2+r*.6,y-h/2);
  else c.lineTo(x-w/2,y-h/2+r*.2);
  c.lineTo(x+w/2-r*.2,y-h/2);
  if(up) c.quadraticCurveTo(x+w/2,y-h/2,x+w/2,y-h/2+r);
  c.lineTo(x+w/2,y+h/2-r*.5);
  c.quadraticCurveTo(x+w/2,y+h/2,x+w/2-w*.22,y+h/2);
  c.lineTo(x-w/2+w*.22,y+h/2);
  c.quadraticCurveTo(x-w/2,y+h/2,x-w/2,y+h/2-r*.5);
  c.closePath();
}

function drawTooth(c,tt,p,i,t){
  const L=G.layout; const w=L.tw*(tt.up?1:0.94), h=L.th*(tt.up?1:0.86);
  const wob = tt.wob>0 ? Math.sin(tt.wob*34)*tt.wob*2.4 : 0;
  c.save();
  c.translate(p.x+wob,p.y); c.rotate((p.ang-Math.PI/2)*0.35);
  // raiz/sombra
  c.fillStyle='rgba(90,20,35,.45)';
  toothShape(c,0,h*.06,w*1.03,h*1.02,tt.up); c.fill();
  // esmalte
  let base='#fffdf6';
  if(tt.plaque>0) base='#e6dcae';
  if(tt.tartar>0) base='#d9c48c';
  if(tt.healed) base='#ffffff';
  const g=c.createLinearGradient(0,-h/2,0,h/2);
  g.addColorStop(0,shade(base,.04)); g.addColorStop(.6,base); g.addColorStop(1,shade(base,-.13));
  c.fillStyle=g; toothShape(c,0,0,w,h,tt.up); c.fill();
  c.strokeStyle='rgba(120,90,90,.35)'; c.lineWidth=Math.max(1,w*.035); c.stroke();

  // placa: manchas amareladas
  if(tt.plaque>0){ c.save(); toothShape(c,0,0,w,h,tt.up); c.clip();
    c.fillStyle=`rgba(190,168,80,${.35+.4*tt.plaque})`;
    for(let k=0;k<4;k++){ const a=(k*2.3+i)*1.7;
      ell(c,Math.cos(a)*w*.24, h*.12+Math.sin(a)*h*.2, w*.2*(0.6+tt.plaque*.5), h*.1, a); c.fill(); }
    c.restore(); }
  // tártaro: crosta marrom na base
  if(tt.tartar>0){ c.save(); toothShape(c,0,0,w,h,tt.up); c.clip();
    c.fillStyle=`rgba(150,104,52,${.6+.35*tt.tartar})`;
    rr(c,-w/2,h*.16-h*.1*(1-tt.tartar),w,h*.5,h*.1); c.fill();
    c.fillStyle='rgba(210,170,110,.5)';
    for(let k=0;k<3;k++) ell(c,-w*.2+k*w*.2,h*.3,w*.09,h*.06,0); c.fill();
    c.restore(); }
  // cárie
  if(tt.caries>0 && !tt.healed){
    const hidden = tt.hidden && !tt.revealed;
    c.save(); toothShape(c,0,0,w,h,tt.up); c.clip();
    if(hidden){ c.fillStyle='rgba(120,190,255,.20)';
      ell(c,0,-h*.06,w*.26,h*.24,0); c.fill();
      c.strokeStyle='rgba(150,210,255,.6)'; c.lineWidth=Math.max(1,w*.05); c.setLineDash([3,3]);
      ell(c,0,-h*.06,w*.26,h*.24,0); c.stroke(); c.setLineDash([]); }
    else{
      const prog = tt.drilled/tt.drilledNeed;
      const rr2 = w*(.3 - prog*.05);
      c.fillStyle='#3a2018'; ell(c,0,-h*.05,rr2,rr2*1.06,0); c.fill();
      c.fillStyle='#1b0e0a'; ell(c,0,-h*.05,rr2*.66,rr2*.7,0); c.fill();
      if(prog>0.05){ c.strokeStyle='rgba(255,255,255,.5)'; c.lineWidth=Math.max(1,w*.04);
        for(let k=0;k<3;k++){ const a=k*2.1+i;
          c.beginPath(); c.moveTo(Math.cos(a)*rr2*.7,-h*.05+Math.sin(a)*rr2*.7);
          c.lineTo(Math.cos(a)*rr2*1.25,-h*.05+Math.sin(a)*rr2*1.25); c.stroke(); } }
    }
    c.restore();
  }
  // curado: obturação branca brilhante
  if(tt.healed){ c.save(); toothShape(c,0,0,w,h,tt.up); c.clip();
    c.fillStyle='rgba(255,255,255,.95)'; ell(c,0,-h*.05,w*.26,h*.24,0); c.fill();
    c.fillStyle='rgba(160,230,255,.35)'; ell(c,-w*.06,-h*.1,w*.1,h*.07,-.4); c.fill();
    c.restore(); }
  // flash de erro
  if(tt.flash>0){ c.save(); toothShape(c,0,0,w,h,tt.up); c.clip();
    c.fillStyle=`rgba(255,70,90,${tt.flash*.6})`; c.fillRect(-w/2,-h/2,w,h); c.restore(); }
  c.restore();
}

/* ---- boca ---- */
function drawMouth(c,t){
  const L=G.layout, p=G.patient;
  const open = 1-G.smile;
  c.save();
  // fundo da boca
  const mg=c.createRadialGradient(L.mx,L.my,L.mw*.05,L.mx,L.my,L.mw*.62);
  mg.addColorStop(0,'#2a0812'); mg.addColorStop(.55,'#6d1330'); mg.addColorStop(1,'#a02246');
  c.fillStyle=mg;
  c.beginPath(); c.ellipse(L.mx,L.my,L.rx*1.12,(L.ryU+L.ryD)*.62*open+L.mw*.03,0,0,TAU); c.fill();
  // língua
  if(open>.25){ c.fillStyle='#c9405f';
    c.beginPath(); c.ellipse(L.mx,L.my+L.ryD*.62*open,L.rx*.56,L.ryD*.42*open,0,Math.PI,TAU); c.fill();
    c.fillStyle='rgba(255,255,255,.14)';
    c.beginPath(); c.ellipse(L.mx-L.mw*.07,L.my+L.ryD*.5*open,L.mw*.09,L.ryD*.14*open,0,0,TAU); c.fill(); }
  c.restore();

  // dentes
  if(open>.08){
    G.teeth.forEach((tt,i)=>{
      const pp=L.pos[i]; const off=(1-open)*(tt.up?-1:1)*L.ryD*.55;
      drawTooth(c,tt,{x:pp.x,y:pp.y+off,ang:pp.ang},i,t);
      tt._x=pp.x; tt._y=pp.y+off;
    });
  } else {
    // sorriso fechado: fileira de dentes brancos
    c.save();
    c.fillStyle='#fff'; rr(c,L.mx-L.mw*.3,L.my-L.mw*.045,L.mw*.6,L.mw*.09,L.mw*.045); c.fill();
    c.strokeStyle='rgba(160,140,140,.5)'; c.lineWidth=1.4;
    for(let i=1;i<7;i++){ const x=L.mx-L.mw*.3+i*(L.mw*.6/7);
      c.beginPath(); c.moveTo(x,L.my-L.mw*.045); c.lineTo(x,L.my+L.mw*.045); c.stroke(); }
    c.restore();
    if(Math.random()<.3) spark(L.mx+(Math.random()-.5)*L.mw*.6, L.my+(Math.random()-.5)*20, '#fff');
  }

  // lábios
  c.save();
  c.strokeStyle=shade(p.skin,-.22); c.lineCap='round';
  c.lineWidth=L.mw*.045;
  c.beginPath(); c.ellipse(L.mx,L.my,L.rx*1.16,(L.ryU+L.ryD)*.68*open+L.mw*.05,0,0,TAU); c.stroke();
  c.strokeStyle=rgba('#ff6f92',.35); c.lineWidth=L.mw*.03;
  c.beginPath(); c.ellipse(L.mx,L.my-L.ryU*.25*open,L.rx*.9,L.ryU*.55*open+L.mw*.02,Math.PI*1.1,Math.PI*1.9); c.stroke();
  c.restore();

  // dentes especiais por personagem
  if(open>.35){
    c.save();
    if(p.mouthExtra==='tusks'){ c.fillStyle='#fff8e0';
      [[-1],[1]].forEach(d=>{ const dx=d[0];
        c.beginPath(); c.moveTo(L.mx+dx*L.mw*.3,L.my+L.ryD*.55);
        c.lineTo(L.mx+dx*L.mw*.22,L.my+L.ryD*.05); c.lineTo(L.mx+dx*L.mw*.38,L.my+L.ryD*.09);
        c.closePath(); c.fill(); }); }
    if(p.mouthExtra==='fangs'){ c.fillStyle='#fff';
      [[-1],[1]].forEach(d=>{ const dx=d[0];
        c.beginPath(); c.moveTo(L.mx+dx*L.mw*.16,L.my-L.ryU*.45);
        c.lineTo(L.mx+dx*L.mw*.1,L.my+L.ryU*.05); c.lineTo(L.mx+dx*L.mw*.22,L.my-L.ryU*.43);
        c.closePath(); c.fill(); }); }
    if(p.mouthExtra==='gold'){ const tt=G.teeth[3]; if(tt._x){ c.fillStyle='#ffd24d';
        c.save(); c.translate(tt._x,tt._y); c.rotate(.2);
        rr(c,-L.tw*.3,-L.th*.22,L.tw*.6,L.th*.44,L.tw*.1); c.fill();
        c.fillStyle='rgba(255,255,255,.5)'; rr(c,-L.tw*.2,-L.th*.14,L.tw*.16,L.th*.1,2); c.fill(); c.restore(); } }
    c.restore();
  }
}

/* ---- raio-X ---- */
function drawXray(c){
  if(!G.scanOn && G.scan<=0) return;
  const L=G.layout, a=clamp(G.scan,0,1);
  c.save();
  c.globalAlpha=a*.55; c.fillStyle='#04121f';
  c.beginPath(); c.ellipse(L.mx,L.my,L.rx*1.3,(L.ryU+L.ryD)*.95,0,0,TAU); c.fill();
  c.globalAlpha=a;
  // varredura
  const sy = L.my - (L.ryU+L.ryD) + ((G.t*260)%((L.ryU+L.ryD)*2));
  const sg=c.createLinearGradient(0,sy-26,0,sy+26);
  sg.addColorStop(0,'rgba(90,200,255,0)'); sg.addColorStop(.5,'rgba(140,225,255,.85)');
  sg.addColorStop(1,'rgba(90,200,255,0)');
  c.fillStyle=sg; c.fillRect(L.mx-L.rx*1.3,sy-26,L.rx*2.6,52);
  // contorno dos dentes
  c.strokeStyle='rgba(150,220,255,.75)'; c.lineWidth=1.4;
  G.teeth.forEach((tt,i)=>{ const p=L.pos[i]; if(!tt._x) return;
    c.save(); c.translate(tt._x,tt._y); c.rotate((p.ang-Math.PI/2)*.35);
    toothShape(c,0,0,L.tw,L.th,tt.up); c.stroke(); c.restore(); });
  c.restore();
}

/* ================================================================ SALÃO == */
function makeSalon(p){
  const rnd=mulberry32(p.diff*4441+p.id.length*313+(Date.now()&0xffff));
  const nails=[];
  for(let i=0;i<5;i++) nails.push({ i:i, dirty:1, base:0, color:null, stamp:null, gloss:0, flash:0, shine:0 });
  if(rnd()<.9) nails[Math.floor(rnd()*5)].dirty=1;
  G.nails=nails; G.color=S.ownedColors[0]||'red'; G.stamp=S.ownedStamps[0]||'star';
}
function salonCounts(){
  let dirty=0,base=0,paint=0,gloss=0;
  G.nails.forEach(n=>{ if(n.dirty>0)dirty++; if(!n.dirty&&n.base<1)base++;
    if(n.color)paint++; if(n.gloss>=1)gloss++; });
  return {dirty,base,paint,gloss};
}
function salonDone(){ const c=salonCounts(); return c.dirty===0&&c.base===0&&c.paint===5&&c.gloss===5; }

function layoutSalon(){
  const w=W,h=H;
  const hw=clamp(w*.86,230,420);              // largura da mão
  const hx=w/2, hy=h*.48;                     // centro da palma
  const palmW=hw*.74, palmH=hw*.56;
  const top=hy-palmH*.42;
  const spread=[-.30,-.115,.055,.225];        // mindinho, anelar, médio, indicador
  const flen=[.30,.40,.44,.37];
  const nails=[];
  for(let i=0;i<4;i++){
    const px=hx+spread[i]*palmW;
    const py=top+Math.abs(spread[i])*palmH*.16;
    const a=-Math.PI/2+spread[i]*.85;
    const L2=flen[i]*hw;
    const ex=px+Math.cos(a)*L2*.28;
    const ey=py+Math.sin(a)*L2;
    nails.push({px,py,ex,ey,a,w:hw*.088});
  }
  // polegar: sai da borda esquerda da palma, apontando para cima e para fora
  const ta=-2.05;
  const tpx=hx-palmW*.46, tpy=hy+palmH*.21;
  nails.push({px:tpx,py:tpy,ex:tpx+Math.cos(ta)*hw*.25,ey:tpy+Math.sin(ta)*hw*.24,a:ta,w:hw*.105});
  G.layout={hw,hx,hy,palmW,palmH,nails,toolR:hw*.1};
}

function drawSalonHand(c,cl,t){
  const L=G.layout;
  c.save();
  // antebraço
  c.fillStyle=shade(cl.skin,-.1);
  rr(c,L.hx-L.palmW*.24,L.hy+L.palmH*.2,L.palmW*.48,H-(L.hy+L.palmH*.2),L.palmW*.2); c.fill();
  // palma
  const g=c.createLinearGradient(0,L.hy-L.palmH*.6,0,L.hy+L.palmH*.6);
  g.addColorStop(0,shade(cl.skin,.12)); g.addColorStop(1,shade(cl.skin,-.16));
  c.fillStyle=g;
  rr(c,L.hx-L.palmW*.5,L.hy-L.palmH*.5,L.palmW,L.palmH,L.palmW*.34); c.fill();
  c.strokeStyle=rgba(cl.skin2,.6); c.lineWidth=2;
  rr(c,L.hx-L.palmW*.5,L.hy-L.palmH*.5,L.palmW,L.palmH,L.palmW*.34); c.stroke();

  // dedos (desenhados sob a palma na base)
  L.nails.forEach((n,i)=>{
    const wig=Math.sin(t*1.9+i*.85)*L.hw*.008;
    n._wig=wig;
    c.strokeStyle=shade(cl.skin,.02); c.lineWidth=n.w*1.85; c.lineCap='round';
    c.beginPath(); c.moveTo(n.px,n.py);
    c.quadraticCurveTo((n.px+n.ex)/2+wig*2,(n.py+n.ey)/2,n.ex,n.ey+wig); c.stroke();
    c.strokeStyle=rgba(cl.skin2,.45); c.lineWidth=n.w*.5;
    c.beginPath(); c.moveTo(n.px,n.py);
    c.quadraticCurveTo((n.px+n.ex)/2+wig*2,(n.py+n.ey)/2,n.ex,n.ey+wig); c.stroke();
    // junta
    c.fillStyle=rgba(cl.skin2,.35);
    ell(c,(n.px+n.ex)/2,(n.py+n.ey)/2,n.w*.5,n.w*.35,n.a); c.fill();
  });

  // unhas
  L.nails.forEach((n,i)=>{
    const nl=G.nails[i]; if(!nl) return;
    const x=n.ex, y=n.ey+(n._wig||0), w=n.w, h=w*1.3;
    c.save(); c.translate(x,y); c.rotate(n.a+Math.PI/2);
    c.beginPath();
    c.moveTo(-w*.5,h*.32); c.quadraticCurveTo(-w*.58,-h*.3,0,-h*.5);
    c.quadraticCurveTo(w*.58,-h*.3,w*.5,h*.32);
    c.quadraticCurveTo(0,h*.48,-w*.5,h*.32); c.closePath();
    c.fillStyle=cl.nail; c.fill();
    c.strokeStyle='rgba(0,0,0,.22)'; c.lineWidth=1.2; c.stroke();
    c.save(); c.clip();
    if(nl.dirty>0){ c.fillStyle=`rgba(92,74,40,${.5*nl.dirty})`;
      for(let k=0;k<5;k++){ const a=k*1.9+i;
        ell(c,Math.cos(a)*w*.28,Math.sin(a)*h*.24,w*.24,h*.17,a); c.fill(); } }
    if(nl.base>0){ c.fillStyle=`rgba(255,242,252,${.5*nl.base})`; c.fillRect(-w,-h,w*2,h*2); }
    if(nl.color){ const hex=colOf(nl.color);
      const cf=COLORS.find(cc=>cc.id===nl.color);
      if(cf && cf.hex==='holo'){ const hg=c.createLinearGradient(-w,-h,w,h);
        ['#ff6bd6','#ffd36b','#6bffb8','#6bb8ff','#c86bff'].forEach((s2,k)=>hg.addColorStop(k/4,s2));
        c.fillStyle=hg; } else c.fillStyle=hex;
      c.fillRect(-w,-h,w*2,h*2);
      if(nl.stamp){ const st=STAMPS.find(s3=>s3.id===nl.stamp);
        if(st){ c.fillStyle='rgba(255,255,255,.94)';
          c.font=`${Math.round(w*.95)}px ${FONT||'sans-serif'}`; c.textAlign='center'; c.textBaseline='middle';
          c.fillText(st.glyph,0,-h*.04); } } }
    if(nl.gloss>0){ c.globalAlpha=.55*nl.gloss;
      const gg=c.createLinearGradient(-w*.7,-h*.5,w*.3,h*.4);
      gg.addColorStop(0,'rgba(255,255,255,.95)'); gg.addColorStop(.45,'rgba(255,255,255,0)');
      c.fillStyle=gg; c.fillRect(-w,-h,w*2,h*2); c.globalAlpha=1;
      c.fillStyle='rgba(255,255,255,.9)'; ell(c,-w*.22,-h*.26,w*.13,h*.09,-.5); c.fill(); }
    c.restore();
    if(nl.flash>0){ c.fillStyle=`rgba(255,70,90,${nl.flash*.5})`;
      c.beginPath(); c.ellipse(0,0,w*.72,h*.62,0,0,TAU); c.fill(); }
    if(nl.shine>0){ c.strokeStyle=`rgba(255,255,255,${nl.shine*.8})`; c.lineWidth=2;
      c.beginPath(); c.ellipse(0,0,w*(.75+(1-nl.shine)*.7),h*(.65+(1-nl.shine)*.7),0,0,TAU); c.stroke(); }
    c.restore();
    nl._x=x; nl._y=y; nl._r=Math.max(w,h)*.66;
  });
  c.restore();
}

/* ========================================================== partículas ===== */
function spark(x,y,col){ G.particles.push({x,y,vx:(Math.random()-.5)*70,vy:-40-Math.random()*90,
  life:.6+Math.random()*.5,t:0,r:2+Math.random()*3,col:col||'#fff',k:'spark'}); }
function chunk(x,y,col){ G.particles.push({x,y,vx:(Math.random()-.5)*160,vy:-60-Math.random()*140,
  life:.5+Math.random()*.4,t:0,r:2.5+Math.random()*3.5,col:col||'#fff',k:'chunk',rot:Math.random()*6,vr:(Math.random()-.5)*14}); }
function bubble(x,y,col){ G.particles.push({x:x+(Math.random()-.5)*22,y,vx:(Math.random()-.5)*30,
  vy:-30-Math.random()*40,life:.8+Math.random()*.7,t:0,r:3+Math.random()*6,col:col||'rgba(255,255,255,.8)',k:'bubble'}); }
function popup(x,y,txt,col){ G.popups.push({x,y,txt,col:col||'#fff',t:0,life:1}); }
function updateFx(dt){
  for(let i=G.particles.length-1;i>=0;i--){ const p=G.particles[i]; p.t+=dt;
    if(p.t>=p.life){ G.particles.splice(i,1); continue; }
    p.x+=p.vx*dt; p.y+=p.vy*dt;
    if(p.k!=='bubble') p.vy+=420*dt; else p.vy-=10*dt;
    if(p.rot!==undefined) p.rot+=p.vr*dt; }
  for(let i=G.popups.length-1;i>=0;i--){ const q=G.popups[i]; q.t+=dt; q.y-=34*dt;
    if(q.t>=q.life) G.popups.splice(i,1); }
  G.teeth.forEach(tt=>{ if(tt.flash>0) tt.flash=Math.max(0,tt.flash-dt*2.4);
    if(tt.wob>0) tt.wob=Math.max(0,tt.wob-dt*3); });
  G.nails.forEach(n=>{ if(n.flash>0) n.flash=Math.max(0,n.flash-dt*2.4);
    if(n.shine>0) n.shine=Math.max(0,n.shine-dt*1.6); });
  if(G.shakeT>0) G.shakeT=Math.max(0,G.shakeT-dt);
  if(!G.scanOn && G.scan>0) G.scan=Math.max(0,G.scan-dt*3);
}
function drawFx(c){
  G.particles.forEach(p=>{ const a=1-p.t/p.life;
    c.save(); c.globalAlpha=a;
    if(p.k==='bubble'){ c.strokeStyle=p.col; c.lineWidth=1.4;
      c.beginPath(); c.arc(p.x,p.y,p.r*(1+(1-a)*.4),0,TAU); c.stroke();
      c.fillStyle='rgba(255,255,255,.35)';
      c.beginPath(); c.arc(p.x-p.r*.3,p.y-p.r*.3,p.r*.25,0,TAU); c.fill(); }
    else if(p.k==='spark'){ c.fillStyle=p.col; c.translate(p.x,p.y); c.rotate(p.t*6);
      const r=p.r*(1+(1-a)); c.fillRect(-r*.3,-r,r*.6,r*2); c.fillRect(-r,-r*.3,r*2,r*.6); }
    else { c.fillStyle=p.col; c.translate(p.x,p.y); c.rotate(p.rot||0);
      c.fillRect(-p.r,-p.r*.7,p.r*2,p.r*1.4); }
    c.restore(); });
  G.popups.forEach(q=>{ const a=1-q.t/q.life;
    c.save(); c.globalAlpha=a; c.font=`800 ${Math.max(14,W*.042)}px ${FONT||'sans-serif'}`;
    c.textAlign='center'; c.lineWidth=4; c.strokeStyle='rgba(10,10,30,.75)';
    c.strokeText(q.txt,q.x,q.y); c.fillStyle=q.col; c.fillText(q.txt,q.x,q.y); c.restore(); });
}

/* ============================================================== ferramentas */
let errChipT=0, lastMistake=-9;
function mistake(x,y,msg){
  if(G.t-lastMistake<.85) return false;   // anti-spam: 1 erro a cada 0,85 s
  lastMistake=G.t; G.err++; errChipT=.3;
  Audio2.play('bad'); buzz(45); G.shakeT=.22;
  popup(x,y,msg||'✖','#ff8b96'); $('#uiErr').textContent=G.err;
  return true;
}

function toothAt(x,y,rad){
  const L=G.layout; let best=null,bd=1e9;
  for(let i=0;i<G.teeth.length;i++){ const tt=G.teeth[i]; if(tt._x===undefined) continue;
    const dx=x-tt._x, dy=y-tt._y; const d=Math.hypot(dx,dy);
    const lim=(rad||0)+L.tw*.62;
    if(d<lim && d<bd){ bd=d; best=tt; } }
  return best;
}
function nailAt(x,y,rad){
  let best=null,bd=1e9;
  for(let i=0;i<G.nails.length;i++){ const n=G.nails[i]; if(n._x===undefined) continue;
    const d=Math.hypot(x-n._x,y-n._y); const lim=(rad||0)+n._r*.7;
    if(d<lim&&d<bd){ bd=d; best=n; } }
  return best;
}

function applyClinicTool(dt){
  const P=G.pointer; if(!P.down||!P.inside) return;
  const L=G.layout;
  if(!inMouth(P.x,P.y,L.toolR*1.9)) { if(G.tool!=='xray') return; }
  const tt=toothAt(P.x,P.y,L.toolR*.72);

  if(G.tool==='xray'){
    G.scanOn=true; G.scan=Math.min(1,G.scan+dt*2.2);
    if(!G._xraySfx || G.t-G._xraySfx>.6){ Audio2.play('xray'); G._xraySfx=G.t; }
    if(tt && tt.hidden && !tt.revealed){
      tt.reveal+=dt*2.2;
      if(Math.random()<dt*22) spark(P.x+(Math.random()-.5)*30,P.y+(Math.random()-.5)*30,'#7fd4ff');
      if(tt.reveal>=1) revealDone(tt);
    } else if(G.scan>=.4){
      // com o feixe estável, a varredura revela a boca inteira
      G.teeth.forEach(o=>{ if(o.hidden && !o.revealed){ o.reveal+=dt*.9; if(o.reveal>=1) revealDone(o); } });
      if(Math.random()<dt*10) spark(P.x+(Math.random()-.5)*L.mw*.7,P.y+(Math.random()-.5)*(L.ryU+L.ryD),'#7fd4ff');
    }
    return;
  }
  G.scanOn=false;

  if(!tt) return;

  if(G.tool==='brush'){
    if(tt.plaque>0){ tt.plaque=Math.max(0,tt.plaque-dt*1.35); tt.wob=Math.max(tt.wob,.12);
      if(Math.random()<dt*30) bubble(P.x,P.y,'rgba(220,250,255,.9)');
      if(!G._s||G.t-G._s>.22){ Audio2.play('scrub',{dur:.16}); G._s=G.t; }
      if(tt.plaque===0){ tt.wasCaries=tt.wasCaries||false; Audio2.play('pop'); buzz(14);
        popup(tt._x,tt._y-L.th*.9,'✔ '+t('kPlaque'),'#7cf0c0');
        for(let k=0;k<6;k++) bubble(tt._x,tt._y); markTooth(tt); } }
    else { if(!tt._brushWarn || G.t-tt._brushWarn>1.2){
        tt.flash=1; if(mistake(tt._x,tt._y-L.th,'✖')) tt._brushWarn=G.t; } }
  }
  else if(G.tool==='pick'){
    if(tt.tartar>0){
      if(!tt._pickCd || G.t-tt._pickCd>.14){
        tt._pickCd=G.t; tt.tartar=Math.max(0,tt.tartar-.4); tt.wob=.3;
        Audio2.play('clink'); buzz(16);
        for(let k=0;k<5;k++) chunk(tt._x+(Math.random()-.5)*L.tw,tt._y+L.th*.2,'#a5763c');
        if(tt.tartar===0){ Audio2.play('ok'); popup(tt._x,tt._y-L.th*.9,'✔ '+t('kTartar'),'#ffd166');
          for(let k=0;k<8;k++) spark(tt._x,tt._y,'#ffd166'); markTooth(tt); }
      } }
    else { if(!tt._pickWarn||G.t-tt._pickWarn>1.2){ tt.flash=1;
      if(mistake(tt._x,tt._y-L.th,'✖')) tt._pickWarn=G.t; } }
  }
  else if(G.tool==='drill'){
    if(tt.caries>0 && !tt.healed && !(tt.hidden&&!tt.revealed)){
      tt.drilled+=dt*1.15; tt.wob=.18;
      if(!G._d||G.t-G._d>.3){ Audio2.play('drill'); G._d=G.t; }
      if(Math.random()<dt*40) chunk(P.x,P.y,'#4a2a1e');
      if(Math.random()<dt*14) bubble(P.x,P.y,'rgba(255,220,200,.5)');
      if(tt.drilled>=tt.drilledNeed){
        tt.drilled=0; tt.caries=0; tt.debris=1; tt.wasCaries=true;
        Audio2.play('pop'); buzz(24);
        popup(tt._x,tt._y-L.th*.9,'💨 '+t('kDebris'),'#ffb27a');
        for(let k=0;k<10;k++) chunk(tt._x,tt._y,'#5a3626');
        markTooth(tt);
      }
    } else if(tt.caries>0 && tt.hidden && !tt.revealed){
      if(!tt._xrWarn||G.t-tt._xrWarn>1.4){ tt._xrWarn=G.t; tt.flash=1;
        popup(tt._x,tt._y-L.th,'🔦 '+t('hintXray'),'#8fe0ff'); Audio2.play('bad'); buzz(30); }
    } else {
      if(!tt._drillWarn||G.t-tt._drillWarn>1.2){ tt.flash=1;
        if(mistake(tt._x,tt._y-L.th,'✖')) tt._drillWarn=G.t; }
    }
  }
  else if(G.tool==='vac'){
    if(tt.debris>0){ tt.debris=Math.max(0,tt.debris-dt*1.9);
      if(Math.random()<dt*26) G.particles.push({x:P.x+(Math.random()-.5)*40,y:P.y+(Math.random()-.5)*40,
        vx:(P.x-tt._x)*2,vy:(P.y-tt._y)*2,life:.35,t:0,r:2.6,col:'#6b4632',k:'chunk'});
      if(!G._v||G.t-G._v>.3){ Audio2.play('vac',{dur:.24}); G._v=G.t; }
      if(tt.debris===0){ Audio2.play('ok'); buzz(16);
        popup(tt._x,tt._y-L.th*.9,'✔ '+t('kDebris'),'#7cf0c0'); markTooth(tt); } }
    else if(tt.plaque>0||tt.tartar>0||tt.caries>0){
      if(!tt._vacWarn||G.t-tt._vacWarn>1.3){ if(mistake(tt._x,tt._y-L.th,'✖')) tt._vacWarn=G.t; } }
  }
  else if(G.tool==='heal'){
    if(tt.wasCaries && !tt.debris && !tt.caries && !tt.healed){
      tt.heal=(tt.heal||0)+dt*1.5;
      if(Math.random()<dt*26) spark(P.x+(Math.random()-.5)*24,P.y+(Math.random()-.5)*24,'#bff7ff');
      if(!G._h||G.t-G._h>.34){ Audio2.play('heal'); G._h=G.t; }
      if(tt.heal>=1){ tt.healed=true; Audio2.play('win'); buzz([18,40,18]);
        popup(tt._x,tt._y-L.th*.9,'✨ '+t('kHealthy'),'#ffffff');
        for(let k=0;k<16;k++) spark(tt._x,tt._y,'#eaffff'); markTooth(tt); }
    } else { if(!tt._healWarn||G.t-tt._healWarn>1.2){ tt.flash=1;
      if(mistake(tt._x,tt._y-L.th,'✖')) tt._healWarn=G.t; } }
  }
}

function markTooth(tt){ refreshChecklist(); if(clinicDone()) finishCase(); }

function inMouth(x,y,pad){
  const L=G.layout; pad=pad||0;
  const dx=(x-L.mx)/(L.rx*1.15+pad), dy=(y-L.my)/((L.ryU+L.ryD)*.8+pad);
  return dx*dx+dy*dy<=1;
}

function applySalonTool(dt){
  const P=G.pointer; if(!P.down||!P.inside) return;
  const L=G.layout;
  const n=nailAt(P.x,P.y,L.toolR*.6);
  if(!n) return;
  const tl=G.tool;
  if(tl==='soap'){
    if(n.dirty>0){ n.dirty=Math.max(0,n.dirty-dt*1.2); n.shine=Math.max(n.shine,.4);
      if(Math.random()<dt*26) bubble(P.x,P.y,'rgba(230,250,255,.9)');
      if(!G._s||G.t-G._s>.24){ Audio2.play('scrub',{dur:.16}); G._s=G.t; }
      if(n.dirty===0){ Audio2.play('pop'); buzz(12); popup(n._x,n._y-24,'✔','#7cf0c0');
        for(let k=0;k<6;k++) bubble(n._x,n._y); refreshChecklist(); if(salonDone()) finishCase(); } }
    else if(!n._w||G.t-n._w>1.2){ n.flash=1; if(mistake(n._x,n._y-20,'✖')) n._w=G.t; }
  }
  else if(tl==='base'){
    if(!n.dirty && n.base<1 && !n.color){ n.base=Math.min(1,n.base+dt*1.9);
      if(!G._b||G.t-G._b>.3){ Audio2.play('scrub',{dur:.14}); G._b=G.t; }
      if(n.base>=1){ Audio2.play('pop'); buzz(12); n.shine=.9;
        popup(n._x,n._y-24,'✔ '+t('tBase'),'#ffe6f6'); refreshChecklist(); } }
    else if(n.dirty>0){ if(!n._w2||G.t-n._w2>1.2){ n._w2=G.t; n.flash=1;
      popup(n._x,n._y-20,t('hintSoap'),'#ffd166'); Audio2.play('bad'); buzz(30); } }
  }
  else if(tl==='paint'){
    if(!n.dirty && n.base>=1){
      if(n.color!==G.color || n.stamp!==null){
        n.color=G.color; n.stamp=null; n.gloss=0;
        Audio2.play('ok'); buzz(12); n.shine=1;
        for(let k=0;k<8;k++) spark(n._x,n._y,colOf(G.color));
        refreshChecklist(); if(salonDone()) finishCase();
      }
    } else { if(!n._w3||G.t-n._w3>1.2){ n._w3=G.t; n.flash=1;
      popup(n._x,n._y-20,n.dirty>0?t('hintSoap'):t('hintBase'),'#ffd166'); Audio2.play('bad'); buzz(30); } }
  }
  else if(tl==='stamp'){
    if(n.color){ if(n.stamp!==G.stamp){ n.stamp=G.stamp; Audio2.play('clink'); buzz(14); n.shine=1;
        for(let k=0;k<6;k++) spark(n._x,n._y,'#fff'); checkStampBonus(); } }
    else { if(!n._w4||G.t-n._w4>1.2){ n._w4=G.t; n.flash=1;
      popup(n._x,n._y-20,t('hintPaint'),'#ffd166'); Audio2.play('bad'); buzz(30); } }
  }
  else if(tl==='gloss'){
    if(n.color){ if(n.gloss<1){ n.gloss=Math.min(1,n.gloss+dt*1.7);
        if(!G._g||G.t-G._g>.3){ Audio2.play('heal'); G._g=G.t; }
        if(Math.random()<dt*20) spark(P.x,P.y,'#fff');
        if(n.gloss>=1){ Audio2.play('ok'); buzz(14); n.shine=1;
          popup(n._x,n._y-24,'✨','#fff'); refreshChecklist(); if(salonDone()) finishCase(); } } }
    else { if(!n._w5||G.t-n._w5>1.2){ n._w5=G.t; n.flash=1;
      popup(n._x,n._y-20,t('hintPaint'),'#ffd166'); Audio2.play('bad'); buzz(30); } }
  }
  else if(tl==='strip'){
    if(n.color||n.gloss||n.base){ n.color=null; n.stamp=null; n.gloss=0; n.base=0;
      Audio2.play('scrub',{dur:.2}); buzz(16);
      for(let k=0;k<6;k++) chunk(n._x,n._y,'#e6d6ea'); refreshChecklist(); }
  }
}
function colOf(id){ const c=COLORS.find(x=>x.id===id); return !c?'#fff':(c.hex==='holo'?'#ff6bd6':c.hex); }
function checkStampBonus(){
  const st=G.nails.map(n=>n.stamp);
  if(st.every(s=>s&&s===st[0]) && G.nails.every(n=>n.gloss>=1)){ /* bônus aplicado no fim */ }
  refreshChecklist();
}

/* ============================================================== interface = */
function buildToolbar(){
  const bar=$('#toolbar'); bar.innerHTML='';
  TOOLS[G.mode].forEach(tool=>{
    const b=document.createElement('button');
    b.className='tool'+(tool.id===G.tool?' on':'');
    b.dataset.tool=tool.id;
    b.innerHTML=`<span class="ico">${tool.ico}</span><span>${t(tool.key)}</span>`;
    b.addEventListener('click',()=>{ setTool(tool.id); });
    bar.appendChild(b);
  });
}
function setTool(id){
  G.tool=id; Audio2.play('click'); buzz(8);
   $all('#toolbar .tool').forEach(b=>b.classList.toggle('on',b.dataset.tool===id));
  if(G.mode==='salon') $('#paints').classList.toggle('on', id==='paint'||id==='stamp');
  const map={ brush:'hintPlaque', pick:'hintTartar', drill:'hintCaries', vac:'hintDebris',
    heal:'hintHeal', xray:'hintXray', soap:'hintSoap', base:'hintBase', paint:'hintPaint',
    stamp:'hintStamp', gloss:'hintGloss' };
  if(map[id]) showHint(t(map[id]),2.4);
}
function buildPaints(){
  const p=$('#paints'); p.innerHTML='';
  const lb=document.createElement('span'); lb.className='plabel'; lb.textContent='🎨'; p.appendChild(lb);
  COLORS.forEach(c=>{
    const owned=S.ownedColors.indexOf(c.id)>=0;
    const d=document.createElement('button');
    d.className='sw'+(c.id===G.color?' on':'')+(owned?'':' lock');
    d.style.background = c.hex==='holo'
      ? 'conic-gradient(#ff6bd6,#ffd36b,#6bffb8,#6bb8ff,#c86bff,#ff6bd6)' : c.hex;
    d.dataset.c=c.id;
    d.addEventListener('click',()=>{
      if(!owned){ askBuy('color',c); return; }
      G.color=c.id; setTool('paint'); Audio2.play('click');
       $all('#paints .sw').forEach(x=>x.classList.toggle('on',x.dataset.c===c.id));
    });
    p.appendChild(d);
  });
  const lb2=document.createElement('span'); lb2.className='plabel'; lb2.textContent='⭐'; p.appendChild(lb2);
  STAMPS.forEach(s=>{
    const owned=S.ownedStamps.indexOf(s.id)>=0;
    const b=document.createElement('button');
    b.className='stp'+(s.id===G.stamp?' on':'')+(owned?'':' lock');
    b.textContent=s.glyph; b.dataset.s=s.id;
    b.addEventListener('click',()=>{
      if(!owned){ askBuy('stamp',s); return; }
      G.stamp=s.id; setTool('stamp'); Audio2.play('click');
       $all('#paints .stp').forEach(x=>x.classList.toggle('on',x.dataset.s===s.id));
    });
    p.appendChild(b);
  });
}

let buyCtx=null;
function askBuy(kind,item){
  buyCtx={kind,item};
  const label = kind==='color' ? t('colorLock') : t('stampLock');
  const prev = kind==='stamp'
    ? `<span class="buy-preview" style="font-size:26px">${item.glyph}</span>`
    : `<span class="buy-preview" style="background:${item.hex==='holo'
        ? 'conic-gradient(#ff6bd6,#ffd36b,#6bffb8,#6bb8ff,#c86bff,#ff6bd6)' : item.hex}"></span>`;
  $('#shopText').innerHTML = `${label} ${prev}<br>${t('buy')} <b>${item.cost}</b> ${t('coins')}?`;
  $('#shopYes').textContent='🪙 '+item.cost;
  $('#shopNo').textContent=t('no');
  $('#shop').classList.add('on');
  Audio2.play('click');
}
$('#shopYes').addEventListener('click',()=>{
  if(!buyCtx) return;
  const cost=buyCtx.item.cost;
  if(S.coins<cost){ $('#shopText').textContent=t('notEnough'); Audio2.play('bad');
    setTimeout(()=>$('#shop').classList.remove('on'),700); return; }
  S.coins-=cost;
  if(buyCtx.kind==='color') S.ownedColors.push(buyCtx.item.id); else S.ownedStamps.push(buyCtx.item.id);
  save(); Audio2.play('win'); buzz([20,40,20]);
  $('#shop').classList.remove('on'); updateCoins(); buildPaints(); buildMenu();
  showHint('🎉 '+t('bought'),2);
});
$('#shopNo').addEventListener('click',()=>{ $('#shop').classList.remove('on'); Audio2.play('click'); });

function refreshChecklist(){
  const box=$('#checklist'); box.innerHTML='';
  if(G.mode==='clinic'){
    const c=countsOf();
    const rows=[['kPlaque',c.plaque,''],['kTartar',c.tartar,''],['kCaries',c.caries,''],
      ['kDebris',c.debris,''],['kHidden',c.hidden,'hidden-t']];
    rows.forEach(r=>{
      const d=document.createElement('div');
      d.className='task'+(r[1]===0?' done':'')+(r[2]?' '+r[2]:'');
      d.innerHTML=`<span class="dot"></span>${t(r[0])} <b>${r[1]}</b>`;
      box.appendChild(d);
    });
  } else {
    const c=salonCounts();
    const rows=[['kDirty',c.dirty],['kBase',c.base],['kPaint',5-c.paint],['kGloss',5-c.gloss]];
    rows.forEach(r=>{
      const d=document.createElement('div');
      d.className='task'+(r[1]===0?' done':'');
      d.innerHTML=`<span class="dot"></span>${t(r[0])} <b>${r[1]}</b>`;
      box.appendChild(d);
    });
  }
}
function updateCoins(){ $('#uiCoin').textContent=S.coins; $('#coinMenu').textContent=S.coins; }
function fmtTime(s){ const m=Math.floor(s/60), r=Math.floor(s%60); return m+':'+(r<10?'0':'')+r; }

let hintT=null;
function showHint(txt,secs){
  const h=$('#hint'); h.textContent=txt; h.classList.add('on');
  if(hintT) clearTimeout(hintT);
  hintT=setTimeout(()=>h.classList.remove('on'), (secs||2.6)*1000);
}

/* ================================================================ fluxos == */
function startClinic(p){
  G.mode='clinic'; G.patient=p; G.smile=0; G.over=false; G.err=0; G.time=0;
  G.particles=[]; G.popups=[]; G.scan=0; G.scanOn=false;
  makeCase(p); layoutClinic();
  G.tool='xray'; buildToolbar(); $('#paints').classList.remove('on');
  refreshChecklist();
  openIntro(p, clinicDiag(p));
}
function clinicDiag(p){
  const c=countsOf();
  return [ ['🔦',t('hintXray')], ['🪥',`${t('kPlaque')}: ${c.plaque}`],
    ['⛏️',`${t('kTartar')}: ${c.tartar}`], ['🦷',`${t('kCaries')}: ${c.caries}`] ];
}
function startSalon(p){
  G.mode='salon'; G.patient=p; G.smile=0; G.over=false; G.err=0; G.time=0;
  G.particles=[]; G.popups=[];
  makeSalon(p); layoutSalon();
  G.tool='soap'; buildToolbar(); buildPaints(); $('#paints').classList.remove('on');
  refreshChecklist();
  openIntro(p, [ ['🧼',t('hintSoap')], ['🥛',t('hintBase')],
    ['🎨',t('hintPaint')], ['✨',t('hintGloss')] ]);
}
function openIntro(p,diag){
  $('#introEmoji').textContent=p.emoji;
  $('#introName').textContent=pname(p);
  $('#introText').textContent = G.mode==='clinic' ? t('hintStart') : t('hintNailStart');
  const d=$('#introDiag'); d.innerHTML='';
  diag.forEach(r=>{ const div=document.createElement('div');
    div.innerHTML=`<span>${r[0]}</span><span>${r[1]}</span>`; d.appendChild(div); });
  $('#btnStart').textContent='▶ '+t('resume');
  $('#intro').classList.add('on');
  app.screen='play'; showScreen('play');
  G.playing=false;
  resize(); if(G.mode==='clinic') layoutClinic(); else layoutSalon();
}
$('#btnStart').addEventListener('click',()=>{
  $('#intro').classList.remove('on'); Audio2.play('ok'); buzz(14);
  G.playing=true; G.introT=0;
  showHint(G.mode==='clinic'?t('hintXray'):t('hintSoap'),3);
});

function finishCase(){
  if(G.over) return;
  G.over=true; G.playing=false;
  const par = G.patient.par;
  let stars;
  if(G.mode==='clinic'){
    G.smile=0.001;
    if(G.err<=2 && G.time<=par) stars=3;
    else if(G.err<=5 && G.time<=par*1.5) stars=2;
    else stars=1;
  } else {
    const sameStamp = G.nails.every(n=>n.stamp && n.stamp===G.nails[0].stamp);
    let s = (G.err<=2 && G.time<=par)?3:(G.err<=5 && G.time<=par*1.5)?2:1;
    if(sameStamp && s<3) s=Math.min(3,s+0); // carimbo igual dá bônus em moedas
    stars=s; G._sameStamp=sameStamp;
  }
  const base = 22 + G.patient.diff*7;
  let coin = Math.round(base*stars*(G.err===0?1.35:1));
  if(G.mode==='salon' && G._sameStamp) coin+=25;
  G.coin=coin; S.coins+=coin;
  const key = G.mode==='clinic'?'stars':'salonStars';
  const prev=S[key][G.patient.id]||0;
  if(stars>prev) S[key][G.patient.id]=stars;
  save(); updateCoins();
  Audio2.play('win'); buzz([25,60,25,60,40]);
  for(let k=0;k<46;k++) spark(G.layout.mx||W/2,(G.layout.my||H*.45)+(Math.random()-.5)*120,
    ['#ffd166','#7cf0c0','#ff77c8','#fff'][k%4]);
  setTimeout(()=>showResult(stars),1250);
}

function showResult(stars){
  const salon=G.mode==='salon';
  $('#resEmoji').textContent = salon?'💅':'😁';
  $('#resTitle').textContent = salon?t('doneSalon'):t('done');
  $('#resText').textContent = (salon?t('doneSalonSub'):t('doneSub'))
    + (G.err===0?' '+t('perfect'):'') + (salon&&G._sameStamp?' ⭐ '+t('bonusStamp'):'');
  const s=$('#resStars'); s.innerHTML='';
  for(let i=0;i<3;i++){ const el=document.createElement('i'); el.textContent = i<stars?'★':'☆'; s.appendChild(el); }
  $('#resTime').textContent=fmtTime(G.time);
  $('#resErr').textContent=G.err;
  $('#resCoin').textContent=G.coin;
  $('#resAgain').textContent='↻ '+t('again');
  $('#resNext').textContent='▶ '+t('next');
  $('#resHome').textContent='🏠 '+t('home');
  $('#result').classList.add('on');
  buildMenu();
}

function showScreen(id){
   $all('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  $('#hud').classList.toggle('on',id==='play');
  if(id==='menu'){ G.playing=false; buildMenu(); }
}
function goHome(){
  $('#intro').classList.remove('on'); $('#result').classList.remove('on'); $('#pause').classList.remove('on');
  G.playing=false; G.over=false; app.screen='menu'; showScreen('menu'); Audio2.play('click');
}

/* ---------------------------------------------------------------- menu ---- */
function faceCanvas(p,size){
  const c=document.createElement('canvas');
  c.width=size*2; c.height=size*2; c.style.width=size+'px'; c.style.height=size+'px';
  const g=c.getContext('2d'); g.setTransform(2,0,0,2,0,0);
  g.clearRect(0,0,size,size);
  drawPatientFace(g,p,size/2,size*.62,size*.8,0.4,{mouth:'smile'});
  return c;
}
function handCanvas(p,size){
  const c=document.createElement('canvas');
  c.width=size*2; c.height=size*2; c.style.width=size+'px'; c.style.height=size+'px';
  const g=c.getContext('2d'); g.setTransform(2,0,0,2,0,0);
  const s=size*.5;
  g.fillStyle=p.skin; rr(g,s*.42,s*.62,s*1.16,s*1.0,s*.4); g.fill();
  g.lineCap='round'; g.strokeStyle=p.skin; g.lineWidth=s*.3;
  [[.62,.62,.56,.2],[.86,.6,.84,.14],[1.14,.6,1.18,.14],[1.38,.64,1.44,.24]].forEach(f=>{
    g.beginPath(); g.moveTo(s*f[0],s*f[1]); g.lineTo(s*f[2],s*f[3]); g.stroke(); });
  g.strokeStyle=shade(p.skin,-.14); g.lineWidth=s*.24;
  g.beginPath(); g.moveTo(s*.44,s*1.0); g.lineTo(s*.2,s*.72); g.stroke();
  g.fillStyle=p.nail;
  [[.56,.16],[.84,.1],[1.18,.1],[1.46,.2],[.18,.68]].forEach(n=>{
    ell(g,s*n[0],s*n[1],s*.13,s*.11,0); g.fill(); });
  g.fillStyle='rgba(255,255,255,.65)';
  [[.56,.16],[.84,.1],[1.18,.1],[1.46,.2],[.18,.68]].forEach(n=>{
    ell(g,s*n[0]-s*.04,s*n[1]-s*.03,s*.04,s*.03,-.5); g.fill(); });
  return c;
}
function buildMenu(){
  updateCoins();
  const row=$('#prow'); row.innerHTML='';
  PATIENTS.forEach(p=>{
    const b=document.createElement('button'); b.className='pcard';
    const stars=S.stars[p.id]||0;
    b.appendChild(faceCanvas(p,64));
    const nm=document.createElement('div'); nm.className='nm'; nm.textContent=pname(p); b.appendChild(nm);
    const st=document.createElement('div'); st.className='st';
    st.textContent=(stars>0?'★'.repeat(stars):'—');
    b.appendChild(st);
    b.addEventListener('click',()=>{ Audio2.init(); Audio2.play('click'); startClinic(p); });
    row.appendChild(b);
  });
  const row2=$('#srow'); row2.innerHTML='';
  SALON_CLIENTS.forEach(p=>{
    const b=document.createElement('button'); b.className='pcard';
    const stars=S.salonStars[p.id]||0;
    b.appendChild(handCanvas(p,64));
    const nm=document.createElement('div'); nm.className='nm'; nm.textContent=pname(p); b.appendChild(nm);
    const st=document.createElement('div'); st.className='st'; st.textContent=(stars>0?'★'.repeat(stars):'—');
    b.appendChild(st);
    b.addEventListener('click',()=>{ Audio2.init(); Audio2.play('click'); startSalon(p); });
    row2.appendChild(b);
  });
}

/* ------------------------------------------------------------- ponteiros -- */
function pos(e){ const r=cv.getBoundingClientRect(); return {x:e.clientX-r.left,y:e.clientY-r.top}; }
cv.addEventListener('pointerdown',e=>{
  Audio2.init(); Audio2.resume();
  if(!G.playing) return;
  const p=pos(e); G.pointer.x=p.x; G.pointer.y=p.y; G.pointer.down=true;
  G.pointer.inside = p.x>=0 && p.y>=0 && p.x<=W && p.y<=H;
  try{ cv.setPointerCapture(e.pointerId); }catch(err){}
  e.preventDefault();
});
cv.addEventListener('pointermove',e=>{
  const p=pos(e); G.pointer.x=p.x; G.pointer.y=p.y;
  G.pointer.inside = p.x>=0&&p.y>=0&&p.x<=W&&p.y<=H;
});
function up(e){ G.pointer.down=false; G.scanOn=false; }
cv.addEventListener('pointerup',up);
cv.addEventListener('pointercancel',up);
cv.addEventListener('pointerleave',()=>{ G.pointer.inside=false; });
window.addEventListener('contextmenu',e=>e.preventDefault());

/* ---------------------------------------------------------------- fundo --- */
function drawRoom(c,t){
  const salon = G.mode==='salon';
  const g=c.createLinearGradient(0,0,0,H);
  if(salon){ g.addColorStop(0,'#3a1d4d'); g.addColorStop(.55,'#251436'); g.addColorStop(1,'#150c22'); }
  else { g.addColorStop(0,'#1d3a63'); g.addColorStop(.5,'#152a4d'); g.addColorStop(1,'#0b1730'); }
  c.fillStyle=g; c.fillRect(0,0,W,H);
  // azulejos
  c.save(); c.globalAlpha=.14; c.strokeStyle='#bcd6ff'; c.lineWidth=1;
  const ts=Math.max(38,W/8);
  for(let x=0;x<W;x+=ts){ c.beginPath(); c.moveTo(x,0); c.lineTo(x,H*.72); c.stroke(); }
  for(let y=0;y<H*.72;y+=ts){ c.beginPath(); c.moveTo(0,y); c.lineTo(W,y); c.stroke(); }
  c.restore();
  // luminária
  const lx=W*.5, ly=H*.055;
  c.save();
  c.fillStyle='#20304f'; rr(c,lx-W*.16,ly,W*.32,H*.03,10); c.fill();
  const lg=c.createRadialGradient(lx,ly+H*.05,4,lx,ly+H*.05,W*.5);
  lg.addColorStop(0,salon?'rgba(255,150,220,.35)':'rgba(180,225,255,.34)');
  lg.addColorStop(1,'rgba(0,0,0,0)');
  c.fillStyle=lg; c.beginPath(); c.moveTo(lx-W*.42,H*.72); c.lineTo(lx-W*.13,ly+H*.03);
  c.lineTo(lx+W*.13,ly+H*.03); c.lineTo(lx+W*.42,H*.72); c.closePath(); c.fill();
  c.restore();
  // chão
  c.fillStyle='rgba(0,0,0,.28)'; c.fillRect(0,H*.86,W,H*.14);
}

/* ------------------------------------------------------------------ loop -- */
let last=performance.now();
function frame(now){
  const ts = (typeof now==='number' && isFinite(now)) ? now : performance.now();
  let dt = (ts-last)/1000; last = ts;
  if(!isFinite(dt) || dt<0) dt = 1/60;     // nunca deixa NaN entrar no estado do jogo
  dt = Math.min(.05, dt);
  G.dt=dt; G.t=(isFinite(G.t)?G.t:0)+dt;
  resizeIfNeeded();
  cx.clearRect(0,0,W,H);
  cx.save();
  if(G.shakeT>0){ const s=G.shakeT*10; cx.translate((Math.random()-.5)*s,(Math.random()-.5)*s); }

  if(app.screen==='play' && G.patient){
    drawRoom(cx,G.t);
    if(G.mode==='clinic'){
      layoutClinic();
      const L=G.layout;
      drawPatientFace(cx,G.patient,L.mx,L.my,L.mw,G.t,{});
      drawMouth(cx,G.t);
      drawXray(cx);
      if(G.playing) applyClinicTool(dt);
      drawToolCursor(cx);
      if(G.revealFlash>0){ G.revealFlash=Math.max(0,G.revealFlash-dt);
        cx.fillStyle=`rgba(150,220,255,${G.revealFlash*.18})`; cx.fillRect(0,0,W,H); }
    } else {
      layoutSalon();
      const L=G.layout;
      cx.save(); cx.font=`${Math.round(L.hw*.22)}px serif`; cx.textAlign='center';
      cx.globalAlpha=.9; cx.fillText(G.patient.emoji,L.hx,L.hy-L.hw*.42); cx.restore();
      cx.save(); cx.textAlign='center'; cx.fillStyle='rgba(255,255,255,.7)';
      cx.font=`800 ${Math.max(13,W*.038)}px ${FONT||'sans-serif'}`;
      cx.fillText(pname(G.patient),L.hx,L.hy-L.hw*.24); cx.restore();
      drawSalonHand(cx,G.patient,G.t);
      if(G.playing) applySalonTool(dt);
      drawToolCursor(cx);
    }
    updateFx(dt); drawFx(cx);
    if(G.playing){
      G.time+=dt; $('#uiTime').textContent=fmtTime(G.time);
      if(G.mode==='clinic' && G.smile>0 && G.smile<1) G.smile=Math.min(1,G.smile+dt*.9);
    }
    if(errChipT>0){ errChipT-=dt; }
  } else {
    // fundo do menu é CSS
  }
  cx.restore();
  requestAnimationFrame(frame);
}
let lastW=0,lastH=0;
function resizeIfNeeded(){
  const r=cv.getBoundingClientRect();
  if(Math.abs(r.width-lastW)>.6||Math.abs(r.height-lastH)>.6){ lastW=r.width; lastH=r.height; resize(); }
}

const TOOL_ICO={ xray:'🔦',brush:'🪥',pick:'⛏️',drill:'🦷',vac:'🌀',heal:'💉',
  soap:'🧼',base:'🥛',paint:'🎨',stamp:'⭐',gloss:'✨',strip:'🧽' };
function drawToolCursor(c){
  const P=G.pointer;
  if(!P.inside || app.screen!=='play' || !G.playing) return;
  const R = G.mode==='clinic'? G.layout.toolR : G.layout.toolR;
  c.save();
  if(G.tool==='xray'){
    c.strokeStyle='rgba(140,220,255,.9)'; c.lineWidth=2;
    c.beginPath(); c.arc(P.x,P.y,R*.8,0,TAU); c.stroke();
    c.fillStyle='rgba(120,200,255,.12)'; c.fill();
  } else if(G.tool==='vac'){
    c.strokeStyle='rgba(255,255,255,.5)'; c.lineWidth=2; c.setLineDash([6,6]);
    c.beginPath(); c.arc(P.x,P.y,R*.75,G.t*3,G.t*3+TAU); c.stroke(); c.setLineDash([]);
  } else {
    c.strokeStyle='rgba(255,255,255,.55)'; c.lineWidth=2;
    c.beginPath(); c.arc(P.x,P.y,R*.6,0,TAU); c.stroke();
    c.fillStyle='rgba(255,255,255,.08)'; c.fill();
  }
  c.font=`${Math.round(R*.72)}px serif`; c.textAlign='center'; c.textBaseline='middle';
  const bob=Math.sin(G.t*10)*(P.down?2.4:1.2);
  c.fillText(TOOL_ICO[G.tool]||'•',P.x+R*.5,P.y-R*.42+bob);
  c.restore();
}

/* ------------------------------------------------------------ configurações */
function applyLang(){
  L=I18N[S.lang]||I18N.pt;
  document.documentElement.lang = S.lang==='pt'?'pt-BR':'en';
   $all('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  $('#pauseTitle').textContent='⏸ '+t('paused');
  $('#shopTitle').textContent='🛍 '+t('shopTitle');
  $('#btnLang').textContent = S.lang==='pt'?'EN':'PT';
  $('#btnLang2').textContent = S.lang==='pt'?'EN':'PT';
  $('#setClose').textContent=t('close');
  $('#resAgain').textContent='↻ '+t('again');
  $('#resNext').textContent='▶ '+t('next');
  $('#resHome').textContent='🏠 '+t('home');
  buildMenu();
  if(G.mode){ buildToolbar(); refreshChecklist(); }
  if(G.mode==='salon') buildPaints();
}
function toggleLang(){ S.lang = S.lang==='pt'?'en':'pt'; save(); applyLang(); Audio2.play('click'); }
function bindToggles(){
  const pairs=[['#tgSound','#tgSound2','sound'],['#tgVib','#tgVib2','vib']];
  pairs.forEach(p=>{
    [p[0],p[1]].forEach(sel=>{
      const el=$(sel); if(!el) return;
      el.addEventListener('click',()=>{
        S[p[2]]=!S[p[2]]; save(); syncToggles(); Audio2.play('click');
        if(p[2]==='sound'&&S.sound){ Audio2.init(); Audio2.play('ok'); }
        if(p[2]==='vib') buzz(20);
      });
    });
  });
}
function syncToggles(){
  $('#tgSound').classList.toggle('on',!!S.sound); $('#tgSound2').classList.toggle('on',!!S.sound);
  $('#tgVib').classList.toggle('on',!!S.vib);   $('#tgVib2').classList.toggle('on',!!S.vib);
}

/* ---------------------------------------------------------------- eventos - */
$('#btnClinic').addEventListener('click',()=>{ Audio2.init(); Audio2.play('click'); startClinic(PATIENTS[0]); });
$('#btnSalon').addEventListener('click',()=>{ Audio2.init(); Audio2.play('click'); startSalon(SALON_CLIENTS[0]); });
$('#btnHome').addEventListener('click',goHome);
$('#btnPause').addEventListener('click',()=>{ G.playing=false; $('#pause').classList.add('on'); Audio2.play('click'); });
$('#pResume').addEventListener('click',()=>{ $('#pause').classList.remove('on'); G.playing=!G.over; Audio2.play('click'); });
$('#pHome').addEventListener('click',()=>{ $('#pause').classList.remove('on'); goHome(); });
$('#btnSet').addEventListener('click',()=>{ $('#settings').classList.add('on'); Audio2.play('click'); });
$('#setClose').addEventListener('click',()=>{ $('#settings').classList.remove('on'); Audio2.play('click'); });
$('#btnLang').addEventListener('click',toggleLang);
$('#btnLang2').addEventListener('click',toggleLang);
$('#btnReset').addEventListener('click',()=>{
  S=Object.assign({},DEF_SAVE,{lang:S.lang,sound:S.sound,vib:S.vib}); save();
  updateCoins(); buildMenu(); syncToggles(); Audio2.play('bad'); buzz(40);
});
$('#resHome').addEventListener('click',goHome);
$('#resAgain').addEventListener('click',()=>{
  $('#result').classList.remove('on'); Audio2.play('click');
  if(G.mode==='clinic') startClinic(G.patient); else startSalon(G.patient);
});
$('#resNext').addEventListener('click',()=>{
  $('#result').classList.remove('on'); Audio2.play('click');
  const list = G.mode==='clinic'?PATIENTS:SALON_CLIENTS;
  const i=list.findIndex(x=>x.id===G.patient.id);
  const nx=list[(i+1)%list.length];
  if(G.mode==='clinic') startClinic(nx); else startSalon(nx);
});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden && G.playing){ G.playing=false; $('#pause').classList.add('on'); }
});
window.addEventListener('keydown',e=>{
  if(app.screen!=='play') return;
  const list=TOOLS[G.mode];
  const n=parseInt(e.key,10);
  if(n>=1&&n<=list.length) setTool(list[n-1].id);
  if(e.key==='Escape') $('#btnPause').click();
});

/* ------------------------------------------------------------------ boot -- */
load(); applyLang(); bindToggles(); syncToggles(); resize(); buildMenu(); updateCoins();
requestAnimationFrame(frame);
