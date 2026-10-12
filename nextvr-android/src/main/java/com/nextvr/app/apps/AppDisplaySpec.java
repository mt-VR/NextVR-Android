package com.nextvr.app.apps;

/** Display/graphics dimensions the app windows and the phone mirror ask for. Pure math, testable. */
public final class AppDisplaySpec {
    public static final int MIN_HEIGHT = 480;
    public static final int MAX_HEIGHT = 1080;
    public static final int DEFAULT_HEIGHT = 720;
    /** Aspect ratio bounds: outside these a phone app is letterboxed anyway, so we clamp. */
    public static final float MIN_ASPECT = 0.6f;
    public static final float MAX_ASPECT = 2.34f;
    /** A window that changed shape by more than this asks the platform for a new display size. */
    public static final float RESIZE_THRESHOLD = 0.12f;

    public final int width, height, density;

    private AppDisplaySpec(int width, int height, int density) {
        this.width = width;
        this.height = height;
        this.density = density;
    }

    public float aspect() { return height == 0 ? 1f : (float) width / height; }

    /** Aspect of a window body measured in atlas pixels, clamped to what a phone app can use. */
    public static float aspect(float boxWidth, float boxHeight) {
        if (!(boxWidth > 0) || !(boxHeight > 0)) return 16f / 9f;
        float aspect = boxWidth / boxHeight;
        if (aspect < MIN_ASPECT) return MIN_ASPECT;
        if (aspect > MAX_ASPECT) return MAX_ASPECT;
        return aspect;
    }

    /**
     * Display size for a window body of [boxWidth]x[boxHeight] atlas pixels.
     *
     * <p>The display takes the window's aspect, so what the shader samples is exactly what the user
     * aimed at: no pillarbox math is needed between the VR window and the app's own coordinates.
     * A non-resizable app is then letterboxed *inside* the display by Android's compat scaling, and
     * injected display coordinates are scaled by the framework for that window — the touch lands
     * where the user aimed either way.
     */
    public static AppDisplaySpec forBox(float boxWidth, float boxHeight, int deviceDensity) {
        int height = DEFAULT_HEIGHT;
        if (boxHeight > 0) height = Math.round(boxHeight);
        height = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, height));
        int width = Math.round(height * aspect(boxWidth, boxHeight));
        // Even dimensions: video paths and buffer strides are happier, and the seam is invisible.
        if (width % 2 != 0) width++;
        int density = deviceDensity <= 0 ? 240 : Math.max(160, Math.min(320, deviceDensity));
        return new AppDisplaySpec(width, height, density);
    }

    /** Same shape, new size — used when the app window is resized by the hand. */
    public AppDisplaySpec resized(float boxWidth, float boxHeight) {
        AppDisplaySpec next = forBox(boxWidth, boxHeight, density);
        return next;
    }

    /** Whether [next] differs enough from this spec to justify resizing the live display. */
    public boolean needsResize(AppDisplaySpec next) {
        if (next == null) return false;
        float current = aspect(), wanted = next.aspect();
        if (Math.abs(current - wanted) / Math.max(.01f, current) > RESIZE_THRESHOLD) return true;
        return Math.abs(next.height - height) > Math.max(48, height * RESIZE_THRESHOLD);
    }

    @Override public String toString() { return width + "x" + height + "@" + density; }
}
