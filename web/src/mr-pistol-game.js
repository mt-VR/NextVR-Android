// ============================================================================
// NextVR — ShootTheDie (Mixed Reality G18, 3D Green Fingerless Glove & 3D Range)
// Jogo em Realidade Mista (MR) sobre a câmera real (passthrough), ultra-otimizado:
// - Nome oficial: ShootTheDie (logo: ./icons/shootthedie-logo.jpg);
// - Luva Verde com Abertura nos Dedos em MODELO 3D REAL (build3DGloveModel),
//   ativa SOMENTE dentro deste jogo e articulada com os 21 landmarks da mão;
// - Na mão esquerda: badge 3D "SAIR" + fechar a mão esquerda (punho fechado) sai do jogo;
// - Atrás do jogador (z = +0.52 m): botão 3D "✕ SAIR DO JOGO" que sai ao tocar ou atirar;
// - Pistola 3D G18 (toda preta com cano cinza) flutuante perto do jogador (z = -0.48 m),
//   sempre virada para a frente (-Z, apontando para os alvos);
// - Dispara SOMENTE ao fazer o gesto de "arminha" com a mão (polegar para cima,
//   indicador apontando para a frente e médio/anelar/mindinho dobrados);
// - 6 alvos em modelo 3D posicionados mais longe no cenário (z = -2.25 m a -3.15 m)
//   + botão 3D próximo ao jogador (z = -0.50 m) para reiniciar todos os alvos;
// - Geometrias e materiais 3D 100% compartilhados (zero alocação por frame no loop GL).
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

// Vetores e matrizes pré-alocados (Zero GC no loop de 60/120 Hz)
const _lookMat = new THREE.Matrix4();
const _upVec = new THREE.Vector3(0, 1, 0);
const _yAxis = new THREE.Vector3(0, 1, 0);
const _vA = new THREE.Vector3();
const _vB = new THREE.Vector3();
const _vC = new THREE.Vector3();
const _vD = new THREE.Vector3();
const _vE = new THREE.Vector3();

/**
 * Orienta um Object3D para que seu eixo frontal (-Z, onde fica o cano cinza da G18)
 * aponte de `obj.position` para `targetPos` (para frente, longe do jogador).
 */
export function aimForwardAt(obj, targetPos) {
  _lookMat.lookAt(obj.position, targetPos, _upVec);
  obj.quaternion.setFromRotationMatrix(_lookMat);
}

/**
 * Detecta se a mão está fechada em punho (usado na mão esquerda para sair do ShootTheDie).
 */
export function detectClosedFist(handOrPoints) {
  if (!handOrPoints) return false;
  if (!Array.isArray(handOrPoints) && handOrPoints.fist === true) return true;
  const pts = Array.isArray(handOrPoints) ? handOrPoints : handOrPoints.points;
  if (!pts || pts.length < 63) return false;
  if (!Array.isArray(handOrPoints) && handOrPoints.pinching) return false;

  const dist2 = (i, j) => Math.hypot(pts[i * 3] - pts[j * 3], pts[i * 3 + 1] - pts[j * 3 + 1]);
  const palmSize = Math.max(0.04, dist2(0, 9), dist2(5, 17));
  const isCurled = (mcp, pip, tip) =>
    dist2(0, tip) < dist2(0, pip) * 1.18 || dist2(mcp, tip) < palmSize * 0.76;

  return (
    isCurled(5, 6, 8) &&
    isCurled(9, 10, 12) &&
    isCurled(13, 14, 16) &&
    isCurled(17, 18, 20)
  );
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
    return tipWrist < pipWrist * 1.24 || tipWrist < mcpWrist * 1.42 || tipMcp < palmSize * 0.84;
  };
  const midCurled = isFingerCurled(9, 10, 12);
  const ringCurled = isFingerCurled(13, 14, 16);
  const pinkyCurled = isFingerCurled(17, 18, 20);
  const curledCount = (midCurled ? 1 : 0) + (ringCurled ? 1 : 0) + (pinkyCurled ? 1 : 0);
  if (curledCount < 2) return false;

  // 3. Polegar (1..4) levantado / estendido
  const thumbSpan = dist2(1, 4);
  const thumbUp = (pts[2 * 3 + 1] - pts[4 * 3 + 1]) > palmSize * 0.16;
  const thumbExtended = thumbSpan > palmSize * 0.46 || thumbUp;
  if (!thumbExtended) return false;

  // 4. Indicador (5..8) estendido para a frente ou acima dos dedos dobrados
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

  // Ativa passthrough da câmera real e usa a Luva Verde 3D SOMENTE neste jogo
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
    <div data-mr-pistol-hud style="position:absolute;top:14px;left:50%;transform:translateX(-50%);z-index:12;display:flex;align-items:center;gap:10px;padding:6px 14px;border-radius:999px;background:rgba(10,14,20,.84);border:1.5px solid rgba(239,68,68,.58);backdrop-filter:blur(8px);color:#f8fafc;box-shadow:0 10px 28px rgba(0,0,0,.48)">
      <span style="display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:900;letter-spacing:.05em;color:#f87171">
        <img src="./icons/shootthedie-logo.jpg" alt="ShootTheDie" style="width:22px;height:22px;border-radius:6px;object-fit:cover;border:1px solid rgba(248,113,113,.6)" />
        SHOOTTHEDIE
      </span>
      <span data-mr-pistol-status style="font-size:11.5px;font-weight:700;color:#d1fae5;padding:3px 9px;border-radius:999px;background:rgba(16,185,129,.22);border:1px solid rgba(52,211,153,.38)">
        Gesto de arminha (👉) atira · Feche a mão esquerda ou botão atrás para sair
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
      <button type="button" data-mr-pistol-exit style="padding:5px 11px;border-radius:999px;border:1px solid rgba(248,113,113,.55);background:rgba(220,38,38,.82);color:#fff;font:800 11px Inter,sans-serif;cursor:pointer">
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

// ============================================================================
// Cache global de Texturas, Materiais e Geometrias (Otimização GPU / Zero Lag)
// ============================================================================
let _sharedCache = null;

