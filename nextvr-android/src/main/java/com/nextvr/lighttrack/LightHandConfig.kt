package com.nextvr.lighttrack

/**
 * Tuning for the light hand tracker: a chroma skin segmentation, a blob, an inscribed palm disc
 * and a radial finger profile. No model, no tensor, no delegate.
 *
 * The numbers below are in ANALYSIS pixels (the camera hands the tracker a 320x240 or 240x180
 * frame, see TrackingBudget), so a hand that fills 40 % of the picture is a blob of roughly
 * 20 000 px and a palm radius of ~60 px.
 */
object LightHandConfig {
    /* ---- skin segmentation (Cb/Cr centred on 128, BT.601) -------------------------------- */

    /** Cb window. Skin sits at Cb 76..128, i.e. -52..0 once centred. */
    const val CB_MIN = -58
    const val CB_MAX = 6
    /** Cr window. Skin sits at Cr 132..176, i.e. 4..48 once centred. */
    const val CR_MIN = 2
    const val CR_MAX = 52
    /** Anything darker than this is shadow, hair or a screen bezel, never a lit hand. */
    const val MIN_LUMA = 32
    /** Squared chroma magnitude floor: a grey wall has Cb/Cr near 128 and must not read as skin. */
    const val MIN_CHROMA2 = 90

    /* ---- blobs --------------------------------------------------------------------------- */

    /** Smallest blob that can be a hand. Below this it is a face reflection or a wooden edge. */
    const val MIN_AREA = 220
    /** Components the finder may hold at once (whole-image garbage in a warm-lit room). */
    const val MAX_COMPONENTS = 16
    /** Hands published at most: the wire format carries two. */
    const val MAX_HANDS = 2

    /* ---- palm disc ----------------------------------------------------------------------- */

    /**
     * A palm is a roundish mass, so the largest inscribed disc of a hand blob sits in the palm and
     * its radius is about half the palm's narrow side. The palm (index base to pinky base) is
     * ~0.085 m wide and the inscribed disc radius measures ~0.47 of that: 2.13 radii per palm.
     */
    const val PALM_PER_RADIUS = 2.13f
    /** Pixels of the disc this far from the centre still vote for it: steady against the thumb. */
    const val DISC_CORE = 0.72f
    /** Palm radius, in image widths, below which the hand is too small to measure. */
    const val MIN_PALM_RADIUS = 0.012f
    /**
     * Palm radius, in image widths, above which the "hand" is furniture.
     *
     * The palm disc is ~4 cm across, the analysis frame is ~65 degrees wide and the focal length is
     * 0.85 widths, so a real hand at 15 cm gives 0.22 widths and at arm's length 0.05. Anything
     * bigger than this is a wall, a wardrobe or a sheet - the shapes that pass a chroma skin test
     * in a bedroom and used to be published as a hand (and drawn as a huge silhouette in mid-air).
     */
    const val MAX_PALM_RADIUS = 0.30f
    /** A blob bigger than this share of the frame is background, not a hand. */
    const val MAX_BLOB_AREA_SHARE = 0.55f
    /**
     * Share of the frame above which the picture is furniture: a wardrobe, a wall, a sheet. No hand
     * covers more than half the view (the palm radius gate already rejects one that close), so the
     * frame is dropped before the flood fill and the palm fit - the fast path for a phone pointed
     * at a beige room.
     */
    const val MAX_SKIN_SHARE = 0.60f
    /**
     * Widest angular run that still counts as ONE finger: 4 degrees per bin, so a finger (or two
     * touching ones) spans well under this, while a wall's profile is a broad arc with no narrow
     * protrusion at all. This is what tells a hand from every large beige surface in the room.
     */
    const val MAX_HUMP_BINS = 13

    /* ---- finger profile ------------------------------------------------------------------ */

    /** Radial bins: 4 degrees each. */
    const val BINS = 90
    /**
     * A finger is out when the silhouette reaches past this many palm radii: an extended finger
     * reaches ~2.1-2.6 radii (the palm disc radius is what the 4.5 cm palm half-width measures),
     * a loosely folded one ~1.1-1.4. 1.55 splits them with room on both sides.
     */
    const val FINGER_REACH = 1.55f
    /** The thumb is shorter and splays wider: out from this many radii. */
    const val THUMB_REACH = 1.30f
    /** How far the profile is followed (palm radii): a splayed hand is ~2.6 palm radii across. */
    const val PROFILE_REACH = 3.2f

    /**
     * Finger directions, thumb to pinky, relative to the fan direction of a RIGHT hand. The left
     * hand mirrors them. They are the only "model" in this tracker: a spread of a real hand, not a
     * regression, and they are used only to label the humps of the profile.
     */
    val FINGER_ANGLE = floatArrayOf(-0.73f, -0.21f, 0.035f, 0.28f, 0.52f)

    /* ---- pinch (the thumb-index loop) ----------------------------------------------------- */

    /**
     * The loop the thumb and index make when they touch is small: ~3 cm^2 fully closed, against a
     * palm disc of ~38 cm^2, i.e. 3 % of it. That share is also the distance-independent form of
     * the measurement — the loop and the palm shrink together as the hand moves away — so the gate
     * is `hole / (disc * HOLE_FULL)` and 3 % is a well-formed loop.
     */
    const val HOLE_FULL = 0.03f
    /** A few pixels of background are compression noise, not a loop. */
    const val HOLE_MIN_PIXELS = 16
    /** The loop has to be on the finger side of the palm centre, not out by the wrist or the arm. */
    const val HOLE_FINGER_OFFSET = 0.15f
    /** The loop must sit within this many palm radii of the disc centre to be a thumb-index one. */
    const val HOLE_MAX_OFFSET = 2.2f

    /* ---- fist ---------------------------------------------------------------------------- */

    /** Extended fingers at or below which the hand is closed. */
    const val FIST_FINGERS = 1
    /** Fingers folded leaves a compact mass: skin over its bounding box this complete is a fist. */
    const val FIST_FILL = 0.52f
    /**
     * Longest run of blob pixels along the picture border that can still be a FOREARM, in palm
     * radii. A wrist is 6-9 cm against a 4 cm palm radius, so 1.5-2.5 radii; a beige wall or a
     * wardrobe leaving the frame covers the border for far longer than that.
     */
    const val MAX_ARM_RUN = 4.0f
    /** Below this the blob is not published as a hand at all, whatever else it looks like. */
    const val MIN_HANDINESS = 0.55f
    /**
     * A hand never fills its bounding box completely: fingers and the thumb leave corners of
     * background. Furniture and walls do fill theirs, so anything above this is not a hand - the
     * single cheapest test that rules out a lit door or a sheet.
     */
    const val MAX_HAND_FILL = 0.90f

    /* ---- depth --------------------------------------------------------------------------- */

    /** Palm width in metres (index base to pinky base), the ruler the distance is read from. */
    const val PALM_METRES = 0.085f
    /** Pinhole focal length in pixels, as a share of the frame width (~65 degree horizontal FOV). */
    const val FOCAL_PER_WIDTH = 0.85f
    /** Plausible distance range of a hand in front of a phone. */
    const val MIN_DISTANCE = 0.12f
    const val MAX_DISTANCE = 0.90f
}
