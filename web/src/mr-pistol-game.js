// ============================================================================
// NextVR — Pistola MR (Mixed Reality G18 Floating Pistol & 3D Target Range)
// Jogo em Realidade Mista (MR) sobre a câmera real (passthrough):
// - Luva verde leve com abertura nos dedos ativa SOMENTE dentro deste jogo;
// - Pistola 3D G18 (toda preta com cano cinza) flutuante perto do jogador (z = -0.48 m),
//   sempre virada para a frente (-Z, apontando para os alvos);
// - Dispara SOMENTE ao fazer o gesto de "arminha" com a mão (polegar para cima,
//   indicador apontando para a frente e médio/anelar/mindinho dobrados);
// - 6 alvos em modelo 3D real próximos ao jogador (z = -0.82 m a -0.92 m) + botão 3D de reiniciar.
// ============================================================================
import * as THREE from 'three';
import { settings as S, camera as coreCamera, native, css3d, toast, setPassthrough } from './core.js';
import { hands as trackedHands } from './hands.js';
import { wins, setDockHidden, setDockVisible } from './windows.js';

let mrActive = false;
let overlayEl = null;
let rafId = 0;
let savedHiddenWins = [];
let mrState = null;

const _lookMat = new THREE.Matrix4();
const _upVec = new THREE.Vector3(0, 1, 0);

/**
 * Orienta um Object3D para que seu eixo frontal (-Z, onde fica o cano cinza da G18)
 * aponte de `obj.position` para `targetPos` (para frente, longe do jogador).
 * Nota: `Object3D.lookAt()` do Three.js aponta o eixo +Z para o alvo (o que deixava
 * a arma virada para o jogador). `Matrix4.lookAt(eye, target, up)` aponta -Z para `target`.
 */
export function aimForwardAt(obj, targetPos) {
  _lookMat.lookAt(obj.position, targetPos, _upVec);
  obj.quaternion.setFromRotationMatrix(_lookMat);
}

/**
 * Detecta o gesto de "arminha / pistola" com a mão (como na foto enviada):
 * - Polegar (1..4) levantado / estendido;
 * - Indicador (5..8) estendido apontando para a frente;
 * - Médio (9..12), Anelar (13..16) e Mindinho (17..20) dobrados na palma;
 * - Polegar e indicador separados (NÃO é pinça e NÃO é mão aberta nem punho fechado).
 */
export function detectFingerGunGesture(handOrPoints) {
  if (!handOrPoints) return false;
  const pts = Array.isArray(handOrPoints) ? handOrPoints : handOrPoints.points;
  if (!pts || pts.length < 63) return false;
  if (!Array.isArray(handOrPoints) && (handOrPoints.fist || handOrPoints.pinching)) return false;

  const dist2 = (i, j) => {
    const dx = pts[i * 3] - pts[j * 3];
    const dy = pts[i * 3 + 1] - pts[j * 3 + 1];
    return Math.hypot(dx, dy);
  };
  const dist3 = (i, j) => {
    const dx = pts[i * 3] - pts[j * 3];
    const dy = pts[i * 3 + 1] - pts[j * 3 + 1];
    const dz = (pts[i * 3 + 2] - pts[j * 3 + 2]) * 0.75;
    return Math.hypot(dx, dy, dz);
  };

  const palmSize = Math.max(0.04, dist2(0, 9), dist2(0, 5), dist2(5, 17));

  // 1. Não pode ser pinça: ponta do polegar (4) e ponta do indicador (8) devem estar afastadas
  const thumbIndexGap = dist2(4, 8);
  if (thumbIndexGap < palmSize * 0.28) return false;

  // 2. Médio (9..12), Anelar (13..16) e Mindinho (17..20) devem estar dobrados
  const isFingerCurled = (mcp, pip, tip) => {
    const tipWrist = dist2(0, tip);
    const pipWrist = dist2(0, pip);
    const mcpWrist = dist2(0, mcp);
    const tipMcp = dist2(mcp, tip);
    // Dedo dobrado: ponta recolhida perto do PIP/MCP ou abaixo do comprimento de dedo aberto
    return tipWrist < pipWrist * 1.24 || tipWrist < mcpWrist * 1.42 || tipMcp < palmSize * 0.84;
  };
  const midCurled = isFingerCurled(9, 10, 12);
  const ringCurled = isFingerCurled(13, 14, 16);
  const pinkyCurled = isFingerCurled(17, 18, 20);
  const curledCount = (midCurled ? 1 : 0) + (ringCurled ? 1 : 0) + (pinkyCurled ? 1 : 0);
  if (curledCount < 2) return false;

  // 3. Polegar (1..4) levantado / estendido (como o cão da arma na foto)
  const thumbSpan = dist2(1, 4);
  const thumbUp = (pts[2 * 3 + 1] - pts[4 * 3 + 1]) > palmSize * 0.16;
  const thumbExtended = thumbSpan > palmSize * 0.46 || thumbUp;
  if (!thumbExtended) return false;

  // 4. Indicador (5..8) estendido para a frente ou acima dos dedos dobrados (não recolhido em soco)
  const indexSpan3 = dist3(5, 8);
  const indexWrist2 = dist2(0, 8);
  const indexMcpWrist2 = dist2(0, 5);
  const avgCurledSpan3 = (dist3(9, 12) + dist3(13, 16) + dist3(17, 20)) / 3;
  const avgCurledY = (pts[12 * 3 + 1] + pts[16 * 3 + 1] + pts[20 * 3 + 1]) / 3;
  const indexAboveCurled = pts[8 * 3 + 1] < avgCurledY - palmSize * 0.08;
  const indexExtended =
    (indexSpan3 > palmSize * 0.42 && indexWrist2 > indexMcpWrist2 * 0.85) &&
    (indexSpan3 > avgCurledSpan3 * 1.08 || indexAboveCurled || indexWrist2 > dist2(0, 12) * 1.06);

  return indexExtended;
}

