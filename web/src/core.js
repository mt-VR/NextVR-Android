// NextVR — núcleo: estado, idiomas, cena, giroscópio e centralização.
import * as THREE from 'three';
import { migrateComfort } from './comfort.js';
import { AtlasRenderer, VIEW } from './atlas.js';
export const native = !!window.NativeXR;
export const viewport = native ? VIEW : { width: innerWidth, height: innerHeight };
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

/* ============================ estado ============================ */
const DEF = {
  lang: null,
  handsOn: true, handDraw: 0,
  winCurve: 1, winScale: .75, winDist: 2.2, winTilt: 1,
  // Curvatura "360" das janelas: ligada por padrão? (0/1) e a meia-abertura do arco em radianos.
  win360: 0, win360K: 1.15,
  dockSize: 1, dockDist: 1, dockApps: 'browser,youtube,gallery,env,settings,menu',
  env: 'passthrough', quality: 'auto', showFps: 0,
};
let S = { ...DEF };
try { S = { ...DEF, ...JSON.parse(localStorage.getItem('nextvr.v1') || '{}') }; } catch {}
if(native){S=migrateComfort(S);S.handsOn=true;try{localStorage.setItem('nextvr.v1',JSON.stringify(S));}catch{}}
export const settings = S;
export const save = () => { try { localStorage.setItem('nextvr.v1', JSON.stringify(S)); } catch {} };

