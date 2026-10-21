import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { camera as coreCamera, css3d, native, scene as coreScene, settings, toast, SixDof } from './core.js';
import { hands as trackedHands, startHands } from './hands.js';
import { setDockHidden, setDockVisible, setKeyboardHidden, wins } from './windows.js';

export const CARDBOARD_2015_LENS = Object.freeze({
  model: 'Google Cardboard 2015',
  k1: 0.22,
  k2: 0.24,
  ipd: 0.064,
  fov: 80,
});

const SPAWN_HINT = [0, 2, 7];
const R_HEAD = 0.55;
const R_HAND = 0.14;
const MAXV = 11.4;
const BOOST = 1.42;
const ARM_LEN = 1.04;

let active = false;
let entering = false;
let overlayEl = null;
let splashEl = null;
let glCanvas = null;

let glRenderer = null;
let S = null;
let player = null;
let C = null;
let camL = null;
let camR = null;
let rigPivot = null;
const palmSgn = 1;
let worldLoaded = false;
let worldLoadingPromise = null;
let rafId = 0;
let lastT = 0;
let yawOff = 0;
let hiddenWinSnapshot = [];
const worldCoinNodes = [];

const V = () => new THREE.Vector3();
const vel = V();
const spawn = new THREE.Vector3(SPAWN_HINT[0], 0.90, SPAWN_HINT[2]);
const arms = [];
const hands = [null, null];
const rawHands = [null, null];
const trackFrames = [0, 0];
const hW = [V(), V()];
const hl = [V(), V()];
const hlP = [null, null];
const touch = [false, false];
const anchor = [V(), V()];
let dragPointer = null;

// Estado do gesto de sair: "Arma de dedo" (polegar + indicador abertos, médio/anelar/mínimo fechados)
// seguido de fechar o dedo indicador nas duas mãos.
const gunArmedUntil = [0, 0];
let bothTriggerSince = 0;

/* === COLISÃO POR GRADE ESPACIAL CSR (original gorilla-tag-mapa-gorila-handtracking) === */
const G = { cs: 1, T: null, n: 0, mn: [0, 0, 0], d: [1, 1, 1], st: null, id: null, seen: null, stamp: 0 };
const CP = [0, 0, 0];
const Q = { x: 0, y: 0, z: 0, d: 0, nx: 0, ny: 1, nz: 0, fx: 0, fy: 1, fz: 0 };

function buildGrid(T) {
  const n = (T.length / 9) | 0;
  G.T = T;
  G.n = n;
  const mn = [1e9, 1e9, 1e9];
  const mx = [-1e9, -1e9, -1e9];
  for (let i = 0; i < T.length; i += 3) {
    for (let k = 0; k < 3; k++) {
      const v = T[i + k];
      if (v < mn[k]) mn[k] = v;
      if (v > mx[k]) mx[k] = v;
    }
  }
  G.mn = mn;
  G.d = [0, 1, 2].map(k => Math.max(1, Math.ceil((mx[k] - mn[k]) / G.cs) + 1));
  const nc = G.d[0] * G.d[1] * G.d[2];
  const cnt = new Int32Array(nc + 1);
  const cs = G.cs;
  const rng = t => {
    const a = [1e9, 1e9, 1e9, -1e9, -1e9, -1e9];
    for (let v = 0; v < 3; v++) {
      for (let k = 0; k < 3; k++) {
        const x = T[t * 9 + v * 3 + k];
        if (x < a[k]) a[k] = x;
        if (x > a[k + 3]) a[k + 3] = x;
      }
    }
    return [0, 1, 2].map(k => [Math.floor((a[k] - mn[k]) / cs), Math.floor((a[k + 3] - mn[k]) / cs)]);
  };
  let fill = null;
  for (let pass = 0; pass < 2; pass++) {
    if (pass === 1) {
      for (let i = 0; i < nc; i++) cnt[i + 1] += cnt[i];
      G.st = cnt.slice();
      G.id = new Int32Array(cnt[nc]);
      fill = cnt.slice();
    }
    for (let t = 0; t < n; t++) {
      const r = rng(t);
      for (let z = r[2][0]; z <= r[2][1]; z++) {
        for (let y = r[1][0]; y <= r[1][1]; y++) {
          for (let x = r[0][0]; x <= r[0][1]; x++) {
            const c = (z * G.d[1] + y) * G.d[0] + x;
            if (pass === 0) cnt[c + 1]++;
            else G.id[fill[c]++] = t;
          }
        }
      }
    }
  }
  G.seen = new Int32Array(n);
}

function closestPt(px, py, pz, ax, ay, az, bx, by, bz, cx, cy, cz) {
  const abx = bx - ax, aby = by - ay, abz = bz - az;
  const acx = cx - ax, acy = cy - ay, acz = cz - az;
  const apx = px - ax, apy = py - ay, apz = pz - az;
  const d1 = abx * apx + aby * apy + abz * apz;
  const d2 = acx * apx + acy * apy + acz * apz;
  if (d1 <= 0 && d2 <= 0) { CP[0] = ax; CP[1] = ay; CP[2] = az; return; }
  const bpx = px - bx, bpy = py - by, bpz = pz - bz;
  const d3 = abx * bpx + aby * bpy + abz * bpz;
  const d4 = acx * bpx + acy * bpy + acz * bpz;
  if (d3 >= 0 && d4 <= d3) { CP[0] = bx; CP[1] = by; CP[2] = bz; return; }
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) {
    const v = d1 / (d1 - d3);
    CP[0] = ax + v * abx; CP[1] = ay + v * aby; CP[2] = az + v * abz;
    return;
  }
  const cpx = px - cx, cpy = py - cy, cpz = pz - cz;
  const d5 = abx * cpx + aby * cpy + abz * cpz;
  const d6 = acx * cpx + acy * cpy + acz * cpz;
  if (d6 >= 0 && d5 <= d6) { CP[0] = cx; CP[1] = cy; CP[2] = cz; return; }
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) {
    const w = d2 / (d2 - d6);
    CP[0] = ax + w * acx; CP[1] = ay + w * acy; CP[2] = az + w * acz;
    return;
  }
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && (d4 - d3) >= 0 && (d5 - d6) >= 0) {
    const w = (d4 - d3) / ((d4 - d3) + (d5 - d6));
    CP[0] = bx + w * (cx - bx); CP[1] = by + w * (cy - by); CP[2] = bz + w * (cz - bz);
    return;
  }
  const dn = 1 / (va + vb + vc), v = vb * dn, w = vc * dn;
  CP[0] = ax + abx * v + acx * w;
  CP[1] = ay + aby * v + acy * w;
  CP[2] = az + abz * v + acz * w;
}

function sphereQ(px, py, pz, r) {
  if (!G.T) return false;
  const T = G.T, cs = G.cs, mn = G.mn, d = G.d;
  let best = r * r, found = false;
  const stamp = ++G.stamp;
  const lo = [0, 1, 2].map(k => Math.max(0, Math.floor(([px, py, pz][k] - r - mn[k]) / cs)));
  const hi = [0, 1, 2].map(k => Math.min(d[k] - 1, Math.floor(([px, py, pz][k] + r - mn[k]) / cs)));
  for (let z = lo[2]; z <= hi[2]; z++) {
    for (let y = lo[1]; y <= hi[1]; y++) {
      for (let x = lo[0]; x <= hi[0]; x++) {
        const c = (z * d[1] + y) * d[0] + x;
        for (let k = G.st[c], e = G.st[c + 1]; k < e; k++) {
          const t = G.id[k];
          if (G.seen[t] === stamp) continue;
          G.seen[t] = stamp;
          const o = t * 9;
          closestPt(px, py, pz, T[o], T[o + 1], T[o + 2], T[o + 3], T[o + 4], T[o + 5], T[o + 6], T[o + 7], T[o + 8]);
          const dx = px - CP[0], dy = py - CP[1], dz = pz - CP[2];
          const dd = dx * dx + dy * dy + dz * dz;
          if (dd < best) {
            best = dd;
            found = true;
            Q.x = CP[0]; Q.y = CP[1]; Q.z = CP[2];
            const ux = T[o + 3] - T[o], uy = T[o + 4] - T[o + 1], uz = T[o + 5] - T[o + 2];
            const vx = T[o + 6] - T[o], vy = T[o + 7] - T[o + 1], vz = T[o + 8] - T[o + 2];
            Q.fx = uy * vz - uz * vy;
            Q.fy = uz * vx - ux * vz;
            Q.fz = ux * vy - uy * vx;
            const fl = Math.hypot(Q.fx, Q.fy, Q.fz) || 1;
            Q.fx /= fl; Q.fy /= fl; Q.fz /= fl;
          }
        }
      }
    }
  }
  if (!found) return false;
  const dd = Math.sqrt(best);
  Q.d = dd;
  if (dd > 1e-5) {
    Q.nx = (px - Q.x) / dd;
    Q.ny = (py - Q.y) / dd;
    Q.nz = (pz - Q.z) / dd;
  } else {
    Q.nx = Q.fx; Q.ny = Q.fy; Q.nz = Q.fz;
  }
  return true;
}

