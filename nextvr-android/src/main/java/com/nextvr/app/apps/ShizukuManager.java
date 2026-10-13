package com.nextvr.app.apps;

import android.content.ComponentName;
import android.content.Context;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.util.Log;

import org.json.JSONObject;

import rikka.shizuku.Shizuku;

/**
 * Shizuku, from NextVR's side: availability, permission, the shell user service, and the state the
 * dock shows.
 *
 * <h2>Why Shizuku and not root</h2>
 * The three operations an app window needs — create a display other apps may run on, start an app on
 * it, inject input into it — are all gated to the shell or system UID in the platform source
 * ({@code DisplayManagerService.createVirtualDisplayInternal}, {@code ActivityStarter},
 * {@code InputManagerService}). Shizuku runs a helper started through ADB (or wireless debugging)
 * with the shell identity and lends an app bound access to it: no root, no flashing, no system app.
 *
 * <h2>What the user has to do, and what happens when they did not</h2>
 * Shizuku is a separate app that has to be started from a computer once per reboot unless the user
 * enables its "start on boot" option (wireless debugging). So every step is a state, never a
 * boolean: not installed, installed but not running, permission not requested, permission denied
 * forever (the system will not show the dialog again), the user service bound and answering, or the
 * binder died while we were using it (Shizuku restarted). {@link #status()} resolves those cases and
 * the dock renders them, so a missing piece reads as "send the Shizuku permission" or "start
 * Shizuku" instead of a window that silently never opens.
 */
public final class ShizukuManager {
    public interface Listener { void onShizukuStateChanged(); }

    private static final String TAG = "NextVR-Shizuku";
    /** Request code of the Shizuku permission dialog (only used in the result callback). */
    private static final int PERMISSION_REQUEST = 4281;
    /** Packages that mean "Shizuku (or Sui) is installed", in this app's experience of it. */
    private static final String[] MANAGER_PACKAGES = {
            "moe.shizuku.manager", "moe.shizuku.privileged.api", "rikka.shizuku",
    };
    /** Time between two "is the binder still alive" checks while a window is open. */
    private static final long PING_MS = 5000;

    private final Context context;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final Shizuku.UserServiceArgs args;
    private final ServiceConnection connection = new ServiceConnection() {
        @Override public void onServiceConnected(ComponentName name, IBinder binder) {
            service = IDisplayService.Stub.asInterface(binder);
            binding = false;
            bindStartedAt = 0;
            bindError = null;
            serviceReadyAt = android.os.SystemClock.uptimeMillis();
            Log.i(TAG, "shell user service bound");
            notifyChanged();
        }

        @Override public void onServiceDisconnected(ComponentName name) {
            service = null;
            binding = false;
            serviceReadyAt = 0;
            Log.i(TAG, "shell user service disconnected");
            notifyChanged();
        }

        /**
         * The binder exists but the service could not be started: Shizuku refused, the APK's service
         * class could not be loaded, or the user service died while starting. Without these two
         * callbacks this case looks exactly like "still binding" and the window stays on its spinner,
         * so the reason is recorded and shown.
         */
        @Override public void onBindingDied(ComponentName name) {
            service = null;
            binding = false;
            serviceReadyAt = 0;
            bindError = "the shell user service died while binding";
            Log.w(TAG, bindError);
            notifyChanged();
        }

        @Override public void onNullBinding(ComponentName name) {
            service = null;
            binding = false;
            serviceReadyAt = 0;
            bindError = "the shell user service could not be created";
            Log.w(TAG, bindError);
            notifyChanged();
        }
    };
    private final Shizuku.OnBinderReceivedListener binderReceived = this::onBinderReceived;
    private final Shizuku.OnBinderDeadListener binderDead = this::onBinderDead;
    private final Shizuku.OnRequestPermissionResultListener permissionResult = (requestCode, grantResult) -> {
        if (requestCode == PERMISSION_REQUEST) {
            Log.i(TAG, "permission result " + grantResult);
            onBinderReceived();
        }
    };
    private final Runnable ping = new Runnable() {
        @Override public void run() {
            if (service != null) {
                try {
                    // A cheap call: if the user service is gone this throws and the window tells
                    // the user instead of drawing a frozen frame forever.
                    service.capabilities();
                } catch (Throwable error) {
                    service = null;
                    notifyChanged();
                }
            }
            if (listener != null) main.postDelayed(this, PING_MS);
        }
    };

    /**
     * How long a bind may be in flight before it is reported as a broken service instead of "on its
     * way". Forking the shell process and loading this APK into it takes a moment; treating that
     * moment as a failure is what silently cancelled every bind (see {@link #status()}).
     */
    private static final long BIND_STUCK_MS = 25_000;
    /** How often {@link #awaitService} looks at the binding while it waits. */
    private static final long WAIT_STEP_MS = 80;
    /** A self-test creates a real display, so it waits a little longer than a normal call. */
    private static final long SELFTEST_WAIT_MS = 6_000;
    /** {@link #capabilities()} is read by the UI: its answer is cached for this long. */
    private static final long CAPABILITIES_MS = 2000;