export function isMrPistolActive() {
  return mrActive;
}

export function closeMrPistolGame() {
  if (!mrActive) return;
  mrActive = false;
  window.__gorillaStereoOverlay = false;
  window.__gorillaOnHands = null;
  window.__mrPistolState = null;
  window.NativeXR?.setMrGameMode?.(false);
  window.NativeXR?.setGameHandMode?.(false);
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
  if (mrState?.cleanup) {
    try { mrState.cleanup(); } catch {}
  }
  mrState = null;
  if (overlayEl) {
    overlayEl.remove();
    overlayEl = null;
  }
  for (const w of savedHiddenWins) {
    if (w && wins.includes(w)) w.setHidden(false);
  }
  savedHiddenWins = [];
  if (!S.spatialLauncher) {
    setDockHidden(false);
    setDockVisible(true);
  }
  if (native) {
    window.NativeXR?.handVisuals?.(!!S.handDraw);
  }
  css3d?.invalidate?.();
}

export function openMrPistolGame() {
  if (mrActive) return overlayEl;
  mrActive = true;

  // Ativa passthrough da câmera real e substitui o Hand Tracking pela luva verde SOMENTE neste jogo
  setPassthrough(true);
  window.NativeXR?.setMrGameMode?.(true);
  window.NativeXR?.handVisuals?.(true);

  savedHiddenWins = [];
  for (const w of wins) {
    if (!w.hidden) {
      w.setHidden(true);
      savedHiddenWins.push(w);
    }
  }
  setDockHidden(true);
  setDockVisible(false);

  overlayEl = document.createElement('div');
  overlayEl.id = 'mr-pistol-overlay';
  overlayEl.dataset.mrPistolOverlay = '1';
  overlayEl.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    native ? 'width:1200px' : 'width:100vw',
    native ? 'height:800px' : 'height:100vh',
    'z-index:190',
    'background:transparent',
    'overflow:hidden',
    'pointer-events:auto',
    'user-select:none',
    'font-family:Inter,system-ui,sans-serif',
  ].join(';');

  overlayEl.innerHTML = `
    <canvas data-mr-pistol-canvas style="position:absolute;inset:0;width:100%;height:100%;display:block;background:transparent"></canvas>
    <div data-mr-pistol-hud style="position:absolute;top:14px;left:50%;transform:translateX(-50%);z-index:12;display:flex;align-items:center;gap:10px;padding:7px 14px;border-radius:999px;background:rgba(10,14,20,.82);border:1.5px solid rgba(52,211,153,.55);backdrop-filter:blur(10px);color:#ecfdf5;box-shadow:0 10px 28px rgba(0,0,0,.45)">
      <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:900;letter-spacing:.05em;color:#34d399">
        🔫 G18 MR
      </span>
      <span data-mr-pistol-status style="font-size:11.5px;font-weight:700;color:#d1fae5;padding:3px 9px;border-radius:999px;background:rgba(16,185,129,.22);border:1px solid rgba(52,211,153,.38)">
        Faça o gesto de arminha (👉) para pegar a G18 e atirar
      </span>
      <span data-mr-pistol-score style="font-size:12px;font-weight:800;color:#fde047;min-width:110px;text-align:center">
        ALVOS 3D: 0/6 · 0 PTS
      </span>
      <button type="button" data-mr-pistol-reset style="padding:5px 12px;border-radius:999px;border:1px solid rgba(56,189,248,.65);background:linear-gradient(135deg,#0284c7,#10b981);color:#fff;font:800 11.5px Inter,sans-serif;cursor:pointer">
        ↻ Reiniciar Alvos
      </button>
      <button type="button" data-mr-pistol-drop style="padding:5px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.1);color:#e2e8f0;font:700 11px Inter,sans-serif;cursor:pointer">
        Soltar
      </button>
      <button type="button" data-mr-pistol-exit style="padding:5px 11px;border-radius:999px;border:1px solid rgba(248,113,113,.55);background:rgba(220,38,38,.78);color:#fff;font:800 11px Inter,sans-serif;cursor:pointer">
        ✕ Sair
      </button>
    </div>
  `;

  const atlasHost = document.getElementById('atlas');
  if (native && atlasHost) {
    atlasHost.appendChild(overlayEl);
    window.__gorillaStereoOverlay = true;
  } else {
    document.body.appendChild(overlayEl);
  }

  mrState = bootMrPistolEngine(overlayEl);
  window.__mrPistolState = mrState;
  css3d?.invalidate?.();
  return overlayEl;
}

