package com.nextvr.app.apps;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Point;
import android.graphics.SurfaceTexture;
import android.hardware.display.DisplayManager;
import android.hardware.display.VirtualDisplay;
import android.media.projection.MediaProjection;
import android.media.projection.MediaProjectionConfig;
import android.media.projection.MediaProjectionManager;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.view.Display;
import android.view.Surface;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;

/**
 * The two ways NextVR can put a real Android app inside a VR window, and their bookkeeping.
 *
 * <h2>Virtual display per app (Shizuku, no root)</h2>
 * The shell user service creates a public, touch-capable virtual display whose output is the
 * {@link SurfaceTexture} a texture slot of the VR compositor already samples. The app's launcher
 * activity is started *on that display*, so the app really runs there: its own task, its own
 * window, its own lifecycle, independent of whatever the phone's own screen shows. Frames reach the
 * VR window through SurfaceFlinger's composition — there is no CPU copy, no encoder and no capture
 * consent dialog, which is why this is the low-latency path (~1 frame of composition, measured with
 * the counters in {@code PerfLog}).
 *
 * <h2>Phone mirror (MediaProjection, always available)</h2>
 * With the user's explicit consent from the system dialog, the phone's screen is composited into a
 * virtual display and shown in a VR window. This is <em>not</em> activity embedding: it is a live
 * mirror of the phone screen (Android 14+ can scope it to one app the user picks). It is offered
 * because it is the only path that needs no privileged access at all, and the UI says exactly that
 * in the window it opens.
 *
 * <p>Both paths share the surface/suspension/resize bookkeeping, so a minimized window costs no
 * frames in either mode.
 */
public final class AppDisplayController implements AppSessionManager.Host {
    /** Request code of the MediaProjection consent dialog. */
    public static final int REQUEST_PROJECTION = 4301;

    /** Longest side of the mirrored stream: enough for a phone UI in VR, cheap to composite. */
    private static final int MIRROR_MAX = 1600;
    /** How often the shell is asked whether the hosted app is still alive. */
    private static final long SUPERVISE_MS = 2500;
    /**
     * A hosted display with no frame after this long is reported instead of staying blank. Long
     * enough for a heavy app to draw its splash screen, short enough to not look broken.
     */
    private static final long EMPTY_DISPLAY_MS = 15_000;
    /**
     * How long a hosted window waits for the shell user service (binding it if that is what it takes)
     * before giving up. The shell process has to be forked and this APK loaded into it, and on a cold
     * Shizuku that is the difference between "the app opens" and "the app opened on the phone".
     */
    private static final long SERVICE_WAIT_MS = 20_000;
    /** The display needs a moment before an activity can be started on it; the launch is retried. */
    private static final long LAUNCH_RETRY_MS = 400;
    private static final int LAUNCH_ATTEMPTS = 3;

    /** What the driver needs from the VR activity; keeps this class out of the GL/UI plumbing. */
    public interface Environment {
        AppSurfaceHost surfaces();
        ShizukuManager shizuku();
        AndroidAppManager apps();
        int densityDpi();
        /** Toast + message into the shell UI. */
        void report(String message);
        /** Session list changed: push it to the shell. */
        void sessionsChanged();
        /** Opens the system screen-capture dialog (mirror mode). */
        void requestCaptureConsent();
    }

