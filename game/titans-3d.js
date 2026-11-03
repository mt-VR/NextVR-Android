/* ============================================================================
   CLÍNICA DOS TITÃS 3D — edição com modelos 3D, hand tracking (MediaPipe) e
   ferramentas pegáveis sobre a mesa/bandeja. Todo o conteúdo é procedural
   (sem assets externos de modelo); o Three.js vai embutido no HTML.
   ========================================================================== */
'use strict';

/* ---------------------------------------------------------------- i18n ---- */
const I18N = {
  pt: {
    tag3d: 'Sala 3D com hand tracking: pegue os instrumentos na mesa com um pinça dos dedos.',
    patients: 'Pacientes', progress: 'Progresso',
    howto: '<b>Como jogar:</b> pegue um instrumento na <b>mesa</b> (pinçe com polegar+indicador, ou toque nele). '
      + 'Encoste nos dentes para tratar. Para guardar, pinçe/toque sobre a mesa de novo. '
      + 'Sem câmera? Funciona por toque: arraste para mover a mão virtual.',
    htOn: 'on', htOff: 'off', htLoading: '…', htDenied: 'sem câmera',
    rotate:'Gire o celular para o modo paisagem 🔄', noGyro:'Sem giroscópio: arraste na tela para olhar ao redor', hintGrab: 'Pegue um instrumento na mesa para começar.',
    hintXray: 'Aponte a lanterna de Raio-X para a boca e segure para revelar cáries ocultas.',
    done: 'Sorriso de Milhão!', perfect: 'Perfeito! Nenhum erro.',
    again: 'De novo', next: 'Próximo', home: 'Menu', paused: 'Pausado', resume: 'Continuar',
    kPlaque: 'Placa', kTartar: 'Tártaro', kCaries: 'Cáries', kDebris: 'Detritos', kHidden: 'Oculta',
    tXray: 'Raio-X', tBrush: 'Escova', tPick: 'Picareta', tDrill: 'Broca', tVac: 'Aspirador', tHeal: 'Curar'
  },
  en: {
    tag3d: '3D room with hand tracking: pick the instruments from the table with a finger pinch.',
    patients: 'Patients', progress: 'Progress',
    howto: '<b>How to play:</b> grab an instrument from the <b>table</b> (pinch thumb+index, or tap it). '
      + 'Touch the teeth to treat. To put it back, pinch/tap the table again. '
      + 'No camera? Touch works: drag to move the virtual hand.',
    htOn: 'on', htOff: 'off', htLoading: '…', htDenied: 'no camera',
    rotate:'Rotate your phone to landscape mode 🔄', noGyro:'No gyroscope: drag on the screen to look around',
    hintGrab: 'Grab an instrument from the table to start.',
    hintXray: 'Point the X-Ray light at the mouth and hold to reveal hidden cavities.',
    done: 'Million-Dollar Smile!', perfect: 'Perfect! No mistakes.',
    again: 'Again', next: 'Next', home: 'Menu', paused: 'Paused', resume: 'Resume',
    kPlaque: 'Plaque', kTartar: 'Tartar', kCaries: 'Cavities', kDebris: 'Debris', kHidden: 'Hidden',
    tXray: 'X-Ray', tBrush: 'Brush', tPick: 'Pickaxe', tDrill: 'Drill', tVac: 'Vacuum', tHeal: 'Heal'
  }
};
const PATIENTS = [
  { id:'gorila',  emoji:'🦍', skin:0x5e8c4f, skin2:0x3f6336, belly:0xc9d8a8, eye:0xffd54a, diff:1, par:80,  deco:'horns',  name:{pt:'Brutinho, o Gorila', en:'Brutus the Gorilla'} },
  { id:'vampiro', emoji:'🧛', skin:0xcdd6ea, skin2:0x9aa6c6, belly:0x7b2740, eye:0xff4d5e, diff:2, par:92,  deco:'cape',   name:{pt:'Conde Dentinho', en:'Count Fangly'} },
  { id:'princesa',emoji:'👸', skin:0xf6c6d8, skin2:0xdf9fba, belly:0xffe6f1, eye:0x63d7ff, diff:2, par:98,  deco:'crown',  name:{pt:'Princesa Sorriso', en:'Princess Smile'} },
  { id:'noel',    emoji:'🎅', skin:0xf4c3a0, skin2:0xd99a76, belly:0xffffff, eye:0x4aa3ff, diff:3, par:108, deco:'santahat',name:{pt:'Vovô Noel', en:'Grandpa Claus'} },
  { id:'alien',   emoji:'👽', skin:0x8fe36a, skin2:0x5fb444, belly:0xd9ffb8, eye:0x1b1b3a, diff:3, par:116, deco:'antenna',name:{pt:'Zyx, o Alien', en:'Zyx the Alien'} },
  { id:'zumbi',   emoji:'🧟', skin:0x9fb59a, skin2:0x6f8a6b, belly:0x4c6b48, eye:0xf2ff6b, diff:4, par:130, deco:'stitches',name:{pt:'Zé Podridão', en:'Rotty Ron'} }
];
const TOOLS = [
  { id:'xray',  key:'tXray',  color:0x66d9ff },
  { id:'brush', key:'tBrush', color:0xff5fa2 },
  { id:'pick',  key:'tPick',  color:0x2f7fe0 },
  { id:'drill', key:'tDrill', color:0xb9c4d6 },
  { id:'vac',   key:'tVac',   color:0x8f7bff },
  { id:'heal',  key:'tHeal',  color:0x7cf0c0 }
];

/* ------------------------------------------------------------- utilidades - */
const $ = s => document.querySelector(s);
const clamp = (v,a,b) => v<a?a:v>b?b:v;
const lerp = (a,b,t) => a+(b-a)*t;
let S = { lang:'pt', sound:true, vib:true, coins:0, stars:{} };
function load(){ try{ const r=localStorage.getItem('titans-clinic-mobile');
  if(r) S=Object.assign(S,JSON.parse(r)); }catch(e){} }
function save(){ try{ localStorage.setItem('titans-clinic-mobile',JSON.stringify(S)); }catch(e){} }
let L = I18N.pt; const t = k => L[k]||I18N.pt[k]||k;
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0;
  let x=Math.imul(a^a>>>15,1|a); x=x+Math.imul(x^x>>>7,61|x)^x;
  return ((x^x>>>14)>>>0)/4294967296; }; }
const fmtTime = s => Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');