function makeResetLabelTexture() {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#064e3b';
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = '#34d399';
  ctx.lineWidth = 8;
  ctx.strokeRect(6, 6, 244, 116);
  ctx.fillStyle = '#ecfdf5';
  ctx.font = '900 26px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('↻ REINICIAR', 128, 54);
  ctx.fillStyle = '#fde047';
  ctx.font = '800 22px Inter, sans-serif';
  ctx.fillText('ALVOS 3D', 128, 92);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Constrói o modelo 3D da pistola G18 (toda preta com o cano cinza),
 * com o cano apontando para -Z (PARA A FRENTE, na direção dos alvos)
 * e a empunhadura/traseira voltada para +Z (na mão do jogador).
 */
function buildG18PistolModel() {
  const pistolGroup = new THREE.Group();

  // Materiais G18: ferrolho/corpo todos pretos e cano cinza metálico
  const blackSlideMat = new THREE.MeshStandardMaterial({
    color: 0x111318,
    roughness: 0.34,
    metalness: 0.64,
  });
  const blackFrameMat = new THREE.MeshStandardMaterial({
    color: 0x090b0f,
    roughness: 0.68,
    metalness: 0.18,
  });
  const blackDetailMat = new THREE.MeshStandardMaterial({
    color: 0x181b22,
    roughness: 0.45,
    metalness: 0.52,
  });
  const grayBarrelMat = new THREE.MeshStandardMaterial({
    color: 0x9ca3af,
    roughness: 0.24,
    metalness: 0.86,
  });
  const boreDarkMat = new THREE.MeshBasicMaterial({ color: 0x050608 });
  const sightDotMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });

  // 1. Frame polimérico inferior preto (trilho + berço do ferrolho, apontando para -Z)
  const lowerFrame = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.016, 0.185), blackFrameMat);
  lowerFrame.position.set(0, 0.008, -0.030);
  pistolGroup.add(lowerFrame);

  // Ranhuras do trilho tático frontal inferior (em -Z)
  for (let i = 0; i < 3; i++) {
    const railSlot = new THREE.Mesh(new THREE.BoxGeometry(0.033, 0.004, 0.008), blackDetailMat);
    railSlot.position.set(0, 0.001, -0.075 - i * 0.018);
    pistolGroup.add(railSlot);
  }

  // 2. Grupo do ferrolho (slide) preto quadrado estilo Glock G18 (recua em +Z ao atirar)
  const slideGroup = new THREE.Group();
  slideGroup.position.set(0, 0.028, -0.028);
  pistolGroup.add(slideGroup);

  // Paredes laterais e traseira do ferrolho preto (deixando janela superior aberta para ver o cano cinza da G18)
  const slideMain = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.028, 0.196), blackSlideMat);
  slideMain.position.set(0, 0, 0);
  slideGroup.add(slideMain);

  // Ranhuras de manejo traseiras da G18 (serrations perto de +Z)
  for (let s = 0; s < 6; s++) {
    const serr = new THREE.Mesh(new THREE.BoxGeometry(0.0365, 0.022, 0.0035), blackDetailMat);
    serr.position.set(0, 0.001, 0.048 + s * 0.0075);
    slideGroup.add(serr);
  }

  // Chave seletora de tiro automático da G18 na lateral esquerda traseira do ferrolho
  const selectorBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0065, 0.0065, 0.004, 12),
    blackDetailMat
  );
  selectorBase.rotation.z = Math.PI / 2;
  selectorBase.position.set(-0.0185, 0.002, 0.068);
  slideGroup.add(selectorBase);

  const selectorLever = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.005, 0.016), blackDetailMat);
  selectorLever.rotation.x = -0.35;
  selectorLever.position.set(-0.0195, -0.001, 0.064);
  slideGroup.add(selectorLever);

  // Miras da G18 (alça de mira traseira em +Z e massa de mira frontal em -Z)
  const rearSightBase = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.007, 0.012), blackFrameMat);
  rearSightBase.position.set(0, 0.017, 0.084);
  const rearSightDotL = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.002), sightDotMat);
  rearSightDotL.position.set(-0.006, 0.017, 0.0905);
  const rearSightDotR = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.004, 0.002), sightDotMat);
  rearSightDotR.position.set(0.006, 0.017, 0.0905);
  const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.008, 0.012), blackFrameMat);
  frontSight.position.set(0, 0.0175, -0.088);
  slideGroup.add(rearSightBase, rearSightDotL, rearSightDotR, frontSight);

  // 3. CANO CINZA METÁLICO DA G18 (visível na janela de ejeção/topo e projetado para a frente em -Z)
  const chamberBlock = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.018, 0.044), grayBarrelMat);
  chamberBlock.position.set(0.003, 0.032, -0.008);
  pistolGroup.add(chamberBlock);

  const grayBarrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0095, 0.0095, 0.195, 16),
    grayBarrelMat
  );
  grayBarrel.rotation.x = Math.PI / 2;
  // Estende-se para a frente (-Z) além do ferrolho preto, destacando o cano cinza da G18
  grayBarrel.position.set(0, 0.030, -0.072);
  pistolGroup.add(grayBarrel);

  const grayMuzzleTip = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0108, 0.0108, 0.036, 16),
    grayBarrelMat
  );
  grayMuzzleTip.rotation.x = Math.PI / 2;
  grayMuzzleTip.position.set(0, 0.030, -0.152);
  pistolGroup.add(grayMuzzleTip);

  const barrelBore = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0065, 0.0065, 0.006, 12),
    boreDarkMat
  );
  barrelBore.rotation.x = Math.PI / 2;
  barrelBore.position.set(0, 0.030, -0.171);
  pistolGroup.add(barrelBore);

  // 4. Empunhadura (grip) toda preta na parte traseira (+Z), inclinada para trás (-0.22 rad em X)
  const gripGroup = new THREE.Group();
  gripGroup.position.set(0, -0.002, 0.040);
  gripGroup.rotation.x = -0.22;
  pistolGroup.add(gripGroup);

  const gripBody = new THREE.Mesh(new THREE.BoxGeometry(0.031, 0.108, 0.046), blackFrameMat);
  gripBody.position.set(0, -0.052, 0);
  gripGroup.add(gripBody);

  const gripTexturePanel = new THREE.Mesh(new THREE.BoxGeometry(0.0325, 0.082, 0.032), blackDetailMat);
  gripTexturePanel.position.set(0, -0.054, 0.002);
  gripGroup.add(gripTexturePanel);

  // Carregador estendido preto clássico da G18 saindo na base da empunhadura
  const extMag = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.042, 0.038), blackSlideMat);
  extMag.position.set(0, -0.118, 0.001);
  gripGroup.add(extMag);

  const magBaseplate = new THREE.Mesh(new THREE.BoxGeometry(0.030, 0.010, 0.044), blackFrameMat);
  magBaseplate.position.set(0, -0.140, 0.001);
  gripGroup.add(magBaseplate);

  // 5. Guarda-mato quadrado da Glock + gatilho preto
  const triggerGuardBottom = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.007, 0.052), blackFrameMat);
  triggerGuardBottom.position.set(0, -0.022, -0.002);
  const triggerGuardFront = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.026, 0.008), blackFrameMat);
  triggerGuardFront.position.set(0, -0.010, -0.025);
  pistolGroup.add(triggerGuardBottom, triggerGuardFront);

  const triggerMesh = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.022, 0.009), blackDetailMat);
  triggerMesh.position.set(0, -0.006, 0.002);
  triggerMesh.rotation.x = 0.25;
  pistolGroup.add(triggerMesh);

  // Mira laser sutil saindo da frente (-Z) do trilho/cano até os alvos
  const laserMat = new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.65 });
  const laserBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.0015, 0.0015, 0.90, 8), laserMat);
  laserBeam.rotation.x = Math.PI / 2;
  laserBeam.position.set(0, 0.010, -0.62);
  pistolGroup.add(laserBeam);

  // Ponto de saída do tiro na ponta do cano cinza (-Z)
  const muzzleFlash = new THREE.Mesh(
    new THREE.SphereGeometry(0.032, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0 })
  );
  muzzleFlash.position.set(0, 0.030, -0.176);
  pistolGroup.add(muzzleFlash);

  return { pistolGroup, slideGroup, triggerMesh, muzzleFlash, grayBarrel, grayMuzzleTip };
}

