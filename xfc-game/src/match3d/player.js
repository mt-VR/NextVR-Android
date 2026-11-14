// Jogador 3D: rig humanoide compartilhado por todo o elenco, com tronco
// atlético modelado, membros segmentados, mãos com dedos, shorts, meias e
// chuteiras com volume. A versão móvel reduz apenas a tesselação/texturas: não
// troca o atleta por um boneco cilíndrico nem altera a anatomia do rig.

import { THREE, canvasTexture, softShadowTexture } from './engine.js';
import { createAnimationController, rigFromModel } from './animation.js';
import { anthemMouth, anthemSway } from './prematch.js';

const SKIN_TONES = [0xf0c8a0, 0xd9a066, 0xb87a4a, 0x8d5a34, 0x6b4226, 0xf5d9b8];
const HAIR_COLORS = [0x1b1310, 0x2e2018, 0x4a3222, 0x6b4a2c, 0x8f6a3c, 0xd8c08a, 0x2b2b2b];
const HAIR_STYLES = ['short', 'curly', 'afro', 'mohawk', 'neymar', 'side', 'bob', 'bald'];
const CELEBRATION_STYLES = new Set(['classic', 'airplane', 'point', 'knee-slide', 'fist-pump']);
const JERSEY_TEXTURES = new Map();
const UNIFORM_TEXTURES = new Map();
const FACE_TEXTURES = new Map();
const CREST_IMAGES = new Map();

function cachedTexture(cache, key, create) {
  let texture = cache.get(key);
  if (!texture) {
    texture = create();
    texture.userData.shared = true;
    texture.userData.cache = cache;
    texture.userData.cacheKey = key;
    texture.userData.references = 0;
    cache.set(key, texture);
  }
  texture.userData.references += 1;
  return texture;
}

function releaseTexture(texture) {
  const cache = texture?.userData?.cache;
  if (cache) {
    texture.userData.references = Math.max(0, (texture.userData.references || 0) - 1);
    if (texture.userData.references === 0) {
      cache.delete(texture.userData.cacheKey);
      texture.userData.disposed = true;
      texture.dispose();
    }
  } else if (!texture?.userData?.shared) {
    texture?.dispose();
  }
}

function disposePlayerObject(root) {
  root.traverse(object => { object.userData.disposed = true; });
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  root.traverse(object => {
    if (object.geometry && !geometries.has(object.geometry)) {
      geometries.add(object.geometry);
      object.geometry.dispose();
    }
    const list = Array.isArray(object.material)
      ? object.material
      : object.material ? [object.material] : [];
    for (const material of list) {
      if (!material || materials.has(material)) continue;
      materials.add(material);
      for (const key of Object.keys(material)) {
        const texture = material[key];
        if (texture?.isTexture && !textures.has(texture)) {
          textures.add(texture);
          releaseTexture(texture);
        }
      }
      material.dispose();
    }
  });
  root.parent?.remove(root);
}

function jerseyTextureFor(kit) {
  const key = [kit.primary, kit.secondary, kit.accent, kit.pattern].join('|');
  return cachedTexture(JERSEY_TEXTURES, key, () => canvasTexture(256, 256,
    (context, width, height) => drawKitTexture(context, width, height, kit)));
}

function teamMark(label = 'XFC') {
  const words = String(label).replace(/\.[a-z0-9]+$/i, '').split(/[^a-z0-9À-ÿ]+/i).filter(Boolean);
  const mark = words.length > 1
    ? words.slice(0, 3).map(word => word[0]).join('')
    : (words[0] || 'XFC').slice(0, 3);
  return mark.toUpperCase();
}

function loadCrestImage(file) {
  if (!file || typeof Image === 'undefined') return Promise.resolve(null);
  if (!CREST_IMAGES.has(file)) {
    CREST_IMAGES.set(file, new Promise(resolve => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = file;
    }));
  }
  return CREST_IMAGES.get(file);
}

function uniformTextureFor({ number, name, crest, teamName, sponsor, brand, primary, secondary, accent }) {
  const key = [number, name, crest, teamName, sponsor, brand, primary, secondary, accent].join('|');
  return cachedTexture(UNIFORM_TEXTURES, key, () => {
    const mark = teamMark(teamName || crest || 'XFC');
    const drawCrest = (context, image = null) => {
      context.clearRect(5, 9, 55, 66);
      context.beginPath();
      context.moveTo(11, 14);
      context.lineTo(53, 14);
      context.lineTo(50, 52);
      context.lineTo(32, 70);
      context.lineTo(14, 52);
      context.closePath();
      context.fillStyle = accent || '#ffffff';
      context.fill();
      if (image) {
        context.save();
        context.clip();
        const imageWidth = image.naturalWidth || image.width;
        const imageHeight = image.naturalHeight || image.height;
        const scale = Math.min(36 / imageWidth, 43 / imageHeight);
        const drawWidth = imageWidth * scale;
        const drawHeight = imageHeight * scale;
        context.drawImage(image, 32 - drawWidth / 2, 42 - drawHeight / 2,
          drawWidth, drawHeight);
        context.restore();
      } else {
        context.fillStyle = secondary || '#102030';
        context.font = `900 ${mark.length > 2 ? 13 : 17}px Inter, sans-serif`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(mark, 32, 42, 35);
      }
      context.beginPath();
      context.moveTo(11, 14);
      context.lineTo(53, 14);
      context.lineTo(50, 52);
      context.lineTo(32, 70);
      context.lineTo(14, 52);
      context.closePath();
      context.lineWidth = 3;
      context.strokeStyle = primary || '#102030';
      context.stroke();
    };

    const texture = canvasTexture(256, 128, context => {
      context.clearRect(0, 0, 256, 128);
      drawCrest(context);

      // Frente (metade esquerda): escudo, marca e patrocinador.
      context.fillStyle = accent || '#ffffff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = '900 10px Inter, sans-serif';
      context.fillText(String(brand || 'XF').trim().toLocaleUpperCase(), 104, 28, 40);
      context.font = '800 13px Inter, sans-serif';
      context.fillText(String(sponsor || 'XFC').trim().toLocaleUpperCase(), 82, 76, 92);

      // Costas (metade direita): nome e número numa única textura/decal.
      if (name) {
        context.font = '800 12px Inter, sans-serif';
        context.fillText(String(name).trim().toLocaleUpperCase(), 192, 25, 112);
      }
      context.font = '900 57px Inter, sans-serif';
      context.fillText(String(number ?? ''), 192, 83, 102);
    });

    loadCrestImage(crest).then(image => {
      if (!image || texture.userData.disposed) return;
      drawCrest(texture.image.getContext('2d'), image);
      texture.needsUpdate = true;
    });
    return texture;
  });
}

function softFaceTextureFor() {
  return cachedTexture(FACE_TEXTURES, 'footballer-face-shading-v1', () => canvasTexture(128, 128, context => {
    context.clearRect(0, 0, 128, 128);
    // Só sombra: órbitas, maçãs do rosto e um leve escurecimento nas têmporas.
    for (const x of [39, 89]) {
      const socket = context.createRadialGradient(x, 54, 2, x, 56, 17);
      socket.addColorStop(0, 'rgba(58,38,30,.22)');
      socket.addColorStop(1, 'rgba(58,38,30,0)');
      context.fillStyle = socket;
      context.beginPath();
      context.ellipse(x, 57, 16, 13, 0, 0, Math.PI * 2);
      context.fill();
      const cheek = context.createRadialGradient(x + 2, 88, 3, x + 2, 88, 18);
      cheek.addColorStop(0, 'rgba(196,92,70,.16)');
      cheek.addColorStop(1, 'rgba(196,92,70,0)');
      context.fillStyle = cheek;
      context.beginPath();
      context.ellipse(x + 2, 88, 17, 12, 0, 0, Math.PI * 2);
      context.fill();
    }
  }));
}

/**
 * Rosto estilizado em geometria: olhos com íris/pupila/brilho, sobrancelhas e
 * boca. É o que dá "cara" ao craque — a versão antiga só pintava o rosto na
 * textura e ficava chapada de perto.
 */
function buildStylizedFace(head, { lowDetail = false, skinTone = 0xd9a066 } = {}) {
  const group = new THREE.Group();
  group.name = 'xfc-player-face-3d';
  const white = new THREE.MeshLambertMaterial({ color: 0xf6f1e8 });
  const iris = new THREE.MeshLambertMaterial({ color: 0x4a2c17 });
  const pupil = new THREE.MeshLambertMaterial({ color: 0x120c08 });
  const glint = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const brow = new THREE.MeshLambertMaterial({ color: 0x241811 });
  const lip = new THREE.MeshLambertMaterial({ color: 0x8d4a3c });
  const segments = lowDetail ? 7 : 10;
  const eyeball = new THREE.SphereGeometry(1, segments, Math.max(5, segments - 2));

  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(eyeball, white);
    eye.position.set(0.034 * side, 0.021, 0.0695);
    eye.scale.set(0.0202, 0.0152, 0.0112);
    group.add(eye);

    const irisMesh = new THREE.Mesh(eyeball, iris);
    irisMesh.position.set(0.034 * side, 0.0205, 0.0792);
    irisMesh.scale.set(0.0092, 0.0092, 0.0052);
    group.add(irisMesh);

    const pupilMesh = new THREE.Mesh(eyeball, pupil);
    pupilMesh.position.set(0.034 * side, 0.0205, 0.0816);
    pupilMesh.scale.set(0.0046, 0.0046, 0.0032);
    group.add(pupilMesh);

    const glintMesh = new THREE.Mesh(eyeball, glint);
    glintMesh.position.set(0.034 * side + 0.0028 * side, 0.0242, 0.0840);
    glintMesh.scale.set(0.0022, 0.0022, 0.0018);
    group.add(glintMesh);

    const eyebrow = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.0062, 0.008), brow);
    eyebrow.position.set(0.035 * side, 0.0348, 0.0808);
    eyebrow.rotation.z = -0.1 * side;
    eyebrow.rotation.y = 0.16 * side;
    group.add(eyebrow);

    // Pálpebra: só a borda superior, senão o olho parece inchado.
    if (!lowDetail) {
      const lid = new THREE.Mesh(eyeball, new THREE.MeshLambertMaterial({ color: skinTone }));
      lid.position.set(0.034 * side, 0.0300, 0.0702);
      lid.scale.set(0.0202, 0.0042, 0.0114);
      group.add(lid);
    }
  }

  const mouth = new THREE.Mesh(eyeball, lip);
  mouth.name = 'xfc-player-mouth';
  mouth.position.set(0, -0.0495, 0.0708);
  mouth.scale.set(0.0168, 0.0052, 0.0052);
  group.add(mouth);

  if (!lowDetail) {
    const lowerLip = new THREE.Mesh(eyeball, new THREE.MeshLambertMaterial({ color: 0xa9584a }));
    lowerLip.name = 'xfc-player-lower-lip';
    lowerLip.position.set(0, -0.0552, 0.0698);
    lowerLip.scale.set(0.0144, 0.0036, 0.0044);
    group.add(lowerLip);
  }
  head.add(group);
  return group;
}