function rayV(x, y, z, dir, maxD) {
  if (!G.T) return null;
  const T = G.T, cs = G.cs, mn = G.mn, d = G.d;
  const ix = Math.floor((x - mn[0]) / cs), iz = Math.floor((z - mn[2]) / cs);
  if (ix < 0 || iz < 0 || ix >= d[0] || iz >= d[2]) return null;
  const y0 = y, y1 = y + dir * maxD;
  let iy = Math.floor((y0 - mn[1]) / cs);
  const iyEnd = Math.floor((y1 - mn[1]) / cs);
  let best = null;
  for (; dir < 0 ? iy >= Math.max(iyEnd, 0) : iy <= Math.min(iyEnd, d[1] - 1); iy += dir) {
    if (iy < 0 || iy >= d[1]) continue;
    const c = (iz * d[1] + iy) * d[0] + ix;
    for (let k = G.st[c], e = G.st[c + 1]; k < e; k++) {
      const o = G.id[k] * 9;
      const ax = T[o] - x, az = T[o + 2] - z;
      const bx = T[o + 3] - x, bz = T[o + 5] - z;
      const cx = T[o + 6] - x, cz = T[o + 8] - z;
      const den = (bz - cz) * (ax - cx) + (cx - bx) * (az - cz);
      if (Math.abs(den) < 1e-9) continue;
      const l1 = ((bz - cz) * (0 - cx) + (cx - bx) * (0 - cz)) / den;
      const l2 = ((cz - az) * (0 - cx) + (ax - cx) * (0 - cz)) / den;
      const l3 = 1 - l1 - l2;
      if (l1 < 0 || l2 < 0 || l3 < 0) continue;
      const hy = l1 * T[o + 1] + l2 * T[o + 4] + l3 * T[o + 7];
      if ((hy - y) * dir <= 0 || Math.abs(hy - y) > maxD) continue;
      if (!best || Math.abs(hy - y) < Math.abs(best.y - y)) {
        const ux = T[o + 3] - T[o], uy = T[o + 4] - T[o + 1], uz = T[o + 5] - T[o + 2];
        const vx = T[o + 6] - T[o], vy = T[o + 7] - T[o + 1], vz = T[o + 8] - T[o + 2];
        const ny = uz * vx - ux * vz;
        const l = Math.hypot(uy * vz - uz * vy, ny, ux * vy - uy * vx) || 1;
        best = { y: hy, ny: ny / l };
      }
    }
  }
  return best;
}

function findSpawn(cx, cy, cz, R) {
  const tryP = (x, z) => {
    const h = rayV(x, cy + 1.5, z, -1, 8);
    if (!h) return null;
    const f = Math.abs(h.ny) > 0.6 ? h : null;
    if (!f) return null;
    const up = rayV(x, f.y + 0.05, z, 1, 3);
    if (up && Math.abs(up.y - f.y) < 2.2) return null;
    const yy = f.y + R + 0.05;
    if (sphereQ(x, yy, z, R - 0.02)) return null;
    return [x, yy, z];
  };
  for (let ring = 0; ring <= 8; ring++) {
    for (let a = 0; a < (ring ? 16 : 1); a++) {
      const th = (a / 16) * 6.2832;
      const x = cx + Math.cos(th) * ring * 0.5;
      const z = cz + Math.sin(th) * ring * 0.5;
      const p = tryP(x, z);
      if (p) return p;
    }
  }
  return null;
}

/* === MAPA E MERGE OTIMIZADO (original gorilla-tag-mapa-gorila-handtracking) === */
const f32 = (g, n) => {
  const a = g.attributes[n];
  if (a && (a.isInterleavedBufferAttribute || !(a.array instanceof Float32Array))) {
    const o = new Float32Array(a.count * a.itemSize);
    for (let i = 0; i < a.count; i++) {
      for (let k = 0; k < a.itemSize; k++) o[i * a.itemSize + k] = a.getComponent(i, k);
    }
    g.setAttribute(n, new THREE.BufferAttribute(o, a.itemSize));
  }
};

function mergeSimple(l) {
  let nv = 0, ni = 0;
  for (const g of l) {
    nv += g.attributes.position.count;
    ni += g.index ? g.index.count : g.attributes.position.count;
  }
  const P = new Float32Array(nv * 3);
  const N = new Float32Array(nv * 3);
  const U = new Float32Array(nv * 2);
  const I = new Uint32Array(ni);
  let vo = 0, io = 0;
  for (const g of l) {
    const c = g.attributes.position.count;
    P.set(g.attributes.position.array, vo * 3);
    N.set(g.attributes.normal.array, vo * 3);
    U.set(g.attributes.uv.array, vo * 2);
    if (g.index) {
      const a = g.index.array;
      for (let i = 0; i < a.length; i++) I[io++] = a[i] + vo;
    } else {
      for (let i = 0; i < c; i++) I[io++] = vo + i;
    }
    vo += c;
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(P, 3));
  m.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  m.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  m.setIndex(new THREE.BufferAttribute(I, 1));
  return m;
}

function optimizeTex(tex) {
  if (!tex) return null;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = 1;
  return tex;
}

function buildMap(root) {
  root.updateMatrixWorld(true);
  const ms = [];
  root.traverse(o => { if (o.isMesh && o.geometry.attributes.position) ms.push(o); });
  let nt = 0;
  ms.forEach(o => {
    const g = o.geometry;
    nt += Math.floor((g.index ? g.index.count : g.attributes.position.count) / 3);
  });
  const T = new Float32Array(nt * 9);
  let ti = 0;
  const groups = new Map(), mats = new Map();
  for (const o of ms) {
    const m = Array.isArray(o.material) ? o.material[0] : o.material;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    const p = g.attributes.position, ix = g.index;
    const cnt = Math.floor((ix ? ix.count : p.count) / 3) * 3;
    for (let i = 0; i < cnt; i++) {
      const v = ix ? ix.getX(i) : i;
      T[ti++] = p.getX(v);
      T[ti++] = p.getY(v);
      T[ti++] = p.getZ(v);
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(p.count * 2), 2));
    for (const k of Object.keys(g.attributes)) {
      if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    }
    ['position', 'normal', 'uv'].forEach(k => f32(g, k));
    const sig = `${m.map ? (m.map.source?.uuid || m.map.uuid) : 'nomap'}|${m.color ? m.color.getHexString() : 'fff'}|${m.transparent ? 1 : 0}|${m.alphaTest || 0}|${m.side || 0}`;
    let nm = mats.get(sig);
    if (!nm) {
      nm = new THREE.MeshLambertMaterial({
        map: optimizeTex(m.map),
        color: m.color ? m.color.clone() : 0xffffff,
        transparent: m.transparent,
        opacity: m.opacity,
        alphaTest: m.alphaTest,
        side: m.side,
        emissive: m.emissive ? m.emissive.clone() : 0,
        emissiveMap: optimizeTex(m.emissiveMap),
      });
      mats.set(sig, nm);
    }
    if (!groups.has(sig)) groups.set(sig, { m: nm, l: [] });
    groups.get(sig).l.push(g);
    o.geometry.dispose();
  }
  for (const gr of groups.values()) {
    const l = gr.l;
    let me = null;
    try {
      const mergedGeo = mergeSimple(l);
      mergedGeo.computeBoundingSphere();
      me = new THREE.Mesh(mergedGeo, gr.m);
    } catch (e) {}
    const parts = me ? [me] : l.map(g => new THREE.Mesh(g, gr.m));
    parts.forEach(x => {
      x.matrixAutoUpdate = false;
      x.frustumCulled = true;
      S.add(x);
    });
    if (me) l.forEach(g => g.dispose());
  }
  return T.subarray(0, ti);
}

