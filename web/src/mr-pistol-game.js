// ============================================================================
// NextVR — Pistola MR (Mixed Reality Floating Pistol & Close Target Range)
// Jogo em Realidade Mista (MR) sobre a câmera real (passthrough):
// - Pistola tática 3D flutuante bem perto do jogador (z = -0.48 m);
// - Hand tracking pega a pistola flutuante ao aproximar a mão ou fazer pinça;
// - Atira nos 6 alvos próximos (z = -0.82 m a -0.92 m) com mira laser e recuo;
// - Botão 3D próximo (z = -0.50 m) + botão HUD para reiniciar todos os alvos.
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

  // Ativa passthrough da câmera real para Mixed Reality (MR)
  setPassthrough(true);
  window.NativeXR?.setMrGameMode?.(true);

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
    <div data-mr-pistol-hud style="position:absolute;top:14px;left:50%;transform:translateX(-50%);z-index:12;display:flex;align-items:center;gap:10px;padding:7px 14px;border-radius:999px;background:rgba(6,20,16,.76);border:1.5px solid rgba(52,211,153,.55);backdrop-filter:blur(10px);color:#ecfdf5;box-shadow:0 10px 28px rgba(0,0,0,.45)">
      <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:900;letter-spacing:.05em;color:#34d399">
        🔫 PISTOLA MR
      </span>
      <span data-mr-pistol-status style="font-size:11.5px;font-weight:700;color:#d1fae5;padding:3px 9px;border-radius:999px;background:rgba(16,185,129,.22);border:1px solid rgba(52,211,153,.38)">
        Aproxime a mão para pegar a pistola
      </span>
      <span data-mr-pistol-score style="font-size:12px;font-weight:800;color:#fde047;min-width:110px;text-align:center">
        ALVOS: 0/6 · 0 PTS
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