function makeLabelTexture(bgHex, borderHex, line1, line2, line2Color = '#fde047') {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = borderHex;
  ctx.lineWidth = 8;
  ctx.strokeRect(6, 6, 244, 116);
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 25px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(line1, 128, 52);
  ctx.fillStyle = line2Color;
  ctx.font = '800 20px Inter, sans-serif';
  ctx.fillText(line2, 128, 92);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function getSharedAssets() {
  if (_sharedCache) return _sharedCache;
  _sharedCache = {
    // Materiais compartilhados dos Alvos 3D
    armorMat: new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.38, metalness: 0.72 }),
    steelMat: new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.28, metalness: 0.82 }),
    ringWhiteMat: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35, metalness: 0.10 }),
    ringDarkMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.42, metalness: 0.25 }),
    ringBlueMat: new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.32, metalness: 0.28 }),
    ringRedMat: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.30, metalness: 0.24 }),
    bullGoldMat: new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xca8a04,
      emissiveIntensity: 0.25,
      roughness: 0.22,
      metalness: 0.45,
    }),
    // Geometrias compartilhadas dos Alvos 3D (reduz 6x os buffers WebGL)
    basePlateGeo: new THREE.BoxGeometry(0.16, 0.024, 0.085),
    bracketGeo: new THREE.BoxGeometry(0.020, 0.042, 0.052),
    hingeAxleGeo: new THREE.CylinderGeometry(0.010, 0.010, 0.12, 10),
    supportArmGeo: new THREE.BoxGeometry(0.032, 0.11, 0.024),
    outerBezelGeo: new THREE.CylinderGeometry(0.116, 0.122, 0.026, 8),
    boltGeo: new THREE.CylinderGeometry(0.008, 0.008, 0.032, 8),
    layerGeos: [
      new THREE.CylinderGeometry(0.104, 0.106, 0.022, 18),
      new THREE.CylinderGeometry(0.082, 0.084, 0.028, 18),
      new THREE.CylinderGeometry(0.061, 0.062, 0.034, 16),
      new THREE.CylinderGeometry(0.040, 0.041, 0.040, 16),
      new THREE.CylinderGeometry(0.020, 0.021, 0.046, 14),
    ],
    coreDomeGeo: new THREE.SphereGeometry(0.015, 12, 10),
    neckBarGeo: new THREE.BoxGeometry(0.026, 0.034, 0.020),
    headArmorGeo: new THREE.CylinderGeometry(0.038, 0.040, 0.024, 12),
    headCenterGeo: new THREE.CylinderGeometry(0.024, 0.024, 0.030, 12),

    // Materiais compartilhados da Luva Verde 3D
    gloveBodyMat: new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.40, metalness: 0.20 }),
    gloveArmorMat: new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.30, metalness: 0.38 }),
    gloveCuffRimMat: new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x059669,
      emissiveIntensity: 0.28,
      roughness: 0.26,
      metalness: 0.24,
    }),
    gloveStrapMat: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.62, metalness: 0.28 }),
    gloveOpeningHoleMat: new THREE.MeshBasicMaterial({ color: 0x04130c }),
    exitRedMat: new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xb91c1c,
      emissiveIntensity: 0.55,
      roughness: 0.26,
    }),

    // Texturas compartilhadas dos botões 3D
    resetLabelTex: makeLabelTexture('#064e3b', '#34d399', '↻ REINICIAR', 'ALVOS 3D'),
    exitBackLabelTex: makeLabelTexture('#450a0a', '#f87171', '✕ SAIR DO JOGO', 'SHOOTTHEDIE', '#fca5a5'),
    leftWristExitTex: makeLabelTexture('#450a0a', '#f87171', '✕ SAIR', 'FECHE A MÃO ESQ.', '#fde047'),
  };
  return _sharedCache;
}

/**
 * Constrói o Modelo 3D da Luva Tática Verde com Abertura nos Dedos (build3DGloveModel).
 * Na mão esquerda (`isLeft = true`), inclui também o badge 3D "✕ SAIR · FECHE A MÃO ESQ."!
 */
