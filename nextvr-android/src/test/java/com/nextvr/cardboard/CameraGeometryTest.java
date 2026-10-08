package com.nextvr.cardboard;
import org.junit.Test;
import static org.junit.Assert.*;
public class CameraGeometryTest {
    @Test public void rearSensorAndDisplayRotations() {
        int[][] expected={{0,270,180,90},{90,0,270,180},{180,90,0,270},{270,180,90,0}};
        for(int sensor=0;sensor<4;sensor++)for(int display=0;display<4;display++)
            assertEquals(expected[sensor][display],CameraGeometry.uprightRotation(sensor*90,display));
    }
    @Test public void labeledCornersRotateButNeverMirror() {
        // Raw bitmap TOP-LEFT is A, TOP-RIGHT B, BOTTOM-RIGHT C, BOTTOM-LEFT D.
        float[][] source={{0,0},{1,0},{1,1},{0,1}};
        for(int rotation=0;rotation<360;rotation+=90) {
            for(int i=0;i<4;i++)assertArrayEquals(source[(i+rotation/90)%4],CameraGeometry.uprightPoint(source[i][0],source[i][1],rotation),0f);
            float[] o=CameraGeometry.uprightPoint(.2f,.3f,rotation),x=CameraGeometry.uprightPoint(.3f,.3f,rotation),y=CameraGeometry.uprightPoint(.2f,.4f,rotation);
            assertTrue((x[0]-o[0])*(y[1]-o[1])-(x[1]-o[1])*(y[0]-o[0])>0); // no mirror
        }
    }
}
