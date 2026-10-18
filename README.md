# NextVR — Android/Cardboard passthrough workspace

NextVR combines the spatial HTML workspace with the latest visual assets from
**`new_references.zip`** (the primary visual source), native Camera2 passthrough, a hand-tracking
engine built for this project (`com.nextvr.handtrack`, MediaPipe Tasks Vision), hardware-rendered
browser surfaces and the existing Google Cardboard SDK (**v1.35.0**).

The old artificial room and collectible objects have been removed. The camera is the background;
the dock, floating windows and keyboard remain independent spatial surfaces rendered for both
eyes. Cardboard still owns head orientation, eye projection and lens distortion. **6 DoF is not
included or enabled.**

> This is an integration with automated UI tests and APK build verification, not a claim of
> physical-device or pixel-perfect validation. The reference's simulated game-store features
> remain demonstrations. See [architecture, scope and device checklist](docs/REFERENCE-INTEGRATION.md).
>
> Use seated. Single-camera passthrough is not depth-correct and is not safe for walking.

## Requirements

- Android Studio compatible with the project's AGP 9.2 / Gradle 9.6.1 configuration
- JDK **21**, Android SDK **35**, NDK **29.0.14206865**, CMake **3.22.1**
- Android **8.0/API 26+**, rear camera, gyroscope/accelerometer, Google Cardboard viewer
- An up-to-date Android System WebView, GLES 3-capable hardware and adequate GPU memory
- Node **22** only when modifying/building/testing the HTML assets (bundled outputs are checked in)

## Build

Open the repository root in Android Studio and select `nextvr-android`, or:

```bash
./gradlew :nextvr-android:testDebugUnitTest :nextvr-android:assembleDebug
adb install -r nextvr-android/build/outputs/apk/debug/nextvr-android-debug.apk
```

The app automatically builds/extracts the Cardboard SDK through `extractNdk`. No separate SDK
build step is required. ARM32 and ARM64 are enabled; a real device is needed for meaningful VR,
hand/camera and audio acceptance tests.