/* ------------------------------------------------------------------ som --- */
const Sfx = {
  ctx:null, ok:false,
  init(){ if(this.ok) return; try{ const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC) return; this.ctx=new AC(); this.ok=true; }catch(e){} },
  play(kind){ if(!S.sound) return; this.init(); if(!this.ok) return;
    if(this.ctx.state==='suspended') this.ctx.resume();
    const c=this.ctx, now=c.currentTime, g=c.createGain(); g.connect(c.destination);
    const tone=(f0,f1,dur,type,vol)=>{ const o=c.createOscillator(); o.type=type||'sine';
      o.frequency.setValueAtTime(f0,now); if(f1) o.frequency.exponentialRampToValueAtTime(f1,now+dur);
      g.gain.setValueAtTime(vol||.18,now); g.gain.exponentialRampToValueAtTime(.0001,now+dur);
      o.connect(g); o.start(now); o.stop(now+dur+.02); };
    if(kind==='click') tone(520,0,.12,'triangle');
    else if(kind==='pop') tone(320,900,.2);
    else if(kind==='ok') tone(520,1040,.2);
    else if(kind==='clink') tone(1180,420,.12,'square',.12);
    else if(kind==='bad') tone(180,90,.26,'sawtooth');
    else if(kind==='heal'){ [660,880,1320].forEach((f,i)=>setTimeout(()=>tone(f,0,.3,'sine',.12),i*60)); }
    else if(kind==='win'){ [523,659,784,1046].forEach((f,i)=>setTimeout(()=>tone(f,0,.45,'triangle',.16),i*100)); }
    else if(kind==='grab') tone(240,420,.14,'triangle',.14);
  }
};
const buzz = ms => { if(S.vib && navigator.vibrate){ try{ navigator.vibrate(ms); }catch(e){} } };

/* ------------------------------------------------------------ estado jogo - */
const G = {
  patient:null, teeth:[], tool:null, held:null, slotOf:{},
  time:0, err:0, playing:false, over:false, scan:0, scanOn:false,
  cursor:new THREE.Vector3(0,-0.2,0.95), cursorTarget:new THREE.Vector3(0,-0.2,0.95),
  pinch:false, pinchPrev:false, touchDown:false, smile:0, coin:0,
  hand:null, ht:false, htState:'off', lm:null, t:0
};
const PLANE_Z = 0.95;              // plano de interação (onde ficam mesa e boca)
const TRAY_Y  = -0.62;             // altura da mesa
const MOUTH   = new THREE.Vector3(0,-0.10,0.62);
const MOUTH_R = 0.40;

/* ---------------------------------------------------------------- cena ---- */
let renderer, scene, camera, patientGroup, toolMeshes=[], handRig, beamMesh, rayLight;
const clock = new THREE.Clock();

function initScene(canvas){
  renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:false, powerPreference:'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2b3140);
  scene.fog = new THREE.Fog(0x2b3140, 6.5, 11);
  camera = new THREE.PerspectiveCamera(50, 1, 0.05, 30);
  camera.position.set(0, 0.02, 3.25);
  camera.lookAt(0, -0.02, 0);

  scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x2a2438, 1.05));
  const key = new THREE.DirectionalLight(0xfff2dd, 1.5);
  key.position.set(1.6, 2.4, 2.6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x86a8ff, .5);
  rim.position.set(-2, 1.2, -1.4); scene.add(rim);
  rayLight = new THREE.PointLight(0x66d9ff, 0, 2.2); scene.add(rayLight);

  buildRoom();
  buildTable();
  handRig = buildHandRig(); scene.add(handRig.group);
  beamMesh = buildBeam(); scene.add(beamMesh);
  onResize();
}
let lookYaw=0, lookPitch=0, tLookYaw=0, tLookPitch=0;   // olhar (giroscópio/arrastar)
let gyroOn=false, gyroBase=null, dragLook=null, toastShown=false;

function layoutCamera(){
  const land = innerWidth >= innerHeight;               // modo paisagem = close na boca
  camera.fov = land? 55 : 50;
  camera.position.set(0, land? -0.04 : 0.02, land? 2.20 : 3.25);
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  G.land = land;
}
function applyLook(){
  camera.lookAt(0, G.land? -0.10 : -0.02, 0);
  camera.rotateY(lookYaw);                              // estilo WebXR: gira a cabeça
  camera.rotateX(lookPitch);
  camera.updateMatrixWorld();
}
function rotateToast(){
  const touch = matchMedia('(pointer:coarse)').matches;
  if(innerWidth >= innerHeight){ toastShown=false; return; }
  if(touch && G.playing && !toastShown){ toastShown=true; showHint(t('rotate'), 3.4); }
}
function onResize(){
  renderer.setSize(innerWidth, innerHeight, false);
  layoutCamera(); rotateToast();
}
addEventListener('resize', onResize);
addEventListener('orientationchange', onResize);

function buildRoom(){
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(14,14),
    new THREE.MeshStandardMaterial({ color:0x767e8c, roughness:.9 }));
  floor.rotation.x = -Math.PI/2; floor.position.y = -1.35; scene.add(floor);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(14,8),
    new THREE.MeshStandardMaterial({ color:0xc3cad4, roughness:.85 }));
  wall.position.set(0,1.2,-2.2); scene.add(wall);
  // painéis claros + frisos neon azuis (clínica sci-fi do original)
  const panel = new THREE.MeshStandardMaterial({ color:0x9aa4b2, roughness:.8 });
  [-2.6,-1.3,1.3,2.6].forEach(x=>{
    const p = new THREE.Mesh(new THREE.BoxGeometry(.9,3.4,.06), panel);
    p.position.set(x,.9,-2.16); scene.add(p);
  });
  const neon = new THREE.MeshStandardMaterial({ color:0x2fb7ff, emissive:0x1490d6, emissiveIntensity:1.1 });
  [-1.95,0,1.95].forEach(x=>{
    const n = new THREE.Mesh(new THREE.BoxGeometry(.05,3.2,.05), neon);
    n.position.set(x,.9,-2.12); scene.add(n);
  });
  const grid = new THREE.GridHelper(12, 24, 0xffffff, 0x8fa0b5);
  grid.position.set(0,1.19,-2.19); grid.rotation.x = Math.PI/2;
  grid.material.transparent = true; grid.material.opacity = .12; scene.add(grid);
  // luminária
  const lamp = new THREE.Mesh(new THREE.CylinderGeometry(.5,.62,.16,24),
    new THREE.MeshStandardMaterial({ color:0x20304f, roughness:.6 }));
  lamp.position.set(0,1.9,0.4); scene.add(lamp);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(.3,16,12),
    new THREE.MeshBasicMaterial({ color:0xdff1ff }));
  bulb.position.set(0,1.82,0.4); scene.add(bulb);
  const spot = new THREE.SpotLight(0xcfe6ff, 26, 7, .62, .5, 1.6);
  spot.position.set(0,1.8,0.4); spot.target.position.set(0,-0.2,0.4);
  scene.add(spot); scene.add(spot.target);
  // cadeira
  const chair = new THREE.Mesh(new THREE.BoxGeometry(1.5,.35,1.1),
    new THREE.MeshStandardMaterial({ color:0xaeb6c2, roughness:.75 }));
  chair.position.set(0,-0.95,-0.35); scene.add(chair);
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.5,1.5,.28),
    new THREE.MeshStandardMaterial({ color:0xaeb6c2, roughness:.75 }));
  back.position.set(0,-0.15,-0.85); back.rotation.x = -.18; scene.add(back);
}

