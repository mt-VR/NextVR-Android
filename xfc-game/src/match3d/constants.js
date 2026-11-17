// Medidas do campo e regras usadas pelo motor de partida.
//
// As distâncias são reais (metros) para que a bola, os jogadores e a câmera
// se comportem como num campo de futebol: o jogador importado tem 1,75 m, a bola 22 cm
// de diâmetro e o gol tem 7,32 x 2,44 m.

// v0.5.51: campo mais largo e mais comprido que o oficial (105×68). A câmera
// de transmissão mostra o campo inteiro, então aumentar o gramado dá a
// sensação de estádio grande e abre espaço para o jogo pelas pontas.
export const PITCH = {
  length: 112,
  width: 74,
  halfLength: 56,
  halfWidth: 37
};

export const GOAL = {
  width: 7.32,
  height: 2.44,
  depth: 2.2,
  postRadius: 0.06
};

export const BALL = {
  radius: 0.11,
  mass: 0.43
};

/** Posições de referência da formação 4-3-3 (metros, do gol próprio ao adversário). */
export const FORMATION_433 = [
  { role: 'GK', x: -51, z: 0 },
  { role: 'RB', x: -35, z: 23 },
  { role: 'CB', x: -38.5, z: -8.5 },
  { role: 'CB', x: -38.5, z: 8.5 },
  { role: 'LB', x: -35, z: -23 },
  { role: 'CM', x: -17, z: -11 },
  { role: 'CDM', x: -22.5, z: 2 },
  { role: 'CAM', x: -6.5, z: 8.5 },
  { role: 'LW', x: 2, z: 24 },
  { role: 'ST', x: 6.5, z: 0 },
  { role: 'RW', x: 2, z: -24 }
];

/** Formato tático usado pela IA do jogo (4-3-3). */
export const TACTICS = {
  '4-3-3': FORMATION_433
};

/** Nomes dos(as) goleiros: sempre um reserva entra no gol. */
export const KEEPER_NAMES = ['GK'];