/**
 * Constrói um Alvo 3D real em camadas volumétricas (pedestal mecânico 3D + moldura blindada octogonal +
 * anéis concêntricos 3D escalonados em relevo + núcleo 3D + placa superior 3D).
 */
function build3DTargetModel(spec, idx) {
  const root = new THREE.Group();
  root.position.set(spec.x, spec.y, spec.z);
  // Para o alvo, root.lookAt(0, spec.y, 0) aponta o eixo +Z do alvo para o jogador
  root.lookAt(0, spec.y, 0);

  const armorMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.38, metalness: 0.72 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.28, metalness: 0.82 });
  const ringWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35, metalness: 0.10 });
  const ringDarkMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.42, metalness: 0.25 });
  const ringBlueMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.32, metalness: 0.28 });
  const ringRedMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.30, metalness: 0.24 });
  const bullGoldMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    emissive: 0xca8a04,
    emissiveIntensity: 0.25,
    roughness: 0.22,
    metalness: 0.45,
  });

  // 1. Base mecânica 3D pesada com suportes laterais e eixo cilíndrico
  const basePlate = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.024, 0.085), armorMat);
  basePlate.position.set(0, -0.132, 0);
  root.add(basePlate);

  const bracketL = new THREE.Mesh(new THREE.BoxGeometry(0.020, 0.042, 0.052), steelMat);
  bracketL.position.set(-0.048, -0.108, 0);
  const bracketR = new THREE.Mesh(new THREE.BoxGeometry(0.020, 0.042, 0.052), steelMat);
  bracketR.position.set(0.048, -0.108, 0);
  const hingeAxle = new THREE.Mesh(new THREE.CylinderGeometry(0.010, 0.010, 0.12, 12), steelMat);
  hingeAxle.rotation.z = Math.PI / 2;
  hingeAxle.position.set(0, -0.104, 0);
  root.add(bracketL, bracketR, hingeAxle);

  // 2. Grupo articulado 3D que tomba para trás ao ser atingido
  const pivot = new THREE.Group();
  pivot.position.set(0, -0.104, 0);
  root.add(pivot);

  // Haste 3D de sustentação do alvo
  const supportArm = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.11, 0.024), armorMat);
  supportArm.position.set(0, 0.052, -0.006);
  pivot.add(supportArm);

  // Moldura blindada 3D octogonal ao redor do alvo
  const outerBezel = new THREE.Mesh(new THREE.CylinderGeometry(0.116, 0.122, 0.026, 8), armorMat);
  outerBezel.rotation.x = Math.PI / 2;
  outerBezel.position.set(0, 0.108, -0.004);
  pivot.add(outerBezel);

  // 4 parafusos 3D nos cantos da moldura blindada
  const boltOffsets = [
    [-0.082, 0.190],
    [ 0.082, 0.190],
    [-0.082, 0.026],
    [ 0.082, 0.026],
  ];
  for (const [bx, by] of boltOffsets) {
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.032, 8), steelMat);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(bx, by, 0.002);
    pivot.add(bolt);
  }

  // 3. Camadas concêntricas 3D escalonadas em relevo (cada anel avança em +Z formando degraus 3D reais)
  const layerSpecs = [
    { r: 0.104, h: 0.022, z: 0.004, mat: ringWhiteMat },
    { r: 0.082, h: 0.028, z: 0.009, mat: ringDarkMat },
    { r: 0.061, h: 0.034, z: 0.014, mat: ringBlueMat },
    { r: 0.040, h: 0.040, z: 0.019, mat: ringRedMat },
    { r: 0.020, h: 0.046, z: 0.024, mat: bullGoldMat },
  ];
  for (const l of layerSpecs) {
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(l.r, l.r * 1.02, l.h, 24), l.mat);
    cyl.rotation.x = Math.PI / 2;
    cyl.position.set(0, 0.108, l.z);
    pivot.add(cyl);
  }

  // Domo central 3D saliente (bullseye 3D)
  const coreDome = new THREE.Mesh(new THREE.SphereGeometry(0.015, 16, 12), bullGoldMat);
  coreDome.position.set(0, 0.108, 0.044);
  pivot.add(coreDome);

  // Placa 3D superior ("headplate" de alvo tático 3D)
  const neckBar = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.034, 0.020), armorMat);
  neckBar.position.set(0, 0.232, -0.004);
  const headArmor = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.040, 0.024, 16), armorMat);
  headArmor.rotation.x = Math.PI / 2;
  headArmor.position.set(0, 0.264, 0.002);
  const headCenter = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.030, 16), ringRedMat);
  headCenter.rotation.x = Math.PI / 2;
  headCenter.position.set(0, 0.264, 0.008);
  pivot.add(neckBar, headArmor, headCenter);

  return {
    idx,
    root,
    pivot,
    coreDome,
    is3DModel: true,
    meshCount: pivot.children.length + root.children.length,
    pos: new THREE.Vector3(spec.x, spec.y, spec.z),
    radius: 0.132,
    hit: false,
    flipAngle: 0,
  };
}