    private volatile IDisplayService service;
    private volatile boolean binding;
    /** When the current bind attempt started, or 0. */
    private volatile long bindStartedAt;
    /** Why the last bind attempt failed, verbatim; null when none did. */
    private volatile String bindError;
    /** When the service answered a call for the last time. */
    private volatile long serviceReadyAt;
    private volatile String capabilities;
    private volatile long capabilitiesAt;
    private volatile boolean started;
    private Listener listener;

    public ShizukuManager(Context context) {
        this.context = context.getApplicationContext();
        // The user service class is instantiated by Shizuku in its own process; the tag keeps the
        // service identifiable if the class name is ever obfuscated, and the version code tells
        // Shizuku to relaunch the process when this APK's service code changes.
        this.args = new Shizuku.UserServiceArgs(
                new ComponentName(this.context, NextVrDisplayService.class))
                .daemon(false)
                .processNameSuffix("apps")
                .tag("nextvr-app-windows")
                .version(NextVrDisplayService.SERVICE_VERSION)
                .debuggable((this.context.getApplicationInfo().flags
                        & android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE) != 0);
    }

    /** Registers for Shizuku state changes. Safe to call once, from onCreate. */
    public void start(Listener listener) {
        this.listener = listener;
        if (started) return;
        started = true;
        try {
            Shizuku.addBinderReceivedListenerSticky(binderReceived);
            Shizuku.addBinderDeadListener(binderDead);
            Shizuku.addRequestPermissionResultListener(permissionResult);
            main.postDelayed(ping, PING_MS);
        } catch (Throwable error) {
            // The Shizuku provider is missing (a build without it, or a device where the provider
            // was disabled): the status resolution below still answers, so the UI stays honest.
            Log.w(TAG, "Shizuku listeners unavailable", error);
        }
    }

    /** Removes the listeners; called from onDestroy. */
    public void stop() {
        started = false;
        try {
            Shizuku.removeBinderReceivedListener(binderReceived);
            Shizuku.removeBinderDeadListener(binderDead);
            Shizuku.removeRequestPermissionResultListener(permissionResult);
        } catch (Throwable ignored) { }
        main.removeCallbacks(ping);
        unbind();
    }

    /** The current state, resolved from the platform instead of remembered from the last call. */
    public ShizukuStatus status() {
        // A live Shizuku binder *is* an installation, even when the manager package is not one this
        // app knows by name (Sui on a rooted device, a renamed manager). Without this the state came
        // back UNKNOWN on those devices and the tile fell back to the capture path although the full
        // privileges were right there.
        boolean installed = installed();
        boolean alive = false, preV11 = false;
        int permission = -1;
        boolean rationale = false;
        try {
            alive = Shizuku.pingBinder();
            preV11 = Shizuku.isPreV11();
            if (alive && !preV11) {
                permission = Shizuku.checkSelfPermission();
                rationale = Shizuku.shouldShowRequestPermissionRationale();
            }
        } catch (Throwable error) {
            if (alive) Log.w(TAG, "Shizuku state query failed", error);
        }
        boolean deniedForever = alive && !preV11 && permission != ShizukuStatus.PERMISSION_GRANTED
                && permission != -1 && !rationale;
        ShizukuStatus.State state = ShizukuStatus.resolve(installed || alive, alive, preV11,
                permission, deniedForever);
        // Authorized, but the shell service is neither bound nor on its way: Shizuku was restarted
        // after we bound, or a previous bind attempt failed. Only *that* is SERVICE_DOWN. A bind that
        // is still in flight is not a failure — it used to be reported as one, which made the caller
        // unbind the service it had just asked for, and every app window then fell back to the
        // screen-capture route (the app appearing on the phone's screen).
        if (state == ShizukuStatus.State.READY && service == null && !binding
                && (bindError != null || serviceReadyAt != 0)) {
            state = ShizukuStatus.State.SERVICE_DOWN;
        }
        return new ShizukuStatus(state, describe(state));
    }

    /** Whether a shell user service is bound and answering right now. */
    public boolean ready() { return service != null; }

    /**
     * Whether Shizuku is alive but NextVR is not allowed to use it (never asked, or refused). The
     * difference matters to the user: this state is fixed by one tap in the dialog, while "not
     * installed" is fixed by installing something.
     */
    public boolean needsPermission() {
        ShizukuStatus.State state = status().state;
        return state == ShizukuStatus.State.NEEDS_PERMISSION || state == ShizukuStatus.State.DENIED;
    }