/* ============================ idiomas ============================ */
const STR = {
  pt: {
    desktop:'Área de trabalho', browser:'Navegador', youtube:'YouTube', gallery:'Galeria',
    settings:'Configurações', menu:'Menu', store:'Loja', env:'Ambientes', keyboard:'Teclado', center:'Centralizar',
    search:'Pesquisar na web', searchYt:'Pesquisar vídeos', open:'Abrir', close:'Fechar',
    general:'Geral', hands:'Hand tracking', windows:'Janelas', dock:'Dock', perf:'Desempenho',
    language:'Idioma', on:'Ativado', off:'Desativado', sens:'Sensibilidade', scale:'Escala',
    dist:'Distância', curve:'Curvatura', size:'Tamanho', quality:'Qualidade', apps:'Aplicativos',
    recents:'Recentes', battery:'Bateria', net:'Conexão', time:'Hora',
    pickPhotos:'Escolher fotos', noPhotos:'Nenhuma foto escolhida ainda.',
    photosHelp:'As fotos ficam só no aparelho e não saem do Next VR.',
    centered:'Ambiente centralizado', langChanged:'Idioma alterado',
    arcFull:'Arco cheio (máx. 5 apps) — fechando',
    envPass:'Camera passthrough', envSunset:'Panorama 360° · pôr do sol',
    envNight:'Panorama 360° · cidade à noite', envSpace:'Panorama 360° · espaço',
    win360:'Curvatura 360°', win360k:'Meia-abertura do arco (0.2 leve · 1.1 bem curvada)',
    win360All:'Abrir novas janelas já curvadas', win360Btn:'Curvar esta janela em 360°',
    langTitle:'Idioma', langSoon:'Mais idiomas chegam nas próximas versões.',
    langContinue:'Continuar', langPick:'Escolha seu idioma',
    micOff:'Ditado por voz indisponível neste aparelho',
    notif:'Notificações', noNotif:'Sem notificações novas', profile:'Perfil',
    repin:'Voltar ao arco de janelas', resize:'Redimensionar janela', moveWindow:'Mover janela',
    moveDock:'Mover a dock',
  },
  en: {
    desktop:'Desktop', browser:'Browser', youtube:'YouTube', gallery:'Gallery',
    settings:'Settings', menu:'Menu', store:'Store', env:'Environments', keyboard:'Keyboard', center:'Recenter',
    search:'Search the web', searchYt:'Search videos', open:'Open', close:'Close',
    general:'General', hands:'Hand tracking', windows:'Windows', dock:'Dock', perf:'Performance',
    language:'Language', on:'On', off:'Off', sens:'Sensitivity', scale:'Scale',
    dist:'Distance', curve:'Curve', size:'Size', quality:'Quality', apps:'Apps',
    recents:'Recent', battery:'Battery', net:'Network', time:'Time',
    pickPhotos:'Pick photos', noPhotos:'No photos picked yet.',
    photosHelp:'Photos stay on the device and never leave Next VR.',
    centered:'View recentered', langChanged:'Language changed',
    arcFull:'Arc full (max 5 apps) — closing',
    envPass:'Camera passthrough', envSunset:'360° panorama · sunset',
    envNight:'360° panorama · city at night', envSpace:'360° panorama · space',
    win360:'360° curvature', win360k:'Arc half-angle (0.2 subtle · 1.1 very curved)',
    win360All:'Open new windows already curved', win360Btn:'Curve this window in 360°',
    langTitle:'Language', langSoon:'More languages are coming in the next versions.',
    langContinue:'Continue', langPick:'Choose your language',
    micOff:'Voice dictation is unavailable on this device',
    notif:'Notifications', noNotif:'No new notifications', profile:'Profile',
    repin:'Return to the window arc', resize:'Resize window', moveWindow:'Move window',
    moveDock:'Move the dock',
  },
  es: {
    desktop:'Escritorio', browser:'Navegador', youtube:'YouTube', gallery:'Galería',
    settings:'Ajustes', menu:'Menú', store:'Tienda', env:'Entornos', keyboard:'Teclado', center:'Centrar',
    search:'Buscar en la web', searchYt:'Buscar vídeos', open:'Abrir', close:'Cerrar',
    general:'General', hands:'Hand tracking', windows:'Ventanas', dock:'Dock', perf:'Rendimiento',
    language:'Idioma', on:'Activado', off:'Desactivado', sens:'Sensibilidad', scale:'Escala',
    dist:'Distancia', curve:'Curvatura', size:'Tamaño', quality:'Calidad', apps:'Aplicaciones',
    recents:'Recientes', battery:'Batería', net:'Conexión', time:'Hora',
    pickPhotos:'Elegir fotos', noPhotos:'Aún no hay fotos elegidas.',
    photosHelp:'Las fotos se quedan en el dispositivo y no salen de Next VR.',
    centered:'Vista centrada', langChanged:'Idioma cambiado',
    arcFull:'Arco lleno (máx. 5 apps) — cerrando',
    envPass:'Camera passthrough', envSunset:'Panorama 360° · atardecer',
    envNight:'Panorama 360° · ciudad de noche', envSpace:'Panorama 360° · espacio',
    win360:'Curvatura 360°', win360k:'Semiángulo del arco (0.2 leve · 1.1 muy curvada)',
    win360All:'Abrir ventanas nuevas ya curvadas', win360Btn:'Curvar esta ventana en 360°',
    langTitle:'Idioma', langSoon:'Más idiomas llegan en las próximas versiones.',
    langContinue:'Continuar', langPick:'Elige tu idioma',
    micOff:'El dictado por voz no está disponible en este dispositivo',
    notif:'Notificaciones', noNotif:'Sin notificaciones nuevas', profile:'Perfil',
    repin:'Volver al arco de ventanas', resize:'Cambiar tamaño de ventana', moveWindow:'Mover ventana',
    moveDock:'Mover el dock',
  },
};
/**
 * Idiomas do seletor, na ordem da referência (a lista do Quest), com o português na frente porque
 * é o idioma principal deste app. `table` é a tradução que a linha usa: há duas linhas de inglês e
 * duas de espanhol (US/UK e Espanha/Latinoamérica) que compartilham a mesma tabela. As linhas sem
 * `table` aparecem na lista (identidade visual da referência) mas ainda não têm tradução.
 */
