package com.nextvr.app.xr;

import com.nextvr.app.apps.AppSurfaceHost;
import com.nextvr.app.apps.AppWindowShape;
import com.nextvr.app.apps.IDisplayService;

import android.content.Context;
import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.Surface;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;

/**
 * A headset game, running inside this app's world.
 *
 * <h2>How a game gets into the workspace</h2>
 *
 * <p>The same route an Android app window takes, and for the same reason: a game is an ordinary
 * Android app that happens to draw through an OpenXR runtime. Its activity is started on a public
 * virtual display whose output is a texture slot the VR compositor already samples every frame, so
 * the game's own stereo picture arrives as a surface in our world.
 *
 * <p>The runtime presents side by side and does not correct the lenses — that is the host's job — so
 * the picture that arrives is undistorted stereo, and the single Cardboard warp at the end of our own
 * frame finishes it. The game, our menus, our hands and the windows behind them therefore all end up
 * in one stereo image with one correct lens correction, which is not something a game owning the
 * phone's screen could ever give us.
 *
 * <h2>What has to be true before it can work</h2>
 *
 * <ol>
 *   <li>the OpenXR runtime is installed, or a game that needs it shows a black screen;</li>
 *   <li>the game can find that runtime by itself, which is what
 *       {@link XrGameLibrary.Game#hostable()} decides — an unpatched store build has to be launched by
 *       the runtime's own launcher, and that launcher can only reach the phone's display;</li>
 *   <li>the shell user service is up, because creating a display is a shell privilege.</li>
 * </ol>
 *
 * <p>When one of them is missing the session says which, and leaves the game closed. A blank window
 * with no explanation is the failure this is written to avoid.
 *
 * <h2>Ownership</h2>
 *
 * <p>This class owns the display, the surface and the hand feed, and nothing else. Opening a game
 * hides the workspace without touching its state, so exiting puts every window, the dock, the keyboard
 * and the focus back exactly as they were — the same contract the 3D game world keeps.
 */
public final class XrGameController {

    private static final String TAG = "NextVR-XR";

    /** Surface id of a hosted game. Shares the compositor's browser-texture path by design. */
    public static String surfaceId(String packageName) {
        return "xr:" + packageName;
    }

    /** How the session reaches the shell. Implemented by the activity, so this class stays testable. */
    public interface Shell {
        /** Runs one statement in the shell: {@code window.nextvrXr(<json>)}. */
        void evaluate(String script);
    }

    /** What the session needs from the activity. Keeps Android plumbing out of the rules above. */
    public interface Environment {
        Context context();

        /** The GL surface slots, created and destroyed on the GL thread. */
        AppSurfaceHost surfaces();

        /** The shell user service, or null when Shizuku is not available. */
        IDisplayService display();

        /** A line for the user: a dock badge, a message, or both. */
        void report(String message);

        /** The phone's own screen, so a hosted game gets a canvas the size of a real phone screen. */
        int[] phoneSize();

        int density();
    }

    private static final long SERVICE_WAIT_MS = 20_000;
    private static final long LAUNCH_RETRY_MS = 400;
    private static final int LAUNCH_ATTEMPTS = 3;

    private final Environment env;
    private final Shell shell;
    private final XrRuntime runtime;
    private final XrGameLibrary library;
    private final XrHandBridge hands;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final ExecutorService worker = Executors.newSingleThreadExecutor();

    /** The one hosted game. A second open while one is running is refused, not queued: two OpenXR
     *  sessions on one phone is not something either runtime supports, and silently closing the first
     *  would lose whatever the user was in the middle of. */
    private volatile XrGameLibrary.Game current;
    private int displayId = -1;
    private SurfaceTexture gameTexture;
    private Surface gameSurface;
    private volatile String problem;
    private volatile boolean busy;
    private volatile String gameQuality = XrRenderQuality.BALANCED;
    private volatile XrHandBridge.Mode handMode = XrHandBridge.Mode.CONTROLLERS;

    public XrGameController(Environment env, Shell shell, XrHandBridge hands) {
        this.env = env;
        this.shell = shell;
        this.hands = hands;
        this.runtime = new XrRuntime(env.context());
        this.library = new XrGameLibrary(env.context(), runtime);
    }