function faceTextureFor() {
  return cachedTexture(FACE_TEXTURES, 'footballer-face-features-v3', () => canvasTexture(128, 128, context => {
    context.clearRect(0, 0, 128, 128);

    // Sombras delicadas da órbita e das maçãs do rosto dão profundidade sem
    // substituir o crânio, o nariz e as orelhas 3D do rig.
    for (const x of [39, 89]) {
      const socket = context.createRadialGradient(x, 51, 2, x, 53, 16);
      socket.addColorStop(0, 'rgba(62,42,34,.18)');
      socket.addColorStop(1, 'rgba(62,42,34,0)');
      context.fillStyle = socket;
      context.beginPath();
      context.ellipse(x, 55, 15, 12, 0, 0, Math.PI * 2);
      context.fill();
    }

    // Sobrancelhas levemente assimétricas.
    context.lineCap = 'round';
    for (const [x, tilt] of [[39, -1], [89, 1]]) {
      context.strokeStyle = 'rgba(49,34,27,.87)';
      context.lineWidth = 4.4;
      context.beginPath();
      context.moveTo(x - 12, 39 + tilt * 1.1);
      context.quadraticCurveTo(x, 34.5, x + 11, 38.5 - tilt * 0.6);
      context.stroke();
      context.strokeStyle = 'rgba(184,145,111,.28)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(x - 10, 40 + tilt);
      context.quadraticCurveTo(x, 37, x + 9, 39);
      context.stroke();
    }

    // Olhos com esclera, íris, pupila e um pequeno reflexo.
    for (const [x, gaze] of [[39, 0.7], [89, -0.4]]) {
      context.fillStyle = 'rgba(248,244,232,.97)';
      context.beginPath();
      context.ellipse(x, 52, 8.7, 4.5, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = 'rgba(63,45,34,.98)';
      context.beginPath();
      context.arc(x + gaze, 52, 2.9, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = 'rgba(17,22,25,.98)';
      context.beginPath();
      context.arc(x + gaze, 52, 1.45, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = 'rgba(255,255,255,.92)';
      context.beginPath();
      context.arc(x + gaze - 0.8, 50.9, 0.85, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = 'rgba(74,48,37,.65)';
      context.lineWidth = 1.2;
      context.beginPath();
      context.ellipse(x, 52, 8.7, 4.5, 0, Math.PI, Math.PI * 2);
      context.stroke();
    }

    // Sombra do nariz, com narinas sutis (o volume principal é uma malha 3D).
    const bridge = context.createLinearGradient(58, 54, 70, 73);
    bridge.addColorStop(0, 'rgba(255,231,202,0)');
    bridge.addColorStop(0.55, 'rgba(84,56,40,.22)');
    bridge.addColorStop(1, 'rgba(68,42,32,.35)');
    context.fillStyle = bridge;
    context.beginPath();
    context.moveTo(61, 55);
    context.quadraticCurveTo(63, 67, 57, 74);
    context.quadraticCurveTo(63, 78, 70, 73);
    context.quadraticCurveTo(66, 65, 66, 55);
    context.closePath();
    context.fill();
    context.fillStyle = 'rgba(62,39,31,.52)';
    for (const x of [59, 68]) {
      context.beginPath();
      context.ellipse(x, 75, 1.6, 0.8, 0, 0, Math.PI * 2);
      context.fill();
    }

    // Lábios naturais e linha da boca em vez de um traço geométrico marcado.
    context.strokeStyle = 'rgba(112,61,54,.82)';
    context.lineWidth = 2.2;
    context.beginPath();
    context.moveTo(51, 91);
    context.quadraticCurveTo(58, 87.5, 64, 90.2);
    context.quadraticCurveTo(70, 87.8, 77, 91);
    context.stroke();
    context.strokeStyle = 'rgba(180,105,91,.62)';
    context.lineWidth = 1.2;
    context.beginPath();
    context.moveTo(53, 93);
    context.quadraticCurveTo(64, 98, 75, 93);
    context.stroke();
    context.fillStyle = 'rgba(80,55,43,.12)';
    context.beginPath();
    context.ellipse(64, 104, 14, 4, 0, 0, Math.PI * 2);
    context.fill();
  }));
}

/** Poses compartilhadas pelos modelos detalhado e econômico do celular. */
function applyCelebrationPose({ style, phase, running, body, arms, legs, head }) {
  const wave = Math.sin(phase);
  const stride = running ? wave : Math.sin(phase * 0.7) * 0.12;
  const hop = Math.abs(Math.sin(phase * 2));
  body.position.y = running ? hop * 0.095 : hop * (style === 'fist-pump' ? 0.22 : 0.14);
  body.rotation.x = running ? 0.04 : -0.05;
  body.rotation.z = running ? wave * 0.025 : 0;
  arms[0].shoulder.rotation.x = -2.25 - stride * 0.11;
  arms[1].shoulder.rotation.x = -2.25 + stride * 0.11;
  arms[0].shoulder.rotation.z = 0.52;
  arms[1].shoulder.rotation.z = -0.52;
  arms[0].forearm.rotation.x = -0.45;
  arms[1].forearm.rotation.x = -0.45;
  legs[0].hip.rotation.x = running ? stride * 0.48 : 0.05;
  legs[1].hip.rotation.x = running ? -stride * 0.48 : 0.05;
  legs[0].knee.rotation.x = running ? Math.max(0, -stride) * 0.72 : 0.08;
  legs[1].knee.rotation.x = running ? Math.max(0, stride) * 0.72 : 0.08;
  head.rotation.x = -0.2;

  if (style === 'airplane') {
    arms[0].shoulder.rotation.x = -0.32 - stride * 0.08;
    arms[1].shoulder.rotation.x = -0.32 + stride * 0.08;
    arms[0].shoulder.rotation.z = -0.98;
    arms[1].shoulder.rotation.z = 0.98;
    arms[0].forearm.rotation.x = arms[1].forearm.rotation.x = 0.08;
    body.rotation.x = 0.1;
  } else if (style === 'point') {
    arms[0].shoulder.rotation.x = -1.05;
    arms[0].shoulder.rotation.z = 0.62;
    arms[0].forearm.rotation.x = -0.55;
    arms[1].shoulder.rotation.x = -2.88 + Math.sin(phase * 0.65) * 0.12;
    arms[1].shoulder.rotation.z = -0.3;
    arms[1].forearm.rotation.x = -0.56;
  } else if (style === 'knee-slide') {
    body.position.y = -0.045 + hop * 0.025;
    body.rotation.x = 0.46;
    arms[0].shoulder.rotation.x = -1.52;
    arms[1].shoulder.rotation.x = -1.52;
    arms[0].shoulder.rotation.z = -0.82;
    arms[1].shoulder.rotation.z = 0.82;
    arms[0].forearm.rotation.x = arms[1].forearm.rotation.x = -0.2;
    legs[0].hip.rotation.x = 0.9;
    legs[0].knee.rotation.x = -0.88;
    legs[1].hip.rotation.x = -0.18;
    legs[1].knee.rotation.x = -0.34;
  } else if (style === 'fist-pump') {
    body.position.y = hop * 0.22;
    body.rotation.x = -0.08;
    arms[0].shoulder.rotation.x = -2.72 + Math.sin(phase + Math.PI) * 0.28;
    arms[0].shoulder.rotation.z = 0.34;
    arms[0].forearm.rotation.x = -1.1;
    arms[1].shoulder.rotation.x = -1.5 + Math.sin(phase) * 0.25;
    arms[1].shoulder.rotation.z = -0.32;
    arms[1].forearm.rotation.x = -0.92;
    legs[0].hip.rotation.x = 0.32 + Math.max(0, wave) * 0.3;
    legs[1].hip.rotation.x = -0.24 - Math.max(0, -wave) * 0.3;
    legs[0].knee.rotation.x = 0.32;
    legs[1].knee.rotation.x = 0.32;
  }
}

/** Textura do uniforme: listras, faixa diagonal ou xadrez + sombreamento. */
function drawKitTexture(context, width, height, kit) {
  const { primary, secondary, accent, pattern } = kit;
  context.fillStyle = primary;
  context.fillRect(0, 0, width, height);

  if (pattern === 'stripes') {
    context.fillStyle = secondary;
    const stripes = 9;
    for (let stripe = 0; stripe < stripes; stripe += 2) {
      context.fillRect((stripe / stripes) * width, 0, width / stripes, height);
    }
  } else if (pattern === 'sash') {
    context.save();
    context.fillStyle = secondary;
    context.translate(width / 2, height / 2);
    context.rotate(-Math.PI / 5);
    context.fillRect(-width, -height * 0.22, width * 2, height * 0.44);
    context.restore();
  } else if (pattern === 'check') {
    context.fillStyle = secondary;
    const cells = 6;
    for (let row = 0; row < cells; row += 1) {
      for (let column = 0; column < cells; column += 1) {
        if ((row + column) % 2 === 0) context.fillRect((column / cells) * width, (row / cells) * height, width / cells, height / cells);
      }
    }
  } else if (pattern === 'hoops') {
    context.fillStyle = secondary;
    const bands = 4;
    for (let band = 0; band < bands; band += 1) {
      context.fillRect(0, (band / bands) * height + height * 0.06, width, height / (bands * 2.6));
    }
  }

  // Microtrama do tecido e pespontos discretos: detalhe de perto, sem virar
  // ruído visual na câmera de transmissão.
  context.save();
  context.globalAlpha = 0.12;
  context.strokeStyle = '#ffffff';
  context.lineWidth = 0.55;
  for (let y = 2; y < height; y += 5) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y + 1.5);
    context.stroke();
  }
  context.globalAlpha = 0.09;
  context.strokeStyle = secondary;
  context.lineWidth = 0.7;
  for (let x = 7; x < width; x += 9) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  context.globalAlpha = 0.34;
  context.setLineDash([3, 3]);
  context.strokeStyle = accent;
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(width * 0.05, height * 0.14);
  context.lineTo(width * 0.05, height * 0.88);
  context.moveTo(width * 0.95, height * 0.14);
  context.lineTo(width * 0.95, height * 0.88);
  context.stroke();
  context.restore();

  // Sombreamento vertical: dá volume ao tronco.
  const shade = context.createLinearGradient(0, 0, 0, height);
  shade.addColorStop(0, 'rgba(255,255,255,0.16)');
  shade.addColorStop(0.45, 'rgba(0,0,0,0)');
  shade.addColorStop(1, 'rgba(0,0,0,0.24)');
  context.fillStyle = shade;
  context.fillRect(0, 0, width, height);
  // Sombra lateral: estreita as laterais como uma camisa de verdade.
  const sides = context.createLinearGradient(0, 0, width, 0);
  sides.addColorStop(0, 'rgba(0,0,0,0.28)');
  sides.addColorStop(0.18, 'rgba(0,0,0,0)');
  sides.addColorStop(0.82, 'rgba(0,0,0,0)');
  sides.addColorStop(1, 'rgba(0,0,0,0.28)');
  context.fillStyle = sides;
  context.fillRect(0, 0, width, height);

  // Gola e punhos na cor de destaque.
  context.fillStyle = accent;
  context.fillRect(0, 0, width, height * 0.08);
  context.fillRect(0, height * 0.92, width, height * 0.08);
}

/** Uma única malha/atlas imprime a frente e as costas do uniforme. */
/** Malha elíptica fechada por anéis, usada no tronco e nos membros. */
function ringGeometry(profile, segments = 12) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const uvs = [];
  const indices = [];
  const rowSize = segments + 1;
  const bottomY = profile[0].y;
  const topY = profile[profile.length - 1].y;
  const height = Math.max(0.001, topY - bottomY);

  for (let row = 0; row < profile.length; row += 1) {
    const ring = profile[row];
    for (let segment = 0; segment <= segments; segment += 1) {
      const u = segment / segments;
      const angle = u * Math.PI * 2;
      positions.push(
        (ring.centerX || 0) + Math.cos(angle) * ring.rx,
        ring.y,
        (ring.centerZ || 0) + Math.sin(angle) * ring.rz
      );
      uvs.push(u, (ring.y - bottomY) / height);
    }
  }

  for (let row = 0; row < profile.length - 1; row += 1) {
    for (let segment = 0; segment < segments; segment += 1) {
      const a = row * rowSize + segment;
      const b = a + 1;
      const d = (row + 1) * rowSize + segment;
      const c = d + 1;
      // A orientação produz normais voltadas para fora do corpo.
      indices.push(a, d, b, b, d, c);
    }
  }

  const bottomCenter = positions.length / 3;
  positions.push(profile[0].centerX || 0, bottomY, profile[0].centerZ || 0);
  uvs.push(0.5, 0);
  const topCenter = positions.length / 3;
  positions.push(profile[profile.length - 1].centerX || 0, topY,
    profile[profile.length - 1].centerZ || 0);
  uvs.push(0.5, 1);
  for (let segment = 0; segment < segments; segment += 1) {
    indices.push(bottomCenter, segment, segment + 1);
    const topRing = (profile.length - 1) * rowSize;
    indices.push(topCenter, topRing + segment + 1, topRing + segment);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  return geometry;
}

/** Painel de escudo/número ajustado à curvatura do tronco, frente e costas. */
function uniformPanelGeometry(profile, columns = 10) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const uvs = [];
  const indices = [];
  const rows = profile.length;
  const stride = columns + 1;
  const bottomY = profile[0].y;
  const height = Math.max(0.001, profile[rows - 1].y - bottomY);

  for (const side of [1, -1]) {
    const base = positions.length / 3;
    for (let row = 0; row < rows; row += 1) {
      const ring = profile[row];
      for (let column = 0; column <= columns; column += 1) {
        const across = (column / columns) * 2 - 1;
        const depth = Math.sqrt(Math.max(0, 1 - across * across));
        positions.push(
          (ring.centerX || 0) + ring.rx * across,
          ring.y,
          (ring.centerZ || 0) + side * (ring.rz * depth + 0.0025)
        );
        const atlasU = side > 0 ? (across + 1) * 0.25 : 1 - (across + 1) * 0.25;
        uvs.push(atlasU, (ring.y - bottomY) / height);
      }
    }

    for (let row = 0; row < rows - 1; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const a = base + row * stride + column;
        const b = a + 1;
        const d = base + (row + 1) * stride + column;
        const c = d + 1;
        if (side > 0) indices.push(a, b, c, a, c, d);
        else indices.push(a, c, b, a, d, c);
      }
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  return geometry;
}

/** Acrescenta o atlas de uniforme conformado ao tronco 3D. */
function addUniformDetails(body, profile, details = {}) {
  const geometry = uniformPanelGeometry(profile);
  const material = new THREE.MeshBasicMaterial({
    map: uniformTextureFor(details),
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    toneMapped: false
  });
  const decal = new THREE.Mesh(geometry, material);
  decal.name = 'xfc-uniform-details';
  decal.userData.playerPart = 'uniform-details';
  decal.renderOrder = 1;
  body.add(decal);
  return decal;
}

/** Rosto curvo de baixa contagem de polígonos, seguindo a cabeça elipsoidal. */
function facePatchGeometry(rx = 0.087, ry = 0.112, rz = 0.086, columns = 12, rows = 12) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const uvs = [];
  const indices = [];
  const stride = columns + 1;
  for (let row = 0; row <= rows; row += 1) {
    const v = row / rows;
    const theta = v * Math.PI;
    const ring = Math.sin(theta);
    for (let column = 0; column <= columns; column += 1) {
      const u = column / columns;
      const phi = u * Math.PI;
      positions.push(
        -rx * ring * Math.cos(phi),
        ry * Math.cos(theta),
        rz * ring * Math.sin(phi) + 0.002
      );
      // CanvasTexture is flipped on upload: V=1 is the top of the portrait.
      uvs.push(u, 1 - v);
    }
  }
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const a = row * stride + column;
      const b = a + 1;
      const d = (row + 1) * stride + column;
      const c = d + 1;
      // Reversed latitude order keeps the normal facing the front (+Z).
      indices.push(a, d, b, b, d, c);
    }
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  return geometry;
}

