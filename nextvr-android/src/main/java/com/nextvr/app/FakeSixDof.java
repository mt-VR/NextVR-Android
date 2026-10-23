package com.nextvr.app;

import com.nextvr.app.hands.PhoneXrHands;
import java.util.Arrays;
import java.util.List;

/**
 * Track Mr 9.6.6 — 6DoF FALSO por fluxo ótico esparso 96x72 (~15 Hz / 60 ms)
 * Fiel ao algoritmo de referência (6DOF_FALSO.js) com downsampling 2x2 anti-aliasing:
 * 1. Deslocamento global (rotação da cabeça) na zona central (+-7 px);
 * 2. Blocos 8x8 numa grelha com procura +-2 px e refinamento parabólico sub-pixel (fx, fy);
 * 3. Máscara das mãos (handBoxes +-0.08 retida por 400 ms) para ignorar movimento das mãos;
 * 4. Modelo radial d = t + s * p com filtragem de outliers pela mediana.
 */
public final class FakeSixDof {
    public static final int W = 96;
    public static final int H = 72;

    private final float[] g = new float[W * H];
    private float[] prev = null;
    private final float[] sad49 = new float[49];
    private final float[] ptX = new float[64];
    private final float[] ptY = new float[64];
    private final float[] ptDx = new float[64];
    private final float[] ptDy = new float[64];
    private final float[] res = new float[64];
    private final float[] resSorted = new float[64];
    private final int[] goodIdx = new int[64];
    private final float[][] handBoxes = new float[4][4];
    private int retainedHandCount = 0;
    private long lastHandsMs = 0L;
    private long lastMs = 0L;
    private float prevValidSc = 0f;
    private long prevValidMs = 0L;

    public synchronized void reset() {
        prev = null;
        lastMs = 0L;
        retainedHandCount = 0;
        lastHandsMs = 0L;
        prevValidSc = 0f;
        prevValidMs = 0L;
    }