/* === RIG GORILA 1ª PESSOA (original gorilla-tag-mapa-gorila-handtracking) === */
function setupRig(scene) {
  arms.length = 0;
  scene.updateMatrixWorld(true);
  const sks = [];
  scene.traverse(o => { if (o.isSkinnedMesh) sks.push(o); });
  if (!sks.length) return;
  const sk = sks.reduce((p, q) => q.geometry.attributes.position.count > p.geometry.attributes.position.count ? q : p);
  sks.forEach(m => { if (m !== sk) m.visible = false; });
  const bones = sk.skeleton.bones;
  const key = b => b.name.toLowerCase().replace(/[^a-z]/g, '');
  const fb = re => bones.find(b => re.test(key(b)));
  const B = {
    ur: fb(/^upperarmr$/), lr: fb(/^lowerarmr$/), hr: fb(/^wristr$/),
    ul: fb(/^upperarml$/), ll: fb(/^lowerarml$/), hl: fb(/^wristl$/),
    body: fb(/^main$/), head: fb(/^head$/),
  };
  const F = {};
  ['r', 'l'].forEach(sd => {
    F[sd] = {
      pinky: fb(new RegExp('^pinkyf?' + sd + '$')),
      index: fb(new RegExp('^pointerf?' + sd + '$')),
      thumb: fb(new RegExp('^thumb' + sd + '$')),
    };
  });
  const armB = new Set([B.ur, B.lr, B.hr, B.ul, B.ll, B.hl]);
  for (const sd in F) for (const k in F[sd]) armB.add(F[sd][k]);
  const isArmB = bones.map(b => armB.has(b));
  const g = sk.geometry, si = g.attributes.skinIndex, sw = g.attributes.skinWeight;
  const pc = g.attributes.position.count, ix = g.index;
  const isArm = new Uint8Array(pc);
  for (let v = 0; v < pc; v++) {
    let s = 0;
    for (let k = 0; k < 4; k++) {
      if (isArmB[si.getComponent(v, k)]) s += sw.getComponent(v, k);
    }
    isArm[v] = s > 0.45 ? 1 : 0;
  }
  const keep = [], nI = ix ? ix.count : pc;
  for (let i = 0; i < nI; i += 3) {
    const x = ix ? ix.getX(i) : i;
    const y = ix ? ix.getX(i + 1) : i + 1;
    const z = ix ? ix.getX(i + 2) : i + 2;
    if (isArm[x] && isArm[y] && isArm[z]) keep.push(x, y, z);
  }
  if (keep.length > 90) {
    g.clearGroups();
    g.setIndex(keep);
  }
  const om = Array.isArray(sk.material) ? sk.material[0] : sk.material;
  sk.material = new THREE.MeshLambertMaterial({
    map: optimizeTex(om.map),
    color: om.color ? om.color.clone() : 0xffffff,
    emissive: 0x222222,
  });
  sk.frustumCulled = false;

  const P = b => b.getWorldPosition(V());
  const pR = P(B.ur), pL = P(B.ul);
  const right = pR.clone().sub(pL).normalize();
  const up = P(B.head).sub(P(B.body)).normalize();
  up.addScaledVector(right, -up.dot(right)).normalize();
  const back = new THREE.Vector3().crossVectors(right, up);
  const qq = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, up, back)).invert();
  const L = pR.distanceTo(P(B.lr)) + P(B.lr).distanceTo(P(B.hr));
  const sc = ARM_LEN / L;
  const midS = pR.clone().add(pL).multiplyScalar(0.5);

  const RI = {};
  ['r', 'l'].forEach(sd => {
    const ch = {};
    for (const k in F[sd]) {
      const b = F[sd][k];
      ch[k] = b ? [{
        b,
        bind: b.quaternion.clone(),
        pos: b.getWorldPosition(V()),
        wq: b.getWorldQuaternion(new THREE.Quaternion()),
        Al: V(),
        cur: 0,
      }] : [];
    }
    const hb = sd === 'r' ? B.hr : B.hl;
    const hpos = hb.getWorldPosition(V());
    const side = hpos.clone().sub(midS).dot(right) > 0 ? 1 : -1;
    RI[sd] = {
      hb,
      hbBind: hb.quaternion.clone(),
      hpos,
      hwq: hb.getWorldQuaternion(new THREE.Quaternion()),
      ch,
      nRest: right.clone().multiplyScalar(-side),
      qs: null,
    };
  });

  function calcRest(r, sgn) {
    const nR = r.nRest.clone().multiplyScalar(sgn);
    const base = [r.ch.index[0], r.ch.pinky[0]].filter(Boolean).map(x => x.pos);
    const mid = base.length
      ? base.reduce((s, p) => s.add(p), V()).multiplyScalar(1 / base.length)
      : r.hpos.clone().addScaledVector(up, -0.1);
    const fr = mid.sub(r.hpos).normalize();
    const nr = nR.clone().addScaledVector(fr, -nR.dot(fr)).normalize();
    const wi = r.hwq.clone().invert();
    r.fl = fr.clone().applyQuaternion(wi);
    r.nl = nr.clone().applyQuaternion(wi);
    r.QlInv = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().makeBasis(r.fl, nr.clone().applyQuaternion(wi), new THREE.Vector3().crossVectors(r.fl, r.nl))
    ).invert();
    for (const k in r.ch) {
      r.ch[k].forEach(f => {
        f.Al.crossVectors(fr, nr).normalize().applyQuaternion(f.wq.clone().invert());
      });
    }
  }
  calcRest(RI.r, palmSgn);
  calcRest(RI.l, palmSgn);

  if (rigPivot && rigPivot.parent) rigPivot.parent.remove(rigPivot);
  rigPivot = new THREE.Group();
  rigPivot.quaternion.copy(qq);
  rigPivot.scale.setScalar(sc);
  rigPivot.add(scene);
  rigPivot.position.set(0, -0.32, 0.1).sub(midS.clone().applyQuaternion(qq).multiplyScalar(sc));
  C.add(rigPivot);
  C.updateMatrixWorld(true);

  [[B.ur, B.lr, B.hr, 1], [B.ul, B.ll, B.hl, -1]].forEach(([s, e, h, side]) => {
    const sp = C.worldToLocal(P(s));
    arms.push({
      s, e, h, side,
      bs: s.quaternion.clone(),
      be: e.quaternion.clone(),
      sp,
      reach: ARM_LEN * 0.97,
      axis: h.position.clone().normalize(),
      info: RI[side > 0 ? 'r' : 'l'],
    });
  });
}

function aim(b, bind, c, tW) {
  b.quaternion.copy(bind);
  b.updateWorldMatrix(true, true);
  const p = b.getWorldPosition(V());
  const d1 = c.getWorldPosition(V()).sub(p).normalize();
  const d2 = tW.clone().sub(p).normalize();
  const wq = b.getWorldQuaternion(new THREE.Quaternion());
  const dQ = new THREE.Quaternion().setFromUnitVectors(d1, d2);
  const pq = b.parent.getWorldQuaternion(new THREE.Quaternion()).invert();
  b.quaternion.copy(pq.multiply(dQ).multiply(wq));
  b.updateWorldMatrix(false, true);
}

