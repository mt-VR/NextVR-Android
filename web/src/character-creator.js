// Criador de Personagem 3D do Jogo (ATMOXR Avatar Studio 3D)
import { settings as S, save, emit } from './core.js';

export const CHARACTER_KEY = 'atmoxr.character.v1';

export const CHARACTER_OPTIONS = Object.freeze({
  skins: [
    { id: '#f5d0b5', label: 'Claro' },
    { id: '#e2a982', label: 'Trigo' },
    { id: '#c68652', label: 'Moreno' },
    { id: '#8d5524', label: 'Escuro' },
    { id: '#5c3818', label: 'Ébano' },
    { id: '#7dd3fc', label: 'Cyber Azul' },
  ],
  hairStyles: [
    { id: 'spiky', label: 'Espetado' },
    { id: 'short', label: 'Curto' },
    { id: 'curly', label: 'Cacheado' },
    { id: 'long', label: 'Longo' },
    { id: 'ponytail', label: 'Rabo de Cavalo' },
    { id: 'none', label: 'Careca' },
  ],
  hairColors: [
    { id: '#18181b', label: 'Preto' },
    { id: '#5c3a21', label: 'Castanho' },
    { id: '#eab308', label: 'Loiro' },
    { id: '#dc2626', label: 'Ruivo' },
    { id: '#f4f4f5', label: 'Platinado' },
    { id: '#38bdf8', label: 'Neon Azul' },
    { id: '#a855f7', label: 'Neon Roxo' },
  ],
  visors: [
    { id: 'pico4', label: 'Headset PICO 4 Pro' },
    { id: 'cyber', label: 'Visor Cyber LED' },
    { id: 'glasses', label: 'Óculos Escuros' },
    { id: 'none', label: 'Sem Óculos' },
  ],
  outfits: [
    { id: 'jacket', label: 'Jaqueta XR' },
    { id: 'hoodie', label: 'Moletom Gamer' },
    { id: 'armor', label: 'Armadura Cyber' },
    { id: 'tshirt', label: 'Camiseta Sport' },
  ],
  outfitColors: [
    { id: '#2563eb', label: 'Azul Royal' },
    { id: '#18181b', label: 'Preto Stealth' },
    { id: '#dc2626', label: 'Vermelho' },
    { id: '#16a34a', label: 'Verde Neon' },
    { id: '#9333ea', label: 'Roxo' },
    { id: '#f4f4f5', label: 'Branco PICO' },
  ],
  pantsColors: [
    { id: '#1e293b', label: 'Jeans Escuro' },
    { id: '#09090b', label: 'Preto Tático' },
    { id: '#cbd5e1', label: 'Cinza Tech' },
    { id: '#1d4ed8', label: 'Azul' },
  ],
  accessories: [
    { id: 'headphones', label: 'Headphone Gamer' },
    { id: 'crown', label: 'Coroa Dourada' },
    { id: 'backpack', label: 'Mochila Jet' },
    { id: 'aura', label: 'Aura Neon' },
    { id: 'none', label: 'Nenhum' },
  ],
  poses: [
    { id: 'idle', label: 'Padrão' },
    { id: 'wave', label: 'Acenando' },
    { id: 'hero', label: 'Herói XR' },
    { id: 'peace', label: 'Vitória' },
  ],
});

export const DEFAULT_CHARACTER = Object.freeze({
  skin: '#e2a982',
  hairStyle: 'short',
  hairColor: '#18181b',
  visor: 'pico4',
  // Build 92 — padrão igual ao avatar do PICO: camiseta amarela, calça escura e headset branco.
  outfit: 'tshirt',
  outfitColor: '#f2d64b',
  pantsColor: '#2b3040',
  accessory: 'none',
  pose: 'idle',
});

export function loadCharacter() {
  try {
    const raw = localStorage.getItem(CHARACTER_KEY);
    if (!raw) return { ...DEFAULT_CHARACTER };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_CHARACTER, ...(parsed && typeof parsed === 'object' ? parsed : {}) };
  } catch {
    return { ...DEFAULT_CHARACTER };
  }
}

export function saveCharacter(cfg, { updateProfileAvatar = true } = {}) {
  const merged = { ...DEFAULT_CHARACTER, ...(cfg || {}) };
  try {
    localStorage.setItem(CHARACTER_KEY, JSON.stringify(merged));
  } catch {}
  if (updateProfileAvatar) {
    try {
      const dataUrl = renderCharacterPortraitDataUrl(merged, 128);
      if (dataUrl) {
        S.profileAvatar = dataUrl;
        save(S);
        emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar });
      }
    } catch {}
  }
  emit('character-updated', merged);
  return merged;
}

