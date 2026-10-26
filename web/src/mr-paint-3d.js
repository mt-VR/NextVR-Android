// ============================================================================
// ATMOXR — paintMR 3D (paintdrawer): desenho em Realidade Mista com as mãos.
//
// O que este módulo faz de verdade (sem simular nada que o ATMO não tenha):
//  - usa o Hand Tracking NATIVO que já existe (OrangeHanding / MediaPipe + PhoneXrHands),
//    recebendo os 21 landmarks normalizados por `hands.js` — nada de detector web;
//  - a PINÇA (polegar + indicador) da MÃO DIREITA cria um traço TRIDIMENSIONAL: cada amostra
//    vira um ponto no mundo, com profundidade estimada pelo tamanho aparente da mão, e os
//    pontos são ligados por cilindros 3D (InstancedMesh) que ficam PARADOS no espaço;
//  - os traços são ancorados: a cada frame o grupo de desenho recebe a rotação inversa da
//    cabeça, então girar a cabeça NÃO arrasta o desenho (é o mesmo princípio do ShootTheDie);
//  - renderização ESTÉREO (duas câmeras, metade esquerda/direita do canvas), o mesmo caminho
//    do ShootTheDie: o painel `#hud` vira [0,0,600,800] + uvR para o olho direito no atlas;
//  - sem esqueleto de mão: `handVisuals(false)` desliga a silhueta nativa e só o cursor
//    discreto (anel) aparece no ponto da pinça;
//  - paleta FLUTUANTE 3D (PlaneGeometry + CanvasTexture) com raio da mão direita para escolher
//    cor, grossura, caneta/neon/borracha, desfazer, limpar, salvar, abrir e sair;
//  - borracha 3D: apaga só os segmentos que o cursor encosta (não o traço inteiro);
//  - salvar/abrir em localStorage (o desenho fica guardado entre sessões).
//
// Prioridade respeitada: rastreamento + pinça + traço 3D persistente primeiro; depois
// ferramentas, interface flutuante e efeitos.
// ============================================================================
import * as THREE from 'three';
import { settings as S, camera as coreCamera, native, css3d, toast, setPassthrough } from './core.js';
import { hands, screenPoint, screenSpan } from './hands.js';
import { wins, setDockHidden, setDockVisible } from './windows.js';

/* ---------------------------------------------------------------- constantes */
const FULL_W = 1200;
const FULL_H = 800;
const TAN36 = Math.tan(36 * Math.PI / 180);
/*
 * A "placa" é o quad head-locked que o atlas publica e onde o WebView é projetado. O que
 * importa para o 3D é o tamanho dela em unidades de tangente a 1 m, porque é isso que
 * decide quanto do nosso desenho o olho vê. Dois modos:
 *  - estéreo (jogo independente dentro do #atlas, como o ShootTheDie):
 *      matrix = translate(0,0,-1) * scale(2*tan36*1.78, 2*tan36*1.48)  → ±1.293 x ±1.075
 *  - mono (preview no navegador / fallback): matrix scale(2*tan36*1.5, 2*tan36) → ±1.09 x ±0.727
 * A câmera de cada olho usa EXATAMENTE essas metades, então um ponto que calculamos em
 * tangente aparece no mesmo ângulo na lente (o quad estica a imagem, a câmera compensa).
 */
const STEREO_HALF_X = TAN36 * 1.78;   // 1.2933
const STEREO_HALF_Y = TAN36 * 1.48;   // 1.0753
const MONO_HALF_X = TAN36 * 1.5;      // 1.0898
const MONO_HALF_Y = TAN36;            // 0.7265
const EYE_X = 0.031;                  // distância interpupilar usada pelo ShootTheDie
const SEG_CAPACITY = 4200;     // segmentos de cilindro por pool (caneta / neon)
const STORAGE_KEY = 'atmoxr.paint3d.v1';
const DEPTH_MIN = 0.28;
const DEPTH_MAX = 0.98;
const DEPTH_HOME = 0.52;

/* ------------------------------------------------------------------- estado */
const P = {
  active: false,
  root: null,
  canvas: null,
  renderer: null,
  scene: null,
  content: null,       // grupo com os traços (recebe a rotação inversa da cabeça)
  paintGroup: null,    // mesmo grupo, alias semântico
  eyeL: null,
  eyeR: null,
  camCenter: null,
  raf: 0,
  last: 0,
  stereo: false,
  savedWins: [],
  anchorQ: new THREE.Quaternion(),
  q0Inv: new THREE.Quaternion(),
  // ferramenta
  color: '#22c55e',
  colorName: 'Verde',
  size: 9,
  sizeLabel: 'Pincel M',
  tool: 'pen',             // 'pen' | 'neon' | 'eraser'
  paletteOpen: false,
  // traços
  strokes: [],
  activeStroke: null,
  undoStack: [],
  strokeSeq: 0,
  // ponteiro
  pinchDown: false,
  pinchLostAt: 0,
  uiConsumed: false,
  hover: null,             // { panel:'palette'|'hud'|'button', id }
  hoverKey: '',
  lastActivateMs: 0,
  usedHands: false,
  // métricas
  strokeCount: 0,
  pointCount: 0,
  tracking: 'aguardando mão',
  lastDepth: DEPTH_HOME,
  fps: 0,
  // opções vindas do apps.js
  colors: [],
  sizes: [],
  logo: '',
  onExit: null,
  onPaletteToggle: null,
  onState: null,
};

/* --------------------------------------------------------- buffers temporários */
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _mid = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _q = new THREE.Quaternion();
const _qInv = new THREE.Quaternion();
const _scale = new THREE.Vector3();
const _col = new THREE.Color();
const _ray = new THREE.Raycaster();
const _origin = new THREE.Vector3(0, 0, 0);
const _mat4 = new THREE.Matrix4();

/* =========================================================== malhas de traço */
const GEO_CYL = new THREE.CylinderGeometry(1, 1, 1, 7, 1, true);
const GEO_SPH = new THREE.SphereGeometry(1, 6, 4);

const penMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.38,
  metalness: 0.04,
  vertexColors: false,
});
const neonMaterial = new THREE.MeshBasicMaterial({
  toneMapped: false,
  transparent: true,
  opacity: 0.96,
});

function makePool(material) {
  const cyl = new THREE.InstancedMesh(GEO_CYL, material, SEG_CAPACITY);
  const sph = new THREE.InstancedMesh(GEO_SPH, material, SEG_CAPACITY);
  for (const m of [cyl, sph]) {
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.frustumCulled = false;
    m.count = 0;
    m.matrixAutoUpdate = false;
    // Cor por instância: começa branco e é escrita no rebuild.
    m.setColorAt(0, _col.set(0xffffff));
  }
  return { cyl, sph, count: 0 };
}

let pools = null;

/* ================================================================== utilidades */
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function setInstancedMesh(mesh, index, pos, quat, sx, sy, sz, color) {
  _scale.set(sx, sy, sz);
  _mat4.compose(pos, quat, _scale);
  mesh.setMatrixAt(index, _mat4);
  if (color) mesh.setColorAt(index, color);
}

/** Constrói (ou reconstrói) todos os cilindros/joias dos traços nos dois pools. */
/**
 * Junta (esfera) só onde ela aparece: com amostras densas os cilindros já se sobrepõem e a
 * esfera seria geometria invisível. Isso corta ~metade dos triângulos num traço lento.
 */
function needsJoint(pts, i, radius) {
  if (i <= 0 || i >= pts.length) return true;
  const a = pts[i - 1];
  const b = pts[i];
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const dz = b[2] - a[2];
  return dx * dx + dy * dy + dz * dz > (radius * 1.7) * (radius * 1.7);
}

