package com.nextvr.app;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class AnalysisGateTest {
    @Test
    public void emptySlotAlwaysProduces() {
        AnalysisGate gate = new AnalysisGate(AnalysisGate.DEFAULT_MAX_PENDING_AGE_MS);
        assertTrue(gate.shouldProduce(0L, -1L));
        assertTrue(gate.shouldProduce(1000L, -1L));
    }

    @Test
    public void freshPendingFrameMakesANewCopyRedundant() {
        AnalysisGate gate = new AnalysisGate(40L);
        // One 30 fps camera period after the pending frame: the tracker will analyse that one.
        assertFalse(gate.shouldProduce(1033L, 1000L));
        assertFalse(gate.shouldProduce(1040L, 1000L));
    }

    @Test
    public void stalePendingFrameIsReplacedInsteadOfKept() {
        AnalysisGate gate = new AnalysisGate(40L);
        // Two periods old: waiting longer would cost more staleness than the resample saves.
        assertTrue(gate.shouldProduce(1067L, 1000L));
        assertTrue(gate.shouldProduce(2000L, 1000L));
    }

    @Test
    public void zeroGateKeepsTheOldEveryFrameBehaviour() {
        AnalysisGate gate = new AnalysisGate(0L);
        assertTrue(gate.shouldProduce(1001L, 1000L));
        assertFalse(gate.shouldProduce(1000L, 1000L));
    }

    @Test(expected = IllegalArgumentException.class)
    public void negativeGateIsRejected() {
        new AnalysisGate(-1L);
    }
}
