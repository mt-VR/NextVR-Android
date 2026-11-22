// Seleção, convocação, Copa e prêmios individuais da carreira.
//
// Antes o modo carreira era só clube: não existia seleção, Copa do Mundo,
// Bola de Ouro nem Puskás. Aqui ficam as regras — puras e determinísticas —
// que a tela e a partida consomem:
//
// - `nationalCallup`: se o seu atleta merece convocação (overall + fase).
// - `careerCompetitions`: os campeonatos da temporada (liga + Champions, ou
//   liga + Libertadores fora da Europa; a Champions não aceita brasileiros).
// - `seasonAwards`: Bola de Ouro, Puskás, Chuteira de Ouro etc.
// - `careerCinematic`: quando o prêmio merece cutscene.
import {getTeam} from './teams.js';
import {careerOverall, CAREER_NATIONS} from './career.js';
import {EUROPEAN_CLUBS} from './career-market.js';

/** Seleções com elenco no jogo, pelo nome que o save guarda. */
export const NATION_CODES = {
  Brasil: 'brazil', Espanha: 'spain', Argentina: 'argentina', Portugal: 'portugal',
  França: 'france', Inglaterra: 'england', Itália: 'italy', Alemanha: 'germany'
};

export const nationCode = nationality => NATION_CODES[nationality] || 'brazil';

/**
 * O ano de Copa do Mundo na carreira. Cada temporada tem 14 partidas e a Copa
 * cai a cada 4 temporadas — como um ciclo olímpico, mas de futebol: 1, 5, 9...
 * O ano 1 é o de estreia (a primeira temporada do save).
 */
export const WORLD_CUP_CYCLE = 4;
export function isWorldCupSeason(season) {
  return ((Math.max(1, Number(season) || 1) - 1) % WORLD_CUP_CYCLE) === 0;
}

/** Quantas temporadas faltam para a próxima Copa (0 = é esta temporada). */
export function seasonsUntilWorldCup(season) {
  const current = Math.max(1, Number(season) || 1);
  const rest = (current - 1) % WORLD_CUP_CYCLE;
  return rest === 0 ? 0 : WORLD_CUP_CYCLE - rest;
}

/** A carreira é de clube europeu? Define a competição continental. */
export function isEuropeanCareer(career) {
  const team = career?.clubId ? getTeam(career.clubId) : null;
  return Boolean(team && team.country !== 'Brasil' && team.country !== 'Argentina'
    && team.country !== 'Chile' && team.country !== 'Estados Unidos');
}

/**
 * Convocação: o atleta entra na seleção quando o overall dele é competitivo
 * (72+) e ele já jogou o suficiente na temporada. A nota da última partida
 * acelera ou atrasa; um atleta muito novo e fraco fica de fora, como na vida.
 */
export function nationalCallup(career) {
  if (!career?.player) return {called: false, reason: 'sem carreira'};
  const ovr = careerOverall(career);
  const matches = career.totals?.matches || 0;
  const form = Number(career.lastResult?.rating) || 6.5;
  const score = (ovr - 68) * 3 + Math.min(18, matches) * 1.4 + (form - 6.5) * 4;
  if (ovr < 70) return {called: false, reason: 'overall baixo', score, ovr};
  if (matches < 4 && ovr < 80) return {called: false, reason: 'poucos jogos', score, ovr};
  const called = score >= 9;
  return {
    called,
    reason: called ? 'convocado' : 'fora da lista',
    score,
    ovr,
    nationality: career.player.nationality,
    nationId: nationCode(career.player.nationality),
    // Confiança do técnico (0-100) vira chance de ser titular na Copa.
    confidence: Math.max(0, Math.min(100, Math.round(28 + score * 1.9)))
  };
}

/**
 * Os campeonatos da temporada do atleta, na ordem do calendário:
 * a liga nacional e o continental. A Champions é só de clube europeu; clube
 * brasileiro (e sul-americano) joga a Libertadores, como na vida real.
 */
