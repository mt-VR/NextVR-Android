package com.nextvr.app.apps;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * The installed apps, their labels, their launcher activities and their icons.
 *
 * <h2>Discovery</h2>
 * {@code queryIntentActivities(ACTION_MAIN + CATEGORY_LAUNCHER)} is the same query the launcher uses,
 * so an app appears here exactly when it appears in the phone's own drawer: apps without a launcher
 * activity (services, widgets, hidden components) are not listed, and every entry already carries the
 * component {@code am start -n} needs. The list is cached for twenty seconds — reinstalling an app
 * from inside VR happens, but not twice a second.
 *
 * <h2>Icons</h2>
 * Real icons, not generated placeholders: {@link ResolveInfo#loadIcon} renders each app's own
 * {@link Drawable} (adaptive icons included) into a 128 px PNG in {@code cacheDir/appicons}, served to
 * the shell WebView under {@code /apps/<file>}. Rendering is done a few at a time on one
 * background thread and the shell is told when a batch lands, so opening the library never blocks on
 * two hundred icon decodes — the tiles fill in as they are ready and keep their app's colour until
 * then.
 */
public final class AndroidAppManager {
    private static final String TAG = "NextVR-Apps";
    private static final int ICON_PX = 128;
    private static final int ICON_BATCH = 6;
    private static final long CACHE_MS = 20_000;
    private static final int MAX_RECENTS = 16;
    private static final String PREFS = "nextvr.android.apps";
    private static final String KEY_RECENTS = "recents";
    private static final String KEY_HIDDEN = "hidden";

    private final Context context;
    private final Handler main = new Handler(Looper.getMainLooper());
    private final ExecutorService icons = Executors.newSingleThreadExecutor(runnable -> {
        Thread thread = new Thread(runnable, "NextVR-AppIcons");
        thread.setDaemon(true);
        thread.setPriority(Thread.MIN_PRIORITY);
        return thread;
    });
    private final Set<String> failedIcons = Collections.synchronizedSet(new HashSet<>());
    private final AtomicBoolean iconsQueued = new AtomicBoolean();

    private List<AppEntry> cache = Collections.emptyList();
    private long cachedAt;
    private Runnable onIconsReady;

    public AndroidAppManager(Context context) {
        this.context = context.getApplicationContext();
    }

    /** Where the icon PNGs live; the shell WebView serves this directory as {@code /icons/app/}. */
    public static File iconDirectory(Context context) {
        File directory = new File(context.getCacheDir(), "appicons");
        if (!directory.exists() && !directory.mkdirs()) Log.w(TAG, "could not create " + directory);
        return directory;
    }

    /** Installed launchable apps, cached for {@value #CACHE_MS} ms. */
    public synchronized List<AppEntry> apps() {
        long now = System.currentTimeMillis();
        if (now - cachedAt < CACHE_MS && !cache.isEmpty()) return cache;
        cache = load();
        cachedAt = now;
        return cache;
    }

    /** Forces the next {@link #apps()} to re-query the package manager. */
    public synchronized void invalidate() { cachedAt = 0; }

    public AppEntry find(String packageName) {
        if (packageName == null) return null;
        for (AppEntry app : apps()) if (packageName.equals(app.packageName)) return app;
        return null;
    }

    /**
     * The launcher component of a package, as {@code am start -n} wants it, or null when the package
     * has no launchable activity (which is also the answer "this app cannot be shown in a window").
     */
    public String launcherComponent(String packageName) {
        if (packageName == null) return null;
        try {
            Intent intent = context.getPackageManager().getLaunchIntentForPackage(packageName);
            if (intent == null || intent.getComponent() == null) return null;
            return intent.getComponent().flattenToShortString();
        } catch (Throwable error) {
            Log.w(TAG, "no launcher for " + packageName, error);
            return null;
        }
    }

    public List<String> recents() {
        String raw = prefs().getString(KEY_RECENTS, "");
        List<String> stored = new ArrayList<>();
        for (String item : raw.split(",")) if (!item.trim().isEmpty()) stored.add(item.trim());
        return AppLibrary.withRecent(stored, null, MAX_RECENTS);
    }

    public List<String> touchRecent(String packageName) {
        List<String> updated = AppLibrary.withRecent(recents(), packageName, MAX_RECENTS);
        prefs().edit().putString(KEY_RECENTS, AppLibrary.joinSet(new java.util.LinkedHashSet<>(updated))).apply();
        return updated;
    }

    /** Packages the user hid from the library (usually system tools they never want in VR). */
    public Set<String> hidden() { return AppLibrary.parseSet(prefs().getString(KEY_HIDDEN, "")); }

    public boolean setHidden(String packageName, boolean hide) {
        Set<String> hidden = hidden();
        if (hide) hidden.add(packageName); else hidden.remove(packageName);
        prefs().edit().putString(KEY_HIDDEN, AppLibrary.joinSet(hidden)).apply();
        return hide;
    }

    /** The cached PNG of an app's own icon, or null while it is still being rendered. */
    public File iconFile(AppEntry app) {
        if (app == null) return null;
        File file = new File(iconDirectory(context), app.iconKey());
        return file.isFile() ? file : null;
    }

    public void setIconBatchDone(Runnable listener) { this.onIconsReady = listener; }

    /**
     * Renders the icons that are missing yet, a batch at a time, off the main thread. Calling it on
     * every library refresh is fine: the queue is coalesced and finished/failed keys are skipped.
     */
    public void scheduleIcons(List<AppEntry> list) {
        if (list == null || list.isEmpty()) return;
        if (!iconsQueued.compareAndSet(false, true)) return;
        final List<AppEntry> snapshot = new ArrayList<>(list);
        try {
            icons.execute(() -> {
                try {
                    PackageManager manager = context.getPackageManager();
                    int rendered = 0;
                    for (final AppEntry app : snapshot) {
                        if (Thread.currentThread().isInterrupted()) return;
                        File target = new File(iconDirectory(context), app.iconKey());
                        if (target.isFile() || failedIcons.contains(app.packageName)) continue;
                        if (render(manager, app, target)) {
                            rendered++;
                            if (rendered % ICON_BATCH == 0) {
                                main.post(this::notifyIcons);
                                Thread.sleep(24);
                            }
                        }
                    }
                    if (rendered % ICON_BATCH != 0) main.post(this::notifyIcons);
                } catch (InterruptedException stop) {
                    Thread.currentThread().interrupt();
                } catch (Throwable error) {
                    Log.w(TAG, "icon batch failed", error);
                } finally {
                    iconsQueued.set(false);
                }
            });
        } catch (RejectedExecutionException stopped) {
            iconsQueued.set(false);
        }
    }

    private void notifyIcons() {
        Runnable listener = onIconsReady;
        if (listener != null) listener.run();
    }

    private boolean render(PackageManager manager, AppEntry app, File target) {
        try {
            Intent intent = new Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_LAUNCHER)
                    .setPackage(app.packageName);
            List<ResolveInfo> resolved = manager.queryIntentActivities(intent, 0);
            if (resolved == null || resolved.isEmpty()) return false;
            Drawable drawable = resolved.get(0).loadIcon(manager);
            if (drawable == null) return false;
            Bitmap bitmap = Bitmap.createBitmap(ICON_PX, ICON_PX, Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(bitmap);
            drawable.setBounds(0, 0, ICON_PX, ICON_PX);
            drawable.draw(canvas);
            try (FileOutputStream out = new FileOutputStream(target)) {
                bitmap.compress(Bitmap.CompressFormat.PNG, 100, out);
            }
            bitmap.recycle();
            return true;
        } catch (Throwable error) {
            // One icon that cannot be rendered must not retry forever; the tile falls back to a
            // letter mark, which the library shows for web apps too.
            failedIcons.add(app.packageName);
            return false;
        }
    }

    private List<AppEntry> load() {
        PackageManager manager = context.getPackageManager();
        Intent intent = new Intent(Intent.ACTION_MAIN).addCategory(Intent.CATEGORY_LAUNCHER);
        List<ResolveInfo> resolved;
        try {
            resolved = manager.queryIntentActivities(intent, 0);
        } catch (Throwable error) {
            Log.w(TAG, "package query failed", error);
            return Collections.emptyList();
        }
        List<AppEntry> result = new ArrayList<>();
        Set<String> seen = new HashSet<>();
        String own = context.getPackageName();
        for (ResolveInfo info : resolved) {
            if (info == null || info.activityInfo == null) continue;
            ApplicationInfo application = info.activityInfo.applicationInfo;
            if (application == null) continue;
            String packageName = application.packageName;
            if (packageName == null || packageName.equals(own)) continue;
            if (!seen.add(packageName)) continue;
            CharSequence label;
            try { label = info.loadLabel(manager); } catch (Throwable error) { label = packageName; }
            boolean system = (application.flags & ApplicationInfo.FLAG_SYSTEM) != 0
                    || (application.flags & ApplicationInfo.FLAG_UPDATED_SYSTEM_APP) != 0;
            String component = new android.content.ComponentName(packageName, info.activityInfo.name)
                    .flattenToShortString();
            // Only used as the icon cache key, so the deprecated int is enough on API 26/27 and the
            // long form is used where it exists.
            long versionCode = 0;
            try {
                android.content.pm.PackageInfo info = manager.getPackageInfo(packageName, 0);
                versionCode = android.os.Build.VERSION.SDK_INT >= 28
                        ? info.getLongVersionCode() : info.versionCode;
            } catch (Throwable ignored) { }
            result.add(new AppEntry(packageName, label == null ? packageName : label.toString(),
                    system, component, versionCode));
        }
        Collections.sort(result, (a, b) -> a.label.compareToIgnoreCase(b.label));
        return result;
    }

    private SharedPreferences prefs() {
        return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }

    public void shutdown() {
        icons.shutdownNow();
        main.removeCallbacksAndMessages(null);
    }

    /** Diagnostics for the dock's self-test row. */
    public static int sdk() { return android.os.Build.VERSION.SDK_INT; }
}
