package com.nextvr.cardboard

import com.nextvr.cardboard.hands.HandGestures
import com.nextvr.cardboard.hands.PhoneXrHands
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
