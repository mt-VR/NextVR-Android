// ============================================================================
// ATMOXR — matemática pura do paintMR 3D (sem DOM, testável em Node).
//
// A cena do desenho é desenhada com câmeras SEM rotação (camada head-locked por cima do
// passthrough), então as coordenadas dela são as da cabeça. Para um ponto `p` guardado no
// "espaço da pintura" reaparecer sempre na MESMA direção do mundo:
//
//     view(t) = q(t)⁻¹ · q(0) · p        (q = orientação da cabeça, view → mundo)
//
// O build 81 usava q(t)·q(0)⁻¹ (a matriz trocada), e o desenho acompanhava a cabeça.
// ============================================================================
import * as THREE from 'three';

/** Rotação do grupo de traços: leva o frame da pintura para o frame da cabeça. */
export function paintAnchorQuaternion(headQ, q0, out = new THREE.Quaternion()) {
  return out.copy(headQ).invert().multiply(q0);
}

/** Direção no mundo de um ponto do frame da pintura (usada pelos testes de ancoragem). */
export function paintPointWorldDir(headQ, anchorQ, point, out = new THREE.Vector3()) {
  return out.copy(point).applyQuaternion(anchorQ).applyQuaternion(headQ).normalize();
}

/** Translação do grupo de traços para compensar o 6DoF (mundo → frame da cabeça). */
export function paintAnchorOffset(headQ, offset, out = new THREE.Vector3()) {
  return out.copy(offset).multiplyScalar(-1).applyQuaternion(headQ.clone().invert());
}
