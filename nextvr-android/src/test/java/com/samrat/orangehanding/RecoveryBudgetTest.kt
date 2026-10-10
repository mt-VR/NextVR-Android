package com.samrat.orangehanding
import org.junit.Assert.*
import org.junit.Test
class RecoveryBudgetTest {
    @Test fun stableOneHandDoesNotRunYoloContinuously() {
        val b=RecoveryBudget(500)
        assertTrue(b.shouldRun(10000,1));b.completed(100)
        assertFalse(b.shouldRun(10500,1));assertFalse(b.shouldRun(12000,1))
        assertTrue(b.shouldRun(12500,1));assertFalse(b.shouldRun(13000,2))
        assertTrue(b.shouldRun(13200,1)) // hand just lost: prompt recovery
    }
    @Test fun recoveryIsSheddedWhileThePrimaryInferenceIsTheBottleneck() {
        // YOLO and the rescue landmarker are off the tracking thread but not off the CPU: measured,
        // both of them together inflate the primary inference from 28.4 to 33.5 ms mean and from
        // p95 36 to p95 46 ms. So while the primary is already over budget, recovery waits.
        val b=RecoveryBudget(500, pressureMs=40)
        assertTrue(b.shouldRun(10000,0))
        b.completed(10)
        assertFalse("under load: no new recovery round", b.shouldRun(10100,0,primaryMs=80))
        assertFalse("and it stays postponed, not merely deferred by a frame", b.shouldRun(10200,0,primaryMs=80))
        assertEquals(2, b.suppressedCount())
        assertFalse("still inside the postponed window even once the load is gone", b.shouldRun(10300,0))
        assertTrue("recovery resumes as soon as the primary has headroom again", b.shouldRun(14000,0,primaryMs=5))
    }

    @Test fun expensiveRecoveryBacksOffWithoutChangingPrimaryTracking() {
        val b=RecoveryBudget(500)
        assertTrue(b.shouldRun(10000,0));b.completed(1000)
        assertFalse(b.shouldRun(12000,0));assertTrue(b.shouldRun(13000,0))
        assertFalse(b.shouldRun(20000,2))
    }
}
