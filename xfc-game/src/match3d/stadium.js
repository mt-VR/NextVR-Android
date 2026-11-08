// O estádio: gramado com as linhas, arquibancadas com torcida, placas de
// publicidade, traves com rede e refletores.
//
// Tudo é construído por código (geometrias simples + texturas desenhadas em
// canvas) para caber no APK e rodar bem no WebView do Android.

import { THREE, canvasTexture } from './engine.js';
import { PITCH, GOAL } from './constants.js';

const LINE = 0.12; // espessura das linhas em metros
const PX_PER_METER = 2048 / PITCH.length;

/** Desenha o gramado com as marcações oficiais de campo. */
function drawPitch(context, width, height) {
  const scale = width / PITCH.length;
  const toX = x => (x + PITCH.halfLength) * scale;
  const toZ = z => (z + PITCH.halfWidth) * scale;
  const line = LINE * scale;

  // Gramado listrado.
  const bands = 14;
  const bandWidth = width / bands;
  for (let band = 0; band < bands; band += 1) {
    context.fillStyle = band % 2 === 0 ? '#3d9a45' : '#348a3c';
    context.fillRect(band * bandWidth, 0, bandWidth + 1, height);
  }

  // Variação suave para o gramado não ficar chapado.
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(255,255,255,0.06)');
  gradient.addColorStop(0.5, 'rgba(0,0,0,0.04)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.16)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  // Linhas.
  context.strokeStyle = 'rgba(255,255,255,0.92)';
  context.lineWidth = line;
  context.lineCap = 'butt';

  const rect = (x0, z0, x1, z1) => {
    context.strokeRect(toX(x0), toZ(z0), (x1 - x0) * scale, (z1 - z0) * scale);
  };

  // contorno do campo
  rect(-PITCH.halfLength, -PITCH.halfWidth, PITCH.halfLength, PITCH.halfWidth);
  // linha do meio
  context.beginPath();
  context.moveTo(toX(0), toZ(-PITCH.halfWidth));
  context.lineTo(toX(0), toZ(PITCH.halfWidth));
  context.stroke();
  // círculo central
  context.beginPath();
  context.arc(toX(0), toZ(0), 9.15 * scale, 0, Math.PI * 2);
  context.stroke();
  // marcas do meio
  context.fillStyle = 'rgba(255,255,255,0.92)';
  context.beginPath();
  context.arc(toX(0), toZ(0), 0.35 * scale, 0, Math.PI * 2);
  context.fill();

  for (const side of [-1, 1]) {
    // grande área
    rect(side * PITCH.halfLength, -20.16, side * (PITCH.halfLength - 16.5), 20.16);
    // pequena área
    rect(side * PITCH.halfLength, -9.16, side * (PITCH.halfLength - 5.5), 9.16);
    // marca do pênalti
    context.beginPath();
    context.arc(toX(side * (PITCH.halfLength - 11)), toZ(0), 0.35 * scale, 0, Math.PI * 2);
    context.fill();
    // meia-lua
    context.beginPath();
    context.arc(toX(side * (PITCH.halfLength - 11)), toZ(0), 9.15 * scale,
      side > 0 ? Math.PI / 2 : -Math.PI / 2,
      side > 0 ? (Math.PI * 3) / 2 : Math.PI / 2);
    context.stroke();
    // escanteios
    for (const z of [-PITCH.halfWidth, PITCH.halfWidth]) {
      context.beginPath();
      context.arc(toX(side * PITCH.halfLength), toZ(z), 1 * scale, 0, Math.PI * 2);
      context.stroke();
    }
    // marca de gol
    const goalX = toX(side * PITCH.halfLength);
    context.fillRect(goalX - (side > 0 ? line : 0), toZ(-GOAL.width / 2), line, GOAL.width * scale);
  }
}

/** Textura da torcida: pontos coloridos em fileiras de assentos. */
function drawCrowd(context, width, height) {
  context.fillStyle = '#41597c';
  context.fillRect(0, 0, width, height);
  const rows = 22;
  const rowHeight = height / rows;
  for (let row = 0; row < rows; row += 1) {
    context.fillStyle = row % 2 === 0 ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.18)';
    context.fillRect(0, row * rowHeight, width, rowHeight * 0.5);
    const seats = 52;
    for (let seat = 0; seat < seats; seat += 1) {
      if (Math.random() < 0.06) continue;
      const hue = Math.random();
      const color = hue < 0.3
        ? `rgba(${225 + Math.random() * 30},${55 + Math.random() * 70},${60 + Math.random() * 45},1)`
        : hue < 0.55
          ? `rgba(${55 + Math.random() * 70},${135 + Math.random() * 80},${215 + Math.random() * 40},1)`
          : hue < 0.78
            ? `rgba(242,242,242,0.95)`
            : `rgba(245,${205 + Math.random() * 45},${80},1)`;
      context.fillStyle = color;
      const x = (seat + 0.5) * (width / seats) + (Math.random() - 0.5) * 4;
      const y = row * rowHeight + rowHeight * 0.6;
      context.beginPath();
      context.arc(x, y, rowHeight * 0.34, 0, Math.PI * 2);
      context.fill();
      // Ombros: a silhueta da torcida.
      context.fillStyle = 'rgba(20,26,36,0.55)';
      context.beginPath();
      context.ellipse(x, y + rowHeight * 0.34, rowHeight * 0.3, rowHeight * 0.26, 0, 0, Math.PI * 2);
      context.fill();
    }
  }
}