function applyHand(info, ori) {
  if (!info || !info.hb) return;
  const hb = info.hb;
  hb.quaternion.copy(info.hbBind);
  if (ori) {
    hb.updateWorldMatrix(true, false);
    const wq = hb.getWorldQuaternion(new THREE.Quaternion());
    const wi = wq.clone().invert();
    const qC = C.getWorldQuaternion(new THREE.Quaternion());
    const fL = ori.f.clone().applyQuaternion(qC).applyQuaternion(wi).normalize();
    const nL = ori.n.clone().applyQuaternion(qC).applyQuaternion(wi);
    nL.addScaledVector(fL, -nL.dot(fL));
    if (nL.lengthSq() > 1e-4) {
      nL.normalize();
      if (info.nl && nL.dot(info.nl) < -0.15) nL.negate();
      const Qt = new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().makeBasis(fL, nL, new THREE.Vector3().crossVectors(fL, nL))
      ).multiply(info.QlInv);
      Qt.slerp(new THREE.Quaternion(), 0.35);
      if (!info.qs) info.qs = Qt.clone();
      else info.qs.slerp(Qt, 0.22);
      hb.quaternion.multiply(info.qs);
    }
    for (const k in info.ch) {
      const tgt = Math.max(0, Math.min(0.85, ori.c[k] ?? 0));
      info.ch[k].forEach(f => {
        f.cur = f.cur * 0.72 + tgt * 0.28;
        f.b.quaternion.copy(f.bind).multiply(new THREE.Quaternion().setFromAxisAngle(f.Al, f.cur * 0.95));
      });
    }
  } else {
    for (const k in info.ch) {
      info.ch[k].forEach(f => {
        f.cur *= 0.85;
        f.b.quaternion.copy(f.bind).multiply(new THREE.Quaternion().setFromAxisAngle(f.Al, f.cur * 1.15));
      });
    }
  }
  hb.updateWorldMatrix(false, true);
}

function solveArm(a, tW, ori) {
  a.s.quaternion.copy(a.bs);
  a.e.quaternion.copy(a.be);
  a.s.updateWorldMatrix(true, true);
  const sp = a.s.getWorldPosition(V());
  let ep = a.e.getWorldPosition(V()), hp = a.h.getWorldPosition(V());
  const l1 = sp.distanceTo(ep), l2 = ep.distanceTo(hp);
  const dir = tW.clone().sub(sp);
  const d = Math.min(Math.max(dir.length(), Math.abs(l1 - l2) + 0.01), (l1 + l2) * 0.995);
  dir.normalize();
  const c1 = Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d)));
  const r = C.getWorldQuaternion(new THREE.Quaternion());
  const hint = new THREE.Vector3(a.side * 0.45, -1, 0.35).normalize().applyQuaternion(r);
  const bend = hint.clone().addScaledVector(dir, -hint.dot(dir));
  if (bend.lengthSq() < 1e-4) bend.set(0, -1, 0);
  bend.normalize();
  const eT = sp.clone().addScaledVector(dir, l1 * c1).addScaledVector(bend, l1 * Math.sqrt(Math.max(0, 1 - c1 * c1)));
  aim(a.s, a.bs, a.e, eT);
  aim(a.e, a.be, a.h, tW);
  ep = a.e.getWorldPosition(V());
  hp = a.h.getWorldPosition(V());
  const err = tW.clone().sub(hp);
  if (err.lengthSq() > 1e-5) {
    const pq = a.e.parent.getWorldQuaternion(new THREE.Quaternion()).invert();
    const wq = a.e.getWorldQuaternion(new THREE.Quaternion());
    const dQ = new THREE.Quaternion().setFromUnitVectors(hp.sub(ep).normalize(), tW.clone().sub(ep).normalize());
    a.e.quaternion.copy(pq.multiply(dQ).multiply(wq));
    a.e.updateWorldMatrix(false, true);
  }
  applyHand(a.info, ori);
}

/* === ORIENTAÇÃO E CURL DOS DEDOS === */
const MP = (lm, i) => new THREE.Vector3(lm[i].x - 0.5, 0.5 - lm[i].y, -(lm[i].z || 0));
function handInfo(lm, isR) {
  const p0 = MP(lm, 0), p5 = MP(lm, 5), p9 = MP(lm, 9), p17 = MP(lm, 17);
  const f = p9.clone().sub(p0).normalize();
  const u = p5.clone().sub(p0), v = p17.clone().sub(p0);
  // Alinhado ao original gorilla-tag-mapa-gorila-handtracking: mão direita faz crossVectors(v, u)
  const n = (isR ? new THREE.Vector3().crossVectors(v, u) : new THREE.Vector3().crossVectors(u, v));
  n.addScaledVector(f, -n.dot(f)).normalize();
  const palm = p0.distanceTo(p9) || 0.1;
  const cl = (t, m) => Math.max(0, Math.min(1, 1.55 - (MP(lm, t).distanceTo(p0) / (MP(lm, m).distanceTo(p0) || palm)) * 0.72));
  const cT = Math.max(0, Math.min(1, 1.4 - (MP(lm, 4).distanceTo(p17) / (p5.distanceTo(p17) || palm)) * 0.75));
  return { f, n, c: { index: cl(8, 5), pinky: cl(20, 17), thumb: cT } };
}

/* === CONTADOR DE MOEDAS NO BRAÇO DIREITO DO GORILA === */
const COIN_STORAGE_KEY = 'nextvr.gorilla.coins';
let gorillaCoins = (() => {
  try {
    const raw = localStorage.getItem(COIN_STORAGE_KEY);
    if (raw !== null && raw !== '') {
      const saved = Number(raw);
      if (Number.isFinite(saved) && saved >= 0) return Math.floor(saved);
    }
  } catch {}
  return 100;
})();
let rightArmCoinGroup = null;
let rightArmCoinCanvas = null;
let rightArmCoinCtx = null;
let rightArmCoinTex = null;
let lastRenderedCoins = -1;
let pushCoinProgress = 0;

export function getGorillaCoins() {
  return gorillaCoins;
}

export function addGorillaCoins(delta = 1) {
  const next = Math.max(0, Math.floor(gorillaCoins + delta));
  if (next === gorillaCoins) return gorillaCoins;
  gorillaCoins = next;
  try { localStorage.setItem(COIN_STORAGE_KEY, String(gorillaCoins)); } catch {}
  drawRightArmCoinTexture();
  if (overlayEl) overlayEl.dataset.gorillaRightArmCoins = String(gorillaCoins);
  if (typeof window !== 'undefined' && window.__gorillaRightArmCoinCounter) {
    window.__gorillaRightArmCoinCounter.coins = gorillaCoins;
  }
  return gorillaCoins;
}

function drawRightArmCoinTexture() {
  if (!rightArmCoinCtx || !rightArmCoinCanvas) return;
  if (lastRenderedCoins === gorillaCoins) return;
  lastRenderedCoins = gorillaCoins;
  const ctx = rightArmCoinCtx;
  const w = rightArmCoinCanvas.width;
  const h = rightArmCoinCanvas.height;
  ctx.clearRect(0, 0, w, h);

  // Fundo escuro com borda dourada estilo mostrador de pulso no braço direito
  ctx.fillStyle = '#0b1222';
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(4, 4, w - 8, h - 8, 22) : ctx.rect(4, 4, w - 8, h - 8);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#facc15';
  ctx.stroke();

  // Moeda dourada à esquerda
  const cx = 50, cy = h / 2, r = 28;
  const grad = ctx.createRadialGradient(cx - 8, cy - 8, 4, cx, cy, r);
  grad.addColorStop(0, '#fef08a');
  grad.addColorStop(0.55, '#facc15');
  grad.addColorStop(1, '#ca8a04');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#fef9c3';
  ctx.stroke();

  ctx.fillStyle = '#713f12';
  ctx.font = '900 26px Inter, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('$', cx, cy + 1);

  // Rótulo "MOEDAS" e valor numérico
  ctx.textAlign = 'left';
  ctx.fillStyle = '#fde047';
  ctx.font = '800 16px Inter, system-ui, sans-serif';
  ctx.fillText('MOEDAS', 92, 34);

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px Inter, system-ui, sans-serif';
  ctx.fillText(String(gorillaCoins), 92, 74);

  if (rightArmCoinTex) rightArmCoinTex.needsUpdate = true;
}

