import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, normalize, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TEAMS, FORMATION_433, getTeam, starSlots } from '../xfc-game/src/data/teams.js';
import { NATIONAL_TEAMS, GROUP_NAMES, createWorldCupCampaign, campaignStandings, nextCampaignMatch, recordCampaignMatchResult, getNationalTeam } from '../xfc-game/src/data/worldcup.js';
import { kitsOf, defaultKit, kitSvg } from '../xfc-game/src/data/kits.js';
import { attackSign, defendSign, ownGoalX, attackedGoalX, insidePenaltyAreaFor, insideGoalAreaFor } from '../xfc-game/src/match3d/sides.js';
import { qualityStepsFor, rendererProfileFor } from '../xfc-game/src/match3d/engine.js';
import { createPlayer3D } from '../xfc-game/src/match3d/player.js';
import { applyBallAirForces, curveSpinRate } from '../xfc-game/src/match3d/physics.js';
import {
  broadcastCameraPose,
  cameraRelativeMovementFromStick,
  cornerCameraPose,
  worldMovementFromStick
} from '../xfc-game/src/match3d/camera.js';
import { predictGoalkeeperIntercept } from '../xfc-game/src/match3d/goalkeeper.js';
import { createTeamAI } from '../xfc-game/src/match3d/ai.js';
import { FORMATION_433 as MATCH_FORMATION_433 } from '../xfc-game/src/match3d/constants.js';
import { predictTrajectory } from '../xfc-game/src/match3d/set-pieces.js';
import { lightingProfileFor } from '../xfc-game/src/match3d/stadium.js';
import { launchOrSkip } from './support/chromium.mjs';
import { startXfcServer } from '../xfc-game/serve.mjs';

// O XFC é um subprojeto isolado dentro do repositório: o jogo vive em xfc-game/
// e não toca no código do app de VR. Estes testes cobrem os dados (sem browser)
// e o fluxo das telas (com o Chromium empacotado do projeto).

const GAME_ROOT = new URL('../xfc-game/', import.meta.url);

test('XFC preserva os clubes antigos e acrescenta os clubes identificados da coleção', () => {
  assert.equal(TEAMS.length, 69, '22 clubes anteriores + 47 novos, sem duplicar');
  assert.equal(new Set(TEAMS.map(t=>t.id)).size,TEAMS.length);
  assert.deepEqual(TEAMS.slice(0,22).map(team => team.id), [
    'fc-barcelona', 'real-madrid', 'ibis-esporte', 'parana-clube',
    'flamengo', 'palmeiras', 'corinthians', 'santos',
    'aston-villa', 'brentford', 'panathinaikos', 'river-plate', 'levante', 'huddersfield-town',
    'eintracht-frankfurt', 'queens-park-rangers', 'wrexham', 'sheffield-united',
    'northampton-town', 'rotherham-united', 'wycombe-wanderers', 'rkc-waalwijk'
  ]);
  for (const team of TEAMS) {
    assert.equal(team.players.length, 11, `${team.name} entra em campo com onze`);
    assert.equal(team.substitutes.length, 7, `${team.name} tem sete reservas`);
    assert.equal(FORMATION_433.length, 11, 'a formação 4-3-3 tem onze posições');
    assert.ok(team.crest.startsWith('assets/'), 'o escudo fica dentro de assets/');
    assert.ok(existsSync(new URL(team.crest, GAME_ROOT)), `escudo existe: ${team.crest}`);
    for (const player of [...team.players, ...team.substitutes]) {
      assert.ok(player.fullName && player.name, `${team.name}: jogador tem nome`);
      assert.ok(player.ovr > 0 && player.potential >= player.ovr, `${player.fullName} tem notas coerentes`);
      assert.equal(player.stats.pace >= 0 && player.stats.pace <= 99, true);
    }
  }
});

test('a IA preserva largura, cria opções de passe e recompõe o bloco sem a bola', () => {
  const makePlayer = (side, index, slot) => ({
    id: `${side}-${index}`,
    side,
    index,
    role: slot.role,
    isKeeper: slot.role === 'GK',
    isGK: slot.role === 'GK',
    active: true,
    x: slot.x * (side === 'home' ? 1 : -1),
    z: slot.z,
    vx: 0,
    vz: 0,
    facingAngle: side === 'home' ? Math.PI / 2 : -Math.PI / 2,
    facing: { x: side === 'home' ? 1 : -1, z: 0 },
    root: { rotation: { y: 0 } },
    sprint: false
  });
  const home = MATCH_FORMATION_433.map((slot, index) => makePlayer('home', index, slot));
  const away = MATCH_FORMATION_433.map((slot, index) => makePlayer('away', index, slot));
  const owner = home.find(player => player.role === 'ST');
  const awayOwner = away.find(player => player.role === 'ST');
  const world = {
    ball: {
      state: {
        position: { x: 30, y: 0.11, z: 0 },
        velocity: { x: 0, y: 0, z: 0 },
        owner
      }
    },
    members: side => (side === 'home' ? home : away).filter(player => player.active),
    isUserControlled: player => player === owner,
    isPlayable: () => true,
    openSpace(player) {
      const rivalSide = player.side === 'home' ? away : home;
      return Math.min(12, ...rivalSide.map(rival => Math.hypot(rival.x - player.x, rival.z - player.z)));
    },
    rng: () => 0.5,
    kickBall() {}, shootBall() {}, tackle() {}, diveKeeper() {}
  };
  const ai = createTeamAI({ side: 'home', world });
  for (let frame = 0; frame < 240; frame += 1) ai.update(1 / 60);
  const leftWing = home.find(player => player.role === 'LW');
  const rightWing = home.find(player => player.role === 'RW');
  assert.ok(leftWing.z > 16 && rightWing.z < -16,
    'as pontas mantêm os corredores externos em posse da bola');
  assert.ok(Math.max(...home.map(player => player.z)) - Math.min(...home.map(player => player.z)) > 32,
    'o time se distribui pela largura em vez de se acumular ao redor do portador');
  const recoveryStartX = leftWing.x;
  world.ball.state.position.x = -31;
  world.ball.state.owner = awayOwner;
  for (let frame = 0; frame < 120; frame += 1) ai.update(1 / 60);
  assert.ok(leftWing.x < recoveryStartX - 2,
    'a ponta recua para recompor o bloco defensivo quando o adversário recupera a bola');
});

test('qualidade gráfica móvel fica fixa para não piscar ao redimensionar o buffer WebGL', () => {
  assert.deepEqual(qualityStepsFor(1), [1, 0.85, 0.7, 0.6],
    'desktop ainda pode descer a resolução, nunca saltar para 1,25');
  assert.deepEqual(qualityStepsFor(0.9, true), [0.9],
    'o perfil móvel mantém o mesmo buffer durante a partida');
  const mobile = rendererProfileFor({
    devicePixelRatio: 3,
    userAgent: 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36',
    pointerCoarse: true,
    hardwareConcurrency: 8,
    deviceMemory: 6
  });
  assert.equal(mobile.lowPower, true, 'o WebView Android usa o perfil econômico');
  assert.equal(mobile.initialPixelRatio, 0.6, 'o aparelho móvel começa na resolução econômica estável');
  assert.deepEqual(mobile.qualitySteps, [0.6],
    'o celular não redimensiona o buffer WebGL no meio da partida');
  const desktop = rendererProfileFor({ devicePixelRatio: 2, hardwareConcurrency: 8, deviceMemory: 8 });
  assert.equal(desktop.lowPower, false, 'desktop potente mantém o perfil de qualidade');
  assert.equal(desktop.initialPixelRatio, 1.5, 'a resolução desktop continua limitada a 1,5');
});

test('o atleta humanoide conserva a anatomia nos perfis móvel e completo e anima sem deformações', () => {
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  const previousImage = Object.getOwnPropertyDescriptor(globalThis, 'Image');
  const gradient = { addColorStop() {} };
  const context = new Proxy({
    createLinearGradient: () => gradient,
    createRadialGradient: () => gradient,
    measureText: () => ({ width: 1 })
  }, {
    get(target, key) {
      if (key in target) return target[key];
      return () => {};
    },
    set(target, key, value) { target[key] = value; return true; }
  });
  const models = [];
  class TestImage {
    constructor() { this.width = 144; this.height = 168; }
    set src(value) { this.url = value; this.onload?.(); }
  }

  try {
    Object.defineProperty(globalThis, 'document', {
      configurable: true,
      writable: true,
      value: {
        createElement(tag) {
          return tag === 'canvas'
            ? { width: 1, height: 1, getContext: () => context }
            : {};
        }
      }
    });
    Object.defineProperty(globalThis, 'Image', {
      configurable: true,
      writable: true,
      value: TestImage
    });

    const kit = { primary: '#224488', secondary: '#112233', accent: '#ffee55', pattern: 'stripes' };
    models.push(
      createPlayer3D({
        simplified: true,
        kit,
        number: 10,
        teamName: 'XFC',
        photo: 'assets/test-player-photo.png'
      }),
      createPlayer3D({ simplified: true, kit, number: 9, teamName: 'XFC', hairStyle: 'afro' }),
      createPlayer3D({
        simplified: false,
        kit,
        number: 8,
        teamName: 'XFC',
        preferredFoot: 'Left',
        photo: 'assets/test-player-photo.png'
      })
    );
    let jerseyTexture = null;
    models[0].root.traverse(node => {
      const texture = node.material?.map;
      if (!jerseyTexture && texture?.userData?.cacheKey?.startsWith('#224488|')) {
        jerseyTexture = texture;
      }
    });

    assert.ok(jerseyTexture, 'o uniforme é desenhado em uma textura compartilhada');
    const anatomy = [
      'xfc-player-torso',
      'xfc-player-neck',
      'xfc-player-skull',
      'xfc-player-nose',
      'xfc-player-left-ear',
      'xfc-player-right-ear',
      'xfc-player-upper-arm',
      'xfc-player-forearm',
      'xfc-player-palm',
      'xfc-player-fingers',
      'xfc-player-thigh',
      'xfc-player-kneecap',
      'xfc-player-calf',
      'xfc-player-sock',
      'xfc-player-boot'
    ];
    for (const [index, model] of models.entries()) {
      assert.equal(model.root.userData.modelId, 'xfc-footballer-v2');
      assert.equal(model.root.userData.rigVersion, 2);
      assert.equal(model.root.userData.detailLevel, index < 2 ? 'mobile' : 'full');
      const shirtMaterial = model.root.getObjectByName('xfc-player-torso').material;
      assert.equal(Boolean(shirtMaterial.isMeshLambertMaterial), index < 2,
        'o perfil móvel mantém tecido econômico e o completo usa reflexo de tecido');
      assert.equal(Boolean(shirtMaterial.isMeshPhongMaterial), index >= 2,
        'o material do uniforme mantém a paleta do kit com volume no perfil completo');
      assert.equal(model.legs.length, 2, 'o atleta tem duas pernas articuladas');
      assert.equal(model.arms.length, 2, 'o atleta tem dois braços articulados');
      const names = new Set();
      let fingerMeshes = 0;
      model.root.traverse(object => {
        if (object.name) names.add(object.name);
        if (object.name === 'xfc-player-fingers') {
          fingerMeshes += 1;
          assert.equal(object.userData.fingerCount, 5);
        }
      });
      for (const part of anatomy) {
        assert.ok(names.has(part), `${model.root.userData.detailLevel} inclui ${part}`);
      }
      assert.equal(fingerMeshes, 2, 'as duas mãos conservam cinco dedos cada');
    }

    const mobileTorso = models[0].root.getObjectByName('xfc-player-torso');
    const fullTorso = models[2].root.getObjectByName('xfc-player-torso');
    assert.ok(mobileTorso.geometry.attributes.position.count
      < fullTorso.geometry.attributes.position.count,
    'o perfil Android reduz a tesselação sem trocar a anatomia do jogador');
    assert.equal(models[0].root.getObjectByName('xfc-player-face-photo'), undefined,
      'o perfil móvel evita carregar o retrato e mantém o atlas facial');
    const photoFace = models[2].root.getObjectByName('xfc-player-face-photo');
    assert.ok(photoFace, 'o retrato detalhado acompanha a superfície elipsoidal do rosto');
    assert.equal(models[2].root.getObjectByName('xfc-player-face-features').visible, false,
      'o retrato substitui os traços desenhados sem ocultar a cabeça 3D');
    assert.equal(models[2].root.getObjectByName('xfc-player-nose').visible, false,
      'o nariz 3D não atravessa a superfície do retrato');
    assert.equal(models[0].root.getObjectByName('xfc-player-nose').visible, true,
      'o perfil móvel conserva o nariz 3D quando omite o retrato');
    assert.equal(jerseyTexture.userData.references, 3);

    models[0].header(0.02);
    models[0].update(0.03, { ownsBall: true, protecting: true, speed: 1 });
    models[0].signal(0.02);
    models[0].update(0.03);
    models[0].prepareCard(0.02);
    models[0].update(0.03);
    models[0].showCard('red', 0.02);
    models[0].update(0.03);
    models[0].dive(-1);
    models[0].update(1);
    models[0].slideTackle(1, 0.02);
    models[0].update(0.03);
    models[0].react('fall', 0.02);
    models[0].update(0.03);
    models[0].celebrate(0.02, 'fist-pump');
    models[0].update(0.03);
    models[0].update(1 / 60, { moving: true, ownsBall: true, speed: 1 });
    models[1].receive();
    models[1].update(0.12, { moving: true, speed: 1 });
    assert.ok(models[1].arms[0].shoulder.rotation.x < -0.55
      && models[1].arms[1].shoulder.rotation.x < -0.55,
    'o primeiro toque de recepção amortece o corpo e abre os braços');
    models[2].kick('shot');
    models[2].update(0.1, { speed: 2, moving: true });
    assert.ok(models[2].legs[0].hip.rotation.x < 0,
      'a perna dominante mantém o ciclo de chute articulado');
    for (const model of models) {
      model.root.traverse(object => {
        for (const value of [
          object.position.x, object.position.y, object.position.z,
          object.rotation.x, object.rotation.y, object.rotation.z
        ]) assert.ok(Number.isFinite(value), `${object.name || object.type} não deforma com NaN`);
      });
    }

    models[0].dispose();
    assert.equal(jerseyTexture.userData.references, 2,
      'mesmo usando a camisa em várias malhas, cada jogador solta só uma referência');
    models[1].dispose();
    models[2].dispose();
    assert.equal(jerseyTexture.userData.references, 0);
    assert.equal(jerseyTexture.userData.disposed, true,
      'o último jogador libera a textura do kit');
  } finally {
    for (const model of models) {
      if (!model.root.userData.disposed) model.dispose();
    }
    if (previousDocument) Object.defineProperty(globalThis, 'document', previousDocument);
    else delete globalThis.document;
    if (previousImage) Object.defineProperty(globalThis, 'Image', previousImage);
    else delete globalThis.Image;
  }
});

