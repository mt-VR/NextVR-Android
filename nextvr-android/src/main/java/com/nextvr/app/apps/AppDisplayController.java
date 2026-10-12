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
    /** Pseudo package name of the phone-mirror window. */
    public static final String MIRROR_PACKAGE = "nextvr.screen";
    /** Request code of the MediaProjection consent dialog. */
    public static final int REQUEST_PROJECTION = 4301;

    /** Longest side of the mirrored stream: enough for a phone UI in VR, cheap to composite. */
    private static final int MIRROR_MAX = 1600;
    /** How often the shell is asked whether the hosted app is still alive. */
    private static final long SUPERVISE_MS = 2500;

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
                if (service == null) {
                    sessions.settle(packageName, false, "shizuku_unavailable");
                    env.report("Android app windows need Shizuku: " + describeShizuku());
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
                String error;
                try {
                    error = service.launch(component, displayId);
                } catch (Throwable launchError) {
                    // AIDL methods declare RemoteException; the shell service going away mid-call is
                    // reported to the window instead of escaping the worker thread.
                    error = launchError.getMessage() == null
                            ? launchError.getClass().getSimpleName() : launchError.getMessage();
                }
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
        specs.put(session.packageName, spec);
        SurfaceTexture texture = textures.get(session.packageName);
        if (texture != null) {
            try { texture.setDefaultBufferSize(spec.width, spec.height); } catch (Throwable ignored) { }
        }
        if (session.mode == AppSession.Mode.SCREEN_MIRROR) {
            VirtualDisplay display = mirrorDisplay;
            if (display != null && session.width > 0 && session.height > 0) {
                try { display.resize(session.width, session.height, session.density); } catch (Throwable ignored) { }
            }
            return;
        }
        final int displayId = session.displayId;
        try {
            work.execute(() -> {
                IDisplayService service = service();
                if (service == null) return;
                try { service.resizeDisplay(displayId, spec.width, spec.height, spec.density); }
                catch (Throwable ignored) { }
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

    /** Opens the system consent dialog for the phone mirror. */
    public void requestMirror() {
        env.requestCaptureConsent();
    }

    /** Result of {@link #REQUEST_PROJECTION}; must be called on the main thread. */
    public void onCaptureConsentResult(int resultCode, Intent data) {
        AppSession session = sessions.find(MIRROR_PACKAGE);
        if (resultCode != Activity.RESULT_OK || data == null) {
            if (session != null) sessions.settle(MIRROR_PACKAGE, false, "consent_denied");
            env.report("Screen mirroring was not authorized");
            return;
        }
        try {
            MediaProjectionManager manager = context.getSystemService(MediaProjectionManager.class);
            if (manager == null) throw new IllegalStateException("no MediaProjectionManager");
            projection = manager.getMediaProjection(resultCode, data);
            if (projection == null) throw new IllegalStateException("null MediaProjection");
            projection.registerCallback(projectionCallback, main);
            if (session != null) startMirror(session);
        } catch (Throwable error) {
            if (session != null) sessions.settle(MIRROR_PACKAGE, false, "projection_failed");
            env.report("Could not start screen mirroring: " + error.getMessage());
        }
    }

    private void startMirror(AppSession session) {
        if (projection == null) {
            // No consent yet: ask for it and finish when the dialog answers.
            requestMirror();
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
        env.surfaces().acquire(surfaceId(MIRROR_PACKAGE), width, height, new AppSurfaceHost.Callback() {
            @Override public void ready(SurfaceTexture texture) {
                textures.put(MIRROR_PACKAGE, texture);
                Surface surface = new Surface(texture);
                surfaces.put(MIRROR_PACKAGE, surface);
                try {
                    // Signature order matters: (name, width, height, dpi, flags, surface, callback, handler).
                    mirrorDisplay = projection.createVirtualDisplay("NextVR screen", width, height, density,
                            DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR, surface, null, null);
                } catch (Throwable error) {
                    sessions.settle(MIRROR_PACKAGE, false, "mirror_failed");
                    env.report("Screen mirroring failed: " + error.getMessage());
                    return;
                }
                if (mirrorDisplay == null) {
                    sessions.settle(MIRROR_PACKAGE, false, "mirror_refused");
                    env.report("The system refused the mirror display");
                    return;
                }
                sessions.markDisplayReady(MIRROR_PACKAGE, mirrorDisplay.getDisplay() == null
                        ? -2 : mirrorDisplay.getDisplay().getDisplayId(), width, height, density);
                sessions.settle(MIRROR_PACKAGE, true, null);
                env.sessionsChanged();
            }
            @Override public void failed(String reason) {
                sessions.settle(MIRROR_PACKAGE, false, "surface_failed:" + reason);
            }
        });
    }

    private void stopMirror() {
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
            AppSession session = sessions.find(MIRROR_PACKAGE);
            projection = null;
            mirrorDisplay = null;
            if (session != null && session.state != AppSession.State.STOPPED) {
                sessions.settle(MIRROR_PACKAGE, false, "mirror_stopped");
                env.report("Screen mirroring ended");
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
            AppSession session = sessions.find(MIRROR_PACKAGE);
            if (session == null || width <= 0 || height <= 0) return;
            if (Math.abs(width - session.width) <= 1 && Math.abs(height - session.height) <= 1) return;
            final int density = session.density <= 0 ? 240 : session.density;
            Surface previous = surfaces.get(MIRROR_PACKAGE);
            SurfaceTexture texture = textures.get(MIRROR_PACKAGE);
            VirtualDisplay display = mirrorDisplay;
            try {
                if (texture != null) texture.setDefaultBufferSize(width, height);
                if (display != null) {
                    display.resize(width, height, density);
                    if (texture != null) {
                        Surface surface = new Surface(texture);
                        surfaces.put(MIRROR_PACKAGE, surface);
                        display.setSurface(surface);
                        if (previous != null) previous.release();
                    }
                }
            } catch (Throwable error) {
                // An older surface is still attached; the picture keeps working with the old size.
                env.report("The mirrored picture could not be resized: " + error.getMessage());
            }
            sessions.markDisplayChanged(MIRROR_PACKAGE, width, height, 0);
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
                for (AppSession session : sessions.sessions()) {
                    if (!session.alive() || session.mode != AppSession.Mode.VIRTUAL_DISPLAY) continue;
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

    /** Releases everything; called when the VR activity is destroyed. */
    public void shutdown() {
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