function hexToRgb(hex) {
  const h = String(hex || '#888888').replace('#', '');
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h.padEnd(6, '8');
  const num = parseInt(full.slice(0, 6), 16) || 0;
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function shadeHex(hex, delta) {
  const [r, g, b] = hexToRgb(hex);
  const cl = v => Math.max(0, Math.min(255, Math.round(v + delta)));
  return `rgb(${cl(r)}, ${cl(g)}, ${cl(b)})`;
}

function mixHex(hexA, hexB, t) {
  const [r1, g1, b1] = hexToRgb(hexA);
  const [r2, g2, b2] = hexToRgb(hexB);
  const cl = v => Math.max(0, Math.min(255, Math.round(v)));
  return `rgb(${cl(r1 + (r2 - r1) * t)}, ${cl(g1 + (g2 - g1) * t)}, ${cl(b1 + (b2 - b1) * t)})`;
}

/**
 * Renderiza o personagem em 3D real (projeção em perspectiva 3D, volumes cilíndricos/esféricos 3D
 * ordenados por profundidade Z com iluminação volumétrica 3D, rim light e rotação 360°).
 */
export function drawCharacter2D(ctx, w, h, charCfg, opts = {}) {
  if (!ctx) return;
  const c = { ...DEFAULT_CHARACTER, ...(charCfg || {}) };
  const t = Number(opts.time) || 0;
  const yaw = Number(opts.yaw) || 0;
  const pitch = Number(opts.pitch) || 0.05;
  const portrait = !!opts.portrait;
  const lh = opts.leftHand;
  const rh = opts.rightHand;
  // Build 89: zoom do visualizador 3D (1 = padrão) — a escala entra na projeção, não num
  // ctx.scale depois do desenho (senão o corpo estica).
  const zoom = Math.max(.4, Math.min(2.4, Number(opts.zoom) || 1));

  ctx.save();
  ctx.clearRect(0, 0, w, h);
  drawStudioBackdrop(ctx, w, h, portrait);

  /*
   * Build 92 — o avatar virou uma pessoa de verdade.
   *
   * Antes a cabeça tinha 21,5 de raio para um corpo de 161 de altura: um boneco de ~3,7 cabeças,
   * com contorno preto em tudo. O usuário mandou o print do avatar do PICO ("o boneco em 3D é
   * desse jeito, não aquele feio") e pediu um corpo humano: ~7,5 cabeças, ombros na largura certa,
   * braços caídos ao lado do corpo, camiseta amarela, calça escura e headset branco.
   *
   * Unidades: y para cima, chão em GROUND = -96, cabeça no topo (headY = 57). Altura total ≈ 163,
   * cabeça ≈ 22 de diâmetro → 7,4 cabeças. A projeção em perspectiva continua a mesma.
   */
  /* Esqueleto (unidades): chão -96, quadril -14, ombro 26, topo da cabeça ~57.
     Altura ≈ 153 com cabeça de 21,8 de diâmetro → 7 cabeças, como uma pessoa de verdade. */
  const GROUND = -96;
  const breathe = Math.sin(t * 2.6) * 0.7;
  const hipY = -14 + breathe * 0.3;
  const chestY = 30 + breathe;
  const headY = 46.5 + breathe;
  const headR = 11.4;

  const cx = w * 0.5;
  const scale = portrait
    ? (h / 104) * zoom
    : Math.min(w / 92, h / 178) * zoom;
  const cy = portrait ? (h * 0.30 + headY * scale) : (h * 0.5 - 19.5 * scale);
  const camDist = 430;
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch);

  const project3D = (x, y, z) => {
    const rx = x * cosY + z * sinY;
    const rz0 = -x * sinY + z * cosY;
    const ry = y * cosP - rz0 * sinP;
    const rz = y * sinP + rz0 * cosP;
    const fov = camDist / Math.max(120, camDist - rz);
    return { x: cx + rx * scale * fov, y: cy - ry * scale * fov, z: rz, s: scale * fov };
  };

  /*
   * Corpo em "silhueta varrida" (Build 92).
   *
   * Empilhar cápsulas deixava o boneco com cara de peças soltas: bolas nos ombros, cintura do
   * tamanho do peito. Aqui cada parte do corpo é uma tabela de perfis (y → meia-largura e
   * meia-profundidade) e o contorno é uma curva contínua. Como cada seção é uma elipse, a
   * meia-largura na tela é `hypot(w·cos(yaw), d·sin(yaw))` — o corpo gira 360° mantendo volume,
   * e o desenho fica com a silhueta redonda de gente de verdade, como no avatar do PICO.
   */
  const profileAt = (table, y) => {
    if (y <= table[0][0]) return { w: table[0][1], d: table[0][2] };
    const last = table[table.length - 1];
    if (y >= last[0]) return { w: last[1], d: last[2] };
    for (let i = 1; i < table.length; i++) {
      const [y1, w1, d1] = table[i];
      if (y <= y1) {
        const [y0, w0, d0] = table[i - 1];
        const k = (y - y0) / (y1 - y0 || 1);
        return { w: w0 + (w1 - w0) * k, d: d0 + (d1 - d0) * k };
      }
    }
    return { w: last[1], d: last[2] };
  };

  /** Desenha uma parte do corpo como contorno contínuo, com luz vindo da esquerda. */
  const sweepBody = (table, colorHex, opts2 = {}) => {
    const y0 = table[0][0];
    const y1 = table[table.length - 1][0];
    const steps = Math.max(8, Math.min(30, Math.round((y1 - y0) / 2)));
    const center = opts2.centerX || 0;
    const left = [], right = [];
    let maxW = 0;
    for (let i = 0; i <= steps; i++) {
      const y = y0 + ((y1 - y0) * i) / steps;
      const pr = profileAt(table, y);
      const half = Math.hypot(pr.w * cosY, pr.d * sinY);
      maxW = Math.max(maxW, half);
      const a = project3D(center - pr.w, y, 0);
      const b = project3D(center + pr.w, y, 0);
      const mx = (a.x + b.x) * 0.5;
      left.push([mx - half * a.s, a.y]);
      right.push([mx + half * b.s, b.y]);
    }
    const tracePath = () => {
      ctx.beginPath();
      ctx.moveTo(left[0][0], left[0][1]);
      for (let i = 1; i < left.length; i++) ctx.lineTo(left[i][0], left[i][1]);
      for (let i = right.length - 1; i >= 0; i--) ctx.lineTo(right[i][0], right[i][1]);
      ctx.closePath();
    };

    const mid = project3D(center, (y0 + y1) * 0.5, 0);
    const halfPx = Math.max(3, maxW * mid.s);
    const shift = (opts2.lightShift ?? 1) * (cosY >= 0 ? 1 : -1);
    const g = ctx.createLinearGradient(mid.x - halfPx * shift, mid.y - halfPx * 0.5, mid.x + halfPx * shift, mid.y + halfPx * 0.35);
    g.addColorStop(0, shadeHex(colorHex, opts2.hi ?? 26));
    g.addColorStop(0.28, shadeHex(colorHex, 8));
    g.addColorStop(0.62, colorHex);
    g.addColorStop(1, shadeHex(colorHex, opts2.lo ?? -40));
    ctx.save();
    tracePath();
    ctx.fillStyle = g;
    ctx.fill();
    // Luz de recorte bem discreta no lado iluminado (sem contorno preto).
    tracePath();
    ctx.strokeStyle = 'rgba(255,255,255,.10)';
    ctx.lineWidth = Math.max(0.5, 0.7 * scale);
    ctx.stroke();
    ctx.restore();
  };

  // Sombra de estúdio no chão (sem grade neon: o avatar do PICO é limpo).
  if (!portrait) {
    const base = project3D(0, GROUND, 0);
    const shadow = ctx.createRadialGradient(base.x, base.y, 1, base.x, base.y, 34 * scale);
    shadow.addColorStop(0, 'rgba(0,0,0,.52)');
    shadow.addColorStop(0.62, 'rgba(0,0,0,.20)');
    shadow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = shadow;
    ctx.beginPath();
    ctx.ellipse(base.x, base.y, 34 * scale, 9.5 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Aura Neon (opcional)
  if (c.accessory === 'aura') {
    const auraP = project3D(0, 12, -14);
    const auraR = (58 + Math.sin(t * 4) * 3) * scale;
    const ag = ctx.createRadialGradient(auraP.x, auraP.y, auraR * 0.15, auraP.x, auraP.y, auraR);
    ag.addColorStop(0, 'rgba(125, 211, 252, 0.30)');
    ag.addColorStop(0.55, 'rgba(168, 85, 247, 0.16)');
    ag.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = ag;
    ctx.beginPath();
    ctx.arc(auraP.x, auraP.y, auraR, 0, Math.PI * 2);
    ctx.fill();
  }

  const drawQueue = [];

  // Primitiva 1: esfera 3D com luz difusa e brilho especular (sem contorno preto).
  const pushSphere3D = (x, y, z, r, colorHex, opts3d = {}) => {
    const p = project3D(x, y, z);
    drawQueue.push({
      z: p.z + (opts3d.zBias || 0),
      draw: () => {
        const rad = Math.max(1.2, r * p.s);
        const sx = opts3d.scaleX || 1;
        const sy = opts3d.scaleY || 1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.scale(sx, sy);
        const g = ctx.createRadialGradient(-rad * 0.34, -rad * 0.38, rad * 0.06, 0, 0, rad);
        g.addColorStop(0, shadeHex(colorHex, opts3d.specDelta ?? 34));
        g.addColorStop(0.5, colorHex);
        g.addColorStop(0.88, shadeHex(colorHex, -26));
        g.addColorStop(1, shadeHex(colorHex, -48));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, rad, 0, Math.PI * 2);
        ctx.fill();
        if (opts3d.rimColor) {
          ctx.strokeStyle = opts3d.rimColor;
          ctx.lineWidth = Math.max(0.6, 0.9 * scale);
          ctx.stroke();
        }
        ctx.restore();
      },
    });
  };

  // Primitiva 2: cápsula/cilindro 3D com sombreado lateral.
  const pushCapsule3D = (x0, y0, z0, x1, y1, z1, r0, r1, colorHex, opts3d = {}) => {
    const p0 = project3D(x0, y0, z0);
    const p1 = project3D(x1, y1, z1);
    const zMid = (p0.z + p1.z) * 0.5 + (opts3d.zBias || 0);
    drawQueue.push({
      z: zMid,
      draw: () => {
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const len = Math.hypot(dx, dy);
        const rad0 = Math.max(1.2, r0 * p0.s);
        const rad1 = Math.max(1.2, r1 * p1.s);
        const nx = len > 1e-3 ? -dy / len : -1;
        const ny = len > 1e-3 ? dx / len : 0;
        const mx = (p0.x + p1.x) * 0.5;
        const my = (p0.y + p1.y) * 0.5;
        const maxR = Math.max(rad0, rad1);
        const grad = ctx.createLinearGradient(
          mx - nx * maxR, my - ny * maxR, mx + nx * maxR, my + ny * maxR
        );
        grad.addColorStop(0, shadeHex(colorHex, 28));
        grad.addColorStop(0.34, shadeHex(colorHex, 10));
        grad.addColorStop(0.74, colorHex);
        grad.addColorStop(1, shadeHex(colorHex, -38));
        const ang = Math.atan2(dy, dx);
        ctx.save();
        ctx.beginPath();
        ctx.arc(p0.x, p0.y, rad0, ang + Math.PI * 0.5, ang + Math.PI * 1.5);
        ctx.arc(p1.x, p1.y, rad1, ang - Math.PI * 0.5, ang + Math.PI * 0.5);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        if (opts3d.rimColor) {
          ctx.strokeStyle = opts3d.rimColor;
          ctx.lineWidth = Math.max(0.6, 0.9 * scale);
          ctx.stroke();
        }
        ctx.restore();
      },
    });
  };

  const isShirt = c.outfit === 'tshirt';
  const skin = c.skin;
  const shirt = c.outfitColor;
  const pants = c.pantsColor;
  const shoeColor = '#edeef2';

  /* ------------------------------------------------------------------ pernas */
  const lLegLift = lh?.palm ? Math.max(0, (0.55 - lh.palm[1]) * 14) : 0;
  const rLegLift = rh?.palm ? Math.max(0, (0.55 - rh.palm[1]) * 14) : 0;

  // Bacia: uma peça só, de calça, ligando as duas pernas.
  sweepBody([
    [hipY + 7, 8.8, 7.0],
    [hipY - 2, 9.0, 7.1],
    [hipY - 9, 8.0, 6.6],
  ], pants, { hi: 26, lo: -36 });

  // Pernas: coxa cheia, joelho, panturrilha e tornozelo fino.
  const legTables = [];
  for (const side of [-1, 1]) {
    const lift = side < 0 ? lLegLift : rLegLift;
    const table = [
      [hipY - 6, 5.2, 6.0],
      [-30, 4.9, 5.4],
      [-52 + lift * 0.35, 4.6, 4.9],
      [-66 + lift * 0.6, 4.5, 4.7],
      [-80 + lift, 3.6, 3.6],
      [-86 + lift, 3.0, 3.0],
    ];
    legTables.push({ side, lift, table });
    sweepBody(table, pants, { centerX: side * 5.7, hi: 26, lo: -38 });
  }

  // Costura central: sem ela as duas pernas viram um bloco só no escuro.
  drawQueue.push({
    z: project3D(0, -44, 3).z + 1,
    draw: () => {
      const top = project3D(0, hipY - 12, 4.0);
      const bot = project3D(0, -78, 3.6);
      ctx.save();
      ctx.strokeStyle = 'rgba(0,0,0,.55)';
      ctx.lineWidth = Math.max(1.2, 1.9 * scale);
      ctx.beginPath();
      ctx.moveTo(top.x, top.y);
      ctx.lineTo(bot.x, bot.y);
      ctx.stroke();
      ctx.restore();
    },
  });

  // Tênis (branco com sola escura) + sensor do Motion Tracker quando ligado.
  for (const { side, lift } of legTables) {
    const ankle = [side * 6.0, -85 + lift, 0];
    const toe = [side * 6.2, -92.5 + lift, 9];
    pushCapsule3D(ankle[0], ankle[1] + 2.2, ankle[2], toe[0], toe[1], toe[2], 3.5, 2.9, shoeColor);
    pushSphere3D(toe[0], toe[1] - 0.2, toe[2] + 1.2, 2.7, '#dfe1e6');
    pushCapsule3D(ankle[0], ankle[1] - 2.6, ankle[2] + 0.8, toe[0], toe[1] - 2.2, toe[2], 2.1, 1.9, '#3f3f46');
    if (opts.motionPads) {
      pushSphere3D(ankle[0], ankle[1] + 3.2, ankle[2] + 3.2, 2.2, '#84c400', { zBias: 8 });
    }
  }

  /* ------------------------------------------------------------------- tronco */
  // Bacia, cintura, peito e ombros num contorno só: é o que dá a leitura de pessoa.
  const torsoTable = [
    [hipY - 2, 9.4, 7.3],
    [hipY + 6, 8.9, 7.0],
    [2, 8.6, 6.9],
    [9, 9.7, 7.5],
    [16, 10.9, 8.0],
    [22, 11.7, 7.9],
    [26, 11.2, 7.5],
    [28.5, 8.6, 6.4],
    [30.5, 5.6, 4.9],
  ];
  sweepBody(torsoTable, shirt, { hi: 30, lo: -44 });

  // Mangas curtas: a camiseta cobre o ombro e o começo do braço.
  const armJoints = side => {
    const sh = [side * 10.6, chestY - 4, 0];
    const handTrack = side < 0 ? lh : rh;
    if (handTrack?.palm) {
      const hx = side * (11 + (handTrack.palm[0] - 0.5) * 28);
      const hy = chestY - (handTrack.palm[1] - 0.35) * 50;
      const hz = 8;
      return { sh, el: [side * 17, (sh[1] + hy) * 0.5 - 3, 4], wr: [hx, hy, hz] };
    }
    if (c.pose === 'wave' && side > 0) {
      const wv = Math.sin(t * 6.5) * 5;
      return { sh, el: [side * 17.5, chestY - 2, 3], wr: [side * (19 + wv * 0.5), chestY + 15, 7] };
    }
    if (c.pose === 'hero') {
      return { sh, el: [side * 17.5, chestY - 14, 2], wr: [side * 8.5, hipY + 6, 5] };
    }
    if (c.pose === 'peace' && side > 0) {
      return { sh, el: [side * 16.5, chestY - 5, 5], wr: [side * 13, chestY + 9, 9] };
    }
    const sw = Math.sin(t * 2.2 + side) * 1.6;
    return { sh, el: [side * 15.2, 4, 1.2 + sw * 0.4], wr: [side * 15.4, -20, 3 + sw] };
  };

  for (const side of [-1, 1]) {
    const j = armJoints(side);
    // Manga curta: só o começo do braço é camiseta, o resto é pele (como no avatar do PICO).
    const sleeveT = 0.46;
    const sleeveEnd = [
      j.sh[0] + (j.el[0] - j.sh[0]) * sleeveT,
      j.sh[1] + (j.el[1] - j.sh[1]) * sleeveT,
      j.sh[2] + (j.el[2] - j.sh[2]) * sleeveT,
    ];
    if (isShirt) {
      pushCapsule3D(j.sh[0] * 0.92, j.sh[1] + 2.2, j.sh[2], sleeveEnd[0], sleeveEnd[1], sleeveEnd[2], 4.1, 3.7, shirt);
      pushCapsule3D(sleeveEnd[0], sleeveEnd[1], sleeveEnd[2], j.el[0], j.el[1], j.el[2], 3.5, 3.2, skin);
    } else {
      pushCapsule3D(j.sh[0] * 0.92, j.sh[1] + 2.2, j.sh[2], j.el[0], j.el[1], j.el[2], 4.1, 3.7, shadeHex(shirt, -4));
    }
    pushCapsule3D(j.el[0], j.el[1], j.el[2], j.wr[0], j.wr[1], j.wr[2], 3.5, 2.9, skin);
    pushSphere3D(j.wr[0], j.wr[1], j.wr[2], 3.4, skin);
  }

  // Detalhes do traje na frente do peito
  const torsoFront = project3D(0, (hipY + chestY) * 0.5, 10.5);
  drawQueue.push({
    z: torsoFront.z + 2,
    draw: () => {
      if (cosY <= -0.2) return;
      ctx.save();
      const face = Math.max(0.25, cosY);
      if (c.outfit === 'jacket') {
        const top = project3D(0, chestY + 1, 10.2);
        const bot = project3D(0, hipY + 4, 9.6);
        ctx.strokeStyle = 'rgba(9,9,11,.75)';
        ctx.lineWidth = Math.max(1.2, 1.6 * scale * face);
        ctx.beginPath();
        ctx.moveTo(top.x, top.y);
        ctx.lineTo(bot.x, bot.y);
        ctx.stroke();
      } else if (c.outfit === 'armor') {
        const coreP = project3D(0, chestY - 8, 11.5);
        const rCore = Math.max(2, 4.6 * coreP.s);
        const cg = ctx.createRadialGradient(coreP.x, coreP.y, 0.5, coreP.x, coreP.y, rCore);
        cg.addColorStop(0, '#ffffff');
        cg.addColorStop(0.4, '#7dd3fc');
        cg.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(coreP.x, coreP.y, rCore, 0, Math.PI * 2);
        ctx.fill();
      } else if (c.outfit === 'hoodie') {
        const pocketP = project3D(0, hipY + 11, 10.2);
        ctx.fillStyle = shadeHex(shirt, -22);
        ctx.beginPath();
        ctx.roundRect(pocketP.x - 6.4 * pocketP.s, pocketP.y - 2.6 * pocketP.s,
          12.8 * pocketP.s, 5.4 * pocketP.s, 2.2 * pocketP.s);
        ctx.fill();
      } else if (isShirt) {
        // Gola redonda + barra da camiseta: o que dá a leitura de "camiseta" de longe.
        const collar = project3D(0, chestY - 1.2, 9.6);
        ctx.strokeStyle = shadeHex(shirt, -26);
        ctx.lineWidth = Math.max(0.8, 1.0 * scale * face);
        ctx.beginPath();
        ctx.ellipse(collar.x, collar.y, 4.2 * collar.s * face, 1.5 * collar.s, 0, 0, Math.PI);
        ctx.stroke();
      }
      ctx.restore();
    },
  });

  if (c.accessory === 'backpack') {
    pushCapsule3D(-6, hipY + 8, -9.5, -6, chestY - 4, -9.5, 4.2, 4.6, '#334155');
    pushCapsule3D(6, hipY + 8, -9.5, 6, chestY - 4, -9.5, 4.2, 4.6, '#334155');
  }

  /* --------------------------------------------------------------------- cabeça */
  // Pescoço: curto e encaixado no tronco (nada de cano aparecendo).
  pushCapsule3D(0, chestY - 2, 0, 0, headY - headR + 1.5, 0, 4.0, 3.7, skin, { rimColor: 'rgba(255,255,255,.10)' });
  pushSphere3D(0, headY, 1, headR, skin, { scaleY: 1.05 });
  pushSphere3D(-(headR - 0.5), headY - 0.6, 0.6, 2.3, shadeHex(skin, -10));
  pushSphere3D(headR - 0.5, headY - 0.6, 0.6, 2.3, shadeHex(skin, -10));

  // Rosto (só quando o visor não cobre)
  const faceZ = headR * 0.94;
  const faceCenter = project3D(0, headY, faceZ);
  drawQueue.push({
    z: faceCenter.z + 1.4,
    draw: () => {
      if (cosY <= -0.1) return;
      if (!(c.visor === 'none' || c.visor === 'glasses')) return;
      ctx.save();
      const face = Math.max(0.3, cosY);
      // Olhos
      for (const ex of [-4.2, 4.2]) {
        const eyeP = project3D(ex, headY + 1.4, faceZ);
        ctx.fillStyle = '#1c1917';
        ctx.beginPath();
        ctx.ellipse(eyeP.x, eyeP.y, Math.max(0.9, 1.25 * eyeP.s * face), Math.max(0.9, 1.5 * eyeP.s), 0, 0, Math.PI * 2);
        ctx.fill();
      }
      // Sobrancelhas
      ctx.strokeStyle = shadeHex(c.hairColor, 6);
      ctx.lineWidth = Math.max(0.8, 0.9 * scale);
      ctx.lineCap = 'round';
      for (const ex of [-3.9, 3.9]) {
        const b = project3D(ex, headY + 3.3, faceZ - 0.2);
        ctx.beginPath();
        ctx.moveTo(b.x - 1.5 * b.s, b.y + 0.2 * b.s);
        ctx.lineTo(b.x + 1.5 * b.s, b.y - 0.2 * b.s);
        ctx.stroke();
      }
      // Nariz
      const noseP = project3D(0, headY - 0.8, faceZ + 0.9);
      ctx.fillStyle = shadeHex(skin, -20);
      ctx.beginPath();
      ctx.ellipse(noseP.x, noseP.y, Math.max(0.7, 1.0 * noseP.s), Math.max(1, 1.4 * noseP.s), 0, 0, Math.PI * 2);
      ctx.fill();
      // Boca discreta
      const mouthL = project3D(-2.1, headY - 4.4, faceZ - 0.3);
      const mouthC = project3D(0, headY - 5.1, faceZ + 0.1);
      const mouthR = project3D(2.1, headY - 4.4, faceZ - 0.3);
      ctx.strokeStyle = 'rgba(120, 53, 15, .85)';
      ctx.lineWidth = Math.max(0.9, 1.05 * scale);
      ctx.beginPath();
      ctx.moveTo(mouthL.x, mouthL.y);
      ctx.quadraticCurveTo(mouthC.x, mouthC.y, mouthR.x, mouthR.y);
      ctx.stroke();
      ctx.restore();
    },
  });

  /* --------------------------------------------------------------------- cabelo */
  const hair = c.hairColor;
  if (c.hairStyle !== 'none') {
    // Touca + franja: de frente aparece o topo do cabelo, atrás desce até a nuca.
    pushSphere3D(0, headY + 4.4, -0.6, headR * 1.0, hair, { scaleY: 0.72 });
    pushSphere3D(0, headY + 2.0, -4.6, headR * 0.92, hair, { scaleY: 0.92 });
    pushSphere3D(0, headY + 6.6, -3.0, headR * 0.86, hair, { scaleY: 0.55, zBias: 0.5 });
    // Franja na testa (só na frente, some quando o personagem vira de costas)
    if (c.hairStyle !== 'none' && c.visor === 'pico4') {
      drawQueue.push({
        z: project3D(0, headY + 6, headR).z + 2,
        draw: () => {
          if (cosY <= 0.05) return;
          const a = project3D(-headR * 0.62, headY + 5.2, headR * 0.72);
          const b = project3D(headR * 0.62, headY + 5.2, headR * 0.72);
          const t2 = project3D(0, headY + headR * 0.95, headR * 0.4);
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(t2.x, t2.y - 2 * a.s, b.x, b.y);
          ctx.quadraticCurveTo((a.x + b.x) * 0.5, (a.y + b.y) * 0.5 - 1.6 * a.s, a.x, a.y);
          ctx.closePath();
          ctx.fillStyle = hair;
          ctx.fill();
          ctx.restore();
        },
      });
    }
    if (c.hairStyle === 'spiky') {
      for (const [sx, sy, sz, sr] of [
        [-6.4, headY + 11, 3, 3.4], [-2.4, headY + 12.5, 4, 3.8],
        [2.4, headY + 12.5, 4, 3.8], [6.4, headY + 10.5, 3, 3.4], [0, headY + 11.5, -3, 3.6],
      ]) {
        pushCapsule3D(sx * 0.5, headY + 6.5, sz * 0.5, sx, sy, sz, sr, 1.1, hair);
      }
    } else if (c.hairStyle === 'curly') {
      for (const [dx, dy, dz] of [
        [-7.6, headY + 6.4, 3], [-4.2, headY + 9.2, 4.4], [0, headY + 10.2, 4.8],
        [4.2, headY + 9.2, 4.4], [7.6, headY + 6.4, 3], [-7.2, headY + 5.8, -4],
        [7.2, headY + 5.8, -4], [0, headY + 8, -6.4],
      ]) {
        pushSphere3D(dx, dy, dz, 3.9, hair);
      }
    } else if (c.hairStyle === 'long') {
      pushCapsule3D(-9.6, headY + 3, -1, -10.6, headY - 12, -2, 3.4, 2.6, hair);
      pushCapsule3D(9.6, headY + 3, -1, 10.6, headY - 12, -2, 3.4, 2.6, hair);
      pushCapsule3D(0, headY + 2, -7.8, 0, headY - 13, -8.8, 7.0, 5.4, shadeHex(hair, -10));
    } else if (c.hairStyle === 'ponytail') {
      pushSphere3D(0, headY + 5, -9, 3.4, hair);
      pushCapsule3D(0, headY + 5, -9, 0, headY - 6, -13, 3.2, 2.0, shadeHex(hair, -8));
    }
  }

  /* --------------------------------------------------------------- visor/headset */
  if (c.visor === 'pico4') {
    // Headset branco do PICO: cinta na cabeça, bateria atrás e a frente escura.
    pushCapsule3D(-(headR - 0.4), headY + 2, 4.2, -(headR + 0.2), headY + 2, -6.8, 1.3, 1.2, '#eceef1');
    pushCapsule3D(headR - 0.4, headY + 2, 4.2, headR + 0.2, headY + 2, -6.8, 1.3, 1.2, '#eceef1');
    pushCapsule3D(-6.2, headY + 2, -8.2, 6.2, headY + 2, -8.2, 1.9, 1.9, '#e2e4e8');
    pushCapsule3D(-6.2, headY + 2, 8.0, 6.2, headY + 2, 8.0, 3.5, 3.5, '#f4f5f7', { zBias: 3 });
    const vFront = project3D(0, headY + 1.4, 12.4);
    drawQueue.push({
      z: vFront.z + 4,
      draw: () => {
        if (cosY <= -0.1) return;
        const face = Math.max(0.25, cosY);
        const vw = 13.8 * vFront.s * face;
        const vh = 6.8 * vFront.s;
        const g = ctx.createLinearGradient(vFront.x - vw * 0.5, vFront.y - vh * 0.5, vFront.x + vw * 0.5, vFront.y + vh * 0.5);
        g.addColorStop(0, '#2b2f3a');
        g.addColorStop(0.5, '#0b0d12');
        g.addColorStop(1, '#23262f');
        ctx.save();
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect(vFront.x - vw * 0.5, vFront.y - vh * 0.5, vw, vh, 2.4 * vFront.s);
        ctx.fill();
        // Reflexo suave do vidro
        ctx.strokeStyle = 'rgba(255,255,255,.22)';
        ctx.lineWidth = Math.max(0.6, 0.8 * scale);
        ctx.stroke();
        ctx.restore();
      },
    });
  } else if (c.visor === 'cyber') {
    pushCapsule3D(-6.4, headY + 1.4, 9.6, 6.4, headY + 1.4, 9.6, 2.8, 2.8, '#06b6d4', { zBias: 3 });
  } else if (c.visor === 'glasses') {
    pushSphere3D(-3.9, headY + 1.4, 10, 2.7, '#101014', { zBias: 3 });
    pushSphere3D(3.9, headY + 1.4, 10, 2.7, '#101014', { zBias: 3 });
  }

  /* ----------------------------------------------------------------- acessórios */
  if (c.accessory === 'headphones') {
    pushSphere3D(-(headR + 0.4), headY + 0.4, 0.4, 3.0, '#1b1b1f');
    pushSphere3D(headR + 0.4, headY + 0.4, 0.4, 3.0, '#1b1b1f');
    pushCapsule3D(-(headR - 1.2), headY + 5.6, 0, headR - 1.2, headY + 5.6, 0, 1.5, 1.5, '#2a2a30');
  } else if (c.accessory === 'crown') {
    pushCapsule3D(-5.6, headY + 11.2, 1.4, 5.6, headY + 11.2, 1.4, 2.6, 2.6, '#facc15', { zBias: 2 });
    pushSphere3D(0, headY + 13.2, 2.4, 1.8, '#ef4444', { zBias: 3 });
  }

  // Ordena tudo de trás para frente (pintor) e desenha.
  drawQueue.sort((a, b) => a.z - b.z);
  for (const item of drawQueue) item.draw();

  ctx.restore();
}

/** Fundo do estúdio: parede escura com luz suave vinda de cima. */
function drawStudioBackdrop(ctx, w, h, portrait) {
  if (portrait) {
    const bg = ctx.createRadialGradient(w * 0.5, h * 0.34, w * 0.05, w * 0.5, h * 0.55, w * 0.85);
    bg.addColorStop(0, '#3a4152');
    bg.addColorStop(0.62, '#1b1f29');
    bg.addColorStop(1, '#0b0d12');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    return;
  }
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#262b36');
  bg.addColorStop(0.55, '#1a1e27');
  bg.addColorStop(0.78, '#141821');
  bg.addColorStop(1, '#0d1016');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  const glow = ctx.createRadialGradient(w * 0.5, h * 0.22, 4, w * 0.5, h * 0.3, w * 0.7);
  glow.addColorStop(0, 'rgba(190, 205, 235, .16)');
  glow.addColorStop(1, 'rgba(190, 205, 235, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
}

export const drawCharacter3D = drawCharacter2D;

export function renderCharacterPortraitDataUrl(charCfg, size = 128) {
  if (typeof document === 'undefined') return '';
  const cv = document.createElement('canvas');
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext('2d');
  if (!ctx) return '';
  drawCharacter2D(ctx, size, size, charCfg || loadCharacter(), { portrait: true, time: 0, yaw: 0.18 });
  try {
    return cv.toDataURL('image/png');
  } catch {
    return '';
  }
}
