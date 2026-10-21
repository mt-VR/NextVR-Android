(()=>{var wb=0,Tm=1,Mb=2;var p0=1,Sb=2,Ms=3,Qi=0,ti=1,qn=2;var sr=0,$a=1,Rm=2,Cm=3,Lm=4,Ab=5,Gr=100,Eb=101,Tb=102,Pm=103,Im=104,Rb=200,Cb=201,Lb=202,Pb=203,bh=204,xh=205,Ib=206,Nb=207,Db=208,kb=209,Ob=210,Ub=211,Fb=212,Bb=213,zb=214,Hb=0,Vb=1,Gb=2,Cc=3,Wb=4,qb=5,Xb=6,$b=7,tf=0,Yb=1,jb=2,rr=0,Zb=1,Kb=2,Jb=3,Qb=4,ex=5,tx=6,Nm="attached",nx="detached",m0=300,Za=301,Ka=302,_h=303,wh=304,ad=306,Yr=1e3,fi=1001,Go=1002,vn=1003,Lc=1004;var Fo=1005;var fn=1006,nf=1007;var or=1008;var ar=1009,ix=1010,sx=1011,sf=1012,g0=1013,nr=1014,Ss=1015,Wo=1016,y0=1017,v0=1018,qr=1020,rx=1021,wi=1023,ax=1024,ox=1025,Xr=1026,Ja=1027,lx=1028,b0=1029,cx=1030,x0=1031,_0=1033,zu=33776,Hu=33777,Vu=33778,Gu=33779,Dm=35840,km=35841,Om=35842,Um=35843,w0=36196,Fm=37492,Bm=37496,zm=37808,Hm=37809,Vm=37810,Gm=37811,Wm=37812,qm=37813,Xm=37814,$m=37815,Ym=37816,jm=37817,Zm=37818,Km=37819,Jm=37820,Qm=37821,Wu=36492,eg=36494,tg=36495,dx=36283,ng=36284,ig=36285,sg=36286;var Qa=2300,jr=2301,qu=2302,rg=2400,ag=2401,og=2402,ux=2500;var M0=0,od=1,nl=2,S0=3e3,$r=3001,hx=3200,fx=3201,rf=0,px=1,Mi="",Zt="srgb",bn="srgb-linear",af="display-p3",ld="display-p3-linear",Pc="linear",Vt="srgb",Ic="rec709",Nc="p3";var Ta=7680;var lg=519,mx=512,gx=513,yx=514,A0=515,vx=516,bx=517,xx=518,_x=519,Mh=35044;var cg="300 es",Sh=1035,As=2e3,Dc=2001,lr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dg=1234567,Bo=Math.PI/180,eo=180/Math.PI;function Bi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function In(n,e,t){return Math.max(e,Math.min(t,n))}function of(n,e){return(n%e+e)%e}function wx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Mx(n,e,t){return n!==e?(t-n)/(e-n):0}function zo(n,e,t){return(1-t)*n+t*e}function Sx(n,e,t,i){return zo(n,e,1-Math.exp(-t*i))}function Ax(n,e=1){return e-Math.abs(of(n,e*2)-e)}function Ex(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cx(n,e){return n+Math.random()*(e-n)}function Lx(n){return n*(.5-Math.random())}function Px(n){n!==void 0&&(dg=n);let e=dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ix(n){return n*Bo}function Nx(n){return n*eo}function Ah(n){return(n&n-1)===0&&n!==0}function Dx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kx(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),d=a((e+i)/2),u=r((e-i)/2),h=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*d,l*u,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*u,o*c);break;case"ZXZ":n.set(l*u,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*d,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var il={DEG2RAD:Bo,RAD2DEG:eo,generateUUID:Bi,clamp:In,euclideanModulo:of,mapLinear:wx,inverseLerp:Mx,lerp:zo,damp:Sx,pingpong:Ax,smoothstep:Ex,smootherstep:Tx,randInt:Rx,randFloat:Cx,randFloatSpread:Lx,seededRandom:Px,degToRad:Ix,radToDeg:Nx,isPowerOfTwo:Ah,ceilPowerOfTwo:Dx,floorPowerOfTwo:kc,setQuaternionFromProperEuler:kx,normalize:Tt,denormalize:Ji},Ze=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],p=i[5],g=i[8],y=s[0],f=s[3],m=s[6],x=s[1],b=s[4],M=s[7],S=s[2],T=s[5],A=s[8];return r[0]=a*y+o*x+l*S,r[3]=a*f+o*b+l*T,r[6]=a*m+o*M+l*A,r[1]=c*y+d*x+u*S,r[4]=c*f+d*b+u*T,r[7]=c*m+d*M+u*A,r[2]=h*y+p*x+g*S,r[5]=h*f+p*b+g*T,r[8]=h*m+p*M+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,p=c*r-a*l,g=t*u+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xu.makeScale(e,t)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xu=new lt;function E0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ox(){let n=qo("canvas");return n.style.display="block",n}var ug={};function Ho(n){n in ug||(ug[n]=!0,console.warn(n))}var hg=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fg=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tc={[bn]:{transfer:Pc,primaries:Ic,toReference:n=>n,fromReference:n=>n},[Zt]:{transfer:Vt,primaries:Ic,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ld]:{transfer:Pc,primaries:Nc,toReference:n=>n.applyMatrix3(fg),fromReference:n=>n.applyMatrix3(hg)},[af]:{transfer:Vt,primaries:Nc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(fg),fromReference:n=>n.applyMatrix3(hg).convertLinearToSRGB()}},Ux=new Set([bn,ld]),xt={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ux.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=tc[e].toReference,s=tc[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return tc[n].primaries},getTransfer:function(n){return n===Mi?Pc:tc[n].transfer}};function Ya(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $u(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ra,Oc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ra===void 0&&(Ra=qo("canvas")),Ra.width=e.width,Ra.height=e.height;let i=Ra.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ra}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ya(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ya(t[i]/255)*255):t[i]=Ya(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fx=0,Uc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yu(s[a].image)):r.push(Yu(s[a]))}else r=Yu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Yu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bx=0,Tn=class n extends lr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=fi,s=fi,r=fn,a=or,o=wi,l=ar,c=n.DEFAULT_ANISOTROPY,d=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Bi(),this.name="",this.source=new Uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===$r?Zt:Mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?$r:S0}set encoding(e){Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$r?Zt:Mi}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=m0;Tn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],g=l[9],y=l[2],f=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(p+1)/2,S=(m+1)/2,T=(d+h)/4,A=(u+y)/4,k=(g+f)/4;return b>M&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=A/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=k/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=A/r,s=k/r),this.set(i,s,r,t),this}let x=Math.sqrt((f-g)*(f-g)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-y)/x,this.z=(h-d)/x,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eh=class extends lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$r?Zt:Mi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Es=class extends Eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fc=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Th=class extends Tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==h||c!==p||d!==g){let f=1-o,m=l*h+c*p+d*g+u*y,x=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let S=Math.sqrt(b),T=Math.atan2(S,m*x);f=Math.sin(f*T)/S,o=Math.sin(o*T)/S}let M=o*x;if(l=l*f+h*M,c=c*f+p*M,d=d*f+g*M,u=u*f+y*M,f===1-o){let S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+d*u+l*p-c*h,e[t+1]=l*g+d*h+c*u-o*p,e[t+2]=c*g+d*p+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"YXZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"ZXY":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"ZYX":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"YZX":this._x=h*d*u+c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u-h*p*g;break;case"XZY":this._x=h*d*u-c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(In(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ju=new D,pg=new Ke,Si=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),ic.subVectors(this.max,Po),Ca.subVectors(e.a,Po),La.subVectors(e.b,Po),Pa.subVectors(e.c,Po),Ks.subVectors(La,Ca),Js.subVectors(Pa,La),Fr.subVectors(Ca,Pa);let t=[0,-Ks.z,Ks.y,0,-Js.z,Js.y,0,-Fr.z,Fr.y,Ks.z,0,-Ks.x,Js.z,0,-Js.x,Fr.z,0,-Fr.x,-Ks.y,Ks.x,0,-Js.y,Js.x,0,-Fr.y,Fr.x,0];return!Zu(t,Ca,La,Pa,ic)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,Ca,La,Pa,ic))?!1:(sc.crossVectors(Ks,Js),t=[sc.x,sc.y,sc.z],Zu(t,Ca,La,Pa,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ys=[new D,new D,new D,new D,new D,new D,new D,new D],Oi=new D,nc=new Si,Ca=new D,La=new D,Pa=new D,Ks=new D,Js=new D,Fr=new D,Po=new D,ic=new D,sc=new D,Br=new D;function Zu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Br.fromArray(n,r);let o=s.x*Math.abs(Br.x)+s.y*Math.abs(Br.y)+s.z*Math.abs(Br.z),l=e.dot(Br),c=t.dot(Br),d=i.dot(Br);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var zx=new Si,Io=new D,Ku=new D,pi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Ku)),this.expandByPoint(Io.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vs=new D,Ju=new D,rc=new D,Qs=new D,Qu=new D,ac=new D,eh=new D,Zr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ju.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),Qs.copy(this.origin).sub(Ju);let r=e.distanceTo(t)*.5,a=-this.direction.dot(rc),o=Qs.dot(this.direction),l=-Qs.dot(rc),c=Qs.lengthSq(),d=Math.abs(1-a*a),u,h,p,g;if(d>0)if(u=a*l-o,h=a*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){let y=1/d;u*=y,h*=y,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ju).addScaledVector(rc,h),p}intersectSphere(e,t){vs.subVectors(e.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,i,s,r){Qu.subVectors(t,e),ac.subVectors(i,e),eh.crossVectors(Qu,ac);let a=this.direction.dot(eh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qs.subVectors(this.origin,e);let l=o*this.direction.dot(ac.crossVectors(Qs,ac));if(l<0)return null;let c=o*this.direction.dot(Qu.cross(Qs));if(c<0||l+c>a)return null;let d=-o*Qs.dot(eh);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class n{constructor(e,t,i,s,r,a,o,l,c,d,u,h,p,g,y,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,h,p,g,y,f)}set(e,t,i,s,r,a,o,l,c,d,u,h,p,g,y,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=p,m[7]=g,m[11]=y,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ia.setFromMatrixColumn(e,0).length(),r=1/Ia.setFromMatrixColumn(e,1).length(),a=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*d,p=a*u,g=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,p=l*u,g=c*d,y=c*u;t[0]=h+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,p=l*u,g=c*d,y=c*u;t[0]=h-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,p=a*u,g=o*d,y=o*u;t[0]=l*d,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-h*u,t[8]=g*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+g,t[10]=h-y*u}else if(e.order==="XZY"){let h=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+y,t[5]=a*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Vx)}lookAt(e,t,i){let s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),er.crossVectors(i,di),er.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),er.crossVectors(i,di)),er.normalize(),oc.crossVectors(di,er),s[0]=er.x,s[4]=oc.x,s[8]=di.x,s[1]=er.y,s[5]=oc.y,s[9]=di.y,s[2]=er.z,s[6]=oc.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],p=i[13],g=i[2],y=i[6],f=i[10],m=i[14],x=i[3],b=i[7],M=i[11],S=i[15],T=s[0],A=s[4],k=s[8],v=s[12],_=s[1],P=s[5],N=s[9],O=s[13],C=s[2],R=s[6],F=s[10],H=s[14],z=s[3],W=s[7],Q=s[11],te=s[15];return r[0]=a*T+o*_+l*C+c*z,r[4]=a*A+o*P+l*R+c*W,r[8]=a*k+o*N+l*F+c*Q,r[12]=a*v+o*O+l*H+c*te,r[1]=d*T+u*_+h*C+p*z,r[5]=d*A+u*P+h*R+p*W,r[9]=d*k+u*N+h*F+p*Q,r[13]=d*v+u*O+h*H+p*te,r[2]=g*T+y*_+f*C+m*z,r[6]=g*A+y*P+f*R+m*W,r[10]=g*k+y*N+f*F+m*Q,r[14]=g*v+y*O+f*H+m*te,r[3]=x*T+b*_+M*C+S*z,r[7]=x*A+b*P+M*R+S*W,r[11]=x*k+b*N+M*F+S*Q,r[15]=x*v+b*O+M*H+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],g=e[3],y=e[7],f=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*o*h+i*c*h+s*o*p-i*l*p)+y*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*d-r*l*d)+f*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*d-i*c*d)+m*(-s*o*d-t*l*u+t*o*h+s*a*u-i*a*h+i*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],g=e[12],y=e[13],f=e[14],m=e[15],x=u*f*c-y*h*c+y*l*p-o*f*p-u*l*m+o*h*m,b=g*h*c-d*f*c-g*l*p+a*f*p+d*l*m-a*h*m,M=d*y*c-g*u*c+g*o*p-a*y*p-d*o*m+a*u*m,S=g*u*l-d*y*l-g*o*h+a*y*h+d*o*f-a*u*f,T=t*x+i*b+s*M+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=x*A,e[1]=(y*h*r-u*f*r-y*s*p+i*f*p+u*s*m-i*h*m)*A,e[2]=(o*f*r-y*l*r+y*s*c-i*f*c-o*s*m+i*l*m)*A,e[3]=(u*l*r-o*h*r-u*s*c+i*h*c+o*s*p-i*l*p)*A,e[4]=b*A,e[5]=(d*f*r-g*h*r+g*s*p-t*f*p-d*s*m+t*h*m)*A,e[6]=(g*l*r-a*f*r-g*s*c+t*f*c+a*s*m-t*l*m)*A,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*p+t*l*p)*A,e[8]=M*A,e[9]=(g*u*r-d*y*r-g*i*p+t*y*p+d*i*m-t*u*m)*A,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*m+t*o*m)*A,e[11]=(d*o*r-a*u*r-d*i*c+t*u*c+a*i*p-t*o*p)*A,e[12]=S*A,e[13]=(d*y*s-g*u*s+g*i*h-t*y*h-d*i*f+t*u*f)*A,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*f-t*o*f)*A,e[15]=(a*u*s-d*o*s+d*i*l-t*u*l-a*i*h+t*o*h)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,p=r*d,g=r*u,y=a*d,f=a*u,m=o*u,x=l*c,b=l*d,M=l*u,S=i.x,T=i.y,A=i.z;return s[0]=(1-(y+m))*S,s[1]=(p+M)*S,s[2]=(g-b)*S,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(h+m))*T,s[6]=(f+x)*T,s[7]=0,s[8]=(g+b)*A,s[9]=(f-x)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ia.set(s[0],s[1],s[2]).length(),a=Ia.set(s[4],s[5],s[6]).length(),o=Ia.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ui.copy(this);let c=1/r,d=1/a,u=1/o;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=d,Ui.elements[5]*=d,Ui.elements[6]*=d,Ui.elements[8]*=u,Ui.elements[9]*=u,Ui.elements[10]*=u,t.setFromRotationMatrix(Ui),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=As){let l=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),p,g;if(o===As)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Dc)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=As){let l=this.elements,c=1/(t-e),d=1/(i-s),u=1/(a-r),h=(t+e)*c,p=(i+s)*d,g,y;if(o===As)g=(a+r)*u,y=-2*u;else if(o===Dc)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ia=new D,Ui=new Ce,Hx=new D(0,0,0),Vx=new D(1,1,1),er=new D,oc=new D,di=new D,mg=new Ce,gg=new Ke,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(In(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-In(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gg.setFromEuler(this),this.setFromQuaternion(gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gx=0,yg=new D,Na=new Ke,bs=new Ce,lc=new D,No=new D,Wx=new D,qx=new Ke,vg=new D(1,0,0),bg=new D(0,1,0),xg=new D(0,0,1),Xx={type:"added"},$x={type:"removed"},Gt=class n extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ni,i=new Ke,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new lt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Na.setFromAxisAngle(e,t),this.quaternion.multiply(Na),this}rotateOnWorldAxis(e,t){return Na.setFromAxisAngle(e,t),this.quaternion.premultiply(Na),this}rotateX(e){return this.rotateOnAxis(vg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lc.copy(e):lc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(No,lc,this.up):bs.lookAt(lc,No,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),Na.setFromRotationMatrix(bs),this.quaternion.premultiply(Na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($x)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(bs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,Wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=new D,xs=new D,th=new D,_s=new D,Da=new D,ka=new D,_g=new D,nh=new D,ih=new D,sh=new D,cc=!1,Wa=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fi.subVectors(e,t),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fi.subVectors(s,t),xs.subVectors(i,t),th.subVectors(e,t);let a=Fi.dot(Fi),o=Fi.dot(xs),l=Fi.dot(th),c=xs.dot(xs),d=xs.dot(th),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,p=(c*l-o*d)*h,g=(a*d-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getUV(e,t,i,s,r,a,o,l){return cc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cc=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(a,_s.y),l.addScaledVector(o,_s.z),l)}static isFrontFacing(e,t,i,s){return Fi.subVectors(i,t),xs.subVectors(e,t),Fi.cross(xs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Fi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return cc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cc=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Da.subVectors(s,i),ka.subVectors(r,i),nh.subVectors(e,i);let l=Da.dot(nh),c=ka.dot(nh);if(l<=0&&c<=0)return t.copy(i);ih.subVectors(e,s);let d=Da.dot(ih),u=ka.dot(ih);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Da,a);sh.subVectors(e,r);let p=Da.dot(sh),g=ka.dot(sh);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ka,o);let f=d*g-p*u;if(f<=0&&u-d>=0&&p-g>=0)return _g.subVectors(r,s),o=(u-d)/(u-d+(p-g)),t.copy(s).addScaledVector(_g,o);let m=1/(f+y+h);return a=y*m,o=h*m,t.copy(i).addScaledVector(Da,a).addScaledVector(ka,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=of(e,1),t=In(t,0,1),i=In(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=rh(a,r,e+1/3),this.g=rh(a,r,e),this.b=rh(a,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=T0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}copyLinearToSRGB(e){return this.r=$u(e.r),this.g=$u(e.g),this.b=$u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return xt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(In(Pn.r*255,0,255))*65536+Math.round(In(Pn.g*255,0,255))*256+Math.round(In(Pn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Pn.copy(this),t);let i=Pn.r,s=Pn.g,r=Pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Zt){xt.fromWorkingColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,s=Pn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(dc);let i=zo(tr.h,dc.h,t),s=zo(tr.s,dc.s,t),r=zo(tr.l,dc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new ke;ke.NAMES=T0;var Yx=0,ii=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=$a,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=xh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$a&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==xh&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ta&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ta&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ta&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new D,uc=new Ze,Ut=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ss,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mh&&(e.usage=this.usage),e}};var Bc=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zc=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Xn=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}};var jx=0,_i=new Ce,ah=new Gt,Oa=new D,ui=new Si,Do=new Si,Sn=new D,$n=class n extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?zc:Bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oa).negate(),this.translate(Oa.x,Oa.y,Oa.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Do.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(ui.min,Do.min),ui.expandByPoint(Sn),Sn.addVectors(ui.max,Do.max),ui.expandByPoint(Sn)):(ui.expandByPoint(Do.min),ui.expandByPoint(Do.max))}ui.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Sn.fromBufferAttribute(o,c),l&&(Oa.fromBufferAttribute(e,c),Sn.add(Oa)),s=Math.max(s,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],d=[];for(let _=0;_<o;_++)c[_]=new D,d[_]=new D;let u=new D,h=new D,p=new D,g=new Ze,y=new Ze,f=new Ze,m=new D,x=new D;function b(_,P,N){u.fromArray(s,_*3),h.fromArray(s,P*3),p.fromArray(s,N*3),g.fromArray(a,_*2),y.fromArray(a,P*2),f.fromArray(a,N*2),h.sub(u),p.sub(u),y.sub(g),f.sub(g);let O=1/(y.x*f.y-f.x*y.y);isFinite(O)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(p,-y.y).multiplyScalar(O),x.copy(p).multiplyScalar(y.x).addScaledVector(h,-f.x).multiplyScalar(O),c[_].add(m),c[P].add(m),c[N].add(m),d[_].add(x),d[P].add(x),d[N].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let _=0,P=M.length;_<P;++_){let N=M[_],O=N.start,C=N.count;for(let R=O,F=O+C;R<F;R+=3)b(i[R+0],i[R+1],i[R+2])}let S=new D,T=new D,A=new D,k=new D;function v(_){A.fromArray(r,_*3),k.copy(A);let P=c[_];S.copy(P),S.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(k,P);let O=T.dot(d[_])<0?-1:1;l[_*4]=S.x,l[_*4+1]=S.y,l[_*4+2]=S.z,l[_*4+3]=O}for(let _=0,P=M.length;_<P;++_){let N=M[_],O=N.start,C=N.count;for(let R=O,F=O+C;R<F;R+=3)v(i[R+0]),v(i[R+1]),v(i[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),y=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d),p=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let m=0;m<d;m++)h[g++]=c[p++]}return new Ut(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let h=c[d],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wg=new Ce,zr=new Zr,hc=new pi,Mg=new D,Ua=new D,Fa=new D,Ba=new D,oh=new D,fc=new D,pc=new Ze,mc=new Ze,gc=new Ze,Sg=new D,Ag=new D,Eg=new D,yc=new D,vc=new D,Rt=class extends Gt{constructor(e=new $n,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(oh.fromBufferAttribute(u,e),a?fc.addScaledVector(oh,d):fc.addScaledVector(oh.sub(t),d))}t.add(fc)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(r),zr.copy(e.ray).recast(e.near),!(hc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(hc,Mg)===null||zr.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(wg.copy(r).invert(),zr.copy(e.ray).applyMatrix4(wg),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],m=a[f.materialIndex],x=Math.max(f.start,p.start),b=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=x,S=b;M<S;M+=3){let T=o.getX(M),A=o.getX(M+1),k=o.getX(M+2);s=bc(this,m,e,i,c,d,u,T,A,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){let x=o.getX(f),b=o.getX(f+1),M=o.getX(f+2);s=bc(this,a,e,i,c,d,u,x,b,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let f=h[g],m=a[f.materialIndex],x=Math.max(f.start,p.start),b=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=x,S=b;M<S;M+=3){let T=M,A=M+1,k=M+2;s=bc(this,m,e,i,c,d,u,T,A,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){let x=f,b=f+1,M=f+2;s=bc(this,a,e,i,c,d,u,x,b,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Zx(n,e,t,i,s,r,a,o){let l;if(e.side===ti?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qi,o),l===null)return null;vc.copy(o),vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vc);return c<t.near||c>t.far?null:{distance:c,point:vc.clone(),object:n}}function bc(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ua),n.getVertexPosition(l,Fa),n.getVertexPosition(c,Ba);let d=Zx(n,e,t,i,Ua,Fa,Ba,yc);if(d){s&&(pc.fromBufferAttribute(s,o),mc.fromBufferAttribute(s,l),gc.fromBufferAttribute(s,c),d.uv=Wa.getInterpolation(yc,Ua,Fa,Ba,pc,mc,gc,new Ze)),r&&(pc.fromBufferAttribute(r,o),mc.fromBufferAttribute(r,l),gc.fromBufferAttribute(r,c),d.uv1=Wa.getInterpolation(yc,Ua,Fa,Ba,pc,mc,gc,new Ze),d.uv2=d.uv1),a&&(Sg.fromBufferAttribute(a,o),Ag.fromBufferAttribute(a,l),Eg.fromBufferAttribute(a,c),d.normal=Wa.getInterpolation(yc,Ua,Fa,Ba,Sg,Ag,Eg,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Wa.getNormal(Ua,Fa,Ba,u.normal),d.face=u}return d}var cr=class n extends $n{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(d,3)),this.setAttribute("uv",new Xn(u,2));function g(y,f,m,x,b,M,S,T,A,k,v){let _=M/A,P=S/k,N=M/2,O=S/2,C=T/2,R=A+1,F=k+1,H=0,z=0,W=new D;for(let Q=0;Q<F;Q++){let te=Q*P-O;for(let ie=0;ie<R;ie++){let G=ie*_-N;W[y]=G*x,W[f]=te*b,W[m]=C,c.push(W.x,W.y,W.z),W[y]=0,W[f]=0,W[m]=T>0?1:-1,d.push(W.x,W.y,W.z),u.push(ie/A),u.push(1-Q/k),H+=1}}for(let Q=0;Q<k;Q++)for(let te=0;te<A;te++){let ie=h+te+R*Q,G=h+te+R*(Q+1),$=h+(te+1)+R*(Q+1),Y=h+(te+1)+R*Q;l.push(ie,G,Y),l.push(G,$,Y),z+=6}o.addGroup(p,z,v),p+=z,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function to(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wn(n){let e={};for(let t=0;t<n.length;t++){let i=to(n[t]);for(let s in i)e[s]=i[s]}return e}function Kx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function R0(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}var Jx={clone:to,merge:Wn},Qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ts=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qx,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Hc=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kt=class extends Hc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},za=-90,Ha=1,Rh=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(za,Ha,e,t);s.layers=this.layers,this.add(s);let r=new Kt(za,Ha,e,t);r.layers=this.layers,this.add(r);let a=new Kt(za,Ha,e,t);a.layers=this.layers,this.add(a);let o=new Kt(za,Ha,e,t);o.layers=this.layers,this.add(o);let l=new Kt(za,Ha,e,t);l.layers=this.layers,this.add(l);let c=new Kt(za,Ha,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===As)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vc=class extends Tn{constructor(e,t,i,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Za,super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ch=class extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$r?Zt:Mi),this.texture=new Vc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new Ts({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:sr});r.uniforms.tEquirect.value=t;let a=new Rt(s,r),o=t.minFilter;return t.minFilter===or&&(t.minFilter=fn),new Rh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},lh=new D,t_=new D,n_=new lt,hi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=lh.subVectors(i,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(lh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||n_.getNormalMatrix(e),s=this.coplanarPoint(lh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hr=new pi,xc=new D,$o=class{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=As){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],p=s[8],g=s[9],y=s[10],f=s[11],m=s[12],x=s[13],b=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,f-p,M-m).normalize(),i[1].setComponents(l+r,h+c,f+p,M+m).normalize(),i[2].setComponents(l+a,h+d,f+g,M+x).normalize(),i[3].setComponents(l-a,h-d,f-g,M-x).normalize(),i[4].setComponents(l-o,h-u,f-y,M-b).normalize(),t===As)i[5].setComponents(l+o,h+u,f+y,M+b).normalize();else if(t===Dc)i[5].setComponents(o,u,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xc.x=s.normal.x>0?e.max.x:e.min.x,xc.y=s.normal.y>0?e.max.y:e.min.y,xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function C0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function i_(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,d){let u=c.array,h=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,u,h),c.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,d,u){let h=d.array,p=d._updateRange,g=d.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,h),g.length!==0){for(let y=0,f=g.length;y<f;y++){let m=g[y];t?n.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(u,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}d.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,d),u.version=c.version}}return{get:a,remove:o,update:l}}var Dn=class n extends $n{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,p=[],g=[],y=[],f=[];for(let m=0;m<d;m++){let x=m*h-a;for(let b=0;b<c;b++){let M=b*u-r;g.push(M,-x,0),y.push(0,0,1),f.push(b/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let b=x+c*m,M=x+c*(m+1),S=x+1+c*(m+1),T=x+1+c*m;p.push(b,M,T),p.push(M,S,T)}this.setIndex(p),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
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
#endif`,a_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
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
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h_=`#ifdef USE_BATCHING
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
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y_=`#ifdef USE_IRIDESCENCE
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
#endif`,v_=`#ifdef USE_BUMPMAP
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,T_=`#define PI 3.141592653589793
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
} // validated`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C_=`vec3 transformedNormal = objectNormal;
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
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D_="gl_FragColor = linearToOutputTexel( gl_FragColor );",k_=`
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
}`,O_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q_=`#ifdef USE_GRADIENTMAP
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
}`,X_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z_=`uniform bool receiveShadow;
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
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nw=`PhysicalMaterial material;
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
#endif`,iw=`struct PhysicalMaterial {
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
}`,sw=`
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
#endif`,rw=`#if defined( RE_IndirectDiffuse )
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
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ow=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pw=`#if defined( USE_POINTS_UV )
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
#endif`,mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vw=`#ifdef USE_MORPHNORMALS
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
#endif`,bw=`#ifdef USE_MORPHTARGETS
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
#endif`,xw=`#ifdef USE_MORPHTARGETS
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
#endif`,_w=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ww=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ew=`#ifdef USE_NORMALMAP
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
#endif`,Tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vw=`float getShadowMask() {
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
}`,Gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ww=`#ifdef USE_SKINNING
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
#endif`,qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xw=`#ifdef USE_SKINNING
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
#endif`,$w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kw=`#ifdef USE_TRANSMISSION
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
#endif`,Jw=`#ifdef USE_TRANSMISSION
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,uM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,vM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,AM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,TM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,LM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,IM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,DM=`uniform vec3 color;
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
}`,kM=`uniform float rotation;
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
}`,OM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:a_,alphamap_pars_fragment:o_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:d_,aomap_pars_fragment:u_,batching_pars_vertex:h_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:y_,bumpmap_pars_fragment:v_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:__,clipping_planes_vertex:w_,color_fragment:M_,color_pars_fragment:S_,color_pars_vertex:A_,color_vertex:E_,common:T_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:C_,displacementmap_pars_vertex:L_,displacementmap_vertex:P_,emissivemap_fragment:I_,emissivemap_pars_fragment:N_,colorspace_fragment:D_,colorspace_pars_fragment:k_,envmap_fragment:O_,envmap_common_pars_fragment:U_,envmap_pars_fragment:F_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:K_,envmap_vertex:z_,fog_vertex:H_,fog_pars_vertex:V_,fog_fragment:G_,fog_pars_fragment:W_,gradientmap_pars_fragment:q_,lightmap_fragment:X_,lightmap_pars_fragment:$_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:j_,lights_pars_begin:Z_,lights_toon_fragment:J_,lights_toon_pars_fragment:Q_,lights_phong_fragment:ew,lights_phong_pars_fragment:tw,lights_physical_fragment:nw,lights_physical_pars_fragment:iw,lights_fragment_begin:sw,lights_fragment_maps:rw,lights_fragment_end:aw,logdepthbuf_fragment:ow,logdepthbuf_pars_fragment:lw,logdepthbuf_pars_vertex:cw,logdepthbuf_vertex:dw,map_fragment:uw,map_pars_fragment:hw,map_particle_fragment:fw,map_particle_pars_fragment:pw,metalnessmap_fragment:mw,metalnessmap_pars_fragment:gw,morphcolor_vertex:yw,morphnormal_vertex:vw,morphtarget_pars_vertex:bw,morphtarget_vertex:xw,normal_fragment_begin:_w,normal_fragment_maps:ww,normal_pars_fragment:Mw,normal_pars_vertex:Sw,normal_vertex:Aw,normalmap_pars_fragment:Ew,clearcoat_normal_fragment_begin:Tw,clearcoat_normal_fragment_maps:Rw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:Lw,opaque_fragment:Pw,packing:Iw,premultiplied_alpha_fragment:Nw,project_vertex:Dw,dithering_fragment:kw,dithering_pars_fragment:Ow,roughnessmap_fragment:Uw,roughnessmap_pars_fragment:Fw,shadowmap_pars_fragment:Bw,shadowmap_pars_vertex:zw,shadowmap_vertex:Hw,shadowmask_pars_fragment:Vw,skinbase_vertex:Gw,skinning_pars_vertex:Ww,skinning_vertex:qw,skinnormal_vertex:Xw,specularmap_fragment:$w,specularmap_pars_fragment:Yw,tonemapping_fragment:jw,tonemapping_pars_fragment:Zw,transmission_fragment:Kw,transmission_pars_fragment:Jw,uv_pars_fragment:Qw,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:sM,backgroundCube_vert:rM,backgroundCube_frag:aM,cube_vert:oM,cube_frag:lM,depth_vert:cM,depth_frag:dM,distanceRGBA_vert:uM,distanceRGBA_frag:hM,equirect_vert:fM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:yM,meshbasic_frag:vM,meshlambert_vert:bM,meshlambert_frag:xM,meshmatcap_vert:_M,meshmatcap_frag:wM,meshnormal_vert:MM,meshnormal_frag:SM,meshphong_vert:AM,meshphong_frag:EM,meshphysical_vert:TM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:LM,points_vert:PM,points_frag:IM,shadow_vert:NM,shadow_frag:DM,sprite_vert:kM,sprite_frag:OM},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ki={basic:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Wn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Wn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Wn([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Wn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Wn([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Wn([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Wn([ve.common,ve.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Wn([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ki.physical={uniforms:Wn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var _c={r:0,b:0,g:0};function UM(n,e,t,i,s,r,a){let o=new ke(0),l=r===!0?0:1,c,d,u=null,h=0,p=null;function g(f,m){let x=!1,b=m.isScene===!0?m.background:null;b&&b.isTexture&&(b=(m.backgroundBlurriness>0?t:e).get(b)),b===null?y(o,l):b&&b.isColor&&(y(b,1),x=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ad)?(d===void 0&&(d=new Rt(new cr(1,1,1),new Ts({name:"BackgroundCubeMaterial",uniforms:to(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=xt.getTransfer(b.colorSpace)!==Vt,(u!==b||h!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=b,h=b.version,p=n.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Rt(new Dn(2,2),new Ts({name:"BackgroundMaterial",uniforms:to(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=xt.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,p=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function y(f,m){f.getRGB(_c,R0(n)),i.buffers.color.setClear(_c.r,_c.g,_c.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,y(o,l)},render:g}}function FM(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null),c=l,d=!1;function u(C,R,F,H,z){let W=!1;if(a){let Q=y(H,F,R);c!==Q&&(c=Q,p(c.object)),W=m(C,H,F,z),W&&x(C,H,F,z)}else{let Q=R.wireframe===!0;(c.geometry!==H.id||c.program!==F.id||c.wireframe!==Q)&&(c.geometry=H.id,c.program=F.id,c.wireframe=Q,W=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,k(C,R,F,H),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function y(C,R,F){let H=F.wireframe===!0,z=o[C.id];z===void 0&&(z={},o[C.id]=z);let W=z[R.id];W===void 0&&(W={},z[R.id]=W);let Q=W[H];return Q===void 0&&(Q=f(h()),W[H]=Q),Q}function f(C){let R=[],F=[],H=[];for(let z=0;z<s;z++)R[z]=0,F[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:H,object:C,attributes:{},index:null}}function m(C,R,F,H){let z=c.attributes,W=R.attributes,Q=0,te=F.getAttributes();for(let ie in te)if(te[ie].location>=0){let $=z[ie],Y=W[ie];if(Y===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),$===void 0||$.attribute!==Y||Y&&$.data!==Y.data)return!0;Q++}return c.attributesNum!==Q||c.index!==H}function x(C,R,F,H){let z={},W=R.attributes,Q=0,te=F.getAttributes();for(let ie in te)if(te[ie].location>=0){let $=W[ie];$===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&($=C.instanceColor));let Y={};Y.attribute=$,$&&$.data&&(Y.data=$.data),z[ie]=Y,Q++}c.attributes=z,c.attributesNum=Q,c.index=H}function b(){let C=c.newAttributes;for(let R=0,F=C.length;R<F;R++)C[R]=0}function M(C){S(C,0)}function S(C,R){let F=c.newAttributes,H=c.enabledAttributes,z=c.attributeDivisors;F[C]=1,H[C]===0&&(n.enableVertexAttribArray(C),H[C]=1),z[C]!==R&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,R),z[C]=R)}function T(){let C=c.newAttributes,R=c.enabledAttributes;for(let F=0,H=R.length;F<H;F++)R[F]!==C[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function A(C,R,F,H,z,W,Q){Q===!0?n.vertexAttribIPointer(C,R,F,z,W):n.vertexAttribPointer(C,R,F,H,z,W)}function k(C,R,F,H){if(i.isWebGL2===!1&&(C.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let z=H.attributes,W=F.getAttributes(),Q=R.defaultAttributeValues;for(let te in W){let ie=W[te];if(ie.location>=0){let G=z[te];if(G===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),G!==void 0){let $=G.normalized,Y=G.itemSize,ae=t.get(G);if(ae===void 0)continue;let X=ae.buffer,se=ae.type,pe=ae.bytesPerElement,oe=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||G.gpuType===g0);if(G.isInterleavedBufferAttribute){let we=G.data,q=we.stride,Ht=G.offset;if(we.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ie.locationSize;Pe++)S(ie.location+Pe,we.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Pe=0;Pe<ie.locationSize;Pe++)M(ie.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,X);for(let Pe=0;Pe<ie.locationSize;Pe++)A(ie.location+Pe,Y/ie.locationSize,se,$,q*pe,(Ht+Y/ie.locationSize*Pe)*pe,oe)}else{if(G.isInstancedBufferAttribute){for(let we=0;we<ie.locationSize;we++)S(ie.location+we,G.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let we=0;we<ie.locationSize;we++)M(ie.location+we);n.bindBuffer(n.ARRAY_BUFFER,X);for(let we=0;we<ie.locationSize;we++)A(ie.location+we,Y/ie.locationSize,se,$,Y*pe,Y/ie.locationSize*we*pe,oe)}}else if(Q!==void 0){let $=Q[te];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(ie.location,$);break;case 3:n.vertexAttrib3fv(ie.location,$);break;case 4:n.vertexAttrib4fv(ie.location,$);break;default:n.vertexAttrib1fv(ie.location,$)}}}}T()}function v(){N();for(let C in o){let R=o[C];for(let F in R){let H=R[F];for(let z in H)g(H[z].object),delete H[z];delete R[F]}delete o[C]}}function _(C){if(o[C.id]===void 0)return;let R=o[C.id];for(let F in R){let H=R[F];for(let z in H)g(H[z].object),delete H[z];delete R[F]}delete o[C.id]}function P(C){for(let R in o){let F=o[R];if(F[C.id]===void 0)continue;let H=F[C.id];for(let z in H)g(H[z].object),delete H[z];delete F[C.id]}}function N(){O(),d=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:N,resetDefaultState:O,dispose:v,releaseStatesOfGeometry:_,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:T}}function BM(n,e,t,i){let s=i.isWebGL2,r;function a(d){r=d}function o(d,u){n.drawArrays(r,d,u),t.update(u,r,1)}function l(d,u,h){if(h===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,d,u,h),t.update(u,r,h)}function c(d,u,h){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(d[g],u[g]);else{p.multiDrawArraysWEBGL(r,d,0,u,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function zM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,M=a||e.has("OES_texture_float"),S=b&&M,T=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:T}}function HM(n){let e=this,t=null,i=0,s=!1,r=!1,a=new hi,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){let g=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?d(null):c();else{let x=r?0:i,b=x*4,M=m.clippingState||null;l.value=M,M=d(g,h,b,p);for(let S=0;S!==b;++S)M[S]=t[S];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,p,g){let y=u!==null?u.length:0,f=null;if(y!==0){if(f=l.value,g!==!0||f===null){let m=p+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let b=0,M=p;b!==y;++b,M+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function VM(n){let e=new WeakMap;function t(a,o){return o===_h?a.mapping=Za:o===wh&&(a.mapping=Ka),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===_h||o===wh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ch(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var no=class extends Hc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qa=4,Tg=[.125,.215,.35,.446,.526,.582],Wr=20,ch=new no,Rg=new ke,dh=null,uh=0,hh=0,Vr=(1+Math.sqrt(5))/2,Va=1/Vr,Cg=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Vr,Va),new D(0,Vr,-Va),new D(Va,0,Vr),new D(-Va,0,Vr),new D(Vr,Va,0),new D(-Vr,Va,0)],Gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){dh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,uh,hh),e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Za||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Wo,format:wi,colorSpace:bn,depthBuffer:!1},s=Lg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GM(r)),this._blurMaterial=WM(r,e,t)}return s}_compileMaterial(e){let t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,ch)}_sceneToCubeUV(e,t,i,s){let o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Rg),d.toneMapping=rr,d.autoClear=!1;let p=new pn({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),g=new Rt(new cr,p),y=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,y=!0):(p.color.copy(Rg),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let b=this._cubeSize;wc(s,x*b,m>2?b:0,b,b),d.setRenderTarget(s),y&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Za||e.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;wc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ch)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cg[(s-1)%Cg.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Rt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),y=r/g,f=isFinite(r)?1+Math.floor(d*y):Wr;f>Wr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Wr}`);let m=[],x=0;for(let A=0;A<Wr;++A){let k=A/y,v=Math.exp(-k*k/2);m.push(v),A===0?x+=v:A<f&&(x+=2*v)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;let M=this._sizeLods[s],S=3*M*(s>b-qa?s-b+qa:0),T=4*(this._cubeSize-M);wc(t,S,T,3*M,2*M),l.setRenderTarget(t),l.render(u,ch)}};function GM(n){let e=[],t=[],i=[],s=n,r=n-qa+1+Tg.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-qa?l=Tg[a-n+qa-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,y=3,f=2,m=1,x=new Float32Array(y*g*p),b=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,k=T>2?0:-1,v=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];x.set(v,y*g*T),b.set(h,f*g*T);let _=[T,T,T,T,T,T];M.set(_,m*g*T)}let S=new $n;S.setAttribute("position",new Ut(x,y)),S.setAttribute("uv",new Ut(b,f)),S.setAttribute("faceIndex",new Ut(M,m)),e.push(S),s>qa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lg(n,e,t){let i=new Es(n,e,t);return i.texture.mapping=ad,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function WM(n,e,t){let i=new Float32Array(Wr),s=new D(0,1,0);return new Ts({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lf(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Pg(){return new Ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ig(){return new Ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function lf(){return`

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
	`}function qM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===_h||l===wh,d=l===Za||l===Ka;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Gc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||d&&u&&s(u)){t===null&&(t=new Gc(n));let h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function XM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $M(n,e,t,i){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let f=0,m=y.length;f<m;f++)e.remove(y[f])}h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let f=0,m=y.length;f<m;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(u){let h=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let b=0,M=x.length;b<M;b+=3){let S=x[b+0],T=x[b+1],A=x[b+2];h.push(S,T,T,A,A,S)}}else if(g!==void 0){let x=g.array;y=g.version;for(let b=0,M=x.length/3-1;b<M;b+=3){let S=b+0,T=b+1,A=b+2;h.push(S,T,T,A,A,S)}}else return;let f=new(E0(h)?zc:Bc)(h,1);f.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,f)}function d(u){let h=r.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function YM(n,e,t,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function d(p,g){n.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,y){if(y===0)return;let f,m;if(s)f=n,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,g,o,p*l,y),t.update(g,r,y)}function h(p,g,y){if(y===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<y;m++)this.render(p[m]/l,g[m]);else{f.multiDrawElementsWEBGL(r,g,0,o,p,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=h}function jM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ZM(n,e){return n[0]-e[0]}function KM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function JM(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new Ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(d);if(y===void 0||y.count!==g){let C=function(){N.dispose(),r.delete(d),d.removeEventListener("dispose",C)};y!==void 0&&y.texture.dispose();let x=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],A=d.morphAttributes.color||[],k=0;x===!0&&(k=1),b===!0&&(k=2),M===!0&&(k=3);let v=d.attributes.position.count*k,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let P=new Float32Array(v*_*4*g),N=new Fc(P,v,_,g);N.type=Ss,N.needsUpdate=!0;let O=k*4;for(let R=0;R<g;R++){let F=S[R],H=T[R],z=A[R],W=v*_*4*R;for(let Q=0;Q<F.count;Q++){let te=Q*O;x===!0&&(a.fromBufferAttribute(F,Q),P[W+te+0]=a.x,P[W+te+1]=a.y,P[W+te+2]=a.z,P[W+te+3]=0),b===!0&&(a.fromBufferAttribute(H,Q),P[W+te+4]=a.x,P[W+te+5]=a.y,P[W+te+6]=a.z,P[W+te+7]=0),M===!0&&(a.fromBufferAttribute(z,Q),P[W+te+8]=a.x,P[W+te+9]=a.y,P[W+te+10]=a.z,P[W+te+11]=z.itemSize===4?a.w:1)}}y={count:g,texture:N,size:new Ze(v,_)},r.set(d,y),d.addEventListener("dispose",C)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];let m=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=h===void 0?0:h.length,g=i[d.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[d.id]=g}for(let b=0;b<p;b++){let M=g[b];M[0]=b,M[1]=h[b]}g.sort(KM);for(let b=0;b<8;b++)b<p&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(ZM);let y=d.morphAttributes.position,f=d.morphAttributes.normal,m=0;for(let b=0;b<8;b++){let M=o[b],S=M[0],T=M[1];S!==Number.MAX_SAFE_INTEGER&&T?(y&&d.getAttribute("morphTarget"+b)!==y[S]&&d.setAttribute("morphTarget"+b,y[S]),f&&d.getAttribute("morphNormal"+b)!==f[S]&&d.setAttribute("morphNormal"+b,f[S]),s[b]=T,m+=T):(y&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),f&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),s[b]=0)}let x=d.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function QM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Wc=class extends Tn{constructor(e,t,i,s,r,a,o,l,c,d){if(d=d!==void 0?d:Xr,d!==Xr&&d!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Xr&&(i=nr),i===void 0&&d===Ja&&(i=qr),super(null,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},L0=new Tn,P0=new Wc(1,1);P0.compareFunction=A0;var I0=new Fc,N0=new Th,D0=new Vc,Ng=[],Dg=[],kg=new Float32Array(16),Og=new Float32Array(9),Ug=new Float32Array(4);function co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ng[s];if(r===void 0&&(r=new Float32Array(s),Ng[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cd(n,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function nS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function iS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function sS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;Ug.set(i),n.uniformMatrix2fv(this.addr,!1,Ug),_n(t,i)}}function rS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;Og.set(i),n.uniformMatrix3fv(this.addr,!1,Og),_n(t,i)}}function aS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,i))return;kg.set(i),n.uniformMatrix4fv(this.addr,!1,kg),_n(t,i)}}function oS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function cS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function dS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function uS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function fS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function pS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function mS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?P0:L0;t.setTexture2D(e||r,s)}function gS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||N0,s)}function yS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||D0,s)}function vS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||I0,s)}function bS(n){switch(n){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return sS;case 35675:return rS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return dS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return vS}}function xS(n,e){n.uniform1fv(this.addr,e)}function _S(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function wS(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function MS(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function SS(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AS(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ES(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TS(n,e){n.uniform1iv(this.addr,e)}function RS(n,e){n.uniform2iv(this.addr,e)}function CS(n,e){n.uniform3iv(this.addr,e)}function LS(n,e){n.uniform4iv(this.addr,e)}function PS(n,e){n.uniform1uiv(this.addr,e)}function IS(n,e){n.uniform2uiv(this.addr,e)}function NS(n,e){n.uniform3uiv(this.addr,e)}function DS(n,e){n.uniform4uiv(this.addr,e)}function kS(n,e,t){let i=this.cache,s=e.length,r=cd(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||L0,r[a])}function OS(n,e,t){let i=this.cache,s=e.length,r=cd(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||N0,r[a])}function US(n,e,t){let i=this.cache,s=e.length,r=cd(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||D0,r[a])}function FS(n,e,t){let i=this.cache,s=e.length,r=cd(t,s);xn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||I0,r[a])}function BS(n){switch(n){case 5126:return xS;case 35664:return _S;case 35665:return wS;case 35666:return MS;case 35674:return SS;case 35675:return AS;case 35676:return ES;case 5124:case 35670:return TS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return LS;case 5125:return PS;case 36294:return IS;case 36295:return NS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return FS}}var Lh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bS(t.type)}},Ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BS(t.type)}},Ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Fg(n,e){n.seq.push(e),n.map[e.id]=e}function zS(n,e,t){let i=n.name,s=i.length;for(fh.lastIndex=0;;){let r=fh.exec(i),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fg(t,c===void 0?new Lh(o,n,e):new Ph(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ih(o),Fg(t,u)),t=u}}}var ja=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zS(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Bg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var HS=37297,VS=0;function GS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function WS(n){let e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n),i;switch(e===t?i="":e===Nc&&t===Ic?i="LinearDisplayP3ToLinearSRGB":e===Ic&&t===Nc&&(i="LinearSRGBToLinearDisplayP3"),n){case bn:case ld:return[i,"LinearTransferOETF"];case Zt:case af:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+GS(n.getShaderSource(e),a)}else return s}function qS(n,e){let t=WS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XS(n,e){let t;switch(e){case Zb:t="Linear";break;case Kb:t="Reinhard";break;case Jb:t="OptimizedCineon";break;case Qb:t="ACESFilmic";break;case tx:t="AgX";break;case ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $S(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xa).join(`
`)}function YS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xa).join(`
`)}function jS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xa(n){return n!==""}function Hg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(n){return n.replace(KS,QS)}var JS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QS(n,e){let t=Qe[e];if(t===void 0){let i=JS.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(t)}var e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(n){return n.replace(e1,t1)}function t1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===p0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ms&&(e="SHADOWMAP_TYPE_VSM"),e}function i1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Za:case Ka:e="ENVMAP_TYPE_CUBE";break;case ad:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ka:e="ENVMAP_MODE_REFRACTION";break}return e}function r1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Yb:e="ENVMAP_BLENDING_MIX";break;case jb:e="ENVMAP_BLENDING_ADD";break}return e}function a1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function o1(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=n1(t),c=i1(t),d=s1(t),u=r1(t),h=a1(t),p=t.isWebGL2?"":$S(t),g=YS(t),y=jS(r),f=s.createProgram(),m,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xa).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xa).join(`
`),x.length>0&&(x+=`
`)):(m=[Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),x=[p,Wg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==rr?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,qS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),a=Nh(a),a=Hg(a,t),a=Vg(a,t),o=Nh(o),o=Hg(o,t),o=Vg(o,t),a=Gg(a),o=Gg(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=b+m+a,S=b+x+o,T=Bg(s,s.VERTEX_SHADER,M),A=Bg(s,s.FRAGMENT_SHADER,S);s.attachShader(f,T),s.attachShader(f,A),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function k(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(T).trim(),R=s.getShaderInfoLog(A).trim(),F=!0,H=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,T,A);else{let z=zg(s,T,"vertex"),W=zg(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+z+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(C===""||R==="")&&(H=!1);H&&(N.diagnostics={runnable:F,programLog:O,vertexShader:{log:C,prefix:m},fragmentShader:{log:R,prefix:x}})}s.deleteShader(T),s.deleteShader(A),v=new ja(s,f),_=ZS(s,f)}let v;this.getUniforms=function(){return v===void 0&&k(this),v};let _;this.getAttributes=function(){return _===void 0&&k(this),_};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(f,HS)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VS++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=T,this.fragmentShader=A,this}var l1=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kh(e),t.set(e,i)),i}},kh=class{constructor(e){this.id=l1++,this.code=e,this.usedTimes=0}};function c1(n,e,t,i,s,r,a){let o=new Xo,l=new Dh,c=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return v===0?"uv":`uv${v}`}function f(v,_,P,N,O){let C=N.fog,R=O.geometry,F=v.isMeshStandardMaterial?N.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),z=H&&H.mapping===ad?H.image.height:null,W=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,te=Q!==void 0?Q.length:0,ie=0;R.morphAttributes.position!==void 0&&(ie=1),R.morphAttributes.normal!==void 0&&(ie=2),R.morphAttributes.color!==void 0&&(ie=3);let G,$,Y,ae;if(W){let Hn=Ki[W];G=Hn.vertexShader,$=Hn.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,l.update(v),Y=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);let X=n.getRenderTarget(),se=O.isInstancedMesh===!0,pe=O.isBatchedMesh===!0,oe=!!v.map,we=!!v.matcap,q=!!H,Ht=!!v.aoMap,Pe=!!v.lightMap,He=!!v.bumpMap,Ie=!!v.normalMap,Yt=!!v.displacementMap,nt=!!v.emissiveMap,I=!!v.metalnessMap,E=!!v.roughnessMap,Z=v.anisotropy>0,de=v.clearcoat>0,ce=v.iridescence>0,ue=v.sheen>0,Ne=v.transmission>0,Me=Z&&!!v.anisotropyMap,Te=de&&!!v.clearcoatMap,Ve=de&&!!v.clearcoatNormalMap,it=de&&!!v.clearcoatRoughnessMap,le=ce&&!!v.iridescenceMap,Et=ce&&!!v.iridescenceThicknessMap,dt=ue&&!!v.sheenColorMap,$e=ue&&!!v.sheenRoughnessMap,Oe=!!v.specularMap,Re=!!v.specularColorMap,Je=!!v.specularIntensityMap,At=Ne&&!!v.transmissionMap,rn=Ne&&!!v.thicknessMap,at=!!v.gradientMap,ye=!!v.alphaMap,B=v.alphaTest>0,xe=!!v.alphaHash,_e=!!v.extensions,We=!!R.attributes.uv1,Ue=!!R.attributes.uv2,Nt=!!R.attributes.uv3,Dt=rr;return v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Dt=n.toneMapping),{isWebGL2:d,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:Y,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:pe,instancing:se,instancingColor:se&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:bn,map:oe,matcap:we,envMap:q,envMapMode:q&&H.mapping,envMapCubeUVHeight:z,aoMap:Ht,lightMap:Pe,bumpMap:He,normalMap:Ie,displacementMap:h&&Yt,emissiveMap:nt,normalMapObjectSpace:Ie&&v.normalMapType===px,normalMapTangentSpace:Ie&&v.normalMapType===rf,metalnessMap:I,roughnessMap:E,anisotropy:Z,anisotropyMap:Me,clearcoat:de,clearcoatMap:Te,clearcoatNormalMap:Ve,clearcoatRoughnessMap:it,iridescence:ce,iridescenceMap:le,iridescenceThicknessMap:Et,sheen:ue,sheenColorMap:dt,sheenRoughnessMap:$e,specularMap:Oe,specularColorMap:Re,specularIntensityMap:Je,transmission:Ne,transmissionMap:At,thicknessMap:rn,gradientMap:at,opaque:v.transparent===!1&&v.blending===$a,alphaMap:ye,alphaTest:B,alphaHash:xe,combine:v.combine,mapUv:oe&&y(v.map.channel),aoMapUv:Ht&&y(v.aoMap.channel),lightMapUv:Pe&&y(v.lightMap.channel),bumpMapUv:He&&y(v.bumpMap.channel),normalMapUv:Ie&&y(v.normalMap.channel),displacementMapUv:Yt&&y(v.displacementMap.channel),emissiveMapUv:nt&&y(v.emissiveMap.channel),metalnessMapUv:I&&y(v.metalnessMap.channel),roughnessMapUv:E&&y(v.roughnessMap.channel),anisotropyMapUv:Me&&y(v.anisotropyMap.channel),clearcoatMapUv:Te&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:$e&&y(v.sheenRoughnessMap.channel),specularMapUv:Oe&&y(v.specularMap.channel),specularColorMapUv:Re&&y(v.specularColorMap.channel),specularIntensityMapUv:Je&&y(v.specularIntensityMap.channel),transmissionMapUv:At&&y(v.transmissionMap.channel),thicknessMapUv:rn&&y(v.thicknessMap.channel),alphaMapUv:ye&&y(v.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ie||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUv1s:We,vertexUv2s:Ue,vertexUv3s:Nt,pointsUvs:O.isPoints===!0&&!!R.attributes.uv&&(oe||ye),fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ie,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:oe&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===Vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qn,flipSided:v.side===ti,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:_e&&v.extensions.derivatives===!0,extensionFragDepth:_e&&v.extensions.fragDepth===!0,extensionDrawBuffers:_e&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)_.push(P),_.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(_,v),b(_,v),_.push(n.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function x(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function b(v,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let _=g[v.type],P;if(_){let N=Ki[_];P=Jx.clone(N.uniforms)}else P=v.uniforms;return P}function S(v,_){let P;for(let N=0,O=c.length;N<O;N++){let C=c[N];if(C.cacheKey===_){P=C,++P.usedTimes;break}}return P===void 0&&(P=new o1(n,_,v,r),c.push(P)),P}function T(v){if(--v.usedTimes===0){let _=c.indexOf(v);c[_]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:k}}function d1(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function u1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,h,p,g,y,f){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:f},n[e]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=f),e++,m}function o(u,h,p,g,y,f){let m=a(u,h,p,g,y,f);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,h,p,g,y,f){let m=a(u,h,p,g,y,f);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,h){t.length>1&&t.sort(u||u1),i.length>1&&i.sort(h||qg),s.length>1&&s.sort(h||qg)}function d(){for(let u=e,h=n.length;u<h;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function h1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Xg,n.set(i,[a])):s>=r.length?(a=new Xg,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function f1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function p1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var m1=0;function g1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function y1(n,e){let t=new f1,i=p1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new D);let r=new D,a=new Ce,o=new Ce;function l(d,u){let h=0,p=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,f=0,m=0,x=0,b=0,M=0,S=0,T=0,A=0,k=0,v=0;d.sort(g1);let _=u===!0?Math.PI:1;for(let N=0,O=d.length;N<O;N++){let C=d[N],R=C.color,F=C.intensity,H=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=R.r*F*_,p+=R.g*F*_,g+=R.b*F*_;else if(C.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(C.sh.coefficients[W],F);v++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*_),C.castShadow){let Q=C.shadow,te=i.get(C);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[y]=te,s.directionalShadowMap[y]=z,s.directionalShadowMatrix[y]=C.shadow.matrix,M++}s.directional[y]=W,y++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(R).multiplyScalar(F*_),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,s.spot[m]=W;let Q=C.shadow;if(C.map&&(s.spotLightMap[A]=C.map,A++,Q.updateMatrices(C),C.castShadow&&k++),s.spotLightMatrix[m]=Q.matrix,C.castShadow){let te=i.get(C);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[m]=te,s.spotShadowMap[m]=z,T++}m++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(R).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),s.rectArea[x]=W,x++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*_),W.distance=C.distance,W.decay=C.decay,C.castShadow){let Q=C.shadow,te=i.get(C);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[f]=te,s.pointShadowMap[f]=z,s.pointShadowMatrix[f]=C.shadow.matrix,S++}s.point[f]=W,f++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(F*_),W.groundColor.copy(C.groundColor).multiplyScalar(F*_),s.hemi[b]=W,b++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;let P=s.hash;(P.directionalLength!==y||P.pointLength!==f||P.spotLength!==m||P.rectAreaLength!==x||P.hemiLength!==b||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==A||P.numLightProbes!==v)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=x,s.point.length=f,s.hemi.length=b,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=T+A-k,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=v,P.directionalLength=y,P.pointLength=f,P.spotLength=m,P.rectAreaLength=x,P.hemiLength=b,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=A,P.numLightProbes=v,s.version=m1++)}function c(d,u){let h=0,p=0,g=0,y=0,f=0,m=u.matrixWorldInverse;for(let x=0,b=d.length;x<b;x++){let M=d[x];if(M.isDirectionalLight){let S=s.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){let S=s.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let S=s.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let S=s.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let S=s.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:s}}function $g(n,e){let t=new y1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function v1(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new $g(n,e),t.set(r,[l])):a>=o.length?(l=new $g(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Oh=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uh=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
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
}`;function _1(n,e,t){let i=new $o,s=new Ze,r=new Ze,a=new Ct,o=new Oh({depthPacking:fx}),l=new Uh,c={},d=t.maxTextureSize,u={[Qi]:ti,[ti]:Qi,[qn]:qn},h=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:b1,fragmentShader:x1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new $n;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Rt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p0;let m=this.type;this.render=function(T,A,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let v=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(sr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=m!==Ms&&this.type===Ms,C=m===Ms&&this.type!==Ms;for(let R=0,F=T.length;R<F;R++){let H=T[R],z=H.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let W=z.getFrameExtents();if(s.multiply(W),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/W.y),s.y=r.y*W.y,z.mapSize.y=r.y)),z.map===null||O===!0||C===!0){let te=this.type!==Ms?{minFilter:vn,magFilter:vn}:{};z.map!==null&&z.map.dispose(),z.map=new Es(s.x,s.y,te),z.map.texture.name=H.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let Q=z.getViewportCount();for(let te=0;te<Q;te++){let ie=z.getViewport(te);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),N.viewport(a),z.updateMatrices(H,te),i=z.getFrustum(),M(A,k,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Ms&&x(z,k),z.needsUpdate=!1}m=this.type,f.needsUpdate=!1,n.setRenderTarget(v,_,P)};function x(T,A){let k=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Es(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,k,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,k,p,y,null)}function b(T,A,k,v){let _=null,P=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)_=P;else if(_=k.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let N=_.uuid,O=A.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let R=C[O];R===void 0&&(R=_.clone(),C[O]=R,A.addEventListener("dispose",S)),_=R}if(_.visible=A.visible,_.wireframe=A.wireframe,v===Ms?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,k.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=n.properties.get(_);N.light=k}return _}function M(T,A,k,v,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Ms)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);let O=e.update(T),C=T.material;if(Array.isArray(C)){let R=O.groups;for(let F=0,H=R.length;F<H;F++){let z=R[F],W=C[z.materialIndex];if(W&&W.visible){let Q=b(T,W,v,_);T.onBeforeShadow(n,T,A,k,O,Q,z),n.renderBufferDirect(k,null,O,Q,T,z),T.onAfterShadow(n,T,A,k,O,Q,z)}}}else if(C.visible){let R=b(T,C,v,_);T.onBeforeShadow(n,T,A,k,O,R,null),n.renderBufferDirect(k,null,O,R,T,null),T.onAfterShadow(n,T,A,k,O,R,null)}}let N=T.children;for(let O=0,C=N.length;O<C;O++)M(N[O],A,k,v,_)}function S(T){T.target.removeEventListener("dispose",S);for(let k in c){let v=c[k],_=T.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}function w1(n,e,t){let i=t.isWebGL2;function s(){let B=!1,xe=new Ct,_e=null,We=new Ct(0,0,0,0);return{setMask:function(Ue){_e!==Ue&&!B&&(n.colorMask(Ue,Ue,Ue,Ue),_e=Ue)},setLocked:function(Ue){B=Ue},setClear:function(Ue,Nt,Dt,wn,Hn){Hn===!0&&(Ue*=wn,Nt*=wn,Dt*=wn),xe.set(Ue,Nt,Dt,wn),We.equals(xe)===!1&&(n.clearColor(Ue,Nt,Dt,wn),We.copy(xe))},reset:function(){B=!1,_e=null,We.set(-1,0,0,0)}}}function r(){let B=!1,xe=null,_e=null,We=null;return{setTest:function(Ue){Ue?pe(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(Ue){xe!==Ue&&!B&&(n.depthMask(Ue),xe=Ue)},setFunc:function(Ue){if(_e!==Ue){switch(Ue){case Hb:n.depthFunc(n.NEVER);break;case Vb:n.depthFunc(n.ALWAYS);break;case Gb:n.depthFunc(n.LESS);break;case Cc:n.depthFunc(n.LEQUAL);break;case Wb:n.depthFunc(n.EQUAL);break;case qb:n.depthFunc(n.GEQUAL);break;case Xb:n.depthFunc(n.GREATER);break;case $b:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Ue}},setLocked:function(Ue){B=Ue},setClear:function(Ue){We!==Ue&&(n.clearDepth(Ue),We=Ue)},reset:function(){B=!1,xe=null,_e=null,We=null}}}function a(){let B=!1,xe=null,_e=null,We=null,Ue=null,Nt=null,Dt=null,wn=null,Hn=null;return{setTest:function(kt){B||(kt?pe(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(kt){xe!==kt&&!B&&(n.stencilMask(kt),xe=kt)},setFunc:function(kt,Vn,Zi){(_e!==kt||We!==Vn||Ue!==Zi)&&(n.stencilFunc(kt,Vn,Zi),_e=kt,We=Vn,Ue=Zi)},setOp:function(kt,Vn,Zi){(Nt!==kt||Dt!==Vn||wn!==Zi)&&(n.stencilOp(kt,Vn,Zi),Nt=kt,Dt=Vn,wn=Zi)},setLocked:function(kt){B=kt},setClear:function(kt){Hn!==kt&&(n.clearStencil(kt),Hn=kt)},reset:function(){B=!1,xe=null,_e=null,We=null,Ue=null,Nt=null,Dt=null,wn=null,Hn=null}}}let o=new s,l=new r,c=new a,d=new WeakMap,u=new WeakMap,h={},p={},g=new WeakMap,y=[],f=null,m=!1,x=null,b=null,M=null,S=null,T=null,A=null,k=null,v=new ke(0,0,0),_=0,P=!1,N=null,O=null,C=null,R=null,F=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=W>=2);let te=null,ie={},G=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Y=new Ct().fromArray(G),ae=new Ct().fromArray($);function X(B,xe,_e,We){let Ue=new Uint8Array(4),Nt=n.createTexture();n.bindTexture(B,Nt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<_e;Dt++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,We,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(xe+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Nt}let se={};se[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(n.DEPTH_TEST),l.setFunc(Cc),nt(!1),I(Tm),pe(n.CULL_FACE),Ie(sr);function pe(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function oe(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function we(B,xe){return p[B]!==xe?(n.bindFramebuffer(B,xe),p[B]=xe,i&&(B===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=xe),B===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function q(B,xe){let _e=y,We=!1;if(B)if(_e=g.get(xe),_e===void 0&&(_e=[],g.set(xe,_e)),B.isWebGLMultipleRenderTargets){let Ue=B.texture;if(_e.length!==Ue.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Nt=0,Dt=Ue.length;Nt<Dt;Nt++)_e[Nt]=n.COLOR_ATTACHMENT0+Nt;_e.length=Ue.length,We=!0}}else _e[0]!==n.COLOR_ATTACHMENT0&&(_e[0]=n.COLOR_ATTACHMENT0,We=!0);else _e[0]!==n.BACK&&(_e[0]=n.BACK,We=!0);We&&(t.isWebGL2?n.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Ht(B){return f!==B?(n.useProgram(B),f=B,!0):!1}let Pe={[Gr]:n.FUNC_ADD,[Eb]:n.FUNC_SUBTRACT,[Tb]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Pm]=n.MIN,Pe[Im]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(Pe[Pm]=B.MIN_EXT,Pe[Im]=B.MAX_EXT)}let He={[Rb]:n.ZERO,[Cb]:n.ONE,[Lb]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[Ob]:n.SRC_ALPHA_SATURATE,[Db]:n.DST_COLOR,[Ib]:n.DST_ALPHA,[Pb]:n.ONE_MINUS_SRC_COLOR,[xh]:n.ONE_MINUS_SRC_ALPHA,[kb]:n.ONE_MINUS_DST_COLOR,[Nb]:n.ONE_MINUS_DST_ALPHA,[Ub]:n.CONSTANT_COLOR,[Fb]:n.ONE_MINUS_CONSTANT_COLOR,[Bb]:n.CONSTANT_ALPHA,[zb]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(B,xe,_e,We,Ue,Nt,Dt,wn,Hn,kt){if(B===sr){m===!0&&(oe(n.BLEND),m=!1);return}if(m===!1&&(pe(n.BLEND),m=!0),B!==Ab){if(B!==x||kt!==P){if((b!==Gr||T!==Gr)&&(n.blendEquation(n.FUNC_ADD),b=Gr,T=Gr),kt)switch(B){case $a:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rm:n.blendFunc(n.ONE,n.ONE);break;case Cm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,S=null,A=null,k=null,v.set(0,0,0),_=0,x=B,P=kt}return}Ue=Ue||xe,Nt=Nt||_e,Dt=Dt||We,(xe!==b||Ue!==T)&&(n.blendEquationSeparate(Pe[xe],Pe[Ue]),b=xe,T=Ue),(_e!==M||We!==S||Nt!==A||Dt!==k)&&(n.blendFuncSeparate(He[_e],He[We],He[Nt],He[Dt]),M=_e,S=We,A=Nt,k=Dt),(wn.equals(v)===!1||Hn!==_)&&(n.blendColor(wn.r,wn.g,wn.b,Hn),v.copy(wn),_=Hn),x=B,P=!1}function Yt(B,xe){B.side===qn?oe(n.CULL_FACE):pe(n.CULL_FACE);let _e=B.side===ti;xe&&(_e=!_e),nt(_e),B.blending===$a&&B.transparent===!1?Ie(sr):Ie(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);let We=B.stencilWrite;c.setTest(We),We&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(B){N!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),N=B)}function I(B){B!==wb?(pe(n.CULL_FACE),B!==O&&(B===Tm?n.cullFace(n.BACK):B===Mb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),O=B}function E(B){B!==C&&(z&&n.lineWidth(B),C=B)}function Z(B,xe,_e){B?(pe(n.POLYGON_OFFSET_FILL),(R!==xe||F!==_e)&&(n.polygonOffset(xe,_e),R=xe,F=_e)):oe(n.POLYGON_OFFSET_FILL)}function de(B){B?pe(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ce(B){B===void 0&&(B=n.TEXTURE0+H-1),te!==B&&(n.activeTexture(B),te=B)}function ue(B,xe,_e){_e===void 0&&(te===null?_e=n.TEXTURE0+H-1:_e=te);let We=ie[_e];We===void 0&&(We={type:void 0,texture:void 0},ie[_e]=We),(We.type!==B||We.texture!==xe)&&(te!==_e&&(n.activeTexture(_e),te=_e),n.bindTexture(B,xe||se[B]),We.type=B,We.texture=xe)}function Ne(){let B=ie[te];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(B){Y.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Y.copy(B))}function At(B){ae.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ae.copy(B))}function rn(B,xe){let _e=u.get(xe);_e===void 0&&(_e=new WeakMap,u.set(xe,_e));let We=_e.get(B);We===void 0&&(We=n.getUniformBlockIndex(xe,B.name),_e.set(B,We))}function at(B,xe){let We=u.get(xe).get(B);d.get(xe)!==We&&(n.uniformBlockBinding(xe,We,B.__bindingPointIndex),d.set(xe,We))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},te=null,ie={},p={},g=new WeakMap,y=[],f=null,m=!1,x=null,b=null,M=null,S=null,T=null,A=null,k=null,v=new ke(0,0,0),_=0,P=!1,N=null,O=null,C=null,R=null,F=null,Y.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:pe,disable:oe,bindFramebuffer:we,drawBuffers:q,useProgram:Ht,setBlending:Ie,setMaterial:Yt,setFlipSided:nt,setCullFace:I,setLineWidth:E,setPolygonOffset:Z,setScissorTest:de,activeTexture:ce,bindTexture:ue,unbindTexture:Ne,compressedTexImage2D:Me,compressedTexImage3D:Te,texImage2D:Oe,texImage3D:Re,updateUBOMapping:rn,uniformBlockBinding:at,texStorage2D:dt,texStorage3D:$e,texSubImage2D:Ve,texSubImage3D:it,compressedTexSubImage2D:le,compressedTexSubImage3D:Et,scissor:Je,viewport:At,reset:ye}}function M1(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,u,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return p?new OffscreenCanvas(I,E):qo("canvas")}function y(I,E,Z,de){let ce=1;if((I.width>de||I.height>de)&&(ce=de/Math.max(I.width,I.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ue=E?kc:Math.floor,Ne=ue(ce*I.width),Me=ue(ce*I.height);u===void 0&&(u=g(Ne,Me));let Te=Z?g(Ne,Me):u;return Te.width=Ne,Te.height=Me,Te.getContext("2d").drawImage(I,0,0,Ne,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ne+"x"+Me+")."),Te}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function f(I){return Ah(I.width)&&Ah(I.height)}function m(I){return o?!1:I.wrapS!==fi||I.wrapT!==fi||I.minFilter!==vn&&I.minFilter!==fn}function x(I,E){return I.generateMipmaps&&E&&I.minFilter!==vn&&I.minFilter!==fn}function b(I){n.generateMipmap(I)}function M(I,E,Z,de,ce=!1){if(o===!1)return E;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=E;if(E===n.RED&&(Z===n.FLOAT&&(ue=n.R32F),Z===n.HALF_FLOAT&&(ue=n.R16F),Z===n.UNSIGNED_BYTE&&(ue=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ue=n.R8UI),Z===n.UNSIGNED_SHORT&&(ue=n.R16UI),Z===n.UNSIGNED_INT&&(ue=n.R32UI),Z===n.BYTE&&(ue=n.R8I),Z===n.SHORT&&(ue=n.R16I),Z===n.INT&&(ue=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(ue=n.RG32F),Z===n.HALF_FLOAT&&(ue=n.RG16F),Z===n.UNSIGNED_BYTE&&(ue=n.RG8)),E===n.RGBA){let Ne=ce?Pc:xt.getTransfer(de);Z===n.FLOAT&&(ue=n.RGBA32F),Z===n.HALF_FLOAT&&(ue=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ue=Ne===Vt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(I,E,Z){return x(I,Z)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){return I===vn||I===Lc||I===Fo?n.NEAREST:n.LINEAR}function A(I){let E=I.target;E.removeEventListener("dispose",A),v(E),E.isVideoTexture&&d.delete(E)}function k(I){let E=I.target;E.removeEventListener("dispose",k),P(E)}function v(I){let E=i.get(I);if(E.__webglInit===void 0)return;let Z=I.source,de=h.get(Z);if(de){let ce=de[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&_(I),Object.keys(de).length===0&&h.delete(Z)}i.remove(I)}function _(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let Z=I.source,de=h.get(Z);delete de[E.__cacheKey],a.memory.textures--}function P(I){let E=I.texture,Z=i.get(I),de=i.get(E);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(Z.__webglFramebuffer[ce]))for(let ue=0;ue<Z.__webglFramebuffer[ce].length;ue++)n.deleteFramebuffer(Z.__webglFramebuffer[ce][ue]);else n.deleteFramebuffer(Z.__webglFramebuffer[ce]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[ce])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ce=0;ce<Z.__webglFramebuffer.length;ce++)n.deleteFramebuffer(Z.__webglFramebuffer[ce]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ce=0;ce<Z.__webglColorRenderbuffer.length;ce++)Z.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[ce]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ce=0,ue=E.length;ce<ue;ce++){let Ne=i.get(E[ce]);Ne.__webglTexture&&(n.deleteTexture(Ne.__webglTexture),a.memory.textures--),i.remove(E[ce])}i.remove(E),i.remove(I)}let N=0;function O(){N=0}function C(){let I=N;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function R(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function F(I,E){let Z=i.get(I);if(I.isVideoTexture&&Yt(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){let de=I.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Z,I,E);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function H(I,E){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){Y(Z,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function z(I,E){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){Y(Z,I,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function W(I,E){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){ae(Z,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let Q={[Yr]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},te={[vn]:n.NEAREST,[Lc]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[nf]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},ie={[mx]:n.NEVER,[_x]:n.ALWAYS,[gx]:n.LESS,[A0]:n.LEQUAL,[yx]:n.EQUAL,[xx]:n.GEQUAL,[vx]:n.GREATER,[bx]:n.NOTEQUAL};function G(I,E,Z){if(Z?(n.texParameteri(I,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,te[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,te[E.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==fi||E.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,T(E.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==vn&&E.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===vn||E.minFilter!==Fo&&E.minFilter!==or||E.type===Ss&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Wo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(I,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function $(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",A));let de=E.source,ce=h.get(de);ce===void 0&&(ce={},h.set(de,ce));let ue=R(E);if(ue!==I.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ce[ue].usedTimes++;let Ne=ce[I.__cacheKey];Ne!==void 0&&(ce[I.__cacheKey].usedTimes--,Ne.usedTimes===0&&_(E)),I.__cacheKey=ue,I.__webglTexture=ce[ue].texture}return Z}function Y(I,E,Z){let de=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=n.TEXTURE_3D);let ce=$(I,E),ue=E.source;t.bindTexture(de,I.__webglTexture,n.TEXTURE0+Z);let Ne=i.get(ue);if(ue.version!==Ne.__version||ce===!0){t.activeTexture(n.TEXTURE0+Z);let Me=xt.getPrimaries(xt.workingColorSpace),Te=E.colorSpace===Mi?null:xt.getPrimaries(E.colorSpace),Ve=E.colorSpace===Mi||Me===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let it=m(E)&&f(E.image)===!1,le=y(E.image,it,!1,s.maxTextureSize);le=nt(E,le);let Et=f(le)||o,dt=r.convert(E.format,E.colorSpace),$e=r.convert(E.type),Oe=M(E.internalFormat,dt,$e,E.colorSpace,E.isVideoTexture);G(de,E,Et);let Re,Je=E.mipmaps,At=o&&E.isVideoTexture!==!0&&Oe!==w0,rn=Ne.__version===void 0||ce===!0,at=S(E,le,Et);if(E.isDepthTexture)Oe=n.DEPTH_COMPONENT,o?E.type===Ss?Oe=n.DEPTH_COMPONENT32F:E.type===nr?Oe=n.DEPTH_COMPONENT24:E.type===qr?Oe=n.DEPTH24_STENCIL8:Oe=n.DEPTH_COMPONENT16:E.type===Ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xr&&Oe===n.DEPTH_COMPONENT&&E.type!==sf&&E.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=nr,$e=r.convert(E.type)),E.format===Ja&&Oe===n.DEPTH_COMPONENT&&(Oe=n.DEPTH_STENCIL,E.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=qr,$e=r.convert(E.type))),rn&&(At?t.texStorage2D(n.TEXTURE_2D,1,Oe,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Oe,le.width,le.height,0,dt,$e,null));else if(E.isDataTexture)if(Je.length>0&&Et){At&&rn&&t.texStorage2D(n.TEXTURE_2D,at,Oe,Je[0].width,Je[0].height);for(let ye=0,B=Je.length;ye<B;ye++)Re=Je[ye],At?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,dt,$e,Re.data):t.texImage2D(n.TEXTURE_2D,ye,Oe,Re.width,Re.height,0,dt,$e,Re.data);E.generateMipmaps=!1}else At?(rn&&t.texStorage2D(n.TEXTURE_2D,at,Oe,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,dt,$e,le.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,le.width,le.height,0,dt,$e,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){At&&rn&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,Oe,Je[0].width,Je[0].height,le.depth);for(let ye=0,B=Je.length;ye<B;ye++)Re=Je[ye],E.format!==wi?dt!==null?At?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,le.depth,dt,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Oe,Re.width,Re.height,le.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,le.depth,dt,$e,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Oe,Re.width,Re.height,le.depth,0,dt,$e,Re.data)}else{At&&rn&&t.texStorage2D(n.TEXTURE_2D,at,Oe,Je[0].width,Je[0].height);for(let ye=0,B=Je.length;ye<B;ye++)Re=Je[ye],E.format!==wi?dt!==null?At?t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,dt,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Re.width,Re.height,dt,$e,Re.data):t.texImage2D(n.TEXTURE_2D,ye,Oe,Re.width,Re.height,0,dt,$e,Re.data)}else if(E.isDataArrayTexture)At?(rn&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,Oe,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,dt,$e,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,dt,$e,le.data);else if(E.isData3DTexture)At?(rn&&t.texStorage3D(n.TEXTURE_3D,at,Oe,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,dt,$e,le.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,dt,$e,le.data);else if(E.isFramebufferTexture){if(rn)if(At)t.texStorage2D(n.TEXTURE_2D,at,Oe,le.width,le.height);else{let ye=le.width,B=le.height;for(let xe=0;xe<at;xe++)t.texImage2D(n.TEXTURE_2D,xe,Oe,ye,B,0,dt,$e,null),ye>>=1,B>>=1}}else if(Je.length>0&&Et){At&&rn&&t.texStorage2D(n.TEXTURE_2D,at,Oe,Je[0].width,Je[0].height);for(let ye=0,B=Je.length;ye<B;ye++)Re=Je[ye],At?t.texSubImage2D(n.TEXTURE_2D,ye,0,0,dt,$e,Re):t.texImage2D(n.TEXTURE_2D,ye,Oe,dt,$e,Re);E.generateMipmaps=!1}else At?(rn&&t.texStorage2D(n.TEXTURE_2D,at,Oe,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,$e,le)):t.texImage2D(n.TEXTURE_2D,0,Oe,dt,$e,le);x(E,Et)&&b(de),Ne.__version=ue.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ae(I,E,Z){if(E.image.length!==6)return;let de=$(I,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);let ue=i.get(ce);if(ce.version!==ue.__version||de===!0){t.activeTexture(n.TEXTURE0+Z);let Ne=xt.getPrimaries(xt.workingColorSpace),Me=E.colorSpace===Mi?null:xt.getPrimaries(E.colorSpace),Te=E.colorSpace===Mi||Ne===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,le=[];for(let ye=0;ye<6;ye++)!Ve&&!it?le[ye]=y(E.image[ye],!1,!0,s.maxCubemapSize):le[ye]=it?E.image[ye].image:E.image[ye],le[ye]=nt(E,le[ye]);let Et=le[0],dt=f(Et)||o,$e=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type),Re=M(E.internalFormat,$e,Oe,E.colorSpace),Je=o&&E.isVideoTexture!==!0,At=ue.__version===void 0||de===!0,rn=S(E,Et,dt);G(n.TEXTURE_CUBE_MAP,E,dt);let at;if(Ve){Je&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,rn,Re,Et.width,Et.height);for(let ye=0;ye<6;ye++){at=le[ye].mipmaps;for(let B=0;B<at.length;B++){let xe=at[B];E.format!==wi?$e!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,0,0,xe.width,xe.height,$e,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,0,0,xe.width,xe.height,$e,Oe,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B,Re,xe.width,xe.height,0,$e,Oe,xe.data)}}}else{at=E.mipmaps,Je&&At&&(at.length>0&&rn++,t.texStorage2D(n.TEXTURE_CUBE_MAP,rn,Re,le[0].width,le[0].height));for(let ye=0;ye<6;ye++)if(it){Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,le[ye].width,le[ye].height,$e,Oe,le[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Re,le[ye].width,le[ye].height,0,$e,Oe,le[ye].data);for(let B=0;B<at.length;B++){let _e=at[B].image[ye].image;Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,0,0,_e.width,_e.height,$e,Oe,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,Re,_e.width,_e.height,0,$e,Oe,_e.data)}}else{Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,$e,Oe,le[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Re,$e,Oe,le[ye]);for(let B=0;B<at.length;B++){let xe=at[B];Je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,0,0,$e,Oe,xe.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,B+1,Re,$e,Oe,xe.image[ye])}}}x(E,dt)&&b(n.TEXTURE_CUBE_MAP),ue.__version=ce.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function X(I,E,Z,de,ce,ue){let Ne=r.convert(Z.format,Z.colorSpace),Me=r.convert(Z.type),Te=M(Z.internalFormat,Ne,Me,Z.colorSpace);if(!i.get(E).__hasExternalTextures){let it=Math.max(1,E.width>>ue),le=Math.max(1,E.height>>ue);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,Te,it,le,E.depth,0,Ne,Me,null):t.texImage2D(ce,ue,Te,it,le,0,Ne,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ie(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ce,i.get(Z).__webglTexture,0,He(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,ce,i.get(Z).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(I,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let de=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Ie(E)){let ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Ss?de=n.DEPTH_COMPONENT32F:ce.type===nr&&(de=n.DEPTH_COMPONENT24));let ue=He(E);Ie(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,de,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,de,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,de,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){let de=He(E);Z&&Ie(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,E.width,E.height):Ie(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let de=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<de.length;ce++){let ue=de[ce],Ne=r.convert(ue.format,ue.colorSpace),Me=r.convert(ue.type),Te=M(ue.internalFormat,Ne,Me,ue.colorSpace),Ve=He(E);Z&&Ie(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Te,E.width,E.height):Ie(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,Te,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Te,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);let de=i.get(E.depthTexture).__webglTexture,ce=He(E);if(E.depthTexture.format===Xr)Ie(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(E.depthTexture.format===Ja)Ie(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function oe(I){let E=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,I)}else if(Z){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]=n.createRenderbuffer(),se(E.__webglDepthbuffer[de],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),se(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(I,E,Z){let de=i.get(I);E!==void 0&&X(de.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&oe(I)}function q(I){let E=I.texture,Z=i.get(I),de=i.get(E);I.addEventListener("dispose",k),I.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=E.version,a.memory.textures++);let ce=I.isWebGLCubeRenderTarget===!0,ue=I.isWebGLMultipleRenderTargets===!0,Ne=f(I)||o;if(ce){Z.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Me]=[];for(let Te=0;Te<E.mipmaps.length;Te++)Z.__webglFramebuffer[Me][Te]=n.createFramebuffer()}else Z.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)Z.__webglFramebuffer[Me]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){let Me=I.texture;for(let Te=0,Ve=Me.length;Te<Ve;Te++){let it=i.get(Me[Te]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&Ie(I)===!1){let Me=ue?E:[E];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Te=0;Te<Me.length;Te++){let Ve=Me[Te];Z.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Te]);let it=r.convert(Ve.format,Ve.colorSpace),le=r.convert(Ve.type),Et=M(Ve.internalFormat,it,le,Ve.colorSpace,I.isXRRenderTarget===!0),dt=He(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Et,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),se(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),G(n.TEXTURE_CUBE_MAP,E,Ne);for(let Me=0;Me<6;Me++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)X(Z.__webglFramebuffer[Me][Te],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Te);else X(Z.__webglFramebuffer[Me],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);x(E,Ne)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let Me=I.texture;for(let Te=0,Ve=Me.length;Te<Ve;Te++){let it=Me[Te],le=i.get(it);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),G(n.TEXTURE_2D,it,Ne),X(Z.__webglFramebuffer,I,it,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,0),x(it,Ne)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?Me=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,de.__webglTexture),G(Me,E,Ne),o&&E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)X(Z.__webglFramebuffer[Te],I,E,n.COLOR_ATTACHMENT0,Me,Te);else X(Z.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Me,0);x(E,Ne)&&b(Me),t.unbindTexture()}I.depthBuffer&&oe(I)}function Ht(I){let E=f(I)||o,Z=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let de=0,ce=Z.length;de<ce;de++){let ue=Z[de];if(x(ue,E)){let Ne=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(ue).__webglTexture;t.bindTexture(Ne,Me),b(Ne),t.unbindTexture()}}}function Pe(I){if(o&&I.samples>0&&Ie(I)===!1){let E=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Z=I.width,de=I.height,ce=n.COLOR_BUFFER_BIT,ue=[],Ne=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(I),Te=I.isWebGLMultipleRenderTargets===!0;if(Te)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){ue.push(n.COLOR_ATTACHMENT0+Ve),I.depthBuffer&&ue.push(Ne);let it=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(it===!1&&(I.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ve]),it===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),Te){let le=i.get(E[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,Z,de,0,0,Z,de,ce,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ve]);let it=i.get(E[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function He(I){return Math.min(s.maxSamples,I.samples)}function Ie(I){let E=i.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(I){let E=a.render.frame;d.get(I)!==E&&(d.set(I,E),I.update())}function nt(I,E){let Z=I.colorSpace,de=I.format,ce=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Sh||Z!==bn&&Z!==Mi&&(xt.getTransfer(Z)===Vt?o===!1?e.has("EXT_sRGB")===!0&&de===wi?(I.format=Sh,I.minFilter=fn,I.generateMipmaps=!1):E=Oc.sRGBToLinear(E):(de!==wi||ce!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}this.allocateTextureUnit=C,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=we,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Ie}function S1(n,e,t){let i=t.isWebGL2;function s(r,a=Mi){let o,l=xt.getTransfer(a);if(r===ar)return n.UNSIGNED_BYTE;if(r===y0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===v0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ix)return n.BYTE;if(r===sx)return n.SHORT;if(r===sf)return n.UNSIGNED_SHORT;if(r===g0)return n.INT;if(r===nr)return n.UNSIGNED_INT;if(r===Ss)return n.FLOAT;if(r===Wo)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===rx)return n.ALPHA;if(r===wi)return n.RGBA;if(r===ax)return n.LUMINANCE;if(r===ox)return n.LUMINANCE_ALPHA;if(r===Xr)return n.DEPTH_COMPONENT;if(r===Ja)return n.DEPTH_STENCIL;if(r===Sh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===lx)return n.RED;if(r===b0)return n.RED_INTEGER;if(r===cx)return n.RG;if(r===x0)return n.RG_INTEGER;if(r===_0)return n.RGBA_INTEGER;if(r===zu||r===Hu||r===Vu||r===Gu)if(l===Vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===zu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===zu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dm||r===km||r===Om||r===Um)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Dm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===km)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Om)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Um)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===w0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fm||r===Bm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fm)return l===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zm||r===Hm||r===Vm||r===Gm||r===Wm||r===qm||r===Xm||r===$m||r===Ym||r===jm||r===Zm||r===Km||r===Jm||r===Qm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$m)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ym)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Km)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qm)return l===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wu||r===eg||r===tg)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Wu)return l===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eg)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tg)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dx||r===ng||r===ig||r===sg)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ng)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ig)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sg)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Fh=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Nn=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},A1={type:"move"},Vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),m=this._getHandJoint(c,y);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Bh=class extends lr{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,g=null,y=t.getContextAttributes(),f=null,m=null,x=[],b=[],M=new Ze,S=null,T=new Kt;T.layers.enable(1),T.viewport=new Ct;let A=new Kt;A.layers.enable(2),A.viewport=new Ct;let k=[T,A],v=new Fh;v.layers.enable(1),v.layers.enable(2);let _=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=x[G];return $===void 0&&($=new Vo,x[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=x[G];return $===void 0&&($=new Vo,x[G]=$),$.getGripSpace()},this.getHand=function(G){let $=x[G];return $===void 0&&($=new Vo,x[G]=$),$.getHandSpace()};function N(G){let $=b.indexOf(G.inputSource);if($===-1)return;let Y=x[$];Y!==void 0&&(Y.update(G.inputSource,G.frame,c||a),Y.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",C);for(let G=0;G<x.length;G++){let $=b[G];$!==null&&(b[G]=null,x[G].disconnect($))}_=null,P=null,e.setRenderTarget(f),p=null,h=null,u=null,s=null,m=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",C),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Es(p.framebufferWidth,p.framebufferHeight,{format:wi,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let $=null,Y=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=y.stencil?Ja:Xr,Y=y.stencil?qr:nr);let X={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(X),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Es(h.textureWidth,h.textureHeight,{format:wi,type:ar,depthTexture:new Wc(h.textureWidth,h.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let se=e.properties.get(m);se.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(G){for(let $=0;$<G.removed.length;$++){let Y=G.removed[$],ae=b.indexOf(Y);ae>=0&&(b[ae]=null,x[ae].disconnect(Y))}for(let $=0;$<G.added.length;$++){let Y=G.added[$],ae=b.indexOf(Y);if(ae===-1){for(let se=0;se<x.length;se++)if(se>=b.length){b.push(Y),ae=se;break}else if(b[se]===null){b[se]=Y,ae=se;break}if(ae===-1)break}let X=x[ae];X&&X.connect(Y)}}let R=new D,F=new D;function H(G,$,Y){R.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(Y.matrixWorld);let ae=R.distanceTo(F),X=$.projectionMatrix.elements,se=Y.projectionMatrix.elements,pe=X[14]/(X[10]-1),oe=X[14]/(X[10]+1),we=(X[9]+1)/X[5],q=(X[9]-1)/X[5],Ht=(X[8]-1)/X[0],Pe=(se[8]+1)/se[0],He=pe*Ht,Ie=pe*Pe,Yt=ae/(-Ht+Pe),nt=Yt*-Ht;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(nt),G.translateZ(Yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let I=pe+Yt,E=oe+Yt,Z=He-nt,de=Ie+(ae-nt),ce=we*oe/E*I,ue=q*oe/E*I;G.projectionMatrix.makePerspective(Z,de,ce,ue,I,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function z(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;v.near=A.near=T.near=G.near,v.far=A.far=T.far=G.far,(_!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),_=v.near,P=v.far);let $=G.parent,Y=v.cameras;z(v,$);for(let ae=0;ae<Y.length;ae++)z(Y[ae],$);Y.length===2?H(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),W(G,v,$)};function W(G,$,Y){Y===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(Y.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=eo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let Q=null;function te(G,$){if(d=$.getViewerPose(c||a),g=$,d!==null){let Y=d.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ae=!1;Y.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let X=0;X<Y.length;X++){let se=Y[X],pe=null;if(p!==null)pe=p.getViewport(se);else{let we=u.getViewSubImage(h,se);pe=we.viewport,X===0&&(e.setRenderTargetTextures(m,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let oe=k[X];oe===void 0&&(oe=new Kt,oe.layers.enable(X),oe.viewport=new Ct,k[X]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(pe.x,pe.y,pe.width,pe.height),X===0&&(v.matrix.copy(oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(oe)}}for(let Y=0;Y<x.length;Y++){let ae=b[Y],X=x[Y];ae!==null&&X!==void 0&&X.update(ae,$,c||a)}Q&&Q(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let ie=new C0;ie.setAnimationLoop(te),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}};function E1(n,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,R0(n)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,x,b,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),d(f,m)):m.isMeshStandardMaterial?(r(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),y(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,x,b):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===ti&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===ti&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,x,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=b*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function d(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,x){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ti&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function y(f,m){let x=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T1(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,b){let M=b.program;i.uniformBlockBinding(x,M)}function c(x,b){let M=s[x.id];M===void 0&&(g(x),M=d(x),s[x.id]=M,x.addEventListener("dispose",f));let S=b.program;i.updateUBOMapping(x,S);let T=e.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function d(x){let b=u();x.__bindingPointIndex=b;let M=n.createBuffer(),S=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let b=s[x.id],M=x.uniforms,S=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,A=M.length;T<A;T++){let k=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,_=k.length;v<_;v++){let P=k[v];if(p(P,T,v,S)===!0){let N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],C=0;for(let R=0;R<O.length;R++){let F=O[R],H=y(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,N+C,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,C),C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,b,M,S){let T=x.value,A=b+"_"+M;if(S[A]===void 0)return typeof T=="number"||typeof T=="boolean"?S[A]=T:S[A]=T.clone(),!0;{let k=S[A];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return S[A]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(x){let b=x.uniforms,M=0,S=16;for(let A=0,k=b.length;A<k;A++){let v=Array.isArray(b[A])?b[A]:[b[A]];for(let _=0,P=v.length;_<P;_++){let N=v[_],O=Array.isArray(N.value)?N.value:[N.value];for(let C=0,R=O.length;C<R;C++){let F=O[C],H=y(F),z=M%S;z!==0&&S-z<H.boundary&&(M+=S-z),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=H.storage}}}let T=M%S;return T>0&&(M+=S-T),x.__size=M,x.__cache={},this}function y(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function f(x){let b=x.target;b.removeEventListener("dispose",f);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Kr=class{constructor(e={}){let{canvas:t=Ox(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,f=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;let b=this,M=!1,S=0,T=0,A=null,k=-1,v=null,_=new Ct,P=new Ct,N=null,O=new ke(0),C=0,R=t.width,F=t.height,H=1,z=null,W=null,Q=new Ct(0,0,R,F),te=new Ct(0,0,R,F),ie=!1,G=new $o,$=!1,Y=!1,ae=null,X=new Ce,se=new Ze,pe=new D,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return A===null?H:1}let q=i;function Ht(L,V){for(let K=0;K<L.length;K++){let J=L[K],j=t.getContext(J,V);if(j!==null)return j}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",xe,!1),q===null){let V=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&V.shift(),q=Ht(V,L),q===null)throw Ht(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Pe,He,Ie,Yt,nt,I,E,Z,de,ce,ue,Ne,Me,Te,Ve,it,le,Et,dt,$e,Oe,Re,Je,At;function rn(){Pe=new XM(q),He=new zM(q,Pe,e),Pe.init(He),Re=new S1(q,Pe,He),Ie=new w1(q,Pe,He),Yt=new jM(q),nt=new d1,I=new M1(q,Pe,Ie,nt,He,Re,Yt),E=new VM(b),Z=new qM(b),de=new i_(q,He),Je=new FM(q,Pe,de,He),ce=new $M(q,de,Yt,Je),ue=new QM(q,ce,de,Yt),dt=new JM(q,He,I),it=new HM(nt),Ne=new c1(b,E,Z,Pe,He,Je,it),Me=new E1(b,nt),Te=new h1,Ve=new v1(Pe,He),Et=new UM(b,E,Z,Ie,ue,h,l),le=new _1(b,ue,He),At=new T1(q,Yt,He,Ie),$e=new BM(q,Pe,Yt,He),Oe=new YM(q,Pe,Yt,He),Yt.programs=Ne.programs,b.capabilities=He,b.extensions=Pe,b.properties=nt,b.renderLists=Te,b.shadowMap=le,b.state=Ie,b.info=Yt}rn();let at=new Bh(b,q);this.xr=at,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let L=Pe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Pe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(R,F,!1))},this.getSize=function(L){return L.set(R,F)},this.setSize=function(L,V,K=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=L,F=V,t.width=Math.floor(L*H),t.height=Math.floor(V*H),K===!0&&(t.style.width=L+"px",t.style.height=V+"px"),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(R*H,F*H).floor()},this.setDrawingBufferSize=function(L,V,K){R=L,F=V,H=K,t.width=Math.floor(L*K),t.height=Math.floor(V*K),this.setViewport(0,0,L,V)},this.getCurrentViewport=function(L){return L.copy(_)},this.getViewport=function(L){return L.copy(Q)},this.setViewport=function(L,V,K,J){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,V,K,J),Ie.viewport(_.copy(Q).multiplyScalar(H).floor())},this.getScissor=function(L){return L.copy(te)},this.setScissor=function(L,V,K,J){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,V,K,J),Ie.scissor(P.copy(te).multiplyScalar(H).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(L){Ie.setScissorTest(ie=L)},this.setOpaqueSort=function(L){z=L},this.setTransparentSort=function(L){W=L},this.getClearColor=function(L){return L.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(L=!0,V=!0,K=!0){let J=0;if(L){let j=!1;if(A!==null){let Se=A.texture.format;j=Se===_0||Se===x0||Se===b0}if(j){let Se=A.texture.type,De=Se===ar||Se===nr||Se===sf||Se===qr||Se===y0||Se===v0,Be=Et.getClearColor(),qe=Et.getClearAlpha(),st=Be.r,Ye=Be.g,je=Be.b;De?(p[0]=st,p[1]=Ye,p[2]=je,p[3]=qe,q.clearBufferuiv(q.COLOR,0,p)):(g[0]=st,g[1]=Ye,g[2]=je,g[3]=qe,q.clearBufferiv(q.COLOR,0,g))}else J|=q.COLOR_BUFFER_BIT}V&&(J|=q.DEPTH_BUFFER_BIT),K&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Te.dispose(),Ve.dispose(),nt.dispose(),E.dispose(),Z.dispose(),ue.dispose(),Je.dispose(),At.dispose(),Ne.dispose(),at.dispose(),at.removeEventListener("sessionstart",Hn),at.removeEventListener("sessionend",kt),ae&&(ae.dispose(),ae=null),Vn.stop()};function ye(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=Yt.autoReset,V=le.enabled,K=le.autoUpdate,J=le.needsUpdate,j=le.type;rn(),Yt.autoReset=L,le.enabled=V,le.autoUpdate=K,le.needsUpdate=J,le.type=j}function xe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function _e(L){let V=L.target;V.removeEventListener("dispose",_e),We(V)}function We(L){Ue(L),nt.remove(L)}function Ue(L){let V=nt.get(L).programs;V!==void 0&&(V.forEach(function(K){Ne.releaseProgram(K)}),L.isShaderMaterial&&Ne.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,K,J,j,Se){V===null&&(V=oe);let De=j.isMesh&&j.matrixWorld.determinant()<0,Be=vb(L,V,K,J,j);Ie.setMaterial(J,De);let qe=K.index,st=1;if(J.wireframe===!0){if(qe=ce.getWireframeAttribute(K),qe===void 0)return;st=2}let Ye=K.drawRange,je=K.attributes.position,ln=Ye.start*st,ci=(Ye.start+Ye.count)*st;Se!==null&&(ln=Math.max(ln,Se.start*st),ci=Math.min(ci,(Se.start+Se.count)*st)),qe!==null?(ln=Math.max(ln,0),ci=Math.min(ci,qe.count)):je!=null&&(ln=Math.max(ln,0),ci=Math.min(ci,je.count));let Mn=ci-ln;if(Mn<0||Mn===1/0)return;Je.setup(j,J,Be,K,qe);let gs,jt=$e;if(qe!==null&&(gs=de.get(qe),jt=Oe,jt.setIndex(gs)),j.isMesh)J.wireframe===!0?(Ie.setLineWidth(J.wireframeLinewidth*we()),jt.setMode(q.LINES)):jt.setMode(q.TRIANGLES);else if(j.isLine){let ot=J.linewidth;ot===void 0&&(ot=1),Ie.setLineWidth(ot*we()),j.isLineSegments?jt.setMode(q.LINES):j.isLineLoop?jt.setMode(q.LINE_LOOP):jt.setMode(q.LINE_STRIP)}else j.isPoints?jt.setMode(q.POINTS):j.isSprite&&jt.setMode(q.TRIANGLES);if(j.isBatchedMesh)jt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)jt.renderInstances(ln,Mn,j.count);else if(K.isInstancedBufferGeometry){let ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ou=Math.min(K.instanceCount,ot);jt.renderInstances(ln,Mn,Ou)}else jt.render(ln,Mn)};function Nt(L,V,K){L.transparent===!0&&L.side===qn&&L.forceSinglePass===!1?(L.side=ti,L.needsUpdate=!0,ec(L,V,K),L.side=Qi,L.needsUpdate=!0,ec(L,V,K),L.side=qn):ec(L,V,K)}this.compile=function(L,V,K=null){K===null&&(K=L),f=Ve.get(K),f.init(),x.push(f),K.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),L!==K&&L.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights(b._useLegacyLights);let J=new Set;return L.traverse(function(j){let Se=j.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){let Be=Se[De];Nt(Be,K,j),J.add(Be)}else Nt(Se,K,j),J.add(Se)}),x.pop(),f=null,J},this.compileAsync=function(L,V,K=null){let J=this.compile(L,V,K);return new Promise(j=>{function Se(){if(J.forEach(function(De){nt.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){j(L);return}setTimeout(Se,10)}Pe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Dt=null;function wn(L){Dt&&Dt(L)}function Hn(){Vn.stop()}function kt(){Vn.start()}let Vn=new C0;Vn.setAnimationLoop(wn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(L){Dt=L,at.setAnimationLoop(L),L===null?Vn.stop():Vn.start()},at.addEventListener("sessionstart",Hn),at.addEventListener("sessionend",kt),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(V),V=at.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,V,A),f=Ve.get(L,x.length),f.init(),x.push(f),X.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G.setFromProjectionMatrix(X),Y=this.localClippingEnabled,$=it.init(this.clippingPlanes,Y),y=Te.get(L,m.length),y.init(),m.push(y),Zi(L,V,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(z,W),this.info.render.frame++,$===!0&&it.beginShadows();let K=f.state.shadowsArray;if(le.render(K,L,V),$===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(y,L),f.setupLights(b._useLegacyLights),V.isArrayCamera){let J=V.cameras;for(let j=0,Se=J.length;j<Se;j++){let De=J[j];_m(y,L,De,De.viewport)}}else _m(y,L,V);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(b,L,V),Je.resetDefaultState(),k=-1,v=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Zi(L,V,K,J){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||G.intersectsSprite(L)){J&&pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(X);let De=ue.update(L),Be=L.material;Be.visible&&y.push(L,De,Be,K,pe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||G.intersectsObject(L))){let De=ue.update(L),Be=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),pe.copy(L.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),pe.copy(De.boundingSphere.center)),pe.applyMatrix4(L.matrixWorld).applyMatrix4(X)),Array.isArray(Be)){let qe=De.groups;for(let st=0,Ye=qe.length;st<Ye;st++){let je=qe[st],ln=Be[je.materialIndex];ln&&ln.visible&&y.push(L,De,ln,K,pe.z,je)}}else Be.visible&&y.push(L,De,Be,K,pe.z,null)}}let Se=L.children;for(let De=0,Be=Se.length;De<Be;De++)Zi(Se[De],V,K,J)}function _m(L,V,K,J){let j=L.opaque,Se=L.transmissive,De=L.transparent;f.setupLightsView(K),$===!0&&it.setGlobalState(b.clippingPlanes,K),Se.length>0&&yb(j,Se,V,K),J&&Ie.viewport(_.copy(J)),j.length>0&&Ql(j,V,K),Se.length>0&&Ql(Se,V,K),De.length>0&&Ql(De,V,K),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function yb(L,V,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Se=He.isWebGL2;ae===null&&(ae=new Es(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Wo:ar,minFilter:or,samples:Se?4:0})),b.getDrawingBufferSize(se),Se?ae.setSize(se.x,se.y):ae.setSize(kc(se.x),kc(se.y));let De=b.getRenderTarget();b.setRenderTarget(ae),b.getClearColor(O),C=b.getClearAlpha(),C<1&&b.setClearColor(16777215,.5),b.clear();let Be=b.toneMapping;b.toneMapping=rr,Ql(L,K,J),I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae);let qe=!1;for(let st=0,Ye=V.length;st<Ye;st++){let je=V[st],ln=je.object,ci=je.geometry,Mn=je.material,gs=je.group;if(Mn.side===qn&&ln.layers.test(J.layers)){let jt=Mn.side;Mn.side=ti,Mn.needsUpdate=!0,wm(ln,K,J,ci,Mn,gs),Mn.side=jt,Mn.needsUpdate=!0,qe=!0}}qe===!0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),b.setRenderTarget(De),b.setClearColor(O,C),b.toneMapping=Be}function Ql(L,V,K){let J=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Se=L.length;j<Se;j++){let De=L[j],Be=De.object,qe=De.geometry,st=J===null?De.material:J,Ye=De.group;Be.layers.test(K.layers)&&wm(Be,V,K,qe,st,Ye)}}function wm(L,V,K,J,j,Se){L.onBeforeRender(b,V,K,J,j,Se),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(b,V,K,J,L,Se),j.transparent===!0&&j.side===qn&&j.forceSinglePass===!1?(j.side=ti,j.needsUpdate=!0,b.renderBufferDirect(K,V,J,j,L,Se),j.side=Qi,j.needsUpdate=!0,b.renderBufferDirect(K,V,J,j,L,Se),j.side=qn):b.renderBufferDirect(K,V,J,j,L,Se),L.onAfterRender(b,V,K,J,j,Se)}function ec(L,V,K){V.isScene!==!0&&(V=oe);let J=nt.get(L),j=f.state.lights,Se=f.state.shadowsArray,De=j.state.version,Be=Ne.getParameters(L,j.state,Se,V,K),qe=Ne.getProgramCacheKey(Be),st=J.programs;J.environment=L.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(L.isMeshStandardMaterial?Z:E).get(L.envMap||J.environment),st===void 0&&(L.addEventListener("dispose",_e),st=new Map,J.programs=st);let Ye=st.get(qe);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===De)return Sm(L,Be),Ye}else Be.uniforms=Ne.getUniforms(L),L.onBuild(K,Be,b),L.onBeforeCompile(Be,b),Ye=Ne.acquireProgram(Be,qe),st.set(qe,Ye),J.uniforms=Be.uniforms;let je=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(je.clippingPlanes=it.uniform),Sm(L,Be),J.needsLights=xb(L),J.lightsStateVersion=De,J.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMap.value=j.state.directionalShadowMap,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotShadowMap.value=j.state.spotShadowMap,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMap.value=j.state.pointShadowMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function Mm(L){if(L.uniformsList===null){let V=L.currentProgram.getUniforms();L.uniformsList=ja.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function Sm(L,V){let K=nt.get(L);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function vb(L,V,K,J,j){V.isScene!==!0&&(V=oe),I.resetTextureUnits();let Se=V.fog,De=J.isMeshStandardMaterial?V.environment:null,Be=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,qe=(J.isMeshStandardMaterial?Z:E).get(J.envMap||De),st=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!K.morphAttributes.position,ln=!!K.morphAttributes.normal,ci=!!K.morphAttributes.color,Mn=rr;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mn=b.toneMapping);let gs=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,jt=gs!==void 0?gs.length:0,ot=nt.get(J),Ou=f.state.lights;if($===!0&&(Y===!0||L!==v)){let xi=L===v&&J.id===k;it.setState(J,L,xi)}let an=!1;J.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Ou.state.version||ot.outputColorSpace!==Be||j.isBatchedMesh&&ot.batching===!1||!j.isBatchedMesh&&ot.batching===!0||j.isInstancedMesh&&ot.instancing===!1||!j.isInstancedMesh&&ot.instancing===!0||j.isSkinnedMesh&&ot.skinning===!1||!j.isSkinnedMesh&&ot.skinning===!0||j.isInstancedMesh&&ot.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ot.instancingColor===!1&&j.instanceColor!==null||ot.envMap!==qe||J.fog===!0&&ot.fog!==Se||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==it.numPlanes||ot.numIntersection!==it.numIntersection)||ot.vertexAlphas!==st||ot.vertexTangents!==Ye||ot.morphTargets!==je||ot.morphNormals!==ln||ot.morphColors!==ci||ot.toneMapping!==Mn||He.isWebGL2===!0&&ot.morphTargetsCount!==jt)&&(an=!0):(an=!0,ot.__version=J.version);let Or=ot.currentProgram;an===!0&&(Or=ec(J,V,j));let Am=!1,Lo=!1,Uu=!1,Cn=Or.getUniforms(),Ur=ot.uniforms;if(Ie.useProgram(Or.program)&&(Am=!0,Lo=!0,Uu=!0),J.id!==k&&(k=J.id,Lo=!0),Am||v!==L){Cn.setValue(q,"projectionMatrix",L.projectionMatrix),Cn.setValue(q,"viewMatrix",L.matrixWorldInverse);let xi=Cn.map.cameraPosition;xi!==void 0&&xi.setValue(q,pe.setFromMatrixPosition(L.matrixWorld)),He.logarithmicDepthBuffer&&Cn.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Cn.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),v!==L&&(v=L,Lo=!0,Uu=!0)}if(j.isSkinnedMesh){Cn.setOptional(q,j,"bindMatrix"),Cn.setOptional(q,j,"bindMatrixInverse");let xi=j.skeleton;xi&&(He.floatVertexTextures?(xi.boneTexture===null&&xi.computeBoneTexture(),Cn.setValue(q,"boneTexture",xi.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Cn.setOptional(q,j,"batchingTexture"),Cn.setValue(q,"batchingTexture",j._matricesTexture,I));let Fu=K.morphAttributes;if((Fu.position!==void 0||Fu.normal!==void 0||Fu.color!==void 0&&He.isWebGL2===!0)&&dt.update(j,K,Or),(Lo||ot.receiveShadow!==j.receiveShadow)&&(ot.receiveShadow=j.receiveShadow,Cn.setValue(q,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ur.envMap.value=qe,Ur.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Lo&&(Cn.setValue(q,"toneMappingExposure",b.toneMappingExposure),ot.needsLights&&bb(Ur,Uu),Se&&J.fog===!0&&Me.refreshFogUniforms(Ur,Se),Me.refreshMaterialUniforms(Ur,J,H,F,ae),ja.upload(q,Mm(ot),Ur,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ja.upload(q,Mm(ot),Ur,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Cn.setValue(q,"center",j.center),Cn.setValue(q,"modelViewMatrix",j.modelViewMatrix),Cn.setValue(q,"normalMatrix",j.normalMatrix),Cn.setValue(q,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let xi=J.uniformsGroups;for(let Bu=0,_b=xi.length;Bu<_b;Bu++)if(He.isWebGL2){let Em=xi[Bu];At.update(Em,Or),At.bind(Em,Or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Or}function bb(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function xb(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,V,K){nt.get(L.texture).__webglTexture=V,nt.get(L.depthTexture).__webglTexture=K;let J=nt.get(L);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,V){let K=nt.get(L);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(L,V=0,K=0){A=L,S=V,T=K;let J=!0,j=null,Se=!1,De=!1;if(L){let qe=nt.get(L);qe.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(q.FRAMEBUFFER,null),J=!1):qe.__webglFramebuffer===void 0?I.setupRenderTarget(L):qe.__hasExternalTextures&&I.rebindTextures(L,nt.get(L.texture).__webglTexture,nt.get(L.depthTexture).__webglTexture);let st=L.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(De=!0);let Ye=nt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?j=Ye[V][K]:j=Ye[V],Se=!0):He.isWebGL2&&L.samples>0&&I.useMultisampledRTT(L)===!1?j=nt.get(L).__webglMultisampledFramebuffer:Array.isArray(Ye)?j=Ye[K]:j=Ye,_.copy(L.viewport),P.copy(L.scissor),N=L.scissorTest}else _.copy(Q).multiplyScalar(H).floor(),P.copy(te).multiplyScalar(H).floor(),N=ie;if(Ie.bindFramebuffer(q.FRAMEBUFFER,j)&&He.drawBuffers&&J&&Ie.drawBuffers(L,j),Ie.viewport(_),Ie.scissor(P),Ie.setScissorTest(N),Se){let qe=nt.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,qe.__webglTexture,K)}else if(De){let qe=nt.get(L.texture),st=V||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,qe.__webglTexture,K||0,st)}k=-1},this.readRenderTargetPixels=function(L,V,K,J,j,Se,De){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Ie.bindFramebuffer(q.FRAMEBUFFER,Be);try{let qe=L.texture,st=qe.format,Ye=qe.type;if(st!==wi&&Re.convert(st)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let je=Ye===Wo&&(Pe.has("EXT_color_buffer_half_float")||He.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ye!==ar&&Re.convert(Ye)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Ss&&(He.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-J&&K>=0&&K<=L.height-j&&q.readPixels(V,K,J,j,Re.convert(st),Re.convert(Ye),Se)}finally{let qe=A!==null?nt.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(q.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(L,V,K=0){let J=Math.pow(2,-K),j=Math.floor(V.image.width*J),Se=Math.floor(V.image.height*J);I.setTexture2D(V,0),q.copyTexSubImage2D(q.TEXTURE_2D,K,0,0,L.x,L.y,j,Se),Ie.unbindTexture()},this.copyTextureToTexture=function(L,V,K,J=0){let j=V.image.width,Se=V.image.height,De=Re.convert(K.format),Be=Re.convert(K.type);I.setTexture2D(K,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,J,L.x,L.y,j,Se,De,Be,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,J,L.x,L.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,J,L.x,L.y,De,Be,V.image),J===0&&K.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(L,V,K,J,j=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=L.max.x-L.min.x+1,De=L.max.y-L.min.y+1,Be=L.max.z-L.min.z+1,qe=Re.convert(J.format),st=Re.convert(J.type),Ye;if(J.isData3DTexture)I.setTexture3D(J,0),Ye=q.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)I.setTexture2DArray(J,0),Ye=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment);let je=q.getParameter(q.UNPACK_ROW_LENGTH),ln=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ci=q.getParameter(q.UNPACK_SKIP_PIXELS),Mn=q.getParameter(q.UNPACK_SKIP_ROWS),gs=q.getParameter(q.UNPACK_SKIP_IMAGES),jt=K.isCompressedTexture?K.mipmaps[j]:K.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,jt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,jt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,L.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,L.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,L.min.z),K.isDataTexture||K.isData3DTexture?q.texSubImage3D(Ye,j,V.x,V.y,V.z,Se,De,Be,qe,st,jt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ye,j,V.x,V.y,V.z,Se,De,Be,qe,jt.data)):q.texSubImage3D(Ye,j,V.x,V.y,V.z,Se,De,Be,qe,st,jt),q.pixelStorei(q.UNPACK_ROW_LENGTH,je),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ln),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ci),q.pixelStorei(q.UNPACK_SKIP_ROWS,Mn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,gs),j===0&&J.generateMipmaps&&q.generateMipmap(Ye),Ie.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Ie.unbindTexture()},this.resetState=function(){S=0,T=0,A=null,Ie.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===af?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===ld?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?$r:S0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$r?Zt:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},zh=class extends Kr{};zh.prototype.isWebGL1Renderer=!0;var qc=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var io=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new D,jo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ji(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Yg=new D,jg=new Ct,Zg=new Ct,R1=new D,Kg=new Ce,Mc=new D,ph=new pi,Jg=new Ce,mh=new Zr,Xc=class extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nm,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Mc),this.boundingBox.expandByPoint(Mc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Mc),this.boundingSphere.expandByPoint(Mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ph.copy(this.boundingSphere),ph.applyMatrix4(s),e.ray.intersectsSphere(ph)!==!1&&(Jg.copy(s).invert(),mh.copy(e.ray).applyMatrix4(Jg),!(this.boundingBox!==null&&mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;jg.fromBufferAttribute(s.attributes.skinIndex,e),Zg.fromBufferAttribute(s.attributes.skinWeight,e),Yg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Zg.getComponent(r);if(a!==0){let o=jg.getComponent(r);Kg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(R1.copy(Yg).applyMatrix4(Kg),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Zo=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hh=class extends Tn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=vn,d=vn,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qg=new Ce,C1=new Ce,$c=class n{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:C1;Qg.multiplyMatrices(o,t[r]),Qg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Hh(t,e,e,wi,Ss);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zo),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Jr=class extends Ut{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ga=new Ce,e0=new Ce,Sc=[],t0=new Si,L1=new Ce,ko=new Rt,Oo=new pi,Yc=class extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,L1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ga),t0.copy(e.boundingBox).applyMatrix4(Ga),this.boundingBox.union(t0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ga),Oo.copy(e.boundingSphere).applyMatrix4(Ga),this.boundingSphere.union(Oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(i),e.ray.intersectsSphere(Oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ga),e0.multiplyMatrices(i,Ga),ko.matrixWorld=e0,ko.raycast(e,Sc);for(let a=0,o=Sc.length;a<o;a++){let l=Sc[a];l.instanceId=r,l.object=this,t.push(l)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ko=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},n0=new D,i0=new D,s0=new Ce,gh=new Zr,Ac=new pi,so=class extends Gt{constructor(e=new $n,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)n0.fromBufferAttribute(t,s-1),i0.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=n0.distanceTo(i0);e.setAttribute("lineDistance",new Xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(s),Ac.radius+=r,e.ray.intersectsSphere(Ac)===!1)return;s0.copy(s).invert(),gh.copy(e.ray).applyMatrix4(s0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,d=new D,u=new D,h=new D,p=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){let m=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let b=m,M=x-1;b<M;b+=p){let S=g.getX(b),T=g.getX(b+1);if(c.fromBufferAttribute(f,S),d.fromBufferAttribute(f,T),gh.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(h);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let b=m,M=x-1;b<M;b+=p){if(c.fromBufferAttribute(f,b),d.fromBufferAttribute(f,b+1),gh.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},r0=new D,a0=new D,jc=class extends so{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)r0.fromBufferAttribute(t,s),a0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+r0.distanceTo(a0);e.setAttribute("lineDistance",new Xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zc=class extends so{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jo=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},o0=new Ce,Vh=new Zr,Ec=new pi,Tc=new D,Kc=class extends Gt{constructor(e=new $n,t=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;o0.copy(s).invert(),Vh.copy(e.ray).applyMatrix4(o0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,y=p;g<y;g++){let f=c.getX(g);Tc.fromBufferAttribute(u,f),l0(Tc,f,l,s,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=h,y=p;g<y;g++)Tc.fromBufferAttribute(u,g),l0(Tc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function l0(n,e,t,i,s,r,a){let o=Vh.distanceSqToPoint(n);if(o<t){let l=new D;Vh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Jc=class extends Tn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qc=class n extends $n{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],p=[],g=0,y=[],f=i/2,m=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Xn(u,3)),this.setAttribute("normal",new Xn(h,3)),this.setAttribute("uv",new Xn(p,2));function x(){let M=new D,S=new D,T=0,A=(t-e)/i;for(let k=0;k<=r;k++){let v=[],_=k/r,P=_*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,C=O*l+o,R=Math.sin(C),F=Math.cos(C);S.x=P*R,S.y=-_*i+f,S.z=P*F,u.push(S.x,S.y,S.z),M.set(R,A,F).normalize(),h.push(M.x,M.y,M.z),p.push(O,1-_),v.push(g++)}y.push(v)}for(let k=0;k<s;k++)for(let v=0;v<r;v++){let _=y[v][k],P=y[v+1][k],N=y[v+1][k+1],O=y[v][k+1];d.push(_,P,O),d.push(P,N,O),T+=6}c.addGroup(m,T,0),m+=T}function b(M){let S=g,T=new Ze,A=new D,k=0,v=M===!0?e:t,_=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,f*_,0),h.push(0,_,0),p.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let C=N/s*l+o,R=Math.cos(C),F=Math.sin(C);A.x=v*F,A.y=f*_,A.z=v*R,u.push(A.x,A.y,A.z),h.push(0,_,0),T.x=R*.5+.5,T.y=F*.5*_+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){let O=S+N,C=P+N;M===!0?d.push(C,C+1,O):d.push(C+1,C,O),k+=3}c.addGroup(m,k,M===!0?1:2),m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ro=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ai=class extends ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return In(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ao=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Rc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function P1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function I1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function c0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function k0(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var dr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gh=class extends dr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rg,endingEnd:rg}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ag:r=e,o=2*t-i;break;case og:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ag:a=e,l=2*i-t;break;case og:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,f=y*g,m=-h*f+2*h*y-h*g,x=(1+h)*f+(-1.5-2*h)*y+(-.5+h)*g+1,b=(-1-p)*f+(1.5+p)*y+.5*g,M=p*f-p*y;for(let S=0;S!==o;++S)r[S]=m*a[d+S]+x*a[c+S]+b*a[l+S]+M*a[u+S];return r}},Wh=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),u=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*d;return r}},qh=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ei=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rc(t,this.TimeBufferType),this.values=Rc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rc(e.times,Array),values:Rc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&P1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qu,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,h=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[h+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,h=a*i;for(let p=0;p!==i;++p)t[h+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=jr;var ur=class extends Ei{};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Qa;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var ed=class extends Ei{};ed.prototype.ValueTypeName="color";var Rs=class extends Ei{};Rs.prototype.ValueTypeName="number";var Xh=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Ke.slerpFlat(r,0,a,c-o,a,c,l);return r}},es=class extends Ei{InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=jr;es.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Ei{};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Qa;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Ei{};Cs.prototype.ValueTypeName="vector";var td=class{constructor(e,t=-1,i,s=ux){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Bi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(D1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Ei.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let d=I1(l);l=c0(l,1,d),c=c0(c,1,d),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],d=c.name.match(r);if(d&&d.length>1){let u=d[1],h=s[u];h||(s[u]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,h,p,g,y){if(p.length!==0){let f=[],m=[];k0(p,f,m,g),f.length!==0&&y.push(new u(h,f,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let p={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)p[h[g].morphTargets[y]]=-1;for(let y in p){let f=[],m=[];for(let x=0;x!==h[g].morphTargets.length;++x){let b=h[g];f.push(b.time),m.push(b.morphTarget===y?1:0)}s.push(new Rs(".morphTargetInfluence["+y+"]",f,m))}l=p.length*a}else{let p=".bones["+t[u].name+"]";i(Cs,p+".position",h,"pos",s),i(es,p+".quaternion",h,"rot",s),i(Cs,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function N1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return ed;case"quaternion":return es;case"bool":case"boolean":return ur;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function D1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=N1(n.type);if(n.times===void 0){let t=[],i=[];k0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ir={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},$h=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}},k1=new $h,Ls=class{constructor(e){this.manager=e!==void 0?e:k1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws={},Yh=class extends Error{constructor(e,t){super(e),this.response=t}},Qo=class extends Ls{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ir.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ws[e]!==void 0){ws[e].push({onLoad:t,onProgress:i,onError:s});return}ws[e]=[],ws[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=ws[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0,y=0,f=new ReadableStream({start(m){x();function x(){u.read().then(({done:b,value:M})=>{if(b)m.close();else{y+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let T=0,A=d.length;T<A;T++){let k=d[T];k.onProgress&&k.onProgress(S)}m.enqueue(M),x()}})}}});return new Response(f)}else throw new Yh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ir.add(e,c);let d=ws[e];delete ws[e];for(let u=0,h=d.length;u<h;u++){let p=d[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let d=ws[e];if(d===void 0)throw this.manager.itemError(e),c;delete ws[e];for(let u=0,h=d.length;u<h;u++){let p=d[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jh=class extends Ls{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ir.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=qo("img");function l(){d(),ir.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var oo=class extends Ls{constructor(e){super(e)}load(e,t,i,s){let r=new Tn,a=new jh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},lo=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},nd=class extends lo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yh=new Ce,d0=new D,u0=new D,el=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;d0.setFromMatrixPosition(e.matrixWorld),t.position.copy(d0),u0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u0),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zh=class extends el{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},id=class extends lo{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},h0=new Ce,Uo=new D,vh=new D,Kh=class extends el{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Uo),vh.copy(i.position),vh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vh),i.updateMatrixWorld(),s.makeTranslation(-Uo.x,-Uo.y,-Uo.z),h0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h0)}},sd=class extends lo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jh=class extends el{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fr=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rd=class extends Ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ir.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ir.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ir.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ir.add(e,l),r.manager.itemStart(e)}};var cf="\\[\\]\\.:\\/",O1=new RegExp("["+cf+"]","g"),df="[^"+cf+"]",U1="[^"+cf.replace("\\.","")+"]",F1=/((?:WC+[\/:])*)/.source.replace("WC",df),B1=/(WCOD+)?/.source.replace("WCOD",U1),z1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),H1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),V1=new RegExp("^"+F1+B1+z1+H1+"$"),G1=["material","materials","bones","map"],Qh=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O1,"")}static parseTrackName(e){let t=V1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);G1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Qh;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lR=new Float32Array(1);var tl=class{constructor(e,t,i=0,s=1/0){this.ray=new Zr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ef(e,this,i,t),i.sort(f0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ef(e[s],this,i,t);return i.sort(f0),i}};function f0(n,e){return n.distance-e.distance}function ef(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)ef(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var si=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function O0(n){if(n.comfortVersion===si.version)return n;let e={...n,comfortVersion:si.version,winDist:si.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=si.windowScale),e}function W1(n,e){return n>0&&e>0?n/e:16/9}function rl(n,e,t){let i=W1(n,e),s=t>0?t:i,r,a;s>=i?(r=n,a=n/s):(a=e,r=e*s);let o=Math.round((n-r)/2),l=Math.round((e-a)/2),c=Math.round(r),d=Math.round(a);return{x:o,y:l,w:c,h:d,u0:o/n,v0:l/e,uw:c/n,vh:d/e}}function uf(n,e,t,i,s){let r=rl(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var ts=4096,kn={width:1200,height:800},pr=160;function q1(n,e=ts){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let a=Math.ceil(t)+pr*2,o=Math.ceil(i)+pr*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,d=s==="dock"?400:s==="keyboard"?936:980;if(r>5||a>(s==="window"||s==="slot"?1360:e)||o>d||l+a>e||c+o>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,a,o]})}var dd=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var u,h,p;if(window.__gorillaStereoOverlay){let g=2*Math.tan(il.degToRad(36)),f=[{overlay:!0,matrix:new Ce().makeTranslation(0,0,-1).multiply(new Ce().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,kn.width/2,kn.height],uvR:[kn.width/2/ts,1-kn.height/ts,kn.width/2/ts,kn.height/ts]}],m=JSON.stringify(f),x="[]";(m!==this.sent||x!==this.sentSpecs)&&(this.sent=m,this.sentSpecs=x,(h=(u=window.NativeXR)==null?void 0:u.frame)==null||h.call(u,m,x));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let x=new Set(this.slots.values()),b=0;for(;x.has(b);)b++;this.slots.set(g.id,b)}let f=y==="window"||y==="slot"?1040:ts-pr*2,m=(y==="dock"?400:y==="keyboard"?936:980)-pr*2;return{width:Math.min(g.element.offsetWidth,f),height:Math.min(g.element.offsetHeight,m),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=q1(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(p=window.nextvrMessage)==null||p.call(window,g.message));return}let r=[],a=[];t.forEach((g,y)=>{let f=g.element,[m,x,b,M]=s[y],S=`${m+pr}px`,T=`${x+pr}px`;f.style.left!==S&&(f.style.left=S),f.style.top!==T&&(f.style.top=T);let A=g.matrixWorld.clone().multiply(new Ce().makeScale(b,M,1)),k=+(f.dataset.curve||0);r.push({id:f.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:A.toArray(),rect:s[y],curve:k,glass:[pr/b,pr/M,i[y].width/b,i[y].height/M]});let v=f.getBoundingClientRect();for(let _ of f.querySelectorAll("[data-native-app]")){let P=_.getBoundingClientRect();if(!P.width||!P.height)continue;let N=+(_.dataset.aspect||0),O=rl(P.width,P.height,N),C=g.matrixWorld.clone().multiply(new Ce().makeTranslation(P.left-v.left+O.x+O.w/2-i[y].width/2,i[y].height/2-(P.top-v.top+O.y+O.h/2),.5)).multiply(new Ce().makeScale(O.w,O.h,1));r.push({browser:"app:"+_.dataset.nativeApp,matrix:C.toArray(),rect:[0,0,Math.round(P.width),Math.round(P.height)],curve:+(f.dataset.curve||0),uv:[O.u0,O.v0,O.uw,O.vh]});let R=[O.u0,O.v0,O.uw,O.vh].map(F=>F.toFixed(5)).join(",");_.dataset.uv!==R&&(_.dataset.uv=R,this.last=0)}for(let _ of f.querySelectorAll("[data-native-xr]")){let P=_.getBoundingClientRect();if(!P.width||!P.height)continue;let N="xr:"+_.dataset.nativeXr,O=+(_.dataset.aspect||0),C=rl(P.width,P.height,O),R=g.matrixWorld.clone().multiply(new Ce().makeTranslation(P.left-v.left+C.x+C.w/2-i[y].width/2,i[y].height/2-(P.top-v.top+C.y+C.h/2),.5)).multiply(new Ce().makeScale(C.w,C.h,1));r.push({browser:N,matrix:R.toArray(),rect:[0,0,Math.round(P.width),Math.round(P.height)],curve:+(f.dataset.curve||0),uv:[C.u0,C.v0,C.uw/2,C.vh],uvR:[C.u0+C.uw/2,C.v0,C.uw/2,C.vh]})}for(let _ of f.querySelectorAll("[data-native-browser]")){let P=_.getBoundingClientRect();if(!P.width||!P.height)continue;let N=_.dataset.nativeBrowser,O=_.dataset.url;if(!O)continue;let C=Math.round(P.width),R=Math.round(P.height),F={left:P.left,top:P.top,right:P.right,bottom:P.bottom};for(let Q=_.parentElement;Q&&Q!==f;Q=Q.parentElement){let te=getComputedStyle(Q);if(/(auto|scroll|hidden)/.test(te.overflow+te.overflowY)){let ie=Q.getBoundingClientRect();F.left=Math.max(F.left,ie.left),F.top=Math.max(F.top,ie.top),F.right=Math.min(F.right,ie.right),F.bottom=Math.min(F.bottom,ie.bottom)}}a.push({id:N,url:O,width:C,height:R});let H=F.right-F.left,z=F.bottom-F.top;if(H<=0||z<=0)continue;let W=g.matrixWorld.clone().multiply(new Ce().makeTranslation(F.left-v.left+H/2-i[y].width/2,i[y].height/2-(F.top-v.top+z/2),.5)).multiply(new Ce().makeScale(H,z,1));r.push({browser:N,matrix:W.toArray(),rect:[0,0,C,R],curve:+(f.dataset.curve||0),homeOverlay:_.dataset.homeOverlay==="1",uv:[(F.left-P.left)/C,(P.bottom-F.bottom)/R,H/C,z/R]})}});let o=2*Math.tan(il.degToRad(36)),l=new Ce().makeTranslation(0,0,-1).multiply(new Ce().makeScale(o*1.5,o,1));if(window.__gorillaStereoOverlay){let g=new Ce().makeTranslation(0,0,-1).multiply(new Ce().makeScale(o*1.78,o*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,kn.width/2,kn.height],uvR:[kn.width/2/ts,1-kn.height/ts,kn.width/2/ts,kn.height/ts]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,kn.width,kn.height]});let c=performance.now(),d=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[d]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(a);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var uo=new D,fR=new D,X1=new D,ol=()=>null,ud=()=>!0,F0=()=>null,al=null,ho=[],U0=0;function B0(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-U0>400&&(ho.length=0);return}ho.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,a=1,o=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let d=s[c],u=s[c+1];d<r&&(r=d),u<a&&(a=u),d>o&&(o=d),u>l&&(l=u)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<a&&(a=c.y),c.x>o&&(o=c.x),c.y>l&&(l=c.y));o>=r&&l>=a&&ho.push({x0:Math.max(0,r-.14),y0:Math.max(0,a-.14),x1:Math.min(1,o+.14),y1:Math.min(1,l+.14)})}ho.length>0&&(U0=e)}var hd={energy:0,lastA:null,lastStepT:0,onMotion(n){let e=n==null?void 0:n.rotationRate,t=e?Math.hypot(e.alpha||0,e.beta||0,e.gamma||0):0,i=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!i||i.x===null)return;let s=Math.hypot(i.x||0,i.y||0,i.z||0);if(this.lastA){let r=Math.abs(s-this.lastA.mag);r>.07&&t<85?(this.energy=Math.min(4,this.energy*.86+r*1.35),this.energy>.09&&(this.lastStepT=typeof performance<"u"?performance.now():Date.now())):this.energy*=.88}this.lastA={x:i.x,y:i.y,z:i.z,mag:this.lastA?.92*this.lastA.mag+.08*s:s}},moving(){if(!this.lastA)return!0;let n=typeof performance<"u"?performance.now():Date.now();return this.energy>.08&&n-this.lastStepT<1050}},Jt={W:96,H:72,cv:null,ctx:null,prev:null,pos:new D,out:new D,prevOut:new D,stepDelta:new D,lastT:0,lastSc:0,lastScAt:0,_lastSentX:0,_lastSentZ:0,depth:.95,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this.lastScAt=0,this._lastSentX=0,this._lastSentZ=0;let n=ol();n&&(n.position.x=0,n.position.z=0),typeof al=="function"?al(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,a=0,o=0;for(let f=-7;f<=7;f++)for(let m=-7;m<=7;m++){let x=0;for(let b=22;b<50&&x<r;b+=2){let M=b*t,S=(b+f)*t;for(let T=30;T<66;T+=2)x+=Math.abs(n[S+T+m]-s[M+T])}x<r&&(r=x,a=m,o=f)}let l=[],c=new Float32Array(25);for(let f=10;f<=i-18;f+=10)for(let m=10;m<=t-18;m+=11){let x=(m+4)/t,b=(f+4)/i,M=!1;for(let O of ho)if(x>O.x0&&x<O.x1&&b>O.y0&&b<O.y1){M=!0;break}if(M)continue;let S=0;for(let O=f;O<f+8;O++){let C=O*t;for(let R=m;R<m+7;R++)S+=Math.abs(s[C+R+1]-s[C+R])}if(S<200)continue;let T=1e18,A=0,k=0,v=0;for(let O=-2;O<=2;O++)for(let C=-2;C<=2;C++){let R=m+a+C,F=f+o+O;if(R<0||F<0||R+8>t||F+8>i){c[v++]=1e18;continue}let H=0;for(let z=0;z<8;z++){let W=(f+z)*t+m,Q=(F+z)*t+R;for(let te=0;te<8;te++)H+=Math.abs(n[Q+te]-s[W+te])}c[v++]=H,H<T&&(T=H,A=C,k=O)}let _=(O,C)=>c[(C+2)*5+(O+2)],P=0,N=0;if(Math.abs(A)<2){let O=_(A-1,k),C=_(A+1,k),R=O-2*T+C;R>0&&O<1e17&&C<1e17&&(P=.5*(O-C)/R)}if(Math.abs(k)<2){let O=_(A,k-1),C=_(A,k+1),R=O-2*T+C;R>0&&O<1e17&&C<1e17&&(N=.5*(O-C)/R)}l.push({x:m+4-t*.5,y:f+4-i*.5,dx:a+A+P,dy:o+k+N})}if(this.prev.set(n),l.length<10)return null;let d=f=>{let m=0,x=0,b=0,M=0;for(let k of f)m+=k.dx,x+=k.dy,b+=k.x,M+=k.y;let S=f.length;m/=S,x/=S,b/=S,M/=S;let T=0,A=0;for(let k of f){let v=k.x-b,_=k.y-M;T+=(k.dx-m)*v+(k.dy-x)*_,A+=v*v+_*_}return{sc:A>0?T/A:0,mx:m,my:x,px:b,py:M}},u=d(l),h=l.map(f=>Math.hypot(f.dx-u.mx-u.sc*(f.x-u.px),f.dy-u.my-u.sc*(f.y-u.py))),p=[...h].sort((f,m)=>f-m),g=p[p.length>>1]||.5;if(g>.85)return null;let y=l.filter((f,m)=>h[m]<=Math.max(.35,g*2));return y.length<8?null:(u=d(y),this.applyFlowScale(u.sc,a,o,e,u.mx-a),{sc:u.sc,gx:a,gy:o})},applyFlowScale(n,e=0,t=0,i,s=0){if(!ud())return;let r=ol();if(!r)return;let a=typeof performance<"u"?performance.now():Date.now();if(!Number.isFinite(n)||Math.abs(n)<.002||Math.abs(n)>.16){this.lastSc=0;return}if(Math.hypot(e,t)>2.8){this.lastSc=0;return}if(!(i!==void 0?!!i:hd.moving())){this.lastSc=0;return}let l=this.lastSc;if(this.lastSc=n,this.lastScAt=a,l===0||Math.sign(l)!==Math.sign(n)||Math.abs(n-l)>Math.max(.055,Math.abs(n)*1.45))return;let c=(n+l)*.5,d=Math.max(-.055,Math.min(.055,c*this.depth));uo.set(0,0,-1).applyQuaternion(r.quaternion),uo.y=0,uo.lengthSq()>1e-6?uo.normalize():uo.set(0,0,-1),this.pos.addScaledVector(uo,d),this.pos.y=0;let u=Math.hypot(this.pos.x,this.pos.z);if(u>1.8){let h=1.8/u;this.pos.x*=h,this.pos.z*=h}this.pos.y=0},update(n,e=.016){var o,l,c;if(!ud()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.28,1-Math.exp(-Math.max(.005,e)*16));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=ol();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof al=="function"?al(this.out.x,0,this.out.z):typeof window<"u"&&((l=(o=window.NativeXR)==null?void 0:o.sixDofOffset)==null||l.call(o,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=F0();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,a=this.H;try{this.ctx.drawImage(s,0,0,r,a);let d=this.ctx.getImageData(0,0,r,a).data,u=new Float32Array(r*a);for(let h=0,p=0;h<u.length;h++,p+=4)u[h]=d[p]*.3+d[p+1]*.59+d[p+2]*.11;this.processGray(u)}catch{}},consumeStepDelta(n=X1){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function fd({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?ol=t:n&&(ol=()=>n),typeof i=="function"?ud=i:e&&typeof e=="object"&&(ud=()=>e.sixdof!==0),typeof s=="function"&&(F0=s),typeof r=="function"&&(al=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>hd.onMotion(n),{passive:!0}),window.SixDof=Jt,window.Walk=hd,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=Jt.W*Jt.H)return Jt.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),a=Number(n.gy??0),o=Number(n.mx??0);return Jt.applyFlowScale(s,r,a,n.moving,o),{sc:s,gx:r,gy:a}}let i=Number(n??0);return Jt.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var z0=new D,$1=new Ke,H0=new D,ea=class extends Gt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var ns=new Ce,Y1=new Ce,pd=class{constructor(e={}){let t=this,i,s,r,a,o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let d=document.createElement("div");d.style.transformStyle="preserve-3d",c.appendChild(d),this.getSize=function(){return{width:i,height:s}},this.render=function(y,f){let m=f.projectionMatrix.elements[5]*a;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let x,b;f.isOrthographicCamera&&(x=-(f.right+f.left)/2,b=(f.top+f.bottom)/2);let M=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,S=f.isOrthographicCamera?`scale( ${M} )scale(`+m+")translate("+u(x)+"px,"+u(b)+"px)"+h(f.matrixWorldInverse):`scale( ${M} )translateZ(`+m+"px)"+h(f.matrixWorldInverse),A=(f.isPerspectiveCamera?"perspective("+m+"px) ":"")+S+"translate("+r+"px,"+a+"px)";o.camera.style!==A&&(d.style.transform=A,o.camera.style=A),g(y,y,f,S)},this.setSize=function(y,f){i=y,s=f,r=i/2,a=s/2,l.style.width=y+"px",l.style.height=f+"px",c.style.width=y+"px",c.style.height=f+"px",d.style.width=y+"px",d.style.height=f+"px"};function u(y){return Math.abs(y)<1e-10?0:y}function h(y){let f=y.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function p(y){let f=y.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(y,f,m,x){if(y.isCSS3DObject){let b=y.visible===!0&&y.layers.test(m.layers)===!0;if(y.element.style.display=b===!0?"":"none",b===!0){y.onBeforeRender(t,f,m);let M;y.isCSS3DSprite?(ns.copy(m.matrixWorldInverse),ns.transpose(),y.rotation2D!==0&&ns.multiply(Y1.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(z0,$1,H0),ns.setPosition(z0),ns.scale(H0),ns.elements[3]=0,ns.elements[7]=0,ns.elements[11]=0,ns.elements[15]=1,M=p(ns)):M=p(y.matrixWorld);let S=y.element,T=o.objects.get(y);if(T===void 0||T.style!==M){S.style.transform=M;let A={style:M};o.objects.set(y,A)}S.parentNode!==d&&d.appendChild(S),y.onAfterRender(t,f,m)}}for(let b=0,M=y.children.length;b<M;b++)g(y.children[b],f,m,x)}}};var ge=!!window.NativeXR,wt=ge?kn:{width:innerWidth,height:innerHeight},W0={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,pinchOnApp:1,gunGesture:1,mrDim:0,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},ll={};try{ll=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var Ge={...W0,...ll};Ge.sunsetDefaultVersion||(!Ge.envChosen&&Ge.env==="passthrough"&&(!ll.panorama||ll.panorama==="lagoon")&&(Ge.env="sunset"),(!ll.panorama||Ge.env==="sunset"&&!Ge.envChosen)&&(Ge.panorama=Ge.env==="passthrough"?"sunset":Ge.env),Ge.sunsetDefaultVersion=1);if(ge){Ge=O0(Ge),Ge.handsOn=!0,Ge.handDrawSeen||(Ge.handDraw=W0.handDraw,Ge.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(Ge))}catch{}}var w=Ge,Fe=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Ge))}catch{}},mn={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",envDark:"Panorama 360\xB0 \xB7 Dark",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",envDark:"360\xB0 panorama \xB7 Dark",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(mn.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(mn.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(mn.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});mn.ja={...mn.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};mn.fr={...mn.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};mn.de={...mn.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};mn.ko={...mn.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};mn.it={...mn.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};mn.nl={...mn.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};mn.ru={...mn.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var cl=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),j1="pt",wd=n=>cl.find(e=>e.id===n)||cl.find(e=>e.id===j1);var vf=()=>wd(Ge.lang).table||"pt",U=n=>(mn[vf()]||mn.pt)[n]||mn.pt[n]||n,na=n=>cl.some(e=>e.id===n&&e.table)?(Ge.lang=n,Fe(),Ae("lang"),!0):!1,vd={},ze=(n,e)=>((vd[n]||(vd[n]=[])).push(e),e),Ae=(n,e)=>(vd[n]||[]).forEach(t=>t(e));function et(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(et._t),et._t=setTimeout(()=>e.classList.remove("on"),2400)}var Ee=new io,fe=new Kt(72,1,.05,120);fe.rotation.order="YXZ";var Mt=new Nn;Ee.add(Mt);var $t=1.55;fe.position.set(0,$t,0);fd({settings:Ge,camera:fe,contentRoot:Mt});var po=ge?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Kr({antialias:!0,alpha:!0});ge||(po.setClearColor(0,0),document.getElementById("gl").appendChild(po.domElement));var ne=ge?new dd:new pd;document.getElementById("css3d").appendChild(ne.domElement);if(ge){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var mf=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),bd="medium",bf=()=>Ge.quality==="auto"?bd:mf[Ge.quality]?Ge.quality:"medium",q0=()=>mf[bf()]||mf.medium;function X0(){let n=bf();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function $0(){var t,i;let n=bf(),e=q0();document.documentElement.dataset.quality=Ge.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function Md(){$0(),ge||(wt.width=innerWidth,wt.height=innerHeight);let n=wt.width,e=wt.height;fe.aspect=n/e,fe.updateProjectionMatrix(),po.setPixelRatio(X0()),po.setSize(n,e),ne.setSize(n,e),Ae("resize")}addEventListener("resize",Md);addEventListener("orientationchange",()=>setTimeout(Md,120));Md();ze("quality",Md);var Z1=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside","dark"]),xf=()=>[{id:"sunset",name:U("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:U("envPass"),thumb:null},{id:"dark",name:U("envDark"),thumb:"./env/dark.jpg"},{id:"dusk",name:U("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:U("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:U("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:U("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:U("envNight"),thumb:"./env/night.jpg"},{id:"space",name:U("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:U("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:U("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:U("envLakeside"),thumb:"./env/lakeside.jpg"}];function Ti(n){var e,t,i;Ge.env=Z1.includes(n)?n:"passthrough",Ge.envChosen=1,Ge.env!=="passthrough"&&(Ge.panorama=Ge.env),Fe(),Ae("env",Ge.env),typeof window<"u"&&((e=window.nextvrShowCircleLoader)==null||e.call(window,"env",Ge.env)),(i=(t=window.NativeXR)==null?void 0:t.env)==null||i.call(t,Ge.env)}var zi=n=>Ti(n?"passthrough":Ge.panorama);function dl(n){var e,t;Ge.mrDim=n?1:0,Fe(),typeof document<"u"&&(Ge.mrDim?document.documentElement.dataset.mrDim="1":delete document.documentElement.dataset.mrDim),(t=(e=window.NativeXR)==null?void 0:e.setMrDim)==null||t.call(e,!!Ge.mrDim),Ae("mr-dim",Ge.mrDim)}var yd,G0;typeof document<"u"&&Ge.mrDim&&(document.documentElement.dataset.mrDim="1",(G0=(yd=window.NativeXR)==null?void 0:yd.setMrDim)==null||G0.call(yd,!0));var Yn={ok:!1,has:!1,q:new Ke,tmp:new Ke,e:new ni},K1=new Ke,J1=new Ke(-Math.SQRT1_2,0,0,Math.SQRT1_2),Q1=new D(0,0,1),xd=Math.PI/180;function eA(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*xd}function tA(n){n.alpha!=null&&(Yn.has=!0,Yn.e.set(n.beta*xd,n.alpha*xd,-n.gamma*xd,"YXZ"),Yn.tmp.setFromEuler(Yn.e),Yn.tmp.multiply(J1),Yn.tmp.multiply(K1.setFromAxisAngle(Q1,-eA())),Yn.q.copy(Yn.tmp))}async function ia(){if(ge)return Yn.ok=Yn.has=!0,Ae("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(et("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",tA,!0),Yn.ok=!0,setTimeout(()=>{Yn.has||et("Sem girosc\xF3pio: arraste para olhar")},1200),Ae("gyro",!0),!0)}catch{return et("Girosc\xF3pio indispon\xEDvel"),!1}}var nA=()=>Yn.ok&&Yn.has,ta=null,fo=0,gf=0;addEventListener("pointerdown",n=>{ge||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(ta={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{ta&&(fo-=(n.clientX-ta.x)*.0032,gf=Math.max(-1.2,Math.min(1.2,gf-(n.clientY-ta.y)*.0032)),ta={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>ta=null);addEventListener("pointercancel",()=>ta=null);function Hi(){Jt.reset();let n=new ni().setFromQuaternion(fe.quaternion,"YXZ");Mt.rotation.y=n.y,Mt.position.set(0,0,0),fe.position.set(0,$t,0),Ae("recenter"),et(U("centered"))}var Y0=[],ul=n=>Y0.push(n),V0=performance.now(),md=0,hf=0,ff=0,gd=0,pf=0,_d=0,ri=null,j0=()=>{let n=performance.now();ff>0&&(gd+=(n-ff)/1e3,pf++,gd>=1&&(_d=Math.round(pf/gd),gd=0,pf=0)),ff=n};function yf(n){let e=Math.min((n-V0)/1e3,.05);if(V0=n,ge||(nA()?(fe.quaternion.slerp(Yn.q,1-Math.exp(-e*12)),fo&&(fe.rotateY(fo),fo=0)):(fe.quaternion.setFromEuler(new ni(gf,fe.rotation.y+fo,0,"YXZ")),fo=0)),Jt.update(n,e),fe.position.set(Jt.out.x,$t+Jt.out.y,Jt.out.z),window.__gorillaStereoOverlay){ne.render(Ee,fe),requestAnimationFrame(yf);return}for(let t of Y0)t(e,n);if(po.render(Ee,fe),ne.render(Ee,fe),md+=e,hf++,md>=1){let t=Math.round(hf/md);if(Ge.quality==="auto"){let s=ge&&Ge.handsOn&&_d>=15?Math.min(t,_d*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==bd&&(bd=r,$0(),po.setPixelRatio(X0()),Ae("quality-tier",bd))}let i=document.getElementById("fps");i.textContent=Ge.showFps?t+" fps \xB7 "+q0().label+(ge&&Ge.handsOn?" \xB7 tracking "+_d+" fps":"")+(ge&&Ge.handsOn?rA():""):"",md=0,hf=0}requestAnimationFrame(yf)}var iA=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),sA=typeof location<"u"&&location.hash.includes("onboarding=skip");iA||(requestAnimationFrame(yf),sA&&!Ge.entryEnvChosen?zi(!0):Ti(Ge.env));if(ge){let n=new Ce,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),fe.quaternion.setFromRotationMatrix(n),fe.position.set(Jt.out.x,$t+Jt.out.y,Jt.out.z),fe.updateMatrixWorld(!0),e&&(Mt.rotation.y=new ni().setFromQuaternion(fe.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=et,window.nextvrDiag=t=>{ri=t}}function rA(){if(!ri)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(ri.camera);t!==null&&e.push("cam "+t);let i=n(ri.infer);return i!==null&&e.push("infer "+i+"ms"),ri.delegate&&e.push(String(ri.delegate).split(" ")[0]),typeof ri.narrow=="number"&&typeof ri.wide=="number"&&ri.narrow+ri.wide>0&&e.push("slots "+(ri.narrow>=ri.wide?1:2)),n(ri.stale)>0&&e.push("stale "+Math.round(ri.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var Sd=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Ad=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Ri=[],be={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},mr=new Sd,mo=new Ad,wf=Math.tan(36*Math.PI/180),J0=wf*1.5,Td=!1,Rd=-1/0,fl=2*J0,pl=2*wf,go=null,Q0=500;fd({getHands:()=>({list:Ri,lastAt:Rd})});var Mf=()=>Td;async function is(){return ge?(Td=!0,window.NativeXR.hands(!0),Ae("hands",!0),!0):(et("Hand tracking requires the Android camera pipeline."),!1)}function ey(n){for(let e of n)Ae(`pinch${e}`,be)}function ml(){let n=mr.cancel();mo.reset(),be.down=be.active=!1,be.phase=mr.phase,be.hand=null,be.mode="idle",lA(),ey(n)}function gr(){ml()}function Sf(){ml(),Ri.length=0,Td=!1,Rd=-1/0,Ae("phonehands",{hands:[],consumed:new Set,scaleX:fl,scaleY:pl}),ge&&window.NativeXR.hands(!1),Ae("hands",!1)}function sa(n){let e=fl*2*J0,t=pl*2*wf;return{x:.5+n[0]/e,y:.5-n[1]/t}}var aA=250,Z0=1.6,K0=.06,ai={x:0,y:0},hl=0,Ed=0;function Cd(n=performance.now()){if(!be.active)return{x:be.x,y:be.y};let e=n-hl;if(!(e>0)||e>aA)return{x:be.x,y:be.y};let t=e/1e3,i=s=>Math.max(-K0,Math.min(K0,s));return{x:Math.min(1,Math.max(0,be.x+i(ai.x*t))),y:Math.min(1,Math.max(0,be.y+i(ai.y*t)))}}function oA(n,e,t=0){let i=t>0&&Ed>0?(t-Ed)/1e9:hl>0?(e-hl)/1e3:-1;if(be.active&&i>.004&&i<.3){let s=r=>Math.max(-Z0,Math.min(Z0,r));ai.x+=(s((n.x-be.x)/i)-ai.x)*.35,ai.y+=(s((n.y-be.y)/i)-ai.y)*.35,Math.hypot(ai.x,ai.y)<.12&&(ai.x=ai.y=0)}else i>=0&&i<=.004||(ai.x=ai.y=0);hl=e,Ed=t>0?t:0}function lA(){ai.x=ai.y=0,hl=0,Ed=0}ge&&(window.nextvrHands=(n,e=1,t=1)=>{var d,u,h;if(!Td)return;j0();let i=performance.now();if(fl=e,pl=t,Rd=i,Q0=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),Ri.splice(0,Ri.length,...n.hands||[]),Ae("handframe",{...n,hands:Ri}),window.__gorillaStereoOverlay){(d=window.__gorillaOnHands)==null||d.call(window,i);return}let r={hands:Ri,consumed:new Set,scaleX:fl,scaleY:pl};if(B0(r),Ae("phonehands",r),r.blockFar){ml();return}let a=Ri.filter(p=>!r.consumed.has(p.id)),o=mr.down&&a.find(p=>p.id===mr.handId)||a.find(p=>p.pinching)||[...a].sort((p,g)=>g.palmWidth-p.palmWidth)[0];if(!o){ml();return}let l=sa(o.aim);oA(l,i,Number(n.timestampNs)||0),be.x=l.x,be.y=l.y,be.active=!0,be.hand=o;let c=o.predicted?[]:mr.update(o.id,o.pinching);if(c.includes("down")?mo.begin(o.id,l.x*wt.width,l.y*wt.height,i):c.includes("up")?mo.end():c.includes("cancel")&&mo.reset(),mr.down&&!o.predicted&&mo.sample(o.id,l.x*wt.width,l.y*wt.height,i),be.mode=mo.mode,be.down=mr.down,be.phase=mr.phase,!window.__gorillaStereoOverlay&&ge){let p=!!w.handDraw;go!==p&&(go=p,(h=(u=window.NativeXR).handVisuals)==null||h.call(u,p))}ey(c),be.down&&Ae("pinchsample",be)});var _f=document.getElementById("overlay");_f.getContext("2d").clearRect(0,0,_f.width,_f.height);ze("handDraw",()=>{var n,e;!window.__gorillaStereoOverlay&&ge&&(go=!!w.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,go))});ul(()=>{var n,e;if(!window.__gorillaStereoOverlay&&ge){let t=!!w.handDraw;go!==t&&(go=t,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,t))}Ri.length&&performance.now()-Rd>Q0&&(Ri.length=0,ml(),Ae("phonehands",{hands:[],consumed:new Set,scaleX:fl,scaleY:pl}))});var cA=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),dA=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',hand:'<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.9-2.3L3.3 16.9a2 2 0 0 1 2.8-2.8L8 16"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),uA=Object.freeze({...dA,...cA});function ee(n,e="ui-icon"){let t=uA[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var on=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),gl=(n,e,t)=>Math.max(e,Math.min(t,n)),jn=n=>Number.isFinite(n)?n:0;function Af(n,e=0,t=1.55,i=null){let s=jn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,a=jn(n==null?void 0:n.z),o=Number.isFinite(i)?i:Math.hypot(s,a);o<1e-5&&(o=on.minDistance,s=0,a=-o);let l=gl(Math.atan2(-s,-a),-on.maxYaw,on.maxYaw);o=gl(o,on.minDistance,on.maxDistance);let c=Math.max(0,jn(e)),d=t+on.lowerEdgeFromEye+c,u=t+on.upperEdgeFromEye-c;return r=d<=u?gl(r,d,u):t,{x:-Math.sin(l)*o,y:r,z:-Math.cos(l)*o}}function ty(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((jn(e.x)-jn(n.x))*t,(jn(e.y)-jn(n.y))*i)}function Ef(n,e,t,i){return ty(n,e,t,i)>=on.dragActivationPx}function ny(n,e,t,i){return ty(n,e,t,i)>=on.resizeActivationPx}function Tf(n,e){let t=jn(n==null?void 0:n.x),i=jn(n==null?void 0:n.y),s=jn(n==null?void 0:n.z),r=jn(e==null?void 0:e.x)-t,a=jn(e==null?void 0:e.y)-i,o=jn(e==null?void 0:e.z)-s,l=Math.hypot(r,a,o);if(!Number.isFinite(l)||l<=on.motionDeadZone)return{x:t,y:i,z:s};let d=Math.min(l,on.maxMotionStep)/l;return{x:t+r*d,y:i+a*d,z:s+o*d}}var hA=Object.freeze({maxAngle:1.15});function yl(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(hA.maxAngle,e))}function Ld(n,e){let t=yl(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function Pd(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function yr(n,e=on.maxResize){let t=gl(jn(e),on.minResize,on.maxResize);return gl(Number.isFinite(n)?n:1,on.minResize,t)}function iy(n,e,t=1.55){let i=Math.max(1e-5,jn(e)),s=Math.min(n-(t+on.lowerEdgeFromEye),t+on.upperEdgeFromEye-n);return yr(s/i)}function sy(n,e,t,i){return!(e>1)||!Number.isFinite(t)?yr(n,i):yr(n*t/e,i)}function ry(n,e){let t=yr(n),s=yr(e)-t;return Math.abs(s)<.004?t:yr(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function ay(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let a=0;a<i;a++)r.push({angle:a===0?0:a%2?e:-e,row:0});for(let a=0;a<s;a++)r.push({angle:s===1?0:a===0?-e/2:e/2,row:1});return r}var oy=1.22;function Rf(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function ly({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=Rf(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function cy(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var vl=n=>Number.isFinite(n)?n:0,dy=(n,e,t)=>Math.max(e,Math.min(t,n));function yo(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=vl(n==null?void 0:n.x),a=vl(n==null?void 0:n.y),o=vl(n==null?void 0:n.z),l=a-s,c=Math.hypot(r,o),d=Math.hypot(r,l,o)||1e-6,u=Math.max(0,vl(e)),h=Math.max(0,vl(t));return{x:r,y:a,z:o,yaw:Math.atan2(-r,-o),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(u,c||1e-6),halfPitch:Math.atan2(h,d)}}function uy(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return yo(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Cf(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return yo({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function fA(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,a=n.pitch-n.halfPitch,o=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,d=Math.min(i,r)-Math.max(t,s),u=Math.min(o,c)-Math.max(a,l);return d>0&&u>0?-Math.sqrt(d*u):Math.hypot(Math.max(-d,0),Math.max(-u,0))}function Id(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,a=Number.isFinite(t.gap)?t.gap:.03,o=n.box||yo(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let p=fA(o,h);if(p<0){let g=p*p;l+=26e3*g+1e3,g>c&&(c=g)}else if(p<a){let g=a-p;l+=900*g*g}}let d=Math.hypot(o.x,o.z)||1e-6;l+=26*Math.abs(o.yaw),Math.abs(o.yaw)>r&&(l+=26*(Math.abs(o.yaw)-r)*40),d>s&&(l+=34*(d-s));let u=Number.isFinite(t.lift)?t.lift:o.y;return l+=Math.abs(o.y-u)*12,{score:l,overlap:c,yaw:o.yaw,radius:d}}function pA({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:a=3,ringStep:o=.16,rows:l=2,topRowStep:c=1.22}={}){let d=[],u=Number.isFinite(e)?e:n,h=[0];for(let p=1;p<=6;p++){let g=p*t;if(g>r+1e-9)break;h.push(g,-g)}for(let p=0;p<l;p++){let g=p===0?u:u+s*2*(c-1)+s;for(let y=0;y<a;y++){let f=i+y*o;for(let m of h){let x=dy(m,-r,r);d.push({x:Math.sin(x)*f,y:g,z:-Math.cos(x)*f,angle:x,row:p,radius:f})}}}return d}function hy({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,lift:l=null,rings:c=3,ringStep:d=.16,rows:u=2,gap:h=.03,topRowStep:p=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:o,gap:h,lift:l??t},f=pA({eye:t,lift:l??t,step:i,distance:s,halfHeight:a,outerLimit:o,rings:c,ringStep:d,rows:u,topRowStep:p}),m=null;for(let x of f){let b=yo(x,r,a),{score:M,overlap:S}=Id({...x,box:b},n,y),T={x:x.x,y:x.y,z:x.z,angle:x.angle,row:x.row,radius:x.radius,score:M,overlap:S,box:b};(!m||T.score<m.score-g)&&(m=T)}if(e){let x=yo(e,r,a),{score:b,overlap:M}=Id({...e,box:x},n,y),S={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:b,overlap:M,box:x,desired:!0};(!m||S.score<=m.score+g)&&(m=S)}return m}function fy({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:a=.35,outerLimit:o=1.3,gap:l=.03,maxShift:c=3}={}){let d={eye:t,desiredDistance:s,maxYaw:o,gap:l,lift:n.y},u=(f,m,x)=>yo({x:f,y:m,z:x},r,a),h=Id({...n,box:u(n.x,n.y,n.z)},e,d);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let p={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let f=1;f<=c;f++)for(let m of[1,-1]){let x=dy(y+m*f*i,-o,o),b=-Math.sin(x)*g,M=-Math.cos(x)*g,{score:S,overlap:T}=Id({x:b,y:n.y,z:M,box:u(b,n.y,M)},e,d);S<p.score&&(p={x:b,y:n.y,z:M,score:S,overlap:T})}return{...p,moved:p.x!==n.x||p.z!==n.z}}var Nd={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function Dd(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var vo=class{constructor({armMs:e=Nd.armMs,graceMs:t=Nd.graceMs,holdMs:i=Nd.holdMs,progressHoldMs:s=Nd.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,a=s&&r;if(this.open){if(a)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let o=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:o,active:!1}}if(a){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let o=i-this.startedAt;return o>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,o/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var St=.00105,he=[],ha=null,Zn={y:$t-.6,z:-1.7,h:.12};function Ly(n=null){let e=[];for(let t of he)t===n||t.hidden||t.onboarding||e.push(uy(t));if(qi&&vt.offsetWidth>0){let t=Cf(Pi);t&&e.push(t)}if(rt&&Un&&!Pl&&rt.element.offsetWidth>0){let t=Cf(Un);t&&e.push(t)}return e}var Uf=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:a=!1,chrome:o=!0,resizable:l=!0}){this.onboarding=a,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new D,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=yl(a?0:w.win360?w.win360K:0),this.curveRadius=Ld(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let d=document.createElement("div");d.className="win",d.style.width=s+"px",d.style.height=r+"px",d.innerHTML=`<div class="win-bar">
        <button class="win-new-tab-btn" data-win-new-tab type="button" title="Criar nova guia"><span class="win-new-tab-plus">+</span><span>Criar nova guia</span></button>
        <div class="win-grip" style="display:none"></div><div class="win-title" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden"></div>
        <div class="win-top-right-acts">
          <button class="win-btn" data-act="pin" aria-label="${U("repin")}" title="${U("repin")}">${ee("crosshair")}</button>
          <button class="win-btn wide fold-btn" data-act="curve" aria-label="360\xB0" title="Dobra / 360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
          <button class="win-btn close" data-act="close" aria-label="${U("close")}" title="${U("close")}">${ee("x")}</button>
        </div>
      </div><div class="win-body"></div>`,d.querySelector(".win-title").textContent=t,d.querySelector(".win-body").appendChild(i),d.addEventListener("pointerdown",()=>tn(this),!0),d.querySelector(".win-bar").addEventListener("click",x=>{var S;if(x.target.closest("[data-win-new-tab]")){(S=window.nextvrOpenBrowserOption)==null||S.call(window,"new-tab");return}let M=x.target.closest("[data-act]");M&&(M.dataset.act==="close"?ft(this):M.dataset.act==="curve"?this.setCurve(this.curve>0?0:yl(w.win360K)):py(this))}),d.addEventListener("click",x=>{var M;let b=x.target.closest('[data-act="pin"]');b&&!((M=d.querySelector(".win-bar"))!=null&&M.contains(b))&&py(this)});let u=document.createElement("div");u.className="win-handle",u.title=U("moveWindow"),u.setAttribute("aria-label",U("moveWindow"));let h=document.createElement("div");h.className="win-resize",h.hidden=!l,h.title=U("resize"),h.setAttribute("aria-label",U("resize")),h.innerHTML=ee("move");let p=document.createElement("div");p.className="win-cinema-bar",p.hidden=!(this.curve>0&&!a),p.innerHTML=`<span class="win-cinema-title">${t}</span><div class="win-cinema-acts"><button type="button" class="win-cinema-btn" data-cinema-act="min" title="Minimizar" aria-label="Minimizar">\u2014</button><span class="win-cinema-dot" aria-hidden="true">\u2022</span><button type="button" class="win-cinema-btn win-cinema-expand" data-cinema-act="exit-360" title="Sair do modo 360" aria-label="Sair do modo 360">\u26F6</button></div>`,p.addEventListener("click",x=>{let b=x.target.closest("[data-cinema-act]");b&&(x.stopPropagation(),b.dataset.cinemaAct==="exit-360"?this.setCurve(0):b.dataset.cinemaAct==="min"&&ft(this))});let g=document.createElement("div");g.className="win-brightness-bar",g.hidden=a||e==="left-quick-menu";let y=Math.max(10,Math.min(100,Number(w.brightness??80)||80));g.innerHTML=`<span class="win-bri-icon">${ee("sun")}</span><input type="range" class="win-bri-range" data-win-brightness min="10" max="100" step="1" value="${y}" style="--bri-fill:${y}%" aria-label="Brilho"/>`;let f=g.querySelector("[data-win-brightness]");if(f){let x=b=>{b.stopPropagation(),Iy(Number(f.value))};f.addEventListener("input",x),f.addEventListener("change",x)}let m=document.createElement("div");if(m.className="win-predefined-slots",m.hidden=a||e==="left-quick-menu",m.innerHTML=`
      <button type="button" class="win-predefined-slot win-predefined-slot--left" data-predefined-slot="left" title=" encaixar \xE0 esquerda" aria-label="Telinha pr\xE9-definida esquerda">
        <span class="win-predefined-slot-frame"></span>
      </button>
      <button type="button" class="win-predefined-slot win-predefined-slot--center" data-predefined-slot="center" title="Encaixar ao centro" aria-label="Telinha pr\xE9-definida central">
        <span class="win-predefined-slot-frame"></span>
      </button>
      <button type="button" class="win-predefined-slot win-predefined-slot--right" data-predefined-slot="right" title="Encaixar \xE0 direita" aria-label="Telinha pr\xE9-definida direita">
        <span class="win-predefined-slot-frame"></span>
      </button>
    `,m.addEventListener("click",x=>{let b=x.target.closest("[data-predefined-slot]");b&&(x.stopPropagation(),Ny(this,b.dataset.predefinedSlot))}),c.append(d,u,h,p,g,m),this.el=d,this.shell=c,this.handle=u,this.resizeHandle=h,this.cinemaBar=p,this.brightnessBar=g,this.predefinedSlotsBar=m,c.dataset.curve=String(this.curve),this.curve>0&&!a&&c.classList.add("cinema-360"),(a||!o)&&(d.querySelector(".win-bar").hidden=!0),this.obj=new ea(c),this.obj.scale.setScalar(St*(this.onboarding?si.welcomeScale:w.winScale)),Mt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Lf(s*St,r*St,this,this.hitSegments),this.bendHit(),this.grab=Lf(260*St,90*St,this),this.grab.userData.isHandle=!0,this.resizeHit=Lf(80*St,80*St,this),this.resizeHit.userData.isResize=!0,!ge){let x=b=>({x:b.clientX/wt.width,y:b.clientY/wt.height});u.addEventListener("pointerdown",b=>{b.stopPropagation();let M=x(b);Xf(this,M.x,M.y,"desktop"),u.setPointerCapture(b.pointerId)}),u.addEventListener("pointermove",b=>{if(ct.win===this){let M=x(b);$f(M.x,M.y)}}),u.addEventListener("pointerup",os),u.addEventListener("pointercancel",os),h.addEventListener("pointerdown",b=>{b.stopPropagation();let M=x(b);Fy(this,M.x,M.y),h.setPointerCapture(b.pointerId)}),h.addEventListener("pointermove",b=>{if(Ft.win===this){let M=x(b);By(M.x,M.y)}}),h.addEventListener("pointerup",Ar),h.addEventListener("pointercancel",Ar)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new Dn(this.w*St,this.h*St,i,1),this.hitSegments=i,this.curveRadius=Ld(this.w,this.curve),this.bendHit(),this.apply(),Xi(),Ae("wins",he)}setCurve(e){var r,a,o,l,c,d,u,h;this.curve=yl(e),this.curveRadius=Ld(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.curve>0&&!this.onboarding;this.shell.classList.toggle("cinema-360",t),this.cinemaBar&&(this.cinemaBar.hidden=!t);let i=this.el.querySelector('[data-act="curve"]');i&&i.setAttribute("aria-pressed",String(this.curve>0)),t?(document.documentElement.dataset.cinema360="1",(a=(r=window.NativeXR)==null?void 0:r.env)==null||a.call(r,"dark")):he.some(p=>p!==this&&!p.hidden&&!p.onboarding&&p.curve>0)||(delete document.documentElement.dataset.cinema360,document.documentElement.dataset.robloxBlackEnv!=="1"&&((l=(o=window.NativeXR)==null?void 0:o.env)==null||l.call(o,w.env||"passthrough")));let s=this.curve>0?32:1;this.hitSegments!==s&&(this.hit.geometry.dispose(),this.hit.geometry=new Dn(this.w*St,this.h*St,s,1),this.hitSegments=s),this.bendHit(),this.apply(),(d=(c=ne).invalidate)==null||d.call(c),(h=(u=ne).render)==null||h.call(u,Ee,fe)}bulge(e){return Pd(e,this.curveRadius)*St}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,Pd(e.getX(t)/St,this.curveRadius)*St);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*w.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2($t-e.position.y,i)*w.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?si.welcomeScale:w.winScale)*this.resizeScale;e.scale.setScalar(St*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let a=(this.h/2+34)*St*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-a),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let o=28;this.resizeHit.translateX((this.w/2+o)*St*r),this.resizeHit.translateY(-(this.h/2+o)*St*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r),e.updateMatrixWorld(!0),this.hit.updateMatrixWorld(!0),this.grab.updateMatrixWorld(!0),this.resizeHit.updateMatrixWorld(!0)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&ct.win===this&&os(),t&&Ft.win===this&&Ar(),(s=(i=ne).invalidate)==null||s.call(i))}};function Lf(n,e,t,i=1){let s=new Rt(new Dn(n,e,i,1),new pn({visible:!1}));return s.userData.win=t,Mt.add(s),s}function Xi(){let n=he.some(o=>!o.onboarding&&!o.hidden&&o.id!=="left-quick-menu");for(let o of he)o.onboarding&&(o.id==="spatial-launcher"?(n?(o.resizeScale=.88,o.target.set(0,$t-.22,-.84)):(o.resizeScale=1.24,o.target.set(0,$t-.01,-.84)),o.apply()):o.target.set(0,$t,-si.welcomeDistance));let e=he.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),t=e.length;if(!t)return;let i=ge?w.winDist:-Zn.z+.5+(w.winDist-2.2),s=Math.max(...e.map(o=>o.w*o.resizeScale))*St*w.winScale,r=ge?ly({width:s,dist:i,gap:.5,outerLimit:on.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(ay(t,r).forEach(({angle:o,row:l},c)=>{let d=e[c],u=d.h*St*w.winScale*d.resizeScale,h=Zn.y+Zn.h/2+.14+u/2,p=Math.sin(o)*i,g=-Math.cos(o)*i,y=l===0?h:Math.min(h+u*2*(oy-1)+u,$t+on.upperEdgeFromEye-u);d.target.set(p,y,g)}),!ge)return;let a=Math.min(r,Rf(s,i)*.6);for(let o of e){let l=o.w*St*w.winScale*o.resizeScale/2,c=o.h*St*w.winScale*o.resizeScale/2,d=fy({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:Ly(o),eye:$t,step:a,distance:i,halfWidth:l,halfHeight:c,outerLimit:on.maxYaw-.06,maxShift:4});o.target.set(d.x,d.y,d.z)}}ze("recenter",Xi);ze("resize",Xi);function nn(n){var s,r;let e=he.find(a=>a.id===n.id);if(e)return tn(e),e;let t=he.filter(a=>!a.onboarding&&!a.hidden&&a.id!=="left-quick-menu");if(n.id!=="left-quick-menu"&&t.length>=5){let a=cy(t);a&&(et(`${U("arcFull")}: ${a.title}`),ft(a))}let i=new Uf(n);if(he.push(i),Xi(),tn(i),i.obj.position.copy(i.target),n.id==="left-quick-menu"){i.pinned=!1,i.shell.classList.add("free","lh-floating-win-shell");let a=n.at||{x:-.22,y:$t-.04,z:-1.42};i.target.set(a.x,a.y,a.z),i.obj.position.copy(i.target),i.resizeHandle.hidden=!0,i.cinemaBar&&(i.cinemaBar.hidden=!0),i.brightnessBar&&(i.brightnessBar.hidden=!0),i.predefinedSlotsBar&&(i.predefinedSlotsBar.hidden=!0)}else n.free&&gA(i,n.at);return i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0,i.cinemaBar&&(i.cinemaBar.hidden=!0),i.brightnessBar&&(i.brightnessBar.hidden=!0),i.predefinedSlotsBar&&(i.predefinedSlotsBar.hidden=!0)),i.apply(),Ee.updateMatrixWorld(!0),(r=(s=ne).invalidate)==null||r.call(s),Ae("wins",he),i}function gA(n,e=null){n.pinned=!1;let t=n.w*St*w.winScale*n.resizeScale/2,i=n.h*St*w.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Zn.y+Zn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-w.winDist)||w.winDist,a=hy({occupied:Ly(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-w.winDist},eye:$t,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:on.maxYaw-.06,lift:s,rings:3,rows:1});a&&n.target.set(a.x,a.y,a.z)}function ft(n){var s,r,a,o,l;if(typeof n=="string"&&(n=he.find(c=>c.id===n)),!n)return;let e=he.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);_t&&(_t.nativeId?_t.nativeId===i:n.el.contains(_t))&&gi(!1),Al&&n.el.contains(Al)&&(Al=null),ct.win===n&&os(),Ft.win===n&&Ar(),he.splice(e,1),(s=n._cleanupQB)==null||s.call(n),Mt.remove(n.obj),Mt.remove(n.hit),Mt.remove(n.grab),Mt.remove(n.resizeHit),n.shell.remove(),ha===n&&(ha=he[he.length-1]||null),he.some(c=>!c.hidden&&!c.onboarding&&c.curve>0)||(delete document.documentElement.dataset.cinema360,document.documentElement.dataset.robloxBlackEnv!=="1"&&((a=(r=window.NativeXR)==null?void 0:r.env)==null||a.call(r,w.env||"passthrough"))),Xi(),(l=(o=ne).invalidate)==null||l.call(o),Ae("wins",he)}function tn(n){ha!==n&&(ha=n,n.lastFocus=performance.now(),he.forEach(e=>e.el.classList.toggle("focus",e===ha)))}function py(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Xi(),n.obj.position.copy(n.target),n.apply(),(t=(e=ne).invalidate)==null||t.call(e),(s=(i=ne).render)==null||s.call(i,Ee,fe)}var Cl=()=>ha,yi=new tl,Bd=new Ze,ct={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Ft={win:null,start:null,active:!1,startScale:1,startDistance:1},gn={source:null,start:null,active:!1,plane:null,anchor:null},mi=document.createElement("div");mi.className="win-drop-slot";mi.dataset.windowId="drop-slot";mi.hidden=!0;mi.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var _r=new ea(mi);_r.visible=!1;Mt.add(_r);var zd=null,Hd=!1;function Py(n){let e=ge?w.winDist:-Zn.z+.5+(w.winDist-2.2),t=n.h*St*w.winScale*n.resizeScale,i=Zn.y+Zn.h/2+.14+t/2,s=Er||0,r=.56;return[0,-r,r].map(a=>{let o=s+a;return new D(Math.sin(o)*e,i,-Math.cos(o)*e)})}function Iy(n){var i,s,r,a,o,l;let e=Math.max(10,Math.min(100,Math.round(Number(n)||80)));w.brightness=e,Fe(w);let t=(.38+e/100*.62).toFixed(3);document.documentElement.style.setProperty("--nextvr-brightness",t),document.documentElement.dataset.brightnessPercent=String(e);for(let c of document.querySelectorAll("[data-win-brightness]"))String(c.value)!==String(e)&&(c.value=String(e)),c.style.setProperty("--bri-fill",`${e}%`);for(let c of document.querySelectorAll('[data-lh-slider="brightness"], [data-q-range="brightness"]'))String(c.value)!==String(e)&&(c.value=String(e)),c.style.setProperty("--fill",`${e}%`);return ge&&((s=(i=window.NativeXR)==null?void 0:i.setBrightnessPercent)==null||s.call(i,e),(a=(r=window.NativeXR)==null?void 0:r.setBrightness)==null||a.call(r,e)),Ae("brightness",e),(l=(o=ne).invalidate)==null||l.call(o),e}var yA=()=>Math.max(10,Math.min(100,Number(w.brightness??80)||80));function Ny(n,e="center"){var a,o,l,c;let t=typeof n=="string"?he.find(d=>d.id===n):n||ha||he.find(d=>!d.onboarding&&!d.hidden);if(!t||t.onboarding)return null;let i=Py(t),s=e==="left"||e===-1?1:e==="right"||e===1?2:0,r=i[s]||i[0];return t.pinned=!1,t.slotKey=s===1?"left":s===2?"right":"center",t.shell.dataset.predefinedSlot=t.slotKey,t.shell.classList.add("free"),t.target.copy(r),t.obj.position.copy(t.target),t.apply(),Ee.updateMatrixWorld(!0),(o=(a=ne).invalidate)==null||o.call(a),(c=(l=ne).render)==null||c.call(l,Ee,fe),{x:t.obj.position.x,y:t.obj.position.y,z:t.obj.position.z,slot:t.slotKey}}typeof window<"u"&&(window.nextvrSetScreenBrightness=Iy,window.nextvrGetScreenBrightness=yA,window.nextvrSnapWindowToSlot=Ny);function Dy(n){var g;if(!n||w.spatialLauncher||w.dockSnapSlot===0){ky();return}let e=Py(n),t=he.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(f=>f.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],a=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let f=n.obj.position.distanceTo(s[y]);f<a&&(r=s[y],a=f)}zd=r;let o=(g=ct.anchor)!=null&&g.center?Mt.worldToLocal(ct.anchor.center.clone()):n.obj.position;Hd=n.obj.position.distanceTo(o)>.04&&a<=.16,mi.style.width=n.w+"px",mi.style.height=n.h+"px";let c=mi.querySelector(".win-drop-slot-badge");c&&(c.textContent=U("dockSnapHint")),mi.classList.toggle("is-ready",Hd),mi.hidden=!1,_r.position.copy(r);let d=Math.atan2(-r.x,-r.z)*w.winCurve,u=Math.hypot(r.x,r.z)||.001,h=Math.atan2($t-r.y,u)*w.winTilt*-1;_r.rotation.set(h,d,0,"YXZ");let p=w.winScale*n.resizeScale;_r.scale.setScalar(St*p),_r.visible=!0}function ky(){var n,e;zd=null,Hd=!1,(_r.visible||!mi.hidden)&&(_r.visible=!1,mi.hidden=!0,mi.classList.remove("is-ready"),(e=(n=ne).invalidate)==null||e.call(n))}function ma(n,e,t=yi){return fe.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0),Bd.set(n*2-1,1-e*2),t.setFromCamera(Bd,fe),t}function vA(n){return n.h*St*w.winScale*n.resizeScale/2}function bA(n,e,t=null){let i=Af(e,vA(n),$t,t);return new D(i.x,i.y,i.z)}function Xf(n,e,t,i="handle",s=null){if(n.onboarding||Ft.win)return!1;ct.win&&os(),tn(n),ma(e,t);let r=n.obj.getWorldPosition(new D),a=new hi().setFromNormalAndCoplanarPoint(yi.ray.direction.clone(),r),o=yi.ray.intersectPlane(a,new D);if(!o)return!1;let l=Mt.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(ct,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:a,anchor:{hit:o.clone(),center:r.clone(),radius:c,applied:new D}}),!0}function xA(){let n=ct.win;!n||ct.active||(ct.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Xi(),Dy(n))}function $f(n,e){let t=ct.win;if(!t)return!1;ma(n,e);let i=yi.ray.intersectPlane(ct.plane,new D);if(!i)return!1;if(!ct.active){if(!Ef(ct.start,{x:n,y:e},wt.width,wt.height))return!1;xA()}let s=ct.anchor,r=i.clone().sub(s.hit);s.applied.copy(Tf(s.applied,r));let a=s.center.clone().add(s.applied),o=bA(t,Mt.worldToLocal(a),s.radius);return t.target.copy(o),t.obj.position.copy(t.target),Dy(t),!0}function os(){let n=ct.win;n&&(Hd&&zd&&(n.target.copy(zd),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),ky(),Object.assign(ct,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Oy(n,e,t="pinch"){if(!qi||ct.win||Ft.win)return!1;gn.start&&zs(),ma(n,e);let i=On.getWorldPosition(new D),s=new hi().setFromNormalAndCoplanarPoint(yi.ray.direction.clone(),i),r=yi.ray.intersectPlane(s,new D);return r?(Object.assign(gn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new D}}),vt.classList.add("grab-armed"),Wt.setAttribute("aria-pressed","true"),!0):!1}function _A(){!gn.start||gn.active||(gn.active=!0,vt.classList.remove("grab-armed"),vt.classList.add("moving"))}function Yf(n,e){if(!gn.start)return!1;ma(n,e);let t=yi.ray.intersectPlane(gn.plane,new D);if(!t)return!1;if(!gn.active){if(!Ef(gn.start,{x:n,y:e},wt.width,wt.height))return!1;_A()}let i=gn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Tf(i.applied,s));let r=i.center.clone().add(i.applied),a=Mt.worldToLocal(r),o=Af(a,Zn.h/2,$t),l=Math.max($t-.55,Math.min($t-.08,o.y));return ca=new D(o.x,l,o.z),Er=Math.atan2(-o.x,-o.z),Mo(),!0}function zs(){vt==null||vt.classList.remove("grab-armed","moving"),Wt==null||Wt.setAttribute("aria-pressed","false"),Object.assign(gn,{source:null,start:null,active:!1,plane:null,anchor:null})}function Uy(n,e,t){fe.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new D).project(fe),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*wt.width,(t-r)*wt.height)}function Fy(n,e,t){return n.onboarding||ct.win?!1:(Ft.win&&Ar(),tn(n),Object.assign(Ft,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,Uy(n,e,t))}),!0)}function By(n,e){let t=Ft.win;if(!t)return!1;if(!Ft.active){if(!ny(Ft.start,{x:n,y:e},wt.width,wt.height))return!1;Ft.active=!0,t.shell.classList.add("resizing")}let i=t.h*St*w.winScale/2,s=Math.max(Ft.startScale,iy(t.obj.position.y,i,$t)),r=sy(Ft.startScale,Ft.startDistance,Uy(t,n,e),s);return t.resizeScale=yr(ry(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function Ar(){Ft.win&&Ft.win.shell.classList.remove("resizing"),Object.assign(Ft,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function Kn(n,e){ma(n,e);let t=[];for(let o of he)o.hidden||(o.onboarding||t.push(o.resizeHit,o.grab),t.push(o.hit));let i=yi.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),a=i.object.geometry.parameters;return{win:s,u:r.x/a.width+.5,v:.5-r.y/a.height,distance:i.distance}}var zy=Kn;window.windowHitAt=Kn;var ht=null,cn=null,wA=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function MA(n,e,t,i,s){var l,c;let r=s?wA(s):null;e===0&&(n.target=r,n.activation=r);let a=n.target||r;if(!a)return;let o=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";a.dispatchEvent(new PointerEvent(o,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function xl(n,e,t=n.x,i=n.y,s=null){var r,a;if(n.id==="shell"&&((r=n.win)!=null&&r.onboarding))MA(n,e,t,i,s);else if(window.NativeXR.handTouch(n.id,e,t,i),e===1&&s){let o=(a=s.closest)==null?void 0:a.call(s,"[data-qb-url],[data-qb-act]");o&&o.click()}}function pa(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),a=document.elementFromPoint(s,r);if(a&&n.contains(a))return a;let o=null,l=c=>{for(let d of c.children){let u=d.getBoundingClientRect();u.width>0&&u.height>0&&s>=u.left&&s<=u.right&&r>=u.top&&r<=u.bottom&&(o=d),l(d)}};return l(n),o||n}function Hy(n,e){var d,u;let t=(d=e==null?void 0:e.closest)==null?void 0:d.call(e,".lh-vslider-pill");if(!t||!((u=n==null?void 0:n.win)!=null&&u.el))return!1;let i=t.querySelector("input[data-lh-slider]");if(!i)return!1;let s=Gy(t,n.win.el),r=n.v*n.win.el.offsetHeight,a=Math.max(0,Math.min(1,1-(r-s.t)/Math.max(1,s.b-s.t))),o=Number.isFinite(Number(i.min))?Number(i.min):0,l=Number.isFinite(Number(i.max))?Number(i.max):100,c=Math.round(o+a*(l-o));return i.value=String(c),i.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("change",{bubbles:!0})),!0}function ls(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),a=document.elementFromPoint(r.left+i,r.top+s)||jf(t,i,s);if((e===0||e===2)&&Hy(n,a),e===0&&!(a!=null&&a.closest("[data-native-browser],[data-native-app]"))){let g=kA(a);g?gi(!0,g):gi(!1)}if(a==null?void 0:a.closest("[data-native-xr]")){ht=null;return}let l=a==null?void 0:a.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=uf(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!ht)return;let f="app:"+l.dataset.nativeApp;if(ht&&ht.id!==f&&(xl(ht,3),ht=null),e===0){if(!y)return;ht={id:f,win:n.win,x:y.u,y:y.v}}ht&&ht.id===f&&(y||e!==2)&&(y&&(ht.x=y.u,ht.y=y.v),xl(ht,e,ht.x,ht.y)),(e===1||e===3)&&(ht=null);return}let c=a==null?void 0:a.closest("[data-native-browser]"),d=c==null?void 0:c.getBoundingClientRect(),u=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((d==null?void 0:d.left)||0),p=r.top+s-((d==null?void 0:d.top)||0);ht&&ht.id!==u&&(xl(ht,3),ht=null,e!==0)||(e===0&&(ht={id:u,win:n.win,x:h,y:p}),ht&&ht.id===u&&(ht.x=h,ht.y=p,xl(ht,e,h,p,a)),(e===1||e===3)&&(ht=null))}function Vy(){ht&&xl(ht,3),ht=null,cn=null,os(),Ar(),zs()}ze("pinchcancel",Vy);function wr(n,e){if(ge){ls(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=jf(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function jf(n,e,t){let i=null,s=r=>{for(let a of r.children){let o=Gy(a,n);e>=o.l&&e<=o.r&&t>=o.t&&t<=o.b&&(i=a,s(a))}};return s(n),i||n}function Gy(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var wl=null,Vd=!1,Li=null,Gd=!1,Wy=new Map;function Zf(){wl&&(clearTimeout(wl),wl=null)}var SA='button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-nav],[data-spatial-act],[data-spatial-env],[data-store-launch],[data-install-gorilla],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-entry-act],[data-entry-tab],[data-entry-env],[data-cinema-act],[data-win-brightness],[data-predefined-slot],[data-lh-app],[data-lh-act],[data-lh-slider],[data-q-range],[data-win-new-tab]';function AA(n,e){var r,a;if(typeof document<"u"&&Number.isFinite(n)&&Number.isFinite(e)){let o=document.getElementById("left-hand-quick-menu");if(o&&!o.hidden){let l=document.elementFromPoint(n*wt.width,e*wt.height),c=(r=l==null?void 0:l.closest)==null?void 0:r.call(l,"[data-lh-app],[data-lh-act],[data-lh-slider]");if(c)return{x:n,y:e,el:c,isHud:!0}}}let t=Hs(n,e);if(t){let o=t.popupOpt?t.el:Rn[t.i];return{x:n,y:e,el:o||null,isDock:!0}}if(zf(n,e))return{x:n,y:e,el:null,isDockGrab:!0};let s=Kn(n,e);if(s){if(s.handle||s.resize)return{x:n,y:e,el:null,hit:s,isWinControl:!0};let o=pa(s.win.el,s.u,s.v),l=((a=o==null?void 0:o.closest)==null?void 0:a.call(o,SA))||null;if(l)return{x:n,y:e,el:l,hit:s}}return null}function EA(n=null){if(w.pinchOnApp===0)return null;let e=n||be.hand,t=e==null?void 0:e.points;if(!t||t.length<26||Math.hypot(t[18]-t[15],t[19]-t[16])<=.008||Math.hypot(t[24]-t[18],t[25]-t[19])<=.008)return null;let i=Number(Us==null?void 0:Us.scaleX)||1,s=Number(Us==null?void 0:Us.scaleY)||1,r=[];Number.isFinite(t[12])&&Number.isFinite(t[13])&&Number.isFinite(t[24])&&Number.isFinite(t[25])&&r.push([((t[12]+t[24])*.5-.5)*i+.5,((t[13]+t[25])*.5-.5)*s+.5]),Number.isFinite(t[24])&&Number.isFinite(t[25])&&r.push([(t[24]-.5)*i+.5,(t[25]-.5)*s+.5]),t.length>=30&&Number.isFinite(t[15])&&Number.isFinite(t[16])&&Number.isFinite(t[27])&&Number.isFinite(t[28])&&r.push([((t[15]+t[27])*.5-.5)*i+.5,((t[16]+t[28])*.5-.5)*s+.5]),Array.isArray(e.palm)&&e.palm.length>=2&&r.push([(e.palm[0]-.5)*i+.5,(e.palm[1]-.5)*s+.5]);let a=[[0,0],[0,-.016],[0,.016],[-.016,0],[.016,0]];for(let[l,c]of r)for(let[d,u]of a){let h=AA(l+d,c+u);if(h)return h}let o=Wy.get((e==null?void 0:e.id)||"right");return o&&performance.now()-o.at<=380&&o.el&&document.body.contains(o.el)?{x:o.x,y:o.y,el:o.el}:null}var Wd=null;function TA(n,e,t,i,s){var l,c;if(!(n!=null&&n.el))return!1;let a=pa(n.el,e,t),o=!1;for(;a&&a!==document.body;){if(a instanceof HTMLElement){let d=a.scrollHeight>a.clientHeight+2,u=a.scrollWidth>a.clientWidth+2;if(d&&Math.abs(s)>1e-4&&(a.scrollTop-=s*1650,o=!0),u&&Math.abs(i)>1e-4&&(a.scrollLeft-=i*1650,o=!0),o)break}if(a===n.el)break;a=a.parentElement}if(!o){let d=n.el.querySelector("[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body");d instanceof HTMLElement&&(d.scrollHeight>d.clientHeight+2&&Math.abs(s)>1e-4&&(d.scrollTop-=s*1650,o=!0),d.scrollWidth>d.clientWidth+2&&Math.abs(i)>1e-4&&(d.scrollLeft-=i*1650,o=!0))}return o&&((c=(l=ne).invalidate)==null||c.call(l)),o}ze("pinchdown",()=>{var l,c,d,u,h,p,g,y,f,m;Zf(),Vd=!1,Li=null,Gd=!1,Wd={x:be.x,y:be.y};let n=be.x,e=be.y,t=Kn(n,e),i=Rl(n,e),s=zf(n,e),r=Hs(n,e),a=!!(t!=null&&t.resize||t!=null&&t.handle||s||r||i&&i.button||t&&((c=(l=pa(t.win.el,t.u,t.v))==null?void 0:l.closest)!=null&&c.call(l,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-store-launch],[data-launch-gorilla],.lib-tile,[data-qb-url],[data-fist-act],[data-fist-env],[data-native-app],[data-native-browser],[data-native-xr]'))),o=w.fingerTouch!==0||!a?EA():null;if(o&&(Li=o,n=o.x,e=o.y,t=Kn(n,e),i=Rl(n,e),s=zf(n,e),r=Hs(n,e),!(((u=(d=o.el)==null?void 0:d.dataset)==null?void 0:u.id)==="browser"||((p=(h=o.el)==null?void 0:h.dataset)==null?void 0:p.spatialBuiltin)==="browser"||((y=(g=o.el)==null?void 0:g.dataset)==null?void 0:y.app)==="browser")&&o.el&&!(t!=null&&t.resize)&&!(t!=null&&t.handle)&&!s&&!(i&&i.button)&&vr(o.x,o.y,o.el))){Gd=!0,Ds=performance.now()+220;return}if(t!=null&&t.resize){Fy(t.win,n,e);return}if(t!=null&&t.handle){Xf(t.win,n,e,"handle",(f=be.hand)==null?void 0:f.id);return}if(s&&(!t||s.distance<=(t.distance??1/0)+.12)&&(!i||s.distance<i.distance)){Oy(n,e,"pinch");return}if(r&&(!t||r.distance<=(t.distance??1/0)+.15)&&(!i||r.distance<i.distance)){Li&&(be.x=n,be.y=e),Sl("down");return}if(i&&(!t||i.distance<t.distance)){Zd(i.button);return}if(t){tn(t.win);let x=pa(t.win.el,t.u,t.v);((m=x==null?void 0:x.closest)==null?void 0:m.call(x,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(wl=setTimeout(()=>{wl=null,Vd=!0,cn=null,Ll("spatial")},2e3)),cn={win:t.win,hit:t};return}Sl("down")});ze("pinchsample",()=>{if(as&&Ky(performance.now()),cn&&be.mode==="drag"&&!(Li!=null&&Li.el)&&(wr(cn.hit,"down"),cn=null),be.mode==="drag"&&!(Li!=null&&Li.el)&&!Ft.win&&!ct.win&&!gn.start){let n=Wd||{x:be.x,y:be.y},e=be.x-n.x,t=be.y-n.y;Wd={x:be.x,y:be.y};let i=Kn(be.x,be.y);i&&!i.handle&&!i.resize&&TA(i.win,i.u,i.v,e,t)}});ze("pinchup",()=>{if(Zf(),Wd=null,Gd){Gd=!1,Li=null,cn=null;return}let n=Li;Li=null;let e=n?n.x:be.x,t=n?n.y:be.y;if(Vd){Vd=!1,cn=null;return}if(as){Vs();return}if(Ci>=0||oa||xo){n&&(be.x=e,be.y=t),Sl("up");return}if(n!=null&&n.el&&document.body.contains(n.el)){cn=null,vr(n.x,n.y,n.el);return}if(cn&&be.mode==="drag"&&(wr(cn.hit,"down"),cn=null),cn){let r=Kn(e,t),a=r&&!r.handle&&!r.resize&&r.win===cn.win?r:cn.hit;cn=null,wr(a,"down"),wr(a,"up");return}if(ht){let r=Kn(e,t);r&&r.win===ht.win&&!r.handle&&!r.resize?ls(r,1):Vy();return}if(Ft.win){Ar();return}if(ct.win){os();return}if(gn.start){Yf(be.x,be.y),zs();return}let i=Hs(e,t),s=Kn(e,t);if(i&&(!s||i.distance<=(s.distance??1/0)+.15)){n&&(be.x=e,be.y=t),Sl("up");return}if(s&&!s.handle&&!s.resize){wr(s,"up");return}Sl("up")});var vt=document.createElement("div");vt.className="dock";var Ii=document.createElement("div");Ii.className="browser-tab-popup dock-browser-popup";Ii.dataset.browserTabMenu="dock";Ii.hidden=!0;Ii.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;Ii.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";fa(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var Wt=document.createElement("button");Wt.type="button";Wt.className="dock-grab";Wt.title=U("moveDock");Wt.setAttribute("aria-label",U("moveDock"));Wt.setAttribute("aria-pressed","false");var On=new ea(vt);Mt.add(On);var Pi=new Rt(new Dn(1,1),new pn({visible:!1})),Wi=new Rt(new Dn(1,1),new pn({visible:!1})),ss=new Rt(new Dn(.26,.14),new pn({visible:!1,side:qn}));Mt.add(Pi,Wi,ss);function fa(){var e,t,i,s;Ii.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=ne).invalidate)==null||t.call(e),(s=(i=ne).render)==null||s.call(i,Ee,fe)}function Ll(n="dock"){var e,t,i,s,r,a;if(n==="spatial"){let o=document.querySelector('[data-browser-tab-menu="spatial"]');o&&(o.hidden=!1)}else{let o=jd("browser");o&&(Ii.style.left=`${o.offsetLeft+o.offsetWidth/2}px`),Ii.hidden=!1,Mo()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=ne).invalidate)==null||s.call(i),(a=(r=ne).render)==null||a.call(r,Ee,fe)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=Ll,window.nextvrHideBrowserTabMenus=fa);if(!ge){let n=e=>({x:e.clientX/wt.width,y:e.clientY/wt.height});Wt.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Oy(t.x,t.y,"desktop")&&Wt.setPointerCapture(e.pointerId)}),Wt.addEventListener("pointermove",e=>{if(gn.source==="desktop"){let t=n(e);Yf(t.x,t.y)}}),Wt.addEventListener("pointerup",e=>{gn.source==="desktop"&&(zs(),Wt.hasPointerCapture(e.pointerId)&&Wt.releasePointerCapture(e.pointerId))}),Wt.addEventListener("pointercancel",zs)}var qi=!0,_l=!1;function qt(n){var e,t;qi=!!n,On.visible=qi,qi||(Ci=-1,zs()),(t=(e=ne).invalidate)==null||t.call(e)}var qy=()=>qi;function sn(n){var t,i;let e=!!n;return _l===e||(_l=e,vt.style.setProperty("display",e?"none":"","important"),Pi.visible=Wi.visible=!e,qt(!e),(i=(t=ne).invalidate)==null||i.call(t)),_l}var Yd=()=>_l,RA=[],Rn=[],jd=n=>Rn.find(e=>e.dataset.id===n)||null,Ff=[],CA=ee("wifi"),LA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',PA='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Xy(n){RA=n,Rn=[],Ff.length=0,vt.innerHTML="";for(let e of n){if(e.kind==="sep"){vt.appendChild(IA());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",vt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=w.profileAvatar?`<img src="${w.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:PA,w.profileName&&(t.title=w.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${CA}</span><span class="dk-bat">${LA}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),Ff.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",Ll("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}fa(),e.run()}),vt.appendChild(t),Rn.push(t)}vt.appendChild(Ii),Wt.title=U("moveDock"),Wt.setAttribute("aria-label",U("moveDock")),vt.appendChild(Wt),Kf(),Jf(),wo(),$y(),Mo()}function IA(){let n=document.createElement("span");return n.className="dock-sep",n}function $y(){for(let{b:n,win:e}of Ff){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",he.some(i=>i.id===e))}}ze("wins",$y);var rs={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},ds=()=>({...rs});function qd(){Ae("device-status",ds())}function Kf(){let n=vt.querySelector(".dk-time"),e=new Date;rs.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),rs.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=rs.time),qd()}Kf();setInterval(Kf,1e3);function Jf(){let n=vt.querySelector(".dk-wifi");rs.online=navigator.onLine,n&&(n.style.opacity=rs.online?"1":".35"),qd()}addEventListener("online",Jf);addEventListener("offline",Jf);var _o=null;function wo(){let n=vt.querySelector(".dk-bat");if(!_o){n&&(n.style.display="none"),rs.batteryLevel=null,rs.charging=!1,qd();return}let e=Math.max(0,Math.min(1,Number(_o.level)||0)),t=!!_o.charging;if(rs.batteryLevel=e,rs.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}qd()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(_o=e,wo())}catch{}};!ge&&navigator.getBattery&&navigator.getBattery().then(n=>{_o=n,n.addEventListener("levelchange",wo),n.addEventListener("chargingchange",wo),wo()}).catch(()=>{});var Ci=-1,oa=null,Pf={x:-1,y:-1},Ml=null,xo=!1;function Bf(){Ml&&(clearTimeout(Ml),Ml=null)}ze("pinchcancel",()=>{Ci=-1,oa=null,xo=!1,Bf(),Zf()});function Sl(n){var s,r,a;let e=Hs(be.x,be.y);if(n==="down"){if(Bf(),xo=!1,Pf={x:be.x,y:be.y},e!=null&&e.popupOpt){Ci=-1,oa=e.popupOpt;return}oa=null,Ci=e?e.i:-1,Ci>=0&&((r=(s=Rn[Ci])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(Ml=setTimeout(()=>{Ml=null,xo=!0,Ll("dock")},2e3));return}if(Bf(),xo){xo=!1,Ci=-1,oa=null;return}let t=Ci,i=oa;if(Ci=-1,oa=null,n==="up"){let o=(e==null?void 0:e.popupOpt)||i;if(o){fa(),(a=window.nextvrOpenBrowserOption)==null||a.call(window,o);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(be.x-Pf.x,be.y-Pf.y)<.085&&(l=t),l<0)return;let c=Rn[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function zf(n,e){return!qi||!Hf?null:(ma(n,e),Wi.updateMatrixWorld(!0),yi.intersectObject(Wi,!1)[0]||null)}function Hs(n,e){if(!qi)return null;if(ma(n,e),!Ii.hidden){ss.updateMatrixWorld(!0);let o=yi.intersectObject(ss,!1)[0];if(o){let c=ss.worldToLocal(o.point.clone()).y>=0?"new-tab":"incognito-tab",d=Ii.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:d,distance:o.distance}}}Pi.updateMatrixWorld(!0);let t=yi.intersectObject(Pi,!1)[0];if(!t)return null;let i=Pi.worldToLocal(t.point.clone()),s=Pi.geometry.parameters,r=(i.x/s.width+.5)*vt.offsetWidth,a=(.5-i.y/s.height)*vt.offsetHeight;for(let o=0;o<Rn.length;o++){let l=Rn[o];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&a>=l.offsetTop-4&&a<=l.offsetTop+l.offsetHeight+4)return{i:o,distance:t.distance,button:l}}return null}var my="",Hf="",Er=0,ca=null;ze("recenter",()=>{Er=0,ks.ready=!1,ca=null,zs();for(let n of he)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));Mo(),Xi();for(let n of he)n.hidden||n.apply()});ze("summon-dock",()=>{var e;fe.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);let n=fe.getWorldDirection(new D).transformDirection(Mt.matrixWorld.clone().invert());Er=Math.atan2(-n.x,-n.z),ks.ready=!1,ca=null,zs(),Mo(),(e=window.NativeXR)==null||e.click()});function Mo(){let n=wt.width>wt.height,e=(ge?si.dockDistance:n?1.42:1.75)*w.dockDist,t=ge?-si.dockDrop:n?-.5:-.6,i=St*(ge?si.dockScale:n?.74:.88)*w.dockSize;ca?On.position.copy(ca):On.position.set(-Math.sin(Er)*e,$t+t,-Math.cos(Er)*e),On.rotation.set(.26,Er,0,"YXZ"),On.scale.setScalar(i);let s=vt.offsetWidth*i,r=vt.offsetHeight*i,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==my&&(my=a,Pi.geometry.dispose(),Pi.geometry=new Dn(s,r),Zn.h=r,ca||Xi());let o=Wt.offsetWidth*i,l=Wt.offsetHeight*i,c=o.toFixed(3)+"x"+l.toFixed(3);o>0&&c!==Hf&&(Hf=c,Wi.geometry.dispose(),Wi.geometry=new Dn(o,l)),Pi.position.copy(On.position),Pi.rotation.copy(On.rotation),ss.position.copy(On.position),ss.rotation.copy(On.rotation);let d=jd("browser"),u=d&&vt.offsetWidth>0?(d.offsetLeft+d.offsetWidth*.5-vt.offsetWidth*.5)*i:0;ss.translateX(u),ss.translateY((vt.offsetHeight*.5+52)*i),ss.translateZ(.005),Wi.position.copy(On.position),Wi.rotation.copy(On.rotation),Wi.translateY((vt.offsetHeight/2-Wt.offsetTop-Wt.offsetHeight/2)*i),Wi.translateZ(.004),!ca&&(Zn.y!==On.position.y||Zn.z!==-e)&&(Zn.y=On.position.y,Zn.z=-e,Xi())}var NA=[["q","w","e","r","t","y","u","i","o","p",{k:"\u232B",cls:"wide kb-bksp",icon:"backspace",label:"Apagar"}],["a","s","d","f","g","h","j","k","l",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide kb-shift",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@close",cls:"util kb-hide",icon:"keyboard",label:"Fechar teclado"},{k:"@sym",cls:"util kb-sym",lbl:"!123",label:"N\xFAmeros e s\xEDmbolos"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:" "},{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@settings",cls:"util",icon:"settings",label:"Configura\xE7\xF5es"}]],Mr={q:"1",w:"2",e:"3",r:"4",t:"5",y:"6",u:"7",i:"8",o:"9",p:"0",a:"@",s:"#",d:"$",f:"&",g:"*",h:"(",j:")",k:"'",l:'"',z:"%",x:"-",c:"+",v:"=",b:"/",n:";",m:":",",":"!",".":"?"},gy=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],DA=0,rt=null,Un=null,_t=null,bo=null,cs=!1,da=!1,Sr=!1,Pl=!1,Bs=window.__nextvrTyping,kA=n=>(Bs==null?void 0:Bs.editable(n))||null,Al=null,Vf=1,Yy=2,Xd=3,OA=ge;function Tr(n){var t,i;if(Pl=!!n,!rt)return!1;let e=!!n;return rt.visible=!e,rt.element.style.setProperty("display",e?"none":"","important"),Un&&(Un.visible=!e),e&&Vs(),(i=(t=ne).invalidate)==null||i.call(t),!0}var jy=()=>!!rt&&rt.visible!==!1,Zy=()=>Pl;function UA(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&he.find(s=>s.shell===t)||null}function gi(n,e){var s,r,a,o,l,c,d,u,h,p,g,y;if(!n){ge&&console.log("kb close; was serving",(_t==null?void 0:_t.nativeId)||(_t==null?void 0:_t.tagName)||"nothing"),Vs(),rt&&(Mt.remove(rt),Mt.remove(Un),rt.element.remove(),rt=null),_t=null,bo=null,cs=da=Sr=!1,ks.ready=!1,(r=(s=ne).invalidate)==null||r.call(s),(o=(a=ne).render)==null||o.call(a,Ee,fe);return}let t=e||Al;if(_t=t&&!t.nativeId?(Bs==null?void 0:Bs.focus(t))||null:t||null,_t&&!_t.nativeId&&(Al=_t),bo=UA(_t),ge&&console.log("kb open for",(_t==null?void 0:_t.nativeId)||(_t==null?void 0:_t.tagName)||"nothing","in window",(bo==null?void 0:bo.id)??"none"),rt){Gf(),Ee.updateMatrixWorld(!0),(c=(l=ne).invalidate)==null||c.call(l),(u=(d=ne).render)==null||u.call(d,Ee,fe);return}let i=document.createElement("div");i.className="kb";for(let f of NA){let m=document.createElement("div");m.className="kb-row";for(let x of f){let b=typeof x=="string"?x:x.k,M=document.createElement("button");M.className="key"+(typeof x=="string"?"":" "+x.cls),typeof x=="string"?(M.textContent=b,Mr[b]&&(M.dataset.sub=Mr[b])):x.icon?(M.innerHTML=ee(x.icon),M.setAttribute("aria-label",x.label),M.title=x.label):M.textContent=x.lbl||b,M.dataset.k=b,m.appendChild(M)}i.appendChild(m)}i.addEventListener("click",f=>{let m=f.target.closest("[data-k]");m&&(Zd(m),Vs())}),rt=new ea(i),rt.scale.setScalar(St*(ge?si.keyboardScale:.9)),Mt.add(rt),Un=new Rt(new Dn(1,1),new pn({visible:!1})),Mt.add(Un),Gf(),Ee.updateMatrixWorld(!0),(p=(h=ne).invalidate)==null||p.call(h),(y=(g=ne).render)==null||y.call(g,Ee,fe)}function FA(){cs?da?(cs=!1,da=!1):da=!0:(cs=!0,da=!1),ep()}function Qf(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@"),r=s&&Sr&&Mr[n]?Mr[n]:n;if(t===Xd){e&&e.classList.remove("hot"),s&&If(r,r,!!i,Xd);return}if(t===Vf){if(ge&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){gi(!1);return}if(n==="\u21E7"){FA();return}if(n==="@sym"){Sr=!Sr,ep();return}if(n==="@lang"||n==="@settings")return;if(n==="@mic"){et(U("micOff"));return}if(n==="@emoji"){If(n,gy[DA++%gy.length],!1,Vf);return}}If(r,r,r==="\u232B"||r==="\u23CE"||Sr?!1:void 0,t)}function If(n,e,t,i){if(!_t)return!1;let s=t===void 0?cs:t;return _t.nativeId?window.NativeXR.key(_t.nativeId,e,!!s,i||0):Bs==null||Bs.key(n,!!s,i||0),OA&&i!==Yy&&console.log("kb key ->",_t.nativeId||_t.tagName+"."+(_t.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==Xd&&s&&cs&&!da&&(cs=!1,ep()),!0}function ep(){if(rt){for(let n of rt.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=cs?da?"lock":"once":"";for(let n of rt.element.querySelectorAll('[data-k="@sym"]'))n.textContent=Sr?"ABC":"!123",n.dataset.state=Sr?"lock":"";for(let n of rt.element.querySelectorAll("[data-k]")){let e=n.dataset.k;Sr&&Mr[e]?(n.textContent=Mr[e],n.dataset.sub=e):e.length===1&&/[a-zç,.]/i.test(e)&&(n.textContent=/[a-zç]/i.test(e)?cs?e.toUpperCase():e.toLowerCase():e,Mr[e]&&(n.dataset.sub=Mr[e]))}}}var yy="",BA=.35,ks={yaw:0,ready:!1},zA=n=>Math.atan2(Math.sin(n),Math.cos(n));function HA(){let n=bo;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return Er}function Gf(n=0){if(!rt)return;let e=HA();ks.ready?ks.yaw+=zA(e-ks.yaw)*(1-Math.exp(-n*7)):(ks.yaw=e,ks.ready=!0);let t=ks.yaw,i=ge?si.keyboardDistance:-Zn.z-.35;rt.position.set(-Math.sin(t)*i,$t-(ge?si.keyboardDrop:.68),-Math.cos(t)*i),rt.rotation.set(-Math.PI/2+BA,t,0,"YXZ");let s=rt.element.offsetWidth*rt.scale.x,r=rt.element.offsetHeight*rt.scale.x,a=s.toFixed(3)+"x"+r.toFixed(3);s>0&&a!==yy&&(yy=a,Un.geometry.dispose(),Un.geometry=new Dn(s,r)),Un.position.copy(rt.position),Un.rotation.copy(rt.rotation)}var VA=700,GA=90,WA=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),as=null,El=0;function Rl(n,e){var o,l;if(!rt||Pl)return null;Bd.set(n*2-1,-(e*2-1)),yi.setFromCamera(Bd,fe);let t=yi.intersectObject(Un,!1)[0];if(!t)return null;let i=Un.worldToLocal(t.point.clone()),s=Un.geometry.parameters,r=(i.x/s.width+.5)*rt.element.offsetWidth,a=(.5-i.y/s.height)*rt.element.offsetHeight;return{distance:t.distance,button:((l=(o=jf(rt.element,r,a))==null?void 0:o.closest)==null?void 0:l.call(o,"[data-k]"))||null}}function Zd(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return Vs(),e?(as={key:e,button:n,shift:cs},Qf(e,n,Vf),WA(e)&&(El=performance.now()+VA),!0):!1}function Vs(){let n=as;as=null,El=0,n&&Qf(n.key,n.button,Xd,n.shift)}ze("pinchcancel",Vs);function Ky(n){var i,s;if(!as)return!1;let e=Rl(be.x,be.y);if(!e)return Vs(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==as.key?(Vs(),Zd(e.button)):(El&&n>=El&&(Qf(as.key,as.button,Yy),El=n+GA),!0)}var vy="";ul((n,e)=>{let t=`${w.winScale}:${w.winDist}`;if(vy!==t&&(vy=t,Xi()),Mo(),Gf(n),as&&Ky(e),cn&&be.mode==="drag"&&(wr(cn.hit,"down"),cn=null),ht&&be.active&&be.down){let i=Kn(be.x,be.y);i&&i.win===ht.win&&!i.handle&&!i.resize&&ls(i,2)}if((Ft.win||ct.win&&ct.source!=="fist")&&be.active&&be.down){let i=Cd(e);Ft.win&&By(i.x,i.y),ct.win&&ct.source!=="fist"&&$f(i.x,i.y)}if(gn.start&&be.active&&be.down){let i=Cd(e);Yf(i.x,i.y)}for(let i of he)i.hidden||i.apply();Jy()});function Nf(n){let e=n.matrixWorld.elements,t=fe.position.x-e[12],i=fe.position.z-e[14];return t*e[8]+i*e[10]<0}function Jy(){var e,t,i,s;Ee.updateMatrixWorld(!0);let n=!1;if(qi&&vt){let r=Nf(On)?"1":"0";vt.dataset.backface!==r&&(vt.dataset.backface=r,Wt&&(Wt.dataset.backface=r),n=!0)}if(rt&&rt.visible!==!1&&rt.element){let r=Nf(rt)?"1":"0";rt.element.dataset.backface!==r&&(rt.element.dataset.backface=r,n=!0)}for(let r of he){if(r.hidden||!r.shell)continue;let a=Nf(r.obj)?"1":"0";r.shell.dataset.backface!==a&&(r.shell.dataset.backface=a,n=!0)}n&&((t=(e=ne).invalidate)==null||t.call(e),(s=(i=ne).render)==null||s.call(i,Ee,fe))}typeof window<"u"&&(window.__updateBackfaceStates=Jy);var Qy='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',ra=null;function Os(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,Qy))||null;return e===ra?e:(ra&&ra.classList.remove("nextvr-choosing"),ra=e,ra&&ra.classList.add("nextvr-choosing"),ra)}function la(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,Qy))||(n instanceof HTMLElement?n:null);if(!e)return null;Os(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=Os,window.__nextvrClickAnim=la,document.addEventListener("pointerover",n=>{n.target instanceof Element&&Os(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&la(n.target)},{passive:!0,capture:!0}));if(ge){let n=function(){try{_o=JSON.parse(window.NativeXR.battery()),wo()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?gi(!0,{nativeId:e}):(_t==null?void 0:_t.nativeId)!==e&&gi(!1)},window.nextvrAppFocus=e=>gi(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var yt=null,kd=new Map,Od=new vo({holdMs:2e3,graceMs:260}),ua=new Set,Us={hands:[],consumed:new Set,scaleX:1,scaleY:1},bl=null,Df=0,by=350,qA=240;function $d(n,e){fe.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);let t=new tl;return t.setFromCamera(new Ze(n*2-1,1-e*2),fe),t}function Fd(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Wf(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new D),s=n.curve>0?Pd(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function XA(n,e){let t=n.obj.getWorldPosition(new D),i=new D(0,0,1).transformDirection(n.obj.matrixWorld),s=new hi().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new D);let r=n.obj.matrixWorld.clone().invert(),a=e.origin.clone().applyMatrix4(r),o=e.origin.clone().add(e.direction).applyMatrix4(r).sub(a).normalize(),l=n.curveRadius,c=o.x*o.x+o.z*o.z;if(c<1e-9)return e.intersectPlane(s,new D);let d=2*(a.x*o.x+(a.z-l)*o.z),u=a.x*a.x+(a.z-l)*(a.z-l)-l*l,h=d*d-4*c*u;if(h<0)return e.intersectPlane(s,new D);let p=Math.sqrt(h);for(let g of[(-d-p)/(2*c),(-d+p)/(2*c)]){if(!(g>0))continue;let y=a.clone().addScaledVector(o,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new D)}function xy(n){let e=null;for(let t of he){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new D),s=XA(t,n.ray);if(!s)continue;let{local:r,scale:a}=Wf(t,s);if(Math.abs(r.x)*a.x>t.w*a.x/2+.08||Math.abs(r.y)*a.y>t.h*a.y/2+.08)continue;let o=n.ray.origin.distanceTo(s);(!e||o<e.distance)&&(e={win:t,point:s,distance:o})}return e}var Fs=new Map,Ds=0,Ps=null,Vi=null;function kf(n,e=null,t=null){var a;if(typeof document>"u")return;if(!n){Vi&&(Vi.hidden=!0);return}let i=document.getElementById("hud")||document.body;(!Vi||!document.body.contains(Vi))&&(Vi=document.createElement("div"),Vi.id="finger-sticky-dot",Vi.className="finger-sticky-dot",i.appendChild(Vi));let s=Number.isFinite(e)?e*100:50,r=Number.isFinite(t)?t*100:50;if(!Number.isFinite(e)||!Number.isFinite(t)){let o=(a=n.getBoundingClientRect)==null?void 0:a.call(n);o&&o.width>0&&o.height>0&&wt.width>0&&wt.height>0&&(s=(o.left+o.width*.5)/wt.width*100,r=(o.top+o.height*.5)/wt.height*100)}Vi.style.left=`${Math.max(4,Math.min(96,s)).toFixed(1)}%`,Vi.style.top=`${Math.max(4,Math.min(96,r)).toFixed(1)}%`,Vi.hidden=!1}function aa(n,e=null,t=null){var i,s,r,a;if(Ps===n){Ps&&kf(Ps,e,t);return}Ps&&((s=(i=Ps.classList)==null?void 0:i.remove)==null||s.call(i,"finger-hover","finger-sticking")),Ps=n||null,Ps?((a=(r=Ps.classList)==null?void 0:r.add)==null||a.call(r,"finger-hover","finger-sticking"),kf(Ps,e,t)):kf(null)}function $A(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63||Math.hypot(e[21]-e[18],e[22]-e[19])<.005)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],a=e[24],o=e[25],l=Math.hypot(a-t,o-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function Ud(n,e){var r,a,o,l,c,d,u,h,p,g,y,f,m,x,b,M,S,T,A;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=Rl(n,e),i=Kn(n,e),s=Hs(n,e);if(!s&&qi){for(let k of[-.02,.02,-.038,.038])if(s=Hs(n,e+k),s)break}if(t&&(!i||t.distance<i.distance)&&t.button)return Os(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return Os(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(Rn[s.i]){let k=Rn[s.i];return Os(k),{kind:"dock",x:n,y:e,el:k,key:"dock:"+(((a=k.dataset)==null?void 0:a.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let k=pa(i.win.el,i.u,i.v),v=((o=k==null?void 0:k.closest)==null?void 0:o.call(k,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-spatial-env],[data-fist-act],[data-fist-env],[data-qb-url],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,_=((l=k==null?void 0:k.closest)==null?void 0:l.call(k,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(v){Os(v);let P=((c=v.dataset)==null?void 0:c.browserOpt)||((d=v.dataset)==null?void 0:d.spatialBuiltin)||((u=v.dataset)==null?void 0:u.spatialAndroid)||((h=v.dataset)==null?void 0:h.spatialXr)||((p=v.dataset)==null?void 0:p.spatialScroll)||((g=v.dataset)==null?void 0:g.spatialEnv)||((y=v.dataset)==null?void 0:y.fistAct)||((f=v.dataset)==null?void 0:f.fistEnv)||((m=v.dataset)==null?void 0:m.qbUrl)||((x=v.dataset)==null?void 0:x.id)||((b=v.dataset)==null?void 0:b.act)||((M=v.dataset)==null?void 0:M.lang)||v.getAttribute("aria-label")||v.title||((T=(S=v.textContent)==null?void 0:S.trim())==null?void 0:T.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:v,hit:i,key:`win:${i.win.id}:${P}`}}if(_){let P=Math.round(i.u*16),N=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:_,hit:i,key:`surf:${i.win.id}:${P}:${N}`}}}if(s!=null&&s.popupOpt&&s.el)return Os(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&Rn[s.i]){let k=Rn[s.i];return Os(k),{kind:"dock",x:n,y:e,el:k,key:"dock:"+(((A=k.dataset)==null?void 0:A.id)||s.i)}}return null}function _y(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1,r=[[0,0],[0,.015],[0,-.015]];if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let a=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5;for(let[u,h]of r){let p=Ud(a+u,o+h);if(p)return p}if(Number.isFinite(t[12])&&Number.isFinite(t[13])){let u=((t[12]+t[24])*.5-.5)*i+.5,h=((t[13]+t[25])*.5-.5)*s+.5,p=Ud(u,h);if(p)return p}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,d=Ud(l,c);if(d)return d}if(Array.isArray(n.aim)&&n.aim.length>=2){let a=sa(n.aim),o=Ud(a.x,a.y);if(o)return o}return null}function vr(n,e,t=null){var a,o,l,c,d,u,h,p,g,y,f,m,x,b,M,S,T,A,k,v,_,P,N,O,C,R,F,H,z,W,Q,te,ie,G,$,Y,ae,X,se,pe;if((a=t==null?void 0:t.dataset)!=null&&a.browserOpt)return fa(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,t.dataset.browserOpt),(c=(l=ne).invalidate)==null||c.call(l),(u=(d=ne).render)==null||u.call(d,Ee,fe),!0;if(t&&Rn.includes(t))return t.classList.add("finger-pressed"),t.style.transform="scale(.88)",setTimeout(()=>{t.style.transform="",t.classList.remove("finger-pressed")},160),la(t),t.click(),(p=(h=ne).invalidate)==null||p.call(h),(y=(g=ne).render)==null||y.call(g,Ee,fe),!0;let i=Rl(n,e),s=Kn(n,e),r=Hs(n,e);if(i&&(!s||i.distance<s.distance))return Zd(i.button),setTimeout(()=>Vs(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return fa(),(f=window.nextvrOpenBrowserOption)==null||f.call(window,r.popupOpt),!0;if(Rn[r.i]){let oe=Rn[r.i];return oe.classList.add("finger-pressed"),oe.style.transform="scale(.88)",setTimeout(()=>{oe.style.transform="",oe.classList.remove("finger-pressed")},160),la(oe),oe.click(),(x=(m=ne).invalidate)==null||x.call(m),(M=(b=ne).render)==null||M.call(b,Ee,fe),!0}}if(s&&!s.handle&&!s.resize){tn(s.win);let oe=t&&s.win.el.contains(t)?t:pa(s.win.el,s.u,s.v);if(Hy(s,oe))return(T=(S=ne).invalidate)==null||T.call(S),(k=(A=ne).render)==null||k.call(A,Ee,fe),!0;let we=((v=oe==null?void 0:oe.closest)==null?void 0:v.call(oe,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-spatial-xr],[data-spatial-scroll],[data-qb-url],[data-lh-app],[data-lh-act],[data-lh-slider]'))||oe;we!=null&&we.classList&&(we.classList.add("finger-pressed"),setTimeout(()=>{var Pe,He;return(He=(Pe=we.classList)==null?void 0:Pe.remove)==null?void 0:He.call(Pe,"finger-pressed")},180),la(we));let q=!1,Ht=()=>{q=!0};return(_=we==null?void 0:we.addEventListener)==null||_.call(we,"click",Ht,{once:!0}),wr(s,"down"),wr(s,"up"),(P=we==null?void 0:we.removeEventListener)==null||P.call(we,"click",Ht),!q&&we&&(!((N=we.closest)!=null&&N.call(we,"[data-native-browser],[data-native-app],[data-native-xr]"))||(O=we.matches)!=null&&O.call(we,"[data-qb-url],[data-qb-act]"))&&((C=we.click)==null||C.call(we)),(F=(R=ne).invalidate)==null||F.call(R),(z=(H=ne).render)==null||z.call(H,Ee,fe),!0}if(r!=null&&r.popupOpt)return fa(),(W=window.nextvrOpenBrowserOption)==null||W.call(window,r.popupOpt),!0;if(r&&Rn[r.i]){let oe=Rn[r.i];return oe.classList.add("finger-pressed"),oe.style.transform="scale(.88)",setTimeout(()=>{oe.style.transform="",oe.classList.remove("finger-pressed")},160),la(oe),oe.click(),(te=(Q=ne).invalidate)==null||te.call(Q),(G=(ie=ne).render)==null||G.call(ie,Ee,fe),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((Y=($=t.classList)==null?void 0:$.add)==null||Y.call($,"finger-pressed"),setTimeout(()=>{var oe,we;return(we=(oe=t.classList)==null?void 0:oe.remove)==null?void 0:we.call(oe,"finger-pressed")},160),la(t),t.click(),(X=(ae=ne).invalidate)==null||X.call(ae),(pe=(se=ne).render)==null||pe.call(se,Ee,fe),!0):!1}function YA(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}var Tl=new Map;function jA(n,e,t,i,s){var p,g,y;let r=Kn(e,t)||n.winHit;if(!r||!r.win||r.win.hidden)return!1;n.winHit=r;let a=r.win.el,o=pa(a,r.u,r.v);if((p=o==null?void 0:o.closest)==null?void 0:p.call(o,"[data-native-browser],[data-native-app]"))return n.nativeDownSent?ls(r,2):(n.nativeDownSent=!0,ls(r,0)),!0;let c=null,d=null,u=o;for(;u&&u!==document.body&&!(u instanceof HTMLElement&&(!c&&u.scrollHeight>u.clientHeight+2&&(c=u),!d&&u.scrollWidth>u.clientWidth+2&&(d=u),c&&d)||u===a);)u=u.parentElement;if(!c||!d){let f=a.querySelectorAll("[data-spatial-scroll-track], .spatial-honeycomb, .st-quest-main, .st-main, .lib-grid, .set-body, .win-body");for(let m of f)m instanceof HTMLElement&&(!c&&m.scrollHeight>m.clientHeight+2&&(c=m),!d&&m.scrollWidth>m.clientWidth+2&&(d=m))}let h=!1;return c&&Math.abs(s)>1e-4&&(n.dirY===0&&(n.dirY=c.scrollTop<=4&&t-n.startScreenY>.012?1:-1),c.scrollTop+=n.dirY*s*1850,h=!0),d&&Math.abs(i)>1e-4&&(n.dirX===0&&(n.dirX=d.scrollLeft<=4&&e-n.startScreenX>.012?1:-1),d.scrollLeft+=n.dirX*i*1850,h=!0),h&&((y=(g=ne).invalidate)==null||y.call(g)),h}function wy(n){let e=Tl.get(n);e!=null&&e.nativeDownSent&&e.winHit&&ls(e.winHit,1),Tl.delete(n)}function ZA(n,e,t){var F,H,z,W,Q,te,ie,G,$;if(w.fingerTouch===0)return Fs.delete(n==null?void 0:n.id),wy(n==null?void 0:n.id),aa(null),!1;let i=n==null?void 0:n.points,s=Fs.get(n==null?void 0:n.id),r=null,a=!1;if(i&&i.length>=26&&Math.hypot(i[18]-i[15],i[19]-i[16])>.008&&(r=_y(n,e),a=!0,r!=null&&r.el&&Wy.set(n.id||"right",{x:r.x,y:r.y,el:r.el,at:t})),!$A(n)){let Y=(F=Tl.get(n==null?void 0:n.id))==null?void 0:F.scrolling;if(wy(n==null?void 0:n.id),!Y&&s&&!s.latched&&!(n!=null&&n.pinching)&&!(n!=null&&n.fist)&&!(n!=null&&n.predicted)&&i&&i.length>=26&&t-s.enterAt>=40&&t-s.lastSeenAt<=220&&t-s.lastTapAt>=360&&Math.hypot(i[0]-(s.wristX??i[0]),i[1]-(s.wristY??i[1]))<=.045){let ae=vr(s.tapX,s.tapY,s.targetEl);if(Fs.delete(n==null?void 0:n.id),aa(null),ae)return Ds=t+220,!0}return Fs.delete(n==null?void 0:n.id),aa(null),!1}let o=i&&i.length>=26?i[24]:.5,l=i&&i.length>=26?i[25]:.5,c=Number(e==null?void 0:e.scaleX)||1,d=Number(e==null?void 0:e.scaleY)||1,u=(o-.5)*c+.5,h=(l-.5)*d+.5,p=Tl.get(n.id),g=Kn(u,h)||(Array.isArray(n.aim)&&n.aim.length>=2?Kn(sa(n.aim).x,sa(n.aim).y):null);if(!p)p={startTipX:o,startTipY:l,startWristX:i?i[0]:o,startWristY:i?i[1]:l,startScreenX:u,startScreenY:h,lastScreenX:u,lastScreenY:h,dirX:0,dirY:0,scrolling:!1,nativeDownSent:!1,winHit:g},Tl.set(n.id,p);else{let Y=u-p.lastScreenX,ae=h-p.lastScreenY;p.lastScreenX=u,p.lastScreenY=h,g&&(p.winHit=g);let X=Math.hypot(o-p.startTipX,l-p.startTipY),se=i?Math.hypot(i[0]-p.startWristX,i[1]-p.startWristY):0;if(!p.scrolling&&p.winHit&&(X>=.022&&se>=.012||X>=.036)&&(p.scrolling=!0),p.scrolling)return jA(p,u,h,Y,ae),s&&(s.latched=!0),aa(null),!0}let f=(i&&i.length>=17?i[16]:l)-l,m=i&&i.length>=26?Math.hypot(i[24]-i[0],i[25]-i[1]):.1,x=i&&i.length>=20?Math.hypot(i[18]-i[0],i[19]-i[1]):.08,b=m/Math.max(1e-4,x),M=n.head&&n.head.length===63?n.head[25]:0,S=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,T=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,A=Number(n.palmWidth)||0,k=YA(n.points),v=s,_=a?r:_y(n,e),P=Y=>{if(!Y)return!1;let ae=S>0&&Y.baseDist>0?S-Y.baseDist:0,X=S>0&&Y.baseDist>0?ae/Y.baseDist:0,se=A>.012&&Y.basePalm>.012?(Y.basePalm-A)/Y.basePalm:0,pe=k>.02&&Y.baseSpan>.02?(Y.baseSpan-k)/Y.baseSpan:0,oe=T-Y.baseTipRelZ;return ae>=.016||X>=.036||se>=.042||pe>=.042||oe>=.014&&(ae>=.006||se>=.018||pe>=.018)},N=Y=>{if(!Y)return!1;let ae=Y.restTipY-l>=.0075,X=f-Y.restFingerLift>=.0075,se=M-Y.restHeadY>=.0075,pe=Y.maxIndexRatio>1.08&&Y.maxIndexRatio-b>=.08,oe=(Y.wristX??.5)-Y.restTipX,we=(Y.wristY??.7)-Y.restTipY,q=Math.hypot(oe,we)||1,Ht=(o-Y.restTipX)*(oe/q)+(l-Y.restTipY)*(we/q)>=.0075;return ae||X||se||pe||Ht||P(Y)};if(!_){if(v&&v.pendingBrowserTap&&!v.holdMenuOpened&&t-v.lastTapAt>=360&&(v.pendingBrowserTap=!1,vr(v.tapX,v.tapY,v.targetEl)))return v.latched=!0,v.lastTapAt=t,Ds=t+220,!0;let Y=v&&(N(v)||Math.hypot(o-v.restTipX,l-v.restTipY)>=.006);return v&&t-v.lastSeenAt<=180&&t-v.enterAt>=40&&!v.latched&&Y&&t-v.lastTapAt>=360&&vr(v.tapX,v.tapY,v.targetEl)?(v.latched=!0,v.lastTapAt=t,Ds=t+220,!0):((!v||t-v.lastSeenAt>180)&&(Fs.delete(n.id),aa(null)),!1)}aa(_.el,_.x,_.y);let O=v&&t-v.enterAt>=40&&_.key===v.targetKey&&N(v);if(!v||_.key!==v.targetKey&&!O)return v&&!v.latched&&t-v.enterAt>=45&&t-v.lastSeenAt<=120&&v.lastTipY-l>=.01&&Math.abs(o-v.lastTipX)<=.018&&t-v.lastTapAt>=360&&vr(v.tapX,v.tapY,v.targetEl)?(v.latched=!0,v.lastTapAt=t,Ds=t+220,!0):(v={targetKey:_.key,targetEl:_.el,tapX:_.x,tapY:_.y,wristX:i[0],wristY:i[1],maxIndexRatio:b,restTipY:l,restFingerLift:f,restHeadY:M,lastTipX:o,lastTipY:l,baseDist:S,basePalm:A,baseSpan:k,baseTipRelZ:T,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(v==null?void 0:v.lastTapAt)??-1e3},Fs.set(n.id,v),!1);_.key===v.targetKey&&(v.tapX=_.x,v.tapY=_.y,v.targetEl=_.el,v.wristX=i[0],v.wristY=i[1],v.lastSeenAt=t);let C=((z=(H=v.targetEl)==null?void 0:H.dataset)==null?void 0:z.id)==="browser"||((Q=(W=v.targetEl)==null?void 0:W.dataset)==null?void 0:Q.spatialBuiltin)==="browser"||((ie=(te=v.targetEl)==null?void 0:te.dataset)==null?void 0:ie.app)==="browser";if(C&&!v.holdMenuOpened&&t-v.enterAt>=2e3)return v.holdMenuOpened=!0,v.pendingBrowserTap=!1,v.latched=!0,v.lastTapAt=t,Ll((($=(G=v.targetEl)==null?void 0:G.dataset)==null?void 0:$.id)==="browser"?"dock":"spatial"),Ds=t+220,!0;if(t-v.enterAt<40)return v.restTipY=Math.max(v.restTipY,l),v.restFingerLift=Math.min(v.restFingerLift,f),v.restHeadY=Math.min(v.restHeadY,M),v.maxIndexRatio=Math.max(v.maxIndexRatio||b,b),v.lastTipX=o,v.lastTipY=l,S>0&&(v.baseDist=v.baseDist>0?v.baseDist*.5+S*.5:S),A>0&&(v.basePalm=v.basePalm>0?v.basePalm*.5+A*.5:A),k>0&&(v.baseSpan=v.baseSpan>0?v.baseSpan*.5+k*.5:k),v.baseTipRelZ=v.baseTipRelZ*.5+T*.5,!1;let R=N(v);if(v.lastTipX=o,v.lastTipY=l,!v.latched&&R&&t-v.lastTapAt>=360){if(C&&P(v)&&!(v.restTipY-l>=.0075||f-v.restFingerLift>=.0075))return v.pendingBrowserTap=!0,v.latched=!0,!1;if(vr(v.tapX,v.tapY,v.targetEl))return v.latched=!0,v.lastTapAt=t,Ds=t+220,!0}else if(v.latched){let Y=S>0&&v.baseDist>0?S-v.baseDist:0,ae=A>.012&&v.basePalm>.012?(v.basePalm-A)/v.basePalm:0,X=k>.02&&v.baseSpan>.02?KA(v,k):0;if(Y<=.008&&ae<=.022&&X<=.022&&Math.abs(v.restTipY-l)<=.006){if(v.pendingBrowserTap&&!v.holdMenuOpened&&t-v.lastTapAt>=360)return v.pendingBrowserTap=!1,v.latched=!1,v.lastTapAt=t,Ds=t+220,vr(v.tapX,v.tapY,v.targetEl),!0;v.latched=!1,v.restTipY=l,v.restFingerLift=f,v.restHeadY=M,v.maxIndexRatio=b,v.baseDist=S,v.basePalm=A,v.baseSpan=k,v.baseTipRelZ=T}}else v.restTipY=Math.max(v.restTipY,l),v.restFingerLift=Math.min(v.restFingerLift,f),v.restHeadY=Math.min(v.restHeadY,M),v.maxIndexRatio=Math.max(v.maxIndexRatio||b,b),S>0&&(v.baseDist=v.baseDist>0?Math.min(v.baseDist,v.baseDist*.92+S*.08):S),A>.012&&(v.basePalm=v.basePalm>0?Math.max(v.basePalm,v.basePalm*.92+A*.08):A),k>.02&&(v.baseSpan=v.baseSpan>0?Math.max(v.baseSpan,v.baseSpan*.92+k*.08):k);return!1}function KA(n,e){return(n.baseSpan-e)/n.baseSpan}var Qt=null,br=null,en=null,xr=null,pt={frames:0,armed:!1,lastArmedAt:0,lastTriggerAt:-2e3,blueUntil:0},mt={frames:0,armed:!1,lastArmedAt:0,lastTriggerAt:-2e3,blueUntil:0};function qf(n,e){if(!n||!n.points||n.points.length<63||n.palmToFace===!1||n.backOfHand===!0)return!1;if(n.palmToFace===!0)return!0;let t=n.points;return e?t[12]>t[15]+.015&&t[15]>t[51]?!1:t[12]<=t[15]+.015:t[12]<t[15]-.015&&t[15]<t[51]?!1:t[12]>=t[15]-.015}function Kd(n){return!!(n&&(n.left===!0||n.id==="left"))}function Il(n){return!!(n&&!n.left&&(!n.id||n.id==="right"))}function ev(n,e){if(!n||n.predicted||n.pinching||n.fist||(e?!Kd(n):!Il(n)))return!1;let t=n.points;if(!t||t.length<63||!qf(n,e))return!1;let i=(d,u)=>Math.hypot(t[d*3]-t[u*3],t[d*3+1]-t[u*3+1]);if(i(5,6)<.008||i(14,16)<.008||i(18,20)<.008)return!1;let s=Math.max(.042,i(0,9)),r=i(0,8)>i(0,6)*1.12&&i(0,8)>s*1.24,a=i(1,4)>i(1,2)*1.34&&i(4,8)>s*.42&&i(4,5)>s*.3,o=i(0,12)<i(0,10)*1.14||i(0,12)<i(0,8)*.82,l=i(0,16)<i(0,14)*1.14||i(0,16)<i(0,8)*.8,c=i(0,20)<i(0,18)*1.16||i(0,20)<i(0,8)*.78;return r&&a&&o&&l&&c}function JA(n){return ev(n,!0)}function QA(n){return ev(n,!1)}function My(n,e){if(!n||n.predicted||(e?!Kd(n):!Il(n)))return!1;let t=n.points;if(!t||t.length<63)return!1;let i=(d,u)=>Math.hypot(t[d*3]-t[u*3],t[d*3+1]-t[u*3+1]);if(i(5,6)<.008)return!1;let s=Math.max(.042,i(0,9)),r=i(0,12)<i(0,10)*1.16||i(0,12)<s*1.15,a=i(0,16)<i(0,14)*1.16||i(0,16)<s*1.12,o=i(0,20)<i(0,18)*1.18||i(0,20)<s*1.1;if(!(r&&a&&o))return!1;let l=n.pinching===!0||i(4,8)<s*.42,c=n.fist===!0||i(0,8)<i(0,6)*1.1;return l||c}function Sy(n,e,t=!1){var u,h;br&&(clearTimeout(br),br=null);let i=document.getElementById("hud")||document.body;(!Qt||!document.body.contains(Qt))&&(Qt=document.createElement("div"),Qt.id="gun-gesture-indicator",Qt.className="gun-logo-bubble",Qt.dataset.hand="right",Qt.innerHTML=`
      <div class="bolinha-card-inner">
        <img src="./icons/nextvr-bolinha-logo.png" alt="NextVR" class="gun-logo-img" draggable="false"/>
        <span class="bolinha-menu-lbl">Menu</span>
        <span class="bolinha-menu-bar"><span class="bolinha-menu-bar-fill"></span></span>
      </div>
    `,i.appendChild(Qt));let s=n.points,r=Number(e==null?void 0:e.scaleX)||1,a=Number(e==null?void 0:e.scaleY)||1,o=s&&s.length>=26?s[24]*.52+s[12]*.48:((u=n.palm)==null?void 0:u[0])??.55,l=s&&s.length>=26?(s[25]+s[13])*.5-.025:(((h=n.palm)==null?void 0:h[1])??.5)-.06,c=Math.max(.08,Math.min(.92,(o-.5)*r+.5)),d=Math.max(.08,Math.min(.9,(l-.5)*a+.5));Qt.style.left=`${(c*100).toFixed(1)}%`,Qt.style.top=`${(d*100).toFixed(1)}%`,Qt.hidden=!1,Qt.classList.toggle("fired",!!t),Qt.classList.toggle("gun-triggered",!!t),Qt.classList.toggle("bolinha-menu-card",!!t)}function Is(n=0){br&&(clearTimeout(br),br=null),Qt&&(n>0?br=setTimeout(()=>{var e,t;br=null,Qt==null||Qt.remove(),Qt=null,document.documentElement.dataset.handBlueOutline==="right"&&delete document.documentElement.dataset.handBlueOutline,(t=(e=ne).invalidate)==null||t.call(e)},n):(Qt.remove(),Qt=null,document.documentElement.dataset.handBlueOutline==="right"&&delete document.documentElement.dataset.handBlueOutline))}function Ay(n,e,t=!1){var u,h;xr&&(clearTimeout(xr),xr=null);let i=document.getElementById("hud")||document.body;(!en||!document.body.contains(en))&&(en=document.createElement("div"),en.id="left-gesture-indicator",en.className="gun-logo-bubble left-logo-bubble",en.dataset.hand="left",en.innerHTML=`
      <div class="bolinha-card-inner">
        <img src="./icons/nextvr-bolinha-left.png" alt="NextVR Control" class="gun-logo-img left-logo-img" draggable="false"/>
        <span class="bolinha-menu-lbl">Menu</span>
        <span class="bolinha-menu-bar"><span class="bolinha-menu-bar-fill"></span></span>
      </div>
    `,i.appendChild(en));let s=n.points,r=Number(e==null?void 0:e.scaleX)||1,a=Number(e==null?void 0:e.scaleY)||1,o=s&&s.length>=26?s[24]*.52+s[12]*.48:((u=n.palm)==null?void 0:u[0])??.35,l=s&&s.length>=26?(s[25]+s[13])*.5-.025:(((h=n.palm)==null?void 0:h[1])??.5)-.06,c=Math.max(.08,Math.min(.92,(o-.5)*r+.5)),d=Math.max(.08,Math.min(.9,(l-.5)*a+.5));en.style.left=`${(c*100).toFixed(1)}%`,en.style.top=`${(d*100).toFixed(1)}%`,en.hidden=!1,en.classList.toggle("fired",!!t),en.classList.toggle("gun-triggered",!!t),en.classList.toggle("bolinha-menu-card",!!t)}function Ns(n=0){xr&&(clearTimeout(xr),xr=null),en&&(n>0?xr=setTimeout(()=>{var e,t;xr=null,en==null||en.remove(),en=null,document.documentElement.dataset.handBlueOutline==="left"&&delete document.documentElement.dataset.handBlueOutline,(t=(e=ne).invalidate)==null||t.call(e)},n):(en.remove(),en=null,document.documentElement.dataset.handBlueOutline==="left"&&delete document.documentElement.dataset.handBlueOutline))}function Ey(n){var g,y,f,m;let e=he.find(x=>x.id==="left-quick-menu"&&!x.hidden);if(!e)return;e.shell.dataset.attachedHand="left";let t=(n==null?void 0:n.hands)||[],i=t.find(x=>Il(x))||t[0];if(!i)return;let s=i.points,r=Number(n==null?void 0:n.scaleX)||1,a=Number(n==null?void 0:n.scaleY)||1,o=s&&s.length>=26?s[24]*.45+s[12]*.35+s[0]*.2:((g=i.palm)==null?void 0:g[0])??.35,l=s&&s.length>=26?Math.min(s[25],s[13])-.06:(((y=i.palm)==null?void 0:y[1])??.5)-.08,c=Math.max(.14,Math.min(.86,(o-.5)*r+.5)),d=Math.max(.14,Math.min(.84,(l-.5)*a+.5)),u=$d(c,d),h=u.origin.clone().addScaledVector(u.direction,1.12);Mt.updateMatrixWorld(!0);let p=Mt.worldToLocal(h);e.target.copy(p),e.obj.position.copy(e.target),e.apply(),e.shell.dataset.attachedPos=`${p.x.toFixed(2)},${p.y.toFixed(2)},${p.z.toFixed(2)}`,(m=(f=ne).invalidate)==null||m.call(f)}function eE(n,e){var a,o,l,c,d,u,h,p,g,y,f,m,x,b,M,S,T,A,k,v,_,P,N,O;if(Ey(n),w.gunGesture===0)return pt.frames=0,pt.armed=!1,mt.frames=0,mt.armed=!1,Is(0),Ns(0),!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||he.some(C=>(C.id==="entry-menu"||C.id==="language")&&!C.hidden)||document.querySelector(".entry-menu-root")||ct.win||Ft.win||gn.start)return pt.frames=0,pt.armed=!1,mt.frames=0,mt.armed=!1,Is(0),Ns(0),!1;let i=!1,s=((n==null?void 0:n.hands)||[]).find(C=>Kd(C));if(!s)(!((a=n==null?void 0:n.hands)!=null&&a.length)||e-pt.lastArmedAt>240&&e>=pt.blueUntil)&&(pt.frames=0,pt.armed=!1,pt.blueUntil=0,Is(0));else if(!qf(s,!0))pt.frames=0,pt.armed=!1,pt.blueUntil=0,Is(0);else if(JA(s))pt.frames+=1,pt.frames>=2&&(pt.armed=!0,pt.lastArmedAt=e,Sy(s,n,!1),(l=(o=ne).invalidate)==null||l.call(o)),i=i||pt.armed;else if(pt.armed&&e-pt.lastArmedAt<=850&&e-pt.lastTriggerAt>=750&&My(s,!0)){let C=s.id||"left";pt.armed=!1,pt.frames=0,pt.lastTriggerAt=e,pt.blueUntil=e+750,document.documentElement.dataset.handBlueOutline="right",(d=(c=window.NativeXR)==null?void 0:c.handVisuals)==null||d.call(c,!!w.handDraw),Gi.delete(C),ua.add(C),n.consumed.add(C),gr(),Sy(s,n,!0),Is(420),(u=window.nextvrToggleSpatialAndDockFromGesture)==null||u.call(window),(p=(h=window.NativeXR)==null?void 0:h.click)==null||p.call(h),(y=(g=ne).invalidate)==null||y.call(g),(m=(f=ne).render)==null||m.call(f,Ee,fe),i=!0}else e-pt.lastArmedAt>300&&e>=pt.blueUntil&&(pt.frames=0,pt.armed=!1,Is(0));let r=((n==null?void 0:n.hands)||[]).find(C=>Il(C));if(!r)(!((x=n==null?void 0:n.hands)!=null&&x.length)||e-mt.lastArmedAt>240&&e>=mt.blueUntil)&&(mt.frames=0,mt.armed=!1,mt.blueUntil=0,Ns(0));else if(!qf(r,!1))mt.frames=0,mt.armed=!1,mt.blueUntil=0,Ns(0);else if(QA(r))mt.frames+=1,mt.frames>=2&&(mt.armed=!0,mt.lastArmedAt=e,Ay(r,n,!1),(M=(b=ne).invalidate)==null||M.call(b)),i=i||mt.armed;else if(mt.armed&&e-mt.lastArmedAt<=850&&e-mt.lastTriggerAt>=750&&My(r,!1)){let C=r.id||"right";mt.armed=!1,mt.frames=0,mt.lastTriggerAt=e,mt.blueUntil=e+750,document.documentElement.dataset.handBlueOutline="left",(T=(S=window.NativeXR)==null?void 0:S.handVisuals)==null||T.call(S,!!w.handDraw),Gi.delete(C),ua.add(C),n.consumed.add(C),gr(),Ay(r,n,!0),Ns(420),(A=window.nextvrToggleLeftHandQuickMenu)==null||A.call(window),Ey(n),(v=(k=window.NativeXR)==null?void 0:k.click)==null||v.call(k),(P=(_=ne).invalidate)==null||P.call(_),(O=(N=ne).render)==null||O.call(N,Ee,fe),i=!0}else e-mt.lastArmedAt>300&&e>=mt.blueUntil&&(mt.frames=0,mt.armed=!1,Ns(0));return i}var Gi=new Map;function tE(n){if(!n||n.predicted||n.pinching)return!1;if(n.fist===!0)return!0;let e=n.points;if(!e||e.length<63)return!1;let t=(o,l)=>Math.hypot(e[o*3]-e[l*3],e[o*3+1]-e[l*3+1]);if(t(5,6)<.008||t(14,16)<.008||t(18,20)<.008)return!1;let i=t(0,8)<t(0,6)*1.08,s=t(0,12)<t(0,10)*1.08,r=t(0,16)<t(0,14)*1.08,a=t(0,20)<t(0,18)*1.08;return i&&s&&r&&a}function nE(n,e){var r,a,o,l,c,d,u;if(w.gunGesture===0)return Gi.clear(),!1;let t=document.getElementById("gorilla-overlay");if(t&&t.style.display&&t.style.display!=="none"||he.some(h=>(h.id==="entry-menu"||h.id==="language")&&!h.hidden)||document.querySelector(".entry-menu-root")||Ft.win||gn.start)return Gi.clear(),!1;let i=(n==null?void 0:n.hands)||[],s=new Set;for(let h of i){if(!h)continue;let p=h.id||(h.left?"left":"right");s.add(p);let g=tE(h),y=Fd(h,n,!0),f=Gi.get(p);if(g){if(!f||!f.active)f={active:!0,startAt:e,lastSeenAt:e,startX:y.x,startY:y.y,latched:!1},Gi.set(p,f);else if(f.lastSeenAt=e,Math.hypot(y.x-f.startX,y.y-f.startY)>.12&&(f.startAt=e,f.startX=y.x,f.startY=y.y),!f.latched&&e-f.startAt>=2e3)return f.latched=!0,Is(0),Ns(0),ct.win&&ct.source==="fist"&&os(),gr(),(r=window.nextvrOpenFistQuickMenu)==null||r.call(window),(o=(a=window.NativeXR)==null?void 0:a.click)==null||o.call(a),(c=(l=ne).invalidate)==null||c.call(l),(u=(d=ne).render)==null||u.call(d,Ee,fe),!0}else f&&(f.latched||e<f.lastSeenAt||e-f.lastSeenAt>260)&&Gi.delete(p)}for(let[h,p]of Gi.entries())!s.has(h)&&(p.latched||e<p.lastSeenAt||e-p.lastSeenAt>260)&&Gi.delete(h);return!1}var An=null,Of=null;function iE(n="env",e=""){var s,r;let t=document.getElementById("hud")||document.body;(!An||!document.body.contains(An))&&(An=document.createElement("div"),An.id="vr-circle-loader",An.className="vr-circle-loader",An.dataset.circleLoader="1",An.hidden=!0,An.innerHTML=`
      <div class="vr-circle-ring-wrap">
        <svg viewBox="0 0 84 84" class="vr-circle-ring-svg">
          <circle cx="42" cy="42" r="34" class="vr-circle-track"/>
          <circle cx="42" cy="42" r="34" class="vr-circle-progress"/>
        </svg>
        <div class="vr-circle-label"></div>
      </div>
    `,t.appendChild(An)),An.dataset.kind=n;let i=An.querySelector(".vr-circle-label");i&&(i.textContent=n==="env"?`Carregando ambiente${e?" \xB7 "+e:""}\u2026`:`Abrindo ${e||"app"}\u2026`),An.hidden=!1,An.classList.remove("active"),An.offsetWidth,An.classList.add("active"),(r=(s=ne).invalidate)==null||r.call(s),Of&&clearTimeout(Of),Of=setTimeout(()=>{var a,o;An&&(An.hidden=!0,An.classList.remove("active"),(o=(a=ne).invalidate)==null||o.call(a))},620)}window.nextvrShowCircleLoader=iE;function Ty(n=!1,e=Us){let t=yt;t!=null&&t.down&&(ls({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(ua.add(t.id),e.consumed.add(t.id))),yt=null}ze("phonehands",n=>{var l,c;Us=n;let e=new Set(n.hands.map(d=>d.id));n.hands.length||aa(null);for(let d of kd.keys())e.has(d)||kd.delete(d);for(let d of Fs.keys())e.has(d)||Fs.delete(d);for(let d of ua){let u=n.hands.find(h=>h.id===d);!u||!u.pinching?ua.delete(d):n.consumed.add(d)}if(ct.win&&ct.source==="fist"){let d=n.hands.find(u=>u.id===ct.hand);if(!d||!d.fist||!he.includes(ct.win)||(l=ct.win)!=null&&l.hidden)os();else{n.consumed.add(d.id);let u=Fd(d,n,!0);$f(u.x,u.y)}}let t=performance.now();if(eE(n,t),nE(n,t),!document.documentElement.classList.contains("xr-on")&&!he.some(d=>d.id==="entry-menu"&&!d.hidden))if(ct.win||Ft.win||gn.start||vt.classList.contains("grab-armed")||yt)Od.reset();else{let d=(n.hands||[]).filter(p=>p.pinching&&!p.predicted),u=Dd(d),h=Od.update(t,{left:u,right:u});if(h.opened){Od.reset(),gr(),cn=null,ht=null,Ci=-1,os(),Ar(),zs();for(let p of d)ua.add(p.id),n.consumed.add(p.id);Hi()}else u&&h.progress>.15&&(gr(),cn=null,ht=null,Ci=-1)}else Od.reset();if(!(ct.win&&ct.source==="fist")){let d=n.hands.find(u=>!u.fist);if(d){let u=Fd(d,n),h=xy($d(u.x,u.y));if(h){let{local:p,scale:g}=Wf(h.win,h.point),y=h.win;(Math.abs(p.x)*g.x>y.w*g.x/2-.06||Math.abs(p.y)*g.y>y.h*g.y/2-.06)&&(bl=h.win,Df=t)}}}for(let d of he)(d!==bl||t-Df>by)&&d.shell.classList.remove("phone-grab-hover");bl&&t-Df<=by?bl.shell.classList.add("phone-grab-hover"):bl=null;for(let d of n.hands){let u=kd.get(d.id)||!1;if(kd.set(d.id,d.fist),!ct.win&&!Ft.win&&d.fist&&!u){let h=Fd(d,n,!0),p=xy($d(h.x,h.y));p&&(((c=be.hand)==null?void 0:c.id)===d.id&&gr(),Xf(p.win,h.x,h.y,"fist",d.id)&&n.consumed.add(d.id))}}let i=null;for(let d of n.hands){if(n.consumed.has(d.id)||!d.head||d.head.length!==63)continue;if(Array.isArray(d.aim)&&d.aim.length>=2){let h=sa(d.aim);if(Hs(h.x,h.y))continue}let u=new D().fromArray(d.head,24);if(!(u.length()>.7)){u.applyMatrix4(fe.matrixWorld);for(let h of he){if(h.hidden||h.id==="spatial-launcher")continue;let p=Wf(h,u),g=(yt==null?void 0:yt.win)===h&&yt.id===d.id,y=g?.08:.02,f=g?.26:.11;p.d>f||p.d<-.12||Math.abs(p.local.x)*p.scale.x>h.w*p.scale.x/2+y||Math.abs(p.local.y)*p.scale.y>h.h*p.scale.y/2+y||(!i||g||!i.current&&Math.abs(p.d)<Math.abs(i.d))&&(i={...p,id:d.id,win:h,point:u,current:g})}}}let s=()=>{if(!(ct.win||Ft.win||gn.start||vt.classList.contains("grab-armed")))for(let d of n.hands)n.consumed.has(d.id)||ZA(d,n,t)};if(!i&&yt&&e.has(yt.id)&&he.includes(yt.win)&&!yt.win.hidden&&t-yt.lastSeen<=qA&&(i={...yt,current:!0,held:!0}),!i){Ty(!e.has(yt==null?void 0:yt.id),n),s();return}i.current?(yt.d+=(i.d-yt.d)*.45,yt.u+=(i.u-yt.u)*.45,yt.v+=(i.v-yt.v)*.45,i.held||(yt.lastSeen=t)):(Ty(!1,n),yt={...i,down:!1,previousD:i.d,lastSeen:t});let r=yt,a=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,o={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&a&&r.d<=.012&&r.previousD>.012?(be.down&&gr(),tn(r.win),ls(o,0),r.down=!0):r.down&&(r.d>=.035||!a)?(ls(o,1),r.down=!1,n.hands.some(d=>d.id===r.id&&d.pinching)&&(ua.add(r.id),n.consumed.add(r.id))):r.down&&ls(o,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var Ry=0,Cy="";ul((n,e)=>{var a,o,l,c;if(!ge||e-Ry<16)return;Ry=e;let t=Us,i=[],s=w.fingerTouch!==0;for(let d of t.hands){let u=Fs.get(d.id),h=!!(u!=null&&u.targetEl),p=Kd(d),g=Il(d),y=!!(p&&(pt.armed&&Qt&&!Qt.hidden||e<pt.blueUntil)||g&&(mt.armed&&en&&!en.hidden||e<mt.blueUntil));if((yt==null?void 0:yt.id)===d.id&&yt.down){let T=yt,A=new D((T.u-.5)*T.win.w,(.5-T.v)*T.win.h,0).applyMatrix4(T.win.obj.matrixWorld);i.push({id:d.id,end:fe.worldToLocal(A).toArray(),direct:!0,touching:!0,fingerHover:!0,blueOutline:y,down:T.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(d.id)||t.blockFar){i.push({id:d.id,hidden:!0,blueOutline:y});continue}let f=((a=be.hand)==null?void 0:a.id)===d.id?Cd(e):sa(d.aim),m=$d(f.x,f.y),x=he.filter(T=>!T.hidden).flatMap(T=>[T.resizeHit,T.grab,T.hit]);qi&&(Ii.hidden||x.push(ss),x.push(Wi,Pi)),Un&&rt&&!Pl&&x.push(Un);let b=m.intersectObjects(x,!1)[0],M=((o=be.hand)==null?void 0:o.id)===d.id&&be.down||e<Ds,S=h||M||!!b||(yt==null?void 0:yt.id)===d.id;i.push({id:d.id,...b?{end:b.point.toArray()}:{},down:M,touching:S,fingerHover:h,blueOutline:y,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==Cy&&(Cy=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var tv={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function nv(n){return tv[n]||tv.landscape}function iv(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return nv(n==null?void 0:n.shape)}function sE(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function Nl(n){let e=sE(iv(n));return{w:e.w+2,h:e.h+116}}var rE=400,cv=3;function np(n,e){if(e!=null&&e.shape)return e.shape;let t=dn.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var Lt={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:cv,sdk:0,recents:[],library:0,launch:null},dn={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},vi=new Map,tp=new Set,sv=0,rv="";var ip=n=>Lt.sessions.find(e=>e.pkg===n)||null,aE=()=>Lt.sessions.filter(n=>n.alive),oE=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Gs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{et(U("appCommandFailed"))}}function lE(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Lt.sessions=Array.isArray(e.sessions)?e.sessions:[],Lt.shizuku=e.shizuku||Lt.shizuku,Lt.input=e.input||Lt.input,Lt.capacity=e.capacity||cv,Lt.recents=Array.isArray(e.recents)?e.recents:[],Lt.sdk=e.sdk||Lt.sdk,Lt.launch=e.launch||null,Lt.diagnostics=e.diagnostics||Lt.diagnostics,e.icons!=null&&e.icons!==dn.icons&&(dn.icons=e.icons,dn.loaded=!1),cE(),Ae("appsState"))}function cE(){var e,t,i,s;let n=new Set;for(let r of Lt.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){av(r.pkg,!0);continue}n.add(r.pkg),vi.has(r.pkg)?dv(r):dE(r)}for(let r of[...vi.keys()])n.has(r)||av(r,!0);(t=(e=ne).invalidate)==null||t.call(e),(s=(i=ne).render)==null||s.call(i,Ee,fe),Qd(!0)}function dE(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?U("appMirrorBadge"):U("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,p,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=p,y.setAttribute("aria-label",p),y.innerHTML=ee(g),y.onclick=()=>Gs({cmd:"key",pkg:n.pkg,key:h}),y},a=document.createElement("button");a.className="app-key",a.title=U("appKeyboard"),a.dataset.act="keys",a.innerHTML=ee("keyboard"),a.onclick=()=>mE(n.pkg);let o=document.createElement("button");o.className="app-key",o.dataset.act="rotate",o.title=U("appRotate"),o.setAttribute("aria-label",U("appRotate")),o.innerHTML=ee("rotate"),o.onclick=()=>fE(n.pkg),t.append(i,s,r("back",U("appBack"),"back"),r("home",U("appHome"),"top"),r("recents",U("appRecents"),"appGrid"),a,o);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=np(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let d=Nl(n),u=nn({id:oE(n.pkg),title:n.title,node:e,w:d.w,h:d.h});vi.set(n.pkg,{win:u,surface:l,status:c,badge:i,session:n}),dv(n)}function dv(n){var r,a;let e=vi.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?U("appMirrorBadge"):U("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:U("appStarting"),creating:U("appStarting"),launching:U("appStarting"),running:"",failed:n.error?hE(n):U("appFailed")};n.mode==="display"&&((r=Lt.shizuku)!=null&&r.binding||!((a=Lt.shizuku)!=null&&a.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=U("appWaitingService"),i.creating=U("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=U("appMirrorStarting"),i.creating=U("appMirrorStarting"),i.launching=U("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&uE.has(n.error))){let o=document.createElement("button");o.className="app-state-btn",o.textContent=U("appOpenOnPhone"),o.onclick=()=>Gs({cmd:"phone",pkg:n.pkg}),e.status.appendChild(o)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var uE=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function hE(n){let e={shizuku_unavailable:U("appNeedShizuku"),shizuku_denied:U("appShizukuDenied"),shizuku_blocked:U("appShizukuBlocked"),display_refused:U("appDisplayRefused"),display_failed:U("appDisplayFailed"),no_launcher_activity:U("appNoLauncher"),consent_denied:U("appConsentDenied"),mirror_stopped:U("appMirrorStopped"),mirror_failed:U("appMirrorFailed"),mirror_refused:U("appMirrorFailed"),projection_failed:U("appMirrorFailed"),display_empty:U("appDisplayEmpty"),app_not_running:U("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?U("appSurfaceFailed"):e[t]||`${U("appFailed")}: ${t}`}function av(n,e){let t=vi.get(n);t&&(vi.delete(n),e&&tp.add(n),ft(t.win),tp.delete(n))}ze("wins",()=>{for(let n of[...vi.keys()]){let e=vi.get(n);tp.has(n)||he.includes(e.win)||(vi.delete(n),Gs({cmd:"close",pkg:n}))}Ae("appsState")});function Jd(n){n&&Gs({cmd:"open",pkg:n,shape:np(n,ip(n))})}function fE(n){var a;let e=vi.get(n),t=ip(n),s=((e==null?void 0:e.surface.dataset.shape)||np(n,t))==="portrait"?"landscape":"portrait",r=Nl({shape:s,display:(t==null?void 0:t.display)||((a=e==null?void 0:e.session)==null?void 0:a.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),Gs({cmd:"shape",pkg:n,shape:s}),Qd(!0)}function ov(){Gs({cmd:"shizuku"})}function pE(){dn.loaded=!1,Gs({cmd:"refresh"})}function mE(n){gi(!0,{nativeId:"app:"+n})}function sp(n){var e,t;if(dn.loaded&&!n)return dn;dn.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,dn.query,dn.showSystem),s=JSON.parse(i||'{"apps":[]}');dn.apps=Array.isArray(s.apps)?s.apps:[],dn.shown=s.shown||dn.apps.length,dn.total=s.total||dn.apps.length,dn.icons=s.icons||dn.icons}catch{dn.apps=[]}return Ae("appsState"),dn}function Qd(n){let e=[];for(let[i,s]of vi)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===rv||(rv=t,Gs({cmd:"sync",windows:e}))}function gE(){sv||(sv=setInterval(()=>{vi.size&&Qd(!1)},rE))}ze("wins",()=>Qd(!0));var lv={install:()=>U("shizukuInstall"),start:()=>U("shizukuStart"),update:()=>U("shizukuUpdate"),ask:()=>U("shizukuAsk"),denied:()=>U("shizukuDenied"),rebind:()=>U("shizukuRebind"),ready:()=>U("shizukuReady"),unknown:()=>U("shizukuUnknown")},yE=new Set(["hosted","permission","capture"]);function vE(){let n=Lt.shizuku||{};return yE.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function uv(){var d;let n=Lt.shizuku||{},e=vE(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>U("routeHosted"),permission:()=>U("routePermission"),capture:()=>U("routeCapture")};s.textContent=(r[e]||r.capture)();let a=document.createElement("small");if(a.textContent=(lv[n.state]||lv.unknown)(),s.appendChild(a),e==="capture"&&!((d=Lt.input)!=null&&d.accessibility)){let u=document.createElement("small");u.textContent=U("appCaptureInput"),s.appendChild(u)}else if(n.detail){let u=document.createElement("small");u.textContent=n.detail,s.appendChild(u)}t.append(i,s);let o=document.createElement("button");o.className="az-btn",n.ask?(o.textContent=U("shizukuGrant"),o.onclick=()=>ov()):(o.textContent=U("shizukuRecheck"),o.onclick=()=>{pE(),ov()}),t.appendChild(o);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=U("appSelfTest"),l.onclick=async()=>{var u;l.disabled=!0;try{await Gs({cmd:"selftest"});let h=(u=Lt.diagnostics)==null?void 0:u.selfTest;h&&et(h.ok?U("appSelfTestOk"):U("appSelfTestFailed"))}catch{et(U("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=U("appDiagnostics"),c.onclick=()=>{let u=t.querySelector(".az-caps");if(u){u.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=bE(),h.onclick=()=>xE(h.textContent),t.appendChild(h)},t.appendChild(c),t}function bE(){var i;let n=Lt.shizuku||{},e=Lt.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||Lt.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...Lt.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=Lt.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||Lt.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function xE(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&et(U("appDiagnosticsCopied"));return}catch{}}var us=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function rp(n){let e=ip(n.pkg),t=`<span class="nm">${us((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${us(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${us(e.state==="suspended"?U("appMinimized"):U("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${us(U("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${us(n.pkg)}" data-session="${e?us(e.state):""}" data-pkg="${us(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${us(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${us(U("androidApps"))}">${ee("device")}</span>`+r+s+`</span><span class="lib-label">${us(n.label||n.pkg)}</span></button>`}function eu(n){let e=vi.get(n);e&&tn(e.win)}function hv(){return aE().length}function fv(){return dn.apps}function pv(){ge&&(window.nextvrApps=lE,gE(),ze("lang",()=>{dn.loaded=!1,Ae("appsState")}))}var iu="nextvr-xr-game",Dl="nextvr-xr-menu",Bt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},Rr=[],_E=null,lp=!1,gv=()=>Bt,yv=()=>Rr,vv=()=>Bt.hosting,kl=()=>Bt.runtime==="ready",bv=()=>Bt.handMode,wE=()=>{var n;return((n=Bt.game)==null?void 0:n.package)||null};function Xs(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function mv(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(Bt,e),nu=null,Bt.hosting&&((t=Bt.game)!=null&&t.package)?AE(Bt.game):EE(),Ae("xr",{...Bt,games:Rr}))}function ME(n){let e;try{e=JSON.parse(n)}catch{e=null}Rr=Array.isArray(e==null?void 0:e.games)?e.games:[],_E=(e==null?void 0:e.problem)||null,lp=!0,Ae("xr",{...Bt,games:Rr})}function xv(){var n,e;if(!(!ge||window.nextvrXr)){window.nextvrXr=mv,window.nextvrXrLibrary=ME;try{mv(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}ap(),ze("lang",()=>{ap(),Ae("xr",{...Bt,games:Rr})})}}function ap(){Xs({cmd:"library"})}function _v(){lp=!1,Xs({cmd:"refresh"}),ap()}function cp(n){!n||Bt.hosting||Xs({cmd:"open",package:n})}function dp(){Bt.hosting&&Xs({cmd:"close"})}function SE(){Bt.hosting&&Xs({cmd:"minimize"})}function wv(){Bt.hosting&&Xs({cmd:"restore"})}function up(){Xs({cmd:"runtime"})}function Mv(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}Bt.handMode=e,Ae("xr",{...Bt,games:Rr})}function hp(){Xs({cmd:"selftest"})}function fp(){return Rr.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function Sv(n){let e=n.game,t=`<span class="nm">${Ws(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=wE()===e.package?`<span class="lib-open">${Ws(U("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Ws(e.describe||U("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Ws(e.package)}" aria-label="${Ws(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Ws(U("xrTitle"))}">${ee("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Ws(e.label||e.package)}</span></button>`}var Ws=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Av(){if(kl()||!lp||!Rr.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=Bt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=Bt.runtimeBundled?U("xrMissing"):U("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=Bt.summary||Bt.problem||U("xrSummaryMissing"),t.appendChild(i),n.append(e,t),Bt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=U("xrInstall"),r.onclick=()=>{up(),et(U("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=U("xrSelfTest"),s.onclick=()=>hp(),n.appendChild(s),n}var qs=!1,op=null;function AE(n){var d;if(qs)return;op={windows:he.map(u=>({win:u,hidden:u.hidden})),dockHidden:Yd(),keyboard:jy(),focus:((d=Cl())==null?void 0:d.id)||null};for(let u of he)u.setHidden(!0);Tr(!0),sn(!0),document.documentElement.classList.add("game-on","xr-on"),qs=!0,pp.reset(),tu(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=U("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=Bt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let a=document.createElement("span");a.className="app-bar-spacer";let o=document.createElement("button");o.className="app-key",o.title=U("appMinimize"),o.setAttribute("aria-label",U("appMinimize")),o.innerHTML=ee("chevronDown"),o.onclick=()=>SE();let l=document.createElement("button");l.className="app-key",l.title=U("close"),l.setAttribute("aria-label",U("close")),l.innerHTML=ee("x"),l.onclick=()=>dp(),t.append(i,a,o,l),e.append(t,s);let c=Nl({shape:"landscape",display:{w:r.w,h:r.h}});nn({id:iu,title:n.label||n.package,node:e,w:c.w,h:c.h})}function EE(){if(!qs)return;qs=!1,nu=null;for(let e of[...he])(e.id===iu||e.id===Dl)&&ft(e);document.documentElement.classList.remove("game-on","xr-on");let n=op;if(op=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...he])!e.has(i)&&!i.onboarding&&ft(i);sn(n.dockHidden);for(let{win:i,hidden:s}of n.windows)he.includes(i)&&i.setHidden(s);n.keyboard&&Tr(!1);let t=he.find(i=>i.id===n.focus);t&&tn(t)}pp.reset(),tu(0)}ze("wins",()=>{!qs||!window.nextvrXr||he.some(n=>n.id===iu)||dp()});var pp=new vo,TE=()=>qs&&he.some(n=>n.id===Dl);function RE(){if(!qs||he.some(i=>i.id===Dl)||!Bt.game)return;let n=Bt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Ws(n.label||n.package)}</div>
    <p class="gm-sub">${Ws(U("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${U("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${ee("settings")}<span>${U("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${U("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(CE(),s.dataset.act==="exit"?dp():s.dataset.act==="settings"&&Ae("game:settings"))});let t=nn({id:Dl,title:U("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:$t,z:-.55}});t==null||t.setCurve(0)}function CE(){let n=he.find(e=>e.id===Dl);n&&ft(n)}function tu(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var nu=null;function LE(){let n=qs?zy(be.x,be.y):null,e=!!n&&n.win.id!==iu&&!n.win.onboarding;e!==nu&&(nu=e,Xs({cmd:"hands-ui",blocked:e}))}ze("phonehands",n=>{if(!qs)return;LE();let e=(n.hands||[]).filter(s=>s.pinching),t=Dd(e),i=pp.update(performance.now(),{left:t,right:t});tu(i.progress),i.opened&&RE(),i.closed&&!TE()&&tu(0)});var Ol=null,Jn=null,ru="",su=0,Cr=new Set,PE='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function IE(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=Cl();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=he.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function Ev(){let n=IE();return n?[...n.querySelectorAll(PE)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function $s(n){Jn&&Jn!==n&&Jn.classList.remove("joycon-selected"),Jn=n||null,Jn&&(Jn.classList.add("joycon-selected"),Jn.focus({preventScroll:!0}))}function mp(n){let e=Ev();if(!e.length){$s(null);return}if(e.indexOf(Jn)<0){$s(e[0]);return}let i=Jn.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,a=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],o=null,l=1/0;for(let c of e){if(c===Jn)continue;let d=c.getBoundingClientRect(),u=d.left+d.width/2-s,h=d.top+d.height/2-r,p=u*a[0]+h*a[1];if(p<=2)continue;let g=Math.abs(u*a[1]-h*a[0]),y=p+g*1.8;y<l&&(o=c,l=y)}o||(o=n==="left"||n==="up"?e.at(-1):e[0]),$s(o)}function NE(){let n=Ev();n.length&&((!Jn||!n.includes(Jn))&&$s(n[0]),Jn==null||Jn.click())}function DE(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),$s(null);return}let e=Cl(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),$s(null);return}if(e&&!e.onboarding){ft(e),$s(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function kE(){if(Ol){let n=Ol;Ol=null;for(let{win:e,hidden:t}of n.windows)he.includes(e)&&e.setHidden(t);sn(n.dockHidden),qt(n.dockVisible),Tr(n.keyboardHidden),$s(null);return}Ol={windows:he.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:Yd(),dockVisible:qy(),keyboardHidden:Zy()};for(let{win:n}of Ol.windows)n.setHidden(!0);Tr(!0),sn(!0),$s(null)}function OE(n,e){if(n==="home"){!Cr.has(n)&&e===0&&kE(),Cr.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!Cr.has(n)||e>0)&&mp(n),Cr.add(n);return}Cr.has(n)||(Cr.add(n),n==="accept"?NE():n==="back"&&DE())}function UE(n,e,t=0){var i;if(n==="plus"&&e&&window.__gorillaStereoOverlay){(i=window.__gorillaExit)==null||i.call(window);return}if(window.__gorillaStereoOverlay&&typeof window.__gorillaJoyconKey=="function"){window.__gorillaJoyconKey(n,e,t);return}e?OE(n,t):Cr.delete(n)}function FE(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function BE(n,e,t=0,i=0,s=0,r=0){if(window.__gorillaStereoOverlay&&typeof window.__gorillaJoyconAxes=="function"){window.__gorillaJoyconAxes(n,e,t,i,s,r);return}let a=FE(n,e);if(!a){ru="",su=0;return}let o=performance.now();a!==ru?(ru=a,mp(a),su=o+320):o>=su&&(mp(a),su=o+170)}function Tv(){window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=UE,window.__nextvrJoyconAxes=BE,ge&&(window.addEventListener("blur",()=>{Cr.clear(),ru=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";et(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)})))}var Rv="v2.0.0";var gp="ENTRE EM OUTRO MUNDO";var Cv=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),Lv=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),yp="NextVR \u2014 realidade aumentada",au=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),zE=[yp,...au].join(`

`);var HE=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,VE=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,Pv=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,Iv=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,GE=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,WE=[{id:"beat-vr",name:"Beat Saber",cat:"Modo VR Imediato \xB7 4.9 \u2605",bg:"#070814",img:"./beat-saber-logo.jpg"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"A\xE7\xE3o \xB7 Arena VR \xB7 4.8 \u2605",bg:"#0a1426",img:"./hyper-dash-logo.jpg"},{id:"roblox-vr",name:"Roblox",cat:"Ambiente Preto \xB7 4.8 \u2605",bg:"#090d16",img:"./roblox-logo.jpg"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos \xB7 4.9 \u2605",bg:"#000000",img:"./tiktok-logo.jpg"},{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0 \xB7 4.8 \u2605",bg:"#dc2626",img:"./icons/youtube.svg"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz \xB7 4.7 \u2605",bg:"#4f46e5",img:"./icons/discord.svg"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV \xB7 4.8 \u2605",bg:"#991b1b"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio \xB7 4.8 \u2605",bg:"#059669",img:"./icons/spotify.svg"}],qE=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Ni(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var vp={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},tt=n=>(vp[vf()]||vp.pt)[n]||vp.pt[n]||n;function bp(n){return tt(n?"handDrawn":"handInvisible")}function xp({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",a=6,o=0,l=null,c=null,d=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],u=N=>N<17?d[0]:N<35?d[1]:N<55?d[2]:N<75?d[3]:N<92?d[4]:d[5],h=()=>{l&&(clearInterval(l),l=null)},p=()=>{let N=s.querySelector("[data-entry-countdown]"),O=s.querySelector("[data-entry-load-pct]"),C=s.querySelector("[data-entry-load-bar]"),R=s.querySelector("[data-entry-load-status]"),F=s.querySelector("[data-entry-countdown-sub]");N&&(N.textContent=String(a)),O&&(O.textContent=`${o}%`),C&&(C.style.width=`${o}%`),R&&(R.textContent=u(o)),F&&(F.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...`)},g=()=>{h(),a=6,o=0,r="loading",_();let N=6e3,O=performance.now();l=setInterval(()=>{let C=Math.max(0,performance.now()-O);if(o=Math.min(100,Math.round(C/N*100)),a=Math.max(1,Math.ceil((N-C)/1e3)),C>=N){o=100,p(),h(),n==null||n();return}p()},60)},y=()=>{let N=t==null?void 0:t();if(N!=null&&N.clockText)return N.clockText;if(N!=null&&N.time&&N.time!=="--:--")return N.time;let O=new Date;return`${String(O.getHours()).padStart(2,"0")}:${String(O.getMinutes()).padStart(2,"0")}`},f=()=>{var O,C;try{let R=(C=(O=window.NativeXR)==null?void 0:O.battery)==null?void 0:C.call(O);if(R&&R!=="null"){let F=typeof R=="string"?JSON.parse(R):R;if(F&&typeof F.level=="number"){let H=Math.round(Math.max(0,Math.min(1,F.level))*100);return{percent:H,charging:!!F.charging,text:`${H}%${F.charging?" \u26A1":""}`}}}}catch{}let N=t==null?void 0:t();if(N&&typeof N.batteryLevel=="number"){let R=Math.round(Math.max(0,Math.min(1,N.batteryLevel))*100);return{percent:R,charging:!!N.charging,text:`${R}%${N.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},m=()=>{var N,O;w.handsOn=1,w.handDraw=w.handDraw?0:1,Fe(w),(O=(N=window.NativeXR)==null?void 0:N.handVisuals)==null||O.call(N,!!w.handDraw),Ae("handDraw",!!w.handDraw)},x=()=>{let N=bp(w.handDraw);return`
      <nav class="entry-cards-row" role="navigation" aria-label="Menu principal NextVR">
        <button type="button" class="entry-card entry-card--primary" data-entry-act="start">
          <span class="entry-card-body">
            <span class="entry-card-title">${tt("start")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="settings"?"entry-card--active":""}" data-entry-act="settings">
          <span class="entry-card-body">
            <span class="entry-card-title">${tt("settings")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${w.handDraw?"entry-card--hand-drawn":"entry-card--hand-invisible"}" data-entry-act="hand-style" data-hand-draw="${w.handDraw?"1":"0"}">
          <span class="entry-card-body">
            <span class="entry-card-title">${tt("handStyle")}</span>
            <span class="entry-card-state" data-hand-style-label>${N}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="collaborators"?"entry-card--active":""}" data-entry-act="collaborators">
          <span class="entry-card-body">
            <span class="entry-card-title">${tt("collaborators")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="about"?"entry-card--active":""}" data-entry-act="about">
          <span class="entry-card-body">
            <span class="entry-card-title">${tt("about")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>
      </nav>`},b=()=>`
      <div class="entry-brand-stage" data-entry-panel="brand">
        <div class="entry-brand-grid-bg" aria-hidden="true"></div>
        <div class="entry-updates-feed" data-entry-updates role="region" aria-label="Atualiza\xE7\xF5es NextVR">
          <div class="entry-updates-head">
            <span class="entry-updates-dot" aria-hidden="true"></span>
            <span class="entry-updates-title">ATUALIZA\xC7\xD5ES \xB7 NOTIFICA\xC7\xD5ES</span>
            <span class="entry-updates-badge">v2.0.0</span>
          </div>
          <div class="entry-updates-list">
            <article class="entry-notif-card" data-entry-notif="sixdof">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">AGORA \xB7 6DOF AR</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">6DoF Estabilizado &amp; Verso Branco Transl\xFAcido</strong>
              <p class="entry-notif-desc">Corrigido o avan\xE7o sozinho; travamento horizontal no ch\xE3o e verso da Dock branco transl\xFAcido ao passar por tr\xE1s.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="browser-hold">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">NOVO \xB7 NAVEGADOR (2S)</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">+ Nova Guia &amp; + Guia An\xF4nima</strong>
              <p class="entry-notif-desc">Segure por 2 segundos no app do Navegador (com Hand Tracking de Pin\xE7a ou Toque) para escolher + Nova Guia ou + Guia An\xF4nima.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="dock-pinch">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">CORRE\xC7\xC3O \xB7 HAND TRACKING</span>
                <span class="entry-notif-time">Ativo</span>
              </div>
              <strong class="entry-notif-heading">Pin\xE7a Calibrada Perto da Dock (em Bar)</strong>
              <p class="entry-notif-desc">Corrigida a sele\xE7\xE3o de apps com pin\xE7a ao aproximar-se da Dock em barra, com prioridade sobre janelas de fundo.</p>
            </article>
            <article class="entry-notif-card" data-entry-notif="spatial-library">
              <div class="entry-notif-top">
                <span class="entry-notif-tag">GORILLA TAG VR \xB7 UPDATE</span>
                <span class="entry-notif-time">Novo</span>
              </div>
              <strong class="entry-notif-heading">Contador de Moedas no Bra\xE7o Direito &amp; M\xE3os Corrigidas</strong>
              <p class="entry-notif-desc">Nova logo amarela do Gorilla Tag, contador de moedas 3D no bra\xE7o direito, m\xE3o direita/esquerda corrigidas e sa\xEDda autom\xE1tica desativada.</p>
            </article>
          </div>
        </div>
        <div class="entry-brand-store-dock">
          <div class="entry-brand-store-info" data-entry-act="store" role="button" tabindex="0">
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-brand-store-thumb" draggable="false" />
            <div class="entry-brand-store-meta">
              <span class="entry-brand-store-tag">STORE \xB7 EM DESTAQUE</span>
              <strong class="entry-brand-store-name">Gorilla Tag VR</strong>
            </div>
          </div>
          <div class="entry-brand-store-actions">
            <button type="button" class="entry-btn entry-btn--primary entry-brand-store-open" data-entry-act="store">
              ${Iv}<span>${tt("store")}</span>
            </button>
          </div>
        </div>
      </div>`,M=()=>{let N=!!w.gorillaInstalled,C=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:N?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`:'<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>';return`
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <h2 class="entry-subpanel-title">${tt("storeTitle")}</h2>
            <div style="display:inline-flex;gap:6px;flex-wrap:wrap">
              <span class="entry-store-card-pill" style="background:rgba(255,255,255,.16);color:#fff">P\xE1gina inicial</span>
              <span class="entry-store-card-pill">Jogos</span>
              <span class="entry-store-card-pill">Apps</span>
              <span class="entry-store-card-pill">Lista de desejos</span>
            </div>
          </div>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${tt("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${tt("startVr")}</button>
          </div>
        </div>

        <div class="entry-store-body">
          <div class="entry-store-featured" data-entry-store-gorilla>
            <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="entry-store-gorilla-logo" draggable="false" />
            <div class="entry-store-featured-info">
              <div class="entry-store-kicker">DESTAQUE VR \xB7 LENTES GOOGLE CARDBOARD 2015</div>
              <div class="entry-store-title">Gorilla Tag</div>
              <div class="entry-store-desc">Mapa da floresta 3D com locomo\xE7\xE3o f\xEDsica pelas m\xE3os e bra\xE7os de gorila em Hand Tracking. Ao baixar, vai para a Biblioteca de Apps.</div>
              <div class="entry-store-actions">
                ${C}
              </div>
            </div>
          </div>

          <div class="entry-store-section-label">NAVEGAR POR TUDO \xB7 JOGOS &amp; APPS NEXTVR</div>
          <div class="entry-store-grid">
            ${WE.map(R=>{let F=R.img?`<img src="${R.img}" alt="${Ni(R.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block">`:R.name.slice(0,2).toUpperCase();return`
              <div class="entry-store-card" data-entry-store-app="${R.id}">
                <div class="entry-store-card-dot" style="background:${R.bg};overflow:hidden;padding:0">${F}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Ni(R.name)}</div>
                  <div class="entry-store-card-cat">${Ni(R.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Gr\xE1tis</span>
              </div>`}).join("")}
          </div>
        </div>
      </div>`},S=()=>{let N=[{id:"passthrough",label:tt("envAr")},{id:"sunset",label:tt("envSunset")},{id:"night",label:tt("envNight")},{id:"dark",label:"Dark Panor\xE2mico"}],O=[{id:"auto",label:tt("qAuto")},{id:"high",label:tt("qHigh")},{id:"medium",label:tt("qMed")},{id:"low",label:tt("qLow")}],C=w.entryEnvChosen&&w.env&&w.env!=="passthrough"?w.env:"passthrough",R=w.quality==="med"?"medium":w.quality||"auto",F=!!w.wideCamera,H=!!w.spatialLauncher,z=w.dockSnapSlot!==0,W=w.lang||"pt",Q=Number.isFinite(w.mediaVolume)?w.mediaVolume:70,te=Number.isFinite(w.brightness)?w.brightness:75;return`
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${tt("basicSettings")}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${tt("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${tt("startVr")}</button>
          </div>
        </div>
        <div class="entry-bento-grid">
          <div class="entry-bento-cell entry-bento-cell--idioma">
            <div class="entry-bento-title">${tt("langCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${W==="pt"?"on":""}" data-entry-lang="pt">PT</button>
              <button type="button" class="entry-seg-btn ${W==="en"?"on":""}" data-entry-lang="en">EN</button>
              <button type="button" class="entry-seg-btn ${W==="es"?"on":""}" data-entry-lang="es">ES</button>
              <button type="button" class="entry-seg-btn ${W==="ja"?"on":""}" data-entry-lang="ja">JA</button>
              <button type="button" class="entry-seg-btn ${W==="ru"?"on":""}" data-entry-lang="ru">RU</button>
              <button type="button" class="entry-seg-btn ${W==="de"?"on":""}" data-entry-lang="de">DE</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--spatial">
            <div class="entry-bento-title">${tt("spatialCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${H?"on":""}" data-entry-spatial="1">${tt("on")}</button>
              <button type="button" class="entry-seg-btn ${H?"":"on"}" data-entry-spatial="0">${tt("dock")}</button>
              <button type="button" class="entry-seg-btn ${z?"on":""}" data-entry-dock-snap="${z?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${tt(z?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${tt("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${O.map(ie=>`<button type="button" class="entry-seg-btn ${R===ie.id?"on":""}" data-entry-quality="${ie.id}">${ie.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${tt("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${F?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${F?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${w.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${w.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${tt("volumeCell")}</span>
              <span class="entry-bento-val" data-vol-val>${Q}%</span>
            </div>
            <input type="range" min="0" max="100" value="${Q}" class="entry-slider" data-entry-volume />
          </div>

          <div class="entry-bento-cell entry-bento-cell--brilho">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${tt("brightnessCell")}</span>
              <span class="entry-bento-val" data-bri-val>${te}%</span>
            </div>
            <input type="range" min="10" max="100" value="${te}" class="entry-slider" data-entry-brightness />
          </div>

          <div class="entry-bento-cell entry-bento-cell--hand">
            <div class="entry-bento-title">${tt("handCell")}</div>
            <div class="entry-hand-col">
              <button type="button" class="entry-seg-btn ${w.handDraw?"on":""}" data-entry-hand-draw="1">${tt("handDrawn")}</button>
              <button type="button" class="entry-seg-btn ${w.handDraw?"":"on"}" data-entry-hand-draw="0">${tt("handInvisible")}</button>
              <button type="button" class="entry-seg-btn ${w.fingerTouch!==0?"on":""}" data-entry-finger-touch="${w.fingerTouch!==0?"1":"0"}" title="Toque com o indicador indo \xE0 frente sem precisar pin\xE7ar">${w.fingerTouch!==0?tt("fingerTouchOn"):tt("fingerTouchOff")}</button>
              <button type="button" class="entry-seg-btn ${w.pinchOnApp!==0?"on":""}" data-entry-pinch-app="${w.pinchOnApp!==0?"1":"0"}" title="Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio">Pin\xE7a no App (Sem Raio): ${w.pinchOnApp!==0?"ON":"OFF"}</button>
              <button type="button" class="entry-seg-btn ${w.gunGesture!==0?"on":""}" data-entry-gun-gesture="${w.gunGesture!==0?"1":"0"}" title="Gesto na m\xE3o direita (bolinha com contorno azul) e fechar a m\xE3o por 2s"><span>Bolinha M\xE3o Dir. / Soco: ${w.gunGesture!==0?"ON":"OFF"}</span></button>
              <button type="button" class="entry-seg-btn ${w.mrDim?"on":""}" data-entry-mr-dim="${w.mrDim?"1":"0"}" title="Escurecer o ambiente real (MR) em volta dos apps flutuantes">Ambiente MR: ${w.mrDim?"Escuro":"Normal"}</button>
              <button type="button" class="entry-seg-btn ${w.showFps?"on":""}" data-entry-fps="1">FPS: ${w.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${tt("envTitle")}</div>
              ${N.map(ie=>`<button type="button" class="entry-seg-btn ${C===ie.id?"on":""}" data-entry-env="${ie.id}">${ie.label}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>`},T=()=>`
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${tt("collaborators")}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${tt("back")}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${Cv.map(N=>{let O=Lv[N]||"",C=N==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${C?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${N}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${C?"entry-collab-name--blue":""}" ${C?'data-collab-blue="1"':""}>${N}</span>
              <span class="entry-collab-verified" data-collab-verified="${N}" title="Verificado">${GE}</span>
              ${O?`<span class="entry-collab-bio" data-collab-bio="${N}">${Ni(O)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,A=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${yp}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${au.map((N,O)=>`
          <p class="entry-about-p ${O===au.length-1?"entry-about-p--closing":""}">${N}</p>
        `).join("")}
      </div>
    </div>`,k=()=>{let N=w.profileName||"",O=w.profileAvatar||"";return`
      <div class="entry-subpanel entry-subpanel--profile" data-entry-panel="profile">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">Login / Perfil NextVR</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
            <button type="button" class="entry-btn entry-btn--primary" data-profile-save>Salvar Login</button>
          </div>
        </div>
        <div class="entry-login-body">
          <div class="entry-login-left">
            <div class="entry-login-avatar-preview" data-profile-avatar-preview title="Toque para escolher foto da galeria">
              ${O?`<img src="${Ni(O)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:Pv}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Ni(N)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${qE.map(R=>`
                  <button type="button" class="entry-login-preset ${O===R.url?"on":""}" data-profile-preset="${Ni(R.url)}" title="${Ni(R.label)}">
                    <img src="${Ni(R.url)}" alt="${Ni(R.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},v=N=>{let O=u(o);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${gp}</div>

        <header class="entry-hud-top">
          <div class="entry-hud-top-left" aria-hidden="true">
            <div class="entry-hud-sq-box"><div class="entry-hud-sq-inner"></div></div>
            <div class="entry-hud-lines">
              <span class="entry-hud-line-short"></span>
              <span class="entry-hud-line-long"></span>
            </div>
            <div class="entry-hud-vdiv"></div>
          </div>

          <div class="entry-hud-top-right">
            <div class="entry-hud-vdiv" aria-hidden="true"></div>
            <div class="entry-hud-rect" aria-hidden="true">
              <span>NEXTVR</span>
              <b data-entry-battery-top>${N.text}</b>
            </div>
            <button type="button" class="entry-hud-rect entry-hud-rect--btn" data-entry-cancel-countdown title="Cancelar">
              CANCELAR
            </button>
          </div>
        </header>

        <div class="entry-hud-center">
          <div class="entry-hud-frame-wrap">
            <svg class="entry-hud-frame-svg" viewBox="0 0 920 400" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="entryHudGlow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="274,14 646,14 628,32 292,32" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <polygon points="292,368 628,368 646,386 274,386" fill="#00f2fe" filter="url(#entryHudGlow)" />
              <path d="M 68,14 L 256,14 L 284,42 L 636,42 L 664,14 L 852,14 L 876,66 L 868,78 Q 906,200 868,322 L 876,334 L 852,386 L 664,386 L 636,358 L 284,358 L 256,386 L 68,386 L 44,334 L 52,322 Q 14,200 52,78 L 44,66 Z"
                fill="rgba(4, 34, 58, 0.34)"
                stroke="#38bdf8"
                stroke-width="2.5"
                stroke-linejoin="round" />
            </svg>

            <div class="entry-hud-frame-content">
              <div class="entry-hud-brand">NextVR</div>
              <div class="entry-hud-pct-row">
                <span class="entry-hud-pct" data-entry-load-pct>${o}%</span>
                <span class="entry-hud-sec">(<b data-entry-countdown>${a}</b>s)</span>
              </div>
              <div class="entry-hud-status" data-entry-load-status>${O}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${a}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${o}%"></div>
          </div>
        </footer>
      </div>`},_=()=>{let N=f();if(r==="loading"){s.innerHTML=v(N);let X=s.querySelector("[data-entry-cancel-countdown]");X&&(X.onclick=()=>{h(),r="home",_()});return}let O=r==="settings"?S():r==="collaborators"?T():r==="about"?A():r==="profile"?k():r==="store"?M():b(),C=w.profileName?Ni(w.profileName):"NextVR (Login)",R=w.profileAvatar?`<img src="${Ni(w.profileAvatar)}" alt="" class="entry-profile-q-img" />`:Pv;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${gp}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${Iv}
            <span>${tt("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${N.percent}%"></i></span>
            <b data-entry-battery-top>${N.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${VE}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${x()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${R}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${C}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${bp(w.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${N.text}</span></div>
            </div>
            <div class="entry-profile-ver">${Rv}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${O}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${HE}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach(X=>{X.onclick=()=>{i?g():n==null||n()}});let F=s.querySelector("[data-entry-cancel-countdown]");F&&(F.onclick=()=>{h(),r="home",_()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(X=>{X.onclick=()=>{h(),r=r==="settings"?"home":"settings",_()}}),s.querySelectorAll('[data-entry-act="store"]').forEach(X=>{X.onclick=se=>{se.stopPropagation(),h(),r=r==="store"?"home":"store",_()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach(X=>{X.onclick=()=>{m(),_()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach(X=>{X.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",_()}}),s.querySelectorAll('[data-entry-act="about"]').forEach(X=>{X.onclick=()=>{h(),r=r==="about"?"home":"about",_()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach(X=>{X.onclick=se=>{se.stopPropagation(),h(),r=r==="profile"?"home":"profile",_()}}),s.querySelectorAll('[data-entry-act="back"]').forEach(X=>{X.onclick=()=>{h(),r="home",_()}});let H=s.querySelector("[data-entry-install-gorilla]");H&&(H.onclick=()=>{if(w.gorillaInstalled=1,Fe(w),Ae("gorilla-installed",!0),window.__gorillaFastTest){c=null,_();return}c=45,_(),setTimeout(()=>{c=90,r==="store"&&_()},110),setTimeout(()=>{c=null,r==="store"&&_()},230)});let z=s.querySelector("[data-entry-play-gorilla]");z&&(z.onclick=()=>{w.gorillaInstalled=1,Fe(w),Ae("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let W=s.querySelector("[data-profile-name-input]");W&&(W.oninput=()=>{w.profileName=W.value.trim(),Fe(w);let X=s.querySelector("[data-profile-display-name]");X&&(X.textContent=w.profileName||"NextVR (Login)")});let Q=s.querySelector("[data-profile-save]");Q&&(Q.onclick=()=>{W&&(w.profileName=W.value.trim()),Fe(w),Ae("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),r="home",_()}),s.querySelectorAll("[data-profile-preset]").forEach(X=>{X.onclick=()=>{W&&(w.profileName=W.value.trim()),w.profileAvatar=X.dataset.profilePreset,Fe(w),Ae("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),_()}});let te=s.querySelector("[data-profile-upload]"),ie=s.querySelector("[data-profile-avatar-preview]"),G=s.querySelector("[data-profile-file]"),$=()=>{var X;W&&(w.profileName=W.value.trim(),Fe(w)),typeof((X=window.NativeXR)==null?void 0:X.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():G&&G.click()};te&&(te.onclick=$),ie&&(ie.onclick=$),G&&(G.onchange=()=>{var pe;let X=(pe=G.files)==null?void 0:pe[0];if(!X)return;let se=new FileReader;se.onload=()=>{let oe=new Image;oe.onload=()=>{let we=document.createElement("canvas");we.width=160,we.height=160;let q=we.getContext("2d"),Ht=Math.min(oe.width,oe.height),Pe=(oe.width-Ht)/2,He=(oe.height-Ht)/2;q.drawImage(oe,Pe,He,Ht,Ht,0,0,160,160),W&&(w.profileName=W.value.trim()),w.profileAvatar=we.toDataURL("image/jpeg",.86),Fe(w),Ae("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),_()},oe.src=String(se.result)},se.readAsDataURL(X)}),s.querySelectorAll("[data-entry-hand-draw]").forEach(X=>{X.onclick=()=>{var se,pe;w.handsOn=1,w.handDraw=X.dataset.entryHandDraw==="1"?1:0,Fe(w),(pe=(se=window.NativeXR)==null?void 0:se.handVisuals)==null||pe.call(se,!!w.handDraw),Ae("handDraw",!!w.handDraw),_()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach(X=>{X.onclick=()=>{var se,pe;w.fingerTouch=w.fingerTouch===0?1:0,Fe(w),(pe=(se=window.NativeXR)==null?void 0:se.setFingerTouch)==null||pe.call(se,!!w.fingerTouch),Ae("fingerTouch",!!w.fingerTouch),_()}}),s.querySelectorAll("[data-entry-pinch-app]").forEach(X=>{X.onclick=()=>{w.pinchOnApp=w.pinchOnApp===0?1:0,Fe(w),Ae("pinchOnApp",!!w.pinchOnApp),_()}}),s.querySelectorAll("[data-entry-gun-gesture]").forEach(X=>{X.onclick=()=>{w.gunGesture=w.gunGesture===0?1:0,Fe(w),Ae("gunGesture",!!w.gunGesture),_()}}),s.querySelectorAll("[data-entry-env]").forEach(X=>{X.onclick=()=>{let se=X.dataset.entryEnv;w.entryEnvChosen=1,se==="passthrough"?(w.env="passthrough",Fe(w),zi(!0)):Ti(se),_()}}),s.querySelectorAll("[data-entry-quality]").forEach(X=>{X.onclick=()=>{var se,pe;w.quality=X.dataset.entryQuality==="med"?"medium":X.dataset.entryQuality,Fe(w),Ae("quality",w.quality),(pe=(se=window.NativeXR)==null?void 0:se.setQuality)==null||pe.call(se,w.quality),_()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach(X=>{X.onclick=()=>{w.dockSnapSlot=w.dockSnapSlot===0?1:0,Fe(w),Ae("dockSnapSlot",!!w.dockSnapSlot),_()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach(X=>{X.onclick=()=>{var se,pe;w.wideCamera=X.dataset.entryWideCam==="1"?1:0,Fe(w),(pe=(se=window.NativeXR)==null?void 0:se.wideCamera)==null||pe.call(se,!!w.wideCamera),Ae("wideCamera",!!w.wideCamera),_()}}),s.querySelectorAll("[data-entry-dof]").forEach(X=>{X.onclick=()=>{var pe,oe;let se=X.dataset.entryDof==="6dof";w.sixdof=se?1:0,Fe(w),se||Jt.reset(),(oe=(pe=window.NativeXR)==null?void 0:pe.setSixDofEnabled)==null||oe.call(pe,se),Ae("sixdof",se),_()}}),s.querySelectorAll("[data-entry-spatial]").forEach(X=>{X.onclick=()=>{w.spatialLauncher=X.dataset.entrySpatial==="1"?1:0,w.spatialLauncher&&(w.env="passthrough",zi(!0)),Fe(w),Ae("spatialLauncher",!!w.spatialLauncher),_()}}),s.querySelectorAll("[data-entry-lang]").forEach(X=>{X.onclick=()=>{na(X.dataset.entryLang),_()}}),s.querySelectorAll("[data-entry-fps]").forEach(X=>{X.onclick=()=>{w.showFps=w.showFps?0:1,Fe(w),Ae("fps-toggle",w.showFps),_()}}),s.querySelectorAll("[data-entry-mr-dim]").forEach(X=>{X.onclick=()=>{var se,pe;w.mrDim=w.mrDim?0:1,Fe(w),(pe=(se=window.NativeXR)==null?void 0:se.setMrDim)==null||pe.call(se,!!w.mrDim),Ae("mr-dim",w.mrDim),_()}});let Y=s.querySelector("[data-entry-volume]");Y&&(Y.oninput=()=>{var pe,oe;let X=Number(Y.value);w.mediaVolume=X,Fe(w),ge&&((oe=(pe=window.NativeXR)==null?void 0:pe.setMediaVolumePercent)==null||oe.call(pe,X));let se=s.querySelector("[data-vol-val]");se&&(se.textContent=`${X}%`)});let ae=s.querySelector("[data-entry-brightness]");ae&&(ae.oninput=()=>{var pe,oe;let X=Number(ae.value);w.brightness=X,Fe(w),ge&&((oe=(pe=window.NativeXR)==null?void 0:pe.setBrightnessPercent)==null||oe.call(pe,X));let se=s.querySelector("[data-bri-val]");se&&(se.textContent=`${X}%`)})};return _(),s.resetToHome=()=>{h(),r="home",_()},ze("handDraw",()=>{let N=bp(w.handDraw),O=s.querySelector("[data-hand-style-label]"),C=s.querySelector("[data-profile-hand]"),R=s.querySelector('[data-entry-act="hand-style"]');O&&(O.textContent=N),C&&(C.textContent=N),R&&(R.dataset.handDraw=w.handDraw?"1":"0",R.classList.toggle("entry-card--hand-drawn",!!w.handDraw),R.classList.toggle("entry-card--hand-invisible",!w.handDraw))}),ze("device-status",()=>{let N=s.querySelector("[data-entry-clock]");N&&(N.textContent=y());let O=f(),C=s.querySelector("[data-entry-battery]"),R=s.querySelector("[data-entry-battery-top]"),F=s.querySelector("[data-entry-battery-fill]");C&&(C.textContent=O.text),R&&(R.textContent=O.text),F&&(F.style.width=`${O.percent}%`)}),window.nextvrProfilePhoto=N=>{N&&(w.profileAvatar=String(N),Fe(w),Ae("profile-updated",{name:w.profileName,avatar:w.profileAvatar}),_())},s}function _p(n,e){if(e===M0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===nl||e===od){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===nl)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var ou=class extends Ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rp(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Fp(t)}),this.register(function(t){return new Bp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Ip(t)}),this.register(function(t){return new Np(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new Hp(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=fr.extractUrlBase(e);a=fr.resolveURL(c,this.path)}else a=fr.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uv){try{a[ut.KHR_BINARY_GLTF]=new Vp(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new jp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){let u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){let u=r.extensionsUsed[d],h=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:a[u]=new Ep;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[u]=new Gp(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[u]=new Wp;break;case ut.KHR_MESH_QUANTIZATION:a[u]=new qp;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function XE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ap=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,d=new ke(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],bn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sd(d),c.distance=u;break;case"spot":c=new id(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},Ep=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return pn}extendParams(e,t,i){let s=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],bn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Zt))}return Promise.all(s)}},Tp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Rp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}},Cp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Lp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],bn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Zt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Pp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Ip=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(o[0],o[1],o[2],bn),Promise.all(r)}},Np=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Dp=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(o[0],o[1],o[2],bn),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Zt)),Promise.all(r)}},kp=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Op=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ai}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Up=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Fp=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bp=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zp=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,d=s.count,u=s.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,h,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(p),d,u,h,s.mode,s.filter),p})})}else return null}},Hp=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let d=c.pop(),u=d.isGroup?d.children:[d],h=c[0].count,p=[];for(let g of u){let y=new Ce,f=new D,m=new Ke,x=new D(1,1,1),b=new Yc(g.geometry,g.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),b.setMatrixAt(M,y.compose(f,m,x));for(let M in l)if(M==="_COLOR_0"){let S=l[M];b.instanceColor=new Jr(S.array,S.itemSize,S.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Gt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),p.push(b)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}},Uv="glTF",Ul=12,Nv={JSON:1313821514,BIN:5130562},Vp=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ul),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ul,r=new DataView(e,Ul),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Nv.JSON){let c=new Uint8Array(e,Ul+a,o);this.content=i.decode(c)}else if(l===Nv.BIN){let c=Ul+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let d in a){let u=$p[d]||d.toLowerCase();o[u]=a[d]}for(let d in e.attributes){let u=$p[d]||d.toLowerCase();if(a[d]!==void 0){let h=i.accessors[e.attributes[d]],p=So[h.componentType];c[u]=p.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,h){s.decodeDracoFile(d,function(p){for(let g in p.attributes){let y=p.attributes[g],f=l[g];f!==void 0&&(y.normalized=f)}u(p)},o,c,bn,h)})})}},Wp=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},qp=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},lu=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=s-t,u=(i-t)/d,h=u*u,p=h*u,g=e*c,y=g-c,f=-2*p+3*h,m=p-h,x=1-f,b=m-h+u;for(let M=0;M!==o;M++){let S=a[y+M+o],T=a[y+M+l]*d,A=a[g+M+o],k=a[g+M]*d;r[M]=x*S+b*T+f*A+m*k}return r}},$E=new Ke,Xp=class extends lu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return $E.fromArray(r).normalize().toArray(r),r}},Di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},So={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dv={9728:vn,9729:fn,9984:Lc,9985:nf,9986:Fo,9987:or},kv={33071:fi,33648:Go,10497:Yr},wp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$p={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YE={CUBICSPLINE:void 0,LINEAR:jr,STEP:Qa},Mp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ro({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),n.DefaultMaterial}function ga(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Pr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,d=e.length;c<d;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){let u=e[c];if(i){let h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(h)}if(s){let h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(h)}if(r){let h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let d=c[0],u=c[1],h=c[2];return i&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function KE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JE(n){let e,t=n.extensions&&n.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sp(t.attributes):e=n.indices+":"+Sp(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Sp(n.targets[i]);return e}function Sp(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Yp(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var eT=new Ce,jp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new oo(this.options.manager):this.textureLoader=new rd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ga(r,o,s),Pr(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,d]of a.children.entries())r(d,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(fr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=wp[s.type],o=So[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ut(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=wp[s.type],c=So[s.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,h=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,f;if(p&&p!==u){let m=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(x);b||(y=new c(o,m*p,s.count*p/d),b=new Yo(y,p/d),t.cache.add(x,b)),f=new jo(b,l,h%p/d,g)}else o===null?y=new c(s.count*l):y=new c(o,h,s.count*l),f=new Ut(y,l,g);if(s.sparse!==void 0){let m=wp.SCALAR,x=So[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,S=new x(a[1],b,s.sparse.count*m),T=new c(a[2],M,s.sparse.count*l);o!==null&&(f=new Ut(f.array.slice(),f.itemSize,f.normalized));for(let A=0,k=S.length;A<k;A++){let v=S[A];if(f.setX(v,T[A*l]),l>=2&&f.setY(v,T[A*l+1]),l>=3&&f.setZ(v,T[A*l+2]),l>=4&&f.setW(v,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return d.magFilter=Dv[h.magFilter]||fn,d.minFilter=Dv[h.minFilter]||or,d.wrapS=kv[h.wrapS]||Yr,d.wrapT=kv[h.wrapT]||Yr,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let h=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(l).then(function(u){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let f=new Tn(y);f.needsUpdate=!0,h(f)}),t.load(fr.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||QE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Jo,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Ko,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ro}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let u=s[ut.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let h=u.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],bn),o.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Zt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=qn);let d=r.alphaMode||Mp.OPAQUE;if(d===Mp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Mp.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==pn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==pn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==pn){let u=r.emissiveFactor;o.emissive=new ke().setRGB(u[0],u[1],u[2],bn)}return r.emissiveTexture!==void 0&&a!==pn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Zt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Pr(u,r),t.associations.set(u,{materials:e}),r.extensions&&ga(s,u,r),u})}createUniqueName(e){let t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ov(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],d=JE(c),u=s[d];if(u)a.push(u.promise);else{let h;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Ov(new $n,c,t),s[d]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let d=a[l].material===void 0?jE(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let p=0,g=d.length;p<g;p++){let y=d[p],f=a[p],m,x=c[p];if(f.mode===Di.TRIANGLES||f.mode===Di.TRIANGLE_STRIP||f.mode===Di.TRIANGLE_FAN||f.mode===void 0)m=r.isSkinnedMesh===!0?new Xc(y,x):new Rt(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===Di.TRIANGLE_STRIP?m.geometry=_p(m.geometry,od):f.mode===Di.TRIANGLE_FAN&&(m.geometry=_p(m.geometry,nl));else if(f.mode===Di.LINES)m=new jc(y,x);else if(f.mode===Di.LINE_STRIP)m=new so(y,x);else if(f.mode===Di.LINE_LOOP)m=new Zc(y,x);else if(f.mode===Di.POINTS)m=new Kc(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&KE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pr(m,r),f.extensions&&ga(s,m,f),t.assignFinalMaterial(m),u.push(m)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ga(s,u[0],r),u[0];let h=new Nn;r.extensions&&ga(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(il.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new no(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,d=a.length;c<d;c++){let u=a[c];if(u){o.push(u);let h=new Ce;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $c(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let u=0,h=s.channels.length;u<h;u++){let p=s.channels[u],g=s.samplers[p.sampler],y=p.target,f=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){let h=u[0],p=u[1],g=u[2],y=u[3],f=u[4],m=[];for(let x=0,b=h.length;x<b;x++){let M=h[x],S=p[x],T=g[x],A=y[x],k=f[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let v=i._createAnimationTracks(M,S,T,A,k);if(v)for(let _=0;_<v.length;_++)m.push(v[_])}return new td(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,d=o.length;c<d;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let d=c[0],u=c[1],h=c[2];h!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(h,eT)});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new Zo:c.length>1?d=new Nn:c.length===1?d=c[0]:d=new Gt,d!==c[0])for(let u=0,h=c.length;u<h;u++)d.add(c[u]);if(r.name&&(d.userData.name=r.name,d.name=a),Pr(d,r),r.extensions&&ga(i,d,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Nn;i.name&&(r.name=s.createUniqueName(i.name)),Pr(r,i),i.extensions&&ga(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,u=l.length;d<u;d++)r.add(l[d]);let c=d=>{let u=new Map;for(let[h,p]of s.associations)(h instanceof ii||h instanceof Tn)&&u.set(h,p);return d.traverse(h=>{let p=s.associations.get(h);p!=null&&u.set(h,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Lr[r.path]===Lr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Lr[r.path]){case Lr.weights:c=Rs;break;case Lr.rotation:c=es;break;case Lr.position:case Lr.scale:c=Cs;break;default:switch(i.itemSize){case 1:c=Rs;break;case 2:case 3:default:c=Cs;break}break}let d=s.interpolation!==void 0?YE[s.interpolation]:jr,u=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){let g=new c(l[h]+"."+Lr[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Yp(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof es?Xp:lu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tT(n,e,t){let i=e.attributes,s=new Si;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let d=Yp(So[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,d=r.length;c<d;c++){let u=r[c];if(u.POSITION!==void 0){let h=t.json.accessors[u.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let y=Yp(So[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new pi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Ov(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=$p[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return xt.workingColorSpace!==bn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Pr(n,e),tT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ZE(n,e.targets,t):n})}var fs=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),xa=[0,2,7],Kp=.55,cu=.14,Fv=11.4,nT=1.42,Ao=1.04,wa=!1,Dr=!1,bt=null,bi=null,Ys=null,ki=null,oi=null,En=null,zt=null,Vl=null,Gl=null,hs=null,Bv=1,du=!1,Fl=null,uu=0,hu=0,nm=0,Jp=[],Wl=[],Xt=()=>new D,It=Xt(),im=new D(xa[0],.9,xa[2]),fu=[],Fn=[null,null],Bl=[null,null],ql=[0,0],ya=[Xt(),Xt()],iT=[Xt(),Xt()],js=[null,null],_a=[!1,!1],zv=[Xt(),Xt()],Ir=null,me={active:!1,locked:!0,lx:0,ly:0,rx:0,ry:0,lt:0,rt:0,buttons:new Set,handX:[.32,.68],handY:[.58,.58],handS:[.11,.11],ori:[null,null],swingPhase:0,plusWasPressed:!1,lastInputAt:0};function sT(n,e,t=0){if(n==="plus"&&e){Xl();return}if(!wa&&!Dr)return;if(me.active=!0,me.locked=!0,me.lastInputAt=typeof performance<"u"?performance.now():Date.now(),e){if(me.buttons.add(n),n==="minus"&&t===0&&fe)nm=new ni().setFromQuaternion(fe.quaternion,"YXZ").y;else if((n==="accept"||n==="x"||n==="r1"||n==="l1")&&t===0&&zt){let r=new D(0,0,-1).applyQuaternion(zt.getWorldQuaternion(new Ke));r.y=0,r.lengthSq()>1e-4&&r.normalize(),It.x+=r.x*3.8,It.z+=r.z*3.8,It.y=Math.max(It.y,4.4),pu(1)}}else me.buttons.delete(n);let i=(me.buttons.has("right")?1:0)-(me.buttons.has("left")?1:0),s=(me.buttons.has("down")?1:0)-(me.buttons.has("up")?1:0);(i!==0||s!==0||!e&&["left","right","up","down"].includes(n))&&(me.lx=i,me.ly=s)}function rT(n=0,e=0,t=0,i=0,s=0,r=0){!wa&&!Dr||(me.active=!0,me.locked=!0,me.lx=Math.max(-1,Math.min(1,Number(n)||0)),me.ly=Math.max(-1,Math.min(1,Number(e)||0)),me.rx=Math.max(-1,Math.min(1,Number(t)||0)),me.ry=Math.max(-1,Math.min(1,Number(i)||0)),me.lt=Math.max(0,Math.min(1,Number(s)||0)),me.rt=Math.max(0,Math.min(1,Number(r)||0)),me.lastInputAt=typeof performance<"u"?performance.now():Date.now())}function aT(n){var u,h,p,g,y,f,m,x,b,M,S,T,A,k,v,_,P,N,O,C,R,F;if(typeof navigator>"u"||typeof navigator.getGamepads!="function")return;let e;try{e=navigator.getGamepads()}catch{return}if(!e)return;let t=!1,i=0,s=0,r=0,a=0,o=0,l=0,c=!1,d=!1;for(let H=0;H<e.length;H++){let z=e[H];if(!z||!z.connected)continue;t=!0;let W=String(z.id||"").toLowerCase(),Q=W.includes("joy-con (r)")||W.includes("joycon (r)"),te=((u=z.axes)==null?void 0:u[0])||0,ie=((h=z.axes)==null?void 0:h[1])||0,G=((p=z.axes)==null?void 0:p[2])||0,$=((g=z.axes)==null?void 0:g[3])||0;Q?(r=te,a=ie):(Math.abs(te)>Math.abs(i)&&(i=te),Math.abs(ie)>Math.abs(s)&&(s=ie),Math.abs(G)>Math.abs(r)&&(r=G),Math.abs($)>Math.abs(a)&&(a=$)),((f=(y=z.buttons)==null?void 0:y[6])!=null&&f.pressed||(((x=(m=z.buttons)==null?void 0:m[6])==null?void 0:x.value)||0)>.25)&&(o=Math.max(o,z.buttons[6].value||1)),((M=(b=z.buttons)==null?void 0:b[7])!=null&&M.pressed||(((T=(S=z.buttons)==null?void 0:S[7])==null?void 0:T.value)||0)>.25)&&(l=Math.max(l,z.buttons[7].value||1)),(k=(A=z.buttons)==null?void 0:A[9])!=null&&k.pressed&&(c=!0),((_=(v=z.buttons)==null?void 0:v[0])!=null&&_.pressed||(N=(P=z.buttons)==null?void 0:P[1])!=null&&N.pressed||(C=(O=z.buttons)==null?void 0:O[4])!=null&&C.pressed||(F=(R=z.buttons)==null?void 0:R[5])!=null&&F.pressed)&&(d=!0)}if(c&&!me.plusWasPressed){me.plusWasPressed=!0,Xl();return}c||(me.plusWasPressed=!1),t&&(me.active=!0,me.locked=!0,(Math.hypot(i,s)>.08||Math.hypot(r,a)>.08||o>.1||l>.1||d)&&(me.lx=i,me.ly=s,me.rx=r,me.ry=a,me.lt=o,me.rt=l,me.lastInputAt=n))}typeof window<"u"&&(window.__gorillaJoyconState=me,window.__gorillaJoyconKey=sT,window.__gorillaJoyconAxes=rT,window.addEventListener("keydown",n=>{!wa&&!Dr||(n.key==="+"||n.key==="="||n.code==="NumpadAdd")&&(n.preventDefault(),Xl())}));var Hv=[0,0],oT=0,gt={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Pt=[0,0,0],Xe={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function lT(n){let e=n.length/9|0;gt.T=n,gt.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let d=0;d<3;d++){let u=n[c+d];u<t[d]&&(t[d]=u),u>i[d]&&(i[d]=u)}gt.mn=t,gt.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/gt.cs)+1));let s=gt.d[0]*gt.d[1]*gt.d[2],r=new Int32Array(s+1),a=gt.cs,o=c=>{let d=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let u=0;u<3;u++)for(let h=0;h<3;h++){let p=n[c*9+u*3+h];p<d[h]&&(d[h]=p),p>d[h+3]&&(d[h+3]=p)}return[0,1,2].map(u=>[Math.floor((d[u]-t[u])/a),Math.floor((d[u+3]-t[u])/a)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let d=0;d<s;d++)r[d+1]+=r[d];gt.st=r.slice(),gt.id=new Int32Array(r[s]),l=r.slice()}for(let d=0;d<e;d++){let u=o(d);for(let h=u[2][0];h<=u[2][1];h++)for(let p=u[1][0];p<=u[1][1];p++)for(let g=u[0][0];g<=u[0][1];g++){let y=(h*gt.d[1]+p)*gt.d[0]+g;c===0?r[y+1]++:gt.id[l[y]++]=d}}}gt.seen=new Int32Array(e)}function cT(n,e,t,i,s,r,a,o,l,c,d,u){let h=a-i,p=o-s,g=l-r,y=c-i,f=d-s,m=u-r,x=n-i,b=e-s,M=t-r,S=h*x+p*b+g*M,T=y*x+f*b+m*M;if(S<=0&&T<=0){Pt[0]=i,Pt[1]=s,Pt[2]=r;return}let A=n-a,k=e-o,v=t-l,_=h*A+p*k+g*v,P=y*A+f*k+m*v;if(_>=0&&P<=_){Pt[0]=a,Pt[1]=o,Pt[2]=l;return}let N=S*P-_*T;if(N<=0&&S>=0&&_<=0){let G=S/(S-_);Pt[0]=i+G*h,Pt[1]=s+G*p,Pt[2]=r+G*g;return}let O=n-c,C=e-d,R=t-u,F=h*O+p*C+g*R,H=y*O+f*C+m*R;if(H>=0&&F<=H){Pt[0]=c,Pt[1]=d,Pt[2]=u;return}let z=F*T-S*H;if(z<=0&&T>=0&&H<=0){let G=T/(T-H);Pt[0]=i+G*y,Pt[1]=s+G*f,Pt[2]=r+G*m;return}let W=_*H-F*P;if(W<=0&&P-_>=0&&F-H>=0){let G=(P-_)/(P-_+(F-H));Pt[0]=a+G*(c-a),Pt[1]=o+G*(d-o),Pt[2]=l+G*(u-l);return}let Q=1/(W+z+N),te=z*Q,ie=N*Q;Pt[0]=i+h*te+y*ie,Pt[1]=s+p*te+f*ie,Pt[2]=r+g*te+m*ie}function sm(n,e,t,i){if(!gt.T)return!1;let s=gt.T,r=gt.cs,a=gt.mn,o=gt.d,l=i*i,c=!1,d=++gt.stamp,u=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-a[g])/r))),h=[0,1,2].map(g=>Math.min(o[g]-1,Math.floor(([n,e,t][g]+i-a[g])/r)));for(let g=u[2];g<=h[2];g++)for(let y=u[1];y<=h[1];y++)for(let f=u[0];f<=h[0];f++){let m=(g*o[1]+y)*o[0]+f;for(let x=gt.st[m],b=gt.st[m+1];x<b;x++){let M=gt.id[x];if(gt.seen[M]===d)continue;gt.seen[M]=d;let S=M*9;cT(n,e,t,s[S],s[S+1],s[S+2],s[S+3],s[S+4],s[S+5],s[S+6],s[S+7],s[S+8]);let T=n-Pt[0],A=e-Pt[1],k=t-Pt[2],v=T*T+A*A+k*k;if(v<l){l=v,c=!0,Xe.x=Pt[0],Xe.y=Pt[1],Xe.z=Pt[2];let _=s[S+3]-s[S],P=s[S+4]-s[S+1],N=s[S+5]-s[S+2],O=s[S+6]-s[S],C=s[S+7]-s[S+1],R=s[S+8]-s[S+2];Xe.fx=P*R-N*C,Xe.fy=N*O-_*R,Xe.fz=_*C-P*O;let F=Math.hypot(Xe.fx,Xe.fy,Xe.fz)||1;Xe.fx/=F,Xe.fy/=F,Xe.fz/=F}}}if(!c)return!1;let p=Math.sqrt(l);return Xe.d=p,p>1e-5?(Xe.nx=(n-Xe.x)/p,Xe.ny=(e-Xe.y)/p,Xe.nz=(t-Xe.z)/p):(Xe.nx=Xe.fx,Xe.ny=Xe.fy,Xe.nz=Xe.fz),!0}function Vv(n,e,t,i,s){if(!gt.T)return null;let r=gt.T,a=gt.cs,o=gt.mn,l=gt.d,c=Math.floor((n-o[0])/a),d=Math.floor((t-o[2])/a);if(c<0||d<0||c>=l[0]||d>=l[2])return null;let u=e,h=e+i*s,p=Math.floor((u-o[1])/a),g=Math.floor((h-o[1])/a),y=null;for(;i<0?p>=Math.max(g,0):p<=Math.min(g,l[1]-1);p+=i){if(p<0||p>=l[1])continue;let f=(d*l[1]+p)*l[0]+c;for(let m=gt.st[f],x=gt.st[f+1];m<x;m++){let b=gt.id[m]*9,M=r[b]-n,S=r[b+2]-t,T=r[b+3]-n,A=r[b+5]-t,k=r[b+6]-n,v=r[b+8]-t,_=(A-v)*(M-k)+(k-T)*(S-v);if(Math.abs(_)<1e-9)continue;let P=((A-v)*(0-k)+(k-T)*(0-v))/_,N=((v-S)*(0-k)+(M-k)*(0-v))/_,O=1-P-N;if(P<0||N<0||O<0)continue;let C=P*r[b+1]+N*r[b+4]+O*r[b+7];if(!((C-e)*i<=0||Math.abs(C-e)>s)&&(!y||Math.abs(C-e)<Math.abs(y.y-e))){let R=r[b+3]-r[b],F=r[b+4]-r[b+1],H=r[b+5]-r[b+2],z=r[b+6]-r[b],W=r[b+7]-r[b+1],Q=r[b+8]-r[b+2],te=H*z-R*Q,ie=Math.hypot(F*Q-H*W,te,R*W-F*z)||1;y={y:C,ny:te/ie}}}}return y}function dT(n,e,t,i){let s=(r,a)=>{let o=Vv(r,e+1.5,a,-1,8);if(!o)return null;let l=Math.abs(o.ny)>.6?o:null;if(!l)return null;let c=Vv(r,l.y+.05,a,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let d=l.y+i+.05;return sm(r,d,a,i-.02)?null:[r,d,a]};for(let r=0;r<=8;r++)for(let a=0;a<(r?16:1);a++){let o=a/16*6.2832,l=n+Math.cos(o)*r*.5,c=t+Math.sin(o)*r*.5,d=s(l,c);if(d)return d}return null}var uT=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new Ut(i,t.itemSize))}};function hT(n){let e=0,t=0;for(let d of n)e+=d.attributes.position.count,t+=d.index?d.index.count:d.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),a=new Uint32Array(t),o=0,l=0;for(let d of n){let u=d.attributes.position.count;if(i.set(d.attributes.position.array,o*3),s.set(d.attributes.normal.array,o*3),r.set(d.attributes.uv.array,o*2),d.index){let h=d.index.array;for(let p=0;p<h.length;p++)a[l++]=h[p]+o}else for(let h=0;h<u;h++)a[l++]=o+h;o+=u}let c=new $n;return c.setAttribute("position",new Ut(i,3)),c.setAttribute("normal",new Ut(s,3)),c.setAttribute("uv",new Ut(r,2)),c.setIndex(new Ut(a,1)),c}function Qp(n){return n?(n.generateMipmaps=!1,n.minFilter=fn,n.magFilter=fn,n.anisotropy=1,n):null}function fT(n){var o;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,a=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,d=l.geometry.clone();d.applyMatrix4(l.matrixWorld);let u=d.attributes.position,h=d.index,p=Math.floor((h?h.count:u.count)/3)*3;for(let f=0;f<p;f++){let m=h?h.getX(f):f;i[s++]=u.getX(m),i[s++]=u.getY(m),i[s++]=u.getZ(m)}d.attributes.normal||d.computeVertexNormals(),d.attributes.uv||d.setAttribute("uv",new Ut(new Float32Array(u.count*2),2));for(let f of Object.keys(d.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&d.deleteAttribute(f);["position","normal","uv"].forEach(f=>uT(d,f));let g=`${c.map?((o=c.map.source)==null?void 0:o.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=a.get(g);y||(y=new ao({map:Qp(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:Qp(c.emissiveMap)}),a.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(d),l.geometry.dispose()}for(let l of r.values()){let c=l.l,d=null;try{let h=hT(c);h.computeBoundingSphere(),d=new Rt(h,l.m)}catch{}(d?[d]:c.map(h=>new Rt(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,oi.add(h)}),d&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function pT(n){fu.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(R=>{R.isSkinnedMesh&&e.push(R)}),!e.length)return;let t=e.reduce((R,F)=>F.geometry.attributes.position.count>R.geometry.attributes.position.count?F:R);e.forEach(R=>{R!==t&&(R.visible=!1)});let i=t.skeleton.bones,s=R=>R.name.toLowerCase().replace(/[^a-z]/g,""),r=R=>i.find(F=>R.test(s(F))),a={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},o={};["r","l"].forEach(R=>{o[R]={pinky:r(new RegExp("^pinkyf?"+R+"$")),index:r(new RegExp("^pointerf?"+R+"$")),thumb:r(new RegExp("^thumb"+R+"$"))}});let l=new Set([a.ur,a.lr,a.hr,a.ul,a.ll,a.hl]);for(let R in o)for(let F in o[R])l.add(o[R][F]);let c=i.map(R=>l.has(R)),d=t.geometry,u=d.attributes.skinIndex,h=d.attributes.skinWeight,p=d.attributes.position.count,g=d.index,y=new Uint8Array(p);for(let R=0;R<p;R++){let F=0;for(let H=0;H<4;H++)c[u.getComponent(R,H)]&&(F+=h.getComponent(R,H));y[R]=F>.45?1:0}let f=[],m=g?g.count:p;for(let R=0;R<m;R+=3){let F=g?g.getX(R):R,H=g?g.getX(R+1):R+1,z=g?g.getX(R+2):R+2;y[F]&&y[H]&&y[z]&&f.push(F,H,z)}f.length>90&&(d.clearGroups(),d.setIndex(f));let x=Array.isArray(t.material)?t.material[0]:t.material;t.material=new ao({map:Qp(x.map),color:x.color?x.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let b=R=>R.getWorldPosition(Xt()),M=b(a.ur),S=b(a.ul),T=M.clone().sub(S).normalize(),A=b(a.head).sub(b(a.body)).normalize();A.addScaledVector(T,-A.dot(T)).normalize();let k=new D().crossVectors(T,A),v=new Ke().setFromRotationMatrix(new Ce().makeBasis(T,A,k)).invert(),_=M.distanceTo(b(a.lr))+b(a.lr).distanceTo(b(a.hr)),P=Ao/_,N=M.clone().add(S).multiplyScalar(.5),O={};["r","l"].forEach(R=>{let F={};for(let Q in o[R]){let te=o[R][Q];F[Q]=te?[{b:te,bind:te.quaternion.clone(),pos:te.getWorldPosition(Xt()),wq:te.getWorldQuaternion(new Ke),Al:Xt(),cur:0}]:[]}let H=R==="r"?a.hr:a.hl,z=H.getWorldPosition(Xt()),W=z.clone().sub(N).dot(T)>0?1:-1;O[R]={hb:H,hbBind:H.quaternion.clone(),hpos:z,hwq:H.getWorldQuaternion(new Ke),ch:F,nRest:T.clone().multiplyScalar(-W),qs:null}});function C(R,F){let H=R.nRest.clone().multiplyScalar(F),z=[R.ch.index[0],R.ch.pinky[0]].filter(Boolean).map(G=>G.pos),Q=(z.length?z.reduce((G,$)=>G.add($),Xt()).multiplyScalar(1/z.length):R.hpos.clone().addScaledVector(A,-.1)).sub(R.hpos).normalize(),te=H.clone().addScaledVector(Q,-H.dot(Q)).normalize(),ie=R.hwq.clone().invert();R.fl=Q.clone().applyQuaternion(ie),R.nl=te.clone().applyQuaternion(ie),R.QlInv=new Ke().setFromRotationMatrix(new Ce().makeBasis(R.fl,te.clone().applyQuaternion(ie),new D().crossVectors(R.fl,R.nl))).invert();for(let G in R.ch)R.ch[G].forEach($=>{$.Al.crossVectors(Q,te).normalize().applyQuaternion($.wq.clone().invert())})}C(O.r,Bv),C(O.l,Bv),hs&&hs.parent&&hs.parent.remove(hs),hs=new Nn,hs.quaternion.copy(v),hs.scale.setScalar(P),hs.add(n),hs.position.set(0,-.32,.1).sub(N.clone().applyQuaternion(v).multiplyScalar(P)),zt.add(hs),zt.updateMatrixWorld(!0),[[a.ur,a.lr,a.hr,1],[a.ul,a.ll,a.hl,-1]].forEach(([R,F,H,z])=>{let W=zt.worldToLocal(b(R));fu.push({s:R,e:F,h:H,side:z,bs:R.quaternion.clone(),be:F.quaternion.clone(),sp:W,reach:Ao*.97,axis:H.position.clone().normalize(),info:O[z>0?"r":"l"]})})}function Gv(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(Xt()),r=t.getWorldPosition(Xt()).sub(s).normalize(),a=i.clone().sub(s).normalize(),o=n.getWorldQuaternion(new Ke),l=new Ke().setFromUnitVectors(r,a),c=n.parent.getWorldQuaternion(new Ke).invert();n.quaternion.copy(c.multiply(l).multiply(o)),n.updateWorldMatrix(!1,!0)}function mT(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new Ke).clone().invert(),r=zt.getWorldQuaternion(new Ke),a=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),o=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(o.addScaledVector(a,-o.dot(a)),o.lengthSq()>1e-4){o.normalize(),n.nl&&o.dot(n.nl)<-.15&&o.negate();let l=new Ke().setFromRotationMatrix(new Ce().makeBasis(a,o,new D().crossVectors(a,o))).multiply(n.QlInv);l.slerp(new Ke,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(d=>{d.cur=d.cur*.72+c*.28,d.b.quaternion.copy(d.bind).multiply(new Ke().setFromAxisAngle(d.Al,d.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new Ke().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function Wv(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(Xt()),s=n.e.getWorldPosition(Xt()),r=n.h.getWorldPosition(Xt()),a=i.distanceTo(s),o=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(a-o)+.01),(a+o)*.995);l.normalize();let d=Math.max(-1,Math.min(1,(a*a+c*c-o*o)/(2*a*c))),u=zt.getWorldQuaternion(new Ke),h=new D(n.side*.45,-1,.35).normalize().applyQuaternion(u),p=h.clone().addScaledVector(l,-h.dot(l));p.lengthSq()<1e-4&&p.set(0,-1,0),p.normalize();let g=i.clone().addScaledVector(l,a*d).addScaledVector(p,a*Math.sqrt(Math.max(0,1-d*d)));if(Gv(n.s,n.bs,n.e,g),Gv(n.e,n.be,n.h,e),s=n.e.getWorldPosition(Xt()),r=n.h.getWorldPosition(Xt()),e.clone().sub(r).lengthSq()>1e-5){let f=n.e.parent.getWorldQuaternion(new Ke).invert(),m=n.e.getWorldQuaternion(new Ke),x=new Ke().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(f.multiply(x).multiply(m)),n.e.updateWorldMatrix(!1,!0)}mT(n.info,t)}var va=(n,e)=>new D(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function qv(n,e){let t=va(n,0),i=va(n,5),s=va(n,9),r=va(n,17),a=s.clone().sub(t).normalize(),o=i.clone().sub(t),l=r.clone().sub(t),c=e?new D().crossVectors(l,o):new D().crossVectors(o,l);c.addScaledVector(a,-c.dot(a)).normalize();let d=t.distanceTo(s)||.1,u=(p,g)=>Math.max(0,Math.min(1,1.55-va(n,p).distanceTo(t)/(va(n,g).distanceTo(t)||d)*.72)),h=Math.max(0,Math.min(1,1.4-va(n,4).distanceTo(r)/(i.distanceTo(r)||d)*.75));return{f:a,n:c,c:{index:u(8,5),pinky:u(20,17),thumb:h}}}var jv="nextvr.gorilla.coins",Qn=(()=>{try{let n=localStorage.getItem(jv);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),Bn=null,Nr=null,em=null,Eo=null,tm=-1,Zp=0;function pu(n=1){let e=Math.max(0,Math.floor(Qn+n));if(e===Qn)return Qn;Qn=e;try{localStorage.setItem(jv,String(Qn))}catch{}return Zv(),bt&&(bt.dataset.gorillaRightArmCoins=String(Qn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Qn),Qn}function Zv(){if(!em||!Nr||tm===Qn)return;tm=Qn;let n=em,e=Nr.width,t=Nr.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,a=n.createRadialGradient(i-8,s-8,4,i,s,r);a.addColorStop(0,"#fef08a"),a.addColorStop(.55,"#facc15"),a.addColorStop(1,"#ca8a04"),n.fillStyle=a,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(Qn),92,74),Eo&&(Eo.needsUpdate=!0)}function gT(){if(Bn)return Bn;Nr=document.createElement("canvas"),Nr.width=256,Nr.height=112,em=Nr.getContext("2d"),Eo=new Jc(Nr),Eo.minFilter=fn,Eo.magFilter=fn,tm=-1,Zv(),Bn=new Nn,Bn.name="gorilla-right-arm-coin-counter";let n=new pn({color:1976635}),e=new Rt(new cr(.088,.044,.072),n);e.position.set(0,0,-.02),Bn.add(e);let t=new pn({color:15381256}),i=new Rt(new cr(.148,.068,.012),t);i.position.set(0,0,-.004),Bn.add(i);let s=new pn({map:Eo,transparent:!0,depthTest:!0,side:qn}),r=new Rt(new Dn(.14,.062),s);return r.position.set(0,0,.004),Bn.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:Qn,attachedTo:"right-arm",side:1,visible:!0}),Bn}function Kv(){if(!Bn||!zt)return;let n=fu[0],e=rm(),t=new D(0,1,0).applyQuaternion(zt.getWorldQuaternion(new Ke));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(Xt()),s=n.h.getWorldPosition(Xt()),r=i.clone().lerp(s,.72),a=e.clone().sub(r);a.lengthSq()>1e-5&&(a.normalize(),r.addScaledVector(a,.065)),Bn.position.copy(r),Bn.up.copy(t),Bn.lookAt(e)}else{let i=zt.localToWorld(new D(.24,-.22,-.44));Bn.position.copy(i),Bn.up.copy(t),Bn.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Qn,window.__gorillaRightArmCoinCounter.position=Bn.position.toArray())}function zl(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function yT(n){Bl[0]=null,Bl[1]=null;let e=[];for(let t=0;t<Ri.length;t++){let i=Ri[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let a=0;a<21;a++)r[a]={x:s[a*3],y:s[a*3+1],z:s[a*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y),r=qv(i,t===1);me.handX[t]=i[9].x,me.handY[t]=i[9].y,me.handS[t]=s,me.ori[t]=r,Fn[t]={x:i[9].x,y:i[9].y,s,ori:r,t:n,joyconLocked:!0},Bl[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=zl(t,i)?1:0,a=1-r,o=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y),l=qv(i,r===1);me.handX[r]=i[9].x,me.handY[r]=i[9].y,me.handS[r]=o,me.ori[r]=l,Fn[r]={x:i[9].x,y:i[9].y,s:o,ori:l,t:n,joyconLocked:!0},Bl[r]=i,me.active||(Fn[a]=null,Bl[a]=null,_a[a]=!1,js[a]=null)}if(aT(n),me.active){let t=Math.hypot(me.lx,me.ly),i=Math.hypot(me.rx,me.ry),s=me.lt>.25||me.buttons.has("l1")||me.buttons.has("l2")||me.buttons.has("back"),r=me.rt>.25||me.buttons.has("r1")||me.buttons.has("r2")||me.buttons.has("accept");(t>.12||i>.12||s||r)&&(me.swingPhase+=.22);let a=i>.08?me.rx:me.lx,o=i>.08?me.ry:me.ly,l=t>.12||s?Math.sin(me.swingPhase)*.16:0,c=t>.12||i>.12||r?Math.cos(me.swingPhase)*.16:0,d=e.length>=2||e.length===1&&!zl(e[0].th,e[0].lm)?e[0].lm[9].x:.32,u=e.length>=2||e.length===1&&!zl(e[0].th,e[0].lm)?e[0].lm[9].y:.56,h=e.length>=2?e[1].lm[9].x:e.length===1&&zl(e[0].th,e[0].lm)?e[0].lm[9].x:.68,p=e.length>=2?e[1].lm[9].y:e.length===1&&zl(e[0].th,e[0].lm)?e[0].lm[9].y:.56,g=Math.max(.08,Math.min(.92,d+me.lx*.26)),y=Math.max(.1,Math.min(.92,u+me.ly*.24+l+(s?.18:0))),f=Math.max(.08,Math.min(.92,h+a*.26)),m=Math.max(.1,Math.min(.92,p+o*.24+c+(r?.18:0)));me.handX[0]=g,me.handY[0]=y,me.handS[0]=s?.085:.115,me.handX[1]=f,me.handY[1]=m,me.handS[1]=r?.085:.115;for(let x=0;x<2;x++)Fn[x]={x:me.handX[x],y:me.handY[x],s:me.handS[x],ori:me.ori[x],t:n,joyconLocked:!0};if((t>.16||i>.16)&&zt){let x=Math.abs(me.lx)>=Math.abs(me.rx)?me.lx:me.rx,b=Math.abs(me.ly)>=Math.abs(me.ry)?me.ly:me.ry,M=zt.getWorldQuaternion(new Ke),S=new D(0,0,-1).applyQuaternion(M);S.y=0,S.lengthSq()>1e-4&&S.normalize();let T=new D(1,0,0).applyQuaternion(M);T.y=0,T.lengthSq()>1e-4&&T.normalize();let A=S.multiplyScalar(-b*4.6).addScaledVector(T,x*3.8);It.x=It.x*.82+A.x*.18,It.z=It.z*.82+A.z*.18}}else for(let t=0;t<2;t++)Fn[t]&&Fn[t].joyconLocked&&n-Fn[t].t<=1800&&(Fn[t].t=n);if(Ir&&n-Ir.t<450){let t=Ir.idx;Fn[t]={x:Ir.x,y:Ir.y,s:Ir.s,ori:null,t:n,joyconLocked:!0}}}var rm=()=>zt.getWorldPosition(Xt());function mu(){En&&(En.position.copy(im),It.set(0,0,0),_a[0]=!1,_a[1]=!1,js[0]=null,js[1]=null,ql[0]=0,ql[1]=0,En.updateMatrixWorld(!0))}var Hl=()=>new Promise(n=>setTimeout(n,16));async function Xv(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function $v(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function ba(n,e){bi&&(bi.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&bi.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function vT(){if(oi)return;oi=new io,oi.background=new ke(8898815),oi.fog=new qc(8898815,.0042),oi.add(new nd(14677247,4877115,.98));let n=new Qr(16773846,.92);n.position.set(30,60,20),oi.add(n);let e=new Qr(10875900,.32);e.position.set(-28,34,-22),oi.add(e),En=new Nn,oi.add(En),zt=new Kt(fs.fov,1200/2/800,.05,380),zt.position.set(0,0,0),En.add(zt);let t=fs.ipd*.5;Vl=new Kt(fs.fov,1200/2/800,.05,380),Vl.position.set(-t,0,0),Gl=new Kt(fs.fov,1200/2/800,.05,380),Gl.position.set(t,0,0),zt.add(Vl,Gl);let i=gT();i&&!i.parent&&oi.add(i),Kv(),Wl.length=0;let s=new Qc(.24,.24,.055,18);s.rotateX(Math.PI*.5);let r=new ao({color:16498468,emissive:9584654}),a=[[0,1.35,4.8],[-2.2,1.45,3.6],[2.2,1.45,3.6],[-3.8,1.85,.8],[3.8,1.85,.8],[0,2.2,-2.5],[-1.8,1.6,8.8],[1.8,1.6,8.8]];for(let o=0;o<a.length;o++){let[l,c,d]=a[o],u=new Rt(s,r);u.position.set(l,c,d),u.userData={baseY:c,phase:o*.85,cooldownUntil:0},oi.add(u),Wl.push(u)}try{ki=new Kr({canvas:Ys,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),ki.setPixelRatio(1),ki.setSize(896,560,!1),ki.setScissorTest(!0)}catch{ki=null}}async function bT(){if(!du){if(Fl)return Fl;if(vT(),typeof window<"u"&&window.__gorillaFastTest){du=!0;return}return Fl=(async()=>{var n;try{ba(18,"Descompactando mapa da floresta 3D..."),await Hl();let e=new ou;e.textureLoader=new oo((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([Xv("./gorilla-map.task"),Xv("./gorilla-rig.task")]);ba(45,"Carregando texturas e geometria..."),await Hl();let[s,r]=await Promise.all([$v(e,t),$v(e,i)]);ba(68,"Otimizando malhas 3D (Lambert merge)..."),await Hl();let a=fT(s.scene);ba(84,"Construindo grade f\xEDsica de colis\xE3o..."),await Hl(),lT(a);let o=dT(xa[0],xa[1],xa[2],Kp)||[xa[0],.9,xa[2]];im.set(o[0],o[1],o[2]),ba(94,"Ativando bra\xE7os Gorilla 3D..."),await Hl(),pT(r.scene),mu(),du=!0,ba(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),du=!0}finally{Fl=null}})(),Fl}}function xT(){if(bt)return;let n=document.getElementById("hud")||document.body;bt=document.createElement("div"),bt.id="gorilla-overlay",bt.dataset.testid="gorilla-overlay",bt.dataset.cardboardLenses="2015",bt.dataset.gorillaStage="idle",bt.dataset.gorillaRightArmCoins=String(Qn),bt.dataset.lensModel=fs.model,bt.dataset.lensK1=String(fs.k1),bt.dataset.lensK2=String(fs.k2),bt.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Ys=document.createElement("canvas"),Ys.id="gorilla-canvas",Ys.width=896,Ys.height=560,Ys.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",bt.appendChild(Ys);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),bt.appendChild(e);let t=(r,a)=>{let o=document.createElement("div");return o.style.cssText=`position:absolute;left:${r+120}px;top:12px;width:360px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,o.innerHTML=`
      <button type="button" data-gorilla-act="jump" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(251,191,36,.45);background:rgba(120,53,15,.82);color:#fde68a;font:700 10px Inter,sans-serif;cursor:pointer">Salto</button>
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${a?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,o};bt.appendChild(t(0,!0)),bt.appendChild(t(600,!1)),bi=document.createElement("div"),bi.id="gorilla-splash",bi.dataset.testid="gorilla-splash",bi.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${r?"border-right:1px solid rgba(255,255,255,.15)":""}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${r?'data-gorilla-entering="1"':""} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${fs.model} \xB7 Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;bi.innerHTML=i(!0)+i(!1),bt.appendChild(bi),bt.addEventListener("click",r=>{let a=r.target.closest("[data-gorilla-act]");if(!a)return;let o=a.dataset.gorillaAct;if(o==="exit")Xl();else if(o==="spawn")mu();else if(o==="jump"){let l=new D(0,0,-1).applyQuaternion(zt?zt.getWorldQuaternion(new Ke):new Ke);l.y=0,l.lengthSq()>1e-4&&l.normalize(),It.x+=l.x*4.2,It.z+=l.z*4.2,It.y=Math.max(It.y,4.8),pu(1)}else o==="recenter"&&(nm=new ni().setFromQuaternion(fe.quaternion,"YXZ").y)});let s=r=>{let a=bt.getBoundingClientRect();if(!a.width||!a.height)return;let o=Math.max(0,Math.min(1,(r.clientX-a.left)/a.width)),l=Math.max(0,Math.min(1,(r.clientY-a.top)/a.height)),c=o>=.5?(o-.5)*2:o*2;Ir={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};bt.addEventListener("pointerdown",s),bt.addEventListener("pointermove",r=>{r.buttons&&s(r)}),bt.addEventListener("pointerup",()=>{Ir=null}),n.appendChild(bt)}function Yv(){let n=rm();for(let e=0;e<3&&sm(n.x,n.y,n.z,Kp);e++){let t=Kp-Xe.d;En.position.x+=Xe.nx*t,En.position.y+=Xe.ny*t,En.position.z+=Xe.nz*t,n.x+=Xe.nx*t,n.y+=Xe.ny*t,n.z+=Xe.nz*t;let i=It.x*Xe.nx+It.y*Xe.ny+It.z*Xe.nz;i<0&&(It.x-=Xe.nx*i,It.y-=Xe.ny*i,It.z-=Xe.nz*i,Xe.ny>.5&&(It.x*=.88,It.z*=.88))}n.y<im.y-18&&mu()}function Jv(n){if(!wa)return;uu=requestAnimationFrame(Jv);let e=Math.min((n-(hu||n))/1e3,.04)||.016;if(hu=n,!oi||!En||!zt)return;let t=new ni().setFromQuaternion(fe.quaternion,"YXZ");zt.quaternion.setFromEuler(new ni(t.x,t.y-nm,t.z,"YXZ")),yT(n);let i=Jt.consumeStepDelta();i.lengthSq()>1e-6&&(En.position.x+=i.x,En.position.z+=i.z,En.position.y+=i.y*.25),It.y-=9.8*e,It.multiplyScalar(1-.14*e),En.position.addScaledVector(It,e),En.updateMatrixWorld(!0),Yv();for(let s=0;s<2;s++){Fn[s]&&!Fn[s].joyconLocked&&!me.active&&n-Fn[s].t>1800&&(Fn[s]=null);let r=Fn[s],a=fu[s?0:1];if(!r){if(_a[s]=!1,js[s]=null,ql[s]=0,a){let g=new D(s?.24:-.24,-.26,-.46);Wv(a,zt.localToWorld(g),null)}continue}ql[s]++;let o=a?a.sp:Xt(),l=Xt();l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),js[s]&&!r.joyconLocked&&!me.active&&l.lerp(js[s],.12);let c=l.clone().sub(o);c.length()>Ao*.97&&l.copy(o).addScaledVector(c.setLength(Ao*.97),1),iT[s].copy(l),js[s]||(js[s]=Xt()),js[s].copy(l);let d=zt.localToWorld(l.clone());if(ql[s]>=1&&sm(d.x,d.y,d.z,cu)){let g=new D(Xe.x+Xe.nx*cu,Xe.y+Xe.ny*cu,Xe.z+Xe.nz*cu);if(!_a[s])_a[s]=!0,zv[s].copy(g);else{let y=zv[s].clone().sub(d),f=y.length();if(f>.001){f>.28&&y.multiplyScalar(.28/f),En.position.add(y),Zp+=y.length(),Zp>=.38&&(Zp=0,pu(1));let m=y.clone().multiplyScalar(nT/Math.max(e,.01));It.lerp(m,.56),It.length()>Fv&&It.setLength(Fv),En.updateMatrixWorld(!0),Yv()}}ya[s].copy(zt.localToWorld(l.clone()))}else _a[s]=!1,ya[s].copy(d);let h=zt.worldToLocal(ya[s].clone()),p=h.clone().sub(o);p.length()>Ao*.97&&(h.copy(o).addScaledVector(p.setLength(Ao*.97),1),ya[s].copy(zt.localToWorld(h))),a&&Wv(a,ya[s],r.ori)}if(Wl.length){let s=rm();for(let r=0;r<Wl.length;r++){let a=Wl[r],o=a.userData;if(n<o.cooldownUntil){a.visible=!1;continue}a.visible=!0,a.rotation.y+=e*2.4,a.position.y=o.baseY+Math.sin(n*.003+o.phase)*.08;let l=a.position.distanceTo(s),c=Fn[0]?a.position.distanceTo(ya[0]):99,d=Fn[1]?a.position.distanceTo(ya[1]):99;(l<.85||c<.45||d<.45)&&(o.cooldownUntil=n+4500,a.visible=!1,pu(5))}}if(Kv(),ki&&Vl&&Gl){En.updateMatrixWorld(!0);let s=Ys.width,r=Ys.height,a=s>>1;ki.setViewport(0,0,a,r),ki.setScissor(0,0,a,r),ki.render(oi,Vl),ki.setViewport(a,0,a,r),ki.setScissor(a,0,a,r),ki.render(oi,Gl)}}function To(){var t,i,s,r,a,o;if(xT(),Dr||wa)return;Dr=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=Xl,window.__gorillaOnHands=null,bt&&(bt.dataset.gorillaRightArmCoins=String(Qn)),w.handsOn=!0,is().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}Jp=he.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...he])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");Tr(!0),qt(!1),sn(!0),(r=(s=ne).invalidate)==null||r.call(s),(o=(a=ne).render)==null||o.call(a,Ee,fe),bt.dataset.gorillaStage="entering",bt.style.display="block",bi.style.display="flex",ba(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([bT(),e]).then(()=>{Dr&&(Dr=!1,wa=!0,bt.dataset.gorillaStage="playing",bi.style.display="none",mu(),hu=performance.now(),Jv(hu))})}function Xl(){var n,e,t,i,s,r;Dr=!1,wa=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,Hv[0]=0,Hv[1]=0,oT=0,uu&&(cancelAnimationFrame(uu),uu=0),bi&&(bi.style.display="none"),bt&&(bt.dataset.gorillaStage="idle",bt.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!w.handDraw)}catch{}for(let{win:a,hidden:o}of Jp)he.includes(a)&&(typeof a.setHidden=="function"?a.setHidden(o):a.shell&&(a.shell.style.display=""));Jp=[],w.spatialLauncher||(sn(!1),qt(!0)),(i=(t=ne).invalidate)==null||i.call(t),(r=(s=ne).render)==null||r.call(s,Ee,fe)}var re=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var _T=n=>{if(ge)return yn("browser-extra",U("browser"),n);try{window.open(n,"_blank","noopener")}catch{et("Bloqueado pelo navegador")}},wT=[{name:"Google",url:"https://www.google.com/",bg:"#ffffff",color:"#4285F4",badge:"G"},{name:"YouTube",url:"https://www.youtube.com/",bg:"#ff0033",color:"#ffffff",badge:"\u25B6"},{name:"Roblox",url:"https://www.roblox.com/",bg:"#090d16",color:"#f8fafc",badge:"\u25C8",img:"./roblox-logo.jpg"},{name:"Discord",url:"https://discord.com/app",bg:"#5865F2",color:"#ffffff",badge:"D"},{name:"Instagram",url:"https://www.instagram.com/",bg:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)",color:"#ffffff",badge:"\u25CE"},{name:"Facebook",url:"https://www.facebook.com/",bg:"#1877F2",color:"#ffffff",badge:"f"},{name:"Beat Saber",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"#070814",color:"#ffffff",badge:"\u2694",img:"./beat-saber-logo.jpg"},{name:"TikTok",url:"https://www.tiktok.com/",bg:"#000000",color:"#25F4EE",badge:"\u266A",img:"./tiktok-logo.jpg"}],MT=[{title:"YouTube \xB7 V\xEDdeos 360\xB0 VR",domain:"youtube.com",url:"https://www.youtube.com/",bg:"linear-gradient(135deg,#7f1d1d,#ef4444)",badge:"\u25B6 YouTube"},{title:"Roblox \xB7 Mundos e Jogos",domain:"roblox.com",url:"https://www.roblox.com/",bg:"linear-gradient(135deg,#0f172a,#334155)",badge:"\u25C8 Roblox",img:"./roblox-logo.jpg"},{title:"Beat Saber \xB7 VR Imediato",domain:"moonrider.xyz",url:"https://moonrider.xyz/?mode=ride&vr=1",bg:"linear-gradient(135deg,#1e1b4b,#dc2626)",badge:"\u2694 Beat Saber",img:"./beat-saber-logo.jpg"},{title:"Hyper Dash \xB7 Arena VR",domain:"immersiveweb.dev",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0c4a6e,#0284c7)",badge:"\u26A1 Hyper Dash",img:"./hyper-dash-logo.jpg"}],ST=[{name:"Spotify",url:"https://open.spotify.com/",bg:"#121316",logoBg:"#1ED760",logoColor:"#000000",logoText:"Spotify",pill:!0},{name:"Music",url:"https://music.youtube.com/",bg:"#121316",logoBg:"#FF0033",logoColor:"#ffffff",logoText:"\u25C9 Music",pill:!0},{name:"Crunchyroll",url:"https://www.crunchyroll.com/",bg:"#121316",logoBg:"#F47521",logoColor:"#ffffff",logoText:"crunchyroll",pill:!1},{name:"HBO Max",url:"https://www.max.com/",bg:"#121316",logoBg:"#002BE7",logoColor:"#ffffff",logoText:"HBO max",pill:!1},{name:"Hulu",url:"https://www.hulu.com/",bg:"#121316",logoBg:"#1CE783",logoColor:"#050709",logoText:"hulu",pill:!1},{name:"Tubi",url:"https://tubitv.com/",bg:"#121316",logoBg:"#FA382F",logoColor:"#ffffff",logoText:"tubi",pill:!1},{name:"Paramount+",url:"https://www.paramountplus.com/",bg:"#121316",logoBg:"#0064FF",logoColor:"#ffffff",logoText:"Paramount+",pill:!1},{name:"Peacock",url:"https://www.peacocktv.com/",bg:"#121316",logoBg:"#000000",logoColor:"#ffffff",logoText:"peacock",pill:!1},{name:"Twitch",url:"https://www.twitch.tv/",bg:"#121316",logoBg:"#9146FF",logoColor:"#ffffff",logoText:"twitch",pill:!1},{name:"ESPN",url:"https://www.espn.com/",bg:"#121316",logoBg:"#CC0000",logoColor:"#ffffff",logoText:"ESPN",pill:!1}],AT=[{title:"Acima das Nuvens 360\xB0",sub:"Experi\xEAncia WebXR Panor\xE2mica",url:"https://immersiveweb.dev/",bg:"linear-gradient(135deg,#0284c7,#1e1b4b)"},{title:"Explora\xE7\xE3o Espacial VR",sub:"Tour Orbital Interativo 3D",url:"https://eyes.nasa.gov/",bg:"linear-gradient(135deg,#311042,#090d16)"},{title:"Jogos WebXR Imersivos",sub:"Cat\xE1logo VR no Navegador",url:"https://constructarcade.com/",bg:"linear-gradient(135deg,#065f46,#0f172a)"}];function ET(){return`
    <div class="qb-home-scroll">
      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Populares</span></div>
        <div class="qb-pop-row">
          ${wT.map(n=>`
            <button type="button" class="qb-pop-item" data-qb-url="${Le(n.url)}" title="${Le(n.name)}">
              <span class="qb-pop-icon" style="background:${n.bg};color:${n.color};overflow:hidden;padding:0">${n.img?`<img src="${n.img}" alt="${Le(n.name)}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">`:Le(n.badge)}</span>
              <span class="qb-pop-lbl">${Le(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Continuar navegando</span><span class="qb-sec-more">Ver mais</span></div>
        <div class="qb-cont-grid">
          ${MT.map(n=>`
            <button type="button" class="qb-cont-card" data-qb-url="${Le(n.url)}" title="${Le(n.title)}">
              <div class="qb-cont-thumb" style="background:${n.bg};overflow:hidden">${n.img?`<img src="${n.img}" alt="${Le(n.title)}" style="width:100%;height:100%;object-fit:cover;display:block">`:`<span>${Le(n.badge)}</span>`}</div>
              <div class="qb-cont-meta">
                <div class="qb-cont-ttl">${Le(n.title)}</div>
                <div class="qb-cont-dom">${Le(n.domain)}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Entretenimento</span></div>
        <div class="qb-ent-grid">
          ${ST.map(n=>`
            <button type="button" class="qb-ent-tile" data-qb-url="${Le(n.url)}" title="${Le(n.name)}">
              <div class="qb-ent-card" style="background:${n.bg}">
                <span class="qb-ent-logo" style="background:${n.logoBg};color:${n.logoColor}">${Le(n.logoText)}</span>
              </div>
              <span class="qb-ent-lbl">${Le(n.name)}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="qb-sec">
        <div class="qb-sec-head"><span class="qb-sec-title">Experi\xEAncias imersivas</span><span class="qb-sec-more">Explorar</span></div>
        <div class="qb-imm-grid">
          ${AT.map(n=>`
            <button type="button" class="qb-imm-card" data-qb-url="${Le(n.url)}" style="background:${n.bg}">
              <span class="qb-imm-badge">WEBXR</span>
              <span class="qb-imm-ttl">${Le(n.title)}</span>
              <span class="qb-imm-sub">${Le(n.sub)}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `}function Cu(n,e,t="https://duckduckgo.com/",i={}){var C,R,F,H,z,W,Q,te,ie,G;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",a=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,o=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=he.find($=>$.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let $=l.el.querySelector(".win-title");$&&($.textContent=o);let Y=l.el.querySelector("[data-browser-incognito]");Y&&(Y.dataset.browserIncognito=r?"1":"0",Y.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",Y.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",Y.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let ae=l.el.querySelector("[data-native-browser], iframe"),X=l.el.querySelector(".qb-home-overlay"),se=t==="https://duckduckgo.com/";X&&(X.hidden=!se);let pe=l.el.querySelector(".qb-urlfld");return pe&&(pe.value=a),ae&&(ae.dataset.homeOverlay=se?"1":"0",ge?(ae.dataset.url=a,(R=(C=window.NativeXR)==null?void 0:C.browserCmd)==null||R.call(C,"browser","go",a)):ae.src=a),tn(l),(H=(F=ne).invalidate)==null||H.call(F),(W=(z=ne).render)==null||W.call(z,Ee,fe),l}let c=re("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let d=re("div");d.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let u=re("button","qb-icn");u.innerHTML=ee("back"),u.title="Voltar";let h=re("button","qb-icn");h.innerHTML=ee("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let p=re("button","qb-icn");p.innerHTML=ee("refresh"),p.title="Recarregar";let g=re("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.dataset.qbAct="home",g.title="In\xEDcio do Navegador",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`cursor:pointer;font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=re("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=a;let f=re("button","qb-icn");f.innerHTML=ee("star"),f.title="Favorito",d.append(u,h,p,g,y,f);let m=re("div");m.style.cssText="flex:1;min-height:0;position:relative;background:#181a20";let x=t==="https://duckduckgo.com/",b=re("div","qb-home-overlay",ET());b.hidden=!x;let M=re(ge?"div":"iframe");ge?(M.dataset.nativeBrowser="browser",M.style.cssText="width:100%;height:100%;background:#181a20;position:relative;overflow:hidden",M.dataset.url=a,M.dataset.homeOverlay=x?"1":"0",M.appendChild(b),m.appendChild(M)):(M.style.cssText="width:100%;height:100%;border:0;background:#fff",M.referrerPolicy="no-referrer",M.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",M.src=a,M.dataset.homeOverlay=x?"1":"0",m.append(M,b));let S=re("div","qb-dock"),T=document.createElement("button");T.className="dock-av",T.title="Perfil",T.setAttribute("aria-label","Perfil"),T.innerHTML=TT,S.appendChild(T);let A=document.createElement("button");A.className="dock-status",A.title="Status",A.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${ee("wifi")}</span><span class="dock-bat">${RT}</span>`,S.appendChild(A),c.append(d,m,S);function k(){let $=ds(),Y=S.querySelector(".dock-time");if(Y&&(Y.textContent=$.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):$.time),ge&&$.batteryLevel!=null){let ae=S.querySelector(".dock-bat .b-fill");ae&&(ae.setAttribute("width",String(Math.max(2,13*$.batteryLevel))),ae.setAttribute("fill",$.charging?"#8de6c8":$.batteryLevel<.2?"#ff6b6b":"currentColor"))}}k();let v=setInterval(k,2e4);!ge&&navigator.getBattery&&navigator.getBattery().then($=>{function Y(){let ae=S.querySelector(".dock-bat .b-fill");ae&&(ae.setAttribute("width",String(Math.max(2,13*$.level))),ae.setAttribute("fill",$.charging?"#8de6c8":$.level<.2?"#ff6b6b":"currentColor"))}$.addEventListener("levelchange",Y),$.addEventListener("chargingchange",Y),Y()}).catch(()=>{});function _(){let $=S.querySelector(".dock-wifi");$&&($.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",_),addEventListener("offline",_),_();function P($){var ae,X,se,pe;let Y=($||"").trim();Y&&(/^https?:\/\//i.test(Y)||(Y=/\.\w{2,}($|\/)/.test(Y)?"https://"+Y:"https://duckduckgo.com/?q="+encodeURIComponent(Y)),y.value=Y,b.hidden=!0,M.dataset.homeOverlay="0",ge?(M.dataset.url=Y,(X=(ae=window.NativeXR)==null?void 0:ae.browserCmd)==null||X.call(ae,"browser","go",Y)):M.src=Y,(pe=(se=ne).invalidate)==null||pe.call(se))}function N($,Y){var ae,X;ge&&((X=(ae=window.NativeXR)==null?void 0:ae.browserCmd)==null||X.call(ae,"browser",$,Y||""))}b.addEventListener("click",$=>{let Y=$.target.closest("[data-qb-url]");if(!Y)return;$.stopPropagation();let ae=Y.dataset.qbUrl||"";if(ae.includes("roblox.com")){Zl();return}if(ae.includes("moonrider.xyz")){Lu();return}P(ae)}),g.onclick=()=>{var $,Y;b.hidden=!b.hidden,M.dataset.homeOverlay=b.hidden?"0":"1",(Y=($=ne).invalidate)==null||Y.call($)},y.addEventListener("keydown",$=>{$.key==="Enter"&&(P(y.value),y.blur())}),y.addEventListener("focus",()=>gi(!0,y)),u.onclick=()=>N("back"),h.onclick=()=>N("fwd"),p.onclick=()=>N("reload");let O=nn({id:"browser",title:o,node:c});return O!=null&&O.el&&(O.el.dataset.browserMode=s,O.el.dataset.incognito=r?"1":"0"),O!=null&&O.shell&&(O.shell.dataset.browserMode=s,O.shell.dataset.incognito=r?"1":"0"),O._cleanupQB=()=>{clearInterval(v),removeEventListener("online",_),removeEventListener("offline",_)},O.obj.position.copy(O.target),O.apply(),Ee.updateMatrixWorld(!0),(te=(Q=ne).invalidate)==null||te.call(Q),(G=(ie=ne).render)==null||G.call(ie,Ee,fe),O}function ab(n="new-tab"){let e=n==="incognito-tab",t=Cu("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return et(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=ab);var TT='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',RT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function yn(n,e,t,i){var g,y,f,m;if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return Cu(n,e,t);let s=re("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=re("div","row browser-bar"),a=re("input","fld");a.value=t,a.placeholder=U("search");let o=re("button","go",ee("enter"));o.setAttribute("aria-label",U("open")),o.title=U("open");let l=re("button","go",ee("external"));l.setAttribute("aria-label",U("open")),l.title=U("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(a,o,l);let c=re("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let d=re("div");d.style.cssText="flex:1;min-height:0;position:relative";let u=re(ge?"div":"iframe");ge&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),d.appendChild(u),s.append(r,c,d);let h=x=>{let b=(x||"").trim();if(b){if(/^https?:\/\//i.test(b)||(b=/\.\w{2,}($|\/)/.test(b)?"https://"+b:"https://duckduckgo.com/?q="+encodeURIComponent(b)),a.value=b,ge){u.dataset.url=b,c.style.display="none";return}u.src=b,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};o.onclick=()=>h(a.value),a.addEventListener("keydown",x=>{x.key==="Enter"&&h(a.value)}),a.addEventListener("focus",()=>gi(!0,a)),l.onclick=()=>_T(a.value),h(t);let p=nn({id:n,title:e,node:s});return p.shell.classList.add("web-page-window"),p.obj.position.copy(p.target),p.apply(),Ee.updateMatrixWorld(!0),(y=(g=ne).invalidate)==null||y.call(g),(m=(f=ne).render)==null||m.call(f,Ee,fe),p}var Le=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var gu=[];function ym(){let n=re("div","pad"),e=re("div");e.innerHTML=`<h2>${U("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=re("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${U("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=re("div","grid3"),s=()=>{i.innerHTML="";for(let u of xf()){let h=re("button","env"+(u.thumb?" env-pano":""));h.style.background=u.thumb?`url('${u.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${u.name}</span>`,h.setAttribute("aria-pressed",w.env===u.id?"true":"false"),h.onclick=()=>{Ti(u.id),[...i.children].forEach(p=>p.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),et("Ambiente: "+u.name)},i.appendChild(h)}};s(),ze("env",s),t.appendChild(i);let r=re("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${U("gallery")}</h3>`;let a=re("button","go",U("pickPhotos")),o=re("input");o.type="file",o.accept="image/*",o.multiple=!0,o.style.display="none",r.appendChild(a);let l=re("div","grid4"),c=re("div");c.style.cssText="margin-top:14px";let d=()=>{if(l.innerHTML="",!gu.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${U("noPhotos")}</p>`;return}gu.forEach(u=>{let h=re("button","thumb");h.innerHTML=`<img src="${u}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${u}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return a.onclick=()=>o.click(),o.onchange=()=>{for(let u of o.files)gu.push(URL.createObjectURL(u));d(),et(gu.length+" fotos")},d(),n.append(e,t,r,o,l,c),nn({id:"gallery",title:U("gallery"),node:n})}function Au(){let n=re("div","pad");n.innerHTML=`<h2>${U("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=re("div","grid3");for(let t of xf()){let i=re("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",w.env===t.id),i.onclick=()=>{Ti(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),nn({id:"env",title:U("env"),node:n})}function CT(n,e,t){let i=re("div","opt");return i.append(re("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function un(n,e,t,i){let s=re("div","yt-row"),r=re("span","yt-ic");r.innerHTML=n;let a=re("div","yt-txt");if(a.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,a),i){let o=re("div","yt-ctl");o.appendChild(i),s.appendChild(o)}else{let o=re("span","yt-ch");o.innerHTML="",s.appendChild(o)}return s}function Ma(n,e){let t=re("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=w[n]?"1":"0",t.setAttribute("aria-checked",w[n]?"true":"false")};return i(),t.onclick=()=>{w[n]=w[n]?0:1,Fe(),i(),e&&e(w[n])},t}function Ro(n){let e=re("div","yt-sec");return e.textContent=n,e}function Sa(n,e,t,i){let s=re("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=w[n],s.oninput=()=>{w[n]=+s.value,Fe()},s}function ob(n){n.innerHTML="";let e=gv(),t=n,i=re("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${U(kl()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=re("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!kl()){let o=re("button","go",U("xrInstall"));o.onclick=()=>{up()},s.append(o)}let r=re("button","go",U("xrSelfTest"));r.onclick=()=>hp(),s.append(r);let a=re("div","seg");for(let[o,l,c]of[["controllers",U("xrModeControllers"),U("xrModeControllersSub")],["hands",U("xrModeHands"),U("xrModeHandsSub")]]){let d=re("button",null,l);d.title=c,d.setAttribute("aria-pressed",String(bv()===o)),d.onclick=()=>{Mv(o),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),d.setAttribute("aria-pressed","true")},a.appendChild(d)}t.append(CT(U("xrHandMode"),U("xrHandModeSub"),a),s),t.append(re("p","note",U("xrHandModeNote"))),!kl()&&!e.runtimeBundled&&t.append(re("p","note",U("xrBundlingNote")))}function Jl(){var k,v;let n=re("div","quick-center"),e=re("section","quick-panel"),t=re("aside","quick-side"),i=re("div","quick-status"),s=()=>{var P,N;try{let O=(N=(P=window.NativeXR)==null?void 0:P.battery)==null?void 0:N.call(P);if(O){let C=JSON.parse(O);if(C&&typeof C.level=="number")return C}}catch{}let _=ds();return _&&typeof _.batteryLevel=="number"?{level:_.batteryLevel,charging:!!_.charging}:null},r=s(),a=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${a}</span></div><div class="quick-battery">${ee("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,ze("device-status",()=>{let _=i.querySelector("[data-cc-battery]");if(!_)return;let P=s();_.textContent=`${P?Math.round(P.level*100):"\u2014"}%`});let l=re("button","quick-gear",ee("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>Eu(),i.appendChild(l);let c=re("div","quick-tiles"),d=(_,P,N,O,C=!1)=>{let R=re("button",`quick-tile${C?" is-disabled":""}`);return R.type="button",R.innerHTML=`<span class="quick-tile-icon">${ee(_)}</span><span><b>${P}</b><small>${N}</small></span>`,R.disabled=C,O&&(R.onclick=O),c.appendChild(R),R};d("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var _;return(_=window.NativeXR)!=null&&_.systemPanel?window.NativeXR.systemPanel("internet"):et("Conex\xF5es dispon\xEDveis no Android")}),d("bluetooth","Bluetooth","Dispositivos",()=>{var _;return(_=window.NativeXR)!=null&&_.systemPanel?window.NativeXR.systemPanel("bluetooth"):et("Bluetooth dispon\xEDvel no Android")}),d("android","Apps Android","Abrir janela Shizuku",()=>Tu()),d("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let u=re("div","quick-section");u.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=re("div","quick-controls"),p=w.env==="night"?"passthrough":w.env,g=!1,y=null,f=null,m=_=>{var P;g=!!_,(P=window.NativeXR)!=null&&P.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let N of[y,f])N&&(N.classList.toggle("is-active",g),N.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},x=(_,P,N,O,C=!1)=>{let R=re("button",`quick-control${C?" is-active":""}`);return R.type="button",R.setAttribute("aria-pressed",String(C)),R.innerHTML=`<span>${ee(_)}</span><b>${P}</b><small>${N}</small>`,R.onclick=()=>{let F=O(R);R.classList.toggle("is-active",!!F),R.setAttribute("aria-pressed",String(!!F))},h.appendChild(R),R};x("camera","Vis\xE3o do ambiente",w.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",_=>{let P=w.env!=="passthrough";return zi(P),_.querySelector("small").textContent=P?"C\xE2mera ativa":"C\xE2mera desligada",P},w.env==="passthrough"),y=x("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(m(!g),g)),x("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Hi(),et("Vis\xE3o recentralizada"),!1)),x("moon","Modo noturno",w.env==="night"?"Ativado":"Desativado",_=>{let P=w.env!=="night";return P?(p=w.env,Ti("night")):Ti(p==="night"?"passthrough":p),_.querySelector("small").textContent=P?"Ativado":"Desativado",P},w.env==="night"),x("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(Eu(),!1)),x("android","Apps do Android","Abrir launcher Shizuku",()=>(Tu(),!1)),x("appGrid","Spatial App",w.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",_=>{let P=!w.spatialLauncher;return Nu(P),_.querySelector("small").textContent=P?"Ativado (Sem Dock)":"Desativado (Dock normal)",P},!!w.spatialLauncher),x("vision","C\xE2mera Grande Ocular",w.wideCamera?"Ativada":"Normal",_=>{var P,N;return w.wideCamera=w.wideCamera?0:1,Fe(w),(N=(P=window.NativeXR)==null?void 0:P.wideCamera)==null||N.call(P,!!w.wideCamera),_.querySelector("small").textContent=w.wideCamera?"Ativada":"Normal",!!w.wideCamera},!!w.wideCamera),x("move",U("dockSnapSlot"),w.dockSnapSlot!==0?U("on"):U("off"),_=>(w.dockSnapSlot=w.dockSnapSlot===0?1:0,Fe(w),_.querySelector("small").textContent=w.dockSnapSlot!==0?U("on"):U("off"),w.dockSnapSlot!==0),w.dockSnapSlot!==0),x("crosshair",U("fingerTouch"),w.fingerTouch!==0?U("on"):U("off"),_=>{var P,N;return w.fingerTouch=w.fingerTouch===0?1:0,Fe(w),(N=(P=window.NativeXR)==null?void 0:P.setFingerTouch)==null||N.call(P,w.fingerTouch!==0),Ae("fingerTouch",w.fingerTouch!==0),_.querySelector("small").textContent=w.fingerTouch!==0?U("on"):U("off"),w.fingerTouch!==0},w.fingerTouch!==0),x("crosshair","Pin\xE7a no App (Sem Raio)",w.pinchOnApp!==0?"Ativado":"Desativado",_=>(w.pinchOnApp=w.pinchOnApp===0?1:0,Fe(w),Ae("pinchOnApp",w.pinchOnApp!==0),_.querySelector("small").textContent=w.pinchOnApp!==0?"Ativado":"Desativado",w.pinchOnApp!==0),w.pinchOnApp!==0),x("crosshair","Gesto de Soco 2s (Menu R\xE1pido)",w.gunGesture!==0?"Ativado":"Desativado",_=>(w.gunGesture=w.gunGesture===0?1:0,Fe(w),Ae("gunGesture",w.gunGesture!==0),_.querySelector("small").textContent=w.gunGesture!==0?"Ativado":"Desativado",w.gunGesture!==0),w.gunGesture!==0),x("move","Modo 3DoF / 6DoF",w.sixdof!==0?"6DoF Ativado":"3DoF Ativado",_=>{var P,N;return w.sixdof=w.sixdof===0?1:0,Fe(w),w.sixdof||Jt.reset(),(N=(P=window.NativeXR)==null?void 0:P.setSixDofEnabled)==null||N.call(P,w.sixdof!==0),Ae("sixdof",w.sixdof!==0),_.querySelector("small").textContent=w.sixdof!==0?"6DoF Ativado":"3DoF Ativado",w.sixdof!==0},w.sixdof!==0),u.appendChild(h),e.append(u);let b=re("div","quick-side-title","Ajustes"),M=re("span","quick-side-icon",ee("volume")),S=re("input","quick-vertical");S.type="range",S.min="0",S.max="100",S.value=(k=window.NativeXR)!=null&&k.volume?window.NativeXR.volume():65,S.setAttribute("aria-label","Volume"),S.title=`Volume ${S.value}%`,S.oninput=()=>{var _,P;(P=(_=window.NativeXR)==null?void 0:_.setVolume)==null||P.call(_,+S.value),S.title=`Volume ${S.value}%`},f=re("button","quick-side-button",ee("volumeoff")),f.type="button",f.title="Silenciar \xE1udio",f.setAttribute("aria-label","Silenciar \xE1udio"),f.setAttribute("aria-pressed","false"),f.onclick=()=>m(!g);let T=re("span","quick-side-icon",ee("sun")),A=re("input","quick-vertical");return A.type="range",A.min="10",A.max="100",A.value=(v=window.NativeXR)!=null&&v.brightness?window.NativeXR.brightness():70,A.setAttribute("aria-label","Brilho"),A.title=`Brilho ${A.value}%`,A.oninput=()=>{var _,P;(P=(_=window.NativeXR)==null?void 0:_.setBrightness)==null||P.call(_,+A.value),A.title=`Brilho ${A.value}%`},t.append(b,M,S,f,T,A),n.append(e,t),nn({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function Eu(){let n=re("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=re("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=re("button","yt-back");t.innerHTML=ee("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let m=he.find(x=>x.id==="settings");m&&ft(m)};let i=re("div","yt-head-title");i.textContent=U("settings"),e.append(t,i);let s=re("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,a=()=>{r=nn({id:"language-pick",title:U("langTitle"),w:320,h:420,node:fb(w.lang||"pt",m=>{na(m),et(U("langChanged")),ft(r);let x=he.find(b=>b.id==="settings");x&&ft(x),Eu()},!0)})};s.append(Ro(U("general")));let o=re("button","yt-link");o.append(un(ee("globe"),U("language"),wd(w.lang||"pt").label)),o.onclick=a,s.append(o),s.append(un(ee("gauge"),"Contador de FPS","Mostrar taxa de quadros",Ma("showFps")));let l=re("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=re("button","entry-seg-btn"+(w.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let d=re("button","entry-seg-btn"+(w.sixdof!==0?" on":""),"6DoF");d.dataset.settingsDof="6dof";let u=()=>{c.classList.toggle("on",w.sixdof===0),d.classList.toggle("on",w.sixdof!==0)};c.onclick=()=>{var m,x;w.sixdof=0,Fe(w),Jt.reset(),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!1),Ae("sixdof",!1),u()},d.onclick=()=>{var m,x;w.sixdof=1,Fe(w),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!0),Ae("sixdof",!0),u()},l.append(c,d),s.append(un(ee("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=re("button","yt-link");h.append(un(ee("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let m=he.find(x=>x.id==="settings");m&&ft(m),ym()},s.append(h),s.append(Ro(U("hands"))),s.append(un(ee("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(un(ee("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",Ma("handDraw"))),s.append(un(ee("crosshair"),U("fingerTouch"),U("fingerTouchDesc"),Ma("fingerTouch",m=>{var x,b;(b=(x=window.NativeXR)==null?void 0:x.setFingerTouch)==null||b.call(x,!!m),Ae("fingerTouch",!!m)}))),s.append(un(ee("crosshair"),"Pin\xE7a no App (Sem Raio)","Fazer a pin\xE7a encima de um app abre o app na hora, sem precisar do raio",Ma("pinchOnApp",m=>Ae("pinchOnApp",!!m)))),s.append(un(ee("crosshair"),"Gesto de Soco 2s (Menu R\xE1pido)","Fechar a m\xE3o toda por 2 segundos abre o menuzinho de recentrar dock e ambientes",Ma("gunGesture",m=>Ae("gunGesture",!!m)))),s.append(un(ee("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(Ro(U("windows"))),s.append(un(ee("maximize"),"Tamanho","Escala das janelas",Sa("winScale",.6,1.6,.05))),s.append(un(ee("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",Sa("winDist",ge?.6:1.5,ge?1.8:3.4,.05))),s.append(un(ee("curve"),U("curve"),"Abertura do arco",Sa("winCurve",0,1,.05))),s.append(un(ee("curve"),U("win360"),U("win360k"),Sa("win360K",.2,1.15,.05))),s.append(un(ee("curve"),U("win360All"),"Novas janelas curvadas",Ma("win360"))),s.append(un(ee("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",Sa("winTilt",0,1.5,.05))),s.append(Ro(U("dock"))),s.append(un(ee("appGrid"),"Tamanho da dock",null,Sa("dockSize",.7,1.5,.05))),s.append(un(ee("distance"),"Dist\xE2ncia da dock",null,Sa("dockDist",.7,1.5,.05))),s.append(un(ee("move"),U("dockSnapSlot"),U("dockSnapDesc"),Ma("dockSnapSlot"))),s.append(Ro(U("perf")));let p=re("div","yt-seg");for(let[m,x]of[["low",U("qualityLow")],["medium",U("qualityMedium")],["high",U("qualityHigh")],["auto",U("qualityAuto")]]){let b=re("button","yt-seg-btn");b.textContent=x,b.setAttribute("aria-pressed",w.quality===m),b.onclick=()=>{w.quality=m,Fe(),Ae("quality"),[...p.children].forEach(M=>M.setAttribute("aria-pressed","false")),b.setAttribute("aria-pressed","true")},p.appendChild(b)}s.append(un(ee("settings"),U("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",p)),s.append(Ro(U("xrTitle")));let g=re("button","yt-link");g.append(un(ee("controller"),U("xrTitle"),U("xrSub"))),g.setAttribute("aria-expanded","false");let y=re("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||ob(y)},s.append(g,y);let f=re("div","yt-foot");return f.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(f),n.append(e,s),nn({id:"settings",title:U("settings"),node:n})}function LT(){let n=he.find(h=>h.id==="quick-settings");if(n)return tn(n),dm(ds()),n;let e=re("div","quick-settings");e.innerHTML=`<section class="qs-panel">
    <header class="qs-top">
      <div class="qs-system">
        <span class="qs-battery" data-q-battery>${ee("battery")}<span>--%</span></span>
        <span data-q-time>--:--</span><span class="qs-date" data-q-date></span>
      </div>
      <span class="qs-top-spacer"></span>
      <button class="qs-top-action" data-q-settings aria-label="Configura\xE7\xF5es NextVR">${ee("settings")}<span>Configura\xE7\xF5es</span></button>
      <button class="qs-repin" data-act="pin" aria-label="Voltar ao arco">${ee("crosshair")}</button>
      <button class="qs-close" data-q-close aria-label="Fechar">${ee("x")}</button>
    </header>
    <div class="qs-ranges">
      <label class="qs-range" title="Volume de m\xEDdia"><input data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume"><span>${ee("volume")}</span></label>
      <label class="qs-range" title="Brilho da tela"><input data-q-range="brightness" type="range" min="0" max="100" value="50" aria-label="Brilho"><span>${ee("sun")}</span></label>
    </div>
    <div class="qs-cards">
      <div class="qs-card"><div class="qs-card-line">${ee("wifi")}<span class="qs-card-title">Wi-Fi</span></div><span class="qs-card-sub" data-q-network>Verificando conex\xE3o</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("bluetooth")}<span class="qs-card-title">Bluetooth</span></div><span class="qs-card-sub">Gerenciado pelo Android</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("link")}<span class="qs-card-title">Link</span></div><span class="qs-card-sub">N\xE3o conectado</span></div>
      <div class="qs-card"><div class="qs-card-line">${ee("boundary")}<span class="qs-card-title">Limite</span></div><span class="qs-card-sub">Desativado</span></div>
    </div>
    <div class="qs-tools">
      <button class="qs-tool" data-q-env>${ee("scene")}<span>Vis\xE3o do ambiente</span></button>
      <button class="qs-tool" disabled title="O NextVR n\xE3o usa microfone">${ee("mic")}<span>Microfone</span></button>
      <button class="qs-tool" data-q-recenter>${ee("move")}<span>Redefinir visualiza\xE7\xE3o</span></button>
      <button class="qs-tool" data-q-night aria-pressed="false">${ee("sun")}<span>Modo noturno</span></button>
      <button class="qs-tool" data-q-dnd aria-pressed="false">${ee("moon")}<span>N\xE3o perturbe</span></button>
      <button class="qs-tool" disabled title="Espelhamento do sistema n\xE3o dispon\xEDvel nesta tela">${ee("cast")}<span>Espelhar</span></button>
      <button class="qs-tool" disabled>${ee("bug")}<span>Relatar problema</span></button>
      <button class="qs-tool" disabled>${ee("lock")}<span>Modo viagem</span></button>
      <button class="qs-tool" disabled>${ee("device")}<span>Remote Desktop</span></button>
    </div>
  </section>
  <aside class="qs-side" aria-label="Controles r\xE1pidos">
    <div class="qs-volume"><span class="qs-more"><i></i><i></i><i></i></span>
      <div class="qs-volume-slider-wrap"><input class="qs-v-range" data-q-range="volume" type="range" min="0" max="100" value="50" aria-label="Volume de m\xEDdia"></div>
      ${ee("volume")}
    </div>
    <button class="qs-side-button" data-q-mute aria-pressed="false" aria-label="Silenciar m\xEDdia">${ee("volumeoff")}</button>
    <button class="qs-side-button" data-q-night aria-pressed="false" aria-label="Modo noturno">${ee("moon")}</button>
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,p)=>{var g,y;try{let f=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(f)?Math.max(0,Math.min(100,f)):p}catch{return p}},a=ge?r("mediaVolumePercent",50):50,o=ge?r("brightnessPercent",50):50;a>0&&(i.lastVolume=a);function l(h,p){var y;let g=Math.max(0,Math.min(100,Number(p)||0));for(let f of s.filter(m=>m.dataset.qRange===h))f.value=String(g),f.style.setProperty("--fill",`${g}%`);h==="volume"&&(a=g,w.mediaVolume=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0),h==="brightness"&&((y=window.nextvrSetScreenBrightness)==null||y.call(window,g))}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function d(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",a),l("brightness",o),d();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var p,g,y,f;ge&&(h.dataset.qRange==="volume"&&((g=(p=window.NativeXR).setMediaVolumePercent)==null||g.call(p,a)),h.dataset.qRange==="brightness"&&((f=(y=window.NativeXR).setBrightnessPercent)==null||f.call(y,Number(h.value))),d(),c())});t.addEventListener("click",h=>{var g,y;let p=f=>h.target.closest(f);if(p("[data-q-close]")){ft(he.find(f=>f.id==="quick-settings"));return}if(p("[data-q-settings]")){Eu();return}if(p("[data-q-env]")){Au();return}if(p("[data-q-recenter]")){Hi();return}if(p("[data-q-night]")){i.night=!i.night,d(),c();return}if(p("[data-q-dnd]")){i.dnd=!i.dnd,d(),c();return}p("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(a>0&&(i.lastVolume=a),l("volume",0)):l("volume",i.lastVolume||50),ge&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,a)),d(),c())});let u=nn({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return dm(ds()),u}function dm(n=ds()){var a;let e=(a=he.find(o=>o.id==="quick-settings"))==null?void 0:a.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}ze("device-status",dm);var lb="nextvr.lib.recent.v1",PT=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},jl=PT(lb),IT=()=>{try{localStorage.setItem(lb,JSON.stringify(jl))}catch{}},cb=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],um={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},zn=n=>{let e=he.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null};function Zl(){var e,t,i,s,r,a,o,l;document.documentElement.dataset.robloxBlackEnv="1",(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,"black"),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!w.handDraw),ge&&!Mf()&&is();for(let c of he)c.id!=="roblox"&&c.setHidden(!0);qt(!1),sn(!0);let n=yn("roblox","Roblox","https://www.roblox.com/");return n&&(n.setHidden(!1),n.obj.position.copy(n.target),n.apply(),Ee.updateMatrixWorld(!0),tn(n)),(a=(r=ne).invalidate)==null||a.call(r),(l=(o=ne).render)==null||l.call(o,Ee,fe),n}ze("wins",()=>{var n,e,t,i,s,r;if(document.documentElement.dataset.robloxBlackEnv==="1"&&!he.some(a=>a.id==="roblox")){delete document.documentElement.dataset.robloxBlackEnv,(e=(n=window.NativeXR)==null?void 0:n.env)==null||e.call(n,w.env||"passthrough");for(let a of he)a.id!=="spatial-launcher"&&a.setHidden(!1);w.spatialLauncher?Ru():(sn(!1),qt(!0)),(i=(t=ne).invalidate)==null||i.call(t),(r=(s=ne).render)==null||r.call(s,Ee,fe)}});function Lu(){var l,c,d,u,h,p,g,y,f,m;let n=he.find(x=>x.id==="beat-saber");if(n)return n.setHidden(!1),tn(n),(c=(l=ne).invalidate)==null||c.call(l),(u=(d=ne).render)==null||u.call(d,Ee,fe),n;w.spatialLauncher||(qt(!1),sn(!0));let e=re("div","beat-saber-vr-stage");e.dataset.beatSaberVr="1",e.style.cssText="position:relative;width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#141838 0%,#060814 68%,#020308 100%);overflow:hidden;display:flex;flex-direction:column;color:#f8fafc",e.innerHTML=`
    <div class="bs-vr-hud" style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:rgba(6,8,20,.82);border-bottom:1px solid rgba(56,189,248,.28);z-index:3">
      <div style="display:flex;align-items:center;gap:12px">
        <img src="./beat-saber-logo.jpg" alt="Beat Saber" style="width:40px;height:40px;border-radius:10px;object-fit:cover;border:1px solid rgba(255,255,255,.22)">
        <div>
          <div style="display:flex;align-items:center;gap:8px">
            <strong style="font-size:16px;letter-spacing:.04em;color:#fff">BEAT SABER VR</strong>
            <span data-bs-vr-active="1" style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:999px;background:linear-gradient(90deg,#ef4444,#06b6d4);color:#fff">MODO VR ATIVO</span>
          </div>
          <div style="font-size:11px;color:#94a3b8">Sabres Neon Vermelho &amp; Azul sincronizados com Hand Tracking</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:16px">
        <div style="text-align:right">
          <div style="font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em">Combo / Score</div>
          <strong data-bs-score style="font-size:18px;color:#38bdf8;font-variant-numeric:tabular-nums">4x \xB7 1.280</strong>
        </div>
        <button type="button" class="st-btn" data-bs-exit style="background:rgba(239,68,68,.24);border:1px solid rgba(248,113,113,.45);color:#fecaca;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:800">SAIR DO VR</button>
      </div>
    </div>
    <div style="position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden">
      <canvas data-bs-canvas width="960" height="520" style="width:100%;height:100%;display:block"></canvas>
      <iframe src="https://moonrider.xyz/?mode=ride&vr=1" allow="xr-spatial-tracking; fullscreen; autoplay" style="position:absolute;inset:0;width:100%;height:100%;border:0;opacity:.92;pointer-events:auto" title="Beat Saber VR"></iframe>
    </div>
  `;let t=e.querySelector("[data-bs-canvas]"),i=(h=t==null?void 0:t.getContext)==null?void 0:h.call(t,"2d"),s=0,r=performance.now(),a=x=>{if(!i||!document.body.contains(e))return;let b=(x-r)*.001,M=t.width,S=t.height;i.fillStyle="#050712",i.fillRect(0,0,M,S),i.strokeStyle="rgba(56,189,248,0.28)",i.lineWidth=2;for(let P=-3;P<=3;P++)i.beginPath(),i.moveTo(M*.5+P*26,S*.28),i.lineTo(M*.5+P*155,S),i.stroke();let T=b*1.4%1,A=26+T*68,k=M*.5-50-T*120,v=S*.3+T*(S*.52);i.fillStyle="#ff1744",i.strokeStyle="#ff8a80",i.lineWidth=3,i.fillRect(k-A*.5,v-A*.5,A,A),i.strokeRect(k-A*.5,v-A*.5,A,A);let _=M*.5+50+T*120;i.fillStyle="#00e5ff",i.strokeStyle="#84ffff",i.fillRect(_-A*.5,v-A*.5,A,A),i.strokeRect(_-A*.5,v-A*.5,A,A),s=requestAnimationFrame(a)};s=requestAnimationFrame(a);let o=nn({id:"beat-saber",title:"Beat Saber VR",node:e,w:1020,h:640});return o!=null&&o.shell&&(o.shell.dataset.beatSaberVr="1"),o!=null&&o.el&&(o.el.dataset.beatSaberVr="1"),(p=e.querySelector("[data-bs-exit]"))==null||p.addEventListener("click",()=>{cancelAnimationFrame(s),ft(o),w.spatialLauncher||(sn(!1),qt(!0))}),tn(o),(y=(g=ne).invalidate)==null||y.call(g),(m=(f=ne).render)==null||m.call(f,Ee,fe),o}typeof window<"u"&&(window.nextvrOpenRobloxVr=Zl,window.nextvrOpenBeatSaberVr=Lu);var vm={youtube:()=>yn("youtube","YouTube","https://m.youtube.com/"),browser:()=>yn("browser",U("browser"),"https://duckduckgo.com/"),store:()=>Pu(),gallery:()=>ym(),settings:()=>Jl(),discord:()=>yn("discord","Discord","https://discord.com/app"),netflix:()=>yn("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>yn("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>yn("twitch","Twitch","https://www.twitch.tv/"),prime:()=>yn("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>yn("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>yn("instagram","Instagram","https://www.instagram.com/"),x:()=>yn("x","X","https://x.com/"),facebook:()=>yn("facebook","Facebook","https://www.facebook.com/"),telegram:()=>yn("telegram","Telegram","https://web.telegram.org/"),spotify:()=>yn("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>To(),"beat-vr":()=>Lu(),"roblox-vr":()=>Zl(),roblox:()=>Zl(),"hyper-vr":()=>Cu("browser","Hyper Dash VR","https://immersiveweb.dev/")},$l="apps",yu="home",Yl=null,NT=[["apps","Apps"],["horizon","Horizon+"]],DT=[{id:"gorilla-tag",name:"Gorilla Tag",cat:"games",rating:"4.9",reviews:"28 mil",tag:"VR \xB7 Hand Tracking",badge:"DESTAQUE",img:"./icons/gorilla-tag-logo.jpg",bg:"linear-gradient(135deg,#431407,#ea580c)"},{id:"beat-vr",name:"Beat Saber",cat:"games",rating:"4.9",reviews:"45 mil",tag:"Modo VR Imediato",badge:"VR",img:"./beat-saber-logo.jpg",bg:"linear-gradient(135deg,#450a0a,#0284c7)"},{id:"hyper-vr",name:"Hyper Dash VR",cat:"games",rating:"4.8",reviews:"9,4 mil",tag:"A\xE7\xE3o \xB7 Arena VR",badge:"VR",img:"./hyper-dash-logo.jpg",bg:"linear-gradient(135deg,#082f49,#0284c7)"},{id:"roblox-vr",name:"Roblox",cat:"games",rating:"4.8",reviews:"64 mil",tag:"Ambiente Preto \xB7 Hand Tracking",badge:"NOVO",img:"./roblox-logo.jpg",bg:"linear-gradient(135deg,#090d16,#1e293b)"},{id:"tiktok",name:"TikTok",cat:"apps",rating:"4.9",reviews:"52 mil",tag:"V\xEDdeos \xB7 Social",badge:"APP",img:"./tiktok-logo.jpg",bg:"linear-gradient(135deg,#09090b,#18181b)"},{id:"youtube",name:"YouTube VR",cat:"apps",rating:"4.8",reviews:"31 mil",tag:"V\xEDdeo 360\xB0 \xB7 4K",badge:"APP",img:"./icons/youtube.svg",bg:"linear-gradient(135deg,#450a0a,#dc2626)",isSvg:!0},{id:"discord",name:"Discord",cat:"apps",rating:"4.7",reviews:"19 mil",tag:"Comunidade \xB7 Voz",badge:"APP",img:"./icons/discord.svg",bg:"linear-gradient(135deg,#312e81,#4f46e5)",isSvg:!0},{id:"netflix",name:"Netflix",cat:"apps",rating:"4.8",reviews:"22 mil",tag:"Cinema VR",badge:"APP",img:"",bg:"linear-gradient(135deg,#450a0a,#991b1b)",textLogo:"N"}];function kT(){let n=re("div","st st-quest-store"),e=NT.map(([s,r])=>`<button class="st-tab" data-tab="${s}" aria-selected="${$l===s}" style="position:absolute;opacity:.01;pointer-events:none;width:1px;height:1px;overflow:hidden">${r}</button>`).join(""),t=[["home","P\xE1gina inicial"],["games","Jogos"],["apps","Apps"],["wishlist","Lista de desejos"]].map(([s,r])=>`<button type="button" class="st-quest-pill ${yu===s&&$l!=="horizon"?"on":""}" data-qtab="${s}">${r}</button>`).join(""),i=`
    <div class="st-top st-quest-top">
      ${e}
      <div class="st-quest-nav-left">
        <button type="button" class="st-quest-search-btn" data-openlib title="Pesquisar na Loja">${ee("search")}</button>
        <div class="st-quest-pills">${t}</div>
      </div>
      <div class="st-quest-nav-right">
        <button type="button" class="st-quest-icon-btn" data-openlib title="Biblioteca">${ee("store")}</button>
        <button type="button" class="st-ava" data-ava aria-label="Perfil"><img src="./icons/nextvr-chrome-n.png" alt="Perfil" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></button>
        <button type="button" class="st-x" data-x aria-label="Fechar">${ee("x")}</button>
      </div>
    </div>`;if($l==="horizon")i+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let s=!!w.gorillaInstalled,r=Yl!==null?`<span class="st-quest-card-btn" style="background:rgba(251,146,60,.24);color:#fdba74">Baixando... ${Yl}%</span>`:s?`<div style="display:flex;gap:6px;align-items:center">
             <span data-gorilla-installed="1" style="font-size:10px;font-weight:800;color:#4ade80;padding:3px 8px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Instalado</span>
             <button class="st-btn st-quest-card-btn" data-launch-gorilla style="background:#2563eb;color:#fff">ABRIR</button>
           </div>`:'<button class="st-btn st-quest-card-btn" data-install-gorilla style="background:#2563eb;color:#fff">BAIXAR</button>',o=DT.filter(l=>yu==="games"?l.cat==="games":yu==="apps"?l.cat==="apps":!0).map(l=>{let c=l.id==="gorilla-tag",d=l.textLogo?`<span style="font-size:38px;font-weight:900;color:#ef4444;letter-spacing:-.04em">${l.textLogo}</span>`:l.isSvg?`<img src="${l.img}" alt="${l.name}" style="width:48px;height:48px;object-fit:contain">`:`<img class="${c?"st-gorilla-logo":""}" src="${l.img}" alt="${l.name}" style="width:100%;height:100%;object-fit:cover;display:block">`,u=c?r:`<button type="button" class="st-btn st-quest-card-btn" data-store-launch="${l.id}" style="background:rgba(255,255,255,.12);color:#f8fafc">Abrir</button>`;return`
        <article class="st-quest-card ${c?"st-gorilla-card":""}" ${c?"data-store-gorilla":""} data-store-card="${l.id}">
          <div class="st-quest-card-art" style="background:${l.bg}" ${c?"":`data-store-launch="${l.id}"`}>
            ${d}
            <span class="st-quest-card-badge">${l.badge}</span>
          </div>
          <div class="st-quest-card-body">
            <div class="st-quest-card-title">${l.name}</div>
            <div class="st-quest-card-meta">
              <span class="st-quest-rating">${l.rating} \u2605 (${l.reviews})</span>
              <span class="st-quest-tag">${l.tag}</span>
            </div>
            <div class="st-quest-card-foot">
              <span class="st-quest-free">Gr\xE1tis</span>
              ${u}
            </div>
          </div>
        </article>`}).join("");i+=`
      <div class="st-quest-hero">
        <div class="st-quest-hero-copy">
          <span class="st-quest-hero-kicker">META QUEST \xB7 NEXTVR STORE</span>
          <h2 class="st-quest-hero-title">JOGOS E APPS EM DESTAQUE</h2>
          <p class="st-quest-hero-sub">Gorilla Tag (${fs.model}), Beat Saber em modo VR imediato, Hyper Dash VR, Roblox com ambiente escuro e TikTok.</p>
          <div class="st-quest-hero-actions">
            <button type="button" class="st-btn st-quest-hero-cta" data-store-launch="beat-vr">Jogar Beat Saber VR</button>
            <button type="button" class="st-btn st-quest-hero-sec" data-openlib>Abrir Biblioteca</button>
          </div>
        </div>
        <div class="st-quest-hero-collage">
          <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" class="st-quest-hero-tile" data-launch-gorilla>
          <img src="./beat-saber-logo.jpg" alt="Beat Saber" class="st-quest-hero-tile" data-store-launch="beat-vr">
          <img src="./hyper-dash-logo.jpg" alt="Hyper Dash VR" class="st-quest-hero-tile" data-store-launch="hyper-vr">
          <img src="./roblox-logo.jpg" alt="Roblox" class="st-quest-hero-tile" data-store-launch="roblox-vr">
          <img src="./tiktok-logo.jpg" alt="TikTok" class="st-quest-hero-tile" data-store-launch="tiktok">
        </div>
      </div>

      <div class="st-quest-section-head">
        <h3 class="st-quest-section-title">Navegar por tudo</h3>
        <span class="st-quest-sort-pill">Ordenar por: Mais populares \u2304</span>
      </div>

      <div class="st-quest-grid">
        ${o}
      </div>
      <p class="st-note" style="font-size:11px;opacity:.75;margin:8px 0 0">Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>`}return n.innerHTML=i,n.addEventListener("click",s=>{let r=o=>s.target.closest(o),a;if(a=r("[data-tab]")){$l=a.dataset.tab,ms();return}if(a=r("[data-qtab]")){$l="apps",yu=a.dataset.qtab,ms();return}if(r("[data-x]")){let o=he.find(l=>l.id==="store");o&&ft(o);return}if(r("[data-ava]")){et("Perfil NextVR");return}if(r("[data-openlib]")){bm();return}if(r("[data-install-gorilla]")){w.gorillaInstalled=1,Fe(),Aa("gorilla-tag",!0),li(),Yl=35,ms(),setTimeout(()=>{Yl=80,ms()},120),setTimeout(()=>{Yl=null,ms(),li(),et("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(r("[data-launch-gorilla]")){Aa("gorilla-tag"),To();return}if(a=r("[data-store-launch]")){let o=a.dataset.storeLaunch;Aa(o,!0);let l=vm[o];l&&l();return}}),n}function ms(){var t,i,s;let n=zn("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(kT()),n.querySelector(".st").scrollTop=e,(s=(i=ne).invalidate)==null||s.call(i)}function Pu(){var i,s,r,a;let n=he.find(o=>o.id==="store");if(n)return ms(),tn(n),(s=(i=ne).render)==null||s.call(i,Ee,fe),n;let e=re("div");e.style.cssText="height:100%";let t=nn({id:"store",title:"Store",node:e});return ms(),(a=(r=ne).render)==null||a.call(r,Ee,fe),t}var wu="recent",Yi="all",hm="",am=["all","apps","games","recent"],OT=n=>({all:U("libAll"),apps:U("apps"),games:U("libGames"),recent:U("recents")})[n]||U("libAll");function Aa(n,e){jl=[n,...jl.filter(t=>t!==n)].slice(0,40),IT(),e||li()}function UT(){var s;!yv().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&_v();let e=[...fp(),...cb.map(r=>({...r,kind:"app"})),...w.gorillaInstalled?[um]:[]];Yi==="games"&&(e=e.filter(r=>r.kind==="xr")),Yi==="games"&&w.gorillaInstalled&&(e=[...e,um]),Yi==="apps"&&(e=e.filter(r=>r.kind==="app")),Yi==="recent"&&(e=e.filter(r=>jl.includes(r.id)));let t=hm.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),wu==="az")return[...e].sort((r,a)=>r.name.localeCompare(a.name,"pt-BR"));let i=r=>{let a=jl.indexOf(r.id);return a<0?1e6:a};return[...e].sort((r,a)=>i(r)-i(a))}function FT(n){let e=n.imgUrl?`<img class="logo" src="${n.imgUrl}" alt="" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">`:n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${ee(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug&&!n.imgUrl?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"||n.imgUrl?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function BT(){var l;let n=UT(),e=re("div","lib"),t=OT(Yi),i=he.find(c=>c.id==="library"),s=Yi==="games"?U("libGamesEmpty"):Yi==="recent"?U("libRecentEmpty"):U("appNoResults"),r=(c,d,u)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${Le(d)}" title="${Le(d)}" aria-pressed="${Yi===c}">${ee(u)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${Le(U("apps"))}">
      ${r("all",U("libAll"),"appGrid")}
      ${r("games",U("libGames"),"controller")}
      ${r("recent",U("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",U("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${Le(U("apps"))}</h2>
        <div class="lib-searchbox">${ee("search")}
          <input class="lib-search open" data-q aria-label="${Le(U("searchApps"))}"
            placeholder="${Le(U("searchApps"))}" value="${Le(hm)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${Le(U("recents"))}">
          <span>${wu==="az"?"A\u2013Z":Le(U("recents"))}</span>${ee("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${Le(U("libFilter"))}">
          <span>${Le(U("libFilter"))} \xB7 ${Le(t)} <i>(${n.length})</i></span>${ee("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${Le(U("win360"))}"
          title="${Le(U("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${Le(U("close"))}" title="${Le(U("close"))}">${ee("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${Le(U("repin"))}" title="${Le(U("repin"))}">${ee("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?Sv(c):c.kind==="android"?rp(c.app):FT(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${Le(s)}</div>`}
        </div>
      </div>
    </section>`;let a=Av();a&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(a));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&(o.addEventListener("input",()=>{var d;hm=o.value,li(!0);let c=(d=zn("library"))==null?void 0:d.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),o.addEventListener("focus",()=>gi(!0,o))),e.addEventListener("click",c=>{let d=h=>c.target.closest(h),u;if(d("[data-lib-close]")){ft(he.find(h=>h.id==="library"));return}if(u=d("[data-lib-nav]")){Yi=u.dataset.libNav,li();return}if(d("[data-lib-curve]")){let h=he.find(p=>p.id==="library");h&&(h.setCurve(h.curve>0?0:w.win360K),li());return}if(d("[data-sort]")){wu=wu==="az"?"recent":"az",li();return}if(d("[data-filter]")){Yi=am[(am.indexOf(Yi)+1)%am.length],li();return}if(u=d("[data-android]")){let h=u.dataset.android;Jd(h),eu(h);return}if(u=d("[data-xr]")){let h=u.dataset.xr;vv()?wv():cp(h);return}if(u=d("[data-app]")){let h=[...cb,um].find(g=>g.id===u.dataset.app);if(!h)return;Aa(h.id);let p=vm[h.id];p?p():et(h.name+": sem endere\xE7o cadastrado");return}}),e}function li(n){var i,s,r;let e=zn("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(BT()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=ne).invalidate)==null||r.call(s)}var vu="Todos",om="",zT=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function HT(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function fm(n){var d;sp(!1);let e=((d=n.querySelector(".android-app-scroll"))==null?void 0:d.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=re("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${ee("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${ee("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${ee("refresh")}</button></div>`,t.querySelector(".android-search input").value=om;let i=uv(),s=re("div","android-categories"),r=zT.map(u=>`<button class="android-category" data-category="${u}" aria-pressed="${vu===u}">${u}</button>`).join("");s.innerHTML=r;let a=re("div","android-results");a.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let o=re("div","android-app-scroll"),l=re("div","android-app-grid"),c=()=>{let u=om.trim().toLocaleLowerCase("pt-BR"),h=fv().filter(g=>{let y=vu==="Todos"||HT(g)===vu,f=!u||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(u);return y&&f}),p=a.querySelector(".android-results-count");p&&(p.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>rp(g)).join(""):`<div class="android-empty">${U("noAndroidApps")}</div>`};c(),o.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,a,o),o.scrollTop=e,n.oninput=u=>{u.target.matches(".android-search input")&&(om=u.target.value,c())},n.onclick=u=>{let h=u.target.closest("[data-category]");if(h){vu=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(u.target.closest(".android-refresh")){sp(!0),c();return}let p=u.target.closest("[data-android]");p&&(Jd(p.dataset.android),eu(p.dataset.android))}}function Tu(){let n=zn("shizuku");if(n)return fm(n),tn(he.find(t=>t.id==="shizuku"));let e=re("div","android-launcher");return fm(e),nn({id:"shizuku",title:"Apps do Android",node:e})}function bm(){var i,s,r,a;let n=he.find(o=>o.id==="library");if(n)return li(),tn(n),(s=(i=ne).render)==null||s.call(i,Ee,fe),n;let e=re("div");e.style.cssText="height:100%";let t=nn({id:"library",title:U("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return li(),(a=(r=ne).render)==null||a.call(r,Ee,fe),t}var VT=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"environments",name:"Ambientes",bg:"linear-gradient(145deg,#8b5cf6,#4c1d95)",icon:"vision"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"#000000",imgUrl:"./tiktok-logo.jpg",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],GT=[{id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg",isGame:!0},{id:"roblox-vr",name:"Roblox VR",bg:"#090d16",imgUrl:"./roblox-logo.jpg",icon:"controller",isGame:!0,url:"https://www.roblox.com/"},{id:"beat-vr",name:"Beat Saber Web",bg:"#070814",imgUrl:"./beat-saber-logo.jpg",icon:"controller",isGame:!0,url:"https://moonrider.xyz/?mode=ride&vr=1"},{id:"hyper-vr",name:"Hyper Dash VR",bg:"#0a1426",imgUrl:"./hyper-dash-logo.jpg",icon:"controller",isGame:!0,url:"https://immersiveweb.dev/"},{id:"webxr-games",name:"WebXR Games",bg:"linear-gradient(145deg,#7c3aed,#4c1d95)",icon:"controller",isGame:!0,url:"https://constructarcade.com/"},{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#e50914,#7f1d1d)",slug:"netflix"},{id:"prime",name:"Prime Video",bg:"linear-gradient(145deg,#00a8e1,#0369a1)",slug:"prime"}],$i="all",Mu="recent",pm="",lm=!1,Qv='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',WT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',qT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',XT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',$T='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',YT='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function jT(){var r;let n=VT.map(a=>({kind:"builtin",...a})),e=GT.map(a=>({kind:"builtin",...a})),t=(((r=fp)==null?void 0:r())||[]).map(a=>({kind:"xr",pkg:a.packageName,name:a.label||a.packageName,iconUrl:a.icon||"",isGame:!0})),i;$i==="worlds"||$i==="downloads"?i=[...e.filter(a=>a.isGame),...t,...n]:$i==="apps"?i=[...n,...e.filter(a=>!a.isGame)]:i=[...n,...e,...t];let s=pm.trim().toLowerCase();return s&&(i=i.filter(a=>a.name.toLowerCase().includes(s))),Mu==="az"&&(i=[...i].sort((a,o)=>a.name.localeCompare(o.name,"pt-BR"))),i}function ZT(n){if(n.kind==="xr"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Le(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-glyph">${ee("controller")}</span><span class="spatial-app-init">${Le(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-xr="${Le(n.pkg)}" data-spatial-game="1" title="${Le(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--game">${i}</span>
      <span class="spatial-app-label">${Le(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}if(n.kind==="android"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${Le(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-init">${Le(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-android="${Le(n.pkg)}" title="${Le(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${i}</span>
      <span class="spatial-app-label">${Le(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}let e=n.imgUrl?`<img class="spatial-app-img" src="${Le(n.imgUrl)}" alt="" draggable="false">`:n.slug?`<img class="spatial-app-svg" src="./icons/${n.slug}.svg" alt="" draggable="false" onerror="this.remove()">`:n.icon?`<span class="spatial-app-glyph">${ee(n.icon)}</span>`:n.html||`<span class="spatial-app-init">${Le(n.name.slice(0,2))}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-builtin="${Le(n.id)}" ${n.isGame?'data-spatial-game="1"':""} ${n.url?`data-spatial-url="${Le(n.url)}"`:""} title="${Le(n.name)}">
    <span class="spatial-app-circle ${n.lightBg?"spatial-app-circle--light":""}" style="background:${n.bg}">${e}</span>
    <span class="spatial-app-label">${Le(n.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`}function KT(){let n=jT(),e=ds(),t=Math.round(Math.max(0,Math.min(1,e.batteryLevel??.9))*100),i=e.time&&e.time!=="--:--"?e.time:"9:48",s=w.profileAvatar?`<img src="${Le(w.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:ee("user"),r=w.env||"passthrough",a=!!w.mrDim,o=re("div","spatial-launcher-root");o.innerHTML=`
    <header class="spatial-hz-header">
      <div class="spatial-hz-top-status" aria-label="Status e Ambiente MR">
        <span class="spatial-hz-top-bat"><span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span><strong data-spatial-bat-top>${t}%</strong></span>
        <span class="spatial-hz-top-clock" data-spatial-clock-top>${Le(i)}</span>
        <span class="spatial-hz-top-wifi">${ee("wifi")}</span>
        <button type="button" class="spatial-hz-mrdim-circle ${a?"on":""}" data-spatial-act="mr-dim" title="${a?"Ambiente MR: Escuro (toque para Normal)":"Escurecer Ambiente MR em volta dos apps"}" aria-pressed="${a?"true":"false"}">
          ${ee("vision")}
        </button>
      </div>
      <h2 class="spatial-hz-title">Library</h2>
      <div class="spatial-hz-env-pills" aria-label="Ambientes Virtuais">
        <button type="button" class="spatial-hz-env-pill ${r==="passthrough"?"on":""}" data-spatial-env="passthrough" title="C\xE2mera Real (Passthrough)">C\xE2mera</button>
        <button type="button" class="spatial-hz-env-pill spatial-hz-mrdim-pill ${a?"on":""}" data-spatial-act="mr-dim" title="Alternar Ambiente MR Escuro ou Normal">${a?"MR Escuro: ON":"Escurecer MR"}</button>
        <button type="button" class="spatial-hz-env-pill ${r==="sunset"?"on":""}" data-spatial-env="sunset" title="Ambiente P\xF4r do Sol 360\xB0">Sunset</button>
        <button type="button" class="spatial-hz-env-pill ${r==="lagoon"?"on":""}" data-spatial-env="lagoon" title="Ambiente Lagoa 360\xB0">Lagoon</button>
        <button type="button" class="spatial-hz-env-pill ${r==="dark"?"on":""}" data-spatial-env="dark" title="Ambiente Escuro 360\xB0">Dark</button>
      </div>
      <label class="spatial-hz-search">
        ${ee("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${Le(pm)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${$i==="all"?"on":""}" data-spatial-nav="all">
          ${Qv}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${$i==="apps"?"on":""}" data-spatial-nav="apps">
          ${ee("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${$i==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${ee("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${$i==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${ee("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${$i==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${WT}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${ee("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb-wrap">
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--left" data-spatial-scroll="left" aria-label="Rolar para a esquerda" title="Rolar para a esquerda">\u2039</button>
        <div class="spatial-honeycomb" data-spatial-scroll-track role="list">
          ${n.map(ZT).join("")}
        </div>
        <button type="button" class="spatial-scroll-btn spatial-scroll-btn--right" data-spatial-scroll="right" aria-label="Rolar para a direita" title="Rolar para a direita">\u203A</button>
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${qT}<span>Filter: Insta...</span>${ee("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${XT}<span>Sort: ${Mu==="az"?"A\u2013Z":"Recen..."}</span>${ee("chevronDown")}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${ee("controller")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="C\xE2mera Traseira (Ambiente Real)">${ee("camera")}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${$T}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${Qv}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${YT}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${ee("wifi")}
          <span data-spatial-clock>${Le(i)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${t}%"></i></span>
          <span data-spatial-bat>${t}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${ee("notification")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configura\xE7\xF5es">${ee("sliders")}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${s}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
    </div>
  `;let l=o.querySelector("[data-spatial-search]");l&&l.addEventListener("input",()=>{pm=l.value,ji()});let c=o.querySelector('[data-spatial-builtin="browser"]'),d=o.querySelector('[data-browser-tab-menu="spatial"]'),u=null;if(c&&d){c.addEventListener("pointerdown",()=>{clearTimeout(u),u=setTimeout(()=>{var g,y,f,m,x,b;c.dataset.holdConsumed="1",d.hidden=!1,(y=(g=window.NativeXR)==null?void 0:g.click)==null||y.call(g),(m=(f=ne).invalidate)==null||m.call(f),(b=(x=ne).render)==null||b.call(x,Ee,fe)},2e3)});let p=()=>{clearTimeout(u),u=null};c.addEventListener("pointerup",p),c.addEventListener("pointercancel",p),c.addEventListener("pointerleave",p)}let h=o.querySelector("[data-spatial-scroll-track]");if(h){let p=0,g=0,y=!1;h.addEventListener("pointerdown",f=>{p=f.clientX,g=h.scrollLeft,y=!1}),h.addEventListener("pointermove",f=>{var x,b;if(f.buttons!==1)return;let m=f.clientX-p;Math.abs(m)>6&&(y=!0,h.scrollLeft=g-m,(b=(x=ne).invalidate)==null||b.call(x))}),h.addEventListener("wheel",f=>{var m,x;Math.abs(f.deltaY)>Math.abs(f.deltaX)&&(h.scrollLeft+=f.deltaY,f.preventDefault()),(x=(m=ne).invalidate)==null||x.call(m)},{passive:!1}),h.addEventListener("scroll",()=>{var f,m;return(m=(f=ne).invalidate)==null?void 0:m.call(f)},{passive:!0}),h._wasDragging=()=>y}return o.addEventListener("click",p=>{var T,A,k,v,_;let g=p.target.closest("[data-spatial-scroll]");if(g&&h){p.stopPropagation();let P=g.dataset.spatialScroll==="left"?-1:1;h.scrollLeft=Math.max(0,h.scrollLeft+P*240),(A=(T=ne).invalidate)==null||A.call(T),(v=(k=ne).render)==null||v.call(k,Ee,fe);return}let y=p.target.closest("[data-browser-opt]");if(y){p.stopPropagation();let P=y.dataset.browserOpt||"new-tab";d&&(d.hidden=!0),ab(P);return}let f=p.target.closest("[data-spatial-xr]");if(f){let P=f.dataset.spatialXr;P&&cp(P);return}let m=p.target.closest("[data-spatial-builtin]");if(m){if(m.dataset.holdConsumed==="1"){m.dataset.holdConsumed="0";return}d&&!d.hidden&&(d.hidden=!0);let P=m.dataset.spatialBuiltin;if(P==="environments"){Au();return}if(P==="shizuku"){Tu();return}if(P==="gorilla-tag"){To();return}if(P==="beat-vr"){Lu();return}if(P==="roblox-vr"||P==="roblox"){Zl();return}if(m.dataset.spatialUrl){Cu("browser",m.title||"Navegador",m.dataset.spatialUrl);return}let N=vm[P];N&&N();return}let x=p.target.closest("[data-spatial-android]");if(x){let P=x.dataset.spatialAndroid;Jd(P),eu(P);return}let b=p.target.closest("[data-spatial-env]");if(b){let P=b.dataset.spatialEnv||"passthrough";Ti(P),ji();return}let M=p.target.closest("[data-spatial-nav]");if(M){$i=M.dataset.spatialNav||"all",ji();return}let S=(_=p.target.closest("[data-spatial-act]"))==null?void 0:_.dataset.spatialAct;S==="settings"?Jl():S==="store"?Pu():S==="library"?bm():S==="recenter"?Hi():S==="sort"?(Mu=Mu==="az"?"recent":"az",ji()):S==="filter"?($i=$i==="downloads"?"all":"downloads",ji()):S==="env"?Au():S==="mr-dim"?(dl(!w.mrDim),ji(),et(w.mrDim?"Ambiente MR: Escuro":"Ambiente MR: Normal")):S==="close"&&Nu(!1)}),o}function ji(){var a,o,l,c,d,u;let n=zn("spatial-launcher");if(!n)return;let e=n.querySelector(".spatial-honeycomb"),t=(e==null?void 0:e.scrollTop)||0,i=(e==null?void 0:e.scrollLeft)||0,s=((o=(a=n.querySelector(".finger-hover"))==null?void 0:a.dataset)==null?void 0:o.spatialBuiltin)||null;n.innerHTML="",n.appendChild(KT());let r=n.querySelector(".spatial-honeycomb");r&&(r.scrollTop=t,r.scrollLeft=i),s&&((c=(l=n.querySelector(`[data-spatial-builtin="${s}"]`))==null?void 0:l.classList)==null||c.add("finger-hover")),(u=(d=ne).invalidate)==null||u.call(d)}var mm=!1,gm=!1,eb=0;function Ru(){var e,t,i,s;if(lm)return;let n=he.find(r=>r.id==="spatial-launcher");if(!(!w.spatialLauncher||!n)){lm=!0;try{let r=he.filter(o=>o.id!=="spatial-launcher"&&o.id!=="fist-menu"&&!o.onboarding&&!o.hidden);if(r.length>1){let o=r[r.length-1];for(let l of r)l!==o&&ft(l)}r.length!==eb&&(mm=!1,gm=!1,eb=r.length);let a=mm||r.length>0&&!gm;n.hidden!==a&&(n.setHidden(a),(t=(e=ne).invalidate)==null||t.call(e),(s=(i=ne).render)==null||s.call(i,Ee,fe))}finally{lm=!1}}}ze("wins",Ru);ze("env",()=>{zn("spatial-launcher")&&ji(),zn("fist-menu")&&Co()});ze("mr-dim",()=>{zn("spatial-launcher")&&ji(),zn("fist-menu")&&Co()});function xm(){var t,i,s,r,a,o,l,c;if(w.spatialLauncher||he.some(d=>d.id==="spatial-launcher")){let d=he.find(h=>h.id==="spatial-launcher");d||(w.spatialLauncher=1,d=Iu());let u=!d.hidden;return mm=u,gm=!u,d.setHidden(u),(i=(t=ne).invalidate)==null||i.call(t),(r=(s=ne).render)==null||r.call(s,Ee,fe),et(u?"Spatial App ocultado":"Spatial App exibido"),!u}let n=document.querySelector(".dock"),e=!n||n.hidden||getComputedStyle(n).display==="none";return e?(sn(!1),qt(!0),et("Dock exibida")):(qt(!1),sn(!0),et("Dock ocultada")),(o=(a=ne).invalidate)==null||o.call(a),(c=(l=ne).render)==null||c.call(l,Ee,fe),e}window.nextvrToggleSpatialAndDockFromGesture=xm;function Iu(){var i,s,r,a,o,l,c,d;let n=he.find(u=>u.id==="spatial-launcher");if(n)return ji(),Ru(),(s=(i=ne).invalidate)==null||s.call(i),(a=(r=ne).render)==null||a.call(r,Ee,fe),n;w.env="passthrough",zi(!0);let e=re("div","spatial-launcher-host"),t=nn({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,ji(),Ru(),(l=(o=ne).invalidate)==null||l.call(o),(d=(c=ne).render)==null||d.call(c,Ee,fe),t}function JT(){let n=w.env||"passthrough",e=re("div","fist-quick-menu");return e.innerHTML=`
    <div class="fist-menu-head">
      <div class="fist-menu-badge">${ee("crosshair")}</div>
      <div>
        <h3 class="fist-menu-title">Menu R\xE1pido</h3>
        <p class="fist-menu-sub">Atalho de soco (2s) \xB7 Escolha uma a\xE7\xE3o</p>
      </div>
    </div>

    <div class="fist-menu-actions">
      <button type="button" class="fist-menu-btn fist-menu-btn--primary" data-fist-act="recenter">
        ${ee("move")}
        <div>
          <strong>Recentrar Dock e Vis\xE3o</strong>
          <small>Traga a dock e janelas para a dire\xE7\xE3o do olhar</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn" data-fist-act="environments">
        ${ee("vision")}
        <div>
          <strong>Entrar em Ambiente Virtual</strong>
          <small>Abrir painel completo de ambientes 360\xB0</small>
        </div>
      </button>

      <button type="button" class="fist-menu-btn ${w.mrDim?"fist-menu-btn--primary":""}" data-fist-act="mr-dim">
        ${ee("camera")}
        <div>
          <strong>Ambiente MR: ${w.mrDim?"Escuro (Ativo)":"Normal"}</strong>
          <small>Escurecer o ambiente real em volta dos apps flutuantes</small>
        </div>
      </button>
    </div>

    <div class="fist-menu-env-section">
      <span class="fist-menu-section-lbl">Trocar Ambiente Agora</span>
      <div class="fist-menu-env-grid">
        <button type="button" class="fist-env-chip ${n==="passthrough"?"on":""}" data-fist-env="passthrough">
          ${ee("camera")}<span>C\xE2mera Real</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="sunset"?"on":""}" data-fist-env="sunset">
          ${ee("vision")}<span>Sunset 360\xB0</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="lagoon"?"on":""}" data-fist-env="lagoon">
          ${ee("vision")}<span>Lagoon 360\xB0</span>
        </button>
        <button type="button" class="fist-env-chip ${n==="dark"?"on":""}" data-fist-env="dark">
          ${ee("vision")}<span>Escuro 360\xB0</span>
        </button>
      </div>
    </div>

    <div class="fist-menu-footer-row">
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-dock">
        ${ee("appGrid")}<span>Mostrar / Ocultar Dock</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="toggle-spatial">
        ${ee("maximize")}<span>${w.spatialLauncher?"Modo Dock":"Apps Flutuantes"}</span>
      </button>
      <button type="button" class="fist-menu-sec-btn" data-fist-act="settings">
        ${ee("settings")}<span>Ajustes</span>
      </button>
    </div>
  `,e.addEventListener("click",t=>{let i=t.target.closest("[data-fist-env]");if(i){let a=i.dataset.fistEnv||"passthrough";Ti(a),Co(),et("Ambiente: "+a);return}let s=t.target.closest("[data-fist-act]");if(!s)return;let r=s.dataset.fistAct;r==="recenter"?(w.spatialLauncher||(sn(!1),qt(!0)),Hi(),ft("fist-menu")):r==="environments"?(ft("fist-menu"),Au()):r==="mr-dim"?(dl(!w.mrDim),Co(),et(w.mrDim?"Ambiente MR: Escuro":"Ambiente MR: Normal")):r==="toggle-dock"?(xm(),ft("fist-menu")):r==="toggle-spatial"?(ft("fist-menu"),Nu(!w.spatialLauncher)):r==="settings"?(ft("fist-menu"),Jl()):r==="close"&&ft("fist-menu")}),e}function Co(){var e,t;let n=zn("fist-menu");n&&(n.innerHTML="",n.appendChild(JT()),(t=(e=ne).invalidate)==null||t.call(e))}function QT(){var i,s,r,a,o,l,c,d;let n=he.find(u=>u.id==="fist-menu");if(n)return n.setHidden(!1),Co(),tn(n),(s=(i=ne).invalidate)==null||s.call(i),(a=(r=ne).render)==null||a.call(r,Ee,fe),n;let e=re("div","fist-quick-menu-host"),t=nn({id:"fist-menu",title:"Menu R\xE1pido",node:e,w:520,h:430});return Co(),(l=(o=ne).invalidate)==null||l.call(o),(d=(c=ne).render)==null||d.call(c,Ee,fe),t}window.nextvrOpenFistQuickMenu=QT;var ei=null;function eR(){let n=document.createElement("div");n.id="left-hand-quick-menu",n.className="lh-quick-menu lh-quick-menu--floating",n.dataset.floatingWindow="1",n.hidden=!1;let e=Math.max(0,Math.min(100,Number(w.mediaVolume??70)||70)),t=Math.max(10,Math.min(100,Number(w.brightness??80)||80)),i=w.mrDim?80:20;return n.innerHTML=`
    <div class="lh-quick-grid">
      <div class="lh-apps-col">
        <button type="button" class="lh-app-tile" data-lh-app="browser" title="Browser">
          <span class="lh-app-icon lh-app-icon--browser">${ee("compass")}</span>
        </button>
        <button type="button" class="lh-app-tile" data-lh-app="youtube" title="YouTube">
          <img src="./icons/youtube.svg" alt="YouTube" class="lh-app-img" draggable="false"/>
        </button>
        <button type="button" class="lh-app-tile" data-lh-app="roblox" title="Roblox">
          <img src="./icons/roblox-logo.png" alt="Roblox" class="lh-app-img" draggable="false"/>
        </button>
        <button type="button" class="lh-app-tile" data-lh-app="store" title="Store">
          <span class="lh-app-icon lh-app-icon--store">${ee("store")}</span>
        </button>
        <button type="button" class="lh-round-btn lh-home-btn" data-lh-act="home" title="In\xEDcio">
          ${ee("home")}
        </button>
      </div>
      <div class="lh-sliders-col">
        <div class="lh-sliders-row">
          <div class="lh-vslider-pill" title="Volume">
            <input type="range" min="0" max="100" value="${e}" class="lh-vslider-input" data-lh-slider="volume" aria-label="Volume" style="--fill:${e}%"/>
            <span class="lh-vslider-ico">${ee("volume")}</span>
          </div>
          <div class="lh-vslider-pill" title="Brilho">
            <input type="range" min="10" max="100" value="${t}" class="lh-vslider-input" data-lh-slider="brightness" aria-label="Brilho" style="--fill:${t}%"/>
            <span class="lh-vslider-ico">${ee("sun")}</span>
          </div>
          <div class="lh-vslider-pill" title="Escurecimento MR">
            <input type="range" min="0" max="100" value="${i}" class="lh-vslider-input" data-lh-slider="dim" aria-label="Ambiente Escuro" style="--fill:${i}%"/>
            <span class="lh-vslider-ico">${ee("vision")}</span>
          </div>
        </div>
        <div class="lh-bottom-actions">
          <button type="button" class="lh-round-btn lh-hands-btn ${w.fingerTouch!==0?"on":""}" data-lh-act="hands" title="Toque Direto">
            ${ee("hand")}
          </button>
          <button type="button" class="lh-round-btn lh-close-btn" data-lh-act="close" title="Fechar">
            \u2715
          </button>
        </div>
      </div>
    </div>
  `,n.querySelectorAll("[data-lh-slider]").forEach(s=>{let r=a=>{var c,d,u,h,p;a.stopPropagation();let o=s.dataset.lhSlider,l=Math.max(0,Math.min(100,Number(s.value)||0));s.style.setProperty("--fill",`${l}%`),o==="volume"?(w.mediaVolume=l,Fe(w),(d=(c=window.NativeXR)==null?void 0:c.setMediaVolumePercent)==null||d.call(c,l)):o==="brightness"?(u=window.nextvrSetScreenBrightness)==null||u.call(window,l):o==="dim"&&dl(l>=50),(p=(h=ne).invalidate)==null||p.call(h)};s.addEventListener("input",r),s.addEventListener("change",r),s.addEventListener("pointerdown",a=>a.stopPropagation())}),n.querySelectorAll(".lh-vslider-pill").forEach(s=>{s.addEventListener("click",r=>{let a=s.querySelector("[data-lh-slider]");if(!a||r.target===a)return;let o=s.getBoundingClientRect();if(o.height>8&&Number.isFinite(r.clientY)){let l=Math.max(0,Math.min(1,1-(r.clientY-o.top)/o.height)),c=Number(a.min)||0,d=Number(a.max)||100;a.value=String(Math.round(c+l*(d-c))),a.dispatchEvent(new Event("input",{bubbles:!0})),a.dispatchEvent(new Event("change",{bubbles:!0}))}})}),n.addEventListener("click",s=>{var l,c,d,u,h,p,g,y,f,m;let r=s.target.closest("[data-lh-app]");if(r){s.stopPropagation();let x=r.dataset.lhApp;Su(!1),x==="browser"?browserApp():x==="youtube"?yn("youtube"):x==="roblox"?yn("roblox"):x==="store"&&Pu(),(c=(l=ne).invalidate)==null||c.call(l),(u=(d=ne).render)==null||u.call(d,Ee,fe);return}let a=s.target.closest("[data-lh-act]");if(!a)return;s.stopPropagation();let o=a.dataset.lhAct;o==="close"?Su(!1):o==="home"?(Su(!1),xm()):o==="hands"&&(w.fingerTouch=w.fingerTouch===0?1:0,Fe(w),a.classList.toggle("on",w.fingerTouch!==0),(p=(h=window.NativeXR)==null?void 0:h.setFingerTouch)==null||p.call(h,w.fingerTouch!==0),et(w.fingerTouch!==0?"Toque Direto: Ativo":"Toque Direto: Desativado")),(y=(g=ne).invalidate)==null||y.call(g),(m=(f=ne).render)==null||m.call(f,Ee,fe)}),n}function tR(){if(!ei)return;let n=Math.max(0,Math.min(100,Number(w.mediaVolume??70)||70)),e=Math.max(10,Math.min(100,Number(w.brightness??80)||80)),t=w.mrDim?80:20,i=ei.querySelector('[data-lh-slider="volume"]');i&&(i.value=String(n),i.style.setProperty("--fill",`${n}%`));let s=ei.querySelector('[data-lh-slider="brightness"]');s&&(s.value=String(e),s.style.setProperty("--fill",`${e}%`));let r=ei.querySelector('[data-lh-slider="dim"]');r&&(r.value=String(t),r.style.setProperty("--fill",`${t}%`));let a=ei.querySelector('[data-lh-act="hands"]');a&&a.classList.toggle("on",w.fingerTouch!==0)}function Su(n=void 0){var s,r,a,o,l,c,d,u;let e=he.find(h=>h.id==="left-quick-menu"),t=!!(e&&!e.hidden&&ei&&!ei.hidden);if(!(typeof n=="boolean"?n:!t))return ei&&(ei.hidden=!0),e&&ft("left-quick-menu"),(r=(s=ne).invalidate)==null||r.call(s),(o=(a=ne).render)==null||o.call(a,Ee,fe),!1;if(ei||(ei=eR()),ei.hidden=!1,tR(),e){let h=zn("left-quick-menu");h&&!h.contains(ei)&&(h.innerHTML="",h.appendChild(ei)),e.setHidden(!1),e.resizeScale=1.18,e.shell.dataset.attachedHand="left",e.apply(),tn(e)}else{let h=re("div","lh-quick-menu-host");h.appendChild(ei);let p=nn({id:"left-quick-menu",title:"Controle de Brilho e Som",node:h,w:560,h:410,chrome:!1,resizable:!1,free:!0,at:{x:-.22,y:1.46,z:-1.16}});p&&(p.resizeScale=1.18,p.shell.dataset.attachedHand="left",p.apply())}return(c=(l=ne).invalidate)==null||c.call(l),(u=(d=ne).render)==null||u.call(d,Ee,fe),!0}window.nextvrToggleLeftHandQuickMenu=Su;function Nu(n){var e,t,i,s;if(w.spatialLauncher=n?1:0,w.spatialLauncher&&(w.env="passthrough",zi(!0)),Fe(w),w.spatialLauncher){for(let r of[...he])r.id!=="spatial-launcher"&&!r.onboarding&&ft(r);sn(!0),qt(!1),Iu()}else{let r=he.find(a=>a.id==="spatial-launcher");r&&ft(r),sn(!1),!Ea&&!ps&&!Zs&&qt(!0),(t=(e=ne).invalidate)==null||t.call(e),(s=(i=ne).render)==null||s.call(i,Ee,fe)}}ze("spatialLauncher",n=>Nu(n));ze("device-status",n=>{let e=zn("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var kr=Object.freeze({compass:ee("compass"),store:ee("store"),people:ee("people"),camera:ee("camera"),gear:ee("settings"),play:ee("play"),shizuku:ee("shizuku"),vision:ee("vision")});function nR(){zi(w.env!=="passthrough")}function db(){let n=jd("virtual-environment");if(!n)return;let e=w.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${U("envVirtual")} \xB7 ${e?U("on"):U("off")}`}function Du(){Xy([{kind:"avatar",id:"profile",label:U("profile"),run:oR},{kind:"status",id:"status",label:U("settings"),run:LT},{kind:"tool",id:"virtual-environment",label:U("envVirtual"),svg:kr.vision,run:nR},{kind:"spacer"},{id:"browser",win:"browser",label:U("browser"),svg:kr.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>yn("browser",U("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:U("store"),svg:kr.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Pu},{id:"discord",win:"discord",label:"Discord",svg:kr.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>yn("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:U("gallery"),svg:kr.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:ym},{id:"settings",win:"control-center",label:U("settings"),svg:kr.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Jl},{id:"youtube",win:"youtube",label:"YouTube",svg:kr.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>yn("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:U("shizuku"),svg:kr.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:Tu},{id:"library",win:"library",launcher:!0,label:U("apps"),run:bm}]),db()}ze("env",db);ze("lang",Du);function iR(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=hv(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=re("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}pv();Tv();xv();ze("appsState",()=>{iR(),ub()});ze("xr",()=>{ub();let n=zn("settings");n!=null&&n.querySelector("[data-xr-page]")&&ob(n.querySelector("[data-xr-page]"))});var cm=0;function ub(){cm||(cm=setTimeout(()=>{cm=0,zn("library")&&li(),zn("spatial-launcher")&&ji();let n=zn("shizuku");n&&fm(n)},500))}var sR=document.getElementById("boot"),z2=document.getElementById("bootGo"),Zs=null;sR.hidden=!0;function hb(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function fb(n,e,t=!1){let i=re("div",t?"langwin slim":"langwin"),s=a=>wd(a).label;return(()=>{let a=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${a}
        <div class="lang-options" role="list">${cl.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${U("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${U("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function rR(){var e,t;let n=nn({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:fb(w.lang||hb(),aR)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}ze("handframe",n=>{let e=Zs==null?void 0:Zs.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function aR(n){if(!Zs)return;na(n),Zs&&(ft(Zs),Zs=null),qt(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=ia(),t=w.handsOn?is():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Hi(),280)}var Ea=null,ps=null,ku=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function pb(){var e;if(w.gorillaInstalled=1,Fe(w),Aa("gorilla-tag",!0),li(),ms(),ku&&ge&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){w.autoLaunchGorilla=1,Fe(w),Kl();return}Kl(),To()}ze("gorilla-installed",()=>{w.gorillaInstalled=1,Fe(w),Aa("gorilla-tag",!0),li(),ms()});function mb(){ps&&ps.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(xp({fullscreen:!0,onStart:Kl,onLaunchGorilla:pb,getStatus:ds})),document.body.appendChild(n),ps=n,n}function gb(){return nn({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:xp({fullscreen:!1,onStart:Kl,onLaunchGorilla:pb,getStatus:ds})})}async function Kl(n=!1){var r,a,o,l,c,d,u,h,p,g,y,f,m;let e=n===!0;w.lang||na(hb()||"pt");let t=!e&&ku&&ge&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(ps&&!t&&(ps.remove(),ps=null),Ea?(ft(Ea),Ea=null):ft("entry-menu"),w.spatialLauncher){for(let x of[...he])x.id!=="spatial-launcher"&&!x.onboarding&&ft(x);sn(!0),qt(!1),Iu()}else ft("spatial-launcher"),sn(!1),qt(!0);if(document.getElementById("stat").hidden=!1,ge||(document.getElementById("perm").hidden=!1),(o=(a=window.NativeXR)==null?void 0:a.handVisuals)==null||o.call(a,!!w.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!w.wideCamera),e||(u=(d=window.NativeXR)==null?void 0:d.startVrSession)==null||u.call(d,JSON.stringify(w)),(p=(h=ne).invalidate)==null||p.call(h),(y=(g=ne).render)==null||y.call(g,Ee,fe),t){(m=(f=ps==null?void 0:ps.querySelector(".entry-menu-root"))==null?void 0:f.resetToHome)==null||m.call(f);return}let i=ia(),s=w.handsOn?is():Promise.resolve(!1);await Promise.allSettled([i,s]),ge||setTimeout(()=>Hi(),280)}function oR(){var n;return ge&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(qt(!1),document.getElementById("stat").hidden=!0,ku||!ge?mb():(Ea=gb(),Ea))}var tb=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,a,o,l,c,d;if(n)try{let u=typeof n=="string"?JSON.parse(n):n;u.handDraw!==void 0&&(w.handDraw=u.handDraw?1:0),u.showFps!==void 0&&(w.showFps=u.showFps?1:0),u.mediaVolume!==void 0&&(w.mediaVolume=u.mediaVolume),u.brightness!==void 0&&(w.brightness=u.brightness),u.quality!==void 0&&(w.quality=u.quality,Ae("quality")),u.wideCamera!==void 0&&(w.wideCamera=u.wideCamera?1:0),u.spatialLauncher!==void 0&&(w.spatialLauncher=u.spatialLauncher?1:0),u.dockSnapSlot!==void 0&&(w.dockSnapSlot=u.dockSnapSlot?1:0),u.fingerTouch!==void 0&&(w.fingerTouch=u.fingerTouch?1:0),u.mrDim!==void 0&&dl(!!u.mrDim),u.sixdof!==void 0&&(w.sixdof=u.sixdof?1:0,w.sixdof||Jt.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,w.sixdof!==0)),u.gorillaInstalled!==void 0&&(w.gorillaInstalled=u.gorillaInstalled?1:0,w.gorillaInstalled&&(Aa("gorilla-tag",!0),li(),ms())),u.profileName!==void 0&&(w.profileName=u.profileName),u.profileAvatar!==void 0&&(w.profileAvatar=u.profileAvatar),u.lang&&na(u.lang),!w.spatialLauncher&&u.entryEnvChosen&&u.env&&u.env!=="passthrough"?Ti(u.env):(w.env="passthrough",zi(!0));let h=!!u.autoLaunchGorilla;w.autoLaunchGorilla&&(w.autoLaunchGorilla=0),Fe(w),Du(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!w.handDraw),(a=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||a.call(r,!!w.wideCamera),(l=(o=window.NativeXR)==null?void 0:o.setFingerTouch)==null||l.call(o,w.fingerTouch!==0),h&&setTimeout(()=>To(),120)}catch{}else ge&&(zi(!0),(d=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||d.call(c,w.fingerTouch!==0));Kl(!0),tb||(tb=!0,setTimeout(()=>Hi(),220))};ze("profile-updated",()=>Du());document.getElementById("btnGyro").onclick=()=>ia();document.getElementById("btnHand").onclick=()=>Mf()?Sf():is();ze("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});ze("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Du();var nb=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),bu,ib,xu,sb,_u,rb;ku?(qt(!1),document.getElementById("stat").hidden=!0,(ib=(bu=window.NativeXR)==null?void 0:bu.handVisuals)==null||ib.call(bu,!!w.handDraw),mb()):nb==="language"?(qt(!1),document.getElementById("stat").hidden=!0,Zs=rR()):nb==="skip"?(w.spatialLauncher?(sn(!0),qt(!1),Iu()):(sn(!1),qt(!0)),ge&&((sb=(xu=window.NativeXR)==null?void 0:xu.wideCamera)==null||sb.call(xu,!!w.wideCamera),ia(),w.handsOn&&is()),document.getElementById("perm").hidden=!1,setTimeout(()=>Hi(),280)):(qt(!1),document.getElementById("stat").hidden=!0,ge&&((rb=(_u=window.NativeXR)==null?void 0:_u.handVisuals)==null||rb.call(_u,!!w.handDraw),ia(),w.handsOn&&is()),Ea=gb());ge&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=ne).invalidate)==null||e.call(n),ia(),w.handsOn&&is()},window.nextvrSuspend=()=>{Sf()},ze("hands",()=>{document.getElementById("perm").hidden=!0}));ze("game:settings",()=>Jl());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