    public XrGameLibrary.Game current() {
        return current;
    }

    public XrRuntime runtime() {
        return runtime;
    }

    public XrGameLibrary library() {
        return library;
    }

    public XrHandBridge hands() {
        return hands;
    }

    public boolean hosting() {
        return current != null;
    }

    /** Whether the hand feed is running: on exactly while something is being driven by it. */
    public boolean driving() {
        return current != null && !current.ownHandTracking && hands.sending();
    }

    /** The user's hand mode, applied when a session starts. */
    public void handMode(XrHandBridge.Mode mode) {
        handMode = mode;
    }

    public void shutdown() {
        worker.shutdownNow();
        try {
            close();
        } catch (Throwable ignored) {
            // The activity is going away; nothing can be reported to anybody.
        }
        hands.stop();
    }

    /**
     * The VR activity paused: nothing composites this app's frame, so the game's display output
     * detaches (the same deal its task keeps: alive, stateful, frozen) and the hand feed stops with
     * the camera — there is nothing new to send, and a feed stuck on the last frame would keep the
     * game's controllers squeezed wherever they were.
     */
    public void onActivityPaused() {
        if (!hosting()) return;
        hands.stop();
        minimize();
    }

    /** The activity is back: the very same surface re-attaches and the feed starts before the next frame. */
    public void onActivityResumed() {
        if (!hosting()) return;
        hands.start(handMode, true, true);
        restore();
    }

    /**
     * One command from the shell, as JSON: {@code {cmd, ...}}.
     *
     * <p>Everything that touches an APK or the shell service is posted off the main thread: reading a
     * game manifest means opening its zip, and installing a runtime means waiting on {@code pm}.
     */
    public void command(String commandJson) {
        final JSONObject command;
        try {
            command = new JSONObject(commandJson);
        } catch (Throwable malformed) {
            env.report("Bad command");
            return;
        }
        final String name = command.optString("cmd", "");
        final String packageName = command.optString("package", "");
        final String quality = command.optString("quality", XrRenderQuality.BALANCED);
        switch (name) {
            case "open": offMain(() -> open(packageName, quality)); break;
            case "close": offMain(this::close); break;
            case "minimize": offMain(this::minimize); break;
            case "restore": offMain(this::restore); break;
            case "runtime": offMain(this::installRuntime); break;
            case "refresh": offMain(this::publishLibrary); break;
            case "selftest": offMain(this::selfTest); break;
            case "library": offMain(this::publishLibrary); break;
            // The shell's pointer is over one of OUR windows while a session runs, so a pinch there
            // belongs to the window (menu, settings) and must not become a button in the game's
            // stream. Repeated only on edge: the shell sends it once per change, never per frame.
            case "hands-ui": hands.uiBlocked(command.optBoolean("blocked")); break;
            default: env.report("Unknown XR command: " + name);
        }
    }

    private void offMain(Runnable work) {
        try {
            worker.execute(() -> {
                try {
                    work.run();
                } catch (Throwable error) {
                    problem = error.getClass().getSimpleName() + ": " + error.getMessage();
                    Log.w(TAG, "XR command failed", error);
                    publishState();
                }
            });
        } catch (RejectedExecutionException shuttingDown) {
            // The activity is going away; there is nothing left to report to.
        }
    }

    // ------------------------------------------------------------------ the session

