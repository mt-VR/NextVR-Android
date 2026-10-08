package com.nextvr.cardboard.hands

/** PhoneXR palmFacesEyes: palm toward eyes AND fingers upright. Never a forward-pointing click. */
object PalmMenuPose {
    fun eligible(p:FloatArray?,left:Boolean):Boolean {
        if(p==null || p.size!=63)return false
        fun v(i:Int)=floatArrayOf(p[i*3],p[i*3+1],p[i*3+2])
        val w=v(0);val i=v(5);val pinky=v(17);val m=v(9)
        val a=FloatArray(3){i[it]-w[it]};val b=FloatArray(3){pinky[it]-w[it]}
        val sign=if(left)-1f else 1f
        val n=floatArrayOf(sign*(a[1]*b[2]-a[2]*b[1]),sign*(a[2]*b[0]-a[0]*b[2]),sign*(a[0]*b[1]-a[1]*b[0]))
        val c=FloatArray(3){(w[it]+m[it])/2};val up=FloatArray(3){m[it]-w[it]}
        fun len(a:FloatArray)=kotlin.math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]).coerceAtLeast(1e-6f)
        val facing=-(n[0]*c[0]+n[1]*c[1]+n[2]*c[2])/(len(n)*len(c))
        return facing>.38f && up[1]/len(up)>.3f
    }
}
