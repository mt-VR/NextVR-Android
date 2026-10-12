package com.nextvr.app.apps;

import android.content.Context;
import android.content.ContextWrapper;
import android.hardware.display.DisplayManager;
import android.hardware.display.VirtualDisplay;
import android.os.Build;
import android.os.Process;
import android.util.Log;
import android.view.InputEvent;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.Surface;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * The half of the app windows that runs as the shell user.
 *
 * <p>Shizuku instantiates this class inside a process of its own, with UID 2000 — the UID of
 * {@code adb shell}. That process may create a public, trusted virtual display, start any app on it
 * and inject input events into it; a normal app process may do none of those, no matter which
 * permissions it requests, and no MediaProjection token changes that. Nothing here needs root.
 *
 * <p>Three details are load-bearing and were taken from the platform sources:
 * <ul>
 *   <li>{@code DisplayManagerService.createVirtualDisplay} rejects a call whose {@code packageName}
 *       does not belong to the calling UID, so the DisplayManager must be built over a Context that
 *       reports the shell package (see {@link #shellContext}).</li>
 *   <li>{@code VIRTUAL_DISPLAY_FLAG_PUBLIC} implies AUTO_MIRROR, which needs CAPTURE_VIDEO_OUTPUT;
 *       adding {@code VIRTUAL_DISPLAY_FLAG_OWN_CONTENT_ONLY} clears that implication, which is what
 *       makes a public display that shows *its own* content and needs no projection token.</li>
 *   <li>Input goes to a display through the event's own display id
 *       ({@code InputEvent#setDisplayId}) plus {@code InputManager#injectInputEvent} — both hidden,
 *       both allowed here because user services are not subject to the non-SDK restrictions.</li>
 * </ul>
 */
public class NextVrDisplayService extends IDisplayService.Stub {
    private static final String TAG = "NextVR-Display";
    private static final String SHELL = "com.android.shell";

    /**
     * Bumped whenever this AIDL or the service behind it changes meaning. Shizuku keeps user
     * services alive across reconnects and does not compare code, so the version is declared at
     * bind time ({@code UserServiceArgs.version}) and mixing a new app with an old service process
     * is what this constant exists to prevent.
     */
    public static final int SERVICE_VERSION = 1;

    private static final int FLAG_PUBLIC = 1;                    // DisplayManager.VIRTUAL_DISPLAY_FLAG_*
    private static final int FLAG_PRESENTATION = 1 << 1;
    private static final int FLAG_OWN_CONTENT_ONLY = 1 << 3;
    private static final int FLAG_SUPPORTS_TOUCH = 1 << 6;
    private static final int FLAG_DESTROY_CONTENT_ON_REMOVAL = 1 << 8;
    private static final int FLAG_TRUSTED = 1 << 10;
    private static final int FLAG_OWN_DISPLAY_GROUP = 1 << 11;
    private static final int FLAG_ALWAYS_UNLOCKED = 1 << 12;
    private static final int FLAG_TOUCH_FEEDBACK_DISABLED = 1 << 13;
    private static final int FLAG_OWN_FOCUS = 1 << 14;

    /** Injection mode 0 = NONE (asynchronous): the touch is queued into the app, never blocking us. */
    private static final int INJECT_ASYNC = 0;

    private final Context shellContext;
    private final Map<Integer, VirtualDisplay> displays = new ConcurrentHashMap<>();
    private volatile String lastError;
    private Method setDisplayId;
    private Method injectInputEvent;
    private Object injectorInstance;
    private String injectorName = "none";

    /** Shizuku ≥ 13 passes a Context; older versions call the no-argument constructor. */
    public NextVrDisplayService() { this(null); }

    public NextVrDisplayService(Context context) {
        this.shellContext = new ContextWrapper(context != null ? context : systemContext()) {
            @Override public String getPackageName() { return SHELL; }
            @Override public String getOpPackageName() { return SHELL; }
        };
        resolveInjector();
    }

    // ------------------------------------------------------------------ displays

    @Override public int createDisplay(Surface surface, int width, int height, int dpi) {
        if (surface == null || width <= 0 || height <= 0) {
            lastError = "invalid display parameters";
            return -1;
        }
        try {
            DisplayManager manager = newDisplayManager();
            int flags = FLAG_PUBLIC | FLAG_PRESENTATION | FLAG_OWN_CONTENT_ONLY | FLAG_SUPPORTS_TOUCH
                    | FLAG_DESTROY_CONTENT_ON_REMOVAL;
            if (Build.VERSION.SDK_INT >= 33)
                flags |= FLAG_TRUSTED | FLAG_OWN_DISPLAY_GROUP | FLAG_ALWAYS_UNLOCKED
                        | FLAG_TOUCH_FEEDBACK_DISABLED;
            if (Build.VERSION.SDK_INT >= 34) flags |= FLAG_OWN_FOCUS;
            VirtualDisplay display = manager.createVirtualDisplay(
                    "NextVR app", width, height, Math.max(160, dpi), surface, flags);
            if (display == null || display.getDisplay() == null) {
                lastError = "createVirtualDisplay returned null";
                return -1;
            }
            displays.put(display.getDisplay().getDisplayId(), display);
            lastError = null;
            return display.getDisplay().getDisplayId();
        } catch (Throwable error) {
            return fail("createDisplay", error);
        }
    }

    @Override public void setDisplaySurface(int displayId, Surface surface) {
        VirtualDisplay display = displays.get(displayId);
        if (display == null) return;
        try { display.setSurface(surface); } catch (Throwable error) { fail("setDisplaySurface", error); }
    }

    @Override public void resizeDisplay(int displayId, int width, int height, int dpi) {
        VirtualDisplay display = displays.get(displayId);
        if (display == null || width <= 0 || height <= 0) return;
        try { display.resize(width, height, Math.max(160, dpi)); } catch (Throwable error) { fail("resizeDisplay", error); }
    }

    @Override public void releaseDisplay(int displayId) {
        VirtualDisplay display = displays.remove(displayId);
        if (display == null) return;
        try { display.release(); } catch (Throwable error) { fail("releaseDisplay", error); }
    }

    // ------------------------------------------------------------------ launching and input

    /**
     * Starts the app on the display. {@code am} is used instead of a Binder call to
     * {@code IActivityTaskManager}: it is the same code path {@code adb shell am start --display}
     * takes, it is stable across versions and it works even though this process is not foreground.
     */
    @Override public String launch(String component, int displayId) {
        if (component == null || displayId < 0) return "missing component or display";
        try {
            ProcessBuilder builder = new ProcessBuilder("am", "start", "--display", String.valueOf(displayId),
                    "--activity-clear-task", "-a", "android.intent.action.MAIN", "-c",
                    "android.intent.category.LAUNCHER", "-n", component);
            builder.redirectErrorStream(true);
            java.lang.Process process = builder.start();
            StringBuilder output = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) output.append(line).append('\n');
            }
            int code = process.waitFor();
            String text = output.toString().trim();
            boolean failed = code != 0 || text.toLowerCase().contains("error")
                    || text.toLowerCase().contains("exception");
            if (!failed) {
                lastError = null;
                return null;
            }
            lastError = text.isEmpty() ? ("am exited with " + code) : text;
            return lastError;
        } catch (Throwable error) {
            lastError = "launch: " + error.getClass().getSimpleName() + ": " + error.getMessage();
            Log.w(TAG, lastError, error);
            return lastError;
        }
    }

    @Override public void injectMotion(MotionEvent event, int displayId) { inject(event, displayId); }

    @Override public void injectKey(KeyEvent event, int displayId) { inject(event, displayId); }

    private void inject(InputEvent event, int displayId) {
        if (event == null) return;
        if (setDisplayId == null || injectInputEvent == null || injectorInstance == null) {
            lastError = "no input injector in this process";
            return;
        }
        try {
            setDisplayId.invoke(event, displayId);
            injectInputEvent.invoke(injectorInstance, event, INJECT_ASYNC);
            lastError = null;
        } catch (Throwable error) {
            fail("inject", error);
        }
    }

    /** Whether the app's process is alive. Shell can read /proc for every UID; apps cannot. */
    @Override public boolean processAlive(String packageName) {
        if (packageName == null || packageName.isEmpty()) return false;
        try {
            java.lang.Process process = new ProcessBuilder("pidof", packageName).redirectErrorStream(true).start();
            boolean found = false;
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line = reader.readLine();
                found = line != null && !line.trim().isEmpty();
            }
            process.waitFor();
            return found;
        } catch (Throwable error) {
            // pidof is not guaranteed on every build; fall back to the display still existing.
            lastError = "pidof: " + error.getMessage();
            for (VirtualDisplay display : displays.values())
                if (display != null && display.getDisplay() != null) return true;
            return false;
        }
    }

    /**
     * Self-test of this process, as JSON. The dock shows it verbatim, so a failure on an unknown
     * OEM build is a readable line instead of a mystery: which injector was found, whether the
     * shell tools exist and the last error the platform returned.
     */
    @Override public String capabilities() {
        JSONObject json = new JSONObject();
        try {
            json.put("uid", Process.myUid());
            json.put("shell", SHELL.equals(shellContext.getPackageName()));
            json.put("sdk", Build.VERSION.SDK_INT);
            json.put("injector", injectorName);
            json.put("displays", displays.size());
            json.put("am", new java.io.File("/system/bin/am").exists());
            json.put("pidof", new java.io.File("/system/bin/pidof").exists()
                    || new java.io.File("/system/bin/toybox").exists());
            json.put("lastError", lastError == null ? JSONObject.NULL : lastError);
        } catch (Throwable error) {
            return "{\"error\":\"" + error.getClass().getSimpleName() + "\"}";
        }
        return json.toString();
    }

    // ------------------------------------------------------------------ Shizuku lifecycle

    /** Shizuku calls this when the service is replaced or unbound: clean up and leave. */
    @Override public void destroy() {
        for (Integer id : displays.keySet()) releaseDisplay(id);
        displays.clear();
        System.exit(0);
    }

    // ------------------------------------------------------------------ internals

    private DisplayManager newDisplayManager() throws Exception {
        // The platform validates that the package name in the call belongs to the calling UID, so the
        // DisplayManager has to be constructed over the shell-reporting Context: getSystemService()
        // would keep the system Context (package "android") and the display call would be refused.
        java.lang.reflect.Constructor<DisplayManager> constructor =
                DisplayManager.class.getDeclaredConstructor(Context.class);
        constructor.setAccessible(true);
        return constructor.newInstance(shellContext);
    }

    private void resolveInjector() {
        try {
            setDisplayId = InputEvent.class.getMethod("setDisplayId", int.class);
            setDisplayId.setAccessible(true);
        } catch (Throwable error) {
            setDisplayId = null;
        }
        try {
            Class<?> global = Class.forName("android.hardware.input.InputManagerGlobal");
            injectorInstance = global.getMethod("getInstance").invoke(null);
            injectorName = "InputManagerGlobal";
        } catch (Throwable ignored) {
            try {
                Class<?> legacy = Class.forName("android.hardware.input.InputManager");
                injectorInstance = legacy.getMethod("getInstance").invoke(null);
                injectorName = "InputManager";
            } catch (Throwable error) {
                injectorInstance = null;
                injectorName = "none";
            }
        }
        if (injectorInstance != null) {
            try {
                injectInputEvent = injectorInstance.getClass()
                        .getMethod("injectInputEvent", InputEvent.class, int.class);
            } catch (Throwable error) {
                injectInputEvent = null;
                injectorName = "none";
            }
        }
    }

    private int fail(String where, Throwable error) {
        lastError = where + ": " + error.getClass().getSimpleName() + ": " + error.getMessage();
        Log.w(TAG, lastError, error);
        return -1;
    }

    private static Context systemContext() {
        try {
            Class<?> activityThread = Class.forName("android.app.ActivityThread");
            Object thread = activityThread.getMethod("currentActivityThread").invoke(null);
            if (thread == null) thread = activityThread.getMethod("systemMain").invoke(null);
            return (Context) activityThread.getMethod("getSystemContext").invoke(thread);
        } catch (Throwable error) {
            throw new IllegalStateException("User service has no Context", error);
        }
    }
}