function rebuildStrokes() {
  if (!pools) return;
  const pen = pools.pen;
  const neon = pools.neon;
  pen.count = 0;
  neon.count = 0;
  let points = 0;
  for (const st of P.strokes) {
    const pool = st.neon ? neon : pen;
    _col.set(st.color);
    const radius = st.radius;
    for (let i = 0; i < st.pts.length; i++) {
      const p = st.pts[i];
      const sphereHidden = st.killed && st.killed.has(i);
      if (!sphereHidden && needsJoint(st.pts, i, radius) && pool.sph.count < SEG_CAPACITY) {
        _v.set(p[0], p[1], p[2]);
        setInstancedMesh(pool.sph, pool.sph.count, _v, _q.identity(), radius, radius, radius, _col);
        pool.sph.count++;
        points++;
      }
      if (i === 0) continue;
      if (st.killed && st.killed.has(i - 1)) continue;
      const a = st.pts[i - 1];
      _v.set(a[0], a[1], a[2]);
      _v2.set(p[0], p[1], p[2]);
      _dir.subVectors(_v2, _v);
      const len = _dir.length();
      if (!(len > 1e-5)) continue;
      if (pool.cyl.count >= SEG_CAPACITY) break;
      _q.setFromUnitVectors(_up, _dir.multiplyScalar(1 / len));
      _mid.addVectors(_v, _v2).multiplyScalar(0.5);
      setInstancedMesh(pool.cyl, pool.cyl.count, _mid, _q, radius, len, radius, _col);
      pool.cyl.count++;
    }
  }
  for (const pool of [pen, neon]) {
    pool.cyl.instanceMatrix.needsUpdate = true;
    pool.cyl.instanceColor.needsUpdate = true;
    pool.cyl.count = Math.min(pool.cyl.count, SEG_CAPACITY);
    pool.sph.instanceMatrix.needsUpdate = true;
    pool.sph.instanceColor.needsUpdate = true;
    pool.sph.count = Math.min(pool.sph.count, SEG_CAPACITY);
  }
  P.pointCount = points;
  P.strokeCount = P.strokes.filter(s => s.pts.length > 1).length;
  emitState();
}

/** Acrescenta um segmento ao InstancedMesh sem tocar nos outros (traço em andamento). */
function pushSegment(st, indexA, indexB) {
  const pool = st.neon ? pools.neon : pools.pen;
  if (!pool) return;
  const a = st.pts[indexA];
  const b = st.pts[indexB];
  _col.set(st.color);
  const radius = st.radius;
  if (needsJoint(st.pts, indexB, radius) && pool.sph.count < SEG_CAPACITY) {
    _v.set(b[0], b[1], b[2]);
    setInstancedMesh(pool.sph, pool.sph.count, _v, _q.identity(), radius, radius, radius, _col);
    pool.sph.count++;
    pool.sph.instanceMatrix.needsUpdate = true;
    pool.sph.instanceColor.needsUpdate = true;
  }
  _v.set(a[0], a[1], a[2]);
  _v2.set(b[0], b[1], b[2]);
  _dir.subVectors(_v2, _v);
  const len = _dir.length();
  if (!(len > 1e-5) || pool.cyl.count >= SEG_CAPACITY) return;
  _q.setFromUnitVectors(_up, _dir.multiplyScalar(1 / len));
  _mid.addVectors(_v, _v2).multiplyScalar(0.5);
  setInstancedMesh(pool.cyl, pool.cyl.count, _mid, _q, radius, len, radius, _col);
  pool.cyl.count++;
  pool.cyl.instanceMatrix.needsUpdate = true;
  pool.cyl.instanceColor.needsUpdate = true;
  P.pointCount++;
}

function radiusFor(size) {
  // 9 px do pincel antigo ≈ 6 mm de diâmetro a 0,5 m: mantém a mesma leitura na lente.
  return clamp(Number(size) * 0.00035, 0.0014, 0.013);
}

/* ================================================================ notificações */
let uiDirty = true;
let lastStateJson = '';

function emitState() {
  const st = getMrPaintState();
  const json = JSON.stringify([st.strokes, st.points, st.tool, st.color, st.colorName, st.size, st.paletteOpen, st.tracking]);
  if (json === lastStateJson) return;
  lastStateJson = json;
  try { P.onState?.(st); } catch {}
  uiDirty = true;
}

export function getMrPaintState() {
  return {
    active: P.active,
    strokes: P.strokeCount,
    points: P.pointCount,
    tool: P.tool,
    color: P.color,
    colorName: P.colorName,
    size: P.size,
    sizeLabel: P.sizeLabel,
    paletteOpen: P.paletteOpen,
    tracking: P.tracking,
    depth: Number(P.lastDepth.toFixed(3)),
    fps: P.fps,
    stereo: P.stereo,
  };
}

/* ============================================================ texturas de UI */
function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function makePanelTexture(canvas) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 2;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  return tex;
}

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w * 0.5, h * 0.5);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

/* --------------------------------------------------------------- paleta 3D ---- */
const PAL_W = 1024;
const PAL_H = 768;

const paletteUI = {
  canvas: null,
  ctx: null,
  texture: null,
  mesh: null,
  regions: [],
  hoverId: '',
};

function palRegions() {
  const regions = [];
  const pad = 34;
  const inner = PAL_W - pad * 2;
  // 10 cores: 5 colunas x 2 linhas
  const cGap = 12;
  const cw = (inner - cGap * 4) / 5;
  const ch = 78;
  P.colors.forEach((entry, i) => {
    const col = i % 5;
    const row = Math.floor(i / 5);
    regions.push({
      id: 'color:' + entry[0],
      kind: 'color',
      hex: entry[0],
      name: entry[1],
      x: pad + col * (cw + cGap),
      y: 128 + row * (ch + cGap),
      w: cw,
      h: ch,
    });
  });
  // ferramentas
  const tGap = 12;
  const tw = (inner - tGap * 2) / 3;
  const ty = 308;
  [
    ['pen', '✏️ Caneta 3D'],
    ['neon', '✨ Tinta Neon'],
    ['eraser', '🧽 Borracha'],
  ].forEach((t, i) => {
    regions.push({ id: 'tool:' + t[0], kind: 'tool', tool: t[0], label: t[1],
      x: pad + i * (tw + tGap), y: ty, w: tw, h: 66 });
  });
  // grossuras
  const sGap = 10;
  const sw = (inner - sGap * 3) / 4;
  const sy = 400;
  P.sizes.forEach((entry, i) => {
    regions.push({ id: 'size:' + entry[0], kind: 'size', size: entry[0], label: entry[1],
      x: pad + i * (sw + sGap), y: sy, w: sw, h: 58 });
  });
  // controle deslizante de grossura
  regions.push({ id: 'slider', kind: 'slider', x: pad, y: 478, w: inner, h: 66 });
  // ações
  const aGap = 10;
  const aw = (inner - aGap * 4) / 5;
  const ay = 566;
  [
    ['undo', '↩ Desfazer'],
    ['clear', '🗑 Limpar'],
    ['save', '💾 Salvar'],
    ['load', '📂 Abrir'],
    ['close', '✕ Fechar'],
  ].forEach((a, i) => {
    regions.push({ id: 'act:' + a[0], kind: 'act', act: a[0], label: a[1],
      x: pad + i * (aw + aGap), y: ay, w: aw, h: 82 });
  });
  // rodapé informativo (não clicável)
  regions.push({ id: 'hint-slot', kind: 'hint', x: pad, y: 668, w: inner, h: 74 });
  return regions;
}

