package com.nextvr.app;

import com.nextvr.app.hands.PhoneXrHands;
import java.util.Locale;

/**
 * Recognizes the custom circular "A | B" 5-sector paper marker drawing and turns it into
 * a PICO 4 Ultra controller with live A (select option) and B (exit game) touch detection.
 *
 * <p>Marker geometry signature (only matches this specific drawing):
 * <ul>
 *   <li>Circular bright paper disc with radius R and aspect ratio near 1:1.</li>
 *   <li>Horizontal middle line (left 180 deg + right 0 deg rays from center).</li>
 *   <li>Top vertical line (90 deg upward ray) splitting top-left sector "A" and top-right sector "B".</li>
 *   <li>Two bottom diagonal lines (~215 deg down-left and ~325 deg down-right) with an open white bottom wedge.</li>
 * </ul>
 */
public final class PicoMarkerDetector {
    public static final class Result {
        public final boolean detected;
        public final float x;
        public final float y;
        public final float radius;
        public final float aimX;
        public final float aimY;
        public final boolean buttonA;
        public final boolean buttonB;
        public final float confidence;

        public Result(boolean detected, float x, float y, float radius,
                      float aimX, float aimY, boolean buttonA, boolean buttonB, float confidence) {
            this.detected = detected;
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.aimX = aimX;
            this.aimY = aimY;
            this.buttonA = buttonA;
            this.buttonB = buttonB;
            this.confidence = confidence;
        }

        public String toJson() {
            return String.format(Locale.US,
                "{\"detected\":%b,\"x\":%.4f,\"y\":%.4f,\"radius\":%.4f,\"aimX\":%.4f,\"aimY\":%.4f,\"buttonA\":%b,\"buttonB\":%b,\"confidence\":%.3f}",
                detected, x, y, radius, aimX, aimY, buttonA, buttonB, confidence);
        }
    }

    private float smoothX = 0.5f;
    private float smoothY = 0.55f;
    private float smoothR = 0.14f;
    private long lastValidMs = 0L;
    private int holdFramesA = 0;
    private int holdFramesB = 0;

    public void reset() {
        lastValidMs = 0L;
        holdFramesA = 0;
        holdFramesB = 0;
    }

    public Result detect(int[] argb, int width, int height, float[] fingerTipsXY, int fingerCount) {
        Result base = detect(argb, width, height, 1f, 1f, null, System.currentTimeMillis());
        if (!base.detected || fingerTipsXY == null || fingerCount <= 0) {
            return base;
        }
        boolean touchA = base.buttonA;
        boolean touchB = base.buttonB;
        for (int i = 0; i < fingerCount && i * 2 + 1 < fingerTipsXY.length; i++) {
            float fx = fingerTipsXY[i * 2];
            float fy = fingerTipsXY[i * 2 + 1];
            if (isPointInSectorA(fx, fy, base.x, base.y, base.radius)) {
                touchA = true;
                touchB = false;
                break;
            }
            if (isPointInSectorB(fx, fy, base.x, base.y, base.radius)) {
                touchB = true;
                touchA = false;
                break;
            }
        }
        return new Result(base.detected, base.x, base.y, base.radius, base.aimX, base.aimY, touchA, touchB, base.confidence);
    }