    private void open(String packageName, String requestedQuality) {
        if (busy) {
            env.report("A game is already being started");
            return;
        }
        gameQuality = XrRenderQuality.normalize(requestedQuality);
        if (current != null && current.packageName.equals(packageName)) return;
        if (current != null) close();
        busy = true;
        problem = null;
        try {
            XrGameLibrary.Game game = library.find(packageName);
            if (game == null) {
                problem = "No installed game called " + packageName;
                return;
            }
            // A game that tracks hands with the camera itself needs the camera to itself, and this
            // app's camera is the one that tracks every other hand in the session.
            if (game.ownHandTracking) {
                problem = game.label + " tracks hands with the camera itself; it needs the camera to itself.";
                return;
            }
            if (runtime.runtimeState() != XrRuntime.State.READY) {
                problem = "The PhoneXR OpenXR runtime is not installed yet.";
                return;
            }
            if (game.needsVrApiDriver() && !runtime.vrApiUsable()) {
                problem = game.label + " is a VrApi game and its PhoneXR VrApi driver is not installed.";
                return;
            }
            if (!game.hostable()) {
                problem = game.label + " has to be started by the runtime on the phone's own screen,"
                        + " so it cannot be hosted here.";
                return;
            }
            String component = library.launchComponent(game);
            if (component == null) {
                problem = game.label + " has no activity to start.";
                return;
            }
            IDisplayService service = waitForService();
            if (service == null) {
                problem = "Shizuku is not available, so no display can be created for a game.";
                return;
            }
            int[] size = canvasSize();
            current = game;
            // The feed starts before the game does, so the first frame it renders already has hands
            // in it; a game that polls its input once at startup would otherwise never see a hand.
            hands.start(handMode, true, true);
            startDisplay(service, component, size[0], size[1], XrRenderQuality.density(env.density(), gameQuality));
        } finally {
            busy = false;
            publishState();
        }
    }

    /**
     * The canvas a hosted game draws into: this phone's own screen, long side across.
     *
     * <p>A VR game asks the runtime for a side-by-side swapchain and the runtime sizes it to the
     * window, so the canvas decides how many pixels each eye gets. The launch menu scales that
     * buffer to the selected quality preset and scales display density by the same factor, preserving
     * the game's logical dp layout while trading pixels for GPU headroom.
     */
    public int[] canvasSize() {
        int[] size = env.phoneSize();
        int longSide = Math.max(size[0], size[1]);
        int shortSide = Math.min(size[0], size[1]);
        return XrRenderQuality.canvas(Math.max(longSide, AppWindowShape.MIN_LONG_SIDE),
                shortSide, gameQuality);
    }

    private void startDisplay(IDisplayService service, String component, int width, int height, int density) {
        env.surfaces().acquire(surfaceId(current.packageName), width, height,
                new AppSurfaceHost.Callback() {
                    @Override public void ready(SurfaceTexture texture) {
                        gameTexture = texture;
                        gameSurface = new Surface(texture);
                        int id;
                        try {
                            id = service.createDisplay(gameSurface, width, height, density);
                        } catch (Throwable error) {
                            problem = "The shell service died creating the display: " + error.getMessage();
                            publishState();
                            return;
                        }
                        if (id < 0) {
                            problem = "The platform refused a display for the game.";
                            publishState();
                            return;
                        }
                        displayId = id;
                        launch(service, component);
                    }

                    @Override public void failed(String reason) {
                        problem = "No GL surface for the game: " + reason;
                        publishState();
                    }
                });
    }

    private void launch(IDisplayService service, String component) {
        for (int attempt = 0; attempt < LAUNCH_ATTEMPTS; attempt++) {
            String error;
            try {
                error = service.launch(component, displayId);
            } catch (Throwable broken) {
                problem = "The shell service died starting the game: " + broken.getMessage();
                publishState();
                return;
            }
            if (error == null) {
                problem = null;
                publishState();
                return;
            }
            problem = error;
            // A display needs a moment before an activity may be started on it. That is a retry, not
            // a failure, which is why the Android app windows launch with attempts too.
            sleep(LAUNCH_RETRY_MS);
        }
        publishState();
    }

    /** Gives the display, the surface and the camera back. */
    private void close() {
        XrGameLibrary.Game game = current;
        current = null;
        hands.stop();
        if (displayId >= 0) {
            try {
                IDisplayService service = env.display();
                if (service != null) service.releaseDisplay(displayId);
            } catch (Throwable error) {
                Log.w(TAG, "could not release the game display", error);
            }
            displayId = -1;
        }
        if (gameSurface != null) {
            gameSurface.release();
            gameSurface = null;
        }
        gameTexture = null;
        if (game != null) env.surfaces().release(surfaceId(game.packageName));
        problem = null;
        publishState();
    }