function drawPalette() {
  const c = paletteUI.canvas;
  const ctx = paletteUI.ctx;
  if (!c || !ctx) return;
  const W = PAL_W;
  const H = PAL_H;
  ctx.clearRect(0, 0, W, H);

  // fundo do painel flutuante (vidro escuro)
  ctx.save();
  roundRect(ctx, 4, 4, W - 8, H - 8, 34);
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, 'rgba(17,22,32,.96)');
  bg.addColorStop(1, 'rgba(9,12,19,.97)');
  ctx.fillStyle = bg;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(148,163,184,.55)';
  ctx.stroke();
  ctx.restore();

  // cabeçalho
  ctx.save();
  ctx.fillStyle = '#f8fafc';
  ctx.font = '800 34px Inter,system-ui,sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillText('🎨 Paleta 3D', 34, 58);
  ctx.fillStyle = '#7dd3fc';
  ctx.font = '700 20px Inter,system-ui,sans-serif';
  ctx.fillText('paintMR · raio da mão direita escolhe · pinça desenha', 300, 60);
  ctx.restore();

  const hover = paletteUI.hoverId;
  for (const r of paletteUI.regions) {
    const isHover = hover === r.id;
    ctx.save();
    if (r.kind === 'hint') {
      ctx.fillStyle = 'rgba(148,163,184,.16)';
      roundRect(ctx, r.x, r.y, r.w, r.h, 16);
      ctx.fill();
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '650 19px Inter,system-ui,sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `Pinça direita desenha · ${P.tool === 'eraser' ? 'pinça apaga (borracha 3D)' : 'traço 3D fixo no espaço'} · ${P.sizeLabel} · ${P.colorName}`,
        r.x + 18, r.y + r.h / 2,
      );
      ctx.restore();
      continue;
    }
    if (r.kind === 'color') {
      const selected = P.tool !== 'eraser' && r.hex.toLowerCase() === P.color.toLowerCase();
      ctx.fillStyle = isHover ? 'rgba(255,255,255,.16)' : selected ? 'rgba(56,189,248,.20)' : 'rgba(255,255,255,.06)';
      roundRect(ctx, r.x, r.y, r.w, r.h, 14);
      ctx.fill();
      ctx.lineWidth = selected || isHover ? 3 : 1.5;
      ctx.strokeStyle = selected ? '#38bdf8' : isHover ? '#e2e8f0' : 'rgba(255,255,255,.20)';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(r.x + 34, r.y + r.h / 2, 20, 0, Math.PI * 2);
      ctx.fillStyle = r.hex;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255,255,255,.85)';
      ctx.stroke();
      ctx.fillStyle = '#f8fafc';
      ctx.font = '750 21px Inter,system-ui,sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(r.name, r.x + 62, r.y + r.h / 2 + 1);
    } else if (r.kind === 'tool') {
      const selected = P.tool === r.tool;
      ctx.fillStyle = selected ? '#2563eb' : isHover ? 'rgba(255,255,255,.16)' : 'rgba(255,255,255,.06)';
      roundRect(ctx, r.x, r.y, r.w, r.h, 14);
      ctx.fill();
      ctx.lineWidth = selected ? 3 : 1.5;
      ctx.strokeStyle = selected ? '#38bdf8' : isHover ? '#e2e8f0' : 'rgba(255,255,255,.20)';
      ctx.stroke();
      ctx.fillStyle = '#f8fafc';
      ctx.font = '750 22px Inter,system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(r.label, r.x + r.w / 2, r.y + r.h / 2);
      ctx.textAlign = 'left';
    } else if (r.kind === 'size') {
      const selected = P.size === r.size;
      ctx.fillStyle = selected ? '#2563eb' : isHover ? 'rgba(255,255,255,.16)' : 'rgba(255,255,255,.06)';
      roundRect(ctx, r.x, r.y, r.w, r.h, 12);
      ctx.fill();
      ctx.lineWidth = selected ? 3 : 1.5;
      ctx.strokeStyle = selected ? '#38bdf8' : isHover ? '#e2e8f0' : 'rgba(255,255,255,.20)';
      ctx.stroke();
      ctx.fillStyle = '#f8fafc';
      ctx.font = '750 20px Inter,system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(r.label, r.x + r.w / 2, r.y + r.h / 2);
      ctx.textAlign = 'left';
    } else if (r.kind === 'slider') {
      ctx.fillStyle = isHover ? 'rgba(255,255,255,.13)' : 'rgba(255,255,255,.05)';
      roundRect(ctx, r.x, r.y, r.w, r.h, 14);
      ctx.fill();
      const trackX = r.x + 24;
      const trackW = r.w - 48;
      const t = clamp((P.size - 2) / 34, 0, 1);
      ctx.strokeStyle = 'rgba(148,163,184,.45)';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(trackX, r.y + r.h / 2);
      ctx.lineTo(trackX + trackW, r.y + r.h / 2);
      ctx.stroke();
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(trackX, r.y + r.h / 2);
      ctx.lineTo(trackX + trackW * t, r.y + r.h / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(trackX + trackW * t, r.y + r.h / 2, 16, 0, Math.PI * 2);
      ctx.fillStyle = '#f8fafc';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#38bdf8';
      ctx.stroke();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '700 18px Inter,system-ui,sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${P.size}px`, r.x + r.w - 74, r.y + r.h / 2);
    } else if (r.kind === 'act') {
      const danger = r.act === 'clear';
      ctx.fillStyle = isHover
        ? (danger ? 'rgba(220,38,38,.65)' : 'rgba(56,189,248,.35)')
        : (danger ? 'rgba(185,28,28,.28)' : 'rgba(255,255,255,.07)');
      roundRect(ctx, r.x, r.y, r.w, r.h, 14);
      ctx.fill();
      ctx.lineWidth = isHover ? 3 : 1.5;
      ctx.strokeStyle = isHover ? '#f8fafc' : (danger ? 'rgba(248,113,113,.5)' : 'rgba(255,255,255,.22)');
      ctx.stroke();
      ctx.fillStyle = danger ? '#fecaca' : '#f8fafc';
      ctx.font = '750 21px Inter,system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(r.label, r.x + r.w / 2, r.y + r.h / 2);
      ctx.textAlign = 'left';
    }
    ctx.restore();
  }

  // borda luminosa quando a paleta está aberta
  paletteUI.texture && (paletteUI.texture.needsUpdate = true);
}

/* ------------------------------------------------------------------ HUD 3D ---- */
const HUD_W = 1024;
const HUD_H = 168;
const hudUI = { canvas: null, ctx: null, texture: null, mesh: null, regions: [], hoverId: '' };

function drawHud() {
  const ctx = hudUI.ctx;
  if (!ctx) return;
  ctx.clearRect(0, 0, HUD_W, HUD_H);
  ctx.save();
  roundRect(ctx, 3, 3, HUD_W - 6, HUD_H - 6, 30);
  ctx.fillStyle = 'rgba(9,13,20,.88)';
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = 'rgba(56,189,248,.55)';
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(64, HUD_H / 2, 30, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = 'rgba(56,189,248,.18)';
  ctx.fill();
  if (hudUI.logo && hudUI.logo.complete !== false && (hudUI.logo.naturalWidth || 0) > 0) {
    // Logo oficial do painel recortado em círculo (o mesmo arquivo do menu/loja).
    ctx.save();
    ctx.clip();
    ctx.drawImage(hudUI.logo, 34, HUD_H / 2 - 30, 60, 60);
    ctx.restore();
  } else {
    ctx.fillStyle = '#38bdf8';
    ctx.font = '800 30px Inter,system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✎', 64, HUD_H / 2 + 1);
    ctx.textAlign = 'left';
  }
  ctx.beginPath();
  ctx.arc(64, HUD_H / 2, 30, 0, Math.PI * 2);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#38bdf8';
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.font = '820 34px Inter,system-ui,sans-serif';
  ctx.fillText('paintMR', 108, 56);
  ctx.fillStyle = '#38bdf8';
  ctx.font = '700 20px Inter,system-ui,sans-serif';
  ctx.fillText('3D', 250, 56);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '700 21px Inter,system-ui,sans-serif';
  ctx.fillText(`traços ${P.strokeCount} · ${P.pointCount} pontos · ${P.tracking}`, 108, 104);
  ctx.fillStyle = P.tool === 'eraser' ? '#fca5a5' : '#cbd5e1';
  ctx.font = '700 20px Inter,system-ui,sans-serif';
  ctx.fillText(
    P.tool === 'eraser' ? 'Borracha 3D ativa (pinça apaga)' : `${P.sizeLabel} · ${P.colorName}`,
    108, 134,
  );
  ctx.restore();

  // botão Sair
  for (const r of hudUI.regions) {
    const isHover = hudUI.hoverId === r.id;
    ctx.save();
    ctx.fillStyle = isHover ? 'rgba(248,113,113,.9)' : 'rgba(185,28,28,.72)';
    roundRect(ctx, r.x, r.y, r.w, r.h, 20);
    ctx.fill();
    ctx.lineWidth = isHover ? 3 : 2;
    ctx.strokeStyle = isHover ? '#fff' : 'rgba(248,113,113,.7)';
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 24px Inter,system-ui,sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✕ Sair', r.x + r.w / 2, r.y + r.h / 2);
    ctx.textAlign = 'left';
    ctx.restore();
  }
  hudUI.texture && (hudUI.texture.needsUpdate = true);
}

/* ---------------------------------------------------- botão Paleta (mão esq.) */
const BTN_W = 512;
const BTN_H = 176;
const buttonUI = { canvas: null, ctx: null, texture: null, mesh: null, region: null, hoverId: '' };

