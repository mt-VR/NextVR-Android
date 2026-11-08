// Movimentação dos jogadores: velocidade, direção e suavização.
//
// O jogador guarda a posição em números simples (x, z) e o modelo 3D é
// sincronizado com o grupo do three.js a cada quadro.

import { PITCH } from './constants.js';

/** Limpa a velocidade do jogador na direção do alvo. */
export function steerPlayer(player, targetX, targetZ, dt, maxSpeed = 6.4, { arrive = 0.6, turn = 12 } = {}) {
  const dx = targetX - player.x;
  const dz = targetZ - player.z;
  const distance = Math.hypot(dx, dz);

  if (distance < 0.05) {
    player.vx *= 0.6;
    player.vz *= 0.6;
    return 0;
  }

  // Aceleração e frenagem suaves.
  const desiredSpeed = distance < arrive ? maxSpeed * (distance / arrive) : maxSpeed;
  const desiredVx = (dx / distance) * desiredSpeed;
  const desiredVz = (dz / distance) * desiredSpeed;
  const factor = Math.min(1, turn * dt);
  player.vx += (desiredVx - player.vx) * factor;
  player.vz += (desiredVz - player.vz) * factor;

  player.x += player.vx * dt;
  player.z += player.vz * dt;
  clampToPitch(player, 1.2);
  return Math.hypot(player.vx, player.vz);
}

/** Mantém o jogador dentro do campo (com uma margem para as laterais). */
export function clampToPitch(player, margin = 1.2) {
  player.x = Math.max(-PITCH.halfLength - margin, Math.min(PITCH.halfLength + margin, player.x));
  player.z = Math.max(-PITCH.halfWidth - margin, Math.min(PITCH.halfWidth + margin, player.z));
}

/** Vira o modelo do jogador para um ponto do campo. */
export function faceTowards(player, x, z, dt, turnSpeed = 9) {
  const angle = Math.atan2(x - player.x, z - player.z);
  let difference = angle - player.facingAngle;
  while (difference > Math.PI) difference -= Math.PI * 2;
  while (difference < -Math.PI) difference += Math.PI * 2;
  player.facingAngle += difference * Math.min(1, turnSpeed * dt);
  player.root.rotation.y = player.facingAngle;
  player.facing.x = Math.sin(player.facingAngle);
  player.facing.z = Math.cos(player.facingAngle);
}

/** Velocidade escalar do jogador no quadro. */
export function playerSpeed(player) {
  return Math.hypot(player.vx, player.vz);
}
