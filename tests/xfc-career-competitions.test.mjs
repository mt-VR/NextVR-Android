import test from 'node:test';
import assert from 'node:assert/strict';
import {
  careerCompetitions, continentalRoundName, isEuropeanCareer, nationalCallup, nationCode,
  seasonAwards, recordCareerAward, careerAwardCase, pendingAwardCinematic,
  completeAwardCinematic, awardNeedsCinematic, callupNews
} from '../xfc-game/src/data/career-competitions.js';
import { createCareer, beginCareerMatch, settleCareer, careerFixture } from '../xfc-game/src/data/career.js';
import { getNationalTeam } from '../xfc-game/src/data/worldcup.js';
import { negotiationChance, EUROPEAN_CLUBS } from '../xfc-game/src/data/career-market.js';
import { getTeam, TEAMS } from '../xfc-game/src/data/teams.js';
import { REAL_SQUADS, squadNames, CLUB_STRENGTH } from '../xfc-game/src/data/real-squads.js';
import { kitsOf } from '../xfc-game/src/data/kits.js';

const strongCareer = (clubId = 'fc-barcelona') => {
  const career = createCareer({ clubId, name: 'Craque' });
  for (const key of Object.keys(career.player.stats)) career.player.stats[key] = 91;
  career.totals = { matches: 15, goals: 24, shots: 70, passes: 330 };
  return career;
};

test('competicoes: clube europeu joga a Champions; brasileiro joga a Libertadores', () => {
  const european = createCareer({ clubId: 'fc-barcelona' });
  assert.equal(isEuropeanCareer(european), true);
  const comps = careerCompetitions(european);
  assert.deepEqual(comps.map(c => c.id), ['league', 'champions']);
  assert.equal(comps[1].name, 'UEFA Champions League');
  assert.equal(continentalRoundName(european), 'Fase de grupos da Champions');

  const brazilian = createCareer({ clubId: 'flamengo' });
  assert.equal(isEuropeanCareer(brazilian), false);
  const brComps = careerCompetitions(brazilian);
  assert.equal(brComps[1].id, 'libertadores');
  assert.equal(brComps[1].name, 'CONMEBOL Libertadores');
  assert.ok(!brComps.some(c => /Champions/.test(c.name)), 'brasileiro nao entra na Champions');
});

test('convocacao: so atleta com overall e jogos suficientes entra na Copa', () => {
  const rookie = createCareer({ clubId: 'santos', name: 'Novato' });
  rookie.totals = { matches: 1, goals: 0, shots: 1, passes: 2 };
  assert.equal(nationalCallup(rookie).called, false);

  const star = strongCareer('real-madrid');
  const call = nationalCallup(star);
  assert.equal(call.called, true);
  assert.equal(call.nationId, 'brazil');
  assert.ok(call.confidence > 80, 'confianca do tecnico: ' + call.confidence);
  assert.match(callupNews(star), /Convocado/);
  assert.equal(nationCode('Espanha'), 'spain');
  assert.equal(nationCode('Brasil'), 'brazil');
});

test('premios: Bola de Ouro e Puskas exigem temporada de craque e pedem cutscene', () => {
  const star = strongCareer('real-madrid');
  const awards = seasonAwards(star);
  const ids = awards.map(a => a.id);
  for (const id of ['ballon-dor', 'puskas', 'golden-boot', 'best-playmaker', 'golden-boy']) {
    assert.ok(ids.includes(id), 'premio presente: ' + id);
  }
  const ballon = awards.find(a => a.id === 'ballon-dor');
  assert.equal(ballon.won, true);
  assert.equal(awardNeedsCinematic(ballon), true, 'Bola de Ouro tem cerimonia');
  assert.equal(awardNeedsCinematic(awards.find(a => a.id === 'puskas')), true);
  assert.equal(awardNeedsCinematic(awards.find(a => a.id === 'golden-boot')), true, 'Chuteira de Ouro tem cerimonia');

  const weak = createCareer({ clubId: 'santos', name: 'Reserva' });
  weak.totals = { matches: 6, goals: 1, shots: 4, passes: 40 };
  const weakBallon = seasonAwards(weak).find(a => a.id === 'ballon-dor');
  assert.equal(weakBallon.won, false, 'sem overall/gols nao ganha a Bola de Ouro');
});

test('Bola de Ouro entra no save no último jogo da temporada, não na próxima', () => {
  const career = strongCareer('real-madrid');
  career.totals = { matches: 0, goals: 0, shots: 0, passes: 0 };
  for (let i = 0; i < 14; i += 1) {
    const fixture = careerFixture(career);
    const pending = beginCareerMatch(career);
    const score = fixture.home === career.clubId ? [3, 0] : [0, 3];
    assert.ok(settleCareer(career, pending.id, score, { goals: 2, shots: 5, passes: 22 }));
  }
  assert.equal(career.round, 14);
  const pending = pendingAwardCinematic(career);
  assert.equal(pending?.id, 'ballon-dor', 'a cerimônia fica pronta assim que a temporada acaba');
  assert.equal(pending.shown, false);
});

