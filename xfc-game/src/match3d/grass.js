// Grama 3D leve: milhares de lâminas verdes em uma única chamada instanciada.
// A textura de base do campo também é desenhada proceduralmente em stadium.js.

import { THREE } from './engine.js';
import { PITCH } from './constants.js';

export function addGrassBlades(parent, count = 7600) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.022, 0, 0,  0.022, 0, 0,  -0.006, 0.085, 0.008,
     0.015, 0.008, -0.008,  0.039, 0.075, 0.012,  -0.006, 0.085, 0.008
  ], 3));
  geometry.setIndex([0, 1, 2, 3, 4, 5]);
  geometry.computeVertexNormals();

  const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    vertexColors: true,
    side: THREE.DoubleSide
  });
  const grass = new THREE.InstancedMesh(geometry, material, count);
  grass.name = 'xfc-procedural-grass';
  grass.castShadow = false;
  grass.receiveShadow = false;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  let seed = 0x27a11ce;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  for (let index = 0; index < count; index += 1) {
    dummy.position.set(
      (random() - 0.5) * (PITCH.length - 1),
      0.025,
      (random() - 0.5) * (PITCH.width - 1)
    );
    dummy.rotation.set(0, random() * Math.PI * 2, 0);
    const height = 0.55 + random() * 0.9;
    dummy.scale.set(0.7 + random() * 0.75, height, 0.7 + random() * 0.75);
    dummy.updateMatrix();
    grass.setMatrixAt(index, dummy.matrix);

    const shade = 0.88 + random() * 0.32;
    color.setRGB(0.34 * shade, 0.76 * shade, 0.23 * shade);
    grass.setColorAt(index, color);
  }

  grass.instanceMatrix.needsUpdate = true;
  if (grass.instanceColor) grass.instanceColor.needsUpdate = true;
  parent.add(grass);
  return grass;
}
