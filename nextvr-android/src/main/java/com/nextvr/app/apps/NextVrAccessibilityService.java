package com.nextvr.app.apps;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.GestureDescription;
import android.graphics.Path;
import android.os.Bundle;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;

/**
 * The no-Shizuku input path: real taps/swipes through the public accessibility API.
 *
 * <p>{@code AccessibilityService.dispatchGesture} is the only way a normal app may produce a touch
 * the system accepts as a user action, and it has two properties that shape the phone-mirror mode:
 * it injects into the phone's own display (there is no display id to choose), and each call is a
 * complete gesture with its own duration — there is no way to stream a finger. NextVR therefore
 * records the sampled path while the hand drags and dispatches it when the finger lifts, which is
 * exactly what makes a mirror window's taps and swipes work without any privileged access.
 *
 * <p>The user must enable the service in Android's accessibility settings; until then the mirror
 * window is read-only and says so. Nothing here touches other apps' data: only the gesture and the
 * focused text field of the app the user is looking at through the mirror.
 */
public final class NextVrAccessibilityService extends AccessibilityService {
    private static volatile NextVrAccessibilityService instance;

    /** Whether the user has enabled NextVR in accessibility settings. */
    public static boolean connected() { return instance != null; }

    /**
     * Dispatches one complete gesture. [points] is a flat list of x,y pairs in screen pixels and
     * [durationMs] is how long the gesture takes; a single point is a tap.
     */
    public static boolean gesture(float[] points, long durationMs) {
        NextVrAccessibilityService service = instance;
        if (service == null || points == null || points.length < 2) return false;
        try {
            Path path = new Path();
            path.moveTo(points[0], points[1]);
            for (int i = 2; i + 1 < points.length; i += 2) path.lineTo(points[i], points[i + 1]);
            long duration = Math.max(40L, Math.min(GestureDescription.getMaxGestureDuration(), durationMs));
            GestureDescription description = new GestureDescription.Builder()
                    .addStroke(new GestureDescription.StrokeDescription(path, 0, duration))
                    .build();
            return service.dispatchGesture(description, null, null);
        } catch (Throwable error) {
            return false;
        }
    }

    /** Back / home / recents, through the accessibility global actions. */
    public static boolean global(int action) {
        NextVrAccessibilityService service = instance;
        if (service == null) return false;
        try { return service.performGlobalAction(action); } catch (Throwable error) { return false; }
    }

    /**
     * Types into the focused text field of the foreground app.
     *
     * <p>Best effort by construction: it can only set the whole text of the node the user's app
     * exposes, so a keystroke is "cut the selection (or one character before the caret) and paste
     * the new text back". Apps that do not expose their editor node (or that reject
     * {@code ACTION_SET_TEXT}) simply do not receive the text — that is a documented limitation of
     * the mirror mode, not a silent failure: the window's keyboard button reports it.
     */
    public static boolean setText(String text) {
        NextVrAccessibilityService service = instance;
        if (service == null) return false;
        try {
            AccessibilityNodeInfo root = service.getRootInActiveWindow();
            if (root == null) return false;
            AccessibilityNodeInfo focused = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT);
            if (focused == null) return false;
            Bundle arguments = new Bundle();
            arguments.putCharSequence(AccessibilityNodeInfo.ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE, text);
            return focused.performAction(AccessibilityNodeInfo.ACTION_SET_TEXT, arguments);
        } catch (Throwable error) {
            return false;
        }
    }

    /**
     * One keystroke from the VR keyboard, applied at the field's own caret: a character, backspace
     * ({@code ⌫}) or enter ({@code ⏎}).
     *
     * <p>Appending was never right. An earlier version rebuilt the field as {@code text + value},
     * so a caret parked in the middle of a word sent every character to the end of the line and one
     * backspace always removed the last character of the whole string instead of the one before the
     * cursor. Both are now cut from the range the app itself reports.
     *
     * @return false when no editable field is focused, when the app hides its selection, or when it
     *         rejects {@code ACTION_SET_TEXT}.
     */
    public static boolean type(String value) {
        NextVrAccessibilityService service = instance;
        if (service == null || value == null || value.isEmpty()) return false;
        try {
            AccessibilityNodeInfo root = service.getRootInActiveWindow();
            if (root == null) return false;
            AccessibilityNodeInfo focused = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT);
            if (focused == null || !focused.isEditable()) return false;
            CharSequence current = focused.getText();
            if (current == null) return false;
            String text = current.toString();
            int start = focused.getTextSelectionStart(), end = focused.getTextSelectionEnd();
            if (start < 0 || end < 0 || start > text.length() || end > text.length()) {
                start = end = text.length();          // app does not expose a caret: write at the end
            } else if (start > end) {
                int swap = start; start = end; end = swap;
            }
            String insert;
            if ("⌫".equals(value)) {
                insert = "";
                if (start == end) {
                    if (start == 0) return false;
                    // A lone low surrogate is the tail of an emoji or a composed accent: the pair goes.
                    start -= Character.isLowSurrogate(text.charAt(start - 1)) && start >= 2
                        && Character.isHighSurrogate(text.charAt(start - 2)) ? 2 : 1;
                }
            } else if ("⏎".equals(value)) {
                // Enter has no accessibility equivalent (the global actions are back/home/recents
                // and clipboard); the window says so instead of pretending a newline was typed.
                return false;
            } else insert = value;
            Bundle arguments = new Bundle();
            arguments.putCharSequence(AccessibilityNodeInfo.ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE,
                text.substring(0, start) + insert + text.substring(end));
            return focused.performAction(AccessibilityNodeInfo.ACTION_SET_TEXT, arguments);
        } catch (Throwable error) {
            return false;
        }
    }

    /**
     * Whether the foreground app has an editable field focused — the only honest signal an Android
     * app window can give about typing, since there is no DOM to probe.
     */
    public static boolean focusedEditable() {
        NextVrAccessibilityService service = instance;
        if (service == null) return false;
        try {
            AccessibilityNodeInfo root = service.getRootInActiveWindow();
            if (root == null) return false;
            AccessibilityNodeInfo focused = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT);
            return focused != null && focused.isEditable();
        } catch (Throwable error) {
            return false;
        }
    }

    /** Current text of the focused field, so backspace can be a set-text; null when unavailable. */
    public static String focusedText() {
        NextVrAccessibilityService service = instance;
        if (service == null) return null;
        try {
            AccessibilityNodeInfo root = service.getRootInActiveWindow();
            if (root == null) return null;
            AccessibilityNodeInfo focused = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT);
            if (focused == null || focused.getText() == null) return null;
            return focused.getText().toString();
        } catch (Throwable error) {
            return null;
        }
    }

    @Override protected void onServiceConnected() {
        instance = this;
    }

    @Override public void onAccessibilityEvent(AccessibilityEvent event) { }

    @Override public void onInterrupt() { }

    @Override public boolean onUnbind(android.content.Intent intent) {
        instance = null;
        return super.onUnbind(intent);
    }

    @Override public void onDestroy() {
        instance = null;
        super.onDestroy();
    }
}
