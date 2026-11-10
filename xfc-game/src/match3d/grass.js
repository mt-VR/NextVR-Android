// Lâminas de grama 3D leves: duas folhas triangulares que se cruzam em cada
// instância. As bases ficam no plano do campo para não gerar fragmentos
// flutuantes; a textura procedural do estádio fornece o detalhe de perto.

import { THREE } from './engine.js';
import { PITCH } from './constants.js';

export function addGrassBlades(parent, count = 7600) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.018, 0, 0,   0.018, 0, 0,   0, 0.045, 0.012,
     0, 0, -0.018,  0, 0, 0.018,   0.012, 0.04, 0
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
      0.006,
      (random() - 0.5) * (PITCH.width - 1)
    );
    dummy.rotation.set(0, random() * Math.PI * 2, 0);
    const height = 0.72 + random() * 0.55;
    const width = 0.78 + random() * 0.35;
    dummy.scale.set(width, height, width);
    dummy.updateMatrix();
    grass.setMatrixAt(index, dummy.matrix);

    // Variação verde estreita; sem intensidades acima de 1 ou tons quase pretos
    // que, à distância, viravam pontos e manchas no gramado.
    const shade = 0.82 + random() * 0.22;
    color.setRGB(0.29 * shade, 0.68 * shade, 0.20 * shade);
    grass.setColorAt(index, color);
  }

  grass.instanceMatrix.needsUpdate = true;
  if (grass.instanceColor) grass.instanceColor.needsUpdate = true;
  grass.computeBoundingSphere();
  parent.add(grass);
  return grass;
}
