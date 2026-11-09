// Jogador 3D: atleta humanóide com proporções de jogo (1,80 m), uniforme
// desenhado em textura (listras, faixa, xadrez), botas com sola, meias com
// canelito, rostos trabalhados (olhos, sobrancelhas, nariz e boca) e
// penteados variados. Quem tem retrato real do atleta ganha o rosto na
// frente da cabeça.

import { THREE, canvasTexture, softShadowTexture } from './engine.js';

const SKIN_TONES = [0xf0c8a0, 0xd9a066, 0xb87a4a, 0x8d5a34, 0x6b4226, 0xf5d9b8];
const HAIR_COLORS = [0x1b1310, 0x2e2018, 0x4a3222, 0x6b4a2c, 0x8f6a3c, 0xd8c08a, 0x2b2b2b];
const HAIR_STYLES = ['short', 'afro', 'mohawk', 'side', 'bob', 'bald'];
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

function faceTextureFor() {
  return cachedTexture(FACE_TEXTURES, 'simple-face-features-v1', () => canvasTexture(128, 128, context => {
    context.clearRect(0, 0, 128, 128);
    context.fillStyle = 'rgba(20,24,29,0.96)';
    for (const x of [39, 89]) {
      context.beginPath();
      context.arc(x, 53, 5.5, 0, Math.PI * 2);
      context.fill();
    }
    context.strokeStyle = 'rgba(35,24,19,0.88)';
    context.lineWidth = 5;
    context.lineCap = 'round';
    for (const x of [39, 89]) {
      context.beginPath();
      context.moveTo(x - 12, 39);
      context.lineTo(x + 10, 37);
      context.stroke();
    }
    context.fillStyle = 'rgba(99,65,46,0.72)';
    context.beginPath();
    context.moveTo(64, 50);
    context.lineTo(58, 73);
    context.lineTo(68, 73);
    context.closePath();
    context.fill();
    context.strokeStyle = 'rgba(82,42,39,0.9)';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(52, 91);
    context.quadraticCurveTo(64, 96, 76, 91);
    context.stroke();
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
function addUniformDetails(body, {
  number = 10,
  name = '',
  crest = null,
  teamName = 'XFC',
  sponsor = 'XFC',
  brand = 'XF',
  primary = '#142033',
  secondary = '#ffffff',
  accent = '#ffffff'
} = {}) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.14, 1.03, 0.166,   0.14, 1.03, 0.166,
     0.14, 1.43, 0.166,  -0.14, 1.43, 0.166,
     0.14, 1.03, -0.166, -0.14, 1.03, -0.166,
    -0.14, 1.43, -0.166,  0.14, 1.43, -0.166
  ], 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute([
    0, 0, 0.5, 0, 0.5, 1, 0, 1,
    0.5, 0, 1, 0, 1, 1, 0.5, 1
  ], 2));
  geometry.setIndex([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]);
  geometry.computeVertexNormals();

  const material = new THREE.MeshBasicMaterial({
    map: uniformTextureFor({ number, name, crest, teamName, sponsor, brand, primary, secondary, accent }),
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    toneMapped: false
  });
  const decal = new THREE.Mesh(geometry, material);
  decal.name = 'xfc-uniform-details';
  decal.renderOrder = 1;
  body.add(decal);
  return decal;
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
 * Modelo leve para WebView/celular: preserva silhueta humana e animações, mas
 * evita dezenas de malhas e texturas por atleta (o elenco tem 22 jogadores).
 */
function createSimplePlayer3D(options = {}) {
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
    heightScale = 1
  } = options;
  const primary = isKeeper ? (kit.keeperPrimary || '#f5c518') : kit.primary;
  const secondary = isKeeper ? (kit.keeperSecondary || '#1a1a1a') : kit.secondary;
  const accent = kit.accent || '#ffffff';
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.05, 0.76),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      toneMapped: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  root.add(shadow);

  const jersey = new THREE.MeshLambertMaterial({ map: jerseyTextureFor({
    primary,
    secondary,
    accent,
    pattern: kit.pattern || 'solid'
  }) });
  const shorts = new THREE.MeshLambertMaterial({ color: secondary });
  const skin = new THREE.MeshLambertMaterial({ color: skinTone });
  const socks = new THREE.MeshLambertMaterial({ color: accent });
  const boots = new THREE.MeshLambertMaterial({ color: 0x15191e });
  const handMaterial = new THREE.MeshLambertMaterial({ color: isKeeper ? 0xf25c2a : skinTone });
  const hairMaterial = new THREE.MeshLambertMaterial({ color: hairColor });
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.19, 0.42, 2, 7), jersey);
  torso.position.y = 1.18;
  torso.scale.z = 0.78;
  body.add(torso);
  addUniformDetails(body, {
    number, name, crest, teamName, sponsor, brand, primary, secondary, accent
  });

  const head = new THREE.Group();
  head.position.y = 1.65;
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.112, 8, 6), skin);
  skull.scale.set(0.94, 1.05, 0.95);
  head.add(skull);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.18),
    new THREE.MeshBasicMaterial({
      map: faceTextureFor(),
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      toneMapped: false
    }));
  face.position.set(0, 0, 0.107);
  face.renderOrder = 1;
  head.add(face);
  const hair = buildHair(hairStyle, hairMaterial);
  if (hair) head.add(hair);

  const arms = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(0.22 * side, 1.4, 0);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(isKeeper ? 0.065 : 0.057, 0.43, 2, 6), jersey);
    arm.position.y = -0.22;
    arm.scale.z = 0.86;
    shoulder.add(arm);
    // O antebraço continua sendo um pivô para o gesto do árbitro/cartão.
    const forearm = new THREE.Group();
    forearm.position.y = -0.42;
    const lowerArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.042, 0.21, 2, 6), handMaterial);
    lowerArm.position.y = -0.11;
    forearm.add(lowerArm);
    shoulder.add(forearm);
    body.add(shoulder);
    arms.push({ shoulder, forearm });
  }

  const shortsMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.17, 0.28, 10), shorts);
  shortsMesh.position.y = 0.86;
  body.add(shortsMesh);

  const legs = [];
  for (const side of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(0.095 * side, 0.78, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.25, 2, 6), skin);
    thigh.position.y = -0.12;
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.39;
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.052, 0.27, 2, 6), socks);
    shin.position.y = -0.14;
    knee.add(shin);
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.095, 0.07, 0.22), boots);
    boot.position.set(0, -0.335, 0.035);
    knee.add(boot);
    hip.add(knee);
    body.add(hip);
    legs.push({ hip, knee });
  }

  const cardMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.13),
    new THREE.MeshBasicMaterial({ color: 0xf5c518, side: THREE.DoubleSide }));
  cardMesh.position.set(0, -0.27, 0.02);
  cardMesh.visible = false;
  arms[1].forearm.add(cardMesh);
  root.scale.setScalar(1.15 * heightScale);
  let phase = number * 0.37;
  let lookTarget = null;
  const kickLegIndex = String(preferredFoot).toLowerCase().startsWith('l') ? 0 : 1;
  let kickTimer = 0;
  let kickDuration = 0.4;
  let kickType = 'shot';
  let previousSpeed = 0;
  let strideBlend = 0;
  let headerTimer = 0;
  let headerDuration = 0.38;
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
  let reactionTimer = 0;
  let reactionDuration = 0;
  let reactionKind = '';

  return {
    root, body, head, legs, arms,
    celebrate(duration = 2.6, style = 'classic') {
      celebrateTimer = duration;
      celebrateStyle = CELEBRATION_STYLES.has(style) ? style : 'classic';
      celebrateElapsed = 0;
    },
    header(duration = 0.38) { headerDuration = duration; headerTimer = duration; },
    signal(duration = 1.1) { signalTimer = duration; },
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
    dive(dir = 1) { diveTimer = 0.95; diveDir = dir >= 0 ? 1 : -1; },
    slideTackle(dir = 1, duration = 0.82) {
      slideDir = dir >= 0 ? 1 : -1;
      slideDuration = duration;
      slideTimer = duration;
      reactionTimer = 0;
    },
    react(kind = 'fall', duration = 0.82) {
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
    update(dt, { speed = 0, moving = false, lean = 0, ownsBall = false, protecting = false } = {}) {
      if (diveTimer > 0) {
        diveTimer = Math.max(0, diveTimer - dt);
        const arc = Math.sin(Math.PI * Math.min(1, (1 - diveTimer / 0.95) * 1.06));
        body.position.y = arc * 0.32;
        body.rotation.z = diveDir * (0.32 + arc * 0.82);
        arms[diveDir > 0 ? 1 : 0].shoulder.rotation.x = -2.2;
        arms[diveDir > 0 ? 0 : 1].shoulder.rotation.x = -1.1;
        legs[0].hip.rotation.x = 0.32 + arc * 0.25;
        legs[1].hip.rotation.x = -0.24 - arc * 0.2;
        return;
      }
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
        if (!cardTimer) cardMesh.visible = false;
      }
      if (signalTimer > 0) {
        signalTimer = Math.max(0, signalTimer - dt);
        arms[1].shoulder.rotation.x = -2.65;
        arms[0].shoulder.rotation.x = -0.65;
        return;
      }
      if (slideTimer > 0) {
        slideTimer = Math.max(0, slideTimer - dt);
        const progress = 1 - slideTimer / Math.max(0.01, slideDuration);
        const recovery = Math.max(0, Math.min(1, (progress - 0.58) / 0.42));
        body.position.y = 0.02 + recovery * 0.08;
        body.rotation.x = 0.38 * (1 - recovery);
        body.rotation.z = slideDir * 1.05 * (1 - recovery);
        arms[0].shoulder.rotation.x = -1.45;
        arms[1].shoulder.rotation.x = -1.45;
        arms[0].shoulder.rotation.z = slideDir * 0.38;
        arms[1].shoulder.rotation.z = slideDir * 0.38;
        legs[0].hip.rotation.x = 0.88 * (1 - recovery) - 0.15 * recovery;
        legs[1].hip.rotation.x = -0.75 * (1 - recovery) + 0.12 * recovery;
        legs[0].knee.rotation.x = 0.48 * (1 - recovery);
        legs[1].knee.rotation.x = 0.28 * (1 - recovery);
        return;
      }
      if (reactionTimer > 0) {
        reactionTimer = Math.max(0, reactionTimer - dt);
        const progress = 1 - reactionTimer / Math.max(0.01, reactionDuration);
        const pulse = Math.sin(Math.PI * Math.min(1, progress * 1.35));
        if (reactionKind === 'ejected') {
          phase += dt * (moving ? 5.5 : 1.2);
          const step = Math.sin(phase);
          body.position.y = moving ? Math.abs(Math.sin(phase * 2)) * 0.018 : 0;
          body.rotation.x = 0.035;
          body.rotation.z = 0;
          arms[0].shoulder.rotation.x = -step * 0.16;
          arms[1].shoulder.rotation.x = step * 0.16;
          legs[0].hip.rotation.x = step * 0.2;
          legs[1].hip.rotation.x = -step * 0.2;
          legs[0].knee.rotation.x = Math.max(0, -step) * 0.16;
          legs[1].knee.rotation.x = Math.max(0, step) * 0.16;
          head.rotation.x = -0.16;
          return;
        }
        body.position.y = reactionKind === 'fall' ? 0.02 + pulse * 0.12 : pulse * 0.04;
        body.rotation.x = reactionKind === 'fall' ? 0.58 * pulse : 0.08 * pulse;
        body.rotation.z = reactionKind === 'fall' ? slideDir * 0.72 * pulse : slideDir * 0.12 * pulse;
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
          arms[0].shoulder.rotation.x = -1.65;
          arms[1].shoulder.rotation.x = -1.1;
          legs[0].hip.rotation.x = 0.55 * pulse;
          legs[1].hip.rotation.x = -0.42 * pulse;
          legs[0].knee.rotation.x = 0.68 * pulse;
          legs[1].knee.rotation.x = 0.24 * pulse;
        } else {
          arms[0].shoulder.rotation.x = reactionKind === 'protest' || reactionKind === 'ejected' ? -1.65 : -0.45;
          arms[1].shoulder.rotation.x = reactionKind === 'protest' || reactionKind === 'ejected' ? -1.8 : -0.3;
          legs[0].hip.rotation.x = 0.12 * pulse;
          legs[1].hip.rotation.x = -0.12 * pulse;
        }
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

      if (cardTimer > 0) {
        arms[1].shoulder.rotation.x = -2.7;
        arms[0].shoulder.rotation.x = -0.5;
      } else {
        phase += dt * (2.2 + Math.min(safeSpeed, 9) * 1.32);
        const wave = Math.sin(phase);
        const swing = (0.045 + strideBlend * 0.66) * (ownsBall ? 0.82 : 1);
        legs[0].hip.rotation.x = wave * swing;
        legs[1].hip.rotation.x = -wave * swing;
        legs[0].knee.rotation.x = Math.max(0, -wave) * swing * 1.2;
        legs[1].knee.rotation.x = Math.max(0, wave) * swing * 1.2;
        arms[0].shoulder.rotation.x = -wave * swing * 0.68;
        arms[1].shoulder.rotation.x = wave * swing * 0.68;
        arms[0].shoulder.rotation.z = 0.08 + strideBlend * 0.08;
        arms[1].shoulder.rotation.z = -0.08 - strideBlend * 0.08;
        arms[0].forearm.rotation.x = -0.16 - Math.abs(wave) * 0.18;
        arms[1].forearm.rotation.x = -0.16 - Math.abs(wave) * 0.18;
        head.rotation.x = Math.max(-0.16, Math.min(0.08, -acceleration * 0.012));
      }
      body.position.y = strideBlend > 0.03
        ? Math.abs(Math.sin(phase * 2)) * 0.018 * strideBlend
        : Math.sin(phase * 0.4) * 0.004;
      body.rotation.x = 0.02 + Math.max(-8, Math.min(8, acceleration)) * 0.006;
      body.rotation.z = lean * 0.6;
      if (kickTimer > 0) {
        kickTimer = Math.max(0, kickTimer - dt);
        const kickPhase = 1 - kickTimer / kickDuration;
        const kickAmount = Math.sin(Math.PI * Math.max(0, Math.min(1, kickPhase)));
        legs[kickLegIndex].hip.rotation.x = -kickAmount * (kickType === 'cross' ? 0.9 : 0.76);
        legs[kickLegIndex].knee.rotation.x = kickAmount * 0.42;
      } else if (ownsBall) {
        legs[kickLegIndex].hip.rotation.x -= Math.max(0, Math.sin(phase * 2.2)) * 0.1;
      }
      if (protecting) {
        arms[0].shoulder.rotation.z = 0.46;
        arms[1].shoulder.rotation.z = -0.46;
        arms[0].forearm.rotation.x = -0.52;
        arms[1].forearm.rotation.x = -0.52;
        body.rotation.x += 0.035;
      }
      if (lookTarget) {
        const dx = lookTarget.x - root.position.x;
        const dz = lookTarget.z - root.position.z;
        head.rotation.y = Math.max(-0.8, Math.min(0.8, Math.atan2(dx, dz) - root.rotation.y));
      }
      if (headerTimer > 0) {
        headerTimer = Math.max(0, headerTimer - dt);
        const pulse = Math.sin(Math.PI * (1 - headerTimer / Math.max(0.01, headerDuration)));
        body.rotation.x -= pulse * 0.13;
        head.rotation.x = Math.max(-0.4, Math.min(0.45, head.rotation.x + pulse * 0.3));
        arms[0].shoulder.rotation.x -= pulse * 0.12;
        arms[1].shoulder.rotation.x -= pulse * 0.12;
      }
    },
    kick(type = 'shot') {
      kickType = type;
      kickDuration = type === 'cross' ? 0.48 : type === 'pass' || type === 'through' ? 0.36 : 0.4;
      kickTimer = kickDuration;
    },
    lookAt(target) { lookTarget = target; },
    dispose() {
      disposePlayerObject(root);
    }
  };
}

