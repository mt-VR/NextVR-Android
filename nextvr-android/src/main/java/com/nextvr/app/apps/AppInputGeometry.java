package com.nextvr.app.apps;

/**
 * From a point on a VR window to a point the app on the other side understands.
 *
 * <p>The JS side owns the layout: it knows the window body, the fitted rectangle of the display
 * inside it, and which pixel of that rectangle the tracked finger touched. It therefore sends
 * <em>normalized</em> coordinates (0..1 of the display) and this class converts them to display
 * pixels, clamping instead of trusting the input — a hand that leaves the surface must never inject
 * a coordinate outside the display, which some apps interpret as a system gesture region.
 *
 * <p>{@link #fit} mirrors the JS {@code fitDisplay()} helper. Keeping both and testing both is the
 * cheap way to be sure the picture and the touch agree: the shader is fed the fitted rectangle, the
 * input is fed the same rectangle's normalized point.
 */
public final class AppInputGeometry {
    private AppInputGeometry() {}

    /** Clamps a normalized coordinate into the display. */
    public static float clampUnit(float value) {
        if (Float.isNaN(value)) return .5f;
        if (value < 0f) return 0f;
        if (value > 1f) return 1f;
        return value;
    }

    /** Display-space X for a normalized [u]; the last valid pixel is width-1. */
    public static float toDisplayX(float u, int displayWidth) {
        if (displayWidth <= 0) return 0f;
        float x = clampUnit(u) * displayWidth;
        return Math.max(0f, Math.min(displayWidth - 1, x));
    }

    /** Display-space Y for a normalized [v]. */
    public static float toDisplayY(float v, int displayHeight) {
        if (displayHeight <= 0) return 0f;
        float y = clampUnit(v) * displayHeight;
        return Math.max(0f, Math.min(displayHeight - 1, y));
    }

    /**
     * Where a display of [displayAspect] sits inside a window body of [boxWidth]x[boxHeight] atlas
     * pixels, in box pixels: {@code {x, y, width, height}}. Mirrored in
     * {@code web/src/display-fit.js} ({@code fitDisplay}) and covered by tests on both sides.
     */
    public static float[] fit(float displayAspect, float boxWidth, float boxHeight) {
        // The body's own aspect and the display's own aspect, with nothing clamped in between: the
        // canvas is the phone's screen and the window takes its shape, so the two agree and the
        // picture fills the window. A window the user resized by hand is a different shape, and then
        // the picture is centred in it — never stretched, never cropped.
        float bodyAspect = boxWidth > 0 && boxHeight > 0 ? boxWidth / boxHeight : 16f / 9f;
        float aspect = displayAspect > 0 ? displayAspect : bodyAspect;
        float width, height;
        if (aspect >= bodyAspect) { width = boxWidth; height = boxWidth / aspect; }
        else { height = boxHeight; width = boxHeight * aspect; }
        return new float[]{Math.round((boxWidth - width) / 2f), Math.round((boxHeight - height) / 2f),
            Math.round(width), Math.round(height)};
    }

    /**
     * Display rotation applied to a normalized point.
     *
     * <p>A public virtual display rotates with the top activity; the compositor hands us the rotated
     * buffer and the SurfaceTexture transform keeps the picture upright in the window. The touch has
     * to make the same trip in reverse, otherwise a landscape app in a window would receive taps
     * mirrored across the diagonal. Device checklist item 7 in
     * {@code docs/ANDROID-APP-WINDOWS.md} verifies this for each rotation on real hardware.
     */
    public static float[] forRotation(float u, float v, int rotation) {
        float x = clampUnit(u), y = clampUnit(v);
        switch (((rotation % 360) + 360) % 360) {
            case 90: return new float[]{y, 1f - x};
            case 180: return new float[]{1f - x, 1f - y};
            case 270: return new float[]{1f - y, x};
            default: return new float[]{x, y};
        }
    }

    /** Aspect the user actually sees for a display of [w]x[h] rotated by [rotation] degrees. */
    public static float visibleAspect(int w, int h, int rotation) {
        if (w <= 0 || h <= 0) return 16f / 9f;
        int normalized = ((rotation % 360) + 360) % 360;
        return normalized == 90 || normalized == 270 ? (float) h / w : (float) w / h;
    }
}