function makeBullseyeTexture() {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 256;
  const ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  const rings = [
    { r: 120, color: '#f8fafc' },
    { r: 96,  color: '#0f172a' },
    { r: 72,  color: '#0284c7' },
    { r: 48,  color: '#ef4444' },
    { r: 24,  color: '#facc15' },
  ];
  for (const ring of rings) {
    ctx.beginPath();
    ctx.arc(128, 128, ring.r, 0, Math.PI * 2);
    ctx.fillStyle = ring.color;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(15,23,42,0.55)';
    ctx.stroke();
  }
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 20px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('100', 128, 128);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
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
  ctx.fillText('ALVOS (MR)', 128, 92);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function bootMrPistolEngine(container) {
  const canvas = container.querySelector('[data-mr-pistol-canvas]');
  const statusEl = container.querySelector('[data-mr-pistol-status]');
  const scoreEl = container.querySelector('[data-mr-pistol-score]');
  const resetBtnEl = container.querySelector('[data-mr-pistol-reset]');
  const dropBtnEl = container.querySelector('[data-mr-pistol-drop]');
  const exitBtnEl = container.querySelector('[data-mr-pistol-exit]');

  // Áudio procedural leve para tiro, acerto no alvo e botão de reiniciar
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

  scene.add(new THREE.AmbientLight(0xffffff, 1.15));
  const dirLight = new THREE.DirectionalLight(0xecfdf5, 1.35);
  dirLight.position.set(1.2, 3.0, 1.5);
  scene.add(dirLight);

  // ==========================================================================
  // 1. PISTOLA FLUTUANTE 3D PERTO DO JOGADOR (z = -0.48 m)
  // ==========================================================================
  const PISTOL_HOME = new THREE.Vector3(0.08, 1.44, -0.48);
  const holsterPedestal = new THREE.Group();
  holsterPedestal.position.copy(PISTOL_HOME);
  scene.add(holsterPedestal);

  const holsterRing = new THREE.Mesh(
    new THREE.RingGeometry(0.065, 0.088, 28),
    new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide, transparent: true, opacity: 0.82 })
  );
  holsterRing.rotation.x = -Math.PI / 2;
  holsterRing.position.y = -0.08;
  holsterPedestal.add(holsterRing);

  const pistolGroup = new THREE.Group();
  pistolGroup.position.copy(PISTOL_HOME);
  scene.add(pistolGroup);

  const slideMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.28, metalness: 0.78 });
  const gripMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.65, metalness: 0.22 });
  const neonMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.22, metalness: 0.85 });

  // Ferrolho (slide)
  const slideMesh = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.042, 0.19), slideMat);
  slideMesh.position.set(0, 0.025, -0.02);
  pistolGroup.add(slideMesh);

  // Cano (barrel)
  const barrelMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.21, 12), barrelMat);
  barrelMesh.rotation.x = Math.PI / 2;
  barrelMesh.position.set(0, 0.026, -0.032);
  pistolGroup.add(barrelMesh);

  // Miras de fibra ótica verde neon
  const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.010, 0.012), neonMat);
  frontSight.position.set(0, 0.050, -0.102);
  const rearSightL = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.009, 0.010), neonMat);
  rearSightL.position.set(-0.010, 0.050, 0.062);
  const rearSightR = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.009, 0.010), neonMat);
  rearSightR.position.set(0.010, 0.050, 0.062);
  pistolGroup.add(frontSight, rearSightL, rearSightR);

  // Empunhadura tática (grip) com faixa verde
  const gripMesh = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.105, 0.046), gripMat);
  gripMesh.position.set(0, -0.038, 0.036);
  gripMesh.rotation.x = 0.24;
  pistolGroup.add(gripMesh);

  const gripStripe = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.082, 0.012), neonMat);
  gripStripe.position.set(0, -0.038, 0.022);
  gripStripe.rotation.x = 0.24;
  pistolGroup.add(gripStripe);

  // Guarda-mato + gatilho
  const guardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.028, 0.048), slideMat);
  guardMesh.position.set(0, -0.006, -0.002);
  pistolGroup.add(guardMesh);

  const triggerMesh = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.022, 0.010), neonMat);
  triggerMesh.position.set(0, 0.002, 0.004);
  pistolGroup.add(triggerMesh);

  // Mira laser contínua saindo do cano até os alvos próximos
  const laserMat = new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.72 });
  const laserBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.0018, 0.0018, 1.0, 8), laserMat);
  laserBeam.rotation.x = Math.PI / 2;
  laserBeam.position.set(0, 0.014, -0.62);
  pistolGroup.add(laserBeam);

  const laserDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.012, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0xfef08a })
  );
  scene.add(laserDot);

  // Flash do cano ao atirar
  const muzzleFlash = new THREE.Mesh(
    new THREE.SphereGeometry(0.034, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0 })
  );
  muzzleFlash.position.set(0, 0.026, -0.145);
  pistolGroup.add(muzzleFlash);

  // ==========================================================================
  // 2. 6 ALVOS PRÓXIMOS AO JOGADOR (z = -0.82 m a -0.92 m)
  // ==========================================================================
  const bullseyeTex = makeBullseyeTexture();
  const TARGET_SPECS = [
    { x: -0.34, y: 1.58, z: -0.86 },
    { x:  0.00, y: 1.64, z: -0.92 },
    { x:  0.34, y: 1.58, z: -0.86 },
    { x: -0.24, y: 1.34, z: -0.82 },
    { x:  0.00, y: 1.38, z: -0.85 },
    { x:  0.24, y: 1.34, z: -0.82 },
  ];

  const targets = TARGET_SPECS.map((spec, idx) => {
    const root = new THREE.Group();
    root.position.set(spec.x, spec.y, spec.z);
    root.lookAt(0, spec.y, 0);
    scene.add(root);

    const baseBar = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.018, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.6 })
    );
    baseBar.position.y = -0.115;
    root.add(baseBar);

    const pivot = new THREE.Group();
    pivot.position.y = -0.105;
    root.add(pivot);

    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.105, 0.105, 0.016, 24),
      [
        new THREE.MeshStandardMaterial({ color: 0x34d399, roughness: 0.35 }),
        new THREE.MeshBasicMaterial({ map: bullseyeTex }),
        new THREE.MeshBasicMaterial({ map: bullseyeTex }),
      ]
    );
    disc.rotation.x = Math.PI / 2;
    disc.position.y = 0.105;
    pivot.add(disc);

    return {
      idx,
      root,
      pivot,
      disc,
      pos: new THREE.Vector3(spec.x, spec.y, spec.z),
      radius: 0.125,
      hit: false,
      flipAngle: 0,
    };
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

  // ==========================================================================
  // 4. LUVA VERDE COM ABERTURA NOS DEDOS 3D NO CENÁRIO MR
  // ==========================================================================
  const handMarker = new THREE.Group();
  const glovePalmMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.058, 0.052, 0.022),
    new THREE.MeshBasicMaterial({ color: 0x14c868, transparent: true, opacity: 0.52 })
  );
  handMarker.add(glovePalmMesh);
  for (let f = 0; f < 5; f++) {
    const sleeve = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0065, 0.0075, 0.022, 8),
      new THREE.MeshBasicMaterial({ color: 0x5cffa3, transparent: true, opacity: 0.78 })
    );
    sleeve.position.set((f - 2) * 0.012, 0.032, 0);
    handMarker.add(sleeve);
  }
  handMarker.visible = false;
  scene.add(handMarker);

  // Feixe tracer de tiro
  const tracerMat = new THREE.MeshBasicMaterial({ color: 0xfef08a, transparent: true, opacity: 0 });
  const tracerMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 1.0, 6), tracerMat);
  scene.add(tracerMesh);

  // Estado do jogo MR
  const state = {
    grabbed: false,
    grabbedByHandId: null,
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
    lastPinch: false,
    lastResetTouchMs: 0,
    lastShotMs: 0,
  };

  function updateHud() {
    const knocked = targets.filter(t => t.hit).length;
    state.activeTargets = targets.length - knocked;
    if (scoreEl) {
      scoreEl.textContent = `ALVOS: ${knocked}/${targets.length} · ${state.score} PTS`;
    }
    if (statusEl) {
      if (knocked === targets.length) {
        statusEl.textContent = 'Todos os alvos abatidos! Toque no botão Reiniciar Alvos';
      } else if (state.grabbed) {
        statusEl.textContent = 'Pistola na mão · Faça pinça para atirar nos alvos!';
      } else {
        statusEl.textContent = 'Aproxime a mão para pegar a pistola flutuante';
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
    toast('Alvos reiniciados!');
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
    pistolGroup.position.copy(PISTOL_HOME);
    pistolGroup.rotation.set(0, 0, 0);
    holsterRing.material.opacity = 0.82;
    updateHud();
  }

  const raycaster = new THREE.Raycaster();
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

    // Verifica colisão generosa com os 6 alvos próximos
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
    pistolGroup.lookAt(target.pos);
    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    aimDir.copy(target.pos).sub(muzzleWorld).normalize();
    state.lastShotMs = 0;
    return fireShot(muzzleWorld, aimDir);
  }

  function shootAtResetButton() {
    if (!state.grabbed) grabPistol('right');
    pistolGroup.lookAt(RESET_POS);
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
      handMarker.visible = false;
      state.lastPinch = false;
      return;
    }
    const rightH = trackedHands.find(h => h.id === 'right') || trackedHands[0];
    if (!rightH) return;

    const palm = rightH.palm || rightH.aim || [0.5, 0.5, 0];
    const depth = Math.max(0.36, Math.min(0.68, 0.50 - (Number(palm[2]) || 0) * 0.25));
    const localX = (Number(palm[0]) - 0.5) * 0.82;
    const localY = (0.5 - Number(palm[1])) * 0.62 - 0.06;
    handWorldPos.set(localX, localY, -depth).applyMatrix4(playerRig.matrixWorld);

    handMarker.position.copy(handWorldPos);
    handMarker.quaternion.copy(playerRig.quaternion);
    handMarker.visible = true;

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

    // 2. Pega a pistola flutuante quando a mão aproxima ou faz pinça perto dela
    const distToPistol = handWorldPos.distanceTo(pistolGroup.position);
    if (!state.grabbed && (distToPistol < 0.34 || rightH.pinching)) {
      grabPistol(rightH.id || 'right');
    }

    // 3. Atualiza posição e mira da pistola quando segurada pela mão
    if (state.grabbed) {
      pistolGroup.position.lerp(handWorldPos, 0.72);
      const aim = rightH.aim || palm;
      const aimX = (Number(aim[0]) - 0.5) * 1.15;
      const aimY = (0.5 - Number(aim[1])) * 0.85;
      handAimTarget.set(aimX, aimY, -0.90).applyMatrix4(playerRig.matrixWorld);

      // Assistência magnética leve para o alvo ativo mais próximo da mira
      for (const t of targets) {
        if (!t.hit && t.pos.distanceTo(handAimTarget) < 0.19) {
          handAimTarget.lerp(t.pos, 0.45);
          break;
        }
      }
      pistolGroup.lookAt(handAimTarget);

      // Dispara ao fechar a pinça (gatilho com Hand Tracking)
      const isPinching = Boolean(rightH.pinching);
      if (isPinching && !state.lastPinch) {
        fireShot();
      }
      state.lastPinch = isPinching;
    }
  };

  window.__gorillaOnHands = processHandTracking;

  // Clique/toque direto na tela também permite mirar e atirar (ótimo para teste rápido)
  const onCanvasPointerDown = (e) => {
    if (e.target.closest('button')) return;
    const rect = canvas.getBoundingClientRect();
    const nx = (((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1) * 0.55;
    const ny = (0.5 - (e.clientY - rect.top) / Math.max(1, rect.height)) * 0.55;
    if (!state.grabbed) grabPistol('touch');
    const tgt = new THREE.Vector3(nx, 1.48 + ny, -0.88);
    pistolGroup.lookAt(tgt);
    fireShot();
  };
  canvas.addEventListener('pointerdown', onCanvasPointerDown);

  if (resetBtnEl) resetBtnEl.onclick = (e) => { e.stopPropagation(); resetTargets(); };
  if (dropBtnEl) dropBtnEl.onclick = (e) => { e.stopPropagation(); releasePistol(); };
  if (exitBtnEl) exitBtnEl.onclick = (e) => { e.stopPropagation(); closeMrPistolGame(); };

  let lastTs = performance.now();
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

    // Se a pistola não estiver segurada, flutua suavemente perto do jogador
    if (!state.grabbed) {
      pistolGroup.position.set(
        PISTOL_HOME.x,
        PISTOL_HOME.y + Math.sin(now * 0.0032) * 0.018,
        PISTOL_HOME.z
      );
      pistolGroup.rotation.set(0, Math.sin(now * 0.0016) * 0.25, 0);
    }

    // Recuo do ferrolho e flash do disparo
    if (state.recoil > 0.001) {
      state.recoil = Math.max(0, state.recoil - dt * 9.5);
      slideMesh.position.z = -0.02 + state.recoil * 0.026;
      pistolGroup.rotation.x += state.recoil * 0.14;
    } else {
      slideMesh.position.z = -0.02;
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

    // Atualiza ponto final da mira laser nos alvos próximos
    pistolGroup.updateMatrixWorld(true);
    muzzleFlash.getWorldPosition(muzzleWorld);
    aimDir.set(0, 0, -1).applyQuaternion(pistolGroup.quaternion).normalize();
    laserDot.position.copy(muzzleWorld).addScaledVector(aimDir, 0.42);

    // Anima queda dos alvos atingidos
    for (const t of targets) {
      const targetAngle = t.hit ? -Math.PI * 0.48 : 0;
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
}
