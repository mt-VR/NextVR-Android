// Medidas do campo e regras usadas pelo motor de partida.
//
// As distâncias são reais (metros) para que a bola, os jogadores e a câmera
// se comportem como num campo de futebol: o jogador importado tem 1,75 m, a bola 22 cm
// de diâmetro e o gol tem 7,32 x 2,44 m.

// v0.5.52: 120×82 (era 112×74). Continua acima do oficial (105×68) para dar
// a sensação de estádio grande e abrir espaço para o jogo pelas pontas.
export const PITCH = {
  length: 120,
  width: 82,
  halfLength: 60,
  halfWidth: 41
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
// Escala junto com o campo 120×82 (antes era pensada para 112×74): as
// posições crescem na mesma proporção para o time não ficar "encolhido" com
// um monte de gramado nas costas e para as linhas continuarem equidistantes.
const FORMATION_SCALE = { x: PITCH.length / 112, z: PITCH.width / 74 };
const at = (role, x, z) => ({ role, x: +(x * FORMATION_SCALE.x).toFixed(1), z: +(z * FORMATION_SCALE.z).toFixed(1) });
export const FORMATION_433 = [
  at('GK', -51, 0),
  at('RB', -35, 23),
  at('CB', -38.5, -8.5),
  at('CB', -38.5, 8.5),
  at('LB', -35, -23),
  at('CM', -17, -11),
  at('CDM', -22.5, 2),
  at('CAM', -6.5, 8.5),
  at('LW', 2, 24),
  at('ST', 6.5, 0),
  at('RW', 2, -24)
];

/** Formato tático usado pela IA do jogo (4-3-3). */
export const TACTICS = {
  '4-3-3': FORMATION_433
};

/** Nomes dos(as) goleiros: sempre um reserva entra no gol. */
export const KEEPER_NAMES = ['GK'];
