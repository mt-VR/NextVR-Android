import test from 'node:test';
import assert from 'node:assert/strict';
import {TEAMS, getTeam} from '../xfc-game/src/data/teams.js';
import {LEAGUES, leagueOfClub, leagueClubs, isEuropeanCountry} from '../xfc-game/src/data/leagues.js';
import {createCareer, careerLeague, careerLeagueName, careerFixture, currentCareer, migrateCareerLeague} from '../xfc-game/src/data/career.js';
import {changeCareerClub, negotiateCareerClub} from '../xfc-game/src/data/career-market.js';
import {careerSchedule} from '../xfc-game/src/data/career-services.js';
import {getCompetition, createTournament, competitionTeams} from '../xfc-game/src/data/tournament.js';
import {kitsOf} from '../xfc-game/src/data/kits.js';

// A queixa: assinar com um clube da Europa e continuar no Brasileirão. A liga
// do save precisa ser a do PAÍS do clube, com os clubes daquele campeonato.

test('LaLiga completa: os 17 clubes espanhóis novos estão no catálogo com escudo', () => {
  const espanha = TEAMS.filter(team => team.country === 'Espanha');
  assert.equal(espanha.length, 20, 'os vinte clubes da LaLiga');
  for (const id of ['athletic-bilbao', 'atletico-madrid', 'osasuna', 'celta-vigo', 'deportivo-la-coruna',
    'alaves', 'elche', 'getafe', 'malaga', 'espanyol', 'racing-santander', 'rayo-vallecano',
    'real-betis', 'real-sociedad', 'sevilla', 'valencia', 'villarreal']) {
    const club = getTeam(id);
    assert.ok(club, `${id} existe`);
    assert.equal(club.league, 'LaLiga');
    assert.equal(club.crest, `assets/crests/${id}.png`);
    assert.ok(club.players.length === 11 && club.substitutes.length, `${id} tem elenco`);
    assert.equal(kitsOf(id).length, 3, `${id} tem três uniformes`);
  }
  assert.equal(new Set(TEAMS.map(team => team.id)).size, TEAMS.length, 'sem clube duplicado');
});

test('a liga do save é a do país do clube: Barcelona na LaLiga, Santos no Brasileirão', () => {
  const barcelona = createCareer({clubId: 'fc-barcelona'});
  assert.equal(careerLeagueName(barcelona), 'LaLiga');
  assert.equal(barcelona.league.name, 'LaLiga');
  assert.equal(barcelona.league.rounds.length, 14);
  const clubs = barcelona.league.clubs;
  assert.equal(clubs.length, 8);
  assert.ok(clubs.includes('fc-barcelona'));
  assert.ok(clubs.every(id => getTeam(id).country === 'Espanha'), 'só clubes espanhóis na liga espanhola');
  assert.ok(clubs.includes('real-madrid') && clubs.includes('atletico-madrid'), 'os rivais de verdade aparecem');

  const santos = createCareer({clubId: 'santos'});
  assert.equal(careerLeagueName(santos), 'Brasileirão Série A');
  assert.ok(santos.league.clubs.every(id => getTeam(id).country === 'Brasil'), 'a liga brasileira só tem brasileiros');
});

test('trocar de clube na Europa troca o campeonato, não a liga de origem', () => {
  const career = createCareer({clubId: 'santos'});
  assert.equal(careerLeagueName(career), 'Brasileirão Série A');
  assert.equal(negotiateCareerClub(career, 'fc-barcelona', () => 0.1).ok, true);
  assert.equal(career.clubId, 'fc-barcelona');
  assert.equal(careerLeagueName(career), 'LaLiga', 'assinou com o Barcelona: sai do Brasileirão');
  assert.ok(career.league.clubs.every(id => getTeam(id).country === 'Espanha'));
  assert.equal(careerSchedule(career).length, 14, 'a temporada continua com 14 jogos do clube');

  // Premier League e Bundesliga seguem a mesma regra.
  assert.equal(changeCareerClub(career, 'arsenal', 'transfer'), true);
  assert.equal(careerLeagueName(career), 'Premier League');
  assert.ok(career.league.clubs.includes('arsenal'));
  assert.equal(changeCareerClub(career, 'bayern-munich', 'transfer'), true);
  assert.equal(careerLeagueName(career), 'Bundesliga');
  assert.ok(career.league.clubs.includes('borussia-dortmund'), 'o Bayern joga contra os alemães');
});

