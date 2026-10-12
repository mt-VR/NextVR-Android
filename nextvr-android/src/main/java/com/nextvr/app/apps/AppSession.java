package com.nextvr.app.apps;

/**
 * One app window's state, from "asked for" to "closed".
 *
 * <p>Pure Java (no Android imports): this is the object the dock renders, the input router reads and
 * the tests drive, so it must be constructible and checkable without a device. The state machine is
 * explicit because the failure it prevents — a window that says "running" while its display is gone,
 * or an input event aimed at a display that was already released — is invisible until it breaks
 * something far away.
 */
public final class AppSession {
    /** Which architecture this window uses. They are never presented as the same thing. */
    public enum Mode {
        /** The app really runs on its own display, created by the shell user service. */
        VIRTUAL_DISPLAY("display"),
        /** The phone's own screen is captured and mirrored; the app is not hosted. */
        SCREEN_MIRROR("mirror");

        public final String id;
        Mode(String id) { this.id = id; }
    }

    public enum State {
        REQUESTED("requested"),
        /** The display and its output surface are being created by the user service. */
        CREATING_DISPLAY("creating"),
        /** The display exists; the app's launcher activity is starting on it. */
        LAUNCHING("launching"),
        /** Frames are flowing. */
        RUNNING("running"),
        /** Window minimized: display output detached, app and task still alive. */
        SUSPENDED("suspended"),
        /** Window closed: display released, task removed. */
        STOPPED("stopped"),
        /** Start failed; {@link #error} says why (and it is shown, never swallowed). */
        FAILED("failed");

        public final String id;
        State(String id) { this.id = id; }
    }

    /** How touches reach the app, decided by the platform state, not by a preference. */
    public enum InputBackend {
        /** Injected by the shell user service into the app's own display. */
        SHIZUKU("shizuku"),
        /** An accessibility gesture on the phone's screen (mirror only). */
        ACCESSIBILITY("accessibility"),
        /** No route: the window is visible but not interactive. */
        NONE("none");

        public final String id;
        InputBackend(String id) { this.id = id; }
    }

    public final String packageName;
    public final String title;
    public final Mode mode;
    public final long openedAtMs;

    public volatile State state = State.REQUESTED;
    public volatile InputBackend input = InputBackend.NONE;
    public volatile String error;
    /** Why the window closed: "user", "capacity", "activity", or null while it is open. */
    public volatile String stopReason;
    /** Display id owned by the shell user service, -1 until it exists. */
    public volatile int displayId = -1;
    public volatile int width, height, density;
    public volatile float boxWidth, boxHeight;
    /** Rotation reported by the platform (0/90/180/270); used by the input mapping. */
    public volatile int rotation;
    public volatile long frames;
    public volatile long focusAtMs;

    public AppSession(String packageName, String title, Mode mode) {
        this.packageName = packageName;
        this.title = title == null || title.trim().isEmpty() ? packageName : title.trim();
        this.mode = mode == null ? Mode.VIRTUAL_DISPLAY : mode;
        this.openedAtMs = System.currentTimeMillis();
        this.focusAtMs = openedAtMs;
    }

    public boolean alive() { return state == State.RUNNING || state == State.SUSPENDED; }

    public boolean rendering() { return state == State.RUNNING; }

    public boolean hasDisplay() { return displayId >= 0; }

    public void touchFocus() { focusAtMs = System.currentTimeMillis(); }

    /** Aspect of the picture the user sees right now, rotation included. */
    public float visibleAspect() { return AppInputGeometry.visibleAspect(width, height, rotation); }

    /** Moves to [next], refusing transitions that would leave the session inconsistent. */
    public void moveTo(State next) {
        if (next == state) return;
        if (!canTransition(state, next))
            throw new IllegalStateException(packageName + ": " + state + " -> " + next);
        state = next;
    }

    /** The legal transitions of {@link State}. */
    public static boolean canTransition(State from, State to) {
        if (from == to) return true;
        switch (from) {
            case REQUESTED:
                return to == State.CREATING_DISPLAY || to == State.FAILED || to == State.STOPPED;
            case CREATING_DISPLAY:
                return to == State.LAUNCHING || to == State.FAILED || to == State.STOPPED;
            case LAUNCHING:
                return to == State.RUNNING || to == State.FAILED || to == State.STOPPED;
            case RUNNING:
                return to == State.SUSPENDED || to == State.FAILED || to == State.STOPPED;
            case SUSPENDED:
                return to == State.RUNNING || to == State.FAILED || to == State.STOPPED;
            case FAILED:
                return to == State.CREATING_DISPLAY || to == State.RUNNING || to == State.STOPPED;
            default:
                return false;
        }
    }

    @Override public String toString() {
        return packageName + " [" + mode.id + " " + state.id
                + (displayId >= 0 ? " display=" + displayId : "")
                + (error == null ? "" : " error=" + error) + "]";
    }
}