    private final Context context;
    private final Environment env;
    private AppSessionManager sessions;
    private final AppInputController input;
    private final ExecutorService work = Executors.newSingleThreadExecutor(runnable -> {
        Thread thread = new Thread(runnable, "NextVR-AppDisplay");
        thread.setDaemon(true);
        return thread;
    });
    private final Handler main = new Handler(Looper.getMainLooper());
    private final Map<String, Surface> surfaces = new ConcurrentHashMap<>();
    private final Map<String, SurfaceTexture> textures = new ConcurrentHashMap<>();
    private final Map<String, AppDisplaySpec> specs = new ConcurrentHashMap<>();
    private MediaProjection projection;
    private VirtualDisplay mirrorDisplay;
    /**
     * The session whose capture is running (its package is the app the window is about), or null.
     *
     * <p>It used to be a fixed pseudo-package, which meant the capture could only ever be "the phone
     * screen". The user asks for an app, so the capture belongs to that app's window: the session
     * carries the app's package — the same field the tile, the dock and the window title use — and
     * the display controller keeps a reference to the one capture that is allowed to exist, because
     * Android gives one projection per consent.
     */
    private volatile String capturePackage;
    /** How the last hosted app was started; shown in the self-test row of the library. */
    private volatile String lastLaunchBackend;
    /** The verbatim output of the last failed `am start`, or null. Shown in the diagnostics panel. */
    private volatile String lastLaunchError;
    /** Which display the last failed app was actually found on, as the shell sees it. */
    private volatile String lastDisplayReport;
    /** True while a hosted window is waiting for the user service, so the UI can say so. */
    private volatile boolean waitingForService;
    private boolean supervising;

    private final Runnable supervisor = new Runnable() {
        @Override public void run() {
            supervising = false;
            verifyAlive();
        }
    };

    /**
     * The session manager needs this controller as its host, and this controller needs the session
     * manager: the reference is therefore set right after both exist (see {@link #setSessions}).
     */
    public AppDisplayController(Context context, Environment env, AppInputController input) {
        this.context = context.getApplicationContext();
        this.env = env;
        this.input = input;
    }

    public void setSessions(AppSessionManager sessions) { this.sessions = sessions; }

    /** Texture slot id of a session's window; the atlas emits a panel that samples exactly this. */
    public static String surfaceId(String packageName) { return "app:" + packageName; }

    public AppDisplaySpec spec(String packageName) { return specs.get(packageName); }

    /**
     * Whether an app can be hosted on a display of its own, i.e. whether the Shizuku route applies.
     *
     * <p>This asks {@link AppHostPolicy} about the Shizuku *state* — permission granted, even if the
     * user service has not finished binding — and not about the binder of the moment. The old
     * "is the service bound right now?" test was the bug: it answered false during the (normal)
     * binding window, which routed the tap to the screen-capture path and put the app on the phone.
     * The service itself is awaited further down, inside the window's own worker thread.
     */
    public AppHostPolicy.Route route() {
        ShizukuManager shizuku = env.shizuku();
        try {
            return AppHostPolicy.route(shizuku == null ? null : shizuku.status().state);
        } catch (Throwable error) {
            return AppHostPolicy.Route.CAPTURE;
        }
    }

    /** True while a hosted window is waiting for the shell user service to answer. */
    public boolean waitingForService() { return waitingForService; }

    /** The verbatim output of the last failed `am start`, or null. */
    public String lastLaunchError() { return lastLaunchError; }

    /** Type and message, never truncated: the platform's own text is the diagnostic. */
    private static String describe(Throwable error) {
        if (error == null) return "unknown error";
        String detail = error.getMessage();
        return error.getClass().getSimpleName() + (detail == null || detail.isEmpty() ? "" : ": " + detail);
    }

    /** Where the shell last saw a hosted app that never drew, or null. */
    public String lastDisplayReport() { return lastDisplayReport; }

    /** Which mechanism the last hosted app was started with, for the self-test row. */
    public String launchBackend() { return lastLaunchBackend; }

    // ------------------------------------------------------------------ AppSessionManager.Host

    @Override public void start(AppSession session) {
        input.refreshBackend(session);
        if (session.mode == AppSession.Mode.SCREEN_MIRROR) {
            startMirror(session);
            return;
        }
        AppDisplaySpec spec = specs.get(session.packageName);
        if (spec == null) {
            spec = AppDisplaySpec.forBox(session.boxWidth, session.boxHeight, env.densityDpi());
            specs.put(session.packageName, spec);
        }
        session.width = spec.width;
        session.height = spec.height;
        session.density = spec.density;
        final AppDisplaySpec target = spec;
        env.surfaces().acquire(surfaceId(session.packageName), spec.width, spec.height,
                new AppSurfaceHost.Callback() {
            @Override public void ready(SurfaceTexture texture) {
                textures.put(session.packageName, texture);
                Surface surface = new Surface(texture);
                surfaces.put(session.packageName, surface);
                buildOnShellDisplay(session, surface, target);
            }
            @Override public void failed(String reason) {
                sessions.settle(session.packageName, false, "surface_failed:" + reason);
            }
        });
    }