function createRightArmCoinCounter() {
  if (rightArmCoinGroup) return rightArmCoinGroup;
  rightArmCoinCanvas = document.createElement('canvas');
  rightArmCoinCanvas.width = 256;
  rightArmCoinCanvas.height = 112;
  rightArmCoinCtx = rightArmCoinCanvas.getContext('2d');
  rightArmCoinTex = new THREE.CanvasTexture(rightArmCoinCanvas);
  rightArmCoinTex.minFilter = THREE.LinearFilter;
  rightArmCoinTex.magFilter = THREE.LinearFilter;
  lastRenderedCoins = -1;
  drawRightArmCoinTexture();

  rightArmCoinGroup = new THREE.Group();
  rightArmCoinGroup.name = 'gorilla-right-arm-coin-counter';

  // Pulseira escura envolta no antebraço direito
  const strapMat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
  const strapMesh = new THREE.Mesh(new THREE.BoxGeometry(0.088, 0.044, 0.072), strapMat);
  strapMesh.position.set(0, 0, -0.02);
  rightArmCoinGroup.add(strapMesh);

  // Moldura dourada do contador no braço direito
  const bezelMat = new THREE.MeshBasicMaterial({ color: 0xeab308 });
  const bezelMesh = new THREE.Mesh(new THREE.BoxGeometry(0.148, 0.068, 0.012), bezelMat);
  bezelMesh.position.set(0, 0, -0.004);
  rightArmCoinGroup.add(bezelMesh);

  // Tela do contador de moedas
  const screenMat = new THREE.MeshBasicMaterial({
    map: rightArmCoinTex,
    transparent: true,
    depthTest: true,
    side: THREE.DoubleSide,
  });
  const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.062), screenMat);
  screenMesh.position.set(0, 0, 0.004);
  rightArmCoinGroup.add(screenMesh);

  if (typeof window !== 'undefined') {
    window.__gorillaRightArmCoinCounter = {
      coins: gorillaCoins,
      attachedTo: 'right-arm',
      side: 1,
      visible: true,
    };
  }
  return rightArmCoinGroup;
}

function updateRightArmCoinCounterPose() {
  if (!rightArmCoinGroup || !C) return;
  const rightArm = arms[0]; // arms[0] é o braço direito (B.ur -> B.lr -> B.hr, side = +1)
  const camPos = headW();
  const camUp = new THREE.Vector3(0, 1, 0).applyQuaternion(C.getWorldQuaternion(new THREE.Quaternion()));
  if (rightArm && rightArm.e && rightArm.h) {
    const ep = rightArm.e.getWorldPosition(V());
    const hp = rightArm.h.getWorldPosition(V());
    // Posiciona no antebraço direito (72% entre o cotovelo direito e o pulso direito)
    const forePos = ep.clone().lerp(hp, 0.72);
    const toCam = camPos.clone().sub(forePos);
    if (toCam.lengthSq() > 1e-5) {
      toCam.normalize();
      forePos.addScaledVector(toCam, 0.065);
    }
    rightArmCoinGroup.position.copy(forePos);
    rightArmCoinGroup.up.copy(camUp);
    rightArmCoinGroup.lookAt(camPos);
  } else {
    const fallbackRightArmW = C.localToWorld(new THREE.Vector3(0.24, -0.22, -0.44));
    rightArmCoinGroup.position.copy(fallbackRightArmW);
    rightArmCoinGroup.up.copy(camUp);
    rightArmCoinGroup.lookAt(camPos);
  }
  if (typeof window !== 'undefined' && window.__gorillaRightArmCoinCounter) {
    window.__gorillaRightArmCoinCounter.coins = gorillaCoins;
    window.__gorillaRightArmCoinCounter.position = rightArmCoinGroup.position.toArray();
  }
}

/**
 * Classifica o gesto da mão (mantido por compatibilidade de API, mas desativado para sair do jogo).
 */
export function classifyFingerGunState(lm) {
  if (!lm || lm.length < 21) return 'none';
  const d2 = (a, b) => Math.hypot(lm[a].x - lm[b].x, lm[a].y - lm[b].y);
  const palm = Math.max(0.035, d2(0, 9));
  const knuckle = Math.max(0.025, d2(5, 17));
  const midClosed = d2(0, 12) < d2(0, 10) * 1.24 || d2(0, 12) < d2(0, 9) * 1.40;
  const ringClosed = d2(0, 16) < d2(0, 14) * 1.24 || d2(0, 16) < d2(0, 13) * 1.40;
  const pinkyClosed = d2(0, 20) < d2(0, 18) * 1.26 || d2(0, 20) < d2(0, 17) * 1.44;
  const lowerClosedCount = (midClosed ? 1 : 0) + (ringClosed ? 1 : 0) + (pinkyClosed ? 1 : 0);
  if (lowerClosedCount < 2) return 'none';
  const thumbExtended =
    d2(0, 4) > d2(0, 2) * 1.06 &&
    (d2(4, 17) > knuckle * 0.88 || d2(4, 10) > palm * 0.40 || d2(4, 5) > palm * 0.36);
  if (!thumbExtended) return 'none';
  const indexRatioPip = d2(0, 8) / Math.max(0.02, d2(0, 6));
  const indexRatioMcp = d2(0, 8) / Math.max(0.02, d2(0, 5));
  const indexTipToMcp = d2(8, 5) / palm;
  if (indexRatioPip >= 1.12 && indexRatioMcp >= 1.25 && indexTipToMcp >= 0.66) return 'gun';
  if (indexRatioPip < 1.14 || indexRatioMcp < 1.26 || indexTipToMcp < 0.70) return 'trigger';
  return 'none';
}

// Gesto de sair pelas mãos removido a pedido do usuário: mostrar a mão NUNCA sai do Gorilla Tag sozinho.
function checkFingerGunExitGesture() {
  return false;
}

/**
 * Identifica se uma única mão detectada pela câmera traseira em 1ª pessoa é a mão DIREITA (true) ou ESQUERDA (false).
 * Em PhoneXrHands.kt, o rótulo bruto "Right" do MediaPipe foi invertido para `left = true` (`id = "left"`).
 * Porém, na visão em 1ª pessoa com câmera traseira (olhando o dorso da própria mão), o polegar/indicador (lm[4], lm[5])
 * da mão DIREITA fica à esquerda do mindinho (lm[17]), fazendo o MediaPipe classificá-la como "Right" (id = "left" no PhoneXrHands),
 * exatamente como no original `r.multiHandedness[i].label === 'Right' ? 1 : 0`.
 */
export function detectIsRightHand(th, lm) {
  if (!lm || lm.length < 21) return true;
  if (th?.physicalSide === 'right') return true;
  if (th?.physicalSide === 'left') return false;
  // Se a mão está claramente no lado direito ou esquerdo do campo de visão, respeita o lado físico
  if (lm[9].x >= 0.54) return true;
  if (lm[9].x <= 0.46) return false;
  // Na região central, verifica anatomia em 1ª pessoa (dorso voltado para a câmera, dedos apontando para cima):
  // na mão direita, o nó do indicador (5) fica à esquerda do nó do mindinho (17)
  if (lm[9].y < lm[0].y && Math.abs(lm[5].x - lm[17].x) > 0.022) {
    return lm[5].x < lm[17].x;
  }
  // Em PhoneXrHands.kt, MediaPipe "Right" (mão direita em 1ª pessoa) foi mapeado para th.left === true / id === "left"
  const label = String(th?.id || th?.handedness || '').toLowerCase();
  if (typeof th?.left === 'boolean') return th.left === true;
  if (label.includes('left') || label === 'l') return true;
  if (label.includes('right') || label === 'r') return false;
  return lm[9].x >= 0.5;
}