export function build3DGloveModel(isLeft = false) {
  const sh = getSharedAssets();
  const gloveRoot = new THREE.Group();
  const palmCoreGroup = new THREE.Group();
  gloveRoot.add(palmCoreGroup);

  const { gloveBodyMat, gloveArmorMat, gloveCuffRimMat, gloveStrapMat, gloveOpeningHoleMat } = sh;

  // 1. Corpo central 3D da palma + bordas laterais cilíndricas arredondadas
  const palmBox = new THREE.Mesh(new THREE.BoxGeometry(0.068, 0.074, 0.022), gloveBodyMat);
  palmCoreGroup.add(palmBox);

  const sideBolsterGeo = new THREE.CylinderGeometry(0.011, 0.010, 0.072, 10);
  const sideBolsterL = new THREE.Mesh(sideBolsterGeo, gloveBodyMat);
  sideBolsterL.position.set(-0.034, 0, 0);
  const sideBolsterR = new THREE.Mesh(sideBolsterGeo, gloveBodyMat);
  sideBolsterR.position.set(0.034, 0, 0);
  palmCoreGroup.add(sideBolsterL, sideBolsterR);

  // 2. Placa protetora 3D no dorso da luva + 4 protetores 3D nas juntas (knuckles)
  const dorsalPlate = new THREE.Mesh(new THREE.BoxGeometry(0.054, 0.044, 0.008), gloveArmorMat);
  dorsalPlate.position.set(0, 0.004, 0.012);
  const dorsalAccent = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.007, 0.010), gloveCuffRimMat);
  dorsalAccent.position.set(0, 0.006, 0.013);
  palmCoreGroup.add(dorsalPlate, dorsalAccent);

  const knuckleGeo = new THREE.SphereGeometry(0.0095, 10, 8);
  for (let k = 0; k < 4; k++) {
    const knuckleGuard = new THREE.Mesh(knuckleGeo, gloveArmorMat);
    knuckleGuard.scale.set(1.12, 0.86, 0.72);
    knuckleGuard.position.set((-1.5 + k) * 0.0185, 0.036, 0.008);
    palmCoreGroup.add(knuckleGuard);
  }

  // 3. Punho 3D da luva + faixa tática com fivela + anel 3D da abertura do punho
  const wristCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.030, 0.027, 0.034, 12), gloveBodyMat);
  wristCuff.scale.set(1.18, 1.0, 0.76);
  wristCuff.position.set(0, -0.050, 0);
  palmCoreGroup.add(wristCuff);

  const wristStrap = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.029, 0.014, 12), gloveStrapMat);
  wristStrap.scale.set(1.20, 1.0, 0.78);
  wristStrap.position.set(0, -0.048, 0);
  const strapBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.014, 0.006), gloveCuffRimMat);
  strapBuckle.position.set(0, -0.048, 0.024);
  palmCoreGroup.add(wristStrap, strapBuckle);

  const wristRim = new THREE.Mesh(new THREE.TorusGeometry(0.027, 0.0026, 8, 16), gloveCuffRimMat);
  wristRim.rotation.x = Math.PI / 2;
  wristRim.scale.set(1.18, 0.76, 1.0);
  wristRim.position.set(0, -0.067, 0);
  palmCoreGroup.add(wristRim);

  // Se for a luva da mão esquerda, acopla o botão/badge 3D "✕ SAIR · FECHE A MÃO ESQ." no punho!
  let leftExitBadge = null;
  if (isLeft) {
    leftExitBadge = new THREE.Mesh(
      new THREE.BoxGeometry(0.072, 0.036, 0.008),
      new THREE.MeshBasicMaterial({ map: sh.leftWristExitTex })
    );
    leftExitBadge.position.set(0, -0.046, 0.030);
    palmCoreGroup.add(leftExitBadge);
  }

  // 4. Base 3D do polegar (músculo tenar 1 -> 2)
  const thenarGroup = new THREE.Group();
  const thenarJoint = new THREE.Mesh(new THREE.SphereGeometry(0.013, 8, 8), gloveBodyMat);
  const thenarCyl = new THREE.Mesh(new THREE.CylinderGeometry(0.0115, 0.0135, 1.0, 10), gloveBodyMat);
  thenarCyl.position.y = 0.5;
  thenarGroup.add(thenarJoint, thenarCyl);
  gloveRoot.add(thenarGroup);

  // 5. Cinco mangas 3D curtas com ABERTURA NOS DEDOS
  const sleeveRadii = [
    { rBase: 0.0116, rTip: 0.0102 },
    { rBase: 0.0108, rTip: 0.0095 },
    { rBase: 0.0112, rTip: 0.0098 },
    { rBase: 0.0105, rTip: 0.0092 },
    { rBase: 0.0094, rTip: 0.0082 },
  ];

  const fingerSleeves = sleeveRadii.map(({ rBase, rTip }) => {
    const sleeveGroup = new THREE.Group();

    const baseSphere = new THREE.Mesh(new THREE.SphereGeometry(rBase, 10, 8), gloveBodyMat);
    sleeveGroup.add(baseSphere);

    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(rTip, rBase, 1.0, 10), gloveBodyMat);
    cyl.position.y = 0.5;
    sleeveGroup.add(cyl);

    const dorsalPad = new THREE.Mesh(new THREE.BoxGeometry(rTip * 1.1, 0.62, 0.005), gloveArmorMat);
    dorsalPad.position.set(0, 0.48, rBase * 0.85);
    sleeveGroup.add(dorsalPad);

    const openCuffRing = new THREE.Mesh(new THREE.TorusGeometry(rTip * 1.03, 0.0022, 8, 14), gloveCuffRimMat);
    openCuffRing.rotation.x = Math.PI / 2;
    openCuffRing.position.y = 1.0;
    sleeveGroup.add(openCuffRing);

    const openHole = new THREE.Mesh(new THREE.CylinderGeometry(rTip * 0.90, rTip * 0.90, 0.004, 10), gloveOpeningHoleMat);
    openHole.position.y = 1.002;
    sleeveGroup.add(openHole);

    gloveRoot.add(sleeveGroup);
    return sleeveGroup;
  });

  const sign = isLeft ? -1 : 1;
  thenarGroup.position.set(-sign * 0.032, -0.022, 0.004);
  thenarGroup.rotation.set(0.25, 0, sign * 0.58);
  thenarGroup.scale.set(1, 0.034, 1);

  const defaultFingerPos = [
    { x: -sign * 0.044, y: 0.006, z: 0.008, rx: -0.25, rz: sign * 0.42, len: 0.030 },
    { x: -sign * 0.027, y: 0.037, z: 0.002, rx: -0.95, rz: sign * 0.06, len: 0.032 },
    { x: -sign * 0.009, y: 0.039, z: 0.002, rx:  0.65, rz: 0.00,        len: 0.033 },
    { x:  sign * 0.009, y: 0.037, z: 0.002, rx:  0.72, rz: -sign * 0.04, len: 0.031 },
    { x:  sign * 0.027, y: 0.033, z: 0.002, rx:  0.78, rz: -sign * 0.08, len: 0.027 },
  ];
  defaultFingerPos.forEach((fp, idx) => {
    const s = fingerSleeves[idx];
    s.position.set(fp.x, fp.y, fp.z);
    s.rotation.set(fp.rx, 0, fp.rz);
    s.scale.set(1, fp.len, 1);
  });

  let meshCount = 0;
  gloveRoot.traverse(obj => { if (obj.isMesh) meshCount++; });

  return {
    gloveRoot,
    palmCoreGroup,
    thenarGroup,
    fingerSleeves,
    leftExitBadge,
    is3DGlove: true,
    meshCount,
  };
}

const _p0 = new THREE.Vector3();
const _p1 = new THREE.Vector3();
const _p2 = new THREE.Vector3();
const _p5 = new THREE.Vector3();
const _p9 = new THREE.Vector3();
const _p13 = new THREE.Vector3();
const _p17 = new THREE.Vector3();
const _segDir = new THREE.Vector3();
const _palmRight = new THREE.Vector3();
const _palmUp = new THREE.Vector3();
const _palmNorm = new THREE.Vector3();
const _palmBasis = new THREE.Matrix4();
const _fingerJoints = [
  [2, 3, 0.80],
  [5, 6, 0.78],
  [9, 10, 0.78],
  [13, 14, 0.78],
  [17, 18, 0.76],
];

