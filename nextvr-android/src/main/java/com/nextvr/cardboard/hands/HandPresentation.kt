package com.nextvr.cardboard.hands

/** Presentation only: a brief missed detection can retain the silhouette, NEVER a held click.
 * Called on the GL thread. Empty results cancel interaction immediately in the web adapter.
 *
 * The retention covers BOTH transient empty results and stale/stalled deliveries (GPU contention
 * while an app surface or floating window is open): the hand fades out at the end of the window
 * instead of blinking off and on, while a genuinely lost hand still disappears promptly. A slow
 * tracker keeps its own longer validity as the minimum retention, so a detector that legitimately
 * reports every ~1 s is not hidden between results.
 */
class HandPresentation {
    companion object {
        /** Base retention after the last visible detection. */
        const val RETENTION_NS = 700_000_000L
        /** Last stretch of the retention during which the silhouette fades to zero. */
        const val FADE_NS = 200_000_000L
    }
    private var lastVisible: PhoneXrHands.Frame? = null
    fun silhouette(frame: PhoneXrHands.Frame, nowNs: Long): PhoneXrHands.Frame? {
        if(frame.hands.isNotEmpty() && frame.isFresh(nowNs)) { lastVisible=frame;return frame }
        val previous=lastVisible
        if(previous==null || nowNs-previous.completedNs>retention(previous)) { lastVisible=null;return null }
        return previous
    }
    /** 1 while the retained pose is trustworthy, fading to 0 at the end of the retention. */
    fun fade(frame: PhoneXrHands.Frame, nowNs: Long): Float {
        val left = retention(frame) - (nowNs - frame.completedNs)
        return (left.toFloat() / FADE_NS).coerceIn(0f, 1f)
    }
    private fun retention(frame: PhoneXrHands.Frame) = maxOf(RETENTION_NS, frame.validForNs)
}
