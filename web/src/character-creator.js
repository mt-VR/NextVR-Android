import { settings as S, save, emit } from './core.js';

export const CHARACTER_OPTIONS = {
  skins: [
    { id: '#f8d9c0', label: 'Clara' },
    { id: '#f3c6a5', label: 'Média Clara' },
    { id: '#d99b72', label: 'Morena' },
    { id: '#a86b43', label: 'Morena Escura' },
    { id: '#6b3e26', label: 'Negra' },
    { id: '#38bdf8', label: 'Cyber Azul' },
  ],
  hairStyles: [
    { id: 'spiky', label: 'Espetado' },
    { id: 'short', label: 'Curto' },
    { id: 'curly', label: 'Cacheado' },
    { id: 'long', label: 'Longo' },
    { id: 'mohawk', label: 'Moicano' },
    { id: 'cap', label: 'Boné ATMO' },
  ],
  hairColors: [
    { id: '#18181b', label: 'Preto' },
    { id: '#5c3a21', label: 'Castanho' },
    { id: '#eab308', label: 'Loiro' },
    { id: '#ef4444', label: 'Vermelho' },
    { id: '#38bdf8', label: 'Neon Azul' },
    { id: '#a855f7', label: 'Roxo' },
    { id: '#f8fafc', label: 'Platinado' },
  ],
  visors: [
    { id: 'atmoxr', label: 'ATMO XR Silver' },
    { id: 'pico4pro', label: 'PICO 4 Pro' },
    { id: 'pico4ultra', label: 'PICO 4 Ultra' },
    { id: 'cyber', label: 'Cyber Visor' },
    { id: 'none', label: 'Sem Óculos (Rosto)' },
  ],
  outfits: [
    { id: 'jacket', label: 'Jaqueta ATMOXR' },
    { id: 'hoodie', label: 'Moletom PICO' },
    { id: 'armor', label: 'Armadura Cyber' },
    { id: 'jersey', label: 'Camisa VRFS 10' },
    { id: 'stealth', label: 'Traje Stealth' },
  ],
  outfitColors: [
    { id: '#2563eb', label: 'Azul Royal' },
    { id: '#18181b', label: 'Preto' },
    { id: '#dc2626', label: 'Vermelho' },
    { id: '#10b981', label: 'Esmeralda' },
    { id: '#8b5cf6', label: 'Violeta' },
    { id: '#f59e0b', label: 'Dourado' },
    { id: '#06b6d4', label: 'Ciano' },
    { id: '#e4e4e7', label: 'Prata' },
  ],
  pantsColors: [
    { id: '#1e293b', label: 'Jeans Escuro' },
    { id: '#09090b', label: 'Preto Tático' },
    { id: '#334155', label: 'Cinza Grafite' },
    { id: '#1d4ed8', label: 'Azul' },
    { id: '#991b1b', label: 'Rubi' },
    { id: '#e2e8f0', label: 'Branco' },
  ],
  accessories: [
    { id: 'headphones', label: 'Fone Gamer RGB' },
    { id: 'wings', label: 'Asas Neon' },
    { id: 'jetpack', label: 'Jetpack XR' },
    { id: 'aura', label: 'Aura Espacial' },
    { id: 'katana', label: 'Katana Dorsal' },
    { id: 'none', label: 'Nenhum' },
  ],
  poses: [
    { id: 'ready', label: 'Pronto VR' },
    { id: 'wave', label: 'Acenando' },
    { id: 'hero', label: 'Herói' },
    { id: 'float', label: 'Flutuando' },
  ],
};

export const DEFAULT_CHARACTER = {
  skin: '#f3c6a5',
  hairStyle: 'spiky',
  hairColor: '#18181b',
  visor: 'atmoxr',
  outfit: 'jacket',
  outfitColor: '#2563eb',
  pantsColor: '#1e293b',
  accessory: 'headphones',
  pose: 'ready',
};

export function loadCharacter() {
  try {
    const raw = localStorage.getItem('atmoxr.character.v1');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return { ...DEFAULT_CHARACTER, ...parsed };
      }
    }
  } catch {}
  if (S.customCharacter && typeof S.customCharacter === 'object') {
    return { ...DEFAULT_CHARACTER, ...S.customCharacter };
  }
  return { ...DEFAULT_CHARACTER };
}

export function saveCharacter(cfg, { updateProfileAvatar = false } = {}) {
  const merged = { ...DEFAULT_CHARACTER, ...(cfg || {}) };
  S.customCharacter = merged;
  try {
    localStorage.setItem('atmoxr.character.v1', JSON.stringify(merged));
  } catch {}
  if (updateProfileAvatar) {
    try {
      const url = renderCharacterAvatarDataUrl(merged, 160);
      if (url) S.profileAvatar = url;
    } catch {}
  }
  save(S);
  emit('character-updated', merged);
  if (updateProfileAvatar) {
    emit('profile-updated', { name: S.profileName, avatar: S.profileAvatar, character: merged });
  }
  return merged;
}