/** Curva suave 0→1 usada para esculpir o crânio. */
function smoothStep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Esculpe um ponto de esfera unitária no formato de um crânio humano: testa
 * alta, têmporas afundadas, maçãs do rosto, mandíbula estreita e queixo à
 * frente. Sem isso a cabeça é literalmente uma bola.
 */
function shapeHeadPoint(v) {
  const y = v.y;
  // Mandíbula: afina para baixo e joga o maxilar inferior para dentro.
  const jaw = smoothStep(0.12, -0.92, y);
  v.x *= 1 - jaw * 0.36;
  v.z *= 1 - jaw * 0.24;
  // Queixo: projeção à frente na parte mais baixa.
  if (v.z > 0) v.z += jaw * 0.12;
  // Maçãs do rosto: leve volume na altura dos olhos/cochechas.
  const cheek = Math.exp(-Math.pow((y + 0.16) / 0.26, 2)) * Math.min(1, Math.abs(v.x) / 0.55);
  v.x *= 1 + cheek * 0.07;
  // Têmporas: uma cova discreta acima das orelhas.
  const temple = Math.exp(-Math.pow((y - 0.34) / 0.22, 2)) * Math.min(1, Math.abs(v.x) / 0.6);
  v.x *= 1 - temple * 0.06;
  // Nuca: occipital levemente abaulado para trás.
  if (v.z < 0) v.z *= 1 + 0.08 * smoothStep(-0.2, 0.45, y);
  // Testa: um pouco mais plana na frente.
  if (y > 0.2 && v.z > 0) v.z *= 1 + 0.05 * smoothStep(0.2, 0.8, y);
  // Base do crânio: fecha em vez de terminar em ponta redonda.
  if (y < -0.75) v.y *= 0.90;
  return v;
}

/** Esfera deformada em crânio (ainda unitária; a escala vem do mesh). */
function headGeometry(widthSegments = 16, heightSegments = 14) {
  const geometry = new THREE.SphereGeometry(1, widthSegments, heightSegments);
  const position = geometry.attributes.position;
  const point = new THREE.Vector3();
  for (let index = 0; index < position.count; index += 1) {
    point.fromBufferAttribute(position, index);
    shapeHeadPoint(point);
    position.setXYZ(index, point.x, point.y, point.z);
  }
  position.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/** Faz a máscara de sombra do rosto acompanhar o crânio esculpido. */
function conformFacePatch(geometry, rx = 0.087, ry = 0.112, rz = 0.086) {
  const position = geometry.attributes.position;
  const point = new THREE.Vector3();
  for (let index = 0; index < position.count; index += 1) {
    point.set(
      position.getX(index) / rx,
      position.getY(index) / ry,
      (position.getZ(index) - 0.002) / rz
    );
    shapeHeadPoint(point);
    position.setXYZ(index, point.x * rx, point.y * ry, point.z * rz + 0.0035);
  }
  position.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/**
 * Casco de chuteira: seções elípticas empilhadas ao longo do pé (Z). Dá
 * calcanhar alto, peito do pé rebaixado e bico fino — não um ovo.
 */
function footShellGeometry(stations, segments = 14) {
  const positions = [];
  const indices = [];
  const stride = segments + 1;
  for (const station of stations) {
    for (let index = 0; index <= segments; index += 1) {
      const angle = (index / segments) * Math.PI * 2;
      positions.push(
        Math.sin(angle) * station.width,
        Math.cos(angle) * station.height + (station.cy || 0),
        station.z
      );
    }
  }
  for (let row = 0; row < stations.length - 1; row += 1) {
    for (let index = 0; index < segments; index += 1) {
      const a = row * stride + index;
      const b = a + 1;
      const c = (row + 1) * stride + index;
      const d = c + 1;
      indices.push(a, b, c, b, d, c);
    }
  }
  // Tampas do calcanhar e do bico.
  const first = 0;
  const last = (stations.length - 1) * stride;
  for (let index = 0; index < segments; index += 1) {
    indices.push(first, first + index + 1, first + index);
    indices.push(last, last + index, last + index + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/** Geometria elipsoidal, sem transformar um segmento anatômico em cilindro. */
function ellipsoidGeometry(widthSegments = 12, heightSegments = 8) {
  return new THREE.SphereGeometry(1, widthSegments, heightSegments);
}

/** Caminho redondo (usado no recorte do rosto). */
function roundedClip(context, width, height, radius) {
  context.beginPath();
  context.moveTo(radius, 0);
  context.arcTo(width, 0, width, height, radius);
  context.arcTo(width, height, 0, height, radius * 1.4);
  context.arcTo(0, height, 0, 0, radius * 1.4);
  context.arcTo(0, 0, width, 0, radius);
  context.closePath();
}

/**
 * Pinta o rosto do atleta (retrato real) num escudo curvo na frente da cabeça.
 * O rosto 3D continua visível se a imagem ainda estiver carregando.
 */
function applyFacePhoto(head, photoUrl, skinMaterial) {
  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.onload = () => {
    if (head.userData.disposed) return;
    const width = 144;
    const height = 168;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    context.save();
    roundedClip(context, width, height, 30);
    context.clip();
    const scale = Math.max(width / image.width, height / image.height);
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = Math.min(0, (height - drawHeight) * 0.18);
    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    const shade = context.createLinearGradient(0, height * 0.72, 0, height);
    shade.addColorStop(0, 'rgba(0,0,0,0)');
    shade.addColorStop(1, 'rgba(0,0,0,0.3)');
    context.fillStyle = shade;
    context.fillRect(0, 0, width, height);
    context.restore();

    // Tom médio do retrato vira a cor da pele do resto do corpo.
    try {
      const probe = document.createElement('canvas');
      probe.width = 8;
      probe.height = 8;
      const probeContext = probe.getContext('2d');
      probeContext.drawImage(canvas, 40, 64, 64, 64, 0, 0, 8, 8);
      const data = probeContext.getImageData(0, 0, 8, 8).data;
      let r = 0;
      let g = 0;
      let b = 0;
      for (let index = 0; index < data.length; index += 4) {
        r += data[index];
        g += data[index + 1];
        b += data[index + 2];
      }
      const count = data.length / 4;
      skinMaterial.color.setRGB((r / count) / 255, (g / count) / 255, (b / count) / 255, THREE.SRGBColorSpace);
    } catch {
      // Foto inacessível para leitura: mantém o tom padrão.
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    const material = new THREE.MeshLambertMaterial({ map: texture, transparent: true, depthWrite: false });
    const photoPatch = new THREE.Mesh(
      facePatchGeometry(0.087, 0.112, 0.086, 20, 20),
      material
    );
    photoPatch.name = 'xfc-player-face-photo';
    photoPatch.userData.facePart = 'photo';
    head.add(photoPatch);

    // O retrato substitui o atlas facial, mas mantém o formato e a mandíbula 3D.
    for (const child of [...head.children]) {
      if (child.userData.facePart === 'features'
        || child.userData.facePart === 'nose'
        || child.userData.facePart === 'eye'
        || child.userData.facePart === 'brow') child.visible = false;
    }
  };
  image.src = photoUrl;
}

/** Constrói o penteado do atleta a partir do estilo sorteado. */
function buildHair(style, hairMaterial) {
  switch (style) {
    case 'curly': {
      // Cachos low-poly: casquete que cobre o crânio + blocos irregulares por
      // cima. A silhueta (topo alto e laterais curtas) é a assinatura do craque.
      const curls = new THREE.Group();
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.115, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
        hairMaterial
      );
      cap.position.set(0, 0.064, -0.010);
      cap.scale.set(1.0, 0.9, 1.02);
      curls.add(cap);
      const blobGeometry = new THREE.IcosahedronGeometry(1, 0);
      const blobs = [];
      const ring = 11;
      for (let index = 0; index < ring; index += 1) {
        const angle = (index / ring) * Math.PI * 2;
        const radius = 0.082 + (index % 2) * 0.012;
        blobs.push([
          Math.sin(angle) * radius,
          0.116 + (index % 3) * 0.016,
          Math.cos(angle) * radius * 0.92 - 0.006,
          0.030 + (index % 3) * 0.004
        ]);
      }
      blobs.push([0, 0.138, -0.006, 0.042], [-0.04, 0.130, -0.030, 0.036], [0.04, 0.130, -0.030, 0.036]);
      for (let index = 0; index < blobs.length; index += 1) {
        const [x, y, z, size] = blobs[index];
        const curl = new THREE.Mesh(blobGeometry, hairMaterial);
        curl.position.set(x, y, z);
        curl.scale.set(size, size * 0.9, size);
        curl.rotation.set(index * 0.7, index * 1.1, index * 0.5);
        curls.add(curl);
      }
      return curls;
    }
    case 'afro': {
      // Volume afro no topo; a borda termina acima das sobrancelhas para não
      // cobrir olhos/nariz no rosto visto de frente.
      const afro = new THREE.Mesh(
        new THREE.SphereGeometry(0.128, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.52),
        hairMaterial
      );
      afro.position.set(0, 0.045, -0.012);
      afro.scale.set(1.02, 0.96, 1.02);
      return afro;
    }
    case 'mohawk': {
      const mohawk = new THREE.Mesh(new THREE.SphereGeometry(0.118, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.42), hairMaterial);
      mohawk.position.set(0, 0.04, -0.01);
      mohawk.scale.set(0.42, 0.9, 1.02);
      return mohawk;
    }
    case 'neymar': {
      // Topo baixo com laterais raspadas e crista de cones facetados — uma
      // silhueta low-poly inspirada no moicano espetado do Santos de 2014.
      const crest = new THREE.Group();
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.116, 10, 7, 0, Math.PI * 2, 0, Math.PI * 0.48),
        hairMaterial
      );
      cap.position.set(0, 0.035, -0.008);
      cap.scale.set(0.9, 0.9, 0.98);
      crest.add(cap);
      for (let index = 0; index < 8; index += 1) {
        const z = 0.043 - index * 0.023;
        const height = 0.072 + (index % 3) * 0.018;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.023, height, 5), hairMaterial);
        spike.position.set(index % 2 ? -0.008 : 0.008, 0.095 + height * 0.22, z);
        spike.rotation.x = 0.28;
        spike.rotation.z = (index % 2 ? -1 : 1) * 0.08;
        crest.add(spike);
      }
      return crest;
    }
    case 'side': {
      const side = new THREE.Mesh(new THREE.SphereGeometry(0.114, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), hairMaterial);
      side.position.set(0.02, 0.043, -0.01);
      side.scale.set(1.0, 0.9, 1.0);
      return side;
    }
    case 'bob': {
      const group = new THREE.Group();
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.54), hairMaterial);
      top.position.set(0, 0.04, -0.008);
      top.scale.set(0.96, 1.0, 1.02);
      group.add(top);
      // O cabelo desce atrás da nuca.
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.13, 0.055), hairMaterial);
      back.position.set(0, -0.075, -0.088);
      back.rotation.x = 0.18;
      group.add(back);
      return group;
    }
    case 'bald':
      return null;
    case 'short':
    default: {
      const short = new THREE.Mesh(new THREE.SphereGeometry(0.113, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMaterial);
      short.position.set(0, 0.052, -0.009);
      short.scale.set(0.95, 0.98, 1.0);
      return short;
    }
  }
}

