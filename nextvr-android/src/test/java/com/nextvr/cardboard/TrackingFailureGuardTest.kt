package com.nextvr.cardboard

import org.junit.Assert.*
import org.junit.Test

/** The policy that keeps ONE bad frame from ending hand tracking for the rest of the session. */
class TrackingFailureGuardTest {
    @Test fun aSingleFailureIsTolerated() {
        val guard = TrackingFailureGuard()
        assertFalse(guard.failed())
        assertEquals(1, guard.consecutive())
        assertFalse(guard.failed())      // second, still inside the tolerance
        guard.succeeded()
        assertEquals(0, guard.consecutive())
        assertFalse(guard.failed())      // and the next failure starts from scratch
    }

    @Test fun persistentFailuresEventuallyGiveUp() {
        val guard = TrackingFailureGuard(3)
        assertFalse(guard.failed())
        assertFalse(guard.failed())
        assertTrue(guard.failed())       // the third consecutive failure is an outage
        assertTrue(guard.failed())       // and it stays one
    }

    @Test fun oneGoodFrameResetsTheTolerance() {
        val guard = TrackingFailureGuard(3)
        guard.failed(); guard.failed()
        guard.succeeded()
        // The failures before the good frame are forgotten, so it takes the FULL tolerance again for
        // the new streak to be an outage - without the reset the third failure would already trip.
        assertFalse(guard.failed())
        assertFalse(guard.failed())
        assertTrue(guard.failed())
    }

    @Test fun resetForgetsTheHistory() {
        val guard = TrackingFailureGuard(2)
        guard.failed()
        guard.reset()
        assertFalse(guard.failed())
        assertEquals(1, guard.consecutive())
    }

    @Test fun anInvalidToleranceIsRejected() {
        try {
            TrackingFailureGuard(0)
            fail("a tolerance of zero would fail on the first frame")
        } catch (expected: IllegalArgumentException) {
        }
    }
}