function drawPaletteButton() {
  const ctx = buttonUI.ctx;
  if (!ctx) return;
  ctx.clearRect(0, 0, BTN_W, BTN_H);
  const hover = buttonUI.hoverId === 'palette-btn';
  ctx.save();
  roundRect(ctx, 6, 6, BTN_W - 12, BTN_H - 12, 46);
  ctx.fillStyle = hover ? 'rgba(14,165,233,.92)' : 'rgba(11,17,26,.90)';
  ctx.fill();
  ctx.lineWidth = hover ? 6 : 4;
  ctx.strokeStyle = hover ? '#ffffff' : 'rgba(56,189,248,.9)';
  ctx.stroke();
  // bolinha da cor atual
  ctx.beginPath();
  ctx.arc(78, BTN_H / 2, 32, 0, Math.PI * 2);
  ctx.fillStyle = P.tool === 'eraser' ? '#94a3b8' : P.color;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(255,255,255,.9)';
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.font = '800 40px Inter,system-ui,sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillText(P.paletteOpen ? 'Fechar Paleta' : '🎨 Paleta', 130, BTN_H / 2 - 12);
  ctx.fillStyle = '#93c5fd';
  ctx.font = '700 22px Inter,system-ui,sans-serif';
  ctx.fillText('mão esquerda · aponte o raio e faça pinça', 130, BTN_H / 2 + 32);
  ctx.restore();
  buttonUI.texture && (buttonUI.texture.needsUpdate = true);
}

function regionAtPanel(regions, width, height, uv) {
  if (!uv) return null;
  const px = uv.x * width;
  const py = (1 - uv.y) * height;
  for (const r of regions) {
    if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) return r;
  }
  return null;
}

/* ============================================================== mão → ponto 3D */
function pinchScreenPoint(hand) {
  const p = hand?.points;
  if (p && p.length >= 26) {
    return {
      x: (Number(p[4 * 3]) + Number(p[8 * 3])) * 0.5,
      y: (Number(p[4 * 3 + 1]) + Number(p[8 * 3 + 1])) * 0.5,
    };
  }
  const aim = hand?.aim;
  if (Array.isArray(aim) && aim.length >= 2) return { x: 0.5 + Number(aim[0]) / 2.2, y: 0.5 - Number(aim[1]) / 1.6 };
  return null;
}

function rayScreenPoint(hand) {
  const aim = hand?.aim;
  if (Array.isArray(aim) && aim.length >= 2) {
    // Mesma projeção do cursor do shell (hands.js), para o raio cair onde o olho vê a mão.
    const pt = screenPoint(aim);
    if (Number.isFinite(pt.x) && Number.isFinite(pt.y)) return pt;
  }
  return pinchScreenPoint(hand);
}

/** Tamanho aparente da mão (fração da largura da placa) → profundidade em metros. */
function handDepth(hand) {
  const p = hand?.points;
  let span = 0;
  if (p && p.length >= 63) {
    const palmLen = Math.hypot(Number(p[9 * 3]) - Number(p[0]), Number(p[9 * 3 + 1]) - Number(p[1]));
    const palmWide = Math.hypot(Number(p[17 * 3]) - Number(p[5 * 3]), Number(p[17 * 3 + 1]) - Number(p[5 * 3 + 1]));
    span = Math.max(palmLen, palmWide * 1.25);
  }
  if (!(span > 0.012)) {
    const pw = Number(hand?.palmWidth);
    span = Number.isFinite(pw) && pw > 0.012 ? pw : 0.075;
  }
  // Meia-placa: tan_x total = 2*tan(36°)*1.5 = 2,18. Palma real ≈ 0,10 m.
  const tangent = Math.max(0.02, span * 2 * Math.tan(36 * Math.PI / 180) * 1.5);
  const raw = clamp(0.10 / tangent, DEPTH_MIN, DEPTH_MAX);
  P.lastDepth = P.lastDepth * 0.78 + raw * 0.22;
  return P.lastDepth;
}

/** View → frame da pintura (R⁻¹): é o que prende o traço no espaço. */
function toPaintSpace(viewPoint, out) {
  _qInv.copy(P.content.quaternion).invert();
  return out.copy(viewPoint).applyQuaternion(_qInv);
}

/** Ponto 3D a partir de coordenadas da PLACA (0..1200 x 0..800) — usado pelos atalhos/testes. */
function paintPointFromScreen(sx, sy, depth, out) {
  const tan = {
    x: (clamp(sx, 0, 1) * 2 - 1) * P.camHalfX,
    y: (1 - clamp(sy, 0, 1) * 2) * P.camHalfY,
  };
  viewPointFromTangent(tan, depth, _v);
  return toPaintSpace(_v, out);
}

/** Ponto 3D a partir de um ponto da mão (normalizado 0..1, como o nativo projeta). */
function paintPointFromHand(screen, depth, out) {
  viewPointFromTangent(handTangent(screen), depth, _v);
  return toPaintSpace(_v, out);
}

/* ============================================================ traço / ferramenta */
const _pt = new THREE.Vector3();
const _lastPt = new THREE.Vector3();
const _screenPt = { x: 0, y: 0 };

function newStroke(color, size, neon) {
  return {
    id: ++P.strokeSeq,
    color,
    radius: radiusFor(size),
    neon: Boolean(neon),
    pts: [],
    killed: new Set(),
    startedAt: performance.now(),
  };
}

function finishStroke() {
  const st = P.activeStroke;
  P.activeStroke = null;
  if (!st) return;
  if (st.pts.length < 2) {
    // Um toque sem arrasto não é traço: evita sujeira de pontinhos ao pinçar rápido.
    P.strokes = P.strokes.filter(s => s !== st);
    rebuildStrokes();
    return;
  }
  P.undoStack.push({ type: 'stroke', id: st.id });
  if (P.undoStack.length > 40) P.undoStack.shift();
  P.strokeCount = P.strokes.filter(s => s.pts.length > 1).length;
  emitState();
}

function beginStrokeAt(paintPos) {
  P.pinchLostAt = 0;
  const st = newStroke(P.color, P.size, P.tool === 'neon');
  st.pts.push([paintPos.x, paintPos.y, paintPos.z]);
  P.strokes.push(st);
  P.activeStroke = st;
  // respeita o teto de instâncias: descarta os traços mais antigos
  let segs = 0;
  for (const s of P.strokes) segs += s.pts.length;
  while (segs > SEG_CAPACITY && P.strokes.length > 1) {
    const oldest = P.strokes.find(s => s !== st && s.pts.length > 1);
    if (!oldest) break;
    segs -= oldest.pts.length;
    P.strokes = P.strokes.filter(s => s !== oldest);
    toast('Limite de tinta: o traço mais antigo saiu');
  }
  rebuildStrokes();
}

function addPointToStroke(paintPos) {
  const st = P.activeStroke;
  if (!st) return false;
  const prev = st.pts[st.pts.length - 1];
  const dx = paintPos.x - prev[0];
  const dy = paintPos.y - prev[1];
  const dz = paintPos.z - prev[2];
  const d = Math.hypot(dx, dy, dz);
  if (d < 0.0022) return false;           // jitter parado: não cria bolinhas
  if (d > 0.34) return false;             // salto de tracking: ignora em vez de riscar o mundo
  const steps = d > 0.03 ? Math.min(4, Math.ceil(d / 0.02)) : 1;
  let lastIndex = st.pts.length - 1;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    st.pts.push([prev[0] + dx * t, prev[1] + dy * t, prev[2] + dz * t]);
    const idx = st.pts.length - 1;
    pushSegment(st, lastIndex, idx);
    lastIndex = idx;
  }
  return true;
}

/** Borracha 3D: apaga por proximidade real (o cursor encosta e o segmento sai). */
function eraseAt(paintPos) {
  const power = radiusFor(P.size) * 3.2 + 0.006;
  let removed = 0;
  const items = [];
  for (const st of P.strokes) {
    const r = power + st.radius;
    for (let i = 1; i < st.pts.length; i++) {
      if (st.killed.has(i - 1)) continue;
      const a = st.pts[i - 1];
      const b = st.pts[i];
      // distância ponto → segmento
      _v.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const len2 = _v.lengthSq();
      let t = 0;
      if (len2 > 1e-9) {
        _v2.copy(paintPos).sub(_v.set(a[0], a[1], a[2]));
        t = clamp(_v2.dot(_v) / len2, 0, 1);
      }
      _v.set(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t);
      if (_v.distanceTo(paintPos) <= r) {
        st.killed.add(i - 1);
        st.killed.add(i);
        items.push({ stroke: st, seg: i - 1, points: [i - 1, i] });
        removed++;
      }
    }
  }
  if (removed) {
    P.undoStack.push({ type: 'erase', items });
    if (P.undoStack.length > 40) P.undoStack.shift();
    rebuildStrokes();
  }
  return removed;
}

