package com.metamr.potatovr;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Converte o retângulo CSS ({@code getBoundingClientRect()}) de um painel 3D da WebView
 * principal para coordenadas físicas de {@code View} no Android.
 */
public final class PanelBounds {
    private static final Pattern NUMBER_FIELD = Pattern.compile(
        "\"([a-zA-Z]+)\"\\s*:\\s*(-?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)"
    );
    private static final Pattern BOOL_FIELD = Pattern.compile(
        "\"([a-zA-Z]+)\"\\s*:\\s*(true|false)"
    );

    public final int leftPx;
    public final int topPx;
    public final int widthPx;
    public final int heightPx;
    public final float scaleX;
    public final float scaleY;
    public final boolean visible;

    public PanelBounds(
        int leftPx,
        int topPx,
        int widthPx,
        int heightPx,
        float scaleX,
        float scaleY,
        boolean visible
    ) {
        this.leftPx = leftPx;
        this.topPx = topPx;
        this.widthPx = widthPx;
        this.heightPx = heightPx;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.visible = visible;
    }

    public static PanelBounds fromJson(
        String json,
        int hostWidthPx,
        int hostHeightPx,
        float fallbackDensity
    ) {
        float safeDensity = fallbackDensity > 0f ? fallbackDensity : 1f;
        if (hostWidthPx <= 0 || hostHeightPx <= 0 || json == null || json.isEmpty()) {
            return new PanelBounds(0, 0, 0, 0, safeDensity, safeDensity, false);
        }

        double left = Double.NaN;
        double top = Double.NaN;
        double width = Double.NaN;
        double height = Double.NaN;
        double vw = Double.NaN;
        double vh = Double.NaN;
        boolean vrSplit = false;

        Matcher numMatcher = NUMBER_FIELD.matcher(json);
        while (numMatcher.find()) {
            String key = numMatcher.group(1);
            double value;
            try {
                value = Double.parseDouble(numMatcher.group(2));
            } catch (NumberFormatException ignored) {
                continue;
            }
            if ("left".equals(key) || ("x".equals(key) && Double.isNaN(left))) {
                left = value;
            } else if ("top".equals(key) || ("y".equals(key) && Double.isNaN(top))) {
                top = value;
            } else if ("width".equals(key)) {
                width = value;
            } else if ("height".equals(key)) {
                height = value;
            } else if ("vw".equals(key)) {
                vw = value;
            } else if ("vh".equals(key)) {
                vh = value;
            }
        }

        Matcher boolMatcher = BOOL_FIELD.matcher(json);
        while (boolMatcher.find()) {
            if ("vrSplit".equals(boolMatcher.group(1))) {
                vrSplit = "true".equals(boolMatcher.group(2));
            }
        }

        if (Double.isNaN(left) || Double.isNaN(top) || Double.isNaN(width) || Double.isNaN(height)) {
            return new PanelBounds(0, 0, 0, 0, safeDensity, safeDensity, false);
        }

        float sx = (vw > 1.0) ? (float) (hostWidthPx / vw) : safeDensity;
        float sy = (vh > 1.0) ? (float) (hostHeightPx / vh) : safeDensity;

        int rawLeft = (int) Math.round(left * sx);
        int rawTop = (int) Math.round(top * sy);
        int rawRight = (int) Math.round((left + width) * sx);
        int rawBottom = (int) Math.round((top + height) * sy);

        int maxRight = vrSplit ? Math.max(1, hostWidthPx / 2) : hostWidthPx;
        int clampedLeft = Math.max(0, Math.min(maxRight, rawLeft));
        int clampedTop = Math.max(0, Math.min(hostHeightPx, rawTop));
        int clampedRight = Math.max(clampedLeft, Math.min(maxRight, rawRight));
        int clampedBottom = Math.max(clampedTop, Math.min(hostHeightPx, rawBottom));

        int finalW = clampedRight - clampedLeft;
        int finalH = clampedBottom - clampedTop;
        boolean isVisible = finalW >= 16 && finalH >= 16;

        return new PanelBounds(clampedLeft, clampedTop, finalW, finalH, sx, sy, isVisible);
    }

    public float toViewLocalX(double cssLocalX) {
        float px = (float) (cssLocalX * scaleX);
        if (widthPx <= 1) return 0f;
        return Math.max(0f, Math.min(widthPx - 1f, px));
    }

    public float toViewLocalY(double cssLocalY) {
        float py = (float) (cssLocalY * scaleY);
        if (heightPx <= 1) return 0f;
        return Math.max(0f, Math.min(heightPx - 1f, py));
    }
}
