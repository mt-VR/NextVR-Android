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
 * Câmera de transmissão — o modelo do eFootball (print e pedido do usuário).
 *
 * Como a câmera de transmissão do eFootball/PES funciona, de acordo com a
 * documentação e as análises das versões:
 *
 *   • a lente fica na lateral, na altura do meio-campo, e o que se move é a
 *     MIRA: ela acompanha a bola nos dois eixos. Não é um quadro fixo que só
 *     desliza — a câmera gira para onde a bola está;
 *   • a objetiva abre e fecha com a distância da jogada (o "zoom" do menu);
 *   • o enquadramento é um recorte, não o campo inteiro: no print, a
 *     arquibancada é uma faixa fina no topo e a linha lateral de baixo passa
 *     por baixo da borda do quadro.
 *
 * O que está montado aqui, ponto por ponto:
 *
 *   • a LENTE segue a bola no comprimento do campo (`CAMERA_PAN_FACTOR = 1`):
 *     quando o lance vai para o outro lado, a câmera vai junto e a bola fica
 *     sempre no centro horizontal do quadro;
 *   • a lente também recua quando a bola vem para o lado dela
 *     (`CAMERA_Z_FOLLOW`), porque a lateral do gramado passa 11 m abaixo da
 *     lente e o lance sairia pela borda de baixo;
 *   • a MIRA sobe quando a bola está do lado oposto (`CAMERA_AIM_LIFT`): é o
 *     "a câmera vai um pouco para cima dele" do pedido — quanto mais longe a
 *     bola, mais alto o olhar, e a arquibancada de fundo desce no quadro;
 *   • altura de 16 m e 45 m do eixo do campo: acima das placas (1,25 m) e do
 *     LED (3,1 m), antes do muro da arquibancada (54 m). O banco técnico fica
 *     em `z = 50`, atrás da lente (ver `buildSidelineBench` em `stadium.js`);
 *   • alvo 32 m à frente no chão e `fov = 54`: 27° de inclinação, o que deixa
 *     as placas do lado oposto no topo e o gramado até a borda de baixo.
 *
 * Medido com o `three` do vendor em 1280×720, para a bola em todo o campo: ela
 * fica entre 41% e 54% da altura da tela (nunca encosta nas bordas) e a 0 do
 * centro horizontal quando está no meio; jogador de linha no meio-campo com
 * 28 px de altura (eram 17 px na v0.5.44).
 *
 * `BROADCAST_CAMERA_LIMITS` é o teto do zoom "mais aberta" do menu de pausa:
 * sem ele, o `cameraZoom` de 1,2 levaria a lente para dentro da arquibancada.
 */
// v0.5.59: Kick Off volta à lente pré-0.5.58 (16 m / 45 m). A carreira, no
// campo maior, chega mais perto para o atleta não virar um ponto no gramado.
const CAMERA_PRESETS = {
  standard: {
    height: 16, z: 45, zMin: 38, zMax: 52.5, targetAhead: 32, fov: 54,
    panFactor: 1, zFollow: 0.6, aimLift: 0.25, aimBase: -2, topZoom: 0.2
  },
  career: {
    height: 13.2, z: 38, zMin: 32, zMax: 48, targetAhead: 24, fov: 50,
    panFactor: 1, zFollow: 0.5, aimLift: 0.22, aimBase: -1.4, topZoom: 0.16
  }
};

let cameraPreset = CAMERA_PRESETS.standard;

/** Kick Off = `standard`; carreira = `career` (lente mais perto). */
export function setBroadcastCameraLayout(kind = 'standard') {
  cameraPreset = kind === 'career' ? CAMERA_PRESETS.career : CAMERA_PRESETS.standard;
  BROADCAST_CAMERA_LIMITS.maxZ = cameraPreset.zMax;
  return cameraPreset;
}

/** Teto do zoom do menu de pausa: a lente nunca entra na arquibancada. */
export const BROADCAST_CAMERA_LIMITS = {
  minHeight: 8,
  maxHeight: 22,
  minZ: 32,
  maxZ: CAMERA_PRESETS.standard.zMax
};

/**
 * Enquadramento de transmissão lateral que acompanha a bola.
 *
 * A câmera fica na lateral, no eixo do meio-campo, e panorâmica em X junto com
 * a jogada. `side` escolhe a lateral (o jogo usa sempre a mesma, para o
 * analógico não inverter); `velocity` dá a antecipação do movimento.
 */
export function broadcastCameraPose(position, side = BROADCAST_CAMERA_SIDE, velocity = null, layout) {
  const preset = layout === 'career' ? CAMERA_PRESETS.career
    : layout === 'standard' ? CAMERA_PRESETS.standard
    : cameraPreset;
  const fixedSide = side < 0 ? -1 : 1;
  const ballX = clamp((Number(position?.x) || 0) + clamp((Number(velocity?.x) || 0) * 0.35, -6, 6),
    -PITCH.halfLength - 4, PITCH.halfLength + 4);
  const ballZ = Number(position?.z) || 0;
  const panX = clamp(ballX * preset.panFactor, -PITCH.halfLength, PITCH.halfLength);
  const lensZ = clamp(preset.z + ballZ * preset.zFollow, preset.zMin, preset.zMax);
  const aimZ = lensZ - preset.targetAhead;
  const aimY = clamp((aimZ - ballZ) * preset.aimLift + preset.aimBase, -3, 14);
  const far = clamp(-ballZ / PITCH.halfWidth, 0, 1);
  return {
    position: { x: panX, y: preset.height, z: fixedSide * lensZ },
    target: { x: panX, y: aimY, z: fixedSide * aimZ },
    fov: preset.fov * (1 - far * preset.topZoom)
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
