package com.nextvr.app.pclink;

/**
 * Where PC Link reads the head pose from.
 *
 * <p>A named interface instead of a lambda so the activity can pass the renderer's own accessor
 * (`renderer::copyHeadPose`) without either side knowing the other's class: PC Link must not compile
 * against the compositor, and the compositor must not know what a PC Link is.
 *
 * <p>The array is filled with `x, y, z, qx, qy, qz, qw` in the app frame — metres, +Y up, +Z behind
 * the user. Returning `false` means "no frame has been drawn yet", which is not the same as the
 * origin: a pose of zero would put the game's world at the user's feet.
 */
public interface PcLinkHeadSource {
    boolean copyHeadPose(float[] out);
}
