import test from 'node:test';
import assert from 'node:assert/strict';
import { ensureUltimate, setUtIdentity, ultimateMatchTeam, beginUtMatch } from '../xfc-game/src/data/ultimate.js';
import { TEAMS } from '../xfc-game/src/data/teams.js';

test('Ultimate Team: nome e brasão do clube são personalizáveis', () => {
  const profile = { coins: 5000 };
  const u = ensureUltimate(profile);
  assert.equal(u.clubName, 'Meu Clube XFC');
  assert.match(u.clubLogo, /xfc-icon/);
  const saved = setUtIdentity(profile, { name: 'Estrela FC', logo: 'assets/crests/fc-barcelona.png' });
  assert.equal(saved.clubName, 'Estrela FC');
  assert.equal(saved.clubLogo, 'assets/crests/fc-barcelona.png');
  assert.equal(profile.ut.clubName, 'Estrela FC');
  const dataUrl = 'data:image/png;base64,aaaa';
  setUtIdentity(profile, { logo: dataUrl });
  assert.equal(profile.ut.clubLogo, dataUrl);
  setUtIdentity(profile, { name: '   ' });
  assert.equal(profile.ut.clubName, 'Meu Clube XFC');
});

test('partida UT usa o nome e o brasão escolhidos', () => {
  const profile = { coins: 8000 };
  ensureUltimate(profile);
  setUtIdentity(profile, { name: 'Aurora', logo: 'assets/crests/real-madrid.png' });
  const started = beginUtMatch(profile, 'battles');
  assert.equal(started.ok, true);
  const team = ultimateMatchTeam(profile, started.match.id);
  assert.equal(team.name, 'Aurora');
  assert.equal(team.crest, 'assets/crests/real-madrid.png');
});

test('brasão do Brasil no UT altera só a identidade visual, não o elenco inicial', () => {
  const profile = { coins: 8000 };
  const u = ensureUltimate(profile);
  const squad = u.squads.find((entry) => entry.id === u.active);
  const initialSlots = [...squad.slots];
  const initialCards = u.inventory.map(({ uid, cardId }) => [uid, cardId]);
  const initialName = u.clubName;

  setUtIdentity(profile, { logo: 'assets/crests/nations/br.png' });

  assert.equal(u.clubLogo, 'assets/crests/nations/br.png');
  assert.equal(u.clubName, initialName);
  assert.deepEqual(squad.slots, initialSlots);
  assert.deepEqual(u.inventory.map(({ uid, cardId }) => [uid, cardId]), initialCards);

  const started = beginUtMatch(profile, 'battles');
  assert.equal(started.ok, true);
  const team = ultimateMatchTeam(profile, started.match.id);
  assert.equal(team.id, 'xfc-ut');
  assert.equal(team.name, initialName);
  assert.equal(team.crest, 'assets/crests/nations/br.png');
  assert.notEqual(team.isNationalTeam, true);
  assert.deepEqual(team.players.map((player) => player.id), initialSlots);
  assert.ok(team.players.every((player) => player.teamId === 'fc-barcelona'));
});

test('dois clubes da Espanha disparam o placar LaLiga', async () => {
  const { readFile } = await import('node:fs/promises');
  const hud = await readFile('xfc-game/src/match3d/hud.js', 'utf8');
  assert.match(hud, /spanishLeague/);
  assert.match(hud, /hud__scoreboard--laliga/);
  assert.match(hud, /laliga-board/);
  assert.match(hud, /assets\/hud\/laliga-print\.png/);
  const { existsSync } = await import('node:fs');
  assert.equal(existsSync('xfc-game/assets/hud/laliga-print.png'), true);
  assert.match(await readFile('xfc-game/index.html', 'utf8'), /laliga-board\.css/);
  assert.equal(existsSync('xfc-game/styles/laliga-board.css'), true);
  const barca = TEAMS.find(t => t.id === 'fc-barcelona');
  const madrid = TEAMS.find(t => t.id === 'real-madrid');
  assert.equal(barca.country, 'Espanha');
  assert.equal(madrid.country, 'Espanha');
});
