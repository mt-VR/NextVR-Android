import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const html = await readFile('web/index.html', 'utf8');
test('dock grip is below and mini-window grip is on the right', () => {
  const dock = html.match(/\.panel-move-handle \{([^}]+)\}/)[1];
  assert.match(dock, /bottom: -17px/);
  assert.match(dock, /translateX/);
  const grip = html.match(/\.dixvr-win-move-handle \{([^}]+)\}/)[1];
  assert.match(grip, /right: 0/);
  assert.match(html, /attachMultitaskPointerDrag\(handle, appId, getPanel3D\)/);
  assert.match(html, /drag.side !== side/);
  assert.match(html, /if \(!drag.seen\)/);
});
test('workspace is closer, follows gaze by default and recenters at game transitions', () => {
  assert.match(html, /DOCK_DIST = 1\.85/);
  assert.match(html, /ARC_DIST = 2\.00/);
  assert.match(html, /let worldLockEnabled = false/);
  assert.match(html, /function suspendMultitaskForGame\(suspend\) \{\s*multitaskSuspendedForGame = !!suspend;\s*alignPanelInFront\(\)/);
});
test('24 FPS scheduling preserves remainder instead of falling to 15 FPS on a 30 Hz camera', () => {
  assert.match(html, /ANALYSIS_INTERVAL = 1000 \/ 24/);
  assert.match(html, /lastAnalysisTime = now - Math.min/);
  let last = 0, frames = 0;
  const interval = 1000 / 24;
  for (let i = 1; i <= 300; i++) {
    const now = i * 1000 / 30;
    if (now - last >= interval) {
      last = now - Math.min(now - last - interval, interval);
      frames++;
    }
  }
  assert.ok(frames >= 239 && frames <= 240, `analyzed ${frames} frames in 10 seconds`);
});
