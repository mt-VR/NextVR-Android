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
    @Test fun pinchThresholdsMatchPhoneXrAndRemainHysteretic() {
        val latch=HandGestures.PinchLatch()
        assertFalse(latch.update(HandGestures.shape(points(.31f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.29f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.47f),false)))
        assertFalse(latch.update(HandGestures.shape(points(.49f),false)))
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
    @Test fun slowInferenceIsFreshOnCompletionNotOnCapture() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,2_000_000_000L)
        assertEquals(1_000_000_000L,frame.timestampNs)
        assertTrue(frame.isFresh(2_100_000_000L)) // old renderer rejected this immediately
        assertTrue(frame.isFresh(2_700_000_000L)) // CPU cadence, not a hard 500 ms timer
        assertFalse(frame.isFresh(3_500_000_001L)) // stalled detector still expires
        assertEquals(1_500_000_000L,frame.validForNs)
    }
    @Test fun fastInferenceStillExpiresPromptly() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,1_020_000_000L)
        assertEquals(500_000_000L,frame.validForNs)
        assertFalse(frame.isFresh(1_520_000_001L))
    }
    @Test fun cameraFrameAgeDoesNotAssumeTheSensorAndElapsedClocksShareAnEpoch() {
        // Capture timestamp is near zero here while completion is elapsedRealtime-like. Production
        // supplies the age measured from camera callback entry instead of subtracting these clocks.
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,2_000_000_000L,300_000_000L)
        assertEquals(750_000_000L,frame.validForNs)
        assertTrue(frame.isFresh(2_700_000_000L))
        assertFalse(frame.isFresh(2_750_000_001L))
    }
    @Test fun briefMissCanKeepOnlyTheSilhouetteNeverTheClick() {
        val engine=PhoneXrHands();val presentation=HandPresentation()
        val seen=engine.process(result(points(.2f),1000),1f,1f,1_050_000_000L)
        assertSame(seen,presentation.silhouette(seen,1_050_000_000L))
        val missing=engine.process(result(null,1050),1f,1f,1_100_000_000L)
        assertTrue(missing.hands.isEmpty())
        assertSame(seen,presentation.silhouette(missing,1_100_000_000L))
        // Retention matches the shortest frame validity (500 ms): transient stalls (floating
        // window opening, GC pause) no longer blink the silhouette off and on.
        assertSame(seen,presentation.silhouette(missing,1_500_000_000L))
        assertNull(presentation.silhouette(missing,1_551_000_000L))
    }
    @Test fun stalledResultCannotKeepASilhouetteForever() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,1_100_000_000L))
        assertNull(presentation.silhouette(frame,1_600_000_000L))
    }
    @Test fun nativeFilterHasRestingDeadZone() {
        val filter=HandGestures.OneEuro(minCutoff=1.4f,beta=12f,deadZone=.0008f)
        assertEquals(.5f,filter.filter(.5f,1000000000),0f)
        assertEquals(.5f,filter.filter(.5001f,1016000000),0f)
        assertTrue(filter.filter(.8f,1032000000)>.6f)
    }
}