function buildTable(){
 const wood = new THREE.MeshStandardMaterial({color:0xa7afbc, roughness:.7 });
  const top = new THREE.Mesh(new THREE.BoxGeometry(1.9,.08,1.0), wood);
  top.position.set(0, TRAY_Y-0.06, 1.05); scene.add(top);
  [[-0.85,0.72],[0.85,0.72],[-0.85,1.4],[0.85,1.4]].forEach(p=>{
    const leg = new THREE.Mesh(new THREE.BoxGeometry(.09,0.72,.09),
      new THREE.MeshStandardMaterial({ color:0x8b93a0, roughness:.7 }));
    leg.position.set(p[0], TRAY_Y-0.44, p[1]); scene.add(leg);
  });
  // bandeja de instrumentos
  const tray = new THREE.Mesh(new THREE.BoxGeometry(1.02,.035,.4),
    new THREE.MeshStandardMaterial({ color:0xe8edf3, roughness:.3, metalness:.35 }));
  tray.position.set(0, TRAY_Y-0.005, 0.95); scene.add(tray);
  const rim = new THREE.Mesh(new THREE.BoxGeometry(1.06,.06,.44),
    new THREE.MeshStandardMaterial({ color:0x2fb7ff, emissive:0x1490d6, emissiveIntensity:.85,
      roughness:.4, metalness:.3 }));
  rim.position.set(0, TRAY_Y-0.02, 0.95); scene.add(rim);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(1.9,.02,.02),
    new THREE.MeshStandardMaterial({ color:0x66d9ff, emissive:0x22aadd, emissiveIntensity:1.2 }));
  strip.position.set(0, TRAY_Y-0.05, 1.53); scene.add(strip);   // neon na borda da mesa
  tray.position.y += .012;
}

/* ----------------------------------------------------------- modelos 3D --- */
function toothMeshes(){
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color:0xfffdf6, roughness:.35 });
  const core = new THREE.Mesh(new THREE.BoxGeometry(.085,.12,.075), mat);
  // arredonda visualmente com uma capa
  const cap = new THREE.Mesh(new THREE.SphereGeometry(.052,12,10), mat);
  cap.position.y = .055; cap.scale.set(1,.7,1); g.add(core, cap);
  const plaque = new THREE.Mesh(new THREE.BoxGeometry(.095,.1,.085),
    new THREE.MeshStandardMaterial({ color:0xcbb45e, roughness:.9, transparent:true, opacity:.85 }));
  plaque.position.y = .01; plaque.visible = false; g.add(plaque);
  const tartar = new THREE.Mesh(new THREE.BoxGeometry(.098,.05,.088),
    new THREE.MeshStandardMaterial({ color:0x8a5a2c, roughness:1 }));
  tartar.position.y = -.045; tartar.visible = false; g.add(tartar);
  const caries = new THREE.Mesh(new THREE.SphereGeometry(.036,10,8),
    new THREE.MeshStandardMaterial({ color:0x2a1710, roughness:.95 }));
  caries.position.set(0,.02,.045); caries.visible = false; g.add(caries);
  const debris = new THREE.Group();
  for(let k=0;k<4;k++){
    const d = new THREE.Mesh(new THREE.DodecahedronGeometry(.018),
      new THREE.MeshStandardMaterial({ color:0x5a3626, roughness:1 }));
    d.position.set((k%2?-.03:.03)+ (k>1?.012:-.01), -.02+(k>1?.02:0), .06);
    debris.add(d);
  }
  debris.visible = false; g.add(debris);
  const heal = new THREE.Mesh(new THREE.SphereGeometry(.034,10,8),
    new THREE.MeshStandardMaterial({ color:0xffffff, roughness:.12, metalness:.05 }));
  heal.position.set(0,.02,.046); heal.visible = false; g.add(heal);
  g.userData.parts = { mat, plaque, tartar, caries, debris, heal };
  return g;
}

function buildPatient(p){
  if(patientGroup) scene.remove(patientGroup);
  patientGroup = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color:p.skin, roughness:.62 });
  const skin2 = new THREE.MeshStandardMaterial({ color:p.skin2, roughness:.7 });
  // tronco
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(.62,.5,6,16), skin2);
  body.position.set(0,-1.05,-.15); patientGroup.add(body);
  // cabeça
  const head = new THREE.Mesh(new THREE.SphereGeometry(.55,28,22), skin);
  head.position.set(0,.12,0); head.scale.set(1,1.04,.95); patientGroup.add(head);
  // orelhas
  [-1,1].forEach(dx=>{
    const ear = new THREE.Mesh(new THREE.SphereGeometry(.12,14,10), skin);
    ear.position.set(dx*.55,.16,-.02); ear.scale.set(.6,1,.8); patientGroup.add(ear);
  });
  // decorações
  if(p.deco==='horns') [-1,1].forEach(dx=>{
    const h = new THREE.Mesh(new THREE.ConeGeometry(.09,.34,12),
      new THREE.MeshStandardMaterial({ color:0xe8dcc0, roughness:.6 }));
    h.position.set(dx*.3,.62,-.02); h.rotation.z = -dx*.5; patientGroup.add(h);
  });
  if(p.deco==='antenna') [-1,1].forEach(dx=>{
    const a = new THREE.Mesh(new THREE.CylinderGeometry(.015,.015,.34,8), skin2);
    a.position.set(dx*.18,.66,0); a.rotation.z = -dx*.3; patientGroup.add(a);
    const b = new THREE.Mesh(new THREE.SphereGeometry(.05,10,8),
      new THREE.MeshStandardMaterial({ color:0xff5fa2, emissive:0x661133 }));
    b.position.set(dx*.28,.82,0); patientGroup.add(b);
  });
  if(p.deco==='crown'){
    const c = new THREE.Mesh(new THREE.CylinderGeometry(.3,.34,.16,8),
      new THREE.MeshStandardMaterial({ color:0xffd84d, metalness:.7, roughness:.3 }));
    c.position.set(0,.62,0); patientGroup.add(c);
  }
  if(p.deco==='santahat'){
    const h = new THREE.Mesh(new THREE.ConeGeometry(.4,.5,16),
      new THREE.MeshStandardMaterial({ color:0xc8202f, roughness:.8 }));
    h.position.set(.08,.66,-.05); h.rotation.z = -.5; patientGroup.add(h);
    const b = new THREE.Mesh(new THREE.SphereGeometry(.09,10,8),
      new THREE.MeshStandardMaterial({ color:0xffffff }));
    b.position.set(.3,.82,-.05); patientGroup.add(b);
  }
  // olhos
  [-1,1].forEach(dx=>{
    const w = new THREE.Mesh(new THREE.SphereGeometry(.11,16,12),
      new THREE.MeshStandardMaterial({ color:0xffffff, roughness:.25 }));
    w.position.set(dx*.2,.40,.44); patientGroup.add(w);
    const ir = new THREE.Mesh(new THREE.SphereGeometry(.055,12,10),
      new THREE.MeshStandardMaterial({ color:p.eye, roughness:.2 }));
    ir.position.set(dx*.2,.40,.52); patientGroup.add(ir);
    const pu = new THREE.Mesh(new THREE.SphereGeometry(.026,10,8),
      new THREE.MeshStandardMaterial({ color:0x14142e }));
    pu.position.set(dx*.2,.40,.565); patientGroup.add(pu);
  });
  // nariz
  [-1,1].forEach(dx=>{
    const n = new THREE.Mesh(new THREE.SphereGeometry(.035,10,8), skin2);
    n.position.set(dx*.06,.30,.52); patientGroup.add(n);
  });
  // boca: focinho proeminente — fundo escuro NA FRENTE da superfície da cabeça
  const backdrop = new THREE.Mesh(new THREE.SphereGeometry(.40,24,18),
    new THREE.MeshStandardMaterial({ color:0x43091b, roughness:.9 }));
  backdrop.position.set(0, MOUTH.y, .48);
  backdrop.scale.set(1.03,.92,.20); patientGroup.add(backdrop);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(.24,18,12),
    new THREE.MeshStandardMaterial({ color:0xc9405f, roughness:.5 }));
  tongue.position.set(0, MOUTH.y-.14, .60); tongue.scale.set(1,.45,.8);
  patientGroup.add(tongue);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(.375,.042,12,28),
    new THREE.MeshStandardMaterial({ color:new THREE.Color(p.skin).multiplyScalar(.5), roughness:.55 }));
  lip.position.set(0, MOUTH.y, .74); lip.scale.set(1.04,.9,1);
  patientGroup.add(lip);

  // dentes em duas arcadas
  G.teeth = [];
  const N = 8;
  for(let i=0;i<2*N;i++){
    const up = i<N, slot = up?i:i-N;
    const u = (slot+.5)/N;
    const ang = up ? Math.PI*(1-u) : Math.PI*u;
    const rx = .30, rz = .16;
    const x = Math.cos(ang)*rx;
    const z = Math.sin(ang)*.16 + .56;
    const y = MOUTH.y + (up? .20 : -.185);
    const tm = toothMeshes();
    tm.position.set(x,y,z);
    tm.rotation.y = -ang + Math.PI/2;
    if(!up) tm.rotation.z = Math.PI;
    patientGroup.add(tm);
    G.teeth.push(Object.assign({ i, up, slot, mesh:tm,
      plaque:0, tartar:0, caries:0, hidden:false, revealed:true, reveal:0,
      drilled:0, drilledNeed:1.5, debris:0, healed:false, wasCaries:false,
      flash:0, wp:new THREE.Vector3() }, {}));
  }
  patientGroup.updateMatrixWorld(true);
  G.teeth.forEach(tt=> tt.mesh.getWorldPosition(tt.wp));
  scene.add(patientGroup);
  applyTeethVisuals();
}

