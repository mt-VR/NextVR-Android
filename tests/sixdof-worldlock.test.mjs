// Regressão do 6DoF: com World Lock nada de translação; sem ele, só passo com consenso.
// (O bug relatado era o mundo "indo para a frente e para os lados do nada".)
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { SixDof, Walk, bindSixDofContext } from '../web/src/sixdof.js';

const cam = new THREE.PerspectiveCamera();
bindSixDofContext({ camera: cam, settings: { sixdof: 1 } });

const feed = (sc, frames = 8, moving = true) => {
  for (let i = 0; i < frames; i++) {
    SixDof.applyFlowScale(sc, 0, 0, moving);
    SixDof.update(1000 + i * 16, 0.016);
  }
};

test('World Lock (default) never translates, no matter what the optical flow says', () => {
  SixDof.reset();
  SixDof.setWorldLock(true);
  feed(0.05, 20);
  assert.ok(SixDof.out.length() < 1e-9, `world moved ${SixDof.out.length().toFixed(4)} m with World Lock ON`);
  assert.equal(SixDof.worldLocked, true);
});

test('6DoF without World Lock rejects alternating noise and micro-flow (no drift)', () => {
  SixDof.reset();
  SixDof.setWorldLock(false);
  for (let i = 0; i < 30; i++) {
    SixDof.applyFlowScale(i % 2 ? 0.05 : -0.05, 0, 0, true);
    SixDof.update(1000 + i * 16, 0.016);
  }
  assert.ok(SixDof.out.length() < 1e-9, `alternating flow drifted ${SixDof.out.length().toFixed(4)} m`);

  SixDof.reset();
  SixDof.setWorldLock(false);
  feed(0.0015, 30);
  assert.ok(SixDof.out.length() < 1e-9, `micro-flow drifted ${SixDof.out.length().toFixed(4)} m`);
});

test('6DoF without World Lock still walks with two concordant radial samples', () => {
  SixDof.reset();
  SixDof.setWorldLock(false);
  feed(0.05, 6);
  assert.ok(SixDof.out.length() > 0.01, 'expected a real step when the flow is consistent');
  assert.ok(SixDof.out.length() < 1.2, 'step must stay inside the safety clamp');
});

test('walking is never assumed without accelerometer confirmation', () => {
  const fresh = Object.create(Walk);
  fresh.lastA = null;
  fresh.energy = 0;
  assert.equal(fresh.moving(), false);
});
