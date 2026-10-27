package com.nextvr.lighttrack

/**
 * One hand from the light tracker, in the 21-landmark layout the rest of the engine already speaks
 * (wrist 0, thumb 1-4, index 5-8, middle 9-12, ring 13-16, pinky 17-20).
 *
 * The landmarks are SYNTHESIZED from the silhouette (see [HandSkeleton]) instead of regressed by a
 * model: the palm disc fixes the wrist, the knuckles and the palm width, each hump of the radial
 * profile is one extended finger, and the rest are folded. That is enough for every consumer here —
 * the gesture rules, the silhouette renderer and the 63-float wire format — at a few hundred
 * microseconds per frame instead of a neural network.
 *
 * A hand is a pooled, mutable object: the tracker refills it every frame and the caller copies out
 * what it keeps, so a steady session allocates nothing in the tracker itself.
 */
class LightHand {
    var left = false
    /** 21 landmarks, image coordinates (x right, y down, 0..1). */
    val image = FloatArray(63)
    /** 21 landmarks around the hand in metres: x right, y up, z away from the camera. */
    val world = FloatArray(63)
    /** Palm width (index base to pinky base) in image widths: bigger means closer. */
    var palmWidth = 0f
    /** Distance to the palm, metres, from the palm's apparent size. */
    var distance = 0f
    /** 0..1: how hand-like the blob was (size, compactness, profile contrast). */
    var confidence = 0f
    /** Thumb-index gap in palm widths; below ~0.4 is a pinch (see HandGestures.PinchLatch). */
    var pinchGap = 1f
    /** Every finger folded and the blob compact. */
    var fist = false
    /** Fingers the profile found extended. */
    var extended = 0
    /** Palm centre, image coordinates. */
    var palmX = 0f
    var palmY = 0f
}