export const LANG_ROWS = Object.freeze([
  { id: 'en', label: 'English (US)', table: 'en' },
  { id: 'ja', label: '日本語' },
  { id: 'fr', label: 'Français' },
  { id: 'de', label: 'Deutsch' },
  { id: 'ko', label: '한국어' },
  { id: 'es-ES', label: 'Español (España)', table: 'es' },
  { id: 'it', label: 'Italiano' },
  { id: 'en-GB', label: 'English (UK)', table: 'en' },
  { id: 'nl', label: 'Nederlands' },
  { id: 'ru', label: 'Русский' },
  { id: 'es', label: 'Español (Latinoamérica)', table: 'es' },
  { id: 'pt', label: 'Português (Brasil)', table: 'pt' },
]);
/**
 * Idioma quando nada foi escolhido ainda: português. NÃO usar `LANG_ROWS[0]` para isso — a ordem da
 * lista é a do print do Meta Horizon OS (English (USA) em cima), não a ordem de preferência do app:
 * na primeira execução, antes de o usuário tocar em qualquer linha, as próprias legendas da tela de
 * escolha têm de sair no idioma padrão.
 */
const LANG_FALLBACK = 'pt';
export const langRow = id => LANG_ROWS.find(r => r.id === id) || LANG_ROWS.find(r => r.id === LANG_FALLBACK);
export const langLabel = () => langRow(S.lang).label;
const langTable = () => langRow(S.lang).table || 'pt';
export const t = k => (STR[langTable()] || STR.pt)[k] || k;
export const setLang = l => {
  if (!LANG_ROWS.some(r => r.id === l && r.table)) return false;
  S.lang = l; save(); emit('lang'); return true;
};

/* ============================ eventos ============================ */
const subs = {};
export const on = (k, f) => ((subs[k] ||= []).push(f), f);
export const emit = (k, v) => (subs[k] || []).forEach(f => f(v));

export function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('on');
  clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('on'), 2400);
}

/* ============================ cena ============================ */
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(72, 1, .05, 120);
camera.rotation.order = 'YXZ';

/**
 * Tudo que o usuário "coloca no mundo" entra aqui.
 *
 * A câmera é girada SÓ pelo giroscópio. O contentRoot só muda quando o usuário
 * aperta Centralizar. Por isso uma janela nunca acompanha o olhar: virar a cabeça
 * move a câmera, não o conteúdo.
 */
export const contentRoot = new THREE.Group();
scene.add(contentRoot);

export const EYE = 1.55;              // altura dos olhos, metros
camera.position.set(0, EYE, 0);

export const renderer = native ? { setClearColor(){}, setPixelRatio(){}, setSize(){}, render(){} }
  : new THREE.WebGLRenderer({ antialias: true, alpha: true });
if (!native) { renderer.setClearColor(0, 0); document.getElementById('gl').appendChild(renderer.domElement); }
export const css3d = native ? new AtlasRenderer() : new CSS3DRenderer();
document.getElementById('css3d').appendChild(css3d.domElement);
if (native) {
  document.documentElement.classList.add('native');
  const hud = document.createElement('div'); hud.id = 'head-overlay';
  document.body.append(hud);
  for (const id of ['overlay','hud','toast','boot']) hud.append(document.getElementById(id));
}

function dpr() {
  const q = S.quality;
  if (q === 'low') return 1;
  if (q === 'high') return Math.min(devicePixelRatio, 2);
  return Math.min(devicePixelRatio, 1.6);     // auto
}
function resize() {
  document.documentElement.dataset.quality = S.quality;
  if (!native) { viewport.width = innerWidth; viewport.height = innerHeight; }
  const w = viewport.width, h = viewport.height;
  camera.aspect = w / h; camera.updateProjectionMatrix();
  renderer.setPixelRatio(dpr()); renderer.setSize(w, h);
  css3d.setSize(w, h);
  emit('resize');
}
addEventListener('resize', resize);
addEventListener('orientationchange', () => setTimeout(resize, 120));
resize();
on('quality', resize);

/* ============================ ambientes ============================ */
/**
 * O passthrough da câmera continua sendo o padrão, e agora existem ambientes panorâmicos 360°:
 * o panorama é desenhado como fundo esférico no GL nativo (gira com a cabeça), com a câmera
 * seguindo ligada só para o rastreamento das mãos. Os ids são os mesmos nomes dos assets
 * (`env/<id>.jpg` no APK); `passthrough` desliga o fundo virtual.
 */
