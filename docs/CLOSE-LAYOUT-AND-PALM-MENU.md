# Close layout, palm dock button, and tracking budget (1.0.2)

## Layout

The requested closer layout changes Android spatial placement, not the reference's DOM theme:
welcome 0.60 m at eye height (previously 1.05 m), default app-window radius 0.85 m (previously
about 1.92 m), dock 0.65 m (previously 1.42 m), keyboard 0.60 m. Window arc spacing expands to
avoid stacking large nearby panels. The same atlas limits, text/icon ordering, Cardboard head
orientation and rotation-only world remain. Existing installs migrate distance settings once;
subsequent distance adjustments are kept. Settings offers 0.60–1.80 m window distances.

## Palm button (pinch summon removed)

The native PhoneXR metric palm-facing-eyes predicate (normal toward the eyes + fingers upright)
remains available for hand shape evaluation, but the subsequent pinch that previously summoned
the dock has been removed. Dock invocation no longer depends on any pinch gesture. Other PhoneXR
gestures (pinch click, fist grab, direct touch, ray) and hand shape/filter/pinch thresholds are
unchanged. When a dock recenter is needed, use the dock's recenter control; windows and
keyboard remain where placed and are not recentered automatically.

**Artwork status:** the requested silver-on-black logo is visible in chat but the announced
attachment file was not available in this workspace, including after re-upload. No replacement
was generated. The launcher and menu currently retain the repository's existing icon; bundled
`ui/branding.json` explicitly reports `existing-icon-placeholder`. This is NOT the requested
new artwork. To finish exact branding, supply a direct-download URL or place the original at
`artwork/nextvr-logo.png`, then run:

```sh
python -m pip install Pillow
python tools/prepare_branding.py artwork/nextvr-logo.png
npm run build:ui
```

That script crops empty black margins and resizes the original raster only. It writes the finger
button texture, density-specific launcher icons, and the API 26 adaptive icon (safe-zone padding,
black background). No AI approximation or invented logo is used.

## Tracking performance work

- Reuse the full-resolution JNI ARGB array rather than allocating one every camera frame. At
  1280×720 this avoids a 3,686,400-byte Java array allocation per frame. Passthrough resolution
  and the already-corrected rotation/mirroring contract are unchanged.
- Reuse the exclusively owned analysis bitmap, Canvas, Paint and destination rectangle. Never
  reuse a bitmap while inference is in flight; preserve the independently owned MediaPipe copy
  because closing MPImage recycles that copy. No camera queue/backlog is added.
- Start at 512 px analysis width, drop to 384 only after sustained inference pressure, recover
  through 512 to 640 after sustained fast inference. Admission is capped at 30 Hz with a short
  CPU breather; it does not force 30 Hz or invent frames. Filters/gestures remain PhoneXR's.
- Initialize YOLO on its own low-priority worker, and initialize the crop landmarker only when
  a real crop needs recovery. Primary hand results no longer wait for both secondary models.
- Stable one-hand scenes probe for missing hands at 2.5 s intervals, with prompt recovery after
  losing a tracked hand, and inference-duration-based backoff. Two tracked hands need no YOLO.
  YOLO uses one CPU thread; its errors disable only recovery, not the whole app. Stale wrist
  locations are timed from sampling, not completion. Primary MediaPipe keeps running separately.
- Limit/deduplicate hand-target bridge packets to 30 Hz; cache parsed targets and shader uniform
  locations so both eyes reuse them rather than parsing identical JSON every display frame. Existing geometry caches and completion-based result freshness remain.

These are allocation/scheduling changes validated by regression tests, not measured on-device
FPS/thermal improvements. Verify tracking latency, recovery quality, heat, and direct touch on
real target phones; adaptive resolution may reduce fine detail on slow devices.
