import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(path, 'utf8');

test('Android forwards Joy-Con gamepad keys and joystick axes to the web shell', async () => {
  const activity = await read('nextvr-android/src/main/java/com/nextvr/app/NextVrActivity.java');
  assert.match(activity, /dispatchKeyEvent\(KeyEvent event\)/);
  assert.match(activity, /InputDevice\.SOURCE_DPAD/);
  assert.match(activity, /KEYCODE_BUTTON_MODE[^\n]*|KEYCODE_HOME/);
  for (const key of ['KEYCODE_DPAD_LEFT', 'KEYCODE_DPAD_RIGHT', 'KEYCODE_DPAD_UP', 'KEYCODE_DPAD_DOWN', 'KEYCODE_BUTTON_A', 'KEYCODE_BUTTON_B']) {
    assert.ok(activity.includes(key), `missing Joy-Con mapping ${key}`);
  }
  assert.match(activity, /window\.__nextvrJoyconKey/);
  assert.match(activity, /dispatchGenericMotionEvent\(MotionEvent event\)/);
  assert.match(activity, /AXIS_HAT_X/);
  assert.match(activity, /AXIS_HAT_Y/);
  assert.match(activity, /window\.__nextvrJoyconAxes/);
});

test('Joy-Con Home hides and restores the spatial workspace without destroying windows', async () => {
  const joycon = await read('web/src/joycon.js');
  const apps = await read('web/src/apps.js');
  const windows = await read('web/src/windows.js');
  assert.match(apps, /import \{ installJoycon \} from '\.\/joycon\.js'/);
  assert.match(apps, /installJoycon\(\)/);
  assert.match(joycon, /windows: wins\.filter\(win => !win\.onboarding\)\.map\(win => \(\{ win, hidden: win\.hidden \}\)\)/);
  assert.match(joycon, /win\.setHidden\(true\)/);
  assert.match(joycon, /setDockHidden\(true\)/);
  assert.match(joycon, /setKeyboardHidden\(true\)/);
  assert.match(joycon, /win\.setHidden\(hidden\)/);
  assert.match(joycon, /setDockHidden\(snapshot\.dockHidden\)/);
  assert.match(joycon, /setDockVisible\(snapshot\.dockVisible\)/);
  assert.match(windows, /export const keyboardHiddenNow = \(\) => kbHidden/);
  assert.match(joycon, /if \(action === 'home'\)/);
});

test('Joy-Con directional navigation and activation stay in ordinary spatial UI', async () => {
  const joycon = await read('web/src/joycon.js');
  const html = await read('web/index.html');
  assert.match(joycon, /function moveSelection\(direction\)/);
  assert.match(joycon, /function activate\(\)/);
  assert.match(joycon, /if \(action === 'accept'\) activate\(\)/);
  assert.match(joycon, /if \(action === 'back'\) back\(\)/);
  assert.match(html, /\.joycon-selected\{/);
  assert.doesNotMatch(joycon, /document\.createElement\(['\"](?:canvas|iframe)['\"]\)/,
    'gamepad affordance is a focus outline on the existing world UI, not a HUD surface');
});
