# Third-party provenance

- **Cardboard SDK 1.35.0**: Google LLC, Apache-2.0, already vendored in this repository.
  `LICENSE-CARDBOARD-SDK` and existing source headers are retained.
- **Visual/UX source**: user-supplied `references.zip` in this repository. The archive remains
  unmodified. `web/` contains the working adaptation; its Android examples are inspected,
  not imported as non-compiling Kotlin placeholders.
- **PhoneXR technical source integrated**: `https://github.com/mt-VR/NextVR`, commit
  `b878d8b9ba9fe6b408e22bb3c48086494efbbbe6`. The Java camera/host integration
  uses this project's Cardboard infrastructure. The fork's `HandGestures.kt` is copied (filters,
  pinch hysteresis, fist guard, shapes); native smoothing/rays and the GL
  silhouette/drop/beam/ring methods are adapted from `VrHomeActivity.kt`. Local changes adapt
  package/bridge/window ownership and cache hand geometry without changing its shape. Its Compose
  UI, game runtimes and 6 DoF code are not copied, and the fork's DETECTOR pipeline
  (`FusionHands.kt`, `Crops.kt`, `Yolo11Pose.kt`, hand-slot policy, recovery budget, crop merger)
  was removed from this repository: hand detection is now `com.nextvr.handtrack`, written here, and
  no code from the fork runs in the detection path. The pinned upstream
  tree has no root license file: do not assume these additions inherit Cardboard's Apache license;
  establish appropriate source-code permission before third-party redistribution.
- **MediaPipe Tasks Vision 0.10.35**: Google, Apache-2.0 library fetched through Gradle.
  The bundled `hand_landmarker.task` (`nextvr-android/src/main/assets/`) is taken from that
  technical reference at `orangehanding/src/main/assets/hand_landmarker.task`.
  SHA-256: `fbc2a30080c3c557093b5ddfc334698132eb341044ccee322ccf8bcf3607cde1`.
  This is the standard MediaPipe hand-landmarker task asset; keeping it in the APK avoids a
  runtime model download and offline startup failure. Preserve upstream model distribution terms.
- **LiteRT 1.4.0**: Google, Apache-2.0 runtime fetched through Gradle. It stays: it is the TFLite
  runtime (`libtensorflowlite_jni.so`) that MediaPipe Tasks executes the hand landmarker on, not just
  the YOLO interpreter. CI verifies the library is present in both APK ABIs.
- **YOLO11n pose model: REMOVED.** The earlier integration bundled the fork's
  `yolo11n-pose.tflite` (Ultralytics-derived, AGPL-3.0 or commercial; AGPL text shipped alongside)
  to run it. The detector pipeline that used YOLO is no longer in this repository, so the 11.7 MB
  model is neither distributed nor built (LiteRT stays for the reason above: MediaPipe runs on it).
  If that model is ever brought back, its terms and corresponding-source obligations come back with it.
- **Three.js 0.160.0**: MIT, bundled by esbuild. APK includes `ui/THREE-LICENSE.txt`.
- **Inter through @fontsource/inter 5.2.8**: SIL Open Font License, bundled Latin weights 400–800.
  APK includes `ui/INTER-LICENSE.txt`.
- **Simple Icons 11.15.0**: CC0 icon paths, bundled for the prototype's library tiles.
  APK includes `ui/ICONS-LICENSE.txt`. Brand names/logos remain their owners' trademarks.
- **UI click**: generated PCM waveform, reproducibly created in `web/build.mjs`.
- Remote website content, game art and YouTube service responses are not redistributed here and
  remain owned/controlled by their providers.
