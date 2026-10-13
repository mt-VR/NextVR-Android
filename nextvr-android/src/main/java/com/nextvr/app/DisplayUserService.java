package com.nextvr.app;

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

import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * Shizuku user service. With the ADB backend this code runs as Android's shell UID (2000), not
 * NextVR's app UID. That identity is what permits trusted virtual displays, cross-display app
 * launches and input injection. It deliberately does not capture the phone's screen.
 */
public final class DisplayUserService extends IDisplayService.Stub {
    private static final String TAG = "NextVR-DisplayService";
    private static final String SHELL_PACKAGE = "com.android.shell";

    // These are DisplayManager.VIRTUAL_DISPLAY_FLAG_* values. TRUSTED and the display-group/focus
    // flags are hidden platform APIs; the Shizuku user service is shell-identity code, like PhoneXR.
    private static final int FLAG_PUBLIC = 1;
    private static final int FLAG_PRESENTATION = 1 << 1;
    private static final int FLAG_OWN_CONTENT_ONLY = 1 << 3;
    private static final int FLAG_SUPPORTS_TOUCH = 1 << 6;
    private static final int FLAG_DESTROY_CONTENT_ON_REMOVAL = 1 << 8;
    private static final int FLAG_TRUSTED = 1 << 10;
    private static final int FLAG_OWN_DISPLAY_GROUP = 1 << 11;
    private static final int FLAG_ALWAYS_UNLOCKED = 1 << 12;
    private static final int FLAG_TOUCH_FEEDBACK_DISABLED = 1 << 13;
    private static final int FLAG_OWN_FOCUS = 1 << 14;
    private static final long COMMAND_TIMEOUT_SECONDS = 12;
    private static final int MAX_COMMAND_OUTPUT = 16 * 1024;

    private final Context shellContext;
    private final Map<Integer, VirtualDisplay> displays = new HashMap<>();
    private volatile boolean destroyed;
    private volatile Object inputManager;
    private volatile Method injectInputEvent;
    private volatile Method setDisplayId;

    /** Shizuku v13 passes a system Context; return shell's package identity to permission checks. */
    public DisplayUserService(Context context) {
        shellContext = new ContextWrapper(context) {
            @Override public String getPackageName() { return SHELL_PACKAGE; }
            @Override public String getOpPackageName() { return SHELL_PACKAGE; }
        };
    }

    /** Fallback for older Shizuku versions that instantiate user services without Context. */
    public DisplayUserService() {
        this(systemContext());
    }

    @Override public void destroy() {
        releaseAllDisplays();
        destroyed = true;
        Process.killProcess(Process.myPid());
    }

    @Override public synchronized int createDisplay(Surface surface, int width, int height, int densityDpi) {
        if (destroyed || surface == null || !surface.isValid()) return -1;
        if (width < 320 || width > 4096 || height < 320 || height > 4096 || densityDpi < 72 || densityDpi > 1000) {
            Log.w(TAG, "Rejected virtual display dimensions " + width + "x" + height + " @ " + densityDpi + "dpi");
            return -1;
        }
        try {
            // DisplayManager(Context) is hidden from ordinary applications. A Shizuku UserService
            // runs as shell and has no non-SDK-interface restrictions (Shizuku API documentation).
            java.lang.reflect.Constructor<DisplayManager> constructor = DisplayManager.class.getDeclaredConstructor(Context.class);
            constructor.setAccessible(true);
            DisplayManager manager = constructor.newInstance(shellContext);
            int flags = FLAG_PUBLIC | FLAG_PRESENTATION | FLAG_OWN_CONTENT_ONLY | FLAG_SUPPORTS_TOUCH
                    | FLAG_DESTROY_CONTENT_ON_REMOVAL;
            if (Build.VERSION.SDK_INT >= 33) {
                flags |= FLAG_TRUSTED | FLAG_OWN_DISPLAY_GROUP | FLAG_ALWAYS_UNLOCKED | FLAG_TOUCH_FEEDBACK_DISABLED;
            }
            if (Build.VERSION.SDK_INT >= 34) flags |= FLAG_OWN_FOCUS;

            VirtualDisplay display = manager.createVirtualDisplay(
                    "NextVR Android app", width, height, densityDpi, surface, flags);
            if (display == null || display.getDisplay() == null) {
                Log.e(TAG, "DisplayManager returned no VirtualDisplay");
                if (display != null) display.release();
                return -1;
            }
            int id = display.getDisplay().getDisplayId();
            if (id < 0) {
                display.release();
                return -1;
            }
            VirtualDisplay replaced = displays.put(id, display);
            if (replaced != null) replaced.release();
            Log.i(TAG, "Created trusted app display id=" + id + " size=" + width + "x" + height);
            return id;
        } catch (Throwable error) {
            Log.e(TAG, "Virtual display creation failed", error);
            return -1;
        }
    }

    @Override public synchronized void releaseDisplay(int displayId) {
        VirtualDisplay display = displays.remove(displayId);
        if (display != null) {
            try { display.release(); }
            catch (Throwable error) { Log.w(TAG, "Display release failed id=" + displayId, error); }
            Log.i(TAG, "Released app display id=" + displayId);
        }
    }

