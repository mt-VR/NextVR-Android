package com.nextvr.app;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.ActivityInfo;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.RemoteException;
import android.os.SystemClock;
import android.view.InputDevice;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.Surface;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;
import java.util.function.Consumer;
import java.util.regex.Pattern;

import rikka.shizuku.Shizuku;

/**
 * Application-side coordinator for Shizuku and the shell-identity display service.
 *
 * It owns one Shizuku user-service connection and any number of independent virtual-display
 * sessions. Every session's Surface comes from a NextVR GL SurfaceTexture; the app is launched
 * onto that display and rendered directly into that texture (not screen-captured).
 */
final class AndroidAppManager {
    private static final String TAG = "NextVR-AndroidApps";
    private static final int SHIZUKU_PERMISSION_REQUEST = 8462;
    private static final int DISPLAY_DPI = 320;
    private static final Pattern PACKAGE_NAME = Pattern.compile("[A-Za-z0-9_]+(?:\\.[A-Za-z0-9_]+)+");

    enum Access { NOT_RUNNING, NEEDS_PERMISSION, READY, UNSUPPORTED }

    static final class AppInfo {
        final String packageName;
        final String label;
        final boolean portrait;

        AppInfo(String packageName, String label, boolean portrait) {
            this.packageName = packageName;
            this.label = label;
            this.portrait = portrait;
        }
    }

    private static final class Session {
        final String id;
        final String packageName;
        final int displayWidth;
        final int displayHeight;
        final int viewWidth;
        final int viewHeight;
        final Surface surface;
        final Consumer<String> onError;
        volatile int displayId = -1;
        long downTime;
        boolean starting;
        volatile boolean started;
        boolean inputFailureReported;

        Session(String id, String packageName, int displayWidth, int displayHeight,
                int viewWidth, int viewHeight, Surface surface, Consumer<String> onError) {
            this.id = id;
            this.packageName = packageName;
            this.displayWidth = displayWidth;
            this.displayHeight = displayHeight;
            this.viewWidth = viewWidth;
            this.viewHeight = viewHeight;
            this.surface = surface;
            this.onError = onError;
        }
    }

    private final NextVrActivity owner;
    private final Context context;
    private final Handler main = new Handler(Looper.getMainLooper());
    /** Serialize display creation, am start, input events and release in their actual event order. */
    private final ExecutorService remoteCalls = Executors.newSingleThreadExecutor(r -> {
        Thread t = new Thread(r, "NextVR Shizuku display");
        t.setDaemon(true);
        return t;
    });
    private final Object lock = new Object();
    private final Map<String, Session> sessions = new LinkedHashMap<>();
    private volatile IDisplayService service;
    private ServiceConnection connection;
    private boolean binding;
    private volatile boolean destroyed;

    private final Shizuku.OnBinderReceivedListener binderReceived = () -> main.post(this::onBinderReceived);
    private final Shizuku.OnBinderDeadListener binderDead = () -> main.post(this::onBinderDead);
    private final Shizuku.OnRequestPermissionResultListener permissionResult = (requestCode, grantResult) -> {
        if (requestCode != SHIZUKU_PERMISSION_REQUEST) return;
        main.post(() -> {
            publishStatus();
            if (grantResult == PackageManager.PERMISSION_GRANTED) {
                owner.report("Shizuku access granted. Android apps can now open in VR windows.");
                ensureBound();
            } else {
                owner.report("Shizuku access was denied. Grant NextVR permission in the Shizuku app to use Android app windows.");
            }
        });
    };

    AndroidAppManager(NextVrActivity owner) {
        this.owner = owner;
        this.context = owner.getApplicationContext();
    }

    void registerListeners() {
        try {
            Shizuku.addBinderReceivedListenerSticky(binderReceived);
            Shizuku.addBinderDeadListener(binderDead);
            Shizuku.addRequestPermissionResultListener(permissionResult);
        } catch (Throwable error) {
            android.util.Log.w(TAG, "Shizuku listeners could not be registered", error);
        }
        publishStatus();
    }

    void refreshStatus() {
        publishStatus();
        if (access() == Access.READY) ensureBound();
    }

