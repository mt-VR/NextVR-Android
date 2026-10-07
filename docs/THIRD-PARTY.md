# Third-party provenance

- **Cardboard SDK 1.35.0**: Google LLC, Apache-2.0, already vendored in this repository.
  `LICENSE-CARDBOARD-SDK` and existing source headers are retained.
- **Visual/UX source**: user-supplied `references.zip` in this repository. The archive remains
  unmodified. `web/` contains the working adaptation; its Android examples are inspected,
  not imported as non-compiling Kotlin placeholders.
- **Technical source inspected**: `https://github.com/mt-VR/NextVR`, commit
  `b878d8b9ba9fe6b408e22bb3c48086494efbbbe6`. The Java compositor/camera/host integration is newly
  written against this project's Cardboard infrastructure, using the private-display/OES and
  MediaPipe architecture as reference. Its Compose UI, game runtimes and 6 DoF code are not copied.
- **MediaPipe Tasks Vision 0.10.14**: Google, Apache-2.0 library fetched through Gradle.
  The bundled `hand_landmarker.task` is taken from that technical reference at
  `orangehanding/src/main/assets/hand_landmarker.task`.
  SHA-256: `fbc2a30080c3c557093b5ddfc334698132eb341044ccee322ccf8bcf3607cde1`.
  This is the standard MediaPipe hand-landmarker task asset; keeping it in the APK avoids a
  runtime model download and offline startup failure. Preserve upstream model distribution terms.
- **Three.js 0.160.0**: MIT, bundled by esbuild. APK includes `ui/THREE-LICENSE.txt`.
- **Inter through @fontsource/inter 5.2.8**: SIL Open Font License, bundled Latin weights 400–800.
  APK includes `ui/INTER-LICENSE.txt`.
- **Simple Icons 11.15.0**: CC0 icon paths, bundled for the prototype's library tiles.
  APK includes `ui/ICONS-LICENSE.txt`. Brand names/logos remain their owners' trademarks.
- **UI click**: generated PCM waveform, reproducibly created in `web/build.mjs`.
- Remote website content, game art and YouTube service responses are not redistributed here and
  remain owned/controlled by their providers.
