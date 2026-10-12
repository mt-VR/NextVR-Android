// NextVR — the privileged half of the Android app windows.
//
// This interface is implemented by a Shizuku *user service*: the class below is instantiated by
// Shizuku in a process that runs with the identity of the shell user (UID 2000), which is what
// `adb shell` is. Shell holds CAPTURE_VIDEO_OUTPUT, ADD_TRUSTED_DISPLAY, INJECT_EVENTS and
// START_ACTIVITIES_FROM_BACKGROUND (frameworks/base/packages/Shell/AndroidManifest.xml), so that
// process — and only that process — can create a display other apps are allowed to run on, start an
// app there, and inject touch/key events into it. A normal app process can do none of those three
// things, with or without a MediaProjection token. Nothing here needs root.
package com.nextvr.app.apps;

import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.Surface;

interface IDisplayService {
    // Shizuku calls this when the service is replaced or unbound. The transaction id is fixed by the
    // Shizuku server (16777114 in AIDL, 16777115 on the wire), so destroy() must stay first.
    void destroy() = 16777114;

    // A public, touch-capable virtual display that composites into `surface`. Returns its id, or -1.
    int createDisplay(in Surface surface, int width, int height, int dpi) = 1;
    // Re-shape a live display when the VR window is resized (no teardown, no relaunch). Returns the
    // error text when the display could not take the new size, or null when it did. The app side
    // needs that answer: if it kept believing the new size while the display kept the old one, the
    // picture would be cropped and every touch would land somewhere else.
    String resizeDisplay(int displayId, int width, int height, int dpi) = 2;
    // Detach (null) or re-attach the output surface of an existing display: this is how a minimized
    // window stops producing frames without losing the app or its task.
    void setDisplaySurface(int displayId, in Surface surface) = 3;
    // Releases the display; because it is created with DESTROY_CONTENT_ON_REMOVAL, the app tasks
    // that live on it are removed with it.
    void releaseDisplay(int displayId) = 4;
    // Starts the launcher activity of `component` ("pkg/.Activity") on `displayId`. Returns the
    // error text printed by `am`, or null when the app started.
    String launch(String component, int displayId) = 5;
    void injectMotion(in MotionEvent event, int displayId) = 6;
    void injectKey(in KeyEvent event, int displayId) = 7;
    // Whether the app's process is still alive. Shell can read /proc for every UID; an app cannot.
    boolean processAlive(String packageName) = 8;
    // Self-test of this shell process, as JSON: uid, sdk, display count, which injector was found,
    // whether `am`/`pidof` exist, and the last error. The UI shows this instead of guessing.
    String capabilities() = 9;
}
