package com.nextvr.cardboard.hands

/** Presentation only: a brief missed detection can retain the silhouette, NEVER a held click.
 * Called on the GL thread. Empty results cancel interaction immediately in the web adapter.
 *
 * The retention window matches the shortest frame validity (500 ms): transient stalls — a
 * floating window opening, a GC pause, a dropped camera frame — no longer blink the hand off
 * and on, while a genuinely lost hand still disappears promptly.
 */
class HandPresentation {
    companion object { const val RETENTION_NS = 500_000_000L }
    private var lastVisible: PhoneXrHands.Frame? = null
    fun silhouette(frame: PhoneXrHands.Frame, nowNs: Long): PhoneXrHands.Frame? {
        if(!frame.isFresh(nowNs)) { lastVisible=null;return null }
        if(frame.hands.isNotEmpty()) { lastVisible=frame;return frame }
        val previous=lastVisible
        return if(previous!=null && nowNs-previous.completedNs<=RETENTION_NS) previous
            else { lastVisible=null;null }
    }
}
