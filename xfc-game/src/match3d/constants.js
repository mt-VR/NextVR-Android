// Medidas do campo e regras usadas pelo motor de partida.
//
// As distâncias são reais (metros) para que a bola, os jogadores e a câmera
// se comportem como num campo de futebol: o jogador importado tem 1,75 m, a bola 22 cm
// de diâmetro e o gol tem 7,32 x 2,44 m.

// v0.5.59: Kick Off / amistoso voltam ao gramado pré-0.5.58 (120×82). Só a
// carreira usa o campo grandão (140×96) com a câmera mais perto.
export const STANDARD_PITCH = Object.freeze({
  length: 120,
  width: 82,
  halfLength: 60,
  halfWidth: 41
});

export const CAREER_PITCH = Object.freeze({
  length: 140,
  width: 96,
  halfLength: 70,
  halfWidth: 48
});

export const PITCH = {
  length: STANDARD_PITCH.length,
  width: STANDARD_PITCH.width,
  halfLength: STANDARD_PITCH.halfLength,
  halfWidth: STANDARD_PITCH.halfWidth
};

/** Medida FIFA da trave: 7,32 m × 2,44 m. */
export const FIFA_GOAL = Object.freeze({
  width: 7.32,
  height: 2.44,
  depth: 2.2,
  postRadius: 0.06
});

export const GOAL = {
  width: FIFA_GOAL.width,
  height: FIFA_GOAL.height,
  depth: FIFA_GOAL.depth,
  postRadius: FIFA_GOAL.postRadius
};

/**
 * Na partida os atletas têm presença 1,34×. Sem o mesmo fator a trave FIFA
 * fica menor que o goleiro. Fora do jogo a medida volta a 7,32 × 2,44.
 */
export function applyGoalPresence(presence = 1) {
  const scale = Number.isFinite(Number(presence)) && Number(presence) > 0 ? Number(presence) : 1;
  GOAL.width = FIFA_GOAL.width * scale;
  GOAL.height = FIFA_GOAL.height * scale;
  GOAL.depth = FIFA_GOAL.depth * scale;
  GOAL.postRadius = FIFA_GOAL.postRadius * scale;
  return GOAL;
}

export const BALL = {
  radius: 0.11,
  mass: 0.43
};

/** Posições de referência da formação 4-3-3 no campo 112×74 (antes da escala). */
const FORMATION_BASE = [
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

export const FORMATION_433 = FORMATION_BASE.map(slot => ({ ...slot }));

function rebuildFormation() {
  const scaleX = PITCH.length / 112;
  const scaleZ = PITCH.width / 74;
  for (let index = 0; index < FORMATION_BASE.length; index += 1) {
    const base = FORMATION_BASE[index];
    FORMATION_433[index].role = base.role;
    FORMATION_433[index].x = +(base.x * scaleX).toFixed(1);
    FORMATION_433[index].z = +(base.z * scaleZ).toFixed(1);
  }
}

/**
 * Troca o gramado ativo. O motor lê `PITCH` em todo canto; a carreira pede o
 * campo maior, o resto do jogo fica no 120×82.
 */
export function applyPitchLayout(kind = 'standard') {
  const source = kind === 'career' ? CAREER_PITCH : STANDARD_PITCH;
  PITCH.length = source.length;
  PITCH.width = source.width;
  PITCH.halfLength = source.halfLength;
  PITCH.halfWidth = source.halfWidth;
  applyGoalPresence(1);
  rebuildFormation();
  return PITCH;
}

rebuildFormation();

/** Formato tático usado pela IA do jogo (4-3-3). */
export const TACTICS = {
  '4-3-3': FORMATION_433
};

/** Nomes dos(as) goleiros: sempre um reserva entra no gol. */
export const KEEPER_NAMES = ['GK'];
