package com.nextvr.app.apps;

/**
 * One installed Android app, as the library and the dock need it. Pure Java on purpose: the
 * filtering, ranking and icon-key rules are unit-tested without a device.
 */
public final class AppEntry {
    /** Package name; also the session key and the id the shell sends back. */
    public final String packageName;
    /** Label shown on the tile, already falling back to the package name. */
    public final String label;
    /** True for apps that ship with the system image (hidden by default in the library). */
    public final boolean system;
    /** Launcher activity as {@code "pkg/.Activity"} — what {@code am start -n} takes. */
    public final String component;
    /** Version code of the installed package: part of the icon key, so updates refresh the cache. */
    public final long versionCode;
    /**
     * The shape the app's own launcher activity declares ({@code portrait} / {@code landscape}), or
     * {@code ""} when it adapts to any shape. This is what makes a portrait app open in a portrait
     * window instead of being letterboxed inside a wide one.
     */
    public final String orientation;
    /**
     * True when the activity opts out of being resized ({@code resizeableActivity="false"} on API 30+
     * or the old {@code FLAG_RESIZEABLE_FOR_SCREENS} bit), i.e. when the platform will letterbox the
     * app inside whatever shape it is given. Reported to the user, never fought: it is the app's own
     * declaration.
     */
    public final boolean fixedShape;

    public AppEntry(String packageName, String label, boolean system, String component, long versionCode) {
        this(packageName, label, system, component, versionCode, "", false);
    }

    public AppEntry(String packageName, String label, boolean system, String component, long versionCode,
                    String orientation, boolean fixedShape) {
        this.packageName = packageName;
        this.label = label == null || label.trim().isEmpty() ? packageName : label.trim();
        this.system = system;
        this.component = component;
        this.versionCode = versionCode;
        this.orientation = orientation == null ? "" : orientation;
        this.fixedShape = fixedShape;
    }

    /**
     * Stable key of the cached icon file. FNV-1a over package + version + component: the icon of a
     * updated app lands in a different file instead of being served from the old one, and the name
     * is filesystem-safe whatever the package name contains.
     */
    public String iconKey() {
        String seed = packageName + '@' + versionCode + ':' + component;
        long hash = 0xcbf29ce484222325L;
        for (int i = 0; i < seed.length(); i++) {
            hash ^= seed.charAt(i);
            hash *= 0x100000001b3L;
        }
        return Long.toHexString(hash) + ".png";
    }

    @Override public String toString() { return label + " (" + packageName + ")"; }
}