/* ==================================================================== undo etc. */
export function mrPaintUndo() {
  const entry = P.undoStack.pop();
  if (!entry) {
    toast('Nada para desfazer');
    return false;
  }
  if (entry.type === 'stroke') {
    P.strokes = P.strokes.filter(s => s.id !== entry.id);
  } else if (entry.type === 'erase') {
    for (const it of entry.items) {
      it.stroke.killed.delete(it.seg);
      it.stroke.killed.delete(it.seg + 1);
    }
  } else if (entry.type === 'clear') {
    P.strokes = entry.strokes;
  }
  rebuildStrokes();
  return true;
}

export function mrPaintClear() {
  if (!P.strokes.length) return false;
  P.undoStack.push({ type: 'clear', strokes: P.strokes });
  if (P.undoStack.length > 40) P.undoStack.shift();
  P.strokes = [];
  P.activeStroke = null;
  rebuildStrokes();
  toast('Desenhos apagados');
  return true;
}

export function mrPaintSave({ quiet = false } = {}) {
  try {
    const data = {
      v: 1,
      savedAt: Date.now(),
      strokes: P.strokes
        .filter(s => s.pts.length > 1)
        .map(s => ({
          c: s.color,
          r: s.radius,
          n: s.neon ? 1 : 0,
          k: [...s.killed],
          p: s.pts.map(p => [Number(p[0].toFixed(4)), Number(p[1].toFixed(4)), Number(p[2].toFixed(4))]),
        })),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    if (!quiet) toast(`${data.strokes.length} traço(s) salvos`);
    return true;
  } catch {
    if (!quiet) toast('Não foi possível salvar o desenho');
    return false;
  }
}

export function mrPaintLoad({ quiet = false } = {}) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      if (!quiet) toast('Nenhum desenho salvo ainda');
      return 0;
    }
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.strokes)) return 0;
    const strokes = [];
    for (const s of data.strokes) {
      if (!s || !Array.isArray(s.p) || s.p.length < 2) continue;
      const st = {
        id: ++P.strokeSeq,
        color: typeof s.c === 'string' ? s.c : '#22c55e',
        radius: Number.isFinite(s.r) ? clamp(s.r, 0.0012, 0.014) : radiusFor(9),
        neon: Boolean(s.n),
        pts: s.p.filter(p => Array.isArray(p) && p.length >= 3).map(p => [Number(p[0]), Number(p[1]), Number(p[2])]),
        killed: new Set(Array.isArray(s.k) ? s.k.map(Number).filter(Number.isFinite) : []),
        startedAt: 0,
      };
      if (st.pts.length > 1) strokes.push(st);
    }
    P.strokes = strokes;
    P.activeStroke = null;
    P.undoStack = [];
    rebuildStrokes();
    if (!quiet) toast(strokes.length ? `${strokes.length} traço(s) restaurados` : 'Desenho salvo estava vazio');
    return strokes.length;
  } catch {
    return 0;
  }
}

/* ================================================================= ferramentas */
export function mrPaintSetColor(hex, name) {
  if (typeof hex === 'string') P.color = hex;
  if (typeof name === 'string' && name) P.colorName = name;
  if (P.tool === 'eraser') P.tool = 'pen';
  drawPalette();
  drawPaletteButton();
  drawHud();
  emitState();
  return P.color;
}

export function mrPaintSetTool(tool) {
  P.tool = tool === 'neon' || tool === 'eraser' ? tool : 'pen';
  drawPalette();
  drawPaletteButton();
  drawHud();
  emitState();
  return P.tool;
}

export function mrPaintSetSize(size) {
  const n = clamp(Number(size) || 9, 2, 36);
  P.size = Math.round(n);
  const preset = (P.sizes || []).find(([s]) => Number(s) === P.size);
  P.sizeLabel = preset ? preset[1] : `Pincel ${P.size}px`;
  drawPalette();
  drawPaletteButton();
  emitState();
  return P.size;
}

export function setMrPaintPaletteOpen(force) {
  P.paletteOpen = typeof force === 'boolean' ? force : !P.paletteOpen;
  if (paletteUI.mesh) {
    paletteUI.mesh.visible = P.paletteOpen;
    if (P.paletteOpen) paletteUI.hoverId = '';
  }
  drawPalette();
  drawPaletteButton();
  try { P.onPaletteToggle?.(P.paletteOpen); } catch {}
  emitState();
  return P.paletteOpen;
}

export function toggleMrPaintPalette() {
  return setMrPaintPaletteOpen(!P.paletteOpen);
}

/** API usada pelos testes/atalhos: um traço dado em coordenadas da placa (0..1200, 0..800). */
export function addMrPaintScreenSegment(x0, y0, x1, y1, color, size, tool) {
  const toPlate = (x, y) => [clamp(Number(x) / FULL_W, 0, 1), clamp(Number(y) / FULL_H, 0, 1)];
  const [sx0, sy0] = toPlate(x0, y0);
  const [sx1, sy1] = toPlate(x1, y1);
  const prevColor = P.color;
  const prevSize = P.size;
  const prevTool = P.tool;
  if (typeof color === 'string') P.color = color;
  if (Number.isFinite(Number(size))) P.size = clamp(Number(size), 2, 36);
  if (typeof tool === 'string') P.tool = tool;
  const st = newStroke(P.color, P.size, P.tool === 'neon');
  paintPointFromScreen(sx0, sy0, DEPTH_HOME, _pt);
  st.pts.push([_pt.x, _pt.y, _pt.z]);
  const steps = 6;
  paintPointFromScreen(sx1, sy1, DEPTH_HOME, _lastPt);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    st.pts.push([
      st.pts[i - 1][0] + (_lastPt.x - _pt.x) / steps,
      st.pts[i - 1][1] + (_lastPt.y - _pt.y) / steps,
      st.pts[i - 1][2] + (_lastPt.z - _pt.z) / steps,
    ]);
  }
  P.strokes.push(st);
  P.undoStack.push({ type: 'stroke', id: st.id });
  rebuildStrokes();
  P.color = prevColor;
  P.size = prevSize;
  P.tool = prevTool;
  emitState();
  return P.strokeCount;
}

/* ================================================================= interação UI */
function activateRegion(panel, region, now, hitUv) {
  if (!region) return;
  if (region.kind === 'hint') return;
  // Botões só disparam na BORDA da pinça (pinchDown), então não precisam de debounce: um
  // debounce fixo fazia o botão seguinte a um clique ser engolido. O slider é o único caso
  // contínuo e tem um limite curto só para não redesenhar a textura a cada frame.
  if (region.kind === 'slider') {
    if (now - P.lastActivateMs < 70) return;
    const u = clamp((hitUv?.x ?? 0.5), 0, 1);
    // o slider ocupa a faixa x do painel: converte a fração da placa em fração do controle
    const localX = clamp((u * PAL_W - region.x) / region.w, 0, 1);
    mrPaintSetSize(2 + Math.round(localX * 34));
    P.lastActivateMs = now;
    return;
  }
  P.lastActivateMs = now;
  if (region.kind === 'color') return mrPaintSetColor(region.hex, region.name);
  if (region.kind === 'tool') return mrPaintSetTool(region.tool);
  if (region.kind === 'size') return mrPaintSetSize(region.size);
  if (region.kind === 'act') {
    if (region.act === 'undo') return mrPaintUndo();
    if (region.act === 'clear') return mrPaintClear();
    if (region.act === 'save') return mrPaintSave();
    if (region.act === 'load') return mrPaintLoad();
    if (region.act === 'close') return setMrPaintPaletteOpen(false);
  }
  if (panel === 'hud' && region.act === 'exit') closeMrPaint3d();
  return undefined;
}

/** Raio da mão direita (tangente) → região apontada (paleta, botão da mão esquerda, HUD). */
function hitTestUi(rayTan) {
  if (!P.scene) return null;
  viewPointFromTangent(rayTan, 1, _v2);
  _ray.set(_origin, _v2.normalize());
  const targets = [];
  if (paletteUI.mesh?.visible) {
    targets.push({ panel: 'palette', mesh: paletteUI.mesh, regions: paletteUI.regions, w: PAL_W, h: PAL_H });
  }
  if (buttonUI.mesh?.visible) {
    targets.push({ panel: 'button', mesh: buttonUI.mesh, regions: [buttonUI.region], w: BTN_W, h: BTN_H });
  }
  if (hudUI.mesh?.visible) {
    targets.push({ panel: 'hud', mesh: hudUI.mesh, regions: hudUI.regions, w: HUD_W, h: HUD_H });
  }
  if (!targets.length) return null;
  const hits = _ray.intersectObjects(targets.map(t => t.mesh), false);
  for (const hit of hits) {
    const target = targets.find(t => t.mesh === hit.object);
    if (!target) continue;
    const region = regionAtPanel(target.regions, target.w, target.h, hit.uv);
    // O HUD só "pega" o gesto no botão Sair: passar a mão por cima do selo não interrompe
    // o traço. A paleta aberta (e o botão da mão esquerda) consomem a área inteira.
    if (target.panel === 'hud' && !region) continue;
    return { panel: target.panel, region, uv: hit.uv, point: hit.point };
  }
  return null;
}