    /**
     * Detaches the output without losing the game: its task keeps running and keeps its state, it just
     * stops producing frames. Restoring re-attaches the very same surface, so it resumes where it was
     * instead of restarting — the rule the Android app windows follow, for the same reason.
     */
    private void minimize() {
        if (current == null || displayId < 0) return;
        try {
            IDisplayService service = env.display();
            if (service != null) service.setDisplaySurface(displayId, null);
        } catch (Throwable error) {
            Log.w(TAG, "could not detach the game display", error);
        }
        publishState();
    }

    private void restore() {
        if (current == null || displayId < 0 || gameSurface == null) return;
        try {
            IDisplayService service = env.display();
            if (service == null) return;
            service.setDisplaySurface(displayId, gameSurface);
        } catch (Throwable error) {
            Log.w(TAG, "could not re-attach the game display", error);
        }
        publishState();
    }

    private IDisplayService waitForService() {
        IDisplayService service = env.display();
        long deadline = System.currentTimeMillis() + SERVICE_WAIT_MS;
        while (service == null && System.currentTimeMillis() < deadline) {
            sleep(100);
            service = env.display();
        }
        return service;
    }

    // ------------------------------------------------------------------ the runtime

    /**
     * Installs the OpenXR runtime, and the VrApi driver when one is bundled.
     *
     * <p>Both ship as asset APKs and go in through the shell user service, the same privilege that
     * creates a display. Nothing this app does can substitute for that: a game's loader resolves the
     * runtime through the package manager, so it has to be a real installed package.
     */
    private void installRuntime() {
        if (!runtime.runtimeBundled()) {
            problem = "No runtime APK is bundled in this build; see docs/PHONEXR-INTEGRATION.md";
            publishState();
            return;
        }
        IDisplayService service = waitForService();
        if (service == null) {
            problem = "Shizuku is needed to install the runtime, and it is not available.";
            publishState();
            return;
        }
        String error = installAsset(service, XrRuntime.RUNTIME_ASSET, "phonexr-runtime.apk");
        if (error != null) {
            problem = "Runtime install failed: " + error;
            publishState();
            return;
        }
        // A failure here is not fatal: only Gear VR and older Quest games need this package.
        if (runtime.vrApiDriverBundled()) {
            installAsset(service, XrRuntime.VRAPI_DRIVER_ASSET, "phonexr-vrapi-driver.apk");
        }
        problem = null;
        env.report("PhoneXR runtime " + runtime.installedVersion(XrRuntime.PACKAGE) + " installed");
        publishState();
    }

    private String installAsset(IDisplayService service, String asset, String name) {
        File apk;
        try {
            apk = runtime.extract(asset, name);
        } catch (Throwable error) {
            return "cannot unpack " + asset + ": " + error.getMessage();
        }
        try {
            return service.installPackage(apk.getAbsolutePath());
        } catch (Throwable broken) {
            return "the shell service died: " + broken.getMessage();
        }
    }

    // ------------------------------------------------------------------ state for the shell

    /** The session as one JSON object: what is installed, what was found, what is running. */
    public String stateJson() {
        try {
            JSONObject root = new JSONObject();
            root.put("runtime", runtime.runtimeState().name().toLowerCase());
            root.put("runtimeVersion", runtime.installedVersion(XrRuntime.PACKAGE));
            root.put("runtimeBundled", runtime.runtimeBundled());
            root.put("vrapi", runtime.vrApiUsable() ? "ready" : "missing");
            root.put("broker", runtime.brokerInstalled());
            root.put("summary", runtime.summary());
            root.put("hosting", current != null);
            root.put("display", displayId);
            root.put("problem", problem == null ? JSONObject.NULL : problem);
            root.put("handFeed", hands.packetsSent());
            root.put("handMode", handMode.name().toLowerCase());
            root.put("gameQuality", gameQuality);
            // The canvas a hosted game draws into, so the shell window can take its exact shape
            // (this phone's screen, long side across). The window is the shell's business; this only
            // says what the game is being given, the way an app session reports its display.
            int[] canvas = canvasSize();
            JSONObject size = new JSONObject();
            size.put("w", canvas[0]);
            size.put("h", canvas[1]);
            root.put("canvas", size);
            root.put("game", gameJson());
            return root.toString();
        } catch (Throwable error) {
            return "{\"problem\":\"" + error.getMessage() + "\"}";
        }
    }

