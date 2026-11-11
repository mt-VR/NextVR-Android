// Lâminas de grama 3D leves: duas folhas triangulares que se cruzam em cada
// instância. As bases ficam no plano do campo para não gerar fragmentos
// flutuantes; a textura procedural do estádio fornece o detalhe de perto.

import { THREE } from './engine.js';
import { PITCH } from './constants.js';

export function addGrassBlades(parent, count = 7600) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.003, 0, 0,   0.003, 0, 0,   0, 0.035, 0.006,
     0, 0, -0.003,  0, 0, 0.003,   0.006, 0.032, 0
  ], 3));
  geometry.setIndex([0, 1, 2, 3, 4, 5]);
  geometry.computeVertexNormals();

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: false,
    side: THREE.DoubleSide
  });
  // Patch instanciado perto da câmera. A grama não tem sombra própria nem
  // dupla iluminação: evita faces pretas. A faixa distante colapsa por inteiro.
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      vec3 bladeWorld=(modelMatrix*instanceMatrix*vec4(0.,0.,0.,1.)).xyz;
      vec2 tile=floor(cameraPosition.xz/5.)*5.;
      vec2 relocated=mod(bladeWorld.xz-tile+10.,20.)-10.+tile;
      vec2 patchOffset=relocated-bladeWorld.xz;
      float detailFade=1.-smoothstep(6.,10.,distance(cameraPosition.xz,relocated));
      detailFade*=step(abs(relocated.x),52.)*step(abs(relocated.y),33.5);
      transformed*=detailFade;
    `).replace('#include <project_vertex>',`#include <project_vertex>
      vec4 grassWorld=modelMatrix*instanceMatrix*vec4(transformed,1.);
      grassWorld.xz+=patchOffset;
      mvPosition=viewMatrix*grassWorld;
      gl_Position=projectionMatrix*mvPosition;
    `);
  };
  material.customProgramCacheKey=()=> 'xfc-grass-local-patch-v3';
  const grass = new THREE.InstancedMesh(geometry, material, count);
  grass.name = 'xfc-procedural-grass';
  grass.frustumCulled=false;
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
    color.setHex(0x4c7836).multiplyScalar(shade);
    grass.setColorAt(index, color);
  }

  grass.instanceMatrix.needsUpdate = true;
  if (grass.instanceColor) grass.instanceColor.needsUpdate = true;
  grass.computeBoundingSphere();
  parent.add(grass);
  return grass;
}