test('as cinco grandes ligas europeias têm pelo menos oito clubes no catálogo', () => {
  for (const [country, league] of Object.entries(LEAGUES)) {
    if (!isEuropeanCountry(country)) continue;
    const clubs = leagueClubs(league.clubs[1] || league.clubs[0]);
    assert.equal(clubs.length, 8, `${country} monta uma liga de oito`);
    const european = clubs.filter(id => isEuropeanCountry(getTeam(id).country)).length;
    assert.ok(european >= 8 || league.clubs.length < 8, `${country} não mistura clube de fora do continente`);
  }
  assert.ok(LEAGUES.Espanha.clubs.length >= 20);
  assert.ok((LEAGUES.Inglaterra?.clubs.length || 0) >= 16);
  assert.ok((LEAGUES.Alemanha?.clubs.length || 0) >= 15);
  assert.ok((LEAGUES['Países Baixos']?.clubs.length || 0) >= 9, 'a Eredivisie saiu de 1 clube');
  assert.ok((LEAGUES.Escócia?.clubs.length || 0) >= 10);
});

test('Champions usa os clubes das ligas completas e sorteia 32, sem calendário infinito', () => {
  const competition = getCompetition('uefa-champions-league');
  assert.ok(competition.pool.length >= 130, 'todo o catálogo europeu entra no pote');
  assert.ok(competition.pool.includes('sevilla') && competition.pool.includes('arsenal'));
  assert.ok(competition.pool.includes('ajax') && competition.pool.includes('rangers'));
  assert.equal(competitionTeams('uefa-champions-league').length, 32, 'a tela lista o pote do sorteio');
  const tournament = createTournament('uefa-champions-league', {teamId: 'fc-barcelona', random: () => 0.42});
  assert.equal(tournament.teams.length, 32);
  assert.equal(Object.keys(tournament.groups).length, 8);
  assert.ok(tournament.fixtures.length <= 48, '48 jogos de grupos no máximo');
  const career = createCareer({clubId: 'fc-barcelona'});
  assert.equal(careerFixture(career).home === 'fc-barcelona' || careerFixture(career).away === 'fc-barcelona', true);
});

test('clubes grandes da coleção têm força de clube grande na carreira', () => {
  assert.equal(getTeam('bayern-munich').ratings.ovr, 87);
  assert.equal(getTeam('bayern-munich').stadium, 'Allianz Arena');
  assert.ok(getTeam('bayern-munich').stars >= 5);
  assert.ok(getTeam('psg').ratings.ovr >= 86, 'PSG não entra com 75');
  assert.ok(getTeam('liverpool').ratings.ovr >= 86);
});

test('save antigo no Barcelona é migrado do "Brasileirão" para a LaLiga na leitura', () => {
  const career = createCareer({clubId: 'fc-barcelona'});
  // Save da versão anterior: liga montada com clubes brasileiros e sem nome.
  career.league = {clubs: ['fc-barcelona', 'santos', 'flamengo', 'palmeiras',
    'corinthians', 'botafogo', 'ceara', 'avai'], rounds: career.league.rounds};
  career.round = 5;
  const profile = {career};
  const loaded = currentCareer(profile);
  assert.equal(loaded, career);
  assert.equal(loaded.league.name, 'LaLiga');
  assert.equal(loaded.league.clubs.length, 8);
  assert.ok(loaded.league.clubs.every(id => getTeam(id).country === 'Espanha'));
  assert.equal(loaded.round, 0, 'a temporada recomeça no campeonato certo');
  assert.equal(migrateCareerLeague(career), false, 'não migra duas vezes');
  // Save já correto (Brasileirão no Santos) não é tocado.
  const santos = createCareer({clubId: 'santos'});
  assert.equal(migrateCareerLeague(santos), false);
  assert.equal(santos.league.name, 'Brasileirão Série A');
});