function updateHandsFromNextVR(now) {
  rawHands[0] = null;
  rawHands[1] = null;
  const parsed = [];
  for (let i = 0; i < trackedHands.length; i++) {
    const th = trackedHands[i];
    if (!th || !th.points || th.points.length < 63) continue;
    const pts = th.points;
    const lm = new Array(21);
    for (let k = 0; k < 21; k++) {
      lm[k] = {
        x: pts[k * 3],
        y: pts[k * 3 + 1],
        z: pts[k * 3 + 2] || 0,
      };
    }
    parsed.push({ th, lm });
  }
  // Quando as 2 mãos estão visíveis, ordena por posição horizontal (esquerda = 0, direita = 1)
  if (parsed.length >= 2) {
    parsed.sort((a, b) => a.lm[9].x - b.lm[9].x);
    for (let idx = 0; idx < 2; idx++) {
      const { lm } = parsed[idx];
      const s = Math.hypot(lm[9].x - lm[0].x, lm[9].y - lm[0].y);
      hands[idx] = { x: lm[9].x, y: lm[9].y, s, ori: handInfo(lm, idx === 1), t: now };
      rawHands[idx] = lm;
    }
  } else if (parsed.length === 1) {
    const { th, lm } = parsed[0];
    const isRight = detectIsRightHand(th, lm);
    const idx = isRight ? 1 : 0;
    const otherIdx = 1 - idx;
    const s = Math.hypot(lm[9].x - lm[0].x, lm[9].y - lm[0].y);
    hands[idx] = { x: lm[9].x, y: lm[9].y, s, ori: handInfo(lm, idx === 1), t: now };
    rawHands[idx] = lm;
    // Limpa o outro braço imediatamente para que apenas o braço correto se mova
    hands[otherIdx] = null;
    rawHands[otherIdx] = null;
    touch[otherIdx] = false;
    hlP[otherIdx] = null;
  }

  if (dragPointer && now - dragPointer.t < 450) {
    const idx = dragPointer.idx;
    hands[idx] = {
      x: dragPointer.x,
      y: dragPointer.y,
      s: dragPointer.s,
      ori: null,
      t: now,
    };
  }
}

// Hand tracking de esqueleto invisível no Gorilla Tag (apenas os braços 3D do Gorila aparecem)
function drawHandTrackingOverlay() {}

const headW = () => C.getWorldPosition(V());
function respawn() {
  if (!player) return;
  player.position.copy(spawn);
  vel.set(0, 0, 0);
  touch[0] = false;
  touch[1] = false;
  hlP[0] = null;
  hlP[1] = null;
  trackFrames[0] = 0;
  trackFrames[1] = 0;
  player.updateMatrixWorld(true);
}

const nextFrame = () => new Promise(r => setTimeout(r, 16));

async function decompressGzip(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const raw = await res.arrayBuffer();
  const u = new Uint8Array(raw);
  if (u.length >= 4 && u[0] === 0x67 && u[1] === 0x6c && u[2] === 0x54 && u[3] === 0x46) {
    return raw;
  }
  const ds = new DecompressionStream('gzip');
  const w = ds.writable.getWriter();
  w.write(u);
  w.close();
  return await new Response(ds.readable).arrayBuffer();
}

function parseGltf(loader, ab) {
  return new Promise((ok, er) => loader.parse(ab, '', ok, er));
}

function setSplashProgress(pct, text) {
  if (!splashEl) return;
  splashEl.querySelectorAll('[data-gorilla-splash-fill]').forEach(el => { el.style.width = `${pct}%`; });
  if (text) splashEl.querySelectorAll('[data-gorilla-splash-step]').forEach(el => { el.textContent = text; });
}

function ensureScene() {
  if (S) return;
  S = new THREE.Scene();
  S.background = new THREE.Color(0x87c8ff);
  S.fog = new THREE.FogExp2(0x87c8ff, 0.0042);
  S.add(new THREE.HemisphereLight(0xdff4ff, 0x4a6b3b, 0.98));
  const sun = new THREE.DirectionalLight(0xfff2d6, 0.92);
  sun.position.set(30, 60, 20);
  S.add(sun);
  const rim = new THREE.DirectionalLight(0xa5f3fc, 0.32);
  rim.position.set(-28, 34, -22);
  S.add(rim);

  player = new THREE.Group();
  S.add(player);

  C = new THREE.PerspectiveCamera(CARDBOARD_2015_LENS.fov, (1200 / 2) / 800, 0.05, 380);
  C.position.set(0, 0, 0);
  player.add(C);

  const halfIpd = CARDBOARD_2015_LENS.ipd * 0.5;
  camL = new THREE.PerspectiveCamera(CARDBOARD_2015_LENS.fov, (1200 / 2) / 800, 0.05, 380);
  camL.position.set(-halfIpd, 0, 0);
  camR = new THREE.PerspectiveCamera(CARDBOARD_2015_LENS.fov, (1200 / 2) / 800, 0.05, 380);
  camR.position.set(halfIpd, 0, 0);
  C.add(camL, camR);

  // Contador 3D de moedas preso ao braço direito do Gorila
  const coinWatch = createRightArmCoinCounter();
  if (coinWatch && !coinWatch.parent) S.add(coinWatch);
  updateRightArmCoinCounterPose();

  // Moedas douradas 3D flutuantes pelo mapa da floresta para coletar com as mãos de Gorila
  worldCoinNodes.length = 0;
  const coinGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.055, 18);
  coinGeo.rotateX(Math.PI * 0.5);
  const coinMat = new THREE.MeshLambertMaterial({ color: 0xfbbf24, emissive: 0x92400e });
  const coinPositions = [
    [0.0, 1.35, 4.8], [-2.2, 1.45, 3.6], [2.2, 1.45, 3.6],
    [-3.8, 1.85, 0.8], [3.8, 1.85, 0.8], [0.0, 2.20, -2.5],
    [-1.8, 1.60, 8.8], [1.8, 1.60, 8.8],
  ];
  for (let i = 0; i < coinPositions.length; i++) {
    const [cx, cy, cz] = coinPositions[i];
    const m = new THREE.Mesh(coinGeo, coinMat);
    m.position.set(cx, cy, cz);
    m.userData = { baseY: cy, phase: i * 0.85, cooldownUntil: 0 };
    S.add(m);
    worldCoinNodes.push(m);
  }

  try {
    glRenderer = new THREE.WebGLRenderer({
      canvas: glCanvas,
      antialias: false,
      alpha: false,
      stencil: false,
      depth: true,
      powerPreference: 'high-performance',
    });
    glRenderer.setPixelRatio(1);
    glRenderer.setSize(896, 560, false);
    glRenderer.setScissorTest(true);
  } catch (e) {
    glRenderer = null;
  }
}

async function loadWorld() {
  if (worldLoaded) return;
  if (worldLoadingPromise) return worldLoadingPromise;
  ensureScene();
  if (typeof window !== 'undefined' && window.__gorillaFastTest) {
    worldLoaded = true;
    return;
  }
  worldLoadingPromise = (async () => {
    try {
      setSplashProgress(18, 'Descompactando mapa da floresta 3D...');
      await nextFrame();
      const loader = new GLTFLoader();
      loader.textureLoader = new THREE.TextureLoader(loader.options?.manager);

      const [mapBuf, rigBuf] = await Promise.all([
        decompressGzip('./gorilla-map.task'),
        decompressGzip('./gorilla-rig.task'),
      ]);
      setSplashProgress(45, 'Carregando texturas e geometria...');
      await nextFrame();
      const [mg, rg] = await Promise.all([
        parseGltf(loader, mapBuf),
        parseGltf(loader, rigBuf),
      ]);
      setSplashProgress(68, 'Otimizando malhas 3D (Lambert merge)...');
      await nextFrame();
      const T = buildMap(mg.scene);
      setSplashProgress(84, 'Construindo grade física de colisão...');
      await nextFrame();
      buildGrid(T);
      const sp = findSpawn(SPAWN_HINT[0], SPAWN_HINT[1], SPAWN_HINT[2], R_HEAD)
        || [SPAWN_HINT[0], 0.90, SPAWN_HINT[2]];
      spawn.set(sp[0], sp[1], sp[2]);
      setSplashProgress(94, 'Ativando braços Gorilla 3D...');
      await nextFrame();
      setupRig(rg.scene);
      respawn();
      worldLoaded = true;
      setSplashProgress(100, 'Pronto! Entrando no Gorilla Tag...');
    } catch (err) {
      console.warn('Gorilla Tag load fallback:', err);
      worldLoaded = true;
    } finally {
      worldLoadingPromise = null;
    }
  })();
  return worldLoadingPromise;
}

