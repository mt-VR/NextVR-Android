package com.nextvr.cardboard.hands
import org.junit.Assert.*
import org.junit.Test
class PalmMenuPoseTest {
    @Test fun onlyAnUprightPalmFacingTheEyesQualifies() {
        val p=FloatArray(63)
        fun point(i:Int,x:Float,y:Float,z:Float){p[i*3]=x;p[i*3+1]=y;p[i*3+2]=z}
        point(0,0f,-.15f,-.5f);point(5,-.06f,0f,-.5f)
        point(17,.06f,0f,-.5f);point(9,0f,.04f,-.5f)
        assertTrue(PalmMenuPose.eligible(p,true));assertFalse(PalmMenuPose.eligible(p,false))
        point(9,0f,-.3f,-.5f);assertFalse(PalmMenuPose.eligible(p,true))
        assertFalse(PalmMenuPose.eligible(null,true));assertFalse(PalmMenuPose.eligible(FloatArray(3),true))
    }
}
