package com.samrat.orangehanding

/**
 * Keep primary MediaPipe inference responsive. YOLO is recovery, not a continuous second tracker.
 *
 * [primaryMs] is the cost of the last primary inference on this thread. It matters because the
 * recovery workers are only "off" the tracking thread, not off the CPU: with YOLO and the rescue
 * landmarker both running on their own low-priority threads, the primary inference measured
 * 28.4 -> 33.5 ms mean and p95 36 -> 46 ms on a two-core host (tools/bench, contention case
 * "yolo+rescue"). A phone under load (WebView rasterizing an open app) behaves the same way, and
 * the moment when a hand is missing is exactly the moment the user is waiting for it back. So when
 * the primary path is already slower than the camera period, recovery waits: shedding it is what
 * keeps the tracking rate - and the re-acquisition it is trying to help - as fast as possible.
 */
internal class RecoveryBudget(
    private val minimumMs: Long,
    /** Above this primary cost, recovery is considered harmful and its interval doubles. */
    private val pressureMs: Long = 40L,
) {
    private var lastStart = Long.MIN_VALUE / 2
    private var previousHands = 0
    private var urgentUntil = 0L
    private var dutyInterval = minimumMs
    private var suppressed = 0

    @Synchronized
    fun shouldRun(now: Long, hands: Int, busy: Boolean = false, primaryMs: Long = 0L): Boolean {
        if (hands < previousHands) urgentUntil = now + 1500
        previousHands = hands
        if (hands >= 2 || busy) return false
        val interval = maxOf(dutyInterval, when {
            now < urgentUntil -> minimumMs
            hands == 1 -> 2500L
            else -> 1000L
        })
        // Sustained pressure on the primary path: skip this round and postpone it, rather than
        // doubling the base interval (which would outlive the pressure and stop useful recovery).
        if (primaryMs > pressureMs) {
            suppressed++
            lastStart = now + interval / 2
            return false
        }
        if (now - lastStart < interval) return false
        lastStart = now
        return true
    }

    @Synchronized
    fun completed(elapsedMs: Long) {
        dutyInterval = (elapsedMs * 3).coerceIn(minimumMs, 5000L)
    }

    /** Rounds skipped because the primary inference was already the bottleneck. */
    @Synchronized
    fun suppressedCount(): Int = suppressed

    @Synchronized
    fun reset() {
        lastStart = Long.MIN_VALUE / 2
        previousHands = 0
        urgentUntil = 0L
        dutyInterval = minimumMs
        suppressed = 0
    }
}