function update3DGlovePose(gloveObj, hand, anchorWorldPos, basisQuat) {
  const { gloveRoot, palmCoreGroup, thenarGroup, fingerSleeves } = gloveObj;
  gloveRoot.position.copy(anchorWorldPos);
  gloveRoot.quaternion.copy(basisQuat);
  gloveRoot.visible = true;

  const pts = hand?.points;
  if (!pts || pts.length < 63) return;

  const rawPalmSpan = Math.max(
    0.045,
    Math.hypot(pts[9 * 3] - pts[0], pts[9 * 3 + 1] - pts[1]),
    Math.hypot(pts[17 * 3] - pts[5 * 3], pts[17 * 3 + 1] - pts[5 * 3 + 1])
  );
  const scale = 0.076 / rawPalmSpan;
  const cx = (pts[0] + pts[5 * 3] + pts[9 * 3] + pts[13 * 3] + pts[17 * 3]) * 0.2;
  const cy = (pts[1] + pts[5 * 3 + 1] + pts[9 * 3 + 1] + pts[13 * 3 + 1] + pts[17 * 3 + 1]) * 0.2;
  const cz = (pts[2] + pts[5 * 3 + 2] + pts[9 * 3 + 2] + pts[13 * 3 + 2] + pts[17 * 3 + 2]) * 0.2;

  const readLocal = (idx, out) => {
    out.set(
      (pts[idx * 3] - cx) * scale,
      (cy - pts[idx * 3 + 1]) * scale,
      -(pts[idx * 3 + 2] - cz) * scale * 0.85
    );
    return out;
  };

  readLocal(0, _p0);
  readLocal(1, _p1);
  readLocal(2, _p2);
  readLocal(5, _p5);
  readLocal(9, _p9);
  readLocal(13, _p13);
  readLocal(17, _p17);

  _palmRight.subVectors(_p17, _p5);
  if (_palmRight.lengthSq() < 1e-6) _palmRight.set(1, 0, 0);
  else _palmRight.normalize();

  _palmUp.subVectors(_p9, _p0);
  if (_palmUp.lengthSq() < 1e-6) _palmUp.set(0, 1, 0);
  else _palmUp.normalize();

  _palmNorm.crossVectors(_palmRight, _palmUp);
  if (_palmNorm.lengthSq() < 1e-6) _palmNorm.set(0, 0, 1);
  else _palmNorm.normalize();
  _palmRight.crossVectors(_palmUp, _palmNorm).normalize();

  _palmBasis.makeBasis(_palmRight, _palmUp, _palmNorm);
  palmCoreGroup.quaternion.setFromRotationMatrix(_palmBasis);
  palmCoreGroup.position.set(
    (_p0.x + _p5.x + _p9.x + _p13.x + _p17.x) * 0.2,
    (_p0.y + _p5.y + _p9.y + _p13.y + _p17.y) * 0.2,
    (_p0.z + _p5.z + _p9.z + _p13.z + _p17.z) * 0.2
  );

  _segDir.subVectors(_p2, _p1);
  const thenarLen = Math.max(0.018, Math.min(0.044, _segDir.length()));
  thenarGroup.position.copy(_p1);
  thenarGroup.quaternion.setFromUnitVectors(_yAxis, _segDir.normalize());
  thenarGroup.scale.set(1, thenarLen, 1);

  for (let f = 0; f < 5; f++) {
    const [j0, j1, cut] = _fingerJoints[f];
    readLocal(j0, _p1);
    readLocal(j1, _p2);
    _segDir.subVectors(_p2, _p1);
    const segLen = Math.max(0.018, Math.min(0.038, _segDir.length() * cut));
    const sleeve = fingerSleeves[f];
    sleeve.position.copy(_p1);
    sleeve.quaternion.setFromUnitVectors(_yAxis, _segDir.normalize());
    sleeve.scale.set(1, segLen, 1);
  }
}

/**
 * Constrói o modelo 3D da pistola G18 (toda preta com o cano cinza),
 * com o cano apontando para -Z (PARA A FRENTE, na direção dos alvos).
 */
function buildG18PistolModel() {
  const pistolGroup = new THREE.Group();

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

  const lowerFrame = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.016, 0.185), blackFrameMat);
  lowerFrame.position.set(0, 0.008, -0.030);
  pistolGroup.add(lowerFrame);

  const railSlotGeo = new THREE.BoxGeometry(0.033, 0.004, 0.008);
  for (let i = 0; i < 3; i++) {
    const railSlot = new THREE.Mesh(railSlotGeo, blackDetailMat);
    railSlot.position.set(0, 0.001, -0.075 - i * 0.018);
    pistolGroup.add(railSlot);
  }

  const slideGroup = new THREE.Group();
  slideGroup.position.set(0, 0.028, -0.028);
  pistolGroup.add(slideGroup);

  const slideMain = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.028, 0.196), blackSlideMat);
  slideGroup.add(slideMain);

  const serrGeo = new THREE.BoxGeometry(0.0365, 0.022, 0.0035);
  for (let s = 0; s < 6; s++) {
    const serr = new THREE.Mesh(serrGeo, blackDetailMat);
    serr.position.set(0, 0.001, 0.048 + s * 0.0075);
    slideGroup.add(serr);
  }

  const selectorBase = new THREE.Mesh(new THREE.CylinderGeometry(0.0065, 0.0065, 0.004, 10), blackDetailMat);
  selectorBase.rotation.z = Math.PI / 2;
  selectorBase.position.set(-0.0185, 0.002, 0.068);
  const selectorLever = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.005, 0.016), blackDetailMat);
  selectorLever.rotation.x = -0.35;
  selectorLever.position.set(-0.0195, -0.001, 0.064);
  slideGroup.add(selectorBase, selectorLever);

  const rearSightBase = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.007, 0.012), blackFrameMat);
  rearSightBase.position.set(0, 0.017, 0.084);
  const dotGeo = new THREE.BoxGeometry(0.004, 0.004, 0.002);
  const rearSightDotL = new THREE.Mesh(dotGeo, sightDotMat);
  rearSightDotL.position.set(-0.006, 0.017, 0.0905);
  const rearSightDotR = new THREE.Mesh(dotGeo, sightDotMat);
  rearSightDotR.position.set(0.006, 0.017, 0.0905);
  const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.008, 0.012), blackFrameMat);
  frontSight.position.set(0, 0.0175, -0.088);
  slideGroup.add(rearSightBase, rearSightDotL, rearSightDotR, frontSight);

  // Cano cinza metálico da G18 apontando para -Z
  const chamberBlock = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.018, 0.044), grayBarrelMat);
  chamberBlock.position.set(0.003, 0.032, -0.008);
  pistolGroup.add(chamberBlock);

  const grayBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.0095, 0.0095, 0.195, 12), grayBarrelMat);
  grayBarrel.rotation.x = Math.PI / 2;
  grayBarrel.position.set(0, 0.030, -0.072);
  pistolGroup.add(grayBarrel);

  const grayMuzzleTip = new THREE.Mesh(new THREE.CylinderGeometry(0.0108, 0.0108, 0.036, 12), grayBarrelMat);
  grayMuzzleTip.rotation.x = Math.PI / 2;
  grayMuzzleTip.position.set(0, 0.030, -0.152);
  pistolGroup.add(grayMuzzleTip);

  const barrelBore = new THREE.Mesh(new THREE.CylinderGeometry(0.0065, 0.0065, 0.006, 10), boreDarkMat);
  barrelBore.rotation.x = Math.PI / 2;
  barrelBore.position.set(0, 0.030, -0.171);
  pistolGroup.add(barrelBore);

  // Empunhadura toda preta inclinada para trás (-0.22 rad)
  const gripGroup = new THREE.Group();
  gripGroup.position.set(0, -0.002, 0.040);
  gripGroup.rotation.x = -0.22;
  pistolGroup.add(gripGroup);

  const gripBody = new THREE.Mesh(new THREE.BoxGeometry(0.031, 0.108, 0.046), blackFrameMat);
  gripBody.position.set(0, -0.052, 0);
  const gripTexturePanel = new THREE.Mesh(new THREE.BoxGeometry(0.0325, 0.082, 0.032), blackDetailMat);
  gripTexturePanel.position.set(0, -0.054, 0.002);
  const extMag = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.042, 0.038), blackSlideMat);
  extMag.position.set(0, -0.118, 0.001);
  const magBaseplate = new THREE.Mesh(new THREE.BoxGeometry(0.030, 0.010, 0.044), blackFrameMat);
  magBaseplate.position.set(0, -0.140, 0.001);
  gripGroup.add(gripBody, gripTexturePanel, extMag, magBaseplate);

  const triggerGuardBottom = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.007, 0.052), blackFrameMat);
  triggerGuardBottom.position.set(0, -0.022, -0.002);
  const triggerGuardFront = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.026, 0.008), blackFrameMat);
  triggerGuardFront.position.set(0, -0.010, -0.025);
  const triggerMesh = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.022, 0.009), blackDetailMat);
  triggerMesh.position.set(0, -0.006, 0.002);
  triggerMesh.rotation.x = 0.25;
  pistolGroup.add(triggerGuardBottom, triggerGuardFront, triggerMesh);

  const laserMat = new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.62 });
  const laserBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.0016, 0.0016, 2.50, 6), laserMat);
  laserBeam.rotation.x = Math.PI / 2;
  laserBeam.position.set(0, 0.010, -1.42);
  pistolGroup.add(laserBeam);

  const muzzleFlash = new THREE.Mesh(
    new THREE.SphereGeometry(0.032, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0 })
  );
  muzzleFlash.position.set(0, 0.030, -0.176);
  pistolGroup.add(muzzleFlash);

  return { pistolGroup, slideGroup, triggerMesh, muzzleFlash, grayBarrel, grayMuzzleTip };
}

