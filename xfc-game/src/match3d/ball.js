// A bola: física simples (gravidade, quique, atrito, arrasto e efeito Magnus)
// e a malha 3D com a textura clássica de gomos.

import { THREE, canvasTexture, softShadowTexture } from './engine.js';
import { BALL, PITCH, GOAL } from './constants.js';
import { applyBallAirForces, curveSpinRate } from './physics.js';

/** Desaceleração da bola rolando no gramado (m/s²). */
const GROUND_FRICTION = 5.4;

function drawBall(context, width, height) {
  context.fillStyle = '#f4f3ed';
  context.fillRect(0, 0, width, height);

  // Base perolada com relevo fino de microfibra; a iluminação 3D continua a
  // definir a forma esférica, a textura acrescenta apenas os gomos e costuras.
  const base = context.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, '#ffffff');
  base.addColorStop(0.46, '#f5f4ee');
  base.addColorStop(1, '#dedfd9');
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);

  let seed = 0x27fc2026;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let index = 0; index < 2500; index += 1) {
    const x = random() * width;
    const y = random() * height;
    const radius = 0.35 + random() * 0.75;
    context.fillStyle = random() > 0.5 ? 'rgba(25,39,45,.07)' : 'rgba(255,255,255,.48)';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  const hexPath = (cx, cy, rx, ry) => {
    context.beginPath();
    for (let corner = 0; corner < 6; corner += 1) {
      const angle = (Math.PI / 3) * corner + Math.PI / 6;
      const x = cx + Math.cos(angle) * rx;
      const y = cy + Math.sin(angle) * ry;
      if (corner === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();
  };

  // Gomos hexagonais com variação de branco e uma dupla costura em relevo.
  const columns = 8;
  const cellX = width / columns;
  const cellY = height / 6;
  for (let row = -1; row <= 6; row += 1) {
    for (let column = -1; column <= columns; column += 1) {
      const cx = column * cellX + (row % 2 ? cellX * 0.5 : 0) + cellX * 0.5;
      const cy = row * cellY + cellY * 0.5;
      hexPath(cx, cy, cellX * 0.49, cellY * 0.47);
      context.fillStyle = ['#fbfaf5', '#f0f1ec', '#f7f6f0'][(row - column + 12) % 3];
      context.fill();
      context.lineJoin = 'round';
      context.strokeStyle = 'rgba(12,24,30,.48)';
      context.lineWidth = Math.max(2.4, width * 0.0036);
      context.stroke();
      hexPath(cx, cy, cellX * 0.465, cellY * 0.445);
      context.strokeStyle = 'rgba(255,255,255,.82)';
      context.lineWidth = Math.max(0.8, width * 0.00115);
      context.stroke();
    }
  }

  // Painéis pentagonais escuros característicos, sobrepostos ao encontro dos
  // hexágonos. Repetição horizontal para que a emenda U=0/1 continue limpa.
  const pentagons = [
    [0.5, 0.17], [0.15, 0.34], [0.85, 0.34], [0.32, 0.54], [0.68, 0.54],
    [0.5, 0.82], [0.04, 0.72], [0.96, 0.72], [0.25, 0.94], [0.75, 0.94],
    [0.05, 0.08], [0.95, 0.08]
  ];
  for (const [u, v] of pentagons) {
    const cx = u * width;
    const cy = v * height;
    for (const wrap of [-width, 0, width]) {
      context.beginPath();
      for (let corner = 0; corner < 5; corner += 1) {
        const angle = -Math.PI / 2 + (corner / 5) * Math.PI * 2;
        const px = cx + wrap + Math.cos(angle) * width * 0.032;
        const py = cy + Math.sin(angle) * height * 0.055;
        if (corner === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.closePath();
      const panel = context.createLinearGradient(cx - width * 0.03, cy - height * 0.05,
        cx + width * 0.03, cy + height * 0.05);
      panel.addColorStop(0, '#303b40');
      panel.addColorStop(0.52, '#10171b');
      panel.addColorStop(1, '#20292d');
      context.fillStyle = panel;
      context.fill();
      context.strokeStyle = 'rgba(4,11,15,.82)';
      context.lineWidth = Math.max(1.5, width * 0.0021);
      context.stroke();
      context.strokeStyle = 'rgba(255,255,255,.44)';
      context.lineWidth = Math.max(0.8, width * 0.0009);
      context.stroke();
    }
  }

  // Discreet colored speed arcs and a tiny XFC mark add a current match-ball
  // finish without turning the entire ball into a flat graphic.
  context.save();
  context.globalAlpha = 0.78;
  context.strokeStyle = '#21bca1';
  context.lineWidth = Math.max(2, width * 0.003);
  for (const [cx, cy, direction] of [[0.31, 0.53, 1], [0.69, 0.23, -1], [0.88, 0.86, 1]]) {
    context.beginPath();
    context.moveTo(cx * width - 15, cy * height + direction * 8);
    context.quadraticCurveTo(cx * width, cy * height - direction * 12,
      cx * width + 17, cy * height + direction * 3);
    context.stroke();
  }
  context.restore();
  context.save();
  context.translate(width * 0.55, height * 0.51);
  context.rotate(-0.08);
  context.fillStyle = 'rgba(20, 99, 101, .9)';
  context.font = `900 ${Math.round(width * 0.018)}px Inter, sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText('XFC', 0, 0);
  context.restore();

  // Vinheta sutil dos polos, própria da projeção esférica UV.
  const poles = context.createLinearGradient(0, 0, 0, height);
  poles.addColorStop(0, 'rgba(28,42,48,.14)');
  poles.addColorStop(0.12, 'rgba(255,255,255,0)');
  poles.addColorStop(0.88, 'rgba(255,255,255,0)');
  poles.addColorStop(1, 'rgba(28,42,48,.12)');
  context.fillStyle = poles;
  context.fillRect(0, 0, width, height);
}

export function createBall(scene, { lowPower = false } = {}) {
  const texture = canvasTexture(lowPower ? 768 : 1024, lowPower ? 384 : 512, drawBall);
  texture.anisotropy = lowPower ? 2 : 8;
  const geometry = new THREE.SphereGeometry(BALL.radius, lowPower ? 36 : 56, lowPower ? 24 : 36);
  geometry.computeBoundingSphere();
  const material = lowPower
    ? new THREE.MeshPhongMaterial({ map: texture, shininess: 34, specular: 0x60676a })
    : new THREE.MeshPhysicalMaterial({
      map: texture, roughness: 0.34, metalness: 0.015, clearcoat: 0.18,
      clearcoatRoughness: 0.48, specularIntensity: 0.48, specularColor: 0xc8d4d8
    });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'xfc-match-ball';
  mesh.userData.spherical = true;
  mesh.userData.radius = BALL.radius;
  mesh.userData.panelTexture = 'xfc-pro-match-ball-v2';
  mesh.castShadow = true;
  scene.add(mesh);
  const rollAxis = new THREE.Vector3();

  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(BALL.radius * 7.2, BALL.radius * 5.2),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      toneMapped: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.018;
  scene.add(shadow);

  const state = {
    position: new THREE.Vector3(0, BALL.radius, 0),
    velocity: new THREE.Vector3(),
    spin: new THREE.Vector3(),
    owner: null,
    lastTouch: null,
    // Evita que o mesmo jogador "mate" o chute em vários quadros seguidos.
    lastCollision: null,
    lastCollisionAt: -1,
    // Identifica cada passe/chute para que o goleiro não repita o mergulho
    // várias vezes durante a mesma trajetória.
    flightId: 0,
    guidance: null
  };

  function reset(x = 0, z = 0) {
    state.position.set(x, BALL.radius, z);
    state.velocity.set(0, 0, 0);
    state.spin.set(0, 0, 0);
    state.owner = null;
    state.guidance = null;
    mesh.position.copy(state.position);
  }

  return {
    mesh,
    shadow,
    state,
    reset,
    /** Chute: aplica velocidade e um pouco de efeito. */
    kick(direction, power = 18, lift = 0.18, { guide = null, curve = 0 } = {}) {
      const speed = Math.max(0, Number(power) || 0);
      const dx = Number(direction?.x) || 0;
      const dz = Number(direction?.z) || 0;
      state.flightId += 1;
      state.velocity.set(dx * speed, speed * lift, dz * speed);
      // X/Z representam a rotação de rolamento; Y guarda apenas o efeito lateral.
      // Separar o sidespin do rolamento evita forças verticais e curvas orbitais.
      state.spin.set(-dz * speed * 0.25, curveSpinRate(speed, curve), dx * speed * 0.25);
      state.guidance = guide ? { ...guide, elapsed: 0 } : null;
      state.owner = null;
    },
    /** Coloca a bola no pé de um jogador (domínio). */
    attachTo(player) {
      state.owner = player;
      state.velocity.set(0, 0, 0);
      state.guidance = null;
    },
    /**
     * Avança a física. `players` é a lista de quem pode tocar a bola.
     * Devolve o evento de borda (fora de campo / gol) quando acontecer.
     */
    update(dt, players = []) {
      const { position, velocity, spin } = state;

      if (state.owner) {
        // A bola fica presa ao pé do dono, um pouco à frente.
        const owner = state.owner;
        const forward = owner.facing || new THREE.Vector3(0, 0, 1);
        position.set(
          owner.root.position.x + forward.x * 0.45,
          BALL.radius,
          owner.root.position.z + forward.z * 0.45
        );
        mesh.position.copy(position);
        shadow.position.set(position.x, 0.02, position.z);
        shadow.scale.setScalar(1);
        return null;
      }

      // Passe assistido: corrige suavemente o rumo para o espaço de recepção,
      // acompanhando a corrida do companheiro sem teletransportar a bola nem
      // impedir uma interceptação adversária.
      const guide = state.guidance;
      if (guide) {
        const receiver = guide.receiver;
        if (!receiver?.active || guide.elapsed > 2.4) {
          state.guidance = null;
        } else {
          guide.elapsed += dt;
          const horizontalSpeed = Math.max(4, Math.hypot(velocity.x, velocity.z));
          const distance = Math.hypot(guide.x - position.x, guide.z - position.z);
          const flightTime = Math.max(0.08, Math.min(0.7, distance / horizontalSpeed));
          const futureX = guide.x + (receiver.vx || 0) * flightTime * 0.45;
          const futureZ = guide.z + (receiver.vz || 0) * flightTime * 0.45;
          const dx = futureX - position.x;
          const dz = futureZ - position.z;
          const length = Math.hypot(dx, dz) || 1;
          const response = Math.min(1, dt * (guide.through ? 2.1 : 2.9));
          velocity.x += (dx / length * horizontalSpeed - velocity.x) * response;
          velocity.z += (dz / length * horizontalSpeed - velocity.z) * response;
          if (distance < 1.1) state.guidance = null;
        }
      }

      // Gravidade, resistência do ar e Magnus limitado. O sidespin modifica a
      // trajetória durante o voo sem substituir a velocidade de avanço.
      applyBallAirForces(velocity, spin, dt);
      position.addScaledVector(velocity, dt);

      // Quique no gramado.
      if (position.y <= BALL.radius) {
        position.y = BALL.radius;
        if (velocity.y < 0) velocity.y = -velocity.y * 0.58;
        if (Math.abs(velocity.y) < 0.6) velocity.y = 0;
        // Atrito do gramado: a bola perde velocidade de forma constante
        // (como no gramado de verdade, ~5 m/s²).
        const groundSpeed = Math.hypot(velocity.x, velocity.z);
        if (groundSpeed > 0.01) {
          const factor = Math.max(0, 1 - (GROUND_FRICTION * dt) / groundSpeed);
          velocity.x *= factor;
          velocity.z *= factor;
        }
        spin.multiplyScalar(1 - Math.min(1.6 * dt, 0.4));
      }

      // Colisão com os jogadores (tratados como círculos no chão).
      const now = performance.now() / 1000;
      for (const player of players) {
        if (!player.active) continue;
        const dx = position.x - player.root.position.x;
        const dz = position.z - player.root.position.z;
        const distance = Math.hypot(dx, dz);
        const reach = (player.reach || 0.52) + BALL.radius;
        const reachHeight = player.reachHeight || 1.8;
        if (distance < reach && position.y < reachHeight) {
          const nx = distance > 0.001 ? dx / distance : 1;
          const nz = distance > 0.001 ? dz / distance : 0;
          const push = reach - distance;
          position.x += nx * push;
          position.z += nz * push;
          // A bola "toca" no jogador: uma bola rápida só raspa e segue.
          const speed = velocity.length();
          const repeated = state.lastCollision === player && now - state.lastCollisionAt < 0.3;
          if (!repeated) {
            const loss = speed > 14 ? 0.93 : 0.8;
            velocity.multiplyScalar(loss);
            velocity.x += nx * (speed > 14 ? 0.35 : 1.4);
            velocity.z += nz * (speed > 14 ? 0.35 : 1.4);
            state.lastCollision = player;
            state.lastCollisionAt = now;
            if (position.y > 1.24) player.model?.header?.();
          }
          state.lastTouch = player;
        }
      }

      // Traves e travessão.
      for (const side of [-1, 1]) {
        const goalX = side * PITCH.halfLength;
        if (Math.abs(position.x - goalX) < 0.4 && Math.abs(position.z) < GOAL.width / 2 + 0.2) {
          for (const z of [-GOAL.width / 2, GOAL.width / 2]) {
            // O poste só rebate a bola que passa raspando nele.
            if (Math.abs(position.z - z) < 0.18 && position.y < GOAL.height + 0.2) {
              position.z = z + Math.sign(position.z - z || 1) * 0.2;
              velocity.z = -velocity.z * 0.62;
            }
          }
          // O travessão: a bola rebate só se encostar na barra.
          if (Math.abs(position.z) < GOAL.width / 2 && Math.abs(position.y - GOAL.height) < 0.18) {
            position.y = GOAL.height + 0.2;
            velocity.y = -velocity.y * 0.55;
          }
        }
      }

      // A rede segura a bola dentro do gol (fundo, laterais e teto).
      if (Math.abs(position.x) > PITCH.halfLength && Math.abs(position.z) < GOAL.width / 2 + 0.25 && position.y < GOAL.height + 0.35) {
        const back = PITCH.halfLength + GOAL.depth - 0.28;
        if (Math.abs(position.x) > back) {
          position.x = Math.sign(position.x) * back;
          velocity.x *= -0.16;
          velocity.y *= 0.55;
          velocity.z *= 0.5;
        }
        const sideLimit = GOAL.width / 2 - 0.02;
        if (Math.abs(position.z) > sideLimit) {
          position.z = Math.sign(position.z) * sideLimit;
          velocity.z *= -0.3;
        }
        if (position.y > GOAL.height) {
          position.y = GOAL.height;
          velocity.y = Math.min(0, velocity.y) * 0.3;
        }
      }

      // Limites da arena (as laterais tratam as regras depois).
      position.x = Math.max(-PITCH.halfLength - 6, Math.min(PITCH.halfLength + 6, position.x));
      position.z = Math.max(-PITCH.halfWidth - 6, Math.min(PITCH.halfWidth + 6, position.z));

      mesh.position.copy(position);
      shadow.position.set(position.x, 0.02, position.z);
      const shadowScale = Math.max(0.55, 1 - position.y * 0.25);
      shadow.scale.setScalar(shadowScale);
      shadow.material.opacity = 0.9 * shadowScale;

      // A bola gira conforme anda.
      const speed = Math.hypot(velocity.x, velocity.z);
      if (speed > 0.05) {
        rollAxis.set(velocity.z, 0, -velocity.x).normalize();
        mesh.rotateOnWorldAxis(rollAxis, (speed * dt) / BALL.radius);
      }
      return null;
    },
    dispose() {
      mesh.geometry.dispose();
      mesh.material.map?.dispose();
      mesh.material.dispose();
      mesh.parent?.remove(mesh);
      shadow.geometry.dispose();
      shadow.material.dispose();
      shadow.parent?.remove(shadow);
    }
  };
}