function applyTeethVisuals(){
  G.teeth.forEach(tt=>{
    const P = tt.mesh.userData.parts;
    P.plaque.visible = tt.plaque>0;
    P.plaque.material.opacity = .45+.5*tt.plaque;
    P.tartar.visible = tt.tartar>0;
    const showCar = tt.caries>0 && !tt.healed && !(tt.hidden && !tt.revealed);
    P.caries.visible = showCar;
    if(showCar){
      const drilling = tt.drilled>0;
      P.caries.material.color.setHex(drilling?0x5b2ea6:0x8a4bd8);
      P.caries.material.emissive.setHex(G.scanOn?0x2a1660:0x000000);
      P.caries.scale.setScalar(1+tt.drilled*.35);
    }
    P.debris.visible = tt.debris>0;
    P.heal.visible = tt.healed;
    P.mat.color.setHex(tt.plaque>0?0xe6dcae:tt.tartar>0?0xd9c48c:0xfffdf6);
    if(tt.flash>0){ P.mat.emissive.setHex(0x661122); } else P.mat.emissive.setHex(0x000000);
  });
}

/* ------------------------------------------------------- instrumentos 3D -- */
function buildToolModel(id, color){
  const g = new THREE.Group();
  const plastic = new THREE.MeshStandardMaterial({ color, roughness:.4 });
  const metal = new THREE.MeshStandardMaterial({ color:0xcfd8e6, metalness:.8, roughness:.25 });
  const dark = new THREE.MeshStandardMaterial({ color:0x2b2b45, roughness:.6 });
  if(id==='brush'){
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(.02,.026,.34,10), plastic);
    g.add(handle);
    const head = new THREE.Mesh(new THREE.BoxGeometry(.05,.1,.035), plastic);
    head.position.y = .21; g.add(head);
    const br = new THREE.Mesh(new THREE.BoxGeometry(.045,.09,.02),
      new THREE.MeshStandardMaterial({ color:0xffffff, roughness:.9 }));
    br.position.set(0,.21,.028); g.add(br);
  } else if(id==='pick'){
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(.018,.024,.32,10), plastic);
    g.add(handle);
    const headM = new THREE.Mesh(new THREE.TorusGeometry(.11,.02,8,14,Math.PI), metal);
    headM.position.y = .17; headM.rotation.z = Math.PI; g.add(headM);
  } else if(id==='drill'){
    const bodyM = new THREE.Mesh(new THREE.CylinderGeometry(.035,.045,.26,12), metal);
    g.add(bodyM);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,.1,12),
      new THREE.MeshStandardMaterial({ color:0x2f7fe0, roughness:.5 }));
    grip.position.y = -.12; g.add(grip);
    const tipGold = new THREE.Mesh(new THREE.ConeGeometry(.014,.06,10),
      new THREE.MeshStandardMaterial({ color:0xd8a53a, metalness:.9, roughness:.3 }));
    tipGold.position.y = .23; g.add(tipGold);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(.018,.09,10), metal);
    tip.position.y = .17; g.add(tip);
  } else if(id==='vac'){
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(.028,.034,.3,10), plastic);
    g.add(tube);
    const nozzle = new THREE.Mesh(new THREE.ConeGeometry(.05,.1,12,1,true), metal);
    nozzle.position.y = .19; g.add(nozzle);
  } else if(id==='heal'){
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(.07,.24,.06), plastic);
    g.add(bodyM);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(.022,.022,.12,10), metal);
    barrel.position.y = .17; g.add(barrel);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(.028,10,8),
      new THREE.MeshStandardMaterial({ color:0x7cf0c0, emissive:0x22aa77, emissiveIntensity:1.4 }));
    glow.position.y = .24; g.add(glow);
  } else { // xray
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(.08,.22,.05), dark);
    g.add(bodyM);
    const lens = new THREE.Mesh(new THREE.SphereGeometry(.045,12,10),
      new THREE.MeshStandardMaterial({ color:0x66d9ff, emissive:0x1177aa, emissiveIntensity:1.2 }));
    lens.position.y = .14; lens.scale.set(1,.7,.7); g.add(lens);
  }
  g.traverse(o=>{ if(o.isMesh){ o.castShadow=false; } });
  g.userData.toolId = id;
  return g;
}
function buildTools(){
  toolMeshes.forEach(m=>scene.remove(m));
  toolMeshes = TOOLS.map((tool,i)=>{
    const m = buildToolModel(tool.id, tool.color);
    m.rotation.set(Math.PI/2, 0, 0);   // deitada, apontando para o fundo
    const slot = slotPos(i);
    m.position.copy(slot);
    G.slotOf[tool.id] = i;
    scene.add(m);
    return m;
  });
}
function slotPos(i){
  return new THREE.Vector3(-0.36 + i*0.144, TRAY_Y+0.045, 0.95);
}
function buildBeam(){
  const geo = new THREE.ConeGeometry(.34,.9,18,1,true);
  const mat = new THREE.MeshBasicMaterial({ color:0x66d9ff, transparent:true, opacity:.18,
    side:THREE.DoubleSide, depthWrite:false });
  const m = new THREE.Mesh(geo, mat); m.visible=false; return m;
}
function buildHandRig(){
  const group = new THREE.Group(); group.visible=false;
  const mat = new THREE.MeshStandardMaterial({ color:0xffd9c4, roughness:.5,
    transparent:true, opacity:.85 });
  const palm = new THREE.Mesh(new THREE.SphereGeometry(.075,14,10), mat);
  palm.scale.set(1,.55,1.15); group.add(palm);
  const bones = [];
  const CHAINS = [[0,1,2,3,4],[0,5,6,7,8],[0,9,10,11,12],[0,13,14,15,16],[0,17,18,19,20]];
  CHAINS.forEach(chain=>{
    for(let k=1;k<chain.length;k++){
      const seg = new THREE.Mesh(new THREE.CylinderGeometry(.016,.02,.1,8), mat);
      group.add(seg); bones.push({ a:chain[k-1], b:chain[k], mesh:seg });
    }
  });
  const pinchRing = new THREE.Mesh(new THREE.TorusGeometry(.05,.008,8,20),
    new THREE.MeshBasicMaterial({ color:0x7cf0c0, transparent:true, opacity:.9 }));
  group.add(pinchRing);
  return { group, bones, palm, pinchRing, pts:Array.from({length:21},()=>new THREE.Vector3()) };
}

