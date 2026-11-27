import test from 'node:test';
import assert from 'node:assert/strict';
import { appearanceFor } from '../xfc-game/src/data/appearance.js';
import { classicFaceProfile, classicIdentity } from '../xfc-game/src/match3d/classic-player.js';
import { startXfcServer } from '../xfc-game/serve.mjs';
import { launchOrSkip } from './support/chromium.mjs';

test('Vinícius face prototype is tied to the supplied portrait without changing other identities', () => {
  const look = appearanceFor({ name: 'Vinícius Jr' });
  assert.equal(classicFaceProfile('Vinícius Jr'), 'vinicius-junior');
  assert.equal(classicFaceProfile('Vinicius Junior'), 'vinicius-junior');
  assert.equal(classicFaceProfile('Valverde'), classicIdentity('Valverde'));
  assert.equal(look.face, 'vinicius-junior');
  assert.equal(look.hairStyle, 'lab-high-fade');
  assert.equal(look.beard, 'stubble');
  assert.equal(look.moustache, 'classic');
  assert.equal(look.brows, 'thick');
});

test('face stays integrated in the existing skinned head; rig and animation API remain shared', { timeout: 90000 }, async t => {
  const { server, url } = await startXfcServer({ port: 0 });
  const browser = await launchOrSkip(t);
  if (!browser) { server.close(); return; }
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const result = await page.evaluate(async () => {
      const { preloadFootballerPack, createGltfPlayer } = await import('/src/match3d/models.js');
      const { appearanceFor } = await import('/src/data/appearance.js');
      await preloadFootballerPack();
      const kit = { primary: '#fff', secondary: '#121212', shorts: '#fff', socks: '#fff' };
      const look = appearanceFor({ name: 'Vinícius Jr' });
      const vini = createGltfPlayer({ ...look, name: 'Vinícius Jr', kit });
      const generic = createGltfPlayer({ name: 'Unverified XFC player', skinTone: look.skinTone, hairColor: look.hairColor, hairStyle: look.hairStyle, kit });
      const faceMesh = model => {
        let mesh;
        model.body.traverse(item => {
          if (item.isSkinnedMesh && item.material?.name === 'Micah | anatomical body.body') mesh = item;
        });
        return mesh;
      };
      const a = faceMesh(vini), b = faceMesh(generic);
      const ap = a.geometry.attributes.position, bp = b.geometry.attributes.position;
      let maxDelta = 0;
      for (let i = 0; i < ap.count; i++) {
        for (let axis = 0; axis < 3; axis++) {
          maxDelta = Math.max(maxDelta, Math.abs(ap.getComponent(i, axis) - bp.getComponent(i, axis)));
        }
      }
      const shader = { vertexShader: '#include <begin_vertex>', fragmentShader: '#include <map_fragment>' };
      a.material.onBeforeCompile(shader);
      const result = {
        profile: vini.root.userData.faceVariant,
        reference: vini.root.userData.faceReference,
        prototype: vini.root.userData.facePrototype,
        faceGeometry: a.geometry.userData.classicFace,
        maxDelta,
        bonesA: Object.keys(vini.bones).sort(),
        bonesB: Object.keys(generic.bones).sort(),
        animation: vini.animation.state().model,
        stubbleShader: shader.fragmentShader.includes('stubbleNoise'),
        browShader: shader.fragmentShader.includes('brows='),
        sharedRig: vini.body.isObject3D && generic.body.isObject3D
      };
      vini.dispose();
      generic.dispose();
      return result;
    });
    assert.equal(result.profile, 'vinicius-junior');
    assert.equal(result.reference, 'assets/players/vinicius-junior.jpg');
    assert.match(result.prototype, /integrated-mesh/);
    assert.equal(result.faceGeometry, 'vinicius-junior');
    assert.ok(result.maxDelta > 0 && result.maxDelta < .03, `subtle local facial change: ${result.maxDelta}`);
    assert.deepEqual(result.bonesA, result.bonesB, 'both players keep identical existing skeleton hooks');
    assert.equal(result.animation, 'glb');
    assert.equal(result.stubbleShader, true, 'stubble is blended into the skinned skin surface');
    assert.equal(result.browShader, true);
    assert.equal(result.sharedRig, true);
  } finally {
    await browser.close();
    server.close();
  }
});
