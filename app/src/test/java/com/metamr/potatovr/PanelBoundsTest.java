package com.metamr.potatovr;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class PanelBoundsTest {

    @Test
    public void mapsCssRectToPhysicalViewPixelsUsingViewport() {
        String json = "{\"left\":100,\"top\":50,\"width\":400,\"height\":250,\"vw\":800,\"vh\":400,\"vrSplit\":false}";
        PanelBounds b = PanelBounds.fromJson(json, 2400, 1200, 2.5f);

        assertTrue(b.visible);
        assertEquals(300, b.leftPx);
        assertEquals(150, b.topPx);
        assertEquals(1200, b.widthPx);
        assertEquals(750, b.heightPx);
        assertEquals(3.0f, b.scaleX, 0.001f);
        assertEquals(3.0f, b.scaleY, 0.001f);
    }

    @Test
    public void clampsToLeftHalfInCardboardVrSplitMode() {
        String json = "{\"left\":200,\"top\":20,\"width\":360,\"height\":200,\"vw\":800,\"vh\":400,\"vrSplit\":true}";
        PanelBounds b = PanelBounds.fromJson(json, 2400, 1200, 3.0f);

        assertTrue(b.visible);
        assertEquals(600, b.leftPx);
        // Right edge is clamped at hostWidth / 2 == 1200, so width == 600.
        assertEquals(600, b.widthPx);
    }

    @Test
    public void marksOffscreenOrTinyPanelsInvisible() {
        String offscreen = "{\"left\":-900,\"top\":20,\"width\":400,\"height\":200,\"vw\":800,\"vh\":400}";
        assertFalse(PanelBounds.fromJson(offscreen, 1600, 800, 2.0f).visible);

        assertFalse(PanelBounds.fromJson("{}", 1600, 800, 2.0f).visible);
        assertFalse(PanelBounds.fromJson(null, 1600, 800, 2.0f).visible);
    }

    @Test
    public void convertsLocalCssTapCoordinatesIntoClampedViewCoordinates() {
        String json = "{\"left\":50,\"top\":30,\"width\":300,\"height\":200,\"vw\":600,\"vh\":400}";
        PanelBounds b = PanelBounds.fromJson(json, 1200, 800, 2.0f);

        assertEquals(240f, b.toViewLocalX(120.0), 0.01f);
        assertEquals(160f, b.toViewLocalY(80.0), 0.01f);
        assertEquals(599f, b.toViewLocalX(9999.0), 0.01f);
        assertEquals(0f, b.toViewLocalX(-50.0), 0.01f);
    }
}
