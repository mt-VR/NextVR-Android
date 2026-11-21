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

test('dois clubes da Espanha disparam o placar LaLiga', async () => {
  const { readFile } = await import('node:fs/promises');
  const hud = await readFile('xfc-game/src/match3d/hud.js', 'utf8');
  assert.match(hud, /spanishLeague/);
  assert.match(hud, /hud__scoreboard--laliga/);
  assert.match(hud, /laliga-board/);
  assert.match(hud, /assets\/hud\/laliga-print\.png/);
  assert.equal((await import('node:fs')).existsSync('xfc-game/assets/hud/laliga-print.png'), true);
  const barca = TEAMS.find(t => t.id === 'fc-barcelona');
  const madrid = TEAMS.find(t => t.id === 'real-madrid');
  assert.equal(barca.country, 'Espanha');
  assert.equal(madrid.country, 'Espanha');
});