export function careerCompetitions(career) {
  const european = isEuropeanCareer(career);
  return [
    {
      id: 'league', name: career?.league?.name || 'Liga nacional', kind: 'league',
      teams: career?.league?.clubs?.length || 8,
      detail: 'Todos os clubes do país disputam pontos corridos.'
    },
    european ? {
      id: 'champions', name: 'UEFA Champions League', kind: 'continental',
      pool: EUROPEAN_CLUBS.length, detail: 'Só clubes da Europa jogam a Champions.'
    } : {
      id: 'libertadores', name: 'CONMEBOL Libertadores', kind: 'continental',
      pool: 56, detail: 'Clubes brasileiros e sul-americanos disputam a Libertadores.'
    }
  ];
}

/** Nome do confronto continental do atleta, sem sortear o torneio inteiro. */
export function continentalRoundName(career) {
  return isEuropeanCareer(career) ? 'Fase de grupos da Champions' : 'Fase de grupos da Libertadores';
}

const AWARD_CATALOG = [
  { id: 'ballon-dor', name: 'Bola de Ouro', trophy: 'ballon-dor', weight: career => careerOverall(career) * 4 + (career.totals?.goals || 0) * 1.1 + career.season * 2,
    cinematic: true, description: 'O melhor jogador do mundo na temporada.' },
  { id: 'puskas', name: 'Prêmio Puskás', trophy: 'puskas', weight: career => (career.lastResult?.goals || 0) * 8 + careerOverall(career) * 0.9,
    cinematic: true, description: 'O gol mais bonito do ano.' },
  { id: 'golden-boot', name: 'Chuteira de Ouro', trophy: 'golden-boot', weight: career => (career.totals?.goals || 0) * 2.4 + careerOverall(career),
    cinematic: true, description: 'Artilheiro do futebol europeu.' },
  { id: 'best-playmaker', name: 'Melhor Meia do Mundo', trophy: 'playmaker', weight: career => (career.totals?.passes || 0) * 0.08 + careerOverall(career) * 1.6,
    cinematic: false, description: 'O cérebro do time na temporada.' },
  { id: 'golden-boy', name: 'Golden Boy', trophy: 'golden-boy', weight: career => career.player.level <= 12 ? 90 + careerOverall(career) : 0,
    cinematic: false, description: 'O melhor jovem do ano.' }
];

export const CAREER_AWARDS = AWARD_CATALOG;

/**
 * Os prêmios da temporada, decididos por desempenho e não por sorteio puro:
 * `won` quando a pontuação do atleta passa o corte (que cresce com o tempo).
 * O save guarda `career.awards` para a cutscene ser mostrada uma única vez.
 */
export function seasonAwards(career) {
  if (!career?.player) return [];
  const ovr = careerOverall(career);
  const goals = career.totals?.goals || 0;
  const matches = Math.max(1, career.totals?.matches || 1);
  const goalsPerMatch = goals / matches;
  const prestige = (career.history?.length || 0) + career.season * 0.35;
  const results = [];
  for (const award of AWARD_CATALOG) {
    let chance = 0;
    if (award.id === 'ballon-dor') {
      // Bola de Ouro: overall alto + gols + temporadas no topo.
      chance = (ovr - 78) / 14 + (career.totals?.goals || 0) / 60 + prestige * 0.06;
    } else if (award.id === 'puskas') {
      chance = (goalsPerMatch - 0.55) * 1.5 + (career.totals?.shots || 0) / 240;
    } else if (award.id === 'golden-boot') {
      chance = (goals - 12) / 14;
    } else if (award.id === 'best-playmaker') {
      chance = ((career.totals?.passes || 0) / matches - 18) / 12;
    } else if (award.id === 'golden-boy') {
      chance = career.player.level <= 12 ? (ovr - 70) / 18 : -1;
    }
    const won = chance >= 0.5;
    results.push({ ...award, weight: undefined, chance: Math.max(0, Math.min(1, chance)), won });
  }
  return results;
}

