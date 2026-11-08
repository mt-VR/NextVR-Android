// Orientação do campo — a fonte única da verdade para quem ataca qual lado.
//
// O time da casa ataca para +X (o gol visitante em +52,5 m) e defende o gol
// próprio em -52,5 m; o visitante faz o contrário. Todos os módulos do motor
// (regras, IA, câmera, testes) usam estas funções, e não números mágicos
// espalhados pelo código.

import { PITCH } from './constants.js';

/** Sinal do ataque: +1 para quem ataca em +X, -1 para o outro lado. */
export function attackSign(side) {
  return side === 'home' ? 1 : -1;
}

/** Sinal de quem defende: o gol próprio fica no lado oposto ao ataque. */
export function defendSign(side) {
  return -attackSign(side);
}

/** Coordenada X do gol que o time defende (o gol do próprio time). */
export function ownGoalX(side) {
  return defendSign(side) * PITCH.halfLength;
}

/** Coordenada X do gol que o time ataca. */
export function attackedGoalX(side) {
  return attackSign(side) * PITCH.halfLength;
}

/**
 * A bola está dentro da GRANDE ÁREA do time que defende?
 * É a regra usada para decidir pênalti: a falta precisa acontecer dentro da
 * área do defensor que cometeu a falta, não na área do adversário.
 *
 * @param {number} x posição x da falta (metros)
 * @param {number} z posição z da falta (metros)
 * @param {string} defendingSide o time que está se defendendo (o infrator)
 */
export function insidePenaltyAreaFor(x, z, defendingSide) {
  const sign = defendSign(defendingSide);
  return sign * x > PITCH.halfLength - 16.5 && Math.abs(z) < 20.16;
}

/** A bola está dentro da pequena área do time que se defende. */
export function insideGoalAreaFor(x, z, defendingSide) {
  const sign = defendSign(defendingSide);
  return sign * x > PITCH.halfLength - 5.5 && Math.abs(z) < 9.16;
}
