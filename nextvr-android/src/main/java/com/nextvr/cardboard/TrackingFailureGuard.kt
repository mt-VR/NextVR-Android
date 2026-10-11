package com.nextvr.cardboard

/**
 * Decides when a repeated hand-tracking failure is a real outage instead of a hiccup.
 *
 * The tracking thread and the camera callback used to end tracking on the FIRST exception: one
 * failed inference (a bitmap the delegate rejected, a transient allocation failure while a WebView
 * was rasterizing) set `handsEnabled=false` for the rest of the session and the user had to leave
 * and reopen the app to get the hands back. Retrying is the right answer for a single frame - the
 * next camera frame arrives in ~33 ms and carries the same hand - so a failure is only fatal once
 * it repeats on [giveUpAfter] consecutive frames, which is what separates "a frame was lost" from
 * "this device cannot run the pipeline right now".
 *
 * Deliberately tiny and Android-free so the policy is unit-tested on the JVM (TrackingFailureGuardTest).
 * One instance per callback path (the camera callback and the tracking thread each own one); the
 * methods are synchronized so a reset from the other thread (camera reopened, hands re-enabled) is
 * safe.
 */
class TrackingFailureGuard(private val giveUpAfter: Int = DEFAULT_GIVE_UP_AFTER) {
    private var consecutive = 0

    init {
        require(giveUpAfter >= 1) { "giveUpAfter must be positive" }
    }

    /** A frame completed: whatever went wrong before is over. */
    @Synchronized fun succeeded() { consecutive = 0 }

    /** A frame failed: true when the failure has become persistent and tracking should stop. */
    @Synchronized fun failed(): Boolean {
        consecutive++
        return consecutive >= giveUpAfter
    }

    /** Failures in a row, for the log. */
    @Synchronized fun consecutive(): Int = consecutive

    /** Forget the history (hands re-enabled, camera reopened). */
    @Synchronized fun reset() { consecutive = 0 }

    companion object {
        /**
         * Five consecutive frames is ~165 ms at 30 fps: long enough that no single dropped or slow
         * frame ends a session, short enough that a genuinely broken pipeline is reported to the
         * user - and to the perf log - instead of retrying forever behind a frozen cursor.
         */
        const val DEFAULT_GIVE_UP_AFTER = 5
    }
}