    private JSONObject gameJson() throws Exception {
        if (current == null) return null;
        JSONObject game = new JSONObject();
        game.put("package", current.packageName);
        game.put("label", current.label);
        game.put("kind", current.kind.name().toLowerCase());
        game.put("headset", current.headset.title);
        game.put("describe", current.describe());
        game.put("surface", surfaceId(current.packageName));
        game.put("purchase", current.checksPurchase);
        return game;
    }

    /** The whole game list, for the library. Slow; call it off the main thread. */
    public String libraryJson() {
        try {
            JSONArray array = new JSONArray();
            for (XrGameLibrary.Game game : library.scan()) {
                JSONObject item = new JSONObject();
                item.put("package", game.packageName);
                item.put("label", game.label);
                item.put("kind", game.kind.name().toLowerCase());
                item.put("headset", game.headset.title);
                item.put("describe", game.describe());
                item.put("hostable", game.hostable());
                item.put("purchase", game.checksPurchase);
                array.put(item);
            }
            return "{\"games\":" + array + "}";
        } catch (Throwable error) {
            return "{\"games\":[],\"problem\":\"" + error.getMessage() + "\"}";
        }
    }

    private void publishState() {
        String payload = stateJson();
        main.post(() -> shell.evaluate("window.nextvrXr(" + payload + ")"));
    }

    private void publishLibrary() {
        String payload = libraryJson();
        main.post(() -> shell.evaluate("window.nextvrXrLibrary(" + payload + ")"));
    }

    /** Runs the whole XR chain for real and reports each step, for the settings window. */
    private void selfTest() {
        try {
            JSONObject root = new JSONObject();
            root.put("runtimePackage", XrRuntime.PACKAGE);
            root.put("runtimeVersion", runtime.installedVersion(XrRuntime.PACKAGE));
            root.put("runtimeBundled", runtime.runtimeBundled());
            root.put("vrapiVersion", runtime.installedVersion(XrRuntime.VRAPI_DRIVER));
            root.put("vrapiReady", runtime.vrApiUsable());
            root.put("broker", runtime.brokerInstalled());
            root.put("runtimeLibrary", runtimeLibrary());
            root.put("shell", env.display() != null);
            root.put("gameQuality", gameQuality);
            int[] size = canvasSize();
            root.put("canvas", size[0] + "x" + size[1]);
            root.put("handFeed", hands.packetsSent());
            root.put("handFailure", hands.failure() == null ? JSONObject.NULL : hands.failure());
            List<XrGameLibrary.Game> games = library.scan();
            root.put("games", games.size());
            JSONArray found = new JSONArray();
            for (XrGameLibrary.Game game : games) {
                found.put(game.label + " · " + game.describe());
            }
            root.put("found", found);
            Log.i(TAG, "xr self test: " + root);
            env.report(runtime.summary() + " · " + games.size() + " game(s) found");
        } catch (Throwable error) {
            env.report("XR self test failed: " + error.getMessage());
        }
    }

    /**
     * Where the runtime's own native library is, as the package manager reports it.
     *
     * <p>A loader that cannot find a runtime prints exactly this path in its error. Having it next to
     * the other numbers turns "the game is black" into an answer on the device, with no computer
     * involved.
     */
    private String runtimeLibrary() {
        try {
            android.content.pm.ApplicationInfo info = env.context().getPackageManager()
                    .getApplicationInfo(XrRuntime.PACKAGE, 0);
            return new File(info.nativeLibraryDir, "libopenxr_monado.so").getAbsolutePath();
        } catch (Throwable missing) {
            return JSONObject.NULL.toString();
        }
    }

    private static void sleep(long ms) {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException interrupted) {
            Thread.currentThread().interrupt();
        }
    }
}
