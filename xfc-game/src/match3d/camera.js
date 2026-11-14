// Câmeras e eixos de controle para a partida. A câmera de transmissão fica
// sempre no mesmo lado do campo: a jogada pode ser acompanhada sem girar o
// referencial do analógico ou trocar cima/baixo na tela.

import { PITCH } from './constants.js';

export const BROADCAST_CAMERA_SIDE = 1;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/** Norte do analógico sempre aponta para o mesmo eixo do gramado. */
export function worldMovementFromStick(moveX = 0, moveZ = 0) {
  return { x: Number(moveX) || 0, z: -(Number(moveZ) || 0) };
}

/**
 * Converte o analógico para o plano do campo usando o eixo de avanço da câmera.
 * `moveZ` positivo é a parte de cima do stick; `moveX` positivo é a direita.
 * O helper é exclusivo da câmera Pro de treino: a transmissão conserva seu
 * referencial fixo através de `worldMovementFromStick`.
 */
export function cameraRelativeMovementFromStick(moveX = 0, moveZ = 0, forwardX = 1, forwardZ = 0) {
  const inputX = Number.isFinite(Number(moveX)) ? Number(moveX) : 0;
  const inputZ = Number.isFinite(Number(moveZ)) ? Number(moveZ) : 0;
  let fx = Number.isFinite(Number(forwardX)) ? Number(forwardX) : 0;
  let fz = Number.isFinite(Number(forwardZ)) ? Number(forwardZ) : 0;
  const length = Math.hypot(fx, fz);
  if (length < 1e-6) {
    fx = 1;
    fz = 0;
  } else {
    fx /= length;
    fz /= length;
  }
  return {
    x: -fz * inputX + fx * inputZ,
    z: fx * inputX + fz * inputZ
  };
}

/**
 * Câmera de transmissão — inspirada na câmera lateral clássica de PES/eFootball.
 *
 * Histórico, porque cada versão falhou por um motivo diferente:
 *
 * 1. A original ficava DENTRO do campo (`z = 23` com a lateral em `z = 34`):
 *    metade do gramado ia para trás da lente e não era desenhada.
 * 2. Uma vista elevada a 59° enquadrava o campo todo, mas virava um mapa.
 * 3. Uma diagonal a 34° melhorou a perspectiva, mas ainda era visão de cima.
 *
 * O que o usuário pediu é a câmera de PES: **lateral, no eixo do meio-campo,
 * quase horizontal, panorâmica acompanhando a bola**. Ela é montada assim:
 *
 *   • no vão livre da lateral — 26 m de altura e 53 m do eixo do campo, entre
 *     a linha (34) e a arquibancada (54). Em `z ≥ 54` a lente ficaria DENTRO
 *     da torcida (já aconteceu numa versão deste arquivo: a tela mostrava só
 *     as cadeiras). Acima das placas (1,25 m), do LED (3,1 m) e da cobertura
 *     do banco (4,1 m), então nada do estádio cruza a frente do gramado.
 *   • alvo 40 m à frente, no chão: dá inclinação de 33° — bem menos que os 59°
 *     da vista aérea — e é o suficiente para as duas linhas laterais caberem.
 *   • `fov = 62`: cobre a largura do gramado à distância da lente.
 *   • panorâmica de 80% do deslocamento da bola, amortecida pelo
 *     `updateCamera`, sem zoom nem corte brusco: é o movimento do PES.
 *
 * Medido com o `three` do vendor em 1280×720, para a bola em todo o campo:
 * lateral próxima em `ndc.y = 0,63`, oposta em `0,49`, a bola em `|ndc| ≤ 0,20`
 * e 83% de todas as posições do gramado dentro do quadro. O resto entra pelo
 * pan — o que sai é sempre a lateral oposta ao lance, nunca o jogador da bola.
 *
 * Comparação honesta com a versão anterior (diagonal a 34°): aquela mantinha
 * os 22 atletas no quadro em 100% dos instantes, mas de cima. Esta é a câmera
 * de transmissão lateral que foi pedida, e paga por isso com ~1 atleta na
 * borda em jogada de ponta.
 */
const CAMERA_Z = 53;
const CAMERA_HEIGHT = 26;
const CAMERA_FOV = 62;
/** Distância em Z do alvo: define a inclinação (33° com a altura de 26 m). */
const CAMERA_TARGET_AHEAD = 40;
/** Fração do deslocamento da bola aplicada à câmera (movimento do PES). */
const CAMERA_PAN_FACTOR = 0.8;

/**
 * Enquadramento de transmissão lateral que acompanha a bola.
 *
 * A câmera fica na lateral, no eixo do meio-campo, e panorâmica em X junto com
 * a jogada. `side` escolhe a lateral (o jogo usa sempre a mesma, para o
 * analógico não inverter); `velocity` dá a antecipação do movimento.
 */
export function broadcastCameraPose(position, side = BROADCAST_CAMERA_SIDE, velocity = null) {
  const fixedSide = side < 0 ? -1 : 1;
  const ballX = clamp((Number(position?.x) || 0) + clamp((Number(velocity?.x) || 0) * 0.35, -6, 6),
    -PITCH.halfLength - 4, PITCH.halfLength + 4);
  const panX = clamp(ballX * CAMERA_PAN_FACTOR, -PITCH.halfLength, PITCH.halfLength);
  return {
    position: { x: panX, y: CAMERA_HEIGHT, z: fixedSide * CAMERA_Z },
    target: { x: panX, y: 0, z: fixedSide * (CAMERA_Z - CAMERA_TARGET_AHEAD) },
    fov: CAMERA_FOV
  };
}

/** Posição baixa e próxima da bandeirinha, com o cobrador à frente da lente. */
export function cornerCameraPose(taker, attackSign, target) {
  const sign = attackSign < 0 ? -1 : 1;
  const cornerSide = Math.sign(taker?.z || 1);
  const x = Number(taker?.x) || sign * PITCH.halfLength;
  const z = Number(taker?.z) || cornerSide * PITCH.halfWidth;
  return {
    position: {
      x: clamp(x - sign * 4.1, -PITCH.halfLength + 0.7, PITCH.halfLength + 0.7),
      y: 5.1,
      // A câmera fica logo além da lateral, antes da parede da arquibancada.
      z: cornerSide * (PITCH.halfWidth + 1.45)
    },
    target: {
      x: Number(target?.x) || sign * (PITCH.halfLength - 8.5),
      y: 1.15,
      z: Number(target?.z) || 0
    },
    fov: 52
  };
}
