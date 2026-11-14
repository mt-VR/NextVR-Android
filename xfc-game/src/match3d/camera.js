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
 * Câmera de transmissão — geometria.
 *
 * Defeitos que o usuário viu, com a conta de cada um:
 *
 * 1. A lente ficava DENTRO do campo (`z = 23` com a lateral em `z = 34`): o que
 *    estava na metade de baixo do gramado caía atrás da câmera e nem era
 *    desenhado. Não era corte de borda, era metade do elenco fora do frustum.
 * 2. A correção seguinte virou uma vista de cima (depressão de 59°, `h = 85`
 *    sobre `z = 160`, `fov = 22`): o campo cabia, mas sem perspectiva nenhuma —
 *    um mapa, não uma transmissão.
 * 3. Panorâmica em X (seguir a bola) não fecha: um atleta a 52 m do eixo cai em
 *    `ndc.x = 2,06`, e medido sobra ~15% das posições de jogador fora da tela.
 *
 * O que ficou é uma câmera de TV elevada e DIAGONAL: 65 m de altura, 95 m
 * atrás da linha lateral, deslocada 24 m para um lado do campo, olhando o
 * centro do gramado. A razão 65/95 dá depressão de 34° — perspectiva baixa o
 * bastante para ler profundidade e alta o bastante para as duas laterais
 * caberem — e o deslocamento lateral é o que cria o ângulo diagonal.
 *
 * Medido com o `three` do vendor em 1280×720 (o pior aspecto do app):
 *
 *   • lateral próxima em `ndc.y = −0,93`   (7% de folga na borda de baixo)
 *   • lateral oposta  em `ndc.y = +0,47`   (53% de folga na borda de cima)
 *   • o atleta mais distante do centro em `|ndc| = 0,71`
 *   • a bola em qualquer ponto do campo em `|ndc| ≤ 0,90`
 *   • os dois gols inteiros dentro da área livre do HUD
 *
 * Linha de visão conferida contra a geometria do estádio (`stadium.js`): com a
 * lente a 65 m de altura e o banco técnico encostado no muro (z = 39,2 e não
 * mais a 47,2), nenhum ponto do gramado fica tapado — nem placa, nem LED, nem
 * banco, nem arquibancada, nem cobertura. Eram esses objetos atravessando a
 * frente da câmera que viravam as "colunas marrons" e a estrutura branca da
 * imagem de referência.
 */
const CAMERA_Z = 95;
const CAMERA_HEIGHT = 65;
const CAMERA_FOV = 38;
/**
 * Deslocamento lateral da lente (m): é o que dá o ângulo diagonal. Acima de
 * ~30 m o canto daquele lado começa a escapar pela borda de baixo.
 */
const CAMERA_SIDE_SHIFT = -24;
/** Mira no centro do gramado. */
const CAMERA_TARGET_X = 0;
const CAMERA_TARGET_Y = 0;

/**
 * Enquadramento de transmissão: campo inteiro, os 22 atletas sempre na tela e
 * perspectiva diagonal de TV.
 *
 * O quadro é fixo no eixo do campo — é o que garante que ninguém desaparece ao
 * se aproximar de uma borda. Testado acompanhar a bola: 15% de pan já leva a
 * lateral próxima a `ndc.y = 1,07` e ela sai da tela. A bola continua visível
 * em todas as posições porque o quadro já contém o gramado inteiro.
 */
export function broadcastCameraPose(position, side = BROADCAST_CAMERA_SIDE, velocity = null) {
  const fixedSide = side < 0 ? -1 : 1;
  return {
    position: {
      x: CAMERA_SIDE_SHIFT,
      y: CAMERA_HEIGHT,
      z: fixedSide * CAMERA_Z
    },
    target: { x: CAMERA_TARGET_X, y: CAMERA_TARGET_Y, z: 0 },
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
