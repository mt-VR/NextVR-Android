package com.nextvr.cardboard.hands
import com.google.mediapipe.tasks.components.containers.NormalizedLandmark
import com.google.mediapipe.tasks.components.containers.Landmark
import com.google.mediapipe.tasks.components.containers.Category
import com.google.mediapipe.tasks.vision.handlandmarker.HandLandmarkerResult
import org.junit.Assert.*
import org.junit.Test

class PhoneXrHandsTest {
    private fun points(gap:Float,fist:Boolean=false):List<NormalizedLandmark> {
        val p=MutableList(21){NormalizedLandmark.create(.5f,.4f,0f)}
        fun set(i:Int,x:Float,y:Float){p[i]=NormalizedLandmark.create(x,y,0f)}
        set(0,.5f,.85f);set(2,.35f,.62f);set(5,.4f,.6f);set(17,.7f,.6f);set(9,.5f,.58f);set(13,.6f,.6f)
        set(6,.4f,.5f);set(10,.5f,.45f);set(14,.6f,.5f);set(18,.7f,.52f)
        set(12,.5f,.22f);set(16,.6f,.25f);set(20,.7f,.3f)
        val y=if(fist).75f else .35f
        set(4,.5f-gap*.15f,y);set(8,.5f+gap*.15f,y)
        if(fist){set(12,.5f,.75f);set(16,.55f,.75f);set(20,.6f,.75f)}
        return p
    }
    private fun result(p:List<NormalizedLandmark>?,stamp:Long)=object:HandLandmarkerResult(){
        override fun timestampMs()=stamp
        override fun landmarks()=if(p==null) emptyList() else listOf(p)
        override fun worldLandmarks()=emptyList<List<Landmark>>()
        override fun handednesses()=handedness()
        override fun handedness()=if(p==null) emptyList() else listOf(listOf(Category.create(1f,0,"Right","Right")))
    }
    @Test fun forkPinchThresholdsAreImmediateAndHysteretic() {
        val latch=HandGestures.PinchLatch()
        assertFalse(latch.update(HandGestures.shape(points(.34f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.31f),false))) // no prototype two-frame gate
        assertTrue(latch.update(HandGestures.shape(points(.45f),false)))
        assertFalse(latch.update(HandGestures.shape(points(.51f),false)))
    }
    @Test fun fistIsNotAClick() {
        val shape=HandGestures.shape(points(.2f,true),false)
        assertTrue(shape.fist);assertFalse(HandGestures.PinchLatch().update(shape))
    }
    @Test fun nativeRearHandednessAndShoulderRayMatchFork() {
        val hand=PhoneXrHands().process(result(points(.2f),1000),1f,1f).hands.single()
        assertTrue(hand.left) // raw MediaPipe Right is physical Left for an unmirrored rear image
        val p=points(.2f);val expected=p[2].x()*.3f+p[5].x()*.45f+(p[4].x()+p[8].x())/2*.25f
        assertEquals(expected,hand.shape.aimX,1e-5f)
        assertNotEquals(hand.shape.pinchX,hand.shape.aimX)
        val shoulder=if(hand.baseX>0).45f else -.45f
        assertEquals(hand.baseX+(hand.baseX-shoulder)*.25f,hand.aimX,1e-5f)
        assertEquals(hand.baseY+(hand.baseY+1f)*.25f,hand.aimY,1e-5f)
    }
    @Test fun missingHandResetsNativeFiltersAndLatch() {
        val engine=PhoneXrHands()
        assertTrue(engine.process(result(points(.2f),1000),1f,1f).hands.single().pinching)
        assertTrue(engine.process(result(null,1016),1f,1f).hands.isEmpty())
        assertFalse(engine.process(result(points(.8f),1032),1f,1f).hands.single().pinching)
    }
    @Test fun fistUsesTheForkGrabFilterNotTheFarPointerFilter() {
        val engine=PhoneXrHands()
        val first=engine.process(result(points(.2f,true),1000),1f,1f).hands.single()
        assertTrue(first.shape.fist)
        assertEquals(first.shape.palmX,first.grabX,0f)
        val moved=points(.2f,true).map { NormalizedLandmark.create(it.x()+.15f,it.y(),it.z()) }
        val next=engine.process(result(moved,1016),1f,1f).hands.single()
        assertTrue(next.grabX>first.grabX)
        assertTrue(next.grabX<next.shape.palmX)
    }
    @Test fun nativeFilterHasRestingDeadZone() {
        val filter=HandGestures.OneEuro(minCutoff=1.4f,beta=12f,deadZone=.0008f)
        assertEquals(.5f,filter.filter(.5f,1000000000),0f)
        assertEquals(.5f,filter.filter(.5001f,1016000000),0f)
        assertTrue(filter.filter(.8f,1032000000)>.6f)
    }
}