    /**
     * Creates the display and starts the app on it, on a worker thread: both are blocking IPC (and
     * {@code am start} is a process launch). The VR activity keeps rendering meanwhile.
     */
    private void buildOnShellDisplay(AppSession session, Surface surface, AppDisplaySpec spec) {
        final String packageName = session.packageName;
        try {
            work.execute(() -> {
                ShizukuManager shizuku = env.shizuku();
                IDisplayService service = shizuku == null ? null : shizuku.service();
                if (service == null && shizuku != null) {
                    // Bind (or re-bind) and wait. This is the window that used to be mistaken for
                    // "Shizuku is not available" and sent the app to the phone's screen instead.
                    waitingForService = true;
                    env.sessionsChanged();
                    service = shizuku.awaitService(SERVICE_WAIT_MS);
                    waitingForService = false;
                }
                if (service == null) {
                    String reason = shizuku == null ? "no Shizuku manager" : shizuku.unavailableReason();
                    // "Allow NextVR in Shizuku" and "install Shizuku" are different instructions, so
                    // they are different codes and the window words them differently.
                    boolean asked = shizuku != null && shizuku.needsPermission();
                    sessions.settle(packageName, false, asked ? "shizuku_denied" : "shizuku_unavailable");
                    env.report(asked
                            ? "Allow NextVR inside Shizuku and tap the app again"
                            : "Android app windows need the shell service: " + reason);
                    env.sessionsChanged();
                    return;
                }
                int displayId;
                try {
                    displayId = service.createDisplay(surface, spec.width, spec.height, spec.density);
                } catch (Throwable error) {
                    sessions.settle(packageName, false, "display_failed");
                    env.report("Could not create the app display: " + error.getMessage());
                    return;
                }
                if (displayId < 0) {
                    sessions.settle(packageName, false, "display_refused");
                    env.report("The shell service refused to create the app display (see its self-test)");
                    return;
                }
                sessions.markDisplayReady(packageName, displayId, spec.width, spec.height, spec.density);
                String component = env.apps().launcherComponent(packageName);
                if (component == null) {
                    sessions.settle(packageName, false, "no_launcher_activity");
                    env.report("This app has no launchable activity");
                    return;
                }
                String error = null;
                for (int attempt = 1; attempt <= LAUNCH_ATTEMPTS; attempt++) {
                    try {
                        // `am start --display` is the same call `adb shell am start --display` makes,
                        // and — unlike startActivity from this process — it *reports* what happened:
                        // a refusal comes back as text ("Error: Activity not started ...") instead of
                        // silently landing the activity on the phone's own screen.
                        error = service.launch(component, displayId);
                    } catch (Throwable launchError) {
                        // AIDL methods declare RemoteException; the shell service going away mid-call
                        // is reported to the window instead of escaping the worker thread.
                        error = launchError.getMessage() == null
                                ? launchError.getClass().getSimpleName() : launchError.getMessage();
                    }
                    if (error == null) break;
                    // A display created a moment ago can refuse the activity; a short retry catches
                    // that without turning a real error into a spinner.
                    if (attempt < LAUNCH_ATTEMPTS) {
                        try { Thread.sleep(LAUNCH_RETRY_MS); } catch (InterruptedException stop) {
                            Thread.currentThread().interrupt();
                            break;
                        }
                    }
                }
                lastLaunchBackend = error == null ? "am start --display" : null;
                lastLaunchError = error;
                sessions.settle(packageName, error == null, error);
                input.refreshBackend(sessions.find(packageName));
                env.sessionsChanged();
                scheduleSupervisor();
            });
        } catch (RejectedExecutionException stopped) {
            /* activity is going away */
        }
    }