/**
 * Pinta o rosto do atleta (retrato real) num escudo curvo na frente da
 * cabeça. Enquanto a foto não chega, o boneco fica com o rosto desenhado
 * (olhos, sobrancelhas, nariz e boca) — a partida não espera o disco.
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
    const theta = 1.32;
    const shield = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1145, 0.1145, 0.182, 20, 1, true, -theta / 2, theta),
      material
    );
    shield.position.y = 0.008;
    head.add(shield);

    // O retrato real substitui os olhos desenhados.
    for (const child of [...head.children]) {
      if (child.userData.facePart === 'eye' || child.userData.facePart === 'brow') child.visible = false;
    }
  };
  image.src = photoUrl;
}

/** Constrói o penteado do atleta a partir do estilo sorteado. */
function buildHair(style, hairMaterial) {
  switch (style) {
    case 'afro': {
      const afro = new THREE.Mesh(new THREE.SphereGeometry(0.128, 12, 9), hairMaterial);
      afro.position.set(0, 0.035, -0.012);
      afro.scale.set(1.02, 0.96, 1.02);
      return afro;
    }
    case 'mohawk': {
      const mohawk = new THREE.Mesh(new THREE.SphereGeometry(0.118, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.42), hairMaterial);
      mohawk.position.set(0, 0.02, -0.01);
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
      cap.position.set(0, 0.012, -0.008);
      cap.scale.set(0.9, 0.9, 0.98);
      crest.add(cap);
      for (let index = 0; index < 8; index += 1) {
        const z = 0.043 - index * 0.023;
        const height = 0.072 + (index % 3) * 0.018;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.023, height, 5), hairMaterial);
        spike.position.set(index % 2 ? -0.008 : 0.008, 0.075 + height * 0.22, z);
        spike.rotation.x = 0.28;
        spike.rotation.z = (index % 2 ? -1 : 1) * 0.08;
        crest.add(spike);
      }
      return crest;
    }
    case 'side': {
      const side = new THREE.Mesh(new THREE.SphereGeometry(0.114, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), hairMaterial);
      side.position.set(0.02, 0.012, -0.01);
      side.scale.set(1.0, 0.9, 1.0);
      return side;
    }
    case 'bob': {
      const group = new THREE.Group();
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.54), hairMaterial);
      top.position.set(0, 0.014, -0.008);
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
      short.position.set(0, 0.012, -0.008);
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
 * @param {string} [options.photo] retrato do atleta (os jogadores reais)
 * @param {string} [options.hairStyle] penteado (short, afro, mohawk, neymar, side, bob, bald)
 * @param {number} [options.heightScale] variação de altura (0.94–1.07)
 */