    /** The user service, or null; every method call is wrapped by the caller in try/catch. */
    public IDisplayService service() { return service; }

    private boolean installed() {
        PackageManager manager = context.getPackageManager();
        for (String packageName : MANAGER_PACKAGES) {
            try {
                manager.getPackageInfo(packageName, 0);
                return true;
            } catch (Exception ignored) { }
        }
        return false;
    }

    /** Asks the user to grant NextVR access to Shizuku. Returns false when there is nothing to ask. */
    public boolean requestPermission() {
        try {
            if (!Shizuku.pingBinder()) return false;
            if (Shizuku.isPreV11()) return false;
            if (Shizuku.checkSelfPermission() == ShizukuStatus.PERMISSION_GRANTED) {
                bind();
                return true;
            }
            if (!Shizuku.shouldShowRequestPermissionRationale()) {
                // The dialog will not be shown again: the user has to allow it in Shizuku's app list.
                return false;
            }
            Shizuku.requestPermission(PERMISSION_REQUEST);
            return true;
        } catch (Throwable error) {
            Log.w(TAG, "permission request failed", error);
            return false;
        }
    }

    /**
     * Binds the shell user service if it is not bound yet; harmless to call repeatedly, from any
     * thread. The actual {@code Shizuku.bindUserService} call is posted to the main thread (that is
     * where Shizuku delivers the connection callbacks), but the caller does not have to be there.
     */
    public void bind() {
        if (service != null || binding) return;
        if (Looper.myLooper() == Looper.getMainLooper()) doBind();
        else main.post(this::doBind);
    }

    private void doBind() {
        if (service != null || binding) return;
        try {
            if (!Shizuku.pingBinder() || Shizuku.isPreV11()) return;
            if (Shizuku.checkSelfPermission() != ShizukuStatus.PERMISSION_GRANTED) return;
            // A new attempt invalidates the reason the previous one failed: the user may have just
            // granted the permission or restarted Shizuku.
            bindError = null;
            binding = true;
            bindStartedAt = android.os.SystemClock.uptimeMillis();
            Shizuku.bindUserService(args, connection);
            Log.i(TAG, "binding the shell user service");
        } catch (Throwable error) {
            binding = false;
            bindStartedAt = 0;
            bindError = error.getClass().getSimpleName()
                    + (error.getMessage() == null ? "" : ": " + error.getMessage());
            Log.w(TAG, "bindUserService failed", error);
            notifyChanged();
        }
    }

    /**
     * The user service, binding it and waiting for it if that is what it takes.
     *
     * <p>This is the method that replaced "is it bound?" at the moment of the tap. Spawning the shell
     * process takes a moment, and the answer to "can this app be hosted?" must not depend on whether
     * that moment has already passed: the wait is short, it happens on the caller's own worker thread
     * (never the UI thread) and the window shows "opening" while it lasts.
     *
     * @return the bound service, or null when it did not arrive within [timeoutMs].
     */
    public IDisplayService awaitService(long timeoutMs) {
        IDisplayService current = service;
        long deadline = System.currentTimeMillis() + Math.max(0, timeoutMs);
        while (current == null && System.currentTimeMillis() < deadline) {
            ensureBound();
            try {
                Thread.sleep(WAIT_STEP_MS);
            } catch (InterruptedException stop) {
                Thread.currentThread().interrupt();
                break;
            }
            current = service;
        }
        return current;
    }

    /** Binds when it is sensible to; true when the service is bound right now. */
    public boolean ensureBound() {
        if (service != null) return true;
        if (!binding) bind();
        return service != null;
    }

    /** Drops a service that stopped answering and asks for a new one (a stale Shizuku process). */
    public void rebind() {
        IDisplayService stale = service;
        if (stale != null) {
            try { stale.destroy(); } catch (Throwable ignored) { }
        }
        service = null;
        binding = false;
        bindStartedAt = 0;
        serviceReadyAt = 0;
        unbind();
        bind();
    }

    /** The verbatim reason the last bind attempt failed, or null. */
    public String bindError() { return bindError; }

    /** Whether a bind attempt is in flight right now. */
    public boolean binding() { return binding; }

    /**
     * A short, honest sentence about why the shell service is not there. Used by the window when a
     * hosted app cannot start: "binding" and "refused with this error" are different problems and the
     * user (and the bug report) need to tell them apart.
     */
    public String unavailableReason() {
        if (service != null) return "the shell user service is bound";
        if (binding) {
            return "the shell user service is still starting"
                    + (bindStartedAt == 0 ? "" : " (" + (android.os.SystemClock.uptimeMillis() - bindStartedAt) + " ms)");
        }
        if (bindError != null) return "the shell user service did not start: " + bindError;
        try {
            if (!Shizuku.pingBinder()) return "Shizuku is not running";
            if (Shizuku.isPreV11()) return "the Shizuku version is too old for a user service";
            if (Shizuku.checkSelfPermission() != ShizukuStatus.PERMISSION_GRANTED)
                return "NextVR is not authorized in Shizuku";
        } catch (Throwable error) {
            return "Shizuku could not be queried: " + error.getClass().getSimpleName();
        }
        return "no shell user service";
    }

