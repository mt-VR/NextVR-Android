(()=>{var Lp=0,zh=1,Ip=2;var dd=1,Dp=2,oi=3,Ii=0,cn=1,ci=2;var Ci=0,$s=1,kh=2,Bh=3,Hh=4,Np=5,ns=100,Up=101,Op=102,Vh=103,Gh=104,Fp=200,zp=201,kp=202,Bp=203,Uc=204,Oc=205,Hp=206,Vp=207,Gp=208,Wp=209,Xp=210,qp=211,Yp=212,$p=213,Zp=214,Jp=0,Kp=1,jp=2,Ga=3,Qp=4,em=5,tm=6,nm=7,fd=0,im=1,sm=2,Pi=0,rm=1,am=2,om=3,cm=4,lm=5,hm=6;var pd=300,js=301,Qs=302,Fc=303,zc=304,po=306,kc=1e3,Nn=1001,Bc=1002,jt=1003,Wh=1004;var sc=1005;var Mn=1006,um=1007;var Cr=1008;var Li=1009,dm=1010,fm=1011,xl=1012,md=1013,Ai=1014,Ti=1015,Pr=1016,gd=1017,xd=1018,rs=1020,pm=1021,Un=1023,mm=1024,gm=1025,as=1026,er=1027,xm=1028,vd=1029,vm=1030,_d=1031,yd=1033,rc=33776,ac=33777,oc=33778,cc=33779,Xh=35840,qh=35841,Yh=35842,$h=35843,bd=36196,Zh=37492,Jh=37496,Kh=37808,jh=37809,Qh=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,au=37817,ou=37818,cu=37819,lu=37820,hu=37821,lc=36492,uu=36494,du=36495,_m=36283,fu=36284,pu=36285,mu=36286;var Wa=2300,Xa=2301,hc=2302,gu=2400,xu=2401,vu=2402;var Md=3e3,os=3001,ym=3200,bm=3201,Mm=0,Sm=1,Sn="",kt="srgb",hi="srgb-linear",vl="display-p3",mo="display-p3-linear",qa="linear",mt="srgb",Ya="rec709",$a="p3";var Cs=7680;var _u=519,wm=512,Em=513,Am=514,Sd=515,Tm=516,Rm=517,Cm=518,Pm=519,yu=35044;var bu="300 es",Hc=1035,li=2e3,Za=2001,Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=1234567,Zs=Math.PI/180,Lr=180/Math.PI;function sr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function _l(n,e){return(n%e+e)%e}function Lm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Im(n,e,t){return n!==e?(t-n)/(e-n):0}function Ar(n,e,t){return(1-t)*n+t*e}function Dm(n,e,t,i){return Ar(n,e,1-Math.exp(-t*i))}function Nm(n,e=1){return e-Math.abs(_l(n,e*2)-e)}function Um(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zm(n,e){return n+Math.random()*(e-n)}function km(n){return n*(.5-Math.random())}function Bm(n){n!==void 0&&(Mu=n);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(n){return n*Zs}function Vm(n){return n*Lr}function Vc(n){return(n&n-1)===0&&n!==0}function Gm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ja(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var wd={DEG2RAD:Zs,RAD2DEG:Lr,generateUUID:sr,clamp:Qt,euclideanModulo:_l,mapLinear:Lm,inverseLerp:Im,lerp:Ar,damp:Dm,pingpong:Nm,smoothstep:Um,smootherstep:Om,randInt:Fm,randFloat:zm,randFloatSpread:km,seededRandom:Bm,degToRad:Hm,radToDeg:Vm,isPowerOfTwo:Vc,ceilPowerOfTwo:Gm,floorPowerOfTwo:Ja,setQuaternionFromProperEuler:Wm,normalize:Jt,denormalize:Xs},qe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],x=s[0],p=s[3],f=s[6],M=s[1],v=s[4],A=s[7],R=s[2],E=s[5],T=s[8];return r[0]=a*x+o*M+c*R,r[3]=a*p+o*v+c*E,r[6]=a*f+o*A+c*T,r[1]=l*x+h*M+u*R,r[4]=l*p+h*v+u*E,r[7]=l*f+h*A+u*T,r[2]=d*x+m*M+g*R,r[5]=d*p+m*v+g*E,r[8]=d*f+m*A+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uc=new Ge;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xm(){let n=Ka("canvas");return n.style.display="block",n}var Su={};function Tr(n){n in Su||(Su[n]=!0,console.warn(n))}var wu=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eu=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[hi]:{transfer:qa,primaries:Ya,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:mt,primaries:Ya,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[mo]:{transfer:qa,primaries:$a,toReference:n=>n.applyMatrix3(Eu),fromReference:n=>n.applyMatrix3(wu)},[vl]:{transfer:mt,primaries:$a,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Eu),fromReference:n=>n.applyMatrix3(wu).convertLinearToSRGB()}},qm=new Set([hi,mo]),ct={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ga[e].toReference,s=ga[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ga[n].primaries},getTransfer:function(n){return n===Sn?qa:ga[n].transfer}};function Js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ps,ja=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Ka("canvas")),Ps.width=e.width,Ps.height=e.height;let i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ka("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Js(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Js(t[i]/255)*255):t[i]=Js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ym=0,Qa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fc(s[a].image)):r.push(fc(s[a]))}else r=fc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ja.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $m=0,On=class n extends Di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Nn,s=Nn,r=Mn,a=Cr,o=Un,c=Li,l=n.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=sr(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===os?kt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?os:Md}set encoding(e){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?kt:Sn}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=pd;On.DEFAULT_ANISOTROPY=1;var Bt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,A=(m+1)/2,R=(f+1)/2,E=(h+d)/4,T=(u+x)/4,B=(g+p)/4;return v>A&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=T/i):A>R?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=B/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=B/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gc=class extends Di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===os?kt:Sn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new On(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Gc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},eo=class extends On{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wc=class extends On{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==g){let p=1-o,f=c*d+l*m+h*g+u*x,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let R=Math.sqrt(v),E=Math.atan2(R,f*M);p=Math.sin(p*E)/R,o=Math.sin(o*E)/R}let A=o*M;if(c=c*p+d*A,l=l*p+m*A,h=h*p+g*A,u=u*p+x*A,p===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new P,Au=new tn,cs=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),va.subVectors(this.max,Mr),Ls.subVectors(e.a,Mr),Is.subVectors(e.b,Mr),Ds.subVectors(e.c,Mr),bi.subVectors(Is,Ls),Mi.subVectors(Ds,Is),Ki.subVectors(Ls,Ds);let t=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-Ki.z,Ki.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,Ki.z,0,-Ki.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-Ki.y,Ki.x,0];return!mc(t,Ls,Is,Ds,va)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Ls,Is,Ds,va))?!1:(_a.crossVectors(bi,Mi),t=[_a.x,_a.y,_a.z],mc(t,Ls,Is,Ds,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new P,new P,new P,new P,new P,new P,new P,new P],Ln=new P,xa=new cs,Ls=new P,Is=new P,Ds=new P,bi=new P,Mi=new P,Ki=new P,Mr=new P,va=new P,_a=new P,ji=new P;function mc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ji.fromArray(n,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Zm=new cs,Sr=new P,gc=new P,tr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(gc)),this.expandByPoint(Sr.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new P,xc=new P,ya=new P,Si=new P,vc=new P,ba=new P,_c=new P,Ir=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xc.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=Si.dot(this.direction),c=-Si.dot(ya),l=Si.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xc).addScaledVector(ya,d),m}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){vc.subVectors(t,e),ba.subVectors(i,e),_c.crossVectors(vc,ba);let a=this.direction.dot(_c),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);let c=o*this.direction.dot(ba.crossVectors(Si,ba));if(c<0)return null;let l=o*this.direction.dot(vc.cross(Si));if(l<0||c+l>a)return null;let h=-o*Si.dot(_c);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,m,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,m,g,x,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,m,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Km)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),wi.crossVectors(i,mn),wi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),wi.crossVectors(i,mn)),wi.normalize(),Ma.crossVectors(mn,wi),s[0]=wi.x,s[4]=Ma.x,s[8]=mn.x,s[1]=wi.y,s[5]=Ma.y,s[9]=mn.y,s[2]=wi.z,s[6]=Ma.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],f=i[14],M=i[3],v=i[7],A=i[11],R=i[15],E=s[0],T=s[4],B=s[8],y=s[12],w=s[1],N=s[5],W=s[9],Q=s[13],L=s[2],U=s[6],G=s[10],Y=s[14],q=s[3],X=s[7],K=s[11],te=s[15];return r[0]=a*E+o*w+c*L+l*q,r[4]=a*T+o*N+c*U+l*X,r[8]=a*B+o*W+c*G+l*K,r[12]=a*y+o*Q+c*Y+l*te,r[1]=h*E+u*w+d*L+m*q,r[5]=h*T+u*N+d*U+m*X,r[9]=h*B+u*W+d*G+m*K,r[13]=h*y+u*Q+d*Y+m*te,r[2]=g*E+x*w+p*L+f*q,r[6]=g*T+x*N+p*U+f*X,r[10]=g*B+x*W+p*G+f*K,r[14]=g*y+x*Q+p*Y+f*te,r[3]=M*E+v*w+A*L+R*q,r[7]=M*T+v*N+A*U+R*X,r[11]=M*B+v*W+A*G+R*K,r[15]=M*y+v*Q+A*Y+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*m-i*c*m)+x*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],M=u*p*l-x*d*l+x*c*m-o*p*m-u*c*f+o*d*f,v=g*d*l-h*p*l-g*c*m+a*p*m+h*c*f-a*d*f,A=h*x*l-g*u*l+g*o*m-a*x*m-h*o*f+a*u*f,R=g*u*c-h*x*c-g*o*d+a*x*d+h*o*p-a*u*p,E=t*M+i*v+s*A+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=M*T,e[1]=(x*d*r-u*p*r-x*s*m+i*p*m+u*s*f-i*d*f)*T,e[2]=(o*p*r-x*c*r+x*s*l-i*p*l-o*s*f+i*c*f)*T,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*m-i*c*m)*T,e[4]=v*T,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*T,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*T,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*T,e[8]=A*T,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*f-t*u*f)*T,e[10]=(a*x*r-g*o*r+g*i*l-t*x*l-a*i*f+t*o*f)*T,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*T,e[12]=R*T,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*p+t*u*p)*T,e[14]=(g*o*s-a*x*s-g*i*c+t*x*c+a*i*p-t*o*p)*T,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,g=r*u,x=a*h,p=a*u,f=o*u,M=c*l,v=c*h,A=c*u,R=i.x,E=i.y,T=i.z;return s[0]=(1-(x+f))*R,s[1]=(m+A)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(m-A)*E,s[5]=(1-(d+f))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(p-M)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),o=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);let l=1/r,h=1/a,u=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=li){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,g;if(o===li)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Za)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=li){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*l,m=(i+s)*h,g,x;if(o===li)g=(a+r)*u,x=-2*u;else if(o===Za)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ns=new P,In=new nt,Jm=new P(0,0,0),Km=new P(1,1,1),wi=new P,Ma=new P,mn=new P,Tu=new nt,Ru=new tn,Fn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jm=0,Cu=new P,Us=new tn,si=new nt,Sa=new P,wr=new P,Qm=new P,eg=new tn,Pu=new P(1,0,0),Lu=new P(0,1,0),Iu=new P(0,0,1),tg={type:"added"},ng={type:"removed"},ln=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Fn,i=new tn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ge}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(wr,Sa,this.up):si.lookAt(Sa,wr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(si),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};ln.DEFAULT_UP=new P(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new P,ri=new P,yc=new P,ai=new P,Os=new P,Fs=new P,Du=new P,bc=new P,Mc=new P,Sc=new P,wa=!1,ss=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ri.subVectors(i,t),yc.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(ri),c=Dn.dot(yc),l=ri.dot(ri),h=ri.dot(yc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,i,s,r,a,o,c){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),this.getInterpolation(e,t,i,s,r,a,o,c)}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(a,ai.y),c.addScaledVector(o,ai.z),c)}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ri.subVectors(e,t),Dn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,i),Fs.subVectors(r,i),bc.subVectors(e,i);let c=Os.dot(bc),l=Fs.dot(bc);if(c<=0&&l<=0)return t.copy(i);Mc.subVectors(e,s);let h=Os.dot(Mc),u=Fs.dot(Mc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Os,a);Sc.subVectors(e,r);let m=Os.dot(Sc),g=Fs.dot(Sc);if(g>=0&&m<=g)return t.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Fs,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Du.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Du,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(Os,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=_l(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=wc(a,r,e+1/3),this.g=wc(a,r,e),this.b=wc(a,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let i=Ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=dc(e.r),this.g=dc(e.g),this.b=dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ct.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Qt(Wt.r*255,0,255))*65536+Math.round(Qt(Wt.g*255,0,255))*256+Math.round(Qt(Wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Wt.copy(this),t);let i=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=kt){ct.fromWorkingColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,s=Wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Ea);let i=Ar(Ei.h,Ea.h,t),s=Ar(Ei.s,Ea.s,t),r=Ar(Ei.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Qe;Qe.NAMES=Ad;var ig=0,ls=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=$s,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Oc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==Oc&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},En=class extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new P,Aa=new qe,wn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yu&&(e.usage=this.usage),e}};var to=class extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var no=class extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ut=class extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var sg=0,bn=new nt,Ec=new ln,zs=new P,gn=new cs,Er=new cs,Nt=new P,zn=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?no:to)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(gn.min,Er.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,Er.max),gn.expandByPoint(Nt)):(gn.expandByPoint(Er.min),gn.expandByPoint(Er.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(zs.fromBufferAttribute(e,l),Nt.add(zs)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new P,h[w]=new P;let u=new P,d=new P,m=new P,g=new qe,x=new qe,p=new qe,f=new P,M=new P;function v(w,N,W){u.fromArray(s,w*3),d.fromArray(s,N*3),m.fromArray(s,W*3),g.fromArray(a,w*2),x.fromArray(a,N*2),p.fromArray(a,W*2),d.sub(u),m.sub(u),x.sub(g),p.sub(g);let Q=1/(x.x*p.y-p.x*x.y);isFinite(Q)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Q),M.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(Q),l[w].add(f),l[N].add(f),l[W].add(f),h[w].add(M),h[N].add(M),h[W].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let w=0,N=A.length;w<N;++w){let W=A[w],Q=W.start,L=W.count;for(let U=Q,G=Q+L;U<G;U+=3)v(i[U+0],i[U+1],i[U+2])}let R=new P,E=new P,T=new P,B=new P;function y(w){T.fromArray(r,w*3),B.copy(T);let N=l[w];R.copy(N),R.sub(T.multiplyScalar(T.dot(N))).normalize(),E.crossVectors(B,N);let Q=E.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=Q}for(let w=0,N=A.length;w<N;++w){let W=A[w],Q=W.start,L=W.count;for(let U=Q,G=Q+L;U<G;U+=3)y(i[U+0]),y(i[U+1]),y(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new wn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nu=new nt,Qi=new Ir,Ta=new tr,Uu=new P,ks=new P,Bs=new P,Hs=new P,Ac=new P,Ra=new P,Ca=new qe,Pa=new qe,La=new qe,Ou=new P,Fu=new P,zu=new P,Ia=new P,Da=new P,Ht=class extends ln{constructor(e=new zn,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ac.fromBufferAttribute(u,e),a?Ra.addScaledVector(Ac,h):Ra.addScaledVector(Ac.sub(t),h))}t.add(Ra)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Ta.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ta,Uu)===null||Qi.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,R=v;A<R;A+=3){let E=o.getX(A),T=o.getX(A+1),B=o.getX(A+2);s=Na(this,f,e,i,l,h,u,E,T,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let M=o.getX(p),v=o.getX(p+1),A=o.getX(p+2);s=Na(this,a,e,i,l,h,u,M,v,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,R=v;A<R;A+=3){let E=A,T=A+1,B=A+2;s=Na(this,f,e,i,l,h,u,E,T,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let M=p,v=p+1,A=p+2;s=Na(this,a,e,i,l,h,u,M,v,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function rg(n,e,t,i,s,r,a,o){let c;if(e.side===cn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ii,o),c===null)return null;Da.copy(o),Da.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Da);return l<t.near||l>t.far?null:{distance:l,point:Da.clone(),object:n}}function Na(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ks),n.getVertexPosition(c,Bs),n.getVertexPosition(l,Hs);let h=rg(n,e,t,i,ks,Bs,Hs,Ia);if(h){s&&(Ca.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,c),La.fromBufferAttribute(s,l),h.uv=ss.getInterpolation(Ia,ks,Bs,Hs,Ca,Pa,La,new qe)),r&&(Ca.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,c),La.fromBufferAttribute(r,l),h.uv1=ss.getInterpolation(Ia,ks,Bs,Hs,Ca,Pa,La,new qe),h.uv2=h.uv1),a&&(Ou.fromBufferAttribute(a,o),Fu.fromBufferAttribute(a,c),zu.fromBufferAttribute(a,l),h.normal=ss.getInterpolation(Ia,ks,Bs,Hs,Ou,Fu,zu,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};ss.getNormal(ks,Bs,Hs,u.normal),h.face=u}return h}var Ni=class n extends zn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function g(x,p,f,M,v,A,R,E,T,B,y){let w=A/T,N=R/B,W=A/2,Q=R/2,L=E/2,U=T+1,G=B+1,Y=0,q=0,X=new P;for(let K=0;K<G;K++){let te=K*N-Q;for(let le=0;le<U;le++){let V=le*w-W;X[x]=V*M,X[p]=te*v,X[f]=L,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[f]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(le/T),u.push(1-K/B),Y+=1}}for(let K=0;K<B;K++)for(let te=0;te<T;te++){let le=d+te+U*K,V=d+te+U*(K+1),$=d+(te+1)+U*(K+1),oe=d+(te+1)+U*K;c.push(le,V,oe),c.push(V,$,oe),q+=6}o.addGroup(m,q,y),m+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function nr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=nr(n[t]);for(let s in i)e[s]=i[s]}return e}function ag(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Td(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var og={clone:nr,merge:Kt},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},io=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},en=class extends io{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Gs=1,Xc=class extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new en(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new en(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new en(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let c=new en(Vs,Gs,e,t);c.layers=this.layers,this.add(c);let l=new en(Vs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},so=class extends On{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qc=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===os?kt:Sn),this.texture=new so(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ni(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ci});r.uniforms.tEquirect.value=t;let a=new Ht(s,r),o=t.minFilter;return t.minFilter===Cr&&(t.minFilter=Mn),new Xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Tc=new P,hg=new P,ug=new Ge,Xt=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Tc.subVectors(i,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ug.getNormalMatrix(e),s=this.coplanarPoint(Tc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new tr,Ua=new P,ro=class{constructor(e=new Xt,t=new Xt,i=new Xt,s=new Xt,r=new Xt,a=new Xt){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],x=s[10],p=s[11],f=s[12],M=s[13],v=s[14],A=s[15];if(i[0].setComponents(c-r,d-l,p-m,A-f).normalize(),i[1].setComponents(c+r,d+l,p+m,A+f).normalize(),i[2].setComponents(c+a,d+h,p+g,A+M).normalize(),i[3].setComponents(c-a,d-h,p-g,A-M).normalize(),i[4].setComponents(c-o,d-u,p-x,A-v).normalize(),t===li)i[5].setComponents(c+o,d+u,p+x,A+v).normalize();else if(t===Za)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let f=g[x];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var nn=class n extends zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],x=[],p=[];for(let f=0;f<h;f++){let M=f*d-a;for(let v=0;v<l;v++){let A=v*u-r;g.push(A,-M,0),x.push(0,0,1),p.push(v/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let v=M+l*f,A=M+l*(f+1),R=M+1+l*(f+1),E=M+1+l*f;m.push(v,A,E),m.push(A,R,E)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_g=`#ifdef USE_AOMAP
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
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`
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
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,t0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,d0=`struct PhysicalMaterial {
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
}`,f0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K0=`float getShadowMask() {
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
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,_x=`#if DEPTH_PACKING == 3200
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
}`,yx=`#define DISTANCE
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
}`,bx=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Rx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Ix=`#define NORMAL
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
}`,Dx=`#define NORMAL
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
}`,Nx=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,kx=`#define TOON
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
}`,Bx=`uniform float size;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Wx=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:_g,aomap_pars_fragment:yg,batching_pars_vertex:bg,batching_vertex:Mg,begin_vertex:Sg,beginnormal_vertex:wg,bsdfs:Eg,iridescence_fragment:Ag,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Ng,color_vertex:Ug,common:Og,cube_uv_reflection_fragment:Fg,defaultnormal_vertex:zg,displacementmap_pars_vertex:kg,displacementmap_vertex:Bg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Vg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:a0,envmap_vertex:Zg,fog_vertex:Jg,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:e0,lightmap_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:c0,lights_phong_fragment:l0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:_0,map_fragment:y0,map_pars_fragment:b0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:E0,morphcolor_vertex:A0,morphnormal_vertex:T0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:I0,normal_pars_vertex:D0,normal_vertex:N0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:k0,opaque_fragment:B0,packing:H0,premultiplied_alpha_fragment:V0,project_vertex:G0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:K0,skinbase_vertex:j0,skinning_pars_vertex:Q0,skinning_vertex:ex,skinnormal_vertex:tx,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ax,transmission_pars_fragment:ox,uv_pars_fragment:cx,uv_pars_vertex:lx,uv_vertex:hx,worldpos_vertex:ux,background_vert:dx,background_frag:fx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:xx,depth_vert:vx,depth_frag:_x,distanceRGBA_vert:yx,distanceRGBA_frag:bx,equirect_vert:Mx,equirect_frag:Sx,linedashed_vert:wx,linedashed_frag:Ex,meshbasic_vert:Ax,meshbasic_frag:Tx,meshlambert_vert:Rx,meshlambert_frag:Cx,meshmatcap_vert:Px,meshmatcap_frag:Lx,meshnormal_vert:Ix,meshnormal_frag:Dx,meshphong_vert:Nx,meshphong_frag:Ux,meshphysical_vert:Ox,meshphysical_frag:Fx,meshtoon_vert:zx,meshtoon_frag:kx,points_vert:Bx,points_frag:Hx,shadow_vert:Vx,shadow_frag:Gx,sprite_vert:Wx,sprite_frag:Xx},ie={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wn={basic:{uniforms:Kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Kt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Kt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Kt([ie.points,ie.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Kt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Kt([ie.common,ie.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Kt([ie.sprite,ie.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Kt([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Kt([ie.lights,ie.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Wn.physical={uniforms:Kt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Oa={r:0,b:0,g:0};function qx(n,e,t,i,s,r,a){let o=new Qe(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(p,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,c):v&&v.isColor&&(x(v,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===po)?(h===void 0&&(h=new Ht(new Ni(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:nr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ct.getTransfer(v.colorSpace)!==mt,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ht(new nn(2,2),new di({name:"BackgroundMaterial",uniforms:nr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,f){p.getRGB(Oa,Td(n)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,x(o,c)},render:g}}function Yx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null),l=c,h=!1;function u(L,U,G,Y,q){let X=!1;if(a){let K=x(Y,G,U);l!==K&&(l=K,m(l.object)),X=f(L,Y,G,q),X&&M(L,Y,G,q)}else{let K=U.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=K,X=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,B(L,U,G,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,U,G){let Y=G.wireframe===!0,q=o[L.id];q===void 0&&(q={},o[L.id]=q);let X=q[U.id];X===void 0&&(X={},q[U.id]=X);let K=X[Y];return K===void 0&&(K=p(d()),X[Y]=K),K}function p(L){let U=[],G=[],Y=[];for(let q=0;q<s;q++)U[q]=0,G[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,U,G,Y){let q=l.attributes,X=U.attributes,K=0,te=G.getAttributes();for(let le in te)if(te[le].location>=0){let $=q[le],oe=X[le];if(oe===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function M(L,U,G,Y){let q={},X=U.attributes,K=0,te=G.getAttributes();for(let le in te)if(te[le].location>=0){let $=X[le];$===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),q[le]=oe,K++}l.attributes=q,l.attributesNum=K,l.index=Y}function v(){let L=l.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function A(L){R(L,0)}function R(L,U){let G=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;G[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),q[L]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),q[L]=U)}function E(){let L=l.newAttributes,U=l.enabledAttributes;for(let G=0,Y=U.length;G<Y;G++)U[G]!==L[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function T(L,U,G,Y,q,X,K){K===!0?n.vertexAttribIPointer(L,U,G,q,X):n.vertexAttribPointer(L,U,G,Y,q,X)}function B(L,U,G,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=Y.attributes,X=G.getAttributes(),K=U.defaultAttributeValues;for(let te in X){let le=X[te];if(le.location>=0){let V=q[te];if(V===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let $=V.normalized,oe=V.itemSize,ye=t.get(V);if(ye===void 0)continue;let _e=ye.buffer,De=ye.type,Ue=ye.bytesPerElement,Ae=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||V.gpuType===md);if(V.isInterleavedBufferAttribute){let Je=V.data,O=Je.stride,Yt=V.offset;if(Je.isInstancedInterleavedBuffer){for(let Me=0;Me<le.locationSize;Me++)R(le.location+Me,Je.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let Me=0;Me<le.locationSize;Me++)A(le.location+Me);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Me=0;Me<le.locationSize;Me++)T(le.location+Me,oe/le.locationSize,De,$,O*Ue,(Yt+oe/le.locationSize*Me)*Ue,Ae)}else{if(V.isInstancedBufferAttribute){for(let Je=0;Je<le.locationSize;Je++)R(le.location+Je,V.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Je=0;Je<le.locationSize;Je++)A(le.location+Je);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Je=0;Je<le.locationSize;Je++)T(le.location+Je,oe/le.locationSize,De,$,oe*Ue,oe/le.locationSize*Je*Ue,Ae)}}else if(K!==void 0){let $=K[te];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(le.location,$);break;case 3:n.vertexAttrib3fv(le.location,$);break;case 4:n.vertexAttrib4fv(le.location,$);break;default:n.vertexAttrib1fv(le.location,$)}}}}E()}function y(){W();for(let L in o){let U=o[L];for(let G in U){let Y=U[G];for(let q in Y)g(Y[q].object),delete Y[q];delete U[G]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let U=o[L.id];for(let G in U){let Y=U[G];for(let q in Y)g(Y[q].object),delete Y[q];delete U[G]}delete o[L.id]}function N(L){for(let U in o){let G=o[U];if(G[L.id]===void 0)continue;let Y=G[L.id];for(let q in Y)g(Y[q].object),delete Y[q];delete G[L.id]}}function W(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:Q,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:A,disableUnusedAttributes:E}}function $x(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Zx(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||e.has("OES_texture_float"),R=v&&A,E=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:R,maxSamples:E}}function Jx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Xt,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:i,v=M*4,A=f.clippingState||null;c.value=A,A=h(g,d,v,m);for(let R=0;R!==v;++R)A[R]=t[R];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let f=m+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,A=m;v!==x;++v,A+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Kx(n){let e=new WeakMap;function t(a,o){return o===Fc?a.mapping=js:o===zc&&(a.mapping=Qs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fc||o===zc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new qc(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Yc=class extends io{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qs=4,ku=[.125,.215,.35,.446,.526,.582],is=20,Rc=new Yc,Bu=new Qe,Cc=null,Pc=0,Lc=0,ts=(1+Math.sqrt(5))/2,Ws=1/ts,Hu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ts,Ws),new P(0,ts,-Ws),new P(Ws,0,ts),new P(-Ws,0,ts),new P(ts,Ws,0),new P(-ts,Ws,0)],ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Pc,Lc),e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Pr,format:Un,colorSpace:hi,depthBuffer:!1},s=Vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(r)),this._blurMaterial=Qx(r,e,t)}return s}_compileMaterial(e){let t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,i,s){let o=new en(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bu),h.toneMapping=Pi,h.autoClear=!1;let m=new En({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Ht(new Ni,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Bu),x=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;Fa(s,M*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Fa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Rc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hu[(s-1)%Hu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ht(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*is-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):is;p>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${is}`);let f=[],M=0;for(let T=0;T<is;++T){let B=T/x,y=Math.exp(-B*B/2);f.push(y),T===0?M+=y:T<p&&(M+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let A=this._sizeLods[s],R=3*A*(s>v-qs?s-v+qs:0),E=4*(this._cubeSize-A);Fa(t,R,E,3*A,2*A),c.setRenderTarget(t),c.render(u,Rc)}};function jx(n){let e=[],t=[],i=[],s=n,r=n-qs+1+ku.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-qs?c=ku[a-n+qs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,f=1,M=new Float32Array(x*g*m),v=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let E=0;E<m;E++){let T=E%3*2/3-1,B=E>2?0:-1,y=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];M.set(y,x*g*E),v.set(d,p*g*E);let w=[E,E,E,E,E,E];A.set(w,f*g*E)}let R=new zn;R.setAttribute("position",new wn(M,x)),R.setAttribute("uv",new wn(v,p)),R.setAttribute("faceIndex",new wn(A,f)),e.push(R),s>qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vu(n,e,t){let i=new ui(n,e,t);return i.texture.mapping=po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qx(n,e,t){let i=new Float32Array(is),s=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Gu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Wu(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function ev(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Fc||c===zc,h=c===js||c===Qs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ao(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ao(n));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function nv(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let v=0,A=M.length;v<A;v+=3){let R=M[v+0],E=M[v+1],T=M[v+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,A=M.length/3-1;v<A;v+=3){let R=v+0,E=v+1,T=v+2;d.push(R,E,E,T,T,R)}}else return;let p=new(Ed(d)?no:to)(d,1);p.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function iv(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){n.drawElements(r,g,o,m*c),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,x),t.update(g,r,x)}function d(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let f=0;for(let M=0;M<x;M++)f+=g[M];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function sv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rv(n,e){return n[0]-e[0]}function av(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ov(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Bt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],B=0;M===!0&&(B=1),v===!0&&(B=2),A===!0&&(B=3);let y=h.attributes.position.count*B,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let N=new Float32Array(y*w*4*g),W=new eo(N,y,w,g);W.type=Ti,W.needsUpdate=!0;let Q=B*4;for(let U=0;U<g;U++){let G=R[U],Y=E[U],q=T[U],X=y*w*4*U;for(let K=0;K<G.count;K++){let te=K*Q;M===!0&&(a.fromBufferAttribute(G,K),N[X+te+0]=a.x,N[X+te+1]=a.y,N[X+te+2]=a.z,N[X+te+3]=0),v===!0&&(a.fromBufferAttribute(Y,K),N[X+te+4]=a.x,N[X+te+5]=a.y,N[X+te+6]=a.z,N[X+te+7]=0),A===!0&&(a.fromBufferAttribute(q,K),N[X+te+8]=a.x,N[X+te+9]=a.y,N[X+te+10]=a.z,N[X+te+11]=q.itemSize===4?a.w:1)}}x={count:g,texture:W,size:new qe(y,w)},r.set(h,x),h.addEventListener("dispose",L)}let p=0;for(let M=0;M<d.length;M++)p+=d[M];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let A=g[v];A[0]=v,A[1]=d[v]}g.sort(av);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(rv);let x=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let A=o[v],R=A[0],E=A[1];R!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+v)!==x[R]&&h.setAttribute("morphTarget"+v,x[R]),p&&h.getAttribute("morphNormal"+v)!==p[R]&&h.setAttribute("morphNormal"+v,p[R]),s[v]=E,f+=E):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function cv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var oo=class extends On{constructor(e,t,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:as,h!==as&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=Ai),i===void 0&&h===er&&(i=rs),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cd=new On,Pd=new oo(1,1);Pd.compareFunction=Sd;var Ld=new eo,Id=new Wc,Dd=new so,Xu=[],qu=[],Yu=new Float32Array(16),$u=new Float32Array(9),Zu=new Float32Array(4);function rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function fv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Zu.set(i),n.uniformMatrix2fv(this.addr,!1,Zu),Lt(t,i)}}function pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Lt(t,i)}}function mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Yu.set(i),n.uniformMatrix4fv(this.addr,!1,Yu),Lt(t,i)}}function gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function wv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Pd:Cd;t.setTexture2D(e||r,s)}function Ev(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Id,s)}function Av(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Dd,s)}function Tv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ld,s)}function Rv(n){switch(n){case 5126:return lv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return yv;case 36294:return bv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Tv}}function Cv(n,e){n.uniform1fv(this.addr,e)}function Pv(n,e){let t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Lv(n,e){let t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Iv(n,e){let t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Dv(n,e){let t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nv(n,e){let t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uv(n,e){let t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ov(n,e){n.uniform1iv(this.addr,e)}function Fv(n,e){n.uniform2iv(this.addr,e)}function zv(n,e){n.uniform3iv(this.addr,e)}function kv(n,e){n.uniform4iv(this.addr,e)}function Bv(n,e){n.uniform1uiv(this.addr,e)}function Hv(n,e){n.uniform2uiv(this.addr,e)}function Vv(n,e){n.uniform3uiv(this.addr,e)}function Gv(n,e){n.uniform4uiv(this.addr,e)}function Wv(n,e,t){let i=this.cache,s=e.length,r=go(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cd,r[a])}function Xv(n,e,t){let i=this.cache,s=e.length,r=go(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Id,r[a])}function qv(n,e,t){let i=this.cache,s=e.length,r=go(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dd,r[a])}function Yv(n,e,t){let i=this.cache,s=e.length,r=go(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ld,r[a])}function $v(n){switch(n){case 5126:return Cv;case 35664:return Pv;case 35665:return Lv;case 35666:return Iv;case 35674:return Dv;case 35675:return Nv;case 35676:return Uv;case 5124:case 35670:return Ov;case 35667:case 35671:return Fv;case 35668:case 35672:return zv;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return Hv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}var $c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rv(t.type)}},Zc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},Jc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Ju(n,e){n.seq.push(e),n.map[e.id]=e}function Zv(n,e,t){let i=n.name,s=i.length;for(Ic.lastIndex=0;;){let r=Ic.exec(i),a=Ic.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ju(t,l===void 0?new $c(o,n,e):new Zc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Jc(o),Ju(t,u)),t=u}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Zv(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ku(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Jv=37297,Kv=0;function jv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Qv(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===$a&&t===Ya?i="LinearDisplayP3ToLinearSRGB":e===Ya&&t===$a&&(i="LinearSRGBToLinearDisplayP3"),n){case hi:case mo:return[i,"LinearTransferOETF"];case kt:case vl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ju(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+jv(n.getShaderSource(e),a)}else return s}function e_(n,e){let t=Qv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function t_(n,e){let t;switch(e){case rm:t="Linear";break;case am:t="Reinhard";break;case om:t="OptimizedCineon";break;case cm:t="ACESFilmic";break;case hm:t="AgX";break;case lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function i_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ys).join(`
`)}function s_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ys(n){return n!==""}function Qu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(a_,c_)}var o_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function c_(n,e){let t=Fe[e];if(t===void 0){let i=o_.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace(l_,h_)}function h_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Qs:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function p_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case im:e="ENVMAP_BLENDING_MIX";break;case sm:e="ENVMAP_BLENDING_ADD";break}return e}function m_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function g_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=u_(t),l=d_(t),h=f_(t),u=p_(t),d=m_(t),m=t.isWebGL2?"":n_(t),g=i_(t),x=s_(r),p=s.createProgram(),f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ys).join(`
`),f.length>0&&(f+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ys).join(`
`),M.length>0&&(M+=`
`)):(f=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),M=[m,nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Pi?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Kc(a),a=Qu(a,t),a=ed(a,t),o=Kc(o),o=Qu(o,t),o=ed(o,t),a=td(a),o=td(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=v+f+a,R=v+M+o,E=Ku(s,s.VERTEX_SHADER,A),T=Ku(s,s.FRAGMENT_SHADER,R);s.attachShader(p,E),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function B(W){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(T).trim(),G=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,T);else{let q=ju(s,E,"vertex"),X=ju(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+q+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||U==="")&&(Y=!1);Y&&(W.diagnostics={runnable:G,programLog:Q,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:M}})}s.deleteShader(E),s.deleteShader(T),y=new Ks(s,p),w=r_(s,p)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,Jv)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}var x_=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qc(e),t.set(e,i)),i}},Qc=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};function v_(n,e,t,i,s,r,a){let o=new Dr,c=new jc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function p(y,w,N,W,Q){let L=W.fog,U=Q.geometry,G=y.isMeshStandardMaterial?W.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),q=Y&&Y.mapping===po?Y.image.height:null,X=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=K!==void 0?K.length:0,le=0;U.morphAttributes.position!==void 0&&(le=1),U.morphAttributes.normal!==void 0&&(le=2),U.morphAttributes.color!==void 0&&(le=3);let V,$,oe,ye;if(X){let $t=Wn[X];V=$t.vertexShader,$=$t.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,c.update(y),oe=c.getVertexShaderID(y),ye=c.getFragmentShaderID(y);let _e=n.getRenderTarget(),De=Q.isInstancedMesh===!0,Ue=Q.isBatchedMesh===!0,Ae=!!y.map,Je=!!y.matcap,O=!!Y,Yt=!!y.aoMap,Me=!!y.lightMap,Pe=!!y.bumpMap,pe=!!y.normalMap,xt=!!y.displacementMap,ze=!!y.emissiveMap,S=!!y.metalnessMap,_=!!y.roughnessMap,z=y.anisotropy>0,j=y.clearcoat>0,J=y.iridescence>0,ee=y.sheen>0,me=y.transmission>0,ae=z&&!!y.anisotropyMap,ue=j&&!!y.clearcoatMap,Ee=j&&!!y.clearcoatNormalMap,ke=j&&!!y.clearcoatRoughnessMap,Z=J&&!!y.iridescenceMap,ot=J&&!!y.iridescenceThicknessMap,We=ee&&!!y.sheenColorMap,Ce=ee&&!!y.sheenRoughnessMap,be=!!y.specularMap,de=!!y.specularColorMap,Oe=!!y.specularIntensityMap,it=me&&!!y.transmissionMap,bt=me&&!!y.thicknessMap,He=!!y.gradientMap,ne=!!y.alphaMap,C=y.alphaTest>0,se=!!y.alphaHash,re=!!y.extensions,Te=!!U.attributes.uv1,Se=!!U.attributes.uv2,dt=!!U.attributes.uv3,ft=Pi;return y.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ue,instancing:De,instancingColor:De&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:hi,map:Ae,matcap:Je,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:q,aoMap:Yt,lightMap:Me,bumpMap:Pe,normalMap:pe,displacementMap:d&&xt,emissiveMap:ze,normalMapObjectSpace:pe&&y.normalMapType===Sm,normalMapTangentSpace:pe&&y.normalMapType===Mm,metalnessMap:S,roughnessMap:_,anisotropy:z,anisotropyMap:ae,clearcoat:j,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:ot,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:be,specularColorMap:de,specularIntensityMap:Oe,transmission:me,transmissionMap:it,thicknessMap:bt,gradientMap:He,opaque:y.transparent===!1&&y.blending===$s,alphaMap:ne,alphaTest:C,alphaHash:se,combine:y.combine,mapUv:Ae&&x(y.map.channel),aoMapUv:Yt&&x(y.aoMap.channel),lightMapUv:Me&&x(y.lightMap.channel),bumpMapUv:Pe&&x(y.bumpMap.channel),normalMapUv:pe&&x(y.normalMap.channel),displacementMapUv:xt&&x(y.displacementMap.channel),emissiveMapUv:ze&&x(y.emissiveMap.channel),metalnessMapUv:S&&x(y.metalnessMap.channel),roughnessMapUv:_&&x(y.roughnessMap.channel),anisotropyMapUv:ae&&x(y.anisotropyMap.channel),clearcoatMapUv:ue&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(y.sheenRoughnessMap.channel),specularMapUv:be&&x(y.specularMap.channel),specularColorMapUv:de&&x(y.specularColorMap.channel),specularIntensityMapUv:Oe&&x(y.specularIntensityMap.channel),transmissionMapUv:it&&x(y.transmissionMap.channel),thicknessMapUv:bt&&x(y.thicknessMap.channel),alphaMapUv:ne&&x(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Se,vertexUv3s:dt,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(Ae||ne),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ci,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:re&&y.extensions.derivatives===!0,extensionFragDepth:re&&y.extensions.fragDepth===!0,extensionDrawBuffers:re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(M(w,y),v(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function A(y){let w=g[y.type],N;if(w){let W=Wn[w];N=og.clone(W.uniforms)}else N=y.uniforms;return N}function R(y,w){let N;for(let W=0,Q=l.length;W<Q;W++){let L=l[W];if(L.cacheKey===w){N=L,++N.usedTimes;break}}return N===void 0&&(N=new g_(n,w,y,r),l.push(N)),N}function E(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function T(y){c.remove(y)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:B}}function __(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function y_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function id(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,m,g,x,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function o(u,d,m,g,x,p){let f=a(u,d,m,g,x,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,g,x,p){let f=a(u,d,m,g,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||y_),i.length>1&&i.sort(d||id),s.length>1&&s.sort(d||id)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function b_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new sd,n.set(i,[a])):s>=r.length?(a=new sd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function M_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Qe};break;case"SpotLight":t={position:new P,direction:new P,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function S_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var w_=0;function E_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function A_(n,e){let t=new M_,i=S_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new nt,o=new nt;function c(h,u){let d=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,p=0,f=0,M=0,v=0,A=0,R=0,E=0,T=0,B=0,y=0;h.sort(E_);let w=u===!0?Math.PI:1;for(let W=0,Q=h.length;W<Q;W++){let L=h[W],U=L.color,G=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=U.r*G*w,m+=U.g*G*w,g+=U.b*G*w;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],G);y++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let K=L.shadow,te=i.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,s.directionalShadow[x]=te,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=L.shadow.matrix,A++}s.directional[x]=X,x++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(U).multiplyScalar(G*w),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[f]=X;let K=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,K.updateMatrices(L),L.castShadow&&B++),s.spotLightMatrix[f]=K.matrix,L.castShadow){let te=i.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,s.spotShadow[f]=te,s.spotShadowMap[f]=q,E++}f++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(U).multiplyScalar(G),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=X,M++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),X.distance=L.distance,X.decay=L.decay,L.castShadow){let K=L.shadow,te=i.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=L.shadow.matrix,R++}s.point[p]=X,p++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(G*w),X.groundColor.copy(L.groundColor).multiplyScalar(G*w),s.hemi[v]=X,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==p||N.spotLength!==f||N.rectAreaLength!==M||N.hemiLength!==v||N.numDirectionalShadows!==A||N.numPointShadows!==R||N.numSpotShadows!==E||N.numSpotMaps!==T||N.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=M,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+T-B,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=y,N.directionalLength=x,N.pointLength=p,N.spotLength=f,N.rectAreaLength=M,N.hemiLength=v,N.numDirectionalShadows=A,N.numPointShadows=R,N.numSpotShadows=E,N.numSpotMaps=T,N.numLightProbes=y,s.version=w_++)}function l(h,u){let d=0,m=0,g=0,x=0,p=0,f=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let A=h[M];if(A.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(A.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let R=s.hemi[p];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function rd(n,e){let t=new A_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function T_(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),c;return o===void 0?(c=new rd(n,e),t.set(r,[c])):a>=o.length?(c=new rd(n,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var el=class extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tl=class extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(n,e,t){let i=new ro,s=new qe,r=new qe,a=new Bt,o=new el({depthPacking:bm}),c=new tl,l={},h=t.maxTextureSize,u={[Ii]:cn,[cn]:Ii,[ci]:ci},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new zn;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let f=this.type;this.render=function(E,T,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let y=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ci),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Q=f!==oi&&this.type===oi,L=f===oi&&this.type!==oi;for(let U=0,G=E.length;U<G;U++){let Y=E[U],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let X=q.getFrameExtents();if(s.multiply(X),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||Q===!0||L===!0){let te=this.type!==oi?{minFilter:jt,magFilter:jt}:{};q.map!==null&&q.map.dispose(),q.map=new ui(s.x,s.y,te),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let K=q.getViewportCount();for(let te=0;te<K;te++){let le=q.getViewport(te);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),W.viewport(a),q.updateMatrices(Y,te),i=q.getFrustum(),A(T,B,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===oi&&M(q,B),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(y,w,N)};function M(E,T){let B=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,B,d,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,B,m,x,null)}function v(E,T,B,y){let w=null,N=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)w=N;else if(w=B.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=w.uuid,Q=T.uuid,L=l[W];L===void 0&&(L={},l[W]=L);let U=L[Q];U===void 0&&(U=w.clone(),L[Q]=U,T.addEventListener("dispose",R)),w=U}if(w.visible=T.visible,w.wireframe=T.wireframe,y===oi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=n.properties.get(w);W.light=B}return w}function A(E,T,B,y,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===oi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);let Q=e.update(E),L=E.material;if(Array.isArray(L)){let U=Q.groups;for(let G=0,Y=U.length;G<Y;G++){let q=U[G],X=L[q.materialIndex];if(X&&X.visible){let K=v(E,X,y,w);E.onBeforeShadow(n,E,T,B,Q,K,q),n.renderBufferDirect(B,null,Q,K,E,q),E.onAfterShadow(n,E,T,B,Q,K,q)}}}else if(L.visible){let U=v(E,L,y,w);E.onBeforeShadow(n,E,T,B,Q,U,null),n.renderBufferDirect(B,null,Q,U,E,null),E.onAfterShadow(n,E,T,B,Q,U,null)}}let W=E.children;for(let Q=0,L=W.length;Q<L;Q++)A(W[Q],T,B,y,w)}function R(E){E.target.removeEventListener("dispose",R);for(let B in l){let y=l[B],w=E.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function L_(n,e,t){let i=t.isWebGL2;function s(){let C=!1,se=new Bt,re=null,Te=new Bt(0,0,0,0);return{setMask:function(Se){re!==Se&&!C&&(n.colorMask(Se,Se,Se,Se),re=Se)},setLocked:function(Se){C=Se},setClear:function(Se,dt,ft,It,$t){$t===!0&&(Se*=It,dt*=It,ft*=It),se.set(Se,dt,ft,It),Te.equals(se)===!1&&(n.clearColor(Se,dt,ft,It),Te.copy(se))},reset:function(){C=!1,re=null,Te.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Te=null;return{setTest:function(Se){Se?Ue(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Se){se!==Se&&!C&&(n.depthMask(Se),se=Se)},setFunc:function(Se){if(re!==Se){switch(Se){case Jp:n.depthFunc(n.NEVER);break;case Kp:n.depthFunc(n.ALWAYS);break;case jp:n.depthFunc(n.LESS);break;case Ga:n.depthFunc(n.LEQUAL);break;case Qp:n.depthFunc(n.EQUAL);break;case em:n.depthFunc(n.GEQUAL);break;case tm:n.depthFunc(n.GREATER);break;case nm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Se}},setLocked:function(Se){C=Se},setClear:function(Se){Te!==Se&&(n.clearDepth(Se),Te=Se)},reset:function(){C=!1,se=null,re=null,Te=null}}}function a(){let C=!1,se=null,re=null,Te=null,Se=null,dt=null,ft=null,It=null,$t=null;return{setTest:function(pt){C||(pt?Ue(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(pt){se!==pt&&!C&&(n.stencilMask(pt),se=pt)},setFunc:function(pt,Zt,Gn){(re!==pt||Te!==Zt||Se!==Gn)&&(n.stencilFunc(pt,Zt,Gn),re=pt,Te=Zt,Se=Gn)},setOp:function(pt,Zt,Gn){(dt!==pt||ft!==Zt||It!==Gn)&&(n.stencilOp(pt,Zt,Gn),dt=pt,ft=Zt,It=Gn)},setLocked:function(pt){C=pt},setClear:function(pt){$t!==pt&&(n.clearStencil(pt),$t=pt)},reset:function(){C=!1,se=null,re=null,Te=null,Se=null,dt=null,ft=null,It=null,$t=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,x=[],p=null,f=!1,M=null,v=null,A=null,R=null,E=null,T=null,B=null,y=new Qe(0,0,0),w=0,N=!1,W=null,Q=null,L=null,U=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=X>=2);let te=null,le={},V=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),oe=new Bt().fromArray(V),ye=new Bt().fromArray($);function _e(C,se,re,Te){let Se=new Uint8Array(4),dt=n.createTexture();n.bindTexture(C,dt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<re;ft++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(se+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return dt}let De={};De[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(n.DEPTH_TEST),c.setFunc(Ga),ze(!1),S(zh),Ue(n.CULL_FACE),pe(Ci);function Ue(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function Ae(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Je(C,se){return m[C]!==se?(n.bindFramebuffer(C,se),m[C]=se,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function O(C,se){let re=x,Te=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){let Se=C.texture;if(re.length!==Se.length||re[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,ft=Se.length;dt<ft;dt++)re[dt]=n.COLOR_ATTACHMENT0+dt;re.length=Se.length,Te=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Te=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Yt(C){return p!==C?(n.useProgram(C),p=C,!0):!1}let Me={[ns]:n.FUNC_ADD,[Up]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[Vh]=n.MIN,Me[Gh]=n.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(Me[Vh]=C.MIN_EXT,Me[Gh]=C.MAX_EXT)}let Pe={[Fp]:n.ZERO,[zp]:n.ONE,[kp]:n.SRC_COLOR,[Uc]:n.SRC_ALPHA,[Xp]:n.SRC_ALPHA_SATURATE,[Gp]:n.DST_COLOR,[Hp]:n.DST_ALPHA,[Bp]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[Wp]:n.ONE_MINUS_DST_COLOR,[Vp]:n.ONE_MINUS_DST_ALPHA,[qp]:n.CONSTANT_COLOR,[Yp]:n.ONE_MINUS_CONSTANT_COLOR,[$p]:n.CONSTANT_ALPHA,[Zp]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(C,se,re,Te,Se,dt,ft,It,$t,pt){if(C===Ci){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(Ue(n.BLEND),f=!0),C!==Np){if(C!==M||pt!==N){if((v!==ns||E!==ns)&&(n.blendEquation(n.FUNC_ADD),v=ns,E=ns),pt)switch(C){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kh:n.blendFunc(n.ONE,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,R=null,T=null,B=null,y.set(0,0,0),w=0,M=C,N=pt}return}Se=Se||se,dt=dt||re,ft=ft||Te,(se!==v||Se!==E)&&(n.blendEquationSeparate(Me[se],Me[Se]),v=se,E=Se),(re!==A||Te!==R||dt!==T||ft!==B)&&(n.blendFuncSeparate(Pe[re],Pe[Te],Pe[dt],Pe[ft]),A=re,R=Te,T=dt,B=ft),(It.equals(y)===!1||$t!==w)&&(n.blendColor(It.r,It.g,It.b,$t),y.copy(It),w=$t),M=C,N=!1}function xt(C,se){C.side===ci?Ae(n.CULL_FACE):Ue(n.CULL_FACE);let re=C.side===cn;se&&(re=!re),ze(re),C.blending===$s&&C.transparent===!1?pe(Ci):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);let Te=C.stencilWrite;l.setTest(Te),Te&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(C){W!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),W=C)}function S(C){C!==Lp?(Ue(n.CULL_FACE),C!==Q&&(C===zh?n.cullFace(n.BACK):C===Ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),Q=C}function _(C){C!==L&&(q&&n.lineWidth(C),L=C)}function z(C,se,re){C?(Ue(n.POLYGON_OFFSET_FILL),(U!==se||G!==re)&&(n.polygonOffset(se,re),U=se,G=re)):Ae(n.POLYGON_OFFSET_FILL)}function j(C){C?Ue(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function J(C){C===void 0&&(C=n.TEXTURE0+Y-1),te!==C&&(n.activeTexture(C),te=C)}function ee(C,se,re){re===void 0&&(te===null?re=n.TEXTURE0+Y-1:re=te);let Te=le[re];Te===void 0&&(Te={type:void 0,texture:void 0},le[re]=Te),(Te.type!==C||Te.texture!==se)&&(te!==re&&(n.activeTexture(re),te=re),n.bindTexture(C,se||De[C]),Te.type=C,Te.texture=se)}function me(){let C=le[te];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(C){oe.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function it(C){ye.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ye.copy(C))}function bt(C,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Te=re.get(C);Te===void 0&&(Te=n.getUniformBlockIndex(se,C.name),re.set(C,Te))}function He(C,se){let Te=u.get(se).get(C);h.get(se)!==Te&&(n.uniformBlockBinding(se,Te,C.__bindingPointIndex),h.set(se,Te))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,le={},m={},g=new WeakMap,x=[],p=null,f=!1,M=null,v=null,A=null,R=null,E=null,T=null,B=null,y=new Qe(0,0,0),w=0,N=!1,W=null,Q=null,L=null,U=null,G=null,oe.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ue,disable:Ae,bindFramebuffer:Je,drawBuffers:O,useProgram:Yt,setBlending:pe,setMaterial:xt,setFlipSided:ze,setCullFace:S,setLineWidth:_,setPolygonOffset:z,setScissorTest:j,activeTexture:J,bindTexture:ee,unbindTexture:me,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:be,texImage3D:de,updateUBOMapping:bt,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:ke,compressedTexSubImage2D:Z,compressedTexSubImage3D:ot,scissor:Oe,viewport:it,reset:ne}}function I_(n,e,t,i,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):Ka("canvas")}function x(S,_,z,j){let J=1;if((S.width>j||S.height>j)&&(J=j/Math.max(S.width,S.height)),J<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ee=_?Ja:Math.floor,me=ee(J*S.width),ae=ee(J*S.height);u===void 0&&(u=g(me,ae));let ue=z?g(me,ae):u;return ue.width=me,ue.height=ae,ue.getContext("2d").drawImage(S,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+me+"x"+ae+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Vc(S.width)&&Vc(S.height)}function f(S){return o?!1:S.wrapS!==Nn||S.wrapT!==Nn||S.minFilter!==jt&&S.minFilter!==Mn}function M(S,_){return S.generateMipmaps&&_&&S.minFilter!==jt&&S.minFilter!==Mn}function v(S){n.generateMipmap(S)}function A(S,_,z,j,J=!1){if(o===!1)return _;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=_;if(_===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),_===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),_===n.RGBA){let me=J?qa:ct.getTransfer(j);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=me===mt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(S,_,z){return M(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==jt&&S.minFilter!==Mn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function E(S){return S===jt||S===Wh||S===sc?n.NEAREST:n.LINEAR}function T(S){let _=S.target;_.removeEventListener("dispose",T),y(_),_.isVideoTexture&&h.delete(_)}function B(S){let _=S.target;_.removeEventListener("dispose",B),N(_)}function y(S){let _=i.get(S);if(_.__webglInit===void 0)return;let z=S.source,j=d.get(z);if(j){let J=j[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(S),Object.keys(j).length===0&&d.delete(z)}i.remove(S)}function w(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let z=S.source,j=d.get(z);delete j[_.__cacheKey],a.memory.textures--}function N(S){let _=S.texture,z=i.get(S),j=i.get(_);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(z.__webglFramebuffer[J]))for(let ee=0;ee<z.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(z.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(z.__webglFramebuffer[J]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[J])}else{if(Array.isArray(z.__webglFramebuffer))for(let J=0;J<z.__webglFramebuffer.length;J++)n.deleteFramebuffer(z.__webglFramebuffer[J]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let J=0;J<z.__webglColorRenderbuffer.length;J++)z.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[J]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,ee=_.length;J<ee;J++){let me=i.get(_[J]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(_[J])}i.remove(_),i.remove(S)}let W=0;function Q(){W=0}function L(){let S=W;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),W+=1,S}function U(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function G(S,_){let z=i.get(S);if(S.isVideoTexture&&xt(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(z,S,_);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function Y(S,_){let z=i.get(S);if(S.version>0&&z.__version!==S.version){oe(z,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function q(S,_){let z=i.get(S);if(S.version>0&&z.__version!==S.version){oe(z,S,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function X(S,_){let z=i.get(S);if(S.version>0&&z.__version!==S.version){ye(z,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let K={[kc]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[Bc]:n.MIRRORED_REPEAT},te={[jt]:n.NEAREST,[Wh]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[um]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},le={[wm]:n.NEVER,[Pm]:n.ALWAYS,[Em]:n.LESS,[Sd]:n.LEQUAL,[Am]:n.EQUAL,[Cm]:n.GEQUAL,[Tm]:n.GREATER,[Rm]:n.NOTEQUAL};function V(S,_,z){if(z?(n.texParameteri(S,n.TEXTURE_WRAP_S,K[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,K[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,K[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,te[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,te[_.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Nn||_.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,E(_.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,E(_.minFilter)),_.minFilter!==jt&&_.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===jt||_.minFilter!==sc&&_.minFilter!==Cr||_.type===Ti&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function $(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",T));let j=_.source,J=d.get(j);J===void 0&&(J={},d.set(j,J));let ee=U(_);if(ee!==S.__cacheKey){J[ee]===void 0&&(J[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ee].usedTimes++;let me=J[S.__cacheKey];me!==void 0&&(J[S.__cacheKey].usedTimes--,me.usedTimes===0&&w(_)),S.__cacheKey=ee,S.__webglTexture=J[ee].texture}return z}function oe(S,_,z){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);let J=$(S,_),ee=_.source;t.bindTexture(j,S.__webglTexture,n.TEXTURE0+z);let me=i.get(ee);if(ee.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+z);let ae=ct.getPrimaries(ct.workingColorSpace),ue=_.colorSpace===Sn?null:ct.getPrimaries(_.colorSpace),Ee=_.colorSpace===Sn||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ke=f(_)&&p(_.image)===!1,Z=x(_.image,ke,!1,s.maxTextureSize);Z=ze(_,Z);let ot=p(Z)||o,We=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),be=A(_.internalFormat,We,Ce,_.colorSpace,_.isVideoTexture);V(j,_,ot);let de,Oe=_.mipmaps,it=o&&_.isVideoTexture!==!0&&be!==bd,bt=me.__version===void 0||J===!0,He=R(_,Z,ot);if(_.isDepthTexture)be=n.DEPTH_COMPONENT,o?_.type===Ti?be=n.DEPTH_COMPONENT32F:_.type===Ai?be=n.DEPTH_COMPONENT24:_.type===rs?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:_.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===as&&be===n.DEPTH_COMPONENT&&_.type!==xl&&_.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Ai,Ce=r.convert(_.type)),_.format===er&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,_.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=rs,Ce=r.convert(_.type))),bt&&(it?t.texStorage2D(n.TEXTURE_2D,1,be,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,We,Ce,null));else if(_.isDataTexture)if(Oe.length>0&&ot){it&&bt&&t.texStorage2D(n.TEXTURE_2D,He,be,Oe[0].width,Oe[0].height);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],it?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,We,Ce,de.data):t.texImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,We,Ce,de.data);_.generateMipmaps=!1}else it?(bt&&t.texStorage2D(n.TEXTURE_2D,He,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,We,Ce,Z.data)):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,We,Ce,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){it&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,be,Oe[0].width,Oe[0].height,Z.depth);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],_.format!==Un?We!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,We,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,We,Ce,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,de.width,de.height,Z.depth,0,We,Ce,de.data)}else{it&&bt&&t.texStorage2D(n.TEXTURE_2D,He,be,Oe[0].width,Oe[0].height);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],_.format!==Un?We!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,We,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,We,Ce,de.data):t.texImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,We,Ce,de.data)}else if(_.isDataArrayTexture)it?(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,We,Ce,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,We,Ce,Z.data);else if(_.isData3DTexture)it?(bt&&t.texStorage3D(n.TEXTURE_3D,He,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,We,Ce,Z.data)):t.texImage3D(n.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,We,Ce,Z.data);else if(_.isFramebufferTexture){if(bt)if(it)t.texStorage2D(n.TEXTURE_2D,He,be,Z.width,Z.height);else{let ne=Z.width,C=Z.height;for(let se=0;se<He;se++)t.texImage2D(n.TEXTURE_2D,se,be,ne,C,0,We,Ce,null),ne>>=1,C>>=1}}else if(Oe.length>0&&ot){it&&bt&&t.texStorage2D(n.TEXTURE_2D,He,be,Oe[0].width,Oe[0].height);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],it?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,We,Ce,de):t.texImage2D(n.TEXTURE_2D,ne,be,We,Ce,de);_.generateMipmaps=!1}else it?(bt&&t.texStorage2D(n.TEXTURE_2D,He,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,Ce,Z)):t.texImage2D(n.TEXTURE_2D,0,be,We,Ce,Z);M(_,ot)&&v(j),me.__version=ee.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ye(S,_,z){if(_.image.length!==6)return;let j=$(S,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+z);let ee=i.get(J);if(J.version!==ee.__version||j===!0){t.activeTexture(n.TEXTURE0+z);let me=ct.getPrimaries(ct.workingColorSpace),ae=_.colorSpace===Sn?null:ct.getPrimaries(_.colorSpace),ue=_.colorSpace===Sn||me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!Ee&&!ke?Z[ne]=x(_.image[ne],!1,!0,s.maxCubemapSize):Z[ne]=ke?_.image[ne].image:_.image[ne],Z[ne]=ze(_,Z[ne]);let ot=Z[0],We=p(ot)||o,Ce=r.convert(_.format,_.colorSpace),be=r.convert(_.type),de=A(_.internalFormat,Ce,be,_.colorSpace),Oe=o&&_.isVideoTexture!==!0,it=ee.__version===void 0||j===!0,bt=R(_,ot,We);V(n.TEXTURE_CUBE_MAP,_,We);let He;if(Ee){Oe&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,de,ot.width,ot.height);for(let ne=0;ne<6;ne++){He=Z[ne].mipmaps;for(let C=0;C<He.length;C++){let se=He[C];_.format!==Un?Ce!==null?Oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ce,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Ce,be,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,Ce,be,se.data)}}}else{He=_.mipmaps,Oe&&it&&(He.length>0&&bt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,de,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(ke){Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,Ce,be,Z[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Z[ne].width,Z[ne].height,0,Ce,be,Z[ne].data);for(let C=0;C<He.length;C++){let re=He[C].image[ne].image;Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Ce,be,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,re.width,re.height,0,Ce,be,re.data)}}else{Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,be,Z[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Ce,be,Z[ne]);for(let C=0;C<He.length;C++){let se=He[C];Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Ce,be,se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,Ce,be,se.image[ne])}}}M(_,We)&&v(n.TEXTURE_CUBE_MAP),ee.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _e(S,_,z,j,J,ee){let me=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),ue=A(z.internalFormat,me,ae,z.colorSpace);if(!i.get(_).__hasExternalTextures){let ke=Math.max(1,_.width>>ee),Z=Math.max(1,_.height>>ee);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,ue,ke,Z,_.depth,0,me,ae,null):t.texImage2D(J,ee,ue,ke,Z,0,me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),pe(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,i.get(z).__webglTexture,0,Pe(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,i.get(z).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let j=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||pe(_)){let J=_.depthTexture;J&&J.isDepthTexture&&(J.type===Ti?j=n.DEPTH_COMPONENT32F:J.type===Ai&&(j=n.DEPTH_COMPONENT24));let ee=Pe(_);pe(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,j,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,j,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let j=Pe(_);z&&pe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,_.width,_.height):pe(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let j=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let J=0;J<j.length;J++){let ee=j[J],me=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),ue=A(ee.internalFormat,me,ae,ee.colorSpace),Ee=Pe(_);z&&pe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,_.width,_.height):pe(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);let j=i.get(_.depthTexture).__webglTexture,J=Pe(_);if(_.depthTexture.format===as)pe(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===er)pe(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ae(S){let _=i.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ue(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]=n.createRenderbuffer(),De(_.__webglDepthbuffer[j],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),De(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(S,_,z){let j=i.get(S);_!==void 0&&_e(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ae(S)}function O(S){let _=S.texture,z=i.get(S),j=i.get(_);S.addEventListener("dispose",B),S.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++);let J=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,me=p(S)||o;if(J){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let ue=0;ue<_.mipmaps.length;ue++)z.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){let ae=S.texture;for(let ue=0,Ee=ae.length;ue<Ee;ue++){let ke=i.get(ae[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&pe(S)===!1){let ae=ee?_:[_];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Ee=ae[ue];z.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);let ke=r.convert(Ee.format,Ee.colorSpace),Z=r.convert(Ee.type),ot=A(Ee.internalFormat,ke,Z,Ee.colorSpace,S.isXRRenderTarget===!0),We=Pe(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ot,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),De(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),V(n.TEXTURE_CUBE_MAP,_,me);for(let ae=0;ae<6;ae++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)_e(z.__webglFramebuffer[ae][ue],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else _e(z.__webglFramebuffer[ae],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(_,me)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=S.texture;for(let ue=0,Ee=ae.length;ue<Ee;ue++){let ke=ae[ue],Z=i.get(ke);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),V(n.TEXTURE_2D,ke,me),_e(z.__webglFramebuffer,S,ke,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),M(ke,me)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,j.__webglTexture),V(ae,_,me),o&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)_e(z.__webglFramebuffer[ue],S,_,n.COLOR_ATTACHMENT0,ae,ue);else _e(z.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ae,0);M(_,me)&&v(ae),t.unbindTexture()}S.depthBuffer&&Ae(S)}function Yt(S){let _=p(S)||o,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0,J=z.length;j<J;j++){let ee=z[j];if(M(ee,_)){let me=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ee).__webglTexture;t.bindTexture(me,ae),v(me),t.unbindTexture()}}}function Me(S){if(o&&S.samples>0&&pe(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,j=S.height,J=n.COLOR_BUFFER_BIT,ee=[],me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(S),ue=S.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){ee.push(n.COLOR_ATTACHMENT0+Ee),S.depthBuffer&&ee.push(me);let ke=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ke===!1&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]),ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),ue){let Z=i.get(_[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]);let ke=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(S){return Math.min(s.maxSamples,S.samples)}function pe(S){let _=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ze(S,_){let z=S.colorSpace,j=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Hc||z!==hi&&z!==Sn&&(ct.getTransfer(z)===mt?o===!1?e.has("EXT_sRGB")===!0&&j===Un?(S.format=Hc,S.minFilter=Mn,S.generateMipmaps=!1):_=ja.sRGBToLinear(_):(j!==Un||J!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Je,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function D_(n,e,t){let i=t.isWebGL2;function s(r,a=Sn){let o,c=ct.getTransfer(a);if(r===Li)return n.UNSIGNED_BYTE;if(r===gd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===dm)return n.BYTE;if(r===fm)return n.SHORT;if(r===xl)return n.UNSIGNED_SHORT;if(r===md)return n.INT;if(r===Ai)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===Pr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===pm)return n.ALPHA;if(r===Un)return n.RGBA;if(r===mm)return n.LUMINANCE;if(r===gm)return n.LUMINANCE_ALPHA;if(r===as)return n.DEPTH_COMPONENT;if(r===er)return n.DEPTH_STENCIL;if(r===Hc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===xm)return n.RED;if(r===vd)return n.RED_INTEGER;if(r===vm)return n.RG;if(r===_d)return n.RG_INTEGER;if(r===yd)return n.RGBA_INTEGER;if(r===rc||r===ac||r===oc||r===cc)if(c===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ac)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xh||r===qh||r===Yh||r===$h)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zh||r===Jh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zh)return c===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Jh)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kh||r===jh||r===Qh||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou||r===cu||r===lu||r===hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Kh)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jh)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===iu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===su)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ru)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ou)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lc||r===uu||r===du)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===lc)return c===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===du)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_m||r===fu||r===pu||r===mu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===lc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var nl=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ri=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},N_={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},il=class extends Di{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,x=t.getContextAttributes(),p=null,f=null,M=[],v=[],A=new qe,R=null,E=new en;E.layers.enable(1),E.viewport=new Bt;let T=new en;T.layers.enable(2),T.viewport=new Bt;let B=[E,T],y=new nl;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=M[V];return $===void 0&&($=new Rr,M[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=M[V];return $===void 0&&($=new Rr,M[V]=$),$.getGripSpace()},this.getHand=function(V){let $=M[V];return $===void 0&&($=new Rr,M[V]=$),$.getHandSpace()};function W(V){let $=v.indexOf(V.inputSource);if($===-1)return;let oe=M[$];oe!==void 0&&(oe.update(V.inputSource,V.frame,l||a),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",L);for(let V=0;V<M.length;V++){let $=v[V];$!==null&&(v[V]=null,M[V].disconnect($))}w=null,N=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new ui(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,oe=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=x.stencil?er:as,oe=x.stencil?rs:Ai);let _e={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new ui(d.textureWidth,d.textureHeight,{format:Un,type:Li,depthTexture:new oo(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let De=e.properties.get(f);De.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let $=0;$<V.removed.length;$++){let oe=V.removed[$],ye=v.indexOf(oe);ye>=0&&(v[ye]=null,M[ye].disconnect(oe))}for(let $=0;$<V.added.length;$++){let oe=V.added[$],ye=v.indexOf(oe);if(ye===-1){for(let De=0;De<M.length;De++)if(De>=v.length){v.push(oe),ye=De;break}else if(v[De]===null){v[De]=oe,ye=De;break}if(ye===-1)break}let _e=M[ye];_e&&_e.connect(oe)}}let U=new P,G=new P;function Y(V,$,oe){U.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);let ye=U.distanceTo(G),_e=$.projectionMatrix.elements,De=oe.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Ae=_e[14]/(_e[10]+1),Je=(_e[9]+1)/_e[5],O=(_e[9]-1)/_e[5],Yt=(_e[8]-1)/_e[0],Me=(De[8]+1)/De[0],Pe=Ue*Yt,pe=Ue*Me,xt=ye/(-Yt+Me),ze=xt*-Yt;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(xt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let S=Ue+xt,_=Ae+xt,z=Pe-ze,j=pe+(ye-ze),J=Je*Ae/_*S,ee=O*Ae/_*S;V.projectionMatrix.makePerspective(z,j,J,ee,S,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=T.near=E.near=V.near,y.far=T.far=E.far=V.far,(w!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);let $=V.parent,oe=y.cameras;q(y,$);for(let ye=0;ye<oe.length;ye++)q(oe[ye],$);oe.length===2?Y(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),X(V,y,$)};function X(V,$,oe){oe===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Lr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let K=null;function te(V,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ye=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let _e=0;_e<oe.length;_e++){let De=oe[_e],Ue=null;if(m!==null)Ue=m.getViewport(De);else{let Je=u.getViewSubImage(d,De);Ue=Je.viewport,_e===0&&(e.setRenderTargetTextures(f,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(f))}let Ae=B[_e];Ae===void 0&&(Ae=new en,Ae.layers.enable(_e),Ae.viewport=new Bt,B[_e]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(y.matrix.copy(Ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(Ae)}}for(let oe=0;oe<M.length;oe++){let ye=v[oe],_e=M[oe];ye!==null&&_e!==void 0&&_e.update(ye,$,l||a)}K&&K(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let le=new Rd;le.setAnimationLoop(te),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}};function U_(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Td(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,v,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===cn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===cn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function O_(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){let A=v.program;i.uniformBlockBinding(M,A)}function l(M,v){let A=s[M.id];A===void 0&&(g(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",p));let R=v.program;i.updateUBOMapping(M,R);let E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let v=u();M.__bindingPointIndex=v;let A=n.createBuffer(),R=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,A),A}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],A=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=A.length;E<T;E++){let B=Array.isArray(A[E])?A[E]:[A[E]];for(let y=0,w=B.length;y<w;y++){let N=B[y];if(m(N,E,y,R)===!0){let W=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value],L=0;for(let U=0;U<Q.length;U++){let G=Q[U],Y=x(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,W+L,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,v,A,R){let E=M.value,T=v+"_"+A;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{let B=R[T];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return R[T]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function g(M){let v=M.uniforms,A=0,R=16;for(let T=0,B=v.length;T<B;T++){let y=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,N=y.length;w<N;w++){let W=y[w],Q=Array.isArray(W.value)?W.value:[W.value];for(let L=0,U=Q.length;L<U;L++){let G=Q[L],Y=x(G),q=A%R;q!==0&&R-q<Y.boundary&&(A+=R-q),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=Y.storage}}}let E=A%R;return E>0&&(A+=R-E),M.__size=A,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){let v=M.target;v.removeEventListener("dispose",p);let A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Nr=class{constructor(e={}){let{canvas:t=Xm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;let v=this,A=!1,R=0,E=0,T=null,B=-1,y=null,w=new Bt,N=new Bt,W=null,Q=new Qe(0),L=0,U=t.width,G=t.height,Y=1,q=null,X=null,K=new Bt(0,0,U,G),te=new Bt(0,0,U,G),le=!1,V=new ro,$=!1,oe=!1,ye=null,_e=new nt,De=new qe,Ue=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return T===null?Y:1}let O=i;function Yt(b,D){for(let k=0;k<b.length;k++){let H=b[k],F=t.getContext(H,D);if(F!==null)return F}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),O===null){let D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),O=Yt(D,b),O===null)throw Yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,Pe,pe,xt,ze,S,_,z,j,J,ee,me,ae,ue,Ee,ke,Z,ot,We,Ce,be,de,Oe,it;function bt(){Me=new tv(O),Pe=new Zx(O,Me,e),Me.init(Pe),de=new D_(O,Me,Pe),pe=new L_(O,Me,Pe),xt=new sv(O),ze=new __,S=new I_(O,Me,pe,ze,Pe,de,xt),_=new Kx(v),z=new ev(v),j=new dg(O,Pe),Oe=new Yx(O,Me,j,Pe),J=new nv(O,j,xt,Oe),ee=new cv(O,J,j,xt),We=new ov(O,Pe,S),ke=new Jx(ze),me=new v_(v,_,z,Me,Pe,Oe,ke),ae=new U_(v,ze),ue=new b_,Ee=new T_(Me,Pe),ot=new qx(v,_,z,pe,ee,d,c),Z=new P_(v,ee,Pe),it=new O_(O,xt,Pe,pe),Ce=new $x(O,Me,xt,Pe),be=new iv(O,Me,xt,Pe),xt.programs=me.programs,v.capabilities=Pe,v.extensions=Me,v.properties=ze,v.renderLists=ue,v.shadowMap=Z,v.state=pe,v.info=xt}bt();let He=new il(v,O);this.xr=He,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(U,G,!1))},this.getSize=function(b){return b.set(U,G)},this.setSize=function(b,D,k=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,G=D,t.width=Math.floor(b*Y),t.height=Math.floor(D*Y),k===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(U*Y,G*Y).floor()},this.setDrawingBufferSize=function(b,D,k){U=b,G=D,Y=k,t.width=Math.floor(b*k),t.height=Math.floor(D*k),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,D,k,H){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,D,k,H),pe.viewport(w.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,D,k,H){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,D,k,H),pe.scissor(N.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){pe.setScissorTest(le=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(b=!0,D=!0,k=!0){let H=0;if(b){let F=!1;if(T!==null){let ce=T.texture.format;F=ce===yd||ce===_d||ce===vd}if(F){let ce=T.texture.type,ge=ce===Li||ce===Ai||ce===xl||ce===rs||ce===gd||ce===xd,we=ot.getClearColor(),Re=ot.getClearAlpha(),Be=we.r,Le=we.g,Ne=we.b;ge?(m[0]=Be,m[1]=Le,m[2]=Ne,m[3]=Re,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Be,g[1]=Le,g[2]=Ne,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}D&&(H|=O.DEPTH_BUFFER_BIT),k&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),Ee.dispose(),ze.dispose(),_.dispose(),z.dispose(),ee.dispose(),Oe.dispose(),it.dispose(),me.dispose(),He.dispose(),He.removeEventListener("sessionstart",$t),He.removeEventListener("sessionend",pt),ye&&(ye.dispose(),ye=null),Zt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=xt.autoReset,D=Z.enabled,k=Z.autoUpdate,H=Z.needsUpdate,F=Z.type;bt(),xt.autoReset=b,Z.enabled=D,Z.autoUpdate=k,Z.needsUpdate=H,Z.type=F}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){let D=b.target;D.removeEventListener("dispose",re),Te(D)}function Te(b){Se(b),ze.remove(b)}function Se(b){let D=ze.get(b).programs;D!==void 0&&(D.forEach(function(k){me.releaseProgram(k)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,k,H,F,ce){D===null&&(D=Ae);let ge=F.isMesh&&F.matrixWorld.determinant()<0,we=Tp(b,D,k,H,F);pe.setMaterial(H,ge);let Re=k.index,Be=1;if(H.wireframe===!0){if(Re=J.getWireframeAttribute(k),Re===void 0)return;Be=2}let Le=k.drawRange,Ne=k.attributes.position,Et=Le.start*Be,pn=(Le.start+Le.count)*Be;ce!==null&&(Et=Math.max(Et,ce.start*Be),pn=Math.min(pn,(ce.start+ce.count)*Be)),Re!==null?(Et=Math.max(Et,0),pn=Math.min(pn,Re.count)):Ne!=null&&(Et=Math.max(Et,0),pn=Math.min(pn,Ne.count));let Dt=pn-Et;if(Dt<0||Dt===1/0)return;Oe.setup(F,H,we,k,Re);let ti,vt=Ce;if(Re!==null&&(ti=j.get(Re),vt=be,vt.setIndex(ti)),F.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*Je()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(F.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),pe.setLineWidth(Ve*Je()),F.isLineSegments?vt.setMode(O.LINES):F.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else F.isPoints?vt.setMode(O.POINTS):F.isSprite&&vt.setMode(O.TRIANGLES);if(F.isBatchedMesh)vt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)vt.renderInstances(Et,Dt,F.count);else if(k.isInstancedBufferGeometry){let Ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ec=Math.min(k.instanceCount,Ve);vt.renderInstances(Et,Dt,ec)}else vt.render(Et,Dt)};function dt(b,D,k){b.transparent===!0&&b.side===ci&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,ma(b,D,k),b.side=Ii,b.needsUpdate=!0,ma(b,D,k),b.side=ci):ma(b,D,k)}this.compile=function(b,D,k=null){k===null&&(k=b),p=Ee.get(k),p.init(),M.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v._useLegacyLights);let H=new Set;return b.traverse(function(F){let ce=F.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let we=ce[ge];dt(we,k,F),H.add(we)}else dt(ce,k,F),H.add(ce)}),M.pop(),p=null,H},this.compileAsync=function(b,D,k=null){let H=this.compile(b,D,k);return new Promise(F=>{function ce(){if(H.forEach(function(ge){ze.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){F(b);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ft=null;function It(b){ft&&ft(b)}function $t(){Zt.stop()}function pt(){Zt.start()}let Zt=new Rd;Zt.setAnimationLoop(It),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(b){ft=b,He.setAnimationLoop(b),b===null?Zt.stop():Zt.start()},He.addEventListener("sessionstart",$t),He.addEventListener("sessionend",pt),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(D),D=He.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,T),p=Ee.get(b,M.length),p.init(),M.push(p),_e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,$=ke.init(this.clippingPlanes,oe),x=ue.get(b,f.length),x.init(),f.push(x),Gn(b,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(q,X),this.info.render.frame++,$===!0&&ke.beginShadows();let k=p.state.shadowsArray;if(Z.render(k,b,D),$===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(x,b),p.setupLights(v._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let F=0,ce=H.length;F<ce;F++){let ge=H[F];Ih(x,b,ge,ge.viewport)}}else Ih(x,b,D);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,D),Oe.resetDefaultState(),B=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Gn(b,D,k,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){H&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);let ge=ee.update(b),we=b.material;we.visible&&x.push(b,ge,we,k,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){let ge=ee.update(b),we=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){let Re=ge.groups;for(let Be=0,Le=Re.length;Be<Le;Be++){let Ne=Re[Be],Et=we[Ne.materialIndex];Et&&Et.visible&&x.push(b,ge,Et,k,Ue.z,Ne)}}else we.visible&&x.push(b,ge,we,k,Ue.z,null)}}let ce=b.children;for(let ge=0,we=ce.length;ge<we;ge++)Gn(ce[ge],D,k,H)}function Ih(b,D,k,H){let F=b.opaque,ce=b.transmissive,ge=b.transparent;p.setupLightsView(k),$===!0&&ke.setGlobalState(v.clippingPlanes,k),ce.length>0&&Ap(F,ce,D,k),H&&pe.viewport(w.copy(H)),F.length>0&&pa(F,D,k),ce.length>0&&pa(ce,D,k),ge.length>0&&pa(ge,D,k),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ap(b,D,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let ce=Pe.isWebGL2;ye===null&&(ye=new ui(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Pr:Li,minFilter:Cr,samples:ce?4:0})),v.getDrawingBufferSize(De),ce?ye.setSize(De.x,De.y):ye.setSize(Ja(De.x),Ja(De.y));let ge=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(Q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let we=v.toneMapping;v.toneMapping=Pi,pa(b,k,H),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye);let Re=!1;for(let Be=0,Le=D.length;Be<Le;Be++){let Ne=D[Be],Et=Ne.object,pn=Ne.geometry,Dt=Ne.material,ti=Ne.group;if(Dt.side===ci&&Et.layers.test(H.layers)){let vt=Dt.side;Dt.side=cn,Dt.needsUpdate=!0,Dh(Et,k,H,pn,Dt,ti),Dt.side=vt,Dt.needsUpdate=!0,Re=!0}}Re===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye)),v.setRenderTarget(ge),v.setClearColor(Q,L),v.toneMapping=we}function pa(b,D,k){let H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ce=b.length;F<ce;F++){let ge=b[F],we=ge.object,Re=ge.geometry,Be=H===null?ge.material:H,Le=ge.group;we.layers.test(k.layers)&&Dh(we,D,k,Re,Be,Le)}}function Dh(b,D,k,H,F,ce){b.onBeforeRender(v,D,k,H,F,ce),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,D,k,H,b,ce),F.transparent===!0&&F.side===ci&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,v.renderBufferDirect(k,D,H,F,b,ce),F.side=Ii,F.needsUpdate=!0,v.renderBufferDirect(k,D,H,F,b,ce),F.side=ci):v.renderBufferDirect(k,D,H,F,b,ce),b.onAfterRender(v,D,k,H,F,ce)}function ma(b,D,k){D.isScene!==!0&&(D=Ae);let H=ze.get(b),F=p.state.lights,ce=p.state.shadowsArray,ge=F.state.version,we=me.getParameters(b,F.state,ce,D,k),Re=me.getProgramCacheKey(we),Be=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||H.environment),Be===void 0&&(b.addEventListener("dispose",re),Be=new Map,H.programs=Be);let Le=Be.get(Re);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ge)return Uh(b,we),Le}else we.uniforms=me.getUniforms(b),b.onBuild(k,we,v),b.onBeforeCompile(we,v),Le=me.acquireProgram(we,Re),Be.set(Re,Le),H.uniforms=we.uniforms;let Ne=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),Uh(b,we),H.needsLights=Cp(b),H.lightsStateVersion=ge,H.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function Nh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Ks.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Uh(b,D){let k=ze.get(b);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Tp(b,D,k,H,F){D.isScene!==!0&&(D=Ae),S.resetTextureUnits();let ce=D.fog,ge=H.isMeshStandardMaterial?D.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:hi,Re=(H.isMeshStandardMaterial?z:_).get(H.envMap||ge),Be=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!k.morphAttributes.position,Et=!!k.morphAttributes.normal,pn=!!k.morphAttributes.color,Dt=Pi;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=v.toneMapping);let ti=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,vt=ti!==void 0?ti.length:0,Ve=ze.get(H),ec=p.state.lights;if($===!0&&(oe===!0||b!==y)){let yn=b===y&&H.id===B;ke.setState(H,b,yn)}let Mt=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ec.state.version||Ve.outputColorSpace!==we||F.isBatchedMesh&&Ve.batching===!1||!F.isBatchedMesh&&Ve.batching===!0||F.isInstancedMesh&&Ve.instancing===!1||!F.isInstancedMesh&&Ve.instancing===!0||F.isSkinnedMesh&&Ve.skinning===!1||!F.isSkinnedMesh&&Ve.skinning===!0||F.isInstancedMesh&&Ve.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ve.instancingColor===!1&&F.instanceColor!==null||Ve.envMap!==Re||H.fog===!0&&Ve.fog!==ce||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ke.numPlanes||Ve.numIntersection!==ke.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Le||Ve.morphTargets!==Ne||Ve.morphNormals!==Et||Ve.morphColors!==pn||Ve.toneMapping!==Dt||Pe.isWebGL2===!0&&Ve.morphTargetsCount!==vt)&&(Mt=!0):(Mt=!0,Ve.__version=H.version);let Zi=Ve.currentProgram;Mt===!0&&(Zi=ma(H,D,F));let Oh=!1,br=!1,tc=!1,Vt=Zi.getUniforms(),Ji=Ve.uniforms;if(pe.useProgram(Zi.program)&&(Oh=!0,br=!0,tc=!0),H.id!==B&&(B=H.id,br=!0),Oh||y!==b){Vt.setValue(O,"projectionMatrix",b.projectionMatrix),Vt.setValue(O,"viewMatrix",b.matrixWorldInverse);let yn=Vt.map.cameraPosition;yn!==void 0&&yn.setValue(O,Ue.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,br=!0,tc=!0)}if(F.isSkinnedMesh){Vt.setOptional(O,F,"bindMatrix"),Vt.setOptional(O,F,"bindMatrixInverse");let yn=F.skeleton;yn&&(Pe.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Vt.setValue(O,"boneTexture",yn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Vt.setOptional(O,F,"batchingTexture"),Vt.setValue(O,"batchingTexture",F._matricesTexture,S));let nc=k.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0&&Pe.isWebGL2===!0)&&We.update(F,k,Zi),(br||Ve.receiveShadow!==F.receiveShadow)&&(Ve.receiveShadow=F.receiveShadow,Vt.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ji.envMap.value=Re,Ji.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),br&&(Vt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Rp(Ji,tc),ce&&H.fog===!0&&ae.refreshFogUniforms(Ji,ce),ae.refreshMaterialUniforms(Ji,H,Y,G,ye),Ks.upload(O,Nh(Ve),Ji,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ks.upload(O,Nh(Ve),Ji,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Vt.setValue(O,"center",F.center),Vt.setValue(O,"modelViewMatrix",F.modelViewMatrix),Vt.setValue(O,"normalMatrix",F.normalMatrix),Vt.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let yn=H.uniformsGroups;for(let ic=0,Pp=yn.length;ic<Pp;ic++)if(Pe.isWebGL2){let Fh=yn[ic];it.update(Fh,Zi),it.bind(Fh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Rp(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Cp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,D,k){ze.get(b.texture).__webglTexture=D,ze.get(b.depthTexture).__webglTexture=k;let H=ze.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let k=ze.get(b);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,k=0){T=b,R=D,E=k;let H=!0,F=null,ce=!1,ge=!1;if(b){let Re=ze.get(b);Re.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Re.__webglFramebuffer===void 0?S.setupRenderTarget(b):Re.__hasExternalTextures&&S.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);let Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);let Le=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?F=Le[D][k]:F=Le[D],ce=!0):Pe.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?F=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[k]:F=Le,w.copy(b.viewport),N.copy(b.scissor),W=b.scissorTest}else w.copy(K).multiplyScalar(Y).floor(),N.copy(te).multiplyScalar(Y).floor(),W=le;if(pe.bindFramebuffer(O.FRAMEBUFFER,F)&&Pe.drawBuffers&&H&&pe.drawBuffers(b,F),pe.viewport(w),pe.scissor(N),pe.setScissorTest(W),ce){let Re=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,k)}else if(ge){let Re=ze.get(b.texture),Be=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,k||0,Be)}B=-1},this.readRenderTargetPixels=function(b,D,k,H,F,ce,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){pe.bindFramebuffer(O.FRAMEBUFFER,we);try{let Re=b.texture,Be=Re.format,Le=Re.type;if(Be!==Un&&de.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=Le===Pr&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==Li&&de.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ti&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&k>=0&&k<=b.height-F&&O.readPixels(D,k,H,F,de.convert(Be),de.convert(Le),ce)}finally{let Re=T!==null?ze.get(T).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(b,D,k=0){let H=Math.pow(2,-k),F=Math.floor(D.image.width*H),ce=Math.floor(D.image.height*H);S.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,b.x,b.y,F,ce),pe.unbindTexture()},this.copyTextureToTexture=function(b,D,k,H=0){let F=D.image.width,ce=D.image.height,ge=de.convert(k.format),we=de.convert(k.type);S.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,b.x,b.y,F,ce,ge,we,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,b.x,b.y,ge,we,D.image),H===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,D,k,H,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=b.max.x-b.min.x+1,ge=b.max.y-b.min.y+1,we=b.max.z-b.min.z+1,Re=de.convert(H.format),Be=de.convert(H.type),Le;if(H.isData3DTexture)S.setTexture3D(H,0),Le=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Ne=O.getParameter(O.UNPACK_ROW_LENGTH),Et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pn=O.getParameter(O.UNPACK_SKIP_PIXELS),Dt=O.getParameter(O.UNPACK_SKIP_ROWS),ti=O.getParameter(O.UNPACK_SKIP_IMAGES),vt=k.isCompressedTexture?k.mipmaps[F]:k.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?O.texSubImage3D(Le,F,D.x,D.y,D.z,ce,ge,we,Re,Be,vt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Le,F,D.x,D.y,D.z,ce,ge,we,Re,vt.data)):O.texSubImage3D(Le,F,D.x,D.y,D.z,ce,ge,we,Re,Be,vt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Dt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ti),F===0&&H.generateMipmaps&&O.generateMipmap(Le),pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,pe.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vl?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===mo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?os:Md}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?kt:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},sl=class extends Nr{};sl.prototype.isWebGL1Renderer=!0;var co=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Ur=class extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ad=new P,od=new P,cd=new nt,Dc=new Ir,za=new tr,rl=class extends ln{constructor(e=new zn,t=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ad.fromBufferAttribute(t,s-1),od.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ad.distanceTo(od);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;cd.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let f=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=f,A=M-1;v<A;v+=m){let R=g.getX(v),E=g.getX(v+1);if(l.fromBufferAttribute(p,R),h.fromBufferAttribute(p,E),Dc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let v=f,A=M-1;v<A;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Dc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},ld=new P,hd=new P,lo=class extends rl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ld.fromBufferAttribute(t,s),hd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ld.distanceTo(hd);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Or=class n extends zn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,x=[],p=i/2,f=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(m,2));function M(){let A=new P,R=new P,E=0,T=(t-e)/i;for(let B=0;B<=r;B++){let y=[],w=B/r,N=w*(t-e)+e;for(let W=0;W<=s;W++){let Q=W/s,L=Q*c+o,U=Math.sin(L),G=Math.cos(L);R.x=N*U,R.y=-w*i+p,R.z=N*G,u.push(R.x,R.y,R.z),A.set(U,T,G).normalize(),d.push(A.x,A.y,A.z),m.push(Q,1-w),y.push(g++)}x.push(y)}for(let B=0;B<s;B++)for(let y=0;y<r;y++){let w=x[y][B],N=x[y+1][B],W=x[y+1][B+1],Q=x[y][B+1];h.push(w,N,Q),h.push(N,W,Q),E+=6}l.addGroup(f,E,0),f+=E}function v(A){let R=g,E=new qe,T=new P,B=0,y=A===!0?e:t,w=A===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),g++;let N=g;for(let W=0;W<=s;W++){let L=W/s*c+o,U=Math.cos(L),G=Math.sin(L);T.x=y*G,T.y=p*w,T.z=y*U,u.push(T.x,T.y,T.z),d.push(0,w,0),E.x=U*.5+.5,E.y=G*.5*w+.5,m.push(E.x,E.y),g++}for(let W=0;W<s;W++){let Q=R+W,L=N+W;A===!0?h.push(L,L+1,Q):h.push(L+1,L,Q),B+=3}l.addGroup(f,B,A===!0?1:2),f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ho=class n extends Or{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ka=new P,Ba=new P,Nc=new P,Ha=new ss,uo=class extends zn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Zs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:p,c:f}=Ha;if(x.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ha.getNormal(Nc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let v=(M+1)%3,A=u[M],R=u[v],E=Ha[h[M]],T=Ha[h[v]],B=`${A}_${R}`,y=`${R}_${A}`;y in d&&d[y]?(Nc.dot(d[y].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(T.x,T.y,T.z)),d[y]=null):B in d||(d[B]={index0:l[M],index1:l[v],normal:Nc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:p}=d[g];ka.fromBufferAttribute(o,x),Ba.fromBufferAttribute(o,p),m.push(ka.x,ka.y,ka.z),m.push(Ba.x,Ba.y,Ba.z)}this.setAttribute("position",new Ut(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var fo=class n extends zn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,m=[],g=[],x=[],p=[];for(let f=0;f<=i;f++){let M=[],v=f/i,A=0;f===0&&a===0?A=.5/t:f===i&&c===Math.PI&&(A=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(E+A,1-v),M.push(l++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let v=h[f][M+1],A=h[f][M],R=h[f+1][M],E=h[f+1][M+1];(f!==0||a>0)&&m.push(v,A,E),(f!==i-1||c<Math.PI)&&m.push(A,R,E)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Va(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function F_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ir=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends ir{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xu:r=e,o=2*t-i;break;case vu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case xu:a=e,c=2*i-t;break;case vu:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,A=m*p-m*x;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+M*a[l+R]+v*a[c+R]+A*a[u+R];return r}},ol=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},cl=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Xa:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&F_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Xa;var hs=class extends kn{};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Wa;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends kn{};ll.prototype.ValueTypeName="color";var hl=class extends kn{};hl.prototype.ValueTypeName="number";var ul=class extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Fr=class extends kn{InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Xa;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends kn{};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Wa;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends kn{};dl.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},z_=new fl,pl=class{constructor(e){this.manager=e!==void 0?e:z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var bl="\\[\\]\\.:\\/",k_=new RegExp("["+bl+"]","g"),Ml="[^"+bl+"]",B_="[^"+bl.replace("\\.","")+"]",H_=/((?:WC+[\/:])*)/.source.replace("WC",Ml),V_=/(WCOD+)?/.source.replace("WCOD",B_),G_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),W_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),X_=new RegExp("^"+H_+V_+G_+W_+"$"),q_=["material","materials","bones","map"],ml=class{constructor(e,t,i){let s=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k_,"")}static parseTrackName(e){let t=X_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);q_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=ml;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iM=new Float32Array(1);var Ui=class{constructor(e,t,i=0,s=1/0){this.ray=new Ir(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return gl(e,this,i,t),i.sort(ud),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gl(e[s],this,i,t);return i.sort(ud),i}};function ud(n,e){return n.distance-e.distance}function gl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)gl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var hn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function Nd(n){if(n.comfortVersion===hn.version)return n;let e={...n,comfortVersion:hn.version,winDist:hn.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=hn.windowScale),e}function Y_(n,e){return n>0&&e>0?n/e:16/9}function vo(n,e,t){let i=Y_(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),c=Math.round((e-a)/2),l=Math.round(r),h=Math.round(a);return{x:o,y:c,w:l,h,u0:o/n,v0:c/e,uw:l/n,vh:h/e}}function Sl(n,e,t,i,s){let r=vo(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var $_=4096,_o={width:1200,height:800},ar=160;function Z_(n,e=$_){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+ar*2,o=Math.ceil(i)+ar*2,c=s==="window"?r%3*1360:0,l=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"?1360:e)||o>h||c+a>e||l+o>e)throw new Error("Workspace texture is full; close a window first.");return[c,l,a,o]})}var yo=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var h;e.updateMatrixWorld(!0);let t=[];e.traverse(u=>{u.isCSS3DObject&&u.visible&&t.push(u)});for(let u of t)u.element.parentNode!==this.domElement&&this.domElement.append(u.element),u.element.style.transform="none";for(let u of this.slots.keys())t.some(d=>d.id===u)||this.slots.delete(u);let i=t.map(u=>{let d=u.element.classList.contains("dock")?"dock":u.element.classList.contains("kb")?"keyboard":"window";if(d==="window"&&!this.slots.has(u.id)){let m=new Set(this.slots.values()),g=0;for(;m.has(g);)g++;this.slots.set(u.id,g)}return{width:u.element.offsetWidth,height:u.element.offsetHeight,kind:d,slot:this.slots.get(u.id)||0}}),s;try{s=Z_(i)}catch(u){this.lastError!==u.message&&(this.lastError=u.message,(h=window.nextvrMessage)==null||h.call(window,u.message));return}let r=[],a=[];t.forEach((u,d)=>{let m=u.element,[g,x,p,f]=s[d];m.style.left=`${g+ar}px`,m.style.top=`${x+ar}px`;let M=u.matrixWorld.clone().multiply(new nt().makeScale(p,f,1)),v=+(m.dataset.curve||0);r.push({id:m.dataset.windowId||(i[d].kind==="dock"?"dock":i[d].kind),matrix:M.toArray(),rect:s[d],curve:v,glass:[ar/p,ar/f,i[d].width/p,i[d].height/f]});let A=m.getBoundingClientRect();for(let R of m.querySelectorAll("[data-native-app]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=+(R.dataset.aspect||0),B=vo(E.width,E.height,T),y=u.matrixWorld.clone().multiply(new nt().makeTranslation(E.left-A.left+B.x+B.w/2-i[d].width/2,i[d].height/2-(E.top-A.top+B.y+B.h/2),.5)).multiply(new nt().makeScale(B.w,B.h,1));r.push({browser:"app:"+R.dataset.nativeApp,matrix:y.toArray(),rect:[0,0,Math.round(E.width),Math.round(E.height)],curve:+(m.dataset.curve||0),uv:[B.u0,B.v0,B.uw,B.vh]});let w=[B.u0,B.v0,B.uw,B.vh].map(N=>N.toFixed(5)).join(",");R.dataset.uv!==w&&(R.dataset.uv=w)}for(let R of m.querySelectorAll("[data-native-browser]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=R.dataset.nativeBrowser,B=R.dataset.url;if(!B)continue;let y=Math.round(E.width),w=Math.round(E.height),N={left:E.left,top:E.top,right:E.right,bottom:E.bottom};for(let U=R.parentElement;U&&U!==m;U=U.parentElement){let G=getComputedStyle(U);if(/(auto|scroll|hidden)/.test(G.overflow+G.overflowY)){let Y=U.getBoundingClientRect();N.left=Math.max(N.left,Y.left),N.top=Math.max(N.top,Y.top),N.right=Math.min(N.right,Y.right),N.bottom=Math.min(N.bottom,Y.bottom)}}a.push({id:T,url:B,width:y,height:w});let W=N.right-N.left,Q=N.bottom-N.top;if(W<=0||Q<=0)continue;let L=u.matrixWorld.clone().multiply(new nt().makeTranslation(N.left-A.left+W/2-i[d].width/2,i[d].height/2-(N.top-A.top+Q/2),.5)).multiply(new nt().makeScale(W,Q,1));r.push({browser:T,matrix:L.toArray(),rect:[0,0,y,w],curve:+(m.dataset.curve||0),uv:[(N.left-E.left)/y,(E.bottom-N.bottom)/w,W/y,Q/w]})}});let o=2*Math.tan(wd.degToRad(36)),c=new nt().makeTranslation(0,0,-1).multiply(new nt().makeScale(o*1.5,o,1));r.push({overlay:!0,matrix:c.toArray(),rect:[0,0,_o.width,_o.height]});let l=performance.now();if(l-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=l;let u=JSON.stringify(r),d=JSON.stringify(a);(u!==this.sent||d!==this.sentSpecs)&&(this.sent=u,this.sentSpecs=d,window.NativeXR.frame(u,d))}}invalidate(){this.sent=this.sentSpecs=null}};var Ud=new P,J_=new tn,Od=new P,or=class extends ln{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Xn=new nt,K_=new nt,bo=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(x,p){let f=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(l.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,l.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):l.style.transform="",x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let M,v;p.isOrthographicCamera&&(M=-(p.right+p.left)/2,v=(p.top+p.bottom)/2);let A=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,R=p.isOrthographicCamera?`scale( ${A} )scale(`+f+")translate("+u(M)+"px,"+u(v)+"px)"+d(p.matrixWorldInverse):`scale( ${A} )translateZ(`+f+"px)"+d(p.matrixWorldInverse),T=(p.isPerspectiveCamera?"perspective("+f+"px) ":"")+R+"translate("+r+"px,"+a+"px)";o.camera.style!==T&&(h.style.transform=T,o.camera.style=T),g(x,x,p,R)},this.setSize=function(x,p){i=x,s=p,r=i/2,a=s/2,c.style.width=x+"px",c.style.height=p+"px",l.style.width=x+"px",l.style.height=p+"px",h.style.width=x+"px",h.style.height=p+"px"};function u(x){return Math.abs(x)<1e-10?0:x}function d(x){let p=x.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function m(x){let p=x.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(x,p,f,M){if(x.isCSS3DObject){let v=x.visible===!0&&x.layers.test(f.layers)===!0;if(x.element.style.display=v===!0?"":"none",v===!0){x.onBeforeRender(t,p,f);let A;x.isCSS3DSprite?(Xn.copy(f.matrixWorldInverse),Xn.transpose(),x.rotation2D!==0&&Xn.multiply(K_.makeRotationZ(x.rotation2D)),x.matrixWorld.decompose(Ud,J_,Od),Xn.setPosition(Ud),Xn.scale(Od),Xn.elements[3]=0,Xn.elements[7]=0,Xn.elements[11]=0,Xn.elements[15]=1,A=m(Xn)):A=m(x.matrixWorld);let R=x.element,E=o.objects.get(x);if(E===void 0||E.style!==A){R.style.transform=A;let T={style:A};o.objects.set(x,T)}R.parentNode!==h&&h.appendChild(R),x.onAfterRender(t,p,f)}}for(let v=0,A=x.children.length;v<A;v++)g(x.children[v],p,f,M)}}};var xe=!!window.NativeXR,ht=xe?_o:{width:innerWidth,height:innerHeight},kd={lang:null,handsOn:!0,handDraw:0,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"passthrough",panorama:"lagoon",quality:"auto",showFps:0},St={...kd};try{St={...kd,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}if(xe){St=Nd(St),St.handsOn=!0;try{localStorage.setItem("nextvr.v1",JSON.stringify(St))}catch{}}var ve=St,lr=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(St))}catch{}},Fd={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"Panorama 360\xB0 \xB7 p\xF4r do sol",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo","game.tools":"Mundo 3D","game.place":"Colocar objeto","game.edit":"Editar objeto","game.duplicate":"Duplicar","game.remove":"Remover","game.removed":"removido","game.reset":"Recome\xE7ar cena","game.exit":"Sair do jogo","game.none":"Nenhum objeto selecionado","game.hint":"Pin\xE7a num objeto para mover \xB7 duas m\xE3os para girar e escalar","game.floor":"Ch\xE3o","game.menu":"Menu do jogo","game.menuTitle":"Jogo em andamento","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","game.launching":"Abrindo o mundo 3D\u2026","game.chord":"Segure a pin\xE7a com as duas m\xE3os para abrir o menu","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"360\xB0 panorama \xB7 sunset",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again","game.tools":"3D world","game.place":"Place object","game.edit":"Edit object","game.duplicate":"Duplicate","game.remove":"Remove","game.removed":"removed","game.reset":"Restart scene","game.exit":"Exit game","game.none":"No object selected","game.hint":"Pinch an object to move \xB7 two hands to rotate and scale","game.floor":"Floor","game.menu":"Game menu","game.menuTitle":"Game running","game.continue":"Continue","game.settings":"Settings","game.launching":"Opening the 3D world\u2026","game.chord":"Hold the pinch with both hands to open the menu","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Panorama 360\xB0 \xB7 atardecer",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo","game.tools":"Mundo 3D","game.place":"Colocar objeto","game.edit":"Editar objeto","game.duplicate":"Duplicar","game.remove":"Quitar","game.removed":"quitado","game.reset":"Reiniciar escena","game.exit":"Salir del juego","game.none":"Ning\xFAn objeto seleccionado","game.hint":"Pellizca un objeto para moverlo \xB7 dos manos para girar y escalar","game.floor":"Suelo","game.menu":"Men\xFA del juego","game.menuTitle":"Juego en curso","game.continue":"Continuar","game.settings":"Ajustes","game.launching":"Abriendo el mundo 3D\u2026","game.chord":"Mant\xE9n el pellizco con las dos manos para abrir el men\xFA","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}},zr=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),j_="pt",Ao=n=>zr.find(e=>e.id===n)||zr.find(e=>e.id===j_);var Q_=()=>Ao(St.lang).table||"pt",I=n=>(Fd[Q_()]||Fd.pt)[n]||n,Cl=n=>zr.some(e=>e.id===n&&e.table)?(St.lang=n,lr(),st("lang"),!0):!1,wo={},rt=(n,e)=>((wo[n]||(wo[n]=[])).push(e),e),st=(n,e)=>(wo[n]||[]).forEach(t=>t(e));function Ze(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(Ze._t),Ze._t=setTimeout(()=>e.classList.remove("on"),2400)}var Tl=new co,$e=new en(72,1,.05,120);$e.rotation.order="YXZ";var Xe=new Ri;Tl.add(Xe);var Ot=1.55;$e.position.set(0,Ot,0);var kr=xe?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Nr({antialias:!0,alpha:!0});xe||(kr.setClearColor(0,0),document.getElementById("gl").appendChild(kr.domElement));var fi=xe?new yo:new bo;document.getElementById("css3d").appendChild(fi.domElement);if(xe){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}function ey(){let n=St.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function To(){document.documentElement.dataset.quality=St.quality,xe||(ht.width=innerWidth,ht.height=innerHeight);let n=ht.width,e=ht.height;$e.aspect=n/e,$e.updateProjectionMatrix(),kr.setPixelRatio(ey()),kr.setSize(n,e),fi.setSize(n,e),st("resize")}addEventListener("resize",To);addEventListener("orientationchange",()=>setTimeout(To,120));To();rt("quality",To);var ty=Object.freeze(["passthrough","lagoon","virtual","palm","sunset","night","space","tropical","lakeside"]),Pl=()=>[{id:"passthrough",name:I("envPass"),thumb:null},{id:"lagoon",name:I("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:I("envVirtual"),thumb:"./env/virtual.jpg"},{id:"palm",name:I("envPalm"),thumb:"./env/palm.jpg"},{id:"sunset",name:I("envSunset"),thumb:"./env/sunset.jpg"},{id:"night",name:I("envNight"),thumb:"./env/night.jpg"},{id:"space",name:I("envSpace"),thumb:"./env/space.jpg"},{id:"tropical",name:I("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:I("envLakeside"),thumb:"./env/lakeside.jpg"}];function Br(n){var e,t;St.env=ty.includes(n)?n:"passthrough",St.env!=="passthrough"&&(St.panorama=St.env),lr(),st("env",St.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,St.env)}var Ll=n=>Br(n?"passthrough":St.panorama),sn={ok:!1,has:!1,q:new tn,tmp:new tn,e:new Fn},ny=new tn,iy=new tn(-Math.SQRT1_2,0,0,Math.SQRT1_2),sy=new P(0,0,1),Eo=Math.PI/180;function ry(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Eo}function ay(n){n.alpha!=null&&(sn.has=!0,sn.e.set(n.beta*Eo,n.alpha*Eo,-n.gamma*Eo,"YXZ"),sn.tmp.setFromEuler(sn.e),sn.tmp.multiply(iy),sn.tmp.multiply(ny.setFromAxisAngle(sy,-ry())),sn.q.copy(sn.tmp))}async function Hr(){if(xe)return sn.ok=sn.has=!0,st("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(Ze("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",ay,!0),sn.ok=!0,setTimeout(()=>{sn.has||Ze("Sem girosc\xF3pio: arraste para olhar")},1200),st("gyro",!0),!0)}catch{return Ze("Girosc\xF3pio indispon\xEDvel"),!1}}var oy=()=>sn.ok&&sn.has,ds=null,cr=0,Rl=0;addEventListener("pointerdown",n=>{xe||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(ds={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{ds&&(cr-=(n.clientX-ds.x)*.0032,Rl=Math.max(-1.2,Math.min(1.2,Rl-(n.clientY-ds.y)*.0032)),ds={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>ds=null);addEventListener("pointercancel",()=>ds=null);function Il(){let n=new Fn().setFromQuaternion($e.quaternion,"YXZ");Xe.rotation.y=n.y,Xe.position.set(0,0,0),st("recenter"),Ze(I("centered"))}var Bd=[],fs=n=>Bd.push(n),zd=performance.now(),Mo=0,wl=0,El=0,So=0,Al=0,Hd=0,un=null,Vd=()=>{let n=performance.now();El>0&&(So+=(n-El)/1e3,Al++,So>=1&&(Hd=Math.round(Al/So),So=0,Al=0)),El=n};function Gd(n){let e=Math.min((n-zd)/1e3,.05);zd=n,xe||(oy()?($e.quaternion.slerp(sn.q,1-Math.exp(-e*12)),cr&&($e.rotateY(cr),cr=0)):($e.quaternion.setFromEuler(new Fn(Rl,$e.rotation.y+cr,0,"YXZ")),cr=0)),$e.position.set(0,Ot,0);for(let t of Bd)t(e,n);if(kr.render(Tl,$e),fi.render(Tl,$e),Mo+=e,wl++,Mo>=1){let t=document.getElementById("fps");t.textContent=St.showFps?Math.round(wl/Mo)+" fps"+(xe&&St.handsOn?" \xB7 tracking "+Hd+" fps":"")+(xe&&St.handsOn?cy():""):"",Mo=0,wl=0}requestAnimationFrame(Gd)}requestAnimationFrame(Gd);Br(St.env);if(xe){let n=new nt,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),$e.quaternion.setFromRotationMatrix(n),$e.position.set(0,Ot,0),$e.updateMatrixWorld(!0),e&&(Xe.rotation.y=new Fn().setFromQuaternion($e.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=Ze,window.nextvrDiag=t=>{un=t}}function cy(){if(!un)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(un.camera);t!==null&&e.push("cam "+t);let i=n(un.infer);return i!==null&&e.push("infer "+i+"ms"),un.delegate&&e.push(String(un.delegate).split(" ")[0]),typeof un.narrow=="number"&&typeof un.wide=="number"&&un.narrow+un.wide>0&&e.push("slots "+(un.narrow>=un.wide?1:2)),n(un.stale)>0&&e.push("stale "+Math.round(un.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var Ro=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Co=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Fi=[],he={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Oi=new Ro,hr=new Co,qd=Math.tan(36*Math.PI/180),ly=qd*1.5,Do=!1,Ul=-1/0,Lo=1,Io=1,Dl=null,Yd=500,$d=()=>Do;async function Wr(){return xe?(Do=!0,window.NativeXR.hands(!0),st("hands",!0),!0):(Ze("Hand tracking requires the Android camera pipeline."),!1)}function Zd(n){for(let e of n)st(`pinch${e}`,he)}function Gr(){let n=Oi.cancel();hr.reset(),he.down=he.active=!1,he.phase=Oi.phase,he.hand=null,he.mode="idle",dy(),Zd(n)}function Ol(){Gr()}function Fl(){Gr(),Fi.length=0,Do=!1,Ul=-1/0,st("phonehands",{hands:[],consumed:new Set,scaleX:Lo,scaleY:Io}),xe&&window.NativeXR.hands(!1),st("hands",!1)}function Xr(n){return{x:.5+n[0]/(2*ly),y:.5-n[1]/(2*qd)}}var hy=250,Wd=1.6,Xd=.06,dn={x:0,y:0},Vr=0,Po=0;function ur(n=performance.now()){if(!he.active)return{x:he.x,y:he.y};let e=n-Vr;if(!(e>0)||e>hy)return{x:he.x,y:he.y};let t=e/1e3,i=s=>Math.max(-Xd,Math.min(Xd,s));return{x:Math.min(1,Math.max(0,he.x+i(dn.x*t))),y:Math.min(1,Math.max(0,he.y+i(dn.y*t)))}}function uy(n,e,t=0){let i=t>0&&Po>0?(t-Po)/1e9:Vr>0?(e-Vr)/1e3:-1;if(he.active&&i>.004&&i<.3){let s=r=>Math.max(-Wd,Math.min(Wd,r));dn.x+=(s((n.x-he.x)/i)-dn.x)*.35,dn.y+=(s((n.y-he.y)/i)-dn.y)*.35,Math.hypot(dn.x,dn.y)<.12&&(dn.x=dn.y=0)}else i>=0&&i<=.004||(dn.x=dn.y=0);Vr=e,Po=t>0?t:0}function dy(){dn.x=dn.y=0,Vr=0,Po=0}xe&&(window.nextvrHands=(n,e=1,t=1)=>{if(!Do)return;Vd();let i=performance.now();Lo=e,Io=t,Ul=i,Yd=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),Fi.splice(0,Fi.length,...n.hands||[]),st("handframe",{...n,hands:Fi});let r={hands:Fi,consumed:new Set,scaleX:Lo,scaleY:Io};if(st("phonehands",r),r.blockFar){Gr();return}let a=Fi.filter(h=>!r.consumed.has(h.id)),o=Oi.down&&a.find(h=>h.id===Oi.handId)||a.find(h=>h.pinching)||[...a].sort((h,u)=>u.palmWidth-h.palmWidth)[0];if(!o){Gr();return}let c=Xr(o.aim);uy(c,i,Number(n.timestampNs)||0),he.x=c.x,he.y=c.y,he.active=!0,he.hand=o;let l=o.predicted?[]:Oi.update(o.id,o.pinching);l.includes("down")?hr.begin(o.id,c.x*ht.width,c.y*ht.height,i):l.includes("up")?hr.end():l.includes("cancel")&&hr.reset(),Oi.down&&!o.predicted&&hr.sample(o.id,c.x*ht.width,c.y*ht.height,i),he.mode=hr.mode,he.down=Oi.down,he.phase=Oi.phase,Zd(l)});var Nl=document.getElementById("overlay");Nl.getContext("2d").clearRect(0,0,Nl.width,Nl.height);fs(()=>{var n,e;xe&&Dl!==!!ve.handDraw&&(Dl=!!ve.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,Dl)),Fi.length&&performance.now()-Ul>Yd&&(Fi.length=0,Gr(),st("phonehands",{hands:[],consumed:new Set,scaleX:Lo,scaleY:Io}))});var fy=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),py=Object.freeze({appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),my=Object.freeze({...py,...fy});function Ye(n,e="ui-icon"){let t=my[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var wt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),qr=(n,e,t)=>Math.max(e,Math.min(t,n)),rn=n=>Number.isFinite(n)?n:0;function zl(n,e=0,t=1.55,i=null){let s=rn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=rn(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=wt.minDistance,s=0,a=-o);let c=qr(Math.atan2(-s,-a),-wt.maxYaw,wt.maxYaw);o=qr(o,wt.minDistance,wt.maxDistance);let l=Math.max(0,rn(e)),h=t+wt.lowerEdgeFromEye+l,u=t+wt.upperEdgeFromEye-l;return r=h<=u?qr(r,h,u):t,{x:-Math.sin(c)*o,y:r,z:-Math.cos(c)*o}}function Jd(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((rn(e.x)-rn(n.x))*t,(rn(e.y)-rn(n.y))*i)}function kl(n,e,t,i){return Jd(n,e,t,i)>=wt.dragActivationPx}function Kd(n,e,t,i){return Jd(n,e,t,i)>=wt.resizeActivationPx}function Bl(n,e){let t=rn(n==null?void 0:n.x),i=rn(n==null?void 0:n.y),s=rn(n==null?void 0:n.z),r=rn(e==null?void 0:e.x)-t,a=rn(e==null?void 0:e.y)-i,o=rn(e==null?void 0:e.z)-s,c=Math.hypot(r,a,o);if(!Number.isFinite(c)||c<=wt.motionDeadZone)return{x:t,y:i,z:s};let h=Math.min(c,wt.maxMotionStep)/c;return{x:t+r*h,y:i+a*h,z:s+o*h}}var gy=Object.freeze({maxAngle:1.15});function Yr(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(gy.maxAngle,e))}function No(n,e){let t=Yr(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function Uo(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function zi(n,e=wt.maxResize){let t=qr(rn(e),wt.minResize,wt.maxResize);return qr(Number.isFinite(n)?n:1,wt.minResize,t)}function jd(n,e,t=1.55){let i=Math.max(1e-5,rn(e)),s=Math.min(n-(t+wt.lowerEdgeFromEye),t+wt.upperEdgeFromEye-n);return zi(s/i)}function Qd(n,e,t,i){return!(e>1)||!Number.isFinite(t)?zi(n,i):zi(n*t/e,i)}function ef(n,e){let t=zi(n),s=zi(e)-t;return Math.abs(s)<.004?t:zi(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function tf(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var nf=1.22;function Hl(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function sf({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=Hl(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function rf(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var $r=n=>Number.isFinite(n)?n:0,af=(n,e,t)=>Math.max(e,Math.min(t,n));function dr(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=$r(n==null?void 0:n.x),a=$r(n==null?void 0:n.y),o=$r(n==null?void 0:n.z),c=a-s,l=Math.hypot(r,o),h=Math.hypot(r,c,o)||1e-6,u=Math.max(0,$r(e)),d=Math.max(0,$r(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:l>1e-6?Math.atan2(c,l):c>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(u,l||1e-6),halfPitch:Math.atan2(d,h)}}function of(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return dr(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Vl(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return dr({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function xy(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,c=e.pitch-e.halfPitch,l=e.pitch+e.halfPitch,h=Math.min(i,r)-Math.max(t,s),u=Math.min(o,l)-Math.max(a,c);return h>0&&u>0?-Math.sqrt(h*u):Math.hypot(Math.max(-h,0),Math.max(-u,0))}function Oo(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||dr(n,n.hw||.5,n.hh||.35),c=0,l=0;for(let d of e){let m=xy(o,d);if(m<0){let g=m*m;c+=26e3*g+1e3,g>l&&(l=g)}else if(m<a){let g=a-m;c+=900*g*g}}let h=Math.hypot(o.x,o.z)||1e-6;c+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(c+=26*(Math.abs(o.yaw)-r)*40),h>s&&(c+=34*(h-s));let u=Number.isFinite(t.lift)?t.lift:o.y;return c+=Math.abs(o.y-u)*12,{score:c,overlap:l,yaw:o.yaw,radius:h}}function vy({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:c=2,topRowStep:l=1.22}={}){let h=[],u=Number.isFinite(e)?e:n,d=[0];for(let m=1;m<=6;m++){let g=m*t;if(g>r+1e-9)break;d.push(g,-g)}for(let m=0;m<c;m++){let g=m===0?u:u+s*2*(l-1)+s;for(let x=0;x<a;x++){let p=i+x*o;for(let f of d){let M=af(f,-r,r);h.push({x:Math.sin(M)*p,y:g,z:-Math.cos(M)*p,angle:M,row:m,radius:p})}}}return h}function cf({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:c=null,rings:l=3,ringStep:h=.16,rows:u=2,gap:d=.03,topRowStep:m=1.22,improvement:g=1e-6}={}){let x={eye:t,desiredDistance:s,maxYaw:o,gap:d,lift:c??t},p=vy({eye:t,lift:c??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:l,ringStep:h,rows:u,topRowStep:m}),f=null;for(let M of p){let v=dr(M,r,a),{score:A,overlap:R}=Oo({...M,box:v},n,x),E={x:M.x,y:M.y,z:M.z,angle:M.angle,row:M.row,radius:M.radius,score:A,overlap:R,box:v};(!f||E.score<f.score-g)&&(f=E)}if(e){let M=dr(e,r,a),{score:v,overlap:A}=Oo({...e,box:M},n,x),R={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:A,box:M,desired:!0};(!f||R.score<=f.score+g)&&(f=R)}return f}function lf({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:c=.03,maxShift:l=3}={}){let h={eye:t,desiredDistance:s,maxYaw:o,gap:c,lift:n.y},u=(p,f,M)=>dr({x:p,y:f,z:M},r,a),d=Oo({...n,box:u(n.x,n.y,n.z)},e,h);if(d.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:d.score,moved:!1,overlap:0};let m={x:n.x,y:n.y,z:n.z,score:d.score,overlap:d.overlap},g=Math.hypot(n.x,n.z)||s,x=Math.atan2(-n.x,-n.z);for(let p=1;p<=l;p++)for(let f of[1,-1]){let M=af(x+f*p*i,-o,o),v=-Math.sin(M)*g,A=-Math.cos(M)*g,{score:R,overlap:E}=Oo({x:v,y:n.y,z:A,box:u(v,n.y,A)},e,h);R<m.score&&(m={x:v,y:n.y,z:A,score:R,overlap:E})}return{...m,moved:m.x!==n.x||m.z!==n.z}}var lt=.00105,Ie=[],mr=null,Tn={y:Ot-.6,z:-1.7,h:.12};function _f(n=null){let e=[];for(let t of Ie)t===n||t.hidden||t.onboarding||e.push(of(t));if(Bi&&yt.offsetWidth>0){let t=Vl(Bn);t&&e.push(t)}if(je&&qt&&!Ho&&je.element.offsetWidth>0){let t=Vl(qt);t&&e.push(t)}return e}var Yl=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new P,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=Yr(a?0:ve.win360?ve.win360K:0),this.curveRadius=No(s,this.curve);let o=document.createElement("div");o.className="win-shell",o.dataset.windowId=e,o.dataset.resizeScale="1",o.style.width=s+"px";let c=document.createElement("div");c.className="win",c.style.width=s+"px",c.style.height=r+"px",c.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${I("repin")}" title="${I("repin")}">${Ye("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${I("close")}" title="${I("close")}">${Ye("x")}</button>
      </div><div class="win-body"></div>`,c.querySelector(".win-title").textContent=t,c.querySelector(".win-body").appendChild(i),c.addEventListener("pointerdown",()=>on(this),!0),c.querySelector(".win-bar").addEventListener("click",u=>{let d=u.target.closest("[data-act]");d&&(d.dataset.act==="close"?Pn(this):d.dataset.act==="curve"?this.setCurve(this.curve>0?0:Yr(ve.win360K)):by(this))});let l=document.createElement("div");l.className="win-handle",l.title=I("moveWindow"),l.setAttribute("aria-label",I("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.title=I("resize"),h.setAttribute("aria-label",I("resize")),h.innerHTML=Ye("move"),o.append(c,l,h),this.el=c,this.shell=o,this.handle=l,this.resizeHandle=h,o.dataset.curve=String(this.curve),a&&(c.querySelector(".win-bar").hidden=!0),this.obj=new or(o),this.obj.scale.setScalar(lt*(this.onboarding?hn.welcomeScale:ve.winScale)),Xe.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Gl(s*lt,r*lt,this,this.hitSegments),this.bendHit(),this.grab=Gl(260*lt,90*lt,this),this.grab.userData.isHandle=!0,this.resizeHit=Gl(112*lt,112*lt,this),this.resizeHit.userData.isResize=!0,!xe){let u=d=>({x:d.clientX/ht.width,y:d.clientY/ht.height});l.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);eh(this,m.x,m.y,"desktop"),l.setPointerCapture(d.pointerId)}),l.addEventListener("pointermove",d=>{if(tt.win===this){let m=u(d);th(m.x,m.y)}}),l.addEventListener("pointerup",ki),l.addEventListener("pointercancel",ki),h.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);wf(this,m.x,m.y),h.setPointerCapture(d.pointerId)}),h.addEventListener("pointermove",d=>{if(At.win===this){let m=u(d);Ef(m.x,m.y)}}),h.addEventListener("pointerup",gs),h.addEventListener("pointercancel",gs)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new nn(this.w*lt,this.h*lt,i,1),this.hitSegments=i,this.curveRadius=No(this.w,this.curve),this.bendHit(),this.apply(),$n(),st("wins",Ie)}setCurve(e){this.curve=Yr(e),this.curveRadius=No(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new nn(this.w*lt,this.h*lt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return Uo(e,this.curveRadius)*lt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,Uo(e.getX(t)/lt,this.curveRadius)*lt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*ve.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(Ot-e.position.y,i)*ve.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?hn.welcomeScale:ve.winScale)*this.resizeScale;e.scale.setScalar(lt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*lt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation),this.resizeHit.translateX((this.w/2-48)*lt*r),this.resizeHit.translateY(-(this.h/2-48)*lt*r),this.resizeHit.translateZ(this.bulge(this.w/2-48)+.003),this.resizeHit.scale.setScalar(r)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&tt.win===this&&ki(),t&&At.win===this&&gs(),(s=(i=fi).invalidate)==null||s.call(i))}};function Gl(n,e,t,i=1){let s=new Ht(new nn(n,e,i,1),new En({visible:!1}));return s.userData.win=t,Xe.add(s),s}function $n(){for(let a of Ie)a.onboarding&&a.target.set(0,Ot,-hn.welcomeDistance);let n=Ie.filter(a=>a.pinned&&!a.onboarding&&!a.hidden),e=n.length;if(!e)return;let t=xe?ve.winDist:-Tn.z+.5+(ve.winDist-2.2),i=Math.max(...n.map(a=>a.w*a.resizeScale))*lt*ve.winScale,s=xe?sf({width:i,dist:t,gap:.5,outerLimit:wt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+e*.05));if(tf(e,s).forEach(({angle:a,row:o},c)=>{let l=n[c],h=l.h*lt*ve.winScale*l.resizeScale,u=Tn.y+Tn.h/2+.14+h/2,d=Math.sin(a)*t,m=-Math.cos(a)*t,g=o===0?u:Math.min(u+h*2*(nf-1)+h,Ot+wt.upperEdgeFromEye-h);l.target.set(d,g,m)}),!xe)return;let r=Math.min(s,Hl(i,t)*.6);for(let a of n){let o=a.w*lt*ve.winScale*a.resizeScale/2,c=a.h*lt*ve.winScale*a.resizeScale/2,l=lf({desired:{x:a.target.x,y:a.target.y,z:a.target.z},occupied:_f(a),eye:Ot,step:r,distance:t,halfWidth:o,halfHeight:c,outerLimit:wt.maxYaw-.06,maxShift:4});a.target.set(l.x,l.y,l.z)}}rt("recenter",$n);rt("resize",$n);function fn(n){let e=Ie.find(s=>s.id===n.id);if(e)return on(e),e;let t=Ie.filter(s=>!s.onboarding&&!s.hidden);if(t.length>=5){let s=rf(t);s&&(Ze(`${I("arcFull")}: ${s.title}`),Pn(s))}let i=new Yl(n);return Ie.push(i),$n(),on(i),i.obj.position.copy(i.target),n.free&&yy(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),st("wins",Ie),i}function yy(n,e=null){n.pinned=!1;let t=n.w*lt*ve.winScale*n.resizeScale/2,i=n.h*lt*ve.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Tn.y+Tn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-ve.winDist)||ve.winDist,a=cf({occupied:_f(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-ve.winDist},eye:Ot,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:wt.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}var yf=(n,e)=>gr(n,e)!==null;function Pn(n){if(!n)return;let e=Ie.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);et&&(et.nativeId?et.nativeId===i:!n.el.contains(et))&&Rn(!1),ta&&!n.el.contains(ta)&&(ta=null),tt.win===n&&ki(),At.win===n&&gs(),Ie.splice(e,1),Xe.remove(n.obj),Xe.remove(n.hit),Xe.remove(n.grab),Xe.remove(n.resizeHit),n.shell.remove(),mr===n&&(mr=Ie[Ie.length-1]||null),$n(),st("wins",Ie)}function on(n){mr!==n&&(mr=n,n.lastFocus=performance.now(),Ie.forEach(e=>e.el.classList.toggle("focus",e===mr)))}function by(n){n.pinned=!0,n.shell.classList.remove("free"),$n()}var bf=()=>mr,Cn=new Ui,ko=new qe,tt={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},At={win:null,start:null,active:!1,startScale:1,startDistance:1},an={source:null,start:null,active:!1,plane:null,anchor:null};function _s(n,e,t=Cn){return $e.updateMatrixWorld(!0),Xe.updateMatrixWorld(!0),ko.set(n*2-1,1-e*2),t.setFromCamera(ko,$e),t}function My(n){return n.h*lt*ve.winScale*n.resizeScale/2}function Sy(n,e,t=null){let i=zl(e,My(n),Ot,t);return new P(i.x,i.y,i.z)}function eh(n,e,t,i="handle",s=null){if(n.onboarding||At.win)return!1;tt.win&&ki(),on(n),_s(e,t);let r=n.obj.getWorldPosition(new P),a=new Xt().setFromNormalAndCoplanarPoint(Cn.ray.direction.clone(),r),o=Cn.ray.intersectPlane(a,new P);if(!o)return!1;let c=Xe.worldToLocal(r.clone()),l=Math.hypot(c.x,c.z);return Object.assign(tt,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:l,applied:new P}}),!0}function wy(){let n=tt.win;!n||tt.active||(tt.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),$n())}function th(n,e){let t=tt.win;if(!t)return!1;_s(n,e);let i=Cn.ray.intersectPlane(tt.plane,new P);if(!i)return!1;if(!tt.active){if(!kl(tt.start,{x:n,y:e},ht.width,ht.height))return!1;wy()}let s=tt.anchor,r=i.clone().sub(s.hit);s.applied.copy(Bl(s.applied,r));let a=s.center.clone().add(s.applied),o=Sy(t,Xe.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),!0}function ki(){tt.win&&tt.win.shell.classList.remove("moving"),Object.assign(tt,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Mf(n,e,t="pinch"){if(!Bi||tt.win||At.win)return!1;an.start&&Hi(),_s(n,e);let i=xn.getWorldPosition(new P),s=new Xt().setFromNormalAndCoplanarPoint(Cn.ray.direction.clone(),i),r=Cn.ray.intersectPlane(s,new P);return r?(Object.assign(an,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new P}}),yt.classList.add("grab-armed"),_t.setAttribute("aria-pressed","true"),!0):!1}function Ey(){!an.start||an.active||(an.active=!0,yt.classList.remove("grab-armed"),yt.classList.add("moving"))}function nh(n,e){if(!an.start)return!1;_s(n,e);let t=Cn.ray.intersectPlane(an.plane,new P);if(!t)return!1;if(!an.active){if(!kl(an.start,{x:n,y:e},ht.width,ht.height))return!1;Ey()}let i=an.anchor,s=t.clone().sub(i.hit);i.applied.copy(Bl(i.applied,s));let r=i.center.clone().add(i.applied),a=Xe.worldToLocal(r),o=zl(a,Tn.h/2,Ot);return ps=new P(o.x,o.y,o.z),vs=Math.atan2(-o.x,-o.z),ra(),!0}function Hi(){yt==null||yt.classList.remove("grab-armed","moving"),_t==null||_t.setAttribute("aria-pressed","false"),Object.assign(an,{source:null,start:null,active:!1,plane:null,anchor:null})}function Sf(n,e,t){$e.updateMatrixWorld(!0),Xe.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new P).project($e),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*ht.width,(t-r)*ht.height)}function wf(n,e,t){return n.onboarding||tt.win?!1:(At.win&&gs(),on(n),Object.assign(At,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,Sf(n,e,t))}),!0)}function Ef(n,e){let t=At.win;if(!t)return!1;if(!At.active){if(!Kd(At.start,{x:n,y:e},ht.width,ht.height))return!1;At.active=!0,t.shell.classList.add("resizing")}let i=t.h*lt*ve.winScale/2,s=Math.max(At.startScale,jd(t.obj.position.y,i,Ot)),r=Qd(At.startScale,At.startDistance,Sf(t,n,e),s);return t.resizeScale=zi(ef(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function gs(){At.win&&At.win.shell.classList.remove("resizing"),Object.assign(At,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function gr(n,e){_s(n,e);let t=[];for(let o of Ie)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=Cn.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var Ke=null,An=null,Ay=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function Ty(n,e,t,i,s){var c,l;let r=s?Ay(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(l=(c=n.activation).matches)!=null&&l.call(c,"input,textarea")&&n.activation.focus())}function Jr(n,e,t=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?Ty(n,e,t,i,s):window.NativeXR.handTouch(n.id,e,t,i)}function xs(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s);if(e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let m=zy(a);m?Rn(!0,m):Rn(!1)}let o=a==null?void 0:a.closest("[data-native-app]");if(o){let m=o.getBoundingClientRect(),g=Sl(o.offsetWidth,o.offsetHeight,+(o.dataset.aspect||0),r.left+i-m.left,r.top+s-m.top);if(e===2&&!g&&!Ke)return;let x="app:"+o.dataset.nativeApp;if(Ke&&Ke.id!==x&&(Jr(Ke,3),Ke=null),e===0){if(!g)return;Ke={id:x,win:n.win,x:g.u,y:g.v}}Ke&&Ke.id===x&&(g||e!==2)&&(g&&(Ke.x=g.u,Ke.y=g.v),Jr(Ke,e,Ke.x,Ke.y)),(e===1||e===3)&&(Ke=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),l=c==null?void 0:c.getBoundingClientRect(),h=c?c.dataset.nativeBrowser:"shell",u=r.left+i-((l==null?void 0:l.left)||0),d=r.top+s-((l==null?void 0:l.top)||0);Ke&&Ke.id!==h&&(Jr(Ke,3),Ke=null,e!==0)||(e===0&&(Ke={id:h,win:n.win,x:u,y:d}),Ke&&Ke.id===h&&(Ke.x=u,Ke.y=d,Jr(Ke,e,u,d,a)),(e===1||e===3)&&(Ke=null))}function Af(){Ke&&Jr(Ke,3),Ke=null,An=null,ki(),gs(),Hi()}rt("pinchcancel",Af);function Kr(n,e){if(xe){xs(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=Tf(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function Tf(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=Ry(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function Ry(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}rt("pinchdown",()=>{var i;let n=gr(he.x,he.y),e=Of(he.x,he.y),t=Ny(he.x,he.y);if(t&&(!n||t.distance<n.distance)&&(!e||t.distance<e.distance)){Mf(he.x,he.y,"pinch");return}if(e&&(!n||e.distance<n.distance)){oh(e.button);return}if(n!=null&&n.resize){wf(n.win,he.x,he.y);return}if(n!=null&&n.handle){eh(n.win,he.x,he.y,"handle",(i=he.hand)==null?void 0:i.id);return}if(n){on(n.win),An={win:n.win,hit:n};return}If("down")});rt("pinchup",()=>{if(mi){Vi();return}if(An&&he.mode==="drag"&&(Kr(An.hit,"down"),An=null),An){let e=gr(he.x,he.y),t=e&&!e.handle&&!e.resize&&e.win===An.win?e:An.hit;An=null,Kr(t,"down"),Kr(t,"up");return}if(Ke){let e=gr(he.x,he.y);e&&e.win===Ke.win&&!e.handle&&!e.resize?xs(e,1):Af();return}if(At.win){gs();return}if(tt.win){ki();return}if(an.start){nh(he.x,he.y),Hi();return}let n=gr(he.x,he.y);if(n&&!n.handle&&!n.resize){Kr(n,"up");return}If("up")});var yt=document.createElement("div");yt.className="dock";var _t=document.createElement("button");_t.type="button";_t.className="dock-grab";_t.title=I("moveDock");_t.setAttribute("aria-label",I("moveDock"));_t.setAttribute("aria-pressed","false");var xn=new or(yt);Xe.add(xn);var Bn=new Ht(new nn(1,1),new En({visible:!1})),qn=new Ht(new nn(1,1),new En({visible:!1}));Xe.add(Bn,qn);if(!xe){let n=e=>({x:e.clientX/ht.width,y:e.clientY/ht.height});_t.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Mf(t.x,t.y,"desktop")&&_t.setPointerCapture(e.pointerId)}),_t.addEventListener("pointermove",e=>{if(an.source==="desktop"){let t=n(e);nh(t.x,t.y)}}),_t.addEventListener("pointerup",e=>{an.source==="desktop"&&(Hi(),_t.hasPointerCapture(e.pointerId)&&_t.releasePointerCapture(e.pointerId))}),_t.addEventListener("pointercancel",Hi)}var Bi=!0,jr=!1;function sa(n){Bi=!!n,xn.visible=Bi,Bi||(ea=-1,Hi())}function ih(n){var t,i;let e=!!n;return jr===e||(jr=e,yt.style.setProperty("display",e?"none":"","important"),Bn.visible=qn.visible=!e,sa(!e),(i=(t=fi).invalidate)==null||i.call(t)),jr}var Rf=()=>jr,Cy=[],ia=[],$l=[],Py=Ye("wifi"),Ly='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',Iy='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Cf(n){Cy=n,ia=[],$l.length=0,yt.innerHTML="";for(let e of n){if(e.kind==="sep"){yt.appendChild(Dy());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",yt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=Iy;else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${Py}</span><span class="dk-bat">${Ly}</span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),$l.push({b:t,win:e.win})}t.addEventListener("click",()=>e.run()),yt.appendChild(t),ia.push(t)}_t.title=I("moveDock"),_t.setAttribute("aria-label",I("moveDock")),yt.appendChild(_t),Lf(),sh(),Qr(),Pf(),ra()}function Dy(){let n=document.createElement("span");return n.className="dock-sep",n}function Pf(){for(let{b:n,win:e}of $l){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",Ie.some(i=>i.id===e))}}rt("wins",Pf);function Lf(){let n=yt.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(Lf,2e4);function sh(){let n=yt.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",sh);addEventListener("offline",sh);var pr=null;function Qr(){let n=yt.querySelector(".dk-bat");if(!n)return;if(!pr){n.style.display="none";return}n.style.display="";let e=n.querySelector(".fill");e.setAttribute("width",String(Math.max(1.6,13*pr.level))),e.setAttribute("fill",pr.charging?"#8de6c8":pr.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{pr=n,n.addEventListener("levelchange",Qr),n.addEventListener("chargingchange",Qr),Qr()}).catch(()=>{});var ea=-1;rt("pinchcancel",()=>{ea=-1});function If(n){let e=Uy(he.x,he.y);if(n==="down"){ea=e?e.i:-1;return}let t=ea;if(ea=-1,!(!e||e.i!==t)&&n==="up"){let i=ia[e.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function Ny(n,e){return!Bi||!Zl?null:(_s(n,e),Cn.intersectObject(qn,!1)[0]||null)}function Uy(n,e){if(!Bi)return null;_s(n,e);let t=Cn.intersectObject(Bn,!1)[0];if(!t)return null;let i=Bn.worldToLocal(t.point.clone()),s=Bn.geometry.parameters,r=(i.x/s.width+.5)*yt.offsetWidth,a=(.5-i.y/s.height)*yt.offsetHeight;for(let o=0;o<ia.length;o++){let c=ia[o];if(r>=c.offsetLeft&&r<=c.offsetLeft+c.offsetWidth&&a>=c.offsetTop&&a<=c.offsetTop+c.offsetHeight)return{i:o}}return null}var hf="",Zl="",vs=0,ps=null;rt("recenter",()=>{vs=0,pi.ready=!1,ps=null,Hi(),ra()});rt("summon-dock",()=>{var e;$e.updateMatrixWorld(!0),Xe.updateMatrixWorld(!0);let n=$e.getWorldDirection(new P).transformDirection(Xe.matrixWorld.clone().invert());vs=Math.atan2(-n.x,-n.z),pi.ready=!1,ps=null,Hi(),ra(),(e=window.NativeXR)==null||e.click()});function ra(){let n=ht.width>ht.height,e=(xe?hn.dockDistance:n?1.42:1.75)*ve.dockDist,t=xe?-hn.dockDrop:n?-.5:-.6,i=lt*(xe?hn.dockScale:n?.74:.88)*ve.dockSize;ps?xn.position.copy(ps):xn.position.set(-Math.sin(vs)*e,Ot+t,-Math.cos(vs)*e),xn.rotation.set(.26,vs,0,"YXZ"),xn.scale.setScalar(i);let s=yt.offsetWidth*i,r=yt.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==hf&&(hf=a,Bn.geometry.dispose(),Bn.geometry=new nn(s,r),Tn.h=r,ps||$n());let o=_t.offsetWidth*i,c=_t.offsetHeight*i,l=o.toFixed(3)+"x"+c.toFixed(3);o>0&&l!==Zl&&(Zl=l,qn.geometry.dispose(),qn.geometry=new nn(o,c)),Bn.position.copy(xn.position),Bn.rotation.copy(xn.rotation),qn.position.copy(xn.position),qn.rotation.copy(xn.rotation),qn.translateY((yt.offsetHeight/2-_t.offsetTop-_t.offsetHeight/2)*i),qn.translateZ(.004),!ps&&(Tn.y!==xn.position.y||Tn.z!==-e)&&(Tn.y=xn.position.y,Tn.z=-e,$n())}var Oy=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],uf=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],Fy=0,je=null,qt=null,et=null,fr=null,Yn=!1,ms=!1,Ho=!1,gi=window.__nextvrTyping,zy=n=>(gi==null?void 0:gi.editable(n))||null,ta=null,Jl=1,Df=2,Bo=3,ky=xe;function rh(n){var t,i;if(Ho=!!n,!je)return!1;let e=!!n;return je.visible=!e,je.element.style.setProperty("display",e?"none":"","important"),qt&&(qt.visible=!e),e&&Vi(),(i=(t=fi).invalidate)==null||i.call(t),!0}var Nf=()=>!!je&&je.visible!==!1;function By(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&Ie.find(s=>s.shell===t)||null}function Rn(n,e){if(!n){xe&&console.log("kb close; was serving",(et==null?void 0:et.nativeId)||(et==null?void 0:et.tagName)||"nothing"),Vi(),je&&(Xe.remove(je),Xe.remove(qt),je.element.remove(),je=null),et=null,fr=null,Yn=ms=!1,pi.ready=!1;return}let t=e||ta;if(et=t&&!t.nativeId?(gi==null?void 0:gi.focus(t))||null:t||null,et&&!et.nativeId&&(ta=et),fr=By(et),xe&&console.log("kb open for",(et==null?void 0:et.nativeId)||(et==null?void 0:et.tagName)||"nothing","in window",(fr==null?void 0:fr.id)??"none"),je){Kl();return}let i=document.createElement("div");i.className="kb";for(let s of Oy){let r=document.createElement("div");r.className="kb-row";for(let a of s){let o=typeof a=="string"?a:a.k,c=document.createElement("button");c.className="key"+(typeof a=="string"?"":" "+a.cls),typeof a=="string"?c.textContent=o:a.icon?(c.innerHTML=Ye(a.icon),c.setAttribute("aria-label",a.label),c.title=a.label):c.textContent=a.lbl||o,c.dataset.k=o,r.appendChild(c)}i.appendChild(r)}i.addEventListener("click",s=>{let r=s.target.closest("[data-k]");r&&(oh(r),Vi())}),je=new or(i),je.scale.setScalar(lt*(xe?hn.keyboardScale:.9)),Xe.add(je),qt=new Ht(new nn(1,1),new En({visible:!1})),Xe.add(qt),Kl()}function Hy(){Yn?ms?(Yn=!1,ms=!1):ms=!0:(Yn=!0,ms=!1),Uf()}function ah(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===Bo){e&&e.classList.remove("hot"),s&&Wl(n,n,!!i,Bo);return}if(t===Jl){if(xe&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){Rn(!1);return}if(n==="\u21E7"){Hy();return}if(n==="@lang")return;if(n==="@mic"){Ze(I("micOff"));return}if(n==="@emoji"){Wl(n,uf[Fy++%uf.length],!1,Jl);return}}Wl(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function Wl(n,e,t,i){if(!et)return!1;let s=t===void 0?Yn:t;return et.nativeId?window.NativeXR.key(et.nativeId,e,!!s,i||0):gi==null||gi.key(n,!!s,i||0),ky&&i!==Df&&console.log("kb key ->",et.nativeId||et.tagName+"."+(et.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==Bo&&s&&Yn&&!ms&&(Yn=!1,Uf()),!0}function Uf(){if(je){for(let n of je.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=Yn?ms?"lock":"once":"";for(let n of je.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=Yn?e.toUpperCase():e.toLowerCase())}}}var df="",Vy=.35,pi={yaw:0,ready:!1},Gy=n=>Math.atan2(Math.sin(n),Math.cos(n));function Wy(){let n=fr;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return vs}function Kl(n=0){if(!je)return;let e=Wy();pi.ready?pi.yaw+=Gy(e-pi.yaw)*(1-Math.exp(-n*7)):(pi.yaw=e,pi.ready=!0);let t=pi.yaw,i=xe?hn.keyboardDistance:-Tn.z-.35;je.position.set(-Math.sin(t)*i,Ot-(xe?hn.keyboardDrop:.68),-Math.cos(t)*i),je.rotation.set(-Math.PI/2+Vy,t,0,"YXZ");let s=je.element.offsetWidth*je.scale.x,r=je.element.offsetHeight*je.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==df&&(df=a,qt.geometry.dispose(),qt.geometry=new nn(s,r)),qt.position.copy(je.position),qt.rotation.copy(je.rotation)}var Xy=700,qy=90,Yy=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),mi=null,na=0;function Of(n,e){var o,c;if(!je||Ho)return null;ko.set(n*2-1,-(e*2-1)),Cn.setFromCamera(ko,$e);let t=Cn.intersectObject(qt,!1)[0];if(!t)return null;let i=qt.worldToLocal(t.point.clone()),s=qt.geometry.parameters,r=(i.x/s.width+.5)*je.element.offsetWidth,a=(.5-i.y/s.height)*je.element.offsetHeight;return{distance:t.distance,button:((c=(o=Tf(je.element,r,a))==null?void 0:o.closest)==null?void 0:c.call(o,"[data-k]"))||null}}function oh(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return Vi(),e?(mi={key:e,button:n,shift:Yn},ah(e,n,Jl),Yy(e)&&(na=performance.now()+Xy),!0):!1}function Vi(){let n=mi;mi=null,na=0,n&&ah(n.key,n.button,Bo,n.shift)}rt("pinchcancel",Vi);function $y(n){var i,s;if(!mi)return!1;let e=Of(he.x,he.y);if(!e)return Vi(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==mi.key?(Vi(),oh(e.button)):(na&&n>=na&&(ah(mi.key,mi.button,Df),na=n+qy),!0)}var ff="";fs((n,e)=>{let t=`${ve.winScale}:${ve.winDist}`;if(ff!==t&&(ff=t,$n()),ra(),Kl(n),mi&&$y(e),An&&he.mode==="drag"&&(Kr(An.hit,"down"),An=null),Ke&&he.active&&he.down){let i=gr(he.x,he.y);i&&i.win===Ke.win&&!i.handle&&!i.resize&&xs(i,2)}if((At.win||tt.win&&tt.source!=="fist")&&he.active&&he.down){let i=ur(e);At.win&&Ef(i.x,i.y),tt.win&&tt.source!=="fist"&&th(i.x,i.y)}if(an.start&&he.active&&he.down){let i=ur(e);nh(i.x,i.y)}for(let i of Ie)i.hidden||i.apply()});if(xe){let n=function(){try{pr=JSON.parse(window.NativeXR.battery()),Qr()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?Rn(!0,{nativeId:e}):(et==null?void 0:et.nativeId)!==e&&Rn(!1)},window.nextvrAppFocus=e=>Rn(!0,{nativeId:e}),n(),setInterval(n,3e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var at=null,Fo=new Map,zo=new Set,ch={hands:[],consumed:new Set,scaleX:1,scaleY:1},Zr=null,Xl=0,pf=350,Zy=240;function jl(n,e){$e.updateMatrixWorld(!0),Xe.updateMatrixWorld(!0);let t=new Ui;return t.setFromCamera(new qe(n*2-1,1-e*2),$e),t}function ql(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Ql(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new P),s=n.curve>0?Uo(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function Jy(n,e){let t=n.obj.getWorldPosition(new P),i=new P(0,0,1).transformDirection(n.obj.matrixWorld),s=new Xt().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new P);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),c=n.curveRadius,l=o.x*o.x+o.z*o.z;if(l<1e-9)return e.intersectPlane(s,new P);let h=2*(a.x*o.x+(a.z-c)*o.z),u=a.x*a.x+(a.z-c)*(a.z-c)-c*c,d=h*h-4*l*u;if(d<0)return e.intersectPlane(s,new P);let m=Math.sqrt(d);for(let g of[(-h-m)/(2*l),(-h+m)/(2*l)]){if(!(g>0))continue;let x=a.clone().addScaledVector(o,g);if(!(Math.abs(x.x)>c+1e-6||x.z>c))return x.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new P)}function mf(n){let e=null;for(let t of Ie){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new P),s=Jy(t,n.ray);if(!s)continue;let{local:r,scale:a}=Ql(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}function gf(n=!1,e=ch){let t=at;t!=null&&t.down&&(xs({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(zo.add(t.id),e.consumed.add(t.id))),at=null}rt("phonehands",n=>{var o,c;ch=n;let e=new Set(n.hands.map(l=>l.id));for(let l of Fo.keys())e.has(l)||Fo.delete(l);for(let l of zo){let h=n.hands.find(u=>u.id===l);!h||!h.pinching?zo.delete(l):n.consumed.add(l)}if(tt.win&&tt.source==="fist"){let l=n.hands.find(h=>h.id===tt.hand);if(!l||!l.fist||!Ie.includes(tt.win)||(o=tt.win)!=null&&o.hidden)ki();else{n.consumed.add(l.id);let h=ql(l,n,!0);th(h.x,h.y)}}let t=performance.now();if(!(tt.win&&tt.source==="fist")){let l=n.hands.find(h=>!h.fist);if(l){let h=ql(l,n),u=mf(jl(h.x,h.y));if(u){let{local:d,scale:m}=Ql(u.win,u.point),g=u.win;(Math.abs(d.x)*m.x>g.w*m.x/2-.06||Math.abs(d.y)*m.y>g.h*m.y/2-.06)&&(Zr=u.win,Xl=t)}}}for(let l of Ie)(l!==Zr||t-Xl>pf)&&l.shell.classList.remove("phone-grab-hover");Zr&&t-Xl<=pf?Zr.shell.classList.add("phone-grab-hover"):Zr=null;for(let l of n.hands){let h=Fo.get(l.id)||!1;if(Fo.set(l.id,l.fist),!tt.win&&!At.win&&l.fist&&!h){let u=ql(l,n,!0),d=mf(jl(u.x,u.y));d&&(((c=he.hand)==null?void 0:c.id)===l.id&&Ol(),eh(d.win,u.x,u.y,"fist",l.id)&&n.consumed.add(l.id))}}let i=null;for(let l of n.hands){if(n.consumed.has(l.id)||!l.head||l.head.length!==63)continue;let h=new P().fromArray(l.head,24);if(!(h.length()>.7)){h.applyMatrix4($e.matrixWorld);for(let u of Ie){if(u.hidden)continue;let d=Ql(u,h),m=(at==null?void 0:at.win)===u&&at.id===l.id,g=m?.08:.02,x=m?.26:.11;d.d>x||d.d<-.12||Math.abs(d.local.x)*d.scale.x>u.w*d.scale.x/2+g||Math.abs(d.local.y)*d.scale.y>u.h*d.scale.y/2+g||(!i||m||!i.current&&Math.abs(d.d)<Math.abs(i.d))&&(i={...d,id:l.id,win:u,point:h,current:m})}}}if(!i&&at&&e.has(at.id)&&Ie.includes(at.win)&&!at.win.hidden&&t-at.lastSeen<=Zy&&(i={...at,current:!0,held:!0}),!i){gf(!e.has(at==null?void 0:at.id),n);return}i.current?(at.d+=(i.d-at.d)*.45,at.u+=(i.u-at.u)*.45,at.v+=(i.v-at.v)*.45,i.held||(at.lastSeen=t)):(gf(!1,n),at={...i,down:!1,previousD:i.d,lastSeen:t});let s=at,r=s.u>=0&&s.u<=1&&s.v>=0&&s.v<=1,a={win:s.win,u:Math.max(0,Math.min(1,s.u)),v:Math.max(0,Math.min(1,s.v))};!s.down&&r&&s.d<=.012&&s.previousD>.012?(he.down&&Ol(),on(s.win),xs(a,0),s.down=!0):s.down&&(s.d>=.035||!r)?(xs(a,1),s.down=!1,n.hands.some(l=>l.id===s.id&&l.pinching)&&(zo.add(s.id),n.consumed.add(s.id))):s.down&&xs(a,2),s.previousD=s.d,s.down&&(n.blockFar=!0,n.consumed.add(s.id))});var xf=0,vf="";fs((n,e)=>{var r,a,o,c;if(!xe||e-xf<16)return;xf=e;let t=ch,i=[];for(let l of t.hands){if((at==null?void 0:at.id)===l.id&&at.down){let g=at,x=new P((g.u-.5)*g.win.w,(.5-g.v)*g.win.h,0).applyMatrix4(g.win.obj.matrixWorld);i.push({id:l.id,end:$e.worldToLocal(x).toArray(),direct:!0,down:g.down});continue}if(t.consumed.has(l.id)||t.blockFar){i.push({id:l.id,hidden:!0});continue}let h=((r=he.hand)==null?void 0:r.id)===l.id?ur(e):Xr(l.aim),u=jl(h.x,h.y),d=Ie.filter(g=>!g.hidden).flatMap(g=>[g.resizeHit,g.grab,g.hit]);Bi&&d.push(qn,Bn),qt&&je&&!Ho&&d.push(qt);let m=u.intersectObjects(d,!1)[0];i.push({id:l.id,...m?{end:m.point.toArray()}:{},down:((a=he.hand)==null?void 0:a.id)===l.id&&he.down})}let s=JSON.stringify(i);s!==vf&&(vf=s,(c=(o=window.NativeXR).handTargets)==null||c.call(o,s))});var Vo={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3},Go=class{constructor({armMs:e=Vo.armMs,graceMs:t=Vo.graceMs,holdMs:i=Vo.holdMs,progressHoldMs:s=Vo.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var zf="nextvr-game",oa="nextvr-game-menu",gh=["box","sphere","cylinder","cone","plate"],xr=["#a78bfa","#7c6bff","#8de6c8","#ffc45c","#ff6b6b","#63aaff","#eef1f7","#39415a"],xi={minScale:.05,maxScale:6,maxY:8,maxRadius:8},Ky=["move","place","rotate","scale"],kf=n=>`nextvr.game.${n}`,_r=(n,e,t)=>Math.max(e,Math.min(t,n)),Wo=n=>Math.round(n*1e4)/1e4,Bf={box:new Ni(1,1,1),sphere:new fo(.5,24,16),cylinder:new Or(.5,.5,1,24,1),cone:new ho(.5,1,24,1),plate:new nn(1,1)},xh=new En({visible:!1}),uh=new Set,jy=n=>{let e="";for(let t=0;t<n.length;t++)e+=String.fromCharCode(n[t]);return btoa(e)},lh=n=>jy(new Uint8Array(n.buffer,n.byteOffset,n.byteLength));function Hf(n){var t;if(!xe||uh.has(n)||!((t=window.NativeXR)!=null&&t.gameMesh))return;let e=Bf[n];e&&(window.NativeXR.gameMesh(n,lh(e.attributes.position.array),lh(e.attributes.normal.array),lh(new Uint16Array(e.index.array))),uh.add(n))}var Tt=[],Wi=null,Jn=!1,ca=null,dh=null,vi="move",ys="box",vr=0,Kn=!1;var _i=()=>Tt.find(n=>n.id===Wi)||null;function la(n){n.proxy.position.copy(n.position),n.proxy.rotation.copy(n.rotation),n.proxy.scale.copy(n.scale),n.proxy.updateMatrixWorld(!0),n.outline&&(n.outline.position.copy(n.position),n.outline.rotation.copy(n.rotation),n.outline.scale.copy(n.scale).multiplyScalar(1.04),n.outline.visible=n.id===Wi),Kn=!0}function Ss(n){Wi=n?n.id:null;for(let e of Tt)e.outline&&(e.outline.visible=e.id===Wi);Kn=!0,yr()}function bs(n,e,t={}){let i=gh.includes(n)?n:"box";Hf(i);let s={id:t.id||`o${++vr}`,kind:i,name:t.name||`${Gf(i)} ${Tt.length+1}`,color:t.color||xr[Tt.length%xr.length],position:e.clone(),rotation:new Fn(...t.rotation||[0,0,0],"YXZ"),scale:new P(...t.scale||[.4,.4,.4])};if(typeof t.id=="string"){let r=parseInt(t.id.slice(1),10);r>vr&&(vr=r)}return s.proxy=new Ht(Bf[i],xe?xh:new En({color:s.color})),s.proxy.userData.objectId=s.id,Xe.add(s.proxy),xe||(s.outline=new lo(new uo(new Ni(1,1,1)),new Ur({color:16777215})),s.outline.visible=!1,Xe.add(s.outline)),Tt.push(s),la(s),s}function Qy(n){let e=n||_i();if(!e)return!1;let t=Tt.indexOf(e);return t<0?!1:(Tt.splice(t,1),Xe.remove(e.proxy),e.proxy.material!==xh&&e.proxy.material.dispose(),e.outline&&(Xe.remove(e.outline),e.outline.geometry.dispose()),Wi===e.id&&(Wi=null),Kn=!0,yr(),!0)}function vh(){for(let n of Tt)Xe.remove(n.proxy),n.outline&&(Xe.remove(n.outline),n.outline.geometry.dispose());Tt=[],Wi=null,Kn=!0}function eb(n,e){let t=n||_i();return t?(t.color=e,t.proxy.material!==xh&&t.proxy.material.color.set(e),Kn=!0,yr(),!0):!1}function Vf(n,e){let t=n||_i();if(!t)return!1;let i=_r(e,xi.minScale,xi.maxScale);return t.scale.set(i,i,i),la(t),yr(),!0}function tb(n,e,t=null){let i=n||_i();return i?(i.rotation.y=e,t!=null&&(i.rotation.x=_r(t,-Math.PI/2,Math.PI/2)),la(i),!0):!1}function Gf(n){return I(`kind.${n}`)||n}function Wf(n){let e=n.position;for(let i of["x","y","z"])Number.isFinite(e[i])||(e[i]=0);e.y=_r(e.y,0,xi.maxY);let t=Math.hypot(e.x,e.z);t>xi.maxRadius&&(e.x*=xi.maxRadius/t,e.z*=xi.maxRadius/t);for(let i of["x","y","z"])n.scale[i]=_r(n.scale[i],xi.minScale,xi.maxScale)}function nb(){return Xe.updateMatrixWorld(!0),JSON.stringify(Tt.map(n=>{let e=n.proxy.matrixWorld.elements;return{k:n.kind,s:n.id===Wi?1:0,c:n.color,m:Array.from(e,Wo)}}))}var qo=null;function ha(){var e;if(!xe||!((e=window.NativeXR)!=null&&e.gameFrame))return;let n=nb();n!==qo&&(qo=n,window.NativeXR.gameFrame(n))}fs(()=>{!Jn||!Kn||(Kn=!1,ha())});function Xf(n="sandbox"){var e;if(Jn)return!1;dh={windows:Ie.map(t=>({win:t,hidden:t.hidden})),dockHidden:Rf(),keyboard:Nf(),focus:((e=bf())==null?void 0:e.id)||null};for(let t of Ie)t.setHidden(!0);return rh(!0),ih(!0),document.documentElement.classList.add("game-on"),Jn=!0,ca=n,vr=0,sb(n),_h.reset(),aa.clear(),bh(),rb(),st("game",{active:!0,id:n}),!0}function qf(){var t,i;if(!Jn)return!1;Ms();for(let s of[...Ie])(s.id===zf||s.id===oa)&&Pn(s);vh(),xe&&(qo=null,(i=(t=window.NativeXR)==null?void 0:t.gameFrame)==null||i.call(t,"[]")),Jn=!1,lb(),document.documentElement.classList.remove("game-on");let n=dh;if(dh=null,n){let s=new Set(n.windows.map(a=>a.win));for(let a of[...Ie])!s.has(a)&&!a.onboarding&&Pn(a);ih(n.dockHidden);for(let{win:a,hidden:o}of n.windows)Ie.includes(a)&&a.setHidden(o);n.keyboard&&rh(!1);let r=Ie.find(a=>a.id===n.focus);r&&on(r)}let e=ca;return ca=null,_h.reset(),st("game",{active:!1,id:e}),!0}var ib=n=>({i:n.id,k:n.kind,n:n.name,c:n.color,p:n.position.toArray().map(Wo),r:[n.rotation.x,n.rotation.y,n.rotation.z].map(Wo),s:n.scale.toArray().map(Wo)});function Ms(){if(!ca)return!1;try{return localStorage.setItem(kf(ca),JSON.stringify({v:1,seq:vr,objects:Tt.map(ib)})),!0}catch{return!1}}function sb(n){vh();let e=null;try{e=JSON.parse(localStorage.getItem(kf(n))||"null")}catch{e=null}let t=Array.isArray(e==null?void 0:e.objects)?e.objects:null;if(t&&t.length){vr=e.seq||0;for(let i of t)!i||!Array.isArray(i.p)||i.p.length!==3||bs(gh.includes(i.k)?i.k:"box",new P(...i.p),{id:i.i,name:i.n,color:i.c,rotation:i.r,scale:i.s})}else fh();Tt.length||fh(),Ss(Tt.find(i=>i.kind!=="plate")||Tt[0]||null),Kn=!0,ha()}function fh(){let n=bs("plate",new P(0,0,-1.2),{name:I("game.floor"),color:"#2b3242",rotation:[-Math.PI/2,0,0],scale:[8,8,1]});return bs("box",new P(-.55,.3,-1.5),{scale:[.6,.6,.6],color:xr[0]}),bs("sphere",new P(.5,.35,-1.7),{scale:[.7,.7,.7],color:xr[2]}),bs("cylinder",new P(0,.4,-2.2),{scale:[.5,.8,.5],color:xr[3]}),n}var Hn=null;function rb(){let n=document.createElement("div");return n.className="game-tools",n.innerHTML=`
    <div class="gt-sec">${I("game.place")}</div>
    <div class="gt-row">${gh.map(e=>`<button class="gt-btn" data-place="${e}"><span>${Gf(e)}</span></button>`).join("")}</div>
    <div class="gt-sec">${I("game.edit")}</div>
    <div class="gt-row gt-tools">
      <button class="gt-btn" data-tool="move" aria-pressed="true">${I("tool.move")}</button>
      <button class="gt-btn" data-tool="rotate">${I("tool.rotate")}</button>
      <button class="gt-btn" data-tool="scale">${I("tool.scale")}</button>
      <button class="gt-btn" data-act="duplicate">${I("game.duplicate")}</button>
      <button class="gt-btn danger" data-act="remove">${I("game.remove")}</button>
    </div>
    <div class="gt-row gt-colors">${xr.map(e=>`<button class="gt-color" data-color="${e}" style="background:${e}" aria-label="${e}"></button>`).join("")}</div>
    <div class="gt-status" data-status></div>
    <div class="gt-row">
      <button class="gt-btn" data-act="reset">${I("game.reset")}</button>
      <button class="gt-btn primary" data-act="exit">${I("game.exit")}</button>
    </div>`,n.addEventListener("click",e=>{let t=e.target.closest("button");if(t){if(t.dataset.place){ys=t.dataset.place,ph("place");return}if(t.dataset.tool){ph(t.dataset.tool);return}if(t.dataset.color){eb(null,t.dataset.color);return}switch(t.dataset.act){case"duplicate":{let i=_i();if(!i){Ze(I("game.none"));return}let s=bs(i.kind,i.position.clone().add(new P(.35,0,.15)),{color:i.color,rotation:[i.rotation.x,i.rotation.y,i.rotation.z],scale:i.scale.toArray()});Ss(s),Ze(s.name),Ms();return}case"remove":{let i=_i();if(!i){Ze(I("game.none"));return}let s=i.name;Qy(i),Ze(`${s}: ${I("game.removed")}`),Ms();return}case"reset":vh(),fh(),Ss(Tt[1]||null),ha(),Ms();return;case"exit":qf();return}}}),Hn=fn({id:zf,title:I("game.tools"),node:n,w:760,h:560,free:!0,at:{x:0,y:Ot-.02,z:-Math.max(.62,ve.winDist)}}),Hn==null||Hn.setCurve(0),yr(),Hn}function ph(n){vi=Ky.includes(n)?n:"move";let e=Hn==null?void 0:Hn.el.querySelector(".game-tools");e==null||e.querySelectorAll("[data-tool]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.tool===vi))),e==null||e.querySelectorAll("[data-place]").forEach(t=>t.setAttribute("aria-pressed",String(vi==="place"&&t.dataset.place===ys))),yr()}function yr(){let n=Hn==null?void 0:Hn.el.querySelector(".game-tools");if(!n)return;let e=_i(),t=n.querySelector("[data-status]");t&&(t.textContent=e?`${e.name} \xB7 ${e.scale.x.toFixed(2)} m \xB7 ${Math.round(e.rotation.y*180/Math.PI)}\xB0 \xB7 ${Ff()}`:`${I("game.hint")} \xB7 ${Ff()}`),n.querySelectorAll(".gt-color").forEach(i=>i.setAttribute("aria-pressed",String(!!e&&e.color===i.dataset.color)))}var Ff=()=>I(`tool.${vi}`)||vi,_h=new Go;function ab(){if(Ie.some(t=>t.id===oa))return null;bh();let n=document.createElement("div");n.className="game-menu",n.innerHTML=`
    <div class="gm-t">${I("game.menuTitle")}</div>
    <button class="gm-btn" data-act="continue">${I("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${Ye("settings")}<span>${I("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${I("game.exit")}</button>`,n.addEventListener("click",t=>{let i=t.target.closest("[data-act]");if(i){if(i.dataset.act==="exit"){hh(),qf();return}if(i.dataset.act==="settings"){hh(),st("game:settings");return}hh()}});let e=fn({id:oa,title:I("game.menu"),node:n,w:560,h:470,free:!0,at:{x:0,y:Ot,z:-.55}});return e==null||e.setCurve(0),e}function hh(){let n=Ie.find(e=>e.id===oa);n&&Pn(n)}var ob=()=>Ie.some(n=>n.id===oa),Gi=null;function cb(){if(Gi)return Gi;let n=document.getElementById("hud");return n?(Gi=document.createElement("div"),Gi.id="gameRing",Gi.hidden=!0,Gi.innerHTML="<span></span>",n.appendChild(Gi),Gi):null}function mh(n){let e=cb();if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var lb=()=>mh(0),aa=new Map,vn=new Map,Zn=null,hb=new Xt(new P(0,1,0),0),yh=n=>Xe.worldToLocal(n.clone());function ub(n,e){var s;let t=((s=he.hand)==null?void 0:s.id)===n.id?ur(e):Xr(n.aim||[0,0]);$e.updateMatrixWorld(!0),Xe.updateMatrixWorld(!0);let i=new Ui;return i.setFromCamera(new qe(t.x*2-1,1-t.y*2),$e),{x:t.x,y:t.y,ray:i}}function Xo(n){if(!Tt.length)return null;let e=n.intersectObjects(Tt.map(t=>t.proxy),!1);return e.length&&Tt.find(t=>t.id===e[0].object.userData.objectId)||null}function bh(){vn.clear(),Zn=null}function Yf(n,e,t){let i=e.proxy.getWorldPosition(new P),s=new Xt().setFromNormalAndCoplanarPoint($e.getWorldDirection(new P).negate(),i),r=t.ray.ray.intersectPlane(s,new P),a=r?yh(r):e.position.clone();vn.set(n.id,{id:e.id,mode:vi==="place"?"move":vi,plane:s,offset:e.position.clone().sub(a),start:{x:t.x,y:t.y},yaw:e.rotation.y,pitch:e.rotation.x,size:e.scale.x,moved:!1}),Ss(e)}function $f(n,e){let t=vn.get(n.id);if(!t)return;let i=Tt.find(s=>s.id===t.id);if(!i){vn.delete(n.id);return}if((Math.abs(e.x-t.start.x)>.01||Math.abs(e.y-t.start.y)>.01)&&(t.moved=!0),!!t.moved){if(t.mode==="move"){let s=e.ray.ray.intersectPlane(t.plane,new P);if(!s)return;i.position.copy(yh(s).add(t.offset))}else if(t.mode==="rotate")i.rotation.y=t.yaw+(e.x-t.start.x)*4.2,i.rotation.x=_r(t.pitch-(e.y-t.start.y)*3.1,-Math.PI/2,Math.PI/2);else if(t.mode==="scale"){let s=Math.hypot(e.x-t.start.x,e.y-t.start.y),r=e.x-t.start.x-(e.y-t.start.y)>=0?1:-1;Vf(i,t.size*(1+r*s*2.4));return}Wf(i),la(i)}}function db(n,e,t){let i=(ht.width||1200)/(ht.height||800),s=Math.hypot(n.x-e.x,(n.y-e.y)*i),r=Math.atan2(e.y-n.y,e.x-n.x);if(!Zn||Zn.id!==t.id){Zn={id:t.id,d:s,angle:r,size:t.scale.x,yaw:t.rotation.y};return}s>1e-4&&Zn.d>1e-4&&Vf(t,Zn.size*_r(s/Zn.d,.25,4)),tb(t,Zn.yaw+(r-Zn.angle))}function fb(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}function pb(n,e){let t=(n.hands||[]).filter(l=>{var h;return!((h=n.consumed)!=null&&h.has(l.id))}),i=new Set(t.map(l=>l.id));for(let l of aa.keys())i.has(l)||(aa.delete(l),vn.delete(l));let s=new Map;for(let l of t)s.set(l.id,ub(l,e));let r=t.filter(l=>l.pinching),a=!1;if(r.length>=2&&_i()){let[l,h]=r.slice(0,2).map(d=>s.get(d.id)),u=_i();if(l&&h&&Xo(l.ray)===u&&Xo(h.ray)===u){db(l,h,u),a=!0;for(let d of r.slice(0,2))vn.delete(d.id)}}a||(Zn=null);for(let l of t){let h=s.get(l.id),u=aa.get(l.id)||!1;aa.set(l.id,!!l.pinching);let d=!!l.pinching&&!u,m=!l.pinching&&u;if(!(a&&r.includes(l)))if(d){if(yf(h.x,h.y)){vn.delete(l.id);continue}let g=Xo(h.ray);g?Yf(l,g,h):vi==="place"?Zf(h):Ss(null)}else m?(vn.has(l.id)&&Ms(),vn.delete(l.id)):l.pinching&&vn.has(l.id)&&$f(l,h)}let o=!a&&fb(r),c=_h.update(e,{left:o,right:o});mh(c.progress),c.opened&&ab(),c.closed&&!ob()&&mh(0)}function Zf(n){let e=n.ray.ray.intersectPlane(hb,new P),t=e&&Math.hypot(e.x,e.z)<=xi.maxRadius?e:n.ray.ray.at(1.2,new P),i=yh(t);i.y=Math.max(i.y,0);let s=ys==="plate"?1.4:.5,r=bs(ys,i.clone().setY(i.y+(ys==="plate"?.01:s/2)),{scale:[s,s,s],rotation:ys==="plate"?[-Math.PI/2,0,0]:[0,0,0]});return Wf(r),la(r),Ss(r),ph("move"),Ms(),Ze(r.name),r}rt("phonehands",n=>{Jn&&pb(n,performance.now())});rt("pinchcancel",()=>{bh()});if(!xe){let n=null,e=s=>({x:s.clientX/window.innerWidth,y:s.clientY/window.innerHeight,ray:null}),t=s=>{let r=e(s);$e.updateMatrixWorld(!0),Xe.updateMatrixWorld(!0);let a=new Ui;return a.setFromCamera(new qe(r.x*2-1,1-r.y*2),$e),r.ray=a,r};window.addEventListener("pointerdown",s=>{var o,c;if(!Jn||(c=(o=s.target).closest)!=null&&c.call(o,"button,input,.win-shell"))return;let r=t(s),a=Xo(r.ray);a?(Yf({id:"preview"},a,r),n=a):vi==="place"?Zf(r):Ss(null)}),window.addEventListener("pointermove",s=>{!Jn||!vn.has("preview")||$f({id:"preview"},t(s))});let i=()=>{vn.has("preview")&&(Ms(),vn.delete("preview")),n=null};window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}rt("recenter",()=>{Jn&&(Kn=!0,ha())});function Jf(){if(Jn){qo=null;for(let n of new Set(Tt.map(e=>e.kind)))uh.delete(n);for(let n of new Set(Tt.map(e=>e.kind)))Hf(n);Kn=!0,ha()}}var Kf={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function jf(n){return Kf[n]||Kf.landscape}function Qf(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return jf(n==null?void 0:n.shape)}function mb(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function Mh(n){let e=mb(Qf(n));return{w:e.w+2,h:e.h+116}}var gb=400,rp=3;function wh(n,e){if(e!=null&&e.shape)return e.shape;let t=Rt.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var ut={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:rp,sdk:0,recents:[],library:0,launch:null},Rt={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},_n=new Map,Sh=new Set,ep=0,tp="";var Eh=n=>ut.sessions.find(e=>e.pkg===n)||null,xb=()=>ut.sessions.filter(n=>n.alive),vb=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function yi(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{Ze(I("appCommandFailed"))}}function _b(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(ut.sessions=Array.isArray(e.sessions)?e.sessions:[],ut.shizuku=e.shizuku||ut.shizuku,ut.input=e.input||ut.input,ut.capacity=e.capacity||rp,ut.recents=Array.isArray(e.recents)?e.recents:[],ut.sdk=e.sdk||ut.sdk,ut.launch=e.launch||null,ut.diagnostics=e.diagnostics||ut.diagnostics,e.icons!=null&&e.icons!==Rt.icons&&(Rt.icons=e.icons,Rt.loaded=!1),yb(),st("appsState"))}function yb(){let n=new Set;for(let e of ut.sessions)if(e.state!=="stopped"){if(e.state==="suspended"){np(e.pkg,!0);continue}n.add(e.pkg),_n.has(e.pkg)?ap(e):bb(e)}for(let e of[..._n.keys()])n.has(e)||np(e,!0);Yo(!0)}function bb(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?I("appMirrorBadge"):I("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(d,m,g)=>{let x=document.createElement("button");return x.className="app-key",x.title=m,x.setAttribute("aria-label",m),x.innerHTML=Ye(g),x.onclick=()=>yi({cmd:"key",pkg:n.pkg,key:d}),x},a=document.createElement("button");a.className="app-key",a.title=I("appKeyboard"),a.dataset.act="keys",a.innerHTML=Ye("keyboard"),a.onclick=()=>Ab(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=I("appRotate"),o.setAttribute("aria-label",I("appRotate")),o.innerHTML=Ye("rotate"),o.onclick=()=>wb(n.pkg),t.append(i,s,r("back",I("appBack"),"back"),r("home",I("appHome"),"top"),r("recents",I("appRecents"),"appGrid"),a,o);let c=document.createElement("div");c.className="app-surface",c.dataset.nativeApp=n.pkg,c.dataset.aspect=String(n.display&&n.display.aspect||16/9),c.dataset.shape=wh(n.pkg,n);let l=document.createElement("div");l.className="app-state",e.append(t,c),c.append(l);let h=Mh(n),u=fn({id:vb(n.pkg),title:n.title,node:e,w:h.w,h:h.h});_n.set(n.pkg,{win:u,surface:c,status:l,badge:i,session:n}),ap(n)}function ap(n){var r,a;let e=_n.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?I("appMirrorBadge"):I("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:I("appStarting"),creating:I("appStarting"),launching:I("appStarting"),running:"",failed:n.error?Sb(n):I("appFailed")};n.mode==="display"&&((r=ut.shizuku)!=null&&r.binding||!((a=ut.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=I("appWaitingService"),i.creating=I("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=I("appMirrorStarting"),i.creating=I("appMirrorStarting"),i.launching=I("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&Mb.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=I("appOpenOnPhone"),o.onclick=()=>yi({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var Mb=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function Sb(n){let e={shizuku_unavailable:I("appNeedShizuku"),shizuku_denied:I("appShizukuDenied"),shizuku_blocked:I("appShizukuBlocked"),display_refused:I("appDisplayRefused"),display_failed:I("appDisplayFailed"),no_launcher_activity:I("appNoLauncher"),consent_denied:I("appConsentDenied"),mirror_stopped:I("appMirrorStopped"),mirror_failed:I("appMirrorFailed"),mirror_refused:I("appMirrorFailed"),projection_failed:I("appMirrorFailed"),display_empty:I("appDisplayEmpty"),app_not_running:I("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?I("appSurfaceFailed"):e[t]||`${I("appFailed")}: ${t}`}function np(n,e){let t=_n.get(n);t&&(_n.delete(n),e&&Sh.add(n),Pn(t.win),Sh.delete(n))}rt("wins",()=>{for(let n of[..._n.keys()]){let e=_n.get(n);Sh.has(n)||Ie.includes(e.win)||(_n.delete(n),yi({cmd:"close",pkg:n}))}st("appsState")});function op(n){n&&yi({cmd:"open",pkg:n,shape:wh(n,Eh(n))})}function wb(n){var a;let e=_n.get(n),t=Eh(n),s=((e==null?void 0:e.surface.dataset.shape)||wh(n,t))==="portrait"?"landscape":"portrait",r=Mh({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),yi({cmd:"shape",pkg:n,shape:s}),Yo(!0)}function ip(){yi({cmd:"shizuku"})}function Eb(){Rt.loaded=!1,yi({cmd:"refresh"})}function Ab(n){Rn(!0,{nativeId:"app:"+n})}function Ah(n){var e,t;if(Rt.loaded&&!n)return Rt;Rt.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,Rt.query,Rt.showSystem),s=JSON.parse(i||'{"apps":[]}');Rt.apps=Array.isArray(s.apps)?s.apps:[],Rt.shown=s.shown||Rt.apps.length,Rt.total=s.total||Rt.apps.length,Rt.icons=s.icons||Rt.icons}catch{Rt.apps=[]}return st("appsState"),Rt}function Yo(n){let e=[];for(let[i,s]of _n)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===tp||(tp=t,yi({cmd:"sync",windows:e}))}function Tb(){ep||(ep=setInterval(()=>{_n.size&&Yo(!1)},gb))}rt("wins",()=>Yo(!0));var sp={install:()=>I("shizukuInstall"),start:()=>I("shizukuStart"),update:()=>I("shizukuUpdate"),ask:()=>I("shizukuAsk"),denied:()=>I("shizukuDenied"),rebind:()=>I("shizukuRebind"),ready:()=>I("shizukuReady"),unknown:()=>I("shizukuUnknown")},Rb=new Set(["hosted","permission","capture"]);function Cb(){let n=ut.shizuku||{};return Rb.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function cp(){var h;let n=ut.shizuku||{},e=Cb();if(e==="hosted"&&(n.ready||n.binding))return null;let t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>I("routeHosted"),permission:()=>I("routePermission"),capture:()=>I("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(sp[n.state]||sp.unknown)(),s.appendChild(a),e==="capture"&&!((h=ut.input)!=null&&h.accessibility)){let u=document.createElement("small");u.textContent=I("appCaptureInput"),s.appendChild(u)}else if(n.detail){let u=document.createElement("small");u.textContent=n.detail,s.appendChild(u)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=I("shizukuGrant"),o.onclick=()=>ip()):(o.textContent=I("shizukuRecheck"),o.onclick=()=>{Eb(),ip()}),t.appendChild(o);let c=document.createElement("button");c.className="az-btn ghost",c.textContent=I("appSelfTest"),c.onclick=async()=>{var u;c.disabled=!0;try{await yi({cmd:"selftest"});let d=(u=ut.diagnostics)==null?void 0:u.selfTest;d&&Ze(d.ok?I("appSelfTestOk"):I("appSelfTestFailed"))}catch{Ze(I("appCommandFailed"))}finally{c.disabled=!1}},t.appendChild(c);let l=document.createElement("button");return l.className="az-btn ghost",l.textContent=I("appDiagnostics"),l.onclick=()=>{let u=t.querySelector(".az-caps");if(u){u.remove();return}let d=document.createElement("pre");d.className="az-caps",d.textContent=Pb(),d.onclick=()=>Lb(d.textContent),t.appendChild(d)},t.appendChild(l),t}function Pb(){var i;let n=ut.shizuku||{},e=ut.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||ut.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...ut.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=ut.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||ut.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function Lb(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&Ze(I("appDiagnosticsCopied"));return}catch{}}var jn=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function lp(n){let e=Eh(n.pkg),t=`<span class="nm">${jn((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${jn(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${jn(e.state==="suspended"?I("appMinimized"):I("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${jn(I("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${jn(n.pkg)}" data-session="${e?jn(e.state):""}" data-pkg="${jn(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${jn(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${jn(I("androidApps"))}">${Ye("device")}</span>`+r+s+`</span><span class="lib-label">${jn(n.label||n.pkg)}</span></button>`}function hp(n){let e=_n.get(n);e&&on(e.win)}function up(){return xb().length}function dp(){return Rt.apps}function fp(){xe&&(window.nextvrApps=_b,Tb(),rt("lang",()=>{Rt.loaded=!1,st("appsState")}))}var fe=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var Ib=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Db=n=>{if(xe)return zt("browser-extra",I("browser"),n);try{window.open(n,"_blank","noopener")}catch{Ze("Bloqueado pelo navegador")}};function zt(n,e,t,i){let s=fe("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=fe("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let a=fe("input","fld");a.value=t,a.placeholder=I("search");let o=fe("button","go",Ye("enter"));o.setAttribute("aria-label",I("open")),o.title=I("open");let c=fe("button","go",Ye("external"));c.setAttribute("aria-label",I("open")),c.title=I("open"),c.style.background="rgba(255,255,255,.12)",c.style.color="#fff",r.append(a,o,c);let l=fe("div","warn",i||"");l.style.cssText+="margin:12px 14px 0;display:none";let h=fe("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=fe(xe?"div":"iframe");xe&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,l,h);let d=m=>{let g=(m||"").trim();if(g){if(/^https?:\/\//i.test(g)||(g=/\.\w{2,}($|\/)/.test(g)?"https://"+g:"https://duckduckgo.com/?q="+encodeURIComponent(g)),a.value=g,xe){u.dataset.url=g,l.style.display="none";return}u.src=g,l.style.display="block",l.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};return o.onclick=()=>d(a.value),a.addEventListener("keydown",m=>{m.key==="Enter"&&d(a.value)}),a.addEventListener("focus",()=>Rn(!0,a)),c.onclick=()=>Db(a.value),d(t),fn({id:n,title:e,node:s})}var $o=[];function xp(){let n=fe("div","pad"),e=fe("div");e.innerHTML=`<h2>${I("gallery")}</h2><p class="sub">${I("photosHelp")}</p>`;let t=fe("button","go",I("pickPhotos")),i=fe("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=fe("div","grid4");s.style.marginTop="20px";let r=fe("div");r.style.cssText="margin-top:18px";let a=()=>{if(s.innerHTML="",!$o.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${I("noPhotos")}</p>`;return}$o.forEach((o,c)=>{let l=fe("button","thumb");l.innerHTML=`<img src="${o}" alt="">`,l.onclick=()=>{r.innerHTML=`<img src="${o}" style="width:100%;border-radius:16px">`},s.appendChild(l)})};return t.onclick=()=>i.click(),i.onchange=()=>{for(let o of i.files)$o.push(URL.createObjectURL(o));a(),Ze($o.length+" fotos")},a(),n.append(e,t,i,s,r),n.append(fe("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),fn({id:"gallery",title:I("gallery"),node:n})}function Ft(n,e,t){let i=fe("div","opt");return i.append(fe("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function Th(n,e){let t=fe("button","sw");return t.dataset.on=ve[n]?"1":"0",t.onclick=()=>{ve[n]=ve[n]?0:1,t.dataset.on=ve[n]?"1":"0",lr(),e&&e(ve[n])},t}function ws(n,e,t,i,s){let r=fe("input");return r.type="range",r.min=e,r.max=t,r.step=i,r.value=ve[n],r.oninput=()=>{ve[n]=+r.value,lr(),s&&s(ve[n])},r}function da(){let n=fe("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let e=fe("div","tabs");e.style.padding="18px 24px 0";let t=fe("div","pad");t.style.paddingTop="6px",n.append(e,t);let i=[[I("general"),()=>{t.innerHTML=`<h2>${I("general")}</h2><p class="sub">Central de controle do espa\xE7o NextVR</p>`;let a=fe("div","quick-scenes");for(let u of Pl().filter(d=>["tropical","lakeside"].includes(d.id))){let d=fe("button","quick-scene");d.dataset.env=u.id,d.style.backgroundImage=`linear-gradient(0deg,rgba(4,8,16,.76),transparent 70%),url('${u.thumb}')`,d.innerHTML=`<span>${u.name}</span><small>Panorama 360\xB0</small>`,d.setAttribute("aria-pressed",String(ve.env===u.id)),d.onclick=()=>{Br(u.id),a.querySelectorAll(".quick-scene").forEach(m=>m.setAttribute("aria-pressed",String(m===d)))},a.appendChild(d)}t.append(a);let o=fe("div","card"),c=fe("button","seg-btn",Ao(ve.lang||"pt").label);c.onclick=()=>{let u=fn({id:"language-pick",title:I("langTitle"),w:880,h:660,node:Ep(ve.lang||"pt",d=>{Cl(d),Ze(I("langChanged")),r(),Pn(u)},!0)})},o.append(Ft(I("language"),"Idioma da interface do NextVR",c)),o.append(Ft("FPS","Mostrar o contador de desempenho",Th("showFps")));let l=fe("button","sw"),h=()=>{l.dataset.on=ve.env==="passthrough"?"1":"0"};l.onclick=()=>{Ll(ve.env!=="passthrough"),h(),a.querySelectorAll(".quick-scene").forEach(u=>u.setAttribute("aria-pressed",String(u.dataset.env===ve.env)))},h(),o.append(Ft(I("envPassOn"),"Use a c\xE2mera do aparelho como fundo",l)),t.append(o)}],[I("hands"),()=>{t.innerHTML=`<h2>${I("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let a=fe("div","card");a.append(Ft(I("on"),"\xDAnica entrada da interface VR",fe("span","note","Sempre ativo"))),a.append(Ft(I("sens"),"MediaPipe nativo \xB7 c\xE2mera traseira",fe("span","note","2 m\xE3os \xB7 21 landmarks"))),a.append(Ft("Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",Th("handDraw"))),a.append(Ft("Pinch","Entrada nativa est\xE1vel com histerese",fe("span","note","0.30 / 0.48"))),a.append(Ft("Detector","MediaPipe Tasks Vision, 2 m\xE3os por frame",fe("span","note","NextVR"))),t.append(a)}],[I("windows"),()=>{t.innerHTML=`<h2>${I("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let a=fe("div","card");a.append(Ft(I("curve"),"1 = encara o centro; menor = mais aberta",ws("winCurve",0,1,.05))),a.append(Ft("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",ws("winTilt",0,1.5,.05))),a.append(Ft(I("scale"),"Tamanho das janelas",ws("winScale",.6,1.6,.05))),a.append(Ft(I("dist"),"Dist\xE2ncia do arco",ws("winDist",xe?.6:1.5,xe?1.8:3.4,.05))),a.append(Ft(I("win360"),I("win360k"),ws("win360K",.2,1.15,.05))),a.append(Ft(I("win360All"),"O bot\xE3o 360\xB0 na barra da janela troca por janela",Th("win360"))),t.append(a)}],[I("dock"),()=>{t.innerHTML=`<h2>${I("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let a=fe("div","card");a.append(Ft(I("size"),null,ws("dockSize",.7,1.5,.05))),a.append(Ft(I("dist"),null,ws("dockDist",.7,1.5,.05))),t.append(a)}],[I("env"),()=>{t.innerHTML="",t.append(fe("h2",null,I("env"))),t.append(fe("p","sub","Passthrough da c\xE2mera ou um panorama 360\xB0 em volta de voc\xEA."));let a=fe("div","card"),o=fe("button","sw"),c=()=>{o.dataset.on=ve.env==="passthrough"?"1":"0"};o.onclick=()=>{Ll(ve.env!=="passthrough"),c(),h()},c(),a.append(Ft(I("envPassOn"),"Desligado mostra o \xFAltimo panorama (padr\xE3o: lagoa ao p\xF4r do sol)",o)),t.append(a);let l=fe("div","grid3"),h=()=>[...l.children].forEach(u=>u.setAttribute("aria-pressed",String(u.dataset.env===ve.env)));for(let u of Pl()){let d=fe("button","env"+(u.thumb?" env-pano":""));d.dataset.env=u.id,d.style.background=u.thumb?`url('${u.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",d.innerHTML=`<span>${u.name}</span>`,d.onclick=()=>{Br(u.id),c(),h()},l.appendChild(d)}h(),t.append(l)}],[I("perf"),()=>{t.innerHTML=`<h2>${I("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let a=fe("div","card"),o=fe("div","seg");for(let[c,l]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=fe("button",null,l);h.setAttribute("aria-pressed",ve.quality===c),h.onclick=()=>{ve.quality=c,lr(),st("quality"),[...o.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},o.appendChild(h)}a.append(Ft(I("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",o)),t.append(a),t.append(fe("p","note","O hand tracking roda na pr\xF3pria cad\xEAncia (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking."))}]],s=0;function r(){e.innerHTML="",i.forEach(([a],o)=>{let c=fe("button",null,a);c.setAttribute("aria-selected",o===s),c.onclick=()=>{s=o,r()},e.appendChild(c)}),i[s][1]()}return r(),fn({id:"settings",title:I("settings"),node:n})}var vp="nextvr.store.installed.v1",_p="nextvr.store.favs.v1",yp="nextvr.lib.recent.v1",Lh=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},ei=Lh(vp),As=Lh(_p),Ts=Lh(yp),jo=()=>{try{localStorage.setItem(vp,JSON.stringify(ei)),localStorage.setItem(_p,JSON.stringify(As)),localStorage.setItem(yp,JSON.stringify(Ts))}catch{}},qi={},fa=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],Qo=n=>fa.find(e=>e.id===n),bp=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"linear-gradient(145deg,#34343a,#111115)",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],Nb=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify","browser","store","gallery","settings"],Rs=n=>{let e=Ie.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null},Ub={youtube:()=>zt("youtube","YouTube","https://m.youtube.com/"),browser:()=>zt("browser",I("browser"),"https://duckduckgo.com/"),store:()=>Mp(),gallery:()=>xp(),settings:()=>da(),discord:()=>zt("discord","Discord","https://discord.com/app"),netflix:()=>zt("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>zt("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>zt("twitch","Twitch","https://www.twitch.tv/"),prime:()=>zt("prime","prime video","https://www.primevideo.com/"),pluto:()=>zt("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>zt("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>zt("instagram","Instagram","https://www.instagram.com/"),x:()=>zt("x","X Twitter","https://x.com/"),facebook:()=>zt("facebook","Facebook","https://www.facebook.com/"),telegram:()=>zt("telegram","Telegram","https://web.telegram.org/"),spotify:()=>zt("spotify","Spotify","https://open.spotify.com/")},Xi="home",Ob=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function Fb(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function zb(n){let e=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",t=n.phones?Fb():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${e}<div class="art">${t}</div>`+(ei.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function kb(n){let e=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",t=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${e}${t}</span>`}function pp(n){let e=ei.includes(n.id),t=qi[n.id],i=t!==void 0,s=As.includes(n.id),r=e?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(t)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${zb(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${e?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">${Ye("heart")}</button></div>
    <div class="st-row">${r}</div></article>`}function Bb(){let n=fe("div","st"),t=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${Ob.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${Xi===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${Ye("user")}</button><button class="st-x" data-x aria-label="Fechar">${Ye("x")}</button></div>`;if(Xi==="apps")t+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(Xi==="horizon")t+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(Xi==="wish"){let i=fa.filter(s=>As.includes(s.id));t+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(pp).join("")}</div>`:'<p class="st-note">Selecione o \xEDcone de favorito de um jogo para salv\xE1-lo aqui.</p>'}else{let i=fa.map((a,o)=>`<button class="st-ri" data-rank="${a.id}">${kb(a)}
      <span><span class="st-rk">${o+1}. ${a.name}</span><div class="st-cat">${a.cat}</div>
      <div class="st-st">${ei.includes(a.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=fa.map(pp).join("");t+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${Xi==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(Xi==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=t,n.addEventListener("click",i=>{var a;let s=o=>i.target.closest(o),r;if(r=s("[data-tab]")){Xi=r.dataset.tab,$i();return}if(s("[data-x]")){let o=Ie.find(c=>c.id==="store");o&&Pn(o);return}if(s("[data-ava]")){Ze("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){Xi="games",$i();return}if(s("[data-openlib]")){Sp();return}if(r=s("[data-rank]")){(a=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||a.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let o=r.dataset.fav;As=As.includes(o)?As.filter(c=>c!==o):[...As,o],jo(),$i();return}if(r=s("[data-dl]")){Vb(r.dataset.dl);return}if(r=s("[data-rm]")){Gb(r.dataset.rm);return}if(r=s("[data-open]")){let o=Qo(r.dataset.open);Ze(`Abrindo ${o.name}\u2026 (demonstra\xE7\xE3o)`),Ko(o.id);return}}),n}function $i(){var t;let n=Rs("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(Bb()),n.querySelector(".st").scrollTop=e}function Hb(n){let e=Rs("store");e&&e.querySelectorAll(`[data-dl="${n}"]`).forEach(t=>{t.textContent="BAIXANDO "+Math.round(qi[n]||0)+"%"})}function Mp(){let n=Ie.find(i=>i.id==="store");if(n)return $i(),on(n),n;let e=fe("div");e.style.cssText="height:100%";let t=fn({id:"store",title:"Store",node:e});return $i(),t}function Vb(n){if(qi[n]!==void 0||ei.includes(n))return;qi[n]=0,$i();let e=Qo(n);Ze("Baixando "+e.name+"\u2026");let t=setInterval(()=>{if(qi[n]=Math.min(100,qi[n]+6+Math.random()*11),qi[n]<100){Hb(n);return}clearInterval(t),delete qi[n],ei.includes(n)||ei.push(n),Ko(n,!0),jo(),$i(),Vn(),Ze(e.name+" foi para a biblioteca de apps com sucesso")},170)}function Gb(n){ei=ei.filter(e=>e!==n),Ts=Ts.filter(e=>e!==n),jo(),$i(),Vn(),Ze(Qo(n).name+" removido da biblioteca")}var Jo="recent",Qn="all",ua="",Rh=["all","games","apps","recent"],mp={all:"Todas",games:"Jogos",apps:"Apps",recent:"Recentes"};function Ko(n,e){Ts=[n,...Ts.filter(t=>t!==n)].slice(0,40),jo(),e||Vn()}function Wb(){let n=fa.filter(a=>ei.includes(a.id)).map(a=>({...a,kind:"game"})),e=bp.map(a=>({...a,kind:"app"})),t=[...n,...e],i=a=>{let o=Nb.indexOf(a);return o<0?99:o};t.sort((a,o)=>i(a.id)-i(o.id)),Qn==="games"&&(t=t.filter(a=>a.kind==="game")),Qn==="apps"&&(t=t.filter(a=>a.kind==="app")),Qn==="recent"&&(t=t.filter(a=>Ts.includes(a.id)));let s=ua.trim().toLowerCase();if(s&&(t=t.filter(a=>(a.name+" "+(a.label||"")).toLowerCase().includes(s))),Jo==="az")return[...t].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"));let r=a=>{let o=Ts.indexOf(a.id);return o<0?1e6:o};return[...t].sort((a,o)=>r(a)-r(o))}function Xb(n){let e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${Ye(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${e}<span class="nm fb">${n.label||n.name}</span>`:t;return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function qb(n){let e=n.img?`<img class="lib-game-cover" src="${n.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"";return`<button class="lib-tile game" data-game="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}">${e}<span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span></span><span class="lib-label">${n.name}</span></button>`}function Yb(){let n=Wb(),e=fe("div","lib"),t=mp[Qn]||mp.all,i=(r,a,o)=>`<button class="lib-nav" data-nav="${r}" title="${a}" aria-label="${a}" aria-pressed="${Qn===r}">${Ye(o)}</button>`;e.innerHTML=`<nav class="lib-rail" aria-label="Navega\xE7\xE3o da biblioteca">
      ${i("all","Todas as aplica\xE7\xF5es","appGrid")}
      ${i("apps","Aplicativos","device")}
      ${i("games","Jogos","controller")}
      ${i("recent","Recentes","timer")}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${Ye("store")}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">Apps</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${Ye("search")}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${Ib(ua)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${Jo==="az"?"A\u2013Z":"Recentes"} ${Ye("chevronDown")}</button>
        <button class="lib-pill" data-filter>${t} \xB7 ${n.length} ${Ye("chevronDown")}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${n.map(r=>r.kind==="game"?qb(r):Xb(r)).join("")}</div>
      ${n.length?"":`<div class="lib-empty">${Qn==="games"?"Nenhum jogo baixado ainda. Baixe um na Store.":Qn==="recent"?"Os apps usados recentemente v\xE3o aparecer aqui.":"Nenhum app encontrado."}</div>`}
      </div>
    </section>
    `;let s=e.querySelector('[data-q]:not([data-q="android"])');return s&&ua&&s.classList.add("open"),s&&(s.addEventListener("input",()=>{var a;ua=s.value,Vn(!0);let r=(a=Rs("library"))==null?void 0:a.querySelector('[data-q]:not([data-q="android"])');r&&(r.focus(),r.setSelectionRange(r.value.length,r.value.length))}),s.addEventListener("focus",()=>Rn(!0,s))),e.addEventListener("click",r=>{let a=c=>r.target.closest(c),o;if(a("[data-s]")){let c=e.querySelector('[data-q]:not([data-q="android"])');if(!c)return;c.classList.toggle("open"),c.classList.contains("open")?c.focus():(ua="",c.value="",Vn());return}if(o=a("[data-nav]")){Qn=o.dataset.nav,Vn();return}if(a("[data-sort]")){Jo=Jo==="az"?"recent":"az",Vn();return}if(a("[data-filter]")){Qn=Rh[(Rh.indexOf(Qn)+1)%Rh.length],Vn();return}if(o=a("[data-game]")){let c=Qo(o.dataset.game);Ko(c.id),Ze(`${c.name}: ${I("game.launching")}`),Xf(c.id);return}if(o=a("[data-app]")){let c=bp.find(h=>h.id===o.dataset.app);if(!c)return;Ko(c.id);let l=Ub[c.id];l?l():Ze(c.name+": sem endere\xE7o cadastrado");return}}),e}function Vn(n){var i;let e=Rs("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(Yb()),e.querySelector(".lib-scroll").scrollTop=t}var Zo="Todos",gp="",$b=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function Zb(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function Ph(n){Ah(!1),n.innerHTML="",n.classList.add("android-launcher");let e=fe("div","android-launcher-head");e.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${Ye("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${Ye("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${Ye("refresh")}</button></div>`;let t=cp(),i=fe("div","android-categories"),s=$b.map(c=>`<button class="android-category" data-category="${c}" aria-pressed="${Zo===c}">${c}</button>`).join("");i.innerHTML=s;let r=fe("div","android-app-scroll"),a=fe("div","android-app-grid"),o=()=>{let c=gp.trim().toLocaleLowerCase("pt-BR"),l=dp().filter(h=>{let u=Zo==="Todos"||Zb(h)===Zo,d=!c||`${h.label||""} ${h.pkg||""}`.toLocaleLowerCase("pt-BR").includes(c);return u&&d});a.innerHTML=l.length?l.map(h=>lp(h)).join(""):`<div class="android-empty">${I("noAndroidApps")}</div>`};o(),r.appendChild(a),n.append(e),t&&n.appendChild(t),n.append(i,r),n.oninput=c=>{c.target.matches(".android-search input")&&(gp=c.target.value,o())},n.onclick=c=>{let l=c.target.closest("[data-category]");if(l){Zo=l.dataset.category,i.querySelectorAll("[data-category]").forEach(u=>u.setAttribute("aria-pressed",String(u===l))),o();return}if(c.target.closest(".android-refresh")){Ah(!0),o();return}let h=c.target.closest("[data-android]");h&&(op(h.dataset.android),hp(h.dataset.android))}}function Jb(){let n=Rs("shizuku");if(n)return Ph(n),on(Ie.find(t=>t.id==="shizuku"));let e=fe("div","android-launcher");return Ph(e),fn({id:"shizuku",title:"Apps do Android",node:e})}function Sp(){let n=Ie.find(i=>i.id==="library");if(n)return Vn(),on(n),n;let e=fe("div");e.style.cssText="height:100%";let t=fn({id:"library",title:I("apps"),node:e});return Vn(),t}var Es=Object.freeze({compass:Ye("compass"),store:Ye("store"),people:Ye("people"),camera:Ye("camera"),gear:Ye("settings"),play:Ye("play"),shizuku:Ye("shizuku")});function wp(){Cf([{kind:"avatar",id:"profile",label:I("profile"),run:da},{kind:"status",id:"status",label:I("settings"),run:da},{kind:"spacer"},{id:"browser",win:"browser",label:I("browser"),svg:Es.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>zt("browser",I("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:I("store"),svg:Es.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Mp},{id:"discord",win:"discord",label:"Discord",svg:Es.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>zt("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:I("gallery"),svg:Es.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:xp},{id:"settings",win:"settings",label:I("settings"),svg:Es.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:da},{id:"youtube",win:"youtube",label:"YouTube",svg:Es.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>zt("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:I("shizuku"),svg:Es.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:Jb},{id:"library",win:"library",launcher:!0,label:I("apps"),run:Sp}])}rt("lang",wp);function Kb(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=up(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=fe("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}fp();rt("appsState",()=>{Kb(),jb()});var Ch=0;function jb(){Ch||(Ch=setTimeout(()=>{Ch=0,Rs("library")&&Vn();let n=Rs("shizuku");n&&Ph(n)},500))}var Qb=document.getElementById("boot"),sS=document.getElementById("bootGo"),Yi=null;Qb.hidden=!0;function eM(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Ep(n,e,t=!1){let i=fe("div",t?"langwin slim":"langwin"),s=a=>Ao(a).label;return(()=>{i.innerHTML=`<div class="lq-head"><span class="lq-pick">${s(n)}</span><span class="lq-title">${I("langTitle")}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${zr.map(a=>`<button class="lang-option${a.table?"":" soon"}" data-lang="${a.id}"
            ${a.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${a.id===n}"><span>${a.label}</span>${a.table?"":`<i>${I("langSoon")}</i>`}</button>`).join("")}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a m\xE3o e fa\xE7a uma pin\xE7a para escolher.</span>
        <button class="lq-go">${I("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(a=>a.onclick=()=>e(a.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function tM(){var e,t;let n=fn({id:"language",title:"Next VR",w:880,h:660,onboarding:!0,node:Ep(ve.lang||eM(),nM)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}rt("handframe",n=>{let e=Yi==null?void 0:Yi.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function nM(n){if(!Yi)return;Cl(n),Yi&&(Pn(Yi),Yi=null),sa(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Hr(),t=ve.handsOn?Wr():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Il(),280)}document.getElementById("btnGyro").onclick=()=>Hr();document.getElementById("btnHand").onclick=()=>$d()?Fl():Wr();rt("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});rt("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});wp();ve.lang?(sa(!0),xe&&(Hr(),ve.handsOn&&Wr()),document.getElementById("perm").hidden=!1,setTimeout(()=>Il(),280)):(sa(!1),document.getElementById("stat").hidden=!0,Yi=tM());xe&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=fi).invalidate)==null||e.call(n),Jf(),Hr(),ve.handsOn&&Wr()},window.nextvrSuspend=()=>{Fl()},rt("hands",()=>{document.getElementById("perm").hidden=!0}));rt("game:settings",()=>da());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
