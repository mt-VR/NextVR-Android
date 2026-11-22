import test from 'node:test';
import assert from 'node:assert/strict';
import { GOAL, FIFA_GOAL, applyPitchLayout } from '../xfc-game/src/match3d/constants.js';
import { shotGoalTargetZ } from '../xfc-game/src/match3d/football-actions.js';
import { careerAppearance, CAREER_TATTOO, CAREER_MASK } from '../xfc-game/src/data/career.js';
import { broadcastCameraPose } from '../xfc-game/src/match3d/camera.js';

test('gol FIFA 7,32×2,44 na partida', () => {
  applyPitchLayout('standard');
  assert.equal(FIFA_GOAL.width, 7.32);
  assert.equal(FIFA_GOAL.height, 2.44);
  assert.equal(GOAL.width, 7.32);
  assert.equal(GOAL.height, 2.44);
});

test('mira direita manda o chute à direita do atleta, não à esquerda', () => {
  const rightHome = shotGoalTargetZ(1, 0, 1, 7.32);
  const leftHome = shotGoalTargetZ(-1, 0, 1, 7.32);
  const rightAway = shotGoalTargetZ(1, 0, -1, 7.32);
  assert.ok(rightHome > 1, `home direita z=${rightHome}`);
  assert.ok(leftHome < -1, `home esquerda z=${leftHome}`);
  assert.ok(rightAway < -1, 'visitante atacando -X: direita do atleta é -Z');
  assert.equal(shotGoalTargetZ(0, 0, 1, 7.32), 0);
});

test('Tele Broadcast: altura 16, segue a bola, linha lateral no rodapé', () => {
  const mid = broadcastCameraPose({ x: 12, y: 0, z: 0 }, 1, null, 'standard');
  assert.equal(mid.position.y, 16);
  assert.equal(mid.position.x, 12);
  assert.ok(mid.position.z >= 44, 'lente afastada da lateral');
  assert.ok(mid.fov <= 52, 'zoom fecha as laterais');
});

test('carreira persiste tatuagem e máscara facial', () => {
  const look = careerAppearance({ tattoo: 'sleeve', faceMask: 'black' });
  assert.equal(look.tattoo, 'sleeve');
  assert.equal(look.faceMask, 'black');
  assert.ok(CAREER_TATTOO.sleeve);
  assert.ok(CAREER_MASK.black);
  assert.equal(careerAppearance({}).tattoo, 'none');
});