export const ENV_IDS = Object.freeze(['passthrough', 'sunset', 'night', 'space']);
export const envList = () => [
  { id: 'passthrough', name: t('envPass'), thumb: null },
  { id: 'sunset', name: t('envSunset'), thumb: './env/sunset.jpg' },
  { id: 'night', name: t('envNight'), thumb: './env/night.jpg' },
  { id: 'space', name: t('envSpace'), thumb: './env/space.jpg' },
];
export function setEnvironment(id) {
  S.env = ENV_IDS.includes(id) ? id : 'passthrough';
  save(); emit('env', S.env);
  // O fundo é renderizado no GL nativo; o WebView só informa qual ambiente usar.
  window.NativeXR?.env?.(S.env);
}

/* ============================ giroscópio ============================ */
/*
 * Correções em relação ao comportamento antigo:
 *  - 1:1 com o aparelho: nenhum ganho/multiplicador (era a "sensibilidade altíssima").
 *  - compensa a rotação da tela (retrato/paisagem) — era a inversão esquerda/direita.
 *  - suavização leve por slerp, só para tirar o ruído do sensor, sem atraso perceptível.
 *  - a referência de frente é o contentRoot, não o sensor: abrir app nunca recalibra o giro.
 */
const gyro = { ok: false, has: false, q: new THREE.Quaternion(), tmp: new THREE.Quaternion(), e: new THREE.Euler() };
const Q_SCREEN = new THREE.Quaternion();
const Q_FLIP = new THREE.Quaternion(-Math.SQRT1_2, 0, 0, Math.SQRT1_2); // olhar sai pelas costas do aparelho
const ZEE = new THREE.Vector3(0, 0, 1);
const D2R = Math.PI / 180;

function screenAngle() {
  const a = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
  return a * D2R;
}

function onOrient(ev) {
  if (ev.alpha == null) return;
  gyro.has = true;
  gyro.e.set(ev.beta * D2R, ev.alpha * D2R, -ev.gamma * D2R, 'YXZ');
  gyro.tmp.setFromEuler(gyro.e);
  gyro.tmp.multiply(Q_FLIP);
  gyro.tmp.multiply(Q_SCREEN.setFromAxisAngle(ZEE, -screenAngle()));
  gyro.q.copy(gyro.tmp);
}

export async function startGyro() {
  if (native) { gyro.ok = gyro.has = true; emit('gyro', true); return true; }
  try {
    const DOE = window.DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission === 'function') {
      const r = await DOE.requestPermission();
      if (r !== 'granted') { toast('Permissão do giroscópio negada'); return false; }
    }
    addEventListener('deviceorientation', onOrient, true);
    gyro.ok = true;
    setTimeout(() => { if (!gyro.has) toast('Sem giroscópio: arraste para olhar'); }, 1200);
    emit('gyro', true);
    return true;
  } catch { toast('Giroscópio indisponível'); return false; }
}
export const gyroLive = () => gyro.ok && gyro.has;

/* arrasto (sem giroscópio, ou para ajuste fino) */
let drag = null, dragYaw = 0, dragPitch = 0;
addEventListener('pointerdown', e => {
  // a alça branca e as janelas tratam o próprio toque
  if (native) return;
  if (e.target.closest('.win-shell,.win,.win-handle,.kb,.dock,#hud,#boot')) return;
  drag = { x: e.clientX, y: e.clientY };
}, true);
addEventListener('pointermove', e => {
  if (!drag) return;
  dragYaw -= (e.clientX - drag.x) * .0032;
  dragPitch = Math.max(-1.2, Math.min(1.2, dragPitch - (e.clientY - drag.y) * .0032));
  drag = { x: e.clientX, y: e.clientY };
});
addEventListener('pointerup', () => drag = null);
addEventListener('pointercancel', () => drag = null);

/* ============================ centralizar ============================ */
/**
 * Usa a orientação atual como nova frente: gira o conteúdo para onde o usuário olha.
 * Não fecha app, não reinicia nada, não mexe no sensor.
 */
