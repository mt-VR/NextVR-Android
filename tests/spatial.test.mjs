import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pack, ATLAS_SIZE } from '../web/src/atlas.js';
import * as THREE from 'three';

test('atlas keeps the HUD clear and allocates non-overlapping padded surfaces', () => {
  const rects = pack([{width:980,height:78,kind:'dock'}, ...Array.from({length:6},(_,slot)=>({width:1040,height:660,slot})), {width:1150,height:450,kind:'keyboard'}]);
  for (let i=0;i<rects.length;i++) {
    const [x,y,w,h]=rects[i];
    assert.ok(x>=0 && y>=800 && x+w<=ATLAS_SIZE && y+h<=ATLAS_SIZE);
    for (let j=0;j<i;j++) {
      const [a,b,c,d]=rects[j]; assert.ok(x+w<=a || a+c<=x || y+h<=b || b+d<=y);
    }
  }
});
test('atlas rejects overflow rather than silently replacing another window texture', () => {
  assert.throws(()=>pack(Array.from({length:7},(_,slot)=>({width:1040,height:660,slot}))), /full/);
});
test('Cardboard view inversion has the expected orientation, with no translation', () => {
  const head = new THREE.Matrix4().makeRotationY(.7);
  const camera = head.clone().invert();
  const result = new THREE.Vector3(0,0,-1).applyMatrix4(camera);
  assert.ok(result.x > 0);
  assert.equal(camera.elements[12],0); assert.equal(camera.elements[13],0);
});
test('render path removes the room and uses Cardboard stereo with an upright 2D camera pass', async () => {
  const cpp=await readFile('nextvr-android/src/main/jni/nextvr_app.cc','utf8');
  const java=await readFile('nextvr-android/src/main/java/com/nextvr/cardboard/SpatialRenderer.java','utf8');
  assert.ok(cpp.includes('CardboardHeadTracker_getPose'));
  assert.ok(cpp.includes('CardboardDistortionRenderer_renderEyeToDisplay'));
  assert.ok(!cpp.includes('DrawRoom') && !cpp.includes('GetTranslationMatrix(position)'));
  assert.ok(java.includes('samplerExternalOES') && java.includes('GL_ONE_MINUS_SRC_ALPHA'));
  assert.ok(java.includes('uniform sampler2D uCamera'));
  const camera=await readFile('nextvr-android/src/main/java/com/nextvr/cardboard/PassthroughCamera.java','utf8');
  assert.ok(!camera.includes('getTransformMatrix(') && !camera.includes('new SurfaceTexture(') && camera.includes('nativeYuvToArgb'));
  assert.equal((camera.match(/postRotate\(/g)||[]).length,1);
  assert.ok(camera.includes('detectOwned(inferenceFrame,stamp,0)'), 'The already-upright, owned analysis frame is not rotated twice');
  assert.ok(camera.includes('image.getTimestamp()/1_000_000L'), 'One Euro and MediaPipe use the capture timestamp');
  assert.ok(cpp.includes('GL_DEPTH24_STENCIL8') && cpp.includes('GL_STENCIL_ATTACHMENT'));
  const hands=await readFile('web/src/hands.js','utf8');
  assert.ok(!hands.includes('class OneEuro') && !hands.includes('pinchHold') && !hands.includes('lineTo('));
});
test('runtime shell cannot load untrusted executable content into its native bridge', async () => {
  const java=await readFile('nextvr-android/src/main/java/com/nextvr/cardboard/WebSurface.java','utf8');
  assert.ok(java.includes("frame-src 'none'"));
  assert.ok(java.includes('if(shell) web.addJavascriptInterface'));
  assert.ok(java.includes('s.setAllowFileAccess(false)'));
  assert.ok(java.includes('request.deny()'));
  assert.ok(java.includes('if(shell)s.setCacheMode(WebSettings.LOAD_NO_CACHE)'));
  assert.ok(java.includes('headers.put("Cache-Control","no-store")'));
});

test('atlas slots do not move surviving windows after a close', () => {
  const a={width:1040,height:660,slot:0}, b={width:1040,height:660,slot:1};
  assert.deepEqual(pack([a,b])[1],pack([b])[0]);
});
