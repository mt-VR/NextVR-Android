// Inteligência artificial dos times.
//
// Cada time (quando não está sob controle do jogador) segue um roteiro de
// futebol simples: quem está com a bola decide (chuta, passa ou dribla), o
// mais próximo busca a bola, os companions acompanham e a defesa marca.

import { PITCH, FORMATION_433 } from './constants.js';
import { steerPlayer, faceTowards, faceVelocity } from './movement.js';
import { attackSign as attackSignOf, ownGoalX as ownGoalXOf, attackedGoalX } from './sides.js';
import {
  goalkeeperDiveDirection,
  goalkeeperPositionTarget,
  predictGoalkeeperIntercept
} from './goalkeeper.js';

// Velocidade de jogo em ritmo de futebol televisionado, não de arcade.
// Antes: 6.3 / 8.1 / 7.4. Reduzido ~18% para o campo "render" maior e dar
// tempo de leitura da jogada (pedido: "diminui a velocidade").
const RUN_SPEED = 6.55;
const SPRINT_SPEED = 8.15;
const CHASE_SPEED = 7.95;
const KEEPER_POSITION_SPEED = 5.15;
const KEEPER_REACTION_SPEED = 6.4;

export function createTeamAI({ side, world, tempo = 1 }) {
  // `tempo` < 1 deixa o lado do usuário um pouco mais lento (dificuldade
  // Difícil) e > 1 não é usado. 1 = ritmo cheio.
  const pace = Math.max(.7, Math.min(1.15, Number(tempo) || 1));
  let movementTime=0;
  const attackSign = attackSignOf(side);
  const goalX = attackedGoalX(side);
  const tactics=world.teams?.[side]?.info?.tactics||{height:0,press:1,pass:1};
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

  /**
   * Alvo de bloco: a formação desliza como uma unidade, sem todos correrem
   * para a bola. As pontas preservam largura e a última linha recua em defesa.
   */
  function shapeTarget(player) {
    const base = player.tacticalBase || FORMATION_433[player.index] || FORMATION_433[0];
    const ball = world.ball.state.position;
    const owner = world.ball.state.owner;
    const hasPossession = owner?.side === side;
    const ballProgress = Math.max(-31, Math.min(31, ball.x * attackSign));
    let x = base.x * attackSign + attackSign * ballProgress * (hasPossession ? 0.34 : 0.28);
    x+=attackSign*(tactics.height||0);
    if(hasPossession&&player.instruction==='forward')x+=attackSign*6;
    if(player.instruction==='hold')x=base.x*attackSign;
    let z = base.z;

    // A largura do 4-3-3 é preservada: a bola desloca o bloco apenas alguns
    // metros lateralmente em vez de puxar onze atletas para o mesmo corredor.
    const lateralShift = Math.max(-3.2, Math.min(3.2, (ball.z - base.z) * 0.12));
    z += lateralShift;
    if (hasPossession && !player.tacticalCustom && ['LW', 'RW'].includes(base.role)) {
      z = Math.sign(base.z || 1) * Math.max(17.5, Math.abs(z));
    }
    return { x, z, role: base.role, baseX: base.x * attackSign, baseZ: base.z };
  }

  /** Marca alvos diferentes; impede que toda a linha defensiva persiga o mesmo rival. */
  function markTarget(player, target, assigned = new Set()) {
    let best = null;
    let bestScore = Infinity;
    for (const rival of opponents()) {
      if (!rival.active || assigned.has(rival)) continue;
      const score = distance(rival.x, rival.z, target.x, target.z);
      if (score < bestScore && score < 100) {
        bestScore = score;
        best = rival;
      }
    }
    if (!best) return target;
    assigned.add(best);
    // Corpo entre o atacante e o gol; cada defensor conserva sua faixa.
    const dx = best.x - ownGoalX;
    const dz = best.z;
    const length = Math.hypot(dx, dz) || 1;
    const cover = {
      x: best.x - (dx / length) * 1.55,
      z: best.z - (dz / length) * 1.55
    };
    return {
      x: cover.x * 0.88 + target.x * 0.12,
      z: cover.z * 0.88 + target.z * 0.12
    };
  }

  /** Repulsão suave de companheiros próximos para preservar corredores de passe. */
  function addTeamSpacing(player, target, owner, chaser) {
    if (player.isKeeper || player === chaser) return target;
    let pushX = 0;
    let pushZ = 0;
    let pressure = 0;
    for (const mate of members()) {
      if (!mate.active || mate === player || mate.isKeeper || mate === owner) continue;
      const dx = target.x - mate.x;
      const dz = target.z - mate.z;
      const d = Math.hypot(dx, dz);
      const minGap = mate === chaser ? 3.8 : 4.8;
      if (d >= minGap) continue;
      const strength = (minGap - d) / minGap;
      const safeDistance = Math.max(0.2, d);
      pushX += (dx / safeDistance) * strength;
      pushZ += (dz / safeDistance) * strength;
      pressure += strength;
    }
    if (pressure < 0.01) return target;
    const scale = Math.min(1.7, 1.05 / pressure);
    return {
      ...target,
      x: target.x + Math.max(-3.8, Math.min(3.8, pushX * scale * 2.4)),
      z: target.z + Math.max(-4.8, Math.min(4.8, pushZ * scale * 2.8))
    };
  }

  /** Decisão do jogador que está com a bola. */
  function onBall(player, dt) {
    if ((player.isGK || player.isKeeper) && world.keeperDistribute) {
      world.keeperDistribute(player, dt);
      return;
    }
    const ball = world.ball.state;
    const rivals = opponents().filter(rival => rival.active);
    let pressure = Infinity;
    for (const rival of rivals) {
      pressure = Math.min(pressure, Math.hypot(rival.x - player.x, rival.z - player.z));
    }

    const distanceToGoal = Math.hypot(goalX - player.x, player.z);
    const absZ = Math.abs(player.z);
    const remaining = (goalX - player.x) * attackSign;
    const facingGoal = remaining > 0.4;
    const inBox = facingGoal && remaining < 18 && absZ < 22;
    const inShootingRange = facingGoal && remaining < 32 && distanceToGoal > 3.6 && absZ < 26;

    // Na área o rival finaliza. Fora da área ainda arrisca de média.
    const wantShot = inShootingRange && (
      inBox
        ? (distanceToGoal < 16 || chance(0.42, dt))
        : chance(distanceToGoal < 26 ? 0.07 : 0.028, dt)
    );
    if (wantShot) {
      const miss = Math.min(0.16, 0.03 + distanceToGoal / 260 + (pressure < 2.4 ? 0.05 : 0));
      const accurate = world.rng() > miss;
      const z = accurate
        ? bestCorner(player)
        : (world.rng() < 0.5 ? -1 : 1) * (3.2 + world.rng() * 1.2);
      world.shootBall(player, {
        power: 22 + world.rng() * 6,
        target: { x: attackSign * PITCH.halfLength, z },
        lift: 0.13 + world.rng() * 0.05
      });
      return;
    }

    if (!inBox) {
    // Tocar pro lado: passe quadrado para o companheiro aberto.
    if (chance(0.038 * tactics.pass, dt)) {
      const square = bestSquareTarget(player);
      if (square) {
        world.kickBall(player, square, { power: 12 + world.rng() * 5 });
        return;
      }
    }

    if (chance(0.014 * tactics.pass, dt)) {
      const target = bestPassTarget(player, true);
      if (target && (target.x - player.x) * attackSign > 2.4) {
        world.kickBall(player, target, { power: 15 + world.rng() * 5 });
        return;
      }
    }

    if (pressure > 3.4 && chance(0.01, dt)) {
      const target = bestPassTarget(player, true);
      if (target && (target.x - player.x) * attackSign > 5) {
        world.kickBall(player, target, { lob: true, power: 23 });
        return;
      }
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
    if (nearest && nearestDistance < 3.1) {
      const side = Math.sign(player.z - nearest.z) || (world.rng() < 0.5 ? 1 : -1);
      targetZ = side * (3.1 + (3.1 - nearestDistance) * 1.35);
      if (!inShootingRange && nearestDistance < 2.15 && world.isPlayable() && chance(0.18, dt)) {
        const cutX = player.x + attackSign * 3.4;
        const cutZ = player.z + side * 2.4;
        world.kickBall(player, {
          x: cutX, z: cutZ, active: false, vx: 0, vz: 0
        }, { power: 11, requested: true, targetPoint: { x: cutX, z: cutZ } });
        return;
      }
    }
    // Sem marcador por perto, o rival arranca: é isso que faz a jogada dele
    // "ir pra cima" em vez de trotar com a bola.
    const wantsSprint = !nearest || nearestDistance > 3.2 || player.sprint;
    steerPlayer(player, targetX, targetZ, dt, (wantsSprint ? SPRINT_SPEED : RUN_SPEED) * Math.min(1.02, pace + .02), { arrive: 1.2 });
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

  /** Companheiro aberto no lado, para o toque quadrado no ataque. */
  function bestSquareTarget(player) {
    let best = null;
    let bestScore = -Infinity;
    for (const mate of members()) {
      if (!mate.active || mate === player || mate.isKeeper || mate.isGK) continue;
      const ahead = (mate.x - player.x) * attackSign;
      const side = Math.abs(mate.z - player.z);
      const d = Math.hypot(mate.x - player.x, mate.z - player.z);
      if (side < 4.5 || d < 5.5 || d > 22) continue;
      if (ahead < -2.5 || ahead > 9) continue;
      const lane = laneClearance(player.x, player.z, mate.x, mate.z);
      if (lane < 0.32) continue;
      const score = side * 1.35 + lane * 2.2 + ahead * 0.45 - d * 0.05;
      if (score > bestScore) {
        bestScore = score;
        best = mate;
      }
    }
    return best;
  }

  function bestPassTarget(player, forward = false) {
    const mates = members().filter(mate => mate !== player && mate.active);
    let best = null;
    let bestScore = -Infinity;
    for (const mate of mates) {
      if (mate.isKeeper || mate.isGK) continue;
      const forwardness = (mate.x - player.x) * attackSign;
      const open = world.openSpace(mate);
      const d = Math.hypot(mate.x - player.x, mate.z - player.z);
      // Nunca devolve para trás no ataque: o passe tem que ganhar campo.
      if (forwardness < (forward ? 3.5 : 0.6)) continue;
      if (forward) {
        if (d < 10 || d > 42) continue;
      } else if (d < 4 || d > 26) continue;
      const lane = laneClearance(player.x, player.z, mate.x, mate.z);
      let score = forwardness * 3.6 + open * 0.55 + lane * 2.1 - d * 0.04;
      if (forward) score = forwardness * 4.2 + open * 0.35 + lane * 1.5 - d * 0.02;
      if (score > bestScore) {
        bestScore = score;
        best = mate;
      }
    }
    return best;
  }

  function update(dt) {
    if(world.isPlayable())movementTime+=dt;
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
      if (!player.active || player === owner || world.isUserControlled(player)) continue;
      // Quem acabou de passar não vai buscar a própria bola: o companheiro
      // precisa ter tempo de receber o toque.
      if (player === ball.lastIntentionalTouch && (ball.flightTime || 0) < 0.7) continue;
      const d = distance(player.x, player.z, ball.position.x, ball.position.z);
      // O goleiro só busca a bola quando ela está perto do seu gol.
      const weight = player.isKeeper ? d * 2.2 : d;
      if (weight < chaserDistance) {
        chaserDistance = weight;
        chaser = player;
      }
    }

    const myGoal = ownGoalX;
    const assignedMarkers = new Set();
    // FC 27: um só contém o portador. O resto cobre espaço / linha de passe.
    const pressers = [];

    for (const player of members()) {
      if (!player.active) continue;
      // O jogador humano fica sob controle direto e nunca recebe movimento
      // ofensivo automático; carrinhos também são reservados ao comando humano.
      if (player.slideTackle || world.isUserControlled(player)) continue;
      if(world.ball.state.rainbow?.player===player&&world.ball.state.rainbow.time<.62)continue;
      if (player === owner) {
        // Com a bola no pé, o atleta olha para frente (a condução) e só
        // encara a bola quando está praticamente parado.
        if (!faceVelocity(player, dt, 10)) faceTowards(player, goalX, player.z, dt, 6);
        continue;
      }

      const shape = shapeTarget(player);
      let targetX = shape.x;
      let targetZ = shape.z;
      let speed = (player.sprint ? SPRINT_SPEED : RUN_SPEED) * pace;

      if (player.isGK && world.updatePenaltyKeeper?.(player,dt)) continue;
      if (player.isGK) {
        const inBox = Math.abs(ball.position.x - myGoal) < 17 && Math.abs(ball.position.z) < 22;
        const prediction = owner ? null : predictGoalkeeperIntercept(ball, myGoal);
        const baseTarget = goalkeeperPositionTarget(ball.position, myGoal, attackSign);
        targetX = player.tacticalCustom?shape.x:baseTarget.x;
        targetZ = player.tacticalCustom?shape.z:baseTarget.z;
        speed = KEEPER_POSITION_SPEED;

        if (prediction?.onTarget) {
          // O goleiro lê o ponto real de cruzamento (altura, curva e quique),
          // mas sempre se desloca com aceleração — nunca teleporta para a bola.
          const saveTarget = goalkeeperPositionTarget(ball.position, myGoal, attackSign, prediction);
          targetX = saveTarget.x;
          targetZ = saveTarget.z;
          speed = KEEPER_REACTION_SPEED;
          const flightId = ball.flightId ?? 0;
          const diveDirection = goalkeeperDiveDirection(player, prediction, flightId);
          if (diveDirection && world.diveKeeper) {
            world.diveKeeper(player, diveDirection, flightId);
          }
        } else if (!owner && inBox && player === chaser
          && ball.position.y < 1.7
          && Math.hypot(ball.position.x - player.x, ball.position.z - player.z) < 7.5) {
          // Recolhe a bola solta: chega nela e PARA, em vez de orbitar em volta.
          const gap = Math.hypot(ball.position.x - player.x, ball.position.z - player.z);
          if (gap < 1.4) {
            targetX = player.x;
            targetZ = player.z;
            speed = 0;
          } else {
            targetX = ball.position.x;
            targetZ = ball.position.z;
            speed = Math.min(CHASE_SPEED,CHASE_SPEED*(.9+.1*tactics.press));
          }
        }
      } else if (player === chaser && !owner) {
        // Persegue a bola com uma pequena antecipação; o segundo mais próximo
        // fecha o lado oposto para a bola não escapar pelo corredor livre.
        targetX = ball.position.x + ball.velocity.x * 0.38;
        targetZ = ball.position.z + ball.velocity.z * 0.38;
        speed = Math.min(CHASE_SPEED,CHASE_SPEED*(.95+.12*tactics.press))*pace;
      } else if (pressers.includes(player)) {
        // Ajuda na pressão: fecha o lado do gol sem encostar no perseguidor.
        const gap = Math.hypot(ball.position.x - player.x, ball.position.z - player.z);
        const lane = pressers[0] === player ? 1 : -1;
        targetX = ball.position.x - attackSign * (owner ? 1.6 : 0.4);
        targetZ = ball.position.z + lane * 1.7;
        speed = Math.min(CHASE_SPEED, CHASE_SPEED * (.9 + .16 * tactics.press)) * pace;
        if (world.isPlayable() && owner && owner.side !== side
          && gap < 2.6 && chance(0.022, dt)) world.tackle(player);
      } else if (player === chaser && owner && owner.side !== side) {
        // Contém de longe (jockey): atrasa, não entra em 6 contra 1.
        const sideCover = player.z >= owner.z ? 0.85 : -0.85;
        targetX = owner.x - attackSign * 2.6;
        targetZ = owner.z + sideCover;
        speed = Math.min(RUN_SPEED * 1.12, CHASE_SPEED * 0.78) * pace;
        const gap = Math.hypot(owner.x - player.x, owner.z - player.z);
        if (world.isPlayable() && gap < 1.7 && chance(0.01, dt)) world.tackle(player);
      } else {
        const supports = owner?.side === side;
        const recovering = owner && owner.side !== side;
        if (supports && !player.tacticalCustom) {
          // Opções em alturas diferentes: pontas abertas, centroavante atacando
          // profundidade e meias em diagonais para formar linhas de passe.
          if (shape.role === 'LW' || shape.role === 'RW') {
            targetX += attackSign * 8.4;
            targetZ = Math.sign(shape.baseZ || targetZ || 1) * Math.max(18, Math.abs(shape.baseZ));
            speed = SPRINT_SPEED * pace;
          } else if (shape.role === 'ST' || shape.role === 'CF') {
            targetX += attackSign * 12.5;
            targetZ *= 0.38;
            speed = SPRINT_SPEED * pace;
          } else if (shape.role === 'CAM') {
            targetX += attackSign * 7.2;
            targetZ = Math.max(-12, Math.min(12, ball.position.z * 0.48 + shape.baseZ * 0.22));
            speed = SPRINT_SPEED * 0.92 * pace;
          } else if (shape.role === 'CM') {
            targetX += attackSign * 4.6;
            targetZ += Math.sign(shape.baseZ || 1) * 1.4;
          } else if (shape.role === 'CDM') {
            targetX += attackSign * 2.2;
          } else if (shape.role === 'LB' || shape.role === 'RB') {
            targetX += attackSign * 4.4;
            targetZ = Math.sign(shape.baseZ || 1) * Math.max(15, Math.abs(targetZ));
          }
        } else if (recovering && !player.tacticalCustom) {
          // Compactam e cobrem o passe. Só o perseguidor vai na bola.
          if (['ST', 'CF', 'LW', 'RW', 'CAM'].includes(shape.role)) {
            targetX = shape.x * 0.55 + (ball.position.x - attackSign * 9) * 0.45;
            targetZ = (shape.baseZ || targetZ) * 0.68 + ball.position.z * 0.18;
            speed = RUN_SPEED * pace;
          }
        }

        const isBackLine = ['CB', 'LB', 'RB'].includes(shape.role);
        if (recovering && isBackLine && !player.tacticalCustom) {
          const marked = markTarget(player, { x: targetX, z: targetZ }, assignedMarkers);
          targetX = marked.x;
          targetZ = marked.z;
          // Os laterais mantêm largura para defender cruzamentos; os centrais
          // não são arrastados para as mesmas coordenadas.
          if (shape.role === 'LB' || shape.role === 'RB') {
            targetZ = Math.sign(shape.baseZ || 1) * Math.max(10, Math.abs(targetZ));
          }
        }
      }

      // Apoio e cobertura em movimento, não quatro defensores estacionados
      // nas coordenadas iniciais. Reajustes curtos e defasados preservam a linha.
      if(world.isPlayable()&&player!==chaser&&!player.tacticalCustom){
        const phase=movementTime*.65+player.index*1.7;
        const back=['CB','LB','RB'].includes(shape.role),keeper=player.isGK||player.isKeeper;
        if(back&&owner?.side===side&&player.instruction!=='hold'){
          const supportLine=Math.max(-32,Math.min(8,ball.position.x*attackSign-23));
          targetX=targetX*.55+supportLine*attackSign*.45;
        }
        // Todo atleta se mexe o tempo todo: quem não é o perseguidor continua
        // ajustando posição (marcação, cobertura, amplitude) em vez de ficar
        // congelado na coordenada da formação.
        targetX+=Math.sin(phase)*(keeper?.5:back?2.6:2.1)*attackSign;
        targetZ+=Math.cos(phase*.83)*(keeper?.5:back?2.3:1.9);
        // Quem está muito longe do alvo dá um pique curto para reentrar na
        // linha, senão a oscilação vira só um balanço no lugar.
        const drift=Math.hypot(targetX-player.x,targetZ-player.z);
        if(drift>6.5)speed=Math.max(speed,player.sprint?SPRINT_SPEED:RUN_SPEED);
      }
      // Um único perseguidor pressiona a bola; os demais mantêm distância dos
      // companheiros e ocupam os canais laterais/centrais da formação.
      const spaced = addTeamSpacing(player, { x: targetX, z: targetZ }, owner, chaser);
      targetX = spaced.x;
      targetZ = spaced.z;
      targetX = Math.max(-PITCH.halfLength - 4, Math.min(PITCH.halfLength + 4, targetX));
      targetZ = Math.max(-PITCH.halfWidth - 4, Math.min(PITCH.halfWidth + 4, targetZ));

      steerPlayer(player, targetX, targetZ, dt, speed, { arrive: .45 });
      if (!player.gkDiving && !faceVelocity(player, dt, 10)) faceTowards(player, ball.position.x, ball.position.z, dt);
    }
  }

  return { update };
}
