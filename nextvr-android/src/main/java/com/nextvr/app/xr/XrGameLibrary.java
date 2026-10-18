package com.nextvr.app.xr;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;

import java.io.File;
import java.util.zip.ZipFile;

/**
 * Which installed apps are headset games, what kind of headset each was built for, and how each one
 * has to be started.
 *
 * <h2>Why the app list is not enough</h2>
 *
 * <p>{@code PackageManager} reports an app's label, icon and categories, and nothing that matters
 * here. Whether a build speaks OpenXR or the older VrApi is decided by which libraries it ships;
 * whether it can find a runtime at all is decided by a {@code <queries>} block inside its compiled
 * manifest; which headset it was made for is decided by markers in that same manifest. None of it is
 * public API, so all three are read straight out of the APK — once, lazily, off the main thread.
 *
 * <h2>The four kinds, and what each one costs the user</h2>
 *
 * <ul>
 *   <li>{@link Kind#OPENXR} — an OpenXR game that declares what it needs. Starts directly, and can
 *       be hosted on a display of ours, so it opens inside the workspace like an Android app window.</li>
 *   <li>{@link Kind#OPENXR_ORIGINAL} — a headset OpenXR build that never declared the broker. It
 *       cannot see the runtime and would show a black screen. The runtime's own launcher starts it
 *       with a URI grant that makes the runtime visible to it, which needs no patch — but it means
 *       the game has to run on the phone's own display, not inside ours.</li>
 *   <li>{@link Kind#VRAPI_READY} — a Gear VR or Quest game that already carries an OpenXR adapter in
 *       place of {@code libvrapi.so}. Direct, and hostable.</li>
 *   <li>{@link Kind#VRAPI_ORIGINAL} — a store Gear VR or Quest game, unpatched. Its {@code libvrapi}
 *       is a loader that opens the Oculus system driver package, which a phone does not have. The
 *       VrApi driver package this app installs supplies it, and the game is then started through the
 *       driver so both packages become visible to it. Again, on the phone's display.</li>
 *   <li>{@link Kind#VRAPI_UNSUPPORTED} — no ARM build to replace. Nothing can be done for it.</li>
 *   <li>{@link Kind#DAYDREAM} — Google VR: the game draws its own stereo view and needs neither the
 *       runtime nor a patch. Hostable like any other app.</li>
 * </ul>
 *
 * <p>The division that matters in practice is {@link #hostable}: a hostable game runs on a display we
 * own, so its picture becomes a surface in our world and our menus can sit over it. A game that has
 * to be launched by the runtime has to be launched by <em>that</em> package, which puts it on the
 * phone's display, where we cannot draw into it.
 */
public final class XrGameLibrary {

    public enum Kind {
        OPENXR, OPENXR_ORIGINAL, VRAPI_READY, VRAPI_ORIGINAL, VRAPI_UNSUPPORTED, DAYDREAM
    }

    /** Which headset a build was made for. Quest and Gear VR both draw through VrApi, so it is the
     *  manifest, not the library, that says which. */
    public enum Headset {
        QUEST("Quest"), GEAR_VR("Gear VR"), ANDROID_XR("Android XR"), UNKNOWN("VR headset");

        public final String title;

        Headset(String title) {
            this.title = title;
        }
    }

    /** One installed game, as the library shows it. */
    public static final class Game {
        public final String packageName;
        public final String label;
        public final Kind kind;
        public final Headset headset;
        /** Carries the Oculus store entitlement check. Left strictly alone; see the porting notes. */
        public final boolean checksPurchase;
        public final boolean ownHandTracking;
        public final String apkPath;
        public final boolean hasSplits;

        Game(String packageName, String label, Kind kind, Headset headset, boolean checksPurchase,
             boolean ownHandTracking, String apkPath, boolean hasSplits) {
            this.packageName = packageName;
            this.label = label;
            this.kind = kind;
            this.headset = headset;
            this.checksPurchase = checksPurchase;
            this.ownHandTracking = ownHandTracking;
            this.apkPath = apkPath;
            this.hasSplits = hasSplits;
        }

        /**
         * Whether the game can run on a display this app owns, and therefore whether its picture can
         * become a surface in our world with the menus over it.
         *
         * <p>Only a build that can already find the runtime qualifies. One that cannot has to be
         * started by the runtime's own launcher — a different package, with no way to tell it which
         * display to use — so it takes the whole phone screen instead.
         */
        public boolean hostable() {
            return kind == Kind.OPENXR || kind == Kind.VRAPI_READY || kind == Kind.DAYDREAM;
        }

