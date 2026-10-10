package com.nextvr.cardboard;

import org.junit.Test;
import static org.junit.Assert.*;

/** The guard that decides when a GPU delegate is too contended to keep using. */
public class DelegateWatchTest {
    @Test public void aSingleSpikeIsNotATrend() {
        DelegateWatch w = new DelegateWatch(20, 4);
        assertFalse(w.shouldDrop(60));
        assertFalse(w.shouldDrop(5));
        assertFalse(w.shouldDrop(5));
        assertFalse("the spike is gone from the mean before patience runs out", w.fired());
    }

    @Test public void sustainedContendedInferenceAbandonsTheDelegate() {
        DelegateWatch w = new DelegateWatch(20, 4);
        assertFalse(w.shouldDrop(60));
        assertFalse(w.shouldDrop(60));
        assertFalse(w.shouldDrop(60));
        assertTrue(w.shouldDrop(60));
        assertTrue("the decision latches: the caller must not re-try the GPU every frame", w.fired());
    }

    @Test public void aRecoveredStreamResetsTheCount() {
        DelegateWatch w = new DelegateWatch(20, 4);
        for (int i = 0; i < 3; i++) w.shouldDrop(60);
        for (int i = 0; i < 40; i++) w.shouldDrop(5);
        assertFalse(w.fired());
        for (int i = 0; i < 3; i++) assertFalse(w.shouldDrop(5));
        // The mean is back below the budget, so a fresh burst has to earn the whole patience window.
        for (int i = 0; i < 3; i++) assertFalse("burst #" + i, w.shouldDrop(100));
        assertTrue(w.shouldDrop(100));
    }

    @Test public void resetClearsTheMean() {
        DelegateWatch w = new DelegateWatch(20, 4);
        w.shouldDrop(600);
        assertTrue(w.averageMs() > 0);
        w.reset();
        assertEquals(-1, w.averageMs(), 0.001);
    }

    @Test(expected = IllegalArgumentException.class) public void rejectsAnInvalidBudget() {
        new DelegateWatch(0, 4);
    }
}
