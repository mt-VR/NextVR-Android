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
  hairStyle: 'spiky',
  hairColor: '#18181b',
  visor: 'pico4',
  outfit: 'jacket',
  outfitColor: '#2563eb',
  pantsColor: '#09090b',
  accessory: 'headphones',
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
  const pitch = Number(opts.pitch) || 0.08;
  const portrait = !!opts.portrait;
  const lh = opts.leftHand;
  const rh = opts.rightHand;
  // Build 89: zoom do visualizador 3D (1 = padrao). O avatar e' desenhado maior, nao esticado,
  // porque a escala entra na projecao e nao num ctx.scale depois do desenho.
  const zoom = Math.max(.4, Math.min(2.4, Number(opts.zoom) || 1));

  ctx.save();
  ctx.clearRect(0, 0, w, h);

  // Fundo 3D Studio com iluminação volumétrica
  if (portrait) {
    const bg = ctx.createRadialGradient(w * 0.5, h * 0.42, w * 0.06, w * 0.5, h * 0.5, w * 0.68);
    bg.addColorStop(0, '#2a3346');
    bg.addColorStop(0.65, '#131722');
    bg.addColorStop(1, '#090b10');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
  } else {
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#161922');
    bg.addColorStop(0.58, '#1f2430');
    bg.addColorStop(1, '#10131a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
  }

  // Câmera e projeção 3D
  const cx = w * 0.5;
  const cy = portrait ? h * 0.80 : h * 0.53;
  const scale = (portrait ? (w / 118) : (Math.min(w, h) / 235)) * zoom;
  const camDist = 340;
  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch);

  const project3D = (x, y, z) => {
    // Rotação Y (yaw 360°)
    const rx = x * cosY + z * sinY;
    const rz0 = -x * sinY + z * cosY;
    // Rotação X (pitch leve de câmara 3D)
    const ry = y * cosP - rz0 * sinP;
    const rz = y * sinP + rz0 * cosP;
    const fov = camDist / Math.max(90, camDist - rz);
    return {
      x: cx + rx * scale * fov,
      y: cy - ry * scale * fov,
      z: rz,
      s: scale * fov,
    };
  };

  // Pedestal 3D com grade em perspectiva
  if (!portrait) {
    const baseP = project3D(0, -96, 0);
    // Grade circular 3D no chão
    for (const ringR of [48, 34, 20]) {
      ctx.beginPath();
      for (let i = 0; i <= 40; i++) {
        const a = (i / 40) * Math.PI * 2;
        const p = project3D(Math.cos(a) * ringR, -96, Math.sin(a) * ringR);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = ringR === 48 ? 'rgba(56, 189, 248, 0.45)' : 'rgba(148, 163, 184, 0.16)';
      ctx.lineWidth = ringR === 48 ? 2.2 : 1;
      ctx.stroke();
    }
    // Raios do piso 3D
    for (let i = 0; i < 8; i++) {
      const a = yaw + (i / 8) * Math.PI * 2;
      const p0 = project3D(0, -96, 0);
      const p1 = project3D(Math.cos(a) * 48, -96, Math.sin(a) * 48);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    // Sombra 3D suave sob os pés
    const shGrad = ctx.createRadialGradient(baseP.x, baseP.y, 2, baseP.x, baseP.y, 44 * scale);
    shGrad.addColorStop(0, 'rgba(0, 0, 0, 0.58)');
    shGrad.addColorStop(0.65, 'rgba(56, 189, 248, 0.14)');
    shGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = shGrad;
    ctx.beginPath();
    ctx.ellipse(baseP.x, baseP.y, 44 * scale, 13 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Aura Neon 3D
  if (c.accessory === 'aura') {
    const auraP = project3D(0, 8, -10);
    const auraR = (68 + Math.sin(t * 4) * 4) * scale;
    const ag = ctx.createRadialGradient(auraP.x, auraP.y, auraR * 0.15, auraP.x, auraP.y, auraR);
    ag.addColorStop(0, 'rgba(56, 189, 248, 0.34)');
    ag.addColorStop(0.55, 'rgba(168, 85, 247, 0.18)');
    ag.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = ag;
    ctx.beginPath();
    ctx.arc(auraP.x, auraP.y, auraR, 0, Math.PI * 2);
    ctx.fill();
  }

  const breathe = Math.sin(t * 2.6) * 1.4;
  const drawQueue = [];

  // Primitiva 1: Esfera 3D com iluminação especular, difusa e rim light
  const pushSphere3D = (x, y, z, r, colorHex, opts3d = {}) => {
    const p = project3D(x, y, z);
    drawQueue.push({
      z: p.z + (opts3d.zBias || 0),
      draw: () => {
        const rad = Math.max(1.5, r * p.s);
        const sx = opts3d.scaleX || 1;
        const sy = opts3d.scaleY || 1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.scale(sx, sy);
        const g = ctx.createRadialGradient(-rad * 0.32, -rad * 0.34, rad * 0.08, 0, 0, rad);
        g.addColorStop(0, shadeHex(colorHex, opts3d.specDelta ?? 48));
        g.addColorStop(0.45, colorHex);
        g.addColorStop(0.84, shadeHex(colorHex, -34));
        g.addColorStop(1, shadeHex(colorHex, -58));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, rad, 0, Math.PI * 2);
        ctx.fill();
        // Rim light 3D
        ctx.strokeStyle = opts3d.rimColor || 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = Math.max(0.8, 1.15 * scale);
        ctx.stroke();
        ctx.restore();
      },
    });
  };

  // Primitiva 2: Cápsula/Cilindro 3D sombreado lateralmente
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
        const rad0 = Math.max(1.5, r0 * p0.s);
        const rad1 = Math.max(1.5, r1 * p1.s);
        const nx = len > 1e-3 ? -dy / len : -1;
        const ny = len > 1e-3 ? dx / len : 0;
        const mx = (p0.x + p1.x) * 0.5;
        const my = (p0.y + p1.y) * 0.5;
        const maxR = Math.max(rad0, rad1);

        const grad = ctx.createLinearGradient(
          mx - nx * maxR,
          my - ny * maxR,
          mx + nx * maxR,
          my + ny * maxR
        );
        grad.addColorStop(0, shadeHex(colorHex, 38));
        grad.addColorStop(0.32, shadeHex(colorHex, 14));
        grad.addColorStop(0.72, colorHex);
        grad.addColorStop(1, shadeHex(colorHex, -46));

        const ang = Math.atan2(dy, dx);
        ctx.save();
        ctx.beginPath();
        ctx.arc(p0.x, p0.y, rad0, ang + Math.PI * 0.5, ang + Math.PI * 1.5);
        ctx.arc(p1.x, p1.y, rad1, ang - Math.PI * 0.5, ang + Math.PI * 0.5);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = opts3d.rimColor || 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = Math.max(0.75, 1.0 * scale);
        ctx.stroke();
        ctx.restore();
      },
    });
  };

  // Pernas 3D (com suporte a Motion Tracker)
  if (!portrait) {
    const lLegLift = lh?.palm ? Math.max(0, (0.55 - lh.palm[1]) * 18) : 0;
    const rLegLift = rh?.palm ? Math.max(0, (0.55 - rh.palm[1]) * 18) : 0;

    for (const side of [-1, 1]) {
      const lift = side < 0 ? lLegLift : rLegLift;
      const hipX = side * 10.5, hipY = -20 + breathe * 0.3, hipZ = 0;
      const kneeX = side * 11.2, kneeY = -55 + lift * 0.65, kneeZ = 4 + lift * 0.35;
      const ankleX = side * 11.5, ankleY = -88 + lift, ankleZ = 1 + lift * 0.15;
      const toeX = side * 12.2, toeY = -92 + lift, toeZ = 14 + lift * 0.15;

      // Coxa 3D
      pushCapsule3D(hipX, hipY, hipZ, kneeX, kneeY, kneeZ, 8.2, 6.8, c.pantsColor);
      // Joelho 3D
      pushSphere3D(kneeX, kneeY, kneeZ, 6.5, shadeHex(c.pantsColor, 10));
      // Canela 3D
      pushCapsule3D(kneeX, kneeY, kneeZ, ankleX, ankleY, ankleZ, 6.6, 5.4, shadeHex(c.pantsColor, -8));
      // Bota/Tênis 3D volumétrico
      pushCapsule3D(ankleX, ankleY, ankleZ - 2, toeX, toeY, toeZ, 6.2, 5.8, '#e2e8f0', {
        rimColor: 'rgba(56, 189, 248, 0.45)',
      });
    }
  }

  // Pelve e Torso 3D (com volumetria real)
  const pelvisY = -18 + breathe * 0.4;
  const chestY = 18 + breathe;
  pushCapsule3D(0, pelvisY, 0, 0, chestY, 0, 16.5, 20.5, c.outfitColor);
  // Ombros 3D esféricos
  pushSphere3D(-20.5, chestY - 2, 0, 7.8, shadeHex(c.outfitColor, 12));
  pushSphere3D(20.5, chestY - 2, 0, 7.8, shadeHex(c.outfitColor, 12));

  // Detalhes 3D do traje na frente do peito (ordenados por Z da superfície frontal)
  const frontChest = project3D(0, (pelvisY + chestY) * 0.5, 18.5);
  drawQueue.push({
    z: frontChest.z + 1.5,
    draw: () => {
      if (cosY <= -0.25) return; // de costas não mostra detalhe frontal
      ctx.save();
      if (c.outfit === 'jacket') {
        const topP = project3D(0, chestY + 2, 18);
        const botP = project3D(0, pelvisY + 2, 16.5);
        ctx.strokeStyle = '#09090b';
        ctx.lineWidth = Math.max(2, 4.5 * scale * Math.max(0.2, cosY));
        ctx.beginPath();
        ctx.moveTo(topP.x, topP.y);
        ctx.lineTo(botP.x, botP.y);
        ctx.stroke();
        // Zíper metálico 3D
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = Math.max(1, 1.4 * scale);
        ctx.stroke();
      } else if (c.outfit === 'armor') {
        const coreP = project3D(0, chestY - 6, 19.5);
        const rCore = Math.max(3, 7.5 * coreP.s);
        const cg = ctx.createRadialGradient(coreP.x, coreP.y, 1, coreP.x, coreP.y, rCore);
        cg.addColorStop(0, '#ffffff');
        cg.addColorStop(0.45, '#38bdf8');
        cg.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(coreP.x, coreP.y, rCore, 0, Math.PI * 2);
        ctx.fill();
      } else if (c.outfit === 'hoodie') {
        const pocketP = project3D(0, pelvisY + 9, 17.5);
        ctx.fillStyle = shadeHex(c.outfitColor, -24);
        ctx.beginPath();
        ctx.roundRect(pocketP.x - 11 * pocketP.s * Math.max(0.3, cosY), pocketP.y - 4 * pocketP.s, 22 * pocketP.s * Math.max(0.3, cosY), 9 * pocketP.s, 4 * pocketP.s);
        ctx.fill();
      }
      ctx.restore();
    },
  });

  // Mochila Jet 3D nas costas (quando gira o personagem 3D ela aparece na frente!)
  if (c.accessory === 'backpack') {
    pushCapsule3D(-8, pelvisY + 6, -16, -8, chestY - 2, -16, 6.2, 6.8, '#334155', {
      rimColor: 'rgba(56, 189, 248, 0.5)',
    });
    pushCapsule3D(8, pelvisY + 6, -16, 8, chestY - 2, -16, 6.2, 6.8, '#334155', {
      rimColor: 'rgba(56, 189, 248, 0.5)',
    });
    pushSphere3D(-8, pelvisY + 2, -17, 4.2, '#38bdf8', { specDelta: 65 });
    pushSphere3D(8, pelvisY + 2, -17, 4.2, '#38bdf8', { specDelta: 65 });
  }

  // Braços 3D articulados (ombro -> cotovelo -> pulso -> mão 3D)
  const calcArmJoints3D = (side) => {
    const shX = side * 21.5, shY = chestY - 2, shZ = 0;
    const handTrack = side < 0 ? lh : rh;
    if (handTrack?.palm) {
      const hx = side * (16 + (handTrack.palm[0] - 0.5) * 38);
      const hy = chestY - (handTrack.palm[1] - 0.35) * 65;
      const hz = 18;
      return {
        sh: [shX, shY, shZ],
        el: [side * 25, (shY + hy) * 0.5 - 6, 8],
        wr: [hx, hy, hz],
      };
    }
    if (c.pose === 'wave' && side > 0) {
      const wv = Math.sin(t * 6.5) * 8;
      return {
        sh: [shX, shY, shZ],
        el: [side * 31, shY + 8, 6],
        wr: [side * (35 + wv * 0.6), shY + 28, 12],
      };
    }
    if (c.pose === 'hero') {
      return {
        sh: [shX, shY, shZ],
        el: [side * 30, shY - 12, 4],
        wr: [side * 17, pelvisY + 6, 10],
      };
    }
    if (c.pose === 'peace' && side > 0) {
      return {
        sh: [shX, shY, shZ],
        el: [side * 28, shY - 4, 10],
        wr: [side * 24, shY + 20, 18],
      };
    }
    const sw = Math.sin(t * 2.2 + side) * 2.5;
    return {
      sh: [shX, shY, shZ],
      el: [side * 25, shY - 18, sw],
      wr: [side * 24, pelvisY - 4, 5 + sw],
    };
  };

  for (const side of [-1, 1]) {
    const j = calcArmJoints3D(side);
    const sleeveHex = c.outfit === 'tshirt' ? c.skin : shadeHex(c.outfitColor, -6);
    pushCapsule3D(j.sh[0], j.sh[1], j.sh[2], j.el[0], j.el[1], j.el[2], 6.4, 5.5, sleeveHex);
    pushSphere3D(j.el[0], j.el[1], j.el[2], 5.2, sleeveHex);
    pushCapsule3D(j.el[0], j.el[1], j.el[2], j.wr[0], j.wr[1], j.wr[2], 5.2, 4.4, c.outfit === 'tshirt' ? c.skin : shadeHex(c.outfitColor, 4));
    // Mão 3D esférica
    pushSphere3D(j.wr[0], j.wr[1], j.wr[2], 5.4, c.skin);
  }

  // Pescoço 3D
  const neckY = chestY + 6;
  const headY = chestY + 26;
  pushCapsule3D(0, chestY + 1, 0, 0, neckY + 5, 0, 6.2, 5.8, shadeHex(c.skin, -14));

  // Cabeça 3D volumétrica
  pushSphere3D(0, headY, 2, 21.5, c.skin, { scaleY: 1.06 });

  // Orelhas 3D
  pushSphere3D(-20.8, headY - 1, 1, 4.2, shadeHex(c.skin, -10));
  pushSphere3D(20.8, headY - 1, 1, 4.2, shadeHex(c.skin, -10));

  // Rosto 3D (olhos, sobrancelhas, nariz 3D e sorriso na superfície da esfera da cabeça)
  const faceCenter = project3D(0, headY, 22.5);
  drawQueue.push({
    z: faceCenter.z + 1.2,
    draw: () => {
      if (cosY <= -0.15) return; // rosto oculto quando de costas
      ctx.save();
      // Nariz 3D
      const noseP = project3D(0, headY - 2.5, 23.8);
      ctx.fillStyle = shadeHex(c.skin, -24);
      ctx.beginPath();
      ctx.arc(noseP.x, noseP.y, Math.max(1.5, 2.3 * noseP.s), 0, Math.PI * 2);
      ctx.fill();

      // Boca 3D
      const mouthL = project3D(-4.8, headY - 8.5, 21.5);
      const mouthC = project3D(0, headY - 10.2, 22.4);
      const mouthR = project3D(4.8, headY - 8.5, 21.5);
      ctx.strokeStyle = '#7c2d12';
      ctx.lineWidth = Math.max(1.4, 2.1 * scale);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(mouthL.x, mouthL.y);
      ctx.quadraticCurveTo(mouthC.x, mouthC.y, mouthR.x, mouthR.y);
      ctx.stroke();

      // Olhos 3D (quando sem visor fechado)
      if (c.visor === 'none' || c.visor === 'glasses') {
        for (const ex of [-7.5, 7.5]) {
          const eyeP = project3D(ex, headY + 2.5, 21.6);
          ctx.fillStyle = '#09090b';
          ctx.beginPath();
          ctx.arc(eyeP.x, eyeP.y, Math.max(1.5, 2.7 * eyeP.s), 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(eyeP.x - 0.8 * eyeP.s, eyeP.y - 0.8 * eyeP.s, Math.max(0.7, 1.0 * eyeP.s), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    },
  });

  // Cabelo 3D volumétrico (cúpula 3D + mechas 3D ao redor do crânio)
  if (c.hairStyle !== 'none') {
    // Cúpula superior e traseira do cabelo em 3D
    pushSphere3D(0, headY + 6.5, -1.5, 21.2, c.hairColor, { scaleY: 0.92, zBias: 0.8 });
    pushSphere3D(0, headY + 2, -6.5, 19.5, shadeHex(c.hairColor, -14));

    if (c.hairStyle === 'spiky') {
      const spikes = [
        [-13, headY + 22, 6, 7.5],
        [-5, headY + 25, 8, 8.2],
        [4, headY + 25, 8, 8.2],
        [13, headY + 21, 6, 7.5],
        [0, headY + 23, -6, 8.0],
      ];
      for (const [sx, sy, sz, sr] of spikes) {
        pushCapsule3D(sx * 0.55, headY + 13, sz * 0.5, sx, sy, sz, sr, 2.4, c.hairColor);
      }
    } else if (c.hairStyle === 'curly') {
      const curls = [
        [-16, headY + 13, 6], [-9, headY + 19, 9], [0, headY + 21, 10],
        [9, headY + 19, 9], [16, headY + 13, 6], [-15, headY + 12, -8],
        [15, headY + 12, -8], [0, headY + 16, -13],
      ];
      for (const [cx0, cy0, cz0] of curls) {
        pushSphere3D(cx0, cy0, cz0, 7.8, c.hairColor);
      }
    } else if (c.hairStyle === 'long') {
      pushCapsule3D(-18.5, headY + 6, -2, -20.5, headY - 22, -4, 6.8, 5.2, c.hairColor);
      pushCapsule3D(18.5, headY + 6, -2, 20.5, headY - 22, -4, 6.8, 5.2, c.hairColor);
      pushCapsule3D(0, headY + 4, -15, 0, headY - 24, -17, 13.5, 10.5, shadeHex(c.hairColor, -12));
    } else if (c.hairStyle === 'ponytail') {
      pushSphere3D(0, headY + 10, -18, 6.8, c.hairColor);
      pushCapsule3D(0, headY + 10, -18, 0, headY - 12, -26, 6.5, 4.0, shadeHex(c.hairColor, -10));
    }
  }

  // Visor / Headset 3D (PICO 4 Pro com cinta lateral e traseira 3D completa!)
  if (c.visor === 'pico4') {
    // Cinta 3D lateral esquerda, direita e bateria traseira PICO 4 Pro
    pushCapsule3D(-20.5, headY + 2.5, 12, -21, headY + 2.5, -16, 3.4, 3.2, '#e4e4e7');
    pushCapsule3D(20.5, headY + 2.5, 12, 21, headY + 2.5, -16, 3.4, 3.2, '#e4e4e7');
    pushCapsule3D(-14, headY + 2.5, -18.5, 14, headY + 2.5, -18.5, 4.8, 4.8, '#d4d4d8');
    // Visor frontal 3D curvo PICO 4 Pro
    pushCapsule3D(-13.5, headY + 2.5, 19.5, 13.5, headY + 2.5, 19.5, 8.2, 8.2, '#18181b', {
      rimColor: '#f4f4f5',
      zBias: 3.5,
    });
    const vFront = project3D(0, headY + 2.5, 24.5);
    drawQueue.push({
      z: vFront.z + 4,
      draw: () => {
        if (cosY <= -0.1) return;
        const vw = 28 * vFront.s * Math.max(0.25, cosY);
        const vh = 12.5 * vFront.s;
        const g = ctx.createLinearGradient(vFront.x - vw * 0.5, vFront.y - vh * 0.5, vFront.x + vw * 0.5, vFront.y + vh * 0.5);
        g.addColorStop(0, '#38bdf8');
        g.addColorStop(0.28, '#1e293b');
        g.addColorStop(0.68, '#09090b');
        g.addColorStop(1, '#334155');
        ctx.save();
        ctx.fillStyle = g;
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = Math.max(1.2, 2.0 * scale);
        ctx.beginPath();
        ctx.roundRect(vFront.x - vw * 0.5, vFront.y - vh * 0.5, vw, vh, 6 * vFront.s);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      },
    });
  } else if (c.visor === 'cyber') {
    pushCapsule3D(-13, headY + 2.5, 20.2, 13, headY + 2.5, 20.2, 5.2, 5.2, '#06b6d4', {
      rimColor: '#a5f3fc',
      zBias: 3.5,
    });
  } else if (c.visor === 'glasses') {
    pushSphere3D(-7.5, headY + 2.5, 21.5, 5.2, '#09090b', { rimColor: '#e2e8f0', zBias: 3 });
    pushSphere3D(7.5, headY + 2.5, 21.5, 5.2, '#09090b', { rimColor: '#e2e8f0', zBias: 3 });
  }

  // Acessórios de cabeça 3D
  if (c.accessory === 'headphones') {
    pushSphere3D(-22.5, headY + 1, 1, 6.2, '#18181b', { rimColor: '#38bdf8' });
    pushSphere3D(22.5, headY + 1, 1, 6.2, '#18181b', { rimColor: '#38bdf8' });
    pushCapsule3D(-19, headY + 15, 0, 19, headY + 15, 0, 3.2, 3.2, '#27272a', { rimColor: '#38bdf8' });
  } else if (c.accessory === 'crown') {
    pushCapsule3D(-11, headY + 22, 3, 11, headY + 22, 3, 5.2, 5.2, '#facc15', { rimColor: '#fef08a', zBias: 2 });
    pushSphere3D(0, headY + 26, 5, 3.5, '#ef4444', { zBias: 3 });
  }

  // Ordena todas as partes 3D de trás para frente (Painter's Algorithm 3D) e desenha
  drawQueue.sort((a, b) => a.z - b.z);
  for (const item of drawQueue) {
    item.draw();
  }

  ctx.restore();
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
