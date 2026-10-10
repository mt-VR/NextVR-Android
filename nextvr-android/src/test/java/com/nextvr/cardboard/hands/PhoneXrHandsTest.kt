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
    private fun result(p:List<NormalizedLandmark>?,stamp:Long,world:List<Landmark>?=null)=object:HandLandmarkerResult(){
        override fun timestampMs()=stamp
        override fun landmarks()=if(p==null) emptyList() else listOf(p)
        override fun worldLandmarks()=if(p==null||world==null) emptyList() else listOf(world)
        override fun handednesses()=handedness()
        override fun handedness()=if(p==null) emptyList() else listOf(listOf(Category.create(1f,0,"Right","Right")))
    }
    private fun worldPoints(indexGapX:Float,indexGapZ:Float):List<Landmark> {
        val points=MutableList(21){Landmark.create(0f,0f,0f)}
        fun set(i:Int,x:Float,y:Float=0f,z:Float=0f){points[i]=Landmark.create(x,y,z)}
        set(5,-.5f);set(17,.5f) // palm width = 1 metre in this normalized fixture
        set(4,0f);set(8,indexGapX,0f,indexGapZ)
        return points
    }
    @Test fun pinchThresholdsMatchPhoneXrAndRemainHysteretic() {
        val latch=HandGestures.PinchLatch()
        assertFalse(latch.update(HandGestures.shape(points(.31f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.29f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.47f),false)))
        assertFalse(latch.update(HandGestures.shape(points(.49f),false)))
    }
    @Test fun metricThreeDimensionalPinchWorksWhenCameraProjectionLooksOpen() {
        val engine=PhoneXrHands()
        // The image landmarks show a 0.4-palm-width gap (too wide for the 2D close threshold),
        // but depth separation makes the true 3D gap sqrt(.28^2 + .21^2) = .35; the normalized
        // metric gap is .28, so the rotated-hand pinch must register.
        val pressed=engine.process(result(points(.4f),1000,worldPoints(.28f,.21f)),1f,1f).hands.single()
        assertEquals(.28f,pressed.shape.pinchGap,1e-5f)
        assertTrue(pressed.pinching)

        val released=engine.process(result(points(.4f),1040,worldPoints(.6f,.45f)),1f,1f).hands.single()
        assertEquals(.6f,released.shape.pinchGap,1e-5f)
        assertFalse(released.pinching)
    }
    @Test fun fistIsNotAClick() {
        val shape=HandGestures.shape(points(.2f,true),false)
        assertTrue(shape.fist);assertFalse(HandGestures.PinchLatch().update(shape))
    }
    @Test fun aSlowlySampledOpenPinchReleasesOnItsFirstObservedOpenFrame() {
        val latch=HandGestures.PinchLatch()
        assertFalse(latch.update(HandGestures.shape(points(.8f),false)))
        assertTrue(latch.update(HandGestures.shape(points(.2f),false)))
        // No elapsed-time or consecutive-frame debounce: the next completed inference is enough.
        assertFalse(latch.update(HandGestures.shape(points(.8f),false)))
        assertFalse(latch.pinching)
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
        // Retention (700 ms) covers transient stalls — a floating window opening, a GC pause,
        // GPU contention while an app is open — without blinking the silhouette off and on.
        assertSame(seen,presentation.silhouette(missing,1_550_000_000L))
        assertNull(presentation.silhouette(missing,1_751_000_000L))
    }
    @Test fun stalledResultCannotKeepASilhouetteForever() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,1_100_000_000L))
        // The bug this guards: the same frame object is drawn every display frame while the
        // detector is stalled (app open, GPU contention). A stale delivery must keep the last
        // pose instead of blinking the hand off until the next result arrives.
        assertSame(frame,presentation.silhouette(frame,1_600_000_000L))
        assertNull(presentation.silhouette(frame,1_750_000_000L))
    }
    @Test fun silhouetteFadesOutAtTheEndOfRetentionInsteadOfPopping() {
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,1_100_000_000L))
        assertEquals(1f,presentation.fade(frame,1_500_000_000L),0f)      // full while recent
        assertEquals(.5f,presentation.fade(frame,1_600_000_000L),.01f)   // fading over the last 200 ms
        assertEquals(0f,presentation.fade(frame,1_750_000_000L),0f)
    }
    @Test fun slowTrackerKeepsItsOwnValidityAsMinimumRetention() {
        // A detector legitimately reporting every ~1 s (validForNs 1.5 s) must not be hidden
        // between results: retention stretches to the frame's own validity window.
        val frame=PhoneXrHands().process(result(points(.2f),1000),1f,1f,2_000_000_000L)
        assertEquals(1_500_000_000L,frame.validForNs)
        val presentation=HandPresentation()
        assertSame(frame,presentation.silhouette(frame,2_000_000_000L))
        assertSame(frame,presentation.silhouette(frame,3_100_000_000L))
        assertNull(presentation.silhouette(frame,3_501_000_000L))
    }
    @Test fun nativeFilterHasRestingDeadZone() {
        val filter=HandGestures.OneEuro(minCutoff=1.4f,beta=12f,deadZone=.0008f)
        assertEquals(.5f,filter.filter(.5f,1000000000),0f)
        assertEquals(.5f,filter.filter(.5001f,1016000000),0f)
        assertTrue(filter.filter(.8f,1032000000)>.6f)
    }
    @Test fun predictionExtendsTheLastVelocityAtMostOneInterval() {
        val engine=PhoneXrHands()
        val h0=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        val a=h0.copy(points=FloatArray(63){.10f},baseX=.10f,aimX=.10f)
        val b=h0.copy(points=FloatArray(63){.20f},baseX=.20f,aimX=.20f)
        val first=PhoneXrHands.Frame(listOf(a),1_000_000_000L,1_000_000_000L)
        val second=PhoneXrHands.Frame(listOf(b),1_040_000_000L,1_040_000_000L,500_000_000L,0L,first)
        // At the detection instant: exactly the detection, zero added latency.
        assertArrayEquals(b.points,second.predicted(1_040_000_000L).hands.single().points,0f)
        // Half an interval later: halfway along the velocity.
        assertArrayEquals(FloatArray(63){.25f},second.predicted(1_060_000_000L).hands.single().points,1e-6f)
        // One full interval: the velocity endpoint.
        assertArrayEquals(FloatArray(63){.30f},second.predicted(1_080_000_000L).hands.single().points,1e-6f)
        assertEquals(.30f,second.predicted(1_080_000_000L).hands.single().baseX,1e-6f)
        // Far beyond one interval: clamped, the hand never runs away on a stale velocity.
        assertArrayEquals(FloatArray(63){.30f},second.predicted(1_500_000_000L).hands.single().points,1e-6f)
    }
    @Test fun predictionKeepsGesturesFromTheNewestDetectionAndNeedsNoHistory() {
        val engine=PhoneXrHands()
        val h0=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        val pinching=h0.copy(pinching=true)
        val first=PhoneXrHands.Frame(listOf(h0),1_000_000_000L,1_000_000_000L)
        val second=PhoneXrHands.Frame(listOf(pinching),1_040_000_000L,1_040_000_000L,500_000_000L,0L,first)
        assertTrue(second.predicted(1_080_000_000L).hands.single().pinching)
        assertSame(first,first.predicted(1_500_000_000L))
    }
    @Test fun predictionNeverExtrapolatesAcrossALongGap() {
        val engine=PhoneXrHands()
        val h0=engine.process(result(points(.2f),1000),1f,1f).hands.single()
        val a=h0.copy(points=FloatArray(63){.10f})
        val b=h0.copy(points=FloatArray(63){.90f})
        val first=PhoneXrHands.Frame(listOf(a),1_000_000_000L,1_000_000_000L)
        // 2 s gap (hand lost and found again): show exactly where it was detected.
        val second=PhoneXrHands.Frame(listOf(b),3_000_000_000L,3_000_000_000L,500_000_000L,0L,first)
        assertArrayEquals(b.points,second.predicted(3_040_000_000L).hands.single().points,0f)
    }
    @Test fun processChainsThePreviousDetectionAndResetClearsIt() {
        val engine=PhoneXrHands()
        val first=engine.process(result(points(.2f),1000),1f,1f,1_000_000_000L)
        val second=engine.process(result(points(.2f),1040),1f,1f,1_040_000_000L)
        assertNotSame(first,second.previous)
        assertSame(first.hands,second.previous?.hands)
        assertNull(second.previous?.previous) // Prediction history stays one sample deep, not session-long.
        val third=engine.process(result(points(.2f),1080),1f,1f,1_080_000_000L)
        assertNotSame(second,third.previous)
        assertSame(second.hands,third.previous?.hands)
        assertNull(third.previous?.previous)
        engine.reset()
        val afterReset=engine.process(result(points(.2f),2000),1f,1f,2_000_000_000L)
        assertNull(afterReset.previous)
        // An empty frame neither breaks nor replaces the chain.
        val engine2=PhoneXrHands()
        val a=engine2.process(result(points(.2f),1000),1f,1f,1_000_000_000L)
        val empty=engine2.process(result(null,1040),1f,1f,1_040_000_000L)
        assertTrue(empty.hands.isEmpty())
        val b=engine2.process(result(points(.2f),1080),1f,1f,1_080_000_000L)
        assertNotSame(a,b.previous)
        assertSame(a.hands,b.previous?.hands)
        assertNull(b.previous?.previous)
    }
}
