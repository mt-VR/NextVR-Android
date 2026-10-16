package com.nextvr.app.apps;

import android.accessibilityservice.AccessibilityService;
import android.content.Context;
import android.graphics.Point;
import android.hardware.display.DisplayManager;
import android.os.SystemClock;
import android.view.Display;
import android.view.InputDevice;
import android.view.KeyEvent;
import android.view.MotionEvent;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Carries a hand gesture from a VR window to the app on the other side of it.
 *
 * <p>Coordinates arrive normalized (0..1 of what the user actually sees) and leave as pixels of the
 * space the target uses — the app display in the Shizuku path, the phone's screen in the mirror path.
 * Nothing is guessed: the backend is decided by {@link #backendFor} from the session mode and what is
 * actually reachable, and it reaches the UI before the first touch.
 *
 * <p>Event identity matters as much as coordinates. An injected stream always carries a proper
 * {@code downTime}, a finger tool type and a touchscreen source, and a drag keeps its down time, so an
 * app does not read one swipe as a series of unrelated taps.
 */
public final class AppInputController {
    /** Pointer id reserved for app windows; the shell's hand cursors use 0 and 1. */
    private static final int POINTER_ID = 3;
    /** Two samples closer than this are the same finger position as far as a recogniser cares. */
    private static final float SAMPLE_EPSILON = 2f;

    private final Context context;
    private final ShizukuManager shizuku;
    /** Recorded press per package: a path for the accessibility backend, a down time for Shizuku. */
    private final Map<String, Press> presses = new HashMap<>();

    public AppInputController(Context context, ShizukuManager shizuku) {
        this.context = context.getApplicationContext();
        this.shizuku = shizuku;
    }

    private static final class Press {
        long downTime;
        final List<Float> points = new ArrayList<>();
        float lastX, lastY;
    }

    /** Which route this session's input takes right now. */
    public AppSession.InputBackend backendFor(AppSession.Mode mode) {
        boolean bound = false;
        try { bound = shizuku != null && shizuku.service() != null; } catch (Throwable ignored) { }
        if (bound) return AppSession.InputBackend.SHIZUKU;
        if (mode == AppSession.Mode.SCREEN_MIRROR && NextVrAccessibilityService.connected())
            return AppSession.InputBackend.ACCESSIBILITY;
        return AppSession.InputBackend.NONE;
    }

    /** Refreshes the backend a session reports; called when a session starts and when state changes. */
    public void refreshBackend(AppSession session) {
        if (session != null) session.input = backendFor(session.mode);
    }

    /**
     * One touch action on [session]; [u]/[v] are normalized to what the user sees (the JS side
     * already removed the letterbox), [action] uses the {@link MotionEvent} action codes.
     */
    public synchronized boolean touch(AppSession session, int action, float u, float v) {
        if (session == null) return false;
        if (session.input == AppSession.InputBackend.NONE) refreshBackend(session);
        switch (session.input) {
            case SHIZUKU: return touchViaShizuku(session, action, u, v);
            case ACCESSIBILITY: return touchViaAccessibility(session, action, u, v);
            default: return false;
        }
    }

    /** A key press on the app: back / home / recents / enter / delete. */
    public synchronized boolean key(AppSession session, String name) {
        if (session == null || name == null) return false;
        if (session.input == AppSession.InputBackend.NONE) refreshBackend(session);
        if (session.input == AppSession.InputBackend.ACCESSIBILITY) {
            Integer global = globalAction(name);
            if (global != null) return NextVrAccessibilityService.global(global);
            // Backspace goes through the same caret-aware path as typing: the accessibility API can
            // only set the whole text, so the character to cut is chosen from the selection the app
            // reports instead of always being the last one in the string.
            if ("delete".equals(name)) return NextVrAccessibilityService.type("⌫");
            // Enter has no accessibility equivalent; the UI tells the user instead of faking it.
            return false;
        }
        Integer code = keyCode(name);
        if (code == null) return false;
        IDisplayService service = service();
        if (service == null || session.displayId < 0) return false;
        long now = SystemClock.uptimeMillis();
        boolean sent = false;
        try {
            service.injectKey(new KeyEvent(now, now, KeyEvent.ACTION_DOWN, code, 0), session.displayId);
            service.injectKey(new KeyEvent(now, now, KeyEvent.ACTION_UP, code, 0), session.displayId);
            sent = true;
        } catch (Throwable error) {
            sent = false;
        }
        return sent;
    }

    /** Typed text from the VR keyboard: a character, backspace ({@code ⌫}) or enter ({@code ⏎}). */
    public synchronized boolean text(AppSession session, String value) {
        if (session == null || value == null || value.isEmpty()) return false;
        if ("⌫".equals(value)) return key(session, "delete");
        if ("⏎".equals(value)) return key(session, "enter");
        if (session.input == AppSession.InputBackend.NONE) refreshBackend(session);
        if (session.input == AppSession.InputBackend.ACCESSIBILITY) {
            return NextVrAccessibilityService.type(value);
        }
        IDisplayService service = service();
        if (service == null || session.displayId < 0) return false;
        long now = SystemClock.uptimeMillis();
        KeyEvent[] events = null;
        try {
            events = android.view.KeyCharacterMap.load(android.view.KeyCharacterMap.VIRTUAL_KEYBOARD)
                    .getEvents(value.toCharArray());
        } catch (Throwable ignored) { }
        boolean sent = false;
        try {
            if (events != null && events.length > 0) {
                for (KeyEvent event : events) {
                    service.injectKey(new KeyEvent(now, now, event.getAction(), event.getKeyCode(),
                            event.getMetaState()), session.displayId);
                    sent = true;
                }
            } else {
                char[] chars = value.toCharArray();
                for (char c : chars) {
                    // Characters the virtual keyboard map cannot express become their key code;
                    // on a device without a mapping the app simply ignores them.
                    service.injectKey(new KeyEvent(KeyEvent.ACTION_DOWN, c), session.displayId);
                    service.injectKey(new KeyEvent(KeyEvent.ACTION_UP, c), session.displayId);
                    sent = true;
                }
            }
        } catch (Throwable error) {
            return sent;
        }
        return sent;
    }

    /** Drops the recorded press for [packageName]; used when a window closes mid-gesture. */
    public synchronized void cancel(String packageName) {
        if (packageName != null) presses.remove(packageName);
    }

    // ------------------------------------------------------------------ backends

    private boolean touchViaShizuku(AppSession session, int action, float u, float v) {
        IDisplayService service = service();
        if (service == null) return false;
        // An app window injects into its own display; a phone mirror injects into the phone's screen,
        // which is display 0 — the shell may inject into either.
        boolean mirror = session.mode == AppSession.Mode.SCREEN_MIRROR;
        int displayId = mirror ? Display.DEFAULT_DISPLAY : session.displayId;
        if (displayId < 0) return false;
        int[] space = mirror ? screenSpace()
                : new int[]{Math.max(1, session.width), Math.max(1, session.height)};
        float[] rotated = AppInputGeometry.forRotation(u, v, session.rotation);
        float x = AppInputGeometry.toDisplayX(rotated[0], space[0]);
        float y = AppInputGeometry.toDisplayY(rotated[1], space[1]);
        Press press = presses.get(session.packageName);
        if (press == null) {
            press = new Press();
            press.downTime = SystemClock.uptimeMillis();
            presses.put(session.packageName, press);
        }
        long now = SystemClock.uptimeMillis();
        MotionEvent event = obtain(action, x, y, press.downTime, Math.max(press.downTime + 1, now));
        try {
            service.injectMotion(event, displayId);
            return true;
        } catch (Throwable error) {
            return false;
        } finally {
            event.recycle();
            if (action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL)
                presses.remove(session.packageName);
        }
    }

    /**
     * The accessibility backend records the sampled path and dispatches it when the finger lifts:
     * {@code dispatchGesture} takes a whole gesture, not a stream, so a tap is a one-point path and a
     * drag is the path the hand actually drew.
     */
    private boolean touchViaAccessibility(AppSession session, int action, float u, float v) {
        int[] space = screenSpace();
        float x = AppInputGeometry.toDisplayX(u, space[0]);
        float y = AppInputGeometry.toDisplayY(v, space[1]);
        Press press = presses.get(session.packageName);
        switch (action) {
            case MotionEvent.ACTION_DOWN:
                press = new Press();
                press.downTime = SystemClock.uptimeMillis();
                press.points.add(x);
                press.points.add(y);
                press.lastX = x;
                press.lastY = y;
                presses.put(session.packageName, press);
                return true;
            case MotionEvent.ACTION_MOVE:
                if (press == null) return false;
                if (Math.abs(x - press.lastX) < SAMPLE_EPSILON && Math.abs(y - press.lastY) < SAMPLE_EPSILON)
                    return true;
                press.points.add(x);
                press.points.add(y);
                press.lastX = x;
                press.lastY = y;
                return true;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL: {
                if (press == null) return false;
                presses.remove(session.packageName);
                if (action == MotionEvent.ACTION_UP) {
                    press.points.add(x);
                    press.points.add(y);
                }
                float[] path = new float[press.points.size()];
                for (int i = 0; i < path.length; i++) path[i] = press.points.get(i);
                long duration = SystemClock.uptimeMillis() - press.downTime;
                return NextVrAccessibilityService.gesture(path, duration);
            }
            default:
                return false;
        }
    }

    // ------------------------------------------------------------------ plumbing

    /** A touch with the identity the input pipeline expects (finger, touchscreen, real down time). */
    private static MotionEvent obtain(int action, float x, float y, long downTime, long eventTime) {
        MotionEvent.PointerProperties properties = new MotionEvent.PointerProperties();
        properties.id = POINTER_ID;
        properties.toolType = MotionEvent.TOOL_TYPE_FINGER;
        MotionEvent.PointerCoords coordinates = new MotionEvent.PointerCoords();
        coordinates.x = x;
        coordinates.y = y;
        coordinates.pressure = (action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL)
                ? 0f : 1f;
        coordinates.size = 1f;
        return MotionEvent.obtain(downTime, eventTime, action, 1,
                new MotionEvent.PointerProperties[]{properties},
                new MotionEvent.PointerCoords[]{coordinates},
                0, 0, 1f, 1f, 0, 0, InputDevice.SOURCE_TOUCHSCREEN, 0);
    }

    private IDisplayService service() {
        try { return shizuku == null ? null : shizuku.service(); } catch (Throwable error) { return null; }
    }

    /** Space of the injected events for the phone-mirror mode: the phone's own screen. */
    @SuppressWarnings("deprecation")
    private int[] screenSpace() {
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

    private static Integer keyCode(String name) {
        switch (name) {
            case "back": return KeyEvent.KEYCODE_BACK;
            case "home": return KeyEvent.KEYCODE_HOME;
            case "recents": return KeyEvent.KEYCODE_APP_SWITCH;
            case "enter": return KeyEvent.KEYCODE_ENTER;
            case "delete": return KeyEvent.KEYCODE_DEL;
            default: return null;
        }
    }

    private static Integer globalAction(String name) {
        switch (name) {
            case "back": return AccessibilityService.GLOBAL_ACTION_BACK;
            case "home": return AccessibilityService.GLOBAL_ACTION_HOME;
            case "recents": return AccessibilityService.GLOBAL_ACTION_RECENTS;
            default: return null;
        }
    }
}