/**
 * Constrói um Alvo 3D usando as geometrias e materiais compartilhados (Otimizado).
 */
function build3DTargetModel(spec, idx) {
  const sh = getSharedAssets();
  const root = new THREE.Group();
  root.position.set(spec.x, spec.y, spec.z);
  root.lookAt(0, spec.y, 0);
  root.scale.setScalar(1.30);
  root.updateMatrix();
  root.matrixAutoUpdate = false;

  const basePlate = new THREE.Mesh(sh.basePlateGeo, sh.armorMat);
  basePlate.position.set(0, -0.132, 0);
  basePlate.updateMatrix();
  basePlate.matrixAutoUpdate = false;
  root.add(basePlate);

  const bracketL = new THREE.Mesh(sh.bracketGeo, sh.steelMat);
  bracketL.position.set(-0.048, -0.108, 0);
  bracketL.updateMatrix();
  bracketL.matrixAutoUpdate = false;
  const bracketR = new THREE.Mesh(sh.bracketGeo, sh.steelMat);
  bracketR.position.set(0.048, -0.108, 0);
  bracketR.updateMatrix();
  bracketR.matrixAutoUpdate = false;
  const hingeAxle = new THREE.Mesh(sh.hingeAxleGeo, sh.steelMat);
  hingeAxle.rotation.z = Math.PI / 2;
  hingeAxle.position.set(0, -0.104, 0);
  hingeAxle.updateMatrix();
  hingeAxle.matrixAutoUpdate = false;
  root.add(bracketL, bracketR, hingeAxle);

  const pivot = new THREE.Group();
  pivot.position.set(0, -0.104, 0);
  root.add(pivot);

  const supportArm = new THREE.Mesh(sh.supportArmGeo, sh.armorMat);
  supportArm.position.set(0, 0.052, -0.006);
  const outerBezel = new THREE.Mesh(sh.outerBezelGeo, sh.armorMat);
  outerBezel.rotation.x = Math.PI / 2;
  outerBezel.position.set(0, 0.108, -0.004);
  pivot.add(supportArm, outerBezel);

  const boltOffsets = [
    [-0.082, 0.190],
    [ 0.082, 0.190],
    [-0.082, 0.026],
    [ 0.082, 0.026],
  ];
  for (const [bx, by] of boltOffsets) {
    const bolt = new THREE.Mesh(sh.boltGeo, sh.steelMat);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(bx, by, 0.002);
    pivot.add(bolt);
  }

  const layerMats = [sh.ringWhiteMat, sh.ringDarkMat, sh.ringBlueMat, sh.ringRedMat, sh.bullGoldMat];
  const layerZs = [0.004, 0.009, 0.014, 0.019, 0.024];
  for (let i = 0; i < 5; i++) {
    const cyl = new THREE.Mesh(sh.layerGeos[i], layerMats[i]);
    cyl.rotation.x = Math.PI / 2;
    cyl.position.set(0, 0.108, layerZs[i]);
    pivot.add(cyl);
  }

  const coreDome = new THREE.Mesh(sh.coreDomeGeo, sh.bullGoldMat);
  coreDome.position.set(0, 0.108, 0.044);
  const neckBar = new THREE.Mesh(sh.neckBarGeo, sh.armorMat);
  neckBar.position.set(0, 0.232, -0.004);
  const headArmor = new THREE.Mesh(sh.headArmorGeo, sh.armorMat);
  headArmor.rotation.x = Math.PI / 2;
  headArmor.position.set(0, 0.264, 0.002);
  const headCenter = new THREE.Mesh(sh.headCenterGeo, sh.ringRedMat);
  headCenter.rotation.x = Math.PI / 2;
  headCenter.position.set(0, 0.264, 0.008);
  pivot.add(coreDome, neckBar, headArmor, headCenter);

  return {
    idx,
    root,
    pivot,
    coreDome,
    is3DModel: true,
    meshCount: pivot.children.length + root.children.length,
    pos: new THREE.Vector3(spec.x, spec.y, spec.z),
    radius: 0.21,
    hit: false,
    flipAngle: 0,
  };
}