function ensureDom() {
  if (overlayEl) return;
  const hud = document.getElementById('hud') || document.body;

  overlayEl = document.createElement('div');
  overlayEl.id = 'gorilla-overlay';
  overlayEl.dataset.testid = 'gorilla-overlay';
  overlayEl.dataset.cardboardLenses = '2015';
  overlayEl.dataset.gorillaStage = 'idle';
  overlayEl.dataset.gorillaRightArmCoins = String(gorillaCoins);
  overlayEl.dataset.lensModel = CARDBOARD_2015_LENS.model;
  overlayEl.dataset.lensK1 = String(CARDBOARD_2015_LENS.k1);
  overlayEl.dataset.lensK2 = String(CARDBOARD_2015_LENS.k2);
  overlayEl.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    'width:1200px',
    'height:800px',
    'z-index:9997',
    'display:none',
    'background:#050811',
    'overflow:hidden',
    'touch-action:none',
  ].join(';');

  glCanvas = document.createElement('canvas');
  glCanvas.id = 'gorilla-canvas';
  glCanvas.width = 896;
  glCanvas.height = 560;
  glCanvas.style.cssText = 'position:absolute;left:0;top:0;width:1200px;height:800px;display:block;';
  overlayEl.appendChild(glCanvas);

  const lensDivider = document.createElement('div');
  lensDivider.className = 'gorilla-cardboard-divider';
  lensDivider.style.cssText = [
    'position:absolute',
    'left:599px',
    'top:0',
    'width:2px',
    'height:800px',
    'background:rgba(255,255,255,.22)',
    'pointer-events:none',
    'z-index:4',
  ].join(';');
  overlayEl.appendChild(lensDivider);

  // Barra superior compacta e limpa por olho (sem sobrepor controles do Cardboard)
  const mkEyeHud = (leftPx, isLeft) => {
    const bar = document.createElement('div');
    bar.style.cssText = `position:absolute;left:${leftPx + 120}px;top:12px;width:360px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`;
    bar.innerHTML = `
      <button type="button" data-gorilla-act="jump" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(120,53,15,.82);color:#fde68a;font:700 10px Inter,sans-serif;cursor:pointer">Salto</button>
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${isLeft ? 'data-gorilla-exit="1"' : ''} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `;
    return bar;
  };
  overlayEl.appendChild(mkEyeHud(0, true));
  overlayEl.appendChild(mkEyeHud(600, false));

  splashEl = document.createElement('div');
  splashEl.id = 'gorilla-splash';
  splashEl.dataset.testid = 'gorilla-splash';
  splashEl.style.cssText = [
    'position:absolute',
    'left:0',
    'top:0',
    'width:1200px',
    'height:800px',
    'z-index:10',
    'display:none',
    'flex-direction:row',
    'align-items:stretch',
    'justify-content:stretch',
    'background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)',
    'color:#f8fafc',
    'font-family:Inter,system-ui,sans-serif',
    'text-align:center',
    'user-select:none',
  ].join(';');
  const eyeCard = isLeft => `
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${isLeft ? 'border-right:1px solid rgba(255,255,255,.15)' : ''}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${isLeft ? 'data-gorilla-entering="1"' : ''} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${CARDBOARD_2015_LENS.model} · Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;
  splashEl.innerHTML = eyeCard(true) + eyeCard(false);
  overlayEl.appendChild(splashEl);

  overlayEl.addEventListener('click', e => {
    const btn = e.target.closest('[data-gorilla-act]');
    if (!btn) return;
    const act = btn.dataset.gorillaAct;
    if (act === 'exit') exitGorillaTag();
    else if (act === 'spawn') respawn();
    else if (act === 'jump') {
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(C ? C.getWorldQuaternion(new THREE.Quaternion()) : new THREE.Quaternion());
      fwd.y = 0;
      if (fwd.lengthSq() > 1e-4) fwd.normalize();
      vel.x += fwd.x * 4.2;
      vel.z += fwd.z * 4.2;
      vel.y = Math.max(vel.y, 4.8);
      addGorillaCoins(1);
    } else if (act === 'recenter') {
      const eul = new THREE.Euler().setFromQuaternion(coreCamera.quaternion, 'YXZ');
      yawOff = eul.y;
    }
  });

  const updatePointerHand = e => {
    const rect = overlayEl.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const u = Math.max(0, Math.min(1, ((e.clientX - rect.left) / rect.width)));
    const v = Math.max(0, Math.min(1, ((e.clientY - rect.top) / rect.height)));
    const eyeU = u >= 0.5 ? (u - 0.5) * 2 : u * 2;
    dragPointer = {
      idx: eyeU >= 0.5 ? 1 : 0,
      x: eyeU,
      y: v,
      s: e.buttons ? 0.12 : 0.18,
      t: performance.now(),
    };
  };
  overlayEl.addEventListener('pointerdown', updatePointerHand);
  overlayEl.addEventListener('pointermove', e => { if (e.buttons) updatePointerHand(e); });
  overlayEl.addEventListener('pointerup', () => { dragPointer = null; });

  hud.appendChild(overlayEl);
}

function resolveHeadCollisions() {
  const Hh = headW();
  for (let k = 0; k < 3; k++) {
    if (!sphereQ(Hh.x, Hh.y, Hh.z, R_HEAD)) break;
    const pen = R_HEAD - Q.d;
    player.position.x += Q.nx * pen;
    player.position.y += Q.ny * pen;
    player.position.z += Q.nz * pen;
    Hh.x += Q.nx * pen;
    Hh.y += Q.ny * pen;
    Hh.z += Q.nz * pen;
    const into = vel.x * Q.nx + vel.y * Q.ny + vel.z * Q.nz;
    if (into < 0) {
      vel.x -= Q.nx * into;
      vel.y -= Q.ny * into;
      vel.z -= Q.nz * into;
      if (Q.ny > 0.5) {
        vel.x *= 0.88;
        vel.z *= 0.88;
      }
    }
  }
  if (Hh.y < spawn.y - 18) respawn();
}

function tick(now) {
  if (!active) return;
  rafId = requestAnimationFrame(tick);
  const dt = Math.min((now - (lastT || now)) / 1000, 0.04) || 0.016;
  lastT = now;

  if (!S || !player || !C) return;

  // Orientação da cabeça via sensores do NextVR / Cardboard 2015
  const eul = new THREE.Euler().setFromQuaternion(coreCamera.quaternion, 'YXZ');
  C.quaternion.setFromEuler(new THREE.Euler(eul.x, eul.y - yawOff, eul.z, 'YXZ'));

  updateHandsFromNextVR(now);

  // 6DoF Falso (fluxo ótico da câmara traseira): aplica o deslocamento frente/trás real no Gorila
  const sixStep = SixDof.consumeStepDelta();
  if (sixStep.lengthSq() > 1e-6) {
    player.position.x += sixStep.x;
    player.position.z += sixStep.z;
    player.position.y += sixStep.y * 0.25;
  }

  // Gravidade + amortecimento
  vel.y -= 9.8 * dt;
  vel.multiplyScalar(1 - 0.14 * dt);
  player.position.addScaledVector(vel, dt);
  player.updateMatrixWorld(true);
  resolveHeadCollisions();

  // Mãos: IK dos braços Gorilla + impulso suave ao empurrar o chão/árvores
  for (let i = 0; i < 2; i++) {
    if (hands[i] && now - hands[i].t > 220) hands[i] = null;
    const h = hands[i];
    const a = arms[i ? 0 : 1];
    if (!h) {
      touch[i] = false;
      hlP[i] = null;
      trackFrames[i] = 0;
      if (a) {
        const restLocal = new THREE.Vector3(i ? 0.24 : -0.24, -0.26, -0.46);
        solveArm(a, C.localToWorld(restLocal), null);
      }
      continue;
    }
    trackFrames[i]++;
    const sp = a ? a.sp : V();
    const t = V();
    t.set(
      (h.x - 0.5) * 1.65,
      (0.5 - h.y) * 1.8 - 0.34,
      -Math.min(0.95, Math.max(0.25, 0.09 / Math.max(h.s, 0.035)))
    );
    if (hlP[i]) {
      // Limita salto brusco de detecção em 1 frame e responde com fluidez rápida
      const step = t.clone().sub(hlP[i]);
      if (step.length() > 0.32) {
        t.copy(hlP[i]).addScaledVector(step.normalize(), 0.32);
      }
      t.lerp(hlP[i], 0.24);
    }
    const off = t.clone().sub(sp);
    if (off.length() > ARM_LEN * 0.97) {
      t.copy(sp).addScaledVector(off.setLength(ARM_LEN * 0.97), 1);
    }
    hl[i].copy(t);
    const desiredW = C.localToWorld(t.clone());
    const hit = trackFrames[i] >= 1 && sphereQ(desiredW.x, desiredW.y, desiredW.z, R_HAND);
    if (hit) {
      const cW = new THREE.Vector3(
        Q.x + Q.nx * R_HAND,
        Q.y + Q.ny * R_HAND,
        Q.z + Q.nz * R_HAND
      );
      if (!touch[i]) {
        touch[i] = true;
        anchor[i].copy(cW);
      } else {
        const push = anchor[i].clone().sub(desiredW);
        const pushLen = push.length();
        if (pushLen > 1e-3) {
          if (pushLen > 0.28) push.multiplyScalar(0.28 / pushLen);
          player.position.add(push);
          pushCoinProgress += push.length();
          if (pushCoinProgress >= 0.38) {
            pushCoinProgress = 0;
            addGorillaCoins(1);
          }
          const vImp = push.clone().multiplyScalar(BOOST / Math.max(dt, 0.010));
          vel.lerp(vImp, 0.56);
          if (vel.length() > MAXV) vel.setLength(MAXV);
          player.updateMatrixWorld(true);
          resolveHeadCollisions();
        }
      }
      hW[i].copy(anchor[i]);
    } else {
      touch[i] = false;
      hW[i].copy(desiredW);
    }
    const tl = C.worldToLocal(hW[i].clone());
    const o2 = tl.clone().sub(sp);
    if (o2.length() > ARM_LEN * 0.97) {
      tl.copy(sp).addScaledVector(o2.setLength(ARM_LEN * 0.97), 1);
      hW[i].copy(C.localToWorld(tl));
    }
    if (!hlP[i]) hlP[i] = V();
    hlP[i].copy(tl);
    if (a) solveArm(a, hW[i], h.ori);
  }

  // Anima e coleta moedas 3D flutuantes no mapa da floresta
  if (worldCoinNodes.length) {
    const headPos = headW();
    for (let cIdx = 0; cIdx < worldCoinNodes.length; cIdx++) {
      const cn = worldCoinNodes[cIdx];
      const ud = cn.userData;
      if (now < ud.cooldownUntil) {
        cn.visible = false;
        continue;
      }
      cn.visible = true;
      cn.rotation.y += dt * 2.4;
      cn.position.y = ud.baseY + Math.sin(now * 0.003 + ud.phase) * 0.08;
      const distHead = cn.position.distanceTo(headPos);
      const distL = hands[0] ? cn.position.distanceTo(hW[0]) : 99;
      const distR = hands[1] ? cn.position.distanceTo(hW[1]) : 99;
      if (distHead < 0.85 || distL < 0.45 || distR < 0.45) {
        ud.cooldownUntil = now + 4500;
        cn.visible = false;
        addGorillaCoins(5);
      }
    }
  }

  // Atualiza a posição do contador de moedas preso ao braço direito do Gorila
  updateRightArmCoinCounterPose();
  drawHandTrackingOverlay();

  // Renderização Estéreo (Olho Esquerdo e Olho Direito) para as Lentes Google Cardboard 2015
  if (glRenderer && camL && camR) {
    player.updateMatrixWorld(true);
    const W = glCanvas.width;
    const H = glCanvas.height;
    const halfW = W >> 1;

    glRenderer.setViewport(0, 0, halfW, H);
    glRenderer.setScissor(0, 0, halfW, H);
    glRenderer.render(S, camL);

    glRenderer.setViewport(halfW, 0, halfW, H);
    glRenderer.setScissor(halfW, 0, halfW, H);
    glRenderer.render(S, camR);
  }
}

export function isGorillaTagActive() {
  return active || entering;
}

export function openGorillaTag() {
  ensureDom();
  if (entering || active) return;
  entering = true;
  window.__gorillaStereoOverlay = true;
  window.__gorillaExit = exitGorillaTag;
  window.__gorillaOnHands = null;
  if (overlayEl) overlayEl.dataset.gorillaRightArmCoins = String(gorillaCoins);

  // Ativa o rastreamento de mãos para os braços 3D do Gorila, mas deixa o esqueleto 2D/GL invisível
  settings.handsOn = true;
  startHands().catch(() => {});
  try { window.NativeXR?.handVisuals?.(false); } catch {}

  hiddenWinSnapshot = wins.map(w => ({ win: w, hidden: !!w.hidden }));
  for (const w of [...wins]) {
    if (typeof w.setHidden === 'function') w.setHidden(true);
    else if (w.shell) w.shell.style.display = 'none';
  }
  setKeyboardHidden(true);
  setDockVisible(false);
  setDockHidden(true);
  css3d.invalidate?.();
  css3d.render?.(coreScene, coreCamera);

  overlayEl.dataset.gorillaStage = 'entering';
  overlayEl.style.display = 'block';
  splashEl.style.display = 'flex';
  setSplashProgress(15, 'Iniciando Gorilla Tag...');

  const fast = typeof window !== 'undefined' && !!window.__gorillaFastTest;
  const minWait = new Promise(r => setTimeout(r, fast ? 240 : 1200));

  Promise.all([loadWorld(), minWait]).then(() => {
    if (!entering) return;
    entering = false;
    active = true;
    overlayEl.dataset.gorillaStage = 'playing';
    splashEl.style.display = 'none';
    respawn();
    lastT = performance.now();
    tick(lastT);
  });
}

export function exitGorillaTag() {
  entering = false;
  active = false;
  window.__gorillaStereoOverlay = false;
  window.__gorillaOnHands = null;
  gunArmedUntil[0] = 0;
  gunArmedUntil[1] = 0;
  bothTriggerSince = 0;
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
  if (splashEl) splashEl.style.display = 'none';
  if (overlayEl) {
    overlayEl.dataset.gorillaStage = 'idle';
    overlayEl.style.display = 'none';
  }
  try { window.NativeXR?.handVisuals?.(!!settings.handDraw); } catch {}

  for (const { win, hidden } of hiddenWinSnapshot) {
    if (wins.includes(win)) {
      if (typeof win.setHidden === 'function') win.setHidden(hidden);
      else if (win.shell) win.shell.style.display = '';
    }
  }
  hiddenWinSnapshot = [];
  if (!settings.spatialLauncher) {
    setDockHidden(false);
    setDockVisible(true);
  }
  css3d.invalidate?.();
  css3d.render?.(coreScene, coreCamera);
}
