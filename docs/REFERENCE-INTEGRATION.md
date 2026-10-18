# Reference integration and verification

> This records the original reference-porting phase. For the merged app's current Android app
> windows, PhoneXR game runtime and controls, see [README](../README.md),
> [Android app windows](ANDROID-APP-WINDOWS.md) and [PhoneXR integration](PHONEXR-INTEGRATION.md).
> Historical design/scope notes below are not a claim that later features were never built.
>
> The current UI/input behavior is documented in
> [UI interaction revision](UI-INTERACTION-REVISION.md). It supersedes the older gaze/touch,
> placement and pending-artwork notes in historical documents.
>
> **Hand detector note (later change):** the PhoneXR detector pipeline described below
> (`FusionHands` + YOLO11 wrist rescue + crop detection + hand slots) was removed and replaced by
> `com.nextvr.handtrack.HandTracker` — one two-hand MediaPipe VIDEO graph per frame, plus a
> lower-confidence "hunting" graph while nothing is tracked, and no background worker or second
> model. The landmark post-processing (`HandGestures`, `PhoneXrHands`) still applies. See the last
> section of [the investigation](hand-tracking-investigation.md).

## Source of truth

Inspected before implementation:

1. This repository's existing Java activity, C++ renderer, Cardboard SDK, JNI, resources,
   build configuration and CI.
2. **`new_references.zip` is the primary and newest visual source.**
   SHA-256: `268ee731352e5385e1b9ea111dac7f0fe6611627959459f3dd110412b73cf42d`.
   Its self-contained `index.html` supplies the current `N` artwork, settings/crosshair/move/close,
   status and media vectors, glass palette and current component treatment. Those paths are
   extracted into `web/assets/nextvr-n.png` and `web/src/reference-icons.js` without network loads.
3. `references.zip` (SHA-256 `aabc3bd5391186a25e7f9111a0e2c1c4dc24e0b2b82f45dd6a4fc910cd4787e1`)
   remains a **legacy structural reference** for floating windows, the dock arc, store/library and
   keyboard components absent from the new archive. It never overrides a differing new asset.
   Its incomplete Android placeholders (`item as Nothing`, unavailable `GameStore`) are not used.
4. `mt-VR/NextVR` at `b878d8b9ba9fe6b408e22bb3c48086494efbbbe6`, particularly
   `ComposeContent.kt`, `VrWindows.kt` (`BrowserContent`), `VrHomeActivity.kt` (camera,
   MediaPipe, OES shaders), `HandGestures.kt`, `HandTrackingService.kt`, `CardboardCameraView.kt`,
   `CinemaHands.kt`, `CinemaRenderer.kt`, and `VirtualScreen.kt`.

The archives define visual/structural UI, not the runtime hands. **The complete hand pipeline comes
from the linked PhoneXR-derived fork.** Archive detector, skeleton, gaze/dwell, midpoint pointer
and pinch-confirmation code are removed. PhoneXR is now also the sole source allowed to activate
VR controls; Cardboard pose still orients the view but is never interpreted as selection.

## Architecture