    /**
     * Processa um frame ARGB upright (outW x outH) a ~15 Hz (>= 60 ms).
     * Retorna { sc, gx, gy } se um modelo radial válido foi estimado, ou null caso contrário.
     */
    public synchronized float[] onCameraFrame(
            int[] cameraPixels,
            int outW,
            int outH,
            PhoneXrHands.Frame handsFrame,
            long nowMs) {
        if (cameraPixels == null || outW < W || outH < H) return null;
        if (lastMs != 0L && nowMs - lastMs < 33L) return null;
        lastMs = nowMs;

        // Downsampling 2x2 com filtro de caixa (box filter) para 96x72 em luminância:
        // elimina o aliasing de amostragem de ponto único e suaviza a parábola sub-pixel.
        for (int y = 0; y < H; y++) {
            int sy0 = (y * outH) / H;
            int sy1 = Math.min(outH - 1, sy0 + 2);
            int row0 = sy0 * outW;
            int row1 = sy1 * outW;
            int dstRow = y * W;
            for (int x = 0; x < W; x++) {
                int sx0 = (x * outW) / W;
                int sx1 = Math.min(outW - 1, sx0 + 2);
                int p00 = cameraPixels[row0 + sx0];
                int p01 = cameraPixels[row0 + sx1];
                int p10 = cameraPixels[row1 + sx0];
                int p11 = cameraPixels[row1 + sx1];
                int r = ((p00 >> 16) & 0xff) + ((p01 >> 16) & 0xff) + ((p10 >> 16) & 0xff) + ((p11 >> 16) & 0xff);
                int gr = ((p00 >> 8) & 0xff) + ((p01 >> 8) & 0xff) + ((p10 >> 8) & 0xff) + ((p11 >> 8) & 0xff);
                int b = (p00 & 0xff) + (p01 & 0xff) + (p10 & 0xff) + (p11 & 0xff);
                g[dstRow + x] = (r * 0.3f + gr * 0.59f + b * 0.11f) * 0.25f;
            }
        }

        if (prev == null) {
            prev = g.clone();
            return null;
        }

        final float[] P = prev;

        // 1) Deslocamento global (rotação da cabeça) na zona central (+-7 px)
        float best = 1e18f;
        int gx = 0, gy = 0;
        for (int oy = -7; oy <= 7; oy++) {
            for (int ox = -7; ox <= 7; ox++) {
                float sad = 0f;
                for (int y = 22; y < 50 && sad < best; y += 2) {
                    int r = y * W;
                    int r2 = (y + oy) * W;
                    for (int x = 30; x < 66; x += 2) {
                        sad += Math.abs(g[r2 + x + ox] - P[r + x]);
                    }
                }
                if (sad < best) {
                    best = sad;
                    gx = ox;
                    gy = oy;
                }
            }
        }

        // Caixas das mãos (handBoxes +-0.08) com retenção de 400 ms (0.4 s)
        int hbCount = 0;
        if (handsFrame != null && !handsFrame.getHands().isEmpty()) {
            List<PhoneXrHands.Hand> hands = handsFrame.getHands();
            for (int hi = 0; hi < hands.size() && hbCount < handBoxes.length; hi++) {
                float[] pts = hands.get(hi).getPoints();
                if (pts == null || pts.length < 63) continue;
                float x0 = 1f, y0 = 1f, x1 = 0f, y1 = 0f;
                for (int i = 0; i + 1 < pts.length; i += 3) {
                    float px = pts[i], py = pts[i + 1];
                    if (px < x0) x0 = px;
                    if (py < y0) y0 = py;
                    if (px > x1) x1 = px;
                    if (py > y1) y1 = py;
                }
                handBoxes[hbCount][0] = Math.max(0f, x0 - 0.16f);
                handBoxes[hbCount][1] = Math.max(0f, y0 - 0.16f);
                handBoxes[hbCount][2] = Math.min(1f, x1 + 0.16f);
                handBoxes[hbCount][3] = Math.min(1f, y1 + 0.16f);
                hbCount++;
            }
            retainedHandCount = hbCount;
            lastHandsMs = nowMs;
        } else if (retainedHandCount > 0 && nowMs - lastHandsMs <= 650L) {
            hbCount = retainedHandCount;
        } else {
            retainedHandCount = 0;
        }

        // 2) Blocos 8x8 numa grelha, procura +-2 px à volta do deslocamento global (sub-pixel)
        int nPts = 0;
        for (int by = 10; by <= H - 18; by += 10) {
            for (int bx = 10; bx <= W - 18; bx += 11) {
                float cxn = (bx + 4f) / W;
                float cyn = (by + 4f) / H;
                boolean inHand = false;
                for (int hi = 0; hi < hbCount; hi++) {
                    float[] b = handBoxes[hi];
                    if (cxn > b[0] && cxn < b[2] && cyn > b[1] && cyn < b[3]) {
                        inHand = true;
                        break;
                    }
                }
                if (inHand) continue;

                float tex = 0f;
                for (int y = by; y < by + 8; y++) {
                    int row = y * W;
                    for (int x = bx; x < bx + 7; x++) {
                        tex += Math.abs(P[row + x + 1] - P[row + x]);
                    }
                }
                if (tex < 95f) continue; // sem textura suficiente (parede lisa)

                int si = 0;
                float bs = 1e18f;
                int bdx = 0, bdy = 0;
                for (int oy = -3; oy <= 3; oy++) {
                    for (int ox = -3; ox <= 3; ox++) {
                        int X0 = bx + gx + ox;
                        int Y0 = by + gy + oy;
                        if (X0 < 0 || Y0 < 0 || X0 + 8 > W || Y0 + 8 > H) {
                            sad49[si++] = 1e18f;
                            continue;
                        }
                        float sad = 0f;
                        for (int y = 0; y < 8; y++) {
                            int r = (by + y) * W + bx;
                            int r2 = (Y0 + y) * W + X0;
                            for (int x = 0; x < 8; x++) {
                                sad += Math.abs(g[r2 + x] - P[r + x]);
                            }
                        }
                        sad49[si++] = sad;
                        if (sad < bs) {
                            bs = sad;
                            bdx = ox;
                            bdy = oy;
                        }
                    }
                }
                float fx = 0f, fy = 0f;
                if (Math.abs(bdx) < 3) {
                    float a = sad49[(bdy + 3) * 7 + (bdx - 1 + 3)];
                    float c = sad49[(bdy + 3) * 7 + (bdx + 1 + 3)];
                    float den = a - 2f * bs + c;
                    if (den > 0f && a < 1e17f && c < 1e17f) fx = 0.5f * (a - c) / den;
                }
                if (Math.abs(bdy) < 3) {
                    float a = sad49[(bdy - 1 + 3) * 7 + (bdx + 3)];
                    float c = sad49[(bdy + 1 + 3) * 7 + (bdx + 3)];
                    float den = a - 2f * bs + c;
                    if (den > 0f && a < 1e17f && c < 1e17f) fy = 0.5f * (a - c) / den;
                }
                if (nPts < ptX.length) {
                    ptX[nPts] = bx + 4f - W * 0.5f;
                    ptY[nPts] = by + 4f - H * 0.5f;
                    ptDx[nPts] = gx + bdx + fx;
                    ptDy[nPts] = gy + bdy + fy;
                    nPts++;
                }
            }
        }

        System.arraycopy(g, 0, P, 0, g.length);
        if (nPts < 5) return null;

        // 3) Modelo radial: d = t + s * p (s > 0 = o ambiente aproxima-se = andou para a frente)
        float mx = 0f, my = 0f, px = 0f, py = 0f;
        for (int i = 0; i < nPts; i++) {
            mx += ptDx[i];
            my += ptDy[i];
            px += ptX[i];
            py += ptY[i];
        }
        mx /= nPts;
        my /= nPts;
        px /= nPts;
        py /= nPts;
        float num = 0f, den = 0f;
        for (int i = 0; i < nPts; i++) {
            float X = ptX[i] - px;
            float Y = ptY[i] - py;
            num += (ptDx[i] - mx) * X + (ptDy[i] - my) * Y;
            den += X * X + Y * Y;
        }
        float sc = den > 0f ? num / den : 0f;

        for (int i = 0; i < nPts; i++) {
            float ex = ptDx[i] - mx - sc * (ptX[i] - px);
            float ey = ptDy[i] - my - sc * (ptY[i] - py);
            res[i] = (float) Math.hypot(ex, ey);
            resSorted[i] = res[i];
        }
        Arrays.sort(resSorted, 0, nPts);
        float med = resSorted[nPts >> 1];
        if (med > 1.12f || Math.hypot(gx, gy) > 4.2) return null;
        float limit = Math.max(0.42f, med * 2.15f);

        int goodCount = 0;
        float gmx = 0f, gmy = 0f, gpx = 0f, gpy = 0f;
        for (int i = 0; i < nPts; i++) {
            if (res[i] <= limit) {
                goodIdx[goodCount++] = i;
                gmx += ptDx[i];
                gmy += ptDy[i];
                gpx += ptX[i];
                gpy += ptY[i];
            }
        }
        if (goodCount < 5) return null;
        gmx /= goodCount;
        gmy /= goodCount;
        gpx /= goodCount;
        gpy /= goodCount;
        float gnum = 0f, gden = 0f;
        for (int k = 0; k < goodCount; k++) {
            int i = goodIdx[k];
            float X = ptX[i] - gpx;
            float Y = ptY[i] - gpy;
            gnum += (ptDx[i] - gmx) * X + (ptDy[i] - gmy) * Y;
            gden += X * X + Y * Y;
        }
        float finalSc = gden > 0f ? gnum / gden : 0f;
        if (Math.abs(finalSc) >= 0.0014f && Math.abs(finalSc) <= 0.18f) {
            if (prevValidSc != 0f && (nowMs - prevValidMs) <= 180L && Math.signum(prevValidSc) == Math.signum(finalSc)) {
                finalSc = finalSc * 0.72f + prevValidSc * 0.28f;
            }
            prevValidSc = finalSc;
            prevValidMs = nowMs;
        } else {
            prevValidSc = 0f;
        }
        return new float[]{ finalSc, gx, gy, gmx };
    }
}