    @Override public String launch(String component, int displayId) {
        if (destroyed) return "The Shizuku display service has stopped";
        synchronized (this) {
            if (!displays.containsKey(displayId)) return "NextVR virtual display " + displayId + " no longer exists";
        }
        if (component == null || component.length() > 512 || !component.contains("/")) {
            return "The app launcher component is invalid";
        }
        try {
            // This is the critical routing difference from Activity.startActivity() in NextVR:
            // `--display` makes ActivityTaskManager start the app on the VR Surface-backed display.
            java.lang.Process process = new ProcessBuilder(
                    "/system/bin/am", "start", "--display", Integer.toString(displayId), "--activity-new-task",
                    "--activity-multiple-task", "--activity-clear-task",
                    "-a", "android.intent.action.MAIN",
                    "-c", "android.intent.category.LAUNCHER",
                    "-n", component)
                    .redirectErrorStream(true)
                    .start();
            ByteArrayOutputStream captured = new ByteArrayOutputStream();
            Thread reader = new Thread(() -> drainOutput(process.getInputStream(), captured), "NextVR am output");
            reader.setDaemon(true);
            reader.start();
            boolean exited = process.waitFor(COMMAND_TIMEOUT_SECONDS, TimeUnit.SECONDS);
            if (!exited) {
                process.destroyForcibly();
                try { process.getInputStream().close(); reader.join(250); } catch (Exception ignored) { }
                return "Android did not finish launching the app within " + COMMAND_TIMEOUT_SECONDS + " seconds";
            }
            reader.join(1000);
            if (reader.isAlive()) {
                try { process.getInputStream().close(); reader.interrupt(); } catch (Exception ignored) { }
            }
            String text;
            synchronized (captured) { text = new String(captured.toByteArray(), StandardCharsets.UTF_8).trim(); }
            int code = process.exitValue();
            String lower = text.toLowerCase(java.util.Locale.ROOT);
            if (code != 0 || lower.startsWith("error") || lower.contains("\nerror") || lower.contains("exception occurred")) {
                return text.isEmpty() ? "am start failed (exit " + code + ")" : text;
            }
            Log.i(TAG, "Started " + component + " on display " + displayId + ": " + text);
            return null;
        } catch (InterruptedException error) {
            Thread.currentThread().interrupt();
            return "App launch was interrupted";
        } catch (Throwable error) {
            Log.e(TAG, "App launch failed for " + component + " on display " + displayId, error);
            return error.getMessage() == null ? error.getClass().getSimpleName() : error.getMessage();
        }
    }

    private static void drainOutput(InputStream input, ByteArrayOutputStream captured) {
        byte[] buffer = new byte[2048];
        int kept = 0;
        try (InputStream stream = input) {
            int count;
            while ((count = stream.read(buffer)) != -1) {
                int copy = Math.min(count, Math.max(0, MAX_COMMAND_OUTPUT - kept));
                if (copy > 0) {
                    synchronized (captured) { captured.write(buffer, 0, copy); }
                    kept += copy;
                }
                // Keep draining after the cap so a verbose command cannot block on a full pipe.
            }
        } catch (Exception error) {
            Log.w(TAG, "Could not collect am start output", error);
        }
    }

    @Override public boolean injectKey(KeyEvent event, int displayId) {
        return inject(event, displayId);
    }

    @Override public boolean injectMotion(MotionEvent event, int displayId) {
        return inject(event, displayId);
    }

    private boolean inject(InputEvent event, int displayId) {
        if (event == null || destroyed) return false;
        synchronized (this) {
            if (!displays.containsKey(displayId)) return false;
        }
        try {
            Method setDisplay = setDisplayId;
            if (setDisplay == null) {
                setDisplay = InputEvent.class.getMethod("setDisplayId", int.class);
                setDisplayId = setDisplay;
            }
            setDisplay.invoke(event, displayId);

            Object manager = inputManager;
            Method inject = injectInputEvent;
            if (manager == null || inject == null) {
                synchronized (this) {
                    if (inputManager == null) {
                        try {
                            Class<?> global = Class.forName("android.hardware.input.InputManagerGlobal");
                            inputManager = global.getMethod("getInstance").invoke(null);
                        } catch (Throwable unavailable) {
                            Class<?> legacy = Class.forName("android.hardware.input.InputManager");
                            inputManager = legacy.getMethod("getInstance").invoke(null);
                        }
                    }
                    if (injectInputEvent == null) {
                        Method method = inputManager.getClass().getMethod("injectInputEvent", InputEvent.class, int.class);
                        injectInputEvent = method;
                    }
                    manager = inputManager;
                    inject = injectInputEvent;
                }
            }
            // InputManager.INJECT_INPUT_EVENT_MODE_ASYNC = 0. InputEvent is routed to the display
            // set above, not to the shell service's own display or the phone's foreground app.
            Object accepted = inject.invoke(manager, event, 0);
            return !(accepted instanceof Boolean) || (Boolean) accepted;
        } catch (Throwable error) {
            Log.w(TAG, "Input injection failed for display " + displayId, error);
            return false;
        }
    }

    private synchronized void releaseAllDisplays() {
        List<VirtualDisplay> old = new ArrayList<>(displays.values());
        displays.clear();
        for (VirtualDisplay display : old) {
            try { display.release(); }
            catch (Throwable error) { Log.w(TAG, "Display release failed during shutdown", error); }
        }
    }

    private static Context systemContext() {
        try {
            Class<?> threadClass = Class.forName("android.app.ActivityThread");
            Object thread = threadClass.getMethod("currentActivityThread").invoke(null);
            if (thread == null) thread = threadClass.getMethod("systemMain").invoke(null);
            return (Context) threadClass.getMethod("getSystemContext").invoke(thread);
        } catch (Throwable error) {
            throw new IllegalStateException("Could not obtain the Shizuku user-service Context", error);
        }
    }
}