/* ================================================================== montagem 3D */
function loadHudLogo() {
  try {
    if (!P.logo) return;
    const img = new Image();
    img.onload = () => { hudUI.logo = img; drawHud(); };
    img.onerror = () => { hudUI.logo = null; };
    img.src = P.logo;
  } catch {
    hudUI.logo = null;
  }
}

function buildScene() {
  const scene = new THREE.Scene();
  scene.matrixWorldAutoUpdate = true;

  const content = new THREE.Group();
  content.name = 'paint-content';
  scene.add(content);
  P.content = content;
  P.paintGroup = content;

  const amb = new THREE.AmbientLight(0xffffff, 1.35);
  scene.add(amb);
  const dir = new THREE.DirectionalLight(0xffffff, 1.15);
  dir.position.set(0.6, 1.2, 1.4);
  scene.add(dir);
  const rim = new THREE.DirectionalLight(0x93c5fd, 0.55);
  rim.position.set(-0.9, -0.4, -1.2);
  scene.add(rim);

  pools = { pen: makePool(penMaterial), neon: makePool(neonMaterial) };
  for (const pool of [pools.pen, pools.neon]) {
    content.add(pool.cyl);
    content.add(pool.sph);
  }

  // Cursor discreto: anel + ponto, sempre de frente para quem olha.
  const cursorGroup = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.0068, 0.0098, 24),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.92, side: THREE.DoubleSide, depthTest: false, toneMapped: false }),
  );
  const core = new THREE.Mesh(
    new THREE.CircleGeometry(0.0026, 14),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthTest: false, toneMapped: false }),
  );
  ring.renderOrder = 20;
  core.renderOrder = 21;
  cursorGroup.add(ring, core);
  cursorGroup.visible = false;
  scene.add(cursorGroup);
  P.cursor = { group: cursorGroup, ring, core };

  // Raio fino da mão direita (só quando está apontando para a interface).
  const beamGeo = new THREE.CylinderGeometry(0.0009, 0.0009, 1, 5, 1, true);
  const beam = new THREE.Mesh(
    beamGeo,
    new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.55, depthTest: false, toneMapped: false }),
  );
  beam.visible = false;
  beam.renderOrder = 19;
  beam.frustumCulled = false;
  scene.add(beam);
  P.beam = beam;

  // Paleta flutuante
  paletteUI.canvas = makeCanvas(PAL_W, PAL_H);
  paletteUI.ctx = paletteUI.canvas.getContext('2d');
  paletteUI.texture = makePanelTexture(paletteUI.canvas);
  paletteUI.regions = palRegions();
  paletteUI.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.46, 0.46 * PAL_H / PAL_W, 1, 1),
    new THREE.MeshBasicMaterial({ map: paletteUI.texture, transparent: true, toneMapped: false }),
  );
  paletteUI.mesh.position.set(0.055, -0.045, -0.50);
  paletteUI.mesh.visible = false;
  paletteUI.mesh.name = 'mr-paint-palette';
  scene.add(paletteUI.mesh);

  // Botão "Paleta" preso à mão esquerda
  buttonUI.canvas = makeCanvas(BTN_W, BTN_H);
  buttonUI.ctx = buttonUI.canvas.getContext('2d');
  buttonUI.texture = makePanelTexture(buttonUI.canvas);
  buttonUI.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.19, 0.19 * BTN_H / BTN_W, 1, 1),
    new THREE.MeshBasicMaterial({ map: buttonUI.texture, transparent: true, toneMapped: false }),
  );
  buttonUI.mesh.position.set(-0.20, -0.12, -0.48);
  buttonUI.mesh.name = 'mr-paint-palette-button';
  scene.add(buttonUI.mesh);
  buttonUI.region = { id: 'palette-btn', kind: 'palette-btn', x: 0, y: 0, w: BTN_W, h: BTN_H };

  // HUD 3D (badge + sair)
  hudUI.canvas = makeCanvas(HUD_W, HUD_H);
  hudUI.ctx = hudUI.canvas.getContext('2d');
  hudUI.texture = makePanelTexture(hudUI.canvas);
  hudUI.regions = [{
    id: 'exit', kind: 'act', act: 'exit',
    x: HUD_W - 236, y: 24, w: 208, h: HUD_H - 48,
  }];
  hudUI.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.40, 0.40 * HUD_H / HUD_W, 1, 1),
    new THREE.MeshBasicMaterial({ map: hudUI.texture, transparent: true, toneMapped: false }),
  );
  hudUI.mesh.position.set(0, 0.245, -0.46);
  hudUI.mesh.name = 'mr-paint-hud';
  scene.add(hudUI.mesh);
  P.hud = hudUI;

  drawPalette();
  drawPaletteButton();
  drawHud();
  return scene;
}

function buildCameras() {
  // fov vertical = 2*atan(metade vertical da placa); aspect = metades da placa (não o
  // aspect do viewport: a placa estica a metade 600x800, e a câmera tem de esticar igual).
  P.camHalfX = P.stereo ? STEREO_HALF_X : MONO_HALF_X;
  P.camHalfY = P.stereo ? STEREO_HALF_Y : MONO_HALF_Y;
  const fov = 2 * Math.atan(P.camHalfY) * 180 / Math.PI;
  const aspect = P.camHalfX / P.camHalfY;
  const camCenter = new THREE.PerspectiveCamera(fov, aspect, 0.03, 30);
  camCenter.position.set(0, 0, 0);
  camCenter.updateProjectionMatrix();
  const eyeL = new THREE.PerspectiveCamera(fov, aspect, 0.03, 30);
  const eyeR = new THREE.PerspectiveCamera(fov, aspect, 0.03, 30);
  eyeL.position.set(-EYE_X, 0, 0);
  eyeR.position.set(EYE_X, 0, 0);
  eyeL.updateProjectionMatrix();
  eyeR.updateProjectionMatrix();
  P.camCenter = camCenter;
  P.eyeL = eyeL;
  P.eyeR = eyeR;
}

/** Normalized screen (0..1) → tangente, com o MESMO span que o nativo usa na silhueta. */
function handTangent(screen) {
  // Só o nativo informa o span real da câmera (mappingX/mappingY). Sem ele, usa a placa:
  // no navegador de preview não existe mão rastreada, então isso é só o caminho seguro.
  const span = native ? screenSpan() : null;
  const w = span && Number(span.w) > 0.6 ? Number(span.w) : P.camHalfX * 2;
  const h = span && Number(span.h) > 0.6 ? Number(span.h) : P.camHalfY * 2;
  return { x: (clamp(screen.x, 0, 1) - 0.5) * w, y: (0.5 - clamp(screen.y, 0, 1)) * h };
}

/** Tangente (x,y a 1 m) + profundidade → ponto 3D no espaço da cena. */
function viewPointFromTangent(tan, depth, out) {
  const len = Math.hypot(tan.x, tan.y, 1);
  return out.set(tan.x, tan.y, -1).multiplyScalar(depth / len);
}

/* ====================================================================== loop */
let fpsAcc = 0;
let fpsN = 0;

function updateHead() {
  const q = coreCamera?.quaternion;
  if (!q) return;
  /*
   * R = q_view(t) * q_view(0)⁻¹: o grupo dos traços gira AO CONTRÁRIO da cabeça, então um
   * ponto guardado no frame da pintura reaparece sempre na mesma direção do mundo — girar a
   * cabeça não arrasta o desenho (é o oposto do que aconteceria desenhando na tela).
   *
   * Ancoragem é rotacional, como em todo o shell do ATMO: o painel do #hud é preso na cabeça
   * (o nativo o desenha só com a projeção), e o passthrough da câmera também é desenhado no
   * frame da cabeça. Compensar também a translação do 6DoF aqui exigiria uma escala por
   * profundidade do traço e transformaria o ruído do estimador de fluxo em tremor no desenho.
   */
  P.content.quaternion.copy(q).multiply(P.q0Inv);
}

