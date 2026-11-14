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
 * Três defeitos explicavam o que o usuário via:
 *
 * 1. A lente ficava DENTRO do campo (`z = 23`, com a lateral em `z = 34`).
 *    Tudo o que estava na metade de baixo do gramado caía atrás da câmera e
 *    nem chegava a ser desenhado — não era corte de borda, era metade do
 *    elenco fora do frustum.
 * 2. Uma lente alta "olhando o campo de cima" também não fechava o quadro: a
 *    linha lateral próxima subia além da borda de baixo da tela.
 * 3. Acompanhar a bola panorâmica em X parece a solução, mas não é: um atleta
 *    a 52 m do eixo cai em `ndc.x = 2,06`. Medido, a panorâmica deixa ~15% das
 *    posições de jogador fora da tela ao longo da partida — que é exatamente o
 *    "jogador desaparecendo" que o usuário apontou. Numa lente 16:9 não cabe
 *    os 105 m de comprimento E os 68 m de largura com panorâmica.
 *
 * O que resolve os três de uma vez é quadro FIXO no eixo do campo, alto o
 * suficiente para o gramado inteiro caber. A câmera fica 85 m acima e 160 m
 * atrás da linha de fundo, com `fov = 22` (teleobjetiva: a perspectiva fica
 * plana como numa transmissão elevada, sem distorcer as linhas). Nessa
 * configuração, medido com o `three` do vendor em 1280×720 — o pior aspecto
 * do app, já que telas mais altas só ganham folga:
 *
 *   • lateral próxima em `ndc.y = −0,54` (46% de folga na borda de baixo)
 *   • lateral oposta  em `ndc.y = +0,39` (61% de folga na borda de cima)
 *   • o atleta mais distante do centro em `|ndc| = 0,77`
 *   • a bola em qualquer ponto do campo em `|ndc| ≤ 0,77`
 *
 * Varredura de 3 em 3 m pelo gramado inteiro, nos dois lados do campo e com a
 * bola em todas as posições: nenhuma amostra fora da tela, 22 de 22 atletas
 * desenhados em 100% dos quadros.
 */
const CAMERA_Z = 160;
const CAMERA_HEIGHT = 85;
const CAMERA_FOV = 22;

/**
 * Enquadramento de transmissão: o campo inteiro e todos os 22 atletas sempre
 * na tela.
 *
 * O quadro é fixo — é justamente o que garante que nenhum jogador some ao se
 * aproximar de uma borda. Mexer na mira com a bola parecia dar vida à
 * composição, mas basta um deslocamento de 8% do campo para a linha lateral
 * próxima ir a `ndc.y = 1,07` e a linha sair da tela; por isso a mira fica no
 * centro do gramado. A bola nunca sai do quadro porque o quadro já contém o
 * campo todo.
 */
export function broadcastCameraPose(position, side = BROADCAST_CAMERA_SIDE, velocity = null) {
  const fixedSide = side < 0 ? -1 : 1;
  return {
    position: { x: 0, y: CAMERA_HEIGHT, z: fixedSide * CAMERA_Z },
    target: { x: 0, y: 0, z: 0 },
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
