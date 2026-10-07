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

The archive in **NextVR-Android** defines the spatial UI, not the hands. After the first APK,
the user explicitly corrected the hand-source interpretation: **the complete hand pipeline must
come from the linked PhoneXR-derived fork**. The archive's detector, skeleton, filters, midpoint
pointer and pinch-confirmation code have therefore been removed. No UI theme or 6 DoF system
from the linked repository replaces the archive's workspace.

## Architecture

```
Camera2 rear camera → one YUV_420_888 ImageReader (latest frame, queue depth 2)
  → stride-aware native YUV-to-ARGB conversion
  → sensor/display rotation ONCE → upright, unmirrored bitmap
       ├─ GL_TEXTURE_2D → camera + glass backdrop shaders
       └─ independent 640px bitmap → PhoneXR OrangeHanding FusionHands
             → MediaPipe VIDEO + YOLO wrist rescue + MediaPipe crop detection
             → native PhoneXR landmark filters / shapes / latch / shoulder rays
                  ├─ native GL silhouette / drop / stick / beam / target ring
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
has its own world transform, bounds, texture region and stereo projection. Only the hand/status
HUD is intentionally head-locked; the hand visuals now come from PhoneXR. The browser and UI are rendered once and
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
- Rear-camera pixels are rotated `(sensorOrientation - displayRotation*90 + 360) % 360` once
  before either tracking or rendering. There is no mirrored preview, camera SurfaceTexture,
  secondary shader quarter-turn, or independently rotated tracking image. Camera and glass
  sample the same top-left bitmap UV mapping; the silhouette uses the same optical spans.
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
- Native DOWN/MOVE/UP/CANCEL delivery enables actual page clicks, scrolling, range inputs and the
  Android photo picker. Browser text input is delivered through `InputConnection` from the
  reference floating keyboard. Video fullscreen stays inside its spatial surface.
- External pages cannot access `NativeXR`. The shell blocks remote scripts/frames with CSP;
  file access, mixed content and unsolicited website camera/microphone permissions are disabled.
- Gallery selection uses Android's document picker, without broad storage permission.

### Hands

The hand implementation is sourced from `mt-VR/NextVR` at the pinned commit above, not
`references.zip`. Models are bundled; nothing is downloaded at runtime.

- `FusionHands`, `Crops`, `Yolo11Pose` and `HandGestures` are vendored from the fork. VIDEO
  tracking uses MediaPipe 0.10.35; YOLO11 pose periodically supplies wrist locations to the CPU
  crop rescuer via LiteRT 1.4.0. See licensing/provenance before redistribution.
- Camera and tracking have independent bounded queues. Tracking runs on one dedicated worker;
  GPU construction/inference/destruction stay on that thread, with CPU construction fallback.
  YOLO has the fork's separate executor. Teardown queues interpreter close after pending work.
- The fork's 63 native landmark filters, dead zones, physical rear-camera handedness, palm-width
  `.32/.50` pinch hysteresis and fist guard replace all prototype gesture code. There is no
  prototype sensitivity setting, two-frame confirmation or 280 ms tracking grace.
- A stable thumb/index **base-weighted** aim point drives the shoulder-origin pointer, using
  the fork's lead and native cursor filters. The held hand owns the click; both hands get rays.
- The actual GL geometry routines from `VrHomeActivity` draw dark filled silhouettes with light
  outlines, the white drop/stick, fading pressed beam and hollow inverted target ring. A packed
  depth/stencil framebuffer prevents repeated alpha blending inside a silhouette. No blue web
  skeleton or archive pinch ring remains. The hand-visibility option affects silhouettes only.
- A fist closing over a window (plus the outside margin) grabs it. Palm motion changes its yaw
  and height; opening/disappearing releases it. Native `.6/1` One Euro grab filtering and white
  edge-hover feedback follow the fork. The archive's white lower handle also remains usable.
- Metric index-tip NEAR interaction uses the fork's .7 m arm reach, .15/.20 m proximity
  hysteresis, .012/.035 m touch hysteresis, margins, and .45 smoothing; FAR pointing is suppressed
  during a contact. The archive's default windows remain farther away and use FAR pointing.
  Hand-local metric geometry does not move/track the head or establish a room origin.
- Native targets come from the real reference dock/window/keyboard meshes and are transformed
  back to head space for the PhoneXR rings. Browser holds deliver native MOVE events.
- Result freshness is measured from inference **completion**, not the camera capture timestamp.
  Capture timestamps still drive the original landmark filters. A 500–1500 ms bounded watchdog
  follows detector latency, so a slow CPU result is not expired before its first presentation.
  An explicitly empty result still cancels interaction immediately. A silhouette alone can bridge
  a missed detection for at most 180 ms; it cannot preserve a click or a pointer.
- Silhouette geometry is cached per result/per optical span and shared across display frames,
  instead of rebuilding thousands of boxed vertices for each eye on every refresh.
- MediaPipe 0.10.35 `MPImage.close()` recycles its backing bitmap. The detector now wraps an
  independently owned copy, leaving the borrowed frame readable by YOLO, crop rescue, and GPU
  failure recovery. An Android bitmap ownership regression test exercises that close/copy path.
- GPU inference failure (not just delegate creation failure) retries on CPU. YOLO rescue checks
  run at most every 500 ms on the GPU path / 750 ms on CPU to reduce background contention;
  the fork's hand detector, gesture thresholds and visualization geometry remain in use.
- Safety adaptations: disappearance/stale tracking cancels a held gesture rather than clicking;
  held pointer ownership, matching dock/keyboard releases and lifecycle resets are preserved.
- Upstream `palmButtons()` and `drawPalmButtons()` have definitions but no active call sites at
  this pinned revision. They are not turned into invented menus/actions in this integration.
- Cardboard viewer-button / screen-tap fallback uses the same spatial hit-testing at gaze centre.

### Accessible first-run selection

The archive's language window remains a spatial HTML surface, but first-run placement is now
fixed at eye height, 1.05 m ahead, independently of saved workspace distance/scale. Its 880×600
surface at scale 1.15 spans approximately 54 degrees horizontally, with 180 px tall language
buttons and unclipped instructions. It does not animate in from the distant dock or allow dragging
away before setup. Normal dock/workspace placement remains unchanged.

A visible centre reticle and 1.2-second continuous gaze dwell can select a language **without
hands or a mouse**. It uses the same world ray/window mesh/atlas coordinates as hand input.
Changing target, looking away, suspension or a stalled frame loop resets dwell; it fires once.
The viewer-button/tap path remains available. The window reports actual detected-hand counts.

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

- real pose-driven gaze language selection with no hand input, near eye-level setup geometry,
  enlarged hit targets, exact dock order, store/library contents;
- opening/closing multiple windows and native browser lifecycle specifications;
- reference dock position, world anchoring during head rotation;
- native browser DOWN/UP ray routing;
- native PhoneXR processed hand → immediate pinch → browser press/release;
- loss-of-tracking CANCEL without a spurious click;
- PhoneXR fist grabbing/release without clicking, hidden grabbed-hand ray, plus white-handle drag/detach and repin;
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
5. Compare dock, typography, proportions, spacing, shadows, focus, open animations, window arc,
   drag, repin, keyboard and six-window limit against the supplied prototype.
6. PhoneXR silhouettes and both rays, fist grab/edge highlight, near/far movement, pinch hold/release, hand loss, hand switching, browser
   scrolling, sliders and entering text using the floating keyboard.
7. Browser audio/video/Web Audio, multiple windows, closing a playing window, volume buttons,
   Bluetooth/headphones, audio-focus loss, background/foreground and screen lock.
8. Photo picker and return to VR; browser download confirmation; offline/error paths.
9. Pause/resume repeatedly and force EGL/WebView context loss; inspect logcat for camera, surface,
   MediaPipe and GL errors. Verify no stale textures, camera leak or continuing background audio.
10. Profile 10+ minutes on target phones for GPU memory, frame time, UI/camera latency and heat.
