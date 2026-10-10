package com.samrat.orangehanding

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * The cost model this policy exists to exploit (host, the shipped model, one pinned core):
 * one hand tracked costs 11.8 ms with a single slot and 29.1 ms with two, while an empty frame costs
 * 17.6 vs 15.5 ms - so the second slot is free only while nothing is being tracked.
 */
class HandSlotPolicyTest {
    private fun policy(probeMs: Long = 150) = HandSlotPolicy(probeMs)

    @Test fun nothingTrackedKeepsSearchingBothSlots() {
        val p = policy()
        repeat(5) { assertEquals(2, p.slotsFor(33L * it, 0)) }
    }

    @Test fun oneHandStopsPayingForTheSecondSlot() {
        val p = policy()
        assertEquals(2, p.slotsFor(0, 0))          // first frame: nothing tracked yet
        assertEquals(1, p.slotsFor(33, 1))         // the wide frame proved slot two is idle
        repeat(4) { assertEquals(1, p.slotsFor(33L * (it + 2), 1)) }
    }

    @Test fun narrowStretchReChecksForASecondHandOnTheProbeInterval() {
        val p = policy(probeMs = 150)
        p.slotsFor(0, 0)
        val slots = (1..10).map { p.slotsFor(33L * it, 1) }
        assertEquals("one probe per 150 ms of narrow tracking", listOf(1, 1, 1, 1, 1, 2, 1, 1, 1, 1), slots)
        assertEquals(1, p.probes())
    }

    @Test fun aProbeThatFindsNothingKeepsTheNarrowRate() {
        val p = policy(probeMs = 100)
        assertEquals(2, p.slotsFor(0, 0))            // nothing tracked: wide
        assertEquals(1, p.slotsFor(10, 1))           // a wide frame saw one hand: narrow, clock starts
        assertEquals(2, p.slotsFor(110, 1))          // one interval later: the probe
        assertEquals(1, p.slotsFor(120, 1))          // probe found one hand: narrow continues
        assertEquals(2, p.slotsFor(210, 1))          // and the probe period is not stretched by probes
        assertEquals(1, p.slotsFor(215, 1))
        assertEquals(2, p.slotsFor(310, 1))
    }

    @Test fun twoHandsStayWideAndDoNotFlap() {
        val p = policy()
        p.slotsFor(0, 0)
        repeat(8) { assertEquals(2, p.slotsFor(33L * (it + 1), 2)) }
        assertTrue(p.lastWasWide())
    }

    @Test fun losingTheHandGoesBackToWideImmediately() {
        val p = policy()
        p.slotsFor(0, 0)
        repeat(20) { p.slotsFor(33L * (it + 1), 1) }
        assertTrue(p.lastWasWide().not())
        assertEquals(2, p.slotsFor(700, 0))
        assertEquals(2, p.slotsFor(733, 0))
    }

    @Test fun countersSeparateCheapFramesFromProbes() {
        val p = policy(probeMs = 150)
        p.slotsFor(0, 0)
        repeat(10) { p.slotsFor(33L * (it + 1), 1) }
        assertEquals(9, p.narrowFrames())
        assertEquals(2, p.wideFrames())             // the first frame and one probe
        assertEquals(1, p.probes())
        p.reset()
        assertEquals(0, p.narrowFrames())
        assertTrue(p.lastWasWide())
    }
}
