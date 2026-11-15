// Ligas de verdade para a carreira: cada país tem a sua competição e o atleta
// muda de campeonato junto com o clube. Antes, a carreira montava a liga com os
// clubes do país do clube; como só Barcelona, Real Madrid e Levante eram
// espanhóis no catálogo, o resto vinha de qualquer lugar — daí continuar no
// "Brasileirão" mesmo assinando com um clube da Europa.
import {TEAMS, getTeam} from './teams.js';

/** Ligas por país, na ordem em que a carreira sorteia os adversários. */
export const LEAGUES = {
  Espanha: {name: 'LaLiga', clubs: TEAMS.filter(team => team.country === 'Espanha').map(team => team.id)},
  Brasil: {name: 'Brasileirão Série A', clubs: TEAMS.filter(team => team.country === 'Brasil').map(team => team.id)},
  Inglaterra: {name: 'Premier League', clubs: TEAMS.filter(team => team.country === 'Inglaterra').map(team => team.id)},
  Alemanha: {name: 'Bundesliga', clubs: TEAMS.filter(team => team.country === 'Alemanha').map(team => team.id)},
  Itália: {name: 'Serie A', clubs: TEAMS.filter(team => team.country === 'Itália').map(team => team.id)},
  França: {name: 'Ligue 1', clubs: TEAMS.filter(team => team.country === 'França').map(team => team.id)},
  Portugal: {name: 'Liga Portugal', clubs: TEAMS.filter(team => team.country === 'Portugal').map(team => team.id)},
  'Países Baixos': {name: 'Eredivisie', clubs: TEAMS.filter(team => team.country === 'Países Baixos').map(team => team.id)},
  Escócia: {name: 'Scottish Premiership', clubs: TEAMS.filter(team => team.country === 'Escócia').map(team => team.id)},
  Grécia: {name: 'Super League Greece', clubs: TEAMS.filter(team => team.country === 'Grécia').map(team => team.id)},
  Argentina: {name: 'Liga Profesional', clubs: TEAMS.filter(team => team.country === 'Argentina').map(team => team.id)},
  Chile: {name: 'Primera División', clubs: TEAMS.filter(team => team.country === 'Chile').map(team => team.id)},
  'Estados Unidos': {name: 'MLS', clubs: TEAMS.filter(team => team.country === 'Estados Unidos').map(team => team.id)},
  Japão: {name: 'J1 League', clubs: TEAMS.filter(team => team.country === 'Japão').map(team => team.id)},
  Bélgica: {name: 'Pro League', clubs: TEAMS.filter(team => team.country === 'Bélgica').map(team => team.id)},
  Suíça: {name: 'Super League', clubs: TEAMS.filter(team => team.country === 'Suíça').map(team => team.id)},
  Noruega: {name: 'Eliteserien', clubs: TEAMS.filter(team => team.country === 'Noruega').map(team => team.id)},
  Tchéquia: {name: 'Chance Liga', clubs: TEAMS.filter(team => team.country === 'Tchéquia').map(team => team.id)},
  'País de Gales': {name: 'Cymru Premier', clubs: TEAMS.filter(team => team.country === 'País de Gales').map(team => team.id)}
};

const EUROPE_COUNTRIES = new Set(['Espanha', 'Inglaterra', 'Alemanha', 'Itália', 'França', 'Portugal',
  'Países Baixos', 'Escócia', 'Grécia', 'País de Gales', 'Bélgica', 'Suíça', 'Noruega', 'Tchéquia']);

export const isEuropeanCountry = country => EUROPE_COUNTRIES.has(country);

/** Nome do campeonato do clube (o mesmo rótulo que o save já grava no time). */
export function leagueOfClub(clubId) {
  const team = getTeam(clubId);
  if (!team) return null;
  return LEAGUES[team.country]?.name || team.league || team.country;
}

/**
 * Os oito clubes que disputam a liga do clube. Sempre do mesmo país; se o país
 * tiver menos de oito clubes no catálogo, completa com clubes do mesmo
 * continente — um clube europeu nunca cai num campeonato brasileiro.
 */
export function leagueClubs(clubId) {
  const team = getTeam(clubId);
  if (!team) return TEAMS.slice(0, 8).map(item => item.id);
  const same = (LEAGUES[team.country]?.clubs || []).map(id => getTeam(id)).filter(Boolean);
  const clubs = [clubId, ...same.map(item => item.id).filter(id => id !== clubId)];
  if (clubs.length >= 8) return clubs.slice(0, 8);
  const european = EUROPE_COUNTRIES.has(team.country);
  // Só clubes de ligas pequenas completam a tabela: a Bundesliga do save não
  // empresta o Barcelona, e o Brasileirão não mistura time europeu.
  const small = other => (LEAGUES[other.country]?.clubs.length || 0) < 8;
  const rest = TEAMS.filter(other => !clubs.includes(other.id)
    && (european ? EUROPE_COUNTRIES.has(other.country) && small(other) : other.country === team.country));
  const table = [...clubs, ...rest.map(other => other.id)];
  if (table.length >= 8 || !european) return table.slice(0, 8);
  // País minúsculo no catálogo (Bélgica, Suíça, Noruega, Tchéquia): a liga
  // fecha com europeus de outro campeonato pequeno, nunca com um brasileiro.
  const extra = TEAMS.filter(other => !table.includes(other.id) && EUROPE_COUNTRIES.has(other.country));
  return [...table, ...extra.map(other => other.id)].slice(0, 8);
}
