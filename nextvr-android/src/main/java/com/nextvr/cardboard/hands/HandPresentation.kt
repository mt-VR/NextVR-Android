package com.nextvr.cardboard.hands

/** Presentation only: one brief missed detection can retain the silhouette, NEVER a held click.
 * Called on the GL thread. Empty results cancel interaction immediately in the web adapter.
 */
class HandPresentation {
    private var lastVisible: PhoneXrHands.Frame? = null
    fun silhouette(frame: PhoneXrHands.Frame, nowNs: Long): PhoneXrHands.Frame? {
        if(!frame.isFresh(nowNs)) { lastVisible=null;return null }
        if(frame.hands.isNotEmpty()) { lastVisible=frame;return frame }
        val previous=lastVisible
        return if(previous!=null && nowNs-previous.completedNs<=180_000_000L) previous
            else { lastVisible=null;null }
    }
}
