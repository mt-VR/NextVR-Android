// Jogador 3D: atleta humanóide com proporções de jogo (1,80 m), uniforme
// desenhado em textura (listras, faixa, xadrez), botas com sola, meias com
// canelito, rostos trabalhados (olhos, sobrancelhas, nariz e boca) e
// penteados variados. Quem tem retrato real do atleta ganha o rosto na
// frente da cabeça.

import { THREE, canvasTexture } from './engine.js';

const SKIN_TONES = [0xf0c8a0, 0xd9a066, 0xb87a4a, 0x8d5a34, 0x6b4226, 0xf5d9b8];
const HAIR_COLORS = [0x1b1310, 0x2e2018, 0x4a3222, 0x6b4a2c, 0x8f6a3c, 0xd8c08a, 0x2b2b2b];
const HAIR_STYLES = ['short', 'afro', 'mohawk', 'side', 'bob', 'bald'];

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

function numberTexture(number, color) {
  return canvasTexture(128, 128, (context, width, height) => {
    context.clearRect(0, 0, width, height);
    context.fillStyle = color;
    context.font = `bold ${height * 0.72}px Inter, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(String(number), width / 2, height / 2);
  });
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
 * Pinta o rosto do atleta (retrato real) num escudo curvo na frente da
 * cabeça. Enquanto a foto não chega, o boneco fica com o rosto desenhado
 * (olhos, sobrancelhas, nariz e boca) — a partida não espera o disco.
 */
function applyFacePhoto(head, photoUrl, skinMaterial) {
  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.onload = () => {
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
 * @param {string} [options.hairStyle] penteado (short, afro, mohawk, side, bob, bald)
 * @param {number} [options.heightScale] variação de altura (0.94–1.07)
 */
export function createPlayer3D(options = {}) {
  const {
    kit = { primary: '#2ef0a8', secondary: '#0b2b3a', accent: '#ffffff', pattern: 'solid' },
    number = 10,
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

  // Sombra projetada no gramado (mais barata que sombra dinâmica).
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 14),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
  root.add(shadow);

  const jerseyTexture = canvasTexture(64, 64, (context, width, height) =>
    drawKitTexture(context, width, height, { primary, secondary, accent, pattern: kit.pattern }));
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

  for (const side of [-1, 1]) {
    const deltoid = new THREE.Mesh(new THREE.SphereGeometry(0.094, 12, 10), jerseyMaterial);
    deltoid.position.set(0.205 * side, 1.375, 0);
    deltoid.scale.set(1.02, 0.9, 0.88);
    body.add(deltoid);
  }

  // Número nas costas.
  const numberMaterial = new THREE.MeshBasicMaterial({
    map: numberTexture(number, accent),
    transparent: true,
    depthWrite: false
  });
  const numberPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.26), numberMaterial);
  numberPlane.position.set(0, 1.27, -0.128);
  numberPlane.rotation.y = Math.PI;
  body.add(numberPlane);

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
    hip.position.set(0.096 * side, 0.91, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.074, 0.3, 3, 8), skinMaterial);
    thigh.position.y = -0.18;
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.345;
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
  let kickTimer = 0;
  let lookTarget = null;
  let celebrateTimer = 0;
  let signalTimer = 0;
  let diveTimer = 0;
  let diveDir = 1;
  let cardTimer = 0;

  const api = {
    root,
    body,
    head,
    legs,
    arms,
    /** Comemoração de gol: braços para o alto e pulo curto. */
    celebrate(duration = 2.6) {
      celebrateTimer = duration;
    },
    /** Sinal de arbitragem: o braço direito sobe apitando. */
    signal(duration = 1.1) {
      signalTimer = duration;
    },
    /** Mostra o cartão (amarelo ou vermelho) na mão direita. */
    showCard(color = 'yellow', duration = 1.7) {
      cardTimer = duration;
      cardMesh.visible = true;
      cardMesh.material.color.set(color === 'red' ? 0xe0303e : 0xf5c518);
    },
    /** Mergulho do goleiro para o lado (defesa rasteira ou aérea). */
    dive(dir = 1) {
      diveTimer = 0.95;
      diveDir = dir >= 0 ? 1 : -1;
    },
    /** Anima a corrida: a velocidade define o balanço das pernas. */
    update(dt, { speed = 0, moving = false, lean = 0 } = {}) {
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
      if (celebrateTimer > 0) {
        celebrateTimer = Math.max(0, celebrateTimer - dt);
        const celebratingRun = moving && speed > 0.45;
        if (celebratingRun) phase += dt * (6 + Math.min(speed / 6, 1) * 4);
        const stride = celebratingRun ? Math.sin(phase) : Math.sin(phase * 0.7) * 0.12;
        body.position.y = celebratingRun
          ? Math.abs(Math.sin(phase * 2)) * 0.095
          : Math.abs(Math.sin(celebrateTimer * 5.4)) * 0.16;
        body.rotation.x = celebratingRun ? 0.04 : -0.05;
        body.rotation.z = celebratingRun ? Math.sin(phase) * 0.025 : 0;
        arms[0].shoulder.rotation.x = -2.25 - stride * 0.11;
        arms[1].shoulder.rotation.x = -2.25 + stride * 0.11;
        arms[0].shoulder.rotation.z = 0.52;
        arms[1].shoulder.rotation.z = -0.52;
        arms[0].forearm.rotation.x = -0.45;
        arms[1].forearm.rotation.x = -0.45;
        legs[0].hip.rotation.x = celebratingRun ? stride * 0.48 : 0.05;
        legs[1].hip.rotation.x = celebratingRun ? -stride * 0.48 : 0.05;
        legs[0].knee.rotation.x = celebratingRun ? Math.max(0, -stride) * 0.72 : 0.08;
        legs[1].knee.rotation.x = celebratingRun ? Math.max(0, stride) * 0.72 : 0.08;
        head.rotation.x = -0.2;
        return;
      }
      head.rotation.x = 0;
      const rate = Math.min(speed / 6, 1.6);
      if (moving) phase += dt * (4 + rate * 9);
      const swing = moving ? 0.28 + rate * 0.55 : 0.06;
      const wave = Math.sin(phase);

      legs[0].hip.rotation.x = wave * swing;
      legs[1].hip.rotation.x = -wave * swing;
      legs[0].knee.rotation.x = Math.max(0, -wave) * swing * 1.5;
      legs[1].knee.rotation.x = Math.max(0, wave) * swing * 1.5;

      arms[0].shoulder.rotation.x = -wave * swing * 0.8;
      arms[1].shoulder.rotation.x = wave * swing * 0.8;
      arms[0].shoulder.rotation.z = 0.12 + (moving ? 0 : 0.04);
      arms[1].shoulder.rotation.z = -0.12 - (moving ? 0 : 0.04);
      arms[0].forearm.rotation.x = -0.25 - Math.abs(wave) * 0.2;
      arms[1].forearm.rotation.x = -0.25 - Math.abs(wave) * 0.2;

      // Balanço do tronco e inclinação na curva (giro natural).
      body.position.y = moving ? Math.abs(Math.sin(phase)) * 0.035 * (0.5 + rate) : Math.sin(phase * 0.4) * 0.006;
      body.rotation.z = moving ? wave * 0.04 + lean : lean * 0.6;
      body.rotation.x = moving ? 0.08 + rate * 0.06 : 0.01;

      // Chute: a perna da frente avança e volta.
      if (kickTimer > 0) {
        kickTimer = Math.max(0, kickTimer - dt);
        const t = kickTimer / 0.32;
        legs[1].hip.rotation.x = -1.15 * t + (1 - t) * 0.1;
        legs[1].knee.rotation.x = 0.4 * t;
      }

      // A cabeça acompanha a bola.
      if (lookTarget) {
        const dx = lookTarget.x - root.position.x;
        const dz = lookTarget.z - root.position.z;
        const angle = Math.atan2(dx, dz) - root.rotation.y;
        head.rotation.y = Math.max(-0.9, Math.min(0.9, angle));
        head.rotation.x = Math.max(-0.4, Math.min(0.4, -0.05 + lookTarget.y * 0.05));
      }
    },
    /** Dispara a animação de chute. */
    kick() {
      kickTimer = 0.32;
    },
    /** Olha para um ponto do campo (normalmente a bola). */
    lookAt(target) {
      lookTarget = target;
    },
    dispose() {
      root.traverse(node => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          for (const material of Array.isArray(node.material) ? node.material : [node.material]) {
            for (const key of Object.keys(material)) {
              if (material[key]?.isTexture) material[key].dispose();
            }
            material.dispose();
          }
        }
      });
      root.parent?.remove(root);
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
