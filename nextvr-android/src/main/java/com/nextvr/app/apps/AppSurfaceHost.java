package com.nextvr.app.apps;

import android.graphics.SurfaceTexture;

/**
 * The GL side of an app window, as seen from the session code.
 *
 * <p>An app display composites into a {@link SurfaceTexture} that a texture slot of
 * {@code SpatialRenderer} already samples every frame — the very same path a native browser surface
 * uses. NextVR's compositor therefore needed no new texture type for app windows: the only thing it
 * must not do is create or delete that slot off the GL thread, which is exactly what this interface
 * hides (the implementation queues the work on the GL thread and answers on the main thread).
 */
public interface AppSurfaceHost {
    /**
     * Creates (or reuses) the slot for [id] and returns its surface. [width]/[height] are the
     * display's pixels: the surface texture's default buffer size is set to them before anything
     * draws, which is the same order the WebView surfaces use.
     */
    void acquire(String id, int width, int height, Callback callback);

    /** Deletes the slot for [id] on the GL thread. Safe to call when it does not exist. */
    void release(String id);

    interface Callback {
        void ready(SurfaceTexture texture);
        void failed(String reason);
    }
}
