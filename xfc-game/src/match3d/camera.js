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
 * Câmera de transmissão — o enquadramento do eFootball (print do usuário).
 *
 * Histórico, porque cada versão falhou por um motivo diferente:
 *
 * 1. A original ficava DENTRO do campo (`z = 23` com a lateral em `z = 34`):
 *    metade do gramado ia para trás da lente e não era desenhada.
 * 2. Uma vista elevada a 59° enquadrava o campo todo, mas virava um mapa.
 * 3. Uma diagonal a 34° melhorou a perspectiva, mas ainda era visão de cima.
 * 4. A lateral "PES" a 26 m e `z = 53` era uma transmissão de cima: o campo
 *    inteiro cabia no quadro, o que nunca é o enquadramento de um jogo.
 *
 * O que o print do eFootball mostra — e o que está reproduzido aqui:
 *
 *   • o gramado preenche quase toda a tela; a arquibancada aparece só como uma
 *     faixa fina no topo (12-20% da altura), com as placas de publicidade;
 *   • a linha lateral de baixo passa POR BAIXO da borda do quadro, não aparece
 *     inteira: é o que dá a sensação de estar dentro do campo;
 *   • o pedaço de campo visível é de ~85 m de comprimento, não dos 105 m.
 *
 * Montagem:
 *
 *   • lente a 16 m de altura, 45 m do eixo do campo — acima das placas (1,25 m)
 *     e do LED (3,1 m), e antes do muro da arquibancada (54 m). O banco técnico
 *     fica em `z = 50`, atrás da lente (ver `buildSidelineBench` em `stadium.js`).
 *   • alvo 32 m à frente, no chão: inclinação de 27°, o que coloca as placas do
 *     lado oposto no topo do quadro e o gramado até a borda de baixo.
 *   • `fov = 52`: com a lente perto da linha, é o que segura ~85 m de campo.
 *
 * A lente acompanha a bola em Z além de X. Com o campo deste jogo (68 m de
 * largura e a lente a 45 m do eixo) a linha de baixo fica 11 m abaixo da
 * lente: sem acompanhar, a bola sumiria do quadro quando o lance fosse na
 * lateral mais próxima. Por isso a câmera recua quando a bola desce e avança
 * quando ela sobe — a mesma correção que o eFootball faz. O gramado na borda
 * de baixo é o que permite enxergar a bola no pé de quem está do lado de cá.
 *
 * Medido com o `three` do vendor em 1280×720, no meio-campo: placas do lado
 * oposto em 126 px, lateral de baixo em 768 px (fora do quadro, como no print)
 * e jogador de linha no meio-campo com 28 px (era 21 px na v0.5.45).
 */
const CAMERA_HEIGHT = 16;
/** Recuo da lente em relação ao eixo do campo (entre a lateral e o muro). */
const CAMERA_Z = 45;
const CAMERA_FOV = 52;
/** Distância em Z do alvo: define a inclinação (27° com a altura de 16 m). */
const CAMERA_TARGET_AHEAD = 32;
/** Fração do deslocamento da bola aplicada à câmera (movimento do PES). */
const CAMERA_PAN_FACTOR = 0.8;
/** A lente segue a bola em Z: recua quando o lance vem para o lado dela. */
const CAMERA_Z_FOLLOW = 0.65;
/** Limites do recuo: nunca dentro do campo nem dentro da arquibancada. */
const CAMERA_Z_MIN = 38;
const CAMERA_Z_MAX = 52.5;

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
  // A bola medida no eixo da câmera: quando ela vem para o lado da lente, a
  // lente recua para o lance não sair pela borda de baixo.
  const ballZ = Number(position?.z) || 0;
  const lensZ = clamp(CAMERA_Z + ballZ * CAMERA_Z_FOLLOW, CAMERA_Z_MIN, CAMERA_Z_MAX);
  return {
    position: { x: panX, y: CAMERA_HEIGHT, z: fixedSide * lensZ },
    target: { x: panX, y: 0, z: fixedSide * (lensZ - CAMERA_TARGET_AHEAD) },
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