function leftHand() {
  return hands.find(h => h && (h.left === true || h.id === 'left')) || null;
}

function rightHand() {
  const right = hands.find(h => h && h.left !== true && h.id !== 'left');
  if (right) return right;
  const left = leftHand();
  const others = hands.filter(h => h && h !== left);
  return others[0] || null;
}

function isPinching(hand) {
  if (!hand) return false;
  if (hand.pinching === true) return true;
  const pinch = Number(hand.pinch);
  return Number.isFinite(pinch) && pinch > 0 && pinch < 0.40;
}

function updateButtonAnchor() {
  const mesh = buttonUI.mesh;
  if (!mesh) return;
  const lh = leftHand();
  const anchor = (lh && (pinchScreenPoint(lh) || rayScreenPoint(lh))) || null;
  if (anchor) {
    // O botão acompanha a mão esquerda no mesmo mapeamento tangente do nativo: fica "na mão".
    const tan = handTangent(anchor);
    viewPointFromTangent(tan, 0.50, _v);
    // O z vem do próprio raio (não é fixo): o raycast da mão direita usa x/z e y/z, então
    // um z "chutado" desalinhava o botão do lugar onde a mão esquerda realmente está.
    mesh.position.set(
      clamp(_v.x, -0.34, 0.34),
      clamp(_v.y - 0.035, -0.30, 0.26),
      _v.z,
    );
    mesh.visible = true;
    P.usedHands = true;
  } else {
    // Sem mão esquerda visível o botão continua acessível, parado à esquerda.
    mesh.visible = true;
    mesh.position.set(-0.185, -0.115, -0.48);
  }
  // O raycast desta frame tem de ver a posição NOVA do botão (senão aponta 1 frame atrasado).
  mesh.updateMatrixWorld(true);
}

function processHands(now, dt) {
  updateButtonAnchor();
  const rh = rightHand();
  const hasHands = hands.length > 0;
  const trackingNow = hasHands ? (hands.length > 1 ? '2 mãos' : '1 mão') : 'aguardando mão';
  if (trackingNow !== P.tracking) {
    P.tracking = trackingNow;
    emitState();
  }

  const cursor = P.cursor;
  if (!rh) {
    cursor.group.visible = false;
    P.beam.visible = false;
    if (P.activeStroke) {
      if (!P.pinchLostAt) P.pinchLostAt = now;
      if (now - P.pinchLostAt > 160) finishStroke();
    }
    P.pinchDown = false;
    P.uiConsumed = false;
    P.hover = null;
    if (P.hoverKey) {
      P.hoverKey = '';
      paletteUI.hoverId = '';
      hudUI.hoverId = '';
      buttonUI.hoverId = '';
      drawPalette(); drawHud(); drawPaletteButton();
    }
    return;
  }

  const ray = rayScreenPoint(rh) || pinchScreenPoint(rh);
  const rayTan = handTangent(ray);
  const hovering = hitTestUi(rayTan);
  const pinchPoint = pinchScreenPoint(rh) || ray;
  const depth = handDepth(rh);

  // Ponto do cursor: mesma projeção do traço, mas em coordenadas de cena (head-locked),
  // então ele fica exatamente sob a pinça nos dois olhos.
  viewPointFromTangent(handTangent(pinchPoint), hovering ? 0.55 : depth, _v);
  cursor.group.position.copy(_v);
  cursor.group.visible = true;

  // cor do cursor = ferramenta atual
  const cursorColor = P.tool === 'eraser' ? 0xa5b4fc : new THREE.Color(P.color).getHex();
  cursor.ring.material.color.setHex(hovering ? 0xffffff : cursorColor);
  cursor.core.material.color.setHex(hovering ? 0x7dd3fc : cursorColor);
  const pulse = hovering ? 1.5 : 1;
  cursor.group.scale.setScalar(pulse * (P.tool === 'eraser' ? 1.7 : 1) * (0.85 + Math.min(0.35, (P.size / 36) * 0.7)));

  // raio de mira
  const wantBeam = Boolean(hovering) || P.paletteOpen;
  if (wantBeam) {
    const end = hovering?.point ? hovering.point : _v;
    viewPointFromTangent(rayTan, 0.42, _v2);
    _dir.subVectors(end, _v2);
    const len = _dir.length();
    if (len > 1e-4) {
      P.beam.visible = true;
      P.beam.position.copy(_v2).addScaledVector(_dir, 0.5);
      P.beam.scale.set(1, len, 1);
      P.beam.quaternion.setFromUnitVectors(_up, _dir.multiplyScalar(1 / len));
    }
  } else {
    P.beam.visible = false;
  }

  // hover da interface (redesenha só quando muda)
  const hoverRegionId = hovering ? (hovering.region?.id || hovering.panel + ':panel') : '';
  const hoverKey = hovering ? hovering.panel + '|' + hoverRegionId : '';
  if (hoverKey !== P.hoverKey) {
    P.hoverKey = hoverKey;
    paletteUI.hoverId = hovering?.panel === 'palette' ? hoverRegionId : '';
    hudUI.hoverId = hovering?.panel === 'hud' ? hoverRegionId : '';
    buttonUI.hoverId = hovering?.panel === 'button' ? 'palette-btn' : '';
    drawPalette(); drawHud(); drawPaletteButton();
  }
  P.hover = hovering;

  const pinching = isPinching(rh);
  const pinchDown = pinching && !P.pinchDown;
  P.pinchDown = pinching;

  if (pinchDown) {
    // 1º: interface. O gesto que começa sobre a UI não desenha.
    if (hovering) {
      P.uiConsumed = true;
      if (hovering.panel === 'button') setMrPaintPaletteOpen(!P.paletteOpen);
      else activateRegion(hovering.panel, hovering.region, now, hovering.uv);
      return;
    }
    P.uiConsumed = false;
  }
  if (!pinching) {
    P.uiConsumed = false;
    // Graça curta: uma perda momentânea da pinça (1-2 frames do detector) emenda o traço em
    // vez de cortá-lo no meio. Sem pinça por mais de 160 ms, o traço fecha de verdade.
    if (P.activeStroke) {
      if (!P.pinchLostAt) P.pinchLostAt = now;
      if (now - P.pinchLostAt > 160) finishStroke();
    }
    return;
  }
  P.pinchLostAt = 0;
  // pinça segurada sobre o slider continua ajustando a grossura
  if (P.uiConsumed) {
    if (hovering?.region?.kind === 'slider') activateRegion('palette', hovering.region, now, hovering.uv);
    return;
  }
  if (hovering) {
    P.uiConsumed = true;
    return;
  }

  // 2º: desenho / borracha em 3D
  paintPointFromHand(pinchPoint, depth, _pt);
  if (P.tool === 'eraser') {
    if (P.activeStroke) finishStroke();
    eraseAt(_pt);
    return;
  }
  if (!P.activeStroke) {
    beginStrokeAt(_pt);
    return;
  }
  // Suaviza o ponto do traço: rápido quando a mão anda, firme quando ela para.
  const last = P.activeStroke.pts[P.activeStroke.pts.length - 1];
  _lastPt.set(last[0], last[1], last[2]);
  const dist = _lastPt.distanceTo(_pt);
  const alpha = dist > 0.02 ? 0.92 : 0.55;
  _lastPt.lerp(_pt, alpha);
  addPointToStroke(_lastPt);
  emitState();
}

function renderStereo() {
  const r = P.renderer;
  if (!r) return;
  const w = r.domElement.width || FULL_W;
  const h = r.domElement.height || FULL_H;
  if (P.stereo) {
    const half = w >> 1;
    r.setViewport(0, 0, half, h);
    r.setScissor(0, 0, half, h);
    r.setScissorTest(true);
    r.render(P.scene, P.eyeL);
    r.setViewport(half, 0, w - half, h);
    r.setScissor(half, 0, w - half, h);
    r.render(P.scene, P.eyeR);
  } else {
    r.setScissorTest(false);
    r.setViewport(0, 0, w, h);
    r.render(P.scene, P.camCenter);
  }
}