test('curva da bola é proporcional ao gesto e compartilha gravidade, arrasto e Magnus', () => {
  assert.equal(curveSpinRate(24, 0), 0, 'sem comando não há sidespin');
  assert.ok(curveSpinRate(24, 0.8) > curveSpinRate(24, 0.35),
    'um comando maior gera mais rotação lateral');
  assert.equal(curveSpinRate(24, 2), curveSpinRate(24, 1),
    'o sidespin é limitado para impedir trajetórias orbitais');

  const straightVelocity = { x: 20, y: 2, z: 0 };
  const straightSpin = { x: 0, y: 0, z: 0 };
  const curvedVelocity = { x: 20, y: 2, z: 0 };
  const curvedSpin = { x: 0, y: 6, z: 0 };
  applyBallAirForces(straightVelocity, straightSpin, 1 / 60);
  applyBallAirForces(curvedVelocity, curvedSpin, 1 / 60);
  assert.ok(curvedVelocity.z < straightVelocity.z,
    'o Magnus desloca a bola lateralmente durante o voo');
  assert.ok(curvedVelocity.x > 0, 'o efeito lateral não inverte a velocidade de avanço');
  assert.ok(curvedVelocity.y < 2, 'a bola sente gravidade durante o voo');
});

test('previsão do goleiro e linha de bola parada seguem a mesma física curva', () => {
  const state = {
    position: { x: 40, y: 1.2, z: 0 },
    velocity: { x: 20, y: 0, z: 0 }
  };
  const straight = predictGoalkeeperIntercept({ ...state, spin: { x: 0, y: 0, z: 0 } }, 52.5);
  const curving = predictGoalkeeperIntercept({ ...state, spin: { x: 0, y: 5, z: 0 } }, 52.5);
  assert.ok(straight && curving, 'a bola chega ao plano do gol nas duas simulações');
  assert.ok(curving.z < straight.z, 'a leitura do goleiro inclui o mesmo Magnus da bola');

  const previewStraight = predictTrajectory({
    start: { x: 0, y: 0.11, z: 0 }, target: { x: 30, z: 0 }, speed: 24, lift: 0.22, curve: 0
  });
  const previewCurved = predictTrajectory({
    start: { x: 0, y: 0.11, z: 0 }, target: { x: 30, z: 0 }, speed: 24, lift: 0.22, curve: 0.8
  });
  assert.equal(previewStraight.length, previewCurved.length);
  assert.ok(previewCurved[Math.floor(previewCurved.length / 2)].z
    < previewStraight[Math.floor(previewStraight.length / 2)].z,
  'a prévia do escanteio mostra a curva real, não uma parábola decorativa');
});

test('o treino move pelo referencial da câmera sem mudar o analógico da transmissão', () => {
  const training = (x, z, forwardX = 1, forwardZ = 0) =>
    cameraRelativeMovementFromStick(x, z, forwardX, forwardZ);
  assert.deepEqual(training(0, 1), { x: 1, z: 0 },
    'cima avança na direção da câmera Pro');
  assert.deepEqual(training(0, -1), { x: -1, z: 0 },
    'baixo recua na direção oposta da câmera Pro');
  assert.deepEqual(training(1, 0), { x: 0, z: 1 },
    'direita acompanha a direita da tela');
  assert.deepEqual(training(-1, 0), { x: 0, z: -1 },
    'esquerda acompanha a esquerda da tela');
  assert.deepEqual(training(1, 1), { x: 1, z: 1 },
    'a diagonal combina avanço e direita sem enviesar o movimento');
  assert.deepEqual(training(0, 1, 0, -1), { x: 0, z: -1 },
    'o eixo de movimento acompanha câmeras Pro com outro yaw');
  assert.deepEqual(worldMovementFromStick(0, 1), { x: 0, z: -1 },
    'o referencial fixo das partidas não muda');
  assert.deepEqual(worldMovementFromStick(0, -1), { x: 0, z: 1 },
    'baixo continua recuando no campo nas partidas comuns');
  const nearCamera = broadcastCameraPose({ x: 0, y: 0.11, z: 22 });
  const farCamera = broadcastCameraPose({ x: 0, y: 0.11, z: -22 });
  assert.ok(nearCamera.position.z > 0 && farCamera.position.z > 0,
    'a transmissão não cruza para o lado oposto quando a bola troca de lateral');
  const corner = cornerCameraPose({ x: 52.1, z: 33.8 }, 1, { x: 44, z: 7 });
  assert.ok(corner.position.z > 34 && corner.position.z < 37,
    'a câmera fica próxima à bandeirinha, mas não dentro da arquibancada');
  assert.ok(corner.position.x < 52.1 && corner.target.x > 40,
    'o cobrador fica entre a câmera e a área de cruzamento');
});

test('estádios oferecem luz natural de dia, entardecer e noite', () => {
  const day = lightingProfileFor('day');
  const dusk = lightingProfileFor('dusk');
  const night = lightingProfileFor('night');
  assert.equal(day.stars, 0);
  assert.equal(dusk.name, 'dusk');
  assert.ok(night.stars > dusk.stars);
  assert.notDeepEqual(day.sky, night.sky);
  assert.equal(lightingProfileFor('invalid').name, 'night');
});

test('orientação do campo: a casa ataca +X, cada time defende o próprio gol', () => {
  assert.equal(attackSign('home'), 1);
  assert.equal(attackSign('away'), -1);
  assert.equal(defendSign('home'), -1);
  assert.equal(defendSign('away'), 1);
  assert.equal(ownGoalX('home'), -52.5);
  assert.equal(ownGoalX('away'), 52.5);
  assert.equal(attackedGoalX('home'), 52.5);
  assert.equal(attackedGoalX('away'), -52.5);
  // Grande área do mandante fica na borda esquerda; a do visitante, na direita.
  assert.equal(insidePenaltyAreaFor(-45, 0, 'home'), true);
  assert.equal(insidePenaltyAreaFor(45, 0, 'home'), false);
  assert.equal(insidePenaltyAreaFor(45, 0, 'away'), true);
  assert.equal(insidePenaltyAreaFor(-45, 0, 'away'), false);
  assert.equal(insidePenaltyAreaFor(-45, 25, 'home'), false, 'fora do corredor da área');
  // Pequena área alinhada ao gol defendido.
  assert.equal(insideGoalAreaFor(-50, 0, 'home'), true);
  assert.equal(insideGoalAreaFor(-46, 0, 'home'), false);
  assert.equal(insideGoalAreaFor(50, 0, 'away'), true);
  assert.equal(insideGoalAreaFor(46, 0, 'away'), false);
});

test('Copa inclui as 32 seleções de 2022 com XI nacional jogável', () => {
  assert.equal(NATIONAL_TEAMS.length, 32, 'a edição traz os 32 países da Copa de 2022');
  assert.deepEqual(NATIONAL_TEAMS.map(team => team.id), [
    'qatar', 'ecuador', 'senegal', 'netherlands', 'england', 'usa', 'iran', 'wales',
    'argentina', 'saudi-arabia', 'mexico', 'poland', 'france', 'australia', 'denmark', 'tunisia',
    'spain', 'costa-rica', 'germany', 'japan', 'belgium', 'canada', 'morocco', 'croatia',
    'brazil', 'serbia', 'switzerland', 'cameroon', 'portugal', 'ghana', 'uruguay', 'south-korea'
  ]);
  for (const team of NATIONAL_TEAMS) {
    assert.equal(team.players.length, 11, `${team.name} tem onze titulares`);
    assert.equal(team.players.filter(player => player.position === 'GK').length, 1, `${team.name} tem um goleiro`);
    assert.equal(new Set(team.players.map(player => player.number)).size, 11, `${team.name} não repete números na escalação`);
    assert.ok(team.players.every(player => player.number > 0 && player.rating >= 60 && player.rating <= 99),
      `${team.name} traz números e notas de titulares válidos`);
    assert.ok(team.colors.primary && team.colors.secondary, `${team.name} tem cores de uniforme próprias`);
  }
  assert.ok(getNationalTeam('brazil').players.some(player => player.name === 'Neymar Jr.'),
    'a seleção brasileira usa nomes da geração de 2022');
  assert.ok(getNationalTeam('argentina').players.some(player => player.name === 'Lionel Messi'),
    'a Argentina usa nomes da geração de 2022');
});

test('campanha da Copa sorteia a seleção escolhida em um grupo e avança por toda a chave', () => {
  const campaign = createWorldCupCampaign({ mode: '2027', seed: 314159, teamId: 'argentina' });
  assert.equal(campaign.userTeamId, 'argentina', 'o usuário controla a seleção que escolheu');
  assert.equal(Object.keys(campaign.groups).length, 8, 'a Copa tem oito grupos');
  assert.ok(GROUP_NAMES.every(group => campaign.groups[group].length === 4), 'cada grupo tem quatro seleções');
  assert.equal(campaign.groupMatches.length, 48, 'os oito grupos disputam seis partidas cada');
  assert.equal(campaign.groupMatches.filter(match => match.playable).length, 3,
    'a seleção do usuário disputa os três jogos do seu grupo');
  assert.ok(campaign.groupMatches.filter(match => !match.playable).every(match => match.played),
    'as outras partidas de grupo entram simuladas na classificação');
  assert.ok(GROUP_NAMES.includes(campaign.userGroup), 'a seleção recebe grupo no sorteio');

  let match = nextCampaignMatch(campaign);
  while (campaign.stage === 'group') {
    assert.ok(match, 'há uma próxima partida da seleção na fase de grupos');
    recordCampaignMatchResult(campaign, match.id,
      match.home === campaign.userTeamId ? 10 : 0,
      match.away === campaign.userTeamId ? 10 : 0);
    match = nextCampaignMatch(campaign);
  }
  assert.equal(campaign.stage, 'round-of-16', 'três vitórias classificam a seleção às oitavas');
  const table = campaignStandings(campaign, campaign.userGroup);
  assert.equal(table.find(team => team.id === campaign.userTeamId).played, 3,
    'a tabela registra os três jogos disputados');

  const expectedRounds = [
    ['round-of-16', 8], ['quarterfinals', 4], ['semifinals', 2], ['final', 1]
  ];
  for (const [stage, size] of expectedRounds) {
    assert.equal(campaign.stage, stage, `a campanha avança para ${stage}`);
    assert.equal(campaign.knockoutMatches.filter(item => item.stage === stage).length, size,
      `${stage} tem ${size} confrontos na chave`);
    match = nextCampaignMatch(campaign);
    assert.ok(match && match.stage === stage, `${stage} tem uma partida jogável da seleção`);
    recordCampaignMatchResult(campaign, match.id,
      match.home === campaign.userTeamId ? 10 : 0,
      match.away === campaign.userTeamId ? 10 : 0);
  }
  assert.equal(campaign.stage, 'champion', 'vencer a final encerra a campanha como campeã');
  assert.equal(campaign.completed, true);
  assert.equal(nextCampaignMatch(campaign), null, 'uma campanha concluída não oferece outra partida');
});

test('perder a final encerra a campanha como vice-campeã', () => {
  const campaign = createWorldCupCampaign({ teamId: 'brazil', seed: 481516 });
  while (campaign.stage === 'group') {
    const match = nextCampaignMatch(campaign);
    assert.ok(match, 'a seleção tem partidas de grupo pendentes');
    recordCampaignMatchResult(campaign, match.id,
      match.home === campaign.userTeamId ? 10 : 0,
      match.away === campaign.userTeamId ? 10 : 0);
  }
  while (campaign.stage !== 'final') {
    const match = nextCampaignMatch(campaign);
    assert.ok(match, 'a seleção qualificada disputa o mata-mata');
    recordCampaignMatchResult(campaign, match.id,
      match.home === campaign.userTeamId ? 10 : 0,
      match.away === campaign.userTeamId ? 10 : 0);
  }
  const final = nextCampaignMatch(campaign);
  assert.ok(final, 'a seleção chega à partida final');
  recordCampaignMatchResult(campaign, final.id,
    final.home === campaign.userTeamId ? 0 : 2,
    final.away === campaign.userTeamId ? 0 : 2);
  assert.equal(campaign.stage, 'runnerup', 'a derrota na decisão registra o segundo lugar');
  assert.equal(campaign.completed, true);
  assert.equal(nextCampaignMatch(campaign), null, 'a campanha de vice-campeã está encerrada');
});

