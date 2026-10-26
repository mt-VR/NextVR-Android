package com.nextvr.app;

import com.nextvr.app.hands.PhoneXrHands;
import java.util.Locale;

/**
 * Recognizes the custom circular "A | B" 5-sector paper marker drawing and turns it into
 * a PICO 4 Ultra controller with live A (select option) and B (exit game) touch detection.
 *
 * <p>Marker geometry signature (only matches this specific drawing):
 * <ul>
 *   <li>Circular bright paper disc with 5 white wedges separated by 5 dark radial strokes.</li>
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

    private static final int[] CANDIDATE_RADII = {48, 64, 84, 108, 134};

    private float smoothX = 0.5f;
    private float smoothY = 0.62f;
    private float smoothR = 0.15f;
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

        boolean matched = false;
        float confidence = 0f;
        int bestCx = Math.round(smoothX * width);
        int bestCy = Math.round(smoothY * height);
        float bestRadius = smoothR * Math.min(width, height);
        int bestPaperLuma = 185;
        boolean rawTouchA = false;
        boolean rawTouchB = false;

        // Path A: Fast bounding-box check when the white paper disc is on a darker background
        int step = 4;
        int count = 0;
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
                int sat = Math.max(r, Math.max(g, b)) - Math.min(r, Math.min(g, b));
                if (luma >= 150 && sat <= 45) {
                    count++;
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }

        if (count >= 24 && maxX > minX && maxY > minY) {
            int cx = (minX + maxX) >> 1;
            int cy = (minY + maxY) >> 1;
            float rx = (maxX - minX) * 0.5f;
            float ry = (maxY - minY) * 0.5f;
            float radius = (rx + ry) * 0.5f;
            float aspect = ry > 1f ? (rx / ry) : 0f;
            if (radius >= 24f && radius <= Math.min(width, height) * 0.46f && aspect >= 0.65f && aspect <= 1.48f) {
                float score = evaluateCandidate(argb, width, height, cx, cy, radius);
                if (score >= 0.72f) {
                    matched = true;
                    confidence = score;
                    bestCx = cx;
                    bestCy = cy;
                    bestRadius = radius;
                    bestPaperLuma = samplePatchLuma(argb, width, height, cx, (int) (cy + radius * 0.48f), 6);
                }
            }
        }

        // Path B: 5-Wedge + 5-Ray Star-Junction local-contrast search (works on bright/gray walls and real camera photos)
        if (!matched) {
            float bestScore = 0f;
            int gridStep = Math.max(6, Math.min(width, height) / 48);
            int margin = Math.max(40, Math.min(width, height) / 8);
            for (int cy = margin; cy < height - margin; cy += gridStep) {
                for (int cx = margin; cx < width - margin; cx += gridStep) {
                    int centerMin = minLuma3x3(argb, width, height, cx, cy, 4);
                    for (int ri = 0; ri < CANDIDATE_RADII.length; ri++) {
                        float r = CANDIDATE_RADII[ri] * (Math.min(width, height) / 480f);
                        if (cx - r < 6 || cx + r >= width - 6 || cy - r < 6 || cy + r >= height - 6) continue;
                        int wBot = sampleWedgePaper(argb, width, height, cx, cy, 0f, 1f, r);
                        if (wBot < 145 || wBot - centerMin < 11) continue;
                        int wTL = sampleWedgePaper(argb, width, height, cx, cy, -0.65f, -0.65f, r);
                        int wTR = sampleWedgePaper(argb, width, height, cx, cy, 0.65f, -0.65f, r);
                        if (wTL < 145 && wTR < 145) continue;
                        int wML = sampleWedgePaper(argb, width, height, cx, cy, -0.92f, 0.25f, r);
                        if (wML < 145) continue;
                        int wMR = sampleWedgePaper(argb, width, height, cx, cy, 0.92f, 0.25f, r);
                        if (wMR < 145) continue;

                        int paper = (wBot + Math.max(wTL, wTR) + wML + wMR) / 4;
                        if (paper - centerMin < 11) continue;

                        float score = evaluateCandidateWithPaper(argb, width, height, cx, cy, r, paper);
                        if (score > bestScore) {
                            bestScore = score;
                            bestCx = cx;
                            bestCy = cy;
                            bestRadius = r;
                            bestPaperLuma = paper;
                        }
                    }
                }
            }
            if (bestScore >= 0.72f) {
                matched = true;
                confidence = bestScore;
            }
        }

        if (matched) {
            float normX = bestCx / (float) width;
            float normY = bestCy / (float) height;
            float normR = bestRadius / (float) Math.min(width, height);
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

            int ax = (int) (bestCx - bestRadius * 0.40f);
            int ay = (int) (bestCy - bestRadius * 0.38f);
            int bx = (int) (bestCx + bestRadius * 0.40f);
            int by = (int) (bestCy - bestRadius * 0.38f);
            int patchR = Math.max(6, (int) (bestRadius * 0.24f));
            boolean skinA = sampleSkinOcclusion(argb, width, height, ax, ay, patchR, bestPaperLuma);
            boolean skinB = sampleSkinOcclusion(argb, width, height, bx, ay, patchR, bestPaperLuma);
            if (skinA && !skinB) rawTouchA = true;
            else if (skinB && !skinA) rawTouchB = true;
        } else if (lastValidMs > 0L && (nowMs - lastValidMs) <= 160L) {
            matched = true;
            confidence = 0.65f;
            int lastCx = Math.round(smoothX * width);
            int lastCy = Math.round(smoothY * height);
            float lastR = smoothR * Math.min(width, height);
            int paperLuma = samplePatchLuma(argb, width, height, lastCx, (int) (lastCy + lastR * 0.48f), 6);
            int ax = (int) (lastCx - lastR * 0.40f);
            int ay = (int) (lastCy - lastR * 0.38f);
            int bx = (int) (lastCx + lastR * 0.40f);
            int patchR = Math.max(6, (int) (lastR * 0.24f));
            boolean skinA = sampleSkinOcclusion(argb, width, height, ax, ay, patchR, paperLuma);
            boolean skinB = sampleSkinOcclusion(argb, width, height, bx, ay, patchR, paperLuma);
            if (skinA && !skinB) rawTouchA = true;
            else if (skinB && !skinA) rawTouchB = true;
        }

        // Check MediaPipe index/thumb fingertip touch on A (top-left) or B (top-right) sector of the marker
        if (matched && handFrame != null && handFrame.getHands() != null) {
            for (PhoneXrHands.Hand h : handFrame.getHands()) {
                if (h == null || h.getPoints() == null || h.getPoints().length < 27) continue;
                float[] pts = h.getPoints();
                boolean pinching = h.getPinching();
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

    private static float evaluateCandidate(int[] argb, int width, int height, int cx, int cy, float radius) {
        int paperLuma = samplePatchLuma(argb, width, height, cx, (int) (cy + radius * 0.48f), 6);
        if (paperLuma < 140) return 0f;
        return evaluateCandidateWithPaper(argb, width, height, cx, cy, radius, paperLuma);
    }

    private static float evaluateCandidateWithPaper(int[] argb, int width, int height, int cx, int cy, float radius, int paperLuma) {
        boolean rayLeft = hasDarkRay(argb, width, height, cx, cy, -1f, 0f, radius, paperLuma);
        boolean rayRight = hasDarkRay(argb, width, height, cx, cy, 1f, 0f, radius, paperLuma);
        boolean rayTop = hasDarkRay(argb, width, height, cx, cy, 0f, -1f, radius, paperLuma);
        if (!rayLeft || !rayRight || !rayTop) return 0f;

        boolean bottomWedgeClean = !hasDarkRay(argb, width, height, cx, cy, 0f, 1f, radius * 0.78f, paperLuma - 10);
        if (!bottomWedgeClean) return 0f;

        boolean rayDownLeft = hasDarkRay(argb, width, height, cx, cy, -0.615f, 0.788f, radius, paperLuma)
            || hasDarkRay(argb, width, height, cx, cy, -0.81f, 0.58f, radius, paperLuma);
        boolean rayDownRight = hasDarkRay(argb, width, height, cx, cy, 0.615f, 0.788f, radius, paperLuma)
            || hasDarkRay(argb, width, height, cx, cy, 0.81f, 0.58f, radius, paperLuma);
        if (!rayDownLeft || !rayDownRight) return 0f;

        int ax = (int) (cx - radius * 0.40f);
        int ay = (int) (cy - radius * 0.38f);
        int bx = (int) (cx + radius * 0.40f);
        int by = (int) (cy - radius * 0.38f);
        int patchR = Math.max(6, (int) (radius * 0.24f));

        float darkRatioA = sampleDarkOrSkinRatio(argb, width, height, ax, ay, patchR, paperLuma);
        float darkRatioB = sampleDarkOrSkinRatio(argb, width, height, bx, by, patchR, paperLuma);
        if (darkRatioA < 0.015f || darkRatioB < 0.015f) return 0f;

        return Math.min(1f, 0.88f + Math.min(0.12f, (darkRatioA + darkRatioB) * 0.5f));
    }

    private static int minLuma3x3(int[] argb, int w, int h, int cx, int cy, int step) {
        int minL = 255;
        for (int dy = -step; dy <= step; dy += step) {
            int y = cy + dy;
            if (y < 0 || y >= h) continue;
            int row = y * w;
            for (int dx = -step; dx <= step; dx += step) {
                int x = cx + dx;
                if (x < 0 || x >= w) continue;
                int c = argb[row + x];
                int luma = (((c >> 16) & 0xff) * 77 + ((c >> 8) & 0xff) * 150 + (c & 0xff) * 29) >> 8;
                if (luma < minL) minL = luma;
            }
        }
        return minL;
    }

    private static int sampleWedgePaper(int[] argb, int w, int h, int cx, int cy, float dx, float dy, float r) {
        int bestLuma = 0;
        float[] ts = {0.28f, 0.45f, 0.62f};
        for (int i = 0; i < ts.length; i++) {
            int px = Math.round(cx + dx * r * ts[i]);
            int py = Math.round(cy + dy * r * ts[i]);
            if (px < 2 || px >= w - 2 || py < 2 || py >= h - 2) return 0;
            int c = argb[py * w + px];
            int cr = (c >> 16) & 0xff;
            int cg = (c >> 8) & 0xff;
            int cb = c & 0xff;
            int sat = Math.max(cr, Math.max(cg, cb)) - Math.min(cr, Math.min(cg, cb));
            if (sat > 48) continue;
            int luma = (cr * 77 + cg * 150 + cb * 29) >> 8;
            if (luma > bestLuma) bestLuma = luma;
        }
        return bestLuma;
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
        int threshold = Math.max(45, paperLuma - 13);
        for (float t = 0.16f; t <= 0.80f; t += 0.08f) {
            samples++;
            float bx = cx + dx * radius * t;
            float by = cy + dy * radius * t;
            int minLuma = 255;
            for (int off = -4; off <= 4; off++) {
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
        int thresh = Math.max(45, paperLuma - 14);
        for (int y = Math.max(0, cy - r); y <= Math.min(h - 1, cy + r); y += 2) {
            int row = y * w;
            for (int x = Math.max(0, cx - r); x <= Math.min(w - 1, cx + r); x += 2) {
                int c = argb[row + x];
                int pr = (c >> 16) & 0xff;
                int pg = (c >> 8) & 0xff;
                int pb = c & 0xff;
                int luma = (pr * 77 + pg * 150 + pb * 29) >> 8;
                total++;
                if (luma <= thresh || (pr - pb >= 26 && pr > pg)) {
                    dark++;
                }
            }
        }
        return total > 0 ? (dark / (float) total) : 0f;
    }

    private static boolean sampleSkinOcclusion(int[] argb, int w, int h, int cx, int cy, int r, int paperLuma) {
        int skin = 0, total = 0;
        for (int y = Math.max(0, cy - r); y <= Math.min(h - 1, cy + r); y += 2) {
            int row = y * w;
            for (int x = Math.max(0, cx - r); x <= Math.min(w - 1, cx + r); x += 2) {
                int c = argb[row + x];
                int pr = (c >> 16) & 0xff;
                int pg = (c >> 8) & 0xff;
                int pb = c & 0xff;
                int luma = (pr * 77 + pg * 150 + pb * 29) >> 8;
                total++;
                if (luma < paperLuma - 18 && pr > pg + 10 && pr > pb + 22 && pg >= 40) {
                    skin++;
                }
            }
        }
        return total > 0 && (skin / (float) total) >= 0.28f;
    }
}
