import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read=path=>readFile(path,'utf8');

test('installed apps flow from Library tiles to Surface-backed Shizuku displays and back to VR input',async()=>{
  const [manifest,gradle,aidl,manager,service,activity,atlas,apps,windows]=await Promise.all([
    read('nextvr-android/src/main/AndroidManifest.xml'),read('nextvr-android/build.gradle'),
    read('nextvr-android/src/main/aidl/com/nextvr/app/IDisplayService.aidl'),
    read('nextvr-android/src/main/java/com/nextvr/app/AndroidAppManager.java'),
    read('nextvr-android/src/main/java/com/nextvr/app/DisplayUserService.java'),
    read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java'),
    read('web/src/atlas.js'),read('web/src/apps.js'),read('web/src/windows.js'),
  ]);
  assert.match(gradle,/aidl\s*=\s*true/);
  assert.match(gradle,/dev\.rikka\.shizuku:api:13\.1\.5/);
  assert.match(gradle,/dev\.rikka\.shizuku:provider:13\.1\.5/);
  assert.match(manifest,/android\.intent\.category\.LAUNCHER/);
  assert.match(manifest,/rikka\.shizuku\.ShizukuProvider/);
  assert.match(aidl,/createDisplay\(in Surface surface, int width, int height, int densityDpi\)/);
  assert.match(aidl,/injectMotion\(in MotionEvent event, int displayId\)/);
  assert.match(manager,/queryIntentActivities\(launcher, 0\)/);
  assert.match(manager,/Shizuku\.requestPermission\(/);
  assert.match(manager,/Shizuku\.bindUserService\(/);
  assert.match(service,/createVirtualDisplay\(/);
  assert.match(service,/"--display", Integer\.toString\(displayId\)/);
  assert.match(service,/InputEvent\.class\.getMethod\("setDisplayId", int\.class\)/);
  assert.match(service,/inject\.invoke\(manager, event, 0\)/);
  assert.match(activity,/syncAndroidApps\(JSONArray specs,SpatialRenderer target\)/);
  assert.match(activity,/new Surface\(appTexture\.surface\)/);
  assert.match(activity,/androidAppManager\.close\(id,release\)/);
  assert.match(atlas,/data-native-app/);
  assert.match(atlas,/const viewWidth = Math\.max[\s\S]*viewHeight/);
  assert.match(atlas,/window\.NativeXR\.frame\(scene, specs, appSpecs\)/);
  assert.match(apps,/window\.NativeXR\.androidApps\(\)/);
  assert.match(apps,/data-android-app/);
  assert.match(windows,/window\.NativeXR\?\.key\(id,'BACK'\)/);
  assert.match(windows,/closest\('\[data-native-app\]'\)/);
  assert.match(windows,/NativeXR\.handTouch\(press\.id, action, x, y\)/);
  assert.match(windows,/window\.NativeXR\.key\(kbTarget\.nativeId, ch\)/);
  assert.doesNotMatch(service,/MediaProjection/,'app content is rendered into the VR surface, not screen-captured');
});
