# NextVR — Android/Cardboard passthrough workspace

NextVR now combines the **HTML spatial experience from this repository's `references.zip`** with
native Camera2 passthrough, PhoneXR/OrangeHanding hands, hardware-rendered browser surfaces and the existing
Google Cardboard SDK (**v1.35.0**).

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

## Latest close-layout update

See [1.0.2 placement, palm-menu gesture, performance changes, and artwork status](docs/CLOSE-LAYOUT-AND-PALM-MENU.md).
The welcome window is now 0.60 m away, apps default to 0.85 m and the dock to 0.65 m.
Turn your palm toward you, hold it open briefly, then pinch the button between thumb/index to
bring only the dock to your current heading. Exact new-logo packaging remains pending an
accessible source file; the existing icon is retained explicitly, not passed off as the new logo.

## Controls

| Action | How |
| --- | --- |
| Start | Grant camera permission. Look at a language in the close, eye-level welcome window for 1.2 seconds, or use the viewer button. Hands are not required for setup. |
| Look around | Existing Cardboard head orientation; windows stay in the world. |
| Select | Aim the PhoneXR shoulder ray and pinch thumb/index. |
| Move a window | Close a fist over the window, move your palm, then open to release. The white lower handle also works. |
| Direct touch | Touch a surface within arm’s reach with your index fingertip; default distant windows use the ray. |
| Return to dock arc | Use the window's repin control. |
| Browser scrolling | Hold a pinch on the page and move. |
| Type | Focus a field and use the floating keyboard. |
| Fallback input | Look at a control and press the viewer button / tap the phone screen. |
| Recenter | Crosshair/recenter control on the dock. |
| Pair viewer | Native settings → Switch Cardboard viewer. Before pairing, SDK Cardboard v1 defaults are used. |
| Adjust sound | Phone's media-volume buttons; normal Android headphone/Bluetooth routing. |
| Exit | Native close control or Android back. |

Six floating windows are supported in addition to the dock, keyboard and HUD. Library/store
styling, menus, settings, gallery, browser chrome and animations come from
the prototype. **All tracking, filtering, hand silhouettes and pointer gestures come from PhoneXR**,
not the archive’s blue skeleton. Passthrough is the only environment.

## Code map

| Path | Responsibility |
| --- | --- |
| `references.zip` | Unmodified primary visual/UX reference |
| `web/index.html`, `web/src/apps.js` | Reference styling, dock, library/store and application surfaces |
| `web/src/windows.js` | World layout, animation, drag, keyboard, ray interaction |
| `web/src/hands.js` | Processed PhoneXR hand/ray adapter; no web detector or gesture thresholds |
| `…/hands/`, `…/PhoneXrHandRenderer.kt` | Native PhoneXR gesture/filter pipeline and GL silhouettes/pointers |
| `…/com/samrat/orangehanding/` | Fork’s MediaPipe/YOLO FusionHands detector and crop rescue |
| `web/src/atlas.js` | Stable HTML texture slots and world-transform submission |
| `web/src/core.js` | Reference state, localization, content root and native pose input |
| `nextvr-android/src/main/java/com/nextvr/cardboard/PassthroughCamera.java` | Camera2 lifecycle, shared upright unmirrored bitmap, bounded OrangeHanding worker |
| `…/SpatialRenderer.java` | 2D camera + OES HTML shaders, glass, alpha and per-eye world composition |
| `…/WebSurface.java` | GPU-backed virtual-display WebViews, browser security, touch/media handling |
| `…/NextVrActivity.java` | Lifecycle, JNI callbacks, permissions, HTML/native bridge and Android audio |
| `nextvr-android/src/main/jni/nextvr_app.cc` | Existing Cardboard orientation, stereo framebuffer and distortion infrastructure |
| `sdk/`, `java_api/`, `proto/`, `third_party/` | Vendored official Cardboard SDK |
| `tests/` | Reference UI browser tests and spatial/security invariants |

## Attribution

The Cardboard SDK/sample retains its Apache-2.0 headers and [license](LICENSE-CARDBOARD-SDK).
See [third-party provenance](docs/THIRD-PARTY.md) for the bundled web libraries/model and the
technical source integrated, including YOLO model distribution restrictions. No UI theme or positional-tracking system from the linked
NextVR repository has been substituted for the supplied prototype.
