// A bola: física simples (gravidade, quique, atrito, arrasto e efeito Magnus)
// e a malha 3D com a textura clássica de gomos.

import { THREE, canvasTexture } from './engine.js';
import { BALL, PITCH, GOAL } from './constants.js';

const GRAVITY = -9.81;
/** Desaceleração da bola rolando no gramado (m/s²). */
const GROUND_FRICTION = 5.4;

function drawBall(context, width, height) {
  context.fillStyle = '#f7f7f4';
  context.fillRect(0, 0, width, height);
  context.fillStyle = '#1b1f24';
  // Gomos escuros espalhados (textura esférica approximada).
  const spots = [
    [0.5, 0.18, 0.11], [0.18, 0.4, 0.09], [0.82, 0.42, 0.09],
    [0.42, 0.68, 0.1], [0.76, 0.82, 0.08], [0.12, 0.86, 0.07]
  ];
  for (const [x, y, radius] of spots) {
    context.beginPath();
    context.arc(x * width, y * height, radius * width, 0, Math.PI * 2);
    context.fill();
  }
  context.strokeStyle = 'rgba(30,34,40,0.55)';
  context.lineWidth = width * 0.012;
  for (let line = 0; line < 5; line += 1) {
    context.beginPath();
    context.moveTo(0, (line / 5) * height);
    context.lineTo(width, ((line + 1) / 5) * height);
    context.stroke();
  }
}

export function createBall(scene) {
  const texture = canvasTexture(256, 256, drawBall);
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(BALL.radius, 18, 14),
    new THREE.MeshPhongMaterial({ map: texture, shininess: 26, specular: 0x444444 })
  );
  mesh.castShadow = true;
  scene.add(mesh);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(BALL.radius * 1.25, 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.02;
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
    kick(direction, power = 18, lift = 0.18, { guide = null } = {}) {
      state.velocity.set(
        direction.x * power,
        power * lift,
        direction.z * power
      );
      state.spin.set(
        -direction.z * power * 0.25,
        0,
        direction.x * power * 0.25
      );
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

      // Gravidade e arrasto do ar (leve, como uma bola de verdade).
      velocity.y += GRAVITY * dt;
      velocity.multiplyScalar(1 - Math.min(0.12 * dt, 0.05));

      // Efeito Magnus: a bola curva conforme o giro.
      const magnus = new THREE.Vector3().crossVectors(spin, velocity).multiplyScalar(0.06 * dt);
      velocity.add(magnus);

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
        if (distance < reach && position.y < 1.8) {
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
      shadow.material.opacity = 0.34 * shadowScale;

      // A bola gira conforme anda.
      const speed = Math.hypot(velocity.x, velocity.z);
      if (speed > 0.05) {
        mesh.rotateOnWorldAxis(
          new THREE.Vector3(velocity.z, 0, -velocity.x).normalize(),
          (speed * dt) / BALL.radius
        );
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
