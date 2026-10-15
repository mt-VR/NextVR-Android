package com.nextvr.app.apps;

/**
 * The display an app window is hosted on: the canvas the app draws into, in pixels, and the density
 * that turns those pixels into the dp box the app lays out in.
 *
 * <p>Both are the app's own business, not the window's: the window can be any size the user puts it
 * (and the shell scales the picture into it), while the canvas decides what the app thinks the screen
 * is. Giving the app this phone's own screen — the same pixel size and the same density — is what keeps
 * its layout exactly the one it has on the phone, with nothing pinned to the bottom cut off.
 *
 * <p>Pure math, unit-tested: the numbers here are the difference between an app that fits and an app
 * that is cropped.
 */
public final class AppDisplaySpec {
    /** Density bounds: below 160 dpi every app draws as if on a tablet, above 640 as if on a watch. */
    public static final int MIN_DENSITY = 160;
    public static final int MAX_DENSITY = 640;
    /** Used when the platform refuses to answer: a normal modern phone screen's density. */
    public static final int DEFAULT_DENSITY = 420;

    public final int width, height, density;

    private AppDisplaySpec(int width, int height, int density) {
        this.width = width;
        this.height = height;
        this.density = density;
    }

    /**
     * The display for a canvas of [canvasWidth]x[canvasHeight] pixels.
     *
     * <p>The size is taken as given (rounded to even dimensions, which buffer strides prefer); the only
     * protection is against nonsense. The density is the device's own, so the canvas is the same dp box
     * here as it is on the phone's screen — that equivalence is the whole point.
     */
    public static AppDisplaySpec forCanvas(int canvasWidth, int canvasHeight, int deviceDensity) {
        int width = even(Math.max(2, canvasWidth));
        int height = even(Math.max(2, canvasHeight));
        int density = deviceDensity <= 0 ? DEFAULT_DENSITY
                : Math.max(MIN_DENSITY, Math.min(MAX_DENSITY, deviceDensity));
        return new AppDisplaySpec(width, height, density);
    }

    public float aspect() { return height == 0 ? 1f : (float) width / height; }

    /** Width the app sees, in dp — the number that tells it which layout to use. */
    public int widthDp() { return Math.round(width * 160f / density); }

    /** Height the app sees, in dp. */
    public int heightDp() { return Math.round(height * 160f / density); }

    /** Whether two specs describe the same canvas (the same dp box and the same dp density). */
    public boolean sameCanvas(AppDisplaySpec other) {
        return other != null && other.width == width && other.height == height
                && other.density == density;
    }

    private static int even(int value) {
        return value % 2 == 0 ? value : value + 1;
    }

    /** {@code 1080x2400@420 411x914dp} — one line that says what the app sees. */
    @Override public String toString() {
        return width + "x" + height + "@" + density + " " + widthDp() + "x" + heightDp() + "dp";
    }
}