/**
 * Cria o modelo 3D de um jogador.
 *
 * @param {object} options
 * @param {object} options.kit cores e padrão do uniforme
 * @param {number} options.number número da camisa
 * @param {boolean} options.isKeeper usa a roupa do goleiro
 * @param {boolean} [options.simplified] reduz a tesselação sem trocar a anatomia do rig
 * @param {string} [options.photo] retrato do atleta (os jogadores reais)
 * @param {string} [options.hairStyle] penteado (short, curly, afro, mohawk, neymar, side, bob, bald)
 * @param {boolean} [options.stylized] rosto 3D (olhos, sobrancelhas, boca) — padrão para todo o elenco
 * @param {number} [options.heightScale] variação de altura (0.94–1.07)
 */
export function createPlayer3D(options = {}) {
  const {
    kit = { primary: '#2ef0a8', secondary: '#0b2b3a', accent: '#ffffff', pattern: 'solid' },
    number = 10,
    name = '',
    teamName = 'XFC',
    crest = null,
    sponsor = 'XFC',
    brand = 'XF',
    preferredFoot = 'Right',
    isKeeper = false,
    skinTone = SKIN_TONES[0],
    hairColor = HAIR_COLORS[0],
    hairStyle = 'short',
    bootColor = '#171b20',
    heightScale = 1,
    photo = null,
    simplified = false,
    stylized = true
  } = options;

  const primary = isKeeper ? (kit.keeperPrimary || '#f5c518') : kit.primary;
  const secondary = isKeeper ? (kit.keeperSecondary || '#1a1a1a') : kit.secondary;
  const accent = kit.accent || '#ffffff';
  const lowDetail = Boolean(simplified);
  const radialSegments = lowDetail ? 9 : 13;
  const jointSegments = lowDetail ? 8 : 11;

  const root = new THREE.Group();
  root.name = 'xfc-footballer-root';
  root.userData.modelId = 'xfc-footballer-v2';
  root.userData.rigVersion = 2;
  root.userData.detailLevel = lowDetail ? 'mobile' : 'full';
  const body = new THREE.Group();
  body.name = 'xfc-footballer-body';
  root.add(body);

  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92, 0.72),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      toneMapped: false
    })
  );
  shadow.name = 'xfc-player-shadow';
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  shadow.castShadow = false;
  root.add(shadow);

  const jerseyTexture = jerseyTextureFor({
    primary,
    secondary,
    accent,
    pattern: kit.pattern || 'solid'
  });
  // No perfil completo, reflexos discretos ajudam a ler o volume do tecido,
  // dos shorts, da pele e das chuteiras. O celular conserva Lambert para
  // limitar custo e manter o mesmo rig e as mesmas cores do uniforme.
  const jerseyMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ map: jerseyTexture })
    : new THREE.MeshPhongMaterial({ map: jerseyTexture, specular: 0x272b2d, shininess: 9 });
  const shortsMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ color: secondary })
    : new THREE.MeshPhongMaterial({ color: secondary, specular: 0x20272a, shininess: 8 });
  const shortsTrimMaterial = new THREE.MeshLambertMaterial({ color: accent });
  const socksMaterial = new THREE.MeshLambertMaterial({ color: accent });
  const sockBandMaterial = new THREE.MeshLambertMaterial({ color: 0xf4f6f8 });
  const bootMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ color: bootColor })
    : new THREE.MeshPhongMaterial({ color: bootColor, specular: 0x50545a, shininess: 28 });
  const soleMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ color: 0x2a2f36 })
    : new THREE.MeshPhongMaterial({ color: 0x2a2f36, specular: 0x585d63, shininess: 22 });
  const skinMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ color: skinTone })
    : new THREE.MeshPhongMaterial({ color: skinTone, specular: 0x332820, shininess: 13 });
  const hairMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ color: hairColor })
    : new THREE.MeshPhongMaterial({ color: hairColor, specular: 0x171512, shininess: 18 });
  const handMaterial = lowDetail
    ? new THREE.MeshLambertMaterial({ color: isKeeper ? 0xf25c2a : skinTone })
    : new THREE.MeshPhongMaterial({
      color: isKeeper ? 0xf25c2a : skinTone,
      specular: 0x332820,
      shininess: 13
    });
  const faceFeatureMaterial = new THREE.MeshLambertMaterial({
    map: stylized ? softFaceTextureFor() : faceTextureFor(),
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  const earShadeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(skinTone).multiplyScalar(0.72)
  });

  // Caixa torácica atlética: ombros largos, cintura enxuta e volume real em 3D.
  // Tronco humano: peito largo e profundo, cintura estreita, quadril de novo
  // mais largo. A curva entre 1,0 e 1,3 é o que separa "caixa" de "atleta".
  const torsoProfile = [
    { y: 0.855, rx: 0.112, rz: 0.075 },
    { y: 0.878, rx: 0.140, rz: 0.094 },
    { y: 0.918, rx: 0.150, rz: 0.099 },
    { y: 0.968, rx: 0.150, rz: 0.096 },
    { y: 1.012, rx: 0.152, rz: 0.094 },
    { y: 1.062, rx: 0.147, rz: 0.094 },
    { y: 1.132, rx: 0.167, rz: 0.103 },
    { y: 1.205, rx: 0.192, rz: 0.112 },
    { y: 1.278, rx: 0.212, rz: 0.119 },
    { y: 1.336, rx: 0.221, rz: 0.116 },
    { y: 1.382, rx: 0.203, rz: 0.103 },
    { y: 1.418, rx: 0.148, rz: 0.082 },
    { y: 1.442, rx: 0.068, rz: 0.048 }
  ];
  const torso = new THREE.Mesh(ringGeometry(torsoProfile, radialSegments), jerseyMaterial);
  torso.name = 'xfc-player-torso';
  torso.userData.playerPart = 'torso';
  body.add(torso);
  addUniformDetails(body, torsoProfile, {
    number, name, crest, teamName, sponsor, brand, primary, secondary, accent
  });

  // Volume do corpo por baixo da camisa: peitoral, dorsais e trapézio.
  for (const side of [-1, 1]) {
    const pec = new THREE.Mesh(ellipsoidGeometry(10, 8), jerseyMaterial);
    pec.name = side < 0 ? 'xfc-player-left-pec' : 'xfc-player-right-pec';
    pec.position.set(0.074 * side, 1.296, 0.040);
    pec.scale.set(0.080, 0.052, 0.050);
    body.add(pec);

    const lat = new THREE.Mesh(ellipsoidGeometry(9, 7), jerseyMaterial);
    lat.name = side < 0 ? 'xfc-player-left-lat' : 'xfc-player-right-lat';
    lat.position.set(0.122 * side, 1.172, -0.014);
    lat.scale.set(0.052, 0.078, 0.072);
    body.add(lat);

    const trap = new THREE.Mesh(ellipsoidGeometry(8, 6), jerseyMaterial);
    trap.name = side < 0 ? 'xfc-player-left-trapezius' : 'xfc-player-right-trapezius';
    trap.position.set(0.086 * side, 1.398, -0.008);
    trap.scale.set(0.072, 0.030, 0.056);
    body.add(trap);
  }

  // Deltoides arredondados conectam a camisa aos braços sem colá-los ao tronco.
  for (const side of [-1, 1]) {
    const shoulderCap = new THREE.Mesh(ellipsoidGeometry(jointSegments, 8), jerseyMaterial);
    shoulderCap.name = side < 0 ? 'xfc-player-left-deltoid' : 'xfc-player-right-deltoid';
    shoulderCap.position.set(0.176 * side, 1.352, 0);
    shoulderCap.scale.set(0.062, 0.058, 0.056);
    body.add(shoulderCap);
  }

  // Pescoço levemente trapezoidal, modelado por anéis anatômicos (não um cilindro).
  const neck = new THREE.Mesh(ringGeometry([
    { y: -0.075, rx: 0.044, rz: 0.041 },
    { y: -0.052, rx: 0.046, rz: 0.043 },
    { y: -0.015, rx: 0.043, rz: 0.04 },
    { y: 0.028, rx: 0.047, rz: 0.042 },
    { y: 0.06, rx: 0.058, rz: 0.048 },
    { y: 0.075, rx: 0.062, rz: 0.05 }
  ], jointSegments), skinMaterial);
  neck.name = 'xfc-player-neck';
  neck.position.y = 1.47;
  body.add(neck);
  const collar = new THREE.Mesh(
    new THREE.TorusGeometry(0.052, 0.006, 5, radialSegments),
    shortsTrimMaterial
  );
  collar.name = 'xfc-player-collar';
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 1.426;
  body.add(collar);

  // Pelve e shorts de duas pernas separadas: nada de um cilindro único na cintura.
  const pelvis = new THREE.Mesh(ellipsoidGeometry(jointSegments, 8), shortsMaterial);
  pelvis.name = 'xfc-player-pelvis';
  pelvis.position.y = 0.825;
  pelvis.scale.set(0.155, 0.112, 0.102);
  body.add(pelvis);
  const waistband = new THREE.Mesh(
    new THREE.CylinderGeometry(0.151, 0.15, 0.025, radialSegments),
    shortsTrimMaterial
  );
  waistband.name = 'xfc-player-waistband';
  waistband.position.y = 0.91;
  body.add(waistband);

  // Cabeça elipsoidal, cabelo próprio do atleta e rosto curvo (ou retrato real).
  const head = new THREE.Group();
  head.name = 'xfc-player-head';
  head.position.y = 1.655;
  // Cabeça um pouco maior no modo estilizado: é o que dá leitura do rosto a
  // poucos metros de câmera, no estilo do elenco de arcade.
  if (stylized) head.scale.setScalar(1.1);
  body.add(head);
  const skull = new THREE.Mesh(headGeometry(lowDetail ? 14 : 20, lowDetail ? 12 : 16), skinMaterial);
  skull.name = 'xfc-player-skull';
  skull.scale.set(0.09, 0.118, 0.086);
  head.add(skull);
  const face = new THREE.Mesh(conformFacePatch(facePatchGeometry()), faceFeatureMaterial);
  face.name = 'xfc-player-face-features';
  face.userData.facePart = 'features';
  head.add(face);
  const nose = new THREE.Mesh(ellipsoidGeometry(8, 6), skinMaterial);
  nose.name = 'xfc-player-nose';
  nose.userData.facePart = 'nose';
  nose.position.set(0, 0.004, 0.0805);
  nose.scale.set(0.0125, 0.019, 0.0145);
  head.add(nose);
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(ellipsoidGeometry(8, 6), skinMaterial);
    ear.name = side < 0 ? 'xfc-player-left-ear' : 'xfc-player-right-ear';
    ear.position.set(0.086 * side, -0.004, -0.014);
    ear.scale.set(0.024, 0.032, 0.019);
    head.add(ear);
    const innerEar = new THREE.Mesh(ellipsoidGeometry(7, 5), earShadeMaterial);
    innerEar.name = side < 0 ? 'xfc-player-left-ear-detail' : 'xfc-player-right-ear-detail';
    innerEar.position.set(0.092 * side, -0.003, 0.001);
    innerEar.scale.set(0.009, 0.018, 0.006);
    head.add(innerEar);
  }
  // Rosto estilizado: guarda boca e lábio para o hino (a boca abre e fecha).
  const stylizedFace = stylized ? buildStylizedFace(head, { lowDetail, skinTone }) : null;
  const mouthMesh = stylizedFace?.getObjectByName('xfc-player-mouth') || null;
  const lowerLipMesh = stylizedFace?.getObjectByName('xfc-player-lower-lip') || null;
  const mouthBase = mouthMesh ? mouthMesh.scale.clone() : null;
  const mouthBaseZ = mouthMesh ? mouthMesh.position.z : 0;
  const lowerLipBaseY = lowerLipMesh ? lowerLipMesh.position.y : 0;
  const hair = buildHair(hairStyle, hairMaterial);
  if (hair) {
    hair.name = 'xfc-player-hair';
    hair.scale.multiplyScalar(0.82);
    head.add(hair);
  }
  if (photo && !lowDetail && typeof Image !== 'undefined') {
    applyFacePhoto(head, photo, skinMaterial);
  }

  // Braços articulados: manga curta, cotovelo, antebraço, palma e cinco dedos.
  const arms = [];
  const fingerGeometry = new THREE.CapsuleGeometry(0.0065, 0.024, 2, lowDetail ? 5 : 7);
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.name = side < 0 ? 'xfc-player-left-shoulder' : 'xfc-player-right-shoulder';
    shoulder.position.set(0.205 * side, 1.36, 0);
    shoulder.rotation.z = side * 0.05;

    const sleeve = new THREE.Mesh(ringGeometry([
      { y: -0.257, rx: 0.031, rz: 0.032 },
      { y: -0.231, rx: 0.037, rz: 0.037 },
      { y: -0.145, rx: 0.047, rz: 0.044 },
      { y: -0.055, rx: 0.055, rz: 0.05 },
      { y: 0.025, rx: 0.047, rz: 0.044 }
    ], lowDetail ? 8 : 11), jerseyMaterial);
    sleeve.name = 'xfc-player-upper-arm';
    shoulder.add(sleeve);

    const sleeveCuff = new THREE.Mesh(
      new THREE.TorusGeometry(0.032, 0.0045, 4, lowDetail ? 8 : 12),
      shortsTrimMaterial
    );
    sleeveCuff.name = 'xfc-player-sleeve-cuff';
    sleeveCuff.rotation.x = Math.PI / 2;
    sleeveCuff.position.set(0, -0.245, 0);
    shoulder.add(sleeveCuff);

    const elbow = new THREE.Mesh(ellipsoidGeometry(8, 6), skinMaterial);
    elbow.name = 'xfc-player-elbow';
    elbow.position.set(0.006 * side, -0.265, 0);
    elbow.scale.set(0.035, 0.038, 0.034);
    shoulder.add(elbow);

    const forearm = new THREE.Group();
    forearm.name = side < 0 ? 'xfc-player-left-forearm-pivot' : 'xfc-player-right-forearm-pivot';
    forearm.position.set(0.01 * side, -0.264, 0);
    const lowerArm = new THREE.Mesh(ringGeometry([
      { y: -0.257, rx: 0.024, rz: 0.025 },
      { y: -0.222, rx: 0.028, rz: 0.029 },
      { y: -0.145, rx: 0.034, rz: 0.035 },
      { y: -0.065, rx: 0.039, rz: 0.039 },
      { y: 0.006, rx: 0.036, rz: 0.035 }
    ], lowDetail ? 8 : 11), skinMaterial);
    lowerArm.name = 'xfc-player-forearm';
    forearm.add(lowerArm);

    const hand = new THREE.Group();
    hand.name = side < 0 ? 'xfc-player-left-hand' : 'xfc-player-right-hand';
    hand.userData.fingerCount = 5;
    hand.position.set(0, -0.247, 0.002);

    // Palma achatada com dorso reto e base do polegar (tenar): mão tem lado,
    // não é um ovo pendurado no punho.
    const palm = new THREE.Mesh(ringGeometry([
      { y: -0.062, rx: 0.021, rz: 0.009 },
      { y: -0.052, rx: 0.026, rz: 0.0115 },
      { y: -0.028, rx: 0.029, rz: 0.0125 },
      { y: 0.000, rx: 0.027, rz: 0.012 },
      { y: 0.014, rx: 0.023, rz: 0.0105 }
    ], lowDetail ? 8 : 12), handMaterial);
    palm.name = 'xfc-player-palm';
    palm.position.set(0, -0.028, 0.012);
    palm.scale.set(isKeeper ? 1.14 : 1, isKeeper ? 1.12 : 1, isKeeper ? 1.18 : 1);
    hand.add(palm);

    const thenar = new THREE.Mesh(ellipsoidGeometry(8, 6), handMaterial);
    thenar.name = 'xfc-player-thenar';
    thenar.position.set(0.021 * side, -0.062, 0.015);
    thenar.scale.set(0.010, 0.016, 0.0085);
    hand.add(thenar);

    // Dedos em dois segmentos, com curvatura de descanso.
    const proximalGeometry = new THREE.CapsuleGeometry(0.0048, 0.015, 2, lowDetail ? 5 : 7);
    const distalGeometry = new THREE.CapsuleGeometry(0.0040, 0.011, 2, lowDetail ? 5 : 7);
    const knuckleGeometry = new THREE.SphereGeometry(1, lowDetail ? 5 : 7, lowDetail ? 4 : 6);
    const digits = new THREE.InstancedMesh(proximalGeometry, handMaterial, 5);
    digits.name = 'xfc-player-fingers';
    digits.userData.fingerCount = 5;
    const tips = new THREE.InstancedMesh(distalGeometry, handMaterial, 5);
    tips.name = 'xfc-player-fingertips';
    tips.userData.fingerCount = 5;
    const knuckles = new THREE.InstancedMesh(knuckleGeometry, handMaterial, 4);
    knuckles.name = 'xfc-player-knuckles';
    const pose = new THREE.Object3D();
    const fingerXs = [-0.0195, -0.0065, 0.0065, 0.0195];
    const fingerLift = [0.001, 0.0, -0.001, -0.003];
    const spread = [-0.10, -0.03, 0.04, 0.11];
    const knuckleY = -0.086;
    for (let finger = 0; finger < 4; finger += 1) {
      const x = fingerXs[finger];
      const baseY = knuckleY + fingerLift[finger];
      pose.position.set(x, baseY - 0.0125, 0.012);
      pose.rotation.set(-0.30, spread[finger] * side, spread[finger]);
      pose.scale.set(1, finger === 1 || finger === 2 ? 1.12 : 0.98, 1);
      pose.updateMatrix();
      digits.setMatrixAt(finger, pose.matrix);

      pose.position.set(x + spread[finger] * 0.05, baseY - 0.0255, 0.0158);
      pose.rotation.set(-0.52, spread[finger] * side, spread[finger]);
      pose.scale.set(1, finger === 1 || finger === 2 ? 1.08 : 0.94, 1);
      pose.updateMatrix();
      tips.setMatrixAt(finger, pose.matrix);

      pose.position.set(x, baseY + 0.002, 0.0115);
      pose.rotation.set(0, 0, 0);
      pose.scale.set(0.0058, 0.0052, 0.0058);
      pose.updateMatrix();
      knuckles.setMatrixAt(finger, pose.matrix);
    }
    // Polegar: sai do lado da palma, inclinado para dentro.
    pose.position.set(0.026 * side, -0.059, 0.016);
    pose.rotation.set(-0.30, 0, -0.88 * side);
    pose.scale.set(0.95, 0.92, 0.95);
    pose.updateMatrix();
    digits.setMatrixAt(4, pose.matrix);
    pose.position.set(0.035 * side, -0.066, 0.024);
    pose.rotation.set(-0.62, 0, -0.88 * side);
    pose.scale.set(0.9, 0.88, 0.9);
    pose.updateMatrix();
    tips.setMatrixAt(4, pose.matrix);
    digits.instanceMatrix.needsUpdate = true;
    tips.instanceMatrix.needsUpdate = true;
    knuckles.instanceMatrix.needsUpdate = true;
    hand.add(digits, tips, knuckles);
    forearm.add(hand);
    shoulder.add(forearm);
    body.add(shoulder);
    arms.push({ shoulder, forearm, elbow, hand });
  }

  // Duas pernas articuladas, com coxa, joelho, panturrilha, caneleira e chuteira.
  const legs = [];
  for (const side of [-1, 1]) {
    const hip = new THREE.Group();
    hip.name = side < 0 ? 'xfc-player-left-hip' : 'xfc-player-right-hip';
    hip.position.set(0.092 * side, 0.795, 0);

    const thigh = new THREE.Mesh(ringGeometry([
      { y: -0.425, rx: 0.047, rz: 0.045 },
      { y: -0.375, rx: 0.055, rz: 0.052 },
      { y: -0.255, rx: 0.066, rz: 0.06 },
      { y: -0.12, rx: 0.074, rz: 0.066 },
      { y: 0.03, rx: 0.069, rz: 0.064 }
    ], lowDetail ? 8 : 11), skinMaterial);
    thigh.name = 'xfc-player-thigh';
    hip.add(thigh);

    const shortsLeg = new THREE.Mesh(ringGeometry([
      { y: -0.205, rx: 0.068, rz: 0.068 },
      { y: -0.174, rx: 0.076, rz: 0.075 },
      { y: -0.08, rx: 0.081, rz: 0.078 },
      { y: 0.025, rx: 0.078, rz: 0.074 }
    ], lowDetail ? 8 : 11), shortsMaterial);
    shortsLeg.name = 'xfc-player-short-leg';
    hip.add(shortsLeg);
    const shortHem = new THREE.Mesh(
      new THREE.TorusGeometry(0.069, 0.0035, 4, lowDetail ? 8 : 12),
      shortsTrimMaterial
    );
    shortHem.name = 'xfc-player-short-hem';
    shortHem.rotation.x = Math.PI / 2;
    shortHem.position.y = -0.192;
    hip.add(shortHem);

    const knee = new THREE.Group();
    knee.name = side < 0 ? 'xfc-player-left-knee-pivot' : 'xfc-player-right-knee-pivot';
    knee.position.y = -0.405;
    const kneecap = new THREE.Mesh(ellipsoidGeometry(9, 7), skinMaterial);
    kneecap.name = 'xfc-player-kneecap';
    kneecap.position.y = 0.005;
    kneecap.scale.set(0.05, 0.052, 0.047);
    knee.add(kneecap);

    const calf = new THREE.Mesh(ringGeometry([
      { y: -0.326, rx: 0.033, rz: 0.034 },
      { y: -0.28, rx: 0.037, rz: 0.038 },
      { y: -0.19, rx: 0.041, rz: 0.042 },
      { y: -0.09, rx: 0.046, rz: 0.046 },
      { y: 0.015, rx: 0.044, rz: 0.044 }
    ], lowDetail ? 8 : 11), skinMaterial);
    calf.name = 'xfc-player-calf';
    knee.add(calf);

    const sock = new THREE.Mesh(ringGeometry([
      { y: -0.328, rx: 0.035, rz: 0.036 },
      { y: -0.287, rx: 0.039, rz: 0.04 },
      { y: -0.19, rx: 0.043, rz: 0.044 },
      { y: -0.102, rx: 0.048, rz: 0.048 },
      { y: -0.075, rx: 0.047, rz: 0.047 }
    ], lowDetail ? 8 : 11), socksMaterial);
    sock.name = 'xfc-player-sock';
    knee.add(sock);
    const sockBand = new THREE.Mesh(
      new THREE.TorusGeometry(0.046, 0.004, 4, lowDetail ? 8 : 12),
      sockBandMaterial
    );
    sockBand.name = 'xfc-player-sock-band';
    sockBand.rotation.x = Math.PI / 2;
    sockBand.position.y = -0.083;
    knee.add(sockBand);
    for (const ribY of [-0.124, -0.17]) {
      const rib = new THREE.Mesh(
        new THREE.TorusGeometry(0.046, 0.0018, 3, lowDetail ? 8 : 12),
        sockBandMaterial
      );
      rib.name = 'xfc-player-sock-rib';
      rib.rotation.x = Math.PI / 2;
      rib.position.y = ribY;
      knee.add(rib);
    }

    const foot = new THREE.Group();
    foot.name = side < 0 ? 'xfc-player-left-ankle' : 'xfc-player-right-ankle';
    foot.position.set(0, -0.32, 0.014);
    // Chuteira com forma de pé: calcanhar alto, peito do pé rebaixado, bico
    // fino e entressola reta. Antes era um ovo com uma bolacha embaixo.
    const boot = new THREE.Mesh(footShellGeometry([
      { z: -0.082, width: 0.018, height: 0.020, cy: -0.026 },
      { z: -0.070, width: 0.030, height: 0.034, cy: -0.018 },
      { z: -0.048, width: 0.037, height: 0.038, cy: -0.014 },
      { z: -0.012, width: 0.040, height: 0.033, cy: -0.019 },
      { z: 0.028, width: 0.042, height: 0.026, cy: -0.024 },
      { z: 0.070, width: 0.043, height: 0.020, cy: -0.028 },
      { z: 0.108, width: 0.038, height: 0.015, cy: -0.031 },
      { z: 0.138, width: 0.026, height: 0.010, cy: -0.033 },
      { z: 0.152, width: 0.013, height: 0.006, cy: -0.034 }
    ], lowDetail ? 10 : 16), bootMaterial);
    boot.name = 'xfc-player-boot';
    foot.add(boot);

    const sole = new THREE.Mesh(footShellGeometry([
      { z: -0.086, width: 0.022, height: 0.008, cy: -0.049 },
      { z: -0.072, width: 0.033, height: 0.009, cy: -0.048 },
      { z: -0.040, width: 0.040, height: 0.009, cy: -0.048 },
      { z: 0.000, width: 0.043, height: 0.009, cy: -0.048 },
      { z: 0.060, width: 0.045, height: 0.009, cy: -0.049 },
      { z: 0.110, width: 0.041, height: 0.008, cy: -0.050 },
      { z: 0.140, width: 0.029, height: 0.007, cy: -0.051 },
      { z: 0.154, width: 0.014, height: 0.005, cy: -0.051 }
    ], lowDetail ? 10 : 14), soleMaterial);
    sole.name = 'xfc-player-boot-sole';
    foot.add(sole);

    // Colarinho do tornozelo e língua: o que faz a silhueta ler como chuteira.
    const collar = new THREE.Mesh(
      new THREE.TorusGeometry(0.027, 0.005, lowDetail ? 4 : 6, lowDetail ? 10 : 16),
      bootMaterial
    );
    collar.name = 'xfc-player-boot-collar';
    collar.rotation.x = Math.PI / 2 - 0.14;
    collar.position.set(0, 0.004, -0.034);
    collar.scale.set(1, 1.05, 0.8);
    foot.add(collar);

    const tongue = new THREE.Mesh(new THREE.BoxGeometry(0.021, 0.0035, 0.044), bootMaterial);
    tongue.name = 'xfc-player-boot-tongue';
    tongue.position.set(0, 0.0045, 0.008);
    tongue.rotation.x = -0.28;
    foot.add(tongue);

    const lace = new THREE.InstancedMesh(new THREE.BoxGeometry(0.024, 0.0025, 0.0035), sockBandMaterial, 4);
    lace.name = 'xfc-player-boot-laces';
    const lacePose = new THREE.Object3D();
    for (let index = 0; index < 4; index += 1) {
      lacePose.position.set(0, 0.0120 - index * 0.0043, -0.005 + index * 0.0177);
      lacePose.rotation.set(-0.22, 0, index % 2 ? 0.16 : -0.16);
      lacePose.updateMatrix();
      lace.setMatrixAt(index, lacePose.matrix);
    }
    lace.instanceMatrix.needsUpdate = true;
    foot.add(lace);

    const studGeometry = new THREE.CylinderGeometry(0.0042, 0.0058, 0.014, 5);
    const studs = new THREE.InstancedMesh(studGeometry, bootMaterial, 6);
    studs.name = 'xfc-player-boot-studs';
    const studPose = new THREE.Object3D();
    const studSpots = [
      [-0.030, -0.068], [0.030, -0.068], [-0.034, -0.020],
      [0.034, -0.020], [-0.026, 0.062], [0.026, 0.062]
    ];
    studSpots.forEach(([x, z], index) => {
      studPose.position.set(x, -0.058, z);
      studPose.updateMatrix();
      studs.setMatrixAt(index, studPose.matrix);
    });
    studs.instanceMatrix.needsUpdate = true;
    foot.add(studs);
    knee.add(foot);
    hip.add(knee);
    body.add(hip);
    legs.push({ hip, knee, foot });
  }

  // Cartão do árbitro fica preso à mão direita e continua sob a animação atual.
  const cardMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.085, 0.125),
    new THREE.MeshBasicMaterial({ color: 0xf5c518, side: THREE.DoubleSide })
  );
  cardMesh.name = 'xfc-player-card';
  cardMesh.position.set(0, -0.22, 0.045);
  cardMesh.visible = false;
  arms[1].forearm.add(cardMesh);

  root.scale.setScalar(heightScale);
  // A lista de malhas que projetam sombra é montada uma vez: o LOD liga e
  // desliga a sombra dinâmica sem varrer o rig a cada quadro.
  const shadowMeshes = [];
  root.traverse(object => {
    if (object.isMesh && object !== shadow) {
      object.castShadow = true;
      shadowMeshes.push(object);
    }
  });
  shadow.castShadow = false;
  let castsDynamicShadow = true;

  let phase = Math.random() * Math.PI * 2;
  const kickLegIndex = String(preferredFoot).toLowerCase().startsWith('l') ? 0 : 1;
  let kickTimer = 0;
  let kickDuration = 0.4;
  let kickType = 'shot';
  let previousSpeed = 0;
  let strideBlend = 0;
  let headerTimer = 0;
  let headerDuration = 0.38;
  let lookTarget = null;
  let celebrateTimer = 0;
  let celebrateStyle = 'classic';
  let celebrateElapsed = 0;
  let signalTimer = 0;
  let diveTimer = 0;
  let diveDir = 1;
  let cardTimer = 0;
  let cardPrepTimer = 0;
  let slideTimer = 0;
  let slideDuration = 0.82;
  let slideDir = 1;
  let receiveTimer = 0;
  let receiveDuration = 0.42;
  let reactionTimer = 0;
  let reactionDuration = 0;
  let reactionKind = '';
  // Gesto de chamar o jogador para conversa.
  let callTimer = 0;
  let callAmount = 0;
  let elapsedCallTime = 0;
  let callElapsedTotal = 0;
  // Queda prolongada (vítima de falta): o atleta fica no gramado até o tempo
  // acabar, em vez de dar um pulo e levantar.
  let downTimer = 0;
  let downDuration = 0;
  let downKind = 'body';
  // Canto do hino: abre/fecha a boca e dá o balanço do corpo. `0` = desligado.
  let anthemTimer = 0;
  let anthemElapsed = 0;
  let anthemSeed = 0;
  let anthemIntensity = 0;

  /** Pose neutra do rig: base de todo quadro (as camadas somam sobre ela). */
  function resetRigPose() {
    // O hino é a única camada que mexe na boca: fora dele a boca fica fechada.
    if (!anthemTimer && mouthMesh) {
      mouthMesh.scale.copy(mouthBase);
      mouthMesh.position.z = mouthBaseZ;
      if (lowerLipMesh) lowerLipMesh.position.y = lowerLipBaseY;
    }
    body.position.set(0, 0, 0);
    body.rotation.set(0, 0, 0);
    head.rotation.set(0, 0, 0);
    for (let index = 0; index < arms.length; index += 1) {
      arms[index].shoulder.rotation.set(0, 0, (index === 0 ? -1 : 1) * 0.05);
      arms[index].forearm.rotation.set(0, 0, 0);
    }
    for (const leg of legs) {
      leg.hip.rotation.set(0, 0, 0);
      leg.knee.rotation.set(0, 0, 0);
      leg.foot.rotation.set(0, 0, 0);
    }
  }

  /** Abre a boca e balança o corpo no ritmo do hino (camada final do quadro). */
  function applyAnthem(dt, state) {
    if (!anthemTimer) return;
    anthemElapsed += dt;
    anthemTimer = Math.max(0, anthemTimer - dt);
    const intensity = anthemIntensity;
    if (anthemTimer <= 0 || intensity <= 0.001) {
      anthemTimer = 0;
      if (mouthMesh) {
        mouthMesh.scale.copy(mouthBase);
        mouthMesh.position.z = mouthBaseZ;
        if (lowerLipMesh) lowerLipMesh.position.y = lowerLipBaseY;
      }
      return;
    }
    const time = anthemElapsed;
    const seed = anthemSeed;
    if (mouthMesh) {
      const openness = anthemMouth(time, seed) * intensity;
      // Boca: abre na vertical, alarga um pouco e o lábio de baixo desce.
      mouthMesh.scale.set(
        mouthBase.x * (1 + openness * 0.16),
        mouthBase.y * (1 + openness * 2.35),
        mouthBase.z * (1 + openness * 0.3)
      );
      mouthMesh.position.z = mouthBaseZ + openness * 0.0012;
      if (lowerLipMesh) lowerLipMesh.position.y = lowerLipBaseY - openness * 0.0075;
    }
    const sway = anthemSway(time, seed);
    // Balanço pequeno: ombro, tronco e cabeça, sem quebrar a caminhada.
    body.rotation.z += sway.side * 0.35 * intensity;
    body.rotation.x += Math.abs(sway.side) * 0.16 * intensity;
    head.rotation.x -= sway.nod * 0.9 * intensity;
    head.rotation.y += sway.side * 1.5 * intensity;
    arms[0].shoulder.rotation.x -= 0.1 * intensity;
    arms[1].shoulder.rotation.x -= 0.1 * intensity;
  }

  const api = {
    root,
    body,
    head,
    legs,
    arms,
    /** Comemoração de gol: braços para o alto e pulo curto. */
    celebrate(duration = 2.6, style = 'classic') {
      celebrateTimer = duration;
      celebrateStyle = CELEBRATION_STYLES.has(style) ? style : 'classic';
      celebrateElapsed = 0;
    },
    /**
     * Canto do hino: a boca abre nas sílabas (rig clássico) e o corpo balança
     * devagar. `intensity` 0..1 controla o quanto o atleta "canta junto".
     */
    anthem(duration = 5, intensity = 1) {
      anthemTimer = Math.max(0.2, Number(duration) || 5);
      anthemElapsed = 0;
      anthemSeed = (number % 7) / 7 + (name?.length % 5) / 5;
      anthemIntensity = Math.max(0, Math.min(1, Number(intensity ?? 1)));
    },
    /** Encerra o canto (a boca volta a fechar na pose neutra). */
    stopAnthem() {
      anthemTimer = 0;
      anthemIntensity = 0;
      if (mouthMesh) {
        mouthMesh.scale.copy(mouthBase);
        mouthMesh.position.z = mouthBaseZ;
        if (lowerLipMesh) lowerLipMesh.position.y = lowerLipBaseY;
      }
    },
    get singing() {
      return anthemTimer > 0;
    },
    /** Tempo restante no chão (0 = de pé). Usado por testes e diagnósticos. */
    get downFor() {
      return downTimer;
    },
    get downReason() {
      return downKind;
    },
    /** Sinal de arbitragem: o braço direito sobe apitando. */
    header(duration = 0.38) { headerDuration = duration; headerTimer = duration; },
    signal(duration = 1.1) {
      signalTimer = duration;
    },
    /** Gesto de "venha aqui": braço estendido, chamando o jogador. */
    callOver(intensity = 1) {
      callTimer = 0.12;
      callAmount = Math.max(0, Math.min(1, intensity));
    },
    /** Mostra o cartão (amarelo ou vermelho) na mão direita. */
    prepareCard(duration = 0.58) {
      signalTimer = 0;
      cardTimer = 0;
      cardMesh.visible = false;
      cardPrepTimer = duration;
    },
    showCard(color = 'yellow', duration = 1.7) {
      signalTimer = 0;
      cardPrepTimer = 0;
      cardTimer = duration;
      cardMesh.visible = true;
      cardMesh.material.color.set(color === 'red' ? 0xe0303e : 0xf5c518);
    },
    /** Mergulho do goleiro para o lado (defesa rasteira ou aérea). */
    dive(dir = 1) {
      diveTimer = 0.95;
      diveDir = dir >= 0 ? 1 : -1;
    },
    /** Carrinho com deslize, extensão das pernas e recuperação em duas fases. */
    slideTackle(dir = 1, duration = 0.82) {
      slideDir = dir >= 0 ? 1 : -1;
      slideDuration = duration;
      slideTimer = duration;
      reactionTimer = 0;
    },
    /** Primeiro toque de recepção: abre os braços e amortece o tronco. */
    receive(duration = 0.42) {
      receiveDuration = Math.max(0.16, Number(duration) || 0.42);
      receiveTimer = receiveDuration;
    },
    /** Queda, impacto, protesto ou caminhada de expulsão. */
    /**
     * Queda real: o atleta vai ao chão, fica caído (não levanta no meio da
     * animação) e leva a mão ao rosto quando pede `handOnFace`.
     * `down` é o que o jogo usa para vítima de carrinho; `fall` continua
     * existindo como cambaleio curto.
     */
    react(kind = 'fall', duration = 0.82, options = {}) {
      if (kind === 'down') {
        downKind = options.handOnFace ? 'face' : 'body';
        downTimer = Math.max(0.6, duration || 2.4);
        downDuration = downTimer;
        slideTimer = 0;
        diveTimer = 0;
        cardTimer = 0;
        reactionTimer = 0;
        return;
      }
      if (kind === 'ejected') {
        slideTimer = 0;
        diveTimer = 0;
        cardTimer = 0;
        signalTimer = 0;
      }
      reactionKind = kind;
      reactionDuration = duration;
      reactionTimer = duration;
    },
    /** Pose base por osso (corrida, chute, comemoração, defesa...). */
    updateBase(dt, { speed = 0, moving = false, lean = 0, ownsBall = false, protecting = false } = {}) {
      // Todo quadro parte de uma pose neutra: as camadas de animação (máscaras,
      // blend, IK) escrevem DEPOIS e nunca acumulam offset de um quadro no outro.
      resetRigPose();
      for (const leg of legs) leg.foot.rotation.x = 0;
      callElapsedTotal += dt;
      // Caído no gramado: pose fixa, sobrepondo tudo (o atleta não corre nem
      // chuta enquanto está no chão). Bloqueia o resto da animação base.
      if (downTimer > 0) {
        downTimer = Math.max(0, downTimer - dt);
        const entering = Math.min(1, (downDuration - downTimer) / 0.28);
        const leaving = Math.min(1, downTimer / 0.35);
        const lie = Math.min(entering, leaving);   // 0 = de pé, 1 = no chão
        const t = 1 - downTimer / Math.max(0.01, downDuration);
        const writhing = downKind === 'face'
          ? Math.sin(t * 5.5) * 0.05 * lie : 0;
        // Deitado de costas: o corpo gira em torno de X e cai para o lado.
        body.rotation.x = -1.42 * lie + writhing;
        body.rotation.z = slideDir * 0.16 * lie;
        body.position.y = -0.52 + 0.52 * lie;
        body.rotation.y = slideDir * 0.25 * lie;
        // Pernas dobradas, joelhos para cima.
        legs[0].hip.rotation.x = 0.55 * lie + writhing * 2;
        legs[1].hip.rotation.x = 0.85 * lie - writhing * 2;
        legs[0].knee.rotation.x = -0.95 * lie;
        legs[1].knee.rotation.x = -0.62 * lie;
        legs[0].foot.rotation.x = -0.2 * lie;
        legs[1].foot.rotation.x = -0.25 * lie;
        if (downKind === 'face') {
          // Mão no rosto: um braço protege a cara, o outro fica no gramado.
          arms[1].shoulder.rotation.x = -1.05 * lie;
          arms[1].shoulder.rotation.z = 0.95 * lie;
          arms[1].forearm.rotation.x = -1.65 * lie;
          arms[0].shoulder.rotation.x = -0.35 * lie;
          arms[0].shoulder.rotation.z = -0.62 * lie;
          arms[0].forearm.rotation.x = -0.55 * lie;
          head.rotation.x = -0.22 * lie;
          head.rotation.y = slideDir * 0.18 * lie;
        } else {
          arms[0].shoulder.rotation.x = -0.28 * lie;
          arms[1].shoulder.rotation.x = -0.22 * lie;
          arms[0].shoulder.rotation.z = -0.75 * lie;
          arms[1].shoulder.rotation.z = 0.7 * lie;
          head.rotation.x = -0.3 * lie;
        }
        return;
      }
      receiveTimer = Math.max(0, receiveTimer - dt);
      const receiveProgress = 1 - receiveTimer / receiveDuration;
      const receiveEnvelope = receiveTimer > 0
        ? Math.sin(Math.PI * Math.max(0, Math.min(1, receiveProgress)))
        : 0;
      // Mergulho do goleiro: corpo para o lado, braços esticados.
      if (diveTimer > 0) {
        diveTimer = Math.max(0, diveTimer - dt);
        const progress = 1 - diveTimer / 0.95;
        const arc = Math.sin(Math.PI * Math.min(1, progress * 1.06));
        body.position.y = arc * 0.34;
        body.rotation.x = -0.22 - arc * 0.15;
        body.rotation.z = diveDir * (0.35 + arc * 0.85);
        // Braço do lado da defesa estica para cima; o outro segura o corpo.
        const lead = diveDir > 0 ? arms[1] : arms[0];
        const trail = diveDir > 0 ? arms[0] : arms[1];
        lead.shoulder.rotation.x = -2.55;
        lead.shoulder.rotation.z = -diveDir * 0.55;
        lead.forearm.rotation.x = -0.25;
        trail.shoulder.rotation.x = -1.15;
        trail.shoulder.rotation.z = diveDir * 0.85;
        trail.forearm.rotation.x = -1.05;
        // Pernas abertas no esticão.
        legs[0].hip.rotation.x = 0.35 + arc * 0.3;
        legs[1].hip.rotation.x = -0.28 - arc * 0.22;
        legs[0].knee.rotation.x = 0.5;
        legs[1].knee.rotation.x = 0.2;
        head.rotation.x = -0.15;
        head.rotation.y = diveDir * 0.3;
        return;
      }
      // Chamando o jogador: braço esticado para a frente, mão abanando.
      if (callTimer > 0) {
        callTimer = Math.max(0, callTimer - dt);
        const wave = Math.sin(elapsedCallTime * 7) * 0.22;
        elapsedCallTime += dt;
        arms[1].shoulder.rotation.x = -1.28 * callAmount;
        arms[1].shoulder.rotation.z = -0.34 * callAmount;
        arms[1].forearm.rotation.x = -0.5 * callAmount + wave;
        arms[0].shoulder.rotation.x = -0.12;
        arms[0].forearm.rotation.x = -0.2;
        head.rotation.x = -0.06 * callAmount;
        body.rotation.x = 0.02;
        callTimer = Math.max(callTimer, 0.02);
      }
      // Cartão ao alto: o árbitro mostra amarelo/vermelho para a torcida ver.
      if (cardPrepTimer > 0) {
        cardPrepTimer = Math.max(0, cardPrepTimer - dt);
        const reach = 1 - cardPrepTimer / 0.58;
        arms[1].shoulder.rotation.x = -0.2 - reach * 0.55;
        arms[1].shoulder.rotation.z = -0.22;
        arms[1].forearm.rotation.x = -0.32 - reach * 0.42;
        arms[0].shoulder.rotation.x = -0.18;
        arms[0].forearm.rotation.x = 0.12;
        body.position.y = 0;
        body.rotation.x = 0.035;
        body.rotation.z = 0;
        head.rotation.x = 0.08;
        return;
      }
      if (cardTimer > 0) {
        cardTimer = Math.max(0, cardTimer - dt);
        if (cardTimer === 0) cardMesh.visible = false;
        body.position.y = 0;
        body.rotation.x = 0.03;
        body.rotation.z = 0;
        arms[1].shoulder.rotation.x = -2.85;
        arms[1].shoulder.rotation.z = -0.32;
        arms[1].forearm.rotation.x = 0.12;
        arms[0].shoulder.rotation.x = -0.55;
        arms[0].shoulder.rotation.z = 0.18;
        arms[0].forearm.rotation.x = 0.95;
        legs[0].hip.rotation.x = 0.06;
        legs[1].hip.rotation.x = -0.06;
        legs[0].knee.rotation.x = legs[1].knee.rotation.x = 0.14;
        head.rotation.x = -0.32;
        head.rotation.y = 0;
        return;
      }
      // Sinal do árbitro tem prioridade sobre a pose neutra.
      if (signalTimer > 0) {
        signalTimer = Math.max(0, signalTimer - dt);
        body.position.y = 0;
        body.rotation.x = 0.02;
        body.rotation.z = 0;
        arms[1].shoulder.rotation.x = -2.7;
        arms[1].shoulder.rotation.z = -0.35;
        arms[1].forearm.rotation.x = 0.4;
        arms[0].shoulder.rotation.x = -0.9;
        arms[0].shoulder.rotation.z = 0.16;
        arms[0].forearm.rotation.x = 0.75;
        head.rotation.y = 0;
        head.rotation.x = -0.28;
        legs[0].hip.rotation.x = legs[1].hip.rotation.x = 0.06;
        legs[0].knee.rotation.x = legs[1].knee.rotation.x = 0.12;
        return;
      }
      if (slideTimer > 0) {
        slideTimer = Math.max(0, slideTimer - dt);
        const progress = 1 - slideTimer / Math.max(0.01, slideDuration);
        const recovery = Math.max(0, Math.min(1, (progress - 0.58) / 0.42));
        body.position.y = 0.025 + recovery * 0.08;
        body.rotation.x = 0.48 * (1 - recovery);
        body.rotation.z = slideDir * 0.98 * (1 - recovery);
        arms[0].shoulder.rotation.x = -1.62;
        arms[1].shoulder.rotation.x = -1.54;
        arms[0].shoulder.rotation.z = slideDir * 0.32;
        arms[1].shoulder.rotation.z = slideDir * 0.32;
        arms[0].forearm.rotation.x = -0.35;
        arms[1].forearm.rotation.x = -0.35;
        legs[0].hip.rotation.x = 0.9 * (1 - recovery) - 0.12 * recovery;
        legs[1].hip.rotation.x = -0.76 * (1 - recovery) + 0.12 * recovery;
        legs[0].knee.rotation.x = 0.64 * (1 - recovery);
        legs[1].knee.rotation.x = 0.3 * (1 - recovery);
        return;
      }
      if (reactionTimer > 0) {
        reactionTimer = Math.max(0, reactionTimer - dt);
        const progress = 1 - reactionTimer / Math.max(0.01, reactionDuration);
        const pulse = Math.sin(Math.PI * Math.min(1, progress * 1.35));
        if (reactionKind === 'ejected') {
          phase += dt * (moving ? 5.5 : 1.2);
          const step = Math.sin(phase);
          body.position.y = moving ? Math.abs(Math.sin(phase * 2)) * 0.022 : 0;
          body.rotation.x = 0.035;
          body.rotation.z = 0;
          arms[0].shoulder.rotation.x = -step * 0.2;
          arms[1].shoulder.rotation.x = step * 0.2;
          legs[0].hip.rotation.x = step * 0.24;
          legs[1].hip.rotation.x = -step * 0.24;
          legs[0].knee.rotation.x = Math.max(0, -step) * 0.28;
          legs[1].knee.rotation.x = Math.max(0, step) * 0.28;
          head.rotation.x = -0.17;
          return;
        }
        if (reactionKind === 'listen') {
          // Jogador escutando a explicação do árbitro: cabeça baixa, mãos
          // para trás, peso em uma perna só.
          head.rotation.x = 0.26;
          head.rotation.y = Math.sin(callElapsedTotal * 2.4) * 0.06;
          arms[0].shoulder.rotation.x = 0.42;
          arms[1].shoulder.rotation.x = 0.42;
          arms[0].forearm.rotation.x = -0.5;
          arms[1].forearm.rotation.x = -0.5;
          body.rotation.x = 0.1;
          body.position.y = 0;
          legs[0].hip.rotation.x = 0.06;
          legs[1].hip.rotation.x = -0.04;
          legs[0].knee.rotation.x = 0.08;
          return;
        }
        body.position.y = reactionKind === 'fall' ? 0.04 + pulse * 0.12 : pulse * 0.04;
        body.rotation.x = reactionKind === 'fall' ? 0.54 * pulse : 0.08 * pulse;
        body.rotation.z = reactionKind === 'fall' ? slideDir * 0.82 * pulse : slideDir * 0.12 * pulse;
        if (reactionKind === 'separate') {
          body.rotation.x = -0.055 * pulse;
          body.rotation.z = slideDir * 0.06 * pulse;
          arms[0].shoulder.rotation.x = -1.2;
          arms[1].shoulder.rotation.x = -1.2;
          arms[0].shoulder.rotation.z = 0.58;
          arms[1].shoulder.rotation.z = -0.58;
          arms[0].forearm.rotation.x = -0.24;
          arms[1].forearm.rotation.x = -0.24;
          head.rotation.x = -0.08;
          return;
        }
        if (reactionKind === 'fall') {
          arms[0].shoulder.rotation.x = -1.8;
          arms[1].shoulder.rotation.x = -1.28;
          arms[0].forearm.rotation.x = -0.2;
          arms[1].forearm.rotation.x = 0.25;
          legs[0].hip.rotation.x = 0.58 * pulse;
          legs[1].hip.rotation.x = -0.45 * pulse;
          legs[0].knee.rotation.x = 0.72 * pulse;
          legs[1].knee.rotation.x = 0.25 * pulse;
        } else {
          const protesting = reactionKind === 'protest' || reactionKind === 'ejected';
          arms[0].shoulder.rotation.x = protesting ? -1.65 : -0.45;
          arms[1].shoulder.rotation.x = protesting ? -1.82 : -0.3;
          arms[0].shoulder.rotation.z = 0.14;
          arms[1].shoulder.rotation.z = -0.14;
          legs[0].hip.rotation.x = 0.1 * pulse;
          legs[1].hip.rotation.x = -0.1 * pulse;
          legs[0].knee.rotation.x = legs[1].knee.rotation.x = 0.05;
        }
        head.rotation.x = reactionKind === 'fall' ? 0.18 : -0.12;
        return;
      }
      if (celebrateTimer > 0) {
        celebrateTimer = Math.max(0, celebrateTimer - dt);
        celebrateElapsed += dt;
        const settled = (celebrateStyle === 'knee-slide' && celebrateElapsed > 0.62)
          || (celebrateStyle === 'fist-pump' && celebrateElapsed > 0.65);
        const celebratingRun = moving && speed > 0.45 && !settled;
        phase += dt * (celebratingRun ? 6 + Math.min(speed / 6, 1) * 4 : celebrateStyle === 'fist-pump' ? 7 : 2);
        applyCelebrationPose({
          style: celebrateStyle,
          phase,
          running: celebratingRun,
          body,
          arms,
          legs,
          head
        });
        return;
      }
      const safeSpeed = Math.max(0, Number(speed) || 0);
      const acceleration = dt > 0.0001 ? (safeSpeed - previousSpeed) / dt : 0;
      previousSpeed = safeSpeed;
      const strideTarget = Math.min(1.15, safeSpeed / 6.4);
      const strideBlendRate = strideTarget > strideBlend ? 8 : 5;
      strideBlend += (strideTarget - strideBlend) * (1 - Math.exp(-strideBlendRate * dt));
      head.rotation.x = 0;
      phase += dt * (2.2 + Math.min(safeSpeed, 9) * 1.32);
      const wave = Math.sin(phase);
      const swing = (0.055 + strideBlend * 0.68) * (ownsBall ? 0.82 : 1);

      // Cadência contínua por velocidade; a amplitude amortece ao arrancar e
      // ao frear, evitando a corrida rígida que começava/parava num único frame.
      legs[0].hip.rotation.x = wave * swing;
      legs[1].hip.rotation.x = -wave * swing;
      legs[0].knee.rotation.x = Math.max(0, -wave) * swing * 1.45;
      legs[1].knee.rotation.x = Math.max(0, wave) * swing * 1.45;
      arms[0].shoulder.rotation.x = -wave * swing * 0.78;
      arms[1].shoulder.rotation.x = wave * swing * 0.78;
      arms[0].shoulder.rotation.z = -0.1 - strideBlend * 0.07;
      arms[1].shoulder.rotation.z = 0.1 + strideBlend * 0.07;
      legs[0].foot.rotation.x = Math.max(0, wave) * 0.2 - 0.045;
      legs[1].foot.rotation.x = Math.max(0, -wave) * 0.2 - 0.045;
      arms[0].forearm.rotation.x = -0.2 - Math.abs(wave) * 0.18;
      arms[1].forearm.rotation.x = -0.2 - Math.abs(wave) * 0.18;

      body.position.y = strideBlend > 0.03
        ? Math.abs(Math.sin(phase * 2)) * 0.019 * strideBlend
        : Math.sin(phase * 0.4) * 0.005;
      body.rotation.z = lean * 0.6 + Math.sin(phase) * strideBlend * 0.018;
      body.rotation.x = 0.02 + Math.max(-8, Math.min(8, acceleration)) * 0.006;

      // Passe/cruzamento/chute usam a perna dominante e um ciclo de preparação
      // e follow-through; o calçado continua animado no mesmo esqueleto 3D.
      if (kickTimer > 0) {
        kickTimer = Math.max(0, kickTimer - dt);
        const kickPhase = 1 - kickTimer / kickDuration;
        const kickAmount = Math.sin(Math.PI * Math.max(0, Math.min(1, kickPhase)));
        legs[kickLegIndex].hip.rotation.x = -kickAmount * (kickType === 'cross' ? 0.92 : 0.78);
        legs[kickLegIndex].knee.rotation.x = kickAmount * 0.46;
        legs[kickLegIndex].foot.rotation.x = -kickAmount * 0.2;
      } else if (ownsBall) {
        legs[kickLegIndex].hip.rotation.x -= Math.max(0, Math.sin(phase * 2.2)) * 0.1;
      }
      if (protecting) {
        arms[0].shoulder.rotation.z = 0.48;
        arms[1].shoulder.rotation.z = -0.48;
        arms[0].forearm.rotation.x = -0.56;
        arms[1].forearm.rotation.x = -0.56;
        body.rotation.x += 0.04;
      }
      if (receiveEnvelope > 0.01) {
        const cushion = receiveEnvelope;
        body.rotation.x -= cushion * 0.065;
        arms[0].shoulder.rotation.x = -0.28 - cushion * 0.58;
        arms[1].shoulder.rotation.x = -0.28 - cushion * 0.58;
        arms[0].shoulder.rotation.z = 0.28;
        arms[1].shoulder.rotation.z = -0.28;
        arms[0].forearm.rotation.x = -0.4 - cushion * 0.18;
        arms[1].forearm.rotation.x = -0.4 - cushion * 0.18;
      }

      // A cabeça acompanha a bola.
      if (lookTarget) {
        const dx = lookTarget.x - root.position.x;
        const dz = lookTarget.z - root.position.z;
        const angle = Math.atan2(dx, dz) - root.rotation.y;
        head.rotation.y = Math.max(-0.9, Math.min(0.9, angle));
        head.rotation.x = Math.max(-0.4, Math.min(0.4, -0.05 + lookTarget.y * 0.05));
      }
      if (headerTimer > 0) {
        headerTimer = Math.max(0, headerTimer - dt);
        const pulse = Math.sin(Math.PI * (1 - headerTimer / Math.max(0.01, headerDuration)));
        body.rotation.x -= pulse * 0.14;
        head.rotation.x = Math.max(-0.4, Math.min(0.48, head.rotation.x + pulse * 0.32));
        arms[0].shoulder.rotation.x -= pulse * 0.16;
        arms[1].shoulder.rotation.x -= pulse * 0.16;
      }
    },
    /** Dispara a animação de chute, passe, enfiada ou cruzamento. */
    kick(type = 'shot') {
      kickType = type;
      kickDuration = type === 'cross' ? 0.48 : type === 'pass' || type === 'through' ? 0.36 : 0.4;
      kickTimer = kickDuration;
    },
    /** Olha para um ponto do campo (normalmente a bola). */
    lookAt(target) {
      lookTarget = target;
    },
    /**
     * Animação por camadas (máscaras, blend e eventos) — ver
     * `match3d/animation.js` e `window.__xfcAnim`.
     */
    animation: null,
    /** Liga/desliga a sombra dinâmica deste atleta (LOD de luz). */
    setDynamicShadow(enabled) {
      const next = Boolean(enabled);
      if (next === castsDynamicShadow) return castsDynamicShadow;
      castsDynamicShadow = next;
      for (const mesh of shadowMeshes) mesh.castShadow = next;
      return castsDynamicShadow;
    },
    get castsDynamicShadow() {
      return castsDynamicShadow;
    },
    /**
     * Quadro completo: pose base + camadas de animação + IK.
     * O contexto aceita `speed/moving/lean/ownsBall/protecting` (pose base) e
     * `distance`, `ball`, `x`, `z`, `facingAngle`, `groundOffset` (camadas/IK).
     */
    update(dt, state = {}) {
      api.updateBase(dt, state);
      api.animation.update(dt, {
        ...state,
        kickLeg: kickLegIndex === 0 ? 'L' : 'R',
        facingAngle: root.rotation.y
      });
      applyAnthem(dt, state);
    },
    dispose() {
      disposePlayerObject(root);
    }
  };

  // As camadas entram DEPOIS da pose base: nada do comportamento antigo muda,
  // e o IK só corrige o que o gramado exigir.
  api.animation = createAnimationController({ rig: rigFromModel(api), model: api });

  return api;
}

export { SKIN_TONES, HAIR_COLORS, HAIR_STYLES };

/**
 * Aparência sorteada para o elenco (evita iguais): pele, cabelo, penteado e
 * altura. Determinística pelo índice — cada atleta tem sempre a mesma cara.
 */
export function lookFor(index) {
  const seed = (index + 1) * 2654435761 % 4294967296;
  return {
    skinTone: SKIN_TONES[(index * 3 + (index % 4)) % SKIN_TONES.length],
    hairColor: HAIR_COLORS[(index * 5 + 2) % HAIR_COLORS.length],
    hairStyle: HAIR_STYLES[seed % HAIR_STYLES.length],
    heightScale: 0.94 + (seed % 130) / 1000
  };
}
