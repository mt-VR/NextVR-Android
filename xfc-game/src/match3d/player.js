// Jogador 3D: boneco humanóide com uniforme, chuteira, meias e animação de
// corrida. Nada de cubos: cabeça, tronco, braços e pernas são cápsulas e
// esferas, com o desenho do uniforme (listras, faixa, xadrez) aplicado como
// textura.

import { THREE, canvasTexture } from './engine.js';

const SKIN_TONES = [0xf0c8a0, 0xd9a066, 0xb87a4a, 0x8d5a34, 0x6b4226, 0xf5d9b8];
const HAIR_COLORS = [0x1b1310, 0x2e2018, 0x4a3222, 0x6b4a2c, 0x8f6a3c, 0xd8c08a, 0x2b2b2b];

/** Textura do uniforme: listras, faixa diagonal ou xadrez. */
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
  }

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
 * cabeça. Enquanto a foto não chega, o boneco fica com o rosto liso da cor
 * média — a partida não espera o disco para começar.
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
    // Recorte "cover" com viés para o topo: o rosto ocupa o terço de cima
    // dos retratos.
    const scale = Math.max(width / image.width, height / image.height);
    const drawWidth = image.width * scale;
    const drawHeight = image.height * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = Math.min(0, (height - drawHeight) * 0.18);
    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    // Sombra suave embaixo para casar com o pescoço.
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
    // Escudo curvo que abraça a esfera da cabeça — precisa ficar FORA dela
    // (o crânio tem raio 0,107 e o cabelo 0,113).
    const theta = 1.32;
    const shield = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1145, 0.1145, 0.182, 20, 1, true, -theta / 2, theta),
      material
    );
    shield.position.y = 0.008;
    head.add(shield);

    // O retrato real substitui os olhos desenhados.
    for (const child of [...head.children]) {
      if (child.userData.facePart === 'eye') child.visible = false;
    }
  };
  image.src = photoUrl;
}

/**
 * Cria o modelo 3D de um jogador.
 *
 * @param {object} options
 * @param {object} options.kit cores e padrão do uniforme
 * @param {number} options.number número da camisa
 * @param {boolean} options.isKeeper usa a roupa do goleiro
 * @param {string} [options.photo] retrato do atleta (os jogadores reais)
 */
export function createPlayer3D(options = {}) {
  const {
    kit = { primary: '#2ef0a8', secondary: '#0b2b3a', accent: '#ffffff', pattern: 'solid' },
    number = 10,
    isKeeper = false,
    skinTone = SKIN_TONES[0],
    hairColor = HAIR_COLORS[0],
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
  const socksMaterial = new THREE.MeshLambertMaterial({ color: accent });
  const bootMaterial = new THREE.MeshLambertMaterial({ color: 0x14181d });
  const skinMaterial = new THREE.MeshLambertMaterial({ color: skinTone });
  const hairMaterial = new THREE.MeshLambertMaterial({ color: hairColor });

  // Tronco.
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.165, 0.27, 4, 12), jerseyMaterial);
  torso.position.y = 1.2;
  torso.scale.set(1, 1, 0.72);
  body.add(torso);

  // Número nas costas.
  const numberMaterial = new THREE.MeshBasicMaterial({
    map: numberTexture(number, accent),
    transparent: true,
    depthWrite: false
  });
  const numberPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.26), numberMaterial);
  numberPlane.position.set(0, 1.26, -0.128);
  numberPlane.rotation.y = Math.PI;
  body.add(numberPlane);

  // Shorts.
  const shorts = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.28, 12), shortsMaterial);
  shorts.position.y = 0.95;
  shorts.scale.set(1, 1, 0.78);
  body.add(shorts);

  // Cabeça, cabelo e rosto.
  const head = new THREE.Group();
  head.position.y = 1.6;
  body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.107, 14, 12), skinMaterial);
  skull.scale.set(0.92, 1.06, 0.96);
  head.add(skull);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.113, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMaterial);
  hair.position.set(0, 0.012, -0.008);
  hair.scale.set(0.95, 0.98, 1.0);
  head.add(hair);

  // Olhos: dão leitura de rosto mesmo à distância (somem quando o retrato
  // real está presente).
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x14181d });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5), eyeMaterial);
    eye.position.set(0.042 * side, 0.018, 0.093);
    eye.userData.facePart = 'eye';
    head.add(eye);
  }

  // Retrato real do atleta vira o rosto do boneco.
  if (photo) applyFacePhoto(head, photo, skinMaterial);

  // Braços.
  const arms = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(0.2 * side, 1.4, 0);
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.052, 0.2, 3, 8), jerseyMaterial);
    upper.position.y = -0.13;
    shoulder.add(upper);
    const forearm = new THREE.Group();
    forearm.position.y = -0.26;
    const lower = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.18, 3, 8), skinMaterial);
    lower.position.y = -0.11;
    forearm.add(lower);
    const glove = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), isKeeper
      ? new THREE.MeshLambertMaterial({ color: 0xf25c2a })
      : skinMaterial);
    glove.position.y = -0.23;
    forearm.add(glove);
    shoulder.add(forearm);
    body.add(shoulder);
    arms.push({ shoulder, forearm });
  }

  // Pernas.
  const legs = [];
  for (const side of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(0.095 * side, 0.9, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.072, 0.28, 3, 8), skinMaterial);
    thigh.position.y = -0.17;
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.33;
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.22, 3, 8), socksMaterial);
    shin.position.y = -0.16;
    knee.add(shin);
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.25), bootMaterial);
    boot.position.set(0, -0.3, 0.04);
    knee.add(boot);
    hip.add(knee);
    body.add(hip);
    legs.push({ hip, knee });
  }

  // Modelos maiores na tela, como nos prints de referência.
  root.scale.setScalar(1.15);

  let phase = Math.random() * Math.PI * 2;
  let kickTimer = 0;
  let lookTarget = null;

  const api = {
    root,
    body,
    head,
    legs,
    arms,
    /** Anima a corrida: a velocidade define o balanço das pernas. */
    update(dt, { speed = 0, moving = false } = {}) {
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

      // Balanço do tronco e agachamento da corrida.
      body.position.y = moving ? Math.abs(Math.sin(phase)) * 0.035 * (0.5 + rate) : Math.sin(phase * 0.4) * 0.006;
      body.rotation.z = moving ? wave * 0.04 : 0;
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

export { SKIN_TONES, HAIR_COLORS };

/** Cor de cabelo e tom de pele sorteados para o elenco (evita iguais). */
export function lookFor(index) {
  return {
    skinTone: SKIN_TONES[(index * 3 + (index % 4)) % SKIN_TONES.length],
    hairColor: HAIR_COLORS[(index * 3 + 1) % 5]
  };
}
