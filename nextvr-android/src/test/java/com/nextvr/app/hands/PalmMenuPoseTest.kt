package com.nextvr.app.hands
import org.junit.Assert.*
import org.junit.Test
class PalmMenuPoseTest {
    private fun hand(left:Boolean):FloatArray {
        // Same fixture mirrored: the pinky side flips with the hand, so the palm normal keeps
        // pointing at the eyes and the test is about the side-dependent sign, not about the pose.
        val p=FloatArray(63)
        val s=if(left)1f else -1f
        fun point(i:Int,x:Float,y:Float,z:Float){p[i*3]=s*x;p[i*3+1]=y;p[i*3+2]=z}
        point(0,0f,-.15f,-.5f);point(5,-.06f,0f,-.5f)
        point(17,.06f,0f,-.5f);point(9,0f,.04f,-.5f)
        return p
    }
    @Test fun onlyAnUprightPalmFacingTheEyesQualifies() {
        val p=hand(true)
        assertTrue(PalmMenuPose.eligible(p,true));assertFalse(PalmMenuPose.eligible(p,false))
        p[9*3+1]=-.3f;assertFalse(PalmMenuPose.eligible(p,true))
        assertFalse(PalmMenuPose.eligible(null,true));assertFalse(PalmMenuPose.eligible(FloatArray(3),true))
    }
    @Test fun theMirroredRightHandIsJudgedByTheSameRule() {
        // Regression for the allocation-free rewrite: the sign that undoes the mirrored selfie
        // convention is the only difference between the sides, and it must still be applied.
        assertTrue(PalmMenuPose.eligible(hand(true),true))
        assertTrue(PalmMenuPose.eligible(hand(false),false))
        assertFalse(PalmMenuPose.eligible(hand(true),false))
        assertFalse(PalmMenuPose.eligible(hand(false),true))
        // A forward-pointing hand (palm down, fingers up in the image) never qualifies on either side.
        val down=hand(false).also{it[9*3+1]=-.3f}
        assertFalse(PalmMenuPose.eligible(down,false))
    }
}
