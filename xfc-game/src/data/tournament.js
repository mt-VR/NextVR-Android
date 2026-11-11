// Campeonatos do XFC: UEFA Champions League, CONMEBOL Libertadores, Copa
// América e Copa do Mundo.
//
// Cada competição é um torneio de verdade: sorteio dos grupos, tabela de
// classificação, calendário, artilharia e chaveamento do mata-mata. O usuário
// joga as próprias partidas e o restante da rodada é simulado, de modo que a
// classificação e a artilharia avancem junto com ele.
//
// O módulo é puro (sem DOM): as telas consomem as funções daqui e os testes
// podem validar o campeonato inteiro sem abrir o navegador.

import { TEAMS, getTeam } from './teams.js';
import { FIFA_NATIONAL_TEAMS as NATIONAL_TEAMS, getNationalTeam } from './worldcup.js';

const CLUBS = new Set(TEAMS.map(team => team.id));
const NATIONS = new Set(NATIONAL_TEAMS.map(team => team.id));

// Pools editoriais do XFC: todos os clubes cadastrados da região, não uma
// alegação de classificados oficiais da temporada real.
const EUROPEAN_COUNTRIES=new Set(['Espanha','Inglaterra','Grécia','Alemanha','País de Gales','Países Baixos','Escócia','Tchéquia','França','Portugal','Noruega','Suíça','Bélgica','Itália']);
export const BRAZILIAN_CLUBS=TEAMS.filter(t=>t.country==='Brasil').map(t=>t.id);
export const EUROPEAN_CLUBS=TEAMS.filter(t=>EUROPEAN_COUNTRIES.has(t.country)).map(t=>t.id);
const MIXED_LIBERTADORES=[...BRAZILIAN_CLUBS,...EUROPEAN_CLUBS];
const COPA_AMERICA_NATIONS=NATIONAL_TEAMS.filter(t=>t.confederation==='CONMEBOL').map(t=>t.id);

const THEMES = {
  ucl: {
    mark: '✦',
    trophy: 'ucl',
    tagline: 'A maior competição da Europa',
    menuLabel: 'UEFA CHAMPIONS LEAGUE'
  },
  'copa-america': {
    mark: '★',
    trophy: 'copa-america',
    tagline: 'A maior competição da América do Sul',
    menuLabel: 'CONMEBOL COPA AMÉRICA'
  },
  libertadores: {
    mark: '☀',
    trophy: 'libertadores',
    tagline: 'A Glória Eterna',
    menuLabel: 'CONMEBOL LIBERTADORES'
  },
  'world-cup': {
    mark: '♜',
    trophy: 'world-cup',
    tagline: 'A maior Copa do Mundo da história!',
    menuLabel: 'FIFA WORLD CUP™'
  }
};

export const COMPETITIONS = [
  {
    id: 'uefa-champions-league',
    theme: 'ucl',
    name: 'UEFA Champions League',
    shortName: 'Champions League',
    kind: 'clubs',
    entityLabel: 'Clubes',
    entitySingular: 'clube',
    year: '2026/27',
    pool: EUROPEAN_CLUBS,
    groupCount: 8,
    bestThirds: 0,
    stageTitle: 'Grupos · edição XFC ampliada',
    stadiumIndex: 5,
    ...THEMES.ucl
  },
  {
    id: 'copa-america',
    theme: 'copa-america',
    name: 'CONMEBOL Copa América',
    shortName: 'Copa América',
    kind: 'national',
    entityLabel: 'Seleções',
    entitySingular: 'seleção',
    year: '2027',
    pool: COPA_AMERICA_NATIONS,
    groupCount: 2,
    bestThirds: 0,
    stageTitle: 'Fase de grupos',
    stadiumIndex: 3,
    ...THEMES['copa-america']
  },
  {
    id: 'conmebol-libertadores',
    theme: 'libertadores',
    name: 'CONMEBOL Libertadores',
    shortName: 'Libertadores',
    kind: 'clubs',
    entityLabel: 'Clubes',
    entitySingular: 'clube',
    year: '2027',
    pool: MIXED_LIBERTADORES,
    groupCount: 8,
    bestThirds: 0,
    stageTitle: 'Fase de grupos',
    stadiumIndex: 4,
    ...THEMES.libertadores,
    tagline:'Edição personalizada · brasileiros e europeus'
  },
  {
    id: 'world-cup',
    theme: 'world-cup',
    name: 'FIFA World Cup™',
    shortName: 'Copa do Mundo',
    kind: 'national',
    entityLabel: 'Seleções',
    entitySingular: 'seleção',
    year: '2027',
    pool: NATIONAL_TEAMS.map(team => team.id),
    groupCount: 1,
    bestThirds: 0,
    format:'knockout',
    stageTitle: '211 seleções · mata-mata mundial XFC',
    stadiumIndex: 2,
    ...THEMES['world-cup']
  }
];