export function drawCharacter2D(ctx, w, h, rawCfg, opts = {}) {
  const cfg = { ...DEFAULT_CHARACTER, ...(rawCfg || {}) };
  const t = typeof opts.time === 'number' ? opts.time : performance.now() * 0.001;
  const portrait = !!opts.portrait;
  const yaw = typeof opts.yaw === 'number' ? opts.yaw : 0; // -1..1 rotation offset
  const lh = opts.leftHand;
  const rh = opts.rightHand;

  ctx.save();
  ctx.clearRect(0, 0, w, h);

  // Background
  const bg = ctx.createRadialGradient(w * 0.5, h * 0.42, 16, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
  bg.addColorStop(0, '#1e293b');
  bg.addColorStop(0.55, '#0f172a');
  bg.addColorStop(1, '#07090e');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const cx = w * 0.5;
  const floatOffset = cfg.pose === 'float' ? Math.sin(t * 2.6) * 8 : Math.sin(t * 1.8) * 2.5;
  const scale = portrait ? Math.min(w, h) / 150 : Math.min(w / 280, h / 370);
  const originY = portrait ? h * 0.66 + floatOffset * 0.35 : h * 0.47 + floatOffset;

  ctx.save();
  ctx.translate(cx, originY);
  ctx.scale(scale, scale);

  // Platform ring in full-body mode
  if (!portrait) {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.38)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(0, 142 - floatOffset * 0.7, 78, 17, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.fill();
    ctx.restore();
  }

  const shiftX = Math.sin(yaw) * 10;

  // Back Accessories (Aura, Wings, Jetpack, Katana)
  if (cfg.accessory === 'aura') {
    const auraGrad = ctx.createRadialGradient(0, -25, 12, 0, -25, 115);
    auraGrad.addColorStop(0, 'rgba(56, 189, 248, 0.42)');
    auraGrad.addColorStop(0.6, 'rgba(139, 92, 246, 0.18)');
    auraGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(0, -25, 112, 0, Math.PI * 2);
    ctx.fill();
  } else if (cfg.accessory === 'wings') {
    ctx.save();
    const flap = Math.sin(t * 3.2) * 0.08;
    ctx.strokeStyle = '#38bdf8';
    ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
    ctx.lineWidth = 2.5;
    for (const dir of [-1, 1]) {
      ctx.save();
      ctx.scale(dir, 1);
      ctx.rotate(flap);
      ctx.beginPath();
      ctx.moveTo(18, -28);
      ctx.quadraticCurveTo(78, -82, 96, -34);
      ctx.quadraticCurveTo(76, -6, 68, 16);
      ctx.quadraticCurveTo(42, 4, 18, -8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  } else if (cfg.accessory === 'jetpack') {
    ctx.fillStyle = '#334155';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-42 - shiftX * 0.3, -42, 22, 62, 8);
    ctx.roundRect(20 - shiftX * 0.3, -42, 22, 62, 8);
    ctx.fill();
    ctx.stroke();
    // Thruster flames
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.ellipse(-31 - shiftX * 0.3, 28 + Math.sin(t * 14) * 3, 6, 11, 0, 0, Math.PI * 2);
    ctx.ellipse(31 - shiftX * 0.3, 28 + Math.cos(t * 14) * 3, 6, 11, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (cfg.accessory === 'katana') {
    ctx.save();
    ctx.rotate(-0.58);
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-5, -108, 10, 140, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#facc15';
    ctx.fillRect(-11, -78, 22, 5);
    ctx.restore();
  }

  // Legs & Shoes (when not portrait)
  if (!portrait) {
    ctx.strokeStyle = cfg.pantsColor;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    const legSpread = cfg.pose === 'hero' ? 22 : 16;
    ctx.beginPath();
    ctx.moveTo(-15, 38);
    ctx.lineTo(-legSpread, 122);
    ctx.moveTo(15, 38);
    ctx.lineTo(legSpread, 122);
    ctx.stroke();

    // Knee pads on armor/stealth
    if (cfg.outfit === 'armor' || cfg.outfit === 'stealth') {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(-legSpread * 0.85, 82, 6, 0, Math.PI * 2);
      ctx.arc(legSpread * 0.85, 82, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Sneakers
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = cfg.outfitColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(-legSpread - 15, 118, 28, 14, 6);
    ctx.roundRect(legSpread - 13, 118, 28, 14, 6);
    ctx.fill();
    ctx.stroke();
  }

  // Torso / Outfit
  ctx.fillStyle = cfg.outfitColor;
  ctx.strokeStyle = 'rgba(255,255,255,0.24)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(-34, -44, 68, 86, 18);
  ctx.fill();
  ctx.stroke();

  // Outfit Details
  if (cfg.outfit === 'jacket') {
    // Inner dark shirt + zipper + ATMOXR badge
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-11, -42, 22, 82);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-11, -42); ctx.lineTo(-11, 40);
    ctx.moveTo(11, -42); ctx.lineTo(11, 40);
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 8px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ATMO', 20 + shiftX * 0.2, -16);
  } else if (cfg.outfit === 'hoodie') {
    // Hoodie pocket + strings
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    ctx.beginPath();
    ctx.roundRect(-22, 6, 44, 24, 8);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-8, -40); ctx.lineTo(-8, -16);
    ctx.moveTo(8, -40); ctx.lineTo(8, -16);
    ctx.stroke();
  } else if (cfg.outfit === 'armor') {
    // Cyber Armor chest plates & glowing core
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-28, -24); ctx.lineTo(0, -10); ctx.lineTo(28, -24);
    ctx.moveTo(-24, 8); ctx.lineTo(0, 20); ctx.lineTo(24, 8);
    ctx.stroke();
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(0 + shiftX * 0.3, -12, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0 + shiftX * 0.3, -12, 4.5, 0, Math.PI * 2);
    ctx.fill();
  } else if (cfg.outfit === 'jersey') {
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('10', 0 + shiftX * 0.3, 4);
    ctx.font = '800 7.5px Inter, sans-serif';
    ctx.fillText('ATMOXR', 0 + shiftX * 0.3, -22);
  } else if (cfg.outfit === 'stealth') {
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(-30, -34); ctx.lineTo(30, 26);
    ctx.moveTo(30, -34); ctx.lineTo(-30, 26);
    ctx.stroke();
  }

  // Arms & Hands
  const lx = lh ? (-36 - (0.5 - (lh.palm?.[0] ?? 0.3)) * 85) : (
    cfg.pose === 'hero' ? -56 : cfg.pose === 'float' ? -64 : -54
  );
  const ly = lh ? (-32 + ((lh.palm?.[1] ?? 0.5) - 0.5) * 95) : (
    cfg.pose === 'hero' ? 4 : cfg.pose === 'float' ? -22 + Math.sin(t * 3) * 8 : 16
  );
  const rx = rh ? (36 + ((rh.palm?.[0] ?? 0.7) - 0.5) * 85) : (
    cfg.pose === 'wave' ? 66 + Math.sin(t * 6.5) * 12 : cfg.pose === 'hero' ? 56 : cfg.pose === 'float' ? 64 : 54
  );
  const ry = rh ? (-32 + ((rh.palm?.[1] ?? 0.5) - 0.5) * 95) : (
    cfg.pose === 'wave' ? -62 + Math.cos(t * 6.5) * 6 : cfg.pose === 'hero' ? 4 : cfg.pose === 'float' ? -22 + Math.cos(t * 3) * 8 : 16
  );

  ctx.strokeStyle = cfg.outfitColor;
  ctx.lineWidth = 15;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-34, -32);
  ctx.quadraticCurveTo(-48, -10, lx, ly);
  ctx.moveTo(34, -32);
  ctx.quadraticCurveTo(48, -10, rx, ry);
  ctx.stroke();

  // Hands
  ctx.fillStyle = cfg.skin;
  ctx.beginPath();
  ctx.arc(lx, ly, 9, 0, Math.PI * 2);
  ctx.arc(rx, ry, 9, 0, Math.PI * 2);
  ctx.fill();

  // Neck
  ctx.fillStyle = cfg.skin;
  ctx.beginPath();
  ctx.roundRect(-9, -58, 18, 18, 6);
  ctx.fill();

  // Head
  ctx.fillStyle = cfg.skin;
  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, -82, 31, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Ears
  ctx.beginPath();
  ctx.arc(-31, -82, 6, 0, Math.PI * 2);
  ctx.arc(31, -82, 6, 0, Math.PI * 2);
  ctx.fill();

  // Hair (behind/top of head)
  ctx.fillStyle = cfg.hairColor;
  if (cfg.hairStyle === 'spiky') {
    ctx.beginPath();
    ctx.moveTo(-31, -88);
    ctx.lineTo(-36, -106);
    ctx.lineTo(-20, -104);
    ctx.lineTo(-14, -122);
    ctx.lineTo(-2, -108);
    ctx.lineTo(8, -124);
    ctx.lineTo(18, -106);
    ctx.lineTo(34, -114);
    ctx.lineTo(31, -88);
    ctx.closePath();
    ctx.fill();
  } else if (cfg.hairStyle === 'short') {
    ctx.beginPath();
    ctx.arc(0, -88, 31, Math.PI * 1.05, Math.PI * 1.95);
    ctx.closePath();
    ctx.fill();
  } else if (cfg.hairStyle === 'curly') {
    for (const [hx, hy, hr] of [[-24, -98, 12], [-12, -108, 14], [2, -110, 14], [16, -106, 13], [25, -96, 12]]) {
      ctx.beginPath();
      ctx.arc(hx, hy, hr, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (cfg.hairStyle === 'long') {
    ctx.beginPath();
    ctx.arc(0, -86, 33, Math.PI * 0.85, Math.PI * 2.15);
    ctx.fill();
    ctx.fillRect(-33, -88, 10, 44);
    ctx.fillRect(23, -88, 10, 44);
  } else if (cfg.hairStyle === 'mohawk') {
    ctx.beginPath();
    ctx.moveTo(-9, -106);
    ctx.lineTo(-4, -132);
    ctx.lineTo(6, -132);
    ctx.lineTo(10, -106);
    ctx.closePath();
    ctx.fill();
  } else if (cfg.hairStyle === 'cap') {
    ctx.fillStyle = cfg.outfitColor;
    ctx.beginPath();
    ctx.arc(0, -88, 32, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.roundRect(-8 + shiftX * 0.3, -94, 42, 8, 4);
    ctx.fill();
  }

  // Face or VR Visor
  if (cfg.visor === 'none') {
    // Eyes
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(-11 + shiftX * 0.4, -84, 3.8, 0, Math.PI * 2);
    ctx.arc(11 + shiftX * 0.4, -84, 3.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-12 + shiftX * 0.4, -85.2, 1.3, 0, Math.PI * 2);
    ctx.arc(10 + shiftX * 0.4, -85.2, 1.3, 0, Math.PI * 2);
    ctx.fill();
    // Eyebrows
    ctx.strokeStyle = cfg.hairColor;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(-16 + shiftX * 0.4, -92); ctx.lineTo(-6 + shiftX * 0.4, -91);
    ctx.moveTo(6 + shiftX * 0.4, -91); ctx.lineTo(16 + shiftX * 0.4, -92);
    ctx.stroke();
  } else {
    // VR Headset Visor
    const vx = -27 + shiftX * 0.45;
    const vy = -96;
    const vw = 54;
    const vh = 23;
    if (cfg.visor === 'atmoxr') {
      const vg = ctx.createLinearGradient(vx, vy, vx + vw, vy + vh);
      vg.addColorStop(0, '#e4e4e7');
      vg.addColorStop(0.5, '#71717a');
      vg.addColorStop(1, '#27272a');
      ctx.fillStyle = vg;
      ctx.strokeStyle = '#ffffff';
    } else if (cfg.visor === 'pico4pro') {
      const vg = ctx.createLinearGradient(vx, vy, vx + vw, vy + vh);
      vg.addColorStop(0, '#fef3c7');
      vg.addColorStop(0.5, '#d6d3d1');
      vg.addColorStop(1, '#44403c');
      ctx.fillStyle = vg;
      ctx.strokeStyle = '#fde68a';
    } else if (cfg.visor === 'pico4ultra') {
      ctx.fillStyle = '#18181b';
      ctx.strokeStyle = '#a1a1aa';
    } else {
      ctx.fillStyle = '#09090b';
      ctx.strokeStyle = '#38bdf8';
    }
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.roundRect(vx, vy, vw, vh, 11);
    ctx.fill();
    ctx.stroke();

    // Glowing Visor LED strip
    ctx.strokeStyle = cfg.visor === 'pico4pro' ? '#f59e0b' : '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(vx + 8, vy + vh * 0.5);
    ctx.lineTo(vx + vw - 8, vy + vh * 0.5);
    ctx.stroke();
  }

  // Smile
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.68)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0 + shiftX * 0.35, -69, 6.5, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();

  // Headphones accessory
  if (cfg.accessory === 'headphones') {
    ctx.strokeStyle = '#e4e4e7';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, -84, 34, Math.PI * 1.05, Math.PI * 1.95);
    ctx.stroke();
    ctx.fillStyle = '#18181b';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-38, -92, 9, 20, 4);
    ctx.roundRect(29, -92, 9, 20, 4);
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
  ctx.restore();
}

export function renderCharacterAvatarDataUrl(rawCfg, size = 160) {
  if (typeof document === 'undefined') return '';
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  drawCharacter2D(ctx, size, size, rawCfg, { portrait: true, time: 0.5 });
  return canvas.toDataURL('image/png');
}
