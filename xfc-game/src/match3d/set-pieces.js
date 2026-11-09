// Cálculos determinísticos das bolas paradas: métricas de cobrança e uma
// previsão leve da trajetória para HUD/câmera. Não altera a física da partida.

import { GOAL, PITCH } from './constants.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/** Converte o ponto de contato escolhido no quadrado em efeito e altura. */
export function strikeFromImpact({ x = 0, y = 0 } = {}) {
  const impactX = clamp(Number.isFinite(Number(x)) ? Number(x) : 0, -1, 1);
  const impactY = clamp(Number.isFinite(Number(y)) ? Number(y) : 0, -1, 1);
  return {
    impactX,
    impactY,
    curve: impactX,
    // Tocar em cima da bola mantém o chute baixo; por baixo dá mais elevação.
    lift: Number((0.075 + ((impactY + 1) / 2) * 0.15).toFixed(3))
  };
}

/** Posição vertical do cursor correspondente à altura de uma cobrança. */
export function impactYFromLift(lift = 0.15) {
  return clamp(((Number(lift) - 0.075) / 0.15) * 2 - 1, -1, 1);
}

function distanceToSegment(pointX, pointZ, startX, startZ, endX, endZ) {
  const dx = endX - startX;
  const dz = endZ - startZ;
  const lengthSq = dx * dx + dz * dz;
  if (lengthSq < 0.0001) return Math.hypot(pointX - startX, pointZ - startZ);
  const t = clamp(((pointX - startX) * dx + (pointZ - startZ) * dz) / lengthSq, 0, 1);
  return Math.hypot(pointX - (startX + dx * t), pointZ - (startZ + dz * t));
}

/** Chance e precisão estimadas para uma falta direta, com influência real da barreira. */
export function evaluateFreeKick({
  x = 0,
  z = 0,
  attackSign = 1,
  shooting = 70,
  precision = shooting,
  aim = 0,
  wall = [],
  curve = 0,
  lift = 0.15
} = {}) {
  const sign = attackSign < 0 ? -1 : 1;
  const targetZ = clamp(aim, -1, 1) * (GOAL.width / 2 - 0.42);
  const goalX = sign * PITCH.halfLength;
  const distance = Math.hypot(goalX - x, z);
  const angleDegrees = Math.atan2(Math.abs(z), Math.max(1, Math.abs(goalX - x))) * (180 / Math.PI);
  let nearestWall = Infinity;
  for (const defender of wall) {
    if (!defender?.active) continue;
    nearestWall = Math.min(nearestWall,
      distanceToSegment(defender.x, defender.z, x, z, goalX, targetZ));
  }
  const wallPressure = Number.isFinite(nearestWall)
    ? clamp((2.35 - nearestWall) / 2.35, 0, 1)
    : 0;
  const laneQuality = 1 - wallPressure * 0.38;
  const rangeQuality = clamp(1 - Math.max(0, distance - 16) / 52, 0.12, 1);
  const angleQuality = clamp(Math.cos(angleDegrees * Math.PI / 180), 0.24, 1);
  const attributeQuality = clamp(0.72 + (Number(shooting) - 50) / 190, 0.5, 1.13);
  const liftValue = Number.isFinite(Number(lift))
    ? clamp(Number(lift), 0.075, 0.225)
    : 0.15;
  const trajectoryRisk = Math.abs(clamp(Number(curve) || 0, -1, 1)) * 4.5
    + Math.abs(liftValue - 0.15) * 8;
  const chancePercent = clamp(
    3 + 31 * Math.pow(rangeQuality, 1.48) * angleQuality * attributeQuality * laneQuality
      - trajectoryRisk * 0.28,
    1,
    44
  );
  const precisionPercent = clamp(
    48 + Number(precision) * 0.43 - distance * 0.43 - angleDegrees * 0.19
      - wallPressure * 12 - trajectoryRisk * 0.85,
    12,
    96
  );
  return {
    distance: Number(distance.toFixed(1)),
    angleDegrees: Number(angleDegrees.toFixed(1)),
    chancePercent: Math.round(chancePercent),
    precisionPercent: Math.round(precisionPercent),
    wallPressure: Number(wallPressure.toFixed(2)),
    laneQuality: Number(laneQuality.toFixed(2)),
    target: { x: goalX, z: targetZ }
  };
}

/** Estimativa de conversão de pênalti: finalização, goleiro e canto escolhido. */
export function evaluatePenalty({ finishing = 70, goalkeeper = 70, aim = 0, attackSign = 1 } = {}) {
  const sign = attackSign < 0 ? -1 : 1;
  const cornerDifficulty = Math.abs(clamp(aim, -1, 1));
  return {
    distance: 11,
    angleDegrees: 0,
    chancePercent: Math.round(clamp(
      79 + (Number(finishing) - 70) * 0.2 - (Number(goalkeeper) - 70) * 0.22 - cornerDifficulty * 9,
      32,
      96
    )),
    precisionPercent: Math.round(clamp(
      79 + (Number(finishing) - 70) * 0.24 - cornerDifficulty * 12,
      28,
      96
    )),
    target: {
      x: sign * PITCH.halfLength,
      z: clamp(aim, -1, 1) * (GOAL.width / 2 - 0.42)
    }
  };
}

/** Ponto de mira de um cruzamento; o recebedor mais próximo define a bola final. */
export function cornerTarget({ attackSign = 1, aim = 0 } = {}) {
  const sign = attackSign < 0 ? -1 : 1;
  return {
    x: sign * (PITCH.halfLength - 8.5),
    z: clamp(aim, -1, 1) * 7.2
  };
}

/** Amostra uma curva balística compacta para desenhar a previsão no campo. */
export function predictTrajectory({
  start = { x: 0, y: 0.11, z: 0 },
  target = { x: 1, z: 0 },
  speed = 20,
  lift = 0.14,
  curve = 0,
  segments = 24
} = {}) {
  const dx = target.x - start.x;
  const dz = target.z - start.z;
  const distance = Math.max(0.01, Math.hypot(dx, dz));
  const horizontalSpeed = clamp(Number(speed) || 0, 6, 34);
  const duration = clamp(distance / horizontalSpeed, 0.16, 2.4);
  const vx = dx / distance * horizontalSpeed;
  const vz = dz / distance * horizontalSpeed;
  const vy = horizontalSpeed * clamp(Number(lift) || 0, 0, 0.55);
  const samples = Math.max(4, Math.round(segments));
  const points = [];
  let bounced = false;
  for (let index = 0; index <= samples; index += 1) {
    const progress = index / samples;
    const time = duration * progress;
    let y = start.y + vy * time - 4.905 * time * time;
    if (y <= 0.11) {
      if (index > 0) bounced = true;
      y = 0.11;
    }
    const bend = Number(curve) * Math.sin(Math.PI * progress) * Math.min(2.4, distance * 0.045);
    points.push({
      x: start.x + vx * time,
      y,
      z: start.z + vz * time + bend
    });
    if (bounced && index > samples * 0.6) break;
  }
  return points;
}

export { clamp as clampSetPiece };
