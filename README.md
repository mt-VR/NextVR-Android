# NextVR — Android

A Google Cardboard VR application for Android, built on the **official Cardboard SDK for Android
NDK** ([googlevr/cardboard](https://github.com/googlevr/cardboard), vendored here at **v1.35.0**,
Apache-2.0), following Google's
[Cardboard NDK quickstart](https://developers.google.com/cardboard/develop/c/quickstart).

NextVR is the "HelloCardboard" of this repository: it recreates the SDK demo (stereoscopic
rendering, head tracking, viewer-button interaction, viewer QR-code configuration) under its own
identity, package and source layout, ready to be extended with your own 3D content.

## What is in the repository

| Path | Contents |
| --- | --- |
| `sdk/`, `java_api/`, `proto/`, `third_party/` | The official Google Cardboard SDK for Android NDK (unmodified, v1.35.0). Contains the C API header `sdk/include/cardboard.h`, the native SDK sources, the viewer QR-code reader and the Java helper classes. |
| `nextvr-android/` | The **NextVR app** — Java activity (`NextVrActivity`) + C++/NDK renderer (`nextvr_app.cc`), equivalent to `hellocardboard-android` in the quickstart. |
| `.github/workflows/android.yml` | CI that builds the debug APK and publishes it as a downloadable artifact. |
| `LICENSE-CARDBOARD-SDK` | Apache-2.0 license of the vendored Cardboard SDK. |

## Requirements

* Android Studio **2024.1.2 "Koala Feature Drop"** or newer
* Android SDK **35 (Android 15)** or newer
* Android NDK **29.0.14206865** and **CMake 3.22.1** (pinned in `sdk/build.gradle`; install them
  from *Settings → Languages & Frameworks → Android SDK → SDK Tools*)
* A device running **Android 8.0 (API 26)** or newer with an accelerometer and a gyroscope,
  plus a Google Cardboard viewer
* A JDK 17+ (Android Studio ships one)

## Build and run in Android Studio

1. `File → Open…` and select the **root of this repository**.
2. Build the Cardboard SDK: in the *Gradle* tool window open
   **`sdk → Tasks → build → assemble`** and double-click it (this is step 3 of the quickstart; the
   SDK module is called `sdk` here instead of `cardboard/:sdk`).
3. Connect your phone with USB debugging enabled, then **Run → Run… → `nextvr-android`**.

`:nextvr-android:assembleDebug` already depends on `:sdk:assembleRelease` and automatically extracts
`libGfxPluginCardboard.so` + `cardboard.h` into `nextvr-android/libraries/` (`extractNdk` task), so
step 2 is only needed if you want to build the SDK on its own.

## Build from the command line

```bash
./gradlew :nextvr-android:assembleDebug          # builds the SDK first, then NextVR
adb install -r nextvr-android/build/outputs/apk/debug/nextvr-android-debug.apk
```

No Android Studio needed to get a runnable APK: every push builds one in CI
(**Actions → Android CI → Artifacts → `nextvr-debug-apk`**).

## Using the app

| Action | How |
| --- | --- |
| Pair your viewer | On first launch (or via ⚙ → *Switch Cardboard viewer*) scan the QR code printed on the inside of your Cardboard viewer. Pressing *SKIP* falls back to Google Cardboard v1 parameters. |
| Look around | Move your head — the head tracker uses the gyroscope/accelerometer. |
| Collect an object | Look at a floating shape and press the **viewer button** (or tap the screen, which emulates the button). |
| Settings | ⚙ button (top-right): *Switch Cardboard viewer*, *About NextVR*. |
| Quit | ✕ button (top-left). |

The UI is English by default and localized to Brazilian Portuguese in `values-pt/`.

## How this project maps to the quickstart

| Quickstart step / API | Where it lives here |
| --- | --- |
| `Cardboard_initializeAndroid`, `CardboardHeadTracker_create` | `nextvr-android/src/main/jni/nextvr_app.cc` (`NextVrApp::NextVrApp`) |
| `CardboardHeadTracker_pause/resume/destroy` | `NextVrApp::OnPause/OnResume/~NextVrApp`, forwarded from `NextVrActivity` lifecycle callbacks |
| `CardboardQrCode_scanQrCodeAndSaveDeviceParams` (viewer setup) | `NextVrApp::SwitchViewer`, triggered by ⚙ → *Switch Cardboard viewer* |
| `CardboardQrCode_getSavedDeviceParams` + `CardboardLensDistortion_create` | `NextVrApp::UpdateDeviceParams` |
| `CardboardLensDistortion_getEyeFromHeadMatrix` / `getProjectionMatrix` / `getDistortionMesh` | `NextVrApp::UpdateDeviceParams` |
| `CardboardOpenGlEs2DistortionRenderer_create`, `CardboardDistortionRenderer_setMesh/renderEyeToDisplay` | `NextVrApp::UpdateDeviceParams` and `NextVrApp::OnDrawFrame` |
| Render textures split per eye | `NextVrApp::GlSetup` |
| `CardboardHeadTracker_getPose` | `NextVrApp::GetPose` |
| JNI bridge (all `nativeOn*` methods) | `nextvr-android/src/main/jni/nextvr_jni.cc` + `src/main/java/com/nextvr/cardboard/NextVrActivity.java` |
| Native build (links `libGfxPluginCardboard.so`) | `nextvr-android/CMakeLists.txt`, module `nextvr_jni` |

## Running on the Android Studio x86 emulator

The prebuilt SDK `.so` files cover `armeabi-v7a` and `arm64-v8a` only. To build for every ABI —
which is what the quickstart's *"Enable Android Studio x86 emulator"* section does — delete the
`abiFilters 'armeabi-v7a', 'arm64-v8a'` line from **both** `sdk/build.gradle` and
`nextvr-android/build.gradle`. The SDK is then compiled from source (`libGfxPluginCardboard.so`)
for x86/x86_64 as well. A physical device is the recommended way to try VR, since emulators cannot
reproduce the sensors or the lenses.

## Updating the vendored Cardboard SDK

```bash
git remote add cardboard https://github.com/googlevr/cardboard.git
git fetch cardboard
# copy the SDK pieces again (keeps iOS/Unity-only folders out of this repo)
for p in sdk java_api proto third_party; do rm -rf $p; git --work-tree=. checkout cardboard/master -- $p; done
rm -rf sdk/sdk.xcodeproj sdk/unity sdk/qrcode/ios sdk/sensors/ios sdk/rendering/ios sdk/screen_params/ios
```

Then bump the version in `nextvr-android/build.gradle` (`versionName`) and
`res/values/strings.xml` (`cardboard_sdk_version`).

## License

* The Cardboard SDK (`sdk/`, `java_api/`, `proto/`, `third_party/`) is © Google LLC, Apache-2.0 —
  see `LICENSE-CARDBOARD-SDK`.
* The sample app code in `nextvr-android/` derives from the Cardboard SDK sample and keeps the
  original Apache-2.0 headers.