export function createPlayer3D(options = {}) {
  if (options.simplified) return createSimplePlayer3D(options);
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
    heightScale = 1,
    photo = null
  } = options;

  const primary = isKeeper ? (kit.keeperPrimary || '#f5c518') : kit.primary;
  const secondary = isKeeper ? (kit.keeperSecondary || '#1a1a1a') : kit.secondary;
  const accent = kit.accent || '#ffffff';

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  // Sombra projetada no gramado: gradiente suave, sem círculos pretos duros.
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1.05, 0.76),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      toneMapped: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  root.add(shadow);

  const jerseyTexture = jerseyTextureFor({
    primary,
    secondary,
    accent,
    pattern: kit.pattern || 'solid'
  });
  const jerseyMaterial = new THREE.MeshLambertMaterial({ map: jerseyTexture });
  const shortsMaterial = new THREE.MeshLambertMaterial({ color: secondary });
  const shortsTrim = new THREE.MeshLambertMaterial({ color: accent });
  const socksMaterial = new THREE.MeshLambertMaterial({ color: accent });
  const sockBand = new THREE.MeshLambertMaterial({ color: 0xf4f6f8 });
  const bootMaterial = new THREE.MeshLambertMaterial({ color: 0x14181d });
  const soleMaterial = new THREE.MeshLambertMaterial({ color: accent === '#ffffff' || accent === '#fff' ? 0xf4f6f8 : accent });
  const skinMaterial = new THREE.MeshLambertMaterial({ color: skinTone });
  const hairMaterial = new THREE.MeshLambertMaterial({ color: hairColor });

  // Pescoço e ombros (deltoides) — dão silhueta de atleta, não de boneco.
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.09, 10), skinMaterial);
  neck.position.y = 1.475;
  body.add(neck);

  // Tronco anatômico: ombros mais largos, cintura marcada e caixa torácica
  // levemente afunilada (substitui a cápsula uniforme do boneco antigo).
  const torsoProfile = [
    new THREE.Vector2(0.13, 0),
    new THREE.Vector2(0.16, 0.035),
    new THREE.Vector2(0.175, 0.15),
    new THREE.Vector2(0.16, 0.29),
    new THREE.Vector2(0.205, 0.39),
    new THREE.Vector2(0.235, 0.5),
    new THREE.Vector2(0.205, 0.57),
    new THREE.Vector2(0.11, 0.62),
    new THREE.Vector2(0, 0.62)
  ];
  const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoProfile, 18), jerseyMaterial);
  torso.position.y = 0.84;
  torso.scale.set(1, 1, 0.78);
  body.add(torso);
  addUniformDetails(body, {
    number, name, crest, teamName, sponsor, brand, primary, secondary, accent
  });

  for (const side of [-1, 1]) {
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.094, 12, 10), jerseyMaterial);
    deltoid.position.set(0.205 * side, 1.375, 0);
    deltoid.scale.set(1.02, 0.9, 0.88);
    body.add(deltoid);
  }

  // Shorts + canelito da barra na cor de destaque.
  const shorts = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.28, 12), shortsMaterial);
  shorts.position.y = 0.955;
  shorts.scale.set(1, 1, 0.78);
  body.add(shorts);
  const trim = new THREE.Mesh(new THREE.CylinderGeometry(0.168, 0.168, 0.045, 12), shortsTrim);
  trim.position.y = 0.825;
  trim.scale.set(1, 1, 0.78);
  body.add(trim);

  // Cabeça, cabelo e rosto.
  const head = new THREE.Group();
  head.position.y = 1.61;
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.107, 14, 12), skinMaterial);
  skull.scale.set(0.92, 1.06, 0.96);
  head.add(skull);

  const hair = buildHair(hairStyle, hairMaterial);
  if (hair) head.add(hair);

  // Rosto: olhos, sobrancelhas, nariz e boca (somem com o retrato real).
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x14181d });
  const browMaterial = new THREE.MeshBasicMaterial({ color: hairColor });
  const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x4a2c1e });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5), eyeMaterial);
    eye.position.set(0.042 * side, 0.014, 0.093);
    eye.userData.facePart = 'eye';
    head.add(eye);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.011, 0.012), browMaterial);
    brow.position.set(0.042 * side, 0.048, 0.0975);
    brow.userData.facePart = 'brow';
    head.add(brow);
  }
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.013, 0.034, 6), skinMaterial);
  nose.position.set(0, -0.012, 0.1065);
  nose.rotation.x = Math.PI / 2.15;
  nose.userData.facePart = 'nose';
  head.add(nose);
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.009, 0.012), mouthMaterial);
  mouth.position.set(0, -0.052, 0.0985);
  mouth.userData.facePart = 'mouth';
  head.add(mouth);

  // Retrato real do atleta vira o rosto do boneco.
  if (photo) applyFacePhoto(head, photo, skinMaterial);

  // Braços com ombro, bíceps, cotovelo, antebraço e mão articulados.
  // As mangas terminam antes do cotovelo; goleiros usam luvas, atletas de
  // linha têm palma e dedos simplificados em vez de uma esfera grande.
  const arms = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(0.225 * side, 1.385, 0);

    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.061, 0.16, 4, 10), jerseyMaterial);
    upper.position.set(0.012 * side, -0.102, 0);
    upper.scale.set(0.94, 1, 0.9);
    shoulder.add(upper);

    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.047, 10, 8), skinMaterial);
    elbow.position.set(0.018 * side, -0.224, 0);
    shoulder.add(elbow);

    const forearm = new THREE.Group();
    forearm.position.set(0.02 * side, -0.218, 0);
    const lower = new THREE.Mesh(new THREE.CapsuleGeometry(0.044, 0.18, 4, 10), skinMaterial);
    lower.position.y = -0.11;
    lower.scale.set(0.96, 1, 0.88);
    forearm.add(lower);

    if (isKeeper) {
      const glove = new THREE.Mesh(new THREE.CapsuleGeometry(0.047, 0.07, 3, 8), new THREE.MeshLambertMaterial({ color: 0xf25c2a }));
      glove.position.set(0, -0.235, 0.018);
      forearm.add(glove);
    } else {
      const palm = new THREE.Mesh(new THREE.CapsuleGeometry(0.034, 0.065, 3, 8), skinMaterial);
      palm.position.set(0, -0.238, 0.024);
      palm.scale.set(0.84, 1, 0.68);
      forearm.add(palm);
      for (let finger = 0; finger < 4; finger += 1) {
        const spread = (finger - 1.5) * 0.014;
        const digit = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.038, 2, 6), skinMaterial);
        digit.position.set(spread, -0.282 - (finger === 1 || finger === 2 ? 0.006 : 0), 0.035);
        digit.rotation.z = (finger - 1.5) * 0.075;
        forearm.add(digit);
      }
      const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.035, 2, 6), skinMaterial);
      thumb.position.set(-0.038 * side, -0.245, 0.028);
      thumb.rotation.z = 0.65 * side;
      forearm.add(thumb);
    }

    shoulder.add(forearm);
    body.add(shoulder);
    arms.push({ shoulder, forearm, elbow });
  }

  // Pernas.
  const legs = [];
  for (const side of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(0.096 * side, 0.77, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.074, 0.3, 3, 8), skinMaterial);
    thigh.position.y = -0.18;
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.405;
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.059, 0.235, 3, 8), socksMaterial);
    shin.position.y = -0.17;
    knee.add(shin);
    // Canelito branco no topo da meia.
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0615, 0.0615, 0.05, 10), sockBand);
    band.position.y = -0.06;
    knee.add(band);
    // Chuteira: corpo escuro, sola clara.
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.105, 0.075, 0.26), bootMaterial);
    boot.position.set(0, -0.315, 0.045);
    knee.add(boot);
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.024, 0.265), soleMaterial);
    sole.position.set(0, -0.35, 0.045);
    knee.add(sole);
    hip.add(knee);
    body.add(hip);
    legs.push({ hip, knee });
  }

  // Cartão do árbitro (amarelo/vermelho) — oculto até o apito da falta.
  const cardMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.095, 0.135),
    new THREE.MeshBasicMaterial({ color: 0xf5c518, side: THREE.DoubleSide })
  );
  cardMesh.position.set(0, -0.265, 0.02);
  cardMesh.visible = false;
  arms[1].forearm.add(cardMesh);

  // Variação de altura por atleta (0,94–1,07) e os modelos maiores na tela.
  root.scale.setScalar(1.15 * heightScale);

  // Jogadores projetam sombra (motor 3D com sombras ativadas).
  root.traverse(object => {
    if (object.isMesh) object.castShadow = true;
  });
  shadow.castShadow = false;

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
  let reactionTimer = 0;
  let reactionDuration = 0;
  let reactionKind = '';

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
    /** Sinal de arbitragem: o braço direito sobe apitando. */
    header(duration = 0.38) { headerDuration = duration; headerTimer = duration; },
    signal(duration = 1.1) {
      signalTimer = duration;
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
    /** Queda, impacto, protesto ou caminhada de expulsão. */
    react(kind = 'fall', duration = 0.82) {
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
    /** Anima a corrida: a velocidade define o balanço das pernas. */
    update(dt, { speed = 0, moving = false, lean = 0, ownsBall = false, protecting = false } = {}) {
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
      arms[0].shoulder.rotation.z = 0.1 + strideBlend * 0.07;
      arms[1].shoulder.rotation.z = -0.1 - strideBlend * 0.07;
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
    dispose() {
      disposePlayerObject(root);
    }
  };

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
