// Nota AO VIVO do atleta da carreira. Começa em 6, vai de 0 a 10 e só soma
// décimos/pontos nos lances positivos. Nunca retrocede e nunca passa de 10.
export const RATING_START = 6;
export const RATING_MIN = 0;
export const RATING_MAX = 10;
export const RATING_WEIGHTS = Object.freeze({
  goal: 2,      // gol do atleta
  assist: 1,    // assistência para um gol do time
  pass: 0.1,    // passe certo
  shot: 0.1,    // chute perigoso (no alvo)
  dribble: 0.1  // drible/finta concluído com a bola
});

const round1 = n => Math.round(n * 10) / 10;

export function createCareerRating() {
  let value = RATING_START;
  const tally = { goal: 0, assist: 0, pass: 0, shot: 0, dribble: 0 };

  return {
    get value() { return value; },
    get tally() { return { ...tally }; },
    /** Creditar um lance positivo. Devolve a nota já limitada e arredondada. */
    award(kind) {
      const weight = RATING_WEIGHTS[kind];
      if (!weight) return value;
      tally[kind] = round1(tally[kind] + weight);
      value = Math.max(RATING_MIN, Math.min(RATING_MAX, round1(value + weight)));
      return value;
    },
    /** Texto pronto para o placar, sempre com uma casa decimal. */
    text() { return value.toFixed(1); }
  };
}
