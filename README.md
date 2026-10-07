# NextVR — Android/Cardboard passthrough workspace

NextVR now combines the **HTML spatial experience from this repository's `references.zip`** with
native Camera2 passthrough, MediaPipe hands, hardware-rendered browser surfaces and the existing
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
./gradlew :nextvr-android:assembleDebug
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

## Controls

| Action | How |
| --- | --- |
| Start | Grant camera permission; select a language in the reference's floating welcome window. |
| Look around | Existing Cardboard head orientation; windows stay in the world. |
| Select | Point with the thumb/index midpoint and pinch. |
| Move a window | Pinch and hold its white lower handle; move, then release. |
| Return to dock arc | Use the window's repin control. |
| Browser scrolling | Hold a pinch on the page and move. |
| Type | Focus a field and use the floating keyboard. |
| Fallback input | Look at a control and press the viewer button / tap the phone screen. |
| Recenter | Crosshair/recenter control on the dock. |
| Pair viewer | Native settings → Switch Cardboard viewer. Before pairing, SDK Cardboard v1 defaults are used. |
| Adjust sound | Phone's media-volume buttons; normal Android headphone/Bluetooth routing. |
| Exit | Native close control or Android back. |

Six floating windows are supported in addition to the dock, keyboard and HUD. Library/store
styling, menus, settings, gallery, browser chrome, animations and hand-overlay drawing come from
the prototype. Passthrough is the only environment.

## Code map

| Path | Responsibility |
| --- | --- |
| `references.zip` | Unmodified primary visual/UX reference |
| `web/index.html`, `web/src/apps.js` | Reference styling, dock, library/store and application surfaces |
| `web/src/windows.js` | World layout, animation, drag, keyboard, ray interaction |
| `web/src/hands.js` | Reference One Euro filter, skeleton, midpoint pointer, pinch latch |
| `web/src/atlas.js` | Stable HTML texture slots and world-transform submission |
| `web/src/core.js` | Reference state, localization, content root and native pose input |
| `nextvr-android/src/main/java/com/nextvr/cardboard/PassthroughCamera.java` | Camera2 lifecycle, OES preview and bounded native MediaPipe analysis |
| `…/SpatialRenderer.java` | Camera/HTML OES shaders, glass, alpha and per-eye world composition |
| `…/WebSurface.java` | GPU-backed virtual-display WebViews, browser security, touch/media handling |
| `…/NextVrActivity.java` | Lifecycle, JNI callbacks, permissions, HTML/native bridge and Android audio |
| `nextvr-android/src/main/jni/nextvr_app.cc` | Existing Cardboard orientation, stereo framebuffer and distortion infrastructure |
| `sdk/`, `java_api/`, `proto/`, `third_party/` | Vendored official Cardboard SDK |
| `tests/` | Reference UI browser tests and spatial/security invariants |

## Attribution

The Cardboard SDK/sample retains its Apache-2.0 headers and [license](LICENSE-CARDBOARD-SDK).
See [third-party provenance](docs/THIRD-PARTY.md) for the bundled web libraries/model and the
technical reference consulted. No UI theme or positional-tracking system from the linked
NextVR repository has been substituted for the supplied prototype.