    void requestPermission() {
        main.post(() -> {
            Access access = access();
            if (access == Access.NOT_RUNNING) {
                owner.report("Shizuku is not running. On Android 11+, start it with Wireless debugging; Android 8–10 require ADB from a PC or root, then return to NextVR.");
            } else if (access == Access.UNSUPPORTED) {
                owner.report("This Shizuku version is too old. Update Shizuku to a current release and try again.");
            } else if (access == Access.NEEDS_PERMISSION) {
                try { Shizuku.requestPermission(SHIZUKU_PERMISSION_REQUEST); }
                catch (Throwable error) { owner.report("Could not request Shizuku permission: " + message(error)); }
            } else {
                owner.report("NextVR already has Shizuku permission.");
            }
            publishStatus();
        });
    }

    Access access() {
        try {
            if (!Shizuku.pingBinder()) return Access.NOT_RUNNING;
            if (Shizuku.isPreV11() || Shizuku.getVersion() < 10) return Access.UNSUPPORTED;
            return Shizuku.checkSelfPermission() == PackageManager.PERMISSION_GRANTED
                    ? Access.READY : Access.NEEDS_PERMISSION;
        } catch (Throwable error) {
            return Access.NOT_RUNNING;
        }
    }

    String statusJson() {
        Access current = access();
        JSONObject status = new JSONObject();
        try {
            status.put("state", current.name().toLowerCase(Locale.ROOT));
            status.put("label", statusLabel(current));
            status.put("version", current == Access.NOT_RUNNING ? 0 : safeShizukuVersion());
            int uid = current == Access.NOT_RUNNING ? -1 : safeShizukuUid();
            status.put("backend", uid == 0 ? "root" : uid == 2000 ? "adb" : uid < 0 ? "unknown" : "shizuku");
            status.put("uid", uid);
        } catch (Exception ignored) { }
        return status.toString();
    }

    private int safeShizukuVersion() {
        try { return Shizuku.getVersion(); } catch (Throwable ignored) { return 0; }
    }

    private int safeShizukuUid() {
        try { return Shizuku.getUid(); } catch (Throwable ignored) { return -1; }
    }

    private static String statusLabel(Access access) {
        switch (access) {
            case READY: return "Connected";
            case NEEDS_PERMISSION: return "Permission needed";
            case UNSUPPORTED: return "Shizuku update required";
            default: return "Shizuku not running";
        }
    }

    String appsJson() {
        JSONArray result = new JSONArray();
        for (AppInfo app : installedApps()) {
            JSONObject item = new JSONObject();
            try {
                item.put("packageName", app.packageName);
                item.put("name", app.label);
                item.put("label", app.label);
                item.put("portrait", app.portrait);
            } catch (Exception ignored) { }
            result.put(item);
        }
        return result.toString();
    }