        /** Whether starting it needs the VrApi driver package installed as well as the runtime. */
        public boolean needsVrApiDriver() {
            return kind == Kind.VRAPI_ORIGINAL;
        }

        /** The one line under the name: what it is and what has to happen before it runs. */
        public String describe() {
            switch (kind) {
                case OPENXR:
                    return "OpenXR";
                case OPENXR_ORIGINAL:
                    return headset.title + " · OpenXR · unpatched, through PhoneXR Runtime";
                case VRAPI_READY:
                    return headset.title + " · through the PhoneXR VrApi adapter";
                case VRAPI_ORIGINAL:
                    return headset.title + " · VrApi · unpatched, through the PhoneXR VrApi driver";
                case VRAPI_UNSUPPORTED:
                    return headset.title + " · unsupported";
                case DAYDREAM:
                default:
                    return "Daydream / Cardboard";
            }
        }
    }

    /** Activity categories a headset game declares. Gear VR games declare MAIN + INFO, not a
     *  launcher entry, so a category query is the only way to find them at all. */
    public static final String[] VR_CATEGORIES = {
        "org.khronos.openxr.intent.category.IMMERSIVE_HMD",
        "com.oculus.intent.category.VR",
        "com.google.intent.category.DAYDREAM",
        "com.google.intent.category.CARDBOARD",
    };

    private static final String LOADER = "libopenxr_loader.so";
    private static final String VRAPI = "libvrapi.so";
    private static final String GVR = "libgvr.so";
    private static final String GVR_AUDIO = "libgvr_audio.so";
    private static final String[] ARM_ABIS = {"arm64-v8a", "armeabi-v7a", "armeabi"};

    /** Oculus store entitlement libraries. Reported, never touched. */
    private static final String[] ENTITLEMENT = {
        "libovrplatformloader.so", "libOVRPlatformLoader.so", "libovrplatform.so", "libOVRPlatform.so"};

    private final Context context;
    private final XrRuntime runtime;

    public XrGameLibrary(Context context, XrRuntime runtime) {
        this.context = context.getApplicationContext();
        this.runtime = runtime;
    }

    /**
     * Every installed game this app can start. Slow: it opens every candidate APK. Call it off the
     * main thread and hand the result to the shell.
     */
    public java.util.List<Game> scan() {
        PackageManager packages = context.getPackageManager();
        java.util.Set<String> declared = new java.util.HashSet<>();
        java.util.Set<String> vrActivities = new java.util.HashSet<>();
        for (String category : VR_CATEGORIES) {
            for (android.content.pm.ResolveInfo resolved : packages.queryIntentActivities(
                    new Intent(Intent.ACTION_MAIN).addCategory(category), PackageManager.MATCH_ALL)) {
                declared.add(resolved.activityInfo.packageName);
                vrActivities.add(resolved.activityInfo.packageName + "/" + resolved.activityInfo.name);
            }
        }
        java.util.Set<String> googleVr = new java.util.HashSet<>();
        for (String category : new String[]{"com.google.intent.category.DAYDREAM",
                "com.google.intent.category.CARDBOARD"}) {
            for (android.content.pm.ResolveInfo resolved : packages.queryIntentActivities(
                    new Intent(Intent.ACTION_MAIN).addCategory(category), PackageManager.MATCH_ALL)) {
                googleVr.add(resolved.activityInfo.packageName);
            }
        }
        java.util.Set<String> browsers = browsers(packages);
        java.util.Set<String> launchesIntoVr = launchesIntoVr(packages, vrActivities);

        java.util.List<Game> games = new java.util.ArrayList<>();
        for (ApplicationInfo info : packages.getInstalledApplications(0)) {
            if (info.packageName.equals(context.getPackageName())) continue;
            if ((info.flags & ApplicationInfo.FLAG_SYSTEM) != 0 && !declared.contains(info.packageName)) {
                continue;
            }
            Inspected inspected = inspect(info);
            if (inspected == null) continue;
            Kind kind = inspected.kind;
            // A browser ships the OpenXR loader for WebXR but is not a game, unless what it launches
            // is itself a VR activity (Wolvic). Chrome, for one, declares a VR activity it never uses.
            if ((kind == Kind.OPENXR || kind == Kind.OPENXR_ORIGINAL)
                    && browsers.contains(info.packageName)
                    && !launchesIntoVr.contains(info.packageName)) {
                continue;
            }
            games.add(new Game(info.packageName, String.valueOf(packages.getApplicationLabel(info)),
                    kind, inspected.headset, inspected.checksPurchase,
                    runtime.gameOwnsHandTracking(info.packageName), info.sourceDir,
                    info.splitSourceDirs != null));
        }
        games.sort((a, b) -> a.label.compareToIgnoreCase(b.label));
        return games;
    }

