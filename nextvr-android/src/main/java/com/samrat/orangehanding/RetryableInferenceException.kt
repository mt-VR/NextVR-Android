package com.samrat.orangehanding

import android.graphics.Bitmap

/**
 * A unique input bitmap was consumed by a failed inference; this copy is only made on that rare
 * path, so the camera can retry the frame on the CPU delegate (see `PassthroughCamera.track`).
 *
 * Thrown by BOTH engines: the GPU→CPU recovery must not depend on which one the A/B selected.
 */
class RetryableInferenceException(val retryBitmap: Bitmap, cause: RuntimeException) :
    RuntimeException("Hand inference failed; retry bitmap retained", cause)