/* ------------------------------------------------- hand tracking (MediaPipe) */
const HT = { landmarker:null, video:null, lastVideoTime:-1, loading:false };
async function enableHT(){
  if(HT.loading) return;
  if(G.ht){ disableHT(); return; }
  HT.loading = true; setHTState('…');
  try{
    const stream = await navigator.mediaDevices.getUserMedia({
      video:{ facingMode:'user', width:{ideal:640}, height:{ideal:480} } });
    const video = $('#pip'); video.srcObject = stream; await video.play();
    HT.video = video; video.classList.add('on');
    const vision = await import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs');
    const fileset = await vision.FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
    const modelUrl = await pickModelUrl();
    HT.landmarker = await vision.HandLandmarker.createFromOptions(fileset, {
      baseOptions:{ modelAssetPath:modelUrl, delegate:'GPU' },
      runningMode:'VIDEO', numHands:1, minHandDetectionConfidence:.5 });
    G.ht = true; setHTState('on'); Sfx.play('ok');
    showHint('🖐 '+t('hintGrab'), 4);
  }catch(err){
    console.warn('hand tracking indisponível:', err && err.message);
    setHTState('✖'); G.ht=false;
    showHint('🖐 '+t('htDenied')+' — modo toque ativo', 3.5);
  }
  HT.loading=false;
}
function disableHT(){
  G.ht=false; setHTState('off');
  if(HT.video && HT.video.srcObject){ HT.video.srcObject.getTracks().forEach(tr=>tr.stop()); }
  HT.video = null; $('#pip').classList.remove('on');
  handRig.group.visible=false;
}
async function pickModelUrl(){
  const local = 'nextvr-android/src/main/assets/hand_landmarker.task';
  try{
    const r = await fetch(local, { method:'HEAD' });
    if(r.ok) return new URL(local, location.href).href;
  }catch(e){}
  return 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
}
function setHTState(s){ G.htState=s; $('#htState').textContent=s;
  $('#btnHT').classList.toggle('ht-on', s==='on'); }
function pollHands(){
  if(!G.ht || !HT.landmarker || !HT.video) return;
  const v = HT.video;
  if(v.readyState < 2 || v.currentTime === HT.lastVideoTime) return;
  HT.lastVideoTime = v.currentTime;
  let res;
  try{ res = HT.landmarker.detectForVideo(v, performance.now()); }catch(e){ return; }
  const lms = res && res.landmarks && res.landmarks[0];
  G.lm = lms || null;
  if(!lms){ handRig.group.visible=false; return; }
  // mapeia landmarks -> mundo no plano de interação
  const dims = planeDims();
  handRig.group.visible = true;
  for(let i=0;i<21;i++){
    const lm = lms[i];
    handRig.pts[i].set((0.5-lm.x)*dims.w*1.18, 0.05+(0.5-lm.y)*dims.h*1.42, PLANE_Z);
  }
  handRig.palm.position.copy(handRig.pts[0]);
  handRig.bones.forEach(b=>{
    const a=handRig.pts[b.a], c=handRig.pts[b.b];
    b.mesh.position.copy(a).add(c).multiplyScalar(.5);
    const d = c.clone().sub(a); const len = d.length();
    b.mesh.scale.set(1, Math.max(.2,len/.1), 1);
    b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), d.normalize());
  });
  const pinchD = lms[4] && lms[8] ? dist2(lms[4],lms[8]) : 1;
  const palmD  = dist2(lms[0],lms[9]) || .1;
  const ratio = pinchD/palmD;
  handRig.pinchRing.position.copy(handRig.pts[4]).add(handRig.pts[8]).multiplyScalar(.5);
  handRig.pinchRing.material.color.setHex(ratio<.62?0x7cf0c0:0xffffff);
  const pinchNow = ratio < .62;
  if(pinchNow && !G.pinchPrev) onPinchStart();
  G.pinch = pinchNow; G.pinchPrev = pinchNow;
  G.cursorTarget.copy(handRig.pts[8]);   // cursor na ponta do indicador
}
function dist2(a,b){ const dx=a.x-b.x, dy=a.y-b.y, dz=(a.z||0)-(b.z||0);
  return Math.sqrt(dx*dx+dy*dy+dz*dz); }
function planeDims(){
  const dist = camera.position.z - PLANE_Z;
  const h = 2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*dist;
  return { h, w: h*camera.aspect };
}

/* -------------------------------------------------------------- interação - */
function onPinchStart(){
  if(!G.playing) return;
  Sfx.play('click');
  if(G.held && G.cursor.y < TRAY_Y+0.28){
    const prev = G.held;
    const got = tryGrab();          // pinçou outro instrumento? troca direta
    releaseToSlot(prev);            // o anterior volta para o seu lugar
    if(got) showHint(toolLabel(G.held.userData.toolId), 1.6);
    return;
  }
  tryGrab();
}
function releaseToSlot(m){
  if(!m) return;
  const id = m.userData.toolId;
  m.position.copy(slotPos(G.slotOf[id]));
  m.rotation.set(Math.PI/2,0,0);
  m.userData.held = false;
  if(G.held===m) G.held = null;
  G.scanOn=false; beamMesh.visible=false; rayLight.intensity=0;
  Sfx.play('clink'); buzz(10);
}
function tryGrab(){
  let best=null, bd=1e9;
  toolMeshes.forEach(m=>{
    if(m.userData.held) return;
    const d = Math.hypot(m.position.x-G.cursor.x, m.position.y-G.cursor.y);
    if(d<.16 && d<bd){ bd=d; best=m; }
  });
  if(best){
    G.held = best; best.userData.held = true;
    Sfx.play('grab'); buzz(18);
    showHint(toolLabel(best.userData.toolId), 1.6);
    return true;
  }
  return false;
}
function putDown(){ releaseToSlot(G.held); }
function toolLabel(id){ const td=TOOLS.find(x=>x.id===id); return td? t(td.key):id; }

