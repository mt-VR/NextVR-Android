// Inteligência artificial dos times.
//
// Cada time (quando não está sob controle do jogador) segue um roteiro de
// futebol simples: quem está com a bola decide (chuta, passa ou dribla), o
// mais próximo busca a bola, os companions acompanham e a defesa marca.

import { PITCH, GOAL, FORMATION_433 } from './constants.js';
import { steerPlayer, faceTowards, faceVelocity, playerSpeed, clampToPitch } from './movement.js';
import { attackSign as attackSignOf, ownGoalX as ownGoalXOf, attackedGoalX } from './sides.js';

const RUN_SPEED = 6.3;
const SPRINT_SPEED = 8.1;
const CHASE_SPEED = 7.4;

export function createTeamAI({ side, world }) {
  const attackSign = attackSignOf(side);
  const goalX = attackedGoalX(side);
  const ownGoalX = ownGoalXOf(side);

  function members() {
    return world.members(side);
  }

  function opponents() {
    return world.members(side === 'home' ? 'away' : 'home');
  }

  /** Distância ao quadrado entre dois pontos (sem alocar vetores). */
  /** Probabilidade por quadro, independente da taxa de quadros do aparelho. */
  function chance(perFrame, dt) {
    return world.rng() < Math.min(1, perFrame * dt * 60);
  }

  function distance(ax, az, bx, bz) {
    const dx = ax - bx;
    const dz = az - bz;
    return dx * dx + dz * dz;
  }

  /** Posição de referência do jogador, deslocada conforme a bola. */
  function shapeTarget(player) {
    const base = FORMATION_433[player.index] || FORMATION_433[0];
    const ball = world.ball.state.position;
    let x = base.x * attackSign;
    let z = base.z;

    // O bloco inteiro anda com a bola (para frente e para os lados), mas sem
    // desabar todo para cima da bola: a defesa mantém a linha.
    const onBall = world.ball.state.owner && world.ball.state.owner.side === side;
    const push = onBall ? 0.42 : 0.28;
    x += Math.max(-32, Math.min(32, ball.x * attackSign)) * push;
    x += onBall ? attackSign * 7 : -attackSign * 3;
    z += Math.max(-24, Math.min(24, ball.z)) * 0.2;

    return { x, z, role: base.role };
  }

  /** Marca o adversário mais próximo dentro da zona do jogador. */
  function markTarget(player, target) {
    let best = null;
    let bestScore = Infinity;
    for (const rival of opponents()) {
      if (!rival.active) continue;
      const score = distance(rival.x, rival.z, target.x, target.z);
      if (score < bestScore && score < 100) {
        bestScore = score;
        best = rival;
      }
    }
    if (!best) return target;
    // Fica entre o adversário e o próprio gol, sem colar nele.
    const dx = best.x - ownGoalX;
    const dz = best.z;
    const length = Math.hypot(dx, dz) || 1;
    return {
      x: best.x - (dx / length) * 2.4,
      z: best.z - (dz / length) * 2.4
    };
  }

  /** Decisão do jogador que está com a bola. */
  function onBall(player, dt) {
    const ball = world.ball.state;
    const rivals = opponents().filter(rival => rival.active);
    let pressure = Infinity;
    for (const rival of rivals) {
      pressure = Math.min(pressure, Math.hypot(rival.x - player.x, rival.z - player.z));
    }

    const distanceToGoal = Math.hypot(goalX - player.x, player.z);
    // Só finaliza de dentro do "cone" de tiro: de muito longe da linha de
    // fundo, o gol não é um alvo válido.
    const inShootingRange = distanceToGoal < 27 && distanceToGoal > 4
      && Math.abs(player.z) < 20 && Math.abs(player.z) < distanceToGoal * 0.9;

    // Finalização: com espaço à frente ou perto do gol.
    if (inShootingRange && chance(distanceToGoal < 14 ? 0.34 : 0.12, dt)) {
      // Mira no canto menos guardado: assim a defesa não bloqueia fácil.
      // Chutes de longe e sob pressão costumam sair tortos.
      const miss = Math.min(0.22, 0.04 + distanceToGoal / 190 + (pressure < 3 ? 0.06 : 0));
      const accurate = world.rng() > miss;
      const z = accurate
        ? bestCorner(player)
        : (world.rng() < 0.5 ? -1 : 1) * (3.5 + world.rng() * 1.6);
      world.shootBall(player, { power: 19 + world.rng() * 7, target: { x: attackSign * 52.5, z } });
      return;
    }

    // Passe quando alguém chega perto (sem passar a bola o tempo todo).
    if (pressure < 2.8 && chance(0.025, dt)) {
      const target = bestPassTarget(player);
      if (target) {
        world.kickBall(player, target, { power: 16 + world.rng() * 6 });
        return;
      }
    }

    // Lançamento longo quando há espaço na frente.
    if (pressure > 4 && chance(0.004, dt)) {
      const target = bestPassTarget(player, true);
      if (target) {
        world.kickBall(player, target, { lob: true, power: 24 });
        return;
      }
    }

    // Condução: avança em direção ao gol desviando do marcador mais próximo.
    let nearest = null;
    let nearestDistance = Infinity;
    for (const rival of rivals) {
      const d = Math.hypot(rival.x - player.x, rival.z - player.z);
      if (d < nearestDistance) {
        nearestDistance = d;
        nearest = rival;
      }
    }

    // Condução: mira o gol e só desvia o suficiente para escapar do marcador.
    let targetX = goalX;
    let targetZ = 0;
    if (nearest && nearestDistance < 2.6) {
      const side = Math.sign(player.z - nearest.z) || (world.rng() < 0.5 ? 1 : -1);
      targetZ = side * 2.6;
    }
    steerPlayer(player, targetX, targetZ, dt, player.sprint ? SPRINT_SPEED : RUN_SPEED, { arrive: 1.6 });
  }

  /** Canto do gol menos ocupado pelos adversários. */
  function bestCorner(player) {
    const options = [-2.9, -1.5, 0, 1.5, 2.9];
    let best = 0;
    let bestScore = -Infinity;
    for (const option of options) {
      let closest = Infinity;
      for (const rival of opponents()) {
        if (!rival.active) continue;
        // Distância do adversário até a linha de chute, no eixo do gol.
        const distance = Math.hypot(rival.z - option, (rival.x - player.x) * 0.25);
        closest = Math.min(closest, distance);
      }
      const score = closest + world.rng() * 0.8;
      if (score > bestScore) {
        bestScore = score;
        best = option;
      }
    }
    return best;
  }

  /** Melhor companheiro para um passe (corredor livre e companheiro em movimento). */
  function laneClearance(fromX, fromZ, toX, toZ) {
    const dx = toX - fromX;
    const dz = toZ - fromZ;
    const lengthSq = dx * dx + dz * dz;
    if (lengthSq < 0.01) return 1;
    let worst = 1;
    for (const rival of opponents()) {
      if (!rival.active) continue;
      const t = Math.max(0, Math.min(1, ((rival.x - fromX) * dx + (rival.z - fromZ) * dz) / lengthSq));
      const projX = fromX + t * dx;
      const projZ = fromZ + t * dz;
      const distance = Math.hypot(rival.x - projX, rival.z - projZ);
      const clearance = Math.max(0, Math.min(1, (distance - 0.9) / 2.6));
      if (clearance < worst) worst = clearance;
    }
    return worst;
  }

  function bestPassTarget(player, forward = false) {
    const mates = members().filter(mate => mate !== player && mate.active);
    let best = null;
    let bestScore = -Infinity;
    for (const mate of mates) {
      const forwardness = (mate.x - player.x) * attackSign;
      const open = world.openSpace(mate);
      const d = Math.hypot(mate.x - player.x, mate.z - player.z);
      // Passe curto por padrão; o lançamento longo é para casos especiais.
      if (forward) {
        if (d < 12 || d > 40) continue;
      } else if (d < 4 || d > 24) continue;
      const lane = laneClearance(player.x, player.z, mate.x, mate.z);
      // O passe prefere quem está à frente: o time precisa avançar.
      let score = forwardness * 1.7 + open * 0.6 + lane * 2.2 - d * 0.05;
      if (forward) score = forwardness * 2.2 + open * 0.4 + lane * 1.6 - d * 0.02;
      if (score > bestScore) {
        bestScore = score;
        best = mate;
      }
    }
    return best;
  }

  function update(dt) {
    const ball = world.ball.state;
    const owner = ball.owner;

    // Quem está com a bola (do meu time) decide — exceto o jogador que está
    // sob controle do usuário, que é movido pelos controles.
    const humanHasControl = world.isUserControlled(owner);
    // O portador controlado não chuta nem passa por decisão automática, mesmo
    // quando o analógico está solto: ações ofensivas são sempre explícitas.
    if (owner && owner.side === side && !humanHasControl && world.isPlayable()) {
      onBall(owner, dt);
    }

    // O mais próximo busca a bola solta.
    let chaser = null;
    let chaserDistance = Infinity;
    for (const player of members()) {
      if (!player.active || player === owner) continue;
      const d = distance(player.x, player.z, ball.position.x, ball.position.z);
      // O goleiro só busca a bola quando ela está perto do seu gol.
      const weight = player.isKeeper ? d * 2.2 : d;
      if (weight < chaserDistance) {
        chaserDistance = weight;
        chaser = player;
      }
    }

    const myGoal = ownGoalX;

    for (const player of members()) {
      if (!player.active) continue;
      // O jogador humano fica sob controle direto e nunca recebe movimento
      // ofensivo automático; carrinhos também são reservados ao comando humano.
      if (player.slideTackle || world.isUserControlled(player)) continue;
      if (player === owner) {
        // Com a bola no pé, o atleta olha para frente (a condução) e só
        // encara a bola quando está praticamente parado.
        if (!faceVelocity(player, dt, 10)) faceTowards(player, goalX, player.z, dt, 6);
        continue;
      }

      const shape = shapeTarget(player);
      let targetX = shape.x;
      let targetZ = shape.z;
      let speed = player.sprint ? SPRINT_SPEED : RUN_SPEED;

      if (player.isGK) {
        // O goleiro fica na linha entre a bola e o gol.
        const inBox = Math.abs(ball.position.x - myGoal) < 17 && Math.abs(ball.position.z) < 22;
        targetX = myGoal + attackSign * 1.6;
        targetZ = Math.max(-6.5, Math.min(6.5, ball.position.z * 0.32));
        const shotSpeed = Math.hypot(ball.velocity.x, ball.velocity.z);
        const towardsMyGoal = (myGoal - ball.position.x) * ball.velocity.x > 0;
        player.gkDiveCd = Math.max(0, (player.gkDiveCd ?? 0) - dt);
        if (shotSpeed > 9 && towardsMyGoal) {
          // Mergulho para cortar o chute — o alcance do goleiro é limitado,
          // então os chutes nos cantos saem.
          const travel = Math.abs(ball.position.x - myGoal) / Math.max(6, Math.abs(ball.velocity.x));
          const predictedX = ball.position.x + ball.velocity.x * travel * 0.45;
          const predictedZ = ball.position.z + ball.velocity.z * travel * 0.45;
          const reach = 3.1;
          const fieldOffset = Math.max(1.15, Math.min(6, (predictedX - myGoal) * attackSign));
          // O goleiro acompanha a trajetória, mas permanece sempre à frente da
          // linha de gol — nunca corre para dentro da rede.
          targetX = myGoal + attackSign * fieldOffset;
          targetZ = player.z + Math.max(-reach, Math.min(reach, predictedZ - player.z));
          speed = CHASE_SPEED * 1.35;
          // Precisa se esticar: toca a defesa (animação de mergulho).
          if (shotSpeed > 12.5 && Math.abs(predictedZ - player.z) > 1.05 && player.gkDiveCd === 0 && world.diveKeeper) {
            world.diveKeeper(player, Math.sign(predictedZ - player.z) || 1);
            player.gkDiveCd = 0.9;
          }
        } else if (inBox && chaserDistance < 90) {
          const fieldOffset = Math.max(1.15, Math.min(6, (ball.position.x - myGoal) * attackSign));
          targetX = myGoal + attackSign * fieldOffset;
          targetZ = Math.max(-7, Math.min(7, ball.position.z));
          speed = CHASE_SPEED;
        }
        if (world.ball.state.owner === player) {
          if (!faceVelocity(player, dt, 10)) faceTowards(player, attackSign > 0 ? PITCH.halfLength : -PITCH.halfLength, 0, dt, 6);
          continue;
        }
      } else if (player === chaser && !owner) {
        // Persegue a bola com uma pequena antecipação.
        targetX = ball.position.x + ball.velocity.x * 0.18;
        targetZ = ball.position.z + ball.velocity.z * 0.18;
        speed = CHASE_SPEED;
      } else if (player === chaser && owner && owner.side !== side) {
        // O marcador mais próximo tenta o desarme, mas fica atrás da bola:
        // se ficasse na frente, bloquearia todo chute.
        targetX = owner.x - attackSign * 2.3;
        targetZ = owner.z;
        speed = CHASE_SPEED;
        if (world.isPlayable() && chance(0.005, dt)) world.tackle(player);
      } else {
        // Apoio: quem está com a bola vira o alvo dos companheiros.
        const supports = owner && owner.side === side;
        if (supports) {
          const forwardness = (targetX - player.x) * attackSign;
          const isAttacker = shape.role === 'ST' || shape.role === 'LW' || shape.role === 'RW' || shape.role === 'CAM';
          if (forwardness < 4) targetX += attackSign * (isAttacker ? 8.5 : 5);
          if (Math.abs(targetZ) > 16) targetZ *= 0.6;
        }
        // A defesa marca o adversário da zona.
        if (shape.role === 'CB' || shape.role === 'LB' || shape.role === 'RB') {
          const marked = markTarget(player, { x: targetX, z: targetZ });
          targetX = marked.x;
          targetZ = marked.z;
        }
      }

      // Fica dentro do campo.
      targetX = Math.max(-PITCH.halfLength - 4, Math.min(PITCH.halfLength + 4, targetX));
      targetZ = Math.max(-PITCH.halfWidth - 4, Math.min(PITCH.halfWidth + 4, targetZ));

      steerPlayer(player, targetX, targetZ, dt, speed, { arrive: 1.4 });
      if (!faceVelocity(player, dt, 10)) faceTowards(player, ball.position.x, ball.position.z, dt);
    }
  }

  return { update };
}
