package com.nextvr.app.xr;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * The PhoneXR runtime: the two installed packages an OpenXR or VrApi game needs before it can draw
 * anything, and the honest answer to "do we have them yet?".
 *
 * <h2>What PhoneXR's runtime actually is</h2>
 *
 * <p>It is <b>not</b> a library we link. It is an OpenXR runtime installed as its own package,
 * {@value #PACKAGE} — Monado with PhoneXR's hand-controller driver — plus, for the games that predate
 * OpenXR, a VrApi driver installed as {@value #VRAPI_DRIVER}. A game's Khronos loader asks the
 * package manager which runtime to load and gets the first one's native library folder. So the runtime
 * has to be a real installed package; there is no in-process mode that would let a launcher supply it.
 *
 * <h2>Why installing it is a shell privilege</h2>
 *
 * <p>Android refuses to install a package from an ordinary app, and neither of these may be a
 * library inside our APK. Shizuku already runs {@code NextVrDisplayService} as uid 2000, which is
 * {@code adb shell}, and {@code pm install} is exactly what that identity is for. No root, and the
 * user has already granted it for the app windows.
 *
 * <h2>Provenance</h2>
 *
 * <p>The runtime is a third-party build and is <b>not</b> vendored in this repository. It is fetched
 * explicitly and verified by checksum ({@code tools/xr/fetch-runtime.sh}); see
 * {@code docs/PHONEXR-INTEGRATION.md} for where it comes from and what its licence status is. When the
 * asset is absent every method here degrades to "not bundled" rather than failing, and the UI says
 * so and offers the ordinary installer.
 */
public final class XrRuntime {
    /** The OpenXR runtime. Also the package that hosts the launcher for unpatched store games. */
    public static final String PACKAGE = "org.freedesktop.monado.openxr_runtime.out_of_process";
    /** In-process runtime variant; a game that names this one must be pointed at the out-of-process. */
    public static final String IN_PROCESS_PACKAGE = "org.freedesktop.monado.openxr_runtime.in_process";
    /**
     * The VrApi driver. Gear VR and older Quest games ship a {@code libvrapi.so} that is only a
     * loader: it opens {@value #VRAPI_DRIVER} and asks it for the real functions. PhoneXR's copy
     * carries its own adapter that speaks OpenXR to {@value #PACKAGE}, which is what lets those games
     * run on a phone with no Oculus software on it.
     */
    public static final String VRAPI_DRIVER = "com.oculus.systemdriver";
    /** The activity in the runtime that starts a game it cannot see on its own. */
    public static final String GAME_LAUNCHER = "org.freedesktop.monado.phonexr.GameLauncher";
    /** The activity in the VrApi driver that does the same for a VrApi game. */
    public static final String VRAPI_GAME_LAUNCHER = "dev.phonexr.vrapidriver.GameLauncher";
    /** The runtime broker itself, which an app needs in {@code <queries>} to resolve a runtime. */
    public static final String RUNTIME_BROKER = "org.khronos.openxr.runtime_broker";

    /** Asset path of the runtime build, when it has been fetched into the APK. */
    public static final String RUNTIME_ASSET = "xr/runtime/phonexr-runtime.apk";
    /** Asset path of the VrApi driver build; not part of the runtime's repository. */
    public static final String VRAPI_DRIVER_ASSET = "xr/runtime/phonexr-vrapi-driver.apk";

    /**
     * {@code versionCode} of the runtime build this app knows how to talk to. Compared against what is
     * installed so a newer PhoneXR runtime is never silently downgraded, and an older one is offered
     * for replacement — its protocol packets can gain fields this build would not send.
     */
    public static final long BUNDLED_VERSION = 7L;

    public enum State {
        /** Not installed. */
        MISSING,
        /** Installed, but older than the build we were written against. */
        OUTDATED,
        /** Installed and usable. */
        READY,
    }

    private final Context context;

    public XrRuntime(Context context) {
        this.context = context.getApplicationContext();
    }

    /** Whether an APK for [asset] was packed into this build. */
    public boolean bundled(String asset) {
        try (InputStream in = context.getAssets().open(asset)) {
            return in != null;
        } catch (IOException missing) {
            return false;
        }
    }

    public boolean runtimeBundled() {
        return bundled(RUNTIME_ASSET);
    }

    public boolean vrApiDriverBundled() {
        return bundled(VRAPI_DRIVER_ASSET);
    }

    /** {@code versionCode} of [packageName], or -1 when it is not installed. */
    public long installedVersion(String packageName) {
        try {
            android.content.pm.PackageInfo info =
                    context.getPackageManager().getPackageInfo(packageName, 0);
            // getLongVersionCode only exists from API 28 and this app supports 26, where the same
            // value has to come from the int field. A runtime rebuilt locally can exceed 2^30.
            return android.os.Build.VERSION.SDK_INT >= 28 ? info.getLongVersionCode() : info.versionCode;
        } catch (Throwable missing) {
            return -1L;
        }
    }

    /** Installed <em>and</em> ours: another package with that name would not carry the launcher. */
    public boolean vrApiDriverReady() {
        if (installedVersion(VRAPI_DRIVER) <= 0) return false;
        try {
            PackageManager packages = context.getPackageManager();
            packages.getActivityInfo(
                    new android.content.ComponentName(VRAPI_DRIVER, VRAPI_GAME_LAUNCHER), 0);
            return true;
        } catch (Throwable missing) {
            return false;
        }
    }

    /**
     * Whether the OpenXR broker app is installed. Its absence is the classic black screen: the loader
     * says "could access neither the installable nor system runtime broker", and no game can start.
     * PhoneXR's runtime also registers <em>as</em> the system broker, so this is a second, softer
     * check than {@link #runtimeState()}.
     */
    public boolean brokerInstalled() {
        try {
            context.getPackageManager().getApplicationInfo(RUNTIME_BROKER, 0);
            return true;
        } catch (Throwable missing) {
            return false;
        }
    }

    public State runtimeState() {
        long version = installedVersion(PACKAGE);
        if (version <= 0) return State.MISSING;
        return version < BUNDLED_VERSION && runtimeBundled() ? State.OUTDATED : State.READY;
    }

    public State vrApiDriverState() {
        long version = installedVersion(VRAPI_DRIVER);
        if (version <= 0) return State.MISSING;
        return version < 1L && vrApiDriverBundled() ? State.OUTDATED : State.READY;
    }

    /**
     * Whether a VrApi game can run at all. Gear VR and Quest games resolve their real VrApi through
     * this package, so without it {@code vrapi_Initialize} finds nothing and the game never starts —
     * no patch of the game itself can change that.
     */
    public boolean vrApiUsable() {
        return vrApiDriverReady();
    }

    /** Whether the game tracks hands with the camera itself and should be given the camera instead. */
    public static final String OWN_HAND_TRACKING = "com.phonexr.OWN_HAND_TRACKING";

    public boolean gameOwnsHandTracking(String packageName) {
        try {
            PackageManager packages = context.getPackageManager();
            ApplicationInfo info = packages.getApplicationInfo(packageName, PackageManager.GET_META_DATA);
            return info.metaData != null && info.metaData.getBoolean(OWN_HAND_TRACKING);
        } catch (Throwable missing) {
            return false;
        }
    }

    /**
     * Copies an asset APK into the cache and returns the file for {@code pm install}.
     *
     * <p>Written to the cache, not to internal storage: the shell process has to be able to read it,
     * and {@code /data/cache} on an ordinary app is not readable by uid 2000. The caller is expected
     * to have the user pick the file with a system installer instead when the privileged path is
     * unavailable, and that path takes the same file through a content URI.
     */
    public File extract(String asset, String name) throws IOException {
        File folder = new File(context.getCacheDir(), "xr");
        if (!folder.isDirectory() && !folder.mkdirs()) {
            throw new IOException("cannot create " + folder);
        }
        File out = new File(folder, name);
        try (InputStream in = context.getAssets().open(asset);
             OutputStream sink = new FileOutputStream(out)) {
            byte[] chunk = new byte[64 * 1024];
            for (int read = in.read(chunk); read > 0; read = in.read(chunk)) sink.write(chunk, 0, read);
        }
        out.setReadable(true, false);
        return out;
    }

    /** One line for the settings window: what is installed and what, if anything, is missing. */
    public String summary() {
        StringBuilder text = new StringBuilder();
        text.append(runtimeState() == State.READY ? "runtime ready" : "runtime " + runtimeState().name().toLowerCase());
        if (runtimeState() != State.READY && runtimeBundled()) text.append(" (bundled " + BUNDLED_VERSION + ")");
        text.append(" · VrApi ").append(vrApiUsable() ? "ready" : "missing");
        if (!brokerInstalled()) text.append(" · no OpenXR broker");
        if (!runtimeBundled()) text.append(" · runtime APK not bundled");
        return text.toString();
    }
}
