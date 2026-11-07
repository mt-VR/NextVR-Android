package com.nextvr.handtrack

/**
 * Selects the wide two-hand search graph or the narrow one-hand tracking graph.
 *
 * This small policy is intentionally independent from MediaPipe so its hand-count and probe
 * transitions can be tested on the local JVM without constructing native graphs.
 *
 * The probe that looks for a second hand is bounded by TWO things, and a probe has to meet BOTH
 * before the two-slot graph runs again:
 *
 *  - a minimum number of processed FRAMES, and
 *  - a minimum amount of camera TIME.
 *
 * The frame bound is what the split depends on. The two-slot graph costs 2.47x the one-slot graph
 * for a single tracked hand, so the two-slot frames have to stay a bounded FRACTION of the work.
 * A camera-time bound alone cannot do that: the camera keeps producing frames while the tracker
 * is busy, so on a slow device two consecutive PROCESSED frames are one whole inference apart on
 * the camera clock - far beyond any probe interval - and the probe then fires on EVERY frame. The
 * device that reported "tracking 2 fps - cam 54 - infer 382ms - CPU - slots 2" is exactly that
 * case: a fast camera, a model-bound tracker, and a one-slot fast path that never ran at all.
 *
 * The camera-time bound is what keeps the second hand discoverable where the device is fast:
 * there, four frames are only ~130 ms, and a probe paced in frames alone would let a second hand
 * wait longer than the quarter second the split promises. Because a probe needs both, the
 * effective interval is the LONGER of the two: the frame bound on a slow device (where the
 * quarter second is physically unreachable - a single result already costs more than that), and
 * the time bound on a fast one (where four frames arrive long before the clock is up).
 */
internal class HandSlotPolicy(
    private val searchSlots: Int,
    /** Camera-time interval a second-hand probe also has to respect, in milliseconds. */
    private val probeMs: Long,
    /** Minimum number of processed frames between two two-slot frames. */
    private val minProbeFrames: Int,
) {
    /**
     * Two-slot frames still owed after the one-slot graph lost the hand it was tracking.
     *
     * A hand the one-slot graph cannot follow would otherwise be pushed back onto it on the very
     * next frame, and the two graphs would flap - the wide one re-acquiring, the narrow one
     * losing it again - paying a detection on every switch and reporting the hand from two
     * different graphs in a row. Holding the hand on the two-slot graph for a couple of frames
     * keeps one graph responsible for it.
     */
    private val reacquireFrames = 2

    /**
     * Two-slot frames still owed while BOTH hands are in use.
     *
     * With two hands up, the wide graph regularly misses the second hand for a single frame (a
     * hand at the edge of the image, one hand in front of the other, a fast hand in motion). The
     * old rule sent that single frame straight to the one-slot graph, which by construction can
     * never report the second hand: it stayed invisible until the next probe - four frames later,
     * or a whole second on a slow device - and then the same flicker repeated. The two-hand
     * experience was a hand blinking in and out, which is exactly what "as duas mãos não tem como"
     * describes. A couple of wide frames with one hand are now allowed before giving up on the
     * second hand, so a single miss is bridged by the graph that can actually see it.
     */
    private val bothHandsHold = 2
    private var holdFrames = 0

    private var trackingSingleHand = false
    /** Processed frames since the last two-slot frame (this frame included). */
    private var framesSinceSearch = 0
    /** Camera time of the last two-slot frame. */
    private var lastSearchMs = -1L
    /** Two-slot frames still owed after the one-slot graph lost the hand. */
    private var wideCooldown = 0

    /** Returns true when this frame must use the wide, multi-hand graph. */
    fun useWide(timestampMs: Long): Boolean {
        // Nothing is tracked: the two-slot graph is the only one that can find a hand at all, and
        // it is the only one that can report two hands.
        if (!trackingSingleHand) {
            framesSinceSearch = 0
            lastSearchMs = timestampMs
            return true
        }
        // The one-slot graph lost the hand it was following: the two-slot graph re-acquires it.
        if (wideCooldown > 0) {
            wideCooldown--
            framesSinceSearch = 0
            lastSearchMs = timestampMs
            return true
        }
        framesSinceSearch++
        // The probe for a second hand. Both bounds have to be met: the frame bound keeps the
        // two-slot share of the work bounded on a slow device, the camera-time bound keeps a
        // second hand discoverable within a quarter second on a fast one.
        val frameBoundMet = framesSinceSearch >= minProbeFrames
        val timeBoundMet = lastSearchMs < 0L || timestampMs - lastSearchMs >= probeMs
        if (frameBoundMet && timeBoundMet) {
            framesSinceSearch = 0
            lastSearchMs = timestampMs
            return true
        }
        return false
    }

    /** Update the next-frame policy with the result from the graph actually used. */
    fun onResult(usedWide: Boolean, detectedHands: Int) {
        require(detectedHands >= 0) { "detectedHands must not be negative" }
        if (usedWide) {
            // Both hands seen: the two-slot graph is the one that can hold them, so a later frame
            // that reports only one hand is bridged instead of dropping to the one-slot graph.
            if (detectedHands >= searchSlots) holdFrames = bothHandsHold
            else if (holdFrames > 0) holdFrames--
        } else if (detectedHands == 0) {
            // Nothing at all on a one-slot frame: no second hand to protect.
            holdFrames = 0
        }
        trackingSingleHand = when {
            holdFrames > 0 -> false
            usedWide -> detectedHands in 1 until searchSlots
            else -> detectedHands > 0
        }
        if (usedWide) {
            // A two-slot frame that saw no hand at all means the hand is really gone: the next one
            // that appears is a fresh chance for the one-slot graph.
            if (detectedHands == 0) wideCooldown = 0
        } else if (detectedHands == 0) {
            wideCooldown = reacquireFrames
        }
    }
}