[Android CI](https://github.com/mt-VR/NextVR-Android/actions/workflows/android.yml) builds the APK
and publishes the `nextvr-debug-apk` artifact. CI also tests the actual HTML UI and verifies that
bundled assets match source.

Successive CI builds share one debug signature: the workflow copies `signing/debug.keystore` (the
stock Android debug key, `androiddebugkey`/`android`) to `~/.android/debug.keystore` before building.
Without it every runner generates a fresh key and installing a new round over the previous install
fails with *App not installed*. The first install after this change needs the previous build
uninstalled once, because that one was signed with a generated key.

## Develop the reference UI

```bash
npm ci
npm run build:ui
npm test
```

Edit `web/index.html` and `web/src/`, not the minified APK bundle. These files originate from the
supplied archive: the UI has not been replaced with a native-widget approximation. The native
adapter rasterizes the real DOM into stable texture regions and submits its THREE world matrices
to the Cardboard compositor. Browser contents run in isolated WebViews in the same spatial windows.

The headless Chromium test dependency needs standard Linux browser libraries (`libnss3`, `libnspr4`)
on minimal development images. The Ubuntu CI runner already supplies them.

## Latest UI/input update

See [the interaction and floating-window revision](docs/UI-INTERACTION-REVISION.md) and the
[hand-input investigation](docs/hand-tracking-investigation.md). The VR UI accepts only tracked
hand input: gaze dwell, viewer-button activation and touchscreen forwarding are absent end to end;
head rotation updates the view only. Recognized pinch/fist/contact transitions are preserved across
slow UI drains, while redundant pointer moves are coalesced so a release is not queued behind them.
Floating windows use deliberate drag thresholds, bounded world placement and proportional hand
resizing. Hand tracking is one MediaPipe pipeline written for this project
(`com.nextvr.handtrack.HandTracker`): both hands are detected and rendered together; when only one
is present, a one-slot VIDEO graph keeps the common case responsive and a two-slot probe looks for
the second hand every 250 ms. Once both are found, the two-slot graph follows both continuously.
Per-hand prediction and confidence keep a brief missed detection from making its neighbour flicker.
The PhoneXR fork pipeline (YOLO11 wrist recovery, CPU crop rescue on background threads) and its
11.7 MB AGPL pose model are gone.
The
multitask arc keeps the first app centered with the others alternating around it at half a window of
clearance, and re-centers the survivors as apps close; dragging a floating window preserves its
distance from the eye, so moving it never sends it backwards.
The current `N` mark and component icons are
extracted from `new_references.zip`; the older archive is retained only as historical provenance.

## Android app windows

The dock's app library (`Apps do Android`, the phone icon) lists the launchable apps installed on
the device with their real icons and opens them in floating windows of the existing arc. The
window content is the real app: a dedicated virtual display per app, created by a Shizuku user
service running as the `shell` user (no root), started with `am start --display`, with the hand's
touch injected into that display. Without Shizuku the library still works and the dock offers the
phone-screen mirror (`MediaProjection`, behind the foreground service Android requires for a
capture, plus the accessibility service for input), which is a mirror and is labelled as one —
never as an embedded app. Every tile then carries a *Espelhar* shortcut that brings that app to the
phone screen with public API before the capture starts (Android 14+ lets the user pick it in the
system dialog), and resizing a window never leaves the session claiming a size the display refused:
the session only adopts a new size after the display confirms it. Minimize detaches the display surface (the app
keeps running, frame production stops), restore re-attaches the same surface, and closing releases
the display and the app's task. Full architecture, API choices, limitations and the on-device
checklist: [`docs/ANDROID-APP-WINDOWS.md`](docs/ANDROID-APP-WINDOWS.md).

## Games (PhoneXR)

Headset games are the PhoneXR library: the bundled OpenXR runtime (`org.freedesktop.monado.openxr_runtime.out_of_process`,
pinned upstream and embedded in the APK) decides per game whether it can be hosted in-headset on
the phone or has to be opened by the runtime launcher on the phone screen, and the shell reflects
that state in the Applications menu
([`docs/PHONEXR-INTEGRATION.md`](docs/PHONEXR-INTEGRATION.md)).

A hostable game opens as **a window in the world driven by the runtime**: the workspace hides with
its state preserved and restores exactly on exit, the game's stereo canvas is drawn by the same
GLES2 panel pass as the other windows (left/right halves sampled per eye), and pinch input is
gated between the shell and the game (a pinch over shell UI never presses a game button, and the
game never receives a tap into shell windows). Holding a pinch with **both** hands for ~2 s opens
the flat SteamVR-style game menu (Continue / Settings / Exit Game). There are no built-in demo
games anymore — Minecraft VR, VRFS, Roblox and Brawl Stars were demo tiles over the 3D sandbox and
are removed; the storefront points at the library instead of selling them.

Window placement is now free-space aware: `web/src/spawn.js` measures each surface by the angular
rectangle it occupies in the user's view, so a new window is born where nothing is covered and a
pinned arc slot slides aside when the user has parked a detached window in front of it. No minimum
spacing is forced — two windows can still be placed edge to edge, or deliberately overlapping.

## Controls

| Action | How |
| --- | --- |
| Start | Grant camera permission, aim the native MediaPipe hand ray at a language in the close welcome window and pinch. |
| Look around | Existing Cardboard head orientation; windows stay in the world and looking alone never activates them. |
| Select | Aim the MediaPipe hand ray and pinch thumb/index; the hands and pointer use a softer, translucent overlay. |
| Move a window | Close a fist over the window or pinch the white lower handle, move beyond the deliberate-drag threshold, then release. |
| Move the dock | Pinch the grab area just below the dock, move it to a comfortable spot, then release. The small handle appears only while pointed at or moving the dock. |
| Resize a window | Pinch the violet corner handle and move diagonally; size is proportional and bounded. |
| Direct touch | Touch a surface within arm’s reach with your tracked index fingertip; default distant windows use the hand ray. |
| Return to dock arc | Use the window's crosshair/repin control. |
| Browser scrolling | Hold a hand pinch on the page and move. |
| Type | Pinch a field — in a browser, a shell window or an Android app — and the floating keyboard appears in front of that window. Pinch a key and it types immediately; hold it to repeat; slide onto the next key to keep typing. |
| Touchscreen/viewer button | Not routed to the VR UI. Native close/settings remain Android safety/system controls. |
| Recenter | Quick Settings → “Redefinir visualização”. |
| Play a game | Library → Games filter → the game's tile. Hostable PhoneXR games open in-headset; the rest launch on the phone screen by the runtime. |
| Game menu | Hold the pinch with both hands for ~2 s; a flat panel offers Continue, Settings and Exit Game. |
| Pair viewer | Native settings → Switch Cardboard viewer. Before pairing, SDK Cardboard v1 defaults are used. |
| Adjust sound | Phone's media-volume buttons; normal Android headphone/Bluetooth routing. |
| Exit | Native close control or Android back. |

Six floating windows are supported in addition to the dock, keyboard and HUD. Library/store
styling, menus, settings, gallery, browser chrome and animations come from the prototype. The hand
silhouette keeps the requested dark fill (`#211923`) and soft light contour (`#D9D5DF`), drawn from
the APK's native MediaPipe landmarks; the camera stays with Camera2, so the WebView does not open a
competing `getUserMedia` stream or download a second tracker from a CDN. Native filtering and pointer
gestures remain in place. The palm panorama is the default virtual environment; camera passthrough
and the other 360° panoramas remain available.

## Hand tracking performance

Performance measurement and the hand-tracking investigation are documented in
[`docs/hand-tracking-investigation.md`](docs/hand-tracking-investigation.md). Device measurement
procedure and log summariser: [`tools/perf/README.md`](tools/perf/README.md).

## Code map

| Path | Responsibility |
| --- | --- |
| `new_references.zip` | Unmodified primary visual/component reference; current `N` and icon paths originate here |
| `references.zip` | Legacy workspace reference, used only where the newer archive has no corresponding component |
| `web/index.html`, `web/src/apps.js`, `web/src/reference-icons.js` | Current styling, restored vectors, dock, library/store and application surfaces |
| `web/src/windows.js`, `web/src/window-geometry.js` | World layout, bounded drag, proportional resize, keyboard and hand-ray interaction |
| `web/src/typing.js` | The one typing engine: loaded by the shell and injected by the native side into every hosted page, so a real website field and a shell field obey the same caret and key rules |
| `web/src/hands.js` | Cyan hand contour and per-hand pinch cursor, driven by native MediaPipe landmarks |
| `web/src/game.js`, `web/src/two-hand-chord.js`, `web/src/spawn.js` | Playable 3D world (scene, tools, both-hands menu chord) and free-space-aware window placement |
| `…/GameSceneRenderer.kt` | Native GL rendering of game objects: base64 meshes from the shell, one draw call per object, depth-tested against windows |
| `…/hands/`, `…/PhoneXrHandRenderer.kt` | Native landmark filters/gestures and GL pointer rays/targets |
| `…/com/nextvr/handtrack/` | Hand-tracking engine: MediaPipe VIDEO graph, hunting graph while no hand is tracked, owned-bitmap input |
| `web/src/atlas.js` | Stable HTML texture slots and world-transform submission |
| `web/src/core.js` | Reference state, localization, content root and native pose input |
| `nextvr-android/src/main/java/com/nextvr/app/PassthroughCamera.java` | Camera2 lifecycle, shared upright unmirrored bitmap, bounded OrangeHanding worker |
| `…/SpatialRenderer.java` | 2D camera + OES HTML shaders, glass, alpha and per-eye world composition |
| `…/WebSurface.java` | GPU-backed virtual-display WebViews, browser security, PhoneXR contact/media handling |
| `…/NextVrActivity.java` | Lifecycle, JNI callbacks, permissions, HTML/native bridge and Android audio |
| `nextvr-android/src/main/jni/nextvr_app.cc` | Existing Cardboard orientation, stereo framebuffer and distortion infrastructure |
| `sdk/`, `java_api/`, `proto/`, `third_party/` | Vendored official Cardboard SDK |
| `tests/` | Reference UI browser tests and spatial/security invariants |

## Attribution

The Cardboard SDK/sample retains its Apache-2.0 headers and [license](LICENSE-CARDBOARD-SDK).
See [third-party provenance](docs/THIRD-PARTY.md) for the bundled web libraries and models. The
YOLO11 pose model of the earlier PhoneXR integration is no longer distributed. No UI theme or positional-tracking system from the linked
NextVR repository has been substituted for the supplied prototype.
