package com.nextvr.cardboard;

import org.junit.Test;
import static org.junit.Assert.*;

public class TrackingBudgetTest {
    @Test public void startsAtReferenceResolutionAndDoesNotImposeAFrameRateLimit() {
        TrackingBudget b = new TrackingBudget();
        assertEquals(640, b.width());
        // Admission is single-flight in PassthroughCamera, not time-gated by this policy: a fast
        // tracker must not be slowed down by it, only the input size may change.
        for (int i = 0; i < 200; i++) b.completed(12);
        assertEquals(640, b.width());
        assertEquals(0, b.step());
    }

    @Test public void oneSlowFrameIsNotSustainedLoad() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 5; i++) b.completed(180);
        assertEquals("must not step down before the pressure window closes", 640, b.width());
        b.completed(180);
        assertEquals(512, b.width());
    }

    @Test public void stepsDownOneLevelAtATimeAndStopsAtTheMeasuredFloor() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 6; i++) b.completed(180);
        assertEquals(512, b.width());
        for (int i = 0; i < 6; i++) b.completed(180);
        assertEquals(448, b.width());
        for (int i = 0; i < 60; i++) b.completed(180);
        assertEquals("448 px is where landmark precision starts to degrade", 448, b.width());
        assertEquals(2, b.step());
    }

    @Test public void recoversOneStepAtATimeOnlyAfterSustainedHeadroom() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 12; i++) b.completed(180);
        assertEquals(448, b.width());
        int frames = 0;
        while (b.width() == 448 && frames < 400) { b.completed(20); frames++; }
        assertEquals(512, b.width());
        assertTrue("the relief window must be paid for, not skipped: " + frames, frames > 90 && frames < 120);
        for (int i = 0; i < 100; i++) b.completed(20);
        assertEquals(640, b.width());
        b.reset();
        assertEquals(640, b.width());
    }

    @Test public void aHeadroomReadingBetweenTheThresholdsFreezesTheCurrentStep() {
        TrackingBudget b = new TrackingBudget();
        for (int i = 0; i < 6; i++) b.completed(180);
        assertEquals(512, b.width());
        for (int i = 0; i < 500; i++) b.completed(35);   // between RELIEF_MS and PRESSURE_MS
        assertEquals("hysteresis band: neither worse nor better", 512, b.width());
    }
}
