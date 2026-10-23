import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { camera as coreCamera, css3d, native, scene as coreScene, settings, toast, SixDof } from './core.js';
import { hands as trackedHands, startHands } from './hands.js';
import { setDockHidden, setDockVisible, setKeyboardHidden, wins } from './windows.js';
import { CARDBOARD_2015_LENS } from './gorilla-tag.js';

const R_BALL = 0.21;
const GROUND = 0;
const SPAWN = new THREE.Vector3(0, 1.36, 0.35);

let active = false;
let entering = false;
let overlayEl = null;
let splashEl = null;
let glCanvas = null;
let glRenderer = null;
let scene = null;
let camera = null;
let camL = null;
let camR = null;
let useVR = true;

let ball = null;
let ballShadow = null;
const ballV = new THREE.Vector3();
let stadium = null;
const boots = [];
let worldLoaded = false;
let worldLoadingPromise = null;
let rafId = 0;
let lastT = 0;
let yawOff = 0;
let pitchBias = -0.18;
let scoreGoals = 0;
let goalCooldown = 0;
let hiddenWinSnapshot = [];

const vrfsJoycon = {
  active: false,
  lx: 0,
  ly: 0,
  rx: 0,
  ry: 0,
  kickL: false,
  kickR: false,
  plusWasPressed: false,
};

function handleVrfsJoyconKey(action, down) {
  vrfsJoycon.active = true;
  if (action === 'plus' && down && active) {
    exitVrfsGame();
    return true;
  }
  if (action === 'reset' && down) {
    resetBall();
    return true;
  }
  if (action === 'recenter' && down) {
    recenterVrfs();
    return true;
  }
  if ((action === 'l1' || action === 'l2' || action === 'back') && down) {
    vrfsJoycon.kickL = true;
  }
  if ((action === 'r1' || action === 'r2' || action === 'accept') && down) {
    vrfsJoycon.kickR = true;
    kickBallForward(11.5);
  }
  const dpadX = (action === 'right' && down ? 1 : 0) - (action === 'left' && down ? 1 : 0);
  const dpadY = (action === 'down' && down ? 1 : 0) - (action === 'up' && down ? 1 : 0);
  if (dpadX !== 0 || dpadY !== 0) {
    vrfsJoycon.lx = dpadX;
    vrfsJoycon.ly = dpadY;
  } else if (!down && (action === 'left' || action === 'right' || action === 'up' || action === 'down')) {
    vrfsJoycon.lx = 0;
    vrfsJoycon.ly = 0;
  }
  return true;
}

function handleVrfsJoyconAxes(x, y, rx = 0, ry = 0, lt = 0, rt = 0) {
  vrfsJoycon.active = true;
  vrfsJoycon.lx = Math.max(-1, Math.min(1, Number(x) || 0));
  vrfsJoycon.ly = Math.max(-1, Math.min(1, Number(y) || 0));
  vrfsJoycon.rx = Math.max(-1, Math.min(1, Number(rx) || 0));
  vrfsJoycon.ry = Math.max(-1, Math.min(1, Number(ry) || 0));
  if (lt > 0.45) vrfsJoycon.kickL = true;
  if (rt > 0.45) vrfsJoycon.kickR = true;
}

if (typeof window !== 'undefined') {
  window.__vrfsJoyconKey = handleVrfsJoyconKey;
  window.__vrfsJoyconAxes = handleVrfsJoyconAxes;
}

