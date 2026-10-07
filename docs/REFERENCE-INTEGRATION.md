# Reference integration and verification

## Source of truth

Inspected before implementation:

1. This repository's existing Java activity, C++ renderer, Cardboard SDK, JNI, resources,
   build configuration and CI.
2. **This repository's `references.zip`**, not the `reference.zip` in the other repository.
   SHA-256: `aabc3bd5391186a25e7f9111a0e2c1c4dc24e0b2b82f45dd6a4fc910cd4787e1`.
   It contains the complete web prototype (`index.html`, `core.js`, `windows.js`, `hands.js`,
   `apps.js`), two standalone store/library HTML examples, `WebUiContent.kt`, and installation notes.
3. The archive's PhoneXR integration example. It describes HTML in a private virtual display,
   with JavaScript/native messaging and existing spatial window chrome. It is **not a complete
   Android port**: its own notes identify an intentionally non-compiling `item as Nothing` and
   unavailable `GameStore` types. Those placeholders were not copied into the app.
4. `mt-VR/NextVR` at `b878d8b9ba9fe6b408e22bb3c48086494efbbbe6`, particularly
   `ComposeContent.kt`, `VrWindows.kt` (`BrowserContent`), `VrHomeActivity.kt` (camera,
   MediaPipe, OES shaders), `HandGestures.kt`, `HandTrackingService.kt`, `CardboardCameraView.kt`,
   `CinemaHands.kt`, `CinemaRenderer.kt`, and `VirtualScreen.kt`.

The user clarified that the archive in **NextVR-Android** is the intended reference. No separate,
complete unpublished PhoneXR fork was available. Accordingly, hand drawing/filtering/pinch behavior
comes from that archive; the linked port is a technical reference, **not its UI theme or 6 DoF**.

## Architecture

```
Camera2 rear camera
  ├─ preview Surface → SurfaceTexture → external OES camera shader
  └─ same-aspect YUV ImageReader (latest image, queue depth 2)
       → sensor/display rotation → bundled native MediaPipe VIDEO detector
       → normalized landmarks → reference One Euro / pinch / hand-overlay code

Reference HTML/CSS + spatial JS
  ├─ original dock / windows / keyboard / menus / layout / animations
  ├─ hardware WebView on private VirtualDisplay / Presentation
  │    → transparent SurfaceTexture atlas → world-space GL quads
  └─ browser content slots
       → isolated hardware WebViews / private displays → separate OES quads

Unmodified Cardboard SDK + existing native renderer infrastructure
  → orientation only → per-eye view/projection → native compositor → lens distortion
```

The renderer does **not** display one flat UI texture in front of the user. Each HTML spatial object
has its own world transform, bounds, texture region and stereo projection. Only the hand/status
HUD is intentionally head-locked, as in the prototype. The browser and UI are rendered once and
sampled for both eyes; there are no duplicate browser sessions playing duplicate audio.

### Preserved spatial behavior

- Original dock DOM, CSS, SVG icons, spacing, active dots and press/hover transitions.
- Dock order: profile, status, notifications, keyboard, recenter, separator, browser, store,
  Discord, gallery, separator, settings, YouTube, nine-dot library.
- `EYE = 1.55 m`, `PX = 0.00105 m/px`.
- Landscape dock: `(0, 1.05, -1.42)`, x tilt `0.26 rad`, scale `PX × 0.74`.
- Default windows: `1040 × 660 px`, curved arc above/behind the dock; original row spacing,
  center-facing orientation and exponential position interpolation.
- White external handle, detach/drag/release, repin, close, focus outlines, relayout, keyboard,
  language window, browser chrome, store, library, gallery and settings.
- Recenter rotates the content root, not Cardboard's sensor reference. Opening an app never
  recenters. No native positions from `CardboardHeadTracker_getPose` are applied.
- Prototype window-distance setting is connected to layout (the supplied code stored it without
  applying it). Its default layout remains unchanged.

### Necessary Android adaptations

- Removed all demo OBJ/texture assets, room/target rendering, sky sphere, grid, fog and environment
  switching. The environment choice is camera passthrough only.
- Native orientation replaces **only** the web sensor input; native builds never register the web
  `deviceorientation` listener or open a second `getUserMedia` camera.
- Camera selection uses a rear lens and matching preview/analysis aspect ratios. Shader sampling
  and landmark-to-pointer mapping share the same per-eye field-of-view coverage. Crop transforms,
  0/90/180/270-degree rotations, and premultiplied alpha are handled explicitly.
- Hardware HTML atlas is 4096² with stable slots for **six windows**, dock, keyboard and HUD.
  Closing one window does not relocate surviving texture regions. The application reports the
  limit rather than silently dropping a window. A 4096² RGBA buffer is 64 MiB before buffering;
  memory/performance on lower-end devices is an important acceptance test.
- Shadows have 160 px of transparent padding. Glass retains the original CSS, with a lightweight
  camera-backdrop blur in GL. This is an approximation of CSS blur over a live compositor, not
  full scene-wide Gaussian refraction of other overlapping windows.
- Quality controls change the spatial-layout bridge cadence (approximately 15/30/60 Hz);
  Cardboard orientation remains display-rate. Raster dimensions remain fixed.
- Shell assets use a local HTTPS origin. Three.js, Inter, dock/library icons, the hand model and
  click sound are bundled; network access is not required to boot the workspace or track hands.
- Browser pages use independent WebViews, **not iframes with a privileged native bridge**.
  Their content is placed within the reference window's body and clipped to its scroll viewport.