function frame(now) {
  if (!P.active) return;
  P.raf = requestAnimationFrame(frame);
  const dt = Math.min(0.05, Math.max(0.001, (now - P.last) / 1000));
  P.last = now;
  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 1) {
    P.fps = Math.round(fpsN / fpsAcc);
    fpsAcc = 0; fpsN = 0;
  }
  try {
    updateHead();
    P.scene.updateMatrixWorld(true);
    processHands(now, dt);
    // O HUD é uma textura: redesenhá-la a cada ponto do traço subiria 1024x168 px por frame.
    if (uiDirty && now - P.lastUiDraw >= 110) {
      uiDirty = false;
      P.lastUiDraw = now;
      drawHud();
      drawPaletteButton();
    }
    renderStereo();
  } catch (err) {
    // Um erro de frame nunca pode derrubar o jogo inteiro: reporta e segue.
    if (!P.reportedError) {
      P.reportedError = true;
      try { toast('paintMR: ' + (err?.message || err)); } catch {}
    }
  }
}

/* =============================================================== ciclo de vida */
let currentApi = null;

export function isMrPaint3dActive() {
  return P.active;
}

export function closeMrPaint3d() {
  if (!P.active && !P.root) return;
  P.active = false;
  S.mrPaintGame = false;
  if (P.raf) {
    cancelAnimationFrame(P.raf);
    P.raf = 0;
  }
  try {
    // Guarda o desenho ao sair, sem toast: a mensagem ficaria por cima do menu.
    if (P.strokes.length) mrPaintSave({ quiet: true });
  } catch {}
  P.activeStroke = null;
  P.pinchDown = false;
  P.uiConsumed = false;
  if (P.renderer) {
    try { P.renderer.dispose(); } catch {}
    P.renderer = null;
  }
  if (P.root) {
    P.root.remove();
    P.root = null;
  }
  P.canvas = null;
  P.scene = null;
  P.content = null;
  pools = null;
  P.strokes = [];
  P.undoStack = [];
  P.strokeCount = 0;
  P.pointCount = 0;
  // Texturas/geometrias dos painéis: sem isso, abrir/fechar o jogo várias vezes vazaria
  // uma textura por painel em cada ciclo. As geometrias dos traços são compartilhadas
  // (GEO_CYL/GEO_SPH), então essas NÃO são descartadas aqui.
  for (const ui of [paletteUI, hudUI, buttonUI]) {
    try { ui.texture?.dispose(); } catch {}
    try { ui.mesh?.geometry?.dispose(); } catch {}
    try { ui.mesh?.material?.dispose(); } catch {}
    ui.texture = null;
    ui.canvas = null;
    ui.ctx = null;
    ui.mesh = null;
  }
  P.cursor = null;
  P.beam = null;
  for (const w of P.savedWins) {
    if (w && wins.includes(w)) w.setHidden(false);
  }
  P.savedWins = [];
  if (!S.spatialLauncher) {
    setDockHidden(false);
    setDockVisible(true);
  }
  window.__gorillaStereoOverlay = false;
  window.__gorillaOnHands = null;
  window.__mrPaintState = null;
  window.NativeXR?.setMrGameMode?.(false);
  if (native) window.NativeXR?.handVisuals?.(!!S.handDraw);
  css3d?.invalidate?.();
  try { P.onPaletteToggle?.(false); } catch {}
  try { P.onClosed?.(); } catch {}
  emitState();
  currentApi = null;
}

export function openMrPaint3d(options = {}) {
  if (P.active && P.root) return currentApi;
  P.colors = Array.isArray(options.colors) && options.colors.length ? options.colors : [
    ['#2563eb', 'Azul'], ['#ef4444', 'Vermelho'], ['#111827', 'Preto'], ['#ffffff', 'Branco'],
    ['#7e22ce', 'Roxo'], ['#a855f7', 'Violeta'], ['#eab308', 'Amarelo'], ['#22c55e', 'Verde'],
    ['#64748b', 'Cinza'], ['#78350f', 'Marrom'],
  ];
  P.sizes = Array.isArray(options.sizes) && options.sizes.length ? options.sizes : [
    [4, 'Pincel P'], [9, 'Pincel M'], [16, 'Pincel G'], [26, 'Pincel XG'],
  ];
  P.logo = options.logo || './icons/paintdrawer-logo.jpg';
  P.onExit = options.onExit || null;
  P.onPaletteToggle = options.onPaletteToggle || null;
  P.onState = options.onState || null;
  P.onClosed = options.onClosed || null;
  P.reportedError = false;
  P.paletteOpen = false;
  P.tool = 'pen';
  P.color = '#22c55e';
  P.colorName = 'Verde';
  P.size = 9;
  P.sizeLabel = 'Pincel M';
  P.strokes = [];
  P.undoStack = [];
  P.strokeCount = 0;
  P.pointCount = 0;
  P.lastDepth = DEPTH_HOME;
  P.tracking = 'aguardando mão';
  P.hoverKey = '';
  P.anchorQ.copy(coreCamera?.quaternion || _q.identity());
  P.q0Inv.copy(P.anchorQ).invert();

  P.active = true;
  S.mrPaintGame = true;
  setPassthrough(true);

  // Sem esqueleto de mão: silhueta/raio nativos desligados, cursor discreto é o nosso.
  window.NativeXR?.setMrGameMode?.(true);
  window.NativeXR?.handVisuals?.(false);

  P.savedWins = [];
  for (const w of wins) {
    if (!w.hidden) {
      w.setHidden(true);
      P.savedWins.push(w);
    }
  }
  setDockHidden(true);
  setDockVisible(false);

  // Overlay do jogo (mesmo esquema do ShootTheDie: dentro do #atlas em modo estéreo).
  const root = document.createElement('div');
  root.id = 'mr-paint-overlay';
  root.dataset.mrPaintOverlay = '1';
  root.dataset.mrPaint3d = '1';
  root.style.cssText = [
    'position:fixed', 'left:0', 'top:0',
    native ? 'width:1200px' : 'width:100vw',
    native ? 'height:800px' : 'height:100vh',
    'z-index:190', 'background:transparent', 'overflow:hidden',
    'pointer-events:none', 'user-select:none', 'font-family:Inter,system-ui,sans-serif',
  ].join(';');

  const canvas = document.createElement('canvas');
  canvas.dataset.mrPaintCanvas = '1';
  canvas.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;display:block;background:transparent';
  canvas.width = native ? FULL_W : Math.max(600, Math.min(1600, window.innerWidth || FULL_W));
  canvas.height = native ? FULL_H : Math.max(400, Math.min(1000, window.innerHeight || FULL_H));
  root.appendChild(canvas);
  P.root = root;
  P.canvas = canvas;

  const atlasHost = document.getElementById('atlas');
  if (native && atlasHost) {
    atlasHost.appendChild(root);
    window.__gorillaStereoOverlay = true;
    P.stereo = true;
  } else {
    document.body.appendChild(root);
    P.stereo = false;
  }

  // WebGL (transparente: o passthrough da câmera continua aparecendo por baixo).
  try {
    P.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump',
      stencil: false,
    });
    P.renderer.setPixelRatio(1);
    P.renderer.setSize(canvas.width, canvas.height, false);
    P.renderer.setClearColor(0x000000, 0);
    P.renderer.outputColorSpace = THREE.SRGBColorSpace;
    P.renderer.setScissorTest(true);
  } catch (err) {
    P.renderer = null;
  }

  P.scene = buildScene();
  buildCameras();
  loadHudLogo();

  window.__gorillaOnHands = () => {};
  window.__mrPaintState = P;

  // Restaura o último desenho salvo (se houver).
  mrPaintLoad({ quiet: true });

  drawPalette();
  drawHud();
  drawPaletteButton();
  try { P.onPaletteToggle?.(false); } catch {}
  emitState();
  css3d?.invalidate?.();

  P.last = performance.now();
  P.raf = requestAnimationFrame(frame);

  currentApi = {
    root,
    canvas,
    getState: getMrPaintState,
    togglePalette: toggleMrPaintPalette,
    setPaletteOpen: setMrPaintPaletteOpen,
    setColor: mrPaintSetColor,
    setSize: mrPaintSetSize,
    setTool: mrPaintSetTool,
    undo: mrPaintUndo,
    clear: mrPaintClear,
    save: mrPaintSave,
    load: mrPaintLoad,
    addScreenSegment: addMrPaintScreenSegment,
    close: closeMrPaint3d,
  };
  return currentApi;
}

if (typeof window !== 'undefined') {
  window.nextvrMrPaint3d = {
    open: openMrPaint3d,
    close: closeMrPaint3d,
    state: getMrPaintState,
    stroke: addMrPaintScreenSegment,
    palette: setMrPaintPaletteOpen,
    undo: mrPaintUndo,
    clear: mrPaintClear,
    save: mrPaintSave,
    load: mrPaintLoad,
  };
}