    @Override public void resize(AppSession session) {
        if (session.displayId < 0) return;
        final AppDisplaySpec spec = AppDisplaySpec.forBox(session.boxWidth, session.boxHeight, env.densityDpi());
        final String packageName = session.packageName;
        SurfaceTexture texture = textures.get(packageName);
        if (texture != null) {
            try { texture.setDefaultBufferSize(spec.width, spec.height); } catch (Throwable ignored) { }
        }
        if (session.mode == AppSession.Mode.SCREEN_MIRROR) {
            VirtualDisplay display = mirrorDisplay;
            if (display == null) { sessions.resizeFailed(packageName); return; }
            try {
                // The mirror is our own capture: the platform scales the captured content into the new
                // buffer, so this cannot be refused the way a hosted app's display can.
                display.resize(spec.width, spec.height, spec.density);
                specs.put(packageName, spec);
                sessions.resizeApplied(packageName);
            } catch (Throwable error) {
                sessions.resizeFailed(packageName);
                env.report("The mirror kept its size: " + error.getMessage());
            }
            return;
        }
        final int displayId = session.displayId;
        try {
            work.execute(() -> {
                IDisplayService service = service();
                if (service == null) {
                    sessions.resizeFailed(packageName);
                    return;
                }
                String error;
                try {
                    error = service.resizeDisplay(displayId, spec.width, spec.height, spec.density);
                } catch (Throwable failure) {
                    error = failure.getClass().getSimpleName();
                }
                if (error == null) {
                    specs.put(packageName, spec);
                    sessions.resizeApplied(packageName);
                } else {
                    // The display kept its size: the session says so and stops asking. The window keeps
                    // working — the picture is fitted inside it, the same way a non-resizable app is
                    // fitted by the platform inside a display.
                    sessions.resizeFailed(packageName);
                    env.report("The app window kept its size: " + error);
                }
            });
        } catch (RejectedExecutionException ignored) { }
    }

    @Override public void setVisible(AppSession session, boolean visible) {
        Surface surface = surfaces.get(session.packageName);
        if (session.mode == AppSession.Mode.SCREEN_MIRROR) {
            VirtualDisplay display = mirrorDisplay;
            if (display != null) {
                try { display.setSurface(visible ? surface : null); } catch (Throwable ignored) { }
            }
            // A paused mirror also stops the microphone/capture indicator from looking active when it
            // is not being watched: detaching the surface stops the composition entirely.
            if (!visible) input.cancel(session.packageName);
            return;
        }
        final int displayId = session.displayId;
        if (displayId < 0) return;
        if (!visible) input.cancel(session.packageName);
        try {
            work.execute(() -> {
                IDisplayService service = service();
                if (service == null) return;
                try { service.setDisplaySurface(displayId, visible ? surface : null); }
                catch (Throwable ignored) { }
            });
        } catch (RejectedExecutionException ignored) { }
    }

    @Override public void stop(AppSession session) {
        input.cancel(session.packageName);
        if (session.mode == AppSession.Mode.SCREEN_MIRROR) {
            stopMirror();
        } else {
            final int displayId = session.displayId;
            try {
                work.execute(() -> {
                    IDisplayService service = service();
                    if (service != null && displayId >= 0) {
                        try { service.releaseDisplay(displayId); } catch (Throwable ignored) { }
                    }
                });
            } catch (RejectedExecutionException ignored) { }
        }
        Surface surface = surfaces.remove(session.packageName);
        if (surface != null) surface.release();
        textures.remove(session.packageName);
        specs.remove(session.packageName);
        env.surfaces().release(surfaceId(session.packageName));
        env.sessionsChanged();
    }

    // ------------------------------------------------------------------ phone mirror

