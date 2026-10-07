// NextVR — núcleo: estado, idiomas, cena, giroscópio e centralização.
import * as THREE from 'three';
import { AtlasRenderer, VIEW } from './atlas.js';
export const native = !!window.NativeXR;
export const viewport = native ? VIEW : { width: innerWidth, height: innerHeight };
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

/* ============================ estado ============================ */
const DEF = {
  lang: null,
  handsOn: true, handDraw: 1,
  winCurve: 1, winScale: 1, winDist: 2.2, winTilt: 1,
  dockSize: 1, dockDist: 1, dockApps: 'browser,youtube,gallery,env,settings,menu',
  env: 'studio', quality: 'auto', showFps: 0,
};
let S = { ...DEF };
try { S = { ...DEF, ...JSON.parse(localStorage.getItem('nextvr.v1') || '{}') }; } catch {}
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
    notif:'Notificações', noNotif:'Sem notificações novas', profile:'Perfil',
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
    notif:'Notifications', noNotif:'No new notifications', profile:'Profile',
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
    notif:'Notificaciones', noNotif:'Sin notificaciones nuevas', profile:'Perfil',
  },
};
export const t = k => (STR[S.lang] || STR.pt)[k] || k;
export const setLang = l => { S.lang = l; save(); emit('lang'); };

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
// Passthrough is the only environment. No sky, grid, floor, fog or artificial room is created.
export const envList = () => [{ id: 'passthrough', name: 'Camera passthrough', top: 0x253244, bot: 0x11151d }];
export function setEnvironment() { S.env = 'passthrough'; save(); emit('env', S.env); }

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
function loop(now) {
  const dt = Math.min((now - last) / 1000, .05); last = now;

  if (native) {
    // The Cardboard pose is already filtered and predicted; do not smooth or replace it.
  } else if (gyroLive()) {
    // frame-rate independent: suaviza sem o atraso exagerado de um fator fixo por frame
    camera.quaternion.slerp(gyro.q, 1 - Math.exp(-dt * 18));
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
    el.textContent = S.showFps ? Math.round(fpsN / fpsAcc) + ' fps' : '';
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
}
