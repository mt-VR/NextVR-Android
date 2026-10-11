package com.nextvr.app

import com.nextvr.app.hands.HandGestures
import com.nextvr.app.hands.PhoneXrHands
import org.junit.Assert.*
import org.junit.Test

class HandFrameMailboxTest {
    private fun frame(
        sequence: Long,
        pinching: Boolean = false,
        fist: Boolean = false,
        tipDistance: Float? = null,
    ): PhoneXrHands.Frame {
        val shape = HandGestures.Shape(
            pinch = pinching,
            pinchStrength = if (pinching) 1f else 0f,
            fist = fist,
            palmToFace = false,
            pinchX = .5f,
            pinchY = .5f,
            palmWidth = .2f,
        )
        val head = tipDistance?.let { FloatArray(63).apply { this[26] = -it } }
        val hand = PhoneXrHands.Hand(
            false, FloatArray(63), head, shape,
            0f, 0f, 0f, 0f, pinching, 0f, 0f,
        )
        return PhoneXrHands.Frame(listOf(hand), sequence, sequence)
    }

    private fun offer(mailbox: HandFrameMailbox, sequence: Long, name: String,
                      pinching: Boolean = false, fist: Boolean = false, tipDistance: Float? = null) {
        mailbox.offer(frame(sequence, pinching, fist, tipDistance), name)
    }

    @Test fun pinchDownAndReleaseEdgesSurviveAStalledUiDrainInOrder() {
        val mailbox = HandFrameMailbox()
        offer(mailbox, 1, "hover")
        mailbox.drain()

        offer(mailbox, 2, "down", pinching = true)
        offer(mailbox, 3, "held-pose", pinching = true)
        offer(mailbox, 4, "up")
        offer(mailbox, 5, "next-down", pinching = true)
        val batch = mailbox.drain()

        assertFalse(batch.resetBeforeFrames())
        assertEquals(listOf("down", "up", "next-down"), batch.frames().map { it.script() })
        assertTrue(mailbox.isEmpty())
    }

    @Test fun poseOnlyFramesCoalesceToTheNewestSnapshot() {
        val mailbox = HandFrameMailbox()
        offer(mailbox, 1, "hand-appeared", tipDistance = 1f)
        mailbox.drain()

        offer(mailbox, 2, "older-pose", tipDistance = 1f)
        offer(mailbox, 3, "newest-pose", tipDistance = 1f)
        val batch = mailbox.drain()
        assertEquals(listOf("newest-pose"), batch.frames().map { it.script() })
    }

    @Test fun everyNearReachSampleAndTheExitSampleArePreservedForPushTouch() {
        val mailbox = HandFrameMailbox()
        offer(mailbox, 1, "far", tipDistance = .9f)
        mailbox.drain()

        offer(mailbox, 2, "near-entry", tipDistance = .65f)
        offer(mailbox, 3, "push", tipDistance = .48f)
        offer(mailbox, 4, "release-motion", tipDistance = .54f)
        offer(mailbox, 5, "near-exit", tipDistance = .76f)
        val batch = mailbox.drain()

        assertEquals(listOf("near-entry", "push", "release-motion", "near-exit"),
            batch.frames().map { it.script() })
    }

    @Test fun overflowCancelsOldInputThenResynchronizesFromOnlyTheNewestFrame() {
        val mailbox = HandFrameMailbox(2)
        offer(mailbox, 1, "hover")
        mailbox.drain()

        offer(mailbox, 2, "down", pinching = true)
        offer(mailbox, 3, "up")
        offer(mailbox, 4, "current-hold", pinching = true)
        val batch = mailbox.drain()

        assertTrue(batch.resetBeforeFrames())
        assertEquals(listOf("current-hold"), batch.frames().map { it.script() })
    }

    @Test fun aBacklogCollapsesSameStatePosesButNeverLosesAnEdgeOrTheNewestTrajectory() {
        // A stalled WebView drain would otherwise replay every queued sample: one more
        // nextvrHands() call each, a longer evaluation, more frames aging out, more cancels.
        val mailbox = HandFrameMailbox(96, 4)
        offer(mailbox, 1, "far", tipDistance = .9f)
        mailbox.drain()

        // A long near-reach run: every sample is kept by the retention rule, so a drain has to bound it.
        for (sequence in 2..9) offer(mailbox, sequence.toLong(), "near-$sequence", tipDistance = .5f)
        val batch = mailbox.drain()

        assertEquals(listOf("near-8", "near-9"), batch.frames().map { it.script() })
        assertEquals(6, batch.coalesced())
        assertTrue(mailbox.isEmpty())
    }

    @Test fun aBacklogKeepsEveryPinchEdgeInOrderEvenPastTheDrainBound() {
        val mailbox = HandFrameMailbox(96, 4)
        offer(mailbox, 1, "hover")
        mailbox.drain()

        // Four press/release cycles queued while the UI was stuck: the edges must survive in order.
        for (cycle in 0..3) {
            offer(mailbox, 2L + cycle * 2, "down-$cycle", pinching = true)
            offer(mailbox, 3L + cycle * 2, "up-$cycle")
        }
        val batch = mailbox.drain()

        // Eight frames is over the bound, but every one of them changes the state, so nothing may be
        // dropped: the budget costs superseded poses, never an edge. The overflow rule (96 frames)
        // stays the hard bound for a sequence that cannot be replayed safely.
        assertEquals(
            listOf("down-0", "up-0", "down-1", "up-1", "down-2", "up-2", "down-3", "up-3"),
            batch.frames().map { it.script() },
        )
        assertEquals(0, batch.coalesced())
    }

    @Test fun cameraStopCreatesAnOrderedNeutralBoundary() {
        val mailbox = HandFrameMailbox()
        offer(mailbox, 1, "stale-down", pinching = true)
        mailbox.requestReset()
        offer(mailbox, 2, "fresh-hover")

        val batch = mailbox.drain()
        assertTrue(batch.resetBeforeFrames())
        assertEquals(listOf("fresh-hover"), batch.frames().map { it.script() })
    }
}