    /**
     * Starts the capture path for [focusPackage]: brings that app to the phone's screen with public
     * API, starts the projection foreground service and opens the system consent dialog.
     *
     * <p>The order is not cosmetic. The app goes to the screen first, because the capture is of the
     * phone's screen and the user must be authorizing a capture of the app they asked for, not of
     * whatever happened to be open. The foreground service comes next, and not as a formality: since
     * Android 10 a {@code MediaProjection} cannot even be constructed without a running foreground
     * service of type {@code mediaProjection} — the constructor behind {@code getMediaProjection()}
     * throws {@code SecurityException("Media projections require a foreground service ...")} for any
     * app targeting Q or later. Asking for consent first would leave the user having authorized a
     * capture that then fails. The service is also the honest indicator that a capture is running.
     *
     * <p>Android 14 and later record which app was in the foreground when consent was asked and offer
     * it in the dialog as "share one app"; before Android 14 the same call captures the whole screen,
     * which is why bringing the app forward matters on every version.
     */
    public void requestCapture(String focusPackage) {
        capturePackage = focusPackage;
        if (focusPackage != null) launchOnPhone(focusPackage);
        AppMirrorService.start(context);
        env.requestCaptureConsent();
    }

    /** Result of {@link #REQUEST_PROJECTION}; must be called on the main thread. */
    public void onCaptureConsentResult(int resultCode, Intent data) {
        String packageName = capturePackage;
        AppSession session = packageName == null ? null : sessions.find(packageName);
        if (resultCode != Activity.RESULT_OK || data == null) {
            AppMirrorService.stop(context);
            capturePackage = null;
            if (session != null) sessions.settle(packageName, false, "consent_denied");
            env.report("Screen capture was not authorized");
            return;
        }
        try {
            // Android 10+ refuses to construct a MediaProjection unless the foreground service of
            // type "mediaProjection" is already running; when it is not, the platform's own message
            // ("Media projections require a foreground service of type ...") is what the user sees.
            // Asking the service for its state first turns that into a sentence about what failed.
            if (!AppMirrorService.isRunning()) {
                throw new IllegalStateException(AppMirrorService.failure()
                        == null ? "the screen-capture foreground service is not running"
                                : AppMirrorService.failure());
            }
            MediaProjectionManager manager = context.getSystemService(MediaProjectionManager.class);
            if (manager == null) throw new IllegalStateException("no MediaProjectionManager");
            // Requires the foreground service started in requestMirror(): the constructor behind this
            // call is where the platform enforces it.
            projection = manager.getMediaProjection(resultCode, data);
            if (projection == null) throw new IllegalStateException("null MediaProjection");
            projection.registerCallback(projectionCallback, main);
            if (session != null) startMirror(session);
        } catch (Throwable error) {
            AppMirrorService.stop(context);
            if (session != null) sessions.settle(packageName, false, "projection_failed");
            // The whole message, never a truncated one: the platform's own text is the diagnostic.
            env.report("Could not start screen capture: " + describe(error));
        }
    }

