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
            Log.i(TAG, "shell user service bound");
            notifyChanged();
        }

        @Override public void onServiceDisconnected(ComponentName name) {
            service = null;
            binding = false;
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

    private volatile IDisplayService service;
    private volatile boolean binding;
    private volatile String capabilities;
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
        ShizukuStatus.State state = ShizukuStatus.resolve(installed, alive, preV11, permission, deniedForever);
        // Authorized but the shell service is gone: Shizuku was restarted (or stopped) after we bound.
        if (state == ShizukuStatus.State.READY && binding && service == null)
            state = ShizukuStatus.State.SERVICE_DOWN;
        return new ShizukuStatus(state, describe(state));
    }

    /** Whether a shell user service is bound and answering right now. */
    public boolean ready() { return service != null; }

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

    /** Binds the shell user service if it is not bound yet; harmless to call repeatedly. */
    public void bind() {
        if (service != null || binding) return;
        try {
            if (!Shizuku.pingBinder() || Shizuku.isPreV11()) return;
            if (Shizuku.checkSelfPermission() != ShizukuStatus.PERMISSION_GRANTED) return;
            binding = true;
            Shizuku.bindUserService(args, connection);
        } catch (Throwable error) {
            binding = false;
            Log.w(TAG, "bindUserService failed", error);
        }
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
        try {
            capabilities = current.capabilities();
        } catch (Throwable error) {
            Log.w(TAG, "capabilities failed", error);
        }
        return capabilities;
    }

    /** State pushed to the shell as JSON: the dock and the app library render exactly this. */
    public JSONObject toJson() {
        JSONObject json = status().toJson();
        try {
            json.put("bound", service != null);
            json.put("binding", binding);
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
            case SERVICE_DOWN: detail.append("rebind"); break;
            case READY: detail.append(service == null ? "binding" : "bound"); break;
            default: detail.append("unknown"); break;
        }
        return detail.toString();
    }
}
