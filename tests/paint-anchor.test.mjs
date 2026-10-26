// Regressão do paintMR 3D: um traço guardado no espaço NÃO pode acompanhar a cabeça.
// O build 81 usava q(t)·q(0)⁻¹ (matriz trocada) e o desenho ficava colado na cara.
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { paintAnchorQuaternion, paintPointWorldDir } from '../web/src/mr-paint-math.js';

const deg = d => (d * Math.PI) / 180;

test('paintMR anchoring keeps a stored stroke fixed in the world while the head turns', () => {
  const q0 = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(4), deg(-12), deg(2), 'YXZ'));
  const point = new THREE.Vector3(0.12, -0.06, -0.55);
  const anchor = new THREE.Quaternion();
  const dirs = [];

  for (const [yaw, pitch, roll] of [[0, 0, 0], [35, 10, 0], [-70, -20, 12], [120, 5, -25]]) {
    const headQ = q0.clone().multiply(
      new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(pitch), deg(yaw), deg(roll), 'YXZ')),
    );
    paintAnchorQuaternion(headQ, q0, anchor);
    dirs.push(paintPointWorldDir(headQ, anchor, point).clone());
  }

  // O ponto do traço tem de apontar sempre para a MESMA direção do mundo (tolerância 0,01°).
  for (const d of dirs.slice(1)) {
    assert.ok(d.angleTo(dirs[0]) < deg(0.01), `stroke moved ${(d.angleTo(dirs[0]) * 180 / Math.PI).toFixed(2)}° with the head`);
  }
});

test('paintMR anchoring is not the identity and not the inverted (build 81) matrix', () => {
  const q0 = new THREE.Quaternion();
  const headQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, deg(40), 0, 'YXZ'));
  const anchor = paintAnchorQuaternion(headQ, q0, new THREE.Quaternion());
  const point = new THREE.Vector3(0, 0, -1);
  const correct = point.clone().applyQuaternion(anchor);
  const oldBug = point.clone().applyQuaternion(headQ);      // q(t)·q(0)⁻¹ (build 81)
  assert.ok(correct.distanceTo(oldBug) > 0.5, 'anchoring must differ from the old (wrong) order');
  // Girar a cabeça 40° para a esquerda move o traço fixo para a DIREITA na tela (+X).
  assert.ok(correct.x > 0.4, `expected the stroke to stay put in the world, got x=${correct.x.toFixed(2)}`);
});