    private java.util.Set<String> browsers(PackageManager packages) {
        java.util.Set<String> out = new java.util.HashSet<>();
        for (android.content.pm.ResolveInfo resolved : packages.queryIntentActivities(
                new Intent(Intent.ACTION_VIEW, Uri.parse("https://example.com")), PackageManager.MATCH_ALL)) {
            out.add(resolved.activityInfo.packageName);
        }
        return out;
    }

    /**
     * The apps whose <em>own</em> launcher activity is a VR activity.
     *
     * <p>A browser ships the OpenXR loader so a WebXR page works, which makes it look like a game to
     * every other test here. What tells them apart is what they actually open: Wolvic's launcher
     * <em>is</em> its VR activity, while Chrome declares a VR activity for WebXR that its launcher
     * never enters. So the question is whether the launch target, not the package, is one of the VR
     * activities.
     */
    private java.util.Set<String> launchesIntoVr(PackageManager packages, java.util.Set<String> vrActivities) {
        java.util.Set<String> out = new java.util.HashSet<>();
        java.util.Set<String> candidates = new java.util.HashSet<>();
        for (String activity : vrActivities) {
            int slash = activity.indexOf('/');
            if (slash > 0) candidates.add(activity.substring(0, slash));
        }
        for (String packageName : candidates) {
            Intent launch = packages.getLaunchIntentForPackage(packageName);
            if (launch != null && launch.getComponent() != null
                    && vrActivities.contains(launch.getComponent().flattenToString())) {
                out.add(packageName);
            }
        }
        return out;
    }

    /**
     * One game by package name, re-reading the APK. Null when nothing installed matches.
     *
     * <p>Separate from {@link #scan()} on purpose: opening a game must not cost a walk over every
     * installed package, and the answer has to be about that one package.
     */
    public Game find(String packageName) {
        if (packageName == null || packageName.isEmpty()) return null;
        try {
            ApplicationInfo info = context.getPackageManager().getApplicationInfo(packageName, 0);
            Inspected inspected = inspect(info);
            if (inspected == null) return null;
            return new Game(packageName, String.valueOf(context.getPackageManager().getApplicationLabel(info)),
                    inspected.kind, inspected.headset, inspected.checksPurchase,
                    runtime.gameOwnsHandTracking(packageName), info.sourceDir, info.splitSourceDirs != null);
        } catch (Throwable missing) {
            return null;
        }
    }

    private static final class Inspected {
        Kind kind;
        Headset headset = Headset.UNKNOWN;
        boolean checksPurchase;
    }

    /** One APK, read once: its libraries, its headset markers and whether it can find a runtime. */
    private Inspected inspect(ApplicationInfo info) {
        try (ZipFile zip = new ZipFile(new File(info.sourceDir))) {
            java.util.List<String> names = new java.util.ArrayList<>();
            for (java.util.Enumeration<? extends java.util.zip.ZipEntry> it = zip.entries();
                    it.hasMoreElements(); ) {
                names.add(it.nextElement().getName());
            }
            java.util.List<String> libs = new java.util.ArrayList<>();
            for (String name : names) if (name.startsWith("lib/")) libs.add(name);

            Inspected result = new Inspected();
            result.checksPurchase = false;
            for (String name : libs) {
                String file = name.substring(name.lastIndexOf('/') + 1);
                for (String entitlement : ENTITLEMENT) {
                    if (entitlement.equals(file)) result.checksPurchase = true;
                }
            }
            java.util.zip.ZipEntry manifestEntry = zip.getEntry("AndroidManifest.xml");
            XrManifest manifest = manifestEntry == null ? XrManifest.empty()
                    : XrManifest.parse(read(zip, manifestEntry));
            result.headset = headsetOf(manifest.markers(), hasArm64(libs));

            java.util.List<String> vrapi = new java.util.ArrayList<>();
            for (String name : libs) if (name.endsWith("/" + VRAPI)) vrapi.add(name);
            if (vrapi.isEmpty()) {
                boolean openXr = false;
                boolean gvr = false;
                for (String name : libs) {
                    if (name.endsWith("/" + LOADER)) openXr = true;
                    if (name.endsWith("/" + GVR) || name.endsWith("/" + GVR_AUDIO)) gvr = true;
                }
                boolean declaredVr = false;
                for (String category : VR_CATEGORIES) {
                    if (manifest.hasCategory(category)) {
                        declaredVr = true;
                        break;
                    }
                }
                if (openXr || declaredVr) {
                    result.kind = manifest.findsRuntime() ? Kind.OPENXR : Kind.OPENXR_ORIGINAL;
                } else if (gvr) {
                    result.kind = Kind.DAYDREAM;
                } else {
                    return null;
                }
                return result;
            }
            String folder = null;
            for (String name : vrapi) {
                String candidate = name.substring("lib/".length());
                candidate = candidate.substring(0, candidate.indexOf('/'));
                for (String abi : ARM_ABIS) {
                    if (abi.equals(candidate)) folder = candidate;
                }
            }
            if (folder == null) {
                result.kind = Kind.VRAPI_UNSUPPORTED;
                return result;
            }
            // The patch that puts an OpenXR adapter in place of libvrapi also adds the loader beside
            // it. A store build never carries one, so its absence is the marker of an unpatched game.
            result.kind = libs.contains("lib/" + folder + "/" + LOADER) ? Kind.VRAPI_READY : Kind.VRAPI_ORIGINAL;
            return result;
        } catch (Throwable unreadable) {
            return null;
        }
    }

