// Leitura do voo da bola e posicionamento de base do goleiro.
// A previsão usa os mesmos coeficientes da física em ball.js, mas números
// escalares para não alocar vetores no loop da partida.

import { BALL, GOAL } from './constants.js';

const GRAVITY = -9.81;
const GROUND_FRICTION = 5.4;
const SIMULATION_STEP = 1 / 60;
const MAX_PREDICTION_TIME = 3.2;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Projeta a bola até o plano da linha de gol, incluindo gravidade, arrasto,
 * efeito Magnus e quique no gramado. Retorna null se ela não estiver viajando
 * na direção desse gol ou não chegar lá dentro da janela de leitura.
 */
export function predictGoalkeeperIntercept(ballState, goalX, maxTime = MAX_PREDICTION_TIME) {
  const position = ballState?.position;
  const velocity = ballState?.velocity;
  const spin = ballState?.spin;
  if (!position || !velocity || !Number.isFinite(goalX)
    || !Number.isFinite(position.x) || !Number.isFinite(position.z)
    || !Number.isFinite(velocity.x) || !Number.isFinite(velocity.z)) return null;

  const distanceToGoal = goalX - position.x;
  if (distanceToGoal * velocity.x <= 0.01 || Math.abs(velocity.x) < 1.2) return null;

  let x = position.x;
  let y = Number.isFinite(position.y) ? position.y : BALL.radius;
  let z = position.z;
  let vx = velocity.x;
  let vy = Number.isFinite(velocity.y) ? velocity.y : 0;
  let vz = velocity.z;
  let spinX = Number.isFinite(spin?.x) ? spin.x : 0;
  let spinY = Number.isFinite(spin?.y) ? spin.y : 0;
  let spinZ = Number.isFinite(spin?.z) ? spin.z : 0;
  const duration = clamp(Number.isFinite(maxTime) ? maxTime : MAX_PREDICTION_TIME, SIMULATION_STEP, 6);
  const steps = Math.ceil(duration / SIMULATION_STEP);

  for (let index = 0; index < steps; index += 1) {
    const dt = Math.min(SIMULATION_STEP, duration - index * SIMULATION_STEP);
    if (dt <= 0) break;
    const previousX = x;
    const previousY = y;
    const previousZ = z;
    const previousTime = index * SIMULATION_STEP;

    vy += GRAVITY * dt;
    const drag = 1 - Math.min(0.12 * dt, 0.05);
    vx *= drag;
    vy *= drag;
    vz *= drag;

    // Produto vetorial spin × velocidade, como na física da bola.
    const magnusX = spinY * vz - spinZ * vy;
    const magnusY = spinZ * vx - spinX * vz;
    const magnusZ = spinX * vy - spinY * vx;
    vx += magnusX * 0.06 * dt;
    vy += magnusY * 0.06 * dt;
    vz += magnusZ * 0.06 * dt;

    x += vx * dt;
    y += vy * dt;
    z += vz * dt;

    if (y <= BALL.radius) {
      y = BALL.radius;
      if (vy < 0) vy = -vy * 0.58;
      if (Math.abs(vy) < 0.6) vy = 0;
      const groundSpeed = Math.hypot(vx, vz);
      if (groundSpeed > 0.01) {
        const friction = Math.max(0, 1 - (GROUND_FRICTION * dt) / groundSpeed);
        vx *= friction;
        vz *= friction;
      }
      spinX *= 1 - Math.min(1.6 * dt, 0.4);
      spinY *= 1 - Math.min(1.6 * dt, 0.4);
      spinZ *= 1 - Math.min(1.6 * dt, 0.4);
    }

    const crossedGoalPlane = (goalX - previousX) * (goalX - x) <= 0;
    if (crossedGoalPlane && Math.abs(x - previousX) > 1e-6) {
      const fraction = clamp((goalX - previousX) / (x - previousX), 0, 1);
      const crossingY = previousY + (y - previousY) * fraction;
      const crossingZ = previousZ + (z - previousZ) * fraction;
      const time = previousTime + dt * fraction;
      const insideMouth = Math.abs(crossingZ) < GOAL.width / 2;
      const belowBar = crossingY < GOAL.height;
      return {
        x: goalX,
        y: crossingY,
        z: crossingZ,
        time,
        speed: Math.hypot(vx, vz),
        verticalSpeed: vy,
        insideMouth,
        belowBar,
        onTarget: insideMouth && belowBar
      };
    }
  }

  return null;
}

