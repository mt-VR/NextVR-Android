package com.nextvr.app.xr;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class XrRenderQualityTest {
    @Test public void qualityScaleChangesPixelsButNotTheGameLogicalViewport() {
        int[] performance = XrRenderQuality.canvas(1920, 1080, XrRenderQuality.PERFORMANCE);
        int[] balanced = XrRenderQuality.canvas(1920, 1080, XrRenderQuality.BALANCED);
        int[] high = XrRenderQuality.canvas(1920, 1080, XrRenderQuality.HIGH);

        assertArrayEquals(new int[]{1248, 702}, performance);
        assertArrayEquals(new int[]{1574, 886}, balanced);
        assertArrayEquals(new int[]{1920, 1080}, high);
        assertTrue(Math.abs((float) performance[0] / performance[1] - 16f / 9f) < .002f);
        assertTrue(Math.abs((float) balanced[0] / balanced[1] - 16f / 9f) < .002f);
    }

    @Test public void densityTracksResolutionAndUnknownQualityUsesBalanced() {
        assertEquals(286, XrRenderQuality.density(440, XrRenderQuality.PERFORMANCE));
        assertEquals(361, XrRenderQuality.density(440, XrRenderQuality.BALANCED));
        assertEquals(440, XrRenderQuality.density(440, XrRenderQuality.HIGH));
        assertEquals(160, XrRenderQuality.density(200, XrRenderQuality.PERFORMANCE));
        assertArrayEquals(new int[]{1574, 886}, XrRenderQuality.canvas(1920, 1080, "unknown"));
        assertEquals(XrRenderQuality.BALANCED, XrRenderQuality.normalize("unknown"));
    }
}
