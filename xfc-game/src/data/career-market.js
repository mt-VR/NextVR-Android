// Mercado da carreira de jogador: oito clubes europeus para negociar (50% de
// chance, como pedido), três ofertas por temporada e a troca de clube que
// mantém o save, o overall e o histórico do atleta. Tudo local e determinístico
// por temporada — nenhuma chamada de rede, nenhum resultado do catálogo global.
import {TEAMS, getTeam} from './teams.js';
import {careerLeague} from './career.js';

/** Os oito clubes da Europa que aceitam negociação na tela de Transferências. */
export const EUROPEAN_CLUBS = [
  'real-madrid', 'fc-barcelona', 'bayern-munich', 'eintracht-frankfurt',
  'aston-villa', 'newcastle-united', 'celtic', 'panathinaikos'
].filter(id => TEAMS.some(team => team.id === id));

/** Chance de o clube aceitar a negociação: 50% a 50%, como pedido. */
export const NEGOTIATION_CHANCE = 0.5;

/** Sorteio reprodutível (mulberry32) para não mudar entre renders do menu. */
function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hash = text => [...String(text)].reduce((n, ch) => (n * 31 + ch.charCodeAt(0)) >>> 0, 7) >>> 0;

/**
 * As três ofertas da temporada. O clube atual nunca manda oferta; as outras
 * saem de `EUROPEAN_CLUBS` por sorteio com semente (temporada + clube), então
 * a mesma temporada mostra sempre as mesmas três ofertas.
 */
export function careerOffers(career) {
  if (!career?.player) return [];
  const others = EUROPEAN_CLUBS.filter(id => id !== career.clubId);
  const rng = seeded(hash(`${career.season}:${career.clubId}:offers`));
  const pool = [...others], picked = [];
  while (picked.length < Math.min(3, pool.length)) {
    picked.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
  }
  const answered = career.market?.answered || {};
  return picked.map(clubId => ({
    clubId,
    season: career.season,
    decision: answered[`${career.season}:${clubId}`] || 'pending'
  }));
}

/** Marca a decisão do jogador sobre uma oferta (ficar ou ir). */
export function answerOffer(career, clubId, decision) {
  if (!career || !['accepted', 'declined'].includes(decision)) return false;
  const offer = careerOffers(career).find(item => item.clubId === clubId);
  if (!offer || offer.decision !== 'pending') return false;
  career.market ||= {};
  career.market.answered ||= {};
  career.market.answered[`${career.season}:${clubId}`] = decision;
  return true;
}

/**
 * Negociação direta com um dos oito clubes: 50% de aceite. `rng` é injetável
 * para o teste; no jogo é o `Math.random` normal.
 */
export function negotiateCareerClub(career, clubId, rng = Math.random) {
  if (!career?.player || career.pending) return {ok: false, reason: 'pending'};
  if (clubId === career.clubId) return {ok: false, reason: 'same'};
  if (!EUROPEAN_CLUBS.includes(clubId)) return {ok: false, reason: 'club'};
  const attempt = {clubId, season: career.season, round: career.round, accepted: rng() < NEGOTIATION_CHANCE};
  career.market ||= {};
  career.market.attempts = [...(career.market.attempts || []), attempt].slice(-20);
  career.market.lastAttempt = attempt;
  if (!attempt.accepted) return {ok: false, reason: 'refused', attempt};
  changeCareerClub(career, clubId, 'transfer');
  return {ok: true, attempt};
}

/**
 * Troca de clube no meio da temporada (negociação aceita ou oferta aceita).
 * Mantém overall, XP, pontos, estatísticas e histórico; a liga é sorteada de
 * novo para o clube novo e a rodada volta ao começo. A apresentação de
 * transferência é disparada pelo fluxo normal (`queueCareerPresentation`).
 */
export function changeCareerClub(career, clubId, reason = 'transfer') {
  if (!career?.player || !getTeam(clubId) || clubId === career.clubId) return false;
  const from = career.clubId;
  career.history = [...(career.history || []), {
    season: career.season, clubId: from, place: null, type: reason
  }].slice(-12);
  career.clubId = clubId;
  career.round = 0;
  career.league = careerLeague(clubId, career.season);
  career.lastResult = null;
  career.plan = null;
  career.pending = null;
  return true;
}
