import test from 'node:test';
import assert from 'node:assert/strict';
import { createTeamAI } from '../xfc-game/src/match3d/ai.js';
import {
  goalkeeperDiveDirection,
  goalkeeperPositionTarget,
  goalkeeperSaveChance,
  predictGoalkeeperIntercept
} from '../xfc-game/src/match3d/goalkeeper.js';

function ballState({ x, y = 0.11, z = 0 }, { x: vx, y: vy = 0, z: vz = 0 }, spin = { x: 0, y: 0, z: 0 }) {
  return {
    position: { x, y, z },
    velocity: { x: vx, y: vy, z: vz },
    spin
  };
}

test('o goleiro prevê o cruzamento correto nos dois gols e respeita o sentido do chute', () => {
  const towardAwayGoal = predictGoalkeeperIntercept(
    ballState({ x: 40 }, { x: 20 }), 52.5
  );
  const towardHomeGoal = predictGoalkeeperIntercept(
    ballState({ x: -40 }, { x: -20 }), -52.5
  );

  assert.ok(towardAwayGoal?.onTarget);
  assert.ok(towardHomeGoal?.onTarget);
  assert.equal(towardAwayGoal.x, 52.5);
  assert.equal(towardHomeGoal.x, -52.5);
  assert.ok(towardAwayGoal.time > 0.4 && towardAwayGoal.time < 1.2);
  assert.ok(Math.abs(towardAwayGoal.z) < 0.01);
  assert.ok(Math.abs(towardHomeGoal.z) < 0.01);
  assert.equal(predictGoalkeeperIntercept(ballState({ x: 40 }, { x: -20 }), 52.5), null,
    'a bola que se afasta do gol não dispara leitura de defesa');
  assert.equal(predictGoalkeeperIntercept(ballState({ x: 40 }, { x: 0.8 }), 52.5), null,
    'a bola quase parada não é tratada como chute iminente');
});

test('a leitura acompanha o efeito lateral e rejeita bolas fora da moldura', () => {
  const base = { position: { x: 40, y: 0.11, z: 0 }, velocity: { x: 20, y: 0, z: 0 } };
  const curlLeft = predictGoalkeeperIntercept({ ...base, spin: { x: 0, y: 8, z: 0 } }, 52.5);
  const curlRight = predictGoalkeeperIntercept({ ...base, spin: { x: 0, y: -8, z: 0 } }, 52.5);
  const high = predictGoalkeeperIntercept({
    ...base,
    velocity: { x: 20, y: 8, z: 0 },
    spin: { x: 0, y: 0, z: 0 }
  }, 52.5);
  const wide = predictGoalkeeperIntercept({
    ...base,
    spin: { x: 0, y: 20, z: 0 }
  }, 52.5);

  assert.ok(curlLeft.z < -1.2);
  assert.ok(curlRight.z > 1.2);
  assert.ok(high.y > 2.44 && !high.onTarget, 'um chute acima do travessão não provoca mergulho');
  assert.ok(Math.abs(wide.z) > 3.66 && !wide.insideMouth,
    'uma bola ao lado do poste não é confundida com chute no alvo');
});

test('o posicionamento de base cobre o ângulo sem abandonar a linha do gol', () => {
  const home = goalkeeperPositionTarget({ x: -38, z: -18 }, -52.5, 1);
  const away = goalkeeperPositionTarget({ x: 38, z: 18 }, 52.5, -1);
  const shot = goalkeeperPositionTarget(
    { x: 40, z: 0 }, 52.5, -1,
    { onTarget: true, time: 0.8, z: 3.4 }
  );

  assert.ok(home.x > -52.5 && home.x <= -49.7);
  assert.ok(away.x < 52.5 && away.x >= 49.7);
  assert.ok(home.z < 0 && away.z > 0, 'o alinhamento é espelhado entre os gols');
  assert.ok(Math.abs(shot.z) <= 3.25, 'o goleiro mira dentro do alcance da moldura');
  assert.ok(shot.x < 52.5 && shot.x >= 49.65, 'mesmo reagindo, não entra na rede');
});