let lastMistake=-9;
function mistake(pos){
  if(G.t-lastMistake<.85) return;
  lastMistake=G.t; G.err++; $('#uiErr').textContent=G.err;
  Sfx.play('bad'); buzz(45);
  popup3d(pos, '✖', 0xff8b96);
}
const popups3d=[];
function popup3d(pos, txt, color){
  const c=document.createElement('div');
  popups3d.push({ pos:pos.clone(), t:0, el:null, txt, color });
}
function toothAtCursor(rad){
  let best=null, bd=1e9;
  G.teeth.forEach(tt=>{
    const d = Math.hypot(tt.wp.x-G.cursor.x, tt.wp.y-G.cursor.y);
    if(d<(rad||.14) && d<bd){ bd=d; best=tt; }
  });
  return best;
}

function applyHeldTool(dt){
  if(!G.held) { G.scanOn=false; beamMesh.visible=false; rayLight.intensity=0; return; }
  const id = G.held.userData.toolId;
  // ferramenta acompanha a mão, ponta no cursor
  const grip = new THREE.Vector3(.05,-.11,.1);
  G.held.position.lerp(G.cursor.clone().add(grip), .5);
  G.held.rotation.set(-.55, 0, .35);
  if(id==='xray'){
    const inMouth = G.cursor.distanceTo(MOUTH) < MOUTH_R+.1;
    G.scanOn = inMouth;
    beamMesh.visible = inMouth;
    rayLight.intensity = inMouth? 6:0;
    if(inMouth){
      beamMesh.position.copy(MOUTH).lerp(G.cursor,.35);
      beamMesh.lookAt(G.cursor);
      beamMesh.rotateX(Math.PI/2);
      G.scan = Math.min(1, G.scan+dt*1.4);
      rayLight.position.copy(G.cursor);
      G.teeth.forEach(tt=>{
        if(tt.hidden && !tt.revealed){
          tt.reveal += dt*.9;
          if(tt.reveal>=1){ tt.revealed=true; Sfx.play('ok'); buzz(20);
            popup3d(tt.wp,'🔦',0x8fe0ff); refreshChecklist(); }
        }
      });
    } else G.scan = Math.max(0,G.scan-dt*2);
    applyTeethVisuals();
    return;
  }
  const tt = toothAtCursor(.15);
  if(!tt) return;
  if(id==='brush'){
    if(tt.plaque>0){ tt.plaque=Math.max(0,tt.plaque-dt*1.25); tt.mesh.rotation.x=Math.sin(G.t*30)*.05;
      if(tt.plaque===0){ Sfx.play('pop'); buzz(14); popup3d(tt.wp,'✔',0x7cf0c0); markTooth(tt); } }
    else mistake(tt.wp);
  } else if(id==='pick'){
    if(tt.tartar>0){
      if(!tt._cd || G.t-tt._cd>.16){ tt._cd=G.t; tt.tartar=Math.max(0,tt.tartar-.4);
        Sfx.play('clink'); buzz(14);
        if(tt.tartar===0){ Sfx.play('ok'); popup3d(tt.wp,'✔',0xffd166); markTooth(tt); } } }
    else mistake(tt.wp);
  } else if(id==='drill'){
    if(tt.caries>0 && !tt.healed && !(tt.hidden&&!tt.revealed)){
      tt.drilled+=dt*1.1; tt.mesh.rotation.x=Math.sin(G.t*45)*.06;
      if(!tt._ds || G.t-tt._ds>.3){ Sfx.play('clink'); tt._ds=G.t; }
      if(tt.drilled>=tt.drilledNeed){ tt.drilled=0; tt.caries=0; tt.debris=1; tt.wasCaries=true;
        Sfx.play('pop'); buzz(24); popup3d(tt.wp,'💨',0xffb27a); markTooth(tt); } }
    else if(tt.caries>0 && tt.hidden && !tt.revealed){
      if(!tt._xw || G.t-tt._xw>1.4){ tt._xw=G.t; popup3d(tt.wp,'🔦',0x8fe0ff); Sfx.play('bad'); } }
    else mistake(tt.wp);
  } else if(id==='vac'){
    if(tt.debris>0){ tt.debris=Math.max(0,tt.debris-dt*1.8);
      if(!tt._vs || G.t-tt._vs>.3){ Sfx.play('grab'); tt._vs=G.t; }
      if(tt.debris===0){ Sfx.play('ok'); buzz(14); popup3d(tt.wp,'✔',0x7cf0c0); markTooth(tt); } }
    else if(tt.plaque>0||tt.tartar>0||tt.caries>0) mistake(tt.wp);
  } else if(id==='heal'){
    if(tt.wasCaries && !tt.debris && !tt.caries && !tt.healed){
      tt.healP=(tt.healP||0)+dt*1.4;
      if(!tt._hs || G.t-tt._hs>.34){ Sfx.play('heal'); tt._hs=G.t; }
      if(tt.healP>=1){ tt.healed=true; Sfx.play('win'); buzz([18,40,18]);
        popup3d(tt.wp,'✨',0xffffff); markTooth(tt); } }
    else mistake(tt.wp);
  }
  applyTeethVisuals();
}
function markTooth(tt){ refreshChecklist(); if(clinicDone()) finishCase(); }
function countsOf(){
  const c={plaque:0,tartar:0,caries:0,debris:0,hidden:0,heal:0};
  G.teeth.forEach(tt=>{ if(tt.plaque>0)c.plaque++; if(tt.tartar>0)c.tartar++;
    if(tt.caries>0&&!tt.healed)c.caries++; if(tt.debris>0)c.debris++;
    if(tt.caries>0&&tt.hidden&&!tt.revealed)c.hidden++;
    if(tt.wasCaries&&!tt.healed)c.heal++; });
  return c;
}
function clinicDone(){ const c=countsOf();
  return c.plaque===0&&c.tartar===0&&c.caries===0&&c.debris===0&&c.heal===0; }

/* ------------------------------------------------------------------- HUD -- */
function refreshChecklist(){
  const c=countsOf(), box=$('#checklist'); box.innerHTML='';
  [['kPlaque',c.plaque,''],['kTartar',c.tartar,''],['kCaries',c.caries,''],
   ['kDebris',c.debris,''],['kHidden',c.hidden,'hidden-t']].forEach(r=>{
    const d=document.createElement('div');
    d.className='task'+(r[1]===0?' done':'')+(r[2]?' '+r[2]:'');
    d.innerHTML=`<span class="dot"></span>${t(r[0])} <b>${r[1]}</b>`;
    box.appendChild(d);
  });
}
let hintT=null;
function showHint(txt,secs){
  const h=$('#hint'); h.textContent=txt; h.classList.add('on');
  if(hintT) clearTimeout(hintT);
  hintT=setTimeout(()=>h.classList.remove('on'),(secs||2.6)*1000);
}
function updateCoins(){ $('#coinMenu').textContent=S.coins; }

