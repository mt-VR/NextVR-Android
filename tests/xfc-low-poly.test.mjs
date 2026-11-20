import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {startXfcServer} from '../xfc-game/serve.mjs';
import {launchOrSkip} from './support/chromium.mjs';

// Estilo "low-poly de PSP" (PES 2013 / Bomba Patch).
//
// A tentativa de decimar a malha da Micah (grade espacial, depois colapso de
// aresta) foi reprovada três vezes: rasgava o corpo e embaralhava skinning e
// UVs. O que está no jogo é outra coisa — uma silhueta própria de volumes
// fechados presa aos mesmos ossos, com a malha densa escondida. Estes testes
// garantem que continua assim: poucos polígonos, animação de verdade e a
// malha cheia intacta quando o estilo é o moderno.

test('módulo da silhueta exporta attachLowPolySilhouette e não decima geometria', async () => {
  const source = await readFile('xfc-game/src/match3d/low-poly.js', 'utf8');
  assert.match(source, /export function attachLowPolySilhouette/);
  // Se alguém voltar a decimar, estes nomes aparecem no arquivo.
  for (const banned of ['toNonIndexed'].filter(Boolean)) {
    assert.ok(!/decimate|mergeVertices\(|simplify\(/.test(source), `decimção reintroduzida (${banned})`);
  }
  // A cor por faceta é o que dá o padrão do uniforme sem textura.
  assert.match(source, /vertexColors: true/);
  assert.match(source, /facetColor/);
});

test('jogador low-poly: poucos triângulos visíveis, malha cheia escondida e animação no lugar', {timeout: 90000}, async t => {
  const {server, url} = await startXfcServer();
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage({viewport: {width: 960, height: 540}});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(url);
    const result = await page.evaluate(async () => {
      const THREE = (await import('/vendor/three.module.min.js')).default
        || (await import('/vendor/three.module.min.js'));
      const {preloadFootballerPack, createGltfPlayer} = await import('/src/match3d/models.js');
      await preloadFootballerPack();
      const look = {
        name: 'Atleta Low', skinTone: '#96613f', hairStyle: 'lab-low-fade',
        kit: {primary: '#004d98', secondary: '#a50044', accent: '#edbb00', pattern: 'stripes'},
        shorts: '#004d98', socks: '#004d98', number: 10
      };
      // Conta só o que é renderizado: a silhueta esconde a malha densa.
      const visibleTriangles = model => {
        let total = 0;
        model.root.traverse(mesh => {
          if (mesh.isMesh && mesh.visible && mesh.geometry) {
            total += (mesh.geometry.index?.count || mesh.geometry.attributes.position.count) / 3;
          }
        });
        return total;
      };
      const full = createGltfPlayer({...look, lowPoly: false});
      const low = createGltfPlayer({...look, lowPoly: true});
      // A opção `playerStyle` é a que a tela de Ajustes › Gráficos grava.
      const viaProfile = createGltfPlayer({...look, playerStyle: 'low-poly-psp'});

      const fullTris = visibleTriangles(full);
      const lowTris = visibleTriangles(low);
      const profileTris = visibleTriangles(viaProfile);

      // As peças da silhueta ficam presas aos OSSOS, não a um grupo solto:
      // é isso que faz a animação mover o corpo low-poly.
      let onBones = 0, flat = true, materials = new Set();
      low.root.traverse(o => {
        if (o.isMesh && o.name === 'xfc-lowpoly-part') {
          onBones++;
          materials.add(o.material);
          if (!o.material.flatShading) flat = false;
        }
      });

      // Corrida: a mão low-poly tem de sair do lugar junto com o esqueleto.
      const handMesh = low.bones.leftHand.children.find(o => o.name === 'xfc-lowpoly-part');
      const before = new THREE.Vector3();
      handMesh.getWorldPosition(before);
      for (let i = 0; i < 45; i++) low.update(1 / 60, {speed: 6});
      low.root.updateMatrixWorld(true);
      const after = new THREE.Vector3();
      handMesh.getWorldPosition(after);

      // A malha cheia continua íntegra para quando o estilo for o moderno.
      let legacyMeshes = 0;
      full.root.traverse(o => { if (o.isMesh && o.name !== 'xfc-lowpoly-part') legacyMeshes++; });

      return {
        style: low.root.userData.visualStyle,
        profileStyle: viaProfile.root.userData.visualStyle,
        fullStyle: full.root.userData.visualStyle,
        fullTris, lowTris, profileTris,
        onBones, flat, materialCount: materials.size,
        handMoved: before.distanceTo(after),
        legacyMeshes,
        shadowVisible: !!low.root.getObjectByName('xfc-player-shadow')?.visible,
        reported: low.root.userData.lowPoly
      };
    });

    assert.equal(result.style, 'low-poly-psp');
    assert.equal(result.profileStyle, 'low-poly-psp', 'playerStyle = "low-poly-psp" tem de ligar o estilo');
    assert.equal(result.fullStyle, 'classic-ps2', 'sem a opção o atleta continua moderno');
    assert.ok(result.lowTris < result.fullTris * 0.25,
      `low-poly precisa ter menos de 25% dos triângulos (cheio ${result.fullTris}, low ${result.lowTris})`);
    assert.ok(result.lowTris > 200, `silhueta vazia? ${result.lowTris} triângulos`);
    assert.equal(result.profileTris, result.lowTris);
    assert.ok(result.onBones >= 20, `peças presas aos ossos: ${result.onBones}`);
    assert.ok(result.flat, 'material chapado (flatShading) em todas as peças');
    assert.ok(result.materialCount <= 10, `materiais demais: ${result.materialCount}`);
    assert.ok(result.handMoved > 0.05, `a mão low-poly não acompanhou a corrida (${result.handMoved})`);
    assert.ok(result.legacyMeshes >= 8, 'a malha original precisa continuar montada');
    assert.ok(result.shadowVisible, 'a sombra de contato precisa continuar aparecendo');
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
    server.close();
  }
});