test('a campanha termina na fase de grupos quando a seleção não fica entre as duas primeiras', () => {
  const campaign = createWorldCupCampaign({ teamId: 'qatar', seed: 90210 });
  for (let index = 0; index < 3; index += 1) {
    const match = nextCampaignMatch(campaign);
    assert.ok(match, 'a seleção tem três jogos de grupo para disputar');
    recordCampaignMatchResult(campaign, match.id,
      match.home === campaign.userTeamId ? 0 : 1,
      match.away === campaign.userTeamId ? 0 : 1);
  }
  assert.equal(campaign.stage, 'eliminated', 'a seleção eliminada não entra no mata-mata');
  assert.equal(campaign.eliminatedIn, 'group');
  assert.equal(campaign.completed, true);
  assert.deepEqual(campaign.knockoutMatches, [], 'nenhuma partida eliminatória é criada após a eliminação');
  assert.equal(nextCampaignMatch(campaign), null, 'a campanha encerrada não libera outra partida');
});

test('o sorteio muda de grupo entre campanhas e evita repetir a chave completa', () => {
  const first = createWorldCupCampaign({ seed: 77123, teamId: 'brazil' });
  const second = createWorldCupCampaign({ seed: first.seed, previousGroups: first.groups, teamId: 'brazil' });
  const normalize = groups => Object.values(groups).map(ids => [...ids].sort().join(',')).sort().join('|');
  assert.notEqual(normalize(first.groups), normalize(second.groups));
  const assignments = new Set(Array.from({ length: 20 }, (_, index) =>
    createWorldCupCampaign({ seed: index + 1, teamId: 'brazil' }).userGroup
  ));
  assert.ok(assignments.size > 1, 'o Brasil não fica preso a um grupo fixo');
});

test('todo jogador com retrato tem a imagem disponível no pacote de assets', () => {
  const missing = [];
  let semFoto = 0;
  for (const team of TEAMS) {
    for (const player of [...team.players, ...team.substitutes]) {
      // Os clubes novos entraram sem retrato: o jogo mostra as iniciais.
      if (!player.photo) {
        semFoto += 1;
        continue;
      }
      if (!existsSync(new URL(player.photo, GAME_ROOT))) missing.push(player.photo);
    }
  }
  assert.deepEqual(missing, [], `retratos ausentes: ${missing.join(', ')}`);
  assert.ok(semFoto > 0, 'os clubes sem retrato usam as iniciais');
});