    private static byte[] read(ZipFile zip, java.util.zip.ZipEntry entry) {
        try (java.io.InputStream in = zip.getInputStream(entry)) {
            return in.readAllBytes();
        } catch (java.io.IOException error) {
            return new byte[0];
        }
    }

    private static boolean hasArm64(java.util.List<String> libs) {
        for (String name : libs) if (name.startsWith("lib/arm64-v8a/")) return true;
        return false;
    }

    /**
     * Which headset a build was made for, from the markers in its manifest.
     *
     * <p>Order matters. Android XR names its own feature namespace, so it is checked first. Quest
     * builds list the devices they support, or at least an {@code oculus.} feature. Gear VR builds
     * name Samsung's VR mode instead. Failing all of those, the width of the build decides: no 64-bit
     * Gear VR device ever existed, so a 32-bit build that got this far was made for Gear VR.
     */
    public static Headset headsetOf(java.util.Set<String> markers, boolean sixtyFour) {
        for (String marker : markers) {
            if (marker.startsWith("android.software.xr.") || marker.startsWith("android.window.PROPERTY_XR_")) {
                return Headset.ANDROID_XR;
            }
        }
        for (String marker : markers) if (marker.startsWith("com.oculus.supportedDevices")) return Headset.QUEST;
        for (String marker : markers) if ("com.samsung.android.vr.application.mode".equals(marker)) return Headset.GEAR_VR;
        for (String marker : markers) if (marker.startsWith("com.oculus.")) return Headset.QUEST;
        if (markers.contains("wave.feature")) return Headset.QUEST;
        return sixtyFour ? Headset.QUEST : Headset.GEAR_VR;
    }

    /**
     * How to start [game].
     *
     * <p>A game that can already find the runtime is started directly, and the caller may put it on a
     * display of ours. One that cannot is handed to the runtime's launcher with a URI grant, which is
     * what makes the runtime visible to it without patching the game — and puts it on the phone's own
     * display, because that is the only display that launcher can reach.
     *
     * <p>A VrApi game goes one step further, through the driver's own launcher: its {@code libvrapi}
     * loader opens the driver package, so the driver has to be visible to the game too, and the
     * driver's launcher is what grants both.
     */
    public Intent launchIntent(Game game) {
        Intent direct = directLaunchIntent(game);
        if (direct == null) return null;
        boolean vrApi = game.needsVrApiDriver() && runtime.vrApiUsable();
        if (game.kind != Kind.OPENXR_ORIGINAL && !vrApi) return direct;
        Intent via = new Intent().setClassName(XrRuntime.PACKAGE, XrRuntime.GAME_LAUNCHER)
                .putExtra("component", direct.getComponent().flattenToString())
                .putExtra("vrapi", vrApi)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        return via;
    }

    /** The launcher activity as {@code pkg/class}, which is what {@code am start -n} wants. */
    public String launchComponent(Game game) {
        Intent direct = directLaunchIntent(game);
        if (direct == null || direct.getComponent() == null) return null;
        return direct.getComponent().flattenToShortString();
    }

    private Intent directLaunchIntent(Game game) {
        PackageManager packages = context.getPackageManager();
        Intent launch = packages.getLaunchIntentForPackage(game.packageName);
        if (launch != null) return launch;
        for (String category : VR_CATEGORIES) {
            for (android.content.pm.ResolveInfo resolved : packages.queryIntentActivities(
                    new Intent(Intent.ACTION_MAIN).addCategory(category).setPackage(game.packageName), 0)) {
                return new Intent(Intent.ACTION_MAIN)
                        .setClassName(resolved.activityInfo.packageName, resolved.activityInfo.name);
            }
        }
        return null;
    }
}