// Edições compactas com os clubes brasileiros disponíveis no elenco local.
COMPETITIONS.push(
  {id:'copa-do-brasil',theme:'brasil',name:'Copa do Brasil',shortName:'Copa do Brasil',kind:'clubs',entityLabel:'Clubes',entitySingular:'clube',year:'2027',pool:BRAZILIAN_CLUBS,groupCount:1,bestThirds:0,format:'knockout',stageTitle:'Mata-mata · todos os brasileiros',stadiumIndex:0,mark:'🏆',trophy:'libertadores',tagline:`Mata-mata com ${BRAZILIAN_CLUBS.length} clubes brasileiros`,menuLabel:'COPA DO BRASIL'},
  {id:'brasileirao',theme:'brasil',name:'Brasileirão',shortName:'Brasileirão',kind:'clubs',entityLabel:'Clubes',entitySingular:'clube',year:'2027',pool:BRAZILIAN_CLUBS,groupCount:1,bestThirds:0,format:'league',stageTitle:'Pontos corridos · edição XFC',stadiumIndex:0,mark:'★',trophy:'libertadores',tagline:`Turno e returno com ${BRAZILIAN_CLUBS.length} clubes brasileiros`,menuLabel:'BRASILEIRÃO'}
);

export const GROUP_LETTERS = Object.freeze(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

const KNOCKOUT_ORDER = ['r256','r128','r64','r32','r16', 'qf', 'sf', 'final'];
const KNOCKOUT_LABELS = {
  r256:'Preliminar mundial',r128:'Fase de 128',r64:'Fase de 64',r32:'Fase de 32',
  r16: 'Oitavas de final',
  qf: 'Quartas de final',
  sf: 'Semifinais',
  final: 'Final'
};
const KNOCKOUT_NAMES = {
  r256:'PRELIMINAR',r128:'128 SELEÇÕES',r64:'FASE DE 64',r32:'FASE DE 32',
  r16: 'OITAVAS',
  qf: 'QUARTAS',
  sf: 'SEMIFINAL',
  final: 'FINAL'
};

export function getCompetition(competitionId) {
  return COMPETITIONS.find(item => item.id === competitionId) || COMPETITIONS[0];
}

export function stageLabel(stage) {
  return KNOCKOUT_LABELS[stage] || (stage === 'group' ? 'Fase de grupos' : stage);
}

export function knockoutName(stage) {
  return KNOCKOUT_NAMES[stage] || stage.toUpperCase();
}

/* --------------------------------------------------------------- times --- */

function normalizeClub(team) {
  return {
    id: team.id,
    name: team.name,
    shortName: team.shortName || team.name,
    kind: 'club',
    crest: team.crest,
    flagCode: null,
    colors: team.colors,
    stars: team.stars,
    league: team.league,
    country: team.country,
    ratings: {
      att: team.ratings?.att ?? 75,
      mid: team.ratings?.mid ?? 75,
      def: team.ratings?.def ?? 75,
      ovr: team.ratings?.ovr ?? 75
    },
    players: (team.players || []).map((player, index) => ({
      id: player.id || `${team.id}-${index}`,
      name: player.name,
      number: player.number ?? index + 1,
      position: player.pos || player.position || 'CM',
      rating: player.ovr ?? player.rating ?? 75
    }))
  };
}

function normalizeNation(team) {
  const ratings = team.ratings || {};
  const attack = ratings.att ?? ratings.ATT ?? 75;
  const middle = ratings.mid ?? ratings.MID ?? 75;
  const defense = ratings.def ?? ratings.DEF ?? 75;
  return {
    id: team.id,
    name: team.name,
    shortName: team.name,
    kind: 'national',
    crest: null,
    flagCode: team.flagCode,
    colors: team.colors,
    stars: team.stars,
    league: team.squadSource==='fictional'?'Seleções · elenco fictício XFC':'Seleções',
    squadSource:team.squadSource,
    country: team.name,
    ratings: { att: attack, mid: middle, def: defense, ovr: Math.round((attack + middle + defense) / 3) },
    players: (team.players || []).map((player, index) => ({
      id: `${team.id}-${player.number || index + 1}-${index}`,
      name: player.name,
      number: player.number ?? index + 1,
      position: player.position || 'CM',
      rating: player.rating ?? 75
    }))
  };
}

const teamCache = new Map();

export function competitionTeam(teamId) {
  if (teamCache.has(teamId)) return teamCache.get(teamId);
  let team = null;
  if (CLUBS.has(teamId)) team = normalizeClub(getTeam(teamId));
  else if (NATIONS.has(teamId)) team = normalizeNation(getNationalTeam(teamId));
  if (team) teamCache.set(teamId, team);
  return team;
}

export function competitionTeams(competitionId) {
  return getCompetition(competitionId).pool.map(competitionTeam).filter(Boolean);
}

/** XI titular do time, ordenado por posição — usado na escalação pré-jogo. */
export function startingEleven(teamId) {
  const team = competitionTeam(teamId);
  if (!team) return [];
  const order = { GK: 0, RB: 1, CB: 2, LB: 3, CDM: 4, CM: 5, CAM: 6, RM: 7, LM: 8, RW: 9, LW: 10, CF: 11, ST: 12 };
  return [...team.players]
    .sort((first, second) => (order[first.position] ?? 9) - (order[second.position] ?? 9))
    .slice(0, 11);
}

/* -------------------------------------------------------------- sorteio --- */

function shuffle(items, random) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function strengthOf(teamId) {
  const team = competitionTeam(teamId);
  if (!team) return 70;
  return (team.ratings.att + team.ratings.mid + team.ratings.def) / 3;
}

function rulesFor(tournament){
  if(tournament.rules)return tournament.rules;
  // Saves <= v0.5.23: original formats/qualifiers remain unchanged.
  return {format:tournament.competitionId==='brasileirao'?'league':tournament.competitionId==='copa-do-brasil'?'knockout':'groups',bestThirds:['uefa-champions-league','copa-america'].includes(tournament.competitionId)?2:0};
}
function stageForSize(size){return size<=2?'final':size<=4?'sf':size<=8?'qf':`r${size}`;}
function seedKnockout(tournament,ids){
  const size=2**Math.ceil(Math.log2(ids.length)),stage=stageForSize(size);
  const matches=ids.length-size/2;
  tournament.byes||={};tournament.byes[stage]=ids.slice(matches*2);
  tournament.fixtures.push(...Array.from({length:matches},(_,i)=>({id:`${stage}-${i+1}`,stage,round:1,group:null,home:ids[i*2],away:ids[i*2+1],played:false,homeGoals:null,awayGoals:null})));
  tournament.stage=stage;tournament.knockoutStarted=true;
}

/** Cria o campeonato com grupos sorteados e calendário completo. */
export function createTournament(competitionId, { teamId, random = Math.random } = {}) {
  const competition = getCompetition(competitionId);
  const pool = competition.pool.filter(id => competitionTeam(id));
  const chosen = pool.includes(teamId) ? teamId : pool[0];
  const others = shuffle(pool.filter(id => id !== chosen), random);
  const ordered = [chosen, ...others];
  const groupCount = Math.min(competition.groupCount, Math.max(1, Math.floor(pool.length / 3)));
  const groups = {};
  for (let index = 0; index < groupCount; index += 1) {
    groups[GROUP_LETTERS[index]] = [];
  }
  // Distribuição circular: o time do usuário cai no grupo A, que recebe o
  // time extra quando o número de participantes não é múltiplo dos grupos.
  ordered.forEach((id, index) => {
    groups[GROUP_LETTERS[index % groupCount]].push(id);
  });

  const tournament = {
    competitionId: competition.id,
    userTeamId: chosen,
    teams: ordered,
    groups,
    fixtures: competition.format==='knockout'?[]:buildGroupFixtures(groups),
    rules:{format:competition.format||'groups',bestThirds:competition.bestThirds},
    edition:24,
    stage: 'group',
    eliminatedIn: null,
    champion: null,
    runnerUp: null,
    scorers: {},
    kits: { [chosen]: 0 },
    createdAt: Date.now()
  };
  if(competition.format==='knockout'){
    seedKnockout(tournament,shuffle(ordered,random));
  }else if(competition.format==='league'){
    const offset=Math.max(...tournament.fixtures.map(f=>f.round));
    tournament.fixtures.push(...tournament.fixtures.map(f=>({...f,id:f.id+'-return',round:f.round+offset,home:f.away,away:f.home})));
  }
  return tournament;
}

function buildGroupFixtures(groups) {
  const fixtures = [];
  for (const [group, teamIds] of Object.entries(groups)) {
    const legs = [];
    for (let first = 0; first < teamIds.length; first += 1) {
      for (let second = first + 1; second < teamIds.length; second += 1) {
        legs.push([teamIds[first], teamIds[second]]);
      }
    }
    // Cada rodada reúne confrontos sem times repetidos.
    const rounds = [];
    const pending = [...legs];
    while (pending.length) {
      const round = [];
      const used = new Set();
      for (let index = 0; index < pending.length;) {
        const [home, away] = pending[index];
        if (used.has(home) || used.has(away)) {
          index += 1;
          continue;
        }
        used.add(home);
        used.add(away);
        round.push(pending.splice(index, 1)[0]);
      }
      rounds.push(round);
    }
    rounds.forEach((round, roundIndex) => {
      round.forEach(([home, away], index) => {
        fixtures.push({
          id: `g-${group}-${roundIndex + 1}-${index + 1}`,
          stage: 'group',
          group,
          round: roundIndex + 1,
          home,
          away,
          played: false,
          homeGoals: null,
          awayGoals: null
        });
      });
    });
  }
  return fixtures;
}

/* ---------------------------------------------------------- classificação --- */

export function groupTable(tournament, group) {
  const teamIds = tournament.groups[group] || [];
  const table = new Map(teamIds.map(id => [id, {
    id, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, points: 0
  }]));
  for (const fixture of tournament.fixtures) {
    if (fixture.stage !== 'group' || fixture.group !== group || !fixture.played) continue;
    const home = table.get(fixture.home);
    const away = table.get(fixture.away);
    if (!home || !away) continue;
    home.played += 1;
    away.played += 1;
    home.gf += fixture.homeGoals;
    home.ga += fixture.awayGoals;
    away.gf += fixture.awayGoals;
    away.ga += fixture.homeGoals;
    if (fixture.homeGoals > fixture.awayGoals) {
      home.won += 1;
      away.lost += 1;
      home.points += 3;
    } else if (fixture.homeGoals < fixture.awayGoals) {
      away.won += 1;
      home.lost += 1;
      away.points += 3;
    } else {
      home.drawn += 1;
      away.drawn += 1;
      home.points += 1;
      away.points += 1;
    }
  }
  return [...table.values()].sort((first, second) =>
    second.points - first.points
    || (second.gf - second.ga) - (first.gf - first.ga)
    || second.gf - first.gf
    || competitionTeam(first.id).name.localeCompare(competitionTeam(second.id).name)
  );
}

export function allGroupTables(tournament) {
  return Object.keys(tournament.groups).map(group => ({ group, table: groupTable(tournament, group) }));
}

/** Marca a eliminação do usuário ao fim da fase de grupos, se houver. */
export function resolveGroupQualification(tournament) {
  if (!tournament || tournament.eliminatedIn || tournament.stage !== 'group') return tournament;
  if (!groupStageComplete(tournament)) return tournament;
  const competition = rulesFor(tournament);
  const userGroup = Object.keys(tournament.groups)
    .find(group => tournament.groups[group].includes(tournament.userTeamId));
  const table = groupTable(tournament, userGroup);
  const rank = table.findIndex(entry => entry.id === tournament.userTeamId);
  if (rank >= 0 && rank < 2) return tournament;
  if (!competition.bestThirds) {
    tournament.eliminatedIn = 'group';
    tournament.stage = 'eliminated';
    return tournament;
  }
  const thirdPlaces = allGroupTables(tournament)
    .map(({ table: rows }) => rows[2])
    .filter(Boolean)
    .sort((first, second) => second.points - first.points
      || (second.gf - second.ga) - (first.gf - first.ga)
      || second.gf - first.gf);
  const position = thirdPlaces.findIndex(entry => entry.id === tournament.userTeamId);
  if (position < 0 || position >= competition.bestThirds) {
    tournament.eliminatedIn = 'group';
    tournament.stage = 'eliminated';
  }
  return tournament;
}

function groupStageComplete(tournament) {
  return tournament.fixtures
    .filter(fixture => fixture.stage === 'group')
    .every(fixture => fixture.played);
}

/* --------------------------------------------------------------- mata-mata --- */

function qualifiers(tournament) {
  const competition = rulesFor(tournament);
  const tables = allGroupTables(tournament);
  const direct = tables.map(({ group, table }) => table.slice(0, 2).map((entry, index) => ({
    ...entry, group, position: index + 1
  })));
  const second = direct.flat();
  const thirds = tables.map(({ group, table }) => table[2] ? { ...table[2], group, position: 3 } : null)
    .filter(Boolean)
    .sort((first, second) => second.points - first.points
      || (second.gf - second.ga) - (first.gf - first.ga)
      || second.gf - first.gf);
  return [...second, ...thirds.slice(0, competition.bestThirds)].sort((first, second) =>
    first.position - second.position
    || second.points - first.points
    || (second.gf - second.ga) - (first.gf - first.ga)
  );
}

function buildKnockout(tournament) {
  const seeded = qualifiers(tournament);
  const pairs = [];
  const remaining = [...seeded];
  // Confrontos clássicos: o primeiro de um grupo pega o segundo de outro.
  while (remaining.length > 1) {
    const home = remaining.shift();
    let index = remaining.findIndex(candidate => candidate.group !== home.group);
    if (index < 0) index = 0;
    const away = remaining.splice(index, 1)[0];
    pairs.push([home, away]);
  }
  const ids=pairs.flat().map(team=>team.id);
  if(remaining.length)ids.push(remaining[0].id);
  seedKnockout(tournament,ids);
}

function roundFixtures(tournament, stage) {
  return tournament.fixtures.filter(fixture => fixture.stage === stage);
}

function nextStage(stage) {
  const index = KNOCKOUT_ORDER.indexOf(stage);
  return index >= 0 && index < KNOCKOUT_ORDER.length - 1 ? KNOCKOUT_ORDER[index + 1] : null;
}

function createNextRound(tournament, stage) {
  const following = nextStage(stage);
  if (!following) return false;
  const current = roundFixtures(tournament, stage);
  if (!current.length || current.some(fixture => !fixture.played)) return false;
  if (roundFixtures(tournament, following).length) return false;
  const winners=[...current.map(f=>f.winner),...(tournament.byes?.[stage]||[])];
  const fixtures = [];
  for(let i=0;i<winners.length;i+=2){
    if(!winners[i+1])throw new Error('Chaveamento inválido: vencedor sem par');
    fixtures.push({id:`${following}-${i/2+1}`,stage:following,round:1,group:null,home:winners[i],away:winners[i+1],played:false,homeGoals:null,awayGoals:null});
  }
  tournament.fixtures.push(...fixtures);
  tournament.stage = following;
  return true;
}

export function tournamentBracket(tournament) {
  return KNOCKOUT_ORDER
    .map(stage => ({ stage, label: stageLabel(stage), fixtures: roundFixtures(tournament, stage), byes:tournament.byes?.[stage]||[] }))
    .filter(round => round.fixtures.length);
}

export function currentRound(tournament) {
  if (tournament.stage === 'group') {
    return 'group';
  }
  if (KNOCKOUT_ORDER.includes(tournament.stage)) return tournament.stage;
  return null;
}

/* ------------------------------------------------------------ simulação --- */

function pickScorer(teamId, random) {
  const team = competitionTeam(teamId);
  if (!team || !team.players.length) return null;
  const weighted = team.players.map(player => {
    const position = player.position || 'CM';
    const weight = ['ST', 'CF'].includes(position) ? 9
      : ['LW', 'RW'].includes(position) ? 6
        : ['CAM', 'AM'].includes(position) ? 5
          : ['CM', 'LM', 'RM'].includes(position) ? 3
            : ['CDM', 'CM'].includes(position) ? 2 : 1;
    return { player, weight };
  });
  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let roll = random() * total;
  for (const item of weighted) {
    roll -= item.weight;
    if (roll <= 0) return item.player;
  }
  return weighted[weighted.length - 1].player;
}

function registerGoal(tournament, teamId, random) {
  const scorer = pickScorer(teamId, random);
  if (!scorer) return;
  const key = `${teamId}:${scorer.name}`;
  const entry = tournament.scorers[key] || {
    key, teamId, name: scorer.name, number: scorer.number, goals: 0
  };
  entry.goals += 1;
  tournament.scorers[key] = entry;
}

function simulateScore(tournament, home, away, random) {
  const edge = (strengthOf(home) - strengthOf(away)) / 14;
  const homeAdvantage = 0.22;
  const homeLambda = Math.max(0.25, 1.35 + edge + homeAdvantage);
  const awayLambda = Math.max(0.2, 1.05 + edge * 0.6 - homeAdvantage * 0.5);
  return [poisson(homeLambda, random), poisson(awayLambda, random)];
}

function poisson(lambda, random) {
  const limit = Math.exp(-lambda);
  let sum = 0;
  let count = 0;
  do {
    count += 1;
    sum += Math.log(Math.max(random(), 1e-9));
  } while (sum > Math.log(limit) && count < 9);
  return Math.min(7, count - 1);
}

function settleFixture(tournament, fixture, homeGoals, awayGoals, random) {
  fixture.played = true;
  fixture.homeGoals = homeGoals;
  fixture.awayGoals = awayGoals;
  for (let index = 0; index < homeGoals; index += 1) registerGoal(tournament, fixture.home, random);
  for (let index = 0; index < awayGoals; index += 1) registerGoal(tournament, fixture.away, random);
  if (fixture.stage !== 'group') {
    if (homeGoals === awayGoals) {
      // Sem empate no mata-mata: disputa de pênaltis decide.
      const homeWins = random() < 0.5 + (strengthOf(fixture.home) - strengthOf(fixture.away)) / 200;
      fixture.decidedBy = 'penalties';
      fixture.penalties = homeWins ? [5, 4] : [4, 5];
      fixture.winner = homeWins ? fixture.home : fixture.away;
    } else {
      fixture.winner = homeGoals > awayGoals ? fixture.home : fixture.away;
    }
    if (fixture.stage === 'final') {
      tournament.champion = fixture.winner;
      tournament.runnerUp = fixture.winner === fixture.home ? fixture.away : fixture.home;
    }
  }
}

function userAlive(tournament) {
  if (tournament.champion) return tournament.champion === tournament.userTeamId;
  if (tournament.stage === 'eliminated') return false;
  return !tournament.eliminatedIn;
}

export function nextTournamentFixture(tournament) {
  if (!tournament || tournament.champion || tournament.eliminatedIn) {
    const pending = tournament?.fixtures.find(fixture => !fixture.played
      && (fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId));
    return pending || null;
  }
  const order = ['group', ...KNOCKOUT_ORDER];
  const fixtures = [...tournament.fixtures]
    .filter(fixture => !fixture.played && fixture.home && fixture.away
      && (fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId))
    .sort((first, second) => order.indexOf(first.stage) - order.indexOf(second.stage)
      || (first.round || 0) - (second.round || 0));
  return fixtures[0] || null;
}

/** Simula a rodada do usuário, deixando a partida dele para ser jogada. */
export function simulateRound(tournament, { random = Math.random } = {}) {
  if (!tournament) return tournament;
  if(tournament.champion)return tournament;
  if(rulesFor(tournament).format==='league'){
    const upcoming=nextTournamentFixture(tournament);
    for(const fixture of tournament.fixtures){
      if(fixture.played || fixture===upcoming || (upcoming&&fixture.round!==upcoming.round))continue;
      if(fixture.home===tournament.userTeamId||fixture.away===tournament.userTeamId)continue;
      const [hg,ag]=simulateScore(tournament,fixture.home,fixture.away,random);settleFixture(tournament,fixture,hg,ag,random);
    }
    if(groupStageComplete(tournament)){
      const table=groupTable(tournament,'A');tournament.champion=table[0].id;tournament.runnerUp=table[1].id;tournament.stage='champion';
    }
    return tournament;
  }
  const upcoming = nextTournamentFixture(tournament);
  if (tournament.stage === 'group') {
    if (groupStageComplete(tournament)) {
      resolveGroupQualification(tournament);
      if (!tournament.knockoutStarted) buildKnockout(tournament);
      return simulateKnockout(tournament, { random });
    }
    const round = upcoming?.stage === 'group' ? upcoming.round : 1;
    for (const fixture of tournament.fixtures) {
      if (fixture.stage !== 'group' || fixture.played) continue;
      // Sem partida do usuário na rodada, todas as pendentes são simuladas.
      if (upcoming && fixture.round !== round) continue;
      if (fixture === upcoming) continue;
      if (fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId) continue;
      const [homeGoals, awayGoals] = simulateScore(tournament, fixture.home, fixture.away, random);
      settleFixture(tournament, fixture, homeGoals, awayGoals, random);
    }
    if (groupStageComplete(tournament)) {
      resolveGroupQualification(tournament);
      if (!tournament.knockoutStarted) buildKnockout(tournament);
      simulateKnockout(tournament, { random });
    }
    return tournament;
  }
  return simulateKnockout(tournament, { random });
}

function simulateKnockout(tournament, { random }) {
  for (let guard = 0; guard < 12; guard += 1) {
    const stage = KNOCKOUT_ORDER.find(name => {
      const fixtures = roundFixtures(tournament, name);
      return fixtures.length && fixtures.some(fixture => !fixture.played);
    });
    if (!stage) {
      createNextRound(tournament, tournament.stage);
      const following = roundFixtures(tournament, tournament.stage);
      if (!following.length) break;
      continue;
    }
    const upcoming = nextTournamentFixture(tournament);
    let simulated = false;
    for (const fixture of roundFixtures(tournament, stage)) {
      if (fixture.played) continue;
      if (fixture === upcoming && userAlive(tournament)) continue;
      if ((fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId)
        && userAlive(tournament)) continue;
      const [homeGoals, awayGoals] = simulateScore(tournament, fixture.home, fixture.away, random);
      settleFixture(tournament, fixture, homeGoals, awayGoals, random);
      simulated = true;
      if (fixture.stage !== 'final'
        && (fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId)
        && fixture.winner !== tournament.userTeamId) {
        tournament.eliminatedIn = fixture.stage;
      }
    }
    if (!simulated) break;
  }
  if (tournament.champion && tournament.champion !== tournament.userTeamId) {
    // O usuário pode ter sido eliminado antes; o campeão segue registrado.
    tournament.stage = 'champion';
  } else if (tournament.champion) {
    tournament.stage = 'champion';
  }
  return tournament;
}

/* ------------------------------------------------------------- resultados --- */

/** Registra o resultado da partida jogada pelo usuário. */
export function recordTournamentResult(tournament, fixtureId, homeGoals, awayGoals, { random = Math.random } = {}) {
  if (!tournament) return tournament;
  const fixture = tournament.fixtures.find(item => item.id === fixtureId);
  if (!fixture || fixture.played) return tournament;
  settleFixture(tournament, fixture, homeGoals, awayGoals, random);
  const userWasIn = fixture.home === tournament.userTeamId || fixture.away === tournament.userTeamId;
  if (userWasIn && fixture.stage !== 'group' && fixture.winner !== tournament.userTeamId) {
    tournament.eliminatedIn = fixture.stage;
  }
  if (tournament.champion) {
    tournament.stage = 'champion';
    if (tournament.champion !== tournament.userTeamId && !tournament.eliminatedIn) {
      tournament.eliminatedIn = 'final';
    }
  } else if (tournament.eliminatedIn === 'group') {
    tournament.stage = 'eliminated';
  }
  simulateRound(tournament, { random });
  return tournament;
}

export function tournamentScorers(tournament, limit = 20) {
  if (!tournament) return [];
  return Object.values(tournament.scorers)
    .sort((first, second) => second.goals - first.goals
      || competitionTeam(first.teamId)?.name.localeCompare(competitionTeam(second.teamId)?.name || '') || 0)
    .slice(0, limit);
}

/** Texto curto da situação do usuário no campeonato. */
export function tournamentStatus(tournament) {
  if (!tournament) return { stage: 'setup', label: 'Sorteio pendente', detail: 'Escolha um time para começar.' };
  const competition = getCompetition(tournament.competitionId);
  if (tournament.champion === tournament.userTeamId) {
    return { stage: 'champion', label: 'Campeão', detail: `Você levantou a taça da ${competition.shortName}.` };
  }
  if (tournament.champion) {
    return {
      stage: 'finished',
      label: 'Campeonato encerrado',
      detail: `${competitionTeam(tournament.champion).name} ficou com o título.`
    };
  }
  if (tournament.eliminatedIn) {
    return {
      stage: 'eliminated',
      label: `Eliminado · ${stageLabel(tournament.eliminatedIn)}`,
      detail: 'Você ainda pode acompanhar o restante do campeonato.'
    };
  }
  const upcoming = nextTournamentFixture(tournament);
  if (!upcoming) {
    return { stage: 'waiting', label: 'Aguardando a rodada', detail: 'Os outros jogos estão em andamento.' };
  }
  const stage = upcoming.stage === 'group' ? `${competition.format==='league'?'Pontos corridos':'Grupo '+upcoming.group} · Rodada ${upcoming.round}` : stageLabel(upcoming.stage);
  return { stage: 'playing', label: stage, detail: 'Sua próxima partida está liberada.' };
}

/** Valida um campeonato salvo (versão antiga ou corrompida cai no sorteio). */
export function isTournamentValid(tournament) {
  if (!tournament || !getCompetition(tournament.competitionId)) return false;
  if (tournament.competitionId !== getCompetition(tournament.competitionId).id) return false;
  if (!competitionTeam(tournament.userTeamId)) return false;
  if (!Array.isArray(tournament.fixtures) || !tournament.fixtures.length) return false;
  if (!tournament.groups || typeof tournament.groups !== 'object') return false;
  return tournament.fixtures.every(fixture => competitionTeam(fixture.home) && competitionTeam(fixture.away));
}