function bootMrPistolEngine(container) {
  const canvas = container.querySelector('[data-mr-pistol-canvas]');
  const statusEl = container.querySelector('[data-mr-pistol-status]');
  const scoreEl = container.querySelector('[data-mr-pistol-score]');
  const resetBtnEl = container.querySelector('[data-mr-pistol-reset]');
  const dropBtnEl = container.querySelector('[data-mr-pistol-drop]');
  const exitBtnEl = container.querySelector('[data-mr-pistol-exit]');

  let actx = null;
  const playSound = (kind) => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!actx) actx = new AC();
      if (actx.state === 'suspended') actx.resume();
      const t0 = actx.currentTime;
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.connect(gain);
      gain.connect(actx.destination);
      if (kind === 'shoot') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(240, t0);
        osc.frequency.exponentialRampToValueAtTime(48, t0 + 0.11);
        gain.gain.setValueAtTime(0.28, t0);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.12);
        osc.start(t0);
        osc.stop(t0 + 0.12);
      } else if (kind === 'hit') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, t0);
        osc.frequency.exponentialRampToValueAtTime(980, t0 + 0.14);
        gain.gain.setValueAtTime(0.25, t0);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.15);
        osc.start(t0);
        osc.stop(t0 + 0.15);
      } else if (kind === 'reset') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, t0);
        osc.frequency.exponentialRampToValueAtTime(880, t0 + 0.18);
        gain.gain.setValueAtTime(0.22, t0);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.19);
        osc.start(t0);
        osc.stop(t0 + 0.19);
      }
    } catch {}
  };

  let glRenderer = null;
  try {
    glRenderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    if (native) {
      glRenderer.setPixelRatio(1);
      glRenderer.setSize(1200, 800, false);
    } else {
      glRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      glRenderer.setSize(container.clientWidth || 1200, container.clientHeight || 800, false);
    }
    glRenderer.setClearColor(0x000000, 0);
    glRenderer.setScissorTest(true);
    glRenderer.outputColorSpace = THREE.SRGBColorSpace;
  } catch {}

  const scene = new THREE.Scene();
  const playerRig = new THREE.Group();
  playerRig.position.set(0, 1.55, 0);
  scene.add(playerRig);

  const eyeL = new THREE.PerspectiveCamera(78, 600 / 800, 0.04, 30);
  const eyeR = new THREE.PerspectiveCamera(78, 600 / 800, 0.04, 30);
  eyeL.position.x = -0.031;
  eyeR.position.x =  0.031;
  playerRig.add(eyeL, eyeR);

  scene.add(new THREE.AmbientLight(0xffffff, 1.25));
  const dirLight = new THREE.DirectionalLight(0xf8fafc, 1.55);
  dirLight.position.set(1.2, 3.0, 1.5);
  scene.add(dirLight);

  // ==========================================================================
  // 1. PISTOLA G18 FLUTUANTE 3D PERTO DO JOGADOR (z = -0.48 m), VIRADA PRA FRENTE
  // ==========================================================================
  const PISTOL_HOME = new THREE.Vector3(0.08, 1.44, -0.48);
  const PISTOL_FORWARD_REF = new THREE.Vector3(0.08, 1.44, -0.95);
  const holsterPedestal = new THREE.Group();
  holsterPedestal.position.copy(PISTOL_HOME);
  scene.add(holsterPedestal);

  const holsterRing = new THREE.Mesh(
    new THREE.RingGeometry(0.065, 0.088, 28),
    new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide, transparent: true, opacity: 0.82 })
  );
  holsterRing.rotation.x = -Math.PI / 2;
  holsterRing.position.y = -0.09;
  holsterPedestal.add(holsterRing);

  const { pistolGroup, slideGroup, muzzleFlash } = buildG18PistolModel();
  pistolGroup.position.copy(PISTOL_HOME);
  aimForwardAt(pistolGroup, PISTOL_FORWARD_REF);
  scene.add(pistolGroup);

  const laserDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.011, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0x34d399 })
  );
  scene.add(laserDot);

  // ==========================================================================
  // 2. 6 ALVOS EM MODELO 3D PRÓXIMOS AO JOGADOR (z = -0.82 m a -0.92 m)
  // ==========================================================================
  const TARGET_SPECS = [
    { x: -0.34, y: 1.58, z: -0.86 },
    { x:  0.00, y: 1.64, z: -0.92 },
    { x:  0.34, y: 1.58, z: -0.86 },
    { x: -0.24, y: 1.34, z: -0.82 },
    { x:  0.00, y: 1.38, z: -0.85 },
    { x:  0.24, y: 1.34, z: -0.82 },
  ];

  const targets = TARGET_SPECS.map((spec, idx) => {
    const t = build3DTargetModel(spec, idx);
    scene.add(t.root);
    return t;
  });

  // ==========================================================================
  // 3. BOTÃO 3D DE REINICIAR ALVOS PERTO DO JOGADOR (z = -0.50 m)
  // ==========================================================================
  const RESET_POS = new THREE.Vector3(-0.24, 1.36, -0.50);
  const resetPedestal = new THREE.Group();
  resetPedestal.position.copy(RESET_POS);
  resetPedestal.lookAt(0, 1.42, 0);
  scene.add(resetPedestal);

  const resetSign = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.09, 0.018),
    new THREE.MeshBasicMaterial({ map: makeResetLabelTexture() })
  );
  resetSign.position.set(0, 0.065, 0);
  resetPedestal.add(resetSign);

  const resetCapMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    emissive: 0x059669,
    emissiveIntensity: 0.55,
    roughness: 0.25,
  });
  const resetCap = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.062, 0.028, 20), resetCapMat);
  resetCap.rotation.x = Math.PI / 2;
  resetCap.position.set(0, -0.01, 0.018);
  resetPedestal.add(resetCap);

  // Feixe tracer de tiro
  const tracerMat = new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0 });
  const tracerMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 1.0, 6), tracerMat);
  scene.add(tracerMesh);

  // Estado do jogo MR
  const state = {
    grabbed: false,
    grabbedByHandId: null,
    fingerGunActive: false,
    pistolStyle: 'G18-black-gray-barrel',
    targetsAre3D: targets.every(t => t.is3DModel && t.meshCount >= 10),
    pistolForwardZ: -1,
    shots: 0,
    hits: 0,
    score: 0,
    activeTargets: targets.length,
    pistolDistance: Number(PISTOL_HOME.length().toFixed(3)),
    maxTargetDistance: Number(Math.max(...targets.map(t => t.pos.length())).toFixed(3)),
    resetButtonDistance: Number(RESET_POS.length().toFixed(3)),
    recoil: 0,
    flashAlpha: 0,
    tracerAlpha: 0,
    lastFingerGun: false,
    lastResetTouchMs: 0,
    lastShotMs: 0,
  };

  function updateHud() {
    const knocked = targets.filter(t => t.hit).length;
    state.activeTargets = targets.length - knocked;
    if (scoreEl) {
      scoreEl.textContent = `ALVOS 3D: ${knocked}/${targets.length} · ${state.score} PTS`;
    }
    if (statusEl) {
      if (knocked === targets.length) {
        statusEl.textContent = 'Todos os alvos 3D abatidos! Toque no botão Reiniciar Alvos';
      } else if (state.grabbed) {
        statusEl.textContent = state.fingerGunActive
          ? 'Gesto de arminha ativo · Atirando com a G18!'
          : 'G18 na mão · Faça o gesto de arminha (👉) para atirar!';
      } else {
        statusEl.textContent = 'Aproxime a mão ou faça o gesto de arminha (👉) para pegar a G18';
      }
    }
    css3d?.invalidate?.();
  }

  function resetTargets() {
    for (const t of targets) {
      t.hit = false;
      t.flipAngle = 0;
      t.pivot.rotation.x = 0;
    }
    resetCap.scale.setScalar(0.86);
    setTimeout(() => resetCap.scale.setScalar(1), 160);
    playSound('reset');
    updateHud();
    toast('Alvos 3D reiniciados!');
  }

  function grabPistol(handId = 'right') {
    state.grabbed = true;
    state.grabbedByHandId = handId;
    holsterRing.material.opacity = 0.28;
    updateHud();
  }

  function releasePistol() {
    state.grabbed = false;
    state.grabbedByHandId = null;
    state.fingerGunActive = false;
    state.lastFingerGun = false;
    pistolGroup.position.copy(PISTOL_HOME);
    aimForwardAt(pistolGroup, PISTOL_FORWARD_REF);
    holsterRing.material.opacity = 0.82;
    updateHud();
  }

  const muzzleWorld = new THREE.Vector3();
  const aimDir = new THREE.Vector3();

  function fireShot(customOrigin = null, customDir = null) {
    const now = performance.now();
    if (now - state.lastShotMs < 110) return false;
    state.lastShotMs = now;
    if (!state.grabbed) grabPistol('right');

    state.shots++;
    state.recoil = 1.0;
    state.flashAlpha = 1.0;
    state.tracerAlpha = 0.95;
    playSound('shoot');

    if (customOrigin && customDir) {
      muzzleWorld.copy(customOrigin);
      aimDir.copy(customDir).normalize();
    } else {
      pistolGroup.updateMatrixWorld(true);
      muzzleFlash.getWorldPosition(muzzleWorld);
      aimDir.set(0, 0, -1).applyQuaternion(pistolGroup.quaternion).normalize();
    }

    // Posiciona o tracer visual
    const endPt = muzzleWorld.clone().addScaledVector(aimDir, 1.15);
    const midPt = muzzleWorld.clone().lerp(endPt, 0.5);
    tracerMesh.position.copy(midPt);
    tracerMesh.scale.set(1, muzzleWorld.distanceTo(endPt), 1);
    tracerMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), aimDir);

    // Verifica se o tiro acertou o botão 3D de Reiniciar Alvos
    const toReset = RESET_POS.clone().sub(muzzleWorld);
    const projReset = toReset.dot(aimDir);
    if (projReset > 0 && projReset < 1.8) {
      const perpReset = toReset.clone().addScaledVector(aimDir, -projReset).length();
      if (perpReset <= 0.11) {
        resetTargets();
        return true;
      }
    }

    // Verifica colisão generosa com os 6 alvos 3D próximos
    let bestTarget = null;
    let bestDist = Infinity;
    for (const t of targets) {
      if (t.hit) continue;
      const toT = t.pos.clone().sub(muzzleWorld);
      const proj = toT.dot(aimDir);
      if (proj < 0.05 || proj > 2.2) continue;
      const perpDist = toT.clone().addScaledVector(aimDir, -proj).length();
      if (perpDist <= t.radius && perpDist < bestDist) {
        bestDist = perpDist;
        bestTarget = t;
      }
    }

    if (bestTarget) {
      bestTarget.hit = true;
      state.hits++;
      const accuracyBonus = bestDist < 0.045 ? 100 : bestDist < 0.085 ? 75 : 50;
      state.score += accuracyBonus;
      playSound('hit');
    }
    updateHud();
    return Boolean(bestTarget);
  }

  function shootAtTarget(idx = 0) {
    const target = targets[idx];
    if (!target) return false;
    if (!state.grabbed) grabPistol('right');
    aimForwardAt(pistolGroup, target.pos);
    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    aimDir.copy(target.pos).sub(muzzleWorld).normalize();
    state.lastShotMs = 0;
    return fireShot(muzzleWorld, aimDir);
  }

  function shootAtResetButton() {
    if (!state.grabbed) grabPistol('right');
    aimForwardAt(pistolGroup, RESET_POS);
    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    aimDir.copy(RESET_POS).sub(muzzleWorld).normalize();
    state.lastShotMs = 0;
    return fireShot(muzzleWorld, aimDir);
  }

  // Conecta o Hand Tracking em tempo real
  const handWorldPos = new THREE.Vector3();
  const handAimTarget = new THREE.Vector3();

  const processHandTracking = () => {
    if (!Array.isArray(trackedHands) || trackedHands.length === 0) {
      state.fingerGunActive = false;
      state.lastFingerGun = false;
      return;
    }
    // Escolhe a mão que está fazendo o gesto de arminha, ou a mão direita / primeira mão disponível
    const gunHand = trackedHands.find(h => detectFingerGunGesture(h));
    const rightH = gunHand || trackedHands.find(h => h.id === 'right') || trackedHands[0];
    if (!rightH) return;

    const palm = rightH.palm || rightH.aim || [0.5, 0.5, 0];
    const depth = Math.max(0.36, Math.min(0.68, 0.48 - (Number(palm[2]) || 0) * 0.22));
    const localX = (Number(palm[0]) - 0.5) * 0.82;
    const localY = (0.5 - Number(palm[1])) * 0.62 - 0.06;
    handWorldPos.set(localX, localY, -depth).applyMatrix4(playerRig.matrixWorld);

    // 1. Verifica toque da mão no botão 3D próximo de Reiniciar Alvos
    const now = performance.now();
    for (const h of trackedHands) {
      const hp = h.palm || h.aim || [0.5, 0.5, 0];
      const hPos = new THREE.Vector3((Number(hp[0]) - 0.5) * 0.82, (0.5 - Number(hp[1])) * 0.62 - 0.06, -0.50)
        .applyMatrix4(playerRig.matrixWorld);
      if (hPos.distanceTo(RESET_POS) < 0.16 && now - state.lastResetTouchMs > 700) {
        state.lastResetTouchMs = now;
        resetTargets();
      }
    }

    // 2. Detecta o gesto de arminha (polegar levantado + indicador apontando pra frente + outros 3 dedos dobrados)
    const isFingerGun = detectFingerGunGesture(rightH);
    state.fingerGunActive = isFingerGun;

    // Pega a pistola G18 flutuante ao aproximar a mão ou fazer o gesto de arminha
    const distToPistol = handWorldPos.distanceTo(pistolGroup.position);
    if (!state.grabbed && (distToPistol < 0.34 || isFingerGun)) {
      grabPistol(rightH.id || 'right');
    }

    // 3. Atualiza posição e mira da G18 (sempre virada para a frente, em direção aos alvos!)
    if (state.grabbed) {
      pistolGroup.position.lerp(handWorldPos, 0.72);
      const pts = rightH.points;
      let aimX = (Number(palm[0]) - 0.5) * 1.10;
      let aimY = (0.5 - Number(palm[1])) * 0.82;
      if (pts && pts.length >= 27) {
        // Usa a ponta do indicador (landmark 8) para mirar para a frente na direção do gesto de arminha
        const idxTipX = (Number(pts[8 * 3]) - 0.5) * 1.18;
        const idxTipY = (0.5 - Number(pts[8 * 3 + 1])) * 0.88;
        aimX = aimX * 0.35 + idxTipX * 0.65;
        aimY = aimY * 0.35 + idxTipY * 0.65;
      }
      handAimTarget.set(aimX, aimY, -0.90).applyMatrix4(playerRig.matrixWorld);

      // Assistência magnética leve para o alvo 3D ativo mais próximo da mira
      for (const t of targets) {
        if (!t.hit && t.pos.distanceTo(handAimTarget) < 0.20) {
          handAimTarget.lerp(t.pos, 0.48);
          break;
        }
      }
      // Usa aimForwardAt para que o cano cinza (-Z) aponte SEMPRE para a frente (para os alvos), nunca para o jogador!
      aimForwardAt(pistolGroup, handAimTarget);

      // 4. SÓ ATIRA quando o jogador faz o gesto de arminha da foto (isFingerGun === true)!
      if (isFingerGun && (!state.lastFingerGun || now - state.lastShotMs >= 210)) {
        fireShot();
      }
      state.lastFingerGun = isFingerGun;
    }
  };

  window.__gorillaOnHands = processHandTracking;

  // Clique/toque direto na tela também permite testar mira e disparo
  const onCanvasPointerDown = (e) => {
    if (e.target.closest('button')) return;
    const rect = canvas.getBoundingClientRect();
    const nx = (((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1) * 0.55;
    const ny = (0.5 - (e.clientY - rect.top) / Math.max(1, rect.height)) * 0.55;
    if (!state.grabbed) grabPistol('touch');
    const tgt = new THREE.Vector3(nx, 1.48 + ny, -0.88);
    aimForwardAt(pistolGroup, tgt);
    fireShot();
  };
  canvas.addEventListener('pointerdown', onCanvasPointerDown);

  if (resetBtnEl) resetBtnEl.onclick = (e) => { e.stopPropagation(); resetTargets(); };
  if (dropBtnEl) dropBtnEl.onclick = (e) => { e.stopPropagation(); releasePistol(); };
  if (exitBtnEl) exitBtnEl.onclick = (e) => { e.stopPropagation(); closeMrPistolGame(); };

  let lastTs = performance.now();
  const forwardCheck = new THREE.Vector3();
  function renderLoop(now) {
    if (!mrActive) return;
    rafId = requestAnimationFrame(renderLoop);
    const dt = Math.min(0.05, Math.max(0.001, (now - lastTs) / 1000));
    lastTs = now;

    // Sincroniza rotação e 6DoF da câmera principal do jogador
    if (coreCamera) {
      playerRig.quaternion.copy(coreCamera.quaternion);
      playerRig.position.set(coreCamera.position.x, 1.55, coreCamera.position.z);
    }
    playerRig.updateMatrixWorld(true);

    processHandTracking();

    // Se a G18 não estiver segurada, flutua perto do jogador SEMPRE virada para a frente (-Z)
    if (!state.grabbed) {
      pistolGroup.position.set(
        PISTOL_HOME.x,
        PISTOL_HOME.y + Math.sin(now * 0.0032) * 0.016,
        PISTOL_HOME.z
      );
      pistolGroup.rotation.set(0, Math.sin(now * 0.0016) * 0.16, 0);
    }

    // Recuo do ferrolho preto da G18 (+Z, para trás sobre o cano cinza fixo) e flash do disparo
    if (state.recoil > 0.001) {
      state.recoil = Math.max(0, state.recoil - dt * 10.5);
      slideGroup.position.z = -0.028 + state.recoil * 0.028;
      pistolGroup.rotation.x += state.recoil * 0.11;
    } else {
      slideGroup.position.z = -0.028;
    }

    if (state.flashAlpha > 0.01) {
      state.flashAlpha = Math.max(0, state.flashAlpha - dt * 14);
      muzzleFlash.material.opacity = state.flashAlpha;
    } else {
      muzzleFlash.material.opacity = 0;
    }

    if (state.tracerAlpha > 0.01) {
      state.tracerAlpha = Math.max(0, state.tracerAlpha - dt * 10);
      tracerMat.opacity = state.tracerAlpha;
    } else {
      tracerMat.opacity = 0;
    }

    // Atualiza ponto final da mira laser saindo para a frente (-Z)
    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    forwardCheck.set(0, 0, -1).applyQuaternion(pistolGroup.quaternion).normalize();
    state.pistolForwardZ = Number(forwardCheck.z.toFixed(3));
    laserDot.position.copy(muzzleWorld).addScaledVector(forwardCheck, 0.42);

    // Anima queda 3D dos alvos atingidos
    for (const t of targets) {
      const targetAngle = t.hit ? -Math.PI * 0.52 : 0;
      t.flipAngle += (targetAngle - t.flipAngle) * Math.min(1, dt * 14);
      t.pivot.rotation.x = t.flipAngle;
    }

    if (glRenderer) {
      const w = glRenderer.domElement.width || 1200;
      const h = glRenderer.domElement.height || 800;
      const halfW = Math.floor(w / 2);
      glRenderer.setViewport(0, 0, halfW, h);
      glRenderer.setScissor(0, 0, halfW, h);
      glRenderer.render(scene, eyeL);

      glRenderer.setViewport(halfW, 0, w - halfW, h);
      glRenderer.setScissor(halfW, 0, w - halfW, h);
      glRenderer.render(scene, eyeR);
    }
    css3d?.render?.(scene, coreCamera);
  }

  updateHud();
  rafId = requestAnimationFrame(renderLoop);

  state.grabPistol = grabPistol;
  state.releasePistol = releasePistol;
  state.fireShot = fireShot;
  state.shootAtTarget = shootAtTarget;
  state.shootAtResetButton = shootAtResetButton;
  state.resetTargets = resetTargets;
  state.detectFingerGunGesture = detectFingerGunGesture;
  state.cleanup = () => {
    canvas.removeEventListener('pointerdown', onCanvasPointerDown);
    if (glRenderer) {
      try { glRenderer.dispose(); } catch {}
    }
  };
  return state;
}

if (typeof window !== 'undefined') {
  window.openMrPistolGame = openMrPistolGame;
  window.closeMrPistolGame = closeMrPistolGame;
  window.detectFingerGunGesture = detectFingerGunGesture;
}