test('mergulho é escolhido pelo ponto de defesa, pelo tempo e uma vez por trajetória', () => {
  const keeper = { x: 50.5, z: 0, goalkeeping: 80 };
  const prediction = { onTarget: true, time: 0.55, y: 0.4, z: 2.6 };

  assert.equal(goalkeeperDiveDirection(keeper, prediction, 7), 1);
  assert.equal(goalkeeperDiveDirection(keeper, { ...prediction, z: -2.6 }, 7), -1);
  assert.equal(goalkeeperDiveDirection(keeper, { ...prediction, z: 0.2 }, 7), 0,
    'um chute alinhado pode ser defendido sem mergulho lateral');
  assert.equal(goalkeeperDiveDirection(keeper, { ...prediction, time: 1.2 }, 7), 0,
    'o goleiro não se joga cedo demais');
  assert.equal(goalkeeperDiveDirection({ ...keeper, gkDiveFlightId: 7 }, prediction, 7), 0,
    'a mesma trajetória não dispara mergulhos repetidos');
  assert.equal(goalkeeperDiveDirection(keeper, { ...prediction, onTarget: false }, 8), 0);
});

test('a defesa depende do alcance, da habilidade e de um mergulho oportuno na direção certa', () => {
  const position = { x: 52.5, y: 0.4, z: 0 };
  const aligned = goalkeeperSaveChance({
    keeper: { x: 50.5, z: 0, goalkeeping: 70 }, position, flightId: 3, now: 2
  });
  const betterKeeper = goalkeeperSaveChance({
    keeper: { x: 50.5, z: 0, goalkeeping: 90 }, position, flightId: 3, now: 2
  });
  const outsideReach = goalkeeperSaveChance({
    keeper: { x: 50.5, z: 0, goalkeeping: 70 },
    position: { ...position, z: 3.4 }, flightId: 3, now: 2
  });
  const divingKeeper = {
    x: 50.5, z: 0, goalkeeping: 70,
    gkDiveAt: 1.5, gkDiveStartZ: 0, gkDiveDirection: 1, gkDiveFlightId: 3
  };
  const timedDive = goalkeeperSaveChance({
    keeper: divingKeeper,
    position: { ...position, z: 3 }, flightId: 3, now: 2
  });
  const wrongDive = goalkeeperSaveChance({
    keeper: { ...divingKeeper, gkDiveDirection: -1 },
    position: { ...position, z: 3 }, flightId: 3, now: 2
  });
  const lateDive = goalkeeperSaveChance({
    keeper: { ...divingKeeper, gkDiveAt: 0.9 },
    position: { ...position, z: 3 }, flightId: 3, now: 2
  });
  const highBall = goalkeeperSaveChance({
    keeper: { x: 50.5, z: 0, goalkeeping: 70 },
    position: { ...position, y: 1.9 }, flightId: 3, now: 2
  });

  assert.ok(betterKeeper > aligned, 'atributo de goleiro melhora a chance de defesa');
  assert.equal(outsideReach, 0, 'sem mergulho, o canto distante fica fora do alcance');
  assert.ok(timedDive > 0, 'o mergulho certo amplia o alcance funcional');
  assert.equal(wrongDive, 0, 'mergulhar para o lado errado não alcança a bola');
  assert.equal(lateDive, 0, 'um mergulho vencido não estende o alcance');
  assert.ok(highBall < aligned, 'bola alta é mais difícil de defender');
});

test('a IA move o goleiro até o alvo e só inicia um mergulho por chute', () => {
  const keeper = {
    active: true,
    side: 'away',
    index: 0,
    role: 'GK',
    isKeeper: true,
    isGK: true,
    goalkeeping: 80,
    ovr: 80,
    x: 51,
    z: 0,
    vx: 0,
    vz: 0,
    facingAngle: -Math.PI / 2,
    facing: { x: -1, z: 0 },
    turnLean: 0,
    sprint: false,
    root: { rotation: { y: -Math.PI / 2 } }
  };
  const opponent = { active: true, side: 'home', x: 45, z: 2, index: 9 };
  const ball = {
    state: {
      ...ballState({ x: 51, z: 2.5 }, { x: 18 }),
      owner: null,
      flightId: 12
    }
  };
  const players = { home: [opponent], away: [keeper] };
  const dives = [];
  const world = {
    ball,
    rng: () => 0.99,
    members: side => players[side],
    isUserControlled: () => false,
    isPlayable: () => true,
    openSpace: () => 10,
    diveKeeper: (player, direction, flightId) => {
      dives.push(direction);
      player.gkDiveFlightId = flightId;
      player.gkDiveDirection = direction;
      player.gkDiveStartZ = player.z;
    }
  };
  const ai = createTeamAI({ side: 'away', world });

  ai.update(1 / 60);
  const firstZ = keeper.z;
  ai.update(1 / 60);

  assert.ok(firstZ > 0, 'o goleiro começa a deslocar-se para o lado previsto');
  assert.ok(keeper.x < 52.5, 'o deslocamento mantém o goleiro dentro do campo');
  assert.deepEqual(dives, [1], 'o mergulho é acionado uma única vez nessa trajetória');
});
