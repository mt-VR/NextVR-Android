package com.nextvr.app;

import org.junit.Test;
import static org.junit.Assert.*;

public class TrackingBudgetTest {
    @Test public void startsAtReferenceResolutionAndDoesNotImposeAFrameRateLimit() {
        TrackingBudget b = new TrackingBudget();
        assertEquals(320, b.width());
        // Admission is single-flight in PassthroughCamera, not time-gated by this policy: a fast
        // tracker must not be slowed down by it, only the input size may change.
        for (int i = 0; i < 200; i++) b.completed(1);
        assertEquals(320, b.width());
        assertEquals(0, b.step());
    }

    @Test public void keepsTheCameraAspectRatioForTheAnalysisFrame() {
        TrackingBudget b = new TrackingBudget();
        assertEquals(240, b.height(640, 480));
        assertEquals(180, b.height(1280, 720));
    }

    @Test public void oneSlowFrameIsNotSustainedLoad() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 5; i++) b.completed(60);
        assertEquals("must not step down before the pressure window closes", 320, b.width());
        b.completed(60);
        assertEquals(240, b.width());
    }

    @Test public void stopsAtTheFloorAndRecoversOnlyAfterSustainedHeadroom() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 60; i++) b.completed(60);
        assertEquals("240 px is the floor", 240, b.width());
        assertEquals(1, b.step());
        int frames = 0;
        while (b.width() == 240 && frames < 400) { b.completed(1); frames++; }
        assertEquals(320, b.width());
        assertTrue("the relief window must be paid for, not skipped: " + frames, frames > 90 && frames < 120);
        b.reset();
        assertEquals(320, b.width());
        assertEquals(0, b.step());
    }

    @Test public void aReadingBetweenTheThresholdsFreezesTheCurrentStep() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 6; i++) b.completed(60);
        assertEquals(240, b.width());
        for (int i = 0; i < 500; i++) b.completed(6);   // between RELIEF_MS and PRESSURE_MS
        assertEquals("hysteresis band: neither worse nor better", 240, b.width());
    }
}
