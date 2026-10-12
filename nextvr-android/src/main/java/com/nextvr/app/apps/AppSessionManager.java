package com.nextvr.app.apps;

import java.util.ArrayList;
import java.util.List;

/**
 * Keeps the set of running app sessions inside the resources the device really has.
 *
 * <p>The arc multitasking layer supports five windows; hosting five *Android app displays* would mean
 * five SurfaceFlinger displays, five app tasks and five surfaces updated every frame. The cap here is
 * what NextVR validated: {@value #DEFAULT_CAPACITY} app windows at once. Opening a fourth app evicts
 * the least recently focused session — the same LRU rule the arc uses for HTML windows — and the UI
 * is told why, instead of the failure surfacing somewhere deep inside the framework.
 *
 * <p>The host callbacks are the only Android-facing part, so the policy (cap, LRU, restart,
 * suspend/resume bookkeeping) is unit-tested with a fake host.
 */
public final class AppSessionManager {
    /** Hosted app displays at once. */
    public static final int DEFAULT_CAPACITY = 3;

    /** Everything that needs to touch a display, implemented by {@link AppDisplayController}. */
    public interface Host {
        /** Create the display, the surface and start the app on it (asynchronous). */
        void start(AppSession session);
        /** The window changed shape; the display should follow. */
        void resize(AppSession session);
        /** Detach (false) or re-attach (true) the output surface. */
        void setVisible(AppSession session, boolean visible);
        /** Release display, surface and task. */
        void stop(AppSession session);
    }

    public interface Listener { void onSessionsChanged(); }

    private final Host host;
    private final int capacity;
    private final List<AppSession> sessions = new ArrayList<>();
    private Listener listener;

    public AppSessionManager(Host host) { this(host, DEFAULT_CAPACITY); }

    public AppSessionManager(Host host, int capacity) {
        this.host = host;
        this.capacity = Math.max(1, capacity);
    }

    public void setListener(Listener listener) { this.listener = listener; }

    /** A copy, so callers cannot mutate the list while it is being drained. */
    public synchronized List<AppSession> sessions() { return new ArrayList<>(sessions); }

    public synchronized AppSession find(String packageName) {
        if (packageName == null) return null;
        for (AppSession session : sessions) if (session.packageName.equals(packageName)) return session;
        return null;
    }

    public synchronized int runningCount() {
        int count = 0;
        for (AppSession session : sessions) if (session.alive()) count++;
        return count;
    }

    /**
     * Opens (or re-focuses, restores, restarts) the session for [packageName].
     *
     * <p>A session that already exists is *never* duplicated: the dock, the library grid and a second
     * pinch on the same tile all end up here.
     */
    public synchronized AppSession open(String packageName, String title, AppSession.Mode mode,
                                        float boxWidth, float boxHeight, int deviceDensity) {
        AppDisplaySpec spec = AppDisplaySpec.forBox(boxWidth, boxHeight, deviceDensity);
        AppSession existing = find(packageName);
        if (existing != null) {
            existing.touchFocus();
            existing.boxWidth = boxWidth;
            existing.boxHeight = boxHeight;
            switch (existing.state) {
                case SUSPENDED:
                    existing.moveTo(AppSession.State.RUNNING);
                    host.setVisible(existing, true);
                    break;
                case STOPPED:
                case FAILED:
                    existing.error = null;
                    existing.stopReason = null;
                    existing.moveTo(AppSession.State.CREATING_DISPLAY);
                    host.start(existing);
                    break;
                default:
                    break;   // requested/launching/running: this call is just a focus.
            }
            notifyChanged();
            return existing;
        }
        evictForCapacity();
        AppSession session = new AppSession(packageName, title, mode);
        session.boxWidth = boxWidth;
        session.boxHeight = boxHeight;
        session.width = spec.width;
        session.height = spec.height;
        session.density = spec.density;
        session.moveTo(AppSession.State.CREATING_DISPLAY);
        sessions.add(session);
        notifyChanged();
        host.start(session);
        return session;
    }

    /** Records the outcome of {@link Host#start}. */
    public synchronized void settle(String packageName, boolean ok, String error) {
        AppSession session = find(packageName);
        if (session == null || session.state == AppSession.State.STOPPED) return;
        if (ok) {
            if (session.state == AppSession.State.CREATING_DISPLAY) session.moveTo(AppSession.State.LAUNCHING);
            if (session.state == AppSession.State.LAUNCHING || session.state == AppSession.State.FAILED)
                session.moveTo(AppSession.State.RUNNING);
            session.error = null;
        } else {
            session.error = error == null ? "failed" : error;
            if (session.state != AppSession.State.FAILED) session.moveTo(AppSession.State.FAILED);
        }
        notifyChanged();
    }

