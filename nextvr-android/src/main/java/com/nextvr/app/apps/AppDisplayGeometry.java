package com.nextvr.app.apps;

/**
 * What the app on the other side of a window is really drawing, from what the display reports.
 *
 * <h2>The question this answers</h2>
 * When an app asks Android for a different orientation, what happens to a display <em>we</em>
 * created? The platform is free to do two different things, and they look completely different in the
 * window:
 *
 * <ul>
 *   <li><b>rotate the display</b> — the display's logical size becomes the swapped one, the compositor
 *       rotates the content into the buffer and the buffer's transform tells the consumer how to read
 *       it. The picture the user sees is the app's own portrait/landscape picture, and the window must
 *       be fitted with the swapped aspect (and the touch mapped back through the same rotation);</li>
 *   <li><b>letterbox the app</b> — the display keeps its size, the app is drawn inside it with bars
 *       (what happens to a portrait-only app on a wide display, and what happens when the platform is
 *       configured not to rotate: car displays, desktop modes, TVs). The picture is the natural size
 *       and nothing is rotated.</li>
 * </ul>
 *
 * <p>Guessing wrong is what makes a picture land in the left half of a window or lose its lower half,
 * so this class does not guess: it reads the display's natural size, its rotation and the logical size
 * the app sees, and decides which of the two happened.
 *
 * <p>Pure Java and unit-tested, because it is the piece that turns "the window is wrong" into a
 * single line of arithmetic.
 */
public final class AppDisplayGeometry {
    /** Natural (unrotated) size of the display, the rotation it reports and the size apps see. */
    public static final class Visible {
        /** Width of the picture, rotation applied. */
        public final int width;
        /** Height of the picture, rotation applied. */
        public final int height;
        /**
         * Rotation the picture really has, in degrees: 0, 90, 180 or 270. Zero when the display
         * reports a rotation but its logical size did not actually change — that is a letterboxed
         * app, not a rotated one.
         */
        public final int rotation;
        /** True when the platform rotated the display instead of letterboxing the app inside it. */
        public final boolean rotated;

        Visible(int width, int height, int rotation, boolean rotated) {
            this.width = width;
            this.height = height;
            this.rotation = rotation;
            this.rotated = rotated;
        }

        public float aspect() { return height == 0 ? 1f : (float) width / height; }

        @Override public String toString() {
            return width + "x" + height + (rotated ? "@" + rotation : "");
        }
    }

    private AppDisplayGeometry() {}

    /**
     * Decides what the window must fit, from the display's own numbers.
     *
     * <p>The rule, in one sentence: <b>the logical size is the truth about the picture</b>; the
     * rotation is believed only when the logical size is the rotation of the natural size (that is the
     * platform saying "the content is rotated"), and is dropped when the logical size equals the
     * natural size (that is the platform saying "the app was letterboxed inside the display, nothing
     * turned").
     *
     * @param realWidth   natural width of the display (what it was created or resized with)
     * @param realHeight  natural height of the display
     * @param logicalWidth  width the apps see (rotation applied, when the platform applied it)
     * @param logicalHeight height the apps see
     * @param rotation    the rotation the display reports (0/90/180/270)
     */
    public static Visible visible(int realWidth, int realHeight, int logicalWidth, int logicalHeight,
                                  int rotation) {
        int naturalWidth = realWidth > 0 ? realWidth : logicalWidth;
        int naturalHeight = realHeight > 0 ? realHeight : logicalHeight;
        if (naturalWidth <= 0 || naturalHeight <= 0) return new Visible(0, 0, 0, false);
        int normalized = ((rotation % 360) + 360) % 360;
        boolean quarterTurn = normalized == 90 || normalized == 270;
        // Whether the reported rotation actually turned the content: the logical size has to be the
        // rotation of the natural size. Both sizes are known for a virtual display, so this is a
        // reading of the platform's own answer and not a guess.
        boolean turned = quarterTurn && logicalWidth == naturalHeight && logicalHeight == naturalWidth;
        if (turned) return new Visible(naturalHeight, naturalWidth, normalized, true);
        // Not turned: the picture is the logical size (a letterboxed app sees the display it kept),
        // falling back to the natural size when the logical one was not reported.
        int width = logicalWidth > 0 ? logicalWidth : naturalWidth;
        int height = logicalHeight > 0 ? logicalHeight : naturalHeight;
        return new Visible(width, height, 0, false);
    }
}