/** Prêmios já gravados no save (para a vitrine do Escritório). */
export function careerAwardCase(career) {
  return Array.isArray(career?.awards) ? career.awards : [];
}

/** O prêmio pede cutscene? Bola de Ouro e Puskás, como pedido. */
export const awardNeedsCinematic = award => Boolean(award?.cinematic && award?.won);

/** Marca o prêmio como já apresentado (a cutscene não repete). */
export function recordCareerAward(career, award) {
  if (!career?.player || !award?.won) return false;
  career.awards = careerAwardCase(career);
  if (career.awards.some(item => item.id === award.id && item.season === career.season)) return false;
  career.awards.push({
    id: award.id, name: award.name, trophy: award.trophy, season: career.season,
    clubId: career.clubId, goals: career.totals?.goals || 0, ovr: careerOverall(career),
    shown: false
  });
  career.awards = career.awards.slice(-24);
  return true;
}

/** A cutscene pendente (Bola de Ouro/Puskás) do save, se houver. */
export function pendingAwardCinematic(career) {
  return careerAwardCase(career).find(item => item.cinematic !== false && !item.shown
    && ['ballon-dor', 'puskas', 'golden-boot'].includes(item.id)) || null;
}

export function completeAwardCinematic(career, id) {
  const item = careerAwardCase(career).find(award => award.id === id);
  if (!item) return false;
  item.shown = true;
  return true;
}

/** Notícia curta para a Central/escritório sobre a seleção. */
export function callupNews(career) {
  if (!career?.player) return null;
  const call = nationalCallup(career);
  const nation = CAREER_NATIONS.includes(career.player.nationality) ? career.player.nationality : 'Brasil';
  const label = nation === 'Brasil' ? 'brasileira' : `da ${nation}`;
  // A convocação só vale na temporada de Copa: nos outros anos o jogador segue
  // no clube e a caixa de entrada mostra a contagem até a próxima Copa. Sem
  // isso o Escritório prometia uma Copa todo ano.
  if (!isWorldCupSeason(career.season)) {
    const left = seasonsUntilWorldCup(career.season);
    return `Sem Copa nesta temporada — a próxima é em ${left} ${left === 1 ? 'temporada' : 'temporadas'}. Segue no clube.`;
  }
  return call.called
    ? `Convocado pela seleção ${label} para a Copa do Mundo.`
    : `Não convocado pela seleção ${label} para a Copa do Mundo.`;
}

/**
 * O aviso da Caixa de Entrada do Escritório: convocação (em ano de Copa) ou a
 * contagem regressiva para a próxima. É a mesma mensagem que o jogo usa na
 * notícia da seleção, já com título e tom.
 */
export function inboxCallupNotice(career) {
  if (!career?.player) return null;
  const cupSeason = isWorldCupSeason(career.season);
  const call = nationalCallup(career);
  const nation = CAREER_NATIONS.includes(career.player.nationality) ? career.player.nationality : 'Brasil';
  const label = nation === 'Brasil' ? 'brasileira' : `da ${nation}`;
  const left = seasonsUntilWorldCup(career.season);
  if (!cupSeason) {
    return {
      kind: 'countdown',
      called: null,
      title: 'SEM COPA NESTA TEMPORADA',
      message: `A próxima Copa do Mundo é em ${left} ${left === 1 ? 'temporada' : 'temporadas'}. Continue somando jogos e gols pelo clube.`
    };
  }
  return {
    kind: call.called ? 'called' : 'not-called',
    called: call.called,
    title: call.called ? 'CONVOCADO PARA A COPA' : 'NÃO CONVOCADO',
    message: call.called
      ? `Você está na lista da seleção ${label}. O técnico confia em você: ${call.confidence}% de confiança.`
      : `O técnico da seleção ${label} não chamou você desta vez. Suba o overall e a sequência de jogos para entrar na lista.`
  };
}
