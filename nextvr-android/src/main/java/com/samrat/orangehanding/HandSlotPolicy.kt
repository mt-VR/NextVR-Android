package com.samrat.orangehanding

/**
 * Decides how many hand slots the primary landmarker must process on each frame.
 *
 * Why this exists (measured, host, MediaPipe Tasks 0.10.35 CPU delegate, the shipped
 * `hand_landmarker.task`, one pinned core, the app's own portrait geometry):
 *
 *   one hand tracked, numHands=2 (what the app used to do every frame): 29.1 ms  (p95 35.7)
 *   one hand tracked, numHands=1:                                       11.8 ms  (p95 14.3)
 *   no hand at all (palm search), numHands=2:                           15.5 ms
 *   no hand at all (palm search), numHands=1:                           17.6 ms
 *
 * The tracking graph runs the landmark/presence/handedness models once PER SLOT, and it does so
 * even when the second slot is empty - so a single raised hand paid for two hands on every frame,
 * which is precisely the state the whole UI is designed around. While no hand is tracked the graph
 * is in the palm-search branch and the second slot is free, so the policy keeps two slots there.
 *
 * Rules, in words:
 *  - WIDE (two slots) while nothing is tracked, so re-acquiring any hand loses nothing;
 *  - WIDE while two hands are actually reported - both slots are then doing real work;
 *  - one WIDE frame that reports a single hand proves the second slot is idle, so drop to NARROW
 *    (one slot) and stay there: the interactive case runs at ~2.5x the landmark rate;
 *  - while NARROW, probe with a WIDE frame every [probeEveryMs] so a second hand coming in is
 *    picked up within one probe interval instead of never;
 *  - any frame reporting zero or two hands immediately returns to WIDE.
 *
 * The flag only flips at frame boundaries and both graphs stay loaded, so switching costs a
 * pointer assignment - no rebuild, no stall. Each graph keeps its own region-of-interest history,
 * so the frame after a switch is a cheap detection rather than a tracked frame; that is why the
 * probe interval is not allowed to be too short.
 *
 * Pure Kotlin, no Android types: the policy is unit-tested on the JVM (HandSlotPolicyTest).
 */
class HandSlotPolicy(
    /** How often a NARROW stretch re-checks for a second hand. */
    private val probeEveryMs: Long = DEFAULT_PROBE_MS,
) {
    /** Slots used by the last frame; only a WIDE frame can prove the second slot is idle. */
    private var wideLast = true
    private var narrow = false
    private var nextProbeAt = Long.MIN_VALUE
    private var narrowFrames = 0L
    private var wideFrames = 0L
    private var probes = 0L

    /** Slots the *next* frame must process: 1 (NARROW) or 2 (WIDE). */
    fun slotsFor(nowMs: Long, handsInLastResult: Int): Int {
        when {
            // Nothing tracked: go back to searching both slots - the palm-search cost is the same
            // either way (15.5 ms vs 17.6 ms), and this is when finding any hand matters.
            handsInLastResult == 0 -> narrow = false
            // Both slots are doing real work while both hands are up.
            handsInLastResult >= 2 -> narrow = false
            // A WIDE frame that saw exactly one hand, entering the narrow stretch: stop paying for the
            // second slot, and start the probe clock here - the frame that just ran WIDE already
            // checked slot two, so a probe in the very next frame would be redundant. A wide PROBE
            // frame inside an existing narrow stretch must NOT re-anchor the clock, or every probe
            // would push the next one a frame further away.
            wideLast && !narrow -> {
                narrow = true
                nextProbeAt = nowMs + probeEveryMs
            }
            // A NARROW probe that still saw one hand: stay narrow (no flapping).
            else -> Unit
        }
        val slots = if (!narrow) {
            2
        } else if (nowMs >= nextProbeAt) {
            nextProbeAt = nowMs + probeEveryMs
            probes++
            2
        } else {
            narrowFrames++
            1
        }
        if (slots == 2) wideFrames++
        wideLast = slots == 2
        return slots
    }

    /** True when the last frame ran the two-slot graph. */
    fun lastWasWide() = wideLast

    /** Frames of each kind since construction/reset - what the effective-rate win is made of. */
    fun narrowFrames() = narrowFrames

    fun wideFrames() = wideFrames

    /** Second-hand re-checks performed while narrow. */
    fun probes() = probes

    fun reset() {
        wideLast = true
        narrow = false
        nextProbeAt = Long.MIN_VALUE
        narrowFrames = 0L
        wideFrames = 0L
        probes = 0L
    }

    companion object {
        /**
         * A second hand entering the frame is found at the next probe. 150 ms is about four frames
         * at 30 fps: the mean cost stays close to the narrow cost (12 ms + one 29 ms frame in four)
         * while two-hand gestures stay usable. Longer values cost more responsiveness for the pair
         * gesture, shorter ones give back the savings.
         */
        const val DEFAULT_PROBE_MS = 150L
    }
}