    private void startMirror(AppSession session) {
        final String packageName = session.packageName;
        capturePackage = packageName;
        if (projection == null) {
            // No consent yet for this window: this is the first time the app is opened in capture mode.
            requestCapture(packageName);
            return;
        }
        int[] screen = screenSize();
        int longSide = Math.max(screen[0], screen[1]);
        float scale = longSide > MIRROR_MAX ? (float) MIRROR_MAX / longSide : 1f;
        final int width = Math.max(2, Math.round(screen[0] * scale));
        final int height = Math.max(2, Math.round(screen[1] * scale));
        final int density = env.densityDpi() <= 0 ? 240 : Math.min(320, env.densityDpi());
        session.width = width;
        session.height = height;
        session.density = density;
        input.refreshBackend(session);
        env.surfaces().acquire(surfaceId(packageName), width, height, new AppSurfaceHost.Callback() {
            @Override public void ready(SurfaceTexture texture) {
                textures.put(packageName, texture);
                Surface surface = new Surface(texture);
                surfaces.put(packageName, surface);
                try {
                    // Signature order matters: (name, width, height, dpi, flags, surface, callback, handler).
                    mirrorDisplay = projection.createVirtualDisplay("NextVR screen", width, height, density,
                            DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR, surface, null, null);
                } catch (Throwable error) {
                    // The whole projection is torn down, not just the service: a projection left
                    // holding one consent would make the next attempt skip the dialog and fail again.
                    stopMirror();
                    sessions.settle(packageName, false, "mirror_failed");
                    env.report("Screen capture failed: " + error.getMessage());
                    return;
                }
                if (mirrorDisplay == null) {
                    stopMirror();
                    sessions.settle(packageName, false, "mirror_refused");
                    env.report("The system refused the capture display");
                    return;
                }
                sessions.markDisplayReady(packageName, mirrorDisplay.getDisplay() == null
                        ? -2 : mirrorDisplay.getDisplay().getDisplayId(), width, height, density);
                sessions.settle(packageName, true, null);
                env.sessionsChanged();
            }
            @Override public void failed(String reason) {
                stopMirror();
                sessions.settle(packageName, false, "surface_failed:" + reason);
            }
        });
    }

    private void stopMirror() {
        AppMirrorService.stop(context);
        capturePackage = null;
        VirtualDisplay display = mirrorDisplay;
        mirrorDisplay = null;
        if (display != null) {
            try { display.release(); } catch (Throwable ignored) { }
        }
        MediaProjection current = projection;
        projection = null;
        if (current != null) {
            try { current.unregisterCallback(projectionCallback); } catch (Throwable ignored) { }
            try { current.stop(); } catch (Throwable ignored) { }
        }
    }

    /** The user stopped sharing from the system UI, or the system revoked the session. */
    private final MediaProjection.Callback projectionCallback = new MediaProjection.Callback() {
        @Override public void onStop() {
            String packageName = capturePackage;
            capturePackage = null;
            AppSession session = packageName == null ? null : sessions.find(packageName);
            projection = null;
            mirrorDisplay = null;
            if (session != null && session.state != AppSession.State.STOPPED) {
                sessions.settle(packageName, false, "mirror_stopped");
                env.report("Screen capture ended");
            }
        }

        /**
         * Android 14+ reports the size of what is actually being captured ("share one app" reports
         * that app's window). The platform's own recipe for this callback is applied here: resize the
         * virtual display, move the buffer to the new size and hand the display a surface built from
         * the same texture. Without it the framework would letterbox the content inside a picture the
         * VR window then scales up again, and the touch would be aimed at the wrong pixels.
         */
        @Override public void onCapturedContentResize(int width, int height) {
            String packageName = capturePackage;
            AppSession session = packageName == null ? null : sessions.find(packageName);
            if (session == null || width <= 0 || height <= 0) return;
            if (Math.abs(width - session.width) <= 1 && Math.abs(height - session.height) <= 1) return;
            final int density = session.density <= 0 ? 240 : session.density;
            Surface previous = surfaces.get(packageName);
            SurfaceTexture texture = textures.get(packageName);
            VirtualDisplay display = mirrorDisplay;
            try {
                if (texture != null) texture.setDefaultBufferSize(width, height);
                if (display != null) {
                    display.resize(width, height, density);
                    if (texture != null) {
                        Surface surface = new Surface(texture);
                        surfaces.put(packageName, surface);
                        display.setSurface(surface);
                        if (previous != null) previous.release();
                    }
                }
            } catch (Throwable error) {
                // An older surface is still attached; the picture keeps working with the old size.
                env.report("The mirrored picture could not be resized: " + error.getMessage());
            }
            sessions.markDisplayChanged(packageName, width, height, 0);
            env.sessionsChanged();
        }
    };

    // ------------------------------------------------------------------ supervision

    /** Schedules the periodic "is the hosted app still alive?" check. */
    public void scheduleSupervisor() {
        if (supervising) return;
        supervising = true;
        main.removeCallbacks(supervisor);
        main.postDelayed(supervisor, SUPERVISE_MS);
    }