    /** Intermediate state, for the UI's "starting…" label. */
    public synchronized void markLaunching(String packageName) {
        AppSession session = find(packageName);
        if (session != null && session.state == AppSession.State.CREATING_DISPLAY) {
            session.moveTo(AppSession.State.LAUNCHING);
            notifyChanged();
        }
    }

    /** The display is up; input can be routed before the app has drawn its first frame. */
    public synchronized void markDisplayReady(String packageName, int displayId, int width, int height,
                                              int density) {
        AppSession session = find(packageName);
        if (session == null) return;
        session.displayId = displayId;
        if (width > 0) session.width = width;
        if (height > 0) session.height = height;
        if (density > 0) session.density = density;
        if (session.state == AppSession.State.CREATING_DISPLAY) session.moveTo(AppSession.State.LAUNCHING);
        notifyChanged();
    }

    /** The display changed shape or rotation without the window changing size. */
    public synchronized void markDisplayChanged(String packageName, int width, int height, int rotation) {
        AppSession session = find(packageName);
        if (session == null) return;
        if (width > 0) session.width = width;
        if (height > 0) session.height = height;
        session.rotation = rotation;
        notifyChanged();
    }

    /**
     * The app's process is gone (crash, force stop, task removed): report it and keep the window so
     * the user can restart the app from the same place, instead of the window freezing silently.
     */
    public synchronized void markDied(String packageName) {
        AppSession session = find(packageName);
        if (session == null || session.state == AppSession.State.STOPPED) return;
        if (session.error == null) session.error = "app_not_running";
        if (session.state == AppSession.State.RUNNING || session.state == AppSession.State.SUSPENDED)
            session.moveTo(AppSession.State.FAILED);
        notifyChanged();
    }

    /** Window minimized: detach the display output, keep the app and its task. */
    public synchronized boolean minimize(String packageName) {
        AppSession session = find(packageName);
        if (session == null || session.state != AppSession.State.RUNNING) return false;
        session.moveTo(AppSession.State.SUSPENDED);
        host.setVisible(session, false);
        notifyChanged();
        return true;
    }

    /** Window restored from the dock (or from the arc). */
    public synchronized boolean restore(String packageName) {
        AppSession session = find(packageName);
        if (session == null) return false;
        session.touchFocus();
        if (session.state == AppSession.State.SUSPENDED) {
            session.moveTo(AppSession.State.RUNNING);
            host.setVisible(session, true);
            notifyChanged();
            return true;
        }
        if (session.state == AppSession.State.FAILED || session.state == AppSession.State.STOPPED) {
            session.error = null;
            session.stopReason = null;
            session.moveTo(AppSession.State.CREATING_DISPLAY);
            notifyChanged();
            host.start(session);
            return true;
        }
        notifyChanged();
        return session.alive();
    }

    /** Window closed (user action or arc eviction): display, surface and task go away. */
    public synchronized boolean close(String packageName, String reason) {
        AppSession session = find(packageName);
        if (session == null) return false;
        session.stopReason = reason;
        if (session.state != AppSession.State.STOPPED) {
            session.moveTo(AppSession.State.STOPPED);
            host.stop(session);
            session.displayId = -1;
        }
        notifyChanged();
        return true;
    }

    /** Drops stopped sessions so the list does not grow with every closed window. */
    public synchronized void forgetStopped() {
        for (int i = sessions.size() - 1; i >= 0; i--)
            if (sessions.get(i).state == AppSession.State.STOPPED) sessions.remove(i);
    }

    /** The window body was resized by the hand: re-shape the display when it is worth it. */
    public synchronized void windowResized(String packageName, float boxWidth, float boxHeight, int deviceDensity) {
        AppSession session = find(packageName);
        if (session == null) return;
        session.boxWidth = boxWidth;
        session.boxHeight = boxHeight;
        if (!session.hasDisplay()) return;
        AppDisplaySpec wanted = AppDisplaySpec.forBox(boxWidth, boxHeight, deviceDensity);
        AppDisplaySpec current = AppDisplaySpec.forBox(session.width, session.height, session.density);
        if (!current.needsResize(wanted)) return;
        session.width = wanted.width;
        session.height = wanted.height;
        session.density = wanted.density;
        host.resize(session);
    }

    /** All sessions closed: used when the VR activity is destroyed. */
    public synchronized void closeAll(String reason) {
        for (AppSession session : new ArrayList<>(sessions)) close(session.packageName, reason);
    }

    private void evictForCapacity() {
        if (sessions.size() < capacity) return;
        AppSession victim = null;
        for (AppSession session : sessions) {
            if (session.state == AppSession.State.FAILED || session.state == AppSession.State.STOPPED) {
                victim = session;
                break;
            }
            if (victim == null || session.focusAtMs < victim.focusAtMs) victim = session;
        }
        if (victim != null) close(victim.packageName, "capacity");
    }

    private void notifyChanged() { if (listener != null) listener.onSessionsChanged(); }
}
