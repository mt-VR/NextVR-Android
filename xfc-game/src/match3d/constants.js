// Medidas do campo e regras usadas pelo motor de partida.
//
// As distâncias são reais (metros) para que a bola, os jogadores e a câmera
// se comportem como num campo de futebol: o jogador tem 1,80 m, a bola 22 cm
// de diâmetro e o gol tem 7,32 x 2,44 m.

export const PITCH = {
  length: 105,
  width: 68,
  halfLength: 52.5,
  halfWidth: 34
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
  { role: 'GK', x: -48, z: 0 },
  { role: 'RB', x: -33, z: 21 },
  { role: 'CB', x: -36, z: -8 },
  { role: 'CB', x: -36, z: 8 },
  { role: 'LB', x: -33, z: -21 },
  { role: 'CM', x: -16, z: -10 },
  { role: 'CDM', x: -21, z: 2 },
  { role: 'CAM', x: -6, z: 8 },
  { role: 'LW', x: 2, z: 22 },
  { role: 'ST', x: 6, z: 0 },
  { role: 'RW', x: 2, z: -22 }
];

/** Formato tático usado pela IA do jogo (4-3-3). */
export const TACTICS = {
  '4-3-3': FORMATION_433
};

/** Nomes dos(as) goleiros: sempre um reserva entra no gol. */
export const KEEPER_NAMES = ['GK'];