function bootMrPistolEngine(container) {
  const sh = getSharedAssets();
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
      precision: 'mediump',
      stencil: false,
    });
    if (native) {
      glRenderer.setPixelRatio(1);
      glRenderer.setSize(1200, 800, false);
    } else {
      glRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
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

  const eyeL = new THREE.PerspectiveCamera(78, 600 / 800, 0.04, 24);
  const eyeR = new THREE.PerspectiveCamera(78, 600 / 800, 0.04, 24);
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
  const PISTOL_FORWARD_REF = new THREE.Vector3(0.08, 1.44, -2.60);
  const holsterPedestal = new THREE.Group();
  holsterPedestal.position.copy(PISTOL_HOME);
  scene.add(holsterPedestal);

  const holsterRing = new THREE.Mesh(
    new THREE.RingGeometry(0.065, 0.088, 24),
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
    new THREE.SphereGeometry(0.016, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0x34d399 })
  );
  scene.add(laserDot);

  // ==========================================================================
  // 2. LUVA VERDE COM ABERTURA NOS DEDOS EM MODELO 3D REAL (Direita + Esquerda com Sair)
  // ==========================================================================
  const rightGlove3D = build3DGloveModel(false);
  rightGlove3D.gloveRoot.position.set(0.10, 1.38, -0.43);
  scene.add(rightGlove3D.gloveRoot);

  const leftGlove3D = build3DGloveModel(true);
  leftGlove3D.gloveRoot.position.set(-0.18, 1.34, -0.45);
  leftGlove3D.gloveRoot.visible = false;
  scene.add(leftGlove3D.gloveRoot);

  // ==========================================================================
  // 3. 6 ALVOS EM MODELO 3D POSICIONADOS MAIS LONGE (z = -2.25 m a -3.15 m)
  // ==========================================================================
  const TARGET_SPECS = [
    { x: -0.78, y: 1.66, z: -2.65 },
    { x:  0.00, y: 1.74, z: -3.15 },
    { x:  0.78, y: 1.66, z: -2.65 },
    { x: -0.52, y: 1.28, z: -2.25 },
    { x:  0.00, y: 1.34, z: -2.55 },
    { x:  0.52, y: 1.28, z: -2.25 },
  ];

  const targets = TARGET_SPECS.map((spec, idx) => {
    const t = build3DTargetModel(spec, idx);
    scene.add(t.root);
    return t;
  });

  // ==========================================================================
  // 4. BOTÃO 3D DE REINICIAR ALVOS PERTO DO JOGADOR (z = -0.50 m)
  // ==========================================================================
  const RESET_POS = new THREE.Vector3(-0.24, 1.36, -0.50);
  const resetPedestal = new THREE.Group();
  resetPedestal.position.copy(RESET_POS);
  resetPedestal.lookAt(0, 1.42, 0);
  scene.add(resetPedestal);

  const resetSign = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.09, 0.018),
    new THREE.MeshBasicMaterial({ map: sh.resetLabelTex })
  );
  resetSign.position.set(0, 0.065, 0);
  resetPedestal.add(resetSign);

  const resetCapMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    emissive: 0x059669,
    emissiveIntensity: 0.55,
    roughness: 0.25,
  });
  const resetCap = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.062, 0.028, 16), resetCapMat);
  resetCap.rotation.x = Math.PI / 2;
  resetCap.position.set(0, -0.01, 0.018);
  resetPedestal.add(resetCap);

  // ==========================================================================
  // 5. BOTÃO 3D ATRÁS DO JOGADOR PARA SAIR DO JOGO (z = +0.52 m)
  // ==========================================================================
  const EXIT_BACK_POS = new THREE.Vector3(0.0, 1.38, 0.52);
  const exitBackPedestal = new THREE.Group();
  exitBackPedestal.position.copy(EXIT_BACK_POS);
  exitBackPedestal.lookAt(0, 1.42, 0);
  scene.add(exitBackPedestal);

  const exitBackSign = new THREE.Mesh(
    new THREE.BoxGeometry(0.20, 0.095, 0.018),
    new THREE.MeshBasicMaterial({ map: sh.exitBackLabelTex })
  );
  exitBackSign.position.set(0, 0.068, 0);
  exitBackPedestal.add(exitBackSign);

  const exitBackCap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.058, 0.065, 0.030, 16),
    sh.exitRedMat
  );
  exitBackCap.rotation.x = Math.PI / 2;
  exitBackCap.position.set(0, -0.01, 0.018);
  exitBackPedestal.add(exitBackCap);

  // Feixe tracer de tiro
  const tracerMat = new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0 });
  const tracerMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.0035, 0.0035, 1.0, 6), tracerMat);
  scene.add(tracerMesh);

  // Estado do jogo ShootTheDie
  const state = {
    gameName: 'ShootTheDie',
    gameLogo: './icons/shootthedie-logo.jpg',
    grabbed: false,
    grabbedByHandId: null,
    fingerGunActive: false,
    pistolStyle: 'G18-black-gray-barrel',
    targetsAre3D: targets.every(t => t.is3DModel && t.meshCount >= 10),
    gloveIs3D: Boolean(rightGlove3D.is3DGlove && rightGlove3D.meshCount >= 20 && rightGlove3D.fingerSleeves.length === 5),
    hasBackExitButton: Boolean(exitBackPedestal && exitBackPosCheck(EXIT_BACK_POS)),
    hasLeftHandExit: Boolean(leftGlove3D.leftExitBadge),
    pistolForwardZ: -1,
    shots: 0,
    hits: 0,
    score: 0,
    activeTargets: targets.length,
    pistolDistance: Number(PISTOL_HOME.length().toFixed(3)),
    minTargetDistance: Number(Math.min(...targets.map(t => t.pos.length())).toFixed(3)),
    maxTargetDistance: Number(Math.max(...targets.map(t => t.pos.length())).toFixed(3)),
    resetButtonDistance: Number(RESET_POS.length().toFixed(3)),
    backExitButtonZ: Number(EXIT_BACK_POS.z.toFixed(3)),
    recoil: 0,
    flashAlpha: 0,
    tracerAlpha: 0,
    lastFingerGun: false,
    leftFistFrames: 0,
    lastResetTouchMs: 0,
    lastShotMs: 0,
  };

  function exitBackPosCheck(pos) {
    return pos.z > 0.3 && pos.length() < 1.85;
  }

  function updateHud() {
    const knocked = targets.filter(t => t.hit).length;
    state.activeTargets = targets.length - knocked;
    if (scoreEl) {
      scoreEl.textContent = `ALVOS 3D: ${knocked}/${targets.length} · ${state.score} PTS`;
    }
    if (statusEl) {
      if (knocked === targets.length) {
        statusEl.textContent = 'Todos os alvos 3D abatidos! Toque em Reiniciar Alvos';
      } else if (state.grabbed) {
        statusEl.textContent = state.fingerGunActive
          ? 'ShootTheDie · Gesto de arminha ativo · Atirando!'
          : 'G18 na Luva 3D · Gesto de arminha (👉) atira · Feche mão esq. p/ sair';
      } else {
        statusEl.textContent = 'Gesto de arminha (👉) pega a G18 · Feche mão esq. ou botão atrás p/ sair';
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

    // Posiciona o tracer visual sem alocar vetores
    _vA.copy(muzzleWorld).addScaledVector(aimDir, 2.75);
    _vB.copy(muzzleWorld).lerp(_vA, 0.5);
    tracerMesh.position.copy(_vB);
    tracerMesh.scale.set(1, muzzleWorld.distanceTo(_vA), 1);
    tracerMesh.quaternion.setFromUnitVectors(_yAxis, aimDir);

    // 1. Verifica se o tiro acertou o botão 3D ATRÁS de Sair do Jogo
    _vC.copy(EXIT_BACK_POS).sub(muzzleWorld);
    const projExit = _vC.dot(aimDir);
    if (projExit > 0 && projExit < 2.2) {
      const perpExit = _vD.copy(_vC).addScaledVector(aimDir, -projExit).length();
      if (perpExit <= 0.14) {
        toast('Saindo do ShootTheDie...');
        closeMrPistolGame();
        return true;
      }
    }

    // 2. Verifica se o tiro acertou o botão 3D de Reiniciar Alvos
    _vC.copy(RESET_POS).sub(muzzleWorld);
    const projReset = _vC.dot(aimDir);
    if (projReset > 0 && projReset < 1.8) {
      const perpReset = _vD.copy(_vC).addScaledVector(aimDir, -projReset).length();
      if (perpReset <= 0.11) {
        resetTargets();
        return true;
      }
    }

    // 3. Verifica colisão com os 6 alvos 3D mais distantes (até 4.5 m)
    let bestTarget = null;
    let bestDist = Infinity;
    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      if (t.hit) continue;
      _vC.copy(t.pos).sub(muzzleWorld);
      const proj = _vC.dot(aimDir);
      if (proj < 0.20 || proj > 4.5) continue;
      const perpDist = _vD.copy(_vC).addScaledVector(aimDir, -proj).length();
      if (perpDist <= t.radius && perpDist < bestDist) {
        bestDist = perpDist;
        bestTarget = t;
      }
    }

    if (bestTarget) {
      bestTarget.hit = true;
      state.hits++;
      const accuracyBonus = bestDist < 0.065 ? 100 : bestDist < 0.125 ? 75 : 50;
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

  function shootAtBackExitButton() {
    if (!state.grabbed) grabPistol('right');
    aimForwardAt(pistolGroup, EXIT_BACK_POS);
    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    aimDir.copy(EXIT_BACK_POS).sub(muzzleWorld).normalize();
    state.lastShotMs = 0;
    return fireShot(muzzleWorld, aimDir);
  }

  // Conecta o Hand Tracking em tempo real à Luva Verde 3D e à G18 (Zero-Allocation)
  const handWorldPos = new THREE.Vector3();
  const leftHandWorldPos = new THREE.Vector3();
  const gripAnchorWorld = new THREE.Vector3();
  const handAimTarget = new THREE.Vector3();

  const processHandTracking = () => {
    if (!Array.isArray(trackedHands) || trackedHands.length === 0) {
      state.fingerGunActive = false;
      state.lastFingerGun = false;
      state.leftFistFrames = 0;
      leftGlove3D.gloveRoot.visible = false;
      if (state.grabbed) {
        gripAnchorWorld.set(0, -0.055, 0.048).applyQuaternion(pistolGroup.quaternion).add(pistolGroup.position);
        update3DGlovePose(rightGlove3D, null, gripAnchorWorld, pistolGroup.quaternion);
      }
      return;
    }

    const leftH = trackedHands.find(h => h.id === 'left' || h.left === true);
    const gunHand = trackedHands.find(h => h !== leftH && detectFingerGunGesture(h))
      || trackedHands.find(h => detectFingerGunGesture(h));
    const rightH = gunHand || trackedHands.find(h => h.id === 'right' || h.left === false) || (leftH ? null : trackedHands[0]);

    // MÃO ESQUERDA: renderiza a Luva 3D com badge "SAIR" e fecha o jogo ao fechar a mão esquerda!
    if (leftH) {
      const lp = leftH.palm || leftH.aim || [0.35, 0.55, 0];
      const lDepth = Math.max(0.36, Math.min(0.68, 0.48 - (Number(lp[2]) || 0) * 0.22));
      leftHandWorldPos.set((Number(lp[0]) - 0.5) * 0.82, (0.5 - Number(lp[1])) * 0.62 - 0.06, -lDepth)
        .applyMatrix4(playerRig.matrixWorld);
      update3DGlovePose(leftGlove3D, leftH, leftHandWorldPos, playerRig.quaternion);

      if (detectClosedFist(leftH)) {
        state.leftFistFrames++;
        if (state.leftFistFrames >= 2) {
          toast('Mão esquerda fechada · Saindo do ShootTheDie');
          closeMrPistolGame();
          return;
        }
      } else {
        state.leftFistFrames = 0;
      }
    } else {
      leftGlove3D.gloveRoot.visible = false;
      state.leftFistFrames = 0;
    }

    // Verifica toque de qualquer mão no botão 3D de Reiniciar Alvos ou no botão 3D de Sair atrás
    const now = performance.now();
    for (let i = 0; i < trackedHands.length; i++) {
      const h = trackedHands[i];
      const hp = h.palm || h.aim || [0.5, 0.5, 0];
      _vE.set((Number(hp[0]) - 0.5) * 0.82, (0.5 - Number(hp[1])) * 0.62 - 0.06, -0.50)
        .applyMatrix4(playerRig.matrixWorld);
      if (_vE.distanceTo(EXIT_BACK_POS) < 0.20) {
        toast('Saindo do ShootTheDie...');
        closeMrPistolGame();
        return;
      }
      if (_vE.distanceTo(RESET_POS) < 0.16 && now - state.lastResetTouchMs > 700) {
        state.lastResetTouchMs = now;
        resetTargets();
      }
    }

    if (!rightH) return;

    const palm = rightH.palm || rightH.aim || [0.5, 0.5, 0];
    const depth = Math.max(0.36, Math.min(0.68, 0.48 - (Number(palm[2]) || 0) * 0.22));
    const localX = (Number(palm[0]) - 0.5) * 0.82;
    const localY = (0.5 - Number(palm[1])) * 0.62 - 0.06;
    handWorldPos.set(localX, localY, -depth).applyMatrix4(playerRig.matrixWorld);

    // Detecta o gesto de arminha (polegar levantado + indicador apontando pra frente + outros 3 dedos dobrados)
    const isFingerGun = detectFingerGunGesture(rightH);
    state.fingerGunActive = isFingerGun;

    const distToPistol = handWorldPos.distanceTo(pistolGroup.position);
    if (!state.grabbed && (distToPistol < 0.34 || isFingerGun)) {
      grabPistol(rightH.id || 'right');
    }

    if (state.grabbed) {
      pistolGroup.position.lerp(handWorldPos, 0.72);
      const pts = rightH.points;
      let aimX = (Number(palm[0]) - 0.5) * 2.30;
      let aimY = (0.5 - Number(palm[1])) * 1.65;
      if (pts && pts.length >= 27) {
        const idxTipX = (Number(pts[8 * 3]) - 0.5) * 2.45;
        const idxTipY = (0.5 - Number(pts[8 * 3 + 1])) * 1.75;
        aimX = aimX * 0.35 + idxTipX * 0.65;
        aimY = aimY * 0.35 + idxTipY * 0.65;
      }
      handAimTarget.set(aimX, aimY, -2.65).applyMatrix4(playerRig.matrixWorld);

      for (let i = 0; i < targets.length; i++) {
        const t = targets[i];
        if (!t.hit && t.pos.distanceTo(handAimTarget) < 0.42) {
          handAimTarget.lerp(t.pos, 0.50);
          break;
        }
      }
      aimForwardAt(pistolGroup, handAimTarget);

      gripAnchorWorld.set(0, -0.055, 0.048).applyQuaternion(pistolGroup.quaternion).add(pistolGroup.position);
      update3DGlovePose(rightGlove3D, rightH, gripAnchorWorld, pistolGroup.quaternion);

      if (isFingerGun && (!state.lastFingerGun || now - state.lastShotMs >= 210)) {
        fireShot();
      }
      state.lastFingerGun = isFingerGun;
    } else {
      update3DGlovePose(rightGlove3D, rightH, handWorldPos, playerRig.quaternion);
    }
  };

  window.__gorillaOnHands = processHandTracking;

  const onCanvasPointerDown = (e) => {
    if (e.target.closest('button')) return;
    const rect = canvas.getBoundingClientRect();
    const nx = (((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1) * 1.15;
    const ny = (0.5 - (e.clientY - rect.top) / Math.max(1, rect.height)) * 1.05;
    if (!state.grabbed) grabPistol('touch');
    _vA.set(nx, 1.50 + ny, -2.65);
    aimForwardAt(pistolGroup, _vA);
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

    if (coreCamera) {
      playerRig.quaternion.copy(coreCamera.quaternion);
      playerRig.position.set(coreCamera.position.x, 1.55, coreCamera.position.z);
    }
    playerRig.updateMatrixWorld(true);

    processHandTracking();
    if (!mrActive) return;

    if (!state.grabbed) {
      pistolGroup.position.set(
        PISTOL_HOME.x,
        PISTOL_HOME.y + Math.sin(now * 0.0032) * 0.016,
        PISTOL_HOME.z
      );
      pistolGroup.rotation.set(0, Math.sin(now * 0.0016) * 0.16, 0);
    }

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
    } else if (muzzleFlash.material.opacity !== 0) {
      muzzleFlash.material.opacity = 0;
    }

    if (state.tracerAlpha > 0.01) {
      state.tracerAlpha = Math.max(0, state.tracerAlpha - dt * 10);
      tracerMat.opacity = state.tracerAlpha;
    } else if (tracerMat.opacity !== 0) {
      tracerMat.opacity = 0;
    }

    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    forwardCheck.set(0, 0, -1).applyQuaternion(pistolGroup.quaternion).normalize();
    state.pistolForwardZ = Number(forwardCheck.z.toFixed(3));
    laserDot.position.copy(muzzleWorld).addScaledVector(forwardCheck, 2.15);

    const rotStep = Math.min(1, dt * 14);
    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      const targetAngle = t.hit ? -Math.PI * 0.52 : 0;
      if (Math.abs(targetAngle - t.flipAngle) > 0.001) {
        t.flipAngle += (targetAngle - t.flipAngle) * rotStep;
        t.pivot.rotation.x = t.flipAngle;
      }
    }

    if (glRenderer) {
      const w = glRenderer.domElement.width || 1200;
      const h = glRenderer.domElement.height || 800;
      const halfW = w >> 1;
      glRenderer.setViewport(0, 0, halfW, h);
      glRenderer.setScissor(0, 0, halfW, h);
      glRenderer.render(scene, eyeL);

      glRenderer.setViewport(halfW, 0, w - halfW, h);
      glRenderer.setScissor(halfW, 0, w - halfW, h);
      glRenderer.render(scene, eyeR);
    }
  }

  updateHud();
  rafId = requestAnimationFrame(renderLoop);

  state.grabPistol = grabPistol;
  state.releasePistol = releasePistol;
  state.fireShot = fireShot;
  state.shootAtTarget = shootAtTarget;
  state.shootAtResetButton = shootAtResetButton;
  state.shootAtBackExitButton = shootAtBackExitButton;
  state.resetTargets = resetTargets;
  state.detectFingerGunGesture = detectFingerGunGesture;
  state.detectClosedFist = detectClosedFist;
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
  window.detectClosedFist = detectClosedFist;
}
