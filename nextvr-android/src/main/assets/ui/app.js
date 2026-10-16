(()=>{var um=0,nu=1,dm=2;var Pd=1,fm=2,li=3,Fi=0,un=1,ci=2;var Ni=0,Qs=1,iu=2,su=3,ru=4,pm=5,ls=100,mm=101,gm=102,au=103,ou=104,xm=200,vm=201,_m=202,ym=203,Jl=204,jl=205,bm=206,Mm=207,Sm=208,wm=209,Em=210,Am=211,Tm=212,Rm=213,Cm=214,Pm=0,Lm=1,Im=2,eo=3,Dm=4,Nm=5,Um=6,Om=7,Ld=0,Fm=1,km=2,Ui=0,zm=1,Bm=2,Hm=3,Vm=4,Gm=5,Wm=6;var Id=300,ir=301,sr=302,Kl=303,Ql=304,Eo=306,ec=1e3,Un=1001,tc=1002,nn=1003,lu=1004;var _l=1005;var En=1006,Xm=1007;var Fr=1008;var Oi=1009,qm=1010,Ym=1011,Ic=1012,Dd=1013,Li=1014,Ii=1015,kr=1016,Nd=1017,Ud=1018,us=1020,$m=1021,On=1023,Zm=1024,Jm=1025,ds=1026,rr=1027,jm=1028,Od=1029,Km=1030,Fd=1031,kd=1033,yl=33776,bl=33777,Ml=33778,Sl=33779,cu=35840,hu=35841,uu=35842,du=35843,zd=36196,fu=37492,pu=37496,mu=37808,gu=37809,xu=37810,vu=37811,_u=37812,yu=37813,bu=37814,Mu=37815,Su=37816,wu=37817,Eu=37818,Au=37819,Tu=37820,Ru=37821,wl=36492,Cu=36494,Pu=36495,Qm=36283,Lu=36284,Iu=36285,Du=36286;var to=2300,no=2301,El=2302,Nu=2400,Uu=2401,Ou=2402;var Bd=3e3,fs=3001,eg=3200,tg=3201,ng=0,ig=1,An="",zt="srgb",ui="srgb-linear",Dc="display-p3",Ao="display-p3-linear",io="linear",gt="srgb",so="rec709",ro="p3";var Ns=7680;var Fu=519,sg=512,rg=513,ag=514,Hd=515,og=516,lg=517,cg=518,hg=519,ku=35044;var zu="300 es",nc=1035,hi=2e3,ao=2001,ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=1234567,er=Math.PI/180,zr=180/Math.PI;function cr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function Nc(n,e){return(n%e+e)%e}function ug(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function dg(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function fg(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function pg(n,e=1){return e-Math.abs(Nc(n,e*2)-e)}function mg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vg(n,e){return n+Math.random()*(e-n)}function _g(n){return n*(.5-Math.random())}function yg(n){n!==void 0&&(Bu=n);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bg(n){return n*er}function Mg(n){return n*zr}function ic(n){return(n&n-1)===0&&n!==0}function Sg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Vd={DEG2RAD:er,RAD2DEG:zr,generateUUID:cr,clamp:sn,euclideanModulo:Nc,mapLinear:ug,inverseLerp:dg,lerp:Nr,damp:fg,pingpong:pg,smoothstep:mg,smootherstep:gg,randInt:xg,randFloat:vg,randFloatSpread:_g,seededRandom:yg,degToRad:bg,radToDeg:Mg,isPowerOfTwo:ic,ceilPowerOfTwo:Sg,floorPowerOfTwo:oo,setQuaternionFromProperEuler:wg,normalize:en,denormalize:Js},$e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],x=s[0],f=s[3],p=s[6],M=s[1],v=s[4],A=s[7],R=s[2],E=s[5],T=s[8];return r[0]=o*x+a*M+c*R,r[3]=o*f+a*v+c*E,r[6]=o*p+a*A+c*T,r[1]=l*x+h*M+u*R,r[4]=l*f+h*v+u*E,r[7]=l*p+h*A+u*T,r[2]=d*x+m*M+g*R,r[5]=d*f+m*v+g*E,r[8]=d*p+m*A+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Al=new We;function Gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eg(){let n=lo("canvas");return n.style.display="block",n}var Hu={};function Ur(n){n in Hu||(Hu[n]=!0,console.warn(n))}var Vu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[ui]:{transfer:io,primaries:so,toReference:n=>n,fromReference:n=>n},[zt]:{transfer:gt,primaries:so,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ao]:{transfer:io,primaries:ro,toReference:n=>n.applyMatrix3(Gu),fromReference:n=>n.applyMatrix3(Vu)},[Dc]:{transfer:gt,primaries:ro,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gu),fromReference:n=>n.applyMatrix3(Vu).convertLinearToSRGB()}},Ag=new Set([ui,Ao]),ct={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ag.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ta[e].toReference,s=Ta[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ta[n].primaries},getTransfer:function(n){return n===An?io:Ta[n].transfer}};function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Us,co=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=lo("canvas")),Us.width=e.width,Us.height=e.height;let i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=tr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tg=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rl(s[o].image)):r.push(Rl(s[o]))}else r=Rl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?co.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rg=0,Fn=class n extends ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Un,s=Un,r=En,o=Fr,a=On,c=Oi,l=n.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=cr(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fs?zt:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?fs:Bd}set encoding(e){Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?zt:An}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Id;Fn.DEFAULT_ANISOTROPY=1;var Bt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],x=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,A=(m+1)/2,R=(p+1)/2,E=(h+d)/4,T=(u+x)/4,B=(g+f)/4;return v>A&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=T/i):A>R?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=B/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=B/r),this.set(i,s,r,t),this}let M=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fs?zt:An),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},uo=class extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rc=class extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*x,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),E=Math.atan2(R,p*M);f=Math.sin(f*E)/R,a=Math.sin(a*E)/R}let A=a*M;if(c=c*f+d*A,l=l*f+m*A,h=h*f+g*A,u=u*f+x*A,f===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cl=new P,Wu=new an,ps=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ca.subVectors(this.max,Pr),Os.subVectors(e.a,Pr),Fs.subVectors(e.b,Pr),ks.subVectors(e.c,Pr),Ai.subVectors(Fs,Os),Ti.subVectors(ks,Fs),is.subVectors(Os,ks);let t=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-is.z,is.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,is.z,0,-is.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-is.y,is.x,0];return!Pl(t,Os,Fs,ks,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,Os,Fs,ks,Ca))?!1:(Pa.crossVectors(Ai,Ti),t=[Pa.x,Pa.y,Pa.z],Pl(t,Os,Fs,ks,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new P,new P,new P,new P,new P,new P,new P,new P],In=new P,Ra=new ps,Os=new P,Fs=new P,ks=new P,Ai=new P,Ti=new P,is=new P,Pr=new P,Ca=new P,Pa=new P,ss=new P;function Pl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Cg=new ps,Lr=new P,Ll=new P,ar=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ll)),this.expandByPoint(Lr.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new P,Il=new P,La=new P,Ri=new P,Dl=new P,Ia=new P,Nl=new P,Br=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Il.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Il);let r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=Ri.dot(this.direction),c=-Ri.dot(La),l=Ri.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Il).addScaledVector(La,d),m}intersectSphere(e,t){si.subVectors(e.center,this.origin);let i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),Ia.subVectors(i,e),Nl.crossVectors(Dl,Ia);let o=this.direction.dot(Nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);let c=a*this.direction.dot(Ia.crossVectors(Ri,Ia));if(c<0)return null;let l=a*this.direction.dot(Dl.cross(Ri));if(l<0||c+l>o)return null;let h=-a*Ri.dot(Nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,d,m,g,x,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,m,g,x,f)}set(e,t,i,s,r,o,a,c,l,h,u,d,m,g,x,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pg,e,Lg)}lookAt(e,t,i){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ci.crossVectors(i,xn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ci.crossVectors(i,xn)),Ci.normalize(),Da.crossVectors(xn,Ci),s[0]=Ci.x,s[4]=Da.x,s[8]=xn.x,s[1]=Ci.y,s[5]=Da.y,s[9]=xn.y,s[2]=Ci.z,s[6]=Da.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],x=i[6],f=i[10],p=i[14],M=i[3],v=i[7],A=i[11],R=i[15],E=s[0],T=s[4],B=s[8],y=s[12],w=s[1],N=s[5],W=s[9],Q=s[13],I=s[2],U=s[6],G=s[10],Y=s[14],q=s[3],X=s[7],j=s[11],te=s[15];return r[0]=o*E+a*w+c*I+l*q,r[4]=o*T+a*N+c*U+l*X,r[8]=o*B+a*W+c*G+l*j,r[12]=o*y+a*Q+c*Y+l*te,r[1]=h*E+u*w+d*I+m*q,r[5]=h*T+u*N+d*U+m*X,r[9]=h*B+u*W+d*G+m*j,r[13]=h*y+u*Q+d*Y+m*te,r[2]=g*E+x*w+f*I+p*q,r[6]=g*T+x*N+f*U+p*X,r[10]=g*B+x*W+f*G+p*j,r[14]=g*y+x*Q+f*Y+p*te,r[3]=M*E+v*w+A*I+R*q,r[7]=M*T+v*N+A*U+R*X,r[11]=M*B+v*W+A*G+R*j,r[15]=M*y+v*Q+A*Y+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],x=e[7],f=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*m-i*c*m)+x*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*h-r*c*h)+f*(+t*l*u-t*a*m-r*o*u+i*o*m+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],x=e[13],f=e[14],p=e[15],M=u*f*l-x*d*l+x*c*m-a*f*m-u*c*p+a*d*p,v=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,A=h*x*l-g*u*l+g*a*m-o*x*m-h*a*p+o*u*p,R=g*u*c-h*x*c-g*a*d+o*x*d+h*a*f-o*u*f,E=t*M+i*v+s*A+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=M*T,e[1]=(x*d*r-u*f*r-x*s*m+i*f*m+u*s*p-i*d*p)*T,e[2]=(a*f*r-x*c*r+x*s*l-i*f*l-a*s*p+i*c*p)*T,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*m-i*c*m)*T,e[4]=v*T,e[5]=(h*f*r-g*d*r+g*s*m-t*f*m-h*s*p+t*d*p)*T,e[6]=(g*c*r-o*f*r-g*s*l+t*f*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*m+t*c*m)*T,e[8]=A*T,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*p-t*u*p)*T,e[10]=(o*x*r-g*a*r+g*i*l-t*x*l-o*i*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*m-t*a*m)*T,e[12]=R*T,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*f+t*u*f)*T,e[14]=(g*a*s-o*x*s-g*i*c+t*x*c+o*i*f-t*a*f)*T,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,x=o*h,f=o*u,p=a*u,M=c*l,v=c*h,A=c*u,R=i.x,E=i.y,T=i.z;return s[0]=(1-(x+p))*R,s[1]=(m+A)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(m-A)*E,s[5]=(1-(d+p))*E,s[6]=(f+M)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(f-M)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);let l=1/r,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=hi){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,g;if(a===hi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=hi){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,m=(i+s)*h,g,x;if(a===hi)g=(o+r)*u,x=-2*u;else if(a===ao)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},zs=new P,Dn=new tt,Pg=new P(0,0,0),Lg=new P(1,1,1),Ci=new P,Da=new P,xn=new P,Xu=new tt,qu=new an,kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ig=0,Yu=new P,Bs=new an,ri=new tt,Na=new P,Ir=new P,Dg=new P,Ng=new an,$u=new P(1,0,0),Zu=new P(0,1,0),Ju=new P(0,0,1),Ug={type:"added"},Og={type:"removed"},dn=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new kn,i=new an,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new We}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Ir,Na,this.up):ri.lookAt(Na,Ir,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(ri),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Og)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};dn.DEFAULT_UP=new P(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new P,ai=new P,Ul=new P,oi=new P,Hs=new P,Vs=new P,ju=new P,Ol=new P,Fl=new P,kl=new P,Ua=!1,hs=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),ai.subVectors(i,t),Ul.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ai),c=Nn.dot(Ul),l=ai.dot(ai),h=ai.dot(Ul),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,t,i,s,r,o,a,c){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),ai.subVectors(e,t),Nn.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Nn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,i),Vs.subVectors(r,i),Ol.subVectors(e,i);let c=Hs.dot(Ol),l=Vs.dot(Ol);if(c<=0&&l<=0)return t.copy(i);Fl.subVectors(e,s);let h=Hs.dot(Fl),u=Vs.dot(Fl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Hs,o);kl.subVectors(e,r);let m=Hs.dot(kl),g=Vs.dot(kl);if(g>=0&&m<=g)return t.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Vs,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return ju.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(ju,a);let p=1/(f+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=Nc(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zl(o,r,e+1/3),this.g=zl(o,r,e),this.b=zl(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=Wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ct.fromWorkingColorSpace(Xt.copy(this),e),Math.round(sn(Xt.r*255,0,255))*65536+Math.round(sn(Xt.g*255,0,255))*256+Math.round(sn(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){ct.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,s=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Oa);let i=Nr(Pi.h,Oa.h,t),s=Nr(Pi.s,Oa.s,t),r=Nr(Pi.l,Oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new nt;nt.NAMES=Wd;var Fg=0,ms=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Qs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=jl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rn=class extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new P,Fa=new $e,Tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ku,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ku&&(e.usage=this.usage),e}};var fo=class extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var po=class extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ot=class extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var kg=0,wn=new tt,Bl=new dn,Gs=new P,vn=new ps,Dr=new ps,Ut=new P,zn=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?po:fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(vn.min,Dr.min),vn.expandByPoint(Ut),Ut.addVectors(vn.max,Dr.max),vn.expandByPoint(Ut)):(vn.expandByPoint(Dr.min),vn.expandByPoint(Dr.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ut.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(e,l),Ut.add(Gs)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new P,h[w]=new P;let u=new P,d=new P,m=new P,g=new $e,x=new $e,f=new $e,p=new P,M=new P;function v(w,N,W){u.fromArray(s,w*3),d.fromArray(s,N*3),m.fromArray(s,W*3),g.fromArray(o,w*2),x.fromArray(o,N*2),f.fromArray(o,W*2),d.sub(u),m.sub(u),x.sub(g),f.sub(g);let Q=1/(x.x*f.y-f.x*x.y);isFinite(Q)&&(p.copy(d).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(Q),M.copy(m).multiplyScalar(x.x).addScaledVector(d,-f.x).multiplyScalar(Q),l[w].add(p),l[N].add(p),l[W].add(p),h[w].add(M),h[N].add(M),h[W].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let w=0,N=A.length;w<N;++w){let W=A[w],Q=W.start,I=W.count;for(let U=Q,G=Q+I;U<G;U+=3)v(i[U+0],i[U+1],i[U+2])}let R=new P,E=new P,T=new P,B=new P;function y(w){T.fromArray(r,w*3),B.copy(T);let N=l[w];R.copy(N),R.sub(T.multiplyScalar(T.dot(N))).normalize(),E.crossVectors(B,N);let Q=E.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=Q}for(let w=0,N=A.length;w<N;++w){let W=A[w],Q=W.start,I=W.count;for(let U=Q,G=Q+I;U<G;U+=3)y(i[U+0]),y(i[U+1]),y(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,f),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ku=new tt,rs=new Br,ka=new ar,Qu=new P,Ws=new P,Xs=new P,qs=new P,Hl=new P,za=new P,Ba=new $e,Ha=new $e,Va=new $e,ed=new P,td=new P,nd=new P,Ga=new P,Wa=new P,Ht=class extends dn{constructor(e=new zn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){za.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Hl.fromBufferAttribute(u,e),o?za.addScaledVector(Hl,h):za.addScaledVector(Hl.sub(t),h))}t.add(za)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(ka.containsPoint(rs.origin)===!1&&(rs.intersectSphere(ka,Qu)===null||rs.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ku.copy(r).invert(),rs.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let A=M,R=v;A<R;A+=3){let E=a.getX(A),T=a.getX(A+1),B=a.getX(A+2);s=Xa(this,p,e,i,l,h,u,E,T,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){let M=a.getX(f),v=a.getX(f+1),A=a.getX(f+2);s=Xa(this,o,e,i,l,h,u,M,v,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let A=M,R=v;A<R;A+=3){let E=A,T=A+1,B=A+2;s=Xa(this,p,e,i,l,h,u,E,T,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){let M=f,v=f+1,A=f+2;s=Xa(this,o,e,i,l,h,u,M,v,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function zg(n,e,t,i,s,r,o,a){let c;if(e.side===un?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Fi,a),c===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Wa);return l<t.near||l>t.far?null:{distance:l,point:Wa.clone(),object:n}}function Xa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ws),n.getVertexPosition(c,Xs),n.getVertexPosition(l,qs);let h=zg(n,e,t,i,Ws,Xs,qs,Ga);if(h){s&&(Ba.fromBufferAttribute(s,a),Ha.fromBufferAttribute(s,c),Va.fromBufferAttribute(s,l),h.uv=hs.getInterpolation(Ga,Ws,Xs,qs,Ba,Ha,Va,new $e)),r&&(Ba.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,c),Va.fromBufferAttribute(r,l),h.uv1=hs.getInterpolation(Ga,Ws,Xs,qs,Ba,Ha,Va,new $e),h.uv2=h.uv1),o&&(ed.fromBufferAttribute(o,a),td.fromBufferAttribute(o,c),nd.fromBufferAttribute(o,l),h.normal=hs.getInterpolation(Ga,Ws,Xs,qs,ed,td,nd,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};hs.getNormal(Ws,Xs,qs,u.normal),h.face=u}return h}var zi=class n extends zn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function g(x,f,p,M,v,A,R,E,T,B,y){let w=A/T,N=R/B,W=A/2,Q=R/2,I=E/2,U=T+1,G=B+1,Y=0,q=0,X=new P;for(let j=0;j<G;j++){let te=j*N-Q;for(let he=0;he<U;he++){let V=he*w-W;X[x]=V*M,X[f]=te*v,X[p]=I,l.push(X.x,X.y,X.z),X[x]=0,X[f]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(he/T),u.push(1-j/B),Y+=1}}for(let j=0;j<B;j++)for(let te=0;te<T;te++){let he=d+te+U*j,V=d+te+U*(j+1),$=d+(te+1)+U*(j+1),le=d+(te+1)+U*j;c.push(he,V,le),c.push(V,$,le),q+=6}a.addGroup(m,q,y),m+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=or(n[t]);for(let s in i)e[s]=i[s]}return e}function Bg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xd(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var Hg={clone:or,merge:tn},Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},mo=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends mo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(er*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,$s=1,ac=class extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Ys,$s,e,t);s.layers=this.layers,this.add(s);let r=new rn(Ys,$s,e,t);r.layers=this.layers,this.add(r);let o=new rn(Ys,$s,e,t);o.layers=this.layers,this.add(o);let a=new rn(Ys,$s,e,t);a.layers=this.layers,this.add(a);let c=new rn(Ys,$s,e,t);c.layers=this.layers,this.add(c);let l=new rn(Ys,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},go=class extends Fn{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?zt:An),this.texture=new go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=t;let o=new Ht(s,r),a=t.minFilter;return t.minFilter===Fr&&(t.minFilter=En),new ac(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Vl=new P,Wg=new P,Xg=new We,qt=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vl.subVectors(i,t).cross(Wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Xg.getNormalMatrix(e),s=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new ar,qa=new P,xo=class{constructor(e=new qt,t=new qt,i=new qt,s=new qt,r=new qt,o=new qt){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],x=s[10],f=s[11],p=s[12],M=s[13],v=s[14],A=s[15];if(i[0].setComponents(c-r,d-l,f-m,A-p).normalize(),i[1].setComponents(c+r,d+l,f+m,A+p).normalize(),i[2].setComponents(c+o,d+h,f+g,A+M).normalize(),i[3].setComponents(c-o,d-h,f-g,A-M).normalize(),i[4].setComponents(c-a,d-u,f-x,A-v).normalize(),t===hi)i[5].setComponents(c+a,d+u,f+x,A+v).normalize();else if(t===ao)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(l,h){let u=l.array,d=l.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,l),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,f=g.length;x<f;x++){let p=g[x];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var on=class n extends zn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],x=[],f=[];for(let p=0;p<h;p++){let M=p*d-o;for(let v=0;v<l;v++){let A=v*u-r;g.push(A,-M,0),x.push(0,0,1),f.push(v/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let v=M+l*p,A=M+l*(p+1),R=M+1+l*(p+1),E=M+1+l*p;m.push(v,A,E),m.push(A,R,E)}this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$g=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`
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
}`,E0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
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
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,q0=`struct PhysicalMaterial {
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
}`,Y0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ix=`#if defined( USE_POINTS_UV )
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
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
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
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
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
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lx=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,Qx=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,_v=`#define TOON
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
}`,yv=`uniform float size;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,wv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Yg,alphahash_pars_fragment:$g,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:Kg,aomap_fragment:Qg,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:v0,displacementmap_pars_vertex:_0,displacementmap_vertex:y0,emissivemap_fragment:b0,emissivemap_pars_fragment:M0,colorspace_fragment:S0,colorspace_pars_fragment:w0,envmap_fragment:E0,envmap_common_pars_fragment:A0,envmap_pars_fragment:T0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:B0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:I0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_fragment:U0,lightmap_pars_fragment:O0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:k0,lights_pars_begin:z0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:$0,lights_fragment_end:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:Q0,map_fragment:ex,map_pars_fragment:tx,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:sx,metalnessmap_pars_fragment:rx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:hx,normal_fragment_maps:ux,normal_pars_fragment:dx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:_x,opaque_fragment:yx,packing:bx,premultiplied_alpha_fragment:Mx,project_vertex:Sx,dithering_fragment:wx,dithering_pars_fragment:Ex,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Lx,skinbase_vertex:Ix,skinning_pars_vertex:Dx,skinning_vertex:Nx,skinnormal_vertex:Ux,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:kx,tonemapping_pars_fragment:zx,transmission_fragment:Bx,transmission_pars_fragment:Hx,uv_pars_fragment:Vx,uv_pars_vertex:Gx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:$x,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:jx,depth_vert:Kx,depth_frag:Qx,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:ov,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:hv,meshmatcap_frag:uv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:xv,meshtoon_vert:vv,meshtoon_frag:_v,points_vert:yv,points_frag:bv,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:wv,sprite_frag:Ev},ie={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qn={basic:{uniforms:tn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:tn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new nt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:tn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:tn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:tn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new nt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:tn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:tn([ie.points,ie.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:tn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:tn([ie.common,ie.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:tn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:tn([ie.sprite,ie.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:tn([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:tn([ie.lights,ie.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};qn.physical={uniforms:tn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Ya={r:0,b:0,g:0};function Av(n,e,t,i,s,r,o){let a=new nt(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(f,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Eo)?(h===void 0&&(h=new Ht(new zi(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:or(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ct.getTransfer(v.colorSpace)!==gt,(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ht(new on(2,2),new fi({name:"BackgroundMaterial",uniforms:or(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function x(f,p){f.getRGB(Ya,Xd(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,x(a,c)},render:g}}function Tv(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=f(null),l=c,h=!1;function u(I,U,G,Y,q){let X=!1;if(o){let j=x(Y,G,U);l!==j&&(l=j,m(l.object)),X=p(I,Y,G,q),X&&M(I,Y,G,q)}else{let j=U.wireframe===!0;(l.geometry!==Y.id||l.program!==G.id||l.wireframe!==j)&&(l.geometry=Y.id,l.program=G.id,l.wireframe=j,X=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,B(I,U,G,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,U,G){let Y=G.wireframe===!0,q=a[I.id];q===void 0&&(q={},a[I.id]=q);let X=q[U.id];X===void 0&&(X={},q[U.id]=X);let j=X[Y];return j===void 0&&(j=f(d()),X[Y]=j),j}function f(I){let U=[],G=[],Y=[];for(let q=0;q<s;q++)U[q]=0,G[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,U,G,Y){let q=l.attributes,X=U.attributes,j=0,te=G.getAttributes();for(let he in te)if(te[he].location>=0){let $=q[he],le=X[he];if(le===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;j++}return l.attributesNum!==j||l.index!==Y}function M(I,U,G,Y){let q={},X=U.attributes,j=0,te=G.getAttributes();for(let he in te)if(te[he].location>=0){let $=X[he];$===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let le={};le.attribute=$,$&&$.data&&(le.data=$.data),q[he]=le,j++}l.attributes=q,l.attributesNum=j,l.index=Y}function v(){let I=l.newAttributes;for(let U=0,G=I.length;U<G;U++)I[U]=0}function A(I){R(I,0)}function R(I,U){let G=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;G[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),q[I]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),q[I]=U)}function E(){let I=l.newAttributes,U=l.enabledAttributes;for(let G=0,Y=U.length;G<Y;G++)U[G]!==I[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function T(I,U,G,Y,q,X,j){j===!0?n.vertexAttribIPointer(I,U,G,q,X):n.vertexAttribPointer(I,U,G,Y,q,X)}function B(I,U,G,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let q=Y.attributes,X=G.getAttributes(),j=U.defaultAttributeValues;for(let te in X){let he=X[te];if(he.location>=0){let V=q[te];if(V===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let $=V.normalized,le=V.itemSize,_e=t.get(V);if(_e===void 0)continue;let ve=_e.buffer,De=_e.type,Ue=_e.bytesPerElement,Te=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||V.gpuType===Dd);if(V.isInterleavedBufferAttribute){let Ke=V.data,O=Ke.stride,jt=V.offset;if(Ke.isInstancedInterleavedBuffer){for(let Me=0;Me<he.locationSize;Me++)R(he.location+Me,Ke.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let Me=0;Me<he.locationSize;Me++)A(he.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Me=0;Me<he.locationSize;Me++)T(he.location+Me,le/he.locationSize,De,$,O*Ue,(jt+le/he.locationSize*Me)*Ue,Te)}else{if(V.isInstancedBufferAttribute){for(let Ke=0;Ke<he.locationSize;Ke++)R(he.location+Ke,V.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ke=0;Ke<he.locationSize;Ke++)A(he.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ke=0;Ke<he.locationSize;Ke++)T(he.location+Ke,le/he.locationSize,De,$,le*Ue,le/he.locationSize*Ke*Ue,Te)}}else if(j!==void 0){let $=j[te];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(he.location,$);break;case 3:n.vertexAttrib3fv(he.location,$);break;case 4:n.vertexAttrib4fv(he.location,$);break;default:n.vertexAttrib1fv(he.location,$)}}}}E()}function y(){W();for(let I in a){let U=a[I];for(let G in U){let Y=U[G];for(let q in Y)g(Y[q].object),delete Y[q];delete U[G]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;let U=a[I.id];for(let G in U){let Y=U[G];for(let q in Y)g(Y[q].object),delete Y[q];delete U[G]}delete a[I.id]}function N(I){for(let U in a){let G=a[U];if(G[I.id]===void 0)continue;let Y=G[I.id];for(let q in Y)g(Y[q].object),delete Y[q];delete G[I.id]}}function W(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:Q,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:A,disableUnusedAttributes:E}}function Rv(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Cv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=o||e.has("OES_texture_float"),R=v&&A,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:R,maxSamples:E}}function Pv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new qt,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let M=r?0:i,v=M*4,A=p.clippingState||null;c.value=A,A=h(g,d,v,m);for(let R=0;R!==v;++R)A[R]=t[R];p.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=c.value,g!==!0||f===null){let p=m+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,A=m;v!==x;++v,A+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(f,A),f[A+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Lv(n){let e=new WeakMap;function t(o,a){return a===Kl?o.mapping=ir:a===Ql&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kl||a===Ql)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new oc(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var lc=class extends mo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},js=4,id=[.125,.215,.35,.446,.526,.582],cs=20,Gl=new lc,sd=new nt,Wl=null,Xl=0,ql=0,os=(1+Math.sqrt(5))/2,Zs=1/os,rd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,os,Zs),new P(0,os,-Zs),new P(Zs,0,os),new P(-Zs,0,os),new P(os,Zs,0),new P(-os,Zs,0)],vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:kr,format:On,colorSpace:ui,depthBuffer:!1},s=ad(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(r)),this._blurMaterial=Dv(r,e,t)}return s}_compileMaterial(e){let t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,i,s){let a=new rn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sd),h.toneMapping=Ui,h.autoClear=!1;let m=new Rn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Ht(new zi,m),x=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(sd),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;$a(s,M*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$a(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Gl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rd[(s-1)%rd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ht(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cs-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):cs;f>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${cs}`);let p=[],M=0;for(let T=0;T<cs;++T){let B=T/x,y=Math.exp(-B*B/2);p.push(y),T===0?M+=y:T<f&&(M+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let A=this._sizeLods[s],R=3*A*(s>v-js?s-v+js:0),E=4*(this._cubeSize-A);$a(t,R,E,3*A,2*A),c.setRenderTarget(t),c.render(u,Gl)}};function Iv(n){let e=[],t=[],i=[],s=n,r=n-js+1+id.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-js?c=id[o-n+js-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,f=2,p=1,M=new Float32Array(x*g*m),v=new Float32Array(f*g*m),A=new Float32Array(p*g*m);for(let E=0;E<m;E++){let T=E%3*2/3-1,B=E>2?0:-1,y=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];M.set(y,x*g*E),v.set(d,f*g*E);let w=[E,E,E,E,E,E];A.set(w,p*g*E)}let R=new zn;R.setAttribute("position",new Tn(M,x)),R.setAttribute("uv",new Tn(v,f)),R.setAttribute("faceIndex",new Tn(A,p)),e.push(R),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ad(n,e,t){let i=new di(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Dv(n,e,t){let i=new Float32Array(cs),s=new P(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function od(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ld(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function Nv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Kl||c===Ql,h=c===ir||c===sr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new vo(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new vo(n));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Uv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ov(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let f=0,p=x.length;f<p;f++)e.remove(x[f])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let f=0,p=x.length;f<p;f++)e.update(x[f],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let v=0,A=M.length;v<A;v+=3){let R=M[v+0],E=M[v+1],T=M[v+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,A=M.length/3-1;v<A;v+=3){let R=v+0,E=v+1,T=v+2;d.push(R,E,E,T,T,R)}}else return;let f=new(Gd(d)?po:fo)(d,1);f.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,f)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Fv(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*c),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let f,p;if(s)f=n,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,a,m*c,x),t.update(g,r,x)}function d(m,g,x){if(x===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<x;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,x);let p=0;for(let M=0;M<x;M++)p+=g[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function kv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function zv(n,e){return n[0]-e[0]}function Bv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Hv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Bt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],B=0;M===!0&&(B=1),v===!0&&(B=2),A===!0&&(B=3);let y=h.attributes.position.count*B,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let N=new Float32Array(y*w*4*g),W=new uo(N,y,w,g);W.type=Ii,W.needsUpdate=!0;let Q=B*4;for(let U=0;U<g;U++){let G=R[U],Y=E[U],q=T[U],X=y*w*4*U;for(let j=0;j<G.count;j++){let te=j*Q;M===!0&&(o.fromBufferAttribute(G,j),N[X+te+0]=o.x,N[X+te+1]=o.y,N[X+te+2]=o.z,N[X+te+3]=0),v===!0&&(o.fromBufferAttribute(Y,j),N[X+te+4]=o.x,N[X+te+5]=o.y,N[X+te+6]=o.z,N[X+te+7]=0),A===!0&&(o.fromBufferAttribute(q,j),N[X+te+8]=o.x,N[X+te+9]=o.y,N[X+te+10]=o.z,N[X+te+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:W,size:new $e(y,w)},r.set(h,x),h.addEventListener("dispose",I)}let f=0;for(let M=0;M<d.length;M++)f+=d[M];let p=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let A=g[v];A[0]=v,A[1]=d[v]}g.sort(Bv);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(zv);let x=h.morphAttributes.position,f=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let A=a[v],R=A[0],E=A[1];R!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+v)!==x[R]&&h.setAttribute("morphTarget"+v,x[R]),f&&h.getAttribute("morphNormal"+v)!==f[R]&&h.setAttribute("morphNormal"+v,f[R]),s[v]=E,p+=E):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Vv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var _o=class extends Fn{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:ds,h!==ds&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ds&&(i=Li),i===void 0&&h===rr&&(i=us),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yd=new Fn,$d=new _o(1,1);$d.compareFunction=Hd;var Zd=new uo,Jd=new rc,jd=new go,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),It(t,i)}}function $v(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),It(t,i)}}function Zv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),It(t,i)}}function Jv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function Qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function e_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function t_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function n_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function i_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function s_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?$d:Yd;t.setTexture2D(e||r,s)}function r_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jd,s)}function a_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jd,s)}function o_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zd,s)}function l_(n){switch(n){case 5126:return Gv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return $v;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return jv;case 35668:case 35672:return Kv;case 35669:case 35673:return Qv;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(n,e){n.uniform1fv(this.addr,e)}function h_(n,e){let t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function u_(n,e){let t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function d_(n,e){let t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function f_(n,e){let t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p_(n,e){let t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function m_(n,e){let t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function g_(n,e){n.uniform1iv(this.addr,e)}function x_(n,e){n.uniform2iv(this.addr,e)}function v_(n,e){n.uniform3iv(this.addr,e)}function __(n,e){n.uniform4iv(this.addr,e)}function y_(n,e){n.uniform1uiv(this.addr,e)}function b_(n,e){n.uniform2uiv(this.addr,e)}function M_(n,e){n.uniform3uiv(this.addr,e)}function S_(n,e){n.uniform4uiv(this.addr,e)}function w_(n,e,t){let i=this.cache,s=e.length,r=To(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yd,r[o])}function E_(n,e,t){let i=this.cache,s=e.length,r=To(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Jd,r[o])}function A_(n,e,t){let i=this.cache,s=e.length,r=To(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jd,r[o])}function T_(n,e,t){let i=this.cache,s=e.length,r=To(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zd,r[o])}function R_(n){switch(n){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return __;case 5125:return y_;case 36294:return b_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return T_}}var cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=l_(t.type)}},hc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function pd(n,e){n.seq.push(e),n.map[e.id]=e}function C_(n,e,t){let i=n.name,s=i.length;for(Yl.lastIndex=0;;){let r=Yl.exec(i),o=Yl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pd(t,l===void 0?new cc(a,n,e):new hc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new uc(a),pd(t,u)),t=u}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);C_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function md(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var P_=37297,L_=0;function I_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function D_(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===ro&&t===so?i="LinearDisplayP3ToLinearSRGB":e===so&&t===ro&&(i="LinearSRGBToLinearDisplayP3"),n){case ui:case Ao:return[i,"LinearTransferOETF"];case zt:case Dc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I_(n.getShaderSource(e),o)}else return s}function N_(n,e){let t=D_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U_(n,e){let t;switch(e){case zm:t="Linear";break;case Bm:t="Reinhard";break;case Hm:t="OptimizedCineon";break;case Vm:t="ACESFilmic";break;case Wm:t="AgX";break;case Gm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function F_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ks).join(`
`)}function k_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ks(n){return n!==""}function xd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(B_,V_)}var H_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function V_(n,e){let t=Fe[e];if(t===void 0){let i=H_.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dc(t)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(G_,W_)}function W_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function q_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case Fm:e="ENVMAP_BLENDING_MIX";break;case km:e="ENVMAP_BLENDING_ADD";break}return e}function Z_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function J_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=X_(t),l=q_(t),h=Y_(t),u=$_(t),d=Z_(t),m=t.isWebGL2?"":O_(t),g=F_(t),x=k_(r),f=s.createProgram(),p,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ks).join(`
`),p.length>0&&(p+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ks).join(`
`),M.length>0&&(M+=`
`)):(p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),M=[m,yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Ui?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=dc(o),o=xd(o,t),o=vd(o,t),a=dc(a),a=xd(a,t),a=vd(a,t),o=_d(o),a=_d(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let A=v+p+o,R=v+M+a,E=md(s,s.VERTEX_SHADER,A),T=md(s,s.FRAGMENT_SHADER,R);s.attachShader(f,E),s.attachShader(f,T),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function B(W){if(n.debug.checkShaderErrors){let Q=s.getProgramInfoLog(f).trim(),I=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(T).trim(),G=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,E,T);else{let q=gd(s,E,"vertex"),X=gd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+q+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||U==="")&&(Y=!1);Y&&(W.diagnostics={runnable:G,programLog:Q,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:M}})}s.deleteShader(E),s.deleteShader(T),y=new nr(s,f),w=z_(s,f)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(f,P_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L_++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=T,this}var j_=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pc(e),t.set(e,i)),i}},pc=class{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}};function K_(n,e,t,i,s,r,o){let a=new Hr,c=new fc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function f(y,w,N,W,Q){let I=W.fog,U=Q.geometry,G=y.isMeshStandardMaterial?W.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),q=Y&&Y.mapping===Eo?Y.image.height:null,X=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=j!==void 0?j.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let V,$,le,_e;if(X){let Kt=qn[X];V=Kt.vertexShader,$=Kt.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,c.update(y),le=c.getVertexShaderID(y),_e=c.getFragmentShaderID(y);let ve=n.getRenderTarget(),De=Q.isInstancedMesh===!0,Ue=Q.isBatchedMesh===!0,Te=!!y.map,Ke=!!y.matcap,O=!!Y,jt=!!y.aoMap,Me=!!y.lightMap,Le=!!y.bumpMap,pe=!!y.normalMap,vt=!!y.displacementMap,ze=!!y.emissiveMap,S=!!y.metalnessMap,_=!!y.roughnessMap,k=y.anisotropy>0,K=y.clearcoat>0,J=y.iridescence>0,ee=y.sheen>0,ge=y.transmission>0,ae=k&&!!y.anisotropyMap,ue=K&&!!y.clearcoatMap,Ae=K&&!!y.clearcoatNormalMap,Be=K&&!!y.clearcoatRoughnessMap,Z=J&&!!y.iridescenceMap,lt=J&&!!y.iridescenceThicknessMap,qe=ee&&!!y.sheenColorMap,Pe=ee&&!!y.sheenRoughnessMap,be=!!y.specularMap,de=!!y.specularColorMap,Oe=!!y.specularIntensityMap,rt=ge&&!!y.transmissionMap,bt=ge&&!!y.thicknessMap,Ve=!!y.gradientMap,ne=!!y.alphaMap,C=y.alphaTest>0,se=!!y.alphaHash,re=!!y.extensions,Re=!!U.attributes.uv1,Se=!!U.attributes.uv2,dt=!!U.attributes.uv3,ft=Ui;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ue,instancing:De,instancingColor:De&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ui,map:Te,matcap:Ke,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:q,aoMap:jt,lightMap:Me,bumpMap:Le,normalMap:pe,displacementMap:d&&vt,emissiveMap:ze,normalMapObjectSpace:pe&&y.normalMapType===ig,normalMapTangentSpace:pe&&y.normalMapType===ng,metalnessMap:S,roughnessMap:_,anisotropy:k,anisotropyMap:ae,clearcoat:K,clearcoatMap:ue,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:lt,sheen:ee,sheenColorMap:qe,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:de,specularIntensityMap:Oe,transmission:ge,transmissionMap:rt,thicknessMap:bt,gradientMap:Ve,opaque:y.transparent===!1&&y.blending===Qs,alphaMap:ne,alphaTest:C,alphaHash:se,combine:y.combine,mapUv:Te&&x(y.map.channel),aoMapUv:jt&&x(y.aoMap.channel),lightMapUv:Me&&x(y.lightMap.channel),bumpMapUv:Le&&x(y.bumpMap.channel),normalMapUv:pe&&x(y.normalMap.channel),displacementMapUv:vt&&x(y.displacementMap.channel),emissiveMapUv:ze&&x(y.emissiveMap.channel),metalnessMapUv:S&&x(y.metalnessMap.channel),roughnessMapUv:_&&x(y.roughnessMap.channel),anisotropyMapUv:ae&&x(y.anisotropyMap.channel),clearcoatMapUv:ue&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(y.sheenRoughnessMap.channel),specularMapUv:be&&x(y.specularMap.channel),specularColorMapUv:de&&x(y.specularColorMap.channel),specularIntensityMapUv:Oe&&x(y.specularIntensityMap.channel),transmissionMapUv:rt&&x(y.transmissionMap.channel),thicknessMapUv:bt&&x(y.thicknessMap.channel),alphaMapUv:ne&&x(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Se,vertexUv3s:dt,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(Te||ne),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ci,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:re&&y.extensions.derivatives===!0,extensionFragDepth:re&&y.extensions.fragDepth===!0,extensionDrawBuffers:re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)w.push(N),w.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(M(w,y),v(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function A(y){let w=g[y.type],N;if(w){let W=qn[w];N=Hg.clone(W.uniforms)}else N=y.uniforms;return N}function R(y,w){let N;for(let W=0,Q=l.length;W<Q;W++){let I=l[W];if(I.cacheKey===w){N=I,++N.usedTimes;break}}return N===void 0&&(N=new J_(n,w,y,r),l.push(N)),N}function E(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function T(y){c.remove(y)}function B(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:A,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:B}}function Q_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Md(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,m,g,x,f){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=f),e++,p}function a(u,d,m,g,x,f){let p=o(u,d,m,g,x,f);m.transmission>0?i.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(u,d,m,g,x,f){let p=o(u,d,m,g,x,f);m.transmission>0?i.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ey),i.length>1&&i.sort(d||bd),s.length>1&&s.sort(d||bd)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ty(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Md,n.set(i,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ny(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new nt};break;case"SpotLight":t={position:new P,direction:new P,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function iy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var sy=0;function ry(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ay(n,e){let t=new ny,i=iy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new tt,a=new tt;function c(h,u){let d=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,f=0,p=0,M=0,v=0,A=0,R=0,E=0,T=0,B=0,y=0;h.sort(ry);let w=u===!0?Math.PI:1;for(let W=0,Q=h.length;W<Q;W++){let I=h[W],U=I.color,G=I.intensity,Y=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=U.r*G*w,m+=U.g*G*w,g+=U.b*G*w;else if(I.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(I.sh.coefficients[X],G);y++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let j=I.shadow,te=i.get(I);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,s.directionalShadow[x]=te,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=I.shadow.matrix,A++}s.directional[x]=X,x++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(G*w),X.distance=Y,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,s.spot[p]=X;let j=I.shadow;if(I.map&&(s.spotLightMap[T]=I.map,T++,j.updateMatrices(I),I.castShadow&&B++),s.spotLightMatrix[p]=j.matrix,I.castShadow){let te=i.get(I);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,s.spotShadow[p]=te,s.spotShadowMap[p]=q,E++}p++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(U).multiplyScalar(G),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=X,M++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*w),X.distance=I.distance,X.decay=I.decay,I.castShadow){let j=I.shadow,te=i.get(I);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,s.pointShadow[f]=te,s.pointShadowMap[f]=q,s.pointShadowMatrix[f]=I.shadow.matrix,R++}s.point[f]=X,f++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(G*w),X.groundColor.copy(I.groundColor).multiplyScalar(G*w),s.hemi[v]=X,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==f||N.spotLength!==p||N.rectAreaLength!==M||N.hemiLength!==v||N.numDirectionalShadows!==A||N.numPointShadows!==R||N.numSpotShadows!==E||N.numSpotMaps!==T||N.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=M,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+T-B,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=y,N.directionalLength=x,N.pointLength=f,N.spotLength=p,N.rectAreaLength=M,N.hemiLength=v,N.numDirectionalShadows=A,N.numPointShadows=R,N.numSpotShadows=E,N.numSpotMaps=T,N.numLightProbes=y,s.version=sy++)}function l(h,u){let d=0,m=0,g=0,x=0,f=0,p=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let A=h[M];if(A.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(A.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(A.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(A.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(p),m++}else if(A.isHemisphereLight){let R=s.hemi[f];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:s}}function Sd(n,e){let t=new ay(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function oy(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Sd(n,e),t.set(r,[c])):o>=a.length?(c=new Sd(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}var mc=class extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gc=class extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`;function hy(n,e,t){let i=new xo,s=new $e,r=new $e,o=new Bt,a=new mc({depthPacking:tg}),c=new gc,l={},h=t.maxTextureSize,u={[Fi]:un,[un]:Fi,[ci]:ci},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new zn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let p=this.type;this.render=function(E,T,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let y=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Ni),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Q=p!==li&&this.type===li,I=p===li&&this.type!==li;for(let U=0,G=E.length;U<G;U++){let Y=E[U],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let X=q.getFrameExtents();if(s.multiply(X),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||Q===!0||I===!0){let te=this.type!==li?{minFilter:nn,magFilter:nn}:{};q.map!==null&&q.map.dispose(),q.map=new di(s.x,s.y,te),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let j=q.getViewportCount();for(let te=0;te<j;te++){let he=q.getViewport(te);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),W.viewport(o),q.updateMatrices(Y,te),i=q.getFrustum(),A(T,B,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===li&&M(q,B),q.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(y,w,N)};function M(E,T){let B=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,B,d,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,B,m,x,null)}function v(E,T,B,y){let w=null,N=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)w=N;else if(w=B.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=w.uuid,Q=T.uuid,I=l[W];I===void 0&&(I={},l[W]=I);let U=I[Q];U===void 0&&(U=w.clone(),I[Q]=U,T.addEventListener("dispose",R)),w=U}if(w.visible=T.visible,w.wireframe=T.wireframe,y===li?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=n.properties.get(w);W.light=B}return w}function A(E,T,B,y,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===li)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);let Q=e.update(E),I=E.material;if(Array.isArray(I)){let U=Q.groups;for(let G=0,Y=U.length;G<Y;G++){let q=U[G],X=I[q.materialIndex];if(X&&X.visible){let j=v(E,X,y,w);E.onBeforeShadow(n,E,T,B,Q,j,q),n.renderBufferDirect(B,null,Q,j,E,q),E.onAfterShadow(n,E,T,B,Q,j,q)}}}else if(I.visible){let U=v(E,I,y,w);E.onBeforeShadow(n,E,T,B,Q,U,null),n.renderBufferDirect(B,null,Q,U,E,null),E.onAfterShadow(n,E,T,B,Q,U,null)}}let W=E.children;for(let Q=0,I=W.length;Q<I;Q++)A(W[Q],T,B,y,w)}function R(E){E.target.removeEventListener("dispose",R);for(let B in l){let y=l[B],w=E.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function uy(n,e,t){let i=t.isWebGL2;function s(){let C=!1,se=new Bt,re=null,Re=new Bt(0,0,0,0);return{setMask:function(Se){re!==Se&&!C&&(n.colorMask(Se,Se,Se,Se),re=Se)},setLocked:function(Se){C=Se},setClear:function(Se,dt,ft,Dt,Kt){Kt===!0&&(Se*=Dt,dt*=Dt,ft*=Dt),se.set(Se,dt,ft,Dt),Re.equals(se)===!1&&(n.clearColor(Se,dt,ft,Dt),Re.copy(se))},reset:function(){C=!1,re=null,Re.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Re=null;return{setTest:function(Se){Se?Ue(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Se){se!==Se&&!C&&(n.depthMask(Se),se=Se)},setFunc:function(Se){if(re!==Se){switch(Se){case Pm:n.depthFunc(n.NEVER);break;case Lm:n.depthFunc(n.ALWAYS);break;case Im:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case Dm:n.depthFunc(n.EQUAL);break;case Nm:n.depthFunc(n.GEQUAL);break;case Um:n.depthFunc(n.GREATER);break;case Om:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Se}},setLocked:function(Se){C=Se},setClear:function(Se){Re!==Se&&(n.clearDepth(Se),Re=Se)},reset:function(){C=!1,se=null,re=null,Re=null}}}function o(){let C=!1,se=null,re=null,Re=null,Se=null,dt=null,ft=null,Dt=null,Kt=null;return{setTest:function(pt){C||(pt?Ue(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(pt){se!==pt&&!C&&(n.stencilMask(pt),se=pt)},setFunc:function(pt,Qt,Xn){(re!==pt||Re!==Qt||Se!==Xn)&&(n.stencilFunc(pt,Qt,Xn),re=pt,Re=Qt,Se=Xn)},setOp:function(pt,Qt,Xn){(dt!==pt||ft!==Qt||Dt!==Xn)&&(n.stencilOp(pt,Qt,Xn),dt=pt,ft=Qt,Dt=Xn)},setLocked:function(pt){C=pt},setClear:function(pt){Kt!==pt&&(n.clearStencil(pt),Kt=pt)},reset:function(){C=!1,se=null,re=null,Re=null,Se=null,dt=null,ft=null,Dt=null,Kt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,x=[],f=null,p=!1,M=null,v=null,A=null,R=null,E=null,T=null,B=null,y=new nt(0,0,0),w=0,N=!1,W=null,Q=null,I=null,U=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=X>=2);let te=null,he={},V=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),le=new Bt().fromArray(V),_e=new Bt().fromArray($);function ve(C,se,re,Re){let Se=new Uint8Array(4),dt=n.createTexture();n.bindTexture(C,dt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<re;ft++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(se+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return dt}let De={};De[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(n.DEPTH_TEST),c.setFunc(eo),ze(!1),S(nu),Ue(n.CULL_FACE),pe(Ni);function Ue(C){d[C]!==!0&&(n.enable(C),d[C]=!0)}function Te(C){d[C]!==!1&&(n.disable(C),d[C]=!1)}function Ke(C,se){return m[C]!==se?(n.bindFramebuffer(C,se),m[C]=se,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function O(C,se){let re=x,Re=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){let Se=C.texture;if(re.length!==Se.length||re[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,ft=Se.length;dt<ft;dt++)re[dt]=n.COLOR_ATTACHMENT0+dt;re.length=Se.length,Re=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,Re=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function jt(C){return f!==C?(n.useProgram(C),f=C,!0):!1}let Me={[ls]:n.FUNC_ADD,[mm]:n.FUNC_SUBTRACT,[gm]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[au]=n.MIN,Me[ou]=n.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(Me[au]=C.MIN_EXT,Me[ou]=C.MAX_EXT)}let Le={[xm]:n.ZERO,[vm]:n.ONE,[_m]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[Em]:n.SRC_ALPHA_SATURATE,[Sm]:n.DST_COLOR,[bm]:n.DST_ALPHA,[ym]:n.ONE_MINUS_SRC_COLOR,[jl]:n.ONE_MINUS_SRC_ALPHA,[wm]:n.ONE_MINUS_DST_COLOR,[Mm]:n.ONE_MINUS_DST_ALPHA,[Am]:n.CONSTANT_COLOR,[Tm]:n.ONE_MINUS_CONSTANT_COLOR,[Rm]:n.CONSTANT_ALPHA,[Cm]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(C,se,re,Re,Se,dt,ft,Dt,Kt,pt){if(C===Ni){p===!0&&(Te(n.BLEND),p=!1);return}if(p===!1&&(Ue(n.BLEND),p=!0),C!==pm){if(C!==M||pt!==N){if((v!==ls||E!==ls)&&(n.blendEquation(n.FUNC_ADD),v=ls,E=ls),pt)switch(C){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,R=null,T=null,B=null,y.set(0,0,0),w=0,M=C,N=pt}return}Se=Se||se,dt=dt||re,ft=ft||Re,(se!==v||Se!==E)&&(n.blendEquationSeparate(Me[se],Me[Se]),v=se,E=Se),(re!==A||Re!==R||dt!==T||ft!==B)&&(n.blendFuncSeparate(Le[re],Le[Re],Le[dt],Le[ft]),A=re,R=Re,T=dt,B=ft),(Dt.equals(y)===!1||Kt!==w)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Kt),y.copy(Dt),w=Kt),M=C,N=!1}function vt(C,se){C.side===ci?Te(n.CULL_FACE):Ue(n.CULL_FACE);let re=C.side===un;se&&(re=!re),ze(re),C.blending===Qs&&C.transparent===!1?pe(Ni):pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let Re=C.stencilWrite;l.setTest(Re),Re&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),k(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(C){W!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),W=C)}function S(C){C!==um?(Ue(n.CULL_FACE),C!==Q&&(C===nu?n.cullFace(n.BACK):C===dm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),Q=C}function _(C){C!==I&&(q&&n.lineWidth(C),I=C)}function k(C,se,re){C?(Ue(n.POLYGON_OFFSET_FILL),(U!==se||G!==re)&&(n.polygonOffset(se,re),U=se,G=re)):Te(n.POLYGON_OFFSET_FILL)}function K(C){C?Ue(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function J(C){C===void 0&&(C=n.TEXTURE0+Y-1),te!==C&&(n.activeTexture(C),te=C)}function ee(C,se,re){re===void 0&&(te===null?re=n.TEXTURE0+Y-1:re=te);let Re=he[re];Re===void 0&&(Re={type:void 0,texture:void 0},he[re]=Re),(Re.type!==C||Re.texture!==se)&&(te!==re&&(n.activeTexture(re),te=re),n.bindTexture(C,se||De[C]),Re.type=C,Re.texture=se)}function ge(){let C=he[te];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(C){le.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),le.copy(C))}function rt(C){_e.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function bt(C,se){let re=u.get(se);re===void 0&&(re=new WeakMap,u.set(se,re));let Re=re.get(C);Re===void 0&&(Re=n.getUniformBlockIndex(se,C.name),re.set(C,Re))}function Ve(C,se){let Re=u.get(se).get(C);h.get(se)!==Re&&(n.uniformBlockBinding(se,Re,C.__bindingPointIndex),h.set(se,Re))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,he={},m={},g=new WeakMap,x=[],f=null,p=!1,M=null,v=null,A=null,R=null,E=null,T=null,B=null,y=new nt(0,0,0),w=0,N=!1,W=null,Q=null,I=null,U=null,G=null,le.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ue,disable:Te,bindFramebuffer:Ke,drawBuffers:O,useProgram:jt,setBlending:pe,setMaterial:vt,setFlipSided:ze,setCullFace:S,setLineWidth:_,setPolygonOffset:k,setScissorTest:K,activeTexture:J,bindTexture:ee,unbindTexture:ge,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:be,texImage3D:de,updateUBOMapping:bt,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:Z,compressedTexSubImage3D:lt,scissor:Oe,viewport:rt,reset:ne}}function dy(n,e,t,i,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):lo("canvas")}function x(S,_,k,K){let J=1;if((S.width>K||S.height>K)&&(J=K/Math.max(S.width,S.height)),J<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ee=_?oo:Math.floor,ge=ee(J*S.width),ae=ee(J*S.height);u===void 0&&(u=g(ge,ae));let ue=k?g(ge,ae):u;return ue.width=ge,ue.height=ae,ue.getContext("2d").drawImage(S,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+ae+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return ic(S.width)&&ic(S.height)}function p(S){return a?!1:S.wrapS!==Un||S.wrapT!==Un||S.minFilter!==nn&&S.minFilter!==En}function M(S,_){return S.generateMipmaps&&_&&S.minFilter!==nn&&S.minFilter!==En}function v(S){n.generateMipmap(S)}function A(S,_,k,K,J=!1){if(a===!1)return _;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=_;if(_===n.RED&&(k===n.FLOAT&&(ee=n.R32F),k===n.HALF_FLOAT&&(ee=n.R16F),k===n.UNSIGNED_BYTE&&(ee=n.R8)),_===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.R8UI),k===n.UNSIGNED_SHORT&&(ee=n.R16UI),k===n.UNSIGNED_INT&&(ee=n.R32UI),k===n.BYTE&&(ee=n.R8I),k===n.SHORT&&(ee=n.R16I),k===n.INT&&(ee=n.R32I)),_===n.RG&&(k===n.FLOAT&&(ee=n.RG32F),k===n.HALF_FLOAT&&(ee=n.RG16F),k===n.UNSIGNED_BYTE&&(ee=n.RG8)),_===n.RGBA){let ge=J?io:ct.getTransfer(K);k===n.FLOAT&&(ee=n.RGBA32F),k===n.HALF_FLOAT&&(ee=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ee=ge===gt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(S,_,k){return M(S,k)===!0||S.isFramebufferTexture&&S.minFilter!==nn&&S.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function E(S){return S===nn||S===lu||S===_l?n.NEAREST:n.LINEAR}function T(S){let _=S.target;_.removeEventListener("dispose",T),y(_),_.isVideoTexture&&h.delete(_)}function B(S){let _=S.target;_.removeEventListener("dispose",B),N(_)}function y(S){let _=i.get(S);if(_.__webglInit===void 0)return;let k=S.source,K=d.get(k);if(K){let J=K[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(S),Object.keys(K).length===0&&d.delete(k)}i.remove(S)}function w(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let k=S.source,K=d.get(k);delete K[_.__cacheKey],o.memory.textures--}function N(S){let _=S.texture,k=i.get(S),K=i.get(_);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let ee=0;ee<k.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(k.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)n.deleteFramebuffer(k.__webglFramebuffer[J]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let J=0,ee=_.length;J<ee;J++){let ge=i.get(_[J]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(_[J])}i.remove(_),i.remove(S)}let W=0;function Q(){W=0}function I(){let S=W;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),W+=1,S}function U(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function G(S,_){let k=i.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(k,S,_);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+_)}function Y(S,_){let k=i.get(S);if(S.version>0&&k.__version!==S.version){le(k,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+_)}function q(S,_){let k=i.get(S);if(S.version>0&&k.__version!==S.version){le(k,S,_);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+_)}function X(S,_){let k=i.get(S);if(S.version>0&&k.__version!==S.version){_e(k,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+_)}let j={[ec]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},te={[nn]:n.NEAREST,[lu]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Xm]:n.LINEAR_MIPMAP_NEAREST,[Fr]:n.LINEAR_MIPMAP_LINEAR},he={[sg]:n.NEVER,[hg]:n.ALWAYS,[rg]:n.LESS,[Hd]:n.LEQUAL,[ag]:n.EQUAL,[cg]:n.GEQUAL,[og]:n.GREATER,[lg]:n.NOTEQUAL};function V(S,_,k){if(k?(n.texParameteri(S,n.TEXTURE_WRAP_S,j[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,j[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,j[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,te[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,te[_.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Un||_.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,E(_.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,E(_.minFilter)),_.minFilter!==nn&&_.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===nn||_.minFilter!==_l&&_.minFilter!==Fr||_.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===kr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function $(S,_){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",T));let K=_.source,J=d.get(K);J===void 0&&(J={},d.set(K,J));let ee=U(_);if(ee!==S.__cacheKey){J[ee]===void 0&&(J[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[ee].usedTimes++;let ge=J[S.__cacheKey];ge!==void 0&&(J[S.__cacheKey].usedTimes--,ge.usedTimes===0&&w(_)),S.__cacheKey=ee,S.__webglTexture=J[ee].texture}return k}function le(S,_,k){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);let J=$(S,_),ee=_.source;t.bindTexture(K,S.__webglTexture,n.TEXTURE0+k);let ge=i.get(ee);if(ee.version!==ge.__version||J===!0){t.activeTexture(n.TEXTURE0+k);let ae=ct.getPrimaries(ct.workingColorSpace),ue=_.colorSpace===An?null:ct.getPrimaries(_.colorSpace),Ae=_.colorSpace===An||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Be=p(_)&&f(_.image)===!1,Z=x(_.image,Be,!1,s.maxTextureSize);Z=ze(_,Z);let lt=f(Z)||a,qe=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),be=A(_.internalFormat,qe,Pe,_.colorSpace,_.isVideoTexture);V(K,_,lt);let de,Oe=_.mipmaps,rt=a&&_.isVideoTexture!==!0&&be!==zd,bt=ge.__version===void 0||J===!0,Ve=R(_,Z,lt);if(_.isDepthTexture)be=n.DEPTH_COMPONENT,a?_.type===Ii?be=n.DEPTH_COMPONENT32F:_.type===Li?be=n.DEPTH_COMPONENT24:_.type===us?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:_.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ds&&be===n.DEPTH_COMPONENT&&_.type!==Ic&&_.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Li,Pe=r.convert(_.type)),_.format===rr&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,_.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=us,Pe=r.convert(_.type))),bt&&(rt?t.texStorage2D(n.TEXTURE_2D,1,be,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,qe,Pe,null));else if(_.isDataTexture)if(Oe.length>0&&lt){rt&&bt&&t.texStorage2D(n.TEXTURE_2D,Ve,be,Oe[0].width,Oe[0].height);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],rt?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,qe,Pe,de.data):t.texImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,qe,Pe,de.data);_.generateMipmaps=!1}else rt?(bt&&t.texStorage2D(n.TEXTURE_2D,Ve,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,qe,Pe,Z.data)):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,qe,Pe,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){rt&&bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,be,Oe[0].width,Oe[0].height,Z.depth);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],_.format!==On?qe!==null?rt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,qe,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,Z.depth,qe,Pe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,de.width,de.height,Z.depth,0,qe,Pe,de.data)}else{rt&&bt&&t.texStorage2D(n.TEXTURE_2D,Ve,be,Oe[0].width,Oe[0].height);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],_.format!==On?qe!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,qe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,de.width,de.height,qe,Pe,de.data):t.texImage2D(n.TEXTURE_2D,ne,be,de.width,de.height,0,qe,Pe,de.data)}else if(_.isDataArrayTexture)rt?(bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,qe,Pe,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,qe,Pe,Z.data);else if(_.isData3DTexture)rt?(bt&&t.texStorage3D(n.TEXTURE_3D,Ve,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,qe,Pe,Z.data)):t.texImage3D(n.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,qe,Pe,Z.data);else if(_.isFramebufferTexture){if(bt)if(rt)t.texStorage2D(n.TEXTURE_2D,Ve,be,Z.width,Z.height);else{let ne=Z.width,C=Z.height;for(let se=0;se<Ve;se++)t.texImage2D(n.TEXTURE_2D,se,be,ne,C,0,qe,Pe,null),ne>>=1,C>>=1}}else if(Oe.length>0&&lt){rt&&bt&&t.texStorage2D(n.TEXTURE_2D,Ve,be,Oe[0].width,Oe[0].height);for(let ne=0,C=Oe.length;ne<C;ne++)de=Oe[ne],rt?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,qe,Pe,de):t.texImage2D(n.TEXTURE_2D,ne,be,qe,Pe,de);_.generateMipmaps=!1}else rt?(bt&&t.texStorage2D(n.TEXTURE_2D,Ve,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,Pe,Z)):t.texImage2D(n.TEXTURE_2D,0,be,qe,Pe,Z);M(_,lt)&&v(K),ge.__version=ee.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _e(S,_,k){if(_.image.length!==6)return;let K=$(S,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+k);let ee=i.get(J);if(J.version!==ee.__version||K===!0){t.activeTexture(n.TEXTURE0+k);let ge=ct.getPrimaries(ct.workingColorSpace),ae=_.colorSpace===An?null:ct.getPrimaries(_.colorSpace),ue=_.colorSpace===An||ge===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Be=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!Ae&&!Be?Z[ne]=x(_.image[ne],!1,!0,s.maxCubemapSize):Z[ne]=Be?_.image[ne].image:_.image[ne],Z[ne]=ze(_,Z[ne]);let lt=Z[0],qe=f(lt)||a,Pe=r.convert(_.format,_.colorSpace),be=r.convert(_.type),de=A(_.internalFormat,Pe,be,_.colorSpace),Oe=a&&_.isVideoTexture!==!0,rt=ee.__version===void 0||K===!0,bt=R(_,lt,qe);V(n.TEXTURE_CUBE_MAP,_,qe);let Ve;if(Ae){Oe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,de,lt.width,lt.height);for(let ne=0;ne<6;ne++){Ve=Z[ne].mipmaps;for(let C=0;C<Ve.length;C++){let se=Ve[C];_.format!==On?Pe!==null?Oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Pe,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Pe,be,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,de,se.width,se.height,0,Pe,be,se.data)}}}else{Ve=_.mipmaps,Oe&&rt&&(Ve.length>0&&bt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,bt,de,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(Be){Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,Pe,be,Z[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Z[ne].width,Z[ne].height,0,Pe,be,Z[ne].data);for(let C=0;C<Ve.length;C++){let re=Ve[C].image[ne].image;Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Pe,be,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,re.width,re.height,0,Pe,be,re.data)}}else{Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe,be,Z[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,de,Pe,be,Z[ne]);for(let C=0;C<Ve.length;C++){let se=Ve[C];Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Pe,be,se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,de,Pe,be,se.image[ne])}}}M(_,qe)&&v(n.TEXTURE_CUBE_MAP),ee.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ve(S,_,k,K,J,ee){let ge=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),ue=A(k.internalFormat,ge,ae,k.colorSpace);if(!i.get(_).__hasExternalTextures){let Be=Math.max(1,_.width>>ee),Z=Math.max(1,_.height>>ee);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,ue,Be,Z,_.depth,0,ge,ae,null):t.texImage2D(J,ee,ue,Be,Z,0,ge,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),pe(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(k).__webglTexture,0,Le(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(k).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(S,_,k){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||pe(_)){let J=_.depthTexture;J&&J.isDepthTexture&&(J.type===Ii?K=n.DEPTH_COMPONENT32F:J.type===Li&&(K=n.DEPTH_COMPONENT24));let ee=Le(_);pe(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,K,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,K,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let K=Le(_);k&&pe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,_.width,_.height):pe(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let K=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let J=0;J<K.length;J++){let ee=K[J],ge=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),ue=A(ee.internalFormat,ge,ae,ee.colorSpace),Ae=Le(_);k&&pe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ue,_.width,_.height):pe(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);let K=i.get(_.depthTexture).__webglTexture,J=Le(_);if(_.depthTexture.format===ds)pe(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===rr)pe(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Te(S){let _=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(_.__webglFramebuffer,S)}else if(k){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]=n.createRenderbuffer(),De(_.__webglDepthbuffer[K],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),De(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(S,_,k){let K=i.get(S);_!==void 0&&ve(K.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Te(S)}function O(S){let _=S.texture,k=i.get(S),K=i.get(_);S.addEventListener("dispose",B),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,o.memory.textures++);let J=S.isWebGLCubeRenderTarget===!0,ee=S.isWebGLMultipleRenderTargets===!0,ge=f(S)||a;if(J){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let ue=0;ue<_.mipmaps.length;ue++)k.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){let ae=S.texture;for(let ue=0,Ae=ae.length;ue<Ae;ue++){let Be=i.get(ae[ue]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&pe(S)===!1){let ae=ee?_:[_];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){let Ae=ae[ue];k.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);let Be=r.convert(Ae.format,Ae.colorSpace),Z=r.convert(Ae.type),lt=A(Ae.internalFormat,Be,Z,Ae.colorSpace,S.isXRRenderTarget===!0),qe=Le(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,lt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),De(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),V(n.TEXTURE_CUBE_MAP,_,ge);for(let ae=0;ae<6;ae++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)ve(k.__webglFramebuffer[ae][ue],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ve(k.__webglFramebuffer[ae],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(_,ge)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=S.texture;for(let ue=0,Ae=ae.length;ue<Ae;ue++){let Be=ae[ue],Z=i.get(Be);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),V(n.TEXTURE_2D,Be,ge),ve(k.__webglFramebuffer,S,Be,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),M(Be,ge)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,K.__webglTexture),V(ae,_,ge),a&&_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)ve(k.__webglFramebuffer[ue],S,_,n.COLOR_ATTACHMENT0,ae,ue);else ve(k.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ae,0);M(_,ge)&&v(ae),t.unbindTexture()}S.depthBuffer&&Te(S)}function jt(S){let _=f(S)||a,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,J=k.length;K<J;K++){let ee=k[K];if(M(ee,_)){let ge=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ee).__webglTexture;t.bindTexture(ge,ae),v(ge),t.unbindTexture()}}}function Me(S){if(a&&S.samples>0&&pe(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],k=S.width,K=S.height,J=n.COLOR_BUFFER_BIT,ee=[],ge=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(S),ue=S.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){ee.push(n.COLOR_ATTACHMENT0+Ae),S.depthBuffer&&ee.push(ge);let Be=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Be===!1&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),ue){let Z=i.get(_[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);let Be=i.get(_[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Le(S){return Math.min(s.maxSamples,S.samples)}function pe(S){let _=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function vt(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ze(S,_){let k=S.colorSpace,K=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===nc||k!==ui&&k!==An&&(ct.getTransfer(k)===gt?a===!1?e.has("EXT_sRGB")===!0&&K===On?(S.format=nc,S.minFilter=En,S.generateMipmaps=!1):_=co.sRGBToLinear(_):(K!==On||J!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Ke,this.setupRenderTarget=O,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe}function fy(n,e,t){let i=t.isWebGL2;function s(r,o=An){let a,c=ct.getTransfer(o);if(r===Oi)return n.UNSIGNED_BYTE;if(r===Nd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ud)return n.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return n.BYTE;if(r===Ym)return n.SHORT;if(r===Ic)return n.UNSIGNED_SHORT;if(r===Dd)return n.INT;if(r===Li)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===kr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$m)return n.ALPHA;if(r===On)return n.RGBA;if(r===Zm)return n.LUMINANCE;if(r===Jm)return n.LUMINANCE_ALPHA;if(r===ds)return n.DEPTH_COMPONENT;if(r===rr)return n.DEPTH_STENCIL;if(r===nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jm)return n.RED;if(r===Od)return n.RED_INTEGER;if(r===Km)return n.RG;if(r===Fd)return n.RG_INTEGER;if(r===kd)return n.RGBA_INTEGER;if(r===yl||r===bl||r===Ml||r===Sl)if(c===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cu||r===hu||r===uu||r===du)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===du)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fu||r===pu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fu)return c===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mu||r===gu||r===xu||r===vu||r===_u||r===yu||r===bu||r===Mu||r===Su||r===wu||r===Eu||r===Au||r===Tu||r===Ru)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===mu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_u)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Su)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Au)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tu)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ru)return c===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wl||r===Cu||r===Pu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===wl)return c===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qm||r===Lu||r===Iu||r===Du)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===wl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Iu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Du)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===us?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var xc=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Di=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,i),p=this._getHandJoint(l,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},vc=class extends ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,x=t.getContextAttributes(),f=null,p=null,M=[],v=[],A=new $e,R=null,E=new rn;E.layers.enable(1),E.viewport=new Bt;let T=new rn;T.layers.enable(2),T.viewport=new Bt;let B=[E,T],y=new xc;y.layers.enable(1),y.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=M[V];return $===void 0&&($=new Or,M[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=M[V];return $===void 0&&($=new Or,M[V]=$),$.getGripSpace()},this.getHand=function(V){let $=M[V];return $===void 0&&($=new Or,M[V]=$),$.getHandSpace()};function W(V){let $=v.indexOf(V.inputSource);if($===-1)return;let le=M[$];le!==void 0&&(le.update(V.inputSource,V.frame,l||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",I);for(let V=0;V<M.length;V++){let $=v[V];$!==null&&(v[V]=null,M[V].disconnect($))}w=null,N=null,e.setRenderTarget(f),m=null,d=null,u=null,s=null,p=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new di(m.framebufferWidth,m.framebufferHeight,{format:On,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,le=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=x.stencil?rr:ds,le=x.stencil?us:Li);let ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new di(d.textureWidth,d.textureHeight,{format:On,type:Oi,depthTexture:new _o(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(V){for(let $=0;$<V.removed.length;$++){let le=V.removed[$],_e=v.indexOf(le);_e>=0&&(v[_e]=null,M[_e].disconnect(le))}for(let $=0;$<V.added.length;$++){let le=V.added[$],_e=v.indexOf(le);if(_e===-1){for(let De=0;De<M.length;De++)if(De>=v.length){v.push(le),_e=De;break}else if(v[De]===null){v[De]=le,_e=De;break}if(_e===-1)break}let ve=M[_e];ve&&ve.connect(le)}}let U=new P,G=new P;function Y(V,$,le){U.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(le.matrixWorld);let _e=U.distanceTo(G),ve=$.projectionMatrix.elements,De=le.projectionMatrix.elements,Ue=ve[14]/(ve[10]-1),Te=ve[14]/(ve[10]+1),Ke=(ve[9]+1)/ve[5],O=(ve[9]-1)/ve[5],jt=(ve[8]-1)/ve[0],Me=(De[8]+1)/De[0],Le=Ue*jt,pe=Ue*Me,vt=_e/(-jt+Me),ze=vt*-jt;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(vt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let S=Ue+vt,_=Te+vt,k=Le-ze,K=pe+(_e-ze),J=Ke*Te/_*S,ee=O*Te/_*S;V.projectionMatrix.makePerspective(k,K,J,ee,S,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=T.near=E.near=V.near,y.far=T.far=E.far=V.far,(w!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,N=y.far);let $=V.parent,le=y.cameras;q(y,$);for(let _e=0;_e<le.length;_e++)q(le[_e],$);le.length===2?Y(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),X(V,y,$)};function X(V,$,le){le===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=zr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let j=null;function te(V,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let _e=!1;le.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let ve=0;ve<le.length;ve++){let De=le[ve],Ue=null;if(m!==null)Ue=m.getViewport(De);else{let Ke=u.getViewSubImage(d,De);Ue=Ke.viewport,ve===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Te=B[ve];Te===void 0&&(Te=new rn,Te.layers.enable(ve),Te.viewport=new Bt,B[ve]=Te),Te.matrix.fromArray(De.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(De.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ve===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Te)}}for(let le=0;le<M.length;le++){let _e=v[le],ve=M[le];_e!==null&&ve!==void 0&&ve.update(_e,$,l||o)}j&&j(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let he=new qd;he.setAnimationLoop(te),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}};function my(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Xd(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,M,v,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,A)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,M,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===un&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===un&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,M,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=v*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){let M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gy(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){let A=v.program;i.uniformBlockBinding(M,A)}function l(M,v){let A=s[M.id];A===void 0&&(g(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",f));let R=v.program;i.updateUBOMapping(M,R);let E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let v=u();M.__bindingPointIndex=v;let A=n.createBuffer(),R=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,A),A}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=s[M.id],A=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=A.length;E<T;E++){let B=Array.isArray(A[E])?A[E]:[A[E]];for(let y=0,w=B.length;y<w;y++){let N=B[y];if(m(N,E,y,R)===!0){let W=N.__offset,Q=Array.isArray(N.value)?N.value:[N.value],I=0;for(let U=0;U<Q.length;U++){let G=Q[U],Y=x(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,W+I,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,v,A,R){let E=M.value,T=v+"_"+A;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{let B=R[T];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return R[T]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function g(M){let v=M.uniforms,A=0,R=16;for(let T=0,B=v.length;T<B;T++){let y=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,N=y.length;w<N;w++){let W=y[w],Q=Array.isArray(W.value)?W.value:[W.value];for(let I=0,U=Q.length;I<U;I++){let G=Q[I],Y=x(G),q=A%R;q!==0&&R-q<Y.boundary&&(A+=R-q),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=Y.storage}}}let E=A%R;return E>0&&(A+=R-E),M.__size=A,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){let v=M.target;v.removeEventListener("dispose",f);let A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Vr=class{constructor(e={}){let{canvas:t=Eg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,f=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;let v=this,A=!1,R=0,E=0,T=null,B=-1,y=null,w=new Bt,N=new Bt,W=null,Q=new nt(0),I=0,U=t.width,G=t.height,Y=1,q=null,X=null,j=new Bt(0,0,U,G),te=new Bt(0,0,U,G),he=!1,V=new xo,$=!1,le=!1,_e=null,ve=new tt,De=new $e,Ue=new P,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return T===null?Y:1}let O=i;function jt(b,D){for(let z=0;z<b.length;z++){let H=b[z],F=t.getContext(H,D);if(F!==null)return F}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),O===null){let D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),O=jt(D,b),O===null)throw jt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,Le,pe,vt,ze,S,_,k,K,J,ee,ge,ae,ue,Ae,Be,Z,lt,qe,Pe,be,de,Oe,rt;function bt(){Me=new Uv(O),Le=new Cv(O,Me,e),Me.init(Le),de=new fy(O,Me,Le),pe=new uy(O,Me,Le),vt=new kv(O),ze=new Q_,S=new dy(O,Me,pe,ze,Le,de,vt),_=new Lv(v),k=new Nv(v),K=new qg(O,Le),Oe=new Tv(O,Me,K,Le),J=new Ov(O,K,vt,Oe),ee=new Vv(O,J,K,vt),qe=new Hv(O,Le,S),Be=new Pv(ze),ge=new K_(v,_,k,Me,Le,Oe,Be),ae=new my(v,ze),ue=new ty,Ae=new oy(Me,Le),lt=new Av(v,_,k,pe,ee,d,c),Z=new hy(v,ee,Le),rt=new gy(O,vt,Le,pe),Pe=new Rv(O,Me,vt,Le),be=new Fv(O,Me,vt,Le),vt.programs=ge.programs,v.capabilities=Le,v.extensions=Me,v.properties=ze,v.renderLists=ue,v.shadowMap=Z,v.state=pe,v.info=vt}bt();let Ve=new vc(v,O);this.xr=Ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(U,G,!1))},this.getSize=function(b){return b.set(U,G)},this.setSize=function(b,D,z=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,G=D,t.width=Math.floor(b*Y),t.height=Math.floor(D*Y),z===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(U*Y,G*Y).floor()},this.setDrawingBufferSize=function(b,D,z){U=b,G=D,Y=z,t.width=Math.floor(b*z),t.height=Math.floor(D*z),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,D,z,H){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,D,z,H),pe.viewport(w.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,D,z,H){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,D,z,H),pe.scissor(N.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){pe.setScissorTest(he=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(b=!0,D=!0,z=!0){let H=0;if(b){let F=!1;if(T!==null){let ce=T.texture.format;F=ce===kd||ce===Fd||ce===Od}if(F){let ce=T.texture.type,xe=ce===Oi||ce===Li||ce===Ic||ce===us||ce===Nd||ce===Ud,Ee=lt.getClearColor(),Ce=lt.getClearAlpha(),He=Ee.r,Ie=Ee.g,Ne=Ee.b;xe?(m[0]=He,m[1]=Ie,m[2]=Ne,m[3]=Ce,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=He,g[1]=Ie,g[2]=Ne,g[3]=Ce,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}D&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),Ae.dispose(),ze.dispose(),_.dispose(),k.dispose(),ee.dispose(),Oe.dispose(),rt.dispose(),ge.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Kt),Ve.removeEventListener("sessionend",pt),_e&&(_e.dispose(),_e=null),Qt.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=vt.autoReset,D=Z.enabled,z=Z.autoUpdate,H=Z.needsUpdate,F=Z.type;bt(),vt.autoReset=b,Z.enabled=D,Z.autoUpdate=z,Z.needsUpdate=H,Z.type=F}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){let D=b.target;D.removeEventListener("dispose",re),Re(D)}function Re(b){Se(b),ze.remove(b)}function Se(b){let D=ze.get(b).programs;D!==void 0&&(D.forEach(function(z){ge.releaseProgram(z)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,z,H,F,ce){D===null&&(D=Te);let xe=F.isMesh&&F.matrixWorld.determinant()<0,Ee=om(b,D,z,H,F);pe.setMaterial(H,xe);let Ce=z.index,He=1;if(H.wireframe===!0){if(Ce=J.getWireframeAttribute(z),Ce===void 0)return;He=2}let Ie=z.drawRange,Ne=z.attributes.position,Et=Ie.start*He,gn=(Ie.start+Ie.count)*He;ce!==null&&(Et=Math.max(Et,ce.start*He),gn=Math.min(gn,(ce.start+ce.count)*He)),Ce!==null?(Et=Math.max(Et,0),gn=Math.min(gn,Ce.count)):Ne!=null&&(Et=Math.max(Et,0),gn=Math.min(gn,Ne.count));let Nt=gn-Et;if(Nt<0||Nt===1/0)return;Oe.setup(F,H,Ee,z,Ce);let ni,_t=Pe;if(Ce!==null&&(ni=K.get(Ce),_t=be,_t.setIndex(ni)),F.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*Ke()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(F.isLine){let Ge=H.linewidth;Ge===void 0&&(Ge=1),pe.setLineWidth(Ge*Ke()),F.isLineSegments?_t.setMode(O.LINES):F.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else F.isPoints?_t.setMode(O.POINTS):F.isSprite&&_t.setMode(O.TRIANGLES);if(F.isBatchedMesh)_t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)_t.renderInstances(Et,Nt,F.count);else if(z.isInstancedBufferGeometry){let Ge=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ml=Math.min(z.instanceCount,Ge);_t.renderInstances(Et,Nt,ml)}else _t.render(Et,Nt)};function dt(b,D,z){b.transparent===!0&&b.side===ci&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Aa(b,D,z),b.side=Fi,b.needsUpdate=!0,Aa(b,D,z),b.side=ci):Aa(b,D,z)}this.compile=function(b,D,z=null){z===null&&(z=b),f=Ae.get(z),f.init(),M.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==z&&b.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(v._useLegacyLights);let H=new Set;return b.traverse(function(F){let ce=F.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){let Ee=ce[xe];dt(Ee,z,F),H.add(Ee)}else dt(ce,z,F),H.add(ce)}),M.pop(),f=null,H},this.compileAsync=function(b,D,z=null){let H=this.compile(b,D,z);return new Promise(F=>{function ce(){if(H.forEach(function(xe){ze.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){F(b);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ft=null;function Dt(b){ft&&ft(b)}function Kt(){Qt.stop()}function pt(){Qt.start()}let Qt=new qd;Qt.setAnimationLoop(Dt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(b){ft=b,Ve.setAnimationLoop(b),b===null?Qt.stop():Qt.start()},Ve.addEventListener("sessionstart",Kt),Ve.addEventListener("sessionend",pt),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(D),D=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,T),f=Ae.get(b,M.length),f.init(),M.push(f),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(ve),le=this.localClippingEnabled,$=Be.init(this.clippingPlanes,le),x=ue.get(b,p.length),x.init(),p.push(x),Xn(b,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(q,X),this.info.render.frame++,$===!0&&Be.beginShadows();let z=f.state.shadowsArray;if(Z.render(z,b,D),$===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(x,b),f.setupLights(v._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let F=0,ce=H.length;F<ce;F++){let xe=H[F];Jh(x,b,xe,xe.viewport)}}else Jh(x,b,D);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,D),Oe.resetDefaultState(),B=-1,y=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Xn(b,D,z,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){H&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);let xe=ee.update(b),Ee=b.material;Ee.visible&&x.push(b,xe,Ee,z,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){let xe=ee.update(b),Ee=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Ee)){let Ce=xe.groups;for(let He=0,Ie=Ce.length;He<Ie;He++){let Ne=Ce[He],Et=Ee[Ne.materialIndex];Et&&Et.visible&&x.push(b,xe,Et,z,Ue.z,Ne)}}else Ee.visible&&x.push(b,xe,Ee,z,Ue.z,null)}}let ce=b.children;for(let xe=0,Ee=ce.length;xe<Ee;xe++)Xn(ce[xe],D,z,H)}function Jh(b,D,z,H){let F=b.opaque,ce=b.transmissive,xe=b.transparent;f.setupLightsView(z),$===!0&&Be.setGlobalState(v.clippingPlanes,z),ce.length>0&&am(F,ce,D,z),H&&pe.viewport(w.copy(H)),F.length>0&&Ea(F,D,z),ce.length>0&&Ea(ce,D,z),xe.length>0&&Ea(xe,D,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function am(b,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ce=Le.isWebGL2;_e===null&&(_e=new di(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?kr:Oi,minFilter:Fr,samples:ce?4:0})),v.getDrawingBufferSize(De),ce?_e.setSize(De.x,De.y):_e.setSize(oo(De.x),oo(De.y));let xe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let Ee=v.toneMapping;v.toneMapping=Ui,Ea(b,z,H),S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e);let Ce=!1;for(let He=0,Ie=D.length;He<Ie;He++){let Ne=D[He],Et=Ne.object,gn=Ne.geometry,Nt=Ne.material,ni=Ne.group;if(Nt.side===ci&&Et.layers.test(H.layers)){let _t=Nt.side;Nt.side=un,Nt.needsUpdate=!0,jh(Et,z,H,gn,Nt,ni),Nt.side=_t,Nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(S.updateMultisampleRenderTarget(_e),S.updateRenderTargetMipmap(_e)),v.setRenderTarget(xe),v.setClearColor(Q,I),v.toneMapping=Ee}function Ea(b,D,z){let H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ce=b.length;F<ce;F++){let xe=b[F],Ee=xe.object,Ce=xe.geometry,He=H===null?xe.material:H,Ie=xe.group;Ee.layers.test(z.layers)&&jh(Ee,D,z,Ce,He,Ie)}}function jh(b,D,z,H,F,ce){b.onBeforeRender(v,D,z,H,F,ce),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,D,z,H,b,ce),F.transparent===!0&&F.side===ci&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,v.renderBufferDirect(z,D,H,F,b,ce),F.side=Fi,F.needsUpdate=!0,v.renderBufferDirect(z,D,H,F,b,ce),F.side=ci):v.renderBufferDirect(z,D,H,F,b,ce),b.onAfterRender(v,D,z,H,F,ce)}function Aa(b,D,z){D.isScene!==!0&&(D=Te);let H=ze.get(b),F=f.state.lights,ce=f.state.shadowsArray,xe=F.state.version,Ee=ge.getParameters(b,F.state,ce,D,z),Ce=ge.getProgramCacheKey(Ee),He=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?k:_).get(b.envMap||H.environment),He===void 0&&(b.addEventListener("dispose",re),He=new Map,H.programs=He);let Ie=He.get(Ce);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===xe)return Qh(b,Ee),Ie}else Ee.uniforms=ge.getUniforms(b),b.onBuild(z,Ee,v),b.onBeforeCompile(Ee,v),Ie=ge.acquireProgram(Ee,Ce),He.set(Ce,Ie),H.uniforms=Ee.uniforms;let Ne=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=Be.uniform),Qh(b,Ee),H.needsLights=cm(b),H.lightsStateVersion=xe,H.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Kh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=nr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Qh(b,D){let z=ze.get(b);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function om(b,D,z,H,F){D.isScene!==!0&&(D=Te),S.resetTextureUnits();let ce=D.fog,xe=H.isMeshStandardMaterial?D.environment:null,Ee=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ui,Ce=(H.isMeshStandardMaterial?k:_).get(H.envMap||xe),He=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!z.morphAttributes.position,Et=!!z.morphAttributes.normal,gn=!!z.morphAttributes.color,Nt=Ui;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=v.toneMapping);let ni=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_t=ni!==void 0?ni.length:0,Ge=ze.get(H),ml=f.state.lights;if($===!0&&(le===!0||b!==y)){let Sn=b===y&&H.id===B;Be.setState(H,b,Sn)}let Mt=!1;H.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ml.state.version||Ge.outputColorSpace!==Ee||F.isBatchedMesh&&Ge.batching===!1||!F.isBatchedMesh&&Ge.batching===!0||F.isInstancedMesh&&Ge.instancing===!1||!F.isInstancedMesh&&Ge.instancing===!0||F.isSkinnedMesh&&Ge.skinning===!1||!F.isSkinnedMesh&&Ge.skinning===!0||F.isInstancedMesh&&Ge.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ge.instancingColor===!1&&F.instanceColor!==null||Ge.envMap!==Ce||H.fog===!0&&Ge.fog!==ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ie||Ge.morphTargets!==Ne||Ge.morphNormals!==Et||Ge.morphColors!==gn||Ge.toneMapping!==Nt||Le.isWebGL2===!0&&Ge.morphTargetsCount!==_t)&&(Mt=!0):(Mt=!0,Ge.__version=H.version);let ts=Ge.currentProgram;Mt===!0&&(ts=Aa(H,D,F));let eu=!1,Cr=!1,gl=!1,Gt=ts.getUniforms(),ns=Ge.uniforms;if(pe.useProgram(ts.program)&&(eu=!0,Cr=!0,gl=!0),H.id!==B&&(B=H.id,Cr=!0),eu||y!==b){Gt.setValue(O,"projectionMatrix",b.projectionMatrix),Gt.setValue(O,"viewMatrix",b.matrixWorldInverse);let Sn=Gt.map.cameraPosition;Sn!==void 0&&Sn.setValue(O,Ue.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Cr=!0,gl=!0)}if(F.isSkinnedMesh){Gt.setOptional(O,F,"bindMatrix"),Gt.setOptional(O,F,"bindMatrixInverse");let Sn=F.skeleton;Sn&&(Le.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Gt.setValue(O,"boneTexture",Sn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Gt.setOptional(O,F,"batchingTexture"),Gt.setValue(O,"batchingTexture",F._matricesTexture,S));let xl=z.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&Le.isWebGL2===!0)&&qe.update(F,z,ts),(Cr||Ge.receiveShadow!==F.receiveShadow)&&(Ge.receiveShadow=F.receiveShadow,Gt.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ns.envMap.value=Ce,ns.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Cr&&(Gt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&lm(ns,gl),ce&&H.fog===!0&&ae.refreshFogUniforms(ns,ce),ae.refreshMaterialUniforms(ns,H,Y,G,_e),nr.upload(O,Kh(Ge),ns,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(nr.upload(O,Kh(Ge),ns,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Gt.setValue(O,"center",F.center),Gt.setValue(O,"modelViewMatrix",F.modelViewMatrix),Gt.setValue(O,"normalMatrix",F.normalMatrix),Gt.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Sn=H.uniformsGroups;for(let vl=0,hm=Sn.length;vl<hm;vl++)if(Le.isWebGL2){let tu=Sn[vl];rt.update(tu,ts),rt.bind(tu,ts)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ts}function lm(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function cm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,D,z){ze.get(b.texture).__webglTexture=D,ze.get(b.depthTexture).__webglTexture=z;let H=ze.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let z=ze.get(b);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,z=0){T=b,R=D,E=z;let H=!0,F=null,ce=!1,xe=!1;if(b){let Ce=ze.get(b);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Ce.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ce.__hasExternalTextures&&S.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);let He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(xe=!0);let Ie=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?F=Ie[D][z]:F=Ie[D],ce=!0):Le.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?F=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[z]:F=Ie,w.copy(b.viewport),N.copy(b.scissor),W=b.scissorTest}else w.copy(j).multiplyScalar(Y).floor(),N.copy(te).multiplyScalar(Y).floor(),W=he;if(pe.bindFramebuffer(O.FRAMEBUFFER,F)&&Le.drawBuffers&&H&&pe.drawBuffers(b,F),pe.viewport(w),pe.scissor(N),pe.setScissorTest(W),ce){let Ce=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,z)}else if(xe){let Ce=ze.get(b.texture),He=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,z||0,He)}B=-1},this.readRenderTargetPixels=function(b,D,z,H,F,ce,xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){pe.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Ce=b.texture,He=Ce.format,Ie=Ce.type;if(He!==On&&de.convert(He)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=Ie===kr&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==Oi&&de.convert(Ie)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Ii&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&z>=0&&z<=b.height-F&&O.readPixels(D,z,H,F,de.convert(He),de.convert(Ie),ce)}finally{let Ce=T!==null?ze.get(T).__webglFramebuffer:null;pe.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,D,z=0){let H=Math.pow(2,-z),F=Math.floor(D.image.width*H),ce=Math.floor(D.image.height*H);S.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,b.x,b.y,F,ce),pe.unbindTexture()},this.copyTextureToTexture=function(b,D,z,H=0){let F=D.image.width,ce=D.image.height,xe=de.convert(z.format),Ee=de.convert(z.type);S.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,b.x,b.y,F,ce,xe,Ee,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,b.x,b.y,xe,Ee,D.image),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,D,z,H,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=b.max.x-b.min.x+1,xe=b.max.y-b.min.y+1,Ee=b.max.z-b.min.z+1,Ce=de.convert(H.format),He=de.convert(H.type),Ie;if(H.isData3DTexture)S.setTexture3D(H,0),Ie=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Ie=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Ne=O.getParameter(O.UNPACK_ROW_LENGTH),Et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=O.getParameter(O.UNPACK_SKIP_PIXELS),Nt=O.getParameter(O.UNPACK_SKIP_ROWS),ni=O.getParameter(O.UNPACK_SKIP_IMAGES),_t=z.isCompressedTexture?z.mipmaps[F]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Ie,F,D.x,D.y,D.z,ce,xe,Ee,Ce,He,_t.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ie,F,D.x,D.y,D.z,ce,xe,Ee,Ce,_t.data)):O.texSubImage3D(Ie,F,D.x,D.y,D.z,ce,xe,Ee,Ce,He,_t),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ni),F===0&&H.generateMipmaps&&O.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,pe.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Dc?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?fs:Bd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?zt:ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},_c=class extends Vr{};_c.prototype.isWebGL1Renderer=!0;var yo=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Gr=class extends ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wd=new P,Ed=new P,Ad=new tt,$l=new Br,Za=new ar,yc=class extends dn{constructor(e=new zn,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wd.fromBufferAttribute(t,s-1),Ed.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wd.distanceTo(Ed);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;Ad.copy(s).invert(),$l.copy(e.ray).applyMatrix4(Ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=p,A=M-1;v<A;v+=m){let R=g.getX(v),E=g.getX(v+1);if(l.fromBufferAttribute(f,R),h.fromBufferAttribute(f,E),$l.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),M=Math.min(f.count,o.start+o.count);for(let v=p,A=M-1;v<A;v+=m){if(l.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),$l.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Td=new P,Rd=new P,bo=class extends yc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Td.fromBufferAttribute(t,s),Rd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Td.distanceTo(Rd);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wr=class n extends zn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,x=[],f=i/2,p=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(m,2));function M(){let A=new P,R=new P,E=0,T=(t-e)/i;for(let B=0;B<=r;B++){let y=[],w=B/r,N=w*(t-e)+e;for(let W=0;W<=s;W++){let Q=W/s,I=Q*c+a,U=Math.sin(I),G=Math.cos(I);R.x=N*U,R.y=-w*i+f,R.z=N*G,u.push(R.x,R.y,R.z),A.set(U,T,G).normalize(),d.push(A.x,A.y,A.z),m.push(Q,1-w),y.push(g++)}x.push(y)}for(let B=0;B<s;B++)for(let y=0;y<r;y++){let w=x[y][B],N=x[y+1][B],W=x[y+1][B+1],Q=x[y][B+1];h.push(w,N,Q),h.push(N,W,Q),E+=6}l.addGroup(p,E,0),p+=E}function v(A){let R=g,E=new $e,T=new P,B=0,y=A===!0?e:t,w=A===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,f*w,0),d.push(0,w,0),m.push(.5,.5),g++;let N=g;for(let W=0;W<=s;W++){let I=W/s*c+a,U=Math.cos(I),G=Math.sin(I);T.x=y*G,T.y=f*w,T.z=y*U,u.push(T.x,T.y,T.z),d.push(0,w,0),E.x=U*.5+.5,E.y=G*.5*w+.5,m.push(E.x,E.y),g++}for(let W=0;W<s;W++){let Q=R+W,I=N+W;A===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),B+=3}l.addGroup(p,B,A===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class n extends Wr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ja=new P,ja=new P,Zl=new P,Ka=new hs,So=class extends zn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(er*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:f,c:p}=Ka;if(x.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ka.getNormal(Zl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let v=(M+1)%3,A=u[M],R=u[v],E=Ka[h[M]],T=Ka[h[v]],B=`${A}_${R}`,y=`${R}_${A}`;y in d&&d[y]?(Zl.dot(d[y].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(T.x,T.y,T.z)),d[y]=null):B in d||(d[B]={index0:l[M],index1:l[v],normal:Zl.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:f}=d[g];Ja.fromBufferAttribute(a,x),ja.fromBufferAttribute(a,f),m.push(Ja.x,Ja.y,Ja.z),m.push(ja.x,ja.y,ja.z)}this.setAttribute("position",new Ot(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var wo=class n extends zn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,m=[],g=[],x=[],f=[];for(let p=0;p<=i;p++){let M=[],v=p/i,A=0;p===0&&o===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(E+A,1-v),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let v=h[p][M+1],A=h[p][M],R=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&m.push(v,A,E),(p!==i-1||c<Math.PI)&&m.push(A,R,E)}this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Qa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var lr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bc=class extends lr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nu,endingEnd:Nu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:r=e,a=2*t-i;break;case Ou:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Uu:o=e,c=2*i-t;break;case Ou:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,f=x*g,p=-d*f+2*d*x-d*g,M=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*f+(1.5+m)*x+.5*g,A=m*f-m*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+M*o[l+R]+v*o[c+R]+A*o[u+R];return r}},Mc=class extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Sc=class extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&xy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=no;var gs=class extends Bn{};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=to;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends Bn{};wc.prototype.ValueTypeName="color";var Ec=class extends Bn{};Ec.prototype.ValueTypeName="number";var Ac=class extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xr=class extends Bn{InterpolantFactoryMethodLinear(e){return new Ac(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=no;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Bn{};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=to;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends Bn{};Tc.prototype.ValueTypeName="vector";var Rc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},vy=new Rc,Cc=class{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oc="\\[\\]\\.:\\/",_y=new RegExp("["+Oc+"]","g"),Fc="[^"+Oc+"]",yy="[^"+Oc.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",Fc),My=/(WCOD+)?/.source.replace("WCOD",yy),Sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),wy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Ey=new RegExp("^"+by+My+Sy+wy+"$"),Ay=["material","materials","bones","map"],Pc=class{constructor(e,t,i){let s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(e){let t=Ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ay.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Pc;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VM=new Float32Array(1);var Bi=class{constructor(e,t,i=0,s=1/0){this.ray=new Br(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Lc(e,this,i,t),i.sort(Cd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lc(e[s],this,i,t);return i.sort(Cd),i}};function Cd(n,e){return n.distance-e.distance}function Lc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Lc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var fn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function Kd(n){if(n.comfortVersion===fn.version)return n;let e={...n,comfortVersion:fn.version,winDist:fn.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=fn.windowScale),e}function Ty(n,e){return n>0&&e>0?n/e:16/9}function qr(n,e,t){let i=Ty(n,e),s=t>0?t:i,r,o;s>=i?(r=n,o=n/s):(o=e,r=e*s);let a=Math.round((n-r)/2),c=Math.round((e-o)/2),l=Math.round(r),h=Math.round(o);return{x:a,y:c,w:l,h,u0:a/n,v0:c/e,uw:l/n,vh:h/e}}function kc(n,e,t,i,s){let r=qr(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var Ry=4096,Co={width:1200,height:800},ur=160;function Cy(n,e=Ry){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(t)+ur*2,a=Math.ceil(i)+ur*2,c=s==="window"?r%3*1360:0,l=s==="dock"?800:s==="keyboard"?3160:1200+Math.floor(r/3)*980,h=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"?1360:e)||a>h||c+o>e||l+a>e)throw new Error("Workspace texture is full; close a window first.");return[c,l,o,a]})}var Po=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var h;e.updateMatrixWorld(!0);let t=[];e.traverse(u=>{u.isCSS3DObject&&u.visible&&t.push(u)});for(let u of t)u.element.parentNode!==this.domElement&&this.domElement.append(u.element),u.element.style.transform="none";for(let u of this.slots.keys())t.some(d=>d.id===u)||this.slots.delete(u);let i=t.map(u=>{let d=u.element.classList.contains("dock")?"dock":u.element.classList.contains("kb")?"keyboard":"window";if(d==="window"&&!this.slots.has(u.id)){let m=new Set(this.slots.values()),g=0;for(;m.has(g);)g++;this.slots.set(u.id,g)}return{width:u.element.offsetWidth,height:u.element.offsetHeight,kind:d,slot:this.slots.get(u.id)||0}}),s;try{s=Cy(i)}catch(u){this.lastError!==u.message&&(this.lastError=u.message,(h=window.nextvrMessage)==null||h.call(window,u.message));return}let r=[],o=[];t.forEach((u,d)=>{let m=u.element,[g,x,f,p]=s[d];m.style.left=`${g+ur}px`,m.style.top=`${x+ur}px`;let M=u.matrixWorld.clone().multiply(new tt().makeScale(f,p,1)),v=+(m.dataset.curve||0);r.push({id:m.dataset.windowId||(i[d].kind==="dock"?"dock":i[d].kind),matrix:M.toArray(),rect:s[d],curve:v,glass:[ur/f,ur/p,i[d].width/f,i[d].height/p]});let A=m.getBoundingClientRect();for(let R of m.querySelectorAll("[data-native-app]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=+(R.dataset.aspect||0),B=qr(E.width,E.height,T),y=u.matrixWorld.clone().multiply(new tt().makeTranslation(E.left-A.left+B.x+B.w/2-i[d].width/2,i[d].height/2-(E.top-A.top+B.y+B.h/2),.5)).multiply(new tt().makeScale(B.w,B.h,1));r.push({browser:"app:"+R.dataset.nativeApp,matrix:y.toArray(),rect:[0,0,Math.round(E.width),Math.round(E.height)],curve:+(m.dataset.curve||0),uv:[B.u0,B.v0,B.uw,B.vh]});let w=[B.u0,B.v0,B.uw,B.vh].map(N=>N.toFixed(5)).join(",");R.dataset.uv!==w&&(R.dataset.uv=w)}for(let R of m.querySelectorAll("[data-native-xr]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T="xr:"+R.dataset.nativeXr,B=+(R.dataset.aspect||0),y=qr(E.width,E.height,B),w=u.matrixWorld.clone().multiply(new tt().makeTranslation(E.left-A.left+y.x+y.w/2-i[d].width/2,i[d].height/2-(E.top-A.top+y.y+y.h/2),.5)).multiply(new tt().makeScale(y.w,y.h,1));r.push({browser:T,matrix:w.toArray(),rect:[0,0,Math.round(E.width),Math.round(E.height)],curve:+(m.dataset.curve||0),uv:[y.u0,y.v0,y.uw/2,y.vh],uvR:[y.u0+y.uw/2,y.v0,y.uw/2,y.vh]})}for(let R of m.querySelectorAll("[data-native-browser]")){let E=R.getBoundingClientRect();if(!E.width||!E.height)continue;let T=R.dataset.nativeBrowser,B=R.dataset.url;if(!B)continue;let y=Math.round(E.width),w=Math.round(E.height),N={left:E.left,top:E.top,right:E.right,bottom:E.bottom};for(let U=R.parentElement;U&&U!==m;U=U.parentElement){let G=getComputedStyle(U);if(/(auto|scroll|hidden)/.test(G.overflow+G.overflowY)){let Y=U.getBoundingClientRect();N.left=Math.max(N.left,Y.left),N.top=Math.max(N.top,Y.top),N.right=Math.min(N.right,Y.right),N.bottom=Math.min(N.bottom,Y.bottom)}}o.push({id:T,url:B,width:y,height:w});let W=N.right-N.left,Q=N.bottom-N.top;if(W<=0||Q<=0)continue;let I=u.matrixWorld.clone().multiply(new tt().makeTranslation(N.left-A.left+W/2-i[d].width/2,i[d].height/2-(N.top-A.top+Q/2),.5)).multiply(new tt().makeScale(W,Q,1));r.push({browser:T,matrix:I.toArray(),rect:[0,0,y,w],curve:+(m.dataset.curve||0),uv:[(N.left-E.left)/y,(E.bottom-N.bottom)/w,W/y,Q/w]})}});let a=2*Math.tan(Vd.degToRad(36)),c=new tt().makeTranslation(0,0,-1).multiply(new tt().makeScale(a*1.5,a,1));r.push({overlay:!0,matrix:c.toArray(),rect:[0,0,Co.width,Co.height]});let l=performance.now();if(l-this.last>=({low:66,auto:30,high:16}[document.documentElement.dataset.quality]||30)){this.last=l;let u=JSON.stringify(r),d=JSON.stringify(o);(u!==this.sent||d!==this.sentSpecs)&&(this.sent=u,this.sentSpecs=d,window.NativeXR.frame(u,d))}}invalidate(){this.sent=this.sentSpecs=null}};var Qd=new P,Py=new an,ef=new P,dr=class extends dn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Yn=new tt,Ly=new tt,Lo=class{constructor(e={}){let t=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:i,height:s}},this.render=function(x,f){let p=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(l.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,l.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):l.style.transform="",x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let M,v;f.isOrthographicCamera&&(M=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);let A=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,R=f.isOrthographicCamera?`scale( ${A} )scale(`+p+")translate("+u(M)+"px,"+u(v)+"px)"+d(f.matrixWorldInverse):`scale( ${A} )translateZ(`+p+"px)"+d(f.matrixWorldInverse),T=(f.isPerspectiveCamera?"perspective("+p+"px) ":"")+R+"translate("+r+"px,"+o+"px)";a.camera.style!==T&&(h.style.transform=T,a.camera.style=T),g(x,x,f,R)},this.setSize=function(x,f){i=x,s=f,r=i/2,o=s/2,c.style.width=x+"px",c.style.height=f+"px",l.style.width=x+"px",l.style.height=f+"px",h.style.width=x+"px",h.style.height=f+"px"};function u(x){return Math.abs(x)<1e-10?0:x}function d(x){let f=x.elements;return"matrix3d("+u(f[0])+","+u(-f[1])+","+u(f[2])+","+u(f[3])+","+u(f[4])+","+u(-f[5])+","+u(f[6])+","+u(f[7])+","+u(f[8])+","+u(-f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(-f[13])+","+u(f[14])+","+u(f[15])+")"}function m(x){let f=x.elements;return"translate(-50%,-50%)"+("matrix3d("+u(f[0])+","+u(f[1])+","+u(f[2])+","+u(f[3])+","+u(-f[4])+","+u(-f[5])+","+u(-f[6])+","+u(-f[7])+","+u(f[8])+","+u(f[9])+","+u(f[10])+","+u(f[11])+","+u(f[12])+","+u(f[13])+","+u(f[14])+","+u(f[15])+")")}function g(x,f,p,M){if(x.isCSS3DObject){let v=x.visible===!0&&x.layers.test(p.layers)===!0;if(x.element.style.display=v===!0?"":"none",v===!0){x.onBeforeRender(t,f,p);let A;x.isCSS3DSprite?(Yn.copy(p.matrixWorldInverse),Yn.transpose(),x.rotation2D!==0&&Yn.multiply(Ly.makeRotationZ(x.rotation2D)),x.matrixWorld.decompose(Qd,Py,ef),Yn.setPosition(Qd),Yn.scale(ef),Yn.elements[3]=0,Yn.elements[7]=0,Yn.elements[11]=0,Yn.elements[15]=1,A=m(Yn)):A=m(x.matrixWorld);let R=x.element,E=a.objects.get(x);if(E===void 0||E.style!==A){R.style.transform=A;let T={style:A};a.objects.set(x,T)}R.parentNode!==h&&h.appendChild(R),x.onAfterRender(t,f,p)}}for(let v=0,A=x.children.length;v<A;v++)g(x.children[v],f,p,M)}}};var fe=!!window.NativeXR,ut=fe?Co:{width:innerWidth,height:innerHeight},sf={lang:null,handsOn:!0,handDraw:0,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"passthrough",quality:"auto",showFps:0},Ft={...sf};try{Ft={...sf,...JSON.parse(localStorage.getItem("nextvr.v1")||"{}")}}catch{}if(fe){Ft=Kd(Ft),Ft.handsOn=!0;try{localStorage.setItem("nextvr.v1",JSON.stringify(Ft))}catch{}}var we=Ft,pr=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Ft))}catch{}},tf={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 p\xF4r do sol",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrBusy:"Um jogo de headset est\xE1 em andamento: saia dele antes de abrir outro",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.tools":"Mundo 3D","game.place":"Colocar objeto","game.edit":"Editar objeto","game.duplicate":"Duplicar","game.remove":"Remover","game.removed":"removido","game.reset":"Recome\xE7ar cena","game.exit":"Sair do jogo","game.none":"Nenhum objeto selecionado","game.hint":"Pin\xE7a num objeto para mover \xB7 duas m\xE3os para girar e escalar","game.floor":"Ch\xE3o","game.menu":"Menu do jogo","game.menuTitle":"Jogo em andamento","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","game.launching":"Abrindo o mundo 3D\u2026","game.chord":"Segure a pin\xE7a com as duas m\xE3os para abrir o menu","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envSunset:"360\xB0 panorama \xB7 sunset",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrBusy:"A headset game is running: exit it before opening another one",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.tools":"3D world","game.place":"Place object","game.edit":"Edit object","game.duplicate":"Duplicate","game.remove":"Remove","game.removed":"removed","game.reset":"Restart scene","game.exit":"Exit game","game.none":"No object selected","game.hint":"Pinch an object to move \xB7 two hands to rotate and scale","game.floor":"Floor","game.menu":"Game menu","game.menuTitle":"Game running","game.continue":"Continue","game.settings":"Settings","game.launching":"Opening the 3D world\u2026","game.chord":"Hold the pinch with both hands to open the menu","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envSunset:"Panorama 360\xB0 \xB7 atardecer",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrBusy:"Hay un juego de visor en marcha: s\xE1elo antes de abrir otro",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.tools":"Mundo 3D","game.place":"Colocar objeto","game.edit":"Editar objeto","game.duplicate":"Duplicar","game.remove":"Quitar","game.removed":"quitado","game.reset":"Reiniciar escena","game.exit":"Salir del juego","game.none":"Ning\xFAn objeto seleccionado","game.hint":"Pellizca un objeto para moverlo \xB7 dos manos para girar y escalar","game.floor":"Suelo","game.menu":"Men\xFA del juego","game.menuTitle":"Juego en curso","game.continue":"Continuar","game.settings":"Ajustes","game.launching":"Abriendo el mundo 3D\u2026","game.chord":"Mant\xE9n el pellizco con las dos manos para abrir el men\xFA","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}},Yr=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E"},{id:"fr",label:"Fran\xE7ais"},{id:"de",label:"Deutsch"},{id:"ko",label:"\uD55C\uAD6D\uC5B4"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),Iy="pt",Oo=n=>Yr.find(e=>e.id===n)||Yr.find(e=>e.id===Iy);var Dy=()=>Oo(Ft.lang).table||"pt",L=n=>(tf[Dy()]||tf.pt)[n]||n,Wc=n=>Yr.some(e=>e.id===n&&e.table)?(Ft.lang=n,pr(),Ze("lang"),!0):!1,No={},je=(n,e)=>((No[n]||(No[n]=[])).push(e),e),Ze=(n,e)=>(No[n]||[]).forEach(t=>t(e));function Xe(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(Xe._t),Xe._t=setTimeout(()=>e.classList.remove("on"),2400)}var Vc=new yo,Je=new rn(72,1,.05,120);Je.rotation.order="YXZ";var Ye=new Di;Vc.add(Ye);var Pt=1.55;Je.position.set(0,Pt,0);var $r=fe?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Vr({antialias:!0,alpha:!0});fe||($r.setClearColor(0,0),document.getElementById("gl").appendChild($r.domElement));var pi=fe?new Po:new Lo;document.getElementById("css3d").appendChild(pi.domElement);if(fe){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}function Ny(){let n=Ft.quality;return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.6)}function Fo(){document.documentElement.dataset.quality=Ft.quality,fe||(ut.width=innerWidth,ut.height=innerHeight);let n=ut.width,e=ut.height;Je.aspect=n/e,Je.updateProjectionMatrix(),$r.setPixelRatio(Ny()),$r.setSize(n,e),pi.setSize(n,e),Ze("resize")}addEventListener("resize",Fo);addEventListener("orientationchange",()=>setTimeout(Fo,120));Fo();je("quality",Fo);var Uy=Object.freeze(["passthrough","sunset","night","space"]),rf=()=>[{id:"passthrough",name:L("envPass"),thumb:null},{id:"sunset",name:L("envSunset"),thumb:"./env/sunset.jpg"},{id:"night",name:L("envNight"),thumb:"./env/night.jpg"},{id:"space",name:L("envSpace"),thumb:"./env/space.jpg"}];function Xc(n){var e,t;Ft.env=Uy.includes(n)?n:"passthrough",pr(),Ze("env",Ft.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,Ft.env)}var ln={ok:!1,has:!1,q:new an,tmp:new an,e:new kn},Oy=new an,Fy=new an(-Math.SQRT1_2,0,0,Math.SQRT1_2),ky=new P(0,0,1),Uo=Math.PI/180;function zy(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Uo}function By(n){n.alpha!=null&&(ln.has=!0,ln.e.set(n.beta*Uo,n.alpha*Uo,-n.gamma*Uo,"YXZ"),ln.tmp.setFromEuler(ln.e),ln.tmp.multiply(Fy),ln.tmp.multiply(Oy.setFromAxisAngle(ky,-zy())),ln.q.copy(ln.tmp))}async function Zr(){if(fe)return ln.ok=ln.has=!0,Ze("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(Xe("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",By,!0),ln.ok=!0,setTimeout(()=>{ln.has||Xe("Sem girosc\xF3pio: arraste para olhar")},1200),Ze("gyro",!0),!0)}catch{return Xe("Girosc\xF3pio indispon\xEDvel"),!1}}var Hy=()=>ln.ok&&ln.has,vs=null,fr=0,Gc=0;addEventListener("pointerdown",n=>{fe||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(vs={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{vs&&(fr-=(n.clientX-vs.x)*.0032,Gc=Math.max(-1.2,Math.min(1.2,Gc-(n.clientY-vs.y)*.0032)),vs={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>vs=null);addEventListener("pointercancel",()=>vs=null);function ko(){let n=new kn().setFromQuaternion(Je.quaternion,"YXZ");Ye.rotation.y=n.y,Ye.position.set(0,0,0),Ze("recenter"),Xe(L("centered"))}var af=[],_s=n=>af.push(n),nf=performance.now(),Io=0,zc=0,Bc=0,Do=0,Hc=0,of=0,pn=null,lf=()=>{let n=performance.now();Bc>0&&(Do+=(n-Bc)/1e3,Hc++,Do>=1&&(of=Math.round(Hc/Do),Do=0,Hc=0)),Bc=n};function cf(n){let e=Math.min((n-nf)/1e3,.05);nf=n,fe||(Hy()?(Je.quaternion.slerp(ln.q,1-Math.exp(-e*12)),fr&&(Je.rotateY(fr),fr=0)):(Je.quaternion.setFromEuler(new kn(Gc,Je.rotation.y+fr,0,"YXZ")),fr=0)),Je.position.set(0,Pt,0);for(let t of af)t(e,n);if($r.render(Vc,Je),pi.render(Vc,Je),Io+=e,zc++,Io>=1){let t=document.getElementById("fps");t.textContent=Ft.showFps?Math.round(zc/Io)+" fps"+(fe&&Ft.handsOn?" \xB7 tracking "+of+" fps":"")+(fe&&Ft.handsOn?Vy():""):"",Io=0,zc=0}requestAnimationFrame(cf)}requestAnimationFrame(cf);Xc(Ft.env);if(fe){let n=new tt,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),Je.quaternion.setFromRotationMatrix(n),Je.position.set(0,Pt,0),Je.updateMatrixWorld(!0),e&&(Ye.rotation.y=new kn().setFromQuaternion(Je.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=Xe,window.nextvrDiag=t=>{pn=t}}function Vy(){if(!pn)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n(pn.camera);t!==null&&e.push("cam "+t);let i=n(pn.infer);return i!==null&&e.push("infer "+i+"ms"),pn.delegate&&e.push(String(pn.delegate).split(" ")[0]),typeof pn.narrow=="number"&&typeof pn.wide=="number"&&pn.narrow+pn.wide>0&&e.push("slots "+(pn.narrow>=pn.wide?1:2)),n(pn.stale)>0&&e.push("stale "+Math.round(pn.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var zo=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Bo=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var Vi=[],oe={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Hi=new zo,mr=new Bo,df=Math.tan(36*Math.PI/180),Gy=df*1.5,Wo=!1,$c=-1/0,Vo=1,Go=1,qc=null,ff=500,pf=()=>Wo;async function Kr(){return fe?(Wo=!0,window.NativeXR.hands(!0),Ze("hands",!0),!0):(Xe("Hand tracking requires the Android camera pipeline."),!1)}function mf(n){for(let e of n)Ze(`pinch${e}`,oe)}function jr(){let n=Hi.cancel();mr.reset(),oe.down=oe.active=!1,oe.phase=Hi.phase,oe.hand=null,oe.mode="idle",qy(),mf(n)}function Zc(){jr()}function Jc(){jr(),Vi.length=0,Wo=!1,$c=-1/0,Ze("phonehands",{hands:[],consumed:new Set,scaleX:Vo,scaleY:Go}),fe&&window.NativeXR.hands(!1),Ze("hands",!1)}function Qr(n){return{x:.5+n[0]/(2*Gy),y:.5-n[1]/(2*df)}}var Wy=250,hf=1.6,uf=.06,mn={x:0,y:0},Jr=0,Ho=0;function gr(n=performance.now()){if(!oe.active)return{x:oe.x,y:oe.y};let e=n-Jr;if(!(e>0)||e>Wy)return{x:oe.x,y:oe.y};let t=e/1e3,i=s=>Math.max(-uf,Math.min(uf,s));return{x:Math.min(1,Math.max(0,oe.x+i(mn.x*t))),y:Math.min(1,Math.max(0,oe.y+i(mn.y*t)))}}function Xy(n,e,t=0){let i=t>0&&Ho>0?(t-Ho)/1e9:Jr>0?(e-Jr)/1e3:-1;if(oe.active&&i>.004&&i<.3){let s=r=>Math.max(-hf,Math.min(hf,r));mn.x+=(s((n.x-oe.x)/i)-mn.x)*.35,mn.y+=(s((n.y-oe.y)/i)-mn.y)*.35,Math.hypot(mn.x,mn.y)<.12&&(mn.x=mn.y=0)}else i>=0&&i<=.004||(mn.x=mn.y=0);Jr=e,Ho=t>0?t:0}function qy(){mn.x=mn.y=0,Jr=0,Ho=0}fe&&(window.nextvrHands=(n,e=1,t=1)=>{if(!Wo)return;lf();let i=performance.now();Vo=e,Go=t,$c=i,ff=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),Vi.splice(0,Vi.length,...n.hands||[]),Ze("handframe",{...n,hands:Vi});let r={hands:Vi,consumed:new Set,scaleX:Vo,scaleY:Go};if(Ze("phonehands",r),r.blockFar){jr();return}let o=Vi.filter(h=>!r.consumed.has(h.id)),a=Hi.down&&o.find(h=>h.id===Hi.handId)||o.find(h=>h.pinching)||[...o].sort((h,u)=>u.palmWidth-h.palmWidth)[0];if(!a){jr();return}let c=Qr(a.aim);Xy(c,i,Number(n.timestampNs)||0),oe.x=c.x,oe.y=c.y,oe.active=!0,oe.hand=a;let l=a.predicted?[]:Hi.update(a.id,a.pinching);l.includes("down")?mr.begin(a.id,c.x*ut.width,c.y*ut.height,i):l.includes("up")?mr.end():l.includes("cancel")&&mr.reset(),Hi.down&&!a.predicted&&mr.sample(a.id,c.x*ut.width,c.y*ut.height,i),oe.mode=mr.mode,oe.down=Hi.down,oe.phase=Hi.phase,mf(l)});var Yc=document.getElementById("overlay");Yc.getContext("2d").clearRect(0,0,Yc.width,Yc.height);_s(()=>{var n,e;fe&&qc!==!!we.handDraw&&(qc=!!we.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,qc)),Vi.length&&performance.now()-$c>ff&&(Vi.length=0,jr(),Ze("phonehands",{hands:[],consumed:new Set,scaleX:Vo,scaleY:Go}))});var Yy=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),$y=Object.freeze({appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>'}),Zy=Object.freeze({...$y,...Yy});function ke(n,e="ui-icon"){let t=Zy[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var St=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),ea=(n,e,t)=>Math.max(e,Math.min(t,n)),cn=n=>Number.isFinite(n)?n:0;function jc(n,e=0,t=1.55,i=null){let s=cn(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,o=cn(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=St.minDistance,s=0,o=-a);let c=ea(Math.atan2(-s,-o),-St.maxYaw,St.maxYaw);a=ea(a,St.minDistance,St.maxDistance);let l=Math.max(0,cn(e)),h=t+St.lowerEdgeFromEye+l,u=t+St.upperEdgeFromEye-l;return r=h<=u?ea(r,h,u):t,{x:-Math.sin(c)*a,y:r,z:-Math.cos(c)*a}}function gf(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((cn(e.x)-cn(n.x))*t,(cn(e.y)-cn(n.y))*i)}function Kc(n,e,t,i){return gf(n,e,t,i)>=St.dragActivationPx}function xf(n,e,t,i){return gf(n,e,t,i)>=St.resizeActivationPx}function Qc(n,e){let t=cn(n==null?void 0:n.x),i=cn(n==null?void 0:n.y),s=cn(n==null?void 0:n.z),r=cn(e==null?void 0:e.x)-t,o=cn(e==null?void 0:e.y)-i,a=cn(e==null?void 0:e.z)-s,c=Math.hypot(r,o,a);if(!Number.isFinite(c)||c<=St.motionDeadZone)return{x:t,y:i,z:s};let h=Math.min(c,St.maxMotionStep)/c;return{x:t+r*h,y:i+o*h,z:s+a*h}}var Jy=Object.freeze({maxAngle:1.15});function ta(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(Jy.maxAngle,e))}function Xo(n,e){let t=ta(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function qo(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function Gi(n,e=St.maxResize){let t=ea(cn(e),St.minResize,St.maxResize);return ea(Number.isFinite(n)?n:1,St.minResize,t)}function vf(n,e,t=1.55){let i=Math.max(1e-5,cn(e)),s=Math.min(n-(t+St.lowerEdgeFromEye),t+St.upperEdgeFromEye-n);return Gi(s/i)}function _f(n,e,t,i){return!(e>1)||!Number.isFinite(t)?Gi(n,i):Gi(n*t/e,i)}function yf(n,e){let t=Gi(n),s=Gi(e)-t;return Math.abs(s)<.004?t:Gi(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function bf(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?e:-e,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-e/2:e/2,row:1});return r}var Mf=1.22;function eh(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function Sf({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=eh(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function wf(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var na=n=>Number.isFinite(n)?n:0,Ef=(n,e,t)=>Math.max(e,Math.min(t,n));function xr(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=na(n==null?void 0:n.x),o=na(n==null?void 0:n.y),a=na(n==null?void 0:n.z),c=o-s,l=Math.hypot(r,a),h=Math.hypot(r,c,a)||1e-6,u=Math.max(0,na(e)),d=Math.max(0,na(t));return{x:r,y:o,z:a,yaw:Math.atan2(-r,-a),pitch:l>1e-6?Math.atan2(c,l):c>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(u,l||1e-6),halfPitch:Math.atan2(d,h)}}function Af(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return xr(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function th(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return xr({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function jy(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,o=n.pitch-n.halfPitch,a=n.pitch+n.halfPitch,c=e.pitch-e.halfPitch,l=e.pitch+e.halfPitch,h=Math.min(i,r)-Math.max(t,s),u=Math.min(a,l)-Math.max(o,c);return h>0&&u>0?-Math.sqrt(h*u):Math.hypot(Math.max(-h,0),Math.max(-u,0))}function Yo(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,o=Number.isFinite(t.gap)?t.gap:.03,a=n.box||xr(n,n.hw||.5,n.hh||.35),c=0,l=0;for(let d of e){let m=jy(a,d);if(m<0){let g=m*m;c+=26e3*g+1e3,g>l&&(l=g)}else if(m<o){let g=o-m;c+=900*g*g}}let h=Math.hypot(a.x,a.z)||1e-6;c+=26*Math.abs(a.yaw),Math.abs(a.yaw)>r&&(c+=26*(Math.abs(a.yaw)-r)*40),h>s&&(c+=34*(h-s));let u=Number.isFinite(t.lift)?t.lift:a.y;return c+=Math.abs(a.y-u)*12,{score:c,overlap:l,yaw:a.yaw,radius:h}}function Ky({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:o=3,ringStep:a=.16,rows:c=2,topRowStep:l=1.22}={}){let h=[],u=Number.isFinite(e)?e:n,d=[0];for(let m=1;m<=6;m++){let g=m*t;if(g>r+1e-9)break;d.push(g,-g)}for(let m=0;m<c;m++){let g=m===0?u:u+s*2*(l-1)+s;for(let x=0;x<o;x++){let f=i+x*a;for(let p of d){let M=Ef(p,-r,r);h.push({x:Math.sin(M)*f,y:g,z:-Math.cos(M)*f,angle:M,row:m,radius:f})}}}return h}function Tf({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:o=.35,outerLimit:a=1.3,lift:c=null,rings:l=3,ringStep:h=.16,rows:u=2,gap:d=.03,topRowStep:m=1.22,improvement:g=1e-6}={}){let x={eye:t,desiredDistance:s,maxYaw:a,gap:d,lift:c??t},f=Ky({eye:t,lift:c??t,step:i,distance:s,halfHeight:o,outerLimit:a,rings:l,ringStep:h,rows:u,topRowStep:m}),p=null;for(let M of f){let v=xr(M,r,o),{score:A,overlap:R}=Yo({...M,box:v},n,x),E={x:M.x,y:M.y,z:M.z,angle:M.angle,row:M.row,radius:M.radius,score:A,overlap:R,box:v};(!p||E.score<p.score-g)&&(p=E)}if(e){let M=xr(e,r,o),{score:v,overlap:A}=Yo({...e,box:M},n,x),R={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:A,box:M,desired:!0};(!p||R.score<=p.score+g)&&(p=R)}return p}function Rf({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:o=.35,outerLimit:a=1.3,gap:c=.03,maxShift:l=3}={}){let h={eye:t,desiredDistance:s,maxYaw:a,gap:c,lift:n.y},u=(f,p,M)=>xr({x:f,y:p,z:M},r,o),d=Yo({...n,box:u(n.x,n.y,n.z)},e,h);if(d.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:d.score,moved:!1,overlap:0};let m={x:n.x,y:n.y,z:n.z,score:d.score,overlap:d.overlap},g=Math.hypot(n.x,n.z)||s,x=Math.atan2(-n.x,-n.z);for(let f=1;f<=l;f++)for(let p of[1,-1]){let M=Ef(x+p*f*i,-a,a),v=-Math.sin(M)*g,A=-Math.cos(M)*g,{score:R,overlap:E}=Yo({x:v,y:n.y,z:A,box:u(v,n.y,A)},e,h);R<m.score&&(m={x:v,y:n.y,z:A,score:R,overlap:E})}return{...m,moved:m.x!==n.x||m.z!==n.z}}var ht=.00105,ye=[],yr=null,Pn={y:Pt-.6,z:-1.7,h:.12};function kf(n=null){let e=[];for(let t of ye)t===n||t.hidden||t.onboarding||e.push(Af(t));if(Xi&&wt.offsetWidth>0){let t=th(Hn);t&&e.push(t)}if(et&&Yt&&!el&&et.element.offsetWidth>0){let t=th(Yt);t&&e.push(t)}return e}var ah=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:o=!1}){this.onboarding=o,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new P,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=ta(o?0:we.win360?we.win360K:0),this.curveRadius=Xo(s,this.curve);let a=document.createElement("div");a.className="win-shell",a.dataset.windowId=e,a.dataset.resizeScale="1",a.style.width=s+"px";let c=document.createElement("div");c.className="win",c.style.width=s+"px",c.style.height=r+"px",c.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${L("repin")}" title="${L("repin")}">${ke("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${L("close")}" title="${L("close")}">${ke("x")}</button>
      </div><div class="win-body"></div>`,c.querySelector(".win-title").textContent=t,c.querySelector(".win-body").appendChild(i),c.addEventListener("pointerdown",()=>$t(this),!0),c.querySelector(".win-bar").addEventListener("click",u=>{let d=u.target.closest("[data-act]");d&&(d.dataset.act==="close"?Jt(this):d.dataset.act==="curve"?this.setCurve(this.curve>0?0:ta(we.win360K)):tb(this))});let l=document.createElement("div");l.className="win-handle",l.title=L("moveWindow"),l.setAttribute("aria-label",L("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.title=L("resize"),h.setAttribute("aria-label",L("resize")),h.innerHTML=ke("move"),a.append(c,l,h),this.el=c,this.shell=a,this.handle=l,this.resizeHandle=h,a.dataset.curve=String(this.curve),o&&(c.querySelector(".win-bar").hidden=!0),this.obj=new dr(a),this.obj.scale.setScalar(ht*(this.onboarding?fn.welcomeScale:we.winScale)),Ye.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=nh(s*ht,r*ht,this,this.hitSegments),this.bendHit(),this.grab=nh(260*ht,90*ht,this),this.grab.userData.isHandle=!0,this.resizeHit=nh(112*ht,112*ht,this),this.resizeHit.userData.isResize=!0,!fe){let u=d=>({x:d.clientX/ut.width,y:d.clientY/ut.height});l.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);fh(this,m.x,m.y,"desktop"),l.setPointerCapture(d.pointerId)}),l.addEventListener("pointermove",d=>{if(st.win===this){let m=u(d);ph(m.x,m.y)}}),l.addEventListener("pointerup",Wi),l.addEventListener("pointercancel",Wi),h.addEventListener("pointerdown",d=>{d.stopPropagation();let m=u(d);Vf(this,m.x,m.y),h.setPointerCapture(d.pointerId)}),h.addEventListener("pointermove",d=>{if(At.win===this){let m=u(d);Gf(m.x,m.y)}}),h.addEventListener("pointerup",Ms),h.addEventListener("pointercancel",Ms)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new on(this.w*ht,this.h*ht,i,1),this.hitSegments=i,this.curveRadius=Xo(this.w,this.curve),this.bendHit(),this.apply(),Jn(),Ze("wins",ye)}setCurve(e){this.curve=ta(e),this.curveRadius=Xo(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new on(this.w*ht,this.h*ht,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return qo(e,this.curveRadius)*ht}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,qo(e.getX(t)/ht,this.curveRadius)*ht);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*we.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(Pt-e.position.y,i)*we.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?fn.welcomeScale:we.winScale)*this.resizeScale;e.scale.setScalar(ht*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*ht*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation),this.resizeHit.translateX((this.w/2-48)*ht*r),this.resizeHit.translateY(-(this.h/2-48)*ht*r),this.resizeHit.translateZ(this.bulge(this.w/2-48)+.003),this.resizeHit.scale.setScalar(r)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&st.win===this&&Wi(),t&&At.win===this&&Ms(),(s=(i=pi).invalidate)==null||s.call(i))}};function nh(n,e,t,i=1){let s=new Ht(new on(n,e,i,1),new Rn({visible:!1}));return s.userData.win=t,Ye.add(s),s}function Jn(){for(let o of ye)o.onboarding&&o.target.set(0,Pt,-fn.welcomeDistance);let n=ye.filter(o=>o.pinned&&!o.onboarding&&!o.hidden),e=n.length;if(!e)return;let t=fe?we.winDist:-Pn.z+.5+(we.winDist-2.2),i=Math.max(...n.map(o=>o.w*o.resizeScale))*ht*we.winScale,s=fe?Sf({width:i,dist:t,gap:.5,outerLimit:St.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+e*.05));if(bf(e,s).forEach(({angle:o,row:a},c)=>{let l=n[c],h=l.h*ht*we.winScale*l.resizeScale,u=Pn.y+Pn.h/2+.14+h/2,d=Math.sin(o)*t,m=-Math.cos(o)*t,g=a===0?u:Math.min(u+h*2*(Mf-1)+h,Pt+St.upperEdgeFromEye-h);l.target.set(d,g,m)}),!fe)return;let r=Math.min(s,eh(i,t)*.6);for(let o of n){let a=o.w*ht*we.winScale*o.resizeScale/2,c=o.h*ht*we.winScale*o.resizeScale/2,l=Rf({desired:{x:o.target.x,y:o.target.y,z:o.target.z},occupied:kf(o),eye:Pt,step:r,distance:t,halfWidth:a,halfHeight:c,outerLimit:St.maxYaw-.06,maxShift:4});o.target.set(l.x,l.y,l.z)}}je("recenter",Jn);je("resize",Jn);function Zt(n){let e=ye.find(s=>s.id===n.id);if(e)return $t(e),e;let t=ye.filter(s=>!s.onboarding&&!s.hidden);if(t.length>=5){let s=wf(t);s&&(Xe(`${L("arcFull")}: ${s.title}`),Jt(s))}let i=new ah(n);return ye.push(i),Jn(),$t(i),i.obj.position.copy(i.target),n.free&&eb(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),Ze("wins",ye),i}function eb(n,e=null){n.pinned=!1;let t=n.w*ht*we.winScale*n.resizeScale/2,i=n.h*ht*we.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Pn.y+Pn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-we.winDist)||we.winDist,o=Tf({occupied:kf(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-we.winDist},eye:Pt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:St.maxYaw-.06,lift:s,rings:3,rows:1});o&&n.target.set(o.x,o.y,o.z)}var zf=(n,e)=>Ss(n,e)!==null;function Jt(n){if(!n)return;let e=ye.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);it&&(it.nativeId?it.nativeId===i:!n.el.contains(it))&&yn(!1),ca&&!n.el.contains(ca)&&(ca=null),st.win===n&&Wi(),At.win===n&&Ms(),ye.splice(e,1),Ye.remove(n.obj),Ye.remove(n.hit),Ye.remove(n.grab),Ye.remove(n.resizeHit),n.shell.remove(),yr===n&&(yr=ye[ye.length-1]||null),Jn(),Ze("wins",ye)}function $t(n){yr!==n&&(yr=n,n.lastFocus=performance.now(),ye.forEach(e=>e.el.classList.toggle("focus",e===yr)))}function tb(n){n.pinned=!0,n.shell.classList.remove("free"),Jn()}var Ko=()=>yr,Ln=new Bi,Jo=new $e,st={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},At={win:null,start:null,active:!1,startScale:1,startDistance:1},hn={source:null,start:null,active:!1,plane:null,anchor:null};function As(n,e,t=Ln){return Je.updateMatrixWorld(!0),Ye.updateMatrixWorld(!0),Jo.set(n*2-1,1-e*2),t.setFromCamera(Jo,Je),t}function nb(n){return n.h*ht*we.winScale*n.resizeScale/2}function ib(n,e,t=null){let i=jc(e,nb(n),Pt,t);return new P(i.x,i.y,i.z)}function fh(n,e,t,i="handle",s=null){if(n.onboarding||At.win)return!1;st.win&&Wi(),$t(n),As(e,t);let r=n.obj.getWorldPosition(new P),o=new qt().setFromNormalAndCoplanarPoint(Ln.ray.direction.clone(),r),a=Ln.ray.intersectPlane(o,new P);if(!a)return!1;let c=Ye.worldToLocal(r.clone()),l=Math.hypot(c.x,c.z);return Object.assign(st,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:l,applied:new P}}),!0}function sb(){let n=st.win;!n||st.active||(st.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Jn())}function ph(n,e){let t=st.win;if(!t)return!1;As(n,e);let i=Ln.ray.intersectPlane(st.plane,new P);if(!i)return!1;if(!st.active){if(!Kc(st.start,{x:n,y:e},ut.width,ut.height))return!1;sb()}let s=st.anchor,r=i.clone().sub(s.hit);s.applied.copy(Qc(s.applied,r));let o=s.center.clone().add(s.applied),a=ib(t,Ye.worldToLocal(o),s.radius);return t.target.copy(a),t.obj.position.copy(t.target),!0}function Wi(){st.win&&st.win.shell.classList.remove("moving"),Object.assign(st,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function Bf(n,e,t="pinch"){if(!Xi||st.win||At.win)return!1;hn.start&&qi(),As(n,e);let i=_n.getWorldPosition(new P),s=new qt().setFromNormalAndCoplanarPoint(Ln.ray.direction.clone(),i),r=Ln.ray.intersectPlane(s,new P);return r?(Object.assign(hn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new P}}),wt.classList.add("grab-armed"),yt.setAttribute("aria-pressed","true"),!0):!1}function rb(){!hn.start||hn.active||(hn.active=!0,wt.classList.remove("grab-armed"),wt.classList.add("moving"))}function mh(n,e){if(!hn.start)return!1;As(n,e);let t=Ln.ray.intersectPlane(hn.plane,new P);if(!t)return!1;if(!hn.active){if(!Kc(hn.start,{x:n,y:e},ut.width,ut.height))return!1;rb()}let i=hn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Qc(i.applied,s));let r=i.center.clone().add(i.applied),o=Ye.worldToLocal(r),a=jc(o,Pn.h/2,Pt);return ys=new P(a.x,a.y,a.z),Es=Math.atan2(-a.x,-a.z),fa(),!0}function qi(){wt==null||wt.classList.remove("grab-armed","moving"),yt==null||yt.setAttribute("aria-pressed","false"),Object.assign(hn,{source:null,start:null,active:!1,plane:null,anchor:null})}function Hf(n,e,t){Je.updateMatrixWorld(!0),Ye.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new P).project(Je),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*ut.width,(t-r)*ut.height)}function Vf(n,e,t){return n.onboarding||st.win?!1:(At.win&&Ms(),$t(n),Object.assign(At,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,Hf(n,e,t))}),!0)}function Gf(n,e){let t=At.win;if(!t)return!1;if(!At.active){if(!xf(At.start,{x:n,y:e},ut.width,ut.height))return!1;At.active=!0,t.shell.classList.add("resizing")}let i=t.h*ht*we.winScale/2,s=Math.max(At.startScale,vf(t.obj.position.y,i,Pt)),r=_f(At.startScale,At.startDistance,Hf(t,n,e),s);return t.resizeScale=Gi(yf(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function Ms(){At.win&&At.win.shell.classList.remove("resizing"),Object.assign(At,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function Ss(n,e){As(n,e);let t=[];for(let a of ye)a.hidden||(a.onboarding||t.push(a.resizeHit,a.grab),t.push(a.hit));let i=Ln.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var Wf=Ss,Qe=null,Cn=null,ab=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function ob(n,e,t,i,s){var c,l;let r=s?ab(s):null;e===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(l=(c=n.activation).matches)!=null&&l.call(c,"input,textarea")&&n.activation.focus())}function sa(n,e,t=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?ob(n,e,t,i,s):window.NativeXR.handTouch(n.id,e,t,i)}function ws(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s);if(e===0&&!(o!=null&&o.closest("[data-native-browser],[data-native-app]"))){let g=vb(o);g?yn(!0,g):yn(!1)}if(o==null?void 0:o.closest("[data-native-xr]")){Qe=null;return}let c=o==null?void 0:o.closest("[data-native-app]");if(c){let g=c.getBoundingClientRect(),x=kc(c.offsetWidth,c.offsetHeight,+(c.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!x&&!Qe)return;let f="app:"+c.dataset.nativeApp;if(Qe&&Qe.id!==f&&(sa(Qe,3),Qe=null),e===0){if(!x)return;Qe={id:f,win:n.win,x:x.u,y:x.v}}Qe&&Qe.id===f&&(x||e!==2)&&(x&&(Qe.x=x.u,Qe.y=x.v),sa(Qe,e,Qe.x,Qe.y)),(e===1||e===3)&&(Qe=null);return}let l=o==null?void 0:o.closest("[data-native-browser]"),h=l==null?void 0:l.getBoundingClientRect(),u=l?l.dataset.nativeBrowser:"shell",d=r.left+i-((h==null?void 0:h.left)||0),m=r.top+s-((h==null?void 0:h.top)||0);Qe&&Qe.id!==u&&(sa(Qe,3),Qe=null,e!==0)||(e===0&&(Qe={id:u,win:n.win,x:d,y:m}),Qe&&Qe.id===u&&(Qe.x=d,Qe.y=m,sa(Qe,e,d,m,o)),(e===1||e===3)&&(Qe=null))}function Xf(){Qe&&sa(Qe,3),Qe=null,Cn=null,Wi(),Ms(),qi()}je("pinchcancel",Xf);function ra(n,e){if(fe){ws(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=qf(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function qf(n,e,t){let i=null,s=r=>{for(let o of r.children){let a=lb(o,n);e>=a.l&&e<=a.r&&t>=a.t&&t<=a.b&&(i=o,s(o))}};return s(n),i||n}function lb(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}je("pinchdown",()=>{var i;let n=Ss(oe.x,oe.y),e=ep(oe.x,oe.y),t=pb(oe.x,oe.y);if(t&&(!n||t.distance<n.distance)&&(!e||t.distance<e.distance)){Bf(oe.x,oe.y,"pinch");return}if(e&&(!n||e.distance<n.distance)){vh(e.button);return}if(n!=null&&n.resize){Vf(n.win,oe.x,oe.y);return}if(n!=null&&n.handle){fh(n.win,oe.x,oe.y,"handle",(i=oe.hand)==null?void 0:i.id);return}if(n){$t(n.win),Cn={win:n.win,hit:n};return}jf("down")});je("pinchup",()=>{if(gi){Yi();return}if(Cn&&oe.mode==="drag"&&(ra(Cn.hit,"down"),Cn=null),Cn){let e=Ss(oe.x,oe.y),t=e&&!e.handle&&!e.resize&&e.win===Cn.win?e:Cn.hit;Cn=null,ra(t,"down"),ra(t,"up");return}if(Qe){let e=Ss(oe.x,oe.y);e&&e.win===Qe.win&&!e.handle&&!e.resize?ws(e,1):Xf();return}if(At.win){Ms();return}if(st.win){Wi();return}if(hn.start){mh(oe.x,oe.y),qi();return}let n=Ss(oe.x,oe.y);if(n&&!n.handle&&!n.resize){ra(n,"up");return}jf("up")});var wt=document.createElement("div");wt.className="dock";var yt=document.createElement("button");yt.type="button";yt.className="dock-grab";yt.title=L("moveDock");yt.setAttribute("aria-label",L("moveDock"));yt.setAttribute("aria-pressed","false");var _n=new dr(wt);Ye.add(_n);var Hn=new Ht(new on(1,1),new Rn({visible:!1})),$n=new Ht(new on(1,1),new Rn({visible:!1}));Ye.add(Hn,$n);if(!fe){let n=e=>({x:e.clientX/ut.width,y:e.clientY/ut.height});yt.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);Bf(t.x,t.y,"desktop")&&yt.setPointerCapture(e.pointerId)}),yt.addEventListener("pointermove",e=>{if(hn.source==="desktop"){let t=n(e);mh(t.x,t.y)}}),yt.addEventListener("pointerup",e=>{hn.source==="desktop"&&(qi(),yt.hasPointerCapture(e.pointerId)&&yt.releasePointerCapture(e.pointerId))}),yt.addEventListener("pointercancel",qi)}var Xi=!0,aa=!1;function da(n){Xi=!!n,_n.visible=Xi,Xi||(la=-1,qi())}function br(n){var t,i;let e=!!n;return aa===e||(aa=e,wt.style.setProperty("display",e?"none":"","important"),Hn.visible=$n.visible=!e,da(!e),(i=(t=pi).invalidate)==null||i.call(t)),aa}var Qo=()=>aa,cb=[],ua=[],oh=[],hb=ke("wifi"),ub='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',db='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function Yf(n){cb=n,ua=[],oh.length=0,wt.innerHTML="";for(let e of n){if(e.kind==="sep"){wt.appendChild(fb());continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=db;else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${hb}</span><span class="dk-bat">${ub}</span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),oh.push({b:t,win:e.win})}t.addEventListener("click",()=>e.run()),wt.appendChild(t),ua.push(t)}yt.title=L("moveDock"),yt.setAttribute("aria-label",L("moveDock")),wt.appendChild(yt),Zf(),gh(),oa(),$f(),fa()}function fb(){let n=document.createElement("span");return n.className="dock-sep",n}function $f(){for(let{b:n,win:e}of oh){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",ye.some(i=>i.id===e))}}je("wins",$f);function Zf(){let n=wt.querySelector(".dk-time");n&&(n.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}setInterval(Zf,2e4);function gh(){let n=wt.querySelector(".dk-wifi");n&&(n.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",gh);addEventListener("offline",gh);var _r=null;function oa(){let n=wt.querySelector(".dk-bat");if(!n)return;if(!_r){n.style.display="none";return}n.style.display="";let e=n.querySelector(".fill");e.setAttribute("width",String(Math.max(1.6,13*_r.level))),e.setAttribute("fill",_r.charging?"#8de6c8":_r.level<.2?"#ff6b6b":"currentColor")}navigator.getBattery&&navigator.getBattery().then(n=>{_r=n,n.addEventListener("levelchange",oa),n.addEventListener("chargingchange",oa),oa()}).catch(()=>{});var Jf=()=>!!et,la=-1;je("pinchcancel",()=>{la=-1});function jf(n){let e=mb(oe.x,oe.y);if(n==="down"){la=e?e.i:-1;return}let t=la;if(la=-1,!(!e||e.i!==t)&&n==="up"){let i=ua[e.i];i&&(i.style.transform="scale(.88)",setTimeout(()=>i.style.transform="",150),i.click())}}function pb(n,e){return!Xi||!lh?null:(As(n,e),Ln.intersectObject($n,!1)[0]||null)}function mb(n,e){if(!Xi)return null;As(n,e);let t=Ln.intersectObject(Hn,!1)[0];if(!t)return null;let i=Hn.worldToLocal(t.point.clone()),s=Hn.geometry.parameters,r=(i.x/s.width+.5)*wt.offsetWidth,o=(.5-i.y/s.height)*wt.offsetHeight;for(let a=0;a<ua.length;a++){let c=ua[a];if(r>=c.offsetLeft&&r<=c.offsetLeft+c.offsetWidth&&o>=c.offsetTop&&o<=c.offsetTop+c.offsetHeight)return{i:a}}return null}var Cf="",lh="",Es=0,ys=null;je("recenter",()=>{Es=0,mi.ready=!1,ys=null,qi(),fa()});je("summon-dock",()=>{var e;Je.updateMatrixWorld(!0),Ye.updateMatrixWorld(!0);let n=Je.getWorldDirection(new P).transformDirection(Ye.matrixWorld.clone().invert());Es=Math.atan2(-n.x,-n.z),mi.ready=!1,ys=null,qi(),fa(),(e=window.NativeXR)==null||e.click()});function fa(){let n=ut.width>ut.height,e=(fe?fn.dockDistance:n?1.42:1.75)*we.dockDist,t=fe?-fn.dockDrop:n?-.5:-.6,i=ht*(fe?fn.dockScale:n?.74:.88)*we.dockSize;ys?_n.position.copy(ys):_n.position.set(-Math.sin(Es)*e,Pt+t,-Math.cos(Es)*e),_n.rotation.set(.26,Es,0,"YXZ"),_n.scale.setScalar(i);let s=wt.offsetWidth*i,r=wt.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Cf&&(Cf=o,Hn.geometry.dispose(),Hn.geometry=new on(s,r),Pn.h=r,ys||Jn());let a=yt.offsetWidth*i,c=yt.offsetHeight*i,l=a.toFixed(3)+"x"+c.toFixed(3);a>0&&l!==lh&&(lh=l,$n.geometry.dispose(),$n.geometry=new on(a,c)),Hn.position.copy(_n.position),Hn.rotation.copy(_n.rotation),$n.position.copy(_n.position),$n.rotation.copy(_n.rotation),$n.translateY((wt.offsetHeight/2-yt.offsetTop-yt.offsetHeight/2)*i),$n.translateZ(.004),!ys&&(Pn.y!==_n.position.y||Pn.z!==-e)&&(Pn.y=_n.position.y,Pn.z=-e,Jn())}var gb=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],Pf=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],xb=0,et=null,Yt=null,it=null,vr=null,Zn=!1,bs=!1,el=!1,xi=window.__nextvrTyping,vb=n=>(xi==null?void 0:xi.editable(n))||null,ca=null,ch=1,Kf=2,jo=3,_b=fe;function Mr(n){var t,i;if(el=!!n,!et)return!1;let e=!!n;return et.visible=!e,et.element.style.setProperty("display",e?"none":"","important"),Yt&&(Yt.visible=!e),e&&Yi(),(i=(t=pi).invalidate)==null||i.call(t),!0}var tl=()=>!!et&&et.visible!==!1;function yb(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&ye.find(s=>s.shell===t)||null}function yn(n,e){if(!n){fe&&console.log("kb close; was serving",(it==null?void 0:it.nativeId)||(it==null?void 0:it.tagName)||"nothing"),Yi(),et&&(Ye.remove(et),Ye.remove(Yt),et.element.remove(),et=null),it=null,vr=null,Zn=bs=!1,mi.ready=!1;return}let t=e||ca;if(it=t&&!t.nativeId?(xi==null?void 0:xi.focus(t))||null:t||null,it&&!it.nativeId&&(ca=it),vr=yb(it),fe&&console.log("kb open for",(it==null?void 0:it.nativeId)||(it==null?void 0:it.tagName)||"nothing","in window",(vr==null?void 0:vr.id)??"none"),et){hh();return}let i=document.createElement("div");i.className="kb";for(let s of gb){let r=document.createElement("div");r.className="kb-row";for(let o of s){let a=typeof o=="string"?o:o.k,c=document.createElement("button");c.className="key"+(typeof o=="string"?"":" "+o.cls),typeof o=="string"?c.textContent=a:o.icon?(c.innerHTML=ke(o.icon),c.setAttribute("aria-label",o.label),c.title=o.label):c.textContent=o.lbl||a,c.dataset.k=a,r.appendChild(c)}i.appendChild(r)}i.addEventListener("click",s=>{let r=s.target.closest("[data-k]");r&&(vh(r),Yi())}),et=new dr(i),et.scale.setScalar(ht*(fe?fn.keyboardScale:.9)),Ye.add(et),Yt=new Ht(new on(1,1),new Rn({visible:!1})),Ye.add(Yt),hh()}function bb(){Zn?bs?(Zn=!1,bs=!1):bs=!0:(Zn=!0,bs=!1),Qf()}function xh(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===jo){e&&e.classList.remove("hot"),s&&ih(n,n,!!i,jo);return}if(t===ch){if(fe&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){yn(!1);return}if(n==="\u21E7"){bb();return}if(n==="@lang")return;if(n==="@mic"){Xe(L("micOff"));return}if(n==="@emoji"){ih(n,Pf[xb++%Pf.length],!1,ch);return}}ih(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function ih(n,e,t,i){if(!it)return!1;let s=t===void 0?Zn:t;return it.nativeId?window.NativeXR.key(it.nativeId,e,!!s,i||0):xi==null||xi.key(n,!!s,i||0),_b&&i!==Kf&&console.log("kb key ->",it.nativeId||it.tagName+"."+(it.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==jo&&s&&Zn&&!bs&&(Zn=!1,Qf()),!0}function Qf(){if(et){for(let n of et.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=Zn?bs?"lock":"once":"";for(let n of et.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=Zn?e.toUpperCase():e.toLowerCase())}}}var Lf="",Mb=.35,mi={yaw:0,ready:!1},Sb=n=>Math.atan2(Math.sin(n),Math.cos(n));function wb(){let n=vr;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return Es}function hh(n=0){if(!et)return;let e=wb();mi.ready?mi.yaw+=Sb(e-mi.yaw)*(1-Math.exp(-n*7)):(mi.yaw=e,mi.ready=!0);let t=mi.yaw,i=fe?fn.keyboardDistance:-Pn.z-.35;et.position.set(-Math.sin(t)*i,Pt-(fe?fn.keyboardDrop:.68),-Math.cos(t)*i),et.rotation.set(-Math.PI/2+Mb,t,0,"YXZ");let s=et.element.offsetWidth*et.scale.x,r=et.element.offsetHeight*et.scale.x,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==Lf&&(Lf=o,Yt.geometry.dispose(),Yt.geometry=new on(s,r)),Yt.position.copy(et.position),Yt.rotation.copy(et.rotation)}var Eb=700,Ab=90,Tb=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),gi=null,ha=0;function ep(n,e){var a,c;if(!et||el)return null;Jo.set(n*2-1,-(e*2-1)),Ln.setFromCamera(Jo,Je);let t=Ln.intersectObject(Yt,!1)[0];if(!t)return null;let i=Yt.worldToLocal(t.point.clone()),s=Yt.geometry.parameters,r=(i.x/s.width+.5)*et.element.offsetWidth,o=(.5-i.y/s.height)*et.element.offsetHeight;return{distance:t.distance,button:((c=(a=qf(et.element,r,o))==null?void 0:a.closest)==null?void 0:c.call(a,"[data-k]"))||null}}function vh(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return Yi(),e?(gi={key:e,button:n,shift:Zn},xh(e,n,ch),Tb(e)&&(ha=performance.now()+Eb),!0):!1}function Yi(){let n=gi;gi=null,ha=0,n&&xh(n.key,n.button,jo,n.shift)}je("pinchcancel",Yi);function Rb(n){var i,s;if(!gi)return!1;let e=ep(oe.x,oe.y);if(!e)return Yi(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==gi.key?(Yi(),vh(e.button)):(ha&&n>=ha&&(xh(gi.key,gi.button,Kf),ha=n+Ab),!0)}var If="";_s((n,e)=>{let t=`${we.winScale}:${we.winDist}`;if(If!==t&&(If=t,Jn()),fa(),hh(n),gi&&Rb(e),Cn&&oe.mode==="drag"&&(ra(Cn.hit,"down"),Cn=null),Qe&&oe.active&&oe.down){let i=Ss(oe.x,oe.y);i&&i.win===Qe.win&&!i.handle&&!i.resize&&ws(i,2)}if((At.win||st.win&&st.source!=="fist")&&oe.active&&oe.down){let i=gr(e);At.win&&Gf(i.x,i.y),st.win&&st.source!=="fist"&&ph(i.x,i.y)}if(hn.start&&oe.active&&oe.down){let i=gr(e);mh(i.x,i.y)}for(let i of ye)i.hidden||i.apply()});if(fe){let n=function(){try{_r=JSON.parse(window.NativeXR.battery()),oa()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?yn(!0,{nativeId:e}):(it==null?void 0:it.nativeId)!==e&&yn(!1)},window.nextvrAppFocus=e=>yn(!0,{nativeId:e}),n(),setInterval(n,3e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var at=null,$o=new Map,Zo=new Set,_h={hands:[],consumed:new Set,scaleX:1,scaleY:1},ia=null,sh=0,Df=350,Cb=240;function uh(n,e){Je.updateMatrixWorld(!0),Ye.updateMatrixWorld(!0);let t=new Bi;return t.setFromCamera(new $e(n*2-1,1-e*2),Je),t}function rh(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function dh(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new P),s=n.curve>0?qo(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function Pb(n,e){let t=n.obj.getWorldPosition(new P),i=new P(0,0,1).transformDirection(n.obj.matrixWorld),s=new qt().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new P);let r=n.obj.matrixWorld.clone().invert(),o=e.origin.clone().applyMatrix4(r),a=e.origin.clone().add(e.direction).applyMatrix4(r).sub(o).normalize(),c=n.curveRadius,l=a.x*a.x+a.z*a.z;if(l<1e-9)return e.intersectPlane(s,new P);let h=2*(o.x*a.x+(o.z-c)*a.z),u=o.x*o.x+(o.z-c)*(o.z-c)-c*c,d=h*h-4*l*u;if(d<0)return e.intersectPlane(s,new P);let m=Math.sqrt(d);for(let g of[(-h-m)/(2*l),(-h+m)/(2*l)]){if(!(g>0))continue;let x=o.clone().addScaledVector(a,g);if(!(Math.abs(x.x)>c+1e-6||x.z>c))return x.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new P)}function Nf(n){let e=null;for(let t of ye){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new P),s=Pb(t,n.ray);if(!s)continue;let{local:r,scale:o}=dh(t,s);if(Math.abs(r.x)*o.x>t.w*o.x/2+.08||Math.abs(r.y)*o.y>t.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!e||a<e.distance)&&(e={win:t,point:s,distance:a})}return e}function Uf(n=!1,e=_h){let t=at;t!=null&&t.down&&(ws({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&(Zo.add(t.id),e.consumed.add(t.id))),at=null}je("phonehands",n=>{var a,c;_h=n;let e=new Set(n.hands.map(l=>l.id));for(let l of $o.keys())e.has(l)||$o.delete(l);for(let l of Zo){let h=n.hands.find(u=>u.id===l);!h||!h.pinching?Zo.delete(l):n.consumed.add(l)}if(st.win&&st.source==="fist"){let l=n.hands.find(h=>h.id===st.hand);if(!l||!l.fist||!ye.includes(st.win)||(a=st.win)!=null&&a.hidden)Wi();else{n.consumed.add(l.id);let h=rh(l,n,!0);ph(h.x,h.y)}}let t=performance.now();if(!(st.win&&st.source==="fist")){let l=n.hands.find(h=>!h.fist);if(l){let h=rh(l,n),u=Nf(uh(h.x,h.y));if(u){let{local:d,scale:m}=dh(u.win,u.point),g=u.win;(Math.abs(d.x)*m.x>g.w*m.x/2-.06||Math.abs(d.y)*m.y>g.h*m.y/2-.06)&&(ia=u.win,sh=t)}}}for(let l of ye)(l!==ia||t-sh>Df)&&l.shell.classList.remove("phone-grab-hover");ia&&t-sh<=Df?ia.shell.classList.add("phone-grab-hover"):ia=null;for(let l of n.hands){let h=$o.get(l.id)||!1;if($o.set(l.id,l.fist),!st.win&&!At.win&&l.fist&&!h){let u=rh(l,n,!0),d=Nf(uh(u.x,u.y));d&&(((c=oe.hand)==null?void 0:c.id)===l.id&&Zc(),fh(d.win,u.x,u.y,"fist",l.id)&&n.consumed.add(l.id))}}let i=null;for(let l of n.hands){if(n.consumed.has(l.id)||!l.head||l.head.length!==63)continue;let h=new P().fromArray(l.head,24);if(!(h.length()>.7)){h.applyMatrix4(Je.matrixWorld);for(let u of ye){if(u.hidden)continue;let d=dh(u,h),m=(at==null?void 0:at.win)===u&&at.id===l.id,g=m?.08:.02,x=m?.26:.11;d.d>x||d.d<-.12||Math.abs(d.local.x)*d.scale.x>u.w*d.scale.x/2+g||Math.abs(d.local.y)*d.scale.y>u.h*d.scale.y/2+g||(!i||m||!i.current&&Math.abs(d.d)<Math.abs(i.d))&&(i={...d,id:l.id,win:u,point:h,current:m})}}}if(!i&&at&&e.has(at.id)&&ye.includes(at.win)&&!at.win.hidden&&t-at.lastSeen<=Cb&&(i={...at,current:!0,held:!0}),!i){Uf(!e.has(at==null?void 0:at.id),n);return}i.current?(at.d+=(i.d-at.d)*.45,at.u+=(i.u-at.u)*.45,at.v+=(i.v-at.v)*.45,i.held||(at.lastSeen=t)):(Uf(!1,n),at={...i,down:!1,previousD:i.d,lastSeen:t});let s=at,r=s.u>=0&&s.u<=1&&s.v>=0&&s.v<=1,o={win:s.win,u:Math.max(0,Math.min(1,s.u)),v:Math.max(0,Math.min(1,s.v))};!s.down&&r&&s.d<=.012&&s.previousD>.012?(oe.down&&Zc(),$t(s.win),ws(o,0),s.down=!0):s.down&&(s.d>=.035||!r)?(ws(o,1),s.down=!1,n.hands.some(l=>l.id===s.id&&l.pinching)&&(Zo.add(s.id),n.consumed.add(s.id))):s.down&&ws(o,2),s.previousD=s.d,s.down&&(n.blockFar=!0,n.consumed.add(s.id))});var Of=0,Ff="";_s((n,e)=>{var r,o,a,c;if(!fe||e-Of<16)return;Of=e;let t=_h,i=[];for(let l of t.hands){if((at==null?void 0:at.id)===l.id&&at.down){let g=at,x=new P((g.u-.5)*g.win.w,(.5-g.v)*g.win.h,0).applyMatrix4(g.win.obj.matrixWorld);i.push({id:l.id,end:Je.worldToLocal(x).toArray(),direct:!0,down:g.down});continue}if(t.consumed.has(l.id)||t.blockFar){i.push({id:l.id,hidden:!0});continue}let h=((r=oe.hand)==null?void 0:r.id)===l.id?gr(e):Qr(l.aim),u=uh(h.x,h.y),d=ye.filter(g=>!g.hidden).flatMap(g=>[g.resizeHit,g.grab,g.hit]);Xi&&d.push($n,Hn),Yt&&et&&!el&&d.push(Yt);let m=u.intersectObjects(d,!1)[0];i.push({id:l.id,...m?{end:m.point.toArray()}:{},down:((o=oe.hand)==null?void 0:o.id)===l.id&&oe.down})}let s=JSON.stringify(i);s!==Ff&&(Ff=s,(c=(a=window.NativeXR).handTargets)==null||c.call(a,s))});var nl={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3},Sr=class{constructor({armMs:e=nl.armMs,graceMs:t=nl.graceMs,holdMs:i=nl.holdMs,progressHoldMs:s=nl.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,o=s&&r;if(this.open){if(o)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let a=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:a,active:!1}}if(o){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let a=i-this.startedAt;return a>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,a/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var np="nextvr-game",ma="nextvr-game-menu",Th=()=>Gn,Rh=["box","sphere","cylinder","cone","plate"],wr=["#a78bfa","#7c6bff","#8de6c8","#ffc45c","#ff6b6b","#63aaff","#eef1f7","#39415a"],vi={minScale:.05,maxScale:6,maxY:8,maxRadius:8},Lb=["move","place","rotate","scale"],ip=n=>`nextvr.game.${n}`,Ar=(n,e,t)=>Math.max(e,Math.min(t,n)),il=n=>Math.round(n*1e4)/1e4,sp={box:new zi(1,1,1),sphere:new wo(.5,24,16),cylinder:new Wr(.5,.5,1,24,1),cone:new Mo(.5,1,24,1),plate:new on(1,1)},Ch=new Rn({visible:!1}),Mh=new Set,Ib=n=>{let e="";for(let t=0;t<n.length;t++)e+=String.fromCharCode(n[t]);return btoa(e)},yh=n=>Ib(new Uint8Array(n.buffer,n.byteOffset,n.byteLength));function rp(n){var t;if(!fe||Mh.has(n)||!((t=window.NativeXR)!=null&&t.gameMesh))return;let e=sp[n];e&&(window.NativeXR.gameMesh(n,yh(e.attributes.position.array),yh(e.attributes.normal.array),yh(new Uint16Array(e.index.array))),Mh.add(n))}var Tt=[],Zi=null,Gn=!1,ga=null,Sh=null,_i="move",Ts="box",Er=0,Kn=!1;var yi=()=>Tt.find(n=>n.id===Zi)||null;function xa(n){n.proxy.position.copy(n.position),n.proxy.rotation.copy(n.rotation),n.proxy.scale.copy(n.scale),n.proxy.updateMatrixWorld(!0),n.outline&&(n.outline.position.copy(n.position),n.outline.rotation.copy(n.rotation),n.outline.scale.copy(n.scale).multiplyScalar(1.04),n.outline.visible=n.id===Zi),Kn=!0}function Ps(n){Zi=n?n.id:null;for(let e of Tt)e.outline&&(e.outline.visible=e.id===Zi);Kn=!0,Tr()}function Rs(n,e,t={}){let i=Rh.includes(n)?n:"box";rp(i);let s={id:t.id||`o${++Er}`,kind:i,name:t.name||`${op(i)} ${Tt.length+1}`,color:t.color||wr[Tt.length%wr.length],position:e.clone(),rotation:new kn(...t.rotation||[0,0,0],"YXZ"),scale:new P(...t.scale||[.4,.4,.4])};if(typeof t.id=="string"){let r=parseInt(t.id.slice(1),10);r>Er&&(Er=r)}return s.proxy=new Ht(sp[i],fe?Ch:new Rn({color:s.color})),s.proxy.userData.objectId=s.id,Ye.add(s.proxy),fe||(s.outline=new bo(new So(new zi(1,1,1)),new Gr({color:16777215})),s.outline.visible=!1,Ye.add(s.outline)),Tt.push(s),xa(s),s}function Db(n){let e=n||yi();if(!e)return!1;let t=Tt.indexOf(e);return t<0?!1:(Tt.splice(t,1),Ye.remove(e.proxy),e.proxy.material!==Ch&&e.proxy.material.dispose(),e.outline&&(Ye.remove(e.outline),e.outline.geometry.dispose()),Zi===e.id&&(Zi=null),Kn=!0,Tr(),!0)}function Ph(){for(let n of Tt)Ye.remove(n.proxy),n.outline&&(Ye.remove(n.outline),n.outline.geometry.dispose());Tt=[],Zi=null,Kn=!0}function Nb(n,e){let t=n||yi();return t?(t.color=e,t.proxy.material!==Ch&&t.proxy.material.color.set(e),Kn=!0,Tr(),!0):!1}function ap(n,e){let t=n||yi();if(!t)return!1;let i=Ar(e,vi.minScale,vi.maxScale);return t.scale.set(i,i,i),xa(t),Tr(),!0}function Ub(n,e,t=null){let i=n||yi();return i?(i.rotation.y=e,t!=null&&(i.rotation.x=Ar(t,-Math.PI/2,Math.PI/2)),xa(i),!0):!1}function op(n){return L(`kind.${n}`)||n}function lp(n){let e=n.position;for(let i of["x","y","z"])Number.isFinite(e[i])||(e[i]=0);e.y=Ar(e.y,0,vi.maxY);let t=Math.hypot(e.x,e.z);t>vi.maxRadius&&(e.x*=vi.maxRadius/t,e.z*=vi.maxRadius/t);for(let i of["x","y","z"])n.scale[i]=Ar(n.scale[i],vi.minScale,vi.maxScale)}function Ob(){return Ye.updateMatrixWorld(!0),JSON.stringify(Tt.map(n=>{let e=n.proxy.matrixWorld.elements;return{k:n.kind,s:n.id===Zi?1:0,c:n.color,m:Array.from(e,il)}}))}var rl=null;function va(){var e;if(!fe||!((e=window.NativeXR)!=null&&e.gameFrame))return;let n=Ob();n!==rl&&(rl=n,window.NativeXR.gameFrame(n))}_s(()=>{!Gn||!Kn||(Kn=!1,va())});function cp(n="sandbox"){var e;if(Gn)return!1;Sh={windows:ye.map(t=>({win:t,hidden:t.hidden})),dockHidden:Qo(),keyboard:tl(),focus:((e=Ko())==null?void 0:e.id)||null};for(let t of ye)t.setHidden(!0);return Mr(!0),br(!0),document.documentElement.classList.add("game-on"),Gn=!0,ga=n,Er=0,kb(n),Lh.reset(),pa.clear(),Dh(),zb(),Ze("game",{active:!0,id:n}),!0}function hp(){var t,i;if(!Gn)return!1;Cs();for(let s of[...ye])(s.id===np||s.id===ma)&&Jt(s);Ph(),fe&&(rl=null,(i=(t=window.NativeXR)==null?void 0:t.gameFrame)==null||i.call(t,"[]")),Gn=!1,Gb(),document.documentElement.classList.remove("game-on");let n=Sh;if(Sh=null,n){let s=new Set(n.windows.map(o=>o.win));for(let o of[...ye])!s.has(o)&&!o.onboarding&&Jt(o);br(n.dockHidden);for(let{win:o,hidden:a}of n.windows)ye.includes(o)&&o.setHidden(a);n.keyboard&&Mr(!1);let r=ye.find(o=>o.id===n.focus);r&&$t(r)}let e=ga;return ga=null,Lh.reset(),Ze("game",{active:!1,id:e}),!0}var Fb=n=>({i:n.id,k:n.kind,n:n.name,c:n.color,p:n.position.toArray().map(il),r:[n.rotation.x,n.rotation.y,n.rotation.z].map(il),s:n.scale.toArray().map(il)});function Cs(){if(!ga)return!1;try{return localStorage.setItem(ip(ga),JSON.stringify({v:1,seq:Er,objects:Tt.map(Fb)})),!0}catch{return!1}}function kb(n){Ph();let e=null;try{e=JSON.parse(localStorage.getItem(ip(n))||"null")}catch{e=null}let t=Array.isArray(e==null?void 0:e.objects)?e.objects:null;if(t&&t.length){Er=e.seq||0;for(let i of t)!i||!Array.isArray(i.p)||i.p.length!==3||Rs(Rh.includes(i.k)?i.k:"box",new P(...i.p),{id:i.i,name:i.n,color:i.c,rotation:i.r,scale:i.s})}else wh();Tt.length||wh(),Ps(Tt.find(i=>i.kind!=="plate")||Tt[0]||null),Kn=!0,va()}function wh(){let n=Rs("plate",new P(0,0,-1.2),{name:L("game.floor"),color:"#2b3242",rotation:[-Math.PI/2,0,0],scale:[8,8,1]});return Rs("box",new P(-.55,.3,-1.5),{scale:[.6,.6,.6],color:wr[0]}),Rs("sphere",new P(.5,.35,-1.7),{scale:[.7,.7,.7],color:wr[2]}),Rs("cylinder",new P(0,.4,-2.2),{scale:[.5,.8,.5],color:wr[3]}),n}var Vn=null;function zb(){let n=document.createElement("div");return n.className="game-tools",n.innerHTML=`
    <div class="gt-sec">${L("game.place")}</div>
    <div class="gt-row">${Rh.map(e=>`<button class="gt-btn" data-place="${e}"><span>${op(e)}</span></button>`).join("")}</div>
    <div class="gt-sec">${L("game.edit")}</div>
    <div class="gt-row gt-tools">
      <button class="gt-btn" data-tool="move" aria-pressed="true">${L("tool.move")}</button>
      <button class="gt-btn" data-tool="rotate">${L("tool.rotate")}</button>
      <button class="gt-btn" data-tool="scale">${L("tool.scale")}</button>
      <button class="gt-btn" data-act="duplicate">${L("game.duplicate")}</button>
      <button class="gt-btn danger" data-act="remove">${L("game.remove")}</button>
    </div>
    <div class="gt-row gt-colors">${wr.map(e=>`<button class="gt-color" data-color="${e}" style="background:${e}" aria-label="${e}"></button>`).join("")}</div>
    <div class="gt-status" data-status></div>
    <div class="gt-row">
      <button class="gt-btn" data-act="reset">${L("game.reset")}</button>
      <button class="gt-btn primary" data-act="exit">${L("game.exit")}</button>
    </div>`,n.addEventListener("click",e=>{let t=e.target.closest("button");if(t){if(t.dataset.place){Ts=t.dataset.place,Eh("place");return}if(t.dataset.tool){Eh(t.dataset.tool);return}if(t.dataset.color){Nb(null,t.dataset.color);return}switch(t.dataset.act){case"duplicate":{let i=yi();if(!i){Xe(L("game.none"));return}let s=Rs(i.kind,i.position.clone().add(new P(.35,0,.15)),{color:i.color,rotation:[i.rotation.x,i.rotation.y,i.rotation.z],scale:i.scale.toArray()});Ps(s),Xe(s.name),Cs();return}case"remove":{let i=yi();if(!i){Xe(L("game.none"));return}let s=i.name;Db(i),Xe(`${s}: ${L("game.removed")}`),Cs();return}case"reset":Ph(),wh(),Ps(Tt[1]||null),va(),Cs();return;case"exit":hp();return}}}),Vn=Zt({id:np,title:L("game.tools"),node:n,w:760,h:560,free:!0,at:{x:0,y:Pt-.02,z:-Math.max(.62,we.winDist)}}),Vn==null||Vn.setCurve(0),Tr(),Vn}function Eh(n){_i=Lb.includes(n)?n:"move";let e=Vn==null?void 0:Vn.el.querySelector(".game-tools");e==null||e.querySelectorAll("[data-tool]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.tool===_i))),e==null||e.querySelectorAll("[data-place]").forEach(t=>t.setAttribute("aria-pressed",String(_i==="place"&&t.dataset.place===Ts))),Tr()}function Tr(){let n=Vn==null?void 0:Vn.el.querySelector(".game-tools");if(!n)return;let e=yi(),t=n.querySelector("[data-status]");t&&(t.textContent=e?`${e.name} \xB7 ${e.scale.x.toFixed(2)} m \xB7 ${Math.round(e.rotation.y*180/Math.PI)}\xB0 \xB7 ${tp()}`:`${L("game.hint")} \xB7 ${tp()}`),n.querySelectorAll(".gt-color").forEach(i=>i.setAttribute("aria-pressed",String(!!e&&e.color===i.dataset.color)))}var tp=()=>L(`tool.${_i}`)||_i,Lh=new Sr;function Bb(){if(ye.some(t=>t.id===ma))return null;Dh();let n=document.createElement("div");n.className="game-menu",n.innerHTML=`
    <div class="gm-t">${L("game.menuTitle")}</div>
    <button class="gm-btn" data-act="continue">${L("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${ke("settings")}<span>${L("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${L("game.exit")}</button>`,n.addEventListener("click",t=>{let i=t.target.closest("[data-act]");if(i){if(i.dataset.act==="exit"){bh(),hp();return}if(i.dataset.act==="settings"){bh(),Ze("game:settings");return}bh()}});let e=Zt({id:ma,title:L("game.menu"),node:n,w:560,h:470,free:!0,at:{x:0,y:Pt,z:-.55}});return e==null||e.setCurve(0),e}function bh(){let n=ye.find(e=>e.id===ma);n&&Jt(n)}var Hb=()=>ye.some(n=>n.id===ma),$i=null;function Vb(){if($i)return $i;let n=document.getElementById("hud");return n?($i=document.createElement("div"),$i.id="gameRing",$i.hidden=!0,$i.innerHTML="<span></span>",n.appendChild($i),$i):null}function Ah(n){let e=Vb();if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var Gb=()=>Ah(0),pa=new Map,bn=new Map,jn=null,Wb=new qt(new P(0,1,0),0),Ih=n=>Ye.worldToLocal(n.clone());function Xb(n,e){var s;let t=((s=oe.hand)==null?void 0:s.id)===n.id?gr(e):Qr(n.aim||[0,0]);Je.updateMatrixWorld(!0),Ye.updateMatrixWorld(!0);let i=new Bi;return i.setFromCamera(new $e(t.x*2-1,1-t.y*2),Je),{x:t.x,y:t.y,ray:i}}function sl(n){if(!Tt.length)return null;let e=n.intersectObjects(Tt.map(t=>t.proxy),!1);return e.length&&Tt.find(t=>t.id===e[0].object.userData.objectId)||null}function Dh(){bn.clear(),jn=null}function up(n,e,t){let i=e.proxy.getWorldPosition(new P),s=new qt().setFromNormalAndCoplanarPoint(Je.getWorldDirection(new P).negate(),i),r=t.ray.ray.intersectPlane(s,new P),o=r?Ih(r):e.position.clone();bn.set(n.id,{id:e.id,mode:_i==="place"?"move":_i,plane:s,offset:e.position.clone().sub(o),start:{x:t.x,y:t.y},yaw:e.rotation.y,pitch:e.rotation.x,size:e.scale.x,moved:!1}),Ps(e)}function dp(n,e){let t=bn.get(n.id);if(!t)return;let i=Tt.find(s=>s.id===t.id);if(!i){bn.delete(n.id);return}if((Math.abs(e.x-t.start.x)>.01||Math.abs(e.y-t.start.y)>.01)&&(t.moved=!0),!!t.moved){if(t.mode==="move"){let s=e.ray.ray.intersectPlane(t.plane,new P);if(!s)return;i.position.copy(Ih(s).add(t.offset))}else if(t.mode==="rotate")i.rotation.y=t.yaw+(e.x-t.start.x)*4.2,i.rotation.x=Ar(t.pitch-(e.y-t.start.y)*3.1,-Math.PI/2,Math.PI/2);else if(t.mode==="scale"){let s=Math.hypot(e.x-t.start.x,e.y-t.start.y),r=e.x-t.start.x-(e.y-t.start.y)>=0?1:-1;ap(i,t.size*(1+r*s*2.4));return}lp(i),xa(i)}}function qb(n,e,t){let i=(ut.width||1200)/(ut.height||800),s=Math.hypot(n.x-e.x,(n.y-e.y)*i),r=Math.atan2(e.y-n.y,e.x-n.x);if(!jn||jn.id!==t.id){jn={id:t.id,d:s,angle:r,size:t.scale.x,yaw:t.rotation.y};return}s>1e-4&&jn.d>1e-4&&ap(t,jn.size*Ar(s/jn.d,.25,4)),Ub(t,jn.yaw+(r-jn.angle))}function Nh(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}function Yb(n,e){let t=(n.hands||[]).filter(l=>{var h;return!((h=n.consumed)!=null&&h.has(l.id))}),i=new Set(t.map(l=>l.id));for(let l of pa.keys())i.has(l)||(pa.delete(l),bn.delete(l));let s=new Map;for(let l of t)s.set(l.id,Xb(l,e));let r=t.filter(l=>l.pinching),o=!1;if(r.length>=2&&yi()){let[l,h]=r.slice(0,2).map(d=>s.get(d.id)),u=yi();if(l&&h&&sl(l.ray)===u&&sl(h.ray)===u){qb(l,h,u),o=!0;for(let d of r.slice(0,2))bn.delete(d.id)}}o||(jn=null);for(let l of t){let h=s.get(l.id),u=pa.get(l.id)||!1;pa.set(l.id,!!l.pinching);let d=!!l.pinching&&!u,m=!l.pinching&&u;if(!(o&&r.includes(l)))if(d){if(zf(h.x,h.y)){bn.delete(l.id);continue}let g=sl(h.ray);g?up(l,g,h):_i==="place"?fp(h):Ps(null)}else m?(bn.has(l.id)&&Cs(),bn.delete(l.id)):l.pinching&&bn.has(l.id)&&dp(l,h)}let a=!o&&Nh(r),c=Lh.update(e,{left:a,right:a});Ah(c.progress),c.opened&&Bb(),c.closed&&!Hb()&&Ah(0)}function fp(n){let e=n.ray.ray.intersectPlane(Wb,new P),t=e&&Math.hypot(e.x,e.z)<=vi.maxRadius?e:n.ray.ray.at(1.2,new P),i=Ih(t);i.y=Math.max(i.y,0);let s=Ts==="plate"?1.4:.5,r=Rs(Ts,i.clone().setY(i.y+(Ts==="plate"?.01:s/2)),{scale:[s,s,s],rotation:Ts==="plate"?[-Math.PI/2,0,0]:[0,0,0]});return lp(r),xa(r),Ps(r),Eh("move"),Cs(),Xe(r.name),r}je("phonehands",n=>{Gn&&Yb(n,performance.now())});je("pinchcancel",()=>{Dh()});if(!fe){let n=null,e=s=>({x:s.clientX/window.innerWidth,y:s.clientY/window.innerHeight,ray:null}),t=s=>{let r=e(s);Je.updateMatrixWorld(!0),Ye.updateMatrixWorld(!0);let o=new Bi;return o.setFromCamera(new $e(r.x*2-1,1-r.y*2),Je),r.ray=o,r};window.addEventListener("pointerdown",s=>{var a,c;if(!Gn||(c=(a=s.target).closest)!=null&&c.call(a,"button,input,.win-shell"))return;let r=t(s),o=sl(r.ray);o?(up({id:"preview"},o,r),n=o):_i==="place"?fp(r):Ps(null)}),window.addEventListener("pointermove",s=>{!Gn||!bn.has("preview")||dp({id:"preview"},t(s))});let i=()=>{bn.has("preview")&&(Cs(),bn.delete("preview")),n=null};window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)}je("recenter",()=>{Gn&&(Kn=!0,va())});function pp(){if(Gn){rl=null;for(let n of new Set(Tt.map(e=>e.kind)))Mh.delete(n);for(let n of new Set(Tt.map(e=>e.kind)))rp(n);Kn=!0,va()}}var mp={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function gp(n){return mp[n]||mp.landscape}function xp(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return gp(n==null?void 0:n.shape)}function $b(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function _a(n){let e=$b(xp(n));return{w:e.w+2,h:e.h+116}}var Zb=400,Sp=3;function Oh(n,e){if(e!=null&&e.shape)return e.shape;let t=Rt.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||(t!=null&&t.game?"landscape":"portrait")}var ot={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:Sp,sdk:0,recents:[],library:0,launch:null},Rt={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},Mn=new Map,Uh=new Set,vp=0,_p="";var Fh=n=>ot.sessions.find(e=>e.pkg===n)||null,Jb=()=>ot.sessions.filter(n=>n.alive),jb=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function bi(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{Xe(L("appCommandFailed"))}}function Kb(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(ot.sessions=Array.isArray(e.sessions)?e.sessions:[],ot.shizuku=e.shizuku||ot.shizuku,ot.input=e.input||ot.input,ot.capacity=e.capacity||Sp,ot.recents=Array.isArray(e.recents)?e.recents:[],ot.sdk=e.sdk||ot.sdk,ot.launch=e.launch||null,ot.diagnostics=e.diagnostics||ot.diagnostics,e.icons!=null&&e.icons!==Rt.icons&&(Rt.icons=e.icons,Rt.loaded=!1),Qb(),Ze("appsState"))}function Qb(){let n=new Set;for(let e of ot.sessions)if(e.state!=="stopped"){if(e.state==="suspended"){yp(e.pkg,!0);continue}n.add(e.pkg),Mn.has(e.pkg)?wp(e):eM(e)}for(let e of[...Mn.keys()])n.has(e)||yp(e,!0);al(!0)}function eM(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?L("appMirrorBadge"):L("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(d,m,g)=>{let x=document.createElement("button");return x.className="app-key",x.title=m,x.setAttribute("aria-label",m),x.innerHTML=ke(g),x.onclick=()=>bi({cmd:"key",pkg:n.pkg,key:d}),x},o=document.createElement("button");o.className="app-key",o.title=L("appKeyboard"),o.dataset.act="keys",o.innerHTML=ke("keyboard"),o.onclick=()=>rM(n.pkg);let a=document.createElement("button");a.className="app-key",a.dataset.act="rotate",a.title=L("appRotate"),a.setAttribute("aria-label",L("appRotate")),a.innerHTML=ke("rotate"),a.onclick=()=>iM(n.pkg),t.append(i,s,r("back",L("appBack"),"back"),r("home",L("appHome"),"top"),r("recents",L("appRecents"),"appGrid"),o,a);let c=document.createElement("div");c.className="app-surface",c.dataset.nativeApp=n.pkg,c.dataset.aspect=String(n.display&&n.display.aspect||16/9),c.dataset.shape=Oh(n.pkg,n);let l=document.createElement("div");l.className="app-state",e.append(t,c),c.append(l);let h=_a(n),u=Zt({id:jb(n.pkg),title:n.title,node:e,w:h.w,h:h.h});Mn.set(n.pkg,{win:u,surface:c,status:l,badge:i,session:n}),wp(n)}function wp(n){var r,o;let e=Mn.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?L("appMirrorBadge"):L("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:L("appStarting"),creating:L("appStarting"),launching:L("appStarting"),running:"",failed:n.error?nM(n):L("appFailed")};n.mode==="display"&&((r=ot.shizuku)!=null&&r.binding||!((o=ot.shizuku)!=null&&o.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=L("appWaitingService"),i.creating=L("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=L("appMirrorStarting"),i.creating=L("appMirrorStarting"),i.launching=L("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&tM.has(n.error))){let a=document.createElement("button");a.className="app-state-btn",a.textContent=L("appOpenOnPhone"),a.onclick=()=>bi({cmd:"phone",pkg:n.pkg}),e.status.appendChild(a)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var tM=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function nM(n){let e={shizuku_unavailable:L("appNeedShizuku"),shizuku_denied:L("appShizukuDenied"),shizuku_blocked:L("appShizukuBlocked"),display_refused:L("appDisplayRefused"),display_failed:L("appDisplayFailed"),no_launcher_activity:L("appNoLauncher"),consent_denied:L("appConsentDenied"),mirror_stopped:L("appMirrorStopped"),mirror_failed:L("appMirrorFailed"),mirror_refused:L("appMirrorFailed"),projection_failed:L("appMirrorFailed"),display_empty:L("appDisplayEmpty"),app_not_running:L("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?L("appSurfaceFailed"):e[t]||`${L("appFailed")}: ${t}`}function yp(n,e){let t=Mn.get(n);t&&(Mn.delete(n),e&&Uh.add(n),Jt(t.win),Uh.delete(n))}je("wins",()=>{for(let n of[...Mn.keys()]){let e=Mn.get(n);Uh.has(n)||ye.includes(e.win)||(Mn.delete(n),bi({cmd:"close",pkg:n}))}Ze("appsState")});function Ep(n){n&&bi({cmd:"open",pkg:n,shape:Oh(n,Fh(n))})}function iM(n){var o;let e=Mn.get(n),t=Fh(n),s=((e==null?void 0:e.surface.dataset.shape)||Oh(n,t))==="portrait"?"landscape":"portrait",r=_a({shape:s,display:(t==null?void 0:t.display)||((o=e==null?void 0:e.session)==null?void 0:o.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),bi({cmd:"shape",pkg:n,shape:s}),al(!0)}function bp(){bi({cmd:"shizuku"})}function sM(){Rt.loaded=!1,bi({cmd:"refresh"})}function rM(n){yn(!0,{nativeId:"app:"+n})}function Ap(n){var e,t;if(Rt.loaded&&!n)return Rt;Rt.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,Rt.query,Rt.showSystem),s=JSON.parse(i||'{"apps":[]}');Rt.apps=Array.isArray(s.apps)?s.apps:[],Rt.shown=s.shown||Rt.apps.length,Rt.total=s.total||Rt.apps.length,Rt.icons=s.icons||Rt.icons}catch{Rt.apps=[]}return Ze("appsState"),Rt}function al(n){let e=[];for(let[i,s]of Mn)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===_p||(_p=t,bi({cmd:"sync",windows:e}))}function aM(){vp||(vp=setInterval(()=>{Mn.size&&al(!1)},Zb))}je("wins",()=>al(!0));var Mp={install:()=>L("shizukuInstall"),start:()=>L("shizukuStart"),update:()=>L("shizukuUpdate"),ask:()=>L("shizukuAsk"),denied:()=>L("shizukuDenied"),rebind:()=>L("shizukuRebind"),ready:()=>L("shizukuReady"),unknown:()=>L("shizukuUnknown")},oM=new Set(["hosted","permission","capture"]);function lM(){let n=ot.shizuku||{};return oM.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function Tp(){var h;let n=ot.shizuku||{},e=lM();if(e==="hosted"&&(n.ready||n.binding))return null;let t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>L("routeHosted"),permission:()=>L("routePermission"),capture:()=>L("routeCapture")};s.textContent=(r[e]||r.capture)();let o=document.createElement("small");if(o.textContent=(Mp[n.state]||Mp.unknown)(),s.appendChild(o),e==="capture"&&!((h=ot.input)!=null&&h.accessibility)){let u=document.createElement("small");u.textContent=L("appCaptureInput"),s.appendChild(u)}else if(n.detail){let u=document.createElement("small");u.textContent=n.detail,s.appendChild(u)}t.append(i,s);let a=document.createElement("button");a.className="az-btn",n.ask?(a.textContent=L("shizukuGrant"),a.onclick=()=>bp()):(a.textContent=L("shizukuRecheck"),a.onclick=()=>{sM(),bp()}),t.appendChild(a);let c=document.createElement("button");c.className="az-btn ghost",c.textContent=L("appSelfTest"),c.onclick=async()=>{var u;c.disabled=!0;try{await bi({cmd:"selftest"});let d=(u=ot.diagnostics)==null?void 0:u.selfTest;d&&Xe(d.ok?L("appSelfTestOk"):L("appSelfTestFailed"))}catch{Xe(L("appCommandFailed"))}finally{c.disabled=!1}},t.appendChild(c);let l=document.createElement("button");return l.className="az-btn ghost",l.textContent=L("appDiagnostics"),l.onclick=()=>{let u=t.querySelector(".az-caps");if(u){u.remove();return}let d=document.createElement("pre");d.className="az-caps",d.textContent=cM(),d.onclick=()=>hM(d.textContent),t.appendChild(d)},t.appendChild(l),t}function cM(){var i;let n=ot.shizuku||{},e=ot.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||ot.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...ot.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=ot.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||ot.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function hM(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&Xe(L("appDiagnosticsCopied"));return}catch{}}var Qn=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Rp(n){let e=Fh(n.pkg),t=`<span class="nm">${Qn((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${Qn(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${Qn(e.state==="suspended"?L("appMinimized"):L("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${Qn(L("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${Qn(n.pkg)}" data-session="${e?Qn(e.state):""}" data-pkg="${Qn(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${Qn(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${Qn(L("androidApps"))}">${ke("device")}</span>`+r+s+`</span><span class="lib-label">${Qn(n.label||n.pkg)}</span></button>`}function Cp(n){let e=Mn.get(n);e&&$t(e.win)}function Pp(){return Jb().length}function Lp(){return Rt.apps}function Ip(n){return ot.recents.includes(n)}function Dp(n){return ot.recents.indexOf(n)}function Np(){fe&&(window.nextvrApps=Kb,aM(),je("lang",()=>{Rt.loaded=!1,Ze("appsState")}))}var cl="nextvr-xr-game",ya="nextvr-xr-menu",mt={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},Ji=[],uM=null,Bh=!1,Op=()=>mt,Fp=()=>Ji,Hh=()=>mt.hosting,ba=()=>mt.runtime==="ready",kp=()=>mt.handMode,dM=()=>{var n;return((n=mt.game)==null?void 0:n.package)||null};function wi(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function Up(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(mt,e),ll=null,mt.hosting&&((t=mt.game)!=null&&t.package)?mM(mt.game):gM(),Ze("xr",{...mt,games:Ji}))}function fM(n){let e;try{e=JSON.parse(n)}catch{e=null}Ji=Array.isArray(e==null?void 0:e.games)?e.games:[],uM=(e==null?void 0:e.problem)||null,Bh=!0,Ze("xr",{...mt,games:Ji})}function zp(){var n,e;if(!(!fe||window.nextvrXr)){window.nextvrXr=Up,window.nextvrXrLibrary=fM;try{Up(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}kh(),je("lang",()=>{kh(),Ze("xr",{...mt,games:Ji})})}}function kh(){wi({cmd:"library"})}function Bp(){Bh=!1,wi({cmd:"refresh"}),kh()}function Hp(n){!n||mt.hosting||Th()||wi({cmd:"open",package:n})}function Vh(){mt.hosting&&wi({cmd:"close"})}function pM(){mt.hosting&&wi({cmd:"minimize"})}function Vp(){mt.hosting&&wi({cmd:"restore"})}function Gh(){wi({cmd:"runtime"})}function Gp(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}mt.handMode=e,Ze("xr",{...mt,games:Ji})}function Wh(){wi({cmd:"selftest"})}function Wp(){return Ji.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function Xp(n){let e=n.game,t=`<span class="nm">${Mi(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=dM()===e.package?`<span class="lib-open">${Mi(L("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Mi(e.describe||L("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Mi(e.package)}" aria-label="${Mi(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Mi(L("xrTitle"))}">${ke("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Mi(e.label||e.package)}</span></button>`}var Mi=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function qp(){if(ba()||!Bh||!Ji.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=mt.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=mt.runtimeBundled?L("xrMissing"):L("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=mt.summary||mt.problem||L("xrSummaryMissing"),t.appendChild(i),n.append(e,t),mt.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=L("xrInstall"),r.onclick=()=>{Gh(),Xe(L("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=L("xrSelfTest"),s.onclick=()=>Wh(),n.appendChild(s),n}var Si=!1,zh=null;function mM(n){var h;if(Si||Th())return;zh={windows:ye.map(u=>({win:u,hidden:u.hidden})),dockHidden:Qo(),keyboard:tl(),focus:((h=Ko())==null?void 0:h.id)||null};for(let u of ye)u.setHidden(!0);Mr(!0),br(!0),document.documentElement.classList.add("game-on","xr-on"),Si=!0,Xh.reset(),ol(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=L("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=mt.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let o=document.createElement("span");o.className="app-bar-spacer";let a=document.createElement("button");a.className="app-key",a.title=L("appMinimize"),a.setAttribute("aria-label",L("appMinimize")),a.innerHTML=ke("chevronDown"),a.onclick=()=>pM();let c=document.createElement("button");c.className="app-key",c.title=L("close"),c.setAttribute("aria-label",L("close")),c.innerHTML=ke("x"),c.onclick=()=>Vh(),t.append(i,o,a,c),e.append(t,s);let l=_a({shape:"landscape",display:{w:r.w,h:r.h}});Zt({id:cl,title:n.label||n.package,node:e,w:l.w,h:l.h})}function gM(){if(!Si)return;Si=!1,ll=null;for(let e of[...ye])(e.id===cl||e.id===ya)&&Jt(e);document.documentElement.classList.remove("game-on","xr-on");let n=zh;if(zh=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...ye])!e.has(i)&&!i.onboarding&&Jt(i);br(n.dockHidden);for(let{win:i,hidden:s}of n.windows)ye.includes(i)&&i.setHidden(s);n.keyboard&&Mr(!1);let t=ye.find(i=>i.id===n.focus);t&&$t(t)}Xh.reset(),ol(0)}je("wins",()=>{!Si||!window.nextvrXr||ye.some(n=>n.id===cl)||Vh()});var Xh=new Sr,xM=()=>Si&&ye.some(n=>n.id===ya);function vM(){if(!Si||ye.some(i=>i.id===ya)||!mt.game)return;let n=mt.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Mi(n.label||n.package)}</div>
    <p class="gm-sub">${Mi(L("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${L("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${ke("settings")}<span>${L("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${L("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(_M(),s.dataset.act==="exit"?Vh():s.dataset.act==="settings"&&Ze("game:settings"))});let t=Zt({id:ya,title:L("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:Pt,z:-.55}});t==null||t.setCurve(0)}function _M(){let n=ye.find(e=>e.id===ya);n&&Jt(n)}function ol(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var ll=null;function yM(){let n=Si?Wf(oe.x,oe.y):null,e=!!n&&n.win.id!==cl&&!n.win.onboarding;e!==ll&&(ll=e,wi({cmd:"hands-ui",blocked:e}))}je("phonehands",n=>{if(!Si)return;yM();let e=(n.hands||[]).filter(s=>s.pinching),t=Nh(e),i=Xh.update(performance.now(),{left:t,right:t});ol(i.progress),i.opened&&vM(),i.closed&&!xM()&&ol(0)});var me=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var bM=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),MM=n=>{if(fe)return kt("browser-extra",L("browser"),n);try{window.open(n,"_blank","noopener")}catch{Xe("Bloqueado pelo navegador")}};function kt(n,e,t,i){let s=me("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=me("div","row");r.style.cssText="padding:12px 14px;gap:10px;background:rgba(255,255,255,.04);border-bottom:1px solid var(--line)";let o=me("input","fld");o.value=t,o.placeholder=L("search");let a=me("button","go",ke("enter"));a.setAttribute("aria-label",L("open")),a.title=L("open");let c=me("button","go",ke("external"));c.setAttribute("aria-label",L("open")),c.title=L("open"),c.style.background="rgba(255,255,255,.12)",c.style.color="#fff",r.append(o,a,c);let l=me("div","warn",i||"");l.style.cssText+="margin:12px 14px 0;display:none";let h=me("div");h.style.cssText="flex:1;min-height:0;position:relative";let u=me(fe?"div":"iframe");fe&&(u.dataset.nativeBrowser=n,u.style.cssText="width:100%;height:100%;background:#fff"),u.setAttribute("referrerpolicy","no-referrer"),u.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),h.appendChild(u),s.append(r,l,h);let d=m=>{let g=(m||"").trim();if(g){if(/^https?:\/\//i.test(g)||(g=/\.\w{2,}($|\/)/.test(g)?"https://"+g:"https://duckduckgo.com/?q="+encodeURIComponent(g)),o.value=g,fe){u.dataset.url=g,l.style.display="none";return}u.src=g,l.style.display="block",l.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};return a.onclick=()=>d(o.value),o.addEventListener("keydown",m=>{m.key==="Enter"&&d(o.value)}),o.addEventListener("focus",()=>yn(!0,o)),c.onclick=()=>MM(o.value),d(t),Zt({id:n,title:e,node:s})}var hl=[];function Zp(){let n=me("div","pad"),e=me("div");e.innerHTML=`<h2>${L("gallery")}</h2><p class="sub">${L("photosHelp")}</p>`;let t=me("button","go",L("pickPhotos")),i=me("input");i.type="file",i.accept="image/*",i.multiple=!0,i.style.display="none";let s=me("div","grid4");s.style.marginTop="20px";let r=me("div");r.style.cssText="margin-top:18px";let o=()=>{if(s.innerHTML="",!hl.length){s.innerHTML=`<p class="sub" style="grid-column:1/-1">${L("noPhotos")}</p>`;return}hl.forEach((a,c)=>{let l=me("button","thumb");l.innerHTML=`<img src="${a}" alt="">`,l.onclick=()=>{r.innerHTML=`<img src="${a}" style="width:100%;border-radius:16px">`},s.appendChild(l)})};return t.onclick=()=>i.click(),i.onchange=()=>{for(let a of i.files)hl.push(URL.createObjectURL(a));o(),Xe(hl.length+" fotos")},o(),n.append(e,t,i,s,r),n.append(me("p","note","Na web, o Android pede as fotos pelo seletor do sistema \u2014 \xE9 a forma correta e n\xE3o precisa de permiss\xE3o extra. No app Android use READ_MEDIA_IMAGES e liste direto no MediaStore.")),Zt({id:"gallery",title:L("gallery"),node:n})}function Vt(n,e,t){let i=me("div","opt");return i.append(me("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function qh(n,e){let t=me("button","sw");return t.dataset.on=we[n]?"1":"0",t.onclick=()=>{we[n]=we[n]?0:1,t.dataset.on=we[n]?"1":"0",pr(),e&&e(we[n])},t}function Ls(n,e,t,i,s){let r=me("input");return r.type="range",r.min=e,r.max=t,r.step=i,r.value=we[n],r.oninput=()=>{we[n]=+r.value,pr(),s&&s(we[n])},r}function Jp(n){n.innerHTML="";let e=Op(),t=n,i=me("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${L(ba()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=me("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!ba()){let a=me("button","go",L("xrInstall"));a.onclick=()=>{Gh()},s.append(a)}let r=me("button","go",L("xrSelfTest"));r.onclick=()=>Wh(),s.append(r);let o=me("div","seg");for(let[a,c,l]of[["controllers",L("xrModeControllers"),L("xrModeControllersSub")],["hands",L("xrModeHands"),L("xrModeHandsSub")]]){let h=me("button",null,c);h.title=l,h.setAttribute("aria-pressed",String(kp()===a)),h.onclick=()=>{Gp(a),[...o.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},o.appendChild(h)}t.append(Vt(L("xrHandMode"),L("xrHandModeSub"),o),s),t.append(me("p","note",L("xrHandModeNote"))),!ba()&&!e.runtimeBundled&&t.append(me("p","note",L("xrBundlingNote")))}function Sa(){let n=me("div");n.style.cssText="display:flex;flex-direction:column;height:100%";let e=me("div","tabs");e.style.padding="18px 24px 0";let t=me("div","pad");t.style.paddingTop="6px",n.append(e,t);let i=[[L("general"),()=>{t.innerHTML=`<h2>${L("general")}</h2><p class="sub">Next VR \xB7 shell XR para Android</p>`;let o=me("div","card"),a=me("button","seg-btn",Oo(we.lang||"pt").label);a.onclick=()=>{let c=Zt({id:"language-pick",title:L("langTitle"),w:880,h:660,node:rm(we.lang||"pt",l=>{Wc(l),Xe(L("langChanged")),r(),Jt(c)},!0)})},o.append(Vt(L("language"),"Mesma tela do primeiro uso",a)),o.append(Vt("FPS","Mostrar contador",qh("showFps"))),t.append(o),t.append(me("p","note","Shizuku: abrir apps Android instalados s\xF3 existe no app nativo. Nesta vers\xE3o web o navegador n\xE3o tem como iniciar outro app."))}],[L("hands"),()=>{t.innerHTML=`<h2>${L("hands")}</h2><p class="sub">C\xE2mera traseira, MediaPipe.</p>`;let o=me("div","card");o.append(Vt(L("on"),"\xDAnica entrada da interface VR",me("span","note","Sempre ativo"))),o.append(Vt(L("sens"),"MediaPipe nativo \xB7 c\xE2mera traseira",me("span","note","2 m\xE3os \xB7 21 landmarks"))),o.append(Vt("Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",qh("handDraw"))),o.append(Vt("Pinch","Entrada nativa est\xE1vel com histerese",me("span","note","0.30 / 0.48"))),o.append(Vt("Detector","MediaPipe Tasks Vision, 2 m\xE3os por frame",me("span","note","NextVR"))),t.append(o)}],[L("windows"),()=>{t.innerHTML=`<h2>${L("windows")}</h2><p class="sub">As janelas ficam fixas no ambiente.</p>`;let o=me("div","card");o.append(Vt(L("curve"),"1 = encara o centro; menor = mais aberta",Ls("winCurve",0,1,.05))),o.append(Vt("Inclina\xE7\xE3o","Ajuste vertical ao subir/descer",Ls("winTilt",0,1.5,.05))),o.append(Vt(L("scale"),"Tamanho das janelas",Ls("winScale",.6,1.6,.05))),o.append(Vt(L("dist"),"Dist\xE2ncia do arco",Ls("winDist",fe?.6:1.5,fe?1.8:3.4,.05))),o.append(Vt(L("win360"),L("win360k"),Ls("win360K",.2,1.15,.05))),o.append(Vt(L("win360All"),"O bot\xE3o 360\xB0 na barra da janela troca por janela",qh("win360"))),t.append(o)}],[L("dock"),()=>{t.innerHTML=`<h2>${L("dock")}</h2><p class="sub">No modo paisagem a dock chega mais perto.</p>`;let o=me("div","card");o.append(Vt(L("size"),null,Ls("dockSize",.7,1.5,.05))),o.append(Vt(L("dist"),null,Ls("dockDist",.7,1.5,.05))),t.append(o)}],[L("env"),()=>{t.innerHTML="",t.append(me("h2",null,L("env"))),t.append(me("p","sub","Passthrough da c\xE2mera ou um panorama 360\xB0 em volta de voc\xEA."));let o=me("div","grid3");for(let a of rf()){let c=me("button","env"+(a.thumb?" env-pano":""));c.style.background=a.thumb?`url('${a.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",c.innerHTML=`<span>${a.name}</span>`,c.setAttribute("aria-pressed",we.env===a.id),c.onclick=()=>{Xc(a.id),[...o.children].forEach(l=>l.setAttribute("aria-pressed","false")),c.setAttribute("aria-pressed","true")},o.appendChild(c)}t.append(o)}],[L("perf"),()=>{t.innerHTML=`<h2>${L("perf")}</h2><p class="sub">Celular esquentando? Baixe a qualidade.</p>`;let o=me("div","card"),a=me("div","seg");for(let[c,l]of[["low","Baixa"],["auto","Autom\xE1tica"],["high","Alta"]]){let h=me("button",null,l);h.setAttribute("aria-pressed",we.quality===c),h.onclick=()=>{we.quality=c,pr(),Ze("quality"),[...a.children].forEach(u=>u.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true")},a.appendChild(h)}o.append(Vt(L("quality"),"Resolu\xE7\xE3o de renderiza\xE7\xE3o",a)),t.append(o),t.append(me("p","note","O hand tracking roda na pr\xF3pria cad\xEAncia (single-flight, sem fila), separado do render. Ative o contador de FPS para ver as duas taxas: render e tracking."))}],[L("xrTitle"),()=>{t.innerHTML=`<h2>${L("xrTitle")}</h2><p class="sub">${L("xrSub")}</p><div class="card" data-xr-page></div>`,Jp(t.querySelector("[data-xr-page]"))}]],s=0;function r(){e.innerHTML="",i.forEach(([o],a)=>{let c=me("button",null,o);c.setAttribute("aria-selected",a===s),c.onclick=()=>{s=a,r()},e.appendChild(c)}),i[s][1]()}return r(),Zt({id:"settings",title:L("settings"),node:n})}var jp="nextvr.store.installed.v1",Kp="nextvr.store.favs.v1",Qp="nextvr.lib.recent.v1",Zh=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},ti=Zh(jp),Is=Zh(Kp),Ds=Zh(Qp),fl=()=>{try{localStorage.setItem(jp,JSON.stringify(ti)),localStorage.setItem(Kp,JSON.stringify(Is)),localStorage.setItem(Qp,JSON.stringify(Ds))}catch{}},Ki={},wa=[{id:"vrfs",name:"VRFS",label:"VRFS",cat:"Games \xB7 Sports \xB7 Futebol",img:"https://i.ytimg.com/vi/FxkDg2NGzqw/hqdefault.jpg",bg:"linear-gradient(160deg,#1d7a4b,#0c3a2b)",badge:'<span style="background:#e11d2e;border-radius:10px;padding:10px 24px;font-size:32px;font-weight:900;box-shadow:0 4px 18px #0009">VRFS</span>',mark:'<span style="font-size:34px;font-weight:900;font-style:italic;letter-spacing:-1px;text-shadow:0 2px 8px #0008">VRFS</span>'},{id:"minecraft",name:"Minecraft VR",label:"MINECRAFT",cat:"Games \xB7 Sandbox \xB7 Aventura",img:"https://minecraft.wiki/images/thumb/MC_key_art.png/800px-MC_key_art.png",bg:"linear-gradient(180deg,#6cb04a 0 30%,#7a5230 30%)",badge:"",mark:'<span style="font-size:23px;font-weight:900;letter-spacing:1px;text-shadow:0 2px 0 #222">MINECRAFT</span>'},{id:"roblox",name:"Roblox VR",label:"ROBLOX",cat:"Games \xB7 Social \xB7 Multiplayer",img:"",phones:!0,bg:"linear-gradient(145deg,#23232c,#101014)",badge:"",mark:'<span style="display:flex;align-items:center;gap:8px"><span style="width:34px;height:34px;background:#fff;border-radius:8px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:13px;height:13px;background:#c81e2b;border-radius:3px"></span></span><span style="font-size:24px;font-weight:900">ROBLOX</span></span>'},{id:"brawl",name:"Brawl Stars VR",label:"BRAWL STARS",cat:"Games \xB7 A\xE7\xE3o \xB7 Multiplayer",img:"https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/790/hero_bg_brawlstars.a385872a.webp",bg:"linear-gradient(115deg,#ffd02e 0 50%,#1280ff 50%)",badge:"",mark:'<span style="font-size:21px;font-weight:900;color:#111;text-shadow:0 1px 0 #fff">BRAWL<br>STARS \u2605</span>'}],pl=n=>wa.find(e=>e.id===n),em=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">NETFLIX</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"pluto",name:"pluto tv",bg:"linear-gradient(145deg,#34343a,#111115)",html:'<span class="lx-pluto">pluto<i>tv</i></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X Twitter",label:"Twitter",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],SM=["netflix","youtube","vrfs","tiktok","minecraft","roblox","brawl","discord","twitch","prime","pluto","whatsapp","instagram","x","facebook","telegram","spotify","browser","store","gallery","settings"],Rr=n=>{let e=ye.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null},wM={youtube:()=>kt("youtube","YouTube","https://m.youtube.com/"),browser:()=>kt("browser",L("browser"),"https://duckduckgo.com/"),store:()=>tm(),gallery:()=>Zp(),settings:()=>Sa(),discord:()=>kt("discord","Discord","https://discord.com/app"),netflix:()=>kt("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>kt("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>kt("twitch","Twitch","https://www.twitch.tv/"),prime:()=>kt("prime","prime video","https://www.primevideo.com/"),pluto:()=>kt("pluto","pluto tv","https://pluto.tv/"),whatsapp:()=>kt("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>kt("instagram","Instagram","https://www.instagram.com/"),x:()=>kt("x","X Twitter","https://x.com/"),facebook:()=>kt("facebook","Facebook","https://www.facebook.com/"),telegram:()=>kt("telegram","Telegram","https://web.telegram.org/"),spotify:()=>kt("spotify","Spotify","https://open.spotify.com/")},ji="home",EM=[["home","Home"],["games","Games"],["apps","Apps"],["horizon","Horizon+"],["wish","Wish"]];function AM(){let n=()=>'<div style="width:96px;height:172px;background:#14141b;border-radius:10px;border:1px solid #383845;padding:9px;display:flex;flex-direction:column;gap:6px"><div style="height:9px;background:#33333f;border-radius:4px"></div><div style="height:9px;background:#33333f;border-radius:4px;width:70%"></div><div style="margin-top:auto;height:46px;background:linear-gradient(145deg,#c81e2b,#6f0f18);border-radius:7px"></div></div>';return`<div style="display:flex;gap:10px">${n()}${n()}${n()}</div>`}function TM(n){let e=n.img?`<img class="cov" src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",t=n.phones?AM():n.badge||"";return`<div class="st-cover" style="background:${n.bg}">${e}<div class="art">${t}</div>`+(ti.includes(n.id)?'<span class="st-inst">INSTALADO</span>':"")+`<span class="st-vr">VR</span><span class="st-clabel">${n.label}</span></div>`}function RM(n){let e=n.img?`<img src="${n.img}" alt="" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"",t=n.id==="roblox"?'<span style="width:30px;height:30px;background:#fff;border-radius:7px;transform:rotate(-8deg);display:grid;place-items:center"><span style="width:12px;height:12px;background:#c81e2b;border-radius:3px"></span></span>':n.id==="vrfs"?"":`<span style="font-weight:900;font-size:13px;text-align:center;line-height:1.1">${n.label}</span>`;return`<span class="st-thumb" style="background:${n.bg}">${e}${t}</span>`}function Yp(n){let e=ti.includes(n.id),t=Ki[n.id],i=t!==void 0,s=Is.includes(n.id),r=e?`<button class="st-btn" data-open="${n.id}">ABRIR</button><button class="st-btn" data-rm="${n.id}">REMOVER</button>`:`<button class="st-btn" data-dl="${n.id}" ${i?"disabled":""}>${i?"BAIXANDO "+Math.round(t)+"%":"ADICIONAR \xC0 BIBLIOTECA"}</button>`;return`<article class="st-card" data-card="${n.id}">${TM(n)}
    <div class="st-name">${n.name}</div><div class="st-meta">${n.cat}</div>
    <div class="st-sub">${e?"Na biblioteca de apps":"Toque para ver e baixar"}</div>
    <div class="st-row" style="justify-content:flex-end"><button class="st-heart${s?" on":""}" data-fav="${n.id}" aria-label="Favorito">${ke("heart")}</button></div>
    <div class="st-row">${r}</div></article>`}function CM(){let n=me("div","st"),t=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${EM.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${ji===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${ke("user")}</button><button class="st-x" data-x aria-label="Fechar">${ke("x")}</button></div>`;if(ji==="apps")t+=`<p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`;else if(ji==="horizon")t+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else if(ji==="wish"){let i=wa.filter(s=>Is.includes(s.id));t+=i.length?`<div class="st-sec"><h3>Lista de desejos</h3></div><div class="st-cards">${i.map(Yp).join("")}</div>`:'<p class="st-note">Selecione o \xEDcone de favorito de um jogo para salv\xE1-lo aqui.</p>'}else{let i=wa.map((o,a)=>`<button class="st-ri" data-rank="${o.id}">${RM(o)}
      <span><span class="st-rk">${a+1}. ${o.name}</span><div class="st-cat">${o.cat}</div>
      <div class="st-st">${ti.includes(o.id)?"Na biblioteca de apps":"Toque para ver e baixar"}</div></span></button>`).join(""),s=wa.map(Yp).join("");t+=`<div class="st-rank">${i}</div><div class="st-sec"><h3>${ji==="games"?"Todos os jogos":"Jogos para voc\xEA"}</h3>`+(ji==="home"?"<button data-all>Ver todos</button>":"")+`</div><div class="st-cards">${s}</div>`}return n.innerHTML=t,n.addEventListener("click",i=>{var o;let s=a=>i.target.closest(a),r;if(r=s("[data-tab]")){ji=r.dataset.tab,es();return}if(s("[data-x]")){let a=ye.find(c=>c.id==="store");a&&Jt(a);return}if(s("[data-ava]")){Xe("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-all]")){ji="games",es();return}if(s("[data-openlib]")){nm();return}if(r=s("[data-rank]")){(o=n.querySelector(`[data-card="${r.dataset.rank}"]`))==null||o.scrollIntoView({behavior:"smooth",block:"center"});return}if(r=s("[data-fav]")){let a=r.dataset.fav;Is=Is.includes(a)?Is.filter(c=>c!==a):[...Is,a],fl(),es();return}if(r=s("[data-dl]")){LM(r.dataset.dl);return}if(r=s("[data-rm]")){IM(r.dataset.rm);return}if(r=s("[data-open]")){let a=pl(r.dataset.open);Xe(`Abrindo ${a.name}\u2026 (demonstra\xE7\xE3o)`),dl(a.id);return}}),n}function es(){var t;let n=Rr("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(CM()),n.querySelector(".st").scrollTop=e}function PM(n){let e=Rr("store");e&&e.querySelectorAll(`[data-dl="${n}"]`).forEach(t=>{t.textContent="BAIXANDO "+Math.round(Ki[n]||0)+"%"})}function tm(){let n=ye.find(i=>i.id==="store");if(n)return es(),$t(n),n;let e=me("div");e.style.cssText="height:100%";let t=Zt({id:"store",title:"Store",node:e});return es(),t}function LM(n){if(Ki[n]!==void 0||ti.includes(n))return;Ki[n]=0,es();let e=pl(n);Xe("Baixando "+e.name+"\u2026");let t=setInterval(()=>{if(Ki[n]=Math.min(100,Ki[n]+6+Math.random()*11),Ki[n]<100){PM(n);return}clearInterval(t),delete Ki[n],ti.includes(n)||ti.push(n),dl(n,!0),fl(),es(),Wn(),Xe(e.name+" foi para a biblioteca de apps com sucesso")},170)}function IM(n){ti=ti.filter(e=>e!==n),Ds=Ds.filter(e=>e!==n),fl(),es(),Wn(),Xe(pl(n).name+" removido da biblioteca")}var ul="recent",ei="all",Ma="",Yh=["all","games","apps","recent"],$p={all:"Todas",games:"Jogos",apps:"Apps",recent:"Recentes"};function dl(n,e){Ds=[n,...Ds.filter(t=>t!==n)].slice(0,40),fl(),e||Wn()}function DM(){var c;Ap(!1),!Fp().length&&((c=window.NativeXR)!=null&&c.xrLibrary)&&Bp();let n=Wp(),e=wa.filter(l=>ti.includes(l.id)).map(l=>({...l,kind:"game"})),t=em.map(l=>({...l,kind:"app"})),i=Lp().map(l=>({kind:"android",id:"android:"+l.pkg,name:l.label||l.pkg,label:l.label||l.pkg,pkg:l.pkg,icon:l.icon,system:l.system,app:l})),s=[...n,...e,...t,...i],r=l=>{let h=SM.indexOf(l);return h<0?99:h};s.sort((l,h)=>r(l.id)-r(h.id)),ei==="games"&&(s=s.filter(l=>l.kind==="game"||l.kind==="xr")),ei==="apps"&&(s=s.filter(l=>l.kind==="app"||l.kind==="android")),ei==="recent"&&(s=s.filter(l=>l.kind==="android"?Ip(l.pkg):Ds.includes(l.id)));let o=Ma.trim().toLowerCase();if(o&&(s=s.filter(l=>(l.name+" "+(l.label||"")).toLowerCase().includes(o))),ul==="az")return[...s].sort((l,h)=>l.name.localeCompare(h.name,"pt-BR"));let a=l=>{if(l.kind==="android"){let u=Dp(l.pkg);return u<0?1e6:u}let h=Ds.indexOf(l.id);return h<0?1e6:h};return[...s].sort((l,h)=>a(l)-a(h))}function NM(n){let e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${ke(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${e}<span class="nm fb">${n.label||n.name}</span>`:t;return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand">${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function UM(n){let e=n.img?`<img class="lib-game-cover" src="${n.img}" alt="" loading="lazy" referrerpolicy="no-referrer" draggable="false" onerror="this.remove()">`:"";return`<button class="lib-tile game" data-game="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}">${e}<span class="lib-art">${n.mark}</span><span class="lib-vr">VR</span></span><span class="lib-label">${n.name}</span></button>`}function OM(){var a,c;let n=DM(),e=me("div","lib"),t=$p[ei]||$p.all,i=(l,h,u)=>`<button class="lib-nav" data-nav="${l}" title="${h}" aria-label="${h}" aria-pressed="${ei===l}">${ke(u)}</button>`;e.innerHTML=`<nav class="lib-rail" aria-label="Navega\xE7\xE3o da biblioteca">
      ${i("all","Todas as aplica\xE7\xF5es","appGrid")}
      ${i("apps","Aplicativos","device")}
      ${i("games","Jogos","controller")}
      ${i("recent","Recentes","timer")}
      <span class="lib-rail-spacer"></span>
      <button class="lib-nav lib-nav-store" data-app="store" title="Store" aria-label="Abrir Store">${ke("store")}</button>
    </nav>
    <section class="lib-main">
      <div class="lib-head"><h2 class="lib-title">Apps</h2>
        <button class="lib-sbtn" data-s aria-label="Buscar">${ke("search")}</button>
        <input class="lib-search" data-q placeholder="Buscar" value="${bM(Ma)}">
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort>${ul==="az"?"A\u2013Z":"Recentes"} ${ke("chevronDown")}</button>
        <button class="lib-pill" data-filter>${t} \xB7 ${n.length} ${ke("chevronDown")}</button>
      </div>
      <div class="lib-scroll"><div class="lib-grid">${n.map(l=>l.kind==="game"?UM(l):l.kind==="xr"?Xp(l):l.kind==="android"?Rp(l.app):NM(l)).join("")}</div>
      ${n.length?"":`<div class="lib-empty">${ei==="games"?"Nenhum jogo baixado ainda. Baixe um na Store.":ei==="recent"?"Os apps usados recentemente v\xE3o aparecer aqui.":"Nenhum app encontrado."}</div>`}
      </div>
    </section>
    `;let s=Tp();s&&((a=e.querySelector(".lib-scroll"))==null||a.prepend(s));let r=qp();r&&((c=e.querySelector(".lib-scroll"))==null||c.prepend(r));let o=e.querySelector('[data-q]:not([data-q="android"])');return o&&Ma&&o.classList.add("open"),o&&(o.addEventListener("input",()=>{var h;Ma=o.value,Wn(!0);let l=(h=Rr("library"))==null?void 0:h.querySelector('[data-q]:not([data-q="android"])');l&&(l.focus(),l.setSelectionRange(l.value.length,l.value.length))}),o.addEventListener("focus",()=>yn(!0,o))),e.addEventListener("click",l=>{let h=d=>l.target.closest(d),u;if(h("[data-s]")){let d=e.querySelector('[data-q]:not([data-q="android"])');if(!d)return;d.classList.toggle("open"),d.classList.contains("open")?d.focus():(Ma="",d.value="",Wn());return}if(u=h("[data-nav]")){ei=u.dataset.nav,Wn();return}if(h("[data-sort]")){ul=ul==="az"?"recent":"az",Wn();return}if(h("[data-filter]")){ei=Yh[(Yh.indexOf(ei)+1)%Yh.length],Wn();return}if(u=h("[data-android]")){let d=u.dataset.android;Ep(d),Cp(d);return}if(u=h("[data-xr]")){let d=u.dataset.xr;Hh()?Vp():Hp(d);return}if(u=h("[data-game]")){let d=pl(u.dataset.game);if(dl(d.id),Hh()){Xe(L("xrBusy"));return}Xe(`${d.name}: ${L("game.launching")}`),cp(d.id);return}if(u=h("[data-app]")){let d=em.find(g=>g.id===u.dataset.app);if(!d)return;dl(d.id);let m=wM[d.id];m?m():Xe(d.name+": sem endere\xE7o cadastrado");return}}),e}function Wn(n){var i;let e=Rr("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(OM()),e.querySelector(".lib-scroll").scrollTop=t}function nm(){let n=ye.find(i=>i.id==="library");if(n)return Wn(),$t(n),n;let e=me("div");e.style.cssText="height:100%";let t=Zt({id:"library",title:L("apps"),node:e});return Wn(),t}var Ei=Object.freeze({bell:ke("notification"),kb:ke("keyboard"),center:ke("crosshair"),compass:ke("compass"),store:ke("store"),people:ke("people"),camera:ke("camera"),gear:ke("settings"),play:ke("play"),device:ke("device")});function im(){Yf([{kind:"avatar",id:"profile",label:L("profile"),run:Sa},{kind:"status",id:"status",label:L("settings"),run:Sa},{kind:"tool",id:"bell",label:L("notif"),svg:Ei.bell,run:()=>Xe(L("noNotif"))},{kind:"tool",id:"kb",label:L("keyboard"),svg:Ei.kb,run:()=>yn(!Jf(),null)},{kind:"tool",id:"center",label:L("center"),svg:Ei.center,run:()=>ko()},{kind:"sep"},{id:"browser",win:"browser",label:L("browser"),svg:Ei.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>kt("browser",L("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:L("store"),svg:Ei.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:tm},{id:"discord",win:"discord",label:"Discord",svg:Ei.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>kt("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:L("gallery"),svg:Ei.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:Zp},{kind:"sep"},{id:"settings",win:"settings",label:L("settings"),svg:Ei.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Sa},{id:"youtube",win:"youtube",label:"YouTube",svg:Ei.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>kt("youtube","YouTube","https://m.youtube.com/")},{id:"library",win:"library",launcher:!0,label:L("apps"),run:nm}])}je("lang",im);function FM(){let n=document.querySelector('.dock [data-id="library"], .dock-app[data-id="library"]');if(!n)return;let e=Pp(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=me("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}Np();zp();je("appsState",()=>{FM(),sm()});je("xr",()=>{sm();let n=Rr("settings");n!=null&&n.querySelector("[data-xr-page]")&&Jp(n.querySelector("[data-xr-page]"))});var $h=0;function sm(){$h||($h=setTimeout(()=>{$h=0,Rr("library")&&Wn()},500))}var kM=document.getElementById("boot"),KS=document.getElementById("bootGo"),Qi=null;kM.hidden=!0;function zM(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function rm(n,e,t=!1){let i=me("div",t?"langwin slim":"langwin"),s=o=>Oo(o).label;return(()=>{i.innerHTML=`<div class="lq-head"><span class="lq-pick">${s(n)}</span><span class="lq-title">${L("langTitle")}</span></div>
      <div class="lq-main">
        <div class="lang-options" role="list">${Yr.map(o=>`<button class="lang-option${o.table?"":" soon"}" data-lang="${o.id}"
            ${o.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${o.id===n}"><span>${o.label}</span>${o.table?"":`<i>${L("langSoon")}</i>`}</button>`).join("")}</div>
        <div class="lq-art"><img src="./hand-controller.png" alt=""></div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">Aponte com a m\xE3o e fa\xE7a uma pin\xE7a para escolher.</span>
        <button class="lq-go">${L("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(o=>o.onclick=()=>e(o.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function BM(){var e,t;let n=Zt({id:"language",title:"Next VR",w:880,h:660,onboarding:!0,node:rm(we.lang||zM(),HM)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}je("handframe",n=>{let e=Qi==null?void 0:Qi.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function HM(n){if(!Qi)return;Wc(n),Qi&&(Jt(Qi),Qi=null),da(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Zr(),t=we.handsOn?Kr():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>ko(),280)}document.getElementById("btnGyro").onclick=()=>Zr();document.getElementById("btnHand").onclick=()=>pf()?Jc():Kr();je("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});je("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});im();we.lang?(da(!0),fe&&(Zr(),we.handsOn&&Kr()),document.getElementById("perm").hidden=!1,setTimeout(()=>ko(),280)):(da(!1),document.getElementById("stat").hidden=!0,Qi=BM());fe&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=pi).invalidate)==null||e.call(n),pp(),Zr(),we.handsOn&&Kr()},window.nextvrSuspend=()=>{Jc()},je("hands",()=>{document.getElementById("perm").hidden=!0}));je("game:settings",()=>Sa());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
