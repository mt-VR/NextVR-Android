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

    private final float[] bufA = new float[W * H];
    private final float[] bufB = new float[W * H];
    private final float[] keyframe = new float[W * H];
    private boolean useBufB = false;
    private boolean hasPrev = false;
    private boolean hasKeyframe = false;
    private int cachedW = -1, cachedH = -1;
    private final int[] row0Off = new int[H];
    private final int[] row1Off = new int[H];
    private final int[] col0Off = new int[W];
    private final int[] col1Off = new int[W];
    private final float[] globalSad = new float[225];
    private final float[] sad49 = new float[49];
    private final boolean[] sad49Full = new boolean[49];
    private final float[] ptX = new float[64];
    private final float[] ptY = new float[64];
    private final float[] ptDx = new float[64];
    private final float[] ptDy = new float[64];
    private final float[] ptW = new float[64];
    private final float[] res = new float[64];
    private final float[] resSorted = new float[64];
    private final int[] goodIdx = new int[64];
    private final float[][] handBoxes = new float[4][4];
    private final float[] outFlow = new float[5];
    private int retainedHandCount = 0;
    private long lastHandsMs = 0L;
    private long lastMs = 0L;
    private float prevValidSc = 0f;
    private long prevValidMs = 0L;
    private boolean worldLocked = true;
    private int stationaryFrames = 0;

    public synchronized void reset() {
        hasPrev = false;
        hasKeyframe = false;
        useBufB = false;
        lastMs = 0L;
        retainedHandCount = 0;
        lastHandsMs = 0L;
        prevValidSc = 0f;
        prevValidMs = 0L;
        worldLocked = true;
        stationaryFrames = 0;
    }

    private static float blockSad8x8(float[] cur, float[] ref, int bx, int by, int X0, int Y0, float cutoff) {
        float sad = 0f;
        for (int y = 0; y < 8; y++) {
            int r = (by + y) * W + bx;
            int r2 = (Y0 + y) * W + X0;
            sad += Math.abs(cur[r2] - ref[r])
                + Math.abs(cur[r2 + 1] - ref[r + 1])
                + Math.abs(cur[r2 + 2] - ref[r + 2])
                + Math.abs(cur[r2 + 3] - ref[r + 3])
                + Math.abs(cur[r2 + 4] - ref[r + 4])
                + Math.abs(cur[r2 + 5] - ref[r + 5])
                + Math.abs(cur[r2 + 6] - ref[r + 6])
                + Math.abs(cur[r2 + 7] - ref[r + 7]);
            if (sad >= cutoff) return sad;
        }
        return sad;
    }

    /**
     * Processa um frame ARGB upright (outW x outH) com World Lock e otimização de CPU/memória (zero alocações).
     * Retorna { sc, gx, gy, gmx, worldLocked } se um modelo radial válido foi estimado, ou null caso contrário.
     */
    public synchronized float[] onCameraFrame(
            int[] cameraPixels,
            int outW,
            int outH,
            PhoneXrHands.Frame handsFrame,
            long nowMs) {
        if (cameraPixels == null || outW < W || outH < H) return null;
        if (lastMs != 0L && nowMs - lastMs < 14L) return null;
        lastMs = nowMs;

        if (outW != cachedW || outH != cachedH) {
            cachedW = outW;
            cachedH = outH;
            for (int y = 0; y < H; y++) {
                int sy0 = (y * outH) / H;
                int sy1 = Math.min(outH - 1, sy0 + 2);
                row0Off[y] = sy0 * outW;
                row1Off[y] = sy1 * outW;
            }
            for (int x = 0; x < W; x++) {
                int sx0 = (x * outW) / W;
                col0Off[x] = sx0;
                col1Off[x] = Math.min(outW - 1, sx0 + 2);
            }
        }

        final float[] g = useBufB ? bufB : bufA;
        final float[] P = useBufB ? bufA : bufB;
        useBufB = !useBufB;

        // Downsampling 2x2 pré-indexado com filtro de caixa em luminância (zero divisões no loop interno)
        for (int y = 0; y < H; y++) {
            int row0 = row0Off[y];
            int row1 = row1Off[y];
            int dstRow = y * W;
            for (int x = 0; x < W; x++) {
                int sx0 = col0Off[x];
                int sx1 = col1Off[x];
                int p00 = cameraPixels[row0 + sx0];
                int p01 = cameraPixels[row0 + sx1];
                int p10 = cameraPixels[row1 + sx0];
                int p11 = cameraPixels[row1 + sx1];
                int r = ((p00 >> 16) & 0xff) + ((p01 >> 16) & 0xff) + ((p10 >> 16) & 0xff) + ((p11 >> 16) & 0xff);
                int gr = ((p00 >> 8) & 0xff) + ((p01 >> 8) & 0xff) + ((p10 >> 8) & 0xff) + ((p11 >> 8) & 0xff);
                int b = (p00 & 0xff) + (p01 & 0xff) + (p10 & 0xff) + (p11 & 0xff);
                g[dstRow + x] = (r * 77 + gr * 150 + b * 29) * 0.00390625f * 0.25f;
            }
        }

        if (!hasPrev) {
            hasPrev = true;
            System.arraycopy(g, 0, keyframe, 0, g.length);
            hasKeyframe = true;
            return null;
        }

        // 1) Deslocamento global (rotação da cabeça) na zona central (+-7 px) com refinamento sub-pixel
        float best = 1e18f;
        int gx = 0, gy = 0;
        int gsi = 0;
        for (int oy = -7; oy <= 7; oy++) {
            for (int ox = -7; ox <= 7; ox++) {
                float sad = 0f;
                for (int y = 22; y < 50; y += 2) {
                    int r = y * W;
                    int r2 = (y + oy) * W + ox;
                    for (int x = 30; x < 66; x += 2) {
                        sad += Math.abs(g[r2 + x] - P[r + x]);
                    }
                }
                globalSad[gsi++] = sad;
                if (sad < best) {
                    best = sad;
                    gx = ox;
                    gy = oy;
                }
            }
        }
        float gxSub = gx, gySub = gy;
        if (Math.abs(gx) < 7) {
            float a = globalSad[(gy + 7) * 15 + (gx - 1 + 7)];
            float c = globalSad[(gy + 7) * 15 + (gx + 1 + 7)];
            float den = a - 2f * best + c;
            if (den > 0f) gxSub = gx + 0.5f * (a - c) / den;
        }
        if (Math.abs(gy) < 7) {
            float a = globalSad[(gy - 1 + 7) * 15 + (gx + 7)];
            float c = globalSad[(gy + 1 + 7) * 15 + (gx + 7)];
            float den = a - 2f * best + c;
            if (den > 0f) gySub = gy + 0.5f * (a - c) / den;
        }

        // Caixas das mãos (handBoxes +-0.16) com retenção de 650 ms
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

        // 2) Blocos 8x8 numa grelha com early-bailout SAD sem perda e refinamento parabólico sub-pixel
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
                for (int y = by; y < by + 7; y++) {
                    int row = y * W;
                    int nextRow = (y + 1) * W;
                    for (int x = bx; x < bx + 7; x++) {
                        tex += Math.abs(P[row + x + 1] - P[row + x]) + Math.abs(P[nextRow + x] - P[row + x]);
                    }
                }
                if (tex < 140f) continue;

                // Avalia (0,0) primeiro para estabelecer uma cota superior apertada (bs) para early bailout
                float bs = 1e18f;
                int bdx = 0, bdy = 0;
                int cX0 = bx + gx, cY0 = by + gy;
                if (cX0 >= 0 && cY0 >= 0 && cX0 + 8 <= W && cY0 + 8 <= H) {
                    bs = blockSad8x8(g, P, bx, by, cX0, cY0, 1e18f);
                    sad49[24] = bs;
                    sad49Full[24] = true;
                } else {
                    sad49[24] = 1e18f;
                    sad49Full[24] = true;
                }

                int si = 0;
                for (int oy = -3; oy <= 3; oy++) {
                    for (int ox = -3; ox <= 3; ox++, si++) {
                        if (ox == 0 && oy == 0) continue;
                        int X0 = bx + gx + ox;
                        int Y0 = by + gy + oy;
                        if (X0 < 0 || Y0 < 0 || X0 + 8 > W || Y0 + 8 > H) {
                            sad49[si] = 1e18f;
                            sad49Full[si] = true;
                            continue;
                        }
                        float sad = blockSad8x8(g, P, bx, by, X0, Y0, bs);
                        sad49[si] = sad;
                        if (sad < bs) {
                            bs = sad;
                            bdx = ox;
                            bdy = oy;
                            sad49Full[si] = true;
                        } else {
                            sad49Full[si] = false;
                        }
                    }
                }
                float fx = 0f, fy = 0f;
                if (Math.abs(bdx) < 3) {
                    int idxL = (bdy + 3) * 7 + (bdx - 1 + 3);
                    int idxR = (bdy + 3) * 7 + (bdx + 1 + 3);
                    if (!sad49Full[idxL]) sad49[idxL] = blockSad8x8(g, P, bx, by, bx + gx + bdx - 1, by + gy + bdy, 1e18f);
                    if (!sad49Full[idxR]) sad49[idxR] = blockSad8x8(g, P, bx, by, bx + gx + bdx + 1, by + gy + bdy, 1e18f);
                    float a = sad49[idxL], c = sad49[idxR];
                    float den = a - 2f * bs + c;
                    if (den > 0f && a < 1e17f && c < 1e17f) fx = 0.5f * (a - c) / den;
                }
                if (Math.abs(bdy) < 3) {
                    int idxU = (bdy - 1 + 3) * 7 + (bdx + 3);
                    int idxD = (bdy + 1 + 3) * 7 + (bdx + 3);
                    if (!sad49Full[idxU]) sad49[idxU] = blockSad8x8(g, P, bx, by, bx + gx + bdx, by + gy + bdy - 1, 1e18f);
                    if (!sad49Full[idxD]) sad49[idxD] = blockSad8x8(g, P, bx, by, bx + gx + bdx, by + gy + bdy + 1, 1e18f);
                    float a = sad49[idxU], c = sad49[idxD];
                    float den = a - 2f * bs + c;
                    if (den > 0f && a < 1e17f && c < 1e17f) fy = 0.5f * (a - c) / den;
                }
                if (nPts < ptX.length) {
                    ptX[nPts] = bx + 4f - W * 0.5f;
                    ptY[nPts] = by + 4f - H * 0.5f;
                    ptDx[nPts] = gx + bdx + fx;
                    ptDy[nPts] = gy + bdy + fy;
                    ptW[nPts] = Math.min(3.0f, tex / 210f);
                    nPts++;
                }
            }
        }

        if (nPts < 8) {
            prevValidSc = 0f;
            worldLocked = true;
            return null;
        }

        // 3) Modelo radial ponderado por contraste (IRLS): d = t + s * p
        float mx = 0f, my = 0f, px = 0f, py = 0f, wSum0 = 0f;
        for (int i = 0; i < nPts; i++) {
            float w = ptW[i];
            mx += ptDx[i] * w;
            my += ptDy[i] * w;
            px += ptX[i] * w;
            py += ptY[i] * w;
            wSum0 += w;
        }
        if (wSum0 <= 1e-5f) return null;
        mx /= wSum0;
        my /= wSum0;
        px /= wSum0;
        py /= wSum0;
        float num = 0f, den = 0f;
        for (int i = 0; i < nPts; i++) {
            float w = ptW[i];
            float X = ptX[i] - px;
            float Y = ptY[i] - py;
            num += w * ((ptDx[i] - mx) * X + (ptDy[i] - my) * Y);
            den += w * (X * X + Y * Y);
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
        if (med > 0.95f || Math.hypot(gxSub, gySub) > 2.8) {
            prevValidSc = 0f;
            worldLocked = true;
            return null;
        }
        float limit = Math.max(0.35f, med * 1.9f);

        int goodCount = 0;
        float gmx = 0f, gmy = 0f, gpx = 0f, gpy = 0f, gwSum = 0f;
        for (int i = 0; i < nPts; i++) {
            if (res[i] <= limit) {
                goodIdx[goodCount++] = i;
                float w = ptW[i] / (0.14f + res[i]);
                ptW[i] = w;
                gmx += ptDx[i] * w;
                gmy += ptDy[i] * w;
                gpx += ptX[i] * w;
                gpy += ptY[i] * w;
                gwSum += w;
            }
        }
        if (goodCount < 6 || goodCount < (nPts * 60) / 100 || gwSum <= 1e-5f) {
            prevValidSc = 0f;
            worldLocked = true;
            return null;
        }
        gmx /= gwSum;
        gmy /= gwSum;
        gpx /= gwSum;
        gpy /= gwSum;
        float gnum = 0f, gden = 0f;
        int posRadial = 0, negRadial = 0;
        for (int k = 0; k < goodCount; k++) {
            int i = goodIdx[k];
            float w = ptW[i];
            float X = ptX[i] - gpx;
            float Y = ptY[i] - gpy;
            float dot = (ptDx[i] - gmx) * X + (ptDy[i] - gmy) * Y;
            if (dot > 0.35f) posRadial++;
            else if (dot < -0.35f) negRadial++;
            gnum += w * dot;
            gden += w * (X * X + Y * Y);
        }
        float finalSc = gden > 0f ? gnum / gden : 0f;
        int radialAgree = finalSc >= 0f ? posRadial : negRadial;

        // World Lock rápido e preciso: exige consenso radial real com resposta imediata no frame 1
        // World Lock precisa de consenso radial forte: ruído de câmera não pode virar passo.
        boolean significantFlow = Math.abs(finalSc) >= 0.0045f && Math.abs(finalSc) <= 0.10f && radialAgree >= 6;
        if (significantFlow && Math.hypot(gxSub, gySub) <= 2.0f) {
            stationaryFrames = 0;
            worldLocked = false;
            if (prevValidSc != 0f && (nowMs - prevValidMs) <= 260L && Math.signum(prevValidSc) == Math.signum(finalSc)) {
                finalSc = finalSc * 0.78f + prevValidSc * 0.22f;
            }
            prevValidSc = finalSc;
            prevValidMs = nowMs;
        } else {
            finalSc = 0f;
            prevValidSc = 0f;
            stationaryFrames++;
            worldLocked = true;
            if (stationaryFrames >= 2) {
                System.arraycopy(g, 0, keyframe, 0, g.length);
                hasKeyframe = true;
            }
        }

        outFlow[0] = finalSc;
        outFlow[1] = gxSub;
        outFlow[2] = gySub;
        outFlow[3] = gxSub;
        outFlow[4] = worldLocked ? 1f : 0f;
        return outFlow;
    }
}