/** Placas de publicidade em volta do campo (marcas próprias do XFC). */
function drawAds(context, width, height) {
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#0e3a63');
  gradient.addColorStop(0.5, '#123a5e');
  gradient.addColorStop(1, '#0a2740');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  const slots = 6;
  for (let slot = 0; slot < slots; slot += 1) {
    const x = (slot / slots) * width;
    const w = width / slots;
    if (slot % 2 === 0) {
      // Faixa azul com a "XFC FOUNDATION" (a versão própria da fundação
      // beneficente que aparece nos estádios de verdade).
      context.fillStyle = '#164a7a';
      context.fillRect(x + 3, 3, w - 6, height - 6);
      context.fillStyle = '#ffffff';
      context.font = `800 ${height * 0.36}px Inter, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('XFC FOUNDATION', x + w / 2, height * 0.46);
      context.fillStyle = 'rgba(255,255,255,0.7)';
      context.font = `600 ${height * 0.19}px Inter, sans-serif`;
      context.fillText('FUTBOL PARA TODOS', x + w / 2, height * 0.76);
    } else {
      context.fillStyle = 'rgba(46,240,168,0.9)';
      context.font = `800 ${height * 0.4}px Inter, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('XF ESPORTES', x + w / 2, height * 0.44);
      context.fillStyle = 'rgba(255,255,255,0.75)';
      context.font = `600 ${height * 0.19}px Inter, sans-serif`;
      context.fillText('XF CHAMPIONS LEAGUE', x + w / 2, height * 0.74);
    }
    context.strokeStyle = 'rgba(255,255,255,0.16)';
    context.lineWidth = 2;
    context.strokeRect(x + 4, 4, w - 8, height - 8);
  }
}

/** Rede do gol (alpha). */
function drawNet(context, width, height) {
  context.clearRect(0, 0, width, height);
  context.strokeStyle = 'rgba(255,255,255,0.92)';
  context.lineWidth = 3;
  const cell = 26;
  for (let x = 0; x <= width; x += cell) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y <= height; y += cell) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}

/** Céu noturno com o brilho dos refletores. */
function drawSky(context, width, height) {
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#071120');
  gradient.addColorStop(0.5, '#123049');
  gradient.addColorStop(0.82, '#1d4a5e');
  gradient.addColorStop(1, '#2a6270');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  for (let star = 0; star < 260; star += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height * 0.6;
    context.fillStyle = `rgba(255,255,255,${0.15 + Math.random() * 0.5})`;
    context.fillRect(x, y, 1.6, 1.6);
  }
}

function buildStand(width, depth, height, texture, options = {}) {
  const group = new THREE.Group();
  const { rotation = 0, position = [0, 0, 0] } = options;

  const seatMaterial = new THREE.MeshLambertMaterial({ map: texture, emissive: 0x3d5273 });
  const concreteMaterial = new THREE.MeshLambertMaterial({ color: 0x2c3a48 });
  const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x16212c });

  const wallHeight = 2.4;
  const seatHeight = height - wallHeight;
  const angle = 0.46;
  const slopeLength = Math.hypot(depth, seatHeight * Math.tan(angle));

  // Muro baixo na frente do gramado (não esconde a torcida).
  const wall = new THREE.Mesh(new THREE.BoxGeometry(width, wallHeight, 1), concreteMaterial);
  wall.position.set(0, wallHeight / 2, depth / 2 + 0.4);
  group.add(wall);

  // Arquibancada inclinada com a torcida.
  const slope = new THREE.Mesh(new THREE.BoxGeometry(width, 1.1, slopeLength), seatMaterial);
  slope.position.set(0, wallHeight + seatHeight / 2, -0.6);
  slope.rotation.x = angle;
  group.add(slope);

  // Fundo da arquibancada.
  const back = new THREE.Mesh(new THREE.BoxGeometry(width, height, 1), concreteMaterial);
  back.position.set(0, height / 2, -depth / 2 - 0.6);
  group.add(back);

  // Cobertura.
  const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 2, 0.9, depth + 8), roofMaterial);
  roof.position.set(0, height + 5.4, -1.4);
  group.add(roof);

  for (let column = -2; column <= 2; column += 1) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.7, height + 5, 0.7), concreteMaterial);
    pillar.position.set((column / 2) * width * 0.42, (height + 5) / 2, depth / 2 + 0.2);
    group.add(pillar);
  }

  group.rotation.y = rotation;
  group.position.set(position[0], position[1], position[2]);
  return group;
}