/** Posição de base: cobre o ângulo sem abandonar a linha do gol. */
export function goalkeeperPositionTarget(ballPosition, ownGoalX, attackSign, prediction = null) {
  const distanceToGoal = Math.max(1.5, Math.abs(ballPosition.x - ownGoalX));
  const depth = prediction?.onTarget
    ? clamp(1.2 + prediction.time * 0.72, 1.2, 2.85)
    : clamp(1.15 + Math.max(0, 22 - distanceToGoal) * 0.075, 1.15, 2.8);
  const lateral = prediction?.onTarget
    ? prediction.z
    : ballPosition.z * (depth / distanceToGoal);
  return {
    x: ownGoalX + attackSign * depth,
    z: clamp(lateral, -3.25, 3.25),
    depth
  };
}

/** Direção do mergulho: reage perto do chute e só uma vez por voo da bola. */
export function goalkeeperDiveDirection(keeper, prediction, flightId = 0) {
  if (!prediction?.onTarget || !Number.isFinite(prediction.time)) return 0;
  if (keeper.gkDiveFlightId === flightId) return 0;

  const deltaZ = prediction.z - keeper.z;
  const skill = clamp(Number(keeper.goalkeeping ?? keeper.ovr ?? 70), 40, 99);
  // Um goleiro mais fraco precisa iniciar a ação um pouco antes.
  const reactionWindow = clamp(0.92 - (skill - 60) * 0.003, 0.74, 0.98);
  const lateralThreshold = prediction.y > 1.5 ? 0.68 : 0.92;
  if (prediction.time > reactionWindow || Math.abs(deltaZ) < lateralThreshold) return 0;
  return deltaZ > 0 ? 1 : -1;
}

/** Chance real de alcance no gol; o mergulho só ajuda se foi a tempo e ao lado certo. */
export function goalkeeperSaveChance({ keeper, position, flightId = 0, now = 0, kind = 'normal' }) {
  if (!keeper || !position) return 0;
  const skill = clamp(Number(keeper.goalkeeping ?? keeper.ovr ?? 70), 40, 99);
  const lateralDistance = Math.abs(position.z - keeper.z);
  const lineDistance = Math.abs(position.x - keeper.x);
  const diveAge = now - (keeper.gkDiveAt ?? -Infinity);
  const diveDirectionToBall = Math.sign(position.z - (keeper.gkDiveStartZ ?? keeper.z));
  const timedDive = keeper.gkDiveFlightId === flightId
    && diveAge >= 0 && diveAge <= 0.95
    && diveDirectionToBall === keeper.gkDiveDirection;
  const diveReach = timedDive
    ? 0.85 * (1 - Math.max(0, diveAge - 0.15) / 0.95 * 0.42)
    : 0;
  const reach = 2.35 + (skill - 70) * 0.005 + diveReach;
  if (lateralDistance > reach || lineDistance > 3.25 || position.y > GOAL.height + 0.25) return 0;

  const heightFactor = position.y > 1.55 ? 0.78 : 1.08;
  const kindFactor = kind === 'placed' ? 0.72 : kind === 'power' ? 0.8 : kind === 'curved' ? 0.84 : 1;
  const placement = Math.max(0, 1 - lateralDistance / reach);
  const diveBonus = timedDive ? 0.1 : 0;
  return clamp((0.3 + 0.42 * placement + (skill - 70) * 0.003 + diveBonus)
    * heightFactor * kindFactor, 0.08, 0.94);
}