```
Camera2 rear camera → one YUV_420_888 ImageReader (latest frame, queue depth 2)
  → stride-aware native YUV-to-ARGB conversion
  → sensor/display rotation ONCE → upright, unmirrored bitmap
       ├─ GL_TEXTURE_2D → camera + glass backdrop shaders
       └─ independent 640px bitmap → com.nextvr.handtrack.HandTracker
             → MediaPipe VIDEO, 2 hands/frame (+ lower-confidence hunt graph while nothing tracked)
             → landmark filters / shapes / latch / shoulder rays (HandGestures, PhoneXrHands)
                  ├─ native GL hand overlay → dark teal fill + cyan contour/cursor per hand
                  ├─ native GL → shoulder ray / drop / stick / beam / target ring
                  └─ reference surface hit-testing / fist grabbing / NEAR touch
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
has its own world transform, bounds, texture region and stereo projection. The dark teal hand fill,
cyan contour and per-hand pinch cursor are drawn by the native GL overlay from
landmarks already produced by MediaPipe. The browser and UI are rendered once and sampled for both
eyes; there are no duplicate browser sessions playing duplicate audio.

### Preserved spatial behavior

- Reference dock DOM, glass CSS, current `new_references.zip` SVG controls, spacing, active dots
  and press/hover transitions.
- Dock order: profile, status, notifications, keyboard, recenter, separator, browser, store,
  Discord, gallery, separator, settings, YouTube, nine-dot library.
- `EYE = 1.55 m`, `PX = 0.00105 m/px`.
- Native dock default: `(0, 1.33, -0.55)`, x tilt `0.26 rad`, scale `PX × 0.90` after
  migration; a detached white pill below the dock moves it to a bounded custom position.
- Default windows: `1040 × 660 px` at `0.75×` world scale, centred at eye height on a 0.68 m
  curved arc; second-row placement, centre-facing orientation and exponential position
  interpolation remain available.
- White external handle, deliberate detach/drag/release, proportional corner resize, repin, close,
  focus outlines, relayout, keyboard, language window, browser chrome, store, library, gallery and
  settings. Detached windows are clamped to the usable front arc with their full resized height.
- Recenter rotates the content root, not Cardboard's sensor reference. Opening an app never
  recenters. No native positions from `CardboardHeadTracker_getPose` are applied.
- The window-distance setting is connected to layout. Existing installations migrate once to the
  close-layout defaults; later user adjustments are retained.

### Necessary Android adaptations

- Removed demo OBJ/texture assets, room/target rendering, grid and fog. Native GL renders the sunset
  panorama by default; the other 360° scenes and camera passthrough remain selectable.
- Native orientation replaces **only** the web sensor input; native builds never register the web
  `deviceorientation` listener or open a second `getUserMedia` camera.
- Rear-camera pixels are rotated `(sensorOrientation - displayRotation*90 + 360) % 360` once
  before either tracking or rendering. There is no mirrored preview, camera SurfaceTexture,
  secondary shader quarter-turn, or independently rotated tracking image. Camera and glass
  sample the same top-left bitmap UV mapping; landmark-to-overlay mapping uses the same optical spans.
  WebView textures still use their own required OES/SurfaceTexture transforms.
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
- `GLSurfaceView` has no touch listener, the JS `nextvrTrigger` callback and JNI/Cardboard trigger
  path are absent, and no gaze/dwell selector exists. Only PhoneXR calls the privileged
  `handTouch` bridge. Its synthetic DOWN/MOVE/UP/CANCEL delivery enables page clicks, scrolling,
  range inputs and the Android photo picker; physical phone touches are never forwarded there.
  Browser text input is delivered through `InputConnection` from the hand-operated floating
  keyboard. Video fullscreen stays inside its spatial surface.
- External pages cannot access `NativeXR`. The shell blocks remote scripts/frames with CSP;
  file access, mixed content and unsolicited website camera/microphone permissions are disabled.
- Gallery selection uses Android's document picker, without broad storage permission.

### Hands

The hand implementation is sourced from `mt-VR/NextVR` at the pinned commit above, not
`references.zip`. Models are bundled; nothing is downloaded at runtime.

- `HandGestures` is vendored from the fork; the fork's detector (`FusionHands`, `Crops`,
  `Yolo11Pose`, hand slots, recovery budget, merger) was REMOVED and replaced by
  `com.nextvr.handtrack`: MediaPipe 0.10.35 VIDEO at two hands per frame, no second model, no
  background worker. See licensing/provenance before redistribution.
- Camera and tracking have independent bounded queues. Tracking runs on one dedicated worker;
  GPU construction/inference/destruction stay on that thread, with CPU construction fallback.
  (The fork's separate YOLO executor is gone with the detector: the tracking thread is the only
  hand-tracking worker now.) Teardown closes the graphs after the last inference.
- The fork's 63 native landmark filters, dead zones, physical rear-camera handedness, palm-width
  `.30/.48` pinch hysteresis and fist guard replace all prototype gesture code. There is no
  prototype sensitivity setting, two-frame confirmation or 280 ms tracking grace.
- A stable thumb/index **base-weighted** aim point drives the shoulder-origin pointer, using
  the fork's lead and native cursor filters. The held hand owns the click; both hands get rays.
- The native overlay draws a dark teal fill, cyan contour and one pinch cursor per hand from
  native MediaPipe landmarks. It reuses the existing rear-camera
  results rather than opening a second WebView `getUserMedia` stream or fetching the JavaScript
  tracker from a CDN. The same GL pass draws the depth-aware shoulder ray and target marker; the
  hand-visibility setting controls the contour/cursors.
- A fist closing over a window arms grab; it does not detach until filtered palm motion crosses an
  18 px logical threshold. Fist and white-handle drags share a fixed world plane, preserve the
  initial hand/window offset, reject subcentimeter jitter, cap one-frame jumps and enforce radial,
  yaw and full-window vertical bounds. Opening/disappearing releases without generating a click.
- Pinching the distinct corner target arms proportional resize after a separate threshold. Per-window
  scale is clamped to 0.72–1.40 and further limited by available vertical space, so the centre stays
  stable and the fixed-aspect HTML/browser content is neither clipped nor distorted.
- Metric index-tip NEAR interaction uses the fork's .7 m arm reach, .15/.20 m proximity
  hysteresis, .012/.035 m touch hysteresis, margins, and .45 smoothing; FAR pointing is suppressed
  during a contact. A surface uses NEAR only when the metric fingertip actually reaches it;
  otherwise the same hand keeps FAR pointing. Hand-local metric geometry does not move/track the
  head or establish a room origin.
- Native targets come from the real reference dock/window/keyboard meshes and are transformed
  back to head space for the PhoneXR rings. Browser holds deliver native MOVE events.
- Result freshness is measured from inference **completion**, not the camera capture timestamp.
  Capture timestamps still drive the original landmark filters. A 500–1500 ms bounded watchdog
  follows detector latency, so a slow CPU result is not expired before its first presentation.
  An explicitly empty result cancels interaction immediately. The native pointer renderer can retain
  the last pose for up to `max(700 ms, frame validity)` and fades it during the final 200 ms; this
  presentation-only retention cannot preserve a held click. The WebView contour clears on an empty
  result and is redrawn from each incoming native landmark frame.
- Native ray/target geometry reuses GL-thread scratch buffers across display frames; the previous
  filled hand mesh and stencil pass have been removed.
- MediaPipe 0.10.35 `MPImage.close()` recycles its backing bitmap. The detector now wraps an
  independently owned copy, leaving the borrowed frame readable by the GPU retry and the frame's own
  failure recovery. An Android bitmap ownership regression test exercises that close/copy path.
- GPU inference failure (not just delegate creation failure) retries on CPU. (The old rescue cadence -
  500 ms on the GPU path / 750 ms on CPU - went away with the fork's detector. The gesture
  thresholds and visualization geometry remain in use.)
- Safety adaptations: disappearance/stale tracking cancels a held gesture rather than clicking;
  held pointer ownership, matching dock/keyboard releases and lifecycle resets are preserved.
- Upstream `palmButtons()` and `drawPalmButtons()` have definitions but no active call sites at
  this pinned revision. They are not turned into invented menus/actions in this integration.
- Cardboard orientation remains a rendering input only. Viewer-button and phone-screen events have
  no route into hit-testing, highlights, clicks, drag, resize or first-run selection.

### Accessible first-run selection

The language window is fixed at eye height, 0.42 m ahead, independently of saved workspace
settings. Its 880×600 surface has 180 px language targets and does not permit move/resize/close
before setup. Looking at it for any duration does nothing. The window reports actual detected-hand
counts and explicitly instructs the user to point and pinch; only a hand from the native MediaPipe
pipeline can finish setup.
The camera remains active for that hand tracking even though touchscreen event forwarding is off.

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

The supplied web prototype simulates some store/account/subscription/notification states. Those
store and account demonstrations are not a purchase or account backend. Later work added Android
app windows (Shizuku-hosted or explicitly labelled phone-screen capture) and the bundled PhoneXR
runtime/game flow; see the dedicated integration documents above for prerequisites and limits.
Neither feature guarantees compatibility with every third-party app or headset game, and neither
has been validated on a physical device as part of this merge.

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

- gaze/head pose held on first run does not select; PhoneXR pinch does, with near eye-level setup
  geometry, enlarged hit targets, exact dock order and store/library contents;
- static absence of touchscreen/viewer/JNI trigger paths and presence of only the `handTouch` bridge;
- opening/closing multiple windows and native browser lifecycle specifications;
- reference dock position and world anchoring during head rotation;
- native browser DOWN/UP routing from PhoneXR, plus loss-of-tracking CANCEL without a click;
- fist and white-handle thresholds, no movement on selection tremor, bounded low/radial placement,
  stable proportional corner resize, repin and isolation from other window/atlas state;
- strict UTF-8 decoding, boundary declarations and a repository-wide mojibake regression scan;
- SHA-256/provenance and exact vector-path checks against `new_references.zip`;
- atlas capacity, stable slots and no overlap;
- native stride-aware YUV conversion using padded/interleaved test planes and labelled colors;
- camera/hand/compositor shader grammar and linking, plus labelled bitmap corner rendering through
  the actual camera GLSL in ANGLE (OES samplers substituted with
  2D samplers for WebGL; actual Android external-texture support still needs device testing);
- orientation-only native render path and bridge security invariants.

JVM tests exercise all rear-camera quarter turns, non-mirrored corner mapping, native pinch
hysteresis/fist suppression, handedness, shoulder aim, resting dead zones hand-loss resets, slow-inference completion timing, bounded expiry and visual-only dropout retention.

Android CI runs these tests and builds the vendored SDK and debug APK for `arm64-v8a` and `armeabi-v7a`. The first build
caught native Matrix4x4 const-compatibility and logging-header issues; these were fixed, and the
next build passed. See branch CI for the final revision's build result.

**No physical Android device or headset is attached to this workspace.** Passing JS tests and
APK compilation do not verify camera alignment, actual lens/head motion, OrangeHanding accuracy,
WebView transparency on a particular GPU, audible output, thermal behavior or exact visual parity.
Use the following acceptance checklist before describing this as a device-verified reproduction.

## Device acceptance checklist (not executed here)

1. Fresh install, grant/deny camera permission, reopen from Android settings; no artificial room.
2. Pair a viewer using settings; confirm the camera is released for QR scanning and restored after.
3. Check rear-camera orientation, crop, mirroredness and landmark alignment in both landscape
   orientations/sensor-mount configurations. Inspect both eyes, not just a screenshot.
4. Verify correct head rotation, stable world windows, recenter and **no positional motion**.
5. Confirm a long gaze, viewer-button press and touchscreen tap never activate/highlight the VR UI,
   while the rear camera continues tracking hands.
6. Compare dock, typography, restored icons, proportions, spacing, shadows, focus, window arc,
   thresholded drag, placement bounds, proportional resize, repin, keyboard and three-window limit.
7. Verify the cyan contours and pinch cursors for both hands plus both native rays, fist grab/edge
   highlight, near/far movement, pinch hold/release, hand loss/switching, browser scrolling, sliders
   and floating-keyboard input.
8. Browser audio/video/Web Audio, multiple windows, closing a playing window, volume buttons,
   Bluetooth/headphones, audio-focus loss, background/foreground and screen lock.
9. Photo picker and return to VR; browser download confirmation; offline/error paths.
10. Pause/resume repeatedly and force EGL/WebView context loss; inspect logcat for camera, surface,
    MediaPipe and GL errors. Verify no stale textures, camera leak or continuing background audio.
11. Profile 10+ minutes on target phones for GPU memory, frame time, UI/camera latency and heat.