test('os escudos enviados dos clubes brasileiros e o visual low-poly do Neymar estão ligados aos dados', async () => {
  const brazilianClubs = [
    ['flamengo', 'assets/crests/flamengo.png'],
    ['palmeiras', 'assets/crests/palmeiras.png'],
    ['corinthians', 'assets/crests/corinthians.png'],
    ['santos', 'assets/crests/santos.png']
  ];
  for (const [id, crest] of brazilianClubs) {
    const team = getTeam(id);
    assert.equal(team.crest, crest);
    const png = await readFile(new URL(team.crest, GAME_ROOT));
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${team.name}: arquivo PNG válido`);
    assert.ok([4, 6].includes(png[25]), `${team.name}: PNG mantém canal alfa no escudo`);
  }
  const santos = getTeam('santos');
  const neymar = santos.players.find(player => player.name === 'Neymar Jr.');
  assert.deepEqual(neymar.appearance, {
    skinTone: '#bd8868', hairColor: '#241b15', hairStyle: 'neymar', heightScale: 1.01
  }, 'Neymar tem um visual low-poly próprio com crista espetada');
  assert.equal(kitsOf('santos').length, 4, 'Santos mantém três kits e recebe a foto da coleção');
});

test('todo clube tem escudo e uniformes no pacote', () => {
  for (const team of TEAMS) {
    assert.ok(existsSync(new URL(team.crest, GAME_ROOT)), `escudo existe: ${team.crest}`);
    const kits = kitsOf(team.id);
    assert.ok(kits.length >= 1, `${team.name} tem uniforme`);
    if(team.squadSource!=='generated')assert.ok(kits.length>=3,'preserva os kits antigos');
    for (const kit of kits) {
      assert.ok(kit.colors.primary && kit.colors.secondary, `${team.name}: blusa com cores`);
      assert.ok(kitSvg(kit).includes('<svg'), `${team.name}: blusa desenhada em SVG`);
    }
    assert.ok(defaultKit(team.id), `${team.name} tem blusa principal`);
  }
});

test('as blusas com foto do pacote têm o render e o recorte no disco', () => {
  const withPhoto = [];
  for (const team of TEAMS) {
    for (const kit of kitsOf(team.id)) {
      if (!kit.render) continue;
      withPhoto.push(kit);
      assert.ok(existsSync(new URL(kit.render, GAME_ROOT)), `render existe: ${kit.render}`);
      assert.ok(existsSync(new URL(kit.shirt, GAME_ROOT)), `recorte existe: ${kit.shirt}`);
    }
  }
  assert.ok(withPhoto.length >= 9, `há blusas com foto do pacote: ${withPhoto.length}`);
});

test('as estrelas do cartão de time vão de zero a cinco', () => {
  assert.deepEqual(starSlots(5), ['full', 'full', 'full', 'full', 'full']);
  assert.deepEqual(starSlots(4.5), ['full', 'full', 'full', 'full', 'half']);
  assert.deepEqual(starSlots(3.2), ['full', 'full', 'full', 'empty', 'empty']);
  assert.equal(getTeam('nao-existe'), null);
});

test('todo import estático do jogo resolve para um arquivo do pacote', async () => {
  // Regressão do bug da "tela azul": o zip e o APK eram empacotados sem o
  // vendor/three.module.min.js; sem ele o grafo de módulos não carrega e nada
  // do jogo executa. Aqui todos os imports relativos de src/ são resolvidos
  // no disco para garantir que o pacote do jogo está fechado.
  const root = fileURLToPath(new URL('..', import.meta.url));
  const gameRoot = join(root, 'xfc-game');
  const sourceFiles = [];
  const walk = async dir => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith('.js') || entry.name.endsWith('.mjs')) sourceFiles.push(full);
    }
  };
  await walk(join(gameRoot, 'src'));
  sourceFiles.push(join(gameRoot, 'serve.mjs'));

  const specifiers = /(?:import|export)[^'"]*?\bfrom\s*['"]([^'"]+)['"]|import\s*['"]([^'"]+)['"]/g;
  const missing = [];
  for (const file of sourceFiles) {
    const text = await readFile(file, 'utf8');
    for (const match of text.matchAll(specifiers)) {
      const specifier = match[1] || match[2];
      if (!specifier || !specifier.startsWith('.')) continue;
      const target = normalize(join(dirname(file), specifier));
      if (!existsSync(target)) missing.push(`${relative(gameRoot, file)} -> ${specifier}`);
    }
  }
  assert.deepEqual(missing, [], `imports sem arquivo: ${missing.join(', ')}`);

  // O three.js do vendor/ é a dependência clássica do motor 3D.
  assert.ok(existsSync(join(gameRoot, 'vendor/three.module.min.js')),
    'vendor/three.module.min.js precisa existir no repositório');

  // O empacotamento do CI não pode mais pular o vendor/ nem o bundle offline.
  const workflow = await readFile(join(root, '.github/workflows/xfc-apk.yml'), 'utf8');
  assert.ok(/zip\s+-r\s+\.\.\/xfc-game\.zip[^\n]*vendor/.test(workflow),
    'o zip do jogo precisa incluir a pasta vendor/');
  assert.ok(workflow.includes('app.bundle.js'),
    'o zip do jogo precisa incluir o app.bundle.js (suporte ao file://)');
  assert.ok(workflow.includes('assets/game/vendor/three'),
    'a checagem do APK precisa exigir o three.js dentro do pacote');
});

test('fluxo do XFC: intro → menu → kick off → escolha de times → elenco', { timeout: 180000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });

    // As telas trocam de imagem: esperar o carregamento delas evita medir um
    // <img> ainda sem caixa (visível só depois que o arquivo chega).
    const imagesReady = async () => {
      await page.waitForFunction(
        () => Array.from(document.images).every(image => image.complete && image.naturalWidth > 0),
        null,
        { timeout: 20000 }
      );
    };

    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Intro: selo da XF Esports e o logotipo XFC. A intro avança sozinha depois de
    // alguns segundos, então o teste aceita os dois desfechos: pular a intro com o
    // Enter ou esperar ela passar e seguir direto do menu.
    const intro = await page
      .waitForSelector('.screen--intro', { timeout: 15000 })
      .then(() => true)
      .catch(() => false);
    if (intro) {
      assert.ok(await page.locator('.intro__badge svg').isVisible(), 'o selo XF Esports aparece na intro');
      assert.ok(await page.locator('.intro__wordmark svg').isVisible(), 'o logotipo XFC aparece na intro');
      await page.keyboard.press('Enter');
    }

    // Tela de abertura (Neymar): "Entrar" leva ao menu principal.
    await page.waitForSelector('.screen--launch', { timeout: 15000 });
    assert.ok(await page.locator('.launch__art').isVisible(), 'a arte da tela de abertura aparece');
    assert.ok(await page.locator('.launch__enter').isVisible(), 'o botão Entrar está na tela');
    await page.click('.launch__enter');

    // Hub de futebol da referência: estádio em tela cheia, Kick Off selecionado,
    // nove atalhos verticais, progressão no topo e ação principal.
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    await imagesReady();
    const navLabels = await page.locator('.menu__item-label').allTextContents();
    assert.deepEqual(navLabels, [
      'FC NEWS', 'KICK OFF', 'THE GROUNDS', 'ULTIMATE TEAM', 'LEARN TO PLAY',
      'SEASONS', 'TOURNAMENTS', 'CO-OP SEASONS', 'ONLINE FRIENDLIES'
    ], 'o menu mantém as opções do hub em uma lista vertical');
    assert.equal(await page.locator('.menu__item.is-focused').getAttribute('data-menu-item'), 'kickoff',
      'KICK OFF aparece selecionado por padrão');
    assert.equal(await page.locator('.hub__background').getAttribute('src'), 'assets/bg/menu-hero.jpg',
      'o menu usa a imagem de estádio em tela cheia');
    assert.ok(await page.locator('.hub__wordmark svg').count() > 0, 'o menu mostra a marca XFC');
    assert.ok(await page.locator('.hub__progress').isVisible(), 'a barra de XP aparece no topo');
    assert.equal(await page.locator('.hub__xp-bar').getAttribute('role'), 'progressbar',
      'o progresso de XP expõe uma barra acessível');
    assert.equal(await page.locator('.hub__xp-bar').getAttribute('aria-valuenow'), '3000');
    assert.equal(await page.locator('.hub__cta-label').textContent(), 'Enter Kick Off',
      'a ação principal acompanha o modo selecionado');
    assert.equal(await page.locator('.menu__scene3d canvas').count(), 0,
      'o menu de referência usa arte de estádio em vez da cena 3D antiga');

    // Loja do Ultimate Team: compra de carta, desconto de moedas e coleção salva.
    const coinsBeforePurchase = Number(await page.locator('.screen--menu').getAttribute('data-coins'));
    await page.locator('.menu__item[data-menu-item="ultimate"]').click();
    await page.waitForSelector('.screen--ultimate');
    await page.getByRole('button',{name:'Mercado de Transferências',exact:true}).click();
    assert.ok(await page.locator('.ultimate-card__buy').count() >= 6, 'mercado tem cartas contratáveis');
    await page.locator('.ultimate-card__buy').nth(3).click(); // Cubarsí cabe no saldo inicial.
    await page.getByRole('button',{name:'Confirmar',exact:true}).click();
    const afterPurchase=await page.evaluate(()=>JSON.parse(localStorage.getItem('xfc.profile.v1')));
    assert.ok(afterPurchase.coins<coinsBeforePurchase);
    assert.equal(afterPurchase.ut.inventory.length,19,'18 iniciais mais uma compra');
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // Configurações e personalização: grade, diálogos e edição de perfil.
    await page.locator('.hub__quick-button[data-action="settings"]').click();
    await page.waitForSelector('.screen--customise');
    assert.equal(await page.locator('.customise__tile').count(), 8, 'a tela de personalização mostra oito opções');
    await page.locator('.customise__tile[data-tile="profile"]').click();
    await page.waitForSelector('.customise__dialog[role="dialog"]');
    await page.locator('input[aria-label="Nome do perfil"]').fill('XFC Tester');
    await page.locator('.customise__dialog-save').click();
    assert.ok(await page.locator('.customise__dialog').count() === 0, 'salvar o perfil fecha o diálogo');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // Play Modes: a Copa abre uma tela acessível e o botão Escape volta aos modos.
    await page.locator('.menu__item[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    assert.equal(await page.locator('.modes__option').count(), 6, 'o menu abre direto nos seis cartões da referência');
    for (const option of ['uefa-champions-league', 'conmebol-libertadores', 'world-cup', 'copa-do-brasil', 'brasileirao']) {
      assert.equal(await page.locator(`.modes__option[data-option="${option}"]`).count(), 1,
        `${option} aparece no carrossel de torneios`);
    }
    assert.ok(await page.locator('.modes__option[data-option="training"]').isVisible(),
      'o Centro de Treino fica acessível pelos modos de jogo');
    assert.ok(await page.locator('.modes__option[data-option="world-cup"]').isVisible(), 'a Copa aparece como cartão');
    // A Copa abre o menu próprio da competição (o modo Campanha continua no menu principal).
    await page.locator('.modes__option[data-option="world-cup"]').click();
    await page.waitForSelector('.screen--competition[data-competition="world-cup"]');
    assert.equal(await page.locator('.comp__menu-item').count(), 9, 'o menu da Copa lista oito opções e o voltar');
    await page.locator('.comp__menu-item[data-panel="play"]').click();
    await page.locator('.comp__team-card[data-team-id="argentina"]').click();
    await page.locator('.comp__selection-preview .comp__cta').click();
    await page.waitForSelector('.comp__match');
    // Escape volta do painel para o menu da competição e, de novo, para os modos.
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--competition[data-competition="world-cup"] .comp__deck');
    await page.keyboard.press('Escape');
    // A campanha clássica (Seasons) segue intacta a partir do menu principal.
    await page.waitForSelector('.screen--modes');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');
    await page.locator('.menu__item[data-menu-item="seasons"]').click();
    await page.waitForSelector('.screen--worldcup');
    assert.equal(await page.locator('.worldcup__select-team').count(), 32,
      'antes do sorteio, a pessoa escolhe entre as 32 seleções');
    await page.locator('.worldcup__select-team[data-team-id="argentina"]').click();
    await page.locator('.worldcup__start-campaign').click();
    await page.waitForSelector('.worldcup__group-tabs');
    assert.equal(await page.locator('.worldcup__group-tab').count(), 8, 'a campanha mostra os oito grupos sorteados');
    assert.ok(await page.locator('.worldcup__group').isVisible(), 'o modo Copa abre o grupo sorteado');
    assert.equal(await page.locator('.worldcup__standings-row').count(), 4, 'a tabela lista as quatro seleções do grupo');
    const firstStanding = page.locator('.worldcup__standings-row').first();
    const rankBox = await firstStanding.locator('.worldcup__standings-rank').boundingBox();
    const pointsBox = await firstStanding.locator('.worldcup__standings-points').boundingBox();
    assert.ok(rankBox && pointsBox && Math.abs(rankBox.y - pointsBox.y) < 2,
      'a posição e os pontos permanecem alinhados na mesma linha');
    assert.equal(await page.locator('.worldcup__fixture').count(), 6,
      'a fase de grupos mostra os seis jogos do grupo');
    assert.equal(await page.locator('.worldcup__play-match').count(), 1,
      'a próxima partida da Argentina pode ser iniciada');
    const campaignMatchId = await page.locator('.worldcup__play-match').getAttribute('data-match-id');
    await page.locator('.worldcup__play-match').click();
    await page.waitForSelector('.screen--play');
    await page.waitForFunction(() => window.__xfcMatch?.teams?.home?.players?.length === 11);
    const occupiedSlots = await page.evaluate(() => ['home', 'away'].map(side =>
      new Set(window.__xfcMatch.teams[side].players.map(player => player.index)).size
    ));
    assert.deepEqual(occupiedSlots, [11, 11], 'cada XI nacional ocupa onze posições distintas no 4-3-3');
    const countryMatch = await page.locator('.showcase__matchup').textContent();
    assert.ok(countryMatch?.toUpperCase().includes('ARGENTINA'), 'a partida de campanha abre com as seleções corretas');
    assert.equal(await page.locator('.showcase__crest.team-mark--flag').count(), 2,
      'as bandeiras das duas seleções aparecem no pré-jogo');
    await page.click('.showcase__enter');
    await page.evaluate(() => {
      const match = window.__xfcMatch;
      const userIsHome = match.teams.home.info.id === 'argentina';
      match.world.setPaused(false);
      match.teams.home.score = userIsHome ? 1 : 0;
      match.teams.away.score = userIsHome ? 0 : 1;
      match.phase.name = 'play';
      match.clock.half = 2;
      match.clock.minutes = 94;
      match.clock.added = 4;
      match.world.tick(1 / 60);
    });
    await page.waitForSelector('.result__title', { timeout: 20000 });
    const persistedResult = await page.evaluate(matchId => {
      const profile = JSON.parse(localStorage.getItem('xfc.profile.v1'));
      return {
        coins: profile.coins,
        match: profile.worldCupCampaign.groupMatches.find(item => item.id === matchId)
      };
    }, campaignMatchId);
    assert.ok(persistedResult.match?.played, 'o apito final registra o jogo na campanha salva');
    assert.equal(persistedResult.match.winner, 'argentina', 'o resultado da partida conta para a classificação');
    assert.ok(persistedResult.coins > afterPurchase.coins, 'a partida da Copa também recompensa moedas');
    await page.click('.result__actions .btn:has-text("CONTINUAR COPA")');
    await page.waitForSelector('.screen--worldcup');
    assert.equal(await page.locator('.worldcup__play-match').count(), 1,
      'a Copa libera a próxima partida depois do resultado');
    // A campanha foi aberta pelo menu principal: o voltar respeita essa origem.
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--menu');

    // Kick Off continua acessível pela tela de modos.
    await page.locator('.menu__item[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    await page.locator('.modes__option[data-option="uefa-champions-league"]').click();
    await page.waitForSelector('.screen--competition[data-competition="uefa-champions-league"]');
    assert.equal(await page.locator('.comp__menu-item').count(), 7,
      'a Champions abre o menu próprio, com seis opções e o voltar');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--modes');
    await page.getByRole('button',{name:'Jogar',exact:true}).click();
    await page.waitForSelector('.screen--kickoff');
    const teamNames = await page.locator('.team-card__name').allTextContents();
    assert.ok(teamNames.includes('FC Barcelona'), 'Barcelona aparece na escolha de times');
    assert.ok(teamNames.includes('Real Madrid'), 'Real Madrid aparece na escolha de times');
    assert.equal(await page.locator('.team-card__rating b').count(), 6, 'cada time mostra ATT, MID e DEF');
    await imagesReady();
    assert.ok(await page.locator('.team-card__crest').first().isVisible(), 'os escudos aparecem');

    // As setas ao lado do escudo trocam de clube: os clubes brasileiros entram
    // na escolha de times.
    const nextClub = '.kickoff__slot[data-slot="home"] .picker-arrow--crest:last-child';
    const prevClub = '.kickoff__slot[data-slot="home"] .picker-arrow--crest:first-child';
    const homeName = () => page.locator('.team-card__name').first().textContent();
    await page.click(nextClub);
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Ibis Esporte'), 'Ibis Esporte aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Paraná Clube'), 'Paraná Clube aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Flamengo'), 'Flamengo aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Palmeiras'), 'Palmeiras aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Corinthians'), 'Corinthians aparece na escolha de times');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Santos'), 'Santos entra no carousel com seu próprio escudo');
    await page.click(nextClub);
    assert.ok((await homeName()).includes('Aston Villa'), 'os clubes do pacote também entram no carousel');
    await page.click(prevClub);
    assert.ok((await homeName()).includes('Santos'), 'a seta anterior volta ao Santos');
    await page.click(prevClub);
    assert.ok((await homeName()).includes('Corinthians'), 'a seta anterior volta ao Corinthians');
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    await page.click(prevClub);
    assert.ok((await homeName()).includes('FC Barcelona'),
      'a troca de clube volta para o Barcelona');

    // Tela de blusas: READY, carrossel com três uniformes e a prévia dos dois
    // jogadores (um de cada lado).
    await page.click('.btn:has-text("Blusas")');
    await page.waitForSelector('.screen--kits');
    assert.ok((await page.locator('.kits__ready').textContent()).includes('READY'), 'a tela de blusas tem READY');
    assert.equal(await page.locator('.kits__row .kits__tile').count(), 3, 'o carrossel mostra três blusas');
    assert.equal(await page.locator('.kits__preview-figure svg').count(), 2, 'os dois jogadores vestem o uniforme');
    assert.equal(await page.locator('.kits__preview-figure img').count(), 0,
      'sem foto de pacote, a prévia usa o desenho em SVG');
    await page.click('.kits__arrow:last-child');
    assert.ok((await page.locator('.kits__tile-name').nth(1).textContent()).length > 0, 'a blusa escolhida tem nome');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--kickoff');

    // Escolha do confronto e ida para o elenco.
    await page.click('.team-card:has-text("FC Barcelona")');
    await page.click('.team-card:has-text("Real Madrid")');
    await page.click('.btn:has-text("Ver elenco")');
    await page.waitForSelector('.screen--squad');
    await imagesReady();
    assert.equal(await page.locator('.pitch-player').count(), 11, 'o campo mostra onze jogadores');
    assert.equal(await page.locator('.bench__slot').count(), 7, 'o banco mostra sete reservas');
    assert.ok((await page.locator('.player-panel__name').textContent()).length > 2, 'o painel mostra o jogador selecionado');

    // CONTINUAR leva à escolha de estádios (galeria dos seis estádios).
    await page.keyboard.press('Escape');
    await page.waitForSelector('.screen--kickoff');
    await page.click('.screen--kickoff .continue-btn', { noWaitAfter: true });
    await page.waitForSelector('.screen--stadiums', { timeout: 15000 });
    assert.equal(await page.locator('.stadiums__card').count(), 6, 'a galeria mostra os seis estádios');
    await page.click('.stadiums__card:first-child', { noWaitAfter: true });

    // Tocar no cartão do estádio leva ao jogo 3D de verdade — com o HUD de
    // transmissão, o analógico fixo e o cartão do jogador controlado.
    try {
      await page.waitForSelector('.screen--play', { timeout: 30000 });
    } catch (error) {
      const dump = await page.evaluate(() => {
        const node = document.querySelector('.screen--play');
        const rect = node?.getBoundingClientRect();
        return {
          exists: Boolean(node),
          className: node?.className ?? null,
          opacity: node ? getComputedStyle(node).opacity : null,
          rect: rect ? [rect.x, rect.y, rect.width, rect.height] : null,
          screens: [...document.querySelectorAll('.screen')].map(s => s.className),
          bodyText: document.body.innerText.replace(/\s+/g, ' ').slice(0, 400)
        };
      }).catch(e => ({ evaluateFailed: String(e) }));
      throw new Error(`${error.message}\nPalco:\n${JSON.stringify(dump, null, 2)}\nErros:\n${JSON.stringify(errors)}`);
    }
    await page.waitForSelector('.showcase__enter', { timeout: 30000 });
    assert.ok(await page.locator('.showcase__enter').isVisible(), 'a partida abre no pré-jogo');
    await page.click('.showcase__enter');
    await page.waitForSelector('.hud.is-visible', { timeout: 15000 });
    const boardBox = await page.locator('.hud__scoreboard').boundingBox();
    assert.ok(boardBox && boardBox.x > 800, 'o placar fica no canto superior direito');
    const stickBox = await page.locator('.controls__stick').boundingBox();
    assert.ok(stickBox && stickBox.x < 320 && stickBox.y > 500,
      'o analógico fica fixo no canto inferior esquerdo');
    assert.ok((await page.locator('.hud__player .hud__player-name').textContent()).trim().length > 1,
      'o cartão mostra o nome do atleta controlado');
    const stickStyle = await page.locator('.controls__stick').evaluate(node => {
      const style = getComputedStyle(node);
      return [style.left, style.bottom];
    });
    assert.deepEqual(stickStyle, ['96px', '118px'], 'o joystick permanece na posição original');
    const passBox = await page.locator('.ctrl-btn--pass').boundingBox();
    const runBox = await page.locator('.ctrl-btn--sprint').boundingBox();
    assert.ok(passBox && runBox && passBox.width >= 96 && runBox.width >= 96,
      'PASSE e CORRER têm botões maiores');
    assert.ok(passBox.x < runBox.x && runBox.x - passBox.x < 145,
      'PASSE e CORRER trocaram de lado e ficaram próximos');
    assert.ok(await page.locator('.hud__foe').isVisible(),
      'o adversário mais próximo aparece no canto inferior direito');
    assert.equal(await page.locator('.hud__poss').isVisible(),false,
      'placar compacto da referência: posse continua disponível em FATOS DA PARTIDA na pausa');
    assert.equal(await page.locator('.hud__poss-fill').count(), 1,
      'a barra de posse tem o preenchimento do mandante');
    assert.equal(await page.locator('.hud__tag').count(), 1,
      'a HUD mantém o elemento de etiqueta para o atleta controlado');
    assert.equal(await page.locator('.hud__cards').count(), 1,
      'o placar inclui o resumo dos cartões por equipe');
    assert.equal(await page.locator('.hud__card-chip').count(), 4,
      'o HUD identifica cartões amarelos e vermelhos para os dois times');

    const kickoffIdle = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const state = match.world.snapshot();
      return {
        phase: match.phase.name,
        side: match.phase.side,
        userSide: match.world.userSide,
        owner: match.ball.state.owner?.id || null,
        controlled: match.controlled[match.world.userSide]?.id || null,
        kickoffPositionsLegal: match.world.members(match.phase.side)
          .filter(player => player !== match.ball.state.owner)
          .every(player => match.world.attackSign(match.phase.side) * player.x <= 0)
          && match.world.members(match.world.opponentOf(match.phase.side))
            .every(player => match.world.attackSign(match.phase.side) * player.x >= 9.15),
        shots: state.stats.home.shots + state.stats.away.shots,
        passes: state.stats.home.passes + state.stats.away.passes
      };
    });
    await page.waitForTimeout(300);
    const kickoffAfterWait = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const state = match.world.snapshot();
      return {
        phase: match.phase.name,
        owner: match.ball.state.owner?.id || null,
        shots: state.stats.home.shots + state.stats.away.shots,
        passes: state.stats.home.passes + state.stats.away.passes
      };
    });
    assert.equal(kickoffIdle.phase, 'kickoff', 'a saída humana aguarda o comando do jogador');
    assert.equal(kickoffIdle.side, kickoffIdle.userSide, 'o jogador controla a equipe que cobra a saída');
    assert.equal(kickoffIdle.owner, kickoffIdle.controlled, 'o cobrador mantém a posse enquanto espera');
    assert.ok(kickoffIdle.kickoffPositionsLegal,
      'os times respeitam as metades do campo e a distância dos adversários na saída');
    assert.deepEqual(kickoffAfterWait, {
      phase: 'kickoff', owner: kickoffIdle.owner, shots: kickoffIdle.shots, passes: kickoffIdle.passes
    }, 'a simulação não dispara passe ou chute sem ação explícita');

    const shotGestures = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const button = document.querySelector('.ctrl-btn--shoot');
      const originalCommand = match.world.command;
      button.setPointerCapture = () => {};
      const kinds = [];
      match.world.command = (name, payload) => {
        if (name === 'shoot') kinds.push(payload.kind);
        originalCommand(name, payload);
      };
      const gesture = (dx, dy) => {
        const base = { pointerId: 17, pointerType: 'touch', bubbles: true, cancelable: true };
        button.dispatchEvent(new PointerEvent('pointerdown', { ...base, clientX: 100, clientY: 100 }));
        button.dispatchEvent(new PointerEvent('pointermove', { ...base, clientX: 100 + dx, clientY: 100 + dy }));
        button.dispatchEvent(new PointerEvent('pointerup', { ...base, clientX: 100 + dx, clientY: 100 + dy }));
      };
      gesture(0, -48);
      gesture(0, 48);
      gesture(-48, 0);
      match.world.command = originalCommand;
      return kinds;
    });
    assert.deepEqual(shotGestures, ['curved', 'placed', 'normal'],
      'arrastar para cima curva, para baixo coloca; superchute agora exige carga completa');
    const controlledBefore = (await page.locator('.hud__player .hud__player-name').textContent()).trim();
    await page.locator('.ctrl-btn--switch').click();
    await page.waitForFunction(name =>
      document.querySelector('.hud__player .hud__player-name')?.textContent.trim() !== name,
    controlledBefore, { timeout: 5000 });
    assert.notEqual((await page.locator('.hud__player .hud__player-name').textContent()).trim(), controlledBefore,
      'TROCAR seleciona outro atleta controlado');

    // O favicon não é servido pelo servidor do jogo: o ruído dele não interessa.
    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a tela não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

test('partidas rápidas: escolha, pré-jogo, partida 3D e resultado', { timeout: 180000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 720 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36'
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch', { timeout: 15000 });
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    const coinsBeforeMatch = Number(await page.locator('.screen--menu').getAttribute('data-coins'));

    // O atalho CO-OP SEASONS leva direto à preparação de uma partida rápida.
    await page.locator('.menu__item[data-menu-item="quick"]').click();
    await page.waitForSelector('.screen--quick', { timeout: 15000 });
    assert.equal(await page.locator('.quick__panel').count(), 2, 'a tela tem HOME e AWAY');
    assert.equal(await page.locator('.quick__panel--home .quick__crest').count(), 1, 'o mandante mostra o escudo');
    assert.ok(await page.locator('.quick__kit').count() >= 6, 'cada lado oferece as blusas do clube');
    assert.ok(await page.locator('.continue-btn').count(), 'a tela oferece o CONTINUAR');

    // Duração e dificuldade são ajustáveis antes de começar.
    await page.locator('.quick__option', { hasText: 'CURTA' }).first().click();
    await page.locator('.quick__option', { hasText: 'FÁCIL' }).first().click();

    await page.click('.quick__actions .continue-btn', { noWaitAfter: true });
    await page.waitForSelector('.screen--stadiums', { timeout: 15000 });
    assert.equal(await page.locator('.stadiums__card').count(), 6, 'a galeria mostra os seis estádios');
    await page.click('.stadiums__card:first-child', { noWaitAfter: true });
    try {
      await page.waitForSelector('.screen--play', { timeout: 30000 });
    } catch (error) {
      const dump = await page.evaluate(() => {
        const node = document.querySelector('.screen--play');
        const rect = node?.getBoundingClientRect();
        return {
          exists: Boolean(node),
          className: node?.className ?? null,
          opacity: node ? getComputedStyle(node).opacity : null,
          rect: rect ? [rect.x, rect.y, rect.width, rect.height] : null,
          screens: [...document.querySelectorAll('.screen')].map(s => s.className),
          bodyText: document.body.innerText.replace(/\s+/g, ' ').slice(0, 400)
        };
      }).catch(e => ({ evaluateFailed: String(e) }));
      throw new Error(`${error.message}\nPalco:\n${JSON.stringify(dump, null, 2)}\nErros:\n${JSON.stringify(errors)}`);
    }
    await page.waitForSelector('.showcase__enter', { timeout: 30000 });

    // No Android, a tela nova entra sem um fade/scale da página inteira e o
    // buffer WebGL começa no perfil fixo (sem redimensionamento em seguida).
    const mobileStartup = await page.evaluate(() => {
      const engine = window.__xfcMatch.engine;
      const screen = document.querySelector('.screen--play');
      const prompt = document.querySelector('.showcase__enter');
      return {
        lowPower: engine.lowPower,
        pixelRatio: engine.renderer.getPixelRatio(),
        qualitySteps: engine.profile.qualitySteps,
        screenTransition: getComputedStyle(screen).transitionDuration,
        screenTransform: getComputedStyle(screen).transform,
        promptAnimation: getComputedStyle(prompt).animationName
      };
    });
    assert.equal(mobileStartup.lowPower, true, 'o teste está usando o perfil Android');
    assert.equal(mobileStartup.pixelRatio, 0.6, 'o buffer WebGL começa no tamanho estável');
    assert.deepEqual(mobileStartup.qualitySteps, [0.6], 'o buffer não tem níveis que o redimensionem durante o jogo');
    assert.equal(mobileStartup.screenTransition, '0s', 'a tela inteira não ganha fade/scale no WebView touch');
    assert.equal(mobileStartup.screenTransform, 'none', 'a tela não é transformada durante a troca');
    assert.equal(mobileStartup.promptAnimation, 'none', 'a chamada para entrar em campo não pisca no celular');

    // Pré-jogo imersivo: o estádio toma a tela, com o confronto no centro.
    assert.ok(await page.locator('.showcase__chip').isVisible(), 'o pré-jogo abre com o selo da liga');
    assert.equal(await page.locator('.showcase__matchup img').count(), 2, 'o pré-jogo mostra os dois escudos');
    assert.ok(await page.locator('.showcase__enter').isVisible(), 'o pré-jogo convida a entrar em campo');
    assert.equal(await page.locator('.showcase__arrow').count(), 2, 'as setas trocam o estádio');
    await page.click('.showcase__enter');

    // Partida: HUD, radar e controles na tela.
    await page.waitForSelector('.hud.is-visible', { timeout: 15000 });
    const kickoffAccepted = await page.evaluate(() => window.__xfcMatch.world.command('pass'));
    assert.ok(kickoffAccepted, 'a saída aguarda e começa com o passe explícito do jogador');
    await page.waitForTimeout(2200); // cruza pelo menos uma janela de amostragem de FPS
    const stableBuffer = await page.evaluate(() => ({
      ratio: window.__xfcMatch.engine.renderer.getPixelRatio(),
      quality: window.__xfcMatch.engine.state.quality,
      size: [window.__xfcMatch.engine.renderer.domElement.width, window.__xfcMatch.engine.renderer.domElement.height]
    }));
    assert.deepEqual(stableBuffer, { ratio: 0.6, quality: 0, size: [768, 432] },
      'o WebView não redimensiona nem limpa o buffer durante a partida');
    assert.equal(await page.locator('.hud__crest').count(), 2, 'o placar mostra os dois escudos');
    assert.equal(await page.locator('.hud__score').count(), 2, 'o placar mostra os dois placares');
    assert.ok(await page.locator('.hud__clock').isVisible(), 'o placar mostra o relógio');
    assert.ok(await page.locator('.hud__radar').isVisible(), 'o radar aparece no HUD');
    assert.equal(await page.locator('.ctrl-btn').count(), 6, 'seis botões, sem atalhos extras de habilidades');
    assert.ok(await page.locator('.controls__stick-zone').count(), 'há o analógico virtual');
    const quickStickBox = await page.locator('.controls__stick').boundingBox();
    assert.ok(quickStickBox && quickStickBox.x < 260 && quickStickBox.y > 460,
      'o analógico fica fixo no canto inferior esquerdo');
    assert.ok((await page.locator('.hud__player .hud__player-name').textContent()).trim().length > 1,
      'o cartão mostra o nome do atleta controlado');
    assert.ok(await page.locator('.hud__foe').isVisible(),
      'o adversário mais próximo aparece no canto inferior direito');
    assert.equal(await page.locator('.hud__poss').isVisible(),false,
      'placar compacto da referência: posse continua disponível em FATOS DA PARTIDA na pausa');

    // O painel de pausa segue a referência: botão visível no topo direito,
    // placar, formação e blocos de opções.
    const pauseButton = page.locator('.play__pause-button');
    assert.ok(await pauseButton.isVisible(), 'o botão de pausa fica visível durante a partida');
    const pauseBox = await pauseButton.boundingBox();
    assert.ok(pauseBox && pauseBox.x < 100 && pauseBox.y < 70,
      'pausa à esquerda sem sobrepor o placar');
    await pauseButton.click();
    await page.waitForSelector('.pause-reference');
    assert.ok(await page.locator('.hud__scoreboard').isVisible(),'pausa mantém o mesmo placar');
    assert.equal(await page.locator('.pause-reference__item').count(),6,'menu lateral real, sem painel antigo');
    assert.equal(await page.locator('.pause__lineup-player').count(),0,'partida congelada no fundo, não uma escalação decorativa');
    await page.locator('[data-pause-action="facts"]').click();
    assert.equal(await page.locator('.pause-reference__stats .pause__stat').count(),6);
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');
    await page.waitForSelector('.hud.is-visible');

    // A simulação realmente roda: o relógio anda, a bola se mexe e o placar
    // existe para as duas equipes.
    const running = await page.evaluate(async () => {
      const match = window.__xfcMatch;
      const before = match.world.snapshot();
      for (let index = 0; index < 600; index += 1) match.world.tick(1 / 60);
      const after = match.world.snapshot();
      return {
        before,
        after,
        ball: { x: match.ball.state.position.x, z: match.ball.state.position.z },
        players: match.world.members('home').length + match.world.members('away').length,
        keeperHome: match.world.members('home').filter(player => player.isKeeper).length
      };
    });
    assert.equal(running.players, 22, 'a partida tem onze jogadores em cada time');
    assert.equal(running.keeperHome, 1, 'cada time tem um goleiro');
    assert.ok(running.after.minutes > running.before.minutes, 'o relógio avança durante a partida');
    assert.ok(Number.isFinite(running.ball.x) && Number.isFinite(running.ball.z), 'a bola fica dentro do campo');
    assert.equal(running.after.score.length, 2, 'o placar tem os dois times');

    // Chute carregado sai como tiro forte: o analógico não influencia,
    // quem manda é o botão seguro (strength 1 => 'power').
    const shotKind = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const shooter = match.world.members('home').find(player => !player.isKeeper);
      match.controlled.home = shooter;
      match.phase.name = 'play';
      match.phase.restart = null;
      match.ball.attachTo(shooter);
      match.world.command('shoot', { strength: 1, placed: false });
      return match.ball.state.lastShotKind;
    });
    assert.equal(shotKind, 'power', 'o tiro carregado sai como chute forte');

    // A defesa mergulhada do goleiro não pode derrubar a simulação.
    const goalkeeperSave = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.world.members('home'), ...match.world.members('away')];
      const keeper = players.find(player => player.side === 'away' && player.isKeeper);
      const shooter = players.find(player => player.side === 'home' && !player.isKeeper);
      for (const player of players) player.active = player === keeper;
      match.phase.name = 'play';
      match.phase.restart = null;
      match.teams.home.score = 0;
      match.teams.away.score = 0;
      match.world.diveKeeper(keeper, 1);
      const savesBefore = match.world.snapshot().stats.away.saves;
      let saved = false;
      for (let attempt = 0; attempt < 40 && !saved; attempt += 1) {
        keeper.x = 50.5;
        keeper.z = 0;
        keeper.root.position.set(keeper.x, 0, keeper.z);
        match.ball.state.owner = null;
        match.ball.state.position.set(52.45, 0.8, 0);
        match.ball.state.velocity.set(8, 0, 0);
        match.ball.state.spin.set(0, 0, 0);
        match.ball.state.guidance = null;
        match.ball.state.lastCollision = null;
        match.ball.state.lastShotKind = 'normal';
        match.ball.state.lastTouch = shooter;
        match.world.tick(1 / 60);
        saved = match.world.snapshot().stats.away.saves > savesBefore;
        if (!saved) {
          match.teams.home.score = 0;
          match.teams.away.score = 0;
          match.phase.name = 'play';
          match.phase.timer = 0;
        }
      }
      return {
        score: match.world.snapshot().score,
        saved,
        lastTouchIsKeeper: match.ball.state.lastTouch === keeper,
        keeperX: keeper.x
      };
    });
    assert.deepEqual(goalkeeperSave.score, [0, 0], 'o goleiro segura um chute alinhado antes da linha do gol');
    assert.ok(goalkeeperSave.saved, 'o goleiro defende o chute antes de cruzar a linha');
    assert.ok(goalkeeperSave.lastTouchIsKeeper, 'a defesa registra o goleiro como último toque da bola');

    const goalAndGoalKick = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.teams.home.players, ...match.teams.away.players];
      const homeKeeper = players.find(player => player.side === 'home' && player.isKeeper);
      const awayKeeper = players.find(player => player.side === 'away' && player.isKeeper);
      const awayShooter = players.find(player => player.side === 'away' && !player.isKeeper);
      for (const player of players) player.active = false;
      match.phase.name = 'play';
      match.phase.restart = null;
      match.ball.state.owner = null;
      match.ball.state.position.set(52.45, 1.2, 0);
      match.ball.state.velocity.set(20, 0, 0);
      match.ball.state.spin.set(0, 0, 0);
      match.ball.state.lastCollision = null;
      match.ball.state.lastTouch = null;
      match.world.tick(1 / 60);
      const scored = match.world.snapshot().score;
      const noTouch = match.ball.state.lastTouch === null;

      homeKeeper.active = true;
      homeKeeper.x = -48;
      homeKeeper.z = 0;
      homeKeeper.root.position.set(homeKeeper.x, 0, homeKeeper.z);
      match.phase.name = 'play';
      match.phase.timer = 0;
      match.phase.restart = null;
      match.ball.state.owner = null;
      match.ball.state.position.set(-52.45, 0.18, 4.5);
      match.ball.state.velocity.set(-20, 0, 0);
      match.ball.state.spin.set(0, 0, 0);
      match.ball.state.lastCollision = null;
      match.ball.state.lastTouch = awayShooter;
      match.world.tick(1 / 60);
      match.world.tick(1 / 60);
      const restart = match.phase.restart;
      const shotsBeforeRestartInput = match.world.snapshot().stats.home.shots;
      for (let index = 0; index < 2000 && restart?.preparation; index += 1) match.world.tick(1 / 60);
      for(let i=0;i<90;i++)match.world.tick(1/60);
      const restartWaitsForInput = match.phase.restart === restart
        && match.phase.restart?.ready
        && match.ball.state.owner === homeKeeper
        && match.world.snapshot().stats.home.shots === shotsBeforeRestartInput;
      const explicitShotAccepted = match.world.command('shoot', { strength: 0.7 });
      for(let i=0;i<60;i++)match.world.tick(1/60);
      const result = {
        scored,
        noTouch,
        goalKick: restart?.type === 'goalkick' && restart.side === 'home',
        takerIsKeeper: restart?.taker === homeKeeper,
        restartWaitsForInput,
        explicitShotAccepted,
        restartShotReleased: match.phase.name === 'play' && match.phase.restart === null
          && match.world.snapshot().stats.home.shots === shotsBeforeRestartInput + 1
          && match.ball.state.lastShotKind === 'direct',
        awayKeeperExists: Boolean(awayKeeper),
        awayShooterExists: Boolean(awayShooter)
      };
      for (const player of players) player.active = true;
      return result;
    });
    assert.deepEqual(goalAndGoalKick.scored, [1, 0], 'a bola que cruza a linha inteira entra no gol');
    assert.ok(goalAndGoalKick.noTouch, 'a bola que entra no gol sem desvio não mantém um toque fantasma');
    assert.ok(goalAndGoalKick.goalKick && goalAndGoalKick.takerIsKeeper,
      'a bola pela linha de fundo sem toque do goleiro gera tiro de meta cobrado pelo goleiro');
    assert.ok(goalAndGoalKick.restartWaitsForInput,
      'a reposição humana fica aguardando sem passe ou chute automático');
    assert.ok(goalAndGoalKick.explicitShotAccepted && goalAndGoalKick.restartShotReleased,
      'um comando explícito de chute cobra a bola parada e retoma o jogo');
    assert.ok(goalAndGoalKick.awayKeeperExists, 'o goleiro também existe no lado visitante');

    const manualSlide = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.teams.home.players, ...match.teams.away.players];
      const tackler = match.teams.home.players.find(player => !player.isKeeper);
      const previousControl = match.controlled.home;
      const previousPosition = { x: tackler.x, z: tackler.z };
      const ballState = match.ball.state;
      const previousBall = {
        position: ballState.position.clone(),
        velocity: ballState.velocity.clone(),
        spin: ballState.spin.clone(),
        owner: ballState.owner,
        lastTouch: ballState.lastTouch,
        guidance: ballState.guidance,
        lastCollision: ballState.lastCollision,
        lastShotKind: ballState.lastShotKind
      };
      for (const player of players) player.active = player === tackler;
      tackler.x = 0;
      tackler.z = 0;
      tackler.vx = tackler.vz = 0;
      tackler.slideTackle = null;
      tackler.slideCooldownUntil = 0;
      tackler.root.position.set(0, 0, 0);
      match.controlled.home = tackler;
      match.phase.name = 'play';
      match.phase.timer = 0;
      match.phase.restart = null;
      match.ball.state.owner = null;
      match.ball.state.position.set(2.8, 0.11, 0);
      match.ball.state.velocity.set(0, 0, 0);
      match.ball.state.spin.set(0, 0, 0);
      match.ball.state.guidance = null;
      match.ball.state.lastTouch = null;
      match.ball.state.lastCollision = null;
      const started = match.world.command('tackle');
      for (let index = 0; index < 90; index += 1) match.world.tick(1 / 60);
      const result = {
        started,
        cleanAcquisition: match.ball.state.owner === tackler,
        recovered: !tackler.slideTackle,
        noFoul: match.phase.name === 'play' && match.phase.restart === null
      };
      for (const player of players) player.active = true;
      tackler.x = previousPosition.x;
      tackler.z = previousPosition.z;
      tackler.vx = tackler.vz = 0;
      tackler.root.position.set(tackler.x, 0, tackler.z);
      match.controlled.home = previousControl;
      ballState.position.copy(previousBall.position);
      ballState.velocity.copy(previousBall.velocity);
      ballState.spin.copy(previousBall.spin);
      ballState.owner = previousBall.owner;
      ballState.lastTouch = previousBall.lastTouch;
      ballState.guidance = previousBall.guidance;
      ballState.lastCollision = previousBall.lastCollision;
      ballState.lastShotKind = previousBall.lastShotKind;
      match.ball.mesh.position.copy(ballState.position);
      match.ball.shadow.position.set(ballState.position.x, 0.02, ballState.position.z);
      return result;
    });
    assert.ok(manualSlide.started, 'o botão de carrinho inicia uma ação defensiva manual');
    assert.ok(manualSlide.cleanAcquisition && manualSlide.recovered && manualSlide.noFoul,
      'o carrinho limpo alcança a bola, recupera o atleta e mantém a partida em jogo');

    const disciplinary = await page.evaluate(() => {
      const match = window.__xfcMatch;
      const players = [...match.teams.home.players, ...match.teams.away.players];
      const offender = match.teams.home.players.find(player => !player.isKeeper);
      const victim = match.teams.away.players.find(player => !player.isKeeper);
      const previousControl = match.controlled.home;
      match.controlled.home = offender;
      for (const player of players) player.active = player.side === 'home' || player === victim;
      offender.x = 27; offender.z = 0; offender.root.position.set(27, 0, 0);
      victim.x = 28; victim.z = 0; victim.root.position.set(28, 0, 0);
      let firstYellowAt = null;
      let firstRestart = null;
      let dismissed = false;
      for (let attempt = 0; attempt < 120 && !dismissed; attempt += 1) {
        match.phase.name = 'play';
        match.phase.restart = null;
        match.ball.attachTo(victim);
        match.world.tackle(offender);
        if (!firstRestart && match.phase.restart) {
          firstRestart = {
            type: match.phase.restart.type,
            side: match.phase.restart.side,
            x: match.phase.restart.x,
            z: match.phase.restart.z
          };
        }
        const yellows = match.teams.home.cards[offender.id] || 0;
        if (yellows === 1 && firstYellowAt === null) firstYellowAt = attempt;
        dismissed = !offender.active;
      }
      const result = {
        yellows: match.teams.home.cards[offender.id] || 0,
        firstYellowAt,
        firstRestart,
        dismissed,
        active: offender.active,
        replacementIsActive: match.controlled.home !== offender && Boolean(match.controlled.home?.active)
      };
      for (const player of players) player.active = true;
      match.controlled.home = previousControl;
      match.phase.name = 'play';
      match.phase.restart = null;
      return result;
    });
    assert.ok(disciplinary.firstYellowAt !== null, 'a entrada perigosa recebe o primeiro amarelo');
    assert.deepEqual(disciplinary.firstRestart, { type: 'freekick', side: 'away', x: 28, z: 0 },
      'a falta fora da área reinicia para o adversário no ponto do incidente');
    assert.ok(disciplinary.dismissed && !disciplinary.active && disciplinary.yellows >= 2,
      'o segundo amarelo vira vermelho e remove o atleta de campo');
    assert.ok(disciplinary.replacementIsActive,
      'a expulsão troca o controle para um atleta ativo, nunca para o jogador removido');

    // O jogo pausa no intervalo: o jogador volta com o botão do segundo tempo.
    await page.evaluate(async () => {
      const match = window.__xfcMatch;
      for (let index = 0; index < 60000; index += 1) {
        match.world.tick(1 / 60);
        if (match.phase.name === 'kickoff' && match.phase.side === match.world.userSide) {
          match.world.command('pass');
        } else if (match.phase.name === 'restart' && match.phase.restart?.ready
          && match.phase.restart.side === match.world.userSide) {
          match.world.command('pass');
        }
        if (match.phase.name === 'halftime') break;
      }
    });
    await page.waitForSelector('.pause__title', { timeout: 20000 });
    assert.ok((await page.locator('.pause__title').textContent()).includes('INTERVALO'),
      'o intervalo aparece no meio da partida');
    await page.click('.pause .btn--primary');

    // O resultado aparece ao fim do tempo, com o placar e o botão de rejogar.
    // Espera a saída do segundo tempo, então avança o relógio até o fim de forma
    // determinística: milhares de retomadas aleatórias não devem tornar o teste
    // dependente do acaso nem deixá-lo parado esperando um cobrador humano.
    const secondHalfStarted = await page.evaluate(() => {
      const match = window.__xfcMatch;
      for (let index = 0; index < 900; index += 1) {
        match.world.tick(1 / 60);
        if (match.phase.name === 'play' && match.clock.half === 2) return true;
      }
      return false;
    });
    assert.equal(secondHalfStarted, true, 'o segundo tempo começa depois do intervalo');
    const finished = await page.evaluate(() => {
      const match = window.__xfcMatch;
      match.clock.minutes = 90;
      match.clock.added = 0;
      match.world.tick(1 / 60);
      return match.world.snapshot();
    });
    assert.equal(finished.phase, 'fulltime', 'a partida termina');
    assert.equal(await page.evaluate(()=>window.__xfcMatch.engine.running),false,'resultado não redesenha estádio desnecessariamente');
    assert.ok(finished.display.startsWith('9'), `o relógio marca o fim do tempo: ${finished.display}`);
    const resultShown = await page.waitForSelector('.result__title', { timeout: 6000 }).then(() => true).catch(() => false);
    if (!resultShown) {
      const diagnostic = await page.evaluate(() => ({
        phase: window.__xfcMatch?.phase?.name,
        score: window.__xfcMatch?.world?.snapshot()?.score,
        overlay: document.querySelector('.play__overlay')?.innerText,
        screen: document.querySelector('.screen--play')?.className,
        profile: localStorage.getItem('xfc-profile')
      }));
      throw new Error(`resultado não apareceu: ${JSON.stringify({ diagnostic, errors })}`);
    }
    assert.equal((await page.locator('.result__title').textContent()).trim(), 'FIM DE JOGO');
    assert.ok(await page.locator('.result__crest').count() === 2, 'o resultado mostra os dois escudos');
    assert.ok(await page.locator('.btn:has-text("REJOGAR")').count(), 'o resultado tem REJOGAR');
    assert.ok(await page.locator('.btn:has-text("VOLTAR AO MENU")').count(), 'o resultado tem VOLTAR AO MENU');
    assert.equal(await page.locator('.result__stat').count(), 8, 'a tela de resultado traz as estatísticas da partida');
    assert.equal(await page.locator('.result__reward').count(), 1, 'o apito final mostra as moedas recebidas');
    const profileAfterMatch = await page.evaluate(() => JSON.parse(localStorage.getItem('xfc.profile.v1')));
    assert.ok(profileAfterMatch.coins > coinsBeforeMatch, 'a partida credita moedas para a loja');
    assert.equal(profileAfterMatch.matchesPlayed, 1, 'o perfil registra a partida concluída');
    assert.ok(profileAfterMatch.xp > 3000, 'o resultado também recompensa XP');

    // Enfiada é um passe rasteiro guiado para espaço à frente, nunca um cruzamento.
    const passBehavior = await page.evaluate(() => {
      const match = window.__xfcMatch;
      match.phase.name = 'play';
      match.phase.restart = null;
      const home = match.world.members('home');
      const passer = home.find(player => player.role === 'CM');
      const receiver = home.find(player => player.role === 'ST');
      match.world.setPaused(false);
      for (const player of home) {
        player.active = true;
        player.x = -15;
        player.z = player.role === 'LW' ? 30 : player.role === 'RW' ? -30 : 24;
        player.vx = player.vz = 0;
      }
      passer.x = 0; passer.z = 0;
      receiver.x = 8; receiver.z = 0; receiver.vx = 1.5; receiver.vz = 0;
      for (const defender of match.world.members('away')) {
        if (defender.isKeeper) continue;
        defender.x = 22;
        defender.z = 25;
      }
      match.controlled.home = passer;
      match.ball.attachTo(passer);
      match.world.kickBall(passer, receiver, { power: 17 });
      const guidedPass = Boolean(match.ball.state.guidance?.receiver === receiver)
        && !match.ball.state.guidance?.through;
      match.ball.attachTo(passer);
      const throughCommanded = match.world.command('lob');
      return {
        guidedPass,
        throughCommanded,
        throughPass: Boolean(match.ball.state.guidance?.receiver === receiver)
          && match.ball.state.guidance?.through === true,
        lift: match.ball.state.velocity.y,
        targetX: match.ball.state.guidance?.x,
        receiverX: receiver.x
      };
    });
    assert.ok(passBehavior.guidedPass, 'o passe normal recebe assistência de direção');
    assert.ok(passBehavior.throughCommanded, 'o comando ENFIADA é aceito durante o jogo');
    assert.ok(passBehavior.throughPass, 'ENFIADA aponta para um recebedor no espaço');
    assert.ok(passBehavior.lift < 2, 'a enfiada permanece rasteira, não vira cruzamento');
    assert.ok(passBehavior.targetX > passBehavior.receiverX, 'a enfiada mira à frente do atacante');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `a partida não deve gerar erro de console: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

test('Treino de pênaltis: câmera Pro, batedor, goleiro e prática de chute', { timeout: 90000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu');
    await page.locator('.menu__item[data-menu-item="learn"]').click();
    await page.waitForSelector('.screen--training-select');
    assert.equal(await page.locator('.training-select__choice').count(), 7,
      'o Centro de Treino oferece os sete fundamentos da referência');
    await page.locator('.training-select__choice[data-drill="penalty"]').click();
    await page.waitForSelector('.screen--training .training__stage[data-drill="penalty"]');
    await page.waitForFunction(() => window.__xfcTrainingMatch?.world.trainingMode === true);

    const setup = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      return {
        homeActive: match.world.members('home').length,
        awayActive: match.world.members('away').length,
        camera: match.world.cameraMode,
        player: match.controlled.home?.role,
        ownsBall: match.ball.state.owner === match.controlled.home,
        keeper: match.world.members('away')[0]?.isKeeper
      };
    });
    assert.deepEqual(setup, {
      homeActive: 1,
      awayActive: 1,
      camera: 'pro',
      player: 'ST',
      ownsBall: true,
      keeper: true
    }, 'o exercício começa com um atacante e o goleiro esperando no gol em câmera Pro');
    const cameraPose = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      const player = match.controlled.home;
      const camera = match.engine.camera.position;
      const forwardX = player.facing.x;
      const forwardZ = player.facing.z;
      const dx = camera.x - player.x;
      const dz = camera.z - player.z;
      return {
        behind: dx * forwardX + dz * forwardZ,
        lateral: dx * -forwardZ + dz * forwardX
      };
    });
    assert.ok(cameraPose.behind < -5.5 && cameraPose.behind > -8, 'a câmera fica atrás da direção em que o jogador está olhando');
    assert.ok(Math.abs(cameraPose.lateral) < 1, 'a câmera não fica deslocada para a lateral');
    assert.ok(await page.locator('.training__stats').isVisible(), 'o treino mostra chutes, gols e defesas');
    assert.ok((await page.locator('.training__instructions').textContent()).includes('CÂMERA PRO'),
      'as instruções identificam a câmera Pro');
    for (const selector of ['.ctrl-btn--shoot']) {
      assert.ok(await page.locator(selector).isVisible(), `${selector} fica disponível no treino`);
    }
    assert.equal(await page.locator('.ctrl-btn--pass').isVisible(), false,
      'o treino não mostra um passe sem companheiros ativos');

    assert.equal(await page.locator('.ctrl-btn--dribble').isVisible(),false,'pênalti separa mira de dribles');
    const movement = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      const player = match.controlled.home;
      const startX = player.x;
      const startYaw = match.engine.camera.rotation.y;
      match.world.input.moveZ = 1;
      for (let frame = 0; frame < 8; frame += 1) match.world.tick(0.05);
      const forwardMoved = player.x > startX + 0.05;
      const burstAfterForward = player.burst;

      // A direita da tela deve continuar sendo direita mesmo depois de avançar.
      const startZ = player.z;
      player.vx = player.vz = 0;
      player.facingAngle = Math.PI / 2;
      player.facing.set(1, 0, 0);
      player.root.rotation.y = player.facingAngle;
      match.world.input.moveZ = 0;
      match.world.input.moveX = 1;
      for (let frame = 0; frame < 8; frame += 1) match.world.tick(0.05);
      const rightMoved = player.z > startZ + 0.05;
      const turned = player.facing.z > 0.2;
      match.world.input.moveX = 0;
      const yawChange = Math.atan2(
        Math.sin(match.engine.camera.rotation.y - startYaw),
        Math.cos(match.engine.camera.rotation.y - startYaw)
      );
      return {
        burst: burstAfterForward,
        forwardMoved,
        rightMoved,
        turned,
        cameraYawChange: yawChange
      };
    });
    assert.ok(!movement.burst, 'pênalti não ativa arrancada enquanto mira');
    assert.equal(movement.forwardMoved, false, 'no pênalti cima mira a altura sem tirar o batedor da marca');
    assert.equal(movement.rightMoved, false, 'no pênalti direita mira o canto sem movimentar o batedor');
    assert.equal(movement.turned, false, 'batedor permanece orientado para o gol durante a mira');
    assert.ok(Math.abs(movement.cameraYawChange) < 0.01,
      'o analógico move o atleta sem girar a câmera Pro');

    await page.locator('.ctrl-btn--shoot').click();
    const shot = await page.evaluate(() => ({
      count: window.__xfcTrainingMatch.world.trainingStats.shots,
      ballReleased: window.__xfcTrainingMatch.ball.state.owner === null
    }));
    assert.equal(shot.count, 1, 'CHUTE registra uma tentativa');
    assert.equal(shot.ballReleased, true, 'CHUTE solta a bola para o gol');
    await page.locator('.training__reset').click();
    await page.waitForFunction(() => {
      const match = window.__xfcTrainingMatch;
      return match?.ball.state.owner === match?.controlled.home;
    });
    assert.equal((await page.locator('.training__status').textContent()).includes('REINICIADO'), true,
      'o exercício pode ser recomeçado sem sair da tela');
    const outcome = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      match.engine.stop();
      match.world.command('shoot', { strength: 1 });
      for (let index = 0; index < 240; index += 1) match.world.tick(1 / 60);
      const stats = match.world.trainingStats;
      return { goals: stats.goals, saves: stats.saves, misses: stats.misses };
    });
    assert.ok(outcome.goals + outcome.saves + outcome.misses > 0,
      'o chute conclui o exercício com gol, defesa do goleiro ou tentativa para fora');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `o Centro de Treino não deve gerar erro: ${realErrors.join(' | ')}`);
    await page.locator('.training__exit').click();
    await page.waitForSelector('.screen--menu');
  } finally {
    await browser.close();
    server.close();
  }
});

