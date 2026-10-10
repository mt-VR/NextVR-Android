import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('native VR input stays hand-only; hand-visual settings are not an input route',async()=>{
  const [activity,surface,hands,windows,apps,core,bundle,cpp,header,jni]=await Promise.all([
    readFile('nextvr-android/src/main/java/com/nextvr/cardboard/NextVrActivity.java','utf8'),
    readFile('nextvr-android/src/main/java/com/nextvr/cardboard/WebSurface.java','utf8'),
    readFile('web/src/hands.js','utf8'),readFile('web/src/windows.js','utf8'),
    readFile('web/src/apps.js','utf8'),readFile('web/src/core.js','utf8'),
    readFile('nextvr-android/src/main/assets/ui/app.js','utf8'),
    readFile('nextvr-android/src/main/jni/nextvr_app.cc','utf8'),
    readFile('nextvr-android/src/main/jni/nextvr_app.h','utf8'),readFile('nextvr-android/src/main/jni/nextvr_jni.cc','utf8'),
  ]);
  assert.ok(!activity.includes('setOnTouchListener'),'no physical touchscreen selection route is installed');
  assert.ok(!activity.includes('nextvrTrigger') && !hands.includes('nextvrTrigger'));
  assert.match(surface,/properties\.toolType=MotionEvent\.TOOL_TYPE_FINGER[\s\S]*InputDevice\.SOURCE_TOUCHSCREEN/,
    'WebView must receive a correctly typed synthetic pointer stream from the hand-only bridge');
  assert.match(activity,/@JavascriptInterface public void handTouch\(/);
  assert.match(activity,/@JavascriptInterface public void handVisuals\(/,'the native contour visibility preference is not an input bridge');
  assert.match(hands,/NativeXR\.handVisuals\?\.\(visual\)/);
  assert.match(bundle,/handVisuals/,'the APK bundle can toggle native hand visuals without adding a selection route');
  assert.match(surface,/void dispatchHandEvent\(/);
  assert.ok(windows.includes('window.NativeXR.handTouch'));
  assert.ok(!windows.includes('window.NativeXR.touch('));
  for(const source of [cpp,header,jni])assert.ok(!source.includes('OnTriggerEvent')&&!source.includes('nativeOnTriggerEvent'));
  assert.ok(!apps.includes('DwellSelection')&&!apps.includes('gazeElement')&&!apps.includes('setup-gaze'));
  assert.doesNotMatch(bundle,/DwellSelection|gazeElement|setup-gaze|nextvrTrigger/i,
    'the shipped APK bundle contains no gaze/viewer/touch selection fallback');
  assert.match(activity,/handFrames\.offer\(frame,/,'native gesture edges enter the ordered hand-frame mailbox');
  assert.match(activity,/handTouchEvents\.offer\(id,action,x,y\)/,'native pointer edges use the ordered touch queue');
  assert.match(core,/if\(native\)\{S=migrateComfort\(S\);S\.handsOn=true;/);
  assert.doesNotMatch(apps,/toggle\(['"]handsOn['"]/);
});

test('desktop pointer look fallback is explicitly disabled in native mode',async()=>{
  const core=await readFile('web/src/core.js','utf8');
  assert.match(core,/addEventListener\('pointerdown',[\s\S]*?if \(native\) return;/);
  const windows=await readFile('web/src/windows.js','utf8');
  assert.match(windows,/if \(!native\) \{[\s\S]*?handle\.addEventListener\('pointerdown'/);
});
