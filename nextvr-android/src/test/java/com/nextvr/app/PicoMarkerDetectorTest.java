package com.nextvr.app;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class PicoMarkerDetectorTest {
  private static final int W = 320;
  private static final int H = 240;

  private static int[] renderMarkerScene(boolean drawFiveRays, boolean drawBottomVertical, boolean drawLetters,
      boolean occludeA, boolean occludeB) {
    int[] px = new int[W * H];
    // Dark background
    for (int i = 0; i < px.length; i++) {
      px[i] = 0xFF1E222A;
    }
    int cx = 160;
    int cy = 120;
    int r = 64;

    for (int y = 0; y < H; y++) {
      for (int x = 0; x < W; x++) {
        float dx = x - cx;
        float dy = y - cy;
        float dist = (float) Math.hypot(dx, dy);
        if (dist <= r + 3) {
          // Outer dark border
          if (dist >= r - 2.5f) {
            px[y * W + x] = 0xFF14181F;
            continue;
          }
          // Bright white paper interior
          px[y * W + x] = 0xFFF2F4F8;

          if (drawFiveRays) {
            // Horizontal middle line (left + right rays)
            if (Math.abs(dy) <= 2.2f) {
              px[y * W + x] = 0xFF14181F;
            }
            // Top vertical line (y < 0)
            if (dy <= 0 && Math.abs(dx) <= 2.2f) {
              px[y * W + x] = 0xFF14181F;
            }
            if (drawBottomVertical) {
              // Invalid 4-quadrant cross: bottom vertical line
              if (dy > 0 && Math.abs(dx) <= 2.2f) {
                px[y * W + x] = 0xFF14181F;
              }
            } else {
              // Valid 5-sector marker: two bottom diagonal lines at ~128° and ~52°
              if (dy > 0) {
                float dLeft = (float) Math.abs(dx * 0.788f + dy * 0.615f);
                float dRight = (float) Math.abs(dx * 0.788f - dy * 0.615f);
                if (dLeft <= 2.2f || dRight <= 2.2f) {
                  px[y * W + x] = 0xFF14181F;
                }
              }
            }
          }

          if (drawLetters) {
            // Letter 'A' in top-left quadrant
            if (Math.hypot(dx - (-r * 0.42f), dy - (-r * 0.40f)) <= 6.0f &&
                Math.hypot(dx - (-r * 0.42f), dy - (-r * 0.40f)) >= 3.2f) {
              px[y * W + x] = 0xFF181C24;
            }
            // Letter 'B' in top-right quadrant
            if (Math.hypot(dx - (r * 0.42f), dy - (-r * 0.40f)) <= 6.0f &&
                Math.hypot(dx - (r * 0.42f), dy - (-r * 0.40f)) >= 3.2f) {
              px[y * W + x] = 0xFF181C24;
            }
          }

          if (occludeA && dx < -r * 0.12f && dy < -r * 0.12f && Math.hypot(dx + r * 0.42f, dy + r * 0.42f) <= r * 0.34f) {
            // Warm skin/finger covering sector A
            px[y * W + x] = 0xFFC88264;
          }
          if (occludeB && dx > r * 0.12f && dy < -r * 0.12f && Math.hypot(dx - r * 0.42f, dy + r * 0.42f) <= r * 0.34f) {
            // Warm skin/finger covering sector B
            px[y * W + x] = 0xFFC88264;
          }
        }
      }
    }
    return px;
  }

  @Test
  public void detectsOnlyTheExactFiveSectorABMarkerDrawing() {
    PicoMarkerDetector detector = new PicoMarkerDetector();

    // 1. Valid 5-sector circular A | B drawing -> DETECTED
    int[] validDrawing = renderMarkerScene(true, false, true, false, false);
    PicoMarkerDetector.Result resValid = detector.detect(validDrawing, W, H, new float[0], 0);
    assertTrue("Exact 5-sector circular A|B drawing must be detected", resValid.detected);
    assertTrue("Confidence must be >= 0.72", resValid.confidence >= 0.72f);
    assertFalse("Untouched A must be false", resValid.buttonA);
    assertFalse("Untouched B must be false", resValid.buttonB);

    // 2. Plain white circle without the 5-ray partition -> REJECTED
    PicoMarkerDetector detectorPlain = new PicoMarkerDetector();
    int[] plainCircle = renderMarkerScene(false, false, false, false, false);
    PicoMarkerDetector.Result resPlain = detectorPlain.detect(plainCircle, W, H, new float[0], 0);
    assertFalse("Plain white circle without 5-sector A|B lines must be rejected", resPlain.detected);

    // 3. 4-quadrant cross with bottom vertical line -> REJECTED
    PicoMarkerDetector detectorCross = new PicoMarkerDetector();
    int[] crossCircle = renderMarkerScene(true, true, true, false, false);
    PicoMarkerDetector.Result resCross = detectorCross.detect(crossCircle, W, H, new float[0], 0);
    assertFalse("4-quadrant cross with bottom vertical line must be rejected", resCross.detected);
  }

  @Test
  public void detectsButtonAToChooseAndButtonBToExitViaFingertipOrTouch() {
    PicoMarkerDetector detector = new PicoMarkerDetector();
    int[] validDrawing = renderMarkerScene(true, false, true, false, false);

    // Fingertip touching top-left 'A' quadrant (choosing an option)
    float tipAx = (160f - 28f) / W;
    float tipAy = (120f - 26f) / H;
    PicoMarkerDetector.Result resTouchA = detector.detect(validDrawing, W, H, new float[]{tipAx, tipAy}, 1);
    assertTrue("Marker must remain detected when touching A", resTouchA.detected);
    assertTrue("Touching top-left A quadrant must trigger buttonA", resTouchA.buttonA);
    assertFalse("Touching A must not trigger buttonB", resTouchA.buttonB);

    // Fingertip touching top-right 'B' quadrant (exiting a game)
    float tipBx = (160f + 28f) / W;
    float tipBy = (120f - 26f) / H;
    PicoMarkerDetector.Result resTouchB = detector.detect(validDrawing, W, H, new float[]{tipBx, tipBy}, 1);
    assertTrue("Marker must remain detected when touching B", resTouchB.detected);
    assertFalse("Touching B must not trigger buttonA", resTouchB.buttonA);
    assertTrue("Touching top-right B quadrant must trigger buttonB", resTouchB.buttonB);
  }
}