    /** Launcher query is intentionally scoped; NextVR does not request QUERY_ALL_PACKAGES. */
    List<AppInfo> installedApps() {
        try {
            PackageManager pm = context.getPackageManager();
            Intent launcher = new Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_LAUNCHER);
            List<ResolveInfo> matches = pm.queryIntentActivities(launcher, 0);
            Map<String, AppInfo> unique = new LinkedHashMap<>();
            if (matches != null) {
                for (ResolveInfo match : matches) {
                    ActivityInfo activity = match.activityInfo;
                    if (activity == null || activity.packageName == null || activity.applicationInfo == null) continue;
                    String packageName = activity.packageName;
                    if (packageName.equals(context.getPackageName()) || !isValidPackage(packageName)) continue;
                    if (!activity.enabled || !activity.applicationInfo.enabled) continue;
                    String label;
                    try { label = String.valueOf(match.loadLabel(pm)); }
                    catch (Throwable ignored) { label = packageName; }
                    if (label == null || label.trim().isEmpty() || "null".equals(label)) label = packageName;
                    unique.putIfAbsent(packageName, new AppInfo(packageName, label,
                            isPortrait(activity.screenOrientation, activity.applicationInfo.category)));
                }
            }
            List<AppInfo> apps = new ArrayList<>(unique.values());
            apps.sort(Comparator.comparing(a -> a.label.toLowerCase(Locale.ROOT)));
            return apps;
        } catch (Throwable error) {
            android.util.Log.w(TAG, "Installed launcher apps could not be enumerated", error);
            return Collections.emptyList();
        }
    }

    static boolean isValidPackage(String packageName) {
        return packageName != null && packageName.length() <= 255 && PACKAGE_NAME.matcher(packageName).matches();
    }

    static String surfaceId(String packageName) { return "android_" + packageName; }

    static boolean isPortrait(int orientation, int category) {
        switch (orientation) {
            case ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE:
            case ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE:
            case ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE:
                return false;
            case ActivityInfo.SCREEN_ORIENTATION_PORTRAIT:
            case ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT:
            case ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT:
                return true;
            default:
                return category != ApplicationInfo.CATEGORY_GAME;
        }
    }

    void open(String id, String packageName, int displayWidth, int displayHeight,
              int viewWidth, int viewHeight, Surface surface, Consumer<String> onError) {
        if (surface == null || !surface.isValid()) {
            fail(onError, "NextVR could not attach the Android app's render surface.");
            if (surface != null) surface.release();
            return;
        }
        if (!isValidPackage(packageName) || !surfaceId(packageName).equals(id)) {
            fail(onError, "The selected Android app identifier is invalid.");
            surface.release();
            return;
        }
        if (displayWidth < 320 || displayWidth > 4096 || displayHeight < 320 || displayHeight > 4096
                || viewWidth <= 0 || viewHeight <= 0) {
            fail(onError, "The Android app window has invalid display dimensions.");
            surface.release();
            return;
        }
        Access access = access();
        if (access != Access.READY) {
            fail(onError, statusError(access));
            surface.release();
            return;
        }

        Session session = new Session(id, packageName, displayWidth, displayHeight,
                viewWidth, viewHeight, surface, onError == null ? ignored -> { } : onError);
        Session replaced;
        synchronized (lock) {
            if (destroyed) {
                surface.release();
                fail(onError, "NextVR is closing; the Android app surface was not opened.");
                return;
            }
            replaced = sessions.put(id, session);
        }
        if (replaced != null) disposeRemote(replaced, null);
        ensureBound();
        IDisplayService connected = service;
        if (connected != null) queueStart(session);
    }

    /** Close an app display before its SurfaceTexture is released on NextVR's GL thread. */
    void close(String id, Runnable onClosed) {
        Session session;
        synchronized (lock) { session = sessions.remove(id); }
        if (session == null) {
            main.post(() -> { if (onClosed != null) onClosed.run(); unbindIfIdle(); });
            return;
        }
        disposeRemote(session, onClosed);
    }

    void releaseAll(Runnable onClosed) {
        List<Session> copy;
        synchronized (lock) {
            copy = new ArrayList<>(sessions.values());
            sessions.clear();
        }
        if (copy.isEmpty()) {
            main.post(() -> { if (onClosed != null) onClosed.run(); unbindIfIdle(); });
            return;
        }
        try {
            remoteCalls.execute(() -> {
                for (Session session : copy) releaseRemote(session);
                main.post(() -> {
                    if (onClosed != null) onClosed.run();
                    unbindIfIdle();
                });
            });
        } catch (RejectedExecutionException error) {
            for (Session session : copy) safeRelease(session.surface);
            main.post(() -> { if (onClosed != null) onClosed.run(); });
        }
    }

    void injectMotion(String id, int action, float x, float y) {
        Session session = getSession(id);
        if (session == null || !session.started || session.displayId < 0 || !Float.isFinite(x) || !Float.isFinite(y)) return;
        long now = SystemClock.uptimeMillis();
        long downTime;
        synchronized (lock) {
            if (action == MotionEvent.ACTION_DOWN) session.downTime = now;
            if (session.downTime == 0) return;
            if (now <= session.downTime) now = session.downTime + 1;
            downTime = session.downTime;
            if (action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL) session.downTime = 0;
        }
        int width = session.displayWidth, height = session.displayHeight;
        float mappedX = mapCoordinate(x, session.viewWidth, width);
        float mappedY = mapCoordinate(y, session.viewHeight, height);
        MotionEvent.PointerProperties properties = new MotionEvent.PointerProperties();
        properties.id = 0;
        properties.toolType = MotionEvent.TOOL_TYPE_FINGER;
        MotionEvent.PointerCoords coordinates = new MotionEvent.PointerCoords();
        coordinates.x = mappedX;
        coordinates.y = mappedY;
        coordinates.pressure = action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL ? 0f : 1f;
        coordinates.size = 1f;
        MotionEvent event = MotionEvent.obtain(downTime, now, action, 1,
                new MotionEvent.PointerProperties[]{properties}, new MotionEvent.PointerCoords[]{coordinates},
                0, 0, 1f, 1f, 0, 0, InputDevice.SOURCE_TOUCHSCREEN, 0);
        injectEvent(session, event, false);
    }

    static float mapCoordinate(float coordinate, int sourceSize, int targetSize) {
        if (sourceSize <= 0 || targetSize <= 0 || !Float.isFinite(coordinate)) return 0;
        return Math.max(0f, Math.min(targetSize - 1f, coordinate * targetSize / sourceSize));
    }

    void injectKey(String id, String key) {
        Session session = getSession(id);
        if (session == null || !session.started || session.displayId < 0 || key == null || key.length() > 16) return;
        List<KeyEvent> events;
        long now = SystemClock.uptimeMillis();
        if ("BACK".equals(key)) events = keyPress(KeyEvent.KEYCODE_BACK, now);
        else if ("⌫".equals(key)) events = keyPress(KeyEvent.KEYCODE_DEL, now);
        else if ("⏎".equals(key)) events = keyPress(KeyEvent.KEYCODE_ENTER, now);
        else {
            KeyEvent[] mapped = null;
            try { mapped = KeyCharacterMap.load(KeyCharacterMap.VIRTUAL_KEYBOARD).getEvents(key.toCharArray()); }
            catch (Throwable ignored) { }
            if (mapped != null && mapped.length > 0) {
                events = new ArrayList<>();
                Collections.addAll(events, mapped);
            } else {
                events = Collections.singletonList(new KeyEvent(now, key,
                        KeyCharacterMap.VIRTUAL_KEYBOARD, 0));
            }
        }
        for (KeyEvent event : events) injectEvent(session, event, true);
    }

    private static List<KeyEvent> keyPress(int keyCode, long now) {
        List<KeyEvent> events = new ArrayList<>(2);
        events.add(new KeyEvent(now, now, KeyEvent.ACTION_DOWN, keyCode, 0));
        events.add(new KeyEvent(now, now, KeyEvent.ACTION_UP, keyCode, 0));
        return events;
    }

    private void injectEvent(Session session, android.view.InputEvent event, boolean key) {
        try {
            remoteCalls.execute(() -> {
                IDisplayService target = service;
                boolean accepted = false;
                try {
                    if (target != null && target.asBinder().isBinderAlive() && session.displayId >= 0) {
                        accepted = key ? target.injectKey((KeyEvent) event, session.displayId)
                                : target.injectMotion((MotionEvent) event, session.displayId);
                    }
                } catch (RemoteException | RuntimeException error) {
                    android.util.Log.w(TAG, "Input IPC failed for " + session.packageName, error);
                } finally {
                    if (event instanceof MotionEvent) ((MotionEvent) event).recycle();
                    else if (event instanceof KeyEvent) ((KeyEvent) event).recycle();
                }
                if (!accepted && !session.inputFailureReported && isCurrent(session)) {
                    session.inputFailureReported = true;
                    main.post(() -> fail(session.onError,
                            "Android did not accept hand input for " + session.packageName + ". The display may have closed."));
                }
            });
        } catch (RejectedExecutionException error) {
            if (event instanceof MotionEvent) ((MotionEvent) event).recycle();
            else if (event instanceof KeyEvent) ((KeyEvent) event).recycle();
        }
    }

    private void ensureBound() {
        if (destroyed || access() != Access.READY) return;
        synchronized (lock) {
            if (service != null && service.asBinder().isBinderAlive()) return;
            if (binding) return;
            binding = true;
            connection = new ServiceConnection() {
                @Override public void onServiceConnected(ComponentName name, IBinder binder) {
                    IDisplayService connected = binder == null ? null : IDisplayService.Stub.asInterface(binder);
                    if (connected == null || !binder.isBinderAlive()) {
                        onBindingFailed("Shizuku connected, but NextVR's display service returned no live binder.");
                        return;
                    }
                    boolean stale;
                    synchronized (lock) {
                        stale = destroyed || connection != this;
                        if (!stale) {
                            service = connected;
                            binding = false;
                        }
                    }
                    if (stale) {
                        unbindConnection(this, false);
                        return;
                    }
                    publishStatus();
                    List<Session> current;
                    synchronized (lock) { current = new ArrayList<>(sessions.values()); }
                    for (Session session : current) queueStart(session);
                    unbindIfIdle();
                }

                @Override public void onServiceDisconnected(ComponentName name) {
                    boolean current;
                    synchronized (lock) {
                        current = connection == this;
                        if (current) {
                            service = null;
                            binding = false;
                            connection = null;
                            for (Session session : sessions.values()) {
                                session.displayId = -1;
                                session.started = false;
                                session.starting = false;
                            }
                        }
                    }
                    if (!current) { unbindConnection(this, false); return; }
                    unbindConnection(this, true);
                    publishStatus();
                    if (!destroyed) {
                        owner.report("Shizuku's display service disconnected. Reconnecting app windows; reopen them if they stay blank.");
                        main.postDelayed(() -> { if (!destroyed && access() == Access.READY) ensureBound(); }, 1000);
                    }
                }
            };
        }
        try {
            Shizuku.bindUserService(userServiceArgs(), connection);
        } catch (Throwable error) {
            onBindingFailed("Could not bind NextVR's Shizuku display service: " + message(error));
        }
    }

    private void onBindingFailed(String problem) {
        ServiceConnection failed;
        synchronized (lock) {
            failed = connection;
            connection = null;
            binding = false;
            service = null;
        }
        unbindConnection(failed, true);
        publishStatus();
        owner.report(problem);
    }

    private void queueStart(Session session) {
        synchronized (lock) {
            if (destroyed || sessions.get(session.id) != session || session.starting || session.displayId >= 0) return;
            if (service == null || !service.asBinder().isBinderAlive()) return;
            session.starting = true;
        }
        try { remoteCalls.execute(() -> startSession(session)); }
        catch (RejectedExecutionException error) {
            synchronized (lock) { session.starting = false; }
            fail(session.onError, "NextVR's Shizuku worker is no longer available.");
        }
    }

    private void startSession(Session session) {
        IDisplayService target = service;
        if (!isCurrent(session) || target == null || !target.asBinder().isBinderAlive()) {
            finishStarting(session);
            return;
        }
        ComponentName component = launcherComponent(session.packageName);
        if (component == null) {
            finishStarting(session);
            fail(session.onError, "The app is no longer installed or has no launcher activity: " + session.packageName);
            return;
        }
        if (!session.surface.isValid()) {
            finishStarting(session);
            fail(session.onError, "The Android app's SurfaceTexture is no longer valid. Close and reopen its VR window.");
            return;
        }

        int displayId;
        try {
            displayId = target.createDisplay(session.surface, session.displayWidth, session.displayHeight, DISPLAY_DPI);
        } catch (RemoteException | RuntimeException error) {
            finishStarting(session);
            fail(session.onError, "Shizuku could not create an Android app display: " + message(error));
            return;
        }
        if (displayId < 0) {
            finishStarting(session);
            fail(session.onError, "Android refused to create the virtual app display. Check Shizuku (ADB/root) and device display restrictions.");
            return;
        }
        synchronized (lock) {
            if (sessions.get(session.id) != session || service != target) {
                releaseRemote(target, displayId);
                finishStarting(session);
                return;
            }
            session.displayId = displayId;
        }

        try {
            String problem = target.launch(component.flattenToShortString(), displayId);
            if (problem != null && !problem.trim().isEmpty()) {
                releaseRemote(target, displayId);
                synchronized (lock) { if (session.displayId == displayId) session.displayId = -1; }
                finishStarting(session);
                fail(session.onError, "Android could not launch " + session.packageName + " on the VR display: " + problem);
                return;
            }
            synchronized (lock) { session.started = true; }
            finishStarting(session);
            android.util.Log.i(TAG, "Launched " + session.packageName + " on virtual display " + displayId);
        } catch (RemoteException | RuntimeException error) {
            releaseRemote(target, displayId);
            synchronized (lock) { if (session.displayId == displayId) session.displayId = -1; }
            finishStarting(session);
            fail(session.onError, "Shizuku could not launch " + session.packageName + ": " + message(error));
        }
    }

    private ComponentName launcherComponent(String packageName) {
        if (!isValidPackage(packageName)) return null;
        try {
            Intent intent = context.getPackageManager().getLaunchIntentForPackage(packageName);
            ComponentName component = intent == null ? null : intent.getComponent();
            if (component == null || !packageName.equals(component.getPackageName())) return null;
            return component;
        } catch (Throwable error) {
            android.util.Log.w(TAG, "Could not resolve launcher for " + packageName, error);
            return null;
        }
    }

    private void finishStarting(Session session) {
        synchronized (lock) { session.starting = false; }
    }

    private boolean isCurrent(Session session) {
        synchronized (lock) { return !destroyed && sessions.get(session.id) == session; }
    }

    private Session getSession(String id) {
        synchronized (lock) { return sessions.get(id); }
    }

    private void disposeRemote(Session session, Runnable onClosed) {
        try {
            remoteCalls.execute(() -> {
                releaseRemote(session);
                main.post(() -> {
                    if (onClosed != null) onClosed.run();
                    unbindIfIdle();
                });
            });
        } catch (RejectedExecutionException error) {
            safeRelease(session.surface);
            main.post(() -> { if (onClosed != null) onClosed.run(); });
        }
    }

    private void releaseRemote(Session session) {
        IDisplayService target = service;
        int displayId = session.displayId;
        if (displayId >= 0 && target != null && target.asBinder().isBinderAlive()) releaseRemote(target, displayId);
        session.displayId = -1;
        session.started = false;
        session.starting = false;
        safeRelease(session.surface);
    }

    private void releaseRemote(IDisplayService target, int displayId) {
        try { target.releaseDisplay(displayId); }
        catch (RemoteException | RuntimeException error) {
            android.util.Log.w(TAG, "Could not release display " + displayId, error);
        }
    }

    private void unbindIfIdle() {
        ServiceConnection old;
        synchronized (lock) {
            if (!sessions.isEmpty() || connection == null) return;
            old = connection;
            connection = null;
            binding = false;
            service = null;
        }
        unbindConnection(old, true);
    }

    private void unbindConnection(ServiceConnection old, boolean remove) {
        if (old == null) return;
        try {
            if (Shizuku.pingBinder()) Shizuku.unbindUserService(userServiceArgs(), old, remove);
        } catch (Throwable error) {
            android.util.Log.w(TAG, "Shizuku user service unbind failed", error);
        }
    }

    private Shizuku.UserServiceArgs userServiceArgs() {
        return new Shizuku.UserServiceArgs(new ComponentName(context.getPackageName(), DisplayUserService.class.getName()))
                .daemon(false)
                .processNameSuffix("nextvr-display")
                .debuggable(BuildConfig.DEBUG)
                .version(BuildConfig.VERSION_CODE);
    }

    private void onBinderReceived() {
        if (destroyed) return;
        publishStatus();
        if (access() == Access.READY) ensureBound();
    }

    private void onBinderDead() {
        synchronized (lock) {
            service = null;
            binding = false;
            connection = null;
            for (Session session : sessions.values()) {
                session.displayId = -1;
                session.started = false;
                session.starting = false;
            }
        }
        publishStatus();
    }

    private void publishStatus() {
        if (!destroyed) owner.shizukuStatusChanged(statusJson());
    }

    private static String statusError(Access access) {
        switch (access) {
            case NEEDS_PERMISSION:
                return "Grant NextVR permission in the Shizuku app, then reopen this Android app window.";
            case UNSUPPORTED:
                return "Update Shizuku to a current release; this Shizuku version does not support NextVR's user service.";
            default:
                return "Shizuku is not running. On Android 11+, start it with Wireless debugging; Android 8–10 require ADB from a PC or root, then reopen this Android app window.";
        }
    }

    private void fail(Consumer<String> listener, String problem) {
        if (listener != null) main.post(() -> listener.accept(problem));
        else owner.report(problem);
    }

    private static String message(Throwable error) {
        String value = error.getLocalizedMessage();
        return value == null || value.trim().isEmpty() ? error.getClass().getSimpleName() : value;
    }

    private static void safeRelease(Surface surface) {
        try { if (surface != null) surface.release(); }
        catch (Throwable ignored) { }
    }

    void shutdown() {
        if (destroyed) return;
        destroyed = true;
        try {
            Shizuku.removeBinderReceivedListener(binderReceived);
            Shizuku.removeBinderDeadListener(binderDead);
            Shizuku.removeRequestPermissionResultListener(permissionResult);
        } catch (Throwable ignored) { }

        List<Session> copy;
        ServiceConnection oldConnection;
        synchronized (lock) {
            copy = new ArrayList<>(sessions.values());
            sessions.clear();
            oldConnection = connection;
            connection = null;
            service = null;
            binding = false;
        }
        try {
            remoteCalls.execute(() -> {
                for (Session session : copy) releaseRemote(session);
                if (oldConnection != null) {
                    try {
                        if (Shizuku.pingBinder()) Shizuku.unbindUserService(userServiceArgs(), oldConnection, true);
                    } catch (Throwable error) { android.util.Log.w(TAG, "Shutdown unbind failed", error); }
                }
                remoteCalls.shutdown();
            });
        } catch (RejectedExecutionException error) {
            for (Session session : copy) safeRelease(session.surface);
            remoteCalls.shutdown();
        }
    }
}