    public Result detect(int[] argb, int width, int height, float scaleX, float scaleY,
                         PhoneXrHands.Frame handFrame, long nowMs) {
        if (argb == null || width < 64 || height < 64 || argb.length < width * height) {
            return new Result(false, smoothX, smoothY, smoothR, 0f, 0f, false, false, 0f);
        }

        // 1. Scan for bright paper pixels (high luma, low color saturation)
        int step = 4;
        int sumX = 0, sumY = 0, count = 0;
        int minX = width, maxX = 0, minY = height, maxY = 0;
        int xStart = width / 12, xEnd = width - xStart;
        int yStart = height / 12, yEnd = height - yStart;

        for (int y = yStart; y < yEnd; y += step) {
            int row = y * width;
            for (int x = xStart; x < xEnd; x += step) {
                int c = argb[row + x];
                int r = (c >> 16) & 0xff;
                int g = (c >> 8) & 0xff;
                int b = c & 0xff;
                int luma = (r * 77 + g * 150 + b * 29) >> 8;
                int maxC = Math.max(r, Math.max(g, b));
                int minC = Math.min(r, Math.min(g, b));
                if (luma >= 150 && (maxC - minC) <= 45) {
                    sumX += x;
                    sumY += y;
                    count++;
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }

        boolean matched = false;
        float confidence = 0f;
        float normX = smoothX;
        float normY = smoothY;
        float normR = smoothR;
        boolean rawTouchA = false;
        boolean rawTouchB = false;

        if (count >= 24 && maxX > minX && maxY > minY) {
            int cx = (minX + maxX) >> 1;
            int cy = (minY + maxY) >> 1;
            float rx = (maxX - minX) * 0.5f;
            float ry = (maxY - minY) * 0.5f;
            float radius = (rx + ry) * 0.5f;
            float aspect = ry > 1f ? (rx / ry) : 0f;

            if (radius >= 24f && radius <= Math.min(width, height) * 0.48f && aspect >= 0.65f && aspect <= 1.48f) {
                int paperLuma = samplePatchLuma(argb, width, height, cx, (int) (cy + radius * 0.48f), 6);
                if (paperLuma >= 140) {
                    // Check the 5 characteristic pencil rays from center (cx, cy):
                    // 1) Left horizontal (-1, 0)
                    // 2) Right horizontal (+1, 0)
                    // 3) Top vertical (0, -1)
                    // 4) Down-left diagonal (-0.615, +0.788)
                    // 5) Down-right diagonal (+0.615, +0.788)
                    boolean rayLeft = hasDarkRay(argb, width, height, cx, cy, -1f, 0f, radius, paperLuma);
                    boolean rayRight = hasDarkRay(argb, width, height, cx, cy, 1f, 0f, radius, paperLuma);
                    boolean rayTop = hasDarkRay(argb, width, height, cx, cy, 0f, -1f, radius, paperLuma);
                    boolean rayDownLeft = hasDarkRay(argb, width, height, cx, cy, -0.615f, 0.788f, radius, paperLuma)
                        || hasDarkRay(argb, width, height, cx, cy, -0.78f, 0.62f, radius, paperLuma);
                    boolean rayDownRight = hasDarkRay(argb, width, height, cx, cy, 0.615f, 0.788f, radius, paperLuma)
                        || hasDarkRay(argb, width, height, cx, cy, 0.78f, 0.62f, radius, paperLuma);
                    boolean bottomWedgeClean = !hasDarkRay(argb, width, height, cx, cy, 0f, 1f, radius * 0.85f, paperLuma - 12);

                    int rayHits = (rayLeft ? 1 : 0) + (rayRight ? 1 : 0) + (rayTop ? 1 : 0)
                        + (rayDownLeft ? 1 : 0) + (rayDownRight ? 1 : 0);

                    // Top-left (A) and Top-right (B) quadrant inspection
                    int ax = (int) (cx - radius * 0.40f);
                    int ay = (int) (cy - radius * 0.38f);
                    int bx = (int) (cx + radius * 0.40f);
                    int by = (int) (cy - radius * 0.38f);
                    int patchR = Math.max(6, (int) (radius * 0.24f));

                    float darkRatioA = sampleDarkOrSkinRatio(argb, width, height, ax, ay, patchR, paperLuma);
                    float darkRatioB = sampleDarkOrSkinRatio(argb, width, height, bx, by, patchR, paperLuma);
                    boolean hasGlyphsOrTouch = (darkRatioA >= 0.02f && darkRatioB >= 0.02f);

                    if (rayHits >= 4 && bottomWedgeClean && hasGlyphsOrTouch) {
                        matched = true;
                        confidence = Math.min(1f, 0.55f + rayHits * 0.09f);
                        normX = cx / (float) width;
                        normY = cy / (float) height;
                        normR = radius / (float) Math.min(width, height);
                        if (lastValidMs == 0L) {
                            smoothX = normX;
                            smoothY = normY;
                            smoothR = normR;
                        } else {
                            smoothX += (normX - smoothX) * 0.45f;
                            smoothY += (normY - smoothY) * 0.45f;
                            smoothR += (normR - smoothR) * 0.35f;
                        }
                        lastValidMs = nowMs;

                        // Optical finger occlusion on A or B quadrant (when finger covers A or B)
                        boolean skinA = sampleSkinOcclusion(argb, width, height, ax, ay, patchR, paperLuma);
                        boolean skinB = sampleSkinOcclusion(argb, width, height, bx, by, patchR, paperLuma);
                        if (skinA && !skinB) rawTouchA = true;
                        else if (skinB && !skinA) rawTouchB = true;
                    }
                }
            }
        }

        if (!matched && lastValidMs > 0L && (nowMs - lastValidMs) <= 420L) {
            matched = true;
            confidence = 0.5f;
        }

        // Check MediaPipe index/thumb fingertip touch on A (top-left) or B (top-right) sector of the marker
        if (matched && handFrame != null && handFrame.getHands() != null) {
            for (PhoneXrHands.Hand h : handFrame.getHands()) {
                if (h == null || h.getPoints() == null || h.getPoints().length < 27) continue;
                float[] pts = h.getPoints();
                boolean pinching = h.getPinching();
                // Index tip (landmark 8 -> indices 24, 25) and thumb tip (landmark 4 -> indices 12, 13)
                float ix = pts[24], iy = pts[25];
                float tx = pts[12], ty = pts[13];
                if (isPointInSectorA(ix, iy, smoothX, smoothY, smoothR) ||
                    (pinching && isPointInSectorA(tx, ty, smoothX, smoothY, smoothR))) {
                    rawTouchA = true;
                    rawTouchB = false;
                    break;
                }
                if (isPointInSectorB(ix, iy, smoothX, smoothY, smoothR) ||
                    (pinching && isPointInSectorB(tx, ty, smoothX, smoothY, smoothR))) {
                    rawTouchB = true;
                    rawTouchA = false;
                    break;
                }
            }
        }

        if (rawTouchA) {
            holdFramesA = Math.min(6, holdFramesA + 1);
            holdFramesB = 0;
        } else {
            holdFramesA = Math.max(0, holdFramesA - 1);
        }
        if (rawTouchB) {
            holdFramesB = Math.min(6, holdFramesB + 1);
            holdFramesA = 0;
        } else {
            holdFramesB = Math.max(0, holdFramesB - 1);
        }

        float aimX = (smoothX - 0.5f) * 2f * scaleX;
        float aimY = (0.5f - smoothY) * 2f * scaleY;
        return new Result(
            matched,
            smoothX,
            smoothY,
            smoothR,
            aimX,
            aimY,
            matched && holdFramesA >= 1,
            matched && holdFramesB >= 1,
            confidence
        );
    }

    private static boolean isPointInSectorA(float px, float py, float cx, float cy, float r) {
        float dx = px - cx;
        float dy = py - cy;
        return dx >= -r * 0.95f && dx <= -r * 0.03f && dy >= -r * 0.95f && dy <= -r * 0.02f;
    }

    private static boolean isPointInSectorB(float px, float py, float cx, float cy, float r) {
        float dx = px - cx;
        float dy = py - cy;
        return dx >= r * 0.03f && dx <= r * 0.95f && dy >= -r * 0.95f && dy <= -r * 0.02f;
    }

    private static boolean isPaperOrInk(int c) {
        int r = (c >> 16) & 0xff;
        int g = (c >> 8) & 0xff;
        int b = c & 0xff;
        int luma = (r * 77 + g * 150 + b * 29) >> 8;
        int sat = Math.max(r, Math.max(g, b)) - Math.min(r, Math.min(g, b));
        return (luma >= 135 && sat <= 52) || (luma >= 45 && sat <= 32);
    }

    private static int samplePatchLuma(int[] argb, int w, int h, int cx, int cy, int r) {
        int sum = 0, cnt = 0;
        for (int y = Math.max(0, cy - r); y <= Math.min(h - 1, cy + r); y += 2) {
            int row = y * w;
            for (int x = Math.max(0, cx - r); x <= Math.min(w - 1, cx + r); x += 2) {
                int c = argb[row + x];
                int pr = (c >> 16) & 0xff;
                int pg = (c >> 8) & 0xff;
                int pb = c & 0xff;
                sum += (pr * 77 + pg * 150 + pb * 29) >> 8;
                cnt++;
            }
        }
        return cnt > 0 ? sum / cnt : 0;
    }

    private static boolean hasDarkRay(int[] argb, int w, int h, int cx, int cy,
                                      float dx, float dy, float radius, int paperLuma) {
        int hits = 0, samples = 0;
        float nx = -dy, ny = dx;
        int threshold = Math.max(50, paperLuma - 18);
        for (float t = 0.18f; t <= 0.82f; t += 0.08f) {
            samples++;
            float bx = cx + dx * radius * t;
            float by = cy + dy * radius * t;
            int minLuma = 255;
            for (int off = -3; off <= 3; off++) {
                int sx = Math.round(bx + nx * off);
                int sy = Math.round(by + ny * off);
                if (sx >= 0 && sx < w && sy >= 0 && sy < h) {
                    int c = argb[sy * w + sx];
                    int luma = (((c >> 16) & 0xff) * 77 + ((c >> 8) & 0xff) * 150 + (c & 0xff) * 29) >> 8;
                    if (luma < minLuma) minLuma = luma;
                }
            }
            if (minLuma <= threshold) hits++;
        }
        return samples > 0 && hits * 2 >= samples;
    }

    private static float sampleDarkOrSkinRatio(int[] argb, int w, int h, int cx, int cy, int r, int paperLuma) {
        int dark = 0, total = 0;
        int threshold = Math.max(55, paperLuma - 18);
        for (int y = Math.max(0, cy - r); y <= Math.min(h - 1, cy + r); y += 2) {
            int row = y * w;
            for (int x = Math.max(0, cx - r); x <= Math.min(w - 1, cx + r); x += 2) {
                int c = argb[row + x];
                int luma = (((c >> 16) & 0xff) * 77 + ((c >> 8) & 0xff) * 150 + (c & 0xff) * 29) >> 8;
                total++;
                if (luma <= threshold) dark++;
            }
        }
        return total > 0 ? (dark / (float) total) : 0f;
    }

    private static boolean sampleSkinOcclusion(int[] argb, int w, int h, int cx, int cy, int r, int paperLuma) {
        int occluded = 0, total = 0;
        for (int y = Math.max(0, cy - r); y <= Math.min(h - 1, cy + r); y += 2) {
            int row = y * w;
            for (int x = Math.max(0, cx - r); x <= Math.min(w - 1, cx + r); x += 2) {
                int c = argb[row + x];
                int pr = (c >> 16) & 0xff;
                int pg = (c >> 8) & 0xff;
                int pb = c & 0xff;
                int luma = (pr * 77 + pg * 150 + pb * 29) >> 8;
                int chroma = pr - Math.min(pg, pb);
                total++;
                if ((chroma >= 24 && luma < paperLuma - 12) || luma < paperLuma - 38) {
                    occluded++;
                }
            }
        }
        return total > 0 && (occluded / (float) total) >= 0.34f;
    }
}