- Native DOWN/MOVE/UP/CANCEL delivery enables actual page clicks, scrolling, range inputs and the
  Android photo picker. Browser text input is delivered through `InputConnection` from the
  reference floating keyboard. Video fullscreen stays inside its spatial surface.
- External pages cannot access `NativeXR`. The shell blocks remote scripts/frames with CSP;
  file access, mixed content and unsolicited website camera/microphone permissions are disabled.
- Gallery selection uses Android's document picker, without broad storage permission.

### Hands

MediaPipe runs on the camera worker, independently of the GL thread, at a maximum of about 15 Hz.
Its model is in the APK. The archive's behavior is retained:

- Two hands, 21 landmarks, original blue/white links and joints, pinch ring and white center.
- One Euro filtering, sensitivity control, 280 ms tracking grace.
- Thumb/index distance normalized by wrist/middle-knuckle span, `.40/.62` hysteresis and
  configurable confirmation frames (default two).
- Thumb/index midpoint cursor. Visual field-of-view mapping is applied **after** gesture
  calculation so camera cropping does not change the pinch threshold.
- Pinch selects; hold the white handle and move to drag. Native browser holds deliver MOVE.
- Safety fixes: disappearing hands cancel a held gesture instead of accidentally clicking;
  pointer ownership remains with a held hand; dock/keyboard releases require a matching press.
- Cardboard viewer-button / screen-tap fallback uses the same ray at the center of the view.

### Audio

- WebView media playback does not require a separate browser-recognized JS gesture: native pinch
  is already user input. Browser audio/video/Web Audio use Android's normal media route/volume.
- `AudioFocusRequest` is acquired on resume/user interaction. Loss or backgrounding pauses media,
  suspends tracked Web Audio contexts and stops UI sounds; gain restores audio eligibility.
  Paused videos require deliberate playback again rather than unexpected background auto-resume.
- A bundled PCM click is played by `SoundPool` on dock/window controls and floating keys.
- Closing a browser destroys its WebView and media session. There is no second WebView per eye.
- No `RECORD_AUDIO`, forced speaker route, or microphone capture is introduced.

## Explicit scope limits — not claims of completed features

The supplied web prototype itself simulates game installation/progress and game launching, and
has demonstration account/subscription/notification states. Those store/library demonstrations
remain demonstrations in this integration. **No APK/game-runtime installer, Shizuku app mirroring,
PhoneXR cinema/game compatibility layer or account backend has been implemented.** The separate
native integration examples cannot supply those absent systems on their own.

Browser downloads use the real Android download manager with confirmation. Browser service
availability, DRM/login restrictions, and the prototype's third-party YouTube search endpoints
remain subject to the remote providers. YouTube embeds may have WebView/provider restrictions;
the in-VR browser can open the main site. Website camera/microphone capture is intentionally denied
because the camera is reserved for passthrough.

No positional tracking, VINS, ARCore, SLAM, head-position/neck-model offsets or 6 DoF dependencies
are enabled. The single rear camera is monoscopic, not stereo depth-correct passthrough. There is
no camera/eye baseline calibration or late camera reprojection. **Use seated; do not navigate the
real world while wearing the viewer.**

## Verification

Automated tests (`npm test`) run the actual bundled reference UI in headless Chromium and check:

- boot/language flow, exact dock order, store/library contents;
- opening/closing multiple windows and native browser lifecycle specifications;
- reference dock position, world anchoring during head rotation;
- native browser DOWN/UP ray routing;
- native landmark → confirmed pinch → browser press/release;
- loss-of-tracking CANCEL without a spurious click;
- white-handle drag/detach and repin;
- atlas capacity, stable slots and no overlap;
- camera/compositor shader grammar and linking through ANGLE (OES samplers substituted with
  2D samplers for WebGL; actual Android external-texture support still needs device testing);
- orientation-only native render path and bridge security invariants.

Android CI builds the vendored SDK and debug APK for `arm64-v8a` and `armeabi-v7a`. The first build
caught native Matrix4x4 const-compatibility and logging-header issues; these were fixed, and the
next build passed. See branch CI for the final revision's build result.

**No physical Android device or headset is attached to this workspace.** Passing JS tests and
APK compilation do not verify camera alignment, actual lens/head motion, MediaPipe accuracy,
WebView transparency on a particular GPU, audible output, thermal behavior or exact visual parity.
Use the following acceptance checklist before describing this as a device-verified reproduction.

## Device acceptance checklist (not executed here)

1. Fresh install, grant/deny camera permission, reopen from Android settings; no artificial room.
2. Pair a viewer using settings; confirm the camera is released for QR scanning and restored after.
3. Check rear-camera orientation, crop, mirroredness and landmark alignment in both landscape
   orientations/sensor-mount configurations. Inspect both eyes, not just a screenshot.
4. Verify correct head rotation, stable world windows, recenter and **no positional motion**.
5. Compare dock, typography, proportions, spacing, shadows, focus, open animations, window arc,
   drag, repin, keyboard and six-window limit against the supplied prototype.
6. Two hands near/far, slow/fast movement, pinch hold/release, hand loss, hand switching, browser
   scrolling, sliders and entering text using the floating keyboard.
7. Browser audio/video/Web Audio, multiple windows, closing a playing window, volume buttons,
   Bluetooth/headphones, audio-focus loss, background/foreground and screen lock.
8. Photo picker and return to VR; browser download confirmation; offline/error paths.
9. Pause/resume repeatedly and force EGL/WebView context loss; inspect logcat for camera, surface,
   MediaPipe and GL errors. Verify no stale textures, camera leak or continuing background audio.
10. Profile 10+ minutes on target phones for GPU memory, frame time, UI/camera latency and heat.