/* ---------------------------------------------------------------- fluxo --- */
function makeCase(p){
  const rnd = mulberry32(p.diff*9173 + p.id.length*7717 + 12345);
  const counts = { plaque:2+Math.round(p.diff*.7), tartar:1+Math.round(p.diff*.6),
    caries:1+Math.round(p.diff*.8), hidden:Math.ceil(p.diff/2) };
  G.teeth.forEach(tt=>Object.assign(tt,{ plaque:0,tartar:0,caries:0,hidden:false,revealed:true,
    reveal:0,drilled:0,debris:0,healed:false,wasCaries:false,healP:0,flash:0 }));
  const idx = G.teeth.map(tt=>tt.i);
  const take=(n,props)=>{ for(let k=0;k<n&&idx.length;k++){
    const j=Math.floor(rnd()*idx.length); const i=idx.splice(j,1)[0];
    Object.assign(G.teeth[i],props); } };
  take(counts.plaque,{plaque:1});
  take(counts.tartar,{tartar:1});
  take(counts.caries,{caries:1});
  take(counts.hidden,{caries:1,hidden:true,revealed:false});
}
function startClinic(p){
  G.patient=p; G.over=false; G.err=0; G.time=0; G.smile=0; G.held=null; G.scan=0;
  buildPatient(p); makeCase(p); buildTools(); applyTeethVisuals();
  refreshChecklist(); $('#uiErr').textContent='0'; $('#uiTime').textContent='0:00';
  $('#introEmoji').textContent=p.emoji;
  $('#introName').textContent=p.name[S.lang]||p.name.pt;
  $('#introText').textContent=t('howto').replace(/<[^>]+>/g,'');
  const c=countsOf(), d=$('#introDiag'); d.innerHTML='';
  [['🔦',t('hintXray')],['🪥',`${t('kPlaque')}: ${c.plaque}`],
   ['⛏️',`${t('kTartar')}: ${c.tartar}`],['🦷',`${t('kCaries')}: ${c.caries}`]]
   .forEach(r=>{ const div=document.createElement('div');
     div.innerHTML=`<span>${r[0]}</span><span>${r[1]}</span>`; d.appendChild(div); });
  $('#intro').classList.add('on');
  showScreen('play');
}
function finishCase(){
  if(G.over) return;
  G.over=true; G.playing=false; putDown();
  const par=G.patient.par;
  const stars = (G.err<=2&&G.time<=par)?3:(G.err<=5&&G.time<=par*1.5)?2:1;
  const coin = Math.round((22+G.patient.diff*7)*stars*(G.err===0?1.35:1));
  G.coin=coin; S.coins+=coin;
  if(stars>(S.stars[G.patient.id]||0)) S.stars[G.patient.id]=stars;
  save(); updateCoins(); Sfx.play('win'); buzz([25,60,25]);
  setTimeout(()=>{
    $('#resTitle').textContent=t('done');
    $('#resText').textContent=(G.err===0?t('perfect'):'');
    const s=$('#resStars'); s.innerHTML='';
    for(let i=0;i<3;i++){ const el=document.createElement('i');
      el.textContent=i<stars?'★':'☆'; s.appendChild(el); }
    $('#resTime').textContent=fmtTime(G.time);
    $('#resErr').textContent=G.err; $('#resCoin').textContent=coin;
    $('#result').classList.add('on');
  },900);
}
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  $('#hud').classList.toggle('on',id==='play');
  if(id==='menu'){ G.playing=false; buildMenu(); }
}
function goHome(){
  ['#intro','#result','#pause'].forEach(s=>$(s).classList.remove('on'));
  G.playing=false; showScreen('menu');
}
function buildMenu(){
  updateCoins();
  const row=$('#prow'); row.innerHTML='';
  PATIENTS.forEach(p=>{
    const b=document.createElement('button'); b.className='pcard';
    const stars=S.stars[p.id]||0;
    b.innerHTML=`<div class="em">${p.emoji}</div><div class="nm">${p.name[S.lang]||p.name.pt}</div>`
      + `<div class="st">${stars?'★'.repeat(stars):'—'}</div>`;
    b.addEventListener('click',()=>{ Sfx.init(); Sfx.play('click'); startClinic(p); });
    row.appendChild(b);
  });
}

/* --------------------------------------------------------- entrada toque -- */
function screenToPlane(cx,cy){
  const ndc = new THREE.Vector2((cx/innerWidth)*2-1, -(cy/innerHeight)*2+1);
  const ray = new THREE.Raycaster();
  ray.setFromCamera(ndc, camera);
  // snap: se o toque aponta para um dente, o cursor vai exatamente nele
  let best=null, bd=.13;
  G.teeth.forEach(tt=>{ const d=ray.ray.distanceToPoint(tt.wp); if(d<bd){ bd=d; best=tt; } });
  if(best) return best.wp.clone();
  const plane = new THREE.Plane(new THREE.Vector3(0,0,1), -PLANE_Z);
  const out = new THREE.Vector3();
  ray.ray.intersectPlane(plane, out);
  return out;
}
/* ---------------------------------------------------- giroscópio (WebXR-like) */
function wrapPi(a){ while(a>Math.PI)a-=2*Math.PI; while(a<-Math.PI)a+=2*Math.PI; return a; }
function onOrient(e){
  if(e.beta==null) return;
  if(!gyroBase){ gyroBase={a:e.alpha||0,b:e.beta,g:e.gamma}; return; }
  const da=wrapPi(THREE.MathUtils.degToRad((e.alpha||0)-gyroBase.a));
  const db=THREE.MathUtils.degToRad(e.beta-gyroBase.b);
  const dg=THREE.MathUtils.degToRad(e.gamma-gyroBase.g);
  const ang=(screen.orientation&&screen.orientation.angle!=null)?screen.orientation.angle:(window.orientation||0);
  let yaw,pit;                                   // paisagem: beta=virar, gamma=inclinar
  if(ang===90){ yaw=-db; pit=dg; }
  else if(ang===270||ang===-90){ yaw=db; pit=-dg; }
  else { yaw=-da; pit=db; }
  tLookYaw  = THREE.MathUtils.clamp(yaw, -.6, .6);
  tLookPitch= THREE.MathUtils.clamp(pit, -.35, .35);
}
function gyroChip(on){
  const b=$('#btnGyro'); if(!b) return;
  b.classList.toggle('ht-on', on);
  const st=$('#gyState'); if(st) st.textContent = on? 'on':'off';
}
function enableGyro(){
  const DO=window.DeviceOrientationEvent;
  if(!DO){ showHint(t('noGyro'), 2.6); return; }
  const go=()=>{ gyroOn=true; gyroBase=null;
    addEventListener('deviceorientation', onOrient); gyroChip(true); Sfx.play('ok'); };
  if(DO.requestPermission){
    DO.requestPermission().then(r=>{ r==='granted'? go() : showHint(t('noGyro'), 2.6); })
      .catch(()=>showHint(t('noGyro'), 2.6));
  } else go();
}
function disableGyro(){
  gyroOn=false; gyroBase=null; removeEventListener('deviceorientation', onOrient);
  tLookYaw=0; tLookPitch=0; gyroChip(false);
}

