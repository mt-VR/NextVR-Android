import test from 'node:test';
import assert from 'node:assert/strict';
import {EUROPEAN_CLUBS, careerOffers, negotiateCareerClub, negotiationChance, answerOffer, changeCareerClub} from '../xfc-game/src/data/career-market.js';
import {createCareer, careerTeam, careerOverall, careerLeague} from '../xfc-game/src/data/career.js';
import {getTeam, TEAMS} from '../xfc-game/src/data/teams.js';

test('mercado: oito clubes da Europa existentes no catálogo, sem duplicar', () => {
  assert.equal(EUROPEAN_CLUBS.length, 8);
  assert.equal(new Set(EUROPEAN_CLUBS).size, 8);
  for (const id of EUROPEAN_CLUBS) {
    assert.ok(getTeam(id), `clube do mercado existe: ${id}`);
    assert.notEqual(getTeam(id).country, 'Brasil');
  }
  // v0.5.50: a chance deixou de ser 50/50 — clube melhor exige mais overall.
  const weak=createCareer({clubId:'santos',name:'Atleta'});
  for(const k in weak.player.stats)weak.player.stats[k]=78;
  assert.ok(negotiationChance(weak,'real-madrid')<negotiationChance(weak,'arsenal'),
    'clube maior é mais difícil que o menor');
});

test('ofertas: três clubes por temporada, estáveis na mesma temporada e nunca o clube atual', () => {
  const career = createCareer({clubId: 'santos', name: 'Atleta'});
  const offers = careerOffers(career);
  assert.equal(offers.length, 3);
  assert.deepEqual(careerOffers(career).map(o => o.clubId), offers.map(o => o.clubId), 'a mesma temporada mostra as mesmas ofertas');
  assert.ok(offers.every(o => o.clubId !== career.clubId));
  assert.ok(offers.every(o => o.decision === 'pending'));
  career.season++;
  assert.notDeepEqual(careerOffers(career).map(o => o.clubId), offers.map(o => o.clubId), 'temporada nova, sorteio novo');
});

test('negociação: chance do clube decide aceite; recusa mantém o clube e aceite troca de verdade', () => {
  const career = createCareer({clubId: 'santos', name: 'Atleta'});
  // Sorteio injetado acima de qualquer chance: sempre recusa.
  const refused = negotiateCareerClub(career, 'real-madrid', () => 0.999);
  assert.equal(refused.ok, false);
  assert.equal(refused.reason, 'refused');
  assert.equal(career.clubId, 'santos', 'clube recusando: o jogador não se muda');
  const accepted = negotiateCareerClub(career, 'real-madrid', () => 0);
  assert.equal(accepted.ok, true);
  assert.equal(career.clubId, 'real-madrid');
  assert.ok(career.league.clubs.includes('real-madrid'), 'a liga do save passa a ser a do clube novo');
  assert.equal(career.market.attempts.length, 2);
  assert.equal(career.market.attempts[0].accepted, false);
  assert.equal(career.market.attempts[1].accepted, true);
});

test('negociação recusa clube fora da lista, clube atual e partida pendente', () => {
  const career = createCareer({clubId: 'santos'});
  assert.equal(negotiateCareerClub(career, 'santos', () => 0).reason, 'same');
  assert.equal(negotiateCareerClub(career, 'ibis-esporte', () => 0).reason, 'club');
  career.pending = {id: 'pendente'};
  assert.equal(negotiateCareerClub(career, 'liverpool', () => 0).reason, 'pending');
  assert.equal(career.clubId, 'santos');
});

test('troca de clube preserva atleta, overall e histórico e reinicia a temporada local', () => {
  const career = createCareer({clubId: 'santos', name: 'Atleta', appearance: {hairStyle: 'mohawk'}});
  const before = {ovr: careerOverall(career), name: career.player.name, look: {...career.player.appearance}};
  career.round = 5;
  career.league.rounds[0][0].score = [2, 1];
  assert.equal(changeCareerClub(career, 'bayern-munich', 'offer'), true);
  assert.equal(career.clubId, 'bayern-munich');
  assert.equal(career.round, 0);
  assert.equal(careerOverall(career), before.ovr);
  assert.equal(career.player.name, before.name);
  assert.deepEqual(career.player.appearance, before.look);
  assert.equal(career.history.at(-1).clubId, 'santos');
  assert.equal(career.history.at(-1).type, 'offer');
  assert.deepEqual(career.league, careerLeague('bayern-munich', career.season));
  assert.equal(careerTeam(career).players.find(p => p.id === 'career-player').name, 'Atleta');
});

test('oferta: aceitar e recusar ficam gravados uma única vez', () => {
  const career = createCareer({clubId: 'santos'});
  const [first, second] = careerOffers(career);
  assert.equal(answerOffer(career, first.clubId, 'accepted'), true);
  assert.equal(answerOffer(career, first.clubId, 'declined'), false, 'não muda a resposta já dada');
  assert.equal(careerOffers(career).find(o => o.clubId === first.clubId).decision, 'accepted');
  assert.equal(careerOffers(career).find(o => o.clubId === second.clubId).decision, 'pending');
  assert.equal(answerOffer(career, 'free-club', 'accepted'), false, 'clube sem oferta não é respondido');
});

test('clubes novos da atualização (Cruzeiro e etc.) entram na carreira com liga e estádio', () => {
  const recent = ['cruzeiro', 'vasco-da-gama', 'fluminense', 'ceara', 'avai', 'nautico', 'sampaio-correa', 'internacional', 'sao-paulo', 'botafogo'];
  for (const id of recent) {
    const team = getTeam(id);
    assert.ok(team, `${id} existe no catálogo`);
    assert.equal(team.league, 'Brasileirão Série A', `${id} tem campeonato na carreira`);
    assert.ok(team.stadium && team.stadium !== 'Elenco fictício', `${id} tem estádio no save`);
    const league = careerLeague(id, 1);
    assert.ok(league.clubs.includes(id), `${id} aparece na liga da própria carreira`);
    assert.equal(league.clubs.length, 8);
    assert.ok(league.clubs.every(club => getTeam(club)), 'a liga só tem clubes do catálogo');
    assert.equal(team.players.length, 11);
    assert.equal(TEAMS.filter(t => t.id === id).length, 1, 'sem clube duplicado');
  }
});
