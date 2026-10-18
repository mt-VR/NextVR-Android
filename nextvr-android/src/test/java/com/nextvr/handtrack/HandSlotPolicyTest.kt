package com.nextvr.handtrack

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class HandSlotPolicyTest {
    @Test fun startsWithTwoHandSearchThenUsesOneSlotForOneHand() {
        val policy = HandSlotPolicy(searchSlots = 2, probeMs = 250L)
        assertTrue(policy.useWide(1_000L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(1_033L))
        policy.onResult(usedWide = false, detectedHands = 1)
    }

    @Test fun probesForTheSecondHandWithinAQuarterSecondAndKeepsBothTracked() {
        val policy = HandSlotPolicy(searchSlots = 2, probeMs = 250L)
        assertTrue(policy.useWide(1_000L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(1_249L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertTrue(policy.useWide(1_250L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(1_283L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(1_316L))
    }

    @Test fun returnsToTheSingleHandGraphAfterTheSecondHandLeaves() {
        val policy = HandSlotPolicy(searchSlots = 2, probeMs = 250L)
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(33L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(66L))
    }

    @Test fun losingTheOnlyTrackedHandReturnsImmediatelyToWideSearch() {
        val policy = HandSlotPolicy(searchSlots = 2, probeMs = 250L)
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(33L))
        policy.onResult(usedWide = false, detectedHands = 0)
        assertTrue(policy.useWide(66L))
    }

    @Test fun aMissDuringWideSearchKeepsSearchingInsteadOfStallingOnTheNarrowGraph() {
        val policy = HandSlotPolicy(searchSlots = 2, probeMs = 250L)
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 0)
        assertTrue(policy.useWide(33L))
    }
}
