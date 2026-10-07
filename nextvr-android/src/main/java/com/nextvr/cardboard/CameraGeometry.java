package com.nextvr.cardboard;

/** Rear camera only. Sensor pixels -> upright, unmirrored Android bitmap, exactly once.
 * Android Surface rotation constants are quarter turns; no SurfaceTexture transform is involved.
 * The GL camera shader samples this bitmap using top-left UVs (u=.5+x/span, v=.5-y/span).
 */
public final class CameraGeometry {
    private CameraGeometry() {}
    public static int uprightRotation(int sensorDegrees, int surfaceRotation) {
        if(surfaceRotation<0 || surfaceRotation>3 || sensorDegrees%90!=0)
            throw new IllegalArgumentException("Camera orientation must be a quarter turn");
        return ((sensorDegrees-surfaceRotation*90)%360+360)%360;
    }
    /** Same mapping as Bitmap + Matrix.postRotate(degrees), used in orientation regression tests. */
    public static float[] uprightPoint(float x,float y,int degrees) {
        switch(degrees) {
            case 0: return new float[]{x,y};
            case 90: return new float[]{1-y,x};
            case 180: return new float[]{1-x,1-y};
            case 270: return new float[]{y,1-x};
            default: throw new IllegalArgumentException("Invalid rotation");
        }
    }
}
