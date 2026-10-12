(()=>{var Jd=0,_l=1,Kd=2;var kh=1,jd=2,qn=3,vi=0,Qt=1,Yn=2;var mi=0,ws=1,vl=2,xl=3,yl=4,Qd=5,Fi=100,ef=101,tf=102,bl=103,Ml=104,nf=200,sf=201,rf=202,af=203,Oo=204,Fo=205,of=206,cf=207,lf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,gf=0,_f=1,vf=2,ea=3,xf=4,yf=5,bf=6,Mf=7,Hh=0,Sf=1,wf=2,gi=0,Ef=1,Af=2,Tf=3,Rf=4,Cf=5,Pf=6;var Vh=300,Ts=301,Rs=302,zo=303,Bo=304,ba=306,ko=1e3,Mn=1001,Ho=1002,Xt=1003,Sl=1004;var ao=1005;var dn=1006,Lf=1007;var Ks=1008;var _i=1009,If=1010,Df=1011,_c=1012,Gh=1013,di=1014,fi=1015,js=1016,Wh=1017,Xh=1018,Bi=1020,Nf=1021,Sn=1023,Uf=1024,Of=1025,ki=1026,Cs=1027,Ff=1028,qh=1029,zf=1030,Yh=1031,$h=1033,oo=33776,co=33777,lo=33778,ho=33779,wl=35840,El=35841,Al=35842,Tl=35843,Zh=36196,Rl=37492,Cl=37496,Pl=37808,Ll=37809,Il=37810,Dl=37811,Nl=37812,Ul=37813,Ol=37814,Fl=37815,zl=37816,Bl=37817,kl=37818,Hl=37819,Vl=37820,Gl=37821,uo=36492,Wl=36494,Xl=36495,Bf=36283,ql=36284,Yl=36285,$l=36286;var ta=2300,na=2301,fo=2302,Zl=2400,Jl=2401,Kl=2402;var Jh=3e3,Hi=3001,kf=3200,Hf=3201,Vf=0,Gf=1,fn="",It="srgb",Jn="srgb-linear",vc="display-p3",Ma="display-p3-linear",ia="linear",ct="srgb",sa="rec709",ra="p3";var ss=7680;var jl=519,Wf=512,Xf=513,qf=514,Kh=515,Yf=516,$f=517,Zf=518,Jf=519,Ql=35044;var eh="300 es",Vo=1035,$n=2e3,aa=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,Ys=Math.PI/180,Qs=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function xc(n,e){return(n%e+e)%e}function Kf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function jf(n,e,t){return n!==e?(t-n)/(e-n):0}function $s(n,e,t){return(1-t)*n+t*e}function Qf(n,e,t,i){return $s(n,e,1-Math.exp(-t*i))}function ep(n,e=1){return e-Math.abs(xc(n,e*2)-e)}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ip(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sp(n,e){return n+Math.random()*(e-n)}function rp(n){return n*(.5-Math.random())}function ap(n){n!==void 0&&(th=n);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function op(n){return n*Ys}function cp(n){return n*Qs}function Go(n){return(n&n-1)===0&&n!==0}function lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var jh={DEG2RAD:Ys,RAD2DEG:Qs,generateUUID:Ds,clamp:qt,euclideanModulo:xc,mapLinear:Kf,inverseLerp:jf,lerp:$s,damp:Qf,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:ap,degToRad:op,radToDeg:cp,isPowerOfTwo:Go,ceilPowerOfTwo:lp,floorPowerOfTwo:oa,setQuaternionFromProperEuler:hp,normalize:Gt,denormalize:ys},Ye=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=s[0],f=s[3],p=s[6],w=s[1],x=s[4],R=s[7],E=s[2],A=s[5],T=s[8];return r[0]=o*_+a*w+c*E,r[3]=o*f+a*x+c*A,r[6]=o*p+a*R+c*T,r[1]=l*_+h*w+u*E,r[4]=l*f+h*x+u*A,r[7]=l*p+h*R+u*T,r[2]=d*_+m*w+g*E,r[5]=d*f+m*x+g*A,r[8]=d*p+m*R+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},po=new Ve;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function up(){let n=ca("canvas");return n.style.display="block",n}var nh={};function Zs(n){n in nh||(nh[n]=!0,console.warn(n))}var ih=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lr={[Jn]:{transfer:ia,primaries:sa,toReference:n=>n,fromReference:n=>n},[It]:{transfer:ct,primaries:sa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ma]:{transfer:ia,primaries:ra,toReference:n=>n.applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih)},[vc]:{transfer:ct,primaries:ra,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},dp=new Set([Jn,Ma]),tt={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Lr[e].toReference,s=Lr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Lr[n].primaries},getTransfer:function(n){return n===fn?ia:Lr[n].transfer}};function Es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rs,la=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=ca("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Es(t[i]/255)*255):t[i]=Es(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fp=0,ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(go(s[o].image)):r.push(go(s[o]))}else r=go(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?la.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pp=0,wn=class n extends xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Mn,s=Mn,r=dn,o=Ks,a=Sn,c=_i,l=n.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ds(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hi?It:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Hi:Jh}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?It:fn}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vh;wn.DEFAULT_ANISOTROPY=1;var Dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,R=(m+1)/2,E=(p+1)/2,A=(h+d)/4,T=(u+_)/4,k=(g+f)/4;return x>R&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=T/i):R>E?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=A/s,r=k/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=T/r,s=k/r),this.set(i,s,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hi?It:fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Wo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ua=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xo=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let E=Math.sqrt(x),A=Math.atan2(E,p*w);f=Math.sin(f*A)/E,a=Math.sin(a*A)/E}let R=a*w;if(c=c*f+d*R,l=l*f+m*R,h=h*f+g*R,u=u*f+_*R,f===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new L,rh=new Zt,Vi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Dr.subVectors(this.max,Gs),as.subVectors(e.a,Gs),os.subVectors(e.b,Gs),cs.subVectors(e.c,Gs),oi.subVectors(os,as),ci.subVectors(cs,os),Ii.subVectors(as,cs);let t=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-Ii.z,Ii.y,oi.z,0,-oi.x,ci.z,0,-ci.x,Ii.z,0,-Ii.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-Ii.y,Ii.x,0];return!vo(t,as,os,cs,Dr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,as,os,cs,Dr))?!1:(Nr.crossVectors(oi,ci),t=[Nr.x,Nr.y,Nr.z],vo(t,as,os,cs,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,Ir=new Vi,as=new L,os=new L,cs=new L,oi=new L,ci=new L,Ii=new L,Gs=new L,Dr=new L,Nr=new L,Di=new L;function vo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=i.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var mp=new Vi,Ws=new L,xo=new L,er=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(xo)),this.expandByPoint(Ws.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new L,yo=new L,Ur=new L,li=new L,bo=new L,Or=new L,Mo=new L,da=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yo.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),li.copy(this.origin).sub(yo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=li.dot(this.direction),c=-li.dot(Ur),l=li.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yo).addScaledVector(Ur,d),m}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,s,r){bo.subVectors(t,e),Or.subVectors(i,e),Mo.crossVectors(bo,Or);let o=this.direction.dot(Mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);let c=a*this.direction.dot(Or.crossVectors(li,Or));if(c<0)return null;let l=a*this.direction.dot(bo.cross(li));if(l<0||c+l>o)return null;let h=-a*li.dot(Mo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,m,g,_,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,m,g,_,f)}set(e,t,i,s,r,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,i){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),hi.crossVectors(i,sn),hi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),hi.crossVectors(i,sn)),hi.normalize(),Fr.crossVectors(sn,hi),s[0]=hi.x,s[4]=Fr.x,s[8]=sn.x,s[1]=hi.y,s[5]=Fr.y,s[9]=sn.y,s[2]=hi.z,s[6]=Fr.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],f=i[10],p=i[14],w=i[3],x=i[7],R=i[11],E=i[15],A=s[0],T=s[4],k=s[8],b=s[12],S=s[1],D=s[5],Y=s[9],te=s[13],P=s[2],N=s[6],G=s[10],q=s[14],X=s[3],W=s[7],K=s[11],ee=s[15];return r[0]=o*A+a*S+c*P+l*X,r[4]=o*T+a*D+c*N+l*W,r[8]=o*k+a*Y+c*G+l*K,r[12]=o*b+a*te+c*q+l*ee,r[1]=h*A+u*S+d*P+m*X,r[5]=h*T+u*D+d*N+m*W,r[9]=h*k+u*Y+d*G+m*K,r[13]=h*b+u*te+d*q+m*ee,r[2]=g*A+_*S+f*P+p*X,r[6]=g*T+_*D+f*N+p*W,r[10]=g*k+_*Y+f*G+p*K,r[14]=g*b+_*te+f*q+p*ee,r[3]=w*A+x*S+R*P+E*X,r[7]=w*T+x*D+R*N+E*W,r[11]=w*k+x*Y+R*G+E*K,r[15]=w*b+x*te+R*q+E*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*m-i*c*m)+_*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*h-r*c*h)+f*(+t*l*u-t*a*m-r*o*u+i*o*m+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],w=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,x=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,R=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,A=t*w+i*x+s*R+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=w*T,e[1]=(_*d*r-u*f*r-_*s*m+i*f*m+u*s*p-i*d*p)*T,e[2]=(a*f*r-_*c*r+_*s*l-i*f*l-a*s*p+i*c*p)*T,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*m-i*c*m)*T,e[4]=x*T,e[5]=(h*f*r-g*d*r+g*s*m-t*f*m-h*s*p+t*d*p)*T,e[6]=(g*c*r-o*f*r-g*s*l+t*f*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*m+t*c*m)*T,e[8]=R*T,e[9]=(g*u*r-h*_*r-g*i*m+t*_*m+h*i*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*m-t*a*m)*T,e[12]=E*T,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*f+t*u*f)*T,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*f-t*a*f)*T,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,_=o*h,f=o*u,p=a*u,w=c*l,x=c*h,R=c*u,E=i.x,A=i.y,T=i.z;return s[0]=(1-(_+p))*E,s[1]=(m+R)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(m-R)*A,s[5]=(1-(d+p))*A,s[6]=(f+w)*A,s[7]=0,s[8]=(g+x)*T,s[9]=(f-w)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);let l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=$n){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,g;if(a===$n)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===aa)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,m=(i+s)*h,g,_;if(a===$n)g=(o+r)*u,_=-2*u;else if(a===aa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ls=new L,yn=new Je,gp=new L(0,0,0),_p=new L(1,1,1),hi=new L,Fr=new L,sn=new L,ah=new Je,oh=new Zt,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vp=0,ch=new L,hs=new Zt,Gn=new Je,zr=new L,Xs=new L,xp=new L,yp=new Zt,lh=new L(1,0,0),hh=new L(0,1,0),uh=new L(0,0,1),bp={type:"added"},Mp={type:"removed"},on=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new jn,i=new Zt,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ve}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Xs,zr,this.up):Gn.lookAt(zr,Xs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Gn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};on.DEFAULT_UP=new L(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new L,Wn=new L,So=new L,Xn=new L,us=new L,ds=new L,dh=new L,wo=new L,Eo=new L,Ao=new L,Br=!1,bs=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),Wn.subVectors(i,t),So.subVectors(e,t);let o=bn.dot(bn),a=bn.dot(Wn),c=bn.dot(So),l=Wn.dot(Wn),h=Wn.dot(So),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,i,s,r,o,a,c){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),Wn.subVectors(e,t),bn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,i),ds.subVectors(r,i),wo.subVectors(e,i);let c=us.dot(wo),l=ds.dot(wo);if(c<=0&&l<=0)return t.copy(i);Eo.subVectors(e,s);let h=us.dot(Eo),u=ds.dot(Eo);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(us,o);Ao.subVectors(e,r);let m=us.dot(Ao),g=ds.dot(Ao);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ds,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(dh,a);let p=1/(f+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},kr={h:0,s:0,l:0};function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=xc(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=To(o,r,e+1/3),this.g=To(o,r,e),this.b=To(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return tt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(qt(Ft.r*255,0,255))*65536+Math.round(qt(Ft.g*255,0,255))*256+Math.round(qt(Ft.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ft.copy(this),t);let i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=It){tt.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,s=Ft.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(kr);let i=$s(ui.h,kr.h,t),s=$s(ui.s,kr.s,t),r=$s(ui.l,kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new $e;$e.NAMES=eu;var Sp=0,Ps=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ws,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Fo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oo&&(i.blendSrc=this.blendSrc),this.blendDst!==Fo&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qn=class extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new L,Hr=new Ye,pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}};var fa=class extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var pa=class extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Zn=class extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var wp=0,un=new Je,Ro=new on,fs=new L,rn=new Vi,qs=new Vi,Ct=new L,Gi=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?pa:fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,qs.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,qs.max),rn.expandByPoint(Ct)):(rn.expandByPoint(qs.min),rn.expandByPoint(qs.max))}rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(e,l),Ct.add(fs)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new L,h[S]=new L;let u=new L,d=new L,m=new L,g=new Ye,_=new Ye,f=new Ye,p=new L,w=new L;function x(S,D,Y){u.fromArray(s,S*3),d.fromArray(s,D*3),m.fromArray(s,Y*3),g.fromArray(o,S*2),_.fromArray(o,D*2),f.fromArray(o,Y*2),d.sub(u),m.sub(u),_.sub(g),f.sub(g);let te=1/(_.x*f.y-f.x*_.y);isFinite(te)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(te),w.copy(m).multiplyScalar(_.x).addScaledVector(d,-f.x).multiplyScalar(te),l[S].add(p),l[D].add(p),l[Y].add(p),h[S].add(w),h[D].add(w),h[Y].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let S=0,D=R.length;S<D;++S){let Y=R[S],te=Y.start,P=Y.count;for(let N=te,G=te+P;N<G;N+=3)x(i[N+0],i[N+1],i[N+2])}let E=new L,A=new L,T=new L,k=new L;function b(S){T.fromArray(r,S*3),k.copy(T);let D=l[S];E.copy(D),E.sub(T.multiplyScalar(T.dot(D))).normalize(),A.crossVectors(k,D);let te=A.dot(h[S])<0?-1:1;c[S*4]=E.x,c[S*4+1]=E.y,c[S*4+2]=E.z,c[S*4+3]=te}for(let S=0,D=R.length;S<D;++S){let Y=R[S],te=Y.start,P=Y.count;for(let N=te,G=te+P;N<G;N+=3)b(i[N+0]),b(i[N+1]),b(i[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new Je,Ni=new da,Vr=new er,ph=new L,ps=new L,ms=new L,gs=new L,Co=new L,Gr=new L,Wr=new Ye,Xr=new Ye,qr=new Ye,mh=new L,gh=new L,_h=new L,Yr=new L,$r=new L,$t=class extends on{constructor(e=new Gi,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Co.fromBufferAttribute(u,e),o?Gr.addScaledVector(Co,h):Gr.addScaledVector(Co.sub(t),h))}t.add(Gr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Vr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Vr,ph)===null||Ni.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],w=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,E=x;R<E;R+=3){let A=a.getX(R),T=a.getX(R+1),k=a.getX(R+2);s=Zr(this,p,e,i,l,h,u,A,T,k),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let w=a.getX(f),x=a.getX(f+1),R=a.getX(f+2);s=Zr(this,o,e,i,l,h,u,w,x,R),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],w=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let R=w,E=x;R<E;R+=3){let A=R,T=R+1,k=R+2;s=Zr(this,p,e,i,l,h,u,A,T,k),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let w=f,x=f+1,R=f+2;s=Zr(this,o,e,i,l,h,u,w,x,R),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Ep(n,e,t,i,s,r,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===vi,a),c===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($r);return l<t.near||l>t.far?null:{distance:l,point:$r.clone(),object:n}}function Zr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ps),n.getVertexPosition(c,ms),n.getVertexPosition(l,gs);let h=Ep(n,e,t,i,ps,ms,gs,Yr);if(h){s&&(Wr.fromBufferAttribute(s,a),Xr.fromBufferAttribute(s,c),qr.fromBufferAttribute(s,l),h.uv=bs.getInterpolation(Yr,ps,ms,gs,Wr,Xr,qr,new Ye)),r&&(Wr.fromBufferAttribute(r,a),Xr.fromBufferAttribute(r,c),qr.fromBufferAttribute(r,l),h.uv1=bs.getInterpolation(Yr,ps,ms,gs,Wr,Xr,qr,new Ye),h.uv2=h.uv1),o&&(mh.fromBufferAttribute(o,a),gh.fromBufferAttribute(o,c),_h.fromBufferAttribute(o,l),h.normal=bs.getInterpolation(Yr,ps,ms,gs,mh,gh,_h,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};bs.getNormal(ps,ms,gs,u.normal),h.face=u}return h}var nr=class n extends Gi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Zn(l,3)),this.setAttribute("normal",new Zn(h,3)),this.setAttribute("uv",new Zn(u,2));function g(_,f,p,w,x,R,E,A,T,k,b){let S=R/T,D=E/k,Y=R/2,te=E/2,P=A/2,N=T+1,G=k+1,q=0,X=0,W=new L;for(let K=0;K<G;K++){let ee=K*D-te;for(let le=0;le<N;le++){let H=le*S-Y;W[_]=H*w,W[f]=ee*x,W[p]=P,l.push(W.x,W.y,W.z),W[_]=0,W[f]=0,W[p]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(le/T),u.push(1-K/k),q+=1}}for(let K=0;K<k;K++)for(let ee=0;ee<T;ee++){let le=d+ee+N*K,H=d+ee+N*(K+1),$=d+(ee+1)+N*(K+1),oe=d+(ee+1)+N*K;c.push(le,H,oe),c.push(H,$,oe),X+=6}a.addGroup(m,X,b),m+=X,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let s in i)e[s]=i[s]}return e}function Ap(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tu(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}var Tp={clone:Ls,merge:Wt},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ma=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yt=class extends ma{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,vs=1,qo=class extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(_s,vs,e,t);s.layers=this.layers,this.add(s);let r=new Yt(_s,vs,e,t);r.layers=this.layers,this.add(r);let o=new Yt(_s,vs,e,t);o.layers=this.layers,this.add(o);let a=new Yt(_s,vs,e,t);a.layers=this.layers,this.add(a);let c=new Yt(_s,vs,e,t);c.layers=this.layers,this.add(c);let l=new Yt(_s,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ga=class extends wn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yo=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?It:fn),this.texture=new ga(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nr(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:mi});r.uniforms.tEquirect.value=t;let o=new $t(s,r),a=t.minFilter;return t.minFilter===Ks&&(t.minFilter=dn),new qo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Po=new L,Pp=new L,Lp=new Ve,an=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Po.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Po),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Lp.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new er,Jr=new L,_a=class{constructor(e=new an,t=new an,i=new an,s=new an,r=new an,o=new an){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],f=s[11],p=s[12],w=s[13],x=s[14],R=s[15];if(i[0].setComponents(c-r,d-l,f-m,R-p).normalize(),i[1].setComponents(c+r,d+l,f+m,R+p).normalize(),i[2].setComponents(c+o,d+h,f+g,R+w).normalize(),i[3].setComponents(c-o,d-h,f-g,R-w).normalize(),i[4].setComponents(c-a,d-u,f-_,R-x).normalize(),t===$n)i[5].setComponents(c+a,d+u,f+_,R+x).normalize();else if(t===aa)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Jr.x=s.normal.x>0?e.max.x:e.min.x,Jr.y=s.normal.y>0?e.max.y:e.min.y,Jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ip(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){let p=g[_];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var mn=class n extends Gi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let w=p*d-o;for(let x=0;x<l;x++){let R=x*u-r;g.push(R,-w,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let x=w+l*p,R=w+l*(p+1),E=w+1+l*(p+1),A=w+1+l*p;m.push(x,R,A),m.push(R,E,A)}this.setIndex(m),this.setAttribute("position",new Zn(g,3)),this.setAttribute("normal",new Zn(_,3)),this.setAttribute("uv",new Zn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`
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
}`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
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
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Dm=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
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
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Dp,alphahash_pars_fragment:Np,alphamap_fragment:Up,alphamap_pars_fragment:Op,alphatest_fragment:Fp,alphatest_pars_fragment:zp,aomap_fragment:Bp,aomap_pars_fragment:kp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Kp,color_fragment:jp,color_pars_fragment:Qp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:am,emissivemap_fragment:om,emissivemap_pars_fragment:cm,colorspace_fragment:lm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Am,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_fragment:bm,lightmap_pars_fragment:Mm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:wm,lights_pars_begin:Em,lights_toon_fragment:Tm,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Im,lights_fragment_begin:Dm,lights_fragment_maps:Nm,lights_fragment_end:Um,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Bm,map_fragment:km,map_pars_fragment:Hm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:Km,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:ag,packing:og,premultiplied_alpha_fragment:cg,project_vertex:lg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:_g,skinbase_vertex:vg,skinning_pars_vertex:xg,skinning_vertex:yg,skinnormal_vertex:bg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:wg,tonemapping_pars_fragment:Eg,transmission_fragment:Ag,transmission_pars_fragment:Tg,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Ig,background_frag:Dg,backgroundCube_vert:Ng,backgroundCube_frag:Ug,cube_vert:Og,cube_frag:Fg,depth_vert:zg,depth_frag:Bg,distanceRGBA_vert:kg,distanceRGBA_frag:Hg,equirect_vert:Vg,equirect_frag:Gg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:Yg,meshlambert_vert:$g,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:Kg,meshnormal_vert:jg,meshnormal_frag:Qg,meshphong_vert:e0,meshphong_frag:t0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:c0,shadow_frag:l0,sprite_vert:h0,sprite_frag:u0},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ln={basic:{uniforms:Wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Wt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Wt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Wt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Wt([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Wt([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ln.physical={uniforms:Wt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Kr={r:0,b:0,g:0};function d0(n,e,t,i,s,r,o){let a=new $e(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(f,p){let w=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),w=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ba)?(h===void 0&&(h=new $t(new nr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ls(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(u!==x||d!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $t(new mn(2,2),new ei({name:"BackgroundMaterial",uniforms:Ls(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(Kr,tu(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(a,c)},render:g}}function f0(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=f(null),l=c,h=!1;function u(P,N,G,q,X){let W=!1;if(o){let K=_(q,G,N);l!==K&&(l=K,m(l.object)),W=p(P,q,G,X),W&&w(P,q,G,X)}else{let K=N.wireframe===!0;(l.geometry!==q.id||l.program!==G.id||l.wireframe!==K)&&(l.geometry=q.id,l.program=G.id,l.wireframe=K,W=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,k(P,N,G,q),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,G){let q=G.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let W=X[N.id];W===void 0&&(W={},X[N.id]=W);let K=W[q];return K===void 0&&(K=f(d()),W[q]=K),K}function f(P){let N=[],G=[],q=[];for(let X=0;X<s;X++)N[X]=0,G[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,N,G,q){let X=l.attributes,W=N.attributes,K=0,ee=G.getAttributes();for(let le in ee)if(ee[le].location>=0){let $=X[le],oe=W[le];if(oe===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;K++}return l.attributesNum!==K||l.index!==q}function w(P,N,G,q){let X={},W=N.attributes,K=0,ee=G.getAttributes();for(let le in ee)if(ee[le].location>=0){let $=W[le];$===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),X[le]=oe,K++}l.attributes=X,l.attributesNum=K,l.index=q}function x(){let P=l.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function R(P){E(P,0)}function E(P,N){let G=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;G[P]=1,q[P]===0&&(n.enableVertexAttribArray(P),q[P]=1),X[P]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),X[P]=N)}function A(){let P=l.newAttributes,N=l.enabledAttributes;for(let G=0,q=N.length;G<q;G++)N[G]!==P[G]&&(n.disableVertexAttribArray(G),N[G]=0)}function T(P,N,G,q,X,W,K){K===!0?n.vertexAttribIPointer(P,N,G,X,W):n.vertexAttribPointer(P,N,G,q,X,W)}function k(P,N,G,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let X=q.attributes,W=G.getAttributes(),K=N.defaultAttributeValues;for(let ee in W){let le=W[ee];if(le.location>=0){let H=X[ee];if(H===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){let $=H.normalized,oe=H.itemSize,ve=t.get(H);if(ve===void 0)continue;let _e=ve.buffer,Le=ve.type,De=ve.bytesPerElement,we=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||H.gpuType===Gh);if(H.isInterleavedBufferAttribute){let Xe=H.data,U=Xe.stride,kt=H.offset;if(Xe.isInstancedInterleavedBuffer){for(let ye=0;ye<le.locationSize;ye++)E(le.location+ye,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ye=0;ye<le.locationSize;ye++)R(le.location+ye);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ye=0;ye<le.locationSize;ye++)T(le.location+ye,oe/le.locationSize,Le,$,U*De,(kt+oe/le.locationSize*ye)*De,we)}else{if(H.isInstancedBufferAttribute){for(let Xe=0;Xe<le.locationSize;Xe++)E(le.location+Xe,H.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Xe=0;Xe<le.locationSize;Xe++)R(le.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Xe=0;Xe<le.locationSize;Xe++)T(le.location+Xe,oe/le.locationSize,Le,$,oe*De,oe/le.locationSize*Xe*De,we)}}else if(K!==void 0){let $=K[ee];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(le.location,$);break;case 3:n.vertexAttrib3fv(le.location,$);break;case 4:n.vertexAttrib4fv(le.location,$);break;default:n.vertexAttrib1fv(le.location,$)}}}}A()}function b(){Y();for(let P in a){let N=a[P];for(let G in N){let q=N[G];for(let X in q)g(q[X].object),delete q[X];delete N[G]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let N=a[P.id];for(let G in N){let q=N[G];for(let X in q)g(q[X].object),delete q[X];delete N[G]}delete a[P.id]}function D(P){for(let N in a){let G=a[N];if(G[P.id]===void 0)continue;let q=G[P.id];for(let X in q)g(q[X].object),delete q[X];delete G[P.id]}}function Y(){te(),h=!0,l!==c&&(l=c,m(l.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:te,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:R,disableUnusedAttributes:A}}function p0(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function m0(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,R=o||e.has("OES_texture_float"),E=x&&R,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:E,maxSamples:A}}function g0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new an,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let w=r?0:i,x=w*4,R=p.clippingState||null;c.value=R,R=h(g,d,x,m);for(let E=0;E!==x;++E)R[E]=t[E];p.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,R=m;x!==_;++x,R+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(f,R),f[R+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function _0(n){let e=new WeakMap;function t(o,a){return a===zo?o.mapping=Ts:a===Bo&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===zo||a===Bo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Yo(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var $o=class extends ma{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=4,vh=[.125,.215,.35,.446,.526,.582],zi=20,Lo=new $o,xh=new $e,Io=null,Do=0,No=0,Oi=(1+Math.sqrt(5))/2,xs=1/Oi,yh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Oi,xs),new L(0,Oi,-xs),new L(xs,0,Oi),new L(-xs,0,Oi),new L(Oi,xs,0),new L(-Oi,xs,0)],va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Do,No),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:js,format:Sn,colorSpace:Jn,depthBuffer:!1},s=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(r)),this._blurMaterial=x0(r,e,t)}return s}_compileMaterial(e){let t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xh),h.toneMapping=gi,h.autoClear=!1;let m=new Qn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new $t(new nr,m),_=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(xh),_=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;jr(s,w*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ts||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;jr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yh[(s-1)%yh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $t(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):zi;f>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${zi}`);let p=[],w=0;for(let T=0;T<zi;++T){let k=T/_,b=Math.exp(-k*k/2);p.push(b),T===0?w+=b:T<f&&(w+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let R=this._sizeLods[s],E=3*R*(s>x-Ms?s-x+Ms:0),A=4*(this._cubeSize-R);jr(t,E,A,3*R,2*R),c.setRenderTarget(t),c.render(u,Lo)}};function v0(n){let e=[],t=[],i=[],s=n,r=n-Ms+1+vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ms?c=vh[o-n+Ms-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,w=new Float32Array(_*g*m),x=new Float32Array(f*g*m),R=new Float32Array(p*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,k=A>2?0:-1,b=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];w.set(b,_*g*A),x.set(d,f*g*A);let S=[A,A,A,A,A,A];R.set(S,p*g*A)}let E=new Gi;E.setAttribute("position",new pn(w,_)),E.setAttribute("uv",new pn(x,f)),E.setAttribute("faceIndex",new pn(R,p)),e.push(E),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bh(n,e,t){let i=new Kn(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function x0(n,e,t){let i=new Float32Array(zi),s=new L(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Sh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function y0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===zo||c===Bo,h=c===Ts||c===Rs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new va(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new va(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function b0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function M0(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let x=0,R=w.length;x<R;x+=3){let E=w[x+0],A=w[x+1],T=w[x+2];d.push(E,A,A,T,T,E)}}else if(g!==void 0){let w=g.array;_=g.version;for(let x=0,R=w.length/3-1;x<R;x+=3){let E=x+0,A=x+1,T=x+2;d.push(E,A,A,T,T,E)}}else return;let f=new(Qh(d)?pa:fa)(d,1);f.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,f)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function S0(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*c),t.update(g,r,1)}function u(m,g,_){if(_===0)return;let f,p;if(s)f=n,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*c,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let p=0;for(let w=0;w<_;w++)p+=g[w];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function w0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function E0(n,e){return n[0]-e[0]}function A0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function T0(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let w=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],k=0;w===!0&&(k=1),x===!0&&(k=2),R===!0&&(k=3);let b=h.attributes.position.count*k,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let D=new Float32Array(b*S*4*g),Y=new ua(D,b,S,g);Y.type=fi,Y.needsUpdate=!0;let te=k*4;for(let N=0;N<g;N++){let G=E[N],q=A[N],X=T[N],W=b*S*4*N;for(let K=0;K<G.count;K++){let ee=K*te;w===!0&&(o.fromBufferAttribute(G,K),D[W+ee+0]=o.x,D[W+ee+1]=o.y,D[W+ee+2]=o.z,D[W+ee+3]=0),x===!0&&(o.fromBufferAttribute(q,K),D[W+ee+4]=o.x,D[W+ee+5]=o.y,D[W+ee+6]=o.z,D[W+ee+7]=0),R===!0&&(o.fromBufferAttribute(X,K),D[W+ee+8]=o.x,D[W+ee+9]=o.y,D[W+ee+10]=o.z,D[W+ee+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:Y,size:new Ye(b,S)},r.set(h,_),h.addEventListener("dispose",P)}let f=0;for(let w=0;w<d.length;w++)f+=d[w];let p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<m;x++){let R=g[x];R[0]=x,R[1]=d[x]}g.sort(A0);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(E0);let _=h.morphAttributes.position,f=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let R=a[x],E=R[0],A=R[1];E!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+x)!==_[E]&&h.setAttribute("morphTarget"+x,_[E]),f&&h.getAttribute("morphNormal"+x)!==f[E]&&h.setAttribute("morphNormal"+x,f[E]),s[x]=A,p+=A):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let w=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",w),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function R0(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var xa=class extends wn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ki&&(i=di),i===void 0&&h===Cs&&(i=Bi),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},iu=new wn,su=new xa(1,1);su.compareFunction=Kh;var ru=new ua,au=new Xo,ou=new ga,wh=[],Eh=[],Ah=new Float32Array(16),Th=new Float32Array(9),Rh=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sa(n,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function L0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function I0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function D0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Rh.set(i),n.uniformMatrix2fv(this.addr,!1,Rh),At(t,i)}}function N0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),At(t,i)}}function U0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Ah.set(i),n.uniformMatrix4fv(this.addr,!1,Ah),At(t,i)}}function O0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function k0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function H0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function V0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function G0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function W0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?su:iu;t.setTexture2D(e||r,s)}function X0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||au,s)}function q0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ou,s)}function Y0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ru,s)}function $0(n){switch(n){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return I0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return O0;case 35667:case 35671:return F0;case 35668:case 35672:return z0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(n,e){n.uniform1fv(this.addr,e)}function J0(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function K0(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function j0(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function Q0(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function e_(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function t_(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function n_(n,e){n.uniform1iv(this.addr,e)}function i_(n,e){n.uniform2iv(this.addr,e)}function s_(n,e){n.uniform3iv(this.addr,e)}function r_(n,e){n.uniform4iv(this.addr,e)}function a_(n,e){n.uniform1uiv(this.addr,e)}function o_(n,e){n.uniform2uiv(this.addr,e)}function c_(n,e){n.uniform3uiv(this.addr,e)}function l_(n,e){n.uniform4uiv(this.addr,e)}function h_(n,e,t){let i=this.cache,s=e.length,r=Sa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||iu,r[o])}function u_(n,e,t){let i=this.cache,s=e.length,r=Sa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||au,r[o])}function d_(n,e,t){let i=this.cache,s=e.length,r=Sa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ou,r[o])}function f_(n,e,t){let i=this.cache,s=e.length,r=Sa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ru,r[o])}function p_(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return j0;case 35674:return Q0;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}var Zo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$0(t.type)}},Jo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}},Ko=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Uo=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function m_(n,e,t){let i=n.name,s=i.length;for(Uo.lastIndex=0;;){let r=Uo.exec(i),o=Uo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ch(t,l===void 0?new Zo(a,n,e):new Jo(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ko(a),Ch(t,u)),t=u}}}var As=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);m_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ph(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var g_=37297,__=0;function v_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function x_(n){let e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n),i;switch(e===t?i="":e===ra&&t===sa?i="LinearDisplayP3ToLinearSRGB":e===sa&&t===ra&&(i="LinearSRGBToLinearDisplayP3"),n){case Jn:case Ma:return[i,"LinearTransferOETF"];case It:case vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+v_(n.getShaderSource(e),o)}else return s}function y_(n,e){let t=x_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b_(n,e){let t;switch(e){case Ef:t="Linear";break;case Af:t="Reinhard";break;case Tf:t="OptimizedCineon";break;case Rf:t="ACESFilmic";break;case Pf:t="AgX";break;case Cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function S_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function w_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ss(n){return n!==""}function Ih(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(n){return n.replace(A_,R_)}var T_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function R_(n,e){let t=Ue[e];if(t===void 0){let i=T_.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}var C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(C_,P_)}function P_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function I_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case Rs:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function N_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case wf:e="ENVMAP_BLENDING_ADD";break}return e}function U_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function O_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=L_(t),l=I_(t),h=D_(t),u=N_(t),d=U_(t),m=t.isWebGL2?"":M_(t),g=S_(t),_=w_(r),f=s.createProgram(),p,w,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),p.length>0&&(p+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),w.length>0&&(w+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),w=[m,Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==gi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,y_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=jo(o),o=Ih(o,t),o=Dh(o,t),a=jo(a),a=Ih(a,t),a=Dh(a,t),o=Nh(o),a=Nh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let R=x+p+o,E=x+w+a,A=Ph(s,s.VERTEX_SHADER,R),T=Ph(s,s.FRAGMENT_SHADER,E);s.attachShader(f,A),s.attachShader(f,T),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function k(Y){if(n.debug.checkShaderErrors){let te=s.getProgramInfoLog(f).trim(),P=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(T).trim(),G=!0,q=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,A,T);else{let X=Lh(s,A,"vertex"),W=Lh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+X+`
`+W)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||N==="")&&(q=!1);q&&(Y.diagnostics={runnable:G,programLog:te,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:w}})}s.deleteShader(A),s.deleteShader(T),b=new As(s,f),S=E_(s,f)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let S;this.getAttributes=function(){return S===void 0&&k(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(f,g_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=__++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=T,this}var F_=0,Qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ec(e),t.set(e,i)),i}},ec=class{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}};function z_(n,e,t,i,s,r,o){let a=new tr,c=new Qo,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function f(b,S,D,Y,te){let P=Y.fog,N=te.geometry,G=b.isMeshStandardMaterial?Y.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),X=q&&q.mapping===ba?q.image.height:null,W=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=K!==void 0?K.length:0,le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let H,$,oe,ve;if(W){let Ht=Ln[W];H=Ht.vertexShader,$=Ht.fragmentShader}else H=b.vertexShader,$=b.fragmentShader,c.update(b),oe=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);let _e=n.getRenderTarget(),Le=te.isInstancedMesh===!0,De=te.isBatchedMesh===!0,we=!!b.map,Xe=!!b.matcap,U=!!q,kt=!!b.aoMap,ye=!!b.lightMap,Ce=!!b.bumpMap,pe=!!b.normalMap,pt=!!b.displacementMap,Fe=!!b.emissiveMap,M=!!b.metalnessMap,v=!!b.roughnessMap,F=b.anisotropy>0,j=b.clearcoat>0,J=b.iridescence>0,Q=b.sheen>0,me=b.transmission>0,ae=F&&!!b.anisotropyMap,ue=j&&!!b.clearcoatMap,Se=j&&!!b.clearcoatNormalMap,ze=j&&!!b.clearcoatRoughnessMap,Z=J&&!!b.iridescenceMap,et=J&&!!b.iridescenceThicknessMap,Ge=Q&&!!b.sheenColorMap,Re=Q&&!!b.sheenRoughnessMap,xe=!!b.specularMap,de=!!b.specularColorMap,Ne=!!b.specularIntensityMap,Ze=me&&!!b.transmissionMap,_t=me&&!!b.thicknessMap,ke=!!b.gradientMap,ne=!!b.alphaMap,C=b.alphaTest>0,se=!!b.alphaHash,re=!!b.extensions,Ee=!!N.attributes.uv1,be=!!N.attributes.uv2,st=!!N.attributes.uv3,rt=gi;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:H,fragmentShader:$,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:De,instancing:Le,instancingColor:Le&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Jn,map:we,matcap:Xe,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:X,aoMap:kt,lightMap:ye,bumpMap:Ce,normalMap:pe,displacementMap:d&&pt,emissiveMap:Fe,normalMapObjectSpace:pe&&b.normalMapType===Gf,normalMapTangentSpace:pe&&b.normalMapType===Vf,metalnessMap:M,roughnessMap:v,anisotropy:F,anisotropyMap:ae,clearcoat:j,clearcoatMap:ue,clearcoatNormalMap:Se,clearcoatRoughnessMap:ze,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:et,sheen:Q,sheenColorMap:Ge,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:de,specularIntensityMap:Ne,transmission:me,transmissionMap:Ze,thicknessMap:_t,gradientMap:ke,opaque:b.transparent===!1&&b.blending===ws,alphaMap:ne,alphaTest:C,alphaHash:se,combine:b.combine,mapUv:we&&_(b.map.channel),aoMapUv:kt&&_(b.aoMap.channel),lightMapUv:ye&&_(b.lightMap.channel),bumpMapUv:Ce&&_(b.bumpMap.channel),normalMapUv:pe&&_(b.normalMap.channel),displacementMapUv:pt&&_(b.displacementMap.channel),emissiveMapUv:Fe&&_(b.emissiveMap.channel),metalnessMapUv:M&&_(b.metalnessMap.channel),roughnessMapUv:v&&_(b.roughnessMap.channel),anisotropyMapUv:ae&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(b.sheenRoughnessMap.channel),specularMapUv:xe&&_(b.specularMap.channel),specularColorMapUv:de&&_(b.specularColorMap.channel),specularIntensityMapUv:Ne&&_(b.specularIntensityMap.channel),transmissionMapUv:Ze&&_(b.transmissionMap.channel),thicknessMapUv:_t&&_(b.thicknessMap.channel),alphaMapUv:ne&&_(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:be,vertexUv3s:st,pointsUvs:te.isPoints===!0&&!!N.attributes.uv&&(we||ne),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:te.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Yn,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:re&&b.extensions.derivatives===!0,extensionFragDepth:re&&b.extensions.fragDepth===!0,extensionDrawBuffers:re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(S,b),x(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function R(b){let S=g[b.type],D;if(S){let Y=Ln[S];D=Tp.clone(Y.uniforms)}else D=b.uniforms;return D}function E(b,S){let D;for(let Y=0,te=l.length;Y<te;Y++){let P=l[Y];if(P.cacheKey===S){D=P,++D.usedTimes;break}}return D===void 0&&(D=new O_(n,S,b,r),l.push(D)),D}function A(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function k(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:R,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:k}}function B_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function k_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,m,g,_,f){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),e++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||k_),i.length>1&&i.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function H_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Fh,n.set(i,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function V_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function G_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var W_=0;function X_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q_(n,e){let t=new V_,i=G_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new Je,a=new Je;function c(h,u){let d=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,f=0,p=0,w=0,x=0,R=0,E=0,A=0,T=0,k=0,b=0;h.sort(X_);let S=u===!0?Math.PI:1;for(let Y=0,te=h.length;Y<te;Y++){let P=h[Y],N=P.color,G=P.intensity,q=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*G*S,m+=N.g*G*S,g+=N.b*G*S;else if(P.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(P.sh.coefficients[W],G);b++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let K=P.shadow,ee=i.get(P);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=P.shadow.matrix,R++}s.directional[_]=W,_++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(G*S),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,s.spot[p]=W;let K=P.shadow;if(P.map&&(s.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&k++),s.spotLightMatrix[p]=K.matrix,P.castShadow){let ee=i.get(P);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,s.spotShadow[p]=ee,s.spotShadowMap[p]=X,A++}p++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(N).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),s.rectArea[w]=W,w++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*S),W.distance=P.distance,W.decay=P.decay,P.castShadow){let K=P.shadow,ee=i.get(P);ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,s.pointShadow[f]=ee,s.pointShadowMap[f]=X,s.pointShadowMatrix[f]=P.shadow.matrix,E++}s.point[f]=W,f++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(G*S),W.groundColor.copy(P.groundColor).multiplyScalar(G*S),s.hemi[x]=W,x++}}w>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==f||D.spotLength!==p||D.rectAreaLength!==w||D.hemiLength!==x||D.numDirectionalShadows!==R||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==T||D.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=w,s.point.length=f,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=A+T-k,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=b,D.directionalLength=_,D.pointLength=f,D.spotLength=p,D.rectAreaLength=w,D.hemiLength=x,D.numDirectionalShadows=R,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=T,D.numLightProbes=b,s.version=W_++)}function l(h,u){let d=0,m=0,g=0,_=0,f=0,p=u.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){let R=h[w];if(R.isDirectionalLight){let E=s.directional[d];E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(R.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(R.isRectAreaLight){let E=s.rectArea[_];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(R.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){let E=s.point[m];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){let E=s.hemi[f];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:s}}function zh(n,e){let t=new q_(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Y_(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new zh(n,e),t.set(r,[c])):o>=a.length?(c=new zh(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var tc=class extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nc=class extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function J_(n,e,t){let i=new _a,s=new Ye,r=new Ye,o=new Dt,a=new tc({depthPacking:Hf}),c=new nc,l={},h=t.maxTextureSize,u={[vi]:Qt,[Qt]:vi,[Yn]:Yn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:$_,fragmentShader:Z_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Gi;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $t(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(A,T,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let b=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(mi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let te=p!==qn&&this.type===qn,P=p===qn&&this.type!==qn;for(let N=0,G=A.length;N<G;N++){let q=A[N],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||te===!0||P===!0){let ee=this.type!==qn?{minFilter:Xt,magFilter:Xt}:{};X.map!==null&&X.map.dispose(),X.map=new Kn(s.x,s.y,ee),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let K=X.getViewportCount();for(let ee=0;ee<K;ee++){let le=X.getViewport(ee);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),Y.viewport(o),X.updateMatrices(q,ee),i=X.getFrustum(),R(T,k,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===qn&&w(X,k),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(b,S,D)};function w(A,T){let k=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,k,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,k,m,_,null)}function x(A,T,k,b){let S=null,D=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=k.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=S.uuid,te=T.uuid,P=l[Y];P===void 0&&(P={},l[Y]=P);let N=P[te];N===void 0&&(N=S.clone(),P[te]=N,T.addEventListener("dispose",E)),S=N}if(S.visible=T.visible,S.wireframe=T.wireframe,b===qn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=n.properties.get(S);Y.light=k}return S}function R(A,T,k,b,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let te=e.update(A),P=A.material;if(Array.isArray(P)){let N=te.groups;for(let G=0,q=N.length;G<q;G++){let X=N[G],W=P[X.materialIndex];if(W&&W.visible){let K=x(A,W,b,S);A.onBeforeShadow(n,A,T,k,te,K,X),n.renderBufferDirect(k,null,te,K,A,X),A.onAfterShadow(n,A,T,k,te,K,X)}}}else if(P.visible){let N=x(A,P,b,S);A.onBeforeShadow(n,A,T,k,te,N,null),n.renderBufferDirect(k,null,te,N,A,null),A.onAfterShadow(n,A,T,k,te,N,null)}}let Y=A.children;for(let te=0,P=Y.length;te<P;te++)R(Y[te],T,k,b,S)}function E(A){A.target.removeEventListener("dispose",E);for(let k in l){let b=l[k],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function K_(n,e,t){let i=t.isWebGL2;function s(){let C=!1,se=new Dt,re=null,Ee=new Dt(0,0,0,0);return{setMask:function(be){re!==be&&!C&&(n.colorMask(be,be,be,be),re=be)},setLocked:function(be){C=be},setClear:function(be,st,rt,Tt,Ht){Ht===!0&&(be*=Tt,st*=Tt,rt*=Tt),se.set(be,st,rt,Tt),Ee.equals(se)===!1&&(n.clearColor(be,st,rt,Tt),Ee.copy(se))},reset:function(){C=!1,re=null,Ee.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Ee=null;return{setTest:function(be){be?De(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(be){se!==be&&!C&&(n.depthMask(be),se=be)},setFunc:function(be){if(re!==be){switch(be){case gf:n.depthFunc(n.NEVER);break;case _f:n.depthFunc(n.ALWAYS);break;case vf:n.depthFunc(n.LESS);break;case ea:n.depthFunc(n.LEQUAL);break;case xf:n.depthFunc(n.EQUAL);break;case yf:n.depthFunc(n.GEQUAL);break;case bf:n.depthFunc(n.GREATER);break;case Mf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=be}},setLocked:function(be){C=be},setClear:function(be){Ee!==be&&(n.clearDepth(be),Ee=be)},reset:function(){C=!1,se=null,re=null,Ee=null}}}function o(){let C=!1,se=null,re=null,Ee=null,be=null,st=null,rt=null,Tt=null,Ht=null;return{setTest:function(at){C||(at?De(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(at){se!==at&&!C&&(n.stencilMask(at),se=at)},setFunc:function(at,Vt,Pn){(re!==at||Ee!==Vt||be!==Pn)&&(n.stencilFunc(at,Vt,Pn),re=at,Ee=Vt,be=Pn)},setOp:function(at,Vt,Pn){(st!==at||rt!==Vt||Tt!==Pn)&&(n.stencilOp(at,Vt,Pn),st=at,rt=Vt,Tt=Pn)},setLocked:function(at){C=at},setClear:function(at){Ht!==at&&(n.clearStencil(at),Ht=at)},reset:function(){C=!1,se=null,re=null,Ee=null,be=null,st=null,rt=null,Tt=null,Ht=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,_=[],f=null,p=!1,w=null,x=null,R=null,E=null,A=null,T=null,k=null,b=new $e(0,0,0),S=0,D=!1,Y=null,te=null,P=null,N=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=W>=2);let ee=null,le={},H=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),oe=new Dt().fromArray(H),ve=new Dt().fromArray($);function _e(C,se,re,Ee){let be=new Uint8Array(4),st=n.createTexture();n.bindTexture(C,st),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<re;rt++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(se+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return st}let Le={};Le[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(ea),Fe(!1),M(_l),De(n.CULL_FACE),pe(mi);function De(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function we(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Xe(C,se){return m[C]!==se?(n.bindFramebuffer(C,se),m[C]=se,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function U(C,se){let re=_,Ee=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){let be=C.texture;if(re.length!==be.length||re[0]!==n.COLOR_ATTACHMENT0){for(let st=0,rt=be.length;st<rt;st++)re[st]=n.COLOR_ATTACHMENT0+st;re.length=be.length,Ee=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Ee=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function kt(C){return f!==C?(n.useProgram(C),f=C,!0):!1}let ye={[Fi]:n.FUNC_ADD,[ef]:n.FUNC_SUBTRACT,[tf]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[bl]=n.MIN,ye[Ml]=n.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(ye[bl]=C.MIN_EXT,ye[Ml]=C.MAX_EXT)}let Ce={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Oo]:n.SRC_ALPHA,[uf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[Fo]:n.ONE_MINUS_SRC_ALPHA,[hf]:n.ONE_MINUS_DST_COLOR,[cf]:n.ONE_MINUS_DST_ALPHA,[df]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(C,se,re,Ee,be,st,rt,Tt,Ht,at){if(C===mi){p===!0&&(we(n.BLEND),p=!1);return}if(p===!1&&(De(n.BLEND),p=!0),C!==Qd){if(C!==w||at!==D){if((x!==Fi||A!==Fi)&&(n.blendEquation(n.FUNC_ADD),x=Fi,A=Fi),at)switch(C){case ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}R=null,E=null,T=null,k=null,b.set(0,0,0),S=0,w=C,D=at}return}be=be||se,st=st||re,rt=rt||Ee,(se!==x||be!==A)&&(n.blendEquationSeparate(ye[se],ye[be]),x=se,A=be),(re!==R||Ee!==E||st!==T||rt!==k)&&(n.blendFuncSeparate(Ce[re],Ce[Ee],Ce[st],Ce[rt]),R=re,E=Ee,T=st,k=rt),(Tt.equals(b)===!1||Ht!==S)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Ht),b.copy(Tt),S=Ht),w=C,D=!1}function pt(C,se){C.side===Yn?we(n.CULL_FACE):De(n.CULL_FACE);let re=C.side===Qt;se&&(re=!re),Fe(re),C.blending===ws&&C.transparent===!1?pe(mi):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let Ee=C.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(C){Y!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),Y=C)}function M(C){C!==Jd?(De(n.CULL_FACE),C!==te&&(C===_l?n.cullFace(n.BACK):C===Kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),te=C}function v(C){C!==P&&(X&&n.lineWidth(C),P=C)}function F(C,se,re){C?(De(n.POLYGON_OFFSET_FILL),(N!==se||G!==re)&&(n.polygonOffset(se,re),N=se,G=re)):we(n.POLYGON_OFFSET_FILL)}function j(C){C?De(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function J(C){C===void 0&&(C=n.TEXTURE0+q-1),ee!==C&&(n.activeTexture(C),ee=C)}function Q(C,se,re){re===void 0&&(ee===null?re=n.TEXTURE0+q-1:re=ee);let Ee=le[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},le[re]=Ee),(Ee.type!==C||Ee.texture!==se)&&(ee!==re&&(n.activeTexture(re),ee=re),n.bindTexture(C,se||Le[C]),Ee.type=C,Ee.texture=se)}function me(){let C=le[ee];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(C){oe.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Ze(C){ve.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function _t(C,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Ee=re.get(C);Ee===void 0&&(Ee=n.getUniformBlockIndex(se,C.name),re.set(C,Ee))}function ke(C,se){let Ee=u.get(se).get(C);h.get(se)!==Ee&&(n.uniformBlockBinding(se,Ee,C.__bindingPointIndex),h.set(se,Ee))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,le={},m={},g=new WeakMap,_=[],f=null,p=!1,w=null,x=null,R=null,E=null,A=null,T=null,k=null,b=new $e(0,0,0),S=0,D=!1,Y=null,te=null,P=null,N=null,G=null,oe.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:we,bindFramebuffer:Xe,drawBuffers:U,useProgram:kt,setBlending:pe,setMaterial:pt,setFlipSided:Fe,setCullFace:M,setLineWidth:v,setPolygonOffset:F,setScissorTest:j,activeTexture:J,bindTexture:Q,unbindTexture:me,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:xe,texImage3D:de,updateUBOMapping:_t,uniformBlockBinding:ke,texStorage2D:Ge,texStorage3D:Re,texSubImage2D:Se,texSubImage3D:ze,compressedTexSubImage2D:Z,compressedTexSubImage3D:et,scissor:Ne,viewport:Ze,reset:ne}}function j_(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return m?new OffscreenCanvas(M,v):ca("canvas")}function _(M,v,F,j){let J=1;if((M.width>j||M.height>j)&&(J=j/Math.max(M.width,M.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let Q=v?oa:Math.floor,me=Q(J*M.width),ae=Q(J*M.height);u===void 0&&(u=g(me,ae));let ue=F?g(me,ae):u;return ue.width=me,ue.height=ae,ue.getContext("2d").drawImage(M,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+ae+")."),ue}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return Go(M.width)&&Go(M.height)}function p(M){return a?!1:M.wrapS!==Mn||M.wrapT!==Mn||M.minFilter!==Xt&&M.minFilter!==dn}function w(M,v){return M.generateMipmaps&&v&&M.minFilter!==Xt&&M.minFilter!==dn}function x(M){n.generateMipmap(M)}function R(M,v,F,j,J=!1){if(a===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=v;if(v===n.RED&&(F===n.FLOAT&&(Q=n.R32F),F===n.HALF_FLOAT&&(Q=n.R16F),F===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Q=n.R8UI),F===n.UNSIGNED_SHORT&&(Q=n.R16UI),F===n.UNSIGNED_INT&&(Q=n.R32UI),F===n.BYTE&&(Q=n.R8I),F===n.SHORT&&(Q=n.R16I),F===n.INT&&(Q=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Q=n.RG32F),F===n.HALF_FLOAT&&(Q=n.RG16F),F===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RGBA){let me=J?ia:tt.getTransfer(j);F===n.FLOAT&&(Q=n.RGBA32F),F===n.HALF_FLOAT&&(Q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Q=me===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(M,v,F){return w(M,F)===!0||M.isFramebufferTexture&&M.minFilter!==Xt&&M.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){return M===Xt||M===Sl||M===ao?n.NEAREST:n.LINEAR}function T(M){let v=M.target;v.removeEventListener("dispose",T),b(v),v.isVideoTexture&&h.delete(v)}function k(M){let v=M.target;v.removeEventListener("dispose",k),D(v)}function b(M){let v=i.get(M);if(v.__webglInit===void 0)return;let F=M.source,j=d.get(F);if(j){let J=j[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(M),Object.keys(j).length===0&&d.delete(F)}i.remove(M)}function S(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let F=M.source,j=d.get(F);delete j[v.__cacheKey],o.memory.textures--}function D(M){let v=M.texture,F=i.get(M),j=i.get(v);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let Q=0;Q<F.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(F.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)n.deleteFramebuffer(F.__webglFramebuffer[J]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,Q=v.length;J<Q;J++){let me=i.get(v[J]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(v[J])}i.remove(v),i.remove(M)}let Y=0;function te(){Y=0}function P(){let M=Y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),Y+=1,M}function N(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function G(M,v){let F=i.get(M);if(M.isVideoTexture&&pt(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,M,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function q(M,v){let F=i.get(M);if(M.version>0&&F.__version!==M.version){oe(F,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function X(M,v){let F=i.get(M);if(M.version>0&&F.__version!==M.version){oe(F,M,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function W(M,v){let F=i.get(M);if(M.version>0&&F.__version!==M.version){ve(F,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let K={[ko]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},ee={[Xt]:n.NEAREST,[Sl]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Lf]:n.LINEAR_MIPMAP_NEAREST,[Ks]:n.LINEAR_MIPMAP_LINEAR},le={[Wf]:n.NEVER,[Jf]:n.ALWAYS,[Xf]:n.LESS,[Kh]:n.LEQUAL,[qf]:n.EQUAL,[Zf]:n.GEQUAL,[Yf]:n.GREATER,[$f]:n.NOTEQUAL};function H(M,v,F){if(F?(n.texParameteri(M,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,K[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ee[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ee[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Mn||v.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Xt&&v.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Xt||v.minFilter!==ao&&v.minFilter!==Ks||v.type===fi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===js&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function $(M,v){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",T));let j=v.source,J=d.get(j);J===void 0&&(J={},d.set(j,J));let Q=N(v);if(Q!==M.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Q].usedTimes++;let me=J[M.__cacheKey];me!==void 0&&(J[M.__cacheKey].usedTimes--,me.usedTimes===0&&S(v)),M.__cacheKey=Q,M.__webglTexture=J[Q].texture}return F}function oe(M,v,F){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);let J=$(M,v),Q=v.source;t.bindTexture(j,M.__webglTexture,n.TEXTURE0+F);let me=i.get(Q);if(Q.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+F);let ae=tt.getPrimaries(tt.workingColorSpace),ue=v.colorSpace===fn?null:tt.getPrimaries(v.colorSpace),Se=v.colorSpace===fn||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ze=p(v)&&f(v.image)===!1,Z=_(v.image,ze,!1,s.maxTextureSize);Z=Fe(v,Z);let et=f(Z)||a,Ge=r.convert(v.format,v.colorSpace),Re=r.convert(v.type),xe=R(v.internalFormat,Ge,Re,v.colorSpace,v.isVideoTexture);H(j,v,et);let de,Ne=v.mipmaps,Ze=a&&v.isVideoTexture!==!0&&xe!==Zh,_t=me.__version===void 0||J===!0,ke=E(v,Z,et);if(v.isDepthTexture)xe=n.DEPTH_COMPONENT,a?v.type===fi?xe=n.DEPTH_COMPONENT32F:v.type===di?xe=n.DEPTH_COMPONENT24:v.type===Bi?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:v.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ki&&xe===n.DEPTH_COMPONENT&&v.type!==_c&&v.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=di,Re=r.convert(v.type)),v.format===Cs&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,v.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Bi,Re=r.convert(v.type))),_t&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,xe,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,xe,Z.width,Z.height,0,Ge,Re,null));else if(v.isDataTexture)if(Ne.length>0&&et){Ze&&_t&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let ne=0,C=Ne.length;ne<C;ne++)de=Ne[ne],Ze?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,Ge,Re,de.data):t.texImage2D(n.TEXTURE_2D,ne,xe,de.width,de.height,0,Ge,Re,de.data);v.generateMipmaps=!1}else Ze?(_t&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Ge,Re,Z.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Z.width,Z.height,0,Ge,Re,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ze&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Ne[0].width,Ne[0].height,Z.depth);for(let ne=0,C=Ne.length;ne<C;ne++)de=Ne[ne],v.format!==Sn?Ge!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,Ge,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,xe,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,Ge,Re,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,xe,de.width,de.height,Z.depth,0,Ge,Re,de.data)}else{Ze&&_t&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let ne=0,C=Ne.length;ne<C;ne++)de=Ne[ne],v.format!==Sn?Ge!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,Ge,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,Ge,Re,de.data):t.texImage2D(n.TEXTURE_2D,ne,xe,de.width,de.height,0,Ge,Re,de.data)}else if(v.isDataArrayTexture)Ze?(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ge,Re,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,Ge,Re,Z.data);else if(v.isData3DTexture)Ze?(_t&&t.texStorage3D(n.TEXTURE_3D,ke,xe,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ge,Re,Z.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,Ge,Re,Z.data);else if(v.isFramebufferTexture){if(_t)if(Ze)t.texStorage2D(n.TEXTURE_2D,ke,xe,Z.width,Z.height);else{let ne=Z.width,C=Z.height;for(let se=0;se<ke;se++)t.texImage2D(n.TEXTURE_2D,se,xe,ne,C,0,Ge,Re,null),ne>>=1,C>>=1}}else if(Ne.length>0&&et){Ze&&_t&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let ne=0,C=Ne.length;ne<C;ne++)de=Ne[ne],Ze?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Ge,Re,de):t.texImage2D(n.TEXTURE_2D,ne,xe,Ge,Re,de);v.generateMipmaps=!1}else Ze?(_t&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Re,Z)):t.texImage2D(n.TEXTURE_2D,0,xe,Ge,Re,Z);w(v,et)&&x(j),me.__version=Q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ve(M,v,F){if(v.image.length!==6)return;let j=$(M,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let Q=i.get(J);if(J.version!==Q.__version||j===!0){t.activeTexture(n.TEXTURE0+F);let me=tt.getPrimaries(tt.workingColorSpace),ae=v.colorSpace===fn?null:tt.getPrimaries(v.colorSpace),ue=v.colorSpace===fn||me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ze=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!Se&&!ze?Z[ne]=_(v.image[ne],!1,!0,s.maxCubemapSize):Z[ne]=ze?v.image[ne].image:v.image[ne],Z[ne]=Fe(v,Z[ne]);let et=Z[0],Ge=f(et)||a,Re=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),de=R(v.internalFormat,Re,xe,v.colorSpace),Ne=a&&v.isVideoTexture!==!0,Ze=Q.__version===void 0||j===!0,_t=E(v,et,Ge);H(n.TEXTURE_CUBE_MAP,v,Ge);let ke;if(Se){Ne&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_t,de,et.width,et.height);for(let ne=0;ne<6;ne++){ke=Z[ne].mipmaps;for(let C=0;C<ke.length;C++){let se=ke[C];v.format!==Sn?Re!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Re,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Re,xe,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,Re,xe,se.data)}}}else{ke=v.mipmaps,Ne&&Ze&&(ke.length>0&&_t++,t.texStorage2D(n.TEXTURE_CUBE_MAP,_t,de,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(ze){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,Re,xe,Z[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Z[ne].width,Z[ne].height,0,Re,xe,Z[ne].data);for(let C=0;C<ke.length;C++){let re=ke[C].image[ne].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Re,xe,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,re.width,re.height,0,Re,xe,re.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,xe,Z[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Re,xe,Z[ne]);for(let C=0;C<ke.length;C++){let se=ke[C];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Re,xe,se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,Re,xe,se.image[ne])}}}w(v,Ge)&&x(n.TEXTURE_CUBE_MAP),Q.__version=J.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function _e(M,v,F,j,J,Q){let me=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),ue=R(F.internalFormat,me,ae,F.colorSpace);if(!i.get(v).__hasExternalTextures){let ze=Math.max(1,v.width>>Q),Z=Math.max(1,v.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,ue,ze,Z,v.depth,0,me,ae,null):t.texImage2D(J,Q,ue,ze,Z,0,me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),pe(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,i.get(F).__webglTexture,0,Ce(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,i.get(F).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(M,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||pe(v)){let J=v.depthTexture;J&&J.isDepthTexture&&(J.type===fi?j=n.DEPTH_COMPONENT32F:J.type===di&&(j=n.DEPTH_COMPONENT24));let Q=Ce(v);pe(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,j,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,j,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){let j=Ce(v);F&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):pe(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let j=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<j.length;J++){let Q=j[J],me=r.convert(Q.format,Q.colorSpace),ae=r.convert(Q.type),ue=R(Q.internalFormat,me,ae,Q.colorSpace),Se=Ce(v);F&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ue,v.width,v.height):pe(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);let j=i.get(v.depthTexture).__webglTexture,J=Ce(v);if(v.depthTexture.format===ki)pe(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===Cs)pe(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function we(M){let v=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,M)}else if(F){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=n.createRenderbuffer(),Le(v.__webglDepthbuffer[j],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Le(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(M,v,F){let j=i.get(M);v!==void 0&&_e(j.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&we(M)}function U(M){let v=M.texture,F=i.get(M),j=i.get(v);M.addEventListener("dispose",k),M.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++);let J=M.isWebGLCubeRenderTarget===!0,Q=M.isWebGLMultipleRenderTargets===!0,me=f(M)||a;if(J){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let ue=0;ue<v.mipmaps.length;ue++)F.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else F.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)F.__webglFramebuffer[ae]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Q)if(s.drawBuffers){let ae=M.texture;for(let ue=0,Se=ae.length;ue<Se;ue++){let ze=i.get(ae[ue]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&pe(M)===!1){let ae=Q?v:[v];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Se=ae[ue];F.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);let ze=r.convert(Se.format,Se.colorSpace),Z=r.convert(Se.type),et=R(Se.internalFormat,ze,Z,Se.colorSpace,M.isXRRenderTarget===!0),Ge=Ce(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,et,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),H(n.TEXTURE_CUBE_MAP,v,me);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(F.__webglFramebuffer[ae][ue],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else _e(F.__webglFramebuffer[ae],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);w(v,me)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let ae=M.texture;for(let ue=0,Se=ae.length;ue<Se;ue++){let ze=ae[ue],Z=i.get(ze);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),H(n.TEXTURE_2D,ze,me),_e(F.__webglFramebuffer,M,ze,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),w(ze,me)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,j.__webglTexture),H(ae,v,me),a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)_e(F.__webglFramebuffer[ue],M,v,n.COLOR_ATTACHMENT0,ae,ue);else _e(F.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ae,0);w(v,me)&&x(ae),t.unbindTexture()}M.depthBuffer&&we(M)}function kt(M){let v=f(M)||a,F=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0,J=F.length;j<J;j++){let Q=F[j];if(w(Q,v)){let me=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(Q).__webglTexture;t.bindTexture(me,ae),x(me),t.unbindTexture()}}}function ye(M){if(a&&M.samples>0&&pe(M)===!1){let v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],F=M.width,j=M.height,J=n.COLOR_BUFFER_BIT,Q=[],me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(M),ue=M.isWebGLMultipleRenderTargets===!0;if(ue)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){Q.push(n.COLOR_ATTACHMENT0+Se),M.depthBuffer&&Q.push(me);let ze=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ze===!1&&(M.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),ue){let Z=i.get(v[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);let ze=i.get(v[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ce(M){return Math.min(s.maxSamples,M.samples)}function pe(M){let v=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(M){let v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function Fe(M,v){let F=M.colorSpace,j=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Vo||F!==Jn&&F!==fn&&(tt.getTransfer(F)===ct?a===!1?e.has("EXT_sRGB")===!0&&j===Sn?(M.format=Vo,M.minFilter=dn,M.generateMipmaps=!1):v=la.sRGBToLinear(v):(j!==Sn||J!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe}function Q_(n,e,t){let i=t.isWebGL2;function s(r,o=fn){let a,c=tt.getTransfer(o);if(r===_i)return n.UNSIGNED_BYTE;if(r===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===If)return n.BYTE;if(r===Df)return n.SHORT;if(r===_c)return n.UNSIGNED_SHORT;if(r===Gh)return n.INT;if(r===di)return n.UNSIGNED_INT;if(r===fi)return n.FLOAT;if(r===js)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nf)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===Uf)return n.LUMINANCE;if(r===Of)return n.LUMINANCE_ALPHA;if(r===ki)return n.DEPTH_COMPONENT;if(r===Cs)return n.DEPTH_STENCIL;if(r===Vo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ff)return n.RED;if(r===qh)return n.RED_INTEGER;if(r===zf)return n.RG;if(r===Yh)return n.RG_INTEGER;if(r===$h)return n.RGBA_INTEGER;if(r===oo||r===co||r===lo||r===ho)if(c===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wl||r===El||r===Al||r===Tl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===El)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Al)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rl||r===Cl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rl)return c===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pl||r===Ll||r===Il||r===Dl||r===Nl||r===Ul||r===Ol||r===Fl||r===zl||r===Bl||r===kl||r===Hl||r===Vl||r===Gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ll)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Il)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ul)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ol)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gl)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uo||r===Wl||r===Xl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===uo)return c===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bf||r===ql||r===Yl||r===$l)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===uo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ql)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ic=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pi=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},ev={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,i),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sc=class extends xi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=t.getContextAttributes(),f=null,p=null,w=[],x=[],R=new Ye,E=null,A=new Yt;A.layers.enable(1),A.viewport=new Dt;let T=new Yt;T.layers.enable(2),T.viewport=new Dt;let k=[A,T],b=new ic;b.layers.enable(1),b.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=w[H];return $===void 0&&($=new Js,w[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=w[H];return $===void 0&&($=new Js,w[H]=$),$.getGripSpace()},this.getHand=function(H){let $=w[H];return $===void 0&&($=new Js,w[H]=$),$.getHandSpace()};function Y(H){let $=x.indexOf(H.inputSource);if($===-1)return;let oe=w[$];oe!==void 0&&(oe.update(H.inputSource,H.frame,l||o),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",P);for(let H=0;H<w.length;H++){let $=x[H];$!==null&&(x[H]=null,w[H].disconnect($))}S=null,D=null,e.setRenderTarget(f),m=null,d=null,u=null,s=null,p=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",te),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Kn(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,oe=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Cs:ki,oe=_.stencil?Bi:di);let _e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Kn(d.textureWidth,d.textureHeight,{format:Sn,type:_i,depthTexture:new xa(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Le=e.properties.get(p);Le.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(H){for(let $=0;$<H.removed.length;$++){let oe=H.removed[$],ve=x.indexOf(oe);ve>=0&&(x[ve]=null,w[ve].disconnect(oe))}for(let $=0;$<H.added.length;$++){let oe=H.added[$],ve=x.indexOf(oe);if(ve===-1){for(let Le=0;Le<w.length;Le++)if(Le>=x.length){x.push(oe),ve=Le;break}else if(x[Le]===null){x[Le]=oe,ve=Le;break}if(ve===-1)break}let _e=w[ve];_e&&_e.connect(oe)}}let N=new L,G=new L;function q(H,$,oe){N.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);let ve=N.distanceTo(G),_e=$.projectionMatrix.elements,Le=oe.projectionMatrix.elements,De=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],kt=(_e[8]-1)/_e[0],ye=(Le[8]+1)/Le[0],Ce=De*kt,pe=De*ye,pt=ve/(-kt+ye),Fe=pt*-kt;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Fe),H.translateZ(pt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let M=De+pt,v=we+pt,F=Ce-Fe,j=pe+(ve-Fe),J=Xe*we/v*M,Q=U*we/v*M;H.projectionMatrix.makePerspective(F,j,J,Q,M,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;b.near=T.near=A.near=H.near,b.far=T.far=A.far=H.far,(S!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,D=b.far);let $=H.parent,oe=b.cameras;X(b,$);for(let ve=0;ve<oe.length;ve++)X(oe[ve],$);oe.length===2?q(b,A,T):b.projectionMatrix.copy(A.projectionMatrix),W(H,b,$)};function W(H,$,oe){oe===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Qs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let K=null;function ee(H,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ve=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let _e=0;_e<oe.length;_e++){let Le=oe[_e],De=null;if(m!==null)De=m.getViewport(Le);else{let Xe=u.getViewSubImage(d,Le);De=Xe.viewport,_e===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let we=k[_e];we===void 0&&(we=new Yt,we.layers.enable(_e),we.viewport=new Dt,k[_e]=we),we.matrix.fromArray(Le.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Le.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(we)}}for(let oe=0;oe<w.length;oe++){let ve=x[oe],_e=w[oe];ve!==null&&_e!==void 0&&_e.update(ve,$,l||o)}K&&K(H,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let le=new nu;le.setAnimationLoop(ee),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}};function tv(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,tu(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,x,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,R)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,w,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let w=e.get(p).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,w,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=x*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let w=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nv(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,x){let R=x.program;i.uniformBlockBinding(w,R)}function l(w,x){let R=s[w.id];R===void 0&&(g(w),R=h(w),s[w.id]=R,w.addEventListener("dispose",f));let E=x.program;i.updateUBOMapping(w,E);let A=e.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){let x=u();w.__bindingPointIndex=x;let R=n.createBuffer(),E=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,R),R}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let x=s[w.id],R=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=R.length;A<T;A++){let k=Array.isArray(R[A])?R[A]:[R[A]];for(let b=0,S=k.length;b<S;b++){let D=k[b];if(m(D,A,b,E)===!0){let Y=D.__offset,te=Array.isArray(D.value)?D.value:[D.value],P=0;for(let N=0;N<te.length;N++){let G=te[N],q=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,Y+P,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,x,R,E){let A=w.value,T=x+"_"+R;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{let k=E[T];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return E[T]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(w){let x=w.uniforms,R=0,E=16;for(let T=0,k=x.length;T<k;T++){let b=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,D=b.length;S<D;S++){let Y=b[S],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,N=te.length;P<N;P++){let G=te[P],q=_(G),X=R%E;X!==0&&E-X<q.boundary&&(R+=E-X),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=q.storage}}}let A=R%E;return A>0&&(R+=E-A),w.__size=R,w.__cache={},this}function _(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function f(w){let x=w.target;x.removeEventListener("dispose",f);let R=o.indexOf(x.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ir=class{constructor(e={}){let{canvas:t=up(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;let x=this,R=!1,E=0,A=0,T=null,k=-1,b=null,S=new Dt,D=new Dt,Y=null,te=new $e(0),P=0,N=t.width,G=t.height,q=1,X=null,W=null,K=new Dt(0,0,N,G),ee=new Dt(0,0,N,G),le=!1,H=new _a,$=!1,oe=!1,ve=null,_e=new Je,Le=new Ye,De=new L,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return T===null?q:1}let U=i;function kt(y,I){for(let z=0;z<y.length;z++){let B=y[z],O=t.getContext(B,I);if(O!==null)return O}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),U=kt(I,y),U===null)throw kt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Ce,pe,pt,Fe,M,v,F,j,J,Q,me,ae,ue,Se,ze,Z,et,Ge,Re,xe,de,Ne,Ze;function _t(){ye=new b0(U),Ce=new m0(U,ye,e),ye.init(Ce),de=new Q_(U,ye,Ce),pe=new K_(U,ye,Ce),pt=new w0(U),Fe=new B_,M=new j_(U,ye,pe,Fe,Ce,de,pt),v=new _0(x),F=new y0(x),j=new Ip(U,Ce),Ne=new f0(U,ye,j,Ce),J=new M0(U,j,pt,Ne),Q=new R0(U,J,j,pt),Ge=new T0(U,Ce,M),ze=new g0(Fe),me=new z_(x,v,F,ye,Ce,Ne,ze),ae=new tv(x,Fe),ue=new H_,Se=new Y_(ye,Ce),et=new d0(x,v,F,pe,Q,d,c),Z=new J_(x,Q,Ce),Ze=new nv(U,pt,Ce,pe),Re=new p0(U,ye,pt,Ce),xe=new S0(U,ye,pt,Ce),pt.programs=me.programs,x.capabilities=Ce,x.extensions=ye,x.properties=Fe,x.renderLists=ue,x.shadowMap=Z,x.state=pe,x.info=pt}_t();let ke=new sc(x,U);this.xr=ke,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(N,G,!1))},this.getSize=function(y){return y.set(N,G)},this.setSize=function(y,I,z=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,G=I,t.width=Math.floor(y*q),t.height=Math.floor(I*q),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(N*q,G*q).floor()},this.setDrawingBufferSize=function(y,I,z){N=y,G=I,q=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,I,z,B){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,I,z,B),pe.viewport(S.copy(K).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(ee)},this.setScissor=function(y,I,z,B){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,I,z,B),pe.scissor(D.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(y){pe.setScissorTest(le=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){W=y},this.getClearColor=function(y){return y.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(y=!0,I=!0,z=!0){let B=0;if(y){let O=!1;if(T!==null){let ce=T.texture.format;O=ce===$h||ce===Yh||ce===qh}if(O){let ce=T.texture.type,ge=ce===_i||ce===di||ce===_c||ce===Bi||ce===Wh||ce===Xh,Me=et.getClearColor(),Ae=et.getClearAlpha(),Be=Me.r,Pe=Me.g,Ie=Me.b;ge?(m[0]=Be,m[1]=Pe,m[2]=Ie,m[3]=Ae,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Be,g[1]=Pe,g[2]=Ie,g[3]=Ae,U.clearBufferiv(U.COLOR,0,g))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),z&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),Se.dispose(),Fe.dispose(),v.dispose(),F.dispose(),Q.dispose(),Ne.dispose(),Ze.dispose(),me.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ht),ke.removeEventListener("sessionend",at),ve&&(ve.dispose(),ve=null),Vt.stop()};function ne(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=pt.autoReset,I=Z.enabled,z=Z.autoUpdate,B=Z.needsUpdate,O=Z.type;_t(),pt.autoReset=y,Z.enabled=I,Z.autoUpdate=z,Z.needsUpdate=B,Z.type=O}function se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function re(y){let I=y.target;I.removeEventListener("dispose",re),Ee(I)}function Ee(y){be(y),Fe.remove(y)}function be(y){let I=Fe.get(y).programs;I!==void 0&&(I.forEach(function(z){me.releaseProgram(z)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,B,O,ce){I===null&&(I=we);let ge=O.isMesh&&O.matrixWorld.determinant()<0,Me=qd(y,I,z,B,O);pe.setMaterial(B,ge);let Ae=z.index,Be=1;if(B.wireframe===!0){if(Ae=J.getWireframeAttribute(z),Ae===void 0)return;Be=2}let Pe=z.drawRange,Ie=z.attributes.position,yt=Pe.start*Be,nn=(Pe.start+Pe.count)*Be;ce!==null&&(yt=Math.max(yt,ce.start*Be),nn=Math.min(nn,(ce.start+ce.count)*Be)),Ae!==null?(yt=Math.max(yt,0),nn=Math.min(nn,Ae.count)):Ie!=null&&(yt=Math.max(yt,0),nn=Math.min(nn,Ie.count));let Rt=nn-yt;if(Rt<0||Rt===1/0)return;Ne.setup(O,B,Me,z,Ae);let kn,mt=Re;if(Ae!==null&&(kn=j.get(Ae),mt=xe,mt.setIndex(kn)),O.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*Xe()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(O.isLine){let He=B.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*Xe()),O.isLineSegments?mt.setMode(U.LINES):O.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else O.isPoints?mt.setMode(U.POINTS):O.isSprite&&mt.setMode(U.TRIANGLES);if(O.isBatchedMesh)mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)mt.renderInstances(yt,Rt,O.count);else if(z.isInstancedBufferGeometry){let He=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,no=Math.min(z.instanceCount,He);mt.renderInstances(yt,Rt,no)}else mt.render(yt,Rt)};function st(y,I,z){y.transparent===!0&&y.side===Yn&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,Pr(y,I,z),y.side=vi,y.needsUpdate=!0,Pr(y,I,z),y.side=Yn):Pr(y,I,z)}this.compile=function(y,I,z=null){z===null&&(z=y),f=Se.get(z),f.init(),w.push(f),z.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==z&&y.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(x._useLegacyLights);let B=new Set;return y.traverse(function(O){let ce=O.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let Me=ce[ge];st(Me,z,O),B.add(Me)}else st(ce,z,O),B.add(ce)}),w.pop(),f=null,B},this.compileAsync=function(y,I,z=null){let B=this.compile(y,I,z);return new Promise(O=>{function ce(){if(B.forEach(function(ge){Fe.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){O(y);return}setTimeout(ce,10)}ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let rt=null;function Tt(y){rt&&rt(y)}function Ht(){Vt.stop()}function at(){Vt.start()}let Vt=new nu;Vt.setAnimationLoop(Tt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(y){rt=y,ke.setAnimationLoop(y),y===null?Vt.stop():Vt.start()},ke.addEventListener("sessionstart",Ht),ke.addEventListener("sessionend",at),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(I),I=ke.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,T),f=Se.get(y,w.length),f.init(),w.push(f),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,$=ze.init(this.clippingPlanes,oe),_=ue.get(y,p.length),_.init(),p.push(_),Pn(y,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,$===!0&&ze.beginShadows();let z=f.state.shadowsArray;if(Z.render(z,y,I),$===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,y),f.setupLights(x._useLegacyLights),I.isArrayCamera){let B=I.cameras;for(let O=0,ce=B.length;O<ce;O++){let ge=B[O];ul(_,y,ge,ge.viewport)}}else ul(_,y,I);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(x,y,I),Ne.resetDefaultState(),k=-1,b=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(y,I,z,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||H.intersectsSprite(y)){B&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);let ge=Q.update(y),Me=y.material;Me.visible&&_.push(y,ge,Me,z,De.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||H.intersectsObject(y))){let ge=Q.update(y),Me=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),De.copy(ge.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(_e)),Array.isArray(Me)){let Ae=ge.groups;for(let Be=0,Pe=Ae.length;Be<Pe;Be++){let Ie=Ae[Be],yt=Me[Ie.materialIndex];yt&&yt.visible&&_.push(y,ge,yt,z,De.z,Ie)}}else Me.visible&&_.push(y,ge,Me,z,De.z,null)}}let ce=y.children;for(let ge=0,Me=ce.length;ge<Me;ge++)Pn(ce[ge],I,z,B)}function ul(y,I,z,B){let O=y.opaque,ce=y.transmissive,ge=y.transparent;f.setupLightsView(z),$===!0&&ze.setGlobalState(x.clippingPlanes,z),ce.length>0&&Xd(O,ce,I,z),B&&pe.viewport(S.copy(B)),O.length>0&&Cr(O,I,z),ce.length>0&&Cr(ce,I,z),ge.length>0&&Cr(ge,I,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Xd(y,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ce=Ce.isWebGL2;ve===null&&(ve=new Kn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?js:_i,minFilter:Ks,samples:ce?4:0})),x.getDrawingBufferSize(Le),ce?ve.setSize(Le.x,Le.y):ve.setSize(oa(Le.x),oa(Le.y));let ge=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(te),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Me=x.toneMapping;x.toneMapping=gi,Cr(y,z,B),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let Ae=!1;for(let Be=0,Pe=I.length;Be<Pe;Be++){let Ie=I[Be],yt=Ie.object,nn=Ie.geometry,Rt=Ie.material,kn=Ie.group;if(Rt.side===Yn&&yt.layers.test(B.layers)){let mt=Rt.side;Rt.side=Qt,Rt.needsUpdate=!0,dl(yt,z,B,nn,Rt,kn),Rt.side=mt,Rt.needsUpdate=!0,Ae=!0}}Ae===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),x.setRenderTarget(ge),x.setClearColor(te,P),x.toneMapping=Me}function Cr(y,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ce=y.length;O<ce;O++){let ge=y[O],Me=ge.object,Ae=ge.geometry,Be=B===null?ge.material:B,Pe=ge.group;Me.layers.test(z.layers)&&dl(Me,I,z,Ae,Be,Pe)}}function dl(y,I,z,B,O,ce){y.onBeforeRender(x,I,z,B,O,ce),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,I,z,B,y,ce),O.transparent===!0&&O.side===Yn&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,y,ce),O.side=vi,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,y,ce),O.side=Yn):x.renderBufferDirect(z,I,B,O,y,ce),y.onAfterRender(x,I,z,B,O,ce)}function Pr(y,I,z){I.isScene!==!0&&(I=we);let B=Fe.get(y),O=f.state.lights,ce=f.state.shadowsArray,ge=O.state.version,Me=me.getParameters(y,O.state,ce,I,z),Ae=me.getProgramCacheKey(Me),Be=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?F:v).get(y.envMap||B.environment),Be===void 0&&(y.addEventListener("dispose",re),Be=new Map,B.programs=Be);let Pe=Be.get(Ae);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===ge)return pl(y,Me),Pe}else Me.uniforms=me.getUniforms(y),y.onBuild(z,Me,x),y.onBeforeCompile(Me,x),Pe=me.acquireProgram(Me,Ae),Be.set(Ae,Pe),B.uniforms=Me.uniforms;let Ie=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=ze.uniform),pl(y,Me),B.needsLights=$d(y),B.lightsStateVersion=ge,B.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Pe,B.uniformsList=null,Pe}function fl(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=As.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function pl(y,I){let z=Fe.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function qd(y,I,z,B,O){I.isScene!==!0&&(I=we),M.resetTextureUnits();let ce=I.fog,ge=B.isMeshStandardMaterial?I.environment:null,Me=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Jn,Ae=(B.isMeshStandardMaterial?F:v).get(B.envMap||ge),Be=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!z.morphAttributes.position,yt=!!z.morphAttributes.normal,nn=!!z.morphAttributes.color,Rt=gi;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let kn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=kn!==void 0?kn.length:0,He=Fe.get(B),no=f.state.lights;if($===!0&&(oe===!0||y!==b)){let hn=y===b&&B.id===k;ze.setState(B,y,hn)}let vt=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==no.state.version||He.outputColorSpace!==Me||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||He.envMap!==Ae||B.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ze.numPlanes||He.numIntersection!==ze.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Pe||He.morphTargets!==Ie||He.morphNormals!==yt||He.morphColors!==nn||He.toneMapping!==Rt||Ce.isWebGL2===!0&&He.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,He.__version=B.version);let Pi=He.currentProgram;vt===!0&&(Pi=Pr(B,I,O));let ml=!1,Vs=!1,io=!1,Ut=Pi.getUniforms(),Li=He.uniforms;if(pe.useProgram(Pi.program)&&(ml=!0,Vs=!0,io=!0),B.id!==k&&(k=B.id,Vs=!0),ml||b!==y){Ut.setValue(U,"projectionMatrix",y.projectionMatrix),Ut.setValue(U,"viewMatrix",y.matrixWorldInverse);let hn=Ut.map.cameraPosition;hn!==void 0&&hn.setValue(U,De.setFromMatrixPosition(y.matrixWorld)),Ce.logarithmicDepthBuffer&&Ut.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ut.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Vs=!0,io=!0)}if(O.isSkinnedMesh){Ut.setOptional(U,O,"bindMatrix"),Ut.setOptional(U,O,"bindMatrixInverse");let hn=O.skeleton;hn&&(Ce.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Ut.setValue(U,"boneTexture",hn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ut.setOptional(U,O,"batchingTexture"),Ut.setValue(U,"batchingTexture",O._matricesTexture,M));let so=z.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(O,z,Pi),(Vs||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,Ut.setValue(U,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Li.envMap.value=Ae,Li.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Vs&&(Ut.setValue(U,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Yd(Li,io),ce&&B.fog===!0&&ae.refreshFogUniforms(Li,ce),ae.refreshMaterialUniforms(Li,B,q,G,ve),As.upload(U,fl(He),Li,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(As.upload(U,fl(He),Li,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ut.setValue(U,"center",O.center),Ut.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ut.setValue(U,"normalMatrix",O.normalMatrix),Ut.setValue(U,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let hn=B.uniformsGroups;for(let ro=0,Zd=hn.length;ro<Zd;ro++)if(Ce.isWebGL2){let gl=hn[ro];Ze.update(gl,Pi),Ze.bind(gl,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Yd(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function $d(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,I,z){Fe.get(y.texture).__webglTexture=I,Fe.get(y.depthTexture).__webglTexture=z;let B=Fe.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let z=Fe.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,z=0){T=y,E=I,A=z;let B=!0,O=null,ce=!1,ge=!1;if(y){let Ae=Fe.get(y);Ae.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?M.setupRenderTarget(y):Ae.__hasExternalTextures&&M.rebindTextures(y,Fe.get(y.texture).__webglTexture,Fe.get(y.depthTexture).__webglTexture);let Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);let Pe=Fe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?O=Pe[I][z]:O=Pe[I],ce=!0):Ce.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?O=Fe.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?O=Pe[z]:O=Pe,S.copy(y.viewport),D.copy(y.scissor),Y=y.scissorTest}else S.copy(K).multiplyScalar(q).floor(),D.copy(ee).multiplyScalar(q).floor(),Y=le;if(pe.bindFramebuffer(U.FRAMEBUFFER,O)&&Ce.drawBuffers&&B&&pe.drawBuffers(y,O),pe.viewport(S),pe.scissor(D),pe.setScissorTest(Y),ce){let Ae=Fe.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,z)}else if(ge){let Ae=Fe.get(y.texture),Be=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Be)}k=-1},this.readRenderTargetPixels=function(y,I,z,B,O,ce,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){pe.bindFramebuffer(U.FRAMEBUFFER,Me);try{let Ae=y.texture,Be=Ae.format,Pe=Ae.type;if(Be!==Sn&&de.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=Pe===js&&(ye.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Pe!==_i&&de.convert(Pe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===fi&&(Ce.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&z>=0&&z<=y.height-O&&U.readPixels(I,z,B,O,de.convert(Be),de.convert(Pe),ce)}finally{let Ae=T!==null?Fe.get(T).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,I,z=0){let B=Math.pow(2,-z),O=Math.floor(I.image.width*B),ce=Math.floor(I.image.height*B);M.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,y.x,y.y,O,ce),pe.unbindTexture()},this.copyTextureToTexture=function(y,I,z,B=0){let O=I.image.width,ce=I.image.height,ge=de.convert(z.format),Me=de.convert(z.type);M.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,y.x,y.y,O,ce,ge,Me,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,ge,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,y.x,y.y,ge,Me,I.image),B===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(y,I,z,B,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=y.max.x-y.min.x+1,ge=y.max.y-y.min.y+1,Me=y.max.z-y.min.z+1,Ae=de.convert(B.format),Be=de.convert(B.type),Pe;if(B.isData3DTexture)M.setTexture3D(B,0),Pe=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)M.setTexture2DArray(B,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Ie=U.getParameter(U.UNPACK_ROW_LENGTH),yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),Rt=U.getParameter(U.UNPACK_SKIP_ROWS),kn=U.getParameter(U.UNPACK_SKIP_IMAGES),mt=z.isCompressedTexture?z.mipmaps[O]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,y.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,y.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,y.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Pe,O,I.x,I.y,I.z,ce,ge,Me,Ae,Be,mt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Pe,O,I.x,I.y,I.z,ce,ge,Me,Ae,mt.data)):U.texSubImage3D(Pe,O,I.x,I.y,I.z,ce,ge,Me,Ae,Be,mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kn),O===0&&B.generateMipmaps&&U.generateMipmap(Pe),pe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){E=0,A=0,T=null,pe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vc?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ma?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Hi:Jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?It:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},rc=class extends ir{};rc.prototype.isWebGL1Renderer=!0;var ya=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function Qr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Is=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ac=class extends Is{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jl:r=e,a=2*t-i;break;case Kl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Jl:o=e,c=2*i-t;break;case Kl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,w=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,R=m*f-m*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+w*o[l+E]+x*o[c+E]+R*o[u+E];return r}},oc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},cc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&iv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=na;var Wi=class extends En{};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ta;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends En{};lc.prototype.ValueTypeName="color";var hc=class extends En{};hc.prototype.ValueTypeName="number";var uc=class extends Is{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Zt.slerpFlat(r,0,o,l-a,o,l,c);return r}},sr=class extends En{InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.DefaultInterpolation=na;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends En{};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ta;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends En{};dc.prototype.ValueTypeName="vector";var fc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},sv=new fc,pc=class{constructor(e){this.manager=e!==void 0?e:sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var bc="\\[\\]\\.:\\/",rv=new RegExp("["+bc+"]","g"),Mc="[^"+bc+"]",av="[^"+bc.replace("\\.","")+"]",ov=/((?:WC+[\/:])*)/.source.replace("WC",Mc),cv=/(WCOD+)?/.source.replace("WCOD",av),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),uv=new RegExp("^"+ov+cv+lv+hv+"$"),dv=["material","materials","bones","map"],mc=class{constructor(e,t,i){let s=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(e){let t=uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=mc;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);var rr=class{constructor(e,t,i=0,s=1/0){this.ray=new da(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return gc(e,this,i,t),i.sort(Bh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gc(e[s],this,i,t);return i.sort(Bh),i}};function Bh(n,e){return n.distance-e.distance}function gc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)gc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var en=Object.freeze({version:7,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.9,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function cu(n){if(n.comfortVersion===en.version)return n;let e={...n,comfortVersion:en.version,winDist:en.windowDistance,dockDist:1};return(n.winScale==null||n.winScale===1)&&(e.winScale=en.windowScale),e}function fv(n,e){return n>0&&e>0?n/e:16/9}function wa(n,e,t){let i=fv(n,e),s=t>0?t:i,r,o;s>=i?(r=n,o=n/s):(o=e,r=e*s);let a=Math.round((n-r)/2),c=Math.round((e-o)/2),l=Math.round(r),h=Math.round(o);return{x:a,y:c,w:l,h,u0:a/n,v0:c/e,uw:l/n,vh:h/e}}function wc(n,e,t,i,s){let r=wa(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var pv=4096,Ea={width:1200,height:800},Us=160;function mv(n,e=pv){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(t)+Us*2,a=Math.ceil(i)+Us*2,c=s==="window"?r%3*1360:0,l=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:e)||a>h||c+o>e||l+a>e)throw new Error("Workspace texture is full; close a window first.");return[c,l,o,a]})}var Aa=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var h;e.updateMatrixWorld(!0);let t=[];e.traverse(u=>{u.isCSS3DObject&&u.visible&&t.push(u)});for(let u of t)u.element.parentNode!==this.domElement&&this.domElement.append(u.element),u.element.style.transform="none";for(let u of this.slots.keys())t.some(d=>d.id===u)||this.slots.delete(u);let i=t.map(u=>{let d=u.element.classList.contains("dock")?"dock":u.element.classList.contains("kb")?"keyboard":"window";if(d==="window"&&!this.slots.has(u.id)){let m=new Set(this.slots.values()),g=0;for(;m.has(g);)g++;this.slots.set(u.id,g)}return{width:u.element.offsetWidth,height:u.element.offsetHeight,kind:d,slot:this.slots.get(u.id)||0}}),s;try{s=mv(i)}catch(u){this.lastError!==u.message&&(this.lastError=u.message,(h=window.nextvrMessage)==null||h.call(window,u.message));return}let r=[],o=[];t.forEach((u,d)=>{let m=u.element,[g,_,f,p]=s[d];m.style.left=`${g+Us}px`,m.style.top=`${_+Us}px`;let w=u.matrixWorld.clone().multiply(new Je().makeScale(f,p,1)),x=+(m.dataset.curve||0);r.push({id:m.dataset.windowId||(i[d].kind==="dock"?"dock":i[d].kind),matrix:w.toArray(),rect:s[d],curve:x,glass:[Us/f,Us/p,i[d].width/f,i[d].height/p]});let R=m.getBoundingClientRect();for(let E of m.querySelectorAll("[data-native-app]")){let A=E.getBoundingClientRect();if(!A.width||!A.height)continue;let T=+(E.dataset.aspect||0),k=wa(A.width,A.height,T),b=u.matrixWorld.clone().multiply(new Je().makeTranslation(A.left-R.left+k.x+k.w/2-i[d].width/2,i[d].height/2-(A.top-R.top+k.y+k.h/2),.5)).multiply(new Je().makeScale(k.w,k.h,1));r.push({browser:"app:"+E.dataset.nativeApp,matrix:b.toArray(),rect:[0,0,Math.round(A.width),Math.round(A.height)],curve:+(m.dataset.curve||0),uv:[k.u0,k.v0,k.uw,k.vh]});let S=[k.u0,k.v0,k.uw,k.vh].map(D=>D.toFixed(5)).join(",");E.dataset.uv!==S&&(E.dataset.uv=S)}for(let E of m.querySelectorAll("[data-native-browser]")){let A=E.getBoundingClientRect();if(!A.width||!A.height)continue;let T=E.dataset.nativeBrowser,k=E.dataset.url;if(!k)continue;let b=Math.round(A.width),S=Math.round(A.height),D={left:A.left,top:A.top,right:A.right,bottom:A.bottom};for(let N=E.parentElement;N&&N!==m;N=N.parentElement){let G=getComputedStyle(N);if(/(auto|scroll|hidden)/.test(G.overflow+G.overflowY)){let q=N.getBoundingClientRect();D.left=Math.max(D.left,q.left),D.top=Math.max(D.top,q.top),D.right=Math.min(D.right,q.right),D.bottom=Math.min(D.bottom,q.bottom)}}o.push({id:T,url:k,width:b,height:S});let Y=D.right-D.left,te=D.bottom-D.top;if(Y<=0||te<=0)continue;let P=u.matrixWorld.clone().multiply(new Je().makeTranslation(D.left-R.left+Y/2-i[d].width/2,i[d].height/2-(D.top-R.top+te/2),.5)).multiply(new Je().makeScale(Y,te,1));r.push({browser:T,matrix:P.toArray(),rect:[0,0,b,S],curve:+(m.dataset.curve||0),uv:[(D.left-A.left)/b,(A.bottom-D.bottom)/S,Y/b,te/S]})}});let a=2*Math.tan(jh.degToRad(36)),c=new Je().makeTranslation(0,0,-1).multiply(new Je().makeScale(a*1.5,a,1));r.push({overlay:!0,matrix:c.toArray(),rect:[0,0,Ea.width,Ea.height]});let l=performance.now();if(l-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=l;let u=JSON.stringify(r),d=JSON.stringify(o);(u!==this.sent||d!==this.sentSpecs)&&(this.sent=u,this.sentSpecs=d,window.NativeXR.frame(u,d))}}invalidate(){this.sent=this.sentSpecs=null}};var lu=new L,gv=new Zt,hu=new L,Os=class extends on{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var In=new Je,_v=new Je,Ta=class{constructor(e={}){let t=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(_,f){let p=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let w,x;f.isOrthographicCamera&&(w=-(f.right+f.left)/2,x=(f.top+f.bottom)/2);let R=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,E=f.isOrthographicCamera?`scale( ${R} )scale(`+p+")translate("+u(w)+"px,"+u(x)+"px)"+d(f.matrixWorldInverse):`scale( ${R} )translateZ(`+p+"px)"+d(f.matrixWorldInverse),T=(f.isPerspectiveCamera?"perspective("+p+"px) ":"")+E+"translate("+r+"px,"+o+"px)";a.camera.style!==T&&(h.style.transform=T,a.camera.style=T),g(_,_,f,E)},this.setSize=function(_,f){i=_,s=f,r=i/2,o=s/2,c.style.width=_+"px",c.style.height=f+"px",l.style.width=_+"px",l.style.height=f+"px",h.style.width=_+"px",h.style.height=f+"px"};function u(_){return Math.abs(_)<1e-10?0:_}function d(_){let f=_.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function m(_){let f=_.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(_,f,p,w){if(_.isCSS3DObject){let x=_.visible===!0&&_.layers.test(p.layers)===!0;if(_.element.style.display=x===!0?"":"none",x===!0){_.onBeforeRender(t,f,p);let R;_.isCSS3DSprite?(In.copy(p.matrixWorldInverse),In.transpose(),_.rotation2D!==0&&In.multiply(_v.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(lu,gv,hu),In.setPosition(lu),In.scale(hu),In.elements[3]=0,In.elements[7]=0,In.elements[11]=0,In.elements[15]=1,R=m(In)):R=m(_.matrixWorld);let E=_.element,A=a.objects.get(_);if(A===void 0||A.style!==R){E.style.transform=R;let T={style:R};a.objects.set(_,T)}E.parentNode!==h&&h.appendChild(E),_.onAfterRender(t,f,p)}}for(let x=0,R=_.children.length;x<R;x++)g(_.children[x],f,p,w)}}};var Te=!!window.NativeXR,dt=Te?Ea:{width:innerWidth,height:innerHeight},fu={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"passthrough",quality:"auto",showFps:0},Nt={...fu};try{Nt={...fu,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}if(Te){Nt=cu(Nt),Nt.handsOn=!0;try{localStorage.setItem("nextvr.v1",JSON.stringify(Nt))}catch{}}var Oe=Nt,zs=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Nt))}catch{}},uu={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 p\xF4r do sol",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSelfTest:"Auto-teste do servi\xE7o",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envSunset:"360\xB0 panorama \xB7 sunset",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSelfTest:"Service self-test",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 atardecer",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSelfTest:"Auto-prueba del servicio",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo"}},ar=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),vv="pt",Ia=n=>ar.find(e=>e.id===n)||ar.find(e=>e.id===vv);var xv=()=>Ia(Nt.lang).table||"pt",V=n=>(uu[xv()]||uu.pt)[n]||n,Pc=n=>ar.some(e=>e.id===n&&e.table)?(Nt.lang=n,zs(),ft("lang"),!0):!1,Pa={},ht=(n,e)=>((Pa[n]||(Pa[n]=[])).push(e),e),ft=(n,e)=>(Pa[n]||[]).forEach(t=>t(e));function it(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(it._t),it._t=setTimeout(()=>e.classList.remove("on"),2400)}var Rc=new ya,Ke=new Yt(72,1,.05,120);Ke.rotation.order="YXZ";var lt=new pi;Rc.add(lt);var cn=1.55;Ke.position.set(0,cn,0);var or=Te?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new ir({antialias:!0,alpha:!0});Te||(or.setClearColor(0,0),document.getElementById("gl").appendChild(or.domElement));var cr=Te?new Aa:new Ta;document.getElementById("css3d").appendChild(cr.domElement);if(Te){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}function yv(){let n=Nt.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function Da(){document.documentElement.dataset.quality=Nt.quality,Te||(dt.width=innerWidth,dt.height=innerHeight);let n=dt.width,e=dt.height;Ke.aspect=n/e,Ke.updateProjectionMatrix(),or.setPixelRatio(yv()),or.setSize(n,e),cr.setSize(n,e),ft("resize")}addEventListener("resize",Da);addEventListener("orientationchange",()=>setTimeout(Da,120));Da();ht("quality",Da);var bv=Object.freeze(["passthrough","sunset","night","space"]),pu=()=>[{id:"passthrough",name:V("envPass"),thumb:null},{id:"sunset",name:V("envSunset"),thumb:"./env/sunset.jpg"},{id:"night",name:V("envNight"),thumb:"./env/night.jpg"},{id:"space",name:V("envSpace"),thumb:"./env/space.jpg"}];function Lc(n){var e,t;Nt.env=bv.includes(n)?n:"passthrough",zs(),ft("env",Nt.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,Nt.env)}var Jt={ok:!1,has:!1,q:new Zt,tmp:new Zt,e:new jn},Mv=new Zt,Sv=new Zt(-Math.SQRT1_2,0,0,Math.SQRT1_2),wv=new L(0,0,1),La=Math.PI/180;function Ev(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*La}function Av(n){n.alpha!=null&&(Jt.has=!0,Jt.e.set(n.beta*La,n.alpha*La,-n.gamma*La,"YXZ"),Jt.tmp.setFromEuler(Jt.e),Jt.tmp.multiply(Sv),Jt.tmp.multiply(Mv.setFromAxisAngle(wv,-Ev())),Jt.q.copy(Jt.tmp))}async function lr(){if(Te)return Jt.ok=Jt.has=!0,ft("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(it("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",Av,!0),Jt.ok=!0,setTimeout(()=>{Jt.has||it("Sem girosc\xF3pio: arraste para olhar")},1200),ft("gyro",!0),!0)}catch{return it("Girosc\xF3pio indispon\xEDvel"),!1}}var Tv=()=>Jt.ok&&Jt.has,qi=null,Fs=0,Cc=0;addEventListener("pointerdown",n=>{Te||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(qi={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{qi&&(Fs-=(n.clientX-qi.x)*.0032,Cc=Math.max(-1.2,Math.min(1.2,Cc-(n.clientY-qi.y)*.0032)),qi={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>qi=null);addEventListener("pointercancel",()=>qi=null);function Na(){let n=new jn().setFromQuaternion(Ke.quaternion,"YXZ");lt.rotation.y=n.y,lt.position.set(0,0,0),ft("recenter"),it(V("centered"))}var mu=[],hr=n=>mu.push(n),du=performance.now(),Ra=0,Ec=0,Ac=0,Ca=0,Tc=0,gu=0,_u=()=>{let n=performance.now();Ac>0&&(Ca+=(n-Ac)/1e3,Tc++,Ca>=1&&(gu=Math.round(Tc/Ca),Ca=0,Tc=0)),Ac=n};function vu(n){let e=Math.min((n-du)/1e3,.05);du=n,Te||(Tv()?(Ke.quaternion.slerp(Jt.q,1-Math.exp(-e*12)),Fs&&(Ke.rotateY(Fs),Fs=0)):(Ke.quaternion.setFromEuler(new jn(Cc,Ke.rotation.y+Fs,0,"YXZ")),Fs=0)),Ke.position.set(0,cn,0);for(let t of mu)t(e,n);if(or.render(Rc,Ke),cr.render(Rc,Ke),Ra+=e,Ec++,Ra>=1){let t=document.getElementById("fps");t.textContent=Nt.showFps?Math.round(Ec/Ra)+" fps"+(Te&&Nt.handsOn?" \xB7 tracking "+gu+" fps":""):"",Ra=0,Ec=0}requestAnimationFrame(vu)}requestAnimationFrame(vu);Lc(Nt.env);if(Te){let n=new Je,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),Ke.quaternion.setFromRotationMatrix(n),Ke.position.set(0,cn,0),Ke.updateMatrixWorld(!0),e&&(lt.rotation.y=new jn().setFromQuaternion(Ke.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=it}var Ua=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Oa=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var bi=[],he={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},yi=new Ua,Bs=new Oa,bu=Math.tan(36*Math.PI/180),Rv=bu*1.5,ka=!1,Nc=-1/0,za=1,Ba=1,Ic=null,Mu=500,Su=()=>ka;async function fr(){return Te?(ka=!0,window.NativeXR.hands(!0),ft("hands",!0),!0):(it("Hand tracking requires the Android camera pipeline."),!1)}function wu(n){for(let e of n)ft(`pinch${e}`,he)}function dr(){let n=yi.cancel();Bs.reset(),he.down=he.active=!1,he.phase=yi.phase,he.hand=null,he.mode="idle",Lv(),wu(n)}function Uc(){dr()}function Oc(){dr(),bi.length=0,ka=!1,Nc=-1/0,ft("phonehands",{hands:[],consumed:new Set,scaleX:za,scaleY:Ba}),Te&&window.NativeXR.hands(!1),ft("hands",!1)}function Fc(n){return{x:.5+n[0]/(2*Rv),y:.5-n[1]/(2*bu)}}var Cv=250,xu=1.6,yu=.06,tn={x:0,y:0},ur=0,Fa=0;function Ha(n=performance.now()){if(!he.active)return{x:he.x,y:he.y};let e=n-ur;if(!(e>0)||e>Cv)return{x:he.x,y:he.y};let t=e/1e3,i=s=>Math.max(-yu,Math.min(yu,s));return{x:Math.min(1,Math.max(0,he.x+i(tn.x*t))),y:Math.min(1,Math.max(0,he.y+i(tn.y*t)))}}function Pv(n,e,t=0){let i=t>0&&Fa>0?(t-Fa)/1e9:ur>0?(e-ur)/1e3:-1;if(he.active&&i>.004&&i<.3){let s=r=>Math.max(-xu,Math.min(xu,r));tn.x+=(s((n.x-he.x)/i)-tn.x)*.35,tn.y+=(s((n.y-he.y)/i)-tn.y)*.35,Math.hypot(tn.x,tn.y)<.12&&(tn.x=tn.y=0)}else i>=0&&i<=.004||(tn.x=tn.y=0);ur=e,Fa=t>0?t:0}function Lv(){tn.x=tn.y=0,ur=0,Fa=0}Te&&(window.nextvrHands=(n,e=1,t=1)=>{if(!ka)return;_u();let i=performance.now();za=e,Ba=t,Nc=i,Mu=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),bi.splice(0,bi.length,...n.hands||[]),ft("handframe",{...n,hands:bi});let r={hands:bi,consumed:new Set,scaleX:za,scaleY:Ba};if(ft("phonehands",r),r.blockFar){dr();return}let o=bi.filter(h=>!r.consumed.has(h.id)),a=yi.down&&o.find(h=>h.id===yi.handId)||o.find(h=>h.pinching)||[...o].sort((h,u)=>u.palmWidth-h.palmWidth)[0];if(!a){dr();return}let c=Fc(a.aim);Pv(c,i,Number(n.timestampNs)||0),he.x=c.x,he.y=c.y,he.active=!0,he.hand=a;let l=a.predicted?[]:yi.update(a.id,a.pinching);l.includes("down")?Bs.begin(a.id,c.x*dt.width,c.y*dt.height,i):l.includes("up")?Bs.end():l.includes("cancel")&&Bs.reset(),yi.down&&!a.predicted&&Bs.sample(a.id,c.x*dt.width,c.y*dt.height,i),he.mode=Bs.mode,he.down=yi.down,he.phase=yi.phase,wu(l)});var Dc=document.getElementById("overlay");Dc.getContext("2d").clearRect(0,0,Dc.width,Dc.height);hr(()=>{var n,e;Te&&Ic!==!!Oe.handDraw&&(Ic=!!Oe.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,Ic)),bi.length&&performance.now()-Nc>Mu&&(bi.length=0,dr(),ft("phonehands",{hands:[],consumed:new Set,scaleX:za,scaleY:Ba}))});var Iv=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),Dv=Object.freeze({appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>'}),Nv=Object.freeze({...Dv,...Iv});function We(n,e="ui-icon"){let t=Nv[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var Mt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),pr=(n,e,t)=>Math.max(e,Math.min(t,n)),Kt=n=>Number.isFinite(n)?n:0;function zc(n,e=0,t=1.55,i=null){let s=Kt(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,o=Kt(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=Mt.minDistance,s=0,o=-a);let c=pr(Math.atan2(-s,-o),-Mt.maxYaw,Mt.maxYaw);a=pr(a,Mt.minDistance,Mt.maxDistance);let l=Math.max(0,Kt(e)),h=t+Mt.lowerEdgeFromEye+l,u=t+Mt.upperEdgeFromEye-l;return r=h<=u?pr(r,h,u):t,{x:-Math.sin(c)*a,y:r,z:-Math.cos(c)*a}}function Eu(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((Kt(e.x)-Kt(n.x))*t,(Kt(e.y)-Kt(n.y))*i)}function Bc(n,e,t,i){return Eu(n,e,t,i)>=Mt.dragActivationPx}function Au(n,e,t,i){return Eu(n,e,t,i)>=Mt.resizeActivationPx}function kc(n,e){let t=Kt(n==null?void 0:n.x),i=Kt(n==null?void 0:n.y),s=Kt(n==null?void 0:n.z),r=Kt(e==null?void 0:e.x)-t,o=Kt(e==null?void 0:e.y)-i,a=Kt(e==null?void 0:e.z)-s,c=Math.hypot(r,o,a);if(!Number.isFinite(c)||c<=Mt.motionDeadZone)return{x:t,y:i,z:s};let h=Math.min(c,Mt.maxMotionStep)/c;return{x:t+r*h,y:i+o*h,z:s+a*h}}var Uv=Object.freeze({maxAngle:1.15});function mr(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(Uv.maxAngle,e))}function Hc(n,e){let t=mr(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function Va(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function Mi(n,e=Mt.maxResize){let t=pr(Kt(e),Mt.minResize,Mt.maxResize);return pr(Number.isFinite(n)?n:1,Mt.minResize,t)}function Tu(n,e,t=1.55){let i=Math.max(1e-5,Kt(e)),s=Math.min(n-(t+Mt.lowerEdgeFromEye),t+Mt.upperEdgeFromEye-n);return Mi(s/i)}function Ru(n,e,t,i){return!(e>1)||!Number.isFinite(t)?Mi(n,i):Mi(n*t/e,i)}function Cu(n,e){let t=Mi(n),s=Mi(e)-t;return Math.abs(s)<.004?t:Mi(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function Pu(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?e:-e,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-e/2:e/2,row:1});return r}var Lu=1.22;function Ov(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function Iu({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=Ov(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function Du(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var xt=.00105,Qe=[],xr=null,Dn={y:cn-.6,z:-1.7,h:.12},Xc=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:o=!1}){this.onboarding=o,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new L,this.resizeScale=1,this.slot=0,this.curve=mr(o?0:Oe.win360?Oe.win360K:0),this.curveRadius=Hc(s,this.curve);let a=document.createElement("div");a.className="win-shell",a.dataset.windowId=e,a.dataset.resizeScale="1",a.style.width=s+"px";let c=document.createElement("div");c.className="win",c.style.width=s+"px",c.style.height=r+"px",c.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${V("repin")}" title="${V("repin")}">${We("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${V("close")}" title="${V("close")}">${We("x")}</button>
      </div><div class="win-body"></div>`,c.querySelector(".win-title").textContent=t,c.querySelector(".win-body").appendChild(i),c.addEventListener("pointerdown",()=>Nn(this),!0),c.querySelector(".win-bar").addEventListener("click",u=>{let d=u.target.closest("[data-act]");d&&(d.dataset.act==="close"?wi(this):d.dataset.act==="curve"?this.setCurve(this.curve>0?0:mr(Oe.win360K)):zv(this))});let l=document.createElement("div");l.className="win-handle",l.title=V("moveWindow"),l.setAttribute("aria-label",V("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.title=V("resize"),h.setAttribute("aria-label",V("resize")),h.innerHTML=We("move"),a.append(c,l,h),this.el=c,this.shell=a,this.handle=l,this.resizeHandle=h,a.dataset.curve=String(this.curve),o&&(c.querySelector(".win-bar").hidden=!0),this.obj=new Os(a),this.obj.scale.setScalar(xt*(this.onboarding?en.welcomeScale:Oe.winScale)),lt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=Vc(s*xt,r*xt,this,this.hitSegments),this.bendHit(),this.grab=Vc(260*xt,90*xt,this),this.grab.userData.isHandle=!0,this.resizeHit=Vc(112*xt,112*xt,this),this.resizeHit.userData.isResize=!0,!Te){let u=d=>({x:d.clientX/dt.width,y:d.clientY/dt.height});l.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);Jc(this,m.x,m.y,"desktop"),l.setPointerCapture(d.pointerId)}),l.addEventListener("pointermove",d=>{if(je.win===this){let m=u(d);Kc(m.x,m.y)}}),l.addEventListener("pointerup",ji),l.addEventListener("pointercancel",ji),h.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);qu(this,m.x,m.y),h.setPointerCapture(d.pointerId)}),h.addEventListener("pointermove",d=>{if(St.win===this){let m=u(d);Yu(m.x,m.y)}}),h.addEventListener("pointerup",Hs),h.addEventListener("pointercancel",Hs)}}setCurve(e){this.curve=mr(e),this.curveRadius=Hc(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new mn(this.w*xt,this.h*xt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return Va(e,this.curveRadius)*xt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,Va(e.getX(t)/xt,this.curveRadius)*xt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*Oe.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(cn-e.position.y,i)*Oe.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?en.welcomeScale:Oe.winScale)*this.resizeScale;e.scale.setScalar(xt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*xt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation),this.resizeHit.translateX((this.w/2-48)*xt*r),this.resizeHit.translateY(-(this.h/2-48)*xt*r),this.resizeHit.translateZ(this.bulge(this.w/2-48)+.003),this.resizeHit.scale.setScalar(r)}};function Vc(n,e,t,i=1){let s=new $t(new mn(n,e,i,1),new Qn({visible:!1}));return s.userData.win=t,lt.add(s),s}function si(){for(let r of Qe)r.onboarding&&r.target.set(0,cn,-en.welcomeDistance);let n=Qe.filter(r=>r.pinned&&!r.onboarding),e=n.length;if(!e)return;let t=Te?Oe.winDist:-Dn.z+.5+(Oe.winDist-2.2),i=Math.max(...n.map(r=>r.w*r.resizeScale))*xt*Oe.winScale,s=Te?Iu({width:i,dist:t,gap:.5,outerLimit:Mt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+e*.05));Pu(e,s).forEach(({angle:r,row:o},a)=>{let c=n[a],l=c.h*xt*Oe.winScale*c.resizeScale,h=Dn.y+Dn.h/2+.14+l/2,u=Math.sin(r)*t,d=-Math.cos(r)*t,m=o===0?h:Math.min(h+l*2*(Lu-1)+l,cn+Mt.upperEdgeFromEye-l);c.target.set(u,m,d)})}ht("recenter",si);ht("resize",si);function Tn(n){let e=Qe.find(s=>s.id===n.id);if(e)return Nn(e),e;let t=Qe.filter(s=>!s.onboarding);if(t.length>=5){let s=Du(t);s&&(it(`${V("arcFull")}: ${s.title}`),wi(s))}let i=new Xc(n);return Qe.push(i),si(),Nn(i),i.obj.position.copy(i.target),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),ft("wins",Qe),i}function wi(n){if(!n)return;let e=Qe.indexOf(n);e<0||(je.win===n&&ji(),St.win===n&&Hs(),Qe.splice(e,1),lt.remove(n.obj),lt.remove(n.hit),lt.remove(n.grab),lt.remove(n.resizeHit),n.shell.remove(),xr===n&&(xr=Qe[Qe.length-1]||null),si(),ft("wins",Qe))}function Nn(n){xr!==n&&(xr=n,n.lastFocus=performance.now(),Qe.forEach(e=>e.el.classList.toggle("focus",e===xr)))}function zv(n){n.pinned=!0,n.shell.classList.remove("free"),si()}var vn=new rr,qa=new Ye,je={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},St={win:null,start:null,active:!1,startScale:1,startDistance:1},jt={source:null,start:null,active:!1,plane:null,anchor:null};function Qi(n,e,t=vn){return Ke.updateMatrixWorld(!0),lt.updateMatrixWorld(!0),qa.set(n*2-1,1-e*2),t.setFromCamera(qa,Ke),t}function Bv(n){return n.h*xt*Oe.winScale*n.resizeScale/2}function kv(n,e,t=null){let i=zc(e,Bv(n),cn,t);return new L(i.x,i.y,i.z)}function Jc(n,e,t,i="handle",s=null){if(n.onboarding||St.win)return!1;je.win&&ji(),Nn(n),Qi(e,t);let r=n.obj.getWorldPosition(new L),o=new an().setFromNormalAndCoplanarPoint(vn.ray.direction.clone(),r),a=vn.ray.intersectPlane(o,new L);if(!a)return!1;let c=lt.worldToLocal(r.clone()),l=Math.hypot(c.x,c.z);return Object.assign(je,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:l,applied:new L}}),!0}function Hv(){let n=je.win;!n||je.active||(je.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),si())}function Kc(n,e){let t=je.win;if(!t)return!1;Qi(n,e);let i=vn.ray.intersectPlane(je.plane,new L);if(!i)return!1;if(!je.active){if(!Bc(je.start,{x:n,y:e},dt.width,dt.height))return!1;Hv()}let s=je.anchor,r=i.clone().sub(s.hit);s.applied.copy(kc(s.applied,r));let o=s.center.clone().add(s.applied),a=kv(t,lt.worldToLocal(o),s.radius);return t.target.copy(a),t.obj.position.copy(t.target),!0}function ji(){je.win&&je.win.shell.classList.remove("moving"),Object.assign(je,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Wu(n,e,t="pinch"){if(!Ji||je.win||St.win)return!1;jt.start&&Si(),Qi(n,e);let i=ln.getWorldPosition(new L),s=new an().setFromNormalAndCoplanarPoint(vn.ray.direction.clone(),i),r=vn.ray.intersectPlane(s,new L);return r?(Object.assign(jt,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new L}}),wt.classList.add("grab-armed"),gt.setAttribute("aria-pressed","true"),!0):!1}function Vv(){!jt.start||jt.active||(jt.active=!0,wt.classList.remove("grab-armed"),wt.classList.add("moving"))}function jc(n,e){if(!jt.start)return!1;Qi(n,e);let t=vn.ray.intersectPlane(jt.plane,new L);if(!t)return!1;if(!jt.active){if(!Bc(jt.start,{x:n,y:e},dt.width,dt.height))return!1;Vv()}let i=jt.anchor,s=t.clone().sub(i.hit);i.applied.copy(kc(i.applied,s));let r=i.center.clone().add(i.applied),o=lt.worldToLocal(r),a=zc(o,Dn.h/2,cn);return Yi=new L(a.x,a.y,a.z),Ki=Math.atan2(-a.x,-a.z),Er(),!0}function Si(){wt==null||wt.classList.remove("grab-armed","moving"),gt==null||gt.setAttribute("aria-pressed","false"),Object.assign(jt,{source:null,start:null,active:!1,plane:null,anchor:null})}function Xu(n,e,t){Ke.updateMatrixWorld(!0),lt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new L).project(Ke),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*dt.width,(t-r)*dt.height)}function qu(n,e,t){return n.onboarding||je.win?!1:(St.win&&Hs(),Nn(n),Object.assign(St,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,Xu(n,e,t))}),!0)}function Yu(n,e){let t=St.win;if(!t)return!1;if(!St.active){if(!Au(St.start,{x:n,y:e},dt.width,dt.height))return!1;St.active=!0,t.shell.classList.add("resizing")}let i=t.h*xt*Oe.winScale/2,s=Math.max(St.startScale,Tu(t.obj.position.y,i,cn)),r=Ru(St.startScale,St.startDistance,Xu(t,n,e),s);return t.resizeScale=Mi(Cu(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function Hs(){St.win&&St.win.shell.classList.remove("resizing"),Object.assign(St,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function yr(n,e){Qi(n,e);let t=[];for(let a of Qe)a.onboarding||t.push(a.resizeHit,a.grab),t.push(a.hit);let i=vn.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var qe=null,gn=null,Gv=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function Wv(n,e,t,i,s){var c,l;let r=s?Gv(s):null;e===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(l=(c=n.activation).matches)!=null&&l.call(c,"input,textarea")&&n.activation.focus())}function _r(n,e,t=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?Wv(n,e,t,i,s):window.NativeXR.handTouch(n.id,e,t,i)}function Zi(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s),a=o==null?void 0:o.closest("[data-native-app]");if(a){let m=a.getBoundingClientRect(),g=wc(a.offsetWidth,a.offsetHeight,+(a.dataset.aspect||0),r.left+i-m.left,r.top+s-m.top);if(e===2&&!g&&!qe)return;let _="app:"+a.dataset.nativeApp;if(qe&&qe.id!==_&&(_r(qe,3),qe=null),e===0){if(!g)return;qe={id:_,win:n.win,x:g.u,y:g.v}}qe&&qe.id===_&&(g||e!==2)&&(g&&(qe.x=g.u,qe.y=g.v),_r(qe,e,qe.x,qe.y)),(e===1||e===3)&&(qe=null);return}let c=o==null?void 0:o.closest("[data-native-browser]"),l=c==null?void 0:c.getBoundingClientRect(),h=c?c.dataset.nativeBrowser:"shell",u=r.left+i-((l==null?void 0:l.left)||0),d=r.top+s-((l==null?void 0:l.top)||0);qe&&qe.id!==h&&(_r(qe,3),qe=null,e!==0)||(e===0&&(qe={id:h,win:n.win,x:u,y:d}),qe&&qe.id===h&&(qe.x=u,qe.y=d,_r(qe,e,u,d,o)),(e===1||e===3)&&(qe=null))}function $u(){qe&&_r(qe,3),qe=null,gn=null,ji(),Hs(),Si()}ht("pinchcancel",$u);function vr(n,e){if(Te){Zi(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=Zu(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function Zu(n,e,t){let i=null,s=r=>{for(let o of r.children){let a=Xv(o,n);e>=a.l&&e<=a.r&&t>=a.t&&t<=a.b&&(i=o,s(o))}};return s(n),i||n}function Xv(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}ht("pinchdown",()=>{var t;let n=yr(he.x,he.y),e=Kv(he.x,he.y);if(e&&(!n||e.distance<n.distance)){Wu(he.x,he.y,"pinch");return}if(n!=null&&n.resize){qu(n.win,he.x,he.y);return}if(n!=null&&n.handle){Jc(n.win,he.x,he.y,"handle",(t=he.hand)==null?void 0:t.id);return}if(n){Nn(n.win),gn={win:n.win,hit:n};return}sd("down")||ed("down")});ht("pinchup",()=>{if(gn&&he.mode==="drag"&&(vr(gn.hit,"down"),gn=null),gn){let e=yr(he.x,he.y),t=e&&!e.handle&&!e.resize&&e.win===gn.win?e:gn.hit;gn=null,vr(t,"down"),vr(t,"up");return}if(qe){let e=yr(he.x,he.y);e&&e.win===qe.win&&!e.handle&&!e.resize?Zi(e,1):$u();return}if(St.win){Hs();return}if(je.win){ji();return}if(jt.start){jc(he.x,he.y),Si();return}let n=yr(he.x,he.y);if(n&&!n.handle&&!n.resize){vr(n,"up");return}sd("up")||ed("up")});var wt=document.createElement("div");wt.className="dock";var gt=document.createElement("button");gt.type="button";gt.className="dock-grab";gt.title=V("moveDock");gt.setAttribute("aria-label",V("moveDock"));gt.setAttribute("aria-pressed","false");var ln=new Os(wt);lt.add(ln);var ni=new $t(new mn(1,1),new Qn({visible:!1})),ti=new $t(new mn(1,1),new Qn({visible:!1}));lt.add(ni,ti);if(!Te){let n=e=>({x:e.clientX/dt.width,y:e.clientY/dt.height});gt.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Wu(t.x,t.y,"desktop")&&gt.setPointerCapture(e.pointerId)}),gt.addEventListener("pointermove",e=>{if(jt.source==="desktop"){let t=n(e);jc(t.x,t.y)}}),gt.addEventListener("pointerup",e=>{jt.source==="desktop"&&(Si(),gt.hasPointerCapture(e.pointerId)&&gt.releasePointerCapture(e.pointerId))}),gt.addEventListener("pointercancel",Si)}var Ji=!0;function Ya(n){Ji=!!n,ln.visible=Ji,Ji||(Mr=-1,Si())}var qv=[],wr=[],qc=[],Yv=We("wifi"),$v='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',Zv='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Ju(n){qv=n,wr=[],qc.length=0,wt.innerHTML="";for(let e of n){if(e.kind==="sep"){wt.appendChild(Jv());continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=Zv;else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${Yv}</span><span class="dk-bat">${$v}</span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),qc.push({b:t,win:e.win})}t.addEventListener("click",()=>e.run()),wt.appendChild(t),wr.push(t)}gt.title=V("moveDock"),gt.setAttribute("aria-label",V("moveDock")),wt.appendChild(gt),ju(),Qc(),br(),Ku(),Er()}function Jv(){let n=document.createElement("span");return n.className="dock-sep",n}function Ku(){for(let{b:n,win:e}of qc){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",Qe.some(i=>i.id===e))}}ht("wins",Ku);function ju(){let n=wt.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(ju,2e4);function Qc(){let n=wt.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",Qc);addEventListener("offline",Qc);var ks=null;function br(){let n=wt.querySelector(".dk-bat");if(!n)return;if(!ks){n.style.display="none";return}n.style.display="";let e=n.querySelector(".fill");e.setAttribute("width",String(Math.max(1.6,13*ks.level))),e.setAttribute("fill",ks.charging?"#8de6c8":ks.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{ks=n,n.addEventListener("levelchange",br),n.addEventListener("chargingchange",br),br()}).catch(()=>{});var Qu=()=>!!ot,Mr=-1;ht("pinchcancel",()=>{Mr=-1});function ed(n){let e=jv(he.x,he.y);if(n==="down"){Mr=e?e.i:-1;return}let t=Mr;if(Mr=-1,!(!e||e.i!==t)&&n==="up"){let i=wr[e.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function Kv(n,e){return!Ji||!Yc?null:(Qi(n,e),vn.intersectObject(ti,!1)[0]||null)}function jv(n,e){if(!Ji)return null;Qi(n,e);let t=vn.intersectObject(ni,!1)[0];if(!t)return null;let i=ni.worldToLocal(t.point.clone()),s=ni.geometry.parameters,r=(i.x/s.width+.5)*wt.offsetWidth,o=(.5-i.y/s.height)*wt.offsetHeight;for(let a=0;a<wr.length;a++){let c=wr[a];if(r>=c.offsetLeft&&r<=c.offsetLeft+c.offsetWidth&&o>=c.offsetTop&&o<=c.offsetTop+c.offsetHeight)return{i:a}}return null}var Nu="",Yc="",Ki=0,Sr=0,Yi=null;ht("recenter",()=>{Ki=Sr=0,Yi=null,Si(),Er()});ht("summon-dock",()=>{var e;Ke.updateMatrixWorld(!0),lt.updateMatrixWorld(!0);let n=Ke.getWorldDirection(new L).transformDirection(lt.matrixWorld.clone().invert());Ki=Math.atan2(-n.x,-n.z),Yi=null,Si(),Er(),(e=window.NativeXR)==null||e.click()});function Er(){let n=dt.width>dt.height,e=(Te?en.dockDistance:n?1.42:1.75)*Oe.dockDist,t=Te?-en.dockDrop:n?-.5:-.6,i=xt*(Te?en.dockScale:n?.74:.88)*Oe.dockSize;Yi?ln.position.copy(Yi):ln.position.set(-Math.sin(Ki)*e,cn+t,-Math.cos(Ki)*e),ln.rotation.set(.26,Ki,0,"YXZ"),ln.scale.setScalar(i);let s=wt.offsetWidth*i,r=wt.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Nu&&(Nu=o,ni.geometry.dispose(),ni.geometry=new mn(s,r),Dn.h=r,Yi||si());let a=gt.offsetWidth*i,c=gt.offsetHeight*i,l=a.toFixed(3)+"x"+c.toFixed(3);a>0&&l!==Yc&&(Yc=l,ti.geometry.dispose(),ti.geometry=new mn(a,c)),ni.position.copy(ln.position),ni.rotation.copy(ln.rotation),ti.position.copy(ln.position),ti.rotation.copy(ln.rotation),ti.translateY((wt.offsetHeight/2-gt.offsetTop-gt.offsetHeight/2)*i),ti.translateZ(.004),!Yi&&(Dn.y!==ln.position.y||Dn.z!==-e)&&(Dn.y=ln.position.y,Dn.z=-e,si())}var Qv=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],Uu=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],ex=0,ot=null,_n=null,An=null,ii=!1,$i=!1;function ri(n,e){if(!n){ot&&(lt.remove(ot),lt.remove(_n),ot.element.remove(),ot=null),An=null,ii=$i=!1;return}if(An=e,ot)return;let t=document.createElement("div");t.className="kb";for(let i of Qv){let s=document.createElement("div");s.className="kb-row";for(let r of i){let o=typeof r=="string"?r:r.k,a=document.createElement("button");a.className="key"+(typeof r=="string"?"":" "+r.cls),typeof r=="string"?a.textContent=o:r.icon?(a.innerHTML=We(r.icon),a.setAttribute("aria-label",r.label),a.title=r.label):a.textContent=r.lbl||o,a.dataset.k=o,s.appendChild(a)}t.appendChild(s)}t.addEventListener("click",i=>{let s=i.target.closest("[data-k]");s&&td(s.dataset.k,s)}),ot=new Os(t),Sr=Ki,ot.scale.setScalar(xt*(Te?en.keyboardScale:.9)),lt.add(ot),_n=new $t(new mn(1,1),new Qn({visible:!1})),lt.add(_n),id()}function td(n,e){if(Te&&window.NativeXR.click(),e&&(e.classList.add("hot"),setTimeout(()=>e.classList.remove("hot"),110)),n==="@close")return ri(!1);if(n==="\u21E7"){ii?$i?(ii=!1,$i=!1):$i=!0:(ii=!0,$i=!1),nd();return}if(n!=="@lang"){if(n==="@mic"){it(V("micOff"));return}if(n==="@emoji"){Ou(Uu[ex++%Uu.length]);return}Ou(n)}}function Ou(n){if(!An)return;let e=n==="\u232B"||n==="\u23CE",t=ii?n.toUpperCase():n;if(An.nativeId)window.NativeXR.key(An.nativeId,t);else if(n==="\u232B")An.value=An.value.slice(0,-1);else if(n==="\u23CE"){An.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0}));return}else An.value+=t;An.nativeId||An.dispatchEvent(new Event("input",{bubbles:!0})),!e&&ii&&!$i&&(ii=!1,nd())}function nd(){if(ot){for(let n of ot.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=ii?$i?"lock":"once":"";for(let n of ot.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=ii?e.toUpperCase():e.toLowerCase())}}}var Fu="",tx=.35;function id(){if(!ot)return;let n=Te?en.keyboardDistance:-Dn.z-.35;ot.position.set(-Math.sin(Sr)*n,cn-(Te?en.keyboardDrop:.68),-Math.cos(Sr)*n),ot.rotation.set(-Math.PI/2+tx,Sr,0,"YXZ");let e=ot.element.offsetWidth*ot.scale.x,t=ot.element.offsetHeight*ot.scale.x,i=e.toFixed(3)+"x"+t.toFixed(3);e>0&&i!==Fu&&(Fu=i,_n.geometry.dispose(),_n.geometry=new mn(e,t)),_n.position.copy(ot.position),_n.rotation.copy(ot.rotation)}var Wa=null;ht("pinchcancel",()=>{Wa=null});function sd(n){if(!ot)return!1;qa.set(he.x*2-1,-(he.y*2-1)),vn.setFromCamera(qa,Ke);let e=vn.intersectObject(_n,!1)[0];if(!e)return!1;let t=_n.worldToLocal(e.point.clone()),i=_n.geometry.parameters,s=(t.x/i.width+.5)*ot.element.offsetWidth,r=(.5-t.y/i.height)*ot.element.offsetHeight,o=Zu(ot.element,s,r);return n==="down"?(Wa=o,!0):(o&&o===Wa&&o.dataset&&o.dataset.k&&td(o.dataset.k,o),Wa=null,!0)}var zu="";hr((n,e)=>{let t=`${Oe.winScale}:${Oe.winDist}`;if(zu!==t&&(zu=t,si()),Er(),id(),gn&&he.mode==="drag"&&(vr(gn.hit,"down"),gn=null),qe&&he.active&&he.down){let i=yr(he.x,he.y);i&&i.win===qe.win&&!i.handle&&!i.resize&&Zi(i,2)}if((St.win||je.win&&je.source!=="fist")&&he.active&&he.down){let i=Ha(e);St.win&&Yu(i.x,i.y),je.win&&je.source!=="fist"&&Kc(i.x,i.y)}if(jt.start&&he.active&&he.down){let i=Ha(e);jc(i.x,i.y)}for(let i of Qe)i.apply()});if(Te){let n=function(){try{ks=JSON.parse(window.NativeXR.battery()),br()}catch{}};window.nextvrBrowserFocus=e=>ri(!0,{nativeId:e}),n(),setInterval(n,3e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var nt=null,Ga=new Map,Xa=new Set,el={hands:[],consumed:new Set,scaleX:1,scaleY:1},gr=null,Gc=0,Bu=350,nx=240;function $c(n,e){Ke.updateMatrixWorld(!0),lt.updateMatrixWorld(!0);let t=new rr;return t.setFromCamera(new Ye(n*2-1,1-e*2),Ke),t}function Wc(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Zc(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new L),s=n.curve>0?Va(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function ix(n,e){let t=n.obj.getWorldPosition(new L),i=new L(0,0,1).transformDirection(n.obj.matrixWorld),s=new an().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new L);let r=n.obj.matrixWorld.clone().invert(),o=e.origin.clone().applyMatrix4(r),a=e.origin.clone().add(e.direction).applyMatrix4(r).sub(o).normalize(),c=n.curveRadius,l=a.x*a.x+a.z*a.z;if(l<1e-9)return e.intersectPlane(s,new L);let h=2*(o.x*a.x+(o.z-c)*a.z),u=o.x*o.x+(o.z-c)*(o.z-c)-c*c,d=h*h-4*l*u;if(d<0)return e.intersectPlane(s,new L);let m=Math.sqrt(d);for(let g of[(-h-m)/(2*l),(-h+m)/(2*l)]){if(!(g>0))continue;let _=o.clone().addScaledVector(a,g);if(!(Math.abs(_.x)>c+1e-6||_.z>c))return _.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new L)}function ku(n){let e=null;for(let t of Qe){if(t.onboarding)continue;let i=t.obj.getWorldPosition(new L),s=ix(t,n.ray);if(!s)continue;let{local:r,scale:o}=Zc(t,s);if(Math.abs(r.x)*o.x>t.w*o.x/2+.08||Math.abs(r.y)*o.y>t.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!e||a<e.distance)&&(e={win:t,point:s,distance:a})}return e}function Hu(n=!1,e=el){let t=nt;t!=null&&t.down&&(Zi({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(Xa.add(t.id),e.consumed.add(t.id))),nt=null}ht("phonehands",n=>{var a;el=n;let e=new Set(n.hands.map(c=>c.id));for(let c of Ga.keys())e.has(c)||Ga.delete(c);for(let c of Xa){let l=n.hands.find(h=>h.id===c);!l||!l.pinching?Xa.delete(c):n.consumed.add(c)}if(je.win&&je.source==="fist"){let c=n.hands.find(l=>l.id===je.hand);if(!c||!c.fist||!Qe.includes(je.win))ji();else{n.consumed.add(c.id);let l=Wc(c,n,!0);Kc(l.x,l.y)}}let t=performance.now();if(!(je.win&&je.source==="fist")){let c=n.hands.find(l=>!l.fist);if(c){let l=Wc(c,n),h=ku($c(l.x,l.y));if(h){let{local:u,scale:d}=Zc(h.win,h.point),m=h.win;(Math.abs(u.x)*d.x>m.w*d.x/2-.06||Math.abs(u.y)*d.y>m.h*d.y/2-.06)&&(gr=h.win,Gc=t)}}}for(let c of Qe)(c!==gr||t-Gc>Bu)&&c.shell.classList.remove("phone-grab-hover");gr&&t-Gc<=Bu?gr.shell.classList.add("phone-grab-hover"):gr=null;for(let c of n.hands){let l=Ga.get(c.id)||!1;if(Ga.set(c.id,c.fist),!je.win&&!St.win&&c.fist&&!l){let h=Wc(c,n,!0),u=ku($c(h.x,h.y));u&&(((a=he.hand)==null?void 0:a.id)===c.id&&Uc(),Jc(u.win,h.x,h.y,"fist",c.id)&&n.consumed.add(c.id))}}let i=null;for(let c of n.hands){if(n.consumed.has(c.id)||!c.head||c.head.length!==63)continue;let l=new L().fromArray(c.head,24);if(!(l.length()>.7)){l.applyMatrix4(Ke.matrixWorld);for(let h of Qe){let u=Zc(h,l),d=(nt==null?void 0:nt.win)===h&&nt.id===c.id,m=d?.08:.02,g=d?.26:.11;u.d>g||u.d<-.12||Math.abs(u.local.x)*u.scale.x>h.w*u.scale.x/2+m||Math.abs(u.local.y)*u.scale.y>h.h*u.scale.y/2+m||(!i||d||!i.current&&Math.abs(u.d)<Math.abs(i.d))&&(i={...u,id:c.id,win:h,point:l,current:d})}}}if(!i&&nt&&e.has(nt.id)&&Qe.includes(nt.win)&&t-nt.lastSeen<=nx&&(i={...nt,current:!0,held:!0}),!i){Hu(!e.has(nt==null?void 0:nt.id),n);return}i.current?(nt.d+=(i.d-nt.d)*.45,nt.u+=(i.u-nt.u)*.45,nt.v+=(i.v-nt.v)*.45,i.held||(nt.lastSeen=t)):(Hu(!1,n),nt={...i,down:!1,previousD:i.d,lastSeen:t});let s=nt,r=s.u>=0&&s.u<=1&&s.v>=0&&s.v<=1,o={win:s.win,u:Math.max(0,Math.min(1,s.u)),v:Math.max(0,Math.min(1,s.v))};!s.down&&r&&s.d<=.012&&s.previousD>.012?(he.down&&Uc(),Nn(s.win),Zi(o,0),s.down=!0):s.down&&(s.d>=.035||!r)?(Zi(o,1),s.down=!1,n.hands.some(c=>c.id===s.id&&c.pinching)&&(Xa.add(s.id),n.consumed.add(s.id))):s.down&&Zi(o,2),s.previousD=s.d,s.down&&(n.blockFar=!0,n.consumed.add(s.id))});var Vu=0,Gu="";hr((n,e)=>{var r,o,a,c;if(!Te||e-Vu<16)return;Vu=e;let t=el,i=[];for(let l of t.hands){if((nt==null?void 0:nt.id)===l.id&&nt.down){let g=nt,_=new L((g.u-.5)*g.win.w,(.5-g.v)*g.win.h,0).applyMatrix4(g.win.obj.matrixWorld);i.push({id:l.id,end:Ke.worldToLocal(_).toArray(),direct:!0,down:g.down});continue}if(t.consumed.has(l.id)||t.blockFar){i.push({id:l.id,hidden:!0});continue}let h=((r=he.hand)==null?void 0:r.id)===l.id?Ha(e):Fc(l.aim),u=$c(h.x,h.y),d=Qe.flatMap(g=>[g.resizeHit,g.grab,g.hit]);Ji&&d.push(ti,ni),_n&&ot&&d.push(_n);let m=u.intersectObjects(d,!1)[0];i.push({id:l.id,...m?{end:Ke.worldToLocal(m.point.clone()).toArray()}:{},down:((o=he.hand)==null?void 0:o.id)===l.id&&he.down})}let s=JSON.stringify(i);s!==Gu&&(Gu=s,(c=(a=window.NativeXR).handTargets)==null||c.call(a,s))});var sx=400,hd=3,ud=1040,dd=546,Lt={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:hd,sdk:0,recents:[],library:0,launch:null},Pt={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,version:0},Rn=new Map,tl=new Set,rd=0,ad="";var fd=n=>Lt.sessions.find(e=>e.pkg===n)||null,rx=()=>Lt.sessions.filter(n=>n.alive),ax=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function Ei(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{it(V("appCommandFailed"))}}function ox(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Lt.sessions=Array.isArray(e.sessions)?e.sessions:[],Lt.shizuku=e.shizuku||Lt.shizuku,Lt.input=e.input||Lt.input,Lt.capacity=e.capacity||hd,Lt.recents=Array.isArray(e.recents)?e.recents:[],Lt.sdk=e.sdk||Lt.sdk,Lt.launch=e.launch||null,e.library&&e.library!==Pt.version&&(Pt.version=e.library,Pt.loaded=!1),cx(),ft("appsState"))}function cx(){let n=new Set;for(let e of Lt.sessions)if(e.state!=="stopped"){if(e.state==="suspended"){od(e.pkg,!0);continue}n.add(e.pkg),Rn.has(e.pkg)?pd(e):lx(e)}for(let e of[...Rn.keys()])n.has(e)||od(e,!0);il(!0)}function lx(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?V("appMirrorBadge"):V("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,u,d)=>{let m=document.createElement("button");return m.className="app-key",m.title=u,m.setAttribute("aria-label",u),m.innerHTML=We(d),m.onclick=()=>Ei({cmd:"key",pkg:n.pkg,key:h}),m},o=document.createElement("button");o.className="app-key",o.title=V("appKeyboard"),o.dataset.act="keys",o.innerHTML=We("keyboard"),o.onclick=()=>fx(n.pkg),t.append(i,s,r("back",V("appBack"),"back"),r("home",V("appHome"),"top"),r("recents",V("appRecents"),"appGrid"),o);let a=document.createElement("div");a.className="app-surface",a.dataset.nativeApp=n.pkg,a.dataset.aspect=String(n.display&&n.display.aspect||16/9);let c=document.createElement("div");c.className="app-state",e.append(t,a),a.append(c);let l=Tn({id:ax(n.pkg),title:n.title,node:e});Rn.set(n.pkg,{win:l,surface:a,status:c,badge:i}),pd(n)}function pd(n){let e=Rn.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),e.badge.textContent=n.mode==="mirror"?V("appMirrorBadge"):V("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let s={requested:V("appStarting"),creating:V("appStarting"),launching:V("appStarting"),running:"",failed:n.error?ux(n):V("appFailed")}[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&hx.has(n.error))){let r=document.createElement("button");r.className="app-state-btn",r.textContent=V("appOpenOnPhone"),r.onclick=()=>Ei({cmd:"phone",pkg:n.pkg}),e.status.appendChild(r)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var hx=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable"]);function ux(n){let e={shizuku_unavailable:V("appNeedShizuku"),display_refused:V("appDisplayRefused"),display_failed:V("appDisplayFailed"),no_launcher_activity:V("appNoLauncher"),consent_denied:V("appConsentDenied"),mirror_stopped:V("appMirrorStopped"),mirror_failed:V("appMirrorFailed"),mirror_refused:V("appMirrorFailed"),projection_failed:V("appMirrorFailed"),display_empty:V("appDisplayEmpty"),app_not_running:V("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?V("appSurfaceFailed"):e[t]||`${V("appFailed")}: ${t}`}function od(n,e){let t=Rn.get(n);t&&(Rn.delete(n),e&&tl.add(n),wi(t.win),tl.delete(n))}ht("wins",()=>{for(let n of[...Rn.keys()]){let e=Rn.get(n);tl.has(n)||Qe.includes(e.win)||(Rn.delete(n),Ei({cmd:"close",pkg:n}))}ft("appsState")});function md(n,e){n&&Ei({cmd:"open",pkg:n,w:e&&e.w||ud,h:e&&e.h||dd})}function nl(n){Ei({cmd:"restore",pkg:n})}function cd(){Ei({cmd:"shizuku"})}function dx(){Pt.loaded=!1,Ei({cmd:"refresh"})}function fx(n){ri(!0,{nativeId:"app:"+n})}function gd(n){var e,t;if(Pt.loaded&&!n)return Pt;Pt.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,Pt.query,Pt.showSystem),s=JSON.parse(i||'{"apps":[]}');Pt.apps=Array.isArray(s.apps)?s.apps:[],Pt.shown=s.shown||Pt.apps.length,Pt.total=s.total||Pt.apps.length}catch{Pt.apps=[]}return ft("appsState"),Pt}function il(n){let e=[];for(let[i,s]of Rn)e.push({pkg:i,w:Math.round(s.surface.offsetWidth),h:Math.round(s.surface.offsetHeight),visible:!0});let t=JSON.stringify(e);!n&&t===ad||(ad=t,Ei({cmd:"sync",windows:e}))}function px(){rd||(rd=setInterval(()=>{Rn.size&&il(!1)},sx))}ht("wins",()=>il(!0));var ld={install:()=>V("shizukuInstall"),start:()=>V("shizukuStart"),update:()=>V("shizukuUpdate"),ask:()=>V("shizukuAsk"),denied:()=>V("shizukuDenied"),rebind:()=>V("shizukuRebind"),ready:()=>V("shizukuReady"),unknown:()=>V("shizukuUnknown")};function _d(){var r;let n=Lt.shizuku||{};if(n.ready)return null;let e=document.createElement("div");e.className="lib-note az-row";let t=document.createElement("span");t.className="az-dot",t.dataset.state=n.state||"unknown";let i=document.createElement("span");if(i.className="az-text",i.textContent=(ld[n.state]||ld.unknown)(),(r=Lt.input)!=null&&r.accessibility){if(n.detail){let o=document.createElement("small");o.textContent=n.detail,i.appendChild(o)}}else{let o=document.createElement("small");o.textContent=V("appCaptureInput"),i.appendChild(o)}e.append(t,i);let s=document.createElement("button");if(s.className="az-btn",n.ask?(s.textContent=V("shizukuGrant"),s.onclick=()=>cd()):(s.textContent=V("shizukuRecheck"),s.onclick=()=>{dx(),cd()}),e.appendChild(s),n.caps){let o=document.createElement("button");o.className="az-btn ghost",o.textContent=V("appSelfTest"),o.onclick=()=>{let a=e.querySelector(".az-caps");if(a){a.remove();return}let c=document.createElement("pre");c.className="az-caps",c.textContent=JSON.stringify({...n.caps,launch:Lt.launch},null,2),e.appendChild(c)},e.appendChild(o)}return e}var Un=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function vd(n){let e=fd(n.pkg),t=`<span class="nm">${Un((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${Un(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${Un(e.state==="suspended"?V("appMinimized"):V("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${Un(V("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${Un(n.pkg)}" data-session="${e?Un(e.state):""}" data-pkg="${Un(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${Un(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${Un(V("androidApps"))}">${We("device")}</span>`+r+s+`</span><span class="lib-label">${Un(n.label||n.pkg)}</span></button>`}function xd(n){return fd(n)}function yd(){return rx().length}function bd(){return Pt.apps}function Md(n){return Lt.recents.includes(n)}function Sd(n){return Lt.recents.indexOf(n)}var wd={w:ud,h:dd};function Ed(){Te&&(window.nextvrApps=ox,px(),ht("lang",()=>{Pt.loaded=!1,ft("appsState")}))}var fe=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i},$a=(n,e="")=>`<span class="icon-label">${We(n)}${e?`<span>${e}</span>`:""}</span>`,ll=n=>{if(Te)return Bt("browser-extra",V("browser"),n);try{window.open(n,"_blank","noopener")}catch{it("Bloqueado pelo navegador")}};function Bt(n,e,t,i){let s=fe("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=fe("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let o=fe("input","fld");o.value=t,o.placeholder=V("search");let a=fe("button","go",We("enter"));a.setAttribute("aria-label",V("open")),a.title=V("open");let c=fe("button","go",We("external"));c.setAttribute("aria-label",V("open")),c.title=V("open"),c.style.background="rgba(255,255,255,.12)",c.style.color="#fff",r.append(o,a,c);let l=fe("div","warn",i||"");l.style.cssText+="margin:12px 14px 0;display:none";let h=fe("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=fe(Te?"div":"iframe");Te&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,l,h);let d=m=>{let g=(m||"").trim();if(g){if(/^https?:\/\//i.test(g)||(g=/\.\w{2,}($|\/)/.test(g)?"https://"+g:"https://duckduckgo.com/?q="+encodeURIComponent(g)),o.value=g,Te){u.dataset.url=g,l.style.display="none";return}u.src=g,l.style.display="block",l.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};return a.onclick=()=>d(o.value),o.addEventListener("keydown",m=>{m.key==="Enter"&&d(o.value)}),o.addEventListener("focus",()=>ri(!0,o)),c.onclick=()=>ll(o.value),d(t),Tn({id:n,title:e,node:s})}var Rd=["https://pipedapi.kavin.rocks","https://pipedapi.leptons.xyz","https://pipedapi.nosebs.ru","https://pipedapi.adminforge.de","https://api.piped.private.coffee","https://pipedapi.reallyaweso.me"],Cd=["https://inv.nadeko.net/api/v1","https://inv.tux.pizza/api/v1"],On=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);async function ja(n,e=11e3){let t=new AbortController,i=setTimeout(()=>t.abort(),e);try{let s=await fetch(n,{signal:t.signal});if(!s.ok)throw new Error("http");return await s.json()}finally{clearTimeout(i)}}function Pd(n,e){if(e)return"AO VIVO";if(n==null||n<0)return"";n=Math.round(n);let t=Math.floor(n/3600),i=Math.floor(n%3600/60),s=n%60,r=o=>String(o).padStart(2,"0");return t?`${t}:${r(i)}:${r(s)}`:`${i}:${r(s)}`}function Ld(n){return n=Number(n),!n||n<0?"":n>=1e6?(n/1e6).toFixed(1).replace(".",",")+" mi":n>=1e3?Math.round(n/1e3)+" mil":String(n)}function mx(n){let e=String(n||"").match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/)||String(n||"").match(/^([\w-]{11})$/);return e?e[1]:null}function Id(n){let e=String(n.url||"").match(/[?&]v=([\w-]{11})/);return!e||!n.title?null:{id:e[1],title:n.title,thumb:n.thumbnail||`https://i.ytimg.com/vi/${e[1]}/hqdefault.jpg`,chan:n.uploaderName||"",dur:Pd(n.duration,n.isLive),live:!!n.isLive,views:Ld(n.views)}}function Dd(n){if(!n.videoId||!n.title)return null;let e=(n.videoThumbnails||[]).find(t=>t.quality==="medium")||(n.videoThumbnails||[])[0]||{};return{id:n.videoId,title:n.title,thumb:e.url,chan:n.author||"",dur:Pd(n.lengthSeconds,n.liveNow),live:!!n.liveNow,views:Ld(n.viewCount)}}async function Nd(n){for(let e of Rd)try{let i=((await ja(`${e}/search?q=${encodeURIComponent(n)}&filter=videos`)).items||[]).map(Id).filter(Boolean);if(i.length)return i}catch{}for(let e of Cd)try{let t=await ja(`${e}/search?q=${encodeURIComponent(n)}&type=video`),i=(Array.isArray(t)?t:[]).map(Dd).filter(Boolean);if(i.length)return i}catch{}throw new Error("offline")}async function gx(){for(let n of Rd)try{let e=await ja(`${n}/trending?region=BR`),t=(Array.isArray(e)?e:[]).map(Id).filter(Boolean);if(t.length)return t}catch{}for(let n of Cd)try{let e=await ja(`${n}/popular?region=BR`),t=(Array.isArray(e)?e:[]).map(Dd).filter(Boolean);if(t.length)return t}catch{}return Nd("em alta brasil")}var zn=null,es=null;function sl(){try{zn&&zn.unMute&&(zn.unMute(),zn.setVolume&&zn.setVolume(100))}catch{}}function _x(){return es||(es=new Promise((n,e)=>{if(window.YT&&window.YT.Player)return n(window.YT);let t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{t&&t(),es=null,n(window.YT)};let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api",i.onerror=()=>{es=null,e(new Error("api"))},document.head.appendChild(i),setTimeout(()=>{window.YT&&window.YT.Player||(es=null,e(new Error("timeout")))},9e3)}),es)}function rl(){try{zn&&zn.destroy&&zn.destroy()}catch{}zn=null}function Ud(){let n=fe("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f12";let e=fe("div","row");e.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let t=fe("button","go",We("back"));t.setAttribute("aria-label","Voltar"),t.title="Voltar",t.style.display="none";let i=fe("input","fld");i.placeholder="Pesquisar no YouTube ou colar link";let s=fe("button","go",We("search"));s.setAttribute("aria-label",V("searchYt")),s.title=V("searchYt");let r=fe("button","go",We("external"));r.setAttribute("aria-label","Abrir fora"),r.title="Abrir fora",r.style.background="rgba(255,255,255,.12)",r.style.color="#fff",e.append(t,i,s,r);let o=fe("div","yt-chips"),a=fe("div","yt-scroll");n.append(e,o,a);let c=["M\xFAsica","Jogos","VR 360","Not\xEDcias","Ao vivo","Filmes"];o.innerHTML=c.map(E=>`<button class="yt-chip" data-q="${E}">${E}</button>`).join(""),o.addEventListener("click",E=>{let A=E.target.closest("[data-q]");A&&(i.value=A.dataset.q,p(A.dataset.q))});let l=[],h="",u=null,d=0,m=()=>{a.innerHTML=`<div class="yt-grid">${'<span class="yt-card"><span class="yt-thumb yt-skel"></span><span class="yt-meta"><span class="yt-skel-l"></span><span class="yt-skel-l short"></span></span></span>'.repeat(6)}</div>`},g=E=>`<button class="yt-card" data-v="${E.id}"><span class="yt-thumb">${E.thumb?`<img loading="lazy" src="${E.thumb}" alt="">`:""}`+(E.dur?`<span class="yt-dur${E.live?" live":""}">${On(E.dur)}</span>`:"")+`</span><span class="yt-meta"><span class="yt-t">${On(E.title)}</span><span class="yt-c">${On(E.chan)}${E.views?" \xB7 "+On(E.views):""}</span></span></button>`;function _(E,A){rl(),u=null,l=A,t.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-sec">${On(E)}</div><div class="yt-grid">${A.map(g).join("")}</div>`}function f(E){t.style.display="none",o.style.display="",a.innerHTML=`<div class="yt-err"><div style="display:grid;place-items:center;font-size:46px">${We("wifi")}</div><div class="yt-err-t">Sem conex\xE3o com a busca</div><div class="yt-err-s">Verifique a internet e tente de novo. D\xE1 para colar um link direto tamb\xE9m.</div><button class="yt-btn" data-retry>${$a("refresh","TENTAR DE NOVO")}</button></div>`,a.querySelector("[data-retry]").onclick=()=>E?p(E):w()}async function p(E){if(E=(E||"").trim(),!E)return;let A=mx(E);if(A)return x({id:A,title:"V\xEDdeo do YouTube",chan:"",dur:"",views:""});let T=++d;m();try{let k=await Nd(E);if(T!==d)return;h=`Resultados para \u201C${E}\u201D`,_(h,k)}catch{T===d&&f(E)}}async function w(){let E=++d;m();try{let A=await gx();if(E!==d)return;h="Em alta no Brasil",_(h,A)}catch{E===d&&f(null)}}function x(E){u=E,l.length||(l=[E]),t.style.display="",o.style.display="none",a.innerHTML=`<div class="yt-player">
        <div class="yt-holder yt-frame"></div>
        <div class="yt-info">
          <div class="yt-ptitle">${On(E.title)}</div>
          ${E.chan?`<div class="yt-pchan">${On(E.chan)}${E.views?" \xB7 "+On(E.views):""}</div>`:""}
          <div class="yt-prow">
            <button class="yt-btn" data-back>${$a("back","VOLTAR")}</button>
            <button class="yt-btn" data-snd>${$a("volume","ATIVAR SOM")}</button>
            <button class="yt-btn" data-out>${$a("external","ABRIR")}</button>
          </div>
          <p class="yt-pchan" style="margin-top:10px">Use o controle de som com a m\xE3o e ajuste o volume pelas teclas do Android.</p>
        </div></div>`;let A=a.querySelector(".yt-holder");if(a.querySelector("[data-back]").onclick=()=>{rl(),_(h||"Em alta no Brasil",l)},a.querySelector("[data-out]").onclick=()=>ll("https://www.youtube.com/watch?v="+E.id),a.querySelector("[data-snd]").onclick=sl,Te){let k=fe("div");k.dataset.nativeBrowser="youtube-player",k.dataset.url="https://www.youtube.com/embed/"+E.id+"?autoplay=1&playsinline=1",k.style.cssText="width:100%;height:100%",A.append(k),a.querySelector("[data-snd]").onclick=()=>{window.NativeXR.click(),it("Use Android media volume to adjust sound.")};return}_x().then(k=>{if(u===E)try{zn=new k.Player(A,{videoId:E.id,playerVars:{autoplay:1,playsinline:1,rel:0,mute:0,modestbranding:1,enablejsapi:1},events:{onReady:b=>{try{b.target.unMute(),b.target.setVolume(100),b.target.playVideo()}catch{}setTimeout(sl,350)},onError:T}})}catch{T()}}).catch(T);function T(){u!==E||A.dataset.fb||(A.dataset.fb="1",A.innerHTML=`<iframe class="yt-frame" title="${On(E.title)}" src="https://www.youtube-nocookie.com/embed/${E.id}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`)}setTimeout(sl,600)}a.addEventListener("click",E=>{let A=E.target.closest("[data-v]");if(!A)return;let T=l.find(k=>k.id===A.dataset.v);T&&x(T)}),t.onclick=()=>_(h||"Em alta no Brasil",l),s.onclick=()=>p(i.value),r.onclick=()=>ll(u?"https://www.youtube.com/watch?v="+u.id:"https://m.youtube.com/results?search_query="+encodeURIComponent(i.value||"")),i.addEventListener("focus",()=>ri(!0,i)),i.addEventListener("keydown",E=>{E.key==="Enter"&&p(i.value)}),w();let R=Tn({id:"youtube",title:"YouTube",node:n});return ht("wins",()=>{Qe.some(E=>E.id==="youtube")||rl()}),R}var Za=[];function Od(){let n=fe("div","pad"),e=fe("div");e.innerHTML=`<h2>${V("gallery")}</h2><p class="sub">${V("photosHelp")}</p>`;let t=fe("button","go",V("pickPhotos")),i=fe("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=fe("div","grid4");s.style.marginTop="20px";let r=fe("div");r.style.cssText="margin-top:18px";let o=()=>{if(s.innerHTML="",!Za.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${V("noPhotos")}</p>`;return}Za.forEach((a,c)=>{let l=fe("button","thumb");l.innerHTML=`<img src="${a}" alt="">`,l.onclick=()=>{r.innerHTML=`<img src="${a}" style="width:100%;border-radius:16px">`},s.appendChild(l)})};return t.onclick=()=>i.click(),i.onchange=()=>{for(let a of i.files)Za.push(URL.createObjectURL(a));o(),it(Za.length+" fotos")},o(),n.append(e,t,i,s,r),n.append(fe("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),Tn({id:"gallery",title:V("gallery"),node:n})}function zt(n,e,t){let i=fe("div","opt");return i.append(fe("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function al(n,e){let t=fe("button","sw");return t.dataset.on=Oe[n]?"1":"0",t.onclick=()=>{Oe[n]=Oe[n]?0:1,t.dataset.on=Oe[n]?"1":"0",zs(),e&&e(Oe[n])},t}function ts(n,e,t,i,s){let r=fe("input");return r.type="range",r.min=e,r.max=t,r.step=i,r.value=Oe[n],r.oninput=()=>{Oe[n]=+r.value,zs(),s&&s(Oe[n])},r}function Ja(){let n=fe("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let e=fe("div","tabs");e.style.padding="18px 24px 0";let t=fe("div","pad");t.style.paddingTop="6px",n.append(e,t);let i=[[V("general"),()=>{t.innerHTML=`<h2>${V("general")}</h2><p class="sub">Next VR \xB7 shell XR para Android</p>`;let o=fe("div","card"),a=fe("button","seg-btn",Ia(Oe.lang||"pt").label);a.onclick=()=>{let c=Tn({id:"language-pick",title:V("langTitle"),w:880,h:660,node:Wd(Oe.lang||"pt",l=>{Pc(l),it(V("langChanged")),r(),wi(c)},!0)})},o.append(zt(V("language"),"Mesma tela do primeiro uso",a)),o.append(zt("FPS","Mostrar contador",al("showFps"))),t.append(o),t.append(fe("p","note","Shizuku: abrir apps Android instalados s\xF3 existe no app nativo. Nesta vers\xE3o web o navegador n\xE3o tem como iniciar outro app."))}],[V("hands"),()=>{t.innerHTML=`<h2>${V("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let o=fe("div","card");o.append(zt(V("on"),"\xDAnica entrada da interface VR",fe("span","note","Sempre ativo"))),o.append(zt(V("sens"),"MediaPipe nativo \xB7 c\xE2mera traseira",fe("span","note","2 m\xE3os \xB7 21 landmarks"))),o.append(zt("Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",al("handDraw"))),o.append(zt("Pinch","Entrada nativa est\xE1vel com histerese",fe("span","note","0.30 / 0.48"))),o.append(zt("Detector","MediaPipe Tasks Vision, 2 m\xE3os por frame",fe("span","note","NextVR"))),t.append(o)}],[V("windows"),()=>{t.innerHTML=`<h2>${V("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let o=fe("div","card");o.append(zt(V("curve"),"1 = encara o centro; menor = mais aberta",ts("winCurve",0,1,.05))),o.append(zt("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",ts("winTilt",0,1.5,.05))),o.append(zt(V("scale"),"Tamanho das janelas",ts("winScale",.6,1.6,.05))),o.append(zt(V("dist"),"Dist\xE2ncia do arco",ts("winDist",Te?.6:1.5,Te?1.8:3.4,.05))),o.append(zt(V("win360"),V("win360k"),ts("win360K",.2,1.15,.05))),o.append(zt(V("win360All"),"O bot\xE3o 360\xB0 na barra da janela troca por janela",al("win360"))),t.append(o)}],[V("dock"),()=>{t.innerHTML=`<h2>${V("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let o=fe("div","card");o.append(zt(V("size"),null,ts("dockSize",.7,1.5,.05))),o.append(zt(V("dist"),null,ts("dockDist",.7,1.5,.05))),t.append(o)}],[V("env"),()=>{t.innerHTML="",t.append(fe("h2",null,V("env"))),t.append(fe("p","sub","Passthrough da c\xE2mera ou um panorama 360\xB0 em volta de voc\xEA."));let o=fe("div","grid3");for(let a of pu()){let c=fe("button","env"+(a.thumb?" env-pano":""));c.style.background=a.thumb?`url('${a.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",c.innerHTML=`<span>${a.name}</span>`,c.setAttribute("aria-pressed",Oe.env===a.id),c.onclick=()=>{Lc(a.id),[...o.children].forEach(l=>l.setAttribute("aria-pressed","false")),c.setAttribute("aria-pressed","true")},o.appendChild(c)}t.append(o)}],[V("perf"),()=>{t.innerHTML=`<h2>${V("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let o=fe("div","card"),a=fe("div","seg");for(let[c,l]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=fe("button",null,l);h.setAttribute("aria-pressed",Oe.quality===c),h.onclick=()=>{Oe.quality=c,zs(),ft("quality"),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},a.appendChild(h)}o.append(zt(V("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",a)),t.append(o),t.append(fe("p","note","O hand tracking roda na pr\xF3pria cad\xEAncia (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking."))}]],s=0;function r(){e.innerHTML="",i.forEach(([o],a)=>{let c=fe("button",null,o);c.setAttribute("aria-selected",a===s),c.onclick=()=>{s=a,r()},e.appendChild(c)}),i[s][1]()}return r(),Tn({id:"settings",title:V("settings"),node:n})}var Fd="nextvr.store.installed.v1",zd="nextvr.store.favs.v1",Bd="nextvr.lib.recent.v1",hl=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},Bn=hl(Fd),ns=hl(zd),is=hl(Bd),eo=()=>{try{localStorage.setItem(Fd,JSON.stringify(Bn)),localStorage.setItem(zd,JSON.stringify(ns)),localStorage.setItem(Bd,JSON.stringify(is))}catch{}},Ti={},Tr=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],to=n=>Tr.find(e=>e.id===n),kd=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"linear-gradient(145deg,#34343a,#111115)",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],vx=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify","browser","store","gallery","settings"],Rr=n=>{let e=Qe.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null},xx={youtube:()=>Ud(),browser:()=>Bt("browser",V("browser"),"https://duckduckgo.com/"),store:()=>Hd(),gallery:()=>Od(),settings:()=>Ja(),discord:()=>Bt("discord","Discord","https://discord.com/app"),netflix:()=>Bt("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>Bt("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>Bt("twitch","Twitch","https://www.twitch.tv/"),prime:()=>Bt("prime","prime video","https://www.primevideo.com/"),pluto:()=>Bt("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>Bt("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>Bt("instagram","Instagram","https://www.instagram.com/"),x:()=>Bt("x","X Twitter","https://x.com/"),facebook:()=>Bt("facebook","Facebook","https://www.facebook.com/"),telegram:()=>Bt("telegram","Telegram","https://web.telegram.org/"),spotify:()=>Bt("spotify","Spotify","https://open.spotify.com/")},Ai="home",yx=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function bx(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function Mx(n){let e=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",t=n.phones?bx():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${e}<div class="art">${t}</div>`+(Bn.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function Sx(n){let e=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",t=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${e}${t}</span>`}function Ad(n){let e=Bn.includes(n.id),t=Ti[n.id],i=t!==void 0,s=ns.includes(n.id),r=e?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(t)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${Mx(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${e?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">${We("heart")}</button></div>
    <div class="st-row">${r}</div></article>`}function wx(){let n=fe("div","st"),t=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${yx.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${Ai===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${We("user")}</button><button class="st-x" data-x aria-label="Fechar">${We("x")}</button></div>`;if(Ai==="apps")t+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(Ai==="horizon")t+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(Ai==="wish"){let i=Tr.filter(s=>ns.includes(s.id));t+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(Ad).join("")}</div>`:'<p class="st-note">Selecione o \xEDcone de favorito de um jogo para salv\xE1-lo aqui.</p>'}else{let i=Tr.map((o,a)=>`<button class="st-ri" data-rank="${o.id}">${Sx(o)}
      <span><span class="st-rk">${a+1}. ${o.name}</span><div class="st-cat">${o.cat}</div>
      <div class="st-st">${Bn.includes(o.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=Tr.map(Ad).join("");t+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${Ai==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(Ai==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=t,n.addEventListener("click",i=>{var o;let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){Ai=r.dataset.tab,Ci();return}if(s("[data-x]")){let a=Qe.find(c=>c.id==="store");a&&wi(a);return}if(s("[data-ava]")){it("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){Ai="games",Ci();return}if(s("[data-openlib]")){Vd();return}if(r=s("[data-rank]")){(o=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let a=r.dataset.fav;ns=ns.includes(a)?ns.filter(c=>c!==a):[...ns,a],eo(),Ci();return}if(r=s("[data-dl]")){Ax(r.dataset.dl);return}if(r=s("[data-rm]")){Tx(r.dataset.rm);return}if(r=s("[data-open]")){let a=to(r.dataset.open);it(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`),Qa(a.id);return}}),n}function Ci(){var t;let n=Rr("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(wx()),n.querySelector(".st").scrollTop=e}function Ex(n){let e=Rr("store");e&&e.querySelectorAll(`[data-dl="${n}"]`).forEach(t=>{t.textContent="BAIXANDO "+Math.round(Ti[n]||0)+"%"})}function Hd(){let n=Qe.find(i=>i.id==="store");if(n)return Ci(),Nn(n),n;let e=fe("div");e.style.cssText="height:100%";let t=Tn({id:"store",title:"Store",node:e});return Ci(),t}function Ax(n){if(Ti[n]!==void 0||Bn.includes(n))return;Ti[n]=0,Ci();let e=to(n);it("Baixando "+e.name+"\u2026");let t=setInterval(()=>{if(Ti[n]=Math.min(100,Ti[n]+6+Math.random()*11),Ti[n]<100){Ex(n);return}clearInterval(t),delete Ti[n],Bn.includes(n)||Bn.push(n),Qa(n,!0),eo(),Ci(),Cn(),it(e.name+" foi para a biblioteca de apps com sucesso")},170)}function Tx(n){Bn=Bn.filter(e=>e!==n),is=is.filter(e=>e!==n),eo(),Ci(),Cn(),it(to(n).name+" removido da biblioteca")}var Ka="recent",Fn="all",Ar="",ol=["all","games","apps","recent"],Td={all:"Todas",games:"Jogos",apps:"Apps",recent:"Recentes"};function Qa(n,e){is=[n,...is.filter(t=>t!==n)].slice(0,40),eo(),e||Cn()}function Rx(){gd(!1);let n=Tr.filter(a=>Bn.includes(a.id)).map(a=>({...a,kind:"game"})),e=kd.map(a=>({...a,kind:"app"})),t=bd().map(a=>({kind:"android",id:"android:"+a.pkg,name:a.label||a.pkg,label:a.label||a.pkg,pkg:a.pkg,icon:a.icon,system:a.system,app:a})),i=[...n,...e,...t],s=a=>{let c=vx.indexOf(a);return c<0?99:c};i.sort((a,c)=>s(a.id)-s(c.id)),Fn==="games"&&(i=i.filter(a=>a.kind==="game")),Fn==="apps"&&(i=i.filter(a=>a.kind==="app"||a.kind==="android")),Fn==="recent"&&(i=i.filter(a=>a.kind==="android"?Md(a.pkg):is.includes(a.id)));let r=Ar.trim().toLowerCase();if(r&&(i=i.filter(a=>(a.name+" "+(a.label||"")).toLowerCase().includes(r))),Ka==="az")return[...i].sort((a,c)=>a.name.localeCompare(c.name,"pt-BR"));let o=a=>{if(a.kind==="android"){let l=Sd(a.pkg);return l<0?1e6:l}let c=is.indexOf(a.id);return c<0?1e6:c};return[...i].sort((a,c)=>o(a)-o(c))}function Cx(n){let e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${We(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${e}<span class="nm fb">${n.label||n.name}</span>`:t;return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function Px(n){let e=n.img?`<img class="lib-game-cover" src="${n.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"";return`<button class="lib-tile game" data-game="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}">${e}<span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span></span><span class="lib-label">${n.name}</span></button>`}function Lx(){var o;let n=Rx(),e=fe("div","lib"),t=Td[Fn]||Td.all,i=(a,c,l)=>`<button class="lib-nav" data-nav="${a}" title="${c}" aria-label="${c}" aria-pressed="${Fn===a}">${We(l)}</button>`;e.innerHTML=`<nav class="lib-rail" aria-label="Navega\xE7\xE3o da biblioteca">
      ${i("all","Todas as aplica\xE7\xF5es","appGrid")}
      ${i("apps","Aplicativos","device")}
      ${i("games","Jogos","controller")}
      ${i("recent","Recentes","timer")}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${We("store")}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">Apps</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${We("search")}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${On(Ar)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${Ka==="az"?"A\u2013Z":"Recentes"} ${We("chevronDown")}</button>
        <button class="lib-pill" data-filter>${t} \xB7 ${n.length} ${We("chevronDown")}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${n.map(a=>a.kind==="game"?Px(a):a.kind==="android"?vd(a.app):Cx(a)).join("")}</div>
      ${n.length?"":`<div class="lib-empty">${Fn==="games"?"Nenhum jogo baixado ainda. Baixe um na Store.":Fn==="recent"?"Os apps usados recentemente v\xE3o aparecer aqui.":"Nenhum app encontrado."}</div>`}
      </div>
    </section>
    `;let s=_d();s&&((o=e.querySelector(".lib-scroll"))==null||o.prepend(s));let r=e.querySelector('[data-q]:not([data-q="android"])');return r&&Ar&&r.classList.add("open"),r&&(r.addEventListener("input",()=>{var c;Ar=r.value,Cn(!0);let a=(c=Rr("library"))==null?void 0:c.querySelector('[data-q]:not([data-q="android"])');a&&(a.focus(),a.setSelectionRange(a.value.length,a.value.length))}),r.addEventListener("focus",()=>ri(!0,r))),e.addEventListener("click",a=>{let c=h=>a.target.closest(h),l;if(c("[data-s]")){let h=e.querySelector('[data-q]:not([data-q="android"])');if(!h)return;h.classList.toggle("open"),h.classList.contains("open")?h.focus():(Ar="",h.value="",Cn());return}if(l=c("[data-nav]")){Fn=l.dataset.nav,Cn();return}if(c("[data-sort]")){Ka=Ka==="az"?"recent":"az",Cn();return}if(c("[data-filter]")){Fn=ol[(ol.indexOf(Fn)+1)%ol.length],Cn();return}if(l=c("[data-android]")){let h=l.dataset.android,u=xd(h);if(u&&u.state==="suspended")return nl(h);if(u&&u.state==="failed")return nl(h);if(u)return;md(h,wd);return}if(l=c("[data-game]")){let h=to(l.dataset.game);Qa(h.id),it(`Abrindo ${h.name}\u2026 (demonstra\xE7\xE3o)`);return}if(l=c("[data-app]")){let h=kd.find(d=>d.id===l.dataset.app);if(!h)return;Qa(h.id);let u=xx[h.id];u?u():it(h.name+": sem endere\xE7o cadastrado");return}}),e}function Cn(n){var i;let e=Rr("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(Lx()),e.querySelector(".lib-scroll").scrollTop=t}function Vd(){let n=Qe.find(i=>i.id==="library");if(n)return Cn(),Nn(n),n;let e=fe("div");e.style.cssText="height:100%";let t=Tn({id:"library",title:V("apps"),node:e});return Cn(),t}var ai=Object.freeze({bell:We("notification"),kb:We("keyboard"),center:We("crosshair"),compass:We("compass"),store:We("store"),people:We("people"),camera:We("camera"),gear:We("settings"),play:We("play"),device:We("device")});function Gd(){Ju([{kind:"avatar",id:"profile",label:V("profile"),run:Ja},{kind:"status",id:"status",label:V("settings"),run:Ja},{kind:"tool",id:"bell",label:V("notif"),svg:ai.bell,run:()=>it(V("noNotif"))},{kind:"tool",id:"kb",label:V("keyboard"),svg:ai.kb,run:()=>ri(!Qu(),null)},{kind:"tool",id:"center",label:V("center"),svg:ai.center,run:()=>Na()},{kind:"sep"},{id:"browser",win:"browser",label:V("browser"),svg:ai.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>Bt("browser",V("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:V("store"),svg:ai.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:Hd},{id:"discord",win:"discord",label:"Discord",svg:ai.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>Bt("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:V("gallery"),svg:ai.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:Od},{kind:"sep"},{id:"settings",win:"settings",label:V("settings"),svg:ai.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Ja},{id:"youtube",win:"youtube",label:"YouTube",svg:ai.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:Ud},{id:"library",win:"library",launcher:!0,label:V("apps"),run:Vd}])}ht("lang",Gd);function Ix(){let n=document.querySelector('.dock [data-id="library"], .dock-app[data-id="library"]');if(!n)return;let e=yd(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=fe("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}Ed();ht("appsState",()=>{Ix(),Dx()});var cl=0;function Dx(){cl||(cl=setTimeout(()=>{cl=0,Rr("library")&&Cn()},500))}var Nx=document.getElementById("boot"),Ay=document.getElementById("bootGo"),Ri=null;Nx.hidden=!0;function Ux(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function Wd(n,e,t=!1){let i=fe("div",t?"langwin slim":"langwin"),s=o=>Ia(o).label;return(()=>{i.innerHTML=`<div class="lq-head"><span class="lq-pick">${s(n)}</span><span class="lq-title">${V("langTitle")}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${ar.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${V("langSoon")}</i>`}</button>`).join("")}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a m\xE3o e fa\xE7a uma pin\xE7a para escolher.</span>
        <button class="lq-go">${V("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function Ox(){var e,t;let n=Tn({id:"language",title:"Next VR",w:880,h:660,onboarding:!0,node:Wd(Oe.lang||Ux(),Fx)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}ht("handframe",n=>{let e=Ri==null?void 0:Ri.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function Fx(n){if(!Ri)return;Pc(n),Ri&&(wi(Ri),Ri=null),Ya(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=lr(),t=Oe.handsOn?fr():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Na(),280)}document.getElementById("btnGyro").onclick=()=>lr();document.getElementById("btnHand").onclick=()=>Su()?Oc():fr();ht("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});ht("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});Gd();Oe.lang?(Ya(!0),Te&&(lr(),Oe.handsOn&&fr()),document.getElementById("perm").hidden=!1,setTimeout(()=>Na(),280)):(Ya(!1),document.getElementById("stat").hidden=!0,Ri=Ox());Te&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=cr).invalidate)==null||e.call(n),lr(),Oe.handsOn&&fr()},window.nextvrSuspend=()=>{Oc()},ht("hands",()=>{document.getElementById("perm").hidden=!0}));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