function bindInput(canvas){
  canvas.addEventListener('pointerdown',e=>{
    Sfx.init();
    if(!G.playing) return;
    G.touchDown=true;
    const p=screenToPlane(e.clientX,e.clientY);
    if(p){ G.cursorTarget.copy(p); G.cursor.copy(p); }   // imediato: pega no tap
    dragLook = G.held? null : { x:e.clientX, y:e.clientY, active:false };
    onPinchStart();
    e.preventDefault();
  });
  canvas.addEventListener('pointermove',e=>{
    if(G.ht) return;                      // com mão real, o tracking domina
    if(dragLook && !G.held){              // sem ferramenta: arrastar = olhar ao redor
      const dx=e.clientX-dragLook.x, dy=e.clientY-dragLook.y;
      if(!dragLook.active && Math.hypot(dx,dy)>10) dragLook.active=true;
      if(dragLook.active){
        tLookYaw  = THREE.MathUtils.clamp(tLookYaw  - dx*0.0009, -.6, .6);
        tLookPitch= THREE.MathUtils.clamp(tLookPitch- dy*0.0007, -.35, .35);
        dragLook.x=e.clientX; dragLook.y=e.clientY;
        return;
      }
    }
    const p=screenToPlane(e.clientX,e.clientY);
    if(p) G.cursorTarget.copy(p);
  });
  const up=()=>{ G.touchDown=false; dragLook=null; };
  canvas.addEventListener('pointerup',up);
  canvas.addEventListener('pointercancel',up);
  addEventListener('contextmenu',e=>e.preventDefault());
}

/* ------------------------------------------------------------------ loop -- */
function tick(){
  requestAnimationFrame(tick);
  const dt = Math.min(.05, clock.getDelta());
  G.t += dt;
  pollHands();
  if(!G.ht) handRig.group.visible=false;
  // suaviza cursor
  G.cursor.lerp(G.cursorTarget, G.ht? .45 : .6);
  // suaviza o olhar (giroscópio / arrastar) e aplica na câmera
  lookYaw   += (tLookYaw-lookYaw)*.16;
  lookPitch += (tLookPitch-lookPitch)*.16;
  applyLook();
  if(G.playing){
    G.time+=dt; $('#uiTime').textContent=fmtTime(G.time);
    applyHeldTool(dt);
    G.teeth.forEach(tt=>{ if(tt.flash>0) tt.flash=Math.max(0,tt.flash-dt*2); });
  }
  // respiração da cena
  if(patientGroup) patientGroup.position.y = Math.sin(G.t*1.4)*.012;
  renderer.render(scene, camera);
}

/* ------------------------------------------------------------------ boot -- */
function applyLang(){
  L=I18N[S.lang]||I18N.pt;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  $('#howto').innerHTML=t('howto');
  $('#pauseTitle').textContent='⏸ '+t('paused');
  $('#resAgain').textContent='↻ '+t('again');
  $('#resNext').textContent='▶ '+t('next');
  $('#resHome').textContent='🏠 '+t('home');
  $('#pResume').textContent='▶ '+t('resume');
  $('#btnStart').textContent='▶ '+t('resume');
  buildMenu();
}
load(); applyLang();
const canvas = document.createElement('canvas');
canvas.className='gl';
document.getElementById('app').prepend(canvas);
initScene(canvas);
bindInput(canvas);
buildTools();
tick();

$('#btnHT').addEventListener('click',()=>{ Sfx.init(); enableHT(); });
$('#btnHome').addEventListener('click',goHome);
$('#btnPause').addEventListener('click',()=>{ G.playing=false; $('#pause').classList.add('on'); });
$('#pResume').addEventListener('click',()=>{ $('#pause').classList.remove('on'); G.playing=!G.over; });
$('#pHome').addEventListener('click',()=>{ $('#pause').classList.remove('on'); goHome(); });
$('#btnStart').addEventListener('click',()=>{ $('#intro').classList.remove('on');
  G.playing=true; Sfx.play('ok'); buzz(12); showHint(t('hintGrab'),3.2);
  try{ const fs=document.documentElement;
    if(fs.requestFullscreen) fs.requestFullscreen({navigationUI:'hide'}).catch(()=>{}); }catch(e){}
  try{ if(screen.orientation&&screen.orientation.lock)
    screen.orientation.lock('landscape').catch(()=>{}); }catch(e){}
  rotateToast(); });
$('#btnGyro').addEventListener('click',()=>{ Sfx.init(); gyroOn? disableGyro() : enableGyro(); });
$('#resHome').addEventListener('click',goHome);
$('#resAgain').addEventListener('click',()=>{ $('#result').classList.remove('on'); startClinic(G.patient); });
$('#resNext').addEventListener('click',()=>{
  $('#result').classList.remove('on');
  const i=PATIENTS.findIndex(x=>x.id===G.patient.id);
  startClinic(PATIENTS[(i+1)%PATIENTS.length]);
});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden && G.playing){ G.playing=false; $('#pause').classList.add('on'); }
});

/* ------------------------------------------------- hooks de debug/teste ---- */
function projectToScreen(v){
  const p = v.clone().project(camera);
  return { x: (p.x*0.5+0.5)*innerWidth, y: (-p.y*0.5+0.5)*innerHeight };
}
window.__toolScreenPos = id => {
  const m = toolMeshes.find(mm=>mm.userData.toolId===id);
  return m ? projectToScreen(m.position) : null;
};
window.__toothScreenPos = kind => {
  const tt = G.teeth.find(x =>
    kind==='plaque' ? x.plaque>0 :
    kind==='tartar' ? x.tartar>0 :
    kind==='caries' ? (x.caries>0 && !x.healed && x.revealed) :
    kind==='debris' ? x.debris>0 :
    kind==='heal'   ? (x.wasCaries && !x.healed && !x.debris) : true);
  return tt ? projectToScreen(tt.wp) : null;
};
window.__G = G;
window.__mouthScreenPos = () => projectToScreen(MOUTH);
window.__dbg = {
  info: kind => { const tt = G.teeth.find(t => {
      if (kind==='plaque') return t.plaque>0;
      if (kind==='tartar') return t.tartar>0;
      if (kind==='caries') return t.caries>0 && !t.healed && t.revealed && t.debris<=0;
      if (kind==='debris') return t.debris>0;
      if (kind==='heal')   return t.caries>0 && t.revealed && !t.healed && t.debris<=0;
      return false; });
    return tt && { idx: tt.idx, arch: tt.arch, wp: tt.wp.toArray().map(v=>+v.toFixed(3)),
      plaque:+tt.plaque.toFixed(2), tartar:+tt.tartar.toFixed(2), caries:+tt.caries.toFixed(2),
      debris:+tt.debris.toFixed(2), healed:tt.healed, revealed:tt.revealed }; },
  cursor: () => G.cursor.toArray().map(v=>+v.toFixed(3)),
  held: () => G.held && G.held.userData.toolId,
  nearest: () => { const t = toothAtCursor(.15); return t && t.idx; }
};
