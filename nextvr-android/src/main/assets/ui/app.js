(()=>{var yv=0,Rp=1,vv=2;var mg=1,xv=2,as=3,Oi=0,Gn=1,kn=2;var Us=0,da=1,Cp=2,Lp=3,Pp=4,bv=5,mr=100,_v=101,wv=102,Ip=103,Np=104,Mv=200,Sv=201,Av=202,Ev=203,Ad=204,Ed=205,Tv=206,Rv=207,Cv=208,Lv=209,Pv=210,Iv=211,Nv=212,Dv=213,kv=214,Ov=0,Uv=1,Fv=2,jl=3,Bv=4,zv=5,Hv=6,Vv=7,oh=0,Gv=1,Wv=2,Fs=0,qv=1,Xv=2,$v=3,Yv=4,jv=5,Zv=6,Dp="attached",Kv="detached",gg=300,pa=301,ma=302,Td=303,Rd=304,Sc=306,br=1e3,ei=1001,ho=1002,sn=1003,Zl=1004;var ao=1005;var Qt=1006,lh=1007;var zs=1008;var Bs=1009,Jv=1010,Qv=1011,ch=1012,yg=1013,ks=1014,os=1015,fo=1016,vg=1017,xg=1018,yr=1020,ex=1021,ui=1023,tx=1024,nx=1025,vr=1026,ga=1027,ix=1028,bg=1029,sx=1030,_g=1031,wg=1033,Xu=33776,$u=33777,Yu=33778,ju=33779,kp=35840,Op=35841,Up=35842,Fp=35843,Mg=36196,Bp=37492,zp=37496,Hp=37808,Vp=37809,Gp=37810,Wp=37811,qp=37812,Xp=37813,$p=37814,Yp=37815,jp=37816,Zp=37817,Kp=37818,Jp=37819,Qp=37820,em=37821,Zu=36492,tm=36494,nm=36495,rx=36283,im=36284,sm=36285,rm=36286;var ya=2300,_r=2301,Ku=2302,am=2400,om=2401,lm=2402,ax=2500;var Sg=0,Ac=1,Eo=2,Ag=3e3,xr=3001,ox=3200,lx=3201,uh=0,cx=1,di="",Bt="srgb",rn="srgb-linear",dh="display-p3",Ec="display-p3-linear",Kl="linear",Nt="srgb",Jl="rec709",Ql="p3";var qr=7680;var cm=519,ux=512,dx=513,hx=514,Eg=515,fx=516,px=517,mx=518,gx=519,Cd=35044;var um="300 es",Ld=1035,ls=2e3,ec=2001,Hs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dm=1234567,oo=Math.PI/180,va=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function hh(n,e){return(n%e+e)%e}function yx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function vx(n,e,t){return n!==e?(t-n)/(e-n):0}function lo(n,e,t){return(1-t)*n+t*e}function xx(n,e,t,i){return lo(n,e,1-Math.exp(-t*i))}function bx(n,e=1){return e-Math.abs(hh(n,e*2)-e)}function _x(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Mx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sx(n,e){return n+Math.random()*(e-n)}function Ax(n){return n*(.5-Math.random())}function Ex(n){n!==void 0&&(dm=n);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tx(n){return n*oo}function Rx(n){return n*va}function Pd(n){return(n&n-1)===0&&n!==0}function Cx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var To={DEG2RAD:oo,RAD2DEG:va,generateUUID:Ei,clamp:wn,euclideanModulo:hh,mapLinear:yx,inverseLerp:vx,lerp:lo,damp:xx,pingpong:bx,smoothstep:_x,smootherstep:wx,randInt:Mx,randFloat:Sx,randFloatSpread:Ax,seededRandom:Ex,degToRad:Tx,radToDeg:Rx,isPowerOfTwo:Pd,ceilPowerOfTwo:Cx,floorPowerOfTwo:tc,setQuaternionFromProperEuler:Lx,normalize:_t,denormalize:ki},$e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],y=s[0],f=s[3],m=s[6],x=s[1],v=s[4],S=s[7],T=s[2],P=s[5],L=s[8];return r[0]=o*y+a*x+l*T,r[3]=o*f+a*v+l*P,r[6]=o*m+a*S+l*L,r[1]=c*y+u*x+d*T,r[4]=c*f+u*v+d*P,r[7]=c*m+u*S+d*L,r[2]=h*y+p*x+g*T,r[5]=h*f+p*v+g*P,r[8]=h*m+p*S+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ju=new nt;function Tg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Px(){let n=po("canvas");return n.style.display="block",n}var hm={};function co(n){n in hm||(hm[n]=!0,console.warn(n))}var fm=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_l={[rn]:{transfer:Kl,primaries:Jl,toReference:n=>n,fromReference:n=>n},[Bt]:{transfer:Nt,primaries:Jl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ec]:{transfer:Kl,primaries:Ql,toReference:n=>n.applyMatrix3(pm),fromReference:n=>n.applyMatrix3(fm)},[dh]:{transfer:Nt,primaries:Ql,toReference:n=>n.convertSRGBToLinear().applyMatrix3(pm),fromReference:n=>n.applyMatrix3(fm).convertLinearToSRGB()}},Ix=new Set([rn,Ec]),pt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ix.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=_l[e].toReference,s=_l[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return _l[n].primaries},getTransfer:function(n){return n===di?Kl:_l[n].transfer}};function ha(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xr,nc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xr===void 0&&(Xr=po("canvas")),Xr.width=e.width,Xr.height=e.height;let i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ha(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ha(t[i]/255)*255):t[i]=ha(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nx=0,ic=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ed(s[o].image)):r.push(ed(s[o]))}else r=ed(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ed(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dx=0,gn=class n extends Hs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ei,s=ei,r=Qt,o=zs,a=ui,l=Bs,c=n.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ei(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xr?Bt:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?xr:Ag}set encoding(e){co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?Bt:di}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=gg;gn.DEFAULT_ANISOTROPY=1;var Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],y=l[2],f=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,S=(p+1)/2,T=(m+1)/2,P=(u+h)/4,L=(d+y)/4,H=(g+f)/4;return v>S&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=P/i,r=L/i):S>T?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=H/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=L/r,s=H/r),this.set(i,s,r,t),this}let x=Math.sqrt((f-g)*(f-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-y)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Id=class extends Hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(co("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?Bt:di),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cs=class extends Id{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},sc=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nd=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var st=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||c!==p||u!==g){let f=1-a,m=l*h+c*p+u*g+d*y,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let T=Math.sqrt(v),P=Math.atan2(T,m*x);f=Math.sin(f*P)/T,a=Math.sin(a*P)/T}let S=a*x;if(l=l*f+h*S,c=c*f+p*S,u=u*f+g*S,d=d*f+y*S,f===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},td=new N,mm=new st,fi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Ml.subVectors(this.max,Qa),$r.subVectors(e.a,Qa),Yr.subVectors(e.b,Qa),jr.subVectors(e.c,Qa),Ls.subVectors(Yr,$r),Ps.subVectors(jr,Yr),ur.subVectors($r,jr);let t=[0,-Ls.z,Ls.y,0,-Ps.z,Ps.y,0,-ur.z,ur.y,Ls.z,0,-Ls.x,Ps.z,0,-Ps.x,ur.z,0,-ur.x,-Ls.y,Ls.x,0,-Ps.y,Ps.x,0,-ur.y,ur.x,0];return!nd(t,$r,Yr,jr,Ml)||(t=[1,0,0,0,1,0,0,0,1],!nd(t,$r,Yr,jr,Ml))?!1:(Sl.crossVectors(Ls,Ps),t=[Sl.x,Sl.y,Sl.z],nd(t,$r,Yr,jr,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},es=[new N,new N,new N,new N,new N,new N,new N,new N],Mi=new N,wl=new fi,$r=new N,Yr=new N,jr=new N,Ls=new N,Ps=new N,ur=new N,Qa=new N,Ml=new N,Sl=new N,dr=new N;function nd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){dr.fromArray(n,r);let a=s.x*Math.abs(dr.x)+s.y*Math.abs(dr.y)+s.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var kx=new fi,eo=new N,id=new N,ti=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):kx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(eo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(id)),this.expandByPoint(eo.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ts=new N,sd=new N,Al=new N,Is=new N,rd=new N,El=new N,ad=new N,wr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Is.copy(this.origin).sub(sd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Al),a=Is.dot(this.direction),l=-Is.dot(Al),c=Is.lengthSq(),u=Math.abs(1-o*o),d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sd).addScaledVector(Al,h),p}intersectSphere(e,t){ts.subVectors(e.center,this.origin);let i=ts.dot(this.direction),s=ts.dot(ts)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,i,s,r){rd.subVectors(t,e),El.subVectors(i,e),ad.crossVectors(rd,El);let o=this.direction.dot(ad),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Is.subVectors(this.origin,e);let l=a*this.direction.dot(El.crossVectors(Is,El));if(l<0)return null;let c=a*this.direction.dot(rd.cross(Is));if(c<0||l+c>o)return null;let u=-a*Is.dot(ad);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,g,y,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,g,y,f)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,g,y,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=p,m[7]=g,m[11]=y,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Zr.setFromMatrixColumn(e,0).length(),r=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,g=c*u,y=c*d;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,g=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,Ux)}lookAt(e,t,i){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ns.crossVectors(i,Kn),Ns.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ns.crossVectors(i,Kn)),Ns.normalize(),Tl.crossVectors(Kn,Ns),s[0]=Ns.x,s[4]=Tl.x,s[8]=Kn.x,s[1]=Ns.y,s[5]=Tl.y,s[9]=Kn.y,s[2]=Ns.z,s[6]=Tl.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],y=i[6],f=i[10],m=i[14],x=i[3],v=i[7],S=i[11],T=i[15],P=s[0],L=s[4],H=s[8],_=s[12],b=s[1],I=s[5],O=s[9],F=s[13],C=s[2],M=s[6],D=s[10],V=s[14],W=s[3],G=s[7],Z=s[11],J=s[15];return r[0]=o*P+a*b+l*C+c*W,r[4]=o*L+a*I+l*M+c*G,r[8]=o*H+a*O+l*D+c*Z,r[12]=o*_+a*F+l*V+c*J,r[1]=u*P+d*b+h*C+p*W,r[5]=u*L+d*I+h*M+p*G,r[9]=u*H+d*O+h*D+p*Z,r[13]=u*_+d*F+h*V+p*J,r[2]=g*P+y*b+f*C+m*W,r[6]=g*L+y*I+f*M+m*G,r[10]=g*H+y*O+f*D+m*Z,r[14]=g*_+y*F+f*V+m*J,r[3]=x*P+v*b+S*C+T*W,r[7]=x*L+v*I+S*M+T*G,r[11]=x*H+v*O+S*D+T*Z,r[15]=x*_+v*F+S*V+T*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],y=e[7],f=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*p-i*l*p)+y*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+f*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],y=e[13],f=e[14],m=e[15],x=d*f*c-y*h*c+y*l*p-a*f*p-d*l*m+a*h*m,v=g*h*c-u*f*c-g*l*p+o*f*p+u*l*m-o*h*m,S=u*y*c-g*d*c+g*a*p-o*y*p-u*a*m+o*d*m,T=g*d*l-u*y*l-g*a*h+o*y*h+u*a*f-o*d*f,P=t*x+i*v+s*S+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=x*L,e[1]=(y*h*r-d*f*r-y*s*p+i*f*p+d*s*m-i*h*m)*L,e[2]=(a*f*r-y*l*r+y*s*c-i*f*c-a*s*m+i*l*m)*L,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*p-i*l*p)*L,e[4]=v*L,e[5]=(u*f*r-g*h*r+g*s*p-t*f*p-u*s*m+t*h*m)*L,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*m-t*l*m)*L,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*L,e[8]=S*L,e[9]=(g*d*r-u*y*r-g*i*p+t*y*p+u*i*m-t*d*m)*L,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*m+t*a*m)*L,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*p-t*a*p)*L,e[12]=T*L,e[13]=(u*y*s-g*d*s+g*i*h-t*y*h-u*i*f+t*d*f)*L,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*f-t*a*f)*L,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,y=o*u,f=o*d,m=a*d,x=l*c,v=l*u,S=l*d,T=i.x,P=i.y,L=i.z;return s[0]=(1-(y+m))*T,s[1]=(p+S)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-S)*P,s[5]=(1-(h+m))*P,s[6]=(f+x)*P,s[7]=0,s[8]=(g+v)*L,s[9]=(f-x)*L,s[10]=(1-(h+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Zr.set(s[0],s[1],s[2]).length(),o=Zr.set(s[4],s[5],s[6]).length(),a=Zr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);let c=1/r,u=1/o,d=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,t.setFromRotationMatrix(Si),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ls){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),p,g;if(a===ls)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ec)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ls){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,p=(i+s)*u,g,y;if(a===ls)g=(o+r)*d,y=-2*d;else if(a===ec)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zr=new N,Si=new we,Ox=new N(0,0,0),Ux=new N(1,1,1),Ns=new N,Tl=new N,Kn=new N,gm=new we,ym=new st,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fx=0,vm=new N,Kr=new st,ns=new we,Rl=new N,to=new N,Bx=new N,zx=new st,xm=new N(1,0,0),bm=new N(0,1,0),_m=new N(0,0,1),Hx={type:"added"},Vx={type:"removed"},Dt=class n extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new ni,i=new st,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new nt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rl.copy(e):Rl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(to,Rl,this.up):ns.lookAt(Rl,to,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(ns),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,Bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new N,is=new N,od=new N,ss=new N,Jr=new N,Qr=new N,wm=new N,ld=new N,cd=new N,ud=new N,Cl=!1,la=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ai.subVectors(e,t),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ai.subVectors(s,t),is.subVectors(i,t),od.subVectors(e,t);let o=Ai.dot(Ai),a=Ai.dot(is),l=Ai.dot(od),c=is.dot(is),u=is.dot(od),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getUV(e,t,i,s,r,o,a,l){return Cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cl=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(o,ss.y),l.addScaledVector(a,ss.z),l)}static isFrontFacing(e,t,i,s){return Ai.subVectors(i,t),is.subVectors(e,t),Ai.cross(is).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),is.subVectors(this.a,this.b),Ai.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Jr.subVectors(s,i),Qr.subVectors(r,i),ld.subVectors(e,i);let l=Jr.dot(ld),c=Qr.dot(ld);if(l<=0&&c<=0)return t.copy(i);cd.subVectors(e,s);let u=Jr.dot(cd),d=Qr.dot(cd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Jr,o);ud.subVectors(e,r);let p=Jr.dot(ud),g=Qr.dot(ud);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Qr,a);let f=u*g-p*d;if(f<=0&&d-u>=0&&p-g>=0)return wm.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(wm,a);let m=1/(f+y+h);return o=y*m,a=h*m,t.copy(i).addScaledVector(Jr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function dd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=hh(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=dd(o,r,e+1/3),this.g=dd(o,r,e),this.b=dd(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=Rg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Qu(e.r),this.g=Qu(e.g),this.b=Qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(wn(_n.r*255,0,255))*65536+Math.round(wn(_n.g*255,0,255))*256+Math.round(wn(_n.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(_n.copy(this),t);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Bt){pt.fromWorkingColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,s=_n.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(Ll);let i=lo(Ds.h,Ll.h,t),s=lo(Ds.s,Ll.s,t),r=lo(Ds.l,Ll.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Ie;Ie.NAMES=Rg;var Gx=0,Wn=class extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=da,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Ed,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new N,Pl=new $e,Pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}};var rc=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ac=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var hi=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Wx=0,ci=new we,hd=new Dt,ea=new N,Jn=new fi,no=new fi,hn=new N,qn=class n extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?ac:rc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Jn.min,no.min),Jn.expandByPoint(hn),hn.addVectors(Jn.max,no.max),Jn.expandByPoint(hn)):(Jn.expandByPoint(no.min),Jn.expandByPoint(no.max))}Jn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(ea.fromBufferAttribute(e,c),hn.add(ea)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new N,u[b]=new N;let d=new N,h=new N,p=new N,g=new $e,y=new $e,f=new $e,m=new N,x=new N;function v(b,I,O){d.fromArray(s,b*3),h.fromArray(s,I*3),p.fromArray(s,O*3),g.fromArray(o,b*2),y.fromArray(o,I*2),f.fromArray(o,O*2),h.sub(d),p.sub(d),y.sub(g),f.sub(g);let F=1/(y.x*f.y-f.x*y.y);isFinite(F)&&(m.copy(h).multiplyScalar(f.y).addScaledVector(p,-y.y).multiplyScalar(F),x.copy(p).multiplyScalar(y.x).addScaledVector(h,-f.x).multiplyScalar(F),c[b].add(m),c[I].add(m),c[O].add(m),u[b].add(x),u[I].add(x),u[O].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,I=S.length;b<I;++b){let O=S[b],F=O.start,C=O.count;for(let M=F,D=F+C;M<D;M+=3)v(i[M+0],i[M+1],i[M+2])}let T=new N,P=new N,L=new N,H=new N;function _(b){L.fromArray(r,b*3),H.copy(L);let I=c[b];T.copy(I),T.sub(L.multiplyScalar(L.dot(I))).normalize(),P.crossVectors(H,I);let F=P.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=F}for(let b=0,I=S.length;b<I;++b){let O=S[b],F=O.start,C=O.count;for(let M=F,D=F+C;M<D;M+=3)_(i[M+0]),_(i[M+1]),_(i[M+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),y=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,f),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let y=0,f=l.length;y<f;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let m=0;m<u;m++)h[g++]=c[p++]}return new Pt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mm=new we,hr=new wr,Il=new ti,Sm=new N,ta=new N,na=new N,ia=new N,fd=new N,Nl=new N,Dl=new $e,kl=new $e,Ol=new $e,Am=new N,Em=new N,Tm=new N,Ul=new N,Fl=new N,St=class extends Dt{constructor(e=new qn,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(fd.fromBufferAttribute(d,e),o?Nl.addScaledVector(fd,u):Nl.addScaledVector(fd.sub(t),u))}t.add(Nl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Il.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Il,Sm)===null||hr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(Mm.copy(r).invert(),hr.copy(e.ray).applyMatrix4(Mm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let f=h[g],m=o[f.materialIndex],x=Math.max(f.start,p.start),v=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let S=x,T=v;S<T;S+=3){let P=a.getX(S),L=a.getX(S+1),H=a.getX(S+2);s=Bl(this,m,e,i,c,u,d,P,L,H),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){let x=a.getX(f),v=a.getX(f+1),S=a.getX(f+2);s=Bl(this,o,e,i,c,u,d,x,v,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let f=h[g],m=o[f.materialIndex],x=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let S=x,T=v;S<T;S+=3){let P=S,L=S+1,H=S+2;s=Bl(this,m,e,i,c,u,d,P,L,H),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){let x=f,v=f+1,S=f+2;s=Bl(this,o,e,i,c,u,d,x,v,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function qx(n,e,t,i,s,r,o,a){let l;if(e.side===Gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Oi,a),l===null)return null;Fl.copy(a),Fl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fl);return c<t.near||c>t.far?null:{distance:c,point:Fl.clone(),object:n}}function Bl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ta),n.getVertexPosition(l,na),n.getVertexPosition(c,ia);let u=qx(n,e,t,i,ta,na,ia,Ul);if(u){s&&(Dl.fromBufferAttribute(s,a),kl.fromBufferAttribute(s,l),Ol.fromBufferAttribute(s,c),u.uv=la.getInterpolation(Ul,ta,na,ia,Dl,kl,Ol,new $e)),r&&(Dl.fromBufferAttribute(r,a),kl.fromBufferAttribute(r,l),Ol.fromBufferAttribute(r,c),u.uv1=la.getInterpolation(Ul,ta,na,ia,Dl,kl,Ol,new $e),u.uv2=u.uv1),o&&(Am.fromBufferAttribute(o,a),Em.fromBufferAttribute(o,l),Tm.fromBufferAttribute(o,c),u.normal=la.getInterpolation(Ul,ta,na,ia,Am,Em,Tm,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};la.getNormal(ta,na,ia,d.normal),u.face=d}return u}var Vs=class n extends qn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hi(c,3)),this.setAttribute("normal",new hi(u,3)),this.setAttribute("uv",new hi(d,2));function g(y,f,m,x,v,S,T,P,L,H,_){let b=S/L,I=T/H,O=S/2,F=T/2,C=P/2,M=L+1,D=H+1,V=0,W=0,G=new N;for(let Z=0;Z<D;Z++){let J=Z*I-F;for(let ee=0;ee<M;ee++){let B=ee*b-O;G[y]=B*x,G[f]=J*v,G[m]=C,c.push(G.x,G.y,G.z),G[y]=0,G[f]=0,G[m]=P>0?1:-1,u.push(G.x,G.y,G.z),d.push(ee/L),d.push(1-Z/H),V+=1}}for(let Z=0;Z<H;Z++)for(let J=0;J<L;J++){let ee=h+J+M*Z,B=h+J+M*(Z+1),K=h+(J+1)+M*(Z+1),le=h+(J+1)+M*Z;l.push(ee,B,le),l.push(B,K,le),W+=6}a.addGroup(p,W,_),p+=W,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xa(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=xa(n[t]);for(let s in i)e[s]=i[s]}return e}function Xx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cg(n){return n.getRenderTarget()===null?n.outputColorSpace:pt.workingColorSpace}var $x={clone:xa,merge:Dn},Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,us=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},oc=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ls}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zt=class extends oc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sa=-90,ra=1,Dd=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(sa,ra,e,t);s.layers=this.layers,this.add(s);let r=new zt(sa,ra,e,t);r.layers=this.layers,this.add(r);let o=new zt(sa,ra,e,t);o.layers=this.layers,this.add(o);let a=new zt(sa,ra,e,t);a.layers=this.layers,this.add(a);let l=new zt(sa,ra,e,t);l.layers=this.layers,this.add(l);let c=new zt(sa,ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ls)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},lc=class extends gn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pa,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kd=class extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(co("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xr?Bt:di),this.texture=new lc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vs(5,5,5),r=new us({name:"CubemapFromEquirect",uniforms:xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:Us});r.uniforms.tEquirect.value=t;let o=new St(s,r),a=t.minFilter;return t.minFilter===zs&&(t.minFilter=Qt),new Dd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pd=new N,Zx=new N,Kx=new nt,Qn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=pd.subVectors(i,t).cross(Zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(pd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kx.getNormalMatrix(e),s=this.coplanarPoint(pd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fr=new ti,zl=new N,go=class{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ls){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],g=s[9],y=s[10],f=s[11],m=s[12],x=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,h-c,f-p,S-m).normalize(),i[1].setComponents(l+r,h+c,f+p,S+m).normalize(),i[2].setComponents(l+o,h+u,f+g,S+x).normalize(),i[3].setComponents(l-o,h-u,f-g,S-x).normalize(),i[4].setComponents(l-a,h-d,f-y,S-v).normalize(),t===ls)i[5].setComponents(l+a,h+d,f+y,S+v).normalize();else if(t===ec)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(zl.x=s.normal.x>0?e.max.x:e.min.x,zl.y=s.normal.y>0?e.max.y:e.min.y,zl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Jx(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,h=c.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,d){let h=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,f=g.length;y<f;y++){let m=g[y];t?n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}var Sn=class n extends qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],y=[],f=[];for(let m=0;m<u;m++){let x=m*h-o;for(let v=0;v<c;v++){let S=v*d-r;g.push(S,-x,0),y.push(0,0,1),f.push(v/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let v=x+c*m,S=x+c*(m+1),T=x+1+c*(m+1),P=x+1+c*m;p.push(v,S,P),p.push(S,T,P)}this.setIndex(p),this.setAttribute("position",new hi(g,3)),this.setAttribute("normal",new hi(y,3)),this.setAttribute("uv",new hi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
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
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
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
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
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
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hb=`#ifdef USE_IRIDESCENCE
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
#endif`,fb=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wb=`#define PI 3.141592653589793
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
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`
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
}`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
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
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
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
#endif`,Jb=`struct PhysicalMaterial {
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
}`,Qb=`
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
#endif`,e_=`#if defined( RE_IndirectDiffuse )
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,a_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c_=`#if defined( USE_POINTS_UV )
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
#endif`,u_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
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
#endif`,p_=`#ifdef USE_MORPHTARGETS
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
#endif`,m_=`#ifdef USE_MORPHTARGETS
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
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U_=`float getShadowMask() {
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
}`,F_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
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
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`#include <common>
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
}`,rw=`#if DEPTH_PACKING == 3200
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
}`,aw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
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
}`,dw=`uniform vec3 diffuse;
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
}`,hw=`#include <common>
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
}`,fw=`uniform vec3 diffuse;
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
}`,pw=`#define LAMBERT
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
}`,mw=`#define LAMBERT
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
}`,gw=`#define MATCAP
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
}`,yw=`#define MATCAP
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
}`,vw=`#define NORMAL
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
}`,xw=`#define NORMAL
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
}`,bw=`#define PHONG
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
}`,_w=`#define PHONG
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
}`,ww=`#define STANDARD
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
}`,Mw=`#define STANDARD
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
}`,Sw=`#define TOON
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
}`,Aw=`#define TOON
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
}`,Ew=`uniform float size;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Rw=`#include <common>
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
}`,Cw=`uniform vec3 color;
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
}`,Lw=`uniform float rotation;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Qx,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:sb,aomap_fragment:rb,aomap_pars_fragment:ab,batching_pars_vertex:ob,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:db,iridescence_fragment:hb,bumpmap_pars_fragment:fb,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:yb,color_fragment:vb,color_pars_fragment:xb,color_pars_vertex:bb,color_vertex:_b,common:wb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Eb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:Lb,envmap_fragment:Pb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Nb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Xb,envmap_vertex:kb,fog_vertex:Ob,fog_pars_vertex:Ub,fog_fragment:Fb,fog_pars_fragment:Bb,gradientmap_pars_fragment:zb,lightmap_fragment:Hb,lightmap_pars_fragment:Vb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Wb,lights_pars_begin:qb,lights_toon_fragment:$b,lights_toon_pars_fragment:Yb,lights_phong_fragment:jb,lights_phong_pars_fragment:Zb,lights_physical_fragment:Kb,lights_physical_pars_fragment:Jb,lights_fragment_begin:Qb,lights_fragment_maps:e_,lights_fragment_end:t_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:r_,map_fragment:a_,map_pars_fragment:o_,map_particle_fragment:l_,map_particle_pars_fragment:c_,metalnessmap_fragment:u_,metalnessmap_pars_fragment:d_,morphcolor_vertex:h_,morphnormal_vertex:f_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:y_,normal_pars_fragment:v_,normal_pars_vertex:x_,normal_vertex:b_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:A_,opaque_fragment:E_,packing:T_,premultiplied_alpha_fragment:R_,project_vertex:C_,dithering_fragment:L_,dithering_pars_fragment:P_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:k_,shadowmap_vertex:O_,shadowmask_pars_fragment:U_,skinbase_vertex:F_,skinning_pars_vertex:B_,skinning_vertex:z_,skinnormal_vertex:H_,specularmap_fragment:V_,specularmap_pars_fragment:G_,tonemapping_fragment:W_,tonemapping_pars_fragment:q_,transmission_fragment:X_,transmission_pars_fragment:$_,uv_pars_fragment:Y_,uv_pars_vertex:j_,uv_vertex:Z_,worldpos_vertex:K_,background_vert:J_,background_frag:Q_,backgroundCube_vert:ew,backgroundCube_frag:tw,cube_vert:nw,cube_frag:iw,depth_vert:sw,depth_frag:rw,distanceRGBA_vert:aw,distanceRGBA_frag:ow,equirect_vert:lw,equirect_frag:cw,linedashed_vert:uw,linedashed_frag:dw,meshbasic_vert:hw,meshbasic_frag:fw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:yw,meshnormal_vert:vw,meshnormal_frag:xw,meshphong_vert:bw,meshphong_frag:_w,meshphysical_vert:ww,meshphysical_frag:Mw,meshtoon_vert:Sw,meshtoon_frag:Aw,points_vert:Ew,points_frag:Tw,shadow_vert:Rw,shadow_frag:Cw,sprite_vert:Lw,sprite_frag:Pw},ue={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Di={basic:{uniforms:Dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Dn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Dn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Dn([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Dn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Dn([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Dn([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Dn([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Dn([ue.lights,ue.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Di.physical={uniforms:Dn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Hl={r:0,b:0,g:0};function Iw(n,e,t,i,s,r,o){let a=new Ie(0),l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(f,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sc)?(u===void 0&&(u=new St(new Vs(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:xa(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=pt.getTransfer(v.colorSpace)!==Nt,(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Sn(2,2),new us({name:"BackgroundMaterial",uniforms:xa(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==Nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function y(f,m){f.getRGB(Hl,Cg(n)),i.buffers.color.setClear(Hl.r,Hl.g,Hl.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(f,m=1){a.set(f),l=m,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,y(a,l)},render:g}}function Nw(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,u=!1;function d(C,M,D,V,W){let G=!1;if(o){let Z=y(V,D,M);c!==Z&&(c=Z,p(c.object)),G=m(C,V,D,W),G&&x(C,V,D,W)}else{let Z=M.wireframe===!0;(c.geometry!==V.id||c.program!==D.id||c.wireframe!==Z)&&(c.geometry=V.id,c.program=D.id,c.wireframe=Z,G=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,H(C,M,D,V),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function y(C,M,D){let V=D.wireframe===!0,W=a[C.id];W===void 0&&(W={},a[C.id]=W);let G=W[M.id];G===void 0&&(G={},W[M.id]=G);let Z=G[V];return Z===void 0&&(Z=f(h()),G[V]=Z),Z}function f(C){let M=[],D=[],V=[];for(let W=0;W<s;W++)M[W]=0,D[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:D,attributeDivisors:V,object:C,attributes:{},index:null}}function m(C,M,D,V){let W=c.attributes,G=M.attributes,Z=0,J=D.getAttributes();for(let ee in J)if(J[ee].location>=0){let K=W[ee],le=G[ee];if(le===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==V}function x(C,M,D,V){let W={},G=M.attributes,Z=0,J=D.getAttributes();for(let ee in J)if(J[ee].location>=0){let K=G[ee];K===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));let le={};le.attribute=K,K&&K.data&&(le.data=K.data),W[ee]=le,Z++}c.attributes=W,c.attributesNum=Z,c.index=V}function v(){let C=c.newAttributes;for(let M=0,D=C.length;M<D;M++)C[M]=0}function S(C){T(C,0)}function T(C,M){let D=c.newAttributes,V=c.enabledAttributes,W=c.attributeDivisors;D[C]=1,V[C]===0&&(n.enableVertexAttribArray(C),V[C]=1),W[C]!==M&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,M),W[C]=M)}function P(){let C=c.newAttributes,M=c.enabledAttributes;for(let D=0,V=M.length;D<V;D++)M[D]!==C[D]&&(n.disableVertexAttribArray(D),M[D]=0)}function L(C,M,D,V,W,G,Z){Z===!0?n.vertexAttribIPointer(C,M,D,W,G):n.vertexAttribPointer(C,M,D,V,W,G)}function H(C,M,D,V){if(i.isWebGL2===!1&&(C.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let W=V.attributes,G=D.getAttributes(),Z=M.defaultAttributeValues;for(let J in G){let ee=G[J];if(ee.location>=0){let B=W[J];if(B===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){let K=B.normalized,le=B.itemSize,Ae=t.get(B);if(Ae===void 0)continue;let Q=Ae.buffer,oe=Ae.type,ge=Ae.bytesPerElement,xe=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||B.gpuType===yg);if(B.isInterleavedBufferAttribute){let Qe=B.data,q=Qe.stride,Kt=B.offset;if(Qe.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)T(ee.location+Le,Qe.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Le=0;Le<ee.locationSize;Le++)S(ee.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Le=0;Le<ee.locationSize;Le++)L(ee.location+Le,le/ee.locationSize,oe,K,q*ge,(Kt+le/ee.locationSize*Le)*ge,xe)}else{if(B.isInstancedBufferAttribute){for(let Qe=0;Qe<ee.locationSize;Qe++)T(ee.location+Qe,B.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Qe=0;Qe<ee.locationSize;Qe++)S(ee.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Qe=0;Qe<ee.locationSize;Qe++)L(ee.location+Qe,le/ee.locationSize,oe,K,le*ge,le/ee.locationSize*Qe*ge,xe)}}else if(Z!==void 0){let K=Z[J];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(ee.location,K);break;case 3:n.vertexAttrib3fv(ee.location,K);break;case 4:n.vertexAttrib4fv(ee.location,K);break;default:n.vertexAttrib1fv(ee.location,K)}}}}P()}function _(){O();for(let C in a){let M=a[C];for(let D in M){let V=M[D];for(let W in V)g(V[W].object),delete V[W];delete M[D]}delete a[C]}}function b(C){if(a[C.id]===void 0)return;let M=a[C.id];for(let D in M){let V=M[D];for(let W in V)g(V[W].object),delete V[W];delete M[D]}delete a[C.id]}function I(C){for(let M in a){let D=a[M];if(D[C.id]===void 0)continue;let V=D[C.id];for(let W in V)g(V[W].object),delete V[W];delete D[C.id]}}function O(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:F,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:S,disableUnusedAttributes:P}}function Dw(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{p.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function kw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),T=v&&S,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:P}}function Ow(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Qn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,y=d.clipIntersection,f=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let x=r?0:i,v=x*4,S=m.clippingState||null;l.value=S,S=u(g,h,v,p);for(let T=0;T!==v;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){let y=d!==null?d.length:0,f=null;if(y!==0){if(f=l.value,g!==!0||f===null){let m=p+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,S=p;v!==y;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function Uw(n){let e=new WeakMap;function t(o,a){return a===Td?o.mapping=pa:a===Rd&&(o.mapping=ma),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Td||a===Rd)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kd(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ba=class extends oc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ca=4,Rm=[.125,.215,.35,.446,.526,.582],gr=20,md=new ba,Cm=new Ie,gd=null,yd=0,vd=0,pr=(1+Math.sqrt(5))/2,aa=1/pr,Lm=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,pr,aa),new N(0,pr,-aa),new N(aa,0,pr),new N(-aa,0,pr),new N(pr,aa,0),new N(-pr,aa,0)],cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){gd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,yd,vd),e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:fo,format:ui,colorSpace:rn,depthBuffer:!1},s=Pm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fw(r)),this._blurMaterial=Bw(r,e,t)}return s}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,md)}_sceneToCubeUV(e,t,i,s){let a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Cm),u.toneMapping=Fs,u.autoClear=!1;let p=new en({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new St(new Vs,p),y=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,y=!0):(p.color.copy(Cm),y=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Vl(s,x*v,m>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===pa||e.mapping===ma;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Vl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,md)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lm[(s-1)%Lm.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new St(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gr-1),y=r/g,f=isFinite(r)?1+Math.floor(u*y):gr;f>gr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gr}`);let m=[],x=0;for(let L=0;L<gr;++L){let H=L/y,_=Math.exp(-H*H/2);m.push(_),L===0?x+=_:L<f&&(x+=2*_)}for(let L=0;L<m.length;L++)m[L]=m[L]/x;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let S=this._sizeLods[s],T=3*S*(s>v-ca?s-v+ca:0),P=4*(this._cubeSize-S);Vl(t,T,P,3*S,2*S),l.setRenderTarget(t),l.render(d,md)}};function Fw(n){let e=[],t=[],i=[],s=n,r=n-ca+1+Rm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ca?l=Rm[o-n+ca-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,f=2,m=1,x=new Float32Array(y*g*p),v=new Float32Array(f*g*p),S=new Float32Array(m*g*p);for(let P=0;P<p;P++){let L=P%3*2/3-1,H=P>2?0:-1,_=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];x.set(_,y*g*P),v.set(h,f*g*P);let b=[P,P,P,P,P,P];S.set(b,m*g*P)}let T=new qn;T.setAttribute("position",new Pt(x,y)),T.setAttribute("uv",new Pt(v,f)),T.setAttribute("faceIndex",new Pt(S,m)),e.push(T),s>ca&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pm(n,e,t){let i=new cs(n,e,t);return i.texture.mapping=Sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Bw(n,e,t){let i=new Float32Array(gr),s=new N(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Im(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Us,depthTest:!1,depthWrite:!1})}function Nm(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Us,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function zw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Td||l===Rd,u=l===pa||l===ma;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new cc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new cc(n));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Hw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vw(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let f=0,m=y.length;f<m;f++)e.remove(y[f])}h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let y=p[g];for(let f=0,m=y.length;f<m;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(d){let h=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let x=p.array;y=p.version;for(let v=0,S=x.length;v<S;v+=3){let T=x[v+0],P=x[v+1],L=x[v+2];h.push(T,P,P,L,L,T)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){let T=v+0,P=v+1,L=v+2;h.push(T,P,P,L,L,T)}}else return;let f=new(Tg(h)?ac:rc)(h,1);f.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,f)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Gw(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function d(p,g,y){if(y===0)return;let f,m;if(s)f=n,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,g,a,p*l,y),t.update(g,r,y)}function h(p,g,y){if(y===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<y;m++)this.render(p[m]/l,g[m]);else{f.multiDrawElementsWEBGL(r,g,0,a,p,0,y);let m=0;for(let x=0;x<y;x++)m+=g[x];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function Ww(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qw(n,e){return n[0]-e[0]}function Xw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $w(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(u);if(y===void 0||y.count!==g){let C=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",C)};y!==void 0&&y.texture.dispose();let x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[],H=0;x===!0&&(H=1),v===!0&&(H=2),S===!0&&(H=3);let _=u.attributes.position.count*H,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let I=new Float32Array(_*b*4*g),O=new sc(I,_,b,g);O.type=os,O.needsUpdate=!0;let F=H*4;for(let M=0;M<g;M++){let D=T[M],V=P[M],W=L[M],G=_*b*4*M;for(let Z=0;Z<D.count;Z++){let J=Z*F;x===!0&&(o.fromBufferAttribute(D,Z),I[G+J+0]=o.x,I[G+J+1]=o.y,I[G+J+2]=o.z,I[G+J+3]=0),v===!0&&(o.fromBufferAttribute(V,Z),I[G+J+4]=o.x,I[G+J+5]=o.y,I[G+J+6]=o.z,I[G+J+7]=0),S===!0&&(o.fromBufferAttribute(W,Z),I[G+J+8]=o.x,I[G+J+9]=o.y,I[G+J+10]=o.z,I[G+J+11]=W.itemSize===4?o.w:1)}}y={count:g,texture:O,size:new $e(_,b)},r.set(u,y),u.addEventListener("dispose",C)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];let m=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",m),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let p=h===void 0?0:h.length,g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<p;v++){let S=g[v];S[0]=v,S[1]=h[v]}g.sort(Xw);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(qw);let y=u.morphAttributes.position,f=u.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let S=a[v],T=S[0],P=S[1];T!==Number.MAX_SAFE_INTEGER&&P?(y&&u.getAttribute("morphTarget"+v)!==y[T]&&u.setAttribute("morphTarget"+v,y[T]),f&&u.getAttribute("morphNormal"+v)!==f[T]&&u.setAttribute("morphNormal"+v,f[T]),s[v]=P,m+=P):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let x=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Yw(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var uc=class extends gn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=ks),i===void 0&&u===ga&&(i=yr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pg=new gn,Ig=new uc(1,1);Ig.compareFunction=Eg;var Ng=new sc,Dg=new Nd,kg=new lc,Dm=[],km=[],Om=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function Ta(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Dm[s];if(r===void 0&&(r=new Float32Array(s),Dm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tc(n,e){let t=km[e];t===void 0&&(t=new Int32Array(e),km[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function Kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function Jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Qw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Fm.set(i),n.uniformMatrix2fv(this.addr,!1,Fm),on(t,i)}}function eM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Um.set(i),n.uniformMatrix3fv(this.addr,!1,Um),on(t,i)}}function tM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),on(t,i)}}function nM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function sM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function rM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function aM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function lM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function cM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function uM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ig:Pg;t.setTexture2D(e||r,s)}function dM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Dg,s)}function hM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||kg,s)}function fM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ng,s)}function pM(n){switch(n){case 5126:return jw;case 35664:return Zw;case 35665:return Kw;case 35666:return Jw;case 35674:return Qw;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return sM;case 35669:case 35673:return rM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return fM}}function mM(n,e){n.uniform1fv(this.addr,e)}function gM(n,e){let t=Ta(e,this.size,2);n.uniform2fv(this.addr,t)}function yM(n,e){let t=Ta(e,this.size,3);n.uniform3fv(this.addr,t)}function vM(n,e){let t=Ta(e,this.size,4);n.uniform4fv(this.addr,t)}function xM(n,e){let t=Ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bM(n,e){let t=Ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _M(n,e){let t=Ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wM(n,e){n.uniform1iv(this.addr,e)}function MM(n,e){n.uniform2iv(this.addr,e)}function SM(n,e){n.uniform3iv(this.addr,e)}function AM(n,e){n.uniform4iv(this.addr,e)}function EM(n,e){n.uniform1uiv(this.addr,e)}function TM(n,e){n.uniform2uiv(this.addr,e)}function RM(n,e){n.uniform3uiv(this.addr,e)}function CM(n,e){n.uniform4uiv(this.addr,e)}function LM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pg,r[o])}function PM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dg,r[o])}function IM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kg,r[o])}function NM(n,e,t){let i=this.cache,s=e.length,r=Tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ng,r[o])}function DM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return yM;case 35666:return vM;case 35674:return xM;case 35675:return bM;case 35676:return _M;case 5124:case 35670:return wM;case 35667:case 35671:return MM;case 35668:case 35672:return SM;case 35669:case 35673:return AM;case 5125:return EM;case 36294:return TM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return NM}}var Od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}},Ud=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DM(t.type)}},Fd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},xd=/(\w+)(\])?(\[|\.)?/g;function Bm(n,e){n.seq.push(e),n.map[e.id]=e}function kM(n,e,t){let i=n.name,s=i.length;for(xd.lastIndex=0;;){let r=xd.exec(i),o=xd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bm(t,c===void 0?new Od(a,n,e):new Ud(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Fd(a),Bm(t,d)),t=d}}}var fa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function zm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var OM=37297,UM=0;function FM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BM(n){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n),i;switch(e===t?i="":e===Ql&&t===Jl?i="LinearDisplayP3ToLinearSRGB":e===Jl&&t===Ql&&(i="LinearSRGBToLinearDisplayP3"),n){case rn:case Ec:return[i,"LinearTransferOETF"];case Bt:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+FM(n.getShaderSource(e),o)}else return s}function zM(n,e){let t=BM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HM(n,e){let t;switch(e){case qv:t="Linear";break;case Xv:t="Reinhard";break;case $v:t="OptimizedCineon";break;case Yv:t="ACESFilmic";break;case Zv:t="AgX";break;case jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ua).join(`
`)}function GM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ua).join(`
`)}function WM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ua(n){return n!==""}function Vm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(n){return n.replace(XM,YM)}var $M=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YM(n,e){let t=Xe[e];if(t===void 0){let i=$M.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(t)}var jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(n){return n.replace(jM,ZM)}function ZM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===as&&(e="SHADOWMAP_TYPE_VSM"),e}function JM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ma:e="ENVMAP_MODE_REFRACTION";break}return e}function eS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oh:e="ENVMAP_BLENDING_MULTIPLY";break;case Gv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function tS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=KM(t),c=JM(t),u=QM(t),d=eS(t),h=tS(t),p=t.isWebGL2?"":VM(t),g=GM(t),y=WM(r),f=s.createProgram(),m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ua).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ua).join(`
`),x.length>0&&(x+=`
`)):(m=[qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),x=[p,qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fs?"#define TONE_MAPPING":"",t.toneMapping!==Fs?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fs?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,zM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=Bd(o),o=Vm(o,t),o=Gm(o,t),a=Bd(a),a=Vm(a,t),a=Gm(a,t),o=Wm(o),a=Wm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=v+m+o,T=v+x+a,P=zm(s,s.VERTEX_SHADER,S),L=zm(s,s.FRAGMENT_SHADER,T);s.attachShader(f,P),s.attachShader(f,L),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function H(O){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(P).trim(),M=s.getShaderInfoLog(L).trim(),D=!0,V=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,P,L);else{let W=Hm(s,P,"vertex"),G=Hm(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+W+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(C===""||M==="")&&(V=!1);V&&(O.diagnostics={runnable:D,programLog:F,vertexShader:{log:C,prefix:m},fragmentShader:{log:M,prefix:x}})}s.deleteShader(P),s.deleteShader(L),_=new fa(s,f),b=qM(s,f)}let _;this.getUniforms=function(){return _===void 0&&H(this),_};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(f,OM)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=L,this}var iS=0,zd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hd(e),t.set(e,i)),i}},Hd=class{constructor(e){this.id=iS++,this.code=e,this.usedTimes=0}};function sS(n,e,t,i,s,r,o){let a=new mo,l=new zd,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function f(_,b,I,O,F){let C=O.fog,M=F.geometry,D=_.isMeshStandardMaterial?O.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||D),W=V&&V.mapping===Sc?V.image.height:null,G=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let Z=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,J=Z!==void 0?Z.length:0,ee=0;M.morphAttributes.position!==void 0&&(ee=1),M.morphAttributes.normal!==void 0&&(ee=2),M.morphAttributes.color!==void 0&&(ee=3);let B,K,le,Ae;if(G){let Pn=Di[G];B=Pn.vertexShader,K=Pn.fragmentShader}else B=_.vertexShader,K=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),Ae=l.getFragmentShaderID(_);let Q=n.getRenderTarget(),oe=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,xe=!!_.map,Qe=!!_.matcap,q=!!V,Kt=!!_.aoMap,Le=!!_.lightMap,Be=!!_.bumpMap,Ee=!!_.normalMap,Ut=!!_.displacementMap,Ze=!!_.emissiveMap,R=!!_.metalnessMap,w=!!_.roughnessMap,$=_.anisotropy>0,re=_.clearcoat>0,se=_.iridescence>0,ae=_.sheen>0,Te=_.transmission>0,me=$&&!!_.anisotropyMap,be=re&&!!_.clearcoatMap,ke=re&&!!_.clearcoatNormalMap,Ke=re&&!!_.clearcoatRoughnessMap,ie=se&&!!_.iridescenceMap,bt=se&&!!_.iridescenceThicknessMap,it=ae&&!!_.sheenColorMap,ze=ae&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,_e=!!_.specularColorMap,qe=!!_.specularIntensityMap,xt=Te&&!!_.transmissionMap,Xt=Te&&!!_.thicknessMap,et=!!_.gradientMap,ce=!!_.alphaMap,U=_.alphaTest>0,fe=!!_.alphaHash,pe=!!_.extensions,Oe=!!M.attributes.uv1,Ne=!!M.attributes.uv2,Tt=!!M.attributes.uv3,Rt=Fs;return _.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Rt=n.toneMapping),{isWebGL2:u,shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:B,fragmentShader:K,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ge,instancing:oe,instancingColor:oe&&F.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:rn,map:xe,matcap:Qe,envMap:q,envMapMode:q&&V.mapping,envMapCubeUVHeight:W,aoMap:Kt,lightMap:Le,bumpMap:Be,normalMap:Ee,displacementMap:h&&Ut,emissiveMap:Ze,normalMapObjectSpace:Ee&&_.normalMapType===cx,normalMapTangentSpace:Ee&&_.normalMapType===uh,metalnessMap:R,roughnessMap:w,anisotropy:$,anisotropyMap:me,clearcoat:re,clearcoatMap:be,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ke,iridescence:se,iridescenceMap:ie,iridescenceThicknessMap:bt,sheen:ae,sheenColorMap:it,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:_e,specularIntensityMap:qe,transmission:Te,transmissionMap:xt,thicknessMap:Xt,gradientMap:et,opaque:_.transparent===!1&&_.blending===da,alphaMap:ce,alphaTest:U,alphaHash:fe,combine:_.combine,mapUv:xe&&y(_.map.channel),aoMapUv:Kt&&y(_.aoMap.channel),lightMapUv:Le&&y(_.lightMap.channel),bumpMapUv:Be&&y(_.bumpMap.channel),normalMapUv:Ee&&y(_.normalMap.channel),displacementMapUv:Ut&&y(_.displacementMap.channel),emissiveMapUv:Ze&&y(_.emissiveMap.channel),metalnessMapUv:R&&y(_.metalnessMap.channel),roughnessMapUv:w&&y(_.roughnessMap.channel),anisotropyMapUv:me&&y(_.anisotropyMap.channel),clearcoatMapUv:be&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:ke&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:it&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(_.sheenRoughnessMap.channel),specularMapUv:Pe&&y(_.specularMap.channel),specularColorMapUv:_e&&y(_.specularColorMap.channel),specularIntensityMapUv:qe&&y(_.specularIntensityMap.channel),transmissionMapUv:xt&&y(_.transmissionMap.channel),thicknessMapUv:Xt&&y(_.thicknessMap.channel),alphaMapUv:ce&&y(_.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(Ee||$),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ne,vertexUv3s:Tt,pointsUvs:F.isPoints===!0&&!!M.attributes.uv&&(xe||ce),fog:!!C,useFog:_.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===Nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kn,flipSided:_.side===Gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:pe&&_.extensions.derivatives===!0,extensionFragDepth:pe&&_.extensions.fragDepth===!0,extensionDrawBuffers:pe&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)b.push(I),b.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(b,_),v(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function S(_){let b=g[_.type],I;if(b){let O=Di[b];I=$x.clone(O.uniforms)}else I=_.uniforms;return I}function T(_,b){let I;for(let O=0,F=c.length;O<F;O++){let C=c[O];if(C.cacheKey===b){I=C,++I.usedTimes;break}}return I===void 0&&(I=new nS(n,b,_,r),c.push(I)),I}function P(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),_.destroy()}}function L(_){l.remove(_)}function H(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:H}}function rS(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function aS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $m(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,p,g,y,f){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:f},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=f),e++,m}function a(d,h,p,g,y,f){let m=o(d,h,p,g,y,f);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(d,h,p,g,y,f){let m=o(d,h,p,g,y,f);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||aS),i.length>1&&i.sort(h||Xm),s.length>1&&s.sort(h||Xm)}function u(){for(let d=e,h=n.length;d<h;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function oS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new $m,n.set(i,[o])):s>=r.length?(o=new $m,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function cS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uS=0;function dS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hS(n,e){let t=new lS,i=cS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new N);let r=new N,o=new we,a=new we;function l(u,d){let h=0,p=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,f=0,m=0,x=0,v=0,S=0,T=0,P=0,L=0,H=0,_=0;u.sort(dS);let b=d===!0?Math.PI:1;for(let O=0,F=u.length;O<F;O++){let C=u[O],M=C.color,D=C.intensity,V=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=M.r*D*b,p+=M.g*D*b,g+=M.b*D*b;else if(C.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(C.sh.coefficients[G],D);_++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*b),C.castShadow){let Z=C.shadow,J=i.get(C);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=C.shadow.matrix,S++}s.directional[y]=G,y++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(M).multiplyScalar(D*b),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,s.spot[m]=G;let Z=C.shadow;if(C.map&&(s.spotLightMap[L]=C.map,L++,Z.updateMatrices(C),C.castShadow&&H++),s.spotLightMatrix[m]=Z.matrix,C.castShadow){let J=i.get(C);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,s.spotShadow[m]=J,s.spotShadowMap[m]=W,P++}m++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(M).multiplyScalar(D),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),s.rectArea[x]=G,x++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*b),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Z=C.shadow,J=i.get(C);J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,s.pointShadow[f]=J,s.pointShadowMap[f]=W,s.pointShadowMatrix[f]=C.shadow.matrix,T++}s.point[f]=G,f++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(D*b),G.groundColor.copy(C.groundColor).multiplyScalar(D*b),s.hemi[v]=G,v++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;let I=s.hash;(I.directionalLength!==y||I.pointLength!==f||I.spotLength!==m||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==S||I.numPointShadows!==T||I.numSpotShadows!==P||I.numSpotMaps!==L||I.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=m,s.rectArea.length=x,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=P+L-H,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=_,I.directionalLength=y,I.pointLength=f,I.spotLength=m,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=S,I.numPointShadows=T,I.numSpotShadows=P,I.numSpotMaps=L,I.numLightProbes=_,s.version=uS++)}function c(u,d){let h=0,p=0,g=0,y=0,f=0,m=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){let S=u[x];if(S.isDirectionalLight){let T=s.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(S.isSpotLight){let T=s.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let T=s.rectArea[y];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let T=s.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let T=s.hemi[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:s}}function Ym(n,e){let t=new hS(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fS(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Ym(n,e),t.set(r,[l])):o>=a.length?(l=new Ym(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Vd=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gd=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
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
}`;function gS(n,e,t){let i=new go,s=new $e,r=new $e,o=new Mt,a=new Vd({depthPacking:lx}),l=new Gd,c={},u=t.maxTextureSize,d={[Oi]:Gn,[Gn]:Oi,[kn]:kn},h=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new qn;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mg;let m=this.type;this.render=function(P,L,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;let _=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Us),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=m!==as&&this.type===as,C=m===as&&this.type!==as;for(let M=0,D=P.length;M<D;M++){let V=P[M],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let G=W.getFrameExtents();if(s.multiply(G),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,W.mapSize.y=r.y)),W.map===null||F===!0||C===!0){let J=this.type!==as?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new cs(s.x,s.y,J),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let Z=W.getViewportCount();for(let J=0;J<Z;J++){let ee=W.getViewport(J);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),O.viewport(o),W.updateMatrices(V,J),i=W.getFrustum(),S(L,H,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===as&&x(W,H),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,n.setRenderTarget(_,b,I)};function x(P,L){let H=e.update(y);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new cs(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,H,h,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,H,p,y,null)}function v(P,L,H,_){let b=null,I=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)b=I;else if(b=H.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let O=b.uuid,F=L.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let M=C[F];M===void 0&&(M=b.clone(),C[F]=M,L.addEventListener("dispose",T)),b=M}if(b.visible=L.visible,b.wireframe=L.wireframe,_===as?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=H}return b}function S(P,L,H,_,b){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===as)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);let F=e.update(P),C=P.material;if(Array.isArray(C)){let M=F.groups;for(let D=0,V=M.length;D<V;D++){let W=M[D],G=C[W.materialIndex];if(G&&G.visible){let Z=v(P,G,_,b);P.onBeforeShadow(n,P,L,H,F,Z,W),n.renderBufferDirect(H,null,F,Z,P,W),P.onAfterShadow(n,P,L,H,F,Z,W)}}}else if(C.visible){let M=v(P,C,_,b);P.onBeforeShadow(n,P,L,H,F,M,null),n.renderBufferDirect(H,null,F,M,P,null),P.onAfterShadow(n,P,L,H,F,M,null)}}let O=P.children;for(let F=0,C=O.length;F<C;F++)S(O[F],L,H,_,b)}function T(P){P.target.removeEventListener("dispose",T);for(let H in c){let _=c[H],b=P.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function yS(n,e,t){let i=t.isWebGL2;function s(){let U=!1,fe=new Mt,pe=null,Oe=new Mt(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!U&&(n.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){U=Ne},setClear:function(Ne,Tt,Rt,un,Pn){Pn===!0&&(Ne*=un,Tt*=un,Rt*=un),fe.set(Ne,Tt,Rt,un),Oe.equals(fe)===!1&&(n.clearColor(Ne,Tt,Rt,un),Oe.copy(fe))},reset:function(){U=!1,pe=null,Oe.set(-1,0,0,0)}}}function r(){let U=!1,fe=null,pe=null,Oe=null;return{setTest:function(Ne){Ne?ge(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!U&&(n.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(pe!==Ne){switch(Ne){case Ov:n.depthFunc(n.NEVER);break;case Uv:n.depthFunc(n.ALWAYS);break;case Fv:n.depthFunc(n.LESS);break;case jl:n.depthFunc(n.LEQUAL);break;case Bv:n.depthFunc(n.EQUAL);break;case zv:n.depthFunc(n.GEQUAL);break;case Hv:n.depthFunc(n.GREATER);break;case Vv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Ne}},setLocked:function(Ne){U=Ne},setClear:function(Ne){Oe!==Ne&&(n.clearDepth(Ne),Oe=Ne)},reset:function(){U=!1,fe=null,pe=null,Oe=null}}}function o(){let U=!1,fe=null,pe=null,Oe=null,Ne=null,Tt=null,Rt=null,un=null,Pn=null;return{setTest:function(Ct){U||(Ct?ge(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Ct){fe!==Ct&&!U&&(n.stencilMask(Ct),fe=Ct)},setFunc:function(Ct,In,Ni){(pe!==Ct||Oe!==In||Ne!==Ni)&&(n.stencilFunc(Ct,In,Ni),pe=Ct,Oe=In,Ne=Ni)},setOp:function(Ct,In,Ni){(Tt!==Ct||Rt!==In||un!==Ni)&&(n.stencilOp(Ct,In,Ni),Tt=Ct,Rt=In,un=Ni)},setLocked:function(Ct){U=Ct},setClear:function(Ct){Pn!==Ct&&(n.clearStencil(Ct),Pn=Ct)},reset:function(){U=!1,fe=null,pe=null,Oe=null,Ne=null,Tt=null,Rt=null,un=null,Pn=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap,h={},p={},g=new WeakMap,y=[],f=null,m=!1,x=null,v=null,S=null,T=null,P=null,L=null,H=null,_=new Ie(0,0,0),b=0,I=!1,O=null,F=null,C=null,M=null,D=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=G>=2);let J=null,ee={},B=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),le=new Mt().fromArray(B),Ae=new Mt().fromArray(K);function Q(U,fe,pe,Oe){let Ne=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(U,Tt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<pe;Rt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(fe+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return Tt}let oe={};oe[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(n.DEPTH_TEST),l.setFunc(jl),Ze(!1),R(Rp),ge(n.CULL_FACE),Ee(Us);function ge(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function xe(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Qe(U,fe){return p[U]!==fe?(n.bindFramebuffer(U,fe),p[U]=fe,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function q(U,fe){let pe=y,Oe=!1;if(U)if(pe=g.get(fe),pe===void 0&&(pe=[],g.set(fe,pe)),U.isWebGLMultipleRenderTargets){let Ne=U.texture;if(pe.length!==Ne.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Rt=Ne.length;Tt<Rt;Tt++)pe[Tt]=n.COLOR_ATTACHMENT0+Tt;pe.length=Ne.length,Oe=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,Oe=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Kt(U){return f!==U?(n.useProgram(U),f=U,!0):!1}let Le={[mr]:n.FUNC_ADD,[_v]:n.FUNC_SUBTRACT,[wv]:n.FUNC_REVERSE_SUBTRACT};if(i)Le[Ip]=n.MIN,Le[Np]=n.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Le[Ip]=U.MIN_EXT,Le[Np]=U.MAX_EXT)}let Be={[Mv]:n.ZERO,[Sv]:n.ONE,[Av]:n.SRC_COLOR,[Ad]:n.SRC_ALPHA,[Pv]:n.SRC_ALPHA_SATURATE,[Cv]:n.DST_COLOR,[Tv]:n.DST_ALPHA,[Ev]:n.ONE_MINUS_SRC_COLOR,[Ed]:n.ONE_MINUS_SRC_ALPHA,[Lv]:n.ONE_MINUS_DST_COLOR,[Rv]:n.ONE_MINUS_DST_ALPHA,[Iv]:n.CONSTANT_COLOR,[Nv]:n.ONE_MINUS_CONSTANT_COLOR,[Dv]:n.CONSTANT_ALPHA,[kv]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(U,fe,pe,Oe,Ne,Tt,Rt,un,Pn,Ct){if(U===Us){m===!0&&(xe(n.BLEND),m=!1);return}if(m===!1&&(ge(n.BLEND),m=!0),U!==bv){if(U!==x||Ct!==I){if((v!==mr||P!==mr)&&(n.blendEquation(n.FUNC_ADD),v=mr,P=mr),Ct)switch(U){case da:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cp:n.blendFunc(n.ONE,n.ONE);break;case Lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case da:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,T=null,L=null,H=null,_.set(0,0,0),b=0,x=U,I=Ct}return}Ne=Ne||fe,Tt=Tt||pe,Rt=Rt||Oe,(fe!==v||Ne!==P)&&(n.blendEquationSeparate(Le[fe],Le[Ne]),v=fe,P=Ne),(pe!==S||Oe!==T||Tt!==L||Rt!==H)&&(n.blendFuncSeparate(Be[pe],Be[Oe],Be[Tt],Be[Rt]),S=pe,T=Oe,L=Tt,H=Rt),(un.equals(_)===!1||Pn!==b)&&(n.blendColor(un.r,un.g,un.b,Pn),_.copy(un),b=Pn),x=U,I=!1}function Ut(U,fe){U.side===kn?xe(n.CULL_FACE):ge(n.CULL_FACE);let pe=U.side===Gn;fe&&(pe=!pe),Ze(pe),U.blending===da&&U.transparent===!1?Ee(Us):Ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let Oe=U.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(U){O!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),O=U)}function R(U){U!==yv?(ge(n.CULL_FACE),U!==F&&(U===Rp?n.cullFace(n.BACK):U===vv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),F=U}function w(U){U!==C&&(W&&n.lineWidth(U),C=U)}function $(U,fe,pe){U?(ge(n.POLYGON_OFFSET_FILL),(M!==fe||D!==pe)&&(n.polygonOffset(fe,pe),M=fe,D=pe)):xe(n.POLYGON_OFFSET_FILL)}function re(U){U?ge(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function se(U){U===void 0&&(U=n.TEXTURE0+V-1),J!==U&&(n.activeTexture(U),J=U)}function ae(U,fe,pe){pe===void 0&&(J===null?pe=n.TEXTURE0+V-1:pe=J);let Oe=ee[pe];Oe===void 0&&(Oe={type:void 0,texture:void 0},ee[pe]=Oe),(Oe.type!==U||Oe.texture!==fe)&&(J!==pe&&(n.activeTexture(pe),J=pe),n.bindTexture(U,fe||oe[U]),Oe.type=U,Oe.texture=fe)}function Te(){let U=ee[J];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(U){le.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function xt(U){Ae.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ae.copy(U))}function Xt(U,fe){let pe=d.get(fe);pe===void 0&&(pe=new WeakMap,d.set(fe,pe));let Oe=pe.get(U);Oe===void 0&&(Oe=n.getUniformBlockIndex(fe,U.name),pe.set(U,Oe))}function et(U,fe){let Oe=d.get(fe).get(U);u.get(fe)!==Oe&&(n.uniformBlockBinding(fe,Oe,U.__bindingPointIndex),u.set(fe,Oe))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,ee={},p={},g=new WeakMap,y=[],f=null,m=!1,x=null,v=null,S=null,T=null,P=null,L=null,H=null,_=new Ie(0,0,0),b=0,I=!1,O=null,F=null,C=null,M=null,D=null,le.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:xe,bindFramebuffer:Qe,drawBuffers:q,useProgram:Kt,setBlending:Ee,setMaterial:Ut,setFlipSided:Ze,setCullFace:R,setLineWidth:w,setPolygonOffset:$,setScissorTest:re,activeTexture:se,bindTexture:ae,unbindTexture:Te,compressedTexImage2D:me,compressedTexImage3D:be,texImage2D:Pe,texImage3D:_e,updateUBOMapping:Xt,uniformBlockBinding:et,texStorage2D:it,texStorage3D:ze,texSubImage2D:ke,texSubImage3D:Ke,compressedTexSubImage2D:ie,compressedTexSubImage3D:bt,scissor:qe,viewport:xt,reset:ce}}function vS(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):po("canvas")}function y(R,w,$,re){let se=1;if((R.width>re||R.height>re)&&(se=re/Math.max(R.width,R.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ae=w?tc:Math.floor,Te=ae(se*R.width),me=ae(se*R.height);d===void 0&&(d=g(Te,me));let be=$?g(Te,me):d;return be.width=Te,be.height=me,be.getContext("2d").drawImage(R,0,0,Te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+me+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function f(R){return Pd(R.width)&&Pd(R.height)}function m(R){return a?!1:R.wrapS!==ei||R.wrapT!==ei||R.minFilter!==sn&&R.minFilter!==Qt}function x(R,w){return R.generateMipmaps&&w&&R.minFilter!==sn&&R.minFilter!==Qt}function v(R){n.generateMipmap(R)}function S(R,w,$,re,se=!1){if(a===!1)return w;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=w;if(w===n.RED&&($===n.FLOAT&&(ae=n.R32F),$===n.HALF_FLOAT&&(ae=n.R16F),$===n.UNSIGNED_BYTE&&(ae=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ae=n.R8UI),$===n.UNSIGNED_SHORT&&(ae=n.R16UI),$===n.UNSIGNED_INT&&(ae=n.R32UI),$===n.BYTE&&(ae=n.R8I),$===n.SHORT&&(ae=n.R16I),$===n.INT&&(ae=n.R32I)),w===n.RG&&($===n.FLOAT&&(ae=n.RG32F),$===n.HALF_FLOAT&&(ae=n.RG16F),$===n.UNSIGNED_BYTE&&(ae=n.RG8)),w===n.RGBA){let Te=se?Kl:pt.getTransfer(re);$===n.FLOAT&&(ae=n.RGBA32F),$===n.HALF_FLOAT&&(ae=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ae=Te===Nt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function T(R,w,$){return x(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Qt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){return R===sn||R===Zl||R===ao?n.NEAREST:n.LINEAR}function L(R){let w=R.target;w.removeEventListener("dispose",L),_(w),w.isVideoTexture&&u.delete(w)}function H(R){let w=R.target;w.removeEventListener("dispose",H),I(w)}function _(R){let w=i.get(R);if(w.__webglInit===void 0)return;let $=R.source,re=h.get($);if(re){let se=re[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(R),Object.keys(re).length===0&&h.delete($)}i.remove(R)}function b(R){let w=i.get(R);n.deleteTexture(w.__webglTexture);let $=R.source,re=h.get($);delete re[w.__cacheKey],o.memory.textures--}function I(R){let w=R.texture,$=i.get(R),re=i.get(w);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray($.__webglFramebuffer[se]))for(let ae=0;ae<$.__webglFramebuffer[se].length;ae++)n.deleteFramebuffer($.__webglFramebuffer[se][ae]);else n.deleteFramebuffer($.__webglFramebuffer[se]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[se])}else{if(Array.isArray($.__webglFramebuffer))for(let se=0;se<$.__webglFramebuffer.length;se++)n.deleteFramebuffer($.__webglFramebuffer[se]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let se=0;se<$.__webglColorRenderbuffer.length;se++)$.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[se]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let se=0,ae=w.length;se<ae;se++){let Te=i.get(w[se]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(w[se])}i.remove(w),i.remove(R)}let O=0;function F(){O=0}function C(){let R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function M(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function D(R,w){let $=i.get(R);if(R.isVideoTexture&&Ut(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){let re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le($,R,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function V(R,w){let $=i.get(R);if(R.version>0&&$.__version!==R.version){le($,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function W(R,w){let $=i.get(R);if(R.version>0&&$.__version!==R.version){le($,R,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function G(R,w){let $=i.get(R);if(R.version>0&&$.__version!==R.version){Ae($,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}let Z={[br]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},J={[sn]:n.NEAREST,[Zl]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[lh]:n.LINEAR_MIPMAP_NEAREST,[zs]:n.LINEAR_MIPMAP_LINEAR},ee={[ux]:n.NEVER,[gx]:n.ALWAYS,[dx]:n.LESS,[Eg]:n.LEQUAL,[hx]:n.EQUAL,[mx]:n.GEQUAL,[fx]:n.GREATER,[px]:n.NOTEQUAL};function B(R,w,$){if($?(n.texParameteri(R,n.TEXTURE_WRAP_S,Z[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,J[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,J[w.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==ei||w.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,P(w.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,P(w.minFilter)),w.minFilter!==sn&&w.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===sn||w.minFilter!==ao&&w.minFilter!==zs||w.type===os&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function K(R,w){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",L));let re=w.source,se=h.get(re);se===void 0&&(se={},h.set(re,se));let ae=M(w);if(ae!==R.__cacheKey){se[ae]===void 0&&(se[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),se[ae].usedTimes++;let Te=se[R.__cacheKey];Te!==void 0&&(se[R.__cacheKey].usedTimes--,Te.usedTimes===0&&b(w)),R.__cacheKey=ae,R.__webglTexture=se[ae].texture}return $}function le(R,w,$){let re=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=n.TEXTURE_3D);let se=K(R,w),ae=w.source;t.bindTexture(re,R.__webglTexture,n.TEXTURE0+$);let Te=i.get(ae);if(ae.version!==Te.__version||se===!0){t.activeTexture(n.TEXTURE0+$);let me=pt.getPrimaries(pt.workingColorSpace),be=w.colorSpace===di?null:pt.getPrimaries(w.colorSpace),ke=w.colorSpace===di||me===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ke=m(w)&&f(w.image)===!1,ie=y(w.image,Ke,!1,s.maxTextureSize);ie=Ze(w,ie);let bt=f(ie)||a,it=r.convert(w.format,w.colorSpace),ze=r.convert(w.type),Pe=S(w.internalFormat,it,ze,w.colorSpace,w.isVideoTexture);B(re,w,bt);let _e,qe=w.mipmaps,xt=a&&w.isVideoTexture!==!0&&Pe!==Mg,Xt=Te.__version===void 0||se===!0,et=T(w,ie,bt);if(w.isDepthTexture)Pe=n.DEPTH_COMPONENT,a?w.type===os?Pe=n.DEPTH_COMPONENT32F:w.type===ks?Pe=n.DEPTH_COMPONENT24:w.type===yr?Pe=n.DEPTH24_STENCIL8:Pe=n.DEPTH_COMPONENT16:w.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vr&&Pe===n.DEPTH_COMPONENT&&w.type!==ch&&w.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ks,ze=r.convert(w.type)),w.format===ga&&Pe===n.DEPTH_COMPONENT&&(Pe=n.DEPTH_STENCIL,w.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=yr,ze=r.convert(w.type))),Xt&&(xt?t.texStorage2D(n.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ie.width,ie.height,0,it,ze,null));else if(w.isDataTexture)if(qe.length>0&&bt){xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,et,Pe,qe[0].width,qe[0].height);for(let ce=0,U=qe.length;ce<U;ce++)_e=qe[ce],xt?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,_e.width,_e.height,it,ze,_e.data):t.texImage2D(n.TEXTURE_2D,ce,Pe,_e.width,_e.height,0,it,ze,_e.data);w.generateMipmaps=!1}else xt?(Xt&&t.texStorage2D(n.TEXTURE_2D,et,Pe,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,it,ze,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ie.width,ie.height,0,it,ze,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xt&&Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,Pe,qe[0].width,qe[0].height,ie.depth);for(let ce=0,U=qe.length;ce<U;ce++)_e=qe[ce],w.format!==ui?it!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,_e.width,_e.height,ie.depth,it,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Pe,_e.width,_e.height,ie.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,_e.width,_e.height,ie.depth,it,ze,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Pe,_e.width,_e.height,ie.depth,0,it,ze,_e.data)}else{xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,et,Pe,qe[0].width,qe[0].height);for(let ce=0,U=qe.length;ce<U;ce++)_e=qe[ce],w.format!==ui?it!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,_e.width,_e.height,it,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,_e.width,_e.height,it,ze,_e.data):t.texImage2D(n.TEXTURE_2D,ce,Pe,_e.width,_e.height,0,it,ze,_e.data)}else if(w.isDataArrayTexture)xt?(Xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,Pe,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,it,ze,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,it,ze,ie.data);else if(w.isData3DTexture)xt?(Xt&&t.texStorage3D(n.TEXTURE_3D,et,Pe,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,it,ze,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,it,ze,ie.data);else if(w.isFramebufferTexture){if(Xt)if(xt)t.texStorage2D(n.TEXTURE_2D,et,Pe,ie.width,ie.height);else{let ce=ie.width,U=ie.height;for(let fe=0;fe<et;fe++)t.texImage2D(n.TEXTURE_2D,fe,Pe,ce,U,0,it,ze,null),ce>>=1,U>>=1}}else if(qe.length>0&&bt){xt&&Xt&&t.texStorage2D(n.TEXTURE_2D,et,Pe,qe[0].width,qe[0].height);for(let ce=0,U=qe.length;ce<U;ce++)_e=qe[ce],xt?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,it,ze,_e):t.texImage2D(n.TEXTURE_2D,ce,Pe,it,ze,_e);w.generateMipmaps=!1}else xt?(Xt&&t.texStorage2D(n.TEXTURE_2D,et,Pe,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,it,ze,ie)):t.texImage2D(n.TEXTURE_2D,0,Pe,it,ze,ie);x(w,bt)&&v(re),Te.__version=ae.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ae(R,w,$){if(w.image.length!==6)return;let re=K(R,w),se=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+$);let ae=i.get(se);if(se.version!==ae.__version||re===!0){t.activeTexture(n.TEXTURE0+$);let Te=pt.getPrimaries(pt.workingColorSpace),me=w.colorSpace===di?null:pt.getPrimaries(w.colorSpace),be=w.colorSpace===di||Te===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ke=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,ie=[];for(let ce=0;ce<6;ce++)!ke&&!Ke?ie[ce]=y(w.image[ce],!1,!0,s.maxCubemapSize):ie[ce]=Ke?w.image[ce].image:w.image[ce],ie[ce]=Ze(w,ie[ce]);let bt=ie[0],it=f(bt)||a,ze=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type),_e=S(w.internalFormat,ze,Pe,w.colorSpace),qe=a&&w.isVideoTexture!==!0,xt=ae.__version===void 0||re===!0,Xt=T(w,bt,it);B(n.TEXTURE_CUBE_MAP,w,it);let et;if(ke){qe&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,_e,bt.width,bt.height);for(let ce=0;ce<6;ce++){et=ie[ce].mipmaps;for(let U=0;U<et.length;U++){let fe=et[U];w.format!==ui?ze!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U,0,0,fe.width,fe.height,ze,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U,0,0,fe.width,fe.height,ze,Pe,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U,_e,fe.width,fe.height,0,ze,Pe,fe.data)}}}else{et=w.mipmaps,qe&&xt&&(et.length>0&&Xt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Xt,_e,ie[0].width,ie[0].height));for(let ce=0;ce<6;ce++)if(Ke){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ie[ce].width,ie[ce].height,ze,Pe,ie[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,_e,ie[ce].width,ie[ce].height,0,ze,Pe,ie[ce].data);for(let U=0;U<et.length;U++){let pe=et[U].image[ce].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U+1,0,0,pe.width,pe.height,ze,Pe,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U+1,_e,pe.width,pe.height,0,ze,Pe,pe.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ze,Pe,ie[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,_e,ze,Pe,ie[ce]);for(let U=0;U<et.length;U++){let fe=et[U];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U+1,0,0,ze,Pe,fe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,U+1,_e,ze,Pe,fe.image[ce])}}}x(w,it)&&v(n.TEXTURE_CUBE_MAP),ae.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,$,re,se,ae){let Te=r.convert($.format,$.colorSpace),me=r.convert($.type),be=S($.internalFormat,Te,me,$.colorSpace);if(!i.get(w).__hasExternalTextures){let Ke=Math.max(1,w.width>>ae),ie=Math.max(1,w.height>>ae);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ae,be,Ke,ie,w.depth,0,Te,me,null):t.texImage2D(se,ae,be,Ke,ie,0,Te,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ee(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,se,i.get($).__webglTexture,0,Be(w)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,se,i.get($).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(R,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||Ee(w)){let se=w.depthTexture;se&&se.isDepthTexture&&(se.type===os?re=n.DEPTH_COMPONENT32F:se.type===ks&&(re=n.DEPTH_COMPONENT24));let ae=Be(w);Ee(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,re,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,re,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let re=Be(w);$&&Ee(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,w.width,w.height):Ee(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<re.length;se++){let ae=re[se],Te=r.convert(ae.format,ae.colorSpace),me=r.convert(ae.type),be=S(ae.internalFormat,Te,me,ae.colorSpace),ke=Be(w);$&&Ee(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,be,w.width,w.height):Ee(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,be,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,be,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);let re=i.get(w.depthTexture).__webglTexture,se=Be(w);if(w.depthTexture.format===vr)Ee(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(w.depthTexture.format===ga)Ee(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(R){let w=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ge(w.__webglFramebuffer,R)}else if($){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=n.createRenderbuffer(),oe(w.__webglDepthbuffer[re],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),oe(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(R,w,$){let re=i.get(R);w!==void 0&&Q(re.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&xe(R)}function q(R){let w=R.texture,$=i.get(R),re=i.get(w);R.addEventListener("dispose",H),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=w.version,o.memory.textures++);let se=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,Te=f(R)||a;if(se){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let be=0;be<w.mipmaps.length;be++)$.__webglFramebuffer[me][be]=n.createFramebuffer()}else $.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)$.__webglFramebuffer[me]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(ae)if(s.drawBuffers){let me=R.texture;for(let be=0,ke=me.length;be<ke;be++){let Ke=i.get(me[be]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ee(R)===!1){let me=ae?w:[w];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let be=0;be<me.length;be++){let ke=me[be];$.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[be]);let Ke=r.convert(ke.format,ke.colorSpace),ie=r.convert(ke.type),bt=S(ke.internalFormat,Ke,ie,ke.colorSpace,R.isXRRenderTarget===!0),it=Be(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,bt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,$.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),oe($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),B(n.TEXTURE_CUBE_MAP,w,Te);for(let me=0;me<6;me++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Q($.__webglFramebuffer[me][be],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,be);else Q($.__webglFramebuffer[me],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(w,Te)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let me=R.texture;for(let be=0,ke=me.length;be<ke;be++){let Ke=me[be],ie=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),B(n.TEXTURE_2D,Ke,Te),Q($.__webglFramebuffer,R,Ke,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),x(Ke,Te)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,re.__webglTexture),B(me,w,Te),a&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Q($.__webglFramebuffer[be],R,w,n.COLOR_ATTACHMENT0,me,be);else Q($.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,me,0);x(w,Te)&&v(me),t.unbindTexture()}R.depthBuffer&&xe(R)}function Kt(R){let w=f(R)||a,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,se=$.length;re<se;re++){let ae=$[re];if(x(ae,w)){let Te=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(ae).__webglTexture;t.bindTexture(Te,me),v(Te),t.unbindTexture()}}}function Le(R){if(a&&R.samples>0&&Ee(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],$=R.width,re=R.height,se=n.COLOR_BUFFER_BIT,ae=[],Te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(R),be=R.isWebGLMultipleRenderTargets===!0;if(be)for(let ke=0;ke<w.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){ae.push(n.COLOR_ATTACHMENT0+ke),R.depthBuffer&&ae.push(Te);let Ke=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ke===!1&&(R.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ke]),Ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),be){let ie=i.get(w[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,$,re,0,0,$,re,se,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let ke=0;ke<w.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,me.__webglColorRenderbuffer[ke]);let Ke=i.get(w[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Be(R){return Math.min(s.maxSamples,R.samples)}function Ee(R){let w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(R){let w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Ze(R,w){let $=R.colorSpace,re=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ld||$!==rn&&$!==di&&(pt.getTransfer($)===Nt?a===!1?e.has("EXT_sRGB")===!0&&re===ui?(R.format=Ld,R.minFilter=Qt,R.generateMipmaps=!1):w=nc.sRGBToLinear(w):(re!==ui||se!==Bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}this.allocateTextureUnit=C,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Qe,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ee}function xS(n,e,t){let i=t.isWebGL2;function s(r,o=di){let a,l=pt.getTransfer(o);if(r===Bs)return n.UNSIGNED_BYTE;if(r===vg)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xg)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Jv)return n.BYTE;if(r===Qv)return n.SHORT;if(r===ch)return n.UNSIGNED_SHORT;if(r===yg)return n.INT;if(r===ks)return n.UNSIGNED_INT;if(r===os)return n.FLOAT;if(r===fo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ex)return n.ALPHA;if(r===ui)return n.RGBA;if(r===tx)return n.LUMINANCE;if(r===nx)return n.LUMINANCE_ALPHA;if(r===vr)return n.DEPTH_COMPONENT;if(r===ga)return n.DEPTH_STENCIL;if(r===Ld)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ix)return n.RED;if(r===bg)return n.RED_INTEGER;if(r===sx)return n.RG;if(r===_g)return n.RG_INTEGER;if(r===wg)return n.RGBA_INTEGER;if(r===Xu||r===$u||r===Yu||r===ju)if(l===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$u)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ju)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kp||r===Op||r===Up||r===Fp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Op)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Up)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bp||r===zp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bp)return l===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hp||r===Vp||r===Gp||r===Wp||r===qp||r===Xp||r===$p||r===Yp||r===jp||r===Zp||r===Kp||r===Jp||r===Qp||r===em)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$p)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===em)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zu||r===tm||r===nm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Zu)return l===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===tm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rx||r===im||r===sm||r===rm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Zu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===im)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===yr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Wd=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bS={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),m=this._getHandJoint(c,y);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},qd=class extends Hs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,y=t.getContextAttributes(),f=null,m=null,x=[],v=[],S=new $e,T=null,P=new zt;P.layers.enable(1),P.viewport=new Mt;let L=new zt;L.layers.enable(2),L.viewport=new Mt;let H=[P,L],_=new Wd;_.layers.enable(1),_.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=x[B];return K===void 0&&(K=new uo,x[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=x[B];return K===void 0&&(K=new uo,x[B]=K),K.getGripSpace()},this.getHand=function(B){let K=x[B];return K===void 0&&(K=new uo,x[B]=K),K.getHandSpace()};function O(B){let K=v.indexOf(B.inputSource);if(K===-1)return;let le=x[K];le!==void 0&&(le.update(B.inputSource,B.frame,c||o),le.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",C);for(let B=0;B<x.length;B++){let K=v[B];K!==null&&(v[B]=null,x[B].disconnect(K))}b=null,I=null,e.setRenderTarget(f),p=null,h=null,d=null,s=null,m=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",F),s.addEventListener("inputsourceschange",C),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new cs(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Bs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,le=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?ga:vr,le=y.stencil?yr:ks);let Q={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Q),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new cs(h.textureWidth,h.textureHeight,{format:ui,type:Bs,depthTexture:new uc(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let oe=e.properties.get(m);oe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(B){for(let K=0;K<B.removed.length;K++){let le=B.removed[K],Ae=v.indexOf(le);Ae>=0&&(v[Ae]=null,x[Ae].disconnect(le))}for(let K=0;K<B.added.length;K++){let le=B.added[K],Ae=v.indexOf(le);if(Ae===-1){for(let oe=0;oe<x.length;oe++)if(oe>=v.length){v.push(le),Ae=oe;break}else if(v[oe]===null){v[oe]=le,Ae=oe;break}if(Ae===-1)break}let Q=x[Ae];Q&&Q.connect(le)}}let M=new N,D=new N;function V(B,K,le){M.setFromMatrixPosition(K.matrixWorld),D.setFromMatrixPosition(le.matrixWorld);let Ae=M.distanceTo(D),Q=K.projectionMatrix.elements,oe=le.projectionMatrix.elements,ge=Q[14]/(Q[10]-1),xe=Q[14]/(Q[10]+1),Qe=(Q[9]+1)/Q[5],q=(Q[9]-1)/Q[5],Kt=(Q[8]-1)/Q[0],Le=(oe[8]+1)/oe[0],Be=ge*Kt,Ee=ge*Le,Ut=Ae/(-Kt+Le),Ze=Ut*-Kt;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ze),B.translateZ(Ut),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let R=ge+Ut,w=xe+Ut,$=Be-Ze,re=Ee+(Ae-Ze),se=Qe*xe/w*R,ae=q*xe/w*R;B.projectionMatrix.makePerspective($,re,se,ae,R,w),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;_.near=L.near=P.near=B.near,_.far=L.far=P.far=B.far,(b!==_.near||I!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,I=_.far);let K=B.parent,le=_.cameras;W(_,K);for(let Ae=0;Ae<le.length;Ae++)W(le[Ae],K);le.length===2?V(_,P,L):_.projectionMatrix.copy(P.projectionMatrix),G(B,_,K)};function G(B,K,le){le===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(le.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=va*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let Z=null;function J(B,K){if(u=K.getViewerPose(c||o),g=K,u!==null){let le=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let Ae=!1;le.length!==_.cameras.length&&(_.cameras.length=0,Ae=!0);for(let Q=0;Q<le.length;Q++){let oe=le[Q],ge=null;if(p!==null)ge=p.getViewport(oe);else{let Qe=d.getViewSubImage(h,oe);ge=Qe.viewport,Q===0&&(e.setRenderTargetTextures(m,Qe.colorTexture,h.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(m))}let xe=H[Q];xe===void 0&&(xe=new zt,xe.layers.enable(Q),xe.viewport=new Mt,H[Q]=xe),xe.matrix.fromArray(oe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(oe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ge.x,ge.y,ge.width,ge.height),Q===0&&(_.matrix.copy(xe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ae===!0&&_.cameras.push(xe)}}for(let le=0;le<x.length;le++){let Ae=v[le],Q=x[le];Ae!==null&&Q!==void 0&&Q.update(Ae,K,c||o)}Z&&Z(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let ee=new Lg;ee.setAnimationLoop(J),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}};function _S(n,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,Cg(n)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,x,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),d(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m)):m.isMeshStandardMaterial?(r(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,S)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),y(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,x,v):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Gn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Gn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,x,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=v*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,x){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function y(f,m){let x=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wS(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=s[x.id];S===void 0&&(g(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",f));let T=v.program;i.updateUBOMapping(x,T);let P=e.render.frame;r[x.id]!==P&&(h(x),r[x.id]=P)}function u(x){let v=d();x.__bindingPointIndex=v;let S=n.createBuffer(),T=x.__size,P=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let v=s[x.id],S=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let P=0,L=S.length;P<L;P++){let H=Array.isArray(S[P])?S[P]:[S[P]];for(let _=0,b=H.length;_<b;_++){let I=H[_];if(p(I,P,_,T)===!0){let O=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],C=0;for(let M=0;M<F.length;M++){let D=F[M],V=y(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,O+C,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,C),C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,S,T){let P=x.value,L=v+"_"+S;if(T[L]===void 0)return typeof P=="number"||typeof P=="boolean"?T[L]=P:T[L]=P.clone(),!0;{let H=T[L];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return T[L]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function g(x){let v=x.uniforms,S=0,T=16;for(let L=0,H=v.length;L<H;L++){let _=Array.isArray(v[L])?v[L]:[v[L]];for(let b=0,I=_.length;b<I;b++){let O=_[b],F=Array.isArray(O.value)?O.value:[O.value];for(let C=0,M=F.length;C<M;C++){let D=F[C],V=y(D),W=S%T;W!==0&&T-W<V.boundary&&(S+=T-W),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=V.storage}}}let P=S%T;return P>0&&(S+=T-P),x.__size=S,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function f(x){let v=x.target;v.removeEventListener("dispose",f);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Mr=class{constructor(e={}){let{canvas:t=Px(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=new Uint32Array(4),g=new Int32Array(4),y=null,f=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Fs,this.toneMappingExposure=1;let v=this,S=!1,T=0,P=0,L=null,H=-1,_=null,b=new Mt,I=new Mt,O=null,F=new Ie(0),C=0,M=t.width,D=t.height,V=1,W=null,G=null,Z=new Mt(0,0,M,D),J=new Mt(0,0,M,D),ee=!1,B=new go,K=!1,le=!1,Ae=null,Q=new we,oe=new $e,ge=new N,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return L===null?V:1}let q=i;function Kt(A,z){for(let Y=0;Y<A.length;Y++){let j=A[Y],X=t.getContext(j,z);if(X!==null)return X}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",fe,!1),q===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),q=Kt(z,A),q===null)throw Kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Le,Be,Ee,Ut,Ze,R,w,$,re,se,ae,Te,me,be,ke,Ke,ie,bt,it,ze,Pe,_e,qe,xt;function Xt(){Le=new Hw(q),Be=new kw(q,Le,e),Le.init(Be),_e=new xS(q,Le,Be),Ee=new yS(q,Le,Be),Ut=new Ww(q),Ze=new rS,R=new vS(q,Le,Ee,Ze,Be,_e,Ut),w=new Uw(v),$=new zw(v),re=new Jx(q,Be),qe=new Nw(q,Le,re,Be),se=new Vw(q,re,Ut,qe),ae=new Yw(q,se,re,Ut),it=new $w(q,Be,R),Ke=new Ow(Ze),Te=new sS(v,w,$,Le,Be,qe,Ke),me=new _S(v,Ze),be=new oS,ke=new fS(Le,Be),bt=new Iw(v,w,$,Ee,ae,h,l),ie=new gS(v,ae,Be),xt=new wS(q,Ut,Be,Ee),ze=new Dw(q,Le,Ut,Be),Pe=new Gw(q,Le,Ut,Be),Ut.programs=Te.programs,v.capabilities=Be,v.extensions=Le,v.properties=Ze,v.renderLists=be,v.shadowMap=ie,v.state=Ee,v.info=Ut}Xt();let et=new qd(v,q);this.xr=et,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let A=Le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(M,D,!1))},this.getSize=function(A){return A.set(M,D)},this.setSize=function(A,z,Y=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=A,D=z,t.width=Math.floor(A*V),t.height=Math.floor(z*V),Y===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(M*V,D*V).floor()},this.setDrawingBufferSize=function(A,z,Y){M=A,D=z,V=Y,t.width=Math.floor(A*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,z,Y,j){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,z,Y,j),Ee.viewport(b.copy(Z).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,z,Y,j){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,Y,j),Ee.scissor(I.copy(J).multiplyScalar(V).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){Ee.setScissorTest(ee=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(A=!0,z=!0,Y=!0){let j=0;if(A){let X=!1;if(L!==null){let ve=L.texture.format;X=ve===wg||ve===_g||ve===bg}if(X){let ve=L.texture.type,Re=ve===Bs||ve===ks||ve===ch||ve===yr||ve===vg||ve===xg,De=bt.getClearColor(),Ue=bt.getClearAlpha(),Je=De.r,He=De.g,Ve=De.b;Re?(p[0]=Je,p[1]=He,p[2]=Ve,p[3]=Ue,q.clearBufferuiv(q.COLOR,0,p)):(g[0]=Je,g[1]=He,g[2]=Ve,g[3]=Ue,q.clearBufferiv(q.COLOR,0,g))}else j|=q.COLOR_BUFFER_BIT}z&&(j|=q.DEPTH_BUFFER_BIT),Y&&(j|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),be.dispose(),ke.dispose(),Ze.dispose(),w.dispose(),$.dispose(),ae.dispose(),qe.dispose(),xt.dispose(),Te.dispose(),et.dispose(),et.removeEventListener("sessionstart",Pn),et.removeEventListener("sessionend",Ct),Ae&&(Ae.dispose(),Ae=null),In.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=Ut.autoReset,z=ie.enabled,Y=ie.autoUpdate,j=ie.needsUpdate,X=ie.type;Xt(),Ut.autoReset=A,ie.enabled=z,ie.autoUpdate=Y,ie.needsUpdate=j,ie.type=X}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){let z=A.target;z.removeEventListener("dispose",pe),Oe(z)}function Oe(A){Ne(A),Ze.remove(A)}function Ne(A){let z=Ze.get(A).programs;z!==void 0&&(z.forEach(function(Y){Te.releaseProgram(Y)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Y,j,X,ve){z===null&&(z=xe);let Re=X.isMesh&&X.matrixWorld.determinant()<0,De=fv(A,z,Y,j,X);Ee.setMaterial(j,Re);let Ue=Y.index,Je=1;if(j.wireframe===!0){if(Ue=se.getWireframeAttribute(Y),Ue===void 0)return;Je=2}let He=Y.drawRange,Ve=Y.attributes.position,jt=He.start*Je,Zn=(He.start+He.count)*Je;ve!==null&&(jt=Math.max(jt,ve.start*Je),Zn=Math.min(Zn,(ve.start+ve.count)*Je)),Ue!==null?(jt=Math.max(jt,0),Zn=Math.min(Zn,Ue.count)):Ve!=null&&(jt=Math.max(jt,0),Zn=Math.min(Zn,Ve.count));let dn=Zn-jt;if(dn<0||dn===1/0)return;qe.setup(X,j,De,Y,Ue);let Qi,Ft=ze;if(Ue!==null&&(Qi=re.get(Ue),Ft=Pe,Ft.setIndex(Qi)),X.isMesh)j.wireframe===!0?(Ee.setLineWidth(j.wireframeLinewidth*Qe()),Ft.setMode(q.LINES)):Ft.setMode(q.TRIANGLES);else if(X.isLine){let tt=j.linewidth;tt===void 0&&(tt=1),Ee.setLineWidth(tt*Qe()),X.isLineSegments?Ft.setMode(q.LINES):X.isLineLoop?Ft.setMode(q.LINE_LOOP):Ft.setMode(q.LINE_STRIP)}else X.isPoints?Ft.setMode(q.POINTS):X.isSprite&&Ft.setMode(q.TRIANGLES);if(X.isBatchedMesh)Ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Ft.renderInstances(jt,dn,X.count);else if(Y.isInstancedBufferGeometry){let tt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Vu=Math.min(Y.instanceCount,tt);Ft.renderInstances(jt,dn,Vu)}else Ft.render(jt,dn)};function Tt(A,z,Y){A.transparent===!0&&A.side===kn&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,bl(A,z,Y),A.side=Oi,A.needsUpdate=!0,bl(A,z,Y),A.side=kn):bl(A,z,Y)}this.compile=function(A,z,Y=null){Y===null&&(Y=A),f=ke.get(Y),f.init(),x.push(f),Y.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(v._useLegacyLights);let j=new Set;return A.traverse(function(X){let ve=X.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let De=ve[Re];Tt(De,Y,X),j.add(De)}else Tt(ve,Y,X),j.add(ve)}),x.pop(),f=null,j},this.compileAsync=function(A,z,Y=null){let j=this.compile(A,z,Y);return new Promise(X=>{function ve(){if(j.forEach(function(Re){Ze.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){X(A);return}setTimeout(ve,10)}Le.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Rt=null;function un(A){Rt&&Rt(A)}function Pn(){In.stop()}function Ct(){In.start()}let In=new Lg;In.setAnimationLoop(un),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Rt=A,et.setAnimationLoop(A),A===null?In.stop():In.start()},et.addEventListener("sessionstart",Pn),et.addEventListener("sessionend",Ct),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(z),z=et.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,L),f=ke.get(A,x.length),f.init(),x.push(f),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B.setFromProjectionMatrix(Q),le=this.localClippingEnabled,K=Ke.init(this.clippingPlanes,le),y=be.get(A,m.length),y.init(),m.push(y),Ni(A,z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(W,G),this.info.render.frame++,K===!0&&Ke.beginShadows();let Y=f.state.shadowsArray;if(ie.render(Y,A,z),K===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(y,A),f.setupLights(v._useLegacyLights),z.isArrayCamera){let j=z.cameras;for(let X=0,ve=j.length;X<ve;X++){let Re=j[X];wp(y,A,Re,Re.viewport)}}else wp(y,A,z);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(v,A,z),qe.resetDefaultState(),H=-1,_=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Ni(A,z,Y,j){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||B.intersectsSprite(A)){j&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);let Re=ae.update(A),De=A.material;De.visible&&y.push(A,Re,De,Y,ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||B.intersectsObject(A))){let Re=ae.update(A),De=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ge.copy(Re.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(De)){let Ue=Re.groups;for(let Je=0,He=Ue.length;Je<He;Je++){let Ve=Ue[Je],jt=De[Ve.materialIndex];jt&&jt.visible&&y.push(A,Re,jt,Y,ge.z,Ve)}}else De.visible&&y.push(A,Re,De,Y,ge.z,null)}}let ve=A.children;for(let Re=0,De=ve.length;Re<De;Re++)Ni(ve[Re],z,Y,j)}function wp(A,z,Y,j){let X=A.opaque,ve=A.transmissive,Re=A.transparent;f.setupLightsView(Y),K===!0&&Ke.setGlobalState(v.clippingPlanes,Y),ve.length>0&&hv(X,ve,z,Y),j&&Ee.viewport(b.copy(j)),X.length>0&&xl(X,z,Y),ve.length>0&&xl(ve,z,Y),Re.length>0&&xl(Re,z,Y),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function hv(A,z,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let ve=Be.isWebGL2;Ae===null&&(Ae=new cs(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?fo:Bs,minFilter:zs,samples:ve?4:0})),v.getDrawingBufferSize(oe),ve?Ae.setSize(oe.x,oe.y):Ae.setSize(tc(oe.x),tc(oe.y));let Re=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(F),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();let De=v.toneMapping;v.toneMapping=Fs,xl(A,Y,j),R.updateMultisampleRenderTarget(Ae),R.updateRenderTargetMipmap(Ae);let Ue=!1;for(let Je=0,He=z.length;Je<He;Je++){let Ve=z[Je],jt=Ve.object,Zn=Ve.geometry,dn=Ve.material,Qi=Ve.group;if(dn.side===kn&&jt.layers.test(j.layers)){let Ft=dn.side;dn.side=Gn,dn.needsUpdate=!0,Mp(jt,Y,j,Zn,dn,Qi),dn.side=Ft,dn.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(Ae),R.updateRenderTargetMipmap(Ae)),v.setRenderTarget(Re),v.setClearColor(F,C),v.toneMapping=De}function xl(A,z,Y){let j=z.isScene===!0?z.overrideMaterial:null;for(let X=0,ve=A.length;X<ve;X++){let Re=A[X],De=Re.object,Ue=Re.geometry,Je=j===null?Re.material:j,He=Re.group;De.layers.test(Y.layers)&&Mp(De,z,Y,Ue,Je,He)}}function Mp(A,z,Y,j,X,ve){A.onBeforeRender(v,z,Y,j,X,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(v,z,Y,j,A,ve),X.transparent===!0&&X.side===kn&&X.forceSinglePass===!1?(X.side=Gn,X.needsUpdate=!0,v.renderBufferDirect(Y,z,j,X,A,ve),X.side=Oi,X.needsUpdate=!0,v.renderBufferDirect(Y,z,j,X,A,ve),X.side=kn):v.renderBufferDirect(Y,z,j,X,A,ve),A.onAfterRender(v,z,Y,j,X,ve)}function bl(A,z,Y){z.isScene!==!0&&(z=xe);let j=Ze.get(A),X=f.state.lights,ve=f.state.shadowsArray,Re=X.state.version,De=Te.getParameters(A,X.state,ve,z,Y),Ue=Te.getProgramCacheKey(De),Je=j.programs;j.environment=A.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||j.environment),Je===void 0&&(A.addEventListener("dispose",pe),Je=new Map,j.programs=Je);let He=Je.get(Ue);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===Re)return Ap(A,De),He}else De.uniforms=Te.getUniforms(A),A.onBuild(Y,De,v),A.onBeforeCompile(De,v),He=Te.acquireProgram(De,Ue),Je.set(Ue,He),j.uniforms=De.uniforms;let Ve=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Ke.uniform),Ap(A,De),j.needsLights=mv(A),j.lightsStateVersion=Re,j.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function Sp(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=fa.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ap(A,z){let Y=Ze.get(A);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function fv(A,z,Y,j,X){z.isScene!==!0&&(z=xe),R.resetTextureUnits();let ve=z.fog,Re=j.isMeshStandardMaterial?z.environment:null,De=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:rn,Ue=(j.isMeshStandardMaterial?$:w).get(j.envMap||Re),Je=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ve=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,Zn=!!Y.morphAttributes.color,dn=Fs;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(dn=v.toneMapping);let Qi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ft=Qi!==void 0?Qi.length:0,tt=Ze.get(j),Vu=f.state.lights;if(K===!0&&(le===!0||A!==_)){let li=A===_&&j.id===H;Ke.setState(j,A,li)}let $t=!1;j.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Vu.state.version||tt.outputColorSpace!==De||X.isBatchedMesh&&tt.batching===!1||!X.isBatchedMesh&&tt.batching===!0||X.isInstancedMesh&&tt.instancing===!1||!X.isInstancedMesh&&tt.instancing===!0||X.isSkinnedMesh&&tt.skinning===!1||!X.isSkinnedMesh&&tt.skinning===!0||X.isInstancedMesh&&tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&tt.instancingColor===!1&&X.instanceColor!==null||tt.envMap!==Ue||j.fog===!0&&tt.fog!==ve||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ke.numPlanes||tt.numIntersection!==Ke.numIntersection)||tt.vertexAlphas!==Je||tt.vertexTangents!==He||tt.morphTargets!==Ve||tt.morphNormals!==jt||tt.morphColors!==Zn||tt.toneMapping!==dn||Be.isWebGL2===!0&&tt.morphTargetsCount!==Ft)&&($t=!0):($t=!0,tt.__version=j.version);let lr=tt.currentProgram;$t===!0&&(lr=bl(j,z,X));let Ep=!1,Ja=!1,Gu=!1,xn=lr.getUniforms(),cr=tt.uniforms;if(Ee.useProgram(lr.program)&&(Ep=!0,Ja=!0,Gu=!0),j.id!==H&&(H=j.id,Ja=!0),Ep||_!==A){xn.setValue(q,"projectionMatrix",A.projectionMatrix),xn.setValue(q,"viewMatrix",A.matrixWorldInverse);let li=xn.map.cameraPosition;li!==void 0&&li.setValue(q,ge.setFromMatrixPosition(A.matrixWorld)),Be.logarithmicDepthBuffer&&xn.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xn.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,Ja=!0,Gu=!0)}if(X.isSkinnedMesh){xn.setOptional(q,X,"bindMatrix"),xn.setOptional(q,X,"bindMatrixInverse");let li=X.skeleton;li&&(Be.floatVertexTextures?(li.boneTexture===null&&li.computeBoneTexture(),xn.setValue(q,"boneTexture",li.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(xn.setOptional(q,X,"batchingTexture"),xn.setValue(q,"batchingTexture",X._matricesTexture,R));let Wu=Y.morphAttributes;if((Wu.position!==void 0||Wu.normal!==void 0||Wu.color!==void 0&&Be.isWebGL2===!0)&&it.update(X,Y,lr),(Ja||tt.receiveShadow!==X.receiveShadow)&&(tt.receiveShadow=X.receiveShadow,xn.setValue(q,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(cr.envMap.value=Ue,cr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ja&&(xn.setValue(q,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&pv(cr,Gu),ve&&j.fog===!0&&me.refreshFogUniforms(cr,ve),me.refreshMaterialUniforms(cr,j,V,D,Ae),fa.upload(q,Sp(tt),cr,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fa.upload(q,Sp(tt),cr,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xn.setValue(q,"center",X.center),xn.setValue(q,"modelViewMatrix",X.modelViewMatrix),xn.setValue(q,"normalMatrix",X.normalMatrix),xn.setValue(q,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let li=j.uniformsGroups;for(let qu=0,gv=li.length;qu<gv;qu++)if(Be.isWebGL2){let Tp=li[qu];xt.update(Tp,lr),xt.bind(Tp,lr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lr}function pv(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function mv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,z,Y){Ze.get(A.texture).__webglTexture=z,Ze.get(A.depthTexture).__webglTexture=Y;let j=Ze.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){let Y=Ze.get(A);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Y=0){L=A,T=z,P=Y;let j=!0,X=null,ve=!1,Re=!1;if(A){let Ue=Ze.get(A);Ue.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(q.FRAMEBUFFER,null),j=!1):Ue.__webglFramebuffer===void 0?R.setupRenderTarget(A):Ue.__hasExternalTextures&&R.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);let Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);let He=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[z])?X=He[z][Y]:X=He[z],ve=!0):Be.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?X=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[Y]:X=He,b.copy(A.viewport),I.copy(A.scissor),O=A.scissorTest}else b.copy(Z).multiplyScalar(V).floor(),I.copy(J).multiplyScalar(V).floor(),O=ee;if(Ee.bindFramebuffer(q.FRAMEBUFFER,X)&&Be.drawBuffers&&j&&Ee.drawBuffers(A,X),Ee.viewport(b),Ee.scissor(I),Ee.setScissorTest(O),ve){let Ue=Ze.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,Y)}else if(Re){let Ue=Ze.get(A.texture),Je=z||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,Je)}H=-1},this.readRenderTargetPixels=function(A,z,Y,j,X,ve,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ee.bindFramebuffer(q.FRAMEBUFFER,De);try{let Ue=A.texture,Je=Ue.format,He=Ue.type;if(Je!==ui&&_e.convert(Je)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=He===fo&&(Le.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Le.has("EXT_color_buffer_float"));if(He!==Bs&&_e.convert(He)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===os&&(Be.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-j&&Y>=0&&Y<=A.height-X&&q.readPixels(z,Y,j,X,_e.convert(Je),_e.convert(He),ve)}finally{let Ue=L!==null?Ze.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(q.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,z,Y=0){let j=Math.pow(2,-Y),X=Math.floor(z.image.width*j),ve=Math.floor(z.image.height*j);R.setTexture2D(z,0),q.copyTexSubImage2D(q.TEXTURE_2D,Y,0,0,A.x,A.y,X,ve),Ee.unbindTexture()},this.copyTextureToTexture=function(A,z,Y,j=0){let X=z.image.width,ve=z.image.height,Re=_e.convert(Y.format),De=_e.convert(Y.type);R.setTexture2D(Y,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,j,A.x,A.y,X,ve,Re,De,z.image.data):z.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,j,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Re,z.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,j,A.x,A.y,Re,De,z.image),j===0&&Y.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Y,j,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ve=A.max.x-A.min.x+1,Re=A.max.y-A.min.y+1,De=A.max.z-A.min.z+1,Ue=_e.convert(j.format),Je=_e.convert(j.type),He;if(j.isData3DTexture)R.setTexture3D(j,0),He=q.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),He=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);let Ve=q.getParameter(q.UNPACK_ROW_LENGTH),jt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Zn=q.getParameter(q.UNPACK_SKIP_PIXELS),dn=q.getParameter(q.UNPACK_SKIP_ROWS),Qi=q.getParameter(q.UNPACK_SKIP_IMAGES),Ft=Y.isCompressedTexture?Y.mipmaps[X]:Y.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ft.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ft.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,A.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,A.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?q.texSubImage3D(He,X,z.x,z.y,z.z,ve,Re,De,Ue,Je,Ft.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(He,X,z.x,z.y,z.z,ve,Re,De,Ue,Ft.data)):q.texSubImage3D(He,X,z.x,z.y,z.z,ve,Re,De,Ue,Je,Ft),q.pixelStorei(q.UNPACK_ROW_LENGTH,Ve),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,jt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Zn),q.pixelStorei(q.UNPACK_SKIP_ROWS,dn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Qi),X===0&&j.generateMipmaps&&q.generateMipmap(He),Ee.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){T=0,P=0,L=null,Ee.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===dh?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?xr:Ag}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?Bt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Xd=class extends Mr{};Xd.prototype.isWebGL1Renderer=!0;var _a=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new N,vo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var jm=new N,Zm=new Mt,Km=new Mt,MS=new N,Jm=new we,Gl=new N,bd=new ti,Qm=new we,_d=new wr,dc=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dp,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Gl),this.boundingBox.expandByPoint(Gl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Gl),this.boundingSphere.expandByPoint(Gl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bd.copy(this.boundingSphere),bd.applyMatrix4(s),e.ray.intersectsSphere(bd)!==!1&&(Qm.copy(s).invert(),_d.copy(e.ray).applyMatrix4(Qm),!(this.boundingBox!==null&&_d.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_d)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Zm.fromBufferAttribute(s.attributes.skinIndex,e),Km.fromBufferAttribute(s.attributes.skinWeight,e),jm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Km.getComponent(r);if(o!==0){let a=Zm.getComponent(r);Jm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(MS.copy(jm).applyMatrix4(Jm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},xo=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$d=class extends gn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,u=sn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},eg=new we,SS=new we,hc=class n{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new we;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:SS;eg.multiplyMatrices(a,t[r]),eg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new $d(t,e,e,ui,os);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xo),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Sr=class extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},oa=new we,tg=new we,Wl=[],ng=new fi,AS=new we,io=new St,so=new ti,fc=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,AS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,oa),ng.copy(e.boundingBox).applyMatrix4(oa),this.boundingBox.union(ng)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,oa),so.copy(e.boundingSphere).applyMatrix4(oa),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oa),tg.multiplyMatrices(i,oa),io.matrixWorld=tg,io.raycast(e,Wl);for(let o=0,a=Wl.length;o<a;o++){let l=Wl[o];l.instanceId=r,l.object=this,t.push(l)}Wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ig=new N,sg=new N,rg=new we,wd=new wr,ql=new ti,wa=class extends Dt{constructor(e=new qn,t=new bo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ig.fromBufferAttribute(t,s-1),sg.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ig.distanceTo(sg);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ql.radius+=r,e.ray.intersectsSphere(ql)===!1)return;rg.copy(s).invert(),wd.copy(e.ray).applyMatrix4(rg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,d=new N,h=new N,p=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){let m=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=m,S=x-1;v<S;v+=p){let T=g.getX(v),P=g.getX(v+1);if(c.fromBufferAttribute(f,T),u.fromBufferAttribute(f,P),wd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let H=e.ray.origin.distanceTo(h);H<e.near||H>e.far||t.push({distance:H,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=m,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),wd.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ag=new N,og=new N,pc=class extends wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ag.fromBufferAttribute(t,s),og.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ag.distanceTo(og);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},mc=class extends wa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_o=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lg=new we,Yd=new wr,Xl=new ti,$l=new N,gc=class extends Dt{constructor(e=new qn,t=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),Xl.radius+=r,e.ray.intersectsSphere(Xl)===!1)return;lg.copy(s).invert(),Yd.copy(e.ray).applyMatrix4(lg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,y=p;g<y;g++){let f=c.getX(g);$l.fromBufferAttribute(d,f),cg($l,f,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,y=p;g<y;g++)$l.fromBufferAttribute(d,g),cg($l,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cg(n,e,t,i,s,r,o){let a=Yd.distanceSqToPoint(n);if(a<t){let l=new N;Yd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var yc=class extends gn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ma=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pi=class extends Ma{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wo=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Yl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ES(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function TS(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ug(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Og(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jd=class extends Gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:am,endingEnd:am}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case om:r=e,a=2*t-i;break;case lm:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case om:o=e,l=2*i-t;break;case lm:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,f=y*g,m=-h*f+2*h*y-h*g,x=(1+h)*f+(-1.5-2*h)*y+(-.5+h)*g+1,v=(-1-p)*f+(1.5+p)*y+.5*g,S=p*f-p*y;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+x*o[c+T]+v*o[l+T]+S*o[d+T];return r}},Zd=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Kd=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yl(t,this.TimeBufferType),this.values=Yl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Yl(e.times,Array),values:Yl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case Ku:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ES(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ku,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=_r;var Ws=class extends mi{};Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=ya;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends mi{};vc.prototype.ValueTypeName="color";var ds=class extends mi{};ds.prototype.ValueTypeName="number";var Jd=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)st.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ui=class extends mi{InterpolantFactoryMethodLinear(e){return new Jd(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=_r;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends mi{};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=ya;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends mi{};hs.prototype.ValueTypeName="vector";var xc=class{constructor(e,t=-1,i,s=ax){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(CS(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(mi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=TS(l);l=ug(l,1,u),c=ug(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,p,g,y){if(p.length!==0){let f=[],m=[];Og(p,f,m,g),f.length!==0&&y.push(new d(h,f,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let p={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)p[h[g].morphTargets[y]]=-1;for(let y in p){let f=[],m=[];for(let x=0;x!==h[g].morphTargets.length;++x){let v=h[g];f.push(v.time),m.push(v.morphTarget===y?1:0)}s.push(new ds(".morphTargetInfluence["+y+"]",f,m))}l=p.length*o}else{let p=".bones["+t[d].name+"]";i(hs,p+".position",h,"pos",s),i(Ui,p+".quaternion",h,"rot",s),i(hs,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function RS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return vc;case"quaternion":return Ui;case"bool":case"boolean":return Ws;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function CS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=RS(n.type);if(n.times===void 0){let t=[],i=[];Og(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Os={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Qd=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},LS=new Qd,fs=class{constructor(e){this.manager=e!==void 0?e:LS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fs.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs={},eh=class extends Error{constructor(e,t){super(e),this.response=t}},Mo=class extends fs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Os.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(rs[e]!==void 0){rs[e].push({onLoad:t,onProgress:i,onError:s});return}rs[e]=[],rs[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=rs[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0,y=0,f=new ReadableStream({start(m){x();function x(){d.read().then(({done:v,value:S})=>{if(v)m.close();else{y+=S.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let P=0,L=u.length;P<L;P++){let H=u[P];H.onProgress&&H.onProgress(T)}m.enqueue(S),x()}})}}});return new Response(f)}else throw new eh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Os.add(e,c);let u=rs[e];delete rs[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=rs[e];if(u===void 0)throw this.manager.itemError(e),c;delete rs[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var th=class extends fs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Os.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=po("img");function l(){u(),Os.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Sa=class extends fs{constructor(e){super(e)}load(e,t,i,s){let r=new gn,o=new th(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Aa=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},bc=class extends Aa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Md=new we,dg=new N,hg=new N,So=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(dg),hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hg),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nh=class extends So{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=va*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_c=class extends Aa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fg=new we,ro=new N,Sd=new N,ih=class extends So{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),Sd.copy(i.position),Sd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Sd),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),fg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fg)}},wc=class extends Aa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sh=class extends So{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Mc=class extends fs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Os.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Os.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Os.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Os.add(e,l),r.manager.itemStart(e)}};var ph="\\[\\]\\.:\\/",PS=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",IS="[^"+ph.replace("\\.","")+"]",NS=/((?:WC+[\/:])*)/.source.replace("WC",mh),DS=/(WCOD+)?/.source.replace("WCOD",IS),kS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),OS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),US=new RegExp("^"+NS+DS+kS+OS+"$"),FS=["material","materials","bones","map"],rh=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PS,"")}static parseTrackName(e){let t=US.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);FS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=rh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BE=new Float32Array(1);var Ao=class{constructor(e,t,i=0,s=1/0){this.ray=new wr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ah(e,this,i,t),i.sort(pg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ah(e[s],this,i,t);return i.sort(pg),i}};function pg(n,e){return n.distance-e.distance}function ah(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)ah(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Xn=Object.freeze({version:9,welcomeDistance:.42,welcomeScale:1,windowDistance:.68,windowScale:.75,dockDistance:.55,dockDrop:.22,dockScale:.78,keyboardDistance:.45,keyboardDrop:.5,keyboardScale:.92});function Ug(n){if(n.comfortVersion===Xn.version)return n;let e={...n,comfortVersion:Xn.version,winDist:Xn.windowDistance,dockDist:1};return e.dockSize=1,(n.winScale==null||n.winScale===1)&&(e.winScale=Xn.windowScale),e}function BS(n,e){return n>0&&e>0?n/e:16/9}function Co(n,e,t){let i=BS(n,e),s=t>0?t:i,r,o;s>=i?(r=n,o=n/s):(o=e,r=e*s);let a=Math.round((n-r)/2),l=Math.round((e-o)/2),c=Math.round(r),u=Math.round(o);return{x:a,y:l,w:c,h:u,u0:a/n,v0:l/e,uw:c/n,vh:u/e}}function gh(n,e,t,i,s){let r=Co(n,e,t);return i<r.x||s<r.y||i>r.x+r.w||s>r.y+r.h?null:{u:(i-r.x)/r.w,v:(s-r.y)/r.h}}var Fi=4096,An={width:1200,height:800},$s=160;function zS(n,e=Fi){return n.map(({width:t,height:i,kind:s="window",slot:r=0})=>{let o=Math.ceil(t)+$s*2,a=Math.ceil(i)+$s*2,l=s==="window"?r%3*1360:s==="slot"?1360:0,c=s==="dock"?800:s==="keyboard"?3160:s==="slot"?0:1200+Math.floor(r/3)*980,u=s==="dock"?400:s==="keyboard"?936:980;if(r>5||o>(s==="window"||s==="slot"?1360:e)||a>u||l+o>e||c+a>e)throw new Error("Workspace texture is full; close a window first.");return[l,c,o,a]})}var Rc=class{constructor(){this.domElement=document.createElement("div"),this.domElement.id="atlas",this.last=0,this.sent=null,this.sentSpecs=null,this.lastError="",this.slots=new Map}setSize(){}render(e){var d,h,p;if(window.__gorillaStereoOverlay){let g=2*Math.tan(To.degToRad(36)),f=[{overlay:!0,matrix:new we().makeTranslation(0,0,-1).multiply(new we().makeScale(g*1.78,g*1.48,1)).toArray(),rect:[0,0,An.width/2,An.height],uvR:[An.width/2/Fi,1-An.height/Fi,An.width/2/Fi,An.height/Fi]}],m=JSON.stringify(f),x="[]";(m!==this.sent||x!==this.sentSpecs)&&(this.sent=m,this.sentSpecs=x,(h=(d=window.NativeXR)==null?void 0:d.frame)==null||h.call(d,m,x));return}e.updateMatrixWorld(!0);let t=[];e.traverse(g=>{g.isCSS3DObject&&g.visible&&t.push(g)});for(let g of t)g.element.parentNode!==this.domElement&&this.domElement.append(g.element),g.element.style.transform!=="none"&&(g.element.style.transform="none");for(let g of this.slots.keys())t.some(y=>y.id===g)||this.slots.delete(g);let i=t.map(g=>{let y=g.element.classList.contains("dock")?"dock":g.element.classList.contains("kb")?"keyboard":g.element.classList.contains("win-drop-slot")?"slot":"window";if(y==="window"&&!this.slots.has(g.id)){let x=new Set(this.slots.values()),v=0;for(;x.has(v);)v++;this.slots.set(g.id,v)}let f=y==="window"||y==="slot"?1040:Fi-$s*2,m=(y==="dock"?400:y==="keyboard"?936:980)-$s*2;return{width:Math.min(g.element.offsetWidth,f),height:Math.min(g.element.offsetHeight,m),kind:y,slot:this.slots.get(g.id)||0}}),s;try{s=zS(i)}catch(g){this.lastError!==g.message&&(this.lastError=g.message,(p=window.nextvrMessage)==null||p.call(window,g.message));return}let r=[],o=[];t.forEach((g,y)=>{let f=g.element,[m,x,v,S]=s[y],T=`${m+$s}px`,P=`${x+$s}px`;f.style.left!==T&&(f.style.left=T),f.style.top!==P&&(f.style.top=P);let L=g.matrixWorld.clone().multiply(new we().makeScale(v,S,1)),H=+(f.dataset.curve||0);r.push({id:f.dataset.windowId||(i[y].kind==="dock"?"dock":i[y].kind),matrix:L.toArray(),rect:s[y],curve:H,glass:[$s/v,$s/S,i[y].width/v,i[y].height/S]});let _=f.getBoundingClientRect();for(let b of f.querySelectorAll("[data-native-app]")){let I=b.getBoundingClientRect();if(!I.width||!I.height)continue;let O=+(b.dataset.aspect||0),F=Co(I.width,I.height,O),C=g.matrixWorld.clone().multiply(new we().makeTranslation(I.left-_.left+F.x+F.w/2-i[y].width/2,i[y].height/2-(I.top-_.top+F.y+F.h/2),.5)).multiply(new we().makeScale(F.w,F.h,1));r.push({browser:"app:"+b.dataset.nativeApp,matrix:C.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(f.dataset.curve||0),uv:[F.u0,F.v0,F.uw,F.vh]});let M=[F.u0,F.v0,F.uw,F.vh].map(D=>D.toFixed(5)).join(",");b.dataset.uv!==M&&(b.dataset.uv=M,this.last=0)}for(let b of f.querySelectorAll("[data-native-xr]")){let I=b.getBoundingClientRect();if(!I.width||!I.height)continue;let O="xr:"+b.dataset.nativeXr,F=+(b.dataset.aspect||0),C=Co(I.width,I.height,F),M=g.matrixWorld.clone().multiply(new we().makeTranslation(I.left-_.left+C.x+C.w/2-i[y].width/2,i[y].height/2-(I.top-_.top+C.y+C.h/2),.5)).multiply(new we().makeScale(C.w,C.h,1));r.push({browser:O,matrix:M.toArray(),rect:[0,0,Math.round(I.width),Math.round(I.height)],curve:+(f.dataset.curve||0),uv:[C.u0,C.v0,C.uw/2,C.vh],uvR:[C.u0+C.uw/2,C.v0,C.uw/2,C.vh]})}for(let b of f.querySelectorAll("[data-native-browser]")){let I=b.getBoundingClientRect();if(!I.width||!I.height)continue;let O=b.dataset.nativeBrowser,F=b.dataset.url;if(!F)continue;let C=Math.round(I.width),M=Math.round(I.height),D={left:I.left,top:I.top,right:I.right,bottom:I.bottom};for(let Z=b.parentElement;Z&&Z!==f;Z=Z.parentElement){let J=getComputedStyle(Z);if(/(auto|scroll|hidden)/.test(J.overflow+J.overflowY)){let ee=Z.getBoundingClientRect();D.left=Math.max(D.left,ee.left),D.top=Math.max(D.top,ee.top),D.right=Math.min(D.right,ee.right),D.bottom=Math.min(D.bottom,ee.bottom)}}o.push({id:O,url:F,width:C,height:M});let V=D.right-D.left,W=D.bottom-D.top;if(V<=0||W<=0)continue;let G=g.matrixWorld.clone().multiply(new we().makeTranslation(D.left-_.left+V/2-i[y].width/2,i[y].height/2-(D.top-_.top+W/2),.5)).multiply(new we().makeScale(V,W,1));r.push({browser:O,matrix:G.toArray(),rect:[0,0,C,M],curve:+(f.dataset.curve||0),uv:[(D.left-I.left)/C,(I.bottom-D.bottom)/M,V/C,W/M]})}});let a=2*Math.tan(To.degToRad(36)),l=new we().makeTranslation(0,0,-1).multiply(new we().makeScale(a*1.5,a,1));if(window.__gorillaStereoOverlay){let g=new we().makeTranslation(0,0,-1).multiply(new we().makeScale(a*1.78,a*1.48,1));r.push({overlay:!0,matrix:g.toArray(),rect:[0,0,An.width/2,An.height],uvR:[An.width/2/Fi,1-An.height/Fi,An.width/2/Fi,An.height/Fi]})}else r.push({overlay:!0,matrix:l.toArray(),rect:[0,0,An.width,An.height]});let c=performance.now(),u=document.documentElement.dataset.qualityTier||document.documentElement.dataset.quality;if(c-this.last>=({low:32,medium:24,auto:24,high:16}[u]||24)){this.last=c;let g=JSON.stringify(r),y=JSON.stringify(o);(g!==this.sent||y!==this.sentSpecs)&&(this.sent=g,this.sentSpecs=y,window.NativeXR.frame(g,y))}}invalidate(){this.sent=this.sentSpecs=null,this.last=0}};var Ra=new N,HS=new N,Po=()=>null,Cc=()=>!0,Bg=()=>null,Lo=null,Ca=[],Fg=0;function zg(n){let e=typeof performance<"u"?performance.now():Date.now(),t=n==null?void 0:n.hands;if(!Array.isArray(t)||t.length===0){e-Fg>400&&(Ca.length=0);return}Ca.length=0;for(let i of t){let s=(i==null?void 0:i.points)||(i==null?void 0:i.lm);if(!s)continue;let r=1,o=1,a=0,l=0;if(typeof s.length=="number"&&typeof s[0]=="number")for(let c=0;c+1<s.length;c+=3){let u=s[c],d=s[c+1];u<r&&(r=u),d<o&&(o=d),u>a&&(a=u),d>l&&(l=d)}else if(Array.isArray(s))for(let c of s)c&&(c.x<r&&(r=c.x),c.y<o&&(o=c.y),c.x>a&&(a=c.x),c.y>l&&(l=c.y));a>=r&&l>=o&&Ca.push({x0:Math.max(0,r-.08),y0:Math.max(0,o-.08),x1:Math.min(1,a+.08),y1:Math.min(1,l+.08)})}Ca.length>0&&(Fg=e)}var Lc={energy:0,lastA:null,onMotion(n){let e=(n==null?void 0:n.accelerationIncludingGravity)||(n==null?void 0:n.acceleration);if(!(!e||e.x===null)){if(this.lastA){let t=Math.hypot(e.x-this.lastA.x,e.y-this.lastA.y,e.z-this.lastA.z);t>.15?this.energy=Math.min(4,this.energy*.88+t):this.energy*=.88}this.lastA={x:e.x,y:e.y,z:e.z}}},moving(){return!this.lastA||this.energy>.3}},Ht={W:96,H:72,cv:null,ctx:null,prev:null,pos:new N,out:new N,prevOut:new N,stepDelta:new N,lastT:0,lastSc:0,_lastSentX:0,_lastSentZ:0,depth:1.85,init(){this.cv||typeof document>"u"||(this.cv=document.createElement("canvas"),this.cv.width=this.W,this.cv.height=this.H,this.ctx=this.cv.getContext("2d",{willReadFrequently:!0}))},reset(){var e,t,i;this.pos.set(0,0,0),this.out.set(0,0,0),this.prevOut.set(0,0,0),this.stepDelta.set(0,0,0),this.prev=null,this.lastSc=0,this._lastSentX=0,this._lastSentZ=0;let n=Po();n&&(n.position.x=0,n.position.z=0),typeof Lo=="function"?Lo(0,0,0):typeof window<"u"&&((t=(e=window.NativeXR)==null?void 0:e.resetSixDof)==null||t.call(e)),typeof window<"u"&&((i=window.__updateBackfaceStates)==null||i.call(window))},processGray(n,e){let t=this.W,i=this.H;if(!n||n.length<t*i)return null;if(!this.prev)return this.prev=new Float32Array(n),null;let s=this.prev,r=1e18,o=0,a=0;for(let f=-7;f<=7;f++)for(let m=-7;m<=7;m++){let x=0;for(let v=22;v<50&&x<r;v+=2){let S=v*t,T=(v+f)*t;for(let P=30;P<66;P+=2)x+=Math.abs(n[T+P+m]-s[S+P])}x<r&&(r=x,o=m,a=f)}let l=[],c=new Float32Array(25);for(let f=10;f<=i-18;f+=10)for(let m=10;m<=t-18;m+=11){let x=(m+4)/t,v=(f+4)/i,S=!1;for(let F of Ca)if(x>F.x0&&x<F.x1&&v>F.y0&&v<F.y1){S=!0;break}if(S)continue;let T=0;for(let F=f;F<f+8;F++){let C=F*t;for(let M=m;M<m+7;M++)T+=Math.abs(s[C+M+1]-s[C+M])}if(T<200)continue;let P=1e18,L=0,H=0,_=0;for(let F=-2;F<=2;F++)for(let C=-2;C<=2;C++){let M=m+o+C,D=f+a+F;if(M<0||D<0||M+8>t||D+8>i){c[_++]=1e18;continue}let V=0;for(let W=0;W<8;W++){let G=(f+W)*t+m,Z=(D+W)*t+M;for(let J=0;J<8;J++)V+=Math.abs(n[Z+J]-s[G+J])}c[_++]=V,V<P&&(P=V,L=C,H=F)}let b=(F,C)=>c[(C+2)*5+(F+2)],I=0,O=0;if(Math.abs(L)<2){let F=b(L-1,H),C=b(L+1,H),M=F-2*P+C;M>0&&F<1e17&&C<1e17&&(I=.5*(F-C)/M)}if(Math.abs(H)<2){let F=b(L,H-1),C=b(L,H+1),M=F-2*P+C;M>0&&F<1e17&&C<1e17&&(O=.5*(F-C)/M)}l.push({x:m+4-t*.5,y:f+4-i*.5,dx:o+L+I,dy:a+H+O})}if(this.prev.set(n),l.length<10)return null;let u=f=>{let m=0,x=0,v=0,S=0;for(let H of f)m+=H.dx,x+=H.dy,v+=H.x,S+=H.y;let T=f.length;m/=T,x/=T,v/=T,S/=T;let P=0,L=0;for(let H of f){let _=H.x-v,b=H.y-S;P+=(H.dx-m)*_+(H.dy-x)*b,L+=_*_+b*b}return{sc:L>0?P/L:0,mx:m,my:x,px:v,py:S}},d=u(l),h=l.map(f=>Math.hypot(f.dx-d.mx-d.sc*(f.x-d.px),f.dy-d.my-d.sc*(f.y-d.py))),p=[...h].sort((f,m)=>f-m),g=p[p.length>>1]||.5;if(g>.85)return null;let y=l.filter((f,m)=>h[m]<=Math.max(.35,g*2));return y.length<8?null:(d=u(y),this.applyFlowScale(d.sc,o,a,e),{sc:d.sc,gx:o,gy:a})},applyFlowScale(n,e=0,t=0,i){if(!Cc())return;let s=Po();if(!s)return;if(!Number.isFinite(n)||Math.abs(n)<.0045||Math.abs(n)>.22){this.lastSc=0;return}let r=this.lastSc;if(this.lastSc=n,r===0||Math.sign(r)!==Math.sign(n))return;let o=(n+r)*.5;if(Math.hypot(e,t)>6&&(o*=.3),!(i!==void 0?!!i:Lc.moving())){this.lastSc=0;return}let l=Math.max(-.12,Math.min(.12,o*this.depth));Ra.set(0,0,-1).applyQuaternion(s.quaternion),Ra.y=0,Ra.lengthSq()>1e-6?Ra.normalize():Ra.set(0,0,-1),this.pos.addScaledVector(Ra,l),this.pos.y=0;let c=Math.hypot(this.pos.x,this.pos.z);if(c>3){let u=3/c;this.pos.x*=u,this.pos.z*=u}this.pos.y=0},update(n,e=.016){var a,l,c;if(!Cc()){(this.pos.lengthSq()>0||this.out.lengthSq()>0)&&this.reset();return}let t=Math.max(.38,1-Math.exp(-Math.max(.005,e)*24));this.out.lerp(this.pos,t),this.out.y=0,this.stepDelta.subVectors(this.out,this.prevOut),this.stepDelta.y=0,this.prevOut.copy(this.out);let i=Po();i&&(i.position.x=this.out.x,i.position.z=this.out.z),Math.hypot(this.out.x-this._lastSentX,this.out.z-this._lastSentZ)>1e-4&&(this._lastSentX=this.out.x,this._lastSentZ=this.out.z,typeof Lo=="function"?Lo(this.out.x,0,this.out.z):typeof window<"u"&&((l=(a=window.NativeXR)==null?void 0:a.sixDofOffset)==null||l.call(a,this.out.x,0,this.out.z)),typeof window<"u"&&((c=window.__updateBackfaceStates)==null||c.call(window)));let s=Bg();if(!s||s.readyState<2||n-this.lastT<45||(this.lastT=n,this.init(),!this.ctx))return;let r=this.W,o=this.H;try{this.ctx.drawImage(s,0,0,r,o);let u=this.ctx.getImageData(0,0,r,o).data,d=new Float32Array(r*o);for(let h=0,p=0;h<d.length;h++,p+=4)d[h]=u[p]*.3+u[p+1]*.59+u[p+2]*.11;this.processGray(d)}catch{}},consumeStepDelta(n=HS){return n.copy(this.stepDelta),n.y=0,this.stepDelta.set(0,0,0),n}};function Pc({camera:n,settings:e,getCamera:t,isEnabled:i,getVideo:s,onNativeOffset:r}={}){typeof t=="function"?Po=t:n&&(Po=()=>n),typeof i=="function"?Cc=i:e&&typeof e=="object"&&(Cc=()=>e.sixdof!==0),typeof s=="function"&&(Bg=s),typeof r=="function"&&(Lo=r)}typeof window<"u"&&(window.addEventListener("devicemotion",n=>Lc.onMotion(n),{passive:!0}),window.SixDof=Ht,window.Walk=Lc,window.nextvrSixDof=(n,e=0,t=0)=>{if(n&&typeof n=="object"){if(n.gray&&n.gray.length>=Ht.W*Ht.H)return Ht.processGray(n.gray,n.moving);let s=Number(n.sc??0),r=Number(n.gx??0),o=Number(n.gy??0);return Ht.applyFlowScale(s,r,o,n.moving),{sc:s,gx:r,gy:o}}let i=Number(n??0);return Ht.applyFlowScale(i,Number(e||0),Number(e?t:0)),{sc:i,gx:Number(e||0),gy:Number(t||0)}});var Hg=new N,VS=new st,Vg=new N,Ar=class extends Dt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Bi=new we,GS=new we,Ic=class{constructor(e={}){let t=this,i,s,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(y,f){let m=f.projectionMatrix.elements[5]*o;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(i/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let x,v;f.isOrthographicCamera&&(x=-(f.right+f.left)/2,v=(f.top+f.bottom)/2);let S=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,T=f.isOrthographicCamera?`scale( ${S} )scale(`+m+")translate("+d(x)+"px,"+d(v)+"px)"+h(f.matrixWorldInverse):`scale( ${S} )translateZ(`+m+"px)"+h(f.matrixWorldInverse),L=(f.isPerspectiveCamera?"perspective("+m+"px) ":"")+T+"translate("+r+"px,"+o+"px)";a.camera.style!==L&&(u.style.transform=L,a.camera.style=L),g(y,y,f,T)},this.setSize=function(y,f){i=y,s=f,r=i/2,o=s/2,l.style.width=y+"px",l.style.height=f+"px",c.style.width=y+"px",c.style.height=f+"px",u.style.width=y+"px",u.style.height=f+"px"};function d(y){return Math.abs(y)<1e-10?0:y}function h(y){let f=y.elements;return"matrix3d("+d(f[0])+","+d(-f[1])+","+d(f[2])+","+d(f[3])+","+d(f[4])+","+d(-f[5])+","+d(f[6])+","+d(f[7])+","+d(f[8])+","+d(-f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(-f[13])+","+d(f[14])+","+d(f[15])+")"}function p(y){let f=y.elements;return"translate(-50%,-50%)"+("matrix3d("+d(f[0])+","+d(f[1])+","+d(f[2])+","+d(f[3])+","+d(-f[4])+","+d(-f[5])+","+d(-f[6])+","+d(-f[7])+","+d(f[8])+","+d(f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(f[13])+","+d(f[14])+","+d(f[15])+")")}function g(y,f,m,x){if(y.isCSS3DObject){let v=y.visible===!0&&y.layers.test(m.layers)===!0;if(y.element.style.display=v===!0?"":"none",v===!0){y.onBeforeRender(t,f,m);let S;y.isCSS3DSprite?(Bi.copy(m.matrixWorldInverse),Bi.transpose(),y.rotation2D!==0&&Bi.multiply(GS.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(Hg,VS,Vg),Bi.setPosition(Hg),Bi.scale(Vg),Bi.elements[3]=0,Bi.elements[7]=0,Bi.elements[11]=0,Bi.elements[15]=1,S=p(Bi)):S=p(y.matrixWorld);let T=y.element,P=a.objects.get(y);if(P===void 0||P.style!==S){T.style.transform=S;let L={style:S};a.objects.set(y,L)}T.parentNode!==u&&u.appendChild(T),y.onAfterRender(t,f,m)}}for(let v=0,S=y.children.length;v<S;v++)g(y.children[v],f,m,x)}}};var de=!!window.NativeXR,Ot=de?An:{width:innerWidth,height:innerHeight},Wg={lang:null,handsOn:!0,handDraw:1,winCurve:1,winScale:.75,winDist:2.2,winTilt:1,win360:0,win360K:1.15,dockSize:1,dockDist:1,dockApps:"browser,youtube,gallery,env,settings,menu",env:"sunset",panorama:"sunset",quality:"auto",showFps:0,wideCamera:0,spatialLauncher:0,dockSnapSlot:1,fingerTouch:1,sixdof:1,lateLatch:0,gorillaInstalled:0,profileName:"",profileAvatar:""},Io={};try{Io=JSON.parse(localStorage.getItem("nextvr.v1")||"{}")||{}}catch{}var Ge={...Wg,...Io};Ge.sunsetDefaultVersion||(!Ge.envChosen&&Ge.env==="passthrough"&&(!Io.panorama||Io.panorama==="lagoon")&&(Ge.env="sunset"),(!Io.panorama||Ge.env==="sunset"&&!Ge.envChosen)&&(Ge.panorama=Ge.env==="passthrough"?"sunset":Ge.env),Ge.sunsetDefaultVersion=1);if(de){Ge=Ug(Ge),Ge.handsOn=!0,Ge.handDrawSeen||(Ge.handDraw=Wg.handDraw,Ge.handDrawSeen=1);try{localStorage.setItem("nextvr.v1",JSON.stringify(Ge))}catch{}}var E=Ge,Ye=()=>{try{localStorage.setItem("nextvr.v1",JSON.stringify(Ge))}catch{}},tn={pt:{desktop:"\xC1rea de trabalho",browser:"Navegador",youtube:"YouTube",gallery:"Galeria",settings:"Configura\xE7\xF5es",menu:"Menu",store:"Loja",env:"Ambientes",keyboard:"Teclado",center:"Centralizar",search:"Pesquisar na web",searchYt:"Pesquisar v\xEDdeos",open:"Abrir",close:"Fechar",general:"Geral",hands:"Hand tracking",windows:"Janelas",dock:"Dock",perf:"Desempenho",language:"Idioma",on:"Ativado",off:"Desativado",sens:"Sensibilidade",scale:"Escala",dist:"Dist\xE2ncia",curve:"Curvatura",size:"Tamanho",quality:"Qualidade",apps:"Aplicativos",recents:"Recentes",battery:"Bateria",net:"Conex\xE3o",time:"Hora",libAll:"Todos",libFilter:"Filtro",libGames:"Jogos",libGamesEmpty:"Os jogos de headset aparecem aqui quando o PhoneXR os encontra.",libRecentEmpty:"Os apps abertos recentemente aparecem aqui.",pickPhotos:"Escolher fotos",noPhotos:"Nenhuma foto escolhida ainda.",photosHelp:"As fotos ficam s\xF3 no aparelho e n\xE3o saem do Next VR.",centered:"Ambiente centralizado",langChanged:"Idioma alterado",arcFull:"Arco cheio (m\xE1x. 5 apps) \u2014 fechando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 lagoa ao p\xF4r do sol",envSunset:"P\xF4r do sol \xB7 palmeiras",envDusk:"Crep\xFAsculo",envCinema:"Cinema",envPassOn:"Passthrough da c\xE2mera",envNight:"Panorama 360\xB0 \xB7 cidade \xE0 noite",envSpace:"Panorama 360\xB0 \xB7 espa\xE7o",envPalm:"Panorama 360\xB0 \xB7 Palmeira",envPalmeira:"Panorama 360\xB0 \xB7 Palmeira",envVirtual:"Ambiente virtual",envTropical:"Panorama 360\xB0 \xB7 vale tropical",envLakeside:"Panorama 360\xB0 \xB7 lago ao p\xF4r do sol",win360:"Curvatura 360\xB0",win360k:"Meia-abertura do arco (0.2 leve \xB7 1.1 bem curvada)",win360All:"Abrir novas janelas j\xE1 curvadas",win360Btn:"Curvar esta janela em 360\xB0",langTitle:"Idioma",langSoon:"Mais idiomas chegam nas pr\xF3ximas vers\xF5es.",langContinue:"Continuar",langPick:"Escolha seu idioma",micOff:"Ditado por voz indispon\xEDvel neste aparelho",notif:"Notifica\xE7\xF5es",noNotif:"Sem notifica\xE7\xF5es novas",profile:"Perfil",repin:"Voltar ao arco de janelas",resize:"Redimensionar janela",moveWindow:"Mover janela",moveDock:"Mover a dock",androidApps:"Apps do Android",appWindowBadge:"App do Android",appMirrorBadge:"Espelho da tela",shizuku:"Shizuku",noAndroidApps:"Nenhum app do Android dispon\xEDvel ainda.",appBack:"Voltar",appHome:"In\xEDcio",appRecents:"Recentes",appKeyboard:"Digitar no app",appRotate:"Girar a janela do app",appStarting:"Abrindo o app na janela\u2026",appFailed:"N\xE3o foi poss\xEDvel abrir o app",appStopped:"O app foi encerrado",appNeedShizuku:"O Shizuku n\xE3o est\xE1 dispon\xEDvel agora: veja a linha acima",appDisplayRefused:"O servi\xE7o privilegiado recusou criar a tela do app",appDisplayFailed:"A tela do app n\xE3o p\xF4de ser criada",appNoLauncher:"Este app n\xE3o tem tela inicial",appConsentDenied:"A captura de tela n\xE3o foi autorizada",appMirrorStopped:"A captura de tela terminou",appDisplayEmpty:"O app n\xE3o abriu nesta janela (ele pode ter ido para a tela do celular)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"A janela n\xE3o p\xF4de ser criada nesta tela",appMirrorFailed:"A captura de tela n\xE3o p\xF4de come\xE7ar",appHosting:"Janelas do Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Aberto",appMinimized:"Minimizado",appCaptureInput:"Sem o servi\xE7o de acessibilidade a janela mostra o app mas n\xE3o recebe o toque da m\xE3o",routeHosted:"O Shizuku vai abrir este app no pr\xF3prio display dele, dentro da janela",routePermission:"O Shizuku precisa da sua autoriza\xE7\xE3o; autorize e o app abre na janela",routeCapture:"Sem Shizuku: o app abre na tela do celular e a janela mostra a tela (com sua autoriza\xE7\xE3o de captura)",appShizukuDenied:"Autorize o NextVR dentro do Shizuku (o pedido aparece no headset) e toque no app de novo",appShizukuBlocked:"Abra o app do Shizuku e permita o NextVR na lista de apps dele",appWaitingService:"Conectando ao servi\xE7o shell do Shizuku (\xE9 s\xF3 uma vez)\u2026",appMirrorStarting:"O app abre na tela do celular; esta janela mostra a tela com a sua autoriza\xE7\xE3o de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Testar Shizuku agora",appSelfTestOk:"Shizuku ok: display, entrada e am respondem",appSelfTestFailed:"O teste falhou; abra o Diagn\xF3stico",appOpenOnPhone:"Abrir no celular",appNoResults:"Nenhum app encontrado",appNone:"Nenhum app com tela inicial foi encontrado",searchApps:"Buscar apps",appHide:"Toque longo em um app para escond\xEA-lo",shizukuInstall:"O Shizuku n\xE3o est\xE1 instalado",shizukuStart:"O Shizuku est\xE1 parado: inicie por ADB ou depura\xE7\xE3o sem fio",shizukuUpdate:"O Shizuku \xE9 antigo demais para esta vers\xE3o",shizukuAsk:"Falta permitir o NextVR no Shizuku",shizukuDenied:"O acesso ao Shizuku foi negado",shizukuRebind:"Reconectando ao Shizuku",shizukuReady:"Shizuku pronto: apps abrem em janelas pr\xF3prias",shizukuUnknown:"Verificando o Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Verificar de novo",xrTitle:"PhoneXR",xrSub:"Jogos de headset (OpenXR e VrApi) abrindo dentro do NextVR, com as m\xE3os como controles",xrBadge:"Jogo de headset",xrReady:"Runtime PhoneXR pronto",xrRuntimeReady:"Runtime PhoneXR pronto: jogos de headset abrem aqui dentro",xrMissing:"O runtime PhoneXR n\xE3o est\xE1 instalado: o jogo aparece na biblioteca mas n\xE3o abre",xrMissingNoApk:"O runtime PhoneXR n\xE3o est\xE1 instalado: veja docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instale o runtime (requer Shizuku) para abrir jogos de headset aqui dentro",xrInstall:"Instalar runtime",xrInstalling:"Instalando o runtime PhoneXR\u2026",xrSelfTest:"Verificar agora",xrNotHostable:"Este jogo precisa ser aberto pelo launcher do runtime na tela do aparelho",xrMenuHint:"Pin\xE7a sobre uma janela agita o menu \xB7 fora dela a pin\xE7a \xE9 o gatilho do jogo",xrHandMode:"Entrada das m\xE3os",xrHandModeSub:"Como as m\xE3os chegam ao jogo",xrHandModeNote:"No modo controles, pin\xE7a \xE9 gatilho e punho fechado \xE9 grip. No modo m\xE3os as cordas dos dedos seguem a sua m\xE3o, sem bot\xF5es.",xrModeControllers:"Controles",xrModeControllersSub:"Pin\xE7a = gatilho \xB7 punho fechado = grip (como Oculus Touch)",xrModeHands:"M\xE3os",xrModeHandsSub:"S\xF3 cordas dos dedos, sem bot\xF5es (jogos com suporte a m\xE3os)",xrBundlingNote:"Nenhum APK do runtime vem embutido neste build: coloque os APKs do PhoneXR em nextvr-android/src/main/assets/xr/runtime/ (veja docs/PHONEXR-INTEGRATION.md).","game.exit":"Sair do jogo","game.menu":"Menu do jogo","game.continue":"Continuar","game.settings":"Configura\xE7\xF5es","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tamanho","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cone","kind.plate":"Placa"},en:{desktop:"Desktop",browser:"Browser",youtube:"YouTube",gallery:"Gallery",settings:"Settings",menu:"Menu",store:"Store",env:"Environments",keyboard:"Keyboard",center:"Recenter",search:"Search the web",searchYt:"Search videos",open:"Open",close:"Close",general:"General",hands:"Hand tracking",windows:"Windows",dock:"Dock",perf:"Performance",language:"Language",on:"On",off:"Off",sens:"Sensitivity",scale:"Scale",dist:"Distance",curve:"Curve",size:"Size",quality:"Quality",apps:"Apps",recents:"Recent",battery:"Battery",net:"Network",time:"Time",libAll:"All",libFilter:"Filter",libGames:"Games",libGamesEmpty:"Headset games appear here when PhoneXR finds them.",libRecentEmpty:"Recently opened apps will appear here.",pickPhotos:"Pick photos",noPhotos:"No photos picked yet.",photosHelp:"Photos stay on the device and never leave Next VR.",centered:"View recentered",langChanged:"Language changed",arcFull:"Arc full (max 5 apps) \u2014 closing",envPass:"Camera passthrough",envLagoon:"360\xB0 panorama \xB7 sunset lagoon",envSunset:"Sunset \xB7 palms",envDusk:"Dusk",envCinema:"Cinema",envPassOn:"Camera passthrough",envNight:"360\xB0 panorama \xB7 city at night",envSpace:"360\xB0 panorama \xB7 space",envPalm:"360\xB0 panorama \xB7 palm tree",envPalmeira:"360\xB0 panorama \xB7 palm tree",envVirtual:"Virtual environment",envTropical:"360\xB0 panorama \xB7 tropical valley",envLakeside:"360\xB0 panorama \xB7 sunset lake",win360:"360\xB0 curvature",win360k:"Arc half-angle (0.2 subtle \xB7 1.1 very curved)",win360All:"Open new windows already curved",win360Btn:"Curve this window in 360\xB0",langTitle:"Language",langSoon:"More languages are coming in the next versions.",langContinue:"Continue",langPick:"Choose your language",micOff:"Voice dictation is unavailable on this device",notif:"Notifications",noNotif:"No new notifications",profile:"Profile",repin:"Return to the window arc",resize:"Resize window",moveWindow:"Move window",moveDock:"Move the dock",androidApps:"Android apps",appWindowBadge:"Android app",appMirrorBadge:"Screen mirror",shizuku:"Shizuku",noAndroidApps:"No Android apps available yet.",appBack:"Back",appHome:"Home",appRecents:"Recents",appKeyboard:"Type into the app",appRotate:"Rotate the app window",appStarting:"Opening the app in this window\u2026",appFailed:"The app could not be opened",appStopped:"The app stopped",appNeedShizuku:"Shizuku is not available right now: see the row above",appDisplayRefused:"The privileged service refused to create the app display",appDisplayFailed:"The app display could not be created",appNoLauncher:"This app has no launcher screen",appConsentDenied:"Screen capture was not authorized",appMirrorStopped:"Screen capture ended",appDisplayEmpty:"The app did not open in this window (it may have gone to the phone screen)",appCommandFailed:"App command ignored",appSurfaceFailed:"The window could not be created on this display",appMirrorFailed:"Screen capture could not start",appHosting:"Android windows",appRestore:"Restore",appMinimize:"Minimize",appSystem:"System",appOpen:"Open",appMinimized:"Minimized",appCaptureInput:"Without the accessibility service the window shows the app but does not take the hand\u2019s touch",routeHosted:"Shizuku opens this app on its own display, inside the window",routePermission:"Shizuku needs your authorization; allow it and the app opens in the window",routeCapture:"Without Shizuku: the app opens on the phone screen and the window shows it (with your capture consent)",appShizukuDenied:"Allow NextVR inside Shizuku (the request appears in the headset) and tap the app again",appShizukuBlocked:"Open the Shizuku app and allow NextVR in its list of apps",appWaitingService:"Connecting to the Shizuku shell service (only once)\u2026",appMirrorStarting:"The app opens on the phone screen; this window shows it with your capture consent",appDiagnostics:"Diagnostics",appDiagnosticsCopied:"Diagnostics copied",appSelfTest:"Test Shizuku now",appSelfTestOk:"Shizuku ok: display, input and am answer",appSelfTestFailed:"The test failed; open Diagnostics",appOpenOnPhone:"Open on the phone",appNoResults:"No app found",appNone:"No app with a launcher screen was found",searchApps:"Search apps",appHide:"Long-press an app to hide it",shizukuInstall:"Shizuku is not installed",shizukuStart:"Shizuku is stopped: start it over ADB or wireless debugging",shizukuUpdate:"Shizuku is too old for this version",shizukuAsk:"NextVR still needs the Shizuku permission",shizukuDenied:"Shizuku access was denied",shizukuRebind:"Reconnecting to Shizuku",shizukuReady:"Shizuku ready: apps open in their own windows",shizukuUnknown:"Checking Shizuku",shizukuGrant:"Allow",shizukuRecheck:"Check again",xrTitle:"PhoneXR",xrSub:"Headset games (OpenXR and VrApi) opening inside NextVR, hands as controllers",xrBadge:"Headset game",xrReady:"PhoneXR runtime ready",xrRuntimeReady:"PhoneXR runtime ready: headset games open inside here",xrMissing:"The PhoneXR runtime is not installed: the game shows in the library but cannot open",xrMissingNoApk:"The PhoneXR runtime is not installed: see docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Install the runtime (needs Shizuku) to open headset games in here",xrInstall:"Install runtime",xrInstalling:"Installing the PhoneXR runtime\u2026",xrSelfTest:"Check now",xrNotHostable:"This game has to be started by the runtime launcher on the phone screen",xrMenuHint:"Pinch over a window works this menu \xB7 outside it the pinch is the game trigger",xrHandMode:"Hand input",xrHandModeSub:"How the hands reach the game",xrHandModeNote:"Controllers mode: pinch is trigger, a fist is grip. Hands mode tracks your finger curls with no buttons.",xrModeControllers:"Controllers",xrModeControllersSub:"Pinch = trigger \xB7 fist = grip (like Oculus Touch)",xrModeHands:"Hands",xrModeHandsSub:"Finger curls only, no buttons (hand-tracking-native games)",xrBundlingNote:"No runtime APK ships in this build: put the PhoneXR APKs in nextvr-android/src/main/assets/xr/runtime/ (see docs/PHONEXR-INTEGRATION.md).","game.exit":"Exit game","game.menu":"Game menu","game.continue":"Continue","game.settings":"Settings","tool.move":"Move","tool.rotate":"Rotate","tool.scale":"Scale","tool.place":"Place","kind.box":"Cube","kind.sphere":"Sphere","kind.cylinder":"Cylinder","kind.cone":"Cone","kind.plate":"Plate"},es:{desktop:"Escritorio",browser:"Navegador",youtube:"YouTube",gallery:"Galer\xEDa",settings:"Ajustes",menu:"Men\xFA",store:"Tienda",env:"Entornos",keyboard:"Teclado",center:"Centrar",search:"Buscar en la web",searchYt:"Buscar v\xEDdeos",open:"Abrir",close:"Cerrar",general:"General",hands:"Hand tracking",windows:"Ventanas",dock:"Dock",perf:"Rendimiento",language:"Idioma",on:"Activado",off:"Desactivado",sens:"Sensibilidad",scale:"Escala",dist:"Distancia",curve:"Curvatura",size:"Tama\xF1o",quality:"Calidad",apps:"Aplicaciones",recents:"Recientes",battery:"Bater\xEDa",net:"Conexi\xF3n",time:"Hora",libAll:"Todo",libFilter:"Filtro",libGames:"Juegos",libGamesEmpty:"Los juegos de realidad virtual aparecer\xE1n aqu\xED cuando PhoneXR los encuentre.",libRecentEmpty:"Las aplicaciones abiertas recientemente aparecer\xE1n aqu\xED.",pickPhotos:"Elegir fotos",noPhotos:"A\xFAn no hay fotos elegidas.",photosHelp:"Las fotos se quedan en el dispositivo y no salen de Next VR.",centered:"Vista centrada",langChanged:"Idioma cambiado",arcFull:"Arco lleno (m\xE1x. 5 apps) \u2014 cerrando",envPass:"Camera passthrough",envLagoon:"Panorama 360\xB0 \xB7 laguna al atardecer",envSunset:"Atardecer \xB7 palmeras",envDusk:"Crep\xFAsculo",envCinema:"Cine",envPassOn:"Passthrough de la c\xE1mara",envNight:"Panorama 360\xB0 \xB7 ciudad de noche",envSpace:"Panorama 360\xB0 \xB7 espacio",envPalm:"Panorama 360\xB0 \xB7 palmera",envPalmeira:"Panorama 360\xB0 \xB7 palmera",envVirtual:"Entorno virtual",envTropical:"Panorama 360\xB0 \xB7 valle tropical",envLakeside:"Panorama 360\xB0 \xB7 lago al atardecer",win360:"Curvatura 360\xB0",win360k:"Semi\xE1ngulo del arco (0.2 leve \xB7 1.1 muy curvada)",win360All:"Abrir ventanas nuevas ya curvadas",win360Btn:"Curvar esta ventana en 360\xB0",langTitle:"Idioma",langSoon:"M\xE1s idiomas llegan en las pr\xF3ximas versiones.",langContinue:"Continuar",langPick:"Elige tu idioma",micOff:"El dictado por voz no est\xE1 disponible en este dispositivo",notif:"Notificaciones",noNotif:"Sin notificaciones nuevas",profile:"Perfil",repin:"Volver al arco de ventanas",resize:"Cambiar tama\xF1o de ventana",moveWindow:"Mover ventana",moveDock:"Mover el dock",androidApps:"Apps de Android",appWindowBadge:"App de Android",appMirrorBadge:"Espejo de pantalla",shizuku:"Shizuku",noAndroidApps:"A\xFAn no hay apps de Android disponibles.",appBack:"Atr\xE1s",appHome:"Inicio",appRecents:"Recientes",appKeyboard:"Escribir en la app",appRotate:"Girar la ventana de la app",appStarting:"Abriendo la app en esta ventana\u2026",appFailed:"No se pudo abrir la app",appStopped:"La app se cerr\xF3",appNeedShizuku:"Shizuku no est\xE1 disponible ahora: mira la fila de arriba",appDisplayRefused:"El servicio privilegiado rechaz\xF3 crear la pantalla de la app",appDisplayFailed:"No se pudo crear la pantalla de la app",appNoLauncher:"Esta app no tiene pantalla inicial",appConsentDenied:"No se autoriz\xF3 la captura de pantalla",appMirrorStopped:"La captura de pantalla termin\xF3",appDisplayEmpty:"La app no se abri\xF3 en esta ventana (puede haber ido a la pantalla del tel\xE9fono)",appCommandFailed:"Comando de app ignorado",appSurfaceFailed:"No se pudo crear la ventana en esta pantalla",appMirrorFailed:"No se pudo iniciar la captura de pantalla",appHosting:"Ventanas de Android",appRestore:"Restaurar",appMinimize:"Minimizar",appSystem:"Sistema",appOpen:"Abierta",appMinimized:"Minimizada",appCaptureInput:"Sin el servicio de accesibilidad la ventana muestra la app pero no recibe el toque de la mano",routeHosted:"Shizuku abre esta app en su propia pantalla, dentro de la ventana",routePermission:"Shizuku necesita tu autorizaci\xF3n; conc\xE9dela y la app se abre en la ventana",routeCapture:"Sin Shizuku: la app se abre en la pantalla del tel\xE9fono y la ventana la muestra (con tu consentimiento de captura)",appShizukuDenied:"Permite NextVR dentro de Shizuku (la petici\xF3n aparece en el visor) y toca la app otra vez",appShizukuBlocked:"Abre la app de Shizuku y permite NextVR en su lista de apps",appWaitingService:"Conectando al servicio shell de Shizuku (solo una vez)\u2026",appMirrorStarting:"La app se abre en la pantalla del tel\xE9fono; esta ventana la muestra con tu consentimiento de captura",appDiagnostics:"Diagn\xF3stico",appDiagnosticsCopied:"Diagn\xF3stico copiado",appSelfTest:"Probar Shizuku ahora",appSelfTestOk:"Shizuku ok: pantalla, entrada y am responden",appSelfTestFailed:"La prueba fall\xF3; abre el Diagn\xF3stico",appOpenOnPhone:"Abrir en el tel\xE9fono",appNoResults:"No se encontr\xF3 ninguna app",appNone:"No se encontr\xF3 ninguna app con pantalla inicial",searchApps:"Buscar apps",appHide:"Mant\xE9n pulsada una app para ocultarla",shizukuInstall:"Shizuku no est\xE1 instalado",shizukuStart:"Shizuku est\xE1 detenido: in\xEDcialo por ADB o depuraci\xF3n inal\xE1mbrica",shizukuUpdate:"Shizuku es demasiado antiguo para esta versi\xF3n",shizukuAsk:"Falta permitir NextVR en Shizuku",shizukuDenied:"Se deneg\xF3 el acceso a Shizuku",shizukuRebind:"Reconectando con Shizuku",shizukuReady:"Shizuku listo: las apps abren en sus propias ventanas",shizukuUnknown:"Comprobando Shizuku",shizukuGrant:"Permitir",shizukuRecheck:"Comprobar de nuevo",xrTitle:"PhoneXR",xrSub:"Juegos de visor (OpenXR y VrApi) abiertos dentro de NextVR, con las manos de controles",xrBadge:"Juego de visor",xrReady:"Runtime PhoneXR listo",xrRuntimeReady:"Runtime PhoneXR listo: los juegos de visor abren aqu\xED dentro",xrMissing:"El runtime PhoneXR no est\xE1 instalado: el juego aparece en la biblioteca pero no abre",xrMissingNoApk:"El runtime PhoneXR no est\xE1 instalado: mira docs/PHONEXR-INTEGRATION.md",xrSummaryMissing:"Instala el runtime (necesita Shizuku) para abrir juegos de visor aqu\xED",xrInstall:"Instalar runtime",xrInstalling:"Instalando el runtime PhoneXR\u2026",xrSelfTest:"Comprobar ahora",xrNotHostable:"Este juego debe ser iniciado por el launcher del runtime en la pantalla del m\xF3vil",xrMenuHint:"Pinza sobre una ventana mueve este men\xFA \xB7 fuera de ellas la pinza es el gatillo",xrHandMode:"Entrada de manos",xrHandModeSub:"C\xF3mo llegan las manos al juego",xrHandModeNote:"En modo controles la pinza es gatillo y el pu\xF1o es grip. En modo manos siguen las curvas de tus dedos, sin botones.",xrModeControllers:"Controles",xrModeControllersSub:"Pinza = gatillo \xB7 pu\xF1o = grip (como Oculus Touch)",xrModeHands:"Manos",xrModeHandsSub:"Solo curvas de dedos, sin botones (juegos con manos nativas)",xrBundlingNote:"Ning\xFAn APK del runtime se incluye en este build: pon los APKs de PhoneXR en nextvr-android/src/main/assets/xr/runtime/ (mira docs/PHONEXR-INTEGRATION.md).","game.exit":"Salir del juego","game.menu":"Men\xFA del juego","game.continue":"Continuar","game.settings":"Ajustes","tool.move":"Mover","tool.rotate":"Girar","tool.scale":"Tama\xF1o","tool.place":"Colocar","kind.box":"Cubo","kind.sphere":"Esfera","kind.cylinder":"Cilindro","kind.cone":"Cono","kind.plate":"Placa"}};Object.assign(tn.pt,{dockSnapSlot:"Espa\xE7o pr\xE9-definido na Dock",dockSnapDesc:"Mostrar janela preta transparente ao mover janelas na Dock normal",dockSnapHint:"Solte aqui para encaixar no espa\xE7o pr\xE9-definido",fingerTouch:"Toque com indicador (sem pin\xE7a)",fingerTouchDesc:"Abrir apps na Dock ou Spatial levando o indicador \xE0 frente",qualityHigh:"Alta (1080p)",qualityMedium:"M\xE9dia (890p)",qualityLow:"Baixa (390p)",qualityAuto:"Autom\xE1tica"});Object.assign(tn.en,{dockSnapSlot:"Pre-defined Dock Slot",dockSnapDesc:"Show semi-transparent black slot when moving windows in normal Dock",dockSnapHint:"Drop here to snap into pre-defined slot",fingerTouch:"Index Finger Touch (No Pinch)",fingerTouchDesc:"Open apps in Dock or Spatial by pushing your index finger forward",qualityHigh:"High (1080p)",qualityMedium:"Medium (890p)",qualityLow:"Low (390p)",qualityAuto:"Auto"});Object.assign(tn.es,{dockSnapSlot:"Espacio predefinido en Dock",dockSnapDesc:"Mostrar ventana negra semitransparente al mover ventanas en el Dock normal",dockSnapHint:"Suelta aqu\xED para encajar en el espacio predefinido",fingerTouch:"Toque con \xEDndice (sin pinza)",fingerTouchDesc:"Abrir apps en el Dock o Spatial llevando el dedo \xEDndice hacia adelante",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Baja (390p)",qualityAuto:"Autom\xE1tica"});tn.ja={...tn.en,desktop:"\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",browser:"\u30D6\u30E9\u30A6\u30B6",youtube:"YouTube",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC",settings:"\u8A2D\u5B9A",menu:"\u30E1\u30CB\u30E5\u30FC",store:"\u30B9\u30C8\u30A2",env:"\u74B0\u5883",keyboard:"\u30AD\u30FC\u30DC\u30FC\u30C9",center:"\u6B63\u9762\u306B\u30EA\u30BB\u30C3\u30C8",search:"\u30A6\u30A7\u30D6\u3092\u691C\u7D22",searchYt:"\u52D5\u753B\u3092\u691C\u7D22",open:"\u958B\u304F",close:"\u9589\u3058\u308B",general:"\u4E00\u822C",hands:"\u30CF\u30F3\u30C9\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0",windows:"\u30A6\u30A3\u30F3\u30C9\u30A6",dock:"\u30C9\u30C3\u30AF",perf:"\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9",language:"\u8A00\u8A9E",on:"\u30AA\u30F3",off:"\u30AA\u30D5",sens:"\u611F\u5EA6",scale:"\u30B9\u30B1\u30FC\u30EB",dist:"\u8DDD\u96E2",curve:"\u30AB\u30FC\u30D6",size:"\u30B5\u30A4\u30BA",quality:"\u753B\u8CEA",apps:"\u30A2\u30D7\u30EA",recents:"\u6700\u8FD1",battery:"\u30D0\u30C3\u30C6\u30EA\u30FC",net:"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",time:"\u6642\u523B",libAll:"\u3059\u3079\u3066",libFilter:"\u30D5\u30A3\u30EB\u30BF\u30FC",libGames:"\u30B2\u30FC\u30E0",centered:"\u8996\u70B9\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",langChanged:"\u8A00\u8A9E\u3092\u5909\u66F4\u3057\u307E\u3057\u305F",langTitle:"\u8A00\u8A9E",langContinue:"\u6B21\u3078",langPick:"\u8A00\u8A9E\u3092\u9078\u629E",notif:"\u901A\u77E5",noNotif:"\u65B0\u3057\u3044\u901A\u77E5\u306F\u3042\u308A\u307E\u305B\u3093",profile:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",dockSnapSlot:"\u30C9\u30C3\u30AF\u5B9A\u7FA9\u6E08\u307F\u30B9\u30ED\u30C3\u30C8",dockSnapDesc:"\u30A6\u30A3\u30F3\u30C9\u30A6\u79FB\u52D5\u6642\u306B\u534A\u900F\u660E\u306E\u9ED2\u67A0\u3092\u8868\u793A",dockSnapHint:"\u3053\u3053\u306B\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u914D\u7F6E",qualityHigh:"\u9AD8 (1080p)",qualityMedium:"\u4E2D (890p)",qualityLow:"\u4F4E (390p)",qualityAuto:"\u81EA\u52D5"};tn.fr={...tn.en,desktop:"Espace de travail",browser:"Navigateur",youtube:"YouTube",gallery:"Galerie",settings:"Param\xE8tres",menu:"Menu",store:"Boutique",env:"Environnements",keyboard:"Clavier",center:"Recentrer",search:"Rechercher sur le web",searchYt:"Rechercher des vid\xE9os",open:"Ouvrir",close:"Fermer",general:"G\xE9n\xE9ral",hands:"Suivi des mains",windows:"Fen\xEAtres",dock:"Dock",perf:"Performance",language:"Langue",on:"Activ\xE9",off:"D\xE9sactiv\xE9",sens:"Sensibilit\xE9",scale:"\xC9chelle",dist:"Distance",curve:"Courbure",size:"Taille",quality:"Qualit\xE9",apps:"Applications",recents:"R\xE9cents",battery:"Batterie",net:"R\xE9seau",time:"Heure",libAll:"Tout",libFilter:"Filtre",libGames:"Jeux",centered:"Espace recentr\xE9",langChanged:"Langue modifi\xE9e",langTitle:"Langue",langContinue:"Continuer",langPick:"Choisissez votre langue",notif:"Notifications",noNotif:"Aucune notification",profile:"Profil",dockSnapSlot:"Emplacement pr\xE9d\xE9fini du Dock",dockSnapDesc:"Afficher un cadre noir semi-transparent lors du d\xE9placement",dockSnapHint:"Rel\xE2chez ici pour placer la fen\xEAtre",qualityHigh:"Haute (1080p)",qualityMedium:"Moyenne (890p)",qualityLow:"Basse (390p)",qualityAuto:"Auto"};tn.de={...tn.en,desktop:"Arbeitsbereich",browser:"Browser",youtube:"YouTube",gallery:"Galerie",settings:"Einstellungen",menu:"Men\xFC",store:"Store",env:"Umgebungen",keyboard:"Tastatur",center:"Zentrieren",search:"Im Web suchen",searchYt:"Videos suchen",open:"\xD6ffnen",close:"Schlie\xDFen",general:"Allgemein",hands:"Hand-Tracking",windows:"Fenster",dock:"Dock",perf:"Leistung",language:"Sprache",on:"Ein",off:"Aus",sens:"Empfindlichkeit",scale:"Skalierung",dist:"Abstand",curve:"Kr\xFCmmung",size:"Gr\xF6\xDFe",quality:"Qualit\xE4t",apps:"Apps",recents:"Zuletzt",battery:"Akku",net:"Netzwerk",time:"Zeit",libAll:"Alle",libFilter:"Filter",libGames:"Spiele",centered:"Ansicht zentriert",langChanged:"Sprache ge\xE4ndert",langTitle:"Sprache",langContinue:"Weiter",langPick:"Sprache ausw\xE4hlen",notif:"Mitteilungen",noNotif:"Keine neuen Mitteilungen",profile:"Profil",dockSnapSlot:"Vordefinierter Dock-Platz",dockSnapDesc:"Halbtransparentes schwarzes Zielfenster beim Bewegen anzeigen",dockSnapHint:"Hier ablegen zum Einrasten",qualityHigh:"Hoch (1080p)",qualityMedium:"Mittel (890p)",qualityLow:"Niedrig (390p)",qualityAuto:"Automatisch"};tn.ko={...tn.en,desktop:"\uC791\uC5C5 \uACF5\uAC04",browser:"\uBE0C\uB77C\uC6B0\uC800",youtube:"YouTube",gallery:"\uAC24\uB7EC\uB9AC",settings:"\uC124\uC815",menu:"\uBA54\uB274",store:"\uC2A4\uD1A0\uC5B4",env:"\uD658\uACBD",keyboard:"\uD0A4\uBCF4\uB4DC",center:"\uC911\uC559 \uC815\uB82C",search:"\uC6F9 \uAC80\uC0C9",searchYt:"\uB3D9\uC601\uC0C1 \uAC80\uC0C9",open:"\uC5F4\uAE30",close:"\uB2EB\uAE30",general:"\uC77C\uBC18",hands:"\uD578\uB4DC \uD2B8\uB798\uD0B9",windows:"\uCC3D",dock:"\uB3C5",perf:"\uC131\uB2A5",language:"\uC5B8\uC5B4",on:"\uCF1C\uC9D0",off:"\uAEBC\uC9D0",sens:"\uAC10\uB3C4",scale:"\uD06C\uAE30 \uBE44\uC728",dist:"\uAC70\uB9AC",curve:"\uACE1\uB960",size:"\uD06C\uAE30",quality:"\uD654\uC9C8",apps:"\uC571",recents:"\uCD5C\uADFC \uD56D\uBAA9",battery:"\uBC30\uD130\uB9AC",net:"\uB124\uD2B8\uC6CC\uD06C",time:"\uC2DC\uAC04",libAll:"\uC804\uCCB4",libFilter:"\uD544\uD130",libGames:"\uAC8C\uC784",centered:"\uD654\uBA74\uC774 \uC911\uC559\uC5D0 \uB9DE\uCDB0\uC84C\uC2B5\uB2C8\uB2E4",langChanged:"\uC5B8\uC5B4\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4",langTitle:"\uC5B8\uC5B4",langContinue:"\uACC4\uC18D",langPick:"\uC5B8\uC5B4 \uC120\uD0DD",notif:"\uC54C\uB9BC",noNotif:"\uC0C8 \uC54C\uB9BC \uC5C6\uC74C",profile:"\uD504\uB85C\uD544",dockSnapSlot:"\uB3C5 \uC0AC\uC804 \uC815\uC758 \uC2AC\uB86F",dockSnapDesc:"\uCC3D \uC774\uB3D9 \uC2DC \uBC18\uD22C\uBA85 \uAC80\uC740 \uC2AC\uB86F \uD45C\uC2DC",dockSnapHint:"\uC5EC\uAE30\uC5D0 \uB193\uC544 \uC2AC\uB86F\uC5D0 \uBC30\uCE58",qualityHigh:"\uB192\uC74C (1080p)",qualityMedium:"\uC911\uAC04 (890p)",qualityLow:"\uB0AE\uC74C (390p)",qualityAuto:"\uC790\uB3D9"};tn.it={...tn.en,desktop:"Spazio di lavoro",browser:"Browser",youtube:"YouTube",gallery:"Galleria",settings:"Impostazioni",menu:"Menu",store:"Store",env:"Ambienti",keyboard:"Tastiera",center:"Ricentra",search:"Cerca sul web",searchYt:"Cerca video",open:"Apri",close:"Chiudi",general:"Generale",hands:"Tracciamento mani",windows:"Finestre",dock:"Dock",perf:"Prestazioni",language:"Lingua",on:"Attivo",off:"Disattivo",sens:"Sensibilit\xE0",scale:"Scala",dist:"Distanza",curve:"Curvatura",size:"Dimensione",quality:"Qualit\xE0",apps:"App",recents:"Recenti",battery:"Batteria",net:"Rete",time:"Ora",libAll:"Tutti",libFilter:"Filtro",libGames:"Giochi",centered:"Ambiente centrato",langChanged:"Lingua modificata",langTitle:"Lingua",langContinue:"Continua",langPick:"Scegli la lingua",notif:"Notifiche",noNotif:"Nessuna notifica",profile:"Profilo",dockSnapSlot:"Slot predefinito Dock",dockSnapDesc:"Mostra finestra nera semitrasparente quando sposti le finestre",dockSnapHint:"Rilascia qui per agganciare",qualityHigh:"Alta (1080p)",qualityMedium:"Media (890p)",qualityLow:"Bassa (390p)",qualityAuto:"Automatica"};tn.nl={...tn.en,desktop:"Werkruimte",browser:"Browser",youtube:"YouTube",gallery:"Galerij",settings:"Instellingen",menu:"Menu",store:"Winkel",env:"Omgevingen",keyboard:"Toetsenbord",center:"Centreren",search:"Zoeken op het web",searchYt:"Video\u2019s zoeken",open:"Openen",close:"Sluiten",general:"Algemeen",hands:"Handtracking",windows:"Vensters",dock:"Dock",perf:"Prestaties",language:"Taal",on:"Aan",off:"Uit",sens:"Gevoeligheid",scale:"Schaal",dist:"Afstand",curve:"Kromming",size:"Grootte",quality:"Kwaliteit",apps:"Apps",recents:"Recent",battery:"Batterij",net:"Netwerk",time:"Tijd",libAll:"Alles",libFilter:"Filter",libGames:"Games",centered:"Omgeving gecentreerd",langChanged:"Taal gewijzigd",langTitle:"Taal",langContinue:"Doorgaan",langPick:"Kies je taal",notif:"Meldingen",noNotif:"Geen nieuwe meldingen",profile:"Profiel",dockSnapSlot:"Vooraf ingesteld Dock-vak",dockSnapDesc:"Toon halftransparant zwart vak tijdens verplaatsen van vensters",dockSnapHint:"Laat hier los om te plaatsen",qualityHigh:"Hoog (1080p)",qualityMedium:"Gemiddeld (890p)",qualityLow:"Laag (390p)",qualityAuto:"Automatisch"};tn.ru={...tn.en,desktop:"\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",browser:"\u0411\u0440\u0430\u0443\u0437\u0435\u0440",youtube:"YouTube",gallery:"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",menu:"\u041C\u0435\u043D\u044E",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",env:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",keyboard:"\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",center:"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0441\u0435\u0442\u0438",searchYt:"\u041F\u043E\u0438\u0441\u043A \u0432\u0438\u0434\u0435\u043E",open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",general:"\u041E\u0431\u0449\u0438\u0435",hands:"\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0440\u0443\u043A",windows:"\u041E\u043A\u043D\u0430",dock:"\u0414\u043E\u043A",perf:"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",language:"\u042F\u0437\u044B\u043A",on:"\u0412\u043A\u043B.",off:"\u0412\u044B\u043A\u043B.",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",scale:"\u041C\u0430\u0441\u0448\u0442\u0430\u0431",dist:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",curve:"\u0418\u0437\u0433\u0438\u0431",size:"\u0420\u0430\u0437\u043C\u0435\u0440",quality:"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",apps:"\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",recents:"\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435",battery:"\u0411\u0430\u0442\u0430\u0440\u0435\u044F",net:"\u0421\u0435\u0442\u044C",time:"\u0412\u0440\u0435\u043C\u044F",libAll:"\u0412\u0441\u0435",libFilter:"\u0424\u0438\u043B\u044C\u0442\u0440",libGames:"\u0418\u0433\u0440\u044B",centered:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E",langChanged:"\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0451\u043D",langTitle:"\u042F\u0437\u044B\u043A",langContinue:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",langPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A",notif:"\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",noNotif:"\u041D\u0435\u0442 \u043D\u043E\u0432\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",dockSnapSlot:"\u041F\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0442 \u0434\u043E\u043A\u0430",dockSnapDesc:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u0447\u0451\u0440\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043E\u043A\u043E\u043D",dockSnapHint:"\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F",fingerTouch:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C (\u0431\u0435\u0437 \u0449\u0438\u043F\u043A\u0430)",fingerTouchDesc:"\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442; \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0443\u043A\u0438 \u0432\u043F\u0435\u0440\u0451\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 (\u0431\u0435\u0437 \u043B\u0443\u0447\u0430 \u0438 \u043A\u0440\u0443\u0436\u043A\u0430)",qualityHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qualityMedium:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qualityLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",qualityAuto:"\u0410\u0432\u0442\u043E"};var No=Object.freeze([{id:"en",label:"English (US)",table:"en"},{id:"ja",label:"\u65E5\u672C\u8A9E",table:"ja"},{id:"ru",label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",table:"ru"},{id:"de",label:"Deutsch",table:"de"},{id:"ko",label:"\uD55C\uAD6D\uC5B4",table:"ko"},{id:"es-ES",label:"Espa\xF1ol (Espa\xF1a)",table:"es"},{id:"it",label:"Italiano",table:"it"},{id:"en-GB",label:"English (UK)",table:"en"},{id:"nl",label:"Nederlands",table:"nl"},{id:"pt-PT",label:"Portugu\xEAs (Portugal)",table:"pt"},{id:"es",label:"Espa\xF1ol (Latinoam\xE9rica)",table:"es"},{id:"pt",label:"Portugu\xEAs (Brasil)",table:"pt"}]),WS="pt",Bc=n=>No.find(e=>e.id===n)||No.find(e=>e.id===WS);var Mh=()=>Bc(Ge.lang).table||"pt",k=n=>(tn[Mh()]||tn.pt)[n]||tn.pt[n]||n,Tr=n=>No.some(e=>e.id===n&&e.table)?(Ge.lang=n,Ye(),Ce("lang"),!0):!1,kc={},We=(n,e)=>((kc[n]||(kc[n]=[])).push(e),e),Ce=(n,e)=>(kc[n]||[]).forEach(t=>t(e));function ct(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("on"),clearTimeout(ct._t),ct._t=setTimeout(()=>e.classList.remove("on"),2400)}var gt=new _a,Me=new zt(72,1,.05,120);Me.rotation.order="YXZ";var wt=new Mn;gt.add(wt);var Vt=1.55;Me.position.set(0,Vt,0);Pc({settings:Ge,camera:Me,contentRoot:wt});var Pa=de?{setClearColor(){},setPixelRatio(){},setSize(){},render(){}}:new Mr({antialias:!0,alpha:!0});de||(Pa.setClearColor(0,0),document.getElementById("gl").appendChild(Pa.domElement));var Se=de?new Rc:new Ic;document.getElementById("css3d").appendChild(Se.domElement);if(de){document.documentElement.classList.add("native");let n=document.createElement("div");n.id="head-overlay",document.body.append(n);for(let e of["overlay","hud","toast","boot"])n.append(document.getElementById(e))}var bh=Object.freeze({high:{id:"high",height:1080,label:"1080p",dpr:2},medium:{id:"medium",height:890,label:"890p",dpr:1.55},low:{id:"low",height:390,label:"390p",dpr:1}}),Oc="medium",Sh=()=>Ge.quality==="auto"?Oc:bh[Ge.quality]?Ge.quality:"medium",qg=()=>bh[Sh()]||bh.medium;function Xg(){let n=Sh();return n==="low"?1:n==="high"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.55)}function $g(){var t,i;let n=Sh(),e=qg();document.documentElement.dataset.quality=Ge.quality,document.documentElement.dataset.qualityTier=n,document.documentElement.dataset.qualityRes=e.label,(i=(t=window.NativeXR)==null?void 0:t.setQuality)==null||i.call(t,n)}function zc(){$g(),de||(Ot.width=innerWidth,Ot.height=innerHeight);let n=Ot.width,e=Ot.height;Me.aspect=n/e,Me.updateProjectionMatrix(),Pa.setPixelRatio(Xg()),Pa.setSize(n,e),Se.setSize(n,e),Ce("resize")}addEventListener("resize",zc);addEventListener("orientationchange",()=>setTimeout(zc,120));zc();We("quality",zc);var qS=Object.freeze(["passthrough","sunset","dusk","cinema","lagoon","virtual","palm","night","space","tropical","lakeside"]),Ah=()=>[{id:"sunset",name:k("envSunset"),thumb:"./env/sunset.jpg"},{id:"passthrough",name:k("envPass"),thumb:null},{id:"dusk",name:k("envDusk"),thumb:"./env/dusk.jpg"},{id:"palm",name:k("envPalm"),thumb:"./env/palm.jpg"},{id:"lagoon",name:k("envLagoon"),thumb:"./env/lagoon.jpg"},{id:"virtual",name:k("envVirtual"),thumb:"./env/virtual.jpg"},{id:"night",name:k("envNight"),thumb:"./env/night.jpg"},{id:"space",name:k("envSpace"),thumb:"./env/space.jpg"},{id:"cinema",name:k("envCinema"),thumb:"./env/cinema.jpg"},{id:"tropical",name:k("envTropical"),thumb:"./env/tropical.jpg"},{id:"lakeside",name:k("envLakeside"),thumb:"./env/lakeside.jpg"}];function zi(n){var e,t;Ge.env=qS.includes(n)?n:"passthrough",Ge.envChosen=1,Ge.env!=="passthrough"&&(Ge.panorama=Ge.env),Ye(),Ce("env",Ge.env),(t=(e=window.NativeXR)==null?void 0:e.env)==null||t.call(e,Ge.env)}var gi=n=>zi(n?"passthrough":Ge.panorama),On={ok:!1,has:!1,q:new st,tmp:new st,e:new ni},XS=new st,$S=new st(-Math.SQRT1_2,0,0,Math.SQRT1_2),YS=new N(0,0,1),Uc=Math.PI/180;function jS(){return(screen.orientation&&screen.orientation.angle||window.orientation||0)*Uc}function ZS(n){n.alpha!=null&&(On.has=!0,On.e.set(n.beta*Uc,n.alpha*Uc,-n.gamma*Uc,"YXZ"),On.tmp.setFromEuler(On.e),On.tmp.multiply($S),On.tmp.multiply(XS.setFromAxisAngle(YS,-jS())),On.q.copy(On.tmp))}async function Rr(){if(de)return On.ok=On.has=!0,Ce("gyro",!0),!0;try{let n=window.DeviceOrientationEvent;return n&&typeof n.requestPermission=="function"&&await n.requestPermission()!=="granted"?(ct("Permiss\xE3o do girosc\xF3pio negada"),!1):(addEventListener("deviceorientation",ZS,!0),On.ok=!0,setTimeout(()=>{On.has||ct("Sem girosc\xF3pio: arraste para olhar")},1200),Ce("gyro",!0),!0)}catch{return ct("Girosc\xF3pio indispon\xEDvel"),!1}}var KS=()=>On.ok&&On.has,Er=null,La=0,_h=0;addEventListener("pointerdown",n=>{de||n.target.closest(".win-shell,.win,.win-handle,.kb,.dock,#hud,#boot")||(Er={x:n.clientX,y:n.clientY})},!0);addEventListener("pointermove",n=>{Er&&(La-=(n.clientX-Er.x)*.0032,_h=Math.max(-1.2,Math.min(1.2,_h-(n.clientY-Er.y)*.0032)),Er={x:n.clientX,y:n.clientY})});addEventListener("pointerup",()=>Er=null);addEventListener("pointercancel",()=>Er=null);function Hi(){Ht.reset();let n=new ni().setFromQuaternion(Me.quaternion,"YXZ");wt.rotation.y=n.y,wt.position.set(0,0,0),Me.position.set(0,Vt,0),Ce("recenter"),ct(k("centered"))}var Yg=[],Do=n=>Yg.push(n),Gg=performance.now(),Nc=0,yh=0,vh=0,Dc=0,xh=0,Fc=0,$n=null,jg=()=>{let n=performance.now();vh>0&&(Dc+=(n-vh)/1e3,xh++,Dc>=1&&(Fc=Math.round(xh/Dc),Dc=0,xh=0)),vh=n};function wh(n){let e=Math.min((n-Gg)/1e3,.05);if(Gg=n,de||(KS()?(Me.quaternion.slerp(On.q,1-Math.exp(-e*12)),La&&(Me.rotateY(La),La=0)):(Me.quaternion.setFromEuler(new ni(_h,Me.rotation.y+La,0,"YXZ")),La=0)),Ht.update(n,e),Me.position.set(Ht.out.x,Vt+Ht.out.y,Ht.out.z),window.__gorillaStereoOverlay){Se.render(gt,Me),requestAnimationFrame(wh);return}for(let t of Yg)t(e,n);if(Pa.render(gt,Me),Se.render(gt,Me),Nc+=e,yh++,Nc>=1){let t=Math.round(yh/Nc);if(Ge.quality==="auto"){let s=de&&Ge.handsOn&&Fc>=15?Math.min(t,Fc*2):t,r=s>=52?"high":s>=34?"medium":"low";r!==Oc&&(Oc=r,$g(),Pa.setPixelRatio(Xg()),Ce("quality-tier",Oc))}let i=document.getElementById("fps");i.textContent=Ge.showFps?t+" fps \xB7 "+qg().label+(de&&Ge.handsOn?" \xB7 tracking "+Fc+" fps":"")+(de&&Ge.handsOn?e1():""):"",Nc=0,yh=0}requestAnimationFrame(wh)}var JS=typeof location<"u"&&(new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1")),QS=typeof location<"u"&&location.hash.includes("onboarding=skip");JS||(requestAnimationFrame(wh),QS&&!Ge.entryEnvChosen?gi(!0):zi(Ge.env));if(de){let n=new we,e=!0;window.nextvrPose=t=>{n.fromArray(t).invert(),Me.quaternion.setFromRotationMatrix(n),Me.position.set(Ht.out.x,Vt+Ht.out.y,Ht.out.z),Me.updateMatrixWorld(!0),e&&(wt.rotation.y=new ni().setFromQuaternion(Me.quaternion,"YXZ").y,e=!1)},window.nextvrMessage=ct,window.nextvrDiag=t=>{$n=t}}function e1(){if(!$n)return"";let n=s=>typeof s=="number"&&s>=0?Math.round(s):null,e=[],t=n($n.camera);t!==null&&e.push("cam "+t);let i=n($n.infer);return i!==null&&e.push("infer "+i+"ms"),$n.delegate&&e.push(String($n.delegate).split(" ")[0]),typeof $n.narrow=="number"&&typeof $n.wide=="number"&&$n.narrow+$n.wide>0&&e.push("slots "+($n.narrow>=$n.wide?1:2)),n($n.stale)>0&&e.push("stale "+Math.round($n.stale)),e.length?" \xB7 "+e.join(" \xB7 "):""}var Hc=class{constructor(){this.phase="hovering",this.handId=null}get down(){return this.phase==="pressing"||this.phase==="holding"}update(e,t){if(e==null)return this.cancel();let i=[];return this.handId!==null&&this.handId!==e&&(this.down&&i.push("cancel"),this.phase="hovering"),this.handId=e,t?this.down?this.phase="holding":(this.phase="pressing",i.push("down")):this.down?(this.phase="releasing",i.push("up")):this.phase="hovering",i}cancel(){let e=this.down?["cancel"]:[];return this.phase="hovering",this.handId=null,e}},Vc=class{constructor({decideMs:e=150,dragOnPx:t=18,dragOffPx:i=8,sustainSamples:s=2}={}){this.decideMs=e,this.dragOnPx=t,this.dragOffPx=i,this.sustainSamples=s,this.mode="idle",this.handId=null,this.anchorX=0,this.anchorY=0,this.startedAt=0,this.moving=!1,this.beyond=0,this.maxDisp=0}begin(e,t,i,s){return this.mode="undecided",this.handId=e,this.anchorX=t,this.anchorY=i,this.startedAt=s,this.moving=!1,this.beyond=0,this.maxDisp=0,this.mode}sample(e,t,i,s){if(this.mode==="idle"||e!==this.handId)return this.mode;let r=Math.hypot(t-this.anchorX,i-this.anchorY);return r>this.maxDisp&&(this.maxDisp=r),r>=this.dragOnPx?++this.beyond>=this.sustainSamples&&(this.moving=!0,this.mode="drag"):r<=this.dragOffPx&&(this.beyond=0,this.moving=!1),this.mode==="undecided"&&!this.moving&&s-this.startedAt>=this.decideMs&&(this.mode="click"),this.mode}end(){return(this.mode==="undecided"||this.mode==="idle")&&(this.mode="click"),this.mode}reset(){this.mode="idle",this.handId=null,this.moving=!1,this.beyond=0,this.maxDisp=0}};var yi=[],he={x:.5,y:.5,active:!1,down:!1,phase:"hovering",hand:null,mode:"idle"},Ys=new Hc,Ia=new Vc,Rh=Math.tan(36*Math.PI/180),Jg=Rh*1.5,Wc=!1,qc=-1/0,Oo=2*Jg,Uo=2*Rh,Eh=null,Qg=500;Pc({getHands:()=>({list:yi,lastAt:qc})});var e0=()=>Wc;async function ps(){return de?(Wc=!0,window.NativeXR.hands(!0),Ce("hands",!0),!0):(ct("Hand tracking requires the Android camera pipeline."),!1)}function t0(n){for(let e of n)Ce(`pinch${e}`,he)}function Fo(){let n=Ys.cancel();Ia.reset(),he.down=he.active=!1,he.phase=Ys.phase,he.hand=null,he.mode="idle",i1(),t0(n)}function Bo(){Fo()}function Ch(){Fo(),yi.length=0,Wc=!1,qc=-1/0,Ce("phonehands",{hands:[],consumed:new Set,scaleX:Oo,scaleY:Uo}),de&&window.NativeXR.hands(!1),Ce("hands",!1)}function zo(n){let e=Oo*2*Jg,t=Uo*2*Rh;return{x:.5+n[0]/e,y:.5-n[1]/t}}var t1=250,Zg=1.6,Kg=.06,Yn={x:0,y:0},ko=0,Gc=0;function Xc(n=performance.now()){if(!he.active)return{x:he.x,y:he.y};let e=n-ko;if(!(e>0)||e>t1)return{x:he.x,y:he.y};let t=e/1e3,i=s=>Math.max(-Kg,Math.min(Kg,s));return{x:Math.min(1,Math.max(0,he.x+i(Yn.x*t))),y:Math.min(1,Math.max(0,he.y+i(Yn.y*t)))}}function n1(n,e,t=0){let i=t>0&&Gc>0?(t-Gc)/1e9:ko>0?(e-ko)/1e3:-1;if(he.active&&i>.004&&i<.3){let s=r=>Math.max(-Zg,Math.min(Zg,r));Yn.x+=(s((n.x-he.x)/i)-Yn.x)*.35,Yn.y+=(s((n.y-he.y)/i)-Yn.y)*.35,Math.hypot(Yn.x,Yn.y)<.12&&(Yn.x=Yn.y=0)}else i>=0&&i<=.004||(Yn.x=Yn.y=0);ko=e,Gc=t>0?t:0}function i1(){Yn.x=Yn.y=0,ko=0,Gc=0}de&&(window.nextvrHands=(n,e=1,t=1)=>{var u;if(!Wc)return;jg();let i=performance.now();if(Oo=e,Uo=t,qc=i,Qg=Math.max(1e3,Math.min(1500,Number(n.validForMs)||500)),yi.splice(0,yi.length,...n.hands||[]),Ce("handframe",{...n,hands:yi}),window.__gorillaStereoOverlay){(u=window.__gorillaOnHands)==null||u.call(window,i);return}let r={hands:yi,consumed:new Set,scaleX:Oo,scaleY:Uo};if(zg(r),Ce("phonehands",r),r.blockFar){Fo();return}let o=yi.filter(d=>!r.consumed.has(d.id)),a=Ys.down&&o.find(d=>d.id===Ys.handId)||o.find(d=>d.pinching)||[...o].sort((d,h)=>h.palmWidth-d.palmWidth)[0];if(!a){Fo();return}let l=zo(a.aim);n1(l,i,Number(n.timestampNs)||0),he.x=l.x,he.y=l.y,he.active=!0,he.hand=a;let c=a.predicted?[]:Ys.update(a.id,a.pinching);c.includes("down")?Ia.begin(a.id,l.x*Ot.width,l.y*Ot.height,i):c.includes("up")?Ia.end():c.includes("cancel")&&Ia.reset(),Ys.down&&!a.predicted&&Ia.sample(a.id,l.x*Ot.width,l.y*Ot.height,i),he.mode=Ia.mode,he.down=Ys.down,he.phase=Ys.phase,t0(c)});var Th=document.getElementById("overlay");Th.getContext("2d").clearRect(0,0,Th.width,Th.height);Do(()=>{var n,e;!window.__gorillaStereoOverlay&&de&&Eh!==!!E.handDraw&&(Eh=!!E.handDraw,(e=(n=window.NativeXR).handVisuals)==null||e.call(n,Eh)),yi.length&&performance.now()-qc>Qg&&(yi.length=0,Fo(),Ce("phonehands",{hands:[],consumed:new Set,scaleX:Oo,scaleY:Uo}))});var s1=Object.freeze({eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.2 4"/><path d="M6.6 6.6A16.5 16.5 0 0 0 2.5 12S6 19 12 19c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h10"/>',crosshair:'<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.4"/>',scene:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.5"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',record:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/>',stop:'<circle cx="12" cy="12" r="8.5"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>',sliders:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',volume:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',volumeoff:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',gyro:'<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',power:'<path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',wifi:'<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>',bluetooth:'<path d="M7 7l10 10-5 4V3l5 4L7 17"/>',moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',link:'<path d="M9 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M15 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',rotate:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',location:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',cast:'<path d="M3 5h18v13h-6"/><path d="M3 10a8 8 0 0 1 8 8"/><path d="M3 14a4 4 0 0 1 4 4"/><circle cx="3.5" cy="18.5" r="1.1" fill="currentColor" stroke="none"/>',camera:'<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.2"/>',bug:'<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M8 11H4M20 11h-4M8 15H4M20 15h-4M9 7l-1.5-2M15 7l1.5-2M12 18v3"/>',sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',speaker:'<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',screenshot:'<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><rect x="9" y="9" width="6" height="6" rx="1.3"/>',boundary:'<path d="M4 4l16 16M4 10v3M4 17v3h3M11 20h3M18 20h2v-3M20 13v-3M20 6V4h-3M13 4h-3"/>',headset:'<path d="M3 8h18v8h-6l-3-3-3 3H3z"/><circle cx="7" cy="12" r="1.5"/><circle cx="17" cy="12" r="1.5"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"/>',device:'<rect x="3" y="4" width="12" height="10" rx="2"/><path d="M7 18h4M9 14v4"/><rect x="17" y="8" width="4" height="12" rx="1"/>',android:'<path d="M7 8a5 5 0 0 1 10 0v1H7zM6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM4 11v5M20 11v5M9 19v2M15 19v2M8 4 6.5 2M16 4l1.5-2"/><path d="M10 6h.01M14 6h.01"/>',belloff:'<path d="M3 3l18 18M9 5a5 5 0 0 1 8 4v4l2 3H8M6 9v4l-2 3M10 20h4"/>',lock:'<rect x="6" y="10" width="12" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',battery:'<rect x="2" y="6" width="17" height="12" rx="2"/><path d="M22 9v6"/>',controller:'<path d="M8 7h8l4 3 1 8-4 1-3-4h-4l-3 4-4-1 1-8zM6 11v4M4 13h4"/><circle cx="17" cy="12" r="1"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.63.68 1.09 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'}),r1=Object.freeze({gauge:'<path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 3-4"/><circle cx="12" cy="14" r="1"/>',image:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-3 5 5"/>',edit3:'<path d="M12 20h9M4 17.5l-.5 3.5 3.5-.5L19 8.5 15.5 5z"/><path d="m14 6.5 3.5 3.5"/>',zap:'<path d="M13 2 4 13h7l-1 9 10-12h-7z"/>',maximize:'<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',distance:'<path d="M6 12h12M9 9l-3 3 3 3M15 9l3 3-3 3"/>',curve:'<path d="M3 17c3-8 15-8 18 0"/><path d="M4 20h2M18 20h2"/>',appGrid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',vision:'<path d="M4.2 8.6C4.7 6.5 6.4 5 8.6 5h6.8c2.2 0 3.9 1.5 4.4 3.6l.8 4.2c.3 1.8-1.1 3.5-3 3.5h-1.5c-.6 0-1.2-.2-1.7-.7l-1.3-1.1h-2.2l-1.3 1.1c-.5.5-1.1.7-1.7.7H6.4c-1.9 0-3.3-1.7-3-3.5z"/><path d="M3.6 9 1.8 8.2M20.4 9l1.8-.8M12 6.4v4.5"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',enter:'<path d="M20 5v7H7"/><path d="m11 8-4 4 4 4"/>',backspace:'<path d="M21 5H9l-6 7 6 7h12z"/><path d="m12 9 6 6M18 9l-6 6"/>',shift:'<path d="m12 3-7 8h4v9h6v-9h4z"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',back:'<path d="M20 12H5"/><path d="m12 19-7-7 7-7"/>',star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 8.9 8.3 12 2"/>',refresh:'<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 .8-9L20 12"/>',heart:'<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.7-4.2 3.3-6.5 7.5-6.5s6.8 2.3 7.5 6.5"/>',chevronDown:'<path d="m7 10 5 5 5-5"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',keyboard:'<rect x="3" y="6.5" width="18" height="11" rx="2.6"/><path d="M7 10.4h.01M10.4 10.4h.01M13.8 10.4h.01M17.2 10.4h.01M7.6 14h8.8"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',notification:'<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21a2 2 0 0 0 4 0"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" stroke="none"/>',store:'<path d="M4 9.2 5.6 4h12.8L20 9.2"/><path d="M4.6 9.2V20h14.8V9.2"/><path d="M4 9.2c0 1.9 1.6 2.4 2.7 2.4s2.7-.5 2.7-2.4c0 1.9 1.2 2.4 2.6 2.4s2.7-.5 2.7-2.4c0 1.9 1.4 2.4 2.7 2.4S20 11.1 20 9.2"/><path d="M10 20v-5h4v5"/>',people:'<circle cx="9" cy="9" r="3"/><path d="M3.6 19c0-3.1 2.4-5 5.4-5s5.4 1.9 5.4 5"/><circle cx="17" cy="10" r="2.4"/><path d="M16.2 14.2c2.6 0 4.4 1.6 4.4 4.3"/>',play:'<rect x="3" y="6" width="18" height="12" rx="3.6"/><path d="M10.2 9.4v5.2l4.6-2.6z" fill="currentColor" stroke="none"/>',top:'<path d="m7 14 5-5 5 5"/>',shizuku:'<path d="M17 6.5a3 3 0 0 0-3-3H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h5a3 3 0 0 0 3-3"/><path d="M7 6.5h.01M17 17.5h.01"/>'}),a1=Object.freeze({...r1,...s1});function te(n,e="ui-icon"){let t=a1[n];if(!t)throw new Error(`\xCDcone desconhecido: ${n}`);return`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${t}</svg>`}var Yt=Object.freeze({minDistance:.38,maxDistance:1.6,maxYaw:1.36,lowerEdgeFromEye:-.78,upperEdgeFromEye:.78,dragActivationPx:18,resizeActivationPx:14,motionDeadZone:.006,maxMotionStep:.14,minResize:.72,maxResize:1.4}),Ho=(n,e,t)=>Math.max(e,Math.min(t,n)),Un=n=>Number.isFinite(n)?n:0;function Lh(n,e=0,t=1.55,i=null){let s=Un(n==null?void 0:n.x),r=Number.isFinite(n==null?void 0:n.y)?n.y:t,o=Un(n==null?void 0:n.z),a=Number.isFinite(i)?i:Math.hypot(s,o);a<1e-5&&(a=Yt.minDistance,s=0,o=-a);let l=Ho(Math.atan2(-s,-o),-Yt.maxYaw,Yt.maxYaw);a=Ho(a,Yt.minDistance,Yt.maxDistance);let c=Math.max(0,Un(e)),u=t+Yt.lowerEdgeFromEye+c,d=t+Yt.upperEdgeFromEye-c;return r=u<=d?Ho(r,u,d):t,{x:-Math.sin(l)*a,y:r,z:-Math.cos(l)*a}}function n0(n,e,t=1200,i=800){return!n||!e?0:Math.hypot((Un(e.x)-Un(n.x))*t,(Un(e.y)-Un(n.y))*i)}function Ph(n,e,t,i){return n0(n,e,t,i)>=Yt.dragActivationPx}function i0(n,e,t,i){return n0(n,e,t,i)>=Yt.resizeActivationPx}function Ih(n,e){let t=Un(n==null?void 0:n.x),i=Un(n==null?void 0:n.y),s=Un(n==null?void 0:n.z),r=Un(e==null?void 0:e.x)-t,o=Un(e==null?void 0:e.y)-i,a=Un(e==null?void 0:e.z)-s,l=Math.hypot(r,o,a);if(!Number.isFinite(l)||l<=Yt.motionDeadZone)return{x:t,y:i,z:s};let u=Math.min(l,Yt.maxMotionStep)/l;return{x:t+r*u,y:i+o*u,z:s+a*u}}var o1=Object.freeze({maxAngle:1.15});function Vo(n){let e=Number.isFinite(n)?n:0;return Math.max(0,Math.min(o1.maxAngle,e))}function $c(n,e){let t=Vo(e);return t<1e-4?1/0:Math.max(0,n)/2/Math.sin(t)}function Yc(n,e){if(!Number.isFinite(e)||e<=0)return 0;let t=e*e-n*n;return t<=0?e:e-Math.sqrt(t)}function js(n,e=Yt.maxResize){let t=Ho(Un(e),Yt.minResize,Yt.maxResize);return Ho(Number.isFinite(n)?n:1,Yt.minResize,t)}function s0(n,e,t=1.55){let i=Math.max(1e-5,Un(e)),s=Math.min(n-(t+Yt.lowerEdgeFromEye),t+Yt.upperEdgeFromEye-n);return js(s/i)}function r0(n,e,t,i){return!(e>1)||!Number.isFinite(t)?js(n,i):js(n*t/e,i)}function a0(n,e){let t=js(n),s=js(e)-t;return Math.abs(s)<.004?t:js(t+Math.sign(s)*Math.min(Math.abs(s)*.55,.07))}function o0(n,e){let t=Math.max(0,Math.min(5,n|0)),i=Math.min(3,t),s=t-i,r=[];for(let o=0;o<i;o++)r.push({angle:o===0?0:o%2?e:-e,row:0});for(let o=0;o<s;o++)r.push({angle:s===1?0:o===0?-e/2:e/2,row:1});return r}var l0=1.22;function Nh(n,e){return 2*Math.atan(Math.max(0,n)/(2*Math.max(.001,e)))}function c0({width:n,dist:e,gap:t=.5,outerLimit:i=1.3}){let s=Nh(n,e);return Math.min(s*(1+Math.max(0,t)),Math.max(0,i))}function u0(n){let e=null;for(let t of n)(!e||(t.lastFocus||0)<(e.lastFocus||0))&&(e=t);return e}var Go=n=>Number.isFinite(n)?n:0,d0=(n,e,t)=>Math.max(e,Math.min(t,n));function Na(n,e,t,i={}){let s=Number.isFinite(i.eye)?i.eye:1.55,r=Go(n==null?void 0:n.x),o=Go(n==null?void 0:n.y),a=Go(n==null?void 0:n.z),l=o-s,c=Math.hypot(r,a),u=Math.hypot(r,l,a)||1e-6,d=Math.max(0,Go(e)),h=Math.max(0,Go(t));return{x:r,y:o,z:a,yaw:Math.atan2(-r,-a),pitch:c>1e-6?Math.atan2(l,c):l>=0?Math.PI/2:-Math.PI/2,halfYaw:Math.atan2(d,c||1e-6),halfPitch:Math.atan2(h,u)}}function h0(n){var i,s,r;let e=(n==null?void 0:n.target)||((i=n==null?void 0:n.obj)==null?void 0:i.position)||{x:0,y:0,z:0},t=((r=(s=n==null?void 0:n.obj)==null?void 0:s.scale)==null?void 0:r.x)||0;return Na(e,((n==null?void 0:n.w)||0)*t/2,((n==null?void 0:n.h)||0)*t/2)}function Dh(n,e={}){var s;let t=(s=n==null?void 0:n.geometry)==null?void 0:s.parameters;if(!t||!(t.width>0)||!(t.height>0))return null;n.updateMatrix();let i=n.matrix.elements;return Na({x:i[12],y:i[13],z:i[14]},t.width/2,t.height/2,e)}function l1(n,e){let t=n.yaw-n.halfYaw,i=n.yaw+n.halfYaw,s=e.yaw-e.halfYaw,r=e.yaw+e.halfYaw,o=n.pitch-n.halfPitch,a=n.pitch+n.halfPitch,l=e.pitch-e.halfPitch,c=e.pitch+e.halfPitch,u=Math.min(i,r)-Math.max(t,s),d=Math.min(a,c)-Math.max(o,l);return u>0&&d>0?-Math.sqrt(u*d):Math.hypot(Math.max(-u,0),Math.max(-d,0))}function jc(n,e=[],t={}){let i=Number.isFinite(t.eye)?t.eye:1.55,s=Number.isFinite(t.desiredDistance)?t.desiredDistance:.68,r=Number.isFinite(t.maxYaw)?t.maxYaw:1.3,o=Number.isFinite(t.gap)?t.gap:.03,a=n.box||Na(n,n.hw||.5,n.hh||.35),l=0,c=0;for(let h of e){let p=l1(a,h);if(p<0){let g=p*p;l+=26e3*g+1e3,g>c&&(c=g)}else if(p<o){let g=o-p;l+=900*g*g}}let u=Math.hypot(a.x,a.z)||1e-6;l+=26*Math.abs(a.yaw),Math.abs(a.yaw)>r&&(l+=26*(Math.abs(a.yaw)-r)*40),u>s&&(l+=34*(u-s));let d=Number.isFinite(t.lift)?t.lift:a.y;return l+=Math.abs(a.y-d)*12,{score:l,overlap:c,yaw:a.yaw,radius:u}}function c1({eye:n=1.55,lift:e,step:t=.8,distance:i=.68,halfHeight:s=.35,outerLimit:r=1.3,rings:o=3,ringStep:a=.16,rows:l=2,topRowStep:c=1.22}={}){let u=[],d=Number.isFinite(e)?e:n,h=[0];for(let p=1;p<=6;p++){let g=p*t;if(g>r+1e-9)break;h.push(g,-g)}for(let p=0;p<l;p++){let g=p===0?d:d+s*2*(c-1)+s;for(let y=0;y<o;y++){let f=i+y*a;for(let m of h){let x=d0(m,-r,r);u.push({x:Math.sin(x)*f,y:g,z:-Math.cos(x)*f,angle:x,row:p,radius:f})}}}return u}function f0({occupied:n=[],desired:e=null,eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:o=.35,outerLimit:a=1.3,lift:l=null,rings:c=3,ringStep:u=.16,rows:d=2,gap:h=.03,topRowStep:p=1.22,improvement:g=1e-6}={}){let y={eye:t,desiredDistance:s,maxYaw:a,gap:h,lift:l??t},f=c1({eye:t,lift:l??t,step:i,distance:s,halfHeight:o,outerLimit:a,rings:c,ringStep:u,rows:d,topRowStep:p}),m=null;for(let x of f){let v=Na(x,r,o),{score:S,overlap:T}=jc({...x,box:v},n,y),P={x:x.x,y:x.y,z:x.z,angle:x.angle,row:x.row,radius:x.radius,score:S,overlap:T,box:v};(!m||P.score<m.score-g)&&(m=P)}if(e){let x=Na(e,r,o),{score:v,overlap:S}=jc({...e,box:x},n,y),T={x:e.x,y:e.y,z:e.z,angle:0,row:0,radius:Math.hypot(e.x,e.z),score:v,overlap:S,box:x,desired:!0};(!m||T.score<=m.score+g)&&(m=T)}return m}function p0({desired:n,occupied:e=[],eye:t=1.55,step:i=.8,distance:s=.68,halfWidth:r=.5,halfHeight:o=.35,outerLimit:a=1.3,gap:l=.03,maxShift:c=3}={}){let u={eye:t,desiredDistance:s,maxYaw:a,gap:l,lift:n.y},d=(f,m,x)=>Na({x:f,y:m,z:x},r,o),h=jc({...n,box:d(n.x,n.y,n.z)},e,u);if(h.overlap<=0)return{x:n.x,y:n.y,z:n.z,score:h.score,moved:!1,overlap:0};let p={x:n.x,y:n.y,z:n.z,score:h.score,overlap:h.overlap},g=Math.hypot(n.x,n.z)||s,y=Math.atan2(-n.x,-n.z);for(let f=1;f<=c;f++)for(let m of[1,-1]){let x=d0(y+m*f*i,-a,a),v=-Math.sin(x)*g,S=-Math.cos(x)*g,{score:T,overlap:P}=jc({x:v,y:n.y,z:S,box:d(v,n.y,S)},e,u);T<p.score&&(p={x:v,y:n.y,z:S,score:T,overlap:P})}return{...p,moved:p.x!==n.x||p.z!==n.z}}var Zc={armMs:2e3,progressHoldMs:1700,graceMs:260,holdMs:4e3};function Kc(n){if(n.length<2)return!1;let e=n.some(s=>s.left===!0),t=n.some(s=>s.left===!1);return e&&t?!0:!n.some(s=>typeof s.left=="boolean")&&new Set(n.map(s=>s.id)).size>=2}var Da=class{constructor({armMs:e=Zc.armMs,graceMs:t=Zc.graceMs,holdMs:i=Zc.holdMs,progressHoldMs:s=Zc.progressHoldMs,now:r=()=>Date.now()}={}){this.armMs=Math.max(0,e),this.graceMs=Math.max(0,t),this.holdMs=Math.max(0,i),this.progressHoldMs=Math.max(1,s),this.now=r,this.reset()}reset(){return this.startedAt=null,this.gapAt=null,this.openedAt=null,this.open=!1,this.state(0)}state(e=0){return{progress:e,opened:!1,closed:!1,active:this.open}}get progress(){if(this.startedAt==null)return 0;let e=this.now();return Math.max(0,Math.min(1,(e-this.startedAt)/this.progressHoldMs))}update(e,t={}){let i=Number.isFinite(e)?e:this.now(),s=!!t.left&&t.leftValid!==!1,r=!!t.right&&t.rightValid!==!1,o=s&&r;if(this.open){if(o)return this.holdTooLong=i-this.openedAt>=this.holdMs,this.state(1);let a=!0;return this.open=!1,this.openedAt=null,this.startedAt=null,this.gapAt=null,this.holdTooLong=!1,{progress:1,opened:!1,closed:a,active:!1}}if(o){this.startedAt==null&&(this.startedAt=i),this.gapAt=null;let a=i-this.startedAt;return a>=this.armMs?(this.open=!0,this.openedAt=i,this.holdTooLong=!1,{progress:1,opened:!0,closed:!1,active:!0}):this.state(Math.max(0,Math.min(1,a/this.progressHoldMs)))}return this.startedAt!=null?(this.gapAt==null?this.gapAt=i:i-this.gapAt>this.graceMs&&(this.startedAt=null,this.gapAt=null),this.state(this.progress)):this.state(0)}};var vt=.00105,ye=[],za=null,Fn={y:Vt-.6,z:-1.7,h:.12};function T0(n=null){let e=[];for(let t of ye)t===n||t.hidden||t.onboarding||e.push(h0(t));if(Wi&&dt.offsetWidth>0){let t=Dh(xi);t&&e.push(t)}if(ut&&Rn&&!tl&&ut.element.offsetWidth>0){let t=Dh(Rn);t&&e.push(t)}return e}var Hh=class{constructor({id:e,title:t,node:i,w:s=1040,h:r=660,onboarding:o=!1,chrome:a=!0,resizable:l=!0}){this.onboarding=o,this.id=e,this.title=t,this.w=s,this.h=r,this.pinned=!0,this.target=new N,this.resizeScale=1,this.slot=0,this.hidden=!1,this.curve=Vo(o?0:E.win360?E.win360K:0),this.curveRadius=$c(s,this.curve);let c=document.createElement("div");c.className="win-shell",c.dataset.windowId=e,c.dataset.resizeScale="1",c.style.width=s+"px";let u=document.createElement("div");u.className="win",u.style.width=s+"px",u.style.height=r+"px",u.innerHTML=`<div class="win-bar">
        <div class="win-grip"></div><div class="win-title"></div>
        <button class="win-btn wide" data-act="curve" aria-label="360\xB0" title="360\xB0" aria-pressed="${this.curve>0}">360\xB0</button>
        <button class="win-btn" data-act="pin" aria-label="${k("repin")}" title="${k("repin")}">${te("crosshair")}</button>
        <button class="win-btn close" data-act="close" aria-label="${k("close")}" title="${k("close")}">${te("x")}</button>
      </div><div class="win-body"></div>`,u.querySelector(".win-title").textContent=t,u.querySelector(".win-body").appendChild(i),u.addEventListener("pointerdown",()=>fn(this),!0),u.querySelector(".win-bar").addEventListener("click",p=>{let g=p.target.closest("[data-act]");g&&(g.dataset.act==="close"?qt(this):g.dataset.act==="curve"?this.setCurve(this.curve>0?0:Vo(E.win360K)):m0(this))}),u.addEventListener("click",p=>{var y;let g=p.target.closest('[data-act="pin"]');g&&!((y=u.querySelector(".win-bar"))!=null&&y.contains(g))&&m0(this)});let d=document.createElement("div");d.className="win-handle",d.title=k("moveWindow"),d.setAttribute("aria-label",k("moveWindow"));let h=document.createElement("div");if(h.className="win-resize",h.hidden=!l,h.title=k("resize"),h.setAttribute("aria-label",k("resize")),h.innerHTML=te("move"),c.append(u,d,h),this.el=u,this.shell=c,this.handle=d,this.resizeHandle=h,c.dataset.curve=String(this.curve),(o||!a)&&(u.querySelector(".win-bar").hidden=!0),this.obj=new Ar(c),this.obj.scale.setScalar(vt*(this.onboarding?Xn.welcomeScale:E.winScale)),wt.add(this.obj),this.hitSegments=this.curve>0?32:1,this.hit=kh(s*vt,r*vt,this,this.hitSegments),this.bendHit(),this.grab=kh(260*vt,90*vt,this),this.grab.userData.isHandle=!0,this.resizeHit=kh(80*vt,80*vt,this),this.resizeHit.userData.isResize=!0,!de){let p=g=>({x:g.clientX/Ot.width,y:g.clientY/Ot.height});d.addEventListener("pointerdown",g=>{g.stopPropagation();let y=p(g);jh(this,y.x,y.y,"desktop"),d.setPointerCapture(g.pointerId)}),d.addEventListener("pointermove",g=>{if(ot.win===this){let y=p(g);Zh(y.x,y.y)}}),d.addEventListener("pointerup",ys),d.addEventListener("pointercancel",ys),h.addEventListener("pointerdown",g=>{g.stopPropagation();let y=p(g);I0(this,y.x,y.y),h.setPointerCapture(g.pointerId)}),h.addEventListener("pointermove",g=>{if(Gt.win===this){let y=p(g);N0(y.x,y.y)}}),h.addEventListener("pointerup",Ks),h.addEventListener("pointercancel",Ks)}}setSize(e,t){if(!(e>0)||!(t>0))return;this.w=e,this.h=t,this.shell.style.width=e+"px",this.el.style.width=e+"px",this.el.style.height=t+"px";let i=this.curve>0?32:1;this.hit.geometry.dispose(),this.hit.geometry=new Sn(this.w*vt,this.h*vt,i,1),this.hitSegments=i,this.curveRadius=$c(this.w,this.curve),this.bendHit(),this.apply(),Ri(),Ce("wins",ye)}setCurve(e){this.curve=Vo(e),this.curveRadius=$c(this.w,this.curve),this.shell.dataset.curve=String(this.curve);let t=this.el.querySelector('[data-act="curve"]');t&&t.setAttribute("aria-pressed",String(this.curve>0));let i=this.curve>0?32:1;this.hitSegments!==i&&(this.hit.geometry.dispose(),this.hit.geometry=new Sn(this.w*vt,this.h*vt,i,1),this.hitSegments=i),this.bendHit(),this.apply()}bulge(e){return Yc(e,this.curveRadius)*vt}bendHit(){let e=this.hit.geometry.attributes.position;if(this.curve<=0)for(let t=0;t<e.count;t++)e.setZ(t,0);else for(let t=0;t<e.count;t++)e.setZ(t,Yc(e.getX(t)/vt,this.curveRadius)*vt);e.needsUpdate=!0,this.hit.geometry.computeBoundingSphere()}apply(){let e=this.obj;e.position.copy(this.target);let t=Math.atan2(-e.position.x,-e.position.z)*E.winCurve,i=Math.hypot(e.position.x,e.position.z)||.001,s=Math.atan2(Vt-e.position.y,i)*E.winTilt*-1;e.rotation.set(s,t,0,"YXZ");let r=(this.onboarding?Xn.welcomeScale:E.winScale)*this.resizeScale;e.scale.setScalar(vt*r),this.hit.position.copy(e.position),this.hit.rotation.copy(e.rotation),this.hit.scale.setScalar(r);let o=(this.h/2+34)*vt*r;this.grab.position.copy(e.position),this.grab.rotation.copy(e.rotation),this.grab.translateY(-o),this.grab.scale.setScalar(r),this.resizeHit.position.copy(e.position),this.resizeHit.rotation.copy(e.rotation);let a=28;this.resizeHit.translateX((this.w/2+a)*vt*r),this.resizeHit.translateY(-(this.h/2+a)*vt*r),this.resizeHit.translateZ(this.bulge(this.w/2)+.003),this.resizeHit.scale.setScalar(r)}setHidden(e){var i,s;let t=!!e;this.hidden!==t&&(this.hidden=t,this.shell.hidden=t,this.obj.visible=!t,this.hit.visible=!t,this.grab.visible=!t&&!this.onboarding,this.resizeHit.visible=!t&&!this.onboarding,t&&ot.win===this&&ys(),t&&Gt.win===this&&Ks(),(s=(i=Se).invalidate)==null||s.call(i))}};function kh(n,e,t,i=1){let s=new St(new Sn(n,e,i,1),new en({visible:!1}));return s.userData.win=t,wt.add(s),s}function Ri(){let n=ye.some(a=>!a.onboarding&&!a.hidden);for(let a of ye)a.onboarding&&(a.id==="spatial-launcher"?(n?(a.resizeScale=.88,a.target.set(0,Vt-.22,-.84)):(a.resizeScale=1.24,a.target.set(0,Vt-.01,-.84)),a.apply()):a.target.set(0,Vt,-Xn.welcomeDistance));let e=ye.filter(a=>a.pinned&&!a.onboarding&&!a.hidden),t=e.length;if(!t)return;let i=de?E.winDist:-Fn.z+.5+(E.winDist-2.2),s=Math.max(...e.map(a=>a.w*a.resizeScale))*vt*E.winScale,r=de?c0({width:s,dist:i,gap:.5,outerLimit:Yt.maxYaw-.06}):Math.min(.78,Math.max(.52,.5+t*.05));if(o0(t,r).forEach(({angle:a,row:l},c)=>{let u=e[c],d=u.h*vt*E.winScale*u.resizeScale,h=Fn.y+Fn.h/2+.14+d/2,p=Math.sin(a)*i,g=-Math.cos(a)*i,y=l===0?h:Math.min(h+d*2*(l0-1)+d,Vt+Yt.upperEdgeFromEye-d);u.target.set(p,y,g)}),!de)return;let o=Math.min(r,Nh(s,i)*.6);for(let a of e){let l=a.w*vt*E.winScale*a.resizeScale/2,c=a.h*vt*E.winScale*a.resizeScale/2,u=p0({desired:{x:a.target.x,y:a.target.y,z:a.target.z},occupied:T0(a),eye:Vt,step:o,distance:i,halfWidth:l,halfHeight:c,outerLimit:Yt.maxYaw-.06,maxShift:4});a.target.set(u.x,u.y,u.z)}}We("recenter",Ri);We("resize",Ri);function nn(n){var s,r;let e=ye.find(o=>o.id===n.id);if(e)return fn(e),e;let t=ye.filter(o=>!o.onboarding&&!o.hidden);if(t.length>=5){let o=u0(t);o&&(ct(`${k("arcFull")}: ${o.title}`),qt(o))}let i=new Hh(n);return ye.push(i),Ri(),fn(i),i.obj.position.copy(i.target),n.free&&d1(i,n.at),i.onboarding&&(i.handle.hidden=!0,i.resizeHandle.hidden=!0),i.apply(),(r=(s=Se).invalidate)==null||r.call(s),Ce("wins",ye),i}function d1(n,e=null){n.pinned=!1;let t=n.w*vt*E.winScale*n.resizeScale/2,i=n.h*vt*E.winScale*n.resizeScale/2,s=Number.isFinite(e==null?void 0:e.y)?e.y:Fn.y+Fn.h/2+.14+i,r=Math.hypot((e==null?void 0:e.x)||0,(e==null?void 0:e.z)||-E.winDist)||E.winDist,o=f0({occupied:T0(n),desired:{x:(e==null?void 0:e.x)||0,y:s,z:(e==null?void 0:e.z)??-E.winDist},eye:Vt,step:.8,distance:r,halfWidth:t,halfHeight:i,outerLimit:Yt.maxYaw-.06,lift:s,rings:3,rows:1});o&&n.target.set(o.x,o.y,o.z)}function qt(n){var s,r,o;if(typeof n=="string"&&(n=ye.find(a=>a.id===n)),!n)return;let e=ye.indexOf(n);if(e<0)return;let t=n.el.querySelector("[data-native-browser],[data-native-app]"),i=(t==null?void 0:t.dataset.nativeBrowser)||(t?"app:"+t.dataset.nativeApp:null);mt&&(mt.nativeId?mt.nativeId===i:n.el.contains(mt))&&si(!1),Ko&&n.el.contains(Ko)&&(Ko=null),ot.win===n&&ys(),Gt.win===n&&Ks(),ye.splice(e,1),(s=n._cleanupQB)==null||s.call(n),wt.remove(n.obj),wt.remove(n.hit),wt.remove(n.grab),wt.remove(n.resizeHit),n.shell.remove(),za===n&&(za=ye[ye.length-1]||null),Ri(),(o=(r=Se).invalidate)==null||o.call(r),Ce("wins",ye)}function fn(n){za!==n&&(za=n,n.lastFocus=performance.now(),ye.forEach(e=>e.el.classList.toggle("focus",e===za)))}function m0(n){var e,t,i,s;n.pinned=!0,n.shell.classList.remove("free"),Ri(),n.obj.position.copy(n.target),n.apply(),(t=(e=Se).invalidate)==null||t.call(e),(s=(i=Se).render)==null||s.call(i,gt,Me)}var Qo=()=>za,ri=new Ao,nu=new $e,ot={win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null},Gt={win:null,start:null,active:!1,startScale:1,startDistance:1},yn={source:null,start:null,active:!1,plane:null,anchor:null},ii=document.createElement("div");ii.className="win-drop-slot";ii.dataset.windowId="drop-slot";ii.hidden=!0;ii.innerHTML='<div class="win-drop-slot-inner"><span class="win-drop-slot-badge"></span></div>';var Zs=new Ar(ii);Zs.visible=!1;wt.add(Zs);var iu=null,su=!1;function h1(n){let e=de?E.winDist:-Fn.z+.5+(E.winDist-2.2),t=n.h*vt*E.winScale*n.resizeScale,i=Fn.y+Fn.h/2+.14+t/2,s=Js||0,r=.56;return[0,-r,r].map(o=>{let a=s+o;return new N(Math.sin(a)*e,i,-Math.cos(a)*e)})}function R0(n){var g;if(!n||E.spatialLauncher||E.dockSnapSlot===0){C0();return}let e=h1(n),t=ye.filter(y=>y!==n&&!y.onboarding&&!y.hidden),i=e.filter(y=>!t.some(f=>f.obj.position.distanceTo(y)<.22)),s=i.length?i:e,r=s[0],o=n.obj.position.distanceTo(s[0]);for(let y=1;y<s.length;y++){let f=n.obj.position.distanceTo(s[y]);f<o&&(r=s[y],o=f)}iu=r;let a=(g=ot.anchor)!=null&&g.center?wt.worldToLocal(ot.anchor.center.clone()):n.obj.position;su=n.obj.position.distanceTo(a)>.04&&o<=.16,ii.style.width=n.w+"px",ii.style.height=n.h+"px";let c=ii.querySelector(".win-drop-slot-badge");c&&(c.textContent=k("dockSnapHint")),ii.classList.toggle("is-ready",su),ii.hidden=!1,Zs.position.copy(r);let u=Math.atan2(-r.x,-r.z)*E.winCurve,d=Math.hypot(r.x,r.z)||.001,h=Math.atan2(Vt-r.y,d)*E.winTilt*-1;Zs.rotation.set(h,u,0,"YXZ");let p=E.winScale*n.resizeScale;Zs.scale.setScalar(vt*p),Zs.visible=!0}function C0(){var n,e;iu=null,su=!1,(Zs.visible||!ii.hidden)&&(Zs.visible=!1,ii.hidden=!0,ii.classList.remove("is-ready"),(e=(n=Se).invalidate)==null||e.call(n))}function Or(n,e,t=ri){return Me.updateMatrixWorld(!0),wt.updateMatrixWorld(!0),nu.set(n*2-1,1-e*2),t.setFromCamera(nu,Me),t}function f1(n){return n.h*vt*E.winScale*n.resizeScale/2}function p1(n,e,t=null){let i=Lh(e,f1(n),Vt,t);return new N(i.x,i.y,i.z)}function jh(n,e,t,i="handle",s=null){if(n.onboarding||Gt.win)return!1;ot.win&&ys(),fn(n),Or(e,t);let r=n.obj.getWorldPosition(new N),o=new Qn().setFromNormalAndCoplanarPoint(ri.ray.direction.clone(),r),a=ri.ray.intersectPlane(o,new N);if(!a)return!1;let l=wt.worldToLocal(r.clone()),c=Math.hypot(l.x,l.z);return Object.assign(ot,{win:n,source:i,hand:s,start:{x:e,y:t},active:!1,plane:o,anchor:{hit:a.clone(),center:r.clone(),radius:c,applied:new N}}),!0}function m1(){let n=ot.win;!n||ot.active||(ot.active=!0,n.pinned=!1,n.shell.classList.add("free","moving"),Ri(),R0(n))}function Zh(n,e){let t=ot.win;if(!t)return!1;Or(n,e);let i=ri.ray.intersectPlane(ot.plane,new N);if(!i)return!1;if(!ot.active){if(!Ph(ot.start,{x:n,y:e},Ot.width,Ot.height))return!1;m1()}let s=ot.anchor,r=i.clone().sub(s.hit);s.applied.copy(Ih(s.applied,r));let o=s.center.clone().add(s.applied),a=p1(t,wt.worldToLocal(o),s.radius);return t.target.copy(a),t.obj.position.copy(t.target),R0(t),!0}function ys(){let n=ot.win;n&&(su&&iu&&(n.target.copy(iu),n.obj.position.copy(n.target),n.apply()),n.shell.classList.remove("moving")),C0(),Object.assign(ot,{win:null,source:null,hand:null,start:null,active:!1,plane:null,anchor:null})}function L0(n,e,t="pinch"){if(!Wi||ot.win||Gt.win)return!1;yn.start&&bs(),Or(n,e);let i=En.getWorldPosition(new N),s=new Qn().setFromNormalAndCoplanarPoint(ri.ray.direction.clone(),i),r=ri.ray.intersectPlane(s,new N);return r?(Object.assign(yn,{source:t,start:{x:n,y:e},active:!1,plane:s,anchor:{hit:r.clone(),center:i.clone(),applied:new N}}),dt.classList.add("grab-armed"),Wt.setAttribute("aria-pressed","true"),!0):!1}function g1(){!yn.start||yn.active||(yn.active=!0,dt.classList.remove("grab-armed"),dt.classList.add("moving"))}function Kh(n,e){if(!yn.start)return!1;Or(n,e);let t=ri.ray.intersectPlane(yn.plane,new N);if(!t)return!1;if(!yn.active){if(!Ph(yn.start,{x:n,y:e},Ot.width,Ot.height))return!1;g1()}let i=yn.anchor,s=t.clone().sub(i.hit);i.applied.copy(Ih(i.applied,s));let r=i.center.clone().add(i.applied),o=wt.worldToLocal(r),a=Lh(o,Fn.h/2,Vt),l=Math.max(Vt-.55,Math.min(Vt-.08,a.y));return Ir=new N(a.x,l,a.z),Js=Math.atan2(-a.x,-a.z),qa(),!0}function bs(){dt==null||dt.classList.remove("grab-armed","moving"),Wt==null||Wt.setAttribute("aria-pressed","false"),Object.assign(yn,{source:null,start:null,active:!1,plane:null,anchor:null})}function P0(n,e,t){Me.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);let i=n.obj.getWorldPosition(new N).project(Me),s=(i.x+1)/2,r=(1-i.y)/2;return Math.hypot((e-s)*Ot.width,(t-r)*Ot.height)}function I0(n,e,t){return n.onboarding||ot.win?!1:(Gt.win&&Ks(),fn(n),Object.assign(Gt,{win:n,start:{x:e,y:t},active:!1,startScale:n.resizeScale,startDistance:Math.max(1,P0(n,e,t))}),!0)}function N0(n,e){let t=Gt.win;if(!t)return!1;if(!Gt.active){if(!i0(Gt.start,{x:n,y:e},Ot.width,Ot.height))return!1;Gt.active=!0,t.shell.classList.add("resizing")}let i=t.h*vt*E.winScale/2,s=Math.max(Gt.startScale,s0(t.obj.position.y,i,Vt)),r=r0(Gt.startScale,Gt.startDistance,P0(t,n,e),s);return t.resizeScale=js(a0(t.resizeScale,r),s),t.shell.dataset.resizeScale=t.resizeScale.toFixed(3),!0}function Ks(){Gt.win&&Gt.win.shell.classList.remove("resizing"),Object.assign(Gt,{win:null,start:null,active:!1,startScale:1,startDistance:1})}function vs(n,e){Or(n,e);let t=[];for(let a of ye)a.hidden||(a.onboarding||t.push(a.resizeHit,a.grab),t.push(a.hit));let i=ri.intersectObjects(t,!1)[0];if(!i)return null;let s=i.object.userData.win;if(i.object.userData.isResize)return{win:s,resize:!0,distance:i.distance};if(i.object.userData.isHandle)return{win:s,handle:!0,distance:i.distance};let r=i.object.worldToLocal(i.point.clone()),o=i.object.geometry.parameters;return{win:s,u:r.x/o.width+.5,v:.5-r.y/o.height,distance:i.distance}}var D0=vs;window.windowHitAt=vs;var at=null,Tn=null,y1=n=>{var e;return((e=n==null?void 0:n.closest)==null?void 0:e.call(n,'button,a,input,textarea,select,[role="button"]'))||n};function v1(n,e,t,i,s){var l,c;let r=s?y1(s):null;e===0&&(n.target=r,n.activation=r);let o=n.target||r;if(!o)return;let a=e===0?"pointerdown":e===1?"pointerup":e===2?"pointermove":"pointercancel";o.dispatchEvent(new PointerEvent(a,{bubbles:!0,cancelable:!0,pointerId:1,pointerType:"touch",isPrimary:!0,button:0,buttons:e===0||e===2?1:0,clientX:t,clientY:i})),e===1&&n.activation&&n.activation===r&&(typeof n.activation.click=="function"&&n.activation.click(),(c=(l=n.activation).matches)!=null&&c.call(l,"input,textarea")&&n.activation.focus())}function qo(n,e,t=n.x,i=n.y,s=null){var r;n.id==="shell"&&((r=n.win)!=null&&r.onboarding)?v1(n,e,t,i,s):window.NativeXR.handTouch(n.id,e,t,i)}function Jh(n,e,t){let i=n.getBoundingClientRect(),s=i.left+e*(i.width||n.offsetWidth),r=i.top+t*(i.height||n.offsetHeight),o=document.elementFromPoint(s,r);if(o&&n.contains(o))return o;let a=null,l=c=>{for(let u of c.children){let d=u.getBoundingClientRect();d.width>0&&d.height>0&&s>=d.left&&s<=d.right&&r>=d.top&&r<=d.bottom&&(a=u),l(u)}};return l(n),a||n}function kr(n,e){let t=n.win.el,i=n.u*t.offsetWidth,s=n.v*t.offsetHeight,r=t.getBoundingClientRect(),o=document.elementFromPoint(r.left+i,r.top+s)||Qh(t,i,s);if(e===0&&!(o!=null&&o.closest("[data-native-browser],[data-native-app]"))){let g=R1(o);g?si(!0,g):si(!1)}if(o==null?void 0:o.closest("[data-native-xr]")){at=null;return}let l=o==null?void 0:o.closest("[data-native-app]");if(l){let g=l.getBoundingClientRect(),y=gh(l.offsetWidth,l.offsetHeight,+(l.dataset.aspect||0),r.left+i-g.left,r.top+s-g.top);if(e===2&&!y&&!at)return;let f="app:"+l.dataset.nativeApp;if(at&&at.id!==f&&(qo(at,3),at=null),e===0){if(!y)return;at={id:f,win:n.win,x:y.u,y:y.v}}at&&at.id===f&&(y||e!==2)&&(y&&(at.x=y.u,at.y=y.v),qo(at,e,at.x,at.y)),(e===1||e===3)&&(at=null);return}let c=o==null?void 0:o.closest("[data-native-browser]"),u=c==null?void 0:c.getBoundingClientRect(),d=c?c.dataset.nativeBrowser:"shell",h=r.left+i-((u==null?void 0:u.left)||0),p=r.top+s-((u==null?void 0:u.top)||0);at&&at.id!==d&&(qo(at,3),at=null,e!==0)||(e===0&&(at={id:d,win:n.win,x:h,y:p}),at&&at.id===d&&(at.x=h,at.y=p,qo(at,e,h,p,o)),(e===1||e===3)&&(at=null))}function k0(){at&&qo(at,3),at=null,Tn=null,ys(),Ks(),bs()}We("pinchcancel",k0);function Pr(n,e){if(de){kr(n,e==="down"?0:1);return}let t=n.u*n.win.el.offsetWidth,i=n.v*n.win.el.offsetHeight,s=Qh(n.win.el,t,i);s&&(e==="down"?(s.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0})),n.win._armed=s):(s.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0})),n.win._armed===s&&(s.dispatchEvent(new MouseEvent("click",{bubbles:!0})),s.matches&&s.matches("input,textarea")&&s.focus()),n.win._armed=null))}function Qh(n,e,t){let i=null,s=r=>{for(let o of r.children){let a=x1(o,n);e>=a.l&&e<=a.r&&t>=a.t&&t<=a.b&&(i=o,s(o))}};return s(n),i||n}function x1(n,e){let t=0,i=0,s=n;for(;s&&s!==e;)t+=s.offsetLeft-s.scrollLeft,i+=s.offsetTop-s.scrollTop,s=s.offsetParent;return{l:t,t:i,r:t+n.offsetWidth,b:i+n.offsetHeight}}var Yo=null,ru=!1;function ef(){Yo&&(clearTimeout(Yo),Yo=null)}We("pinchdown",()=>{var s,r;ef(),ru=!1;let n=vs(he.x,he.y),e=uu(he.x,he.y),t=A1(he.x,he.y),i=Wa(he.x,he.y);if(n!=null&&n.resize){I0(n.win,he.x,he.y);return}if(n!=null&&n.handle){jh(n.win,he.x,he.y,"handle",(s=he.hand)==null?void 0:s.id);return}if(t&&(!n||t.distance<=(n.distance??1/0)+.12)&&(!e||t.distance<e.distance)){L0(he.x,he.y,"pinch");return}if(i&&(!n||i.distance<=(n.distance??1/0)+.15)&&(!e||i.distance<e.distance)){Zo("down");return}if(e&&(!n||e.distance<n.distance)){du(e.button);return}if(n){fn(n.win);let o=Jh(n.win.el,n.u,n.v);((r=o==null?void 0:o.closest)==null?void 0:r.call(o,'[data-spatial-builtin="browser"], [data-app="browser"]'))&&(Yo=setTimeout(()=>{Yo=null,ru=!0,Tn=null,el("spatial")},2e3)),Tn={win:n.win,hit:n};return}Zo("down")});We("pinchup",()=>{if(ef(),ru){ru=!1,Tn=null;return}if(gs){_s();return}if(vi>=0||Lr||Fa){Zo("up");return}if(Tn&&he.mode==="drag"&&(Pr(Tn.hit,"down"),Tn=null),Tn){let t=vs(he.x,he.y),i=t&&!t.handle&&!t.resize&&t.win===Tn.win?t:Tn.hit;Tn=null,Pr(i,"down"),Pr(i,"up");return}if(at){let t=vs(he.x,he.y);t&&t.win===at.win&&!t.handle&&!t.resize?kr(t,1):k0();return}if(Gt.win){Ks();return}if(ot.win){ys();return}if(yn.start){Kh(he.x,he.y),bs();return}let n=Wa(he.x,he.y),e=vs(he.x,he.y);if(n&&(!e||n.distance<=(e.distance??1/0)+.15)){Zo("up");return}if(e&&!e.handle&&!e.resize){Pr(e,"up");return}Zo("up")});var dt=document.createElement("div");dt.className="dock";var bi=document.createElement("div");bi.className="browser-tab-popup dock-browser-popup";bi.dataset.browserTabMenu="dock";bi.hidden=!0;bi.innerHTML=`
  <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
  <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
`;bi.addEventListener("click",n=>{var i;let e=n.target.closest("[data-browser-opt]");if(!e)return;n.stopPropagation();let t=e.dataset.browserOpt||"new-tab";Ga(),(i=window.nextvrOpenBrowserOption)==null||i.call(window,t)});var Wt=document.createElement("button");Wt.type="button";Wt.className="dock-grab";Wt.title=k("moveDock");Wt.setAttribute("aria-label",k("moveDock"));Wt.setAttribute("aria-pressed","false");var En=new Ar(dt);wt.add(En);var xi=new St(new Sn(1,1),new en({visible:!1})),Ti=new St(new Sn(1,1),new en({visible:!1})),Vi=new St(new Sn(.26,.14),new en({visible:!1,side:kn}));wt.add(xi,Ti,Vi);function Ga(){var e,t,i,s;bi.hidden=!0;let n=document.querySelector('[data-browser-tab-menu="spatial"]');n&&(n.hidden=!0),(t=(e=Se).invalidate)==null||t.call(e),(s=(i=Se).render)==null||s.call(i,gt,Me)}function el(n="dock"){var e,t,i,s,r,o;if(n==="spatial"){let a=document.querySelector('[data-browser-tab-menu="spatial"]');a&&(a.hidden=!1)}else{let a=cu("browser");a&&(bi.style.left=`${a.offsetLeft+a.offsetWidth/2}px`),bi.hidden=!1,qa()}(t=(e=window.NativeXR)==null?void 0:e.click)==null||t.call(e),(s=(i=Se).invalidate)==null||s.call(i),(o=(r=Se).render)==null||o.call(r,gt,Me)}typeof window<"u"&&(window.nextvrShowBrowserTabMenu=el,window.nextvrHideBrowserTabMenus=Ga);if(!de){let n=e=>({x:e.clientX/Ot.width,y:e.clientY/Ot.height});Wt.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation();let t=n(e);L0(t.x,t.y,"desktop")&&Wt.setPointerCapture(e.pointerId)}),Wt.addEventListener("pointermove",e=>{if(yn.source==="desktop"){let t=n(e);Kh(t.x,t.y)}}),Wt.addEventListener("pointerup",e=>{yn.source==="desktop"&&(bs(),Wt.hasPointerCapture(e.pointerId)&&Wt.releasePointerCapture(e.pointerId))}),Wt.addEventListener("pointercancel",bs)}var Wi=!0,Xo=!1;function pn(n){var e,t;Wi=!!n,En.visible=Wi,Wi||(vi=-1,bs()),(t=(e=Se).invalidate)==null||t.call(e)}var O0=()=>Wi;function Cn(n){var t,i;let e=!!n;return Xo===e||(Xo=e,dt.style.setProperty("display",e?"none":"","important"),xi.visible=Ti.visible=!e,pn(!e),(i=(t=Se).invalidate)==null||i.call(t)),Xo}var lu=()=>Xo,b1=[],Bn=[],cu=n=>Bn.find(e=>e.dataset.id===n)||null,Vh=[],_1=te("wifi"),w1='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6.8" width="17.5" height="10.4" rx="3"/><rect x="21" y="10.4" width="1.7" height="3.2" rx=".85" fill="currentColor" stroke="none"/><rect class="fill" x="4.2" y="9" width="13" height="6" rx="1.4" fill="currentColor" stroke="none"/></svg>',M1='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>';function U0(n){b1=n,Bn=[],Vh.length=0,dt.innerHTML="";for(let e of n){if(e.kind==="sep"){dt.appendChild(S1());continue}if(e.kind==="spacer"){let i=document.createElement("span");i.className="dock-spacer",i.style.width="14px",i.style.display="inline-block",dt.appendChild(i);continue}let t=document.createElement("button");if(t.dataset.id=e.id,t.title=e.label||"",t.setAttribute("aria-label",e.label||e.id),e.kind==="avatar")t.className="dock-av",t.innerHTML=E.profileAvatar?`<img src="${E.profileAvatar}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`:M1,E.profileName&&(t.title=E.profileName);else if(e.kind==="status")t.className="dock-status",t.innerHTML=`<span class="dk-time">--:--</span><span class="dk-wifi">${_1}</span><span class="dk-bat">${w1}<span class="dk-bat-percent"></span></span>`;else if(e.kind==="tool")t.className="dock-tool",t.innerHTML=e.svg;else if(t.className="dock-app"+(e.launcher?" dock-launcher":""),e.bg&&(t.style.background=e.bg),t.innerHTML=e.launcher?'<span class="dk-grid">'+"<i></i>".repeat(9)+"</span>":e.svg||(e.icon?`<img src="${e.icon}" alt="">`:`<span>${e.glyph||"\u2022"}</span>`),e.win){let i=document.createElement("i");i.className="dock-dot",t.appendChild(i),Vh.push({b:t,win:e.win})}if(e.id==="browser"){let i=null;t.addEventListener("pointerdown",()=>{clearTimeout(i),i=setTimeout(()=>{t.dataset.holdConsumed="1",el("dock")},2e3)});let s=()=>{clearTimeout(i),i=null};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("pointerleave",s)}t.addEventListener("click",()=>{if(t.dataset.holdConsumed==="1"){t.dataset.holdConsumed="0";return}Ga(),e.run()}),dt.appendChild(t),Bn.push(t)}dt.appendChild(bi),Wt.title=k("moveDock"),Wt.setAttribute("aria-label",k("moveDock")),dt.appendChild(Wt),tf(),nf(),Va(),F0(),qa()}function S1(){let n=document.createElement("span");return n.className="dock-sep",n}function F0(){for(let{b:n,win:e}of Vh){let t=n.querySelector(".dock-dot");t&&t.classList.toggle("on",ye.some(i=>i.id===e))}}We("wins",F0);var Gi={time:"--:--",date:"",batteryLevel:null,charging:!1,online:navigator.onLine},Xi=()=>({...Gi});function au(){Ce("device-status",Xi())}function tf(){let n=dt.querySelector(".dk-time"),e=new Date;Gi.time=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Gi.date=e.toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n&&(n.textContent=Gi.time),au()}tf();setInterval(tf,1e3);function nf(){let n=dt.querySelector(".dk-wifi");Gi.online=navigator.onLine,n&&(n.style.opacity=Gi.online?"1":".35"),au()}addEventListener("online",nf);addEventListener("offline",nf);var Ha=null;function Va(){let n=dt.querySelector(".dk-bat");if(!Ha){n&&(n.style.display="none"),Gi.batteryLevel=null,Gi.charging=!1,au();return}let e=Math.max(0,Math.min(1,Number(Ha.level)||0)),t=!!Ha.charging;if(Gi.batteryLevel=e,Gi.charging=t,n){n.style.display="";let i=n.querySelector(".dk-bat-percent"),s=n.querySelector(".fill");s&&(s.setAttribute("width",String(Math.max(1.6,13*e))),s.setAttribute("fill",t?"#8de6c8":e<.2?"#ff6b6b":"currentColor")),i&&(i.textContent=`${Math.round(e*100)}%`),n.title=`${Math.round(e*100)}%${t?" \xB7 carregando":""}`}au()}window.nextvrBattery=n=>{try{let e=typeof n=="string"?JSON.parse(n):n;e&&typeof e.level=="number"&&(Ha=e,Va())}catch{}};!de&&navigator.getBattery&&navigator.getBattery().then(n=>{Ha=n,n.addEventListener("levelchange",Va),n.addEventListener("chargingchange",Va),Va()}).catch(()=>{});var vi=-1,Lr=null,Oh={x:-1,y:-1},jo=null,Fa=!1;function Gh(){jo&&(clearTimeout(jo),jo=null)}We("pinchcancel",()=>{vi=-1,Lr=null,Fa=!1,Gh(),ef()});function Zo(n){var s,r,o;let e=Wa(he.x,he.y);if(n==="down"){if(Gh(),Fa=!1,Oh={x:he.x,y:he.y},e!=null&&e.popupOpt){vi=-1,Lr=e.popupOpt;return}Lr=null,vi=e?e.i:-1,vi>=0&&((r=(s=Bn[vi])==null?void 0:s.dataset)==null?void 0:r.id)==="browser"&&(jo=setTimeout(()=>{jo=null,Fa=!0,el("dock")},2e3));return}if(Gh(),Fa){Fa=!1,vi=-1,Lr=null;return}let t=vi,i=Lr;if(vi=-1,Lr=null,n==="up"){let a=(e==null?void 0:e.popupOpt)||i;if(a){Ga(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,a);return}let l=e&&e.i===t?e.i:-1;if(l<0&&t>=0&&Math.hypot(he.x-Oh.x,he.y-Oh.y)<.085&&(l=t),l<0)return;let c=Bn[l];c&&(c.style.transform="scale(.88)",setTimeout(()=>c.style.transform="",150),c.click())}}function A1(n,e){return!Wi||!Wh?null:(Or(n,e),Ti.updateMatrixWorld(!0),ri.intersectObject(Ti,!1)[0]||null)}function Wa(n,e){if(!Wi)return null;if(Or(n,e),!bi.hidden){Vi.updateMatrixWorld(!0);let a=ri.intersectObject(Vi,!1)[0];if(a){let c=Vi.worldToLocal(a.point.clone()).y>=0?"new-tab":"incognito-tab",u=bi.querySelector(`[data-browser-opt="${c}"]`);return{i:-1,popupOpt:c,el:u,distance:a.distance}}}xi.updateMatrixWorld(!0);let t=ri.intersectObject(xi,!1)[0];if(!t)return null;let i=xi.worldToLocal(t.point.clone()),s=xi.geometry.parameters,r=(i.x/s.width+.5)*dt.offsetWidth,o=(.5-i.y/s.height)*dt.offsetHeight;for(let a=0;a<Bn.length;a++){let l=Bn[a];if(r>=l.offsetLeft-4&&r<=l.offsetLeft+l.offsetWidth+4&&o>=l.offsetTop-4&&o<=l.offsetTop+l.offsetHeight+4)return{i:a,distance:t.distance,button:l}}return null}var g0="",Wh="",Js=0,Ir=null;We("recenter",()=>{Js=0,ms.ready=!1,Ir=null,bs();for(let n of ye)!n.onboarding&&!n.hidden&&(n.pinned=!0,n.shell.classList.remove("free"));qa(),Ri();for(let n of ye)n.hidden||n.apply()});We("summon-dock",()=>{var e;Me.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);let n=Me.getWorldDirection(new N).transformDirection(wt.matrixWorld.clone().invert());Js=Math.atan2(-n.x,-n.z),ms.ready=!1,Ir=null,bs(),qa(),(e=window.NativeXR)==null||e.click()});function qa(){let n=Ot.width>Ot.height,e=(de?Xn.dockDistance:n?1.42:1.75)*E.dockDist,t=de?-Xn.dockDrop:n?-.5:-.6,i=vt*(de?Xn.dockScale:n?.74:.88)*E.dockSize;Ir?En.position.copy(Ir):En.position.set(-Math.sin(Js)*e,Vt+t,-Math.cos(Js)*e),En.rotation.set(.26,Js,0,"YXZ"),En.scale.setScalar(i);let s=dt.offsetWidth*i,r=dt.offsetHeight*i,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==g0&&(g0=o,xi.geometry.dispose(),xi.geometry=new Sn(s,r),Fn.h=r,Ir||Ri());let a=Wt.offsetWidth*i,l=Wt.offsetHeight*i,c=a.toFixed(3)+"x"+l.toFixed(3);a>0&&c!==Wh&&(Wh=c,Ti.geometry.dispose(),Ti.geometry=new Sn(a,l)),xi.position.copy(En.position),xi.rotation.copy(En.rotation),Vi.position.copy(En.position),Vi.rotation.copy(En.rotation);let u=cu("browser"),d=u&&dt.offsetWidth>0?(u.offsetLeft+u.offsetWidth*.5-dt.offsetWidth*.5)*i:0;Vi.translateX(d),Vi.translateY((dt.offsetHeight*.5+52)*i),Vi.translateZ(.005),Ti.position.copy(En.position),Ti.rotation.copy(En.rotation),Ti.translateY((dt.offsetHeight/2-Wt.offsetTop-Wt.offsetHeight/2)*i),Ti.translateZ(.004),!Ir&&(Fn.y!==En.position.y||Fn.z!==-e)&&(Fn.y=En.position.y,Fn.z=-e,Ri())}var E1=[["1","2","3","4","5","6","7","8","9","0",{k:"\u232B",cls:"wide",icon:"backspace",label:"Apagar"}],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","\xE7",{k:"\u23CE",cls:"enter",icon:"enter",label:"Enter"}],[{k:"\u21E7",cls:"wide",icon:"shift",label:"Shift"},"z","x","c","v","b","n","m",",","."],[{k:"@lang",cls:"util",icon:"globe",label:"Idioma"},{k:"@emoji",cls:"util",icon:"smile",label:"Emoji"},{k:" ",cls:"space",lbl:"espa\xE7o"},{k:"@mic",cls:"util",icon:"mic",label:"Ditado"},{k:"@close",cls:"util",icon:"keyboard",label:"Fechar teclado"}]],y0=["\u{1F642}","\u{1F600}","\u{1F602}","\u2764\uFE0F","\u{1F44D}","\u{1F64F}","\u{1F60D}","\u{1F605}"],T1=0,ut=null,Rn=null,mt=null,Oa=null,qi=!1,Nr=!1,tl=!1,xs=window.__nextvrTyping,R1=n=>(xs==null?void 0:xs.editable(n))||null,Ko=null,qh=1,B0=2,ou=3,C1=de;function Qs(n){var t,i;if(tl=!!n,!ut)return!1;let e=!!n;return ut.visible=!e,ut.element.style.setProperty("display",e?"none":"","important"),Rn&&(Rn.visible=!e),e&&_s(),(i=(t=Se).invalidate)==null||i.call(t),!0}var z0=()=>!!ut&&ut.visible!==!1,H0=()=>tl;function L1(n){var i;let e=n!=null&&n.nativeId?document.querySelector(n.nativeId.startsWith("app:")?`[data-native-app="${n.nativeId.slice(4)}"]`:`[data-native-browser="${n.nativeId}"]`):n,t=(i=e==null?void 0:e.closest)==null?void 0:i.call(e,".win-shell");return t&&ye.find(s=>s.shell===t)||null}function si(n,e){if(!n){de&&console.log("kb close; was serving",(mt==null?void 0:mt.nativeId)||(mt==null?void 0:mt.tagName)||"nothing"),_s(),ut&&(wt.remove(ut),wt.remove(Rn),ut.element.remove(),ut=null),mt=null,Oa=null,qi=Nr=!1,ms.ready=!1;return}let t=e||Ko;if(mt=t&&!t.nativeId?(xs==null?void 0:xs.focus(t))||null:t||null,mt&&!mt.nativeId&&(Ko=mt),Oa=L1(mt),de&&console.log("kb open for",(mt==null?void 0:mt.nativeId)||(mt==null?void 0:mt.tagName)||"nothing","in window",(Oa==null?void 0:Oa.id)??"none"),ut){Xh();return}let i=document.createElement("div");i.className="kb";for(let s of E1){let r=document.createElement("div");r.className="kb-row";for(let o of s){let a=typeof o=="string"?o:o.k,l=document.createElement("button");l.className="key"+(typeof o=="string"?"":" "+o.cls),typeof o=="string"?l.textContent=a:o.icon?(l.innerHTML=te(o.icon),l.setAttribute("aria-label",o.label),l.title=o.label):l.textContent=o.lbl||a,l.dataset.k=a,r.appendChild(l)}i.appendChild(r)}i.addEventListener("click",s=>{let r=s.target.closest("[data-k]");r&&(du(r),_s())}),ut=new Ar(i),ut.scale.setScalar(vt*(de?Xn.keyboardScale:.9)),wt.add(ut),Rn=new St(new Sn(1,1),new en({visible:!1})),wt.add(Rn),Xh()}function P1(){qi?Nr?(qi=!1,Nr=!1):Nr=!0:(qi=!0,Nr=!1),V0()}function sf(n,e,t,i){let s=n!=="\u21E7"&&!n.startsWith("@");if(t===ou){e&&e.classList.remove("hot"),s&&Uh(n,n,!!i,ou);return}if(t===qh){if(de&&window.NativeXR.click(),e&&e.classList.add("hot"),n==="@close"){si(!1);return}if(n==="\u21E7"){P1();return}if(n==="@lang")return;if(n==="@mic"){ct(k("micOff"));return}if(n==="@emoji"){Uh(n,y0[T1++%y0.length],!1,qh);return}}Uh(n,n,n==="\u232B"||n==="\u23CE"?!1:void 0,t)}function Uh(n,e,t,i){if(!mt)return!1;let s=t===void 0?qi:t;return mt.nativeId?window.NativeXR.key(mt.nativeId,e,!!s,i||0):xs==null||xs.key(n,!!s,i||0),C1&&i!==B0&&console.log("kb key ->",mt.nativeId||mt.tagName+"."+(mt.type||""),JSON.stringify(n),"shift="+!!s,"phase="+(i||0)),i!==ou&&s&&qi&&!Nr&&(qi=!1,V0()),!0}function V0(){if(ut){for(let n of ut.element.querySelectorAll('[data-k="\u21E7"]'))n.dataset.state=qi?Nr?"lock":"once":"";for(let n of ut.element.querySelectorAll("[data-k]")){let e=n.dataset.k;e.length===1&&/[a-zç]/i.test(e)&&(n.textContent=qi?e.toUpperCase():e.toLowerCase())}}}var v0="",I1=.35,ms={yaw:0,ready:!1},N1=n=>Math.atan2(Math.sin(n),Math.cos(n));function D1(){let n=Oa;if(n&&!n.hidden){let{x:e,z:t}=n.obj.position;if(Math.hypot(e,t)>.001)return Math.atan2(-e,-t)}return Js}function Xh(n=0){if(!ut)return;let e=D1();ms.ready?ms.yaw+=N1(e-ms.yaw)*(1-Math.exp(-n*7)):(ms.yaw=e,ms.ready=!0);let t=ms.yaw,i=de?Xn.keyboardDistance:-Fn.z-.35;ut.position.set(-Math.sin(t)*i,Vt-(de?Xn.keyboardDrop:.68),-Math.cos(t)*i),ut.rotation.set(-Math.PI/2+I1,t,0,"YXZ");let s=ut.element.offsetWidth*ut.scale.x,r=ut.element.offsetHeight*ut.scale.x,o=s.toFixed(3)+"x"+r.toFixed(3);s>0&&o!==v0&&(v0=o,Rn.geometry.dispose(),Rn.geometry=new Sn(s,r)),Rn.position.copy(ut.position),Rn.rotation.copy(ut.rotation)}var k1=700,O1=90,U1=n=>n!=="\u21E7"&&n!=="\u23CE"&&!n.startsWith("@"),gs=null,Jo=0;function uu(n,e){var a,l;if(!ut||tl)return null;nu.set(n*2-1,-(e*2-1)),ri.setFromCamera(nu,Me);let t=ri.intersectObject(Rn,!1)[0];if(!t)return null;let i=Rn.worldToLocal(t.point.clone()),s=Rn.geometry.parameters,r=(i.x/s.width+.5)*ut.element.offsetWidth,o=(.5-i.y/s.height)*ut.element.offsetHeight;return{distance:t.distance,button:((l=(a=Qh(ut.element,r,o))==null?void 0:a.closest)==null?void 0:l.call(a,"[data-k]"))||null}}function du(n){var t;let e=((t=n==null?void 0:n.dataset)==null?void 0:t.k)||null;return _s(),e?(gs={key:e,button:n,shift:qi},sf(e,n,qh),U1(e)&&(Jo=performance.now()+k1),!0):!1}function _s(){let n=gs;gs=null,Jo=0,n&&sf(n.key,n.button,ou,n.shift)}We("pinchcancel",_s);function F1(n){var i,s;if(!gs)return!1;let e=uu(he.x,he.y);if(!e)return _s(),!1;let t=((s=(i=e.button)==null?void 0:i.dataset)==null?void 0:s.k)||null;return t&&t!==gs.key?(_s(),du(e.button)):(Jo&&n>=Jo&&(sf(gs.key,gs.button,B0),Jo=n+O1),!0)}var x0="";Do((n,e)=>{let t=`${E.winScale}:${E.winDist}`;if(x0!==t&&(x0=t,Ri()),qa(),Xh(n),gs&&F1(e),Tn&&he.mode==="drag"&&(Pr(Tn.hit,"down"),Tn=null),at&&he.active&&he.down){let i=vs(he.x,he.y);i&&i.win===at.win&&!i.handle&&!i.resize&&kr(i,2)}if((Gt.win||ot.win&&ot.source!=="fist")&&he.active&&he.down){let i=Xc(e);Gt.win&&N0(i.x,i.y),ot.win&&ot.source!=="fist"&&Zh(i.x,i.y)}if(yn.start&&he.active&&he.down){let i=Xc(e);Kh(i.x,i.y)}for(let i of ye)i.hidden||i.apply();G0()});function b0(n){let e=n.matrixWorld.elements,t=Me.position.x-e[12],i=Me.position.z-e[14];return t*e[8]+i*e[10]<0}function G0(){var e,t;gt.updateMatrixWorld(!0);let n=!1;if(Wi&&dt){let i=b0(En)?"1":"0";dt.dataset.backface!==i&&(dt.dataset.backface=i,n=!0)}for(let i of ye){if(i.hidden||!i.shell)continue;let s=b0(i.obj)?"1":"0";i.shell.dataset.backface!==s&&(i.shell.dataset.backface=s,n=!0)}n&&((t=(e=Se).invalidate)==null||t.call(e))}typeof window<"u"&&(window.__updateBackfaceStates=G0);var W0='button, .d-btn, .spatial-app-tile, .lib-tile, .st-card, .st-tab, .quick-control, .entry-card, .entry-seg-btn, .entry-btn, .entry-store-card, .entry-profile-box, .yt-link, [role="button"]',Cr=null;function Dr(n){var t;let e=((t=n==null?void 0:n.closest)==null?void 0:t.call(n,W0))||null;return e===Cr?e:(Cr&&Cr.classList.remove("nextvr-choosing"),Cr=e,Cr&&Cr.classList.add("nextvr-choosing"),Cr)}function _0(n){var i;let e=((i=n==null?void 0:n.closest)==null?void 0:i.call(n,W0))||(n instanceof HTMLElement?n:null);if(!e)return null;Dr(e),e.classList.remove("nextvr-clicking"),e.classList.add("nextvr-clicking");let t=e.querySelector(":scope > .nextvr-click-ripple");return t||(t=document.createElement("span"),t.className="nextvr-click-ripple",t.setAttribute("aria-hidden","true"),e.appendChild(t)),t.classList.remove("is-active"),t.classList.add("is-active"),setTimeout(()=>{e.classList.remove("nextvr-clicking"),t==null||t.remove()},340),e}typeof window<"u"&&(window.__nextvrChooseAnim=Dr,window.__nextvrClickAnim=_0,document.addEventListener("pointerover",n=>{n.target instanceof Element&&Dr(n.target)},{passive:!0,capture:!0}),document.addEventListener("click",n=>{n.target instanceof Element&&_0(n.target)},{passive:!0,capture:!0}));if(de){let n=function(){try{Ha=JSON.parse(window.NativeXR.battery()),Va()}catch{}};window.nextvrBrowserFocus=(e,t)=>{t!==!1?si(!0,{nativeId:e}):(mt==null?void 0:mt.nativeId)!==e&&si(!1)},window.nextvrAppFocus=e=>si(!0,{nativeId:e}),n(),setInterval(n,1e4),document.addEventListener("click",e=>{e.target.closest("button")&&window.NativeXR.click()},!0)}var yt=null,Jc=new Map,Qc=new Da({holdMs:2e3,graceMs:260}),$o=new Set,rf={hands:[],consumed:new Set,scaleX:1,scaleY:1},Wo=null,Fh=0,w0=350,B1=240;function $h(n,e){Me.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);let t=new Ao;return t.setFromCamera(new $e(n*2-1,1-e*2),Me),t}function Bh(n,e,t=!1){let i=t&&n.grab||n.palm;return{x:(i[0]-.5)*e.scaleX+.5,y:(i[1]-.5)*e.scaleY+.5}}function Yh(n,e){let t=n.obj.worldToLocal(e.clone()),i=n.obj.getWorldScale(new N),s=n.curve>0?Yc(t.x,n.curveRadius):0;return{local:t,scale:i,u:t.x/n.w+.5,v:.5-t.y/n.h,d:(t.z-s)*i.z}}function z1(n,e){let t=n.obj.getWorldPosition(new N),i=new N(0,0,1).transformDirection(n.obj.matrixWorld),s=new Qn().setFromNormalAndCoplanarPoint(i,t);if(!(n.curve>0))return e.intersectPlane(s,new N);let r=n.obj.matrixWorld.clone().invert(),o=e.origin.clone().applyMatrix4(r),a=e.origin.clone().add(e.direction).applyMatrix4(r).sub(o).normalize(),l=n.curveRadius,c=a.x*a.x+a.z*a.z;if(c<1e-9)return e.intersectPlane(s,new N);let u=2*(o.x*a.x+(o.z-l)*a.z),d=o.x*o.x+(o.z-l)*(o.z-l)-l*l,h=u*u-4*c*d;if(h<0)return e.intersectPlane(s,new N);let p=Math.sqrt(h);for(let g of[(-u-p)/(2*c),(-u+p)/(2*c)]){if(!(g>0))continue;let y=o.clone().addScaledVector(a,g);if(!(Math.abs(y.x)>l+1e-6||y.z>l))return y.applyMatrix4(n.obj.matrixWorld)}return e.intersectPlane(s,new N)}function M0(n){let e=null;for(let t of ye){if(t.onboarding||t.hidden)continue;let i=t.obj.getWorldPosition(new N),s=z1(t,n.ray);if(!s)continue;let{local:r,scale:o}=Yh(t,s);if(Math.abs(r.x)*o.x>t.w*o.x/2+.08||Math.abs(r.y)*o.y>t.h*o.y/2+.08)continue;let a=n.ray.origin.distanceTo(s);(!e||a<e.distance)&&(e={win:t,point:s,distance:a})}return e}var Ba=new Map,Ua=0,ka=null;function tu(n){var e,t,i,s;ka!==n&&(ka&&((t=(e=ka.classList)==null?void 0:e.remove)==null||t.call(e,"finger-hover")),ka=n||null,ka&&((s=(i=ka.classList)==null?void 0:i.add)==null||s.call(i,"finger-hover")))}function H1(n){if(!n||n.pinching||n.fist||n.predicted)return!1;let e=n.points;if(!e||e.length<63)return!1;let t=e[0],i=e[1],s=e[18],r=e[19],o=e[24],a=e[25],l=Math.hypot(o-t,a-i),c=Math.hypot(s-t,r-i);return l>.045&&l>c*1.05}function zh(n,e){var r,o,a,l,c,u,d,h,p,g,y,f,m;if(!Number.isFinite(n)||!Number.isFinite(e))return null;let t=uu(n,e),i=vs(n,e),s=Wa(n,e);if(t&&(!i||t.distance<i.distance)&&t.button)return Dr(t.button),{kind:"kb",x:n,y:e,el:t.button,key:"kb:"+(((r=t.button.dataset)==null?void 0:r.k)||t.button.textContent||"")};if(s&&(!i||s.distance<=(i.distance??1/0)+.15)){if(s.popupOpt&&s.el)return Dr(s.el),{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(Bn[s.i]){let x=Bn[s.i];return Dr(x),{kind:"dock",x:n,y:e,el:x,key:"dock:"+(((o=x.dataset)==null?void 0:o.id)||s.i)}}}if(i&&!i.handle&&!i.resize){let x=Jh(i.win.el,i.u,i.v),v=((a=x==null?void 0:x.closest)==null?void 0:a.call(x,'button,a,[role="button"],input,select,textarea,[data-spatial-builtin],[data-spatial-android],[data-browser-opt],[data-id],[data-act],[data-lang]'))||null,S=((l=x==null?void 0:x.closest)==null?void 0:l.call(x,"[data-native-browser],[data-native-app],[data-native-xr]"))||null;if(v){Dr(v);let T=((c=v.dataset)==null?void 0:c.browserOpt)||((u=v.dataset)==null?void 0:u.spatialBuiltin)||((d=v.dataset)==null?void 0:d.spatialAndroid)||((h=v.dataset)==null?void 0:h.id)||((p=v.dataset)==null?void 0:p.act)||((g=v.dataset)==null?void 0:g.lang)||v.getAttribute("aria-label")||v.title||((f=(y=v.textContent)==null?void 0:y.trim())==null?void 0:f.slice(0,24))||"btn";return{kind:"win",x:n,y:e,el:v,hit:i,key:`win:${i.win.id}:${T}`}}if(S){let T=Math.round(i.u*16),P=Math.round(i.v*12);return{kind:"win-surf",x:n,y:e,el:S,hit:i,key:`surf:${i.win.id}:${T}:${P}`}}}if(s!=null&&s.popupOpt&&s.el)return{kind:"dock-popup",x:n,y:e,el:s.el,popupOpt:s.popupOpt,key:"dock-popup:"+s.popupOpt};if(s&&Bn[s.i]){let x=Bn[s.i];return{kind:"dock",x:n,y:e,el:x,key:"dock:"+(((m=x.dataset)==null?void 0:m.id)||s.i)}}return null}function V1(n,e){let t=n.points,i=Number(e==null?void 0:e.scaleX)||1,s=Number(e==null?void 0:e.scaleY)||1;if(t&&t.length>=26&&Number.isFinite(t[24])&&Number.isFinite(t[25])){let r=(t[24]-.5)*i+.5,o=(t[25]-.5)*s+.5,a=[[0,0],[0,.015],[0,-.015],[.015,0],[-.015,0]];for(let[d,h]of a){let p=zh(r+d,o+h);if(p)return p}let l=(t[21]-.5)*i+.5,c=(t[22]-.5)*s+.5,u=zh(l,c);if(u)return u}if(Array.isArray(n.aim)&&n.aim.length>=2){let r=zo(n.aim),o=zh(r.x,r.y);if(o)return o}return null}function eu(n,e,t=null){var o,a,l,c,u,d,h,p,g,y,f,m,x,v,S,T,P,L,H,_,b,I,O,F,C;let i=uu(n,e),s=vs(n,e),r=Wa(n,e);if(i&&(!s||i.distance<s.distance))return du(i.button),setTimeout(()=>_s(),55),!0;if(r&&(!s||r.distance<=(s.distance??1/0)+.15)){if(r.popupOpt)return Ga(),(o=window.nextvrOpenBrowserOption)==null||o.call(window,r.popupOpt),!0;if(Bn[r.i]){let M=Bn[r.i];return M.classList.add("finger-pressed"),M.style.transform="scale(.88)",setTimeout(()=>{M.style.transform="",M.classList.remove("finger-pressed")},160),M.click(),(l=(a=Se).invalidate)==null||l.call(a),(u=(c=Se).render)==null||u.call(c,gt,Me),!0}}if(s&&!s.handle&&!s.resize){fn(s.win);let M=t&&s.win.el.contains(t)?t:Jh(s.win.el,s.u,s.v),D=((d=M==null?void 0:M.closest)==null?void 0:d.call(M,'button,a,[role="button"],input,select,textarea'))||M;D!=null&&D.classList&&(D.classList.add("finger-pressed"),setTimeout(()=>{var G,Z;return(Z=(G=D.classList)==null?void 0:G.remove)==null?void 0:Z.call(G,"finger-pressed")},180));let V=!1,W=()=>{V=!0};return(h=D==null?void 0:D.addEventListener)==null||h.call(D,"click",W,{once:!0}),Pr(s,"down"),Pr(s,"up"),(p=D==null?void 0:D.removeEventListener)==null||p.call(D,"click",W),!V&&D&&!((g=D.closest)!=null&&g.call(D,"[data-native-browser],[data-native-app],[data-native-xr]"))&&((y=D.click)==null||y.call(D)),(m=(f=Se).invalidate)==null||m.call(f),(v=(x=Se).render)==null||v.call(x,gt,Me),!0}if(r!=null&&r.popupOpt)return Ga(),(S=window.nextvrOpenBrowserOption)==null||S.call(window,r.popupOpt),!0;if(r&&Bn[r.i]){let M=Bn[r.i];return M.classList.add("finger-pressed"),M.style.transform="scale(.88)",setTimeout(()=>{M.style.transform="",M.classList.remove("finger-pressed")},160),M.click(),(P=(T=Se).invalidate)==null||P.call(T),(H=(L=Se).render)==null||H.call(L,gt,Me),!0}return t&&typeof t.click=="function"&&document.body.contains(t)?((b=(_=t.classList)==null?void 0:_.add)==null||b.call(_,"finger-pressed"),setTimeout(()=>{var M,D;return(D=(M=t.classList)==null?void 0:M.remove)==null?void 0:D.call(M,"finger-pressed")},160),t.click(),(O=(I=Se).invalidate)==null||O.call(I),(C=(F=Se).render)==null||C.call(F,gt,Me),!0):!1}function G1(n){return!n||n.length<63?0:Math.hypot(n[15]-n[0],n[16]-n[1])+Math.hypot(n[51]-n[0],n[52]-n[1])+Math.hypot(n[51]-n[15],n[52]-n[16])+Math.hypot(n[27]-n[0],n[28]-n[1])}function W1(n,e,t){var p,g,y,f,m,x,v,S;if(E.fingerTouch===0||!H1(n))return Ba.delete(n==null?void 0:n.id),tu(null),!1;let i=n.head&&n.head.length===63?Math.hypot(n.head[24],n.head[25],n.head[26]):0,s=n.head&&n.head.length===63?n.head[29]-n.head[26]:0,r=Number(n.palmWidth)||0,o=G1(n.points),a=Ba.get(n.id),l=V1(n,e),c=T=>{if(!T)return!1;let P=i>0&&T.baseDist>0?i-T.baseDist:0,L=i>0&&T.baseDist>0?P/T.baseDist:0,H=r>.012&&T.basePalm>.012?(T.basePalm-r)/T.basePalm:0,_=o>.02&&T.baseSpan>.02?(T.baseSpan-o)/T.baseSpan:0,b=s-T.baseTipRelZ;return P>=.016||L>=.036||H>=.042||_>=.042||b>=.014&&(P>=.006||H>=.018||_>=.018)};if(!l)return a&&a.pendingBrowserTap&&!a.holdMenuOpened&&t-a.lastTapAt>=360&&(a.pendingBrowserTap=!1,eu(a.tapX,a.tapY,a.targetEl))||a&&t-a.lastSeenAt<=180&&t-a.enterAt>=40&&!a.latched&&c(a)&&t-a.lastTapAt>=360&&eu(a.tapX,a.tapY,a.targetEl)?(a.latched=!0,a.lastTapAt=t,Ua=t+220,!0):((!a||t-a.lastSeenAt>180)&&(Ba.delete(n.id),tu(null)),!1);tu(l.el);let u=a&&t-a.enterAt>=40&&c(a);if(!a||l.key!==a.targetKey&&!u)return a={targetKey:l.key,targetEl:l.el,tapX:l.x,tapY:l.y,baseDist:i,basePalm:r,baseSpan:o,baseTipRelZ:s,enterAt:t,lastSeenAt:t,latched:!1,holdMenuOpened:!1,pendingBrowserTap:!1,lastTapAt:(a==null?void 0:a.lastTapAt)??-1e3},Ba.set(n.id,a),!1;l.key===a.targetKey&&(a.tapX=l.x,a.tapY=l.y,a.targetEl=l.el,a.lastSeenAt=t);let d=((g=(p=a.targetEl)==null?void 0:p.dataset)==null?void 0:g.id)==="browser"||((f=(y=a.targetEl)==null?void 0:y.dataset)==null?void 0:f.spatialBuiltin)==="browser"||((x=(m=a.targetEl)==null?void 0:m.dataset)==null?void 0:x.app)==="browser";if(d&&!a.holdMenuOpened&&t-a.enterAt>=2e3)return a.holdMenuOpened=!0,a.pendingBrowserTap=!1,a.latched=!0,a.lastTapAt=t,el(((S=(v=a.targetEl)==null?void 0:v.dataset)==null?void 0:S.id)==="browser"?"dock":"spatial"),Ua=t+220,!0;if(t-a.enterAt<40)return i>0&&(a.baseDist=a.baseDist>0?a.baseDist*.5+i*.5:i),r>0&&(a.basePalm=a.basePalm>0?a.basePalm*.5+r*.5:r),o>0&&(a.baseSpan=a.baseSpan>0?a.baseSpan*.5+o*.5:o),a.baseTipRelZ=a.baseTipRelZ*.5+s*.5,!1;let h=c(a);if(!a.latched&&h&&t-a.lastTapAt>=360){if(d)return a.pendingBrowserTap=!0,a.latched=!0,!1;if(eu(a.tapX,a.tapY,a.targetEl))return a.latched=!0,a.lastTapAt=t,Ua=t+220,!0}else if(a.latched){let T=i>0&&a.baseDist>0?i-a.baseDist:0,P=r>.012&&a.basePalm>.012?(a.basePalm-r)/a.basePalm:0,L=o>.02&&a.baseSpan>.02?q1(a,o):0;if(T<=.008&&P<=.022&&L<=.022){if(a.pendingBrowserTap&&!a.holdMenuOpened&&t-a.lastTapAt>=360)return a.pendingBrowserTap=!1,a.latched=!1,a.lastTapAt=t,Ua=t+220,eu(a.tapX,a.tapY,a.targetEl),!0;a.latched=!1,a.baseDist=i,a.basePalm=r,a.baseSpan=o,a.baseTipRelZ=s}}else i>0&&(a.baseDist=a.baseDist>0?Math.min(a.baseDist,a.baseDist*.92+i*.08):i),r>.012&&(a.basePalm=a.basePalm>0?Math.max(a.basePalm,a.basePalm*.92+r*.08):r),o>.02&&(a.baseSpan=a.baseSpan>0?Math.max(a.baseSpan,a.baseSpan*.92+o*.08):o);return!1}function q1(n,e){return(n.baseSpan-e)/n.baseSpan}function S0(n=!1,e=rf){let t=yt;t!=null&&t.down&&(kr({win:t.win,u:t.u,v:t.v},n?3:1),!n&&e.hands.some(i=>i.id===t.id&&i.pinching)&&($o.add(t.id),e.consumed.add(t.id))),yt=null}We("phonehands",n=>{var l,c;rf=n;let e=new Set(n.hands.map(u=>u.id));n.hands.length||tu(null);for(let u of Jc.keys())e.has(u)||Jc.delete(u);for(let u of Ba.keys())e.has(u)||Ba.delete(u);for(let u of $o){let d=n.hands.find(h=>h.id===u);!d||!d.pinching?$o.delete(u):n.consumed.add(u)}if(ot.win&&ot.source==="fist"){let u=n.hands.find(d=>d.id===ot.hand);if(!u||!u.fist||!ye.includes(ot.win)||(l=ot.win)!=null&&l.hidden)ys();else{n.consumed.add(u.id);let d=Bh(u,n,!0);Zh(d.x,d.y)}}let t=performance.now();if(!document.documentElement.classList.contains("xr-on")&&!ye.some(u=>u.id==="entry-menu"&&!u.hidden))if(ot.win||Gt.win||yn.start||dt.classList.contains("grab-armed")||yt)Qc.reset();else{let u=(n.hands||[]).filter(p=>p.pinching&&!p.predicted),d=Kc(u),h=Qc.update(t,{left:d,right:d});if(h.opened){Qc.reset(),Bo(),Tn=null,at=null,vi=-1,ys(),Ks(),bs();for(let p of u)$o.add(p.id),n.consumed.add(p.id);Hi()}else d&&h.progress>.15&&(Bo(),Tn=null,at=null,vi=-1)}else Qc.reset();if(!(ot.win&&ot.source==="fist")){let u=n.hands.find(d=>!d.fist);if(u){let d=Bh(u,n),h=M0($h(d.x,d.y));if(h){let{local:p,scale:g}=Yh(h.win,h.point),y=h.win;(Math.abs(p.x)*g.x>y.w*g.x/2-.06||Math.abs(p.y)*g.y>y.h*g.y/2-.06)&&(Wo=h.win,Fh=t)}}}for(let u of ye)(u!==Wo||t-Fh>w0)&&u.shell.classList.remove("phone-grab-hover");Wo&&t-Fh<=w0?Wo.shell.classList.add("phone-grab-hover"):Wo=null;for(let u of n.hands){let d=Jc.get(u.id)||!1;if(Jc.set(u.id,u.fist),!ot.win&&!Gt.win&&u.fist&&!d){let h=Bh(u,n,!0),p=M0($h(h.x,h.y));p&&(((c=he.hand)==null?void 0:c.id)===u.id&&Bo(),jh(p.win,h.x,h.y,"fist",u.id)&&n.consumed.add(u.id))}}let i=null;for(let u of n.hands){if(n.consumed.has(u.id)||!u.head||u.head.length!==63)continue;if(Array.isArray(u.aim)&&u.aim.length>=2){let h=zo(u.aim);if(Wa(h.x,h.y))continue}let d=new N().fromArray(u.head,24);if(!(d.length()>.7)){d.applyMatrix4(Me.matrixWorld);for(let h of ye){if(h.hidden||h.id==="spatial-launcher")continue;let p=Yh(h,d),g=(yt==null?void 0:yt.win)===h&&yt.id===u.id,y=g?.08:.02,f=g?.26:.11;p.d>f||p.d<-.12||Math.abs(p.local.x)*p.scale.x>h.w*p.scale.x/2+y||Math.abs(p.local.y)*p.scale.y>h.h*p.scale.y/2+y||(!i||g||!i.current&&Math.abs(p.d)<Math.abs(i.d))&&(i={...p,id:u.id,win:h,point:d,current:g})}}}let s=()=>{if(!(ot.win||Gt.win||yn.start||dt.classList.contains("grab-armed")))for(let u of n.hands)n.consumed.has(u.id)||W1(u,n,t)};if(!i&&yt&&e.has(yt.id)&&ye.includes(yt.win)&&!yt.win.hidden&&t-yt.lastSeen<=B1&&(i={...yt,current:!0,held:!0}),!i){S0(!e.has(yt==null?void 0:yt.id),n),s();return}i.current?(yt.d+=(i.d-yt.d)*.45,yt.u+=(i.u-yt.u)*.45,yt.v+=(i.v-yt.v)*.45,i.held||(yt.lastSeen=t)):(S0(!1,n),yt={...i,down:!1,previousD:i.d,lastSeen:t});let r=yt,o=r.u>=0&&r.u<=1&&r.v>=0&&r.v<=1,a={win:r.win,u:Math.max(0,Math.min(1,r.u)),v:Math.max(0,Math.min(1,r.v))};!r.down&&o&&r.d<=.012&&r.previousD>.012?(he.down&&Bo(),fn(r.win),kr(a,0),r.down=!0):r.down&&(r.d>=.035||!o)?(kr(a,1),r.down=!1,n.hands.some(u=>u.id===r.id&&u.pinching)&&($o.add(r.id),n.consumed.add(r.id))):r.down&&kr(a,2),r.previousD=r.d,r.down?(n.blockFar=!0,n.consumed.add(r.id)):s()});var A0=0,E0="";Do((n,e)=>{var o,a,l,c;if(!de||e-A0<16)return;A0=e;let t=rf,i=[],s=E.fingerTouch!==0;for(let u of t.hands){if((yt==null?void 0:yt.id)===u.id&&yt.down){let y=yt,f=new N((y.u-.5)*y.win.w,(.5-y.v)*y.win.h,0).applyMatrix4(y.win.obj.matrixWorld);i.push({id:u.id,end:Me.worldToLocal(f).toArray(),direct:!0,down:y.down,...s?{noBeam:!0}:{}});continue}if(t.consumed.has(u.id)||t.blockFar){i.push({id:u.id,hidden:!0});continue}let d=((o=he.hand)==null?void 0:o.id)===u.id?Xc(e):zo(u.aim),h=$h(d.x,d.y),p=ye.filter(y=>!y.hidden).flatMap(y=>[y.resizeHit,y.grab,y.hit]);Wi&&(bi.hidden||p.push(Vi),p.push(Ti,xi)),Rn&&ut&&!tl&&p.push(Rn);let g=h.intersectObjects(p,!1)[0];i.push({id:u.id,...g?{end:g.point.toArray()}:{},down:((a=he.hand)==null?void 0:a.id)===u.id&&he.down||e<Ua,...s?{noBeam:!0}:{}})}let r=JSON.stringify(i);r!==E0&&(E0=r,(c=(l=window.NativeXR).handTargets)==null||c.call(l,r))});var q0={landscape:{w:1920,h:1080},portrait:{w:1080,h:1920}};function X0(n){return q0[n]||q0.landscape}function $0(n){let e=n==null?void 0:n.display;if(e&&e.w>0&&e.h>0){let t=e.w>=e.h,i=(n==null?void 0:n.shape)!=="portrait";return t===i?{w:e.w,h:e.h}:{w:e.h,h:e.w}}return X0(n==null?void 0:n.shape)}function X1(n){let e=Math.min(1038/n.w,544/n.h,1);return{w:Math.max(2,Math.round(n.w*e)),h:Math.max(2,Math.round(n.h*e))}}function nl(n){let e=X1($0(n));return{w:e.w+2,h:e.h+116}}var $1=400,Q0=3;function of(n,e){if(e!=null&&e.shape)return e.shape;let t=Zt.apps.find(i=>i.pkg===n);return(t==null?void 0:t.shape)||(t==null?void 0:t.orient)||"landscape"}var At={sessions:[],shizuku:{state:"unknown",detail:"",ready:!1,ask:!1,needsApp:!0,caps:null},input:{shizuku:!1,accessibility:!1,singleAppCapture:!1},capacity:Q0,sdk:0,recents:[],library:0,launch:null},Zt={apps:[],shown:0,total:0,loaded:!1,query:"",showSystem:!1,icons:0},ai=new Map,af=new Set,Y0=0,j0="";var lf=n=>At.sessions.find(e=>e.pkg===n)||null,Y1=()=>At.sessions.filter(n=>n.alive),j1=n=>"app-"+n.replace(/[^A-Za-z0-9_-]/g,"-").slice(0,48);function ws(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.appsCommand)==null||t.call(e,JSON.stringify(n))}catch{ct(k("appCommandFailed"))}}function Z1(n){let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(At.sessions=Array.isArray(e.sessions)?e.sessions:[],At.shizuku=e.shizuku||At.shizuku,At.input=e.input||At.input,At.capacity=e.capacity||Q0,At.recents=Array.isArray(e.recents)?e.recents:[],At.sdk=e.sdk||At.sdk,At.launch=e.launch||null,At.diagnostics=e.diagnostics||At.diagnostics,e.icons!=null&&e.icons!==Zt.icons&&(Zt.icons=e.icons,Zt.loaded=!1),K1(),Ce("appsState"))}function K1(){var e,t,i,s;let n=new Set;for(let r of At.sessions)if(r.state!=="stopped"){if(r.state==="suspended"){Z0(r.pkg,!0);continue}n.add(r.pkg),ai.has(r.pkg)?ey(r):J1(r)}for(let r of[...ai.keys()])n.has(r)||Z0(r,!0);(t=(e=Se).invalidate)==null||t.call(e),(s=(i=Se).render)==null||s.call(i,gt,Me),fu(!0)}function J1(n){let e=document.createElement("div");e.className="app-window";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),i.classList.toggle("mirror",n.mode==="mirror");let s=document.createElement("span");s.className="app-bar-spacer";let r=(h,p,g)=>{let y=document.createElement("button");return y.className="app-key",y.title=p,y.setAttribute("aria-label",p),y.innerHTML=te(g),y.onclick=()=>ws({cmd:"key",pkg:n.pkg,key:h}),y},o=document.createElement("button");o.className="app-key",o.title=k("appKeyboard"),o.dataset.act="keys",o.innerHTML=te("keyboard"),o.onclick=()=>iA(n.pkg);let a=document.createElement("button");a.className="app-key",a.dataset.act="rotate",a.title=k("appRotate"),a.setAttribute("aria-label",k("appRotate")),a.innerHTML=te("rotate"),a.onclick=()=>tA(n.pkg),t.append(i,s,r("back",k("appBack"),"back"),r("home",k("appHome"),"top"),r("recents",k("appRecents"),"appGrid"),o,a);let l=document.createElement("div");l.className="app-surface",l.dataset.nativeApp=n.pkg,l.dataset.aspect=String(n.display&&n.display.aspect||16/9),l.dataset.shape=of(n.pkg,n);let c=document.createElement("div");c.className="app-state",e.append(t,l),l.append(c);let u=nl(n),d=nn({id:j1(n.pkg),title:n.title,node:e,w:u.w,h:u.h});ai.set(n.pkg,{win:d,surface:l,status:c,badge:i,session:n}),ey(n)}function ey(n){var r,o;let e=ai.get(n.pkg);if(!e)return;let t=n.display||{};e.surface.dataset.aspect=String(t.aspect||16/9),n.shape&&(e.surface.dataset.shape=n.shape),e.session=n,e.pendingShape&&n.shape!==e.pendingShape&&(n={...n,shape:e.pendingShape}),n.shape===e.pendingShape&&(e.pendingShape=null),e.badge.textContent=n.mode==="mirror"?k("appMirrorBadge"):k("appWindowBadge"),e.badge.classList.toggle("mirror",n.mode==="mirror");let i={requested:k("appStarting"),creating:k("appStarting"),launching:k("appStarting"),running:"",failed:n.error?eA(n):k("appFailed")};n.mode==="display"&&((r=At.shizuku)!=null&&r.binding||!((o=At.shizuku)!=null&&o.ready))&&(n.state==="requested"||n.state==="creating")&&(i.requested=k("appWaitingService"),i.creating=k("appWaitingService")),n.mode==="mirror"&&n.state!=="running"&&n.state!=="failed"&&(i.requested=k("appMirrorStarting"),i.creating=k("appMirrorStarting"),i.launching=k("appMirrorStarting"));let s=i[n.state]??"";if(e.status.hidden=!s,e.status.dataset.state=n.state,s&&(e.status.textContent=s,n.state==="failed"&&Q1.has(n.error))){let a=document.createElement("button");a.className="app-state-btn",a.textContent=k("appOpenOnPhone"),a.onclick=()=>ws({cmd:"phone",pkg:n.pkg}),e.status.appendChild(a)}e.win.el.classList.toggle("app-native",!0),e.win.el.classList.toggle("app-failed",n.state==="failed")}var Q1=new Set(["consent_denied","projection_failed","mirror_failed","mirror_refused","display_empty","display_refused","display_failed","shizuku_unavailable","shizuku_denied","shizuku_blocked"]);function eA(n){let e={shizuku_unavailable:k("appNeedShizuku"),shizuku_denied:k("appShizukuDenied"),shizuku_blocked:k("appShizukuBlocked"),display_refused:k("appDisplayRefused"),display_failed:k("appDisplayFailed"),no_launcher_activity:k("appNoLauncher"),consent_denied:k("appConsentDenied"),mirror_stopped:k("appMirrorStopped"),mirror_failed:k("appMirrorFailed"),mirror_refused:k("appMirrorFailed"),projection_failed:k("appMirrorFailed"),display_empty:k("appDisplayEmpty"),app_not_running:k("appStopped")},t=n.error||"";return t.startsWith("surface_failed")?k("appSurfaceFailed"):e[t]||`${k("appFailed")}: ${t}`}function Z0(n,e){let t=ai.get(n);t&&(ai.delete(n),e&&af.add(n),qt(t.win),af.delete(n))}We("wins",()=>{for(let n of[...ai.keys()]){let e=ai.get(n);af.has(n)||ye.includes(e.win)||(ai.delete(n),ws({cmd:"close",pkg:n}))}Ce("appsState")});function hu(n){n&&ws({cmd:"open",pkg:n,shape:of(n,lf(n))})}function tA(n){var o;let e=ai.get(n),t=lf(n),s=((e==null?void 0:e.surface.dataset.shape)||of(n,t))==="portrait"?"landscape":"portrait",r=nl({shape:s,display:(t==null?void 0:t.display)||((o=e==null?void 0:e.session)==null?void 0:o.display)});e&&(e.surface.dataset.shape=s,e.pendingShape=s,e.win.setSize(r.w,r.h)),t&&(t.shape=s),ws({cmd:"shape",pkg:n,shape:s}),fu(!0)}function K0(){ws({cmd:"shizuku"})}function nA(){Zt.loaded=!1,ws({cmd:"refresh"})}function iA(n){si(!0,{nativeId:"app:"+n})}function cf(n){var e,t;if(Zt.loaded&&!n)return Zt;Zt.loaded=!0;try{let i=(t=(e=window.NativeXR)==null?void 0:e.appsLibrary)==null?void 0:t.call(e,Zt.query,Zt.showSystem),s=JSON.parse(i||'{"apps":[]}');Zt.apps=Array.isArray(s.apps)?s.apps:[],Zt.shown=s.shown||Zt.apps.length,Zt.total=s.total||Zt.apps.length,Zt.icons=s.icons||Zt.icons}catch{Zt.apps=[]}return Ce("appsState"),Zt}function fu(n){let e=[];for(let[i,s]of ai)e.push({pkg:i,visible:!0});let t=JSON.stringify(e);!n&&t===j0||(j0=t,ws({cmd:"sync",windows:e}))}function sA(){Y0||(Y0=setInterval(()=>{ai.size&&fu(!1)},$1))}We("wins",()=>fu(!0));var J0={install:()=>k("shizukuInstall"),start:()=>k("shizukuStart"),update:()=>k("shizukuUpdate"),ask:()=>k("shizukuAsk"),denied:()=>k("shizukuDenied"),rebind:()=>k("shizukuRebind"),ready:()=>k("shizukuReady"),unknown:()=>k("shizukuUnknown")},rA=new Set(["hosted","permission","capture"]);function aA(){let n=At.shizuku||{};return rA.has(n.route)?n.route:n.ready||n.state==="ready"||n.state==="rebind"?"hosted":n.state==="ask"?"permission":"capture"}function ty(){var u;let n=At.shizuku||{},e=aA(),t=document.createElement("div");t.className="lib-note az-row";let i=document.createElement("span");i.className="az-dot",i.dataset.state=n.state||"unknown";let s=document.createElement("span");s.className="az-text";let r={hosted:()=>k("routeHosted"),permission:()=>k("routePermission"),capture:()=>k("routeCapture")};s.textContent=(r[e]||r.capture)();let o=document.createElement("small");if(o.textContent=(J0[n.state]||J0.unknown)(),s.appendChild(o),e==="capture"&&!((u=At.input)!=null&&u.accessibility)){let d=document.createElement("small");d.textContent=k("appCaptureInput"),s.appendChild(d)}else if(n.detail){let d=document.createElement("small");d.textContent=n.detail,s.appendChild(d)}t.append(i,s);let a=document.createElement("button");a.className="az-btn",n.ask?(a.textContent=k("shizukuGrant"),a.onclick=()=>K0()):(a.textContent=k("shizukuRecheck"),a.onclick=()=>{nA(),K0()}),t.appendChild(a);let l=document.createElement("button");l.className="az-btn ghost",l.textContent=k("appSelfTest"),l.onclick=async()=>{var d;l.disabled=!0;try{await ws({cmd:"selftest"});let h=(d=At.diagnostics)==null?void 0:d.selfTest;h&&ct(h.ok?k("appSelfTestOk"):k("appSelfTestFailed"))}catch{ct(k("appCommandFailed"))}finally{l.disabled=!1}},t.appendChild(l);let c=document.createElement("button");return c.className="az-btn ghost",c.textContent=k("appDiagnostics"),c.onclick=()=>{let d=t.querySelector(".az-caps");if(d){d.remove();return}let h=document.createElement("pre");h.className="az-caps",h.textContent=oA(),h.onclick=()=>lA(h.textContent),t.appendChild(h)},t.appendChild(c),t}function oA(){var i;let n=At.shizuku||{},e=At.diagnostics||{};return["NextVR app windows",`route: ${n.route||e.route||"unknown"}`,`shizuku: ${n.state||"unknown"}${n.detail?" ("+n.detail+")":""}`,`shizuku bound: ${n.bound?"yes":"no"}${n.binding?" (binding)":""}`,`shizuku reason: ${n.reason||e.serviceReason||"-"}`,`bind error: ${n.bindError||e.bindError||"-"}`,`launch backend: ${e.launchBackend||At.launch||"-"}`,`launch error: ${e.launchError||"-"}`,`display report: ${e.displayReport||"-"}`,`display state: ${e.displayState||"-"}`,...At.sessions.map(s=>"app "+s.pkg+": shape="+(s.shape||"-")+" canvas="+(s.display&&s.display.w||0)+"x"+(s.display&&s.display.h||0)+"@"+(s.display&&s.display.dpi||0)+" ("+(s.display&&s.display.dpW||0)+"x"+(s.display&&s.display.dpH||0)+"dp, "+s.state+")"),`capture service: ${e.captureService||"-"}`,`accessibility: ${(i=At.input)!=null&&i.accessibility?"on":"off"}`,`sdk: ${e.sdk||At.sdk||"-"}`,...e.selfTest?["device self-test: "+JSON.stringify(e.selfTest)]:[],...n.caps?["service capabilities: "+JSON.stringify(n.caps)]:[]].join(`
`)}function lA(n){var e;try{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(t),t.select();let i=(e=document.execCommand)==null?void 0:e.call(document,"copy");t.remove(),i&&ct(k("appDiagnosticsCopied"));return}catch{}}var $i=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function uf(n){let e=lf(n.pkg),t=`<span class="nm">${$i((n.label||n.pkg).slice(0,2))}</span>`,i=n.icon?`<img class="lib-app-icon" src="${$i(n.icon)}" alt="" draggable="false" loading="lazy" onerror="this.remove();this.parentNode.parentNode.classList.add('noicon')">`:"",s=e?`<span class="lib-open">${$i(e.state==="suspended"?k("appMinimized"):k("appOpen"))}</span>`:"",r=n.system?`<span class="lib-sys">${$i(k("appSystem"))}</span>`:"";return`<button class="lib-tile android" data-android="${$i(n.pkg)}" data-session="${e?$i(e.state):""}" data-pkg="${$i(n.pkg)}" data-system="${n.system?"1":""}" aria-label="${$i(n.label||n.pkg)}"><span class="lib-cover${i?"":" noicon"}"><span class="lib-brand">${i}${t}</span><span class="lib-src" title="${$i(k("androidApps"))}">${te("device")}</span>`+r+s+`</span><span class="lib-label">${$i(n.label||n.pkg)}</span></button>`}function pu(n){let e=ai.get(n);e&&fn(e.win)}function ny(){return Y1().length}function iy(){return Zt.apps}function sy(){de&&(window.nextvrApps=Z1,sA(),We("lang",()=>{Zt.loaded=!1,Ce("appsState")}))}var yu="nextvr-xr-game",il="nextvr-xr-menu",It={runtime:"missing",runtimeVersion:-1,runtimeBundled:!1,vrapi:"missing",broker:!1,summary:"",hosting:!1,display:-1,problem:null,handFeed:0,handMode:"controllers",game:null,canvas:null},er=[],cA=null,ff=!1,ay=()=>It,oy=()=>er,ly=()=>It.hosting,sl=()=>It.runtime==="ready",cy=()=>It.handMode,uA=()=>{var n;return((n=It.game)==null?void 0:n.package)||null};function As(n){var e,t;try{(t=(e=window.NativeXR)==null?void 0:e.xrCommand)==null||t.call(e,JSON.stringify(n))}catch{}}function ry(n){var t;let e;try{e=JSON.parse(n)}catch{return}!e||typeof e!="object"||(Object.assign(It,e),gu=null,It.hosting&&((t=It.game)!=null&&t.package)?fA(It.game):pA(),Ce("xr",{...It,games:er}))}function dA(n){let e;try{e=JSON.parse(n)}catch{e=null}er=Array.isArray(e==null?void 0:e.games)?e.games:[],cA=(e==null?void 0:e.problem)||null,ff=!0,Ce("xr",{...It,games:er})}function uy(){var n,e;if(!(!de||window.nextvrXr)){window.nextvrXr=ry,window.nextvrXrLibrary=dA;try{ry(((e=(n=window.NativeXR).xrState)==null?void 0:e.call(n))||"{}")}catch{}df(),We("lang",()=>{df(),Ce("xr",{...It,games:er})})}}function df(){As({cmd:"library"})}function dy(){ff=!1,As({cmd:"refresh"}),df()}function hy(n){!n||It.hosting||As({cmd:"open",package:n})}function pf(){It.hosting&&As({cmd:"close"})}function hA(){It.hosting&&As({cmd:"minimize"})}function fy(){It.hosting&&As({cmd:"restore"})}function mf(){As({cmd:"runtime"})}function py(n){var t,i;let e=n==="hands"?"hands":"controllers";try{(i=(t=window.NativeXR)==null?void 0:t.xrHandMode)==null||i.call(t,e)}catch{}It.handMode=e,Ce("xr",{...It,games:er})}function gf(){As({cmd:"selftest"})}function my(){return er.map(n=>({kind:"xr",id:"xr:"+n.package,pkg:n.package,name:n.label||n.package,label:n.label||n.package,game:n}))}function gy(n){let e=n.game,t=`<span class="nm">${Ms(`${(e.label||e.package).slice(0,2)}`)}</span>`,i=uA()===e.package?`<span class="lib-open">${Ms(k("appOpen"))}</span>`:"",s=e.hostable?"":`<span class="lib-sys" title="${Ms(e.describe||k("xrNotHostable"))}">\u2715</span>`;return`<button class="lib-tile game" data-xr="${Ms(e.package)}" aria-label="${Ms(e.label||e.package)}"><span class="lib-cover"><span class="lib-brand">${t}</span><span class="lib-src" title="${Ms(k("xrTitle"))}">${te("controller")}</span>`+s+i+`<span class="lib-vr">XR</span></span><span class="lib-label">${Ms(e.label||e.package)}</span></button>`}var Ms=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function yy(){if(sl()||!ff||!er.length)return null;let n=document.createElement("div");n.className="lib-note az-row";let e=document.createElement("span");e.className="az-dot",e.dataset.state=It.runtime;let t=document.createElement("span");t.className="az-text",t.textContent=It.runtimeBundled?k("xrMissing"):k("xrMissingNoApk");let i=document.createElement("small");if(i.textContent=It.summary||It.problem||k("xrSummaryMissing"),t.appendChild(i),n.append(e,t),It.runtimeBundled){let r=document.createElement("button");r.className="az-btn",r.textContent=k("xrInstall"),r.onclick=()=>{mf(),ct(k("xrInstalling"))},n.appendChild(r)}let s=document.createElement("button");return s.className="az-btn ghost",s.textContent=k("xrSelfTest"),s.onclick=()=>gf(),n.appendChild(s),n}var Ss=!1,hf=null;function fA(n){var u;if(Ss)return;hf={windows:ye.map(d=>({win:d,hidden:d.hidden})),dockHidden:lu(),keyboard:z0(),focus:((u=Qo())==null?void 0:u.id)||null};for(let d of ye)d.setHidden(!0);Qs(!0),Cn(!0),document.documentElement.classList.add("game-on","xr-on"),Ss=!0,yf.reset(),mu(0);let e=document.createElement("div");e.className="app-native-host";let t=document.createElement("div");t.className="app-bar";let i=document.createElement("span");i.className="app-badge",i.textContent=k("xrBadge");let s=document.createElement("div");s.className="app-surface",s.dataset.nativeXr=n.package;let r=It.canvas||{w:1920,h:1080};s.dataset.aspect=String(r.w/r.h||16/9);let o=document.createElement("span");o.className="app-bar-spacer";let a=document.createElement("button");a.className="app-key",a.title=k("appMinimize"),a.setAttribute("aria-label",k("appMinimize")),a.innerHTML=te("chevronDown"),a.onclick=()=>hA();let l=document.createElement("button");l.className="app-key",l.title=k("close"),l.setAttribute("aria-label",k("close")),l.innerHTML=te("x"),l.onclick=()=>pf(),t.append(i,o,a,l),e.append(t,s);let c=nl({shape:"landscape",display:{w:r.w,h:r.h}});nn({id:yu,title:n.label||n.package,node:e,w:c.w,h:c.h})}function pA(){if(!Ss)return;Ss=!1,gu=null;for(let e of[...ye])(e.id===yu||e.id===il)&&qt(e);document.documentElement.classList.remove("game-on","xr-on");let n=hf;if(hf=null,n){let e=new Set(n.windows.map(i=>i.win));for(let i of[...ye])!e.has(i)&&!i.onboarding&&qt(i);Cn(n.dockHidden);for(let{win:i,hidden:s}of n.windows)ye.includes(i)&&i.setHidden(s);n.keyboard&&Qs(!1);let t=ye.find(i=>i.id===n.focus);t&&fn(t)}yf.reset(),mu(0)}We("wins",()=>{!Ss||!window.nextvrXr||ye.some(n=>n.id===yu)||pf()});var yf=new Da,mA=()=>Ss&&ye.some(n=>n.id===il);function gA(){if(!Ss||ye.some(i=>i.id===il)||!It.game)return;let n=It.game,e=document.createElement("div");e.className="game-menu",e.innerHTML=`
    <div class="gm-t">${Ms(n.label||n.package)}</div>
    <p class="gm-sub">${Ms(k("xrMenuHint"))}</p>
    <button class="gm-btn" data-act="continue">${k("game.continue")}</button>
    <button class="gm-btn" data-act="settings">${te("settings")}<span>${k("game.settings")}</span></button>
    <button class="gm-btn danger" data-act="exit">${k("game.exit")}</button>`,e.addEventListener("click",i=>{let s=i.target.closest("[data-act]");s&&(yA(),s.dataset.act==="exit"?pf():s.dataset.act==="settings"&&Ce("game:settings"))});let t=nn({id:il,title:k("game.menu"),node:e,w:560,h:470,free:!0,at:{x:0,y:Vt,z:-.55}});t==null||t.setCurve(0)}function yA(){let n=ye.find(e=>e.id===il);n&&qt(n)}function mu(n){let e=document.getElementById("gameRing");if(e){if(!(n>0)){e.hidden=!0;return}e.hidden=!1,e.style.background=`conic-gradient(var(--accent) ${Math.round(n*360)}deg, rgba(255,255,255,.16) 0deg)`}}var gu=null;function vA(){let n=Ss?D0(he.x,he.y):null,e=!!n&&n.win.id!==yu&&!n.win.onboarding;e!==gu&&(gu=e,As({cmd:"hands-ui",blocked:e}))}We("phonehands",n=>{if(!Ss)return;vA();let e=(n.hands||[]).filter(s=>s.pinching),t=Kc(e),i=yf.update(performance.now(),{left:t,right:t});mu(i.progress),i.opened&&gA(),i.closed&&!mA()&&mu(0)});var rl=null,zn=null,xu="",vu=0,tr=new Set,xA='button:not(:disabled),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[role="button"], [tabindex]:not([tabindex="-1"])';function bA(){var i;let n=document.getElementById("entry-fullscreen");if(n&&!n.hidden)return n;let e=Qo();if(e&&!e.hidden)return e.el;let t=document.querySelector(".dock");return t&&t.offsetWidth&&getComputedStyle(t).display!=="none"?t:((i=ye.find(s=>!s.hidden&&!s.onboarding))==null?void 0:i.el)||null}function vy(){let n=bA();return n?[...n.querySelectorAll(xA)].filter(e=>{if(e.closest("[hidden],.win-shell[hidden]"))return!1;let t=e.getBoundingClientRect();return t.width>0&&t.height>0&&getComputedStyle(e).visibility!=="hidden"}):[]}function Es(n){zn&&zn!==n&&zn.classList.remove("joycon-selected"),zn=n||null,zn&&(zn.classList.add("joycon-selected"),zn.focus({preventScroll:!0}))}function vf(n){let e=vy();if(!e.length){Es(null);return}if(e.indexOf(zn)<0){Es(e[0]);return}let i=zn.getBoundingClientRect(),s=i.left+i.width/2,r=i.top+i.height/2,o=n==="left"?[-1,0]:n==="right"?[1,0]:n==="up"?[0,-1]:[0,1],a=null,l=1/0;for(let c of e){if(c===zn)continue;let u=c.getBoundingClientRect(),d=u.left+u.width/2-s,h=u.top+u.height/2-r,p=d*o[0]+h*o[1];if(p<=2)continue;let g=Math.abs(d*o[1]-h*o[0]),y=p+g*1.8;y<l&&(a=c,l=y)}a||(a=n==="left"||n==="up"?e.at(-1):e[0]),Es(a)}function _A(){let n=vy();n.length&&((!zn||!n.includes(zn))&&Es(n[0]),zn==null||zn.click())}function wA(){var s;let n=document.querySelector('#entry-fullscreen [data-entry-act="back"]');if(n){n.click(),Es(null);return}let e=Qo(),t=(s=e==null?void 0:e.el)==null?void 0:s.querySelector('[data-entry-act="back"]');if(t){t.click(),Es(null);return}if(e&&!e.onboarding){qt(e),Es(null);return}let i=document.activeElement;i&&i!==document.body&&i.blur()}function MA(){if(rl){let n=rl;rl=null;for(let{win:e,hidden:t}of n.windows)ye.includes(e)&&e.setHidden(t);Cn(n.dockHidden),pn(n.dockVisible),Qs(n.keyboardHidden),Es(null);return}rl={windows:ye.filter(n=>!n.onboarding).map(n=>({win:n,hidden:n.hidden})),dockHidden:lu(),dockVisible:O0(),keyboardHidden:H0()};for(let{win:n}of rl.windows)n.setHidden(!0);Qs(!0),Cn(!0),Es(null)}function SA(n,e){if(n==="home"){!tr.has(n)&&e===0&&MA(),tr.add(n);return}if(n==="left"||n==="right"||n==="up"||n==="down"){(!tr.has(n)||e>0)&&vf(n),tr.add(n);return}tr.has(n)||(tr.add(n),n==="accept"?_A():n==="back"&&wA())}function AA(n,e,t=0){e?SA(n,t):tr.delete(n)}function EA(n,e){return Math.abs(n)<.58&&Math.abs(e)<.58?"":Math.abs(n)>Math.abs(e)?n<0?"left":"right":e<0?"up":"down"}function TA(n,e){let t=EA(n,e);if(!t){xu="",vu=0;return}let i=performance.now();t!==xu?(xu=t,vf(t),vu=i+320):i>=vu&&(vf(t),vu=i+170)}function xy(){!de||window.__nextvrJoyconInstalled||(window.__nextvrJoyconInstalled=!0,window.__nextvrJoyconKey=AA,window.__nextvrJoyconAxes=TA,window.addEventListener("blur",()=>{tr.clear(),xu=""}),window.addEventListener("gamepadconnected",n=>{var t;let e=((t=n.gamepad)==null?void 0:t.id)||"Bluetooth gamepad";ct(/joy.?con/i.test(e)?"Joy-Con conectado":`Controle conectado: ${e}`)}))}var by="v2.0.0";var xf="ENTRE EM OUTRO MUNDO";var _y=Object.freeze(["NeyVR","Faylan","colaboradores do nextVR","JocaVR"]),wy=Object.freeze({NeyVR:"o Dono absoluto mais aurudo do planeta.",Faylan:"o desenvolvedor mais sabido de todo o universo muita aura","colaboradores do nextVR":"",JocaVR:"o portador de jogos mais importante do planeta aurudo 67"}),bf="NextVR \u2014 realidade aumentada",bu=Object.freeze(["O NextVR \xE9 um projeto de realidade virtual criado para transformar a maneira como voc\xEA interage com o mundo digital usando apenas um celular e um VR Box.","Nosso objetivo \xE9 aproximar a experi\xEAncia de dispositivos como o Meta Quest, trazendo recursos como Hand Tracking, ambientes virtuais imersivos e uma interface moderna, futurista e intuitiva.","Estamos desenvolvendo o NextVR para levar a realidade virtual a mais pessoas, sem precisar de equipamentos caros. Cada atualiza\xE7\xE3o representa um novo passo rumo a uma experi\xEAncia mais completa, interativa e acess\xEDvel.","NextVR \u2014 Mais que um app, uma nova forma de ver."]),RA=[bf,...bu].join(`

`);var CA=`
<svg viewBox="0 0 28 24" fill="none" class="entry-back-svg" aria-hidden="true">
  <path d="M11 5L4 12L11 19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19C21.8 12 24 14.2 24 17V19" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,LA=`
<svg viewBox="0 0 36 36" fill="none" class="entry-reticle-svg" aria-hidden="true">
  <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="2"/>
  <path d="M18 3V8M18 28V33M3 18H8M28 18H33" stroke="currentColor" stroke-width="2"/>
</svg>`,My=`
<svg viewBox="0 0 24 24" fill="currentColor" class="entry-user-svg" aria-hidden="true">
  <circle cx="12" cy="8.2" r="4.2"/>
  <path d="M4 20.5c0-4.2 3.6-6.8 8-6.8s8 2.6 8 6.8z"/>
</svg>`,Sy=`
<svg viewBox="0 0 24 24" fill="none" class="entry-store-svg" aria-hidden="true">
  <path d="M6 8h12l-1.2 12H7.2L6 8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`,PA=`
<svg viewBox="0 0 24 24" class="entry-verified-svg" aria-hidden="true">
  <circle cx="12" cy="12" r="10.5" fill="#fe2c55" stroke="#ff6384" stroke-width="1"/>
  <path d="M7.6 12.4l3 3 5.8-6.2" fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,IA=[{id:"youtube",name:"YouTube VR",cat:"V\xEDdeo \xB7 360\xB0",bg:"#dc2626"},{id:"netflix",name:"Netflix",cat:"Cinema \xB7 TV",bg:"#991b1b"},{id:"discord",name:"Discord",cat:"Social \xB7 Voz",bg:"#4f46e5"},{id:"tiktok",name:"TikTok",cat:"V\xEDdeos Curtos",bg:"#0f172a"},{id:"twitch",name:"Twitch",cat:"Lives \xB7 Jogos",bg:"#7c3aed"},{id:"spotify",name:"Spotify",cat:"M\xFAsica \xB7 \xC1udio",bg:"#059669"}],NA=[{id:"chrome",label:"Chrome N",url:"./icons/nextvr-chrome-n.png"},{id:"purple",label:"Neon N",url:"./icons/nextvr-n.png"},{id:"cyber",label:"Cyber Blue",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><circle cx="40" cy="29" r="13" fill="#fff"/><path d="M16 68c0-13 11-21 24-21s24 8 24 21z" fill="#fff"/></svg>')},{id:"emerald",label:"Emerald VR",url:"data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs><rect width="80" height="80" fill="url(#g)"/><rect x="14" y="26" width="52" height="26" rx="10" fill="#fff"/><circle cx="30" cy="39" r="6" fill="#0f172a"/><circle cx="50" cy="39" r="6" fill="#0f172a"/></svg>')}];function Ci(n){return String(n||"").replace(/[&<>"']/g,e=>e==="&"?"&amp;":e==="<"?"&lt;":e===">"?"&gt;":e==='"'?"&quot;":"&#39;")}var _f={pt:{start:"Iniciar",startVr:"Iniciar VR",settings:"Configura\xE7\xF5es",basicSettings:"Configura\xE7\xF5es b\xE1sicas",handStyle:"Hand tracking style",handDrawn:"M\xE3o desenhada",handInvisible:"Invis\xEDvel",collaborators:"Colaboradores",about:"Sobre",back:"Voltar",store:"Store",storeTitle:"Store NextVR \u2014 Jogos & Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Ativado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"qualidade",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"M\xE9dia (890p)",qLow:"Baixa (390p)",ocularCell:"c\xE2mera grande ocular (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRILHO",handCell:"Hand tracking",fingerTouchOn:"Toque (Sem Pin\xE7a): ON",fingerTouchOff:"Toque (Sem Pin\xE7a): OFF",envTitle:"Ambiente",envAr:"C\xE2mera (AR)",envSunset:"P\xF4r do Sol",envNight:"Noite"},en:{start:"Start",startVr:"Start VR",settings:"Settings",basicSettings:"Basic Settings",handStyle:"Hand tracking style",handDrawn:"Drawn hand",handInvisible:"Invisible",collaborators:"Collaborators",about:"About",back:"Back",store:"Store",storeTitle:"NextVR Store \u2014 Games & Apps",langCell:"LANGUAGE",spatialCell:"SPATIAL APP",on:"Enabled",dock:"Dock",dockSnapOn:"Dock Slot: ON",dockSnapOff:"Dock Slot: OFF",qualityCell:"quality",qAuto:"Auto",qHigh:"High (1080p)",qMed:"Medium (890p)",qLow:"Low (390p)",ocularCell:"ultra-wide camera (0.5x)",volumeCell:"VOLUME",brightnessCell:"BRIGHTNESS",handCell:"Hand tracking",fingerTouchOn:"Finger Touch: ON",fingerTouchOff:"Finger Touch: OFF",envTitle:"Environment",envAr:"Camera (AR)",envSunset:"Sunset",envNight:"Night"},es:{start:"Iniciar",startVr:"Iniciar VR",settings:"Ajustes",basicSettings:"Ajustes b\xE1sicos",handStyle:"Hand tracking style",handDrawn:"Mano dibujada",handInvisible:"Invisible",collaborators:"Colaboradores",about:"Acerca de",back:"Volver",store:"Tienda",storeTitle:"Tienda NextVR \u2014 Juegos y Apps",langCell:"IDIOMA",spatialCell:"SPATIAL APP",on:"Activado",dock:"Dock",dockSnapOn:"Slot Dock: ON",dockSnapOff:"Slot Dock: OFF",qualityCell:"calidad",qAuto:"Auto",qHigh:"Alta (1080p)",qMed:"Media (890p)",qLow:"Baja (390p)",ocularCell:"c\xE1mara gran angular (0.5x)",volumeCell:"VOLUMEN",brightnessCell:"BRILLO",handCell:"Hand tracking",fingerTouchOn:"Toque \xCDndice: ON",fingerTouchOff:"Toque \xCDndice: OFF",envTitle:"Entorno",envAr:"C\xE1mara (AR)",envSunset:"Atardecer",envNight:"Noche"},ja:{start:"\u958B\u59CB",startVr:"VR\u3092\u958B\u59CB",settings:"\u8A2D\u5B9A",basicSettings:"\u57FA\u672C\u8A2D\u5B9A",handStyle:"Hand tracking style",handDrawn:"\u624B\u3092\u8868\u793A",handInvisible:"\u975E\u8868\u793A",collaborators:"\u30B3\u30E9\u30DC\u30EC\u30FC\u30BF\u30FC",about:"\u6982\u8981",back:"\u623B\u308B",store:"\u30B9\u30C8\u30A2",storeTitle:"NextVR \u30B9\u30C8\u30A2 \u2014 \u30B2\u30FC\u30E0\uFF06\u30A2\u30D7\u30EA",langCell:"\u8A00\u8A9E",spatialCell:"SPATIAL APP",on:"\u30AA\u30F3",dock:"\u30C9\u30C3\u30AF",dockSnapOn:"\u30B9\u30ED\u30C3\u30C8: ON",dockSnapOff:"\u30B9\u30ED\u30C3\u30C8: OFF",qualityCell:"\u753B\u8CEA",qAuto:"\u81EA\u52D5",qHigh:"\u9AD8 (1080p)",qMed:"\u4E2D (890p)",qLow:"\u4F4E (390p)",ocularCell:"\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9 (0.5x)",volumeCell:"\u97F3\u91CF",brightnessCell:"\u660E\u308B\u3055",handCell:"Hand tracking",fingerTouchOn:"\u6307\u30BF\u30C3\u30C1: ON",fingerTouchOff:"\u6307\u30BF\u30C3\u30C1: OFF",envTitle:"\u74B0\u5883",envAr:"\u30AB\u30E1\u30E9 (AR)",envSunset:"\u5915\u66AE\u308C",envNight:"\u591C"},ru:{start:"\u041D\u0430\u0447\u0430\u0442\u044C",startVr:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C VR",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",basicSettings:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",handStyle:"Hand tracking style",handDrawn:"\u0420\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0440\u0443\u043A\u0430",handInvisible:"\u041D\u0435\u0432\u0438\u0434\u0438\u043C\u0430\u044F",collaborators:"\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",about:"\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438",back:"\u041D\u0430\u0437\u0430\u0434",store:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D",storeTitle:"\u041C\u0430\u0433\u0430\u0437\u0438\u043D NextVR \u2014 \u0418\u0433\u0440\u044B \u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",langCell:"\u042F\u0417\u042B\u041A",spatialCell:"SPATIAL APP",on:"\u0412\u043A\u043B.",dock:"\u0414\u043E\u043A",dockSnapOn:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: ON",dockSnapOff:"\u0421\u043B\u043E\u0442 \u0434\u043E\u043A\u0430: OFF",qualityCell:"\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",qAuto:"\u0410\u0432\u0442\u043E",qHigh:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (1080p)",qMed:"\u0421\u0440\u0435\u0434\u043D\u0435\u0435 (890p)",qLow:"\u041D\u0438\u0437\u043A\u043E\u0435 (390p)",ocularCell:"\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430 (0.5x)",volumeCell:"\u0413\u0420\u041E\u041C\u041A\u041E\u0421\u0422\u042C",brightnessCell:"\u042F\u0420\u041A\u041E\u0421\u0422\u042C",handCell:"Hand tracking",fingerTouchOn:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: ON",fingerTouchOff:"\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C: OFF",envTitle:"\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435",envAr:"\u041A\u0430\u043C\u0435\u0440\u0430 (AR)",envSunset:"\u0417\u0430\u043A\u0430\u0442",envNight:"\u041D\u043E\u0447\u044C"},de:{start:"Starten",startVr:"VR starten",settings:"Einstellungen",basicSettings:"Grundeinstellungen",handStyle:"Hand tracking style",handDrawn:"Gezeichnete Hand",handInvisible:"Unsichtbar",collaborators:"Mitwirkende",about:"\xDCber",back:"Zur\xFCck",store:"Store",storeTitle:"NextVR Store \u2014 Spiele & Apps",langCell:"SPRACHE",spatialCell:"SPATIAL APP",on:"Aktiviert",dock:"Dock",dockSnapOn:"Dock-Slot: ON",dockSnapOff:"Dock-Slot: OFF",qualityCell:"Qualit\xE4t",qAuto:"Auto",qHigh:"Hoch (1080p)",qMed:"Mittel (890p)",qLow:"Niedrig (390p)",ocularCell:"Ultraweitwinkel (0.5x)",volumeCell:"LAUTST\xC4RKE",brightnessCell:"HELLIGKEIT",handCell:"Hand tracking",fingerTouchOn:"Finger-Touch: ON",fingerTouchOff:"Finger-Touch: OFF",envTitle:"Umgebung",envAr:"Kamera (AR)",envSunset:"Sonnenuntergang",envNight:"Nacht"}},je=n=>(_f[Mh()]||_f.pt)[n]||_f.pt[n]||n;function wf(n){return je(n?"handDrawn":"handInvisible")}function Mf({onStart:n,onLaunchGorilla:e,getStatus:t,fullscreen:i=!1}={}){let s=document.createElement("div");s.className=i?"entry-menu-root entry-menu-root--fullscreen":"entry-menu-root",s.dataset.entryMenu="2.0.0",i&&(s.dataset.entryFullscreen="1");let r="home",o=6,a=0,l=null,c=null,u=["Carregando c\xE2mera AR...","Carregando Dock...","Otimizando Hand tracking...","Calibrando lentes 3D...","Carregando aplicativos espaciais...","Iniciando NextVR..."],d=O=>O<17?u[0]:O<35?u[1]:O<55?u[2]:O<75?u[3]:O<92?u[4]:u[5],h=()=>{l&&(clearInterval(l),l=null)},p=()=>{let O=s.querySelector("[data-entry-countdown]"),F=s.querySelector("[data-entry-load-pct]"),C=s.querySelector("[data-entry-load-bar]"),M=s.querySelector("[data-entry-load-status]"),D=s.querySelector("[data-entry-countdown-sub]");O&&(O.textContent=String(o)),F&&(F.textContent=`${a}%`),C&&(C.style.width=`${a}%`),M&&(M.textContent=d(a)),D&&(D.textContent=`COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${o}s...`)},g=()=>{h(),o=6,a=0,r="loading",b();let O=6e3,F=performance.now();l=setInterval(()=>{let C=Math.max(0,performance.now()-F);if(a=Math.min(100,Math.round(C/O*100)),o=Math.max(1,Math.ceil((O-C)/1e3)),C>=O){a=100,p(),h(),n==null||n();return}p()},60)},y=()=>{let O=t==null?void 0:t();if(O!=null&&O.clockText)return O.clockText;if(O!=null&&O.time&&O.time!=="--:--")return O.time;let F=new Date;return`${String(F.getHours()).padStart(2,"0")}:${String(F.getMinutes()).padStart(2,"0")}`},f=()=>{var F,C;try{let M=(C=(F=window.NativeXR)==null?void 0:F.battery)==null?void 0:C.call(F);if(M&&M!=="null"){let D=typeof M=="string"?JSON.parse(M):M;if(D&&typeof D.level=="number"){let V=Math.round(Math.max(0,Math.min(1,D.level))*100);return{percent:V,charging:!!D.charging,text:`${V}%${D.charging?" \u26A1":""}`}}}}catch{}let O=t==null?void 0:t();if(O&&typeof O.batteryLevel=="number"){let M=Math.round(Math.max(0,Math.min(1,O.batteryLevel))*100);return{percent:M,charging:!!O.charging,text:`${M}%${O.charging?" \u26A1":""}`}}return{percent:100,charging:!1,text:"100%"}},m=()=>{var O,F;E.handsOn=1,E.handDraw=E.handDraw?0:1,Ye(E),(F=(O=window.NativeXR)==null?void 0:O.handVisuals)==null||F.call(O,!!E.handDraw),Ce("handDraw",!!E.handDraw)},x=()=>{let O=wf(E.handDraw);return`
      <nav class="entry-cards-row" role="navigation" aria-label="Menu principal NextVR">
        <button type="button" class="entry-card entry-card--primary" data-entry-act="start">
          <span class="entry-card-body">
            <span class="entry-card-title">${je("start")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="settings"?"entry-card--active":""}" data-entry-act="settings">
          <span class="entry-card-body">
            <span class="entry-card-title">${je("settings")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${E.handDraw?"entry-card--hand-drawn":"entry-card--hand-invisible"}" data-entry-act="hand-style" data-hand-draw="${E.handDraw?"1":"0"}">
          <span class="entry-card-body">
            <span class="entry-card-title">${je("handStyle")}</span>
            <span class="entry-card-state" data-hand-style-label>${O}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="collaborators"?"entry-card--active":""}" data-entry-act="collaborators">
          <span class="entry-card-body">
            <span class="entry-card-title">${je("collaborators")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>

        <button type="button" class="entry-card ${r==="about"?"entry-card--active":""}" data-entry-act="about">
          <span class="entry-card-body">
            <span class="entry-card-title">${je("about")}</span>
          </span>
          <span class="entry-card-stripes" aria-hidden="true"><i></i><i></i></span>
        </button>
      </nav>`},v=()=>`
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
              ${Sy}<span>${je("store")}</span>
            </button>
          </div>
        </div>
      </div>`,S=()=>{let O=!!E.gorillaInstalled,C=c!==null?`<button type="button" class="entry-btn entry-btn--primary" disabled>Baixando... ${c}%</button>`:O?`<span class="entry-store-badge-ok" data-entry-gorilla-installed>\u2713 Na Biblioteca</span>
         <button type="button" class="entry-btn entry-btn--primary" data-entry-play-gorilla>Jogar Gorilla Tag</button>`:'<button type="button" class="entry-btn entry-btn--primary" data-entry-install-gorilla>BAIXAR</button>';return`
      <div class="entry-subpanel entry-subpanel--store" data-entry-panel="store">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${je("storeTitle")}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${je("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${je("startVr")}</button>
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

          <div class="entry-store-section-label">APPS DISPON\xCDVEIS NA STORE &amp; BIBLIOTECA</div>
          <div class="entry-store-grid">
            ${IA.map(M=>`
              <div class="entry-store-card" data-entry-store-app="${M.id}">
                <div class="entry-store-card-dot" style="background:${M.bg}">${M.name.slice(0,2).toUpperCase()}</div>
                <div class="entry-store-card-meta">
                  <div class="entry-store-card-name">${Ci(M.name)}</div>
                  <div class="entry-store-card-cat">${Ci(M.cat)}</div>
                </div>
                <span class="entry-store-card-pill">Incluso</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>`},T=()=>{let O=[{id:"passthrough",label:je("envAr")},{id:"sunset",label:je("envSunset")},{id:"night",label:je("envNight")}],F=[{id:"auto",label:je("qAuto")},{id:"high",label:je("qHigh")},{id:"medium",label:je("qMed")},{id:"low",label:je("qLow")}],C=E.entryEnvChosen&&E.env&&E.env!=="passthrough"?E.env:"passthrough",M=E.quality==="med"?"medium":E.quality||"auto",D=!!E.wideCamera,V=!!E.spatialLauncher,W=E.dockSnapSlot!==0,G=E.lang||"pt",Z=Number.isFinite(E.mediaVolume)?E.mediaVolume:70,J=Number.isFinite(E.brightness)?E.brightness:75;return`
      <div class="entry-subpanel entry-subpanel--settings" data-entry-panel="settings">
        <div class="entry-subpanel-head">
          <h2 class="entry-subpanel-title">${je("basicSettings")}</h2>
          <div class="entry-subpanel-actions">
            <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${je("back")}</button>
            <button type="button" class="entry-btn entry-btn--primary" data-entry-act="start">${je("startVr")}</button>
          </div>
        </div>
        <div class="entry-bento-grid">
          <div class="entry-bento-cell entry-bento-cell--idioma">
            <div class="entry-bento-title">${je("langCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${G==="pt"?"on":""}" data-entry-lang="pt">PT</button>
              <button type="button" class="entry-seg-btn ${G==="en"?"on":""}" data-entry-lang="en">EN</button>
              <button type="button" class="entry-seg-btn ${G==="es"?"on":""}" data-entry-lang="es">ES</button>
              <button type="button" class="entry-seg-btn ${G==="ja"?"on":""}" data-entry-lang="ja">JA</button>
              <button type="button" class="entry-seg-btn ${G==="ru"?"on":""}" data-entry-lang="ru">RU</button>
              <button type="button" class="entry-seg-btn ${G==="de"?"on":""}" data-entry-lang="de">DE</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--spatial">
            <div class="entry-bento-title">${je("spatialCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${V?"on":""}" data-entry-spatial="1">${je("on")}</button>
              <button type="button" class="entry-seg-btn ${V?"":"on"}" data-entry-spatial="0">${je("dock")}</button>
              <button type="button" class="entry-seg-btn ${W?"on":""}" data-entry-dock-snap="${W?"1":"0"}" title="Espa\xE7o pr\xE9-definido ao mover janelas na Dock normal">${je(W?"dockSnapOn":"dockSnapOff")}</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--qualidade">
            <div class="entry-bento-title">${je("qualityCell")}</div>
            <div class="entry-seg-row entry-seg-row--compact">
              ${F.map(ee=>`<button type="button" class="entry-seg-btn ${M===ee.id?"on":""}" data-entry-quality="${ee.id}">${ee.label}</button>`).join("")}
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--ocular">
            <div class="entry-bento-title">${je("ocularCell")} \xB7 3DoF / 6DoF</div>
            <div class="entry-seg-row entry-seg-row--compact">
              <button type="button" class="entry-seg-btn ${D?"on":""}" data-entry-wide-cam="1">0.5x</button>
              <button type="button" class="entry-seg-btn ${D?"":"on"}" data-entry-wide-cam="0">1.0x</button>
              <button type="button" class="entry-seg-btn ${E.sixdof===0?"on":""}" data-entry-dof="3dof" title="Modo 3DoF (rota\xE7\xE3o de cabe\xE7a)">3DoF</button>
              <button type="button" class="entry-seg-btn ${E.sixdof!==0?"on":""}" data-entry-dof="6dof" title="Modo 6DoF Falso (andar no espa\xE7o)">6DoF</button>
            </div>
          </div>

          <div class="entry-bento-cell entry-bento-cell--volume">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${je("volumeCell")}</span>
              <span class="entry-bento-val" data-vol-val>${Z}%</span>
            </div>
            <input type="range" min="0" max="100" value="${Z}" class="entry-slider" data-entry-volume />
          </div>

          <div class="entry-bento-cell entry-bento-cell--brilho">
            <div class="entry-bento-slider-head">
              <span class="entry-bento-big">${je("brightnessCell")}</span>
              <span class="entry-bento-val" data-bri-val>${J}%</span>
            </div>
            <input type="range" min="10" max="100" value="${J}" class="entry-slider" data-entry-brightness />
          </div>

          <div class="entry-bento-cell entry-bento-cell--hand">
            <div class="entry-bento-title">${je("handCell")}</div>
            <div class="entry-hand-col">
              <button type="button" class="entry-seg-btn ${E.handDraw?"on":""}" data-entry-hand-draw="1">${je("handDrawn")}</button>
              <button type="button" class="entry-seg-btn ${E.handDraw?"":"on"}" data-entry-hand-draw="0">${je("handInvisible")}</button>
              <button type="button" class="entry-seg-btn ${E.fingerTouch!==0?"on":""}" data-entry-finger-touch="${E.fingerTouch!==0?"1":"0"}" title="Toque com o indicador indo \xE0 frente sem precisar pin\xE7ar">${E.fingerTouch!==0?je("fingerTouchOn"):je("fingerTouchOff")}</button>
              <button type="button" class="entry-seg-btn ${E.showFps?"on":""}" data-entry-fps="1">FPS: ${E.showFps?"ON":"OFF"}</button>
              <div class="entry-hand-env-title">${je("envTitle")}</div>
              ${O.map(ee=>`<button type="button" class="entry-seg-btn ${C===ee.id?"on":""}" data-entry-env="${ee.id}">${ee.label}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>`},P=()=>`
    <div class="entry-subpanel" data-entry-panel="collaborators">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title">${je("collaborators")}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">${je("back")}</button>
        </div>
      </div>
      <div class="entry-collab-list" role="list">
        ${_y.map(O=>{let F=wy[O]||"",C=O==="colaboradores do nextVR";return`
          <div class="entry-collab-item ${C?"entry-collab-item--blue":""}" role="listitem" data-collaborator-name="${O}">
            <span class="entry-collab-name-row">
              <span class="entry-collab-name ${C?"entry-collab-name--blue":""}" ${C?'data-collab-blue="1"':""}>${O}</span>
              <span class="entry-collab-verified" data-collab-verified="${O}" title="Verificado">${PA}</span>
              ${F?`<span class="entry-collab-bio" data-collab-bio="${O}">${Ci(F)}</span>`:""}
            </span>
          </div>`}).join("")}
      </div>
    </div>`,L=()=>`
    <div class="entry-subpanel entry-subpanel--about" data-entry-panel="about">
      <div class="entry-subpanel-head">
        <h2 class="entry-subpanel-title" data-about-title>${bf}</h2>
        <div class="entry-subpanel-actions">
          <button type="button" class="entry-btn entry-btn--ghost" data-entry-act="back">Voltar</button>
        </div>
      </div>
      <div class="entry-about-body" data-about-body>
        ${bu.map((O,F)=>`
          <p class="entry-about-p ${F===bu.length-1?"entry-about-p--closing":""}">${O}</p>
        `).join("")}
      </div>
    </div>`,H=()=>{let O=E.profileName||"",F=E.profileAvatar||"";return`
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
              ${F?`<img src="${Ci(F)}" alt="Foto de perfil" class="entry-login-avatar-img" data-profile-avatar-img />`:My}
            </div>
            <button type="button" class="entry-btn entry-btn--primary entry-login-upload-btn" data-profile-upload>
              Escolher Foto da Galeria
            </button>
            <input type="file" accept="image/*" data-profile-file hidden />
          </div>
          <div class="entry-login-right">
            <label class="entry-login-label">
              <span>SEU NOME / NICK</span>
              <input type="text" class="entry-login-input" data-profile-name-input maxlength="24" placeholder="Digite seu nome..." value="${Ci(O)}" />
            </label>
            <div class="entry-login-presets-wrap">
              <span class="entry-login-presets-title">OU ESCOLHA UM AVATAR</span>
              <div class="entry-login-presets">
                ${NA.map(M=>`
                  <button type="button" class="entry-login-preset ${F===M.url?"on":""}" data-profile-preset="${Ci(M.url)}" title="${Ci(M.label)}">
                    <img src="${Ci(M.url)}" alt="${Ci(M.label)}" />
                  </button>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>`},_=O=>{let F=d(a);return`
      <div class="entry-hud-screen" data-entry-panel="loading" role="status" aria-live="polite">
        <div class="entry-subtitle">${xf}</div>

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
              <b data-entry-battery-top>${O.text}</b>
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
                <span class="entry-hud-pct" data-entry-load-pct>${a}%</span>
                <span class="entry-hud-sec">(<b data-entry-countdown>${o}</b>s)</span>
              </div>
              <div class="entry-hud-status" data-entry-load-status>${F}</div>
              <div class="entry-hud-hint" data-entry-countdown-sub>COLOQUE O CELULAR NO VR BOX \xB7 Iniciando em ${o}s...</div>
            </div>
          </div>
        </div>

        <footer class="entry-hud-bottom">
          <div class="entry-hud-bar-track">
            <div class="entry-hud-bar-fill" data-entry-load-bar style="width:${a}%"></div>
          </div>
        </footer>
      </div>`},b=()=>{let O=f();if(r==="loading"){s.innerHTML=_(O);let Q=s.querySelector("[data-entry-cancel-countdown]");Q&&(Q.onclick=()=>{h(),r="home",b()});return}let F=r==="settings"?T():r==="collaborators"?P():r==="about"?L():r==="profile"?H():r==="store"?S():v(),C=E.profileName?Ci(E.profileName):"NextVR (Login)",M=E.profileAvatar?`<img src="${Ci(E.profileAvatar)}" alt="" class="entry-profile-q-img" />`:My;s.innerHTML=`
      <div class="entry-left-pattern" aria-hidden="true">
        <div class="entry-left-slashes"></div>
      </div>

      <header class="entry-top-header">
        <div class="entry-top-bars" aria-hidden="true"></div>
        <h1 class="entry-main-title">MAIN MENU</h1>
        <div class="entry-subtitle">${xf}</div>
        <div class="entry-top-right-cluster">
          <button type="button" class="entry-top-store-btn ${r==="store"?"on":""}" data-entry-act="store" title="Abrir Store NextVR">
            ${Sy}
            <span>${je("store")}</span>
          </button>
          <div class="entry-top-battery" data-entry-battery-pill title="Bateria sincronizada com o celular">
            <span class="entry-top-bat-bar"><i data-entry-battery-fill style="width:${O.percent}%"></i></span>
            <b data-entry-battery-top>${O.text}</b>
          </div>
        </div>
        <button type="button" class="entry-top-reticle" data-entry-act="gear" title="Configura\xE7\xF5es">${LA}</button>
      </header>

      <div class="entry-rail-backdrop" aria-hidden="true">
        <div class="entry-rail-lines"></div>
      </div>

      <div class="entry-layout">
        <aside class="entry-left-column">
          ${x()}

          <div class="entry-profile-box" data-entry-act="profile" role="button" tabindex="0" title="Clique para editar Nome e Foto de Perfil">
            <button type="button" class="entry-profile-q" data-entry-act="profile" title="Foto de Perfil / Login">${M}</button>
            <div class="entry-profile-info">
              <div class="entry-profile-name"><span data-profile-display-name>${C}</span> <small class="entry-profile-edit-tag">PERFIL</small></div>
              <div class="entry-profile-meta">Hand: <span data-profile-hand>${wf(E.handDraw)}</span></div>
              <div class="entry-profile-meta">Hora: <span data-entry-clock>${y()}</span> \xB7 Bat: <span data-entry-battery>${O.text}</span></div>
            </div>
            <div class="entry-profile-ver">${by}</div>
          </div>
        </aside>

        <main class="entry-right-stage">
          ${F}
          ${r==="home"?`
            <button type="button" class="entry-corner-back" data-entry-act="start" title="Iniciar">
              ${CA}
            </button>
          `:""}
        </main>
      </div>
    `,s.querySelectorAll('[data-entry-act="start"]').forEach(Q=>{Q.onclick=()=>{i?g():n==null||n()}});let D=s.querySelector("[data-entry-cancel-countdown]");D&&(D.onclick=()=>{h(),r="home",b()}),s.querySelectorAll('[data-entry-act="settings"], [data-entry-act="gear"]').forEach(Q=>{Q.onclick=()=>{h(),r=r==="settings"?"home":"settings",b()}}),s.querySelectorAll('[data-entry-act="store"]').forEach(Q=>{Q.onclick=oe=>{oe.stopPropagation(),h(),r=r==="store"?"home":"store",b()}}),s.querySelectorAll('[data-entry-act="hand-style"]').forEach(Q=>{Q.onclick=()=>{m(),b()}}),s.querySelectorAll('[data-entry-act="collaborators"]').forEach(Q=>{Q.onclick=()=>{h(),r=r==="collaborators"?"home":"collaborators",b()}}),s.querySelectorAll('[data-entry-act="about"]').forEach(Q=>{Q.onclick=()=>{h(),r=r==="about"?"home":"about",b()}}),s.querySelectorAll('[data-entry-act="profile"]').forEach(Q=>{Q.onclick=oe=>{oe.stopPropagation(),h(),r=r==="profile"?"home":"profile",b()}}),s.querySelectorAll('[data-entry-act="back"]').forEach(Q=>{Q.onclick=()=>{h(),r="home",b()}});let V=s.querySelector("[data-entry-install-gorilla]");V&&(V.onclick=()=>{if(E.gorillaInstalled=1,Ye(E),Ce("gorilla-installed",!0),window.__gorillaFastTest){c=null,b();return}c=45,b(),setTimeout(()=>{c=90,r==="store"&&b()},110),setTimeout(()=>{c=null,r==="store"&&b()},230)});let W=s.querySelector("[data-entry-play-gorilla]");W&&(W.onclick=()=>{E.gorillaInstalled=1,Ye(E),Ce("gorilla-installed",!0),typeof e=="function"?e():n==null||n()});let G=s.querySelector("[data-profile-name-input]");G&&(G.oninput=()=>{E.profileName=G.value.trim(),Ye(E);let Q=s.querySelector("[data-profile-display-name]");Q&&(Q.textContent=E.profileName||"NextVR (Login)")});let Z=s.querySelector("[data-profile-save]");Z&&(Z.onclick=()=>{G&&(E.profileName=G.value.trim()),Ye(E),Ce("profile-updated",{name:E.profileName,avatar:E.profileAvatar}),r="home",b()}),s.querySelectorAll("[data-profile-preset]").forEach(Q=>{Q.onclick=()=>{G&&(E.profileName=G.value.trim()),E.profileAvatar=Q.dataset.profilePreset,Ye(E),Ce("profile-updated",{name:E.profileName,avatar:E.profileAvatar}),b()}});let J=s.querySelector("[data-profile-upload]"),ee=s.querySelector("[data-profile-avatar-preview]"),B=s.querySelector("[data-profile-file]"),K=()=>{var Q;G&&(E.profileName=G.value.trim(),Ye(E)),typeof((Q=window.NativeXR)==null?void 0:Q.pickProfilePhoto)=="function"?window.NativeXR.pickProfilePhoto():B&&B.click()};J&&(J.onclick=K),ee&&(ee.onclick=K),B&&(B.onchange=()=>{var ge;let Q=(ge=B.files)==null?void 0:ge[0];if(!Q)return;let oe=new FileReader;oe.onload=()=>{let xe=new Image;xe.onload=()=>{let Qe=document.createElement("canvas");Qe.width=160,Qe.height=160;let q=Qe.getContext("2d"),Kt=Math.min(xe.width,xe.height),Le=(xe.width-Kt)/2,Be=(xe.height-Kt)/2;q.drawImage(xe,Le,Be,Kt,Kt,0,0,160,160),G&&(E.profileName=G.value.trim()),E.profileAvatar=Qe.toDataURL("image/jpeg",.86),Ye(E),Ce("profile-updated",{name:E.profileName,avatar:E.profileAvatar}),b()},xe.src=String(oe.result)},oe.readAsDataURL(Q)}),s.querySelectorAll("[data-entry-hand-draw]").forEach(Q=>{Q.onclick=()=>{var oe,ge;E.handsOn=1,E.handDraw=Q.dataset.entryHandDraw==="1"?1:0,Ye(E),(ge=(oe=window.NativeXR)==null?void 0:oe.handVisuals)==null||ge.call(oe,!!E.handDraw),Ce("handDraw",!!E.handDraw),b()}}),s.querySelectorAll("[data-entry-finger-touch]").forEach(Q=>{Q.onclick=()=>{var oe,ge;E.fingerTouch=E.fingerTouch===0?1:0,Ye(E),(ge=(oe=window.NativeXR)==null?void 0:oe.setFingerTouch)==null||ge.call(oe,!!E.fingerTouch),Ce("fingerTouch",!!E.fingerTouch),b()}}),s.querySelectorAll("[data-entry-env]").forEach(Q=>{Q.onclick=()=>{let oe=Q.dataset.entryEnv;E.entryEnvChosen=1,oe==="passthrough"?(E.env="passthrough",Ye(E),gi(!0)):zi(oe),b()}}),s.querySelectorAll("[data-entry-quality]").forEach(Q=>{Q.onclick=()=>{var oe,ge;E.quality=Q.dataset.entryQuality==="med"?"medium":Q.dataset.entryQuality,Ye(E),Ce("quality",E.quality),(ge=(oe=window.NativeXR)==null?void 0:oe.setQuality)==null||ge.call(oe,E.quality),b()}}),s.querySelectorAll("[data-entry-dock-snap]").forEach(Q=>{Q.onclick=()=>{E.dockSnapSlot=E.dockSnapSlot===0?1:0,Ye(E),Ce("dockSnapSlot",!!E.dockSnapSlot),b()}}),s.querySelectorAll("[data-entry-wide-cam]").forEach(Q=>{Q.onclick=()=>{var oe,ge;E.wideCamera=Q.dataset.entryWideCam==="1"?1:0,Ye(E),(ge=(oe=window.NativeXR)==null?void 0:oe.wideCamera)==null||ge.call(oe,!!E.wideCamera),Ce("wideCamera",!!E.wideCamera),b()}}),s.querySelectorAll("[data-entry-dof]").forEach(Q=>{Q.onclick=()=>{var ge,xe;let oe=Q.dataset.entryDof==="6dof";E.sixdof=oe?1:0,Ye(E),oe||Ht.reset(),(xe=(ge=window.NativeXR)==null?void 0:ge.setSixDofEnabled)==null||xe.call(ge,oe),Ce("sixdof",oe),b()}}),s.querySelectorAll("[data-entry-spatial]").forEach(Q=>{Q.onclick=()=>{E.spatialLauncher=Q.dataset.entrySpatial==="1"?1:0,E.spatialLauncher&&(E.env="passthrough",gi(!0)),Ye(E),Ce("spatialLauncher",!!E.spatialLauncher),b()}}),s.querySelectorAll("[data-entry-lang]").forEach(Q=>{Q.onclick=()=>{Tr(Q.dataset.entryLang),b()}}),s.querySelectorAll("[data-entry-fps]").forEach(Q=>{Q.onclick=()=>{E.showFps=E.showFps?0:1,Ye(E),Ce("fps-toggle",E.showFps),b()}});let le=s.querySelector("[data-entry-volume]");le&&(le.oninput=()=>{var ge,xe;let Q=Number(le.value);E.mediaVolume=Q,Ye(E),de&&((xe=(ge=window.NativeXR)==null?void 0:ge.setMediaVolumePercent)==null||xe.call(ge,Q));let oe=s.querySelector("[data-vol-val]");oe&&(oe.textContent=`${Q}%`)});let Ae=s.querySelector("[data-entry-brightness]");Ae&&(Ae.oninput=()=>{var ge,xe;let Q=Number(Ae.value);E.brightness=Q,Ye(E),de&&((xe=(ge=window.NativeXR)==null?void 0:ge.setBrightnessPercent)==null||xe.call(ge,Q));let oe=s.querySelector("[data-bri-val]");oe&&(oe.textContent=`${Q}%`)})};return b(),s.resetToHome=()=>{h(),r="home",b()},We("handDraw",()=>{let O=wf(E.handDraw),F=s.querySelector("[data-hand-style-label]"),C=s.querySelector("[data-profile-hand]"),M=s.querySelector('[data-entry-act="hand-style"]');F&&(F.textContent=O),C&&(C.textContent=O),M&&(M.dataset.handDraw=E.handDraw?"1":"0",M.classList.toggle("entry-card--hand-drawn",!!E.handDraw),M.classList.toggle("entry-card--hand-invisible",!E.handDraw))}),We("device-status",()=>{let O=s.querySelector("[data-entry-clock]");O&&(O.textContent=y());let F=f(),C=s.querySelector("[data-entry-battery]"),M=s.querySelector("[data-entry-battery-top]"),D=s.querySelector("[data-entry-battery-fill]");C&&(C.textContent=F.text),M&&(M.textContent=F.text),D&&(D.style.width=`${F.percent}%`)}),window.nextvrProfilePhoto=O=>{O&&(E.profileAvatar=String(O),Ye(E),Ce("profile-updated",{name:E.profileName,avatar:E.profileAvatar}),b())},s}function Sf(n,e){if(e===Sg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Eo||e===Ac){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Eo)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var _u=class extends fs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Wf(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Xs.extractUrlBase(e);o=Xs.resolveURL(c,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cy){try{o[rt.KHR_BINARY_GLTF]=new qf(e)}catch(d){s&&s(d);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Jf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case rt.KHR_MATERIALS_UNLIT:o[d]=new Cf;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[d]=new Xf(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[d]=new $f;break;case rt.KHR_MESH_QUANTIZATION:o[d]=new Yf;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function DA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Rf=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ea(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new wc(u),c.distance=d;break;case"spot":c=new _c(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ir(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Cf=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,i){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Pf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Nf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Df=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},kf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}},Of=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Uf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Hf=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vf=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Gf=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,h,s.mode,s.filter),p})})}else return null}},Wf=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==_i.TRIANGLES&&c.mode!==_i.TRIANGLE_STRIP&&c.mode!==_i.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(let g of d){let y=new we,f=new N,m=new st,x=new N(1,1,1),v=new fc(g.geometry,g.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,y.compose(f,m,x));for(let S in l)if(S==="_COLOR_0"){let T=l[S];v.instanceColor=new Sr(T.array,T.itemSize,T.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Dt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Cy="glTF",al=12,Ay={JSON:1313821514,BIN:5130562},qf=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,al),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-al,r=new DataView(e,al),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ay.JSON){let c=new Uint8Array(e,al+o,a);this.content=i.decode(c)}else if(l===Ay.BIN){let c=al+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let d=Zf[u]||u.toLowerCase();a[d]=o[u]}for(let u in e.attributes){let d=Zf[u]||u.toLowerCase();if(o[u]!==void 0){let h=i.accessors[e.attributes[u]],p=Xa[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let y=p.attributes[g],f=l[g];f!==void 0&&(y.normalized=f)}d(p)},a,c,rn,h)})})}},$f=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yf=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},wu=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(i-t)/u,h=d*d,p=h*d,g=e*c,y=g-c,f=-2*p+3*h,m=p-h,x=1-f,v=m-h+d;for(let S=0;S!==a;S++){let T=o[y+S+a],P=o[y+S+l]*u,L=o[g+S+a],H=o[g+S]*u;r[S]=x*T+v*P+f*L+m*H}return r}},kA=new st,jf=class extends wu{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return kA.fromArray(r).normalize().toArray(r),r}},_i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ey={9728:sn,9729:Qt,9984:Zl,9985:lh,9986:ao,9987:zs},Ty={33071:ei,33648:ho,10497:br},Af={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},OA={CUBICSPLINE:void 0,LINEAR:_r,STEP:ya},Ef={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ma({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),n.DefaultMaterial}function Ur(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FA(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(i){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function BA(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zA(n){let e,t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tf(t.attributes):e=n.indices+":"+Tf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Tf(n.targets[i]);return e}function Tf(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Kf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var VA=new we,Jf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Sa(this.options.manager):this.textureLoader=new Mc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Ur(r,a,s),ir(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Xs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Af[s.type],a=Xa[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Pt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Af[s.type],c=Xa[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,f;if(p&&p!==d){let m=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(x);v||(y=new c(a,m*p,s.count*p/u),v=new yo(y,p/u),t.cache.add(x,v)),f=new vo(v,l,h%p/u,g)}else a===null?y=new c(s.count*l):y=new c(a,h,s.count*l),f=new Pt(y,l,g);if(s.sparse!==void 0){let m=Af.SCALAR,x=Xa[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,T=new x(o[1],v,s.sparse.count*m),P=new c(o[2],S,s.sparse.count*l);a!==null&&(f=new Pt(f.array.slice(),f.itemSize,f.normalized));for(let L=0,H=T.length;L<H;L++){let _=T[L];if(f.setX(_,P[L*l]),l>=2&&f.setY(_,P[L*l+1]),l>=3&&f.setZ(_,P[L*l+2]),l>=4&&f.setW(_,P[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ey[h.magFilter]||Qt,u.minFilter=Ey[h.minFilter]||zs,u.wrapS=Ty[h.wrapS]||br,u.wrapT=Ty[h.wrapT]||br,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){let f=new gn(y);f.needsUpdate=!0,h(f)}),t.load(Xs.resolveURL(d,r.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||HA(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new _o,Wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new bo,Wn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ma}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let d=s[rt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],rn),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Bt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=kn);let u=r.alphaMode||Ef.OPAQUE;if(u===Ef.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ef.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==en&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){let d=r.emissiveFactor;a.emissive=new Ie().setRGB(d[0],d[1],d[2],rn)}return r.emissiveTexture!==void 0&&o!==en&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(c).then(function(){let d=new o(a);return r.name&&(d.name=r.name),ir(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ur(s,d,r),d})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ry(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=zA(c),d=s[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Ry(new qn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?UA(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){let y=u[p],f=o[p],m,x=c[p];if(f.mode===_i.TRIANGLES||f.mode===_i.TRIANGLE_STRIP||f.mode===_i.TRIANGLE_FAN||f.mode===void 0)m=r.isSkinnedMesh===!0?new dc(y,x):new St(y,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===_i.TRIANGLE_STRIP?m.geometry=Sf(m.geometry,Ac):f.mode===_i.TRIANGLE_FAN&&(m.geometry=Sf(m.geometry,Eo));else if(f.mode===_i.LINES)m=new pc(y,x);else if(f.mode===_i.LINE_STRIP)m=new wa(y,x);else if(f.mode===_i.LINE_LOOP)m=new mc(y,x);else if(f.mode===_i.POINTS)m=new gc(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&BA(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ir(m,r),f.extensions&&Ur(s,m,f),t.assignFinalMaterial(m),d.push(m)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Ur(s,d[0],r),d[0];let h=new Mn;r.extensions&&Ur(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new zt(To.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ba(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let d=o[c];if(d){a.push(d);let h=new we;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new hc(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let p=s.channels[d],g=s.samplers[p.sampler],y=p.target,f=y.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],p=d[1],g=d[2],y=d[3],f=d[4],m=[];for(let x=0,v=h.length;x<v;x++){let S=h[x],T=p[x],P=g[x],L=y[x],H=f[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let _=i._createAnimationTracks(S,T,P,L,H);if(_)for(let b=0;b<_.length;b++)m.push(_[b])}return new xc(r,void 0,m)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,VA)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new xo:c.length>1?u=new Mn:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),ir(u,r),r.extensions&&Ur(i,u,r),r.matrix!==void 0){let d=new we;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Mn;i.name&&(r.name=s.createUniqueName(i.name)),ir(r,i),i.extensions&&Ur(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[h,p]of s.associations)(h instanceof Wn||h instanceof gn)&&d.set(h,p);return u.traverse(h=>{let p=s.associations.get(h);p!=null&&d.set(h,p)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];nr[r.path]===nr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(nr[r.path]){case nr.weights:c=ds;break;case nr.rotation:c=Ui;break;case nr.position:case nr.scale:c=hs;break;default:switch(i.itemSize){case 1:c=ds;break;case 2:case 3:default:c=hs;break}break}let u=s.interpolation!==void 0?OA[s.interpolation]:_r,d=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){let g=new c(l[h]+"."+nr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Kf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ui?jf:wu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function GA(n,e,t){let i=e.attributes,s=new fi;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){let u=Kf(Xa[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,l=new N;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let y=Kf(Xa[h.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new ti;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Ry(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Zf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return pt.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),ir(n,e),GA(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FA(n,e.targets,t):n})}var ji=Object.freeze({model:"Google Cardboard 2015",k1:.22,k2:.24,ipd:.064,fov:80}),zr=[0,2,7],tp=.55,Mu=.12,Ly=10.5,WA=1.28,$a=1,Eu=!1,dl=!1,ht=null,oi=null,Ts=null,wi=null,Pi=null,mn=null,ln=null,hl=null,fl=null,Yi=null,Py=1,Su=!1,ol=null,Au=0,Tu=0,zy=0,np=[],kt=()=>new N,Hn=kt(),ap=new N(zr[0],.9,zr[2]),Ru=[],ar=[null,null],ll=[null,null],pl=[0,0],cl=[kt(),kt()],qA=[kt(),kt()],Li=[null,null],Hr=[!1,!1],Qf=[kt(),kt()],sr=null,Iy=[0,0],XA=0,lt={cs:1,T:null,n:0,mn:[0,0,0],d:[1,1,1],st:null,id:null,seen:null,stamp:0},Et=[0,0,0],Fe={x:0,y:0,z:0,d:0,nx:0,ny:1,nz:0,fx:0,fy:1,fz:0};function $A(n){let e=n.length/9|0;lt.T=n,lt.n=e;let t=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let c=0;c<n.length;c+=3)for(let u=0;u<3;u++){let d=n[c+u];d<t[u]&&(t[u]=d),d>i[u]&&(i[u]=d)}lt.mn=t,lt.d=[0,1,2].map(c=>Math.max(1,Math.ceil((i[c]-t[c])/lt.cs)+1));let s=lt.d[0]*lt.d[1]*lt.d[2],r=new Int32Array(s+1),o=lt.cs,a=c=>{let u=[1e9,1e9,1e9,-1e9,-1e9,-1e9];for(let d=0;d<3;d++)for(let h=0;h<3;h++){let p=n[c*9+d*3+h];p<u[h]&&(u[h]=p),p>u[h+3]&&(u[h+3]=p)}return[0,1,2].map(d=>[Math.floor((u[d]-t[d])/o),Math.floor((u[d+3]-t[d])/o)])},l=null;for(let c=0;c<2;c++){if(c===1){for(let u=0;u<s;u++)r[u+1]+=r[u];lt.st=r.slice(),lt.id=new Int32Array(r[s]),l=r.slice()}for(let u=0;u<e;u++){let d=a(u);for(let h=d[2][0];h<=d[2][1];h++)for(let p=d[1][0];p<=d[1][1];p++)for(let g=d[0][0];g<=d[0][1];g++){let y=(h*lt.d[1]+p)*lt.d[0]+g;c===0?r[y+1]++:lt.id[l[y]++]=u}}}lt.seen=new Int32Array(e)}function YA(n,e,t,i,s,r,o,a,l,c,u,d){let h=o-i,p=a-s,g=l-r,y=c-i,f=u-s,m=d-r,x=n-i,v=e-s,S=t-r,T=h*x+p*v+g*S,P=y*x+f*v+m*S;if(T<=0&&P<=0){Et[0]=i,Et[1]=s,Et[2]=r;return}let L=n-o,H=e-a,_=t-l,b=h*L+p*H+g*_,I=y*L+f*H+m*_;if(b>=0&&I<=b){Et[0]=o,Et[1]=a,Et[2]=l;return}let O=T*I-b*P;if(O<=0&&T>=0&&b<=0){let B=T/(T-b);Et[0]=i+B*h,Et[1]=s+B*p,Et[2]=r+B*g;return}let F=n-c,C=e-u,M=t-d,D=h*F+p*C+g*M,V=y*F+f*C+m*M;if(V>=0&&D<=V){Et[0]=c,Et[1]=u,Et[2]=d;return}let W=D*P-T*V;if(W<=0&&P>=0&&V<=0){let B=P/(P-V);Et[0]=i+B*y,Et[1]=s+B*f,Et[2]=r+B*m;return}let G=b*V-D*I;if(G<=0&&I-b>=0&&D-V>=0){let B=(I-b)/(I-b+(D-V));Et[0]=o+B*(c-o),Et[1]=a+B*(u-a),Et[2]=l+B*(d-l);return}let Z=1/(G+W+O),J=W*Z,ee=O*Z;Et[0]=i+h*J+y*ee,Et[1]=s+p*J+f*ee,Et[2]=r+g*J+m*ee}function op(n,e,t,i){if(!lt.T)return!1;let s=lt.T,r=lt.cs,o=lt.mn,a=lt.d,l=i*i,c=!1,u=++lt.stamp,d=[0,1,2].map(g=>Math.max(0,Math.floor(([n,e,t][g]-i-o[g])/r))),h=[0,1,2].map(g=>Math.min(a[g]-1,Math.floor(([n,e,t][g]+i-o[g])/r)));for(let g=d[2];g<=h[2];g++)for(let y=d[1];y<=h[1];y++)for(let f=d[0];f<=h[0];f++){let m=(g*a[1]+y)*a[0]+f;for(let x=lt.st[m],v=lt.st[m+1];x<v;x++){let S=lt.id[x];if(lt.seen[S]===u)continue;lt.seen[S]=u;let T=S*9;YA(n,e,t,s[T],s[T+1],s[T+2],s[T+3],s[T+4],s[T+5],s[T+6],s[T+7],s[T+8]);let P=n-Et[0],L=e-Et[1],H=t-Et[2],_=P*P+L*L+H*H;if(_<l){l=_,c=!0,Fe.x=Et[0],Fe.y=Et[1],Fe.z=Et[2];let b=s[T+3]-s[T],I=s[T+4]-s[T+1],O=s[T+5]-s[T+2],F=s[T+6]-s[T],C=s[T+7]-s[T+1],M=s[T+8]-s[T+2];Fe.fx=I*M-O*C,Fe.fy=O*F-b*M,Fe.fz=b*C-I*F;let D=Math.hypot(Fe.fx,Fe.fy,Fe.fz)||1;Fe.fx/=D,Fe.fy/=D,Fe.fz/=D}}}if(!c)return!1;let p=Math.sqrt(l);return Fe.d=p,p>1e-5?(Fe.nx=(n-Fe.x)/p,Fe.ny=(e-Fe.y)/p,Fe.nz=(t-Fe.z)/p):(Fe.nx=Fe.fx,Fe.ny=Fe.fy,Fe.nz=Fe.fz),!0}function Ny(n,e,t,i,s){if(!lt.T)return null;let r=lt.T,o=lt.cs,a=lt.mn,l=lt.d,c=Math.floor((n-a[0])/o),u=Math.floor((t-a[2])/o);if(c<0||u<0||c>=l[0]||u>=l[2])return null;let d=e,h=e+i*s,p=Math.floor((d-a[1])/o),g=Math.floor((h-a[1])/o),y=null;for(;i<0?p>=Math.max(g,0):p<=Math.min(g,l[1]-1);p+=i){if(p<0||p>=l[1])continue;let f=(u*l[1]+p)*l[0]+c;for(let m=lt.st[f],x=lt.st[f+1];m<x;m++){let v=lt.id[m]*9,S=r[v]-n,T=r[v+2]-t,P=r[v+3]-n,L=r[v+5]-t,H=r[v+6]-n,_=r[v+8]-t,b=(L-_)*(S-H)+(H-P)*(T-_);if(Math.abs(b)<1e-9)continue;let I=((L-_)*(0-H)+(H-P)*(0-_))/b,O=((_-T)*(0-H)+(S-H)*(0-_))/b,F=1-I-O;if(I<0||O<0||F<0)continue;let C=I*r[v+1]+O*r[v+4]+F*r[v+7];if(!((C-e)*i<=0||Math.abs(C-e)>s)&&(!y||Math.abs(C-e)<Math.abs(y.y-e))){let M=r[v+3]-r[v],D=r[v+4]-r[v+1],V=r[v+5]-r[v+2],W=r[v+6]-r[v],G=r[v+7]-r[v+1],Z=r[v+8]-r[v+2],J=V*W-M*Z,ee=Math.hypot(D*Z-V*G,J,M*G-D*W)||1;y={y:C,ny:J/ee}}}}return y}function jA(n,e,t,i){let s=(r,o)=>{let a=Ny(r,e+1.5,o,-1,8);if(!a)return null;let l=Math.abs(a.ny)>.6?a:null;if(!l)return null;let c=Ny(r,l.y+.05,o,1,3);if(c&&Math.abs(c.y-l.y)<2.2)return null;let u=l.y+i+.05;return op(r,u,o,i-.02)?null:[r,u,o]};for(let r=0;r<=8;r++)for(let o=0;o<(r?16:1);o++){let a=o/16*6.2832,l=n+Math.cos(a)*r*.5,c=t+Math.sin(a)*r*.5,u=s(l,c);if(u)return u}return null}var ZA=(n,e)=>{let t=n.attributes[e];if(t&&(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array))){let i=new Float32Array(t.count*t.itemSize);for(let s=0;s<t.count;s++)for(let r=0;r<t.itemSize;r++)i[s*t.itemSize+r]=t.getComponent(s,r);n.setAttribute(e,new Pt(i,t.itemSize))}};function KA(n){let e=0,t=0;for(let u of n)e+=u.attributes.position.count,t+=u.index?u.index.count:u.attributes.position.count;let i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,l=0;for(let u of n){let d=u.attributes.position.count;if(i.set(u.attributes.position.array,a*3),s.set(u.attributes.normal.array,a*3),r.set(u.attributes.uv.array,a*2),u.index){let h=u.index.array;for(let p=0;p<h.length;p++)o[l++]=h[p]+a}else for(let h=0;h<d;h++)o[l++]=a+h;a+=d}let c=new qn;return c.setAttribute("position",new Pt(i,3)),c.setAttribute("normal",new Pt(s,3)),c.setAttribute("uv",new Pt(r,2)),c.setIndex(new Pt(o,1)),c}function ip(n){return n?(n.generateMipmaps=!1,n.minFilter=Qt,n.magFilter=Qt,n.anisotropy=1,n):null}function JA(n){var a;n.updateMatrixWorld(!0);let e=[];n.traverse(l=>{l.isMesh&&l.geometry.attributes.position&&e.push(l)});let t=0;e.forEach(l=>{let c=l.geometry;t+=Math.floor((c.index?c.index.count:c.attributes.position.count)/3)});let i=new Float32Array(t*9),s=0,r=new Map,o=new Map;for(let l of e){let c=Array.isArray(l.material)?l.material[0]:l.material,u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);let d=u.attributes.position,h=u.index,p=Math.floor((h?h.count:d.count)/3)*3;for(let f=0;f<p;f++){let m=h?h.getX(f):f;i[s++]=d.getX(m),i[s++]=d.getY(m),i[s++]=d.getZ(m)}u.attributes.normal||u.computeVertexNormals(),u.attributes.uv||u.setAttribute("uv",new Pt(new Float32Array(d.count*2),2));for(let f of Object.keys(u.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&u.deleteAttribute(f);["position","normal","uv"].forEach(f=>ZA(u,f));let g=`${c.map?((a=c.map.source)==null?void 0:a.uuid)||c.map.uuid:"nomap"}|${c.color?c.color.getHexString():"fff"}|${c.transparent?1:0}|${c.alphaTest||0}|${c.side||0}`,y=o.get(g);y||(y=new wo({map:ip(c.map),color:c.color?c.color.clone():16777215,transparent:c.transparent,opacity:c.opacity,alphaTest:c.alphaTest,side:c.side,emissive:c.emissive?c.emissive.clone():0,emissiveMap:ip(c.emissiveMap)}),o.set(g,y)),r.has(g)||r.set(g,{m:y,l:[]}),r.get(g).l.push(u),l.geometry.dispose()}for(let l of r.values()){let c=l.l,u=null;try{let h=KA(c);h.computeBoundingSphere(),u=new St(h,l.m)}catch{}(u?[u]:c.map(h=>new St(h,l.m))).forEach(h=>{h.matrixAutoUpdate=!1,h.frustumCulled=!0,Pi.add(h)}),u&&c.forEach(h=>h.dispose())}return i.subarray(0,s)}function QA(n){Ru.length=0,n.updateMatrixWorld(!0);let e=[];if(n.traverse(M=>{M.isSkinnedMesh&&e.push(M)}),!e.length)return;let t=e.reduce((M,D)=>D.geometry.attributes.position.count>M.geometry.attributes.position.count?D:M);e.forEach(M=>{M!==t&&(M.visible=!1)});let i=t.skeleton.bones,s=M=>M.name.toLowerCase().replace(/[^a-z]/g,""),r=M=>i.find(D=>M.test(s(D))),o={ur:r(/^upperarmr$/),lr:r(/^lowerarmr$/),hr:r(/^wristr$/),ul:r(/^upperarml$/),ll:r(/^lowerarml$/),hl:r(/^wristl$/),body:r(/^main$/),head:r(/^head$/)},a={};["r","l"].forEach(M=>{a[M]={pinky:r(new RegExp("^pinkyf?"+M+"$")),index:r(new RegExp("^pointerf?"+M+"$")),thumb:r(new RegExp("^thumb"+M+"$"))}});let l=new Set([o.ur,o.lr,o.hr,o.ul,o.ll,o.hl]);for(let M in a)for(let D in a[M])l.add(a[M][D]);let c=i.map(M=>l.has(M)),u=t.geometry,d=u.attributes.skinIndex,h=u.attributes.skinWeight,p=u.attributes.position.count,g=u.index,y=new Uint8Array(p);for(let M=0;M<p;M++){let D=0;for(let V=0;V<4;V++)c[d.getComponent(M,V)]&&(D+=h.getComponent(M,V));y[M]=D>.45?1:0}let f=[],m=g?g.count:p;for(let M=0;M<m;M+=3){let D=g?g.getX(M):M,V=g?g.getX(M+1):M+1,W=g?g.getX(M+2):M+2;y[D]&&y[V]&&y[W]&&f.push(D,V,W)}f.length>90&&(u.clearGroups(),u.setIndex(f));let x=Array.isArray(t.material)?t.material[0]:t.material;t.material=new wo({map:ip(x.map),color:x.color?x.color.clone():16777215,emissive:2236962}),t.frustumCulled=!1;let v=M=>M.getWorldPosition(kt()),S=v(o.ur),T=v(o.ul),P=S.clone().sub(T).normalize(),L=v(o.head).sub(v(o.body)).normalize();L.addScaledVector(P,-L.dot(P)).normalize();let H=new N().crossVectors(P,L),_=new st().setFromRotationMatrix(new we().makeBasis(P,L,H)).invert(),b=S.distanceTo(v(o.lr))+v(o.lr).distanceTo(v(o.hr)),I=$a/b,O=S.clone().add(T).multiplyScalar(.5),F={};["r","l"].forEach(M=>{let D={};for(let Z in a[M]){let J=a[M][Z];D[Z]=J?[{b:J,bind:J.quaternion.clone(),pos:J.getWorldPosition(kt()),wq:J.getWorldQuaternion(new st),Al:kt(),cur:0}]:[]}let V=M==="r"?o.hr:o.hl,W=V.getWorldPosition(kt()),G=W.clone().sub(O).dot(P)>0?1:-1;F[M]={hb:V,hbBind:V.quaternion.clone(),hpos:W,hwq:V.getWorldQuaternion(new st),ch:D,nRest:P.clone().multiplyScalar(-G),qs:null}});function C(M,D){let V=M.nRest.clone().multiplyScalar(D),W=[M.ch.index[0],M.ch.pinky[0]].filter(Boolean).map(B=>B.pos),Z=(W.length?W.reduce((B,K)=>B.add(K),kt()).multiplyScalar(1/W.length):M.hpos.clone().addScaledVector(L,-.1)).sub(M.hpos).normalize(),J=V.clone().addScaledVector(Z,-V.dot(Z)).normalize(),ee=M.hwq.clone().invert();M.fl=Z.clone().applyQuaternion(ee),M.nl=J.clone().applyQuaternion(ee),M.QlInv=new st().setFromRotationMatrix(new we().makeBasis(M.fl,J.clone().applyQuaternion(ee),new N().crossVectors(M.fl,M.nl))).invert();for(let B in M.ch)M.ch[B].forEach(K=>{K.Al.crossVectors(Z,J).normalize().applyQuaternion(K.wq.clone().invert())})}C(F.r,Py),C(F.l,Py),Yi&&Yi.parent&&Yi.parent.remove(Yi),Yi=new Mn,Yi.quaternion.copy(_),Yi.scale.setScalar(I),Yi.add(n),Yi.position.set(0,-.32,.1).sub(O.clone().applyQuaternion(_).multiplyScalar(I)),ln.add(Yi),ln.updateMatrixWorld(!0),[[o.ur,o.lr,o.hr,1],[o.ul,o.ll,o.hl,-1]].forEach(([M,D,V,W])=>{let G=ln.worldToLocal(v(M));Ru.push({s:M,e:D,h:V,side:W,bs:M.quaternion.clone(),be:D.quaternion.clone(),sp:G,reach:$a*.97,axis:V.position.clone().normalize(),info:F[W>0?"r":"l"]})})}function Dy(n,e,t,i){n.quaternion.copy(e),n.updateWorldMatrix(!0,!0);let s=n.getWorldPosition(kt()),r=t.getWorldPosition(kt()).sub(s).normalize(),o=i.clone().sub(s).normalize(),a=n.getWorldQuaternion(new st),l=new st().setFromUnitVectors(r,o),c=n.parent.getWorldQuaternion(new st).invert();n.quaternion.copy(c.multiply(l).multiply(a)),n.updateWorldMatrix(!1,!0)}function eE(n,e){if(!n||!n.hb)return;let t=n.hb;if(t.quaternion.copy(n.hbBind),e){t.updateWorldMatrix(!0,!1);let s=t.getWorldQuaternion(new st).clone().invert(),r=ln.getWorldQuaternion(new st),o=e.f.clone().applyQuaternion(r).applyQuaternion(s).normalize(),a=e.n.clone().applyQuaternion(r).applyQuaternion(s);if(a.addScaledVector(o,-a.dot(o)),a.lengthSq()>1e-4){a.normalize(),n.nl&&a.dot(n.nl)<-.15&&a.negate();let l=new st().setFromRotationMatrix(new we().makeBasis(o,a,new N().crossVectors(o,a))).multiply(n.QlInv);l.slerp(new st,.35),n.qs?n.qs.slerp(l,.22):n.qs=l.clone(),t.quaternion.multiply(n.qs)}for(let l in n.ch){let c=Math.max(0,Math.min(.85,e.c[l]??0));n.ch[l].forEach(u=>{u.cur=u.cur*.72+c*.28,u.b.quaternion.copy(u.bind).multiply(new st().setFromAxisAngle(u.Al,u.cur*.95))})}}else for(let i in n.ch)n.ch[i].forEach(s=>{s.cur*=.85,s.b.quaternion.copy(s.bind).multiply(new st().setFromAxisAngle(s.Al,s.cur*1.15))});t.updateWorldMatrix(!1,!0)}function ky(n,e,t){n.s.quaternion.copy(n.bs),n.e.quaternion.copy(n.be),n.s.updateWorldMatrix(!0,!0);let i=n.s.getWorldPosition(kt()),s=n.e.getWorldPosition(kt()),r=n.h.getWorldPosition(kt()),o=i.distanceTo(s),a=s.distanceTo(r),l=e.clone().sub(i),c=Math.min(Math.max(l.length(),Math.abs(o-a)+.01),(o+a)*.995);l.normalize();let u=Math.max(-1,Math.min(1,(o*o+c*c-a*a)/(2*o*c))),d=ln.getWorldQuaternion(new st),h=new N(n.side*.45,-1,.35).normalize().applyQuaternion(d),p=h.clone().addScaledVector(l,-h.dot(l));p.lengthSq()<1e-4&&p.set(0,-1,0),p.normalize();let g=i.clone().addScaledVector(l,o*u).addScaledVector(p,o*Math.sqrt(Math.max(0,1-u*u)));if(Dy(n.s,n.bs,n.e,g),Dy(n.e,n.be,n.h,e),s=n.e.getWorldPosition(kt()),r=n.h.getWorldPosition(kt()),e.clone().sub(r).lengthSq()>1e-5){let f=n.e.parent.getWorldQuaternion(new st).invert(),m=n.e.getWorldQuaternion(new st),x=new st().setFromUnitVectors(r.sub(s).normalize(),e.clone().sub(s).normalize());n.e.quaternion.copy(f.multiply(x).multiply(m)),n.e.updateWorldMatrix(!1,!0)}eE(n.info,t)}var Fr=(n,e)=>new N(n[e].x-.5,.5-n[e].y,-(n[e].z||0));function Oy(n,e){let t=Fr(n,0),i=Fr(n,5),s=Fr(n,9),r=Fr(n,17),o=s.clone().sub(t).normalize(),a=i.clone().sub(t),l=r.clone().sub(t),c=e?new N().crossVectors(l,a):new N().crossVectors(a,l);c.addScaledVector(o,-c.dot(o)).normalize();let u=t.distanceTo(s)||.1,d=(p,g)=>Math.max(0,Math.min(1,1.55-Fr(n,p).distanceTo(t)/(Fr(n,g).distanceTo(t)||u)*.72)),h=Math.max(0,Math.min(1,1.4-Fr(n,4).distanceTo(r)/(i.distanceTo(r)||u)*.75));return{f:o,n:c,c:{index:d(8,5),pinky:d(20,17),thumb:h}}}var Hy="nextvr.gorilla.coins",Vn=(()=>{try{let n=localStorage.getItem(Hy);if(n!==null&&n!==""){let e=Number(n);if(Number.isFinite(e)&&e>=0)return Math.floor(e)}}catch{}return 100})(),Ln=null,rr=null,sp=null,Ya=null,rp=-1,ep=0;function tE(n=1){let e=Math.max(0,Math.floor(Vn+n));if(e===Vn)return Vn;Vn=e;try{localStorage.setItem(Hy,String(Vn))}catch{}return Vy(),ht&&(ht.dataset.gorillaRightArmCoins=String(Vn)),typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Vn),Vn}function Vy(){if(!sp||!rr||rp===Vn)return;rp=Vn;let n=sp,e=rr.width,t=rr.height;n.clearRect(0,0,e,t),n.fillStyle="#0b1222",n.beginPath(),n.roundRect?n.roundRect(4,4,e-8,t-8,22):n.rect(4,4,e-8,t-8),n.fill(),n.lineWidth=5,n.strokeStyle="#facc15",n.stroke();let i=50,s=t/2,r=28,o=n.createRadialGradient(i-8,s-8,4,i,s,r);o.addColorStop(0,"#fef08a"),o.addColorStop(.55,"#facc15"),o.addColorStop(1,"#ca8a04"),n.fillStyle=o,n.beginPath(),n.arc(i,s,r,0,Math.PI*2),n.fill(),n.lineWidth=3,n.strokeStyle="#fef9c3",n.stroke(),n.fillStyle="#713f12",n.font="900 26px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("$",i,s+1),n.textAlign="left",n.fillStyle="#fde047",n.font="800 16px Inter, system-ui, sans-serif",n.fillText("MOEDAS",92,34),n.fillStyle="#ffffff",n.font="900 36px Inter, system-ui, sans-serif",n.fillText(String(Vn),92,74),Ya&&(Ya.needsUpdate=!0)}function nE(){if(Ln)return Ln;rr=document.createElement("canvas"),rr.width=256,rr.height=112,sp=rr.getContext("2d"),Ya=new yc(rr),Ya.minFilter=Qt,Ya.magFilter=Qt,rp=-1,Vy(),Ln=new Mn,Ln.name="gorilla-right-arm-coin-counter";let n=new en({color:1976635}),e=new St(new Vs(.088,.044,.072),n);e.position.set(0,0,-.02),Ln.add(e);let t=new en({color:15381256}),i=new St(new Vs(.148,.068,.012),t);i.position.set(0,0,-.004),Ln.add(i);let s=new en({map:Ya,transparent:!0,depthTest:!0,side:kn}),r=new St(new Sn(.14,.062),s);return r.position.set(0,0,.004),Ln.add(r),typeof window<"u"&&(window.__gorillaRightArmCoinCounter={coins:Vn,attachedTo:"right-arm",side:1,visible:!0}),Ln}function Gy(){if(!Ln||!ln)return;let n=Ru[0],e=Wy(),t=new N(0,1,0).applyQuaternion(ln.getWorldQuaternion(new st));if(n&&n.e&&n.h){let i=n.e.getWorldPosition(kt()),s=n.h.getWorldPosition(kt()),r=i.clone().lerp(s,.72),o=e.clone().sub(r);o.lengthSq()>1e-5&&(o.normalize(),r.addScaledVector(o,.065)),Ln.position.copy(r),Ln.up.copy(t),Ln.lookAt(e)}else{let i=ln.localToWorld(new N(.24,-.22,-.44));Ln.position.copy(i),Ln.up.copy(t),Ln.lookAt(e)}typeof window<"u"&&window.__gorillaRightArmCoinCounter&&(window.__gorillaRightArmCoinCounter.coins=Vn,window.__gorillaRightArmCoinCounter.position=Ln.position.toArray())}function iE(n,e){if(!e||e.length<21||(n==null?void 0:n.physicalSide)==="right")return!0;if((n==null?void 0:n.physicalSide)==="left")return!1;if(e[9].x>=.54)return!0;if(e[9].x<=.46)return!1;if(e[9].y<e[0].y&&Math.abs(e[5].x-e[17].x)>.022)return e[5].x<e[17].x;let t=String((n==null?void 0:n.id)||(n==null?void 0:n.handedness)||"").toLowerCase();return typeof(n==null?void 0:n.left)=="boolean"?n.left===!0:t.includes("left")||t==="l"?!0:t.includes("right")||t==="r"?!1:e[9].x>=.5}function sE(n){ll[0]=null,ll[1]=null;let e=[];for(let t=0;t<yi.length;t++){let i=yi[t];if(!i||!i.points||i.points.length<63)continue;let s=i.points,r=new Array(21);for(let o=0;o<21;o++)r[o]={x:s[o*3],y:s[o*3+1],z:s[o*3+2]||0};e.push({th:i,lm:r})}if(e.length>=2){e.sort((t,i)=>t.lm[9].x-i.lm[9].x);for(let t=0;t<2;t++){let{lm:i}=e[t],s=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);ar[t]={x:i[9].x,y:i[9].y,s,ori:Oy(i,t===1),t:n},ll[t]=i}}else if(e.length===1){let{th:t,lm:i}=e[0],r=iE(t,i)?1:0,o=1-r,a=Math.hypot(i[9].x-i[0].x,i[9].y-i[0].y);ar[r]={x:i[9].x,y:i[9].y,s:a,ori:Oy(i,r===1),t:n},ll[r]=i,ar[o]=null,ll[o]=null,Hr[o]=!1,Li[o]=null}if(sr&&n-sr.t<450){let t=sr.idx;ar[t]={x:sr.x,y:sr.y,s:sr.s,ori:null,t:n}}}var Wy=()=>ln.getWorldPosition(kt());function Cu(){mn&&(mn.position.copy(ap),Hn.set(0,0,0),Hr[0]=!1,Hr[1]=!1,Li[0]=null,Li[1]=null,pl[0]=0,pl[1]=0,mn.updateMatrixWorld(!0))}var ul=()=>new Promise(n=>setTimeout(n,16));async function Uy(n){let e=await fetch(n);if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.arrayBuffer(),i=new Uint8Array(t);if(i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70)return t;let s=new DecompressionStream("gzip"),r=s.writable.getWriter();return r.write(i),r.close(),await new Response(s.readable).arrayBuffer()}function Fy(n,e){return new Promise((t,i)=>n.parse(e,"",t,i))}function Br(n,e){oi&&(oi.querySelectorAll("[data-gorilla-splash-fill]").forEach(t=>{t.style.width=`${n}%`}),e&&oi.querySelectorAll("[data-gorilla-splash-step]").forEach(t=>{t.textContent=e}))}function rE(){if(Pi)return;Pi=new _a,Pi.background=new Ie(8898815),Pi.add(new bc(14677247,4877115,.95));let n=new Ea(16773846,.85);n.position.set(30,60,20),Pi.add(n),mn=new Mn,Pi.add(mn),ln=new zt(ji.fov,1200/2/800,.05,380),ln.position.set(0,0,0),mn.add(ln);let e=ji.ipd*.5;hl=new zt(ji.fov,1200/2/800,.05,380),hl.position.set(-e,0,0),fl=new zt(ji.fov,1200/2/800,.05,380),fl.position.set(e,0,0),ln.add(hl,fl);let t=nE();t&&!t.parent&&Pi.add(t),Gy();try{wi=new Mr({canvas:Ts,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),wi.setPixelRatio(1),wi.setSize(768,512,!1),wi.setScissorTest(!0)}catch{wi=null}}async function aE(){if(!Su){if(ol)return ol;if(rE(),typeof window<"u"&&window.__gorillaFastTest){Su=!0;return}return ol=(async()=>{var n;try{Br(18,"Descompactando mapa da floresta 3D..."),await ul();let e=new _u;e.textureLoader=new Sa((n=e.options)==null?void 0:n.manager);let[t,i]=await Promise.all([Uy("./gorilla-map.task"),Uy("./gorilla-rig.task")]);Br(45,"Carregando texturas e geometria..."),await ul();let[s,r]=await Promise.all([Fy(e,t),Fy(e,i)]);Br(68,"Otimizando malhas 3D (Lambert merge)..."),await ul();let o=JA(s.scene);Br(84,"Construindo grade f\xEDsica de colis\xE3o..."),await ul(),$A(o);let a=jA(zr[0],zr[1],zr[2],tp)||[zr[0],.9,zr[2]];ap.set(a[0],a[1],a[2]),Br(94,"Ativando bra\xE7os Gorilla 3D..."),await ul(),QA(r.scene),Cu(),Su=!0,Br(100,"Pronto! Entrando no Gorilla Tag...")}catch(e){console.warn("Gorilla Tag load fallback:",e),Su=!0}finally{ol=null}})(),ol}}function oE(){if(ht)return;let n=document.getElementById("hud")||document.body;ht=document.createElement("div"),ht.id="gorilla-overlay",ht.dataset.testid="gorilla-overlay",ht.dataset.cardboardLenses="2015",ht.dataset.gorillaStage="idle",ht.dataset.gorillaRightArmCoins=String(Vn),ht.dataset.lensModel=ji.model,ht.dataset.lensK1=String(ji.k1),ht.dataset.lensK2=String(ji.k2),ht.style.cssText=["position:fixed","left:0","top:0","width:1200px","height:800px","z-index:9997","display:none","background:#050811","overflow:hidden","touch-action:none"].join(";"),Ts=document.createElement("canvas"),Ts.id="gorilla-canvas",Ts.width=768,Ts.height=512,Ts.style.cssText="position:absolute;left:0;top:0;width:1200px;height:800px;display:block;",ht.appendChild(Ts);let e=document.createElement("div");e.className="gorilla-cardboard-divider",e.style.cssText=["position:absolute","left:599px","top:0","width:2px","height:800px","background:rgba(255,255,255,.22)","pointer-events:none","z-index:4"].join(";"),ht.appendChild(e);let t=(r,o)=>{let a=document.createElement("div");return a.style.cssText=`position:absolute;left:${r+140}px;top:12px;width:320px;display:flex;align-items:center;justify-content:center;gap:6px;z-index:6;pointer-events:auto;font-family:Inter,system-ui,sans-serif`,a.innerHTML=`
      <button type="button" data-gorilla-act="spawn" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Spawn</button>
      <button type="button" data-gorilla-act="recenter" style="padding:4px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(9,13,22,.72);color:#e2e8f0;font:700 10px Inter,sans-serif;cursor:pointer">Recentrar</button>
      <button type="button" data-gorilla-act="exit" ${o?'data-gorilla-exit="1"':""} style="padding:4px 10px;border-radius:999px;border:1px solid rgba(248,113,113,.45);background:rgba(153,27,27,.82);color:#fff;font:700 10px Inter,sans-serif;cursor:pointer">Sair</button>
    `,a};ht.appendChild(t(0,!0)),ht.appendChild(t(600,!1)),oi=document.createElement("div"),oi.id="gorilla-splash",oi.dataset.testid="gorilla-splash",oi.style.cssText=["position:absolute","left:0","top:0","width:1200px","height:800px","z-index:10","display:none","flex-direction:row","align-items:stretch","justify-content:stretch","background:radial-gradient(circle at 50% 38%, #1e293b 0%, #090d16 70%, #030712 100%)","color:#f8fafc","font-family:Inter,system-ui,sans-serif","text-align:center","user-select:none"].join(";");let i=r=>`
    <div style="width:600px;height:800px;display:flex;align-items:center;justify-content:center;${r?"border-right:1px solid rgba(255,255,255,.15)":""}">
      <div style="padding:26px 32px;border-radius:24px;background:rgba(15,23,42,.90);border:1px solid rgba(56,189,248,.38);box-shadow:0 24px 64px rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;gap:12px;max-width:460px">
        <img src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:88px;height:88px;border-radius:20px;object-fit:cover;box-shadow:0 12px 32px rgba(249,115,22,.45);border:2px solid rgba(255,255,255,.22)">
        <div class="gorilla-splash-title" ${r?'data-gorilla-entering="1"':""} style="font-size:23px;font-weight:800;letter-spacing:.02em;color:#f8fafc">Entrando no Gorilla Tag</div>
        <div class="gorilla-splash-sub" style="font-size:11.5px;font-weight:600;color:#94a3b8;letter-spacing:.08em;text-transform:uppercase">Lentes ${ji.model} \xB7 Hand Tracking</div>
        <div data-gorilla-splash-step style="font-size:11.5px;font-weight:600;color:#38bdf8;margin-top:2px">Inicializando floresta 3D...</div>
        <div style="width:220px;height:7px;border-radius:999px;background:rgba(148,163,184,.2);overflow:hidden;margin-top:4px">
          <div data-gorilla-splash-fill style="width:15%;height:100%;border-radius:999px;background:linear-gradient(90deg,#f97316,#38bdf8);transition:width .2s ease"></div>
        </div>
      </div>
    </div>
  `;oi.innerHTML=i(!0)+i(!1),ht.appendChild(oi),ht.addEventListener("click",r=>{let o=r.target.closest("[data-gorilla-act]");if(!o)return;let a=o.dataset.gorillaAct;a==="exit"?Xy():a==="spawn"?Cu():a==="recenter"&&(zy=new ni().setFromQuaternion(Me.quaternion,"YXZ").y)});let s=r=>{let o=ht.getBoundingClientRect();if(!o.width||!o.height)return;let a=Math.max(0,Math.min(1,(r.clientX-o.left)/o.width)),l=Math.max(0,Math.min(1,(r.clientY-o.top)/o.height)),c=a>=.5?(a-.5)*2:a*2;sr={idx:c>=.5?1:0,x:c,y:l,s:r.buttons?.12:.18,t:performance.now()}};ht.addEventListener("pointerdown",s),ht.addEventListener("pointermove",r=>{r.buttons&&s(r)}),ht.addEventListener("pointerup",()=>{sr=null}),n.appendChild(ht)}function By(){let n=Wy();for(let e=0;e<3&&op(n.x,n.y,n.z,tp);e++){let t=tp-Fe.d;mn.position.x+=Fe.nx*t,mn.position.y+=Fe.ny*t,mn.position.z+=Fe.nz*t,n.x+=Fe.nx*t,n.y+=Fe.ny*t,n.z+=Fe.nz*t;let i=Hn.x*Fe.nx+Hn.y*Fe.ny+Hn.z*Fe.nz;i<0&&(Hn.x-=Fe.nx*i,Hn.y-=Fe.ny*i,Hn.z-=Fe.nz*i,Fe.ny>.5&&(Hn.x*=.88,Hn.z*=.88))}n.y<ap.y-18&&Cu()}function qy(n){if(!Eu)return;Au=requestAnimationFrame(qy);let e=Math.min((n-(Tu||n))/1e3,.04)||.016;if(Tu=n,!Pi||!mn||!ln)return;let t=new ni().setFromQuaternion(Me.quaternion,"YXZ");ln.quaternion.setFromEuler(new ni(t.x,t.y-zy,t.z,"YXZ")),sE(n);let i=Ht.consumeStepDelta();i.lengthSq()>1e-6&&(mn.position.x+=i.x,mn.position.z+=i.z,mn.position.y+=i.y*.25),Hn.y-=9.8*e,Hn.multiplyScalar(1-.14*e),mn.position.addScaledVector(Hn,e),mn.updateMatrixWorld(!0),By();for(let s=0;s<2;s++){ar[s]&&n-ar[s].t>220&&(ar[s]=null);let r=ar[s],o=Ru[s?0:1];if(!r){if(Hr[s]=!1,Li[s]=null,pl[s]=0,o){let g=new N(s?.24:-.24,-.26,-.46);ky(o,ln.localToWorld(g),null)}continue}pl[s]++;let a=o?o.sp:kt(),l=kt();if(l.set((r.x-.5)*1.65,(.5-r.y)*1.8-.34,-Math.min(.95,Math.max(.25,.09/Math.max(r.s,.035)))),Li[s]){let g=l.clone().sub(Li[s]);g.length()>.22&&l.copy(Li[s]).addScaledVector(g.normalize(),.22),l.lerp(Li[s],.42)}let c=l.clone().sub(a);c.length()>$a*.97&&l.copy(a).addScaledVector(c.setLength($a*.97),1),qA[s].copy(l);let u=ln.localToWorld(l.clone());if(pl[s]>2&&op(u.x,u.y,u.z,Mu)){let g=new N(Fe.x+Fe.nx*Mu,Fe.y+Fe.ny*Mu,Fe.z+Fe.nz*Mu);if(!Hr[s])Hr[s]=!0,Qf[s].copy(g);else{let y=Qf[s].clone().sub(u),f=y.length();if(f>.001){f>.24&&y.multiplyScalar(.24/f),mn.position.add(y),ep+=y.length(),ep>=.45&&(ep=0,tE(1));let m=y.clone().multiplyScalar(WA/Math.max(e,.01));Hn.lerp(m,.5),Hn.length()>Ly&&Hn.setLength(Ly),mn.updateMatrixWorld(!0),By()}}cl[s].copy(Qf[s])}else Hr[s]=!1,cl[s].copy(u);let h=ln.worldToLocal(cl[s].clone()),p=h.clone().sub(a);p.length()>$a*.97&&(h.copy(a).addScaledVector(p.setLength($a*.97),1),cl[s].copy(ln.localToWorld(h))),Li[s]||(Li[s]=kt()),Li[s].copy(h),o&&ky(o,cl[s],r.ori)}if(Gy(),wi&&hl&&fl){mn.updateMatrixWorld(!0);let s=Ts.width,r=Ts.height,o=s>>1;wi.setViewport(0,0,o,r),wi.setScissor(0,0,o,r),wi.render(Pi,hl),wi.setViewport(o,0,o,r),wi.setScissor(o,0,o,r),wi.render(Pi,fl)}}function ja(){var t,i,s,r,o,a;if(oE(),dl||Eu)return;dl=!0,window.__gorillaStereoOverlay=!0,window.__gorillaExit=Xy,window.__gorillaOnHands=null,ht&&(ht.dataset.gorillaRightArmCoins=String(Vn)),E.handsOn=!0,ps().catch(()=>{});try{(i=(t=window.NativeXR)==null?void 0:t.handVisuals)==null||i.call(t,!1)}catch{}np=ye.map(l=>({win:l,hidden:!!l.hidden}));for(let l of[...ye])typeof l.setHidden=="function"?l.setHidden(!0):l.shell&&(l.shell.style.display="none");Qs(!0),pn(!1),Cn(!0),(r=(s=Se).invalidate)==null||r.call(s),(a=(o=Se).render)==null||a.call(o,gt,Me),ht.dataset.gorillaStage="entering",ht.style.display="block",oi.style.display="flex",Br(15,"Iniciando Gorilla Tag...");let n=typeof window<"u"&&!!window.__gorillaFastTest,e=new Promise(l=>setTimeout(l,n?240:1200));Promise.all([aE(),e]).then(()=>{dl&&(dl=!1,Eu=!0,ht.dataset.gorillaStage="playing",oi.style.display="none",Cu(),Tu=performance.now(),qy(Tu))})}function Xy(){var n,e,t,i,s,r;dl=!1,Eu=!1,window.__gorillaStereoOverlay=!1,window.__gorillaOnHands=null,Iy[0]=0,Iy[1]=0,XA=0,Au&&(cancelAnimationFrame(Au),Au=0),oi&&(oi.style.display="none"),ht&&(ht.dataset.gorillaStage="idle",ht.style.display="none");try{(e=(n=window.NativeXR)==null?void 0:n.handVisuals)==null||e.call(n,!!E.handDraw)}catch{}for(let{win:o,hidden:a}of np)ye.includes(o)&&(typeof o.setHidden=="function"?o.setHidden(a):o.shell&&(o.shell.style.display=""));np=[],E.spatialLauncher||(Cn(!1),pn(!0)),(i=(t=Se).invalidate)==null||i.call(t),(r=(s=Se).render)==null||r.call(s,gt,Me)}var ne=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i};var lE=n=>{if(de)return vn("browser-extra",k("browser"),n);try{window.open(n,"_blank","noopener")}catch{ct("Bloqueado pelo navegador")}};function Qy(n,e,t="https://duckduckgo.com/",i={}){var O,F,C,M,D,V,W,G,Z,J;let s=(i==null?void 0:i.mode)==="incognito-tab"||i!=null&&i.incognito?"incognito-tab":"new-tab",r=s==="incognito-tab",o=r&&t==="https://duckduckgo.com/"?"https://duckduckgo.com/?kae=d&kp=-1":t,a=r?"Navegador \xB7 Guia An\xF4nima":(i==null?void 0:i.mode)==="new-tab"?"Navegador \xB7 Nova Guia":e||"Navegador",l=ye.find(ee=>ee.id==="browser");if(l){l.el.dataset.browserMode=s,l.el.dataset.incognito=r?"1":"0",l.shell&&(l.shell.dataset.browserMode=s,l.shell.dataset.incognito=r?"1":"0");let ee=l.el.querySelector(".win-title");ee&&(ee.textContent=a);let B=l.el.querySelector("[data-browser-incognito]");B&&(B.dataset.browserIncognito=r?"1":"0",B.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",B.style.background=r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)",B.style.borderColor=r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)");let K=l.el.querySelector("[data-native-browser], iframe"),le=l.el.querySelector(".qb-urlfld");return le&&(le.value=o),K&&(de?(K.dataset.url=o,(F=(O=window.NativeXR)==null?void 0:O.browserCmd)==null||F.call(O,"browser","go",o)):K.src=o),fn(l),(M=(C=Se).invalidate)==null||M.call(C),(V=(D=Se).render)==null||V.call(D,gt,Me),l}let c=ne("div");c.style.cssText=`display:flex;flex-direction:column;height:100%;background:${r?"#120e1e":"#171a22"};color:#e9edf4`;let u=ne("div");u.style.cssText=`display:flex;align-items:center;gap:4px;padding:3px 6px;background:${r?"#0b0814":"#0e1117"};border-bottom:1px solid rgba(255,255,255,.08)`;let d=ne("button","qb-icn");d.innerHTML=te("back"),d.title="Voltar";let h=ne("button","qb-icn");h.innerHTML=te("enter"),h.style.transform="rotate(180deg)",h.title="Avan\xE7ar";let p=ne("button","qb-icn");p.innerHTML=te("refresh"),p.title="Recarregar";let g=ne("span","qb-mode-badge");g.dataset.browserIncognito=r?"1":"0",g.textContent=r?"\u{1F576}\uFE0F GUIA AN\xD4NIMA":"+ NOVA GUIA",g.style.cssText=`font-size:10px;font-weight:800;letter-spacing:.04em;padding:3px 8px;border-radius:999px;white-space:nowrap;color:#f8fafc;background:${r?"rgba(139,92,246,0.28)":"rgba(59,130,246,0.22)"};border:1px solid ${r?"rgba(167,139,250,0.55)":"rgba(96,165,250,0.45)"}`;let y=ne("input","fld qb-urlfld");y.type="text",y.placeholder=r?"Pesquisa privada an\xF4nima ou URL":"Pesquisar ou inserir URL",y.value=o;let f=ne("button","qb-icn");f.innerHTML=te("star"),f.title="Favorito",u.append(d,h,p,g,y,f);let m=ne("div");m.style.cssText="flex:1;min-height:0;position:relative;background:#fff";let x=ne(de?"div":"iframe");de?(x.dataset.nativeBrowser="browser",x.style.cssText="width:100%;height:100%;background:#fff",x.dataset.url=o):(x.style.cssText="width:100%;height:100%;border:0;background:#fff",x.referrerPolicy="no-referrer",x.sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation",x.src=o),m.appendChild(x);let v=ne("div","qb-dock"),S=document.createElement("button");S.className="dock-av",S.title="Perfil",S.setAttribute("aria-label","Perfil"),S.innerHTML=cE,v.appendChild(S);let T=document.createElement("button");T.className="dock-status",T.title="Status",T.innerHTML=`<span class="dock-time">--:--</span><span class="dock-wifi">${te("wifi")}</span><span class="dock-bat">${uE}</span>`,v.appendChild(T),c.append(u,m,v);function P(){let ee=Xi(),B=v.querySelector(".dock-time");if(B&&(B.textContent=ee.time==="--:--"?new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):ee.time),de&&ee.batteryLevel!=null){let K=v.querySelector(".dock-bat .b-fill");K&&(K.setAttribute("width",String(Math.max(2,13*ee.batteryLevel))),K.setAttribute("fill",ee.charging?"#8de6c8":ee.batteryLevel<.2?"#ff6b6b":"currentColor"))}}P();let L=setInterval(P,2e4);!de&&navigator.getBattery&&navigator.getBattery().then(ee=>{function B(){let K=v.querySelector(".dock-bat .b-fill");K&&(K.setAttribute("width",String(Math.max(2,13*ee.level))),K.setAttribute("fill",ee.charging?"#8de6c8":ee.level<.2?"#ff6b6b":"currentColor"))}ee.addEventListener("levelchange",B),ee.addEventListener("chargingchange",B),B()}).catch(()=>{});function H(){let ee=v.querySelector(".dock-wifi");ee&&(ee.style.opacity=navigator.onLine?"1":".35")}addEventListener("online",H),addEventListener("offline",H),H();function _(ee){var K,le;let B=(ee||"").trim();B&&(/^https?:\/\//i.test(B)||(B=/\.\w{2,}($|\/)/.test(B)?"https://"+B:"https://duckduckgo.com/?q="+encodeURIComponent(B)),y.value=B,de?(x.dataset.url=B,(le=(K=window.NativeXR)==null?void 0:K.browserCmd)==null||le.call(K,"browser","go",B)):x.src=B)}function b(ee,B){var K,le;de&&((le=(K=window.NativeXR)==null?void 0:K.browserCmd)==null||le.call(K,"browser",ee,B||""))}y.addEventListener("keydown",ee=>{ee.key==="Enter"&&(_(y.value),y.blur())}),y.addEventListener("focus",()=>si(!0,y)),d.onclick=()=>b("back"),h.onclick=()=>b("fwd"),p.onclick=()=>b("reload");let I=nn({id:"browser",title:a,node:c});return I!=null&&I.el&&(I.el.dataset.browserMode=s,I.el.dataset.incognito=r?"1":"0"),I!=null&&I.shell&&(I.shell.dataset.browserMode=s,I.shell.dataset.incognito=r?"1":"0"),I._cleanupQB=()=>{clearInterval(L),removeEventListener("online",H),removeEventListener("offline",H)},(G=(W=Se).invalidate)==null||G.call(W),(J=(Z=Se).render)==null||J.call(Z,gt,Me),I}function ev(n="new-tab"){let e=n==="incognito-tab",t=Qy("browser",e?"Navegador \xB7 Guia An\xF4nima":"Navegador \xB7 Nova Guia",e?"https://duckduckgo.com/?kae=d&kp=-1":"https://duckduckgo.com/",{mode:e?"incognito-tab":"new-tab",incognito:e});return ct(e?"Guia An\xF4nima aberta":"Nova Guia aberta"),t}typeof window<"u"&&(window.nextvrOpenBrowserOption=ev);var cE='<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><circle cx="12" cy="8.6" r="4.2"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',uE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2.5"/><rect x="20" y="10" width="2.2" height="4" rx="1" fill="currentColor" stroke="none"/><rect class="b-fill" x="4" y="6.5" width="13" height="11" rx="2" fill="currentColor" stroke="none"/></svg>';function vn(n,e,t,i){if(n==="browser"||n==="youtube"||n==="netflix"||n==="prime"||n==="tiktok"||n==="twitch"||n==="discord")return Qy(n,e,t);let s=ne("div");s.style.cssText="display:flex;flex-direction:column;height:100%";let r=ne("div","row browser-bar"),o=ne("input","fld");o.value=t,o.placeholder=k("search");let a=ne("button","go",te("enter"));a.setAttribute("aria-label",k("open")),a.title=k("open");let l=ne("button","go",te("external"));l.setAttribute("aria-label",k("open")),l.title=k("open"),l.style.background="rgba(255,255,255,.12)",l.style.color="#fff",r.append(o,a,l);let c=ne("div","warn",i||"");c.style.cssText+="margin:12px 14px 0;display:none";let u=ne("div");u.style.cssText="flex:1;min-height:0;position:relative";let d=ne(de?"div":"iframe");de&&(d.dataset.nativeBrowser=n,d.style.cssText="width:100%;height:100%;background:#fff"),d.setAttribute("referrerpolicy","no-referrer"),d.setAttribute("sandbox","allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"),u.appendChild(d),s.append(r,c,u);let h=g=>{let y=(g||"").trim();if(y){if(/^https?:\/\//i.test(y)||(y=/\.\w{2,}($|\/)/.test(y)?"https://"+y:"https://duckduckgo.com/?q="+encodeURIComponent(y)),o.value=y,de){d.dataset.url=y,c.style.display="none";return}d.src=y,c.style.display="block",c.innerHTML=`Se a \xE1rea ficar branca, <b>o site recusou abrir em iframe</b> (Google, YouTube e Discord fazem isso).
      No app Android isso funciona, porque l\xE1 \xE9 WebView. Aqui, use o bot\xE3o Abrir fora.`}};a.onclick=()=>h(o.value),o.addEventListener("keydown",g=>{g.key==="Enter"&&h(o.value)}),o.addEventListener("focus",()=>si(!0,o)),l.onclick=()=>lE(o.value),h(t);let p=nn({id:n,title:e,node:s});return p.shell.classList.add("web-page-window"),p}var ft=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Lu=[];function yp(){let n=ne("div","pad"),e=ne("div");e.innerHTML=`<h2>${k("gallery")}</h2><p class="sub">Veja suas fotos e troque o ambiente do NextVR.</p>`;let t=ne("div");t.style.marginTop="22px",t.innerHTML=`<h3 style="font-size:18px;margin:0 0 10px 0;font-weight:700">${k("env")}</h3>
    <p class="sub" style="margin:0 0 12px 0">Escolha o fundo em que tudo flutua.</p>`;let i=ne("div","grid3"),s=()=>{i.innerHTML="";for(let d of Ah()){let h=ne("button","env"+(d.thumb?" env-pano":""));h.style.background=d.thumb?`url('${d.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",h.innerHTML=`<span>${d.name}</span>`,h.setAttribute("aria-pressed",E.env===d.id?"true":"false"),h.onclick=()=>{zi(d.id),[...i.children].forEach(p=>p.setAttribute("aria-pressed","false")),h.setAttribute("aria-pressed","true"),ct("Ambiente: "+d.name)},i.appendChild(h)}};s(),We("env",s),t.appendChild(i);let r=ne("div");r.style.cssText="margin-top:26px;display:flex;align-items:center;gap:10px",r.innerHTML=`<h3 style="font-size:18px;margin:0;font-weight:700">${k("gallery")}</h3>`;let o=ne("button","go",k("pickPhotos")),a=ne("input");a.type="file",a.accept="image/*",a.multiple=!0,a.style.display="none",r.appendChild(o);let l=ne("div","grid4"),c=ne("div");c.style.cssText="margin-top:14px";let u=()=>{if(l.innerHTML="",!Lu.length){l.innerHTML=`<p class="sub" style="grid-column:1/-1">${k("noPhotos")}</p>`;return}Lu.forEach(d=>{let h=ne("button","thumb");h.innerHTML=`<img src="${d}" alt="">`,h.onclick=()=>{c.innerHTML=`<img src="${d}" style="width:100%;border-radius:16px">`},l.appendChild(h)})};return o.onclick=()=>a.click(),a.onchange=()=>{for(let d of a.files)Lu.push(URL.createObjectURL(d));u(),ct(Lu.length+" fotos")},u(),n.append(e,t,r,a,l,c),nn({id:"gallery",title:k("gallery"),node:n})}function dE(){let n=ne("div","pad");n.innerHTML=`<h2>${k("env")}</h2><p class="sub">Troque sem fechar nada.</p>`;let e=ne("div","grid3");for(let t of Ah()){let i=ne("button","env"+(t.thumb?" env-pano":""));i.style.background=t.thumb?`url('${t.thumb}') center/cover`:"linear-gradient(160deg,#253244,#11151d)",i.innerHTML=`<span>${t.name}</span>`,i.setAttribute("aria-pressed",E.env===t.id),i.onclick=()=>{zi(t.id),[...e.children].forEach(s=>s.setAttribute("aria-pressed","false")),i.setAttribute("aria-pressed","true")},e.appendChild(i)}return n.appendChild(e),nn({id:"env",title:k("env"),node:n})}function hE(n,e,t){let i=ne("div","opt");return i.append(ne("div","opt-l",`<div class="opt-t">${n}</div>${e?`<div class="opt-d">${e}</div>`:""}`),t),i}function cn(n,e,t,i){let s=ne("div","yt-row"),r=ne("span","yt-ic");r.innerHTML=n;let o=ne("div","yt-txt");if(o.innerHTML=`<div class="yt-title">${e}</div>${t?`<div class="yt-sub">${t}</div>`:""}`,s.append(r,o),i){let a=ne("div","yt-ctl");a.appendChild(i),s.appendChild(a)}else{let a=ne("span","yt-ch");a.innerHTML="",s.appendChild(a)}return s}function ml(n,e){let t=ne("button","yt-sw");t.type="button",t.setAttribute("role","switch");let i=()=>{t.dataset.on=E[n]?"1":"0",t.setAttribute("aria-checked",E[n]?"true":"false")};return i(),t.onclick=()=>{E[n]=E[n]?0:1,Ye(),i(),e&&e(E[n])},t}function Za(n){let e=ne("div","yt-sec");return e.textContent=n,e}function Vr(n,e,t,i){let s=ne("input","yt-range");return s.type="range",s.min=e,s.max=t,s.step=i,s.value=E[n],s.oninput=()=>{E[n]=+s.value,Ye()},s}function tv(n){n.innerHTML="";let e=ay(),t=n,i=ne("div","az-row");i.innerHTML=`<i class="az-dot" data-state="${e.runtime}"></i><span class="az-text">${k(sl()?"xrRuntimeReady":"xrMissing")}<small>${e.summary||""}</small></span>`,t.append(i);let s=ne("div","row");if(s.style.cssText="gap:10px;flex-wrap:wrap",e.runtimeBundled&&!sl()){let a=ne("button","go",k("xrInstall"));a.onclick=()=>{mf()},s.append(a)}let r=ne("button","go",k("xrSelfTest"));r.onclick=()=>gf(),s.append(r);let o=ne("div","seg");for(let[a,l,c]of[["controllers",k("xrModeControllers"),k("xrModeControllersSub")],["hands",k("xrModeHands"),k("xrModeHandsSub")]]){let u=ne("button",null,l);u.title=c,u.setAttribute("aria-pressed",String(cy()===a)),u.onclick=()=>{py(a),[...o.children].forEach(d=>d.setAttribute("aria-pressed","false")),u.setAttribute("aria-pressed","true")},o.appendChild(u)}t.append(hE(k("xrHandMode"),k("xrHandModeSub"),o),s),t.append(ne("p","note",k("xrHandModeNote"))),!sl()&&!e.runtimeBundled&&t.append(ne("p","note",k("xrBundlingNote")))}function Bu(){var H,_;let n=ne("div","quick-center"),e=ne("section","quick-panel"),t=ne("aside","quick-side"),i=ne("div","quick-status"),s=()=>{var I,O;try{let F=(O=(I=window.NativeXR)==null?void 0:I.battery)==null?void 0:O.call(I);if(F){let C=JSON.parse(F);if(C&&typeof C.level=="number")return C}}catch{}let b=Xi();return b&&typeof b.batteryLevel=="number"?{level:b.batteryLevel,charging:!!b.charging}:null},r=s(),o=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});i.innerHTML=`<div><strong>Controles r\xE1pidos</strong><span>${o}</span></div><div class="quick-battery">${te("battery")}<b data-cc-battery>${r?Math.round(r.level*100):"\u2014"}%</b></div>`,We("device-status",()=>{let b=i.querySelector("[data-cc-battery]");if(!b)return;let I=s();b.textContent=`${I?Math.round(I.level*100):"\u2014"}%`});let l=ne("button","quick-gear",te("settings"));l.type="button",l.title="Todas as configura\xE7\xF5es",l.setAttribute("aria-label","Todas as configura\xE7\xF5es"),l.onclick=()=>Uu(),i.appendChild(l);let c=ne("div","quick-tiles"),u=(b,I,O,F,C=!1)=>{let M=ne("button",`quick-tile${C?" is-disabled":""}`);return M.type="button",M.innerHTML=`<span class="quick-tile-icon">${te(b)}</span><span><b>${I}</b><small>${O}</small></span>`,M.disabled=C,F&&(M.onclick=F),c.appendChild(M),M};u("wifi","Wi-Fi","Abrir conex\xF5es",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("internet"):ct("Conex\xF5es dispon\xEDveis no Android")}),u("bluetooth","Bluetooth","Dispositivos",()=>{var b;return(b=window.NativeXR)!=null&&b.systemPanel?window.NativeXR.systemPanel("bluetooth"):ct("Bluetooth dispon\xEDvel no Android")}),u("android","Apps Android","Abrir janela Shizuku",()=>Fu()),u("lock","Limite","Movimento protegido",null,!0),e.append(i,c);let d=ne("div","quick-section");d.innerHTML='<div class="quick-section-title"><b>Controles r\xE1pidos</b><span>Toque para ativar ou ajustar</span></div>';let h=ne("div","quick-controls"),p=E.env==="night"?"passthrough":E.env,g=!1,y=null,f=null,m=b=>{var I;g=!!b,(I=window.NativeXR)!=null&&I.audioEnabled&&window.NativeXR.audioEnabled(!g);for(let O of[y,f])O&&(O.classList.toggle("is-active",g),O.setAttribute("aria-pressed",String(g)));y&&(y.querySelector("small").textContent=g?"\xC1udio silenciado":"Som ativado")},x=(b,I,O,F,C=!1)=>{let M=ne("button",`quick-control${C?" is-active":""}`);return M.type="button",M.setAttribute("aria-pressed",String(C)),M.innerHTML=`<span>${te(b)}</span><b>${I}</b><small>${O}</small>`,M.onclick=()=>{let D=F(M);M.classList.toggle("is-active",!!D),M.setAttribute("aria-pressed",String(!!D))},h.appendChild(M),M};x("camera","Vis\xE3o do ambiente",E.env==="passthrough"?"C\xE2mera ativa":"C\xE2mera desligada",b=>{let I=E.env!=="passthrough";return gi(I),b.querySelector("small").textContent=I?"C\xE2mera ativa":"C\xE2mera desligada",I},E.env==="passthrough"),y=x("volumeoff","N\xE3o perturbe","Silenciar \xE1udio do app",()=>(m(!g),g)),x("crosshair","Recentralizar","Ajustar a vis\xE3o",()=>(Hi(),ct("Vis\xE3o recentralizada"),!1)),x("moon","Modo noturno",E.env==="night"?"Ativado":"Desativado",b=>{let I=E.env!=="night";return I?(p=E.env,zi("night")):zi(p==="night"?"passthrough":p),b.querySelector("small").textContent=I?"Ativado":"Desativado",I},E.env==="night"),x("settings","Mais configura\xE7\xF5es","Imagem, janelas e idioma",()=>(Uu(),!1)),x("android","Apps do Android","Abrir launcher Shizuku",()=>(Fu(),!1)),x("appGrid","Spatial App",E.spatialLauncher?"Ativado (Sem Dock)":"Desativado (Dock normal)",b=>{let I=!E.spatialLauncher;return _p(I),b.querySelector("small").textContent=I?"Ativado (Sem Dock)":"Desativado (Dock normal)",I},!!E.spatialLauncher),x("vision","C\xE2mera Grande Ocular",E.wideCamera?"Ativada":"Normal",b=>{var I,O;return E.wideCamera=E.wideCamera?0:1,Ye(E),(O=(I=window.NativeXR)==null?void 0:I.wideCamera)==null||O.call(I,!!E.wideCamera),b.querySelector("small").textContent=E.wideCamera?"Ativada":"Normal",!!E.wideCamera},!!E.wideCamera),x("move",k("dockSnapSlot"),E.dockSnapSlot!==0?k("on"):k("off"),b=>(E.dockSnapSlot=E.dockSnapSlot===0?1:0,Ye(E),b.querySelector("small").textContent=E.dockSnapSlot!==0?k("on"):k("off"),E.dockSnapSlot!==0),E.dockSnapSlot!==0),x("crosshair",k("fingerTouch"),E.fingerTouch!==0?k("on"):k("off"),b=>{var I,O;return E.fingerTouch=E.fingerTouch===0?1:0,Ye(E),(O=(I=window.NativeXR)==null?void 0:I.setFingerTouch)==null||O.call(I,E.fingerTouch!==0),Ce("fingerTouch",E.fingerTouch!==0),b.querySelector("small").textContent=E.fingerTouch!==0?k("on"):k("off"),E.fingerTouch!==0},E.fingerTouch!==0),x("move","Modo 3DoF / 6DoF",E.sixdof!==0?"6DoF Ativado":"3DoF Ativado",b=>{var I,O;return E.sixdof=E.sixdof===0?1:0,Ye(E),E.sixdof||Ht.reset(),(O=(I=window.NativeXR)==null?void 0:I.setSixDofEnabled)==null||O.call(I,E.sixdof!==0),Ce("sixdof",E.sixdof!==0),b.querySelector("small").textContent=E.sixdof!==0?"6DoF Ativado":"3DoF Ativado",E.sixdof!==0},E.sixdof!==0),d.appendChild(h),e.append(d);let v=ne("div","quick-side-title","Ajustes"),S=ne("span","quick-side-icon",te("volume")),T=ne("input","quick-vertical");T.type="range",T.min="0",T.max="100",T.value=(H=window.NativeXR)!=null&&H.volume?window.NativeXR.volume():65,T.setAttribute("aria-label","Volume"),T.title=`Volume ${T.value}%`,T.oninput=()=>{var b,I;(I=(b=window.NativeXR)==null?void 0:b.setVolume)==null||I.call(b,+T.value),T.title=`Volume ${T.value}%`},f=ne("button","quick-side-button",te("volumeoff")),f.type="button",f.title="Silenciar \xE1udio",f.setAttribute("aria-label","Silenciar \xE1udio"),f.setAttribute("aria-pressed","false"),f.onclick=()=>m(!g);let P=ne("span","quick-side-icon",te("sun")),L=ne("input","quick-vertical");return L.type="range",L.min="10",L.max="100",L.value=(_=window.NativeXR)!=null&&_.brightness?window.NativeXR.brightness():70,L.setAttribute("aria-label","Brilho"),L.title=`Brilho ${L.value}%`,L.oninput=()=>{var b,I;(I=(b=window.NativeXR)==null?void 0:b.setBrightness)==null||I.call(b,+L.value),L.title=`Brilho ${L.value}%`},t.append(v,S,T,f,P,L),n.append(e,t),nn({id:"control-center",title:"Configura\xE7\xF5es",node:n,w:980,h:640})}function Uu(){let n=ne("div");n.style.cssText="display:flex;flex-direction:column;height:100%;background:#0f0f0f;color:#f1f1f1;font-family:Inter,system-ui,sans-serif;";let e=ne("div");e.style.cssText="display:flex;align-items:center;gap:6px;padding:8px 8px 4px;";let t=ne("button","yt-back");t.innerHTML=te("back"),t.title="Voltar",t.setAttribute("aria-label","Voltar"),t.onclick=()=>{let m=ye.find(x=>x.id==="settings");m&&qt(m)};let i=ne("div","yt-head-title");i.textContent=k("settings"),e.append(t,i);let s=ne("div");s.style.cssText="flex:1;min-height:0;overflow-y:auto;padding:4px 0 20px;";let r=null,o=()=>{r=nn({id:"language-pick",title:k("langTitle"),w:320,h:420,node:lv(E.lang||"pt",m=>{Tr(m),ct(k("langChanged")),qt(r);let x=ye.find(v=>v.id==="settings");x&&qt(x),Uu()},!0)})};s.append(Za(k("general")));let a=ne("button","yt-link");a.append(cn(te("globe"),k("language"),Bc(E.lang||"pt").label)),a.onclick=o,s.append(a),s.append(cn(te("gauge"),"Contador de FPS","Mostrar taxa de quadros",ml("showFps")));let l=ne("div");l.style.cssText="display:inline-flex;gap:6px;align-items:center;";let c=ne("button","entry-seg-btn"+(E.sixdof===0?" on":""),"3DoF");c.dataset.settingsDof="3dof";let u=ne("button","entry-seg-btn"+(E.sixdof!==0?" on":""),"6DoF");u.dataset.settingsDof="6dof";let d=()=>{c.classList.toggle("on",E.sixdof===0),u.classList.toggle("on",E.sixdof!==0)};c.onclick=()=>{var m,x;E.sixdof=0,Ye(E),Ht.reset(),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!1),Ce("sixdof",!1),d()},u.onclick=()=>{var m,x;E.sixdof=1,Ye(E),(x=(m=window.NativeXR)==null?void 0:m.setSixDofEnabled)==null||x.call(m,!0),Ce("sixdof",!0),d()},l.append(c,u),s.append(cn(te("move"),"Modo 3DoF / 6DoF","Alternar entre 3DoF (rota\xE7\xE3o) e 6DoF (andar no espa\xE7o)",l));let h=ne("button","yt-link");h.append(cn(te("image"),"Ambiente","Trocar passthrough / panorama")),h.onclick=()=>{let m=ye.find(x=>x.id==="settings");m&&qt(m),yp()},s.append(h),s.append(Za(k("hands"))),s.append(cn(te("user"),"Rastreamento","MediaPipe nativo \xB7 c\xE2mera traseira")),s.append(cn(te("edit3"),"Desenhar m\xE3os","Contorno ciano e cursor de pin\xE7a",ml("handDraw"))),s.append(cn(te("crosshair"),k("fingerTouch"),k("fingerTouchDesc"),ml("fingerTouch",m=>{var x,v;(v=(x=window.NativeXR)==null?void 0:x.setFingerTouch)==null||v.call(x,!!m),Ce("fingerTouch",!!m)}))),s.append(cn(te("zap"),"Sensibilidade","Pin\xE7a com histerese est\xE1vel")),s.append(Za(k("windows"))),s.append(cn(te("maximize"),"Tamanho","Escala das janelas",Vr("winScale",.6,1.6,.05))),s.append(cn(te("distance"),"Dist\xE2ncia","Dist\xE2ncia do arco",Vr("winDist",de?.6:1.5,de?1.8:3.4,.05))),s.append(cn(te("curve"),k("curve"),"Abertura do arco",Vr("winCurve",0,1,.05))),s.append(cn(te("curve"),k("win360"),k("win360k"),Vr("win360K",.2,1.15,.05))),s.append(cn(te("curve"),k("win360All"),"Novas janelas curvadas",ml("win360"))),s.append(cn(te("move"),"Inclina\xE7\xE3o","Ajuste vertical das janelas",Vr("winTilt",0,1.5,.05))),s.append(Za(k("dock"))),s.append(cn(te("appGrid"),"Tamanho da dock",null,Vr("dockSize",.7,1.5,.05))),s.append(cn(te("distance"),"Dist\xE2ncia da dock",null,Vr("dockDist",.7,1.5,.05))),s.append(cn(te("move"),k("dockSnapSlot"),k("dockSnapDesc"),ml("dockSnapSlot"))),s.append(Za(k("perf")));let p=ne("div","yt-seg");for(let[m,x]of[["low",k("qualityLow")],["medium",k("qualityMedium")],["high",k("qualityHigh")],["auto",k("qualityAuto")]]){let v=ne("button","yt-seg-btn");v.textContent=x,v.setAttribute("aria-pressed",E.quality===m),v.onclick=()=>{E.quality=m,Ye(),Ce("quality"),[...p.children].forEach(S=>S.setAttribute("aria-pressed","false")),v.setAttribute("aria-pressed","true")},p.appendChild(v)}s.append(cn(te("settings"),k("quality"),"1080p \xB7 890p \xB7 390p \xB7 Auto",p)),s.append(Za(k("xrTitle")));let g=ne("button","yt-link");g.append(cn(te("controller"),k("xrTitle"),k("xrSub"))),g.setAttribute("aria-expanded","false");let y=ne("div","card");y.dataset.xrPage="",y.style.margin="0 16px 14px",y.hidden=!0,g.onclick=()=>{y.hidden=!y.hidden,g.setAttribute("aria-expanded",String(!y.hidden)),y.hidden||tv(y)},s.append(g,y);let f=ne("div","yt-foot");return f.textContent="NextVR \xB7 shell XR para Android \xB7 v1.0",s.append(f),n.append(e,s),nn({id:"settings",title:k("settings"),node:n})}function fE(){let n=ye.find(h=>h.id==="quick-settings");if(n)return fn(n),hp(Xi()),n;let e=ne("div","quick-settings");e.innerHTML=`<section class="qs-panel">
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
  </aside>`;let t=e,i={night:!1,dnd:!1,muted:!1,lastVolume:50};try{i={...i,...JSON.parse(localStorage.getItem("nextvr.quick-settings.v1")||"{}")}}catch{}let s=[...t.querySelectorAll("[data-q-range]")],r=(h,p)=>{var g,y;try{let f=Number((y=(g=window.NativeXR)==null?void 0:g[h])==null?void 0:y.call(g));return Number.isFinite(f)?Math.max(0,Math.min(100,f)):p}catch{return p}},o=de?r("mediaVolumePercent",50):50,a=de?r("brightnessPercent",50):50;o>0&&(i.lastVolume=o);function l(h,p){let g=Math.max(0,Math.min(100,Number(p)||0));for(let y of s.filter(f=>f.dataset.qRange===h))y.value=String(g),y.style.setProperty("--fill",`${g}%`);h==="volume"&&(o=g,g>0?(i.lastVolume=g,i.muted=!1):i.muted=!0)}function c(){try{localStorage.setItem("nextvr.quick-settings.v1",JSON.stringify(i))}catch{}}function u(){t.classList.toggle("night",!!i.night),t.querySelectorAll("[data-q-night]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.night))),t.querySelectorAll("[data-q-dnd]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.dnd))),t.querySelectorAll("[data-q-mute]").forEach(h=>h.setAttribute("aria-pressed",String(!!i.muted)))}l("volume",o),l("brightness",a),u();for(let h of s)h.addEventListener("input",()=>l(h.dataset.qRange,h.value)),h.addEventListener("change",()=>{var p,g,y,f;de&&(h.dataset.qRange==="volume"&&((g=(p=window.NativeXR).setMediaVolumePercent)==null||g.call(p,o)),h.dataset.qRange==="brightness"&&((f=(y=window.NativeXR).setBrightnessPercent)==null||f.call(y,Number(h.value))),u(),c())});t.addEventListener("click",h=>{var g,y;let p=f=>h.target.closest(f);if(p("[data-q-close]")){qt(ye.find(f=>f.id==="quick-settings"));return}if(p("[data-q-settings]")){Uu();return}if(p("[data-q-env]")){dE();return}if(p("[data-q-recenter]")){Hi();return}if(p("[data-q-night]")){i.night=!i.night,u(),c();return}if(p("[data-q-dnd]")){i.dnd=!i.dnd,u(),c();return}p("[data-q-mute]")&&(i.muted=!i.muted,i.muted?(o>0&&(i.lastVolume=o),l("volume",0)):l("volume",i.lastVolume||50),de&&((y=(g=window.NativeXR).setMediaVolumePercent)==null||y.call(g,o)),u(),c())});let d=nn({id:"quick-settings",title:"Configura\xE7\xF5es",node:e,w:1040,h:660,chrome:!1,resizable:!1});return hp(Xi()),d}function hp(n=Xi()){var o;let e=(o=ye.find(a=>a.id==="quick-settings"))==null?void 0:o.el.querySelector(".quick-settings");if(!e)return;let t=e.querySelector("[data-q-battery] span");t&&(t.textContent=n.batteryLevel==null?"--%":`${Math.round(n.batteryLevel*100)}%`);let i=e.querySelector("[data-q-time]");i&&(i.textContent=n.time||"--:--");let s=e.querySelector("[data-q-date]");s&&(s.textContent=n.date||"");let r=e.querySelector("[data-q-network]");r&&(r.textContent=n.online?"Conectado \xE0 internet":"Sem conex\xE3o")}We("device-status",hp);var nv="nextvr.lib.recent.v1",pE=n=>{try{let e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e:[]}catch{return[]}},yl=pE(nv),mE=()=>{try{localStorage.setItem(nv,JSON.stringify(yl))}catch{}},iv=[{id:"netflix",name:"Netflix",bg:"linear-gradient(145deg,#301014,#09090b)",html:'<span class="lx-netflix">N</span>'},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#352020,#111115)",slug:"youtube",color:"FF0000"},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#173035,#101014)",slug:"tiktok",color:"ffffff"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#7887ff,#3e48a3)",slug:"discord",color:"ffffff"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#b184ff,#6133b2)",slug:"twitch",color:"ffffff"},{id:"prime",name:"prime video",bg:"linear-gradient(145deg,#173e70,#0b172b)",html:'<span class="lx-prime">prime<b>video</b></span>'},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#59e58b,#128a48)",slug:"whatsapp",color:"ffffff"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram",color:"ffffff",iconOnly:!0},{id:"x",name:"X",label:"X",bg:"linear-gradient(145deg,#38383d,#070708)",slug:"x",color:"ffffff"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b91ff,#1554ab)",slug:"facebook",color:"ffffff",iconOnly:!0},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#69caff,#147eaf)",slug:"telegram",color:"ffffff"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#267b50,#0b1911)",slug:"spotify",color:"1DB954"},{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#63aaff,#3052bb)",icon:"compass"},{id:"store",name:"Store",bg:"linear-gradient(145deg,#ffc45c,#d96b17)",icon:"store"},{id:"gallery",name:"Gallery",bg:"linear-gradient(145deg,#ff8096,#bd254b)",icon:"camera"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#57dfa1,#168052)",icon:"settings"}],fp={id:"gorilla-tag",name:"Gorilla Tag",label:"Gorilla Tag",bg:"#0b141a",html:'<img class="lx-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" draggable="false" style="width:100%;height:100%;object-fit:cover;border-radius:14px;display:block">',kind:"app"},Ji=n=>{let e=ye.find(t=>t.id===n);return e?e.el.querySelector(".win-body"):null},sv={youtube:()=>vn("youtube","YouTube","https://m.youtube.com/"),browser:()=>vn("browser",k("browser"),"https://duckduckgo.com/"),store:()=>vp(),gallery:()=>yp(),settings:()=>Bu(),discord:()=>vn("discord","Discord","https://discord.com/app"),netflix:()=>vn("netflix","Netflix","https://www.netflix.com/"),tiktok:()=>vn("tiktok","TikTok","https://www.tiktok.com/"),twitch:()=>vn("twitch","Twitch","https://www.twitch.tv/"),prime:()=>vn("prime","prime video","https://www.primevideo.com/"),whatsapp:()=>vn("whatsapp","WhatsApp","https://web.whatsapp.com/"),instagram:()=>vn("instagram","Instagram","https://www.instagram.com/"),x:()=>vn("x","X","https://x.com/"),facebook:()=>vn("facebook","Facebook","https://www.facebook.com/"),telegram:()=>vn("telegram","Telegram","https://web.telegram.org/"),spotify:()=>vn("spotify","Spotify","https://open.spotify.com/"),"gorilla-tag":()=>ja()},lp="apps",gl=null,gE=[["apps","Apps"],["horizon","Horizon+"]];function yE(){let n=ne("div","st"),t=`<div class="st-top"><img class="st-logo-img" src="./icons/nextvr-n.png" alt="NextVR"><div class="st-tabs">${gE.map(([i,s])=>`<button class="st-tab" data-tab="${i}" aria-selected="${lp===i}">${s}</button>`).join("")}</div><button class="st-ava" data-ava aria-label="Perfil">${te("user")}</button><button class="st-x" data-x aria-label="Fechar">${te("x")}</button></div>`;if(lp==="horizon")t+='<p class="st-note">Esta loja n\xE3o inclui uma assinatura Horizon+.</p>';else{let i=!!E.gorillaInstalled,s=gl!==null?`<div style="display:flex;align-items:center;gap:10px"><span style="font-size:12px;font-weight:700;color:#fb923c">Baixando... ${gl}%</span></div>`:i?`<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
             <span data-gorilla-installed="1" style="font-size:11px;font-weight:800;color:#4ade80;padding:4px 10px;border-radius:999px;background:rgba(34,197,94,.16);border:1px solid rgba(74,222,128,.35)">\u2713 Na Biblioteca de Apps</span>
             <button class="st-btn" data-launch-gorilla style="background:linear-gradient(135deg,#f97316,#ea580c);color:#fff">ABRIR GORILLA TAG</button>
           </div>`:'<button class="st-btn" data-install-gorilla style="background:linear-gradient(135deg,#f97316,#ea580c);color:#fff">BAIXAR</button>';t+=`
      <div class="st-gorilla-card" data-store-gorilla style="margin:6px 0 14px;padding:14px 16px;border-radius:16px;background:linear-gradient(145deg,rgba(255,138,43,.16),rgba(15,23,42,.88));border:1px solid rgba(255,138,43,.38);display:flex;align-items:center;justify-content:space-between;gap:14px">
        <div style="display:flex;align-items:center;gap:14px;min-width:0">
          <img class="st-gorilla-logo" src="./icons/gorilla-tag-logo.jpg" alt="Gorilla Tag" style="width:62px;height:62px;border-radius:14px;object-fit:cover;flex-shrink:0;box-shadow:0 6px 18px rgba(249,115,22,.36);border:1px solid rgba(255,255,255,.18)">
          <div style="min-width:0">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:15px;color:#f8fafc">Gorilla Tag</strong>
              <span style="font-size:10px;font-weight:800;padding:2px 8px;border-radius:999px;background:rgba(56,189,248,.16);color:#7dd3fc;border:1px solid rgba(56,189,248,.32)">Lentes ${ji.model}</span>
            </div>
            <div style="font-size:11.5px;color:#cbd5e1;margin-top:3px">Mapa da floresta 3D + bra\xE7os de Gorila com Hand Tracking nas lentes do NextVR.</div>
          </div>
        </div>
        <div style="flex-shrink:0">${s}</div>
      </div>
      <p class="st-note">Os apps est\xE3o na biblioteca \u2014 toque no bot\xE3o de 9 pontos da dock.
      Jogos de headset (PhoneXR) aparecem embarcados na Biblioteca quando o runtime os encontra.</p>
      <div class="st-row" style="max-width:340px"><button class="st-btn" data-openlib>ABRIR BIBLIOTECA</button></div>`}return n.innerHTML=t,n.addEventListener("click",i=>{let s=o=>i.target.closest(o),r;if(r=s("[data-tab]")){lp=r.dataset.tab,Rs();return}if(s("[data-x]")){let o=ye.find(a=>a.id==="store");o&&qt(o);return}if(s("[data-ava]")){ct("Perfil (demonstra\xE7\xE3o)");return}if(s("[data-openlib]")){xp();return}if(s("[data-install-gorilla]")){E.gorillaInstalled=1,Ye(),Ka("gorilla-tag",!0),jn(),gl=35,Rs(),setTimeout(()=>{gl=80,Rs()},120),setTimeout(()=>{gl=null,Rs(),jn(),ct("Gorilla Tag baixado! Adicionado \xE0 Biblioteca de Apps.")},260);return}if(s("[data-launch-gorilla]")){Ka("gorilla-tag"),ja();return}}),n}function Rs(){var t,i,s;let n=Ji("store");if(!n)return;let e=((t=n.querySelector(".st"))==null?void 0:t.scrollTop)||0;n.innerHTML="",n.appendChild(yE()),n.querySelector(".st").scrollTop=e,(s=(i=Se).invalidate)==null||s.call(i)}function vp(){var i,s,r,o;let n=ye.find(a=>a.id==="store");if(n)return Rs(),fn(n),(s=(i=Se).render)==null||s.call(i,gt,Me),n;let e=ne("div");e.style.cssText="height:100%";let t=nn({id:"store",title:"Store",node:e});return Rs(),(o=(r=Se).render)==null||o.call(r,gt,Me),t}var ku="recent",Ii="all",pp="",cp=["all","apps","games","recent"],vE=n=>({all:k("libAll"),apps:k("apps"),games:k("libGames"),recent:k("recents")})[n]||k("libAll");function Ka(n,e){yl=[n,...yl.filter(t=>t!==n)].slice(0,40),mE(),e||jn()}function xE(){var s;!oy().length&&((s=window.NativeXR)!=null&&s.xrLibrary)&&dy();let e=[...my(),...iv.map(r=>({...r,kind:"app"})),...E.gorillaInstalled?[fp]:[]];Ii==="games"&&(e=e.filter(r=>r.kind==="xr")),Ii==="games"&&E.gorillaInstalled&&(e=[...e,fp]),Ii==="apps"&&(e=e.filter(r=>r.kind==="app")),Ii==="recent"&&(e=e.filter(r=>yl.includes(r.id)));let t=pp.trim().toLowerCase();if(t&&(e=e.filter(r=>(r.name+" "+(r.label||"")).toLowerCase().includes(t))),ku==="az")return[...e].sort((r,o)=>r.name.localeCompare(o.name,"pt-BR"));let i=r=>{let o=yl.indexOf(r.id);return o<0?1e6:o};return[...e].sort((r,o)=>i(r)-i(o))}function bE(n){let e=n.slug?`<img class="logo" src="./icons/${n.slug}.svg" alt="" draggable="false" referrerpolicy="no-referrer" onerror="this.closest('button').classList.add('nologo');this.remove()">`:n.icon?`<span class="lib-icon">${te(n.icon)}</span>`:"",t=n.html?n.html:e||`<span class="nm">${n.label||n.name}</span>`,i=n.slug?`${e}<span class="nm fb">${n.label||n.name}</span>`:t,s=n.id==="gorilla-tag"?' style="width:100%;height:100%;display:block"':"";return`<button class="lib-tile" data-app="${n.id}" aria-label="Abrir ${n.name}"><span class="lib-cover" style="background:${n.bg}"><span class="lib-brand"${s}>${i}</span></span><span class="lib-label">${n.label||n.name}</span></button>`}function _E(){var l;let n=xE(),e=ne("div","lib"),t=vE(Ii),i=ye.find(c=>c.id==="library"),s=Ii==="games"?k("libGamesEmpty"):Ii==="recent"?k("libRecentEmpty"):k("appNoResults"),r=(c,u,d)=>`<button class="lib-rail-btn" data-lib-nav="${c}"
    aria-label="${ft(u)}" title="${ft(u)}" aria-pressed="${Ii===c}">${te(d)}</button>`;e.innerHTML=`<aside class="lib-rail" aria-label="${ft(k("apps"))}">
      ${r("all",k("libAll"),"appGrid")}
      ${r("games",k("libGames"),"controller")}
      ${r("recent",k("recents"),"timer")}
      <span class="lib-rail-spacer"></span>
      ${r("apps",k("apps"),"phone")}
    </aside>
    <section class="lib-main">
      <div class="lib-head">
        <h2 class="lib-title">${ft(k("apps"))}</h2>
        <div class="lib-searchbox">${te("search")}
          <input class="lib-search open" data-q aria-label="${ft(k("searchApps"))}"
            placeholder="${ft(k("searchApps"))}" value="${ft(pp)}">
        </div>
        <span class="lib-head-spacer"></span>
        <button class="lib-pill" data-sort aria-label="${ft(k("recents"))}">
          <span>${ku==="az"?"A\u2013Z":ft(k("recents"))}</span>${te("chevronDown")}
        </button>
        <button class="lib-pill" data-filter aria-label="${ft(k("libFilter"))}">
          <span>${ft(k("libFilter"))} \xB7 ${ft(t)} <i>(${n.length})</i></span>${te("chevronDown")}
        </button>
        <button class="lib-curve" data-lib-curve aria-label="${ft(k("win360"))}"
          title="${ft(k("win360"))}" aria-pressed="${!!(i!=null&&i.curve)}">360\xB0</button>
        <button class="lib-close" data-lib-close aria-label="${ft(k("close"))}" title="${ft(k("close"))}">${te("x")}</button>
        <button class="lib-repin" data-act="pin" aria-label="${ft(k("repin"))}" title="${ft(k("repin"))}">${te("crosshair")}</button>
      </div>
      <div class="lib-scroll">
        <div class="lib-grid">
          ${n.map(c=>c.kind==="xr"?gy(c):c.kind==="android"?uf(c.app):bE(c)).join("")}
          ${n.length?"":`<div class="lib-empty">${ft(s)}</div>`}
        </div>
      </div>
    </section>`;let o=yy();o&&((l=e.querySelector(".lib-scroll"))==null||l.prepend(o));let a=e.querySelector('[data-q]:not([data-q="android"])');return a&&(a.addEventListener("input",()=>{var u;pp=a.value,jn(!0);let c=(u=Ji("library"))==null?void 0:u.querySelector("[data-q]");c&&(c.focus(),c.setSelectionRange(c.value.length,c.value.length))}),a.addEventListener("focus",()=>si(!0,a))),e.addEventListener("click",c=>{let u=h=>c.target.closest(h),d;if(u("[data-lib-close]")){qt(ye.find(h=>h.id==="library"));return}if(d=u("[data-lib-nav]")){Ii=d.dataset.libNav,jn();return}if(u("[data-lib-curve]")){let h=ye.find(p=>p.id==="library");h&&(h.setCurve(h.curve>0?0:E.win360K),jn());return}if(u("[data-sort]")){ku=ku==="az"?"recent":"az",jn();return}if(u("[data-filter]")){Ii=cp[(cp.indexOf(Ii)+1)%cp.length],jn();return}if(d=u("[data-android]")){let h=d.dataset.android;hu(h),pu(h);return}if(d=u("[data-xr]")){let h=d.dataset.xr;ly()?fy():hy(h);return}if(d=u("[data-app]")){let h=[...iv,fp].find(g=>g.id===d.dataset.app);if(!h)return;Ka(h.id);let p=sv[h.id];p?p():ct(h.name+": sem endere\xE7o cadastrado");return}}),e}function jn(n){var i,s,r;let e=Ji("library");if(!e)return;let t=((i=e.querySelector(".lib-scroll"))==null?void 0:i.scrollTop)||0;e.innerHTML="",e.appendChild(_E()),e.querySelector(".lib-scroll").scrollTop=t,(r=(s=Se).invalidate)==null||r.call(s)}var Pu="Todos",up="",wE=["Todos","Jogos","Ferramentas","Redes Sociais","M\xEDdia","Produtividade"];function ME(n){let e=`${n.label||""} ${n.pkg||""}`.toLowerCase();return n.game||/game|jogo|minecraft|roblox|freefire|pubg|brawl|clash/.test(e)?"Jogos":/whatsapp|instagram|tiktok|discord|facebook|telegram|snapchat|reddit|messenger|social/.test(e)?"Redes Sociais":/youtube|netflix|spotify|prime video|music|música|video|vídeo|camera|câmera|photos|fotos|gallery|galeria/.test(e)?"M\xEDdia":/gmail|mail|drive|docs|office|calendar|agenda|notes|notas|calculator|calculadora|keep|word|excel/.test(e)?"Produtividade":"Ferramentas"}function mp(n){var u;cf(!1);let e=((u=n.querySelector(".android-app-scroll"))==null?void 0:u.scrollTop)||0;n.innerHTML="",n.classList.add("android-launcher");let t=ne("div","android-launcher-head");t.innerHTML=`<div class="android-launcher-brand"><span class="android-robot">${te("android")}</span><div><h2>Apps do Android</h2><p class="sub">Aplicativos instalados no aparelho, separados do NextVR</p></div></div><div class="android-launcher-actions"><label class="android-search">${te("search")}<input type="search" placeholder="Buscar apps Android" aria-label="Buscar apps Android"></label><button class="android-refresh" type="button" aria-label="Atualizar apps" title="Atualizar apps">${te("refresh")}</button></div>`,t.querySelector(".android-search input").value=up;let i=ty(),s=ne("div","android-categories"),r=wE.map(d=>`<button class="android-category" data-category="${d}" aria-pressed="${Pu===d}">${d}</button>`).join("");s.innerHTML=r;let o=ne("div","android-results");o.innerHTML='<b>APPS INSTALADOS</b><span class="android-results-count"></span>';let a=ne("div","android-app-scroll"),l=ne("div","android-app-grid"),c=()=>{let d=up.trim().toLocaleLowerCase("pt-BR"),h=iy().filter(g=>{let y=Pu==="Todos"||ME(g)===Pu,f=!d||`${g.label||""} ${g.pkg||""}`.toLocaleLowerCase("pt-BR").includes(d);return y&&f}),p=o.querySelector(".android-results-count");p&&(p.textContent=`${h.length} ${h.length===1?"app":"apps"}`),l.innerHTML=h.length?h.map(g=>uf(g)).join(""):`<div class="android-empty">${k("noAndroidApps")}</div>`};c(),a.appendChild(l),n.append(t),i&&n.appendChild(i),n.append(s,o,a),a.scrollTop=e,n.oninput=d=>{d.target.matches(".android-search input")&&(up=d.target.value,c())},n.onclick=d=>{let h=d.target.closest("[data-category]");if(h){Pu=h.dataset.category,s.querySelectorAll("[data-category]").forEach(g=>g.setAttribute("aria-pressed",String(g===h))),c();return}if(d.target.closest(".android-refresh")){cf(!0),c();return}let p=d.target.closest("[data-android]");p&&(hu(p.dataset.android),pu(p.dataset.android))}}function Fu(){let n=Ji("shizuku");if(n)return mp(n),fn(ye.find(t=>t.id==="shizuku"));let e=ne("div","android-launcher");return mp(e),nn({id:"shizuku",title:"Apps do Android",node:e})}function xp(){var i,s,r,o;let n=ye.find(a=>a.id==="library");if(n)return jn(),fn(n),(s=(i=Se).render)==null||s.call(i,gt,Me),n;let e=ne("div");e.style.cssText="height:100%";let t=nn({id:"library",title:k("apps"),node:e,w:1040,h:660,chrome:!1,resizable:!1});return jn(),(o=(r=Se).render)==null||o.call(r,gt,Me),t}var SE=[{id:"browser",name:"Browser",bg:"linear-gradient(145deg,#818cf8,#6366f1)",icon:"compass"},{id:"settings",name:"Settings",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",icon:"settings"},{id:"spotify",name:"Spotify",bg:"linear-gradient(145deg,#1db954,#0b3b1e)",slug:"spotify"},{id:"twitch",name:"Twitch",bg:"linear-gradient(145deg,#a855f7,#581c87)",slug:"twitch"},{id:"youtube",name:"YouTube",bg:"linear-gradient(145deg,#ffffff,#e2e8f0)",slug:"youtube",lightBg:!0},{id:"tiktok",name:"TikTok",bg:"linear-gradient(145deg,#18181b,#09090b)",slug:"tiktok"},{id:"instagram",name:"Instagram",bg:"linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 80%,#4f5bd5)",slug:"instagram"},{id:"facebook",name:"Facebook",bg:"linear-gradient(145deg,#3b82f6,#1d4ed8)",slug:"facebook"},{id:"telegram",name:"Telegram",bg:"linear-gradient(145deg,#38bdf8,#0284c7)",slug:"telegram"},{id:"x",name:"X",bg:"linear-gradient(145deg,#18181b,#050507)",slug:"x"},{id:"discord",name:"Discord",bg:"linear-gradient(145deg,#6366f1,#4338ca)",slug:"discord"},{id:"whatsapp",name:"WhatsApp",bg:"linear-gradient(145deg,#22c55e,#15803d)",slug:"whatsapp"},{id:"shizuku",name:"My apps",bg:"linear-gradient(145deg,#f97316,#ea580c)",icon:"appGrid"}],Zi="all",Ou="recent",gp="",$y='<svg class="ui-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',AE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M5 19h14"/></svg>',EE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="4 5 20 5 14 12 14 19 10 17 10 12 4 5"/></svg>',TE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M4 12h7M4 17h4M17 7v11m0 0-3-3m3 3 3-3"/></svg>',RE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 14.5c0-3 2-5.5 4.2-5.5 1.8 0 3.3 1.8 4.8 4.2 1.5 2.4 2.6 3.3 4 3.3 1.4 0 2.5-1.2 2.5-3 0-2.5-1.6-4.5-3.6-4.5-1.5 0-2.7 1.1-4.2 3.4-1.5 2.3-2.9 4.1-4.8 4.1-1.7 0-2.9-.8-2.9-2z"/></svg>',CE='<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1.5"/><rect x="10" y="5" width="5" height="14" rx="1.5"/><rect x="17" y="5" width="4" height="14" rx="1.2"/></svg>';function LE(){let n=SE.map(t=>({kind:"builtin",...t}));(Zi==="downloads"||Zi==="worlds")&&E.gorillaInstalled&&(n=[{kind:"builtin",id:"gorilla-tag",name:"Gorilla Tag",bg:"#0d1b12",imgUrl:"./icons/gorilla-tag-logo.jpg"},...n]);let e=gp.trim().toLowerCase();return e&&(n=n.filter(t=>t.name.toLowerCase().includes(e))),Ou==="az"&&(n=[...n].sort((t,i)=>t.name.localeCompare(i.name,"pt-BR"))),n}function PE(n){if(n.kind==="android"){let t=(n.name||"?").trim().slice(0,2).toUpperCase(),i=n.iconUrl?`<img class="spatial-app-img" src="${ft(n.iconUrl)}" alt="" draggable="false" onerror="this.remove()">`:`<span class="spatial-app-init">${ft(t)}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-android="${ft(n.pkg)}" title="${ft(n.name)}">
      <span class="spatial-app-circle spatial-app-circle--android">${i}</span>
      <span class="spatial-app-label">${ft(n.name)}</span>
      <i class="spatial-app-tick" aria-hidden="true"></i>
    </button>`}let e=n.imgUrl?`<img class="spatial-app-img" src="${ft(n.imgUrl)}" alt="" draggable="false">`:n.slug?`<img class="spatial-app-svg" src="./icons/${n.slug}.svg" alt="" draggable="false" onerror="this.remove()">`:n.icon?`<span class="spatial-app-glyph">${te(n.icon)}</span>`:n.html||`<span class="spatial-app-init">${ft(n.name.slice(0,2))}</span>`;return`<button type="button" class="spatial-app-tile" data-spatial-builtin="${ft(n.id)}" title="${ft(n.name)}">
    <span class="spatial-app-circle ${n.lightBg?"spatial-app-circle--light":""}" style="background:${n.bg}">${e}</span>
    <span class="spatial-app-label">${ft(n.name)}</span>
    <i class="spatial-app-tick" aria-hidden="true"></i>
  </button>`}function IE(){let n=LE(),e=[];for(let d=0;d<n.length;d+=5)e.push(n.slice(d,d+5));let t=Xi(),i=Math.round(Math.max(0,Math.min(1,t.batteryLevel??.9))*100),s=t.time&&t.time!=="--:--"?t.time:"9:48",r=E.profileAvatar?`<img src="${ft(E.profileAvatar)}" alt="" class="spatial-hz-avatar-img" draggable="false" />`:te("user"),o=ne("div","spatial-launcher-root");o.innerHTML=`
    <header class="spatial-hz-header">
      <h2 class="spatial-hz-title">Library</h2>
      <label class="spatial-hz-search">
        ${te("search")}
        <input type="text" class="spatial-hz-search-input" data-spatial-search placeholder="Search" value="${ft(gp)}" aria-label="Search Library" />
      </label>
    </header>

    <div class="spatial-launcher-stage">
      <aside class="spatial-hz-rail" aria-label="Library navigation">
        <button type="button" class="spatial-hz-nav-item ${Zi==="all"?"on":""}" data-spatial-nav="all">
          ${$y}<span>All</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Zi==="apps"?"on":""}" data-spatial-nav="apps">
          ${te("appGrid")}<span>Apps</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Zi==="worlds"?"on":""}" data-spatial-nav="worlds">
          ${te("location")}<span>Worlds</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Zi==="horizon"?"on":""}" data-spatial-nav="horizon">
          ${te("refresh")}<span>Horizon+</span>
        </button>
        <button type="button" class="spatial-hz-nav-item ${Zi==="downloads"?"on":""}" data-spatial-nav="downloads">
          ${AE}<span>Downloads</span>
        </button>
        <div class="spatial-hz-rail-divider" aria-hidden="true"></div>
        <button type="button" class="spatial-hz-nav-item spatial-hz-nav-item--store" data-spatial-act="store">
          <span class="spatial-hz-store-badge">${te("store")}</span><span>Store</span>
        </button>
      </aside>

      <div class="spatial-honeycomb" role="list">
        ${e.map((d,h)=>`
          <div class="spatial-row spatial-row--five" data-row="${h}">
            ${d.map(PE).join("")}
          </div>
        `).join("")}
      </div>

      <aside class="spatial-hz-filters" aria-label="Filters and sorting">
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="filter" title="Filter: Installed">
          ${EE}<span>Filter: Insta...</span>${te("chevronDown")}
        </button>
        <button type="button" class="spatial-hz-filter-btn" data-spatial-act="sort" title="Sort">
          ${TE}<span>Sort: ${Ou==="az"?"A\u2013Z":"Recen..."}</span>${te("chevronDown")}
        </button>
      </aside>
    </div>

    <footer class="spatial-hz-bottom" aria-label="Horizon bar">
      <div class="spatial-hz-bot-left">
        <button type="button" class="spatial-hz-game-pill" data-spatial-act="store" title="Store">${te("controller")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="env" title="C\xE2mera Traseira (Ambiente Real)">${te("camera")}</button>
      </div>

      <div class="spatial-hz-bot-center">
        <div class="spatial-hz-bot-main">
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="recenter" title="Recentralizar">${RE}</button>
          <button type="button" class="spatial-hz-home-circle" data-spatial-nav="all" title="Library">${$y}</button>
          <button type="button" class="spatial-hz-icon-btn" data-spatial-act="close" title="Alternar para Dock">${CE}</button>
        </div>
        <div class="spatial-hz-bot-status">
          ${te("wifi")}
          <span data-spatial-clock>${ft(s)}</span>
          <span class="spatial-hz-bat-pill"><i style="width:${i}%"></i></span>
          <span data-spatial-bat>${i}%</span>
        </div>
      </div>

      <div class="spatial-hz-bot-right">
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="library" title="Biblioteca Completa">${te("notification")}</button>
        <button type="button" class="spatial-hz-icon-btn" data-spatial-act="settings" title="Configura\xE7\xF5es">${te("sliders")}</button>
        <button type="button" class="spatial-hz-avatar-btn" data-spatial-act="settings" title="Perfil">${r}</button>
      </div>
    </footer>

    <div class="browser-tab-popup spatial-browser-popup" data-browser-tab-menu="spatial" hidden>
      <button type="button" class="browser-tab-opt" data-browser-opt="new-tab">+ NOVA GUIA</button>
      <button type="button" class="browser-tab-opt" data-browser-opt="incognito-tab">+ GUIA AN\xD4NIMA</button>
    </div>
  `;let a=o.querySelector("[data-spatial-search]");a&&a.addEventListener("input",()=>{gp=a.value,Gr()});let l=o.querySelector('[data-spatial-builtin="browser"]'),c=o.querySelector('[data-browser-tab-menu="spatial"]'),u=null;if(l&&c){l.addEventListener("pointerdown",()=>{clearTimeout(u),u=setTimeout(()=>{var h,p,g,y,f,m;l.dataset.holdConsumed="1",c.hidden=!1,(p=(h=window.NativeXR)==null?void 0:h.click)==null||p.call(h),(y=(g=Se).invalidate)==null||y.call(g),(m=(f=Se).render)==null||m.call(f,gt,Me)},2e3)});let d=()=>{clearTimeout(u),u=null};l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d),l.addEventListener("pointerleave",d)}return o.addEventListener("click",d=>{var m;let h=d.target.closest("[data-browser-opt]");if(h){d.stopPropagation();let x=h.dataset.browserOpt||"new-tab";c&&(c.hidden=!0),ev(x);return}let p=d.target.closest("[data-spatial-builtin]");if(p){if(p.dataset.holdConsumed==="1"){p.dataset.holdConsumed="0";return}c&&!c.hidden&&(c.hidden=!0);let x=p.dataset.spatialBuiltin;if(x==="shizuku"){Fu();return}if(x==="gorilla-tag"){ja();return}let v=sv[x];v&&v();return}let g=d.target.closest("[data-spatial-android]");if(g){let x=g.dataset.spatialAndroid;hu(x),pu(x);return}let y=d.target.closest("[data-spatial-nav]");if(y){Zi=y.dataset.spatialNav||"all",Gr();return}let f=(m=d.target.closest("[data-spatial-act]"))==null?void 0:m.dataset.spatialAct;f==="settings"?Bu():f==="store"?vp():f==="library"?xp():f==="recenter"?Hi():f==="sort"?(Ou=Ou==="az"?"recent":"az",Gr()):f==="filter"?(Zi=Zi==="downloads"?"all":"downloads",Gr()):f==="env"?(E.env="passthrough",Ye(E),gi(!0)):f==="close"&&_p(!1)}),o}function Gr(){var i,s,r;let n=Ji("spatial-launcher");if(!n)return;let e=((i=n.querySelector(".spatial-honeycomb"))==null?void 0:i.scrollTop)||0;n.innerHTML="",n.appendChild(IE());let t=n.querySelector(".spatial-honeycomb");t&&(t.scrollTop=e),(r=(s=Se).invalidate)==null||r.call(s)}function bp(){var i,s,r,o,a,l,c,u;E.env="passthrough",gi(!0);let n=ye.find(d=>d.id==="spatial-launcher");if(n)return Gr(),(s=(i=Se).invalidate)==null||s.call(i),(o=(r=Se).render)==null||o.call(r,gt,Me),n;let e=ne("div","spatial-launcher-host"),t=nn({id:"spatial-launcher",title:"Spatial App",node:e,w:1040,h:660,onboarding:!0,chrome:!1,resizable:!1});return t.handle.hidden=!0,t.resizeHandle.hidden=!0,Gr(),(l=(a=Se).invalidate)==null||l.call(a),(u=(c=Se).render)==null||u.call(c,gt,Me),t}function _p(n){var e,t,i,s;if(E.spatialLauncher=n?1:0,E.spatialLauncher&&(E.env="passthrough",gi(!0)),Ye(E),E.spatialLauncher)Cn(!0),pn(!1),bp();else{let r=ye.find(o=>o.id==="spatial-launcher");r&&qt(r),Cn(!1),!Wr&&!Ki&&!Cs&&pn(!0),(t=(e=Se).invalidate)==null||t.call(e),(s=(i=Se).render)==null||s.call(i,gt,Me)}}We("spatialLauncher",n=>_p(n));We("device-status",n=>{let e=Ji("spatial-launcher");if(!e)return;let t=e.querySelector("[data-spatial-clock]");t&&(n!=null&&n.time)&&n.time!=="--:--"&&(t.textContent=n.time);let i=e.querySelector("[data-spatial-bat]"),s=e.querySelector(".spatial-hz-bat-pill i");if(typeof(n==null?void 0:n.batteryLevel)=="number"){let r=Math.round(Math.max(0,Math.min(1,n.batteryLevel))*100);i&&(i.textContent=`${r}%`),s&&(s.style.width=`${r}%`)}});var or=Object.freeze({compass:te("compass"),store:te("store"),people:te("people"),camera:te("camera"),gear:te("settings"),play:te("play"),shizuku:te("shizuku"),vision:te("vision")});function NE(){gi(E.env!=="passthrough")}function rv(){let n=cu("virtual-environment");if(!n)return;let e=E.env!=="passthrough";n.setAttribute("aria-pressed",String(e)),n.title=`${k("envVirtual")} \xB7 ${e?k("on"):k("off")}`}function zu(){U0([{kind:"avatar",id:"profile",label:k("profile"),run:FE},{kind:"status",id:"status",label:k("settings"),run:fE},{kind:"tool",id:"virtual-environment",label:k("envVirtual"),svg:or.vision,run:NE},{kind:"spacer"},{id:"browser",win:"browser",label:k("browser"),svg:or.compass,bg:"linear-gradient(145deg,#5a9bff,#2a5ee0)",run:()=>vn("browser",k("browser"),"https://duckduckgo.com/")},{id:"store",win:"store",label:k("store"),svg:or.store,bg:"linear-gradient(145deg,#ffb544,#e8741a)",run:vp},{id:"discord",win:"discord",label:"Discord",svg:or.people,bg:"linear-gradient(145deg,#ad82f4,#6c45c9)",run:()=>vn("discord","Discord","https://discord.com/app")},{id:"gallery",win:"gallery",label:k("gallery"),svg:or.camera,bg:"linear-gradient(145deg,#ff6584,#d4204e)",run:yp},{id:"settings",win:"control-center",label:k("settings"),svg:or.gear,bg:"linear-gradient(145deg,#45d894,#1f9d63)",run:Bu},{id:"youtube",win:"youtube",label:"YouTube",svg:or.play,bg:"linear-gradient(145deg,#ff6b6b,#d63c3c)",run:()=>vn("youtube","YouTube","https://m.youtube.com/")},{id:"shizuku",win:"shizuku",label:k("shizuku"),svg:or.shizuku,bg:"linear-gradient(145deg,#4fd1c5,#1a8f87)",run:Fu},{id:"library",win:"library",launcher:!0,label:k("apps"),run:xp}]),rv()}We("env",rv);We("lang",zu);function DE(){let n=document.querySelector('.dock [data-id="shizuku"], .dock-app[data-id="shizuku"]');if(!n)return;let e=ny(),t=n.querySelector(".dock-badge");if(!e){t==null||t.remove();return}t||(t=ne("i","dock-badge"),n.appendChild(t)),t.textContent=String(e)}sy();xy();uy();We("appsState",()=>{DE(),av()});We("xr",()=>{av();let n=Ji("settings");n!=null&&n.querySelector("[data-xr-page]")&&tv(n.querySelector("[data-xr-page]"))});var dp=0;function av(){dp||(dp=setTimeout(()=>{dp=0,Ji("library")&&jn(),Ji("spatial-launcher")&&Gr();let n=Ji("shizuku");n&&mp(n)},500))}var kE=document.getElementById("boot"),vR=document.getElementById("bootGo"),Cs=null;kE.hidden=!0;function ov(){let n=(navigator.language||"pt").toLowerCase();return n.startsWith("en")?n.includes("gb")?"en-GB":"en":n.startsWith("es")?n.includes("-es")?"es-ES":"es":"pt"}function lv(n,e,t=!1){let i=ne("div",t?"langwin slim":"langwin"),s=o=>Bc(o).label;return(()=>{let o=t?"":`<div class="lq-hero">
         <img class="lq-logo" src="./icons/nextvr-n.png" alt="NextVR">
         <h1 class="lq-welcome">Bem-vindo<br>ao NextVR</h1>
         <p class="lq-tag">Aponte e pin\xE7a<br>para escolher.</p>
       </div>`;i.innerHTML=`${t?`<img class="lq-logo-sm" src="./icons/nextvr-n.png" alt="NextVR"><div class="lq-pickrow"><span class="lq-pick">${s(n)}</span></div>`:""}
      <div class="lq-main">
        ${o}
        <div class="lang-options" role="list">${No.map(a=>`<button class="lang-option${a.table?"":" soon"}" data-lang="${a.id}"
            ${a.table?"":'disabled aria-disabled="true"'}
            aria-pressed="${a.id===n}"><span>${a.label}</span>${a.table?"":`<i>${k("langSoon")}</i>`}</button>`).join("")}</div>
      </div>
      <div class="lq-foot"><span class="lang-tracking">${t?"Escolha o idioma.":"Aponte com a m\xE3o e fa\xE7a uma pin\xE7a."}</span>
        <button class="lq-go">${k("langContinue")}</button></div>`,i.querySelectorAll("[data-lang]").forEach(a=>a.onclick=()=>e(a.dataset.lang)),i.querySelector(".lq-go").onclick=()=>e(n)})(),i}function OE(){var e,t;let n=nn({id:"language",title:"Next VR",w:390,h:500,onboarding:!0,node:lv(E.lang||ov(),UE)});return(e=n.el.querySelector('[data-act="close"]'))==null||e.remove(),(t=n.el.querySelector('[data-act="pin"]'))==null||t.remove(),n}We("handframe",n=>{let e=Cs==null?void 0:Cs.el.querySelector(".lang-tracking"),t=n.hands.length?`M\xE3os detectadas: ${n.hands.length}`:"Aguardando uma m\xE3o\u2026";e&&e.textContent!==t&&(e.textContent=t)});async function UE(n){if(!Cs)return;Tr(n),Cs&&(qt(Cs),Cs=null),pn(!0),document.getElementById("stat").hidden=!1,document.getElementById("perm").hidden=!1;let e=Rr(),t=E.handsOn?ps():Promise.resolve(!1);await Promise.allSettled([e,t]),setTimeout(()=>Hi(),280)}var Wr=null,Ki=null,Hu=new URLSearchParams(location.search).get("fullscreen")==="1"||location.hash.includes("fullscreen=1");function cv(){var e;if(E.gorillaInstalled=1,Ye(E),Ka("gorilla-tag",!0),jn(),Rs(),Hu&&de&&typeof((e=window.NativeXR)==null?void 0:e.startVrSession)=="function"){E.autoLaunchGorilla=1,Ye(E),vl();return}vl(),ja()}We("gorilla-installed",()=>{E.gorillaInstalled=1,Ye(E),Ka("gorilla-tag",!0),jn(),Rs()});function uv(){Ki&&Ki.remove();let n=document.createElement("div");return n.id="entry-fullscreen",n.appendChild(Mf({fullscreen:!0,onStart:vl,onLaunchGorilla:cv,getStatus:Xi})),document.body.appendChild(n),Ki=n,n}function dv(){return nn({id:"entry-menu",title:"NextVR",w:840,h:525,chrome:!1,resizable:!1,onboarding:!0,node:Mf({fullscreen:!1,onStart:vl,onLaunchGorilla:cv,getStatus:Xi})})}async function vl(n=!1){var r,o,a,l,c,u,d,h,p,g,y,f,m;let e=n===!0;E.lang||Tr(ov()||"pt");let t=!e&&Hu&&de&&typeof((r=window.NativeXR)==null?void 0:r.startVrSession)=="function";if(Ki&&!t&&(Ki.remove(),Ki=null),Wr?(qt(Wr),Wr=null):qt("entry-menu"),E.spatialLauncher?(Cn(!0),pn(!1),bp()):(qt("spatial-launcher"),Cn(!1),pn(!0)),document.getElementById("stat").hidden=!1,de||(document.getElementById("perm").hidden=!1),(a=(o=window.NativeXR)==null?void 0:o.handVisuals)==null||a.call(o,!!E.handDraw),(c=(l=window.NativeXR)==null?void 0:l.wideCamera)==null||c.call(l,!!E.wideCamera),e||(d=(u=window.NativeXR)==null?void 0:u.startVrSession)==null||d.call(u,JSON.stringify(E)),(p=(h=Se).invalidate)==null||p.call(h),(y=(g=Se).render)==null||y.call(g,gt,Me),t){(m=(f=Ki==null?void 0:Ki.querySelector(".entry-menu-root"))==null?void 0:f.resetToHome)==null||m.call(f);return}let i=Rr(),s=E.handsOn?ps():Promise.resolve(!1);await Promise.allSettled([i,s]),de||setTimeout(()=>Hi(),280)}function FE(){var n;return de&&((n=window.NativeXR)!=null&&n.openEntryMenu)?(window.NativeXR.openEntryMenu(),null):(pn(!1),document.getElementById("stat").hidden=!0,Hu||!de?uv():(Wr=dv(),Wr))}var Yy=!1;window.nextvrEnterWorkspace=n=>{var e,t,i,s,r,o,a,l,c,u;if(n)try{let d=typeof n=="string"?JSON.parse(n):n;d.handDraw!==void 0&&(E.handDraw=d.handDraw?1:0),d.showFps!==void 0&&(E.showFps=d.showFps?1:0),d.mediaVolume!==void 0&&(E.mediaVolume=d.mediaVolume),d.brightness!==void 0&&(E.brightness=d.brightness),d.quality!==void 0&&(E.quality=d.quality,Ce("quality")),d.wideCamera!==void 0&&(E.wideCamera=d.wideCamera?1:0),d.spatialLauncher!==void 0&&(E.spatialLauncher=d.spatialLauncher?1:0),d.dockSnapSlot!==void 0&&(E.dockSnapSlot=d.dockSnapSlot?1:0),d.fingerTouch!==void 0&&(E.fingerTouch=d.fingerTouch?1:0),d.sixdof!==void 0&&(E.sixdof=d.sixdof?1:0,E.sixdof||Ht.reset(),(t=(e=window.NativeXR)==null?void 0:e.setSixDofEnabled)==null||t.call(e,E.sixdof!==0)),d.gorillaInstalled!==void 0&&(E.gorillaInstalled=d.gorillaInstalled?1:0,E.gorillaInstalled&&(Ka("gorilla-tag",!0),jn(),Rs())),d.profileName!==void 0&&(E.profileName=d.profileName),d.profileAvatar!==void 0&&(E.profileAvatar=d.profileAvatar),d.lang&&Tr(d.lang),!E.spatialLauncher&&d.entryEnvChosen&&d.env&&d.env!=="passthrough"?zi(d.env):(E.env="passthrough",gi(!0));let h=!!d.autoLaunchGorilla;E.autoLaunchGorilla&&(E.autoLaunchGorilla=0),Ye(E),zu(),(s=(i=window.NativeXR)==null?void 0:i.handVisuals)==null||s.call(i,!!E.handDraw),(o=(r=window.NativeXR)==null?void 0:r.wideCamera)==null||o.call(r,!!E.wideCamera),(l=(a=window.NativeXR)==null?void 0:a.setFingerTouch)==null||l.call(a,E.fingerTouch!==0),h&&setTimeout(()=>ja(),120)}catch{}else de&&(gi(!0),(u=(c=window.NativeXR)==null?void 0:c.setFingerTouch)==null||u.call(c,E.fingerTouch!==0));vl(!0),Yy||(Yy=!0,setTimeout(()=>Hi(),220))};We("profile-updated",()=>zu());document.getElementById("btnGyro").onclick=()=>Rr();document.getElementById("btnHand").onclick=()=>e0()?Ch():ps();We("hands",n=>{document.getElementById("dotHand").classList.toggle("on",!!n)});We("gyro",n=>{document.getElementById("dotGyro").classList.toggle("on",!!n)});zu();var jy=new URLSearchParams(location.search).get("onboarding")||(location.hash.includes("onboarding=language")?"language":location.hash.includes("onboarding=skip")?"skip":""),Iu,Zy,Nu,Ky,Du,Jy;Hu?(pn(!1),document.getElementById("stat").hidden=!0,(Zy=(Iu=window.NativeXR)==null?void 0:Iu.handVisuals)==null||Zy.call(Iu,!!E.handDraw),uv()):jy==="language"?(pn(!1),document.getElementById("stat").hidden=!0,Cs=OE()):jy==="skip"?(E.spatialLauncher?(Cn(!0),pn(!1),bp()):(Cn(!1),pn(!0)),de&&((Ky=(Nu=window.NativeXR)==null?void 0:Nu.wideCamera)==null||Ky.call(Nu,!!E.wideCamera),Rr(),E.handsOn&&ps()),document.getElementById("perm").hidden=!1,setTimeout(()=>Hi(),280)):(pn(!1),document.getElementById("stat").hidden=!0,de&&((Jy=(Du=window.NativeXR)==null?void 0:Du.handVisuals)==null||Jy.call(Du,!!E.handDraw),Rr(),E.handsOn&&ps()),Wr=dv());de&&(document.getElementById("perm").hidden=!0,window.nextvrResume=()=>{var n,e;(e=(n=Se).invalidate)==null||e.call(n),Rr(),E.handsOn&&ps()},window.nextvrSuspend=()=>{Ch()},We("hands",()=>{document.getElementById("perm").hidden=!0}));We("game:settings",()=>Bu());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