    /**
     * A hosted app can die on its own (crash, force stop, task removed, low-memory kill). NextVR must
     * notice: a window frozen on the last frame with no explanation is worse than a window that says
     * the app stopped. Shell can read /proc for every UID; the query runs on the worker thread.
     */
    private void verifyAlive() {
        try {
            work.execute(() -> {
                IDisplayService service = service();
                long now = android.os.SystemClock.uptimeMillis();
                for (AppSession session : sessions.sessions()) {
                    if (!session.alive() || session.mode != AppSession.Mode.VIRTUAL_DISPLAY) continue;
                    // A display that was accepted but never produced a frame is a window that would
                    // otherwise stay blank forever: the app refused to run there, or the platform
                    // started it on the phone's own screen instead of on the display. The texture the
                    // display composes into is the answer — its timestamp stays 0 until a first frame
                    // arrives — and it is read from the object this class already owns, so the GL side
                    // is not involved.
                    android.graphics.SurfaceTexture frameTexture = textures.get(session.packageName);
                    long stamp = frameTexture == null ? -1 : frameTexture.getTimestamp();
                    if (session.state == AppSession.State.RUNNING && stamp == 0
                            && now - session.openedAtMs > EMPTY_DISPLAY_MS) {
                        // Before calling it a failure, ask the shell where this app actually is: the
                        // one outcome this must never produce is a silent, unexplained blank window.
                        String where = null;
                        if (service != null) {
                            try { where = service.displayReport(session.packageName); }
                            catch (Throwable ignored) { }
                        }
                        lastDisplayReport = where;
                        boolean alive = false;
                        if (service != null) {
                            try { alive = service.processAlive(session.packageName); } catch (Throwable ignored) { }
                        }
                        sessions.settle(session.packageName, false, "display_empty");
                        env.report(session.title + (alive
                                ? ": the app is running but not drawing on this display"
                                : ": the app did not start on this display")
                                + (where == null || where.isEmpty() ? "" : " (" + where + ")"));
                        continue;
                    }
                    if (service == null) {
                        sessions.markDied(session.packageName);
                        continue;
                    }
                    boolean alive;
                    try { alive = service.processAlive(session.packageName); } catch (Throwable error) { alive = true; }
                    if (!alive) {
                        sessions.markDied(session.packageName);
                        env.report(session.title + " stopped");
                    }
                }
                env.sessionsChanged();
            });
        } catch (RejectedExecutionException ignored) { }
        scheduleSupervisor();
    }

    /** Shizuku went away (restarted, stopped): every hosted display died with it. */
    public void onShizukuLost() {
        for (AppSession session : sessions.sessions()) {
            if (session.mode == AppSession.Mode.VIRTUAL_DISPLAY && session.alive())
                sessions.markDied(session.packageName);
        }
        env.sessionsChanged();
    }

    /**
     * The GL context was recreated (view re-created, context loss): every texture slot of the
     * compositor is new, and the displays are still composing into the old surfaces. Re-acquire the
     * slots and re-point the displays at them, so the hosted apps keep running instead of dying with
     * an invisible surface.
     */
    public void rebindSurfaces() {
        for (AppSession session : sessions.sessions()) {
            if (!session.alive()) continue;
            final String packageName = session.packageName;
            final int displayId = session.displayId;
            AppDisplaySpec spec = specs.get(packageName);
            if (spec == null) spec = AppDisplaySpec.forBox(session.width, session.height, env.densityDpi());
            Surface previous = surfaces.remove(packageName);
            if (previous != null) previous.release();
            final boolean mirror = session.mode == AppSession.Mode.SCREEN_MIRROR;
            env.surfaces().acquire(surfaceId(packageName), spec.width, spec.height,
                    new AppSurfaceHost.Callback() {
                        @Override public void ready(SurfaceTexture texture) {
                            textures.put(packageName, texture);
                            Surface surface = new Surface(texture);
                            surfaces.put(packageName, surface);
                            if (mirror) {
                                VirtualDisplay display = mirrorDisplay;
                                if (display != null) {
                                    try { display.setSurface(surface); } catch (Throwable ignored) { }
                                }
                                return;
                            }
                            try {
                                work.execute(() -> {
                                    IDisplayService service = service();
                                    if (service == null || displayId < 0) return;
                                    try { service.setDisplaySurface(displayId, surface); }
                                    catch (Throwable ignored) { }
                                });
                            } catch (RejectedExecutionException ignored) { }
                        }
                        @Override public void failed(String reason) {
                            sessions.settle(packageName, false, "surface_failed:" + reason);
                        }
                    });
        }
    }

