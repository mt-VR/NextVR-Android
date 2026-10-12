package com.nextvr.app.apps;

import org.json.JSONObject;

/**
 * Shizuku's state, as one value the UI can render and the logic can branch on. Pure Java: the
 * mapping from "what the platform said" to "what the user is told" is the part that must not be
 * guessed at runtime, and it is covered by a unit test.
 */
public final class ShizukuStatus {
    /** {@code PackageManager.PERMISSION_GRANTED}; repeated so this class has no Android imports. */
    public static final int PERMISSION_GRANTED = 0;

    public enum State {
        /** Nothing has been asked yet (the app just started). */
        UNKNOWN("unknown"),
        /** The Shizuku app (or Sui) is not installed on this device. */
        NOT_INSTALLED("install"),
        /** Installed, but its ADB-started service is not running (not started since boot). */
        NOT_RUNNING("start"),
        /** A Shizuku older than the API this app talks to. */
        OLD_VERSION("update"),
        /** Running: NextVR still has to ask for permission. */
        NEEDS_PERMISSION("ask"),
        /** The permission was refused and Shizuku will not ask again. */
        DENIED("denied"),
        /** Permission granted, but the shell user service is not answering (Shizuku restarted). */
        SERVICE_DOWN("rebind"),
        /** Bound and answering: app windows can be created. */
        READY("ready");

        public final String id;
        State(String id) { this.id = id; }
    }

    public final State state;
    /** Short machine-friendly detail for the dock ("uid=2000 v13 bound"), never null. */
    public final String detail;

    public ShizukuStatus(State state, String detail) {
        this.state = state == null ? State.UNKNOWN : state;
        this.detail = detail == null ? "" : detail;
    }

    public boolean ready() { return state == State.READY; }

    /** Whether the dock should offer a "send permission" button. */
    public boolean permissionRequestable() {
        return state == State.NEEDS_PERMISSION;
    }

    /** Whether the dock should send the user to Shizuku's own settings to flip the switch. */
    public boolean needsShizukuApp() {
        return state == State.NOT_INSTALLED || state == State.NOT_RUNNING
                || state == State.OLD_VERSION || state == State.DENIED || state == State.SERVICE_DOWN;
    }

    /**
     * Resolves the state from what the platform answered. Kept separate from the Shizuku calls so
     * every combination (including "Shizuku installed but its binder is dead") is a test case.
     */
    public static State resolve(boolean installed, boolean binderAlive, boolean preV11,
                                int permission, boolean deniedForever) {
        if (!binderAlive || !installed) {
            if (installed) return State.NOT_RUNNING;
            return binderAlive ? State.UNKNOWN : State.NOT_INSTALLED;
        }
        if (preV11) return State.OLD_VERSION;
        if (permission == PERMISSION_GRANTED) return State.READY;
        if (permission == -1) return State.NEEDS_PERMISSION;      // never asked
        if (deniedForever) return State.DENIED;
        return State.NEEDS_PERMISSION;
    }

    public JSONObject toJson() {
        JSONObject json = new JSONObject();
        try {
            json.put("state", state.id);
            json.put("detail", detail);
            json.put("ready", ready());
            json.put("ask", permissionRequestable());
            json.put("needsApp", needsShizukuApp());
        } catch (Throwable ignored) { }
        return json;
    }

    @Override public String toString() { return state.id + (detail.isEmpty() ? "" : " (" + detail + ")"); }
}
