package com.nextvr.handtrack

/**
 * Selects the wide two-hand search graph or the narrow one-hand tracking graph.
 *
 * This small policy is intentionally independent from MediaPipe so its hand-count and probe
 * transitions can be tested on the local JVM without constructing native graphs.
 */
internal class HandSlotPolicy(
    private val searchSlots: Int,
    private val probeMs: Long,
) {
    private var trackingSingleHand = false
    private var lastSearchMs = -1L

    /** Returns true when this frame must use the wide, multi-hand graph. */
    fun useWide(timestampMs: Long): Boolean {
        val searching = !trackingSingleHand || lastSearchMs < 0L || timestampMs - lastSearchMs >= probeMs
        if (searching) lastSearchMs = timestampMs
        return searching
    }

    /** Update the next-frame policy with the result from the graph actually used. */
    fun onResult(usedWide: Boolean, detectedHands: Int) {
        require(detectedHands >= 0) { "detectedHands must not be negative" }
        trackingSingleHand = if (usedWide) detectedHands in 1 until searchSlots else detectedHands > 0
    }
}
