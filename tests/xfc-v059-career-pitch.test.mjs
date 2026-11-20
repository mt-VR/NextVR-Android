import test from 'node:test';
import assert from 'node:assert/strict';
import { PITCH, CAREER_PITCH, STANDARD_PITCH, FORMATION_433 } from '../xfc-game/src/match3d/constants.js';
import { nationKits, nationColors } from '../xfc-game/src/data/nation-kits.js';
import { getNationalTeam, NATIONAL_TEAMS } from '../xfc-game/src/data/worldcup.js';
import { broadcastCameraPose } from '../xfc-game/src/match3d/camera.js';

test('Kick Off permanece 120×82; a carreira tem gramado 140×96 à parte', () => {
  assert.equal(STANDARD_PITCH.length, 120);
  assert.equal(STANDARD_PITCH.width, 82);
  assert.equal(PITCH.length, STANDARD_PITCH.length);
  assert.equal(PITCH.width, STANDARD_PITCH.width);
  assert.equal(CAREER_PITCH.length, 140);
  assert.equal(CAREER_PITCH.width, 96);
  assert.equal(FORMATION_433.length, 11);
  assert.equal(FORMATION_433[0].role, 'GK');
});

test('câmera de transmissão do Kick Off é a antiga; a da carreira chega mais perto', () => {
  const kickoff = broadcastCameraPose({ x: 0, y: 0, z: 0 }, 1, null, 'standard');
  const career = broadcastCameraPose({ x: 0, y: 0, z: 0 }, 1, null, 'career');
  assert.equal(kickoff.position.y, 16);
  assert.equal(kickoff.position.z, 45);
  assert.ok(career.position.y < kickoff.position.y, 'carreira: lente mais baixa');
  assert.ok(Math.abs(career.position.z) < Math.abs(kickoff.position.z), 'carreira: lente mais perto da lateral');
});

test('Brasil 2022: Neymar 10, Messi e CR7 nas seleções, sem elenco de clube', () => {
  const brazil = getNationalTeam('brazil');
  const argentina = getNationalTeam('argentina');
  const portugal = getNationalTeam('portugal');
  assert.equal(NATIONAL_TEAMS.length, 32);
  assert.ok(brazil.players.some(p => p.name === 'Neymar Jr' && p.number === 10));
  assert.ok(brazil.players.some(p => p.name === 'Vinícius Júnior'));
  assert.ok(brazil.players.some(p => p.name === 'Thiago Silva'));
  assert.ok(brazil.players.some(p => p.name === 'Casemiro'));
  assert.equal(brazil.players.some(p => /Pedri|Gavi|Lewandowski|Haaland/i.test(p.name)), false);
  assert.ok(argentina.players.some(p => p.name === 'Lionel Messi' && p.number === 10));
  assert.ok(portugal.players.some(p => p.name === 'Cristiano Ronaldo' && p.number === 7));
});

test('uniforme do Brasil tem calção azul, não verde', () => {
  const brazil = getNationalTeam('brazil');
  const kit = nationKits(brazil)[0];
  const colors = nationColors(brazil);
  assert.equal(kit.shorts.toLowerCase(), '#183891');
  assert.notEqual(kit.shorts.toLowerCase(), '#16733b');
  assert.equal(colors.shorts.toLowerCase(), '#183891');
  assert.match(kit.socks, /^#ffffff$/i);
});
