# Installed Android apps in VR

NextVR's Library now discovers launchable Android activities and opens them as content inside its existing spatial windows. The Library remains the entry point; no separate phone-side launcher window is introduced.

## Runtime path

1. `AndroidAppManager` queries only `ACTION_MAIN` / `CATEGORY_LAUNCHER` activities. The manifest declares that narrow Android 11+ package-visibility query; it does not request `QUERY_ALL_PACKAGES`.
2. Known Library shortcuts resolve to an installed Android package when present. Other launchable packages appear in the Library's **Android** filter. On desktop/web, the existing browser shortcuts remain unchanged.
3. The selected tile creates a normal NextVR window. The atlas passes its app surface geometry through the existing native frame bridge.
4. `NextVrActivity` creates a GL-owned `SurfaceTexture`, exposes its `Surface`, and asks a Shizuku user service to create a virtual display on it. That display renders the activity directly into the OES texture used by the VR compositor; this is not phone-screen capture.
5. The shell-identity service starts the launch activity with `am start --display <id>`. Hand contacts become touch `MotionEvent`s with that display ID; the floating keyboard and the app-window Back control inject display-targeted key events. Closing the VR window releases the display and its surface.

Each app window has its own display/session. Existing window placement, five-window arc limit, close/move/resize controls, hand tracking, and browser surfaces are retained.

## Setup and permission

- Install and start a current Shizuku release. In NextVR open **Settings → General** and use **Connect / grant access**; approve NextVR in Shizuku once. Status is shown there.
- On Android 11/API 30 and later, Shizuku can be started through **Wireless debugging**. Android 8–10/API 26–29 do not include Android's Wireless debugging UI: start Shizuku using a PC's ADB connection or use a supported root setup.
- Shizuku permission is separate from Camera permission. NextVR does not request MediaProjection, record the phone display, or ask for repeated screen-sharing approval. Shizuku itself still has to be running; reboot/ADB-session behavior depends on how the user started it.

Ordinary app UID cannot create a trusted cross-display target, start arbitrary third-party activities on it, or inject trusted input. The implementation therefore uses the Shizuku user service's ADB-shell (UID 2000) or root identity and hidden display/input APIs; it does not try to bypass those Android security boundaries in the normal NextVR process.

## Platform and app limits

This path is closest to PhoneXR's source-verified approach, but Android/OEM policy and individual app behavior still vary. An app can reject secondary/virtual displays, be non-resizable, expect a particular phone orientation, or rely on device-specific display features. `FLAG_SECURE`, DRM/protected video, and some banking/media security rules can yield blocked or black output. NextVR reports launch, service, input, and no-frame failures; it cannot make a protected surface capturable or force an app to support a virtual display. In those cases, display-targeted launch may fail rather than intentionally opening the app on the phone's default display.

Shizuku grants shell-level privileges, not unrestricted root when started through ADB. Android/OEM changes to hidden display flags, `am --display`, or input injection can also prevent operation; there is no app-side workaround for such platform restrictions without root/system privileges.

## Verification and provenance

PhoneXR's source was inspected at commit [`27c5bc469fb736fb0c00b7254a6dfc532fea7003`](https://github.com/samrat1games/PhoneXR/tree/27c5bc469fb736fb0c00b7254a6dfc532fea7003). It implements the Shizuku shell user service, `DisplayManager(Context)` virtual display, `am start --display`, and `InputEvent.setDisplayId`/`InputManager.injectInputEvent`; those verified mechanisms informed this integration. Shizuku's own API source was also checked for provider setup, permission/binder listeners, user-service binding, and the required `destroy` AIDL transaction.

The JavaScript bundle and Node test suite can be built/run with `npm run build:ui` and `npm test`. The integration and app-catalog tests check the wiring and package mapping. Android APK compilation, ADB behavior, Shizuku permission/runtime behavior, and real-device rendering/input still require an Android/JDK-equipped environment and a physical device. Source inspection is not evidence that an OEM/device accepts every privileged display operation.