    /** Milliseconds the current bind attempt has been in flight, or 0. */
    public long bindAgeMs() {
        long started = bindStartedAt;
        return started == 0 ? 0 : android.os.SystemClock.uptimeMillis() - started;
    }

    /** Releases the binding without killing the service process: the next window reuses it. */
    public void unbind() {
        if (service == null && !binding) return;
        service = null;
        binding = false;
        try {
            Shizuku.unbindUserService(args, connection, false);
        } catch (Throwable error) {
            Log.w(TAG, "unbindUserService failed", error);
        }
    }

    /**
     * The shell process' own self-test, as JSON, cached from the last successful call. It is read by
     * the dock's Shizuku row: when a device refuses one of the operations, the reason is a visible
     * line ("injector: none", "lastError: SecurityException …") instead of a silent no-op.
     */
    public String capabilities() {
        IDisplayService current = service;
        if (current == null) return capabilities;
        long now = android.os.SystemClock.uptimeMillis();
        if (capabilities != null && now - capabilitiesAt < CAPABILITIES_MS) return capabilities;
        capabilitiesAt = now;
        try {
            capabilities = current.capabilities();
        } catch (Throwable error) {
            // The binder died between the check and the call: report the failure instead of an old
            // self-test that would say everything is fine.
            Log.w(TAG, "capabilities failed", error);
            capabilities = "{\"error\":\"" + error.getClass().getSimpleName() + "\"}";
            service = null;
            binding = false;
            bindError = "the user service stopped answering (" + error.getClass().getSimpleName() + ")";
            notifyChanged();
        }
        return capabilities;
    }

    /**
     * Runs the privileged chain on the device, through the user service, and returns its step-by-step
     * report as JSON (or null when there is no service to run it in). This is what the menu's
     * "self-test" button shows: the same {@code id}, {@code createVirtualDisplay}, {@code am} and
     * injector checks an ADB session would do, executed from inside NextVR.
     */
    public String selfTest() {
        IDisplayService display = awaitService(SELFTEST_WAIT_MS);
        if (display == null) return null;
        try {
            return display.selfTest();
        } catch (Throwable error) {
            Log.w(TAG, "self test failed", error);
            return "{\"ok\":false,\"error\":\"" + error.getClass().getSimpleName()
                    + (error.getMessage() == null ? "" : ": " + error.getMessage().replace('"', '\''))
                    + "\"}";
        }
    }

    /** State pushed to the shell as JSON: the dock and the app library render exactly this. */
    public JSONObject toJson() {
        JSONObject json = status().toJson();
        try {
            json.put("bound", service != null);
            json.put("binding", binding);
            json.put("bindAgeMs", bindAgeMs());
            json.put("bindError", bindError == null ? JSONObject.NULL : bindError);
            json.put("reason", unavailableReason());
        } catch (Throwable ignored) { }
        return json;
    }

    // ------------------------------------------------------------------ listeners

    private void onBinderReceived() {
        Log.i(TAG, "Shizuku binder available");
        bind();
        notifyChanged();
    }

    private void onBinderDead() {
        Log.i(TAG, "Shizuku binder died");
        service = null;
        binding = false;
        notifyChanged();
    }

    private void notifyChanged() {
        Listener current = listener;
        if (current != null) main.post(current::onShizukuStateChanged);
    }

    private String describe(ShizukuStatus.State state) {
        StringBuilder detail = new StringBuilder();
        try {
            if (Shizuku.pingBinder()) {
                detail.append("uid=").append(Shizuku.getUid())
                        .append(" v").append(Shizuku.getVersion()).append(' ');
            }
        } catch (Throwable ignored) { }
        switch (state) {
            case NOT_INSTALLED: detail.append("install"); break;
            case NOT_RUNNING: detail.append("start"); break;
            case OLD_VERSION: detail.append("update"); break;
            case NEEDS_PERMISSION: detail.append("request"); break;
            case DENIED: detail.append("denied"); break;
            case SERVICE_DOWN: detail.append("rebind").append(bindError == null ? "" : " " + bindError); break;
            case READY:
                detail.append(service == null ? "binding" : "bound");
                if (bindError != null) detail.append(' ').append(bindError);
                break;
            default: detail.append("unknown"); break;
        }
        return detail.toString();
    }
}