test('Centro de Treino integra bola parada, pênalti, jogo coletivo e retorno direto aos modos', { timeout: 120000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch');
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu');
    await page.locator('.menu__item[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes');
    await page.getByRole('button',{name:'Treino',exact:true}).first().click();
    await page.waitForSelector('.screen--training-select');
    assert.equal(await page.locator('.training-select__choice').count(), 7,
      'a seleção apresenta os sete cartões novos, sem remover o treino coletivo');

    await page.locator('.training-select__choice[data-drill="freekick"]').click();
    await page.waitForSelector('.training__stage[data-drill="freekick"]');
    const freeKick = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      const wall = match.world.members('away').filter(player => !player.isKeeper);
      const player = match.controlled.home;
      return {
        drill: match.world.trainingDrill,
        home: match.world.members('home').length,
        away: match.world.members('away').length,
        wall: wall.length,
        keeper: match.world.members('away').some(player => player.isKeeper),
        ballDistance: 52.5 - match.ball.state.position.x,
        keeperX: match.world.members('away').find(player => player.isKeeper).x,
        ballShape: match.ball.mesh.geometry.type,
        ballRadius: match.ball.mesh.geometry.parameters.radius,
        sphereSegments: match.ball.mesh.geometry.parameters.widthSegments,
        panelTexture: match.ball.mesh.userData.panelTexture,
        lockerRoom: Boolean(match.engine.scene.getObjectByName('xfc-locker-room')),
        bench: Boolean(match.engine.scene.getObjectByName('xfc-sideline-bench')),
        '3dCrowd': Boolean(match.engine.scene.getObjectByName('xfc-crowd-simplified-bodies')),
        wallSpread: Math.max(...wall.map(item => item.z)) - Math.min(...wall.map(item => item.z)),
        playerX: player.x
      };
    });
    assert.equal(freeKick.drill, 'freekick');
    assert.equal(freeKick.home, 1, 'a cobrança livre usa um batedor controlável');
    assert.equal(freeKick.away, 5, 'a falta monta quatro defensores em barreira e um goleiro');
    assert.equal(freeKick.wall, 4, 'a barreira tem quatro jogadores ativos');
    assert.equal(freeKick.keeper, true);
    assert.ok(freeKick.ballDistance >= 21 && freeKick.ballDistance <= 32,
      'a primeira falta começa a uma distância realista do gol');
    assert.ok(freeKick.keeperX > 50, 'o goleiro começa posicionado na linha');
    assert.ok(freeKick.wallSpread > 2, 'a barreira ocupa largura diante do gol');
    assert.equal(freeKick.ballShape, 'SphereGeometry', 'a bola continua sendo uma malha esférica');
    assert.ok(freeKick.ballRadius > 0.1 && freeKick.ballRadius < 0.12, 'o raio oficial da bola é preservado');
    assert.ok(freeKick.sphereSegments >= 32, 'a superfície esférica tem tesselação suave');
    assert.equal(freeKick.panelTexture, 'xfc-pro-match-ball-v2', 'a bola usa o novo atlas de painéis e costuras');
    assert.equal(freeKick.lockerRoom, true, 'o vestiário 3D está presente no estádio');
    assert.equal(freeKick.bench, true, 'os bancos de beira de campo estão presentes');
    assert.equal(freeKick['3dCrowd'], true, 'a arquibancada inclui modelos 3D instanciados de torcedores');
    assert.ok(await page.locator('.mode-home-button').isVisible(), 'a tela de treino oferece retorno direto à seleção de modos');
    await page.locator('.ctrl-btn--shoot').click();
    await page.waitForFunction(() => window.__xfcTrainingMatch?.world.trainingStats.shots === 1);

    await page.locator('.mode-home-button').click();
    await page.waitForSelector('.screen--modes');
    await page.getByRole('button',{name:'Treino',exact:true}).first().click();
    await page.waitForSelector('.screen--training-select');
    await page.locator('.training-select__choice[data-drill="penalty"]').click();
    await page.waitForSelector('.training__stage[data-drill="penalty"]');
    const penalty = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      return {
        drill: match.world.trainingDrill,
        attackers: match.world.members('home').length,
        defenders: match.world.members('away').length,
        keeper: match.world.members('away')[0]?.isKeeper,
        markDistance: 52.5 - match.ball.state.position.x
      };
    });
    assert.equal(penalty.drill, 'penalty');
    assert.equal(penalty.attackers, 1);
    assert.equal(penalty.defenders, 1);
    assert.equal(penalty.keeper, true);
    assert.ok(Math.abs(penalty.markDistance - 11) < 0.2, 'a bola começa na marca oficial de pênalti');

    await page.locator('.mode-home-button').click();
    await page.waitForSelector('.screen--modes');
    await page.getByRole('button',{name:'Treino',exact:true}).first().click();
    await page.waitForSelector('.screen--training-select');
    await page.getByRole('button',{name:'Treino de equipe',exact:true}).click();
    await page.waitForSelector('.training__stage[data-drill="team"]');
    assert.ok(await page.locator('.ctrl-btn--pass').isVisible(), 'o treino coletivo expõe um comando de passe funcional');
    const practice = await page.evaluate(() => {
      const match = window.__xfcTrainingMatch;
      match.engine.stop();
      const home = match.world.members('home');
      const start = match.controlled.home;
      const startX = start.x;
      const zRange = Math.max(...home.map(player => player.z)) - Math.min(...home.map(player => player.z));
      match.world.input.moveZ = 1;
      for (let frame = 0; frame < 10; frame += 1) match.world.tick(0.05);
      const moved = start.x > startX + 0.05;
      match.world.input.moveZ = 0;
      const passAccepted = match.world.command('pass');
      const passCount = match.world.trainingStats.passes;
      for (let frame = 0; frame < 240; frame += 1) match.world.tick(1 / 60);
      return {
        drill: match.world.trainingDrill,
        home: match.world.members('home').length,
        away: match.world.members('away').length,
        spread: zRange,
        moved,
        passAccepted,
        passCount,
        completedPasses: match.world.trainingStats.completedPasses,
        combinations: match.world.trainingStats.combinations
      };
    });
    assert.equal(practice.drill, 'team');
    assert.equal(practice.home, 10, 'o treino coletivo ativa os dez jogadores de linha da equipe');
    assert.equal(practice.away, 1, 'o goleiro continua ativo para defender as finalizações');
    assert.ok(practice.spread > 25, 'os companheiros começam distribuídos em faixas distintas');
    assert.equal(practice.moved, true, 'o analógico move o jogador no exercício coletivo');
    assert.equal(practice.passAccepted, true, 'o passe encontra um companheiro ativo');
    assert.equal(practice.passCount, 1, 'o passe é contabilizado no treino');
    assert.ok(practice.completedPasses >= 1, 'um companheiro recebe a bola e completa a troca');

    const realErrors = errors.filter(message => !/favicon/i.test(message));
    assert.deepEqual(realErrors, [], `os exercícios não devem gerar erros: ${realErrors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

/* ------------------------------------------------ competições (Champions) -- */

test('as quatro competições sorteiam grupos, calendário, artilharia e campeão', async () => {
  const { COMPETITIONS, createTournament, tournamentBracket, tournamentScorers,
    recordTournamentResult, simulateRound, nextTournamentFixture, tournamentStatus,
    allGroupTables } = await import('../xfc-game/src/data/tournament.js');

  assert.equal(COMPETITIONS.length, 6, 'as quatro competições originais e duas brasileiras');
  assert.deepEqual(COMPETITIONS.slice(0,4).map(item => item.id), [
    'uefa-champions-league', 'copa-america', 'conmebol-libertadores', 'world-cup'
  ]);
  assert.equal(new Set(COMPETITIONS.slice(0,4).map(item => item.theme)).size, 4, 'cada competição tem tema próprio');

  for (const competition of COMPETITIONS.slice(0,4)) {
    let seed = 12345;
    const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const tournament = createTournament(competition.id, { random });
    assert.ok(tournament.groups.A.includes(tournament.userTeamId), `${competition.id}: o time do usuário abre o grupo A`);
    for (const [group, teams] of Object.entries(tournament.groups)) {
      assert.ok(teams.length >= 3, `${competition.id}: grupo ${group} tem pelo menos três times`);
    }
    assert.ok(tournament.fixtures.length > 0, `${competition.id}: calendário gerado`);

    let guard = 0;
    while (guard++ < 80) {
      simulateRound(tournament, { random });
      const fixture = nextTournamentFixture(tournament);
      if (!fixture) break;
      assert.ok(fixture.home && fixture.away, `${competition.id}: a partida tem os dois times`);
      recordTournamentResult(tournament, fixture.id, 2, 1, { random });
    }

    assert.ok(tournament.champion, `${competition.id}: o campeonato chega a um campeão`);
    assert.equal(tournament.stage, 'champion', `${competition.id}: a campanha termina`);
    assert.ok(tournament.runnerUp, `${competition.id}: a final tem vice-campeão`);
    const bracket = tournamentBracket(tournament);
    assert.equal(bracket.at(-1).stage, 'final', `${competition.id}: o mata-mata termina na final`);
    assert.ok(tournamentScorers(tournament, 5).length > 0, `${competition.id}: a artilharia tem goleadores`);
    for (const { table } of allGroupTables(tournament)) {
      assert.equal(table.reduce((total, entry) => total + entry.points, 0) % 1, 0,
        `${competition.id}: a tabela soma pontos inteiros`);
      assert.ok(table.every(entry => entry.played <= 3), `${competition.id}: ninguém joga mais que três rodadas`);
    }
    const status = tournamentStatus(tournament);
    assert.ok(['champion', 'finished'].includes(status.stage), `${competition.id}: o status acompanha o fim do torneio`);
    if (tournament.champion === tournament.userTeamId) {
      assert.equal(status.stage, 'champion', `${competition.id}: o título do usuário é reconhecido`);
    }
  }
});

test('os menus das competições são próprios e todas as opções abrem telas reais', { timeout: 240000 }, async (t) => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) {
    server.close();
    return;
  }
  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 720 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36'
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(`${message.text()} @ ${message.location()?.url ?? 'inline'}`);
    });

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.keyboard.press('Enter');
    await page.waitForSelector('.screen--launch', { timeout: 15000 });
    await page.click('.launch__enter');
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    await page.locator('.menu__item[data-menu-item="tournament"]').click();
    await page.waitForSelector('.screen--modes', { timeout: 15000 });

    const expected = [
      {
        option: 'uefa-champions-league',
        id: 'uefa-champions-league',
        labels: ['Jogar Partida', 'Calendário', 'Classificação', 'Mata-Mata', 'Estatísticas', 'Final']
      },
      {
        option: 'copa-america',
        id: 'copa-america',
        labels: ['Jogar Partida', 'Seleções', 'Calendário', 'Classificação', 'Fase de Grupos', 'Mata-Mata', 'Artilharia', 'Final']
      },
      {
        option: 'conmebol-libertadores',
        id: 'conmebol-libertadores',
        labels: ['Jogar Partida', 'Calendário', 'Classificação', 'Fase de Grupos', 'Mata-Mata', 'Artilharia', 'Final']
      },
      {
        option: 'world-cup',
        id: 'world-cup',
        labels: ['Jogar Partida', 'Seleções', 'Calendário', 'Classificação', 'Fase de Grupos', 'Mata-Mata', 'Artilharia', 'Final']
      }
    ];

    for (const { option, id, labels } of expected) {
      if(option==='copa-america'){
        await page.getByRole('button',{name:'Copas',exact:true}).click();
        await page.getByRole('button',{name:'Copa América',exact:true}).click();
      }else await page.locator(`.modes__option[data-option="${option}"]`).click();
        await page.waitForSelector(`.screen--competition[data-competition="${id}"]`, { timeout: 15000 });
      const menuLabels = (await page.locator('.comp__menu-label').allTextContents()).map(text => text.trim());
      assert.deepEqual(menuLabels, [...labels, 'Voltar aos Modos'],
        `${id}: o menu mostra exatamente as opções próprias da competição`);
      assert.equal(await page.locator(`.screen--competition[data-competition="${id}"] .comp__art`).count(), 1,
        `${id}: a arte da competição (estádio e troféu) aparece no palco`);
      assert.equal(await page.locator('.comp__card').count(), 3, `${id}: a faixa inferior mostra os três cartões`);
      assert.ok(await page.locator('.comp__card--match').isVisible(), `${id}: o cartão da próxima partida aparece`);
      await page.locator('.comp__home').click();
      await page.waitForSelector('.screen--menu', { timeout: 15000 });
      assert.equal(await page.locator('.screen--worldcup').count(), 0,
        `${id}: o atalho de início nunca cai na Copa do Mundo`);
      await page.locator('.menu__item[data-menu-item="tournament"]').click();
      await page.waitForSelector('.screen--modes', { timeout: 15000 });
    }

    // Champions: escolha do clube, sorteio e painéis funcionais.
    await page.locator('.modes__option[data-option="uefa-champions-league"]').click();
    await page.waitForSelector('.screen--competition[data-competition="uefa-champions-league"]');
    await page.locator('.comp__menu-item[data-panel="play"]').click();
    assert.equal(await page.locator('.comp__team-card').count(), 12, 'a Champions oferece os doze clubes europeus');
    await page.locator('.comp__team-card[data-team-id="fc-barcelona"]').click();
    await page.locator('.comp__selection-preview .comp__cta').click();
    await page.waitForSelector('.comp__match', { timeout: 10000 });
    assert.ok(await page.locator('.comp__kit').first().isVisible(), 'a escolha de uniforme fica no painel');
    assert.equal(await page.locator('.comp__opponent').count(), 11, 'o amistoso oferece os outros clubes do torneio');
    assert.ok(await page.locator('.comp__friendlies .comp__ghost').isVisible(), 'o amistoso tem o botão de jogar');

    await page.locator('.comp__menu-item[data-panel="standings"]').click();
    assert.equal(await page.locator('.comp__table').count(), 3, 'a classificação mostra os três grupos');
    assert.equal(await page.locator('.comp__table-row').count(), 12, 'cada grupo lista seus quatro times');

    await page.locator('.comp__menu-item[data-panel="calendar"]').click();
    assert.ok(await page.locator('.comp__fixture').count() >= 18, 'o calendário lista toda a fase de grupos');

    // A Champions da referência não tem uma opção "Fase de Grupos": a tabela
    // dos grupos já aparece em "Classificação".
    assert.equal(await page.locator('.comp__menu-item[data-panel="groups"]').count(), 0,
      'o menu da Champions segue a referência, sem a opção de fase de grupos');

    await page.locator('.comp__menu-item[data-panel="knockout"]').click();
    assert.equal(await page.locator('.comp__bracket').count(), 0, 'o mata-mata fica bloqueado antes da classificação');
    assert.ok(await page.locator('.comp__empty').isVisible(), 'o mata-mata explica como desbloquear');

    await page.locator('.comp__menu-item[data-panel="scorers"]').click();
    assert.ok(await page.locator('.comp__scorer').count() > 0, 'a artilharia mostra os goleadores');

    await page.locator('.comp__menu-item[data-panel="final"]').click();
    assert.ok((await page.locator('.comp__stage').textContent()).includes('final'), 'a aba Final fala da decisão');

    // Pré-jogo com escudos, uniformes e escalação dos dois times.
    await page.locator('.comp__menu-item[data-panel="play"]').click();
    await page.locator('.comp__cta--play').click();
    await page.waitForSelector('.showcase__enter', { timeout: 30000 });
    assert.equal(await page.locator('.showcase__lineup').count(), 2, 'os dois times têm escalação no pré-jogo');
    assert.equal(await page.locator('.showcase__lineup-player').count(), 22, 'as duas escalações somam 22 jogadores');
    assert.equal(await page.locator('.showcase__lineup-kit svg').count(), 2, 'as blusas escolhidas aparecem no pré-jogo');

    // Entrada cinematográfica: a partida só começa depois do túnel.
    await page.click('.showcase__enter');
    await page.waitForSelector('.hud.is-visible', { timeout: 20000 });
    const entrancePlayed = await page.evaluate(() => window.__xfcMatch.world.entrancePlayed);
    assert.equal(entrancePlayed, true, 'os times entram em campo pelo túnel antes do apito');
    assert.equal(await page.locator('.entrance').count(), 0, 'a entrada termina quando o jogo começa');

    // Nenhum aviso gigante de falta/pênalti/lateral: só o gol tem cartão.
    await page.waitForTimeout(400);
    assert.equal(await page.locator('.hud__banner--foul').count(), 0, 'as faltas não tomam a tela');
    assert.equal(await page.locator('.hud__banner--restart').count(), 0, 'as bolas paradas não tomam a tela');
    const goalCard = await page.evaluate(() => {
      const style = document.createElement('style');
      style.textContent = '.hud__banner--goal-card { bottom: 132px; }';
      document.head.appendChild(style);
      const node = document.createElement('div');
      node.className = 'hud__banner hud__banner--goal-card is-visible';
      document.body.appendChild(node);
      const rect = node.getBoundingClientRect();
      const result = { bottom: rect.bottom, top: rect.top, height: window.innerHeight };
      node.remove();
      style.remove();
      return result;
    });
    assert.ok(goalCard.top > goalCard.height * 0.55, 'o cartão de gol fica na parte de baixo da tela');

    // Sair pela nova pausa retorna ao campeonato correto; o logo leva ao início.
    await page.locator('.play__pause-button').click();
    await page.waitForSelector('[data-pause-action="end"]', { timeout: 8000 });
    await page.locator('[data-pause-action="end"]').click();
    await page.locator('.pause-reference__confirm').click();
    await page.waitForSelector('.screen--competition[data-competition="uefa-champions-league"]', { timeout: 15000 });
    await page.locator('.comp__home').click();
    await page.waitForSelector('.screen--menu', { timeout: 15000 });
    assert.equal(await page.locator('.screen--worldcup').count(), 0, 'o botão de início respeita o menu principal');

    // Botões do celular: sem seleção de texto/callout de link.
    const buttonStyle = await page.locator('.menu__item').first().evaluate(node => {
      const style = getComputedStyle(node);
      return { userSelect: style.userSelect, touchAction: style.touchAction };
    });
    assert.equal(buttonStyle.userSelect, 'none', 'o texto do botão não é selecionável no Android');
    assert.equal(buttonStyle.touchAction, 'manipulation', 'o toque não abre o menu de link do WebView');
    const contextMenuBlocked = await page.evaluate(() => {
      const button = document.querySelector('.menu__item');
      const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
      button.dispatchEvent(event);
      return event.defaultPrevented;
    });
    assert.ok(contextMenuBlocked, 'segurar um botão não abre o menu de copiar/abrir do WebView');

    assert.deepEqual(errors, [], `sem erros de página ou console: ${errors.join(' | ')}`);
  } finally {
    await browser.close();
    server.close();
  }
});

test('os avisos de falta e bola parada saíram da tela e o gol ganhou cartão no rodapé', async () => {
  const playSource = await readFile(new URL('../xfc-game/src/screens/play.js', import.meta.url), 'utf8');
  const hudSource = await readFile(new URL('../xfc-game/src/match3d/hud.js', import.meta.url), 'utf8');
  assert.ok(!playSource.includes("showBanner(`FALTA"), 'a falta não abre mais um aviso gigante');
  assert.ok(!playSource.includes('showBanner(instructions[0]'), 'pênalti, lateral e tiro livre não tomam a tela');
  assert.ok(!playSource.includes('showBanner(\'SAÍDA'), 'a saída de bola não cobre o campo');
  assert.ok(playSource.includes('hud.showGoalCard'), 'o gol usa o cartão de rodapé');
  assert.ok(hudSource.includes('showGoalCard'), 'a HUD desenha o cartão com camisa, nome e placar');
  assert.ok(hudSource.includes('hud__goal-number'), 'o número da camisa aparece no cartão');
});