    /** Releases every display and surface and ends the mirror notification; called from onDestroy. */
    public void shutdown() {
        AppMirrorService.stop(context);
        main.removeCallbacks(supervisor);
        supervising = false;
        stopMirror();
        for (AppSession session : sessions.sessions()) {
            Surface surface = surfaces.remove(session.packageName);
            if (surface != null) surface.release();
            textures.remove(session.packageName);
            specs.remove(session.packageName);
            env.surfaces().release(surfaceId(session.packageName));
        }
        work.shutdownNow();
    }

    // ------------------------------------------------------------------ helpers

    private IDisplayService service() {
        try {
            ShizukuManager shizuku = env.shizuku();
            return shizuku == null ? null : shizuku.service();
        } catch (Throwable error) {
            return null;
        }
    }

    private String describeShizuku() {
        try {
            ShizukuManager shizuku = env.shizuku();
            return shizuku == null ? "not available" : shizuku.status().state.id;
        } catch (Throwable error) {
            return "unavailable";
        }
    }

    @SuppressLint("Deprecation")
    private int[] screenSize() {
        try {
            DisplayManager manager = context.getSystemService(DisplayManager.class);
            Display display = manager == null ? null : manager.getDisplay(Display.DEFAULT_DISPLAY);
            if (display != null) {
                Point size = new Point();
                display.getRealSize(size);
                if (size.x > 0 && size.y > 0) return new int[]{size.x, size.y};
            }
        } catch (Throwable ignored) { }
        return new int[]{1080, 1920};
    }

    /**
     * Brings an app to the phone screen. This is the mechanism PhoneXR uses for its games and it is
     * the one part of running another app that needs no privilege at all: {@code
     * getLaunchIntentForPackage} + {@code startActivity} is exactly what tapping the app's icon in the
     * phone's launcher does.
     *
     * <p>NextVR uses it twice: before a capture starts (the capture is of the phone's screen, so that
     * screen has to be showing the app the user asked for — and on Android 14+ the system dialog then
     * lets the user pick that same app), and as the "open on the phone" action of a window whose
     * capture could not start. Returns false when the app has no launcher activity.
     */
    public boolean launchOnPhone(String packageName) {
        if (packageName == null || packageName.isEmpty()) return false;
        try {
            Intent intent = context.getPackageManager().getLaunchIntentForPackage(packageName);
            if (intent == null) return false;
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED);
            context.startActivity(intent);
            return true;
        } catch (Throwable error) {
            env.report("Could not bring the app to the phone screen: " + error.getMessage());
            return false;
        }
    }

    /** Whether the running Android version can scope a capture to a single app (Android 14+). */
    public static boolean supportsSingleAppCapture() { return Build.VERSION.SDK_INT >= 34; }

    /** Only reachable on Android 14+; kept apart so older runtimes never load the class. */
    @androidx.annotation.RequiresApi(34)
    static Intent singleAppCaptureIntent(MediaProjectionManager manager) {
        return manager.createScreenCaptureIntent(MediaProjectionConfig.createConfigForUserChoice());
    }

    /** The capture intent to show: user choice on Android 14+, whole screen before that. */
    public static Intent captureIntent(MediaProjectionManager manager) {
        if (supportsSingleAppCapture()) return singleAppCaptureIntent(manager);
        return manager.createScreenCaptureIntent();
    }
}
