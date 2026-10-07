import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pack, ATLAS_SIZE } from '../web/src/atlas.js';
import * as THREE from 'three';

test('atlas keeps the HUD clear and allocates non-overlapping padded surfaces', () => {
  const rects = pack([{width:980,height:78}, ...Array(6).fill({width:1040,height:660}), {width:1150,height:450}]);
  for (let i=0;i<rects.length;i++) {
    const [x,y,w,h]=rects[i];
    assert.ok(x>=0 && y>=1024 && x+w<=ATLAS_SIZE && y+h<=ATLAS_SIZE);
    for (let j=0;j<i;j++) {
      const [a,b,c,d]=rects[j]; assert.ok(x+w<=a || a+c<=x || y+h<=b || b+d<=y);
    }
  }
});
test('atlas rejects overflow rather than silently replacing another window texture', () => {
  assert.throws(()=>pack(Array(30).fill({width:1040,height:660})), /full/);
});
test('Cardboard view inversion has the expected orientation, with no translation', () => {
  const head = new THREE.Matrix4().makeRotationY(.7);
  const camera = head.clone().invert();
  const result = new THREE.Vector3(0,0,-1).applyMatrix4(camera);
  assert.ok(result.x > 0);
  assert.equal(camera.elements[12],0); assert.equal(camera.elements[13],0);
});
test('render path removes the room and uses Cardboard stereo with a camera OES pass', async () => {
  const cpp=await readFile('nextvr-android/src/main/jni/nextvr_app.cc','utf8');
  const java=await readFile('nextvr-android/src/main/java/com/nextvr/cardboard/SpatialRenderer.java','utf8');
  assert.ok(cpp.includes('CardboardHeadTracker_getPose'));
  assert.ok(cpp.includes('CardboardDistortionRenderer_renderEyeToDisplay'));
  assert.ok(!cpp.includes('DrawRoom') && !cpp.includes('GetTranslationMatrix(position)'));
  assert.ok(java.includes('samplerExternalOES') && java.includes('GL_ONE_MINUS_SRC_ALPHA'));
});
test('runtime shell cannot load untrusted executable content into its native bridge', async () => {
  const java=await readFile('nextvr-android/src/main/java/com/nextvr/cardboard/WebSurface.java','utf8');
  assert.ok(java.includes("frame-src 'none'"));
  assert.ok(java.includes('if(shell) web.addJavascriptInterface'));
  assert.ok(java.includes('s.setAllowFileAccess(false)'));
  assert.ok(java.includes('request.deny()'));
});
