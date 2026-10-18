package com.nextvr.app.xr;

/**
 * Render scale for a PhoneXR game display. Scaling pixels and density together keeps the game's
 * logical dp viewport unchanged while asking its runtime to render a smaller or larger buffer.
 */
public final class XrRenderQuality {
    public static final String PERFORMANCE = "performance";
    public static final String BALANCED = "balanced";
    public static final String HIGH = "high";

    private XrRenderQuality() {}

    public static String normalize(String value) {
        if (PERFORMANCE.equals(value) || HIGH.equals(value)) return value;
        return BALANCED;
    }

    public static float scale(String value) {
        switch (normalize(value)) {
            case PERFORMANCE: return .65f;
            case HIGH: return 1f;
            case BALANCED:
            default: return .82f;
        }
    }

    /** Scales evenly-rounded buffer dimensions while preserving the canvas aspect ratio. */
    public static int[] canvas(int width, int height, String quality) {
        float scale = scale(quality);
        return new int[]{even(Math.round(Math.max(2, width) * scale)),
                even(Math.round(Math.max(2, height) * scale))};
    }

    /**
     * Keep the game's dp layout at the same size as the buffer changes. Android derives dp from
     * px / density, so scaling both dimensions by the same factor leaves the logical viewport intact.
     */
    public static int density(int densityDpi, String quality) {
        return Math.max(160, Math.round(Math.max(160, densityDpi) * scale(quality)));
    }

    private static int even(int value) {
        int positive = Math.max(2, value);
        return positive % 2 == 0 ? positive : positive + 1;
    }
}
