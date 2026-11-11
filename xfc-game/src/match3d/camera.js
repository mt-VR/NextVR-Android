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

/** Enquadramento de transmissão que acompanha a bola sem cruzar para o outro lado. */
export function broadcastCameraPose(position, side = BROADCAST_CAMERA_SIDE, velocity = null) {
  const ballX = clamp((Number(position?.x) || 0)+clamp((Number(velocity?.x)||0)*.1,-2.2,2.2), -PITCH.halfLength - 6, PITCH.halfLength + 6);
  const ballZ = clamp((Number(position?.z) || 0)+clamp((Number(velocity?.z)||0)*.08,-1.5,1.5), -PITCH.halfWidth - 6, PITCH.halfWidth + 6);
  const fixedSide = side < 0 ? -1 : 1;
  const nearT = Math.min(1, Math.abs(ballZ) / PITCH.halfWidth);
  const endT = Math.min(1, Math.abs(ballX) / PITCH.halfLength);
  return {
    position: {
      x: clamp(ballX * 0.78, -40, 40),
      y: 21.5 + nearT * 2.7 + Math.min(2.2, Math.abs(ballX) * 0.025),
      z: fixedSide * (30 + nearT * 3.7 + endT * 0.8)
    },
    target: {
      x: clamp(ballX * 0.85, -42, 42),
      y: 0,
      z: ballZ * 0.48
    },
    fov: 48 + nearT * 4.5 + endT * 0.5
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
