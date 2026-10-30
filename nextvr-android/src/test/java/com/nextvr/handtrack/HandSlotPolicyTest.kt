package com.nextvr.handtrack

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class HandSlotPolicyTest {
    private fun policy() = HandSlotPolicy(searchSlots = 2, probeMs = 250L, minProbeFrames = 4)

    @Test fun startsWithTwoHandSearchThenUsesOneSlotForOneHand() {
        val policy = policy()
        assertTrue(policy.useWide(1_000L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(1_033L))
        policy.onResult(usedWide = false, detectedHands = 1)
    }

    @Test fun probesForTheSecondHandEveryFourthFrameAndKeepsBothTracked() {
        val policy = policy()
        assertTrue(policy.useWide(1_000L))
        policy.onResult(usedWide = true, detectedHands = 1)
        // Three one-slot frames, then the two-slot probe that can see a second hand.
        assertFalse(policy.useWide(1_100L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertFalse(policy.useWide(1_200L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertFalse(policy.useWide(1_300L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertTrue(policy.useWide(1_400L))
        policy.onResult(usedWide = true, detectedHands = 2)
        // Two hands are visible: the two-slot graph stays, on every frame.
        assertTrue(policy.useWide(1_500L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(1_600L))
    }

    @Test fun aFastDeviceStillProbesOnTheCameraTimeBound() {
        // Four frames at 33 ms are only 132 ms of camera time: the camera-time bound has not
        // elapsed yet, so the probe waits - a second hand is still found within a quarter second.
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(33L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertFalse(policy.useWide(66L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertFalse(policy.useWide(99L))
        policy.onResult(usedWide = false, detectedHands = 1)
        // 132 ms of camera time is not the 250 ms the bound asks for: the one-slot graph continues.
        assertFalse(policy.useWide(132L))
        policy.onResult(usedWide = false, detectedHands = 1)
        assertTrue(policy.useWide(265L))
    }

    @Test fun theProbeIsCountedInFramesSoASlowDeviceStillReachesTheOneSlotGraph() {
        // The bug this guards: a probe paced in camera time alone fires on EVERY processed frame
        // on a slow device (the camera clock runs ahead of the tracker), so the two-slot graph ran
        // on every frame and the one-slot fast path never ran.
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 1)
        var wide = 0
        var stamp = 0L
        repeat(40) {
            stamp += 382L   // one inference per processed frame, on the camera clock
            if (policy.useWide(stamp)) wide++
            policy.onResult(usedWide = false, detectedHands = 1)
        }
        // One two-slot frame in four, and three one-slot frames in between.
        assertTrue("two-slot frames: $wide", wide in 9..11)
    }

    @Test fun returnsToTheSingleHandGraphAfterTheSecondHandLeaves() {
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(33L))
        policy.onResult(usedWide = true, detectedHands = 1)
        // The second hand is given one more two-slot frame before the graph gives up on it (see
        // aSingleMissedFrameWithTwoHandsKeepsBothHandsTracked).
        assertTrue(policy.useWide(66L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(99L))
    }

    @Test fun aSingleMissedFrameWithTwoHandsKeepsBothHandsTracked() {
        // The one-slot graph can never report a second hand. Giving up on it after ONE missed
        // frame made the second hand blink out until the next probe - the two-hand experience was
        // "as duas mãos não tem como". A single miss is now bridged.
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(33L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertTrue("a single miss still uses the two-slot graph", policy.useWide(66L))
        policy.onResult(usedWide = true, detectedHands = 2)
        assertTrue(policy.useWide(99L))
    }

    @Test fun losingTheOnlyTrackedHandReturnsImmediatelyToWideSearch() {
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(33L))
        policy.onResult(usedWide = false, detectedHands = 0)
        assertTrue(policy.useWide(66L))
    }

    @Test fun aMissDuringWideSearchKeepsSearchingInsteadOfStallingOnTheNarrowGraph() {
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 0)
        assertTrue(policy.useWide(33L))
    }

    @Test fun aHandTheOneSlotGraphCannotFollowStaysOnTheTwoSlotGraph() {
        // The one-slot graph lost the hand it was tracking: the two-slot graph re-acquires it, and
        // the hand is not forced back onto the graph that just lost it on the very next frame.
        val policy = policy()
        assertTrue(policy.useWide(0L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertFalse(policy.useWide(33L))
        policy.onResult(usedWide = false, detectedHands = 0)
        assertTrue(policy.useWide(66L))
        policy.onResult(usedWide = true, detectedHands = 1)
        // Still cooling down: the two-slot graph holds the hand for a couple of frames, so the
        // two graphs do not flap on the hand.
        assertTrue(policy.useWide(99L))
        policy.onResult(usedWide = true, detectedHands = 1)
        assertTrue(policy.useWide(132L))
        policy.onResult(usedWide = true, detectedHands = 1)
        // The cooldown is over: the one-slot graph carries the hand again.
        assertFalse(policy.useWide(165L))
    }
}
