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
    @Test fun expensiveRecoveryBacksOffWithoutChangingPrimaryTracking() {
        val b=RecoveryBudget(500)
        assertTrue(b.shouldRun(10000,0));b.completed(1000)
        assertFalse(b.shouldRun(12000,0));assertTrue(b.shouldRun(13000,0))
        assertFalse(b.shouldRun(20000,2))
    }
}
