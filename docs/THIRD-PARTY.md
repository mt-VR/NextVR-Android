# Third-party provenance

- **Cardboard SDK 1.35.0**: Google LLC, Apache-2.0, already vendored in this repository.
  `LICENSE-CARDBOARD-SDK` and existing source headers are retained.
- **Visual/UX source**: user-supplied `references.zip` in this repository. The archive remains
  unmodified. `web/` contains the working adaptation; its Android examples are inspected,
  not imported as non-compiling Kotlin placeholders.
- **PhoneXR technical source integrated**: `https://github.com/mt-VR/NextVR`, commit
  `b878d8b9ba9fe6b408e22bb3c48086494efbbbe6`. The Java camera/host integration
  uses this project's Cardboard infrastructure. The fork's `HandGestures.kt` and OrangeHanding's
  `FusionHands.kt`, `Crops.kt`, `Yolo11Pose.kt` are copied; native smoothing/rays and the GL
  silhouette/drop/beam/ring methods are adapted from `VrHomeActivity.kt`. Local changes adapt
  package/bridge/window ownership, serialize YOLO destruction and close the model's asset file
  descriptor. Its Compose UI, game runtimes and 6 DoF code are not copied. The pinned upstream
  tree has no root license file: do not assume these additions inherit Cardboard's Apache license;
  establish appropriate source-code permission before third-party redistribution.
- **MediaPipe Tasks Vision 0.10.35**: Google, Apache-2.0 library fetched through Gradle.
  The bundled `hand_landmarker.task` is taken from that technical reference at
  `orangehanding/src/main/assets/hand_landmarker.task`.
  SHA-256: `fbc2a30080c3c557093b5ddfc334698132eb341044ccee322ccf8bcf3607cde1`.
  This is the standard MediaPipe hand-landmarker task asset; keeping it in the APK avoids a
  runtime model download and offline startup failure. Preserve upstream model distribution terms.
- **LiteRT 1.4.0**: Google, Apache-2.0 runtime fetched through Gradle for the fork's YOLO interpreter.
- **YOLO11n pose model**: copied verbatim from the pinned fork's
  `orangehanding/src/main/assets/yolo11n-pose.tflite` (11,728,896 bytes).
  SHA-256: `6bb54a61759e9efadb16c1c7f1f3f4c41584440882335c8fee98f435554558d2`.
  This is an Ultralytics-derived model, **not a permissively licensed MediaPipe asset**.
  Ultralytics distributes YOLO under AGPL-3.0 or a commercial/enterprise agreement. The AGPL
  text is bundled as `YOLO-AGPL-3.0.txt`; this notice does not establish blanket compliance or
  relicense the rest of the repository. Review the model/code terms and corresponding-source
  obligations (or obtain suitable commercial permission) before external redistribution.
- **Three.js 0.160.0**: MIT, bundled by esbuild. APK includes `ui/THREE-LICENSE.txt`.
- **Inter through @fontsource/inter 5.2.8**: SIL Open Font License, bundled Latin weights 400–800.
  APK includes `ui/INTER-LICENSE.txt`.
- **Simple Icons 11.15.0**: CC0 icon paths, bundled for the prototype's library tiles.
  APK includes `ui/ICONS-LICENSE.txt`. Brand names/logos remain their owners' trademarks.
- **UI click**: generated PCM waveform, reproducibly created in `web/build.mjs`.
- Remote website content, game art and YouTube service responses are not redistributed here and
  remain owned/controlled by their providers.
