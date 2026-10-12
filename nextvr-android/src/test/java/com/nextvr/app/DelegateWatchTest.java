package com.nextvr.app;

import org.junit.Test;
import static org.junit.Assert.*;

/**
 * The guard that decides when a GPU delegate is too contended (cost) or not doing the work at all
 * (output). Most cases below drive the timing rule on its own - a zero warm-up window and a disabled
 * output audit - while the last group drives the output audit; the shipped defaults are the union of
 * both and are exercised in the same way by "the first results after a graph is built".
 */
public class DelegateWatchTest {
    /** The timing rule on its own: no warm-up window, no output audit. */
    private static DelegateWatch watch(double budgetMs, int patience) {
        return new DelegateWatch(budgetMs, patience, 0, 0);
    }

    @Test public void aSingleSpikeIsNotATrend() {
        DelegateWatch w = watch(20, 4);
        assertFalse(w.shouldDrop(60));
        assertFalse(w.shouldDrop(5));
        assertFalse(w.shouldDrop(5));
        assertFalse("the spike is gone from the mean before patience runs out", w.fired());
    }

    @Test public void sustainedContendedInferenceAbandonsTheDelegate() {
        DelegateWatch w = watch(20, 4);
        assertFalse(w.shouldDrop(60));
        assertFalse(w.shouldDrop(60));
        assertFalse(w.shouldDrop(60));
        assertTrue(w.shouldDrop(60));
        assertTrue("the decision latches: the caller must not re-try the GPU every frame", w.fired());
    }

    @Test public void aRecoveredStreamResetsTheCount() {
        DelegateWatch w = watch(20, 4);
        for (int i = 0; i < 3; i++) w.shouldDrop(60);
        for (int i = 0; i < 40; i++) w.shouldDrop(5);
        assertFalse(w.fired());
        for (int i = 0; i < 3; i++) assertFalse(w.shouldDrop(5));
        // The mean is back below the budget, so a fresh burst has to earn the whole patience window.
        for (int i = 0; i < 3; i++) assertFalse("burst #" + i, w.shouldDrop(100));
        assertTrue(w.shouldDrop(100));
    }

    @Test public void resetClearsTheMean() {
        DelegateWatch w = watch(20, 4);
        w.shouldDrop(600);
        assertTrue(w.averageMs() > 0);
        w.reset();
        assertEquals(-1, w.averageMs(), 0.001);
    }

    @Test public void theFirstResultsAfterAGraphIsBuiltDoNotJudgeIt() {
        // A GPU graph's first frames compile shaders: they can be hundreds of milliseconds each, and
        // one of them inside the mean makes a healthy delegate look contended for ~10 results.
        DelegateWatch w = new DelegateWatch(55, 12, 10, 0);
        for (int i = 0; i < 10; i++) assertFalse("warm-up result #" + i, w.shouldDrop(900));
        assertEquals("warm-up results do not enter the mean", -1, w.averageMs(), 0.001);
        // From here the rule is live again: a real slow burst still fires.
        for (int i = 0; i < 11; i++) assertFalse("live result #" + i, w.shouldDrop(200));
        assertTrue(w.shouldDrop(200));
    }

    @Test public void rebuiltStartsAFreshWindow() {
        DelegateWatch w = new DelegateWatch(20, 4, 10, 0);
        for (int i = 0; i < 14; i++) w.shouldDrop(200);
        assertTrue(w.fired());
        w.rebuilt();
        assertFalse("a new graph gets its own verdict", w.fired());
        assertEquals(-1, w.averageMs(), 0.001);
        for (int i = 0; i < 10; i++) w.shouldDrop(200);      // its warm-up again
        for (int i = 0; i < 3; i++) assertFalse("burst #" + i, w.shouldDrop(200));
        assertTrue("the new graph has to earn the patience window too", w.shouldDrop(200));
    }

    @Test public void aSilentFastDelegateIsCaught() {
        // The mid-range-Android failure: the GPU delegate constructs, answers in ~1 ms and returns
        // nothing, forever. It is not slow - it is not running the graph.
        DelegateWatch w = new DelegateWatch(55, 12, 0, 60);
        for (int i = 0; i < 59; i++) assertFalse("empty result #" + i, w.noOutput(1, 0));
        assertTrue(w.noOutput(1, 0));
        assertTrue(w.noOutputFired());
        assertEquals(1.0, w.emptyMeanMs(), 0.001);
    }

    @Test public void aSlowEmptyRunIsNotABrokenDelegate() {
        // No hand in front of the camera is the normal case, and a real palm search still costs real
        // time: 40 ms of empty results is an empty room, not a dead graph.
        DelegateWatch w = new DelegateWatch(55, 12, 0, 60);
        for (int i = 0; i < 600; i++) assertFalse(w.noOutput(40, 0));
        assertFalse(w.noOutputFired());
    }

    @Test public void oneHandEverResetsTheAuditForGood() {
        DelegateWatch w = new DelegateWatch(55, 12, 0, 60);
        w.noOutput(1, 1);                                     // a hand was seen: the delegate works
        for (int i = 0; i < 600; i++) assertFalse(w.noOutput(1, 0));
        assertFalse(w.noOutputFired());
    }

    @Test public void aRebuiltGraphForgetsTheOldAudit() {
        DelegateWatch w = new DelegateWatch(55, 12, 0, 60);
        for (int i = 0; i < 60; i++) w.noOutput(1, 0);
        assertTrue(w.noOutputFired());
        w.rebuilt();
        assertFalse(w.noOutputFired());
        assertEquals(-1, w.emptyMeanMs(), 0.001);
    }

    @Test public void theOutputAuditCanBeDisabled() {
        DelegateWatch w = watch(20, 4);
        for (int i = 0; i < 500; i++) assertFalse(w.noOutput(1, 0));
        assertFalse(w.noOutputFired());
    }

    @Test(expected = IllegalArgumentException.class) public void rejectsAnInvalidBudget() {
        watch(0, 4);
    }

    @Test(expected = IllegalArgumentException.class) public void rejectsANegativeWarmup() {
        new DelegateWatch(20, 4, -1, 0);
    }
}
