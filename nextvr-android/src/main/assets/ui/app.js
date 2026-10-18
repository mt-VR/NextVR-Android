(()=>{var sp=0,yu=1,rp=2;var Vh=1,ap=2,jn=3,Ci=0,cn=1,Qn=2;var Ai=0,Us=1,_u=2,bu=3,Mu=4,op=5,Yi=100,lp=101,cp=102,Su=103,wu=104,up=200,hp=201,dp=202,fp=203,dl=204,fl=205,pp=206,mp=207,gp=208,vp=209,xp=210,yp=211,_p=212,bp=213,Mp=214,Sp=0,wp=1,Ep=2,Ra=3,Ap=4,Tp=5,Rp=6,Cp=7,Gh=0,Pp=1,Lp=2,Ti=0,Ip=1,Np=2,Dp=3,Up=4,Op=5,kp=6;var Wh=300,Fs=301,zs=302,pl=303,ml=304,Za=306,gl=1e3,Nn=1001,vl=1002,Qt=1003,Eu=1004;var ko=1005;var wn=1006,Fp=1007;var mr=1008;var Ri=1009,zp=1010,Bp=1011,$l=1012,Xh=1013,Si=1014,wi=1015,gr=1016,qh=1017,$h=1018,Ji=1020,Hp=1021,Dn=1023,Vp=1024,Gp=1025,Ki=1026,Bs=1027,Wp=1028,Yh=1029,Xp=1030,Zh=1031,Jh=1033,Fo=33776,zo=33777,Bo=33778,Ho=33779,Au=35840,Tu=35841,Ru=35842,Cu=35843,Kh=36196,Pu=37492,Lu=37496,Iu=37808,Nu=37809,Du=37810,Uu=37811,Ou=37812,ku=37813,Fu=37814,zu=37815,Bu=37816,Hu=37817,Vu=37818,Gu=37819,Wu=37820,Xu=37821,Vo=36492,qu=36494,$u=36495,qp=36283,Yu=36284,Zu=36285,Ju=36286;var Ca=2300,Pa=2301,Go=2302,Ku=2400,ju=2401,Qu=2402;var jh=3e3,ji=3001,$p=3200,Yp=3201,Zp=0,Jp=1,En="",Ft="srgb",ni="srgb-linear",Yl="display-p3",Ja="display-p3-linear",La="linear",mt="srgb",Ia="rec709",Na="p3";var ms=7680;var eh=519,Kp=512,jp=513,Qp=514,Qh=515,em=516,tm=517,nm=518,im=519,th=35044;var nh="300 es",xl=1035,ei=2e3,Da=2001,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=1234567,hr=Math.PI/180,vr=180/Math.PI;function Ws(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function Zl(n,e){return(n%e+e)%e}function sm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function rm(n,e,t){return n!==e?(t-n)/(e-n):0}function dr(n,e,t){return(1-t)*n+t*e}function am(n,e,t,i){return dr(n,e,1-Math.exp(-t*i))}function om(n,e=1){return e-Math.abs(Zl(n,e*2)-e)}function lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function um(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hm(n,e){return n+Math.random()*(e-n)}function dm(n){return n*(.5-Math.random())}function fm(n){n!==void 0&&(ih=n);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pm(n){return n*hr}function mm(n){return n*vr}function yl(n){return(n&n-1)===0&&n!==0}function gm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ua(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ed={DEG2RAD:hr,RAD2DEG:vr,generateUUID:Ws,clamp:en,euclideanModulo:Zl,mapLinear:sm,inverseLerp:rm,lerp:dr,damp:am,pingpong:om,smoothstep:lm,smootherstep:cm,randInt:um,randFloat:hm,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:yl,ceilPowerOfTwo:gm,floorPowerOfTwo:Ua,setQuaternionFromProperEuler:vm,normalize:Kt,denormalize:Ls},je=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=s[0],f=s[3],m=s[6],w=s[1],y=s[4],A=s[7],R=s[2],E=s[5],T=s[8];return r[0]=o*v+a*w+l*R,r[3]=o*f+a*y+l*E,r[6]=o*m+a*A+l*T,r[1]=c*v+u*w+h*R,r[4]=c*f+u*y+h*E,r[7]=c*m+u*A+h*T,r[2]=d*v+p*w+g*R,r[5]=d*f+p*y+g*E,r[8]=d*m+p*A+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new We;function td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xm(){let n=Oa("canvas");return n.style.display="block",n}var sh={};function fr(n){n in sh||(sh[n]=!0,console.warn(n))}var rh=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ah=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[ni]:{transfer:La,primaries:Ia,toReference:n=>n,fromReference:n=>n},[Ft]:{transfer:mt,primaries:Ia,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ja]:{transfer:La,primaries:Na,toReference:n=>n.applyMatrix3(ah),fromReference:n=>n.applyMatrix3(rh)},[Yl]:{transfer:mt,primaries:Na,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ah),fromReference:n=>n.applyMatrix3(rh).convertLinearToSRGB()}},ym=new Set([ni,Ja]),ot={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ym.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ra[e].toReference,s=ra[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ra[n].primaries},getTransfer:function(n){return n===En?La:ra[n].transfer}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gs,ka=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=Oa("canvas")),gs.width=e.width,gs.height=e.height;let i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Os(t[i]/255)*255):t[i]=Os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_m=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qo(s[o].image)):r.push(qo(s[o]))}else r=qo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ka.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bm=0,Un=class n extends Pi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Nn,s=Nn,r=wn,o=mr,a=Dn,l=Ri,c=n.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ws(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ji?Ft:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gl:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gl:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?ji:jh}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ji?Ft:En}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Wh;Un.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,A=(p+1)/2,R=(m+1)/2,E=(u+d)/4,T=(h+v)/4,I=(g+f)/4;return y>A&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=T/i):A>R?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=I/r),this.set(i,s,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ji?Ft:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends _l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},za=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bl=class extends Un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let f=1-a,m=l*d+c*p+u*g+h*v,w=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,m*w);f=Math.sin(f*E)/R,a=Math.sin(a*E)/R}let A=a*w;if(l=l*f+d*A,c=c*f+p*A,u=u*f+g*A,h=h*f+v*A,f===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new N,oh=new sn,Qi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),oa.subVectors(this.max,or),vs.subVectors(e.a,or),xs.subVectors(e.b,or),ys.subVectors(e.c,or),xi.subVectors(xs,vs),yi.subVectors(ys,xs),Gi.subVectors(vs,ys);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Gi.z,Gi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Gi.z,0,-Gi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Gi.y,Gi.x,0];return!Yo(t,vs,xs,ys,oa)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,vs,xs,ys,oa))?!1:(la.crossVectors(xi,yi),t=[la.x,la.y,la.z],Yo(t,vs,xs,ys,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new N,new N,new N,new N,new N,new N,new N,new N],Pn=new N,aa=new Qi,vs=new N,xs=new N,ys=new N,xi=new N,yi=new N,Gi=new N,or=new N,oa=new N,la=new N,Wi=new N;function Yo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Mm=new Qi,lr=new N,Zo=new N,xr=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Zo)),this.expandByPoint(lr.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new N,Jo=new N,ca=new N,_i=new N,Ko=new N,ua=new N,jo=new N,Ba=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jo.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Jo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=_i.dot(this.direction),l=-_i.dot(ca),c=_i.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jo).addScaledVector(ca,d),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Ko.subVectors(t,e),ua.subVectors(i,e),jo.crossVectors(Ko,ua);let o=this.direction.dot(jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);let l=a*this.direction.dot(ua.crossVectors(_i,ua));if(l<0)return null;let c=a*this.direction.dot(Ko.cross(_i));if(c<0||l+c>o)return null;let u=-a*_i.dot(jo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,p,g,v,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,v,f)}set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,v,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,wm)}lookAt(e,t,i){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),bi.crossVectors(i,pn),bi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),bi.crossVectors(i,pn)),bi.normalize(),ha.crossVectors(pn,bi),s[0]=bi.x,s[4]=ha.x,s[8]=pn.x,s[1]=bi.y,s[5]=ha.y,s[9]=pn.y,s[2]=bi.z,s[6]=ha.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],f=i[10],m=i[14],w=i[3],y=i[7],A=i[11],R=i[15],E=s[0],T=s[4],I=s[8],x=s[12],M=s[1],U=s[5],q=s[9],Y=s[13],L=s[2],O=s[6],G=s[10],$=s[14],X=s[3],W=s[7],j=s[11],ie=s[15];return r[0]=o*E+a*M+l*L+c*X,r[4]=o*T+a*U+l*O+c*W,r[8]=o*I+a*q+l*G+c*j,r[12]=o*x+a*Y+l*$+c*ie,r[1]=u*E+h*M+d*L+p*X,r[5]=u*T+h*U+d*O+p*W,r[9]=u*I+h*q+d*G+p*j,r[13]=u*x+h*Y+d*$+p*ie,r[2]=g*E+v*M+f*L+m*X,r[6]=g*T+v*U+f*O+m*W,r[10]=g*I+v*q+f*G+m*j,r[14]=g*x+v*Y+f*$+m*ie,r[3]=w*E+y*M+A*L+R*X,r[7]=w*T+y*U+A*O+R*W,r[11]=w*I+y*q+A*G+R*j,r[15]=w*x+y*Y+A*$+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],f=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+f*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],f=e[14],m=e[15],w=h*f*c-v*d*c+v*l*p-a*f*p-h*l*m+a*d*m,y=g*d*c-u*f*c-g*l*p+o*f*p+u*l*m-o*d*m,A=u*v*c-g*h*c+g*a*p-o*v*p-u*a*m+o*h*m,R=g*h*l-u*v*l-g*a*d+o*v*d+u*a*f-o*h*f,E=t*w+i*y+s*A+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=w*T,e[1]=(v*d*r-h*f*r-v*s*p+i*f*p+h*s*m-i*d*m)*T,e[2]=(a*f*r-v*l*r+v*s*c-i*f*c-a*s*m+i*l*m)*T,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*T,e[4]=y*T,e[5]=(u*f*r-g*d*r+g*s*p-t*f*p-u*s*m+t*d*m)*T,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*m-t*l*m)*T,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*T,e[8]=A*T,e[9]=(g*h*r-u*v*r-g*i*p+t*v*p+u*i*m-t*h*m)*T,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*m+t*a*m)*T,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*T,e[12]=R*T,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*f+t*h*f)*T,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*f-t*a*f)*T,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,v=o*u,f=o*h,m=a*h,w=l*c,y=l*u,A=l*h,R=i.x,E=i.y,T=i.z;return s[0]=(1-(v+m))*R,s[1]=(p+A)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(p-A)*E,s[5]=(1-(d+m))*E,s[6]=(f+w)*E,s[7]=0,s[8]=(g+y)*T,s[9]=(f-w)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);let c=1/r,u=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ei){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===ei)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Da)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,p=(i+s)*u,g,v;if(a===ei)g=(o+r)*h,v=-2*h;else if(a===Da)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},_s=new N,Ln=new Qe,Sm=new N(0,0,0),wm=new N(1,1,1),bi=new N,ha=new N,pn=new N,lh=new Qe,ch=new sn,si=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Em=0,uh=new N,bs=new sn,Zn=new Qe,da=new N,cr=new N,Am=new N,Tm=new sn,hh=new N(1,0,0),dh=new N(0,1,0),fh=new N(0,0,1),Rm={type:"added"},Cm={type:"removed"},vn=class n extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new si,i=new sn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new We}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(cr,da,this.up):Zn.lookAt(da,cr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Zn),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};vn.DEFAULT_UP=new N(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new N,Jn=new N,Qo=new N,Kn=new N,Ms=new N,Ss=new N,ph=new N,el=new N,tl=new N,nl=new N,fa=!1,Is=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),Jn.subVectors(i,t),Qo.subVectors(e,t);let o=In.dot(In),a=In.dot(Jn),l=In.dot(Qo),c=Jn.dot(Jn),u=Jn.dot(Qo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,i,s,r,o,a,l){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),Jn.subVectors(e,t),In.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,i),Ss.subVectors(r,i),el.subVectors(e,i);let l=Ms.dot(el),c=Ss.dot(el);if(l<=0&&c<=0)return t.copy(i);tl.subVectors(e,s);let u=Ms.dot(tl),h=Ss.dot(tl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ms,o);nl.subVectors(e,r);let p=Ms.dot(nl),g=Ss.dot(nl);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ss,a);let f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return ph.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ph,a);let m=1/(f+v+d);return o=v*m,a=d*m,t.copy(i).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Zl(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=il(o,r,e+1/3),this.g=il(o,r,e),this.b=il(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=nd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ot.fromWorkingColorSpace(Xt.copy(this),e),Math.round(en(Xt.r*255,0,255))*65536+Math.round(en(Xt.g*255,0,255))*256+Math.round(en(Xt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ft){ot.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,s=Xt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(pa);let i=dr(Mi.h,pa.h,t),s=dr(Mi.s,pa.s,t),r=dr(Mi.l,pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new it;it.NAMES=nd;var Pm=0,Hs=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Us,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new N,ma=new je,An=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}};var Ha=class extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Va=class extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ti=class extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Lm=0,Sn=new Qe,sl=new vn,ws=new N,mn=new Qi,ur=new Qi,Ot=new N,es=class n extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?Va:Ha)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(mn.min,ur.min),mn.expandByPoint(Ot),Ot.addVectors(mn.max,ur.max),mn.expandByPoint(Ot)):(mn.expandByPoint(ur.min),mn.expandByPoint(ur.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Ot.add(ws)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new N,u[M]=new N;let h=new N,d=new N,p=new N,g=new je,v=new je,f=new je,m=new N,w=new N;function y(M,U,q){h.fromArray(s,M*3),d.fromArray(s,U*3),p.fromArray(s,q*3),g.fromArray(o,M*2),v.fromArray(o,U*2),f.fromArray(o,q*2),d.sub(h),p.sub(h),v.sub(g),f.sub(g);let Y=1/(v.x*f.y-f.x*v.y);isFinite(Y)&&(m.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(Y),w.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(Y),c[M].add(m),c[U].add(m),c[q].add(m),u[M].add(w),u[U].add(w),u[q].add(w))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let M=0,U=A.length;M<U;++M){let q=A[M],Y=q.start,L=q.count;for(let O=Y,G=Y+L;O<G;O+=3)y(i[O+0],i[O+1],i[O+2])}let R=new N,E=new N,T=new N,I=new N;function x(M){T.fromArray(r,M*3),I.copy(T);let U=c[M];R.copy(U),R.sub(T.multiplyScalar(T.dot(U))).normalize(),E.crossVectors(I,U);let Y=E.dot(u[M])<0?-1:1;l[M*4]=R.x,l[M*4+1]=R.y,l[M*4+2]=R.z,l[M*4+3]=Y}for(let M=0,U=A.length;M<U;++M){let q=A[M],Y=q.start,L=q.count;for(let O=Y,G=Y+L;O<G;O+=3)x(i[O+0]),x(i[O+1]),x(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new An(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mh=new Qe,Xi=new Ba,ga=new xr,gh=new N,Es=new N,As=new N,Ts=new N,rl=new N,va=new N,xa=new je,ya=new je,_a=new je,vh=new N,xh=new N,yh=new N,ba=new N,Ma=new N,nn=class extends vn{constructor(e=new es,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(rl.fromBufferAttribute(h,e),o?va.addScaledVector(rl,u):va.addScaledVector(rl.sub(t),u))}t.add(va)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(ga.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ga,gh)===null||Xi.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let f=d[g],m=o[f.materialIndex],w=Math.max(f.start,p.start),y=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let A=w,R=y;A<R;A+=3){let E=a.getX(A),T=a.getX(A+1),I=a.getX(A+2);s=Sa(this,m,e,i,c,u,h,E,T,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){let w=a.getX(f),y=a.getX(f+1),A=a.getX(f+2);s=Sa(this,o,e,i,c,u,h,w,y,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let f=d[g],m=o[f.materialIndex],w=Math.max(f.start,p.start),y=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let A=w,R=y;A<R;A+=3){let E=A,T=A+1,I=A+2;s=Sa(this,m,e,i,c,u,h,E,T,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){let w=f,y=f+1,A=f+2;s=Sa(this,o,e,i,c,u,h,w,y,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Im(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:n}}function Sa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Es),n.getVertexPosition(l,As),n.getVertexPosition(c,Ts);let u=Im(n,e,t,i,Es,As,Ts,ba);if(u){s&&(xa.fromBufferAttribute(s,a),ya.fromBufferAttribute(s,l),_a.fromBufferAttribute(s,c),u.uv=Is.getInterpolation(ba,Es,As,Ts,xa,ya,_a,new je)),r&&(xa.fromBufferAttribute(r,a),ya.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,c),u.uv1=Is.getInterpolation(ba,Es,As,Ts,xa,ya,_a,new je),u.uv2=u.uv1),o&&(vh.fromBufferAttribute(o,a),xh.fromBufferAttribute(o,l),yh.fromBufferAttribute(o,c),u.normal=Is.getInterpolation(ba,Es,As,Ts,vh,xh,yh,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new N,materialIndex:0};Is.getNormal(Es,As,Ts,h.normal),u.face=h}return u}var _r=class n extends es{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ti(c,3)),this.setAttribute("normal",new ti(u,3)),this.setAttribute("uv",new ti(h,2));function g(v,f,m,w,y,A,R,E,T,I,x){let M=A/T,U=R/I,q=A/2,Y=R/2,L=E/2,O=T+1,G=I+1,$=0,X=0,W=new N;for(let j=0;j<G;j++){let ie=j*U-Y;for(let de=0;de<O;de++){let V=de*M-q;W[v]=V*w,W[f]=ie*y,W[m]=L,c.push(W.x,W.y,W.z),W[v]=0,W[f]=0,W[m]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(de/T),h.push(1-j/I),$+=1}}for(let j=0;j<I;j++)for(let ie=0;ie<T;ie++){let de=d+ie+O*j,V=d+ie+O*(j+1),Z=d+(ie+1)+O*(j+1),ce=d+(ie+1)+O*j;l.push(de,V,ce),l.push(V,Z,ce),X+=6}a.addGroup(p,X,x),p+=X,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){let e={};for(let t=0;t<n.length;t++){let i=Vs(n[t]);for(let s in i)e[s]=i[s]}return e}function Nm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function id(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}var Dm={clone:Vs,merge:jt},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ga=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends Ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Cs=1,Ml=class extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new tn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let o=new tn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let a=new tn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let l=new tn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new tn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Da)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wa=class extends Un{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sl=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?Ft:En),this.texture=new Wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _r(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ai});r.uniforms.tEquirect.value=t;let o=new nn(s,r),a=t.minFilter;return t.minFilter===mr&&(t.minFilter=wn),new Ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},al=new N,km=new N,Fm=new We,gn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=al.subVectors(i,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(al),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Fm.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new xr,wa=new N,Xa=class{constructor(e=new gn,t=new gn,i=new gn,s=new gn,r=new gn,o=new gn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],f=s[11],m=s[12],w=s[13],y=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,f-p,A-m).normalize(),i[1].setComponents(l+r,d+c,f+p,A+m).normalize(),i[2].setComponents(l+o,d+u,f+g,A+w).normalize(),i[3].setComponents(l-o,d-u,f-g,A-w).normalize(),i[4].setComponents(l-a,d-h,f-v,A-y).normalize(),t===ei)i[5].setComponents(l+a,d+h,f+v,A+y).normalize();else if(t===Da)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zm(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let h=c.array,d=c.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){let d=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let v=0,f=g.length;v<f;v++){let m=g[v];t?n.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}var xn=class n extends es{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],v=[],f=[];for(let m=0;m<u;m++){let w=m*d-o;for(let y=0;y<c;y++){let A=y*h-r;g.push(A,-w,0),v.push(0,0,1),f.push(y/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let y=w+c*m,A=w+c*(m+1),R=w+1+c*(m+1),E=w+1+c*m;p.push(y,A,E),p.push(A,R,E)}this.setIndex(p),this.setAttribute("position",new ti(g,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,t0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Bm,alphahash_pars_fragment:Hm,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:$m,batching_pars_vertex:Ym,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:Km,bsdfs:jm,iridescence_fragment:Qm,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:ag,color_pars_vertex:og,color_vertex:lg,common:cg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:hg,displacementmap_pars_vertex:dg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:vg,envmap_fragment:xg,envmap_common_pars_fragment:yg,envmap_pars_fragment:_g,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Ng,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:wg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Tg,lightmap_fragment:Rg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Ig,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ug,lights_phong_fragment:Og,lights_phong_pars_fragment:kg,lights_physical_fragment:Fg,lights_physical_pars_fragment:zg,lights_fragment_begin:Bg,lights_fragment_maps:Hg,lights_fragment_end:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:qg,map_fragment:$g,map_pars_fragment:Yg,map_particle_fragment:Zg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:jg,morphcolor_vertex:Qg,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:d0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:v0,dithering_pars_fragment:x0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:w0,skinbase_vertex:E0,skinning_pars_vertex:A0,skinning_vertex:T0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:L0,tonemapping_pars_fragment:I0,transmission_fragment:N0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:O0,uv_vertex:k0,worldpos_vertex:F0,background_vert:z0,background_frag:B0,backgroundCube_vert:H0,backgroundCube_frag:V0,cube_vert:G0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distanceRGBA_vert:$0,distanceRGBA_frag:Y0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:K0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:av,meshphong_vert:ov,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:uv,meshtoon_vert:hv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:vv,sprite_frag:xv},re={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},zn={basic:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new it(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:jt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:jt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new it(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:jt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:jt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:jt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:jt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:jt([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:jt([re.lights,re.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};zn.physical={uniforms:jt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Ea={r:0,b:0,g:0};function yv(n,e,t,i,s,r,o){let a=new it(0),l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(f,m){let w=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),w=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Za)?(u===void 0&&(u=new nn(new _r(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Vs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ot.getTransfer(y.colorSpace)!==mt,(h!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new nn(new xn(2,2),new ai({name:"BackgroundMaterial",uniforms:Vs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,m){f.getRGB(Ea,id(n)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(f,m=1){a.set(f),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(a,l)},render:g}}function _v(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,u=!1;function h(L,O,G,$,X){let W=!1;if(o){let j=v($,G,O);c!==j&&(c=j,p(c.object)),W=m(L,$,G,X),W&&w(L,$,G,X)}else{let j=O.wireframe===!0;(c.geometry!==$.id||c.program!==G.id||c.wireframe!==j)&&(c.geometry=$.id,c.program=G.id,c.wireframe=j,W=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,I(L,O,G,$),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,O,G){let $=G.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[O.id];W===void 0&&(W={},X[O.id]=W);let j=W[$];return j===void 0&&(j=f(d()),W[$]=j),j}function f(L){let O=[],G=[],$=[];for(let X=0;X<s;X++)O[X]=0,G[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:$,object:L,attributes:{},index:null}}function m(L,O,G,$){let X=c.attributes,W=O.attributes,j=0,ie=G.getAttributes();for(let de in ie)if(ie[de].location>=0){let Z=X[de],ce=W[de];if(ce===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==$}function w(L,O,G,$){let X={},W=O.attributes,j=0,ie=G.getAttributes();for(let de in ie)if(ie[de].location>=0){let Z=W[de];Z===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),X[de]=ce,j++}c.attributes=X,c.attributesNum=j,c.index=$}function y(){let L=c.newAttributes;for(let O=0,G=L.length;O<G;O++)L[O]=0}function A(L){R(L,0)}function R(L,O){let G=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;G[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),X[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),X[L]=O)}function E(){let L=c.newAttributes,O=c.enabledAttributes;for(let G=0,$=O.length;G<$;G++)O[G]!==L[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function T(L,O,G,$,X,W,j){j===!0?n.vertexAttribIPointer(L,O,G,X,W):n.vertexAttribPointer(L,O,G,$,X,W)}function I(L,O,G,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let X=$.attributes,W=G.getAttributes(),j=O.defaultAttributeValues;for(let ie in W){let de=W[ie];if(de.location>=0){let V=X[ie];if(V===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let Z=V.normalized,ce=V.itemSize,Me=t.get(V);if(Me===void 0)continue;let be=Me.buffer,De=Me.type,Oe=Me.bytesPerElement,Re=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||V.gpuType===Xh);if(V.isInterleavedBufferAttribute){let $e=V.data,k=$e.stride,Yt=V.offset;if($e.isInstancedInterleavedBuffer){for(let we=0;we<de.locationSize;we++)R(de.location+we,$e.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let we=0;we<de.locationSize;we++)A(de.location+we);n.bindBuffer(n.ARRAY_BUFFER,be);for(let we=0;we<de.locationSize;we++)T(de.location+we,ce/de.locationSize,De,Z,k*Oe,(Yt+ce/de.locationSize*we)*Oe,Re)}else{if(V.isInstancedBufferAttribute){for(let $e=0;$e<de.locationSize;$e++)R(de.location+$e,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let $e=0;$e<de.locationSize;$e++)A(de.location+$e);n.bindBuffer(n.ARRAY_BUFFER,be);for(let $e=0;$e<de.locationSize;$e++)T(de.location+$e,ce/de.locationSize,De,Z,ce*Oe,ce/de.locationSize*$e*Oe,Re)}}else if(j!==void 0){let Z=j[ie];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(de.location,Z);break;case 3:n.vertexAttrib3fv(de.location,Z);break;case 4:n.vertexAttrib4fv(de.location,Z);break;default:n.vertexAttrib1fv(de.location,Z)}}}}E()}function x(){q();for(let L in a){let O=a[L];for(let G in O){let $=O[G];for(let X in $)g($[X].object),delete $[X];delete O[G]}delete a[L]}}function M(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let G in O){let $=O[G];for(let X in $)g($[X].object),delete $[X];delete O[G]}delete a[L.id]}function U(L){for(let O in a){let G=a[O];if(G[L.id]===void 0)continue;let $=G[L.id];for(let X in $)g($[X].object),delete $[X];delete G[L.id]}}function q(){Y(),u=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:Y,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:A,disableUnusedAttributes:E}}function bv(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Mv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,A=o||e.has("OES_texture_float"),R=y&&A,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:R,maxSamples:E}}function Sv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new gn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let w=r?0:i,y=w*4,A=m.clippingState||null;l.value=A,A=u(g,d,y,p);for(let R=0;R!==y;++R)A[R]=t[R];m.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){let v=h!==null?h.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let m=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<m)&&(f=new Float32Array(m));for(let y=0,A=p;y!==v;++y,A+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(f,A),f[A+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function wv(n){let e=new WeakMap;function t(o,a){return a===pl?o.mapping=Fs:a===ml&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===pl||a===ml)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sl(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var wl=class extends Ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ns=4,_h=[.125,.215,.35,.446,.526,.582],Zi=20,ol=new wl,bh=new it,ll=null,cl=0,ul=0,$i=(1+Math.sqrt(5))/2,Ps=1/$i,Mh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,$i,Ps),new N(0,$i,-Ps),new N(Ps,0,$i),new N(-Ps,0,$i),new N($i,Ps,0),new N(-$i,Ps,0)],qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,ul),e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:gr,format:Dn,colorSpace:ni,depthBuffer:!1},s=Sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ev(r)),this._blurMaterial=Av(r,e,t)}return s}_compileMaterial(e){let t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(bh),u.toneMapping=Ti,u.autoClear=!1;let p=new ri({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new nn(new _r,p),v=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,v=!0):(p.color.copy(bh),v=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Aa(s,w*y,m>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Fs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ol)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mh[(s-1)%Mh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new nn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):Zi;f>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zi}`);let m=[],w=0;for(let T=0;T<Zi;++T){let I=T/v,x=Math.exp(-I*I/2);m.push(x),T===0?w+=x:T<f&&(w+=2*x)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let A=this._sizeLods[s],R=3*A*(s>y-Ns?s-y+Ns:0),E=4*(this._cubeSize-A);Aa(t,R,E,3*A,2*A),l.setRenderTarget(t),l.render(h,ol)}};function Ev(n){let e=[],t=[],i=[],s=n,r=n-Ns+1+_h.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ns?l=_h[o-n+Ns-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,f=2,m=1,w=new Float32Array(v*g*p),y=new Float32Array(f*g*p),A=new Float32Array(m*g*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,I=E>2?0:-1,x=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];w.set(x,v*g*E),y.set(d,f*g*E);let M=[E,E,E,E,E,E];A.set(M,m*g*E)}let R=new es;R.setAttribute("position",new An(w,v)),R.setAttribute("uv",new An(y,f)),R.setAttribute("faceIndex",new An(A,m)),e.push(R),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sh(n,e,t){let i=new ii(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Av(n,e,t){let i=new Float32Array(Zi),s=new N(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function wh(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Eh(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===pl||l===ml,u=l===Fs||l===zs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new qa(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new qa(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Rv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Cv(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let f=0,m=v.length;f<m;f++)e.update(v[f],n.ARRAY_BUFFER)}}function c(h){let d=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let y=0,A=w.length;y<A;y+=3){let R=w[y+0],E=w[y+1],T=w[y+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){let w=g.array;v=g.version;for(let y=0,A=w.length/3-1;y<A;y+=3){let R=y+0,E=y+1,T=y+2;d.push(R,E,E,T,T,R)}}else return;let f=new(td(d)?Va:Ha)(d,1);f.version=v;let m=r.get(h);m&&e.remove(m),r.set(h,f)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Pv(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function h(p,g,v){if(v===0)return;let f,m;if(s)f=n,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,g,a,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<v;m++)this.render(p[m]/l,g[m]);else{f.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let m=0;for(let w=0;w<v;w++)m+=g[w];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Lv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Iv(n,e){return n[0]-e[0]}function Nv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Dv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(u);if(v===void 0||v.count!==g){let L=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();let w=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],T=u.morphAttributes.color||[],I=0;w===!0&&(I=1),y===!0&&(I=2),A===!0&&(I=3);let x=u.attributes.position.count*I,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let U=new Float32Array(x*M*4*g),q=new za(U,x,M,g);q.type=wi,q.needsUpdate=!0;let Y=I*4;for(let O=0;O<g;O++){let G=R[O],$=E[O],X=T[O],W=x*M*4*O;for(let j=0;j<G.count;j++){let ie=j*Y;w===!0&&(o.fromBufferAttribute(G,j),U[W+ie+0]=o.x,U[W+ie+1]=o.y,U[W+ie+2]=o.z,U[W+ie+3]=0),y===!0&&(o.fromBufferAttribute($,j),U[W+ie+4]=o.x,U[W+ie+5]=o.y,U[W+ie+6]=o.z,U[W+ie+7]=0),A===!0&&(o.fromBufferAttribute(X,j),U[W+ie+8]=o.x,U[W+ie+9]=o.y,U[W+ie+10]=o.z,U[W+ie+11]=X.itemSize===4?o.w:1)}}v={count:g,texture:q,size:new je(x,M)},r.set(u,v),u.addEventListener("dispose",L)}let f=0;for(let w=0;w<d.length;w++)f+=d[w];let m=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",m),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<p;y++){let A=g[y];A[0]=y,A[1]=d[y]}g.sort(Nv);for(let y=0;y<8;y++)y<p&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Iv);let v=u.morphAttributes.position,f=u.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let A=a[y],R=A[0],E=A[1];R!==Number.MAX_SAFE_INTEGER&&E?(v&&u.getAttribute("morphTarget"+y)!==v[R]&&u.setAttribute("morphTarget"+y,v[R]),f&&u.getAttribute("morphNormal"+y)!==f[R]&&u.setAttribute("morphNormal"+y,f[R]),s[y]=E,m+=E):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}let w=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Uv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $a=class extends Un{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ki&&(i=Si),i===void 0&&u===Bs&&(i=Ji),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rd=new Un,ad=new $a(1,1);ad.compareFunction=Qh;var od=new za,ld=new bl,cd=new Wa,Ah=[],Th=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function Xs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ov(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Bv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),Lt(t,i)}}function Hv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),Lt(t,i)}}function Vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Lt(t,i)}}function Gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function $v(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ad:rd;t.setTexture2D(e||r,s)}function jv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ld,s)}function Qv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cd,s)}function ex(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||od,s)}function tx(n){switch(n){case 5126:return Ov;case 35664:return kv;case 35665:return Fv;case 35666:return zv;case 35674:return Bv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return $v;case 36294:return Yv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(n,e){n.uniform1fv(this.addr,e)}function ix(n,e){let t=Xs(e,this.size,2);n.uniform2fv(this.addr,t)}function sx(n,e){let t=Xs(e,this.size,3);n.uniform3fv(this.addr,t)}function rx(n,e){let t=Xs(e,this.size,4);n.uniform4fv(this.addr,t)}function ax(n,e){let t=Xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ox(n,e){let t=Xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lx(n,e){let t=Xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cx(n,e){n.uniform1iv(this.addr,e)}function ux(n,e){n.uniform2iv(this.addr,e)}function hx(n,e){n.uniform3iv(this.addr,e)}function dx(n,e){n.uniform4iv(this.addr,e)}function fx(n,e){n.uniform1uiv(this.addr,e)}function px(n,e){n.uniform2uiv(this.addr,e)}function mx(n,e){n.uniform3uiv(this.addr,e)}function gx(n,e){n.uniform4uiv(this.addr,e)}function vx(n,e,t){let i=this.cache,s=e.length,r=Ka(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rd,r[o])}function xx(n,e,t){let i=this.cache,s=e.length,r=Ka(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ld,r[o])}function yx(n,e,t){let i=this.cache,s=e.length,r=Ka(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cd,r[o])}function _x(n,e,t){let i=this.cache,s=e.length,r=Ka(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||od,r[o])}function bx(n){switch(n){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return _x}}var El=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tx(t.type)}},Al=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bx(t.type)}},Tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function Lh(n,e){n.seq.push(e),n.map[e.id]=e}function Mx(n,e,t){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),o=hl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Lh(t,c===void 0?new El(a,n,e):new Al(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Tl(a),Lh(t,h)),t=h}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Mx(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ih(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Sx=37297,wx=0;function Ex(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Ax(n){let e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n),i;switch(e===t?i="":e===Na&&t===Ia?i="LinearDisplayP3ToLinearSRGB":e===Ia&&t===Na&&(i="LinearSRGBToLinearDisplayP3"),n){case ni:case Ja:return[i,"LinearTransferOETF"];case Ft:case Yl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Nh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ex(n.getShaderSource(e),o)}else return s}function Tx(n,e){let t=Ax(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rx(n,e){let t;switch(e){case Ip:t="Linear";break;case Np:t="Reinhard";break;case Dp:t="OptimizedCineon";break;case Up:t="ACESFilmic";break;case kp:t="AgX";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Px(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function Lx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ix(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ds(n){return n!==""}function Dh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(Nx,Ux)}var Dx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ux(n,e){let t=Fe[e];if(t===void 0){let i=Dx.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}var Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(Ox,kx)}function kx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function zx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case zs:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Hx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gh:e="ENVMAP_BLENDING_MULTIPLY";break;case Pp:e="ENVMAP_BLENDING_MIX";break;case Lp:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gx(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Fx(t),c=zx(t),u=Bx(t),h=Hx(t),d=Vx(t),p=t.isWebGL2?"":Cx(t),g=Px(t),v=Lx(r),f=s.createProgram(),m,w,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ds).join(`
`),m.length>0&&(m+=`
`),w=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ds).join(`
`),w.length>0&&(w+=`
`)):(m=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),w=[p,kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Tx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Rl(o),o=Dh(o,t),o=Uh(o,t),a=Rl(a),a=Dh(a,t),a=Uh(a,t),o=Oh(o),a=Oh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let A=y+m+o,R=y+w+a,E=Ih(s,s.VERTEX_SHADER,A),T=Ih(s,s.FRAGMENT_SHADER,R);s.attachShader(f,E),s.attachShader(f,T),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function I(q){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(E).trim(),O=s.getShaderInfoLog(T).trim(),G=!0,$=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,E,T);else{let X=Nh(s,E,"vertex"),W=Nh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||O==="")&&($=!1);$&&(q.diagnostics={runnable:G,programLog:Y,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:w}})}s.deleteShader(E),s.deleteShader(T),x=new ks(s,f),M=Ix(s,f)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(f,Sx)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wx++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=T,this}var Wx=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pl(e),t.set(e,i)),i}},Pl=class{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}};function Xx(n,e,t,i,s,r,o){let a=new yr,l=new Cl,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function f(x,M,U,q,Y){let L=q.fog,O=Y.geometry,G=x.isMeshStandardMaterial?q.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),X=$&&$.mapping===Za?$.image.height:null,W=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ie=j!==void 0?j.length:0,de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let V,Z,ce,Me;if(W){let Zt=zn[W];V=Zt.vertexShader,Z=Zt.fragmentShader}else V=x.vertexShader,Z=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);let be=n.getRenderTarget(),De=Y.isInstancedMesh===!0,Oe=Y.isBatchedMesh===!0,Re=!!x.map,$e=!!x.matcap,k=!!$,Yt=!!x.aoMap,we=!!x.lightMap,Ie=!!x.bumpMap,xe=!!x.normalMap,yt=!!x.displacementMap,ze=!!x.emissiveMap,S=!!x.metalnessMap,_=!!x.roughnessMap,z=x.anisotropy>0,ee=x.clearcoat>0,K=x.iridescence>0,ne=x.sheen>0,ye=x.transmission>0,le=z&&!!x.anisotropyMap,pe=ee&&!!x.clearcoatMap,Te=ee&&!!x.clearcoatNormalMap,Be=ee&&!!x.clearcoatRoughnessMap,J=K&&!!x.iridescenceMap,at=K&&!!x.iridescenceThicknessMap,Xe=ne&&!!x.sheenColorMap,Le=ne&&!!x.sheenRoughnessMap,Se=!!x.specularMap,me=!!x.specularColorMap,ke=!!x.specularIntensityMap,st=ye&&!!x.transmissionMap,St=ye&&!!x.thicknessMap,Ve=!!x.gradientMap,se=!!x.alphaMap,C=x.alphaTest>0,ae=!!x.alphaHash,oe=!!x.extensions,Ce=!!O.attributes.uv1,Ee=!!O.attributes.uv2,ht=!!O.attributes.uv3,dt=Ti;return x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Z,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Oe,instancing:De,instancingColor:De&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:ni,map:Re,matcap:$e,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:X,aoMap:Yt,lightMap:we,bumpMap:Ie,normalMap:xe,displacementMap:d&&yt,emissiveMap:ze,normalMapObjectSpace:xe&&x.normalMapType===Jp,normalMapTangentSpace:xe&&x.normalMapType===Zp,metalnessMap:S,roughnessMap:_,anisotropy:z,anisotropyMap:le,clearcoat:ee,clearcoatMap:pe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,iridescence:K,iridescenceMap:J,iridescenceThicknessMap:at,sheen:ne,sheenColorMap:Xe,sheenRoughnessMap:Le,specularMap:Se,specularColorMap:me,specularIntensityMap:ke,transmission:ye,transmissionMap:st,thicknessMap:St,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Us,alphaMap:se,alphaTest:C,alphaHash:ae,combine:x.combine,mapUv:Re&&v(x.map.channel),aoMapUv:Yt&&v(x.aoMap.channel),lightMapUv:we&&v(x.lightMap.channel),bumpMapUv:Ie&&v(x.bumpMap.channel),normalMapUv:xe&&v(x.normalMap.channel),displacementMapUv:yt&&v(x.displacementMap.channel),emissiveMapUv:ze&&v(x.emissiveMap.channel),metalnessMapUv:S&&v(x.metalnessMap.channel),roughnessMapUv:_&&v(x.roughnessMap.channel),anisotropyMapUv:le&&v(x.anisotropyMap.channel),clearcoatMapUv:pe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(x.sheenRoughnessMap.channel),specularMapUv:Se&&v(x.specularMap.channel),specularColorMapUv:me&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:st&&v(x.transmissionMap.channel),thicknessMapUv:St&&v(x.thicknessMap.channel),alphaMapUv:se&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:ht,pointsUvs:Y.isPoints===!0&&!!O.attributes.uv&&(Re||se),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:de,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)M.push(U),M.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(w(M,x),y(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function w(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function A(x){let M=g[x.type],U;if(M){let q=zn[M];U=Dm.clone(q.uniforms)}else U=x.uniforms;return U}function R(x,M){let U;for(let q=0,Y=c.length;q<Y;q++){let L=c[q];if(L.cacheKey===M){U=L,++U.usedTimes;break}}return U===void 0&&(U=new Gx(n,M,x,r),c.push(U)),U}function E(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:A,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:I}}function qx(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function $x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,g,v,f){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:f},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=f),e++,m}function a(h,d,p,g,v,f){let m=o(h,d,p,g,v,f);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(h,d,p,g,v,f){let m=o(h,d,p,g,v,f);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||$x),i.length>1&&i.sort(d||Fh),s.length>1&&s.sort(d||Fh)}function u(){for(let h=e,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Yx(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new zh,n.set(i,[o])):s>=r.length?(o=new zh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new it};break;case"SpotLight":t={position:new N,direction:new N,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Jx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Kx=0;function jx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Qx(n,e){let t=new Zx,i=Jx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new N);let r=new N,o=new Qe,a=new Qe;function l(u,h){let d=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let v=0,f=0,m=0,w=0,y=0,A=0,R=0,E=0,T=0,I=0,x=0;u.sort(jx);let M=h===!0?Math.PI:1;for(let q=0,Y=u.length;q<Y;q++){let L=u[q],O=L.color,G=L.intensity,$=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*G*M,p+=O.g*G*M,g+=O.b*G*M;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],G);x++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){let j=L.shadow,ie=i.get(L);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,s.directionalShadow[v]=ie,s.directionalShadowMap[v]=X,s.directionalShadowMatrix[v]=L.shadow.matrix,A++}s.directional[v]=W,v++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(G*M),W.distance=$,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[m]=W;let j=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,j.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[m]=j.matrix,L.castShadow){let ie=i.get(L);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,s.spotShadow[m]=ie,s.spotShadowMap[m]=X,E++}m++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[w]=W,w++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*M),W.distance=L.distance,W.decay=L.decay,L.castShadow){let j=L.shadow,ie=i.get(L);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,s.pointShadow[f]=ie,s.pointShadowMap[f]=X,s.pointShadowMatrix[f]=L.shadow.matrix,R++}s.point[f]=W,f++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(G*M),W.groundColor.copy(L.groundColor).multiplyScalar(G*M),s.hemi[y]=W,y++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==v||U.pointLength!==f||U.spotLength!==m||U.rectAreaLength!==w||U.hemiLength!==y||U.numDirectionalShadows!==A||U.numPointShadows!==R||U.numSpotShadows!==E||U.numSpotMaps!==T||U.numLightProbes!==x)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=w,s.point.length=f,s.hemi.length=y,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+T-I,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=x,U.directionalLength=v,U.pointLength=f,U.spotLength=m,U.rectAreaLength=w,U.hemiLength=y,U.numDirectionalShadows=A,U.numPointShadows=R,U.numSpotShadows=E,U.numSpotMaps=T,U.numLightProbes=x,s.version=Kx++)}function c(u,h){let d=0,p=0,g=0,v=0,f=0,m=h.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){let A=u[w];if(A.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(A.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(A.isRectAreaLight){let R=s.rectArea[v];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(A.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),p++}else if(A.isHemisphereLight){let R=s.hemi[f];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:s}}function Bh(n,e){let t=new Qx(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ey(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Bh(n,e),t.set(r,[l])):o>=a.length?(l=new Bh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ll=class extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Il=class extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iy(n,e,t){let i=new Xa,s=new je,r=new je,o=new zt,a=new Ll({depthPacking:Yp}),l=new Il,c={},u=t.maxTextureSize,h={[Ci]:cn,[cn]:Ci,[Qn]:Qn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new es;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new nn(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let m=this.type;this.render=function(E,T,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let x=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ai),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Y=m!==jn&&this.type===jn,L=m===jn&&this.type!==jn;for(let O=0,G=E.length;O<G;O++){let $=E[O],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||Y===!0||L===!0){let ie=this.type!==jn?{minFilter:Qt,magFilter:Qt}:{};X.map!==null&&X.map.dispose(),X.map=new ii(s.x,s.y,ie),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let j=X.getViewportCount();for(let ie=0;ie<j;ie++){let de=X.getViewport(ie);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),q.viewport(o),X.updateMatrices($,ie),i=X.getFrustum(),A(T,I,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===jn&&w(X,I),X.needsUpdate=!1}m=this.type,f.needsUpdate=!1,n.setRenderTarget(x,M,U)};function w(E,T){let I=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,I,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,I,p,v,null)}function y(E,T,I,x){let M=null,U=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)M=U;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let q=M.uuid,Y=T.uuid,L=c[q];L===void 0&&(L={},c[q]=L);let O=L[Y];O===void 0&&(O=M.clone(),L[Y]=O,T.addEventListener("dispose",R)),M=O}if(M.visible=T.visible,M.wireframe=T.wireframe,x===jn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let q=n.properties.get(M);q.light=I}return M}function A(E,T,I,x,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===jn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let Y=e.update(E),L=E.material;if(Array.isArray(L)){let O=Y.groups;for(let G=0,$=O.length;G<$;G++){let X=O[G],W=L[X.materialIndex];if(W&&W.visible){let j=y(E,W,x,M);E.onBeforeShadow(n,E,T,I,Y,j,X),n.renderBufferDirect(I,null,Y,j,E,X),E.onAfterShadow(n,E,T,I,Y,j,X)}}}else if(L.visible){let O=y(E,L,x,M);E.onBeforeShadow(n,E,T,I,Y,O,null),n.renderBufferDirect(I,null,Y,O,E,null),E.onAfterShadow(n,E,T,I,Y,O,null)}}let q=E.children;for(let Y=0,L=q.length;Y<L;Y++)A(q[Y],T,I,x,M)}function R(E){E.target.removeEventListener("dispose",R);for(let I in c){let x=c[I],M=E.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function sy(n,e,t){let i=t.isWebGL2;function s(){let C=!1,ae=new zt,oe=null,Ce=new zt(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!C&&(n.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){C=Ee},setClear:function(Ee,ht,dt,Dt,Zt){Zt===!0&&(Ee*=Dt,ht*=Dt,dt*=Dt),ae.set(Ee,ht,dt,Dt),Ce.equals(ae)===!1&&(n.clearColor(Ee,ht,dt,Dt),Ce.copy(ae))},reset:function(){C=!1,oe=null,Ce.set(-1,0,0,0)}}}function r(){let C=!1,ae=null,oe=null,Ce=null;return{setTest:function(Ee){Ee?Oe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Ee){ae!==Ee&&!C&&(n.depthMask(Ee),ae=Ee)},setFunc:function(Ee){if(oe!==Ee){switch(Ee){case Sp:n.depthFunc(n.NEVER);break;case wp:n.depthFunc(n.ALWAYS);break;case Ep:n.depthFunc(n.LESS);break;case Ra:n.depthFunc(n.LEQUAL);break;case Ap:n.depthFunc(n.EQUAL);break;case Tp:n.depthFunc(n.GEQUAL);break;case Rp:n.depthFunc(n.GREATER);break;case Cp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){C=Ee},setClear:function(Ee){Ce!==Ee&&(n.clearDepth(Ee),Ce=Ee)},reset:function(){C=!1,ae=null,oe=null,Ce=null}}}function o(){let C=!1,ae=null,oe=null,Ce=null,Ee=null,ht=null,dt=null,Dt=null,Zt=null;return{setTest:function(ft){C||(ft?Oe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(ft){ae!==ft&&!C&&(n.stencilMask(ft),ae=ft)},setFunc:function(ft,Jt,Fn){(oe!==ft||Ce!==Jt||Ee!==Fn)&&(n.stencilFunc(ft,Jt,Fn),oe=ft,Ce=Jt,Ee=Fn)},setOp:function(ft,Jt,Fn){(ht!==ft||dt!==Jt||Dt!==Fn)&&(n.stencilOp(ft,Jt,Fn),ht=ft,dt=Jt,Dt=Fn)},setLocked:function(ft){C=ft},setClear:function(ft){Zt!==ft&&(n.clearStencil(ft),Zt=ft)},reset:function(){C=!1,ae=null,oe=null,Ce=null,Ee=null,ht=null,dt=null,Dt=null,Zt=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap,d={},p={},g=new WeakMap,v=[],f=null,m=!1,w=null,y=null,A=null,R=null,E=null,T=null,I=null,x=new it(0,0,0),M=0,U=!1,q=null,Y=null,L=null,O=null,G=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=W>=2);let ie=null,de={},V=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ce=new zt().fromArray(V),Me=new zt().fromArray(Z);function be(C,ae,oe,Ce){let Ee=new Uint8Array(4),ht=n.createTexture();n.bindTexture(C,ht),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<oe;dt++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ae+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ht}let De={};De[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(Ra),ze(!1),S(yu),Oe(n.CULL_FACE),xe(Ai);function Oe(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function Re(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function $e(C,ae){return p[C]!==ae?(n.bindFramebuffer(C,ae),p[C]=ae,i&&(C===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),C===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(C,ae){let oe=v,Ce=!1;if(C)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),C.isWebGLMultipleRenderTargets){let Ee=C.texture;if(oe.length!==Ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,dt=Ee.length;ht<dt;ht++)oe[ht]=n.COLOR_ATTACHMENT0+ht;oe.length=Ee.length,Ce=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Ce=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Yt(C){return f!==C?(n.useProgram(C),f=C,!0):!1}let we={[Yi]:n.FUNC_ADD,[lp]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};if(i)we[Su]=n.MIN,we[wu]=n.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(we[Su]=C.MIN_EXT,we[wu]=C.MAX_EXT)}let Ie={[up]:n.ZERO,[hp]:n.ONE,[dp]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[xp]:n.SRC_ALPHA_SATURATE,[gp]:n.DST_COLOR,[pp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[vp]:n.ONE_MINUS_DST_COLOR,[mp]:n.ONE_MINUS_DST_ALPHA,[yp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[Mp]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(C,ae,oe,Ce,Ee,ht,dt,Dt,Zt,ft){if(C===Ai){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(Oe(n.BLEND),m=!0),C!==op){if(C!==w||ft!==U){if((y!==Yi||E!==Yi)&&(n.blendEquation(n.FUNC_ADD),y=Yi,E=Yi),ft)switch(C){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,R=null,T=null,I=null,x.set(0,0,0),M=0,w=C,U=ft}return}Ee=Ee||ae,ht=ht||oe,dt=dt||Ce,(ae!==y||Ee!==E)&&(n.blendEquationSeparate(we[ae],we[Ee]),y=ae,E=Ee),(oe!==A||Ce!==R||ht!==T||dt!==I)&&(n.blendFuncSeparate(Ie[oe],Ie[Ce],Ie[ht],Ie[dt]),A=oe,R=Ce,T=ht,I=dt),(Dt.equals(x)===!1||Zt!==M)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Zt),x.copy(Dt),M=Zt),w=C,U=!1}function yt(C,ae){C.side===Qn?Re(n.CULL_FACE):Oe(n.CULL_FACE);let oe=C.side===cn;ae&&(oe=!oe),ze(oe),C.blending===Us&&C.transparent===!1?xe(Ai):xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let Ce=C.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(C){q!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),q=C)}function S(C){C!==sp?(Oe(n.CULL_FACE),C!==Y&&(C===yu?n.cullFace(n.BACK):C===rp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),Y=C}function _(C){C!==L&&(X&&n.lineWidth(C),L=C)}function z(C,ae,oe){C?(Oe(n.POLYGON_OFFSET_FILL),(O!==ae||G!==oe)&&(n.polygonOffset(ae,oe),O=ae,G=oe)):Re(n.POLYGON_OFFSET_FILL)}function ee(C){C?Oe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function K(C){C===void 0&&(C=n.TEXTURE0+$-1),ie!==C&&(n.activeTexture(C),ie=C)}function ne(C,ae,oe){oe===void 0&&(ie===null?oe=n.TEXTURE0+$-1:oe=ie);let Ce=de[oe];Ce===void 0&&(Ce={type:void 0,texture:void 0},de[oe]=Ce),(Ce.type!==C||Ce.texture!==ae)&&(ie!==oe&&(n.activeTexture(oe),ie=oe),n.bindTexture(C,ae||De[C]),Ce.type=C,Ce.texture=ae)}function ye(){let C=de[ie];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(C){ce.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function st(C){Me.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Me.copy(C))}function St(C,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let Ce=oe.get(C);Ce===void 0&&(Ce=n.getUniformBlockIndex(ae,C.name),oe.set(C,Ce))}function Ve(C,ae){let Ce=h.get(ae).get(C);u.get(ae)!==Ce&&(n.uniformBlockBinding(ae,Ce,C.__bindingPointIndex),u.set(ae,Ce))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ie=null,de={},p={},g=new WeakMap,v=[],f=null,m=!1,w=null,y=null,A=null,R=null,E=null,T=null,I=null,x=new it(0,0,0),M=0,U=!1,q=null,Y=null,L=null,O=null,G=null,ce.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:$e,drawBuffers:k,useProgram:Yt,setBlending:xe,setMaterial:yt,setFlipSided:ze,setCullFace:S,setLineWidth:_,setPolygonOffset:z,setScissorTest:ee,activeTexture:K,bindTexture:ne,unbindTexture:ye,compressedTexImage2D:le,compressedTexImage3D:pe,texImage2D:Se,texImage3D:me,updateUBOMapping:St,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:Be,compressedTexSubImage2D:J,compressedTexSubImage3D:at,scissor:ke,viewport:st,reset:se}}function ry(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Oa("canvas")}function v(S,_,z,ee){let K=1;if((S.width>ee||S.height>ee)&&(K=ee/Math.max(S.width,S.height)),K<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ne=_?Ua:Math.floor,ye=ne(K*S.width),le=ne(K*S.height);h===void 0&&(h=g(ye,le));let pe=z?g(ye,le):h;return pe.width=ye,pe.height=le,pe.getContext("2d").drawImage(S,0,0,ye,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ye+"x"+le+")."),pe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return yl(S.width)&&yl(S.height)}function m(S){return a?!1:S.wrapS!==Nn||S.wrapT!==Nn||S.minFilter!==Qt&&S.minFilter!==wn}function w(S,_){return S.generateMipmaps&&_&&S.minFilter!==Qt&&S.minFilter!==wn}function y(S){n.generateMipmap(S)}function A(S,_,z,ee,K=!1){if(a===!1)return _;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ne=_;if(_===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),_===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8)),_===n.RGBA){let ye=K?La:ot.getTransfer(ee);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=ye===mt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(S,_,z){return w(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==Qt&&S.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function E(S){return S===Qt||S===Eu||S===ko?n.NEAREST:n.LINEAR}function T(S){let _=S.target;_.removeEventListener("dispose",T),x(_),_.isVideoTexture&&u.delete(_)}function I(S){let _=S.target;_.removeEventListener("dispose",I),U(_)}function x(S){let _=i.get(S);if(_.__webglInit===void 0)return;let z=S.source,ee=d.get(z);if(ee){let K=ee[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(S),Object.keys(ee).length===0&&d.delete(z)}i.remove(S)}function M(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let z=S.source,ee=d.get(z);delete ee[_.__cacheKey],o.memory.textures--}function U(S){let _=S.texture,z=i.get(S),ee=i.get(_);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(z.__webglFramebuffer[K]))for(let ne=0;ne<z.__webglFramebuffer[K].length;ne++)n.deleteFramebuffer(z.__webglFramebuffer[K][ne]);else n.deleteFramebuffer(z.__webglFramebuffer[K]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[K])}else{if(Array.isArray(z.__webglFramebuffer))for(let K=0;K<z.__webglFramebuffer.length;K++)n.deleteFramebuffer(z.__webglFramebuffer[K]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let K=0;K<z.__webglColorRenderbuffer.length;K++)z.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[K]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,ne=_.length;K<ne;K++){let ye=i.get(_[K]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(_[K])}i.remove(_),i.remove(S)}let q=0;function Y(){q=0}function L(){let S=q;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),q+=1,S}function O(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function G(S,_){let z=i.get(S);if(S.isVideoTexture&&yt(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,S,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function $(S,_){let z=i.get(S);if(S.version>0&&z.__version!==S.version){ce(z,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function X(S,_){let z=i.get(S);if(S.version>0&&z.__version!==S.version){ce(z,S,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function W(S,_){let z=i.get(S);if(S.version>0&&z.__version!==S.version){Me(z,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let j={[gl]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},ie={[Qt]:n.NEAREST,[Eu]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Fp]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},de={[Kp]:n.NEVER,[im]:n.ALWAYS,[jp]:n.LESS,[Qh]:n.LEQUAL,[Qp]:n.EQUAL,[nm]:n.GEQUAL,[em]:n.GREATER,[tm]:n.NOTEQUAL};function V(S,_,z){if(z?(n.texParameteri(S,n.TEXTURE_WRAP_S,j[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,j[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,j[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ie[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ie[_.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Nn||_.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,E(_.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,E(_.minFilter)),_.minFilter!==Qt&&_.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Qt||_.minFilter!==ko&&_.minFilter!==mr||_.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===gr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Z(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",T));let ee=_.source,K=d.get(ee);K===void 0&&(K={},d.set(ee,K));let ne=O(_);if(ne!==S.__cacheKey){K[ne]===void 0&&(K[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[ne].usedTimes++;let ye=K[S.__cacheKey];ye!==void 0&&(K[S.__cacheKey].usedTimes--,ye.usedTimes===0&&M(_)),S.__cacheKey=ne,S.__webglTexture=K[ne].texture}return z}function ce(S,_,z){let ee=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=n.TEXTURE_3D);let K=Z(S,_),ne=_.source;t.bindTexture(ee,S.__webglTexture,n.TEXTURE0+z);let ye=i.get(ne);if(ne.version!==ye.__version||K===!0){t.activeTexture(n.TEXTURE0+z);let le=ot.getPrimaries(ot.workingColorSpace),pe=_.colorSpace===En?null:ot.getPrimaries(_.colorSpace),Te=_.colorSpace===En||le===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Be=m(_)&&f(_.image)===!1,J=v(_.image,Be,!1,s.maxTextureSize);J=ze(_,J);let at=f(J)||a,Xe=r.convert(_.format,_.colorSpace),Le=r.convert(_.type),Se=A(_.internalFormat,Xe,Le,_.colorSpace,_.isVideoTexture);V(ee,_,at);let me,ke=_.mipmaps,st=a&&_.isVideoTexture!==!0&&Se!==Kh,St=ye.__version===void 0||K===!0,Ve=R(_,J,at);if(_.isDepthTexture)Se=n.DEPTH_COMPONENT,a?_.type===wi?Se=n.DEPTH_COMPONENT32F:_.type===Si?Se=n.DEPTH_COMPONENT24:_.type===Ji?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:_.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ki&&Se===n.DEPTH_COMPONENT&&_.type!==$l&&_.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Si,Le=r.convert(_.type)),_.format===Bs&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,_.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ji,Le=r.convert(_.type))),St&&(st?t.texStorage2D(n.TEXTURE_2D,1,Se,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Se,J.width,J.height,0,Xe,Le,null));else if(_.isDataTexture)if(ke.length>0&&at){st&&St&&t.texStorage2D(n.TEXTURE_2D,Ve,Se,ke[0].width,ke[0].height);for(let se=0,C=ke.length;se<C;se++)me=ke[se],st?t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,Xe,Le,me.data):t.texImage2D(n.TEXTURE_2D,se,Se,me.width,me.height,0,Xe,Le,me.data);_.generateMipmaps=!1}else st?(St&&t.texStorage2D(n.TEXTURE_2D,Ve,Se,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Xe,Le,J.data)):t.texImage2D(n.TEXTURE_2D,0,Se,J.width,J.height,0,Xe,Le,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){st&&St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Se,ke[0].width,ke[0].height,J.depth);for(let se=0,C=ke.length;se<C;se++)me=ke[se],_.format!==Dn?Xe!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,J.depth,Xe,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Se,me.width,me.height,J.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,J.depth,Xe,Le,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Se,me.width,me.height,J.depth,0,Xe,Le,me.data)}else{st&&St&&t.texStorage2D(n.TEXTURE_2D,Ve,Se,ke[0].width,ke[0].height);for(let se=0,C=ke.length;se<C;se++)me=ke[se],_.format!==Dn?Xe!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,Xe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,Xe,Le,me.data):t.texImage2D(n.TEXTURE_2D,se,Se,me.width,me.height,0,Xe,Le,me.data)}else if(_.isDataArrayTexture)st?(St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Se,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Xe,Le,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,Xe,Le,J.data);else if(_.isData3DTexture)st?(St&&t.texStorage3D(n.TEXTURE_3D,Ve,Se,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Xe,Le,J.data)):t.texImage3D(n.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,Xe,Le,J.data);else if(_.isFramebufferTexture){if(St)if(st)t.texStorage2D(n.TEXTURE_2D,Ve,Se,J.width,J.height);else{let se=J.width,C=J.height;for(let ae=0;ae<Ve;ae++)t.texImage2D(n.TEXTURE_2D,ae,Se,se,C,0,Xe,Le,null),se>>=1,C>>=1}}else if(ke.length>0&&at){st&&St&&t.texStorage2D(n.TEXTURE_2D,Ve,Se,ke[0].width,ke[0].height);for(let se=0,C=ke.length;se<C;se++)me=ke[se],st?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Xe,Le,me):t.texImage2D(n.TEXTURE_2D,se,Se,Xe,Le,me);_.generateMipmaps=!1}else st?(St&&t.texStorage2D(n.TEXTURE_2D,Ve,Se,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,Le,J)):t.texImage2D(n.TEXTURE_2D,0,Se,Xe,Le,J);w(_,at)&&y(ee),ye.__version=ne.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Me(S,_,z){if(_.image.length!==6)return;let ee=Z(S,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+z);let ne=i.get(K);if(K.version!==ne.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let ye=ot.getPrimaries(ot.workingColorSpace),le=_.colorSpace===En?null:ot.getPrimaries(_.colorSpace),pe=_.colorSpace===En||ye===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Te=_.isCompressedTexture||_.image[0].isCompressedTexture,Be=_.image[0]&&_.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Te&&!Be?J[se]=v(_.image[se],!1,!0,s.maxCubemapSize):J[se]=Be?_.image[se].image:_.image[se],J[se]=ze(_,J[se]);let at=J[0],Xe=f(at)||a,Le=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),me=A(_.internalFormat,Le,Se,_.colorSpace),ke=a&&_.isVideoTexture!==!0,st=ne.__version===void 0||ee===!0,St=R(_,at,Xe);V(n.TEXTURE_CUBE_MAP,_,Xe);let Ve;if(Te){ke&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,St,me,at.width,at.height);for(let se=0;se<6;se++){Ve=J[se].mipmaps;for(let C=0;C<Ve.length;C++){let ae=Ve[C];_.format!==Dn?Le!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,0,0,ae.width,ae.height,Le,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,0,0,ae.width,ae.height,Le,Se,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C,me,ae.width,ae.height,0,Le,Se,ae.data)}}}else{Ve=_.mipmaps,ke&&st&&(Ve.length>0&&St++,t.texStorage2D(n.TEXTURE_CUBE_MAP,St,me,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Be){ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Le,Se,J[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,J[se].width,J[se].height,0,Le,Se,J[se].data);for(let C=0;C<Ve.length;C++){let oe=Ve[C].image[se].image;ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,0,0,oe.width,oe.height,Le,Se,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,me,oe.width,oe.height,0,Le,Se,oe.data)}}else{ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Se,J[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Le,Se,J[se]);for(let C=0;C<Ve.length;C++){let ae=Ve[C];ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,0,0,Le,Se,ae.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,C+1,me,Le,Se,ae.image[se])}}}w(_,Xe)&&y(n.TEXTURE_CUBE_MAP),ne.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function be(S,_,z,ee,K,ne){let ye=r.convert(z.format,z.colorSpace),le=r.convert(z.type),pe=A(z.internalFormat,ye,le,z.colorSpace);if(!i.get(_).__hasExternalTextures){let Be=Math.max(1,_.width>>ne),J=Math.max(1,_.height>>ne);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ne,pe,Be,J,_.depth,0,ye,le,null):t.texImage2D(K,ne,pe,Be,J,0,ye,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),xe(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,i.get(z).__webglTexture,0,Ie(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,i.get(z).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||xe(_)){let K=_.depthTexture;K&&K.isDepthTexture&&(K.type===wi?ee=n.DEPTH_COMPONENT32F:K.type===Si&&(ee=n.DEPTH_COMPONENT24));let ne=Ie(_);xe(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,ee,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,ee,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let ee=Ie(_);z&&xe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,_.width,_.height):xe(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let ee=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let K=0;K<ee.length;K++){let ne=ee[K],ye=r.convert(ne.format,ne.colorSpace),le=r.convert(ne.type),pe=A(ne.internalFormat,ye,le,ne.colorSpace),Te=Ie(_);z&&xe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,_.width,_.height):xe(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);let ee=i.get(_.depthTexture).__webglTexture,K=Ie(_);if(_.depthTexture.format===Ki)xe(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Bs)xe(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Re(S){let _=i.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Oe(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]=n.createRenderbuffer(),De(_.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),De(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(S,_,z){let ee=i.get(S);_!==void 0&&be(ee.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Re(S)}function k(S){let _=S.texture,z=i.get(S),ee=i.get(_);S.addEventListener("dispose",I),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=_.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,ne=S.isWebGLMultipleRenderTargets===!0,ye=f(S)||a;if(K){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let pe=0;pe<_.mipmaps.length;pe++)z.__webglFramebuffer[le][pe]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ne)if(s.drawBuffers){let le=S.texture;for(let pe=0,Te=le.length;pe<Te;pe++){let Be=i.get(le[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&xe(S)===!1){let le=ne?_:[_];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){let Te=le[pe];z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);let Be=r.convert(Te.format,Te.colorSpace),J=r.convert(Te.type),at=A(Te.internalFormat,Be,J,Te.colorSpace,S.isXRRenderTarget===!0),Xe=Ie(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,at,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),De(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),V(n.TEXTURE_CUBE_MAP,_,ye);for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)be(z.__webglFramebuffer[le][pe],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else be(z.__webglFramebuffer[le],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);w(_,ye)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let le=S.texture;for(let pe=0,Te=le.length;pe<Te;pe++){let Be=le[pe],J=i.get(Be);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),V(n.TEXTURE_2D,Be,ye),be(z.__webglFramebuffer,S,Be,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),w(Be,ye)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?le=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),V(le,_,ye),a&&_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)be(z.__webglFramebuffer[pe],S,_,n.COLOR_ATTACHMENT0,le,pe);else be(z.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,le,0);w(_,ye)&&y(le),t.unbindTexture()}S.depthBuffer&&Re(S)}function Yt(S){let _=f(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,K=z.length;ee<K;ee++){let ne=z[ee];if(w(ne,_)){let ye=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(ne).__webglTexture;t.bindTexture(ye,le),y(ye),t.unbindTexture()}}}function we(S){if(a&&S.samples>0&&xe(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,ee=S.height,K=n.COLOR_BUFFER_BIT,ne=[],ye=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(S),pe=S.isWebGLMultipleRenderTargets===!0;if(pe)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){ne.push(n.COLOR_ATTACHMENT0+Te),S.depthBuffer&&ne.push(ye);let Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Te]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),pe){let J=i.get(_[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,z,ee,0,0,z,ee,K,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,le.__webglColorRenderbuffer[Te]);let Be=i.get(_[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(S){return Math.min(s.maxSamples,S.samples)}function xe(S){let _=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(S){let _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function ze(S,_){let z=S.colorSpace,ee=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===xl||z!==ni&&z!==En&&(ot.getTransfer(z)===mt?a===!1?e.has("EXT_sRGB")===!0&&ee===Dn?(S.format=xl,S.minFilter=wn,S.generateMipmaps=!1):_=ka.sRGBToLinear(_):(ee!==Dn||K!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe}function ay(n,e,t){let i=t.isWebGL2;function s(r,o=En){let a,l=ot.getTransfer(o);if(r===Ri)return n.UNSIGNED_BYTE;if(r===qh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return n.UNSIGNED_SHORT_5_5_5_1;if(r===zp)return n.BYTE;if(r===Bp)return n.SHORT;if(r===$l)return n.UNSIGNED_SHORT;if(r===Xh)return n.INT;if(r===Si)return n.UNSIGNED_INT;if(r===wi)return n.FLOAT;if(r===gr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Hp)return n.ALPHA;if(r===Dn)return n.RGBA;if(r===Vp)return n.LUMINANCE;if(r===Gp)return n.LUMINANCE_ALPHA;if(r===Ki)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===xl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Wp)return n.RED;if(r===Yh)return n.RED_INTEGER;if(r===Xp)return n.RG;if(r===Zh)return n.RG_INTEGER;if(r===Jh)return n.RGBA_INTEGER;if(r===Fo||r===zo||r===Bo||r===Ho)if(l===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Au||r===Tu||r===Ru||r===Cu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Au)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Pu||r===Lu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Pu)return l===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Lu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Iu||r===Nu||r===Du||r===Uu||r===Ou||r===ku||r===Fu||r===zu||r===Bu||r===Hu||r===Vu||r===Gu||r===Wu||r===Xu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Iu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Du)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ou)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ku)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vo||r===qu||r===$u)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vo)return l===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$u)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qp||r===Yu||r===Zu||r===Ju)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Yu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ju)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Nl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ei=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},oy={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,i),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Dl=class extends Pi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,v=t.getContextAttributes(),f=null,m=null,w=[],y=[],A=new je,R=null,E=new tn;E.layers.enable(1),E.viewport=new zt;let T=new tn;T.layers.enable(2),T.viewport=new zt;let I=[E,T],x=new Nl;x.layers.enable(1),x.layers.enable(2);let M=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=w[V];return Z===void 0&&(Z=new pr,w[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=w[V];return Z===void 0&&(Z=new pr,w[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=w[V];return Z===void 0&&(Z=new pr,w[V]=Z),Z.getHandSpace()};function q(V){let Z=y.indexOf(V.inputSource);if(Z===-1)return;let ce=w[Z];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",L);for(let V=0;V<w.length;V++){let Z=y[V];Z!==null&&(y[V]=null,w[V].disconnect(Z))}M=null,U=null,e.setRenderTarget(f),p=null,d=null,h=null,s=null,m=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new ii(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,ce=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?Bs:Ki,ce=v.stencil?Ji:Si);let be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new ii(d.textureWidth,d.textureHeight,{format:Dn,type:Ri,depthTexture:new $a(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let De=e.properties.get(m);De.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let Z=0;Z<V.removed.length;Z++){let ce=V.removed[Z],Me=y.indexOf(ce);Me>=0&&(y[Me]=null,w[Me].disconnect(ce))}for(let Z=0;Z<V.added.length;Z++){let ce=V.added[Z],Me=y.indexOf(ce);if(Me===-1){for(let De=0;De<w.length;De++)if(De>=y.length){y.push(ce),Me=De;break}else if(y[De]===null){y[De]=ce,Me=De;break}if(Me===-1)break}let be=w[Me];be&&be.connect(ce)}}let O=new N,G=new N;function $(V,Z,ce){O.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);let Me=O.distanceTo(G),be=Z.projectionMatrix.elements,De=ce.projectionMatrix.elements,Oe=be[14]/(be[10]-1),Re=be[14]/(be[10]+1),$e=(be[9]+1)/be[5],k=(be[9]-1)/be[5],Yt=(be[8]-1)/be[0],we=(De[8]+1)/De[0],Ie=Oe*Yt,xe=Oe*we,yt=Me/(-Yt+we),ze=yt*-Yt;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(yt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let S=Oe+yt,_=Re+yt,z=Ie-ze,ee=xe+(Me-ze),K=$e*Re/_*S,ne=k*Re/_*S;V.projectionMatrix.makePerspective(z,ee,K,ne,S,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;x.near=T.near=E.near=V.near,x.far=T.far=E.far=V.far,(M!==x.near||U!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,U=x.far);let Z=V.parent,ce=x.cameras;X(x,Z);for(let Me=0;Me<ce.length;Me++)X(ce[Me],Z);ce.length===2?$(x,E,T):x.projectionMatrix.copy(E.projectionMatrix),W(V,x,Z)};function W(V,Z,ce){ce===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let j=null;function ie(V,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){let ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let Me=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,Me=!0);for(let be=0;be<ce.length;be++){let De=ce[be],Oe=null;if(p!==null)Oe=p.getViewport(De);else{let $e=h.getViewSubImage(d,De);Oe=$e.viewport,be===0&&(e.setRenderTargetTextures(m,$e.colorTexture,d.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(m))}let Re=I[be];Re===void 0&&(Re=new tn,Re.layers.enable(be),Re.viewport=new zt,I[be]=Re),Re.matrix.fromArray(De.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(De.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),be===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Me===!0&&x.cameras.push(Re)}}for(let ce=0;ce<w.length;ce++){let Me=y[ce],be=w[ce];Me!==null&&be!==void 0&&be.update(Me,Z,c||o)}j&&j(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let de=new sd;de.setAnimationLoop(ie),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}};function ly(n,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,id(n)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,w,y,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,A)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),v(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,w,y):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===cn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===cn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let w=e.get(m).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,w,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*w,f.scale.value=y*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,w){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let w=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,y){let A=y.program;i.uniformBlockBinding(w,A)}function c(w,y){let A=s[w.id];A===void 0&&(g(w),A=u(w),s[w.id]=A,w.addEventListener("dispose",f));let R=y.program;i.updateUBOMapping(w,R);let E=e.render.frame;r[w.id]!==E&&(d(w),r[w.id]=E)}function u(w){let y=h();w.__bindingPointIndex=y;let A=n.createBuffer(),R=w.__size,E=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,A),A}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let y=s[w.id],A=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,T=A.length;E<T;E++){let I=Array.isArray(A[E])?A[E]:[A[E]];for(let x=0,M=I.length;x<M;x++){let U=I[x];if(p(U,E,x,R)===!0){let q=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],L=0;for(let O=0;O<Y.length;O++){let G=Y[O],$=v(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,q+L,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,A,R){let E=w.value,T=y+"_"+A;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{let I=R[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return R[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(w){let y=w.uniforms,A=0,R=16;for(let T=0,I=y.length;T<I;T++){let x=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,U=x.length;M<U;M++){let q=x[M],Y=Array.isArray(q.value)?q.value:[q.value];for(let L=0,O=Y.length;L<O;L++){let G=Y[L],$=v(G),X=A%R;X!==0&&R-X<$.boundary&&(A+=R-X),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=$.storage}}}let E=A%R;return E>0&&(A+=R-E),w.__size=A,w.__cache={},this}function v(w){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function f(w){let y=w.target;y.removeEventListener("dispose",f);let A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var br=class{constructor(e={}){let{canvas:t=xm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;let y=this,A=!1,R=0,E=0,T=null,I=-1,x=null,M=new zt,U=new zt,q=null,Y=new it(0),L=0,O=t.width,G=t.height,$=1,X=null,W=null,j=new zt(0,0,O,G),ie=new zt(0,0,O,G),de=!1,V=new Xa,Z=!1,ce=!1,Me=null,be=new Qe,De=new je,Oe=new N,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return T===null?$:1}let k=i;function Yt(b,D){for(let B=0;B<b.length;B++){let H=b[B],F=t.getContext(H,D);if(F!==null)return F}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){let D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),k=Yt(D,b),k===null)throw Yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,Ie,xe,yt,ze,S,_,z,ee,K,ne,ye,le,pe,Te,Be,J,at,Xe,Le,Se,me,ke,st;function St(){we=new Rv(k),Ie=new Mv(k,we,e),we.init(Ie),me=new ay(k,we,Ie),xe=new sy(k,we,Ie),yt=new Lv(k),ze=new qx,S=new ry(k,we,xe,ze,Ie,me,yt),_=new wv(y),z=new Tv(y),ee=new zm(k,Ie),ke=new _v(k,we,ee,Ie),K=new Cv(k,ee,yt,ke),ne=new Uv(k,K,ee,yt),Xe=new Dv(k,Ie,S),Be=new Sv(ze),ye=new Xx(y,_,z,we,Ie,ke,Be),le=new ly(y,ze),pe=new Yx,Te=new ey(we,Ie),at=new yv(y,_,z,xe,ne,d,l),J=new iy(y,ne,Ie),st=new cy(k,yt,Ie,xe),Le=new bv(k,we,yt,Ie),Se=new Pv(k,we,yt,Ie),yt.programs=ye.programs,y.capabilities=Ie,y.extensions=we,y.properties=ze,y.renderLists=pe,y.shadowMap=J,y.state=xe,y.info=yt}St();let Ve=new Dl(y,k);this.xr=Ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(O,G,!1))},this.getSize=function(b){return b.set(O,G)},this.setSize=function(b,D,B=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,G=D,t.width=Math.floor(b*$),t.height=Math.floor(D*$),B===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(O*$,G*$).floor()},this.setDrawingBufferSize=function(b,D,B){O=b,G=D,$=B,t.width=Math.floor(b*B),t.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,D,B,H){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,D,B,H),xe.viewport(M.copy(j).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,D,B,H){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,D,B,H),xe.scissor(U.copy(ie).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(b){xe.setScissorTest(de=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(b=!0,D=!0,B=!0){let H=0;if(b){let F=!1;if(T!==null){let ue=T.texture.format;F=ue===Jh||ue===Zh||ue===Yh}if(F){let ue=T.texture.type,_e=ue===Ri||ue===Si||ue===$l||ue===Ji||ue===qh||ue===$h,Ae=at.getClearColor(),Pe=at.getClearAlpha(),He=Ae.r,Ne=Ae.g,Ue=Ae.b;_e?(p[0]=He,p[1]=Ne,p[2]=Ue,p[3]=Pe,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=He,g[1]=Ne,g[2]=Ue,g[3]=Pe,k.clearBufferiv(k.COLOR,0,g))}else H|=k.COLOR_BUFFER_BIT}D&&(H|=k.DEPTH_BUFFER_BIT),B&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),Te.dispose(),ze.dispose(),_.dispose(),z.dispose(),ne.dispose(),ke.dispose(),st.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Zt),Ve.removeEventListener("sessionend",ft),Me&&(Me.dispose(),Me=null),Jt.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=yt.autoReset,D=J.enabled,B=J.autoUpdate,H=J.needsUpdate,F=J.type;St(),yt.autoReset=b,J.enabled=D,J.autoUpdate=B,J.needsUpdate=H,J.type=F}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){let D=b.target;D.removeEventListener("dispose",oe),Ce(D)}function Ce(b){Ee(b),ze.remove(b)}function Ee(b){let D=ze.get(b).programs;D!==void 0&&(D.forEach(function(B){ye.releaseProgram(B)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,H,F,ue){D===null&&(D=Re);let _e=F.isMesh&&F.matrixWorld.determinant()<0,Ae=ep(b,D,B,H,F);xe.setMaterial(H,_e);let Pe=B.index,He=1;if(H.wireframe===!0){if(Pe=K.getWireframeAttribute(B),Pe===void 0)return;He=2}let Ne=B.drawRange,Ue=B.attributes.position,At=Ne.start*He,fn=(Ne.start+Ne.count)*He;ue!==null&&(At=Math.max(At,ue.start*He),fn=Math.min(fn,(ue.start+ue.count)*He)),Pe!==null?(At=Math.max(At,0),fn=Math.min(fn,Pe.count)):Ue!=null&&(At=Math.max(At,0),fn=Math.min(fn,Ue.count));let Ut=fn-At;if(Ut<0||Ut===1/0)return;ke.setup(F,H,Ae,B,Pe);let qn,_t=Le;if(Pe!==null&&(qn=ee.get(Pe),_t=Se,_t.setIndex(qn)),F.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*$e()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(F.isLine){let Ge=H.linewidth;Ge===void 0&&(Ge=1),xe.setLineWidth(Ge*$e()),F.isLineSegments?_t.setMode(k.LINES):F.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else F.isPoints?_t.setMode(k.POINTS):F.isSprite&&_t.setMode(k.TRIANGLES);if(F.isBatchedMesh)_t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)_t.renderInstances(At,Ut,F.count);else if(B.isInstancedBufferGeometry){let Ge=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,No=Math.min(B.instanceCount,Ge);_t.renderInstances(At,Ut,No)}else _t.render(At,Ut)};function ht(b,D,B){b.transparent===!0&&b.side===Qn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,sa(b,D,B),b.side=Ci,b.needsUpdate=!0,sa(b,D,B),b.side=Qn):sa(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),f=Te.get(B),f.init(),w.push(f),B.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(y._useLegacyLights);let H=new Set;return b.traverse(function(F){let ue=F.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let Ae=ue[_e];ht(Ae,B,F),H.add(Ae)}else ht(ue,B,F),H.add(ue)}),w.pop(),f=null,H},this.compileAsync=function(b,D,B=null){let H=this.compile(b,D,B);return new Promise(F=>{function ue(){if(H.forEach(function(_e){ze.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){F(b);return}setTimeout(ue,10)}we.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let dt=null;function Dt(b){dt&&dt(b)}function Zt(){Jt.stop()}function ft(){Jt.start()}let Jt=new sd;Jt.setAnimationLoop(Dt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(b){dt=b,Ve.setAnimationLoop(b),b===null?Jt.stop():Jt.start()},Ve.addEventListener("sessionstart",Zt),Ve.addEventListener("sessionend",ft),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(D),D=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,D,T),f=Te.get(b,w.length),f.init(),w.push(f),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(be),ce=this.localClippingEnabled,Z=Be.init(this.clippingPlanes,ce),v=pe.get(b,m.length),v.init(),m.push(v),Fn(b,D,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(X,W),this.info.render.frame++,Z===!0&&Be.beginShadows();let B=f.state.shadowsArray;if(J.render(B,b,D),Z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(v,b),f.setupLights(y._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let F=0,ue=H.length;F<ue;F++){let _e=H[F];fu(v,b,_e,_e.viewport)}}else fu(v,b,D);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(y,b,D),ke.resetDefaultState(),I=-1,x=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Fn(b,D,B,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){H&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);let _e=ne.update(b),Ae=b.material;Ae.visible&&v.push(b,_e,Ae,B,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){let _e=ne.update(b),Ae=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Oe.copy(_e.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){let Pe=_e.groups;for(let He=0,Ne=Pe.length;He<Ne;He++){let Ue=Pe[He],At=Ae[Ue.materialIndex];At&&At.visible&&v.push(b,_e,At,B,Oe.z,Ue)}}else Ae.visible&&v.push(b,_e,Ae,B,Oe.z,null)}}let ue=b.children;for(let _e=0,Ae=ue.length;_e<Ae;_e++)Fn(ue[_e],D,B,H)}function fu(b,D,B,H){let F=b.opaque,ue=b.transmissive,_e=b.transparent;f.setupLightsView(B),Z===!0&&Be.setGlobalState(y.clippingPlanes,B),ue.length>0&&Qf(F,ue,D,B),H&&xe.viewport(M.copy(H)),F.length>0&&ia(F,D,B),ue.length>0&&ia(ue,D,B),_e.length>0&&ia(_e,D,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Qf(b,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ue=Ie.isWebGL2;Me===null&&(Me=new ii(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?gr:Ri,minFilter:mr,samples:ue?4:0})),y.getDrawingBufferSize(De),ue?Me.setSize(De.x,De.y):Me.setSize(Ua(De.x),Ua(De.y));let _e=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(Y),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Ae=y.toneMapping;y.toneMapping=Ti,ia(b,B,H),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me);let Pe=!1;for(let He=0,Ne=D.length;He<Ne;He++){let Ue=D[He],At=Ue.object,fn=Ue.geometry,Ut=Ue.material,qn=Ue.group;if(Ut.side===Qn&&At.layers.test(H.layers)){let _t=Ut.side;Ut.side=cn,Ut.needsUpdate=!0,pu(At,B,H,fn,Ut,qn),Ut.side=_t,Ut.needsUpdate=!0,Pe=!0}}Pe===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me)),y.setRenderTarget(_e),y.setClearColor(Y,L),y.toneMapping=Ae}function ia(b,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ue=b.length;F<ue;F++){let _e=b[F],Ae=_e.object,Pe=_e.geometry,He=H===null?_e.material:H,Ne=_e.group;Ae.layers.test(B.layers)&&pu(Ae,D,B,Pe,He,Ne)}}function pu(b,D,B,H,F,ue){b.onBeforeRender(y,D,B,H,F,ue),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(y,D,B,H,b,ue),F.transparent===!0&&F.side===Qn&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,y.renderBufferDirect(B,D,H,F,b,ue),F.side=Ci,F.needsUpdate=!0,y.renderBufferDirect(B,D,H,F,b,ue),F.side=Qn):y.renderBufferDirect(B,D,H,F,b,ue),b.onAfterRender(y,D,B,H,F,ue)}function sa(b,D,B){D.isScene!==!0&&(D=Re);let H=ze.get(b),F=f.state.lights,ue=f.state.shadowsArray,_e=F.state.version,Ae=ye.getParameters(b,F.state,ue,D,B),Pe=ye.getProgramCacheKey(Ae),He=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||H.environment),He===void 0&&(b.addEventListener("dispose",oe),He=new Map,H.programs=He);let Ne=He.get(Pe);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===_e)return gu(b,Ae),Ne}else Ae.uniforms=ye.getUniforms(b),b.onBuild(B,Ae,y),b.onBeforeCompile(Ae,y),Ne=ye.acquireProgram(Ae,Pe),He.set(Pe,Ne),H.uniforms=Ae.uniforms;let Ue=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=Be.uniform),gu(b,Ae),H.needsLights=np(b),H.lightsStateVersion=_e,H.needsLights&&(Ue.ambientLightColor.value=F.state.ambient,Ue.lightProbe.value=F.state.probe,Ue.directionalLights.value=F.state.directional,Ue.directionalLightShadows.value=F.state.directionalShadow,Ue.spotLights.value=F.state.spot,Ue.spotLightShadows.value=F.state.spotShadow,Ue.rectAreaLights.value=F.state.rectArea,Ue.ltc_1.value=F.state.rectAreaLTC1,Ue.ltc_2.value=F.state.rectAreaLTC2,Ue.pointLights.value=F.state.point,Ue.pointLightShadows.value=F.state.pointShadow,Ue.hemisphereLights.value=F.state.hemi,Ue.directionalShadowMap.value=F.state.directionalShadowMap,Ue.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ue.spotShadowMap.value=F.state.spotShadowMap,Ue.spotLightMatrix.value=F.state.spotLightMatrix,Ue.spotLightMap.value=F.state.spotLightMap,Ue.pointShadowMap.value=F.state.pointShadowMap,Ue.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function mu(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=ks.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function gu(b,D){let B=ze.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function ep(b,D,B,H,F){D.isScene!==!0&&(D=Re),S.resetTextureUnits();let ue=D.fog,_e=H.isMeshStandardMaterial?D.environment:null,Ae=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ni,Pe=(H.isMeshStandardMaterial?z:_).get(H.envMap||_e),He=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!B.morphAttributes.position,At=!!B.morphAttributes.normal,fn=!!B.morphAttributes.color,Ut=Ti;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let qn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=qn!==void 0?qn.length:0,Ge=ze.get(H),No=f.state.lights;if(Z===!0&&(ce===!0||b!==x)){let Mn=b===x&&H.id===I;Be.setState(H,b,Mn)}let wt=!1;H.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==No.state.version||Ge.outputColorSpace!==Ae||F.isBatchedMesh&&Ge.batching===!1||!F.isBatchedMesh&&Ge.batching===!0||F.isInstancedMesh&&Ge.instancing===!1||!F.isInstancedMesh&&Ge.instancing===!0||F.isSkinnedMesh&&Ge.skinning===!1||!F.isSkinnedMesh&&Ge.skinning===!0||F.isInstancedMesh&&Ge.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ge.instancingColor===!1&&F.instanceColor!==null||Ge.envMap!==Pe||H.fog===!0&&Ge.fog!==ue||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ne||Ge.morphTargets!==Ue||Ge.morphNormals!==At||Ge.morphColors!==fn||Ge.toneMapping!==Ut||Ie.isWebGL2===!0&&Ge.morphTargetsCount!==_t)&&(wt=!0):(wt=!0,Ge.__version=H.version);let Hi=Ge.currentProgram;wt===!0&&(Hi=sa(H,D,F));let vu=!1,ar=!1,Do=!1,Gt=Hi.getUniforms(),Vi=Ge.uniforms;if(xe.useProgram(Hi.program)&&(vu=!0,ar=!0,Do=!0),H.id!==I&&(I=H.id,ar=!0),vu||x!==b){Gt.setValue(k,"projectionMatrix",b.projectionMatrix),Gt.setValue(k,"viewMatrix",b.matrixWorldInverse);let Mn=Gt.map.cameraPosition;Mn!==void 0&&Mn.setValue(k,Oe.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,ar=!0,Do=!0)}if(F.isSkinnedMesh){Gt.setOptional(k,F,"bindMatrix"),Gt.setOptional(k,F,"bindMatrixInverse");let Mn=F.skeleton;Mn&&(Ie.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Gt.setValue(k,"boneTexture",Mn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Gt.setOptional(k,F,"batchingTexture"),Gt.setValue(k,"batchingTexture",F._matricesTexture,S));let Uo=B.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0&&Ie.isWebGL2===!0)&&Xe.update(F,B,Hi),(ar||Ge.receiveShadow!==F.receiveShadow)&&(Ge.receiveShadow=F.receiveShadow,Gt.setValue(k,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vi.envMap.value=Pe,Vi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ar&&(Gt.setValue(k,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&tp(Vi,Do),ue&&H.fog===!0&&le.refreshFogUniforms(Vi,ue),le.refreshMaterialUniforms(Vi,H,$,G,Me),ks.upload(k,mu(Ge),Vi,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ks.upload(k,mu(Ge),Vi,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Gt.setValue(k,"center",F.center),Gt.setValue(k,"modelViewMatrix",F.modelViewMatrix),Gt.setValue(k,"normalMatrix",F.normalMatrix),Gt.setValue(k,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Mn=H.uniformsGroups;for(let Oo=0,ip=Mn.length;Oo<ip;Oo++)if(Ie.isWebGL2){let xu=Mn[Oo];st.update(xu,Hi),st.bind(xu,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function tp(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function np(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,D,B){ze.get(b.texture).__webglTexture=D,ze.get(b.depthTexture).__webglTexture=B;let H=ze.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let B=ze.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){T=b,R=D,E=B;let H=!0,F=null,ue=!1,_e=!1;if(b){let Pe=ze.get(b);Pe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(k.FRAMEBUFFER,null),H=!1):Pe.__webglFramebuffer===void 0?S.setupRenderTarget(b):Pe.__hasExternalTextures&&S.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);let He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);let Ne=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?F=Ne[D][B]:F=Ne[D],ue=!0):Ie.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?F=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[B]:F=Ne,M.copy(b.viewport),U.copy(b.scissor),q=b.scissorTest}else M.copy(j).multiplyScalar($).floor(),U.copy(ie).multiplyScalar($).floor(),q=de;if(xe.bindFramebuffer(k.FRAMEBUFFER,F)&&Ie.drawBuffers&&H&&xe.drawBuffers(b,F),xe.viewport(M),xe.scissor(U),xe.setScissorTest(q),ue){let Pe=ze.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pe.__webglTexture,B)}else if(_e){let Pe=ze.get(b.texture),He=D||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.__webglTexture,B||0,He)}I=-1},this.readRenderTargetPixels=function(b,D,B,H,F,ue,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){xe.bindFramebuffer(k.FRAMEBUFFER,Ae);try{let Pe=b.texture,He=Pe.format,Ne=Pe.type;if(He!==Dn&&me.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Ne===gr&&(we.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ne!==Ri&&me.convert(Ne)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===wi&&(Ie.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&B>=0&&B<=b.height-F&&k.readPixels(D,B,H,F,me.convert(He),me.convert(Ne),ue)}finally{let Pe=T!==null?ze.get(T).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,D,B=0){let H=Math.pow(2,-B),F=Math.floor(D.image.width*H),ue=Math.floor(D.image.height*H);S.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,B,0,0,b.x,b.y,F,ue),xe.unbindTexture()},this.copyTextureToTexture=function(b,D,B,H=0){let F=D.image.width,ue=D.image.height,_e=me.convert(B.format),Ae=me.convert(B.type);S.setTexture2D(B,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,H,b.x,b.y,F,ue,_e,Ae,D.image.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,H,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,_e,D.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,H,b.x,b.y,_e,Ae,D.image),H===0&&B.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B,H,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=b.max.x-b.min.x+1,_e=b.max.y-b.min.y+1,Ae=b.max.z-b.min.z+1,Pe=me.convert(H.format),He=me.convert(H.type),Ne;if(H.isData3DTexture)S.setTexture3D(H,0),Ne=k.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Ne=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let Ue=k.getParameter(k.UNPACK_ROW_LENGTH),At=k.getParameter(k.UNPACK_IMAGE_HEIGHT),fn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ut=k.getParameter(k.UNPACK_SKIP_ROWS),qn=k.getParameter(k.UNPACK_SKIP_IMAGES),_t=B.isCompressedTexture?B.mipmaps[F]:B.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?k.texSubImage3D(Ne,F,D.x,D.y,D.z,ue,_e,Ae,Pe,He,_t.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ne,F,D.x,D.y,D.z,ue,_e,Ae,Pe,_t.data)):k.texSubImage3D(Ne,F,D.x,D.y,D.z,ue,_e,Ae,Pe,He,_t),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ue),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,At),k.pixelStorei(k.UNPACK_SKIP_PIXELS,fn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ut),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qn),F===0&&H.generateMipmaps&&k.generateMipmap(Ne),xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,xe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?ji:jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?Ft:ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ul=class extends br{};Ul.prototype.isWebGL1Renderer=!0;var Ya=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function Ta(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ol=class extends Gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ku,endingEnd:Ku}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ju:r=e,a=2*t-i;break;case Qu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ju:o=e,l=2*i-t;break;case Qu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,f=v*g,m=-d*f+2*d*v-d*g,w=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-p)*f+(1.5+p)*v+.5*g,A=p*f-p*v;for(let R=0;R!==a;++R)r[R]=m*o[u+R]+w*o[c+R]+y*o[l+R]+A*o[h+R];return r}},kl=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Fl=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case Pa:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&uy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Pa;var ts=class extends On{};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ca;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends On{};zl.prototype.ValueTypeName="color";var Bl=class extends On{};Bl.prototype.ValueTypeName="number";var Hl=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Mr=class extends On{InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.DefaultInterpolation=Pa;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends On{};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ca;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends On{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},hy=new Gl,Wl=class{constructor(e){this.manager=e!==void 0?e:hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kl="\\[\\]\\.:\\/",dy=new RegExp("["+Kl+"]","g"),jl="[^"+Kl+"]",fy="[^"+Kl.replace("\\.","")+"]",py=/((?:WC+[\/:])*)/.source.replace("WC",jl),my=/(WCOD+)?/.source.replace("WCOD",fy),gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),xy=new RegExp("^"+py+my+gy+vy+"$"),yy=["material","materials","bones","map"],Xl=class{constructor(e,t,i){let s=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dy,"")}static parseTrackName(e){let t=xy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);yy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Xl;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cb=new Float32Array(1);var Sr=class{constructor(e,t,i=0,s=1/0){this.ray=new Ba(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ql(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,i,t);return i.sort(Hh),i}};function Hh(n,e){return n.distance-e.distance}function ql(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)ql(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var un=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function ud(n){if(n.comfortVersion===un.version)return n;let e={...n,comfortVersion:un.version,winDist:un.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=un.windowScale),e}function _y(n,e){return n>0&&e>0?n/e:16/9}function wr(n,e,t){let i=_y(n,e),s=t>0?t:i,r,o;s>=i?(r=n,o=n/s):(o=e,r=e*s);let a=Math.round((n-r)/2),l=Math.round((e-o)/2),c=Math.round(r),u=Math.round(o);return{x:a,y:l,w:c,h:u,u0:a/n,v0:l/e,uw:c/n,vh:u/e}}function ec(n,e,t,i,s){let r=wr(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var by=4096,ja={width:1200,height:800},qs=160;function My(n,e=by){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(t)+qs*2,a=Math.ceil(i)+qs*2,l=s==="window"?r%3*1360:0,c=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,u=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:e)||a>u||l+o>e||c+a>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,o,a]})}var Qa=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var u;e.updateMatrixWorld(!0);let t=[];e.traverse(h=>{h.isCSS3DObject&&h.visible&&t.push(h)});for(let h of t)h.element.parentNode!==this.domElement&&this.domElement.append(h.element),h.element.style.transform="none";for(let h of this.slots.keys())t.some(d=>d.id===h)||this.slots.delete(h);let i=t.map(h=>{let d=h.element.classList.contains("dock")?"dock":h.element.classList.contains("kb")?"keyboard":"window";if(d==="window"&&!this.slots.has(h.id)){let p=new Set(this.slots.values()),g=0;for(;p.has(g);)g++;this.slots.set(h.id,g)}return{width:h.element.offsetWidth,height:h.element.offsetHeight,kind:d,slot:this.slots.get(h.id)||0}}),s;try{s=My(i)}catch(h){this.lastError!==h.message&&(this.lastError=h.message,(u=window.nextvrMessage)==null||u.call(window,h.message));return}let r=[],o=[];t.forEach((h,d)=>{let p=h.element,[g,v,f,m]=s[d];p.style.left=`${g+qs}px`,p.style.top=`${v+qs}px`;let w=h.matrixWorld.clone().multiply(new Qe().makeScale(f,m,1)),y=+(p.dataset.curve||0);r.push({id:p.dataset.windowId||(i[d].kind==="dock"?"dock":i[d].kind),matrix:w.toArray(),rect:s[d],curve:y,glass:[qs/f,qs/m,i[d].width/f,i[d].height/m]});let A=p.getBoundingClientRect();for(let R of p.querySelectorAll("[data-native-app]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=+(R.dataset.aspect||0),I=wr(E.width,E.height,T),x=h.matrixWorld.clone().multiply(new Qe().makeTranslation(E.left-A.left+I.x+I.w/2-i[d].width/2,i[d].height/2-(E.top-A.top+I.y+I.h/2),.5)).multiply(new Qe().makeScale(I.w,I.h,1));r.push({browser:"app:"+R.dataset.nativeApp,matrix:x.toArray(),rect:[0,0,Math.round(E.width),Math.round(E.height)],curve:+(p.dataset.curve||0),uv:[I.u0,I.v0,I.uw,I.vh]});let M=[I.u0,I.v0,I.uw,I.vh].map(U=>U.toFixed(5)).join(",");R.dataset.uv!==M&&(R.dataset.uv=M)}for(let R of p.querySelectorAll("[data-native-xr]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T="xr:"+R.dataset.nativeXr,I=+(R.dataset.aspect||0),x=wr(E.width,E.height,I),M=h.matrixWorld.clone().multiply(new Qe().makeTranslation(E.left-A.left+x.x+x.w/2-i[d].width/2,i[d].height/2-(E.top-A.top+x.y+x.h/2),.5)).multiply(new Qe().makeScale(x.w,x.h,1));r.push({browser:T,matrix:M.toArray(),rect:[0,0,Math.round(E.width),Math.round(E.height)],curve:+(p.dataset.curve||0),uv:[x.u0,x.v0,x.uw/2,x.vh],uvR:[x.u0+x.uw/2,x.v0,x.uw/2,x.vh]})}for(let R of p.querySelectorAll("[data-native-browser]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=R.dataset.nativeBrowser,I=R.dataset.url;if(!I)continue;let x=Math.round(E.width),M=Math.round(E.height),U={left:E.left,top:E.top,right:E.right,bottom:E.bottom};for(let O=R.parentElement;O&&O!==p;O=O.parentElement){let G=getComputedStyle(O);if(/(auto|scroll|hidden)/.test(G.overflow+G.overflowY)){let $=O.getBoundingClientRect();U.left=Math.max(U.left,$.left),U.top=Math.max(U.top,$.top),U.right=Math.min(U.right,$.right),U.bottom=Math.min(U.bottom,$.bottom)}}o.push({id:T,url:I,width:x,height:M});let q=U.right-U.left,Y=U.bottom-U.top;if(q<=0||Y<=0)continue;let L=h.matrixWorld.clone().multiply(new Qe().makeTranslation(U.left-A.left+q/2-i[d].width/2,i[d].height/2-(U.top-A.top+Y/2),.5)).multiply(new Qe().makeScale(q,Y,1));r.push({browser:T,matrix:L.toArray(),rect:[0,0,x,M],curve:+(p.dataset.curve||0),uv:[(U.left-E.left)/x,(E.bottom-U.bottom)/M,q/x,Y/M]})}});let a=2*Math.tan(ed.degToRad(36)),l=new Qe().makeTranslation(0,0,-1).multiply(new Qe().makeScale(a*1.5,a,1));r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,ja.width,ja.height]});let c=performance.now();if(c-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=c;let h=JSON.stringify(r),d=JSON.stringify(o);(h!==this.sent||d!==this.sentSpecs)&&(this.sent=h,this.sentSpecs=d,window.NativeXR.frame(h,d))}}invalidate(){this.sent=this.sentSpecs=null}};var hd=new N,Sy=new sn,dd=new N,$s=class extends vn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Bn=new Qe,wy=new Qe,eo=class{constructor(e={}){let t=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(v,f){let m=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let w,y;f.isOrthographicCamera&&(w=-(f.right+f.left)/2,y=(f.top+f.bottom)/2);let A=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,R=f.isOrthographicCamera?`scale( ${A} )scale(`+m+")translate("+h(w)+"px,"+h(y)+"px)"+d(f.matrixWorldInverse):`scale( ${A} )translateZ(`+m+"px)"+d(f.matrixWorldInverse),T=(f.isPerspectiveCamera?"perspective("+m+"px) ":"")+R+"translate("+r+"px,"+o+"px)";a.camera.style!==T&&(u.style.transform=T,a.camera.style=T),g(v,v,f,R)},this.setSize=function(v,f){i=v,s=f,r=i/2,o=s/2,l.style.width=v+"px",l.style.height=f+"px",c.style.width=v+"px",c.style.height=f+"px",u.style.width=v+"px",u.style.height=f+"px"};function h(v){return Math.abs(v)<1e-10?0:v}function d(v){let f=v.elements;return"matrix3d("+h(f[0])+","+h(-f[1])+","+h(f[2])+","+h(f[3])+","+h(f[4])+","+h(-f[5])+","+h(f[6])+","+h(f[7])+","+h(f[8])+","+h(-f[9])+","+h(f[10])+","+h(f[11])+","+h(f[12])+","+h(-f[13])+","+h(f[14])+","+h(f[15])+")"}function p(v){let f=v.elements;return"translate(-50%,-50%)"+("matrix3d("+h(f[0])+","+h(f[1])+","+h(f[2])+","+h(f[3])+","+h(-f[4])+","+h(-f[5])+","+h(-f[6])+","+h(-f[7])+","+h(f[8])+","+h(f[9])+","+h(f[10])+","+h(f[11])+","+h(f[12])+","+h(f[13])+","+h(f[14])+","+h(f[15])+")")}function g(v,f,m,w){if(v.isCSS3DObject){let y=v.visible===!0&&v.layers.test(m.layers)===!0;if(v.element.style.display=y===!0?"":"none",y===!0){v.onBeforeRender(t,f,m);let A;v.isCSS3DSprite?(Bn.copy(m.matrixWorldInverse),Bn.transpose(),v.rotation2D!==0&&Bn.multiply(wy.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(hd,Sy,dd),Bn.setPosition(hd),Bn.scale(dd),Bn.elements[3]=0,Bn.elements[7]=0,Bn.elements[11]=0,Bn.elements[15]=1,A=p(Bn)):A=p(v.matrixWorld);let R=v.element,E=a.objects.get(v);if(E===void 0||E.style!==A){R.style.transform=A;let T={style:A};a.objects.set(v,T)}R.parentNode!==u&&u.appendChild(R),v.onAfterRender(t,f,m)}}for(let y=0,A=v.children.length;y<A;y++)g(v.children[y],f,m,w)}}};var fe=!!window.NativeXR,xt=fe?ja:{width:innerWidth,height:innerHeight},md={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0},Er={};try{Er=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var qe={...md,...Er};qe.sunsetDefaultVersion||(!qe.envChosen&&qe.env==="passthrough"&&(!Er.panorama||Er.panorama==="lagoon")&&(qe.env="sunset"),(!Er.panorama||qe.env==="sunset"&&!qe.envChosen)&&(qe.panorama=qe.env==="passthrough"?"sunset":qe.env),qe.sunsetDefaultVersion=1);if(fe){qe=ud(qe),qe.handsOn=!0,qe.handDrawSeen||(qe.handDraw=md.handDraw,qe.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(qe))}catch{}}var ge=qe,Zs=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(qe))}catch{}},fd={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}},Ar=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),Ey="pt",ro=n=>Ar.find(e=>e.id===n)||Ar.find(e=>e.id===Ey);var Ay=()=>ro(qe.lang).table||"pt",P=n=>(fd[Ay()]||fd.pt)[n]||n,ac=n=>Ar.some(e=>e.id===n&&e.table)?(qe.lang=n,Zs(),Je("lang"),!0):!1,io={},Ye=(n,e)=>((io[n]||(io[n]=[])).push(e),e),Je=(n,e)=>(io[n]||[]).forEach(t=>t(e));function et(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(et._t),et._t=setTimeout(()=>e.classList.remove("on"),2400)}var sc=new Ya,lt=new tn(72,1,.05,120);lt.rotation.order="YXZ";var gt=new Ei;sc.add(gt);var Bt=1.55;lt.position.set(0,Bt,0);var Tr=fe?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new br({antialias:!0,alpha:!0});fe||(Tr.setClearColor(0,0),document.getElementById("gl").appendChild(Tr.domElement));var oi=fe?new Qa:new eo;document.getElementById("css3d").appendChild(oi.domElement);if(fe){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}function Ty(){let n=qe.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function ao(){document.documentElement.dataset.quality=qe.quality,fe||(xt.width=innerWidth,xt.height=innerHeight);let n=xt.width,e=xt.height;lt.aspect=n/e,lt.updateProjectionMatrix(),Tr.setPixelRatio(Ty()),Tr.setSize(n,e),oi.setSize(n,e),Je("resize")}addEventListener("resize",ao);addEventListener("orientationchange",()=>setTimeout(ao,120));ao();Ye("quality",ao);var Ry=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside"]),oc=()=>[{id:"sunset",name:P("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:P("envPass"),thumb:null},{id:"dusk",name:P("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:P("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:P("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:P("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:P("envNight"),thumb:"./env/night.jpg"},{id:"space",name:P("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:P("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:P("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:P("envLakeside"),thumb:"./env/lakeside.jpg"}];function ss(n){var e,t;qe.env=Ry.includes(n)?n:"passthrough",qe.envChosen=1,qe.env!=="passthrough"&&(qe.panorama=qe.env),Zs(),Je("env",qe.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,qe.env)}var lc=n=>ss(n?"passthrough":qe.panorama),rn={ok:!1,has:!1,q:new sn,tmp:new sn,e:new si},Cy=new sn,Py=new sn(-Math.SQRT1_2,0,0,Math.SQRT1_2),Ly=new N(0,0,1),so=Math.PI/180;function Iy(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*so}function Ny(n){n.alpha!=null&&(rn.has=!0,rn.e.set(n.beta*so,n.alpha*so,-n.gamma*so,"YXZ"),rn.tmp.setFromEuler(rn.e),rn.tmp.multiply(Py),rn.tmp.multiply(Cy.setFromAxisAngle(Ly,-Iy())),rn.q.copy(rn.tmp))}async function Rr(){if(fe)return rn.ok=rn.has=!0,Je("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(et("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",Ny,!0),rn.ok=!0,setTimeout(()=>{rn.has||et("Sem girosc\xF3pio: arraste para olhar")},1200),Je("gyro",!0),!0)}catch{return et("Girosc\xF3pio indispon\xEDvel"),!1}}var Dy=()=>rn.ok&&rn.has,is=null,Ys=0,rc=0;addEventListener("pointerdown",n=>{fe||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(is={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{is&&(Ys-=(n.clientX-is.x)*.0032,rc=Math.max(-1.2,Math.min(1.2,rc-(n.clientY-is.y)*.0032)),is={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>is=null);addEventListener("pointercancel",()=>is=null);function Cr(){let n=new si().setFromQuaternion(lt.quaternion,"YXZ");gt.rotation.y=n.y,gt.position.set(0,0,0),Je("recenter"),et(P("centered"))}var gd=[],Pr=n=>gd.push(n),pd=performance.now(),to=0,tc=0,nc=0,no=0,ic=0,vd=0,hn=null,xd=()=>{let n=performance.now();nc>0&&(no+=(n-nc)/1e3,ic++,no>=1&&(vd=Math.round(ic/no),no=0,ic=0)),nc=n};function yd(n){let e=Math.min((n-pd)/1e3,.05);pd=n,fe||(Dy()?(lt.quaternion.slerp(rn.q,1-Math.exp(-e*12)),Ys&&(lt.rotateY(Ys),Ys=0)):(lt.quaternion.setFromEuler(new si(rc,lt.rotation.y+Ys,0,"YXZ")),Ys=0)),lt.position.set(0,Bt,0);for(let t of gd)t(e,n);if(Tr.render(sc,lt),oi.render(sc,lt),to+=e,tc++,to>=1){let t=document.getElementById("fps");t.textContent=qe.showFps?Math.round(tc/to)+" fps"+(fe&&qe.handsOn?" \xB7 tracking "+vd+" fps":"")+(fe&&qe.handsOn?Uy():""):"",to=0,tc=0}requestAnimationFrame(yd)}requestAnimationFrame(yd);ss(qe.env);if(fe){let n=new Qe,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),lt.quaternion.setFromRotationMatrix(n),lt.position.set(0,Bt,0),lt.updateMatrixWorld(!0),e&&(gt.rotation.y=new si().setFromQuaternion(lt.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=et,window.nextvrDiag=t=>{hn=t}}function Uy(){if(!hn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(hn.camera);t!==null&&e.push("cam "+t);let i=n(hn.infer);return i!==null&&e.push("infer "+i+"ms"),hn.delegate&&e.push(String(hn.delegate).split(" ")[0]),typeof hn.narrow=="number"&&typeof hn.wide=="number"&&hn.narrow+hn.wide>0&&e.push("slots "+(hn.narrow>=hn.wide?1:2)),n(hn.stale)>0&&e.push("stale "+Math.round(hn.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var oo=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},lo=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Ii=[],he={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Li=new oo,Js=new lo,hc=Math.tan(36*Math.PI/180),Md=hc*1.5,uo=!1,dc=-1/0,Ir=2*Md,Nr=2*hc,cc=null,Sd=500,wd=()=>uo;async function Ur(){return fe?(uo=!0,window.NativeXR.hands(!0),Je("hands",!0),!0):(et("Hand tracking requires the Android camera pipeline."),!1)}function Ed(n){for(let e of n)Je(`pinch${e}`,he)}function Dr(){let n=Li.cancel();Js.reset(),he.down=he.active=!1,he.phase=Li.phase,he.hand=null,he.mode="idle",Fy(),Ed(n)}function fc(){Dr()}function pc(){Dr(),Ii.length=0,uo=!1,dc=-1/0,Je("phonehands",{hands:[],consumed:new Set,scaleX:Ir,scaleY:Nr}),fe&&window.NativeXR.hands(!1),Je("hands",!1)}function mc(n){let e=Ir*2*Md,t=Nr*2*hc;return{x:.5+n[0]/e,y:.5-n[1]/t}}var Oy=250,_d=1.6,bd=.06,dn={x:0,y:0},Lr=0,co=0;function ho(n=performance.now()){if(!he.active)return{x:he.x,y:he.y};let e=n-Lr;if(!(e>0)||e>Oy)return{x:he.x,y:he.y};let t=e/1e3,i=s=>Math.max(-bd,Math.min(bd,s));return{x:Math.min(1,Math.max(0,he.x+i(dn.x*t))),y:Math.min(1,Math.max(0,he.y+i(dn.y*t)))}}function ky(n,e,t=0){let i=t>0&&co>0?(t-co)/1e9:Lr>0?(e-Lr)/1e3:-1;if(he.active&&i>.004&&i<.3){let s=r=>Math.max(-_d,Math.min(_d,r));dn.x+=(s((n.x-he.x)/i)-dn.x)*.35,dn.y+=(s((n.y-he.y)/i)-dn.y)*.35,Math.hypot(dn.x,dn.y)<.12&&(dn.x=dn.y=0)}else i>=0&&i<=.004||(dn.x=dn.y=0);Lr=e,co=t>0?t:0}function Fy(){dn.x=dn.y=0,Lr=0,co=0}fe&&(window.nextvrHands=(n,e=1,t=1)=>{if(!uo)return;xd();let i=performance.now();Ir=e,Nr=t,dc=i,Sd=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),Ii.splice(0,Ii.length,...n.hands||[]),Je("handframe",{...n,hands:Ii});let r={hands:Ii,consumed:new Set,scaleX:Ir,scaleY:Nr};if(Je("phonehands",r),r.blockFar){Dr();return}let o=Ii.filter(u=>!r.consumed.has(u.id)),a=Li.down&&o.find(u=>u.id===Li.handId)||o.find(u=>u.pinching)||[...o].sort((u,h)=>h.palmWidth-u.palmWidth)[0];if(!a){Dr();return}let l=mc(a.aim);ky(l,i,Number(n.timestampNs)||0),he.x=l.x,he.y=l.y,he.active=!0,he.hand=a;let c=a.predicted?[]:Li.update(a.id,a.pinching);c.includes("down")?Js.begin(a.id,l.x*xt.width,l.y*xt.height,i):c.includes("up")?Js.end():c.includes("cancel")&&Js.reset(),Li.down&&!a.predicted&&Js.sample(a.id,l.x*xt.width,l.y*xt.height,i),he.mode=Js.mode,he.down=Li.down,he.phase=Li.phase,Ed(c)});var uc=document.getElementById("overlay");uc.getContext("2d").clearRect(0,0,uc.width,uc.height);Pr(()=>{var n,e;fe&&cc!==!!ge.handDraw&&(cc=!!ge.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,cc)),Ii.length&&performance.now()-dc>Sd&&(Ii.length=0,Dr(),Je("phonehands",{hands:[],consumed:new Set,scaleX:Ir,scaleY:Nr}))});var zy=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),By=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),Hy=Object.freeze({...By,...zy});function te(n,e="ui-icon"){let t=Hy[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var Et=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),Or=(n,e,t)=>Math.max(e,Math.min(t,n)),an=n=>Number.isFinite(n)?n:0;function gc(n,e=0,t=1.55,i=null){let s=an(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,o=an(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=Et.minDistance,s=0,o=-a);let l=Or(Math.atan2(-s,-o),-Et.maxYaw,Et.maxYaw);a=Or(a,Et.minDistance,Et.maxDistance);let c=Math.max(0,an(e)),u=t+Et.lowerEdgeFromEye+c,h=t+Et.upperEdgeFromEye-c;return r=u<=h?Or(r,u,h):t,{x:-Math.sin(l)*a,y:r,z:-Math.cos(l)*a}}function Ad(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((an(e.x)-an(n.x))*t,(an(e.y)-an(n.y))*i)}function vc(n,e,t,i){return Ad(n,e,t,i)>=Et.dragActivationPx}function Td(n,e,t,i){return Ad(n,e,t,i)>=Et.resizeActivationPx}function xc(n,e){let t=an(n==null?void 0:n.x),i=an(n==null?void 0:n.y),s=an(n==null?void 0:n.z),r=an(e==null?void 0:e.x)-t,o=an(e==null?void 0:e.y)-i,a=an(e==null?void 0:e.z)-s,l=Math.hypot(r,o,a);if(!Number.isFinite(l)||l<=Et.motionDeadZone)return{x:t,y:i,z:s};let u=Math.min(l,Et.maxMotionStep)/l;return{x:t+r*u,y:i+o*u,z:s+a*u}}var Vy=Object.freeze({maxAngle:1.15});function kr(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(Vy.maxAngle,e))}function fo(n,e){let t=kr(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function po(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function Ni(n,e=Et.maxResize){let t=Or(an(e),Et.minResize,Et.maxResize);return Or(Number.isFinite(n)?n:1,Et.minResize,t)}function Rd(n,e,t=1.55){let i=Math.max(1e-5,an(e)),s=Math.min(n-(t+Et.lowerEdgeFromEye),t+Et.upperEdgeFromEye-n);return Ni(s/i)}function Cd(n,e,t,i){return!(e>1)||!Number.isFinite(t)?Ni(n,i):Ni(n*t/e,i)}function Pd(n,e){let t=Ni(n),s=Ni(e)-t;return Math.abs(s)<.004?t:Ni(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function Ld(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?e:-e,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-e/2:e/2,row:1});return r}var Id=1.22;function yc(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function Nd({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=yc(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function Dd(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var Fr=n=>Number.isFinite(n)?n:0,Ud=(n,e,t)=>Math.max(e,Math.min(t,n));function Ks(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=Fr(n==null?void 0:n.x),o=Fr(n==null?void 0:n.y),a=Fr(n==null?void 0:n.z),l=o-s,c=Math.hypot(r,a),u=Math.hypot(r,l,a)||1e-6,h=Math.max(0,Fr(e)),d=Math.max(0,Fr(t));return{x:r,y:o,z:a,yaw:Math.atan2(-r,-a),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(h,c||1e-6),halfPitch:Math.atan2(d,u)}}function Od(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return Ks(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function _c(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return Ks({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function Gy(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,o=n.pitch-n.halfPitch,a=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,u=Math.min(i,r)-Math.max(t,s),h=Math.min(a,c)-Math.max(o,l);return u>0&&h>0?-Math.sqrt(u*h):Math.hypot(Math.max(-u,0),Math.max(-h,0))}function mo(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,o=Number.isFinite(t.gap)?t.gap:.03,a=n.box||Ks(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let d of e){let p=Gy(a,d);if(p<0){let g=p*p;l+=26e3*g+1e3,g>c&&(c=g)}else if(p<o){let g=o-p;l+=900*g*g}}let u=Math.hypot(a.x,a.z)||1e-6;l+=26*Math.abs(a.yaw),Math.abs(a.yaw)>r&&(l+=26*(Math.abs(a.yaw)-r)*40),u>s&&(l+=34*(u-s));let h=Number.isFinite(t.lift)?t.lift:a.y;return l+=Math.abs(a.y-h)*12,{score:l,overlap:c,yaw:a.yaw,radius:u}}function Wy({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:o=3,ringStep:a=.16,rows:l=2,topRowStep:c=1.22}={}){let u=[],h=Number.isFinite(e)?e:n,d=[0];for(let p=1;p<=6;p++){let g=p*t;if(g>r+1e-9)break;d.push(g,-g)}for(let p=0;p<l;p++){let g=p===0?h:h+s*2*(c-1)+s;for(let v=0;v<o;v++){let f=i+v*a;for(let m of d){let w=Ud(m,-r,r);u.push({x:Math.sin(w)*f,y:g,z:-Math.cos(w)*f,angle:w,row:p,radius:f})}}}return u}function kd({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:o=.35,outerLimit:a=1.3,lift:l=null,rings:c=3,ringStep:u=.16,rows:h=2,gap:d=.03,topRowStep:p=1.22,improvement:g=1e-6}={}){let v={eye:t,desiredDistance:s,maxYaw:a,gap:d,lift:l??t},f=Wy({eye:t,lift:l??t,step:i,distance:s,halfHeight:o,outerLimit:a,rings:c,ringStep:u,rows:h,topRowStep:p}),m=null;for(let w of f){let y=Ks(w,r,o),{score:A,overlap:R}=mo({...w,box:y},n,v),E={x:w.x,y:w.y,z:w.z,angle:w.angle,row:w.row,radius:w.radius,score:A,overlap:R,box:y};(!m||E.score<m.score-g)&&(m=E)}if(e){let w=Ks(e,r,o),{score:y,overlap:A}=mo({...e,box:w},n,v),R={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:y,overlap:A,box:w,desired:!0};(!m||R.score<=m.score+g)&&(m=R)}return m}function Fd({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:o=.35,outerLimit:a=1.3,gap:l=.03,maxShift:c=3}={}){let u={eye:t,desiredDistance:s,maxYaw:a,gap:l,lift:n.y},h=(f,m,w)=>Ks({x:f,y:m,z:w},r,o),d=mo({...n,box:h(n.x,n.y,n.z)},e,u);if(d.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:d.score,moved:!1,overlap:0};let p={x:n.x,y:n.y,z:n.z,score:d.score,overlap:d.overlap},g=Math.hypot(n.x,n.z)||s,v=Math.atan2(-n.x,-n.z);for(let f=1;f<=c;f++)for(let m of[1,-1]){let w=Ud(v+m*f*i,-a,a),y=-Math.sin(w)*g,A=-Math.cos(w)*g,{score:R,overlap:E}=mo({x:y,y:n.y,z:A,box:h(y,n.y,A)},e,u);R<p.score&&(p={x:y,y:n.y,z:A,score:R,overlap:E})}return{...p,moved:p.x!==n.x||p.z!==n.z}}var ct=.00105,ve=[],Qs=null,Rn={y:Bt-.6,z:-1.7,h:.12};function Zd(n=null){let e=[];for(let t of ve)t===n||t.hidden||t.onboarding||e.push(Od(t));if(ui&&Mt.offsetWidth>0){let t=_c(kn);t&&e.push(t)}if(Ke&&qt&&!Jr&&Ke.element.offsetWidth>0){let t=_c(qt);t&&e.push(t)}return e}var Ec=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:o=!1,chrome:a=!0,resizable:l=!0}){this.onboarding=o,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new N,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=kr(o?0:ge.win360?ge.win360K:0),this.curveRadius=fo(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let u=document.createElement("div");u.className="win",u.style.width=s+"px",u.style.height=r+"px",u.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${P("repin")}" title="${P("repin")}">${te("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${P("close")}" title="${P("close")}">${te("x")}</button>
      </div><div class="win-body"></div>`,u.querySelector(".win-title").textContent=t,u.querySelector(".win-body").appendChild(i),u.addEventListener("pointerdown",()=>Ht(this),!0),u.querySelector(".win-bar").addEventListener("click",p=>{let g=p.target.closest("[data-act]");g&&(g.dataset.act==="close"?It(this):g.dataset.act==="curve"?this.setCurve(this.curve>0?0:kr(ge.win360K)):zd(this))}),u.addEventListener("click",p=>{var v;let g=p.target.closest('[data-act="pin"]');g&&!((v=u.querySelector(".win-bar"))!=null&&v.contains(g))&&zd(this)});let h=document.createElement("div");h.className="win-handle",h.title=P("moveWindow"),h.setAttribute("aria-label",P("moveWindow"));let d=document.createElement("div");if(d.className="win-resize",d.hidden=!l,d.title=P("resize"),d.setAttribute("aria-label",P("resize")),d.innerHTML=te("move"),c.append(u,h,d),this.el=u,this.shell=c,this.handle=h,this.resizeHandle=d,c.dataset.curve=String(this.curve),(o||!a)&&(u.querySelector(".win-bar").hidden=!0),this.obj=new $s(c),this.obj.scale.setScalar(ct*(this.onboarding?un.welcomeScale:ge.winScale)),gt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=bc(s*ct,r*ct,this,this.hitSegments),this.bendHit(),this.grab=bc(260*ct,90*ct,this),this.grab.userData.isHandle=!0,this.resizeHit=bc(80*ct,80*ct,this),this.resizeHit.userData.isResize=!0,!fe){let p=g=>({x:g.clientX/xt.width,y:g.clientY/xt.height});h.addEventListener("pointerdown",g=>{g.stopPropagation();let v=p(g);Ic(this,v.x,v.y,"desktop"),h.setPointerCapture(g.pointerId)}),h.addEventListener("pointermove",g=>{if(nt.win===this){let v=p(g);Nc(v.x,v.y)}}),h.addEventListener("pointerup",Di),h.addEventListener("pointercancel",Di),d.addEventListener("pointerdown",g=>{g.stopPropagation();let v=p(g);jd(this,v.x,v.y),d.setPointerCapture(g.pointerId)}),d.addEventListener("pointermove",g=>{if(Tt.win===this){let v=p(g);Qd(v.x,v.y)}}),d.addEventListener("pointerup",os),d.addEventListener("pointercancel",os)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new xn(this.w*ct,this.h*ct,i,1),this.hitSegments=i,this.curveRadius=fo(this.w,this.curve),this.bendHit(),this.apply(),Gn(),Je("wins",ve)}setCurve(e){this.curve=kr(e),this.curveRadius=fo(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new xn(this.w*ct,this.h*ct,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return po(e,this.curveRadius)*ct}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,po(e.getX(t)/ct,this.curveRadius)*ct);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*ge.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(Bt-e.position.y,i)*ge.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?un.welcomeScale:ge.winScale)*this.resizeScale;e.scale.setScalar(ct*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*ct*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let a=28;this.resizeHit.translateX((this.w/2+a)*ct*r),this.resizeHit.translateY(-(this.h/2+a)*ct*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&nt.win===this&&Di(),t&&Tt.win===this&&os(),(s=(i=oi).invalidate)==null||s.call(i))}};function bc(n,e,t,i=1){let s=new nn(new xn(n,e,i,1),new ri({visible:!1}));return s.userData.win=t,gt.add(s),s}function Gn(){for(let o of ve)o.onboarding&&o.target.set(0,Bt,-un.welcomeDistance);let n=ve.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),e=n.length;if(!e)return;let t=fe?ge.winDist:-Rn.z+.5+(ge.winDist-2.2),i=Math.max(...n.map(o=>o.w*o.resizeScale))*ct*ge.winScale,s=fe?Nd({width:i,dist:t,gap:.5,outerLimit:Et.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+e*.05));if(Ld(e,s).forEach(({angle:o,row:a},l)=>{let c=n[l],u=c.h*ct*ge.winScale*c.resizeScale,h=Rn.y+Rn.h/2+.14+u/2,d=Math.sin(o)*t,p=-Math.cos(o)*t,g=a===0?h:Math.min(h+u*2*(Id-1)+u,Bt+Et.upperEdgeFromEye-u);c.target.set(d,g,p)}),!fe)return;let r=Math.min(s,yc(i,t)*.6);for(let o of n){let a=o.w*ct*ge.winScale*o.resizeScale/2,l=o.h*ct*ge.winScale*o.resizeScale/2,c=Fd({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:Zd(o),eye:Bt,step:r,distance:t,halfWidth:a,halfHeight:l,outerLimit:Et.maxYaw-.06,maxShift:4});o.target.set(c.x,c.y,c.z)}}Ye("recenter",Gn);Ye("resize",Gn);function kt(n){let e=ve.find(s=>s.id===n.id);if(e)return Ht(e),e;let t=ve.filter(s=>!s.onboarding&&!s.hidden);if(t.length>=5){let s=Dd(t);s&&(et(`${P("arcFull")}: ${s.title}`),It(s))}let i=new Ec(n);return ve.push(i),Gn(),Ht(i),i.obj.position.copy(i.target),n.free&&qy(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),Je("wins",ve),i}function qy(n,e=null){n.pinned=!1;let t=n.w*ct*ge.winScale*n.resizeScale/2,i=n.h*ct*ge.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Rn.y+Rn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-ge.winDist)||ge.winDist,o=kd({occupied:Zd(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-ge.winDist},eye:Bt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:Et.maxYaw-.06,lift:s,rings:3,rows:1});o&&n.target.set(o.x,o.y,o.z)}function It(n){var s;if(!n)return;let e=ve.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);tt&&(tt.nativeId?tt.nativeId===i:n.el.contains(tt))&&_n(!1),qr&&n.el.contains(qr)&&(qr=null),nt.win===n&&Di(),Tt.win===n&&os(),ve.splice(e,1),(s=n._cleanupQB)==null||s.call(n),gt.remove(n.obj),gt.remove(n.hit),gt.remove(n.grab),gt.remove(n.resizeHit),n.shell.remove(),Qs===n&&(Qs=ve[ve.length-1]||null),Gn(),Je("wins",ve)}function Ht(n){Qs!==n&&(Qs=n,n.lastFocus=performance.now(),ve.forEach(e=>e.el.classList.toggle("focus",e===Qs)))}function zd(n){n.pinned=!0,n.shell.classList.remove("free"),Gn()}var Yr=()=>Qs,Cn=new Sr,xo=new je,nt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Tt={win:null,start:null,active:!1,startScale:1,startDistance:1},on={source:null,start:null,active:!1,plane:null,anchor:null};function us(n,e,t=Cn){return lt.updateMatrixWorld(!0),gt.updateMatrixWorld(!0),xo.set(n*2-1,1-e*2),t.setFromCamera(xo,lt),t}function $y(n){return n.h*ct*ge.winScale*n.resizeScale/2}function Yy(n,e,t=null){let i=gc(e,$y(n),Bt,t);return new N(i.x,i.y,i.z)}function Ic(n,e,t,i="handle",s=null){if(n.onboarding||Tt.win)return!1;nt.win&&Di(),Ht(n),us(e,t);let r=n.obj.getWorldPosition(new N),o=new gn().setFromNormalAndCoplanarPoint(Cn.ray.direction.clone(),r),a=Cn.ray.intersectPlane(o,new N);if(!a)return!1;let l=gt.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(nt,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:c,applied:new N}}),!0}function Zy(){let n=nt.win;!n||nt.active||(nt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Gn())}function Nc(n,e){let t=nt.win;if(!t)return!1;us(n,e);let i=Cn.ray.intersectPlane(nt.plane,new N);if(!i)return!1;if(!nt.active){if(!vc(nt.start,{x:n,y:e},xt.width,xt.height))return!1;Zy()}let s=nt.anchor,r=i.clone().sub(s.hit);s.applied.copy(xc(s.applied,r));let o=s.center.clone().add(s.applied),a=Yy(t,gt.worldToLocal(o),s.radius);return t.target.copy(a),t.obj.position.copy(t.target),!0}function Di(){nt.win&&nt.win.shell.classList.remove("moving"),Object.assign(nt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Jd(n,e,t="pinch"){if(!ui||nt.win||Tt.win)return!1;on.start&&Ui(),us(n,e);let i=yn.getWorldPosition(new N),s=new gn().setFromNormalAndCoplanarPoint(Cn.ray.direction.clone(),i),r=Cn.ray.intersectPlane(s,new N);return r?(Object.assign(on,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new N}}),Mt.classList.add("grab-armed"),bt.setAttribute("aria-pressed","true"),!0):!1}function Jy(){!on.start||on.active||(on.active=!0,Mt.classList.remove("grab-armed"),Mt.classList.add("moving"))}function Dc(n,e){if(!on.start)return!1;us(n,e);let t=Cn.ray.intersectPlane(on.plane,new N);if(!t)return!1;if(!on.active){if(!vc(on.start,{x:n,y:e},xt.width,xt.height))return!1;Jy()}let i=on.anchor,s=t.clone().sub(i.hit);i.applied.copy(xc(i.applied,s));let r=i.center.clone().add(i.applied),o=gt.worldToLocal(r),a=gc(o,Rn.h/2,Bt);return rs=new N(a.x,a.y,a.z),cs=Math.atan2(-a.x,-a.z),Zr(),!0}function Ui(){Mt==null||Mt.classList.remove("grab-armed","moving"),bt==null||bt.setAttribute("aria-pressed","false"),Object.assign(on,{source:null,start:null,active:!1,plane:null,anchor:null})}function Kd(n,e,t){lt.updateMatrixWorld(!0),gt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new N).project(lt),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*xt.width,(t-r)*xt.height)}function jd(n,e,t){return n.onboarding||nt.win?!1:(Tt.win&&os(),Ht(n),Object.assign(Tt,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,Kd(n,e,t))}),!0)}function Qd(n,e){let t=Tt.win;if(!t)return!1;if(!Tt.active){if(!Td(Tt.start,{x:n,y:e},xt.width,xt.height))return!1;Tt.active=!0,t.shell.classList.add("resizing")}let i=t.h*ct*ge.winScale/2,s=Math.max(Tt.startScale,Rd(t.obj.position.y,i,Bt)),r=Cd(Tt.startScale,Tt.startDistance,Kd(t,n,e),s);return t.resizeScale=Ni(Pd(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function os(){Tt.win&&Tt.win.shell.classList.remove("resizing"),Object.assign(Tt,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function er(n,e){us(n,e);let t=[];for(let a of ve)a.hidden||(a.onboarding||t.push(a.resizeHit,a.grab),t.push(a.hit));let i=Cn.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var ef=er,Ze=null,Tn=null,Ky=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function jy(n,e,t,i,s){var l,c;let r=s?Ky(s):null;e===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function Br(n,e,t=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?jy(n,e,t,i,s):window.NativeXR.handTouch(n.id,e,t,i)}function ls(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s);if(e===0&&!(o!=null&&o.closest("[data-native-browser],[data-native-app]"))){let g=c_(o);g?_n(!0,g):_n(!1)}if(o==null?void 0:o.closest("[data-native-xr]")){Ze=null;return}let l=o==null?void 0:o.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),v=ec(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!v&&!Ze)return;let f="app:"+l.dataset.nativeApp;if(Ze&&Ze.id!==f&&(Br(Ze,3),Ze=null),e===0){if(!v)return;Ze={id:f,win:n.win,x:v.u,y:v.v}}Ze&&Ze.id===f&&(v||e!==2)&&(v&&(Ze.x=v.u,Ze.y=v.v),Br(Ze,e,Ze.x,Ze.y)),(e===1||e===3)&&(Ze=null);return}let c=o==null?void 0:o.closest("[data-native-browser]"),u=c==null?void 0:c.getBoundingClientRect(),h=c?c.dataset.nativeBrowser:"shell",d=r.left+i-((u==null?void 0:u.left)||0),p=r.top+s-((u==null?void 0:u.top)||0);Ze&&Ze.id!==h&&(Br(Ze,3),Ze=null,e!==0)||(e===0&&(Ze={id:h,win:n.win,x:d,y:p}),Ze&&Ze.id===h&&(Ze.x=d,Ze.y=p,Br(Ze,e,d,p,o)),(e===1||e===3)&&(Ze=null))}function tf(){Ze&&Br(Ze,3),Ze=null,Tn=null,Di(),os(),Ui()}Ye("pinchcancel",tf);function Hr(n,e){if(fe){ls(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=nf(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function nf(n,e,t){let i=null,s=r=>{for(let o of r.children){let a=Qy(o,n);e>=a.l&&e<=a.r&&t>=a.t&&t<=a.b&&(i=o,s(o))}};return s(n),i||n}function Qy(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}Ye("pinchdown",()=>{var i;let n=er(he.x,he.y),e=ff(he.x,he.y),t=r_(he.x,he.y);if(t&&(!n||t.distance<n.distance)&&(!e||t.distance<e.distance)){Jd(he.x,he.y,"pinch");return}if(e&&(!n||e.distance<n.distance)){Fc(e.button);return}if(n!=null&&n.resize){jd(n.win,he.x,he.y);return}if(n!=null&&n.handle){Ic(n.win,he.x,he.y,"handle",(i=he.hand)==null?void 0:i.id);return}if(n){Ht(n.win),Tn={win:n.win,hit:n};return}lf("down")});Ye("pinchup",()=>{if(ci){Oi();return}if(Tn&&he.mode==="drag"&&(Hr(Tn.hit,"down"),Tn=null),Tn){let e=er(he.x,he.y),t=e&&!e.handle&&!e.resize&&e.win===Tn.win?e:Tn.hit;Tn=null,Hr(t,"down"),Hr(t,"up");return}if(Ze){let e=er(he.x,he.y);e&&e.win===Ze.win&&!e.handle&&!e.resize?ls(e,1):tf();return}if(Tt.win){os();return}if(nt.win){Di();return}if(on.start){Dc(he.x,he.y),Ui();return}let n=er(he.x,he.y);if(n&&!n.handle&&!n.resize){Hr(n,"up");return}lf("up")});var Mt=document.createElement("div");Mt.className="dock";var bt=document.createElement("button");bt.type="button";bt.className="dock-grab";bt.title=P("moveDock");bt.setAttribute("aria-label",P("moveDock"));bt.setAttribute("aria-pressed","false");var yn=new $s(Mt);gt.add(yn);var kn=new nn(new xn(1,1),new ri({visible:!1})),Hn=new nn(new xn(1,1),new ri({visible:!1}));gt.add(kn,Hn);if(!fe){let n=e=>({x:e.clientX/xt.width,y:e.clientY/xt.height});bt.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Jd(t.x,t.y,"desktop")&&bt.setPointerCapture(e.pointerId)}),bt.addEventListener("pointermove",e=>{if(on.source==="desktop"){let t=n(e);Dc(t.x,t.y)}}),bt.addEventListener("pointerup",e=>{on.source==="desktop"&&(Ui(),bt.hasPointerCapture(e.pointerId)&&bt.releasePointerCapture(e.pointerId))}),bt.addEventListener("pointercancel",Ui)}var ui=!0,Vr=!1;function hs(n){ui=!!n,yn.visible=ui,ui||(Xr=-1,Ui())}var sf=()=>ui;function nr(n){var t,i;let e=!!n;return Vr===e||(Vr=e,Mt.style.setProperty("display",e?"none":"","important"),kn.visible=Hn.visible=!e,hs(!e),(i=(t=oi).invalidate)==null||i.call(t)),Vr}var bo=()=>Vr,e_=[],tr=[],rf=n=>tr.find(e=>e.dataset.id===n)||null,Ac=[],t_=te("wifi"),n_='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',i_='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function af(n){e_=n,tr=[],Ac.length=0,Mt.innerHTML="";for(let e of n){if(e.kind==="sep"){Mt.appendChild(s_());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",Mt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=i_;else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${t_}</span><span class="dk-bat">${n_}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),Ac.push({b:t,win:e.win})}t.addEventListener("click",()=>e.run()),Mt.appendChild(t),tr.push(t)}bt.title=P("moveDock"),bt.setAttribute("aria-label",P("moveDock")),Mt.appendChild(bt),Uc(),Oc(),Wr(),of(),Zr()}function s_(){let n=document.createElement("span");return n.className="dock-sep",n}function of(){for(let{b:n,win:e}of Ac){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",ve.some(i=>i.id===e))}}Ye("wins",of);var hi={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},ir=()=>({...hi});function yo(){Je("device-status",ir())}function Uc(){let n=Mt.querySelector(".dk-time"),e=new Date;hi.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),hi.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=hi.time),yo()}Uc();setInterval(Uc,1e3);function Oc(){let n=Mt.querySelector(".dk-wifi");hi.online=navigator.onLine,n&&(n.style.opacity=hi.online?"1":".35"),yo()}addEventListener("online",Oc);addEventListener("offline",Oc);var Gr=null;function Wr(){let n=Mt.querySelector(".dk-bat");if(!n)return;let e=n.querySelector(".dk-bat-percent");if(!Gr){n.style.display="none",hi.batteryLevel=null,yo();return}n.style.display="";let t=Math.max(0,Math.min(1,Number(Gr.level)||0)),i=!!Gr.charging,s=n.querySelector(".fill");s.setAttribute("width",String(Math.max(1.6,13*t))),s.setAttribute("fill",i?"#8de6c8":t<.2?"#ff6b6b":"currentColor"),e&&(e.textContent=`${Math.round(t*100)}%`),n.title=`${Math.round(t*100)}%${i?" \xB7 carregando":""}`,hi.batteryLevel=t,hi.charging=i,yo()}!fe&&navigator.getBattery&&navigator.getBattery().then(n=>{Gr=n,n.addEventListener("levelchange",Wr),n.addEventListener("chargingchange",Wr),Wr()}).catch(()=>{});var Xr=-1;Ye("pinchcancel",()=>{Xr=-1});function lf(n){let e=a_(he.x,he.y);if(n==="down"){Xr=e?e.i:-1;return}let t=Xr;if(Xr=-1,!(!e||e.i!==t)&&n==="up"){let i=tr[e.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function r_(n,e){return!ui||!Tc?null:(us(n,e),Cn.intersectObject(Hn,!1)[0]||null)}function a_(n,e){if(!ui)return null;us(n,e);let t=Cn.intersectObject(kn,!1)[0];if(!t)return null;let i=kn.worldToLocal(t.point.clone()),s=kn.geometry.parameters,r=(i.x/s.width+.5)*Mt.offsetWidth,o=(.5-i.y/s.height)*Mt.offsetHeight;for(let a=0;a<tr.length;a++){let l=tr[a];if(r>=l.offsetLeft&&r<=l.offsetLeft+l.offsetWidth&&o>=l.offsetTop&&o<=l.offsetTop+l.offsetHeight)return{i:a}}return null}var Bd="",Tc="",cs=0,rs=null;Ye("recenter",()=>{cs=0,li.ready=!1,rs=null,Ui(),Zr()});Ye("summon-dock",()=>{var e;lt.updateMatrixWorld(!0),gt.updateMatrixWorld(!0);let n=lt.getWorldDirection(new N).transformDirection(gt.matrixWorld.clone().invert());cs=Math.atan2(-n.x,-n.z),li.ready=!1,rs=null,Ui(),Zr(),(e=window.NativeXR)==null||e.click()});function Zr(){let n=xt.width>xt.height,e=(fe?un.dockDistance:n?1.42:1.75)*ge.dockDist,t=fe?-un.dockDrop:n?-.5:-.6,i=ct*(fe?un.dockScale:n?.74:.88)*ge.dockSize;rs?yn.position.copy(rs):yn.position.set(-Math.sin(cs)*e,Bt+t,-Math.cos(cs)*e),yn.rotation.set(.26,cs,0,"YXZ"),yn.scale.setScalar(i);let s=Mt.offsetWidth*i,r=Mt.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Bd&&(Bd=o,kn.geometry.dispose(),kn.geometry=new xn(s,r),Rn.h=r,rs||Gn());let a=bt.offsetWidth*i,l=bt.offsetHeight*i,c=a.toFixed(3)+"x"+l.toFixed(3);a>0&&c!==Tc&&(Tc=c,Hn.geometry.dispose(),Hn.geometry=new xn(a,l)),kn.position.copy(yn.position),kn.rotation.copy(yn.rotation),Hn.position.copy(yn.position),Hn.rotation.copy(yn.rotation),Hn.translateY((Mt.offsetHeight/2-bt.offsetTop-bt.offsetHeight/2)*i),Hn.translateZ(.004),!rs&&(Rn.y!==yn.position.y||Rn.z!==-e)&&(Rn.y=yn.position.y,Rn.z=-e,Gn())}var o_=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],Hd=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],l_=0,Ke=null,qt=null,tt=null,js=null,Vn=!1,as=!1,Jr=!1,di=window.__nextvrTyping,c_=n=>(di==null?void 0:di.editable(n))||null,qr=null,Rc=1,cf=2,_o=3,u_=fe;function sr(n){var t,i;if(Jr=!!n,!Ke)return!1;let e=!!n;return Ke.visible=!e,Ke.element.style.setProperty("display",e?"none":"","important"),qt&&(qt.visible=!e),e&&Oi(),(i=(t=oi).invalidate)==null||i.call(t),!0}var uf=()=>!!Ke&&Ke.visible!==!1,hf=()=>Jr;function h_(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&ve.find(s=>s.shell===t)||null}function _n(n,e){if(!n){fe&&console.log("kb close; was serving",(tt==null?void 0:tt.nativeId)||(tt==null?void 0:tt.tagName)||"nothing"),Oi(),Ke&&(gt.remove(Ke),gt.remove(qt),Ke.element.remove(),Ke=null),tt=null,js=null,Vn=as=!1,li.ready=!1;return}let t=e||qr;if(tt=t&&!t.nativeId?(di==null?void 0:di.focus(t))||null:t||null,tt&&!tt.nativeId&&(qr=tt),js=h_(tt),fe&&console.log("kb open for",(tt==null?void 0:tt.nativeId)||(tt==null?void 0:tt.tagName)||"nothing","in window",(js==null?void 0:js.id)??"none"),Ke){Cc();return}let i=document.createElement("div");i.className="kb";for(let s of o_){let r=document.createElement("div");r.className="kb-row";for(let o of s){let a=typeof o=="string"?o:o.k,l=document.createElement("button");l.className="key"+(typeof o=="string"?"":" "+o.cls),typeof o=="string"?l.textContent=a:o.icon?(l.innerHTML=te(o.icon),l.setAttribute("aria-label",o.label),l.title=o.label):l.textContent=o.lbl||a,l.dataset.k=a,r.appendChild(l)}i.appendChild(r)}i.addEventListener("click",s=>{let r=s.target.closest("[data-k]");r&&(Fc(r),Oi())}),Ke=new $s(i),Ke.scale.setScalar(ct*(fe?un.keyboardScale:.9)),gt.add(Ke),qt=new nn(new xn(1,1),new ri({visible:!1})),gt.add(qt),Cc()}function d_(){Vn?as?(Vn=!1,as=!1):as=!0:(Vn=!0,as=!1),df()}function kc(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===_o){e&&e.classList.remove("hot"),s&&Mc(n,n,!!i,_o);return}if(t===Rc){if(fe&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){_n(!1);return}if(n==="\u21E7"){d_();return}if(n==="@lang")return;if(n==="@mic"){et(P("micOff"));return}if(n==="@emoji"){Mc(n,Hd[l_++%Hd.length],!1,Rc);return}}Mc(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function Mc(n,e,t,i){if(!tt)return!1;let s=t===void 0?Vn:t;return tt.nativeId?window.NativeXR.key(tt.nativeId,e,!!s,i||0):di==null||di.key(n,!!s,i||0),u_&&i!==cf&&console.log("kb key ->",tt.nativeId||tt.tagName+"."+(tt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==_o&&s&&Vn&&!as&&(Vn=!1,df()),!0}function df(){if(Ke){for(let n of Ke.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=Vn?as?"lock":"once":"";for(let n of Ke.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=Vn?e.toUpperCase():e.toLowerCase())}}}var Vd="",f_=.35,li={yaw:0,ready:!1},p_=n=>Math.atan2(Math.sin(n),Math.cos(n));function m_(){let n=js;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return cs}function Cc(n=0){if(!Ke)return;let e=m_();li.ready?li.yaw+=p_(e-li.yaw)*(1-Math.exp(-n*7)):(li.yaw=e,li.ready=!0);let t=li.yaw,i=fe?un.keyboardDistance:-Rn.z-.35;Ke.position.set(-Math.sin(t)*i,Bt-(fe?un.keyboardDrop:.68),-Math.cos(t)*i),Ke.rotation.set(-Math.PI/2+f_,t,0,"YXZ");let s=Ke.element.offsetWidth*Ke.scale.x,r=Ke.element.offsetHeight*Ke.scale.x,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Vd&&(Vd=o,qt.geometry.dispose(),qt.geometry=new xn(s,r)),qt.position.copy(Ke.position),qt.rotation.copy(Ke.rotation)}var g_=700,v_=90,x_=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),ci=null,$r=0;function ff(n,e){var a,l;if(!Ke||Jr)return null;xo.set(n*2-1,-(e*2-1)),Cn.setFromCamera(xo,lt);let t=Cn.intersectObject(qt,!1)[0];if(!t)return null;let i=qt.worldToLocal(t.point.clone()),s=qt.geometry.parameters,r=(i.x/s.width+.5)*Ke.element.offsetWidth,o=(.5-i.y/s.height)*Ke.element.offsetHeight;return{distance:t.distance,button:((l=(a=nf(Ke.element,r,o))==null?void 0:a.closest)==null?void 0:l.call(a,"[data-k]"))||null}}function Fc(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return Oi(),e?(ci={key:e,button:n,shift:Vn},kc(e,n,Rc),x_(e)&&($r=performance.now()+g_),!0):!1}function Oi(){let n=ci;ci=null,$r=0,n&&kc(n.key,n.button,_o,n.shift)}Ye("pinchcancel",Oi);function y_(n){var i,s;if(!ci)return!1;let e=ff(he.x,he.y);if(!e)return Oi(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==ci.key?(Oi(),Fc(e.button)):($r&&n>=$r&&(kc(ci.key,ci.button,cf),$r=n+v_),!0)}var Gd="";Pr((n,e)=>{let t=`${ge.winScale}:${ge.winDist}`;if(Gd!==t&&(Gd=t,Gn()),Zr(),Cc(n),ci&&y_(e),Tn&&he.mode==="drag"&&(Hr(Tn.hit,"down"),Tn=null),Ze&&he.active&&he.down){let i=er(he.x,he.y);i&&i.win===Ze.win&&!i.handle&&!i.resize&&ls(i,2)}if((Tt.win||nt.win&&nt.source!=="fist")&&he.active&&he.down){let i=ho(e);Tt.win&&Qd(i.x,i.y),nt.win&&nt.source!=="fist"&&Nc(i.x,i.y)}if(on.start&&he.active&&he.down){let i=ho(e);Dc(i.x,i.y)}for(let i of ve)i.hidden||i.apply()});if(fe){let n=function(){try{Gr=JSON.parse(window.NativeXR.battery()),Wr()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?_n(!0,{nativeId:e}):(tt==null?void 0:tt.nativeId)!==e&&_n(!1)},window.nextvrAppFocus=e=>_n(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var rt=null,go=new Map,vo=new Set,zc={hands:[],consumed:new Set,scaleX:1,scaleY:1},zr=null,Sc=0,Wd=350,__=240;function Pc(n,e){lt.updateMatrixWorld(!0),gt.updateMatrixWorld(!0);let t=new Sr;return t.setFromCamera(new je(n*2-1,1-e*2),lt),t}function wc(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Lc(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new N),s=n.curve>0?po(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function b_(n,e){let t=n.obj.getWorldPosition(new N),i=new N(0,0,1).transformDirection(n.obj.matrixWorld),s=new gn().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new N);let r=n.obj.matrixWorld.clone().invert(),o=e.origin.clone().applyMatrix4(r),a=e.origin.clone().add(e.direction).applyMatrix4(r).sub(o).normalize(),l=n.curveRadius,c=a.x*a.x+a.z*a.z;if(c<1e-9)return e.intersectPlane(s,new N);let u=2*(o.x*a.x+(o.z-l)*a.z),h=o.x*o.x+(o.z-l)*(o.z-l)-l*l,d=u*u-4*c*h;if(d<0)return e.intersectPlane(s,new N);let p=Math.sqrt(d);for(let g of[(-u-p)/(2*c),(-u+p)/(2*c)]){if(!(g>0))continue;let v=o.clone().addScaledVector(a,g);if(!(Math.abs(v.x)>l+1e-6||v.z>l))return v.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new N)}function Xd(n){let e=null;for(let t of ve){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new N),s=b_(t,n.ray);if(!s)continue;let{local:r,scale:o}=Lc(t,s);if(Math.abs(r.x)*o.x>t.w*o.x/2+.08||Math.abs(r.y)*o.y>t.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!e||a<e.distance)&&(e={win:t,point:s,distance:a})}return e}function qd(n=!1,e=zc){let t=rt;t!=null&&t.down&&(ls({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(vo.add(t.id),e.consumed.add(t.id))),rt=null}Ye("phonehands",n=>{var a,l;zc=n;let e=new Set(n.hands.map(c=>c.id));for(let c of go.keys())e.has(c)||go.delete(c);for(let c of vo){let u=n.hands.find(h=>h.id===c);!u||!u.pinching?vo.delete(c):n.consumed.add(c)}if(nt.win&&nt.source==="fist"){let c=n.hands.find(u=>u.id===nt.hand);if(!c||!c.fist||!ve.includes(nt.win)||(a=nt.win)!=null&&a.hidden)Di();else{n.consumed.add(c.id);let u=wc(c,n,!0);Nc(u.x,u.y)}}let t=performance.now();if(!(nt.win&&nt.source==="fist")){let c=n.hands.find(u=>!u.fist);if(c){let u=wc(c,n),h=Xd(Pc(u.x,u.y));if(h){let{local:d,scale:p}=Lc(h.win,h.point),g=h.win;(Math.abs(d.x)*p.x>g.w*p.x/2-.06||Math.abs(d.y)*p.y>g.h*p.y/2-.06)&&(zr=h.win,Sc=t)}}}for(let c of ve)(c!==zr||t-Sc>Wd)&&c.shell.classList.remove("phone-grab-hover");zr&&t-Sc<=Wd?zr.shell.classList.add("phone-grab-hover"):zr=null;for(let c of n.hands){let u=go.get(c.id)||!1;if(go.set(c.id,c.fist),!nt.win&&!Tt.win&&c.fist&&!u){let h=wc(c,n,!0),d=Xd(Pc(h.x,h.y));d&&(((l=he.hand)==null?void 0:l.id)===c.id&&fc(),Ic(d.win,h.x,h.y,"fist",c.id)&&n.consumed.add(c.id))}}let i=null;for(let c of n.hands){if(n.consumed.has(c.id)||!c.head||c.head.length!==63)continue;let u=new N().fromArray(c.head,24);if(!(u.length()>.7)){u.applyMatrix4(lt.matrixWorld);for(let h of ve){if(h.hidden)continue;let d=Lc(h,u),p=(rt==null?void 0:rt.win)===h&&rt.id===c.id,g=p?.08:.02,v=p?.26:.11;d.d>v||d.d<-.12||Math.abs(d.local.x)*d.scale.x>h.w*d.scale.x/2+g||Math.abs(d.local.y)*d.scale.y>h.h*d.scale.y/2+g||(!i||p||!i.current&&Math.abs(d.d)<Math.abs(i.d))&&(i={...d,id:c.id,win:h,point:u,current:p})}}}if(!i&&rt&&e.has(rt.id)&&ve.includes(rt.win)&&!rt.win.hidden&&t-rt.lastSeen<=__&&(i={...rt,current:!0,held:!0}),!i){qd(!e.has(rt==null?void 0:rt.id),n);return}i.current?(rt.d+=(i.d-rt.d)*.45,rt.u+=(i.u-rt.u)*.45,rt.v+=(i.v-rt.v)*.45,i.held||(rt.lastSeen=t)):(qd(!1,n),rt={...i,down:!1,previousD:i.d,lastSeen:t});let s=rt,r=s.u>=0&&s.u<=1&&s.v>=0&&s.v<=1,o={win:s.win,u:Math.max(0,Math.min(1,s.u)),v:Math.max(0,Math.min(1,s.v))};!s.down&&r&&s.d<=.012&&s.previousD>.012?(he.down&&fc(),Ht(s.win),ls(o,0),s.down=!0):s.down&&(s.d>=.035||!r)?(ls(o,1),s.down=!1,n.hands.some(c=>c.id===s.id&&c.pinching)&&(vo.add(s.id),n.consumed.add(s.id))):s.down&&ls(o,2),s.previousD=s.d,s.down&&(n.blockFar=!0,n.consumed.add(s.id))});var $d=0,Yd="";Pr((n,e)=>{var r,o,a,l;if(!fe||e-$d<16)return;$d=e;let t=zc,i=[];for(let c of t.hands){if((rt==null?void 0:rt.id)===c.id&&rt.down){let g=rt,v=new N((g.u-.5)*g.win.w,(.5-g.v)*g.win.h,0).applyMatrix4(g.win.obj.matrixWorld);i.push({id:c.id,end:lt.worldToLocal(v).toArray(),direct:!0,down:g.down});continue}if(t.consumed.has(c.id)||t.blockFar){i.push({id:c.id,hidden:!0});continue}let u=((r=he.hand)==null?void 0:r.id)===c.id?ho(e):mc(c.aim),h=Pc(u.x,u.y),d=ve.filter(g=>!g.hidden).flatMap(g=>[g.resizeHit,g.grab,g.hit]);ui&&d.push(Hn,kn),qt&&Ke&&!Jr&&d.push(qt);let p=h.intersectObjects(d,!1)[0];i.push({id:c.id,...p?{end:p.point.toArray()}:{},down:((o=he.hand)==null?void 0:o.id)===c.id&&he.down})}let s=JSON.stringify(i);s!==Yd&&(Yd=s,(l=(a=window.NativeXR).handTargets)==null||l.call(a,s))});var pf={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function mf(n){return pf[n]||pf.landscape}function gf(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return mf(n==null?void 0:n.shape)}function M_(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function Kr(n){let e=M_(gf(n));return{w:e.w+2,h:e.h+116}}var S_=400,Mf=3;function Hc(n,e){if(e!=null&&e.shape)return e.shape;let t=Rt.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var ut={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:Mf,sdk:0,recents:[],library:0,launch:null},Rt={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},bn=new Map,Bc=new Set,vf=0,xf="";var Vc=n=>ut.sessions.find(e=>e.pkg===n)||null,w_=()=>ut.sessions.filter(n=>n.alive),E_=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function fi(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{et(P("appCommandFailed"))}}function A_(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(ut.sessions=Array.isArray(e.sessions)?e.sessions:[],ut.shizuku=e.shizuku||ut.shizuku,ut.input=e.input||ut.input,ut.capacity=e.capacity||Mf,ut.recents=Array.isArray(e.recents)?e.recents:[],ut.sdk=e.sdk||ut.sdk,ut.launch=e.launch||null,ut.diagnostics=e.diagnostics||ut.diagnostics,e.icons!=null&&e.icons!==Rt.icons&&(Rt.icons=e.icons,Rt.loaded=!1),T_(),Je("appsState"))}function T_(){let n=new Set;for(let e of ut.sessions)if(e.state!=="stopped"){if(e.state==="suspended"){yf(e.pkg,!0);continue}n.add(e.pkg),bn.has(e.pkg)?Sf(e):R_(e)}for(let e of[...bn.keys()])n.has(e)||yf(e,!0);Mo(!0)}function R_(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?P("appMirrorBadge"):P("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(d,p,g)=>{let v=document.createElement("button");return v.className="app-key",v.title=p,v.setAttribute("aria-label",p),v.innerHTML=te(g),v.onclick=()=>fi({cmd:"key",pkg:n.pkg,key:d}),v},o=document.createElement("button");o.className="app-key",o.title=P("appKeyboard"),o.dataset.act="keys",o.innerHTML=te("keyboard"),o.onclick=()=>N_(n.pkg);let a=document.createElement("button");a.className="app-key",a.dataset.act="rotate",a.title=P("appRotate"),a.setAttribute("aria-label",P("appRotate")),a.innerHTML=te("rotate"),a.onclick=()=>L_(n.pkg),t.append(i,s,r("back",P("appBack"),"back"),r("home",P("appHome"),"top"),r("recents",P("appRecents"),"appGrid"),o,a);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=Hc(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let u=Kr(n),h=kt({id:E_(n.pkg),title:n.title,node:e,w:u.w,h:u.h});bn.set(n.pkg,{win:h,surface:l,status:c,badge:i,session:n}),Sf(n)}function Sf(n){var r,o;let e=bn.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?P("appMirrorBadge"):P("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:P("appStarting"),creating:P("appStarting"),launching:P("appStarting"),running:"",failed:n.error?P_(n):P("appFailed")};n.mode==="display"&&((r=ut.shizuku)!=null&&r.binding||!((o=ut.shizuku)!=null&&o.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=P("appWaitingService"),i.creating=P("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=P("appMirrorStarting"),i.creating=P("appMirrorStarting"),i.launching=P("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&C_.has(n.error))){let a=document.createElement("button");a.className="app-state-btn",a.textContent=P("appOpenOnPhone"),a.onclick=()=>fi({cmd:"phone",pkg:n.pkg}),e.status.appendChild(a)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var C_=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function P_(n){let e={shizuku_unavailable:P("appNeedShizuku"),shizuku_denied:P("appShizukuDenied"),shizuku_blocked:P("appShizukuBlocked"),display_refused:P("appDisplayRefused"),display_failed:P("appDisplayFailed"),no_launcher_activity:P("appNoLauncher"),consent_denied:P("appConsentDenied"),mirror_stopped:P("appMirrorStopped"),mirror_failed:P("appMirrorFailed"),mirror_refused:P("appMirrorFailed"),projection_failed:P("appMirrorFailed"),display_empty:P("appDisplayEmpty"),app_not_running:P("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?P("appSurfaceFailed"):e[t]||`${P("appFailed")}: ${t}`}function yf(n,e){let t=bn.get(n);t&&(bn.delete(n),e&&Bc.add(n),It(t.win),Bc.delete(n))}Ye("wins",()=>{for(let n of[...bn.keys()]){let e=bn.get(n);Bc.has(n)||ve.includes(e.win)||(bn.delete(n),fi({cmd:"close",pkg:n}))}Je("appsState")});function Gc(n){n&&fi({cmd:"open",pkg:n,shape:Hc(n,Vc(n))})}function L_(n){var o;let e=bn.get(n),t=Vc(n),s=((e==null?void 0:e.surface.dataset.shape)||Hc(n,t))==="portrait"?"landscape":"portrait",r=Kr({shape:s,display:(t==null?void 0:t.display)||((o=e==null?void 0:e.session)==null?void 0:o.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),fi({cmd:"shape",pkg:n,shape:s}),Mo(!0)}function _f(){fi({cmd:"shizuku"})}function I_(){Rt.loaded=!1,fi({cmd:"refresh"})}function N_(n){_n(!0,{nativeId:"app:"+n})}function Wc(n){var e,t;if(Rt.loaded&&!n)return Rt;Rt.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,Rt.query,Rt.showSystem),s=JSON.parse(i||'{"apps":[]}');Rt.apps=Array.isArray(s.apps)?s.apps:[],Rt.shown=s.shown||Rt.apps.length,Rt.total=s.total||Rt.apps.length,Rt.icons=s.icons||Rt.icons}catch{Rt.apps=[]}return Je("appsState"),Rt}function Mo(n){let e=[];for(let[i,s]of bn)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===xf||(xf=t,fi({cmd:"sync",windows:e}))}function D_(){vf||(vf=setInterval(()=>{bn.size&&Mo(!1)},S_))}Ye("wins",()=>Mo(!0));var bf={install:()=>P("shizukuInstall"),start:()=>P("shizukuStart"),update:()=>P("shizukuUpdate"),ask:()=>P("shizukuAsk"),denied:()=>P("shizukuDenied"),rebind:()=>P("shizukuRebind"),ready:()=>P("shizukuReady"),unknown:()=>P("shizukuUnknown")},U_=new Set(["hosted","permission","capture"]);function O_(){let n=ut.shizuku||{};return U_.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function wf(){var u;let n=ut.shizuku||{},e=O_(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>P("routeHosted"),permission:()=>P("routePermission"),capture:()=>P("routeCapture")};s.textContent=(r[e]||r.capture)();let o=document.createElement("small");if(o.textContent=(bf[n.state]||bf.unknown)(),s.appendChild(o),e==="capture"&&!((u=ut.input)!=null&&u.accessibility)){let h=document.createElement("small");h.textContent=P("appCaptureInput"),s.appendChild(h)}else if(n.detail){let h=document.createElement("small");h.textContent=n.detail,s.appendChild(h)}t.append(i,s);let a=document.createElement("button");a.className="az-btn",n.ask?(a.textContent=P("shizukuGrant"),a.onclick=()=>_f()):(a.textContent=P("shizukuRecheck"),a.onclick=()=>{I_(),_f()}),t.appendChild(a);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=P("appSelfTest"),l.onclick=async()=>{var h;l.disabled=!0;try{await fi({cmd:"selftest"});let d=(h=ut.diagnostics)==null?void 0:h.selfTest;d&&et(d.ok?P("appSelfTestOk"):P("appSelfTestFailed"))}catch{et(P("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=P("appDiagnostics"),c.onclick=()=>{let h=t.querySelector(".az-caps");if(h){h.remove();return}let d=document.createElement("pre");d.className="az-caps",d.textContent=k_(),d.onclick=()=>F_(d.textContent),t.appendChild(d)},t.appendChild(c),t}function k_(){var i;let n=ut.shizuku||{},e=ut.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||ut.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...ut.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=ut.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||ut.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function F_(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&et(P("appDiagnosticsCopied"));return}catch{}}var Wn=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Xc(n){let e=Vc(n.pkg),t=`<span class="nm">${Wn((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${Wn(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${Wn(e.state==="suspended"?P("appMinimized"):P("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${Wn(P("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${Wn(n.pkg)}" data-session="${e?Wn(e.state):""}" data-pkg="${Wn(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${Wn(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${Wn(P("androidApps"))}">${te("device")}</span>`+r+s+`</span><span class="lib-label">${Wn(n.label||n.pkg)}</span></button>`}function qc(n){let e=bn.get(n);e&&Ht(e.win)}function Ef(){return w_().length}function Af(){return Rt.apps}function Tf(){fe&&(window.nextvrApps=A_,D_(),Ye("lang",()=>{Rt.loaded=!1,Je("appsState")}))}var So={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function Rf(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var wo=class{constructor({armMs:e=So.armMs,graceMs:t=So.graceMs,holdMs:i=So.holdMs,progressHoldMs:s=So.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,o=s&&r;if(this.open){if(o)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let a=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:a,active:!1}}if(o){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let a=i-this.startedAt;return a>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,a/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var To="nextvr-xr-game",jr="nextvr-xr-menu",pt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},ki=[],z_=null,Zc=!1,Pf=()=>pt,Lf=()=>ki,If=()=>pt.hosting,Qr=()=>pt.runtime==="ready",Nf=()=>pt.handMode,B_=()=>{var n;return((n=pt.game)==null?void 0:n.package)||null};function gi(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function Cf(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(pt,e),Ao=null,pt.hosting&&((t=pt.game)!=null&&t.package)?G_(pt.game):W_(),Je("xr",{...pt,games:ki}))}function H_(n){let e;try{e=JSON.parse(n)}catch{e=null}ki=Array.isArray(e==null?void 0:e.games)?e.games:[],z_=(e==null?void 0:e.problem)||null,Zc=!0,Je("xr",{...pt,games:ki})}function Df(){var n,e;if(!(!fe||window.nextvrXr)){window.nextvrXr=Cf,window.nextvrXrLibrary=H_;try{Cf(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}$c(),Ye("lang",()=>{$c(),Je("xr",{...pt,games:ki})})}}function $c(){gi({cmd:"library"})}function Uf(){Zc=!1,gi({cmd:"refresh"}),$c()}function Of(n){!n||pt.hosting||gi({cmd:"open",package:n})}function Jc(){pt.hosting&&gi({cmd:"close"})}function V_(){pt.hosting&&gi({cmd:"minimize"})}function kf(){pt.hosting&&gi({cmd:"restore"})}function Kc(){gi({cmd:"runtime"})}function Ff(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}pt.handMode=e,Je("xr",{...pt,games:ki})}function jc(){gi({cmd:"selftest"})}function zf(){return ki.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function Bf(n){let e=n.game,t=`<span class="nm">${pi(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=B_()===e.package?`<span class="lib-open">${pi(P("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${pi(e.describe||P("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${pi(e.package)}" aria-label="${pi(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${pi(P("xrTitle"))}">${te("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${pi(e.label||e.package)}</span></button>`}var pi=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Hf(){if(Qr()||!Zc||!ki.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=pt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=pt.runtimeBundled?P("xrMissing"):P("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=pt.summary||pt.problem||P("xrSummaryMissing"),t.appendChild(i),n.append(e,t),pt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=P("xrInstall"),r.onclick=()=>{Kc(),et(P("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=P("xrSelfTest"),s.onclick=()=>jc(),n.appendChild(s),n}var mi=!1,Yc=null;function G_(n){var u;if(mi)return;Yc={windows:ve.map(h=>({win:h,hidden:h.hidden})),dockHidden:bo(),keyboard:uf(),focus:((u=Yr())==null?void 0:u.id)||null};for(let h of ve)h.setHidden(!0);sr(!0),nr(!0),document.documentElement.classList.add("game-on","xr-on"),mi=!0,Qc.reset(),Eo(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=P("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=pt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let o=document.createElement("span");o.className="app-bar-spacer";let a=document.createElement("button");a.className="app-key",a.title=P("appMinimize"),a.setAttribute("aria-label",P("appMinimize")),a.innerHTML=te("chevronDown"),a.onclick=()=>V_();let l=document.createElement("button");l.className="app-key",l.title=P("close"),l.setAttribute("aria-label",P("close")),l.innerHTML=te("x"),l.onclick=()=>Jc(),t.append(i,o,a,l),e.append(t,s);let c=Kr({shape:"landscape",display:{w:r.w,h:r.h}});kt({id:To,title:n.label||n.package,node:e,w:c.w,h:c.h})}function W_(){if(!mi)return;mi=!1,Ao=null;for(let e of[...ve])(e.id===To||e.id===jr)&&It(e);document.documentElement.classList.remove("game-on","xr-on");let n=Yc;if(Yc=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...ve])!e.has(i)&&!i.onboarding&&It(i);nr(n.dockHidden);for(let{win:i,hidden:s}of n.windows)ve.includes(i)&&i.setHidden(s);n.keyboard&&sr(!1);let t=ve.find(i=>i.id===n.focus);t&&Ht(t)}Qc.reset(),Eo(0)}Ye("wins",()=>{!mi||!window.nextvrXr||ve.some(n=>n.id===To)||Jc()});var Qc=new wo,X_=()=>mi&&ve.some(n=>n.id===jr);function q_(){if(!mi||ve.some(i=>i.id===jr)||!pt.game)return;let n=pt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${pi(n.label||n.package)}</div>
    <p class="gm-sub">${pi(P("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${P("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${te("settings")}<span>${P("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${P("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&($_(),s.dataset.act==="exit"?Jc():s.dataset.act==="settings"&&Je("game:settings"))});let t=kt({id:jr,title:P("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:Bt,z:-.55}});t==null||t.setCurve(0)}function $_(){let n=ve.find(e=>e.id===jr);n&&It(n)}function Eo(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var Ao=null;function Y_(){let n=mi?ef(he.x,he.y):null,e=!!n&&n.win.id!==To&&!n.win.onboarding;e!==Ao&&(Ao=e,gi({cmd:"hands-ui",blocked:e}))}Ye("phonehands",n=>{if(!mi)return;Y_();let e=(n.hands||[]).filter(s=>s.pinching),t=Rf(e),i=Qc.update(performance.now(),{left:t,right:t});Eo(i.progress),i.opened&&q_(),i.closed&&!X_()&&Eo(0)});var ea=null,ln=null,Co="",Ro=0,Fi=new Set,Z_='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function J_(){var t;let n=Yr();if(n&&!n.hidden)return n.el;let e=document.querySelector(".dock");return e&&e.offsetWidth&&getComputedStyle(e).display!=="none"?e:((t=ve.find(i=>!i.hidden&&!i.onboarding))==null?void 0:t.el)||null}function Vf(){let n=J_();return n?[...n.querySelectorAll(Z_)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function ds(n){ln&&ln!==n&&ln.classList.remove("joycon-selected"),ln=n||null,ln&&(ln.classList.add("joycon-selected"),ln.focus({preventScroll:!0}))}function eu(n){let e=Vf();if(!e.length){ds(null);return}if(e.indexOf(ln)<0){ds(e[0]);return}let i=ln.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,o=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],a=null,l=1/0;for(let c of e){if(c===ln)continue;let u=c.getBoundingClientRect(),h=u.left+u.width/2-s,d=u.top+u.height/2-r,p=h*o[0]+d*o[1];if(p<=2)continue;let g=Math.abs(h*o[1]-d*o[0]),v=p+g*1.8;v<l&&(a=c,l=v)}a||(a=n==="left"||n==="up"?e.at(-1):e[0]),ds(a)}function K_(){let n=Vf();n.length&&((!ln||!n.includes(ln))&&ds(n[0]),ln==null||ln.click())}function j_(){let n=Yr();if(n&&!n.onboarding){It(n),ds(null);return}let e=document.activeElement;e&&e!==document.body&&e.blur()}function Q_(){if(ea){let n=ea;ea=null;for(let{win:e,hidden:t}of n.windows)ve.includes(e)&&e.setHidden(t);nr(n.dockHidden),hs(n.dockVisible),sr(n.keyboardHidden),ds(null);return}ea={windows:ve.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:bo(),dockVisible:sf(),keyboardHidden:hf()};for(let{win:n}of ea.windows)n.setHidden(!0);sr(!0),nr(!0),ds(null)}function eb(n,e){if(n==="home"){!Fi.has(n)&&e===0&&Q_(),Fi.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!Fi.has(n)||e>0)&&eu(n),Fi.add(n);return}Fi.has(n)||(Fi.add(n),n==="accept"?K_():n==="back"&&j_())}function tb(n,e,t=0){e?eb(n,t):Fi.delete(n)}function nb(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function ib(n,e){let t=nb(n,e);if(!t){Co="",Ro=0;return}let i=performance.now();t!==Co?(Co=t,eu(t),Ro=i+320):i>=Ro&&(eu(t),Ro=i+170)}function Gf(){!fe||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=tb,window.__nextvrJoyconAxes=ib,window.addEventListener("blur",()=>{Fi.clear(),Co=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";et(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var Q=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var sb=n=>{if(fe)return Vt("browser-extra",P("browser"),n);try{window.open(n,"_blank","noopener")}catch{et("Bloqueado pelo navegador")}};function rb(n,e,t="https://duckduckgo.com/"){var E,T;let i=ve.find(I=>I.id==="browser");if(i){let I=i.el.querySelector("[data-native-browser], iframe"),x=i.el.querySelector(".qb-urlfld");return x&&(x.value=t),I&&(fe?(I.dataset.url=t,(T=(E=window.NativeXR)==null?void 0:E.browserCmd)==null||T.call(E,"browser","go",t)):I.src=t),Ht(i),i}let s=Q("div");s.style.cssText="display:flex;flex-direction:column;height:100%;background:#171a22;color:#e9edf4";let r=Q("div");r.style.cssText="display:flex;align-items:center;gap:2px;padding:3px 6px;background:#0e1117;border-bottom:1px solid rgba(255,255,255,.06)";let o=Q("button","qb-icn");o.innerHTML=te("back"),o.title="Voltar";let a=Q("button","qb-icn");a.innerHTML=te("enter"),a.style.transform="rotate(180deg)",a.title="Avan\xE7ar";let l=Q("button","qb-icn");l.innerHTML=te("refresh"),l.title="Recarregar";let c=Q("input","fld qb-urlfld");c.type="text",c.placeholder="Pesquisar ou inserir URL",c.value=t;let u=Q("button","qb-icn");u.innerHTML=te("star"),u.title="Favorito",r.append(o,a,l,c,u);let h=Q("div");h.style.cssText="flex:1;min-height:0;position:relative;background:#fff";let d=Q(fe?"div":"iframe");fe?(d.dataset.nativeBrowser="browser",d.style.cssText="width:100%;height:100%;background:#fff",d.dataset.url=t):(d.style.cssText="width:100%;height:100%;border:0;background:#fff",d.referrerPolicy="no-referrer",d.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",d.src=t),h.appendChild(d);let p=Q("div","qb-dock"),g=document.createElement("button");g.className="dock-av",g.title="Perfil",g.setAttribute("aria-label","Perfil"),g.innerHTML=ab,p.appendChild(g);let v=document.createElement("button");v.className="dock-status",v.title="Status",v.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${te("wifi")}</span><span class="dock-bat">${ob}</span>`,p.appendChild(v),s.append(r,h,p);function f(){let I=ir(),x=p.querySelector(".dock-time");if(x&&(x.textContent=I.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):I.time),fe&&I.batteryLevel!=null){let M=p.querySelector(".dock-bat .b-fill");M&&(M.setAttribute("width",String(Math.max(2,13*I.batteryLevel))),M.setAttribute("fill",I.charging?"#8de6c8":I.batteryLevel<.2?"#ff6b6b":"currentColor"))}}f();let m=setInterval(f,2e4);!fe&&navigator.getBattery&&navigator.getBattery().then(I=>{function x(){let M=p.querySelector(".dock-bat .b-fill");M&&(M.setAttribute("width",String(Math.max(2,13*I.level))),M.setAttribute("fill",I.charging?"#8de6c8":I.level<.2?"#ff6b6b":"currentColor"))}I.addEventListener("levelchange",x),I.addEventListener("chargingchange",x),x()}).catch(()=>{});function w(){let I=p.querySelector(".dock-wifi");I&&(I.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",w),addEventListener("offline",w),w();function y(I){var M,U;let x=(I||"").trim();x&&(/^https?:\/\//i.test(x)||(x=/\.\w{2,}($|\/)/.test(x)?"https://"+x:"https://duckduckgo.com/?q="+encodeURIComponent(x)),c.value=x,fe?(d.dataset.url=x,(U=(M=window.NativeXR)==null?void 0:M.browserCmd)==null||U.call(M,"browser","go",x)):d.src=x)}function A(I,x){var M,U;fe&&((U=(M=window.NativeXR)==null?void 0:M.browserCmd)==null||U.call(M,"browser",I,x||""))}c.addEventListener("keydown",I=>{I.key==="Enter"&&(y(c.value),c.blur())}),c.addEventListener("focus",()=>_n(!0,c)),o.onclick=()=>A("back"),a.onclick=()=>A("fwd"),l.onclick=()=>A("reload");let R=kt({id:"browser",title:e||"Navegador",node:s});return R._cleanupQB=()=>{clearInterval(m),removeEventListener("online",w),removeEventListener("offline",w)},R}var ab='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',ob='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function Vt(n,e,t,i){if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return rb(n,e,t);let s=Q("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=Q("div","row browser-bar"),o=Q("input","fld");o.value=t,o.placeholder=P("search");let a=Q("button","go",te("enter"));a.setAttribute("aria-label",P("open")),a.title=P("open");let l=Q("button","go",te("external"));l.setAttribute("aria-label",P("open")),l.title=P("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(o,a,l);let c=Q("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let u=Q("div");u.style.cssText="flex:1;min-height:0;position:relative";let h=Q(fe?"div":"iframe");fe&&(h.dataset.nativeBrowser=n,h.style.cssText="width:100%;height:100%;background:#fff"),h.setAttribute("referrerpolicy","no-referrer"),h.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),u.appendChild(h),s.append(r,c,u);let d=g=>{let v=(g||"").trim();if(v){if(/^https?:\/\//i.test(v)||(v=/\.\w{2,}($|\/)/.test(v)?"https://"+v:"https://duckduckgo.com/?q="+encodeURIComponent(v)),o.value=v,fe){h.dataset.url=v,c.style.display="none";return}h.src=v,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};a.onclick=()=>d(o.value),o.addEventListener("keydown",g=>{g.key==="Enter"&&d(o.value)}),o.addEventListener("focus",()=>_n(!0,o)),l.onclick=()=>sb(o.value),d(t);let p=kt({id:n,title:e,node:s});return p.shell.classList.add("web-page-window"),p}var Nt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Po=[];function hu(){let n=Q("div","pad"),e=Q("div");e.innerHTML=`<h2>${P("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=Q("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${P("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=Q("div","grid3"),s=()=>{i.innerHTML="";for(let h of oc()){let d=Q("button","env"+(h.thumb?" env-pano":""));d.style.background=h.thumb?`url('${h.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",d.innerHTML=`<span>${h.name}</span>`,d.setAttribute("aria-pressed",ge.env===h.id?"true":"false"),d.onclick=()=>{ss(h.id),[...i.children].forEach(p=>p.setAttribute("aria-pressed","false")),d.setAttribute("aria-pressed","true"),et("Ambiente: "+h.name)},i.appendChild(d)}};s(),Ye("env",s),t.appendChild(i);let r=Q("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${P("gallery")}</h3>`;let o=Q("button","go",P("pickPhotos")),a=Q("input");a.type="file",a.accept="image/*",a.multiple=!0,a.style.display="none",r.appendChild(o);let l=Q("div","grid4"),c=Q("div");c.style.cssText="margin-top:14px";let u=()=>{if(l.innerHTML="",!Po.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${P("noPhotos")}</p>`;return}Po.forEach(h=>{let d=Q("button","thumb");d.innerHTML=`<img src="${h}" alt="">`,d.onclick=()=>{c.innerHTML=`<img src="${h}" style="width:100%;border-radius:16px">`},l.appendChild(d)})};return o.onclick=()=>a.click(),a.onchange=()=>{for(let h of a.files)Po.push(URL.createObjectURL(h));u(),et(Po.length+" fotos")},u(),n.append(e,t,r,a,l,c),kt({id:"gallery",title:P("gallery"),node:n})}function lb(){let n=Q("div","pad");n.innerHTML=`<h2>${P("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=Q("div","grid3");for(let t of oc()){let i=Q("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",ge.env===t.id),i.onclick=()=>{ss(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),kt({id:"env",title:P("env"),node:n})}function cb(n,e,t){let i=Q("div","opt");return i.append(Q("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function $t(n,e,t,i){let s=Q("div","yt-row"),r=Q("span","yt-ic");r.innerHTML=n;let o=Q("div","yt-txt");if(o.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,o),i){let a=Q("div","yt-ctl");a.appendChild(i),s.appendChild(a)}else{let a=Q("span","yt-ch");a.innerHTML="",s.appendChild(a)}return s}function tu(n,e){let t=Q("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=ge[n]?"1":"0",t.setAttribute("aria-checked",ge[n]?"true":"false")};return i(),t.onclick=()=>{ge[n]=ge[n]?0:1,Zs(),i(),e&&e(ge[n])},t}function rr(n){let e=Q("div","yt-sec");return e.textContent=n,e}function fs(n,e,t,i){let s=Q("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=ge[n],s.oninput=()=>{ge[n]=+s.value,Zs()},s}function Wf(n){n.innerHTML="";let e=Pf(),t=n,i=Q("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${P(Qr()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=Q("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!Qr()){let a=Q("button","go",P("xrInstall"));a.onclick=()=>{Kc()},s.append(a)}let r=Q("button","go",P("xrSelfTest"));r.onclick=()=>jc(),s.append(r);let o=Q("div","seg");for(let[a,l,c]of[["controllers",P("xrModeControllers"),P("xrModeControllersSub")],["hands",P("xrModeHands"),P("xrModeHandsSub")]]){let u=Q("button",null,l);u.title=c,u.setAttribute("aria-pressed",String(Nf()===a)),u.onclick=()=>{Ff(a),[...o.children].forEach(h=>h.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true")},o.appendChild(u)}t.append(cb(P("xrHandMode"),P("xrHandModeSub"),o),s),t.append(Q("p","note",P("xrHandModeNote"))),!Qr()&&!e.runtimeBundled&&t.append(Q("p","note",P("xrBundlingNote")))}function du(){var E,T;let n=Q("div","quick-center"),e=Q("section","quick-panel"),t=Q("aside","quick-side"),i=Q("div","quick-status"),s=(()=>{var I,x;try{return JSON.parse(((x=(I=window.NativeXR)==null?void 0:I.battery)==null?void 0:x.call(I))||"null")}catch{return null}})(),r=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${r}</span></div><div class="quick-battery">${te("battery")}<b>${s?Math.round(s.level*100):"\u2014"}%</b></div>`;let o=Q("button","quick-gear",te("settings"));o.type="button",o.title="Todas as configura\xE7\xF5es",o.setAttribute("aria-label","Todas as configura\xE7\xF5es"),o.onclick=()=>ta(),i.appendChild(o);let a=Q("div","quick-tiles"),l=(I,x,M,U,q=!1)=>{let Y=Q("button",`quick-tile${q?" is-disabled":""}`);return Y.type="button",Y.innerHTML=`<span class="quick-tile-icon">${te(I)}</span><span><b>${x}</b><small>${M}</small></span>`,Y.disabled=q,U&&(Y.onclick=U),a.appendChild(Y),Y};l("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var I;return(I=window.NativeXR)!=null&&I.systemPanel?window.NativeXR.systemPanel("internet"):et("Conex\xF5es dispon\xEDveis no Android")}),l("bluetooth","Bluetooth","Dispositivos",()=>{var I;return(I=window.NativeXR)!=null&&I.systemPanel?window.NativeXR.systemPanel("bluetooth"):et("Bluetooth dispon\xEDvel no Android")}),l("android","Apps Android","Abrir janela Shizuku",()=>uu()),l("lock","Limite","Movimento protegido",null,!0),e.append(i,a);let c=Q("div","quick-section");c.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let u=Q("div","quick-controls"),h=ge.env==="night"?"passthrough":ge.env,d=!1,p=null,g=null,v=I=>{var x;d=!!I,(x=window.NativeXR)!=null&&x.audioEnabled&&window.NativeXR.audioEnabled(!d);for(let M of[p,g])M&&(M.classList.toggle("is-active",d),M.setAttribute("aria-pressed",String(d)));p&&(p.querySelector("small").textContent=d?"\xC1udio silenciado":"Som ativado")},f=(I,x,M,U,q=!1)=>{let Y=Q("button",`quick-control${q?" is-active":""}`);return Y.type="button",Y.setAttribute("aria-pressed",String(q)),Y.innerHTML=`<span>${te(I)}</span><b>${x}</b><small>${M}</small>`,Y.onclick=()=>{let L=U(Y);Y.classList.toggle("is-active",!!L),Y.setAttribute("aria-pressed",String(!!L))},u.appendChild(Y),Y};f("camera","Vis\xE3o do ambiente",ge.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",I=>{let x=ge.env!=="passthrough";return lc(x),I.querySelector("small").textContent=x?"C\xE2mera ativa":"C\xE2mera desligada",x},ge.env==="passthrough"),p=f("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(v(!d),d)),f("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Cr(),et("Vis\xE3o recentralizada"),!1)),f("moon","Modo noturno",ge.env==="night"?"Ativado":"Desativado",I=>{let x=ge.env!=="night";return x?(h=ge.env,ss("night")):ss(h==="night"?"passthrough":h),I.querySelector("small").textContent=x?"Ativado":"Desativado",x},ge.env==="night"),f("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(ta(),!1)),f("android","Apps do Android","Abrir launcher Shizuku",()=>(uu(),!1)),c.appendChild(u),e.append(c);let m=Q("div","quick-side-title","Ajustes"),w=Q("span","quick-side-icon",te("volume")),y=Q("input","quick-vertical");y.type="range",y.min="0",y.max="100",y.value=(E=window.NativeXR)!=null&&E.volume?window.NativeXR.volume():65,y.setAttribute("aria-label","Volume"),y.title=`Volume ${y.value}%`,y.oninput=()=>{var I,x;(x=(I=window.NativeXR)==null?void 0:I.setVolume)==null||x.call(I,+y.value),y.title=`Volume ${y.value}%`},g=Q("button","quick-side-button",te("volumeoff")),g.type="button",g.title="Silenciar \xE1udio",g.setAttribute("aria-label","Silenciar \xE1udio"),g.setAttribute("aria-pressed","false"),g.onclick=()=>v(!d);let A=Q("span","quick-side-icon",te("sun")),R=Q("input","quick-vertical");return R.type="range",R.min="10",R.max="100",R.value=(T=window.NativeXR)!=null&&T.brightness?window.NativeXR.brightness():70,R.setAttribute("aria-label","Brilho"),R.title=`Brilho ${R.value}%`,R.oninput=()=>{var I,x;(x=(I=window.NativeXR)==null?void 0:I.setBrightness)==null||x.call(I,+R.value),R.title=`Brilho ${R.value}%`},t.append(m,w,y,g,A,R),n.append(e,t),kt({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function ta(){let n=Q("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=Q("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=Q("button","yt-back");t.innerHTML=te("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let p=ve.find(g=>g.id==="settings");p&&It(p)};let i=Q("div","yt-head-title");i.textContent=P("settings"),e.append(t,i);let s=Q("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,o=()=>{r=kt({id:"language-pick",title:P("langTitle"),w:400,h:560,node:jf(ge.lang||"pt",p=>{ac(p),et(P("langChanged")),It(r);let g=ve.find(v=>v.id==="settings");g&&It(g),ta()},!0)})};s.append(rr(P("general")));let a=Q("button","yt-link");a.append($t(te("globe"),P("language"),ro(ge.lang||"pt").label)),a.onclick=o,s.append(a),s.append($t(te("gauge"),"Contador de FPS","Mostrar taxa de quadros",tu("showFps")));let l=Q("button","yt-link");l.append($t(te("image"),"Ambiente","Trocar passthrough / panorama")),l.onclick=()=>{let p=ve.find(g=>g.id==="settings");p&&It(p),hu()},s.append(l),s.append(rr(P("hands"))),s.append($t(te("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append($t(te("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",tu("handDraw"))),s.append($t(te("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(rr(P("windows"))),s.append($t(te("maximize"),"Tamanho","Escala das janelas",fs("winScale",.6,1.6,.05))),s.append($t(te("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",fs("winDist",fe?.6:1.5,fe?1.8:3.4,.05))),s.append($t(te("curve"),P("curve"),"Abertura do arco",fs("winCurve",0,1,.05))),s.append($t(te("curve"),P("win360"),P("win360k"),fs("win360K",.2,1.15,.05))),s.append($t(te("curve"),P("win360All"),"Novas janelas curvadas",tu("win360"))),s.append($t(te("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",fs("winTilt",0,1.5,.05))),s.append(rr(P("dock"))),s.append($t(te("appGrid"),"Tamanho da dock",null,fs("dockSize",.7,1.5,.05))),s.append($t(te("distance"),"Dist\xE2ncia da dock",null,fs("dockDist",.7,1.5,.05))),s.append(rr("Desempenho"));let c=Q("div","yt-seg");for(let[p,g]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let v=Q("button","yt-seg-btn");v.textContent=g,v.setAttribute("aria-pressed",ge.quality===p),v.onclick=()=>{ge.quality=p,Zs(),Je("quality"),[...c.children].forEach(f=>f.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},c.appendChild(v)}s.append($t(te("settings"),"Qualidade","Resolu\xE7\xE3o de renderiza\xE7\xE3o",c)),s.append(rr(P("xrTitle")));let u=Q("button","yt-link");u.append($t(te("controller"),P("xrTitle"),P("xrSub"))),u.setAttribute("aria-expanded","false");let h=Q("div","card");h.dataset.xrPage="",h.style.margin="0 16px 14px",h.hidden=!0,u.onclick=()=>{h.hidden=!h.hidden,u.setAttribute("aria-expanded",String(!h.hidden)),h.hidden||Wf(h)},s.append(u,h);let d=Q("div","yt-foot");return d.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(d),n.append(e,s),kt({id:"settings",title:P("settings"),node:n})}function ub(){let n=ve.find(d=>d.id==="quick-settings");if(n)return Ht(n),au(ir()),n;let e=Q("div","quick-settings");e.innerHTML=`<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${te("battery")}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-settings aria-label="Configura\xE7\xF5es NextVR">${te("settings")}<span>Configura\xE7\xF5es</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${te("crosshair")}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${te("x")}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de m\xEDdia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${te("volume")}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${te("sun")}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${te("wifi")}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conex\xE3o</span></div>
      <div class="qs-card"><div class="qs-card-line">${te("bluetooth")}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${te("link")}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">N\xE3o conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${te("boundary")}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${te("scene")}<span>Vis\xE3o do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR n\xE3o usa microfone">${te("mic")}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${te("move")}<span>Redefinir visualiza\xE7\xE3o</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${te("sun")}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${te("moon")}<span>N\xE3o perturbe</span></button>
      <button class="qs-tool" disabled title="Espelhamento do sistema n\xE3o dispon\xEDvel nesta tela">${te("cast")}<span>Espelhar</span></button>
      <button class="qs-tool" disabled>${te("bug")}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${te("lock")}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${te("device")}<span>Remote Desktop</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles r\xE1pidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de m\xEDdia"></div>
      ${te("volume")}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar m\xEDdia">${te("volumeoff")}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${te("moon")}</button>
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(d,p)=>{var g,v;try{let f=Number((v=(g=window.NativeXR)==null?void 0:g[d])==null?void 0:v.call(g));return Number.isFinite(f)?Math.max(0,Math.min(100,f)):p}catch{return p}},o=fe?r("mediaVolumePercent",50):50,a=fe?r("brightnessPercent",50):50;o>0&&(i.lastVolume=o);function l(d,p){let g=Math.max(0,Math.min(100,Number(p)||0));for(let v of s.filter(f=>f.dataset.qRange===d))v.value=String(g),v.style.setProperty("--fill",`${g}%`);d==="volume"&&(o=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0)}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function u(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(d=>d.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(d=>d.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(d=>d.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",o),l("brightness",a),u();for(let d of s)d.addEventListener("input",()=>l(d.dataset.qRange,d.value)),d.addEventListener("change",()=>{var p,g,v,f;fe&&(d.dataset.qRange==="volume"&&((g=(p=window.NativeXR).setMediaVolumePercent)==null||g.call(p,o)),d.dataset.qRange==="brightness"&&((f=(v=window.NativeXR).setBrightnessPercent)==null||f.call(v,Number(d.value))),u(),c())});t.addEventListener("click",d=>{var g,v;let p=f=>d.target.closest(f);if(p("[data-q-close]")){It(ve.find(f=>f.id==="quick-settings"));return}if(p("[data-q-settings]")){ta();return}if(p("[data-q-env]")){lb();return}if(p("[data-q-recenter]")){Cr();return}if(p("[data-q-night]")){i.night=!i.night,u(),c();return}if(p("[data-q-dnd]")){i.dnd=!i.dnd,u(),c();return}p("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(o>0&&(i.lastVolume=o),l("volume",0)):l("volume",i.lastVolume||50),fe&&((v=(g=window.NativeXR).setMediaVolumePercent)==null||v.call(g,o)),u(),c())});let h=kt({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return au(ir()),h}function au(n=ir()){var o;let e=(o=ve.find(a=>a.id==="quick-settings"))==null?void 0:o.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}Ye("device-status",au);var Xf="nextvr.lib.recent.v1",hb=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},na=hb(Xf),db=()=>{try{localStorage.setItem(Xf,JSON.stringify(na))}catch{}},qf=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],ps=n=>{let e=ve.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null},fb={youtube:()=>Vt("youtube","YouTube","https://m.youtube.com/"),browser:()=>Vt("browser",P("browser"),"https://duckduckgo.com/"),store:()=>$f(),gallery:()=>hu(),settings:()=>du(),discord:()=>Vt("discord","Discord","https://discord.com/app"),netflix:()=>Vt("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>Vt("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>Vt("twitch","Twitch","https://www.twitch.tv/"),prime:()=>Vt("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>Vt("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>Vt("instagram","Instagram","https://www.instagram.com/"),x:()=>Vt("x","X","https://x.com/"),facebook:()=>Vt("facebook","Facebook","https://www.facebook.com/"),telegram:()=>Vt("telegram","Telegram","https://web.telegram.org/"),spotify:()=>Vt("spotify","Spotify","https://open.spotify.com/")},nu="apps",pb=[["apps","Apps"],["horizon","Horizon+"]];function mb(){let n=Q("div","st"),t=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${pb.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${nu===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${te("user")}</button><button class="st-x" data-x aria-label="Fechar">${te("x")}</button></div>`;return nu==="horizon"?t+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>':t+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.
      Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`,n.innerHTML=t,n.addEventListener("click",i=>{let s=o=>i.target.closest(o),r;if(r=s("[data-tab]")){nu=r.dataset.tab,ou();return}if(s("[data-x]")){let o=ve.find(a=>a.id==="store");o&&It(o);return}if(s("[data-ava]")){et("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-openlib]")){Yf();return}}),n}function ou(){var t;let n=ps("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(mb()),n.querySelector(".st").scrollTop=e}function $f(){let n=ve.find(i=>i.id==="store");if(n)return ou(),Ht(n),n;let e=Q("div");e.style.cssText="height:100%";let t=kt({id:"store",title:"Store",node:e});return ou(),t}var Io="recent",Xn="all",lu="",iu=["all","apps","games","recent"],gb=n=>({all:P("libAll"),apps:P("apps"),games:P("libGames"),recent:P("recents")})[n]||P("libAll");function vb(n,e){na=[n,...na.filter(t=>t!==n)].slice(0,40),db(),e||vi()}function xb(){var s;!Lf().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&Uf();let e=[...zf(),...qf.map(r=>({...r,kind:"app"}))];Xn==="games"&&(e=e.filter(r=>r.kind==="xr")),Xn==="apps"&&(e=e.filter(r=>r.kind==="app")),Xn==="recent"&&(e=e.filter(r=>na.includes(r.id)));let t=lu.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),Io==="az")return[...e].sort((r,o)=>r.name.localeCompare(o.name,"pt-BR"));let i=r=>{let o=na.indexOf(r.id);return o<0?1e6:o};return[...e].sort((r,o)=>i(r)-i(o))}function yb(n){let e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${te(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${e}<span class="nm fb">${n.label||n.name}</span>`:t;return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function _b(){var l;let n=xb(),e=Q("div","lib"),t=gb(Xn),i=ve.find(c=>c.id==="library"),s=Xn==="games"?P("libGamesEmpty"):Xn==="recent"?P("libRecentEmpty"):P("appNoResults"),r=(c,u,h)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Nt(u)}" title="${Nt(u)}" aria-pressed="${Xn===c}">${te(h)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Nt(P("apps"))}">
      ${r("all",P("libAll"),"appGrid")}
      ${r("games",P("libGames"),"controller")}
      ${r("recent",P("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",P("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${Nt(P("apps"))}</h2>
        <div class="lib-searchbox">${te("search")}
          <input class="lib-search open" data-q aria-label="${Nt(P("searchApps"))}"
            placeholder="${Nt(P("searchApps"))}" value="${Nt(lu)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Nt(P("recents"))}">
          <span>${Io==="az"?"A\u2013Z":Nt(P("recents"))}</span>${te("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${Nt(P("libFilter"))}">
          <span>${Nt(P("libFilter"))} \xB7 ${Nt(t)} <i>(${n.length})</i></span>${te("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${Nt(P("win360"))}"
          title="${Nt(P("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${Nt(P("close"))}" title="${Nt(P("close"))}">${te("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${Nt(P("repin"))}" title="${Nt(P("repin"))}">${te("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?Bf(c):c.kind==="android"?Xc(c.app):yb(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Nt(s)}</div>`}
        </div>
      </div>
    </section>`;let o=Hf();o&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(o));let a=e.querySelector('[data-q]:not([data-q="android"])');return a&&(a.addEventListener("input",()=>{var u;lu=a.value,vi(!0);let c=(u=ps("library"))==null?void 0:u.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),a.addEventListener("focus",()=>_n(!0,a))),e.addEventListener("click",c=>{let u=d=>c.target.closest(d),h;if(u("[data-lib-close]")){It(ve.find(d=>d.id==="library"));return}if(h=u("[data-lib-nav]")){Xn=h.dataset.libNav,vi();return}if(u("[data-lib-curve]")){let d=ve.find(p=>p.id==="library");d&&(d.setCurve(d.curve>0?0:ge.win360K),vi());return}if(u("[data-sort]")){Io=Io==="az"?"recent":"az",vi();return}if(u("[data-filter]")){Xn=iu[(iu.indexOf(Xn)+1)%iu.length],vi();return}if(h=u("[data-android]")){let d=h.dataset.android;Gc(d),qc(d);return}if(h=u("[data-xr]")){let d=h.dataset.xr;If()?kf():Of(d);return}if(h=u("[data-app]")){let d=qf.find(g=>g.id===h.dataset.app);if(!d)return;vb(d.id);let p=fb[d.id];p?p():et(d.name+": sem endere\xE7o cadastrado");return}}),e}function vi(n){var i;let e=ps("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(_b()),e.querySelector(".lib-scroll").scrollTop=t}var Lo="Todos",su="",bb=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function Mb(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function cu(n){var u;Wc(!1);let e=((u=n.querySelector(".android-app-scroll"))==null?void 0:u.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=Q("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${te("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${te("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${te("refresh")}</button></div>`,t.querySelector(".android-search input").value=su;let i=wf(),s=Q("div","android-categories"),r=bb.map(h=>`<button class="android-category" data-category="${h}" aria-pressed="${Lo===h}">${h}</button>`).join("");s.innerHTML=r;let o=Q("div","android-results");o.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let a=Q("div","android-app-scroll"),l=Q("div","android-app-grid"),c=()=>{let h=su.trim().toLocaleLowerCase("pt-BR"),d=Af().filter(g=>{let v=Lo==="Todos"||Mb(g)===Lo,f=!h||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(h);return v&&f}),p=o.querySelector(".android-results-count");p&&(p.textContent=`${d.length} ${d.length===1?"app":"apps"}`),l.innerHTML=d.length?d.map(g=>Xc(g)).join(""):`<div class="android-empty">${P("noAndroidApps")}</div>`};c(),a.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,o,a),a.scrollTop=e,n.oninput=h=>{h.target.matches(".android-search input")&&(su=h.target.value,c())},n.onclick=h=>{let d=h.target.closest("[data-category]");if(d){Lo=d.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===d))),c();return}if(h.target.closest(".android-refresh")){Wc(!0),c();return}let p=h.target.closest("[data-android]");p&&(Gc(p.dataset.android),qc(p.dataset.android))}}function uu(){let n=ps("shizuku");if(n)return cu(n),Ht(ve.find(t=>t.id==="shizuku"));let e=Q("div","android-launcher");return cu(e),kt({id:"shizuku",title:"Apps do Android",node:e})}function Yf(){let n=ve.find(i=>i.id==="library");if(n)return vi(),Ht(n),n;let e=Q("div");e.style.cssText="height:100%";let t=kt({id:"library",title:P("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return vi(),t}var zi=Object.freeze({compass:te("compass"),store:te("store"),people:te("people"),camera:te("camera"),gear:te("settings"),play:te("play"),shizuku:te("shizuku"),vision:te("vision")});function Sb(){lc(ge.env!=="passthrough")}function Zf(){let n=rf("virtual-environment");if(!n)return;let e=ge.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${P("envVirtual")} \xB7 ${e?P("on"):P("off")}`}function Jf(){af([{kind:"avatar",id:"profile",label:P("profile"),run:ta},{kind:"status",id:"status",label:P("settings"),run:ub},{kind:"tool",id:"virtual-environment",label:P("envVirtual"),svg:zi.vision,run:Sb},{kind:"spacer"},{id:"browser",win:"browser",label:P("browser"),svg:zi.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>Vt("browser",P("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:P("store"),svg:zi.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:$f},{id:"discord",win:"discord",label:"Discord",svg:zi.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>Vt("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:P("gallery"),svg:zi.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:hu},{id:"settings",win:"control-center",label:P("settings"),svg:zi.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:du},{id:"youtube",win:"youtube",label:"YouTube",svg:zi.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>Vt("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:P("shizuku"),svg:zi.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:uu},{id:"library",win:"library",launcher:!0,label:P("apps"),run:Yf}]),Zf()}Ye("env",Zf);Ye("lang",Jf);function wb(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=Ef(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=Q("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}Tf();Gf();Df();Ye("appsState",()=>{wb(),Kf()});Ye("xr",()=>{Kf();let n=ps("settings");n!=null&&n.querySelector("[data-xr-page]")&&Wf(n.querySelector("[data-xr-page]"))});var ru=0;function Kf(){ru||(ru=setTimeout(()=>{ru=0,ps("library")&&vi();let n=ps("shizuku");n&&cu(n)},500))}var Eb=document.getElementById("boot"),kM=document.getElementById("bootGo"),Bi=null;Eb.hidden=!0;function Ab(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function jf(n,e,t=!1){let i=Q("div",t?"langwin slim":"langwin"),s=o=>ro(o).label;return(()=>{let o=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${o}
        <div class="lang-options" role="list">${Ar.map(a=>`<button class="lang-option${a.table?"":" soon"}" data-lang="${a.id}"
            ${a.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${a.id===n}"><span>${a.label}</span>${a.table?"":`<i>${P("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${P("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(a=>a.onclick=()=>e(a.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function Tb(){var e,t;let n=kt({id:"language",title:"Next VR",w:480,h:660,onboarding:!0,node:jf(ge.lang||Ab(),Rb)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}Ye("handframe",n=>{let e=Bi==null?void 0:Bi.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function Rb(n){if(!Bi)return;ac(n),Bi&&(It(Bi),Bi=null),hs(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Rr(),t=ge.handsOn?Ur():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Cr(),280)}document.getElementById("btnGyro").onclick=()=>Rr();document.getElementById("btnHand").onclick=()=>wd()?pc():Ur();Ye("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});Ye("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Jf();ge.lang?(hs(!0),fe&&(Rr(),ge.handsOn&&Ur()),document.getElementById("perm").hidden=!1,setTimeout(()=>Cr(),280)):(hs(!1),document.getElementById("stat").hidden=!0,Bi=Tb());fe&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=oi).invalidate)==null||e.call(n),Rr(),ge.handsOn&&Ur()},window.nextvrSuspend=()=>{pc()},Ye("hands",()=>{document.getElementById("perm").hidden=!0}));Ye("game:settings",()=>du());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