test('premios ficam gravados uma vez e a cutscene nao repete', () => {
  const career = strongCareer('real-madrid');
  career.season = 3;
  const ballon = seasonAwards(career).find(a => a.id === 'ballon-dor');
  assert.equal(recordCareerAward(career, ballon), true);
  assert.equal(recordCareerAward(career, ballon), false, 'nao duplica na mesma temporada');
  assert.equal(careerAwardCase(career).length, 1);
  assert.equal(careerAwardCase(career)[0].shown, false);

  const pending = pendingAwardCinematic(career);
  assert.equal(pending.id, 'ballon-dor');
  assert.equal(completeAwardCinematic(career, 'ballon-dor'), true);
  assert.equal(pendingAwardCinematic(career), null, 'a cerimonia ja foi vista');
});

test('mercado: clube maior e mais dificil que clube menor no mesmo overall', () => {
  const career = createCareer({ clubId: 'santos', name: 'Atleta' });
  for (const key of Object.keys(career.player.stats)) career.player.stats[key] = 76;
  const real = negotiationChance(career, 'real-madrid');
  const arsenal = negotiationChance(career, 'arsenal');
  assert.ok(real < arsenal, 'Real ' + real + ' < Arsenal ' + arsenal);
  for (const key of Object.keys(career.player.stats)) career.player.stats[key] = 92;
  assert.ok(negotiationChance(career, 'real-madrid') > 0.5, 'craque entra no Real');
  assert.equal(EUROPEAN_CLUBS.length, 8);
});

test('elencos reais: Hugo Souza e do Corinthians, nao do Flamengo', () => {
  const flamengo = squadNames('flamengo');
  const corinthians = squadNames('corinthians');
  assert.ok(!flamengo.includes('Hugo Souza'), 'Hugo Souza nao esta no Flamengo');
  assert.ok(corinthians.includes('Hugo Souza'), 'Hugo Souza aparece no Corinthians');
  const fla = getTeam('flamengo');
  assert.equal(fla.players.length, 11);
  assert.equal(fla.substitutes.length, 7);
  assert.equal(fla.players[0].pos, 'GK', 'o XI comeca no goleiro');
  assert.ok(fla.players.some(p => p.name === 'Pedro'));
  assert.ok(fla.players.some(p => p.name === 'De Arrascaeta'));
  assert.equal(getTeam('corinthians').players.some(p => p.name === 'Hugo Souza'), true);
});

test('elencos reais: todos os clubes do pacote ficam com XI, banco e tres uniformes', () => {
  assert.equal(Object.keys(REAL_SQUADS).length, 17, 'dez brasileiros e sete europeus');
  for (const [clubId, squad] of Object.entries(REAL_SQUADS)) {
    const team = getTeam(clubId);
    assert.ok(team, 'clube existe: ' + clubId);
    assert.equal(team.players.length, 11, clubId + ': onze em campo');
    assert.equal(team.substitutes.length, 7, clubId + ': sete reservas');
    assert.equal(team.players.filter(p => p.pos === 'GK').length >= 1, true, clubId + ': goleiro');
    assert.equal(team.squadSource, 'real', clubId + ': marcado como elenco real');
    assert.equal(team.ratings.ovr, CLUB_STRENGTH[clubId], clubId + ': forca do clube');
    assert.ok(squad.length >= 17, clubId + ": convocacao com banco");
    assert.ok(kitsOf(clubId).length >= 3, clubId + ': tres uniformes');
    const ids = team.players.map(p => p.id);
    assert.equal(new Set(ids).size, ids.length, clubId + ': ids unicos');
  }
  assert.ok(getTeam('real-madrid').ratings.ovr > getTeam('celtic').ratings.ovr);
  assert.equal(TEAMS.filter(t => t.squadSource === 'real').length, 17);
});

test('selecoes jogaveis: 11 titulares e sete convocados no banco', () => {
  for (const id of ['brazil', 'england', 'netherlands', 'argentina']) {
    const team = getNationalTeam(id);
    assert.equal(team.players.length, 11, id + ': onze titulares');
    assert.equal(team.players.filter(p => p.position === 'GK').length, 1, id + ': um goleiro');
    assert.equal(team.bench.length, 7, id + ': sete reservas convocados');
    assert.equal(new Set([...team.players, ...team.bench].map(p => p.number)).size, 18, id + ': numeros unicos');
  }
  assert.ok(getNationalTeam('brazil').players.some(p => p.name === 'Vinicius Junior' || p.name === 'Vinícius Júnior'));
  assert.ok(getNationalTeam('brazil').players.some(p => p.name === 'Raphinha'));
});