export function recenter() {
  const e = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
  contentRoot.rotation.y = e.y;
  contentRoot.position.set(0, 0, 0);
  emit('recenter');
  toast(t('centered'));
}

/* ============================ laço ============================ */
const frameSubs = [];
export const onFrame = f => frameSubs.push(f);

let last = performance.now(), fpsAcc = 0, fpsN = 0;
// Hand tracking runs on its own native cadence; measure its frame arrival separately from render.
let handLast = 0, handAcc = 0, handN = 0, handFps = 0;
/* Estado do pipeline nativo, publicado pelo PerfLog a cada ~3 s (delegate, FPS da câmera, custo da
 * inferência, quantos frames foram de uma ou de duas slots). É o que responde "por que a mão está
 * lenta" na própria tela: `infer` alto = o modelo/o delegate; `cam` baixo = a câmera não entrega;
 * `slots 2` com a mão levantada = o grafo de uma slot não está sendo usado. */
let diag = null;

export const reportHandFrame = () => {
  const now = performance.now();
  if (handLast > 0) { handAcc += (now - handLast) / 1000; handN++; if (handAcc >= 1) { handFps = Math.round(handN / handAcc); handAcc = 0; handN = 0; } }
  handLast = now;
};
function loop(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now;

  if (native) {
    // The Cardboard pose is already filtered and predicted; do not smooth or replace it.
  } else if (gyroLive()) {
    // frame-rate independent: suaviza sem o atraso exagerado de um fator fixo por frame
    camera.quaternion.slerp(gyro.q, 1 - Math.exp(-dt * 12));
    if (dragYaw) { camera.rotateY(dragYaw); dragYaw = 0; }
  } else {
    camera.quaternion.setFromEuler(new THREE.Euler(dragPitch, camera.rotation.y + dragYaw, 0, 'YXZ'));
    dragYaw = 0;
  }
  camera.position.set(0, EYE, 0);

  for (const f of frameSubs) f(dt, now);
  renderer.render(scene, camera);
  css3d.render(scene, camera);

  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    const el = document.getElementById('fps');
    el.textContent = S.showFps
      ? Math.round(fpsN / fpsAcc) + ' fps' + (native && S.handsOn ? ' · tracking ' + handFps + ' fps' : '')
        + (native && S.handsOn ? diagText() : '')
      : '';
    fpsAcc = 0; fpsN = 0;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

setEnvironment(S.env);

if (native) {
  const poseMatrix = new THREE.Matrix4();
  let firstPose = true;
  window.nextvrPose = values => {
    poseMatrix.fromArray(values).invert();
    camera.quaternion.setFromRotationMatrix(poseMatrix);
    camera.position.set(0, EYE, 0); camera.updateMatrixWorld(true);
    if (firstPose) { contentRoot.rotation.y = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ').y; firstPose = false; }
  };
  window.nextvrMessage = toast;
  // O resumo de desempenho do pipeline nativo (PerfLog -> contador da tela). Chega como objeto.
  window.nextvrDiag = values => { diag = values; };
}

/** Uma linha curta com o que o contador precisa: câmera, inferência, delegate e slots. */
function diagText() {
  if (!diag) return '';
  const round = v => (typeof v === 'number' && v >= 0 ? Math.round(v) : null);
  const parts = [];
  const camera = round(diag.camera);
  if (camera !== null) parts.push('cam ' + camera);
  const infer = round(diag.infer);
  if (infer !== null) parts.push('infer ' + infer + 'ms');
  if (diag.delegate) parts.push(String(diag.delegate).split(' ')[0]);
  // Com uma mão levantada o grafo de uma slot deve dominar: é ele que evita pagar a segunda slot em
  // todo frame de mão rastreada (2,47x por frame, medido em tools/bench).
  if (typeof diag.narrow === 'number' && typeof diag.wide === 'number' && diag.narrow + diag.wide > 0)
    parts.push('slots ' + (diag.narrow >= diag.wide ? 1 : 2));
  if (round(diag.stale) > 0) parts.push('stale ' + Math.round(diag.stale));
  return parts.length ? ' · ' + parts.join(' · ') : '';
}
