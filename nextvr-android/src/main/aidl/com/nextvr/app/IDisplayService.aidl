package com.nextvr.app;

import android.view.Surface;
import android.view.KeyEvent;
import android.view.MotionEvent;

/** Shell-identity service used only through Shizuku's user-service binder. */
interface IDisplayService {
    // Shizuku's documented user-service destruction transaction.
    void destroy() = 16777114;

    /** Create a private app-rendering target backed by a SurfaceTexture owned by NextVR. */
    int createDisplay(in Surface surface, int width, int height, int densityDpi);

    /** Release only the requested app display; other VR app windows stay alive. */
    void releaseDisplay(int displayId);

    /** Start the package's launcher activity on displayId, never on the phone's default display. */
    String launch(String component, int displayId);

    /** Inject hand-generated input into the specified virtual display. */
    boolean injectKey(in KeyEvent event, int displayId);
    boolean injectMotion(in MotionEvent event, int displayId);
}