async function decompressGzip(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} ao carregar ${url}`);
  if (typeof DecompressionStream === 'function' && res.body) {
    const ds = new DecompressionStream('gzip');
    return await new Response(res.body.pipeThrough(ds)).arrayBuffer();
  }
  return await res.arrayBuffer();
}

function createVrfsSoccerBallTexture() {
  if (typeof document === 'undefined') return null;
  const cv = document.createElement('canvas');
  cv.width = 1024;
  cv.height = 512;
  const ctx = cv.getContext('2d');
  if (!ctx) return null;

  // Base branca brilhante com costuras de gomos clássicos de bola de futebol
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, cv.width, cv.height);

  // Sombreamento sutil esférico para destacar volume 3D
  const grad = ctx.createLinearGradient(0, 0, 0, cv.height);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.5, '#f1f5f9');
  grad.addColorStop(1, '#cbd5e1');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, cv.width, cv.height);

  // Pentágonos pretos clássicos da bola e costuras hexagonais
  const pentagons = [
    [128, 110, 56], [384, 110, 56], [640, 110, 56], [896, 110, 56],
    [256, 256, 62], [512, 256, 62], [768, 256, 62], [0, 256, 62], [1024, 256, 62],
    [128, 402, 56], [384, 402, 56], [640, 402, 56], [896, 402, 56],
  ];

  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 5;
  for (let i = 0; i < pentagons.length; i++) {
    for (let j = i + 1; j < pentagons.length; j++) {
      const dx = pentagons[i][0] - pentagons[j][0];
      const dy = pentagons[i][1] - pentagons[j][1];
      const dist = Math.hypot(dx, dy);
      if (dist < 290) {
        ctx.beginPath();
        ctx.moveTo(pentagons[i][0], pentagons[i][1]);
        ctx.lineTo(pentagons[j][0], pentagons[j][1]);
        ctx.stroke();
      }
    }
  }

  for (const [cx, cy, r] of pentagons) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    for (let k = 0; k < 5; k++) {
      const a = -Math.PI / 2 + (k * 2 * Math.PI) / 5;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      if (k === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = '#111827';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#0f172a';
    ctx.stroke();
    ctx.restore();
  }

  // Faixa vermelha oficial VRFS no equador da bola (igual à logo enviada)
  const bandY = 206;
  const bandH = 100;
  const redGrad = ctx.createLinearGradient(0, bandY, 0, bandY + bandH);
  redGrad.addColorStop(0, '#ef2310');
  redGrad.addColorStop(0.5, '#dc1e0b');
  redGrad.addColorStop(1, '#b91506');
  ctx.fillStyle = redGrad;
  ctx.fillRect(0, bandY, cv.width, bandH);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'italic 900 72px Inter, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('VRFS', 256, bandY + bandH / 2 + 3);
  ctx.fillText('VRFS', 768, bandY + bandH / 2 + 3);

  const tex = new THREE.CanvasTexture(cv);
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = 4;
  if ('colorSpace' in tex && THREE.SRGBColorSpace) {
    tex.colorSpace = THREE.SRGBColorSpace;
  }
  tex.needsUpdate = true;
  return tex;
}

function createProceduralSoccerBallGroup(diffuseTex = null, normalTex = null) {
  const grp = new THREE.Group();
  grp.name = 'vrfs-soccer-ball';

  const vrfsTex = createVrfsSoccerBallTexture();
  const sphereGeo = new THREE.SphereGeometry(R_BALL, 36, 28);
  const sphereMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: vrfsTex || diffuseTex || null,
    normalMap: normalTex || null,
    roughness: 0.32,
    metalness: 0.06,
  });
  const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
  sphereMesh.name = 'vrfs-ball-sphere';
  grp.add(sphereMesh);

  // Gaiola icosaédrica sutil de costuras para garantir leitura 3D da rotação da bola a qualquer distância
  const seamGeo = new THREE.IcosahedronGeometry(R_BALL * 1.003, 1);
  const seamMat = new THREE.MeshBasicMaterial({
    color: 0x0f172a,
    wireframe: true,
    transparent: true,
    opacity: 0.28,
  });
  const seamMesh = new THREE.Mesh(seamGeo, seamMat);
  grp.add(seamMesh);

  return grp;
}

function createFallbackBootMesh(isRight) {
  const g = new THREE.Group();
  const soleGeo = new THREE.BoxGeometry(0.12, 0.05, 0.32);
  const upperGeo = new THREE.BoxGeometry(0.11, 0.09, 0.22);
  const collarGeo = new THREE.CylinderGeometry(0.052, 0.056, 0.11, 14);
  const matPrimary = new THREE.MeshStandardMaterial({
    color: isRight ? 0xef4444 : 0x22c55e,
    roughness: 0.35,
    metalness: 0.15,
  });
  const matSole = new THREE.MeshStandardMaterial({
    color: 0x111827,
    roughness: 0.6,
  });
  const sole = new THREE.Mesh(soleGeo, matSole);
  sole.position.set(0, 0.025, 0);
  const upper = new THREE.Mesh(upperGeo, matPrimary);
  upper.position.set(0, 0.075, -0.02);
  const collar = new THREE.Mesh(collarGeo, matPrimary);
  collar.position.set(0, 0.13, 0.07);
  g.add(sole, upper, collar);
  return g;
}

function createFallbackPitchGroup() {
  const grp = new THREE.Group();
  const grassGeo = new THREE.PlaneGeometry(72, 108);
  grassGeo.rotateX(-Math.PI / 2);
  const grassMat = new THREE.MeshLambertMaterial({ color: 0x1e6b34 });
  const grass = new THREE.Mesh(grassGeo, grassMat);
  grp.add(grass);

  // Linhas brancas do gramado e traves
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const midLine = new THREE.Mesh(new THREE.PlaneGeometry(68, 0.18).rotateX(-Math.PI / 2), lineMat);
  midLine.position.y = 0.01;
  grp.add(midLine);

  const circleGeo = new THREE.RingGeometry(8.9, 9.15, 48);
  circleGeo.rotateX(-Math.PI / 2);
  const centerCircle = new THREE.Mesh(circleGeo, lineMat);
  centerCircle.position.y = 0.012;
  grp.add(centerCircle);

  // Trave frontal perto para chutar ao gol
  const postMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 });
  const makeGoal = zPos => {
    const goal = new THREE.Group();
    const postL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.44, 12), postMat);
    postL.position.set(-3.66, 1.22, zPos);
    const postR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.44, 12), postMat);
    postR.position.set(3.66, 1.22, zPos);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 7.32, 12), postMat);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(0, 2.44, zPos);
    goal.add(postL, postR, bar);
    return goal;
  };
  grp.add(makeGoal(-14), makeGoal(14));
  return grp;
}

function pitchBox(root, sahaBlobUrl) {
  const box = new THREE.Box3();
  const p = new THREE.Vector3();
  let found = false;
  root.updateMatrixWorld(true);
  root.traverse(o => {
    if (!o.isMesh) return;
    const ms = [].concat(o.material);
    const g = o.geometry;
    const pos = g?.attributes?.position;
    if (!pos) return;
    const idx = g.index;
    const add = (a, b) => {
      for (let i = a; i < b; i++) {
        const v = idx ? idx.getX(i) : i;
        p.fromBufferAttribute(pos, v).applyMatrix4(o.matrixWorld);
        box.expandByPoint(p);
      }
    };
    const isPitchMesh = o.name === 'Küp010' || ms.some(m => m?.name === 'Malzeme.007');
    if (isPitchMesh) {
      found = true;
      add(0, idx ? idx.count : pos.count);
      return;
    }
    ms.forEach((m, mi) => {
      if (m && m.map && m.map.image && sahaBlobUrl && m.map.image.src === sahaBlobUrl) {
        found = true;
        if (Array.isArray(o.material) && g.groups?.length) {
          g.groups.forEach(gr => {
            if (gr.materialIndex === mi) add(gr.start, gr.start + gr.count);
          });
        } else {
          add(0, idx ? idx.count : pos.count);
        }
      }
    });
  });
  return found ? box : new THREE.Box3().setFromObject(root);
}

function setSplashProgress(pct, text) {
  if (!splashEl) return;
  splashEl.querySelectorAll('[data-vrfs-splash-fill]').forEach(el => { el.style.width = `${pct}%`; });
  if (text) splashEl.querySelectorAll('[data-vrfs-splash-step]').forEach(el => { el.textContent = text; });
}

const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

function ensureScene() {
  if (scene) return;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x68a6e2);
  scene.fog = new THREE.FogExp2(0x74b2eb, 0.0020);

  camera = new THREE.PerspectiveCamera(74, (1200 / 2) / 800, 0.05, 420);
  camera.position.copy(SPAWN);
  scene.add(camera);

  camL = new THREE.PerspectiveCamera(74, (1200 / 2) / 800, 0.05, 420);
  camR = new THREE.PerspectiveCamera(74, (1200 / 2) / 800, 0.05, 420);

  scene.add(new THREE.AmbientLight(0xffffff, 0.65));
  scene.add(new THREE.HemisphereLight(0xffffff, 0x3b6e38, 1.15));
  const sun = new THREE.DirectionalLight(0xffffff, 1.05);
  sun.position.set(30, 60, 20);
  scene.add(sun);

  // Sombra / anel indicador no gramado debaixo da bola
  const shadowGeo = new THREE.RingGeometry(0.05, R_BALL * 1.15, 32);
  shadowGeo.rotateX(-Math.PI / 2);
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x052e16,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
  });
  ballShadow = new THREE.Mesh(shadowGeo, shadowMat);
  ballShadow.position.set(0, GROUND + 0.012, -1.45);
  scene.add(ballShadow);

  // Garante que a bola exista imediatamente mesmo antes do pacote binário terminar
  ball = createProceduralSoccerBallGroup();
  scene.add(ball);
  resetBall();

  // Garante 2 chuteiras iniciais imediatamente
  if (boots.length === 0) {
    for (let i = 0; i < 2; i++) {
      const w = new THREE.Group();
      w.add(createFallbackBootMesh(i === 1));
      scene.add(w);
      boots.push({
        obj: w,
        loc: new THREE.Vector3(i ? 0.24 : -0.24, -0.78, -0.82),
        tgt: new THREE.Vector3(i ? 0.24 : -0.24, -0.78, -0.82),
        pitch: 0,
        vel: new THREE.Vector3(),
        seen: 0,
        last: null,
      });
    }
  }
}

export function resetBall() {
  if (!ball) return;
  // Posiciona a bola bem à frente do jogador e deixa ela quicar suavemente na grama
  const forward = new THREE.Vector3(0, 0, -1.48);
  if (camera) {
    const eu = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
    forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), eu.y);
    ball.position.set(
      camera.position.x + forward.x,
      GROUND + R_BALL + 0.65,
      camera.position.z + forward.z
    );
  } else {
    ball.position.set(0, GROUND + R_BALL + 0.65, -1.45);
  }
  ballV.set(0, -0.8, 0);
  if (ballShadow) {
    ballShadow.position.set(ball.position.x, GROUND + 0.012, ball.position.z);
  }
}

export function kickBallForward(power = 11.5) {
  if (!ball || !camera) return;
  const eu = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
  const dir = new THREE.Vector3(-Math.sin(eu.y), 0.34, -Math.cos(eu.y)).normalize();
  ballV.copy(dir).multiplyScalar(power);
}

async function loadVrfsWorld() {
  if (worldLoaded) return;
  if (worldLoadingPromise) return worldLoadingPromise;
  ensureScene();
  if (typeof window !== 'undefined' && window.__gorillaFastTest) {
    stadium = createFallbackPitchGroup();
    scene.add(stadium);
    worldLoaded = true;
    return;
  }
  worldLoadingPromise = (async () => {
    try {
      setSplashProgress(20, 'Descompactando estádio e chuteiras VRFS...');
      await nextFrame();
      const rawBuf = await decompressGzip('./vrfs-assets.task');
      const dv = new DataView(rawBuf);
      const hdrLen = dv.getUint32(0, true);
      const hdrJson = new TextDecoder().decode(new Uint8Array(rawBuf, 4, hdrLen));
      const chunks = JSON.parse(hdrJson);
      const bodyOffset = 4 + hdrLen;
      const sliceChunk = ([off, len]) => rawBuf.slice(bodyOffset + off, bodyOffset + off + len);

      const blobs = {};
      if (chunks.tex) {
        for (const [k, range] of Object.entries(chunks.tex)) {
          blobs[k.toLowerCase()] = URL.createObjectURL(new Blob([sliceChunk(range)], { type: 'image/jpeg' }));
        }
      }

      const mgr = new THREE.LoadingManager();
      mgr.setURLModifier(u => {
        const key = decodeURIComponent(u).split(/[\\/]/).pop().toLowerCase();
        return blobs[key] || u;
      });

      setSplashProgress(50, 'Montando estádio VRFS e gramado...');
      await nextFrame();
      const stadRoot = new FBXLoader(mgr).parse(sliceChunk(chunks.stadium), '');
      const grp = new THREE.Group();
      grp.add(stadRoot);
      stadRoot.traverse(o => {
        if (!o.isMesh) return;
        [].concat(o.material).forEach(m => {
          if (!m) return;
          m.side = THREE.DoubleSide;
          // Corrige DiffuseColor (0,0,0) exportado pelo Blender no FBX para mostrar a textura da grama e telão
          if (m.map || m.name === 'Malzeme.007' || m.name === 'Malzeme.005' || m.name === 'Malzeme.278') {
            m.color?.setHex?.(0xffffff);
            if (m.map) {
              m.map.generateMipmaps = true;
              m.map.minFilter = THREE.LinearMipmapLinearFilter;
              m.map.magFilter = THREE.LinearFilter;
              m.map.anisotropy = 4;
              if ('colorSpace' in m.map && THREE.SRGBColorSpace) {
                m.map.colorSpace = THREE.SRGBColorSpace;
              }
            }
          }
        });
      });
      let b = pitchBox(grp, blobs['saha.jpg']);
      let s = b.getSize(new THREE.Vector3());
      if (s.x > s.z) {
        grp.rotation.y = Math.PI / 2;
        b = pitchBox(grp, blobs['saha.jpg']);
        s = b.getSize(new THREE.Vector3());
      }
      const k = 105 / Math.max(s.x, s.z, 1);
      grp.scale.setScalar(k);
      b = pitchBox(grp, blobs['saha.jpg']);
      const c = b.getCenter(new THREE.Vector3());
      grp.position.set(-c.x, -b.max.y, -c.z);
      if (stadium) scene.remove(stadium);
      stadium = grp;
      scene.add(stadium);

      setSplashProgress(76, 'Criando bola oficial VRFS...');
      await nextFrame();
      try {
        const fbxBall = new FBXLoader(mgr).parse(sliceChunk(chunks.ball), '');
        fbxBall.traverse(m => {
          if (m.isMesh) {
            [].concat(m.material).forEach(x => {
              if (!x) return;
              // Corrige DiffuseColor preto (0,0,0) do FBX da bola para deixá-la 100% visível
              x.color?.setHex?.(0xffffff);
              if (x.map && 'colorSpace' in x.map && THREE.SRGBColorSpace) {
                x.map.colorSpace = THREE.SRGBColorSpace;
              }
            });
          }
        });
        const bb = new THREE.Box3().setFromObject(fbxBall);
        const bc = bb.getCenter(new THREE.Vector3());
        const bs = bb.getSize(new THREE.Vector3());
        const bk = (R_BALL * 1.98) / Math.max(bs.x, bs.y, bs.z, 1e-3);
        fbxBall.scale.setScalar(bk);
        fbxBall.position.copy(bc).multiplyScalar(-bk);
        ball.add(fbxBall);
      } catch (ballErr) {
        console.warn('VRFS FBX ball fallback:', ballErr);
      }
      resetBall();

      setSplashProgress(90, 'Calçando chuteiras 3D...');
      await nextFrame();
      await new Promise(resolve => {
        new GLTFLoader().parse(sliceChunk(chunks.boots), '', g => {
          try {
            g.scene.updateMatrixWorld(true);
            const meshes = [];
            g.scene.traverse(o => { if (o.isMesh) meshes.push(o); });
            meshes.slice(0, 2).forEach((m, idx) => {
              const geo = m.geometry.clone().applyMatrix4(m.matrixWorld);
              const pos = geo.attributes.position;
              const n = pos.count;
              let cx = 0, cz = 0;
              for (let i = 0; i < n; i++) { cx += pos.getX(i); cz += pos.getZ(i); }
              cx /= n; cz /= n;
              let sxx = 0, szz = 0, sxz = 0;
              for (let i = 0; i < n; i++) {
                const x = pos.getX(i) - cx, z = pos.getZ(i) - cz;
                sxx += x * x; szz += z * z; sxz += x * z;
              }
              const th = 0.5 * Math.atan2(2 * sxz, sxx - szz);
              const ax = Math.cos(th), az = Math.sin(th);
              let hp = -1e9, hn = -1e9;
              for (let i = 0; i < n; i++) {
                const t = (pos.getX(i) - cx) * ax + (pos.getZ(i) - cz) * az;
                const y = pos.getY(i);
                if (t > 0) hp = Math.max(hp, y); else hn = Math.max(hn, y);
              }
              const sg = hp < hn ? 1 : -1;
              const tx = ax * sg, tz = az * sg;
              geo.translate(-cx, 0, -cz);
              geo.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI - Math.atan2(tx, tz)));
              geo.computeBoundingBox();
              const bb = geo.boundingBox;
              const len = bb.max.z - bb.min.z;
              const scaleK = 0.36 / Math.max(len, 1e-3);
              geo.translate(0, -bb.min.y, -(bb.max.z + bb.min.z) / 2);
              geo.scale(scaleK, scaleK, scaleK);
              const mesh = new THREE.Mesh(geo, m.material);
              mesh.material.side = THREE.DoubleSide;
              if (boots[idx]?.obj) {
                boots[idx].obj.clear();
                boots[idx].obj.add(mesh);
              }
            });
          } catch (e) {
            console.warn('Boots parse warn:', e);
          }
          resolve();
        }, () => resolve());
      });

      worldLoaded = true;
      setSplashProgress(100, 'Pronto! Entrando no campo VRFS...');
    } catch (err) {
      console.warn('VRFS fallback pitch:', err);
      if (!stadium) {
        stadium = createFallbackPitchGroup();
        scene.add(stadium);
      }
      worldLoaded = true;
    } finally {
      worldLoadingPromise = null;
    }
  })();
  return worldLoadingPromise;
}

const TAN = Math.tan(33 * Math.PI / 180);

let ballSummonFrames = 0;
let lastBallSummonAt = 0;
function isBallSummonGesture(h) {
  if (!h) return false;
  if (h.pinching || h.fist || (Number(h.pinch) > 0 && Number(h.pinch) < 0.042)) return true;
  const p = h.points;
  if (p && p.length >= 63) {
    const wristY = p[1];
    const idxUp = p[25] < p[19] - 0.02 && p[25] < wristY - 0.05;
    const midUp = p[37] < p[31] - 0.02 && p[37] < wristY - 0.05;
    const ringCurled = p[49] > p[43] - 0.01;
    const pinkyCurled = p[61] > p[55] - 0.01;
    if (idxUp && midUp && ringCurled && pinkyCurled) return true;
  }
  return false;
}

function updateHandsToBoots(now) {
  const list = Array.isArray(trackedHands) ? trackedHands : [];
  if (list.some(isBallSummonGesture)) {
    ballSummonFrames++;
    if (ballSummonFrames === 2 && now - lastBallSummonAt > 750) {
      lastBallSummonAt = now;
      resetBall();
      toast('⚽ Bola na frente!');
    }
  } else {
    ballSummonFrames = 0;
  }
  const asp = 1.33;
  const hs = list.map(h => {
    const p = h?.points;
    let x = h?.palm?.[0] ?? 0.5;
    let y = h?.palm?.[1] ?? 0.5;
    let sz = Number(h?.palmWidth) || 0.12;
    let pitch = 0;
    if (p && p.length >= 30) {
      x = (p[0] + p[15] + p[27] + p[39] + p[51]) / 5;
      y = (p[1] + p[16] + p[28] + p[40] + p[52]) / 5;
      sz = Math.hypot((p[27] - p[0]) * asp, p[28] - p[1]) || 0.08;
      pitch = Math.max(-0.9, Math.min(0.9, (p[1] - p[28]) * 3));
    }
    const d = Math.min(0.95, Math.max(0.22, 0.11 / (sz * 2 * TAN)));
    return { x, y, d, pitch };
  }).sort((a, b) => a.x - b.x);

  let asg = [];
  if (hs.length >= 2) {
    asg = [[0, hs[0]], [1, hs[hs.length - 1]]];
  } else if (hs.length === 1) {
    const h = hs[0];
    let i = 0;
    if (boots[0]?.last != null && boots[1]?.last != null) {
      i = Math.abs(h.x - boots[0].last) <= Math.abs(h.x - boots[1].last) ? 0 : 1;
    } else {
      i = h.x < 0.5 ? 0 : 1;
    }
    asg = [[i, h]];
  }

  asg.forEach(([i, h]) => {
    const b = boots[i];
    if (!b) return;
    b.last = h.x;
    b.seen = now;
    b.pitch = h.pitch;
    const px = (h.x - 0.5) * 2 * TAN * asp * h.d;
    const py = -(h.y - 0.5) * 2 * TAN * h.d;
    b.tgt.set(px * 2.1, py * 2.0 - 0.68, -h.d * 2.1 - 0.15);
  });

  if (vrfsJoycon.active && hs.length === 0) {
    const bL = boots[0];
    const bR = boots[1];
    if (bL) {
      bL.seen = now;
      bL.pitch = vrfsJoycon.kickL ? 0.55 : 0;
      bL.tgt.set(-0.24 + vrfsJoycon.lx * 0.55, -0.78 - vrfsJoycon.ly * 0.25, -0.85 + vrfsJoycon.ly * 0.55 - (vrfsJoycon.kickL ? 0.45 : 0));
      vrfsJoycon.kickL = false;
    }
    if (bR) {
      bR.seen = now;
      bR.pitch = vrfsJoycon.kickR ? 0.55 : 0;
      const rx = Math.abs(vrfsJoycon.rx) > 0.05 ? vrfsJoycon.rx : vrfsJoycon.lx;
      const ry = Math.abs(vrfsJoycon.ry) > 0.05 ? vrfsJoycon.ry : vrfsJoycon.ly;
      bR.tgt.set(0.24 + rx * 0.55, -0.78 - ry * 0.25, -0.85 + ry * 0.55 - (vrfsJoycon.kickR ? 0.45 : 0));
      vrfsJoycon.kickR = false;
    }
  }
}

const tmpV = new THREE.Vector3();
const _prevBootW = new THREE.Vector3();
const _currBootW = new THREE.Vector3();
const _diffV = new THREE.Vector3();
const _relVelV = new THREE.Vector3();
const _rollAxis = new THREE.Vector3();
const _rightVec = new THREE.Vector3();
const _axisY = new THREE.Vector3(0, 1, 0);
const _axisX = new THREE.Vector3(1, 0, 0);
const yQuat = new THREE.Quaternion();
const pQuat = new THREE.Quaternion();
const bootEuler = new THREE.Euler();
const _camEuler = new THREE.Euler();
const _adjEuler = new THREE.Euler();
const PTS = [-0.15, 0, 0.14];

function worldOfBoot(loc, out = new THREE.Vector3()) {
  out.copy(loc);
  camera.localToWorld(out);
  if (out.y < 0.06) out.y = 0.06;
  return out;
}

function updateBootsAndPhysics(dt, now) {
  bootEuler.setFromQuaternion(camera.quaternion, 'YXZ');
  yQuat.setFromAxisAngle(_axisY, bootEuler.y);
  for (let i = 0; i < boots.length; i++) {
    const b = boots[i];
    const lost = now - b.seen > 450;
    if (lost) b.tgt.set(i ? 0.24 : -0.24, -0.78, -0.82);
    worldOfBoot(b.loc, _prevBootW);
    b.loc.lerp(b.tgt, lost ? 0.16 : 0.78);
    worldOfBoot(b.loc, _currBootW);
    b.vel.copy(_currBootW).sub(_prevBootW).divideScalar(Math.max(dt, 0.004));
    if (b.vel.length() > 24) b.vel.setLength(24);
    b.obj.visible = true;
    b.obj.position.copy(_currBootW);
    pQuat.setFromAxisAngle(_axisX, lost ? 0 : b.pitch);
    b.obj.quaternion.copy(yQuat).multiply(pQuat);
  }

  if (!ball) return;
  const substeps = 4;
  const subDt = dt / substeps;
  for (let s = 0; s < substeps; s++) {
    ballV.y -= 9.8 * subDt;
    ballV.multiplyScalar(1 - 0.04 * subDt);
    ball.position.addScaledVector(ballV, subDt);
    if (ball.position.y < GROUND + R_BALL) {
      ball.position.y = GROUND + R_BALL;
      if (ballV.y < -0.55) ballV.y *= -0.64;
      else ballV.y = 0;
      const f = Math.exp(-0.68 * subDt);
      ballV.x *= f;
      ballV.z *= f;
    }
    for (let bi = 0; bi < boots.length; bi++) {
      const b = boots[bi];
      b.obj.updateMatrixWorld(true);
      for (let pi = 0; pi < PTS.length; pi++) {
        const c = b.obj.localToWorld(tmpV.set(0, 0.08, PTS[pi]));
        _diffV.copy(ball.position).sub(c);
        const dist = _diffV.length();
        const rr = R_BALL + 0.11;
        if (dist < rr && dist > 1e-4) {
          const n = _diffV.divideScalar(dist);
          ball.position.addScaledVector(n, rr - dist);
          const vr = _relVelV.copy(ballV).sub(b.vel).dot(n);
          if (vr < 0) {
            ballV.addScaledVector(n, -(1 + 0.82) * vr);
            if (ballV.y < 1.2) ballV.y += 1.4;
          }
          if (ballV.length() > 30) ballV.setLength(30);
        }
      }
    }
    const sp = Math.hypot(ballV.x, ballV.z);
    if (sp > 0.01) {
      _rollAxis.set(ballV.z, 0, -ballV.x).normalize();
      ball.rotateOnWorldAxis(_rollAxis, (sp * subDt) / R_BALL);
    }
  }

  if (ballShadow) {
    ballShadow.position.set(ball.position.x, GROUND + 0.012, ball.position.z);
    const heightScale = Math.max(0.35, 1 - Math.min(0.65, (ball.position.y - R_BALL) * 0.22));
    ballShadow.scale.setScalar(heightScale);
  }

  if (goalCooldown > 0) goalCooldown = Math.max(0, goalCooldown - dt);
  if (goalCooldown <= 0 && Math.abs(ball.position.z) > 13.5 && Math.abs(ball.position.x) < 4.2 && ball.position.y < 2.8) {
    scoreGoals += 1;
    goalCooldown = 2.2;
    if (overlayEl) {
      overlayEl.dataset.vrfsGoals = String(scoreGoals);
      overlayEl.querySelectorAll('[data-vrfs-score]').forEach(el => {
        el.textContent = `⚽ ${scoreGoals}`;
      });
    }
    toast(`⚽ GOOOL! (${scoreGoals})`);
    setTimeout(() => { if (active) resetBall(); }, 950);
  }

  if (ball.position.length() > 75) resetBall();
}

export function recenterVrfs() {
  if (!coreCamera) return;
  const eu = new THREE.Euler().setFromQuaternion(coreCamera.quaternion, 'YXZ');
  yawOff = -eu.y;
  resetBall();
}

function renderVrfsFrame(now) {
  if (!active) return;
  rafId = requestAnimationFrame(renderVrfsFrame);
  const dt = Math.min(0.036, Math.max(0.004, (now - (lastT || now)) / 1000));
  lastT = now;

  if (coreCamera && camera) {
    _camEuler.setFromQuaternion(coreCamera.quaternion, 'YXZ');
    _adjEuler.set(_camEuler.x + pitchBias, _camEuler.y + yawOff, _camEuler.z, 'YXZ');
    camera.quaternion.setFromEuler(_adjEuler);
    camera.position.set(
      SPAWN.x + (SixDof?.out?.x || 0),
      SPAWN.y + (SixDof?.out?.y || 0),
      SPAWN.z + (SixDof?.out?.z || 0)
    );
    camera.updateMatrixWorld(true);
  }

  updateHandsToBoots(now);
  updateBootsAndPhysics(dt, now);

  if (!glRenderer || !scene || !camera) return;
  const W = 1200;
  const H = 800;
  if (glCanvas.width !== W || glCanvas.height !== H) {
    glRenderer.setSize(W, H, false);
  }

  if (useVR) {
    const halfW = W >> 1;
    const aspect = halfW / H;
    const ipdHalf = (CARDBOARD_2015_LENS.ipd || 0.064) * 0.5;
    _rightVec.set(1, 0, 0).applyQuaternion(camera.quaternion);

    if (camL.aspect !== aspect) {
      camL.aspect = aspect;
      camL.updateProjectionMatrix();
    }
    camL.quaternion.copy(camera.quaternion);
    camL.position.copy(camera.position).addScaledVector(_rightVec, -ipdHalf);

    if (camR.aspect !== aspect) {
      camR.aspect = aspect;
      camR.updateProjectionMatrix();
    }
    camR.quaternion.copy(camera.quaternion);
    camR.position.copy(camera.position).addScaledVector(_rightVec, ipdHalf);

    glRenderer.setScissorTest(true);
    glRenderer.setViewport(0, 0, halfW, H);
    glRenderer.setScissor(0, 0, halfW, H);
    glRenderer.render(scene, camL);

    glRenderer.setViewport(halfW, 0, halfW, H);
    glRenderer.setScissor(halfW, 0, halfW, H);
    glRenderer.render(scene, camR);
    glRenderer.setScissorTest(false);
  } else {
    const aspect = W / H;
    if (camera.aspect !== aspect) {
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
    glRenderer.setScissorTest(false);
    glRenderer.setViewport(0, 0, W, H);
    glRenderer.render(scene, camera);
  }
}

function ensureDom() {
  if (overlayEl) return;
  const hud = document.getElementById('hud') || document.body;

  overlayEl = document.createElement('div');
  overlayEl.id = 'vrfs-overlay';
  overlayEl.dataset.testid = 'vrfs-overlay';
  overlayEl.dataset.vrfsStage = 'idle';
  overlayEl.dataset.vrfsGoals = String(scoreGoals);
  overlayEl.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    'width:1200px',
    'height:800px',
    'z-index:9997',
    'display:none',
    'background:#07140c',
    'overflow:hidden',
    'pointer-events:auto',
    'touch-action:none',
    'user-select:none',
  ].join(';');

  glCanvas = document.createElement('canvas');
  glCanvas.id = 'vrfs-canvas';
  glCanvas.width = 1200;
  glCanvas.height = 800;
  glCanvas.style.cssText = 'position:absolute;left:0;top:0;width:1200px;height:800px;display:block;pointer-events:auto';
  overlayEl.appendChild(glCanvas);

  try {
    glRenderer = new THREE.WebGLRenderer({
      canvas: glCanvas,
      antialias: true,
      alpha: false,
      stencil: false,
      depth: true,
      powerPreference: 'high-performance',
    });
    glRenderer.setPixelRatio(1);
    glRenderer.setSize(1200, 800, false);
    if ('outputColorSpace' in glRenderer && THREE.SRGBColorSpace) {
      glRenderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    if ('toneMapping' in glRenderer && THREE.ACESFilmicToneMapping) {
      glRenderer.toneMapping = THREE.ACESFilmicToneMapping;
      glRenderer.toneMappingExposure = 1.08;
    }
  } catch (e) {
    console.warn('VRFS WebGL init warn:', e);
  }

  const buildEyeHud = (eyeSide, isLeft) => {
    const leftPx = isLeft ? 0 : 600;
    const bar = document.createElement('div');
    bar.dataset.vrfsEyeHud = eyeSide;
    bar.style.cssText = `position:absolute;top:12px;left:${leftPx + 90}px;width:420px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:12;pointer-events:auto`;
    bar.innerHTML = `
      <span data-vrfs-score style="padding:4px 9px;border-radius:999px;background:rgba(22,101,52,.9);border:1px solid rgba(74,222,128,.55);color:#fff;font:800 10px Inter,sans-serif">⚽ ${scoreGoals}</span>
      <button type="button" data-vrfs-act="ball" ${isLeft ? 'data-vrfs-ball="1"' : ''} style="padding:4px 9px;border-radius:999px;border:1px solid rgba(74,222,128,.55);background:rgba(22,163,74,.88);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Bola</button>
      <button type="button" data-vrfs-act="kick" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(180,83,9,.86);color:#fef08a;font:700 10px Inter,sans-serif;cursor:pointer">Chutar</button>
      <button type="button" data-vrfs-act="vr" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(15,23,42,.78);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">VR Box</button>
      <button type="button" data-vrfs-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(15,23,42,.78);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-vrfs-act="exit" ${isLeft ? 'data-vrfs-exit="1"' : ''} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(185,28,28,.88);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `;
    return bar;
  };
  overlayEl.appendChild(buildEyeHud('left', true));
  overlayEl.appendChild(buildEyeHud('right', false));

  splashEl = document.createElement('div');
  splashEl.id = 'vrfs-splash';
  splashEl.style.cssText = 'position:absolute;left:0;top:0;width:1200px;height:800px;z-index:15;display:flex;background:radial-gradient(circle at 50% 42%,#0f2918,#050e08 76%);color:#fff;font-family:Inter,system-ui,sans-serif';
  const buildSplashHalf = isLeft => `
    <div style="width:600px;height:800px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:18px;box-sizing:border-box;text-align:center;${isLeft ? 'border-right:1px solid rgba(255,255,255,.15)' : ''}">
      <img src="./icons/vrfs-logo.jpg" alt="VRFS" style="width:92px;height:92px;border-radius:50%;object-fit:cover;box-shadow:0 12px 32px rgba(220,38,38,.45);border:2.5px solid rgba(255,255,255,.28)">
      <div ${isLeft ? 'data-vrfs-entering="1"' : ''} style="font-size:22px;font-weight:900;letter-spacing:.02em;color:#f8fafc">Futebol VR · VRFS</div>
      <div style="font-size:11.5px;font-weight:600;color:#86efac;letter-spacing:.06em;text-transform:uppercase">Você é a chuteira · Hand Tracking & 6DoF</div>
      <div data-vrfs-splash-step style="font-size:11.5px;font-weight:600;color:#cbd5e1;margin-top:2px">Preparando estádio e bola VRFS...</div>
      <div style="width:220px;height:7px;border-radius:999px;background:rgba(255,255,255,.14);overflow:hidden;margin-top:4px">
        <div data-vrfs-splash-fill style="width:20%;height:100%;border-radius:999px;background:linear-gradient(90deg,#ef4444,#22c55e);transition:width .2s ease"></div>
      </div>
    </div>
  `;
  splashEl.innerHTML = buildSplashHalf(true) + buildSplashHalf(false);
  overlayEl.appendChild(splashEl);

  overlayEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-vrfs-act]');
    if (!btn) return;
    e.stopPropagation();
    const act = btn.dataset.vrfsAct;
    if (act === 'ball') resetBall();
    else if (act === 'kick') kickBallForward(12.5);
    else if (act === 'vr') useVR = !useVR;
    else if (act === 'recenter') recenterVrfs();
    else if (act === 'exit') exitVrfsGame();
  });

  hud.appendChild(overlayEl);
}

export async function openVrfsGame() {
  ensureDom();
  ensureScene();
  if (active && !entering) {
    resetBall();
    return overlayEl;
  }
  active = true;
  entering = true;
  window.__vrfsStereoOverlay = true;
  window.__vrfsExit = exitVrfsGame;
  window.__gorillaStereoOverlay = true;
  window.__gorillaExit = exitVrfsGame;
  window.__gorillaOnHands = now => updateHandsToBoots(now);

  if (native) startHands();
  try {
    window.NativeXR?.setGameHandMode?.(true);
    window.NativeXR?.handVisuals?.(false);
  } catch {}

  hiddenWinSnapshot = wins.filter(w => !w.hidden).map(w => w.id);
  for (const w of wins) w.setHidden(true);
  setDockHidden(true);
  setDockVisible(false);
  setKeyboardHidden(true);

  overlayEl.style.display = 'block';
  overlayEl.dataset.vrfsStage = 'entering';
  if (splashEl) splashEl.style.display = 'flex';

  await loadVrfsWorld();
  const fast = typeof window !== 'undefined' && !!window.__gorillaFastTest;
  if (!fast) await new Promise(r => setTimeout(r, 320));
  if (!active) return overlayEl;

  entering = false;
  if (splashEl) splashEl.style.display = 'none';
  overlayEl.dataset.vrfsStage = 'playing';
  resetBall();
  lastT = performance.now();
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(renderVrfsFrame);
  css3d.invalidate?.();
  return overlayEl;
}

export function exitVrfsGame() {
  active = false;
  entering = false;
  window.__vrfsStereoOverlay = false;
  window.__gorillaStereoOverlay = false;
  window.__gorillaOnHands = null;
  try {
    window.NativeXR?.setGameHandMode?.(false);
    window.NativeXR?.handVisuals?.(!!settings.handDraw);
  } catch {}
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
  if (overlayEl) {
    overlayEl.style.display = 'none';
    overlayEl.dataset.vrfsStage = 'idle';
  }
  for (const id of hiddenWinSnapshot) {
    const w = wins.find(x => x.id === id);
    if (w) w.setHidden(false);
  }
  hiddenWinSnapshot = [];
  setDockHidden(false);
  setDockVisible(true);
  css3d.invalidate?.();
  css3d.render?.(coreScene, coreCamera);
}