function buildGoal(side) {
  const group = new THREE.Group();
  const postMaterial = new THREE.MeshLambertMaterial({ color: 0xf4f6f8 });
  const halfWidth = GOAL.width / 2;

  const postGeometry = new THREE.CylinderGeometry(GOAL.postRadius, GOAL.postRadius, GOAL.height, 10);
  for (const z of [-halfWidth, halfWidth]) {
    const post = new THREE.Mesh(postGeometry, postMaterial);
    post.position.set(0, GOAL.height / 2, z);
    group.add(post);
  }
  const crossbar = new THREE.Mesh(
    new THREE.CylinderGeometry(GOAL.postRadius, GOAL.postRadius, GOAL.width + GOAL.postRadius * 2, 10),
    postMaterial
  );
  crossbar.rotation.x = Math.PI / 2;
  crossbar.position.set(0, GOAL.height, 0);
  group.add(crossbar);

  const netTexture = canvasTexture(256, 256, drawNet);
  netTexture.wrapS = THREE.RepeatWrapping;
  netTexture.wrapT = THREE.RepeatWrapping;
  const netMaterial = new THREE.MeshBasicMaterial({
    map: netTexture,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    opacity: 0.55
  });

  // Fundo da rede.
  const back = new THREE.Mesh(new THREE.PlaneGeometry(GOAL.width, GOAL.height), netMaterial);
  back.position.set(-side * GOAL.depth, GOAL.height / 2, 0);
  back.rotation.y = Math.PI / 2;
  back.material = netMaterial.clone();
  back.material.map = netTexture.clone();
  back.material.map.repeat.set(GOAL.width / 2, GOAL.height / 2);
  back.material.map.needsUpdate = true;
  group.add(back);

  // Laterais.
  for (const z of [-halfWidth, halfWidth]) {
    const sidePanel = new THREE.Mesh(new THREE.PlaneGeometry(GOAL.depth, GOAL.height), netMaterial);
    const material = netMaterial.clone();
    material.map = netTexture.clone();
    material.map.repeat.set(GOAL.depth / 2, GOAL.height / 2);
    material.map.needsUpdate = true;
    sidePanel.material = material;
    sidePanel.position.set(-side * GOAL.depth / 2, GOAL.height / 2, z);
    sidePanel.rotation.y = side > 0 ? 0 : Math.PI;
    group.add(sidePanel);
  }

  // Teto da rede.
  const top = new THREE.Mesh(new THREE.PlaneGeometry(GOAL.depth, GOAL.width), netMaterial);
  const topMaterial = netMaterial.clone();
  topMaterial.map = netTexture.clone();
  topMaterial.map.repeat.set(GOAL.depth / 2, GOAL.width / 2);
  topMaterial.map.needsUpdate = true;
  top.material = topMaterial;
  top.rotation.x = -Math.PI / 2;
  top.position.set(-side * GOAL.depth / 2, GOAL.height, 0);
  group.add(top);

  group.position.x = side * PITCH.halfLength;
  return group;
}

function buildFloodlight(x, z) {
  const group = new THREE.Group();
  const mastMaterial = new THREE.MeshLambertMaterial({ color: 0x27333f });
  const lampMaterial = new THREE.MeshBasicMaterial({ color: 0xfdf6d8 });

  const mast = new THREE.Mesh(new THREE.BoxGeometry(0.9, 32, 0.9), mastMaterial);
  mast.position.y = 16;
  group.add(mast);

  const rig = new THREE.Mesh(new THREE.BoxGeometry(7, 3.4, 0.7), mastMaterial);
  rig.position.y = 32.4;
  group.add(rig);

  for (let lamp = 0; lamp < 6; lamp += 1) {
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.35), lampMaterial);
    bulb.position.set((lamp % 3) * 2.1 - 2.1, 32.4 + (lamp < 3 ? 0.9 : -0.9), 0.42);
    group.add(bulb);
  }

  group.position.set(x, 0, z);
  return group;
}

/**
 * Monta o estádio completo na cena.
 * Devolve os objetos que o motor de partida precisa (gol, placas, bola).
 */
export function buildStadium(scene, options = {}) {
  const group = new THREE.Group();
  scene.add(group);

  // Céu.
  const skyTexture = canvasTexture(1024, 512, drawSky);
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(320, 24, 16),
    new THREE.MeshBasicMaterial({ map: skyTexture, side: THREE.BackSide, depthWrite: false })
  );
  sky.position.y = -40;
  group.add(sky);

  // Gramado.
  const pitchTexture = canvasTexture(2048, 1328, drawPitch);
  const pitch = new THREE.Mesh(
    new THREE.PlaneGeometry(PITCH.length, PITCH.width),
    new THREE.MeshLambertMaterial({ map: pitchTexture })
  );
  pitch.rotation.x = -Math.PI / 2;
  group.add(pitch);

  // Faixa de grama fora das linhas.
  const surround = new THREE.Mesh(
    new THREE.PlaneGeometry(PITCH.length + 8, PITCH.width + 8),
    new THREE.MeshLambertMaterial({ color: 0x1f5c28 })
  );
  surround.rotation.x = -Math.PI / 2;
  surround.position.y = -0.02;
  group.add(surround);

  // Arquibancadas.
  const crowdTexture = canvasTexture(512, 512, drawCrowd);
  crowdTexture.wrapS = THREE.RepeatWrapping;
  crowdTexture.wrapT = THREE.RepeatWrapping;
  crowdTexture.repeat.set(4, 1.4);

  const standOptions = [
    { width: PITCH.length + 18, depth: 16, height: 15, rotation: 0, position: [0, 0, -(PITCH.halfWidth + 9)] },
    { width: PITCH.length + 18, depth: 16, height: 15, rotation: Math.PI, position: [0, 0, PITCH.halfWidth + 9] },
    { width: PITCH.width + 18, depth: 16, height: 15, rotation: Math.PI / 2, position: [-(PITCH.halfLength + 9), 0, 0] },
    { width: PITCH.width + 18, depth: 16, height: 15, rotation: -Math.PI / 2, position: [PITCH.halfLength + 9, 0, 0] }
  ];
  for (const option of standOptions) {
    group.add(buildStand(option.width, option.depth, option.height, crowdTexture, option));
  }

  // Placas de publicidade.
  const adTexture = canvasTexture(1024, 96, drawAds);
  adTexture.wrapS = THREE.RepeatWrapping;
  adTexture.repeat.set(6, 1);
  const adMaterial = new THREE.MeshLambertMaterial({ map: adTexture, emissive: 0x2c4438 });
  const adHeight = 1.1;
  const ads = [
    { size: [PITCH.length, adHeight], position: [0, adHeight / 2, -(PITCH.halfWidth + 1.6)] },
    { size: [PITCH.length, adHeight], position: [0, adHeight / 2, PITCH.halfWidth + 1.6] },
    { size: [PITCH.width, adHeight], position: [-(PITCH.halfLength + 1.6), adHeight / 2, 0] },
    { size: [PITCH.width, adHeight], position: [PITCH.halfLength + 1.6, adHeight / 2, 0] }
  ];
  for (const ad of ads) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(ad.size[0], ad.size[1]), adMaterial);
    mesh.position.set(ad.position[0], ad.position[1], ad.position[2]);
    if (Math.abs(ad.position[0]) > 1) mesh.rotation.y = ad.position[0] > 0 ? -Math.PI / 2 : Math.PI / 2;
    else mesh.rotation.y = ad.position[2] > 0 ? Math.PI : 0;
    group.add(mesh);
  }

  // Gols.
  const goals = { home: buildGoal(-1), away: buildGoal(1) };
  group.add(goals.home, goals.away);

  // Refletores.
  for (const x of [-(PITCH.halfLength + 20), PITCH.halfLength + 20]) {
    for (const z of [-(PITCH.halfWidth + 22), PITCH.halfWidth + 22]) {
      group.add(buildFloodlight(x, z));
    }
  }

  // Luzes.
  const hemisphere = new THREE.HemisphereLight(0xaed4ff, 0x367a3c, 1.05);
  scene.add(hemisphere);
  const key = new THREE.DirectionalLight(0xfff6e4, 1.35);
  key.position.set(-45, 70, 40);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x9fc0ff, 0.5);
  fill.position.set(50, 40, -45);
  scene.add(fill);
  const ambient = new THREE.AmbientLight(0xffffff, 0.22);
  scene.add(ambient);

  return {
    group,
    goals,
    /** O gol que o time da casa defende fica em -X. */
    dispose() {
      group.parent?.remove(group);
    }
  };
}
